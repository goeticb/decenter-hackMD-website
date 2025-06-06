import {
  ifDefined
} from "./chunk-WK4LCREZ.js";
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
  html
} from "./chunk-QK2VKFPU.js";

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-email-input/styles.js
var styles_default = css`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-email-input/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiEmailInput = class WuiEmailInput2 extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
  }
  render() {
    return html`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${ifDefined(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `;
  }
  templateError() {
    if (this.errorMessage) {
      return html`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`;
    }
    return null;
  }
};
WuiEmailInput.styles = [resetStyles, styles_default];
__decorate([
  property()
], WuiEmailInput.prototype, "errorMessage", void 0);
__decorate([
  property({ type: Boolean })
], WuiEmailInput.prototype, "disabled", void 0);
__decorate([
  property()
], WuiEmailInput.prototype, "value", void 0);
__decorate([
  property()
], WuiEmailInput.prototype, "tabIdx", void 0);
WuiEmailInput = __decorate([
  customElement("wui-email-input")
], WuiEmailInput);
//# sourceMappingURL=chunk-HEPT3XP4.js.map
