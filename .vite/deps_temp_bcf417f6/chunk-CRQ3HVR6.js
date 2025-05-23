import {
  createRef,
  ref
} from "./chunk-HZGWUS6I.js";
import {
  ifDefined
} from "./chunk-WK4LCREZ.js";
import {
  LitElement as LitElement2,
  css as css2,
  html as html2,
  property2 as property,
  state
} from "./chunk-COKH4YWJ.js";
import {
  OptionsController,
  OptionsStateController,
  customElement,
  elementStyles,
  resetStyles
} from "./chunk-ETM4QMGY.js";
import {
  LitElement,
  css,
  html
} from "./chunk-QK2VKFPU.js";

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-checkbox/styles.js
var styles_default = css`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-checkbox/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiCheckBox = class WuiCheckBox2 extends LitElement {
  constructor() {
    super(...arguments);
    this.inputElementRef = createRef();
    this.checked = void 0;
  }
  render() {
    return html`
      <label>
        <input
          ${ref(this.inputElementRef)}
          ?checked=${ifDefined(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `;
  }
  dispatchChangeEvent() {
    var _a;
    this.dispatchEvent(new CustomEvent("checkboxChange", {
      detail: (_a = this.inputElementRef.value) == null ? void 0 : _a.checked,
      bubbles: true,
      composed: true
    }));
  }
};
WuiCheckBox.styles = [resetStyles, styles_default];
__decorate([
  property({ type: Boolean })
], WuiCheckBox.prototype, "checked", void 0);
WuiCheckBox = __decorate([
  customElement("wui-checkbox")
], WuiCheckBox);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-checkbox/styles.js
var styles_default2 = css2`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-checkbox/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mLegalCheckbox = class W3mLegalCheckbox2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.checked = OptionsStateController.state.isLegalCheckboxChecked;
    this.unsubscribe.push(OptionsStateController.subscribeKey("isLegalCheckboxChecked", (val) => {
      this.checked = val;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a;
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    const legalCheckbox = (_a = OptionsController.state.features) == null ? void 0 : _a.legalCheckbox;
    if (!termsConditionsUrl && !privacyPolicyUrl) {
      return null;
    }
    if (!legalCheckbox) {
      return null;
    }
    return html2`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    return termsConditionsUrl && privacyPolicyUrl ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl } = OptionsController.state;
    if (!termsConditionsUrl) {
      return null;
    }
    return html2`<a rel="noreferrer" target="_blank" href=${termsConditionsUrl}>terms of service</a>`;
  }
  privacyTemplate() {
    const { privacyPolicyUrl } = OptionsController.state;
    if (!privacyPolicyUrl) {
      return null;
    }
    return html2`<a rel="noreferrer" target="_blank" href=${privacyPolicyUrl}>privacy policy</a>`;
  }
  onCheckboxChange() {
    OptionsStateController.setIsLegalCheckboxChecked(!this.checked);
  }
};
W3mLegalCheckbox.styles = [styles_default2];
__decorate2([
  state()
], W3mLegalCheckbox.prototype, "checked", void 0);
W3mLegalCheckbox = __decorate2([
  customElement("w3m-legal-checkbox")
], W3mLegalCheckbox);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-ux-by-reown/styles.js
var styles_default3 = css`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-ux-by-reown/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiUxByReown = class WuiUxByReown2 extends LitElement {
  render() {
    return html`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0", "0", "l", "0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `;
  }
};
WuiUxByReown.styles = [resetStyles, elementStyles, styles_default3];
WuiUxByReown = __decorate3([
  customElement("wui-ux-by-reown")
], WuiUxByReown);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-footer/styles.js
var styles_default4 = css2`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
    margin-top: var(--wui-spacing-s);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-legal-footer/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mLegalFooter = class W3mLegalFooter2 extends LitElement2 {
  render() {
    var _a;
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    const legalCheckbox = (_a = OptionsController.state.features) == null ? void 0 : _a.legalCheckbox;
    if (!termsConditionsUrl && !privacyPolicyUrl) {
      return null;
    }
    if (legalCheckbox) {
      return null;
    }
    return html2`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m", "s", "s", "s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    return termsConditionsUrl && privacyPolicyUrl ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl } = OptionsController.state;
    if (!termsConditionsUrl) {
      return null;
    }
    return html2`<a href=${termsConditionsUrl}>Terms of Service</a>`;
  }
  privacyTemplate() {
    const { privacyPolicyUrl } = OptionsController.state;
    if (!privacyPolicyUrl) {
      return null;
    }
    return html2`<a href=${privacyPolicyUrl}>Privacy Policy</a>`;
  }
};
W3mLegalFooter.styles = [styles_default4];
W3mLegalFooter = __decorate4([
  customElement("w3m-legal-footer")
], W3mLegalFooter);

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-thumbnail/styles.js
var styles_default5 = css`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-thumbnail/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiLoadingThumbnail = class WuiLoadingThumbnail2 extends LitElement {
  constructor() {
    super(...arguments);
    this.radius = 36;
  }
  render() {
    return this.svgLoaderTemplate();
  }
  svgLoaderTemplate() {
    const radius = this.radius > 50 ? 50 : this.radius;
    const standardValue = 36;
    const radiusFactor = standardValue - radius;
    const dashArrayStart = 116 + radiusFactor;
    const dashArrayEnd = 245 + radiusFactor;
    const dashOffset = 360 + radiusFactor * 1.75;
    return html`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${radius}
          stroke-dasharray="${dashArrayStart} ${dashArrayEnd}"
          stroke-dashoffset=${dashOffset}
        />
      </svg>
    `;
  }
};
WuiLoadingThumbnail.styles = [resetStyles, styles_default5];
__decorate5([
  property({ type: Number })
], WuiLoadingThumbnail.prototype, "radius", void 0);
WuiLoadingThumbnail = __decorate5([
  customElement("wui-loading-thumbnail")
], WuiLoadingThumbnail);
//# sourceMappingURL=chunk-CRQ3HVR6.js.map
