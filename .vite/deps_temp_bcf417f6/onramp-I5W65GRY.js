import "./chunk-23ZOCXKT.js";
import "./chunk-UJX4VECD.js";
import "./chunk-6QOWD2HI.js";
import "./chunk-CRQ3HVR6.js";
import "./chunk-GDWZI2BJ.js";
import "./chunk-WHGGRX5P.js";
import "./chunk-HNB35IZC.js";
import "./chunk-BHIBQBXR.js";
import "./chunk-FS3CSUOV.js";
import "./chunk-HZGWUS6I.js";
import "./chunk-WK4LCREZ.js";
import "./chunk-UJR4CR2X.js";
import "./chunk-QACLXGLR.js";
import {
  ifDefined
} from "./chunk-UDUV7Y73.js";
import "./chunk-ZWVZUKRU.js";
import {
  LitElement,
  css,
  html,
  property,
  state
} from "./chunk-COKH4YWJ.js";
import {
  AccountController,
  ApiController,
  AssetController,
  AssetUtil,
  BlockchainApiController,
  ChainController,
  ConnectionController,
  ConstantsUtil2 as ConstantsUtil,
  CoreHelperUtil,
  DateUtil,
  EventsController,
  ModalController,
  OnRampController,
  OptionsController,
  OptionsStateController,
  RouterController,
  SnackController,
  ThemeController,
  TransactionUtil,
  TransactionsController,
  W3mFrameRpcConstants,
  customElement
} from "./chunk-ETM4QMGY.js";
import "./chunk-4SL53YBG.js";
import "./chunk-VU636JVZ.js";
import "./chunk-UBT2W44H.js";
import "./chunk-C7K4MEED.js";
import "./chunk-QK2VKFPU.js";
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

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-activity-item/styles.js
var styles_default = css`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-activity-item/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnRampActivityItem = class W3mOnRampActivityItem2 extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.color = "inherit";
    this.label = "Bought";
    this.purchaseValue = "";
    this.purchaseCurrency = "";
    this.date = "";
    this.completed = false;
    this.inProgress = false;
    this.failed = false;
    this.onClick = null;
    this.symbol = "";
  }
  firstUpdated() {
    if (!this.icon) {
      this.fetchTokenImage();
    }
  }
  render() {
    return html`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress ? html`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>` : html`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `;
  }
  async fetchTokenImage() {
    await ApiController._fetchTokenImage(this.purchaseCurrency);
  }
  statusIconTemplate() {
    if (this.inProgress) {
      return null;
    }
    return this.completed ? this.boughtIconTemplate() : this.errorIconTemplate();
  }
  errorIconTemplate() {
    return html`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`;
  }
  imageTemplate() {
    const icon = this.icon || `https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;
    return html`<wui-flex class="purchase-image-container">
      <wui-image src=${icon}></wui-image>
    </wui-flex>`;
  }
  boughtIconTemplate() {
    return html`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`;
  }
};
W3mOnRampActivityItem.styles = [styles_default];
__decorate([
  property({ type: Boolean })
], W3mOnRampActivityItem.prototype, "disabled", void 0);
__decorate([
  property()
], W3mOnRampActivityItem.prototype, "color", void 0);
__decorate([
  property()
], W3mOnRampActivityItem.prototype, "label", void 0);
__decorate([
  property()
], W3mOnRampActivityItem.prototype, "purchaseValue", void 0);
__decorate([
  property()
], W3mOnRampActivityItem.prototype, "purchaseCurrency", void 0);
__decorate([
  property()
], W3mOnRampActivityItem.prototype, "date", void 0);
__decorate([
  property({ type: Boolean })
], W3mOnRampActivityItem.prototype, "completed", void 0);
__decorate([
  property({ type: Boolean })
], W3mOnRampActivityItem.prototype, "inProgress", void 0);
__decorate([
  property({ type: Boolean })
], W3mOnRampActivityItem.prototype, "failed", void 0);
__decorate([
  property()
], W3mOnRampActivityItem.prototype, "onClick", void 0);
__decorate([
  property()
], W3mOnRampActivityItem.prototype, "symbol", void 0);
__decorate([
  property()
], W3mOnRampActivityItem.prototype, "icon", void 0);
W3mOnRampActivityItem = __decorate([
  customElement("w3m-onramp-activity-item")
], W3mOnRampActivityItem);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-onramp-activity-view/styles.js
var styles_default2 = css`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-onramp-activity-view/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LOADING_ITEM_COUNT = 7;
var W3mOnRampActivityView = class W3mOnRampActivityView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedOnRampProvider = OnRampController.state.selectedProvider;
    this.loading = false;
    this.coinbaseTransactions = TransactionsController.state.coinbaseTransactions;
    this.tokenImages = AssetController.state.tokenImages;
    this.unsubscribe.push(...[
      OnRampController.subscribeKey("selectedProvider", (val) => {
        this.selectedOnRampProvider = val;
      }),
      AssetController.subscribeKey("tokenImages", (val) => this.tokenImages = val),
      () => {
        clearTimeout(this.refetchTimeout);
      },
      TransactionsController.subscribe((val) => {
        this.coinbaseTransactions = { ...val.coinbaseTransactions };
      })
    ]);
    TransactionsController.clearCursor();
    this.fetchTransactions();
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.loading ? this.templateLoading() : this.templateTransactionsByYear()}
      </wui-flex>
    `;
  }
  templateTransactions(transactions) {
    return transactions == null ? void 0 : transactions.map((transaction) => {
      var _a, _b, _c;
      const date = DateUtil.formatDate((_a = transaction == null ? void 0 : transaction.metadata) == null ? void 0 : _a.minedAt);
      const transfer = transaction.transfers[0];
      const fungibleInfo = transfer == null ? void 0 : transfer.fungible_info;
      if (!fungibleInfo) {
        return null;
      }
      const icon = ((_b = fungibleInfo == null ? void 0 : fungibleInfo.icon) == null ? void 0 : _b.url) || ((_c = this.tokenImages) == null ? void 0 : _c[fungibleInfo.symbol || ""]);
      return html`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${ifDefined(fungibleInfo.symbol)}
          purchaseValue=${transfer.quantity.numeric}
          date=${date}
          icon=${ifDefined(icon)}
          symbol=${ifDefined(fungibleInfo.symbol)}
        ></w3m-onramp-activity-item>
      `;
    });
  }
  templateTransactionsByYear() {
    const sortedYearKeys = Object.keys(this.coinbaseTransactions).sort().reverse();
    return sortedYearKeys.map((year) => {
      const yearInt = parseInt(year, 10);
      const sortedMonthIndexes = new Array(12).fill(null).map((_, idx) => idx).reverse();
      return sortedMonthIndexes.map((month) => {
        var _a;
        const groupTitle = TransactionUtil.getTransactionGroupTitle(yearInt, month);
        const transactions = (_a = this.coinbaseTransactions[yearInt]) == null ? void 0 : _a[month];
        if (!transactions) {
          return null;
        }
        return html`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs", "s", "s", "s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${groupTitle}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(transactions)}
            </wui-flex>
          </wui-flex>
        `;
      });
    });
  }
  async fetchTransactions() {
    const provider = "coinbase";
    if (provider === "coinbase") {
      await this.fetchCoinbaseTransactions();
    }
  }
  async fetchCoinbaseTransactions() {
    const address = AccountController.state.address;
    const projectId = OptionsController.state.projectId;
    if (!address) {
      throw new Error("No address found");
    }
    if (!projectId) {
      throw new Error("No projectId found");
    }
    this.loading = true;
    await TransactionsController.fetchTransactions(address, "coinbase");
    this.loading = false;
    this.refetchLoadingTransactions();
  }
  refetchLoadingTransactions() {
    var _a;
    const today = /* @__PURE__ */ new Date();
    const currentMonthTxs = ((_a = this.coinbaseTransactions[today.getFullYear()]) == null ? void 0 : _a[today.getMonth()]) || [];
    const loadingTransactions = currentMonthTxs.filter((transaction) => transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS");
    if (loadingTransactions.length === 0) {
      clearTimeout(this.refetchTimeout);
      return;
    }
    this.refetchTimeout = setTimeout(async () => {
      const address = AccountController.state.address;
      await TransactionsController.fetchTransactions(address, "coinbase");
      this.refetchLoadingTransactions();
    }, 3e3);
  }
  templateLoading() {
    return Array(LOADING_ITEM_COUNT).fill(html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((item) => item);
  }
};
W3mOnRampActivityView.styles = styles_default2;
__decorate2([
  state()
], W3mOnRampActivityView.prototype, "selectedOnRampProvider", void 0);
__decorate2([
  state()
], W3mOnRampActivityView.prototype, "loading", void 0);
__decorate2([
  state()
], W3mOnRampActivityView.prototype, "coinbaseTransactions", void 0);
__decorate2([
  state()
], W3mOnRampActivityView.prototype, "tokenImages", void 0);
W3mOnRampActivityView = __decorate2([
  customElement("w3m-onramp-activity-view")
], W3mOnRampActivityView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-onramp-fiat-select-view/styles.js
var styles_default3 = css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-onramp-fiat-select-view/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnrampFiatSelectView = class W3mOnrampFiatSelectView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedCurrency = OnRampController.state.paymentCurrency;
    this.currencies = OnRampController.state.paymentCurrencies;
    this.currencyImages = AssetController.state.currencyImages;
    this.checked = OptionsStateController.state.isLegalCheckboxChecked;
    this.unsubscribe.push(...[
      OnRampController.subscribe((val) => {
        this.selectedCurrency = val.paymentCurrency;
        this.currencies = val.paymentCurrencies;
      }),
      AssetController.subscribeKey("currencyImages", (val) => this.currencyImages = val),
      OptionsStateController.subscribeKey("isLegalCheckboxChecked", (val) => {
        this.checked = val;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a;
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    const legalCheckbox = (_a = OptionsController.state.features) == null ? void 0 : _a.legalCheckbox;
    const legalUrl = termsConditionsUrl || privacyPolicyUrl;
    const showLegalCheckbox = Boolean(legalUrl) && Boolean(legalCheckbox);
    const disabled = showLegalCheckbox && !this.checked;
    return html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0", "s", "s", "s"]}
        gap="xs"
        class=${ifDefined(disabled ? "disabled" : void 0)}
      >
        ${this.currenciesTemplate(disabled)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  currenciesTemplate(disabled = false) {
    return this.currencies.map((currency) => {
      var _a;
      return html`
        <wui-list-item
          imageSrc=${ifDefined((_a = this.currencyImages) == null ? void 0 : _a[currency.id])}
          @click=${() => this.selectCurrency(currency)}
          variant="image"
          tabIdx=${ifDefined(disabled ? -1 : void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${currency.id}</wui-text>
        </wui-list-item>
      `;
    });
  }
  selectCurrency(currency) {
    if (!currency) {
      return;
    }
    OnRampController.setPaymentCurrency(currency);
    ModalController.close();
  }
};
W3mOnrampFiatSelectView.styles = styles_default3;
__decorate3([
  state()
], W3mOnrampFiatSelectView.prototype, "selectedCurrency", void 0);
__decorate3([
  state()
], W3mOnrampFiatSelectView.prototype, "currencies", void 0);
__decorate3([
  state()
], W3mOnrampFiatSelectView.prototype, "currencyImages", void 0);
__decorate3([
  state()
], W3mOnrampFiatSelectView.prototype, "checked", void 0);
W3mOnrampFiatSelectView = __decorate3([
  customElement("w3m-onramp-fiat-select-view")
], W3mOnrampFiatSelectView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-provider-item/styles.js
var styles_default4 = css`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-provider-item/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnRampProviderItem = class W3mOnRampProviderItem2 extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.color = "inherit";
    this.label = "";
    this.feeRange = "";
    this.loading = false;
    this.onClick = null;
  }
  render() {
    return html`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${ifDefined(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading ? html`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>` : html`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `;
  }
  networksTemplate() {
    var _a;
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const slicedNetworks = (_a = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.filter((network) => {
      var _a2;
      return (_a2 = network == null ? void 0 : network.assets) == null ? void 0 : _a2.imageId;
    })) == null ? void 0 : _a.slice(0, 5);
    return html`
      <wui-flex class="networks">
        ${slicedNetworks == null ? void 0 : slicedNetworks.map((network) => html`
            <wui-flex class="network-icon">
              <wui-image src=${ifDefined(AssetUtil.getNetworkImage(network))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `;
  }
};
W3mOnRampProviderItem.styles = [styles_default4];
__decorate4([
  property({ type: Boolean })
], W3mOnRampProviderItem.prototype, "disabled", void 0);
__decorate4([
  property()
], W3mOnRampProviderItem.prototype, "color", void 0);
__decorate4([
  property()
], W3mOnRampProviderItem.prototype, "name", void 0);
__decorate4([
  property()
], W3mOnRampProviderItem.prototype, "label", void 0);
__decorate4([
  property()
], W3mOnRampProviderItem.prototype, "feeRange", void 0);
__decorate4([
  property({ type: Boolean })
], W3mOnRampProviderItem.prototype, "loading", void 0);
__decorate4([
  property()
], W3mOnRampProviderItem.prototype, "onClick", void 0);
W3mOnRampProviderItem = __decorate4([
  customElement("w3m-onramp-provider-item")
], W3mOnRampProviderItem);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-providers-footer/styles.js
var styles_default5 = css`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-providers-footer/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnRampProvidersFooter = class W3mOnRampProvidersFooter2 extends LitElement {
  render() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    if (!termsConditionsUrl && !privacyPolicyUrl) {
      return null;
    }
    return html`
      <wui-flex
        .padding=${["m", "s", "s", "s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `;
  }
  howDoesItWorkTemplate() {
    return html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`;
  }
  onWhatIsBuy() {
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WHAT_IS_A_BUY",
      properties: {
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    RouterController.push("WhatIsABuy");
  }
};
W3mOnRampProvidersFooter.styles = [styles_default5];
W3mOnRampProvidersFooter = __decorate5([
  customElement("w3m-onramp-providers-footer")
], W3mOnRampProvidersFooter);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-onramp-providers-view/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnRampProvidersView = class W3mOnRampProvidersView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.providers = OnRampController.state.providers;
    this.unsubscribe.push(...[
      OnRampController.subscribeKey("providers", (val) => {
        this.providers = val;
      })
    ]);
  }
  firstUpdated() {
    const urlPromises = this.providers.map(async (provider) => {
      if (provider.name === "coinbase") {
        return await this.getCoinbaseOnRampURL();
      }
      return Promise.resolve(provider == null ? void 0 : provider.url);
    });
    Promise.all(urlPromises).then((urls) => {
      this.providers = this.providers.map((provider, index) => ({
        ...provider,
        url: urls[index] || ""
      }));
    });
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `;
  }
  onRampProvidersTemplate() {
    return this.providers.filter((provider) => provider.supportedChains.includes(ChainController.state.activeChain ?? "eip155")).map((provider) => html`
          <w3m-onramp-provider-item
            label=${provider.label}
            name=${provider.name}
            feeRange=${provider.feeRange}
            @click=${() => {
      this.onClickProvider(provider);
    }}
            ?disabled=${!provider.url}
          ></w3m-onramp-provider-item>
        `);
  }
  onClickProvider(provider) {
    OnRampController.setSelectedProvider(provider);
    RouterController.push("BuyInProgress");
    CoreHelperUtil.openHref(provider.url, "popupWindow", "width=600,height=800,scrollbars=yes");
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_BUY_PROVIDER",
      properties: {
        provider: provider.name,
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
  }
  async getCoinbaseOnRampURL() {
    const address = AccountController.state.address;
    const network = ChainController.state.activeCaipNetwork;
    if (!address) {
      throw new Error("No address found");
    }
    if (!(network == null ? void 0 : network.name)) {
      throw new Error("No network found");
    }
    const defaultNetwork = ConstantsUtil.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[network.name] ?? ConstantsUtil.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN;
    const purchaseCurrency = OnRampController.state.purchaseCurrency;
    const assets = purchaseCurrency ? [purchaseCurrency.symbol] : OnRampController.state.purchaseCurrencies.map((currency) => currency.symbol);
    return await BlockchainApiController.generateOnRampURL({
      defaultNetwork,
      destinationWallets: [
        { address, blockchains: ConstantsUtil.WC_COINBASE_PAY_SDK_CHAINS, assets }
      ],
      partnerUserId: address,
      purchaseAmount: OnRampController.state.purchaseAmount
    });
  }
};
__decorate6([
  state()
], W3mOnRampProvidersView.prototype, "providers", void 0);
W3mOnRampProvidersView = __decorate6([
  customElement("w3m-onramp-providers-view")
], W3mOnRampProvidersView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-onramp-tokens-select-view/styles.js
var styles_default6 = css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-onramp-tokens-select-view/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mOnrampTokensView = class W3mOnrampTokensView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedCurrency = OnRampController.state.purchaseCurrencies;
    this.tokens = OnRampController.state.purchaseCurrencies;
    this.tokenImages = AssetController.state.tokenImages;
    this.checked = OptionsStateController.state.isLegalCheckboxChecked;
    this.unsubscribe.push(...[
      OnRampController.subscribe((val) => {
        this.selectedCurrency = val.purchaseCurrencies;
        this.tokens = val.purchaseCurrencies;
      }),
      AssetController.subscribeKey("tokenImages", (val) => this.tokenImages = val),
      OptionsStateController.subscribeKey("isLegalCheckboxChecked", (val) => {
        this.checked = val;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a;
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    const legalCheckbox = (_a = OptionsController.state.features) == null ? void 0 : _a.legalCheckbox;
    const legalUrl = termsConditionsUrl || privacyPolicyUrl;
    const showLegalCheckbox = Boolean(legalUrl) && Boolean(legalCheckbox);
    const disabled = showLegalCheckbox && !this.checked;
    return html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0", "s", "s", "s"]}
        gap="xs"
        class=${ifDefined(disabled ? "disabled" : void 0)}
      >
        ${this.currenciesTemplate(disabled)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  currenciesTemplate(disabled = false) {
    return this.tokens.map((token) => {
      var _a;
      return html`
        <wui-list-item
          imageSrc=${ifDefined((_a = this.tokenImages) == null ? void 0 : _a[token.symbol])}
          @click=${() => this.selectToken(token)}
          variant="image"
          tabIdx=${ifDefined(disabled ? -1 : void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${token.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${token.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `;
    });
  }
  selectToken(currency) {
    if (!currency) {
      return;
    }
    OnRampController.setPurchaseCurrency(currency);
    ModalController.close();
  }
};
W3mOnrampTokensView.styles = styles_default6;
__decorate7([
  state()
], W3mOnrampTokensView.prototype, "selectedCurrency", void 0);
__decorate7([
  state()
], W3mOnrampTokensView.prototype, "tokens", void 0);
__decorate7([
  state()
], W3mOnrampTokensView.prototype, "tokenImages", void 0);
__decorate7([
  state()
], W3mOnrampTokensView.prototype, "checked", void 0);
W3mOnrampTokensView = __decorate7([
  customElement("w3m-onramp-token-select-view")
], W3mOnrampTokensView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-buy-in-progress-view/styles.js
var styles_default7 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-buy-in-progress-view/index.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mBuyInProgressView = class W3mBuyInProgressView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedOnRampProvider = OnRampController.state.selectedProvider;
    this.uri = ConnectionController.state.wcUri;
    this.ready = false;
    this.showRetry = false;
    this.buffering = false;
    this.error = false;
    this.startTime = null;
    this.isMobile = false;
    this.onRetry = void 0;
    this.unsubscribe.push(...[
      OnRampController.subscribeKey("selectedProvider", (val) => {
        this.selectedOnRampProvider = val;
      })
    ]);
    this.watchTransactions();
  }
  disconnectedCallback() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  render() {
    var _a, _b;
    let label = "Continue in external window";
    if (this.error) {
      label = "Buy failed";
    } else if (this.selectedOnRampProvider) {
      label = `Buy in ${(_a = this.selectedOnRampProvider) == null ? void 0 : _a.label}`;
    }
    const subLabel = this.error ? "Buy can be declined from your side or due to and error on the provider app" : `We’ll notify you once your Buy is processed`;
    return html`
      <wui-flex
        data-error=${ifDefined(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${ifDefined((_b = this.selectedOnRampProvider) == null ? void 0 : _b.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? "error-100" : "fg-100"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        ${this.error ? this.tryAgainTemplate() : null}
      </wui-flex>

      <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `;
  }
  watchTransactions() {
    if (!this.selectedOnRampProvider) {
      return;
    }
    switch (this.selectedOnRampProvider.name) {
      case "coinbase":
        this.startTime = Date.now();
        this.initializeCoinbaseTransactions();
        break;
      default:
        break;
    }
  }
  async initializeCoinbaseTransactions() {
    await this.watchCoinbaseTransactions();
    this.intervalId = setInterval(() => this.watchCoinbaseTransactions(), 4e3);
  }
  async watchCoinbaseTransactions() {
    try {
      const address = AccountController.state.address;
      if (!address) {
        throw new Error("No address found");
      }
      const coinbaseResponse = await BlockchainApiController.fetchTransactions({
        account: address,
        onramp: "coinbase"
      });
      const newTransactions = coinbaseResponse.data.filter((tx) => new Date(tx.metadata.minedAt) > new Date(this.startTime) || tx.metadata.status === "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS");
      if (newTransactions.length) {
        clearInterval(this.intervalId);
        RouterController.replace("OnRampActivity");
      } else if (this.startTime && Date.now() - this.startTime >= 18e4) {
        clearInterval(this.intervalId);
        this.error = true;
      }
    } catch (error) {
      SnackController.showError(error);
    }
  }
  onTryAgain() {
    if (!this.selectedOnRampProvider) {
      return;
    }
    this.error = false;
    CoreHelperUtil.openHref(this.selectedOnRampProvider.url, "popupWindow", "width=600,height=800,scrollbars=yes");
  }
  tryAgainTemplate() {
    var _a;
    if (!((_a = this.selectedOnRampProvider) == null ? void 0 : _a.url)) {
      return null;
    }
    return html`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`;
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    var _a;
    if (!((_a = this.selectedOnRampProvider) == null ? void 0 : _a.url)) {
      SnackController.showError("No link found");
      RouterController.goBack();
      return;
    }
    try {
      CoreHelperUtil.copyToClopboard(this.selectedOnRampProvider.url);
      SnackController.showSuccess("Link copied");
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mBuyInProgressView.styles = styles_default7;
__decorate8([
  state()
], W3mBuyInProgressView.prototype, "intervalId", void 0);
__decorate8([
  state()
], W3mBuyInProgressView.prototype, "selectedOnRampProvider", void 0);
__decorate8([
  state()
], W3mBuyInProgressView.prototype, "uri", void 0);
__decorate8([
  state()
], W3mBuyInProgressView.prototype, "ready", void 0);
__decorate8([
  state()
], W3mBuyInProgressView.prototype, "showRetry", void 0);
__decorate8([
  state()
], W3mBuyInProgressView.prototype, "buffering", void 0);
__decorate8([
  state()
], W3mBuyInProgressView.prototype, "error", void 0);
__decorate8([
  state()
], W3mBuyInProgressView.prototype, "startTime", void 0);
__decorate8([
  property({ type: Boolean })
], W3mBuyInProgressView.prototype, "isMobile", void 0);
__decorate8([
  property()
], W3mBuyInProgressView.prototype, "onRetry", void 0);
W3mBuyInProgressView = __decorate8([
  customElement("w3m-buy-in-progress-view")
], W3mBuyInProgressView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-what-is-a-buy-view/index.js
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWhatIsABuyView = class W3mWhatIsABuyView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "3xl", "xl", "3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `;
  }
};
W3mWhatIsABuyView = __decorate9([
  customElement("w3m-what-is-a-buy-view")
], W3mWhatIsABuyView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-input/styles.js
var styles_default8 = css`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-onramp-input/index.js
var __decorate10 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mInputCurrency = class W3mInputCurrency2 extends LitElement {
  constructor() {
    var _a;
    super();
    this.unsubscribe = [];
    this.type = "Token";
    this.value = 0;
    this.currencies = [];
    this.selectedCurrency = (_a = this.currencies) == null ? void 0 : _a[0];
    this.currencyImages = AssetController.state.currencyImages;
    this.tokenImages = AssetController.state.tokenImages;
    this.unsubscribe.push(OnRampController.subscribeKey("purchaseCurrency", (val) => {
      if (!val || this.type === "Fiat") {
        return;
      }
      this.selectedCurrency = this.formatPurchaseCurrency(val);
    }), OnRampController.subscribeKey("paymentCurrency", (val) => {
      if (!val || this.type === "Token") {
        return;
      }
      this.selectedCurrency = this.formatPaymentCurrency(val);
    }), OnRampController.subscribe((val) => {
      if (this.type === "Fiat") {
        this.currencies = val.purchaseCurrencies.map(this.formatPurchaseCurrency);
      } else {
        this.currencies = val.paymentCurrencies.map(this.formatPaymentCurrency);
      }
    }), AssetController.subscribe((val) => {
      this.currencyImages = { ...val.currencyImages };
      this.tokenImages = { ...val.tokenImages };
    }));
  }
  firstUpdated() {
    OnRampController.getAvailableCurrencies();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a;
    const symbol = ((_a = this.selectedCurrency) == null ? void 0 : _a.symbol) || "";
    const image = this.currencyImages[symbol] || this.tokenImages[symbol];
    return html`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency ? html` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${() => ModalController.open({ view: `OnRamp${this.type}Select` })}
          >
            <wui-image src=${ifDefined(image)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>` : html`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`;
  }
  formatPaymentCurrency(currency) {
    return {
      name: currency.id,
      symbol: currency.id
    };
  }
  formatPurchaseCurrency(currency) {
    return {
      name: currency.name,
      symbol: currency.symbol
    };
  }
};
W3mInputCurrency.styles = styles_default8;
__decorate10([
  property({ type: String })
], W3mInputCurrency.prototype, "type", void 0);
__decorate10([
  property({ type: Number })
], W3mInputCurrency.prototype, "value", void 0);
__decorate10([
  state()
], W3mInputCurrency.prototype, "currencies", void 0);
__decorate10([
  state()
], W3mInputCurrency.prototype, "selectedCurrency", void 0);
__decorate10([
  state()
], W3mInputCurrency.prototype, "currencyImages", void 0);
__decorate10([
  state()
], W3mInputCurrency.prototype, "tokenImages", void 0);
W3mInputCurrency = __decorate10([
  customElement("w3m-onramp-input")
], W3mInputCurrency);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-onramp-widget/styles.js
var styles_default9 = css`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-onramp-widget/index.js
var __decorate11 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAYMENT_CURRENCY_SYMBOLS = {
  USD: "$",
  EUR: "€",
  GBP: "£"
};
var BUY_PRESET_AMOUNTS = [100, 250, 500, 1e3];
var W3mOnrampWidget = class W3mOnrampWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.caipAddress = ChainController.state.activeCaipAddress;
    this.loading = ModalController.state.loading;
    this.paymentCurrency = OnRampController.state.paymentCurrency;
    this.paymentAmount = OnRampController.state.paymentAmount;
    this.purchaseAmount = OnRampController.state.purchaseAmount;
    this.quoteLoading = OnRampController.state.quotesLoading;
    this.unsubscribe.push(...[
      ChainController.subscribeKey("activeCaipAddress", (val) => this.caipAddress = val),
      ModalController.subscribeKey("loading", (val) => {
        this.loading = val;
      }),
      OnRampController.subscribe((val) => {
        this.paymentCurrency = val.paymentCurrency;
        this.paymentAmount = val.paymentAmount;
        this.purchaseAmount = val.purchaseAmount;
        this.quoteLoading = val.quotesLoading;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount || 0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount || 0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${BUY_PRESET_AMOUNTS.map((amount) => {
      var _a;
      return html`<wui-button
                  variant=${this.paymentAmount === amount ? "accent" : "neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${() => this.selectPresetAmount(amount)}
                  >${`${PAYMENT_CURRENCY_SYMBOLS[((_a = this.paymentCurrency) == null ? void 0 : _a.id) || "USD"]} ${amount}`}</wui-button
                >`;
    })}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `;
  }
  templateButton() {
    return this.caipAddress ? html`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>` : html`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`;
  }
  getQuotes() {
    if (!this.loading) {
      ModalController.open({ view: "OnRampProviders" });
    }
  }
  openModal() {
    ModalController.open({ view: "Connect" });
  }
  async onPaymentAmountChange(event) {
    OnRampController.setPaymentAmount(Number(event.detail));
    await OnRampController.getQuote();
  }
  async selectPresetAmount(amount) {
    OnRampController.setPaymentAmount(amount);
    await OnRampController.getQuote();
  }
};
W3mOnrampWidget.styles = styles_default9;
__decorate11([
  property({ type: Boolean })
], W3mOnrampWidget.prototype, "disabled", void 0);
__decorate11([
  state()
], W3mOnrampWidget.prototype, "caipAddress", void 0);
__decorate11([
  state()
], W3mOnrampWidget.prototype, "loading", void 0);
__decorate11([
  state()
], W3mOnrampWidget.prototype, "paymentCurrency", void 0);
__decorate11([
  state()
], W3mOnrampWidget.prototype, "paymentAmount", void 0);
__decorate11([
  state()
], W3mOnrampWidget.prototype, "purchaseAmount", void 0);
__decorate11([
  state()
], W3mOnrampWidget.prototype, "quoteLoading", void 0);
W3mOnrampWidget = __decorate11([
  customElement("w3m-onramp-widget")
], W3mOnrampWidget);
export {
  W3mBuyInProgressView,
  W3mOnRampActivityView,
  W3mOnRampProvidersView,
  W3mOnrampFiatSelectView,
  W3mOnrampTokensView,
  W3mOnrampWidget,
  W3mWhatIsABuyView
};
//# sourceMappingURL=onramp-I5W65GRY.js.map
