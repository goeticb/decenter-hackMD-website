import {
  property2 as property
} from "./chunk-COKH4YWJ.js";
import {
  UiHelperUtil,
  customElement,
  elementStyles,
  resetStyles
} from "./chunk-ETM4QMGY.js";
import {
  LitElement,
  css,
  html
} from "./chunk-QK2VKFPU.js";

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-token/styles.js
var styles_default = css`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-token/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiListToken = class WuiListToken2 extends LitElement {
  constructor() {
    super(...arguments);
    this.tokenName = "";
    this.tokenImageUrl = "";
    this.tokenValue = 0;
    this.tokenAmount = "0.0";
    this.tokenCurrency = "";
    this.clickable = false;
  }
  render() {
    return html`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${UiHelperUtil.formatNumberToLocalString(this.tokenAmount, 4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `;
  }
  visualTemplate() {
    if (this.tokenName && this.tokenImageUrl) {
      return html`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`;
    }
    return html`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`;
  }
};
WuiListToken.styles = [resetStyles, elementStyles, styles_default];
__decorate([
  property()
], WuiListToken.prototype, "tokenName", void 0);
__decorate([
  property()
], WuiListToken.prototype, "tokenImageUrl", void 0);
__decorate([
  property({ type: Number })
], WuiListToken.prototype, "tokenValue", void 0);
__decorate([
  property()
], WuiListToken.prototype, "tokenAmount", void 0);
__decorate([
  property()
], WuiListToken.prototype, "tokenCurrency", void 0);
__decorate([
  property({ type: Boolean })
], WuiListToken.prototype, "clickable", void 0);
WuiListToken = __decorate([
  customElement("wui-list-token")
], WuiListToken);

// node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-separator/styles.js
var styles_default2 = css`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-separator/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiSeparator = class WuiSeparator2 extends LitElement {
  constructor() {
    super(...arguments);
    this.text = "";
  }
  render() {
    return html`${this.template()}`;
  }
  template() {
    if (this.text) {
      return html`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`;
    }
    return null;
  }
};
WuiSeparator.styles = [resetStyles, styles_default2];
__decorate2([
  property()
], WuiSeparator.prototype, "text", void 0);
WuiSeparator = __decorate2([
  customElement("wui-separator")
], WuiSeparator);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-avatar/styles.js
var styles_default3 = css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-avatar/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiAvatar = class WuiAvatar2 extends LitElement {
  constructor() {
    super(...arguments);
    this.imageSrc = void 0;
    this.alt = void 0;
    this.address = void 0;
    this.size = "xl";
  }
  render() {
    this.style.cssText = `
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `;
    return html`${this.visualTemplate()}`;
  }
  visualTemplate() {
    if (this.imageSrc) {
      this.dataset["variant"] = "image";
      return html`<wui-image src=${this.imageSrc} alt=${this.alt ?? "avatar"}></wui-image>`;
    } else if (this.address) {
      this.dataset["variant"] = "generated";
      const cssColors = UiHelperUtil.generateAvatarColors(this.address);
      this.style.cssText += `
 ${cssColors}`;
      return null;
    }
    this.dataset["variant"] = "default";
    return null;
  }
};
WuiAvatar.styles = [resetStyles, styles_default3];
__decorate3([
  property()
], WuiAvatar.prototype, "imageSrc", void 0);
__decorate3([
  property()
], WuiAvatar.prototype, "alt", void 0);
__decorate3([
  property()
], WuiAvatar.prototype, "address", void 0);
__decorate3([
  property()
], WuiAvatar.prototype, "size", void 0);
WuiAvatar = __decorate3([
  customElement("wui-avatar")
], WuiAvatar);
//# sourceMappingURL=chunk-SBJCGIVD.js.map
