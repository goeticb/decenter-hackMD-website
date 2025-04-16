import "./chunk-64NT3AJW.js";

// node_modules/@defisaver/tokens/esm/utils.js
function bytesToString(hex) {
  return Buffer.from(hex.replace(/^0x/, ""), "hex").toString().replace(/\x00/g, "");
}
function stringToBytes(str) {
  let n = Buffer.from(str).toString("hex");
  while (n.length < 64)
    n = `${n}0`;
  return `0x${n}`;
}
function compare(a = "", b = "") {
  return a.toLowerCase() === b.toLowerCase();
}
export {
  bytesToString,
  compare,
  stringToBytes
};
//# sourceMappingURL=@defisaver_tokens_esm_utils.js.map
