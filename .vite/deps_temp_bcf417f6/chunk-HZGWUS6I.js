import {
  AsyncDirective,
  directive,
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
  html,
  nothing
} from "./chunk-QK2VKFPU.js";

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-button/styles.js
var styles_default = css`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-button/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SPINNER_COLOR_BY_VARIANT = {
  main: "inverse-100",
  inverse: "inverse-000",
  accent: "accent-100",
  "accent-error": "error-100",
  "accent-success": "success-100",
  neutral: "fg-100",
  disabled: "gray-glass-020"
};
var TEXT_VARIANT_BY_SIZE = {
  lg: "paragraph-600",
  md: "small-600"
};
var SPINNER_SIZE_BY_SIZE = {
  lg: "md",
  md: "md"
};
var WuiButton = class WuiButton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.size = "lg";
    this.disabled = false;
    this.fullWidth = false;
    this.loading = false;
    this.variant = "main";
    this.hasIconLeft = false;
    this.hasIconRight = false;
    this.borderRadius = "m";
  }
  render() {
    this.style.cssText = `
    --local-width: ${this.fullWidth ? "100%" : "auto"};
    --local-opacity-100: ${this.loading ? 0 : 1};
    --local-opacity-000: ${this.loading ? 1 : 0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;
    const textVariant = this.textVariant ?? TEXT_VARIANT_BY_SIZE[this.size];
    return html`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${() => this.handleSlotLeftChange()}></slot>
        <wui-text variant=${textVariant} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${() => this.handleSlotRightChange()}></slot>
      </button>
    `;
  }
  handleSlotLeftChange() {
    this.hasIconLeft = true;
  }
  handleSlotRightChange() {
    this.hasIconRight = true;
  }
  loadingTemplate() {
    if (this.loading) {
      const size = SPINNER_SIZE_BY_SIZE[this.size];
      const color = this.disabled ? SPINNER_COLOR_BY_VARIANT["disabled"] : SPINNER_COLOR_BY_VARIANT[this.variant];
      return html`<wui-loading-spinner color=${color} size=${size}></wui-loading-spinner>`;
    }
    return html``;
  }
};
WuiButton.styles = [resetStyles, elementStyles, styles_default];
__decorate([
  property()
], WuiButton.prototype, "size", void 0);
__decorate([
  property({ type: Boolean })
], WuiButton.prototype, "disabled", void 0);
__decorate([
  property({ type: Boolean })
], WuiButton.prototype, "fullWidth", void 0);
__decorate([
  property({ type: Boolean })
], WuiButton.prototype, "loading", void 0);
__decorate([
  property()
], WuiButton.prototype, "variant", void 0);
__decorate([
  property({ type: Boolean })
], WuiButton.prototype, "hasIconLeft", void 0);
__decorate([
  property({ type: Boolean })
], WuiButton.prototype, "hasIconRight", void 0);
__decorate([
  property()
], WuiButton.prototype, "borderRadius", void 0);
__decorate([
  property()
], WuiButton.prototype, "textVariant", void 0);
WuiButton = __decorate([
  customElement("wui-button")
], WuiButton);

// node_modules/@reown/appkit-ui/node_modules/lit-html/development/directives/ref.js
var createRef = () => new Ref();
var Ref = class {
};
var lastElementForContextAndCallback = /* @__PURE__ */ new WeakMap();
var RefDirective = class extends AsyncDirective {
  render(_ref) {
    return nothing;
  }
  update(part, [ref2]) {
    var _a;
    const refChanged = ref2 !== this._ref;
    if (refChanged && this._ref !== void 0) {
      this._updateRefValue(void 0);
    }
    if (refChanged || this._lastElementForRef !== this._element) {
      this._ref = ref2;
      this._context = (_a = part.options) == null ? void 0 : _a.host;
      this._updateRefValue(this._element = part.element);
    }
    return nothing;
  }
  _updateRefValue(element) {
    if (!this.isConnected) {
      element = void 0;
    }
    if (typeof this._ref === "function") {
      const context = this._context ?? globalThis;
      let lastElementForCallback = lastElementForContextAndCallback.get(context);
      if (lastElementForCallback === void 0) {
        lastElementForCallback = /* @__PURE__ */ new WeakMap();
        lastElementForContextAndCallback.set(context, lastElementForCallback);
      }
      if (lastElementForCallback.get(this._ref) !== void 0) {
        this._ref.call(this._context, void 0);
      }
      lastElementForCallback.set(this._ref, element);
      if (element !== void 0) {
        this._ref.call(this._context, element);
      }
    } else {
      this._ref.value = element;
    }
  }
  get _lastElementForRef() {
    var _a, _b;
    return typeof this._ref === "function" ? (_a = lastElementForContextAndCallback.get(this._context ?? globalThis)) == null ? void 0 : _a.get(this._ref) : (_b = this._ref) == null ? void 0 : _b.value;
  }
  disconnected() {
    if (this._lastElementForRef === this._element) {
      this._updateRefValue(void 0);
    }
  }
  reconnected() {
    this._updateRefValue(this._element);
  }
};
var ref = directive(RefDirective);

export {
  createRef,
  ref
};
/*! Bundled license information:

lit-html/development/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=chunk-HZGWUS6I.js.map
