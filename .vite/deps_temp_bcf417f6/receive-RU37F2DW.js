import "./chunk-PF7J6LKQ.js";
import "./chunk-NOTVTPDK.js";
import "./chunk-Z4JS4WZC.js";
import {
  ifDefined
} from "./chunk-UDUV7Y73.js";
import "./chunk-ZWVZUKRU.js";
import {
  LitElement as LitElement2,
  css as css2,
  html as html2,
  property2 as property,
  state
} from "./chunk-COKH4YWJ.js";
import {
  AccountController,
  AssetUtil,
  ChainController,
  CoreHelperUtil,
  RouterController,
  SnackController,
  ThemeController,
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

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-compatible-network/styles.js
var styles_default = css`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-compatible-network/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiCompatibleNetwork = class WuiCompatibleNetwork2 extends LitElement {
  constructor() {
    super(...arguments);
    this.networkImages = [""];
    this.text = "";
  }
  render() {
    return html`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `;
  }
  networksTemplate() {
    const slicedNetworks = this.networkImages.slice(0, 5);
    return html` <wui-flex class="networks">
      ${slicedNetworks == null ? void 0 : slicedNetworks.map((network) => html` <wui-flex class="network-icon"> <wui-image src=${network}></wui-image> </wui-flex>`)}
    </wui-flex>`;
  }
};
WuiCompatibleNetwork.styles = [resetStyles, elementStyles, styles_default];
__decorate([
  property({ type: Array })
], WuiCompatibleNetwork.prototype, "networkImages", void 0);
__decorate([
  property()
], WuiCompatibleNetwork.prototype, "text", void 0);
WuiCompatibleNetwork = __decorate([
  customElement("wui-compatible-network")
], WuiCompatibleNetwork);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-receive-view/styles.js
var styles_default2 = css2`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-wallet-receive-view/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mWalletReceiveView = class W3mWalletReceiveView2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.address = AccountController.state.address;
    this.profileName = AccountController.state.profileName;
    this.network = ChainController.state.activeCaipNetwork;
    this.preferredAccountType = AccountController.state.preferredAccountType;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileName = val.profileName;
          this.preferredAccountType = val.preferredAccountType;
        } else {
          SnackController.showError("Account not found");
        }
      })
    ], ChainController.subscribeKey("activeCaipNetwork", (val) => {
      if (val == null ? void 0 : val.id) {
        this.network = val;
      }
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (!this.address) {
      throw new Error("w3m-wallet-receive-view: No account provided");
    }
    const networkImage = AssetUtil.getNetworkImage(this.network);
    return html2` <wui-flex
      flexDirection="column"
      .padding=${["0", "l", "l", "l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${UiHelperUtil.getTruncateString({
      string: this.profileName || this.address || "",
      charsStart: this.profileName ? 18 : 4,
      charsEnd: this.profileName ? 0 : 4,
      truncate: this.profileName ? "end" : "middle"
    })}
        icon="copy"
        size="sm"
        imageSrc=${networkImage ? networkImage : ""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l", "0", "0", "0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${true}
          color=${ifDefined(ThemeController.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`;
  }
  networkTemplate() {
    var _a;
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const isNetworkEnabledForSmartAccounts = ChainController.checkIfSmartAccountEnabled();
    const caipNetwork = ChainController.state.activeCaipNetwork;
    if (this.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT && isNetworkEnabledForSmartAccounts) {
      if (!caipNetwork) {
        return null;
      }
      return html2`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[AssetUtil.getNetworkImage(caipNetwork) ?? ""]}
      ></wui-compatible-network>`;
    }
    const slicedNetworks = (_a = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.filter((network) => {
      var _a2;
      return (_a2 = network == null ? void 0 : network.assets) == null ? void 0 : _a2.imageId;
    })) == null ? void 0 : _a.slice(0, 5);
    const imagesArray = slicedNetworks.map(AssetUtil.getNetworkImage).filter(Boolean);
    return html2`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${imagesArray}
    ></wui-compatible-network>`;
  }
  onReceiveClick() {
    RouterController.push("WalletCompatibleNetworks");
  }
  onCopyClick() {
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
W3mWalletReceiveView.styles = styles_default2;
__decorate2([
  state()
], W3mWalletReceiveView.prototype, "address", void 0);
__decorate2([
  state()
], W3mWalletReceiveView.prototype, "profileName", void 0);
__decorate2([
  state()
], W3mWalletReceiveView.prototype, "network", void 0);
__decorate2([
  state()
], W3mWalletReceiveView.prototype, "preferredAccountType", void 0);
W3mWalletReceiveView = __decorate2([
  customElement("w3m-wallet-receive-view")
], W3mWalletReceiveView);
export {
  W3mWalletReceiveView
};
//# sourceMappingURL=receive-RU37F2DW.js.map
