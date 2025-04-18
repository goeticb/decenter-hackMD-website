import {
  executeSocialLogin
} from "./chunk-6OAFNN5J.js";
import "./chunk-CRQ3HVR6.js";
import "./chunk-LD4QFRZW.js";
import "./chunk-GDWZI2BJ.js";
import "./chunk-WHGGRX5P.js";
import "./chunk-FS3CSUOV.js";
import "./chunk-HZGWUS6I.js";
import "./chunk-WK4LCREZ.js";
import "./chunk-UJR4CR2X.js";
import "./chunk-QACLXGLR.js";
import "./chunk-NOTVTPDK.js";
import "./chunk-Z4JS4WZC.js";
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
  ConstantsUtil as ConstantsUtil2
} from "./chunk-VOPCLWV4.js";
import {
  AccountController,
  ChainController,
  ConnectionController,
  ConnectorController,
  ConstantsUtil2 as ConstantsUtil,
  CoreHelperUtil,
  EventsController,
  ModalController,
  OptionsController,
  OptionsStateController,
  RouterController,
  SnackController,
  StorageUtil,
  ThemeController,
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

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-social-login-list/styles.js
var styles_default = css`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-social-login-list/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mSocialLoginList = class W3mSocialLoginList2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tabIdx = void 0;
    this.connectors = ConnectorController.state.connectors;
    this.authConnector = this.connectors.find((c) => c.type === "AUTH");
    this.features = OptionsController.state.features;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => {
      this.connectors = val;
      this.authConnector = this.connectors.find((c) => c.type === "AUTH");
    }), OptionsController.subscribeKey("features", (val) => this.features = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a;
    let socials = ((_a = this.features) == null ? void 0 : _a.socials) || [];
    const isAuthConnectorExist = Boolean(this.authConnector);
    const isSocialsEnabled = socials == null ? void 0 : socials.length;
    const isConnectSocialsView = RouterController.state.view === "ConnectSocials";
    if ((!isAuthConnectorExist || !isSocialsEnabled) && !isConnectSocialsView) {
      return null;
    }
    if (isConnectSocialsView && !isSocialsEnabled) {
      socials = ConstantsUtil.DEFAULT_FEATURES.socials;
    }
    return html` <wui-flex flexDirection="column" gap="xs">
      ${socials.map((social) => html`<wui-list-social
            @click=${() => {
      this.onSocialClick(social);
    }}
            name=${social}
            logo=${social}
            tabIdx=${ifDefined(this.tabIdx)}
          ></wui-list-social>`)}
    </wui-flex>`;
  }
  async onSocialClick(socialProvider) {
    if (socialProvider) {
      await executeSocialLogin(socialProvider);
    }
  }
};
W3mSocialLoginList.styles = styles_default;
__decorate([
  property()
], W3mSocialLoginList.prototype, "tabIdx", void 0);
__decorate([
  state()
], W3mSocialLoginList.prototype, "connectors", void 0);
__decorate([
  state()
], W3mSocialLoginList.prototype, "authConnector", void 0);
__decorate([
  state()
], W3mSocialLoginList.prototype, "features", void 0);
W3mSocialLoginList = __decorate([
  customElement("w3m-social-login-list")
], W3mSocialLoginList);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-socials-view/styles.js
var styles_default2 = css`
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

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connect-socials-view/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectSocialsView = class W3mConnectSocialsView2 extends LitElement {
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
    return html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${showLegalCheckbox ? ["0", "s", "s", "s"] : "s"}
        gap="xs"
        class=${ifDefined(disabled ? "disabled" : void 0)}
      >
        <w3m-social-login-list tabIdx=${ifDefined(tabIndex)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
};
W3mConnectSocialsView.styles = styles_default2;
__decorate2([
  state()
], W3mConnectSocialsView.prototype, "checked", void 0);
W3mConnectSocialsView = __decorate2([
  customElement("w3m-connect-socials-view")
], W3mConnectSocialsView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-social-view/styles.js
var styles_default3 = css`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
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
  .capitalize {
    text-transform: capitalize;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-social-view/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingSocialView = class W3mConnectingSocialView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.socialProvider = AccountController.state.socialProvider;
    this.socialWindow = AccountController.state.socialWindow;
    this.error = false;
    this.connecting = false;
    this.message = "Connect in the provider window";
    this.authConnector = ConnectorController.getAuthConnector();
    this.handleSocialConnection = async (event) => {
      var _a;
      if ((_a = event.data) == null ? void 0 : _a.resultUri) {
        if (event.origin === ConstantsUtil2.SECURE_SITE_ORIGIN) {
          window.removeEventListener("message", this.handleSocialConnection, false);
          try {
            if (this.authConnector && !this.connecting) {
              if (this.socialWindow) {
                this.socialWindow.close();
                AccountController.setSocialWindow(void 0, ChainController.state.activeChain);
              }
              this.connecting = true;
              this.updateMessage();
              const uri = event.data.resultUri;
              if (this.socialProvider) {
                EventsController.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                  properties: { provider: this.socialProvider }
                });
              }
              await this.authConnector.provider.connectSocial(uri);
              if (this.socialProvider) {
                StorageUtil.setConnectedSocialProvider(this.socialProvider);
                await ConnectionController.connectExternal(this.authConnector, this.authConnector.chain);
                EventsController.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_SUCCESS",
                  properties: { provider: this.socialProvider }
                });
              }
            }
          } catch (error) {
            this.error = true;
            this.updateMessage();
            if (this.socialProvider) {
              EventsController.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_ERROR",
                properties: { provider: this.socialProvider }
              });
            }
          }
        } else {
          RouterController.goBack();
          SnackController.showError("Untrusted Origin");
          if (this.socialProvider) {
            EventsController.sendEvent({
              type: "track",
              event: "SOCIAL_LOGIN_ERROR",
              properties: { provider: this.socialProvider }
            });
          }
        }
      }
    };
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.socialProvider) {
          this.socialProvider = val.socialProvider;
        }
        if (val.socialWindow) {
          this.socialWindow = val.socialWindow;
        }
        if (val.address) {
          if (ModalController.state.open || OptionsController.state.enableEmbedded) {
            ModalController.close();
          }
        }
      })
    ]);
    if (this.authConnector) {
      this.connectSocial();
    }
  }
  disconnectedCallback() {
    var _a;
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    window.removeEventListener("message", this.handleSocialConnection, false);
    (_a = this.socialWindow) == null ? void 0 : _a.close();
    AccountController.setSocialWindow(void 0, ChainController.state.activeChain);
  }
  render() {
    return html`
      <wui-flex
        data-error=${ifDefined(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${ifDefined(this.socialProvider)}></wui-logo>
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
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider ?? "Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error ? "error-100" : "fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `;
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  connectSocial() {
    const interval = setInterval(() => {
      var _a;
      if ((_a = this.socialWindow) == null ? void 0 : _a.closed) {
        if (!this.connecting && RouterController.state.view === "ConnectingSocial") {
          if (this.socialProvider) {
            EventsController.sendEvent({
              type: "track",
              event: "SOCIAL_LOGIN_CANCELED",
              properties: { provider: this.socialProvider }
            });
          }
          RouterController.goBack();
        }
        clearInterval(interval);
      }
    }, 1e3);
    window.addEventListener("message", this.handleSocialConnection, false);
  }
  updateMessage() {
    if (this.error) {
      this.message = "Something went wrong";
    } else if (this.connecting) {
      this.message = "Retrieving user data";
    } else {
      this.message = "Connect in the provider window";
    }
  }
};
W3mConnectingSocialView.styles = styles_default3;
__decorate3([
  state()
], W3mConnectingSocialView.prototype, "socialProvider", void 0);
__decorate3([
  state()
], W3mConnectingSocialView.prototype, "socialWindow", void 0);
__decorate3([
  state()
], W3mConnectingSocialView.prototype, "error", void 0);
__decorate3([
  state()
], W3mConnectingSocialView.prototype, "connecting", void 0);
__decorate3([
  state()
], W3mConnectingSocialView.prototype, "message", void 0);
W3mConnectingSocialView = __decorate3([
  customElement("w3m-connecting-social-view")
], W3mConnectingSocialView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-farcaster-view/styles.js
var styles_default4 = css`
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

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-farcaster-view/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingFarcasterView = class W3mConnectingFarcasterView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.timeout = void 0;
    this.socialProvider = AccountController.state.socialProvider;
    this.uri = AccountController.state.farcasterUrl;
    this.ready = false;
    this.loading = false;
    this.authConnector = ConnectorController.getAuthConnector();
    this.forceUpdate = () => {
      this.requestUpdate();
    };
    this.unsubscribe.push(...[
      AccountController.subscribeKey("farcasterUrl", (val) => {
        if (val) {
          this.uri = val;
          this.connectFarcaster();
        }
      }),
      AccountController.subscribeKey("socialProvider", (val) => {
        if (val) {
          this.socialProvider = val;
        }
      })
    ]);
    window.addEventListener("resize", this.forceUpdate);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this.timeout);
    window.removeEventListener("resize", this.forceUpdate);
  }
  render() {
    this.onRenderProxy();
    return html`${this.platformTemplate()}`;
  }
  platformTemplate() {
    if (CoreHelperUtil.isMobile()) {
      return html`${this.mobileTemplate()}`;
    }
    return html`${this.desktopTemplate()}`;
  }
  desktopTemplate() {
    if (this.loading) {
      return html`${this.loadingTemplate()}`;
    }
    return html`${this.qrTemplate()}`;
  }
  qrTemplate() {
    return html` <wui-flex
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
    </wui-flex>`;
  }
  loadingTemplate() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
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
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `;
  }
  mobileTemplate() {
    return html` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl", "xl", "xl", "xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
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
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`;
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  async connectFarcaster() {
    var _a;
    if (this.authConnector) {
      try {
        await ((_a = this.authConnector) == null ? void 0 : _a.provider.connectFarcaster());
        if (this.socialProvider) {
          StorageUtil.setConnectedSocialProvider(this.socialProvider);
          EventsController.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
            properties: { provider: this.socialProvider }
          });
        }
        this.loading = true;
        await ConnectionController.connectExternal(this.authConnector, this.authConnector.chain);
        if (this.socialProvider) {
          EventsController.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_SUCCESS",
            properties: { provider: this.socialProvider }
          });
        }
        this.loading = false;
        ModalController.close();
      } catch (error) {
        if (this.socialProvider) {
          EventsController.sendEvent({
            type: "track",
            event: "SOCIAL_LOGIN_ERROR",
            properties: { provider: this.socialProvider }
          });
        }
        RouterController.goBack();
        SnackController.showError(error);
      }
    }
  }
  mobileLinkTemplate() {
    return html`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri || this.loading}
      @click=${() => {
      if (this.uri) {
        CoreHelperUtil.openHref(this.uri, "_blank");
      }
    }}
    >
      Open farcaster</wui-button
    >`;
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
    return html` <wui-qr-code
      size=${size}
      theme=${ThemeController.state.themeMode}
      uri=${this.uri}
      ?farcaster=${true}
      data-testid="wui-qr-code"
      color=${ifDefined(ThemeController.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`;
  }
  copyTemplate() {
    const inactive = !this.uri || !this.ready;
    return html`<wui-link
      .disabled=${inactive}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
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
W3mConnectingFarcasterView.styles = styles_default4;
__decorate4([
  state()
], W3mConnectingFarcasterView.prototype, "socialProvider", void 0);
__decorate4([
  state()
], W3mConnectingFarcasterView.prototype, "uri", void 0);
__decorate4([
  state()
], W3mConnectingFarcasterView.prototype, "ready", void 0);
__decorate4([
  state()
], W3mConnectingFarcasterView.prototype, "loading", void 0);
W3mConnectingFarcasterView = __decorate4([
  customElement("w3m-connecting-farcaster-view")
], W3mConnectingFarcasterView);
export {
  W3mConnectSocialsView,
  W3mConnectingFarcasterView,
  W3mConnectingSocialView
};
//# sourceMappingURL=socials-QDGSC46S.js.map
