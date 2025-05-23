import {
  property2 as property
} from "./chunk-COKH4YWJ.js";
import {
  colorStyles,
  customElement,
  elementStyles,
  resetStyles
} from "./chunk-ETM4QMGY.js";
import {
  LitElement,
  css,
  html
} from "./chunk-QK2VKFPU.js";

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/styles.js
var styles_default = css`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiIconLink = class WuiIconLink2 extends LitElement {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.disabled = false;
    this.icon = "copy";
    this.iconColor = "inherit";
  }
  render() {
    const borderRadius = this.size === "lg" ? "--wui-border-radius-xs" : "--wui-border-radius-xxs";
    const padding = this.size === "lg" ? "--wui-spacing-1xs" : "--wui-spacing-2xs";
    this.style.cssText = `
    --local-border-radius: var(${borderRadius});
    --local-padding: var(${padding});
`;
    return html`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `;
  }
};
WuiIconLink.styles = [resetStyles, elementStyles, colorStyles, styles_default];
__decorate([
  property()
], WuiIconLink.prototype, "size", void 0);
__decorate([
  property({ type: Boolean })
], WuiIconLink.prototype, "disabled", void 0);
__decorate([
  property()
], WuiIconLink.prototype, "icon", void 0);
__decorate([
  property()
], WuiIconLink.prototype, "iconColor", void 0);
WuiIconLink = __decorate([
  customElement("wui-icon-link")
], WuiIconLink);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/styles.js
var styles_default2 = css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiTag = class WuiTag2 extends LitElement {
  constructor() {
    super(...arguments);
    this.variant = "main";
    this.size = "lg";
  }
  render() {
    this.dataset["variant"] = this.variant;
    this.dataset["size"] = this.size;
    const textVariant = this.size === "md" ? "mini-700" : "micro-700";
    return html`
      <wui-text data-variant=${this.variant} variant=${textVariant} color="inherit">
        <slot></slot>
      </wui-text>
    `;
  }
};
WuiTag.styles = [resetStyles, styles_default2];
__decorate2([
  property()
], WuiTag.prototype, "variant", void 0);
__decorate2([
  property()
], WuiTag.prototype, "size", void 0);
WuiTag = __decorate2([
  customElement("wui-tag")
], WuiTag);
//# sourceMappingURL=chunk-YVOFMANN.js.map
