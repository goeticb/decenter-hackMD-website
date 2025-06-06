import {
  LitElement,
  css,
  html,
  state
} from "./chunk-COKH4YWJ.js";
import {
  ConstantsUtil
} from "./chunk-VOPCLWV4.js";
import {
  RouterController,
  TooltipController,
  customElement
} from "./chunk-ETM4QMGY.js";

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-router/styles.js
var styles_default = css`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-router/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mRouter = class W3mRouter2 extends LitElement {
  constructor() {
    super();
    this.resizeObserver = void 0;
    this.prevHeight = "0px";
    this.prevHistoryLength = 1;
    this.unsubscribe = [];
    this.view = RouterController.state.view;
    this.viewDirection = "";
    this.unsubscribe.push(RouterController.subscribeKey("view", (val) => this.onViewChange(val)));
  }
  firstUpdated() {
    var _a;
    this.resizeObserver = new ResizeObserver(([content]) => {
      const height = `${content == null ? void 0 : content.contentRect.height}px`;
      if (this.prevHeight !== "0px") {
        this.style.setProperty("--prev-height", this.prevHeight);
        this.style.setProperty("--new-height", height);
        this.style.animation = "w3m-view-height 150ms forwards ease";
        this.style.height = "auto";
      }
      setTimeout(() => {
        this.prevHeight = height;
        this.style.animation = "unset";
      }, ConstantsUtil.ANIMATION_DURATIONS.ModalHeight);
    });
    (_a = this.resizeObserver) == null ? void 0 : _a.observe(this.getWrapper());
  }
  disconnectedCallback() {
    var _a;
    (_a = this.resizeObserver) == null ? void 0 : _a.unobserve(this.getWrapper());
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`;
  }
  viewTemplate() {
    switch (this.view) {
      case "AccountSettings":
        return html`<w3m-account-settings-view></w3m-account-settings-view>`;
      case "Account":
        return html`<w3m-account-view></w3m-account-view>`;
      case "AllWallets":
        return html`<w3m-all-wallets-view></w3m-all-wallets-view>`;
      case "ApproveTransaction":
        return html`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
      case "BuyInProgress":
        return html`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;
      case "ChooseAccountName":
        return html`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;
      case "Connect":
        return html`<w3m-connect-view></w3m-connect-view>`;
      case "Create":
        return html`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;
      case "ConnectingWalletConnect":
        return html`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
      case "ConnectingWalletConnectBasic":
        return html`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;
      case "ConnectingExternal":
        return html`<w3m-connecting-external-view></w3m-connecting-external-view>`;
      case "ConnectingSiwe":
        return html`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
      case "ConnectWallets":
        return html`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;
      case "ConnectSocials":
        return html`<w3m-connect-socials-view></w3m-connect-socials-view>`;
      case "ConnectingSocial":
        return html`<w3m-connecting-social-view></w3m-connecting-social-view>`;
      case "Downloads":
        return html`<w3m-downloads-view></w3m-downloads-view>`;
      case "EmailLogin":
        return html`<w3m-email-login-view></w3m-email-login-view>`;
      case "EmailVerifyOtp":
        return html`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
      case "EmailVerifyDevice":
        return html`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
      case "GetWallet":
        return html`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "Networks":
        return html`<w3m-networks-view></w3m-networks-view>`;
      case "SwitchNetwork":
        return html`<w3m-network-switch-view></w3m-network-switch-view>`;
      case "Profile":
        return html`<w3m-profile-view></w3m-profile-view>`;
      case "SwitchAddress":
        return html`<w3m-switch-address-view></w3m-switch-address-view>`;
      case "Transactions":
        return html`<w3m-transactions-view></w3m-transactions-view>`;
      case "OnRampProviders":
        return html`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;
      case "OnRampActivity":
        return html`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;
      case "OnRampTokenSelect":
        return html`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;
      case "OnRampFiatSelect":
        return html`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;
      case "UpgradeEmailWallet":
        return html`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;
      case "UpdateEmailWallet":
        return html`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;
      case "UpdateEmailPrimaryOtp":
        return html`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;
      case "UpdateEmailSecondaryOtp":
        return html`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;
      case "UnsupportedChain":
        return html`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;
      case "Swap":
        return html`<w3m-swap-view></w3m-swap-view>`;
      case "SwapSelectToken":
        return html`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;
      case "SwapPreview":
        return html`<w3m-swap-preview-view></w3m-swap-preview-view>`;
      case "WalletSend":
        return html`<w3m-wallet-send-view></w3m-wallet-send-view>`;
      case "WalletSendSelectToken":
        return html`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;
      case "WalletSendPreview":
        return html`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;
      case "WhatIsABuy":
        return html`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;
      case "WalletReceive":
        return html`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;
      case "WalletCompatibleNetworks":
        return html`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;
      case "WhatIsAWallet":
        return html`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
      case "ConnectingMultiChain":
        return html`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;
      case "WhatIsANetwork":
        return html`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
      case "ConnectingFarcaster":
        return html`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;
      case "SwitchActiveChain":
        return html`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;
      case "RegisterAccountName":
        return html`<w3m-register-account-name-view></w3m-register-account-name-view>`;
      case "RegisterAccountNameSuccess":
        return html`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;
      case "SmartSessionCreated":
        return html`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;
      case "SmartSessionList":
        return html`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;
      case "SIWXSignMessage":
        return html`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;
      default:
        return html`<w3m-connect-view></w3m-connect-view>`;
    }
  }
  onViewChange(newView) {
    TooltipController.hide();
    let direction = ConstantsUtil.VIEW_DIRECTION.Next;
    const { history } = RouterController.state;
    if (history.length < this.prevHistoryLength) {
      direction = ConstantsUtil.VIEW_DIRECTION.Prev;
    }
    this.prevHistoryLength = history.length;
    this.viewDirection = direction;
    setTimeout(() => {
      this.view = newView;
    }, ConstantsUtil.ANIMATION_DURATIONS.ViewTransition);
  }
  getWrapper() {
    var _a;
    return (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("div");
  }
};
W3mRouter.styles = styles_default;
__decorate([
  state()
], W3mRouter.prototype, "view", void 0);
__decorate([
  state()
], W3mRouter.prototype, "viewDirection", void 0);
W3mRouter = __decorate([
  customElement("w3m-router")
], W3mRouter);

export {
  W3mRouter
};
//# sourceMappingURL=chunk-QJHT75C6.js.map
