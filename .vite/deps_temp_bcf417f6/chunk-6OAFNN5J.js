import {
  ifDefined
} from "./chunk-WK4LCREZ.js";
import {
  property2 as property
} from "./chunk-COKH4YWJ.js";
import {
  AccountController,
  ChainController,
  ConnectorController,
  CoreHelperUtil,
  EventsController,
  RouterController,
  SnackController,
  StorageUtil,
  customElement,
  elementStyles,
  resetStyles
} from "./chunk-ETM4QMGY.js";
import {
  LitElement,
  css,
  html
} from "./chunk-QK2VKFPU.js";

// node_modules/@reown/appkit-controllers/dist/esm/src/utils/SocialsUtil.js
function getPopupWindow() {
  try {
    return CoreHelperUtil.returnOpenHref("", "popupWindow", "width=600,height=800,scrollbars=yes");
  } catch (error) {
    throw new Error("Could not open social popup");
  }
}
async function connectFarcaster() {
  RouterController.push("ConnectingFarcaster");
  const authConnector = ConnectorController.getAuthConnector();
  if (authConnector) {
    if (!AccountController.state.farcasterUrl) {
      try {
        const { url } = await authConnector.provider.getFarcasterUri();
        AccountController.setFarcasterUrl(url, ChainController.state.activeChain);
      } catch (error) {
        RouterController.goBack();
        SnackController.showError(error);
      }
    }
  }
}
async function connectSocial(socialProvider) {
  RouterController.push("ConnectingSocial");
  const authConnector = ConnectorController.getAuthConnector();
  let popupWindow = null;
  try {
    const timeout = setTimeout(() => {
      throw new Error("Social login timed out. Please try again.");
    }, 45e3);
    if (authConnector && socialProvider) {
      if (!CoreHelperUtil.isTelegram()) {
        popupWindow = getPopupWindow();
      }
      if (popupWindow) {
        AccountController.setSocialWindow(popupWindow, ChainController.state.activeChain);
      } else if (!CoreHelperUtil.isTelegram()) {
        throw new Error("Could not create social popup");
      }
      const { uri } = await authConnector.provider.getSocialRedirectUri({
        provider: socialProvider
      });
      if (!uri) {
        popupWindow == null ? void 0 : popupWindow.close();
        throw new Error("Could not fetch the social redirect uri");
      }
      if (popupWindow) {
        popupWindow.location.href = uri;
      }
      if (CoreHelperUtil.isTelegram()) {
        StorageUtil.setTelegramSocialProvider(socialProvider);
        const parsedUri = CoreHelperUtil.formatTelegramSocialLoginUrl(uri);
        CoreHelperUtil.openHref(parsedUri, "_top");
      }
      clearTimeout(timeout);
    }
  } catch (error) {
    popupWindow == null ? void 0 : popupWindow.close();
    SnackController.showError(error == null ? void 0 : error.message);
  }
}
async function executeSocialLogin(socialProvider) {
  AccountController.setSocialProvider(socialProvider, ChainController.state.activeChain);
  EventsController.sendEvent({
    type: "track",
    event: "SOCIAL_LOGIN_STARTED",
    properties: { provider: socialProvider }
  });
  if (socialProvider === "farcaster") {
    await connectFarcaster();
  } else {
    await connectSocial(socialProvider);
  }
}

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-logo/styles.js
var styles_default = css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-logo/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiLogo = class WuiLogo2 extends LitElement {
  constructor() {
    super(...arguments);
    this.logo = "google";
  }
  render() {
    return html`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `;
  }
};
WuiLogo.styles = [resetStyles, styles_default];
__decorate([
  property()
], WuiLogo.prototype, "logo", void 0);
WuiLogo = __decorate([
  customElement("wui-logo")
], WuiLogo);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-social/styles.js
var styles_default2 = css`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-social/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiListSocial = class WuiListSocial2 extends LitElement {
  constructor() {
    super(...arguments);
    this.logo = "google";
    this.name = "Continue with google";
    this.align = "left";
    this.disabled = false;
  }
  render() {
    return html`
      <button ?disabled=${this.disabled} tabindex=${ifDefined(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `;
  }
  templatePlacement() {
    if (this.align === "center") {
      return html` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`;
    }
    return null;
  }
};
WuiListSocial.styles = [resetStyles, elementStyles, styles_default2];
__decorate2([
  property()
], WuiListSocial.prototype, "logo", void 0);
__decorate2([
  property()
], WuiListSocial.prototype, "name", void 0);
__decorate2([
  property()
], WuiListSocial.prototype, "align", void 0);
__decorate2([
  property()
], WuiListSocial.prototype, "tabIdx", void 0);
__decorate2([
  property({ type: Boolean })
], WuiListSocial.prototype, "disabled", void 0);
WuiListSocial = __decorate2([
  customElement("wui-list-social")
], WuiListSocial);

export {
  executeSocialLogin
};
//# sourceMappingURL=chunk-6OAFNN5J.js.map
