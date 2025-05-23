import "./chunk-RH4QGRDN.js";
import "./chunk-BH5XKHVM.js";
import "./chunk-LD4QFRZW.js";
import "./chunk-GDWZI2BJ.js";
import "./chunk-5A7QHWY6.js";
import "./chunk-HNB35IZC.js";
import "./chunk-BHIBQBXR.js";
import "./chunk-FS3CSUOV.js";
import "./chunk-HZGWUS6I.js";
import "./chunk-WK4LCREZ.js";
import "./chunk-UJR4CR2X.js";
import "./chunk-QACLXGLR.js";
import "./chunk-ZWVZUKRU.js";
import {
  LitElement as LitElement2,
  css as css2,
  html as html2,
  property,
  property2,
  state,
  state2
} from "./chunk-COKH4YWJ.js";
import {
  AccountController,
  ChainController,
  ConstantsUtil2 as ConstantsUtil,
  CoreHelperUtil,
  EventsController,
  InputUtil,
  MathUtil,
  ModalController,
  NumberUtil,
  RouterController,
  SwapController,
  UiHelperUtil,
  W3mFrameRpcConstants,
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

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-swap-details/styles.js
var styles_default = css2`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-swap-details/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var slippageRate = ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE;
var WuiSwapDetails = class WuiSwapDetails2 extends LitElement2 {
  constructor() {
    var _a;
    super();
    this.unsubscribe = [];
    this.networkName = (_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.name;
    this.detailsOpen = false;
    this.sourceToken = SwapController.state.sourceToken;
    this.toToken = SwapController.state.toToken;
    this.toTokenAmount = SwapController.state.toTokenAmount;
    this.sourceTokenPriceInUSD = SwapController.state.sourceTokenPriceInUSD;
    this.toTokenPriceInUSD = SwapController.state.toTokenPriceInUSD;
    this.priceImpact = SwapController.state.priceImpact;
    this.maxSlippage = SwapController.state.maxSlippage;
    this.networkTokenSymbol = SwapController.state.networkTokenSymbol;
    this.inputError = SwapController.state.inputError;
    this.unsubscribe.push(...[
      SwapController.subscribe((newState) => {
        this.sourceToken = newState.sourceToken;
        this.toToken = newState.toToken;
        this.toTokenAmount = newState.toTokenAmount;
        this.priceImpact = newState.priceImpact;
        this.maxSlippage = newState.maxSlippage;
        this.sourceTokenPriceInUSD = newState.sourceTokenPriceInUSD;
        this.toTokenPriceInUSD = newState.toTokenPriceInUSD;
        this.inputError = newState.inputError;
      })
    ]);
  }
  render() {
    const minReceivedAmount = this.toTokenAmount && this.maxSlippage ? NumberUtil.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString() : null;
    if (!this.sourceToken || !this.toToken || this.inputError) {
      return null;
    }
    const toTokenSwappedAmount = this.sourceTokenPriceInUSD && this.toTokenPriceInUSD ? 1 / this.toTokenPriceInUSD * this.sourceTokenPriceInUSD : 0;
    return html2`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0", "xs", "0", "xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${UiHelperUtil.formatNumberToLocalString(toTokenSwappedAmount, 3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${UiHelperUtil.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen ? html2`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  ${this.priceImpact ? html2` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${UiHelperUtil.formatNumberToLocalString(this.priceImpact, 3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>` : null}
                  ${this.maxSlippage && this.sourceToken.symbol ? html2`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${minReceivedAmount ? `Transaction will be reversed if you receive less than ${UiHelperUtil.formatNumberToLocalString(minReceivedAmount, 6)} ${this.toToken.symbol} due to price changes.` : ""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${UiHelperUtil.formatNumberToLocalString(this.maxSlippage, 6)}
                              ${this.toToken.symbol} ${slippageRate}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>` : null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              ` : null}
        </wui-flex>
      </wui-flex>
    `;
  }
  toggleDetails() {
    this.detailsOpen = !this.detailsOpen;
  }
};
WuiSwapDetails.styles = [styles_default];
__decorate([
  state()
], WuiSwapDetails.prototype, "networkName", void 0);
__decorate([
  property()
], WuiSwapDetails.prototype, "detailsOpen", void 0);
__decorate([
  state()
], WuiSwapDetails.prototype, "sourceToken", void 0);
__decorate([
  state()
], WuiSwapDetails.prototype, "toToken", void 0);
__decorate([
  state()
], WuiSwapDetails.prototype, "toTokenAmount", void 0);
__decorate([
  state()
], WuiSwapDetails.prototype, "sourceTokenPriceInUSD", void 0);
__decorate([
  state()
], WuiSwapDetails.prototype, "toTokenPriceInUSD", void 0);
__decorate([
  state()
], WuiSwapDetails.prototype, "priceImpact", void 0);
__decorate([
  state()
], WuiSwapDetails.prototype, "maxSlippage", void 0);
__decorate([
  state()
], WuiSwapDetails.prototype, "networkTokenSymbol", void 0);
__decorate([
  state()
], WuiSwapDetails.prototype, "inputError", void 0);
WuiSwapDetails = __decorate([
  customElement("w3m-swap-details")
], WuiSwapDetails);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-swap-input-skeleton/styles.js
var styles_default2 = css2`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-swap-input-skeleton/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSwapInputSkeleton = class W3mSwapInputSkeleton2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.target = "sourceToken";
  }
  render() {
    return html2`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `;
  }
  templateTokenSelectButton() {
    return html2`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `;
  }
};
W3mSwapInputSkeleton.styles = [styles_default2];
__decorate2([
  property()
], W3mSwapInputSkeleton.prototype, "target", void 0);
W3mSwapInputSkeleton = __decorate2([
  customElement("w3m-swap-input-skeleton")
], W3mSwapInputSkeleton);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-swap-input/styles.js
var styles_default3 = css2`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
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

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-swap-input/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MINIMUM_USD_VALUE_TO_CONVERT = 5e-5;
var W3mSwapInput = class W3mSwapInput2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.focused = false;
    this.price = 0;
    this.target = "sourceToken";
    this.onSetAmount = null;
    this.onSetMaxValue = null;
  }
  render() {
    const marketValue = this.marketValue || "0";
    const isMarketValueGreaterThanZero = NumberUtil.bigNumber(marketValue).gt("0");
    return html2`
      <wui-flex class="${this.focused ? "focus" : ""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${() => this.onFocusChange(true)}
            @focusout=${() => this.onFocusChange(false)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${isMarketValueGreaterThanZero ? `$${UiHelperUtil.formatNumberToLocalString(this.marketValue, 2)}` : null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `;
  }
  handleKeydown(event) {
    return InputUtil.numericInputKeyDown(event, this.value, (value) => {
      var _a;
      return (_a = this.onSetAmount) == null ? void 0 : _a.call(this, this.target, value);
    });
  }
  dispatchInputChangeEvent(event) {
    if (!this.onSetAmount) {
      return;
    }
    const value = event.target.value.replace(/[^0-9.]/gu, "");
    if (value === "," || value === ".") {
      this.onSetAmount(this.target, "0.");
    } else if (value.endsWith(",")) {
      this.onSetAmount(this.target, value.replace(",", "."));
    } else {
      this.onSetAmount(this.target, value);
    }
  }
  setMaxValueToInput() {
    var _a;
    (_a = this.onSetMaxValue) == null ? void 0 : _a.call(this, this.target, this.balance);
  }
  templateTokenSelectButton() {
    if (!this.token) {
      return html2` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`;
    }
    return html2`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `;
  }
  tokenBalanceTemplate() {
    const balanceValueInUSD = NumberUtil.multiply(this.balance, this.price);
    const haveBalance = balanceValueInUSD ? balanceValueInUSD == null ? void 0 : balanceValueInUSD.gt(MINIMUM_USD_VALUE_TO_CONVERT) : false;
    return html2`
      ${haveBalance ? html2`<wui-text variant="small-400" color="fg-200">
            ${UiHelperUtil.formatNumberToLocalString(this.balance, 2)}
          </wui-text>` : null}
      ${this.target === "sourceToken" ? this.tokenActionButtonTemplate(haveBalance) : null}
    `;
  }
  tokenActionButtonTemplate(haveBalance) {
    if (haveBalance) {
      return html2` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`;
    }
    return html2` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`;
  }
  onFocusChange(state3) {
    this.focused = state3;
  }
  onSelectToken() {
    EventsController.sendEvent({ type: "track", event: "CLICK_SELECT_TOKEN_TO_SWAP" });
    RouterController.push("SwapSelectToken", {
      target: this.target
    });
  }
  onBuyToken() {
    RouterController.push("OnRampProviders");
  }
};
W3mSwapInput.styles = [styles_default3];
__decorate3([
  property()
], W3mSwapInput.prototype, "focused", void 0);
__decorate3([
  property()
], W3mSwapInput.prototype, "balance", void 0);
__decorate3([
  property()
], W3mSwapInput.prototype, "value", void 0);
__decorate3([
  property()
], W3mSwapInput.prototype, "price", void 0);
__decorate3([
  property()
], W3mSwapInput.prototype, "marketValue", void 0);
__decorate3([
  property()
], W3mSwapInput.prototype, "disabled", void 0);
__decorate3([
  property()
], W3mSwapInput.prototype, "target", void 0);
__decorate3([
  property()
], W3mSwapInput.prototype, "token", void 0);
__decorate3([
  property()
], W3mSwapInput.prototype, "onSetAmount", void 0);
__decorate3([
  property()
], W3mSwapInput.prototype, "onSetMaxValue", void 0);
W3mSwapInput = __decorate3([
  customElement("w3m-swap-input")
], W3mSwapInput);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-swap-view/styles.js
var styles_default4 = css2`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-swap-view/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSwapView = class W3mSwapView2 extends LitElement2 {
  constructor() {
    var _a;
    super();
    this.unsubscribe = [];
    this.detailsOpen = false;
    this.caipNetworkId = (_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId;
    this.initialized = SwapController.state.initialized;
    this.loadingQuote = SwapController.state.loadingQuote;
    this.loadingPrices = SwapController.state.loadingPrices;
    this.loadingTransaction = SwapController.state.loadingTransaction;
    this.sourceToken = SwapController.state.sourceToken;
    this.sourceTokenAmount = SwapController.state.sourceTokenAmount;
    this.sourceTokenPriceInUSD = SwapController.state.sourceTokenPriceInUSD;
    this.toToken = SwapController.state.toToken;
    this.toTokenAmount = SwapController.state.toTokenAmount;
    this.toTokenPriceInUSD = SwapController.state.toTokenPriceInUSD;
    this.inputError = SwapController.state.inputError;
    this.gasPriceInUSD = SwapController.state.gasPriceInUSD;
    this.fetchError = SwapController.state.fetchError;
    this.onDebouncedGetSwapCalldata = CoreHelperUtil.debounce(async () => {
      await SwapController.swapTokens();
    }, 200);
    ChainController.subscribeKey("activeCaipNetwork", (newCaipNetwork) => {
      if (this.caipNetworkId !== (newCaipNetwork == null ? void 0 : newCaipNetwork.caipNetworkId)) {
        this.caipNetworkId = newCaipNetwork == null ? void 0 : newCaipNetwork.caipNetworkId;
        SwapController.resetState();
        SwapController.initializeState();
      }
    });
    this.unsubscribe.push(...[
      ModalController.subscribeKey("open", (isOpen) => {
        if (!isOpen) {
          SwapController.resetState();
        }
      }),
      RouterController.subscribeKey("view", (newRoute) => {
        if (!newRoute.includes("Swap")) {
          SwapController.resetValues();
        }
      }),
      SwapController.subscribe((newState) => {
        this.initialized = newState.initialized;
        this.loadingQuote = newState.loadingQuote;
        this.loadingPrices = newState.loadingPrices;
        this.loadingTransaction = newState.loadingTransaction;
        this.sourceToken = newState.sourceToken;
        this.sourceTokenAmount = newState.sourceTokenAmount;
        this.sourceTokenPriceInUSD = newState.sourceTokenPriceInUSD;
        this.toToken = newState.toToken;
        this.toTokenAmount = newState.toTokenAmount;
        this.toTokenPriceInUSD = newState.toTokenPriceInUSD;
        this.inputError = newState.inputError;
        this.gasPriceInUSD = newState.gasPriceInUSD;
        this.fetchError = newState.fetchError;
      })
    ]);
  }
  firstUpdated() {
    SwapController.initializeState();
    this.watchTokensAndValues();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe == null ? void 0 : unsubscribe());
    clearInterval(this.interval);
  }
  render() {
    return html2`
      <wui-flex flexDirection="column" .padding=${["0", "l", "l", "l"]} gap="s">
        ${this.initialized ? this.templateSwap() : this.templateLoading()}
      </wui-flex>
    `;
  }
  watchTokensAndValues() {
    this.interval = setInterval(() => {
      SwapController.getNetworkTokenPrice();
      SwapController.getMyTokensWithBalance();
      SwapController.swapTokens();
    }, 1e4);
  }
  templateSwap() {
    return html2`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken", this.sourceToken)}
          ${this.templateTokenInput("toToken", this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `;
  }
  actionButtonLabel() {
    if (this.fetchError) {
      return "Swap";
    }
    if (!this.sourceToken || !this.toToken) {
      return "Select token";
    }
    if (!this.sourceTokenAmount) {
      return "Enter amount";
    }
    if (this.inputError) {
      return this.inputError;
    }
    return "Review swap";
  }
  templateReplaceTokensButton() {
    return html2`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `;
  }
  templateLoading() {
    return html2`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `;
  }
  templateTokenInput(target, token) {
    var _a, _b;
    const myToken = (_a = SwapController.state.myTokensWithBalance) == null ? void 0 : _a.find((ct) => (ct == null ? void 0 : ct.address) === (token == null ? void 0 : token.address));
    const amount = target === "toToken" ? this.toTokenAmount : this.sourceTokenAmount;
    const price = target === "toToken" ? this.toTokenPriceInUSD : this.sourceTokenPriceInUSD;
    const marketValue = NumberUtil.parseLocalStringToNumber(amount) * price;
    return html2`<w3m-swap-input
      .value=${target === "toToken" ? this.toTokenAmount : this.sourceTokenAmount}
      .disabled=${target === "toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${target}
      .token=${token}
      .balance=${(_b = myToken == null ? void 0 : myToken.quantity) == null ? void 0 : _b.numeric}
      .price=${myToken == null ? void 0 : myToken.price}
      .marketValue=${marketValue}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`;
  }
  onSetMaxValue(target, balance) {
    const token = target === "sourceToken" ? this.sourceToken : this.toToken;
    const isNetworkToken = (token == null ? void 0 : token.address) === ChainController.getActiveNetworkTokenAddress();
    let value = "0";
    if (!balance) {
      value = "0";
      this.handleChangeAmount(target, value);
      return;
    }
    if (!this.gasPriceInUSD) {
      value = balance;
      this.handleChangeAmount(target, value);
      return;
    }
    const amountOfTokenGasRequires = NumberUtil.bigNumber(this.gasPriceInUSD.toFixed(5)).div(this.sourceTokenPriceInUSD);
    const maxValue = isNetworkToken ? NumberUtil.bigNumber(balance).minus(amountOfTokenGasRequires) : NumberUtil.bigNumber(balance);
    this.handleChangeAmount(target, maxValue.gt(0) ? maxValue.toFixed(20) : "0");
  }
  templateDetails() {
    if (!this.sourceToken || !this.toToken || this.inputError) {
      return null;
    }
    return html2`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`;
  }
  handleChangeAmount(target, value) {
    SwapController.clearError();
    if (target === "sourceToken") {
      SwapController.setSourceTokenAmount(value);
    } else {
      SwapController.setToTokenAmount(value);
    }
    this.onDebouncedGetSwapCalldata();
  }
  templateActionButton() {
    const haveNoTokenSelected = !this.toToken || !this.sourceToken;
    const haveNoAmount = !this.sourceTokenAmount;
    const loading = this.loadingQuote || this.loadingPrices || this.loadingTransaction;
    const disabled = loading || haveNoTokenSelected || haveNoAmount || this.inputError;
    return html2` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${haveNoTokenSelected ? "neutral" : "main"}
        .loading=${loading}
        .disabled=${disabled}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`;
  }
  onSwitchTokens() {
    SwapController.switchTokens();
  }
  async onSwapPreview() {
    var _a, _b;
    if (this.fetchError) {
      await SwapController.swapTokens();
    }
    EventsController.sendEvent({
      type: "track",
      event: "INITIATE_SWAP",
      properties: {
        network: this.caipNetworkId || "",
        swapFromToken: ((_a = this.sourceToken) == null ? void 0 : _a.symbol) || "",
        swapToToken: ((_b = this.toToken) == null ? void 0 : _b.symbol) || "",
        swapFromAmount: this.sourceTokenAmount || "",
        swapToAmount: this.toTokenAmount || "",
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    RouterController.push("SwapPreview");
  }
};
W3mSwapView.styles = styles_default4;
__decorate4([
  state()
], W3mSwapView.prototype, "interval", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "detailsOpen", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "caipNetworkId", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "initialized", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "loadingQuote", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "loadingPrices", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "loadingTransaction", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "sourceToken", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "sourceTokenAmount", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "sourceTokenPriceInUSD", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "toToken", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "toTokenAmount", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "toTokenPriceInUSD", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "inputError", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "gasPriceInUSD", void 0);
__decorate4([
  state()
], W3mSwapView.prototype, "fetchError", void 0);
W3mSwapView = __decorate4([
  customElement("w3m-swap-view")
], W3mSwapView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-swap-preview-view/styles.js
var styles_default5 = css2`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-swap-preview-view/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSwapPreviewView = class W3mSwapPreviewView2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.detailsOpen = true;
    this.approvalTransaction = SwapController.state.approvalTransaction;
    this.swapTransaction = SwapController.state.swapTransaction;
    this.sourceToken = SwapController.state.sourceToken;
    this.sourceTokenAmount = SwapController.state.sourceTokenAmount ?? "";
    this.sourceTokenPriceInUSD = SwapController.state.sourceTokenPriceInUSD;
    this.toToken = SwapController.state.toToken;
    this.toTokenAmount = SwapController.state.toTokenAmount ?? "";
    this.toTokenPriceInUSD = SwapController.state.toTokenPriceInUSD;
    this.caipNetwork = ChainController.state.activeCaipNetwork;
    this.balanceSymbol = AccountController.state.balanceSymbol;
    this.gasPriceInUSD = SwapController.state.gasPriceInUSD;
    this.inputError = SwapController.state.inputError;
    this.loadingQuote = SwapController.state.loadingQuote;
    this.loadingApprovalTransaction = SwapController.state.loadingApprovalTransaction;
    this.loadingBuildTransaction = SwapController.state.loadingBuildTransaction;
    this.loadingTransaction = SwapController.state.loadingTransaction;
    this.unsubscribe.push(...[
      AccountController.subscribeKey("balanceSymbol", (newBalanceSymbol) => {
        if (this.balanceSymbol !== newBalanceSymbol) {
          RouterController.goBack();
        }
      }),
      ChainController.subscribeKey("activeCaipNetwork", (newCaipNetwork) => {
        if (this.caipNetwork !== newCaipNetwork) {
          this.caipNetwork = newCaipNetwork;
        }
      }),
      SwapController.subscribe((newState) => {
        this.approvalTransaction = newState.approvalTransaction;
        this.swapTransaction = newState.swapTransaction;
        this.sourceToken = newState.sourceToken;
        this.gasPriceInUSD = newState.gasPriceInUSD;
        this.toToken = newState.toToken;
        this.gasPriceInUSD = newState.gasPriceInUSD;
        this.toTokenPriceInUSD = newState.toTokenPriceInUSD;
        this.sourceTokenAmount = newState.sourceTokenAmount ?? "";
        this.toTokenAmount = newState.toTokenAmount ?? "";
        this.inputError = newState.inputError;
        if (newState.inputError) {
          RouterController.goBack();
        }
        this.loadingQuote = newState.loadingQuote;
        this.loadingApprovalTransaction = newState.loadingApprovalTransaction;
        this.loadingBuildTransaction = newState.loadingBuildTransaction;
        this.loadingTransaction = newState.loadingTransaction;
      })
    ]);
  }
  firstUpdated() {
    SwapController.getTransaction();
    this.refreshTransaction();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe == null ? void 0 : unsubscribe());
    clearInterval(this.interval);
  }
  render() {
    return html2`
      <wui-flex flexDirection="column" .padding=${["0", "l", "l", "l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `;
  }
  refreshTransaction() {
    this.interval = setInterval(() => {
      if (!SwapController.getApprovalLoadingState()) {
        SwapController.getTransaction();
      }
    }, 1e4);
  }
  templateSwap() {
    var _a, _b, _c, _d;
    const sourceTokenText = `${UiHelperUtil.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(_a = this.sourceToken) == null ? void 0 : _a.symbol}`;
    const toTokenText = `${UiHelperUtil.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(_b = this.toToken) == null ? void 0 : _b.symbol}`;
    const sourceTokenValue = parseFloat(this.sourceTokenAmount) * this.sourceTokenPriceInUSD;
    const toTokenValue = parseFloat(this.toTokenAmount) * this.toTokenPriceInUSD - (this.gasPriceInUSD || 0);
    const sentPrice = UiHelperUtil.formatNumberToLocalString(sourceTokenValue);
    const receivePrice = UiHelperUtil.formatNumberToLocalString(toTokenValue);
    const loading = this.loadingQuote || this.loadingBuildTransaction || this.loadingTransaction || this.loadingApprovalTransaction;
    return html2`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${sentPrice}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${sourceTokenText}
              imageSrc=${(_c = this.sourceToken) == null ? void 0 : _c.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${receivePrice}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${toTokenText}
              imageSrc=${(_d = this.toToken) == null ? void 0 : _d.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${loading}
            ?disabled=${loading}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `;
  }
  templateDetails() {
    if (!this.sourceToken || !this.toToken || this.inputError) {
      return null;
    }
    return html2`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`;
  }
  actionButtonLabel() {
    if (this.loadingApprovalTransaction) {
      return "Approving...";
    }
    if (this.approvalTransaction) {
      return "Approve";
    }
    return "Swap";
  }
  onCancelTransaction() {
    RouterController.goBack();
  }
  onSendTransaction() {
    if (this.approvalTransaction) {
      SwapController.sendTransactionForApproval(this.approvalTransaction);
    } else {
      SwapController.sendTransactionForSwap(this.swapTransaction);
    }
  }
};
W3mSwapPreviewView.styles = styles_default5;
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "interval", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "detailsOpen", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "approvalTransaction", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "swapTransaction", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "sourceToken", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "sourceTokenAmount", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "sourceTokenPriceInUSD", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "toToken", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "toTokenAmount", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "toTokenPriceInUSD", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "caipNetwork", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "balanceSymbol", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "gasPriceInUSD", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "inputError", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "loadingQuote", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "loadingApprovalTransaction", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "loadingBuildTransaction", void 0);
__decorate5([
  state()
], W3mSwapPreviewView.prototype, "loadingTransaction", void 0);
W3mSwapPreviewView = __decorate5([
  customElement("w3m-swap-preview-view")
], W3mSwapPreviewView);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-token-list-item/styles.js
var styles_default6 = css`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-token-list-item/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiTokenListItem = class WuiTokenListItem2 extends LitElement {
  constructor() {
    super();
    this.observer = new IntersectionObserver(() => void 0);
    this.imageSrc = void 0;
    this.name = void 0;
    this.symbol = void 0;
    this.price = void 0;
    this.amount = void 0;
    this.visible = false;
    this.imageError = false;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.visible = true;
        } else {
          this.visible = false;
        }
      });
    }, { threshold: 0.1 });
  }
  firstUpdated() {
    this.observer.observe(this);
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    var _a;
    if (!this.visible) {
      return null;
    }
    const value = this.amount && this.price ? (_a = NumberUtil.multiply(this.price, this.amount)) == null ? void 0 : _a.toFixed(3) : null;
    return html`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${value ? html`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${UiHelperUtil.formatNumberToLocalString(value, 3)}
                  </wui-text>
                ` : null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount ? html`<wui-text variant="small-400" color="fg-200">
                  ${UiHelperUtil.formatNumberToLocalString(this.amount, 4)}
                </wui-text>` : null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
  }
  visualTemplate() {
    if (this.imageError) {
      return html`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`;
    }
    if (this.imageSrc) {
      return html`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`;
    }
    return null;
  }
  imageLoadError() {
    this.imageError = true;
  }
};
WuiTokenListItem.styles = [resetStyles, elementStyles, styles_default6];
__decorate6([
  property2()
], WuiTokenListItem.prototype, "imageSrc", void 0);
__decorate6([
  property2()
], WuiTokenListItem.prototype, "name", void 0);
__decorate6([
  property2()
], WuiTokenListItem.prototype, "symbol", void 0);
__decorate6([
  property2()
], WuiTokenListItem.prototype, "price", void 0);
__decorate6([
  property2()
], WuiTokenListItem.prototype, "amount", void 0);
__decorate6([
  state2()
], WuiTokenListItem.prototype, "visible", void 0);
__decorate6([
  state2()
], WuiTokenListItem.prototype, "imageError", void 0);
WuiTokenListItem = __decorate6([
  customElement("wui-token-list-item")
], WuiTokenListItem);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-swap-select-token-view/styles.js
var styles_default7 = css2`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-swap-select-token-view/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSwapSelectTokenView = class W3mSwapSelectTokenView2 extends LitElement2 {
  constructor() {
    var _a;
    super();
    this.unsubscribe = [];
    this.targetToken = (_a = RouterController.state.data) == null ? void 0 : _a.target;
    this.sourceToken = SwapController.state.sourceToken;
    this.sourceTokenAmount = SwapController.state.sourceTokenAmount;
    this.toToken = SwapController.state.toToken;
    this.myTokensWithBalance = SwapController.state.myTokensWithBalance;
    this.popularTokens = SwapController.state.popularTokens;
    this.searchValue = "";
    this.unsubscribe.push(...[
      SwapController.subscribe((newState) => {
        this.sourceToken = newState.sourceToken;
        this.toToken = newState.toToken;
        this.myTokensWithBalance = newState.myTokensWithBalance;
      })
    ]);
  }
  updated() {
    var _a, _b;
    const suggestedTokensContainer = (_a = this.renderRoot) == null ? void 0 : _a.querySelector(".suggested-tokens-container");
    suggestedTokensContainer == null ? void 0 : suggestedTokensContainer.addEventListener("scroll", this.handleSuggestedTokensScroll.bind(this));
    const tokensList = (_b = this.renderRoot) == null ? void 0 : _b.querySelector(".tokens");
    tokensList == null ? void 0 : tokensList.addEventListener("scroll", this.handleTokenListScroll.bind(this));
  }
  disconnectedCallback() {
    var _a, _b;
    super.disconnectedCallback();
    const suggestedTokensContainer = (_a = this.renderRoot) == null ? void 0 : _a.querySelector(".suggested-tokens-container");
    const tokensList = (_b = this.renderRoot) == null ? void 0 : _b.querySelector(".tokens");
    suggestedTokensContainer == null ? void 0 : suggestedTokensContainer.removeEventListener("scroll", this.handleSuggestedTokensScroll.bind(this));
    tokensList == null ? void 0 : tokensList.removeEventListener("scroll", this.handleTokenListScroll.bind(this));
    clearInterval(this.interval);
  }
  render() {
    return html2`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `;
  }
  onSelectToken(token) {
    if (this.targetToken === "sourceToken") {
      SwapController.setSourceToken(token);
    } else {
      SwapController.setToToken(token);
      if (this.sourceToken && this.sourceTokenAmount) {
        SwapController.swapTokens();
      }
    }
    RouterController.goBack();
  }
  templateSearchInput() {
    return html2`
      <wui-flex .padding=${["3xs", "s", "0", "s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `;
  }
  templateTokens() {
    const yourTokens = this.myTokensWithBalance ? Object.values(this.myTokensWithBalance) : [];
    const tokens = this.popularTokens ? this.popularTokens : [];
    const filteredYourTokens = this.filterTokensWithText(yourTokens, this.searchValue);
    const filteredTokens = this.filterTokensWithText(tokens, this.searchValue);
    return html2`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0", "s", "s", "s"]} flexDirection="column">
          ${(filteredYourTokens == null ? void 0 : filteredYourTokens.length) > 0 ? html2`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${filteredYourTokens.map((token) => {
      var _a, _b, _c;
      const selected = token.symbol === ((_a = this.sourceToken) == null ? void 0 : _a.symbol) || token.symbol === ((_b = this.toToken) == null ? void 0 : _b.symbol);
      return html2`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${token.symbol}"
                      name=${token.name}
                      ?disabled=${selected}
                      symbol=${token.symbol}
                      price=${token == null ? void 0 : token.price}
                      amount=${(_c = token == null ? void 0 : token.quantity) == null ? void 0 : _c.numeric}
                      imageSrc=${token.logoUri}
                      @click=${() => {
        if (!selected) {
          this.onSelectToken(token);
        }
      }}
                    >
                    </wui-token-list-item>
                  `;
    })}
              ` : null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${(filteredTokens == null ? void 0 : filteredTokens.length) > 0 ? filteredTokens.map((token) => html2`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${token.symbol}"
                    name=${token.name}
                    symbol=${token.symbol}
                    imageSrc=${token.logoUri}
                    @click=${() => this.onSelectToken(token)}
                  >
                  </wui-token-list-item>
                `) : null}
        </wui-flex>
      </wui-flex>
    `;
  }
  templateSuggestedTokens() {
    const tokens = SwapController.state.suggestedTokens ? SwapController.state.suggestedTokens.slice(0, 8) : null;
    if (!tokens) {
      return null;
    }
    return html2`
      <wui-flex class="suggested-tokens-container" .padding=${["0", "s", "0", "s"]} gap="xs">
        ${tokens.map((token) => html2`
            <wui-token-button
              text=${token.symbol}
              imageSrc=${token.logoUri}
              @click=${() => this.onSelectToken(token)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `;
  }
  onSearchInputChange(event) {
    this.searchValue = event.detail;
  }
  handleSuggestedTokensScroll() {
    var _a;
    const container = (_a = this.renderRoot) == null ? void 0 : _a.querySelector(".suggested-tokens-container");
    if (!container) {
      return;
    }
    container.style.setProperty("--suggested-tokens-scroll--left-opacity", MathUtil.interpolate([0, 100], [0, 1], container.scrollLeft).toString());
    container.style.setProperty("--suggested-tokens-scroll--right-opacity", MathUtil.interpolate([0, 100], [0, 1], container.scrollWidth - container.scrollLeft - container.offsetWidth).toString());
  }
  handleTokenListScroll() {
    var _a;
    const container = (_a = this.renderRoot) == null ? void 0 : _a.querySelector(".tokens");
    if (!container) {
      return;
    }
    container.style.setProperty("--tokens-scroll--top-opacity", MathUtil.interpolate([0, 100], [0, 1], container.scrollTop).toString());
    container.style.setProperty("--tokens-scroll--bottom-opacity", MathUtil.interpolate([0, 100], [0, 1], container.scrollHeight - container.scrollTop - container.offsetHeight).toString());
  }
  filterTokensWithText(tokens, text) {
    return tokens.filter((token) => `${token.symbol} ${token.name} ${token.address}`.toLowerCase().includes(text.toLowerCase()));
  }
};
W3mSwapSelectTokenView.styles = styles_default7;
__decorate7([
  state()
], W3mSwapSelectTokenView.prototype, "interval", void 0);
__decorate7([
  state()
], W3mSwapSelectTokenView.prototype, "targetToken", void 0);
__decorate7([
  state()
], W3mSwapSelectTokenView.prototype, "sourceToken", void 0);
__decorate7([
  state()
], W3mSwapSelectTokenView.prototype, "sourceTokenAmount", void 0);
__decorate7([
  state()
], W3mSwapSelectTokenView.prototype, "toToken", void 0);
__decorate7([
  state()
], W3mSwapSelectTokenView.prototype, "myTokensWithBalance", void 0);
__decorate7([
  state()
], W3mSwapSelectTokenView.prototype, "popularTokens", void 0);
__decorate7([
  state()
], W3mSwapSelectTokenView.prototype, "searchValue", void 0);
W3mSwapSelectTokenView = __decorate7([
  customElement("w3m-swap-select-token-view")
], W3mSwapSelectTokenView);
export {
  W3mSwapPreviewView,
  W3mSwapSelectTokenView,
  W3mSwapView
};
//# sourceMappingURL=swaps-BDOXSDBE.js.map
