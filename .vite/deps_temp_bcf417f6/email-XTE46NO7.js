import "./chunk-HEPT3XP4.js";
import "./chunk-6QOWD2HI.js";
import {
  createRef,
  ref
} from "./chunk-JSFERIOH.js";
import "./chunk-WHGGRX5P.js";
import "./chunk-BHIBQBXR.js";
import "./chunk-HZGWUS6I.js";
import "./chunk-WK4LCREZ.js";
import "./chunk-UJR4CR2X.js";
import "./chunk-QACLXGLR.js";
import {
  LitElement as LitElement2,
  css as css2,
  html as html2,
  property2 as property,
  state,
  state2
} from "./chunk-COKH4YWJ.js";
import {
  W3mFrameHelpers
} from "./chunk-RCDKGOX2.js";
import {
  ConstantsUtil as ConstantsUtil2
} from "./chunk-4V2ZSHRP.js";
import "./chunk-PZP3SDBV.js";
import {
  ChainController,
  ConnectionController,
  ConnectorController,
  ConstantsUtil,
  CoreHelperUtil,
  EventsController,
  ModalController,
  OptionsController,
  RouterController,
  SnackController,
  UiHelperUtil,
  customElement,
  elementStyles,
  resetStyles
} from "./chunk-ETM4QMGY.js";
import "./chunk-4SL53YBG.js";
import "./chunk-VU636JVZ.js";
import "./chunk-UBT2W44H.js";
import "./chunk-C7K4MEED.js";
import {
  LitElement,
  css,
  html
} from "./chunk-QK2VKFPU.js";
import "./chunk-SOZQXP6X.js";
import "./chunk-FVW4DYAA.js";
import "./chunk-U54NEF6Y.js";
import "./chunk-BONTQTVA.js";
import "./chunk-LRI4HBDF.js";
import "./chunk-IODSQHOR.js";
import "./chunk-6BSB3OB7.js";
import "./chunk-RWKC4OCO.js";
import "./chunk-GQ2L72PW.js";
import "./chunk-D5XZ67SR.js";
import "./chunk-64NT3AJW.js";

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-numeric/styles.js
var styles_default = css`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-numeric/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiInputNumeric = class WuiInputNumeric2 extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.value = "";
  }
  render() {
    return html`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `;
  }
};
WuiInputNumeric.styles = [resetStyles, elementStyles, styles_default];
__decorate([
  property({ type: Boolean })
], WuiInputNumeric.prototype, "disabled", void 0);
__decorate([
  property({ type: String })
], WuiInputNumeric.prototype, "value", void 0);
WuiInputNumeric = __decorate([
  customElement("wui-input-numeric")
], WuiInputNumeric);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-otp/styles.js
var styles_default2 = css`
  :host {
    position: relative;
    display: block;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-otp/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiOtp = class WuiOtp2 extends LitElement {
  constructor() {
    super(...arguments);
    this.length = 6;
    this.otp = "";
    this.values = Array.from({ length: this.length }).map(() => "");
    this.numerics = [];
    this.shouldInputBeEnabled = (index) => {
      const previousInputs = this.values.slice(0, index);
      return previousInputs.every((input) => input !== "");
    };
    this.handleKeyDown = (e, index) => {
      const inputElement = e.target;
      const input = this.getInputElement(inputElement);
      const keyArr = ["ArrowLeft", "ArrowRight", "Shift", "Delete"];
      if (!input) {
        return;
      }
      if (keyArr.includes(e.key)) {
        e.preventDefault();
      }
      const currentCaretPos = input.selectionStart;
      switch (e.key) {
        case "ArrowLeft":
          if (currentCaretPos) {
            input.setSelectionRange(currentCaretPos + 1, currentCaretPos + 1);
          }
          this.focusInputField("prev", index);
          break;
        case "ArrowRight":
          this.focusInputField("next", index);
          break;
        case "Shift":
          this.focusInputField("next", index);
          break;
        case "Delete":
          if (input.value === "") {
            this.focusInputField("prev", index);
          } else {
            this.updateInput(input, index, "");
          }
          break;
        case "Backspace":
          if (input.value === "") {
            this.focusInputField("prev", index);
          } else {
            this.updateInput(input, index, "");
          }
          break;
        default:
      }
    };
    this.focusInputField = (dir, index) => {
      if (dir === "next") {
        const nextIndex = index + 1;
        if (!this.shouldInputBeEnabled(nextIndex)) {
          return;
        }
        const numeric = this.numerics[nextIndex < this.length ? nextIndex : index];
        const input = numeric ? this.getInputElement(numeric) : void 0;
        if (input) {
          input.disabled = false;
          input.focus();
        }
      }
      if (dir === "prev") {
        const nextIndex = index - 1;
        const numeric = this.numerics[nextIndex > -1 ? nextIndex : index];
        const input = numeric ? this.getInputElement(numeric) : void 0;
        if (input) {
          input.focus();
        }
      }
    };
  }
  firstUpdated() {
    var _a, _b;
    if (this.otp) {
      this.values = this.otp.split("");
    }
    const numericElements = (_a = this.shadowRoot) == null ? void 0 : _a.querySelectorAll("wui-input-numeric");
    if (numericElements) {
      this.numerics = Array.from(numericElements);
    }
    (_b = this.numerics[0]) == null ? void 0 : _b.focus();
  }
  render() {
    return html`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({ length: this.length }).map((_, index) => html`
            <wui-input-numeric
              @input=${(e) => this.handleInput(e, index)}
              @click=${(e) => this.selectInput(e)}
              @keydown=${(e) => this.handleKeyDown(e, index)}
              .disabled=${!this.shouldInputBeEnabled(index)}
              .value=${this.values[index] || ""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `;
  }
  updateInput(element, index, value) {
    const numeric = this.numerics[index];
    const input = element || (numeric ? this.getInputElement(numeric) : void 0);
    if (input) {
      input.value = value;
      this.values = this.values.map((val, i) => i === index ? value : val);
    }
  }
  selectInput(e) {
    const targetElement = e.target;
    if (targetElement) {
      const inputElement = this.getInputElement(targetElement);
      inputElement == null ? void 0 : inputElement.select();
    }
  }
  handleInput(e, index) {
    const inputElement = e.target;
    const input = this.getInputElement(inputElement);
    if (input) {
      const inputValue = input.value;
      if (e.inputType === "insertFromPaste") {
        this.handlePaste(input, inputValue, index);
      } else {
        const isValid = UiHelperUtil.isNumber(inputValue);
        if (isValid && e.data) {
          this.updateInput(input, index, e.data);
          this.focusInputField("next", index);
        } else {
          this.updateInput(input, index, "");
        }
      }
    }
    this.dispatchInputChangeEvent();
  }
  handlePaste(input, inputValue, index) {
    const value = inputValue[0];
    const isValid = value && UiHelperUtil.isNumber(value);
    if (isValid) {
      this.updateInput(input, index, value);
      const inputString = inputValue.substring(1);
      if (index + 1 < this.length && inputString.length) {
        const nextNumeric = this.numerics[index + 1];
        const nextInput = nextNumeric ? this.getInputElement(nextNumeric) : void 0;
        if (nextInput) {
          this.handlePaste(nextInput, inputString, index + 1);
        }
      } else {
        this.focusInputField("next", index);
      }
    } else {
      this.updateInput(input, index, "");
    }
  }
  getInputElement(el) {
    var _a;
    if ((_a = el.shadowRoot) == null ? void 0 : _a.querySelector("input")) {
      return el.shadowRoot.querySelector("input");
    }
    return null;
  }
  dispatchInputChangeEvent() {
    const value = this.values.join("");
    this.dispatchEvent(new CustomEvent("inputChange", {
      detail: value,
      bubbles: true,
      composed: true
    }));
  }
};
WuiOtp.styles = [resetStyles, styles_default2];
__decorate2([
  property({ type: Number })
], WuiOtp.prototype, "length", void 0);
__decorate2([
  property({ type: String })
], WuiOtp.prototype, "otp", void 0);
__decorate2([
  state2()
], WuiOtp.prototype, "values", void 0);
WuiOtp = __decorate2([
  customElement("wui-otp")
], WuiOtp);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-email-otp-widget/styles.js
var styles_default3 = css2`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-email-otp-widget/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OTP_LENGTH = 6;
var W3mEmailOtpWidget = class W3mEmailOtpWidget2 extends LitElement2 {
  firstUpdated() {
    this.startOTPTimeout();
  }
  disconnectedCallback() {
    clearTimeout(this.OTPTimeout);
  }
  constructor() {
    var _a;
    super();
    this.loading = false;
    this.timeoutTimeLeft = W3mFrameHelpers.getTimeToNextEmailLogin();
    this.error = "";
    this.otp = "";
    this.email = (_a = RouterController.state.data) == null ? void 0 : _a.email;
    this.authConnector = ConnectorController.getAuthConnector();
  }
  render() {
    if (!this.email) {
      throw new Error("w3m-email-otp-widget: No email provided");
    }
    const isResendDisabled = Boolean(this.timeoutTimeLeft);
    const footerLabels = this.getFooterLabels(isResendDisabled);
    return html2`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l", "0", "l", "0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0", "xl", "0", "xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading ? html2`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>` : html2` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error ? html2`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  ` : null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${footerLabels.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${isResendDisabled}>
            ${footerLabels.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `;
  }
  startOTPTimeout() {
    this.timeoutTimeLeft = W3mFrameHelpers.getTimeToNextEmailLogin();
    this.OTPTimeout = setInterval(() => {
      if (this.timeoutTimeLeft > 0) {
        this.timeoutTimeLeft = W3mFrameHelpers.getTimeToNextEmailLogin();
      } else {
        clearInterval(this.OTPTimeout);
      }
    }, 1e3);
  }
  async onOtpInputChange(event) {
    var _a;
    try {
      if (!this.loading) {
        this.otp = event.detail;
        if (this.authConnector && this.otp.length === OTP_LENGTH) {
          this.loading = true;
          await ((_a = this.onOtpSubmit) == null ? void 0 : _a.call(this, this.otp));
        }
      }
    } catch (error) {
      this.error = CoreHelperUtil.parseError(error);
      this.loading = false;
    }
  }
  async onResendCode() {
    try {
      if (this.onOtpResend) {
        if (!this.loading && !this.timeoutTimeLeft) {
          this.error = "";
          this.otp = "";
          const authConnector = ConnectorController.getAuthConnector();
          if (!authConnector || !this.email) {
            throw new Error("w3m-email-otp-widget: Unable to resend email");
          }
          this.loading = true;
          await this.onOtpResend(this.email);
          this.startOTPTimeout();
          SnackController.showSuccess("Code email resent");
        }
      } else if (this.onStartOver) {
        this.onStartOver();
      }
    } catch (error) {
      SnackController.showError(error);
    } finally {
      this.loading = false;
    }
  }
  getFooterLabels(isResendDisabled) {
    if (this.onStartOver) {
      return {
        title: "Something wrong?",
        action: `Try again ${isResendDisabled ? `in ${this.timeoutTimeLeft}s` : ""}`
      };
    }
    return {
      title: `Didn't receive it?`,
      action: `Resend ${isResendDisabled ? `in ${this.timeoutTimeLeft}s` : "Code"}`
    };
  }
};
W3mEmailOtpWidget.styles = styles_default3;
__decorate3([
  state()
], W3mEmailOtpWidget.prototype, "loading", void 0);
__decorate3([
  state()
], W3mEmailOtpWidget.prototype, "timeoutTimeLeft", void 0);
__decorate3([
  state()
], W3mEmailOtpWidget.prototype, "error", void 0);
W3mEmailOtpWidget = __decorate3([
  customElement("w3m-email-otp-widget")
], W3mEmailOtpWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-email-verify-otp-view/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mEmailVerifyOtpView = class W3mEmailVerifyOtpView2 extends W3mEmailOtpWidget {
  constructor() {
    super(...arguments);
    this.onOtpSubmit = async (otp) => {
      try {
        if (this.authConnector) {
          await this.authConnector.provider.connectOtp({ otp });
          EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_PASS" });
          if (ChainController.state.activeChain) {
            await ConnectionController.connectExternal(this.authConnector, ChainController.state.activeChain);
          } else {
            throw new Error("Active chain is not set on ChainControll");
          }
          EventsController.sendEvent({
            type: "track",
            event: "CONNECT_SUCCESS",
            properties: { method: "email", name: this.authConnector.name || "Unknown" }
          });
          if (!OptionsController.state.siwx) {
            ModalController.close();
          }
        }
      } catch (error) {
        EventsController.sendEvent({
          type: "track",
          event: "EMAIL_VERIFICATION_CODE_FAIL",
          properties: { message: CoreHelperUtil.parseError(error) }
        });
        throw error;
      }
    };
    this.onOtpResend = async (email) => {
      if (this.authConnector) {
        await this.authConnector.provider.connectEmail({ email });
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" });
      }
    };
  }
};
W3mEmailVerifyOtpView = __decorate4([
  customElement("w3m-email-verify-otp-view")
], W3mEmailVerifyOtpView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-email-verify-device-view/styles.js
var styles_default4 = css2`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-email-verify-device-view/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mEmailVerifyDeviceView = class W3mEmailVerifyDeviceView2 extends LitElement2 {
  constructor() {
    var _a;
    super();
    this.email = (_a = RouterController.state.data) == null ? void 0 : _a.email;
    this.authConnector = ConnectorController.getAuthConnector();
    this.loading = false;
    this.listenForDeviceApproval();
  }
  render() {
    if (!this.email) {
      throw new Error("w3m-email-verify-device-view: No email provided");
    }
    if (!this.authConnector) {
      throw new Error("w3m-email-verify-device-view: No auth connector provided");
    }
    return html2`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl", "s", "xxl", "s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
  }
  async listenForDeviceApproval() {
    if (this.authConnector) {
      try {
        await this.authConnector.provider.connectDevice();
        EventsController.sendEvent({ type: "track", event: "DEVICE_REGISTERED_FOR_EMAIL" });
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" });
        RouterController.replace("EmailVerifyOtp", { email: this.email });
      } catch (error) {
        RouterController.goBack();
      }
    }
  }
  async onResendCode() {
    try {
      if (!this.loading) {
        if (!this.authConnector || !this.email) {
          throw new Error("w3m-email-login-widget: Unable to resend email");
        }
        this.loading = true;
        await this.authConnector.provider.connectEmail({ email: this.email });
        this.listenForDeviceApproval();
        SnackController.showSuccess("Code email resent");
      }
    } catch (error) {
      SnackController.showError(error);
    } finally {
      this.loading = false;
    }
  }
};
W3mEmailVerifyDeviceView.styles = styles_default4;
__decorate5([
  state()
], W3mEmailVerifyDeviceView.prototype, "loading", void 0);
W3mEmailVerifyDeviceView = __decorate5([
  customElement("w3m-email-verify-device-view")
], W3mEmailVerifyDeviceView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-update-email-wallet-view/styles.js
var styles_default5 = css2`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-update-email-wallet-view/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpdateEmailWalletView = class W3mUpdateEmailWalletView2 extends LitElement2 {
  constructor() {
    var _a, _b;
    super(...arguments);
    this.formRef = createRef();
    this.initialEmail = ((_a = RouterController.state.data) == null ? void 0 : _a.email) ?? "";
    this.redirectView = (_b = RouterController.state.data) == null ? void 0 : _b.redirectView;
    this.email = "";
    this.loading = false;
  }
  firstUpdated() {
    var _a;
    (_a = this.formRef.value) == null ? void 0 : _a.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.onSubmitEmail(event);
      }
    });
  }
  render() {
    return html2`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${ref(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `;
  }
  onEmailInputChange(event) {
    this.email = event.detail;
  }
  async onSubmitEmail(event) {
    try {
      if (this.loading) {
        return;
      }
      this.loading = true;
      event.preventDefault();
      const authConnector = ConnectorController.getAuthConnector();
      if (!authConnector) {
        throw new Error("w3m-update-email-wallet: Auth connector not found");
      }
      const response = await authConnector.provider.updateEmail({ email: this.email });
      EventsController.sendEvent({ type: "track", event: "EMAIL_EDIT" });
      if (response.action === "VERIFY_SECONDARY_OTP") {
        RouterController.push("UpdateEmailSecondaryOtp", {
          email: this.initialEmail,
          newEmail: this.email,
          redirectView: this.redirectView
        });
      } else {
        RouterController.push("UpdateEmailPrimaryOtp", {
          email: this.initialEmail,
          newEmail: this.email,
          redirectView: this.redirectView
        });
      }
    } catch (error) {
      SnackController.showError(error);
      this.loading = false;
    }
  }
  buttonsTemplate() {
    const showSubmit = !this.loading && this.email.length > 3 && this.email !== this.initialEmail;
    if (!this.redirectView) {
      return html2`
        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!showSubmit}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `;
    }
    return html2`
      <wui-flex gap="s">
        <wui-button size="md" variant="neutral" fullWidth @click=${RouterController.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!showSubmit}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `;
  }
};
W3mUpdateEmailWalletView.styles = styles_default5;
__decorate6([
  state()
], W3mUpdateEmailWalletView.prototype, "email", void 0);
__decorate6([
  state()
], W3mUpdateEmailWalletView.prototype, "loading", void 0);
W3mUpdateEmailWalletView = __decorate6([
  customElement("w3m-update-email-wallet-view")
], W3mUpdateEmailWalletView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-update-email-primary-otp-view/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpdateEmailPrimaryOtpView = class W3mUpdateEmailPrimaryOtpView2 extends W3mEmailOtpWidget {
  constructor() {
    var _a;
    super();
    this.email = (_a = RouterController.state.data) == null ? void 0 : _a.email;
    this.onOtpSubmit = async (otp) => {
      try {
        if (this.authConnector) {
          await this.authConnector.provider.updateEmailPrimaryOtp({ otp });
          EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_PASS" });
          RouterController.replace("UpdateEmailSecondaryOtp", RouterController.state.data);
        }
      } catch (error) {
        EventsController.sendEvent({
          type: "track",
          event: "EMAIL_VERIFICATION_CODE_FAIL",
          properties: { message: CoreHelperUtil.parseError(error) }
        });
        throw error;
      }
    };
    this.onStartOver = () => {
      RouterController.replace("UpdateEmailWallet", RouterController.state.data);
    };
  }
};
W3mUpdateEmailPrimaryOtpView = __decorate7([
  customElement("w3m-update-email-primary-otp-view")
], W3mUpdateEmailPrimaryOtpView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-update-email-secondary-otp-view/index.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpdateEmailSecondaryOtpView = class W3mUpdateEmailSecondaryOtpView2 extends W3mEmailOtpWidget {
  constructor() {
    var _a, _b;
    super();
    this.email = (_a = RouterController.state.data) == null ? void 0 : _a.newEmail;
    this.redirectView = (_b = RouterController.state.data) == null ? void 0 : _b.redirectView;
    this.onOtpSubmit = async (otp) => {
      try {
        if (this.authConnector) {
          await this.authConnector.provider.updateEmailSecondaryOtp({ otp });
          EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_PASS" });
          if (this.redirectView) {
            RouterController.reset(this.redirectView);
          }
        }
      } catch (error) {
        EventsController.sendEvent({
          type: "track",
          event: "EMAIL_VERIFICATION_CODE_FAIL",
          properties: { message: CoreHelperUtil.parseError(error) }
        });
        throw error;
      }
    };
    this.onStartOver = () => {
      RouterController.replace("UpdateEmailWallet", RouterController.state.data);
    };
  }
};
W3mUpdateEmailSecondaryOtpView = __decorate8([
  customElement("w3m-update-email-secondary-otp-view")
], W3mUpdateEmailSecondaryOtpView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-email-login-view/index.js
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mEmailLoginView = class W3mEmailLoginView2 extends LitElement2 {
  constructor() {
    var _a;
    super();
    this.authConnector = ConnectorController.getAuthConnector();
    this.isEmailEnabled = (_a = OptionsController.state.features) == null ? void 0 : _a.email;
    this.isAuthEnabled = this.checkIfAuthEnabled(ConnectorController.state.connectors);
    this.connectors = ConnectorController.state.connectors;
    ConnectorController.subscribeKey("connectors", (val) => {
      this.connectors = val;
      this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors);
    });
  }
  render() {
    if (!this.isEmailEnabled) {
      throw new Error("w3m-email-login-view: Email is not enabled");
    }
    if (!this.isAuthEnabled) {
      throw new Error("w3m-email-login-view: No auth connector provided");
    }
    return html2`<wui-flex
      flexDirection="column"
      .padding=${["3xs", "m", "m", "m"]}
      gap="l"
    >
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `;
  }
  checkIfAuthEnabled(connectors) {
    const namespacesWithAuthConnector = connectors.filter((c) => c.type === ConstantsUtil2.CONNECTOR_TYPE_AUTH).map((i) => i.chain);
    const authSupportedNamespaces = ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS;
    return authSupportedNamespaces.some((ns) => namespacesWithAuthConnector.includes(ns));
  }
};
__decorate9([
  state()
], W3mEmailLoginView.prototype, "connectors", void 0);
W3mEmailLoginView = __decorate9([
  customElement("w3m-email-login-view")
], W3mEmailLoginView);
export {
  W3mEmailLoginView,
  W3mEmailVerifyDeviceView,
  W3mEmailVerifyOtpView,
  W3mUpdateEmailPrimaryOtpView,
  W3mUpdateEmailSecondaryOtpView,
  W3mUpdateEmailWalletView
};
//# sourceMappingURL=email-XTE46NO7.js.map
