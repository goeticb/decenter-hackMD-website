import "./chunk-QJHT75C6.js";
import "./chunk-YVOFMANN.js";
import "./chunk-BH5XKHVM.js";
import "./chunk-FS3CSUOV.js";
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
  ConstantsUtil as ConstantsUtil2
} from "./chunk-VOPCLWV4.js";
import {
  AccountController,
  AlertController,
  ApiController,
  AssetController,
  AssetUtil,
  ChainController,
  ConnectionController,
  ConnectorController,
  ConstantsUtil,
  CoreHelperUtil,
  EventsController,
  ModalController,
  OptionsController,
  RouterController,
  SIWXUtil,
  SnackController,
  ThemeController,
  UiHelperUtil,
  colorStyles,
  customElement,
  elementStyles,
  initializeTheming,
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

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-card/styles.js
var styles_default = css`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-card/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiCard = class WuiCard2 extends LitElement {
  render() {
    return html`<slot></slot>`;
  }
};
WuiCard.styles = [resetStyles, styles_default];
WuiCard = __decorate([
  customElement("wui-card")
], WuiCard);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-alertbar/styles.js
var styles_default2 = css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-alertbar/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiAlertBar = class WuiAlertBar2 extends LitElement {
  constructor() {
    super(...arguments);
    this.message = "";
    this.backgroundColor = "accent-100";
    this.iconColor = "accent-100";
    this.icon = "info";
  }
  render() {
    this.style.cssText = `
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `;
    return html`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `;
  }
  onClose() {
    AlertController.close();
  }
};
WuiAlertBar.styles = [resetStyles, styles_default2];
__decorate2([
  property2()
], WuiAlertBar.prototype, "message", void 0);
__decorate2([
  property2()
], WuiAlertBar.prototype, "backgroundColor", void 0);
__decorate2([
  property2()
], WuiAlertBar.prototype, "iconColor", void 0);
__decorate2([
  property2()
], WuiAlertBar.prototype, "icon", void 0);
WuiAlertBar = __decorate2([
  customElement("wui-alertbar")
], WuiAlertBar);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-alertbar/styles.js
var styles_default3 = css2`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-alertbar/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var presets = {
  info: {
    backgroundColor: "fg-350",
    iconColor: "fg-325",
    icon: "info"
  },
  success: {
    backgroundColor: "success-glass-reown-020",
    iconColor: "success-125",
    icon: "checkmark"
  },
  warning: {
    backgroundColor: "warning-glass-reown-020",
    iconColor: "warning-100",
    icon: "warningCircle"
  },
  error: {
    backgroundColor: "error-glass-reown-020",
    iconColor: "error-125",
    icon: "exclamationTriangle"
  }
};
var W3mAlertBar = class W3mAlertBar2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.open = AlertController.state.open;
    this.onOpen(true);
    this.unsubscribe.push(AlertController.subscribeKey("open", (val) => {
      this.open = val;
      this.onOpen(false);
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { message, variant } = AlertController.state;
    const preset = presets[variant];
    return html2`
      <wui-alertbar
        message=${message}
        backgroundColor=${preset == null ? void 0 : preset.backgroundColor}
        iconColor=${preset == null ? void 0 : preset.iconColor}
        icon=${preset == null ? void 0 : preset.icon}
      ></wui-alertbar>
    `;
  }
  onOpen(isMounted) {
    if (this.open) {
      this.animate([
        { opacity: 0, transform: "scale(0.85)" },
        { opacity: 1, transform: "scale(1)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      this.style.cssText = `pointer-events: auto`;
    } else if (!isMounted) {
      this.animate([
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0.85)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      this.style.cssText = `pointer-events: none`;
    }
  }
};
W3mAlertBar.styles = styles_default3;
__decorate3([
  state()
], W3mAlertBar.prototype, "open", void 0);
W3mAlertBar = __decorate3([
  customElement("w3m-alertbar")
], W3mAlertBar);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-select/styles.js
var styles_default4 = css`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-select/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiSelect = class WuiSelect2 extends LitElement {
  constructor() {
    super(...arguments);
    this.imageSrc = "";
  }
  render() {
    return html`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`;
  }
  imageTemplate() {
    if (this.imageSrc) {
      return html`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;
    }
    return html`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`;
  }
};
WuiSelect.styles = [resetStyles, elementStyles, colorStyles, styles_default4];
__decorate4([
  property2()
], WuiSelect.prototype, "imageSrc", void 0);
WuiSelect = __decorate4([
  customElement("wui-select")
], WuiSelect);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-header/styles.js
var styles_default5 = css2`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-header/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BETA_SCREENS = ["SmartSessionList"];
function headings() {
  var _a, _b, _c, _d, _e, _f, _g;
  const connectorName = (_b = (_a = RouterController.state.data) == null ? void 0 : _a.connector) == null ? void 0 : _b.name;
  const walletName = (_d = (_c = RouterController.state.data) == null ? void 0 : _c.wallet) == null ? void 0 : _d.name;
  const networkName = (_f = (_e = RouterController.state.data) == null ? void 0 : _e.network) == null ? void 0 : _f.name;
  const name = walletName ?? connectorName;
  const connectors = ConnectorController.getConnectors();
  const isEmail = connectors.length === 1 && ((_g = connectors[0]) == null ? void 0 : _g.id) === "w3m-email";
  return {
    Connect: `Connect ${isEmail ? "Email" : ""} Wallet`,
    Create: "Create Wallet",
    ChooseAccountName: void 0,
    Account: void 0,
    AccountSettings: void 0,
    AllWallets: "All Wallets",
    ApproveTransaction: "Approve Transaction",
    BuyInProgress: "Buy",
    ConnectingExternal: name ?? "Connect Wallet",
    ConnectingWalletConnect: name ?? "WalletConnect",
    ConnectingWalletConnectBasic: "WalletConnect",
    ConnectingSiwe: "Sign In",
    Convert: "Convert",
    ConvertSelectToken: "Select token",
    ConvertPreview: "Preview convert",
    Downloads: name ? `Get ${name}` : "Downloads",
    EmailLogin: "Email Login",
    EmailVerifyOtp: "Confirm Email",
    EmailVerifyDevice: "Register Device",
    GetWallet: "Get a wallet",
    Networks: "Choose Network",
    OnRampProviders: "Choose Provider",
    OnRampActivity: "Activity",
    OnRampTokenSelect: "Select Token",
    OnRampFiatSelect: "Select Currency",
    Profile: void 0,
    SwitchNetwork: networkName ?? "Switch Network",
    SwitchAddress: "Switch Address",
    Transactions: "Activity",
    UnsupportedChain: "Switch Network",
    UpgradeEmailWallet: "Upgrade your Wallet",
    UpdateEmailWallet: "Edit Email",
    UpdateEmailPrimaryOtp: "Confirm Current Email",
    UpdateEmailSecondaryOtp: "Confirm New Email",
    WhatIsABuy: "What is Buy?",
    RegisterAccountName: "Choose name",
    RegisterAccountNameSuccess: "",
    WalletReceive: "Receive",
    WalletCompatibleNetworks: "Compatible Networks",
    Swap: "Swap",
    SwapSelectToken: "Select token",
    SwapPreview: "Preview swap",
    WalletSend: "Send",
    WalletSendPreview: "Review send",
    WalletSendSelectToken: "Select Token",
    WhatIsANetwork: "What is a network?",
    WhatIsAWallet: "What is a wallet?",
    ConnectWallets: "Connect wallet",
    ConnectSocials: "All socials",
    ConnectingSocial: AccountController.state.socialProvider ? AccountController.state.socialProvider : "Connect Social",
    ConnectingMultiChain: "Select chain",
    ConnectingFarcaster: "Farcaster",
    SwitchActiveChain: "Switch chain",
    SmartSessionCreated: void 0,
    SmartSessionList: "Smart Sessions",
    SIWXSignMessage: "Sign In"
  };
}
var W3mHeader = class W3mHeader2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.heading = headings()[RouterController.state.view];
    this.network = ChainController.state.activeCaipNetwork;
    this.networkImage = AssetUtil.getNetworkImage(this.network);
    this.buffering = false;
    this.showBack = false;
    this.prevHistoryLength = 1;
    this.view = RouterController.state.view;
    this.viewDirection = "";
    this.headerText = headings()[RouterController.state.view];
    this.unsubscribe.push(AssetController.subscribeNetworkImages(() => {
      this.networkImage = AssetUtil.getNetworkImage(this.network);
    }), RouterController.subscribeKey("view", (val) => {
      setTimeout(() => {
        this.view = val;
        this.headerText = headings()[val];
      }, ConstantsUtil2.ANIMATION_DURATIONS.HeaderText);
      this.onViewChange();
      this.onHistoryChange();
    }), ConnectionController.subscribeKey("buffering", (val) => this.buffering = val), ChainController.subscribeKey("activeCaipNetwork", (val) => {
      this.network = val;
      this.networkImage = AssetUtil.getNetworkImage(this.network);
    }));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html2`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `;
  }
  onWalletHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_WALLET_HELP" });
    RouterController.push("WhatIsAWallet");
  }
  async onClose() {
    const isUnsupportedChain = RouterController.state.view === "UnsupportedChain";
    if (isUnsupportedChain || await SIWXUtil.isSIWXCloseDisabled()) {
      ModalController.shake();
    } else {
      ModalController.close();
    }
  }
  rightHeaderTemplate() {
    var _a, _b, _c;
    const isSmartSessionsEnabled = (_c = (_b = (_a = OptionsController) == null ? void 0 : _a.state) == null ? void 0 : _b.features) == null ? void 0 : _c.smartSessions;
    if (RouterController.state.view !== "Account" || !isSmartSessionsEnabled) {
      return this.closeButtonTemplate();
    }
    return html2`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${() => RouterController.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `;
  }
  closeButtonTemplate() {
    return html2`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `;
  }
  titleTemplate() {
    const isBeta = BETA_SCREENS.includes(this.view);
    return html2`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${isBeta ? html2`<wui-tag variant="main">Beta</wui-tag>` : null}
      </wui-flex>
    `;
  }
  leftHeaderTemplate() {
    var _a;
    const { view } = RouterController.state;
    const isConnectHelp = view === "Connect";
    const isEmbeddedEnable = OptionsController.state.enableEmbedded;
    const isApproveTransaction = view === "ApproveTransaction";
    const isConnectingSIWEView = view === "ConnectingSiwe";
    const isAccountView = view === "Account";
    const enableNetworkSwitch = OptionsController.state.enableNetworkSwitch;
    const shouldHideBack = isApproveTransaction || isConnectingSIWEView || isConnectHelp && isEmbeddedEnable;
    if (isAccountView && enableNetworkSwitch) {
      return html2`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${ifDefined((_a = this.network) == null ? void 0 : _a.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${ifDefined(this.networkImage)}
      ></wui-select>`;
    }
    if (this.showBack && !shouldHideBack) {
      return html2`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`;
    }
    return html2`<wui-icon-link
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
  }
  onNetworks() {
    if (this.isAllowedNetworkSwitch()) {
      EventsController.sendEvent({ type: "track", event: "CLICK_NETWORKS" });
      RouterController.push("Networks");
    }
  }
  isAllowedNetworkSwitch() {
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
    const isValidNetwork = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.find(({ id }) => {
      var _a;
      return id === ((_a = this.network) == null ? void 0 : _a.id);
    });
    return isMultiNetwork || !isValidNetwork;
  }
  getPadding() {
    if (this.heading) {
      return ["l", "2l", "l", "2l"];
    }
    return ["0", "2l", "0", "2l"];
  }
  onViewChange() {
    const { history } = RouterController.state;
    let direction = ConstantsUtil2.VIEW_DIRECTION.Next;
    if (history.length < this.prevHistoryLength) {
      direction = ConstantsUtil2.VIEW_DIRECTION.Prev;
    }
    this.prevHistoryLength = history.length;
    this.viewDirection = direction;
  }
  async onHistoryChange() {
    var _a;
    const { history } = RouterController.state;
    const buttonEl = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("#dynamic");
    if (history.length > 1 && !this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = true;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    } else if (history.length <= 1 && this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = false;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  onGoBack() {
    RouterController.goBack();
  }
};
W3mHeader.styles = styles_default5;
__decorate5([
  state()
], W3mHeader.prototype, "heading", void 0);
__decorate5([
  state()
], W3mHeader.prototype, "network", void 0);
__decorate5([
  state()
], W3mHeader.prototype, "networkImage", void 0);
__decorate5([
  state()
], W3mHeader.prototype, "buffering", void 0);
__decorate5([
  state()
], W3mHeader.prototype, "showBack", void 0);
__decorate5([
  state()
], W3mHeader.prototype, "prevHistoryLength", void 0);
__decorate5([
  state()
], W3mHeader.prototype, "view", void 0);
__decorate5([
  state()
], W3mHeader.prototype, "viewDirection", void 0);
__decorate5([
  state()
], W3mHeader.prototype, "headerText", void 0);
W3mHeader = __decorate5([
  customElement("w3m-header")
], W3mHeader);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-snackbar/styles.js
var styles_default6 = css`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-snackbar/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiSnackbar = class WuiSnackbar2 extends LitElement {
  constructor() {
    super(...arguments);
    this.backgroundColor = "accent-100";
    this.iconColor = "accent-100";
    this.icon = "checkmark";
    this.message = "";
    this.loading = false;
    this.iconType = "default";
  }
  render() {
    return html`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `;
  }
  templateIcon() {
    if (this.loading) {
      return html`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`;
    }
    if (this.iconType === "default") {
      return html`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`;
    }
    return html`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`;
  }
};
WuiSnackbar.styles = [resetStyles, styles_default6];
__decorate6([
  property2()
], WuiSnackbar.prototype, "backgroundColor", void 0);
__decorate6([
  property2()
], WuiSnackbar.prototype, "iconColor", void 0);
__decorate6([
  property2()
], WuiSnackbar.prototype, "icon", void 0);
__decorate6([
  property2()
], WuiSnackbar.prototype, "message", void 0);
__decorate6([
  property2()
], WuiSnackbar.prototype, "loading", void 0);
__decorate6([
  property2()
], WuiSnackbar.prototype, "iconType", void 0);
WuiSnackbar = __decorate6([
  customElement("wui-snackbar")
], WuiSnackbar);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-snackbar/styles.js
var styles_default7 = css2`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-snackbar/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var presets2 = {
  loading: void 0,
  success: {
    backgroundColor: "success-100",
    iconColor: "success-100",
    icon: "checkmark"
  },
  error: {
    backgroundColor: "error-100",
    iconColor: "error-100",
    icon: "close"
  }
};
var W3mSnackBar = class W3mSnackBar2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.timeout = void 0;
    this.open = SnackController.state.open;
    this.unsubscribe.push(SnackController.subscribeKey("open", (val) => {
      this.open = val;
      this.onOpen();
    }));
  }
  disconnectedCallback() {
    clearTimeout(this.timeout);
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { message, variant, svg } = SnackController.state;
    const preset = presets2[variant];
    const { icon, iconColor } = svg ?? preset ?? {};
    return html2`
      <wui-snackbar
        message=${message}
        backgroundColor=${preset == null ? void 0 : preset.backgroundColor}
        iconColor=${iconColor}
        icon=${icon}
        .loading=${variant === "loading"}
      ></wui-snackbar>
    `;
  }
  onOpen() {
    clearTimeout(this.timeout);
    if (this.open) {
      this.animate([
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
        { opacity: 1, transform: "translateX(-50%) scale(1)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      if (SnackController.state.autoClose) {
        this.timeout = setTimeout(() => SnackController.hide(), 2500);
      }
    } else {
      this.animate([
        { opacity: 1, transform: "translateX(-50%) scale(1)" },
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
W3mSnackBar.styles = styles_default7;
__decorate7([
  state()
], W3mSnackBar.prototype, "open", void 0);
W3mSnackBar = __decorate7([
  customElement("w3m-snackbar")
], W3mSnackBar);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-modal/styles.js
var styles_default8 = css2`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-modal/index.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SCROLL_LOCK = "scroll-lock";
var W3mModal = class W3mModal2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.abortController = void 0;
    this.hasPrefetched = false;
    this.enableEmbedded = OptionsController.state.enableEmbedded;
    this.open = ModalController.state.open;
    this.caipAddress = ChainController.state.activeCaipAddress;
    this.caipNetwork = ChainController.state.activeCaipNetwork;
    this.shake = ModalController.state.shake;
    this.filterByNamespace = ConnectorController.state.filterByNamespace;
    this.initializeTheming();
    ApiController.prefetchAnalyticsConfig();
    this.unsubscribe.push(...[
      ModalController.subscribeKey("open", (val) => val ? this.onOpen() : this.onClose()),
      ModalController.subscribeKey("shake", (val) => this.shake = val),
      ChainController.subscribeKey("activeCaipNetwork", (val) => this.onNewNetwork(val)),
      ChainController.subscribeKey("activeCaipAddress", (val) => this.onNewAddress(val)),
      OptionsController.subscribeKey("enableEmbedded", (val) => this.enableEmbedded = val),
      ConnectorController.subscribeKey("filterByNamespace", (val) => {
        var _a;
        if (this.filterByNamespace !== val && !((_a = ChainController.getAccountData(val)) == null ? void 0 : _a.caipAddress)) {
          ApiController.fetchRecommendedWallets();
          this.filterByNamespace = val;
        }
      })
    ]);
  }
  firstUpdated() {
    if (this.caipAddress) {
      if (this.enableEmbedded) {
        ModalController.close();
        this.prefetch();
        return;
      }
      this.onNewAddress(this.caipAddress);
    }
    if (this.open) {
      this.onOpen();
    }
    if (this.enableEmbedded) {
      this.prefetch();
    }
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    this.onRemoveKeyboardListener();
  }
  render() {
    this.style.cssText = `
      --local-border-bottom-mobile-radius: ${this.enableEmbedded ? "clamp(0px, var(--wui-border-radius-l), 44px)" : "0px"};
    `;
    if (this.enableEmbedded) {
      return html2`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `;
    }
    return this.open ? html2`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        ` : null;
  }
  contentTemplate() {
    return html2` <wui-card
      shake="${this.shake}"
      data-embedded="${ifDefined(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`;
  }
  async onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      await this.handleClose();
    }
  }
  async handleClose() {
    const isUnsupportedChain = RouterController.state.view === "UnsupportedChain";
    if (isUnsupportedChain || await SIWXUtil.isSIWXCloseDisabled()) {
      ModalController.shake();
    } else {
      ModalController.close();
    }
  }
  initializeTheming() {
    const { themeVariables, themeMode } = ThemeController.state;
    const defaultThemeMode = UiHelperUtil.getColorTheme(themeMode);
    initializeTheming(themeVariables, defaultThemeMode);
  }
  onClose() {
    this.open = false;
    this.classList.remove("open");
    this.onScrollUnlock();
    SnackController.hide();
    this.onRemoveKeyboardListener();
  }
  onOpen() {
    this.open = true;
    this.classList.add("open");
    this.onScrollLock();
    this.onAddKeyboardListener();
  }
  onScrollLock() {
    const styleTag = document.createElement("style");
    styleTag.dataset["w3m"] = SCROLL_LOCK;
    styleTag.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `;
    document.head.appendChild(styleTag);
  }
  onScrollUnlock() {
    const styleTag = document.head.querySelector(`style[data-w3m="${SCROLL_LOCK}"]`);
    if (styleTag) {
      styleTag.remove();
    }
  }
  onAddKeyboardListener() {
    var _a;
    this.abortController = new AbortController();
    const card = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-card");
    card == null ? void 0 : card.focus();
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.handleClose();
      } else if (event.key === "Tab") {
        const { tagName } = event.target;
        if (tagName && !tagName.includes("W3M-") && !tagName.includes("WUI-")) {
          card == null ? void 0 : card.focus();
        }
      }
    }, this.abortController);
  }
  onRemoveKeyboardListener() {
    var _a;
    (_a = this.abortController) == null ? void 0 : _a.abort();
    this.abortController = void 0;
  }
  async onNewAddress(caipAddress) {
    const isSwitchingNamespace = ChainController.state.isSwitchingNamespace;
    const nextConnected = CoreHelperUtil.getPlainAddress(caipAddress);
    const isDisconnectedInSameNamespace = !nextConnected && !isSwitchingNamespace;
    const isSwitchingNamespaceAndConnected = isSwitchingNamespace && nextConnected;
    if (isDisconnectedInSameNamespace) {
      ModalController.close();
    } else if (isSwitchingNamespaceAndConnected) {
      RouterController.goBack();
    }
    await SIWXUtil.initializeIfEnabled();
    this.caipAddress = caipAddress;
    ChainController.setIsSwitchingNamespace(false);
  }
  onNewNetwork(nextCaipNetwork) {
    var _a, _b, _c, _d;
    const prevCaipNetworkId = (_b = (_a = this.caipNetwork) == null ? void 0 : _a.caipNetworkId) == null ? void 0 : _b.toString();
    const nextNetworkId = (_c = nextCaipNetwork == null ? void 0 : nextCaipNetwork.caipNetworkId) == null ? void 0 : _c.toString();
    const networkChanged = prevCaipNetworkId && nextNetworkId && prevCaipNetworkId !== nextNetworkId;
    const isSwitchingNamespace = ChainController.state.isSwitchingNamespace;
    const isUnsupportedNetwork = ((_d = this.caipNetwork) == null ? void 0 : _d.name) === ConstantsUtil.UNSUPPORTED_NETWORK_NAME;
    const isConnectingExternal = RouterController.state.view === "ConnectingExternal";
    const isNotConnected = !this.caipAddress;
    const isNetworkChangedInSameNamespace = networkChanged && !isUnsupportedNetwork && !isSwitchingNamespace;
    const isUnsupportedNetworkScreen = RouterController.state.view === "UnsupportedChain";
    const isModalOpen = ModalController.state.open;
    const shouldGoBack = isModalOpen && !isConnectingExternal && (isNotConnected || isUnsupportedNetworkScreen || isNetworkChangedInSameNamespace);
    if (shouldGoBack) {
      RouterController.goBack();
    }
    this.caipNetwork = nextCaipNetwork;
  }
  prefetch() {
    if (!this.hasPrefetched) {
      ApiController.prefetch();
      ApiController.fetchWallets({ page: 1 });
      this.hasPrefetched = true;
    }
  }
};
W3mModal.styles = styles_default8;
__decorate8([
  property({ type: Boolean })
], W3mModal.prototype, "enableEmbedded", void 0);
__decorate8([
  state()
], W3mModal.prototype, "open", void 0);
__decorate8([
  state()
], W3mModal.prototype, "caipAddress", void 0);
__decorate8([
  state()
], W3mModal.prototype, "caipNetwork", void 0);
__decorate8([
  state()
], W3mModal.prototype, "shake", void 0);
__decorate8([
  state()
], W3mModal.prototype, "filterByNamespace", void 0);
W3mModal = __decorate8([
  customElement("w3m-modal")
], W3mModal);
export {
  W3mModal
};
//# sourceMappingURL=w3m-modal-L52BD22J.js.map
