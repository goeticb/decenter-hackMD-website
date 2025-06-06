import {
  require_browser
} from "./chunk-Z4JS4WZC.js";
import {
  property2 as property
} from "./chunk-COKH4YWJ.js";
import {
  customElement,
  resetStyles
} from "./chunk-ETM4QMGY.js";
import {
  LitElement,
  css,
  html,
  svg
} from "./chunk-QK2VKFPU.js";
import {
  __toESM
} from "./chunk-64NT3AJW.js";

// node_modules/@reown/appkit-ui/dist/esm/src/utils/QrCode.js
var import_qrcode = __toESM(require_browser(), 1);
var CONNECTING_ERROR_MARGIN = 0.1;
var CIRCLE_SIZE_MODIFIER = 2.5;
var QRCODE_MATRIX_MARGIN = 7;
function isAdjecentDots(cy, otherCy, cellSize) {
  if (cy === otherCy) {
    return false;
  }
  const diff = cy - otherCy < 0 ? otherCy - cy : cy - otherCy;
  return diff <= cellSize + CONNECTING_ERROR_MARGIN;
}
function getMatrix(value, errorCorrectionLevel) {
  const arr = Array.prototype.slice.call(import_qrcode.default.create(value, { errorCorrectionLevel }).modules.data, 0);
  const sqrt = Math.sqrt(arr.length);
  return arr.reduce((rows, key, index) => (index % sqrt === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
}
var QrCodeUtil = {
  generate({ uri, size, logoSize, dotColor = "#141414" }) {
    const edgeColor = "transparent";
    const strokeWidth = 5;
    const dots = [];
    const matrix = getMatrix(uri, "Q");
    const cellSize = size / matrix.length;
    const qrList = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ];
    qrList.forEach(({ x, y }) => {
      const x1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * x;
      const y1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * y;
      const borderRadius = 0.45;
      for (let i = 0; i < qrList.length; i += 1) {
        const dotSize = cellSize * (QRCODE_MATRIX_MARGIN - i * 2);
        dots.push(svg`
            <rect
              fill=${i === 2 ? dotColor : edgeColor}
              width=${i === 0 ? dotSize - strokeWidth : dotSize}
              rx= ${i === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
              ry= ${i === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
              stroke=${dotColor}
              stroke-width=${i === 0 ? strokeWidth : 0}
              height=${i === 0 ? dotSize - strokeWidth : dotSize}
              x= ${i === 0 ? y1 + cellSize * i + strokeWidth / 2 : y1 + cellSize * i}
              y= ${i === 0 ? x1 + cellSize * i + strokeWidth / 2 : x1 + cellSize * i}
            />
          `);
      }
    });
    const clearArenaSize = Math.floor((logoSize + 25) / cellSize);
    const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2;
    const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1;
    const circles = [];
    matrix.forEach((row, i) => {
      row.forEach((_, j) => {
        if (matrix[i][j]) {
          if (!(i < QRCODE_MATRIX_MARGIN && j < QRCODE_MATRIX_MARGIN || i > matrix.length - (QRCODE_MATRIX_MARGIN + 1) && j < QRCODE_MATRIX_MARGIN || i < QRCODE_MATRIX_MARGIN && j > matrix.length - (QRCODE_MATRIX_MARGIN + 1))) {
            if (!(i > matrixMiddleStart && i < matrixMiddleEnd && j > matrixMiddleStart && j < matrixMiddleEnd)) {
              const cx = i * cellSize + cellSize / 2;
              const cy = j * cellSize + cellSize / 2;
              circles.push([cx, cy]);
            }
          }
        }
      });
    });
    const circlesToConnect = {};
    circles.forEach(([cx, cy]) => {
      var _a;
      if (circlesToConnect[cx]) {
        (_a = circlesToConnect[cx]) == null ? void 0 : _a.push(cy);
      } else {
        circlesToConnect[cx] = [cy];
      }
    });
    Object.entries(circlesToConnect).map(([cx, cys]) => {
      const newCys = cys.filter((cy) => cys.every((otherCy) => !isAdjecentDots(cy, otherCy, cellSize)));
      return [Number(cx), newCys];
    }).forEach(([cx, cys]) => {
      cys.forEach((cy) => {
        dots.push(svg`<circle cx=${cx} cy=${cy} fill=${dotColor} r=${cellSize / CIRCLE_SIZE_MODIFIER} />`);
      });
    });
    Object.entries(circlesToConnect).filter(([_, cys]) => cys.length > 1).map(([cx, cys]) => {
      const newCys = cys.filter((cy) => cys.some((otherCy) => isAdjecentDots(cy, otherCy, cellSize)));
      return [Number(cx), newCys];
    }).map(([cx, cys]) => {
      cys.sort((a, b) => a < b ? -1 : 1);
      const groups = [];
      for (const cy of cys) {
        const group = groups.find((item) => item.some((otherCy) => isAdjecentDots(cy, otherCy, cellSize)));
        if (group) {
          group.push(cy);
        } else {
          groups.push([cy]);
        }
      }
      return [cx, groups.map((item) => [item[0], item[item.length - 1]])];
    }).forEach(([cx, groups]) => {
      groups.forEach(([y1, y2]) => {
        dots.push(svg`
              <line
                x1=${cx}
                x2=${cx}
                y1=${y1}
                y2=${y2}
                stroke=${dotColor}
                stroke-width=${cellSize / (CIRCLE_SIZE_MODIFIER / 2)}
                stroke-linecap="round"
              />
            `);
      });
    });
    return dots;
  }
};

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-qr-code/styles.js
var styles_default = css`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-qr-code/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DEFAULT_ICON_COLOR = "#3396ff";
var WuiQrCode = class WuiQrCode2 extends LitElement {
  constructor() {
    super(...arguments);
    this.uri = "";
    this.size = 0;
    this.theme = "dark";
    this.imageSrc = void 0;
    this.alt = void 0;
    this.arenaClear = void 0;
    this.farcaster = void 0;
  }
  render() {
    this.dataset["theme"] = this.theme;
    this.dataset["clear"] = String(this.arenaClear);
    this.style.cssText = `
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color ?? DEFAULT_ICON_COLOR}
    `;
    return html`${this.templateVisual()} ${this.templateSvg()}`;
  }
  templateSvg() {
    const size = this.theme === "light" ? this.size : this.size - 16 * 2;
    return svg`
      <svg height=${size} width=${size}>
        ${QrCodeUtil.generate({
      uri: this.uri,
      size,
      logoSize: this.arenaClear ? 0 : size / 4,
      dotColor: this.color
    })}
      </svg>
    `;
  }
  templateVisual() {
    if (this.imageSrc) {
      return html`<wui-image src=${this.imageSrc} alt=${this.alt ?? "logo"}></wui-image>`;
    }
    if (this.farcaster) {
      return html`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`;
    }
    return html`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
  }
};
WuiQrCode.styles = [resetStyles, styles_default];
__decorate([
  property()
], WuiQrCode.prototype, "uri", void 0);
__decorate([
  property({ type: Number })
], WuiQrCode.prototype, "size", void 0);
__decorate([
  property()
], WuiQrCode.prototype, "theme", void 0);
__decorate([
  property()
], WuiQrCode.prototype, "imageSrc", void 0);
__decorate([
  property()
], WuiQrCode.prototype, "alt", void 0);
__decorate([
  property()
], WuiQrCode.prototype, "color", void 0);
__decorate([
  property({ type: Boolean })
], WuiQrCode.prototype, "arenaClear", void 0);
__decorate([
  property({ type: Boolean })
], WuiQrCode.prototype, "farcaster", void 0);
WuiQrCode = __decorate([
  customElement("wui-qr-code")
], WuiQrCode);
//# sourceMappingURL=chunk-NOTVTPDK.js.map
