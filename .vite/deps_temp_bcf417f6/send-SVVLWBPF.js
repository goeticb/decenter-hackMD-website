import "./chunk-SBJCGIVD.js";
import {
  createRef,
  ref
} from "./chunk-JSFERIOH.js";
import "./chunk-WHGGRX5P.js";
import "./chunk-5A7QHWY6.js";
import "./chunk-HNB35IZC.js";
import "./chunk-BHIBQBXR.js";
import "./chunk-FS3CSUOV.js";
import {
  createRef as createRef2,
  ref as ref2
} from "./chunk-HZGWUS6I.js";
import "./chunk-WK4LCREZ.js";
import "./chunk-UJR4CR2X.js";
import "./chunk-QACLXGLR.js";
import {
  ifDefined
} from "./chunk-UDUV7Y73.js";
import "./chunk-ZWVZUKRU.js";
import {
  LitElement as LitElement2,
  css as css2,
  html as html2,
  property,
  property2,
  state
} from "./chunk-COKH4YWJ.js";
import {
  AssetUtil,
  ChainController,
  ConnectionController,
  ConstantsUtil2 as ConstantsUtil,
  CoreHelperUtil,
  NumberUtil,
  RouterController,
  SendController,
  SwapController,
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

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-input-address/styles.js
var styles_default = css2`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-input-address/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mInputAddress = class W3mInputAddress2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.inputElementRef = createRef();
    this.instructionElementRef = createRef();
    this.instructionHidden = Boolean(this.value);
    this.pasting = false;
    this.onDebouncedSearch = CoreHelperUtil.debounce(async (value) => {
      const address = await ConnectionController.getEnsAddress(value);
      SendController.setLoading(false);
      if (address) {
        SendController.setReceiverProfileName(value);
        SendController.setReceiverAddress(address);
        const avatar = await ConnectionController.getEnsAvatar(value);
        SendController.setReceiverProfileImageUrl(avatar || void 0);
      } else {
        SendController.setReceiverAddress(value);
        SendController.setReceiverProfileName(void 0);
        SendController.setReceiverProfileImageUrl(void 0);
      }
    });
  }
  firstUpdated() {
    if (this.value) {
      this.instructionHidden = true;
    }
    this.checkHidden();
  }
  render() {
    return html2` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl", "l", "xl", "l"]}
    >
      <wui-text
        ${ref(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${ref(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value ?? ""}
        autocomplete="off"
      >
${this.value ?? ""}</textarea
      >
    </wui-flex>`;
  }
  async focusInput() {
    var _a;
    if (this.instructionElementRef.value) {
      this.instructionHidden = true;
      await this.toggleInstructionFocus(false);
      this.instructionElementRef.value.style.pointerEvents = "none";
      (_a = this.inputElementRef.value) == null ? void 0 : _a.focus();
      if (this.inputElementRef.value) {
        this.inputElementRef.value.selectionStart = this.inputElementRef.value.selectionEnd = this.inputElementRef.value.value.length;
      }
    }
  }
  async focusInstruction() {
    var _a;
    if (this.instructionElementRef.value) {
      this.instructionHidden = false;
      await this.toggleInstructionFocus(true);
      this.instructionElementRef.value.style.pointerEvents = "auto";
      (_a = this.inputElementRef.value) == null ? void 0 : _a.blur();
    }
  }
  async toggleInstructionFocus(focus) {
    if (this.instructionElementRef.value) {
      await this.instructionElementRef.value.animate([{ opacity: focus ? 0 : 1 }, { opacity: focus ? 1 : 0 }], {
        duration: 100,
        easing: "ease",
        fill: "forwards"
      }).finished;
    }
  }
  onBoxClick() {
    if (!this.value && !this.instructionHidden) {
      this.focusInput();
    }
  }
  onBlur() {
    if (!this.value && this.instructionHidden && !this.pasting) {
      this.focusInstruction();
    }
  }
  checkHidden() {
    if (this.instructionHidden) {
      this.focusInput();
    }
  }
  async onPasteClick() {
    this.pasting = true;
    const text = await navigator.clipboard.readText();
    SendController.setReceiverAddress(text);
    this.focusInput();
  }
  onInputChange(e) {
    this.pasting = false;
    const element = e.target;
    if (element.value && !this.instructionHidden) {
      this.focusInput();
    }
    SendController.setLoading(true);
    this.onDebouncedSearch(element.value);
  }
};
W3mInputAddress.styles = styles_default;
__decorate([
  property()
], W3mInputAddress.prototype, "value", void 0);
__decorate([
  state()
], W3mInputAddress.prototype, "instructionHidden", void 0);
__decorate([
  state()
], W3mInputAddress.prototype, "pasting", void 0);
W3mInputAddress = __decorate([
  customElement("w3m-input-address")
], W3mInputAddress);

// node_modules/@reown/appkit-ui/dist/esm/src/utils/ConstantsUtil.js
var specialCharactersRegex = /[.*+?^${}()|[\]\\]/gu;
var numbersRegex = /[0-9,.]/u;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-amount/styles.js
var styles_default2 = css`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
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

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-amount/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiInputAmount = class WuiInputAmount2 extends LitElement {
  constructor() {
    super(...arguments);
    this.inputElementRef = createRef2();
    this.disabled = false;
    this.value = "";
    this.placeholder = "0";
  }
  render() {
    var _a;
    if (((_a = this.inputElementRef) == null ? void 0 : _a.value) && this.value) {
      this.inputElementRef.value.value = this.value;
    }
    return html`<input
      ${ref2(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value ?? ""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `;
  }
  dispatchInputChangeEvent(e) {
    var _a, _b;
    const inputChar = e.data;
    if (inputChar && ((_a = this.inputElementRef) == null ? void 0 : _a.value)) {
      if (inputChar === ",") {
        const inputValue = this.inputElementRef.value.value.replace(",", ".");
        this.inputElementRef.value.value = inputValue;
        this.value = `${this.value}${inputValue}`;
      } else if (!numbersRegex.test(inputChar)) {
        this.inputElementRef.value.value = this.value.replace(new RegExp(inputChar.replace(specialCharactersRegex, "\\$&"), "gu"), "");
      }
    }
    this.dispatchEvent(new CustomEvent("inputChange", {
      detail: (_b = this.inputElementRef.value) == null ? void 0 : _b.value,
      bubbles: true,
      composed: true
    }));
  }
};
WuiInputAmount.styles = [resetStyles, elementStyles, styles_default2];
__decorate2([
  property2({ type: Boolean })
], WuiInputAmount.prototype, "disabled", void 0);
__decorate2([
  property2({ type: String })
], WuiInputAmount.prototype, "value", void 0);
__decorate2([
  property2({ type: String })
], WuiInputAmount.prototype, "placeholder", void 0);
WuiInputAmount = __decorate2([
  customElement("wui-input-amount")
], WuiInputAmount);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-input-token/styles.js
var styles_default3 = css2`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-input-token/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mInputToken = class W3mInputToken2 extends LitElement2 {
  render() {
    return html2` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl", "s", "l", "l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token && true}
          .value=${this.sendTokenAmount ? String(this.sendTokenAmount) : ""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`;
  }
  buttonTemplate() {
    if (this.token) {
      return html2`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`;
    }
    return html2`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`;
  }
  handleSelectButtonClick() {
    RouterController.push("WalletSendSelectToken");
  }
  sendValueTemplate() {
    if (this.token && this.sendTokenAmount) {
      const price = this.token.price;
      const totalValue = price * this.sendTokenAmount;
      return html2`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${totalValue ? `$${UiHelperUtil.formatNumberToLocalString(totalValue, 2)}` : "Incorrect value"}</wui-text
      >`;
    }
    return null;
  }
  maxAmountTemplate() {
    if (this.token) {
      if (this.sendTokenAmount && this.sendTokenAmount > Number(this.token.quantity.numeric)) {
        return html2` <wui-text variant="small-400" color="error-100">
          ${UiHelperUtil.roundNumber(Number(this.token.quantity.numeric), 6, 5)}
        </wui-text>`;
      }
      return html2` <wui-text variant="small-400" color="fg-200">
        ${UiHelperUtil.roundNumber(Number(this.token.quantity.numeric), 6, 5)}
      </wui-text>`;
    }
    return null;
  }
  actionTemplate() {
    if (this.token) {
      if (this.sendTokenAmount && this.sendTokenAmount > Number(this.token.quantity.numeric)) {
        return html2`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`;
      }
      return html2`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`;
    }
    return null;
  }
  onInputChange(event) {
    SendController.setTokenAmount(event.detail);
  }
  onMaxClick() {
    if (this.token && typeof this.gasPrice !== "undefined") {
      const isNetworkToken = this.token.address === void 0 || Object.values(ConstantsUtil.NATIVE_TOKEN_ADDRESS).some((nativeAddress) => {
        var _a;
        return ((_a = this.token) == null ? void 0 : _a.address) === nativeAddress;
      });
      const numericGas = NumberUtil.bigNumber(this.gasPrice).div(NumberUtil.bigNumber(10).pow(Number(this.token.quantity.decimals)));
      const maxValue = isNetworkToken ? NumberUtil.bigNumber(this.token.quantity.numeric).minus(numericGas) : NumberUtil.bigNumber(this.token.quantity.numeric);
      SendController.setTokenAmount(Number(maxValue.toFixed(20)));
    }
  }
  onBuyClick() {
    RouterController.push("OnRampProviders");
  }
};
W3mInputToken.styles = styles_default3;
__decorate3([
  property({ type: Object })
], W3mInputToken.prototype, "token", void 0);
__decorate3([
  property({ type: Number })
], W3mInputToken.prototype, "sendTokenAmount", void 0);
__decorate3([
  property({ type: Number })
], W3mInputToken.prototype, "gasPriceInUSD", void 0);
__decorate3([
  property({ type: Number })
], W3mInputToken.prototype, "gasPrice", void 0);
W3mInputToken = __decorate3([
  customElement("w3m-input-token")
], W3mInputToken);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-send-view/styles.js
var styles_default4 = css2`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-send-view/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletSendView = class W3mWalletSendView2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.token = SendController.state.token;
    this.sendTokenAmount = SendController.state.sendTokenAmount;
    this.receiverAddress = SendController.state.receiverAddress;
    this.receiverProfileName = SendController.state.receiverProfileName;
    this.loading = SendController.state.loading;
    this.gasPriceInUSD = SendController.state.gasPriceInUSD;
    this.gasPrice = SendController.state.gasPrice;
    this.message = "Preview Send";
    this.fetchNetworkPrice();
    this.fetchBalances();
    this.unsubscribe.push(...[
      SendController.subscribe((val) => {
        this.token = val.token;
        this.sendTokenAmount = val.sendTokenAmount;
        this.receiverAddress = val.receiverAddress;
        this.gasPriceInUSD = val.gasPriceInUSD;
        this.receiverProfileName = val.receiverProfileName;
        this.loading = val.loading;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    this.getMessage();
    return html2` <wui-flex flexDirection="column" .padding=${["0", "l", "l", "l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
          .gasPrice=${this.gasPrice}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName ? this.receiverProfileName : this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l", "0", "0", "0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`;
  }
  async fetchBalances() {
    await SendController.fetchTokenBalance();
    SendController.fetchNetworkBalance();
  }
  async fetchNetworkPrice() {
    await SwapController.getNetworkTokenPrice();
    const gas = await SwapController.getInitialGasPrice();
    if ((gas == null ? void 0 : gas.gasPrice) && (gas == null ? void 0 : gas.gasPriceInUSD)) {
      SendController.setGasPrice(gas.gasPrice);
      SendController.setGasPriceInUsd(gas.gasPriceInUSD);
    }
  }
  onButtonClick() {
    RouterController.push("WalletSendPreview");
  }
  getMessage() {
    var _a;
    this.message = "Preview Send";
    if (this.receiverAddress && !CoreHelperUtil.isAddress(this.receiverAddress, ChainController.state.activeChain)) {
      this.message = "Invalid Address";
    }
    if (!this.receiverAddress) {
      this.message = "Add Address";
    }
    if (SendController.hasInsufficientGasFunds()) {
      this.message = "Insufficient Gas Funds";
    }
    if (this.sendTokenAmount && this.token && this.sendTokenAmount > Number(this.token.quantity.numeric)) {
      this.message = "Insufficient Funds";
    }
    if (!this.sendTokenAmount) {
      this.message = "Add Amount";
    }
    if (this.sendTokenAmount && ((_a = this.token) == null ? void 0 : _a.price)) {
      const value = this.sendTokenAmount * this.token.price;
      if (!value) {
        this.message = "Incorrect Value";
      }
    }
    if (!this.token) {
      this.message = "Select Token";
    }
  }
};
W3mWalletSendView.styles = styles_default4;
__decorate4([
  state()
], W3mWalletSendView.prototype, "token", void 0);
__decorate4([
  state()
], W3mWalletSendView.prototype, "sendTokenAmount", void 0);
__decorate4([
  state()
], W3mWalletSendView.prototype, "receiverAddress", void 0);
__decorate4([
  state()
], W3mWalletSendView.prototype, "receiverProfileName", void 0);
__decorate4([
  state()
], W3mWalletSendView.prototype, "loading", void 0);
__decorate4([
  state()
], W3mWalletSendView.prototype, "gasPriceInUSD", void 0);
__decorate4([
  state()
], W3mWalletSendView.prototype, "gasPrice", void 0);
__decorate4([
  state()
], W3mWalletSendView.prototype, "message", void 0);
W3mWalletSendView = __decorate4([
  customElement("w3m-wallet-send-view")
], W3mWalletSendView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-send-select-token-view/styles.js
var styles_default5 = css2`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-send-select-token-view/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSendSelectTokenView = class W3mSendSelectTokenView2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tokenBalances = SendController.state.tokenBalances;
    this.search = "";
    this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
      this.search = value;
    });
    this.unsubscribe.push(...[
      SendController.subscribe((val) => {
        this.tokenBalances = val.tokenBalances;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html2`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `;
  }
  templateSearchInput() {
    return html2`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
  }
  templateTokens() {
    var _a, _b;
    this.tokens = (_a = this.tokenBalances) == null ? void 0 : _a.filter((token) => {
      var _a2;
      return token.chainId === ((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.caipNetworkId);
    });
    if (this.search) {
      this.filteredTokens = (_b = this.tokenBalances) == null ? void 0 : _b.filter((token) => token.name.toLowerCase().includes(this.search.toLowerCase()));
    } else {
      this.filteredTokens = this.tokens;
    }
    return html2`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0", "s", "0", "s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m", "s", "s", "s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens && this.filteredTokens.length > 0 ? this.filteredTokens.map((token) => html2`<wui-list-token
                    @click=${this.handleTokenClick.bind(this, token)}
                    ?clickable=${true}
                    tokenName=${token.name}
                    tokenImageUrl=${token.iconUrl}
                    tokenAmount=${token.quantity.numeric}
                    tokenValue=${token.value}
                    tokenCurrency=${token.symbol}
                  ></wui-list-token>`) : html2`<wui-flex
                .padding=${["4xl", "0", "0", "0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `;
  }
  onBuyClick() {
    RouterController.push("OnRampProviders");
  }
  onInputChange(event) {
    this.onDebouncedSearch(event.detail);
  }
  handleTokenClick(token) {
    SendController.setToken(token);
    SendController.setTokenAmount(void 0);
    RouterController.goBack();
  }
};
W3mSendSelectTokenView.styles = styles_default5;
__decorate5([
  state()
], W3mSendSelectTokenView.prototype, "tokenBalances", void 0);
__decorate5([
  state()
], W3mSendSelectTokenView.prototype, "tokens", void 0);
__decorate5([
  state()
], W3mSendSelectTokenView.prototype, "filteredTokens", void 0);
__decorate5([
  state()
], W3mSendSelectTokenView.prototype, "search", void 0);
W3mSendSelectTokenView = __decorate5([
  customElement("w3m-wallet-send-select-token-view")
], W3mSendSelectTokenView);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-preview-item/styles.js
var styles_default6 = css`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-preview-item/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiPreviewItem = class WuiPreviewItem2 extends LitElement {
  constructor() {
    super(...arguments);
    this.text = "";
    this.address = "";
    this.isAddress = false;
  }
  render() {
    return html`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`;
  }
  imageTemplate() {
    if (this.isAddress) {
      return html`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`;
    } else if (this.imageSrc) {
      return html`<wui-image src=${this.imageSrc}></wui-image>`;
    }
    return html`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`;
  }
};
WuiPreviewItem.styles = [resetStyles, elementStyles, styles_default6];
__decorate6([
  property2()
], WuiPreviewItem.prototype, "text", void 0);
__decorate6([
  property2()
], WuiPreviewItem.prototype, "address", void 0);
__decorate6([
  property2()
], WuiPreviewItem.prototype, "imageSrc", void 0);
__decorate6([
  property2({ type: Boolean })
], WuiPreviewItem.prototype, "isAddress", void 0);
WuiPreviewItem = __decorate6([
  customElement("wui-preview-item")
], WuiPreviewItem);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-content/styles.js
var styles_default7 = css`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-content/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiListContent = class WuiListContent2 extends LitElement {
  constructor() {
    super(...arguments);
    this.imageSrc = void 0;
    this.textTitle = "";
    this.textValue = void 0;
  }
  render() {
    return html`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue ? "fg-200" : "fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `;
  }
  templateContent() {
    if (this.imageSrc) {
      return html`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`;
    } else if (this.textValue) {
      return html` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`;
    }
    return html`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`;
  }
};
WuiListContent.styles = [resetStyles, elementStyles, styles_default7];
__decorate7([
  property2()
], WuiListContent.prototype, "imageSrc", void 0);
__decorate7([
  property2()
], WuiListContent.prototype, "textTitle", void 0);
__decorate7([
  property2()
], WuiListContent.prototype, "textValue", void 0);
WuiListContent = __decorate7([
  customElement("wui-list-content")
], WuiListContent);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-wallet-send-details/styles.js
var styles_default8 = css2`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-wallet-send-details/index.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletSendDetails = class W3mWalletSendDetails2 extends LitElement2 {
  render() {
    return html2` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${ifDefined(UiHelperUtil.formatNumberToLocalString(this.networkFee, 2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${UiHelperUtil.getTruncateString({
      string: this.receiverAddress ?? "",
      charsStart: 4,
      charsEnd: 4,
      truncate: "middle"
    })}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`;
  }
  networkTemplate() {
    var _a;
    if ((_a = this.caipNetwork) == null ? void 0 : _a.name) {
      return html2` <wui-list-content
        @click=${() => this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`;
    }
    return null;
  }
  onNetworkClick(network) {
    if (network) {
      RouterController.push("Networks", { network });
    }
  }
};
W3mWalletSendDetails.styles = styles_default8;
__decorate8([
  property()
], W3mWalletSendDetails.prototype, "receiverAddress", void 0);
__decorate8([
  property({ type: Object })
], W3mWalletSendDetails.prototype, "caipNetwork", void 0);
__decorate8([
  property({ type: Number })
], W3mWalletSendDetails.prototype, "networkFee", void 0);
W3mWalletSendDetails = __decorate8([
  customElement("w3m-wallet-send-details")
], W3mWalletSendDetails);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-send-preview-view/styles.js
var styles_default9 = css2`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-send-preview-view/index.js
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletSendPreviewView = class W3mWalletSendPreviewView2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.token = SendController.state.token;
    this.sendTokenAmount = SendController.state.sendTokenAmount;
    this.receiverAddress = SendController.state.receiverAddress;
    this.receiverProfileName = SendController.state.receiverProfileName;
    this.receiverProfileImageUrl = SendController.state.receiverProfileImageUrl;
    this.gasPriceInUSD = SendController.state.gasPriceInUSD;
    this.caipNetwork = ChainController.state.activeCaipNetwork;
    this.unsubscribe.push(...[
      SendController.subscribe((val) => {
        this.token = val.token;
        this.sendTokenAmount = val.sendTokenAmount;
        this.receiverAddress = val.receiverAddress;
        this.gasPriceInUSD = val.gasPriceInUSD;
        this.receiverProfileName = val.receiverProfileName;
        this.receiverProfileImageUrl = val.receiverProfileImageUrl;
      }),
      ChainController.subscribeKey("activeCaipNetwork", (val) => this.caipNetwork = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a, _b;
    return html2` <wui-flex flexDirection="column" .padding=${["0", "l", "l", "l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0", "xs", "0", "xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount ? UiHelperUtil.roundNumber(this.sendTokenAmount, 6, 5) : "unknown"} ${(_a = this.token) == null ? void 0 : _a.symbol}"
            .imageSrc=${(_b = this.token) == null ? void 0 : _b.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName ? UiHelperUtil.getTruncateString({
      string: this.receiverProfileName,
      charsStart: 20,
      charsEnd: 0,
      truncate: "end"
    }) : UiHelperUtil.getTruncateString({
      string: this.receiverAddress ? this.receiverAddress : "",
      charsStart: 4,
      charsEnd: 4,
      truncate: "middle"
    })}"
            address=${this.receiverAddress ?? ""}
            .imageSrc=${this.receiverProfileImageUrl ?? void 0}
            .isAddress=${true}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl", "0", "0", "0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s", "0", "0", "0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l", "0", "0", "0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`;
  }
  sendValueTemplate() {
    if (this.token && this.sendTokenAmount) {
      const price = this.token.price;
      const totalValue = price * this.sendTokenAmount;
      return html2`<wui-text variant="paragraph-400" color="fg-100"
        >$${totalValue.toFixed(2)}</wui-text
      >`;
    }
    return null;
  }
  onSendClick() {
    SendController.sendToken();
  }
  onCancelClick() {
    RouterController.goBack();
  }
};
W3mWalletSendPreviewView.styles = styles_default9;
__decorate9([
  state()
], W3mWalletSendPreviewView.prototype, "token", void 0);
__decorate9([
  state()
], W3mWalletSendPreviewView.prototype, "sendTokenAmount", void 0);
__decorate9([
  state()
], W3mWalletSendPreviewView.prototype, "receiverAddress", void 0);
__decorate9([
  state()
], W3mWalletSendPreviewView.prototype, "receiverProfileName", void 0);
__decorate9([
  state()
], W3mWalletSendPreviewView.prototype, "receiverProfileImageUrl", void 0);
__decorate9([
  state()
], W3mWalletSendPreviewView.prototype, "gasPriceInUSD", void 0);
__decorate9([
  state()
], W3mWalletSendPreviewView.prototype, "caipNetwork", void 0);
W3mWalletSendPreviewView = __decorate9([
  customElement("w3m-wallet-send-preview-view")
], W3mWalletSendPreviewView);
export {
  W3mSendSelectTokenView,
  W3mWalletSendPreviewView,
  W3mWalletSendView
};
//# sourceMappingURL=send-SVVLWBPF.js.map
