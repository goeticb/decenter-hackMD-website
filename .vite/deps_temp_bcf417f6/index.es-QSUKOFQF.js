import {
  LruMap,
  checksumAddress,
  defineFormatter,
  hexToBigInt,
  hexToNumber,
  isHex,
  keccak256,
  numberToHex,
  toHex
} from "./chunk-OQLYPXPM.js";
import {
  A,
  C,
  E,
  IEvents,
  Po,
  Qe,
  Qo,
  concat,
  detect,
  esm_default,
  esm_exports,
  f,
  f2,
  formatJsonRpcError,
  formatJsonRpcRequest,
  formatJsonRpcResult,
  fromString,
  getBigIntRpcId,
  h,
  i,
  import_pino,
  isJsonRpcError,
  isJsonRpcRequest,
  isJsonRpcResponse,
  isJsonRpcResult,
  k,
  o,
  payloadId,
  r,
  require_cjs,
  require_cjs2,
  require_cjs3,
  safeJsonParse,
  safeJsonStringify,
  sn,
  toString,
  y
} from "./chunk-VU636JVZ.js";
import {
  require_events
} from "./chunk-C7K4MEED.js";
import "./chunk-U54NEF6Y.js";
import "./chunk-BONTQTVA.js";
import "./chunk-6BSB3OB7.js";
import {
  keccak_256
} from "./chunk-GQ2L72PW.js";
import "./chunk-D5XZ67SR.js";
import {
  __toESM
} from "./chunk-64NT3AJW.js";

// node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var import_events6 = __toESM(require_events());

// node_modules/@walletconnect/utils/dist/index.es.js
var import_time = __toESM(require_cjs());
var import_window_getters = __toESM(require_cjs2());
var import_window_metadata = __toESM(require_cjs3());

// node_modules/@walletconnect/utils/node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js
function publicKeyToAddress(publicKey) {
  const address = keccak256(`0x${publicKey.substring(4)}`).substring(26);
  return checksumAddress(`0x${address}`);
}

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/signature/recoverPublicKey.js
async function recoverPublicKey({ hash, signature }) {
  const hashHex = isHex(hash) ? hash : toHex(hash);
  const { secp256k1: secp256k12 } = await import("./secp256k1-R65TYKDD.js");
  const signature_ = (() => {
    if (typeof signature === "object" && "r" in signature && "s" in signature) {
      const { r: r2, s, v: v5, yParity } = signature;
      const yParityOrV2 = Number(yParity ?? v5);
      const recoveryBit2 = toRecoveryBit(yParityOrV2);
      return new secp256k12.Signature(hexToBigInt(r2), hexToBigInt(s)).addRecoveryBit(recoveryBit2);
    }
    const signatureHex = isHex(signature) ? signature : toHex(signature);
    const yParityOrV = hexToNumber(`0x${signatureHex.slice(130)}`);
    const recoveryBit = toRecoveryBit(yParityOrV);
    return secp256k12.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
  })();
  const publicKey = signature_.recoverPublicKey(hashHex.substring(2)).toHex(false);
  return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
  if (yParityOrV === 0 || yParityOrV === 1)
    return yParityOrV;
  if (yParityOrV === 27)
    return 0;
  if (yParityOrV === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/signature/recoverAddress.js
async function recoverAddress({ hash, signature }) {
  return publicKeyToAddress(await recoverPublicKey({ hash, signature }));
}

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/formatters/transaction.js
var transactionType = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function formatTransaction(transaction) {
  const transaction_ = {
    ...transaction,
    blockHash: transaction.blockHash ? transaction.blockHash : null,
    blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
    chainId: transaction.chainId ? hexToNumber(transaction.chainId) : void 0,
    gas: transaction.gas ? BigInt(transaction.gas) : void 0,
    gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : void 0,
    maxFeePerBlobGas: transaction.maxFeePerBlobGas ? BigInt(transaction.maxFeePerBlobGas) : void 0,
    maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : void 0,
    nonce: transaction.nonce ? hexToNumber(transaction.nonce) : void 0,
    to: transaction.to ? transaction.to : null,
    transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
    type: transaction.type ? transactionType[transaction.type] : void 0,
    typeHex: transaction.type ? transaction.type : void 0,
    value: transaction.value ? BigInt(transaction.value) : void 0,
    v: transaction.v ? BigInt(transaction.v) : void 0
  };
  if (transaction.authorizationList)
    transaction_.authorizationList = formatAuthorizationList(transaction.authorizationList);
  transaction_.yParity = (() => {
    if (transaction.yParity)
      return Number(transaction.yParity);
    if (typeof transaction_.v === "bigint") {
      if (transaction_.v === 0n || transaction_.v === 27n)
        return 0;
      if (transaction_.v === 1n || transaction_.v === 28n)
        return 1;
      if (transaction_.v >= 35n)
        return transaction_.v % 2n === 0n ? 1 : 0;
    }
    return void 0;
  })();
  if (transaction_.type === "legacy") {
    delete transaction_.accessList;
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
    delete transaction_.yParity;
  }
  if (transaction_.type === "eip2930") {
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
  }
  if (transaction_.type === "eip1559") {
    delete transaction_.maxFeePerBlobGas;
  }
  return transaction_;
}
var defineTransaction = defineFormatter("transaction", formatTransaction);
function formatAuthorizationList(authorizationList) {
  return authorizationList.map((authorization) => ({
    contractAddress: authorization.address,
    chainId: Number(authorization.chainId),
    nonce: Number(authorization.nonce),
    r: authorization.r,
    s: authorization.s,
    yParity: Number(authorization.yParity)
  }));
}

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/formatters/block.js
function formatBlock(block) {
  const transactions = (block.transactions ?? []).map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return formatTransaction(transaction);
  });
  return {
    ...block,
    baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
    blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : void 0,
    difficulty: block.difficulty ? BigInt(block.difficulty) : void 0,
    excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : void 0,
    gasLimit: block.gasLimit ? BigInt(block.gasLimit) : void 0,
    gasUsed: block.gasUsed ? BigInt(block.gasUsed) : void 0,
    hash: block.hash ? block.hash : null,
    logsBloom: block.logsBloom ? block.logsBloom : null,
    nonce: block.nonce ? block.nonce : null,
    number: block.number ? BigInt(block.number) : null,
    size: block.size ? BigInt(block.size) : void 0,
    timestamp: block.timestamp ? BigInt(block.timestamp) : void 0,
    transactions,
    totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
  };
}
var defineBlock = defineFormatter("block", formatBlock);

// node_modules/@walletconnect/utils/node_modules/viem/_esm/actions/public/getTransactionCount.js
async function getTransactionCount(client, { address, blockTag = "latest", blockNumber }) {
  const count = await client.request({
    method: "eth_getTransactionCount",
    params: [address, blockNumber ? numberToHex(blockNumber) : blockTag]
  }, { dedupe: Boolean(blockNumber) });
  return hexToNumber(count);
}

// node_modules/@walletconnect/utils/node_modules/viem/_esm/constants/blob.js
var blobsPerTransaction = 6;
var bytesPerFieldElement = 32;
var fieldElementsPerBlob = 4096;
var bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
var maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * fieldElementsPerBlob * blobsPerTransaction;

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/formatters/log.js
function formatLog(log, { args, eventName } = {}) {
  return {
    ...log,
    blockHash: log.blockHash ? log.blockHash : null,
    blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
    logIndex: log.logIndex ? Number(log.logIndex) : null,
    transactionHash: log.transactionHash ? log.transactionHash : null,
    transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
    ...eventName ? { args, eventName } : {}
  };
}

// node_modules/@walletconnect/utils/node_modules/viem/_esm/actions/wallet/sendTransaction.js
var supportsWalletNamespace = new LruMap(128);

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/promise/withDedupe.js
var promiseCache = new LruMap(8192);

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/rpc/id.js
function createIdStore() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    }
  };
}
var idCache = createIdStore();

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/formatters/transactionReceipt.js
var receiptStatuses = {
  "0x0": "reverted",
  "0x1": "success"
};
function formatTransactionReceipt(transactionReceipt) {
  const receipt = {
    ...transactionReceipt,
    blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
    contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
    cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
    effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
    gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
    logs: transactionReceipt.logs ? transactionReceipt.logs.map((log) => formatLog(log)) : null,
    to: transactionReceipt.to ? transactionReceipt.to : null,
    transactionIndex: transactionReceipt.transactionIndex ? hexToNumber(transactionReceipt.transactionIndex) : null,
    status: transactionReceipt.status ? receiptStatuses[transactionReceipt.status] : null,
    type: transactionReceipt.type ? transactionType[transactionReceipt.type] || transactionReceipt.type : null
  };
  if (transactionReceipt.blobGasPrice)
    receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
  if (transactionReceipt.blobGasUsed)
    receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
  return receipt;
}
var defineTransactionReceipt = defineFormatter("transactionReceipt", formatTransactionReceipt);

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/nonceManager.js
function createNonceManager(parameters) {
  const { source } = parameters;
  const deltaMap = /* @__PURE__ */ new Map();
  const nonceMap = new LruMap(8192);
  const promiseMap = /* @__PURE__ */ new Map();
  const getKey = ({ address, chainId }) => `${address}.${chainId}`;
  return {
    async consume({ address, chainId, client }) {
      const key = getKey({ address, chainId });
      const promise = this.get({ address, chainId, client });
      this.increment({ address, chainId });
      const nonce = await promise;
      await source.set({ address, chainId }, nonce);
      nonceMap.set(key, nonce);
      return nonce;
    },
    async increment({ address, chainId }) {
      const key = getKey({ address, chainId });
      const delta = deltaMap.get(key) ?? 0;
      deltaMap.set(key, delta + 1);
    },
    async get({ address, chainId, client }) {
      const key = getKey({ address, chainId });
      let promise = promiseMap.get(key);
      if (!promise) {
        promise = (async () => {
          try {
            const nonce = await source.get({ address, chainId, client });
            const previousNonce = nonceMap.get(key) ?? 0;
            if (previousNonce > 0 && nonce <= previousNonce)
              return previousNonce + 1;
            nonceMap.delete(key);
            return nonce;
          } finally {
            this.reset({ address, chainId });
          }
        })();
        promiseMap.set(key, promise);
      }
      const delta = deltaMap.get(key) ?? 0;
      return delta + await promise;
    },
    reset({ address, chainId }) {
      const key = getKey({ address, chainId });
      deltaMap.delete(key);
      promiseMap.delete(key);
    }
  };
}
function jsonRpc() {
  return {
    async get(parameters) {
      const { address, client } = parameters;
      return getTransactionCount(client, {
        address,
        blockTag: "pending"
      });
    },
    set() {
    }
  };
}
var nonceManager = createNonceManager({
  source: jsonRpc()
});

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/version.js
var version = "0.1.1";

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/errors.js
function getVersion() {
  return version;
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Errors.js
var BaseError2 = class _BaseError extends Error {
  constructor(shortMessage, options = {}) {
    const details = (() => {
      var _a;
      if (options.cause instanceof _BaseError) {
        if (options.cause.details)
          return options.cause.details;
        if (options.cause.shortMessage)
          return options.cause.shortMessage;
      }
      if ((_a = options.cause) == null ? void 0 : _a.message)
        return options.cause.message;
      return options.details;
    })();
    const docsPath = (() => {
      if (options.cause instanceof _BaseError)
        return options.cause.docsPath || options.docsPath;
      return options.docsPath;
    })();
    const docsBaseUrl = "https://oxlib.sh";
    const docs = `${docsBaseUrl}${docsPath ?? ""}`;
    const message = [
      shortMessage || "An error occurred.",
      ...options.metaMessages ? ["", ...options.metaMessages] : [],
      ...details || docsPath ? [
        "",
        details ? `Details: ${details}` : void 0,
        docsPath ? `See: ${docs}` : void 0
      ] : []
    ].filter((x3) => typeof x3 === "string").join("\n");
    super(message, options.cause ? { cause: options.cause } : void 0);
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shortMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BaseError"
    });
    Object.defineProperty(this, "version", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: `ox@${getVersion()}`
    });
    this.cause = options.cause;
    this.details = details;
    this.docs = docs;
    this.docsPath = docsPath;
    this.shortMessage = shortMessage;
  }
  walk(fn3) {
    return walk(this, fn3);
  }
};
function walk(err, fn3) {
  if (fn3 == null ? void 0 : fn3(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause)
    return walk(err.cause, fn3);
  return fn3 ? null : err;
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/bytes.js
function assertSize(bytes, size_) {
  if (size2(bytes) > size_)
    throw new SizeOverflowError({
      givenSize: size2(bytes),
      maxSize: size_
    });
}
var charCodeMap = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function pad2(bytes, options = {}) {
  const { dir, size: size4 = 32 } = options;
  if (size4 === 0)
    return bytes;
  if (bytes.length > size4)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size4,
      type: "Bytes"
    });
  const paddedBytes = new Uint8Array(size4);
  for (let i3 = 0; i3 < size4; i3++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i3 : size4 - i3 - 1] = bytes[padEnd ? i3 : bytes.length - i3 - 1];
  }
  return paddedBytes;
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/hex.js
function assertSize2(hex, size_) {
  if (size3(hex) > size_)
    throw new SizeOverflowError2({
      givenSize: size3(hex),
      maxSize: size_
    });
}
function pad3(hex_, options = {}) {
  const { dir, size: size4 = 32 } = options;
  if (size4 === 0)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size4 * 2)
    throw new SizeExceedsPaddingSizeError2({
      size: Math.ceil(hex.length / 2),
      targetSize: size4,
      type: "Hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size4 * 2, "0")}`;
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Bytes.js
var decoder = new TextDecoder();
var encoder = new TextEncoder();
function from(value) {
  if (value instanceof Uint8Array)
    return value;
  if (typeof value === "string")
    return fromHex2(value);
  return fromArray(value);
}
function fromArray(value) {
  return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function fromHex2(value, options = {}) {
  const { size: size4 } = options;
  let hex = value;
  if (size4) {
    assertSize2(value, size4);
    hex = padRight(value, size4);
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes = new Uint8Array(length);
  for (let index = 0, j2 = 0; index < length; index++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j2++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j2++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError2(`Invalid byte sequence ("${hexString[j2 - 2]}${hexString[j2 - 1]}" in "${hexString}").`);
    }
    bytes[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
function fromString2(value, options = {}) {
  const { size: size4 } = options;
  const bytes = encoder.encode(value);
  if (typeof size4 === "number") {
    assertSize(bytes, size4);
    return padRight2(bytes, size4);
  }
  return bytes;
}
function padRight2(value, size4) {
  return pad2(value, { dir: "right", size: size4 });
}
function size2(value) {
  return value.length;
}
var SizeOverflowError = class extends BaseError2 {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeOverflowError"
    });
  }
};
var SizeExceedsPaddingSizeError = class extends BaseError2 {
  constructor({ size: size4, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size4}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeExceedsPaddingSizeError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Hex.js
var encoder2 = new TextEncoder();
var hexes = Array.from({ length: 256 }, (_v, i3) => i3.toString(16).padStart(2, "0"));
function concat3(...values) {
  return `0x${values.reduce((acc, x3) => acc + x3.replace("0x", ""), "")}`;
}
function fromBoolean(value, options = {}) {
  const hex = `0x${Number(value)}`;
  if (typeof options.size === "number") {
    assertSize2(hex, options.size);
    return padLeft(hex, options.size);
  }
  return hex;
}
function fromBytes2(value, options = {}) {
  let string = "";
  for (let i3 = 0; i3 < value.length; i3++)
    string += hexes[value[i3]];
  const hex = `0x${string}`;
  if (typeof options.size === "number") {
    assertSize2(hex, options.size);
    return padRight(hex, options.size);
  }
  return hex;
}
function fromNumber(value, options = {}) {
  const { signed, size: size4 } = options;
  const value_ = BigInt(value);
  let maxValue;
  if (size4) {
    if (signed)
      maxValue = (1n << BigInt(size4) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size4) * 8n) - 1n;
  } else if (typeof value === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value_ > maxValue || value_ < minValue) {
    const suffix = typeof value === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size4,
      value: `${value}${suffix}`
    });
  }
  const stringValue = (signed && value_ < 0 ? (1n << BigInt(size4 * 8)) + BigInt(value_) : value_).toString(16);
  const hex = `0x${stringValue}`;
  if (size4)
    return padLeft(hex, size4);
  return hex;
}
function fromString3(value, options = {}) {
  return fromBytes2(encoder2.encode(value), options);
}
function padLeft(value, size4) {
  return pad3(value, { dir: "left", size: size4 });
}
function padRight(value, size4) {
  return pad3(value, { dir: "right", size: size4 });
}
function size3(value) {
  return Math.ceil((value.length - 2) / 2);
}
var IntegerOutOfRangeError = class extends BaseError2 {
  constructor({ max, min, signed, size: size4, value }) {
    super(`Number \`${value}\` is not in safe${size4 ? ` ${size4 * 8}-bit` : ""}${signed ? " signed" : " unsigned"} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.IntegerOutOfRangeError"
    });
  }
};
var SizeOverflowError2 = class extends BaseError2 {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeOverflowError"
    });
  }
};
var SizeExceedsPaddingSizeError2 = class extends BaseError2 {
  constructor({ size: size4, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size4}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeExceedsPaddingSizeError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Hash.js
function keccak2562(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes = keccak_256(from(value));
  if (as === "Bytes")
    return bytes;
  return fromBytes2(bytes);
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/lru.js
var LruMap2 = class extends Map {
  constructor(size4) {
    super();
    Object.defineProperty(this, "maxSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.maxSize = size4;
  }
  get(key) {
    const value = super.get(key);
    if (super.has(key) && value !== void 0) {
      this.delete(key);
      super.set(key, value);
    }
    return value;
  }
  set(key, value) {
    super.set(key, value);
    if (this.maxSize && this.size > this.maxSize) {
      const firstKey = this.keys().next().value;
      if (firstKey)
        this.delete(firstKey);
    }
    return this;
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Caches.js
var caches = {
  checksum: new LruMap2(8192)
};
var checksum = caches.checksum;

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Address.js
var addressRegex = /^0x[a-fA-F0-9]{40}$/;
function assert(value, options = {}) {
  const { strict = true } = options;
  if (!addressRegex.test(value))
    throw new InvalidAddressError2({
      address: value,
      cause: new InvalidInputError()
    });
  if (strict) {
    if (value.toLowerCase() === value)
      return;
    if (checksum2(value) !== value)
      throw new InvalidAddressError2({
        address: value,
        cause: new InvalidChecksumError()
      });
  }
}
function checksum2(address) {
  if (checksum.has(address))
    return checksum.get(address);
  assert(address, { strict: false });
  const hexAddress = address.substring(2).toLowerCase();
  const hash = keccak2562(fromString2(hexAddress), { as: "Bytes" });
  const characters = hexAddress.split("");
  for (let i3 = 0; i3 < 40; i3 += 2) {
    if (hash[i3 >> 1] >> 4 >= 8 && characters[i3]) {
      characters[i3] = characters[i3].toUpperCase();
    }
    if ((hash[i3 >> 1] & 15) >= 8 && characters[i3 + 1]) {
      characters[i3 + 1] = characters[i3 + 1].toUpperCase();
    }
  }
  const result = `0x${characters.join("")}`;
  checksum.set(address, result);
  return result;
}
var InvalidAddressError2 = class extends BaseError2 {
  constructor({ address, cause }) {
    super(`Address "${address}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidAddressError"
    });
  }
};
var InvalidInputError = class extends BaseError2 {
  constructor() {
    super("Address is not a 20 byte (40 hexadecimal character) value.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidInputError"
    });
  }
};
var InvalidChecksumError = class extends BaseError2 {
  constructor() {
    super("Address does not match its checksum counterpart.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidChecksumError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Solidity.js
var arrayRegex2 = /^(.*)\[([0-9]*)\]$/;
var bytesRegex2 = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
var integerRegex2 = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
var maxInt8 = 2n ** (8n - 1n) - 1n;
var maxInt16 = 2n ** (16n - 1n) - 1n;
var maxInt24 = 2n ** (24n - 1n) - 1n;
var maxInt32 = 2n ** (32n - 1n) - 1n;
var maxInt40 = 2n ** (40n - 1n) - 1n;
var maxInt48 = 2n ** (48n - 1n) - 1n;
var maxInt56 = 2n ** (56n - 1n) - 1n;
var maxInt64 = 2n ** (64n - 1n) - 1n;
var maxInt72 = 2n ** (72n - 1n) - 1n;
var maxInt80 = 2n ** (80n - 1n) - 1n;
var maxInt88 = 2n ** (88n - 1n) - 1n;
var maxInt96 = 2n ** (96n - 1n) - 1n;
var maxInt104 = 2n ** (104n - 1n) - 1n;
var maxInt112 = 2n ** (112n - 1n) - 1n;
var maxInt120 = 2n ** (120n - 1n) - 1n;
var maxInt128 = 2n ** (128n - 1n) - 1n;
var maxInt136 = 2n ** (136n - 1n) - 1n;
var maxInt144 = 2n ** (144n - 1n) - 1n;
var maxInt152 = 2n ** (152n - 1n) - 1n;
var maxInt160 = 2n ** (160n - 1n) - 1n;
var maxInt168 = 2n ** (168n - 1n) - 1n;
var maxInt176 = 2n ** (176n - 1n) - 1n;
var maxInt184 = 2n ** (184n - 1n) - 1n;
var maxInt192 = 2n ** (192n - 1n) - 1n;
var maxInt200 = 2n ** (200n - 1n) - 1n;
var maxInt208 = 2n ** (208n - 1n) - 1n;
var maxInt216 = 2n ** (216n - 1n) - 1n;
var maxInt224 = 2n ** (224n - 1n) - 1n;
var maxInt232 = 2n ** (232n - 1n) - 1n;
var maxInt240 = 2n ** (240n - 1n) - 1n;
var maxInt248 = 2n ** (248n - 1n) - 1n;
var maxInt256 = 2n ** (256n - 1n) - 1n;
var minInt8 = -(2n ** (8n - 1n));
var minInt16 = -(2n ** (16n - 1n));
var minInt24 = -(2n ** (24n - 1n));
var minInt32 = -(2n ** (32n - 1n));
var minInt40 = -(2n ** (40n - 1n));
var minInt48 = -(2n ** (48n - 1n));
var minInt56 = -(2n ** (56n - 1n));
var minInt64 = -(2n ** (64n - 1n));
var minInt72 = -(2n ** (72n - 1n));
var minInt80 = -(2n ** (80n - 1n));
var minInt88 = -(2n ** (88n - 1n));
var minInt96 = -(2n ** (96n - 1n));
var minInt104 = -(2n ** (104n - 1n));
var minInt112 = -(2n ** (112n - 1n));
var minInt120 = -(2n ** (120n - 1n));
var minInt128 = -(2n ** (128n - 1n));
var minInt136 = -(2n ** (136n - 1n));
var minInt144 = -(2n ** (144n - 1n));
var minInt152 = -(2n ** (152n - 1n));
var minInt160 = -(2n ** (160n - 1n));
var minInt168 = -(2n ** (168n - 1n));
var minInt176 = -(2n ** (176n - 1n));
var minInt184 = -(2n ** (184n - 1n));
var minInt192 = -(2n ** (192n - 1n));
var minInt200 = -(2n ** (200n - 1n));
var minInt208 = -(2n ** (208n - 1n));
var minInt216 = -(2n ** (216n - 1n));
var minInt224 = -(2n ** (224n - 1n));
var minInt232 = -(2n ** (232n - 1n));
var minInt240 = -(2n ** (240n - 1n));
var minInt248 = -(2n ** (248n - 1n));
var minInt256 = -(2n ** (256n - 1n));
var maxUint8 = 2n ** 8n - 1n;
var maxUint16 = 2n ** 16n - 1n;
var maxUint24 = 2n ** 24n - 1n;
var maxUint32 = 2n ** 32n - 1n;
var maxUint40 = 2n ** 40n - 1n;
var maxUint48 = 2n ** 48n - 1n;
var maxUint56 = 2n ** 56n - 1n;
var maxUint64 = 2n ** 64n - 1n;
var maxUint72 = 2n ** 72n - 1n;
var maxUint80 = 2n ** 80n - 1n;
var maxUint88 = 2n ** 88n - 1n;
var maxUint96 = 2n ** 96n - 1n;
var maxUint104 = 2n ** 104n - 1n;
var maxUint112 = 2n ** 112n - 1n;
var maxUint120 = 2n ** 120n - 1n;
var maxUint128 = 2n ** 128n - 1n;
var maxUint136 = 2n ** 136n - 1n;
var maxUint144 = 2n ** 144n - 1n;
var maxUint152 = 2n ** 152n - 1n;
var maxUint160 = 2n ** 160n - 1n;
var maxUint168 = 2n ** 168n - 1n;
var maxUint176 = 2n ** 176n - 1n;
var maxUint184 = 2n ** 184n - 1n;
var maxUint192 = 2n ** 192n - 1n;
var maxUint200 = 2n ** 200n - 1n;
var maxUint208 = 2n ** 208n - 1n;
var maxUint216 = 2n ** 216n - 1n;
var maxUint224 = 2n ** 224n - 1n;
var maxUint232 = 2n ** 232n - 1n;
var maxUint240 = 2n ** 240n - 1n;
var maxUint248 = 2n ** 248n - 1n;
var maxUint2562 = 2n ** 256n - 1n;

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/cursor.js
var staticCursor = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new RecursiveReadLimitExceededError({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(position) {
    if (position < 0 || position > this.bytes.length - 1)
      throw new PositionOutOfBoundsError2({
        length: this.bytes.length,
        position
      });
  },
  decrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position - offset;
    this.assertPosition(position);
    this.position = position;
  },
  getReadCount(position) {
    return this.positionReadCount.get(position || this.position) || 0;
  },
  incrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position + offset;
    this.assertPosition(position);
    this.position = position;
  },
  inspectByte(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectBytes(length, position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + length - 1);
    return this.bytes.subarray(position, position + length);
  },
  inspectUint8(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectUint16(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 1);
    return this.dataView.getUint16(position);
  },
  inspectUint24(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 2);
    return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
  },
  inspectUint32(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 3);
    return this.dataView.getUint32(position);
  },
  pushByte(byte) {
    this.assertPosition(this.position);
    this.bytes[this.position] = byte;
    this.position++;
  },
  pushBytes(bytes) {
    this.assertPosition(this.position + bytes.length - 1);
    this.bytes.set(bytes, this.position);
    this.position += bytes.length;
  },
  pushUint8(value) {
    this.assertPosition(this.position);
    this.bytes[this.position] = value;
    this.position++;
  },
  pushUint16(value) {
    this.assertPosition(this.position + 1);
    this.dataView.setUint16(this.position, value);
    this.position += 2;
  },
  pushUint24(value) {
    this.assertPosition(this.position + 2);
    this.dataView.setUint16(this.position, value >> 8);
    this.dataView.setUint8(this.position + 2, value & ~4294967040);
    this.position += 3;
  },
  pushUint32(value) {
    this.assertPosition(this.position + 3);
    this.dataView.setUint32(this.position, value);
    this.position += 4;
  },
  readByte() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectByte();
    this.position++;
    return value;
  },
  readBytes(length, size4) {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectBytes(length);
    this.position += size4 ?? length;
    return value;
  },
  readUint8() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint8();
    this.position += 1;
    return value;
  },
  readUint16() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint16();
    this.position += 2;
    return value;
  },
  readUint24() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint24();
    this.position += 3;
    return value;
  },
  readUint32() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint32();
    this.position += 4;
    return value;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(position) {
    const oldPosition = this.position;
    this.assertPosition(position);
    this.position = position;
    return () => this.position = oldPosition;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const count = this.getReadCount();
    this.positionReadCount.set(this.position, count + 1);
    if (count > 0)
      this.recursiveReadCount++;
  }
};
var NegativeOffsetError = class extends BaseError2 {
  constructor({ offset }) {
    super(`Offset \`${offset}\` cannot be negative.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.NegativeOffsetError"
    });
  }
};
var PositionOutOfBoundsError2 = class extends BaseError2 {
  constructor({ length, position }) {
    super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.PositionOutOfBoundsError"
    });
  }
};
var RecursiveReadLimitExceededError = class extends BaseError2 {
  constructor({ count, limit }) {
    super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.RecursiveReadLimitExceededError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/AbiParameters.js
function encodePacked2(types, values) {
  if (types.length !== values.length)
    throw new LengthMismatchError({
      expectedLength: types.length,
      givenLength: values.length
    });
  const data = [];
  for (let i3 = 0; i3 < types.length; i3++) {
    const type = types[i3];
    const value = values[i3];
    data.push(encodePacked2.encode(type, value));
  }
  return concat3(...data);
}
(function(encodePacked3) {
  function encode4(type, value, isArray = false) {
    if (type === "address") {
      const address = value;
      assert(address);
      return padLeft(address.toLowerCase(), isArray ? 32 : 0);
    }
    if (type === "string")
      return fromString3(value);
    if (type === "bytes")
      return value;
    if (type === "bool")
      return padLeft(fromBoolean(value), isArray ? 32 : 1);
    const intMatch = type.match(integerRegex2);
    if (intMatch) {
      const [_type, baseType, bits = "256"] = intMatch;
      const size4 = Number.parseInt(bits) / 8;
      return fromNumber(value, {
        size: isArray ? 32 : size4,
        signed: baseType === "int"
      });
    }
    const bytesMatch = type.match(bytesRegex2);
    if (bytesMatch) {
      const [_type, size4] = bytesMatch;
      if (Number.parseInt(size4) !== (value.length - 2) / 2)
        throw new BytesSizeMismatchError2({
          expectedSize: Number.parseInt(size4),
          value
        });
      return padRight(value, isArray ? 32 : 0);
    }
    const arrayMatch = type.match(arrayRegex2);
    if (arrayMatch && Array.isArray(value)) {
      const [_type, childType] = arrayMatch;
      const data = [];
      for (let i3 = 0; i3 < value.length; i3++) {
        data.push(encode4(childType, value[i3], true));
      }
      if (data.length === 0)
        return "0x";
      return concat3(...data);
    }
    throw new InvalidTypeError(type);
  }
  encodePacked3.encode = encode4;
})(encodePacked2 || (encodePacked2 = {}));
var BytesSizeMismatchError2 = class extends BaseError2 {
  constructor({ expectedSize, value }) {
    super(`Size of bytes "${value}" (bytes${size3(value)}) does not match expected size (bytes${expectedSize}).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.BytesSizeMismatchError"
    });
  }
};
var LengthMismatchError = class extends BaseError2 {
  constructor({ expectedLength, givenLength }) {
    super([
      "ABI encoding parameters/values length mismatch.",
      `Expected length (parameters): ${expectedLength}`,
      `Given length (values): ${givenLength}`
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.LengthMismatchError"
    });
  }
};
var InvalidTypeError = class extends BaseError2 {
  constructor(type) {
    super(`Type \`${type}\` is not a valid ABI Type.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.InvalidTypeError"
    });
  }
};

// node_modules/@walletconnect/utils/dist/index.es.js
var se = ":";
function Ie(t) {
  const [e, n2] = t.split(se);
  return { namespace: e, reference: n2 };
}
function Ko(t, e = []) {
  const n2 = [];
  return Object.keys(t).forEach((r2) => {
    if (e.length && !e.includes(r2)) return;
    const o3 = t[r2];
    n2.push(...o3.accounts);
  }), n2;
}
function ce(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
var Zo = Object.defineProperty;
var Yo = Object.defineProperties;
var Go = Object.getOwnPropertyDescriptors;
var Tn = Object.getOwnPropertySymbols;
var Wo = Object.prototype.hasOwnProperty;
var Xo = Object.prototype.propertyIsEnumerable;
var Rn = (t, e, n2) => e in t ? Zo(t, e, { enumerable: true, configurable: true, writable: true, value: n2 }) : t[e] = n2;
var _n = (t, e) => {
  for (var n2 in e || (e = {})) Wo.call(e, n2) && Rn(t, n2, e[n2]);
  if (Tn) for (var n2 of Tn(e)) Xo.call(e, n2) && Rn(t, n2, e[n2]);
  return t;
};
var Jo = (t, e) => Yo(t, Go(e));
var $n = "ReactNative";
var Y = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" };
var jn = "js";
function Re() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function pt() {
  return !(0, import_window_getters.getDocument)() && !!(0, import_window_getters.getNavigator)() && navigator.product === $n;
}
function ei() {
  return pt() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function ni() {
  return pt() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function Yt() {
  return !Re() && !!(0, import_window_getters.getNavigator)() && !!(0, import_window_getters.getDocument)();
}
function xt() {
  return pt() ? Y.reactNative : Re() ? Y.node : Yt() ? Y.browser : Y.unknown;
}
function ri() {
  var t;
  try {
    return pt() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function Cn(t, e) {
  const n2 = new URLSearchParams(t);
  for (const r2 of Object.keys(e).sort()) if (e.hasOwnProperty(r2)) {
    const o3 = e[r2];
    o3 !== void 0 && n2.set(r2, o3);
  }
  return n2.toString();
}
function oi(t) {
  var e, n2;
  const r2 = Pn();
  try {
    return t != null && t.url && r2.url && t.url !== r2.url && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r2.url}. This is probably unintended and can lead to issues.`), t.url = r2.url), (e = t == null ? void 0 : t.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((o3) => o3 !== "")), Jo(_n(_n({}, r2), t), { url: (t == null ? void 0 : t.url) || r2.url, name: (t == null ? void 0 : t.name) || r2.name, description: (t == null ? void 0 : t.description) || r2.description, icons: (n2 = t == null ? void 0 : t.icons) != null && n2.length && t.icons.length > 0 ? t.icons : r2.icons });
  } catch (o3) {
    return console.warn("Error populating app metadata", o3), t || r2;
  }
}
function Pn() {
  return (0, import_window_metadata.getWindowMetadata)() || { name: "", description: "", url: "", icons: [""] };
}
function kn() {
  if (xt() === Y.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: n2, Version: r2 } = global.Platform;
    return [n2, r2].join("-");
  }
  const t = detect();
  if (t === null) return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function Vn() {
  var t;
  const e = xt();
  return e === Y.browser ? [e, ((t = (0, import_window_getters.getLocation)()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Mn(t, e, n2) {
  const r2 = kn(), o3 = Vn();
  return [[t, e].join("-"), [jn, n2].join("-"), r2, o3].join("/");
}
function si({ protocol: t, version: e, relayUrl: n2, sdkVersion: r2, auth: o3, projectId: i3, useOnCloseEvent: s, bundleId: c3, packageName: a2 }) {
  const u4 = n2.split("?"), l2 = Mn(t, e, r2), f5 = { auth: o3, ua: l2, projectId: i3, useOnCloseEvent: s || void 0, packageName: a2 || void 0, bundleId: c3 || void 0 }, h4 = Cn(u4[1] || "", f5);
  return u4[0] + "?" + h4;
}
function gt(t, e) {
  return t.filter((n2) => e.includes(n2)).length === t.length;
}
function fi(t) {
  return Object.fromEntries(t.entries());
}
function li(t) {
  return new Map(Object.entries(t));
}
function gi(t = import_time.FIVE_MINUTES, e) {
  const n2 = (0, import_time.toMiliseconds)(t || import_time.FIVE_MINUTES);
  let r2, o3, i3, s;
  return { resolve: (c3) => {
    i3 && r2 && (clearTimeout(i3), r2(c3), s = Promise.resolve(c3));
  }, reject: (c3) => {
    i3 && o3 && (clearTimeout(i3), o3(c3));
  }, done: () => new Promise((c3, a2) => {
    if (s) return c3(s);
    i3 = setTimeout(() => {
      const u4 = new Error(e);
      s = Promise.reject(u4), a2(u4);
    }, n2), r2 = c3, o3 = a2;
  }) };
}
function yi(t, e, n2) {
  return new Promise(async (r2, o3) => {
    const i3 = setTimeout(() => o3(new Error(n2)), e);
    try {
      const s = await t;
      r2(s);
    } catch (s) {
      o3(s);
    }
    clearTimeout(i3);
  });
}
function _e(t, e) {
  if (typeof e == "string" && e.startsWith(`${t}:`)) return e;
  if (t.toLowerCase() === "topic") {
    if (typeof e != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (t.toLowerCase() === "id") {
    if (typeof e != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${t}`);
}
function mi(t) {
  return _e("topic", t);
}
function wi(t) {
  return _e("id", t);
}
function bi(t) {
  const [e, n2] = t.split(":"), r2 = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof n2 == "string") r2.topic = n2;
  else if (e === "id" && Number.isInteger(Number(n2))) r2.id = Number(n2);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n2}`);
  return r2;
}
function Ei(t, e) {
  return (0, import_time.fromMiliseconds)((e || Date.now()) + (0, import_time.toMiliseconds)(t));
}
function vi(t) {
  return Date.now() >= (0, import_time.toMiliseconds)(t);
}
function xi(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
function at(t = [], e = []) {
  return [.../* @__PURE__ */ new Set([...t, ...e])];
}
async function Si({ id: t, topic: e, wcDeepLink: n2 }) {
  var r2;
  try {
    if (!n2) return;
    const o3 = typeof n2 == "string" ? JSON.parse(n2) : n2, i3 = o3 == null ? void 0 : o3.href;
    if (typeof i3 != "string") return;
    const s = Kn(i3, t, e), c3 = xt();
    if (c3 === Y.browser) {
      if (!((r2 = (0, import_window_getters.getDocument)()) != null && r2.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      Fn(s);
    } else c3 === Y.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (o3) {
    console.error(o3);
  }
}
function Kn(t, e, n2) {
  const r2 = `requestId=${e}&sessionTopic=${n2}`;
  t.endsWith("/") && (t = t.slice(0, -1));
  let o3 = `${t}`;
  if (t.startsWith("https://t.me")) {
    const i3 = t.includes("?") ? "&startapp=" : "?startapp=";
    o3 = `${o3}${i3}${Yn(r2, true)}`;
  } else o3 = `${o3}/wc?${r2}`;
  return o3;
}
function Fn(t) {
  let e = "_self";
  Zn() ? e = "_top" : (zn() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
}
async function Oi(t, e) {
  let n2 = "";
  try {
    if (Yt() && (n2 = localStorage.getItem(e), n2)) return n2;
    n2 = await t.getItem(e);
  } catch (r2) {
    console.error(r2);
  }
  return n2;
}
function Ai(t, e) {
  if (!t.includes(e)) return null;
  const n2 = t.split(/([&,?,=])/), r2 = n2.indexOf(e);
  return n2[r2 + 2];
}
function Bi() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
function Ii() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
function zn() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function Zn() {
  try {
    return window.self !== window.top;
  } catch {
    return false;
  }
}
function Yn(t, e = false) {
  const n2 = Buffer.from(t).toString("base64");
  return e ? n2.replace(/[=]/g, "") : n2;
}
function Le(t) {
  return Buffer.from(t, "base64").toString("utf-8");
}
function Ni(t) {
  return new Promise((e) => setTimeout(e, t));
}
function Gt(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function Ui(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Wt(t, ...e) {
  if (!Ui(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function je(t) {
  if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Gt(t.outputLen), Gt(t.blockLen);
}
function Tt(t, e = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function Gn(t, e) {
  Wt(t);
  const n2 = e.outputLen;
  if (t.length < n2) throw new Error("digestInto() expects output buffer of length at least " + n2);
}
var ue = BigInt(2 ** 32 - 1);
var Wn = BigInt(32);
function Ti(t, e = false) {
  return e ? { h: Number(t & ue), l: Number(t >> Wn & ue) } : { h: Number(t >> Wn & ue) | 0, l: Number(t & ue) | 0 };
}
function Ri(t, e = false) {
  let n2 = new Uint32Array(t.length), r2 = new Uint32Array(t.length);
  for (let o3 = 0; o3 < t.length; o3++) {
    const { h: i3, l: s } = Ti(t[o3], e);
    [n2[o3], r2[o3]] = [i3, s];
  }
  return [n2, r2];
}
var _i = (t, e, n2) => t << n2 | e >>> 32 - n2;
var $i = (t, e, n2) => e << n2 | t >>> 32 - n2;
var Li = (t, e, n2) => e << n2 - 32 | t >>> 64 - n2;
var ji = (t, e, n2) => t << n2 - 32 | e >>> 64 - n2;
var Rt = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function Ci(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function Ce(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function st(t, e) {
  return t << 32 - e | t >>> e;
}
var Xn = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Pi(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
function Jn(t) {
  for (let e = 0; e < t.length; e++) t[e] = Pi(t[e]);
}
function ki(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function _t(t) {
  return typeof t == "string" && (t = ki(t)), Wt(t), t;
}
function Vi(...t) {
  let e = 0;
  for (let r2 = 0; r2 < t.length; r2++) {
    const o3 = t[r2];
    Wt(o3), e += o3.length;
  }
  const n2 = new Uint8Array(e);
  for (let r2 = 0, o3 = 0; r2 < t.length; r2++) {
    const i3 = t[r2];
    n2.set(i3, o3), o3 += i3.length;
  }
  return n2;
}
var Pe = class {
  clone() {
    return this._cloneInto();
  }
};
function Qn(t) {
  const e = (r2) => t().update(_t(r2)).digest(), n2 = t();
  return e.outputLen = n2.outputLen, e.blockLen = n2.blockLen, e.create = () => t(), e;
}
function $t(t = 32) {
  if (Rt && typeof Rt.getRandomValues == "function") return Rt.getRandomValues(new Uint8Array(t));
  if (Rt && typeof Rt.randomBytes == "function") return Rt.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
var tr = [];
var er = [];
var nr = [];
var Mi = BigInt(0);
var Xt = BigInt(1);
var Di = BigInt(2);
var Hi = BigInt(7);
var qi = BigInt(256);
var Ki = BigInt(113);
for (let t = 0, e = Xt, n2 = 1, r2 = 0; t < 24; t++) {
  [n2, r2] = [r2, (2 * n2 + 3 * r2) % 5], tr.push(2 * (5 * r2 + n2)), er.push((t + 1) * (t + 2) / 2 % 64);
  let o3 = Mi;
  for (let i3 = 0; i3 < 7; i3++) e = (e << Xt ^ (e >> Hi) * Ki) % qi, e & Di && (o3 ^= Xt << (Xt << BigInt(i3)) - Xt);
  nr.push(o3);
}
var [Fi, zi] = Ri(nr, true);
var rr = (t, e, n2) => n2 > 32 ? Li(t, e, n2) : _i(t, e, n2);
var or = (t, e, n2) => n2 > 32 ? ji(t, e, n2) : $i(t, e, n2);
function Zi(t, e = 24) {
  const n2 = new Uint32Array(10);
  for (let r2 = 24 - e; r2 < 24; r2++) {
    for (let s = 0; s < 10; s++) n2[s] = t[s] ^ t[s + 10] ^ t[s + 20] ^ t[s + 30] ^ t[s + 40];
    for (let s = 0; s < 10; s += 2) {
      const c3 = (s + 8) % 10, a2 = (s + 2) % 10, u4 = n2[a2], l2 = n2[a2 + 1], f5 = rr(u4, l2, 1) ^ n2[c3], h4 = or(u4, l2, 1) ^ n2[c3 + 1];
      for (let y6 = 0; y6 < 50; y6 += 10) t[s + y6] ^= f5, t[s + y6 + 1] ^= h4;
    }
    let o3 = t[2], i3 = t[3];
    for (let s = 0; s < 24; s++) {
      const c3 = er[s], a2 = rr(o3, i3, c3), u4 = or(o3, i3, c3), l2 = tr[s];
      o3 = t[l2], i3 = t[l2 + 1], t[l2] = a2, t[l2 + 1] = u4;
    }
    for (let s = 0; s < 50; s += 10) {
      for (let c3 = 0; c3 < 10; c3++) n2[c3] = t[s + c3];
      for (let c3 = 0; c3 < 10; c3++) t[s + c3] ^= ~n2[(c3 + 2) % 10] & n2[(c3 + 4) % 10];
    }
    t[0] ^= Fi[r2], t[1] ^= zi[r2];
  }
  n2.fill(0);
}
var En = class _En extends Pe {
  constructor(e, n2, r2, o3 = false, i3 = 24) {
    if (super(), this.blockLen = e, this.suffix = n2, this.outputLen = r2, this.enableXOF = o3, this.rounds = i3, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, Gt(r2), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = Ci(this.state);
  }
  keccak() {
    Xn || Jn(this.state32), Zi(this.state32, this.rounds), Xn || Jn(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    Tt(this);
    const { blockLen: n2, state: r2 } = this;
    e = _t(e);
    const o3 = e.length;
    for (let i3 = 0; i3 < o3; ) {
      const s = Math.min(n2 - this.pos, o3 - i3);
      for (let c3 = 0; c3 < s; c3++) r2[this.pos++] ^= e[i3++];
      this.pos === n2 && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const { state: e, suffix: n2, pos: r2, blockLen: o3 } = this;
    e[r2] ^= n2, (n2 & 128) !== 0 && r2 === o3 - 1 && this.keccak(), e[o3 - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    Tt(this, false), Wt(e), this.finish();
    const n2 = this.state, { blockLen: r2 } = this;
    for (let o3 = 0, i3 = e.length; o3 < i3; ) {
      this.posOut >= r2 && this.keccak();
      const s = Math.min(r2 - this.posOut, i3 - o3);
      e.set(n2.subarray(this.posOut, this.posOut + s), o3), this.posOut += s, o3 += s;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return Gt(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (Gn(e, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: n2, suffix: r2, outputLen: o3, rounds: i3, enableXOF: s } = this;
    return e || (e = new _En(n2, r2, o3, s, i3)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i3, e.suffix = r2, e.outputLen = o3, e.enableXOF = s, e.destroyed = this.destroyed, e;
  }
};
var Yi = (t, e, n2) => Qn(() => new En(e, t, n2));
var Gi = Yi(1, 136, 256 / 8);
var Wi = "https://rpc.walletconnect.org/v1";
function ke(t) {
  const e = `Ethereum Signed Message:
${t.length}`, n2 = new TextEncoder().encode(e + t);
  return "0x" + Buffer.from(Gi(n2)).toString("hex");
}
async function ir(t, e, n2, r2, o3, i3) {
  switch (n2.t) {
    case "eip191":
      return await sr(t, e, n2.s);
    case "eip1271":
      return await cr(t, e, n2.s, r2, o3, i3);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n2.t}`);
  }
}
async function sr(t, e, n2) {
  return (await recoverAddress({ hash: ke(e), signature: n2 })).toLowerCase() === t.toLowerCase();
}
async function cr(t, e, n2, r2, o3, i3) {
  const s = Ie(r2);
  if (!s.namespace || !s.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r2}`);
  try {
    const c3 = "0x1626ba7e", a2 = "0000000000000000000000000000000000000000000000000000000000000040", u4 = "0000000000000000000000000000000000000000000000000000000000000041", l2 = n2.substring(2), f5 = ke(e).substring(2), h4 = c3 + f5 + a2 + u4 + l2, y6 = await fetch(`${i3 || Wi}/?chainId=${r2}&projectId=${o3}`, { method: "POST", body: JSON.stringify({ id: Xi(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t, data: h4 }, "latest"] }) }), { result: E5 } = await y6.json();
    return E5 ? E5.slice(0, c3.length).toLowerCase() === c3.toLowerCase() : false;
  } catch (c3) {
    return console.error("isValidEip1271Signature: ", c3), false;
  }
}
function Xi() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function Ji(t) {
  const e = atob(t), n2 = new Uint8Array(e.length);
  for (let s = 0; s < e.length; s++) n2[s] = e.charCodeAt(s);
  const r2 = n2[0];
  if (r2 === 0) throw new Error("No signatures found");
  const o3 = 1 + r2 * 64;
  if (n2.length < o3) throw new Error("Transaction data too short for claimed signature count");
  if (n2.length < 100) throw new Error("Transaction too short");
  const i3 = Buffer.from(t, "base64").slice(1, 65);
  return esm_default.encode(i3);
}
var Qi = Object.defineProperty;
var ts = Object.defineProperties;
var es = Object.getOwnPropertyDescriptors;
var ar = Object.getOwnPropertySymbols;
var ns = Object.prototype.hasOwnProperty;
var rs = Object.prototype.propertyIsEnumerable;
var ur = (t, e, n2) => e in t ? Qi(t, e, { enumerable: true, configurable: true, writable: true, value: n2 }) : t[e] = n2;
var Ve = (t, e) => {
  for (var n2 in e || (e = {})) ns.call(e, n2) && ur(t, n2, e[n2]);
  if (ar) for (var n2 of ar(e)) rs.call(e, n2) && ur(t, n2, e[n2]);
  return t;
};
var fr = (t, e) => ts(t, es(e));
var os = "did:pkh:";
var fe = (t) => t == null ? void 0 : t.split(":");
var lr = (t) => {
  const e = t && fe(t);
  if (e) return t.includes(os) ? e[3] : e[1];
};
var dr = (t) => {
  const e = t && fe(t);
  if (e) return e[2] + ":" + e[3];
};
var Me = (t) => {
  const e = t && fe(t);
  if (e) return e.pop();
};
async function is(t) {
  const { cacao: e, projectId: n2 } = t, { s: r2, p: o3 } = e, i3 = hr(o3, o3.iss), s = Me(o3.iss);
  return await ir(s, i3, r2, dr(o3.iss), n2);
}
var hr = (t, e) => {
  const n2 = `${t.domain} wants you to sign in with your Ethereum account:`, r2 = Me(e);
  if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let o3 = t.statement || void 0;
  const i3 = `URI: ${t.aud || t.uri}`, s = `Version: ${t.version}`, c3 = `Chain ID: ${lr(e)}`, a2 = `Nonce: ${t.nonce}`, u4 = `Issued At: ${t.iat}`, l2 = t.exp ? `Expiration Time: ${t.exp}` : void 0, f5 = t.nbf ? `Not Before: ${t.nbf}` : void 0, h4 = t.requestId ? `Request ID: ${t.requestId}` : void 0, y6 = t.resources ? `Resources:${t.resources.map((p4) => `
- ${p4}`).join("")}` : void 0, E5 = de(t.resources);
  if (E5) {
    const p4 = yt(E5);
    o3 = qe(o3, p4);
  }
  return [n2, r2, "", o3, "", i3, s, c3, a2, u4, l2, f5, h4, y6].filter((p4) => p4 != null).join(`
`);
};
function mr(t) {
  return Buffer.from(JSON.stringify(t)).toString("base64");
}
function wr(t) {
  return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
}
function ct(t) {
  if (!t) throw new Error("No recap provided, value is undefined");
  if (!t.att) throw new Error("No `att` property found");
  const e = Object.keys(t.att);
  if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
  e.forEach((n2) => {
    const r2 = t.att[n2];
    if (Array.isArray(r2)) throw new Error(`Resource must be an object: ${n2}`);
    if (typeof r2 != "object") throw new Error(`Resource must be an object: ${n2}`);
    if (!Object.keys(r2).length) throw new Error(`Resource object is empty: ${n2}`);
    Object.keys(r2).forEach((o3) => {
      const i3 = r2[o3];
      if (!Array.isArray(i3)) throw new Error(`Ability limits ${o3} must be an array of objects, found: ${i3}`);
      if (!i3.length) throw new Error(`Value of ${o3} is empty array, must be an array with objects`);
      i3.forEach((s) => {
        if (typeof s != "object") throw new Error(`Ability limits (${o3}) must be an array of objects, found: ${s}`);
      });
    });
  });
}
function br(t, e, n2, r2 = {}) {
  return n2 == null ? void 0 : n2.sort((o3, i3) => o3.localeCompare(i3)), { att: { [t]: De(e, n2, r2) } };
}
function De(t, e, n2 = {}) {
  e = e == null ? void 0 : e.sort((o3, i3) => o3.localeCompare(i3));
  const r2 = e.map((o3) => ({ [`${t}/${o3}`]: [n2] }));
  return Object.assign({}, ...r2);
}
function le(t) {
  return ct(t), `urn:recap:${mr(t).replace(/=/g, "")}`;
}
function yt(t) {
  const e = wr(t.replace("urn:recap:", ""));
  return ct(e), e;
}
function fs(t, e, n2) {
  const r2 = br(t, e, n2);
  return le(r2);
}
function He(t) {
  return t && t.includes("urn:recap:");
}
function ls(t, e) {
  const n2 = yt(t), r2 = yt(e), o3 = vr(n2, r2);
  return le(o3);
}
function vr(t, e) {
  ct(t), ct(e);
  const n2 = Object.keys(t.att).concat(Object.keys(e.att)).sort((o3, i3) => o3.localeCompare(i3)), r2 = { att: {} };
  return n2.forEach((o3) => {
    var i3, s;
    Object.keys(((i3 = t.att) == null ? void 0 : i3[o3]) || {}).concat(Object.keys(((s = e.att) == null ? void 0 : s[o3]) || {})).sort((c3, a2) => c3.localeCompare(a2)).forEach((c3) => {
      var a2, u4;
      r2.att[o3] = fr(Ve({}, r2.att[o3]), { [c3]: ((a2 = t.att[o3]) == null ? void 0 : a2[c3]) || ((u4 = e.att[o3]) == null ? void 0 : u4[c3]) });
    });
  }), r2;
}
function qe(t = "", e) {
  ct(e);
  const n2 = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t.includes(n2)) return t;
  const r2 = [];
  let o3 = 0;
  Object.keys(e.att).forEach((c3) => {
    const a2 = Object.keys(e.att[c3]).map((f5) => ({ ability: f5.split("/")[0], action: f5.split("/")[1] }));
    a2.sort((f5, h4) => f5.action.localeCompare(h4.action));
    const u4 = {};
    a2.forEach((f5) => {
      u4[f5.ability] || (u4[f5.ability] = []), u4[f5.ability].push(f5.action);
    });
    const l2 = Object.keys(u4).map((f5) => (o3++, `(${o3}) '${f5}': '${u4[f5].join("', '")}' for '${c3}'.`));
    r2.push(l2.join(", ").replace(".,", "."));
  });
  const i3 = r2.join(" "), s = `${n2}${i3}`;
  return `${t ? t + " " : ""}${s}`;
}
function ds(t) {
  var e;
  const n2 = yt(t);
  ct(n2);
  const r2 = (e = n2.att) == null ? void 0 : e.eip155;
  return r2 ? Object.keys(r2).map((o3) => o3.split("/")[1]) : [];
}
function hs(t) {
  const e = yt(t);
  ct(e);
  const n2 = [];
  return Object.values(e.att).forEach((r2) => {
    Object.values(r2).forEach((o3) => {
      var i3;
      (i3 = o3 == null ? void 0 : o3[0]) != null && i3.chains && n2.push(o3[0].chains);
    });
  }), [...new Set(n2.flat())];
}
function de(t) {
  if (!t) return;
  const e = t == null ? void 0 : t[t.length - 1];
  return He(e) ? e : void 0;
}
function Ke(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function Sr(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function tt(t, ...e) {
  if (!Sr(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function Or(t, e = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function ps(t, e) {
  tt(t);
  const n2 = e.outputLen;
  if (t.length < n2) throw new Error("digestInto() expects output buffer of length at least " + n2);
}
function Ar(t) {
  if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
}
var mt = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
var gs = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
var ys = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!ys) throw new Error("Non little-endian hardware is not supported");
function ms(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function Fe(t) {
  if (typeof t == "string") t = ms(t);
  else if (Sr(t)) t = ze(t);
  else throw new Error("Uint8Array expected, got " + typeof t);
  return t;
}
function ws(t, e) {
  if (e == null || typeof e != "object") throw new Error("options must be defined");
  return Object.assign(t, e);
}
function bs(t, e) {
  if (t.length !== e.length) return false;
  let n2 = 0;
  for (let r2 = 0; r2 < t.length; r2++) n2 |= t[r2] ^ e[r2];
  return n2 === 0;
}
var Es = (t, e) => {
  function n2(r2, ...o3) {
    if (tt(r2), t.nonceLength !== void 0) {
      const l2 = o3[0];
      if (!l2) throw new Error("nonce / iv required");
      t.varSizeNonce ? tt(l2) : tt(l2, t.nonceLength);
    }
    const i3 = t.tagLength;
    i3 && o3[1] !== void 0 && tt(o3[1]);
    const s = e(r2, ...o3), c3 = (l2, f5) => {
      if (f5 !== void 0) {
        if (l2 !== 2) throw new Error("cipher output not supported");
        tt(f5);
      }
    };
    let a2 = false;
    return { encrypt(l2, f5) {
      if (a2) throw new Error("cannot encrypt() twice with same key + nonce");
      return a2 = true, tt(l2), c3(s.encrypt.length, f5), s.encrypt(l2, f5);
    }, decrypt(l2, f5) {
      if (tt(l2), i3 && l2.length < i3) throw new Error("invalid ciphertext length: smaller than tagLength=" + i3);
      return c3(s.decrypt.length, f5), s.decrypt(l2, f5);
    } };
  }
  return Object.assign(n2, t), n2;
};
function Br(t, e, n2 = true) {
  if (e === void 0) return new Uint8Array(t);
  if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
  if (n2 && !vs(e)) throw new Error("invalid output, must be aligned");
  return e;
}
function Ir(t, e, n2, r2) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n2, r2);
  const o3 = BigInt(32), i3 = BigInt(4294967295), s = Number(n2 >> o3 & i3), c3 = Number(n2 & i3), a2 = r2 ? 4 : 0, u4 = r2 ? 0 : 4;
  t.setUint32(e + a2, s, r2), t.setUint32(e + u4, c3, r2);
}
function vs(t) {
  return t.byteOffset % 4 === 0;
}
function ze(t) {
  return Uint8Array.from(t);
}
function Lt(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
var Nr = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0)));
var xs = Nr("expand 16-byte k");
var Ss = Nr("expand 32-byte k");
var Os = mt(xs);
var As = mt(Ss);
function V(t, e) {
  return t << e | t >>> 32 - e;
}
function Ze(t) {
  return t.byteOffset % 4 === 0;
}
var he = 64;
var Bs = 16;
var Ur = 2 ** 32 - 1;
var Tr = new Uint32Array();
function Is(t, e, n2, r2, o3, i3, s, c3) {
  const a2 = o3.length, u4 = new Uint8Array(he), l2 = mt(u4), f5 = Ze(o3) && Ze(i3), h4 = f5 ? mt(o3) : Tr, y6 = f5 ? mt(i3) : Tr;
  for (let E5 = 0; E5 < a2; s++) {
    if (t(e, n2, r2, l2, s, c3), s >= Ur) throw new Error("arx: counter overflow");
    const p4 = Math.min(he, a2 - E5);
    if (f5 && p4 === he) {
      const d3 = E5 / 4;
      if (E5 % 4 !== 0) throw new Error("arx: invalid block position");
      for (let v5 = 0, m3; v5 < Bs; v5++) m3 = d3 + v5, y6[m3] = h4[m3] ^ l2[v5];
      E5 += he;
      continue;
    }
    for (let d3 = 0, v5; d3 < p4; d3++) v5 = E5 + d3, i3[v5] = o3[v5] ^ u4[d3];
    E5 += p4;
  }
}
function Ns(t, e) {
  const { allowShortKeys: n2, extendNonceFn: r2, counterLength: o3, counterRight: i3, rounds: s } = ws({ allowShortKeys: false, counterLength: 8, counterRight: false, rounds: 20 }, e);
  if (typeof t != "function") throw new Error("core must be a function");
  return Ke(o3), Ke(s), Ar(i3), Ar(n2), (c3, a2, u4, l2, f5 = 0) => {
    tt(c3), tt(a2), tt(u4);
    const h4 = u4.length;
    if (l2 === void 0 && (l2 = new Uint8Array(h4)), tt(l2), Ke(f5), f5 < 0 || f5 >= Ur) throw new Error("arx: counter overflow");
    if (l2.length < h4) throw new Error(`arx: output (${l2.length}) is shorter than data (${h4})`);
    const y6 = [];
    let E5 = c3.length, p4, d3;
    if (E5 === 32) y6.push(p4 = ze(c3)), d3 = As;
    else if (E5 === 16 && n2) p4 = new Uint8Array(32), p4.set(c3), p4.set(c3, 16), d3 = Os, y6.push(p4);
    else throw new Error(`arx: invalid 32-byte key, got length=${E5}`);
    Ze(a2) || y6.push(a2 = ze(a2));
    const v5 = mt(p4);
    if (r2) {
      if (a2.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      r2(d3, v5, mt(a2.subarray(0, 16)), v5), a2 = a2.subarray(16);
    }
    const m3 = 16 - o3;
    if (m3 !== a2.length) throw new Error(`arx: nonce must be ${m3} or 16 bytes`);
    if (m3 !== 12) {
      const N4 = new Uint8Array(12);
      N4.set(a2, i3 ? 0 : 12 - a2.length), a2 = N4, y6.push(a2);
    }
    const O5 = mt(a2);
    return Is(t, d3, v5, O5, u4, l2, f5, s), Lt(...y6), l2;
  };
}
var F = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
var Us = class {
  constructor(e) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e = Fe(e), tt(e, 32);
    const n2 = F(e, 0), r2 = F(e, 2), o3 = F(e, 4), i3 = F(e, 6), s = F(e, 8), c3 = F(e, 10), a2 = F(e, 12), u4 = F(e, 14);
    this.r[0] = n2 & 8191, this.r[1] = (n2 >>> 13 | r2 << 3) & 8191, this.r[2] = (r2 >>> 10 | o3 << 6) & 7939, this.r[3] = (o3 >>> 7 | i3 << 9) & 8191, this.r[4] = (i3 >>> 4 | s << 12) & 255, this.r[5] = s >>> 1 & 8190, this.r[6] = (s >>> 14 | c3 << 2) & 8191, this.r[7] = (c3 >>> 11 | a2 << 5) & 8065, this.r[8] = (a2 >>> 8 | u4 << 8) & 8191, this.r[9] = u4 >>> 5 & 127;
    for (let l2 = 0; l2 < 8; l2++) this.pad[l2] = F(e, 16 + 2 * l2);
  }
  process(e, n2, r2 = false) {
    const o3 = r2 ? 0 : 2048, { h: i3, r: s } = this, c3 = s[0], a2 = s[1], u4 = s[2], l2 = s[3], f5 = s[4], h4 = s[5], y6 = s[6], E5 = s[7], p4 = s[8], d3 = s[9], v5 = F(e, n2 + 0), m3 = F(e, n2 + 2), O5 = F(e, n2 + 4), N4 = F(e, n2 + 6), $5 = F(e, n2 + 8), B2 = F(e, n2 + 10), A5 = F(e, n2 + 12), T3 = F(e, n2 + 14);
    let S4 = i3[0] + (v5 & 8191), L4 = i3[1] + ((v5 >>> 13 | m3 << 3) & 8191), U4 = i3[2] + ((m3 >>> 10 | O5 << 6) & 8191), _3 = i3[3] + ((O5 >>> 7 | N4 << 9) & 8191), j2 = i3[4] + ((N4 >>> 4 | $5 << 12) & 8191), g3 = i3[5] + ($5 >>> 1 & 8191), w4 = i3[6] + (($5 >>> 14 | B2 << 2) & 8191), b4 = i3[7] + ((B2 >>> 11 | A5 << 5) & 8191), I3 = i3[8] + ((A5 >>> 8 | T3 << 8) & 8191), R3 = i3[9] + (T3 >>> 5 | o3), x3 = 0, C6 = x3 + S4 * c3 + L4 * (5 * d3) + U4 * (5 * p4) + _3 * (5 * E5) + j2 * (5 * y6);
    x3 = C6 >>> 13, C6 &= 8191, C6 += g3 * (5 * h4) + w4 * (5 * f5) + b4 * (5 * l2) + I3 * (5 * u4) + R3 * (5 * a2), x3 += C6 >>> 13, C6 &= 8191;
    let P5 = x3 + S4 * a2 + L4 * c3 + U4 * (5 * d3) + _3 * (5 * p4) + j2 * (5 * E5);
    x3 = P5 >>> 13, P5 &= 8191, P5 += g3 * (5 * y6) + w4 * (5 * h4) + b4 * (5 * f5) + I3 * (5 * l2) + R3 * (5 * u4), x3 += P5 >>> 13, P5 &= 8191;
    let k5 = x3 + S4 * u4 + L4 * a2 + U4 * c3 + _3 * (5 * d3) + j2 * (5 * p4);
    x3 = k5 >>> 13, k5 &= 8191, k5 += g3 * (5 * E5) + w4 * (5 * y6) + b4 * (5 * h4) + I3 * (5 * f5) + R3 * (5 * l2), x3 += k5 >>> 13, k5 &= 8191;
    let M4 = x3 + S4 * l2 + L4 * u4 + U4 * a2 + _3 * c3 + j2 * (5 * d3);
    x3 = M4 >>> 13, M4 &= 8191, M4 += g3 * (5 * p4) + w4 * (5 * E5) + b4 * (5 * y6) + I3 * (5 * h4) + R3 * (5 * f5), x3 += M4 >>> 13, M4 &= 8191;
    let D3 = x3 + S4 * f5 + L4 * l2 + U4 * u4 + _3 * a2 + j2 * c3;
    x3 = D3 >>> 13, D3 &= 8191, D3 += g3 * (5 * d3) + w4 * (5 * p4) + b4 * (5 * E5) + I3 * (5 * y6) + R3 * (5 * h4), x3 += D3 >>> 13, D3 &= 8191;
    let z4 = x3 + S4 * h4 + L4 * f5 + U4 * l2 + _3 * u4 + j2 * a2;
    x3 = z4 >>> 13, z4 &= 8191, z4 += g3 * c3 + w4 * (5 * d3) + b4 * (5 * p4) + I3 * (5 * E5) + R3 * (5 * y6), x3 += z4 >>> 13, z4 &= 8191;
    let Z2 = x3 + S4 * y6 + L4 * h4 + U4 * f5 + _3 * l2 + j2 * u4;
    x3 = Z2 >>> 13, Z2 &= 8191, Z2 += g3 * a2 + w4 * c3 + b4 * (5 * d3) + I3 * (5 * p4) + R3 * (5 * E5), x3 += Z2 >>> 13, Z2 &= 8191;
    let it3 = x3 + S4 * E5 + L4 * y6 + U4 * h4 + _3 * f5 + j2 * l2;
    x3 = it3 >>> 13, it3 &= 8191, it3 += g3 * u4 + w4 * a2 + b4 * c3 + I3 * (5 * d3) + R3 * (5 * p4), x3 += it3 >>> 13, it3 &= 8191;
    let W3 = x3 + S4 * p4 + L4 * E5 + U4 * y6 + _3 * h4 + j2 * f5;
    x3 = W3 >>> 13, W3 &= 8191, W3 += g3 * l2 + w4 * u4 + b4 * a2 + I3 * c3 + R3 * (5 * d3), x3 += W3 >>> 13, W3 &= 8191;
    let J4 = x3 + S4 * d3 + L4 * p4 + U4 * E5 + _3 * y6 + j2 * h4;
    x3 = J4 >>> 13, J4 &= 8191, J4 += g3 * f5 + w4 * l2 + b4 * u4 + I3 * a2 + R3 * c3, x3 += J4 >>> 13, J4 &= 8191, x3 = (x3 << 2) + x3 | 0, x3 = x3 + C6 | 0, C6 = x3 & 8191, x3 = x3 >>> 13, P5 += x3, i3[0] = C6, i3[1] = P5, i3[2] = k5, i3[3] = M4, i3[4] = D3, i3[5] = z4, i3[6] = Z2, i3[7] = it3, i3[8] = W3, i3[9] = J4;
  }
  finalize() {
    const { h: e, pad: n2 } = this, r2 = new Uint16Array(10);
    let o3 = e[1] >>> 13;
    e[1] &= 8191;
    for (let c3 = 2; c3 < 10; c3++) e[c3] += o3, o3 = e[c3] >>> 13, e[c3] &= 8191;
    e[0] += o3 * 5, o3 = e[0] >>> 13, e[0] &= 8191, e[1] += o3, o3 = e[1] >>> 13, e[1] &= 8191, e[2] += o3, r2[0] = e[0] + 5, o3 = r2[0] >>> 13, r2[0] &= 8191;
    for (let c3 = 1; c3 < 10; c3++) r2[c3] = e[c3] + o3, o3 = r2[c3] >>> 13, r2[c3] &= 8191;
    r2[9] -= 8192;
    let i3 = (o3 ^ 1) - 1;
    for (let c3 = 0; c3 < 10; c3++) r2[c3] &= i3;
    i3 = ~i3;
    for (let c3 = 0; c3 < 10; c3++) e[c3] = e[c3] & i3 | r2[c3];
    e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
    let s = e[0] + n2[0];
    e[0] = s & 65535;
    for (let c3 = 1; c3 < 8; c3++) s = (e[c3] + n2[c3] | 0) + (s >>> 16) | 0, e[c3] = s & 65535;
    Lt(r2);
  }
  update(e) {
    Or(this);
    const { buffer: n2, blockLen: r2 } = this;
    e = Fe(e);
    const o3 = e.length;
    for (let i3 = 0; i3 < o3; ) {
      const s = Math.min(r2 - this.pos, o3 - i3);
      if (s === r2) {
        for (; r2 <= o3 - i3; i3 += r2) this.process(e, i3);
        continue;
      }
      n2.set(e.subarray(i3, i3 + s), this.pos), this.pos += s, i3 += s, this.pos === r2 && (this.process(n2, 0, false), this.pos = 0);
    }
    return this;
  }
  destroy() {
    Lt(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e) {
    Or(this), ps(e, this), this.finished = true;
    const { buffer: n2, h: r2 } = this;
    let { pos: o3 } = this;
    if (o3) {
      for (n2[o3++] = 1; o3 < 16; o3++) n2[o3] = 0;
      this.process(n2, 0, true);
    }
    this.finalize();
    let i3 = 0;
    for (let s = 0; s < 8; s++) e[i3++] = r2[s] >>> 0, e[i3++] = r2[s] >>> 8;
    return e;
  }
  digest() {
    const { buffer: e, outputLen: n2 } = this;
    this.digestInto(e);
    const r2 = e.slice(0, n2);
    return this.destroy(), r2;
  }
};
function Ts(t) {
  const e = (r2, o3) => t(o3).update(Fe(r2)).digest(), n2 = t(new Uint8Array(32));
  return e.outputLen = n2.outputLen, e.blockLen = n2.blockLen, e.create = (r2) => t(r2), e;
}
var Rs = Ts((t) => new Us(t));
function _s(t, e, n2, r2, o3, i3 = 20) {
  let s = t[0], c3 = t[1], a2 = t[2], u4 = t[3], l2 = e[0], f5 = e[1], h4 = e[2], y6 = e[3], E5 = e[4], p4 = e[5], d3 = e[6], v5 = e[7], m3 = o3, O5 = n2[0], N4 = n2[1], $5 = n2[2], B2 = s, A5 = c3, T3 = a2, S4 = u4, L4 = l2, U4 = f5, _3 = h4, j2 = y6, g3 = E5, w4 = p4, b4 = d3, I3 = v5, R3 = m3, x3 = O5, C6 = N4, P5 = $5;
  for (let M4 = 0; M4 < i3; M4 += 2) B2 = B2 + L4 | 0, R3 = V(R3 ^ B2, 16), g3 = g3 + R3 | 0, L4 = V(L4 ^ g3, 12), B2 = B2 + L4 | 0, R3 = V(R3 ^ B2, 8), g3 = g3 + R3 | 0, L4 = V(L4 ^ g3, 7), A5 = A5 + U4 | 0, x3 = V(x3 ^ A5, 16), w4 = w4 + x3 | 0, U4 = V(U4 ^ w4, 12), A5 = A5 + U4 | 0, x3 = V(x3 ^ A5, 8), w4 = w4 + x3 | 0, U4 = V(U4 ^ w4, 7), T3 = T3 + _3 | 0, C6 = V(C6 ^ T3, 16), b4 = b4 + C6 | 0, _3 = V(_3 ^ b4, 12), T3 = T3 + _3 | 0, C6 = V(C6 ^ T3, 8), b4 = b4 + C6 | 0, _3 = V(_3 ^ b4, 7), S4 = S4 + j2 | 0, P5 = V(P5 ^ S4, 16), I3 = I3 + P5 | 0, j2 = V(j2 ^ I3, 12), S4 = S4 + j2 | 0, P5 = V(P5 ^ S4, 8), I3 = I3 + P5 | 0, j2 = V(j2 ^ I3, 7), B2 = B2 + U4 | 0, P5 = V(P5 ^ B2, 16), b4 = b4 + P5 | 0, U4 = V(U4 ^ b4, 12), B2 = B2 + U4 | 0, P5 = V(P5 ^ B2, 8), b4 = b4 + P5 | 0, U4 = V(U4 ^ b4, 7), A5 = A5 + _3 | 0, R3 = V(R3 ^ A5, 16), I3 = I3 + R3 | 0, _3 = V(_3 ^ I3, 12), A5 = A5 + _3 | 0, R3 = V(R3 ^ A5, 8), I3 = I3 + R3 | 0, _3 = V(_3 ^ I3, 7), T3 = T3 + j2 | 0, x3 = V(x3 ^ T3, 16), g3 = g3 + x3 | 0, j2 = V(j2 ^ g3, 12), T3 = T3 + j2 | 0, x3 = V(x3 ^ T3, 8), g3 = g3 + x3 | 0, j2 = V(j2 ^ g3, 7), S4 = S4 + L4 | 0, C6 = V(C6 ^ S4, 16), w4 = w4 + C6 | 0, L4 = V(L4 ^ w4, 12), S4 = S4 + L4 | 0, C6 = V(C6 ^ S4, 8), w4 = w4 + C6 | 0, L4 = V(L4 ^ w4, 7);
  let k5 = 0;
  r2[k5++] = s + B2 | 0, r2[k5++] = c3 + A5 | 0, r2[k5++] = a2 + T3 | 0, r2[k5++] = u4 + S4 | 0, r2[k5++] = l2 + L4 | 0, r2[k5++] = f5 + U4 | 0, r2[k5++] = h4 + _3 | 0, r2[k5++] = y6 + j2 | 0, r2[k5++] = E5 + g3 | 0, r2[k5++] = p4 + w4 | 0, r2[k5++] = d3 + b4 | 0, r2[k5++] = v5 + I3 | 0, r2[k5++] = m3 + R3 | 0, r2[k5++] = O5 + x3 | 0, r2[k5++] = N4 + C6 | 0, r2[k5++] = $5 + P5 | 0;
}
var $s = Ns(_s, { counterRight: false, counterLength: 4, allowShortKeys: false });
var Ls = new Uint8Array(16);
var Rr = (t, e) => {
  t.update(e);
  const n2 = e.length % 16;
  n2 && t.update(Ls.subarray(n2));
};
var js = new Uint8Array(32);
function _r(t, e, n2, r2, o3) {
  const i3 = t(e, n2, js), s = Rs.create(i3);
  o3 && Rr(s, o3), Rr(s, r2);
  const c3 = new Uint8Array(16), a2 = gs(c3);
  Ir(a2, 0, BigInt(o3 ? o3.length : 0), true), Ir(a2, 8, BigInt(r2.length), true), s.update(c3);
  const u4 = s.digest();
  return Lt(i3, c3), u4;
}
var Cs = (t) => (e, n2, r2) => ({ encrypt(i3, s) {
  const c3 = i3.length;
  s = Br(c3 + 16, s, false), s.set(i3);
  const a2 = s.subarray(0, -16);
  t(e, n2, a2, a2, 1);
  const u4 = _r(t, e, n2, a2, r2);
  return s.set(u4, c3), Lt(u4), s;
}, decrypt(i3, s) {
  s = Br(i3.length - 16, s, false);
  const c3 = i3.subarray(0, -16), a2 = i3.subarray(-16), u4 = _r(t, e, n2, c3, r2);
  if (!bs(a2, u4)) throw new Error("invalid tag");
  return s.set(i3.subarray(0, -16)), t(e, n2, s, s, 1), Lt(u4), s;
} });
var $r = Es({ blockSize: 64, nonceLength: 12, tagLength: 16 }, Cs($s));
var Lr = class extends Pe {
  constructor(e, n2) {
    super(), this.finished = false, this.destroyed = false, je(e);
    const r2 = _t(n2);
    if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o3 = this.blockLen, i3 = new Uint8Array(o3);
    i3.set(r2.length > o3 ? e.create().update(r2).digest() : r2);
    for (let s = 0; s < i3.length; s++) i3[s] ^= 54;
    this.iHash.update(i3), this.oHash = e.create();
    for (let s = 0; s < i3.length; s++) i3[s] ^= 106;
    this.oHash.update(i3), i3.fill(0);
  }
  update(e) {
    return Tt(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Tt(this), Wt(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n2, iHash: r2, finished: o3, destroyed: i3, blockLen: s, outputLen: c3 } = this;
    return e = e, e.finished = o3, e.destroyed = i3, e.blockLen = s, e.outputLen = c3, e.oHash = n2._cloneInto(e.oHash), e.iHash = r2._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
  }
};
var pe = (t, e, n2) => new Lr(t, e).update(n2).digest();
pe.create = (t, e) => new Lr(t, e);
function Ps(t, e, n2) {
  return je(t), n2 === void 0 && (n2 = new Uint8Array(t.outputLen)), pe(t, _t(n2), _t(e));
}
var Ye = new Uint8Array([0]);
var jr = new Uint8Array();
function ks(t, e, n2, r2 = 32) {
  if (je(t), Gt(r2), r2 > 255 * t.outputLen) throw new Error("Length should be <= 255*HashLen");
  const o3 = Math.ceil(r2 / t.outputLen);
  n2 === void 0 && (n2 = jr);
  const i3 = new Uint8Array(o3 * t.outputLen), s = pe.create(t, e), c3 = s._cloneInto(), a2 = new Uint8Array(s.outputLen);
  for (let u4 = 0; u4 < o3; u4++) Ye[0] = u4 + 1, c3.update(u4 === 0 ? jr : a2).update(n2).update(Ye).digestInto(a2), i3.set(a2, t.outputLen * u4), s._cloneInto(c3);
  return s.destroy(), c3.destroy(), a2.fill(0), Ye.fill(0), i3.slice(0, r2);
}
var Vs = (t, e, n2, r2, o3) => ks(t, Ps(t, e, n2), r2, o3);
function Ms(t, e, n2, r2) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n2, r2);
  const o3 = BigInt(32), i3 = BigInt(4294967295), s = Number(n2 >> o3 & i3), c3 = Number(n2 & i3), a2 = r2 ? 4 : 0, u4 = r2 ? 0 : 4;
  t.setUint32(e + a2, s, r2), t.setUint32(e + u4, c3, r2);
}
function Ds(t, e, n2) {
  return t & e ^ ~t & n2;
}
function Hs(t, e, n2) {
  return t & e ^ t & n2 ^ e & n2;
}
var qs = class extends Pe {
  constructor(e, n2, r2, o3) {
    super(), this.blockLen = e, this.outputLen = n2, this.padOffset = r2, this.isLE = o3, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e), this.view = Ce(this.buffer);
  }
  update(e) {
    Tt(this);
    const { view: n2, buffer: r2, blockLen: o3 } = this;
    e = _t(e);
    const i3 = e.length;
    for (let s = 0; s < i3; ) {
      const c3 = Math.min(o3 - this.pos, i3 - s);
      if (c3 === o3) {
        const a2 = Ce(e);
        for (; o3 <= i3 - s; s += o3) this.process(a2, s);
        continue;
      }
      r2.set(e.subarray(s, s + c3), this.pos), this.pos += c3, s += c3, this.pos === o3 && (this.process(n2, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Tt(this), Gn(e, this), this.finished = true;
    const { buffer: n2, view: r2, blockLen: o3, isLE: i3 } = this;
    let { pos: s } = this;
    n2[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > o3 - s && (this.process(r2, 0), s = 0);
    for (let f5 = s; f5 < o3; f5++) n2[f5] = 0;
    Ms(r2, o3 - 8, BigInt(this.length * 8), i3), this.process(r2, 0);
    const c3 = Ce(e), a2 = this.outputLen;
    if (a2 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u4 = a2 / 4, l2 = this.get();
    if (u4 > l2.length) throw new Error("_sha2: outputLen bigger than state");
    for (let f5 = 0; f5 < u4; f5++) c3.setUint32(4 * f5, l2[f5], i3);
  }
  digest() {
    const { buffer: e, outputLen: n2 } = this;
    this.digestInto(e);
    const r2 = e.slice(0, n2);
    return this.destroy(), r2;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n2, buffer: r2, length: o3, finished: i3, destroyed: s, pos: c3 } = this;
    return e.length = o3, e.pos = c3, e.finished = i3, e.destroyed = s, o3 % n2 && e.buffer.set(r2), e;
  }
};
var Ks = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
var wt = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
var bt = new Uint32Array(64);
var Fs = class extends qs {
  constructor() {
    super(64, 32, 8, false), this.A = wt[0] | 0, this.B = wt[1] | 0, this.C = wt[2] | 0, this.D = wt[3] | 0, this.E = wt[4] | 0, this.F = wt[5] | 0, this.G = wt[6] | 0, this.H = wt[7] | 0;
  }
  get() {
    const { A: e, B: n2, C: r2, D: o3, E: i3, F: s, G: c3, H: a2 } = this;
    return [e, n2, r2, o3, i3, s, c3, a2];
  }
  set(e, n2, r2, o3, i3, s, c3, a2) {
    this.A = e | 0, this.B = n2 | 0, this.C = r2 | 0, this.D = o3 | 0, this.E = i3 | 0, this.F = s | 0, this.G = c3 | 0, this.H = a2 | 0;
  }
  process(e, n2) {
    for (let f5 = 0; f5 < 16; f5++, n2 += 4) bt[f5] = e.getUint32(n2, false);
    for (let f5 = 16; f5 < 64; f5++) {
      const h4 = bt[f5 - 15], y6 = bt[f5 - 2], E5 = st(h4, 7) ^ st(h4, 18) ^ h4 >>> 3, p4 = st(y6, 17) ^ st(y6, 19) ^ y6 >>> 10;
      bt[f5] = p4 + bt[f5 - 7] + E5 + bt[f5 - 16] | 0;
    }
    let { A: r2, B: o3, C: i3, D: s, E: c3, F: a2, G: u4, H: l2 } = this;
    for (let f5 = 0; f5 < 64; f5++) {
      const h4 = st(c3, 6) ^ st(c3, 11) ^ st(c3, 25), y6 = l2 + h4 + Ds(c3, a2, u4) + Ks[f5] + bt[f5] | 0, p4 = (st(r2, 2) ^ st(r2, 13) ^ st(r2, 22)) + Hs(r2, o3, i3) | 0;
      l2 = u4, u4 = a2, a2 = c3, c3 = s + y6 | 0, s = i3, i3 = o3, o3 = r2, r2 = y6 + p4 | 0;
    }
    r2 = r2 + this.A | 0, o3 = o3 + this.B | 0, i3 = i3 + this.C | 0, s = s + this.D | 0, c3 = c3 + this.E | 0, a2 = a2 + this.F | 0, u4 = u4 + this.G | 0, l2 = l2 + this.H | 0, this.set(r2, o3, i3, s, c3, a2, u4, l2);
  }
  roundClean() {
    bt.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
var Jt = Qn(() => new Fs());
var ge = BigInt(0);
var ye = BigInt(1);
var zs = BigInt(2);
function St(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Qt(t) {
  if (!St(t)) throw new Error("Uint8Array expected");
}
function jt(t, e) {
  if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
var Zs = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Ct(t) {
  Qt(t);
  let e = "";
  for (let n2 = 0; n2 < t.length; n2++) e += Zs[t[n2]];
  return e;
}
function Pt(t) {
  const e = t.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function Ge(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? ge : BigInt("0x" + t);
}
var ut = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Cr(t) {
  if (t >= ut._0 && t <= ut._9) return t - ut._0;
  if (t >= ut.A && t <= ut.F) return t - (ut.A - 10);
  if (t >= ut.a && t <= ut.f) return t - (ut.a - 10);
}
function kt(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e = t.length, n2 = e / 2;
  if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
  const r2 = new Uint8Array(n2);
  for (let o3 = 0, i3 = 0; o3 < n2; o3++, i3 += 2) {
    const s = Cr(t.charCodeAt(i3)), c3 = Cr(t.charCodeAt(i3 + 1));
    if (s === void 0 || c3 === void 0) {
      const a2 = t[i3] + t[i3 + 1];
      throw new Error('hex string expected, got non-hex character "' + a2 + '" at index ' + i3);
    }
    r2[o3] = s * 16 + c3;
  }
  return r2;
}
function Ot(t) {
  return Ge(Ct(t));
}
function te(t) {
  return Qt(t), Ge(Ct(Uint8Array.from(t).reverse()));
}
function Vt(t, e) {
  return kt(t.toString(16).padStart(e * 2, "0"));
}
function me(t, e) {
  return Vt(t, e).reverse();
}
function Ys(t) {
  return kt(Pt(t));
}
function et(t, e, n2) {
  let r2;
  if (typeof e == "string") try {
    r2 = kt(e);
  } catch (i3) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + i3);
  }
  else if (St(e)) r2 = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  const o3 = r2.length;
  if (typeof n2 == "number" && o3 !== n2) throw new Error(t + " of length " + n2 + " expected, got " + o3);
  return r2;
}
function ee(...t) {
  let e = 0;
  for (let r2 = 0; r2 < t.length; r2++) {
    const o3 = t[r2];
    Qt(o3), e += o3.length;
  }
  const n2 = new Uint8Array(e);
  for (let r2 = 0, o3 = 0; r2 < t.length; r2++) {
    const i3 = t[r2];
    n2.set(i3, o3), o3 += i3.length;
  }
  return n2;
}
function Gs(t, e) {
  if (t.length !== e.length) return false;
  let n2 = 0;
  for (let r2 = 0; r2 < t.length; r2++) n2 |= t[r2] ^ e[r2];
  return n2 === 0;
}
function Ws(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
var We = (t) => typeof t == "bigint" && ge <= t;
function we(t, e, n2) {
  return We(t) && We(e) && We(n2) && e <= t && t < n2;
}
function ft(t, e, n2, r2) {
  if (!we(e, n2, r2)) throw new Error("expected valid " + t + ": " + n2 + " <= n < " + r2 + ", got " + e);
}
function Pr(t) {
  let e;
  for (e = 0; t > ge; t >>= ye, e += 1) ;
  return e;
}
function Xs(t, e) {
  return t >> BigInt(e) & ye;
}
function Js(t, e, n2) {
  return t | (n2 ? ye : ge) << BigInt(e);
}
var Xe = (t) => (zs << BigInt(t - 1)) - ye;
var Je = (t) => new Uint8Array(t);
var kr = (t) => Uint8Array.from(t);
function Vr(t, e, n2) {
  if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
  if (typeof n2 != "function") throw new Error("hmacFn must be a function");
  let r2 = Je(t), o3 = Je(t), i3 = 0;
  const s = () => {
    r2.fill(1), o3.fill(0), i3 = 0;
  }, c3 = (...f5) => n2(o3, r2, ...f5), a2 = (f5 = Je()) => {
    o3 = c3(kr([0]), f5), r2 = c3(), f5.length !== 0 && (o3 = c3(kr([1]), f5), r2 = c3());
  }, u4 = () => {
    if (i3++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let f5 = 0;
    const h4 = [];
    for (; f5 < e; ) {
      r2 = c3();
      const y6 = r2.slice();
      h4.push(y6), f5 += r2.length;
    }
    return ee(...h4);
  };
  return (f5, h4) => {
    s(), a2(f5);
    let y6;
    for (; !(y6 = h4(u4())); ) a2();
    return s(), y6;
  };
}
var Qs = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || St(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e) => e.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function Mt(t, e, n2 = {}) {
  const r2 = (o3, i3, s) => {
    const c3 = Qs[i3];
    if (typeof c3 != "function") throw new Error("invalid validator function");
    const a2 = t[o3];
    if (!(s && a2 === void 0) && !c3(a2, t)) throw new Error("param " + String(o3) + " is invalid. Expected " + i3 + ", got " + a2);
  };
  for (const [o3, i3] of Object.entries(e)) r2(o3, i3, false);
  for (const [o3, i3] of Object.entries(n2)) r2(o3, i3, true);
  return t;
}
var tc = () => {
  throw new Error("not implemented");
};
function Qe2(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (n2, ...r2) => {
    const o3 = e.get(n2);
    if (o3 !== void 0) return o3;
    const i3 = t(n2, ...r2);
    return e.set(n2, i3), i3;
  };
}
var ec = Object.freeze({ __proto__: null, isBytes: St, abytes: Qt, abool: jt, bytesToHex: Ct, numberToHexUnpadded: Pt, hexToNumber: Ge, hexToBytes: kt, bytesToNumberBE: Ot, bytesToNumberLE: te, numberToBytesBE: Vt, numberToBytesLE: me, numberToVarBytesBE: Ys, ensureBytes: et, concatBytes: ee, equalBytes: Gs, utf8ToBytes: Ws, inRange: we, aInRange: ft, bitLen: Pr, bitGet: Xs, bitSet: Js, bitMask: Xe, createHmacDrbg: Vr, validateObject: Mt, notImplemented: tc, memoized: Qe2 });
var q = BigInt(0);
var H = BigInt(1);
var At = BigInt(2);
var nc = BigInt(3);
var tn = BigInt(4);
var Mr = BigInt(5);
var Dr = BigInt(8);
function X(t, e) {
  const n2 = t % e;
  return n2 >= q ? n2 : e + n2;
}
function Hr(t, e, n2) {
  if (e < q) throw new Error("invalid exponent, negatives unsupported");
  if (n2 <= q) throw new Error("invalid modulus");
  if (n2 === H) return q;
  let r2 = H;
  for (; e > q; ) e & H && (r2 = r2 * t % n2), t = t * t % n2, e >>= H;
  return r2;
}
function ot(t, e, n2) {
  let r2 = t;
  for (; e-- > q; ) r2 *= r2, r2 %= n2;
  return r2;
}
function en(t, e) {
  if (t === q) throw new Error("invert: expected non-zero number");
  if (e <= q) throw new Error("invert: expected positive modulus, got " + e);
  let n2 = X(t, e), r2 = e, o3 = q, i3 = H;
  for (; n2 !== q; ) {
    const c3 = r2 / n2, a2 = r2 % n2, u4 = o3 - i3 * c3;
    r2 = n2, n2 = a2, o3 = i3, i3 = u4;
  }
  if (r2 !== H) throw new Error("invert: does not exist");
  return X(o3, e);
}
function rc(t) {
  const e = (t - H) / At;
  let n2, r2, o3;
  for (n2 = t - H, r2 = 0; n2 % At === q; n2 /= At, r2++) ;
  for (o3 = At; o3 < t && Hr(o3, e, t) !== t - H; o3++) if (o3 > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (r2 === 1) {
    const s = (t + H) / tn;
    return function(a2, u4) {
      const l2 = a2.pow(u4, s);
      if (!a2.eql(a2.sqr(l2), u4)) throw new Error("Cannot find square root");
      return l2;
    };
  }
  const i3 = (n2 + H) / At;
  return function(c3, a2) {
    if (c3.pow(a2, e) === c3.neg(c3.ONE)) throw new Error("Cannot find square root");
    let u4 = r2, l2 = c3.pow(c3.mul(c3.ONE, o3), n2), f5 = c3.pow(a2, i3), h4 = c3.pow(a2, n2);
    for (; !c3.eql(h4, c3.ONE); ) {
      if (c3.eql(h4, c3.ZERO)) return c3.ZERO;
      let y6 = 1;
      for (let p4 = c3.sqr(h4); y6 < u4 && !c3.eql(p4, c3.ONE); y6++) p4 = c3.sqr(p4);
      const E5 = c3.pow(l2, H << BigInt(u4 - y6 - 1));
      l2 = c3.sqr(E5), f5 = c3.mul(f5, E5), h4 = c3.mul(h4, l2), u4 = y6;
    }
    return f5;
  };
}
function oc(t) {
  if (t % tn === nc) {
    const e = (t + H) / tn;
    return function(r2, o3) {
      const i3 = r2.pow(o3, e);
      if (!r2.eql(r2.sqr(i3), o3)) throw new Error("Cannot find square root");
      return i3;
    };
  }
  if (t % Dr === Mr) {
    const e = (t - Mr) / Dr;
    return function(r2, o3) {
      const i3 = r2.mul(o3, At), s = r2.pow(i3, e), c3 = r2.mul(o3, s), a2 = r2.mul(r2.mul(c3, At), s), u4 = r2.mul(c3, r2.sub(a2, r2.ONE));
      if (!r2.eql(r2.sqr(u4), o3)) throw new Error("Cannot find square root");
      return u4;
    };
  }
  return rc(t);
}
var ic = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function sc(t) {
  const e = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, n2 = ic.reduce((r2, o3) => (r2[o3] = "function", r2), e);
  return Mt(t, n2);
}
function cc(t, e, n2) {
  if (n2 < q) throw new Error("invalid exponent, negatives unsupported");
  if (n2 === q) return t.ONE;
  if (n2 === H) return e;
  let r2 = t.ONE, o3 = e;
  for (; n2 > q; ) n2 & H && (r2 = t.mul(r2, o3)), o3 = t.sqr(o3), n2 >>= H;
  return r2;
}
function ac(t, e) {
  const n2 = new Array(e.length), r2 = e.reduce((i3, s, c3) => t.is0(s) ? i3 : (n2[c3] = i3, t.mul(i3, s)), t.ONE), o3 = t.inv(r2);
  return e.reduceRight((i3, s, c3) => t.is0(s) ? i3 : (n2[c3] = t.mul(i3, n2[c3]), t.mul(i3, s)), o3), n2;
}
function qr(t, e) {
  const n2 = e !== void 0 ? e : t.toString(2).length, r2 = Math.ceil(n2 / 8);
  return { nBitLength: n2, nByteLength: r2 };
}
function Kr(t, e, n2 = false, r2 = {}) {
  if (t <= q) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: o3, nByteLength: i3 } = qr(t, e);
  if (i3 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let s;
  const c3 = Object.freeze({ ORDER: t, isLE: n2, BITS: o3, BYTES: i3, MASK: Xe(o3), ZERO: q, ONE: H, create: (a2) => X(a2, t), isValid: (a2) => {
    if (typeof a2 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof a2);
    return q <= a2 && a2 < t;
  }, is0: (a2) => a2 === q, isOdd: (a2) => (a2 & H) === H, neg: (a2) => X(-a2, t), eql: (a2, u4) => a2 === u4, sqr: (a2) => X(a2 * a2, t), add: (a2, u4) => X(a2 + u4, t), sub: (a2, u4) => X(a2 - u4, t), mul: (a2, u4) => X(a2 * u4, t), pow: (a2, u4) => cc(c3, a2, u4), div: (a2, u4) => X(a2 * en(u4, t), t), sqrN: (a2) => a2 * a2, addN: (a2, u4) => a2 + u4, subN: (a2, u4) => a2 - u4, mulN: (a2, u4) => a2 * u4, inv: (a2) => en(a2, t), sqrt: r2.sqrt || ((a2) => (s || (s = oc(t)), s(c3, a2))), invertBatch: (a2) => ac(c3, a2), cmov: (a2, u4, l2) => l2 ? u4 : a2, toBytes: (a2) => n2 ? me(a2, i3) : Vt(a2, i3), fromBytes: (a2) => {
    if (a2.length !== i3) throw new Error("Field.fromBytes: expected " + i3 + " bytes, got " + a2.length);
    return n2 ? te(a2) : Ot(a2);
  } });
  return Object.freeze(c3);
}
function Fr(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function zr(t) {
  const e = Fr(t);
  return e + Math.ceil(e / 2);
}
function uc(t, e, n2 = false) {
  const r2 = t.length, o3 = Fr(e), i3 = zr(e);
  if (r2 < 16 || r2 < i3 || r2 > 1024) throw new Error("expected " + i3 + "-1024 bytes of input, got " + r2);
  const s = n2 ? te(t) : Ot(t), c3 = X(s, e - H) + H;
  return n2 ? me(c3, o3) : Vt(c3, o3);
}
var Zr = BigInt(0);
var be = BigInt(1);
function nn(t, e) {
  const n2 = e.negate();
  return t ? n2 : e;
}
function Yr(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function rn(t, e) {
  Yr(t, e);
  const n2 = Math.ceil(e / t) + 1, r2 = 2 ** (t - 1);
  return { windows: n2, windowSize: r2 };
}
function fc(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((n2, r2) => {
    if (!(n2 instanceof e)) throw new Error("invalid point at index " + r2);
  });
}
function lc(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((n2, r2) => {
    if (!e.isValid(n2)) throw new Error("invalid scalar at index " + r2);
  });
}
var on = /* @__PURE__ */ new WeakMap();
var Gr = /* @__PURE__ */ new WeakMap();
function sn2(t) {
  return Gr.get(t) || 1;
}
function dc(t, e) {
  return { constTimeNegate: nn, hasPrecomputes(n2) {
    return sn2(n2) !== 1;
  }, unsafeLadder(n2, r2, o3 = t.ZERO) {
    let i3 = n2;
    for (; r2 > Zr; ) r2 & be && (o3 = o3.add(i3)), i3 = i3.double(), r2 >>= be;
    return o3;
  }, precomputeWindow(n2, r2) {
    const { windows: o3, windowSize: i3 } = rn(r2, e), s = [];
    let c3 = n2, a2 = c3;
    for (let u4 = 0; u4 < o3; u4++) {
      a2 = c3, s.push(a2);
      for (let l2 = 1; l2 < i3; l2++) a2 = a2.add(c3), s.push(a2);
      c3 = a2.double();
    }
    return s;
  }, wNAF(n2, r2, o3) {
    const { windows: i3, windowSize: s } = rn(n2, e);
    let c3 = t.ZERO, a2 = t.BASE;
    const u4 = BigInt(2 ** n2 - 1), l2 = 2 ** n2, f5 = BigInt(n2);
    for (let h4 = 0; h4 < i3; h4++) {
      const y6 = h4 * s;
      let E5 = Number(o3 & u4);
      o3 >>= f5, E5 > s && (E5 -= l2, o3 += be);
      const p4 = y6, d3 = y6 + Math.abs(E5) - 1, v5 = h4 % 2 !== 0, m3 = E5 < 0;
      E5 === 0 ? a2 = a2.add(nn(v5, r2[p4])) : c3 = c3.add(nn(m3, r2[d3]));
    }
    return { p: c3, f: a2 };
  }, wNAFUnsafe(n2, r2, o3, i3 = t.ZERO) {
    const { windows: s, windowSize: c3 } = rn(n2, e), a2 = BigInt(2 ** n2 - 1), u4 = 2 ** n2, l2 = BigInt(n2);
    for (let f5 = 0; f5 < s; f5++) {
      const h4 = f5 * c3;
      if (o3 === Zr) break;
      let y6 = Number(o3 & a2);
      if (o3 >>= l2, y6 > c3 && (y6 -= u4, o3 += be), y6 === 0) continue;
      let E5 = r2[h4 + Math.abs(y6) - 1];
      y6 < 0 && (E5 = E5.negate()), i3 = i3.add(E5);
    }
    return i3;
  }, getPrecomputes(n2, r2, o3) {
    let i3 = on.get(r2);
    return i3 || (i3 = this.precomputeWindow(r2, n2), n2 !== 1 && on.set(r2, o3(i3))), i3;
  }, wNAFCached(n2, r2, o3) {
    const i3 = sn2(n2);
    return this.wNAF(i3, this.getPrecomputes(i3, n2, o3), r2);
  }, wNAFCachedUnsafe(n2, r2, o3, i3) {
    const s = sn2(n2);
    return s === 1 ? this.unsafeLadder(n2, r2, i3) : this.wNAFUnsafe(s, this.getPrecomputes(s, n2, o3), r2, i3);
  }, setWindowSize(n2, r2) {
    Yr(r2, e), Gr.set(n2, r2), on.delete(n2);
  } };
}
function hc(t, e, n2, r2) {
  if (fc(n2, t), lc(r2, e), n2.length !== r2.length) throw new Error("arrays of points and scalars must have equal length");
  const o3 = t.ZERO, i3 = Pr(BigInt(n2.length)), s = i3 > 12 ? i3 - 3 : i3 > 4 ? i3 - 2 : i3 ? 2 : 1, c3 = (1 << s) - 1, a2 = new Array(c3 + 1).fill(o3), u4 = Math.floor((e.BITS - 1) / s) * s;
  let l2 = o3;
  for (let f5 = u4; f5 >= 0; f5 -= s) {
    a2.fill(o3);
    for (let y6 = 0; y6 < r2.length; y6++) {
      const E5 = r2[y6], p4 = Number(E5 >> BigInt(f5) & BigInt(c3));
      a2[p4] = a2[p4].add(n2[y6]);
    }
    let h4 = o3;
    for (let y6 = a2.length - 1, E5 = o3; y6 > 0; y6--) E5 = E5.add(a2[y6]), h4 = h4.add(E5);
    if (l2 = l2.add(h4), f5 !== 0) for (let y6 = 0; y6 < s; y6++) l2 = l2.double();
  }
  return l2;
}
function Wr(t) {
  return sc(t.Fp), Mt(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...qr(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
BigInt(0), BigInt(1), BigInt(2), BigInt(8);
var Dt = BigInt(0);
var cn = BigInt(1);
function pc(t) {
  return Mt(t, { a: "bigint" }, { montgomeryBits: "isSafeInteger", nByteLength: "isSafeInteger", adjustScalarBytes: "function", domain: "function", powPminus2: "function", Gu: "bigint" }), Object.freeze({ ...t });
}
function gc(t) {
  const e = pc(t), { P: n2 } = e, r2 = (m3) => X(m3, n2), o3 = e.montgomeryBits, i3 = Math.ceil(o3 / 8), s = e.nByteLength, c3 = e.adjustScalarBytes || ((m3) => m3), a2 = e.powPminus2 || ((m3) => Hr(m3, n2 - BigInt(2), n2));
  function u4(m3, O5, N4) {
    const $5 = r2(m3 * (O5 - N4));
    return O5 = r2(O5 - $5), N4 = r2(N4 + $5), [O5, N4];
  }
  const l2 = (e.a - BigInt(2)) / BigInt(4);
  function f5(m3, O5) {
    ft("u", m3, Dt, n2), ft("scalar", O5, Dt, n2);
    const N4 = O5, $5 = m3;
    let B2 = cn, A5 = Dt, T3 = m3, S4 = cn, L4 = Dt, U4;
    for (let j2 = BigInt(o3 - 1); j2 >= Dt; j2--) {
      const g3 = N4 >> j2 & cn;
      L4 ^= g3, U4 = u4(L4, B2, T3), B2 = U4[0], T3 = U4[1], U4 = u4(L4, A5, S4), A5 = U4[0], S4 = U4[1], L4 = g3;
      const w4 = B2 + A5, b4 = r2(w4 * w4), I3 = B2 - A5, R3 = r2(I3 * I3), x3 = b4 - R3, C6 = T3 + S4, P5 = T3 - S4, k5 = r2(P5 * w4), M4 = r2(C6 * I3), D3 = k5 + M4, z4 = k5 - M4;
      T3 = r2(D3 * D3), S4 = r2($5 * r2(z4 * z4)), B2 = r2(b4 * R3), A5 = r2(x3 * (b4 + r2(l2 * x3)));
    }
    U4 = u4(L4, B2, T3), B2 = U4[0], T3 = U4[1], U4 = u4(L4, A5, S4), A5 = U4[0], S4 = U4[1];
    const _3 = a2(A5);
    return r2(B2 * _3);
  }
  function h4(m3) {
    return me(r2(m3), i3);
  }
  function y6(m3) {
    const O5 = et("u coordinate", m3, i3);
    return s === 32 && (O5[31] &= 127), te(O5);
  }
  function E5(m3) {
    const O5 = et("scalar", m3), N4 = O5.length;
    if (N4 !== i3 && N4 !== s) {
      let $5 = "" + i3 + " or " + s;
      throw new Error("invalid scalar, expected " + $5 + " bytes, got " + N4);
    }
    return te(c3(O5));
  }
  function p4(m3, O5) {
    const N4 = y6(O5), $5 = E5(m3), B2 = f5(N4, $5);
    if (B2 === Dt) throw new Error("invalid private or public key received");
    return h4(B2);
  }
  const d3 = h4(e.Gu);
  function v5(m3) {
    return p4(m3, d3);
  }
  return { scalarMult: p4, scalarMultBase: v5, getSharedSecret: (m3, O5) => p4(m3, O5), getPublicKey: (m3) => v5(m3), utils: { randomPrivateKey: () => e.randomBytes(e.nByteLength) }, GuBytes: d3 };
}
var an = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
BigInt(0);
var yc = BigInt(1);
var Xr = BigInt(2);
var mc = BigInt(3);
var wc = BigInt(5);
BigInt(8);
function bc(t) {
  const e = BigInt(10), n2 = BigInt(20), r2 = BigInt(40), o3 = BigInt(80), i3 = an, c3 = t * t % i3 * t % i3, a2 = ot(c3, Xr, i3) * c3 % i3, u4 = ot(a2, yc, i3) * t % i3, l2 = ot(u4, wc, i3) * u4 % i3, f5 = ot(l2, e, i3) * l2 % i3, h4 = ot(f5, n2, i3) * f5 % i3, y6 = ot(h4, r2, i3) * h4 % i3, E5 = ot(y6, o3, i3) * y6 % i3, p4 = ot(E5, o3, i3) * y6 % i3, d3 = ot(p4, e, i3) * l2 % i3;
  return { pow_p_5_8: ot(d3, Xr, i3) * t % i3, b2: c3 };
}
function Ec(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
var un = gc({ P: an, a: BigInt(486662), montgomeryBits: 255, nByteLength: 32, Gu: BigInt(9), powPminus2: (t) => {
  const e = an, { pow_p_5_8: n2, b2: r2 } = bc(t);
  return X(ot(n2, mc, e) * r2, e);
}, adjustScalarBytes: Ec, randomBytes: $t });
function Jr(t) {
  t.lowS !== void 0 && jt("lowS", t.lowS), t.prehash !== void 0 && jt("prehash", t.prehash);
}
function vc(t) {
  const e = Wr(t);
  Mt(e, { a: "field", b: "field" }, { allowedPrivateKeyLengths: "array", wrapPrivateKey: "boolean", isTorsionFree: "function", clearCofactor: "function", allowInfinityPoint: "boolean", fromBytes: "function", toBytes: "function" });
  const { endo: n2, Fp: r2, a: o3 } = e;
  if (n2) {
    if (!r2.eql(o3, r2.ZERO)) throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
    if (typeof n2 != "object" || typeof n2.beta != "bigint" || typeof n2.splitScalar != "function") throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
var { bytesToNumberBE: xc, hexToBytes: Sc } = ec;
var Oc = class extends Error {
  constructor(e = "") {
    super(e);
  }
};
var lt = { Err: Oc, _tlv: { encode: (t, e) => {
  const { Err: n2 } = lt;
  if (t < 0 || t > 256) throw new n2("tlv.encode: wrong tag");
  if (e.length & 1) throw new n2("tlv.encode: unpadded data");
  const r2 = e.length / 2, o3 = Pt(r2);
  if (o3.length / 2 & 128) throw new n2("tlv.encode: long form length too big");
  const i3 = r2 > 127 ? Pt(o3.length / 2 | 128) : "";
  return Pt(t) + i3 + o3 + e;
}, decode(t, e) {
  const { Err: n2 } = lt;
  let r2 = 0;
  if (t < 0 || t > 256) throw new n2("tlv.encode: wrong tag");
  if (e.length < 2 || e[r2++] !== t) throw new n2("tlv.decode: wrong tlv");
  const o3 = e[r2++], i3 = !!(o3 & 128);
  let s = 0;
  if (!i3) s = o3;
  else {
    const a2 = o3 & 127;
    if (!a2) throw new n2("tlv.decode(long): indefinite length not supported");
    if (a2 > 4) throw new n2("tlv.decode(long): byte length is too big");
    const u4 = e.subarray(r2, r2 + a2);
    if (u4.length !== a2) throw new n2("tlv.decode: length bytes not complete");
    if (u4[0] === 0) throw new n2("tlv.decode(long): zero leftmost byte");
    for (const l2 of u4) s = s << 8 | l2;
    if (r2 += a2, s < 128) throw new n2("tlv.decode(long): not minimal encoding");
  }
  const c3 = e.subarray(r2, r2 + s);
  if (c3.length !== s) throw new n2("tlv.decode: wrong value length");
  return { v: c3, l: e.subarray(r2 + s) };
} }, _int: { encode(t) {
  const { Err: e } = lt;
  if (t < dt) throw new e("integer: negative integers are not allowed");
  let n2 = Pt(t);
  if (Number.parseInt(n2[0], 16) & 8 && (n2 = "00" + n2), n2.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
  return n2;
}, decode(t) {
  const { Err: e } = lt;
  if (t[0] & 128) throw new e("invalid signature integer: negative");
  if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
  return xc(t);
} }, toSig(t) {
  const { Err: e, _int: n2, _tlv: r2 } = lt, o3 = typeof t == "string" ? Sc(t) : t;
  Qt(o3);
  const { v: i3, l: s } = r2.decode(48, o3);
  if (s.length) throw new e("invalid signature: left bytes after parsing");
  const { v: c3, l: a2 } = r2.decode(2, i3), { v: u4, l: l2 } = r2.decode(2, a2);
  if (l2.length) throw new e("invalid signature: left bytes after parsing");
  return { r: n2.decode(c3), s: n2.decode(u4) };
}, hexFromSig(t) {
  const { _tlv: e, _int: n2 } = lt, r2 = e.encode(2, n2.encode(t.r)), o3 = e.encode(2, n2.encode(t.s)), i3 = r2 + o3;
  return e.encode(48, i3);
} };
var dt = BigInt(0);
var K = BigInt(1);
BigInt(2);
var Qr = BigInt(3);
BigInt(4);
function Ac(t) {
  const e = vc(t), { Fp: n2 } = e, r2 = Kr(e.n, e.nBitLength), o3 = e.toBytes || ((p4, d3, v5) => {
    const m3 = d3.toAffine();
    return ee(Uint8Array.from([4]), n2.toBytes(m3.x), n2.toBytes(m3.y));
  }), i3 = e.fromBytes || ((p4) => {
    const d3 = p4.subarray(1), v5 = n2.fromBytes(d3.subarray(0, n2.BYTES)), m3 = n2.fromBytes(d3.subarray(n2.BYTES, 2 * n2.BYTES));
    return { x: v5, y: m3 };
  });
  function s(p4) {
    const { a: d3, b: v5 } = e, m3 = n2.sqr(p4), O5 = n2.mul(m3, p4);
    return n2.add(n2.add(O5, n2.mul(p4, d3)), v5);
  }
  if (!n2.eql(n2.sqr(e.Gy), s(e.Gx))) throw new Error("bad generator point: equation left != right");
  function c3(p4) {
    return we(p4, K, e.n);
  }
  function a2(p4) {
    const { allowedPrivateKeyLengths: d3, nByteLength: v5, wrapPrivateKey: m3, n: O5 } = e;
    if (d3 && typeof p4 != "bigint") {
      if (St(p4) && (p4 = Ct(p4)), typeof p4 != "string" || !d3.includes(p4.length)) throw new Error("invalid private key");
      p4 = p4.padStart(v5 * 2, "0");
    }
    let N4;
    try {
      N4 = typeof p4 == "bigint" ? p4 : Ot(et("private key", p4, v5));
    } catch {
      throw new Error("invalid private key, expected hex or " + v5 + " bytes, got " + typeof p4);
    }
    return m3 && (N4 = X(N4, O5)), ft("private key", N4, K, O5), N4;
  }
  function u4(p4) {
    if (!(p4 instanceof h4)) throw new Error("ProjectivePoint expected");
  }
  const l2 = Qe2((p4, d3) => {
    const { px: v5, py: m3, pz: O5 } = p4;
    if (n2.eql(O5, n2.ONE)) return { x: v5, y: m3 };
    const N4 = p4.is0();
    d3 == null && (d3 = N4 ? n2.ONE : n2.inv(O5));
    const $5 = n2.mul(v5, d3), B2 = n2.mul(m3, d3), A5 = n2.mul(O5, d3);
    if (N4) return { x: n2.ZERO, y: n2.ZERO };
    if (!n2.eql(A5, n2.ONE)) throw new Error("invZ was invalid");
    return { x: $5, y: B2 };
  }), f5 = Qe2((p4) => {
    if (p4.is0()) {
      if (e.allowInfinityPoint && !n2.is0(p4.py)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: d3, y: v5 } = p4.toAffine();
    if (!n2.isValid(d3) || !n2.isValid(v5)) throw new Error("bad point: x or y not FE");
    const m3 = n2.sqr(v5), O5 = s(d3);
    if (!n2.eql(m3, O5)) throw new Error("bad point: equation left != right");
    if (!p4.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  class h4 {
    constructor(d3, v5, m3) {
      if (this.px = d3, this.py = v5, this.pz = m3, d3 == null || !n2.isValid(d3)) throw new Error("x required");
      if (v5 == null || !n2.isValid(v5)) throw new Error("y required");
      if (m3 == null || !n2.isValid(m3)) throw new Error("z required");
      Object.freeze(this);
    }
    static fromAffine(d3) {
      const { x: v5, y: m3 } = d3 || {};
      if (!d3 || !n2.isValid(v5) || !n2.isValid(m3)) throw new Error("invalid affine point");
      if (d3 instanceof h4) throw new Error("projective point not allowed");
      const O5 = (N4) => n2.eql(N4, n2.ZERO);
      return O5(v5) && O5(m3) ? h4.ZERO : new h4(v5, m3, n2.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(d3) {
      const v5 = n2.invertBatch(d3.map((m3) => m3.pz));
      return d3.map((m3, O5) => m3.toAffine(v5[O5])).map(h4.fromAffine);
    }
    static fromHex(d3) {
      const v5 = h4.fromAffine(i3(et("pointHex", d3)));
      return v5.assertValidity(), v5;
    }
    static fromPrivateKey(d3) {
      return h4.BASE.multiply(a2(d3));
    }
    static msm(d3, v5) {
      return hc(h4, r2, d3, v5);
    }
    _setWindowSize(d3) {
      E5.setWindowSize(this, d3);
    }
    assertValidity() {
      f5(this);
    }
    hasEvenY() {
      const { y: d3 } = this.toAffine();
      if (n2.isOdd) return !n2.isOdd(d3);
      throw new Error("Field doesn't support isOdd");
    }
    equals(d3) {
      u4(d3);
      const { px: v5, py: m3, pz: O5 } = this, { px: N4, py: $5, pz: B2 } = d3, A5 = n2.eql(n2.mul(v5, B2), n2.mul(N4, O5)), T3 = n2.eql(n2.mul(m3, B2), n2.mul($5, O5));
      return A5 && T3;
    }
    negate() {
      return new h4(this.px, n2.neg(this.py), this.pz);
    }
    double() {
      const { a: d3, b: v5 } = e, m3 = n2.mul(v5, Qr), { px: O5, py: N4, pz: $5 } = this;
      let B2 = n2.ZERO, A5 = n2.ZERO, T3 = n2.ZERO, S4 = n2.mul(O5, O5), L4 = n2.mul(N4, N4), U4 = n2.mul($5, $5), _3 = n2.mul(O5, N4);
      return _3 = n2.add(_3, _3), T3 = n2.mul(O5, $5), T3 = n2.add(T3, T3), B2 = n2.mul(d3, T3), A5 = n2.mul(m3, U4), A5 = n2.add(B2, A5), B2 = n2.sub(L4, A5), A5 = n2.add(L4, A5), A5 = n2.mul(B2, A5), B2 = n2.mul(_3, B2), T3 = n2.mul(m3, T3), U4 = n2.mul(d3, U4), _3 = n2.sub(S4, U4), _3 = n2.mul(d3, _3), _3 = n2.add(_3, T3), T3 = n2.add(S4, S4), S4 = n2.add(T3, S4), S4 = n2.add(S4, U4), S4 = n2.mul(S4, _3), A5 = n2.add(A5, S4), U4 = n2.mul(N4, $5), U4 = n2.add(U4, U4), S4 = n2.mul(U4, _3), B2 = n2.sub(B2, S4), T3 = n2.mul(U4, L4), T3 = n2.add(T3, T3), T3 = n2.add(T3, T3), new h4(B2, A5, T3);
    }
    add(d3) {
      u4(d3);
      const { px: v5, py: m3, pz: O5 } = this, { px: N4, py: $5, pz: B2 } = d3;
      let A5 = n2.ZERO, T3 = n2.ZERO, S4 = n2.ZERO;
      const L4 = e.a, U4 = n2.mul(e.b, Qr);
      let _3 = n2.mul(v5, N4), j2 = n2.mul(m3, $5), g3 = n2.mul(O5, B2), w4 = n2.add(v5, m3), b4 = n2.add(N4, $5);
      w4 = n2.mul(w4, b4), b4 = n2.add(_3, j2), w4 = n2.sub(w4, b4), b4 = n2.add(v5, O5);
      let I3 = n2.add(N4, B2);
      return b4 = n2.mul(b4, I3), I3 = n2.add(_3, g3), b4 = n2.sub(b4, I3), I3 = n2.add(m3, O5), A5 = n2.add($5, B2), I3 = n2.mul(I3, A5), A5 = n2.add(j2, g3), I3 = n2.sub(I3, A5), S4 = n2.mul(L4, b4), A5 = n2.mul(U4, g3), S4 = n2.add(A5, S4), A5 = n2.sub(j2, S4), S4 = n2.add(j2, S4), T3 = n2.mul(A5, S4), j2 = n2.add(_3, _3), j2 = n2.add(j2, _3), g3 = n2.mul(L4, g3), b4 = n2.mul(U4, b4), j2 = n2.add(j2, g3), g3 = n2.sub(_3, g3), g3 = n2.mul(L4, g3), b4 = n2.add(b4, g3), _3 = n2.mul(j2, b4), T3 = n2.add(T3, _3), _3 = n2.mul(I3, b4), A5 = n2.mul(w4, A5), A5 = n2.sub(A5, _3), _3 = n2.mul(w4, j2), S4 = n2.mul(I3, S4), S4 = n2.add(S4, _3), new h4(A5, T3, S4);
    }
    subtract(d3) {
      return this.add(d3.negate());
    }
    is0() {
      return this.equals(h4.ZERO);
    }
    wNAF(d3) {
      return E5.wNAFCached(this, d3, h4.normalizeZ);
    }
    multiplyUnsafe(d3) {
      const { endo: v5, n: m3 } = e;
      ft("scalar", d3, dt, m3);
      const O5 = h4.ZERO;
      if (d3 === dt) return O5;
      if (this.is0() || d3 === K) return this;
      if (!v5 || E5.hasPrecomputes(this)) return E5.wNAFCachedUnsafe(this, d3, h4.normalizeZ);
      let { k1neg: N4, k1: $5, k2neg: B2, k2: A5 } = v5.splitScalar(d3), T3 = O5, S4 = O5, L4 = this;
      for (; $5 > dt || A5 > dt; ) $5 & K && (T3 = T3.add(L4)), A5 & K && (S4 = S4.add(L4)), L4 = L4.double(), $5 >>= K, A5 >>= K;
      return N4 && (T3 = T3.negate()), B2 && (S4 = S4.negate()), S4 = new h4(n2.mul(S4.px, v5.beta), S4.py, S4.pz), T3.add(S4);
    }
    multiply(d3) {
      const { endo: v5, n: m3 } = e;
      ft("scalar", d3, K, m3);
      let O5, N4;
      if (v5) {
        const { k1neg: $5, k1: B2, k2neg: A5, k2: T3 } = v5.splitScalar(d3);
        let { p: S4, f: L4 } = this.wNAF(B2), { p: U4, f: _3 } = this.wNAF(T3);
        S4 = E5.constTimeNegate($5, S4), U4 = E5.constTimeNegate(A5, U4), U4 = new h4(n2.mul(U4.px, v5.beta), U4.py, U4.pz), O5 = S4.add(U4), N4 = L4.add(_3);
      } else {
        const { p: $5, f: B2 } = this.wNAF(d3);
        O5 = $5, N4 = B2;
      }
      return h4.normalizeZ([O5, N4])[0];
    }
    multiplyAndAddUnsafe(d3, v5, m3) {
      const O5 = h4.BASE, N4 = (B2, A5) => A5 === dt || A5 === K || !B2.equals(O5) ? B2.multiplyUnsafe(A5) : B2.multiply(A5), $5 = N4(this, v5).add(N4(d3, m3));
      return $5.is0() ? void 0 : $5;
    }
    toAffine(d3) {
      return l2(this, d3);
    }
    isTorsionFree() {
      const { h: d3, isTorsionFree: v5 } = e;
      if (d3 === K) return true;
      if (v5) return v5(h4, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: d3, clearCofactor: v5 } = e;
      return d3 === K ? this : v5 ? v5(h4, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(d3 = true) {
      return jt("isCompressed", d3), this.assertValidity(), o3(h4, this, d3);
    }
    toHex(d3 = true) {
      return jt("isCompressed", d3), Ct(this.toRawBytes(d3));
    }
  }
  h4.BASE = new h4(e.Gx, e.Gy, n2.ONE), h4.ZERO = new h4(n2.ZERO, n2.ONE, n2.ZERO);
  const y6 = e.nBitLength, E5 = dc(h4, e.endo ? Math.ceil(y6 / 2) : y6);
  return { CURVE: e, ProjectivePoint: h4, normPrivateKeyToScalar: a2, weierstrassEquation: s, isWithinCurveOrder: c3 };
}
function Bc(t) {
  const e = Wr(t);
  return Mt(e, { hash: "hash", hmac: "function", randomBytes: "function" }, { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }), Object.freeze({ lowS: true, ...e });
}
function Ic(t) {
  const e = Bc(t), { Fp: n2, n: r2 } = e, o3 = n2.BYTES + 1, i3 = 2 * n2.BYTES + 1;
  function s(g3) {
    return X(g3, r2);
  }
  function c3(g3) {
    return en(g3, r2);
  }
  const { ProjectivePoint: a2, normPrivateKeyToScalar: u4, weierstrassEquation: l2, isWithinCurveOrder: f5 } = Ac({ ...e, toBytes(g3, w4, b4) {
    const I3 = w4.toAffine(), R3 = n2.toBytes(I3.x), x3 = ee;
    return jt("isCompressed", b4), b4 ? x3(Uint8Array.from([w4.hasEvenY() ? 2 : 3]), R3) : x3(Uint8Array.from([4]), R3, n2.toBytes(I3.y));
  }, fromBytes(g3) {
    const w4 = g3.length, b4 = g3[0], I3 = g3.subarray(1);
    if (w4 === o3 && (b4 === 2 || b4 === 3)) {
      const R3 = Ot(I3);
      if (!we(R3, K, n2.ORDER)) throw new Error("Point is not on curve");
      const x3 = l2(R3);
      let C6;
      try {
        C6 = n2.sqrt(x3);
      } catch (M4) {
        const D3 = M4 instanceof Error ? ": " + M4.message : "";
        throw new Error("Point is not on curve" + D3);
      }
      const P5 = (C6 & K) === K;
      return (b4 & 1) === 1 !== P5 && (C6 = n2.neg(C6)), { x: R3, y: C6 };
    } else if (w4 === i3 && b4 === 4) {
      const R3 = n2.fromBytes(I3.subarray(0, n2.BYTES)), x3 = n2.fromBytes(I3.subarray(n2.BYTES, 2 * n2.BYTES));
      return { x: R3, y: x3 };
    } else {
      const R3 = o3, x3 = i3;
      throw new Error("invalid Point, expected length of " + R3 + ", or uncompressed " + x3 + ", got " + w4);
    }
  } }), h4 = (g3) => Ct(Vt(g3, e.nByteLength));
  function y6(g3) {
    const w4 = r2 >> K;
    return g3 > w4;
  }
  function E5(g3) {
    return y6(g3) ? s(-g3) : g3;
  }
  const p4 = (g3, w4, b4) => Ot(g3.slice(w4, b4));
  class d3 {
    constructor(w4, b4, I3) {
      this.r = w4, this.s = b4, this.recovery = I3, this.assertValidity();
    }
    static fromCompact(w4) {
      const b4 = e.nByteLength;
      return w4 = et("compactSignature", w4, b4 * 2), new d3(p4(w4, 0, b4), p4(w4, b4, 2 * b4));
    }
    static fromDER(w4) {
      const { r: b4, s: I3 } = lt.toSig(et("DER", w4));
      return new d3(b4, I3);
    }
    assertValidity() {
      ft("r", this.r, K, r2), ft("s", this.s, K, r2);
    }
    addRecoveryBit(w4) {
      return new d3(this.r, this.s, w4);
    }
    recoverPublicKey(w4) {
      const { r: b4, s: I3, recovery: R3 } = this, x3 = B2(et("msgHash", w4));
      if (R3 == null || ![0, 1, 2, 3].includes(R3)) throw new Error("recovery id invalid");
      const C6 = R3 === 2 || R3 === 3 ? b4 + e.n : b4;
      if (C6 >= n2.ORDER) throw new Error("recovery id 2 or 3 invalid");
      const P5 = (R3 & 1) === 0 ? "02" : "03", k5 = a2.fromHex(P5 + h4(C6)), M4 = c3(C6), D3 = s(-x3 * M4), z4 = s(I3 * M4), Z2 = a2.BASE.multiplyAndAddUnsafe(k5, D3, z4);
      if (!Z2) throw new Error("point at infinify");
      return Z2.assertValidity(), Z2;
    }
    hasHighS() {
      return y6(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new d3(this.r, s(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return kt(this.toDERHex());
    }
    toDERHex() {
      return lt.hexFromSig({ r: this.r, s: this.s });
    }
    toCompactRawBytes() {
      return kt(this.toCompactHex());
    }
    toCompactHex() {
      return h4(this.r) + h4(this.s);
    }
  }
  const v5 = { isValidPrivateKey(g3) {
    try {
      return u4(g3), true;
    } catch {
      return false;
    }
  }, normPrivateKeyToScalar: u4, randomPrivateKey: () => {
    const g3 = zr(e.n);
    return uc(e.randomBytes(g3), e.n);
  }, precompute(g3 = 8, w4 = a2.BASE) {
    return w4._setWindowSize(g3), w4.multiply(BigInt(3)), w4;
  } };
  function m3(g3, w4 = true) {
    return a2.fromPrivateKey(g3).toRawBytes(w4);
  }
  function O5(g3) {
    const w4 = St(g3), b4 = typeof g3 == "string", I3 = (w4 || b4) && g3.length;
    return w4 ? I3 === o3 || I3 === i3 : b4 ? I3 === 2 * o3 || I3 === 2 * i3 : g3 instanceof a2;
  }
  function N4(g3, w4, b4 = true) {
    if (O5(g3)) throw new Error("first arg must be private key");
    if (!O5(w4)) throw new Error("second arg must be public key");
    return a2.fromHex(w4).multiply(u4(g3)).toRawBytes(b4);
  }
  const $5 = e.bits2int || function(g3) {
    if (g3.length > 8192) throw new Error("input is too large");
    const w4 = Ot(g3), b4 = g3.length * 8 - e.nBitLength;
    return b4 > 0 ? w4 >> BigInt(b4) : w4;
  }, B2 = e.bits2int_modN || function(g3) {
    return s($5(g3));
  }, A5 = Xe(e.nBitLength);
  function T3(g3) {
    return ft("num < 2^" + e.nBitLength, g3, dt, A5), Vt(g3, e.nByteLength);
  }
  function S4(g3, w4, b4 = L4) {
    if (["recovered", "canonical"].some((W3) => W3 in b4)) throw new Error("sign() legacy options not supported");
    const { hash: I3, randomBytes: R3 } = e;
    let { lowS: x3, prehash: C6, extraEntropy: P5 } = b4;
    x3 == null && (x3 = true), g3 = et("msgHash", g3), Jr(b4), C6 && (g3 = et("prehashed msgHash", I3(g3)));
    const k5 = B2(g3), M4 = u4(w4), D3 = [T3(M4), T3(k5)];
    if (P5 != null && P5 !== false) {
      const W3 = P5 === true ? R3(n2.BYTES) : P5;
      D3.push(et("extraEntropy", W3));
    }
    const z4 = ee(...D3), Z2 = k5;
    function it3(W3) {
      const J4 = $5(W3);
      if (!f5(J4)) return;
      const Oe3 = c3(J4), Ft3 = a2.BASE.multiply(J4).toAffine(), vt2 = s(Ft3.x);
      if (vt2 === dt) return;
      const zt3 = s(Oe3 * s(Z2 + vt2 * M4));
      if (zt3 === dt) return;
      let Ut3 = (Ft3.x === vt2 ? 0 : 2) | Number(Ft3.y & K), vn2 = zt3;
      return x3 && y6(zt3) && (vn2 = E5(zt3), Ut3 ^= 1), new d3(vt2, vn2, Ut3);
    }
    return { seed: z4, k2sig: it3 };
  }
  const L4 = { lowS: e.lowS, prehash: false }, U4 = { lowS: e.lowS, prehash: false };
  function _3(g3, w4, b4 = L4) {
    const { seed: I3, k2sig: R3 } = S4(g3, w4, b4), x3 = e;
    return Vr(x3.hash.outputLen, x3.nByteLength, x3.hmac)(I3, R3);
  }
  a2.BASE._setWindowSize(8);
  function j2(g3, w4, b4, I3 = U4) {
    var _a;
    const R3 = g3;
    w4 = et("msgHash", w4), b4 = et("publicKey", b4);
    const { lowS: x3, prehash: C6, format: P5 } = I3;
    if (Jr(I3), "strict" in I3) throw new Error("options.strict was renamed to lowS");
    if (P5 !== void 0 && P5 !== "compact" && P5 !== "der") throw new Error("format must be compact or der");
    const k5 = typeof R3 == "string" || St(R3), M4 = !k5 && !P5 && typeof R3 == "object" && R3 !== null && typeof R3.r == "bigint" && typeof R3.s == "bigint";
    if (!k5 && !M4) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let D3, z4;
    try {
      if (M4 && (D3 = new d3(R3.r, R3.s)), k5) {
        try {
          P5 !== "compact" && (D3 = d3.fromDER(R3));
        } catch (Ut3) {
          if (!(Ut3 instanceof lt.Err)) throw Ut3;
        }
        !D3 && P5 !== "der" && (D3 = d3.fromCompact(R3));
      }
      z4 = a2.fromHex(b4);
    } catch {
      return false;
    }
    if (!D3 || x3 && D3.hasHighS()) return false;
    C6 && (w4 = e.hash(w4));
    const { r: Z2, s: it3 } = D3, W3 = B2(w4), J4 = c3(it3), Oe3 = s(W3 * J4), Ft3 = s(Z2 * J4), vt2 = (_a = a2.BASE.multiplyAndAddUnsafe(z4, Oe3, Ft3)) == null ? void 0 : _a.toAffine();
    return vt2 ? s(vt2.x) === Z2 : false;
  }
  return { CURVE: e, getPublicKey: m3, getSharedSecret: N4, sign: _3, verify: j2, ProjectivePoint: a2, Signature: d3, utils: v5 };
}
function Nc(t) {
  return { hash: t, hmac: (e, ...n2) => pe(t, e, Vi(...n2)), randomBytes: $t };
}
function Uc(t, e) {
  const n2 = (r2) => Ic({ ...t, ...Nc(r2) });
  return { ...n2(e), create: n2 };
}
var to = Kr(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"));
var Tc = to.create(BigInt("-3"));
var Rc = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b");
var _c = Uc({ a: Tc, b: Rc, Fp: to, n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"), Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"), Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"), h: BigInt(1), lowS: false }, Jt);
var fn = "base10";
var G = "base16";
var Ht = "base64pad";
var Ee = "base64url";
var qt = "utf8";
var ln = 0;
var Kt = 1;
var ne = 2;
var $c = 0;
var eo = 1;
var re = 12;
var dn = 32;
function Lc() {
  const t = un.utils.randomPrivateKey(), e = un.getPublicKey(t);
  return { privateKey: toString(t, G), publicKey: toString(e, G) };
}
function jc() {
  const t = $t(dn);
  return toString(t, G);
}
function Cc(t, e) {
  const n2 = un.getSharedSecret(fromString(t, G), fromString(e, G)), r2 = Vs(Jt, n2, void 0, void 0, dn);
  return toString(r2, G);
}
function Pc(t) {
  const e = Jt(fromString(t, G));
  return toString(e, G);
}
function kc(t) {
  const e = Jt(fromString(t, qt));
  return toString(e, G);
}
function hn(t) {
  return fromString(`${t}`, fn);
}
function Bt(t) {
  return Number(toString(t, fn));
}
function no(t) {
  return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function ro(t) {
  const e = t.replace(/-/g, "+").replace(/_/g, "/"), n2 = (4 - e.length % 4) % 4;
  return e + "=".repeat(n2);
}
function Vc(t) {
  const e = hn(typeof t.type < "u" ? t.type : ln);
  if (Bt(e) === Kt && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const n2 = typeof t.senderPublicKey < "u" ? fromString(t.senderPublicKey, G) : void 0, r2 = typeof t.iv < "u" ? fromString(t.iv, G) : $t(re), o3 = fromString(t.symKey, G), i3 = $r(o3, r2).encrypt(fromString(t.message, qt)), s = pn({ type: e, sealed: i3, iv: r2, senderPublicKey: n2 });
  return t.encoding === Ee ? no(s) : s;
}
function Mc(t) {
  const e = fromString(t.symKey, G), { sealed: n2, iv: r2 } = ve({ encoded: t.encoded, encoding: t.encoding }), o3 = $r(e, r2).decrypt(n2);
  if (o3 === null) throw new Error("Failed to decrypt");
  return toString(o3, qt);
}
function Dc(t, e) {
  const n2 = hn(ne), r2 = $t(re), o3 = fromString(t, qt), i3 = pn({ type: n2, sealed: o3, iv: r2 });
  return e === Ee ? no(i3) : i3;
}
function Hc(t, e) {
  const { sealed: n2 } = ve({ encoded: t, encoding: e });
  return toString(n2, qt);
}
function pn(t) {
  if (Bt(t.type) === ne) return toString(concat([t.type, t.sealed]), Ht);
  if (Bt(t.type) === Kt) {
    if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return toString(concat([t.type, t.senderPublicKey, t.iv, t.sealed]), Ht);
  }
  return toString(concat([t.type, t.iv, t.sealed]), Ht);
}
function ve(t) {
  const e = (t.encoding || Ht) === Ee ? ro(t.encoded) : t.encoded, n2 = fromString(e, Ht), r2 = n2.slice($c, eo), o3 = eo;
  if (Bt(r2) === Kt) {
    const a2 = o3 + dn, u4 = a2 + re, l2 = n2.slice(o3, a2), f5 = n2.slice(a2, u4), h4 = n2.slice(u4);
    return { type: r2, sealed: h4, iv: f5, senderPublicKey: l2 };
  }
  if (Bt(r2) === ne) {
    const a2 = n2.slice(o3), u4 = $t(re);
    return { type: r2, sealed: a2, iv: u4 };
  }
  const i3 = o3 + re, s = n2.slice(o3, i3), c3 = n2.slice(i3);
  return { type: r2, sealed: c3, iv: s };
}
function qc(t, e) {
  const n2 = ve({ encoded: t, encoding: e == null ? void 0 : e.encoding });
  return oo({ type: Bt(n2.type), senderPublicKey: typeof n2.senderPublicKey < "u" ? toString(n2.senderPublicKey, G) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function oo(t) {
  const e = (t == null ? void 0 : t.type) || ln;
  if (e === Kt) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Kc(t) {
  return t.type === Kt && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
function Fc(t) {
  return t.type === ne;
}
function io(t) {
  const e = Buffer.from(t.x, "base64"), n2 = Buffer.from(t.y, "base64");
  return concat([new Uint8Array([4]), e, n2]);
}
function zc(t, e) {
  const [n2, r2, o3] = t.split("."), i3 = Buffer.from(ro(o3), "base64");
  if (i3.length !== 64) throw new Error("Invalid signature length");
  const s = i3.slice(0, 32), c3 = i3.slice(32, 64), a2 = `${n2}.${r2}`, u4 = Jt(a2), l2 = io(e);
  if (!_c.verify(concat([s, c3]), u4, l2)) throw new Error("Invalid signature");
  return sn(t).payload;
}
var so = "irn";
function Zc(t) {
  return (t == null ? void 0 : t.relay) || { protocol: so };
}
function Yc(t) {
  const e = C[t];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
function co(t, e = "-") {
  const n2 = {}, r2 = "relay" + e;
  return Object.keys(t).forEach((o3) => {
    if (o3.startsWith(r2)) {
      const i3 = o3.replace(r2, ""), s = t[o3];
      n2[i3] = s;
    }
  }), n2;
}
function Gc(t) {
  if (!t.includes("wc:")) {
    const u4 = Le(t);
    u4 != null && u4.includes("wc:") && (t = u4);
  }
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), n2 = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, r2 = t.substring(0, e), o3 = t.substring(e + 1, n2).split("@"), i3 = typeof n2 < "u" ? t.substring(n2) : "", s = new URLSearchParams(i3), c3 = {};
  s.forEach((u4, l2) => {
    c3[l2] = u4;
  });
  const a2 = typeof c3.methods == "string" ? c3.methods.split(",") : void 0;
  return { protocol: r2, topic: ao(o3[0]), version: parseInt(o3[1], 10), symKey: c3.symKey, relay: co(c3), methods: a2, expiryTimestamp: c3.expiryTimestamp ? parseInt(c3.expiryTimestamp, 10) : void 0 };
}
function ao(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function uo(t, e = "-") {
  const n2 = "relay", r2 = {};
  return Object.keys(t).forEach((o3) => {
    const i3 = o3, s = n2 + e + i3;
    t[i3] && (r2[s] = t[i3]);
  }), r2;
}
function Wc(t) {
  const e = new URLSearchParams(), n2 = uo(t.relay);
  Object.keys(n2).sort().forEach((o3) => {
    e.set(o3, n2[o3]);
  }), e.set("symKey", t.symKey), t.expiryTimestamp && e.set("expiryTimestamp", t.expiryTimestamp.toString()), t.methods && e.set("methods", t.methods.join(","));
  const r2 = e.toString();
  return `${t.protocol}:${t.topic}@${t.version}?${r2}`;
}
function Xc(t, e, n2) {
  return `${t}?wc_ev=${n2}&topic=${e}`;
}
function It(t) {
  const e = [];
  return t.forEach((n2) => {
    const [r2, o3] = n2.split(":");
    e.push(`${r2}:${o3}`);
  }), e;
}
function ho(t) {
  const e = [];
  return Object.values(t).forEach((n2) => {
    e.push(...It(n2.accounts));
  }), e;
}
function po(t, e) {
  const n2 = [];
  return Object.values(t).forEach((r2) => {
    It(r2.accounts).includes(e) && n2.push(...r2.methods);
  }), n2;
}
function go(t, e) {
  const n2 = [];
  return Object.values(t).forEach((r2) => {
    It(r2.accounts).includes(e) && n2.push(...r2.events);
  }), n2;
}
function gn(t) {
  return t.includes(":");
}
function yo(t) {
  return gn(t) ? t.split(":")[0] : t;
}
function mo(t) {
  const e = {};
  return t == null ? void 0 : t.forEach((n2) => {
    var r2;
    const [o3, i3] = n2.split(":");
    e[o3] || (e[o3] = { accounts: [], chains: [], events: [], methods: [] }), e[o3].accounts.push(n2), (r2 = e[o3].chains) == null || r2.push(`${o3}:${i3}`);
  }), e;
}
function ca(t, e) {
  e = e.map((r2) => r2.replace("did:pkh:", ""));
  const n2 = mo(e);
  for (const [r2, o3] of Object.entries(n2)) o3.methods ? o3.methods = at(o3.methods, t) : o3.methods = t, o3.events = ["chainChanged", "accountsChanged"];
  return n2;
}
var wo = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
var bo = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function ht(t, e) {
  const { message: n2, code: r2 } = bo[t];
  return { message: e ? `${n2} ${e}` : n2, code: r2 };
}
function Nt(t, e) {
  const { message: n2, code: r2 } = wo[t];
  return { message: e ? `${n2} ${e}` : n2, code: r2 };
}
function oe(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : true : false;
}
function xe(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Et(t) {
  return typeof t > "u";
}
function nt(t, e) {
  return e && Et(t) ? true : typeof t == "string" && !!t.trim().length;
}
function Se(t, e) {
  return e && Et(t) ? true : typeof t == "number" && !isNaN(t);
}
function aa(t, e) {
  const { requiredNamespaces: n2 } = e, r2 = Object.keys(t.namespaces), o3 = Object.keys(n2);
  let i3 = true;
  return gt(o3, r2) ? (r2.forEach((s) => {
    const { accounts: c3, methods: a2, events: u4 } = t.namespaces[s], l2 = It(c3), f5 = n2[s];
    (!gt(ce(s, f5), l2) || !gt(f5.methods, a2) || !gt(f5.events, u4)) && (i3 = false);
  }), i3) : false;
}
function ie(t) {
  return nt(t, false) && t.includes(":") ? t.split(":").length === 2 : false;
}
function Eo(t) {
  if (nt(t, false) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const n2 = e[0] + ":" + e[1];
      return !!e[2] && ie(n2);
    }
  }
  return false;
}
function ua(t) {
  function e(n2) {
    try {
      return typeof new URL(n2) < "u";
    } catch {
      return false;
    }
  }
  try {
    if (nt(t, false)) {
      if (e(t)) return true;
      const n2 = Le(t);
      return e(n2);
    }
  } catch {
  }
  return false;
}
function fa(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function la(t) {
  return t == null ? void 0 : t.topic;
}
function da(t, e) {
  let n2 = null;
  return nt(t == null ? void 0 : t.publicKey, false) || (n2 = ht("MISSING_OR_INVALID", `${e} controller public key should be a string`)), n2;
}
function mn(t) {
  let e = true;
  return oe(t) ? t.length && (e = t.every((n2) => nt(n2, false))) : e = false, e;
}
function vo(t, e, n2) {
  let r2 = null;
  return oe(e) && e.length ? e.forEach((o3) => {
    r2 || ie(o3) || (r2 = Nt("UNSUPPORTED_CHAINS", `${n2}, chain ${o3} should be a string and conform to "namespace:chainId" format`));
  }) : ie(t) || (r2 = Nt("UNSUPPORTED_CHAINS", `${n2}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r2;
}
function xo(t, e, n2) {
  let r2 = null;
  return Object.entries(t).forEach(([o3, i3]) => {
    if (r2) return;
    const s = vo(o3, ce(o3, i3), `${e} ${n2}`);
    s && (r2 = s);
  }), r2;
}
function So(t, e) {
  let n2 = null;
  return oe(t) ? t.forEach((r2) => {
    n2 || Eo(r2) || (n2 = Nt("UNSUPPORTED_ACCOUNTS", `${e}, account ${r2} should be a string and conform to "namespace:chainId:address" format`));
  }) : n2 = Nt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n2;
}
function Oo(t, e) {
  let n2 = null;
  return Object.values(t).forEach((r2) => {
    if (n2) return;
    const o3 = So(r2 == null ? void 0 : r2.accounts, `${e} namespace`);
    o3 && (n2 = o3);
  }), n2;
}
function Ao(t, e) {
  let n2 = null;
  return mn(t == null ? void 0 : t.methods) ? mn(t == null ? void 0 : t.events) || (n2 = Nt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : n2 = Nt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), n2;
}
function wn(t, e) {
  let n2 = null;
  return Object.values(t).forEach((r2) => {
    if (n2) return;
    const o3 = Ao(r2, `${e}, namespace`);
    o3 && (n2 = o3);
  }), n2;
}
function ha(t, e, n2) {
  let r2 = null;
  if (t && xe(t)) {
    const o3 = wn(t, e);
    o3 && (r2 = o3);
    const i3 = xo(t, e, n2);
    i3 && (r2 = i3);
  } else r2 = ht("MISSING_OR_INVALID", `${e}, ${n2} should be an object with data`);
  return r2;
}
function Bo(t, e) {
  let n2 = null;
  if (t && xe(t)) {
    const r2 = wn(t, e);
    r2 && (n2 = r2);
    const o3 = Oo(t, e);
    o3 && (n2 = o3);
  } else n2 = ht("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return n2;
}
function Io(t) {
  return nt(t.protocol, true);
}
function pa(t, e) {
  let n2 = false;
  return e && !t ? n2 = true : t && oe(t) && t.length && t.forEach((r2) => {
    n2 = Io(r2);
  }), n2;
}
function ga(t) {
  return typeof t == "number";
}
function ya(t) {
  return typeof t < "u" && typeof t !== null;
}
function ma(t) {
  return !(!t || typeof t != "object" || !t.code || !Se(t.code, false) || !t.message || !nt(t.message, false));
}
function wa(t) {
  return !(Et(t) || !nt(t.method, false));
}
function ba(t) {
  return !(Et(t) || Et(t.result) && Et(t.error) || !Se(t.id, false) || !nt(t.jsonrpc, false));
}
function Ea(t) {
  return !(Et(t) || !nt(t.name, false));
}
function va(t, e) {
  return !(!ie(e) || !ho(t).includes(e));
}
function xa(t, e, n2) {
  return nt(n2, false) ? po(t, e).includes(n2) : false;
}
function Sa(t, e, n2) {
  return nt(n2, false) ? go(t, e).includes(n2) : false;
}
function No(t, e, n2) {
  let r2 = null;
  const o3 = Oa(t), i3 = Aa(e), s = Object.keys(o3), c3 = Object.keys(i3), a2 = Uo(Object.keys(t)), u4 = Uo(Object.keys(e)), l2 = a2.filter((f5) => !u4.includes(f5));
  return l2.length && (r2 = ht("NON_CONFORMING_NAMESPACES", `${n2} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l2.toString()}
      Received: ${Object.keys(e).toString()}`)), gt(s, c3) || (r2 = ht("NON_CONFORMING_NAMESPACES", `${n2} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${c3.toString()}`)), Object.keys(e).forEach((f5) => {
    if (!f5.includes(":") || r2) return;
    const h4 = It(e[f5].accounts);
    h4.includes(f5) || (r2 = ht("NON_CONFORMING_NAMESPACES", `${n2} namespaces accounts don't satisfy namespace accounts for ${f5}
        Required: ${f5}
        Approved: ${h4.toString()}`));
  }), s.forEach((f5) => {
    r2 || (gt(o3[f5].methods, i3[f5].methods) ? gt(o3[f5].events, i3[f5].events) || (r2 = ht("NON_CONFORMING_NAMESPACES", `${n2} namespaces events don't satisfy namespace events for ${f5}`)) : r2 = ht("NON_CONFORMING_NAMESPACES", `${n2} namespaces methods don't satisfy namespace methods for ${f5}`));
  }), r2;
}
function Oa(t) {
  const e = {};
  return Object.keys(t).forEach((n2) => {
    var r2;
    n2.includes(":") ? e[n2] = t[n2] : (r2 = t[n2].chains) == null || r2.forEach((o3) => {
      e[o3] = { methods: t[n2].methods, events: t[n2].events };
    });
  }), e;
}
function Uo(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Aa(t) {
  const e = {};
  return Object.keys(t).forEach((n2) => {
    if (n2.includes(":")) e[n2] = t[n2];
    else {
      const r2 = It(t[n2].accounts);
      r2 == null ? void 0 : r2.forEach((o3) => {
        e[o3] = { accounts: t[n2].accounts.filter((i3) => i3.includes(`${o3}:`)), methods: t[n2].methods, events: t[n2].events };
      });
    }
  }), e;
}
function Ba(t, e) {
  return Se(t, false) && t <= e.max && t >= e.min;
}
function Ia() {
  const t = xt();
  return new Promise((e) => {
    switch (t) {
      case Y.browser:
        e(To());
        break;
      case Y.reactNative:
        e(Ro());
        break;
      case Y.node:
        e(_o());
        break;
      default:
        e(true);
    }
  });
}
function To() {
  return Yt() && (navigator == null ? void 0 : navigator.onLine);
}
async function Ro() {
  if (pt() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return true;
}
function _o() {
  return true;
}
function Na(t) {
  switch (xt()) {
    case Y.browser:
      $o(t);
      break;
    case Y.reactNative:
      Lo(t);
      break;
    case Y.node:
      break;
  }
}
function $o(t) {
  !pt() && Yt() && (window.addEventListener("online", () => t(true)), window.addEventListener("offline", () => t(false)));
}
function Lo(t) {
  pt() && typeof global < "u" && global != null && global.NetInfo && (global == null ? void 0 : global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
var bn = {};
var Ua = class {
  static get(e) {
    return bn[e];
  }
  static set(e, n2) {
    bn[e] = n2;
  }
  static delete(e) {
    delete bn[e];
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_events3 = __toESM(require_events());

// node_modules/@walletconnect/types/dist/index.es.js
var import_events2 = __toESM(require_events());
var a = Object.defineProperty;
var u = (e, s, r2) => s in e ? a(e, s, { enumerable: true, configurable: true, writable: true, value: r2 }) : e[s] = r2;
var c = (e, s, r2) => u(e, typeof s != "symbol" ? s + "" : s, r2);
var h2 = class extends IEvents {
  constructor(s) {
    super(), this.opts = s, c(this, "protocol", "wc"), c(this, "version", 2);
  }
};
var p = Object.defineProperty;
var b = (e, s, r2) => s in e ? p(e, s, { enumerable: true, configurable: true, writable: true, value: r2 }) : e[s] = r2;
var v = (e, s, r2) => b(e, typeof s != "symbol" ? s + "" : s, r2);
var I = class extends IEvents {
  constructor(s, r2) {
    super(), this.core = s, this.logger = r2, v(this, "records", /* @__PURE__ */ new Map());
  }
};
var y2 = class {
  constructor(s, r2) {
    this.logger = s, this.core = r2;
  }
};
var m = class extends IEvents {
  constructor(s, r2) {
    super(), this.relayer = s, this.logger = r2;
  }
};
var d = class extends IEvents {
  constructor(s) {
    super();
  }
};
var f3 = class {
  constructor(s, r2, t, q3) {
    this.core = s, this.logger = r2, this.name = t;
  }
};
var P = class extends IEvents {
  constructor(s, r2) {
    super(), this.relayer = s, this.logger = r2;
  }
};
var S = class extends IEvents {
  constructor(s, r2) {
    super(), this.core = s, this.logger = r2;
  }
};
var M = class {
  constructor(s, r2, t) {
    this.core = s, this.logger = r2, this.store = t;
  }
};
var O = class {
  constructor(s, r2) {
    this.projectId = s, this.logger = r2;
  }
};
var R = class {
  constructor(s, r2, t) {
    this.core = s, this.logger = r2, this.telemetryEnabled = t;
  }
};
var T = Object.defineProperty;
var k2 = (e, s, r2) => s in e ? T(e, s, { enumerable: true, configurable: true, writable: true, value: r2 }) : e[s] = r2;
var i2 = (e, s, r2) => k2(e, typeof s != "symbol" ? s + "" : s, r2);
var J = class {
  constructor(s) {
    this.opts = s, i2(this, "protocol", "wc"), i2(this, "version", 2);
  }
};
var V2 = class {
  constructor(s) {
    this.client = s;
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_time2 = __toESM(require_cjs());
var import_window_getters2 = __toESM(require_cjs2());
var ze2 = "wc";
var Le2 = 2;
var he2 = "core";
var B = `${ze2}@2:${he2}:`;
var Et2 = { name: he2, logger: "error" };
var It2 = { database: ":memory:" };
var Tt2 = "crypto";
var ke2 = "client_ed25519_seed";
var Ct2 = import_time2.ONE_DAY;
var Pt2 = "keychain";
var St2 = "0.3";
var Rt2 = "messages";
var Ot2 = "0.3";
var je2 = import_time2.SIX_HOURS;
var At2 = "publisher";
var xt2 = "irn";
var Nt2 = "error";
var Ue = "wss://relay.walletconnect.org";
var $t2 = "relayer";
var C2 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" };
var zt = "_subscription";
var L = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" };
var Lt2 = 0.1;
var _e2 = "2.19.2";
var Q = { link_mode: "link_mode", relay: "relay" };
var le2 = { inbound: "inbound", outbound: "outbound" };
var kt2 = "0.3";
var jt2 = "WALLETCONNECT_CLIENT_ID";
var Fe2 = "WALLETCONNECT_LINK_MODE_APPS";
var $ = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" };
var Ut = "subscription";
var Ft = "0.3";
var Hs2 = import_time2.FIVE_SECONDS * 1e3;
var Mt2 = "pairing";
var Kt2 = "0.3";
var ie2 = { wc_pairingDelete: { req: { ttl: import_time2.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: import_time2.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: import_time2.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: import_time2.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: import_time2.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: import_time2.ONE_DAY, prompt: false, tag: 0 } } };
var se2 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" };
var F2 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" };
var Bt2 = "history";
var Vt2 = "0.3";
var qt2 = "expirer";
var M2 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" };
var Gt2 = "0.3";
var Wt2 = "verify-api";
var Xs2 = "https://verify.walletconnect.com";
var Ht2 = "https://verify.walletconnect.org";
var ue2 = Ht2;
var Yt2 = `${ue2}/v3`;
var Jt2 = [Xs2, Ht2];
var Xt2 = "echo";
var Zt = "https://echo.walletconnect.com";
var G2 = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" };
var Y2 = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" };
var Qs2 = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" };
var er2 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" };
var tr2 = { authenticated_session_approve_started: "authenticated_session_approve_started", authenticated_session_not_expired: "authenticated_session_not_expired", chains_caip2_compliant: "chains_caip2_compliant", chains_evm_compliant: "chains_evm_compliant", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve", authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success" };
var ir2 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", missing_session_authenticate_request: "missing_session_authenticate_request", session_authenticate_request_expired: "session_authenticate_request_expired", chains_caip2_compliant_failure: "chains_caip2_compliant_failure", chains_evm_compliant_failure: "chains_evm_compliant_failure", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" };
var Qt2 = 0.1;
var ei2 = "event-client";
var ti = 86400;
var ii = "https://pulse.walletconnect.org/batch";
function sr2(r2, e) {
  if (r2.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i3 = 0; i3 < t.length; i3++) t[i3] = 255;
  for (var s = 0; s < r2.length; s++) {
    var n2 = r2.charAt(s), o3 = n2.charCodeAt(0);
    if (t[o3] !== 255) throw new TypeError(n2 + " is ambiguous");
    t[o3] = s;
  }
  var a2 = r2.length, c3 = r2.charAt(0), h4 = Math.log(a2) / Math.log(256), l2 = Math.log(256) / Math.log(a2);
  function d3(u4) {
    if (u4 instanceof Uint8Array || (ArrayBuffer.isView(u4) ? u4 = new Uint8Array(u4.buffer, u4.byteOffset, u4.byteLength) : Array.isArray(u4) && (u4 = Uint8Array.from(u4))), !(u4 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (u4.length === 0) return "";
    for (var b4 = 0, x3 = 0, I3 = 0, D3 = u4.length; I3 !== D3 && u4[I3] === 0; ) I3++, b4++;
    for (var j2 = (D3 - I3) * l2 + 1 >>> 0, T3 = new Uint8Array(j2); I3 !== D3; ) {
      for (var q3 = u4[I3], J4 = 0, K4 = j2 - 1; (q3 !== 0 || J4 < x3) && K4 !== -1; K4--, J4++) q3 += 256 * T3[K4] >>> 0, T3[K4] = q3 % a2 >>> 0, q3 = q3 / a2 >>> 0;
      if (q3 !== 0) throw new Error("Non-zero carry");
      x3 = J4, I3++;
    }
    for (var H3 = j2 - x3; H3 !== j2 && T3[H3] === 0; ) H3++;
    for (var me4 = c3.repeat(b4); H3 < j2; ++H3) me4 += r2.charAt(T3[H3]);
    return me4;
  }
  function g3(u4) {
    if (typeof u4 != "string") throw new TypeError("Expected String");
    if (u4.length === 0) return new Uint8Array();
    var b4 = 0;
    if (u4[b4] !== " ") {
      for (var x3 = 0, I3 = 0; u4[b4] === c3; ) x3++, b4++;
      for (var D3 = (u4.length - b4) * h4 + 1 >>> 0, j2 = new Uint8Array(D3); u4[b4]; ) {
        var T3 = t[u4.charCodeAt(b4)];
        if (T3 === 255) return;
        for (var q3 = 0, J4 = D3 - 1; (T3 !== 0 || q3 < I3) && J4 !== -1; J4--, q3++) T3 += a2 * j2[J4] >>> 0, j2[J4] = T3 % 256 >>> 0, T3 = T3 / 256 >>> 0;
        if (T3 !== 0) throw new Error("Non-zero carry");
        I3 = q3, b4++;
      }
      if (u4[b4] !== " ") {
        for (var K4 = D3 - I3; K4 !== D3 && j2[K4] === 0; ) K4++;
        for (var H3 = new Uint8Array(x3 + (D3 - K4)), me4 = x3; K4 !== D3; ) H3[me4++] = j2[K4++];
        return H3;
      }
    }
  }
  function _3(u4) {
    var b4 = g3(u4);
    if (b4) return b4;
    throw new Error(`Non-${e} character`);
  }
  return { encode: d3, decodeUnsafe: g3, decode: _3 };
}
var rr2 = sr2;
var nr2 = rr2;
var si2 = (r2) => {
  if (r2 instanceof Uint8Array && r2.constructor.name === "Uint8Array") return r2;
  if (r2 instanceof ArrayBuffer) return new Uint8Array(r2);
  if (ArrayBuffer.isView(r2)) return new Uint8Array(r2.buffer, r2.byteOffset, r2.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var or2 = (r2) => new TextEncoder().encode(r2);
var ar2 = (r2) => new TextDecoder().decode(r2);
var cr2 = class {
  constructor(e, t, i3) {
    this.name = e, this.prefix = t, this.baseEncode = i3;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var hr2 = class {
  constructor(e, t, i3) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i3;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return ri2(this, e);
  }
};
var lr2 = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return ri2(this, e);
  }
  decode(e) {
    const t = e[0], i3 = this.decoders[t];
    if (i3) return i3.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var ri2 = (r2, e) => new lr2({ ...r2.decoders || { [r2.prefix]: r2 }, ...e.decoders || { [e.prefix]: e } });
var ur2 = class {
  constructor(e, t, i3, s) {
    this.name = e, this.prefix = t, this.baseEncode = i3, this.baseDecode = s, this.encoder = new cr2(e, t, i3), this.decoder = new hr2(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
var Ee2 = ({ name: r2, prefix: e, encode: t, decode: i3 }) => new ur2(r2, e, t, i3);
var de2 = ({ prefix: r2, name: e, alphabet: t }) => {
  const { encode: i3, decode: s } = nr2(t, e);
  return Ee2({ prefix: r2, name: e, encode: i3, decode: (n2) => si2(s(n2)) });
};
var dr2 = (r2, e, t, i3) => {
  const s = {};
  for (let l2 = 0; l2 < e.length; ++l2) s[e[l2]] = l2;
  let n2 = r2.length;
  for (; r2[n2 - 1] === "="; ) --n2;
  const o3 = new Uint8Array(n2 * t / 8 | 0);
  let a2 = 0, c3 = 0, h4 = 0;
  for (let l2 = 0; l2 < n2; ++l2) {
    const d3 = s[r2[l2]];
    if (d3 === void 0) throw new SyntaxError(`Non-${i3} character`);
    c3 = c3 << t | d3, a2 += t, a2 >= 8 && (a2 -= 8, o3[h4++] = 255 & c3 >> a2);
  }
  if (a2 >= t || 255 & c3 << 8 - a2) throw new SyntaxError("Unexpected end of data");
  return o3;
};
var gr = (r2, e, t) => {
  const i3 = e[e.length - 1] === "=", s = (1 << t) - 1;
  let n2 = "", o3 = 0, a2 = 0;
  for (let c3 = 0; c3 < r2.length; ++c3) for (a2 = a2 << 8 | r2[c3], o3 += 8; o3 > t; ) o3 -= t, n2 += e[s & a2 >> o3];
  if (o3 && (n2 += e[s & a2 << t - o3]), i3) for (; n2.length * t & 7; ) n2 += "=";
  return n2;
};
var P2 = ({ name: r2, prefix: e, bitsPerChar: t, alphabet: i3 }) => Ee2({ prefix: e, name: r2, encode(s) {
  return gr(s, i3, t);
}, decode(s) {
  return dr2(s, i3, t, r2);
} });
var pr = Ee2({ prefix: "\0", name: "identity", encode: (r2) => ar2(r2), decode: (r2) => or2(r2) });
var yr = Object.freeze({ __proto__: null, identity: pr });
var br2 = P2({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var mr2 = Object.freeze({ __proto__: null, base2: br2 });
var fr2 = P2({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Dr2 = Object.freeze({ __proto__: null, base8: fr2 });
var vr2 = de2({ prefix: "9", name: "base10", alphabet: "0123456789" });
var wr2 = Object.freeze({ __proto__: null, base10: vr2 });
var _r2 = P2({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var Er = P2({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Ir2 = Object.freeze({ __proto__: null, base16: _r2, base16upper: Er });
var Tr2 = P2({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var Cr2 = P2({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var Pr2 = P2({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var Sr2 = P2({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var Rr2 = P2({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var Or2 = P2({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var Ar2 = P2({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var xr = P2({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var Nr2 = P2({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var $r2 = Object.freeze({ __proto__: null, base32: Tr2, base32upper: Cr2, base32pad: Pr2, base32padupper: Sr2, base32hex: Rr2, base32hexupper: Or2, base32hexpad: Ar2, base32hexpadupper: xr, base32z: Nr2 });
var zr2 = de2({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var Lr2 = de2({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var kr2 = Object.freeze({ __proto__: null, base36: zr2, base36upper: Lr2 });
var jr2 = de2({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var Ur2 = de2({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Fr2 = Object.freeze({ __proto__: null, base58btc: jr2, base58flickr: Ur2 });
var Mr2 = P2({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var Kr2 = P2({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var Br2 = P2({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var Vr2 = P2({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var qr2 = Object.freeze({ __proto__: null, base64: Mr2, base64pad: Kr2, base64url: Br2, base64urlpad: Vr2 });
var ni2 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var Gr2 = ni2.reduce((r2, e, t) => (r2[t] = e, r2), []);
var Wr2 = ni2.reduce((r2, e, t) => (r2[e.codePointAt(0)] = t, r2), []);
function Hr2(r2) {
  return r2.reduce((e, t) => (e += Gr2[t], e), "");
}
function Yr2(r2) {
  const e = [];
  for (const t of r2) {
    const i3 = Wr2[t.codePointAt(0)];
    if (i3 === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i3);
  }
  return new Uint8Array(e);
}
var Jr2 = Ee2({ prefix: "🚀", name: "base256emoji", encode: Hr2, decode: Yr2 });
var Xr2 = Object.freeze({ __proto__: null, base256emoji: Jr2 });
var Zr2 = ai;
var oi2 = 128;
var Qr2 = 127;
var en2 = ~Qr2;
var tn2 = Math.pow(2, 31);
function ai(r2, e, t) {
  e = e || [], t = t || 0;
  for (var i3 = t; r2 >= tn2; ) e[t++] = r2 & 255 | oi2, r2 /= 128;
  for (; r2 & en2; ) e[t++] = r2 & 255 | oi2, r2 >>>= 7;
  return e[t] = r2 | 0, ai.bytes = t - i3 + 1, e;
}
var sn3 = Me2;
var rn2 = 128;
var ci = 127;
function Me2(r2, i3) {
  var t = 0, i3 = i3 || 0, s = 0, n2 = i3, o3, a2 = r2.length;
  do {
    if (n2 >= a2) throw Me2.bytes = 0, new RangeError("Could not decode varint");
    o3 = r2[n2++], t += s < 28 ? (o3 & ci) << s : (o3 & ci) * Math.pow(2, s), s += 7;
  } while (o3 >= rn2);
  return Me2.bytes = n2 - i3, t;
}
var nn2 = Math.pow(2, 7);
var on2 = Math.pow(2, 14);
var an2 = Math.pow(2, 21);
var cn2 = Math.pow(2, 28);
var hn2 = Math.pow(2, 35);
var ln2 = Math.pow(2, 42);
var un2 = Math.pow(2, 49);
var dn2 = Math.pow(2, 56);
var gn2 = Math.pow(2, 63);
var pn2 = function(r2) {
  return r2 < nn2 ? 1 : r2 < on2 ? 2 : r2 < an2 ? 3 : r2 < cn2 ? 4 : r2 < hn2 ? 5 : r2 < ln2 ? 6 : r2 < un2 ? 7 : r2 < dn2 ? 8 : r2 < gn2 ? 9 : 10;
};
var yn = { encode: Zr2, decode: sn3, encodingLength: pn2 };
var hi = yn;
var li2 = (r2, e, t = 0) => (hi.encode(r2, e, t), e);
var ui = (r2) => hi.encodingLength(r2);
var Ke2 = (r2, e) => {
  const t = e.byteLength, i3 = ui(r2), s = i3 + ui(t), n2 = new Uint8Array(s + t);
  return li2(r2, n2, 0), li2(t, n2, i3), n2.set(e, s), new bn2(r2, t, e, n2);
};
var bn2 = class {
  constructor(e, t, i3, s) {
    this.code = e, this.size = t, this.digest = i3, this.bytes = s;
  }
};
var di = ({ name: r2, code: e, encode: t }) => new mn2(r2, e, t);
var mn2 = class {
  constructor(e, t, i3) {
    this.name = e, this.code = t, this.encode = i3;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? Ke2(this.code, t) : t.then((i3) => Ke2(this.code, i3));
    } else throw Error("Unknown type, must be binary type");
  }
};
var gi2 = (r2) => async (e) => new Uint8Array(await crypto.subtle.digest(r2, e));
var fn2 = di({ name: "sha2-256", code: 18, encode: gi2("SHA-256") });
var Dn = di({ name: "sha2-512", code: 19, encode: gi2("SHA-512") });
var vn = Object.freeze({ __proto__: null, sha256: fn2, sha512: Dn });
var pi = 0;
var wn2 = "identity";
var yi2 = si2;
var _n2 = (r2) => Ke2(pi, yi2(r2));
var En2 = { code: pi, name: wn2, encode: yi2, digest: _n2 };
var In = Object.freeze({ __proto__: null, identity: En2 });
new TextEncoder(), new TextDecoder();
var bi2 = { ...yr, ...mr2, ...Dr2, ...wr2, ...Ir2, ...$r2, ...kr2, ...Fr2, ...qr2, ...Xr2 };
({ ...vn, ...In });
function Tn2(r2 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(r2) : new Uint8Array(r2);
}
function mi2(r2, e, t, i3) {
  return { name: r2, prefix: e, encoder: { name: r2, prefix: e, encode: t }, decoder: { decode: i3 } };
}
var fi2 = mi2("utf8", "u", (r2) => "u" + new TextDecoder("utf8").decode(r2), (r2) => new TextEncoder().encode(r2.substring(1)));
var Be2 = mi2("ascii", "a", (r2) => {
  let e = "a";
  for (let t = 0; t < r2.length; t++) e += String.fromCharCode(r2[t]);
  return e;
}, (r2) => {
  r2 = r2.substring(1);
  const e = Tn2(r2.length);
  for (let t = 0; t < r2.length; t++) e[t] = r2.charCodeAt(t);
  return e;
});
var Cn2 = { utf8: fi2, "utf-8": fi2, hex: bi2.base16, latin1: Be2, ascii: Be2, binary: Be2, ...bi2 };
function Pn2(r2, e = "utf8") {
  const t = Cn2[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r2, "utf8") : t.decoder.decode(`${t.prefix}${r2}`);
}
var Sn2 = Object.defineProperty;
var Rn2 = (r2, e, t) => e in r2 ? Sn2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var W = (r2, e, t) => Rn2(r2, typeof e != "symbol" ? e + "" : e, t);
var Di2 = class {
  constructor(e, t) {
    this.core = e, this.logger = t, W(this, "keychain", /* @__PURE__ */ new Map()), W(this, "name", Pt2), W(this, "version", St2), W(this, "initialized", false), W(this, "storagePrefix", B), W(this, "init", async () => {
      if (!this.initialized) {
        const i3 = await this.getKeyChain();
        typeof i3 < "u" && (this.keychain = i3), this.initialized = true;
      }
    }), W(this, "has", (i3) => (this.isInitialized(), this.keychain.has(i3))), W(this, "set", async (i3, s) => {
      this.isInitialized(), this.keychain.set(i3, s), await this.persist();
    }), W(this, "get", (i3) => {
      this.isInitialized();
      const s = this.keychain.get(i3);
      if (typeof s > "u") {
        const { message: n2 } = ht("NO_MATCHING_KEY", `${this.name}: ${i3}`);
        throw new Error(n2);
      }
      return s;
    }), W(this, "del", async (i3) => {
      this.isInitialized(), this.keychain.delete(i3), await this.persist();
    }), this.core = e, this.logger = E(t, this.name);
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, fi(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? li(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ht("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var On2 = Object.defineProperty;
var An = (r2, e, t) => e in r2 ? On2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var S2 = (r2, e, t) => An(r2, typeof e != "symbol" ? e + "" : e, t);
var vi2 = class {
  constructor(e, t, i3) {
    this.core = e, this.logger = t, S2(this, "name", Tt2), S2(this, "keychain"), S2(this, "randomSessionIdentifier", jc()), S2(this, "initialized", false), S2(this, "init", async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }), S2(this, "hasKeys", (s) => (this.isInitialized(), this.keychain.has(s))), S2(this, "getClientId", async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), n2 = Po(s);
      return Qe(n2.publicKey);
    }), S2(this, "generateKeyPair", () => {
      this.isInitialized();
      const s = Lc();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }), S2(this, "signJWT", async (s) => {
      this.isInitialized();
      const n2 = await this.getClientSeed(), o3 = Po(n2), a2 = this.randomSessionIdentifier, c3 = Ct2;
      return await Qo(a2, s, c3, o3);
    }), S2(this, "generateSharedKey", (s, n2, o3) => {
      this.isInitialized();
      const a2 = this.getPrivateKey(s), c3 = Cc(a2, n2);
      return this.setSymKey(c3, o3);
    }), S2(this, "setSymKey", async (s, n2) => {
      this.isInitialized();
      const o3 = n2 || Pc(s);
      return await this.keychain.set(o3, s), o3;
    }), S2(this, "deleteKeyPair", async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }), S2(this, "deleteSymKey", async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }), S2(this, "encode", async (s, n2, o3) => {
      this.isInitialized();
      const a2 = oo(o3), c3 = safeJsonStringify(n2);
      if (Fc(a2)) return Dc(c3, o3 == null ? void 0 : o3.encoding);
      if (Kc(a2)) {
        const g3 = a2.senderPublicKey, _3 = a2.receiverPublicKey;
        s = await this.generateSharedKey(g3, _3);
      }
      const h4 = this.getSymKey(s), { type: l2, senderPublicKey: d3 } = a2;
      return Vc({ type: l2, symKey: h4, message: c3, senderPublicKey: d3, encoding: o3 == null ? void 0 : o3.encoding });
    }), S2(this, "decode", async (s, n2, o3) => {
      this.isInitialized();
      const a2 = qc(n2, o3);
      if (Fc(a2)) {
        const c3 = Hc(n2, o3 == null ? void 0 : o3.encoding);
        return safeJsonParse(c3);
      }
      if (Kc(a2)) {
        const c3 = a2.receiverPublicKey, h4 = a2.senderPublicKey;
        s = await this.generateSharedKey(c3, h4);
      }
      try {
        const c3 = this.getSymKey(s), h4 = Mc({ symKey: c3, encoded: n2, encoding: o3 == null ? void 0 : o3.encoding });
        return safeJsonParse(h4);
      } catch (c3) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(c3);
      }
    }), S2(this, "getPayloadType", (s, n2 = Ht) => {
      const o3 = ve({ encoded: s, encoding: n2 });
      return Bt(o3.type);
    }), S2(this, "getPayloadSenderPublicKey", (s, n2 = Ht) => {
      const o3 = ve({ encoded: s, encoding: n2 });
      return o3.senderPublicKey ? toString(o3.senderPublicKey, G) : void 0;
    }), this.core = e, this.logger = E(t, this.name), this.keychain = i3 || new Di2(this.core, this.logger);
  }
  get context() {
    return y(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(ke2);
    } catch {
      e = jc(), await this.keychain.set(ke2, e);
    }
    return Pn2(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ht("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var xn2 = Object.defineProperty;
var Nn = Object.defineProperties;
var $n2 = Object.getOwnPropertyDescriptors;
var wi2 = Object.getOwnPropertySymbols;
var zn2 = Object.prototype.hasOwnProperty;
var Ln = Object.prototype.propertyIsEnumerable;
var Ve2 = (r2, e, t) => e in r2 ? xn2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var kn2 = (r2, e) => {
  for (var t in e || (e = {})) zn2.call(e, t) && Ve2(r2, t, e[t]);
  if (wi2) for (var t of wi2(e)) Ln.call(e, t) && Ve2(r2, t, e[t]);
  return r2;
};
var jn2 = (r2, e) => Nn(r2, $n2(e));
var k3 = (r2, e, t) => Ve2(r2, typeof e != "symbol" ? e + "" : e, t);
var _i2 = class extends y2 {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, k3(this, "messages", /* @__PURE__ */ new Map()), k3(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), k3(this, "name", Rt2), k3(this, "version", Ot2), k3(this, "initialized", false), k3(this, "storagePrefix", B), k3(this, "init", async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i3 = await this.getRelayerMessages();
          typeof i3 < "u" && (this.messages = i3);
          const s = await this.getRelayerMessagesWithoutClientAck();
          typeof s < "u" && (this.messagesWithoutClientAck = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i3) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i3);
        } finally {
          this.initialized = true;
        }
      }
    }), k3(this, "set", async (i3, s, n2) => {
      this.isInitialized();
      const o3 = kc(s);
      let a2 = this.messages.get(i3);
      if (typeof a2 > "u" && (a2 = {}), typeof a2[o3] < "u") return o3;
      if (a2[o3] = s, this.messages.set(i3, a2), n2 === le2.inbound) {
        const c3 = this.messagesWithoutClientAck.get(i3) || {};
        this.messagesWithoutClientAck.set(i3, jn2(kn2({}, c3), { [o3]: s }));
      }
      return await this.persist(), o3;
    }), k3(this, "get", (i3) => {
      this.isInitialized();
      let s = this.messages.get(i3);
      return typeof s > "u" && (s = {}), s;
    }), k3(this, "getWithoutAck", (i3) => {
      this.isInitialized();
      const s = {};
      for (const n2 of i3) {
        const o3 = this.messagesWithoutClientAck.get(n2) || {};
        s[n2] = Object.values(o3);
      }
      return s;
    }), k3(this, "has", (i3, s) => {
      this.isInitialized();
      const n2 = this.get(i3), o3 = kc(s);
      return typeof n2[o3] < "u";
    }), k3(this, "ack", async (i3, s) => {
      this.isInitialized();
      const n2 = this.messagesWithoutClientAck.get(i3);
      if (typeof n2 > "u") return;
      const o3 = kc(s);
      delete n2[o3], Object.keys(n2).length === 0 ? this.messagesWithoutClientAck.delete(i3) : this.messagesWithoutClientAck.set(i3, n2), await this.persist();
    }), k3(this, "del", async (i3) => {
      this.isInitialized(), this.messages.delete(i3), this.messagesWithoutClientAck.delete(i3), await this.persist();
    }), this.logger = E(e, this.name), this.core = t;
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get storageKeyWithoutClientAck() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, fi(e));
  }
  async setRelayerMessagesWithoutClientAck(e) {
    await this.core.storage.setItem(this.storageKeyWithoutClientAck, fi(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? li(e) : void 0;
  }
  async getRelayerMessagesWithoutClientAck() {
    const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
    return typeof e < "u" ? li(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ht("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var Un = Object.defineProperty;
var Fn2 = Object.defineProperties;
var Mn2 = Object.getOwnPropertyDescriptors;
var Ei2 = Object.getOwnPropertySymbols;
var Kn2 = Object.prototype.hasOwnProperty;
var Bn = Object.prototype.propertyIsEnumerable;
var qe2 = (r2, e, t) => e in r2 ? Un(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var Ie2 = (r2, e) => {
  for (var t in e || (e = {})) Kn2.call(e, t) && qe2(r2, t, e[t]);
  if (Ei2) for (var t of Ei2(e)) Bn.call(e, t) && qe2(r2, t, e[t]);
  return r2;
};
var Ge2 = (r2, e) => Fn2(r2, Mn2(e));
var V3 = (r2, e, t) => qe2(r2, typeof e != "symbol" ? e + "" : e, t);
var Vn2 = class extends m {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, V3(this, "events", new import_events3.EventEmitter()), V3(this, "name", At2), V3(this, "queue", /* @__PURE__ */ new Map()), V3(this, "publishTimeout", (0, import_time2.toMiliseconds)(import_time2.ONE_MINUTE)), V3(this, "initialPublishTimeout", (0, import_time2.toMiliseconds)(import_time2.ONE_SECOND * 15)), V3(this, "needsTransportRestart", false), V3(this, "publish", async (i3, s, n2) => {
      var o3;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i3, message: s, opts: n2 } });
      const a2 = (n2 == null ? void 0 : n2.ttl) || je2, c3 = Zc(n2), h4 = (n2 == null ? void 0 : n2.prompt) || false, l2 = (n2 == null ? void 0 : n2.tag) || 0, d3 = (n2 == null ? void 0 : n2.id) || getBigIntRpcId().toString(), g3 = { topic: i3, message: s, opts: { ttl: a2, relay: c3, prompt: h4, tag: l2, id: d3, attestation: n2 == null ? void 0 : n2.attestation, tvf: n2 == null ? void 0 : n2.tvf } }, _3 = `Failed to publish payload, please try again. id:${d3} tag:${l2}`;
      try {
        const u4 = new Promise(async (b4) => {
          const x3 = ({ id: D3 }) => {
            g3.opts.id === D3 && (this.removeRequestFromQueue(D3), this.relayer.events.removeListener(C2.publish, x3), b4(g3));
          };
          this.relayer.events.on(C2.publish, x3);
          const I3 = yi(new Promise((D3, j2) => {
            this.rpcPublish({ topic: i3, message: s, ttl: a2, prompt: h4, tag: l2, id: d3, attestation: n2 == null ? void 0 : n2.attestation, tvf: n2 == null ? void 0 : n2.tvf }).then(D3).catch((T3) => {
              this.logger.warn(T3, T3 == null ? void 0 : T3.message), j2(T3);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${d3} tag:${l2}`);
          try {
            await I3, this.events.removeListener(C2.publish, x3);
          } catch (D3) {
            this.queue.set(d3, Ge2(Ie2({}, g3), { attempt: 1 })), this.logger.warn(D3, D3 == null ? void 0 : D3.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: d3, topic: i3, message: s, opts: n2 } }), await yi(u4, this.publishTimeout, _3);
      } catch (u4) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(u4), (o3 = n2 == null ? void 0 : n2.internal) != null && o3.throwOnFailedPublish) throw u4;
      } finally {
        this.queue.delete(d3);
      }
    }), V3(this, "on", (i3, s) => {
      this.events.on(i3, s);
    }), V3(this, "once", (i3, s) => {
      this.events.once(i3, s);
    }), V3(this, "off", (i3, s) => {
      this.events.off(i3, s);
    }), V3(this, "removeListener", (i3, s) => {
      this.events.removeListener(i3, s);
    }), this.relayer = e, this.logger = E(t, this.name), this.registerEventListeners();
  }
  get context() {
    return y(this.logger);
  }
  async rpcPublish(e) {
    var t, i3, s, n2;
    const { topic: o3, message: a2, ttl: c3 = je2, prompt: h4, tag: l2, id: d3, attestation: g3, tvf: _3 } = e, u4 = { method: Yc(Zc().protocol).publish, params: Ie2({ topic: o3, message: a2, ttl: c3, prompt: h4, tag: l2, attestation: g3 }, _3), id: d3 };
    Et((t = u4.params) == null ? void 0 : t.prompt) && ((i3 = u4.params) == null || delete i3.prompt), Et((s = u4.params) == null ? void 0 : s.tag) && ((n2 = u4.params) == null || delete n2.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: u4 });
    const b4 = await this.relayer.request(u4);
    return this.relayer.events.emit(C2.publish, e), this.logger.debug("Successfully Published Payload"), b4;
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e, t) => {
      const i3 = e.attempt + 1;
      this.queue.set(t, Ge2(Ie2({}, e), { attempt: i3 }));
      const { topic: s, message: n2, opts: o3, attestation: a2 } = e;
      this.logger.warn({}, `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i3}`), await this.rpcPublish(Ge2(Ie2({}, e), { topic: s, message: n2, ttl: o3.ttl, prompt: o3.prompt, tag: o3.tag, id: o3.id, attestation: a2, tvf: o3.tvf })), this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(C2.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(C2.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
};
var qn = Object.defineProperty;
var Gn2 = (r2, e, t) => e in r2 ? qn(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var re2 = (r2, e, t) => Gn2(r2, typeof e != "symbol" ? e + "" : e, t);
var Wn2 = class {
  constructor() {
    re2(this, "map", /* @__PURE__ */ new Map()), re2(this, "set", (e, t) => {
      const i3 = this.get(e);
      this.exists(e, t) || this.map.set(e, [...i3, t]);
    }), re2(this, "get", (e) => this.map.get(e) || []), re2(this, "exists", (e, t) => this.get(e).includes(t)), re2(this, "delete", (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e)) return;
      const i3 = this.get(e);
      if (!this.exists(e, t)) return;
      const s = i3.filter((n2) => n2 !== t);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }), re2(this, "clear", () => {
      this.map.clear();
    });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var Hn = Object.defineProperty;
var Yn2 = Object.defineProperties;
var Jn2 = Object.getOwnPropertyDescriptors;
var Ii2 = Object.getOwnPropertySymbols;
var Xn2 = Object.prototype.hasOwnProperty;
var Zn2 = Object.prototype.propertyIsEnumerable;
var We2 = (r2, e, t) => e in r2 ? Hn(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var ge2 = (r2, e) => {
  for (var t in e || (e = {})) Xn2.call(e, t) && We2(r2, t, e[t]);
  if (Ii2) for (var t of Ii2(e)) Zn2.call(e, t) && We2(r2, t, e[t]);
  return r2;
};
var He2 = (r2, e) => Yn2(r2, Jn2(e));
var f4 = (r2, e, t) => We2(r2, typeof e != "symbol" ? e + "" : e, t);
var Ti2 = class extends P {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, f4(this, "subscriptions", /* @__PURE__ */ new Map()), f4(this, "topicMap", new Wn2()), f4(this, "events", new import_events3.EventEmitter()), f4(this, "name", Ut), f4(this, "version", Ft), f4(this, "pending", /* @__PURE__ */ new Map()), f4(this, "cached", []), f4(this, "initialized", false), f4(this, "storagePrefix", B), f4(this, "subscribeTimeout", (0, import_time2.toMiliseconds)(import_time2.ONE_MINUTE)), f4(this, "initialSubscribeTimeout", (0, import_time2.toMiliseconds)(import_time2.ONE_SECOND * 15)), f4(this, "clientId"), f4(this, "batchSubscribeTopicsLimit", 500), f4(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
    }), f4(this, "subscribe", async (i3, s) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i3, opts: s } });
      try {
        const n2 = Zc(s), o3 = { topic: i3, relay: n2, transportType: s == null ? void 0 : s.transportType };
        this.pending.set(i3, o3);
        const a2 = await this.rpcSubscribe(i3, n2, s);
        return typeof a2 == "string" && (this.onSubscribe(a2, o3), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i3, opts: s } })), a2;
      } catch (n2) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n2), n2;
      }
    }), f4(this, "unsubscribe", async (i3, s) => {
      this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(i3, s.id, s) : await this.unsubscribeByTopic(i3, s);
    }), f4(this, "isSubscribed", (i3) => new Promise((s) => {
      s(this.topicMap.topics.includes(i3));
    })), f4(this, "isKnownTopic", (i3) => new Promise((s) => {
      s(this.topicMap.topics.includes(i3) || this.pending.has(i3) || this.cached.some((n2) => n2.topic === i3));
    })), f4(this, "on", (i3, s) => {
      this.events.on(i3, s);
    }), f4(this, "once", (i3, s) => {
      this.events.once(i3, s);
    }), f4(this, "off", (i3, s) => {
      this.events.off(i3, s);
    }), f4(this, "removeListener", (i3, s) => {
      this.events.removeListener(i3, s);
    }), f4(this, "start", async () => {
      await this.onConnect();
    }), f4(this, "stop", async () => {
      await this.onDisconnect();
    }), f4(this, "restart", async () => {
      await this.restore(), await this.onRestart();
    }), f4(this, "checkPending", async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const i3 = [];
      this.pending.forEach((s) => {
        i3.push(s);
      }), await this.batchSubscribe(i3);
    }), f4(this, "registerEventListeners", () => {
      this.relayer.core.heartbeat.on(r.pulse, async () => {
        await this.checkPending();
      }), this.events.on($.created, async (i3) => {
        const s = $.created;
        this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: i3 }), await this.persist();
      }), this.events.on($.deleted, async (i3) => {
        const s = $.deleted;
        this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: i3 }), await this.persist();
      });
    }), this.relayer = e, this.logger = E(t, this.name), this.clientId = "";
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  get hasAnyTopics() {
    return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
  }
  hasSubscription(e, t) {
    let i3 = false;
    try {
      i3 = this.getSubscription(e).topic === t;
    } catch {
    }
    return i3;
  }
  reset() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const i3 = this.topicMap.get(e);
    await Promise.all(i3.map(async (s) => await this.unsubscribeById(e, s, t)));
  }
  async unsubscribeById(e, t, i3) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i3 } });
    try {
      const s = Zc(i3);
      await this.restartToComplete({ topic: e, id: t, relay: s }), await this.rpcUnsubscribe(e, t, s);
      const n2 = Nt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, n2), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i3 } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, t, i3) {
    var s;
    (!i3 || (i3 == null ? void 0 : i3.transportType) === Q.relay) && await this.restartToComplete({ topic: e, id: e, relay: t });
    const n2 = { method: Yc(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n2 });
    const o3 = (s = i3 == null ? void 0 : i3.internal) == null ? void 0 : s.throwOnFailedPublish;
    try {
      const a2 = await this.getSubscriptionId(e);
      if ((i3 == null ? void 0 : i3.transportType) === Q.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(n2).catch((l2) => this.logger.warn(l2));
      }, (0, import_time2.toMiliseconds)(import_time2.ONE_SECOND)), a2;
      const c3 = new Promise(async (l2) => {
        const d3 = (g3) => {
          g3.topic === e && (this.events.removeListener($.created, d3), l2(g3.id));
        };
        this.events.on($.created, d3);
        try {
          const g3 = await yi(new Promise((_3, u4) => {
            this.relayer.request(n2).catch((b4) => {
              this.logger.warn(b4, b4 == null ? void 0 : b4.message), u4(b4);
            }).then(_3);
          }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
          this.events.removeListener($.created, d3), l2(g3);
        } catch {
        }
      }), h4 = await yi(c3, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
      if (!h4 && o3) throw new Error(`Subscribing to ${e} failed, please try again`);
      return h4 ? a2 : null;
    } catch (a2) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(C2.connection_stalled), o3) throw a2;
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const t = e[0].relay, i3 = { method: Yc(t.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i3 });
    try {
      await await yi(new Promise((s) => {
        this.relayer.request(i3).catch((n2) => this.logger.warn(n2)).then(s);
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
    } catch {
      this.relayer.events.emit(C2.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e) {
    if (!e.length) return;
    const t = e[0].relay, i3 = { method: Yc(t.protocol).batchFetchMessages, params: { topics: e.map((n2) => n2.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i3 });
    let s;
    try {
      s = await await yi(new Promise((n2, o3) => {
        this.relayer.request(i3).catch((a2) => {
          this.logger.warn(a2), o3(a2);
        }).then(n2);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(C2.connection_stalled);
    }
    return s;
  }
  rpcUnsubscribe(e, t, i3) {
    const s = { method: Yc(i3.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, He2(ge2({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, ge2({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, i3) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i3), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t);
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, ge2({}, t)), this.topicMap.set(t.topic, e), this.events.emit($.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i3 } = ht("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i3);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const i3 = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i3.topic, e), this.events.emit($.deleted, He2(ge2({}, i3), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit($.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e = [...this.cached], t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let i3 = 0; i3 < t; i3++) {
        const s = e.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit($.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: t } = ht("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (t) => He2(ge2({}, t), { id: await this.getSubscriptionId(t.topic) })))));
  }
  async batchFetchMessages(e) {
    if (!e.length) return;
    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
    const t = await this.rpcBatchFetchMessages(e);
    t && t.messages && (await Ni((0, import_time2.toMiliseconds)(import_time2.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(t.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ht("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete(e) {
    !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e), await this.relayer.transportOpen());
  }
  async getClientId() {
    return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
  }
  async getSubscriptionId(e) {
    return kc(e + await this.getClientId());
  }
};
var Qn2 = Object.defineProperty;
var Ci2 = Object.getOwnPropertySymbols;
var eo2 = Object.prototype.hasOwnProperty;
var to2 = Object.prototype.propertyIsEnumerable;
var Ye2 = (r2, e, t) => e in r2 ? Qn2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var Pi2 = (r2, e) => {
  for (var t in e || (e = {})) eo2.call(e, t) && Ye2(r2, t, e[t]);
  if (Ci2) for (var t of Ci2(e)) to2.call(e, t) && Ye2(r2, t, e[t]);
  return r2;
};
var y3 = (r2, e, t) => Ye2(r2, typeof e != "symbol" ? e + "" : e, t);
var Si2 = class extends d {
  constructor(e) {
    super(e), y3(this, "protocol", "wc"), y3(this, "version", 2), y3(this, "core"), y3(this, "logger"), y3(this, "events", new import_events3.EventEmitter()), y3(this, "provider"), y3(this, "messages"), y3(this, "subscriber"), y3(this, "publisher"), y3(this, "name", $t2), y3(this, "transportExplicitlyClosed", false), y3(this, "initialized", false), y3(this, "connectionAttemptInProgress", false), y3(this, "relayUrl"), y3(this, "projectId"), y3(this, "packageName"), y3(this, "bundleId"), y3(this, "hasExperiencedNetworkDisruption", false), y3(this, "pingTimeout"), y3(this, "heartBeatTimeout", (0, import_time2.toMiliseconds)(import_time2.THIRTY_SECONDS + import_time2.FIVE_SECONDS)), y3(this, "reconnectTimeout"), y3(this, "connectPromise"), y3(this, "reconnectInProgress", false), y3(this, "requestsInFlight", []), y3(this, "connectTimeout", (0, import_time2.toMiliseconds)(import_time2.ONE_SECOND * 15)), y3(this, "request", async (t) => {
      var i3, s;
      this.logger.debug("Publishing Request Payload");
      const n2 = t.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: n2, method: t.method, topic: (i3 = t.params) == null ? void 0 : i3.topic }, "relayer.request - publishing...");
        const o3 = `${n2}:${((s = t.params) == null ? void 0 : s.tag) || ""}`;
        this.requestsInFlight.push(o3);
        const a2 = await this.provider.request(t);
        return this.requestsInFlight = this.requestsInFlight.filter((c3) => c3 !== o3), a2;
      } catch (o3) {
        throw this.logger.debug(`Failed to Publish Request: ${n2}`), o3;
      }
    }), y3(this, "resetPingTimeout", () => {
      Re() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
        var t, i3, s, n2;
        try {
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (n2 = (s = (i3 = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : i3.socket) == null ? void 0 : s.terminate) == null || n2.call(s);
        } catch (o3) {
          this.logger.warn(o3, o3 == null ? void 0 : o3.message);
        }
      }, this.heartBeatTimeout));
    }), y3(this, "onPayloadHandler", (t) => {
      this.onProviderPayload(t), this.resetPingTimeout();
    }), y3(this, "onConnectHandler", () => {
      this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(C2.connect);
    }), y3(this, "onDisconnectHandler", () => {
      this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
    }), y3(this, "onProviderErrorHandler", (t) => {
      this.logger.fatal(`Fatal socket error: ${t.message}`), this.events.emit(C2.error, t), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
    }), y3(this, "registerProviderListeners", () => {
      this.provider.on(L.payload, this.onPayloadHandler), this.provider.on(L.connect, this.onConnectHandler), this.provider.on(L.disconnect, this.onDisconnectHandler), this.provider.on(L.error, this.onProviderErrorHandler);
    }), this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? E(e.logger, this.name) : (0, import_pino.default)(k({ level: e.logger || Nt2 })), this.messages = new _i2(this.logger, e.core), this.subscriber = new Ti2(this, this.logger), this.publisher = new Vn2(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Ue, this.projectId = e.projectId, ei() ? this.packageName = ri() : ni() && (this.bundleId = ri()), this.provider = {};
  }
  async init() {
    if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = true, this.subscriber.hasAnyTopics) try {
      await this.transportOpen();
    } catch (e) {
      this.logger.warn(e, e == null ? void 0 : e.message);
    }
  }
  get context() {
    return y(this.logger);
  }
  get connected() {
    var e, t, i3;
    return ((i3 = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i3.readyState) === 1 || false;
  }
  get connecting() {
    var e, t, i3;
    return ((i3 = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i3.readyState) === 0 || this.connectPromise !== void 0 || false;
  }
  async publish(e, t, i3) {
    this.isInitialized(), await this.publisher.publish(e, t, i3), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now(), transportType: Q.relay }, le2.outbound);
  }
  async subscribe(e, t) {
    var i3, s, n2;
    this.isInitialized(), (!(t != null && t.transportType) || (t == null ? void 0 : t.transportType) === "relay") && await this.toEstablishConnection();
    const o3 = typeof ((i3 = t == null ? void 0 : t.internal) == null ? void 0 : i3.throwOnFailedPublish) > "u" ? true : (s = t == null ? void 0 : t.internal) == null ? void 0 : s.throwOnFailedPublish;
    let a2 = ((n2 = this.subscriber.topicMap.get(e)) == null ? void 0 : n2[0]) || "", c3;
    const h4 = (l2) => {
      l2.topic === e && (this.subscriber.off($.created, h4), c3());
    };
    return await Promise.all([new Promise((l2) => {
      c3 = l2, this.subscriber.on($.created, h4);
    }), new Promise(async (l2, d3) => {
      a2 = await this.subscriber.subscribe(e, Pi2({ internal: { throwOnFailedPublish: o3 } }, t)).catch((g3) => {
        o3 && d3(g3);
      }) || a2, l2();
    })]), a2;
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportDisconnect() {
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await yi(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t, i3) => {
      await this.connect(e).then(t).catch(i3).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Ia()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e) {
    if ((e == null ? void 0 : e.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t = e.sort((i3, s) => i3.publishedAt - s.publishedAt);
    this.logger.debug(`Batch of ${t.length} message events sorted`);
    for (const i3 of t) try {
      await this.onMessageEvent(i3);
    } catch (s) {
      this.logger.warn(s, "Error while processing batch message event: " + (s == null ? void 0 : s.message));
    }
    this.logger.trace(`Batch of ${t.length} message events processed`);
  }
  async onLinkMessageEvent(e, t) {
    const { topic: i3 } = e;
    if (!t.sessionExists) {
      const s = Ei(import_time2.FIVE_MINUTES), n2 = { topic: i3, expiry: s, relay: { protocol: "irn" }, active: false };
      await this.core.pairing.pairings.set(i3, n2);
    }
    this.events.emit(C2.message, e), await this.recordMessageEvent(e, le2.inbound);
  }
  async connect(e) {
    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    let t = 1;
    for (; t < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`), await this.createProvider(), await new Promise(async (i3, s) => {
          const n2 = () => {
            s(new Error("Connection interrupted while trying to subscribe"));
          };
          this.provider.once(L.disconnect, n2), await yi(new Promise((o3, a2) => {
            this.provider.connect().then(o3).catch(a2);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o3) => {
            s(o3);
          }).finally(() => {
            this.provider.off(L.disconnect, n2), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o3, a2) => {
            const c3 = () => {
              a2(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(L.disconnect, c3), await this.subscriber.start().then(o3).catch(a2).finally(() => {
              this.provider.off(L.disconnect, c3);
            });
          }), this.hasExperiencedNetworkDisruption = false, i3();
        });
      } catch (i3) {
        await this.subscriber.stop();
        const s = i3;
        this.logger.warn({}, s.message), this.hasExperiencedNetworkDisruption = true;
      } finally {
        this.connectionAttemptInProgress = false;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
        break;
      }
      await new Promise((i3) => setTimeout(i3, (0, import_time2.toMiliseconds)(t * 1))), t++;
    }
  }
  startPingTimeout() {
    var e, t, i3, s, n2;
    if (Re()) try {
      (t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((n2 = (s = (i3 = this.provider) == null ? void 0 : i3.connection) == null ? void 0 : s.socket) == null || n2.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o3) {
      this.logger.warn(o3, o3 == null ? void 0 : o3.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new o(new f(si({ sdkVersion: _e2, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: true, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e, t) {
    const { topic: i3, message: s } = e;
    await this.messages.set(i3, s, t);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i3 } = e;
    if (!i3 || i3.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${i3}`), true;
    if (!await this.subscriber.isKnownTopic(t)) return this.logger.warn(`Ignoring message for unknown topic ${t}`), true;
    const s = this.messages.has(t, i3);
    return s && this.logger.warn(`Ignoring duplicate message: ${i3}`), s;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), isJsonRpcRequest(e)) {
      if (!e.method.endsWith(zt)) return;
      const t = e.params, { topic: i3, message: s, publishedAt: n2, attestation: o3 } = t.data, a2 = { topic: i3, message: s, publishedAt: n2, transportType: Q.relay, attestation: o3 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Pi2({ type: "event", event: t.id }, a2)), this.events.emit(t.id, a2), await this.acknowledgePayload(e), await this.onMessageEvent(a2);
    } else isJsonRpcResponse(e) && this.events.emit(C2.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, le2.inbound), this.events.emit(C2.message, e));
  }
  async acknowledgePayload(e) {
    const t = formatJsonRpcResult(e.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(L.payload, this.onPayloadHandler), this.provider.off(L.connect, this.onConnectHandler), this.provider.off(L.disconnect, this.onDisconnectHandler), this.provider.off(L.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e = await Ia();
    Na(async (t) => {
      e !== t && (e = t, t ? await this.transportOpen().catch((i3) => this.logger.error(i3, i3 == null ? void 0 : i3.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(C2.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e) => this.logger.error(e, e == null ? void 0 : e.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
    }, (0, import_time2.toMiliseconds)(Lt2)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ht("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(), !this.connected && await this.connect();
  }
};
function io2() {
}
function Ri2(r2) {
  if (!r2 || typeof r2 != "object") return false;
  const e = Object.getPrototypeOf(r2);
  return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(r2) === "[object Object]" : false;
}
function Oi2(r2) {
  return Object.getOwnPropertySymbols(r2).filter((e) => Object.prototype.propertyIsEnumerable.call(r2, e));
}
function Ai2(r2) {
  return r2 == null ? r2 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r2);
}
var so2 = "[object RegExp]";
var ro2 = "[object String]";
var no2 = "[object Number]";
var oo2 = "[object Boolean]";
var xi2 = "[object Arguments]";
var ao2 = "[object Symbol]";
var co2 = "[object Date]";
var ho2 = "[object Map]";
var lo = "[object Set]";
var uo2 = "[object Array]";
var go2 = "[object Function]";
var po2 = "[object ArrayBuffer]";
var Je2 = "[object Object]";
var yo2 = "[object Error]";
var bo2 = "[object DataView]";
var mo2 = "[object Uint8Array]";
var fo = "[object Uint8ClampedArray]";
var Do = "[object Uint16Array]";
var vo2 = "[object Uint32Array]";
var wo2 = "[object BigUint64Array]";
var _o2 = "[object Int8Array]";
var Eo2 = "[object Int16Array]";
var Io2 = "[object Int32Array]";
var To2 = "[object BigInt64Array]";
var Co2 = "[object Float32Array]";
var Po3 = "[object Float64Array]";
function So2(r2, e) {
  return r2 === e || Number.isNaN(r2) && Number.isNaN(e);
}
function Ro2(r2, e, t) {
  return pe2(r2, e, void 0, void 0, void 0, void 0, t);
}
function pe2(r2, e, t, i3, s, n2, o3) {
  const a2 = o3(r2, e, t, i3, s, n2);
  if (a2 !== void 0) return a2;
  if (typeof r2 == typeof e) switch (typeof r2) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return r2 === e;
    case "number":
      return r2 === e || Object.is(r2, e);
    case "function":
      return r2 === e;
    case "object":
      return ye2(r2, e, n2, o3);
  }
  return ye2(r2, e, n2, o3);
}
function ye2(r2, e, t, i3) {
  if (Object.is(r2, e)) return true;
  let s = Ai2(r2), n2 = Ai2(e);
  if (s === xi2 && (s = Je2), n2 === xi2 && (n2 = Je2), s !== n2) return false;
  switch (s) {
    case ro2:
      return r2.toString() === e.toString();
    case no2: {
      const c3 = r2.valueOf(), h4 = e.valueOf();
      return So2(c3, h4);
    }
    case oo2:
    case co2:
    case ao2:
      return Object.is(r2.valueOf(), e.valueOf());
    case so2:
      return r2.source === e.source && r2.flags === e.flags;
    case go2:
      return r2 === e;
  }
  t = t ?? /* @__PURE__ */ new Map();
  const o3 = t.get(r2), a2 = t.get(e);
  if (o3 != null && a2 != null) return o3 === e;
  t.set(r2, e), t.set(e, r2);
  try {
    switch (s) {
      case ho2: {
        if (r2.size !== e.size) return false;
        for (const [c3, h4] of r2.entries()) if (!e.has(c3) || !pe2(h4, e.get(c3), c3, r2, e, t, i3)) return false;
        return true;
      }
      case lo: {
        if (r2.size !== e.size) return false;
        const c3 = Array.from(r2.values()), h4 = Array.from(e.values());
        for (let l2 = 0; l2 < c3.length; l2++) {
          const d3 = c3[l2], g3 = h4.findIndex((_3) => pe2(d3, _3, void 0, r2, e, t, i3));
          if (g3 === -1) return false;
          h4.splice(g3, 1);
        }
        return true;
      }
      case uo2:
      case mo2:
      case fo:
      case Do:
      case vo2:
      case wo2:
      case _o2:
      case Eo2:
      case Io2:
      case To2:
      case Co2:
      case Po3: {
        if (typeof Buffer < "u" && Buffer.isBuffer(r2) !== Buffer.isBuffer(e) || r2.length !== e.length) return false;
        for (let c3 = 0; c3 < r2.length; c3++) if (!pe2(r2[c3], e[c3], c3, r2, e, t, i3)) return false;
        return true;
      }
      case po2:
        return r2.byteLength !== e.byteLength ? false : ye2(new Uint8Array(r2), new Uint8Array(e), t, i3);
      case bo2:
        return r2.byteLength !== e.byteLength || r2.byteOffset !== e.byteOffset ? false : ye2(new Uint8Array(r2), new Uint8Array(e), t, i3);
      case yo2:
        return r2.name === e.name && r2.message === e.message;
      case Je2: {
        if (!(ye2(r2.constructor, e.constructor, t, i3) || Ri2(r2) && Ri2(e))) return false;
        const h4 = [...Object.keys(r2), ...Oi2(r2)], l2 = [...Object.keys(e), ...Oi2(e)];
        if (h4.length !== l2.length) return false;
        for (let d3 = 0; d3 < h4.length; d3++) {
          const g3 = h4[d3], _3 = r2[g3];
          if (!Object.hasOwn(e, g3)) return false;
          const u4 = e[g3];
          if (!pe2(_3, u4, g3, r2, e, t, i3)) return false;
        }
        return true;
      }
      default:
        return false;
    }
  } finally {
    t.delete(r2), t.delete(e);
  }
}
function Oo2(r2, e) {
  return Ro2(r2, e, io2);
}
var Ao2 = Object.defineProperty;
var Ni2 = Object.getOwnPropertySymbols;
var xo2 = Object.prototype.hasOwnProperty;
var No2 = Object.prototype.propertyIsEnumerable;
var Xe2 = (r2, e, t) => e in r2 ? Ao2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var $i2 = (r2, e) => {
  for (var t in e || (e = {})) xo2.call(e, t) && Xe2(r2, t, e[t]);
  if (Ni2) for (var t of Ni2(e)) No2.call(e, t) && Xe2(r2, t, e[t]);
  return r2;
};
var z = (r2, e, t) => Xe2(r2, typeof e != "symbol" ? e + "" : e, t);
var zi2 = class extends f3 {
  constructor(e, t, i3, s = B, n2 = void 0) {
    super(e, t, i3, s), this.core = e, this.logger = t, this.name = i3, z(this, "map", /* @__PURE__ */ new Map()), z(this, "version", kt2), z(this, "cached", []), z(this, "initialized", false), z(this, "getKey"), z(this, "storagePrefix", B), z(this, "recentlyDeleted", []), z(this, "recentlyDeletedLimit", 200), z(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o3) => {
        this.getKey && o3 !== null && !Et(o3) ? this.map.set(this.getKey(o3), o3) : fa(o3) ? this.map.set(o3.id, o3) : la(o3) && this.map.set(o3.topic, o3);
      }), this.cached = [], this.initialized = true);
    }), z(this, "set", async (o3, a2) => {
      this.isInitialized(), this.map.has(o3) ? await this.update(o3, a2) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o3, value: a2 }), this.map.set(o3, a2), await this.persist());
    }), z(this, "get", (o3) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o3 }), this.getData(o3))), z(this, "getAll", (o3) => (this.isInitialized(), o3 ? this.values.filter((a2) => Object.keys(o3).every((c3) => Oo2(a2[c3], o3[c3]))) : this.values)), z(this, "update", async (o3, a2) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o3, update: a2 });
      const c3 = $i2($i2({}, this.getData(o3)), a2);
      this.map.set(o3, c3), await this.persist();
    }), z(this, "delete", async (o3, a2) => {
      this.isInitialized(), this.map.has(o3) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o3, reason: a2 }), this.map.delete(o3), this.addToRecentlyDeleted(o3), await this.persist());
    }), this.logger = E(t, this.name), this.storagePrefix = s, this.getKey = n2;
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e) {
    this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      if (this.recentlyDeleted.includes(e)) {
        const { message: s } = ht("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
        throw this.logger.error(s), new Error(s);
      }
      const { message: i3 } = ht("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i3), new Error(i3);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: t } = ht("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ht("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var $o2 = Object.defineProperty;
var zo = (r2, e, t) => e in r2 ? $o2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var p2 = (r2, e, t) => zo(r2, typeof e != "symbol" ? e + "" : e, t);
var Li2 = class {
  constructor(e, t) {
    this.core = e, this.logger = t, p2(this, "name", Mt2), p2(this, "version", Kt2), p2(this, "events", new import_events3.default()), p2(this, "pairings"), p2(this, "initialized", false), p2(this, "storagePrefix", B), p2(this, "ignoredPayloadTypes", [Kt]), p2(this, "registeredMethods", []), p2(this, "init", async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }), p2(this, "register", ({ methods: i3 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i3])];
    }), p2(this, "create", async (i3) => {
      this.isInitialized();
      const s = jc(), n2 = await this.core.crypto.setSymKey(s), o3 = Ei(import_time2.FIVE_MINUTES), a2 = { protocol: xt2 }, c3 = { topic: n2, expiry: o3, relay: a2, active: false, methods: i3 == null ? void 0 : i3.methods }, h4 = Wc({ protocol: this.core.protocol, version: this.core.version, topic: n2, symKey: s, relay: a2, expiryTimestamp: o3, methods: i3 == null ? void 0 : i3.methods });
      return this.events.emit(se2.create, c3), this.core.expirer.set(n2, o3), await this.pairings.set(n2, c3), await this.core.relayer.subscribe(n2, { transportType: i3 == null ? void 0 : i3.transportType }), { topic: n2, uri: h4 };
    }), p2(this, "pair", async (i3) => {
      this.isInitialized();
      const s = this.core.eventClient.createEvent({ properties: { topic: i3 == null ? void 0 : i3.uri, trace: [G2.pairing_started] } });
      this.isValidPair(i3, s);
      const { topic: n2, symKey: o3, relay: a2, expiryTimestamp: c3, methods: h4 } = Gc(i3.uri);
      s.props.properties.topic = n2, s.addTrace(G2.pairing_uri_validation_success), s.addTrace(G2.pairing_uri_not_expired);
      let l2;
      if (this.pairings.keys.includes(n2)) {
        if (l2 = this.pairings.get(n2), s.addTrace(G2.existing_pairing), l2.active) throw s.setError(Y2.active_pairing_already_exists), new Error(`Pairing already exists: ${n2}. Please try again with a new connection URI.`);
        s.addTrace(G2.pairing_not_expired);
      }
      const d3 = c3 || Ei(import_time2.FIVE_MINUTES), g3 = { topic: n2, relay: a2, expiry: d3, active: false, methods: h4 };
      this.core.expirer.set(n2, d3), await this.pairings.set(n2, g3), s.addTrace(G2.store_new_pairing), i3.activatePairing && await this.activate({ topic: n2 }), this.events.emit(se2.create, g3), s.addTrace(G2.emit_inactive_pairing), this.core.crypto.keychain.has(n2) || await this.core.crypto.setSymKey(o3, n2), s.addTrace(G2.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        s.setError(Y2.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(n2, { relay: a2 });
      } catch (_3) {
        throw s.setError(Y2.subscribe_pairing_topic_failure), _3;
      }
      return s.addTrace(G2.subscribe_pairing_topic_success), g3;
    }), p2(this, "activate", async ({ topic: i3 }) => {
      this.isInitialized();
      const s = Ei(import_time2.FIVE_MINUTES);
      this.core.expirer.set(i3, s), await this.pairings.update(i3, { active: true, expiry: s });
    }), p2(this, "ping", async (i3) => {
      this.isInitialized(), await this.isValidPing(i3), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: s } = i3;
      if (this.pairings.keys.includes(s)) {
        const n2 = await this.sendRequest(s, "wc_pairingPing", {}), { done: o3, resolve: a2, reject: c3 } = gi();
        this.events.once(xi("pairing_ping", n2), ({ error: h4 }) => {
          h4 ? c3(h4) : a2();
        }), await o3();
      }
    }), p2(this, "updateExpiry", async ({ topic: i3, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(i3, { expiry: s });
    }), p2(this, "updateMetadata", async ({ topic: i3, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(i3, { peerMetadata: s });
    }), p2(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), p2(this, "disconnect", async (i3) => {
      this.isInitialized(), await this.isValidDisconnect(i3);
      const { topic: s } = i3;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", Nt("USER_DISCONNECTED")), await this.deletePairing(s));
    }), p2(this, "formatUriFromPairing", (i3) => {
      this.isInitialized();
      const { topic: s, relay: n2, expiry: o3, methods: a2 } = i3, c3 = this.core.crypto.keychain.get(s);
      return Wc({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: c3, relay: n2, expiryTimestamp: o3, methods: a2 });
    }), p2(this, "sendRequest", async (i3, s, n2) => {
      const o3 = formatJsonRpcRequest(s, n2), a2 = await this.core.crypto.encode(i3, o3), c3 = ie2[s].req;
      return this.core.history.set(i3, o3), this.core.relayer.publish(i3, a2, c3), o3.id;
    }), p2(this, "sendResult", async (i3, s, n2) => {
      const o3 = formatJsonRpcResult(i3, n2), a2 = await this.core.crypto.encode(s, o3), c3 = (await this.core.history.get(s, i3)).request.method, h4 = ie2[c3].res;
      await this.core.relayer.publish(s, a2, h4), await this.core.history.resolve(o3);
    }), p2(this, "sendError", async (i3, s, n2) => {
      const o3 = formatJsonRpcError(i3, n2), a2 = await this.core.crypto.encode(s, o3), c3 = (await this.core.history.get(s, i3)).request.method, h4 = ie2[c3] ? ie2[c3].res : ie2.unregistered_method.res;
      await this.core.relayer.publish(s, a2, h4), await this.core.history.resolve(o3);
    }), p2(this, "deletePairing", async (i3, s) => {
      await this.core.relayer.unsubscribe(i3), await Promise.all([this.pairings.delete(i3, Nt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i3), s ? Promise.resolve() : this.core.expirer.del(i3)]);
    }), p2(this, "cleanup", async () => {
      const i3 = this.pairings.getAll().filter((s) => vi(s.expiry));
      await Promise.all(i3.map((s) => this.deletePairing(s.topic)));
    }), p2(this, "onRelayEventRequest", async (i3) => {
      const { topic: s, payload: n2 } = i3;
      switch (n2.method) {
        case "wc_pairingPing":
          return await this.onPairingPingRequest(s, n2);
        case "wc_pairingDelete":
          return await this.onPairingDeleteRequest(s, n2);
        default:
          return await this.onUnknownRpcMethodRequest(s, n2);
      }
    }), p2(this, "onRelayEventResponse", async (i3) => {
      const { topic: s, payload: n2 } = i3, o3 = (await this.core.history.get(s, n2.id)).request.method;
      switch (o3) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, n2);
        default:
          return this.onUnknownRpcMethodResponse(o3);
      }
    }), p2(this, "onPairingPingRequest", async (i3, s) => {
      const { id: n2 } = s;
      try {
        this.isValidPing({ topic: i3 }), await this.sendResult(n2, i3, true), this.events.emit(se2.ping, { id: n2, topic: i3 });
      } catch (o3) {
        await this.sendError(n2, i3, o3), this.logger.error(o3);
      }
    }), p2(this, "onPairingPingResponse", (i3, s) => {
      const { id: n2 } = s;
      setTimeout(() => {
        isJsonRpcResult(s) ? this.events.emit(xi("pairing_ping", n2), {}) : isJsonRpcError(s) && this.events.emit(xi("pairing_ping", n2), { error: s.error });
      }, 500);
    }), p2(this, "onPairingDeleteRequest", async (i3, s) => {
      const { id: n2 } = s;
      try {
        this.isValidDisconnect({ topic: i3 }), await this.deletePairing(i3), this.events.emit(se2.delete, { id: n2, topic: i3 });
      } catch (o3) {
        await this.sendError(n2, i3, o3), this.logger.error(o3);
      }
    }), p2(this, "onUnknownRpcMethodRequest", async (i3, s) => {
      const { id: n2, method: o3 } = s;
      try {
        if (this.registeredMethods.includes(o3)) return;
        const a2 = Nt("WC_METHOD_UNSUPPORTED", o3);
        await this.sendError(n2, i3, a2), this.logger.error(a2);
      } catch (a2) {
        await this.sendError(n2, i3, a2), this.logger.error(a2);
      }
    }), p2(this, "onUnknownRpcMethodResponse", (i3) => {
      this.registeredMethods.includes(i3) || this.logger.error(Nt("WC_METHOD_UNSUPPORTED", i3));
    }), p2(this, "isValidPair", (i3, s) => {
      var n2;
      if (!ya(i3)) {
        const { message: a2 } = ht("MISSING_OR_INVALID", `pair() params: ${i3}`);
        throw s.setError(Y2.malformed_pairing_uri), new Error(a2);
      }
      if (!ua(i3.uri)) {
        const { message: a2 } = ht("MISSING_OR_INVALID", `pair() uri: ${i3.uri}`);
        throw s.setError(Y2.malformed_pairing_uri), new Error(a2);
      }
      const o3 = Gc(i3 == null ? void 0 : i3.uri);
      if (!((n2 = o3 == null ? void 0 : o3.relay) != null && n2.protocol)) {
        const { message: a2 } = ht("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw s.setError(Y2.malformed_pairing_uri), new Error(a2);
      }
      if (!(o3 != null && o3.symKey)) {
        const { message: a2 } = ht("MISSING_OR_INVALID", "pair() uri#symKey");
        throw s.setError(Y2.malformed_pairing_uri), new Error(a2);
      }
      if (o3 != null && o3.expiryTimestamp && (0, import_time2.toMiliseconds)(o3 == null ? void 0 : o3.expiryTimestamp) < Date.now()) {
        s.setError(Y2.pairing_expired);
        const { message: a2 } = ht("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a2);
      }
    }), p2(this, "isValidPing", async (i3) => {
      if (!ya(i3)) {
        const { message: n2 } = ht("MISSING_OR_INVALID", `ping() params: ${i3}`);
        throw new Error(n2);
      }
      const { topic: s } = i3;
      await this.isValidPairingTopic(s);
    }), p2(this, "isValidDisconnect", async (i3) => {
      if (!ya(i3)) {
        const { message: n2 } = ht("MISSING_OR_INVALID", `disconnect() params: ${i3}`);
        throw new Error(n2);
      }
      const { topic: s } = i3;
      await this.isValidPairingTopic(s);
    }), p2(this, "isValidPairingTopic", async (i3) => {
      if (!nt(i3, false)) {
        const { message: s } = ht("MISSING_OR_INVALID", `pairing topic should be a string: ${i3}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i3)) {
        const { message: s } = ht("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i3}`);
        throw new Error(s);
      }
      if (vi(this.pairings.get(i3).expiry)) {
        await this.deletePairing(i3);
        const { message: s } = ht("EXPIRED", `pairing topic: ${i3}`);
        throw new Error(s);
      }
    }), this.core = e, this.logger = E(t, this.name), this.pairings = new zi2(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ht("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(C2.message, async (e) => {
      const { topic: t, message: i3, transportType: s } = e;
      if (this.pairings.keys.includes(t) && s !== Q.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i3))) try {
        const n2 = await this.core.crypto.decode(t, i3);
        isJsonRpcRequest(n2) ? (this.core.history.set(t, n2), await this.onRelayEventRequest({ topic: t, payload: n2 })) : isJsonRpcResponse(n2) && (await this.core.history.resolve(n2), await this.onRelayEventResponse({ topic: t, payload: n2 }), this.core.history.delete(t, n2.id)), await this.core.relayer.messages.ack(t, i3);
      } catch (n2) {
        this.logger.error(n2);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(M2.expired, async (e) => {
      const { topic: t } = bi(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(se2.expire, { topic: t }));
    });
  }
};
var Lo2 = Object.defineProperty;
var ko = (r2, e, t) => e in r2 ? Lo2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var R2 = (r2, e, t) => ko(r2, typeof e != "symbol" ? e + "" : e, t);
var ki2 = class extends I {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, R2(this, "records", /* @__PURE__ */ new Map()), R2(this, "events", new import_events3.EventEmitter()), R2(this, "name", Bt2), R2(this, "version", Vt2), R2(this, "cached", []), R2(this, "initialized", false), R2(this, "storagePrefix", B), R2(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i3) => this.records.set(i3.id, i3)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), R2(this, "set", (i3, s, n2) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i3, request: s, chainId: n2 }), this.records.has(s.id)) return;
      const o3 = { id: s.id, topic: i3, request: { method: s.method, params: s.params || null }, chainId: n2, expiry: Ei(import_time2.THIRTY_DAYS) };
      this.records.set(o3.id, o3), this.persist(), this.events.emit(F2.created, o3);
    }), R2(this, "resolve", async (i3) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i3 }), !this.records.has(i3.id)) return;
      const s = await this.getRecord(i3.id);
      typeof s.response > "u" && (s.response = isJsonRpcError(i3) ? { error: i3.error } : { result: i3.result }, this.records.set(s.id, s), this.persist(), this.events.emit(F2.updated, s));
    }), R2(this, "get", async (i3, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i3, id: s }), await this.getRecord(s))), R2(this, "delete", (i3, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((n2) => {
        if (n2.topic === i3) {
          if (typeof s < "u" && n2.id !== s) return;
          this.records.delete(n2.id), this.events.emit(F2.deleted, n2);
        }
      }), this.persist();
    }), R2(this, "exists", async (i3, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i3 : false)), R2(this, "on", (i3, s) => {
      this.events.on(i3, s);
    }), R2(this, "once", (i3, s) => {
      this.events.once(i3, s);
    }), R2(this, "off", (i3, s) => {
      this.events.off(i3, s);
    }), R2(this, "removeListener", (i3, s) => {
      this.events.removeListener(i3, s);
    }), this.logger = E(t, this.name);
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u") return;
      const i3 = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(i3);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i3 } = ht("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i3);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(F2.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: t } = ht("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(F2.created, (e) => {
      const t = F2.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.events.on(F2.updated, (e) => {
      const t = F2.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.events.on(F2.deleted, (e) => {
      const t = F2.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.core.heartbeat.on(r.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = false;
      this.records.forEach((t) => {
        (0, import_time2.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(F2.deleted, t, false), e = true);
      }), e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ht("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var jo = Object.defineProperty;
var Uo2 = (r2, e, t) => e in r2 ? jo(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var A2 = (r2, e, t) => Uo2(r2, typeof e != "symbol" ? e + "" : e, t);
var ji2 = class extends S {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, A2(this, "expirations", /* @__PURE__ */ new Map()), A2(this, "events", new import_events3.EventEmitter()), A2(this, "name", qt2), A2(this, "version", Gt2), A2(this, "cached", []), A2(this, "initialized", false), A2(this, "storagePrefix", B), A2(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i3) => this.expirations.set(i3.target, i3)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), A2(this, "has", (i3) => {
      try {
        const s = this.formatTarget(i3);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return false;
      }
    }), A2(this, "set", (i3, s) => {
      this.isInitialized();
      const n2 = this.formatTarget(i3), o3 = { target: n2, expiry: s };
      this.expirations.set(n2, o3), this.checkExpiry(n2, o3), this.events.emit(M2.created, { target: n2, expiration: o3 });
    }), A2(this, "get", (i3) => {
      this.isInitialized();
      const s = this.formatTarget(i3);
      return this.getExpiration(s);
    }), A2(this, "del", (i3) => {
      if (this.isInitialized(), this.has(i3)) {
        const s = this.formatTarget(i3), n2 = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(M2.deleted, { target: s, expiration: n2 });
      }
    }), A2(this, "on", (i3, s) => {
      this.events.on(i3, s);
    }), A2(this, "once", (i3, s) => {
      this.events.once(i3, s);
    }), A2(this, "off", (i3, s) => {
      this.events.off(i3, s);
    }), A2(this, "removeListener", (i3, s) => {
      this.events.removeListener(i3, s);
    }), this.logger = E(t, this.name);
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return mi(e);
    if (typeof e == "number") return wi(e);
    const { message: t } = ht("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(M2.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: t } = ht("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i3 } = ht("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.warn(i3), new Error(i3);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i3 } = t;
    (0, import_time2.toMiliseconds)(i3) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(M2.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(r.pulse, () => this.checkExpirations()), this.events.on(M2.created, (e) => {
      const t = M2.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(M2.expired, (e) => {
      const t = M2.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(M2.deleted, (e) => {
      const t = M2.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ht("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var Fo = Object.defineProperty;
var Mo = (r2, e, t) => e in r2 ? Fo(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var w = (r2, e, t) => Mo(r2, typeof e != "symbol" ? e + "" : e, t);
var Ui2 = class extends M {
  constructor(e, t, i3) {
    super(e, t, i3), this.core = e, this.logger = t, this.store = i3, w(this, "name", Wt2), w(this, "abortController"), w(this, "isDevEnv"), w(this, "verifyUrlV3", Yt2), w(this, "storagePrefix", B), w(this, "version", Le2), w(this, "publicKey"), w(this, "fetchPromise"), w(this, "init", async () => {
      var s;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, import_time2.toMiliseconds)((s = this.publicKey) == null ? void 0 : s.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }), w(this, "register", async (s) => {
      if (!Yt() || this.isDevEnv) return;
      const n2 = window.location.origin, { id: o3, decryptedId: a2 } = s, c3 = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n2}&id=${o3}&decryptedId=${a2}`;
      try {
        const h4 = (0, import_window_getters2.getDocument)(), l2 = this.startAbortTimer(import_time2.ONE_SECOND * 5), d3 = await new Promise((g3, _3) => {
          const u4 = () => {
            window.removeEventListener("message", x3), h4.body.removeChild(b4), _3("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", u4);
          const b4 = h4.createElement("iframe");
          b4.src = c3, b4.style.display = "none", b4.addEventListener("error", u4, { signal: this.abortController.signal });
          const x3 = (I3) => {
            if (I3.data && typeof I3.data == "string") try {
              const D3 = JSON.parse(I3.data);
              if (D3.type === "verify_attestation") {
                if (sn(D3.attestation).payload.id !== o3) return;
                clearInterval(l2), h4.body.removeChild(b4), this.abortController.signal.removeEventListener("abort", u4), window.removeEventListener("message", x3), g3(D3.attestation === null ? "" : D3.attestation);
              }
            } catch (D3) {
              this.logger.warn(D3);
            }
          };
          h4.body.appendChild(b4), window.addEventListener("message", x3, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", d3), d3;
      } catch (h4) {
        this.logger.warn(h4);
      }
      return "";
    }), w(this, "resolve", async (s) => {
      if (this.isDevEnv) return "";
      const { attestationId: n2, hash: o3, encryptedId: a2 } = s;
      if (n2 === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (n2) {
        if (sn(n2).payload.id !== a2) return;
        const h4 = await this.isValidJwtAttestation(n2);
        if (h4) {
          if (!h4.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h4;
        }
      }
      if (!o3) return;
      const c3 = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      return this.fetchAttestation(o3, c3);
    }), w(this, "fetchAttestation", async (s, n2) => {
      this.logger.debug(`resolving attestation: ${s} from url: ${n2}`);
      const o3 = this.startAbortTimer(import_time2.ONE_SECOND * 5), a2 = await fetch(`${n2}/attestation/${s}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o3), a2.status === 200 ? await a2.json() : void 0;
    }), w(this, "getVerifyUrl", (s) => {
      let n2 = s || ue2;
      return Jt2.includes(n2) || (this.logger.info(`verify url: ${n2}, not included in trusted list, assigning default: ${ue2}`), n2 = ue2), n2;
    }), w(this, "fetchPublicKey", async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const s = this.startAbortTimer(import_time2.FIVE_SECONDS), n2 = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(s), await n2.json();
      } catch (s) {
        this.logger.warn(s);
      }
    }), w(this, "persistPublicKey", async (s) => {
      this.logger.debug("persisting public key to local storage", s), await this.store.setItem(this.storeKey, s), this.publicKey = s;
    }), w(this, "removePublicKey", async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }), w(this, "isValidJwtAttestation", async (s) => {
      const n2 = await this.getPublicKey();
      try {
        if (n2) return this.validateAttestation(s, n2);
      } catch (a2) {
        this.logger.error(a2), this.logger.warn("error validating attestation");
      }
      const o3 = await this.fetchAndPersistPublicKey();
      try {
        if (o3) return this.validateAttestation(s, o3);
      } catch (a2) {
        this.logger.error(a2), this.logger.warn("error validating attestation");
      }
    }), w(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), w(this, "fetchAndPersistPublicKey", async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (n2) => {
        const o3 = await this.fetchPublicKey();
        o3 && (await this.persistPublicKey(o3), n2(o3));
      });
      const s = await this.fetchPromise;
      return this.fetchPromise = void 0, s;
    }), w(this, "validateAttestation", (s, n2) => {
      const o3 = zc(s, n2.publicKey), a2 = { hasExpired: (0, import_time2.toMiliseconds)(o3.exp) < Date.now(), payload: o3 };
      if (a2.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a2.payload.origin, isScam: a2.payload.isScam, isVerified: a2.payload.isVerified };
    }), this.logger = E(t, this.name), this.abortController = new AbortController(), this.isDevEnv = Ii(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return y(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), (0, import_time2.toMiliseconds)(e));
  }
};
var Ko2 = Object.defineProperty;
var Bo2 = (r2, e, t) => e in r2 ? Ko2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var Fi2 = (r2, e, t) => Bo2(r2, typeof e != "symbol" ? e + "" : e, t);
var Mi2 = class extends O {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, Fi2(this, "context", Xt2), Fi2(this, "registerDeviceToken", async (i3) => {
      const { clientId: s, token: n2, notificationType: o3, enableEncrypted: a2 = false } = i3, c3 = `${Zt}/${this.projectId}/clients`;
      await fetch(c3, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: o3, token: n2, always_raw: a2 }) });
    }), this.logger = E(t, this.context);
  }
};
var Vo = Object.defineProperty;
var Ki2 = Object.getOwnPropertySymbols;
var qo = Object.prototype.hasOwnProperty;
var Go2 = Object.prototype.propertyIsEnumerable;
var Ze2 = (r2, e, t) => e in r2 ? Vo(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var be2 = (r2, e) => {
  for (var t in e || (e = {})) qo.call(e, t) && Ze2(r2, t, e[t]);
  if (Ki2) for (var t of Ki2(e)) Go2.call(e, t) && Ze2(r2, t, e[t]);
  return r2;
};
var E2 = (r2, e, t) => Ze2(r2, typeof e != "symbol" ? e + "" : e, t);
var Bi2 = class extends R {
  constructor(e, t, i3 = true) {
    super(e, t, i3), this.core = e, this.logger = t, E2(this, "context", ei2), E2(this, "storagePrefix", B), E2(this, "storageVersion", Qt2), E2(this, "events", /* @__PURE__ */ new Map()), E2(this, "shouldPersist", false), E2(this, "init", async () => {
      if (!Ii()) try {
        const s = { eventId: Bi(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: Mn(this.core.relayer.protocol, this.core.relayer.version, _e2) } } };
        await this.sendEvent([s]);
      } catch (s) {
        this.logger.warn(s);
      }
    }), E2(this, "createEvent", (s) => {
      const { event: n2 = "ERROR", type: o3 = "", properties: { topic: a2, trace: c3 } } = s, h4 = Bi(), l2 = this.core.projectId || "", d3 = Date.now(), g3 = be2({ eventId: h4, timestamp: d3, props: { event: n2, type: o3, properties: { topic: a2, trace: c3 } }, bundleId: l2, domain: this.getAppDomain() }, this.setMethods(h4));
      return this.telemetryEnabled && (this.events.set(h4, g3), this.shouldPersist = true), g3;
    }), E2(this, "getEvent", (s) => {
      const { eventId: n2, topic: o3 } = s;
      if (n2) return this.events.get(n2);
      const a2 = Array.from(this.events.values()).find((c3) => c3.props.properties.topic === o3);
      if (a2) return be2(be2({}, a2), this.setMethods(a2.eventId));
    }), E2(this, "deleteEvent", (s) => {
      const { eventId: n2 } = s;
      this.events.delete(n2), this.shouldPersist = true;
    }), E2(this, "setEventListeners", () => {
      this.core.heartbeat.on(r.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((s) => {
          (0, import_time2.fromMiliseconds)(Date.now()) - (0, import_time2.fromMiliseconds)(s.timestamp) > ti && (this.events.delete(s.eventId), this.shouldPersist = true);
        });
      });
    }), E2(this, "setMethods", (s) => ({ addTrace: (n2) => this.addTrace(s, n2), setError: (n2) => this.setError(s, n2) })), E2(this, "addTrace", (s, n2) => {
      const o3 = this.events.get(s);
      o3 && (o3.props.properties.trace.push(n2), this.events.set(s, o3), this.shouldPersist = true);
    }), E2(this, "setError", (s, n2) => {
      const o3 = this.events.get(s);
      o3 && (o3.props.type = n2, o3.timestamp = Date.now(), this.events.set(s, o3), this.shouldPersist = true);
    }), E2(this, "persist", async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
    }), E2(this, "restore", async () => {
      try {
        const s = await this.core.storage.getItem(this.storageKey) || [];
        if (!s.length) return;
        s.forEach((n2) => {
          this.events.set(n2.eventId, be2(be2({}, n2), this.setMethods(n2.eventId)));
        });
      } catch (s) {
        this.logger.warn(s);
      }
    }), E2(this, "submit", async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const s = [];
      for (const [n2, o3] of this.events) o3.props.type && s.push(o3);
      if (s.length !== 0) try {
        if ((await this.sendEvent(s)).ok) for (const n2 of s) this.events.delete(n2.eventId), this.shouldPersist = true;
      } catch (n2) {
        this.logger.warn(n2);
      }
    }), E2(this, "sendEvent", async (s) => {
      const n2 = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${ii}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${_e2}${n2}`, { method: "POST", body: JSON.stringify(s) });
    }), E2(this, "getAppDomain", () => Pn().url), this.logger = E(t, this.context), this.telemetryEnabled = i3, i3 ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
};
var Wo2 = Object.defineProperty;
var Vi2 = Object.getOwnPropertySymbols;
var Ho = Object.prototype.hasOwnProperty;
var Yo2 = Object.prototype.propertyIsEnumerable;
var Qe3 = (r2, e, t) => e in r2 ? Wo2(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t;
var qi2 = (r2, e) => {
  for (var t in e || (e = {})) Ho.call(e, t) && Qe3(r2, t, e[t]);
  if (Vi2) for (var t of Vi2(e)) Yo2.call(e, t) && Qe3(r2, t, e[t]);
  return r2;
};
var v2 = (r2, e, t) => Qe3(r2, typeof e != "symbol" ? e + "" : e, t);
var Te = class _Te extends h2 {
  constructor(e) {
    var t;
    super(e), v2(this, "protocol", ze2), v2(this, "version", Le2), v2(this, "name", he2), v2(this, "relayUrl"), v2(this, "projectId"), v2(this, "customStoragePrefix"), v2(this, "events", new import_events3.EventEmitter()), v2(this, "logger"), v2(this, "heartbeat"), v2(this, "relayer"), v2(this, "crypto"), v2(this, "storage"), v2(this, "history"), v2(this, "expirer"), v2(this, "pairing"), v2(this, "verify"), v2(this, "echoClient"), v2(this, "linkModeSupportedApps"), v2(this, "eventClient"), v2(this, "initialized", false), v2(this, "logChunkController"), v2(this, "on", (a2, c3) => this.events.on(a2, c3)), v2(this, "once", (a2, c3) => this.events.once(a2, c3)), v2(this, "off", (a2, c3) => this.events.off(a2, c3)), v2(this, "removeListener", (a2, c3) => this.events.removeListener(a2, c3)), v2(this, "dispatchEnvelope", ({ topic: a2, message: c3, sessionExists: h4 }) => {
      if (!a2 || !c3) return;
      const l2 = { topic: a2, message: c3, publishedAt: Date.now(), transportType: Q.link_mode };
      this.relayer.onLinkMessageEvent(l2, { sessionExists: h4 });
    });
    const i3 = this.getGlobalCore(e == null ? void 0 : e.customStoragePrefix);
    if (i3) try {
      return this.customStoragePrefix = i3.customStoragePrefix, this.logger = i3.logger, this.heartbeat = i3.heartbeat, this.crypto = i3.crypto, this.history = i3.history, this.expirer = i3.expirer, this.storage = i3.storage, this.relayer = i3.relayer, this.pairing = i3.pairing, this.verify = i3.verify, this.echoClient = i3.echoClient, this.linkModeSupportedApps = i3.linkModeSupportedApps, this.eventClient = i3.eventClient, this.initialized = i3.initialized, this.logChunkController = i3.logChunkController, i3;
    } catch (a2) {
      console.warn("Failed to copy global core", a2);
    }
    this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Ue, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const s = k({ level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : Et2.logger, name: he2 }), { logger: n2, chunkLoggerController: o3 } = A({ opts: s, maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes, loggerOverride: e == null ? void 0 : e.logger });
    this.logChunkController = o3, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var a2, c3;
      (a2 = this.logChunkController) != null && a2.downloadLogsBlobInBrowser && ((c3 = this.logChunkController) == null || c3.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = E(n2, this.name), this.heartbeat = new i(), this.crypto = new vi2(this, this.logger, e == null ? void 0 : e.keychain), this.history = new ki2(this, this.logger), this.expirer = new ji2(this, this.logger), this.storage = e != null && e.storage ? e.storage : new h(qi2(qi2({}, It2), e == null ? void 0 : e.storageOptions)), this.relayer = new Si2({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Li2(this, this.logger), this.verify = new Ui2(this, this.logger, this.storage), this.echoClient = new Mi2(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new Bi2(this, this.logger, e == null ? void 0 : e.telemetryEnabled), this.setGlobalCore(this);
  }
  static async init(e) {
    const t = new _Te(e);
    await t.initialize();
    const i3 = await t.crypto.getClientId();
    return await t.storage.setItem(jt2, i3), t;
  }
  get context() {
    return y(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e) {
    this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(Fe2, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(Fe2) || [], this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
  getGlobalCore(e = "") {
    try {
      if (this.isGlobalCoreDisabled()) return;
      const t = `_walletConnectCore_${e}`, i3 = `${t}_count`;
      return globalThis[i3] = (globalThis[i3] || 0) + 1, globalThis[i3] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i3]} times.`), globalThis[t];
    } catch (t) {
      console.warn("Failed to get global WalletConnect core", t);
      return;
    }
  }
  setGlobalCore(e) {
    var t;
    try {
      if (this.isGlobalCoreDisabled()) return;
      const i3 = `_walletConnectCore_${((t = e.opts) == null ? void 0 : t.customStoragePrefix) || ""}`;
      globalThis[i3] = e;
    } catch (i3) {
      console.warn("Failed to set global WalletConnect core", i3);
    }
  }
  isGlobalCoreDisabled() {
    try {
      return typeof process < "u" && process.env.DISABLE_GLOBAL_CORE === "true";
    } catch {
      return true;
    }
  }
};
var Jo2 = Te;

// node_modules/@walletconnect/sign-client/dist/index.es.js
var import_time3 = __toESM(require_cjs());
var import_events4 = __toESM(require_events());
var De2 = "wc";
var Le3 = 2;
var ke3 = "client";
var we2 = `${De2}@${Le3}:${ke3}:`;
var me2 = { name: ke3, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.org" };
var Me3 = "WALLETCONNECT_DEEPLINK_CHOICE";
var pt2 = "proposal";
var $e = "Proposal expired";
var ht2 = "session";
var J2 = import_time3.SEVEN_DAYS;
var dt2 = "engine";
var N = { wc_sessionPropose: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1101 }, reject: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1120 }, autoReject: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1121 } }, wc_sessionSettle: { req: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: import_time3.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: import_time3.ONE_HOUR, prompt: false, tag: 1117 }, reject: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1118 }, autoReject: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1119 } } };
var _e3 = { min: import_time3.FIVE_MINUTES, max: import_time3.SEVEN_DAYS };
var $2 = { idle: "IDLE", active: "ACTIVE" };
var Ue2 = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" } };
var ut2 = "request";
var gt2 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"];
var yt2 = "wc";
var wt2 = "auth";
var mt2 = "authKeys";
var _t2 = "pairingTopics";
var Et3 = "requests";
var ae = `${yt2}@${1.5}:${wt2}:`;
var ce2 = `${ae}:PUB_KEY`;
var Rs2 = Object.defineProperty;
var vs2 = Object.defineProperties;
var Is2 = Object.getOwnPropertyDescriptors;
var ft2 = Object.getOwnPropertySymbols;
var Ts2 = Object.prototype.hasOwnProperty;
var qs2 = Object.prototype.propertyIsEnumerable;
var Ke3 = (S4, n2, e) => n2 in S4 ? Rs2(S4, n2, { enumerable: true, configurable: true, writable: true, value: e }) : S4[n2] = e;
var v3 = (S4, n2) => {
  for (var e in n2 || (n2 = {})) Ts2.call(n2, e) && Ke3(S4, e, n2[e]);
  if (ft2) for (var e of ft2(n2)) qs2.call(n2, e) && Ke3(S4, e, n2[e]);
  return S4;
};
var b2 = (S4, n2) => vs2(S4, Is2(n2));
var c2 = (S4, n2, e) => Ke3(S4, typeof n2 != "symbol" ? n2 + "" : n2, e);
var Ps2 = class extends V2 {
  constructor(n2) {
    super(n2), c2(this, "name", dt2), c2(this, "events", new import_events4.default()), c2(this, "initialized", false), c2(this, "requestQueue", { state: $2.idle, queue: [] }), c2(this, "sessionRequestQueue", { state: $2.idle, queue: [] }), c2(this, "requestQueueDelay", import_time3.ONE_SECOND), c2(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), c2(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), c2(this, "recentlyDeletedLimit", 200), c2(this, "relayMessageCache", []), c2(this, "pendingSessions", /* @__PURE__ */ new Map()), c2(this, "init", async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(N) }), this.initialized = true, setTimeout(async () => {
        await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, (0, import_time3.toMiliseconds)(this.requestQueueDelay)));
    }), c2(this, "connect", async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const t = b2(v3({}, e), { requiredNamespaces: e.requiredNamespaces || {}, optionalNamespaces: e.optionalNamespaces || {} });
      await this.isValidConnect(t);
      const { pairingTopic: s, requiredNamespaces: i3, optionalNamespaces: r2, sessionProperties: o3, scopedProperties: a2, relays: l2 } = t;
      let p4 = s, h4, u4 = false;
      try {
        if (p4) {
          const T3 = this.client.core.pairing.pairings.get(p4);
          this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), u4 = T3.active;
        }
      } catch (T3) {
        throw this.client.logger.error(`connect() -> pairing.get(${p4}) failed`), T3;
      }
      if (!p4 || !u4) {
        const { topic: T3, uri: U4 } = await this.client.core.pairing.create();
        p4 = T3, h4 = U4;
      }
      if (!p4) {
        const { message: T3 } = ht("NO_MATCHING_KEY", `connect() pairing topic: ${p4}`);
        throw new Error(T3);
      }
      const d3 = await this.client.core.crypto.generateKeyPair(), w4 = N.wc_sessionPropose.req.ttl || import_time3.FIVE_MINUTES, m3 = Ei(w4), f5 = b2(v3(v3({ requiredNamespaces: i3, optionalNamespaces: r2, relays: l2 ?? [{ protocol: xt2 }], proposer: { publicKey: d3, metadata: this.client.metadata }, expiryTimestamp: m3, pairingTopic: p4 }, o3 && { sessionProperties: o3 }), a2 && { scopedProperties: a2 }), { id: payloadId() }), _3 = xi("session_connect", f5.id), { reject: g3, resolve: A5, done: D3 } = gi(w4, $e), I3 = ({ id: T3 }) => {
        T3 === f5.id && (this.client.events.off("proposal_expire", I3), this.pendingSessions.delete(f5.id), this.events.emit(_3, { error: { message: $e, code: 0 } }));
      };
      return this.client.events.on("proposal_expire", I3), this.events.once(_3, ({ error: T3, session: U4 }) => {
        this.client.events.off("proposal_expire", I3), T3 ? g3(T3) : U4 && A5(U4);
      }), await this.sendRequest({ topic: p4, method: "wc_sessionPropose", params: f5, throwOnFailedPublish: true, clientRpcId: f5.id }), await this.setProposal(f5.id, f5), { uri: h4, approval: D3 };
    }), c2(this, "pair", async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(e);
      } catch (t) {
        throw this.client.logger.error("pair() failed"), t;
      }
    }), c2(this, "approve", async (e) => {
      var t, s, i3;
      const r2 = this.client.core.eventClient.createEvent({ properties: { topic: (t = e == null ? void 0 : e.id) == null ? void 0 : t.toString(), trace: [Qs2.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (q3) {
        throw r2.setError(er2.no_internet_connection), q3;
      }
      try {
        await this.isValidProposalId(e == null ? void 0 : e.id);
      } catch (q3) {
        throw this.client.logger.error(`approve() -> proposal.get(${e == null ? void 0 : e.id}) failed`), r2.setError(er2.proposal_not_found), q3;
      }
      try {
        await this.isValidApprove(e);
      } catch (q3) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), r2.setError(er2.session_approve_namespace_validation_failure), q3;
      }
      const { id: o3, relayProtocol: a2, namespaces: l2, sessionProperties: p4, scopedProperties: h4, sessionConfig: u4 } = e, d3 = this.client.proposal.get(o3);
      this.client.core.eventClient.deleteEvent({ eventId: r2.eventId });
      const { pairingTopic: w4, proposer: m3, requiredNamespaces: f5, optionalNamespaces: _3 } = d3;
      let g3 = (s = this.client.core.eventClient) == null ? void 0 : s.getEvent({ topic: w4 });
      g3 || (g3 = (i3 = this.client.core.eventClient) == null ? void 0 : i3.createEvent({ type: Qs2.session_approve_started, properties: { topic: w4, trace: [Qs2.session_approve_started, Qs2.session_namespaces_validation_success] } }));
      const A5 = await this.client.core.crypto.generateKeyPair(), D3 = m3.publicKey, I3 = await this.client.core.crypto.generateSharedKey(A5, D3), T3 = v3(v3(v3({ relay: { protocol: a2 ?? "irn" }, namespaces: l2, controller: { publicKey: A5, metadata: this.client.metadata }, expiry: Ei(J2) }, p4 && { sessionProperties: p4 }), h4 && { scopedProperties: h4 }), u4 && { sessionConfig: u4 }), U4 = Q.relay;
      g3.addTrace(Qs2.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(I3, { transportType: U4 });
      } catch (q3) {
        throw g3.setError(er2.subscribe_session_topic_failure), q3;
      }
      g3.addTrace(Qs2.subscribe_session_topic_success);
      const fe4 = b2(v3({}, T3), { topic: I3, requiredNamespaces: f5, optionalNamespaces: _3, pairingTopic: w4, acknowledged: false, self: T3.controller, peer: { publicKey: m3.publicKey, metadata: m3.metadata }, controller: A5, transportType: Q.relay });
      await this.client.session.set(I3, fe4), g3.addTrace(Qs2.store_session);
      try {
        g3.addTrace(Qs2.publishing_session_settle), await this.sendRequest({ topic: I3, method: "wc_sessionSettle", params: T3, throwOnFailedPublish: true }).catch((q3) => {
          throw g3 == null ? void 0 : g3.setError(er2.session_settle_publish_failure), q3;
        }), g3.addTrace(Qs2.session_settle_publish_success), g3.addTrace(Qs2.publishing_session_approve), await this.sendResult({ id: o3, topic: w4, result: { relay: { protocol: a2 ?? "irn" }, responderPublicKey: A5 }, throwOnFailedPublish: true }).catch((q3) => {
          throw g3 == null ? void 0 : g3.setError(er2.session_approve_publish_failure), q3;
        }), g3.addTrace(Qs2.session_approve_publish_success);
      } catch (q3) {
        throw this.client.logger.error(q3), this.client.session.delete(I3, Nt("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(I3), q3;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: g3.eventId }), await this.client.core.pairing.updateMetadata({ topic: w4, metadata: m3.metadata }), await this.client.proposal.delete(o3, Nt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: w4 }), await this.setExpiry(I3, Ei(J2)), { topic: I3, acknowledged: () => Promise.resolve(this.client.session.get(I3)) };
    }), c2(this, "reject", async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(e);
      } catch (r2) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), r2;
      }
      const { id: t, reason: s } = e;
      let i3;
      try {
        i3 = this.client.proposal.get(t).pairingTopic;
      } catch (r2) {
        throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`), r2;
      }
      i3 && (await this.sendError({ id: t, topic: i3, error: s, rpcOpts: N.wc_sessionPropose.reject }), await this.client.proposal.delete(t, Nt("USER_DISCONNECTED")));
    }), c2(this, "update", async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(e);
      } catch (h4) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), h4;
      }
      const { topic: t, namespaces: s } = e, { done: i3, resolve: r2, reject: o3 } = gi(), a2 = payloadId(), l2 = getBigIntRpcId().toString(), p4 = this.client.session.get(t).namespaces;
      return this.events.once(xi("session_update", a2), ({ error: h4 }) => {
        h4 ? o3(h4) : r2();
      }), await this.client.session.update(t, { namespaces: s }), await this.sendRequest({ topic: t, method: "wc_sessionUpdate", params: { namespaces: s }, throwOnFailedPublish: true, clientRpcId: a2, relayRpcId: l2 }).catch((h4) => {
        this.client.logger.error(h4), this.client.session.update(t, { namespaces: p4 }), o3(h4);
      }), { acknowledged: i3 };
    }), c2(this, "extend", async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(e);
      } catch (a2) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), a2;
      }
      const { topic: t } = e, s = payloadId(), { done: i3, resolve: r2, reject: o3 } = gi();
      return this.events.once(xi("session_extend", s), ({ error: a2 }) => {
        a2 ? o3(a2) : r2();
      }), await this.setExpiry(t, Ei(J2)), this.sendRequest({ topic: t, method: "wc_sessionExtend", params: {}, clientRpcId: s, throwOnFailedPublish: true }).catch((a2) => {
        o3(a2);
      }), { acknowledged: i3 };
    }), c2(this, "request", async (e) => {
      this.isInitialized();
      try {
        await this.isValidRequest(e);
      } catch (_3) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), _3;
      }
      const { chainId: t, request: s, topic: i3, expiry: r2 = N.wc_sessionRequest.req.ttl } = e, o3 = this.client.session.get(i3);
      (o3 == null ? void 0 : o3.transportType) === Q.relay && await this.confirmOnlineStateOrThrow();
      const a2 = payloadId(), l2 = getBigIntRpcId().toString(), { done: p4, resolve: h4, reject: u4 } = gi(r2, "Request expired. Please try again.");
      this.events.once(xi("session_request", a2), ({ error: _3, result: g3 }) => {
        _3 ? u4(_3) : h4(g3);
      });
      const d3 = "wc_sessionRequest", w4 = this.getAppLinkIfEnabled(o3.peer.metadata, o3.transportType);
      if (w4) return await this.sendRequest({ clientRpcId: a2, relayRpcId: l2, topic: i3, method: d3, params: { request: b2(v3({}, s), { expiryTimestamp: Ei(r2) }), chainId: t }, expiry: r2, throwOnFailedPublish: true, appLink: w4 }).catch((_3) => u4(_3)), this.client.events.emit("session_request_sent", { topic: i3, request: s, chainId: t, id: a2 }), await p4();
      const m3 = { request: b2(v3({}, s), { expiryTimestamp: Ei(r2) }), chainId: t }, f5 = this.shouldSetTVF(d3, m3);
      return await Promise.all([new Promise(async (_3) => {
        await this.sendRequest(v3({ clientRpcId: a2, relayRpcId: l2, topic: i3, method: d3, params: m3, expiry: r2, throwOnFailedPublish: true }, f5 && { tvf: this.getTVFParams(a2, m3) })).catch((g3) => u4(g3)), this.client.events.emit("session_request_sent", { topic: i3, request: s, chainId: t, id: a2 }), _3();
      }), new Promise(async (_3) => {
        var g3;
        if (!((g3 = o3.sessionConfig) != null && g3.disableDeepLink)) {
          const A5 = await Oi(this.client.core.storage, Me3);
          await Si({ id: a2, topic: i3, wcDeepLink: A5 });
        }
        _3();
      }), p4()]).then((_3) => _3[2]);
    }), c2(this, "respond", async (e) => {
      this.isInitialized(), await this.isValidRespond(e);
      const { topic: t, response: s } = e, { id: i3 } = s, r2 = this.client.session.get(t);
      r2.transportType === Q.relay && await this.confirmOnlineStateOrThrow();
      const o3 = this.getAppLinkIfEnabled(r2.peer.metadata, r2.transportType);
      isJsonRpcResult(s) ? await this.sendResult({ id: i3, topic: t, result: s.result, throwOnFailedPublish: true, appLink: o3 }) : isJsonRpcError(s) && await this.sendError({ id: i3, topic: t, error: s.error, appLink: o3 }), this.cleanupAfterResponse(e);
    }), c2(this, "ping", async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(e);
      } catch (s) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s;
      }
      const { topic: t } = e;
      if (this.client.session.keys.includes(t)) {
        const s = payloadId(), i3 = getBigIntRpcId().toString(), { done: r2, resolve: o3, reject: a2 } = gi();
        this.events.once(xi("session_ping", s), ({ error: l2 }) => {
          l2 ? a2(l2) : o3();
        }), await Promise.all([this.sendRequest({ topic: t, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s, relayRpcId: i3 }), r2()]);
      } else this.client.core.pairing.pairings.keys.includes(t) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: t }));
    }), c2(this, "emit", async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(e);
      const { topic: t, event: s, chainId: i3 } = e, r2 = getBigIntRpcId().toString(), o3 = payloadId();
      await this.sendRequest({ topic: t, method: "wc_sessionEvent", params: { event: s, chainId: i3 }, throwOnFailedPublish: true, relayRpcId: r2, clientRpcId: o3 });
    }), c2(this, "disconnect", async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(e);
      const { topic: t } = e;
      if (this.client.session.keys.includes(t)) await this.sendRequest({ topic: t, method: "wc_sessionDelete", params: Nt("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: t, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(t)) await this.client.core.pairing.disconnect({ topic: t });
      else {
        const { message: s } = ht("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
        throw new Error(s);
      }
    }), c2(this, "find", (e) => (this.isInitialized(), this.client.session.getAll().filter((t) => aa(t, e)))), c2(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), c2(this, "authenticate", async (e, t) => {
      var s;
      this.isInitialized(), this.isValidAuthenticate(e);
      const i3 = t && this.client.core.linkModeSupportedApps.includes(t) && ((s = this.client.metadata.redirect) == null ? void 0 : s.linkMode), r2 = i3 ? Q.link_mode : Q.relay;
      r2 === Q.relay && await this.confirmOnlineStateOrThrow();
      const { chains: o3, statement: a2 = "", uri: l2, domain: p4, nonce: h4, type: u4, exp: d3, nbf: w4, methods: m3 = [], expiry: f5 } = e, _3 = [...e.resources || []], { topic: g3, uri: A5 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: r2 });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: g3, uri: A5 } });
      const D3 = await this.client.core.crypto.generateKeyPair(), I3 = Pc(D3);
      if (await Promise.all([this.client.auth.authKeys.set(ce2, { responseTopic: I3, publicKey: D3 }), this.client.auth.pairingTopics.set(I3, { topic: I3, pairingTopic: g3 })]), await this.client.core.relayer.subscribe(I3, { transportType: r2 }), this.client.logger.info(`sending request to new pairing topic: ${g3}`), m3.length > 0) {
        const { namespace: x3 } = Ie(o3[0]);
        let L4 = fs(x3, "request", m3);
        de(_3) && (L4 = ls(L4, _3.pop())), _3.push(L4);
      }
      const T3 = f5 && f5 > N.wc_sessionAuthenticate.req.ttl ? f5 : N.wc_sessionAuthenticate.req.ttl, U4 = { authPayload: { type: u4 ?? "caip122", chains: o3, statement: a2, aud: l2, domain: p4, version: "1", nonce: h4, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: d3, nbf: w4, resources: _3 }, requester: { publicKey: D3, metadata: this.client.metadata }, expiryTimestamp: Ei(T3) }, fe4 = { eip155: { chains: o3, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...m3])], events: ["chainChanged", "accountsChanged"] } }, q3 = { requiredNamespaces: {}, optionalNamespaces: fe4, relays: [{ protocol: "irn" }], pairingTopic: g3, proposer: { publicKey: D3, metadata: this.client.metadata }, expiryTimestamp: Ei(N.wc_sessionPropose.req.ttl), id: payloadId() }, { done: Rt4, resolve: je4, reject: Se4 } = gi(T3, "Request expired"), te4 = payloadId(), le4 = xi("session_connect", q3.id), Re3 = xi("session_request", te4), pe4 = async ({ error: x3, session: L4 }) => {
        this.events.off(Re3, ve3), x3 ? Se4(x3) : L4 && je4({ session: L4 });
      }, ve3 = async (x3) => {
        var L4, Fe4, Qe5;
        if (await this.deletePendingAuthRequest(te4, { message: "fulfilled", code: 0 }), x3.error) {
          const ie4 = Nt("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return x3.error.code === ie4.code ? void 0 : (this.events.off(le4, pe4), Se4(x3.error.message));
        }
        await this.deleteProposal(q3.id), this.events.off(le4, pe4);
        const { cacaos: He4, responder: Q3 } = x3.result, Te3 = [], ze4 = [];
        for (const ie4 of He4) {
          await is({ cacao: ie4, projectId: this.client.core.projectId }) || (this.client.logger.error(ie4, "Signature verification failed"), Se4(Nt("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: qe4 } = ie4, Pe4 = de(qe4.resources), Ye4 = [dr(qe4.iss)], vt2 = Me(qe4.iss);
          if (Pe4) {
            const Ne2 = ds(Pe4), It3 = hs(Pe4);
            Te3.push(...Ne2), Ye4.push(...It3);
          }
          for (const Ne2 of Ye4) ze4.push(`${Ne2}:${vt2}`);
        }
        const se4 = await this.client.core.crypto.generateSharedKey(D3, Q3.publicKey);
        let he4;
        Te3.length > 0 && (he4 = { topic: se4, acknowledged: true, self: { publicKey: D3, metadata: this.client.metadata }, peer: Q3, controller: Q3.publicKey, expiry: Ei(J2), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: g3, namespaces: ca([...new Set(Te3)], [...new Set(ze4)]), transportType: r2 }, await this.client.core.relayer.subscribe(se4, { transportType: r2 }), await this.client.session.set(se4, he4), g3 && await this.client.core.pairing.updateMetadata({ topic: g3, metadata: Q3.metadata }), he4 = this.client.session.get(se4)), (L4 = this.client.metadata.redirect) != null && L4.linkMode && (Fe4 = Q3.metadata.redirect) != null && Fe4.linkMode && (Qe5 = Q3.metadata.redirect) != null && Qe5.universal && t && (this.client.core.addLinkModeSupportedApp(Q3.metadata.redirect.universal), this.client.session.update(se4, { transportType: Q.link_mode })), je4({ auths: He4, session: he4 });
      };
      this.events.once(le4, pe4), this.events.once(Re3, ve3);
      let Ie4;
      try {
        if (i3) {
          const x3 = formatJsonRpcRequest("wc_sessionAuthenticate", U4, te4);
          this.client.core.history.set(g3, x3);
          const L4 = await this.client.core.crypto.encode("", x3, { type: ne, encoding: Ee });
          Ie4 = Xc(t, g3, L4);
        } else await Promise.all([this.sendRequest({ topic: g3, method: "wc_sessionAuthenticate", params: U4, expiry: e.expiry, throwOnFailedPublish: true, clientRpcId: te4 }), this.sendRequest({ topic: g3, method: "wc_sessionPropose", params: q3, expiry: N.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: q3.id })]);
      } catch (x3) {
        throw this.events.off(le4, pe4), this.events.off(Re3, ve3), x3;
      }
      return await this.setProposal(q3.id, q3), await this.setAuthRequest(te4, { request: b2(v3({}, U4), { verifyContext: {} }), pairingTopic: g3, transportType: r2 }), { uri: Ie4 ?? A5, response: Rt4 };
    }), c2(this, "approveSessionAuthenticate", async (e) => {
      const { id: t, auths: s } = e, i3 = this.client.core.eventClient.createEvent({ properties: { topic: t.toString(), trace: [tr2.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (f5) {
        throw i3.setError(ir2.no_internet_connection), f5;
      }
      const r2 = this.getPendingAuthRequest(t);
      if (!r2) throw i3.setError(ir2.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${t}`);
      const o3 = r2.transportType || Q.relay;
      o3 === Q.relay && await this.confirmOnlineStateOrThrow();
      const a2 = r2.requester.publicKey, l2 = await this.client.core.crypto.generateKeyPair(), p4 = Pc(a2), h4 = { type: Kt, receiverPublicKey: a2, senderPublicKey: l2 }, u4 = [], d3 = [];
      for (const f5 of s) {
        if (!await is({ cacao: f5, projectId: this.client.core.projectId })) {
          i3.setError(ir2.invalid_cacao);
          const I3 = Nt("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: t, topic: p4, error: I3, encodeOpts: h4 }), new Error(I3.message);
        }
        i3.addTrace(tr2.cacaos_verified);
        const { p: _3 } = f5, g3 = de(_3.resources), A5 = [dr(_3.iss)], D3 = Me(_3.iss);
        if (g3) {
          const I3 = ds(g3), T3 = hs(g3);
          u4.push(...I3), A5.push(...T3);
        }
        for (const I3 of A5) d3.push(`${I3}:${D3}`);
      }
      const w4 = await this.client.core.crypto.generateSharedKey(l2, a2);
      i3.addTrace(tr2.create_authenticated_session_topic);
      let m3;
      if ((u4 == null ? void 0 : u4.length) > 0) {
        m3 = { topic: w4, acknowledged: true, self: { publicKey: l2, metadata: this.client.metadata }, peer: { publicKey: a2, metadata: r2.requester.metadata }, controller: a2, expiry: Ei(J2), authentication: s, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: r2.pairingTopic, namespaces: ca([...new Set(u4)], [...new Set(d3)]), transportType: o3 }, i3.addTrace(tr2.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(w4, { transportType: o3 });
        } catch (f5) {
          throw i3.setError(ir2.subscribe_authenticated_session_topic_failure), f5;
        }
        i3.addTrace(tr2.subscribe_authenticated_session_topic_success), await this.client.session.set(w4, m3), i3.addTrace(tr2.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: r2.pairingTopic, metadata: r2.requester.metadata });
      }
      i3.addTrace(tr2.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: p4, id: t, result: { cacaos: s, responder: { publicKey: l2, metadata: this.client.metadata } }, encodeOpts: h4, throwOnFailedPublish: true, appLink: this.getAppLinkIfEnabled(r2.requester.metadata, o3) });
      } catch (f5) {
        throw i3.setError(ir2.authenticated_session_approve_publish_failure), f5;
      }
      return await this.client.auth.requests.delete(t, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: r2.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: i3.eventId }), { session: m3 };
    }), c2(this, "rejectSessionAuthenticate", async (e) => {
      this.isInitialized();
      const { id: t, reason: s } = e, i3 = this.getPendingAuthRequest(t);
      if (!i3) throw new Error(`Could not find pending auth request with id ${t}`);
      i3.transportType === Q.relay && await this.confirmOnlineStateOrThrow();
      const r2 = i3.requester.publicKey, o3 = await this.client.core.crypto.generateKeyPair(), a2 = Pc(r2), l2 = { type: Kt, receiverPublicKey: r2, senderPublicKey: o3 };
      await this.sendError({ id: t, topic: a2, error: s, encodeOpts: l2, rpcOpts: N.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(i3.requester.metadata, i3.transportType) }), await this.client.auth.requests.delete(t, { message: "rejected", code: 0 }), await this.client.proposal.delete(t, Nt("USER_DISCONNECTED"));
    }), c2(this, "formatAuthMessage", (e) => {
      this.isInitialized();
      const { request: t, iss: s } = e;
      return hr(t, s);
    }), c2(this, "processRelayMessageCache", () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const e = this.relayMessageCache.shift();
          e && await this.onRelayMessage(e);
        } catch (e) {
          this.client.logger.error(e);
        }
      }, 50);
    }), c2(this, "cleanupDuplicatePairings", async (e) => {
      if (e.pairingTopic) try {
        const t = this.client.core.pairing.pairings.get(e.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((i3) => {
          var r2, o3;
          return ((r2 = i3.peerMetadata) == null ? void 0 : r2.url) && ((o3 = i3.peerMetadata) == null ? void 0 : o3.url) === e.peer.metadata.url && i3.topic && i3.topic !== t.topic;
        });
        if (s.length === 0) return;
        this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((i3) => this.client.core.pairing.disconnect({ topic: i3.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (t) {
        this.client.logger.error(t);
      }
    }), c2(this, "deleteSession", async (e) => {
      var t;
      const { topic: s, expirerHasDeleted: i3 = false, emitEvent: r2 = true, id: o3 = 0 } = e, { self: a2 } = this.client.session.get(s);
      await this.client.core.relayer.unsubscribe(s), await this.client.session.delete(s, Nt("USER_DISCONNECTED")), this.addToRecentlyDeleted(s, "session"), this.client.core.crypto.keychain.has(a2.publicKey) && await this.client.core.crypto.deleteKeyPair(a2.publicKey), this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s), i3 || this.client.core.expirer.del(s), this.client.core.storage.removeItem(Me3).catch((l2) => this.client.logger.warn(l2)), this.getPendingSessionRequests().forEach((l2) => {
        l2.topic === s && this.deletePendingSessionRequest(l2.id, Nt("USER_DISCONNECTED"));
      }), s === ((t = this.sessionRequestQueue.queue[0]) == null ? void 0 : t.topic) && (this.sessionRequestQueue.state = $2.idle), r2 && this.client.events.emit("session_delete", { id: o3, topic: s });
    }), c2(this, "deleteProposal", async (e, t) => {
      if (t) try {
        const s = this.client.proposal.get(e), i3 = this.client.core.eventClient.getEvent({ topic: s.pairingTopic });
        i3 == null ? void 0 : i3.setError(er2.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(e, Nt("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "proposal");
    }), c2(this, "deletePendingSessionRequest", async (e, t, s = false) => {
      await Promise.all([this.client.pendingRequest.delete(e, t), s ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i3) => i3.id !== e), s && (this.sessionRequestQueue.state = $2.idle, this.client.events.emit("session_request_expire", { id: e }));
    }), c2(this, "deletePendingAuthRequest", async (e, t, s = false) => {
      await Promise.all([this.client.auth.requests.delete(e, t), s ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }), c2(this, "setExpiry", async (e, t) => {
      this.client.session.keys.includes(e) && (this.client.core.expirer.set(e, t), await this.client.session.update(e, { expiry: t }));
    }), c2(this, "setProposal", async (e, t) => {
      this.client.core.expirer.set(e, Ei(N.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e, t);
    }), c2(this, "setAuthRequest", async (e, t) => {
      const { request: s, pairingTopic: i3, transportType: r2 = Q.relay } = t;
      this.client.core.expirer.set(e, s.expiryTimestamp), await this.client.auth.requests.set(e, { authPayload: s.authPayload, requester: s.requester, expiryTimestamp: s.expiryTimestamp, id: e, pairingTopic: i3, verifyContext: s.verifyContext, transportType: r2 });
    }), c2(this, "setPendingSessionRequest", async (e) => {
      const { id: t, topic: s, params: i3, verifyContext: r2 } = e, o3 = i3.request.expiryTimestamp || Ei(N.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(t, o3), await this.client.pendingRequest.set(t, { id: t, topic: s, params: i3, verifyContext: r2 });
    }), c2(this, "sendRequest", async (e) => {
      const { topic: t, method: s, params: i3, expiry: r2, relayRpcId: o3, clientRpcId: a2, throwOnFailedPublish: l2, appLink: p4, tvf: h4 } = e, u4 = formatJsonRpcRequest(s, i3, a2);
      let d3;
      const w4 = !!p4;
      try {
        const _3 = w4 ? Ee : Ht;
        d3 = await this.client.core.crypto.encode(t, u4, { encoding: _3 });
      } catch (_3) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`), _3;
      }
      let m3;
      if (gt2.includes(s)) {
        const _3 = kc(JSON.stringify(u4)), g3 = kc(d3);
        m3 = await this.client.core.verify.register({ id: g3, decryptedId: _3 });
      }
      const f5 = N[s].req;
      if (f5.attestation = m3, r2 && (f5.ttl = r2), o3 && (f5.id = o3), this.client.core.history.set(t, u4), w4) {
        const _3 = Xc(p4, t, d3);
        await global.Linking.openURL(_3, this.client.name);
      } else {
        const _3 = N[s].req;
        r2 && (_3.ttl = r2), o3 && (_3.id = o3), _3.tvf = b2(v3({}, h4), { correlationId: u4.id }), l2 ? (_3.internal = b2(v3({}, _3.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(t, d3, _3)) : this.client.core.relayer.publish(t, d3, _3).catch((g3) => this.client.logger.error(g3));
      }
      return u4.id;
    }), c2(this, "sendResult", async (e) => {
      const { id: t, topic: s, result: i3, throwOnFailedPublish: r2, encodeOpts: o3, appLink: a2 } = e, l2 = formatJsonRpcResult(t, i3);
      let p4;
      const h4 = a2 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const w4 = h4 ? Ee : Ht;
        p4 = await this.client.core.crypto.encode(s, l2, b2(v3({}, o3 || {}), { encoding: w4 }));
      } catch (w4) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`), w4;
      }
      let u4, d3;
      try {
        u4 = await this.client.core.history.get(s, t);
        const w4 = u4.request;
        try {
          this.shouldSetTVF(w4.method, w4.params) && (d3 = this.getTVFParams(t, w4.params, i3));
        } catch (m3) {
          this.client.logger.warn("sendResult() -> getTVFParams() failed", m3);
        }
      } catch (w4) {
        throw this.client.logger.error(`sendResult() -> history.get(${s}, ${t}) failed`), w4;
      }
      if (h4) {
        const w4 = Xc(a2, s, p4);
        await global.Linking.openURL(w4, this.client.name);
      } else {
        const w4 = u4.request.method, m3 = N[w4].res;
        m3.tvf = b2(v3({}, d3), { correlationId: t }), r2 ? (m3.internal = b2(v3({}, m3.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s, p4, m3)) : this.client.core.relayer.publish(s, p4, m3).catch((f5) => this.client.logger.error(f5));
      }
      await this.client.core.history.resolve(l2);
    }), c2(this, "sendError", async (e) => {
      const { id: t, topic: s, error: i3, encodeOpts: r2, rpcOpts: o3, appLink: a2 } = e, l2 = formatJsonRpcError(t, i3);
      let p4;
      const h4 = a2 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const d3 = h4 ? Ee : Ht;
        p4 = await this.client.core.crypto.encode(s, l2, b2(v3({}, r2 || {}), { encoding: d3 }));
      } catch (d3) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`), d3;
      }
      let u4;
      try {
        u4 = await this.client.core.history.get(s, t);
      } catch (d3) {
        throw this.client.logger.error(`sendError() -> history.get(${s}, ${t}) failed`), d3;
      }
      if (h4) {
        const d3 = Xc(a2, s, p4);
        await global.Linking.openURL(d3, this.client.name);
      } else {
        const d3 = u4.request.method, w4 = o3 || N[d3].res;
        this.client.core.relayer.publish(s, p4, w4);
      }
      await this.client.core.history.resolve(l2);
    }), c2(this, "cleanup", async () => {
      const e = [], t = [];
      this.client.session.getAll().forEach((s) => {
        let i3 = false;
        vi(s.expiry) && (i3 = true), this.client.core.crypto.keychain.has(s.topic) || (i3 = true), i3 && e.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        vi(s.expiryTimestamp) && t.push(s.id);
      }), await Promise.all([...e.map((s) => this.deleteSession({ topic: s })), ...t.map((s) => this.deleteProposal(s))]);
    }), c2(this, "onProviderMessageEvent", async (e) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(e) : await this.onRelayMessage(e);
    }), c2(this, "onRelayEventRequest", async (e) => {
      this.requestQueue.queue.push(e), await this.processRequestsQueue();
    }), c2(this, "processRequestsQueue", async () => {
      if (this.requestQueue.state === $2.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = $2.active;
        const e = this.requestQueue.queue.shift();
        if (e) try {
          await this.processRequest(e);
        } catch (t) {
          this.client.logger.warn(t);
        }
      }
      this.requestQueue.state = $2.idle;
    }), c2(this, "processRequest", async (e) => {
      const { topic: t, payload: s, attestation: i3, transportType: r2, encryptedId: o3 } = e, a2 = s.method;
      if (!this.shouldIgnorePairingRequest({ topic: t, requestMethod: a2 })) switch (a2) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: t, payload: s, attestation: i3, encryptedId: o3 });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(t, s);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(t, s);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(t, s);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(t, s);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(t, s);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: t, payload: s, attestation: i3, encryptedId: o3, transportType: r2 });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(t, s);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: t, payload: s, attestation: i3, encryptedId: o3, transportType: r2 });
        default:
          return this.client.logger.info(`Unsupported request method ${a2}`);
      }
    }), c2(this, "onRelayEventResponse", async (e) => {
      const { topic: t, payload: s, transportType: i3 } = e, r2 = (await this.client.core.history.get(t, s.id)).request.method;
      switch (r2) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(t, s, i3);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(t, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(t, s);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(t, s);
        case "wc_sessionPing":
          return this.onSessionPingResponse(t, s);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(t, s);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(t, s);
        default:
          return this.client.logger.info(`Unsupported response method ${r2}`);
      }
    }), c2(this, "onRelayEventUnknownPayload", (e) => {
      const { topic: t } = e, { message: s } = ht("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s);
    }), c2(this, "shouldIgnorePairingRequest", (e) => {
      const { topic: t, requestMethod: s } = e, i3 = this.expectedPairingMethodMap.get(t);
      return !i3 || i3.includes(s) ? false : !!(i3.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }), c2(this, "onSessionProposeRequest", async (e) => {
      const { topic: t, payload: s, attestation: i3, encryptedId: r2 } = e, { params: o3, id: a2 } = s;
      try {
        const l2 = this.client.core.eventClient.getEvent({ topic: t });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l2 == null ? void 0 : l2.setError(Y2.proposal_listener_not_found)), this.isValidConnect(v3({}, s.params));
        const p4 = o3.expiryTimestamp || Ei(N.wc_sessionPropose.req.ttl), h4 = v3({ id: a2, pairingTopic: t, expiryTimestamp: p4 }, o3);
        await this.setProposal(a2, h4);
        const u4 = await this.getVerifyContext({ attestationId: i3, hash: kc(JSON.stringify(s)), encryptedId: r2, metadata: h4.proposer.metadata });
        l2 == null ? void 0 : l2.addTrace(G2.emit_session_proposal), this.client.events.emit("session_proposal", { id: a2, params: h4, verifyContext: u4 });
      } catch (l2) {
        await this.sendError({ id: a2, topic: t, error: l2, rpcOpts: N.wc_sessionPropose.autoReject }), this.client.logger.error(l2);
      }
    }), c2(this, "onSessionProposeResponse", async (e, t, s) => {
      const { id: i3 } = t;
      if (isJsonRpcResult(t)) {
        const { result: r2 } = t;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: r2 });
        const o3 = this.client.proposal.get(i3);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: o3 });
        const a2 = o3.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a2 });
        const l2 = r2.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l2 });
        const p4 = await this.client.core.crypto.generateSharedKey(a2, l2);
        this.pendingSessions.set(i3, { sessionTopic: p4, pairingTopic: e, proposalId: i3, publicKey: a2 });
        const h4 = await this.client.core.relayer.subscribe(p4, { transportType: s });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h4 }), await this.client.core.pairing.activate({ topic: e });
      } else if (isJsonRpcError(t)) {
        await this.client.proposal.delete(i3, Nt("USER_DISCONNECTED"));
        const r2 = xi("session_connect", i3);
        if (this.events.listenerCount(r2) === 0) throw new Error(`emitting ${r2} without any listeners, 954`);
        this.events.emit(r2, { error: t.error });
      }
    }), c2(this, "onSessionSettleRequest", async (e, t) => {
      const { id: s, params: i3 } = t;
      try {
        this.isValidSessionSettleRequest(i3);
        const { relay: r2, controller: o3, expiry: a2, namespaces: l2, sessionProperties: p4, scopedProperties: h4, sessionConfig: u4 } = t.params, d3 = [...this.pendingSessions.values()].find((f5) => f5.sessionTopic === e);
        if (!d3) return this.client.logger.error(`Pending session not found for topic ${e}`);
        const w4 = this.client.proposal.get(d3.proposalId), m3 = b2(v3(v3(v3({ topic: e, relay: r2, expiry: a2, namespaces: l2, acknowledged: true, pairingTopic: d3.pairingTopic, requiredNamespaces: w4.requiredNamespaces, optionalNamespaces: w4.optionalNamespaces, controller: o3.publicKey, self: { publicKey: d3.publicKey, metadata: this.client.metadata }, peer: { publicKey: o3.publicKey, metadata: o3.metadata } }, p4 && { sessionProperties: p4 }), h4 && { scopedProperties: h4 }), u4 && { sessionConfig: u4 }), { transportType: Q.relay });
        await this.client.session.set(m3.topic, m3), await this.setExpiry(m3.topic, m3.expiry), await this.client.core.pairing.updateMetadata({ topic: d3.pairingTopic, metadata: m3.peer.metadata }), this.client.events.emit("session_connect", { session: m3 }), this.events.emit(xi("session_connect", d3.proposalId), { session: m3 }), this.pendingSessions.delete(d3.proposalId), this.deleteProposal(d3.proposalId, false), this.cleanupDuplicatePairings(m3), await this.sendResult({ id: t.id, topic: e, result: true, throwOnFailedPublish: true });
      } catch (r2) {
        await this.sendError({ id: s, topic: e, error: r2 }), this.client.logger.error(r2);
      }
    }), c2(this, "onSessionSettleResponse", async (e, t) => {
      const { id: s } = t;
      isJsonRpcResult(t) ? (await this.client.session.update(e, { acknowledged: true }), this.events.emit(xi("session_approve", s), {})) : isJsonRpcError(t) && (await this.client.session.delete(e, Nt("USER_DISCONNECTED")), this.events.emit(xi("session_approve", s), { error: t.error }));
    }), c2(this, "onSessionUpdateRequest", async (e, t) => {
      const { params: s, id: i3 } = t;
      try {
        const r2 = `${e}_session_update`, o3 = Ua.get(r2);
        if (o3 && this.isRequestOutOfSync(o3, i3)) {
          this.client.logger.warn(`Discarding out of sync request - ${i3}`), this.sendError({ id: i3, topic: e, error: Nt("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(v3({ topic: e }, s));
        try {
          Ua.set(r2, i3), await this.client.session.update(e, { namespaces: s.namespaces }), await this.sendResult({ id: i3, topic: e, result: true, throwOnFailedPublish: true });
        } catch (a2) {
          throw Ua.delete(r2), a2;
        }
        this.client.events.emit("session_update", { id: i3, topic: e, params: s });
      } catch (r2) {
        await this.sendError({ id: i3, topic: e, error: r2 }), this.client.logger.error(r2);
      }
    }), c2(this, "isRequestOutOfSync", (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)), c2(this, "onSessionUpdateResponse", (e, t) => {
      const { id: s } = t, i3 = xi("session_update", s);
      if (this.events.listenerCount(i3) === 0) throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(xi("session_update", s), {}) : isJsonRpcError(t) && this.events.emit(xi("session_update", s), { error: t.error });
    }), c2(this, "onSessionExtendRequest", async (e, t) => {
      const { id: s } = t;
      try {
        this.isValidExtend({ topic: e }), await this.setExpiry(e, Ei(J2)), await this.sendResult({ id: s, topic: e, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_extend", { id: s, topic: e });
      } catch (i3) {
        await this.sendError({ id: s, topic: e, error: i3 }), this.client.logger.error(i3);
      }
    }), c2(this, "onSessionExtendResponse", (e, t) => {
      const { id: s } = t, i3 = xi("session_extend", s);
      if (this.events.listenerCount(i3) === 0) throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(xi("session_extend", s), {}) : isJsonRpcError(t) && this.events.emit(xi("session_extend", s), { error: t.error });
    }), c2(this, "onSessionPingRequest", async (e, t) => {
      const { id: s } = t;
      try {
        this.isValidPing({ topic: e }), await this.sendResult({ id: s, topic: e, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s, topic: e });
      } catch (i3) {
        await this.sendError({ id: s, topic: e, error: i3 }), this.client.logger.error(i3);
      }
    }), c2(this, "onSessionPingResponse", (e, t) => {
      const { id: s } = t, i3 = xi("session_ping", s);
      setTimeout(() => {
        if (this.events.listenerCount(i3) === 0) throw new Error(`emitting ${i3} without any listeners 2176`);
        isJsonRpcResult(t) ? this.events.emit(xi("session_ping", s), {}) : isJsonRpcError(t) && this.events.emit(xi("session_ping", s), { error: t.error });
      }, 500);
    }), c2(this, "onSessionDeleteRequest", async (e, t) => {
      const { id: s } = t;
      try {
        this.isValidDisconnect({ topic: e, reason: t.params }), Promise.all([new Promise((i3) => {
          this.client.core.relayer.once(C2.publish, async () => {
            i3(await this.deleteSession({ topic: e, id: s }));
          });
        }), this.sendResult({ id: s, topic: e, result: true, throwOnFailedPublish: true }), this.cleanupPendingSentRequestsForTopic({ topic: e, error: Nt("USER_DISCONNECTED") })]).catch((i3) => this.client.logger.error(i3));
      } catch (i3) {
        this.client.logger.error(i3);
      }
    }), c2(this, "onSessionRequest", async (e) => {
      var t, s, i3;
      const { topic: r2, payload: o3, attestation: a2, encryptedId: l2, transportType: p4 } = e, { id: h4, params: u4 } = o3;
      try {
        await this.isValidRequest(v3({ topic: r2 }, u4));
        const d3 = this.client.session.get(r2), w4 = await this.getVerifyContext({ attestationId: a2, hash: kc(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", u4, h4))), encryptedId: l2, metadata: d3.peer.metadata, transportType: p4 }), m3 = { id: h4, topic: r2, params: u4, verifyContext: w4 };
        await this.setPendingSessionRequest(m3), p4 === Q.link_mode && (t = d3.peer.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp((s = d3.peer.metadata.redirect) == null ? void 0 : s.universal), (i3 = this.client.signConfig) != null && i3.disableRequestQueue ? this.emitSessionRequest(m3) : (this.addSessionRequestToSessionRequestQueue(m3), this.processSessionRequestQueue());
      } catch (d3) {
        await this.sendError({ id: h4, topic: r2, error: d3 }), this.client.logger.error(d3);
      }
    }), c2(this, "onSessionRequestResponse", (e, t) => {
      const { id: s } = t, i3 = xi("session_request", s);
      if (this.events.listenerCount(i3) === 0) throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(xi("session_request", s), { result: t.result }) : isJsonRpcError(t) && this.events.emit(xi("session_request", s), { error: t.error });
    }), c2(this, "onSessionEventRequest", async (e, t) => {
      const { id: s, params: i3 } = t;
      try {
        const r2 = `${e}_session_event_${i3.event.name}`, o3 = Ua.get(r2);
        if (o3 && this.isRequestOutOfSync(o3, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(v3({ topic: e }, i3)), this.client.events.emit("session_event", { id: s, topic: e, params: i3 }), Ua.set(r2, s);
      } catch (r2) {
        await this.sendError({ id: s, topic: e, error: r2 }), this.client.logger.error(r2);
      }
    }), c2(this, "onSessionAuthenticateResponse", (e, t) => {
      const { id: s } = t;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: e, payload: t }), isJsonRpcResult(t) ? this.events.emit(xi("session_request", s), { result: t.result }) : isJsonRpcError(t) && this.events.emit(xi("session_request", s), { error: t.error });
    }), c2(this, "onSessionAuthenticateRequest", async (e) => {
      var t;
      const { topic: s, payload: i3, attestation: r2, encryptedId: o3, transportType: a2 } = e;
      try {
        const { requester: l2, authPayload: p4, expiryTimestamp: h4 } = i3.params, u4 = await this.getVerifyContext({ attestationId: r2, hash: kc(JSON.stringify(i3)), encryptedId: o3, metadata: l2.metadata, transportType: a2 }), d3 = { requester: l2, pairingTopic: s, id: i3.id, authPayload: p4, verifyContext: u4, expiryTimestamp: h4 };
        await this.setAuthRequest(i3.id, { request: d3, pairingTopic: s, transportType: a2 }), a2 === Q.link_mode && (t = l2.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp(l2.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s, params: i3.params, id: i3.id, verifyContext: u4 });
      } catch (l2) {
        this.client.logger.error(l2);
        const p4 = i3.params.requester.publicKey, h4 = await this.client.core.crypto.generateKeyPair(), u4 = this.getAppLinkIfEnabled(i3.params.requester.metadata, a2), d3 = { type: Kt, receiverPublicKey: p4, senderPublicKey: h4 };
        await this.sendError({ id: i3.id, topic: s, error: l2, encodeOpts: d3, rpcOpts: N.wc_sessionAuthenticate.autoReject, appLink: u4 });
      }
    }), c2(this, "addSessionRequestToSessionRequestQueue", (e) => {
      this.sessionRequestQueue.queue.push(e);
    }), c2(this, "cleanupAfterResponse", (e) => {
      this.deletePendingSessionRequest(e.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = $2.idle, this.processSessionRequestQueue();
      }, (0, import_time3.toMiliseconds)(this.requestQueueDelay));
    }), c2(this, "cleanupPendingSentRequestsForTopic", ({ topic: e, error: t }) => {
      const s = this.client.core.history.pending;
      s.length > 0 && s.filter((i3) => i3.topic === e && i3.request.method === "wc_sessionRequest").forEach((i3) => {
        const r2 = i3.request.id, o3 = xi("session_request", r2);
        if (this.events.listenerCount(o3) === 0) throw new Error(`emitting ${o3} without any listeners`);
        this.events.emit(xi("session_request", i3.request.id), { error: t });
      });
    }), c2(this, "processSessionRequestQueue", () => {
      if (this.sessionRequestQueue.state === $2.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const e = this.sessionRequestQueue.queue[0];
      if (!e) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = $2.active, this.emitSessionRequest(e);
      } catch (t) {
        this.client.logger.error(t);
      }
    }), c2(this, "emitSessionRequest", (e) => {
      this.client.events.emit("session_request", e);
    }), c2(this, "onPairingCreated", (e) => {
      if (e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active) return;
      const t = this.client.proposal.getAll().find((s) => s.pairingTopic === e.topic);
      t && this.onSessionProposeRequest({ topic: e.topic, payload: formatJsonRpcRequest("wc_sessionPropose", b2(v3({}, t), { requiredNamespaces: t.requiredNamespaces, optionalNamespaces: t.optionalNamespaces, relays: t.relays, proposer: t.proposer, sessionProperties: t.sessionProperties, scopedProperties: t.scopedProperties }), t.id) });
    }), c2(this, "isValidConnect", async (e) => {
      if (!ya(e)) {
        const { message: l2 } = ht("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
        throw new Error(l2);
      }
      const { pairingTopic: t, requiredNamespaces: s, optionalNamespaces: i3, sessionProperties: r2, scopedProperties: o3, relays: a2 } = e;
      if (Et(t) || await this.isValidPairingTopic(t), !pa(a2, true)) {
        const { message: l2 } = ht("MISSING_OR_INVALID", `connect() relays: ${a2}`);
        throw new Error(l2);
      }
      if (!Et(s) && xe(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !Et(i3) && xe(i3) !== 0 && this.validateNamespaces(i3, "optionalNamespaces"), Et(r2) || this.validateSessionProps(r2, "sessionProperties"), !Et(o3)) {
        this.validateSessionProps(o3, "scopedProperties");
        const l2 = Object.keys(s || {}).concat(Object.keys(i3 || {}));
        if (!Object.keys(o3).every((p4) => l2.includes(p4))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(o3)}, required/optional namespaces: ${JSON.stringify(l2)}`);
      }
    }), c2(this, "validateNamespaces", (e, t) => {
      const s = ha(e, "connect()", t);
      if (s) throw new Error(s.message);
    }), c2(this, "isValidApprove", async (e) => {
      if (!ya(e)) throw new Error(ht("MISSING_OR_INVALID", `approve() params: ${e}`).message);
      const { id: t, namespaces: s, relayProtocol: i3, sessionProperties: r2, scopedProperties: o3 } = e;
      this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
      const a2 = this.client.proposal.get(t), l2 = Bo(s, "approve()");
      if (l2) throw new Error(l2.message);
      const p4 = No(a2.requiredNamespaces, s, "approve()");
      if (p4) throw new Error(p4.message);
      if (!nt(i3, true)) {
        const { message: h4 } = ht("MISSING_OR_INVALID", `approve() relayProtocol: ${i3}`);
        throw new Error(h4);
      }
      if (Et(r2) || this.validateSessionProps(r2, "sessionProperties"), !Et(o3)) {
        this.validateSessionProps(o3, "scopedProperties");
        const h4 = new Set(Object.keys(s));
        if (!Object.keys(o3).every((u4) => h4.has(u4))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(o3)}, approved namespaces: ${Array.from(h4).join(", ")}`);
      }
    }), c2(this, "isValidReject", async (e) => {
      if (!ya(e)) {
        const { message: i3 } = ht("MISSING_OR_INVALID", `reject() params: ${e}`);
        throw new Error(i3);
      }
      const { id: t, reason: s } = e;
      if (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !ma(s)) {
        const { message: i3 } = ht("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(i3);
      }
    }), c2(this, "isValidSessionSettleRequest", (e) => {
      if (!ya(e)) {
        const { message: l2 } = ht("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
        throw new Error(l2);
      }
      const { relay: t, controller: s, namespaces: i3, expiry: r2 } = e;
      if (!Io(t)) {
        const { message: l2 } = ht("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l2);
      }
      const o3 = da(s, "onSessionSettleRequest()");
      if (o3) throw new Error(o3.message);
      const a2 = Bo(i3, "onSessionSettleRequest()");
      if (a2) throw new Error(a2.message);
      if (vi(r2)) {
        const { message: l2 } = ht("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l2);
      }
    }), c2(this, "isValidUpdate", async (e) => {
      if (!ya(e)) {
        const { message: a2 } = ht("MISSING_OR_INVALID", `update() params: ${e}`);
        throw new Error(a2);
      }
      const { topic: t, namespaces: s } = e;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
      const i3 = this.client.session.get(t), r2 = Bo(s, "update()");
      if (r2) throw new Error(r2.message);
      const o3 = No(i3.requiredNamespaces, s, "update()");
      if (o3) throw new Error(o3.message);
    }), c2(this, "isValidExtend", async (e) => {
      if (!ya(e)) {
        const { message: s } = ht("MISSING_OR_INVALID", `extend() params: ${e}`);
        throw new Error(s);
      }
      const { topic: t } = e;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
    }), c2(this, "isValidRequest", async (e) => {
      if (!ya(e)) {
        const { message: a2 } = ht("MISSING_OR_INVALID", `request() params: ${e}`);
        throw new Error(a2);
      }
      const { topic: t, request: s, chainId: i3, expiry: r2 } = e;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
      const { namespaces: o3 } = this.client.session.get(t);
      if (!va(o3, i3)) {
        const { message: a2 } = ht("MISSING_OR_INVALID", `request() chainId: ${i3}`);
        throw new Error(a2);
      }
      if (!wa(s)) {
        const { message: a2 } = ht("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(a2);
      }
      if (!xa(o3, i3, s.method)) {
        const { message: a2 } = ht("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(a2);
      }
      if (r2 && !Ba(r2, _e3)) {
        const { message: a2 } = ht("MISSING_OR_INVALID", `request() expiry: ${r2}. Expiry must be a number (in seconds) between ${_e3.min} and ${_e3.max}`);
        throw new Error(a2);
      }
    }), c2(this, "isValidRespond", async (e) => {
      var t;
      if (!ya(e)) {
        const { message: r2 } = ht("MISSING_OR_INVALID", `respond() params: ${e}`);
        throw new Error(r2);
      }
      const { topic: s, response: i3 } = e;
      try {
        await this.isValidSessionTopic(s);
      } catch (r2) {
        throw (t = e == null ? void 0 : e.response) != null && t.id && this.cleanupAfterResponse(e), r2;
      }
      if (!ba(i3)) {
        const { message: r2 } = ht("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i3)}`);
        throw new Error(r2);
      }
    }), c2(this, "isValidPing", async (e) => {
      if (!ya(e)) {
        const { message: s } = ht("MISSING_OR_INVALID", `ping() params: ${e}`);
        throw new Error(s);
      }
      const { topic: t } = e;
      await this.isValidSessionOrPairingTopic(t);
    }), c2(this, "isValidEmit", async (e) => {
      if (!ya(e)) {
        const { message: o3 } = ht("MISSING_OR_INVALID", `emit() params: ${e}`);
        throw new Error(o3);
      }
      const { topic: t, event: s, chainId: i3 } = e;
      await this.isValidSessionTopic(t);
      const { namespaces: r2 } = this.client.session.get(t);
      if (!va(r2, i3)) {
        const { message: o3 } = ht("MISSING_OR_INVALID", `emit() chainId: ${i3}`);
        throw new Error(o3);
      }
      if (!Ea(s)) {
        const { message: o3 } = ht("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o3);
      }
      if (!Sa(r2, i3, s.name)) {
        const { message: o3 } = ht("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o3);
      }
    }), c2(this, "isValidDisconnect", async (e) => {
      if (!ya(e)) {
        const { message: s } = ht("MISSING_OR_INVALID", `disconnect() params: ${e}`);
        throw new Error(s);
      }
      const { topic: t } = e;
      await this.isValidSessionOrPairingTopic(t);
    }), c2(this, "isValidAuthenticate", (e) => {
      const { chains: t, uri: s, domain: i3, nonce: r2 } = e;
      if (!Array.isArray(t) || t.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!nt(s, false)) throw new Error("uri is required parameter");
      if (!nt(i3, false)) throw new Error("domain is required parameter");
      if (!nt(r2, false)) throw new Error("nonce is required parameter");
      if ([...new Set(t.map((a2) => Ie(a2).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: o3 } = Ie(t[0]);
      if (o3 !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }), c2(this, "getVerifyContext", async (e) => {
      const { attestationId: t, hash: s, encryptedId: i3, metadata: r2, transportType: o3 } = e, a2 = { verified: { verifyUrl: r2.verifyUrl || ue2, validation: "UNKNOWN", origin: r2.url || "" } };
      try {
        if (o3 === Q.link_mode) {
          const p4 = this.getAppLinkIfEnabled(r2, o3);
          return a2.verified.validation = p4 && new URL(p4).origin === new URL(r2.url).origin ? "VALID" : "INVALID", a2;
        }
        const l2 = await this.client.core.verify.resolve({ attestationId: t, hash: s, encryptedId: i3, verifyUrl: r2.verifyUrl });
        l2 && (a2.verified.origin = l2.origin, a2.verified.isScam = l2.isScam, a2.verified.validation = l2.origin === new URL(r2.url).origin ? "VALID" : "INVALID");
      } catch (l2) {
        this.client.logger.warn(l2);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(a2)}`), a2;
    }), c2(this, "validateSessionProps", (e, t) => {
      Object.values(e).forEach((s, i3) => {
        if (s == null) {
          const { message: r2 } = ht("MISSING_OR_INVALID", `${t} must contain an existing value for each key. Received: ${s} for key ${Object.keys(e)[i3]}`);
          throw new Error(r2);
        }
      });
    }), c2(this, "getPendingAuthRequest", (e) => {
      const t = this.client.auth.requests.get(e);
      return typeof t == "object" ? t : void 0;
    }), c2(this, "addToRecentlyDeleted", (e, t) => {
      if (this.recentlyDeletedMap.set(e, t), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s = 0;
        const i3 = this.recentlyDeletedLimit / 2;
        for (const r2 of this.recentlyDeletedMap.keys()) {
          if (s++ >= i3) break;
          this.recentlyDeletedMap.delete(r2);
        }
      }
    }), c2(this, "checkRecentlyDeleted", (e) => {
      const t = this.recentlyDeletedMap.get(e);
      if (t) {
        const { message: s } = ht("MISSING_OR_INVALID", `Record was recently deleted - ${t}: ${e}`);
        throw new Error(s);
      }
    }), c2(this, "isLinkModeEnabled", (e, t) => {
      var s, i3, r2, o3, a2, l2, p4, h4, u4;
      return !e || t !== Q.link_mode ? false : ((i3 = (s = this.client.metadata) == null ? void 0 : s.redirect) == null ? void 0 : i3.linkMode) === true && ((o3 = (r2 = this.client.metadata) == null ? void 0 : r2.redirect) == null ? void 0 : o3.universal) !== void 0 && ((l2 = (a2 = this.client.metadata) == null ? void 0 : a2.redirect) == null ? void 0 : l2.universal) !== "" && ((p4 = e == null ? void 0 : e.redirect) == null ? void 0 : p4.universal) !== void 0 && ((h4 = e == null ? void 0 : e.redirect) == null ? void 0 : h4.universal) !== "" && ((u4 = e == null ? void 0 : e.redirect) == null ? void 0 : u4.linkMode) === true && this.client.core.linkModeSupportedApps.includes(e.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }), c2(this, "getAppLinkIfEnabled", (e, t) => {
      var s;
      return this.isLinkModeEnabled(e, t) ? (s = e == null ? void 0 : e.redirect) == null ? void 0 : s.universal : void 0;
    }), c2(this, "handleLinkModeMessage", ({ url: e }) => {
      if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
      const t = Ai(e, "topic") || "", s = decodeURIComponent(Ai(e, "wc_ev") || ""), i3 = this.client.session.keys.includes(t);
      i3 && this.client.session.update(t, { transportType: Q.link_mode }), this.client.core.dispatchEnvelope({ topic: t, message: s, sessionExists: i3 });
    }), c2(this, "registerLinkModeListeners", async () => {
      var e;
      if (Ii() || pt() && (e = this.client.metadata.redirect) != null && e.linkMode) {
        const t = global == null ? void 0 : global.Linking;
        if (typeof t < "u") {
          t.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const s = await t.getInitialURL();
          s && setTimeout(() => {
            this.handleLinkModeMessage({ url: s });
          }, 50);
        }
      }
    }), c2(this, "shouldSetTVF", (e, t) => {
      if (!t || e !== "wc_sessionRequest") return false;
      const { request: s } = t;
      return Object.keys(Ue2).includes(s.method);
    }), c2(this, "getTVFParams", (e, t, s) => {
      var i3, r2;
      try {
        const o3 = t.request.method, a2 = this.extractTxHashesFromResult(o3, s);
        return b2(v3({ correlationId: e, rpcMethods: [o3], chainId: t.chainId }, this.isValidContractData(t.request.params) && { contractAddresses: [(r2 = (i3 = t.request.params) == null ? void 0 : i3[0]) == null ? void 0 : r2.to] }), { txHashes: a2 });
      } catch (o3) {
        this.client.logger.warn("Error getting TVF params", o3);
      }
      return {};
    }), c2(this, "isValidContractData", (e) => {
      var t;
      if (!e) return false;
      try {
        const s = (e == null ? void 0 : e.data) || ((t = e == null ? void 0 : e[0]) == null ? void 0 : t.data);
        if (!s.startsWith("0x")) return false;
        const i3 = s.slice(2);
        return /^[0-9a-fA-F]*$/.test(i3) ? i3.length % 2 === 0 : false;
      } catch {
      }
      return false;
    }), c2(this, "extractTxHashesFromResult", (e, t) => {
      try {
        const s = Ue2[e];
        if (typeof t == "string") return [t];
        const i3 = t[s.key];
        if (oe(i3)) return e === "solana_signAllTransactions" ? i3.map((r2) => Ji(r2)) : i3;
        if (typeof i3 == "string") return [i3];
      } catch (s) {
        this.client.logger.warn("Error extracting tx hashes from result", s);
      }
      return [];
    });
  }
  async processPendingMessageEvents() {
    try {
      const n2 = this.client.session.keys, e = this.client.core.relayer.messages.getWithoutAck(n2);
      for (const [t, s] of Object.entries(e)) for (const i3 of s) try {
        await this.onProviderMessageEvent({ topic: t, message: i3, publishedAt: Date.now() });
      } catch {
        this.client.logger.warn(`Error processing pending message event for topic: ${t}, message: ${i3}`);
      }
    } catch (n2) {
      this.client.logger.warn("processPendingMessageEvents failed", n2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: n2 } = ht("NOT_INITIALIZED", this.name);
      throw new Error(n2);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(C2.message, (n2) => {
      this.onProviderMessageEvent(n2);
    });
  }
  async onRelayMessage(n2) {
    const { topic: e, message: t, attestation: s, transportType: i3 } = n2, { publicKey: r2 } = this.client.auth.authKeys.keys.includes(ce2) ? this.client.auth.authKeys.get(ce2) : { responseTopic: void 0, publicKey: void 0 };
    try {
      const o3 = await this.client.core.crypto.decode(e, t, { receiverPublicKey: r2, encoding: i3 === Q.link_mode ? Ee : Ht });
      isJsonRpcRequest(o3) ? (this.client.core.history.set(e, o3), await this.onRelayEventRequest({ topic: e, payload: o3, attestation: s, transportType: i3, encryptedId: kc(t) })) : isJsonRpcResponse(o3) ? (await this.client.core.history.resolve(o3), await this.onRelayEventResponse({ topic: e, payload: o3, transportType: i3 }), this.client.core.history.delete(e, o3.id)) : await this.onRelayEventUnknownPayload({ topic: e, payload: o3, transportType: i3 }), await this.client.core.relayer.messages.ack(e, t);
    } catch (o3) {
      this.client.logger.error(o3);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(M2.expired, async (n2) => {
      const { topic: e, id: t } = bi(n2.target);
      if (t && this.client.pendingRequest.keys.includes(t)) return await this.deletePendingSessionRequest(t, ht("EXPIRED"), true);
      if (t && this.client.auth.requests.keys.includes(t)) return await this.deletePendingAuthRequest(t, ht("EXPIRED"), true);
      e ? this.client.session.keys.includes(e) && (await this.deleteSession({ topic: e, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: e })) : t && (await this.deleteProposal(t, true), this.client.events.emit("proposal_expire", { id: t }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(se2.create, (n2) => this.onPairingCreated(n2)), this.client.core.pairing.events.on(se2.delete, (n2) => {
      this.addToRecentlyDeleted(n2.topic, "pairing");
    });
  }
  isValidPairingTopic(n2) {
    if (!nt(n2, false)) {
      const { message: e } = ht("MISSING_OR_INVALID", `pairing topic should be a string: ${n2}`);
      throw new Error(e);
    }
    if (!this.client.core.pairing.pairings.keys.includes(n2)) {
      const { message: e } = ht("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n2}`);
      throw new Error(e);
    }
    if (vi(this.client.core.pairing.pairings.get(n2).expiry)) {
      const { message: e } = ht("EXPIRED", `pairing topic: ${n2}`);
      throw new Error(e);
    }
  }
  async isValidSessionTopic(n2) {
    if (!nt(n2, false)) {
      const { message: e } = ht("MISSING_OR_INVALID", `session topic should be a string: ${n2}`);
      throw new Error(e);
    }
    if (this.checkRecentlyDeleted(n2), !this.client.session.keys.includes(n2)) {
      const { message: e } = ht("NO_MATCHING_KEY", `session topic doesn't exist: ${n2}`);
      throw new Error(e);
    }
    if (vi(this.client.session.get(n2).expiry)) {
      await this.deleteSession({ topic: n2 });
      const { message: e } = ht("EXPIRED", `session topic: ${n2}`);
      throw new Error(e);
    }
    if (!this.client.core.crypto.keychain.has(n2)) {
      const { message: e } = ht("MISSING_OR_INVALID", `session topic does not exist in keychain: ${n2}`);
      throw await this.deleteSession({ topic: n2 }), new Error(e);
    }
  }
  async isValidSessionOrPairingTopic(n2) {
    if (this.checkRecentlyDeleted(n2), this.client.session.keys.includes(n2)) await this.isValidSessionTopic(n2);
    else if (this.client.core.pairing.pairings.keys.includes(n2)) this.isValidPairingTopic(n2);
    else if (nt(n2, false)) {
      const { message: e } = ht("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${n2}`);
      throw new Error(e);
    } else {
      const { message: e } = ht("MISSING_OR_INVALID", `session or pairing topic should be a string: ${n2}`);
      throw new Error(e);
    }
  }
  async isValidProposalId(n2) {
    if (!ga(n2)) {
      const { message: e } = ht("MISSING_OR_INVALID", `proposal id should be a number: ${n2}`);
      throw new Error(e);
    }
    if (!this.client.proposal.keys.includes(n2)) {
      const { message: e } = ht("NO_MATCHING_KEY", `proposal id doesn't exist: ${n2}`);
      throw new Error(e);
    }
    if (vi(this.client.proposal.get(n2).expiryTimestamp)) {
      await this.deleteProposal(n2);
      const { message: e } = ht("EXPIRED", `proposal id: ${n2}`);
      throw new Error(e);
    }
  }
};
var Ns2 = class extends zi2 {
  constructor(n2, e) {
    super(n2, e, pt2, we2), this.core = n2, this.logger = e;
  }
};
var St3 = class extends zi2 {
  constructor(n2, e) {
    super(n2, e, ht2, we2), this.core = n2, this.logger = e;
  }
};
var Os2 = class extends zi2 {
  constructor(n2, e) {
    super(n2, e, ut2, we2, (t) => t.id), this.core = n2, this.logger = e;
  }
};
var bs2 = class extends zi2 {
  constructor(n2, e) {
    super(n2, e, mt2, ae, () => ce2), this.core = n2, this.logger = e;
  }
};
var As2 = class extends zi2 {
  constructor(n2, e) {
    super(n2, e, _t2, ae), this.core = n2, this.logger = e;
  }
};
var xs2 = class extends zi2 {
  constructor(n2, e) {
    super(n2, e, Et3, ae, (t) => t.id), this.core = n2, this.logger = e;
  }
};
var Cs2 = Object.defineProperty;
var Vs3 = (S4, n2, e) => n2 in S4 ? Cs2(S4, n2, { enumerable: true, configurable: true, writable: true, value: e }) : S4[n2] = e;
var Ge3 = (S4, n2, e) => Vs3(S4, typeof n2 != "symbol" ? n2 + "" : n2, e);
var Ds2 = class {
  constructor(n2, e) {
    this.core = n2, this.logger = e, Ge3(this, "authKeys"), Ge3(this, "pairingTopics"), Ge3(this, "requests"), this.authKeys = new bs2(this.core, this.logger), this.pairingTopics = new As2(this.core, this.logger), this.requests = new xs2(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
};
var Ls2 = Object.defineProperty;
var ks2 = (S4, n2, e) => n2 in S4 ? Ls2(S4, n2, { enumerable: true, configurable: true, writable: true, value: e }) : S4[n2] = e;
var E3 = (S4, n2, e) => ks2(S4, typeof n2 != "symbol" ? n2 + "" : n2, e);
var Ee3 = class _Ee extends J {
  constructor(n2) {
    super(n2), E3(this, "protocol", De2), E3(this, "version", Le3), E3(this, "name", me2.name), E3(this, "metadata"), E3(this, "core"), E3(this, "logger"), E3(this, "events", new import_events4.EventEmitter()), E3(this, "engine"), E3(this, "session"), E3(this, "proposal"), E3(this, "pendingRequest"), E3(this, "auth"), E3(this, "signConfig"), E3(this, "on", (t, s) => this.events.on(t, s)), E3(this, "once", (t, s) => this.events.once(t, s)), E3(this, "off", (t, s) => this.events.off(t, s)), E3(this, "removeListener", (t, s) => this.events.removeListener(t, s)), E3(this, "removeAllListeners", (t) => this.events.removeAllListeners(t)), E3(this, "connect", async (t) => {
      try {
        return await this.engine.connect(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "pair", async (t) => {
      try {
        return await this.engine.pair(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "approve", async (t) => {
      try {
        return await this.engine.approve(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "reject", async (t) => {
      try {
        return await this.engine.reject(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "update", async (t) => {
      try {
        return await this.engine.update(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "extend", async (t) => {
      try {
        return await this.engine.extend(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "request", async (t) => {
      try {
        return await this.engine.request(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "respond", async (t) => {
      try {
        return await this.engine.respond(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "ping", async (t) => {
      try {
        return await this.engine.ping(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "emit", async (t) => {
      try {
        return await this.engine.emit(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "disconnect", async (t) => {
      try {
        return await this.engine.disconnect(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "find", (t) => {
      try {
        return this.engine.find(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "getPendingSessionRequests", () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }), E3(this, "authenticate", async (t, s) => {
      try {
        return await this.engine.authenticate(t, s);
      } catch (i3) {
        throw this.logger.error(i3.message), i3;
      }
    }), E3(this, "formatAuthMessage", (t) => {
      try {
        return this.engine.formatAuthMessage(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "approveSessionAuthenticate", async (t) => {
      try {
        return await this.engine.approveSessionAuthenticate(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), E3(this, "rejectSessionAuthenticate", async (t) => {
      try {
        return await this.engine.rejectSessionAuthenticate(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), this.name = (n2 == null ? void 0 : n2.name) || me2.name, this.metadata = oi(n2 == null ? void 0 : n2.metadata), this.signConfig = n2 == null ? void 0 : n2.signConfig;
    const e = typeof (n2 == null ? void 0 : n2.logger) < "u" && typeof (n2 == null ? void 0 : n2.logger) != "string" ? n2.logger : (0, import_pino.default)(k({ level: (n2 == null ? void 0 : n2.logger) || me2.logger }));
    this.core = (n2 == null ? void 0 : n2.core) || new Jo2(n2), this.logger = E(e, this.name), this.session = new St3(this.core, this.logger), this.proposal = new Ns2(this.core, this.logger), this.pendingRequest = new Os2(this.core, this.logger), this.engine = new Ps2(this), this.auth = new Ds2(this.core, this.logger);
  }
  static async init(n2) {
    const e = new _Ee(n2);
    return await e.initialize(), e;
  }
  get context() {
    return y(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), setTimeout(() => {
        this.engine.processRelayMessageCache();
      }, (0, import_time3.toMiliseconds)(import_time3.ONE_SECOND));
    } catch (n2) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(n2.message), n2;
    }
  }
};

// node_modules/@walletconnect/universal-provider/dist/index.es.js
var import_events5 = __toESM(require_events());
var tt3 = "error";
var St4 = "wss://relay.walletconnect.org";
var Dt2 = "wc";
var qt3 = "universal_provider";
var _ = `${Dt2}@2:${qt3}:`;
var et2 = "https://rpc.walletconnect.org/v1/";
var w2 = "generic";
var jt3 = `${et2}bundler`;
var d2 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
function Rt3() {
}
function G3(s) {
  return s == null || typeof s != "object" && typeof s != "function";
}
function J3(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function _t3(s) {
  if (G3(s)) return s;
  if (Array.isArray(s) || J3(s) || s instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && s instanceof SharedArrayBuffer) return s.slice(0);
  const t = Object.getPrototypeOf(s), e = t.constructor;
  if (s instanceof Date || s instanceof Map || s instanceof Set) return new e(s);
  if (s instanceof RegExp) {
    const i3 = new e(s);
    return i3.lastIndex = s.lastIndex, i3;
  }
  if (s instanceof DataView) return new e(s.buffer.slice(0));
  if (s instanceof Error) {
    const i3 = new e(s.message);
    return i3.stack = s.stack, i3.name = s.name, i3.cause = s.cause, i3;
  }
  if (typeof File < "u" && s instanceof File) return new e([s], s.name, { type: s.type, lastModified: s.lastModified });
  if (typeof s == "object") {
    const i3 = Object.create(t);
    return Object.assign(i3, s);
  }
  return s;
}
function st2(s) {
  return typeof s == "object" && s !== null;
}
function it2(s) {
  return Object.getOwnPropertySymbols(s).filter((t) => Object.prototype.propertyIsEnumerable.call(s, t));
}
function rt(s) {
  return s == null ? s === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(s);
}
var Ut2 = "[object RegExp]";
var nt2 = "[object String]";
var at2 = "[object Number]";
var ct2 = "[object Boolean]";
var ot2 = "[object Arguments]";
var Ft2 = "[object Symbol]";
var Lt3 = "[object Date]";
var xt3 = "[object Map]";
var Mt3 = "[object Set]";
var Bt3 = "[object Array]";
var Gt3 = "[object ArrayBuffer]";
var Jt3 = "[object Object]";
var zt2 = "[object DataView]";
var kt4 = "[object Uint8Array]";
var Wt3 = "[object Uint8ClampedArray]";
var Kt3 = "[object Uint16Array]";
var Vt3 = "[object Uint32Array]";
var Xt3 = "[object Int8Array]";
var Yt3 = "[object Int16Array]";
var Qt3 = "[object Int32Array]";
var Zt2 = "[object Float32Array]";
var Tt3 = "[object Float64Array]";
function te3(s, t) {
  return y4(s, void 0, s, /* @__PURE__ */ new Map(), t);
}
function y4(s, t, e, i3 = /* @__PURE__ */ new Map(), n2 = void 0) {
  const a2 = n2 == null ? void 0 : n2(s, t, e, i3);
  if (a2 != null) return a2;
  if (G3(s)) return s;
  if (i3.has(s)) return i3.get(s);
  if (Array.isArray(s)) {
    const r2 = new Array(s.length);
    i3.set(s, r2);
    for (let c3 = 0; c3 < s.length; c3++) r2[c3] = y4(s[c3], c3, e, i3, n2);
    return Object.hasOwn(s, "index") && (r2.index = s.index), Object.hasOwn(s, "input") && (r2.input = s.input), r2;
  }
  if (s instanceof Date) return new Date(s.getTime());
  if (s instanceof RegExp) {
    const r2 = new RegExp(s.source, s.flags);
    return r2.lastIndex = s.lastIndex, r2;
  }
  if (s instanceof Map) {
    const r2 = /* @__PURE__ */ new Map();
    i3.set(s, r2);
    for (const [c3, o3] of s) r2.set(c3, y4(o3, c3, e, i3, n2));
    return r2;
  }
  if (s instanceof Set) {
    const r2 = /* @__PURE__ */ new Set();
    i3.set(s, r2);
    for (const c3 of s) r2.add(y4(c3, void 0, e, i3, n2));
    return r2;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(s)) return s.subarray();
  if (J3(s)) {
    const r2 = new (Object.getPrototypeOf(s)).constructor(s.length);
    i3.set(s, r2);
    for (let c3 = 0; c3 < s.length; c3++) r2[c3] = y4(s[c3], c3, e, i3, n2);
    return r2;
  }
  if (s instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && s instanceof SharedArrayBuffer) return s.slice(0);
  if (s instanceof DataView) {
    const r2 = new DataView(s.buffer.slice(0), s.byteOffset, s.byteLength);
    return i3.set(s, r2), g(r2, s, e, i3, n2), r2;
  }
  if (typeof File < "u" && s instanceof File) {
    const r2 = new File([s], s.name, { type: s.type });
    return i3.set(s, r2), g(r2, s, e, i3, n2), r2;
  }
  if (s instanceof Blob) {
    const r2 = new Blob([s], { type: s.type });
    return i3.set(s, r2), g(r2, s, e, i3, n2), r2;
  }
  if (s instanceof Error) {
    const r2 = new s.constructor();
    return i3.set(s, r2), r2.message = s.message, r2.name = s.name, r2.stack = s.stack, r2.cause = s.cause, g(r2, s, e, i3, n2), r2;
  }
  if (typeof s == "object" && ee3(s)) {
    const r2 = Object.create(Object.getPrototypeOf(s));
    return i3.set(s, r2), g(r2, s, e, i3, n2), r2;
  }
  return s;
}
function g(s, t, e = s, i3, n2) {
  const a2 = [...Object.keys(t), ...it2(t)];
  for (let r2 = 0; r2 < a2.length; r2++) {
    const c3 = a2[r2], o3 = Object.getOwnPropertyDescriptor(s, c3);
    (o3 == null || o3.writable) && (s[c3] = y4(t[c3], c3, e, i3, n2));
  }
}
function ee3(s) {
  switch (rt(s)) {
    case ot2:
    case Bt3:
    case Gt3:
    case zt2:
    case ct2:
    case Lt3:
    case Zt2:
    case Tt3:
    case Xt3:
    case Yt3:
    case Qt3:
    case xt3:
    case at2:
    case Jt3:
    case Ut2:
    case Mt3:
    case nt2:
    case Ft2:
    case kt4:
    case Wt3:
    case Kt3:
    case Vt3:
      return true;
    default:
      return false;
  }
}
function se3(s, t) {
  return te3(s, (e, i3, n2, a2) => {
    const r2 = t == null ? void 0 : t(e, i3, n2, a2);
    if (r2 != null) return r2;
    if (typeof s == "object") switch (Object.prototype.toString.call(s)) {
      case at2:
      case nt2:
      case ct2: {
        const c3 = new s.constructor(s == null ? void 0 : s.valueOf());
        return g(c3, s), c3;
      }
      case ot2: {
        const c3 = {};
        return g(c3, s), c3.length = s.length, c3[Symbol.iterator] = s[Symbol.iterator], c3;
      }
      default:
        return;
    }
  });
}
function ht3(s) {
  return se3(s);
}
function pt3(s) {
  return s !== null && typeof s == "object" && rt(s) === "[object Arguments]";
}
function ie3(s) {
  return J3(s);
}
function re3(s) {
  var _a;
  if (typeof s != "object" || s == null) return false;
  if (Object.getPrototypeOf(s) === null) return true;
  if (Object.prototype.toString.call(s) !== "[object Object]") {
    const e = s[Symbol.toStringTag];
    return e == null || !((_a = Object.getOwnPropertyDescriptor(s, Symbol.toStringTag)) == null ? void 0 : _a.writable) ? false : s.toString() === `[object ${e}]`;
  }
  let t = s;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(s) === t;
}
function ne2(s, ...t) {
  const e = t.slice(0, -1), i3 = t[t.length - 1];
  let n2 = s;
  for (let a2 = 0; a2 < e.length; a2++) {
    const r2 = e[a2];
    n2 = U2(n2, r2, i3, /* @__PURE__ */ new Map());
  }
  return n2;
}
function U2(s, t, e, i3) {
  if (G3(s) && (s = Object(s)), t == null || typeof t != "object") return s;
  if (i3.has(t)) return _t3(i3.get(t));
  if (i3.set(t, s), Array.isArray(t)) {
    t = t.slice();
    for (let a2 = 0; a2 < t.length; a2++) t[a2] = t[a2] ?? void 0;
  }
  const n2 = [...Object.keys(t), ...it2(t)];
  for (let a2 = 0; a2 < n2.length; a2++) {
    const r2 = n2[a2];
    let c3 = t[r2], o3 = s[r2];
    if (pt3(c3) && (c3 = { ...c3 }), pt3(o3) && (o3 = { ...o3 }), typeof Buffer < "u" && Buffer.isBuffer(c3) && (c3 = ht3(c3)), Array.isArray(c3)) if (typeof o3 == "object" && o3 != null) {
      const j2 = [], R3 = Reflect.ownKeys(o3);
      for (let f5 = 0; f5 < R3.length; f5++) {
        const Y3 = R3[f5];
        j2[Y3] = o3[Y3];
      }
      o3 = j2;
    } else o3 = [];
    const v5 = e(o3, c3, r2, s, t, i3);
    v5 != null ? s[r2] = v5 : Array.isArray(c3) || st2(o3) && st2(c3) ? s[r2] = U2(o3, c3, e, i3) : o3 == null && re3(c3) ? s[r2] = U2({}, c3, e, i3) : o3 == null && ie3(c3) ? s[r2] = ht3(c3) : (o3 === void 0 || c3 !== void 0) && (s[r2] = c3);
  }
  return s;
}
function ae2(s, ...t) {
  return ne2(s, ...t, Rt3);
}
var ce3 = Object.defineProperty;
var oe2 = Object.defineProperties;
var he3 = Object.getOwnPropertyDescriptors;
var dt3 = Object.getOwnPropertySymbols;
var pe3 = Object.prototype.hasOwnProperty;
var de3 = Object.prototype.propertyIsEnumerable;
var ut3 = (s, t, e) => t in s ? ce3(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var F3 = (s, t) => {
  for (var e in t || (t = {})) pe3.call(t, e) && ut3(s, e, t[e]);
  if (dt3) for (var e of dt3(t)) de3.call(t, e) && ut3(s, e, t[e]);
  return s;
};
var ue3 = (s, t) => oe2(s, he3(t));
function p3(s, t, e) {
  var i3;
  const n2 = Ie(s);
  return ((i3 = t.rpcMap) == null ? void 0 : i3[n2.reference]) || `${et2}?chainId=${n2.namespace}:${n2.reference}&projectId=${e}`;
}
function P3(s) {
  return s.includes(":") ? s.split(":")[1] : s;
}
function lt2(s) {
  return s.map((t) => `${t.split(":")[0]}:${t.split(":")[1]}`);
}
function le3(s, t) {
  const e = Object.keys(t.namespaces).filter((n2) => n2.includes(s));
  if (!e.length) return [];
  const i3 = [];
  return e.forEach((n2) => {
    const a2 = t.namespaces[n2].accounts;
    i3.push(...a2);
  }), i3;
}
function z2(s = {}, t = {}) {
  const e = ft3(s), i3 = ft3(t);
  return ae2(e, i3);
}
function ft3(s) {
  var t, e, i3, n2;
  const a2 = {};
  if (!xe(s)) return a2;
  for (const [r2, c3] of Object.entries(s)) {
    const o3 = gn(r2) ? [r2] : c3.chains, v5 = c3.methods || [], j2 = c3.events || [], R3 = c3.rpcMap || {}, f5 = yo(r2);
    a2[f5] = ue3(F3(F3({}, a2[f5]), c3), { chains: at(o3, (t = a2[f5]) == null ? void 0 : t.chains), methods: at(v5, (e = a2[f5]) == null ? void 0 : e.methods), events: at(j2, (i3 = a2[f5]) == null ? void 0 : i3.events), rpcMap: F3(F3({}, R3), (n2 = a2[f5]) == null ? void 0 : n2.rpcMap) });
  }
  return a2;
}
function mt3(s) {
  return s.includes(":") ? s.split(":")[2] : s;
}
function vt(s) {
  const t = {};
  for (const [e, i3] of Object.entries(s)) {
    const n2 = i3.methods || [], a2 = i3.events || [], r2 = i3.accounts || [], c3 = gn(e) ? [e] : i3.chains ? i3.chains : lt2(i3.accounts);
    t[e] = { chains: c3, methods: n2, events: a2, accounts: r2 };
  }
  return t;
}
function k4(s) {
  return typeof s == "number" ? s : s.includes("0x") ? parseInt(s, 16) : (s = s.includes(":") ? s.split(":")[1] : s, isNaN(Number(s)) ? s : Number(s));
}
var gt3 = {};
var h3 = (s) => gt3[s];
var W2 = (s, t) => {
  gt3[s] = t;
};
var fe3 = Object.defineProperty;
var me3 = (s, t, e) => t in s ? fe3(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var b3 = (s, t, e) => me3(s, typeof t != "symbol" ? t + "" : t, e);
var ve2 = class {
  constructor(t) {
    b3(this, "name", "polkadot"), b3(this, "client"), b3(this, "httpProviders"), b3(this, "events"), b3(this, "namespace"), b3(this, "chainId"), this.namespace = t.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i3;
      const n2 = P3(e);
      t[n2] = this.createHttpProvider(n2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i3 = this.createHttpProvider(t, e);
    i3 && (this.httpProviders[t] = i3);
  }
  createHttpProvider(t, e) {
    const i3 = e || p3(t, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f2(i3, h3("disableProviderPing")));
  }
};
var ge3 = Object.defineProperty;
var Pe3 = Object.defineProperties;
var we3 = Object.getOwnPropertyDescriptors;
var Pt3 = Object.getOwnPropertySymbols;
var ye3 = Object.prototype.hasOwnProperty;
var be3 = Object.prototype.propertyIsEnumerable;
var K3 = (s, t, e) => t in s ? ge3(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var wt3 = (s, t) => {
  for (var e in t || (t = {})) ye3.call(t, e) && K3(s, e, t[e]);
  if (Pt3) for (var e of Pt3(t)) be3.call(t, e) && K3(s, e, t[e]);
  return s;
};
var yt3 = (s, t) => Pe3(s, we3(t));
var I2 = (s, t, e) => K3(s, typeof t != "symbol" ? t + "" : t, e);
var Ie3 = class {
  constructor(t) {
    I2(this, "name", "eip155"), I2(this, "client"), I2(this, "chainId"), I2(this, "namespace"), I2(this, "httpProviders"), I2(this, "events"), this.namespace = t.namespace, this.events = h3("events"), this.client = h3("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(t) {
    switch (t.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(t);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(t);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(t);
    }
    return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(parseInt(t), e), this.chainId = parseInt(t), this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  createHttpProvider(t, e) {
    const i3 = e || p3(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f2(i3, h3("disableProviderPing")));
  }
  setHttpProvider(t, e) {
    const i3 = this.createHttpProvider(t, e);
    i3 && (this.httpProviders[t] = i3);
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i3;
      const n2 = parseInt(P3(e));
      t[n2] = this.createHttpProvider(n2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[e]);
    }), t;
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const t = this.chainId, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  async handleSwitchChain(t) {
    var e, i3;
    let n2 = t.request.params ? (e = t.request.params[0]) == null ? void 0 : e.chainId : "0x0";
    n2 = n2.startsWith("0x") ? n2 : `0x${n2}`;
    const a2 = parseInt(n2, 16);
    if (this.isChainApproved(a2)) this.setDefaultChain(`${a2}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: t.topic, request: { method: t.request.method, params: [{ chainId: n2 }] }, chainId: (i3 = this.namespace.chains) == null ? void 0 : i3[0] }), this.setDefaultChain(`${a2}`);
    else throw new Error(`Failed to switch to chain 'eip155:${a2}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(t) {
    return this.namespace.chains.includes(`${this.name}:${t}`);
  }
  async getCapabilities(t) {
    var e, i3, n2;
    const a2 = (i3 = (e = t.request) == null ? void 0 : e.params) == null ? void 0 : i3[0];
    if (!a2) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const r2 = this.client.session.get(t.topic), c3 = ((n2 = r2 == null ? void 0 : r2.sessionProperties) == null ? void 0 : n2.capabilities) || {};
    if (c3 != null && c3[a2]) return c3 == null ? void 0 : c3[a2];
    const o3 = await this.client.request(t);
    try {
      await this.client.session.update(t.topic, { sessionProperties: yt3(wt3({}, r2.sessionProperties || {}), { capabilities: yt3(wt3({}, c3 || {}), { [a2]: o3 }) }) });
    } catch (v5) {
      console.warn("Failed to update session with capabilities", v5);
    }
    return o3;
  }
  async getCallStatus(t) {
    var e, i3;
    const n2 = this.client.session.get(t.topic), a2 = (e = n2.sessionProperties) == null ? void 0 : e.bundler_name;
    if (a2) {
      const c3 = this.getBundlerUrl(t.chainId, a2);
      try {
        return await this.getUserOperationReceipt(c3, t);
      } catch (o3) {
        console.warn("Failed to fetch call status from bundler", o3, c3);
      }
    }
    const r2 = (i3 = n2.sessionProperties) == null ? void 0 : i3.bundler_url;
    if (r2) try {
      return await this.getUserOperationReceipt(r2, t);
    } catch (c3) {
      console.warn("Failed to fetch call status from custom bundler", c3, r2);
    }
    if (this.namespace.methods.includes(t.request.method)) return await this.client.request(t);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(t, e) {
    var i3;
    const n2 = new URL(t), a2 = await fetch(n2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formatJsonRpcRequest("eth_getUserOperationReceipt", [(i3 = e.request.params) == null ? void 0 : i3[0]])) });
    if (!a2.ok) throw new Error(`Failed to fetch user operation receipt - ${a2.status}`);
    return await a2.json();
  }
  getBundlerUrl(t, e) {
    return `${jt3}?projectId=${this.client.core.projectId}&chainId=${t}&bundler=${e}`;
  }
};
var $e2 = Object.defineProperty;
var Oe2 = (s, t, e) => t in s ? $e2(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var $3 = (s, t, e) => Oe2(s, typeof t != "symbol" ? t + "" : t, e);
var Ae2 = class {
  constructor(t) {
    $3(this, "name", "solana"), $3(this, "client"), $3(this, "httpProviders"), $3(this, "events"), $3(this, "namespace"), $3(this, "chainId"), this.namespace = t.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i3;
      const n2 = P3(e);
      t[n2] = this.createHttpProvider(n2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i3 = this.createHttpProvider(t, e);
    i3 && (this.httpProviders[t] = i3);
  }
  createHttpProvider(t, e) {
    const i3 = e || p3(t, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f2(i3, h3("disableProviderPing")));
  }
};
var Ce3 = Object.defineProperty;
var He3 = (s, t, e) => t in s ? Ce3(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var O3 = (s, t, e) => He3(s, typeof t != "symbol" ? t + "" : t, e);
var Ee4 = class {
  constructor(t) {
    O3(this, "name", "cosmos"), O3(this, "client"), O3(this, "httpProviders"), O3(this, "events"), O3(this, "namespace"), O3(this, "chainId"), this.namespace = t.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i3;
      const n2 = P3(e);
      t[n2] = this.createHttpProvider(n2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i3 = this.createHttpProvider(t, e);
    i3 && (this.httpProviders[t] = i3);
  }
  createHttpProvider(t, e) {
    const i3 = e || p3(t, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f2(i3, h3("disableProviderPing")));
  }
};
var Ne = Object.defineProperty;
var Se3 = (s, t, e) => t in s ? Ne(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var A3 = (s, t, e) => Se3(s, typeof t != "symbol" ? t + "" : t, e);
var De3 = class {
  constructor(t) {
    A3(this, "name", "algorand"), A3(this, "client"), A3(this, "httpProviders"), A3(this, "events"), A3(this, "namespace"), A3(this, "chainId"), this.namespace = t.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    if (!this.httpProviders[t]) {
      const i3 = e || p3(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
      if (!i3) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, i3);
    }
    this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i3;
      t[e] = this.createHttpProvider(e, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i3 = this.createHttpProvider(t, e);
    i3 && (this.httpProviders[t] = i3);
  }
  createHttpProvider(t, e) {
    const i3 = e || p3(t, this.namespace, this.client.core.projectId);
    return typeof i3 > "u" ? void 0 : new o(new f2(i3, h3("disableProviderPing")));
  }
};
var qe3 = Object.defineProperty;
var je3 = (s, t, e) => t in s ? qe3(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var C4 = (s, t, e) => je3(s, typeof t != "symbol" ? t + "" : t, e);
var Re2 = class {
  constructor(t) {
    C4(this, "name", "cip34"), C4(this, "client"), C4(this, "httpProviders"), C4(this, "events"), C4(this, "namespace"), C4(this, "chainId"), this.namespace = t.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      const i3 = this.getCardanoRPCUrl(e), n2 = P3(e);
      t[n2] = this.createHttpProvider(n2, i3);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  getCardanoRPCUrl(t) {
    const e = this.namespace.rpcMap;
    if (e) return e[t];
  }
  setHttpProvider(t, e) {
    const i3 = this.createHttpProvider(t, e);
    i3 && (this.httpProviders[t] = i3);
  }
  createHttpProvider(t, e) {
    const i3 = e || this.getCardanoRPCUrl(t);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f2(i3, h3("disableProviderPing")));
  }
};
var _e4 = Object.defineProperty;
var Ue3 = (s, t, e) => t in s ? _e4(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var H2 = (s, t, e) => Ue3(s, typeof t != "symbol" ? t + "" : t, e);
var Fe3 = class {
  constructor(t) {
    H2(this, "name", "elrond"), H2(this, "client"), H2(this, "httpProviders"), H2(this, "events"), H2(this, "namespace"), H2(this, "chainId"), this.namespace = t.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i3;
      const n2 = P3(e);
      t[n2] = this.createHttpProvider(n2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i3 = this.createHttpProvider(t, e);
    i3 && (this.httpProviders[t] = i3);
  }
  createHttpProvider(t, e) {
    const i3 = e || p3(t, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f2(i3, h3("disableProviderPing")));
  }
};
var Le4 = Object.defineProperty;
var xe2 = (s, t, e) => t in s ? Le4(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var E4 = (s, t, e) => xe2(s, typeof t != "symbol" ? t + "" : t, e);
var Me4 = class {
  constructor(t) {
    E4(this, "name", "multiversx"), E4(this, "client"), E4(this, "httpProviders"), E4(this, "events"), E4(this, "namespace"), E4(this, "chainId"), this.namespace = t.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i3;
      const n2 = P3(e);
      t[n2] = this.createHttpProvider(n2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i3 = this.createHttpProvider(t, e);
    i3 && (this.httpProviders[t] = i3);
  }
  createHttpProvider(t, e) {
    const i3 = e || p3(t, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f2(i3, h3("disableProviderPing")));
  }
};
var Be4 = Object.defineProperty;
var Ge4 = (s, t, e) => t in s ? Be4(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var N2 = (s, t, e) => Ge4(s, typeof t != "symbol" ? t + "" : t, e);
var Je3 = class {
  constructor(t) {
    N2(this, "name", "near"), N2(this, "client"), N2(this, "httpProviders"), N2(this, "events"), N2(this, "namespace"), N2(this, "chainId"), this.namespace = t.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const i3 = e || p3(`${this.name}:${t}`, this.namespace);
      if (!i3) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, i3);
    }
    this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i3;
      t[e] = this.createHttpProvider(e, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i3 = this.createHttpProvider(t, e);
    i3 && (this.httpProviders[t] = i3);
  }
  createHttpProvider(t, e) {
    const i3 = e || p3(t, this.namespace);
    return typeof i3 > "u" ? void 0 : new o(new f2(i3, h3("disableProviderPing")));
  }
};
var ze3 = Object.defineProperty;
var ke4 = (s, t, e) => t in s ? ze3(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var S3 = (s, t, e) => ke4(s, typeof t != "symbol" ? t + "" : t, e);
var We4 = class {
  constructor(t) {
    S3(this, "name", "tezos"), S3(this, "client"), S3(this, "httpProviders"), S3(this, "events"), S3(this, "namespace"), S3(this, "chainId"), this.namespace = t.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const i3 = e || p3(`${this.name}:${t}`, this.namespace);
      if (!i3) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, i3);
    }
    this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      t[e] = this.createHttpProvider(e);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i3 = this.createHttpProvider(t, e);
    i3 && (this.httpProviders[t] = i3);
  }
  createHttpProvider(t, e) {
    const i3 = e || p3(t, this.namespace);
    return typeof i3 > "u" ? void 0 : new o(new f2(i3));
  }
};
var Ke4 = Object.defineProperty;
var Ve3 = (s, t, e) => t in s ? Ke4(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var D = (s, t, e) => Ve3(s, typeof t != "symbol" ? t + "" : t, e);
var Xe3 = class {
  constructor(t) {
    D(this, "name", w2), D(this, "client"), D(this, "httpProviders"), D(this, "events"), D(this, "namespace"), D(this, "chainId"), this.namespace = t.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(t.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(t.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(t.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(t.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider(t.chainId).request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var t, e;
    const i3 = {};
    return (e = (t = this.namespace) == null ? void 0 : t.accounts) == null || e.forEach((n2) => {
      const a2 = Ie(n2);
      i3[`${a2.namespace}:${a2.reference}`] = this.createHttpProvider(n2);
    }), i3;
  }
  getHttpProvider(t) {
    const e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i3 = this.createHttpProvider(t, e);
    i3 && (this.httpProviders[t] = i3);
  }
  createHttpProvider(t, e) {
    const i3 = e || p3(t, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f2(i3, h3("disableProviderPing")));
  }
};
var Ye3 = Object.defineProperty;
var Qe4 = Object.defineProperties;
var Ze4 = Object.getOwnPropertyDescriptors;
var bt2 = Object.getOwnPropertySymbols;
var Te2 = Object.prototype.hasOwnProperty;
var ts2 = Object.prototype.propertyIsEnumerable;
var V4 = (s, t, e) => t in s ? Ye3(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var L2 = (s, t) => {
  for (var e in t || (t = {})) Te2.call(t, e) && V4(s, e, t[e]);
  if (bt2) for (var e of bt2(t)) ts2.call(t, e) && V4(s, e, t[e]);
  return s;
};
var X2 = (s, t) => Qe4(s, Ze4(t));
var u2 = (s, t, e) => V4(s, typeof t != "symbol" ? t + "" : t, e);
var x = class _x {
  constructor(t) {
    u2(this, "client"), u2(this, "namespaces"), u2(this, "optionalNamespaces"), u2(this, "sessionProperties"), u2(this, "scopedProperties"), u2(this, "events", new import_events5.default()), u2(this, "rpcProviders", {}), u2(this, "session"), u2(this, "providerOpts"), u2(this, "logger"), u2(this, "uri"), u2(this, "disableProviderPing", false), this.providerOpts = t, this.logger = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : (0, import_pino.default)(k({ level: (t == null ? void 0 : t.logger) || tt3 })), this.disableProviderPing = (t == null ? void 0 : t.disableProviderPing) || false;
  }
  static async init(t) {
    const e = new _x(t);
    return await e.initialize(), e;
  }
  async request(t, e, i3) {
    const [n2, a2] = this.validateChain(e);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(n2).request({ request: L2({}, t), chainId: `${n2}:${a2}`, topic: this.session.topic, expiry: i3 });
  }
  sendAsync(t, e, i3, n2) {
    const a2 = (/* @__PURE__ */ new Date()).getTime();
    this.request(t, i3, n2).then((r2) => e(null, formatJsonRpcResult(a2, r2))).catch((r2) => e(r2, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var t;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (t = this.session) == null ? void 0 : t.topic, reason: Nt("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(t) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic);
  }
  async authenticate(t, e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(t), await this.cleanupPendingPairings();
    const { uri: i3, response: n2 } = await this.client.authenticate(t, e);
    i3 && (this.uri = i3, this.events.emit("display_uri", i3));
    const a2 = await n2();
    if (this.session = a2.session, this.session) {
      const r2 = vt(this.session.namespaces);
      this.namespaces = z2(this.namespaces, r2), await this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return a2;
  }
  on(t, e) {
    this.events.on(t, e);
  }
  once(t, e) {
    this.events.once(t, e);
  }
  removeListener(t, e) {
    this.events.removeListener(t, e);
  }
  off(t, e) {
    this.events.off(t, e);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(t) {
    const { uri: e, approval: i3 } = await this.client.connect({ pairingTopic: t, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties });
    e && (this.uri = e, this.events.emit("display_uri", e));
    const n2 = await i3();
    this.session = n2;
    const a2 = vt(n2.namespaces);
    return this.namespaces = z2(this.namespaces, a2), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
  }
  setDefaultChain(t, e) {
    try {
      if (!this.session) return;
      const [i3, n2] = this.validateChain(t), a2 = this.getProvider(i3);
      a2.name === w2 ? a2.setDefaultChain(`${i3}:${n2}`, e) : a2.setDefaultChain(n2, e);
    } catch (i3) {
      if (!/Please call connect/.test(i3.message)) throw i3;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const e = this.client.pairing.getAll();
    if (oe(e)) {
      for (const i3 of e) t.deletePairings ? this.client.core.expirer.set(i3.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i3.topic);
      this.logger.info(`Inactive pairings cleared: ${e.length}`);
    }
  }
  abortPairingAttempt() {
    this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
  }
  async checkStorage() {
    this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    var t, e;
    if (this.client = this.providerOpts.client || await Ee3.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || tt3, relayUrl: this.providerOpts.relayUrl || St4, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.providerOpts.session) try {
      this.session = this.client.session.get(this.providerOpts.session.topic);
    } catch (i3) {
      throw this.logger.error("Failed to get session", i3), new Error(`The provided session: ${(e = (t = this.providerOpts) == null ? void 0 : t.session) == null ? void 0 : e.topic} doesn't exist in the Sign client`);
    }
    else {
      const i3 = this.client.session.getAll();
      this.session = i3[0];
    }
    this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const t = [...new Set(Object.keys(this.session.namespaces).map((e) => yo(e)))];
    W2("client", this.client), W2("events", this.events), W2("disableProviderPing", this.disableProviderPing), t.forEach((e) => {
      if (!this.session) return;
      const i3 = le3(e, this.session), n2 = lt2(i3), a2 = z2(this.namespaces, this.optionalNamespaces), r2 = X2(L2({}, a2[e]), { accounts: i3, chains: n2 });
      switch (e) {
        case "eip155":
          this.rpcProviders[e] = new Ie3({ namespace: r2 });
          break;
        case "algorand":
          this.rpcProviders[e] = new De3({ namespace: r2 });
          break;
        case "solana":
          this.rpcProviders[e] = new Ae2({ namespace: r2 });
          break;
        case "cosmos":
          this.rpcProviders[e] = new Ee4({ namespace: r2 });
          break;
        case "polkadot":
          this.rpcProviders[e] = new ve2({ namespace: r2 });
          break;
        case "cip34":
          this.rpcProviders[e] = new Re2({ namespace: r2 });
          break;
        case "elrond":
          this.rpcProviders[e] = new Fe3({ namespace: r2 });
          break;
        case "multiversx":
          this.rpcProviders[e] = new Me4({ namespace: r2 });
          break;
        case "near":
          this.rpcProviders[e] = new Je3({ namespace: r2 });
          break;
        case "tezos":
          this.rpcProviders[e] = new We4({ namespace: r2 });
          break;
        default:
          this.rpcProviders[w2] ? this.rpcProviders[w2].updateNamespace(r2) : this.rpcProviders[w2] = new Xe3({ namespace: r2 });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (t) => {
      var e;
      const { topic: i3 } = t;
      i3 === ((e = this.session) == null ? void 0 : e.topic) && this.events.emit("session_ping", t);
    }), this.client.on("session_event", (t) => {
      var e;
      const { params: i3, topic: n2 } = t;
      if (n2 !== ((e = this.session) == null ? void 0 : e.topic)) return;
      const { event: a2 } = i3;
      if (a2.name === "accountsChanged") {
        const r2 = a2.data;
        r2 && oe(r2) && this.events.emit("accountsChanged", r2.map(mt3));
      } else if (a2.name === "chainChanged") {
        const r2 = i3.chainId, c3 = i3.event.data, o3 = yo(r2), v5 = k4(r2) !== k4(c3) ? `${o3}:${k4(c3)}` : r2;
        this.onChainChanged(v5);
      } else this.events.emit(a2.name, a2.data);
      this.events.emit("session_event", t);
    }), this.client.on("session_update", ({ topic: t, params: e }) => {
      var i3, n2;
      if (t !== ((i3 = this.session) == null ? void 0 : i3.topic)) return;
      const { namespaces: a2 } = e, r2 = (n2 = this.client) == null ? void 0 : n2.session.get(t);
      this.session = X2(L2({}, r2), { namespaces: a2 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: t, params: e });
    }), this.client.on("session_delete", async (t) => {
      var e;
      t.topic === ((e = this.session) == null ? void 0 : e.topic) && (await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", X2(L2({}, Nt("USER_DISCONNECTED")), { data: t.topic })));
    }), this.on(d2.DEFAULT_CHAIN_CHANGED, (t) => {
      this.onChainChanged(t, true);
    });
  }
  getProvider(t) {
    return this.rpcProviders[t] || this.rpcProviders[w2];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var e;
      this.getProvider(t).updateNamespace((e = this.session) == null ? void 0 : e.namespaces[t]);
    });
  }
  setNamespaces(t) {
    const { namespaces: e, optionalNamespaces: i3, sessionProperties: n2, scopedProperties: a2 } = t;
    e && Object.keys(e).length && (this.namespaces = e), i3 && Object.keys(i3).length && (this.optionalNamespaces = i3), this.sessionProperties = n2, this.scopedProperties = a2;
  }
  validateChain(t) {
    const [e, i3] = (t == null ? void 0 : t.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [e, i3];
    if (e && !Object.keys(this.namespaces || {}).map((r2) => yo(r2)).includes(e)) throw new Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);
    if (e && i3) return [e, i3];
    const n2 = yo(Object.keys(this.namespaces)[0]), a2 = this.rpcProviders[n2].getDefaultChain();
    return [n2, a2];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  async onChainChanged(t, e = false) {
    if (!this.namespaces) return;
    const [i3, n2] = this.validateChain(t);
    if (!n2) return;
    this.updateNamespaceChain(i3, n2), this.events.emit("chainChanged", n2);
    const a2 = this.getProvider(i3).getDefaultChain();
    e || this.getProvider(i3).setDefaultChain(n2), this.emitAccountsChangedOnChainChange({ namespace: i3, previousChainId: a2, newChainId: t }), await this.persist("namespaces", this.namespaces);
  }
  emitAccountsChangedOnChainChange({ namespace: t, previousChainId: e, newChainId: i3 }) {
    var n2, a2;
    try {
      if (e === i3) return;
      const r2 = (a2 = (n2 = this.session) == null ? void 0 : n2.namespaces[t]) == null ? void 0 : a2.accounts;
      if (!r2) return;
      const c3 = r2.filter((o3) => o3.includes(`${i3}:`)).map(mt3);
      if (!oe(c3)) return;
      this.events.emit("accountsChanged", c3);
    } catch (r2) {
      this.logger.warn("Failed to emit accountsChanged on chain change", r2);
    }
  }
  updateNamespaceChain(t, e) {
    if (!this.namespaces) return;
    const i3 = this.namespaces[t] ? t : `${t}:${e}`, n2 = { chains: [], methods: [], events: [], defaultChain: e };
    this.namespaces[i3] ? this.namespaces[i3] && (this.namespaces[i3].defaultChain = e) : this.namespaces[i3] = n2;
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, await this.cleanupPendingPairings({ deletePairings: true }), await this.cleanupStorage();
  }
  async persist(t, e) {
    var i3;
    const n2 = ((i3 = this.session) == null ? void 0 : i3.topic) || "";
    await this.client.core.storage.setItem(`${_}/${t}${n2}`, e);
  }
  async getFromStore(t) {
    var e;
    const i3 = ((e = this.session) == null ? void 0 : e.topic) || "";
    return await this.client.core.storage.getItem(`${_}/${t}${i3}`);
  }
  async deleteFromStore(t) {
    var e;
    const i3 = ((e = this.session) == null ? void 0 : e.topic) || "";
    await this.client.core.storage.removeItem(`${_}/${t}${i3}`);
  }
  async cleanupStorage() {
    var t;
    try {
      if (((t = this.client) == null ? void 0 : t.session.length) > 0) return;
      const e = await this.client.core.storage.getKeys();
      for (const i3 of e) i3.startsWith(_) && await this.client.core.storage.removeItem(i3);
    } catch (e) {
      this.logger.warn("Failed to cleanup storage", e);
    }
  }
};
var es2 = x;

// node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var T2 = "wc";
var $4 = "ethereum_provider";
var j = `${T2}@2:${$4}:`;
var q2 = "https://rpc.walletconnect.org/v1/";
var u3 = ["eth_sendTransaction", "personal_sign"];
var M3 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"];
var m2 = ["chainChanged", "accountsChanged"];
var O4 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var N3 = Object.defineProperty;
var D2 = Object.defineProperties;
var U3 = Object.getOwnPropertyDescriptors;
var P4 = Object.getOwnPropertySymbols;
var Q2 = Object.prototype.hasOwnProperty;
var L3 = Object.prototype.propertyIsEnumerable;
var y5 = (a2, t, s) => t in a2 ? N3(a2, t, { enumerable: true, configurable: true, writable: true, value: s }) : a2[t] = s;
var g2 = (a2, t) => {
  for (var s in t || (t = {})) Q2.call(t, s) && y5(a2, s, t[s]);
  if (P4) for (var s of P4(t)) L3.call(t, s) && y5(a2, s, t[s]);
  return a2;
};
var _2 = (a2, t) => D2(a2, U3(t));
var o2 = (a2, t, s) => y5(a2, typeof t != "symbol" ? t + "" : t, s);
function v4(a2) {
  return Number(a2[0].split(":")[1]);
}
function C5(a2) {
  return `0x${a2.toString(16)}`;
}
function x2(a2) {
  const { chains: t, optionalChains: s, methods: i3, optionalMethods: e, events: n2, optionalEvents: h4, rpcMap: l2 } = a2;
  if (!oe(t)) throw new Error("Invalid chains");
  const r2 = { chains: t, methods: i3 || u3, events: n2 || m2, rpcMap: g2({}, t.length ? { [v4(t)]: l2[v4(t)] } : {}) }, d3 = n2 == null ? void 0 : n2.filter((p4) => !m2.includes(p4)), c3 = i3 == null ? void 0 : i3.filter((p4) => !u3.includes(p4));
  if (!s && !h4 && !e && !(d3 != null && d3.length) && !(c3 != null && c3.length)) return { required: t.length ? r2 : void 0 };
  const I3 = (d3 == null ? void 0 : d3.length) && (c3 == null ? void 0 : c3.length) || !s, f5 = { chains: [...new Set(I3 ? r2.chains.concat(s || []) : s)], methods: [...new Set(r2.methods.concat(e != null && e.length ? e : M3))], events: [...new Set(r2.events.concat(h4 != null && h4.length ? h4 : O4))], rpcMap: l2 };
  return { required: t.length ? r2 : void 0, optional: s.length ? f5 : void 0 };
}
var w3 = class _w {
  constructor() {
    o2(this, "events", new import_events6.EventEmitter()), o2(this, "namespace", "eip155"), o2(this, "accounts", []), o2(this, "signer"), o2(this, "chainId", 1), o2(this, "modal"), o2(this, "rpc"), o2(this, "STORAGE_KEY", j), o2(this, "on", (t, s) => (this.events.on(t, s), this)), o2(this, "once", (t, s) => (this.events.once(t, s), this)), o2(this, "removeListener", (t, s) => (this.events.removeListener(t, s), this)), o2(this, "off", (t, s) => (this.events.off(t, s), this)), o2(this, "parseAccount", (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t), this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const s = new _w();
    return await s.initialize(t), s;
  }
  async request(t, s) {
    return await this.signer.request(t, this.formatChainId(this.chainId), s);
  }
  sendAsync(t, s, i3) {
    this.signer.sendAsync(t, s, this.formatChainId(this.chainId), i3);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : false;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : false;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: s, optional: i3 } = x2(this.rpc);
    try {
      const e = await new Promise(async (h4, l2) => {
        var r2;
        this.rpc.showQrModal && ((r2 = this.modal) == null || r2.subscribeModal((c3) => {
          !c3.open && !this.signer.session && (this.signer.abortPairingAttempt(), l2(new Error("Connection request reset. Please try again.")));
        }));
        const d3 = t != null && t.scopedProperties ? { [this.namespace]: t.scopedProperties } : void 0;
        await this.signer.connect(_2(g2({ namespaces: g2({}, s && { [this.namespace]: s }) }, i3 && { optionalNamespaces: { [this.namespace]: i3 } }), { pairingTopic: t == null ? void 0 : t.pairingTopic, scopedProperties: d3 })).then((c3) => {
          h4(c3);
        }).catch((c3) => {
          l2(new Error(c3.message));
        });
      });
      if (!e) return;
      const n2 = Ko(e.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n2), this.setAccounts(n2), this.events.emit("connect", { chainId: C5(this.chainId) });
    } catch (e) {
      throw this.signer.logger.error(e), e;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async authenticate(t, s) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: t == null ? void 0 : t.chains });
    try {
      const i3 = await new Promise(async (n2, h4) => {
        var l2;
        this.rpc.showQrModal && ((l2 = this.modal) == null || l2.subscribeModal((r2) => {
          !r2.open && !this.signer.session && (this.signer.abortPairingAttempt(), h4(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(_2(g2({}, t), { chains: this.rpc.chains }), s).then((r2) => {
          n2(r2);
        }).catch((r2) => {
          h4(new Error(r2.message));
        });
      }), e = i3.session;
      if (e) {
        const n2 = Ko(e.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n2), this.setAccounts(n2), this.events.emit("connect", { chainId: C5(this.chainId) });
      }
      return i3;
    } catch (i3) {
      throw this.signer.logger.error(i3), i3;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return true;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: s } = t, { event: i3 } = s;
      i3.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i3.data), this.events.emit("accountsChanged", this.accounts)) : i3.name === "chainChanged" ? this.setChainId(this.formatChainId(i3.data)) : this.events.emit(i3.name, i3.data), this.events.emit("session_event", t);
    }), this.signer.on("accountsChanged", (t) => {
      this.accounts = this.parseAccounts(t), this.events.emit("accountsChanged", this.accounts);
    }), this.signer.on("chainChanged", (t) => {
      const s = parseInt(t);
      this.chainId = s, this.events.emit("chainChanged", C5(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", _2(g2({}, Nt("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var s, i3;
      this.rpc.showQrModal && ((s = this.modal) == null || s.closeModal(), (i3 = this.modal) == null || i3.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : false;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const s = t.filter((i3) => this.isCompatibleChainId(i3)).map((i3) => this.parseChainId(i3));
    s.length && (this.chainId = s[0], this.events.emit("chainChanged", C5(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const s = this.parseChainId(t);
      this.chainId = s, this.switchEthereumChain(s);
    }
  }
  parseAccountId(t) {
    const [s, i3, e] = t.split(":");
    return { chainId: `${s}:${i3}`, address: e };
  }
  setAccounts(t) {
    this.accounts = t.filter((s) => this.parseChainId(this.parseAccountId(s).chainId) === this.chainId).map((s) => this.parseAccountId(s).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var s, i3;
    const e = (s = t == null ? void 0 : t.chains) != null ? s : [], n2 = (i3 = t == null ? void 0 : t.optionalChains) != null ? i3 : [], h4 = e.concat(n2);
    if (!h4.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const l2 = e.length ? (t == null ? void 0 : t.methods) || u3 : [], r2 = e.length ? (t == null ? void 0 : t.events) || m2 : [], d3 = (t == null ? void 0 : t.optionalMethods) || [], c3 = (t == null ? void 0 : t.optionalEvents) || [], I3 = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(h4, t.projectId), f5 = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: e == null ? void 0 : e.map((p4) => this.formatChainId(p4)), optionalChains: n2.map((p4) => this.formatChainId(p4)), methods: l2, events: r2, optionalMethods: d3, optionalEvents: c3, rpcMap: I3, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: f5, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, s) {
    const i3 = {};
    return t.forEach((e) => {
      i3[e] = this.getRpcUrl(e, s);
    }), i3;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? v4(this.rpc.chains) : v4(this.rpc.optionalChains), this.signer = await es2.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storage: t.storage, storageOptions: t.storageOptions, customStoragePrefix: t.customStoragePrefix, telemetryEnabled: t.telemetryEnabled, logger: t.logger }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let s;
      try {
        const { WalletConnectModal: i3 } = await import("./dist-DSM4SR3C.js");
        s = i3;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (s) try {
        this.modal = new s(g2({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
      } catch (i3) {
        throw this.signer.logger.error(i3), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(t) {
    if (!t) return;
    const { chains: s, optionalChains: i3, rpcMap: e } = t;
    s && oe(s) && (this.rpc.chains = s.map((n2) => this.formatChainId(n2)), s.forEach((n2) => {
      this.rpc.rpcMap[n2] = (e == null ? void 0 : e[n2]) || this.getRpcUrl(n2);
    })), i3 && oe(i3) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i3 == null ? void 0 : i3.map((n2) => this.formatChainId(n2)), i3.forEach((n2) => {
      this.rpc.rpcMap[n2] = (e == null ? void 0 : e[n2]) || this.getRpcUrl(n2);
    }));
  }
  getRpcUrl(t, s) {
    var i3;
    return ((i3 = this.rpc.rpcMap) == null ? void 0 : i3[t]) || `${q2}?chainId=eip155:${t}&projectId=${s || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session) try {
      const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), s = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
      this.setChainIds(t ? [this.formatChainId(t)] : s == null ? void 0 : s.accounts), this.setAccounts(s == null ? void 0 : s.accounts);
    } catch (t) {
      this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t), await this.disconnect().catch((s) => this.signer.logger.warn(s));
    }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((s) => this.parseAccount(s));
  }
};
var z3 = w3;
export {
  z3 as EthereumProvider,
  O4 as OPTIONAL_EVENTS,
  M3 as OPTIONAL_METHODS,
  m2 as REQUIRED_EVENTS,
  u3 as REQUIRED_METHODS,
  w3 as default
};
/*! Bundled license information:

@walletconnect/utils/dist/index.es.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=index.es-QSUKOFQF.js.map
