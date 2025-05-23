import {
  ifDefined
} from "./chunk-WK4LCREZ.js";
import {
  property2 as property
} from "./chunk-COKH4YWJ.js";
import {
  customElement,
  elementStyles,
  resetStyles
} from "./chunk-ETM4QMGY.js";
import {
  LitElement,
  css,
  html
} from "./chunk-QK2VKFPU.js";

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-link/styles.js
var styles_default = css`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-link/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiLink = class WuiLink2 extends LitElement {
  constructor() {
    super(...arguments);
    this.tabIdx = void 0;
    this.disabled = false;
    this.color = "inherit";
  }
  render() {
    return html`
      <button ?disabled=${this.disabled} tabindex=${ifDefined(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
  }
};
WuiLink.styles = [resetStyles, elementStyles, styles_default];
__decorate([
  property()
], WuiLink.prototype, "tabIdx", void 0);
__decorate([
  property({ type: Boolean })
], WuiLink.prototype, "disabled", void 0);
__decorate([
  property()
], WuiLink.prototype, "color", void 0);
WuiLink = __decorate([
  customElement("wui-link")
], WuiLink);
//# sourceMappingURL=chunk-WHGGRX5P.js.map
