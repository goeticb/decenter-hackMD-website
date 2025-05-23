import "./chunk-23ZOCXKT.js";
import "./chunk-XTTU3VKH.js";
import "./chunk-UJX4VECD.js";
import {
  W3mRouter
} from "./chunk-QJHT75C6.js";
import "./chunk-KIC3SNNO.js";
import "./chunk-YVOFMANN.js";
import "./chunk-HEPT3XP4.js";
import "./chunk-6QOWD2HI.js";
import {
  executeSocialLogin
} from "./chunk-6OAFNN5J.js";
import "./chunk-CRQ3HVR6.js";
import "./chunk-RH4QGRDN.js";
import "./chunk-BH5XKHVM.js";
import "./chunk-LD4QFRZW.js";
import "./chunk-GDWZI2BJ.js";
import "./chunk-SBJCGIVD.js";
import {
  Directive,
  PartType,
  createRef,
  directive,
  ref
} from "./chunk-JSFERIOH.js";
import "./chunk-WHGGRX5P.js";
import "./chunk-HNB35IZC.js";
import "./chunk-BHIBQBXR.js";
import "./chunk-FS3CSUOV.js";
import {
  createRef as createRef2,
  ref as ref2
} from "./chunk-HZGWUS6I.js";
import {
  ifDefined
} from "./chunk-WK4LCREZ.js";
import "./chunk-UJR4CR2X.js";
import "./chunk-QACLXGLR.js";
import "./chunk-PF7J6LKQ.js";
import "./chunk-NOTVTPDK.js";
import "./chunk-Z4JS4WZC.js";
import {
  ifDefined as ifDefined2
} from "./chunk-UDUV7Y73.js";
import "./chunk-ZWVZUKRU.js";
import {
  LitElement as LitElement2,
  css as css2,
  html as html2,
  noChange,
  property,
  property2,
  state,
  state2
} from "./chunk-COKH4YWJ.js";
import {
  ConnectorUtil,
  WalletUtil
} from "./chunk-37HMH763.js";
import {
  ConstantsUtil as ConstantsUtil3
} from "./chunk-4V2ZSHRP.js";
import {
  ConstantsUtil as ConstantsUtil4
} from "./chunk-VOPCLWV4.js";
import {
  AccountController,
  ApiController,
  AssetController,
  AssetUtil,
  BlockchainApiController,
  ChainController,
  ConnectionController,
  ConnectorController,
  ConstantsUtil,
  ConstantsUtil2,
  CoreHelperUtil,
  EventsController,
  MathUtil,
  ModalController,
  NavigationUtil,
  OptionsController,
  OptionsStateController,
  RouterController,
  SIWXUtil,
  SendController,
  SnackController,
  StorageUtil,
  ThemeController,
  UiHelperUtil,
  W3mFrameRpcConstants,
  colorStyles,
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
  html,
  svg
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

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-account-button/styles.js
var styles_default = css`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-account-button/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiAccountButton = class WuiAccountButton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.networkSrc = void 0;
    this.avatarSrc = void 0;
    this.balance = void 0;
    this.isUnsupportedChain = void 0;
    this.disabled = false;
    this.loading = false;
    this.address = "";
    this.profileName = "";
    this.charsStart = 4;
    this.charsEnd = 6;
  }
  render() {
    return html`
      <button
        ?disabled=${this.disabled}
        class=${ifDefined(this.balance ? void 0 : "local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address ? UiHelperUtil.getTruncateString({
      string: this.profileName || this.address,
      charsStart: this.profileName ? 18 : this.charsStart,
      charsEnd: this.profileName ? 0 : this.charsEnd,
      truncate: this.profileName ? "end" : "middle"
    }) : null}
          </wui-text>
        </wui-flex>
      </button>
    `;
  }
  balanceTemplate() {
    if (this.isUnsupportedChain) {
      return html` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;
    }
    if (this.balance) {
      const networkElement = this.networkSrc ? html`<wui-image src=${this.networkSrc}></wui-image>` : html`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;
      const balanceTemplate = this.loading ? html`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>` : html`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;
      return html`${networkElement} ${balanceTemplate}`;
    }
    return null;
  }
};
WuiAccountButton.styles = [resetStyles, elementStyles, styles_default];
__decorate([
  property2()
], WuiAccountButton.prototype, "networkSrc", void 0);
__decorate([
  property2()
], WuiAccountButton.prototype, "avatarSrc", void 0);
__decorate([
  property2()
], WuiAccountButton.prototype, "balance", void 0);
__decorate([
  property2({ type: Boolean })
], WuiAccountButton.prototype, "isUnsupportedChain", void 0);
__decorate([
  property2({ type: Boolean })
], WuiAccountButton.prototype, "disabled", void 0);
__decorate([
  property2({ type: Boolean })
], WuiAccountButton.prototype, "loading", void 0);
__decorate([
  property2()
], WuiAccountButton.prototype, "address", void 0);
__decorate([
  property2()
], WuiAccountButton.prototype, "profileName", void 0);
__decorate([
  property2()
], WuiAccountButton.prototype, "charsStart", void 0);
__decorate([
  property2()
], WuiAccountButton.prototype, "charsEnd", void 0);
WuiAccountButton = __decorate([
  customElement("wui-account-button")
], WuiAccountButton);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-account-button/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountButtonBase = class extends LitElement2 {
  constructor() {
    var _a, _b, _c, _d, _e, _f;
    super(...arguments);
    this.unsubscribe = [];
    this.disabled = false;
    this.balance = "show";
    this.charsStart = 4;
    this.charsEnd = 6;
    this.namespace = void 0;
    this.caipAddress = (_a = ChainController.getAccountData(this.namespace)) == null ? void 0 : _a.caipAddress;
    this.balanceVal = (_b = ChainController.getAccountData(this.namespace)) == null ? void 0 : _b.balance;
    this.balanceSymbol = (_c = ChainController.getAccountData(this.namespace)) == null ? void 0 : _c.balanceSymbol;
    this.profileName = (_d = ChainController.getAccountData(this.namespace)) == null ? void 0 : _d.profileName;
    this.profileImage = (_e = ChainController.getAccountData(this.namespace)) == null ? void 0 : _e.profileImage;
    this.network = (_f = ChainController.getNetworkData(this.namespace)) == null ? void 0 : _f.caipNetwork;
    this.networkImage = AssetUtil.getNetworkImage(this.network);
    this.isSupported = OptionsController.state.allowUnsupportedChain ? true : ChainController.state.activeChain ? ChainController.checkIfSupportedNetwork(ChainController.state.activeChain) : true;
  }
  firstUpdated() {
    const namespace = this.namespace;
    if (namespace) {
      this.unsubscribe.push(ChainController.subscribeChainProp("accountState", (val) => {
        this.caipAddress = val == null ? void 0 : val.caipAddress;
        this.balanceVal = val == null ? void 0 : val.balance;
        this.balanceSymbol = val == null ? void 0 : val.balanceSymbol;
        this.profileName = val == null ? void 0 : val.profileName;
        this.profileImage = val == null ? void 0 : val.profileImage;
      }, namespace), ChainController.subscribeChainProp("networkState", (val) => {
        this.network = val == null ? void 0 : val.caipNetwork;
        this.isSupported = ChainController.checkIfSupportedNetwork(namespace, val == null ? void 0 : val.caipNetwork);
        this.networkImage = AssetUtil.getNetworkImage(val == null ? void 0 : val.caipNetwork);
      }, namespace));
    } else {
      this.unsubscribe.push(AssetController.subscribeNetworkImages(() => {
        this.networkImage = AssetUtil.getNetworkImage(this.network);
      }), ChainController.subscribeKey("activeCaipAddress", (val) => {
        this.caipAddress = val;
      }), AccountController.subscribeKey("balance", (val) => this.balanceVal = val), AccountController.subscribeKey("balanceSymbol", (val) => this.balanceSymbol = val), AccountController.subscribeKey("profileName", (val) => this.profileName = val), AccountController.subscribeKey("profileImage", (val) => this.profileImage = val), ChainController.subscribeKey("activeCaipNetwork", (val) => {
        this.network = val;
        this.networkImage = AssetUtil.getNetworkImage(val);
        this.isSupported = (val == null ? void 0 : val.chainNamespace) ? ChainController.checkIfSupportedNetwork(val == null ? void 0 : val.chainNamespace) : true;
        this.fetchNetworkImage(val);
      }));
    }
  }
  updated() {
    this.fetchNetworkImage(this.network);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (!ChainController.state.activeChain) {
      return null;
    }
    const shouldShowBalance = this.balance === "show";
    const shouldShowLoading = typeof this.balanceVal !== "string";
    return html2`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${OptionsController.state.allowUnsupportedChain ? false : !this.isSupported}
        address=${ifDefined2(CoreHelperUtil.getPlainAddress(this.caipAddress))}
        profileName=${ifDefined2(this.profileName)}
        networkSrc=${ifDefined2(this.networkImage)}
        avatarSrc=${ifDefined2(this.profileImage)}
        balance=${shouldShowBalance ? CoreHelperUtil.formatBalance(this.balanceVal, this.balanceSymbol) : ""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace ? `-${this.namespace}` : ""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${shouldShowLoading}
      >
      </wui-account-button>
    `;
  }
  async onClick() {
    await ChainController.switchActiveNamespace(this.namespace);
    if (this.isSupported || OptionsController.state.allowUnsupportedChain) {
      ModalController.open();
    } else {
      ModalController.open({ view: "UnsupportedChain" });
    }
  }
  async fetchNetworkImage(network) {
    var _a, _b;
    if ((_a = network == null ? void 0 : network.assets) == null ? void 0 : _a.imageId) {
      this.networkImage = await AssetUtil.fetchNetworkImage((_b = network == null ? void 0 : network.assets) == null ? void 0 : _b.imageId);
    }
  }
};
__decorate2([
  property({ type: Boolean })
], W3mAccountButtonBase.prototype, "disabled", void 0);
__decorate2([
  property()
], W3mAccountButtonBase.prototype, "balance", void 0);
__decorate2([
  property()
], W3mAccountButtonBase.prototype, "charsStart", void 0);
__decorate2([
  property()
], W3mAccountButtonBase.prototype, "charsEnd", void 0);
__decorate2([
  property()
], W3mAccountButtonBase.prototype, "namespace", void 0);
__decorate2([
  state()
], W3mAccountButtonBase.prototype, "caipAddress", void 0);
__decorate2([
  state()
], W3mAccountButtonBase.prototype, "balanceVal", void 0);
__decorate2([
  state()
], W3mAccountButtonBase.prototype, "balanceSymbol", void 0);
__decorate2([
  state()
], W3mAccountButtonBase.prototype, "profileName", void 0);
__decorate2([
  state()
], W3mAccountButtonBase.prototype, "profileImage", void 0);
__decorate2([
  state()
], W3mAccountButtonBase.prototype, "network", void 0);
__decorate2([
  state()
], W3mAccountButtonBase.prototype, "networkImage", void 0);
__decorate2([
  state()
], W3mAccountButtonBase.prototype, "isSupported", void 0);
var W3mAccountButton = class W3mAccountButton2 extends W3mAccountButtonBase {
};
W3mAccountButton = __decorate2([
  customElement("w3m-account-button")
], W3mAccountButton);
var AppKitAccountButton = class AppKitAccountButton2 extends W3mAccountButtonBase {
};
AppKitAccountButton = __decorate2([
  customElement("appkit-account-button")
], AppKitAccountButton);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-button/styles.js
var styles_default2 = css2`
  :host {
    display: block;
    width: max-content;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-button/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mButtonBase = class extends LitElement2 {
  constructor() {
    super(...arguments);
    this.unsubscribe = [];
    this.disabled = false;
    this.balance = void 0;
    this.size = void 0;
    this.label = void 0;
    this.loadingLabel = void 0;
    this.charsStart = 4;
    this.charsEnd = 6;
    this.namespace = void 0;
    this.caipAddress = ChainController.state.activeCaipAddress;
  }
  firstUpdated() {
    if (this.namespace) {
      this.unsubscribe.push(ChainController.subscribeChainProp("accountState", (val) => {
        this.caipAddress = val == null ? void 0 : val.caipAddress;
      }, this.namespace));
    } else {
      this.unsubscribe.push(ChainController.subscribeKey("activeCaipAddress", (val) => this.caipAddress = val));
    }
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return this.caipAddress ? html2`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${ifDefined2(this.balance)}
            .charsStart=${ifDefined2(this.charsStart)}
            .charsEnd=${ifDefined2(this.charsEnd)}
            namespace=${ifDefined2(this.namespace)}
          >
          </appkit-account-button>
        ` : html2`
          <appkit-connect-button
            size=${ifDefined2(this.size)}
            label=${ifDefined2(this.label)}
            loadingLabel=${ifDefined2(this.loadingLabel)}
            namespace=${ifDefined2(this.namespace)}
          ></appkit-connect-button>
        `;
  }
};
W3mButtonBase.styles = styles_default2;
__decorate3([
  property({ type: Boolean })
], W3mButtonBase.prototype, "disabled", void 0);
__decorate3([
  property()
], W3mButtonBase.prototype, "balance", void 0);
__decorate3([
  property()
], W3mButtonBase.prototype, "size", void 0);
__decorate3([
  property()
], W3mButtonBase.prototype, "label", void 0);
__decorate3([
  property()
], W3mButtonBase.prototype, "loadingLabel", void 0);
__decorate3([
  property()
], W3mButtonBase.prototype, "charsStart", void 0);
__decorate3([
  property()
], W3mButtonBase.prototype, "charsEnd", void 0);
__decorate3([
  property()
], W3mButtonBase.prototype, "namespace", void 0);
__decorate3([
  state()
], W3mButtonBase.prototype, "caipAddress", void 0);
var W3mButton = class W3mButton2 extends W3mButtonBase {
};
W3mButton = __decorate3([
  customElement("w3m-button")
], W3mButton);
var AppKitButton = class AppKitButton2 extends W3mButtonBase {
};
AppKitButton = __decorate3([
  customElement("appkit-button")
], AppKitButton);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-connect-button/styles.js
var styles_default3 = css`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-connect-button/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiConnectButton = class WuiConnectButton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.loading = false;
  }
  render() {
    const textVariant = this.size === "md" ? "paragraph-600" : "small-600";
    return html`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${textVariant} color=${this.loading ? "accent-100" : "inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `;
  }
  loadingTemplate() {
    if (!this.loading) {
      return null;
    }
    return html`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`;
  }
};
WuiConnectButton.styles = [resetStyles, elementStyles, styles_default3];
__decorate4([
  property2()
], WuiConnectButton.prototype, "size", void 0);
__decorate4([
  property2({ type: Boolean })
], WuiConnectButton.prototype, "loading", void 0);
WuiConnectButton = __decorate4([
  customElement("wui-connect-button")
], WuiConnectButton);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-connect-button/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectButtonBase = class extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.size = "md";
    this.label = "Connect Wallet";
    this.loadingLabel = "Connecting...";
    this.open = ModalController.state.open;
    this.loading = this.namespace ? ModalController.state.loadingNamespaceMap.get(this.namespace) : ModalController.state.loading;
    this.unsubscribe.push(ModalController.subscribe((val) => {
      this.open = val.open;
      this.loading = this.namespace ? val.loadingNamespaceMap.get(this.namespace) : val.loading;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html2`
      <wui-connect-button
        size=${ifDefined2(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace ? `-${this.namespace}` : ""}`}
      >
        ${this.loading ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
  }
  onClick() {
    if (this.open) {
      ModalController.close();
    } else if (!this.loading) {
      ModalController.open({ view: "Connect", namespace: this.namespace });
    }
  }
};
__decorate5([
  property()
], W3mConnectButtonBase.prototype, "size", void 0);
__decorate5([
  property()
], W3mConnectButtonBase.prototype, "label", void 0);
__decorate5([
  property()
], W3mConnectButtonBase.prototype, "loadingLabel", void 0);
__decorate5([
  property()
], W3mConnectButtonBase.prototype, "namespace", void 0);
__decorate5([
  state()
], W3mConnectButtonBase.prototype, "open", void 0);
__decorate5([
  state()
], W3mConnectButtonBase.prototype, "loading", void 0);
var W3mConnectButton = class W3mConnectButton2 extends W3mConnectButtonBase {
};
W3mConnectButton = __decorate5([
  customElement("w3m-connect-button")
], W3mConnectButton);
var AppKitConnectButton = class AppKitConnectButton2 extends W3mConnectButtonBase {
};
AppKitConnectButton = __decorate5([
  customElement("appkit-connect-button")
], AppKitConnectButton);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-network-button/styles.js
var styles_default4 = css`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-network-button/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiNetworkButton = class WuiNetworkButton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.imageSrc = void 0;
    this.isUnsupportedChain = void 0;
    this.disabled = false;
  }
  render() {
    return html`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `;
  }
  visualTemplate() {
    if (this.isUnsupportedChain) {
      return html`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `;
    }
    if (this.imageSrc) {
      return html`<wui-image src=${this.imageSrc}></wui-image>`;
    }
    return html`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `;
  }
};
WuiNetworkButton.styles = [resetStyles, elementStyles, styles_default4];
__decorate6([
  property2()
], WuiNetworkButton.prototype, "imageSrc", void 0);
__decorate6([
  property2({ type: Boolean })
], WuiNetworkButton.prototype, "isUnsupportedChain", void 0);
__decorate6([
  property2({ type: Boolean })
], WuiNetworkButton.prototype, "disabled", void 0);
WuiNetworkButton = __decorate6([
  customElement("wui-network-button")
], WuiNetworkButton);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-network-button/styles.js
var styles_default5 = css2`
  :host {
    display: block;
    width: max-content;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-network-button/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mNetworkButtonBase = class extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.network = ChainController.state.activeCaipNetwork;
    this.networkImage = AssetUtil.getNetworkImage(this.network);
    this.caipAddress = ChainController.state.activeCaipAddress;
    this.loading = ModalController.state.loading;
    this.isSupported = OptionsController.state.allowUnsupportedChain ? true : ChainController.state.activeChain ? ChainController.checkIfSupportedNetwork(ChainController.state.activeChain) : true;
    this.unsubscribe.push(...[
      AssetController.subscribeNetworkImages(() => {
        this.networkImage = AssetUtil.getNetworkImage(this.network);
      }),
      ChainController.subscribeKey("activeCaipAddress", (val) => {
        this.caipAddress = val;
      }),
      ChainController.subscribeKey("activeCaipNetwork", (val) => {
        var _a;
        this.network = val;
        this.networkImage = AssetUtil.getNetworkImage(val);
        this.isSupported = (val == null ? void 0 : val.chainNamespace) ? ChainController.checkIfSupportedNetwork(val.chainNamespace) : true;
        AssetUtil.fetchNetworkImage((_a = val == null ? void 0 : val.assets) == null ? void 0 : _a.imageId);
      }),
      ModalController.subscribeKey("loading", (val) => this.loading = val)
    ]);
  }
  firstUpdated() {
    var _a, _b;
    AssetUtil.fetchNetworkImage((_b = (_a = this.network) == null ? void 0 : _a.assets) == null ? void 0 : _b.imageId);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const isSupported = this.network ? ChainController.checkIfSupportedNetwork(this.network.chainNamespace) : true;
    return html2`
      <wui-network-button
        .disabled=${Boolean(this.disabled || this.loading)}
        .isUnsupportedChain=${OptionsController.state.allowUnsupportedChain ? false : !isSupported}
        imageSrc=${ifDefined2(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `;
  }
  getLabel() {
    if (this.network) {
      if (!this.isSupported && !OptionsController.state.allowUnsupportedChain) {
        return "Switch Network";
      }
      return this.network.name;
    }
    if (this.label) {
      return this.label;
    }
    if (this.caipAddress) {
      return "Unknown Network";
    }
    return "Select Network";
  }
  onClick() {
    if (!this.loading) {
      EventsController.sendEvent({ type: "track", event: "CLICK_NETWORKS" });
      ModalController.open({ view: "Networks" });
    }
  }
};
W3mNetworkButtonBase.styles = styles_default5;
__decorate7([
  property({ type: Boolean })
], W3mNetworkButtonBase.prototype, "disabled", void 0);
__decorate7([
  property({ type: String })
], W3mNetworkButtonBase.prototype, "label", void 0);
__decorate7([
  state()
], W3mNetworkButtonBase.prototype, "network", void 0);
__decorate7([
  state()
], W3mNetworkButtonBase.prototype, "networkImage", void 0);
__decorate7([
  state()
], W3mNetworkButtonBase.prototype, "caipAddress", void 0);
__decorate7([
  state()
], W3mNetworkButtonBase.prototype, "loading", void 0);
__decorate7([
  state()
], W3mNetworkButtonBase.prototype, "isSupported", void 0);
var W3mNetworkButton = class W3mNetworkButton2 extends W3mNetworkButtonBase {
};
W3mNetworkButton = __decorate7([
  customElement("w3m-network-button")
], W3mNetworkButton);
var AppKitNetworkButton = class AppKitNetworkButton2 extends W3mNetworkButtonBase {
};
AppKitNetworkButton = __decorate7([
  customElement("appkit-network-button")
], AppKitNetworkButton);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-notice-card/styles.js
var styles_default6 = css`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-notice-card/index.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiNoticeCard = class WuiNoticeCard2 extends LitElement {
  constructor() {
    super(...arguments);
    this.label = "";
    this.description = "";
    this.icon = "wallet";
  }
  render() {
    return html`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `;
  }
};
WuiNoticeCard.styles = [resetStyles, elementStyles, styles_default6];
__decorate8([
  property2()
], WuiNoticeCard.prototype, "label", void 0);
__decorate8([
  property2()
], WuiNoticeCard.prototype, "description", void 0);
__decorate8([
  property2()
], WuiNoticeCard.prototype, "icon", void 0);
WuiNoticeCard = __decorate8([
  customElement("wui-notice-card")
], WuiNoticeCard);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-auth-button/index.js
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountAuthButton = class W3mAccountAuthButton2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.socialProvider = StorageUtil.getConnectedSocialProvider();
    this.socialUsername = StorageUtil.getConnectedSocialUsername();
    this.namespace = ChainController.state.activeChain;
    this.unsubscribe.push(ChainController.subscribeKey("activeChain", (namespace) => {
      this.namespace = namespace;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsub) => unsub());
  }
  render() {
    const connectorId = ConnectorController.getConnectorId(this.namespace);
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector || connectorId !== ConstantsUtil.CONNECTOR_ID.AUTH) {
      this.style.cssText = `display: none`;
      return null;
    }
    const email = authConnector.provider.getEmail() ?? "";
    if (!email && !this.socialUsername) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html2`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider ?? "mail"}
        iconSize=${this.socialProvider ? "xxl" : "sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${() => {
      this.onGoToUpdateEmail(email, this.socialProvider);
    }}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(email)}</wui-text>
      </wui-list-item>
    `;
  }
  onGoToUpdateEmail(email, socialProvider) {
    if (!socialProvider) {
      RouterController.push("UpdateEmailWallet", { email, redirectView: "Account" });
    }
  }
  getAuthName(email) {
    if (this.socialUsername) {
      if (this.socialProvider === "discord" && this.socialUsername.endsWith("0")) {
        return this.socialUsername.slice(0, -1);
      }
      return this.socialUsername;
    }
    return email.length > 30 ? `${email.slice(0, -3)}...` : email;
  }
};
__decorate9([
  state()
], W3mAccountAuthButton.prototype, "namespace", void 0);
W3mAccountAuthButton = __decorate9([
  customElement("w3m-account-auth-button")
], W3mAccountAuthButton);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-account-settings-view/index.js
var __decorate10 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountSettingsView = class W3mAccountSettingsView2 extends LitElement2 {
  constructor() {
    super();
    this.usubscribe = [];
    this.networkImages = AssetController.state.networkImages;
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.network = ChainController.state.activeCaipNetwork;
    this.preferredAccountType = AccountController.state.preferredAccountType;
    this.disconnecting = false;
    this.loading = false;
    this.switched = false;
    this.text = "";
    this.usubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileImage = val.profileImage;
          this.profileName = val.profileName;
          this.preferredAccountType = val.preferredAccountType;
        } else {
          ModalController.close();
        }
      }),
      AccountController.subscribeKey("preferredAccountType", (val) => this.preferredAccountType = val),
      ChainController.subscribeKey("activeCaipNetwork", (val) => {
        if (val == null ? void 0 : val.id) {
          this.network = val;
        }
      })
    ]);
  }
  disconnectedCallback() {
    this.usubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a, _b, _c;
    if (!this.address) {
      throw new Error("w3m-account-settings-view: No account provided");
    }
    const networkImage = this.networkImages[((_b = (_a = this.network) == null ? void 0 : _a.assets) == null ? void 0 : _b.imageId) ?? ""];
    return html2`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0", "xl", "m", "xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${ifDefined2(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${UiHelperUtil.getTruncateString({
      string: this.address,
      charsStart: 4,
      charsEnd: 6,
      truncate: "middle"
    })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0", "l", "m", "l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${networkImage ? "image" : "icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${ifDefined2(networkImage)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((_c = this.network) == null ? void 0 : _c.name) ?? "Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
  }
  chooseNameButtonTemplate() {
    var _a;
    const namespace = (_a = this.network) == null ? void 0 : _a.chainNamespace;
    const connectorId = ConnectorController.getConnectorId(namespace);
    const authConnector = ConnectorController.getAuthConnector();
    const hasNetworkSupport = ChainController.checkIfNamesSupported();
    if (!hasNetworkSupport || !authConnector || connectorId !== ConstantsUtil.CONNECTOR_ID.AUTH || this.profileName) {
      return null;
    }
    return html2`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${true}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `;
  }
  authCardTemplate() {
    var _a;
    const namespace = (_a = this.network) == null ? void 0 : _a.chainNamespace;
    const connectorId = ConnectorController.getConnectorId(namespace);
    const authConnector = ConnectorController.getAuthConnector();
    const { origin } = location;
    if (!authConnector || connectorId !== ConstantsUtil.CONNECTOR_ID.AUTH || origin.includes(ConstantsUtil2.SECURE_SITE)) {
      return null;
    }
    return html2`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
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
  onCopyAddress() {
    try {
      if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
  togglePreferredAccountBtnTemplate() {
    var _a;
    const namespace = (_a = this.network) == null ? void 0 : _a.chainNamespace;
    const isNetworkEnabled = ChainController.checkIfSmartAccountEnabled();
    const connectorId = ConnectorController.getConnectorId(namespace);
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector || connectorId !== ConstantsUtil.CONNECTOR_ID.AUTH || !isNetworkEnabled) {
      return null;
    }
    if (!this.switched) {
      this.text = this.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT ? "Switch to your EOA" : "Switch to your smart account";
    }
    return html2`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${true}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `;
  }
  onChooseName() {
    RouterController.push("ChooseAccountName");
  }
  async changePreferredAccountType() {
    const isSmartAccountEnabled = ChainController.checkIfSmartAccountEnabled();
    const accountTypeTarget = this.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT || !isSmartAccountEnabled ? W3mFrameRpcConstants.ACCOUNT_TYPES.EOA : W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT;
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector) {
      return;
    }
    this.loading = true;
    await ConnectionController.setPreferredAccountType(accountTypeTarget);
    this.text = accountTypeTarget === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT ? "Switch to your EOA" : "Switch to your smart account";
    this.switched = true;
    SendController.resetSend();
    this.loading = false;
    this.requestUpdate();
  }
  onNetworks() {
    if (this.isAllowedNetworkSwitch()) {
      RouterController.push("Networks");
    }
  }
  async onDisconnect() {
    try {
      this.disconnecting = true;
      await ConnectionController.disconnect();
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconnecting = false;
    }
  }
  onGoToUpgradeView() {
    EventsController.sendEvent({ type: "track", event: "EMAIL_UPGRADE_FROM_MODAL" });
    RouterController.push("UpgradeEmailWallet");
  }
};
__decorate10([
  state()
], W3mAccountSettingsView.prototype, "address", void 0);
__decorate10([
  state()
], W3mAccountSettingsView.prototype, "profileImage", void 0);
__decorate10([
  state()
], W3mAccountSettingsView.prototype, "profileName", void 0);
__decorate10([
  state()
], W3mAccountSettingsView.prototype, "network", void 0);
__decorate10([
  state()
], W3mAccountSettingsView.prototype, "preferredAccountType", void 0);
__decorate10([
  state()
], W3mAccountSettingsView.prototype, "disconnecting", void 0);
__decorate10([
  state()
], W3mAccountSettingsView.prototype, "loading", void 0);
__decorate10([
  state()
], W3mAccountSettingsView.prototype, "switched", void 0);
__decorate10([
  state()
], W3mAccountSettingsView.prototype, "text", void 0);
W3mAccountSettingsView = __decorate10([
  customElement("w3m-account-settings-view")
], W3mAccountSettingsView);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-profile-button-v2/styles.js
var styles_default7 = css`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-profile-button-v2/index.js
var __decorate11 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiProfileButtonV2 = class WuiProfileButtonV22 extends LitElement {
  constructor() {
    super(...arguments);
    this.avatarSrc = void 0;
    this.profileName = "";
    this.address = "";
    this.icon = "mail";
  }
  render() {
    const namespace = ChainController.state.activeChain;
    const connectorId = ConnectorController.getConnectorId(namespace);
    const shouldShowIcon = connectorId === ConstantsUtil.CONNECTOR_ID.AUTH;
    return html`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${shouldShowIcon ? this.getIconTemplate(this.icon) : ""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${UiHelperUtil.getTruncateString({
      string: this.profileName || this.address,
      charsStart: this.profileName ? 18 : 4,
      charsEnd: this.profileName ? 0 : 4,
      truncate: this.profileName ? "end" : "middle"
    })}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`;
  }
  handleClick(event) {
    var _a, _b;
    if (event.target instanceof HTMLElement && event.target.id === "copy-address") {
      (_a = this.onCopyClick) == null ? void 0 : _a.call(this, event);
      return;
    }
    (_b = this.onProfileClick) == null ? void 0 : _b.call(this, event);
  }
  getIconTemplate(icon) {
    return html`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${icon || "networkPlaceholder"}"
      ></wui-icon-box>
    `;
  }
};
WuiProfileButtonV2.styles = [resetStyles, elementStyles, styles_default7];
__decorate11([
  property2()
], WuiProfileButtonV2.prototype, "avatarSrc", void 0);
__decorate11([
  property2()
], WuiProfileButtonV2.prototype, "profileName", void 0);
__decorate11([
  property2()
], WuiProfileButtonV2.prototype, "address", void 0);
__decorate11([
  property2()
], WuiProfileButtonV2.prototype, "icon", void 0);
__decorate11([
  property2()
], WuiProfileButtonV2.prototype, "onProfileClick", void 0);
__decorate11([
  property2()
], WuiProfileButtonV2.prototype, "onCopyClick", void 0);
WuiProfileButtonV2 = __decorate11([
  customElement("wui-profile-button-v2")
], WuiProfileButtonV2);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tabs/styles.js
var styles_default8 = css`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tabs/index.js
var __decorate12 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiTabs = class WuiTabs2 extends LitElement {
  constructor() {
    super(...arguments);
    this.tabs = [];
    this.onTabChange = () => null;
    this.buttons = [];
    this.disabled = false;
    this.localTabWidth = "100px";
    this.activeTab = 0;
    this.isDense = false;
  }
  render() {
    this.isDense = this.tabs.length > 3;
    this.style.cssText = `
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `;
    this.dataset["type"] = this.isDense ? "flex" : "block";
    return this.tabs.map((tab, index) => {
      var _a;
      const isActive = index === this.activeTab;
      return html`
        <button
          ?disabled=${this.disabled}
          @click=${() => this.onTabClick(index)}
          data-active=${isActive}
          data-testid="tab-${(_a = tab.label) == null ? void 0 : _a.toLowerCase()}"
        >
          ${this.iconTemplate(tab)}
          <wui-text variant="small-600" color="inherit"> ${tab.label} </wui-text>
        </button>
      `;
    });
  }
  firstUpdated() {
    if (this.shadowRoot && this.isDense) {
      this.buttons = [...this.shadowRoot.querySelectorAll("button")];
      setTimeout(() => {
        this.animateTabs(0, true);
      }, 0);
    }
  }
  iconTemplate(tab) {
    if (tab.icon) {
      return html`<wui-icon size="xs" color="inherit" name=${tab.icon}></wui-icon>`;
    }
    return null;
  }
  onTabClick(index) {
    if (this.buttons) {
      this.animateTabs(index, false);
    }
    this.activeTab = index;
    this.onTabChange(index);
  }
  animateTabs(index, initialAnimation) {
    const passiveBtn = this.buttons[this.activeTab];
    const activeBtn = this.buttons[index];
    const passiveBtnText = passiveBtn == null ? void 0 : passiveBtn.querySelector("wui-text");
    const activeBtnText = activeBtn == null ? void 0 : activeBtn.querySelector("wui-text");
    const activeBtnBounds = activeBtn == null ? void 0 : activeBtn.getBoundingClientRect();
    const activeBtnTextBounds = activeBtnText == null ? void 0 : activeBtnText.getBoundingClientRect();
    if (passiveBtn && passiveBtnText && !initialAnimation && index !== this.activeTab) {
      passiveBtnText.animate([{ opacity: 0 }], {
        duration: 50,
        easing: "ease",
        fill: "forwards"
      });
      passiveBtn.animate([{ width: `34px` }], {
        duration: 500,
        easing: "ease",
        fill: "forwards"
      });
    }
    if (activeBtn && activeBtnBounds && activeBtnTextBounds && activeBtnText) {
      if (index !== this.activeTab || initialAnimation) {
        this.localTabWidth = `${Math.round(activeBtnBounds.width + activeBtnTextBounds.width) + 6}px`;
        activeBtn.animate([{ width: `${activeBtnBounds.width + activeBtnTextBounds.width}px` }], {
          duration: initialAnimation ? 0 : 500,
          fill: "forwards",
          easing: "ease"
        });
        activeBtnText.animate([{ opacity: 1 }], {
          duration: initialAnimation ? 0 : 125,
          delay: initialAnimation ? 0 : 200,
          fill: "forwards",
          easing: "ease"
        });
      }
    }
  }
};
WuiTabs.styles = [resetStyles, elementStyles, styles_default8];
__decorate12([
  property2({ type: Array })
], WuiTabs.prototype, "tabs", void 0);
__decorate12([
  property2()
], WuiTabs.prototype, "onTabChange", void 0);
__decorate12([
  property2({ type: Array })
], WuiTabs.prototype, "buttons", void 0);
__decorate12([
  property2({ type: Boolean })
], WuiTabs.prototype, "disabled", void 0);
__decorate12([
  property2()
], WuiTabs.prototype, "localTabWidth", void 0);
__decorate12([
  state2()
], WuiTabs.prototype, "activeTab", void 0);
__decorate12([
  state2()
], WuiTabs.prototype, "isDense", void 0);
WuiTabs = __decorate12([
  customElement("wui-tabs")
], WuiTabs);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-default-widget/styles.js
var styles_default9 = css2`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-default-widget/index.js
var __decorate13 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountDefaultWidget = class W3mAccountDefaultWidget2 extends LitElement2 {
  constructor() {
    var _a;
    super();
    this.unsubscribe = [];
    this.caipAddress = AccountController.state.caipAddress;
    this.address = CoreHelperUtil.getPlainAddress(AccountController.state.caipAddress);
    this.allAccounts = AccountController.state.allAccounts;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.disconnecting = false;
    this.balance = AccountController.state.balance;
    this.balanceSymbol = AccountController.state.balanceSymbol;
    this.features = OptionsController.state.features;
    this.namespace = ChainController.state.activeChain;
    this.chainId = (_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.id;
    this.unsubscribe.push(...[
      AccountController.subscribeKey("caipAddress", (val) => {
        this.address = CoreHelperUtil.getPlainAddress(val);
        this.caipAddress = val;
      }),
      AccountController.subscribeKey("balance", (val) => this.balance = val),
      AccountController.subscribeKey("balanceSymbol", (val) => this.balanceSymbol = val),
      AccountController.subscribeKey("profileName", (val) => this.profileName = val),
      AccountController.subscribeKey("profileImage", (val) => this.profileImage = val),
      OptionsController.subscribeKey("features", (val) => this.features = val),
      AccountController.subscribeKey("allAccounts", (allAccounts) => {
        this.allAccounts = allAccounts;
      }),
      ChainController.subscribeKey("activeChain", (val) => this.namespace = val),
      ChainController.subscribeKey("activeCaipNetwork", (val) => {
        var _a2;
        if (val) {
          const [namespace, chainId] = ((_a2 = val == null ? void 0 : val.caipNetworkId) == null ? void 0 : _a2.split(":")) || [];
          if (namespace && chainId) {
            this.namespace = namespace;
            this.chainId = chainId;
          }
        }
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (!this.caipAddress) {
      return null;
    }
    const shouldShowMultiAccount = ChainController.state.activeChain !== ConstantsUtil.CHAIN.SOLANA && this.allAccounts.length > 1;
    return html2`<wui-flex
        flexDirection="column"
        .padding=${["0", "xl", "m", "xl"]}
        alignItems="center"
        gap="l"
      >
        ${shouldShowMultiAccount ? this.multiAccountTemplate() : this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${CoreHelperUtil.formatBalance(this.balance, this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0", "s", "s", "s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${false}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`;
  }
  onrampTemplate() {
    var _a;
    if (!this.namespace) {
      return null;
    }
    const onramp = (_a = this.features) == null ? void 0 : _a.onramp;
    const hasNetworkSupport = ConstantsUtil2.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);
    if (!onramp || !hasNetworkSupport) {
      return null;
    }
    return html2`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${true}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `;
  }
  orderedFeaturesTemplate() {
    var _a;
    const featuresOrder = ((_a = this.features) == null ? void 0 : _a.walletFeaturesOrder) || ConstantsUtil2.DEFAULT_FEATURES.walletFeaturesOrder;
    return featuresOrder.map((feature) => {
      switch (feature) {
        case "onramp":
          return this.onrampTemplate();
        case "swaps":
          return this.swapsTemplate();
        case "send":
          return this.sendTemplate();
        default:
          return null;
      }
    });
  }
  activityTemplate() {
    var _a;
    if (!this.namespace) {
      return null;
    }
    const isSolana = ChainController.state.activeChain === ConstantsUtil.CHAIN.SOLANA;
    const isEnabled = ((_a = this.features) == null ? void 0 : _a.history) && ConstantsUtil2.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace);
    return isEnabled ? html2` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!isSolana}
          ?disabled=${isSolana}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100" ?disabled=${isSolana}>
            Activity
          </wui-text>
          ${isSolana ? html2`<wui-tag variant="main">Coming soon</wui-tag>` : ""}
        </wui-list-item>` : null;
  }
  swapsTemplate() {
    var _a;
    const swaps = (_a = this.features) == null ? void 0 : _a.swaps;
    const isEvm = ChainController.state.activeChain === ConstantsUtil.CHAIN.EVM;
    if (!swaps || !isEvm) {
      return null;
    }
    return html2`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${true}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `;
  }
  sendTemplate() {
    var _a;
    const send = (_a = this.features) == null ? void 0 : _a.send;
    const isEvm = ChainController.state.activeChain === ConstantsUtil.CHAIN.EVM;
    if (!send || !isEvm) {
      return null;
    }
    return html2`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${true}
        @click=${this.handleClickSend.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `;
  }
  authCardTemplate() {
    const namespace = ChainController.state.activeChain;
    const connectorId = ConnectorController.getConnectorId(namespace);
    const authConnector = ConnectorController.getAuthConnector();
    const { origin } = location;
    if (!authConnector || connectorId !== ConstantsUtil.CONNECTOR_ID.AUTH || origin.includes(ConstantsUtil2.SECURE_SITE)) {
      return null;
    }
    return html2`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
  }
  handleSwitchAccountsView() {
    RouterController.push("SwitchAddress");
  }
  handleClickPay() {
    RouterController.push("OnRampProviders");
  }
  handleClickSwap() {
    RouterController.push("Swap");
  }
  handleClickSend() {
    RouterController.push("WalletSend");
  }
  explorerBtnTemplate() {
    const addressExplorerUrl = AccountController.state.addressExplorerUrl;
    if (!addressExplorerUrl) {
      return null;
    }
    return html2`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `;
  }
  singleAccountTemplate() {
    return html2`
      <wui-avatar
        alt=${ifDefined2(this.caipAddress)}
        address=${ifDefined2(CoreHelperUtil.getPlainAddress(this.caipAddress))}
        imageSrc=${ifDefined2(this.profileImage === null ? void 0 : this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName ? UiHelperUtil.getTruncateString({
      string: this.profileName,
      charsStart: 20,
      charsEnd: 0,
      truncate: "end"
    }) : UiHelperUtil.getTruncateString({
      string: this.address || "",
      charsStart: 4,
      charsEnd: 4,
      truncate: "middle"
    })}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `;
  }
  multiAccountTemplate() {
    if (!this.address) {
      throw new Error("w3m-account-view: No account provided");
    }
    const account = this.allAccounts.find((acc) => acc.address === this.address);
    const label = AccountController.state.addressLabels.get(this.address);
    if (this.namespace === "bip122") {
      return this.btcAccountsTemplate();
    }
    return html2`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${ifDefined2(this.address)}
        icon="${(account == null ? void 0 : account.type) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT && ChainController.state.activeChain === ConstantsUtil.CHAIN.EVM ? "lightbulb" : "mail"}"
        avatarSrc=${ifDefined2(this.profileImage ? this.profileImage : void 0)}
        profileName=${ifDefined2(label ? label : this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `;
  }
  btcAccountsTemplate() {
    return html2`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${ifDefined2(this.profileImage ? this.profileImage : void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{ label: "Payment" }, { label: "Ordinals" }]}
        .onTabChange=${(index) => {
      var _a;
      return AccountController.setCaipAddress(`bip122:${this.chainId}:${((_a = this.allAccounts[index]) == null ? void 0 : _a.address) || ""}`, this.namespace);
    }}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${UiHelperUtil.getTruncateString({
      string: this.profileName || this.address || "",
      charsStart: this.profileName ? 18 : 4,
      charsEnd: this.profileName ? 0 : 4,
      truncate: this.profileName ? "end" : "middle"
    })}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`;
  }
  onCopyAddress() {
    try {
      if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
  onTransactions() {
    EventsController.sendEvent({
      type: "track",
      event: "CLICK_TRANSACTIONS",
      properties: {
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    RouterController.push("Transactions");
  }
  async onDisconnect() {
    try {
      this.disconnecting = true;
      await ConnectionController.disconnect();
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconnecting = false;
    }
  }
  onExplorer() {
    const addressExplorerUrl = AccountController.state.addressExplorerUrl;
    if (addressExplorerUrl) {
      CoreHelperUtil.openHref(addressExplorerUrl, "_blank");
    }
  }
  onGoToUpgradeView() {
    EventsController.sendEvent({ type: "track", event: "EMAIL_UPGRADE_FROM_MODAL" });
    RouterController.push("UpgradeEmailWallet");
  }
};
W3mAccountDefaultWidget.styles = styles_default9;
__decorate13([
  state()
], W3mAccountDefaultWidget.prototype, "caipAddress", void 0);
__decorate13([
  state()
], W3mAccountDefaultWidget.prototype, "address", void 0);
__decorate13([
  state()
], W3mAccountDefaultWidget.prototype, "allAccounts", void 0);
__decorate13([
  state()
], W3mAccountDefaultWidget.prototype, "profileImage", void 0);
__decorate13([
  state()
], W3mAccountDefaultWidget.prototype, "profileName", void 0);
__decorate13([
  state()
], W3mAccountDefaultWidget.prototype, "disconnecting", void 0);
__decorate13([
  state()
], W3mAccountDefaultWidget.prototype, "balance", void 0);
__decorate13([
  state()
], W3mAccountDefaultWidget.prototype, "balanceSymbol", void 0);
__decorate13([
  state()
], W3mAccountDefaultWidget.prototype, "features", void 0);
__decorate13([
  state()
], W3mAccountDefaultWidget.prototype, "namespace", void 0);
__decorate13([
  state()
], W3mAccountDefaultWidget.prototype, "chainId", void 0);
W3mAccountDefaultWidget = __decorate13([
  customElement("w3m-account-default-widget")
], W3mAccountDefaultWidget);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-balance/styles.js
var styles_default10 = css`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-balance/index.js
var __decorate14 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiBalance = class WuiBalance2 extends LitElement {
  constructor() {
    super(...arguments);
    this.dollars = "0";
    this.pennies = "00";
  }
  render() {
    return html`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`;
  }
};
WuiBalance.styles = [resetStyles, styles_default10];
__decorate14([
  property2()
], WuiBalance.prototype, "dollars", void 0);
__decorate14([
  property2()
], WuiBalance.prototype, "pennies", void 0);
WuiBalance = __decorate14([
  customElement("wui-balance")
], WuiBalance);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-button/styles.js
var styles_default11 = css`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-button/index.js
var __decorate15 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiIconButton = class WuiIconButton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.text = "";
    this.icon = "card";
  }
  render() {
    return html`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`;
  }
};
WuiIconButton.styles = [resetStyles, elementStyles, styles_default11];
__decorate15([
  property2()
], WuiIconButton.prototype, "text", void 0);
__decorate15([
  property2()
], WuiIconButton.prototype, "icon", void 0);
WuiIconButton = __decorate15([
  customElement("wui-icon-button")
], WuiIconButton);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-profile-button/styles.js
var styles_default12 = css`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-profile-button/index.js
var __decorate16 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiProfileButton = class WuiProfileButton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.networkSrc = void 0;
    this.avatarSrc = void 0;
    this.profileName = "";
    this.address = "";
    this.icon = "chevronBottom";
  }
  render() {
    return html`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${UiHelperUtil.getTruncateString({
      string: this.profileName || this.address,
      charsStart: this.profileName ? 18 : 4,
      charsEnd: this.profileName ? 0 : 4,
      truncate: this.profileName ? "end" : "middle"
    })}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`;
  }
  networkImageTemplate() {
    if (this.networkSrc) {
      return html`<wui-image src=${this.networkSrc}></wui-image>`;
    }
    return html`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `;
  }
};
WuiProfileButton.styles = [resetStyles, elementStyles, styles_default12];
__decorate16([
  property2()
], WuiProfileButton.prototype, "networkSrc", void 0);
__decorate16([
  property2()
], WuiProfileButton.prototype, "avatarSrc", void 0);
__decorate16([
  property2()
], WuiProfileButton.prototype, "profileName", void 0);
__decorate16([
  property2()
], WuiProfileButton.prototype, "address", void 0);
__decorate16([
  property2()
], WuiProfileButton.prototype, "icon", void 0);
WuiProfileButton = __decorate16([
  customElement("wui-profile-button")
], WuiProfileButton);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tooltip/styles.js
var styles_default13 = css`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tooltip/index.js
var __decorate17 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiTooltip = class WuiTooltip2 extends LitElement {
  constructor() {
    super(...arguments);
    this.placement = "top";
    this.variant = "fill";
    this.message = "";
  }
  render() {
    this.dataset["variant"] = this.variant;
    return html`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant === "fill" ? "cursor" : "cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`;
  }
};
WuiTooltip.styles = [resetStyles, elementStyles, styles_default13];
__decorate17([
  property2()
], WuiTooltip.prototype, "placement", void 0);
__decorate17([
  property2()
], WuiTooltip.prototype, "variant", void 0);
__decorate17([
  property2()
], WuiTooltip.prototype, "message", void 0);
WuiTooltip = __decorate17([
  customElement("wui-tooltip")
], WuiTooltip);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-activity-widget/styles.js
var styles_default14 = css2`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-activity-widget/index.js
var __decorate18 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountActivityWidget = class W3mAccountActivityWidget2 extends LitElement2 {
  render() {
    return html2`<w3m-activity-list page="account"></w3m-activity-list>`;
  }
};
W3mAccountActivityWidget.styles = styles_default14;
W3mAccountActivityWidget = __decorate18([
  customElement("w3m-account-activity-widget")
], W3mAccountActivityWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-nfts-widget/styles.js
var styles_default15 = css2`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-nfts-widget/index.js
var __decorate19 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountNftsWidget = class W3mAccountNftsWidget2 extends LitElement2 {
  render() {
    return html2`${this.nftTemplate()}`;
  }
  nftTemplate() {
    return html2` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
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
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`;
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
};
W3mAccountNftsWidget.styles = styles_default15;
W3mAccountNftsWidget = __decorate19([
  customElement("w3m-account-nfts-widget")
], W3mAccountNftsWidget);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-description/styles.js
var styles_default16 = css`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-description/index.js
var __decorate20 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiListDescription = class WuiListDescription2 extends LitElement {
  constructor() {
    super(...arguments);
    this.icon = "card";
    this.text = "";
    this.description = "";
    this.tag = void 0;
    this.iconBackgroundColor = "accent-100";
    this.iconColor = "accent-100";
    this.disabled = false;
  }
  render() {
    return html`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `;
  }
  titleTemplate() {
    if (this.tag) {
      return html` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`;
    }
    return html`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`;
  }
};
WuiListDescription.styles = [resetStyles, elementStyles, styles_default16];
__decorate20([
  property2()
], WuiListDescription.prototype, "icon", void 0);
__decorate20([
  property2()
], WuiListDescription.prototype, "text", void 0);
__decorate20([
  property2()
], WuiListDescription.prototype, "description", void 0);
__decorate20([
  property2()
], WuiListDescription.prototype, "tag", void 0);
__decorate20([
  property2()
], WuiListDescription.prototype, "iconBackgroundColor", void 0);
__decorate20([
  property2()
], WuiListDescription.prototype, "iconColor", void 0);
__decorate20([
  property2({ type: Boolean })
], WuiListDescription.prototype, "disabled", void 0);
WuiListDescription = __decorate20([
  customElement("wui-list-description")
], WuiListDescription);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-tokens-widget/styles.js
var styles_default17 = css2`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-tokens-widget/index.js
var __decorate21 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountTokensWidget = class W3mAccountTokensWidget2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tokenBalance = AccountController.state.tokenBalance;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        this.tokenBalance = val.tokenBalance;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html2`${this.tokenTemplate()}`;
  }
  tokenTemplate() {
    var _a;
    if (this.tokenBalance && ((_a = this.tokenBalance) == null ? void 0 : _a.length) > 0) {
      return html2`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`;
    }
    return html2` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`;
  }
  tokenItemTemplate() {
    var _a;
    return (_a = this.tokenBalance) == null ? void 0 : _a.map((token) => html2`<wui-list-token
          tokenName=${token.name}
          tokenImageUrl=${token.iconUrl}
          tokenAmount=${token.quantity.numeric}
          tokenValue=${token.value}
          tokenCurrency=${token.symbol}
        ></wui-list-token>`);
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
  onBuyClick() {
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_BUY_CRYPTO",
      properties: {
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    RouterController.push("OnRampProviders");
  }
};
W3mAccountTokensWidget.styles = styles_default17;
__decorate21([
  state()
], W3mAccountTokensWidget.prototype, "tokenBalance", void 0);
W3mAccountTokensWidget = __decorate21([
  customElement("w3m-account-tokens-widget")
], W3mAccountTokensWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-wallet-features-widget/styles.js
var styles_default18 = css2`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-account-wallet-features-widget/index.js
var __decorate22 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TABS = 3;
var TABS_PADDING = 48;
var MODAL_MOBILE_VIEW_PX = 430;
var W3mAccountWalletFeaturesWidget = class W3mAccountWalletFeaturesWidget2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.network = ChainController.state.activeCaipNetwork;
    this.currentTab = AccountController.state.currentTab;
    this.tokenBalance = AccountController.state.tokenBalance;
    this.features = OptionsController.state.features;
    this.networkImage = AssetUtil.getNetworkImage(this.network);
    this.unsubscribe.push(...[
      AssetController.subscribeNetworkImages(() => {
        this.networkImage = AssetUtil.getNetworkImage(this.network);
      }),
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileImage = val.profileImage;
          this.profileName = val.profileName;
          this.currentTab = val.currentTab;
          this.tokenBalance = val.tokenBalance;
        } else {
          ModalController.close();
        }
      })
    ], ChainController.subscribeKey("activeCaipNetwork", (val) => this.network = val), OptionsController.subscribeKey("features", (val) => this.features = val));
    this.watchSwapValues();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    clearInterval(this.watchTokenBalance);
  }
  firstUpdated() {
    AccountController.fetchTokenBalance();
  }
  render() {
    if (!this.address) {
      throw new Error("w3m-account-view: No account provided");
    }
    return html2`<wui-flex
      flexDirection="column"
      .padding=${["0", "xl", "m", "xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${ifDefined2(this.address)}
        networkSrc=${ifDefined2(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${ifDefined2(this.profileImage ? this.profileImage : void 0)}
        profileName=${ifDefined2(this.profileName ?? void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()}

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${CoreHelperUtil.isMobile() && window.innerWidth < MODAL_MOBILE_VIEW_PX ? `${(window.innerWidth - TABS_PADDING) / TABS}px` : "104px"}
        .tabs=${ConstantsUtil4.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`;
  }
  orderedWalletFeatures() {
    var _a;
    const walletFeaturesOrder = ((_a = this.features) == null ? void 0 : _a.walletFeaturesOrder) || ConstantsUtil2.DEFAULT_FEATURES.walletFeaturesOrder;
    const isAllDisabled = walletFeaturesOrder.every((feature) => {
      var _a2;
      return !((_a2 = this.features) == null ? void 0 : _a2[feature]);
    });
    if (isAllDisabled) {
      return null;
    }
    return html2`<wui-flex gap="s">
      ${walletFeaturesOrder.map((feature) => {
      switch (feature) {
        case "onramp":
          return this.onrampTemplate();
        case "swaps":
          return this.swapsTemplate();
        case "receive":
          return this.receiveTemplate();
        case "send":
          return this.sendTemplate();
        default:
          return null;
      }
    })}
    </wui-flex>`;
  }
  onrampTemplate() {
    var _a;
    const onramp = (_a = this.features) == null ? void 0 : _a.onramp;
    if (!onramp) {
      return null;
    }
    return html2`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `;
  }
  swapsTemplate() {
    var _a;
    const swaps = (_a = this.features) == null ? void 0 : _a.swaps;
    const isEvm = ChainController.state.activeChain === ConstantsUtil.CHAIN.EVM;
    if (!swaps || !isEvm) {
      return null;
    }
    return html2`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `;
  }
  receiveTemplate() {
    var _a;
    const receive = (_a = this.features) == null ? void 0 : _a.receive;
    if (!receive) {
      return null;
    }
    return html2`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `;
  }
  sendTemplate() {
    var _a;
    const send = (_a = this.features) == null ? void 0 : _a.send;
    const isEvm = ChainController.state.activeChain === ConstantsUtil.CHAIN.EVM;
    if (!send || !isEvm) {
      return null;
    }
    return html2`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `;
  }
  watchSwapValues() {
    this.watchTokenBalance = setInterval(() => AccountController.fetchTokenBalance((error) => this.onTokenBalanceError(error)), 1e4);
  }
  onTokenBalanceError(error) {
    if (error instanceof Error && error.cause instanceof Response) {
      const statusCode = error.cause.status;
      if (statusCode === ConstantsUtil.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE) {
        clearInterval(this.watchTokenBalance);
      }
    }
  }
  listContentTemplate() {
    if (this.currentTab === 0) {
      return html2`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
    }
    if (this.currentTab === 1) {
      return html2`<w3m-account-nfts-widget></w3m-account-nfts-widget>`;
    }
    if (this.currentTab === 2) {
      return html2`<w3m-account-activity-widget></w3m-account-activity-widget>`;
    }
    return html2`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
  }
  tokenBalanceTemplate() {
    var _a;
    if (this.tokenBalance && ((_a = this.tokenBalance) == null ? void 0 : _a.length) >= 0) {
      const value = CoreHelperUtil.calculateBalance(this.tokenBalance);
      const { dollars = "0", pennies = "00" } = CoreHelperUtil.formatTokenBalance(value);
      return html2`<wui-balance dollars=${dollars} pennies=${pennies}></wui-balance>`;
    }
    return html2`<wui-balance dollars="0" pennies="00"></wui-balance>`;
  }
  onTabChange(index) {
    AccountController.setCurrentTab(index);
  }
  onProfileButtonClick() {
    const { allAccounts } = AccountController.state;
    if (allAccounts.length > 1) {
      RouterController.push("Profile");
    } else {
      RouterController.push("AccountSettings");
    }
  }
  onBuyClick() {
    RouterController.push("OnRampProviders");
  }
  onSwapClick() {
    var _a, _b, _c;
    if (((_a = this.network) == null ? void 0 : _a.caipNetworkId) && !ConstantsUtil2.SWAP_SUPPORTED_NETWORKS.includes((_b = this.network) == null ? void 0 : _b.caipNetworkId)) {
      RouterController.push("UnsupportedChain", {
        swapUnsupportedChain: true
      });
    } else {
      EventsController.sendEvent({
        type: "track",
        event: "OPEN_SWAP",
        properties: {
          network: ((_c = this.network) == null ? void 0 : _c.caipNetworkId) || "",
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      RouterController.push("Swap");
    }
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
  onSendClick() {
    var _a;
    EventsController.sendEvent({
      type: "track",
      event: "OPEN_SEND",
      properties: {
        network: ((_a = this.network) == null ? void 0 : _a.caipNetworkId) || "",
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    RouterController.push("WalletSend");
  }
};
W3mAccountWalletFeaturesWidget.styles = styles_default18;
__decorate22([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "watchTokenBalance", void 0);
__decorate22([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "address", void 0);
__decorate22([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "profileImage", void 0);
__decorate22([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "profileName", void 0);
__decorate22([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "network", void 0);
__decorate22([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "currentTab", void 0);
__decorate22([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "tokenBalance", void 0);
__decorate22([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "features", void 0);
__decorate22([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "networkImage", void 0);
W3mAccountWalletFeaturesWidget = __decorate22([
  customElement("w3m-account-wallet-features-widget")
], W3mAccountWalletFeaturesWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-account-view/index.js
var __decorate23 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountView = class W3mAccountView2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.namespace = ChainController.state.activeChain;
    this.unsubscribe.push(ChainController.subscribeKey("activeChain", (namespace) => {
      this.namespace = namespace;
    }));
  }
  render() {
    if (!this.namespace) {
      return null;
    }
    const connectorId = ConnectorController.getConnectorId(this.namespace);
    const authConnector = ConnectorController.getAuthConnector();
    return html2`
      ${authConnector && connectorId === ConstantsUtil.CONNECTOR_ID.AUTH ? this.walletFeaturesTemplate() : this.defaultTemplate()}
    `;
  }
  walletFeaturesTemplate() {
    return html2`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`;
  }
  defaultTemplate() {
    return html2`<w3m-account-default-widget></w3m-account-default-widget>`;
  }
};
__decorate23([
  state()
], W3mAccountView.prototype, "namespace", void 0);
W3mAccountView = __decorate23([
  customElement("w3m-account-view")
], W3mAccountView);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-account/styles.js
var styles_default19 = css`
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

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-account/index.js
var __decorate24 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiListAccount = class WuiListAccount2 extends LitElement {
  constructor() {
    super(...arguments);
    this.accountAddress = "";
    this.accountType = "";
    this.labels = AccountController.state.addressLabels;
    this.caipNetwork = ChainController.state.activeCaipNetwork;
    this.socialProvider = StorageUtil.getConnectedSocialProvider();
    this.balance = 0;
    this.fetchingBalance = true;
    this.shouldShowIcon = false;
    this.selected = false;
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    BlockchainApiController.getBalance(this.accountAddress, (_a = this.caipNetwork) == null ? void 0 : _a.caipNetworkId).then((response) => {
      let total = this.balance;
      if (response.balances.length > 0) {
        total = response.balances.reduce((acc, balance) => acc + ((balance == null ? void 0 : balance.value) || 0), 0);
      }
      this.balance = total;
      this.fetchingBalance = false;
      this.requestUpdate();
    }).catch(() => {
      this.fetchingBalance = false;
      this.requestUpdate();
    });
  }
  render() {
    const label = this.getLabel();
    const namespace = ChainController.state.activeChain;
    const connectorId = ConnectorController.getConnectorId(namespace);
    this.shouldShowIcon = connectorId === ConstantsUtil.CONNECTOR_ID.AUTH;
    return html`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0", "0", "s", "1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon ? html`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType === W3mFrameRpcConstants.ACCOUNT_TYPES.EOA ? this.socialProvider ?? "mail" : "lightbulb"}
                background="fg-300"
              ></wui-icon-box>` : html`<wui-flex .padding="${["0", "0", "0", "s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${UiHelperUtil.getTruncateString({
      string: this.accountAddress,
      charsStart: 4,
      charsEnd: 6,
      truncate: "middle"
    })}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${label}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance ? html`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>` : html` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `;
  }
  getLabel() {
    var _a;
    let label = (_a = this.labels) == null ? void 0 : _a.get(this.accountAddress);
    const namespace = ChainController.state.activeChain;
    const connectorId = ConnectorController.getConnectorId(namespace);
    if (!label && connectorId === ConstantsUtil.CONNECTOR_ID.AUTH) {
      label = `${this.accountType === "eoa" ? this.socialProvider ?? "Email" : "Smart"} Account`;
    } else if (!label) {
      label = "EOA";
    }
    return label;
  }
};
WuiListAccount.styles = [resetStyles, elementStyles, styles_default19];
__decorate24([
  property2()
], WuiListAccount.prototype, "accountAddress", void 0);
__decorate24([
  property2()
], WuiListAccount.prototype, "accountType", void 0);
__decorate24([
  property2({ type: Boolean })
], WuiListAccount.prototype, "selected", void 0);
__decorate24([
  property2({ type: Function })
], WuiListAccount.prototype, "onSelect", void 0);
WuiListAccount = __decorate24([
  customElement("wui-list-account")
], WuiListAccount);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-profile-view/styles.js
var styles_default20 = css2`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-profile-view/index.js
var __decorate25 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mProfileView = class W3mProfileView2 extends LitElement2 {
  constructor() {
    super();
    this.usubscribe = [];
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.accounts = AccountController.state.allAccounts;
    this.loading = false;
    this.usubscribe.push(AccountController.subscribeKey("address", (address) => {
      if (address) {
        this.address = address;
      } else {
        ModalController.close();
      }
    }));
    this.usubscribe.push(AccountController.subscribeKey("profileImage", (profileImage) => {
      this.profileImage = profileImage;
    }));
    this.usubscribe.push(AccountController.subscribeKey("profileName", (profileName) => {
      this.profileName = profileName;
    }));
  }
  disconnectedCallback() {
    this.usubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (!this.address) {
      throw new Error("w3m-profile-view: No account provided");
    }
    return html2`
      <wui-flex flexDirection="column" gap="l" .padding=${["0", "xl", "m", "xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${ifDefined2(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName ? UiHelperUtil.getTruncateString({
      string: this.profileName,
      charsStart: 20,
      charsEnd: 0,
      truncate: "end"
    }) : UiHelperUtil.getTruncateString({
      string: this.address,
      charsStart: 4,
      charsEnd: 6,
      truncate: "middle"
    })}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${() => RouterController.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `;
  }
  accountsTemplate() {
    return html2`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs", "m", "s", "s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map((account) => this.accountTemplate(account))}
      </wui-flex>
    </wui-flex>`;
  }
  async onSwitchAccount(account) {
    this.loading = true;
    const emailConnector = ConnectorController.getAuthConnector();
    if (emailConnector) {
      const type = account.type;
      await ConnectionController.setPreferredAccountType(type);
    }
    AccountController.setShouldUpdateToAddress(account.address, ChainController.state.activeChain);
    this.loading = false;
  }
  accountTemplate(account) {
    return html2`<wui-list-account accountAddress=${account.address} accountType=${account.type}>
      ${account.address === this.address ? "" : html2`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${() => this.onSwitchAccount(account)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`;
  }
  onCopyAddress() {
    try {
      if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mProfileView.styles = styles_default20;
__decorate25([
  state()
], W3mProfileView.prototype, "address", void 0);
__decorate25([
  state()
], W3mProfileView.prototype, "profileImage", void 0);
__decorate25([
  state()
], W3mProfileView.prototype, "profileName", void 0);
__decorate25([
  state()
], W3mProfileView.prototype, "accounts", void 0);
__decorate25([
  state()
], W3mProfileView.prototype, "loading", void 0);
W3mProfileView = __decorate25([
  customElement("w3m-profile-view")
], W3mProfileView);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-banner-img/styles.js
var styles_default21 = css`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-banner-img/index.js
var __decorate26 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiBannerImg = class WuiBannerImg2 extends LitElement {
  constructor() {
    super(...arguments);
    this.imageSrc = "";
    this.text = "";
    this.size = "";
  }
  render() {
    return html`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `;
  }
};
WuiBannerImg.styles = [resetStyles, elementStyles, styles_default21];
__decorate26([
  property2()
], WuiBannerImg.prototype, "imageSrc", void 0);
__decorate26([
  property2()
], WuiBannerImg.prototype, "text", void 0);
__decorate26([
  property2()
], WuiBannerImg.prototype, "size", void 0);
WuiBannerImg = __decorate26([
  customElement("wui-banner-img")
], WuiBannerImg);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-switch-address-view/styles.js
var styles_default22 = css2`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-switch-address-view/index.js
var __decorate27 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSwitchAddressView = class W3mSwitchAddressView2 extends LitElement2 {
  constructor() {
    super();
    this.metadata = OptionsController.state.metadata;
    this.allAccounts = AccountController.state.allAccounts || [];
    this.balances = {};
    this.labels = AccountController.state.addressLabels;
    this.currentAddress = AccountController.state.address || "";
    this.caipNetwork = ChainController.state.activeCaipNetwork;
    AccountController.subscribeKey("allAccounts", (allAccounts) => {
      this.allAccounts = allAccounts;
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.allAccounts.forEach((account) => {
      var _a;
      BlockchainApiController.getBalance(account.address, (_a = this.caipNetwork) == null ? void 0 : _a.caipNetworkId).then((response) => {
        let total = this.balances[account.address] || 0;
        if (response.balances.length > 0) {
          total = response.balances.reduce((acc, balance) => acc + ((balance == null ? void 0 : balance.value) || 0), 0);
        }
        this.balances[account.address] = total;
        this.requestUpdate();
      });
    });
  }
  getAddressIcon(type) {
    if (type === "smartAccount") {
      return "lightbulb";
    }
    return "mail";
  }
  render() {
    var _a, _b;
    return html2`
      <wui-flex justifyContent="center" .padding=${["xl", "0", "xl", "0"]}>
        <wui-banner-img
          imageSrc=${ifDefined2((_a = this.metadata) == null ? void 0 : _a.icons[0])}
          text=${ifDefined2((_b = this.metadata) == null ? void 0 : _b.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l", "xl", "xl", "xl"]}>
        ${this.allAccounts.map((account, index) => this.getAddressTemplate(account, index))}
      </wui-flex>
    `;
  }
  getAddressTemplate(account, index) {
    var _a, _b, _c, _d;
    const label = (_a = this.labels) == null ? void 0 : _a.get(account.address);
    const namespace = ChainController.state.activeChain;
    const connectorId = ConnectorController.getConnectorId(namespace);
    const shouldShowIcon = connectorId === ConstantsUtil.CONNECTOR_ID.AUTH;
    return html2`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${account.address}></wui-avatar>
          ${shouldShowIcon ? html2`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(account.type)}"
                ?border=${true}
              ></wui-icon-box>` : html2`<wui-flex .padding="${["0", "0", "0", "s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${label ? label : UiHelperUtil.getTruncateString({
      string: account.address,
      charsStart: 4,
      charsEnd: 6,
      truncate: "middle"
    })}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${typeof this.balances[account.address] === "number" ? `$${(_b = this.balances[account.address]) == null ? void 0 : _b.toFixed(2)}` : html2`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${((_c = account.address) == null ? void 0 : _c.toLowerCase()) === ((_d = this.currentAddress) == null ? void 0 : _d.toLowerCase()) ? "" : html2`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${index}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${() => this.onSwitchAddress(account.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `;
  }
  onSwitchAddress(address) {
    const caipNetwork = ChainController.state.activeCaipNetwork;
    const activeChainNamespace = caipNetwork == null ? void 0 : caipNetwork.chainNamespace;
    const caipAddress = `${activeChainNamespace}:${caipNetwork == null ? void 0 : caipNetwork.id}:${address}`;
    AccountController.setCaipAddress(caipAddress, activeChainNamespace);
    ModalController.close();
  }
};
W3mSwitchAddressView.styles = styles_default22;
__decorate27([
  state()
], W3mSwitchAddressView.prototype, "allAccounts", void 0);
__decorate27([
  state()
], W3mSwitchAddressView.prototype, "balances", void 0);
W3mSwitchAddressView = __decorate27([
  customElement("w3m-switch-address-view")
], W3mSwitchAddressView);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-switch/styles.js
var styles_default23 = css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-switch/index.js
var __decorate28 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiSwitch = class WuiSwitch2 extends LitElement {
  constructor() {
    super(...arguments);
    this.inputElementRef = createRef2();
    this.checked = void 0;
  }
  render() {
    return html`
      <label>
        <input
          ${ref2(this.inputElementRef)}
          type="checkbox"
          ?checked=${ifDefined(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
  }
  dispatchChangeEvent() {
    var _a;
    this.dispatchEvent(new CustomEvent("switchChange", {
      detail: (_a = this.inputElementRef.value) == null ? void 0 : _a.checked,
      bubbles: true,
      composed: true
    }));
  }
};
WuiSwitch.styles = [resetStyles, elementStyles, colorStyles, styles_default23];
__decorate28([
  property2({ type: Boolean })
], WuiSwitch.prototype, "checked", void 0);
WuiSwitch = __decorate28([
  customElement("wui-switch")
], WuiSwitch);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-certified-switch/styles.js
var styles_default24 = css`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-certified-switch/index.js
var __decorate29 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiCertifiedSwitch = class WuiCertifiedSwitch2 extends LitElement {
  constructor() {
    super(...arguments);
    this.checked = void 0;
  }
  render() {
    return html`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${ifDefined(this.checked)}></wui-switch>
      </button>
    `;
  }
};
WuiCertifiedSwitch.styles = [resetStyles, elementStyles, styles_default24];
__decorate29([
  property2({ type: Boolean })
], WuiCertifiedSwitch.prototype, "checked", void 0);
WuiCertifiedSwitch = __decorate29([
  customElement("wui-certified-switch")
], WuiCertifiedSwitch);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-element/styles.js
var styles_default25 = css`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-element/index.js
var __decorate30 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiInputElement = class WuiInputElement2 extends LitElement {
  constructor() {
    super(...arguments);
    this.icon = "copy";
  }
  render() {
    return html`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `;
  }
};
WuiInputElement.styles = [resetStyles, elementStyles, styles_default25];
__decorate30([
  property2()
], WuiInputElement.prototype, "icon", void 0);
WuiInputElement = __decorate30([
  customElement("wui-input-element")
], WuiInputElement);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-search-bar/styles.js
var styles_default26 = css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-search-bar/index.js
var __decorate31 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiSearchBar = class WuiSearchBar2 extends LitElement {
  constructor() {
    super(...arguments);
    this.inputComponentRef = createRef2();
  }
  render() {
    return html`
      <wui-input-text
        ${ref2(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `;
  }
  clearValue() {
    const inputComponent = this.inputComponentRef.value;
    const inputElement = inputComponent == null ? void 0 : inputComponent.inputElementRef.value;
    if (inputElement) {
      inputElement.value = "";
      inputElement.focus();
      inputElement.dispatchEvent(new Event("input"));
    }
  }
};
WuiSearchBar.styles = [resetStyles, styles_default26];
WuiSearchBar = __decorate31([
  customElement("wui-search-bar")
], WuiSearchBar);

// node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkMd.js
var networkSvgMd = svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-card-select-loader/styles.js
var styles_default27 = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-card-select-loader/index.js
var __decorate32 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiCardSelectLoader = class WuiCardSelectLoader2 extends LitElement {
  constructor() {
    super(...arguments);
    this.type = "wallet";
  }
  render() {
    return html`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `;
  }
  shimmerTemplate() {
    if (this.type === "network") {
      return html` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${networkSvgMd}`;
    }
    return html`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
  }
};
WuiCardSelectLoader.styles = [resetStyles, elementStyles, styles_default27];
__decorate32([
  property2()
], WuiCardSelectLoader.prototype, "type", void 0);
WuiCardSelectLoader = __decorate32([
  customElement("wui-card-select-loader")
], WuiCardSelectLoader);

// node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-grid/styles.js
var styles_default28 = css`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-grid/index.js
var __decorate33 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiGrid = class WuiGrid2 extends LitElement {
  render() {
    this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 3)};
    `;
    return html`<slot></slot>`;
  }
};
WuiGrid.styles = [resetStyles, styles_default28];
__decorate33([
  property2()
], WuiGrid.prototype, "gridTemplateRows", void 0);
__decorate33([
  property2()
], WuiGrid.prototype, "gridTemplateColumns", void 0);
__decorate33([
  property2()
], WuiGrid.prototype, "justifyItems", void 0);
__decorate33([
  property2()
], WuiGrid.prototype, "alignItems", void 0);
__decorate33([
  property2()
], WuiGrid.prototype, "justifyContent", void 0);
__decorate33([
  property2()
], WuiGrid.prototype, "alignContent", void 0);
__decorate33([
  property2()
], WuiGrid.prototype, "columnGap", void 0);
__decorate33([
  property2()
], WuiGrid.prototype, "rowGap", void 0);
__decorate33([
  property2()
], WuiGrid.prototype, "gap", void 0);
__decorate33([
  property2()
], WuiGrid.prototype, "padding", void 0);
__decorate33([
  property2()
], WuiGrid.prototype, "margin", void 0);
WuiGrid = __decorate33([
  customElement("wui-grid")
], WuiGrid);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-wallet-image/styles.js
var styles_default29 = css`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-wallet-image/index.js
var __decorate34 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiWalletImage = class WuiWalletImage2 extends LitElement {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.name = "";
    this.installed = false;
    this.badgeSize = "xs";
  }
  render() {
    let borderRadius = "xxs";
    if (this.size === "lg") {
      borderRadius = "m";
    } else if (this.size === "md") {
      borderRadius = "xs";
    } else {
      borderRadius = "xxs";
    }
    this.style.cssText = `
       --local-border-radius: var(--wui-border-radius-${borderRadius});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `;
    if (this.walletIcon) {
      this.dataset["walletIcon"] = this.walletIcon;
    }
    return html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `;
  }
  templateVisual() {
    if (this.imageSrc) {
      return html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`;
    } else if (this.walletIcon) {
      return html`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`;
    }
    return html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`;
  }
};
WuiWalletImage.styles = [elementStyles, resetStyles, styles_default29];
__decorate34([
  property2()
], WuiWalletImage.prototype, "size", void 0);
__decorate34([
  property2()
], WuiWalletImage.prototype, "name", void 0);
__decorate34([
  property2()
], WuiWalletImage.prototype, "imageSrc", void 0);
__decorate34([
  property2()
], WuiWalletImage.prototype, "walletIcon", void 0);
__decorate34([
  property2({ type: Boolean })
], WuiWalletImage.prototype, "installed", void 0);
__decorate34([
  property2()
], WuiWalletImage.prototype, "badgeSize", void 0);
WuiWalletImage = __decorate34([
  customElement("wui-wallet-image")
], WuiWalletImage);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/styles.js
var styles_default30 = css2`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/index.js
var __decorate35 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAllWalletsListItem = class W3mAllWalletsListItem2 extends LitElement2 {
  constructor() {
    super();
    this.observer = new IntersectionObserver(() => void 0);
    this.visible = false;
    this.imageSrc = void 0;
    this.imageLoading = false;
    this.wallet = void 0;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.visible = true;
          this.fetchImageSrc();
        } else {
          this.visible = false;
        }
      });
    }, { threshold: 0.01 });
  }
  firstUpdated() {
    this.observer.observe(this);
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    var _a, _b;
    const certified = ((_a = this.wallet) == null ? void 0 : _a.badge_type) === "certified";
    return html2`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${ifDefined2(certified ? "certified" : void 0)}
            >${(_b = this.wallet) == null ? void 0 : _b.name}</wui-text
          >
          ${certified ? html2`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>` : null}
        </wui-flex>
      </button>
    `;
  }
  imageTemplate() {
    var _a, _b;
    if (!this.visible && !this.imageSrc || this.imageLoading) {
      return this.shimmerTemplate();
    }
    return html2`
      <wui-wallet-image
        size="md"
        imageSrc=${ifDefined2(this.imageSrc)}
        name=${(_a = this.wallet) == null ? void 0 : _a.name}
        .installed=${(_b = this.wallet) == null ? void 0 : _b.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
  }
  shimmerTemplate() {
    return html2`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
  }
  async fetchImageSrc() {
    if (!this.wallet) {
      return;
    }
    this.imageSrc = AssetUtil.getWalletImage(this.wallet);
    if (this.imageSrc) {
      return;
    }
    this.imageLoading = true;
    this.imageSrc = await AssetUtil.fetchWalletImage(this.wallet.image_id);
    this.imageLoading = false;
  }
};
W3mAllWalletsListItem.styles = styles_default30;
__decorate35([
  state()
], W3mAllWalletsListItem.prototype, "visible", void 0);
__decorate35([
  state()
], W3mAllWalletsListItem.prototype, "imageSrc", void 0);
__decorate35([
  state()
], W3mAllWalletsListItem.prototype, "imageLoading", void 0);
__decorate35([
  property()
], W3mAllWalletsListItem.prototype, "wallet", void 0);
W3mAllWalletsListItem = __decorate35([
  customElement("w3m-all-wallets-list-item")
], W3mAllWalletsListItem);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/styles.js
var styles_default31 = css2`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/index.js
var __decorate36 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAGINATOR_ID = "local-paginator";
var W3mAllWalletsList = class W3mAllWalletsList2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.paginationObserver = void 0;
    this.loading = !ApiController.state.wallets.length;
    this.wallets = ApiController.state.wallets;
    this.recommended = ApiController.state.recommended;
    this.featured = ApiController.state.featured;
    this.unsubscribe.push(...[
      ApiController.subscribeKey("wallets", (val) => this.wallets = val),
      ApiController.subscribeKey("recommended", (val) => this.recommended = val),
      ApiController.subscribeKey("featured", (val) => this.featured = val)
    ]);
  }
  firstUpdated() {
    this.initialFetch();
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var _a;
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    (_a = this.paginationObserver) == null ? void 0 : _a.disconnect();
  }
  render() {
    return html2`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0", "s", "s", "s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
  }
  async initialFetch() {
    var _a;
    this.loading = true;
    const gridEl = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-grid");
    if (gridEl) {
      await ApiController.fetchWallets({ page: 1 });
      await gridEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.loading = false;
      gridEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  shimmerTemplate(items, id) {
    return [...Array(items)].map(() => html2`
        <wui-card-select-loader type="wallet" id=${ifDefined2(id)}></wui-card-select-loader>
      `);
  }
  walletsTemplate() {
    const wallets = CoreHelperUtil.uniqueBy([...this.featured, ...this.recommended, ...this.wallets], "id");
    const walletsWithInstalled = WalletUtil.markWalletsAsInstalled(wallets);
    return walletsWithInstalled.map((wallet) => html2`
        <w3m-all-wallets-list-item
          @click=${() => this.onConnectWallet(wallet)}
          .wallet=${wallet}
        ></w3m-all-wallets-list-item>
      `);
  }
  paginationLoaderTemplate() {
    const { wallets, recommended, featured, count } = ApiController.state;
    const columns = window.innerWidth < 352 ? 3 : 4;
    const currentWallets = wallets.length + recommended.length;
    const minimumRows = Math.ceil(currentWallets / columns);
    let shimmerCount = minimumRows * columns - currentWallets + columns;
    shimmerCount -= wallets.length ? featured.length % columns : 0;
    if (count === 0 && featured.length > 0) {
      return null;
    }
    if (count === 0 || [...featured, ...wallets, ...recommended].length < count) {
      return this.shimmerTemplate(shimmerCount, PAGINATOR_ID);
    }
    return null;
  }
  createPaginationObserver() {
    var _a;
    const loaderEl = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(`#${PAGINATOR_ID}`);
    if (loaderEl) {
      this.paginationObserver = new IntersectionObserver(([element]) => {
        if ((element == null ? void 0 : element.isIntersecting) && !this.loading) {
          const { page, count, wallets } = ApiController.state;
          if (wallets.length < count) {
            ApiController.fetchWallets({ page: page + 1 });
          }
        }
      });
      this.paginationObserver.observe(loaderEl);
    }
  }
  onConnectWallet(wallet) {
    ConnectorController.selectWalletConnector(wallet);
  }
};
W3mAllWalletsList.styles = styles_default31;
__decorate36([
  state()
], W3mAllWalletsList.prototype, "loading", void 0);
__decorate36([
  state()
], W3mAllWalletsList.prototype, "wallets", void 0);
__decorate36([
  state()
], W3mAllWalletsList.prototype, "recommended", void 0);
__decorate36([
  state()
], W3mAllWalletsList.prototype, "featured", void 0);
W3mAllWalletsList = __decorate36([
  customElement("w3m-all-wallets-list")
], W3mAllWalletsList);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/styles.js
var styles_default32 = css2`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/index.js
var __decorate37 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAllWalletsSearch = class W3mAllWalletsSearch2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.prevQuery = "";
    this.prevBadge = void 0;
    this.loading = true;
    this.query = "";
  }
  render() {
    this.onSearch();
    return this.loading ? html2`<wui-loading-spinner color="accent-100"></wui-loading-spinner>` : this.walletsTemplate();
  }
  async onSearch() {
    if (this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) {
      this.prevQuery = this.query;
      this.prevBadge = this.badge;
      this.loading = true;
      await ApiController.searchWallet({ search: this.query, badge: this.badge });
      this.loading = false;
    }
  }
  walletsTemplate() {
    const { search } = ApiController.state;
    const wallets = WalletUtil.markWalletsAsInstalled(search);
    if (!search.length) {
      return html2`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
    }
    return html2`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0", "s", "s", "s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${wallets.map((wallet) => html2`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(wallet)}
              .wallet=${wallet}
              data-testid="wallet-search-item-${wallet.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `;
  }
  onConnectWallet(wallet) {
    ConnectorController.selectWalletConnector(wallet);
  }
};
W3mAllWalletsSearch.styles = styles_default32;
__decorate37([
  state()
], W3mAllWalletsSearch.prototype, "loading", void 0);
__decorate37([
  property()
], W3mAllWalletsSearch.prototype, "query", void 0);
__decorate37([
  property()
], W3mAllWalletsSearch.prototype, "badge", void 0);
W3mAllWalletsSearch = __decorate37([
  customElement("w3m-all-wallets-search")
], W3mAllWalletsSearch);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-all-wallets-view/index.js
var __decorate38 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAllWalletsView = class W3mAllWalletsView2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.search = "";
    this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
      this.search = value;
    });
  }
  render() {
    const isSearch = this.search.length >= 2;
    return html2`
      <wui-flex .padding=${["0", "s", "s", "s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch || this.badge ? html2`<w3m-all-wallets-search
            query=${this.search}
            badge=${ifDefined2(this.badge)}
          ></w3m-all-wallets-search>` : html2`<w3m-all-wallets-list badge=${ifDefined2(this.badge)}></w3m-all-wallets-list>`}
    `;
  }
  onInputChange(event) {
    this.onDebouncedSearch(event.detail);
  }
  onClick() {
    if (this.badge === "certified") {
      this.badge = void 0;
      return;
    }
    this.badge = "certified";
    SnackController.showSvg("Only WalletConnect certified", {
      icon: "walletConnectBrown",
      iconColor: "accent-100"
    });
  }
  qrButtonTemplate() {
    if (CoreHelperUtil.isMobile()) {
      return html2`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;
    }
    return null;
  }
  onWalletConnectQr() {
    RouterController.push("ConnectingWalletConnect");
  }
};
__decorate38([
  state()
], W3mAllWalletsView.prototype, "search", void 0);
__decorate38([
  state()
], W3mAllWalletsView.prototype, "badge", void 0);
W3mAllWalletsView = __decorate38([
  customElement("w3m-all-wallets-view")
], W3mAllWalletsView);

// node_modules/@reown/appkit-scaffold-ui/node_modules/lit-html/development/directives/class-map.js
var ClassMapDirective = class extends Directive {
  constructor(partInfo) {
    var _a;
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== "class" || ((_a = partInfo.strings) == null ? void 0 : _a.length) > 2) {
      throw new Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
  }
  render(classInfo) {
    return " " + Object.keys(classInfo).filter((key) => classInfo[key]).join(" ") + " ";
  }
  update(part, [classInfo]) {
    var _a, _b;
    if (this._previousClasses === void 0) {
      this._previousClasses = /* @__PURE__ */ new Set();
      if (part.strings !== void 0) {
        this._staticClasses = new Set(part.strings.join(" ").split(/\s/).filter((s) => s !== ""));
      }
      for (const name in classInfo) {
        if (classInfo[name] && !((_a = this._staticClasses) == null ? void 0 : _a.has(name))) {
          this._previousClasses.add(name);
        }
      }
      return this.render(classInfo);
    }
    const classList = part.element.classList;
    for (const name of this._previousClasses) {
      if (!(name in classInfo)) {
        classList.remove(name);
        this._previousClasses.delete(name);
      }
    }
    for (const name in classInfo) {
      const value = !!classInfo[name];
      if (value !== this._previousClasses.has(name) && !((_b = this._staticClasses) == null ? void 0 : _b.has(name))) {
        if (value) {
          classList.add(name);
          this._previousClasses.add(name);
        } else {
          classList.remove(name);
          this._previousClasses.delete(name);
        }
      }
    }
    return noChange;
  }
};
var classMap = directive(ClassMapDirective);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-button/styles.js
var styles_default33 = css`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-button/index.js
var __decorate39 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiListButton = class WuiListButton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.text = "";
    this.disabled = false;
    this.tabIdx = void 0;
  }
  render() {
    return html`
      <button ?disabled=${this.disabled} tabindex=${ifDefined(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `;
  }
};
WuiListButton.styles = [resetStyles, elementStyles, styles_default33];
__decorate39([
  property2()
], WuiListButton.prototype, "text", void 0);
__decorate39([
  property2({ type: Boolean })
], WuiListButton.prototype, "disabled", void 0);
__decorate39([
  property2()
], WuiListButton.prototype, "tabIdx", void 0);
WuiListButton = __decorate39([
  customElement("wui-list-button")
], WuiListButton);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-email-login-widget/styles.js
var styles_default34 = css2`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-email-login-widget/index.js
var __decorate40 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mEmailLoginWidget = class W3mEmailLoginWidget2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.unsubscribe = [];
    this.formRef = createRef();
    this.email = "";
    this.loading = false;
    this.error = "";
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
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
      <form ${ref(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${ifDefined2(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `;
  }
  submitButtonTemplate() {
    const showSubmit = !this.loading && this.email.length > 3;
    return showSubmit ? html2`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        ` : null;
  }
  loadingTemplate() {
    return this.loading ? html2`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>` : null;
  }
  templateError() {
    if (this.error) {
      return html2`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`;
    }
    return null;
  }
  onEmailInputChange(event) {
    this.email = event.detail.trim();
    this.error = "";
  }
  async onSubmitEmail(event) {
    const isAvailableChain = ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((chain) => chain === ChainController.state.activeChain);
    if (!isAvailableChain) {
      const caipNetwork = ChainController.getFirstCaipNetworkSupportsAuthConnector();
      if (caipNetwork) {
        RouterController.push("SwitchNetwork", { network: caipNetwork });
        return;
      }
    }
    try {
      if (this.loading) {
        return;
      }
      this.loading = true;
      event.preventDefault();
      const authConnector = ConnectorController.getAuthConnector();
      if (!authConnector) {
        throw new Error("w3m-email-login-widget: Auth connector not found");
      }
      const { action } = await authConnector.provider.connectEmail({ email: this.email });
      EventsController.sendEvent({ type: "track", event: "EMAIL_SUBMITTED" });
      if (action === "VERIFY_OTP") {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" });
        RouterController.push("EmailVerifyOtp", { email: this.email });
      } else if (action === "VERIFY_DEVICE") {
        RouterController.push("EmailVerifyDevice", { email: this.email });
      } else if (action === "CONNECT") {
        await ConnectionController.connectExternal(authConnector, ChainController.state.activeChain);
        RouterController.replace("Account");
      }
    } catch (error) {
      const parsedError = CoreHelperUtil.parseError(error);
      if (parsedError == null ? void 0 : parsedError.includes("Invalid email")) {
        this.error = "Invalid email. Try again.";
      } else {
        SnackController.showError(error);
      }
    } finally {
      this.loading = false;
    }
  }
  onFocusEvent() {
    EventsController.sendEvent({ type: "track", event: "EMAIL_LOGIN_SELECTED" });
  }
};
W3mEmailLoginWidget.styles = styles_default34;
__decorate40([
  property()
], W3mEmailLoginWidget.prototype, "tabIdx", void 0);
__decorate40([
  state()
], W3mEmailLoginWidget.prototype, "email", void 0);
__decorate40([
  state()
], W3mEmailLoginWidget.prototype, "loading", void 0);
__decorate40([
  state()
], W3mEmailLoginWidget.prototype, "error", void 0);
W3mEmailLoginWidget = __decorate40([
  customElement("w3m-email-login-widget")
], W3mEmailLoginWidget);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-logo-select/styles.js
var styles_default35 = css`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-logo-select/index.js
var __decorate41 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiLogoSelect = class WuiLogoSelect2 extends LitElement {
  constructor() {
    super(...arguments);
    this.logo = "google";
    this.disabled = false;
    this.tabIdx = void 0;
  }
  render() {
    return html`
      <button ?disabled=${this.disabled} tabindex=${ifDefined(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `;
  }
};
WuiLogoSelect.styles = [resetStyles, elementStyles, styles_default35];
__decorate41([
  property2()
], WuiLogoSelect.prototype, "logo", void 0);
__decorate41([
  property2({ type: Boolean })
], WuiLogoSelect.prototype, "disabled", void 0);
__decorate41([
  property2()
], WuiLogoSelect.prototype, "tabIdx", void 0);
WuiLogoSelect = __decorate41([
  customElement("wui-logo-select")
], WuiLogoSelect);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-social-login-widget/styles.js
var styles_default36 = css2`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-social-login-widget/index.js
var __decorate42 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MAX_TOP_VIEW = 2;
var MAXIMUM_LENGTH = 6;
var W3mSocialLoginWidget = class W3mSocialLoginWidget2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.walletGuide = "get-started";
    this.tabIdx = void 0;
    this.connectors = ConnectorController.state.connectors;
    this.features = OptionsController.state.features;
    this.authConnector = this.connectors.find((c) => c.type === "AUTH");
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => {
      this.connectors = val;
      this.authConnector = this.connectors.find((c) => c.type === "AUTH");
    }), OptionsController.subscribeKey("features", (val) => this.features = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html2`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `;
  }
  topViewTemplate() {
    var _a;
    const isCreateWalletPage = this.walletGuide === "explore";
    let socials = (_a = this.features) == null ? void 0 : _a.socials;
    if (!socials && isCreateWalletPage) {
      socials = ConstantsUtil2.DEFAULT_FEATURES.socials;
      return this.renderTopViewContent(socials);
    }
    if (!socials) {
      return null;
    }
    return this.renderTopViewContent(socials);
  }
  renderTopViewContent(socials) {
    if (socials.length === 2) {
      return html2` <wui-flex gap="xs">
        ${socials.slice(0, MAX_TOP_VIEW).map((social) => html2`<wui-logo-select
              data-testid=${`social-selector-${social}`}
              @click=${() => {
        this.onSocialClick(social);
      }}
              logo=${social}
              tabIdx=${ifDefined2(this.tabIdx)}
            ></wui-logo-select>`)}
      </wui-flex>`;
    }
    return html2` <wui-list-social
      data-testid=${`social-selector-${socials[0]}`}
      @click=${() => {
      this.onSocialClick(socials[0]);
    }}
      logo=${ifDefined2(socials[0])}
      align="center"
      name=${`Continue with ${socials[0]}`}
      tabIdx=${ifDefined2(this.tabIdx)}
    ></wui-list-social>`;
  }
  bottomViewTemplate() {
    var _a;
    let socials = (_a = this.features) == null ? void 0 : _a.socials;
    const isCreateWalletPage = this.walletGuide === "explore";
    const isSocialDisabled = !this.authConnector || !socials || !(socials == null ? void 0 : socials.length);
    if (isSocialDisabled && isCreateWalletPage) {
      socials = ConstantsUtil2.DEFAULT_FEATURES.socials;
    }
    if (!socials) {
      return null;
    }
    if (socials.length <= MAX_TOP_VIEW) {
      return null;
    }
    if (socials && socials.length > MAXIMUM_LENGTH) {
      return html2`<wui-flex gap="xs">
        ${socials.slice(1, MAXIMUM_LENGTH - 1).map((social) => html2`<wui-logo-select
              data-testid=${`social-selector-${social}`}
              @click=${() => {
        this.onSocialClick(social);
      }}
              logo=${social}
              tabIdx=${ifDefined2(this.tabIdx)}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${ifDefined2(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
        ></wui-logo-select>
      </wui-flex>`;
    }
    if (!socials) {
      return null;
    }
    return html2`<wui-flex gap="xs">
      ${socials.slice(1, socials.length).map((social) => html2`<wui-logo-select
            data-testid=${`social-selector-${social}`}
            @click=${() => {
      this.onSocialClick(social);
    }}
            logo=${social}
            tabIdx=${ifDefined2(this.tabIdx)}
          ></wui-logo-select>`)}
    </wui-flex>`;
  }
  onMoreSocialsClick() {
    RouterController.push("ConnectSocials");
  }
  async onSocialClick(socialProvider) {
    const isAvailableChain = ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((chain) => chain === ChainController.state.activeChain);
    if (!isAvailableChain) {
      const caipNetwork = ChainController.getFirstCaipNetworkSupportsAuthConnector();
      if (caipNetwork) {
        RouterController.push("SwitchNetwork", { network: caipNetwork });
        return;
      }
    }
    if (socialProvider) {
      await executeSocialLogin(socialProvider);
    }
  }
};
W3mSocialLoginWidget.styles = styles_default36;
__decorate42([
  property()
], W3mSocialLoginWidget.prototype, "walletGuide", void 0);
__decorate42([
  property()
], W3mSocialLoginWidget.prototype, "tabIdx", void 0);
__decorate42([
  state()
], W3mSocialLoginWidget.prototype, "connectors", void 0);
__decorate42([
  state()
], W3mSocialLoginWidget.prototype, "features", void 0);
__decorate42([
  state()
], W3mSocialLoginWidget.prototype, "authConnector", void 0);
W3mSocialLoginWidget = __decorate42([
  customElement("w3m-social-login-widget")
], W3mSocialLoginWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-wallet-guide/styles.js
var styles_default37 = css2`
  :host {
    padding-bottom: var(--wui-spacing-s);
  }
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-wallet-guide/index.js
var __decorate43 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletGuide = class W3mWalletGuide2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.walletGuide = "get-started";
  }
  render() {
    return this.walletGuide === "explore" ? html2`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>` : html2`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s", "0", "s", "0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${ifDefined2(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`;
  }
  onGetStarted() {
    RouterController.push("Create");
  }
};
W3mWalletGuide.styles = styles_default37;
__decorate43([
  property()
], W3mWalletGuide.prototype, "tabIdx", void 0);
__decorate43([
  property()
], W3mWalletGuide.prototype, "walletGuide", void 0);
W3mWalletGuide = __decorate43([
  customElement("w3m-wallet-guide")
], W3mWalletGuide);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-all-wallets-image/styles.js
var styles_default38 = css`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-all-wallets-image/index.js
var __decorate44 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TOTAL_IMAGES = 4;
var WuiAllWalletsImage = class WuiAllWalletsImage2 extends LitElement {
  constructor() {
    super(...arguments);
    this.walletImages = [];
  }
  render() {
    const isPlaceholders = this.walletImages.length < TOTAL_IMAGES;
    return html`${this.walletImages.slice(0, TOTAL_IMAGES).map(({ src, walletName }) => html`
            <wui-wallet-image
              size="inherit"
              imageSrc=${src}
              name=${ifDefined(walletName)}
            ></wui-wallet-image>
          `)}
      ${isPlaceholders ? [...Array(TOTAL_IMAGES - this.walletImages.length)].map(() => html` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`) : null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`;
  }
};
WuiAllWalletsImage.styles = [resetStyles, styles_default38];
__decorate44([
  property2({ type: Array })
], WuiAllWalletsImage.prototype, "walletImages", void 0);
WuiAllWalletsImage = __decorate44([
  customElement("wui-all-wallets-image")
], WuiAllWalletsImage);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-wallet/styles.js
var styles_default39 = css`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-wallet/index.js
var __decorate45 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiListWallet = class WuiListWallet2 extends LitElement {
  constructor() {
    super(...arguments);
    this.walletImages = [];
    this.imageSrc = "";
    this.name = "";
    this.tabIdx = void 0;
    this.installed = false;
    this.disabled = false;
    this.showAllWallets = false;
    this.loading = false;
    this.loadingSpinnerColor = "accent-100";
  }
  render() {
    return html`
      <button ?disabled=${this.disabled} tabindex=${ifDefined(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `;
  }
  templateAllWallets() {
    if (this.showAllWallets && this.imageSrc) {
      return html` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `;
    } else if (this.showAllWallets && this.walletIcon) {
      return html` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `;
    }
    return null;
  }
  templateWalletImage() {
    if (!this.showAllWallets && this.imageSrc) {
      return html`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`;
    } else if (!this.showAllWallets && !this.imageSrc) {
      return html`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`;
    }
    return null;
  }
  templateStatus() {
    if (this.loading) {
      return html`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`;
    } else if (this.tagLabel && this.tagVariant) {
      return html`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`;
    } else if (this.icon) {
      return html`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`;
    }
    return null;
  }
};
WuiListWallet.styles = [resetStyles, elementStyles, styles_default39];
__decorate45([
  property2({ type: Array })
], WuiListWallet.prototype, "walletImages", void 0);
__decorate45([
  property2()
], WuiListWallet.prototype, "imageSrc", void 0);
__decorate45([
  property2()
], WuiListWallet.prototype, "name", void 0);
__decorate45([
  property2()
], WuiListWallet.prototype, "tagLabel", void 0);
__decorate45([
  property2()
], WuiListWallet.prototype, "tagVariant", void 0);
__decorate45([
  property2()
], WuiListWallet.prototype, "icon", void 0);
__decorate45([
  property2()
], WuiListWallet.prototype, "walletIcon", void 0);
__decorate45([
  property2()
], WuiListWallet.prototype, "tabIdx", void 0);
__decorate45([
  property2({ type: Boolean })
], WuiListWallet.prototype, "installed", void 0);
__decorate45([
  property2({ type: Boolean })
], WuiListWallet.prototype, "disabled", void 0);
__decorate45([
  property2({ type: Boolean })
], WuiListWallet.prototype, "showAllWallets", void 0);
__decorate45([
  property2({ type: Boolean })
], WuiListWallet.prototype, "loading", void 0);
__decorate45([
  property2({ type: String })
], WuiListWallet.prototype, "loadingSpinnerColor", void 0);
WuiListWallet = __decorate45([
  customElement("wui-list-wallet")
], WuiListWallet);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-widget/index.js
var __decorate46 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAllWalletsWidget = class W3mAllWalletsWidget2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tabIdx = void 0;
    this.connectors = ConnectorController.state.connectors;
    this.count = ApiController.state.count;
    this.isFetchingRecommendedWallets = ApiController.state.isFetchingRecommendedWallets;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val), ApiController.subscribeKey("count", (val) => this.count = val), ApiController.subscribeKey("isFetchingRecommendedWallets", (val) => this.isFetchingRecommendedWallets = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const wcConnector = this.connectors.find((c) => c.id === "walletConnect");
    const { allWallets } = OptionsController.state;
    if (!wcConnector || allWallets === "HIDE") {
      return null;
    }
    if (allWallets === "ONLY_MOBILE" && !CoreHelperUtil.isMobile()) {
      return null;
    }
    const featuredCount = ApiController.state.featured.length;
    const rawCount = this.count + featuredCount;
    const roundedCount = rawCount < 10 ? rawCount : Math.floor(rawCount / 10) * 10;
    const tagLabel = roundedCount < rawCount ? `${roundedCount}+` : `${roundedCount}`;
    return html2`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${tagLabel}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${ifDefined2(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets ? "fg-300" : "accent-100"}
      ></wui-list-wallet>
    `;
  }
  onAllWallets() {
    EventsController.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" });
    RouterController.push("AllWallets");
  }
};
__decorate46([
  property()
], W3mAllWalletsWidget.prototype, "tabIdx", void 0);
__decorate46([
  state()
], W3mAllWalletsWidget.prototype, "connectors", void 0);
__decorate46([
  state()
], W3mAllWalletsWidget.prototype, "count", void 0);
__decorate46([
  state()
], W3mAllWalletsWidget.prototype, "isFetchingRecommendedWallets", void 0);
W3mAllWalletsWidget = __decorate46([
  customElement("w3m-all-wallets-widget")
], W3mAllWalletsWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-announced-widget/index.js
var __decorate47 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectAnnouncedWidget = class W3mConnectAnnouncedWidget2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tabIdx = void 0;
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const announcedConnectors = this.connectors.filter((connector) => connector.type === "ANNOUNCED");
    if (!(announcedConnectors == null ? void 0 : announcedConnectors.length)) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html2`
      <wui-flex flexDirection="column" gap="xs">
        ${announcedConnectors.filter(ConnectorUtil.showConnector).map((connector) => html2`
              <wui-list-wallet
                imageSrc=${ifDefined2(AssetUtil.getConnectorImage(connector))}
                name=${connector.name ?? "Unknown"}
                @click=${() => this.onConnector(connector)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${connector.id}`}
                .installed=${true}
                tabIdx=${ifDefined2(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `;
  }
  onConnector(connector) {
    if (connector.id === "walletConnect") {
      if (CoreHelperUtil.isMobile()) {
        RouterController.push("AllWallets");
      } else {
        RouterController.push("ConnectingWalletConnect");
      }
    } else {
      RouterController.push("ConnectingExternal", { connector });
    }
  }
};
__decorate47([
  property()
], W3mConnectAnnouncedWidget.prototype, "tabIdx", void 0);
__decorate47([
  state()
], W3mConnectAnnouncedWidget.prototype, "connectors", void 0);
W3mConnectAnnouncedWidget = __decorate47([
  customElement("w3m-connect-announced-widget")
], W3mConnectAnnouncedWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-custom-widget/index.js
var __decorate48 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectCustomWidget = class W3mConnectCustomWidget2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tabIdx = void 0;
    this.connectors = ConnectorController.state.connectors;
    this.loading = false;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
    if (CoreHelperUtil.isTelegram() && CoreHelperUtil.isIos()) {
      this.loading = !ConnectionController.state.wcUri;
      this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", (val) => this.loading = !val));
    }
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { customWallets } = OptionsController.state;
    if (!(customWallets == null ? void 0 : customWallets.length)) {
      this.style.cssText = `display: none`;
      return null;
    }
    const wallets = this.filterOutDuplicateWallets(customWallets);
    return html2`<wui-flex flexDirection="column" gap="xs">
      ${wallets.map((wallet) => html2`
          <wui-list-wallet
            imageSrc=${ifDefined2(AssetUtil.getWalletImage(wallet))}
            name=${wallet.name ?? "Unknown"}
            @click=${() => this.onConnectWallet(wallet)}
            data-testid=${`wallet-selector-${wallet.id}`}
            tabIdx=${ifDefined2(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`;
  }
  filterOutDuplicateWallets(wallets) {
    const recent = StorageUtil.getRecentWallets();
    const connectorRDNSs = this.connectors.map((connector) => {
      var _a;
      return (_a = connector.info) == null ? void 0 : _a.rdns;
    }).filter(Boolean);
    const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
    const allRDNSs = connectorRDNSs.concat(recentRDNSs);
    if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
      const index = allRDNSs.indexOf("io.metamask.mobile");
      allRDNSs[index] = "io.metamask";
    }
    const filtered = wallets.filter((wallet) => !allRDNSs.includes(String(wallet == null ? void 0 : wallet.rdns)));
    return filtered;
  }
  onConnectWallet(wallet) {
    if (this.loading) {
      return;
    }
    RouterController.push("ConnectingWalletConnect", { wallet });
  }
};
__decorate48([
  property()
], W3mConnectCustomWidget.prototype, "tabIdx", void 0);
__decorate48([
  state()
], W3mConnectCustomWidget.prototype, "connectors", void 0);
__decorate48([
  state()
], W3mConnectCustomWidget.prototype, "loading", void 0);
W3mConnectCustomWidget = __decorate48([
  customElement("w3m-connect-custom-widget")
], W3mConnectCustomWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-external-widget/index.js
var __decorate49 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectExternalWidget = class W3mConnectExternalWidget2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tabIdx = void 0;
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const externalConnectors = this.connectors.filter((connector) => connector.type === "EXTERNAL");
    const filteredOutCoinbaseConnectors = externalConnectors.filter((connector) => connector.id !== ConstantsUtil.CONNECTOR_ID.COINBASE_SDK);
    if (!(filteredOutCoinbaseConnectors == null ? void 0 : filteredOutCoinbaseConnectors.length)) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html2`
      <wui-flex flexDirection="column" gap="xs">
        ${filteredOutCoinbaseConnectors.map((connector) => html2`
            <wui-list-wallet
              imageSrc=${ifDefined2(AssetUtil.getConnectorImage(connector))}
              .installed=${true}
              name=${connector.name ?? "Unknown"}
              data-testid=${`wallet-selector-external-${connector.id}`}
              @click=${() => this.onConnector(connector)}
              tabIdx=${ifDefined2(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
  }
  onConnector(connector) {
    RouterController.push("ConnectingExternal", { connector });
  }
};
__decorate49([
  property()
], W3mConnectExternalWidget.prototype, "tabIdx", void 0);
__decorate49([
  state()
], W3mConnectExternalWidget.prototype, "connectors", void 0);
W3mConnectExternalWidget = __decorate49([
  customElement("w3m-connect-external-widget")
], W3mConnectExternalWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-featured-widget/index.js
var __decorate50 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectFeaturedWidget = class W3mConnectFeaturedWidget2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.tabIdx = void 0;
    this.wallets = [];
  }
  render() {
    if (!this.wallets.length) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html2`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((wallet) => html2`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${wallet.id}`}
              imageSrc=${ifDefined2(AssetUtil.getWalletImage(wallet))}
              name=${wallet.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(wallet)}
              tabIdx=${ifDefined2(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
  }
  onConnectWallet(wallet) {
    ConnectorController.selectWalletConnector(wallet);
  }
};
__decorate50([
  property()
], W3mConnectFeaturedWidget.prototype, "tabIdx", void 0);
__decorate50([
  property()
], W3mConnectFeaturedWidget.prototype, "wallets", void 0);
W3mConnectFeaturedWidget = __decorate50([
  customElement("w3m-connect-featured-widget")
], W3mConnectFeaturedWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-injected-widget/index.js
var __decorate51 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectInjectedWidget = class W3mConnectInjectedWidget2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.tabIdx = void 0;
    this.connectors = [];
  }
  render() {
    var _a;
    const injectedConnectors = this.connectors;
    if (!(injectedConnectors == null ? void 0 : injectedConnectors.length) || injectedConnectors.length === 1 && ((_a = injectedConnectors[0]) == null ? void 0 : _a.name) === "Browser Wallet" && !CoreHelperUtil.isMobile()) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html2`
      <wui-flex flexDirection="column" gap="xs">
        ${injectedConnectors.map((connector) => {
      var _a2;
      const walletRDNS = (_a2 = connector.info) == null ? void 0 : _a2.rdns;
      if (!CoreHelperUtil.isMobile() && connector.name === "Browser Wallet") {
        return null;
      }
      if (!walletRDNS && !ConnectionController.checkInstalled()) {
        this.style.cssText = `display: none`;
        return null;
      }
      if (!ConnectorUtil.showConnector(connector)) {
        return null;
      }
      return html2`
            <wui-list-wallet
              imageSrc=${ifDefined2(AssetUtil.getConnectorImage(connector))}
              .installed=${true}
              name=${connector.name ?? "Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${connector.id}`}
              @click=${() => this.onConnector(connector)}
              tabIdx=${ifDefined2(this.tabIdx)}
            >
            </wui-list-wallet>
          `;
    })}
      </wui-flex>
    `;
  }
  onConnector(connector) {
    ConnectorController.setActiveConnector(connector);
    RouterController.push("ConnectingExternal", { connector });
  }
};
__decorate51([
  property()
], W3mConnectInjectedWidget.prototype, "tabIdx", void 0);
__decorate51([
  property()
], W3mConnectInjectedWidget.prototype, "connectors", void 0);
W3mConnectInjectedWidget = __decorate51([
  customElement("w3m-connect-injected-widget")
], W3mConnectInjectedWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-multi-chain-widget/index.js
var __decorate52 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectMultiChainWidget = class W3mConnectMultiChainWidget2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tabIdx = void 0;
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const multiChainConnectors = this.connectors.filter((connector) => connector.type === "MULTI_CHAIN" && connector.name !== "WalletConnect");
    if (!(multiChainConnectors == null ? void 0 : multiChainConnectors.length)) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html2`
      <wui-flex flexDirection="column" gap="xs">
        ${multiChainConnectors.map((connector) => html2`
            <wui-list-wallet
              imageSrc=${ifDefined2(AssetUtil.getConnectorImage(connector))}
              .installed=${true}
              name=${connector.name ?? "Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${connector.id}`}
              @click=${() => this.onConnector(connector)}
              tabIdx=${ifDefined2(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
  }
  onConnector(connector) {
    ConnectorController.setActiveConnector(connector);
    RouterController.push("ConnectingMultiChain");
  }
};
__decorate52([
  property()
], W3mConnectMultiChainWidget.prototype, "tabIdx", void 0);
__decorate52([
  state()
], W3mConnectMultiChainWidget.prototype, "connectors", void 0);
W3mConnectMultiChainWidget = __decorate52([
  customElement("w3m-connect-multi-chain-widget")
], W3mConnectMultiChainWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-recent-widget/index.js
var __decorate53 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectRecentWidget = class W3mConnectRecentWidget2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tabIdx = void 0;
    this.connectors = ConnectorController.state.connectors;
    this.loading = false;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
    if (CoreHelperUtil.isTelegram() && CoreHelperUtil.isIos()) {
      this.loading = !ConnectionController.state.wcUri;
      this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", (val) => this.loading = !val));
    }
  }
  render() {
    const recentWallets = StorageUtil.getRecentWallets();
    const filteredRecentWallets = recentWallets.filter((wallet) => !this.connectors.some((connector) => connector.id === wallet.id || connector.name === wallet.name));
    if (!filteredRecentWallets.length) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html2`
      <wui-flex flexDirection="column" gap="xs">
        ${filteredRecentWallets.map((wallet) => html2`
            <wui-list-wallet
              imageSrc=${ifDefined2(AssetUtil.getWalletImage(wallet))}
              name=${wallet.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(wallet)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${ifDefined2(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
  }
  onConnectWallet(wallet) {
    if (this.loading) {
      return;
    }
    ConnectorController.selectWalletConnector(wallet);
  }
};
__decorate53([
  property()
], W3mConnectRecentWidget.prototype, "tabIdx", void 0);
__decorate53([
  state()
], W3mConnectRecentWidget.prototype, "connectors", void 0);
__decorate53([
  state()
], W3mConnectRecentWidget.prototype, "loading", void 0);
W3mConnectRecentWidget = __decorate53([
  customElement("w3m-connect-recent-widget")
], W3mConnectRecentWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-recommended-widget/index.js
var __decorate54 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectRecommendedWidget = class W3mConnectRecommendedWidget2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tabIdx = void 0;
    this.wallets = [];
    this.loading = false;
    if (CoreHelperUtil.isTelegram() && CoreHelperUtil.isIos()) {
      this.loading = !ConnectionController.state.wcUri;
      this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", (val) => this.loading = !val));
    }
  }
  render() {
    const { connectors } = ConnectorController.state;
    const { customWallets, featuredWalletIds } = OptionsController.state;
    const recentWallets = StorageUtil.getRecentWallets();
    const wcConnector = connectors.find((c) => c.id === "walletConnect");
    const injectedConnectors = connectors.filter((c) => c.type === "INJECTED" || c.type === "ANNOUNCED" || c.type === "MULTI_CHAIN");
    const injectedWallets = injectedConnectors.filter((i) => i.name !== "Browser Wallet");
    if (!wcConnector) {
      return null;
    }
    if (featuredWalletIds || customWallets || !this.wallets.length) {
      this.style.cssText = `display: none`;
      return null;
    }
    const overrideLength = injectedWallets.length + recentWallets.length;
    const maxRecommended = Math.max(0, 2 - overrideLength);
    const wallets = WalletUtil.filterOutDuplicateWallets(this.wallets).slice(0, maxRecommended);
    if (!wallets.length) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html2`
      <wui-flex flexDirection="column" gap="xs">
        ${wallets.map((wallet) => html2`
            <wui-list-wallet
              imageSrc=${ifDefined2(AssetUtil.getWalletImage(wallet))}
              name=${(wallet == null ? void 0 : wallet.name) ?? "Unknown"}
              @click=${() => this.onConnectWallet(wallet)}
              tabIdx=${ifDefined2(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
  }
  onConnectWallet(wallet) {
    if (this.loading) {
      return;
    }
    const connector = ConnectorController.getConnector(wallet.id, wallet.rdns);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet });
    }
  }
};
__decorate54([
  property()
], W3mConnectRecommendedWidget.prototype, "tabIdx", void 0);
__decorate54([
  property()
], W3mConnectRecommendedWidget.prototype, "wallets", void 0);
__decorate54([
  state()
], W3mConnectRecommendedWidget.prototype, "loading", void 0);
W3mConnectRecommendedWidget = __decorate54([
  customElement("w3m-connect-recommended-widget")
], W3mConnectRecommendedWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-walletconnect-widget/index.js
var __decorate55 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectWalletConnectWidget = class W3mConnectWalletConnectWidget2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tabIdx = void 0;
    this.connectors = ConnectorController.state.connectors;
    this.connectorImages = AssetController.state.connectorImages;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val), AssetController.subscribeKey("connectorImages", (val) => this.connectorImages = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (CoreHelperUtil.isMobile()) {
      this.style.cssText = `display: none`;
      return null;
    }
    const connector = this.connectors.find((c) => c.id === "walletConnect");
    if (!connector) {
      this.style.cssText = `display: none`;
      return null;
    }
    const connectorImage = connector.imageUrl || this.connectorImages[(connector == null ? void 0 : connector.imageId) ?? ""];
    return html2`
      <wui-list-wallet
        imageSrc=${ifDefined2(connectorImage)}
        name=${connector.name ?? "Unknown"}
        @click=${() => this.onConnector(connector)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${ifDefined2(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `;
  }
  onConnector(connector) {
    ConnectorController.setActiveConnector(connector);
    RouterController.push("ConnectingWalletConnect");
  }
};
__decorate55([
  property()
], W3mConnectWalletConnectWidget.prototype, "tabIdx", void 0);
__decorate55([
  state()
], W3mConnectWalletConnectWidget.prototype, "connectors", void 0);
__decorate55([
  state()
], W3mConnectWalletConnectWidget.prototype, "connectorImages", void 0);
W3mConnectWalletConnectWidget = __decorate55([
  customElement("w3m-connect-walletconnect-widget")
], W3mConnectWalletConnectWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/styles.js
var styles_default40 = css2`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/index.js
var __decorate56 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectorList = class W3mConnectorList2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tabIdx = void 0;
    this.connectors = ConnectorController.state.connectors;
    this.recommended = ApiController.state.recommended;
    this.featured = ApiController.state.featured;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val), ApiController.subscribeKey("recommended", (val) => this.recommended = val), ApiController.subscribeKey("featured", (val) => this.featured = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html2`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `;
  }
  connectorListTemplate() {
    const { custom, recent, announced, injected, multiChain, recommended, featured, external } = ConnectorUtil.getConnectorsByType(this.connectors, this.recommended, this.featured);
    const connectorTypeOrder = ConnectorUtil.getConnectorTypeOrder({
      custom,
      recent,
      announced,
      injected,
      multiChain,
      recommended,
      featured,
      external
    });
    return connectorTypeOrder.map((type) => {
      switch (type) {
        case "injected":
          return html2`
            ${multiChain.length ? html2`<w3m-connect-multi-chain-widget
                  tabIdx=${ifDefined2(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>` : null}
            ${announced.length ? html2`<w3m-connect-announced-widget
                  tabIdx=${ifDefined2(this.tabIdx)}
                ></w3m-connect-announced-widget>` : null}
            ${injected.length ? html2`<w3m-connect-injected-widget
                  .connectors=${injected}
                  tabIdx=${ifDefined2(this.tabIdx)}
                ></w3m-connect-injected-widget>` : null}
          `;
        case "walletConnect":
          return html2`<w3m-connect-walletconnect-widget
            tabIdx=${ifDefined2(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;
        case "recent":
          return html2`<w3m-connect-recent-widget
            tabIdx=${ifDefined2(this.tabIdx)}
          ></w3m-connect-recent-widget>`;
        case "featured":
          return html2`<w3m-connect-featured-widget
            .wallets=${featured}
            tabIdx=${ifDefined2(this.tabIdx)}
          ></w3m-connect-featured-widget>`;
        case "custom":
          return html2`<w3m-connect-custom-widget
            tabIdx=${ifDefined2(this.tabIdx)}
          ></w3m-connect-custom-widget>`;
        case "external":
          return html2`<w3m-connect-external-widget
            tabIdx=${ifDefined2(this.tabIdx)}
          ></w3m-connect-external-widget>`;
        case "recommended":
          return html2`<w3m-connect-recommended-widget
            .wallets=${recommended}
            tabIdx=${ifDefined2(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;
        default:
          console.warn(`Unknown connector type: ${type}`);
          return null;
      }
    });
  }
};
W3mConnectorList.styles = styles_default40;
__decorate56([
  property()
], W3mConnectorList.prototype, "tabIdx", void 0);
__decorate56([
  state()
], W3mConnectorList.prototype, "connectors", void 0);
__decorate56([
  state()
], W3mConnectorList.prototype, "recommended", void 0);
__decorate56([
  state()
], W3mConnectorList.prototype, "featured", void 0);
W3mConnectorList = __decorate56([
  customElement("w3m-connector-list")
], W3mConnectorList);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-wallet-login-list/index.js
var __decorate57 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletLoginList = class W3mWalletLoginList2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.tabIdx = void 0;
  }
  render() {
    return html2`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${ifDefined2(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${ifDefined2(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `;
  }
};
__decorate57([
  property()
], W3mWalletLoginList.prototype, "tabIdx", void 0);
W3mWalletLoginList = __decorate57([
  customElement("w3m-wallet-login-list")
], W3mWalletLoginList);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-view/styles.js
var styles_default41 = css2`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-view/index.js
var __decorate58 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SCROLL_THRESHOLD = 470;
var W3mConnectView = class W3mConnectView2 extends LitElement2 {
  constructor() {
    var _a, _b;
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.authConnector = this.connectors.find((c) => c.type === "AUTH");
    this.features = OptionsController.state.features;
    this.enableWallets = OptionsController.state.enableWallets;
    this.noAdapters = ChainController.state.noAdapters;
    this.walletGuide = "get-started";
    this.checked = OptionsStateController.state.isLegalCheckboxChecked;
    this.isEmailEnabled = ((_a = this.features) == null ? void 0 : _a.email) && !ChainController.state.noAdapters;
    this.isSocialEnabled = ((_b = this.features) == null ? void 0 : _b.socials) && this.features.socials.length > 0 && !ChainController.state.noAdapters;
    this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors);
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => {
      this.connectors = val;
      this.authConnector = this.connectors.find((c) => c.type === "AUTH");
      this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors);
    }), OptionsController.subscribeKey("features", (val) => this.setEmailAndSocialEnableCheck(val, this.noAdapters)), OptionsController.subscribeKey("enableWallets", (val) => this.enableWallets = val), ChainController.subscribeKey("noAdapters", (val) => this.setEmailAndSocialEnableCheck(this.features, val)), OptionsStateController.subscribeKey("isLegalCheckboxChecked", (val) => this.checked = val));
  }
  disconnectedCallback() {
    var _a, _b;
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    (_a = this.resizeObserver) == null ? void 0 : _a.disconnect();
    const connectEl = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector(".connect");
    connectEl == null ? void 0 : connectEl.removeEventListener("scroll", this.handleConnectListScroll.bind(this));
  }
  firstUpdated() {
    var _a, _b;
    const connectEl = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".connect");
    if (connectEl) {
      requestAnimationFrame(this.handleConnectListScroll.bind(this));
      connectEl == null ? void 0 : connectEl.addEventListener("scroll", this.handleConnectListScroll.bind(this));
      this.resizeObserver = new ResizeObserver(() => {
        this.handleConnectListScroll();
      });
      (_b = this.resizeObserver) == null ? void 0 : _b.observe(connectEl);
      this.handleConnectListScroll();
    }
  }
  render() {
    var _a;
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    const isLegalCheckbox = (_a = OptionsController.state.features) == null ? void 0 : _a.legalCheckbox;
    const legalUrl = termsConditionsUrl || privacyPolicyUrl;
    const isShowLegalCheckbox = Boolean(legalUrl) && Boolean(isLegalCheckbox) && this.walletGuide === "get-started";
    const isDisabled = isShowLegalCheckbox && !this.checked;
    const classes = {
      connect: true,
      disabled: isDisabled
    };
    const isEnableWalletGuide = OptionsController.state.enableWalletGuide;
    const isEnableWallets = this.enableWallets;
    const socialOrEmailLoginEnabled = this.isSocialEnabled || this.authConnector;
    const tabIndex = isDisabled ? -1 : void 0;
    return html2`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${classMap(classes)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${socialOrEmailLoginEnabled && isEnableWallets && isEnableWalletGuide && this.walletGuide === "get-started" ? ["3xs", "s", "0", "s"] : ["3xs", "s", "s", "s"]}
          >
            ${this.renderConnectMethod(tabIndex)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(isDisabled)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `;
  }
  setEmailAndSocialEnableCheck(features, noAdapters) {
    this.isEmailEnabled = (features == null ? void 0 : features.email) && !noAdapters;
    this.isSocialEnabled = (features == null ? void 0 : features.socials) && features.socials.length > 0 && !noAdapters;
    this.features = features;
    this.noAdapters = noAdapters;
  }
  checkIfAuthEnabled(connectors) {
    const namespacesWithAuthConnector = connectors.filter((c) => c.type === ConstantsUtil3.CONNECTOR_TYPE_AUTH).map((i) => i.chain);
    const authSupportedNamespaces = ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS;
    return authSupportedNamespaces.some((ns) => namespacesWithAuthConnector.includes(ns));
  }
  renderConnectMethod(tabIndex) {
    const connectMethodsOrder = WalletUtil.getConnectOrderMethod(this.features, this.connectors);
    return html2`${connectMethodsOrder.map((method, index) => {
      switch (method) {
        case "email":
          return html2`${this.emailTemplate(tabIndex)} ${this.separatorTemplate(index, "email")}`;
        case "social":
          return html2`${this.socialListTemplate(tabIndex)}
          ${this.separatorTemplate(index, "social")}`;
        case "wallet":
          return html2`${this.walletListTemplate(tabIndex)}
          ${this.separatorTemplate(index, "wallet")}`;
        default:
          return null;
      }
    })}`;
  }
  checkMethodEnabled(name) {
    switch (name) {
      case "wallet":
        return this.enableWallets;
      case "social":
        return this.isSocialEnabled && this.isAuthEnabled;
      case "email":
        return this.isEmailEnabled && this.isAuthEnabled;
      default:
        return null;
    }
  }
  checkIsThereNextMethod(currentIndex) {
    const connectMethodsOrder = WalletUtil.getConnectOrderMethod(this.features, this.connectors);
    const nextMethod = connectMethodsOrder[currentIndex + 1];
    if (!nextMethod) {
      return void 0;
    }
    const isNextMethodEnabled = this.checkMethodEnabled(nextMethod);
    if (isNextMethodEnabled) {
      return nextMethod;
    }
    return this.checkIsThereNextMethod(currentIndex + 1);
  }
  separatorTemplate(index, type) {
    const nextEnabledMethod = this.checkIsThereNextMethod(index);
    const isExplore = this.walletGuide === "explore";
    switch (type) {
      case "wallet": {
        const isWalletEnable = this.enableWallets;
        return isWalletEnable && nextEnabledMethod && !isExplore ? html2`<wui-separator data-testid="wui-separator" text="or"></wui-separator>` : null;
      }
      case "email": {
        const isNextMethodSocial = nextEnabledMethod === "social";
        return this.isAuthEnabled && this.isEmailEnabled && !isNextMethodSocial && nextEnabledMethod ? html2`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>` : null;
      }
      case "social": {
        const isNextMethodEmail = nextEnabledMethod === "email";
        return this.isAuthEnabled && this.isSocialEnabled && !isNextMethodEmail && nextEnabledMethod ? html2`<wui-separator data-testid="wui-separator" text="or"></wui-separator>` : null;
      }
      default:
        return null;
    }
  }
  emailTemplate(tabIndex) {
    if (!this.isEmailEnabled || !this.isAuthEnabled) {
      return null;
    }
    return html2`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${ifDefined2(tabIndex)}
    ></w3m-email-login-widget>`;
  }
  socialListTemplate(tabIndex) {
    if (!this.isSocialEnabled || !this.isAuthEnabled) {
      return null;
    }
    return html2`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${ifDefined2(tabIndex)}
    ></w3m-social-login-widget>`;
  }
  walletListTemplate(tabIndex) {
    var _a, _b;
    const isEnableWallets = this.enableWallets;
    const isCollapseWalletsOldProp = ((_a = this.features) == null ? void 0 : _a.emailShowWallets) === false;
    const isCollapseWallets = (_b = this.features) == null ? void 0 : _b.collapseWallets;
    const shouldCollapseWallets = isCollapseWalletsOldProp || isCollapseWallets;
    if (!isEnableWallets) {
      return null;
    }
    if ((CoreHelperUtil.isTelegram() || CoreHelperUtil.isSafari()) && CoreHelperUtil.isIos()) {
      ConnectionController.connectWalletConnect().catch((_e) => ({}));
    }
    if (this.walletGuide === "explore") {
      return null;
    }
    const hasOtherMethods = this.isAuthEnabled && (this.isEmailEnabled || this.isSocialEnabled);
    if (hasOtherMethods && shouldCollapseWallets) {
      return html2`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${ifDefined2(tabIndex)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`;
    }
    return html2`<w3m-wallet-login-list tabIdx=${ifDefined2(tabIndex)}></w3m-wallet-login-list>`;
  }
  guideTemplate(disabled = false) {
    const isEnableWalletGuide = OptionsController.state.enableWalletGuide;
    if (!isEnableWalletGuide) {
      return null;
    }
    const classes = {
      guide: true,
      disabled
    };
    const tabIndex = disabled ? -1 : void 0;
    if (!this.authConnector && !this.isSocialEnabled) {
      return null;
    }
    return html2`
      ${this.walletGuide === "explore" && !ChainController.state.noAdapters ? html2`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>` : null}
      <wui-flex flexDirection="column" .padding=${["l", "0", "0", "0"]} class=${classMap(classes)}>
        <w3m-wallet-guide
          tabIdx=${ifDefined2(tabIndex)}
          walletGuide=${this.walletGuide}
        ></w3m-wallet-guide>
      </wui-flex>
    `;
  }
  legalCheckboxTemplate() {
    if (this.walletGuide === "explore") {
      return null;
    }
    return html2`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`;
  }
  handleConnectListScroll() {
    var _a;
    const connectEl = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".connect");
    if (!connectEl) {
      return;
    }
    const shouldApplyMask = connectEl.scrollHeight > SCROLL_THRESHOLD;
    if (shouldApplyMask) {
      connectEl.style.setProperty("--connect-mask-image", `linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 40px,
          black calc(100% - 40px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`);
      connectEl.style.setProperty("--connect-scroll--top-opacity", MathUtil.interpolate([0, 50], [0, 1], connectEl.scrollTop).toString());
      connectEl.style.setProperty("--connect-scroll--bottom-opacity", MathUtil.interpolate([0, 50], [0, 1], connectEl.scrollHeight - connectEl.scrollTop - connectEl.offsetHeight).toString());
    } else {
      connectEl.style.setProperty("--connect-mask-image", "none");
      connectEl.style.setProperty("--connect-scroll--top-opacity", "0");
      connectEl.style.setProperty("--connect-scroll--bottom-opacity", "0");
    }
  }
  onContinueWalletClick() {
    RouterController.push("ConnectWallets");
  }
};
W3mConnectView.styles = styles_default41;
__decorate58([
  state()
], W3mConnectView.prototype, "connectors", void 0);
__decorate58([
  state()
], W3mConnectView.prototype, "authConnector", void 0);
__decorate58([
  state()
], W3mConnectView.prototype, "features", void 0);
__decorate58([
  state()
], W3mConnectView.prototype, "enableWallets", void 0);
__decorate58([
  state()
], W3mConnectView.prototype, "noAdapters", void 0);
__decorate58([
  property()
], W3mConnectView.prototype, "walletGuide", void 0);
__decorate58([
  state()
], W3mConnectView.prototype, "checked", void 0);
__decorate58([
  state()
], W3mConnectView.prototype, "isEmailEnabled", void 0);
__decorate58([
  state()
], W3mConnectView.prototype, "isSocialEnabled", void 0);
__decorate58([
  state()
], W3mConnectView.prototype, "isAuthEnabled", void 0);
W3mConnectView = __decorate58([
  customElement("w3m-connect-view")
], W3mConnectView);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-cta-button/styles.js
var styles_default42 = css`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-cta-button/index.js
var __decorate59 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiCtaButton = class WuiCtaButton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.label = "";
    this.buttonLabel = "";
  }
  render() {
    return html`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs", "2l", "1xs", "2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `;
  }
};
WuiCtaButton.styles = [resetStyles, elementStyles, styles_default42];
__decorate59([
  property2({ type: Boolean })
], WuiCtaButton.prototype, "disabled", void 0);
__decorate59([
  property2()
], WuiCtaButton.prototype, "label", void 0);
__decorate59([
  property2()
], WuiCtaButton.prototype, "buttonLabel", void 0);
WuiCtaButton = __decorate59([
  customElement("wui-cta-button")
], WuiCtaButton);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/styles.js
var styles_default43 = css2`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/index.js
var __decorate60 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mMobileDownloadLinks = class W3mMobileDownloadLinks2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.wallet = void 0;
  }
  render() {
    if (!this.wallet) {
      this.style.display = "none";
      return null;
    }
    const { name, app_store, play_store, chrome_store, homepage } = this.wallet;
    const isMobile = CoreHelperUtil.isMobile();
    const isIos = CoreHelperUtil.isIos();
    const isAndroid = CoreHelperUtil.isAndroid();
    const isMultiple = [app_store, play_store, homepage, chrome_store].filter(Boolean).length > 1;
    const shortName = UiHelperUtil.getTruncateString({
      string: name,
      charsStart: 12,
      charsEnd: 0,
      truncate: "end"
    });
    if (isMultiple && !isMobile) {
      return html2`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${() => RouterController.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      `;
    }
    if (!isMultiple && homepage) {
      return html2`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `;
    }
    if (app_store && isIos) {
      return html2`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `;
    }
    if (play_store && isAndroid) {
      return html2`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `;
    }
    this.style.display = "none";
    return null;
  }
  onAppStore() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.app_store) {
      CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
    }
  }
  onPlayStore() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.play_store) {
      CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
    }
  }
  onHomePage() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.homepage) {
      CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
    }
  }
};
W3mMobileDownloadLinks.styles = [styles_default43];
__decorate60([
  property({ type: Object })
], W3mMobileDownloadLinks.prototype, "wallet", void 0);
W3mMobileDownloadLinks = __decorate60([
  customElement("w3m-mobile-download-links")
], W3mMobileDownloadLinks);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/styles.js
var styles_default44 = css2`
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

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
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
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js
var __decorate61 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWidget = class extends LitElement2 {
  constructor() {
    var _a, _b, _c, _d, _e;
    super();
    this.wallet = (_a = RouterController.state.data) == null ? void 0 : _a.wallet;
    this.connector = (_b = RouterController.state.data) == null ? void 0 : _b.connector;
    this.timeout = void 0;
    this.secondaryBtnIcon = "refresh";
    this.onConnect = void 0;
    this.onRender = void 0;
    this.onAutoConnect = void 0;
    this.isWalletConnect = true;
    this.unsubscribe = [];
    this.imageSrc = AssetUtil.getWalletImage(this.wallet) ?? AssetUtil.getConnectorImage(this.connector);
    this.name = ((_c = this.wallet) == null ? void 0 : _c.name) ?? ((_d = this.connector) == null ? void 0 : _d.name) ?? "Wallet";
    this.isRetrying = false;
    this.uri = ConnectionController.state.wcUri;
    this.error = ConnectionController.state.wcError;
    this.ready = false;
    this.showRetry = false;
    this.secondaryBtnLabel = "Try again";
    this.secondaryLabel = "Accept connection request in the wallet";
    this.buffering = false;
    this.isLoading = false;
    this.isMobile = false;
    this.onRetry = void 0;
    this.unsubscribe.push(...[
      ConnectionController.subscribeKey("wcUri", (val) => {
        var _a2;
        this.uri = val;
        if (this.isRetrying && this.onRetry) {
          this.isRetrying = false;
          (_a2 = this.onConnect) == null ? void 0 : _a2.call(this);
        }
      }),
      ConnectionController.subscribeKey("wcError", (val) => this.error = val),
      ConnectionController.subscribeKey("buffering", (val) => this.buffering = val)
    ]);
    if ((CoreHelperUtil.isTelegram() || CoreHelperUtil.isSafari()) && CoreHelperUtil.isIos() && ConnectionController.state.wcUri) {
      (_e = this.onConnect) == null ? void 0 : _e.call(this);
    }
  }
  firstUpdated() {
    var _a;
    (_a = this.onAutoConnect) == null ? void 0 : _a.call(this);
    this.showRetry = !this.onAutoConnect;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    clearTimeout(this.timeout);
  }
  render() {
    var _a;
    (_a = this.onRender) == null ? void 0 : _a.call(this);
    this.onShowRetry();
    const subLabel = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel;
    let label = `Continue in ${this.name}`;
    if (this.buffering) {
      label = "Connecting...";
    }
    if (this.error) {
      label = "Connection declined";
    }
    return html2`
      <wui-flex
        data-error=${ifDefined2(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ifDefined2(this.imageSrc)}></wui-wallet-image>

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

        ${this.secondaryBtnLabel ? html2`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying || !this.error && this.buffering || this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            ` : null}
      </wui-flex>

      ${this.isWalletConnect ? html2`
            <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onShowRetry() {
    var _a;
    if (this.error && !this.showRetry) {
      this.showRetry = true;
      const retryButton = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-button");
      retryButton == null ? void 0 : retryButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  onTryAgain() {
    var _a, _b;
    if (!this.buffering) {
      ConnectionController.setWcError(false);
      if (this.onRetry) {
        this.isRetrying = true;
        (_a = this.onRetry) == null ? void 0 : _a.call(this);
      } else {
        (_b = this.onConnect) == null ? void 0 : _b.call(this);
      }
    }
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html2`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    try {
      if (this.uri) {
        CoreHelperUtil.copyToClopboard(this.uri);
        SnackController.showSuccess("Link copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mConnectingWidget.styles = styles_default44;
__decorate61([
  state()
], W3mConnectingWidget.prototype, "isRetrying", void 0);
__decorate61([
  state()
], W3mConnectingWidget.prototype, "uri", void 0);
__decorate61([
  state()
], W3mConnectingWidget.prototype, "error", void 0);
__decorate61([
  state()
], W3mConnectingWidget.prototype, "ready", void 0);
__decorate61([
  state()
], W3mConnectingWidget.prototype, "showRetry", void 0);
__decorate61([
  state()
], W3mConnectingWidget.prototype, "secondaryBtnLabel", void 0);
__decorate61([
  state()
], W3mConnectingWidget.prototype, "secondaryLabel", void 0);
__decorate61([
  state()
], W3mConnectingWidget.prototype, "buffering", void 0);
__decorate61([
  state()
], W3mConnectingWidget.prototype, "isLoading", void 0);
__decorate61([
  property({ type: Boolean })
], W3mConnectingWidget.prototype, "isMobile", void 0);
__decorate61([
  property()
], W3mConnectingWidget.prototype, "onRetry", void 0);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-external-view/index.js
var __decorate62 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingExternalView = class W3mConnectingExternalView2 extends W3mConnectingWidget {
  constructor() {
    super();
    this.externalViewUnsubscribe = [];
    if (!this.connector) {
      throw new Error("w3m-connecting-view: No connector provided");
    }
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: {
        name: this.connector.name ?? "Unknown",
        platform: "browser"
      }
    });
    this.onConnect = this.onConnectProxy.bind(this);
    this.onAutoConnect = this.onConnectProxy.bind(this);
    this.isWalletConnect = false;
    this.externalViewUnsubscribe.push(ChainController.subscribeKey("activeCaipAddress", (val) => {
      if (val) {
        ModalController.close();
      }
    }));
  }
  disconnectedCallback() {
    this.externalViewUnsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  async onConnectProxy() {
    try {
      this.error = false;
      if (this.connector) {
        if (this.connector.id !== ConstantsUtil.CONNECTOR_ID.COINBASE_SDK || !this.error) {
          await ConnectionController.connectExternal(this.connector, this.connector.chain);
          EventsController.sendEvent({
            type: "track",
            event: "CONNECT_SUCCESS",
            properties: { method: "browser", name: this.connector.name || "Unknown" }
          });
        }
      }
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      this.error = true;
    }
  }
};
W3mConnectingExternalView = __decorate62([
  customElement("w3m-connecting-external-view")
], W3mConnectingExternalView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-multi-chain-view/styles.js
var styles_default45 = css2`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-multi-chain-view/index.js
var __decorate63 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingMultiChainView = class W3mConnectingMultiChainView2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.activeConnector = ConnectorController.state.activeConnector;
    this.unsubscribe.push(...[ConnectorController.subscribeKey("activeConnector", (val) => this.activeConnector = val)]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a;
    return html2`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${ifDefined2(AssetUtil.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0", "s", "0", "s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${(_a = this.activeConnector) == null ? void 0 : _a.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs", "0", "xs", "0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `;
  }
  networksTemplate() {
    var _a, _b;
    return (_b = (_a = this.activeConnector) == null ? void 0 : _a.connectors) == null ? void 0 : _b.map((connector) => connector.name ? html2`
            <wui-list-wallet
              imageSrc=${ifDefined2(AssetUtil.getChainImage(connector.chain))}
              name=${ConstantsUtil.CHAIN_NAME_MAP[connector.chain]}
              @click=${() => this.onConnector(connector)}
              data-testid="wui-list-chain-${connector.chain}"
            ></wui-list-wallet>
          ` : null);
  }
  onConnector(provider) {
    var _a, _b;
    const connector = (_b = (_a = this.activeConnector) == null ? void 0 : _a.connectors) == null ? void 0 : _b.find((p) => p.chain === provider.chain);
    if (!connector) {
      SnackController.showError("Failed to find connector");
      return;
    }
    if (connector.id === "walletConnect") {
      if (CoreHelperUtil.isMobile()) {
        RouterController.push("AllWallets");
      } else {
        RouterController.push("ConnectingWalletConnect");
      }
    } else {
      RouterController.push("ConnectingExternal", {
        connector
      });
    }
  }
};
W3mConnectingMultiChainView.styles = styles_default45;
__decorate63([
  state()
], W3mConnectingMultiChainView.prototype, "activeConnector", void 0);
W3mConnectingMultiChainView = __decorate63([
  customElement("w3m-connecting-multi-chain-view")
], W3mConnectingMultiChainView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-header/index.js
var __decorate64 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingHeader = class W3mConnectingHeader2 extends LitElement2 {
  constructor() {
    super();
    this.platformTabs = [];
    this.unsubscribe = [];
    this.platforms = [];
    this.onSelectPlatfrom = void 0;
    this.buffering = false;
    this.unsubscribe.push(ConnectionController.subscribeKey("buffering", (val) => this.buffering = val));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const tabs = this.generateTabs();
    return html2`
      <wui-flex justifyContent="center" .padding=${["0", "0", "l", "0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${tabs}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `;
  }
  generateTabs() {
    const tabs = this.platforms.map((platform) => {
      if (platform === "browser") {
        return { label: "Browser", icon: "extension", platform: "browser" };
      } else if (platform === "mobile") {
        return { label: "Mobile", icon: "mobile", platform: "mobile" };
      } else if (platform === "qrcode") {
        return { label: "Mobile", icon: "mobile", platform: "qrcode" };
      } else if (platform === "web") {
        return { label: "Webapp", icon: "browser", platform: "web" };
      } else if (platform === "desktop") {
        return { label: "Desktop", icon: "desktop", platform: "desktop" };
      }
      return { label: "Browser", icon: "extension", platform: "unsupported" };
    });
    this.platformTabs = tabs.map(({ platform }) => platform);
    return tabs;
  }
  onTabChange(index) {
    var _a;
    const tab = this.platformTabs[index];
    if (tab) {
      (_a = this.onSelectPlatfrom) == null ? void 0 : _a.call(this, tab);
    }
  }
};
__decorate64([
  property({ type: Array })
], W3mConnectingHeader.prototype, "platforms", void 0);
__decorate64([
  property()
], W3mConnectingHeader.prototype, "onSelectPlatfrom", void 0);
__decorate64([
  state()
], W3mConnectingHeader.prototype, "buffering", void 0);
W3mConnectingHeader = __decorate64([
  customElement("w3m-connecting-header")
], W3mConnectingHeader);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-browser/index.js
var __decorate65 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcBrowser = class W3mConnectingWcBrowser2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-browser: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onAutoConnect = this.onConnectProxy.bind(this);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "browser" }
    });
  }
  async onConnectProxy() {
    var _a;
    try {
      this.error = false;
      const { connectors } = ConnectorController.state;
      const connector = connectors.find((c) => {
        var _a2, _b, _c;
        return c.type === "ANNOUNCED" && ((_a2 = c.info) == null ? void 0 : _a2.rdns) === ((_b = this.wallet) == null ? void 0 : _b.rdns) || c.type === "INJECTED" || c.name === ((_c = this.wallet) == null ? void 0 : _c.name);
      });
      if (connector) {
        await ConnectionController.connectExternal(connector, connector.chain);
      } else {
        throw new Error("w3m-connecting-wc-browser: No connector found");
      }
      ModalController.close();
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: { method: "browser", name: ((_a = this.wallet) == null ? void 0 : _a.name) || "Unknown" }
      });
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      this.error = true;
    }
  }
};
W3mConnectingWcBrowser = __decorate65([
  customElement("w3m-connecting-wc-browser")
], W3mConnectingWcBrowser);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-desktop/index.js
var __decorate66 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcDesktop = class W3mConnectingWcDesktop2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-desktop: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onRender = this.onRenderProxy.bind(this);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "desktop" }
    });
  }
  onRenderProxy() {
    var _a;
    if (!this.ready && this.uri) {
      this.ready = true;
      (_a = this.onConnect) == null ? void 0 : _a.call(this);
    }
  }
  onConnectProxy() {
    var _a;
    if (((_a = this.wallet) == null ? void 0 : _a.desktop_link) && this.uri) {
      try {
        this.error = false;
        const { desktop_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatNativeUrl(desktop_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_blank");
      } catch {
        this.error = true;
      }
    }
  }
};
W3mConnectingWcDesktop = __decorate66([
  customElement("w3m-connecting-wc-desktop")
], W3mConnectingWcDesktop);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-mobile/index.js
var __decorate67 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcMobile = class W3mConnectingWcMobile2 extends W3mConnectingWidget {
  constructor() {
    super();
    this.btnLabelTimeout = void 0;
    this.labelTimeout = void 0;
    this.onRender = () => {
      var _a;
      if (!this.ready && this.uri) {
        this.ready = true;
        (_a = this.onConnect) == null ? void 0 : _a.call(this);
      }
    };
    this.onConnect = () => {
      var _a;
      if (((_a = this.wallet) == null ? void 0 : _a.mobile_link) && this.uri) {
        try {
          this.error = false;
          const { mobile_link, name } = this.wallet;
          const { redirect, href } = CoreHelperUtil.formatNativeUrl(mobile_link, this.uri);
          ConnectionController.setWcLinking({ name, href });
          ConnectionController.setRecentWallet(this.wallet);
          const target = CoreHelperUtil.isIframe() ? "_top" : "_self";
          CoreHelperUtil.openHref(redirect, target);
          clearTimeout(this.labelTimeout);
          this.secondaryLabel = ConstantsUtil2.CONNECT_LABELS.MOBILE;
        } catch (e) {
          EventsController.sendEvent({
            type: "track",
            event: "CONNECT_PROXY_ERROR",
            properties: {
              message: e instanceof Error ? e.message : "Error parsing the deeplink",
              uri: this.uri,
              mobile_link: this.wallet.mobile_link,
              name: this.wallet.name
            }
          });
          this.error = true;
        }
      }
    };
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-mobile: No wallet provided");
    }
    this.secondaryBtnLabel = void 0;
    this.secondaryLabel = ConstantsUtil2.CONNECT_LABELS.MOBILE;
    document.addEventListener("visibilitychange", this.onBuffering.bind(this));
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "mobile" }
    });
    this.btnLabelTimeout = setTimeout(() => {
      this.secondaryBtnLabel = "Try again";
      this.secondaryLabel = ConstantsUtil2.CONNECT_LABELS.MOBILE;
    }, ConstantsUtil2.FIVE_SEC_MS);
    this.labelTimeout = setTimeout(() => {
      this.secondaryLabel = `Hold tight... it's taking longer than expected`;
    }, ConstantsUtil2.THREE_SEC_MS);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("visibilitychange", this.onBuffering.bind(this));
    clearTimeout(this.btnLabelTimeout);
    clearTimeout(this.labelTimeout);
  }
  onBuffering() {
    const isIos = CoreHelperUtil.isIos();
    if ((document == null ? void 0 : document.visibilityState) === "visible" && !this.error && isIos) {
      ConnectionController.setBuffering(true);
      setTimeout(() => {
        ConnectionController.setBuffering(false);
      }, 5e3);
    }
  }
  onTryAgain() {
    if (!this.buffering) {
      ConnectionController.setWcError(false);
      this.onConnect();
    }
  }
};
W3mConnectingWcMobile = __decorate67([
  customElement("w3m-connecting-wc-mobile")
], W3mConnectingWcMobile);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/styles.js
var styles_default46 = css2`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/index.js
var __decorate68 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcQrcode = class W3mConnectingWcQrcode2 extends W3mConnectingWidget {
  constructor() {
    var _a;
    super();
    this.forceUpdate = () => {
      this.requestUpdate();
    };
    window.addEventListener("resize", this.forceUpdate);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: ((_a = this.wallet) == null ? void 0 : _a.name) ?? "WalletConnect", platform: "qrcode" }
    });
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    (_a = this.unsubscribe) == null ? void 0 : _a.forEach((unsub) => unsub());
    window.removeEventListener("resize", this.forceUpdate);
  }
  render() {
    this.onRenderProxy();
    return html2`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onRenderProxy() {
    if (!this.ready && this.uri) {
      this.timeout = setTimeout(() => {
        this.ready = true;
      }, 200);
    }
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready) {
      return null;
    }
    const size = this.getBoundingClientRect().width - 40;
    const alt = this.wallet ? this.wallet.name : void 0;
    ConnectionController.setWcLinking(void 0);
    ConnectionController.setRecentWallet(this.wallet);
    return html2` <wui-qr-code
      size=${size}
      theme=${ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${ifDefined2(AssetUtil.getWalletImage(this.wallet))}
      color=${ifDefined2(ThemeController.state.themeVariables["--w3m-qr-color"])}
      alt=${ifDefined2(alt)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
  }
  copyTemplate() {
    const inactive = !this.uri || !this.ready;
    return html2`<wui-link
      .disabled=${inactive}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
  }
};
W3mConnectingWcQrcode.styles = styles_default46;
W3mConnectingWcQrcode = __decorate68([
  customElement("w3m-connecting-wc-qrcode")
], W3mConnectingWcQrcode);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-unsupported/index.js
var __decorate69 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcUnsupported = class W3mConnectingWcUnsupported2 extends LitElement2 {
  constructor() {
    var _a;
    super();
    this.wallet = (_a = RouterController.state.data) == null ? void 0 : _a.wallet;
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
    }
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "browser" }
    });
  }
  render() {
    return html2`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ifDefined2(AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
};
W3mConnectingWcUnsupported = __decorate69([
  customElement("w3m-connecting-wc-unsupported")
], W3mConnectingWcUnsupported);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-web/index.js
var __decorate70 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcWeb = class W3mConnectingWcWeb2 extends W3mConnectingWidget {
  constructor() {
    super();
    this.isLoading = true;
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-web: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.secondaryBtnLabel = "Open";
    this.secondaryLabel = "Open and continue in a new browser tab";
    this.secondaryBtnIcon = "externalLink";
    this.updateLoadingState();
    this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", () => {
      this.updateLoadingState();
    }));
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "web" }
    });
  }
  updateLoadingState() {
    this.isLoading = !this.uri;
  }
  onConnectProxy() {
    var _a;
    if (((_a = this.wallet) == null ? void 0 : _a.webapp_link) && this.uri) {
      try {
        this.error = false;
        const { webapp_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatUniversalUrl(webapp_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_blank");
      } catch {
        this.error = true;
      }
    }
  }
};
__decorate70([
  state()
], W3mConnectingWcWeb.prototype, "isLoading", void 0);
W3mConnectingWcWeb = __decorate70([
  customElement("w3m-connecting-wc-web")
], W3mConnectingWcWeb);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/index.js
var __decorate71 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcView = class W3mConnectingWcView2 extends LitElement2 {
  constructor() {
    var _a;
    super();
    this.wallet = (_a = RouterController.state.data) == null ? void 0 : _a.wallet;
    this.platform = void 0;
    this.platforms = [];
    this.isSiwxEnabled = Boolean(OptionsController.state.siwx);
    this.determinePlatforms();
    this.initializeConnection();
  }
  render() {
    return html2`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `;
  }
  async initializeConnection(retry = false) {
    if (this.platform === "browser" || OptionsController.state.manualWCControl && !retry) {
      return;
    }
    try {
      const { wcPairingExpiry, status } = ConnectionController.state;
      if (retry || CoreHelperUtil.isPairingExpired(wcPairingExpiry) || status === "connecting") {
        await ConnectionController.connectWalletConnect();
        if (!this.isSiwxEnabled) {
          ModalController.close();
        }
      }
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      ConnectionController.setWcError(true);
      SnackController.showError(error.message ?? "Connection error");
      ConnectionController.resetWcConnection();
      RouterController.goBack();
    }
  }
  determinePlatforms() {
    if (!this.wallet) {
      this.platforms.push("qrcode");
      this.platform = "qrcode";
      return;
    }
    if (this.platform) {
      return;
    }
    const { mobile_link, desktop_link, webapp_link, injected, rdns } = this.wallet;
    const injectedIds = injected == null ? void 0 : injected.map(({ injected_id }) => injected_id).filter(Boolean);
    const browserIds = [...rdns ? [rdns] : injectedIds ?? []];
    const isBrowser = OptionsController.state.isUniversalProvider ? false : browserIds.length;
    const isMobileWc = mobile_link;
    const isWebWc = webapp_link;
    const isBrowserInstalled = ConnectionController.checkInstalled(browserIds);
    const isBrowserWc = isBrowser && isBrowserInstalled;
    const isDesktopWc = desktop_link && !CoreHelperUtil.isMobile();
    if (isBrowserWc && !ChainController.state.noAdapters) {
      this.platforms.push("browser");
    }
    if (isMobileWc) {
      this.platforms.push(CoreHelperUtil.isMobile() ? "mobile" : "qrcode");
    }
    if (isWebWc) {
      this.platforms.push("web");
    }
    if (isDesktopWc) {
      this.platforms.push("desktop");
    }
    if (!isBrowserWc && isBrowser && !ChainController.state.noAdapters) {
      this.platforms.push("unsupported");
    }
    this.platform = this.platforms[0];
  }
  platformTemplate() {
    switch (this.platform) {
      case "browser":
        return html2`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
      case "web":
        return html2`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
      case "desktop":
        return html2`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
      case "mobile":
        return html2`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
      case "qrcode":
        return html2`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
      default:
        return html2`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
    }
  }
  headerTemplate() {
    const multiPlatform = this.platforms.length > 1;
    if (!multiPlatform) {
      return null;
    }
    return html2`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `;
  }
  async onSelectPlatform(platform) {
    var _a;
    const container = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("div");
    if (container) {
      await container.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.platform = platform;
      container.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
__decorate71([
  state()
], W3mConnectingWcView.prototype, "platform", void 0);
__decorate71([
  state()
], W3mConnectingWcView.prototype, "platforms", void 0);
__decorate71([
  state()
], W3mConnectingWcView.prototype, "isSiwxEnabled", void 0);
W3mConnectingWcView = __decorate71([
  customElement("w3m-connecting-wc-view")
], W3mConnectingWcView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-basic-view/index.js
var __decorate72 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcBasicView = class W3mConnectingWcBasicView2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.isMobile = CoreHelperUtil.isMobile();
  }
  render() {
    if (this.isMobile) {
      const { featured, recommended } = ApiController.state;
      const { customWallets } = OptionsController.state;
      const recent = StorageUtil.getRecentWallets();
      const showConnectors = featured.length || recommended.length || (customWallets == null ? void 0 : customWallets.length) || recent.length;
      return html2`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs", "s", "s", "s"]}
      >
        ${showConnectors ? html2`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
    }
    return html2`<wui-flex flexDirection="column" .padding=${["0", "0", "l", "0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0", "m", "0", "m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`;
  }
};
__decorate72([
  state()
], W3mConnectingWcBasicView.prototype, "isMobile", void 0);
W3mConnectingWcBasicView = __decorate72([
  customElement("w3m-connecting-wc-basic-view")
], W3mConnectingWcBasicView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-choose-account-name-view/styles.js
var styles_default47 = css2`
  .continue-button-container {
    width: 100%;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-choose-account-name-view/index.js
var __decorate73 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mChooseAccountNameView = class W3mChooseAccountNameView2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.loading = false;
  }
  render() {
    return html2`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0", "0", "l", "0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
      CoreHelperUtil.openHref(NavigationUtil.URLS.FAQ, "_blank");
    }}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
  }
  onboardingTemplate() {
    return html2` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0", "xxl", "0", "xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`;
  }
  buttonsTemplate() {
    return html2`<wui-flex
      .padding=${["0", "2l", "0", "2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`;
  }
  handleContinue() {
    RouterController.push("RegisterAccountName");
    EventsController.sendEvent({
      type: "track",
      event: "OPEN_ENS_FLOW",
      properties: {
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
  }
};
W3mChooseAccountNameView.styles = styles_default47;
__decorate73([
  state()
], W3mChooseAccountNameView.prototype, "loading", void 0);
W3mChooseAccountNameView = __decorate73([
  customElement("w3m-choose-account-name-view")
], W3mChooseAccountNameView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-downloads-view/index.js
var __decorate74 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mDownloadsView = class W3mDownloadsView2 extends LitElement2 {
  constructor() {
    var _a;
    super(...arguments);
    this.wallet = (_a = RouterController.state.data) == null ? void 0 : _a.wallet;
  }
  render() {
    if (!this.wallet) {
      throw new Error("w3m-downloads-view");
    }
    return html2`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s", "s", "l", "s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
  }
  chromeTemplate() {
    var _a;
    if (!((_a = this.wallet) == null ? void 0 : _a.chrome_store)) {
      return null;
    }
    return html2`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`;
  }
  iosTemplate() {
    var _a;
    if (!((_a = this.wallet) == null ? void 0 : _a.app_store)) {
      return null;
    }
    return html2`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`;
  }
  androidTemplate() {
    var _a;
    if (!((_a = this.wallet) == null ? void 0 : _a.play_store)) {
      return null;
    }
    return html2`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`;
  }
  homepageTemplate() {
    var _a;
    if (!((_a = this.wallet) == null ? void 0 : _a.homepage)) {
      return null;
    }
    return html2`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `;
  }
  onChromeStore() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.chrome_store) {
      CoreHelperUtil.openHref(this.wallet.chrome_store, "_blank");
    }
  }
  onAppStore() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.app_store) {
      CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
    }
  }
  onPlayStore() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.play_store) {
      CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
    }
  }
  onHomePage() {
    var _a;
    if ((_a = this.wallet) == null ? void 0 : _a.homepage) {
      CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
    }
  }
};
W3mDownloadsView = __decorate74([
  customElement("w3m-downloads-view")
], W3mDownloadsView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-get-wallet-view/index.js
var __decorate75 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EXPLORER = "https://walletconnect.com/explorer";
var W3mGetWalletView = class W3mGetWalletView2 extends LitElement2 {
  render() {
    return html2`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${() => {
      CoreHelperUtil.openHref("https://walletconnect.com/explorer?type=wallet", "_blank");
    }}
        ></wui-list-wallet>
      </wui-flex>
    `;
  }
  recommendedWalletsTemplate() {
    const { recommended, featured } = ApiController.state;
    const { customWallets } = OptionsController.state;
    const wallets = [...featured, ...customWallets ?? [], ...recommended].slice(0, 4);
    return wallets.map((wallet) => html2`
        <wui-list-wallet
          name=${wallet.name ?? "Unknown"}
          tagVariant="main"
          imageSrc=${ifDefined2(AssetUtil.getWalletImage(wallet))}
          @click=${() => {
      CoreHelperUtil.openHref(wallet.homepage ?? EXPLORER, "_blank");
    }}
        ></wui-list-wallet>
      `);
  }
};
W3mGetWalletView = __decorate75([
  customElement("w3m-get-wallet-view")
], W3mGetWalletView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-help-widget/index.js
var __decorate76 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mHelpWidget = class W3mHelpWidget2 extends LitElement2 {
  constructor() {
    super(...arguments);
    this.data = [];
  }
  render() {
    return html2`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((item) => html2`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${item.images.map((image) => html2`<wui-visual name=${image}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${item.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${item.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `;
  }
};
__decorate76([
  property({ type: Array })
], W3mHelpWidget.prototype, "data", void 0);
W3mHelpWidget = __decorate76([
  customElement("w3m-help-widget")
], W3mHelpWidget);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-what-is-a-wallet-view/index.js
var __decorate77 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var data = [
  {
    images: ["login", "profile", "lock"],
    title: "One login for all of web3",
    text: "Log in to any app by connecting your wallet. Say goodbye to countless passwords!"
  },
  {
    images: ["defi", "nft", "eth"],
    title: "A home for your digital assets",
    text: "A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."
  },
  {
    images: ["browser", "noun", "dao"],
    title: "Your gateway to a new web",
    text: "With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."
  }
];
var W3mWhatIsAWalletView = class W3mWhatIsAWalletView2 extends LitElement2 {
  render() {
    return html2`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${data}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `;
  }
  onGetWallet() {
    EventsController.sendEvent({ type: "track", event: "CLICK_GET_WALLET" });
    RouterController.push("GetWallet");
  }
};
W3mWhatIsAWalletView = __decorate77([
  customElement("w3m-what-is-a-wallet-view")
], W3mWhatIsAWalletView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-wallets-view/styles.js
var styles_default48 = css2`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-wallets-view/index.js
var __decorate78 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectWalletsView = class W3mConnectWalletsView2 extends LitElement2 {
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
    const legalUrl = termsConditionsUrl || privacyPolicyUrl;
    const showLegalCheckbox = Boolean(legalUrl) && Boolean(legalCheckbox);
    const disabled = showLegalCheckbox && !this.checked;
    const tabIndex = disabled ? -1 : void 0;
    return html2`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${showLegalCheckbox ? ["0", "s", "s", "s"] : "s"}
        gap="xs"
        class=${ifDefined2(disabled ? "disabled" : void 0)}
      >
        <w3m-wallet-login-list tabIdx=${ifDefined2(tabIndex)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
};
W3mConnectWalletsView.styles = styles_default48;
__decorate78([
  state()
], W3mConnectWalletsView.prototype, "checked", void 0);
W3mConnectWalletsView = __decorate78([
  customElement("w3m-connect-wallets-view")
], W3mConnectWalletsView);

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-hexagon/styles.js
var styles_default49 = css`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-hexagon/index.js
var __decorate79 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiLoadingHexagon = class WuiLoadingHexagon2 extends LitElement {
  render() {
    return html`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `;
  }
};
WuiLoadingHexagon.styles = [resetStyles, styles_default49];
WuiLoadingHexagon = __decorate79([
  customElement("wui-loading-hexagon")
], WuiLoadingHexagon);

// node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkLg.js
var networkSvgLg = svg`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;

// node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkSm.js
var networkSvgSm = svg`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-network-image/styles.js
var styles_default50 = css`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-network-image/index.js
var __decorate80 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiNetworkImage = class WuiNetworkImage2 extends LitElement {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.name = "uknown";
    this.networkImagesBySize = {
      sm: networkSvgSm,
      md: networkSvgMd,
      lg: networkSvgLg
    };
    this.selected = false;
    this.round = false;
  }
  render() {
    if (this.round) {
      this.dataset["round"] = "true";
      this.style.cssText = `
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `;
    } else {
      this.style.cssText = `

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `;
    }
    return html`${this.templateVisual()} ${this.svgTemplate()} `;
  }
  svgTemplate() {
    if (this.round) {
      return null;
    }
    return this.networkImagesBySize[this.size];
  }
  templateVisual() {
    if (this.imageSrc) {
      return html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`;
    }
    return html`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`;
  }
};
WuiNetworkImage.styles = [resetStyles, styles_default50];
__decorate80([
  property2()
], WuiNetworkImage.prototype, "size", void 0);
__decorate80([
  property2()
], WuiNetworkImage.prototype, "name", void 0);
__decorate80([
  property2({ type: Object })
], WuiNetworkImage.prototype, "networkImagesBySize", void 0);
__decorate80([
  property2()
], WuiNetworkImage.prototype, "imageSrc", void 0);
__decorate80([
  property2({ type: Boolean })
], WuiNetworkImage.prototype, "selected", void 0);
__decorate80([
  property2({ type: Boolean })
], WuiNetworkImage.prototype, "round", void 0);
WuiNetworkImage = __decorate80([
  customElement("wui-network-image")
], WuiNetworkImage);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-network-switch-view/styles.js
var styles_default51 = css2`
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

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-network-switch-view/index.js
var __decorate81 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mNetworkSwitchView = class W3mNetworkSwitchView2 extends LitElement2 {
  constructor() {
    var _a;
    super();
    this.network = (_a = RouterController.state.data) == null ? void 0 : _a.network;
    this.unsubscribe = [];
    this.showRetry = false;
    this.error = false;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  firstUpdated() {
    this.onSwitchNetwork();
  }
  render() {
    if (!this.network) {
      throw new Error("w3m-network-switch-view: No network provided");
    }
    this.onShowRetry();
    const label = this.getLabel();
    const subLabel = this.getSubLabel();
    return html2`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "3xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ifDefined2(AssetUtil.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : html2`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${true}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${label}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
  }
  getSubLabel() {
    const namespace = ChainController.state.activeChain;
    const connectorId = ConnectorController.getConnectorId(namespace);
    const authConnector = ConnectorController.getAuthConnector();
    if (authConnector && connectorId === ConstantsUtil.CONNECTOR_ID.AUTH) {
      return "";
    }
    return this.error ? "Switch can be declined if chain is not supported by a wallet or previous request is still active" : "Accept connection request in your wallet";
  }
  getLabel() {
    var _a;
    const namespace = ChainController.state.activeChain;
    const connectorId = ConnectorController.getConnectorId(namespace);
    const authConnector = ConnectorController.getAuthConnector();
    if (authConnector && connectorId === ConstantsUtil.CONNECTOR_ID.AUTH) {
      return `Switching to ${((_a = this.network) == null ? void 0 : _a.name) ?? "Unknown"} network...`;
    }
    return this.error ? "Switch declined" : "Approve in wallet";
  }
  onShowRetry() {
    var _a;
    if (this.error && !this.showRetry) {
      this.showRetry = true;
      const retryButton = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-button");
      retryButton == null ? void 0 : retryButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  async onSwitchNetwork() {
    try {
      this.error = false;
      if (this.network) {
        await ChainController.switchActiveNetwork(this.network);
      }
    } catch (error) {
      this.error = true;
    }
  }
};
W3mNetworkSwitchView.styles = styles_default51;
__decorate81([
  state()
], W3mNetworkSwitchView.prototype, "showRetry", void 0);
__decorate81([
  state()
], W3mNetworkSwitchView.prototype, "error", void 0);
W3mNetworkSwitchView = __decorate81([
  customElement("w3m-network-switch-view")
], W3mNetworkSwitchView);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-network/styles.js
var styles_default52 = css`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-network/index.js
var __decorate82 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiListNetwork = class WuiListNetwork2 extends LitElement {
  constructor() {
    super(...arguments);
    this.imageSrc = "";
    this.name = "";
    this.disabled = false;
    this.selected = false;
    this.transparent = false;
  }
  render() {
    return html`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `;
  }
  checkmarkTemplate() {
    if (this.selected) {
      return html`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`;
    }
    return null;
  }
  templateNetworkImage() {
    if (this.imageSrc) {
      return html`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`;
    }
    if (!this.imageSrc) {
      return html`<wui-network-image
        ?round=${true}
        size="md"
        name=${this.name}
      ></wui-network-image>`;
    }
    return null;
  }
};
WuiListNetwork.styles = [resetStyles, elementStyles, styles_default52];
__decorate82([
  property2()
], WuiListNetwork.prototype, "imageSrc", void 0);
__decorate82([
  property2()
], WuiListNetwork.prototype, "name", void 0);
__decorate82([
  property2({ type: Boolean })
], WuiListNetwork.prototype, "disabled", void 0);
__decorate82([
  property2({ type: Boolean })
], WuiListNetwork.prototype, "selected", void 0);
__decorate82([
  property2({ type: Boolean })
], WuiListNetwork.prototype, "transparent", void 0);
WuiListNetwork = __decorate82([
  customElement("wui-list-network")
], WuiListNetwork);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-networks-view/styles.js
var styles_default53 = css2`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-networks-view/index.js
var __decorate83 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mNetworksView = class W3mNetworksView2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.network = ChainController.state.activeCaipNetwork;
    this.requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    this.search = "";
    this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
      this.search = value;
    }, 100);
    this.unsubscribe.push(AssetController.subscribeNetworkImages(() => this.requestUpdate()), ChainController.subscribeKey("activeCaipNetwork", (val) => this.network = val), ChainController.subscribeKey("chains", () => this.requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks()));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html2`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0", "s", "s", "s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `;
  }
  templateSearchInput() {
    return html2`
      <wui-flex gap="xs" .padding=${["0", "s", "s", "s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
  }
  onInputChange(event) {
    this.onDebouncedSearch(event.detail);
  }
  onNetworkHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_NETWORK_HELP" });
    RouterController.push("WhatIsANetwork");
  }
  networksTemplate() {
    var _a;
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    if (this.search) {
      this.filteredNetworks = sortedNetworks == null ? void 0 : sortedNetworks.filter((network) => {
        var _a2;
        return (_a2 = network == null ? void 0 : network.name) == null ? void 0 : _a2.toLowerCase().includes(this.search.toLowerCase());
      });
    } else {
      this.filteredNetworks = sortedNetworks;
    }
    return (_a = this.filteredNetworks) == null ? void 0 : _a.map((network) => {
      var _a2;
      return html2`
        <wui-list-network
          .selected=${((_a2 = this.network) == null ? void 0 : _a2.id) === network.id}
          imageSrc=${ifDefined2(AssetUtil.getNetworkImage(network))}
          type="network"
          name=${network.name ?? network.id}
          @click=${() => this.onSwitchNetwork(network)}
          .disabled=${this.getNetworkDisabled(network)}
          data-testid=${`w3m-network-switch-${network.name ?? network.id}`}
        ></wui-list-network>
      `;
    });
  }
  getNetworkDisabled(network) {
    const networkNamespace = network.chainNamespace;
    const isNextNamespaceConnected = AccountController.getCaipAddress(networkNamespace);
    const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
    const supportsAllNetworks = ChainController.getNetworkProp("supportsAllNetworks", networkNamespace) !== false;
    const connectorId = ConnectorController.getConnectorId(networkNamespace);
    const authConnector = ConnectorController.getAuthConnector();
    const isConnectedWithAuth = connectorId === ConstantsUtil.CONNECTOR_ID.AUTH && authConnector;
    if (!isNextNamespaceConnected || supportsAllNetworks || isConnectedWithAuth) {
      return false;
    }
    return !(approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.caipNetworkId));
  }
  onSwitchNetwork(network) {
    var _a;
    const routerData = RouterController.state.data;
    const isSameNetwork = network.id === ((_a = this.network) == null ? void 0 : _a.id);
    if (isSameNetwork) {
      return;
    }
    const isDifferentNamespace = network.chainNamespace !== ChainController.state.activeChain;
    const isCurrentNamespaceConnected = AccountController.state.caipAddress;
    const isNextNamespaceConnected = AccountController.getCaipAddress(network.chainNamespace);
    const connectorId = ConnectorController.getConnectorId(ChainController.state.activeChain);
    const isConnectedWithAuth = connectorId === ConstantsUtil.CONNECTOR_ID.AUTH;
    const isSupportedForAuthConnector = ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((c) => c === network.chainNamespace);
    if (isCurrentNamespaceConnected) {
      if (isConnectedWithAuth && isSupportedForAuthConnector) {
        RouterController.push("SwitchNetwork", { ...routerData, network });
      } else if (isConnectedWithAuth && !isSupportedForAuthConnector || isDifferentNamespace && !isNextNamespaceConnected) {
        RouterController.push("SwitchActiveChain", {
          switchToChain: network.chainNamespace,
          navigateTo: "Connect",
          navigateWithReplace: true,
          network
        });
      } else {
        RouterController.push("SwitchNetwork", { ...routerData, network });
      }
    } else {
      RouterController.push("SwitchNetwork", { ...routerData, network });
    }
  }
};
W3mNetworksView.styles = styles_default53;
__decorate83([
  state()
], W3mNetworksView.prototype, "network", void 0);
__decorate83([
  state()
], W3mNetworksView.prototype, "requestedCaipNetworks", void 0);
__decorate83([
  state()
], W3mNetworksView.prototype, "filteredNetworks", void 0);
__decorate83([
  state()
], W3mNetworksView.prototype, "search", void 0);
W3mNetworksView = __decorate83([
  customElement("w3m-networks-view")
], W3mNetworksView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-switch-active-chain-view/styles.js
var styles_default54 = css2`
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

  .capitalize {
    text-transform: capitalize;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-switch-active-chain-view/index.js
var __decorate84 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var chainIconNameMap = {
  eip155: "eth",
  solana: "solana",
  bip122: "bitcoin",
  polkadot: void 0
};
var W3mSwitchActiveChainView = class W3mSwitchActiveChainView2 extends LitElement2 {
  constructor() {
    var _a, _b;
    super(...arguments);
    this.unsubscribe = [];
    this.switchToChain = (_a = RouterController.state.data) == null ? void 0 : _a.switchToChain;
    this.caipNetwork = (_b = RouterController.state.data) == null ? void 0 : _b.network;
    this.activeChain = ChainController.state.activeChain;
  }
  firstUpdated() {
    this.unsubscribe.push(ChainController.subscribeKey("activeChain", (val) => this.activeChain = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const switchedChainNameString = this.switchToChain ? ConstantsUtil.CHAIN_NAME_MAP[this.switchToChain] : "supported";
    if (!this.switchToChain) {
      return null;
    }
    const nextChainName = ConstantsUtil.CHAIN_NAME_MAP[this.switchToChain];
    return html2`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${ifDefined2(chainIconNameMap[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${nextChainName}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${nextChainName}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${switchedChainNameString} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `;
  }
  async switchActiveChain() {
    if (!this.switchToChain) {
      return;
    }
    ChainController.setIsSwitchingNamespace(true);
    ConnectorController.setFilterByNamespace(this.switchToChain);
    if (this.caipNetwork) {
      await ChainController.switchActiveNetwork(this.caipNetwork);
    } else {
      ChainController.setActiveNamespace(this.switchToChain);
    }
    RouterController.reset("Connect");
  }
};
W3mSwitchActiveChainView.styles = styles_default54;
__decorate84([
  property()
], W3mSwitchActiveChainView.prototype, "activeChain", void 0);
W3mSwitchActiveChainView = __decorate84([
  customElement("w3m-switch-active-chain-view")
], W3mSwitchActiveChainView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-what-is-a-network-view/index.js
var __decorate85 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var data2 = [
  {
    images: ["network", "layers", "system"],
    title: "The system’s nuts and bolts",
    text: "A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."
  },
  {
    images: ["noun", "defiAlt", "dao"],
    title: "Designed for different uses",
    text: "Each network is designed differently, and may therefore suit certain apps and experiences."
  }
];
var W3mWhatIsANetworkView = class W3mWhatIsANetworkView2 extends LitElement2 {
  render() {
    return html2`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${data2}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${() => {
      CoreHelperUtil.openHref("https://ethereum.org/en/developers/docs/networks/", "_blank");
    }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
  }
};
W3mWhatIsANetworkView = __decorate85([
  customElement("w3m-what-is-a-network-view")
], W3mWhatIsANetworkView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-unsupported-chain-view/styles.js
var styles_default55 = css2`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-unsupported-chain-view/index.js
var __decorate86 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUnsupportedChainView = class W3mUnsupportedChainView2 extends LitElement2 {
  constructor() {
    var _a;
    super();
    this.swapUnsupportedChain = (_a = RouterController.state.data) == null ? void 0 : _a.swapUnsupportedChain;
    this.unsubscribe = [];
    this.disconecting = false;
    this.unsubscribe.push(AssetController.subscribeNetworkImages(() => this.requestUpdate()));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html2`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m", "xl", "xs", "xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
  }
  descriptionTemplate() {
    if (this.swapUnsupportedChain) {
      return html2`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `;
    }
    return html2`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `;
  }
  networksTemplate() {
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    const filteredNetworks = this.swapUnsupportedChain ? sortedNetworks.filter((network) => ConstantsUtil2.SWAP_SUPPORTED_NETWORKS.includes(network.caipNetworkId)) : sortedNetworks;
    return filteredNetworks.map((network) => html2`
        <wui-list-network
          imageSrc=${ifDefined2(AssetUtil.getNetworkImage(network))}
          name=${network.name ?? "Unknown"}
          @click=${() => this.onSwitchNetwork(network)}
        >
        </wui-list-network>
      `);
  }
  async onDisconnect() {
    try {
      this.disconecting = true;
      await ConnectionController.disconnect();
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconecting = false;
    }
  }
  async onSwitchNetwork(network) {
    const caipAddress = AccountController.state.caipAddress;
    const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
    const supportsAllNetworks = ChainController.getNetworkProp("supportsAllNetworks", network.chainNamespace);
    const routerData = RouterController.state.data;
    if (caipAddress) {
      if (approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.caipNetworkId)) {
        await ChainController.switchActiveNetwork(network);
      } else if (supportsAllNetworks) {
        RouterController.push("SwitchNetwork", { ...routerData, network });
      } else {
        RouterController.push("SwitchNetwork", { ...routerData, network });
      }
    } else if (!caipAddress) {
      ChainController.setActiveCaipNetwork(network);
      RouterController.push("Connect");
    }
  }
};
W3mUnsupportedChainView.styles = styles_default55;
__decorate86([
  state()
], W3mUnsupportedChainView.prototype, "disconecting", void 0);
W3mUnsupportedChainView = __decorate86([
  customElement("w3m-unsupported-chain-view")
], W3mUnsupportedChainView);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-banner/styles.js
var styles_default56 = css`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-banner/index.js
var __decorate87 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiBanner = class WuiBanner2 extends LitElement {
  constructor() {
    super(...arguments);
    this.icon = "externalLink";
    this.text = "";
  }
  render() {
    return html`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `;
  }
};
WuiBanner.styles = [resetStyles, elementStyles, styles_default56];
__decorate87([
  property2()
], WuiBanner.prototype, "icon", void 0);
__decorate87([
  property2()
], WuiBanner.prototype, "text", void 0);
WuiBanner = __decorate87([
  customElement("wui-banner")
], WuiBanner);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-compatible-networks-view/styles.js
var styles_default57 = css2`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-compatible-networks-view/index.js
var __decorate88 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletCompatibleNetworksView = class W3mWalletCompatibleNetworksView2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.preferredAccountType = AccountController.state.preferredAccountType;
    this.unsubscribe.push(AccountController.subscribeKey("preferredAccountType", (val) => {
      this.preferredAccountType = val;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html2` <wui-flex
      flexDirection="column"
      .padding=${["xs", "s", "m", "s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`;
  }
  networkTemplate() {
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const approvedCaipNetworkIds = ChainController.getAllApprovedCaipNetworkIds();
    const caipNetwork = ChainController.state.activeCaipNetwork;
    const isNetworkEnabledForSmartAccounts = ChainController.checkIfSmartAccountEnabled();
    let sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    if (isNetworkEnabledForSmartAccounts && this.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT) {
      if (!caipNetwork) {
        return null;
      }
      sortedNetworks = [caipNetwork];
    }
    return sortedNetworks.map((network) => html2`
        <wui-list-network
          imageSrc=${ifDefined2(AssetUtil.getNetworkImage(network))}
          name=${network.name ?? "Unknown"}
          ?transparent=${true}
        >
        </wui-list-network>
      `);
  }
};
W3mWalletCompatibleNetworksView.styles = styles_default57;
__decorate88([
  state()
], W3mWalletCompatibleNetworksView.prototype, "preferredAccountType", void 0);
W3mWalletCompatibleNetworksView = __decorate88([
  customElement("w3m-wallet-compatible-networks-view")
], W3mWalletCompatibleNetworksView);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-visual-thumbnail/styles.js
var styles_default58 = css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-visual-thumbnail/index.js
var __decorate89 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiVisualThumbnail = class WuiVisualThumbnail2 extends LitElement {
  render() {
    this.style.cssText = `--local-border-radius: ${this.borderRadiusFull ? "1000px" : "20px"}; background-color: var(--wui-color-modal-bg);`;
    return html`${this.templateVisual()}`;
  }
  templateVisual() {
    if (this.imageSrc) {
      return html`<wui-image src=${this.imageSrc} alt=${this.alt ?? ""}></wui-image>`;
    }
    return html`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`;
  }
};
WuiVisualThumbnail.styles = [resetStyles, styles_default58];
__decorate89([
  property2()
], WuiVisualThumbnail.prototype, "imageSrc", void 0);
__decorate89([
  property2()
], WuiVisualThumbnail.prototype, "alt", void 0);
__decorate89([
  property2({ type: Boolean })
], WuiVisualThumbnail.prototype, "borderRadiusFull", void 0);
WuiVisualThumbnail = __decorate89([
  customElement("wui-visual-thumbnail")
], WuiVisualThumbnail);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-siwx-sign-message-thumbnails/styles.js
var styles_default59 = css2`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-siwx-sign-message-thumbnails/index.js
var __decorate90 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSIWXSignMessageThumbnails = class W3mSIWXSignMessageThumbnails2 extends LitElement2 {
  constructor() {
    var _a, _b;
    super(...arguments);
    this.dappImageUrl = (_a = OptionsController.state.metadata) == null ? void 0 : _a.icons;
    this.walletImageUrl = (_b = AccountController.state.connectedWalletInfo) == null ? void 0 : _b.icon;
  }
  firstUpdated() {
    var _a;
    const visuals = (_a = this.shadowRoot) == null ? void 0 : _a.querySelectorAll("wui-visual-thumbnail");
    if (visuals == null ? void 0 : visuals[0]) {
      this.createAnimation(visuals[0], "translate(18px)");
    }
    if (visuals == null ? void 0 : visuals[1]) {
      this.createAnimation(visuals[1], "translate(-18px)");
    }
  }
  render() {
    var _a;
    return html2`
      <wui-visual-thumbnail
        ?borderRadiusFull=${true}
        .imageSrc=${(_a = this.dappImageUrl) == null ? void 0 : _a[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `;
  }
  createAnimation(element, translation) {
    element.animate([{ transform: "translateX(0px)" }, { transform: translation }], {
      duration: 1600,
      easing: "cubic-bezier(0.56, 0, 0.48, 1)",
      direction: "alternate",
      iterations: Infinity
    });
  }
};
W3mSIWXSignMessageThumbnails.styles = styles_default59;
W3mSIWXSignMessageThumbnails = __decorate90([
  customElement("w3m-siwx-sign-message-thumbnails")
], W3mSIWXSignMessageThumbnails);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-siwx-sign-message-view/index.js
var __decorate91 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSIWXSignMessageView = class W3mSIWXSignMessageView2 extends LitElement2 {
  constructor() {
    var _a;
    super(...arguments);
    this.dappName = (_a = OptionsController.state.metadata) == null ? void 0 : _a.name;
    this.isCancelling = false;
    this.isSigning = false;
  }
  render() {
    return html2`
      <wui-flex justifyContent="center" .padding=${["2xl", "0", "xxl", "0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0", "4xl", "l", "4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName ?? "Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0", "3xl", "l", "3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l", "xl", "xl", "xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling ? "Cancelling..." : "Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning ? "Signing..." : "Sign"}
        </wui-button>
      </wui-flex>
    `;
  }
  async onSign() {
    this.isSigning = true;
    await SIWXUtil.requestSignMessage().finally(() => this.isSigning = false);
  }
  async onCancel() {
    this.isCancelling = true;
    await SIWXUtil.cancelSignMessage().finally(() => this.isCancelling = false);
  }
};
__decorate91([
  state()
], W3mSIWXSignMessageView.prototype, "isCancelling", void 0);
__decorate91([
  state()
], W3mSIWXSignMessageView.prototype, "isSigning", void 0);
W3mSIWXSignMessageView = __decorate91([
  customElement("w3m-siwx-sign-message-view")
], W3mSIWXSignMessageView);
export {
  AppKitAccountButton,
  AppKitButton,
  AppKitConnectButton,
  AppKitNetworkButton,
  W3mAccountButton,
  W3mAccountSettingsView,
  W3mAccountView,
  W3mAllWalletsView,
  W3mButton,
  W3mChooseAccountNameView,
  W3mConnectButton,
  W3mConnectView,
  W3mConnectWalletsView,
  W3mConnectingExternalView,
  W3mConnectingMultiChainView,
  W3mConnectingWcBasicView,
  W3mConnectingWcView,
  W3mDownloadsView,
  W3mGetWalletView,
  W3mNetworkButton,
  W3mNetworkSwitchView,
  W3mNetworksView,
  W3mProfileView,
  W3mRouter,
  W3mSIWXSignMessageView,
  W3mSwitchActiveChainView,
  W3mSwitchAddressView,
  W3mUnsupportedChainView,
  W3mWalletCompatibleNetworksView,
  W3mWhatIsANetworkView,
  W3mWhatIsAWalletView
};
/*! Bundled license information:

lit-html/development/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=exports-CCFREV67.js.map
