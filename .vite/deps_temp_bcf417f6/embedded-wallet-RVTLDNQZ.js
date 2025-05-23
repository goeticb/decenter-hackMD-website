import "./chunk-KIC3SNNO.js";
import "./chunk-YVOFMANN.js";
import "./chunk-6QOWD2HI.js";
import {
  createRef,
  ref
} from "./chunk-JSFERIOH.js";
import "./chunk-WHGGRX5P.js";
import "./chunk-BHIBQBXR.js";
import "./chunk-FS3CSUOV.js";
import "./chunk-HZGWUS6I.js";
import {
  ifDefined
} from "./chunk-WK4LCREZ.js";
import "./chunk-UJR4CR2X.js";
import "./chunk-QACLXGLR.js";
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
  AccountController,
  ConnectorController,
  ConstantsUtil,
  ConstantsUtil2,
  CoreHelperUtil,
  EnsController,
  EventsController,
  ModalController,
  NavigationUtil,
  RouterController,
  SnackController,
  ThemeController,
  W3mFrameRpcConstants,
  customElement,
  getW3mThemeVariables,
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

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-approve-transaction-view/styles.js
var styles_default = css2`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-approve-transaction-view/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAGE_HEIGHT = 600;
var PAGE_WIDTH = 360;
var HEADER_HEIGHT = 64;
var W3mApproveTransactionView = class W3mApproveTransactionView2 extends LitElement2 {
  constructor() {
    super();
    this.bodyObserver = void 0;
    this.unsubscribe = [];
    this.iframe = document.getElementById("w3m-iframe");
    this.ready = false;
    this.unsubscribe.push(...[
      ModalController.subscribeKey("open", (isOpen) => {
        if (!isOpen) {
          this.onHideIframe();
          RouterController.popTransactionStack();
        }
      }),
      ModalController.subscribeKey("shake", (val) => {
        if (val) {
          this.iframe.style.animation = `w3m-shake 500ms var(--wui-ease-out-power-2)`;
        } else {
          this.iframe.style.animation = "none";
        }
      })
    ]);
  }
  disconnectedCallback() {
    var _a;
    this.onHideIframe();
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    (_a = this.bodyObserver) == null ? void 0 : _a.unobserve(window.document.body);
  }
  async firstUpdated() {
    var _a;
    await this.syncTheme();
    this.iframe.style.display = "block";
    const container = (_a = this == null ? void 0 : this.renderRoot) == null ? void 0 : _a.querySelector("div");
    this.bodyObserver = new ResizeObserver((entries) => {
      var _a2, _b;
      const contentBoxSize = (_a2 = entries == null ? void 0 : entries[0]) == null ? void 0 : _a2.contentBoxSize;
      const width = (_b = contentBoxSize == null ? void 0 : contentBoxSize[0]) == null ? void 0 : _b.inlineSize;
      this.iframe.style.height = `${PAGE_HEIGHT}px`;
      container.style.height = `${PAGE_HEIGHT}px`;
      if (width && width <= 430) {
        this.iframe.style.width = "100%";
        this.iframe.style.left = "0px";
        this.iframe.style.bottom = "0px";
        this.iframe.style.top = "unset";
      } else {
        this.iframe.style.width = `${PAGE_WIDTH}px`;
        this.iframe.style.left = `calc(50% - ${PAGE_WIDTH / 2}px)`;
        this.iframe.style.top = `calc(50% - ${PAGE_HEIGHT / 2}px + ${HEADER_HEIGHT / 2}px)`;
        this.iframe.style.bottom = "unset";
      }
      this.ready = true;
      this.onShowIframe();
    });
    this.bodyObserver.observe(window.document.body);
  }
  render() {
    return html2`<div data-ready=${this.ready} id="w3m-frame-container"></div>`;
  }
  onShowIframe() {
    const isMobile = window.innerWidth <= 430;
    this.iframe.style.animation = isMobile ? "w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)" : "w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)";
  }
  onHideIframe() {
    this.iframe.style.display = "none";
    this.iframe.style.animation = "w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)";
  }
  async syncTheme() {
    const authConnector = ConnectorController.getAuthConnector();
    if (authConnector) {
      const themeMode = ThemeController.getSnapshot().themeMode;
      const themeVariables = ThemeController.getSnapshot().themeVariables;
      await authConnector.provider.syncTheme({
        themeVariables,
        w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
      });
    }
  }
};
W3mApproveTransactionView.styles = styles_default;
__decorate([
  state()
], W3mApproveTransactionView.prototype, "ready", void 0);
W3mApproveTransactionView = __decorate([
  customElement("w3m-approve-transaction-view")
], W3mApproveTransactionView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-upgrade-wallet-view/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mUpgradeWalletView = class W3mUpgradeWalletView2 extends LitElement2 {
  render() {
    return html2`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${ConstantsUtil2.SECURE_SITE_DASHBOARD}
          imageSrc=${ConstantsUtil2.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `;
  }
};
W3mUpgradeWalletView = __decorate2([
  customElement("w3m-upgrade-wallet-view")
], W3mUpgradeWalletView);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-ens-input/styles.js
var styles_default2 = css`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-ens-input/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiEnsInput = class WuiEnsInput2 extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.loading = false;
  }
  render() {
    return html`
      <wui-input-text
        value=${ifDefined(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value || ""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `;
  }
  baseNameTemplate() {
    return html`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${ConstantsUtil.WC_NAME_SUFFIX}
    </wui-text>`;
  }
  loadingTemplate() {
    return this.loading ? html`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>` : null;
  }
  errorTemplate() {
    if (this.errorMessage) {
      return html`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`;
    }
    return null;
  }
};
WuiEnsInput.styles = [resetStyles, styles_default2];
__decorate3([
  property2()
], WuiEnsInput.prototype, "errorMessage", void 0);
__decorate3([
  property2({ type: Boolean })
], WuiEnsInput.prototype, "disabled", void 0);
__decorate3([
  property2()
], WuiEnsInput.prototype, "value", void 0);
__decorate3([
  property2({ type: Boolean })
], WuiEnsInput.prototype, "loading", void 0);
WuiEnsInput = __decorate3([
  customElement("wui-ens-input")
], WuiEnsInput);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-register-account-name-view/styles.js
var styles_default3 = css2`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-register-account-name-view/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mRegisterAccountNameView = class W3mRegisterAccountNameView2 extends LitElement2 {
  constructor() {
    super();
    this.formRef = createRef();
    this.usubscribe = [];
    this.name = "";
    this.error = "";
    this.loading = EnsController.state.loading;
    this.suggestions = EnsController.state.suggestions;
    this.registered = false;
    this.profileName = AccountController.state.profileName;
    this.onDebouncedNameInputChange = CoreHelperUtil.debounce((value) => {
      if (EnsController.validateName(value)) {
        this.error = "";
        this.name = value;
        EnsController.getSuggestions(value);
        EnsController.isNameRegistered(value).then((registered) => {
          this.registered = registered;
        });
      } else if (value.length < 4) {
        this.error = "Name must be at least 4 characters long";
      } else {
        this.error = "Can only contain letters, numbers and - characters";
      }
    });
    this.usubscribe.push(...[
      EnsController.subscribe((val) => {
        this.suggestions = val.suggestions;
        this.loading = val.loading;
      }),
      AccountController.subscribeKey("profileName", (val) => {
        this.profileName = val;
        if (val) {
          this.error = "You already own a name";
        }
      })
    ]);
  }
  firstUpdated() {
    var _a;
    (_a = this.formRef.value) == null ? void 0 : _a.addEventListener("keydown", this.onEnterKey.bind(this));
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    this.usubscribe.forEach((unsub) => unsub());
    (_a = this.formRef.value) == null ? void 0 : _a.removeEventListener("keydown", this.onEnterKey.bind(this));
  }
  render() {
    return html2`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0", "s", "m", "s"]}
      >
        <form ${ref(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `;
  }
  submitButtonTemplate() {
    const showSubmit = this.isAllowedToSubmit();
    return showSubmit ? html2`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        ` : null;
  }
  onSelectSuggestion(name) {
    return () => {
      this.name = name;
      this.registered = false;
      this.requestUpdate();
    };
  }
  onNameInputChange(event) {
    this.onDebouncedNameInputChange(event.detail);
  }
  nameSuggestionTagTemplate() {
    if (this.loading) {
      return html2`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`;
    }
    return this.registered ? html2`<wui-tag variant="shade" size="lg">Registered</wui-tag>` : html2`<wui-tag variant="success" size="lg">Available</wui-tag>`;
  }
  templateSuggestions() {
    if (!this.name || this.name.length < 4 || this.error) {
      return null;
    }
    const suggestions = this.registered ? this.suggestions.filter((s) => s.name !== this.name) : [];
    return html2`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m", "m", "m", "m"]}
        justifyContent="space-between"
        class="suggestion"
        @click=${this.onSubmitName.bind(this)}
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${suggestions.map((suggestion) => this.availableNameTemplate(suggestion.name))}
    </wui-flex>`;
  }
  availableNameTemplate(suggestion) {
    return html2` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m", "m", "m", "m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(suggestion)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${suggestion}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`;
  }
  isAllowedToSubmit() {
    return !this.loading && !this.registered && !this.error && !this.profileName && EnsController.validateName(this.name);
  }
  async onSubmitName() {
    try {
      if (!this.isAllowedToSubmit()) {
        return;
      }
      const ensName = `${this.name}${ConstantsUtil.WC_NAME_SUFFIX}`;
      EventsController.sendEvent({
        type: "track",
        event: "REGISTER_NAME_INITIATED",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          ensName
        }
      });
      await EnsController.registerName(ensName);
      EventsController.sendEvent({
        type: "track",
        event: "REGISTER_NAME_SUCCESS",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          ensName
        }
      });
    } catch (error) {
      SnackController.showError(error.message);
      EventsController.sendEvent({
        type: "track",
        event: "REGISTER_NAME_ERROR",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          ensName: `${this.name}${ConstantsUtil.WC_NAME_SUFFIX}`,
          error: (error == null ? void 0 : error.message) || "Unknown error"
        }
      });
    }
  }
  onEnterKey(event) {
    if (event.key === "Enter" && this.isAllowedToSubmit()) {
      this.onSubmitName();
    }
  }
};
W3mRegisterAccountNameView.styles = styles_default3;
__decorate4([
  property()
], W3mRegisterAccountNameView.prototype, "errorMessage", void 0);
__decorate4([
  state()
], W3mRegisterAccountNameView.prototype, "name", void 0);
__decorate4([
  state()
], W3mRegisterAccountNameView.prototype, "error", void 0);
__decorate4([
  state()
], W3mRegisterAccountNameView.prototype, "loading", void 0);
__decorate4([
  state()
], W3mRegisterAccountNameView.prototype, "suggestions", void 0);
__decorate4([
  state()
], W3mRegisterAccountNameView.prototype, "registered", void 0);
__decorate4([
  state()
], W3mRegisterAccountNameView.prototype, "profileName", void 0);
W3mRegisterAccountNameView = __decorate4([
  customElement("w3m-register-account-name-view")
], W3mRegisterAccountNameView);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-register-account-name-success-view/styles.js
var styles_default4 = css2`
  .continue-button-container {
    width: 100%;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-register-account-name-success-view/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mRegisterAccountNameSuccess = class W3mRegisterAccountNameSuccess2 extends LitElement2 {
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
          Learn more
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
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
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
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`;
  }
  redirectToAccount() {
    RouterController.replace("Account");
  }
};
W3mRegisterAccountNameSuccess.styles = styles_default4;
W3mRegisterAccountNameSuccess = __decorate5([
  customElement("w3m-register-account-name-success-view")
], W3mRegisterAccountNameSuccess);
export {
  W3mApproveTransactionView,
  W3mRegisterAccountNameSuccess,
  W3mRegisterAccountNameView,
  W3mUpgradeWalletView
};
//# sourceMappingURL=embedded-wallet-RVTLDNQZ.js.map
