import {
  ifDefined
} from "./chunk-WK4LCREZ.js";
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
  ChainController,
  CoreHelperUtil,
  DateUtil,
  EventsController,
  OptionsController,
  RouterController,
  TransactionUtil,
  TransactionsController,
  W3mFrameRpcConstants,
  customElement,
  resetStyles
} from "./chunk-ETM4QMGY.js";
import {
  LitElement,
  css,
  html
} from "./chunk-QK2VKFPU.js";

// node_modules/@reown/appkit-ui/dist/esm/src/utils/TypeUtil.js
var TransactionTypePastTense;
(function(TransactionTypePastTense2) {
  TransactionTypePastTense2["approve"] = "approved";
  TransactionTypePastTense2["bought"] = "bought";
  TransactionTypePastTense2["borrow"] = "borrowed";
  TransactionTypePastTense2["burn"] = "burnt";
  TransactionTypePastTense2["cancel"] = "canceled";
  TransactionTypePastTense2["claim"] = "claimed";
  TransactionTypePastTense2["deploy"] = "deployed";
  TransactionTypePastTense2["deposit"] = "deposited";
  TransactionTypePastTense2["execute"] = "executed";
  TransactionTypePastTense2["mint"] = "minted";
  TransactionTypePastTense2["receive"] = "received";
  TransactionTypePastTense2["repay"] = "repaid";
  TransactionTypePastTense2["send"] = "sent";
  TransactionTypePastTense2["sell"] = "sold";
  TransactionTypePastTense2["stake"] = "staked";
  TransactionTypePastTense2["trade"] = "swapped";
  TransactionTypePastTense2["unstake"] = "unstaked";
  TransactionTypePastTense2["withdraw"] = "withdrawn";
})(TransactionTypePastTense || (TransactionTypePastTense = {}));

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-transaction-visual/styles.js
var styles_default = css`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-transaction-visual/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiTransactionVisual = class WuiTransactionVisual2 extends LitElement {
  constructor() {
    super(...arguments);
    this.images = [];
    this.secondImage = {
      type: void 0,
      url: ""
    };
  }
  render() {
    const [firstImage, secondImage] = this.images;
    const isLeftNFT = (firstImage == null ? void 0 : firstImage.type) === "NFT";
    const isRightNFT = (secondImage == null ? void 0 : secondImage.url) ? secondImage.type === "NFT" : isLeftNFT;
    const leftRadius = isLeftNFT ? "var(--wui-border-radius-xxs)" : "var(--wui-border-radius-s)";
    const rightRadius = isRightNFT ? "var(--wui-border-radius-xxs)" : "var(--wui-border-radius-s)";
    this.style.cssText = `
    --local-left-border-radius: ${leftRadius};
    --local-right-border-radius: ${rightRadius};
    `;
    return html`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`;
  }
  templateVisual() {
    const [firstImage, secondImage] = this.images;
    const firstImageType = firstImage == null ? void 0 : firstImage.type;
    const haveTwoImages = this.images.length === 2;
    if (haveTwoImages && ((firstImage == null ? void 0 : firstImage.url) || (secondImage == null ? void 0 : secondImage.url))) {
      return html`<div class="swap-images-container">
        ${(firstImage == null ? void 0 : firstImage.url) ? html`<wui-image src=${firstImage.url} alt="Transaction image"></wui-image>` : null}
        ${(secondImage == null ? void 0 : secondImage.url) ? html`<wui-image src=${secondImage.url} alt="Transaction image"></wui-image>` : null}
      </div>`;
    } else if (firstImage == null ? void 0 : firstImage.url) {
      return html`<wui-image src=${firstImage.url} alt="Transaction image"></wui-image>`;
    } else if (firstImageType === "NFT") {
      return html`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`;
    }
    return html`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`;
  }
  templateIcon() {
    let color = "accent-100";
    let icon = void 0;
    icon = this.getIcon();
    if (this.status) {
      color = this.getStatusColor();
    }
    if (!icon) {
      return null;
    }
    return html`
      <wui-icon-box
        size="xxs"
        iconColor=${color}
        backgroundColor=${color}
        background="opaque"
        icon=${icon}
        ?border=${true}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `;
  }
  getDirectionIcon() {
    switch (this.direction) {
      case "in":
        return "arrowBottom";
      case "out":
        return "arrowTop";
      default:
        return void 0;
    }
  }
  getIcon() {
    if (this.onlyDirectionIcon) {
      return this.getDirectionIcon();
    }
    if (this.type === "trade") {
      return "swapHorizontalBold";
    } else if (this.type === "approve") {
      return "checkmark";
    } else if (this.type === "cancel") {
      return "close";
    }
    return this.getDirectionIcon();
  }
  getStatusColor() {
    switch (this.status) {
      case "confirmed":
        return "success-100";
      case "failed":
        return "error-100";
      case "pending":
        return "inverse-100";
      default:
        return "accent-100";
    }
  }
};
WuiTransactionVisual.styles = [styles_default];
__decorate([
  property2()
], WuiTransactionVisual.prototype, "type", void 0);
__decorate([
  property2()
], WuiTransactionVisual.prototype, "status", void 0);
__decorate([
  property2()
], WuiTransactionVisual.prototype, "direction", void 0);
__decorate([
  property2({ type: Boolean })
], WuiTransactionVisual.prototype, "onlyDirectionIcon", void 0);
__decorate([
  property2({ type: Array })
], WuiTransactionVisual.prototype, "images", void 0);
__decorate([
  property2({ type: Object })
], WuiTransactionVisual.prototype, "secondImage", void 0);
WuiTransactionVisual = __decorate([
  customElement("wui-transaction-visual")
], WuiTransactionVisual);

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-transaction-list-item/styles.js
var styles_default2 = css`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;

// node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-transaction-list-item/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WuiTransactionListItem = class WuiTransactionListItem2 extends LitElement {
  constructor() {
    super(...arguments);
    this.type = "approve";
    this.onlyDirectionIcon = false;
    this.images = [];
    this.price = [];
    this.amount = [];
    this.symbol = [];
  }
  render() {
    return html`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${ifDefined(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${ifDefined(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${TransactionTypePastTense[this.type] || this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `;
  }
  templateDescription() {
    var _a;
    const description = (_a = this.descriptions) == null ? void 0 : _a[0];
    return description ? html`
          <wui-text variant="small-500" color="fg-200">
            <span>${description}</span>
          </wui-text>
        ` : null;
  }
  templateSecondDescription() {
    var _a;
    const description = (_a = this.descriptions) == null ? void 0 : _a[1];
    return description ? html`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${description}</span>
          </wui-text>
        ` : null;
  }
};
WuiTransactionListItem.styles = [resetStyles, styles_default2];
__decorate2([
  property2()
], WuiTransactionListItem.prototype, "type", void 0);
__decorate2([
  property2({ type: Array })
], WuiTransactionListItem.prototype, "descriptions", void 0);
__decorate2([
  property2()
], WuiTransactionListItem.prototype, "date", void 0);
__decorate2([
  property2({ type: Boolean })
], WuiTransactionListItem.prototype, "onlyDirectionIcon", void 0);
__decorate2([
  property2()
], WuiTransactionListItem.prototype, "status", void 0);
__decorate2([
  property2()
], WuiTransactionListItem.prototype, "direction", void 0);
__decorate2([
  property2({ type: Array })
], WuiTransactionListItem.prototype, "images", void 0);
__decorate2([
  property2({ type: Array })
], WuiTransactionListItem.prototype, "price", void 0);
__decorate2([
  property2({ type: Array })
], WuiTransactionListItem.prototype, "amount", void 0);
__decorate2([
  property2({ type: Array })
], WuiTransactionListItem.prototype, "symbol", void 0);
WuiTransactionListItem = __decorate2([
  customElement("wui-transaction-list-item")
], WuiTransactionListItem);

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-activity-list/styles.js
var styles_default3 = css2`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
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

  .emptyContainer {
    height: 100%;
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-activity-list/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAGINATOR_ID = "last-transaction";
var LOADING_ITEM_COUNT = 7;
var W3mActivityList = class W3mActivityList2 extends LitElement2 {
  constructor() {
    super();
    this.unsubscribe = [];
    this.paginationObserver = void 0;
    this.page = "activity";
    this.caipAddress = ChainController.state.activeCaipAddress;
    this.transactionsByYear = TransactionsController.state.transactionsByYear;
    this.loading = TransactionsController.state.loading;
    this.empty = TransactionsController.state.empty;
    this.next = TransactionsController.state.next;
    TransactionsController.clearCursor();
    this.unsubscribe.push(...[
      ChainController.subscribeKey("activeCaipAddress", (val) => {
        if (val) {
          if (this.caipAddress !== val) {
            TransactionsController.resetTransactions();
            TransactionsController.fetchTransactions(val);
          }
        }
        this.caipAddress = val;
      }),
      ChainController.subscribeKey("activeCaipNetwork", () => {
        this.updateTransactionView();
      }),
      TransactionsController.subscribe((val) => {
        this.transactionsByYear = val.transactionsByYear;
        this.loading = val.loading;
        this.empty = val.empty;
        this.next = val.next;
      })
    ]);
  }
  firstUpdated() {
    this.updateTransactionView();
    this.createPaginationObserver();
  }
  updated() {
    this.setPaginationObserver();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html2` ${this.empty ? null : this.templateTransactionsByYear()}
    ${this.loading ? this.templateLoading() : null}
    ${!this.loading && this.empty ? this.templateEmpty() : null}`;
  }
  updateTransactionView() {
    var _a;
    const currentNetwork = (_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId;
    const lastNetworkInView = TransactionsController.state.lastNetworkInView;
    if (lastNetworkInView !== currentNetwork) {
      TransactionsController.resetTransactions();
      if (this.caipAddress) {
        TransactionsController.fetchTransactions(CoreHelperUtil.getPlainAddress(this.caipAddress));
      }
    }
    TransactionsController.setLastNetworkInView(currentNetwork);
  }
  templateTransactionsByYear() {
    const sortedYearKeys = Object.keys(this.transactionsByYear).sort().reverse();
    return sortedYearKeys.map((year) => {
      const yearInt = parseInt(year, 10);
      const sortedMonthIndexes = new Array(12).fill(null).map((_, idx) => {
        var _a;
        const groupTitle = TransactionUtil.getTransactionGroupTitle(yearInt, idx);
        const transactions = (_a = this.transactionsByYear[yearInt]) == null ? void 0 : _a[idx];
        return {
          groupTitle,
          transactions
        };
      }).filter(({ transactions }) => transactions).reverse();
      return sortedMonthIndexes.map(({ groupTitle, transactions }, index) => {
        const isLastGroup = index === sortedMonthIndexes.length - 1;
        if (!transactions) {
          return null;
        }
        return html2`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${isLastGroup ? "true" : "false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs", "s", "s", "s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${groupTitle}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(transactions, isLastGroup)}
            </wui-flex>
          </wui-flex>
        `;
      });
    });
  }
  templateRenderTransaction(transaction, isLastTransaction) {
    const { date, descriptions, direction, isAllNFT, images, status, transfers, type } = this.getTransactionListItemProps(transaction);
    const haveMultipleTransfers = (transfers == null ? void 0 : transfers.length) > 1;
    const haveTwoTransfers = (transfers == null ? void 0 : transfers.length) === 2;
    if (haveTwoTransfers && !isAllNFT) {
      return html2`
        <wui-transaction-list-item
          date=${date}
          .direction=${direction}
          id=${isLastTransaction && this.next ? PAGINATOR_ID : ""}
          status=${status}
          type=${type}
          .images=${images}
          .descriptions=${descriptions}
        ></wui-transaction-list-item>
      `;
    }
    if (haveMultipleTransfers) {
      return transfers.map((transfer, index) => {
        const description = TransactionUtil.getTransferDescription(transfer);
        const isLastTransfer = isLastTransaction && index === transfers.length - 1;
        return html2` <wui-transaction-list-item
          date=${date}
          direction=${transfer.direction}
          id=${isLastTransfer && this.next ? PAGINATOR_ID : ""}
          status=${status}
          type=${type}
          .onlyDirectionIcon=${true}
          .images=${[images[index]]}
          .descriptions=${[description]}
        ></wui-transaction-list-item>`;
      });
    }
    return html2`
      <wui-transaction-list-item
        date=${date}
        .direction=${direction}
        id=${isLastTransaction && this.next ? PAGINATOR_ID : ""}
        status=${status}
        type=${type}
        .images=${images}
        .descriptions=${descriptions}
      ></wui-transaction-list-item>
    `;
  }
  templateTransactions(transactions, isLastGroup) {
    return transactions.map((transaction, index) => {
      const isLastTransaction = isLastGroup && index === transactions.length - 1;
      return html2`${this.templateRenderTransaction(transaction, isLastTransaction)}`;
    });
  }
  emptyStateActivity() {
    return html2`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl", "xl", "3xl", "xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${true}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`;
  }
  emptyStateAccount() {
    return html2`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
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
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`;
  }
  templateEmpty() {
    if (this.page === "account") {
      return html2`${this.emptyStateAccount()}`;
    }
    return html2`${this.emptyStateActivity()}`;
  }
  templateLoading() {
    if (this.page === "activity") {
      return Array(LOADING_ITEM_COUNT).fill(html2` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((item) => item);
    }
    return null;
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
  createPaginationObserver() {
    const { projectId } = OptionsController.state;
    this.paginationObserver = new IntersectionObserver(([element]) => {
      if ((element == null ? void 0 : element.isIntersecting) && !this.loading) {
        TransactionsController.fetchTransactions(CoreHelperUtil.getPlainAddress(this.caipAddress));
        EventsController.sendEvent({
          type: "track",
          event: "LOAD_MORE_TRANSACTIONS",
          properties: {
            address: CoreHelperUtil.getPlainAddress(this.caipAddress),
            projectId,
            cursor: this.next,
            isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
          }
        });
      }
    }, {});
    this.setPaginationObserver();
  }
  setPaginationObserver() {
    var _a, _b, _c;
    (_a = this.paginationObserver) == null ? void 0 : _a.disconnect();
    const lastItem = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector(`#${PAGINATOR_ID}`);
    if (lastItem) {
      (_c = this.paginationObserver) == null ? void 0 : _c.observe(lastItem);
    }
  }
  getTransactionListItemProps(transaction) {
    var _a, _b, _c, _d, _e;
    const date = DateUtil.formatDate((_a = transaction == null ? void 0 : transaction.metadata) == null ? void 0 : _a.minedAt);
    const descriptions = TransactionUtil.getTransactionDescriptions(transaction);
    const transfers = transaction == null ? void 0 : transaction.transfers;
    const transfer = (_b = transaction == null ? void 0 : transaction.transfers) == null ? void 0 : _b[0];
    const isAllNFT = Boolean(transfer) && ((_c = transaction == null ? void 0 : transaction.transfers) == null ? void 0 : _c.every((item) => Boolean(item.nft_info)));
    const images = TransactionUtil.getTransactionImages(transfers);
    return {
      date,
      direction: transfer == null ? void 0 : transfer.direction,
      descriptions,
      isAllNFT,
      images,
      status: (_d = transaction.metadata) == null ? void 0 : _d.status,
      transfers,
      type: (_e = transaction.metadata) == null ? void 0 : _e.operationType
    };
  }
};
W3mActivityList.styles = styles_default3;
__decorate3([
  property()
], W3mActivityList.prototype, "page", void 0);
__decorate3([
  state()
], W3mActivityList.prototype, "caipAddress", void 0);
__decorate3([
  state()
], W3mActivityList.prototype, "transactionsByYear", void 0);
__decorate3([
  state()
], W3mActivityList.prototype, "loading", void 0);
__decorate3([
  state()
], W3mActivityList.prototype, "empty", void 0);
__decorate3([
  state()
], W3mActivityList.prototype, "next", void 0);
W3mActivityList = __decorate3([
  customElement("w3m-activity-list")
], W3mActivityList);
//# sourceMappingURL=chunk-XTTU3VKH.js.map
