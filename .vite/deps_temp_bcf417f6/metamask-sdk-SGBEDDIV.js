import {
  require_browser
} from "./chunk-CH7EHVPU.js";
import {
  __commonJS,
  __export,
  __glob,
  __toESM
} from "./chunk-64NT3AJW.js";

// node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    var __global__ = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
    var __globalThis__ = function() {
      function F2() {
        this.fetch = false;
        this.DOMException = __global__.DOMException;
      }
      F2.prototype = __global__;
      return new F2();
    }();
    (function(globalThis2) {
      var irrelevant = function(exports2) {
        var g2 = typeof globalThis2 !== "undefined" && globalThis2 || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
        typeof global !== "undefined" && global || {};
        var support = {
          searchParams: "URLSearchParams" in g2,
          iterable: "Symbol" in g2 && "iterator" in Symbol,
          blob: "FileReader" in g2 && "Blob" in g2 && function() {
            try {
              new Blob();
              return true;
            } catch (e7) {
              return false;
            }
          }(),
          formData: "FormData" in g2,
          arrayBuffer: "ArrayBuffer" in g2
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name) {
          if (typeof name !== "string") {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
            throw new TypeError('Invalid character in header field name: "' + name + '"');
          }
          return name.toLowerCase();
        }
        function normalizeValue(value2) {
          if (typeof value2 !== "string") {
            value2 = String(value2);
          }
          return value2;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value2 = items.shift();
              return { done: value2 === void 0, value: value2 };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers2(headers) {
          this.map = {};
          if (headers instanceof Headers2) {
            headers.forEach(function(value2, name) {
              this.append(name, value2);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              if (header.length != 2) {
                throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
              }
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
        Headers2.prototype.append = function(name, value2) {
          name = normalizeName(name);
          value2 = normalizeValue(value2);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ", " + value2 : value2;
        };
        Headers2.prototype["delete"] = function(name) {
          delete this.map[normalizeName(name)];
        };
        Headers2.prototype.get = function(name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };
        Headers2.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers2.prototype.set = function(name, value2) {
          this.map[normalizeName(name)] = normalizeValue(value2);
        };
        Headers2.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };
        Headers2.prototype.keys = function() {
          var items = [];
          this.forEach(function(value2, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };
        Headers2.prototype.values = function() {
          var items = [];
          this.forEach(function(value2) {
            items.push(value2);
          });
          return iteratorFor(items);
        };
        Headers2.prototype.entries = function() {
          var items = [];
          this.forEach(function(value2, name) {
            items.push([name, value2]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers2.prototype[Symbol.iterator] = Headers2.prototype.entries;
        }
        function consumed(body) {
          if (body._noBody) return;
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
          var encoding = match ? match[1] : "utf-8";
          reader.readAsText(blob, encoding);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars2 = new Array(view.length);
          for (var i = 0; i < view.length; i++) {
            chars2[i] = String.fromCharCode(view[i]);
          }
          return chars2.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this.bodyUsed = this.bodyUsed;
            this._bodyInit = body;
            if (!body) {
              this._noBody = true;
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
          }
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var isConsumed = consumed(this);
              if (isConsumed) {
                return isConsumed;
              } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                return Promise.resolve(
                  this._bodyArrayBuffer.buffer.slice(
                    this._bodyArrayBuffer.byteOffset,
                    this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                  )
                );
              } else {
                return Promise.resolve(this._bodyArrayBuffer);
              }
            } else if (support.blob) {
              return this.blob().then(readBlobAsArrayBuffer);
            } else {
              throw new Error("could not read as ArrayBuffer");
            }
          };
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode3);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request2(input, options) {
          if (!(this instanceof Request2)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          options = options || {};
          var body = options.body;
          if (input instanceof Request2) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers2(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers2(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal || function() {
            if ("AbortController" in g2) {
              var ctrl = new AbortController();
              return ctrl.signal;
            }
          }();
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
          if (this.method === "GET" || this.method === "HEAD") {
            if (options.cache === "no-store" || options.cache === "no-cache") {
              var reParamSearch = /([?&])_=[^&]*/;
              if (reParamSearch.test(this.url)) {
                this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
              } else {
                var reQueryString = /\?/;
                this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
              }
            }
          }
        }
        Request2.prototype.clone = function() {
          return new Request2(this, { body: this._bodyInit });
        };
        function decode3(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name = split.shift().replace(/\+/g, " ");
              var value2 = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name), decodeURIComponent(value2));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers2();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split("\r").map(function(header) {
            return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
          }).forEach(function(line) {
            var parts2 = line.split(":");
            var key = parts2.shift().trim();
            if (key) {
              var value2 = parts2.join(":").trim();
              try {
                headers.append(key, value2);
              } catch (error) {
                console.warn("Response " + error.message);
              }
            }
          });
          return headers;
        }
        Body.call(Request2.prototype);
        function Response(bodyInit, options) {
          if (!(this instanceof Response)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          if (this.status < 200 || this.status > 599) {
            throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
          }
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
          this.headers = new Headers2(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers2(this.headers),
            url: this.url
          });
        };
        Response.error = function() {
          var response = new Response(null, { status: 200, statusText: "" });
          response.ok = false;
          response.status = 0;
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response.redirect = function(url2, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response(null, { status, headers: { location: url2 } });
        };
        exports2.DOMException = g2.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init) {
          return new Promise(function(resolve, reject) {
            var request = new Request2(input, init);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
                options.status = 200;
              } else {
                options.status = xhr.status;
              }
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              setTimeout(function() {
                resolve(new Response(body, options));
              }, 0);
            };
            xhr.onerror = function() {
              setTimeout(function() {
                reject(new TypeError("Network request failed"));
              }, 0);
            };
            xhr.ontimeout = function() {
              setTimeout(function() {
                reject(new TypeError("Network request timed out"));
              }, 0);
            };
            xhr.onabort = function() {
              setTimeout(function() {
                reject(new exports2.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function fixUrl(url2) {
              try {
                return url2 === "" && g2.location.href ? g2.location.href : url2;
              } catch (e7) {
                return url2;
              }
            }
            xhr.open(request.method, fixUrl(request.url), true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr) {
              if (support.blob) {
                xhr.responseType = "blob";
              } else if (support.arrayBuffer) {
                xhr.responseType = "arraybuffer";
              }
            }
            if (init && typeof init.headers === "object" && !(init.headers instanceof Headers2 || g2.Headers && init.headers instanceof g2.Headers)) {
              var names = [];
              Object.getOwnPropertyNames(init.headers).forEach(function(name) {
                names.push(normalizeName(name));
                xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
              });
              request.headers.forEach(function(value2, name) {
                if (names.indexOf(name) === -1) {
                  xhr.setRequestHeader(name, value2);
                }
              });
            } else {
              request.headers.forEach(function(value2, name) {
                xhr.setRequestHeader(name, value2);
              });
            }
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!g2.fetch) {
          g2.fetch = fetch2;
          g2.Headers = Headers2;
          g2.Request = Request2;
          g2.Response = Response;
        }
        exports2.Headers = Headers2;
        exports2.Request = Request2;
        exports2.Response = Response;
        exports2.fetch = fetch2;
        return exports2;
      }({});
    })(__globalThis__);
    __globalThis__.fetch.ponyfill = true;
    delete __globalThis__.fetch.polyfill;
    var ctx = __global__.fetch ? __global__ : __globalThis__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// node_modules/eventemitter2/lib/eventemitter2.js
var require_eventemitter2 = __commonJS({
  "node_modules/eventemitter2/lib/eventemitter2.js"(exports, module) {
    !function(undefined2) {
      var hasOwnProperty = Object.hasOwnProperty;
      var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
      };
      var defaultMaxListeners = 10;
      var nextTickSupported = typeof process == "object" && typeof process.nextTick == "function";
      var symbolsSupported = typeof Symbol === "function";
      var reflectSupported = typeof Reflect === "object";
      var setImmediateSupported = typeof setImmediate === "function";
      var _setImmediate = setImmediateSupported ? setImmediate : setTimeout;
      var ownKeys = symbolsSupported ? reflectSupported && typeof Reflect.ownKeys === "function" ? Reflect.ownKeys : function(obj) {
        var arr = Object.getOwnPropertyNames(obj);
        arr.push.apply(arr, Object.getOwnPropertySymbols(obj));
        return arr;
      } : Object.keys;
      function init() {
        this._events = {};
        if (this._conf) {
          configure.call(this, this._conf);
        }
      }
      function configure(conf) {
        if (conf) {
          this._conf = conf;
          conf.delimiter && (this.delimiter = conf.delimiter);
          if (conf.maxListeners !== undefined2) {
            this._maxListeners = conf.maxListeners;
          }
          conf.wildcard && (this.wildcard = conf.wildcard);
          conf.newListener && (this._newListener = conf.newListener);
          conf.removeListener && (this._removeListener = conf.removeListener);
          conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);
          conf.ignoreErrors && (this.ignoreErrors = conf.ignoreErrors);
          if (this.wildcard) {
            this.listenerTree = {};
          }
        }
      }
      function logPossibleMemoryLeak(count, eventName) {
        var errorMsg = "(node) warning: possible EventEmitter memory leak detected. " + count + " listeners added. Use emitter.setMaxListeners() to increase limit.";
        if (this.verboseMemoryLeak) {
          errorMsg += " Event name: " + eventName + ".";
        }
        if (typeof process !== "undefined" && process.emitWarning) {
          var e7 = new Error(errorMsg);
          e7.name = "MaxListenersExceededWarning";
          e7.emitter = this;
          e7.count = count;
          process.emitWarning(e7);
        } else {
          console.error(errorMsg);
          if (console.trace) {
            console.trace();
          }
        }
      }
      var toArray2 = function(a2, b2, c2) {
        var n2 = arguments.length;
        switch (n2) {
          case 0:
            return [];
          case 1:
            return [a2];
          case 2:
            return [a2, b2];
          case 3:
            return [a2, b2, c2];
          default:
            var arr = new Array(n2);
            while (n2--) {
              arr[n2] = arguments[n2];
            }
            return arr;
        }
      };
      function toObject(keys, values) {
        var obj = {};
        var key;
        var len = keys.length;
        var valuesCount = values ? values.length : 0;
        for (var i = 0; i < len; i++) {
          key = keys[i];
          obj[key] = i < valuesCount ? values[i] : undefined2;
        }
        return obj;
      }
      function TargetObserver(emitter, target, options) {
        this._emitter = emitter;
        this._target = target;
        this._listeners = {};
        this._listenersCount = 0;
        var on3, off;
        if (options.on || options.off) {
          on3 = options.on;
          off = options.off;
        }
        if (target.addEventListener) {
          on3 = target.addEventListener;
          off = target.removeEventListener;
        } else if (target.addListener) {
          on3 = target.addListener;
          off = target.removeListener;
        } else if (target.on) {
          on3 = target.on;
          off = target.off;
        }
        if (!on3 && !off) {
          throw Error("target does not implement any known event API");
        }
        if (typeof on3 !== "function") {
          throw TypeError("on method must be a function");
        }
        if (typeof off !== "function") {
          throw TypeError("off method must be a function");
        }
        this._on = on3;
        this._off = off;
        var _observers = emitter._observers;
        if (_observers) {
          _observers.push(this);
        } else {
          emitter._observers = [this];
        }
      }
      Object.assign(TargetObserver.prototype, {
        subscribe: function(event, localEvent, reducer) {
          var observer = this;
          var target = this._target;
          var emitter = this._emitter;
          var listeners = this._listeners;
          var handler = function() {
            var args = toArray2.apply(null, arguments);
            var eventObj = {
              data: args,
              name: localEvent,
              original: event
            };
            if (reducer) {
              var result = reducer.call(target, eventObj);
              if (result !== false) {
                emitter.emit.apply(emitter, [eventObj.name].concat(args));
              }
              return;
            }
            emitter.emit.apply(emitter, [localEvent].concat(args));
          };
          if (listeners[event]) {
            throw Error("Event '" + event + "' is already listening");
          }
          this._listenersCount++;
          if (emitter._newListener && emitter._removeListener && !observer._onNewListener) {
            this._onNewListener = function(_event) {
              if (_event === localEvent && listeners[event] === null) {
                listeners[event] = handler;
                observer._on.call(target, event, handler);
              }
            };
            emitter.on("newListener", this._onNewListener);
            this._onRemoveListener = function(_event) {
              if (_event === localEvent && !emitter.hasListeners(_event) && listeners[event]) {
                listeners[event] = null;
                observer._off.call(target, event, handler);
              }
            };
            listeners[event] = null;
            emitter.on("removeListener", this._onRemoveListener);
          } else {
            listeners[event] = handler;
            observer._on.call(target, event, handler);
          }
        },
        unsubscribe: function(event) {
          var observer = this;
          var listeners = this._listeners;
          var emitter = this._emitter;
          var handler;
          var events;
          var off = this._off;
          var target = this._target;
          var i;
          if (event && typeof event !== "string") {
            throw TypeError("event must be a string");
          }
          function clearRefs() {
            if (observer._onNewListener) {
              emitter.off("newListener", observer._onNewListener);
              emitter.off("removeListener", observer._onRemoveListener);
              observer._onNewListener = null;
              observer._onRemoveListener = null;
            }
            var index = findTargetIndex.call(emitter, observer);
            emitter._observers.splice(index, 1);
          }
          if (event) {
            handler = listeners[event];
            if (!handler) return;
            off.call(target, event, handler);
            delete listeners[event];
            if (!--this._listenersCount) {
              clearRefs();
            }
          } else {
            events = ownKeys(listeners);
            i = events.length;
            while (i-- > 0) {
              event = events[i];
              off.call(target, event, listeners[event]);
            }
            this._listeners = {};
            this._listenersCount = 0;
            clearRefs();
          }
        }
      });
      function resolveOptions(options, schema, reducers, allowUnknown) {
        var computedOptions = Object.assign({}, schema);
        if (!options) return computedOptions;
        if (typeof options !== "object") {
          throw TypeError("options must be an object");
        }
        var keys = Object.keys(options);
        var length = keys.length;
        var option, value2;
        var reducer;
        function reject(reason) {
          throw Error('Invalid "' + option + '" option value' + (reason ? ". Reason: " + reason : ""));
        }
        for (var i = 0; i < length; i++) {
          option = keys[i];
          if (!allowUnknown && !hasOwnProperty.call(schema, option)) {
            throw Error('Unknown "' + option + '" option');
          }
          value2 = options[option];
          if (value2 !== undefined2) {
            reducer = reducers[option];
            computedOptions[option] = reducer ? reducer(value2, reject) : value2;
          }
        }
        return computedOptions;
      }
      function constructorReducer(value2, reject) {
        if (typeof value2 !== "function" || !value2.hasOwnProperty("prototype")) {
          reject("value must be a constructor");
        }
        return value2;
      }
      function makeTypeReducer(types) {
        var message = "value must be type of " + types.join("|");
        var len = types.length;
        var firstType = types[0];
        var secondType = types[1];
        if (len === 1) {
          return function(v2, reject) {
            if (typeof v2 === firstType) {
              return v2;
            }
            reject(message);
          };
        }
        if (len === 2) {
          return function(v2, reject) {
            var kind = typeof v2;
            if (kind === firstType || kind === secondType) return v2;
            reject(message);
          };
        }
        return function(v2, reject) {
          var kind = typeof v2;
          var i = len;
          while (i-- > 0) {
            if (kind === types[i]) return v2;
          }
          reject(message);
        };
      }
      var functionReducer = makeTypeReducer(["function"]);
      var objectFunctionReducer = makeTypeReducer(["object", "function"]);
      function makeCancelablePromise(Promise2, executor, options) {
        var isCancelable;
        var callbacks;
        var timer = 0;
        var subscriptionClosed;
        var promise = new Promise2(function(resolve, reject, onCancel) {
          options = resolveOptions(options, {
            timeout: 0,
            overload: false
          }, {
            timeout: function(value2, reject2) {
              value2 *= 1;
              if (typeof value2 !== "number" || value2 < 0 || !Number.isFinite(value2)) {
                reject2("timeout must be a positive number");
              }
              return value2;
            }
          });
          isCancelable = !options.overload && typeof Promise2.prototype.cancel === "function" && typeof onCancel === "function";
          function cleanup() {
            if (callbacks) {
              callbacks = null;
            }
            if (timer) {
              clearTimeout(timer);
              timer = 0;
            }
          }
          var _resolve = function(value2) {
            cleanup();
            resolve(value2);
          };
          var _reject = function(err) {
            cleanup();
            reject(err);
          };
          if (isCancelable) {
            executor(_resolve, _reject, onCancel);
          } else {
            callbacks = [function(reason) {
              _reject(reason || Error("canceled"));
            }];
            executor(_resolve, _reject, function(cb) {
              if (subscriptionClosed) {
                throw Error("Unable to subscribe on cancel event asynchronously");
              }
              if (typeof cb !== "function") {
                throw TypeError("onCancel callback must be a function");
              }
              callbacks.push(cb);
            });
            subscriptionClosed = true;
          }
          if (options.timeout > 0) {
            timer = setTimeout(function() {
              var reason = Error("timeout");
              reason.code = "ETIMEDOUT";
              timer = 0;
              promise.cancel(reason);
              reject(reason);
            }, options.timeout);
          }
        });
        if (!isCancelable) {
          promise.cancel = function(reason) {
            if (!callbacks) {
              return;
            }
            var length = callbacks.length;
            for (var i = 1; i < length; i++) {
              callbacks[i](reason);
            }
            callbacks[0](reason);
            callbacks = null;
          };
        }
        return promise;
      }
      function findTargetIndex(observer) {
        var observers = this._observers;
        if (!observers) {
          return -1;
        }
        var len = observers.length;
        for (var i = 0; i < len; i++) {
          if (observers[i]._target === observer) return i;
        }
        return -1;
      }
      function searchListenerTree(handlers, type, tree, i, typeLength) {
        if (!tree) {
          return null;
        }
        if (i === 0) {
          var kind = typeof type;
          if (kind === "string") {
            var ns2, n2, l2 = 0, j2 = 0, delimiter = this.delimiter, dl2 = delimiter.length;
            if ((n2 = type.indexOf(delimiter)) !== -1) {
              ns2 = new Array(5);
              do {
                ns2[l2++] = type.slice(j2, n2);
                j2 = n2 + dl2;
              } while ((n2 = type.indexOf(delimiter, j2)) !== -1);
              ns2[l2++] = type.slice(j2);
              type = ns2;
              typeLength = l2;
            } else {
              type = [type];
              typeLength = 1;
            }
          } else if (kind === "object") {
            typeLength = type.length;
          } else {
            type = [type];
            typeLength = 1;
          }
        }
        var listeners = null, branch, xTree, xxTree, isolatedBranch, endReached, currentType = type[i], nextType = type[i + 1], branches, _listeners;
        if (i === typeLength) {
          if (tree._listeners) {
            if (typeof tree._listeners === "function") {
              handlers && handlers.push(tree._listeners);
              listeners = [tree];
            } else {
              handlers && handlers.push.apply(handlers, tree._listeners);
              listeners = [tree];
            }
          }
        } else {
          if (currentType === "*") {
            branches = ownKeys(tree);
            n2 = branches.length;
            while (n2-- > 0) {
              branch = branches[n2];
              if (branch !== "_listeners") {
                _listeners = searchListenerTree(handlers, type, tree[branch], i + 1, typeLength);
                if (_listeners) {
                  if (listeners) {
                    listeners.push.apply(listeners, _listeners);
                  } else {
                    listeners = _listeners;
                  }
                }
              }
            }
            return listeners;
          } else if (currentType === "**") {
            endReached = i + 1 === typeLength || i + 2 === typeLength && nextType === "*";
            if (endReached && tree._listeners) {
              listeners = searchListenerTree(handlers, type, tree, typeLength, typeLength);
            }
            branches = ownKeys(tree);
            n2 = branches.length;
            while (n2-- > 0) {
              branch = branches[n2];
              if (branch !== "_listeners") {
                if (branch === "*" || branch === "**") {
                  if (tree[branch]._listeners && !endReached) {
                    _listeners = searchListenerTree(handlers, type, tree[branch], typeLength, typeLength);
                    if (_listeners) {
                      if (listeners) {
                        listeners.push.apply(listeners, _listeners);
                      } else {
                        listeners = _listeners;
                      }
                    }
                  }
                  _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                } else if (branch === nextType) {
                  _listeners = searchListenerTree(handlers, type, tree[branch], i + 2, typeLength);
                } else {
                  _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                }
                if (_listeners) {
                  if (listeners) {
                    listeners.push.apply(listeners, _listeners);
                  } else {
                    listeners = _listeners;
                  }
                }
              }
            }
            return listeners;
          } else if (tree[currentType]) {
            listeners = searchListenerTree(handlers, type, tree[currentType], i + 1, typeLength);
          }
        }
        xTree = tree["*"];
        if (xTree) {
          searchListenerTree(handlers, type, xTree, i + 1, typeLength);
        }
        xxTree = tree["**"];
        if (xxTree) {
          if (i < typeLength) {
            if (xxTree._listeners) {
              searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
            }
            branches = ownKeys(xxTree);
            n2 = branches.length;
            while (n2-- > 0) {
              branch = branches[n2];
              if (branch !== "_listeners") {
                if (branch === nextType) {
                  searchListenerTree(handlers, type, xxTree[branch], i + 2, typeLength);
                } else if (branch === currentType) {
                  searchListenerTree(handlers, type, xxTree[branch], i + 1, typeLength);
                } else {
                  isolatedBranch = {};
                  isolatedBranch[branch] = xxTree[branch];
                  searchListenerTree(handlers, type, { "**": isolatedBranch }, i + 1, typeLength);
                }
              }
            }
          } else if (xxTree._listeners) {
            searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
          } else if (xxTree["*"] && xxTree["*"]._listeners) {
            searchListenerTree(handlers, type, xxTree["*"], typeLength, typeLength);
          }
        }
        return listeners;
      }
      function growListenerTree(type, listener, prepend) {
        var len = 0, j2 = 0, i, delimiter = this.delimiter, dl2 = delimiter.length, ns2;
        if (typeof type === "string") {
          if ((i = type.indexOf(delimiter)) !== -1) {
            ns2 = new Array(5);
            do {
              ns2[len++] = type.slice(j2, i);
              j2 = i + dl2;
            } while ((i = type.indexOf(delimiter, j2)) !== -1);
            ns2[len++] = type.slice(j2);
          } else {
            ns2 = [type];
            len = 1;
          }
        } else {
          ns2 = type;
          len = type.length;
        }
        if (len > 1) {
          for (i = 0; i + 1 < len; i++) {
            if (ns2[i] === "**" && ns2[i + 1] === "**") {
              return;
            }
          }
        }
        var tree = this.listenerTree, name;
        for (i = 0; i < len; i++) {
          name = ns2[i];
          tree = tree[name] || (tree[name] = {});
          if (i === len - 1) {
            if (!tree._listeners) {
              tree._listeners = listener;
            } else {
              if (typeof tree._listeners === "function") {
                tree._listeners = [tree._listeners];
              }
              if (prepend) {
                tree._listeners.unshift(listener);
              } else {
                tree._listeners.push(listener);
              }
              if (!tree._listeners.warned && this._maxListeners > 0 && tree._listeners.length > this._maxListeners) {
                tree._listeners.warned = true;
                logPossibleMemoryLeak.call(this, tree._listeners.length, name);
              }
            }
            return true;
          }
        }
        return true;
      }
      function collectTreeEvents(tree, events, root, asArray) {
        var branches = ownKeys(tree);
        var i = branches.length;
        var branch, branchName, path;
        var hasListeners = tree["_listeners"];
        var isArrayPath;
        while (i-- > 0) {
          branchName = branches[i];
          branch = tree[branchName];
          if (branchName === "_listeners") {
            path = root;
          } else {
            path = root ? root.concat(branchName) : [branchName];
          }
          isArrayPath = asArray || typeof branchName === "symbol";
          hasListeners && events.push(isArrayPath ? path : path.join(this.delimiter));
          if (typeof branch === "object") {
            collectTreeEvents.call(this, branch, events, path, isArrayPath);
          }
        }
        return events;
      }
      function recursivelyGarbageCollect(root) {
        var keys = ownKeys(root);
        var i = keys.length;
        var obj, key, flag;
        while (i-- > 0) {
          key = keys[i];
          obj = root[key];
          if (obj) {
            flag = true;
            if (key !== "_listeners" && !recursivelyGarbageCollect(obj)) {
              delete root[key];
            }
          }
        }
        return flag;
      }
      function Listener(emitter, event, listener) {
        this.emitter = emitter;
        this.event = event;
        this.listener = listener;
      }
      Listener.prototype.off = function() {
        this.emitter.off(this.event, this.listener);
        return this;
      };
      function setupListener(event, listener, options) {
        if (options === true) {
          promisify = true;
        } else if (options === false) {
          async = true;
        } else {
          if (!options || typeof options !== "object") {
            throw TypeError("options should be an object or true");
          }
          var async = options.async;
          var promisify = options.promisify;
          var nextTick2 = options.nextTick;
          var objectify = options.objectify;
        }
        if (async || nextTick2 || promisify) {
          var _listener = listener;
          var _origin = listener._origin || listener;
          if (nextTick2 && !nextTickSupported) {
            throw Error("process.nextTick is not supported");
          }
          if (promisify === undefined2) {
            promisify = listener.constructor.name === "AsyncFunction";
          }
          listener = function() {
            var args = arguments;
            var context = this;
            var event2 = this.event;
            return promisify ? nextTick2 ? Promise.resolve() : new Promise(function(resolve) {
              _setImmediate(resolve);
            }).then(function() {
              context.event = event2;
              return _listener.apply(context, args);
            }) : (nextTick2 ? process.nextTick : _setImmediate)(function() {
              context.event = event2;
              _listener.apply(context, args);
            });
          };
          listener._async = true;
          listener._origin = _origin;
        }
        return [listener, objectify ? new Listener(this, event, listener) : this];
      }
      function EventEmitter(conf) {
        this._events = {};
        this._newListener = false;
        this._removeListener = false;
        this.verboseMemoryLeak = false;
        configure.call(this, conf);
      }
      EventEmitter.EventEmitter2 = EventEmitter;
      EventEmitter.prototype.listenTo = function(target, events, options) {
        if (typeof target !== "object") {
          throw TypeError("target musts be an object");
        }
        var emitter = this;
        options = resolveOptions(options, {
          on: undefined2,
          off: undefined2,
          reducers: undefined2
        }, {
          on: functionReducer,
          off: functionReducer,
          reducers: objectFunctionReducer
        });
        function listen(events2) {
          if (typeof events2 !== "object") {
            throw TypeError("events must be an object");
          }
          var reducers = options.reducers;
          var index = findTargetIndex.call(emitter, target);
          var observer;
          if (index === -1) {
            observer = new TargetObserver(emitter, target, options);
          } else {
            observer = emitter._observers[index];
          }
          var keys = ownKeys(events2);
          var len = keys.length;
          var event;
          var isSingleReducer = typeof reducers === "function";
          for (var i = 0; i < len; i++) {
            event = keys[i];
            observer.subscribe(
              event,
              events2[event] || event,
              isSingleReducer ? reducers : reducers && reducers[event]
            );
          }
        }
        isArray(events) ? listen(toObject(events)) : typeof events === "string" ? listen(toObject(events.split(/\s+/))) : listen(events);
        return this;
      };
      EventEmitter.prototype.stopListeningTo = function(target, event) {
        var observers = this._observers;
        if (!observers) {
          return false;
        }
        var i = observers.length;
        var observer;
        var matched = false;
        if (target && typeof target !== "object") {
          throw TypeError("target should be an object");
        }
        while (i-- > 0) {
          observer = observers[i];
          if (!target || observer._target === target) {
            observer.unsubscribe(event);
            matched = true;
          }
        }
        return matched;
      };
      EventEmitter.prototype.delimiter = ".";
      EventEmitter.prototype.setMaxListeners = function(n2) {
        if (n2 !== undefined2) {
          this._maxListeners = n2;
          if (!this._conf) this._conf = {};
          this._conf.maxListeners = n2;
        }
      };
      EventEmitter.prototype.getMaxListeners = function() {
        return this._maxListeners;
      };
      EventEmitter.prototype.event = "";
      EventEmitter.prototype.once = function(event, fn2, options) {
        return this._once(event, fn2, false, options);
      };
      EventEmitter.prototype.prependOnceListener = function(event, fn2, options) {
        return this._once(event, fn2, true, options);
      };
      EventEmitter.prototype._once = function(event, fn2, prepend, options) {
        return this._many(event, 1, fn2, prepend, options);
      };
      EventEmitter.prototype.many = function(event, ttl, fn2, options) {
        return this._many(event, ttl, fn2, false, options);
      };
      EventEmitter.prototype.prependMany = function(event, ttl, fn2, options) {
        return this._many(event, ttl, fn2, true, options);
      };
      EventEmitter.prototype._many = function(event, ttl, fn2, prepend, options) {
        var self2 = this;
        if (typeof fn2 !== "function") {
          throw new Error("many only accepts instances of Function");
        }
        function listener() {
          if (--ttl === 0) {
            self2.off(event, listener);
          }
          return fn2.apply(this, arguments);
        }
        listener._origin = fn2;
        return this._on(event, listener, prepend, options);
      };
      EventEmitter.prototype.emit = function() {
        if (!this._events && !this._all) {
          return false;
        }
        this._events || init.call(this);
        var type = arguments[0], ns2, wildcard = this.wildcard;
        var args, l2, i, j2, containsSymbol;
        if (type === "newListener" && !this._newListener) {
          if (!this._events.newListener) {
            return false;
          }
        }
        if (wildcard) {
          ns2 = type;
          if (type !== "newListener" && type !== "removeListener") {
            if (typeof type === "object") {
              l2 = type.length;
              if (symbolsSupported) {
                for (i = 0; i < l2; i++) {
                  if (typeof type[i] === "symbol") {
                    containsSymbol = true;
                    break;
                  }
                }
              }
              if (!containsSymbol) {
                type = type.join(this.delimiter);
              }
            }
          }
        }
        var al2 = arguments.length;
        var handler;
        if (this._all && this._all.length) {
          handler = this._all.slice();
          for (i = 0, l2 = handler.length; i < l2; i++) {
            this.event = type;
            switch (al2) {
              case 1:
                handler[i].call(this, type);
                break;
              case 2:
                handler[i].call(this, type, arguments[1]);
                break;
              case 3:
                handler[i].call(this, type, arguments[1], arguments[2]);
                break;
              default:
                handler[i].apply(this, arguments);
            }
          }
        }
        if (wildcard) {
          handler = [];
          searchListenerTree.call(this, handler, ns2, this.listenerTree, 0, l2);
        } else {
          handler = this._events[type];
          if (typeof handler === "function") {
            this.event = type;
            switch (al2) {
              case 1:
                handler.call(this);
                break;
              case 2:
                handler.call(this, arguments[1]);
                break;
              case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
              default:
                args = new Array(al2 - 1);
                for (j2 = 1; j2 < al2; j2++) args[j2 - 1] = arguments[j2];
                handler.apply(this, args);
            }
            return true;
          } else if (handler) {
            handler = handler.slice();
          }
        }
        if (handler && handler.length) {
          if (al2 > 3) {
            args = new Array(al2 - 1);
            for (j2 = 1; j2 < al2; j2++) args[j2 - 1] = arguments[j2];
          }
          for (i = 0, l2 = handler.length; i < l2; i++) {
            this.event = type;
            switch (al2) {
              case 1:
                handler[i].call(this);
                break;
              case 2:
                handler[i].call(this, arguments[1]);
                break;
              case 3:
                handler[i].call(this, arguments[1], arguments[2]);
                break;
              default:
                handler[i].apply(this, args);
            }
          }
          return true;
        } else if (!this.ignoreErrors && !this._all && type === "error") {
          if (arguments[1] instanceof Error) {
            throw arguments[1];
          } else {
            throw new Error("Uncaught, unspecified 'error' event.");
          }
        }
        return !!this._all;
      };
      EventEmitter.prototype.emitAsync = function() {
        if (!this._events && !this._all) {
          return false;
        }
        this._events || init.call(this);
        var type = arguments[0], wildcard = this.wildcard, ns2, containsSymbol;
        var args, l2, i, j2;
        if (type === "newListener" && !this._newListener) {
          if (!this._events.newListener) {
            return Promise.resolve([false]);
          }
        }
        if (wildcard) {
          ns2 = type;
          if (type !== "newListener" && type !== "removeListener") {
            if (typeof type === "object") {
              l2 = type.length;
              if (symbolsSupported) {
                for (i = 0; i < l2; i++) {
                  if (typeof type[i] === "symbol") {
                    containsSymbol = true;
                    break;
                  }
                }
              }
              if (!containsSymbol) {
                type = type.join(this.delimiter);
              }
            }
          }
        }
        var promises = [];
        var al2 = arguments.length;
        var handler;
        if (this._all) {
          for (i = 0, l2 = this._all.length; i < l2; i++) {
            this.event = type;
            switch (al2) {
              case 1:
                promises.push(this._all[i].call(this, type));
                break;
              case 2:
                promises.push(this._all[i].call(this, type, arguments[1]));
                break;
              case 3:
                promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
                break;
              default:
                promises.push(this._all[i].apply(this, arguments));
            }
          }
        }
        if (wildcard) {
          handler = [];
          searchListenerTree.call(this, handler, ns2, this.listenerTree, 0);
        } else {
          handler = this._events[type];
        }
        if (typeof handler === "function") {
          this.event = type;
          switch (al2) {
            case 1:
              promises.push(handler.call(this));
              break;
            case 2:
              promises.push(handler.call(this, arguments[1]));
              break;
            case 3:
              promises.push(handler.call(this, arguments[1], arguments[2]));
              break;
            default:
              args = new Array(al2 - 1);
              for (j2 = 1; j2 < al2; j2++) args[j2 - 1] = arguments[j2];
              promises.push(handler.apply(this, args));
          }
        } else if (handler && handler.length) {
          handler = handler.slice();
          if (al2 > 3) {
            args = new Array(al2 - 1);
            for (j2 = 1; j2 < al2; j2++) args[j2 - 1] = arguments[j2];
          }
          for (i = 0, l2 = handler.length; i < l2; i++) {
            this.event = type;
            switch (al2) {
              case 1:
                promises.push(handler[i].call(this));
                break;
              case 2:
                promises.push(handler[i].call(this, arguments[1]));
                break;
              case 3:
                promises.push(handler[i].call(this, arguments[1], arguments[2]));
                break;
              default:
                promises.push(handler[i].apply(this, args));
            }
          }
        } else if (!this.ignoreErrors && !this._all && type === "error") {
          if (arguments[1] instanceof Error) {
            return Promise.reject(arguments[1]);
          } else {
            return Promise.reject("Uncaught, unspecified 'error' event.");
          }
        }
        return Promise.all(promises);
      };
      EventEmitter.prototype.on = function(type, listener, options) {
        return this._on(type, listener, false, options);
      };
      EventEmitter.prototype.prependListener = function(type, listener, options) {
        return this._on(type, listener, true, options);
      };
      EventEmitter.prototype.onAny = function(fn2) {
        return this._onAny(fn2, false);
      };
      EventEmitter.prototype.prependAny = function(fn2) {
        return this._onAny(fn2, true);
      };
      EventEmitter.prototype.addListener = EventEmitter.prototype.on;
      EventEmitter.prototype._onAny = function(fn2, prepend) {
        if (typeof fn2 !== "function") {
          throw new Error("onAny only accepts instances of Function");
        }
        if (!this._all) {
          this._all = [];
        }
        if (prepend) {
          this._all.unshift(fn2);
        } else {
          this._all.push(fn2);
        }
        return this;
      };
      EventEmitter.prototype._on = function(type, listener, prepend, options) {
        if (typeof type === "function") {
          this._onAny(type, listener);
          return this;
        }
        if (typeof listener !== "function") {
          throw new Error("on only accepts instances of Function");
        }
        this._events || init.call(this);
        var returnValue = this, temp;
        if (options !== undefined2) {
          temp = setupListener.call(this, type, listener, options);
          listener = temp[0];
          returnValue = temp[1];
        }
        if (this._newListener) {
          this.emit("newListener", type, listener);
        }
        if (this.wildcard) {
          growListenerTree.call(this, type, listener, prepend);
          return returnValue;
        }
        if (!this._events[type]) {
          this._events[type] = listener;
        } else {
          if (typeof this._events[type] === "function") {
            this._events[type] = [this._events[type]];
          }
          if (prepend) {
            this._events[type].unshift(listener);
          } else {
            this._events[type].push(listener);
          }
          if (!this._events[type].warned && this._maxListeners > 0 && this._events[type].length > this._maxListeners) {
            this._events[type].warned = true;
            logPossibleMemoryLeak.call(this, this._events[type].length, type);
          }
        }
        return returnValue;
      };
      EventEmitter.prototype.off = function(type, listener) {
        if (typeof listener !== "function") {
          throw new Error("removeListener only takes instances of Function");
        }
        var handlers, leafs = [];
        if (this.wildcard) {
          var ns2 = typeof type === "string" ? type.split(this.delimiter) : type.slice();
          leafs = searchListenerTree.call(this, null, ns2, this.listenerTree, 0);
          if (!leafs) return this;
        } else {
          if (!this._events[type]) return this;
          handlers = this._events[type];
          leafs.push({ _listeners: handlers });
        }
        for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
          var leaf = leafs[iLeaf];
          handlers = leaf._listeners;
          if (isArray(handlers)) {
            var position = -1;
            for (var i = 0, length = handlers.length; i < length; i++) {
              if (handlers[i] === listener || handlers[i].listener && handlers[i].listener === listener || handlers[i]._origin && handlers[i]._origin === listener) {
                position = i;
                break;
              }
            }
            if (position < 0) {
              continue;
            }
            if (this.wildcard) {
              leaf._listeners.splice(position, 1);
            } else {
              this._events[type].splice(position, 1);
            }
            if (handlers.length === 0) {
              if (this.wildcard) {
                delete leaf._listeners;
              } else {
                delete this._events[type];
              }
            }
            if (this._removeListener)
              this.emit("removeListener", type, listener);
            return this;
          } else if (handlers === listener || handlers.listener && handlers.listener === listener || handlers._origin && handlers._origin === listener) {
            if (this.wildcard) {
              delete leaf._listeners;
            } else {
              delete this._events[type];
            }
            if (this._removeListener)
              this.emit("removeListener", type, listener);
          }
        }
        this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
        return this;
      };
      EventEmitter.prototype.offAny = function(fn2) {
        var i = 0, l2 = 0, fns;
        if (fn2 && this._all && this._all.length > 0) {
          fns = this._all;
          for (i = 0, l2 = fns.length; i < l2; i++) {
            if (fn2 === fns[i]) {
              fns.splice(i, 1);
              if (this._removeListener)
                this.emit("removeListenerAny", fn2);
              return this;
            }
          }
        } else {
          fns = this._all;
          if (this._removeListener) {
            for (i = 0, l2 = fns.length; i < l2; i++)
              this.emit("removeListenerAny", fns[i]);
          }
          this._all = [];
        }
        return this;
      };
      EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
      EventEmitter.prototype.removeAllListeners = function(type) {
        if (type === undefined2) {
          !this._events || init.call(this);
          return this;
        }
        if (this.wildcard) {
          var leafs = searchListenerTree.call(this, null, type, this.listenerTree, 0), leaf, i;
          if (!leafs) return this;
          for (i = 0; i < leafs.length; i++) {
            leaf = leafs[i];
            leaf._listeners = null;
          }
          this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
        } else if (this._events) {
          this._events[type] = null;
        }
        return this;
      };
      EventEmitter.prototype.listeners = function(type) {
        var _events = this._events;
        var keys, listeners, allListeners;
        var i;
        var listenerTree;
        if (type === undefined2) {
          if (this.wildcard) {
            throw Error("event name required for wildcard emitter");
          }
          if (!_events) {
            return [];
          }
          keys = ownKeys(_events);
          i = keys.length;
          allListeners = [];
          while (i-- > 0) {
            listeners = _events[keys[i]];
            if (typeof listeners === "function") {
              allListeners.push(listeners);
            } else {
              allListeners.push.apply(allListeners, listeners);
            }
          }
          return allListeners;
        } else {
          if (this.wildcard) {
            listenerTree = this.listenerTree;
            if (!listenerTree) return [];
            var handlers = [];
            var ns2 = typeof type === "string" ? type.split(this.delimiter) : type.slice();
            searchListenerTree.call(this, handlers, ns2, listenerTree, 0);
            return handlers;
          }
          if (!_events) {
            return [];
          }
          listeners = _events[type];
          if (!listeners) {
            return [];
          }
          return typeof listeners === "function" ? [listeners] : listeners;
        }
      };
      EventEmitter.prototype.eventNames = function(nsAsArray) {
        var _events = this._events;
        return this.wildcard ? collectTreeEvents.call(this, this.listenerTree, [], null, nsAsArray) : _events ? ownKeys(_events) : [];
      };
      EventEmitter.prototype.listenerCount = function(type) {
        return this.listeners(type).length;
      };
      EventEmitter.prototype.hasListeners = function(type) {
        if (this.wildcard) {
          var handlers = [];
          var ns2 = typeof type === "string" ? type.split(this.delimiter) : type.slice();
          searchListenerTree.call(this, handlers, ns2, this.listenerTree, 0);
          return handlers.length > 0;
        }
        var _events = this._events;
        var _all = this._all;
        return !!(_all && _all.length || _events && (type === undefined2 ? ownKeys(_events).length : _events[type]));
      };
      EventEmitter.prototype.listenersAny = function() {
        if (this._all) {
          return this._all;
        } else {
          return [];
        }
      };
      EventEmitter.prototype.waitFor = function(event, options) {
        var self2 = this;
        var type = typeof options;
        if (type === "number") {
          options = { timeout: options };
        } else if (type === "function") {
          options = { filter: options };
        }
        options = resolveOptions(options, {
          timeout: 0,
          filter: undefined2,
          handleError: false,
          Promise,
          overload: false
        }, {
          filter: functionReducer,
          Promise: constructorReducer
        });
        return makeCancelablePromise(options.Promise, function(resolve, reject, onCancel) {
          function listener() {
            var filter = options.filter;
            if (filter && !filter.apply(self2, arguments)) {
              return;
            }
            self2.off(event, listener);
            if (options.handleError) {
              var err = arguments[0];
              err ? reject(err) : resolve(toArray2.apply(null, arguments).slice(1));
            } else {
              resolve(toArray2.apply(null, arguments));
            }
          }
          onCancel(function() {
            self2.off(event, listener);
          });
          self2._on(event, listener, false);
        }, {
          timeout: options.timeout,
          overload: options.overload
        });
      };
      function once(emitter, name, options) {
        options = resolveOptions(options, {
          Promise,
          timeout: 0,
          overload: false
        }, {
          Promise: constructorReducer
        });
        var _Promise = options.Promise;
        return makeCancelablePromise(_Promise, function(resolve, reject, onCancel) {
          var handler;
          if (typeof emitter.addEventListener === "function") {
            handler = function() {
              resolve(toArray2.apply(null, arguments));
            };
            onCancel(function() {
              emitter.removeEventListener(name, handler);
            });
            emitter.addEventListener(
              name,
              handler,
              { once: true }
            );
            return;
          }
          var eventListener = function() {
            errorListener && emitter.removeListener("error", errorListener);
            resolve(toArray2.apply(null, arguments));
          };
          var errorListener;
          if (name !== "error") {
            errorListener = function(err) {
              emitter.removeListener(name, eventListener);
              reject(err);
            };
            emitter.once("error", errorListener);
          }
          onCancel(function() {
            errorListener && emitter.removeListener("error", errorListener);
            emitter.removeListener(name, eventListener);
          });
          emitter.once(name, eventListener);
        }, {
          timeout: options.timeout,
          overload: options.overload
        });
      }
      var prototype = EventEmitter.prototype;
      Object.defineProperties(EventEmitter, {
        defaultMaxListeners: {
          get: function() {
            return prototype._maxListeners;
          },
          set: function(n2) {
            if (typeof n2 !== "number" || n2 < 0 || Number.isNaN(n2)) {
              throw TypeError("n must be a non-negative number");
            }
            prototype._maxListeners = n2;
          },
          enumerable: true
        },
        once: {
          value: once,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperties(prototype, {
        _maxListeners: {
          value: defaultMaxListeners,
          writable: true,
          configurable: true
        },
        _observers: { value: null, writable: true, configurable: true }
      });
      if (typeof define === "function" && define.amd) {
        define(function() {
          return EventEmitter;
        });
      } else if (typeof exports === "object") {
        module.exports = EventEmitter;
      } else {
        var _global = new Function("", "return this")();
        _global.EventEmitter2 = EventEmitter;
      }
    }();
  }
});

// node_modules/@metamask/sdk/dist/browser/es/metamask-sdk.js
var import_cross_fetch = __toESM(require_browser_ponyfill());
var import_debug = __toESM(require_browser());
var import_eventemitter2 = __toESM(require_eventemitter2());

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
var i;
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// node_modules/uuid/dist/esm-browser/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  var v2;
  var arr = new Uint8Array(16);
  arr[0] = (v2 = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v2 >>> 16 & 255;
  arr[2] = v2 >>> 8 & 255;
  arr[3] = v2 & 255;
  arr[4] = (v2 = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v2 & 255;
  arr[6] = (v2 = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v2 & 255;
  arr[8] = (v2 = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v2 & 255;
  arr[10] = (v2 = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v2 / 4294967296 & 255;
  arr[12] = v2 >>> 24 & 255;
  arr[13] = v2 >>> 16 & 255;
  arr[14] = v2 >>> 8 & 255;
  arr[15] = v2 & 255;
  return arr;
}
var parse_default = parse;

// node_modules/uuid/dist/esm-browser/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  var bytes = [];
  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35_default(name, version, hashfunc) {
  function generateUUID(value2, namespace, buf, offset) {
    if (typeof value2 === "string") {
      value2 = stringToBytes(value2);
    }
    if (typeof namespace === "string") {
      namespace = parse_default(namespace);
    }
    if (namespace.length !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    var bytes = new Uint8Array(16 + value2.length);
    bytes.set(namespace);
    bytes.set(value2, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return stringify_default(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL2;
  return generateUUID;
}

// node_modules/uuid/dist/esm-browser/md5.js
function md5(bytes) {
  if (typeof bytes === "string") {
    var msg = unescape(encodeURIComponent(bytes));
    bytes = new Uint8Array(msg.length);
    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = "0123456789abcdef";
  for (var i = 0; i < length32; i += 8) {
    var x2 = input[i >> 5] >>> i % 32 & 255;
    var hex = parseInt(hexTab.charAt(x2 >>> 4 & 15) + hexTab.charAt(x2 & 15), 16);
    output.push(hex);
  }
  return output;
}
function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
function wordsToMd5(x2, len) {
  x2[len >> 5] |= 128 << len % 32;
  x2[getOutputLength(len) - 1] = len;
  var a2 = 1732584193;
  var b2 = -271733879;
  var c2 = -1732584194;
  var d2 = 271733878;
  for (var i = 0; i < x2.length; i += 16) {
    var olda = a2;
    var oldb = b2;
    var oldc = c2;
    var oldd = d2;
    a2 = md5ff(a2, b2, c2, d2, x2[i], 7, -680876936);
    d2 = md5ff(d2, a2, b2, c2, x2[i + 1], 12, -389564586);
    c2 = md5ff(c2, d2, a2, b2, x2[i + 2], 17, 606105819);
    b2 = md5ff(b2, c2, d2, a2, x2[i + 3], 22, -1044525330);
    a2 = md5ff(a2, b2, c2, d2, x2[i + 4], 7, -176418897);
    d2 = md5ff(d2, a2, b2, c2, x2[i + 5], 12, 1200080426);
    c2 = md5ff(c2, d2, a2, b2, x2[i + 6], 17, -1473231341);
    b2 = md5ff(b2, c2, d2, a2, x2[i + 7], 22, -45705983);
    a2 = md5ff(a2, b2, c2, d2, x2[i + 8], 7, 1770035416);
    d2 = md5ff(d2, a2, b2, c2, x2[i + 9], 12, -1958414417);
    c2 = md5ff(c2, d2, a2, b2, x2[i + 10], 17, -42063);
    b2 = md5ff(b2, c2, d2, a2, x2[i + 11], 22, -1990404162);
    a2 = md5ff(a2, b2, c2, d2, x2[i + 12], 7, 1804603682);
    d2 = md5ff(d2, a2, b2, c2, x2[i + 13], 12, -40341101);
    c2 = md5ff(c2, d2, a2, b2, x2[i + 14], 17, -1502002290);
    b2 = md5ff(b2, c2, d2, a2, x2[i + 15], 22, 1236535329);
    a2 = md5gg(a2, b2, c2, d2, x2[i + 1], 5, -165796510);
    d2 = md5gg(d2, a2, b2, c2, x2[i + 6], 9, -1069501632);
    c2 = md5gg(c2, d2, a2, b2, x2[i + 11], 14, 643717713);
    b2 = md5gg(b2, c2, d2, a2, x2[i], 20, -373897302);
    a2 = md5gg(a2, b2, c2, d2, x2[i + 5], 5, -701558691);
    d2 = md5gg(d2, a2, b2, c2, x2[i + 10], 9, 38016083);
    c2 = md5gg(c2, d2, a2, b2, x2[i + 15], 14, -660478335);
    b2 = md5gg(b2, c2, d2, a2, x2[i + 4], 20, -405537848);
    a2 = md5gg(a2, b2, c2, d2, x2[i + 9], 5, 568446438);
    d2 = md5gg(d2, a2, b2, c2, x2[i + 14], 9, -1019803690);
    c2 = md5gg(c2, d2, a2, b2, x2[i + 3], 14, -187363961);
    b2 = md5gg(b2, c2, d2, a2, x2[i + 8], 20, 1163531501);
    a2 = md5gg(a2, b2, c2, d2, x2[i + 13], 5, -1444681467);
    d2 = md5gg(d2, a2, b2, c2, x2[i + 2], 9, -51403784);
    c2 = md5gg(c2, d2, a2, b2, x2[i + 7], 14, 1735328473);
    b2 = md5gg(b2, c2, d2, a2, x2[i + 12], 20, -1926607734);
    a2 = md5hh(a2, b2, c2, d2, x2[i + 5], 4, -378558);
    d2 = md5hh(d2, a2, b2, c2, x2[i + 8], 11, -2022574463);
    c2 = md5hh(c2, d2, a2, b2, x2[i + 11], 16, 1839030562);
    b2 = md5hh(b2, c2, d2, a2, x2[i + 14], 23, -35309556);
    a2 = md5hh(a2, b2, c2, d2, x2[i + 1], 4, -1530992060);
    d2 = md5hh(d2, a2, b2, c2, x2[i + 4], 11, 1272893353);
    c2 = md5hh(c2, d2, a2, b2, x2[i + 7], 16, -155497632);
    b2 = md5hh(b2, c2, d2, a2, x2[i + 10], 23, -1094730640);
    a2 = md5hh(a2, b2, c2, d2, x2[i + 13], 4, 681279174);
    d2 = md5hh(d2, a2, b2, c2, x2[i], 11, -358537222);
    c2 = md5hh(c2, d2, a2, b2, x2[i + 3], 16, -722521979);
    b2 = md5hh(b2, c2, d2, a2, x2[i + 6], 23, 76029189);
    a2 = md5hh(a2, b2, c2, d2, x2[i + 9], 4, -640364487);
    d2 = md5hh(d2, a2, b2, c2, x2[i + 12], 11, -421815835);
    c2 = md5hh(c2, d2, a2, b2, x2[i + 15], 16, 530742520);
    b2 = md5hh(b2, c2, d2, a2, x2[i + 2], 23, -995338651);
    a2 = md5ii(a2, b2, c2, d2, x2[i], 6, -198630844);
    d2 = md5ii(d2, a2, b2, c2, x2[i + 7], 10, 1126891415);
    c2 = md5ii(c2, d2, a2, b2, x2[i + 14], 15, -1416354905);
    b2 = md5ii(b2, c2, d2, a2, x2[i + 5], 21, -57434055);
    a2 = md5ii(a2, b2, c2, d2, x2[i + 12], 6, 1700485571);
    d2 = md5ii(d2, a2, b2, c2, x2[i + 3], 10, -1894986606);
    c2 = md5ii(c2, d2, a2, b2, x2[i + 10], 15, -1051523);
    b2 = md5ii(b2, c2, d2, a2, x2[i + 1], 21, -2054922799);
    a2 = md5ii(a2, b2, c2, d2, x2[i + 8], 6, 1873313359);
    d2 = md5ii(d2, a2, b2, c2, x2[i + 15], 10, -30611744);
    c2 = md5ii(c2, d2, a2, b2, x2[i + 6], 15, -1560198380);
    b2 = md5ii(b2, c2, d2, a2, x2[i + 13], 21, 1309151649);
    a2 = md5ii(a2, b2, c2, d2, x2[i + 4], 6, -145523070);
    d2 = md5ii(d2, a2, b2, c2, x2[i + 11], 10, -1120210379);
    c2 = md5ii(c2, d2, a2, b2, x2[i + 2], 15, 718787259);
    b2 = md5ii(b2, c2, d2, a2, x2[i + 9], 21, -343485551);
    a2 = safeAdd(a2, olda);
    b2 = safeAdd(b2, oldb);
    c2 = safeAdd(c2, oldc);
    d2 = safeAdd(d2, oldd);
  }
  return [a2, b2, c2, d2];
}
function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));
  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 255) << i % 32;
  }
  return output;
}
function safeAdd(x2, y2) {
  var lsw = (x2 & 65535) + (y2 & 65535);
  var msw = (x2 >> 16) + (y2 >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q2, a2, b2, x2, s, t2) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a2, q2), safeAdd(x2, t2)), s), b2);
}
function md5ff(a2, b2, c2, d2, x2, s, t2) {
  return md5cmn(b2 & c2 | ~b2 & d2, a2, b2, x2, s, t2);
}
function md5gg(a2, b2, c2, d2, x2, s, t2) {
  return md5cmn(b2 & d2 | c2 & ~d2, a2, b2, x2, s, t2);
}
function md5hh(a2, b2, c2, d2, x2, s, t2) {
  return md5cmn(b2 ^ c2 ^ d2, a2, b2, x2, s, t2);
}
function md5ii(a2, b2, c2, d2, x2, s, t2) {
  return md5cmn(c2 ^ (b2 | ~d2), a2, b2, x2, s, t2);
}
var md5_default = md5;

// node_modules/uuid/dist/esm-browser/v3.js
var v3 = v35_default("v3", 48, md5_default);

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

// node_modules/uuid/dist/esm-browser/sha1.js
function f(s, x2, y2, z2) {
  switch (s) {
    case 0:
      return x2 & y2 ^ ~x2 & z2;
    case 1:
      return x2 ^ y2 ^ z2;
    case 2:
      return x2 & y2 ^ x2 & z2 ^ y2 & z2;
    case 3:
      return x2 ^ y2 ^ z2;
  }
}
function ROTL(x2, n2) {
  return x2 << n2 | x2 >>> 32 - n2;
}
function sha1(bytes) {
  var K2 = [1518500249, 1859775393, 2400959708, 3395469782];
  var H2 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof bytes === "string") {
    var msg = unescape(encodeURIComponent(bytes));
    bytes = [];
    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(128);
  var l2 = bytes.length / 4 + 2;
  var N2 = Math.ceil(l2 / 16);
  var M2 = new Array(N2);
  for (var _i2 = 0; _i2 < N2; ++_i2) {
    var arr = new Uint32Array(16);
    for (var j2 = 0; j2 < 16; ++j2) {
      arr[j2] = bytes[_i2 * 64 + j2 * 4] << 24 | bytes[_i2 * 64 + j2 * 4 + 1] << 16 | bytes[_i2 * 64 + j2 * 4 + 2] << 8 | bytes[_i2 * 64 + j2 * 4 + 3];
    }
    M2[_i2] = arr;
  }
  M2[N2 - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M2[N2 - 1][14] = Math.floor(M2[N2 - 1][14]);
  M2[N2 - 1][15] = (bytes.length - 1) * 8 & 4294967295;
  for (var _i22 = 0; _i22 < N2; ++_i22) {
    var W2 = new Uint32Array(80);
    for (var t2 = 0; t2 < 16; ++t2) {
      W2[t2] = M2[_i22][t2];
    }
    for (var _t2 = 16; _t2 < 80; ++_t2) {
      W2[_t2] = ROTL(W2[_t2 - 3] ^ W2[_t2 - 8] ^ W2[_t2 - 14] ^ W2[_t2 - 16], 1);
    }
    var a2 = H2[0];
    var b2 = H2[1];
    var c2 = H2[2];
    var d2 = H2[3];
    var e7 = H2[4];
    for (var _t22 = 0; _t22 < 80; ++_t22) {
      var s = Math.floor(_t22 / 20);
      var T2 = ROTL(a2, 5) + f(s, b2, c2, d2) + e7 + K2[s] + W2[_t22] >>> 0;
      e7 = d2;
      d2 = c2;
      c2 = ROTL(b2, 30) >>> 0;
      b2 = a2;
      a2 = T2;
    }
    H2[0] = H2[0] + a2 >>> 0;
    H2[1] = H2[1] + b2 >>> 0;
    H2[2] = H2[2] + c2 >>> 0;
    H2[3] = H2[3] + d2 >>> 0;
    H2[4] = H2[4] + e7 >>> 0;
  }
  return [H2[0] >> 24 & 255, H2[0] >> 16 & 255, H2[0] >> 8 & 255, H2[0] & 255, H2[1] >> 24 & 255, H2[1] >> 16 & 255, H2[1] >> 8 & 255, H2[1] & 255, H2[2] >> 24 & 255, H2[2] >> 16 & 255, H2[2] >> 8 & 255, H2[2] & 255, H2[3] >> 24 & 255, H2[3] >> 16 & 255, H2[3] >> 8 & 255, H2[3] & 255, H2[4] >> 24 & 255, H2[4] >> 16 & 255, H2[4] >> 8 & 255, H2[4] & 255];
}
var sha1_default = sha1;

// node_modules/uuid/dist/esm-browser/v5.js
var v5 = v35_default("v5", 80, sha1_default);

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = { type: "error", data: "parser error" };

// node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({ type, data }, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
function toArray(data) {
  if (data instanceof Uint8Array) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  } else {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
}
var TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (withNativeBlob && packet.data instanceof Blob) {
    return packet.data.arrayBuffer().then(toArray).then(callback);
  } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
    return callback(toArray(packet.data));
  }
  encodePacket(packet, false, (encoded) => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}

// node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var decode = (base64) => {
  let bufferLength = base64.length * 0.75, len = base64.length, i, p2 = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p2++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p2++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p2++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return { base64: true, data };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      if (data instanceof Blob) {
        return data;
      } else {
        return new Blob([data]);
      }
    case "arraybuffer":
    default:
      if (data instanceof ArrayBuffer) {
        return data;
      } else {
        return data.buffer;
      }
  }
};

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
function createPacketEncoderStream() {
  return new TransformStream({
    transform(packet, controller) {
      encodePacketToBinary(packet, (encodedPacket) => {
        const payloadLength = encodedPacket.length;
        let header;
        if (payloadLength < 126) {
          header = new Uint8Array(1);
          new DataView(header.buffer).setUint8(0, payloadLength);
        } else if (payloadLength < 65536) {
          header = new Uint8Array(3);
          const view = new DataView(header.buffer);
          view.setUint8(0, 126);
          view.setUint16(1, payloadLength);
        } else {
          header = new Uint8Array(9);
          const view = new DataView(header.buffer);
          view.setUint8(0, 127);
          view.setBigUint64(1, BigInt(payloadLength));
        }
        if (packet.data && typeof packet.data !== "string") {
          header[0] |= 128;
        }
        controller.enqueue(header);
        controller.enqueue(encodedPacket);
      });
    }
  });
}
var TEXT_DECODER;
function totalLength(chunks) {
  return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
  if (chunks[0].length === size) {
    return chunks.shift();
  }
  const buffer = new Uint8Array(size);
  let j2 = 0;
  for (let i = 0; i < size; i++) {
    buffer[i] = chunks[0][j2++];
    if (j2 === chunks[0].length) {
      chunks.shift();
      j2 = 0;
    }
  }
  if (chunks.length && j2 < chunks[0].length) {
    chunks[0] = chunks[0].slice(j2);
  }
  return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  const chunks = [];
  let state = 0;
  let expectedLength = -1;
  let isBinary2 = false;
  return new TransformStream({
    transform(chunk, controller) {
      chunks.push(chunk);
      while (true) {
        if (state === 0) {
          if (totalLength(chunks) < 1) {
            break;
          }
          const header = concatChunks(chunks, 1);
          isBinary2 = (header[0] & 128) === 128;
          expectedLength = header[0] & 127;
          if (expectedLength < 126) {
            state = 3;
          } else if (expectedLength === 126) {
            state = 1;
          } else {
            state = 2;
          }
        } else if (state === 1) {
          if (totalLength(chunks) < 2) {
            break;
          }
          const headerArray = concatChunks(chunks, 2);
          expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
          state = 3;
        } else if (state === 2) {
          if (totalLength(chunks) < 8) {
            break;
          }
          const headerArray = concatChunks(chunks, 8);
          const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
          const n2 = view.getUint32(0);
          if (n2 > Math.pow(2, 53 - 32) - 1) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
          expectedLength = n2 * Math.pow(2, 32) + view.getUint32(4);
          state = 3;
        } else {
          if (totalLength(chunks) < expectedLength) {
            break;
          }
          const data = concatChunks(chunks, expectedLength);
          controller.enqueue(decodePacket(isBinary2 ? data : TEXT_DECODER.decode(data), binaryType));
          state = 0;
        }
        if (expectedLength === 0 || expectedLength > maxPayload) {
          controller.enqueue(ERROR_PACKET);
          break;
        }
      }
    }
  });
}
var protocol = 4;

// node_modules/@socket.io/component-emitter/lib/esm/index.js
function Emitter(obj) {
  if (obj) return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn2) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn2);
  return this;
};
Emitter.prototype.once = function(event, fn2) {
  function on3() {
    this.off(event, on3);
    fn2.apply(this, arguments);
  }
  on3.fn = fn2;
  this.on(event, on3);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn2) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks) return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn2 || cb.fn === fn2) {
      callbacks.splice(i, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function(event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function(event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function(event) {
  return !!this.listeners(event).length;
};

// node_modules/engine.io-client/build/esm/globals.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb) => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();
var defaultBinaryType = "arraybuffer";
function createCookieJar() {
}

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k2) => {
    if (obj.hasOwnProperty(k2)) {
      acc[k2] = obj[k2];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c2 = 0, length = 0;
  for (let i = 0, l2 = str.length; i < l2; i++) {
    c2 = str.charCodeAt(i);
    if (c2 < 128) {
      length += 1;
    } else if (c2 < 2048) {
      length += 2;
    } else if (c2 < 55296 || c2 >= 57344) {
      length += 3;
    } else {
      i++;
      length += 4;
    }
  }
  return length;
}
function randomString() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode(obj) {
  let str = "";
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
    }
  }
  return str;
}
function decode2(qs2) {
  let qry = {};
  let pairs = qs2.split("&");
  for (let i = 0, l2 = pairs.length; i < l2; i++) {
    let pair = pairs[i].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/transport.js
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
    this.supportsBinary = !opts.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   */
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  /**
   * Closes the transport.
   */
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {
    }
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(data) {
    const packet = decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(onPause) {
  }
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
};

// node_modules/engine.io-client/build/esm/transports/polling.js
var Polling = class extends Transport {
  constructor() {
    super(...arguments);
    this._polling = false;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this._polling || !this.writable) {
      let total = 0;
      if (this._polling) {
        total++;
        this.once("pollComplete", function() {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function() {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(data) {
    const callback = (packet) => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({ description: "transport closed by the server" });
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this._polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this._poll();
      } else {
      }
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const close = () => {
      this.write([{ type: "close" }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data) => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
};

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {
}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/polling-xhr.js
function empty() {
}
var BaseXHR = class extends Polling {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(opts) {
    super(opts);
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(data, fn2) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn2);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class _Request extends Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(createRequest, uri, opts) {
    super();
    this.createRequest = createRequest;
    installTimerFunctions(this, opts);
    this._opts = opts;
    this._method = opts.method || "GET";
    this._uri = uri;
    this._data = void 0 !== opts.data ? opts.data : null;
    this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var _a2;
    const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this._opts.xd;
    const xhr = this._xhr = this.createRequest(opts);
    try {
      xhr.open(this._method, this._uri, true);
      try {
        if (this._opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i in this._opts.extraHeaders) {
            if (this._opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
            }
          }
        }
      } catch (e7) {
      }
      if ("POST" === this._method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e7) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e7) {
      }
      (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this._opts.withCredentials;
      }
      if (this._opts.requestTimeout) {
        xhr.timeout = this._opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a3;
        if (xhr.readyState === 3) {
          (_a3 = this._opts.cookieJar) === null || _a3 === void 0 ? void 0 : _a3.parseCookies(
            // @ts-ignore
            xhr.getResponseHeader("set-cookie")
          );
        }
        if (4 !== xhr.readyState)
          return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this._onLoad();
        } else {
          this.setTimeoutFn(() => {
            this._onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this._data);
    } catch (e7) {
      this.setTimeoutFn(() => {
        this._onError(e7);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this._index = _Request.requestsCount++;
      _Request.requests[this._index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(err) {
    this.emitReserved("error", err, this._xhr);
    this._cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(fromError) {
    if ("undefined" === typeof this._xhr || null === this._xhr) {
      return;
    }
    this._xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this._xhr.abort();
      } catch (e7) {
      }
    }
    if (typeof document !== "undefined") {
      delete _Request.requests[this._index];
    }
    this._xhr = null;
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const data = this._xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this._cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}
var hasXHR2 = function() {
  const xhr = newRequest({
    xdomain: false
  });
  return xhr && xhr.responseType !== null;
}();
var XHR = class extends BaseXHR {
  constructor(opts) {
    super(opts);
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd }, this.opts);
    return new Request(newRequest, this.uri(), opts);
  }
};
function newRequest(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e7) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e7) {
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket.js
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var BaseWS = class extends Transport {
  get name() {
    return "websocket";
  }
  doOpen() {
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = this.createSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e7) => this.onError("websocket error", e7);
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data) => {
        try {
          this.doWrite(packet, data);
        } catch (e7) {
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.onerror = () => {
      };
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
};
var WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var WS = class extends BaseWS {
  createSocket(uri, protocols, opts) {
    return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
  }
  doWrite(_packet, data) {
    this.ws.send(data);
  }
};

// node_modules/engine.io-client/build/esm/transports/webtransport.js
var WT = class extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((err) => {
      this.onError("webtransport error", err);
    });
    this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((stream) => {
        const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = createPacketEncoderStream();
        encoderStream.readable.pipeTo(stream.writable);
        this._writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({ done, value: value2 }) => {
            if (done) {
              return;
            }
            this.onPacket(value2);
            read();
          }).catch((err) => {
          });
        };
        read();
        const packet = { type: "open" };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this._writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      this._writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a2;
    (_a2 = this._transport) === null || _a2 === void 0 ? void 0 : _a2.close();
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  webtransport: WT,
  polling: XHR
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function parse2(str) {
  if (str.length > 8e3) {
    throw "URI too long";
  }
  const src = str, b2 = str.indexOf("["), e7 = str.indexOf("]");
  if (b2 != -1 && e7 != -1) {
    str = str.substring(0, b2) + str.substring(b2, e7).replace(/:/g, ";") + str.substring(e7, str.length);
  }
  let m2 = re.exec(str || ""), uri = {}, i = 14;
  while (i--) {
    uri[parts[i]] = m2[i] || "";
  }
  if (b2 != -1 && e7 != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
var OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
  addEventListener("offline", () => {
    OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
  }, false);
}
var SocketWithoutUpgrade = class _SocketWithoutUpgrade extends Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(uri, opts) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    this._prevBufferLen = 0;
    this._pingInterval = -1;
    this._pingTimeout = -1;
    this._maxPayload = -1;
    this._pingTimeoutTime = Infinity;
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      const parsedUri = parse2(uri);
      opts.hostname = parsedUri.host;
      opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
      opts.port = parsedUri.port;
      if (parsedUri.query)
        opts.query = parsedUri.query;
    } else if (opts.host) {
      opts.hostname = parse2(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = [];
    this._transportsByName = {};
    opts.transports.forEach((t2) => {
      const transportName = t2.prototype.name;
      this.transports.push(transportName);
      this._transportsByName[transportName] = t2;
    });
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode2(this.opts.query);
    }
    if (withEventListeners) {
      if (this.opts.closeOnBeforeunload) {
        this._beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this._beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this._offlineEventListener = () => {
          this._onClose("transport close", {
            description: "network connection lost"
          });
        };
        OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
      }
    }
    if (this.opts.withCredentials) {
      this._cookieJar = createCookieJar();
    }
    this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    return new this._transportsByName[name](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const transportName = this.opts.rememberUpgrade && _SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const transport = this.createTransport(transportName);
    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason) => this._onClose("transport close", reason));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open";
    _SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this._sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          this._resetPingTimeout();
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this._onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {
    }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this._pingInterval = data.pingInterval;
    this._pingTimeout = data.pingTimeout;
    this._maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState)
      return;
    this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const delay = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + delay;
    this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, delay);
    if (this.opts.autoUnref) {
      this._pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen);
    this._prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this._getWritablePackets();
      this.transport.send(packets);
      this._prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const data = this.writeBuffer[i].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i > 0 && payloadSize > this._maxPayload) {
        return this.writeBuffer.slice(0, i);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return true;
    const hasExpired = Date.now() > this._pingTimeoutTime;
    if (hasExpired) {
      this._pingTimeoutTime = 0;
      nextTick(() => {
        this._onClose("ping timeout");
      }, this.setTimeoutFn);
    }
    return hasExpired;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(msg, options, fn2) {
    this._sendPacket("message", msg, options, fn2);
    return this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(msg, options, fn2) {
    this._sendPacket("message", msg, options, fn2);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(type, data, options, fn2) {
    if ("function" === typeof data) {
      fn2 = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn2 = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn2)
      this.once("flush", fn2);
    this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const close = () => {
      this._onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(err) {
    _SocketWithoutUpgrade.priorWebsocketSuccess = false;
    if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
      this.transports.shift();
      return this._open();
    }
    this.emitReserved("error", err);
    this._onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this._pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (withEventListeners) {
        if (this._beforeunloadEventListener) {
          removeEventListener("beforeunload", this._beforeunloadEventListener, false);
        }
        if (this._offlineEventListener) {
          const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
          if (i !== -1) {
            OFFLINE_EVENT_LISTENERS.splice(i, 1);
          }
        }
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this._prevBufferLen = 0;
    }
  }
};
SocketWithoutUpgrade.protocol = protocol;
var SocketWithUpgrade = class extends SocketWithoutUpgrade {
  constructor() {
    super(...arguments);
    this._upgrades = [];
  }
  onOpen() {
    super.onOpen();
    if ("open" === this.readyState && this.opts.upgrade) {
      for (let i = 0; i < this._upgrades.length; i++) {
        this._probe(this._upgrades[i]);
      }
    }
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed)
              return;
            if ("closed" === this.readyState)
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to2) {
      if (transport && to2.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  onHandshake(data) {
    this._upgrades = this._filterUpgrades(data.upgrades);
    super.onHandshake(data);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    for (let i = 0; i < upgrades.length; i++) {
      if (~this.transports.indexOf(upgrades[i]))
        filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  }
};
var Socket = class extends SocketWithUpgrade {
  constructor(uri, opts = {}) {
    const o = typeof uri === "object" ? uri : opts;
    if (!o.transports || o.transports && typeof o.transports[0] === "string") {
      o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map((transportName) => transports[transportName]).filter((t2) => !!t2);
    }
    super(uri, o);
  }
};

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;

// node_modules/socket.io-client/build/esm/url.js
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = parse2(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-parser/build/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol3
});

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer3 = typeof ArrayBuffer === "function";
var isView2 = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob2 = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer3 && (obj instanceof ArrayBuffer || isView2(obj)) || withNativeBlob2 && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l2 = obj.length; i < l2; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (isBinary(data)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var RESERVED_EVENTS = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
];
var protocol3 = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer) {
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
function isObject(value2) {
  return Object.prototype.toString.call(value2) === "[object Object]";
}
var Decoder = class _Decoder extends Emitter {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(str) {
    let i = 0;
    const p2 = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p2.type] === void 0) {
      throw new Error("unknown packet type " + p2.type);
    }
    if (p2.type === PacketType.BINARY_EVENT || p2.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {
      }
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p2.attachments = Number(buf);
    }
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c2 = str.charAt(i);
        if ("," === c2)
          break;
        if (i === str.length)
          break;
      }
      p2.nsp = str.substring(start, i);
    } else {
      p2.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c2 = str.charAt(i);
        if (null == c2 || Number(c2) != c2) {
          --i;
          break;
        }
        if (i === str.length)
          break;
      }
      p2.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (_Decoder.isPayloadValid(p2.type, payload)) {
        p2.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p2;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e7) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn2) {
  obj.on(ev, fn2);
  return function subDestroy() {
    obj.off(ev, fn2);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var RESERVED_EVENTS2 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
var Socket2 = class extends Emitter {
  /**
   * `Socket` constructor.
   */
  constructor(io2, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io2;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect)
      this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const io2 = this.io;
    this.subs = [
      on(io2, "open", this.onopen.bind(this)),
      on(io2, "packet", this.onpacket.bind(this)),
      on(io2, "error", this.onerror.bind(this)),
      on(io2, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if ("open" === this.io._readyState)
      this.onopen();
    return this;
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(ev, ...args) {
    var _a2, _b, _c2;
    if (RESERVED_EVENTS2.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id2 = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id2, ack);
      packet.id = id2;
    }
    const isTransportWritable = (_b = (_a2 = this.io.engine) === null || _a2 === void 0 ? void 0 : _a2.transport) === null || _b === void 0 ? void 0 : _b.writable;
    const isConnected = this.connected && !((_c2 = this.io.engine) === null || _c2 === void 0 ? void 0 : _c2._hasPingExpired());
    const discardPacket = this.flags.volatile && !isTransportWritable;
    if (discardPacket) {
    } else if (isConnected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  /**
   * @private
   */
  _registerAckCallback(id2, ack) {
    var _a2;
    const timeout = (_a2 = this.flags.timeout) !== null && _a2 !== void 0 ? _a2 : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id2] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id2];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id2) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    const fn2 = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, args);
    };
    fn2.withError = true;
    this.acks[id2] = fn2;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(ev, ...args) {
    return new Promise((resolve, reject) => {
      const fn2 = (arg1, arg2) => {
        return arg1 ? reject(arg1) : resolve(arg2);
      };
      fn2.withError = true;
      args.push(fn2);
      this.emit(ev, ...args);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({ fromQueue: true }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    if (typeof this.auth == "function") {
      this.auth((data) => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(data) {
    this.packet({
      type: PacketType.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
    this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((id2) => {
      const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id2);
      if (!isBuffered) {
        const ack = this.acks[id2];
        delete this.acks[id2];
        if (ack.withError) {
          ack.call(this, new Error("socket has been disconnected"));
        }
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(id2) {
    const self2 = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      self2.packet({
        type: PacketType.ACK,
        id: id2,
        data: args
      });
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(packet) {
    const ack = this.acks[packet.id];
    if (typeof ack !== "function") {
      return;
    }
    delete this.acks[packet.id];
    if (ack.withError) {
      packet.data.unshift(null);
    }
    ack.apply(this, packet.data);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(id2, pid) {
    this.id = id2;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    if (this.connected) {
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms2 = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms2);
    ms2 = (Math.floor(rand * 10) & 1) == 0 ? ms2 - deviation : ms2 + deviation;
  }
  return Math.min(ms2, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min) {
  this.ms = min;
};
Backoff.prototype.setMax = function(max) {
  this.max = max;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var Manager = class extends Emitter {
  constructor(uri, opts) {
    var _a2;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a2 = opts.randomizationFactor) !== null && _a2 !== void 0 ? _a2 : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || esm_exports;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v2) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v2;
    if (!v2) {
      this.skipReconnect = true;
    }
    return this;
  }
  reconnectionAttempts(v2) {
    if (v2 === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v2;
    return this;
  }
  reconnectionDelay(v2) {
    var _a2;
    if (v2 === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v2;
    (_a2 = this.backoff) === null || _a2 === void 0 ? void 0 : _a2.setMin(v2);
    return this;
  }
  randomizationFactor(v2) {
    var _a2;
    if (v2 === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v2;
    (_a2 = this.backoff) === null || _a2 === void 0 ? void 0 : _a2.setJitter(v2);
    return this;
  }
  reconnectionDelayMax(v2) {
    var _a2;
    if (v2 === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v2;
    (_a2 = this.backoff) === null || _a2 === void 0 ? void 0 : _a2.setMax(v2);
    return this;
  }
  timeout(v2) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v2;
    return this;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(fn2) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket(this.uri, this.opts);
    const socket = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self2.onopen();
      fn2 && fn2();
    });
    const onError = (err) => {
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn2) {
        fn2(err);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const errorSub = on(socket, "error", onError);
    if (false !== this._timeout) {
      const timeout = this._timeout;
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(fn2) {
    return this.open(fn2);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(
      on(socket, "ping", this.onping.bind(this)),
      on(socket, "data", this.ondata.bind(this)),
      on(socket, "error", this.onerror.bind(this)),
      on(socket, "close", this.onclose.bind(this)),
      // @ts-ignore
      on(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e7) {
      this.onclose("parse error", e7);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(packet) {
    nextTick(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(err) {
    this.emitReserved("error", err);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket2(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(reason, description) {
    var _a2;
    this.cleanup();
    (_a2 = this.engine) === null || _a2 === void 0 ? void 0 : _a2.close();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self2 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self2.skipReconnect)
          return;
        this.emitReserved("reconnect_attempt", self2.backoff.attempts);
        if (self2.skipReconnect)
          return;
        self2.open((err) => {
          if (err) {
            self2._reconnecting = false;
            self2.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self2.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var cache = {};
function lookup2(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id2 = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id2] && path in cache[id2]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io2;
  if (newConnection) {
    io2 = new Manager(source, opts);
  } else {
    if (!cache[id2]) {
      cache[id2] = new Manager(source, opts);
    }
    io2 = cache[id2];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io2.socket(parsed.path, opts);
}
Object.assign(lookup2, {
  Manager,
  Socket: Socket2,
  io: lookup2,
  connect: lookup2
});

// import("./**/*.entry.js") in node_modules/@metamask/sdk/dist/browser/es/metamask-sdk.js
var globImport_entry_js = __glob({});

// node_modules/@metamask/sdk/dist/browser/es/metamask-sdk.js
function a(e7, t2, n2, r2) {
  return new (n2 || (n2 = Promise))(function(i, o) {
    function s(e8) {
      try {
        c2(r2.next(e8));
      } catch (e9) {
        o(e9);
      }
    }
    function a2(e8) {
      try {
        c2(r2.throw(e8));
      } catch (e9) {
        o(e9);
      }
    }
    function c2(e8) {
      var t3;
      e8.done ? i(e8.value) : (t3 = e8.value, t3 instanceof n2 ? t3 : new n2(function(e9) {
        e9(t3);
      })).then(s, a2);
    }
    c2((r2 = r2.apply(e7, t2 || [])).next());
  });
}
var c = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
var l = [];
var d = [];
var u = "undefined" != typeof Uint8Array ? Uint8Array : Array;
var h = false;
function f2() {
  h = true;
  for (var e7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t2 = 0; t2 < 64; ++t2) l[t2] = e7[t2], d[e7.charCodeAt(t2)] = t2;
  d["-".charCodeAt(0)] = 62, d["_".charCodeAt(0)] = 63;
}
function p(e7, t2, n2) {
  for (var r2, i, o = [], s = t2; s < n2; s += 3) r2 = (e7[s] << 16) + (e7[s + 1] << 8) + e7[s + 2], o.push(l[(i = r2) >> 18 & 63] + l[i >> 12 & 63] + l[i >> 6 & 63] + l[63 & i]);
  return o.join("");
}
function g(e7) {
  var t2;
  h || f2();
  for (var n2 = e7.length, r2 = n2 % 3, i = "", o = [], s = 16383, a2 = 0, c2 = n2 - r2; a2 < c2; a2 += s) o.push(p(e7, a2, a2 + s > c2 ? c2 : a2 + s));
  return 1 === r2 ? (t2 = e7[n2 - 1], i += l[t2 >> 2], i += l[t2 << 4 & 63], i += "==") : 2 === r2 && (t2 = (e7[n2 - 2] << 8) + e7[n2 - 1], i += l[t2 >> 10], i += l[t2 >> 4 & 63], i += l[t2 << 2 & 63], i += "="), o.push(i), o.join("");
}
function m(e7, t2, n2, r2, i) {
  var o, s, a2 = 8 * i - r2 - 1, c2 = (1 << a2) - 1, l2 = c2 >> 1, d2 = -7, u2 = n2 ? i - 1 : 0, h2 = n2 ? -1 : 1, f3 = e7[t2 + u2];
  for (u2 += h2, o = f3 & (1 << -d2) - 1, f3 >>= -d2, d2 += a2; d2 > 0; o = 256 * o + e7[t2 + u2], u2 += h2, d2 -= 8) ;
  for (s = o & (1 << -d2) - 1, o >>= -d2, d2 += r2; d2 > 0; s = 256 * s + e7[t2 + u2], u2 += h2, d2 -= 8) ;
  if (0 === o) o = 1 - l2;
  else {
    if (o === c2) return s ? NaN : 1 / 0 * (f3 ? -1 : 1);
    s += Math.pow(2, r2), o -= l2;
  }
  return (f3 ? -1 : 1) * s * Math.pow(2, o - r2);
}
function y(e7, t2, n2, r2, i, o) {
  var s, a2, c2, l2 = 8 * o - i - 1, d2 = (1 << l2) - 1, u2 = d2 >> 1, h2 = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f3 = r2 ? 0 : o - 1, p2 = r2 ? 1 : -1, g2 = t2 < 0 || 0 === t2 && 1 / t2 < 0 ? 1 : 0;
  for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (a2 = isNaN(t2) ? 1 : 0, s = d2) : (s = Math.floor(Math.log(t2) / Math.LN2), t2 * (c2 = Math.pow(2, -s)) < 1 && (s--, c2 *= 2), (t2 += s + u2 >= 1 ? h2 / c2 : h2 * Math.pow(2, 1 - u2)) * c2 >= 2 && (s++, c2 /= 2), s + u2 >= d2 ? (a2 = 0, s = d2) : s + u2 >= 1 ? (a2 = (t2 * c2 - 1) * Math.pow(2, i), s += u2) : (a2 = t2 * Math.pow(2, u2 - 1) * Math.pow(2, i), s = 0)); i >= 8; e7[n2 + f3] = 255 & a2, f3 += p2, a2 /= 256, i -= 8) ;
  for (s = s << i | a2, l2 += i; l2 > 0; e7[n2 + f3] = 255 & s, f3 += p2, s /= 256, l2 -= 8) ;
  e7[n2 + f3 - p2] |= 128 * g2;
}
var v = {}.toString;
var b = Array.isArray || function(e7) {
  return "[object Array]" == v.call(e7);
};
S.TYPED_ARRAY_SUPPORT = void 0 === c.TYPED_ARRAY_SUPPORT || c.TYPED_ARRAY_SUPPORT;
var w = E();
function E() {
  return S.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function C(e7, t2) {
  if (E() < t2) throw new RangeError("Invalid typed array length");
  return S.TYPED_ARRAY_SUPPORT ? (e7 = new Uint8Array(t2)).__proto__ = S.prototype : (null === e7 && (e7 = new S(t2)), e7.length = t2), e7;
}
function S(e7, t2, n2) {
  if (!(S.TYPED_ARRAY_SUPPORT || this instanceof S)) return new S(e7, t2, n2);
  if ("number" == typeof e7) {
    if ("string" == typeof t2) throw new Error("If encoding is specified then the first argument must be a string");
    return x(this, e7);
  }
  return _(this, e7, t2, n2);
}
function _(e7, t2, n2, r2) {
  if ("number" == typeof t2) throw new TypeError('"value" argument must not be a number');
  return "undefined" != typeof ArrayBuffer && t2 instanceof ArrayBuffer ? function(e8, t3, n3, r3) {
    if (t3.byteLength, n3 < 0 || t3.byteLength < n3) throw new RangeError("'offset' is out of bounds");
    if (t3.byteLength < n3 + (r3 || 0)) throw new RangeError("'length' is out of bounds");
    t3 = void 0 === n3 && void 0 === r3 ? new Uint8Array(t3) : void 0 === r3 ? new Uint8Array(t3, n3) : new Uint8Array(t3, n3, r3);
    S.TYPED_ARRAY_SUPPORT ? (e8 = t3).__proto__ = S.prototype : e8 = M(e8, t3);
    return e8;
  }(e7, t2, n2, r2) : "string" == typeof t2 ? function(e8, t3, n3) {
    "string" == typeof n3 && "" !== n3 || (n3 = "utf8");
    if (!S.isEncoding(n3)) throw new TypeError('"encoding" must be a valid string encoding');
    var r3 = 0 | R(t3, n3);
    e8 = C(e8, r3);
    var i = e8.write(t3, n3);
    i !== r3 && (e8 = e8.slice(0, i));
    return e8;
  }(e7, t2, n2) : function(e8, t3) {
    if (I(t3)) {
      var n3 = 0 | A(t3.length);
      return 0 === (e8 = C(e8, n3)).length || t3.copy(e8, 0, 0, n3), e8;
    }
    if (t3) {
      if ("undefined" != typeof ArrayBuffer && t3.buffer instanceof ArrayBuffer || "length" in t3) return "number" != typeof t3.length || (r3 = t3.length) != r3 ? C(e8, 0) : M(e8, t3);
      if ("Buffer" === t3.type && b(t3.data)) return M(e8, t3.data);
    }
    var r3;
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
  }(e7, t2);
}
function k(e7) {
  if ("number" != typeof e7) throw new TypeError('"size" argument must be a number');
  if (e7 < 0) throw new RangeError('"size" argument must not be negative');
}
function x(e7, t2) {
  if (k(t2), e7 = C(e7, t2 < 0 ? 0 : 0 | A(t2)), !S.TYPED_ARRAY_SUPPORT) for (var n2 = 0; n2 < t2; ++n2) e7[n2] = 0;
  return e7;
}
function M(e7, t2) {
  var n2 = t2.length < 0 ? 0 : 0 | A(t2.length);
  e7 = C(e7, n2);
  for (var r2 = 0; r2 < n2; r2 += 1) e7[r2] = 255 & t2[r2];
  return e7;
}
function A(e7) {
  if (e7 >= E()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + E().toString(16) + " bytes");
  return 0 | e7;
}
function I(e7) {
  return !(null == e7 || !e7._isBuffer);
}
function R(e7, t2) {
  if (I(e7)) return e7.length;
  if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e7) || e7 instanceof ArrayBuffer)) return e7.byteLength;
  "string" != typeof e7 && (e7 = "" + e7);
  var n2 = e7.length;
  if (0 === n2) return 0;
  for (var r2 = false; ; ) switch (t2) {
    case "ascii":
    case "latin1":
    case "binary":
      return n2;
    case "utf8":
    case "utf-8":
    case void 0:
      return re2(e7).length;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return 2 * n2;
    case "hex":
      return n2 >>> 1;
    case "base64":
      return ie(e7).length;
    default:
      if (r2) return re2(e7).length;
      t2 = ("" + t2).toLowerCase(), r2 = true;
  }
}
function P(e7, t2, n2) {
  var r2 = false;
  if ((void 0 === t2 || t2 < 0) && (t2 = 0), t2 > this.length) return "";
  if ((void 0 === n2 || n2 > this.length) && (n2 = this.length), n2 <= 0) return "";
  if ((n2 >>>= 0) <= (t2 >>>= 0)) return "";
  for (e7 || (e7 = "utf8"); ; ) switch (e7) {
    case "hex":
      return V(this, t2, n2);
    case "utf8":
    case "utf-8":
      return H(this, t2, n2);
    case "ascii":
      return z(this, t2, n2);
    case "latin1":
    case "binary":
      return q(this, t2, n2);
    case "base64":
      return U(this, t2, n2);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return W(this, t2, n2);
    default:
      if (r2) throw new TypeError("Unknown encoding: " + e7);
      e7 = (e7 + "").toLowerCase(), r2 = true;
  }
}
function L(e7, t2, n2) {
  var r2 = e7[t2];
  e7[t2] = e7[n2], e7[n2] = r2;
}
function O(e7, t2, n2, r2, i) {
  if (0 === e7.length) return -1;
  if ("string" == typeof n2 ? (r2 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, isNaN(n2) && (n2 = i ? 0 : e7.length - 1), n2 < 0 && (n2 = e7.length + n2), n2 >= e7.length) {
    if (i) return -1;
    n2 = e7.length - 1;
  } else if (n2 < 0) {
    if (!i) return -1;
    n2 = 0;
  }
  if ("string" == typeof t2 && (t2 = S.from(t2, r2)), I(t2)) return 0 === t2.length ? -1 : T(e7, t2, n2, r2, i);
  if ("number" == typeof t2) return t2 &= 255, S.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e7, t2, n2) : Uint8Array.prototype.lastIndexOf.call(e7, t2, n2) : T(e7, [t2], n2, r2, i);
  throw new TypeError("val must be string, number or Buffer");
}
function T(e7, t2, n2, r2, i) {
  var o, s = 1, a2 = e7.length, c2 = t2.length;
  if (void 0 !== r2 && ("ucs2" === (r2 = String(r2).toLowerCase()) || "ucs-2" === r2 || "utf16le" === r2 || "utf-16le" === r2)) {
    if (e7.length < 2 || t2.length < 2) return -1;
    s = 2, a2 /= 2, c2 /= 2, n2 /= 2;
  }
  function l2(e8, t3) {
    return 1 === s ? e8[t3] : e8.readUInt16BE(t3 * s);
  }
  if (i) {
    var d2 = -1;
    for (o = n2; o < a2; o++) if (l2(e7, o) === l2(t2, -1 === d2 ? 0 : o - d2)) {
      if (-1 === d2 && (d2 = o), o - d2 + 1 === c2) return d2 * s;
    } else -1 !== d2 && (o -= o - d2), d2 = -1;
  } else for (n2 + c2 > a2 && (n2 = a2 - c2), o = n2; o >= 0; o--) {
    for (var u2 = true, h2 = 0; h2 < c2; h2++) if (l2(e7, o + h2) !== l2(t2, h2)) {
      u2 = false;
      break;
    }
    if (u2) return o;
  }
  return -1;
}
function N(e7, t2, n2, r2) {
  n2 = Number(n2) || 0;
  var i = e7.length - n2;
  r2 ? (r2 = Number(r2)) > i && (r2 = i) : r2 = i;
  var o = t2.length;
  if (o % 2 != 0) throw new TypeError("Invalid hex string");
  r2 > o / 2 && (r2 = o / 2);
  for (var s = 0; s < r2; ++s) {
    var a2 = parseInt(t2.substr(2 * s, 2), 16);
    if (isNaN(a2)) return s;
    e7[n2 + s] = a2;
  }
  return s;
}
function D(e7, t2, n2, r2) {
  return oe(re2(t2, e7.length - n2), e7, n2, r2);
}
function $(e7, t2, n2, r2) {
  return oe(function(e8) {
    for (var t3 = [], n3 = 0; n3 < e8.length; ++n3) t3.push(255 & e8.charCodeAt(n3));
    return t3;
  }(t2), e7, n2, r2);
}
function B(e7, t2, n2, r2) {
  return $(e7, t2, n2, r2);
}
function K(e7, t2, n2, r2) {
  return oe(ie(t2), e7, n2, r2);
}
function j(e7, t2, n2, r2) {
  return oe(function(e8, t3) {
    for (var n3, r3, i, o = [], s = 0; s < e8.length && !((t3 -= 2) < 0); ++s) r3 = (n3 = e8.charCodeAt(s)) >> 8, i = n3 % 256, o.push(i), o.push(r3);
    return o;
  }(t2, e7.length - n2), e7, n2, r2);
}
function U(e7, t2, n2) {
  return 0 === t2 && n2 === e7.length ? g(e7) : g(e7.slice(t2, n2));
}
function H(e7, t2, n2) {
  n2 = Math.min(e7.length, n2);
  for (var r2 = [], i = t2; i < n2; ) {
    var o, s, a2, c2, l2 = e7[i], d2 = null, u2 = l2 > 239 ? 4 : l2 > 223 ? 3 : l2 > 191 ? 2 : 1;
    if (i + u2 <= n2) switch (u2) {
      case 1:
        l2 < 128 && (d2 = l2);
        break;
      case 2:
        128 == (192 & (o = e7[i + 1])) && (c2 = (31 & l2) << 6 | 63 & o) > 127 && (d2 = c2);
        break;
      case 3:
        o = e7[i + 1], s = e7[i + 2], 128 == (192 & o) && 128 == (192 & s) && (c2 = (15 & l2) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (c2 < 55296 || c2 > 57343) && (d2 = c2);
        break;
      case 4:
        o = e7[i + 1], s = e7[i + 2], a2 = e7[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a2) && (c2 = (15 & l2) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a2) > 65535 && c2 < 1114112 && (d2 = c2);
    }
    null === d2 ? (d2 = 65533, u2 = 1) : d2 > 65535 && (d2 -= 65536, r2.push(d2 >>> 10 & 1023 | 55296), d2 = 56320 | 1023 & d2), r2.push(d2), i += u2;
  }
  return function(e8) {
    var t3 = e8.length;
    if (t3 <= F) return String.fromCharCode.apply(String, e8);
    var n3 = "", r3 = 0;
    for (; r3 < t3; ) n3 += String.fromCharCode.apply(String, e8.slice(r3, r3 += F));
    return n3;
  }(r2);
}
S.poolSize = 8192, S._augment = function(e7) {
  return e7.__proto__ = S.prototype, e7;
}, S.from = function(e7, t2, n2) {
  return _(null, e7, t2, n2);
}, S.TYPED_ARRAY_SUPPORT && (S.prototype.__proto__ = Uint8Array.prototype, S.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && S[Symbol.species]), S.alloc = function(e7, t2, n2) {
  return function(e8, t3, n3, r2) {
    return k(t3), t3 <= 0 ? C(e8, t3) : void 0 !== n3 ? "string" == typeof r2 ? C(e8, t3).fill(n3, r2) : C(e8, t3).fill(n3) : C(e8, t3);
  }(null, e7, t2, n2);
}, S.allocUnsafe = function(e7) {
  return x(null, e7);
}, S.allocUnsafeSlow = function(e7) {
  return x(null, e7);
}, S.isBuffer = se, S.compare = function(e7, t2) {
  if (!I(e7) || !I(t2)) throw new TypeError("Arguments must be Buffers");
  if (e7 === t2) return 0;
  for (var n2 = e7.length, r2 = t2.length, i = 0, o = Math.min(n2, r2); i < o; ++i) if (e7[i] !== t2[i]) {
    n2 = e7[i], r2 = t2[i];
    break;
  }
  return n2 < r2 ? -1 : r2 < n2 ? 1 : 0;
}, S.isEncoding = function(e7) {
  switch (String(e7).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
}, S.concat = function(e7, t2) {
  if (!b(e7)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (0 === e7.length) return S.alloc(0);
  var n2;
  if (void 0 === t2) for (t2 = 0, n2 = 0; n2 < e7.length; ++n2) t2 += e7[n2].length;
  var r2 = S.allocUnsafe(t2), i = 0;
  for (n2 = 0; n2 < e7.length; ++n2) {
    var o = e7[n2];
    if (!I(o)) throw new TypeError('"list" argument must be an Array of Buffers');
    o.copy(r2, i), i += o.length;
  }
  return r2;
}, S.byteLength = R, S.prototype._isBuffer = true, S.prototype.swap16 = function() {
  var e7 = this.length;
  if (e7 % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var t2 = 0; t2 < e7; t2 += 2) L(this, t2, t2 + 1);
  return this;
}, S.prototype.swap32 = function() {
  var e7 = this.length;
  if (e7 % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var t2 = 0; t2 < e7; t2 += 4) L(this, t2, t2 + 3), L(this, t2 + 1, t2 + 2);
  return this;
}, S.prototype.swap64 = function() {
  var e7 = this.length;
  if (e7 % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var t2 = 0; t2 < e7; t2 += 8) L(this, t2, t2 + 7), L(this, t2 + 1, t2 + 6), L(this, t2 + 2, t2 + 5), L(this, t2 + 3, t2 + 4);
  return this;
}, S.prototype.toString = function() {
  var e7 = 0 | this.length;
  return 0 === e7 ? "" : 0 === arguments.length ? H(this, 0, e7) : P.apply(this, arguments);
}, S.prototype.equals = function(e7) {
  if (!I(e7)) throw new TypeError("Argument must be a Buffer");
  return this === e7 || 0 === S.compare(this, e7);
}, S.prototype.inspect = function() {
  var e7 = "";
  return this.length > 0 && (e7 = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e7 += " ... ")), "<Buffer " + e7 + ">";
}, S.prototype.compare = function(e7, t2, n2, r2, i) {
  if (!I(e7)) throw new TypeError("Argument must be a Buffer");
  if (void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = e7 ? e7.length : 0), void 0 === r2 && (r2 = 0), void 0 === i && (i = this.length), t2 < 0 || n2 > e7.length || r2 < 0 || i > this.length) throw new RangeError("out of range index");
  if (r2 >= i && t2 >= n2) return 0;
  if (r2 >= i) return -1;
  if (t2 >= n2) return 1;
  if (this === e7) return 0;
  for (var o = (i >>>= 0) - (r2 >>>= 0), s = (n2 >>>= 0) - (t2 >>>= 0), a2 = Math.min(o, s), c2 = this.slice(r2, i), l2 = e7.slice(t2, n2), d2 = 0; d2 < a2; ++d2) if (c2[d2] !== l2[d2]) {
    o = c2[d2], s = l2[d2];
    break;
  }
  return o < s ? -1 : s < o ? 1 : 0;
}, S.prototype.includes = function(e7, t2, n2) {
  return -1 !== this.indexOf(e7, t2, n2);
}, S.prototype.indexOf = function(e7, t2, n2) {
  return O(this, e7, t2, n2, true);
}, S.prototype.lastIndexOf = function(e7, t2, n2) {
  return O(this, e7, t2, n2, false);
}, S.prototype.write = function(e7, t2, n2, r2) {
  if (void 0 === t2) r2 = "utf8", n2 = this.length, t2 = 0;
  else if (void 0 === n2 && "string" == typeof t2) r2 = t2, n2 = this.length, t2 = 0;
  else {
    if (!isFinite(t2)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    t2 |= 0, isFinite(n2) ? (n2 |= 0, void 0 === r2 && (r2 = "utf8")) : (r2 = n2, n2 = void 0);
  }
  var i = this.length - t2;
  if ((void 0 === n2 || n2 > i) && (n2 = i), e7.length > 0 && (n2 < 0 || t2 < 0) || t2 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
  r2 || (r2 = "utf8");
  for (var o = false; ; ) switch (r2) {
    case "hex":
      return N(this, e7, t2, n2);
    case "utf8":
    case "utf-8":
      return D(this, e7, t2, n2);
    case "ascii":
      return $(this, e7, t2, n2);
    case "latin1":
    case "binary":
      return B(this, e7, t2, n2);
    case "base64":
      return K(this, e7, t2, n2);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return j(this, e7, t2, n2);
    default:
      if (o) throw new TypeError("Unknown encoding: " + r2);
      r2 = ("" + r2).toLowerCase(), o = true;
  }
}, S.prototype.toJSON = function() {
  return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
};
var F = 4096;
function z(e7, t2, n2) {
  var r2 = "";
  n2 = Math.min(e7.length, n2);
  for (var i = t2; i < n2; ++i) r2 += String.fromCharCode(127 & e7[i]);
  return r2;
}
function q(e7, t2, n2) {
  var r2 = "";
  n2 = Math.min(e7.length, n2);
  for (var i = t2; i < n2; ++i) r2 += String.fromCharCode(e7[i]);
  return r2;
}
function V(e7, t2, n2) {
  var r2 = e7.length;
  (!t2 || t2 < 0) && (t2 = 0), (!n2 || n2 < 0 || n2 > r2) && (n2 = r2);
  for (var i = "", o = t2; o < n2; ++o) i += ne(e7[o]);
  return i;
}
function W(e7, t2, n2) {
  for (var r2 = e7.slice(t2, n2), i = "", o = 0; o < r2.length; o += 2) i += String.fromCharCode(r2[o] + 256 * r2[o + 1]);
  return i;
}
function G(e7, t2, n2) {
  if (e7 % 1 != 0 || e7 < 0) throw new RangeError("offset is not uint");
  if (e7 + t2 > n2) throw new RangeError("Trying to access beyond buffer length");
}
function Z(e7, t2, n2, r2, i, o) {
  if (!I(e7)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (t2 > i || t2 < o) throw new RangeError('"value" argument is out of bounds');
  if (n2 + r2 > e7.length) throw new RangeError("Index out of range");
}
function Y(e7, t2, n2, r2) {
  t2 < 0 && (t2 = 65535 + t2 + 1);
  for (var i = 0, o = Math.min(e7.length - n2, 2); i < o; ++i) e7[n2 + i] = (t2 & 255 << 8 * (r2 ? i : 1 - i)) >>> 8 * (r2 ? i : 1 - i);
}
function J(e7, t2, n2, r2) {
  t2 < 0 && (t2 = 4294967295 + t2 + 1);
  for (var i = 0, o = Math.min(e7.length - n2, 4); i < o; ++i) e7[n2 + i] = t2 >>> 8 * (r2 ? i : 3 - i) & 255;
}
function X(e7, t2, n2, r2, i, o) {
  if (n2 + r2 > e7.length) throw new RangeError("Index out of range");
  if (n2 < 0) throw new RangeError("Index out of range");
}
function Q(e7, t2, n2, r2, i) {
  return i || X(e7, 0, n2, 4), y(e7, t2, n2, r2, 23, 4), n2 + 4;
}
function ee(e7, t2, n2, r2, i) {
  return i || X(e7, 0, n2, 8), y(e7, t2, n2, r2, 52, 8), n2 + 8;
}
S.prototype.slice = function(e7, t2) {
  var n2, r2 = this.length;
  if ((e7 = ~~e7) < 0 ? (e7 += r2) < 0 && (e7 = 0) : e7 > r2 && (e7 = r2), (t2 = void 0 === t2 ? r2 : ~~t2) < 0 ? (t2 += r2) < 0 && (t2 = 0) : t2 > r2 && (t2 = r2), t2 < e7 && (t2 = e7), S.TYPED_ARRAY_SUPPORT) (n2 = this.subarray(e7, t2)).__proto__ = S.prototype;
  else {
    var i = t2 - e7;
    n2 = new S(i, void 0);
    for (var o = 0; o < i; ++o) n2[o] = this[o + e7];
  }
  return n2;
}, S.prototype.readUIntLE = function(e7, t2, n2) {
  e7 |= 0, t2 |= 0, n2 || G(e7, t2, this.length);
  for (var r2 = this[e7], i = 1, o = 0; ++o < t2 && (i *= 256); ) r2 += this[e7 + o] * i;
  return r2;
}, S.prototype.readUIntBE = function(e7, t2, n2) {
  e7 |= 0, t2 |= 0, n2 || G(e7, t2, this.length);
  for (var r2 = this[e7 + --t2], i = 1; t2 > 0 && (i *= 256); ) r2 += this[e7 + --t2] * i;
  return r2;
}, S.prototype.readUInt8 = function(e7, t2) {
  return t2 || G(e7, 1, this.length), this[e7];
}, S.prototype.readUInt16LE = function(e7, t2) {
  return t2 || G(e7, 2, this.length), this[e7] | this[e7 + 1] << 8;
}, S.prototype.readUInt16BE = function(e7, t2) {
  return t2 || G(e7, 2, this.length), this[e7] << 8 | this[e7 + 1];
}, S.prototype.readUInt32LE = function(e7, t2) {
  return t2 || G(e7, 4, this.length), (this[e7] | this[e7 + 1] << 8 | this[e7 + 2] << 16) + 16777216 * this[e7 + 3];
}, S.prototype.readUInt32BE = function(e7, t2) {
  return t2 || G(e7, 4, this.length), 16777216 * this[e7] + (this[e7 + 1] << 16 | this[e7 + 2] << 8 | this[e7 + 3]);
}, S.prototype.readIntLE = function(e7, t2, n2) {
  e7 |= 0, t2 |= 0, n2 || G(e7, t2, this.length);
  for (var r2 = this[e7], i = 1, o = 0; ++o < t2 && (i *= 256); ) r2 += this[e7 + o] * i;
  return r2 >= (i *= 128) && (r2 -= Math.pow(2, 8 * t2)), r2;
}, S.prototype.readIntBE = function(e7, t2, n2) {
  e7 |= 0, t2 |= 0, n2 || G(e7, t2, this.length);
  for (var r2 = t2, i = 1, o = this[e7 + --r2]; r2 > 0 && (i *= 256); ) o += this[e7 + --r2] * i;
  return o >= (i *= 128) && (o -= Math.pow(2, 8 * t2)), o;
}, S.prototype.readInt8 = function(e7, t2) {
  return t2 || G(e7, 1, this.length), 128 & this[e7] ? -1 * (255 - this[e7] + 1) : this[e7];
}, S.prototype.readInt16LE = function(e7, t2) {
  t2 || G(e7, 2, this.length);
  var n2 = this[e7] | this[e7 + 1] << 8;
  return 32768 & n2 ? 4294901760 | n2 : n2;
}, S.prototype.readInt16BE = function(e7, t2) {
  t2 || G(e7, 2, this.length);
  var n2 = this[e7 + 1] | this[e7] << 8;
  return 32768 & n2 ? 4294901760 | n2 : n2;
}, S.prototype.readInt32LE = function(e7, t2) {
  return t2 || G(e7, 4, this.length), this[e7] | this[e7 + 1] << 8 | this[e7 + 2] << 16 | this[e7 + 3] << 24;
}, S.prototype.readInt32BE = function(e7, t2) {
  return t2 || G(e7, 4, this.length), this[e7] << 24 | this[e7 + 1] << 16 | this[e7 + 2] << 8 | this[e7 + 3];
}, S.prototype.readFloatLE = function(e7, t2) {
  return t2 || G(e7, 4, this.length), m(this, e7, true, 23, 4);
}, S.prototype.readFloatBE = function(e7, t2) {
  return t2 || G(e7, 4, this.length), m(this, e7, false, 23, 4);
}, S.prototype.readDoubleLE = function(e7, t2) {
  return t2 || G(e7, 8, this.length), m(this, e7, true, 52, 8);
}, S.prototype.readDoubleBE = function(e7, t2) {
  return t2 || G(e7, 8, this.length), m(this, e7, false, 52, 8);
}, S.prototype.writeUIntLE = function(e7, t2, n2, r2) {
  (e7 = +e7, t2 |= 0, n2 |= 0, r2) || Z(this, e7, t2, n2, Math.pow(2, 8 * n2) - 1, 0);
  var i = 1, o = 0;
  for (this[t2] = 255 & e7; ++o < n2 && (i *= 256); ) this[t2 + o] = e7 / i & 255;
  return t2 + n2;
}, S.prototype.writeUIntBE = function(e7, t2, n2, r2) {
  (e7 = +e7, t2 |= 0, n2 |= 0, r2) || Z(this, e7, t2, n2, Math.pow(2, 8 * n2) - 1, 0);
  var i = n2 - 1, o = 1;
  for (this[t2 + i] = 255 & e7; --i >= 0 && (o *= 256); ) this[t2 + i] = e7 / o & 255;
  return t2 + n2;
}, S.prototype.writeUInt8 = function(e7, t2, n2) {
  return e7 = +e7, t2 |= 0, n2 || Z(this, e7, t2, 1, 255, 0), S.TYPED_ARRAY_SUPPORT || (e7 = Math.floor(e7)), this[t2] = 255 & e7, t2 + 1;
}, S.prototype.writeUInt16LE = function(e7, t2, n2) {
  return e7 = +e7, t2 |= 0, n2 || Z(this, e7, t2, 2, 65535, 0), S.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e7, this[t2 + 1] = e7 >>> 8) : Y(this, e7, t2, true), t2 + 2;
}, S.prototype.writeUInt16BE = function(e7, t2, n2) {
  return e7 = +e7, t2 |= 0, n2 || Z(this, e7, t2, 2, 65535, 0), S.TYPED_ARRAY_SUPPORT ? (this[t2] = e7 >>> 8, this[t2 + 1] = 255 & e7) : Y(this, e7, t2, false), t2 + 2;
}, S.prototype.writeUInt32LE = function(e7, t2, n2) {
  return e7 = +e7, t2 |= 0, n2 || Z(this, e7, t2, 4, 4294967295, 0), S.TYPED_ARRAY_SUPPORT ? (this[t2 + 3] = e7 >>> 24, this[t2 + 2] = e7 >>> 16, this[t2 + 1] = e7 >>> 8, this[t2] = 255 & e7) : J(this, e7, t2, true), t2 + 4;
}, S.prototype.writeUInt32BE = function(e7, t2, n2) {
  return e7 = +e7, t2 |= 0, n2 || Z(this, e7, t2, 4, 4294967295, 0), S.TYPED_ARRAY_SUPPORT ? (this[t2] = e7 >>> 24, this[t2 + 1] = e7 >>> 16, this[t2 + 2] = e7 >>> 8, this[t2 + 3] = 255 & e7) : J(this, e7, t2, false), t2 + 4;
}, S.prototype.writeIntLE = function(e7, t2, n2, r2) {
  if (e7 = +e7, t2 |= 0, !r2) {
    var i = Math.pow(2, 8 * n2 - 1);
    Z(this, e7, t2, n2, i - 1, -i);
  }
  var o = 0, s = 1, a2 = 0;
  for (this[t2] = 255 & e7; ++o < n2 && (s *= 256); ) e7 < 0 && 0 === a2 && 0 !== this[t2 + o - 1] && (a2 = 1), this[t2 + o] = (e7 / s >> 0) - a2 & 255;
  return t2 + n2;
}, S.prototype.writeIntBE = function(e7, t2, n2, r2) {
  if (e7 = +e7, t2 |= 0, !r2) {
    var i = Math.pow(2, 8 * n2 - 1);
    Z(this, e7, t2, n2, i - 1, -i);
  }
  var o = n2 - 1, s = 1, a2 = 0;
  for (this[t2 + o] = 255 & e7; --o >= 0 && (s *= 256); ) e7 < 0 && 0 === a2 && 0 !== this[t2 + o + 1] && (a2 = 1), this[t2 + o] = (e7 / s >> 0) - a2 & 255;
  return t2 + n2;
}, S.prototype.writeInt8 = function(e7, t2, n2) {
  return e7 = +e7, t2 |= 0, n2 || Z(this, e7, t2, 1, 127, -128), S.TYPED_ARRAY_SUPPORT || (e7 = Math.floor(e7)), e7 < 0 && (e7 = 255 + e7 + 1), this[t2] = 255 & e7, t2 + 1;
}, S.prototype.writeInt16LE = function(e7, t2, n2) {
  return e7 = +e7, t2 |= 0, n2 || Z(this, e7, t2, 2, 32767, -32768), S.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e7, this[t2 + 1] = e7 >>> 8) : Y(this, e7, t2, true), t2 + 2;
}, S.prototype.writeInt16BE = function(e7, t2, n2) {
  return e7 = +e7, t2 |= 0, n2 || Z(this, e7, t2, 2, 32767, -32768), S.TYPED_ARRAY_SUPPORT ? (this[t2] = e7 >>> 8, this[t2 + 1] = 255 & e7) : Y(this, e7, t2, false), t2 + 2;
}, S.prototype.writeInt32LE = function(e7, t2, n2) {
  return e7 = +e7, t2 |= 0, n2 || Z(this, e7, t2, 4, 2147483647, -2147483648), S.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e7, this[t2 + 1] = e7 >>> 8, this[t2 + 2] = e7 >>> 16, this[t2 + 3] = e7 >>> 24) : J(this, e7, t2, true), t2 + 4;
}, S.prototype.writeInt32BE = function(e7, t2, n2) {
  return e7 = +e7, t2 |= 0, n2 || Z(this, e7, t2, 4, 2147483647, -2147483648), e7 < 0 && (e7 = 4294967295 + e7 + 1), S.TYPED_ARRAY_SUPPORT ? (this[t2] = e7 >>> 24, this[t2 + 1] = e7 >>> 16, this[t2 + 2] = e7 >>> 8, this[t2 + 3] = 255 & e7) : J(this, e7, t2, false), t2 + 4;
}, S.prototype.writeFloatLE = function(e7, t2, n2) {
  return Q(this, e7, t2, true, n2);
}, S.prototype.writeFloatBE = function(e7, t2, n2) {
  return Q(this, e7, t2, false, n2);
}, S.prototype.writeDoubleLE = function(e7, t2, n2) {
  return ee(this, e7, t2, true, n2);
}, S.prototype.writeDoubleBE = function(e7, t2, n2) {
  return ee(this, e7, t2, false, n2);
}, S.prototype.copy = function(e7, t2, n2, r2) {
  if (n2 || (n2 = 0), r2 || 0 === r2 || (r2 = this.length), t2 >= e7.length && (t2 = e7.length), t2 || (t2 = 0), r2 > 0 && r2 < n2 && (r2 = n2), r2 === n2) return 0;
  if (0 === e7.length || 0 === this.length) return 0;
  if (t2 < 0) throw new RangeError("targetStart out of bounds");
  if (n2 < 0 || n2 >= this.length) throw new RangeError("sourceStart out of bounds");
  if (r2 < 0) throw new RangeError("sourceEnd out of bounds");
  r2 > this.length && (r2 = this.length), e7.length - t2 < r2 - n2 && (r2 = e7.length - t2 + n2);
  var i, o = r2 - n2;
  if (this === e7 && n2 < t2 && t2 < r2) for (i = o - 1; i >= 0; --i) e7[i + t2] = this[i + n2];
  else if (o < 1e3 || !S.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) e7[i + t2] = this[i + n2];
  else Uint8Array.prototype.set.call(e7, this.subarray(n2, n2 + o), t2);
  return o;
}, S.prototype.fill = function(e7, t2, n2, r2) {
  if ("string" == typeof e7) {
    if ("string" == typeof t2 ? (r2 = t2, t2 = 0, n2 = this.length) : "string" == typeof n2 && (r2 = n2, n2 = this.length), 1 === e7.length) {
      var i = e7.charCodeAt(0);
      i < 256 && (e7 = i);
    }
    if (void 0 !== r2 && "string" != typeof r2) throw new TypeError("encoding must be a string");
    if ("string" == typeof r2 && !S.isEncoding(r2)) throw new TypeError("Unknown encoding: " + r2);
  } else "number" == typeof e7 && (e7 &= 255);
  if (t2 < 0 || this.length < t2 || this.length < n2) throw new RangeError("Out of range index");
  if (n2 <= t2) return this;
  var o;
  if (t2 >>>= 0, n2 = void 0 === n2 ? this.length : n2 >>> 0, e7 || (e7 = 0), "number" == typeof e7) for (o = t2; o < n2; ++o) this[o] = e7;
  else {
    var s = I(e7) ? e7 : re2(new S(e7, r2).toString()), a2 = s.length;
    for (o = 0; o < n2 - t2; ++o) this[o + t2] = s[o % a2];
  }
  return this;
};
var te = /[^+\/0-9A-Za-z-_]/g;
function ne(e7) {
  return e7 < 16 ? "0" + e7.toString(16) : e7.toString(16);
}
function re2(e7, t2) {
  var n2;
  t2 = t2 || 1 / 0;
  for (var r2 = e7.length, i = null, o = [], s = 0; s < r2; ++s) {
    if ((n2 = e7.charCodeAt(s)) > 55295 && n2 < 57344) {
      if (!i) {
        if (n2 > 56319) {
          (t2 -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        if (s + 1 === r2) {
          (t2 -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        i = n2;
        continue;
      }
      if (n2 < 56320) {
        (t2 -= 3) > -1 && o.push(239, 191, 189), i = n2;
        continue;
      }
      n2 = 65536 + (i - 55296 << 10 | n2 - 56320);
    } else i && (t2 -= 3) > -1 && o.push(239, 191, 189);
    if (i = null, n2 < 128) {
      if ((t2 -= 1) < 0) break;
      o.push(n2);
    } else if (n2 < 2048) {
      if ((t2 -= 2) < 0) break;
      o.push(n2 >> 6 | 192, 63 & n2 | 128);
    } else if (n2 < 65536) {
      if ((t2 -= 3) < 0) break;
      o.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, 63 & n2 | 128);
    } else {
      if (!(n2 < 1114112)) throw new Error("Invalid code point");
      if ((t2 -= 4) < 0) break;
      o.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, 63 & n2 | 128);
    }
  }
  return o;
}
function ie(e7) {
  return function(e8) {
    var t2, n2, r2, i, o, s;
    h || f2();
    var a2 = e8.length;
    if (a2 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    o = "=" === e8[a2 - 2] ? 2 : "=" === e8[a2 - 1] ? 1 : 0, s = new u(3 * a2 / 4 - o), r2 = o > 0 ? a2 - 4 : a2;
    var c2 = 0;
    for (t2 = 0, n2 = 0; t2 < r2; t2 += 4, n2 += 3) i = d[e8.charCodeAt(t2)] << 18 | d[e8.charCodeAt(t2 + 1)] << 12 | d[e8.charCodeAt(t2 + 2)] << 6 | d[e8.charCodeAt(t2 + 3)], s[c2++] = i >> 16 & 255, s[c2++] = i >> 8 & 255, s[c2++] = 255 & i;
    return 2 === o ? (i = d[e8.charCodeAt(t2)] << 2 | d[e8.charCodeAt(t2 + 1)] >> 4, s[c2++] = 255 & i) : 1 === o && (i = d[e8.charCodeAt(t2)] << 10 | d[e8.charCodeAt(t2 + 1)] << 4 | d[e8.charCodeAt(t2 + 2)] >> 2, s[c2++] = i >> 8 & 255, s[c2++] = 255 & i), s;
  }(function(e8) {
    if ((e8 = function(e9) {
      return e9.trim ? e9.trim() : e9.replace(/^\s+|\s+$/g, "");
    }(e8).replace(te, "")).length < 2) return "";
    for (; e8.length % 4 != 0; ) e8 += "=";
    return e8;
  }(e7));
}
function oe(e7, t2, n2, r2) {
  for (var i = 0; i < r2 && !(i + n2 >= t2.length || i >= e7.length); ++i) t2[i + n2] = e7[i];
  return i;
}
function se(e7) {
  return null != e7 && (!!e7._isBuffer || ae(e7) || function(e8) {
    return "function" == typeof e8.readFloatLE && "function" == typeof e8.slice && ae(e8.slice(0, 0));
  }(e7));
}
function ae(e7) {
  return !!e7.constructor && "function" == typeof e7.constructor.isBuffer && e7.constructor.isBuffer(e7);
}
var ce = Object.freeze({ __proto__: null, Buffer: S, INSPECT_MAX_BYTES: 50, SlowBuffer: function(e7) {
  return +e7 != e7 && (e7 = 0), S.alloc(+e7);
}, isBuffer: se, kMaxLength: w });
var le = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function de(e7) {
  return e7 && e7.__esModule && Object.prototype.hasOwnProperty.call(e7, "default") ? e7.default : e7;
}
function ue(e7) {
  if (e7.__esModule) return e7;
  var t2 = e7.default;
  if ("function" == typeof t2) {
    var n2 = function e8() {
      return this instanceof e8 ? Reflect.construct(t2, arguments, this.constructor) : t2.apply(this, arguments);
    };
    n2.prototype = t2.prototype;
  } else n2 = {};
  return Object.defineProperty(n2, "__esModule", { value: true }), Object.keys(e7).forEach(function(t3) {
    var r2 = Object.getOwnPropertyDescriptor(e7, t3);
    Object.defineProperty(n2, t3, r2.get ? r2 : { enumerable: true, get: function() {
      return e7[t3];
    } });
  }), n2;
}
var he = {};
var fe = {};
var pe = {};
function ge(e7) {
  if (!Number.isSafeInteger(e7) || e7 < 0) throw new Error(`positive integer expected, not ${e7}`);
}
function me(e7) {
  if ("boolean" != typeof e7) throw new Error(`boolean expected, not ${e7}`);
}
function ye(e7) {
  return e7 instanceof Uint8Array || null != e7 && "object" == typeof e7 && "Uint8Array" === e7.constructor.name;
}
function ve(e7, ...t2) {
  if (!ye(e7)) throw new Error("Uint8Array expected");
  if (t2.length > 0 && !t2.includes(e7.length)) throw new Error(`Uint8Array expected of length ${t2}, not of length=${e7.length}`);
}
function be(e7) {
  if ("function" != typeof e7 || "function" != typeof e7.create) throw new Error("hash must be wrapped by utils.wrapConstructor");
  ge(e7.outputLen), ge(e7.blockLen);
}
function we(e7, t2 = true) {
  if (e7.destroyed) throw new Error("Hash instance has been destroyed");
  if (t2 && e7.finished) throw new Error("Hash#digest() has already been called");
}
function Ee(e7, t2) {
  ve(e7);
  const n2 = t2.outputLen;
  if (e7.length < n2) throw new Error(`digestInto() expects output buffer of length at least ${n2}`);
}
Object.defineProperty(pe, "__esModule", { value: true }), pe.isBytes = ye, pe.number = ge, pe.bool = me, pe.bytes = ve, pe.hash = be, pe.exists = we, pe.output = Ee;
var Ce = { number: ge, bool: me, bytes: ve, hash: be, exists: we, output: Ee };
pe.default = Ce, function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.wrapCipher = e7.Hash = e7.nextTick = e7.isLE = e7.createView = e7.u32 = e7.u16 = e7.u8 = void 0, e7.bytesToHex = r2, e7.hexToBytes = s, e7.hexToNumber = a2, e7.bytesToNumberBE = function(e8) {
    return a2(r2(e8));
  }, e7.numberToBytesBE = function(e8, t3) {
    return s(e8.toString(16).padStart(2 * t3, "0"));
  }, e7.asyncLoop = async function(t3, n3, r3) {
    let i2 = Date.now();
    for (let o2 = 0; o2 < t3; o2++) {
      r3(o2);
      const t4 = Date.now() - i2;
      t4 >= 0 && t4 < n3 || (await (0, e7.nextTick)(), i2 += t4);
    }
  }, e7.utf8ToBytes = c2, e7.bytesToUtf8 = function(e8) {
    return new TextDecoder().decode(e8);
  }, e7.toBytes = function(e8) {
    if ("string" == typeof e8) e8 = c2(e8);
    else {
      if (!(0, t2.isBytes)(e8)) throw new Error("Uint8Array expected, got " + typeof e8);
      e8 = d2(e8);
    }
    return e8;
  }, e7.concatBytes = function(...e8) {
    let n3 = 0;
    for (let r4 = 0; r4 < e8.length; r4++) {
      const i2 = e8[r4];
      (0, t2.bytes)(i2), n3 += i2.length;
    }
    const r3 = new Uint8Array(n3);
    for (let t3 = 0, n4 = 0; t3 < e8.length; t3++) {
      const i2 = e8[t3];
      r3.set(i2, n4), n4 += i2.length;
    }
    return r3;
  }, e7.checkOpts = function(e8, t3) {
    if (null == t3 || "object" != typeof t3) throw new Error("options must be defined");
    return Object.assign(e8, t3);
  }, e7.equalBytes = function(e8, t3) {
    if (e8.length !== t3.length) return false;
    let n3 = 0;
    for (let r3 = 0; r3 < e8.length; r3++) n3 |= e8[r3] ^ t3[r3];
    return 0 === n3;
  }, e7.setBigUint64 = l2, e7.u64Lengths = function(t3, n3) {
    const r3 = new Uint8Array(16), i2 = (0, e7.createView)(r3);
    return l2(i2, 0, BigInt(n3 ? n3.length : 0), true), l2(i2, 8, BigInt(t3.length), true), r3;
  }, e7.isAligned32 = function(e8) {
    return e8.byteOffset % 4 == 0;
  }, e7.copyBytes = d2, e7.clean = function(...e8) {
    for (let t3 = 0; t3 < e8.length; t3++) e8[t3].fill(0);
  };
  const t2 = pe;
  e7.u8 = (e8) => new Uint8Array(e8.buffer, e8.byteOffset, e8.byteLength);
  e7.u16 = (e8) => new Uint16Array(e8.buffer, e8.byteOffset, Math.floor(e8.byteLength / 2));
  e7.u32 = (e8) => new Uint32Array(e8.buffer, e8.byteOffset, Math.floor(e8.byteLength / 4));
  if (e7.createView = (e8) => new DataView(e8.buffer, e8.byteOffset, e8.byteLength), e7.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0], !e7.isLE) throw new Error("Non little-endian hardware is not supported");
  const n2 = Array.from({ length: 256 }, (e8, t3) => t3.toString(16).padStart(2, "0"));
  function r2(e8) {
    (0, t2.bytes)(e8);
    let r3 = "";
    for (let t3 = 0; t3 < e8.length; t3++) r3 += n2[e8[t3]];
    return r3;
  }
  const i = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function o(e8) {
    return e8 >= i._0 && e8 <= i._9 ? e8 - i._0 : e8 >= i._A && e8 <= i._F ? e8 - (i._A - 10) : e8 >= i._a && e8 <= i._f ? e8 - (i._a - 10) : void 0;
  }
  function s(e8) {
    if ("string" != typeof e8) throw new Error("hex string expected, got " + typeof e8);
    const t3 = e8.length, n3 = t3 / 2;
    if (t3 % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t3);
    const r3 = new Uint8Array(n3);
    for (let t4 = 0, i2 = 0; t4 < n3; t4++, i2 += 2) {
      const n4 = o(e8.charCodeAt(i2)), s2 = o(e8.charCodeAt(i2 + 1));
      if (void 0 === n4 || void 0 === s2) {
        const t5 = e8[i2] + e8[i2 + 1];
        throw new Error('hex string expected, got non-hex character "' + t5 + '" at index ' + i2);
      }
      r3[t4] = 16 * n4 + s2;
    }
    return r3;
  }
  function a2(e8) {
    if ("string" != typeof e8) throw new Error("hex string expected, got " + typeof e8);
    return BigInt("" === e8 ? "0" : `0x${e8}`);
  }
  function c2(e8) {
    if ("string" != typeof e8) throw new Error("string expected, got " + typeof e8);
    return new Uint8Array(new TextEncoder().encode(e8));
  }
  e7.nextTick = async () => {
  };
  e7.Hash = class {
  };
  function l2(e8, t3, n3, r3) {
    if ("function" == typeof e8.setBigUint64) return e8.setBigUint64(t3, n3, r3);
    const i2 = BigInt(32), o2 = BigInt(4294967295), s2 = Number(n3 >> i2 & o2), a3 = Number(n3 & o2), c3 = r3 ? 4 : 0, l3 = r3 ? 0 : 4;
    e8.setUint32(t3 + c3, s2, r3), e8.setUint32(t3 + l3, a3, r3);
  }
  function d2(e8) {
    return Uint8Array.from(e8);
  }
  e7.wrapCipher = (e8, t3) => (Object.assign(t3, e8), t3);
}(fe);
var Se = {};
var _e = {};
Object.defineProperty(_e, "__esModule", { value: true }), _e.AEAD_TAG_LENGTH = _e.XCHACHA20_NONCE_LENGTH = _e.CURVE25519_PUBLIC_KEY_SIZE = _e.ETH_PUBLIC_KEY_SIZE = _e.UNCOMPRESSED_PUBLIC_KEY_SIZE = _e.COMPRESSED_PUBLIC_KEY_SIZE = _e.SECRET_KEY_LENGTH = void 0, _e.SECRET_KEY_LENGTH = 32, _e.COMPRESSED_PUBLIC_KEY_SIZE = 33, _e.UNCOMPRESSED_PUBLIC_KEY_SIZE = 65, _e.ETH_PUBLIC_KEY_SIZE = 64, _e.CURVE25519_PUBLIC_KEY_SIZE = 32, _e.XCHACHA20_NONCE_LENGTH = 24, _e.AEAD_TAG_LENGTH = 16, function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.ephemeralKeySize = e7.symmetricNonceLength = e7.symmetricAlgorithm = e7.isHkdfKeyCompressed = e7.isEphemeralKeyCompressed = e7.ellipticCurve = e7.ECIES_CONFIG = void 0;
  var t2 = _e, n2 = function() {
    this.ellipticCurve = "secp256k1", this.isEphemeralKeyCompressed = false, this.isHkdfKeyCompressed = false, this.symmetricAlgorithm = "aes-256-gcm", this.symmetricNonceLength = 16;
  };
  e7.ECIES_CONFIG = new n2();
  e7.ellipticCurve = function() {
    return e7.ECIES_CONFIG.ellipticCurve;
  };
  e7.isEphemeralKeyCompressed = function() {
    return e7.ECIES_CONFIG.isEphemeralKeyCompressed;
  };
  e7.isHkdfKeyCompressed = function() {
    return e7.ECIES_CONFIG.isHkdfKeyCompressed;
  };
  e7.symmetricAlgorithm = function() {
    return e7.ECIES_CONFIG.symmetricAlgorithm;
  };
  e7.symmetricNonceLength = function() {
    return e7.ECIES_CONFIG.symmetricNonceLength;
  };
  e7.ephemeralKeySize = function() {
    var n3 = { secp256k1: e7.ECIES_CONFIG.isEphemeralKeyCompressed ? t2.COMPRESSED_PUBLIC_KEY_SIZE : t2.UNCOMPRESSED_PUBLIC_KEY_SIZE, x25519: t2.CURVE25519_PUBLIC_KEY_SIZE, ed25519: t2.CURVE25519_PUBLIC_KEY_SIZE };
    if (e7.ECIES_CONFIG.ellipticCurve in n3) return n3[e7.ECIES_CONFIG.ellipticCurve];
    throw new Error("Not implemented");
  };
}(Se);
var ke = {};
var xe = {};
var Me = {};
var Ae = {};
var Ie = {};
var Re = {};
Object.defineProperty(Re, "__esModule", { value: true }), Re.crypto = void 0, Re.crypto = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0, function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.gcm = e7.ctr = e7.cbc = e7.utils = void 0, e7.randomBytes = i, e7.getWebcryptoSubtle = o, e7.managedNonce = function(e8) {
    return (0, n2.number)(e8.nonceLength), (t3, ...n3) => ({ encrypt(o2, ...s2) {
      const { nonceLength: a3 } = e8, c2 = i(a3), l2 = e8(t3, c2, ...n3).encrypt(o2, ...s2), d2 = (0, r2.concatBytes)(c2, l2);
      return l2.fill(0), d2;
    }, decrypt(r3, ...i2) {
      const { nonceLength: o2 } = e8, s2 = r3.subarray(0, o2), a3 = r3.subarray(o2);
      return e8(t3, s2, ...n3).decrypt(a3, ...i2);
    } });
  };
  const t2 = Re, n2 = pe, r2 = fe;
  function i(e8 = 32) {
    if (t2.crypto && "function" == typeof t2.crypto.getRandomValues) return t2.crypto.getRandomValues(new Uint8Array(e8));
    if (t2.crypto && "function" == typeof t2.crypto.randomBytes) return t2.crypto.randomBytes(e8);
    throw new Error("crypto.getRandomValues must be defined");
  }
  function o() {
    if (t2.crypto && "object" == typeof t2.crypto.subtle && null != t2.crypto.subtle) return t2.crypto.subtle;
    throw new Error("crypto.subtle must be defined");
  }
  e7.utils = { async encrypt(e8, t3, n3, r3) {
    const i2 = o(), s2 = await i2.importKey("raw", e8, t3, true, ["encrypt"]), a3 = await i2.encrypt(n3, s2, r3);
    return new Uint8Array(a3);
  }, async decrypt(e8, t3, n3, r3) {
    const i2 = o(), s2 = await i2.importKey("raw", e8, t3, true, ["decrypt"]), a3 = await i2.decrypt(n3, s2, r3);
    return new Uint8Array(a3);
  } };
  const s = { CBC: "AES-CBC", CTR: "AES-CTR", GCM: "AES-GCM" };
  function a2(t3) {
    return (r3, i2, o2) => {
      (0, n2.bytes)(r3), (0, n2.bytes)(i2);
      const a3 = { name: t3, length: 8 * r3.length }, c2 = function(e8, t4, n3) {
        if (e8 === s.CBC) return { name: s.CBC, iv: t4 };
        if (e8 === s.CTR) return { name: s.CTR, counter: t4, length: 64 };
        if (e8 === s.GCM) return n3 ? { name: s.GCM, iv: t4, additionalData: n3 } : { name: s.GCM, iv: t4 };
        throw new Error("unknown aes block mode");
      }(t3, i2, o2);
      return { encrypt: (t4) => ((0, n2.bytes)(t4), e7.utils.encrypt(r3, a3, c2, t4)), decrypt: (t4) => ((0, n2.bytes)(t4), e7.utils.decrypt(r3, a3, c2, t4)) };
    };
  }
  e7.cbc = a2(s.CBC), e7.ctr = a2(s.CTR), e7.gcm = a2(s.GCM);
}(Ie);
var Pe = {};
var Le = {};
var Oe = {};
var Te = {};
function Ne(e7) {
  if (!Number.isSafeInteger(e7) || e7 < 0) throw new Error(`positive integer expected, not ${e7}`);
}
function De(e7) {
  if ("boolean" != typeof e7) throw new Error(`boolean expected, not ${e7}`);
}
function $e(e7) {
  return e7 instanceof Uint8Array || null != e7 && "object" == typeof e7 && "Uint8Array" === e7.constructor.name;
}
function Be(e7, ...t2) {
  if (!$e(e7)) throw new Error("Uint8Array expected");
  if (t2.length > 0 && !t2.includes(e7.length)) throw new Error(`Uint8Array expected of length ${t2}, not of length=${e7.length}`);
}
function Ke(e7) {
  if ("function" != typeof e7 || "function" != typeof e7.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Ne(e7.outputLen), Ne(e7.blockLen);
}
function je(e7, t2 = true) {
  if (e7.destroyed) throw new Error("Hash instance has been destroyed");
  if (t2 && e7.finished) throw new Error("Hash#digest() has already been called");
}
function Ue(e7, t2) {
  Be(e7);
  const n2 = t2.outputLen;
  if (e7.length < n2) throw new Error(`digestInto() expects output buffer of length at least ${n2}`);
}
Object.defineProperty(Te, "__esModule", { value: true }), Te.isBytes = $e, Te.number = Ne, Te.bool = De, Te.bytes = Be, Te.hash = Ke, Te.exists = je, Te.output = Ue;
var He = { number: Ne, bool: De, bytes: Be, hash: Ke, exists: je, output: Ue };
Te.default = He;
var Fe = {};
var ze = {};
Object.defineProperty(ze, "__esModule", { value: true }), ze.crypto = void 0, ze.crypto = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0, function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.Hash = e7.nextTick = e7.byteSwapIfBE = e7.byteSwap = e7.isLE = e7.rotl = e7.rotr = e7.createView = e7.u32 = e7.u8 = void 0, e7.isBytes = function(e8) {
    return e8 instanceof Uint8Array || null != e8 && "object" == typeof e8 && "Uint8Array" === e8.constructor.name;
  }, e7.byteSwap32 = function(t3) {
    for (let n3 = 0; n3 < t3.length; n3++) t3[n3] = (0, e7.byteSwap)(t3[n3]);
  }, e7.bytesToHex = function(e8) {
    (0, n2.bytes)(e8);
    let t3 = "";
    for (let n3 = 0; n3 < e8.length; n3++) t3 += r2[e8[n3]];
    return t3;
  }, e7.hexToBytes = function(e8) {
    if ("string" != typeof e8) throw new Error("hex string expected, got " + typeof e8);
    const t3 = e8.length, n3 = t3 / 2;
    if (t3 % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t3);
    const r3 = new Uint8Array(n3);
    for (let t4 = 0, i2 = 0; t4 < n3; t4++, i2 += 2) {
      const n4 = o(e8.charCodeAt(i2)), s2 = o(e8.charCodeAt(i2 + 1));
      if (void 0 === n4 || void 0 === s2) {
        const t5 = e8[i2] + e8[i2 + 1];
        throw new Error('hex string expected, got non-hex character "' + t5 + '" at index ' + i2);
      }
      r3[t4] = 16 * n4 + s2;
    }
    return r3;
  }, e7.asyncLoop = async function(t3, n3, r3) {
    let i2 = Date.now();
    for (let o2 = 0; o2 < t3; o2++) {
      r3(o2);
      const t4 = Date.now() - i2;
      t4 >= 0 && t4 < n3 || (await (0, e7.nextTick)(), i2 += t4);
    }
  }, e7.utf8ToBytes = s, e7.toBytes = a2, e7.concatBytes = function(...e8) {
    let t3 = 0;
    for (let r4 = 0; r4 < e8.length; r4++) {
      const i2 = e8[r4];
      (0, n2.bytes)(i2), t3 += i2.length;
    }
    const r3 = new Uint8Array(t3);
    for (let t4 = 0, n3 = 0; t4 < e8.length; t4++) {
      const i2 = e8[t4];
      r3.set(i2, n3), n3 += i2.length;
    }
    return r3;
  }, e7.checkOpts = function(e8, t3) {
    if (void 0 !== t3 && "[object Object]" !== c2.call(t3)) throw new Error("Options should be object or undefined");
    return Object.assign(e8, t3);
  }, e7.wrapConstructor = function(e8) {
    const t3 = (t4) => e8().update(a2(t4)).digest(), n3 = e8();
    return t3.outputLen = n3.outputLen, t3.blockLen = n3.blockLen, t3.create = () => e8(), t3;
  }, e7.wrapConstructorWithOpts = function(e8) {
    const t3 = (t4, n4) => e8(n4).update(a2(t4)).digest(), n3 = e8({});
    return t3.outputLen = n3.outputLen, t3.blockLen = n3.blockLen, t3.create = (t4) => e8(t4), t3;
  }, e7.wrapXOFConstructorWithOpts = function(e8) {
    const t3 = (t4, n4) => e8(n4).update(a2(t4)).digest(), n3 = e8({});
    return t3.outputLen = n3.outputLen, t3.blockLen = n3.blockLen, t3.create = (t4) => e8(t4), t3;
  }, e7.randomBytes = function(e8 = 32) {
    if (t2.crypto && "function" == typeof t2.crypto.getRandomValues) return t2.crypto.getRandomValues(new Uint8Array(e8));
    if (t2.crypto && "function" == typeof t2.crypto.randomBytes) return t2.crypto.randomBytes(e8);
    throw new Error("crypto.getRandomValues must be defined");
  };
  const t2 = ze, n2 = Te;
  e7.u8 = (e8) => new Uint8Array(e8.buffer, e8.byteOffset, e8.byteLength);
  e7.u32 = (e8) => new Uint32Array(e8.buffer, e8.byteOffset, Math.floor(e8.byteLength / 4));
  e7.createView = (e8) => new DataView(e8.buffer, e8.byteOffset, e8.byteLength);
  e7.rotr = (e8, t3) => e8 << 32 - t3 | e8 >>> t3;
  e7.rotl = (e8, t3) => e8 << t3 | e8 >>> 32 - t3 >>> 0, e7.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
  e7.byteSwap = (e8) => e8 << 24 & 4278190080 | e8 << 8 & 16711680 | e8 >>> 8 & 65280 | e8 >>> 24 & 255, e7.byteSwapIfBE = e7.isLE ? (e8) => e8 : (t3) => (0, e7.byteSwap)(t3);
  const r2 = Array.from({ length: 256 }, (e8, t3) => t3.toString(16).padStart(2, "0"));
  const i = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function o(e8) {
    return e8 >= i._0 && e8 <= i._9 ? e8 - i._0 : e8 >= i._A && e8 <= i._F ? e8 - (i._A - 10) : e8 >= i._a && e8 <= i._f ? e8 - (i._a - 10) : void 0;
  }
  function s(e8) {
    if ("string" != typeof e8) throw new Error("utf8ToBytes expected string, got " + typeof e8);
    return new Uint8Array(new TextEncoder().encode(e8));
  }
  function a2(e8) {
    return "string" == typeof e8 && (e8 = s(e8)), (0, n2.bytes)(e8), e8;
  }
  e7.nextTick = async () => {
  };
  e7.Hash = class {
    clone() {
      return this._cloneInto();
    }
  };
  const c2 = {}.toString;
}(Fe), Object.defineProperty(Oe, "__esModule", { value: true }), Oe.HashMD = Oe.Maj = Oe.Chi = void 0;
var qe = Te;
var Ve = Fe;
Oe.Chi = (e7, t2, n2) => e7 & t2 ^ ~e7 & n2;
Oe.Maj = (e7, t2, n2) => e7 & t2 ^ e7 & n2 ^ t2 & n2;
Oe.HashMD = class extends Ve.Hash {
  constructor(e7, t2, n2, r2) {
    super(), this.blockLen = e7, this.outputLen = t2, this.padOffset = n2, this.isLE = r2, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e7), this.view = (0, Ve.createView)(this.buffer);
  }
  update(e7) {
    (0, qe.exists)(this);
    const { view: t2, buffer: n2, blockLen: r2 } = this, i = (e7 = (0, Ve.toBytes)(e7)).length;
    for (let o = 0; o < i; ) {
      const s = Math.min(r2 - this.pos, i - o);
      if (s !== r2) n2.set(e7.subarray(o, o + s), this.pos), this.pos += s, o += s, this.pos === r2 && (this.process(t2, 0), this.pos = 0);
      else {
        const t3 = (0, Ve.createView)(e7);
        for (; r2 <= i - o; o += r2) this.process(t3, o);
      }
    }
    return this.length += e7.length, this.roundClean(), this;
  }
  digestInto(e7) {
    (0, qe.exists)(this), (0, qe.output)(e7, this), this.finished = true;
    const { buffer: t2, view: n2, blockLen: r2, isLE: i } = this;
    let { pos: o } = this;
    t2[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > r2 - o && (this.process(n2, 0), o = 0);
    for (let e8 = o; e8 < r2; e8++) t2[e8] = 0;
    !function(e8, t3, n3, r3) {
      if ("function" == typeof e8.setBigUint64) return e8.setBigUint64(t3, n3, r3);
      const i2 = BigInt(32), o2 = BigInt(4294967295), s2 = Number(n3 >> i2 & o2), a3 = Number(n3 & o2), c3 = r3 ? 4 : 0, l3 = r3 ? 0 : 4;
      e8.setUint32(t3 + c3, s2, r3), e8.setUint32(t3 + l3, a3, r3);
    }(n2, r2 - 8, BigInt(8 * this.length), i), this.process(n2, 0);
    const s = (0, Ve.createView)(e7), a2 = this.outputLen;
    if (a2 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const c2 = a2 / 4, l2 = this.get();
    if (c2 > l2.length) throw new Error("_sha2: outputLen bigger than state");
    for (let e8 = 0; e8 < c2; e8++) s.setUint32(4 * e8, l2[e8], i);
  }
  digest() {
    const { buffer: e7, outputLen: t2 } = this;
    this.digestInto(e7);
    const n2 = e7.slice(0, t2);
    return this.destroy(), n2;
  }
  _cloneInto(e7) {
    e7 || (e7 = new this.constructor()), e7.set(...this.get());
    const { blockLen: t2, buffer: n2, length: r2, finished: i, destroyed: o, pos: s } = this;
    return e7.length = r2, e7.pos = s, e7.finished = i, e7.destroyed = o, r2 % t2 && e7.buffer.set(n2), e7;
  }
};
var We = {};
Object.defineProperty(We, "__esModule", { value: true }), We.add5L = We.add5H = We.add4H = We.add4L = We.add3H = We.add3L = We.rotlBL = We.rotlBH = We.rotlSL = We.rotlSH = We.rotr32L = We.rotr32H = We.rotrBL = We.rotrBH = We.rotrSL = We.rotrSH = We.shrSL = We.shrSH = We.toBig = void 0, We.fromBig = Ye, We.split = Je, We.add = ut;
var Ge = BigInt(2 ** 32 - 1);
var Ze = BigInt(32);
function Ye(e7, t2 = false) {
  return t2 ? { h: Number(e7 & Ge), l: Number(e7 >> Ze & Ge) } : { h: 0 | Number(e7 >> Ze & Ge), l: 0 | Number(e7 & Ge) };
}
function Je(e7, t2 = false) {
  let n2 = new Uint32Array(e7.length), r2 = new Uint32Array(e7.length);
  for (let i = 0; i < e7.length; i++) {
    const { h: o, l: s } = Ye(e7[i], t2);
    [n2[i], r2[i]] = [o, s];
  }
  return [n2, r2];
}
var Xe = (e7, t2) => BigInt(e7 >>> 0) << Ze | BigInt(t2 >>> 0);
We.toBig = Xe;
var Qe = (e7, t2, n2) => e7 >>> n2;
We.shrSH = Qe;
var et = (e7, t2, n2) => e7 << 32 - n2 | t2 >>> n2;
We.shrSL = et;
var tt = (e7, t2, n2) => e7 >>> n2 | t2 << 32 - n2;
We.rotrSH = tt;
var nt = (e7, t2, n2) => e7 << 32 - n2 | t2 >>> n2;
We.rotrSL = nt;
var rt = (e7, t2, n2) => e7 << 64 - n2 | t2 >>> n2 - 32;
We.rotrBH = rt;
var it = (e7, t2, n2) => e7 >>> n2 - 32 | t2 << 64 - n2;
We.rotrBL = it;
var ot = (e7, t2) => t2;
We.rotr32H = ot;
var st = (e7, t2) => e7;
We.rotr32L = st;
var at = (e7, t2, n2) => e7 << n2 | t2 >>> 32 - n2;
We.rotlSH = at;
var ct = (e7, t2, n2) => t2 << n2 | e7 >>> 32 - n2;
We.rotlSL = ct;
var lt = (e7, t2, n2) => t2 << n2 - 32 | e7 >>> 64 - n2;
We.rotlBH = lt;
var dt = (e7, t2, n2) => e7 << n2 - 32 | t2 >>> 64 - n2;
function ut(e7, t2, n2, r2) {
  const i = (t2 >>> 0) + (r2 >>> 0);
  return { h: e7 + n2 + (i / 2 ** 32 | 0) | 0, l: 0 | i };
}
We.rotlBL = dt;
var ht = (e7, t2, n2) => (e7 >>> 0) + (t2 >>> 0) + (n2 >>> 0);
We.add3L = ht;
var ft = (e7, t2, n2, r2) => t2 + n2 + r2 + (e7 / 2 ** 32 | 0) | 0;
We.add3H = ft;
var pt = (e7, t2, n2, r2) => (e7 >>> 0) + (t2 >>> 0) + (n2 >>> 0) + (r2 >>> 0);
We.add4L = pt;
var gt = (e7, t2, n2, r2, i) => t2 + n2 + r2 + i + (e7 / 2 ** 32 | 0) | 0;
We.add4H = gt;
var mt = (e7, t2, n2, r2, i) => (e7 >>> 0) + (t2 >>> 0) + (n2 >>> 0) + (r2 >>> 0) + (i >>> 0);
We.add5L = mt;
var yt = (e7, t2, n2, r2, i, o) => t2 + n2 + r2 + i + o + (e7 / 2 ** 32 | 0) | 0;
We.add5H = yt;
var vt = { fromBig: Ye, split: Je, toBig: Xe, shrSH: Qe, shrSL: et, rotrSH: tt, rotrSL: nt, rotrBH: rt, rotrBL: it, rotr32H: ot, rotr32L: st, rotlSH: at, rotlSL: ct, rotlBH: lt, rotlBL: dt, add: ut, add3L: ht, add3H: ft, add4L: pt, add4H: gt, add5H: yt, add5L: mt };
We.default = vt, Object.defineProperty(Le, "__esModule", { value: true }), Le.sha384 = Le.sha512_256 = Le.sha512_224 = Le.sha512 = Le.SHA384 = Le.SHA512_256 = Le.SHA512_224 = Le.SHA512 = void 0;
var bt = Oe;
var wt = We;
var Et = Fe;
var [Ct, St] = (() => wt.default.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((e7) => BigInt(e7))))();
var _t = new Uint32Array(80);
var kt = new Uint32Array(80);
var xt = class extends bt.HashMD {
  constructor() {
    super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e7, Al: t2, Bh: n2, Bl: r2, Ch: i, Cl: o, Dh: s, Dl: a2, Eh: c2, El: l2, Fh: d2, Fl: u2, Gh: h2, Gl: f3, Hh: p2, Hl: g2 } = this;
    return [e7, t2, n2, r2, i, o, s, a2, c2, l2, d2, u2, h2, f3, p2, g2];
  }
  set(e7, t2, n2, r2, i, o, s, a2, c2, l2, d2, u2, h2, f3, p2, g2) {
    this.Ah = 0 | e7, this.Al = 0 | t2, this.Bh = 0 | n2, this.Bl = 0 | r2, this.Ch = 0 | i, this.Cl = 0 | o, this.Dh = 0 | s, this.Dl = 0 | a2, this.Eh = 0 | c2, this.El = 0 | l2, this.Fh = 0 | d2, this.Fl = 0 | u2, this.Gh = 0 | h2, this.Gl = 0 | f3, this.Hh = 0 | p2, this.Hl = 0 | g2;
  }
  process(e7, t2) {
    for (let n3 = 0; n3 < 16; n3++, t2 += 4) _t[n3] = e7.getUint32(t2), kt[n3] = e7.getUint32(t2 += 4);
    for (let e8 = 16; e8 < 80; e8++) {
      const t3 = 0 | _t[e8 - 15], n3 = 0 | kt[e8 - 15], r3 = wt.default.rotrSH(t3, n3, 1) ^ wt.default.rotrSH(t3, n3, 8) ^ wt.default.shrSH(t3, n3, 7), i2 = wt.default.rotrSL(t3, n3, 1) ^ wt.default.rotrSL(t3, n3, 8) ^ wt.default.shrSL(t3, n3, 7), o2 = 0 | _t[e8 - 2], s2 = 0 | kt[e8 - 2], a3 = wt.default.rotrSH(o2, s2, 19) ^ wt.default.rotrBH(o2, s2, 61) ^ wt.default.shrSH(o2, s2, 6), c3 = wt.default.rotrSL(o2, s2, 19) ^ wt.default.rotrBL(o2, s2, 61) ^ wt.default.shrSL(o2, s2, 6), l3 = wt.default.add4L(i2, c3, kt[e8 - 7], kt[e8 - 16]), d3 = wt.default.add4H(l3, r3, a3, _t[e8 - 7], _t[e8 - 16]);
      _t[e8] = 0 | d3, kt[e8] = 0 | l3;
    }
    let { Ah: n2, Al: r2, Bh: i, Bl: o, Ch: s, Cl: a2, Dh: c2, Dl: l2, Eh: d2, El: u2, Fh: h2, Fl: f3, Gh: p2, Gl: g2, Hh: m2, Hl: y2 } = this;
    for (let e8 = 0; e8 < 80; e8++) {
      const t3 = wt.default.rotrSH(d2, u2, 14) ^ wt.default.rotrSH(d2, u2, 18) ^ wt.default.rotrBH(d2, u2, 41), v2 = wt.default.rotrSL(d2, u2, 14) ^ wt.default.rotrSL(d2, u2, 18) ^ wt.default.rotrBL(d2, u2, 41), b2 = d2 & h2 ^ ~d2 & p2, w2 = u2 & f3 ^ ~u2 & g2, E2 = wt.default.add5L(y2, v2, w2, St[e8], kt[e8]), C2 = wt.default.add5H(E2, m2, t3, b2, Ct[e8], _t[e8]), S2 = 0 | E2, _2 = wt.default.rotrSH(n2, r2, 28) ^ wt.default.rotrBH(n2, r2, 34) ^ wt.default.rotrBH(n2, r2, 39), k2 = wt.default.rotrSL(n2, r2, 28) ^ wt.default.rotrBL(n2, r2, 34) ^ wt.default.rotrBL(n2, r2, 39), x2 = n2 & i ^ n2 & s ^ i & s, M2 = r2 & o ^ r2 & a2 ^ o & a2;
      m2 = 0 | p2, y2 = 0 | g2, p2 = 0 | h2, g2 = 0 | f3, h2 = 0 | d2, f3 = 0 | u2, { h: d2, l: u2 } = wt.default.add(0 | c2, 0 | l2, 0 | C2, 0 | S2), c2 = 0 | s, l2 = 0 | a2, s = 0 | i, a2 = 0 | o, i = 0 | n2, o = 0 | r2;
      const A2 = wt.default.add3L(S2, k2, M2);
      n2 = wt.default.add3H(A2, C2, _2, x2), r2 = 0 | A2;
    }
    ({ h: n2, l: r2 } = wt.default.add(0 | this.Ah, 0 | this.Al, 0 | n2, 0 | r2)), { h: i, l: o } = wt.default.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | o), { h: s, l: a2 } = wt.default.add(0 | this.Ch, 0 | this.Cl, 0 | s, 0 | a2), { h: c2, l: l2 } = wt.default.add(0 | this.Dh, 0 | this.Dl, 0 | c2, 0 | l2), { h: d2, l: u2 } = wt.default.add(0 | this.Eh, 0 | this.El, 0 | d2, 0 | u2), { h: h2, l: f3 } = wt.default.add(0 | this.Fh, 0 | this.Fl, 0 | h2, 0 | f3), { h: p2, l: g2 } = wt.default.add(0 | this.Gh, 0 | this.Gl, 0 | p2, 0 | g2), { h: m2, l: y2 } = wt.default.add(0 | this.Hh, 0 | this.Hl, 0 | m2, 0 | y2), this.set(n2, r2, i, o, s, a2, c2, l2, d2, u2, h2, f3, p2, g2, m2, y2);
  }
  roundClean() {
    _t.fill(0), kt.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
Le.SHA512 = xt;
var Mt = class extends xt {
  constructor() {
    super(), this.Ah = -1942145080, this.Al = 424955298, this.Bh = 1944164710, this.Bl = -1982016298, this.Ch = 502970286, this.Cl = 855612546, this.Dh = 1738396948, this.Dl = 1479516111, this.Eh = 258812777, this.El = 2077511080, this.Fh = 2011393907, this.Fl = 79989058, this.Gh = 1067287976, this.Gl = 1780299464, this.Hh = 286451373, this.Hl = -1848208735, this.outputLen = 28;
  }
};
Le.SHA512_224 = Mt;
var At = class extends xt {
  constructor() {
    super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32;
  }
};
Le.SHA512_256 = At;
var It = class extends xt {
  constructor() {
    super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48;
  }
};
Le.SHA384 = It, Le.sha512 = (0, Et.wrapConstructor)(() => new xt()), Le.sha512_224 = (0, Et.wrapConstructor)(() => new Mt()), Le.sha512_256 = (0, Et.wrapConstructor)(() => new At()), Le.sha384 = (0, Et.wrapConstructor)(() => new It());
var Rt = {};
var Pt = {};
var Lt = {};
var Ot = {};
Object.defineProperty(Ot, "__esModule", { value: true }), Ot.notImplemented = Ot.bitMask = void 0, Ot.isBytes = $t, Ot.abytes = Bt, Ot.abool = function(e7, t2) {
  if ("boolean" != typeof t2) throw new Error(`${e7} must be valid boolean, got "${t2}".`);
}, Ot.bytesToHex = jt, Ot.numberToHexUnpadded = Ut, Ot.hexToNumber = Ht, Ot.hexToBytes = qt, Ot.bytesToNumberBE = function(e7) {
  return Ht(jt(e7));
}, Ot.bytesToNumberLE = function(e7) {
  return Bt(e7), Ht(jt(Uint8Array.from(e7).reverse()));
}, Ot.numberToBytesBE = Vt, Ot.numberToBytesLE = function(e7, t2) {
  return Vt(e7, t2).reverse();
}, Ot.numberToVarBytesBE = function(e7) {
  return qt(Ut(e7));
}, Ot.ensureBytes = function(e7, t2, n2) {
  let r2;
  if ("string" == typeof t2) try {
    r2 = qt(t2);
  } catch (n3) {
    throw new Error(`${e7} must be valid hex string, got "${t2}". Cause: ${n3}`);
  }
  else {
    if (!$t(t2)) throw new Error(`${e7} must be hex string or Uint8Array`);
    r2 = Uint8Array.from(t2);
  }
  const i = r2.length;
  if ("number" == typeof n2 && i !== n2) throw new Error(`${e7} expected ${n2} bytes, got ${i}`);
  return r2;
}, Ot.concatBytes = Wt, Ot.equalBytes = function(e7, t2) {
  if (e7.length !== t2.length) return false;
  let n2 = 0;
  for (let r2 = 0; r2 < e7.length; r2++) n2 |= e7[r2] ^ t2[r2];
  return 0 === n2;
}, Ot.utf8ToBytes = function(e7) {
  if ("string" != typeof e7) throw new Error("utf8ToBytes expected string, got " + typeof e7);
  return new Uint8Array(new TextEncoder().encode(e7));
}, Ot.inRange = Zt, Ot.aInRange = function(e7, t2, n2, r2) {
  if (!Zt(t2, n2, r2)) throw new Error(`expected valid ${e7}: ${n2} <= n < ${r2}, got ${typeof t2} ${t2}`);
}, Ot.bitLen = function(e7) {
  let t2;
  for (t2 = 0; e7 > Tt; e7 >>= Nt, t2 += 1) ;
  return t2;
}, Ot.bitGet = function(e7, t2) {
  return e7 >> BigInt(t2) & Nt;
}, Ot.bitSet = function(e7, t2, n2) {
  return e7 | (n2 ? Nt : Tt) << BigInt(t2);
}, Ot.createHmacDrbg = function(e7, t2, n2) {
  if ("number" != typeof e7 || e7 < 2) throw new Error("hashLen must be a number");
  if ("number" != typeof t2 || t2 < 2) throw new Error("qByteLen must be a number");
  if ("function" != typeof n2) throw new Error("hmacFn must be a function");
  let r2 = Yt(e7), i = Yt(e7), o = 0;
  const s = () => {
    r2.fill(1), i.fill(0), o = 0;
  }, a2 = (...e8) => n2(i, r2, ...e8), c2 = (e8 = Yt()) => {
    i = a2(Jt([0]), e8), r2 = a2(), 0 !== e8.length && (i = a2(Jt([1]), e8), r2 = a2());
  }, l2 = () => {
    if (o++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let e8 = 0;
    const n3 = [];
    for (; e8 < t2; ) {
      r2 = a2();
      const t3 = r2.slice();
      n3.push(t3), e8 += r2.length;
    }
    return Wt(...n3);
  };
  return (e8, t3) => {
    let n3;
    for (s(), c2(e8); !(n3 = t3(l2())); ) c2();
    return s(), n3;
  };
}, Ot.validateObject = function(e7, t2, n2 = {}) {
  const r2 = (t3, n3, r3) => {
    const i = Xt[n3];
    if ("function" != typeof i) throw new Error(`Invalid validator "${n3}", expected function`);
    const o = e7[t3];
    if (!(r3 && void 0 === o || i(o, e7))) throw new Error(`Invalid param ${String(t3)}=${o} (${typeof o}), expected ${n3}`);
  };
  for (const [e8, n3] of Object.entries(t2)) r2(e8, n3, false);
  for (const [e8, t3] of Object.entries(n2)) r2(e8, t3, true);
  return e7;
}, Ot.memoized = function(e7) {
  const t2 = /* @__PURE__ */ new WeakMap();
  return (n2, ...r2) => {
    const i = t2.get(n2);
    if (void 0 !== i) return i;
    const o = e7(n2, ...r2);
    return t2.set(n2, o), o;
  };
};
var Tt = BigInt(0);
var Nt = BigInt(1);
var Dt = BigInt(2);
function $t(e7) {
  return e7 instanceof Uint8Array || null != e7 && "object" == typeof e7 && "Uint8Array" === e7.constructor.name;
}
function Bt(e7) {
  if (!$t(e7)) throw new Error("Uint8Array expected");
}
var Kt = Array.from({ length: 256 }, (e7, t2) => t2.toString(16).padStart(2, "0"));
function jt(e7) {
  Bt(e7);
  let t2 = "";
  for (let n2 = 0; n2 < e7.length; n2++) t2 += Kt[e7[n2]];
  return t2;
}
function Ut(e7) {
  const t2 = e7.toString(16);
  return 1 & t2.length ? `0${t2}` : t2;
}
function Ht(e7) {
  if ("string" != typeof e7) throw new Error("hex string expected, got " + typeof e7);
  return BigInt("" === e7 ? "0" : `0x${e7}`);
}
var Ft = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function zt(e7) {
  return e7 >= Ft._0 && e7 <= Ft._9 ? e7 - Ft._0 : e7 >= Ft._A && e7 <= Ft._F ? e7 - (Ft._A - 10) : e7 >= Ft._a && e7 <= Ft._f ? e7 - (Ft._a - 10) : void 0;
}
function qt(e7) {
  if ("string" != typeof e7) throw new Error("hex string expected, got " + typeof e7);
  const t2 = e7.length, n2 = t2 / 2;
  if (t2 % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t2);
  const r2 = new Uint8Array(n2);
  for (let t3 = 0, i = 0; t3 < n2; t3++, i += 2) {
    const n3 = zt(e7.charCodeAt(i)), o = zt(e7.charCodeAt(i + 1));
    if (void 0 === n3 || void 0 === o) {
      const t4 = e7[i] + e7[i + 1];
      throw new Error('hex string expected, got non-hex character "' + t4 + '" at index ' + i);
    }
    r2[t3] = 16 * n3 + o;
  }
  return r2;
}
function Vt(e7, t2) {
  return qt(e7.toString(16).padStart(2 * t2, "0"));
}
function Wt(...e7) {
  let t2 = 0;
  for (let n3 = 0; n3 < e7.length; n3++) {
    const r2 = e7[n3];
    Bt(r2), t2 += r2.length;
  }
  const n2 = new Uint8Array(t2);
  for (let t3 = 0, r2 = 0; t3 < e7.length; t3++) {
    const i = e7[t3];
    n2.set(i, r2), r2 += i.length;
  }
  return n2;
}
var Gt = (e7) => "bigint" == typeof e7 && Tt <= e7;
function Zt(e7, t2, n2) {
  return Gt(e7) && Gt(t2) && Gt(n2) && t2 <= e7 && e7 < n2;
}
Ot.bitMask = (e7) => (Dt << BigInt(e7 - 1)) - Nt;
var Yt = (e7) => new Uint8Array(e7);
var Jt = (e7) => Uint8Array.from(e7);
var Xt = { bigint: (e7) => "bigint" == typeof e7, function: (e7) => "function" == typeof e7, boolean: (e7) => "boolean" == typeof e7, string: (e7) => "string" == typeof e7, stringOrUint8Array: (e7) => "string" == typeof e7 || $t(e7), isSafeInteger: (e7) => Number.isSafeInteger(e7), array: (e7) => Array.isArray(e7), field: (e7, t2) => t2.Fp.isValid(e7), hash: (e7) => "function" == typeof e7 && Number.isSafeInteger(e7.outputLen) };
Ot.notImplemented = () => {
  throw new Error("not implemented");
}, Object.defineProperty(Lt, "__esModule", { value: true }), Lt.isNegativeLE = void 0, Lt.mod = cn, Lt.pow = ln, Lt.pow2 = function(e7, t2, n2) {
  let r2 = e7;
  for (; t2-- > en; ) r2 *= r2, r2 %= n2;
  return r2;
}, Lt.invert = dn, Lt.tonelliShanks = un, Lt.FpSqrt = hn, Lt.validateField = function(e7) {
  const t2 = fn.reduce((e8, t3) => (e8[t3] = "function", e8), { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" });
  return (0, Qt.validateObject)(e7, t2);
}, Lt.FpPow = pn, Lt.FpInvertBatch = gn, Lt.FpDiv = function(e7, t2, n2) {
  return e7.mul(t2, "bigint" == typeof n2 ? dn(n2, e7.ORDER) : e7.inv(n2));
}, Lt.FpLegendre = mn, Lt.FpIsSquare = function(e7) {
  const t2 = mn(e7.ORDER);
  return (n2) => {
    const r2 = t2(e7, n2);
    return e7.eql(r2, e7.ZERO) || e7.eql(r2, e7.ONE);
  };
}, Lt.nLength = yn, Lt.Field = function(e7, t2, n2 = false, r2 = {}) {
  if (e7 <= en) throw new Error(`Expected Field ORDER > 0, got ${e7}`);
  const { nBitLength: i, nByteLength: o } = yn(e7, t2);
  if (o > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
  const s = hn(e7), a2 = Object.freeze({ ORDER: e7, BITS: i, BYTES: o, MASK: (0, Qt.bitMask)(i), ZERO: en, ONE: tn, create: (t3) => cn(t3, e7), isValid: (t3) => {
    if ("bigint" != typeof t3) throw new Error("Invalid field element: expected bigint, got " + typeof t3);
    return en <= t3 && t3 < e7;
  }, is0: (e8) => e8 === en, isOdd: (e8) => (e8 & tn) === tn, neg: (t3) => cn(-t3, e7), eql: (e8, t3) => e8 === t3, sqr: (t3) => cn(t3 * t3, e7), add: (t3, n3) => cn(t3 + n3, e7), sub: (t3, n3) => cn(t3 - n3, e7), mul: (t3, n3) => cn(t3 * n3, e7), pow: (e8, t3) => pn(a2, e8, t3), div: (t3, n3) => cn(t3 * dn(n3, e7), e7), sqrN: (e8) => e8 * e8, addN: (e8, t3) => e8 + t3, subN: (e8, t3) => e8 - t3, mulN: (e8, t3) => e8 * t3, inv: (t3) => dn(t3, e7), sqrt: r2.sqrt || ((e8) => s(a2, e8)), invertBatch: (e8) => gn(a2, e8), cmov: (e8, t3, n3) => n3 ? t3 : e8, toBytes: (e8) => n2 ? (0, Qt.numberToBytesLE)(e8, o) : (0, Qt.numberToBytesBE)(e8, o), fromBytes: (e8) => {
    if (e8.length !== o) throw new Error(`Fp.fromBytes: expected ${o}, got ${e8.length}`);
    return n2 ? (0, Qt.bytesToNumberLE)(e8) : (0, Qt.bytesToNumberBE)(e8);
  } });
  return Object.freeze(a2);
}, Lt.FpSqrtOdd = function(e7, t2) {
  if (!e7.isOdd) throw new Error("Field doesn't have isOdd");
  const n2 = e7.sqrt(t2);
  return e7.isOdd(n2) ? n2 : e7.neg(n2);
}, Lt.FpSqrtEven = function(e7, t2) {
  if (!e7.isOdd) throw new Error("Field doesn't have isOdd");
  const n2 = e7.sqrt(t2);
  return e7.isOdd(n2) ? e7.neg(n2) : n2;
}, Lt.hashToPrivateScalar = function(e7, t2, n2 = false) {
  e7 = (0, Qt.ensureBytes)("privateHash", e7);
  const r2 = e7.length, i = yn(t2).nByteLength + 8;
  if (i < 24 || r2 < i || r2 > 1024) throw new Error(`hashToPrivateScalar: expected ${i}-1024 bytes of input, got ${r2}`);
  const o = n2 ? (0, Qt.bytesToNumberLE)(e7) : (0, Qt.bytesToNumberBE)(e7);
  return cn(o, t2 - tn) + tn;
}, Lt.getFieldBytesLength = vn, Lt.getMinHashLength = bn, Lt.mapHashToField = function(e7, t2, n2 = false) {
  const r2 = e7.length, i = vn(t2), o = bn(t2);
  if (r2 < 16 || r2 < o || r2 > 1024) throw new Error(`expected ${o}-1024 bytes of input, got ${r2}`);
  const s = cn(n2 ? (0, Qt.bytesToNumberBE)(e7) : (0, Qt.bytesToNumberLE)(e7), t2 - tn) + tn;
  return n2 ? (0, Qt.numberToBytesLE)(s, i) : (0, Qt.numberToBytesBE)(s, i);
};
var Qt = Ot;
var en = BigInt(0);
var tn = BigInt(1);
var nn = BigInt(2);
var rn = BigInt(3);
var on2 = BigInt(4);
var sn = BigInt(5);
var an = BigInt(8);
function cn(e7, t2) {
  const n2 = e7 % t2;
  return n2 >= en ? n2 : t2 + n2;
}
function ln(e7, t2, n2) {
  if (n2 <= en || t2 < en) throw new Error("Expected power/modulo > 0");
  if (n2 === tn) return en;
  let r2 = tn;
  for (; t2 > en; ) t2 & tn && (r2 = r2 * e7 % n2), e7 = e7 * e7 % n2, t2 >>= tn;
  return r2;
}
function dn(e7, t2) {
  if (e7 === en || t2 <= en) throw new Error(`invert: expected positive integers, got n=${e7} mod=${t2}`);
  let n2 = cn(e7, t2), r2 = t2, i = en, o = tn;
  for (; n2 !== en; ) {
    const e8 = r2 % n2, t3 = i - o * (r2 / n2);
    r2 = n2, n2 = e8, i = o, o = t3;
  }
  if (r2 !== tn) throw new Error("invert: does not exist");
  return cn(i, t2);
}
function un(e7) {
  const t2 = (e7 - tn) / nn;
  let n2, r2, i;
  for (n2 = e7 - tn, r2 = 0; n2 % nn === en; n2 /= nn, r2++) ;
  for (i = nn; i < e7 && ln(i, t2, e7) !== e7 - tn; i++) ;
  if (1 === r2) {
    const t3 = (e7 + tn) / on2;
    return function(e8, n3) {
      const r3 = e8.pow(n3, t3);
      if (!e8.eql(e8.sqr(r3), n3)) throw new Error("Cannot find square root");
      return r3;
    };
  }
  const o = (n2 + tn) / nn;
  return function(e8, s) {
    if (e8.pow(s, t2) === e8.neg(e8.ONE)) throw new Error("Cannot find square root");
    let a2 = r2, c2 = e8.pow(e8.mul(e8.ONE, i), n2), l2 = e8.pow(s, o), d2 = e8.pow(s, n2);
    for (; !e8.eql(d2, e8.ONE); ) {
      if (e8.eql(d2, e8.ZERO)) return e8.ZERO;
      let t3 = 1;
      for (let n4 = e8.sqr(d2); t3 < a2 && !e8.eql(n4, e8.ONE); t3++) n4 = e8.sqr(n4);
      const n3 = e8.pow(c2, tn << BigInt(a2 - t3 - 1));
      c2 = e8.sqr(n3), l2 = e8.mul(l2, n3), d2 = e8.mul(d2, c2), a2 = t3;
    }
    return l2;
  };
}
function hn(e7) {
  if (e7 % on2 === rn) {
    const t2 = (e7 + tn) / on2;
    return function(e8, n2) {
      const r2 = e8.pow(n2, t2);
      if (!e8.eql(e8.sqr(r2), n2)) throw new Error("Cannot find square root");
      return r2;
    };
  }
  if (e7 % an === sn) {
    const t2 = (e7 - sn) / an;
    return function(e8, n2) {
      const r2 = e8.mul(n2, nn), i = e8.pow(r2, t2), o = e8.mul(n2, i), s = e8.mul(e8.mul(o, nn), i), a2 = e8.mul(o, e8.sub(s, e8.ONE));
      if (!e8.eql(e8.sqr(a2), n2)) throw new Error("Cannot find square root");
      return a2;
    };
  }
  return un(e7);
}
BigInt(9), BigInt(16);
Lt.isNegativeLE = (e7, t2) => (cn(e7, t2) & tn) === tn;
var fn = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function pn(e7, t2, n2) {
  if (n2 < en) throw new Error("Expected power > 0");
  if (n2 === en) return e7.ONE;
  if (n2 === tn) return t2;
  let r2 = e7.ONE, i = t2;
  for (; n2 > en; ) n2 & tn && (r2 = e7.mul(r2, i)), i = e7.sqr(i), n2 >>= tn;
  return r2;
}
function gn(e7, t2) {
  const n2 = new Array(t2.length), r2 = t2.reduce((t3, r3, i2) => e7.is0(r3) ? t3 : (n2[i2] = t3, e7.mul(t3, r3)), e7.ONE), i = e7.inv(r2);
  return t2.reduceRight((t3, r3, i2) => e7.is0(r3) ? t3 : (n2[i2] = e7.mul(t3, n2[i2]), e7.mul(t3, r3)), i), n2;
}
function mn(e7) {
  const t2 = (e7 - tn) / nn;
  return (e8, n2) => e8.pow(n2, t2);
}
function yn(e7, t2) {
  const n2 = void 0 !== t2 ? t2 : e7.toString(2).length;
  return { nBitLength: n2, nByteLength: Math.ceil(n2 / 8) };
}
function vn(e7) {
  if ("bigint" != typeof e7) throw new Error("field order must be bigint");
  const t2 = e7.toString(2).length;
  return Math.ceil(t2 / 8);
}
function bn(e7) {
  const t2 = vn(e7);
  return t2 + Math.ceil(t2 / 2);
}
Object.defineProperty(Pt, "__esModule", { value: true }), Pt.wNAF = function(e7, t2) {
  const n2 = (e8, t3) => {
    const n3 = t3.negate();
    return e8 ? n3 : t3;
  }, r2 = (e8) => {
    if (!Number.isSafeInteger(e8) || e8 <= 0 || e8 > t2) throw new Error(`Wrong window size=${e8}, should be [1..${t2}]`);
  }, i = (e8) => {
    r2(e8);
    return { windows: Math.ceil(t2 / e8) + 1, windowSize: 2 ** (e8 - 1) };
  };
  return { constTimeNegate: n2, unsafeLadder(t3, n3) {
    let r3 = e7.ZERO, i2 = t3;
    for (; n3 > Cn; ) n3 & Sn && (r3 = r3.add(i2)), i2 = i2.double(), n3 >>= Sn;
    return r3;
  }, precomputeWindow(e8, t3) {
    const { windows: n3, windowSize: r3 } = i(t3), o = [];
    let s = e8, a2 = s;
    for (let e9 = 0; e9 < n3; e9++) {
      a2 = s, o.push(a2);
      for (let e10 = 1; e10 < r3; e10++) a2 = a2.add(s), o.push(a2);
      s = a2.double();
    }
    return o;
  }, wNAF(t3, r3, o) {
    const { windows: s, windowSize: a2 } = i(t3);
    let c2 = e7.ZERO, l2 = e7.BASE;
    const d2 = BigInt(2 ** t3 - 1), u2 = 2 ** t3, h2 = BigInt(t3);
    for (let e8 = 0; e8 < s; e8++) {
      const t4 = e8 * a2;
      let i2 = Number(o & d2);
      o >>= h2, i2 > a2 && (i2 -= u2, o += Sn);
      const s2 = t4, f3 = t4 + Math.abs(i2) - 1, p2 = e8 % 2 != 0, g2 = i2 < 0;
      0 === i2 ? l2 = l2.add(n2(p2, r3[s2])) : c2 = c2.add(n2(g2, r3[f3]));
    }
    return { p: c2, f: l2 };
  }, wNAFCached(e8, t3, n3) {
    const r3 = kn.get(e8) || 1;
    let i2 = _n.get(e8);
    return i2 || (i2 = this.precomputeWindow(e8, r3), 1 !== r3 && _n.set(e8, n3(i2))), this.wNAF(r3, i2, t3);
  }, setWindowSize(e8, t3) {
    r2(t3), kn.set(e8, t3), _n.delete(e8);
  } };
}, Pt.pippenger = function(e7, t2, n2, r2) {
  if (!Array.isArray(n2) || !Array.isArray(r2) || r2.length !== n2.length) throw new Error("arrays of points and scalars must have equal length");
  r2.forEach((e8, n3) => {
    if (!t2.isValid(e8)) throw new Error(`wrong scalar at index ${n3}`);
  }), n2.forEach((t3, n3) => {
    if (!(t3 instanceof e7)) throw new Error(`wrong point at index ${n3}`);
  });
  const i = (0, En.bitLen)(BigInt(n2.length)), o = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1, s = (1 << o) - 1, a2 = new Array(s + 1).fill(e7.ZERO), c2 = Math.floor((t2.BITS - 1) / o) * o;
  let l2 = e7.ZERO;
  for (let t3 = c2; t3 >= 0; t3 -= o) {
    a2.fill(e7.ZERO);
    for (let e8 = 0; e8 < r2.length; e8++) {
      const i3 = r2[e8], o2 = Number(i3 >> BigInt(t3) & BigInt(s));
      a2[o2] = a2[o2].add(n2[e8]);
    }
    let i2 = e7.ZERO;
    for (let t4 = a2.length - 1, n3 = e7.ZERO; t4 > 0; t4--) n3 = n3.add(a2[t4]), i2 = i2.add(n3);
    if (l2 = l2.add(i2), 0 !== t3) for (let e8 = 0; e8 < o; e8++) l2 = l2.double();
  }
  return l2;
}, Pt.validateBasic = function(e7) {
  return (0, wn.validateField)(e7.Fp), (0, En.validateObject)(e7, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...(0, wn.nLength)(e7.n, e7.nBitLength), ...e7, p: e7.Fp.ORDER });
};
var wn = Lt;
var En = Ot;
var Cn = BigInt(0);
var Sn = BigInt(1);
var _n = /* @__PURE__ */ new WeakMap();
var kn = /* @__PURE__ */ new WeakMap();
Object.defineProperty(Rt, "__esModule", { value: true }), Rt.twistedEdwards = function(e7) {
  const t2 = function(e8) {
    const t3 = (0, xn.validateBasic)(e8);
    return An.validateObject(e8, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...t3 });
  }(e7), { Fp: n2, n: r2, prehash: i, hash: o, randomBytes: s, nByteLength: a2, h: c2 } = t2, l2 = Ln << BigInt(8 * a2) - Pn, d2 = n2.create, u2 = (0, Mn.Field)(t2.n, t2.nBitLength), h2 = t2.uvRatio || ((e8, t3) => {
    try {
      return { isValid: true, value: n2.sqrt(e8 * n2.inv(t3)) };
    } catch (e9) {
      return { isValid: false, value: Rn };
    }
  }), f3 = t2.adjustScalarBytes || ((e8) => e8), p2 = t2.domain || ((e8, t3, n3) => {
    if ((0, In.abool)("phflag", n3), t3.length || n3) throw new Error("Contexts/pre-hash are not supported");
    return e8;
  });
  function g2(e8, t3) {
    An.aInRange("coordinate " + e8, t3, Rn, l2);
  }
  function m2(e8) {
    if (!(e8 instanceof b2)) throw new Error("ExtendedPoint expected");
  }
  const y2 = (0, In.memoized)((e8, t3) => {
    const { ex: r3, ey: i2, ez: o2 } = e8, s2 = e8.is0();
    null == t3 && (t3 = s2 ? On : n2.inv(o2));
    const a3 = d2(r3 * t3), c3 = d2(i2 * t3), l3 = d2(o2 * t3);
    if (s2) return { x: Rn, y: Pn };
    if (l3 !== Pn) throw new Error("invZ was invalid");
    return { x: a3, y: c3 };
  }), v2 = (0, In.memoized)((e8) => {
    const { a: n3, d: r3 } = t2;
    if (e8.is0()) throw new Error("bad point: ZERO");
    const { ex: i2, ey: o2, ez: s2, et: a3 } = e8, c3 = d2(i2 * i2), l3 = d2(o2 * o2), u3 = d2(s2 * s2), h3 = d2(u3 * u3), f4 = d2(c3 * n3);
    if (d2(u3 * d2(f4 + l3)) !== d2(h3 + d2(r3 * d2(c3 * l3)))) throw new Error("bad point: equation left != right (1)");
    if (d2(i2 * o2) !== d2(s2 * a3)) throw new Error("bad point: equation left != right (2)");
    return true;
  });
  class b2 {
    constructor(e8, t3, n3, r3) {
      this.ex = e8, this.ey = t3, this.ez = n3, this.et = r3, g2("x", e8), g2("y", t3), g2("z", n3), g2("t", r3), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(e8) {
      if (e8 instanceof b2) throw new Error("extended point not allowed");
      const { x: t3, y: n3 } = e8 || {};
      return g2("x", t3), g2("y", n3), new b2(t3, n3, Pn, d2(t3 * n3));
    }
    static normalizeZ(e8) {
      const t3 = n2.invertBatch(e8.map((e9) => e9.ez));
      return e8.map((e9, n3) => e9.toAffine(t3[n3])).map(b2.fromAffine);
    }
    static msm(e8, t3) {
      return (0, xn.pippenger)(b2, u2, e8, t3);
    }
    _setWindowSize(e8) {
      C2.setWindowSize(this, e8);
    }
    assertValidity() {
      v2(this);
    }
    equals(e8) {
      m2(e8);
      const { ex: t3, ey: n3, ez: r3 } = this, { ex: i2, ey: o2, ez: s2 } = e8, a3 = d2(t3 * s2), c3 = d2(i2 * r3), l3 = d2(n3 * s2), u3 = d2(o2 * r3);
      return a3 === c3 && l3 === u3;
    }
    is0() {
      return this.equals(b2.ZERO);
    }
    negate() {
      return new b2(d2(-this.ex), this.ey, this.ez, d2(-this.et));
    }
    double() {
      const { a: e8 } = t2, { ex: n3, ey: r3, ez: i2 } = this, o2 = d2(n3 * n3), s2 = d2(r3 * r3), a3 = d2(Ln * d2(i2 * i2)), c3 = d2(e8 * o2), l3 = n3 + r3, u3 = d2(d2(l3 * l3) - o2 - s2), h3 = c3 + s2, f4 = h3 - a3, p3 = c3 - s2, g3 = d2(u3 * f4), m3 = d2(h3 * p3), y3 = d2(u3 * p3), v6 = d2(f4 * h3);
      return new b2(g3, m3, v6, y3);
    }
    add(e8) {
      m2(e8);
      const { a: n3, d: r3 } = t2, { ex: i2, ey: o2, ez: s2, et: a3 } = this, { ex: c3, ey: l3, ez: u3, et: h3 } = e8;
      if (n3 === BigInt(-1)) {
        const e9 = d2((o2 - i2) * (l3 + c3)), t3 = d2((o2 + i2) * (l3 - c3)), n4 = d2(t3 - e9);
        if (n4 === Rn) return this.double();
        const r4 = d2(s2 * Ln * h3), f5 = d2(a3 * Ln * u3), p4 = f5 + r4, g4 = t3 + e9, m3 = f5 - r4, y4 = d2(p4 * n4), v7 = d2(g4 * m3), w4 = d2(p4 * m3), E4 = d2(n4 * g4);
        return new b2(y4, v7, E4, w4);
      }
      const f4 = d2(i2 * c3), p3 = d2(o2 * l3), g3 = d2(a3 * r3 * h3), y3 = d2(s2 * u3), v6 = d2((i2 + o2) * (c3 + l3) - f4 - p3), w3 = y3 - g3, E3 = y3 + g3, C3 = d2(p3 - n3 * f4), S3 = d2(v6 * w3), _3 = d2(E3 * C3), k3 = d2(v6 * C3), x3 = d2(w3 * E3);
      return new b2(S3, _3, x3, k3);
    }
    subtract(e8) {
      return this.add(e8.negate());
    }
    wNAF(e8) {
      return C2.wNAFCached(this, e8, b2.normalizeZ);
    }
    multiply(e8) {
      const t3 = e8;
      An.aInRange("scalar", t3, Pn, r2);
      const { p: n3, f: i2 } = this.wNAF(t3);
      return b2.normalizeZ([n3, i2])[0];
    }
    multiplyUnsafe(e8) {
      const t3 = e8;
      return An.aInRange("scalar", t3, Rn, r2), t3 === Rn ? E2 : this.equals(E2) || t3 === Pn ? this : this.equals(w2) ? this.wNAF(t3).p : C2.unsafeLadder(this, t3);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(c2).is0();
    }
    isTorsionFree() {
      return C2.unsafeLadder(this, r2).is0();
    }
    toAffine(e8) {
      return y2(this, e8);
    }
    clearCofactor() {
      const { h: e8 } = t2;
      return e8 === Pn ? this : this.multiplyUnsafe(e8);
    }
    static fromHex(e8, r3 = false) {
      const { d: i2, a: o2 } = t2, s2 = n2.BYTES;
      e8 = (0, In.ensureBytes)("pointHex", e8, s2), (0, In.abool)("zip215", r3);
      const a3 = e8.slice(), c3 = e8[s2 - 1];
      a3[s2 - 1] = -129 & c3;
      const u3 = An.bytesToNumberLE(a3), f4 = r3 ? l2 : n2.ORDER;
      An.aInRange("pointHex.y", u3, Rn, f4);
      const p3 = d2(u3 * u3), g3 = d2(p3 - Pn), m3 = d2(i2 * p3 - o2);
      let { isValid: y3, value: v6 } = h2(g3, m3);
      if (!y3) throw new Error("Point.fromHex: invalid y coordinate");
      const w3 = (v6 & Pn) === Pn, E3 = 0 != (128 & c3);
      if (!r3 && v6 === Rn && E3) throw new Error("Point.fromHex: x=0 and x_0=1");
      return E3 !== w3 && (v6 = d2(-v6)), b2.fromAffine({ x: v6, y: u3 });
    }
    static fromPrivateKey(e8) {
      return k2(e8).point;
    }
    toRawBytes() {
      const { x: e8, y: t3 } = this.toAffine(), r3 = An.numberToBytesLE(t3, n2.BYTES);
      return r3[r3.length - 1] |= e8 & Pn ? 128 : 0, r3;
    }
    toHex() {
      return An.bytesToHex(this.toRawBytes());
    }
  }
  b2.BASE = new b2(t2.Gx, t2.Gy, Pn, d2(t2.Gx * t2.Gy)), b2.ZERO = new b2(Rn, Pn, Pn, Rn);
  const { BASE: w2, ZERO: E2 } = b2, C2 = (0, xn.wNAF)(b2, 8 * a2);
  function S2(e8) {
    return (0, Mn.mod)(e8, r2);
  }
  function _2(e8) {
    return S2(An.bytesToNumberLE(e8));
  }
  function k2(e8) {
    const t3 = a2;
    e8 = (0, In.ensureBytes)("private key", e8, t3);
    const n3 = (0, In.ensureBytes)("hashed private key", o(e8), 2 * t3), r3 = f3(n3.slice(0, t3)), i2 = n3.slice(t3, 2 * t3), s2 = _2(r3), c3 = w2.multiply(s2), l3 = c3.toRawBytes();
    return { head: r3, prefix: i2, scalar: s2, point: c3, pointBytes: l3 };
  }
  function x2(e8 = new Uint8Array(), ...t3) {
    const n3 = An.concatBytes(...t3);
    return _2(o(p2(n3, (0, In.ensureBytes)("context", e8), !!i)));
  }
  const M2 = Tn;
  w2._setWindowSize(8);
  const A2 = { getExtendedPublicKey: k2, randomPrivateKey: () => s(n2.BYTES), precompute: (e8 = 8, t3 = b2.BASE) => (t3._setWindowSize(e8), t3.multiply(BigInt(3)), t3) };
  return { CURVE: t2, getPublicKey: function(e8) {
    return k2(e8).pointBytes;
  }, sign: function(e8, t3, o2 = {}) {
    e8 = (0, In.ensureBytes)("message", e8), i && (e8 = i(e8));
    const { prefix: s2, scalar: c3, pointBytes: l3 } = k2(t3), d3 = x2(o2.context, s2, e8), u3 = w2.multiply(d3).toRawBytes(), h3 = S2(d3 + x2(o2.context, u3, l3, e8) * c3);
    An.aInRange("signature.s", h3, Rn, r2);
    const f4 = An.concatBytes(u3, An.numberToBytesLE(h3, n2.BYTES));
    return (0, In.ensureBytes)("result", f4, 2 * a2);
  }, verify: function(e8, t3, r3, o2 = M2) {
    const { context: s2, zip215: a3 } = o2, c3 = n2.BYTES;
    e8 = (0, In.ensureBytes)("signature", e8, 2 * c3), t3 = (0, In.ensureBytes)("message", t3), void 0 !== a3 && (0, In.abool)("zip215", a3), i && (t3 = i(t3));
    const l3 = An.bytesToNumberLE(e8.slice(c3, 2 * c3));
    let d3, u3, h3;
    try {
      d3 = b2.fromHex(r3, a3), u3 = b2.fromHex(e8.slice(0, c3), a3), h3 = w2.multiplyUnsafe(l3);
    } catch (e9) {
      return false;
    }
    if (!a3 && d3.isSmallOrder()) return false;
    const f4 = x2(s2, u3.toRawBytes(), d3.toRawBytes(), t3);
    return u3.add(d3.multiplyUnsafe(f4)).subtract(h3).clearCofactor().equals(b2.ZERO);
  }, ExtendedPoint: b2, utils: A2 };
};
var xn = Pt;
var Mn = Lt;
var An = Ot;
var In = Ot;
var Rn = BigInt(0);
var Pn = BigInt(1);
var Ln = BigInt(2);
var On = BigInt(8);
var Tn = { zip215: true };
var Nn = {};
Object.defineProperty(Nn, "__esModule", { value: true }), Nn.expand_message_xmd = Hn, Nn.expand_message_xof = Fn, Nn.hash_to_field = zn, Nn.isogenyMap = function(e7, t2) {
  const n2 = t2.map((e8) => Array.from(e8).reverse());
  return (t3, r2) => {
    const [i, o, s, a2] = n2.map((n3) => n3.reduce((n4, r3) => e7.add(e7.mul(n4, t3), r3)));
    return t3 = e7.div(i, o), r2 = e7.mul(r2, e7.div(s, a2)), { x: t3, y: r2 };
  };
}, Nn.createHasher = function(e7, t2, n2) {
  if ("function" != typeof t2) throw new Error("mapToCurve() must be defined");
  return { hashToCurve(r2, i) {
    const o = zn(r2, 2, { ...n2, DST: n2.DST, ...i }), s = e7.fromAffine(t2(o[0])), a2 = e7.fromAffine(t2(o[1])), c2 = s.add(a2).clearCofactor();
    return c2.assertValidity(), c2;
  }, encodeToCurve(r2, i) {
    const o = zn(r2, 1, { ...n2, DST: n2.encodeDST, ...i }), s = e7.fromAffine(t2(o[0])).clearCofactor();
    return s.assertValidity(), s;
  }, mapToCurve(n3) {
    if (!Array.isArray(n3)) throw new Error("mapToCurve: expected array of bigints");
    for (const e8 of n3) if ("bigint" != typeof e8) throw new Error(`mapToCurve: expected array of bigints, got ${e8} in array`);
    const r2 = e7.fromAffine(t2(n3)).clearCofactor();
    return r2.assertValidity(), r2;
  } };
};
var Dn = Lt;
var $n = Ot;
var Bn = $n.bytesToNumberBE;
function Kn(e7, t2) {
  if (Un(e7), Un(t2), e7 < 0 || e7 >= 1 << 8 * t2) throw new Error(`bad I2OSP call: value=${e7} length=${t2}`);
  const n2 = Array.from({ length: t2 }).fill(0);
  for (let r2 = t2 - 1; r2 >= 0; r2--) n2[r2] = 255 & e7, e7 >>>= 8;
  return new Uint8Array(n2);
}
function jn(e7, t2) {
  const n2 = new Uint8Array(e7.length);
  for (let r2 = 0; r2 < e7.length; r2++) n2[r2] = e7[r2] ^ t2[r2];
  return n2;
}
function Un(e7) {
  if (!Number.isSafeInteger(e7)) throw new Error("number expected");
}
function Hn(e7, t2, n2, r2) {
  (0, $n.abytes)(e7), (0, $n.abytes)(t2), Un(n2), t2.length > 255 && (t2 = r2((0, $n.concatBytes)((0, $n.utf8ToBytes)("H2C-OVERSIZE-DST-"), t2)));
  const { outputLen: i, blockLen: o } = r2, s = Math.ceil(n2 / i);
  if (n2 > 65535 || s > 255) throw new Error("expand_message_xmd: invalid lenInBytes");
  const a2 = (0, $n.concatBytes)(t2, Kn(t2.length, 1)), c2 = Kn(0, o), l2 = Kn(n2, 2), d2 = new Array(s), u2 = r2((0, $n.concatBytes)(c2, e7, l2, Kn(0, 1), a2));
  d2[0] = r2((0, $n.concatBytes)(u2, Kn(1, 1), a2));
  for (let e8 = 1; e8 <= s; e8++) {
    const t3 = [jn(u2, d2[e8 - 1]), Kn(e8 + 1, 1), a2];
    d2[e8] = r2((0, $n.concatBytes)(...t3));
  }
  return (0, $n.concatBytes)(...d2).slice(0, n2);
}
function Fn(e7, t2, n2, r2, i) {
  if ((0, $n.abytes)(e7), (0, $n.abytes)(t2), Un(n2), t2.length > 255) {
    const e8 = Math.ceil(2 * r2 / 8);
    t2 = i.create({ dkLen: e8 }).update((0, $n.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(t2).digest();
  }
  if (n2 > 65535 || t2.length > 255) throw new Error("expand_message_xof: invalid lenInBytes");
  return i.create({ dkLen: n2 }).update(e7).update(Kn(n2, 2)).update(t2).update(Kn(t2.length, 1)).digest();
}
function zn(e7, t2, n2) {
  (0, $n.validateObject)(n2, { DST: "stringOrUint8Array", p: "bigint", m: "isSafeInteger", k: "isSafeInteger", hash: "hash" });
  const { p: r2, k: i, m: o, hash: s, expand: a2, DST: c2 } = n2;
  (0, $n.abytes)(e7), Un(t2);
  const l2 = "string" == typeof c2 ? (0, $n.utf8ToBytes)(c2) : c2, d2 = r2.toString(2).length, u2 = Math.ceil((d2 + i) / 8), h2 = t2 * o * u2;
  let f3;
  if ("xmd" === a2) f3 = Hn(e7, l2, h2, s);
  else if ("xof" === a2) f3 = Fn(e7, l2, h2, i, s);
  else {
    if ("_internal_pass" !== a2) throw new Error('expand must be "xmd" or "xof"');
    f3 = e7;
  }
  const p2 = new Array(t2);
  for (let e8 = 0; e8 < t2; e8++) {
    const t3 = new Array(o);
    for (let n3 = 0; n3 < o; n3++) {
      const i2 = u2 * (n3 + e8 * o), s2 = f3.subarray(i2, i2 + u2);
      t3[n3] = (0, Dn.mod)(Bn(s2), r2);
    }
    p2[e8] = t3;
  }
  return p2;
}
var qn = {};
Object.defineProperty(qn, "__esModule", { value: true }), qn.montgomery = function(e7) {
  const t2 = function(e8) {
    return (0, Wn.validateObject)(e8, { a: "bigint" }, { montgomeryBits: "isSafeInteger", nByteLength: "isSafeInteger", adjustScalarBytes: "function", domain: "function", powPminus2: "function", Gu: "bigint" }), Object.freeze({ ...e8 });
  }(e7), { P: n2 } = t2, r2 = (e8) => (0, Vn.mod)(e8, n2), i = t2.montgomeryBits, o = Math.ceil(i / 8), s = t2.nByteLength, a2 = t2.adjustScalarBytes || ((e8) => e8), c2 = t2.powPminus2 || ((e8) => (0, Vn.pow)(e8, n2 - BigInt(2), n2));
  function l2(e8, t3, n3) {
    const i2 = r2(e8 * (t3 - n3));
    return [t3 = r2(t3 - i2), n3 = r2(n3 + i2)];
  }
  const d2 = (t2.a - BigInt(2)) / BigInt(4);
  function u2(e8) {
    return (0, Wn.numberToBytesLE)(r2(e8), o);
  }
  function h2(e8, t3) {
    const h3 = function(e9) {
      const t4 = (0, Wn.ensureBytes)("u coordinate", e9, o);
      return 32 === s && (t4[31] &= 127), (0, Wn.bytesToNumberLE)(t4);
    }(t3), f4 = function(e9) {
      const t4 = (0, Wn.ensureBytes)("scalar", e9), n3 = t4.length;
      if (n3 !== o && n3 !== s) throw new Error(`Expected ${o} or ${s} bytes, got ${n3}`);
      return (0, Wn.bytesToNumberLE)(a2(t4));
    }(e8), p3 = function(e9, t4) {
      (0, Wn.aInRange)("u", e9, Gn, n2), (0, Wn.aInRange)("scalar", t4, Gn, n2);
      const o2 = t4, s2 = e9;
      let a3, u3 = Zn, h4 = Gn, f5 = e9, p4 = Zn, g2 = Gn;
      for (let e10 = BigInt(i - 1); e10 >= Gn; e10--) {
        const t5 = o2 >> e10 & Zn;
        g2 ^= t5, a3 = l2(g2, u3, f5), u3 = a3[0], f5 = a3[1], a3 = l2(g2, h4, p4), h4 = a3[0], p4 = a3[1], g2 = t5;
        const n3 = u3 + h4, i2 = r2(n3 * n3), c3 = u3 - h4, m3 = r2(c3 * c3), y2 = i2 - m3, v2 = f5 + p4, b2 = r2((f5 - p4) * n3), w2 = r2(v2 * c3), E2 = b2 + w2, C2 = b2 - w2;
        f5 = r2(E2 * E2), p4 = r2(s2 * r2(C2 * C2)), u3 = r2(i2 * m3), h4 = r2(y2 * (i2 + r2(d2 * y2)));
      }
      a3 = l2(g2, u3, f5), u3 = a3[0], f5 = a3[1], a3 = l2(g2, h4, p4), h4 = a3[0], p4 = a3[1];
      const m2 = c2(h4);
      return r2(u3 * m2);
    }(h3, f4);
    if (p3 === Gn) throw new Error("Invalid private or public key received");
    return u2(p3);
  }
  const f3 = u2(t2.Gu);
  function p2(e8) {
    return h2(e8, f3);
  }
  return { scalarMult: h2, scalarMultBase: p2, getSharedSecret: (e8, t3) => h2(e8, t3), getPublicKey: (e8) => p2(e8), utils: { randomPrivateKey: () => t2.randomBytes(t2.nByteLength) }, GuBytes: f3 };
};
var Vn = Lt;
var Wn = Ot;
var Gn = BigInt(0);
var Zn = BigInt(1);
!function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.hash_to_ristretto255 = e7.hashToRistretto255 = e7.RistrettoPoint = e7.encodeToCurve = e7.hashToCurve = e7.edwardsToMontgomery = e7.x25519 = e7.ed25519ph = e7.ed25519ctx = e7.ed25519 = e7.ED25519_TORSION_SUBGROUP = void 0, e7.edwardsToMontgomeryPub = C2, e7.edwardsToMontgomeryPriv = function(e8) {
    const t3 = w2.hash(e8.subarray(0, 32));
    return w2.adjustScalarBytes(t3).subarray(0, 32);
  };
  const t2 = Le, n2 = Fe, r2 = Rt, i = Nn, o = Lt, s = qn, a2 = Ot, c2 = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), l2 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"), d2 = BigInt(0), u2 = BigInt(1), h2 = BigInt(2), f3 = BigInt(3), p2 = BigInt(5), g2 = BigInt(8);
  function m2(e8) {
    const t3 = BigInt(10), n3 = BigInt(20), r3 = BigInt(40), i2 = BigInt(80), s2 = c2, a3 = e8 * e8 % s2 * e8 % s2, l3 = (0, o.pow2)(a3, h2, s2) * a3 % s2, d3 = (0, o.pow2)(l3, u2, s2) * e8 % s2, f4 = (0, o.pow2)(d3, p2, s2) * d3 % s2, g3 = (0, o.pow2)(f4, t3, s2) * f4 % s2, m3 = (0, o.pow2)(g3, n3, s2) * g3 % s2, y3 = (0, o.pow2)(m3, r3, s2) * m3 % s2, v6 = (0, o.pow2)(y3, i2, s2) * y3 % s2, b3 = (0, o.pow2)(v6, i2, s2) * y3 % s2, w3 = (0, o.pow2)(b3, t3, s2) * f4 % s2;
    return { pow_p_5_8: (0, o.pow2)(w3, h2, s2) * e8 % s2, b2: a3 };
  }
  function y2(e8) {
    return e8[0] &= 248, e8[31] &= 127, e8[31] |= 64, e8;
  }
  function v2(e8, t3) {
    const n3 = c2, r3 = (0, o.mod)(t3 * t3 * t3, n3), i2 = m2(e8 * (0, o.mod)(r3 * r3 * t3, n3)).pow_p_5_8;
    let s2 = (0, o.mod)(e8 * r3 * i2, n3);
    const a3 = (0, o.mod)(t3 * s2 * s2, n3), d3 = s2, u3 = (0, o.mod)(s2 * l2, n3), h3 = a3 === e8, f4 = a3 === (0, o.mod)(-e8, n3), p3 = a3 === (0, o.mod)(-e8 * l2, n3);
    return h3 && (s2 = d3), (f4 || p3) && (s2 = u3), (0, o.isNegativeLE)(s2, n3) && (s2 = (0, o.mod)(-s2, n3)), { isValid: h3 || f4, value: s2 };
  }
  e7.ED25519_TORSION_SUBGROUP = ["0100000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a", "0000000000000000000000000000000000000000000000000000000000000080", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05", "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85", "0000000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"];
  const b2 = (() => (0, o.Field)(c2, void 0, true))(), w2 = (() => ({ a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: b2, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: g2, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: t2.sha512, randomBytes: n2.randomBytes, adjustScalarBytes: y2, uvRatio: v2 }))();
  function E2(e8, t3, r3) {
    if (t3.length > 255) throw new Error("Context is too big");
    return (0, n2.concatBytes)((0, n2.utf8ToBytes)("SigEd25519 no Ed25519 collisions"), new Uint8Array([r3 ? 1 : 0, t3.length]), t3, e8);
  }
  function C2(t3) {
    const { y: n3 } = e7.ed25519.ExtendedPoint.fromHex(t3), r3 = BigInt(1);
    return b2.toBytes(b2.create((r3 + n3) * b2.inv(r3 - n3)));
  }
  e7.ed25519 = (0, r2.twistedEdwards)(w2), e7.ed25519ctx = (0, r2.twistedEdwards)({ ...w2, domain: E2 }), e7.ed25519ph = (0, r2.twistedEdwards)(Object.assign({}, w2, { domain: E2, prehash: t2.sha512 })), e7.x25519 = (0, s.montgomery)({ P: c2, a: BigInt(486662), montgomeryBits: 255, nByteLength: 32, Gu: BigInt(9), powPminus2: (e8) => {
    const t3 = c2, { pow_p_5_8: n3, b2: r3 } = m2(e8);
    return (0, o.mod)((0, o.pow2)(n3, f3, t3) * r3, t3);
  }, adjustScalarBytes: y2, randomBytes: n2.randomBytes }), e7.edwardsToMontgomery = C2;
  const S2 = (() => (b2.ORDER + f3) / g2)(), _2 = (() => b2.pow(h2, S2))(), k2 = (() => b2.sqrt(b2.neg(b2.ONE)))();
  const x2 = (() => (0, o.FpSqrtEven)(b2, b2.neg(BigInt(486664))))();
  function M2(e8) {
    const { xMn: t3, xMd: n3, yMn: r3, yMd: i2 } = function(e9) {
      const t4 = (b2.ORDER - p2) / g2, n4 = BigInt(486662);
      let r4 = b2.sqr(e9);
      r4 = b2.mul(r4, h2);
      let i3 = b2.add(r4, b2.ONE), o3 = b2.neg(n4), s3 = b2.sqr(i3), a4 = b2.mul(s3, i3), c4 = b2.mul(r4, n4);
      c4 = b2.mul(c4, o3), c4 = b2.add(c4, s3), c4 = b2.mul(c4, o3);
      let l4 = b2.sqr(a4);
      s3 = b2.sqr(l4), l4 = b2.mul(l4, a4), l4 = b2.mul(l4, c4), s3 = b2.mul(s3, l4);
      let d4 = b2.pow(s3, t4);
      d4 = b2.mul(d4, l4);
      let f5 = b2.mul(d4, k2);
      s3 = b2.sqr(d4), s3 = b2.mul(s3, a4);
      let m3 = b2.eql(s3, c4), y3 = b2.cmov(f5, d4, m3), v6 = b2.mul(o3, r4), w3 = b2.mul(d4, e9);
      w3 = b2.mul(w3, _2);
      let E3 = b2.mul(w3, k2), C3 = b2.mul(c4, r4);
      s3 = b2.sqr(w3), s3 = b2.mul(s3, a4);
      let S3 = b2.eql(s3, C3), x3 = b2.cmov(E3, w3, S3);
      s3 = b2.sqr(y3), s3 = b2.mul(s3, a4);
      let M3 = b2.eql(s3, c4), A3 = b2.cmov(v6, o3, M3), I3 = b2.cmov(x3, y3, M3), R3 = b2.isOdd(I3);
      return I3 = b2.cmov(I3, b2.neg(I3), M3 !== R3), { xMn: A3, xMd: i3, yMn: I3, yMd: u2 };
    }(e8);
    let o2 = b2.mul(t3, i2);
    o2 = b2.mul(o2, x2);
    let s2 = b2.mul(n3, r3), a3 = b2.sub(t3, n3), c3 = b2.add(t3, n3), l3 = b2.mul(s2, c3), d3 = b2.eql(l3, b2.ZERO);
    o2 = b2.cmov(o2, b2.ZERO, d3), s2 = b2.cmov(s2, b2.ONE, d3), a3 = b2.cmov(a3, b2.ONE, d3), c3 = b2.cmov(c3, b2.ONE, d3);
    const f4 = b2.invertBatch([s2, c3]);
    return { x: b2.mul(o2, f4[0]), y: b2.mul(a3, f4[1]) };
  }
  const A2 = (() => (0, i.createHasher)(e7.ed25519.ExtendedPoint, (e8) => M2(e8[0]), { DST: "edwards25519_XMD:SHA-512_ELL2_RO_", encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_", p: b2.ORDER, m: 1, k: 128, expand: "xmd", hash: t2.sha512 }))();
  function I2(e8) {
    if (!(e8 instanceof K2)) throw new Error("RistrettoPoint expected");
  }
  e7.hashToCurve = A2.hashToCurve, e7.encodeToCurve = A2.encodeToCurve;
  const R2 = l2, P2 = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"), L2 = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"), O2 = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"), T2 = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952"), N2 = (e8) => v2(u2, e8), D2 = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), $2 = (t3) => e7.ed25519.CURVE.Fp.create((0, a2.bytesToNumberLE)(t3) & D2);
  function B2(t3) {
    const { d: n3 } = e7.ed25519.CURVE, r3 = e7.ed25519.CURVE.Fp.ORDER, i2 = e7.ed25519.CURVE.Fp.create, s2 = i2(R2 * t3 * t3), a3 = i2((s2 + u2) * O2);
    let c3 = BigInt(-1);
    const l3 = i2((c3 - n3 * s2) * i2(s2 + n3));
    let { isValid: d3, value: h3 } = v2(a3, l3), f4 = i2(h3 * t3);
    (0, o.isNegativeLE)(f4, r3) || (f4 = i2(-f4)), d3 || (h3 = f4), d3 || (c3 = s2);
    const p3 = i2(c3 * (s2 - u2) * T2 - l3), g3 = h3 * h3, m3 = i2((h3 + h3) * l3), y3 = i2(p3 * P2), b3 = i2(u2 - g3), w3 = i2(u2 + g3);
    return new e7.ed25519.ExtendedPoint(i2(m3 * w3), i2(b3 * y3), i2(y3 * w3), i2(m3 * b3));
  }
  class K2 {
    constructor(e8) {
      this.ep = e8;
    }
    static fromAffine(t3) {
      return new K2(e7.ed25519.ExtendedPoint.fromAffine(t3));
    }
    static hashToCurve(e8) {
      e8 = (0, a2.ensureBytes)("ristrettoHash", e8, 64);
      const t3 = B2($2(e8.slice(0, 32))), n3 = B2($2(e8.slice(32, 64)));
      return new K2(t3.add(n3));
    }
    static fromHex(t3) {
      t3 = (0, a2.ensureBytes)("ristrettoHex", t3, 32);
      const { a: n3, d: r3 } = e7.ed25519.CURVE, i2 = e7.ed25519.CURVE.Fp.ORDER, s2 = e7.ed25519.CURVE.Fp.create, c3 = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", l3 = $2(t3);
      if (!(0, a2.equalBytes)((0, a2.numberToBytesLE)(l3, 32), t3) || (0, o.isNegativeLE)(l3, i2)) throw new Error(c3);
      const h3 = s2(l3 * l3), f4 = s2(u2 + n3 * h3), p3 = s2(u2 - n3 * h3), g3 = s2(f4 * f4), m3 = s2(p3 * p3), y3 = s2(n3 * r3 * g3 - m3), { isValid: v6, value: b3 } = N2(s2(y3 * m3)), w3 = s2(b3 * p3), E3 = s2(b3 * w3 * y3);
      let C3 = s2((l3 + l3) * w3);
      (0, o.isNegativeLE)(C3, i2) && (C3 = s2(-C3));
      const S3 = s2(f4 * E3), _3 = s2(C3 * S3);
      if (!v6 || (0, o.isNegativeLE)(_3, i2) || S3 === d2) throw new Error(c3);
      return new K2(new e7.ed25519.ExtendedPoint(C3, S3, u2, _3));
    }
    toRawBytes() {
      let { ex: t3, ey: n3, ez: r3, et: i2 } = this.ep;
      const s2 = e7.ed25519.CURVE.Fp.ORDER, c3 = e7.ed25519.CURVE.Fp.create, l3 = c3(c3(r3 + n3) * c3(r3 - n3)), d3 = c3(t3 * n3), u3 = c3(d3 * d3), { value: h3 } = N2(c3(l3 * u3)), f4 = c3(h3 * l3), p3 = c3(h3 * d3), g3 = c3(f4 * p3 * i2);
      let m3;
      if ((0, o.isNegativeLE)(i2 * g3, s2)) {
        let e8 = c3(n3 * R2), r4 = c3(t3 * R2);
        t3 = e8, n3 = r4, m3 = c3(f4 * L2);
      } else m3 = p3;
      (0, o.isNegativeLE)(t3 * g3, s2) && (n3 = c3(-n3));
      let y3 = c3((r3 - n3) * m3);
      return (0, o.isNegativeLE)(y3, s2) && (y3 = c3(-y3)), (0, a2.numberToBytesLE)(y3, 32);
    }
    toHex() {
      return (0, a2.bytesToHex)(this.toRawBytes());
    }
    toString() {
      return this.toHex();
    }
    equals(t3) {
      I2(t3);
      const { ex: n3, ey: r3 } = this.ep, { ex: i2, ey: o2 } = t3.ep, s2 = e7.ed25519.CURVE.Fp.create, a3 = s2(n3 * o2) === s2(r3 * i2), c3 = s2(r3 * o2) === s2(n3 * i2);
      return a3 || c3;
    }
    add(e8) {
      return I2(e8), new K2(this.ep.add(e8.ep));
    }
    subtract(e8) {
      return I2(e8), new K2(this.ep.subtract(e8.ep));
    }
    multiply(e8) {
      return new K2(this.ep.multiply(e8));
    }
    multiplyUnsafe(e8) {
      return new K2(this.ep.multiplyUnsafe(e8));
    }
    double() {
      return new K2(this.ep.double());
    }
    negate() {
      return new K2(this.ep.negate());
    }
  }
  e7.RistrettoPoint = (K2.BASE || (K2.BASE = new K2(e7.ed25519.ExtendedPoint.BASE)), K2.ZERO || (K2.ZERO = new K2(e7.ed25519.ExtendedPoint.ZERO)), K2);
  e7.hashToRistretto255 = (e8, r3) => {
    const o2 = r3.DST, s2 = "string" == typeof o2 ? (0, n2.utf8ToBytes)(o2) : o2, a3 = (0, i.expand_message_xmd)(e8, s2, 64, t2.sha512);
    return K2.hashToCurve(a3);
  }, e7.hash_to_ristretto255 = e7.hashToRistretto255;
}(Pe);
var Yn = {};
var Jn = {};
Object.defineProperty(Jn, "__esModule", { value: true }), Jn.sha224 = Jn.sha256 = Jn.SHA256 = void 0;
var Xn = Oe;
var Qn = Fe;
var er = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
var tr = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
var nr = new Uint32Array(64);
var rr = class extends Xn.HashMD {
  constructor() {
    super(64, 32, 8, false), this.A = 0 | tr[0], this.B = 0 | tr[1], this.C = 0 | tr[2], this.D = 0 | tr[3], this.E = 0 | tr[4], this.F = 0 | tr[5], this.G = 0 | tr[6], this.H = 0 | tr[7];
  }
  get() {
    const { A: e7, B: t2, C: n2, D: r2, E: i, F: o, G: s, H: a2 } = this;
    return [e7, t2, n2, r2, i, o, s, a2];
  }
  set(e7, t2, n2, r2, i, o, s, a2) {
    this.A = 0 | e7, this.B = 0 | t2, this.C = 0 | n2, this.D = 0 | r2, this.E = 0 | i, this.F = 0 | o, this.G = 0 | s, this.H = 0 | a2;
  }
  process(e7, t2) {
    for (let n3 = 0; n3 < 16; n3++, t2 += 4) nr[n3] = e7.getUint32(t2, false);
    for (let e8 = 16; e8 < 64; e8++) {
      const t3 = nr[e8 - 15], n3 = nr[e8 - 2], r3 = (0, Qn.rotr)(t3, 7) ^ (0, Qn.rotr)(t3, 18) ^ t3 >>> 3, i2 = (0, Qn.rotr)(n3, 17) ^ (0, Qn.rotr)(n3, 19) ^ n3 >>> 10;
      nr[e8] = i2 + nr[e8 - 7] + r3 + nr[e8 - 16] | 0;
    }
    let { A: n2, B: r2, C: i, D: o, E: s, F: a2, G: c2, H: l2 } = this;
    for (let e8 = 0; e8 < 64; e8++) {
      const t3 = l2 + ((0, Qn.rotr)(s, 6) ^ (0, Qn.rotr)(s, 11) ^ (0, Qn.rotr)(s, 25)) + (0, Xn.Chi)(s, a2, c2) + er[e8] + nr[e8] | 0, d2 = ((0, Qn.rotr)(n2, 2) ^ (0, Qn.rotr)(n2, 13) ^ (0, Qn.rotr)(n2, 22)) + (0, Xn.Maj)(n2, r2, i) | 0;
      l2 = c2, c2 = a2, a2 = s, s = o + t3 | 0, o = i, i = r2, r2 = n2, n2 = t3 + d2 | 0;
    }
    n2 = n2 + this.A | 0, r2 = r2 + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, s = s + this.E | 0, a2 = a2 + this.F | 0, c2 = c2 + this.G | 0, l2 = l2 + this.H | 0, this.set(n2, r2, i, o, s, a2, c2, l2);
  }
  roundClean() {
    nr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
Jn.SHA256 = rr;
var ir = class extends rr {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
};
Jn.sha256 = (0, Qn.wrapConstructor)(() => new rr()), Jn.sha224 = (0, Qn.wrapConstructor)(() => new ir());
var or = {};
var sr = {};
!function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.hmac = e7.HMAC = void 0;
  const t2 = Te, n2 = Fe;
  class r2 extends n2.Hash {
    constructor(e8, r3) {
      super(), this.finished = false, this.destroyed = false, (0, t2.hash)(e8);
      const i = (0, n2.toBytes)(r3);
      if (this.iHash = e8.create(), "function" != typeof this.iHash.update) throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const o = this.blockLen, s = new Uint8Array(o);
      s.set(i.length > o ? e8.create().update(i).digest() : i);
      for (let e9 = 0; e9 < s.length; e9++) s[e9] ^= 54;
      this.iHash.update(s), this.oHash = e8.create();
      for (let e9 = 0; e9 < s.length; e9++) s[e9] ^= 106;
      this.oHash.update(s), s.fill(0);
    }
    update(e8) {
      return (0, t2.exists)(this), this.iHash.update(e8), this;
    }
    digestInto(e8) {
      (0, t2.exists)(this), (0, t2.bytes)(e8, this.outputLen), this.finished = true, this.iHash.digestInto(e8), this.oHash.update(e8), this.oHash.digestInto(e8), this.destroy();
    }
    digest() {
      const e8 = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e8), e8;
    }
    _cloneInto(e8) {
      e8 || (e8 = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: t3, iHash: n3, finished: r3, destroyed: i, blockLen: o, outputLen: s } = this;
      return e8.finished = r3, e8.destroyed = i, e8.blockLen = o, e8.outputLen = s, e8.oHash = t3._cloneInto(e8.oHash), e8.iHash = n3._cloneInto(e8.iHash), e8;
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  }
  e7.HMAC = r2;
  e7.hmac = (e8, t3, n3) => new r2(e8, t3).update(n3).digest(), e7.hmac.create = (e8, t3) => new r2(e8, t3);
}(sr);
var ar = {};
!function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.DER = void 0, e7.weierstrassPoints = f3, e7.weierstrass = function(s2) {
    const a3 = function(e8) {
      const n3 = (0, t2.validateBasic)(e8);
      return r2.validateObject(n3, { hash: "hash", hmac: "function", randomBytes: "function" }, { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }), Object.freeze({ lowS: true, ...n3 });
    }(s2), { Fp: d3, n: u3 } = a3, h3 = d3.BYTES + 1, p3 = 2 * d3.BYTES + 1;
    function g2(e8) {
      return n2.mod(e8, u3);
    }
    function m2(e8) {
      return n2.invert(e8, u3);
    }
    const { ProjectivePoint: y2, normPrivateKeyToScalar: v2, weierstrassEquation: b2, isWithinCurveOrder: w2 } = f3({ ...a3, toBytes(e8, t3, n3) {
      const o2 = t3.toAffine(), s3 = d3.toBytes(o2.x), a4 = r2.concatBytes;
      return (0, i.abool)("isCompressed", n3), n3 ? a4(Uint8Array.from([t3.hasEvenY() ? 2 : 3]), s3) : a4(Uint8Array.from([4]), s3, d3.toBytes(o2.y));
    }, fromBytes(e8) {
      const t3 = e8.length, n3 = e8[0], i2 = e8.subarray(1);
      if (t3 !== h3 || 2 !== n3 && 3 !== n3) {
        if (t3 === p3 && 4 === n3) {
          return { x: d3.fromBytes(i2.subarray(0, d3.BYTES)), y: d3.fromBytes(i2.subarray(d3.BYTES, 2 * d3.BYTES)) };
        }
        throw new Error(`Point of length ${t3} was invalid. Expected ${h3} compressed bytes or ${p3} uncompressed bytes`);
      }
      {
        const e9 = r2.bytesToNumberBE(i2);
        if (!r2.inRange(e9, l2, d3.ORDER)) throw new Error("Point is not on curve");
        const t4 = b2(e9);
        let o2;
        try {
          o2 = d3.sqrt(t4);
        } catch (e10) {
          const t5 = e10 instanceof Error ? ": " + e10.message : "";
          throw new Error("Point is not on curve" + t5);
        }
        return 1 == (1 & n3) !== ((o2 & l2) === l2) && (o2 = d3.neg(o2)), { x: e9, y: o2 };
      }
    } }), E2 = (e8) => r2.bytesToHex(r2.numberToBytesBE(e8, a3.nByteLength));
    function C2(e8) {
      return e8 > u3 >> l2;
    }
    const S2 = (e8, t3, n3) => r2.bytesToNumberBE(e8.slice(t3, n3));
    class _2 {
      constructor(e8, t3, n3) {
        this.r = e8, this.s = t3, this.recovery = n3, this.assertValidity();
      }
      static fromCompact(e8) {
        const t3 = a3.nByteLength;
        return e8 = (0, i.ensureBytes)("compactSignature", e8, 2 * t3), new _2(S2(e8, 0, t3), S2(e8, t3, 2 * t3));
      }
      static fromDER(t3) {
        const { r: n3, s: r3 } = e7.DER.toSig((0, i.ensureBytes)("DER", t3));
        return new _2(n3, r3);
      }
      assertValidity() {
        r2.aInRange("r", this.r, l2, u3), r2.aInRange("s", this.s, l2, u3);
      }
      addRecoveryBit(e8) {
        return new _2(this.r, this.s, e8);
      }
      recoverPublicKey(e8) {
        const { r: t3, s: n3, recovery: r3 } = this, o2 = A2((0, i.ensureBytes)("msgHash", e8));
        if (null == r3 || ![0, 1, 2, 3].includes(r3)) throw new Error("recovery id invalid");
        const s3 = 2 === r3 || 3 === r3 ? t3 + a3.n : t3;
        if (s3 >= d3.ORDER) throw new Error("recovery id 2 or 3 invalid");
        const c3 = 0 == (1 & r3) ? "02" : "03", l3 = y2.fromHex(c3 + E2(s3)), u4 = m2(s3), h4 = g2(-o2 * u4), f4 = g2(n3 * u4), p4 = y2.BASE.multiplyAndAddUnsafe(l3, h4, f4);
        if (!p4) throw new Error("point at infinify");
        return p4.assertValidity(), p4;
      }
      hasHighS() {
        return C2(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new _2(this.r, g2(-this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return r2.hexToBytes(this.toDERHex());
      }
      toDERHex() {
        return e7.DER.hexFromSig({ r: this.r, s: this.s });
      }
      toCompactRawBytes() {
        return r2.hexToBytes(this.toCompactHex());
      }
      toCompactHex() {
        return E2(this.r) + E2(this.s);
      }
    }
    const k2 = { isValidPrivateKey(e8) {
      try {
        return v2(e8), true;
      } catch (e9) {
        return false;
      }
    }, normPrivateKeyToScalar: v2, randomPrivateKey: () => {
      const e8 = n2.getMinHashLength(a3.n);
      return n2.mapHashToField(a3.randomBytes(e8), a3.n);
    }, precompute: (e8 = 8, t3 = y2.BASE) => (t3._setWindowSize(e8), t3.multiply(BigInt(3)), t3) };
    function x2(e8) {
      const t3 = r2.isBytes(e8), n3 = "string" == typeof e8, i2 = (t3 || n3) && e8.length;
      return t3 ? i2 === h3 || i2 === p3 : n3 ? i2 === 2 * h3 || i2 === 2 * p3 : e8 instanceof y2;
    }
    const M2 = a3.bits2int || function(e8) {
      const t3 = r2.bytesToNumberBE(e8), n3 = 8 * e8.length - a3.nBitLength;
      return n3 > 0 ? t3 >> BigInt(n3) : t3;
    }, A2 = a3.bits2int_modN || function(e8) {
      return g2(M2(e8));
    }, I2 = r2.bitMask(a3.nBitLength);
    function R2(e8) {
      return r2.aInRange(`num < 2^${a3.nBitLength}`, e8, c2, I2), r2.numberToBytesBE(e8, a3.nByteLength);
    }
    function P2(e8, t3, n3 = L2) {
      if (["recovered", "canonical"].some((e9) => e9 in n3)) throw new Error("sign() legacy options not supported");
      const { hash: s3, randomBytes: u4 } = a3;
      let { lowS: h4, prehash: f4, extraEntropy: p4 } = n3;
      null == h4 && (h4 = true), e8 = (0, i.ensureBytes)("msgHash", e8), o(n3), f4 && (e8 = (0, i.ensureBytes)("prehashed msgHash", s3(e8)));
      const b3 = A2(e8), E3 = v2(t3), S3 = [R2(E3), R2(b3)];
      if (null != p4 && false !== p4) {
        const e9 = true === p4 ? u4(d3.BYTES) : p4;
        S3.push((0, i.ensureBytes)("extraEntropy", e9));
      }
      const k3 = r2.concatBytes(...S3), x3 = b3;
      return { seed: k3, k2sig: function(e9) {
        const t4 = M2(e9);
        if (!w2(t4)) return;
        const n4 = m2(t4), r3 = y2.BASE.multiply(t4).toAffine(), i2 = g2(r3.x);
        if (i2 === c2) return;
        const o2 = g2(n4 * g2(x3 + i2 * E3));
        if (o2 === c2) return;
        let s4 = (r3.x === i2 ? 0 : 2) | Number(r3.y & l2), a4 = o2;
        return h4 && C2(o2) && (a4 = function(e10) {
          return C2(e10) ? g2(-e10) : e10;
        }(o2), s4 ^= 1), new _2(i2, a4, s4);
      } };
    }
    const L2 = { lowS: a3.lowS, prehash: false }, O2 = { lowS: a3.lowS, prehash: false };
    return y2.BASE._setWindowSize(8), { CURVE: a3, getPublicKey: function(e8, t3 = true) {
      return y2.fromPrivateKey(e8).toRawBytes(t3);
    }, getSharedSecret: function(e8, t3, n3 = true) {
      if (x2(e8)) throw new Error("first arg must be private key");
      if (!x2(t3)) throw new Error("second arg must be public key");
      const r3 = y2.fromHex(t3);
      return r3.multiply(v2(e8)).toRawBytes(n3);
    }, sign: function(e8, t3, n3 = L2) {
      const { seed: i2, k2sig: o2 } = P2(e8, t3, n3), s3 = a3, c3 = r2.createHmacDrbg(s3.hash.outputLen, s3.nByteLength, s3.hmac);
      return c3(i2, o2);
    }, verify: function(t3, n3, s3, c3 = O2) {
      var _a2;
      const l3 = t3;
      if (n3 = (0, i.ensureBytes)("msgHash", n3), s3 = (0, i.ensureBytes)("publicKey", s3), "strict" in c3) throw new Error("options.strict was renamed to lowS");
      o(c3);
      const { lowS: d4, prehash: u4 } = c3;
      let h4, f4;
      try {
        if ("string" == typeof l3 || r2.isBytes(l3)) try {
          h4 = _2.fromDER(l3);
        } catch (t4) {
          if (!(t4 instanceof e7.DER.Err)) throw t4;
          h4 = _2.fromCompact(l3);
        }
        else {
          if ("object" != typeof l3 || "bigint" != typeof l3.r || "bigint" != typeof l3.s) throw new Error("PARSE");
          {
            const { r: e8, s: t4 } = l3;
            h4 = new _2(e8, t4);
          }
        }
        f4 = y2.fromHex(s3);
      } catch (e8) {
        if ("PARSE" === e8.message) throw new Error("signature must be Signature instance, Uint8Array or hex string");
        return false;
      }
      if (d4 && h4.hasHighS()) return false;
      u4 && (n3 = a3.hash(n3));
      const { r: p4, s: v6 } = h4, b3 = A2(n3), w3 = m2(v6), E3 = g2(b3 * w3), C3 = g2(p4 * w3), S3 = (_a2 = y2.BASE.multiplyAndAddUnsafe(f4, E3, C3)) == null ? void 0 : _a2.toAffine();
      if (!S3) return false;
      const k3 = g2(S3.x);
      return k3 === p4;
    }, ProjectivePoint: y2, Signature: _2, utils: k2 };
  }, e7.SWUFpSqrtRatio = p2, e7.mapToCurveSimpleSWU = function(e8, t3) {
    if (n2.validateField(e8), !e8.isValid(t3.A) || !e8.isValid(t3.B) || !e8.isValid(t3.Z)) throw new Error("mapToCurveSimpleSWU: invalid opts");
    const r3 = p2(e8, t3.Z);
    if (!e8.isOdd) throw new Error("Fp.isOdd is not implemented!");
    return (n3) => {
      let i2, o2, s2, a3, c3, l3, d3, u3;
      i2 = e8.sqr(n3), i2 = e8.mul(i2, t3.Z), o2 = e8.sqr(i2), o2 = e8.add(o2, i2), s2 = e8.add(o2, e8.ONE), s2 = e8.mul(s2, t3.B), a3 = e8.cmov(t3.Z, e8.neg(o2), !e8.eql(o2, e8.ZERO)), a3 = e8.mul(a3, t3.A), o2 = e8.sqr(s2), l3 = e8.sqr(a3), c3 = e8.mul(l3, t3.A), o2 = e8.add(o2, c3), o2 = e8.mul(o2, s2), l3 = e8.mul(l3, a3), c3 = e8.mul(l3, t3.B), o2 = e8.add(o2, c3), d3 = e8.mul(i2, s2);
      const { isValid: h3, value: f4 } = r3(o2, l3);
      u3 = e8.mul(i2, n3), u3 = e8.mul(u3, f4), d3 = e8.cmov(d3, s2, h3), u3 = e8.cmov(u3, f4, h3);
      const p3 = e8.isOdd(n3) === e8.isOdd(u3);
      return u3 = e8.cmov(e8.neg(u3), u3, p3), d3 = e8.div(d3, a3), { x: d3, y: u3 };
    };
  };
  const t2 = Pt, n2 = Lt, r2 = Ot, i = Ot;
  function o(e8) {
    void 0 !== e8.lowS && (0, i.abool)("lowS", e8.lowS), void 0 !== e8.prehash && (0, i.abool)("prehash", e8.prehash);
  }
  const { bytesToNumberBE: s, hexToBytes: a2 } = r2;
  e7.DER = { Err: class extends Error {
    constructor(e8 = "") {
      super(e8);
    }
  }, _tlv: { encode: (t3, n3) => {
    const { Err: i2 } = e7.DER;
    if (t3 < 0 || t3 > 256) throw new i2("tlv.encode: wrong tag");
    if (1 & n3.length) throw new i2("tlv.encode: unpadded data");
    const o2 = n3.length / 2, s2 = r2.numberToHexUnpadded(o2);
    if (s2.length / 2 & 128) throw new i2("tlv.encode: long form length too big");
    const a3 = o2 > 127 ? r2.numberToHexUnpadded(s2.length / 2 | 128) : "";
    return `${r2.numberToHexUnpadded(t3)}${a3}${s2}${n3}`;
  }, decode(t3, n3) {
    const { Err: r3 } = e7.DER;
    let i2 = 0;
    if (t3 < 0 || t3 > 256) throw new r3("tlv.encode: wrong tag");
    if (n3.length < 2 || n3[i2++] !== t3) throw new r3("tlv.decode: wrong tlv");
    const o2 = n3[i2++];
    let s2 = 0;
    if (!!(128 & o2)) {
      const e8 = 127 & o2;
      if (!e8) throw new r3("tlv.decode(long): indefinite length not supported");
      if (e8 > 4) throw new r3("tlv.decode(long): byte length is too big");
      const t4 = n3.subarray(i2, i2 + e8);
      if (t4.length !== e8) throw new r3("tlv.decode: length bytes not complete");
      if (0 === t4[0]) throw new r3("tlv.decode(long): zero leftmost byte");
      for (const e9 of t4) s2 = s2 << 8 | e9;
      if (i2 += e8, s2 < 128) throw new r3("tlv.decode(long): not minimal encoding");
    } else s2 = o2;
    const a3 = n3.subarray(i2, i2 + s2);
    if (a3.length !== s2) throw new r3("tlv.decode: wrong value length");
    return { v: a3, l: n3.subarray(i2 + s2) };
  } }, _int: { encode(t3) {
    const { Err: n3 } = e7.DER;
    if (t3 < c2) throw new n3("integer: negative integers are not allowed");
    let i2 = r2.numberToHexUnpadded(t3);
    if (8 & Number.parseInt(i2[0], 16) && (i2 = "00" + i2), 1 & i2.length) throw new n3("unexpected assertion");
    return i2;
  }, decode(t3) {
    const { Err: n3 } = e7.DER;
    if (128 & t3[0]) throw new n3("Invalid signature integer: negative");
    if (0 === t3[0] && !(128 & t3[1])) throw new n3("Invalid signature integer: unnecessary leading zero");
    return s(t3);
  } }, toSig(t3) {
    const { Err: n3, _int: i2, _tlv: o2 } = e7.DER, s2 = "string" == typeof t3 ? a2(t3) : t3;
    r2.abytes(s2);
    const { v: c3, l: l3 } = o2.decode(48, s2);
    if (l3.length) throw new n3("Invalid signature: left bytes after parsing");
    const { v: d3, l: u3 } = o2.decode(2, c3), { v: h3, l: f4 } = o2.decode(2, u3);
    if (f4.length) throw new n3("Invalid signature: left bytes after parsing");
    return { r: i2.decode(d3), s: i2.decode(h3) };
  }, hexFromSig(t3) {
    const { _tlv: n3, _int: r3 } = e7.DER, i2 = `${n3.encode(2, r3.encode(t3.r))}${n3.encode(2, r3.encode(t3.s))}`;
    return n3.encode(48, i2);
  } };
  const c2 = BigInt(0), l2 = BigInt(1), d2 = BigInt(2), u2 = BigInt(3), h2 = BigInt(4);
  function f3(e8) {
    const o2 = function(e9) {
      const n3 = (0, t2.validateBasic)(e9);
      r2.validateObject(n3, { a: "field", b: "field" }, { allowedPrivateKeyLengths: "array", wrapPrivateKey: "boolean", isTorsionFree: "function", clearCofactor: "function", allowInfinityPoint: "boolean", fromBytes: "function", toBytes: "function" });
      const { endo: i2, Fp: o3, a: s3 } = n3;
      if (i2) {
        if (!o3.eql(s3, o3.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
        if ("object" != typeof i2 || "bigint" != typeof i2.beta || "function" != typeof i2.splitScalar) throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
      }
      return Object.freeze({ ...n3 });
    }(e8), { Fp: s2 } = o2, a3 = n2.Field(o2.n, o2.nBitLength), d3 = o2.toBytes || ((e9, t3, n3) => {
      const i2 = t3.toAffine();
      return r2.concatBytes(Uint8Array.from([4]), s2.toBytes(i2.x), s2.toBytes(i2.y));
    }), h3 = o2.fromBytes || ((e9) => {
      const t3 = e9.subarray(1);
      return { x: s2.fromBytes(t3.subarray(0, s2.BYTES)), y: s2.fromBytes(t3.subarray(s2.BYTES, 2 * s2.BYTES)) };
    });
    function f4(e9) {
      const { a: t3, b: n3 } = o2, r3 = s2.sqr(e9), i2 = s2.mul(r3, e9);
      return s2.add(s2.add(i2, s2.mul(e9, t3)), n3);
    }
    if (!s2.eql(s2.sqr(o2.Gy), f4(o2.Gx))) throw new Error("bad generator point: equation left != right");
    function p3(e9) {
      const { allowedPrivateKeyLengths: t3, nByteLength: s3, wrapPrivateKey: a4, n: c3 } = o2;
      if (t3 && "bigint" != typeof e9) {
        if (r2.isBytes(e9) && (e9 = r2.bytesToHex(e9)), "string" != typeof e9 || !t3.includes(e9.length)) throw new Error("Invalid key");
        e9 = e9.padStart(2 * s3, "0");
      }
      let d4;
      try {
        d4 = "bigint" == typeof e9 ? e9 : r2.bytesToNumberBE((0, i.ensureBytes)("private key", e9, s3));
      } catch (t4) {
        throw new Error(`private key must be ${s3} bytes, hex or bigint, not ${typeof e9}`);
      }
      return a4 && (d4 = n2.mod(d4, c3)), r2.aInRange("private key", d4, l2, c3), d4;
    }
    function g2(e9) {
      if (!(e9 instanceof v2)) throw new Error("ProjectivePoint expected");
    }
    const m2 = (0, i.memoized)((e9, t3) => {
      const { px: n3, py: r3, pz: i2 } = e9;
      if (s2.eql(i2, s2.ONE)) return { x: n3, y: r3 };
      const o3 = e9.is0();
      null == t3 && (t3 = o3 ? s2.ONE : s2.inv(i2));
      const a4 = s2.mul(n3, t3), c3 = s2.mul(r3, t3), l3 = s2.mul(i2, t3);
      if (o3) return { x: s2.ZERO, y: s2.ZERO };
      if (!s2.eql(l3, s2.ONE)) throw new Error("invZ was invalid");
      return { x: a4, y: c3 };
    }), y2 = (0, i.memoized)((e9) => {
      if (e9.is0()) {
        if (o2.allowInfinityPoint && !s2.is0(e9.py)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: t3, y: n3 } = e9.toAffine();
      if (!s2.isValid(t3) || !s2.isValid(n3)) throw new Error("bad point: x or y not FE");
      const r3 = s2.sqr(n3), i2 = f4(t3);
      if (!s2.eql(r3, i2)) throw new Error("bad point: equation left != right");
      if (!e9.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    class v2 {
      constructor(e9, t3, n3) {
        if (this.px = e9, this.py = t3, this.pz = n3, null == e9 || !s2.isValid(e9)) throw new Error("x required");
        if (null == t3 || !s2.isValid(t3)) throw new Error("y required");
        if (null == n3 || !s2.isValid(n3)) throw new Error("z required");
        Object.freeze(this);
      }
      static fromAffine(e9) {
        const { x: t3, y: n3 } = e9 || {};
        if (!e9 || !s2.isValid(t3) || !s2.isValid(n3)) throw new Error("invalid affine point");
        if (e9 instanceof v2) throw new Error("projective point not allowed");
        const r3 = (e10) => s2.eql(e10, s2.ZERO);
        return r3(t3) && r3(n3) ? v2.ZERO : new v2(t3, n3, s2.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      static normalizeZ(e9) {
        const t3 = s2.invertBatch(e9.map((e10) => e10.pz));
        return e9.map((e10, n3) => e10.toAffine(t3[n3])).map(v2.fromAffine);
      }
      static fromHex(e9) {
        const t3 = v2.fromAffine(h3((0, i.ensureBytes)("pointHex", e9)));
        return t3.assertValidity(), t3;
      }
      static fromPrivateKey(e9) {
        return v2.BASE.multiply(p3(e9));
      }
      static msm(e9, n3) {
        return (0, t2.pippenger)(v2, a3, e9, n3);
      }
      _setWindowSize(e9) {
        w2.setWindowSize(this, e9);
      }
      assertValidity() {
        y2(this);
      }
      hasEvenY() {
        const { y: e9 } = this.toAffine();
        if (s2.isOdd) return !s2.isOdd(e9);
        throw new Error("Field doesn't support isOdd");
      }
      equals(e9) {
        g2(e9);
        const { px: t3, py: n3, pz: r3 } = this, { px: i2, py: o3, pz: a4 } = e9, c3 = s2.eql(s2.mul(t3, a4), s2.mul(i2, r3)), l3 = s2.eql(s2.mul(n3, a4), s2.mul(o3, r3));
        return c3 && l3;
      }
      negate() {
        return new v2(this.px, s2.neg(this.py), this.pz);
      }
      double() {
        const { a: e9, b: t3 } = o2, n3 = s2.mul(t3, u2), { px: r3, py: i2, pz: a4 } = this;
        let c3 = s2.ZERO, l3 = s2.ZERO, d4 = s2.ZERO, h4 = s2.mul(r3, r3), f5 = s2.mul(i2, i2), p4 = s2.mul(a4, a4), g3 = s2.mul(r3, i2);
        return g3 = s2.add(g3, g3), d4 = s2.mul(r3, a4), d4 = s2.add(d4, d4), c3 = s2.mul(e9, d4), l3 = s2.mul(n3, p4), l3 = s2.add(c3, l3), c3 = s2.sub(f5, l3), l3 = s2.add(f5, l3), l3 = s2.mul(c3, l3), c3 = s2.mul(g3, c3), d4 = s2.mul(n3, d4), p4 = s2.mul(e9, p4), g3 = s2.sub(h4, p4), g3 = s2.mul(e9, g3), g3 = s2.add(g3, d4), d4 = s2.add(h4, h4), h4 = s2.add(d4, h4), h4 = s2.add(h4, p4), h4 = s2.mul(h4, g3), l3 = s2.add(l3, h4), p4 = s2.mul(i2, a4), p4 = s2.add(p4, p4), h4 = s2.mul(p4, g3), c3 = s2.sub(c3, h4), d4 = s2.mul(p4, f5), d4 = s2.add(d4, d4), d4 = s2.add(d4, d4), new v2(c3, l3, d4);
      }
      add(e9) {
        g2(e9);
        const { px: t3, py: n3, pz: r3 } = this, { px: i2, py: a4, pz: c3 } = e9;
        let l3 = s2.ZERO, d4 = s2.ZERO, h4 = s2.ZERO;
        const f5 = o2.a, p4 = s2.mul(o2.b, u2);
        let m3 = s2.mul(t3, i2), y3 = s2.mul(n3, a4), b3 = s2.mul(r3, c3), w3 = s2.add(t3, n3), E2 = s2.add(i2, a4);
        w3 = s2.mul(w3, E2), E2 = s2.add(m3, y3), w3 = s2.sub(w3, E2), E2 = s2.add(t3, r3);
        let C2 = s2.add(i2, c3);
        return E2 = s2.mul(E2, C2), C2 = s2.add(m3, b3), E2 = s2.sub(E2, C2), C2 = s2.add(n3, r3), l3 = s2.add(a4, c3), C2 = s2.mul(C2, l3), l3 = s2.add(y3, b3), C2 = s2.sub(C2, l3), h4 = s2.mul(f5, E2), l3 = s2.mul(p4, b3), h4 = s2.add(l3, h4), l3 = s2.sub(y3, h4), h4 = s2.add(y3, h4), d4 = s2.mul(l3, h4), y3 = s2.add(m3, m3), y3 = s2.add(y3, m3), b3 = s2.mul(f5, b3), E2 = s2.mul(p4, E2), y3 = s2.add(y3, b3), b3 = s2.sub(m3, b3), b3 = s2.mul(f5, b3), E2 = s2.add(E2, b3), m3 = s2.mul(y3, E2), d4 = s2.add(d4, m3), m3 = s2.mul(C2, E2), l3 = s2.mul(w3, l3), l3 = s2.sub(l3, m3), m3 = s2.mul(w3, y3), h4 = s2.mul(C2, h4), h4 = s2.add(h4, m3), new v2(l3, d4, h4);
      }
      subtract(e9) {
        return this.add(e9.negate());
      }
      is0() {
        return this.equals(v2.ZERO);
      }
      wNAF(e9) {
        return w2.wNAFCached(this, e9, v2.normalizeZ);
      }
      multiplyUnsafe(e9) {
        r2.aInRange("scalar", e9, c2, o2.n);
        const t3 = v2.ZERO;
        if (e9 === c2) return t3;
        if (e9 === l2) return this;
        const { endo: n3 } = o2;
        if (!n3) return w2.unsafeLadder(this, e9);
        let { k1neg: i2, k1: a4, k2neg: d4, k2: u3 } = n3.splitScalar(e9), h4 = t3, f5 = t3, p4 = this;
        for (; a4 > c2 || u3 > c2; ) a4 & l2 && (h4 = h4.add(p4)), u3 & l2 && (f5 = f5.add(p4)), p4 = p4.double(), a4 >>= l2, u3 >>= l2;
        return i2 && (h4 = h4.negate()), d4 && (f5 = f5.negate()), f5 = new v2(s2.mul(f5.px, n3.beta), f5.py, f5.pz), h4.add(f5);
      }
      multiply(e9) {
        const { endo: t3, n: n3 } = o2;
        let i2, a4;
        if (r2.aInRange("scalar", e9, l2, n3), t3) {
          const { k1neg: n4, k1: r3, k2neg: o3, k2: c3 } = t3.splitScalar(e9);
          let { p: l3, f: d4 } = this.wNAF(r3), { p: u3, f: h4 } = this.wNAF(c3);
          l3 = w2.constTimeNegate(n4, l3), u3 = w2.constTimeNegate(o3, u3), u3 = new v2(s2.mul(u3.px, t3.beta), u3.py, u3.pz), i2 = l3.add(u3), a4 = d4.add(h4);
        } else {
          const { p: t4, f: n4 } = this.wNAF(e9);
          i2 = t4, a4 = n4;
        }
        return v2.normalizeZ([i2, a4])[0];
      }
      multiplyAndAddUnsafe(e9, t3, n3) {
        const r3 = v2.BASE, i2 = (e10, t4) => t4 !== c2 && t4 !== l2 && e10.equals(r3) ? e10.multiply(t4) : e10.multiplyUnsafe(t4), o3 = i2(this, t3).add(i2(e9, n3));
        return o3.is0() ? void 0 : o3;
      }
      toAffine(e9) {
        return m2(this, e9);
      }
      isTorsionFree() {
        const { h: e9, isTorsionFree: t3 } = o2;
        if (e9 === l2) return true;
        if (t3) return t3(v2, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: e9, clearCofactor: t3 } = o2;
        return e9 === l2 ? this : t3 ? t3(v2, this) : this.multiplyUnsafe(o2.h);
      }
      toRawBytes(e9 = true) {
        return (0, i.abool)("isCompressed", e9), this.assertValidity(), d3(v2, this, e9);
      }
      toHex(e9 = true) {
        return (0, i.abool)("isCompressed", e9), r2.bytesToHex(this.toRawBytes(e9));
      }
    }
    v2.BASE = new v2(o2.Gx, o2.Gy, s2.ONE), v2.ZERO = new v2(s2.ZERO, s2.ONE, s2.ZERO);
    const b2 = o2.nBitLength, w2 = (0, t2.wNAF)(v2, o2.endo ? Math.ceil(b2 / 2) : b2);
    return { CURVE: o2, ProjectivePoint: v2, normPrivateKeyToScalar: p3, weierstrassEquation: f4, isWithinCurveOrder: function(e9) {
      return r2.inRange(e9, l2, o2.n);
    } };
  }
  function p2(e8, t3) {
    const n3 = e8.ORDER;
    let r3 = c2;
    for (let e9 = n3 - l2; e9 % d2 === c2; e9 /= d2) r3 += l2;
    const i2 = r3, o2 = d2 << i2 - l2 - l2, s2 = o2 * d2, a3 = (n3 - l2) / s2, f4 = (a3 - l2) / d2, p3 = s2 - l2, g2 = o2, m2 = e8.pow(t3, a3), y2 = e8.pow(t3, (a3 + l2) / d2);
    let v2 = (t4, n4) => {
      let r4 = m2, o3 = e8.pow(n4, p3), s3 = e8.sqr(o3);
      s3 = e8.mul(s3, n4);
      let a4 = e8.mul(t4, s3);
      a4 = e8.pow(a4, f4), a4 = e8.mul(a4, o3), o3 = e8.mul(a4, n4), s3 = e8.mul(a4, t4);
      let c3 = e8.mul(s3, o3);
      a4 = e8.pow(c3, g2);
      let u3 = e8.eql(a4, e8.ONE);
      o3 = e8.mul(s3, y2), a4 = e8.mul(c3, r4), s3 = e8.cmov(o3, s3, u3), c3 = e8.cmov(a4, c3, u3);
      for (let t5 = i2; t5 > l2; t5--) {
        let n5 = t5 - d2;
        n5 = d2 << n5 - l2;
        let i3 = e8.pow(c3, n5);
        const a5 = e8.eql(i3, e8.ONE);
        o3 = e8.mul(s3, r4), r4 = e8.mul(r4, r4), i3 = e8.mul(c3, r4), s3 = e8.cmov(o3, s3, a5), c3 = e8.cmov(i3, c3, a5);
      }
      return { isValid: u3, value: s3 };
    };
    if (e8.ORDER % h2 === u2) {
      const n4 = (e8.ORDER - u2) / h2, r4 = e8.sqrt(e8.neg(t3));
      v2 = (t4, i3) => {
        let o3 = e8.sqr(i3);
        const s3 = e8.mul(t4, i3);
        o3 = e8.mul(o3, s3);
        let a4 = e8.pow(o3, n4);
        a4 = e8.mul(a4, s3);
        const c3 = e8.mul(a4, r4), l3 = e8.mul(e8.sqr(a4), i3), d3 = e8.eql(l3, t4);
        return { isValid: d3, value: e8.cmov(c3, a4, d3) };
      };
    }
    return v2;
  }
}(ar), Object.defineProperty(or, "__esModule", { value: true }), or.getHash = ur, or.createCurve = function(e7, t2) {
  const n2 = (t3) => (0, dr.weierstrass)({ ...e7, ...ur(t3) });
  return Object.freeze({ ...n2(t2), create: n2 });
};
var cr = sr;
var lr = Fe;
var dr = ar;
function ur(e7) {
  return { hash: e7, hmac: (t2, ...n2) => (0, cr.hmac)(e7, t2, (0, lr.concatBytes)(...n2)), randomBytes: lr.randomBytes };
}
!function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.encodeToCurve = e7.hashToCurve = e7.schnorr = e7.secp256k1 = void 0;
  const t2 = Jn, n2 = Fe, r2 = or, i = Nn, o = Lt, s = Ot, a2 = ar, c2 = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), l2 = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), d2 = BigInt(1), u2 = BigInt(2), h2 = (e8, t3) => (e8 + t3 / u2) / t3;
  function f3(e8) {
    const t3 = c2, n3 = BigInt(3), r3 = BigInt(6), i2 = BigInt(11), s2 = BigInt(22), a3 = BigInt(23), l3 = BigInt(44), d3 = BigInt(88), h3 = e8 * e8 * e8 % t3, f4 = h3 * h3 * e8 % t3, g3 = (0, o.pow2)(f4, n3, t3) * f4 % t3, m3 = (0, o.pow2)(g3, n3, t3) * f4 % t3, y3 = (0, o.pow2)(m3, u2, t3) * h3 % t3, v6 = (0, o.pow2)(y3, i2, t3) * y3 % t3, b3 = (0, o.pow2)(v6, s2, t3) * v6 % t3, w3 = (0, o.pow2)(b3, l3, t3) * b3 % t3, E3 = (0, o.pow2)(w3, d3, t3) * w3 % t3, C3 = (0, o.pow2)(E3, l3, t3) * b3 % t3, S3 = (0, o.pow2)(C3, n3, t3) * f4 % t3, _3 = (0, o.pow2)(S3, a3, t3) * v6 % t3, k3 = (0, o.pow2)(_3, r3, t3) * h3 % t3, x3 = (0, o.pow2)(k3, u2, t3);
    if (!p2.eql(p2.sqr(x3), e8)) throw new Error("Cannot find square root");
    return x3;
  }
  const p2 = (0, o.Field)(c2, void 0, void 0, { sqrt: f3 });
  e7.secp256k1 = (0, r2.createCurve)({ a: BigInt(0), b: BigInt(7), Fp: p2, n: l2, Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"), Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"), h: BigInt(1), lowS: true, endo: { beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"), splitScalar: (e8) => {
    const t3 = l2, n3 = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r3 = -d2 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), i2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), s2 = n3, a3 = BigInt("0x100000000000000000000000000000000"), c3 = h2(s2 * e8, t3), u3 = h2(-r3 * e8, t3);
    let f4 = (0, o.mod)(e8 - c3 * n3 - u3 * i2, t3), p3 = (0, o.mod)(-c3 * r3 - u3 * s2, t3);
    const g3 = f4 > a3, m3 = p3 > a3;
    if (g3 && (f4 = t3 - f4), m3 && (p3 = t3 - p3), f4 > a3 || p3 > a3) throw new Error("splitScalar: Endomorphism failed, k=" + e8);
    return { k1neg: g3, k1: f4, k2neg: m3, k2: p3 };
  } } }, t2.sha256);
  const g2 = BigInt(0), m2 = {};
  function y2(e8, ...n3) {
    let r3 = m2[e8];
    if (void 0 === r3) {
      const n4 = (0, t2.sha256)(Uint8Array.from(e8, (e9) => e9.charCodeAt(0)));
      r3 = (0, s.concatBytes)(n4, n4), m2[e8] = r3;
    }
    return (0, t2.sha256)((0, s.concatBytes)(r3, ...n3));
  }
  const v2 = (e8) => e8.toRawBytes(true).slice(1), b2 = (e8) => (0, s.numberToBytesBE)(e8, 32), w2 = (e8) => (0, o.mod)(e8, c2), E2 = (e8) => (0, o.mod)(e8, l2), C2 = e7.secp256k1.ProjectivePoint, S2 = (e8, t3, n3) => C2.BASE.multiplyAndAddUnsafe(e8, t3, n3);
  function _2(t3) {
    let n3 = e7.secp256k1.utils.normPrivateKeyToScalar(t3), r3 = C2.fromPrivateKey(n3);
    return { scalar: r3.hasEvenY() ? n3 : E2(-n3), bytes: v2(r3) };
  }
  function k2(e8) {
    (0, s.aInRange)("x", e8, d2, c2);
    const t3 = w2(e8 * e8);
    let n3 = f3(w2(t3 * e8 + BigInt(7)));
    n3 % u2 !== g2 && (n3 = w2(-n3));
    const r3 = new C2(e8, n3, d2);
    return r3.assertValidity(), r3;
  }
  const x2 = s.bytesToNumberBE;
  function M2(...e8) {
    return E2(x2(y2("BIP0340/challenge", ...e8)));
  }
  function A2(e8) {
    return _2(e8).bytes;
  }
  function I2(e8, t3, r3 = (0, n2.randomBytes)(32)) {
    const i2 = (0, s.ensureBytes)("message", e8), { bytes: o2, scalar: a3 } = _2(t3), c3 = (0, s.ensureBytes)("auxRand", r3, 32), l3 = b2(a3 ^ x2(y2("BIP0340/aux", c3))), d3 = y2("BIP0340/nonce", l3, o2, i2), u3 = E2(x2(d3));
    if (u3 === g2) throw new Error("sign failed: k is zero");
    const { bytes: h3, scalar: f4 } = _2(u3), p3 = M2(h3, o2, i2), m3 = new Uint8Array(64);
    if (m3.set(h3, 0), m3.set(b2(E2(f4 + p3 * a3)), 32), !R2(m3, i2, o2)) throw new Error("sign: Invalid signature produced");
    return m3;
  }
  function R2(e8, t3, n3) {
    const r3 = (0, s.ensureBytes)("signature", e8, 64), i2 = (0, s.ensureBytes)("message", t3), o2 = (0, s.ensureBytes)("publicKey", n3, 32);
    try {
      const e9 = k2(x2(o2)), t4 = x2(r3.subarray(0, 32));
      if (!(0, s.inRange)(t4, d2, c2)) return false;
      const n4 = x2(r3.subarray(32, 64));
      if (!(0, s.inRange)(n4, d2, l2)) return false;
      const a3 = M2(b2(t4), v2(e9), i2), u3 = S2(e9, n4, E2(-a3));
      return !(!u3 || !u3.hasEvenY() || u3.toAffine().x !== t4);
    } catch (e9) {
      return false;
    }
  }
  e7.schnorr = { getPublicKey: A2, sign: I2, verify: R2, utils: { randomPrivateKey: e7.secp256k1.utils.randomPrivateKey, lift_x: k2, pointToBytes: v2, numberToBytesBE: s.numberToBytesBE, bytesToNumberBE: s.bytesToNumberBE, taggedHash: y2, mod: o.mod } };
  const P2 = (() => (0, i.isogenyMap)(p2, [["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7", "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581", "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262", "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"], ["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b", "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14", "0x0000000000000000000000000000000000000000000000000000000000000001"], ["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c", "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3", "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931", "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"], ["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b", "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573", "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f", "0x0000000000000000000000000000000000000000000000000000000000000001"]].map((e8) => e8.map((e9) => BigInt(e9)))))(), L2 = (() => (0, a2.mapToCurveSimpleSWU)(p2, { A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"), B: BigInt("1771"), Z: p2.create(BigInt("-11")) }))(), O2 = (() => (0, i.createHasher)(e7.secp256k1.ProjectivePoint, (e8) => {
    const { x: t3, y: n3 } = L2(p2.create(e8[0]));
    return P2(t3, n3);
  }, { DST: "secp256k1_XMD:SHA-256_SSWU_RO_", encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_", p: p2.ORDER, m: 1, k: 128, expand: "xmd", hash: t2.sha256 }))();
  e7.hashToCurve = O2.hashToCurve, e7.encodeToCurve = O2.encodeToCurve;
}(Yn);
var hr = {};
!function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.decodeHex = e7.remove0x = void 0;
  var t2 = fe;
  e7.remove0x = function(e8) {
    return e8.startsWith("0x") || e8.startsWith("0X") ? e8.slice(2) : e8;
  };
  e7.decodeHex = function(n2) {
    return (0, t2.hexToBytes)((0, e7.remove0x)(n2));
  };
}(hr), function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.hexToPublicKey = e7.convertPublicKeyFormat = e7.getSharedPoint = e7.getPublicKey = e7.isValidPrivateKey = e7.getValidSecret = void 0;
  var t2 = Ie, n2 = Pe, r2 = Yn, i = Se, o = _e, s = hr;
  e7.getValidSecret = function() {
    var n3;
    do {
      n3 = (0, t2.randomBytes)(o.SECRET_KEY_LENGTH);
    } while (!(0, e7.isValidPrivateKey)(n3));
    return n3;
  };
  e7.isValidPrivateKey = function(e8) {
    return a2((0, i.ellipticCurve)(), function(t3) {
      return t3.utils.isValidPrivateKey(e8);
    }, function() {
      return true;
    }, function() {
      return true;
    });
  };
  e7.getPublicKey = function(e8) {
    return a2((0, i.ellipticCurve)(), function(t3) {
      return t3.getPublicKey(e8);
    }, function(t3) {
      return t3.getPublicKey(e8);
    }, function(t3) {
      return t3.getPublicKey(e8);
    });
  };
  e7.getSharedPoint = function(e8, t3, n3) {
    return a2((0, i.ellipticCurve)(), function(r3) {
      return r3.getSharedSecret(e8, t3, n3);
    }, function(n4) {
      return n4.getSharedSecret(e8, t3);
    }, function(n4) {
      return l2(n4, e8, t3);
    });
  };
  e7.convertPublicKeyFormat = function(e8, t3) {
    return a2((0, i.ellipticCurve)(), function(n3) {
      return n3.getSharedSecret(BigInt(1), e8, t3);
    }, function() {
      return e8;
    }, function() {
      return e8;
    });
  };
  function a2(e8, t3, i2, o2) {
    if ("secp256k1" === e8) return t3(r2.secp256k1);
    if ("x25519" === e8) return i2(n2.x25519);
    if ("ed25519" === e8) return o2(n2.ed25519);
    throw new Error("Not implemented");
  }
  e7.hexToPublicKey = function(e8) {
    var t3 = (0, s.decodeHex)(e8);
    return a2((0, i.ellipticCurve)(), function() {
      return c2(t3);
    }, function() {
      return t3;
    }, function() {
      return t3;
    });
  };
  var c2 = function(e8) {
    if (e8.length === o.ETH_PUBLIC_KEY_SIZE) {
      var t3 = new Uint8Array(1 + e8.length);
      return t3.set([4]), t3.set(e8, 1), t3;
    }
    return e8;
  }, l2 = function(e8, t3, n3) {
    var r3 = e8.utils.getExtendedPublicKey(t3).scalar;
    return e8.ExtendedPoint.fromHex(n3).multiply(r3).toRawBytes();
  };
}(Ae);
var fr = {};
var pr = {};
Object.defineProperty(pr, "__esModule", { value: true }), pr.hkdf = void 0, pr.extract = vr, pr.expand = Er;
var gr = Te;
var mr = Fe;
var yr = sr;
function vr(e7, t2, n2) {
  return (0, gr.hash)(e7), void 0 === n2 && (n2 = new Uint8Array(e7.outputLen)), (0, yr.hmac)(e7, (0, mr.toBytes)(n2), (0, mr.toBytes)(t2));
}
var br = new Uint8Array([0]);
var wr = new Uint8Array();
function Er(e7, t2, n2, r2 = 32) {
  if ((0, gr.hash)(e7), (0, gr.number)(r2), r2 > 255 * e7.outputLen) throw new Error("Length should be <= 255*HashLen");
  const i = Math.ceil(r2 / e7.outputLen);
  void 0 === n2 && (n2 = wr);
  const o = new Uint8Array(i * e7.outputLen), s = yr.hmac.create(e7, t2), a2 = s._cloneInto(), c2 = new Uint8Array(s.outputLen);
  for (let t3 = 0; t3 < i; t3++) br[0] = t3 + 1, a2.update(0 === t3 ? wr : c2).update(n2).update(br).digestInto(c2), o.set(c2, e7.outputLen * t3), s._cloneInto(a2);
  return s.destroy(), a2.destroy(), c2.fill(0), br.fill(0), o.slice(0, r2);
}
pr.hkdf = (e7, t2, n2, r2, i) => Er(e7, vr(e7, t2, n2), r2, i), function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.getSharedKey = e7.deriveKey = void 0;
  var t2 = fe, n2 = pr, r2 = Jn;
  e7.deriveKey = function(e8, t3, i) {
    return (0, n2.hkdf)(r2.sha256, e8, t3, i, 32);
  };
  e7.getSharedKey = function() {
    for (var n3 = [], r3 = 0; r3 < arguments.length; r3++) n3[r3] = arguments[r3];
    return (0, e7.deriveKey)(t2.concatBytes.apply(void 0, n3));
  };
}(fr);
var Cr = {};
var Sr = {};
var _r = {};
var kr = {};
Object.defineProperty(kr, "__esModule", { value: true }), kr.polyval = kr.ghash = void 0, kr._toGHASHKey = Lr;
var xr = pe;
var Mr = fe;
var Ar = 16;
var Ir = new Uint8Array(16);
var Rr = (0, Mr.u32)(Ir);
var Pr = (e7) => (e7 >>> 0 & 255) << 24 | (e7 >>> 8 & 255) << 16 | (e7 >>> 16 & 255) << 8 | e7 >>> 24 & 255 | 0;
function Lr(e7) {
  e7.reverse();
  const t2 = 1 & e7[15];
  let n2 = 0;
  for (let t3 = 0; t3 < e7.length; t3++) {
    const r2 = e7[t3];
    e7[t3] = r2 >>> 1 | n2, n2 = (1 & r2) << 7;
  }
  return e7[0] ^= 225 & -t2, e7;
}
var Or = class {
  constructor(e7, t2) {
    this.blockLen = Ar, this.outputLen = Ar, this.s0 = 0, this.s1 = 0, this.s2 = 0, this.s3 = 0, this.finished = false, e7 = (0, Mr.toBytes)(e7), (0, xr.bytes)(e7, 16);
    const n2 = (0, Mr.createView)(e7);
    let r2 = n2.getUint32(0, false), i = n2.getUint32(4, false), o = n2.getUint32(8, false), s = n2.getUint32(12, false);
    const a2 = [];
    for (let e8 = 0; e8 < 128; e8++) a2.push({ s0: Pr(r2), s1: Pr(i), s2: Pr(o), s3: Pr(s) }), { s0: r2, s1: i, s2: o, s3: s } = { s3: (d2 = o) << 31 | (u2 = s) >>> 1, s2: (l2 = i) << 31 | d2 >>> 1, s1: (c2 = r2) << 31 | l2 >>> 1, s0: c2 >>> 1 ^ 225 << 24 & -(1 & u2) };
    var c2, l2, d2, u2;
    const h2 = ((e8) => e8 > 65536 ? 8 : e8 > 1024 ? 4 : 2)(t2 || 1024);
    if (![1, 2, 4, 8].includes(h2)) throw new Error(`ghash: wrong window size=${h2}, should be 2, 4 or 8`);
    this.W = h2;
    const f3 = 128 / h2, p2 = this.windowSize = 2 ** h2, g2 = [];
    for (let e8 = 0; e8 < f3; e8++) for (let t3 = 0; t3 < p2; t3++) {
      let n3 = 0, r3 = 0, i2 = 0, o2 = 0;
      for (let s2 = 0; s2 < h2; s2++) {
        if (!(t3 >>> h2 - s2 - 1 & 1)) continue;
        const { s0: c3, s1: l3, s2: d3, s3: u3 } = a2[h2 * e8 + s2];
        n3 ^= c3, r3 ^= l3, i2 ^= d3, o2 ^= u3;
      }
      g2.push({ s0: n3, s1: r3, s2: i2, s3: o2 });
    }
    this.t = g2;
  }
  _updateBlock(e7, t2, n2, r2) {
    e7 ^= this.s0, t2 ^= this.s1, n2 ^= this.s2, r2 ^= this.s3;
    const { W: i, t: o, windowSize: s } = this;
    let a2 = 0, c2 = 0, l2 = 0, d2 = 0;
    const u2 = (1 << i) - 1;
    let h2 = 0;
    for (const f3 of [e7, t2, n2, r2]) for (let e8 = 0; e8 < 4; e8++) {
      const t3 = f3 >>> 8 * e8 & 255;
      for (let e9 = 8 / i - 1; e9 >= 0; e9--) {
        const n3 = t3 >>> i * e9 & u2, { s0: r3, s1: f4, s2: p2, s3: g2 } = o[h2 * s + n3];
        a2 ^= r3, c2 ^= f4, l2 ^= p2, d2 ^= g2, h2 += 1;
      }
    }
    this.s0 = a2, this.s1 = c2, this.s2 = l2, this.s3 = d2;
  }
  update(e7) {
    e7 = (0, Mr.toBytes)(e7), (0, xr.exists)(this);
    const t2 = (0, Mr.u32)(e7), n2 = Math.floor(e7.length / Ar), r2 = e7.length % Ar;
    for (let e8 = 0; e8 < n2; e8++) this._updateBlock(t2[4 * e8 + 0], t2[4 * e8 + 1], t2[4 * e8 + 2], t2[4 * e8 + 3]);
    return r2 && (Ir.set(e7.subarray(n2 * Ar)), this._updateBlock(Rr[0], Rr[1], Rr[2], Rr[3]), (0, Mr.clean)(Rr)), this;
  }
  destroy() {
    const { t: e7 } = this;
    for (const t2 of e7) t2.s0 = 0, t2.s1 = 0, t2.s2 = 0, t2.s3 = 0;
  }
  digestInto(e7) {
    (0, xr.exists)(this), (0, xr.output)(e7, this), this.finished = true;
    const { s0: t2, s1: n2, s2: r2, s3: i } = this, o = (0, Mr.u32)(e7);
    return o[0] = t2, o[1] = n2, o[2] = r2, o[3] = i, e7;
  }
  digest() {
    const e7 = new Uint8Array(Ar);
    return this.digestInto(e7), this.destroy(), e7;
  }
};
var Tr = class extends Or {
  constructor(e7, t2) {
    e7 = (0, Mr.toBytes)(e7);
    const n2 = Lr((0, Mr.copyBytes)(e7));
    super(n2, t2), (0, Mr.clean)(n2);
  }
  update(e7) {
    e7 = (0, Mr.toBytes)(e7), (0, xr.exists)(this);
    const t2 = (0, Mr.u32)(e7), n2 = e7.length % Ar, r2 = Math.floor(e7.length / Ar);
    for (let e8 = 0; e8 < r2; e8++) this._updateBlock(Pr(t2[4 * e8 + 3]), Pr(t2[4 * e8 + 2]), Pr(t2[4 * e8 + 1]), Pr(t2[4 * e8 + 0]));
    return n2 && (Ir.set(e7.subarray(r2 * Ar)), this._updateBlock(Pr(Rr[3]), Pr(Rr[2]), Pr(Rr[1]), Pr(Rr[0])), (0, Mr.clean)(Rr)), this;
  }
  digestInto(e7) {
    (0, xr.exists)(this), (0, xr.output)(e7, this), this.finished = true;
    const { s0: t2, s1: n2, s2: r2, s3: i } = this, o = (0, Mr.u32)(e7);
    return o[0] = t2, o[1] = n2, o[2] = r2, o[3] = i, e7.reverse();
  }
};
function Nr(e7) {
  const t2 = (t3, n3) => e7(n3, t3.length).update((0, Mr.toBytes)(t3)).digest(), n2 = e7(new Uint8Array(16), 0);
  return t2.outputLen = n2.outputLen, t2.blockLen = n2.blockLen, t2.create = (t3, n3) => e7(t3, n3), t2;
}
kr.ghash = Nr((e7, t2) => new Or(e7, t2)), kr.polyval = Nr((e7, t2) => new Tr(e7, t2)), Object.defineProperty(_r, "__esModule", { value: true }), _r.unsafe = _r.aeskwp = _r.aeskw = _r.siv = _r.gcm = _r.cfb = _r.cbc = _r.ecb = _r.ctr = void 0, _r.expandKeyLE = Qr, _r.expandKeyDecLE = ei;
var Dr = pe;
var $r = kr;
var Br = fe;
var Kr = 16;
var jr = new Uint8Array(Kr);
var Ur = 283;
function Hr(e7) {
  return e7 << 1 ^ Ur & -(e7 >> 7);
}
function Fr(e7, t2) {
  let n2 = 0;
  for (; t2 > 0; t2 >>= 1) n2 ^= e7 & -(1 & t2), e7 = Hr(e7);
  return n2;
}
var zr = (() => {
  const e7 = new Uint8Array(256);
  for (let t3 = 0, n2 = 1; t3 < 256; t3++, n2 ^= Hr(n2)) e7[t3] = n2;
  const t2 = new Uint8Array(256);
  t2[0] = 99;
  for (let n2 = 0; n2 < 255; n2++) {
    let r2 = e7[255 - n2];
    r2 |= r2 << 8, t2[e7[n2]] = 255 & (r2 ^ r2 >> 4 ^ r2 >> 5 ^ r2 >> 6 ^ r2 >> 7 ^ 99);
  }
  return (0, Br.clean)(e7), t2;
})();
var qr = zr.map((e7, t2) => zr.indexOf(t2));
var Vr = (e7) => e7 << 24 | e7 >>> 8;
var Wr = (e7) => e7 << 8 | e7 >>> 24;
var Gr = (e7) => e7 << 24 & 4278190080 | e7 << 8 & 16711680 | e7 >>> 8 & 65280 | e7 >>> 24 & 255;
function Zr(e7, t2) {
  if (256 !== e7.length) throw new Error("Wrong sbox length");
  const n2 = new Uint32Array(256).map((n3, r3) => t2(e7[r3])), r2 = n2.map(Wr), i = r2.map(Wr), o = i.map(Wr), s = new Uint32Array(65536), a2 = new Uint32Array(65536), c2 = new Uint16Array(65536);
  for (let t3 = 0; t3 < 256; t3++) for (let l2 = 0; l2 < 256; l2++) {
    const d2 = 256 * t3 + l2;
    s[d2] = n2[t3] ^ r2[l2], a2[d2] = i[t3] ^ o[l2], c2[d2] = e7[t3] << 8 | e7[l2];
  }
  return { sbox: e7, sbox2: c2, T0: n2, T1: r2, T2: i, T3: o, T01: s, T23: a2 };
}
var Yr = Zr(zr, (e7) => Fr(e7, 3) << 24 | e7 << 16 | e7 << 8 | Fr(e7, 2));
var Jr = Zr(qr, (e7) => Fr(e7, 11) << 24 | Fr(e7, 13) << 16 | Fr(e7, 9) << 8 | Fr(e7, 14));
var Xr = (() => {
  const e7 = new Uint8Array(16);
  for (let t2 = 0, n2 = 1; t2 < 16; t2++, n2 = Hr(n2)) e7[t2] = n2;
  return e7;
})();
function Qr(e7) {
  (0, Dr.bytes)(e7);
  const t2 = e7.length;
  if (![16, 24, 32].includes(t2)) throw new Error(`aes: wrong key size: should be 16, 24 or 32, got: ${t2}`);
  const { sbox2: n2 } = Yr, r2 = [];
  (0, Br.isAligned32)(e7) || r2.push(e7 = (0, Br.copyBytes)(e7));
  const i = (0, Br.u32)(e7), o = i.length, s = (e8) => ni(n2, e8, e8, e8, e8), a2 = new Uint32Array(t2 + 28);
  a2.set(i);
  for (let e8 = o; e8 < a2.length; e8++) {
    let t3 = a2[e8 - 1];
    e8 % o == 0 ? t3 = s(Vr(t3)) ^ Xr[e8 / o - 1] : o > 6 && e8 % o == 4 && (t3 = s(t3)), a2[e8] = a2[e8 - o] ^ t3;
  }
  return (0, Br.clean)(...r2), a2;
}
function ei(e7) {
  const t2 = Qr(e7), n2 = t2.slice(), r2 = t2.length, { sbox2: i } = Yr, { T0: o, T1: s, T2: a2, T3: c2 } = Jr;
  for (let e8 = 0; e8 < r2; e8 += 4) for (let i2 = 0; i2 < 4; i2++) n2[e8 + i2] = t2[r2 - e8 - 4 + i2];
  (0, Br.clean)(t2);
  for (let e8 = 4; e8 < r2 - 4; e8++) {
    const t3 = n2[e8], r3 = ni(i, t3, t3, t3, t3);
    n2[e8] = o[255 & r3] ^ s[r3 >>> 8 & 255] ^ a2[r3 >>> 16 & 255] ^ c2[r3 >>> 24];
  }
  return n2;
}
function ti(e7, t2, n2, r2, i, o) {
  return e7[n2 << 8 & 65280 | r2 >>> 8 & 255] ^ t2[i >>> 8 & 65280 | o >>> 24 & 255];
}
function ni(e7, t2, n2, r2, i) {
  return e7[255 & t2 | 65280 & n2] | e7[r2 >>> 16 & 255 | i >>> 16 & 65280] << 16;
}
function ri(e7, t2, n2, r2, i) {
  const { sbox2: o, T01: s, T23: a2 } = Yr;
  let c2 = 0;
  t2 ^= e7[c2++], n2 ^= e7[c2++], r2 ^= e7[c2++], i ^= e7[c2++];
  const l2 = e7.length / 4 - 2;
  for (let o2 = 0; o2 < l2; o2++) {
    const o3 = e7[c2++] ^ ti(s, a2, t2, n2, r2, i), l3 = e7[c2++] ^ ti(s, a2, n2, r2, i, t2), d2 = e7[c2++] ^ ti(s, a2, r2, i, t2, n2), u2 = e7[c2++] ^ ti(s, a2, i, t2, n2, r2);
    t2 = o3, n2 = l3, r2 = d2, i = u2;
  }
  return { s0: e7[c2++] ^ ni(o, t2, n2, r2, i), s1: e7[c2++] ^ ni(o, n2, r2, i, t2), s2: e7[c2++] ^ ni(o, r2, i, t2, n2), s3: e7[c2++] ^ ni(o, i, t2, n2, r2) };
}
function ii(e7, t2, n2, r2, i) {
  const { sbox2: o, T01: s, T23: a2 } = Jr;
  let c2 = 0;
  t2 ^= e7[c2++], n2 ^= e7[c2++], r2 ^= e7[c2++], i ^= e7[c2++];
  const l2 = e7.length / 4 - 2;
  for (let o2 = 0; o2 < l2; o2++) {
    const o3 = e7[c2++] ^ ti(s, a2, t2, i, r2, n2), l3 = e7[c2++] ^ ti(s, a2, n2, t2, i, r2), d2 = e7[c2++] ^ ti(s, a2, r2, n2, t2, i), u2 = e7[c2++] ^ ti(s, a2, i, r2, n2, t2);
    t2 = o3, n2 = l3, r2 = d2, i = u2;
  }
  return { s0: e7[c2++] ^ ni(o, t2, i, r2, n2), s1: e7[c2++] ^ ni(o, n2, t2, i, r2), s2: e7[c2++] ^ ni(o, r2, n2, t2, i), s3: e7[c2++] ^ ni(o, i, r2, n2, t2) };
}
function oi(e7, t2) {
  if (void 0 === t2) return new Uint8Array(e7);
  if ((0, Dr.bytes)(t2), t2.length < e7) throw new Error(`aes: wrong destination length, expected at least ${e7}, got: ${t2.length}`);
  if (!(0, Br.isAligned32)(t2)) throw new Error("unaligned dst");
  return t2;
}
function si(e7, t2, n2, r2) {
  (0, Dr.bytes)(t2, Kr), (0, Dr.bytes)(n2);
  const i = n2.length;
  r2 = oi(i, r2);
  const o = t2, s = (0, Br.u32)(o);
  let { s0: a2, s1: c2, s2: l2, s3: d2 } = ri(e7, s[0], s[1], s[2], s[3]);
  const u2 = (0, Br.u32)(n2), h2 = (0, Br.u32)(r2);
  for (let t3 = 0; t3 + 4 <= u2.length; t3 += 4) {
    h2[t3 + 0] = u2[t3 + 0] ^ a2, h2[t3 + 1] = u2[t3 + 1] ^ c2, h2[t3 + 2] = u2[t3 + 2] ^ l2, h2[t3 + 3] = u2[t3 + 3] ^ d2;
    let n3 = 1;
    for (let e8 = o.length - 1; e8 >= 0; e8--) n3 = n3 + (255 & o[e8]) | 0, o[e8] = 255 & n3, n3 >>>= 8;
    ({ s0: a2, s1: c2, s2: l2, s3: d2 } = ri(e7, s[0], s[1], s[2], s[3]));
  }
  const f3 = Kr * Math.floor(u2.length / 4);
  if (f3 < i) {
    const e8 = new Uint32Array([a2, c2, l2, d2]), t3 = (0, Br.u8)(e8);
    for (let e9 = f3, o2 = 0; e9 < i; e9++, o2++) r2[e9] = n2[e9] ^ t3[o2];
    (0, Br.clean)(e8);
  }
  return r2;
}
function ai(e7, t2, n2, r2, i) {
  (0, Dr.bytes)(n2, Kr), (0, Dr.bytes)(r2), i = oi(r2.length, i);
  const o = n2, s = (0, Br.u32)(o), a2 = (0, Br.createView)(o), c2 = (0, Br.u32)(r2), l2 = (0, Br.u32)(i), d2 = t2 ? 0 : 12, u2 = r2.length;
  let h2 = a2.getUint32(d2, t2), { s0: f3, s1: p2, s2: g2, s3: m2 } = ri(e7, s[0], s[1], s[2], s[3]);
  for (let n3 = 0; n3 + 4 <= c2.length; n3 += 4) l2[n3 + 0] = c2[n3 + 0] ^ f3, l2[n3 + 1] = c2[n3 + 1] ^ p2, l2[n3 + 2] = c2[n3 + 2] ^ g2, l2[n3 + 3] = c2[n3 + 3] ^ m2, h2 = h2 + 1 >>> 0, a2.setUint32(d2, h2, t2), { s0: f3, s1: p2, s2: g2, s3: m2 } = ri(e7, s[0], s[1], s[2], s[3]);
  const y2 = Kr * Math.floor(c2.length / 4);
  if (y2 < u2) {
    const e8 = new Uint32Array([f3, p2, g2, m2]), t3 = (0, Br.u8)(e8);
    for (let e9 = y2, n3 = 0; e9 < u2; e9++, n3++) i[e9] = r2[e9] ^ t3[n3];
    (0, Br.clean)(e8);
  }
  return i;
}
function ci(e7) {
  if ((0, Dr.bytes)(e7), e7.length % Kr != 0) throw new Error("aes/(cbc-ecb).decrypt ciphertext should consist of blocks with size 16");
}
function li(e7, t2, n2) {
  (0, Dr.bytes)(e7);
  let r2 = e7.length;
  const i = r2 % Kr;
  if (!t2 && 0 !== i) throw new Error("aec/(cbc-ecb): unpadded plaintext with disabled padding");
  (0, Br.isAligned32)(e7) || (e7 = (0, Br.copyBytes)(e7));
  const o = (0, Br.u32)(e7);
  if (t2) {
    let e8 = Kr - i;
    e8 || (e8 = Kr), r2 += e8;
  }
  const s = oi(r2, n2);
  return { b: o, o: (0, Br.u32)(s), out: s };
}
function di(e7, t2) {
  if (!t2) return e7;
  const n2 = e7.length;
  if (!n2) throw new Error("aes/pcks5: empty ciphertext not allowed");
  const r2 = e7[n2 - 1];
  if (r2 <= 0 || r2 > 16) throw new Error("aes/pcks5: wrong padding");
  const i = e7.subarray(0, -r2);
  for (let t3 = 0; t3 < r2; t3++) if (e7[n2 - t3 - 1] !== r2) throw new Error("aes/pcks5: wrong padding");
  return i;
}
function ui(e7) {
  const t2 = new Uint8Array(16), n2 = (0, Br.u32)(t2);
  t2.set(e7);
  const r2 = Kr - e7.length;
  for (let e8 = Kr - r2; e8 < Kr; e8++) t2[e8] = r2;
  return n2;
}
function hi(e7, t2, n2, r2, i) {
  const o = null == i ? 0 : i.length, s = e7.create(n2, r2.length + o);
  i && s.update(i), s.update(r2);
  const a2 = new Uint8Array(16), c2 = (0, Br.createView)(a2);
  i && (0, Br.setBigUint64)(c2, 0, BigInt(8 * o), t2), (0, Br.setBigUint64)(c2, 8, BigInt(8 * r2.length), t2), s.update(a2);
  const l2 = s.digest();
  return (0, Br.clean)(a2), l2;
}
_r.ctr = (0, Br.wrapCipher)({ blockSize: 16, nonceLength: 16 }, function(e7, t2) {
  function n2(n3, r2) {
    if ((0, Dr.bytes)(n3), void 0 !== r2 && ((0, Dr.bytes)(r2), !(0, Br.isAligned32)(r2))) throw new Error("unaligned destination");
    const i = Qr(e7), o = (0, Br.copyBytes)(t2), s = [i, o];
    (0, Br.isAligned32)(n3) || s.push(n3 = (0, Br.copyBytes)(n3));
    const a2 = si(i, o, n3, r2);
    return (0, Br.clean)(...s), a2;
  }
  return (0, Dr.bytes)(e7), (0, Dr.bytes)(t2, Kr), { encrypt: (e8, t3) => n2(e8, t3), decrypt: (e8, t3) => n2(e8, t3) };
}), _r.ecb = (0, Br.wrapCipher)({ blockSize: 16 }, function(e7, t2 = {}) {
  (0, Dr.bytes)(e7);
  const n2 = !t2.disablePadding;
  return { encrypt(t3, r2) {
    const { b: i, o, out: s } = li(t3, n2, r2), a2 = Qr(e7);
    let c2 = 0;
    for (; c2 + 4 <= i.length; ) {
      const { s0: e8, s1: t4, s2: n3, s3: r3 } = ri(a2, i[c2 + 0], i[c2 + 1], i[c2 + 2], i[c2 + 3]);
      o[c2++] = e8, o[c2++] = t4, o[c2++] = n3, o[c2++] = r3;
    }
    if (n2) {
      const e8 = ui(t3.subarray(4 * c2)), { s0: n3, s1: r3, s2: i2, s3: s2 } = ri(a2, e8[0], e8[1], e8[2], e8[3]);
      o[c2++] = n3, o[c2++] = r3, o[c2++] = i2, o[c2++] = s2;
    }
    return (0, Br.clean)(a2), s;
  }, decrypt(t3, r2) {
    ci(t3);
    const i = ei(e7), o = oi(t3.length, r2), s = [i];
    (0, Br.isAligned32)(t3) || s.push(t3 = (0, Br.copyBytes)(t3));
    const a2 = (0, Br.u32)(t3), c2 = (0, Br.u32)(o);
    for (let e8 = 0; e8 + 4 <= a2.length; ) {
      const { s0: t4, s1: n3, s2: r3, s3: o2 } = ii(i, a2[e8 + 0], a2[e8 + 1], a2[e8 + 2], a2[e8 + 3]);
      c2[e8++] = t4, c2[e8++] = n3, c2[e8++] = r3, c2[e8++] = o2;
    }
    return (0, Br.clean)(...s), di(o, n2);
  } };
}), _r.cbc = (0, Br.wrapCipher)({ blockSize: 16, nonceLength: 16 }, function(e7, t2, n2 = {}) {
  (0, Dr.bytes)(e7), (0, Dr.bytes)(t2, 16);
  const r2 = !n2.disablePadding;
  return { encrypt(n3, i) {
    const o = Qr(e7), { b: s, o: a2, out: c2 } = li(n3, r2, i);
    let l2 = t2;
    const d2 = [o];
    (0, Br.isAligned32)(l2) || d2.push(l2 = (0, Br.copyBytes)(l2));
    const u2 = (0, Br.u32)(l2);
    let h2 = u2[0], f3 = u2[1], p2 = u2[2], g2 = u2[3], m2 = 0;
    for (; m2 + 4 <= s.length; ) h2 ^= s[m2 + 0], f3 ^= s[m2 + 1], p2 ^= s[m2 + 2], g2 ^= s[m2 + 3], { s0: h2, s1: f3, s2: p2, s3: g2 } = ri(o, h2, f3, p2, g2), a2[m2++] = h2, a2[m2++] = f3, a2[m2++] = p2, a2[m2++] = g2;
    if (r2) {
      const e8 = ui(n3.subarray(4 * m2));
      h2 ^= e8[0], f3 ^= e8[1], p2 ^= e8[2], g2 ^= e8[3], { s0: h2, s1: f3, s2: p2, s3: g2 } = ri(o, h2, f3, p2, g2), a2[m2++] = h2, a2[m2++] = f3, a2[m2++] = p2, a2[m2++] = g2;
    }
    return (0, Br.clean)(...d2), c2;
  }, decrypt(n3, i) {
    ci(n3);
    const o = ei(e7);
    let s = t2;
    const a2 = [o];
    (0, Br.isAligned32)(s) || a2.push(s = (0, Br.copyBytes)(s));
    const c2 = (0, Br.u32)(s), l2 = oi(n3.length, i);
    (0, Br.isAligned32)(n3) || a2.push(n3 = (0, Br.copyBytes)(n3));
    const d2 = (0, Br.u32)(n3), u2 = (0, Br.u32)(l2);
    let h2 = c2[0], f3 = c2[1], p2 = c2[2], g2 = c2[3];
    for (let e8 = 0; e8 + 4 <= d2.length; ) {
      const t3 = h2, n4 = f3, r3 = p2, i2 = g2;
      h2 = d2[e8 + 0], f3 = d2[e8 + 1], p2 = d2[e8 + 2], g2 = d2[e8 + 3];
      const { s0: s2, s1: a3, s2: c3, s3: l3 } = ii(o, h2, f3, p2, g2);
      u2[e8++] = s2 ^ t3, u2[e8++] = a3 ^ n4, u2[e8++] = c3 ^ r3, u2[e8++] = l3 ^ i2;
    }
    return (0, Br.clean)(...a2), di(l2, r2);
  } };
}), _r.cfb = (0, Br.wrapCipher)({ blockSize: 16, nonceLength: 16 }, function(e7, t2) {
  function n2(n3, r2, i) {
    (0, Dr.bytes)(n3);
    const o = n3.length;
    i = oi(o, i);
    const s = Qr(e7);
    let a2 = t2;
    const c2 = [s];
    (0, Br.isAligned32)(a2) || c2.push(a2 = (0, Br.copyBytes)(a2)), (0, Br.isAligned32)(n3) || c2.push(n3 = (0, Br.copyBytes)(n3));
    const l2 = (0, Br.u32)(n3), d2 = (0, Br.u32)(i), u2 = r2 ? d2 : l2, h2 = (0, Br.u32)(a2);
    let f3 = h2[0], p2 = h2[1], g2 = h2[2], m2 = h2[3];
    for (let e8 = 0; e8 + 4 <= l2.length; ) {
      const { s0: t3, s1: n4, s2: r3, s3: i2 } = ri(s, f3, p2, g2, m2);
      d2[e8 + 0] = l2[e8 + 0] ^ t3, d2[e8 + 1] = l2[e8 + 1] ^ n4, d2[e8 + 2] = l2[e8 + 2] ^ r3, d2[e8 + 3] = l2[e8 + 3] ^ i2, f3 = u2[e8++], p2 = u2[e8++], g2 = u2[e8++], m2 = u2[e8++];
    }
    const y2 = Kr * Math.floor(l2.length / 4);
    if (y2 < o) {
      ({ s0: f3, s1: p2, s2: g2, s3: m2 } = ri(s, f3, p2, g2, m2));
      const e8 = (0, Br.u8)(new Uint32Array([f3, p2, g2, m2]));
      for (let t3 = y2, r3 = 0; t3 < o; t3++, r3++) i[t3] = n3[t3] ^ e8[r3];
      (0, Br.clean)(e8);
    }
    return (0, Br.clean)(...c2), i;
  }
  return (0, Dr.bytes)(e7), (0, Dr.bytes)(t2, 16), { encrypt: (e8, t3) => n2(e8, true, t3), decrypt: (e8, t3) => n2(e8, false, t3) };
}), _r.gcm = (0, Br.wrapCipher)({ blockSize: 16, nonceLength: 12, tagLength: 16 }, function(e7, t2, n2) {
  if ((0, Dr.bytes)(e7), (0, Dr.bytes)(t2), void 0 !== n2 && (0, Dr.bytes)(n2), t2.length < 8) throw new Error("aes/gcm: invalid nonce length");
  const r2 = 16;
  function i(e8, t3, r3) {
    const i2 = hi($r.ghash, false, e8, r3, n2);
    for (let e9 = 0; e9 < t3.length; e9++) i2[e9] ^= t3[e9];
    return i2;
  }
  function o() {
    const n3 = Qr(e7), r3 = jr.slice(), i2 = jr.slice();
    if (ai(n3, false, i2, i2, r3), 12 === t2.length) i2.set(t2);
    else {
      const e8 = jr.slice(), n4 = (0, Br.createView)(e8);
      (0, Br.setBigUint64)(n4, 8, BigInt(8 * t2.length), false);
      const o2 = $r.ghash.create(r3).update(t2).update(e8);
      o2.digestInto(i2), o2.destroy();
    }
    return { xk: n3, authKey: r3, counter: i2, tagMask: ai(n3, false, i2, jr) };
  }
  return { encrypt(e8) {
    (0, Dr.bytes)(e8);
    const { xk: t3, authKey: n3, counter: s, tagMask: a2 } = o(), c2 = new Uint8Array(e8.length + r2), l2 = [t3, n3, s, a2];
    (0, Br.isAligned32)(e8) || l2.push(e8 = (0, Br.copyBytes)(e8)), ai(t3, false, s, e8, c2);
    const d2 = i(n3, a2, c2.subarray(0, c2.length - r2));
    return l2.push(d2), c2.set(d2, e8.length), (0, Br.clean)(...l2), c2;
  }, decrypt(e8) {
    if ((0, Dr.bytes)(e8), e8.length < r2) throw new Error("aes/gcm: ciphertext less than tagLen (16)");
    const { xk: t3, authKey: n3, counter: s, tagMask: a2 } = o(), c2 = [t3, n3, a2, s];
    (0, Br.isAligned32)(e8) || c2.push(e8 = (0, Br.copyBytes)(e8));
    const l2 = e8.subarray(0, -16), d2 = e8.subarray(-16), u2 = i(n3, a2, l2);
    if (c2.push(u2), !(0, Br.equalBytes)(u2, d2)) throw new Error("aes/gcm: invalid ghash tag");
    const h2 = ai(t3, false, s, l2);
    return (0, Br.clean)(...c2), h2;
  } };
});
var fi = (e7, t2, n2) => (r2) => {
  if (!Number.isSafeInteger(r2) || t2 > r2 || r2 > n2) throw new Error(`${e7}: invalid value=${r2}, must be [${t2}..${n2}]`);
};
function pi(e7) {
  return null != e7 && "object" == typeof e7 && (e7 instanceof Uint32Array || "Uint32Array" === e7.constructor.name);
}
function gi(e7, t2) {
  if ((0, Dr.bytes)(t2, 16), !pi(e7)) throw new Error("_encryptBlock accepts result of expandKeyLE");
  const n2 = (0, Br.u32)(t2);
  let { s0: r2, s1: i, s2: o, s3: s } = ri(e7, n2[0], n2[1], n2[2], n2[3]);
  return n2[0] = r2, n2[1] = i, n2[2] = o, n2[3] = s, t2;
}
function mi(e7, t2) {
  if ((0, Dr.bytes)(t2, 16), !pi(e7)) throw new Error("_decryptBlock accepts result of expandKeyLE");
  const n2 = (0, Br.u32)(t2);
  let { s0: r2, s1: i, s2: o, s3: s } = ii(e7, n2[0], n2[1], n2[2], n2[3]);
  return n2[0] = r2, n2[1] = i, n2[2] = o, n2[3] = s, t2;
}
_r.siv = (0, Br.wrapCipher)({ blockSize: 16, nonceLength: 12, tagLength: 16 }, function(e7, t2, n2) {
  const r2 = fi("AAD", 0, 2 ** 36), i = fi("plaintext", 0, 2 ** 36), o = fi("nonce", 12, 12), s = fi("ciphertext", 16, 2 ** 36 + 16);
  function a2() {
    const n3 = Qr(e7), r3 = new Uint8Array(e7.length), i2 = new Uint8Array(16), o2 = [n3, r3];
    let s2 = t2;
    (0, Br.isAligned32)(s2) || o2.push(s2 = (0, Br.copyBytes)(s2));
    const a3 = (0, Br.u32)(s2);
    let c3 = 0, l3 = a3[0], d2 = a3[1], u2 = a3[2], h2 = 0;
    for (const e8 of [i2, r3].map(Br.u32)) {
      const t3 = (0, Br.u32)(e8);
      for (let e9 = 0; e9 < t3.length; e9 += 2) {
        const { s0: r4, s1: i3 } = ri(n3, c3, l3, d2, u2);
        t3[e9 + 0] = r4, t3[e9 + 1] = i3, c3 = ++h2;
      }
    }
    const f3 = { authKey: i2, encKey: Qr(r3) };
    return (0, Br.clean)(...o2), f3;
  }
  function c2(e8, r3, i2) {
    const o2 = hi($r.polyval, true, r3, i2, n2);
    for (let e9 = 0; e9 < 12; e9++) o2[e9] ^= t2[e9];
    o2[15] &= 127;
    const s2 = (0, Br.u32)(o2);
    let a3 = s2[0], c3 = s2[1], l3 = s2[2], d2 = s2[3];
    return { s0: a3, s1: c3, s2: l3, s3: d2 } = ri(e8, a3, c3, l3, d2), s2[0] = a3, s2[1] = c3, s2[2] = l3, s2[3] = d2, o2;
  }
  function l2(e8, t3, n3) {
    let r3 = (0, Br.copyBytes)(t3);
    r3[15] |= 128;
    const i2 = ai(e8, true, r3, n3);
    return (0, Br.clean)(r3), i2;
  }
  return (0, Dr.bytes)(e7, 16, 24, 32), (0, Dr.bytes)(t2), o(t2.length), void 0 !== n2 && ((0, Dr.bytes)(n2), r2(n2.length)), { encrypt(e8) {
    (0, Dr.bytes)(e8), i(e8.length);
    const { encKey: t3, authKey: n3 } = a2(), r3 = c2(t3, n3, e8), o2 = [t3, n3, r3];
    (0, Br.isAligned32)(e8) || o2.push(e8 = (0, Br.copyBytes)(e8));
    const s2 = new Uint8Array(e8.length + 16);
    return s2.set(r3, e8.length), s2.set(l2(t3, r3, e8)), (0, Br.clean)(...o2), s2;
  }, decrypt(e8) {
    (0, Dr.bytes)(e8), s(e8.length);
    const t3 = e8.subarray(-16), { encKey: n3, authKey: r3 } = a2(), i2 = [n3, r3];
    (0, Br.isAligned32)(e8) || i2.push(e8 = (0, Br.copyBytes)(e8));
    const o2 = l2(n3, t3, e8.subarray(0, -16)), d2 = c2(n3, r3, o2);
    if (i2.push(d2), !(0, Br.equalBytes)(t3, d2)) throw (0, Br.clean)(...i2), new Error("invalid polyval tag");
    return (0, Br.clean)(...i2), o2;
  } };
});
var yi = { encrypt(e7, t2) {
  if (t2.length >= 2 ** 32) throw new Error("plaintext should be less than 4gb");
  const n2 = Qr(e7);
  if (16 === t2.length) gi(n2, t2);
  else {
    const e8 = (0, Br.u32)(t2);
    let r2 = e8[0], i = e8[1];
    for (let t3 = 0, o = 1; t3 < 6; t3++) for (let t4 = 2; t4 < e8.length; t4 += 2, o++) {
      const { s0: s, s1: a2, s2: c2, s3: l2 } = ri(n2, r2, i, e8[t4], e8[t4 + 1]);
      r2 = s, i = a2 ^ Gr(o), e8[t4] = c2, e8[t4 + 1] = l2;
    }
    e8[0] = r2, e8[1] = i;
  }
  n2.fill(0);
}, decrypt(e7, t2) {
  if (t2.length - 8 >= 2 ** 32) throw new Error("ciphertext should be less than 4gb");
  const n2 = ei(e7), r2 = t2.length / 8 - 1;
  if (1 === r2) mi(n2, t2);
  else {
    const e8 = (0, Br.u32)(t2);
    let i = e8[0], o = e8[1];
    for (let t3 = 0, s = 6 * r2; t3 < 6; t3++) for (let t4 = 2 * r2; t4 >= 1; t4 -= 2, s--) {
      o ^= Gr(s);
      const { s0: r3, s1: a2, s2: c2, s3: l2 } = ii(n2, i, o, e8[t4], e8[t4 + 1]);
      i = r3, o = a2, e8[t4] = c2, e8[t4 + 1] = l2;
    }
    e8[0] = i, e8[1] = o;
  }
  n2.fill(0);
} };
var vi = new Uint8Array(8).fill(166);
_r.aeskw = (0, Br.wrapCipher)({ blockSize: 8 }, (e7) => ({ encrypt(t2) {
  if ((0, Dr.bytes)(t2), !t2.length || t2.length % 8 != 0) throw new Error("invalid plaintext length");
  if (8 === t2.length) throw new Error("8-byte keys not allowed in AESKW, use AESKWP instead");
  const n2 = (0, Br.concatBytes)(vi, t2);
  return yi.encrypt(e7, n2), n2;
}, decrypt(t2) {
  if ((0, Dr.bytes)(t2), t2.length % 8 != 0 || t2.length < 24) throw new Error("invalid ciphertext length");
  const n2 = (0, Br.copyBytes)(t2);
  if (yi.decrypt(e7, n2), !(0, Br.equalBytes)(n2.subarray(0, 8), vi)) throw new Error("integrity check failed");
  return n2.subarray(0, 8).fill(0), n2.subarray(8);
} }));
var bi = 2790873510;
_r.aeskwp = (0, Br.wrapCipher)({ blockSize: 8 }, (e7) => ({ encrypt(t2) {
  if ((0, Dr.bytes)(t2), !t2.length) throw new Error("invalid plaintext length");
  const n2 = 8 * Math.ceil(t2.length / 8), r2 = new Uint8Array(8 + n2);
  r2.set(t2, 8);
  const i = (0, Br.u32)(r2);
  return i[0] = bi, i[1] = Gr(t2.length), yi.encrypt(e7, r2), r2;
}, decrypt(t2) {
  if ((0, Dr.bytes)(t2), t2.length < 16) throw new Error("invalid ciphertext length");
  const n2 = (0, Br.copyBytes)(t2), r2 = (0, Br.u32)(n2);
  yi.decrypt(e7, n2);
  const i = Gr(r2[1]) >>> 0, o = 8 * Math.ceil(i / 8);
  if (r2[0] !== bi || n2.length - 8 !== o) throw new Error("integrity check failed");
  for (let e8 = i; e8 < o; e8++) if (0 !== n2[8 + e8]) throw new Error("integrity check failed");
  return n2.subarray(0, 8).fill(0), n2.subarray(8, 8 + i);
} })), _r.unsafe = { expandKeyLE: Qr, expandKeyDecLE: ei, encrypt: ri, decrypt: ii, encryptBlock: gi, decryptBlock: mi, ctrCounter: si, ctr32: ai }, Object.defineProperty(Sr, "__esModule", { value: true }), Sr.aes256cbc = Sr.aes256gcm = void 0;
var wi = _r;
Sr.aes256gcm = function(e7, t2, n2) {
  return (0, wi.gcm)(e7, t2, n2);
};
Sr.aes256cbc = function(e7, t2, n2) {
  return (0, wi.cbc)(e7, t2);
};
var Ei = {};
var Ci = {};
var Si = {};
Object.defineProperty(Si, "__esModule", { value: true }), Si.sigma = void 0, Si.rotl = function(e7, t2) {
  return e7 << t2 | e7 >>> 32 - t2;
}, Si.createCipher = function(e7, t2) {
  const { allowShortKeys: n2, extendNonceFn: r2, counterLength: i, counterRight: o, rounds: s } = (0, ki.checkOpts)({ allowShortKeys: false, counterLength: 8, counterRight: false, rounds: 20 }, t2);
  if ("function" != typeof e7) throw new Error("core must be a function");
  return (0, _i.number)(i), (0, _i.number)(s), (0, _i.bool)(o), (0, _i.bool)(n2), (t3, a2, c2, l2, d2 = 0) => {
    (0, _i.bytes)(t3), (0, _i.bytes)(a2), (0, _i.bytes)(c2);
    const u2 = c2.length;
    if (void 0 === l2 && (l2 = new Uint8Array(u2)), (0, _i.bytes)(l2), (0, _i.number)(d2), d2 < 0 || d2 >= Ti) throw new Error("arx: counter overflow");
    if (l2.length < u2) throw new Error(`arx: output (${l2.length}) is shorter than data (${u2})`);
    const h2 = [];
    let f3, p2, g2 = t3.length;
    if (32 === g2) h2.push(f3 = (0, ki.copyBytes)(t3)), p2 = Ri;
    else {
      if (16 !== g2 || !n2) throw new Error(`arx: invalid 32-byte key, got length=${g2}`);
      f3 = new Uint8Array(32), f3.set(t3), f3.set(t3, 16), p2 = Ii, h2.push(f3);
    }
    Pi(a2) || h2.push(a2 = (0, ki.copyBytes)(a2));
    const m2 = (0, ki.u32)(f3);
    if (r2) {
      if (24 !== a2.length) throw new Error("arx: extended nonce must be 24 bytes");
      r2(p2, m2, (0, ki.u32)(a2.subarray(0, 16)), m2), a2 = a2.subarray(16);
    }
    const y2 = 16 - i;
    if (y2 !== a2.length) throw new Error(`arx: nonce must be ${y2} or 16 bytes`);
    if (12 !== y2) {
      const e8 = new Uint8Array(12);
      e8.set(a2, o ? 0 : 12 - a2.length), a2 = e8, h2.push(a2);
    }
    const v2 = (0, ki.u32)(a2);
    return function(e8, t4, n3, r3, i2, o2, s2, a3) {
      const c3 = i2.length, l3 = new Uint8Array(Li), d3 = (0, ki.u32)(l3), u3 = Pi(i2) && Pi(o2), h3 = u3 ? (0, ki.u32)(i2) : Ni, f4 = u3 ? (0, ki.u32)(o2) : Ni;
      for (let p3 = 0; p3 < c3; s2++) {
        if (e8(t4, n3, r3, d3, s2, a3), s2 >= Ti) throw new Error("arx: counter overflow");
        const g3 = Math.min(Li, c3 - p3);
        if (u3 && g3 === Li) {
          const e9 = p3 / 4;
          if (p3 % 4 != 0) throw new Error("arx: invalid block position");
          for (let t5, n4 = 0; n4 < Oi; n4++) t5 = e9 + n4, f4[t5] = h3[t5] ^ d3[n4];
          p3 += Li;
        } else {
          for (let e9, t5 = 0; t5 < g3; t5++) e9 = p3 + t5, o2[e9] = i2[e9] ^ l3[t5];
          p3 += g3;
        }
      }
    }(e7, p2, m2, v2, c2, l2, d2, s), (0, ki.clean)(...h2), l2;
  };
};
var _i = pe;
var ki = fe;
var xi = (e7) => Uint8Array.from(e7.split("").map((e8) => e8.charCodeAt(0)));
var Mi = xi("expand 16-byte k");
var Ai = xi("expand 32-byte k");
var Ii = (0, ki.u32)(Mi);
var Ri = (0, ki.u32)(Ai);
function Pi(e7) {
  return e7.byteOffset % 4 == 0;
}
Si.sigma = Ri.slice();
var Li = 64;
var Oi = 16;
var Ti = 2 ** 32 - 1;
var Ni = new Uint32Array();
var Di = {};
Object.defineProperty(Di, "__esModule", { value: true }), Di.poly1305 = void 0, Di.wrapConstructorWithKey = Ui;
var $i = pe;
var Bi = fe;
var Ki = (e7, t2) => 255 & e7[t2++] | (255 & e7[t2++]) << 8;
var ji = class {
  constructor(e7) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e7 = (0, Bi.toBytes)(e7), (0, $i.bytes)(e7, 32);
    const t2 = Ki(e7, 0), n2 = Ki(e7, 2), r2 = Ki(e7, 4), i = Ki(e7, 6), o = Ki(e7, 8), s = Ki(e7, 10), a2 = Ki(e7, 12), c2 = Ki(e7, 14);
    this.r[0] = 8191 & t2, this.r[1] = 8191 & (t2 >>> 13 | n2 << 3), this.r[2] = 7939 & (n2 >>> 10 | r2 << 6), this.r[3] = 8191 & (r2 >>> 7 | i << 9), this.r[4] = 255 & (i >>> 4 | o << 12), this.r[5] = o >>> 1 & 8190, this.r[6] = 8191 & (o >>> 14 | s << 2), this.r[7] = 8065 & (s >>> 11 | a2 << 5), this.r[8] = 8191 & (a2 >>> 8 | c2 << 8), this.r[9] = c2 >>> 5 & 127;
    for (let t3 = 0; t3 < 8; t3++) this.pad[t3] = Ki(e7, 16 + 2 * t3);
  }
  process(e7, t2, n2 = false) {
    const r2 = n2 ? 0 : 2048, { h: i, r: o } = this, s = o[0], a2 = o[1], c2 = o[2], l2 = o[3], d2 = o[4], u2 = o[5], h2 = o[6], f3 = o[7], p2 = o[8], g2 = o[9], m2 = Ki(e7, t2 + 0), y2 = Ki(e7, t2 + 2), v2 = Ki(e7, t2 + 4), b2 = Ki(e7, t2 + 6), w2 = Ki(e7, t2 + 8), E2 = Ki(e7, t2 + 10), C2 = Ki(e7, t2 + 12), S2 = Ki(e7, t2 + 14);
    let _2 = i[0] + (8191 & m2), k2 = i[1] + (8191 & (m2 >>> 13 | y2 << 3)), x2 = i[2] + (8191 & (y2 >>> 10 | v2 << 6)), M2 = i[3] + (8191 & (v2 >>> 7 | b2 << 9)), A2 = i[4] + (8191 & (b2 >>> 4 | w2 << 12)), I2 = i[5] + (w2 >>> 1 & 8191), R2 = i[6] + (8191 & (w2 >>> 14 | E2 << 2)), P2 = i[7] + (8191 & (E2 >>> 11 | C2 << 5)), L2 = i[8] + (8191 & (C2 >>> 8 | S2 << 8)), O2 = i[9] + (S2 >>> 5 | r2), T2 = 0, N2 = T2 + _2 * s + k2 * (5 * g2) + x2 * (5 * p2) + M2 * (5 * f3) + A2 * (5 * h2);
    T2 = N2 >>> 13, N2 &= 8191, N2 += I2 * (5 * u2) + R2 * (5 * d2) + P2 * (5 * l2) + L2 * (5 * c2) + O2 * (5 * a2), T2 += N2 >>> 13, N2 &= 8191;
    let D2 = T2 + _2 * a2 + k2 * s + x2 * (5 * g2) + M2 * (5 * p2) + A2 * (5 * f3);
    T2 = D2 >>> 13, D2 &= 8191, D2 += I2 * (5 * h2) + R2 * (5 * u2) + P2 * (5 * d2) + L2 * (5 * l2) + O2 * (5 * c2), T2 += D2 >>> 13, D2 &= 8191;
    let $2 = T2 + _2 * c2 + k2 * a2 + x2 * s + M2 * (5 * g2) + A2 * (5 * p2);
    T2 = $2 >>> 13, $2 &= 8191, $2 += I2 * (5 * f3) + R2 * (5 * h2) + P2 * (5 * u2) + L2 * (5 * d2) + O2 * (5 * l2), T2 += $2 >>> 13, $2 &= 8191;
    let B2 = T2 + _2 * l2 + k2 * c2 + x2 * a2 + M2 * s + A2 * (5 * g2);
    T2 = B2 >>> 13, B2 &= 8191, B2 += I2 * (5 * p2) + R2 * (5 * f3) + P2 * (5 * h2) + L2 * (5 * u2) + O2 * (5 * d2), T2 += B2 >>> 13, B2 &= 8191;
    let K2 = T2 + _2 * d2 + k2 * l2 + x2 * c2 + M2 * a2 + A2 * s;
    T2 = K2 >>> 13, K2 &= 8191, K2 += I2 * (5 * g2) + R2 * (5 * p2) + P2 * (5 * f3) + L2 * (5 * h2) + O2 * (5 * u2), T2 += K2 >>> 13, K2 &= 8191;
    let j2 = T2 + _2 * u2 + k2 * d2 + x2 * l2 + M2 * c2 + A2 * a2;
    T2 = j2 >>> 13, j2 &= 8191, j2 += I2 * s + R2 * (5 * g2) + P2 * (5 * p2) + L2 * (5 * f3) + O2 * (5 * h2), T2 += j2 >>> 13, j2 &= 8191;
    let U2 = T2 + _2 * h2 + k2 * u2 + x2 * d2 + M2 * l2 + A2 * c2;
    T2 = U2 >>> 13, U2 &= 8191, U2 += I2 * a2 + R2 * s + P2 * (5 * g2) + L2 * (5 * p2) + O2 * (5 * f3), T2 += U2 >>> 13, U2 &= 8191;
    let H2 = T2 + _2 * f3 + k2 * h2 + x2 * u2 + M2 * d2 + A2 * l2;
    T2 = H2 >>> 13, H2 &= 8191, H2 += I2 * c2 + R2 * a2 + P2 * s + L2 * (5 * g2) + O2 * (5 * p2), T2 += H2 >>> 13, H2 &= 8191;
    let F2 = T2 + _2 * p2 + k2 * f3 + x2 * h2 + M2 * u2 + A2 * d2;
    T2 = F2 >>> 13, F2 &= 8191, F2 += I2 * l2 + R2 * c2 + P2 * a2 + L2 * s + O2 * (5 * g2), T2 += F2 >>> 13, F2 &= 8191;
    let z2 = T2 + _2 * g2 + k2 * p2 + x2 * f3 + M2 * h2 + A2 * u2;
    T2 = z2 >>> 13, z2 &= 8191, z2 += I2 * d2 + R2 * l2 + P2 * c2 + L2 * a2 + O2 * s, T2 += z2 >>> 13, z2 &= 8191, T2 = (T2 << 2) + T2 | 0, T2 = T2 + N2 | 0, N2 = 8191 & T2, T2 >>>= 13, D2 += T2, i[0] = N2, i[1] = D2, i[2] = $2, i[3] = B2, i[4] = K2, i[5] = j2, i[6] = U2, i[7] = H2, i[8] = F2, i[9] = z2;
  }
  finalize() {
    const { h: e7, pad: t2 } = this, n2 = new Uint16Array(10);
    let r2 = e7[1] >>> 13;
    e7[1] &= 8191;
    for (let t3 = 2; t3 < 10; t3++) e7[t3] += r2, r2 = e7[t3] >>> 13, e7[t3] &= 8191;
    e7[0] += 5 * r2, r2 = e7[0] >>> 13, e7[0] &= 8191, e7[1] += r2, r2 = e7[1] >>> 13, e7[1] &= 8191, e7[2] += r2, n2[0] = e7[0] + 5, r2 = n2[0] >>> 13, n2[0] &= 8191;
    for (let t3 = 1; t3 < 10; t3++) n2[t3] = e7[t3] + r2, r2 = n2[t3] >>> 13, n2[t3] &= 8191;
    n2[9] -= 8192;
    let i = (1 ^ r2) - 1;
    for (let e8 = 0; e8 < 10; e8++) n2[e8] &= i;
    i = ~i;
    for (let t3 = 0; t3 < 10; t3++) e7[t3] = e7[t3] & i | n2[t3];
    e7[0] = 65535 & (e7[0] | e7[1] << 13), e7[1] = 65535 & (e7[1] >>> 3 | e7[2] << 10), e7[2] = 65535 & (e7[2] >>> 6 | e7[3] << 7), e7[3] = 65535 & (e7[3] >>> 9 | e7[4] << 4), e7[4] = 65535 & (e7[4] >>> 12 | e7[5] << 1 | e7[6] << 14), e7[5] = 65535 & (e7[6] >>> 2 | e7[7] << 11), e7[6] = 65535 & (e7[7] >>> 5 | e7[8] << 8), e7[7] = 65535 & (e7[8] >>> 8 | e7[9] << 5);
    let o = e7[0] + t2[0];
    e7[0] = 65535 & o;
    for (let n3 = 1; n3 < 8; n3++) o = (e7[n3] + t2[n3] | 0) + (o >>> 16) | 0, e7[n3] = 65535 & o;
    (0, Bi.clean)(n2);
  }
  update(e7) {
    (0, $i.exists)(this);
    const { buffer: t2, blockLen: n2 } = this, r2 = (e7 = (0, Bi.toBytes)(e7)).length;
    for (let i = 0; i < r2; ) {
      const o = Math.min(n2 - this.pos, r2 - i);
      if (o !== n2) t2.set(e7.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === n2 && (this.process(t2, 0, false), this.pos = 0);
      else for (; n2 <= r2 - i; i += n2) this.process(e7, i);
    }
    return this;
  }
  destroy() {
    (0, Bi.clean)(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e7) {
    (0, $i.exists)(this), (0, $i.output)(e7, this), this.finished = true;
    const { buffer: t2, h: n2 } = this;
    let { pos: r2 } = this;
    if (r2) {
      for (t2[r2++] = 1; r2 < 16; r2++) t2[r2] = 0;
      this.process(t2, 0, true);
    }
    this.finalize();
    let i = 0;
    for (let t3 = 0; t3 < 8; t3++) e7[i++] = n2[t3] >>> 0, e7[i++] = n2[t3] >>> 8;
    return e7;
  }
  digest() {
    const { buffer: e7, outputLen: t2 } = this;
    this.digestInto(e7);
    const n2 = e7.slice(0, t2);
    return this.destroy(), n2;
  }
};
function Ui(e7) {
  const t2 = (t3, n3) => e7(n3).update((0, Bi.toBytes)(t3)).digest(), n2 = e7(new Uint8Array(32));
  return t2.outputLen = n2.outputLen, t2.blockLen = n2.blockLen, t2.create = (t3) => e7(t3), t2;
}
Di.poly1305 = Ui((e7) => new ji(e7)), function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.xchacha20poly1305 = e7.chacha20poly1305 = e7._poly1305_aead = e7.chacha12 = e7.chacha8 = e7.xchacha20 = e7.chacha20 = e7.chacha20orig = void 0, e7.hchacha = s;
  const t2 = Si, n2 = pe, r2 = Di, i = fe;
  function o(e8, n3, r3, i2, o2, s2 = 20) {
    let a3 = e8[0], c3 = e8[1], l3 = e8[2], d3 = e8[3], u2 = n3[0], h2 = n3[1], f3 = n3[2], p2 = n3[3], g2 = n3[4], m2 = n3[5], y2 = n3[6], v2 = n3[7], b2 = o2, w2 = r3[0], E2 = r3[1], C2 = r3[2], S2 = a3, _2 = c3, k2 = l3, x2 = d3, M2 = u2, A2 = h2, I2 = f3, R2 = p2, P2 = g2, L2 = m2, O2 = y2, T2 = v2, N2 = b2, D2 = w2, $2 = E2, B2 = C2;
    for (let e9 = 0; e9 < s2; e9 += 2) S2 = S2 + M2 | 0, N2 = (0, t2.rotl)(N2 ^ S2, 16), P2 = P2 + N2 | 0, M2 = (0, t2.rotl)(M2 ^ P2, 12), S2 = S2 + M2 | 0, N2 = (0, t2.rotl)(N2 ^ S2, 8), P2 = P2 + N2 | 0, M2 = (0, t2.rotl)(M2 ^ P2, 7), _2 = _2 + A2 | 0, D2 = (0, t2.rotl)(D2 ^ _2, 16), L2 = L2 + D2 | 0, A2 = (0, t2.rotl)(A2 ^ L2, 12), _2 = _2 + A2 | 0, D2 = (0, t2.rotl)(D2 ^ _2, 8), L2 = L2 + D2 | 0, A2 = (0, t2.rotl)(A2 ^ L2, 7), k2 = k2 + I2 | 0, $2 = (0, t2.rotl)($2 ^ k2, 16), O2 = O2 + $2 | 0, I2 = (0, t2.rotl)(I2 ^ O2, 12), k2 = k2 + I2 | 0, $2 = (0, t2.rotl)($2 ^ k2, 8), O2 = O2 + $2 | 0, I2 = (0, t2.rotl)(I2 ^ O2, 7), x2 = x2 + R2 | 0, B2 = (0, t2.rotl)(B2 ^ x2, 16), T2 = T2 + B2 | 0, R2 = (0, t2.rotl)(R2 ^ T2, 12), x2 = x2 + R2 | 0, B2 = (0, t2.rotl)(B2 ^ x2, 8), T2 = T2 + B2 | 0, R2 = (0, t2.rotl)(R2 ^ T2, 7), S2 = S2 + A2 | 0, B2 = (0, t2.rotl)(B2 ^ S2, 16), O2 = O2 + B2 | 0, A2 = (0, t2.rotl)(A2 ^ O2, 12), S2 = S2 + A2 | 0, B2 = (0, t2.rotl)(B2 ^ S2, 8), O2 = O2 + B2 | 0, A2 = (0, t2.rotl)(A2 ^ O2, 7), _2 = _2 + I2 | 0, N2 = (0, t2.rotl)(N2 ^ _2, 16), T2 = T2 + N2 | 0, I2 = (0, t2.rotl)(I2 ^ T2, 12), _2 = _2 + I2 | 0, N2 = (0, t2.rotl)(N2 ^ _2, 8), T2 = T2 + N2 | 0, I2 = (0, t2.rotl)(I2 ^ T2, 7), k2 = k2 + R2 | 0, D2 = (0, t2.rotl)(D2 ^ k2, 16), P2 = P2 + D2 | 0, R2 = (0, t2.rotl)(R2 ^ P2, 12), k2 = k2 + R2 | 0, D2 = (0, t2.rotl)(D2 ^ k2, 8), P2 = P2 + D2 | 0, R2 = (0, t2.rotl)(R2 ^ P2, 7), x2 = x2 + M2 | 0, $2 = (0, t2.rotl)($2 ^ x2, 16), L2 = L2 + $2 | 0, M2 = (0, t2.rotl)(M2 ^ L2, 12), x2 = x2 + M2 | 0, $2 = (0, t2.rotl)($2 ^ x2, 8), L2 = L2 + $2 | 0, M2 = (0, t2.rotl)(M2 ^ L2, 7);
    let K2 = 0;
    i2[K2++] = a3 + S2 | 0, i2[K2++] = c3 + _2 | 0, i2[K2++] = l3 + k2 | 0, i2[K2++] = d3 + x2 | 0, i2[K2++] = u2 + M2 | 0, i2[K2++] = h2 + A2 | 0, i2[K2++] = f3 + I2 | 0, i2[K2++] = p2 + R2 | 0, i2[K2++] = g2 + P2 | 0, i2[K2++] = m2 + L2 | 0, i2[K2++] = y2 + O2 | 0, i2[K2++] = v2 + T2 | 0, i2[K2++] = b2 + N2 | 0, i2[K2++] = w2 + D2 | 0, i2[K2++] = E2 + $2 | 0, i2[K2++] = C2 + B2 | 0;
  }
  function s(e8, n3, r3, i2) {
    let o2 = e8[0], s2 = e8[1], a3 = e8[2], c3 = e8[3], l3 = n3[0], d3 = n3[1], u2 = n3[2], h2 = n3[3], f3 = n3[4], p2 = n3[5], g2 = n3[6], m2 = n3[7], y2 = r3[0], v2 = r3[1], b2 = r3[2], w2 = r3[3];
    for (let e9 = 0; e9 < 20; e9 += 2) o2 = o2 + l3 | 0, y2 = (0, t2.rotl)(y2 ^ o2, 16), f3 = f3 + y2 | 0, l3 = (0, t2.rotl)(l3 ^ f3, 12), o2 = o2 + l3 | 0, y2 = (0, t2.rotl)(y2 ^ o2, 8), f3 = f3 + y2 | 0, l3 = (0, t2.rotl)(l3 ^ f3, 7), s2 = s2 + d3 | 0, v2 = (0, t2.rotl)(v2 ^ s2, 16), p2 = p2 + v2 | 0, d3 = (0, t2.rotl)(d3 ^ p2, 12), s2 = s2 + d3 | 0, v2 = (0, t2.rotl)(v2 ^ s2, 8), p2 = p2 + v2 | 0, d3 = (0, t2.rotl)(d3 ^ p2, 7), a3 = a3 + u2 | 0, b2 = (0, t2.rotl)(b2 ^ a3, 16), g2 = g2 + b2 | 0, u2 = (0, t2.rotl)(u2 ^ g2, 12), a3 = a3 + u2 | 0, b2 = (0, t2.rotl)(b2 ^ a3, 8), g2 = g2 + b2 | 0, u2 = (0, t2.rotl)(u2 ^ g2, 7), c3 = c3 + h2 | 0, w2 = (0, t2.rotl)(w2 ^ c3, 16), m2 = m2 + w2 | 0, h2 = (0, t2.rotl)(h2 ^ m2, 12), c3 = c3 + h2 | 0, w2 = (0, t2.rotl)(w2 ^ c3, 8), m2 = m2 + w2 | 0, h2 = (0, t2.rotl)(h2 ^ m2, 7), o2 = o2 + d3 | 0, w2 = (0, t2.rotl)(w2 ^ o2, 16), g2 = g2 + w2 | 0, d3 = (0, t2.rotl)(d3 ^ g2, 12), o2 = o2 + d3 | 0, w2 = (0, t2.rotl)(w2 ^ o2, 8), g2 = g2 + w2 | 0, d3 = (0, t2.rotl)(d3 ^ g2, 7), s2 = s2 + u2 | 0, y2 = (0, t2.rotl)(y2 ^ s2, 16), m2 = m2 + y2 | 0, u2 = (0, t2.rotl)(u2 ^ m2, 12), s2 = s2 + u2 | 0, y2 = (0, t2.rotl)(y2 ^ s2, 8), m2 = m2 + y2 | 0, u2 = (0, t2.rotl)(u2 ^ m2, 7), a3 = a3 + h2 | 0, v2 = (0, t2.rotl)(v2 ^ a3, 16), f3 = f3 + v2 | 0, h2 = (0, t2.rotl)(h2 ^ f3, 12), a3 = a3 + h2 | 0, v2 = (0, t2.rotl)(v2 ^ a3, 8), f3 = f3 + v2 | 0, h2 = (0, t2.rotl)(h2 ^ f3, 7), c3 = c3 + l3 | 0, b2 = (0, t2.rotl)(b2 ^ c3, 16), p2 = p2 + b2 | 0, l3 = (0, t2.rotl)(l3 ^ p2, 12), c3 = c3 + l3 | 0, b2 = (0, t2.rotl)(b2 ^ c3, 8), p2 = p2 + b2 | 0, l3 = (0, t2.rotl)(l3 ^ p2, 7);
    let E2 = 0;
    i2[E2++] = o2, i2[E2++] = s2, i2[E2++] = a3, i2[E2++] = c3, i2[E2++] = y2, i2[E2++] = v2, i2[E2++] = b2, i2[E2++] = w2;
  }
  e7.chacha20orig = (0, t2.createCipher)(o, { counterRight: false, counterLength: 8, allowShortKeys: true }), e7.chacha20 = (0, t2.createCipher)(o, { counterRight: false, counterLength: 4, allowShortKeys: false }), e7.xchacha20 = (0, t2.createCipher)(o, { counterRight: false, counterLength: 8, extendNonceFn: s, allowShortKeys: false }), e7.chacha8 = (0, t2.createCipher)(o, { counterRight: false, counterLength: 4, rounds: 8 }), e7.chacha12 = (0, t2.createCipher)(o, { counterRight: false, counterLength: 4, rounds: 12 });
  const a2 = new Uint8Array(16), c2 = (e8, t3) => {
    e8.update(t3);
    const n3 = t3.length % 16;
    n3 && e8.update(a2.subarray(n3));
  }, l2 = new Uint8Array(32);
  function d2(e8, t3, n3, o2, s2) {
    const a3 = e8(t3, n3, l2), d3 = r2.poly1305.create(a3);
    s2 && c2(d3, s2), c2(d3, o2);
    const u2 = new Uint8Array(16), h2 = (0, i.createView)(u2);
    (0, i.setBigUint64)(h2, 0, BigInt(s2 ? s2.length : 0), true), (0, i.setBigUint64)(h2, 8, BigInt(o2.length), true), d3.update(u2);
    const f3 = d3.digest();
    return (0, i.clean)(a3, u2), f3;
  }
  e7._poly1305_aead = (e8) => (t3, r3, o2) => {
    const s2 = 16;
    return (0, n2.bytes)(t3, 32), (0, n2.bytes)(r3), { encrypt(a3, c3) {
      const l3 = a3.length, u2 = l3 + s2;
      c3 ? (0, n2.bytes)(c3, u2) : c3 = new Uint8Array(u2), e8(t3, r3, a3, c3, 1);
      const h2 = d2(e8, t3, r3, c3.subarray(0, -16), o2);
      return c3.set(h2, l3), (0, i.clean)(h2), c3;
    }, decrypt(a3, c3) {
      const l3 = a3.length, u2 = l3 - s2;
      if (l3 < s2) throw new Error("encrypted data must be at least 16 bytes");
      c3 ? (0, n2.bytes)(c3, u2) : c3 = new Uint8Array(u2);
      const h2 = a3.subarray(0, -16), f3 = a3.subarray(-16), p2 = d2(e8, t3, r3, h2, o2);
      if (!(0, i.equalBytes)(f3, p2)) throw new Error("invalid tag");
      return e8(t3, r3, h2, c3, 1), (0, i.clean)(p2), c3;
    } };
  }, e7.chacha20poly1305 = (0, i.wrapCipher)({ blockSize: 64, nonceLength: 12, tagLength: 16 }, (0, e7._poly1305_aead)(e7.chacha20)), e7.xchacha20poly1305 = (0, i.wrapCipher)({ blockSize: 64, nonceLength: 24, tagLength: 16 }, (0, e7._poly1305_aead)(e7.xchacha20));
}(Ci), Object.defineProperty(Ei, "__esModule", { value: true }), Ei.xchacha20 = void 0;
var Hi;
var Fi;
var zi;
var qi = Ci;
Ei.xchacha20 = function(e7, t2, n2) {
  return (0, qi.xchacha20poly1305)(e7, t2, n2);
}, function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.aesDecrypt = e7.aesEncrypt = e7.symDecrypt = e7.symEncrypt = void 0;
  var t2 = fe, n2 = Ie, r2 = Sr, i = Ei, o = Se, s = _e;
  e7.symEncrypt = function(e8, t3, n3) {
    return a2(c2, e8, t3, n3);
  };
  function a2(e8, t3, n3, a3) {
    var c3 = (0, o.symmetricAlgorithm)();
    if ("aes-256-gcm" === c3) return e8(r2.aes256gcm, t3, n3, (0, o.symmetricNonceLength)(), s.AEAD_TAG_LENGTH, a3);
    if ("xchacha20" === c3) return e8(i.xchacha20, t3, n3, s.XCHACHA20_NONCE_LENGTH, s.AEAD_TAG_LENGTH, a3);
    if ("aes-256-cbc" === c3) return e8(r2.aes256cbc, t3, n3, 16, 0);
    throw new Error("Not implemented");
  }
  function c2(e8, r3, i2, o2, s2, a3) {
    var c3 = (0, n2.randomBytes)(o2), l3 = e8(r3, c3, a3).encrypt(i2);
    if (0 === s2) return (0, t2.concatBytes)(c3, l3);
    var d2 = l3.length - s2, u2 = l3.subarray(0, d2), h2 = l3.subarray(d2);
    return (0, t2.concatBytes)(c3, h2, u2);
  }
  function l2(e8, n3, r3, i2, o2, s2) {
    var a3 = r3.subarray(0, i2), c3 = e8(n3, Uint8Array.from(a3), s2), l3 = r3.subarray(i2);
    if (0 === o2) return c3.decrypt(l3);
    var d2 = l3.subarray(0, o2), u2 = l3.subarray(o2);
    return c3.decrypt((0, t2.concatBytes)(u2, d2));
  }
  e7.symDecrypt = function(e8, t3, n3) {
    return a2(l2, e8, t3, n3);
  }, e7.aesEncrypt = e7.symEncrypt, e7.aesDecrypt = e7.symDecrypt;
}(Cr), Hi = Me, Fi = le && le.__createBinding || (Object.create ? function(e7, t2, n2, r2) {
  void 0 === r2 && (r2 = n2);
  var i = Object.getOwnPropertyDescriptor(t2, n2);
  i && !("get" in i ? !t2.__esModule : i.writable || i.configurable) || (i = { enumerable: true, get: function() {
    return t2[n2];
  } }), Object.defineProperty(e7, r2, i);
} : function(e7, t2, n2, r2) {
  void 0 === r2 && (r2 = n2), e7[r2] = t2[n2];
}), zi = le && le.__exportStar || function(e7, t2) {
  for (var n2 in e7) "default" === n2 || Object.prototype.hasOwnProperty.call(t2, n2) || Fi(t2, e7, n2);
}, Object.defineProperty(Hi, "__esModule", { value: true }), zi(Ae, Hi), zi(fr, Hi), zi(hr, Hi), zi(Cr, Hi);
var Vi = {};
Object.defineProperty(Vi, "__esModule", { value: true }), Vi.PublicKey = void 0;
var Wi = fe;
var Gi = Me;
var Zi = function() {
  function e7(e8) {
    this.data = (0, Gi.convertPublicKeyFormat)(e8, true);
  }
  return e7.fromHex = function(t2) {
    return new e7((0, Gi.hexToPublicKey)(t2));
  }, Object.defineProperty(e7.prototype, "uncompressed", { get: function() {
    return S.from((0, Gi.convertPublicKeyFormat)(this.data, false));
  }, enumerable: false, configurable: true }), Object.defineProperty(e7.prototype, "compressed", { get: function() {
    return S.from(this.data);
  }, enumerable: false, configurable: true }), e7.prototype.toHex = function(e8) {
    return void 0 === e8 && (e8 = true), (0, Wi.bytesToHex)(e8 ? this.data : this.uncompressed);
  }, e7.prototype.decapsulate = function(e8, t2) {
    void 0 === t2 && (t2 = false);
    var n2 = t2 ? this.data : this.uncompressed, r2 = e8.multiply(this, t2);
    return (0, Gi.getSharedKey)(n2, r2);
  }, e7.prototype.equals = function(e8) {
    return (0, Wi.equalBytes)(this.data, e8.data);
  }, e7;
}();
Vi.PublicKey = Zi, Object.defineProperty(xe, "__esModule", { value: true }), xe.PrivateKey = void 0;
var Yi = fe;
var Ji = Me;
var Xi = Vi;
var Qi = function() {
  function e7(e8) {
    if (void 0 === e8) this.data = (0, Ji.getValidSecret)();
    else {
      if (!(0, Ji.isValidPrivateKey)(e8)) throw new Error("Invalid private key");
      this.data = e8;
    }
    this.publicKey = new Xi.PublicKey((0, Ji.getPublicKey)(this.data));
  }
  return e7.fromHex = function(t2) {
    return new e7((0, Ji.decodeHex)(t2));
  }, Object.defineProperty(e7.prototype, "secret", { get: function() {
    return S.from(this.data);
  }, enumerable: false, configurable: true }), e7.prototype.toHex = function() {
    return (0, Yi.bytesToHex)(this.data);
  }, e7.prototype.encapsulate = function(e8, t2) {
    void 0 === t2 && (t2 = false);
    var n2 = t2 ? this.publicKey.compressed : this.publicKey.uncompressed, r2 = this.multiply(e8, t2);
    return (0, Ji.getSharedKey)(n2, r2);
  }, e7.prototype.multiply = function(e8, t2) {
    return void 0 === t2 && (t2 = false), (0, Ji.getSharedPoint)(this.data, e8.compressed, t2);
  }, e7.prototype.equals = function(e8) {
    return (0, Yi.equalBytes)(this.data, e8.data);
  }, e7;
}();
xe.PrivateKey = Qi, function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.PublicKey = e7.PrivateKey = void 0;
  var t2 = xe;
  Object.defineProperty(e7, "PrivateKey", { enumerable: true, get: function() {
    return t2.PrivateKey;
  } });
  var n2 = Vi;
  Object.defineProperty(e7, "PublicKey", { enumerable: true, get: function() {
    return n2.PublicKey;
  } });
}(ke), function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.utils = e7.PublicKey = e7.PrivateKey = e7.ECIES_CONFIG = void 0, e7.encrypt = function(e8, o2) {
    var s2 = new r2.PrivateKey(), a2 = e8 instanceof Uint8Array ? new r2.PublicKey(e8) : r2.PublicKey.fromHex(e8), c2 = s2.encapsulate(a2, (0, n2.isHkdfKeyCompressed)()), l2 = (0, n2.isEphemeralKeyCompressed)() ? s2.publicKey.compressed : s2.publicKey.uncompressed, d2 = (0, i.symEncrypt)(c2, o2);
    return S.from((0, t2.concatBytes)(l2, d2));
  }, e7.decrypt = function(e8, t3) {
    var o2 = e8 instanceof Uint8Array ? new r2.PrivateKey(e8) : r2.PrivateKey.fromHex(e8), s2 = (0, n2.ephemeralKeySize)(), a2 = new r2.PublicKey(t3.subarray(0, s2)), c2 = t3.subarray(s2), l2 = a2.decapsulate(o2, (0, n2.isHkdfKeyCompressed)());
    return S.from((0, i.symDecrypt)(l2, c2));
  };
  var t2 = fe, n2 = Se, r2 = ke, i = Me;
  var o = Se;
  Object.defineProperty(e7, "ECIES_CONFIG", { enumerable: true, get: function() {
    return o.ECIES_CONFIG;
  } });
  var s = ke;
  Object.defineProperty(e7, "PrivateKey", { enumerable: true, get: function() {
    return s.PrivateKey;
  } }), Object.defineProperty(e7, "PublicKey", { enumerable: true, get: function() {
    return s.PublicKey;
  } }), e7.utils = { aesEncrypt: i.aesEncrypt, aesDecrypt: i.aesDecrypt, symEncrypt: i.symEncrypt, symDecrypt: i.symDecrypt, decodeHex: i.decodeHex, getValidSecret: i.getValidSecret, remove0x: i.remove0x };
}(he);
var eo = (0, import_debug.default)("KeyExchange:Layer");
var to = (0, import_debug.default)("SocketService:Layer");
var no = (0, import_debug.default)("Ecies:Layer");
var ro = (0, import_debug.default)("RemoteCommunication:Layer");
eo.color = "##95c44e", to.color = "#f638d7", no.color = "#465b9c", ro.color = "#47a2be";
var io = { KeyExchange: eo, SocketService: to, Ecies: no, RemoteCommunication: ro };
var oo;
var so = [];
var ao = [];
var co = (t2, n2) => a(void 0, void 0, void 0, function* () {
  oo = n2, ao.push(t2), function(t3) {
    return a(this, void 0, void 0, function* () {
      if (!oo || !t3) return;
      !function() {
        const e7 = ao;
        ao = so, so = e7;
      }();
      const n3 = oo.endsWith("/") ? `${oo}evt` : `${oo}/evt`, r2 = Object.assign({}, t3);
      if (delete r2.params, t3.params) for (const [e7, n4] of Object.entries(t3.params)) r2[e7] = n4;
      const i = JSON.stringify(r2);
      io.RemoteCommunication(`[sendBufferedEvents] Sending ${so.length} analytics events to ${n3}`);
      try {
        const t4 = yield (0, import_cross_fetch.default)(n3, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: i }), r3 = yield t4.text();
        io.RemoteCommunication(`[sendBufferedEvents] Response: ${r3}`), so.length = 0;
      } catch (n4) {
      }
    });
  }(t2).catch(() => {
  });
});
var lo = class {
  constructor(e7) {
    this.enabled = true, (null == e7 ? void 0 : e7.debug) && import_debug.default.enable("Ecies:Layer"), this.ecies = (null == e7 ? void 0 : e7.privateKey) ? he.PrivateKey.fromHex(e7.privateKey) : new he.PrivateKey(), io.Ecies("[ECIES constructor()] initialized secret: ", this.ecies.toHex()), io.Ecies("[ECIES constructor()] initialized public: ", this.ecies.publicKey.toHex()), io.Ecies("[ECIES constructor()] init with", this);
  }
  generateECIES() {
    this.ecies = new he.PrivateKey();
  }
  getPublicKey() {
    return this.ecies.publicKey.toHex();
  }
  encrypt(e7, t2) {
    let n2 = e7;
    if (this.enabled) try {
      io.Ecies("[ECIES: encrypt()] using otherPublicKey", t2);
      const r2 = S.from(e7), i = he.encrypt(t2, r2);
      n2 = S.from(i).toString("base64");
    } catch (n3) {
      throw io.Ecies("[ECIES: encrypt()] error encrypt:", n3), io.Ecies("[ECIES: encrypt()] private: ", this.ecies.toHex()), io.Ecies("[ECIES: encrypt()] data: ", e7), io.Ecies("[ECIES: encrypt()] otherkey: ", t2), n3;
    }
    return n2;
  }
  decrypt(e7) {
    let t2 = e7;
    if (this.enabled) try {
      io.Ecies("[ECIES: decrypt()] using privateKey", this.ecies.toHex());
      const n2 = S.from(e7.toString(), "base64");
      t2 = he.decrypt(this.ecies.toHex(), n2).toString();
    } catch (t3) {
      throw io.Ecies("[ECIES: decrypt()] error decrypt", t3), io.Ecies("[ECIES: decrypt()] private: ", this.ecies.toHex()), io.Ecies("[ECIES: decrypt()] encryptedData: ", e7), t3;
    }
    return t2;
  }
  getKeyInfo() {
    return { private: this.ecies.toHex(), public: this.ecies.publicKey.toHex() };
  }
  toString() {
    io.Ecies("[ECIES: toString()]", this.getKeyInfo());
  }
};
var uo = { name: "@metamask/sdk-communication-layer", version: "0.32.0", description: "", homepage: "https://github.com/MetaMask/metamask-sdk#readme", bugs: { url: "https://github.com/MetaMask/metamask-sdk/issues" }, repository: { type: "git", url: "https://github.com/MetaMask/metamask-sdk.git", directory: "packages/sdk-communication-layer" }, main: "dist/node/cjs/metamask-sdk-communication-layer.js", unpkg: "dist/browser/umd/metamask-sdk-communication-layer.js", module: "dist/node/es/metamask-sdk-communication-layer.js", browser: "dist/browser/es/metamask-sdk-communication-layer.js", "react-native": "dist/react-native/es/metamask-sdk-communication-layer.js", types: "dist/types/src/index.d.ts", files: ["/dist"], scripts: { "build:types": "tsc --project tsconfig.build.json --emitDeclarationOnly --outDir dist/types", "build:clean": "yarn clean && yarn build", build: "yarn build:types && rollup -c --bundleConfigAsCjs", "build:dev": "yarn build:types && NODE_ENV=dev rollup -c --bundleConfigAsCjs", dev: 'concurrently "tsc --watch" "rollup -c --bundleConfigAsCjs -w"', "build:post-tsc": "echo 'N/A'", "build:pre-tsc": "echo 'N/A'", size: "size-limit", clean: "rimraf ./dist", lint: "yarn lint:eslint && yarn lint:misc --check", "lint:changelog": "../../scripts/validate-changelog.sh @metamask/sdk-communication-layer", "lint:eslint": "eslint . --cache --ext js,ts", "lint:fix": "yarn lint:eslint --fix && yarn lint:misc --write", "lint:misc": "prettier '**/*.json' '**/*.md' '!CHANGELOG.md' --ignore-path ../../.gitignore", "publish:preview": "yarn npm publish --tag preview", prepack: "../../scripts/prepack.sh", reset: "yarn clean && rimraf ./node_modules/", test: 'jest --testPathIgnorePatterns "/e2e/"', "test:e2e": 'jest --testPathPattern "/e2e/"', "test:coverage": "jest --coverage", "test:ci": 'jest --coverage --passWithNoTests --setupFilesAfterEnv ./jest-preload.js --testPathIgnorePatterns "/e2e/"', "test:dev": "jest", watch: "rollup -c --bundleConfigAsCjs -w" }, dependencies: { bufferutil: "^4.0.8", "date-fns": "^2.29.3", debug: "^4.3.4", "utf-8-validate": "^5.0.2", uuid: "^8.3.2" }, devDependencies: { "@jest/globals": "^29.3.1", "@lavamoat/allow-scripts": "^2.3.1", "@metamask/auto-changelog": "3.1.0", "@metamask/eslint-config": "^6.0.0", "@metamask/eslint-config-nodejs": "^6.0.0", "@metamask/eslint-config-typescript": "^6.0.0", "@rollup/plugin-commonjs": "^25.0.0", "@rollup/plugin-json": "^6.0.0", "@rollup/plugin-node-resolve": "^15.0.2", "@rollup/plugin-replace": "^6.0.1", "@rollup/plugin-terser": "^0.4.4", "@size-limit/preset-big-lib": "^11.0.2", "@types/jest": "^29.2.4", "@types/node": "^20.1.3", "@types/uuid": "^9.0.0", "@typescript-eslint/eslint-plugin": "^4.26.0", "@typescript-eslint/parser": "^4.26.0", concurrently: "^9.1.2", "cross-fetch": "^4.0.0", eciesjs: "^0.4.11", eslint: "^7.30.0", "eslint-config-prettier": "^8.3.0", "eslint-plugin-import": "^2.23.4", "eslint-plugin-jest": "^24.4.0", "eslint-plugin-jsdoc": "^36.1.0", "eslint-plugin-node": "^11.1.0", "eslint-plugin-prettier": "^3.4.0", eventemitter2: "^6.4.9", jest: "^29.3.1", prettier: "^2.3.0", rimraf: "^3.0.2", rollup: "^4.26.0", "rollup-plugin-jscc": "^2.0.0", "rollup-plugin-natives": "^0.7.5", "rollup-plugin-node-builtins": "^2.1.2", "rollup-plugin-node-globals": "^1.4.0", "rollup-plugin-peer-deps-external": "^2.2.4", "rollup-plugin-polyfill-node": "^0.13.0", "rollup-plugin-sizes": "^1.0.6", "rollup-plugin-typescript2": "^0.31.2", "rollup-plugin-visualizer": "^5.12.0", "size-limit": "^11.1.6", "socket.io-client": "^4.5.1", "stream-browserify": "^3.0.0", "ts-jest": "^29.0.3", "ts-node": "^10.9.1", typescript: "^5.6.3" }, peerDependencies: { "cross-fetch": "^4.0.0", eciesjs: "*", eventemitter2: "^6.4.9", "readable-stream": "^3.6.2", "socket.io-client": "^4.5.1" }, publishConfig: { access: "public", registry: "https://registry.npmjs.org/" }, lavamoat: { allowScripts: { "@lavamoat/preinstall-always-fail": false, canvas: true, "eciesjs>secp256k1": false, "socket.io-client>engine.io-client>ws>bufferutil": false, "socket.io-client>engine.io-client>ws>utf-8-validate": false, bufferutil: false, "utf-8-validate": false } } };
var ho = "https://metamask-sdk.api.cx.metamask.io/";
var fo = ["websocket"];
var po = 6048e5;
var go = 3e3;
var mo = { METAMASK_GETPROVIDERSTATE: "metamask_getProviderState", ETH_REQUESTACCOUNTS: "eth_requestAccounts" };
function yo(e7) {
  const { context: t2 } = e7;
  io.RemoteCommunication(`[RemoteCommunication: clean()] context=${t2}`), e7.channelConfig = void 0, e7.ready = false, e7.originatorConnectStarted = false;
}
var vo;
var bo;
var wo;
var Eo;
var Co;
var So;
var _o;
(_o = vo || (vo = {})).DISCONNECTED = "disconnected", _o.WAITING = "waiting", _o.TIMEOUT = "timeout", _o.LINKED = "linked", _o.PAUSED = "paused", _o.TERMINATED = "terminated", function(e7) {
  e7.KEY_INFO = "key_info", e7.SERVICE_STATUS = "service_status", e7.PROVIDER_UPDATE = "provider_update", e7.RPC_UPDATE = "rpc_update", e7.KEYS_EXCHANGED = "keys_exchanged", e7.JOIN_CHANNEL = "join_channel", e7.PUBLIC_KEY = "public_key", e7.CHANNEL_CREATED = "channel_created", e7.CLIENTS_CONNECTED = "clients_connected", e7.CLIENTS_DISCONNECTED = "clients_disconnected", e7.CLIENTS_WAITING = "clients_waiting", e7.CLIENTS_READY = "clients_ready", e7.REJECTED = "rejected", e7.WALLET_INIT = "wallet_init", e7.CHANNEL_PERSISTENCE = "channel_persistence", e7.CONFIG = "config", e7.MESSAGE_ACK = "ack", e7.SOCKET_DISCONNECTED = "socket_disconnected", e7.SOCKET_RECONNECT = "socket_reconnect", e7.OTP = "otp", e7.SDK_RPC_CALL = "sdk_rpc_call", e7.AUTHORIZED = "authorized", e7.CONNECTION_STATUS = "connection_status", e7.MESSAGE = "message", e7.TERMINATE = "terminate";
}(bo || (bo = {})), (wo || (wo = {})).KEY_EXCHANGE = "key_exchange", function(e7) {
  e7.KEY_HANDSHAKE_START = "key_handshake_start", e7.KEY_HANDSHAKE_CHECK = "key_handshake_check", e7.KEY_HANDSHAKE_SYN = "key_handshake_SYN", e7.KEY_HANDSHAKE_SYNACK = "key_handshake_SYNACK", e7.KEY_HANDSHAKE_ACK = "key_handshake_ACK", e7.KEY_HANDSHAKE_WALLET = "key_handshake_wallet", e7.KEY_HANDSHAKE_NONE = "none";
}(Eo || (Eo = {}));
var ko = class extends import_eventemitter2.EventEmitter2 {
  constructor({ communicationLayer: e7, otherPublicKey: t2, context: n2, ecies: r2, logging: i }) {
    super(), this.keysExchanged = false, this.step = Eo.KEY_HANDSHAKE_NONE, this.debug = false, this.context = n2, this.communicationLayer = e7, (null == r2 ? void 0 : r2.privateKey) && t2 && (io.KeyExchange(`[KeyExchange: constructor()] otherPubKey=${t2} set keysExchanged to true!`, r2), this.keysExchanged = true), this.myECIES = new lo(Object.assign(Object.assign({}, r2), { debug: null == i ? void 0 : i.eciesLayer })), this.communicationLayer.state.eciesInstance = this.myECIES, this.myPublicKey = this.myECIES.getPublicKey(), this.debug = true === (null == i ? void 0 : i.keyExchangeLayer), t2 && this.setOtherPublicKey(t2), this.communicationLayer.on(wo.KEY_EXCHANGE, this.onKeyExchangeMessage.bind(this));
  }
  onKeyExchangeMessage(e7) {
    const { relayPersistence: t2 } = this.communicationLayer.remote.state;
    if (io.KeyExchange(`[KeyExchange: onKeyExchangeMessage()] context=${this.context} keysExchanged=${this.keysExchanged} relayPersistence=${t2}`, e7), t2) return void io.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Ignoring key exchange message because relay persistence is activated");
    const { message: n2 } = e7;
    this.keysExchanged && io.KeyExchange(`[KeyExchange: onKeyExchangeMessage()] context=${this.context} received handshake while already exchanged. step=${this.step} otherPubKey=${this.otherPublicKey}`), this.emit(bo.KEY_INFO, n2.type), n2.type === Eo.KEY_HANDSHAKE_SYN ? (this.checkStep([Eo.KEY_HANDSHAKE_NONE, Eo.KEY_HANDSHAKE_ACK]), io.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_SYN", n2), n2.pubkey && this.setOtherPublicKey(n2.pubkey), this.communicationLayer.sendMessage({ type: Eo.KEY_HANDSHAKE_SYNACK, pubkey: this.myPublicKey }).catch((e8) => {
      io.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Error sending KEY_HANDSHAKE_SYNACK", e8);
    }), this.setStep(Eo.KEY_HANDSHAKE_ACK)) : n2.type === Eo.KEY_HANDSHAKE_SYNACK ? (this.checkStep([Eo.KEY_HANDSHAKE_SYNACK, Eo.KEY_HANDSHAKE_ACK, Eo.KEY_HANDSHAKE_NONE]), io.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_SYNACK"), n2.pubkey && this.setOtherPublicKey(n2.pubkey), this.communicationLayer.sendMessage({ type: Eo.KEY_HANDSHAKE_ACK }).catch((e8) => {
      io.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Error sending KEY_HANDSHAKE_ACK", e8);
    }), this.keysExchanged = true, this.setStep(Eo.KEY_HANDSHAKE_ACK), this.emit(bo.KEYS_EXCHANGED)) : n2.type === Eo.KEY_HANDSHAKE_ACK && (io.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_ACK set keysExchanged to true!"), this.checkStep([Eo.KEY_HANDSHAKE_ACK, Eo.KEY_HANDSHAKE_NONE]), this.keysExchanged = true, this.setStep(Eo.KEY_HANDSHAKE_ACK), this.emit(bo.KEYS_EXCHANGED));
  }
  resetKeys(e7) {
    this.clean(), this.myECIES = new lo(e7);
  }
  clean() {
    io.KeyExchange(`[KeyExchange: clean()] context=${this.context} reset handshake state`), this.setStep(Eo.KEY_HANDSHAKE_NONE), this.emit(bo.KEY_INFO, this.step), this.keysExchanged = false;
  }
  start({ isOriginator: e7, force: t2 }) {
    const { relayPersistence: n2, protocolVersion: r2 } = this.communicationLayer.remote.state, i = r2 >= 2;
    n2 ? io.KeyExchange("[KeyExchange: start()] Ignoring key exchange message because relay persistence is activated") : (io.KeyExchange(`[KeyExchange: start()] context=${this.context} protocolVersion=${r2} isOriginator=${e7} step=${this.step} force=${t2} relayPersistence=${n2} keysExchanged=${this.keysExchanged}`), e7 ? !(this.keysExchanged || this.step !== Eo.KEY_HANDSHAKE_NONE && this.step !== Eo.KEY_HANDSHAKE_SYNACK) || t2 ? (io.KeyExchange(`[KeyExchange: start()] context=${this.context} -- start key exchange (force=${t2}) -- step=${this.step}`, this.step), this.clean(), this.setStep(Eo.KEY_HANDSHAKE_SYNACK), this.communicationLayer.sendMessage({ type: Eo.KEY_HANDSHAKE_SYN, pubkey: this.myPublicKey, v: 2 }).catch((e8) => {
      io.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_SYN", e8);
    })) : io.KeyExchange(`[KeyExchange: start()] context=${this.context} -- key exchange already ${this.keysExchanged ? "done" : "in progress"} -- aborted.`, this.step) : this.keysExchanged && true !== t2 ? io.KeyExchange("[KeyExchange: start()] don't send KEY_HANDSHAKE_START -- exchange already done.") : i ? this.communicationLayer.sendMessage({ type: Eo.KEY_HANDSHAKE_SYNACK, pubkey: this.myPublicKey, v: 2 }).catch((e8) => {
      io.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_SYNACK", e8);
    }) : (this.communicationLayer.sendMessage({ type: Eo.KEY_HANDSHAKE_START }).catch((e8) => {
      io.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_START", e8);
    }), this.clean()));
  }
  setStep(e7) {
    this.step = e7, this.emit(bo.KEY_INFO, e7);
  }
  checkStep(e7) {
    e7.length > 0 && e7.indexOf(this.step.toString());
  }
  setRelayPersistence({ localKey: e7, otherKey: t2 }) {
    this.otherPublicKey = t2, this.myECIES = new lo({ privateKey: e7, debug: this.debug }), this.keysExchanged = true;
  }
  setKeysExchanged(e7) {
    this.keysExchanged = e7;
  }
  areKeysExchanged() {
    return this.keysExchanged;
  }
  getMyPublicKey() {
    return this.myPublicKey;
  }
  getOtherPublicKey() {
    return this.otherPublicKey;
  }
  setOtherPublicKey(e7) {
    io.KeyExchange("[KeyExchange: setOtherPubKey()]", e7), this.otherPublicKey = e7;
  }
  encryptMessage(e7) {
    if (!this.otherPublicKey) throw new Error("encryptMessage: Keys not exchanged - missing otherPubKey");
    return this.myECIES.encrypt(e7, this.otherPublicKey);
  }
  decryptMessage(e7) {
    if (!this.otherPublicKey) throw new Error("decryptMessage: Keys not exchanged - missing otherPubKey");
    return this.myECIES.decrypt(e7);
  }
  getKeyInfo() {
    return { ecies: Object.assign(Object.assign({}, this.myECIES.getKeyInfo()), { otherPubKey: this.otherPublicKey }), step: this.step, keysExchanged: this.areKeysExchanged() };
  }
  toString() {
    const e7 = { keyInfo: this.getKeyInfo(), keysExchanged: this.keysExchanged, step: this.step };
    return JSON.stringify(e7);
  }
};
!function(e7) {
  e7.TERMINATE = "terminate", e7.ANSWER = "answer", e7.OFFER = "offer", e7.CANDIDATE = "candidate", e7.JSONRPC = "jsonrpc", e7.WALLET_INFO = "wallet_info", e7.WALLET_INIT = "wallet_init", e7.ORIGINATOR_INFO = "originator_info", e7.PAUSE = "pause", e7.OTP = "otp", e7.AUTHORIZED = "authorized", e7.PING = "ping", e7.READY = "ready";
}(Co || (Co = {})), function(e7) {
  e7.REQUEST = "sdk_connect_request_started", e7.REQUEST_MOBILE = "sdk_connect_request_started_mobile", e7.RECONNECT = "sdk_reconnect_request_started", e7.CONNECTED = "sdk_connection_established", e7.CONNECTED_MOBILE = "sdk_connection_established_mobile", e7.AUTHORIZED = "sdk_connection_authorized", e7.REJECTED = "sdk_connection_rejected", e7.TERMINATED = "sdk_connection_terminated", e7.DISCONNECTED = "sdk_disconnected", e7.SDK_USE_EXTENSION = "sdk_use_extension", e7.SDK_RPC_REQUEST = "sdk_rpc_request", e7.SDK_RPC_REQUEST_RECEIVED = "sdk_rpc_request_received", e7.SDK_RPC_REQUEST_DONE = "sdk_rpc_request_done", e7.SDK_EXTENSION_UTILIZED = "sdk_extension_utilized", e7.SDK_USE_INAPP_BROWSER = "sdk_use_inapp_browser";
}(So || (So = {}));
var xo = (e7, t2, n2) => a(void 0, void 0, void 0, function* () {
  var r2, i, o, s, a2, c2;
  const { remote: l2, state: d2 } = e7, { channelId: u2, isOriginator: h2 } = d2;
  if ("error_terminated" === t2) return io.SocketService(`handleJoinChannelResults: Channel ${u2} terminated`), void e7.emit(bo.TERMINATE);
  if (!n2) return void io.SocketService(`handleJoinChannelResults: No result for channel ${u2}`);
  const { persistence: f3, walletKey: p2, rejected: g2 } = n2;
  if (io.SocketService(`handleJoinChannelResults: Channel ${u2} persistence=${f3} walletKey=${p2} rejected=${g2}`), g2) return io.SocketService(`handleJoinChannelResults: Channel ${u2} rejected`), yield e7.remote.disconnect({ terminate: true }), e7.remote.emit(bo.REJECTED, { channelId: u2 }), void e7.remote.emitServiceStatusEvent();
  if (p2 && !(null === (r2 = l2.state.channelConfig) || void 0 === r2 ? void 0 : r2.otherKey)) {
    e7.getKeyExchange().setOtherPublicKey(p2), null === (i = e7.state.keyExchange) || void 0 === i || i.setKeysExchanged(true), l2.state.ready = true, l2.state.authorized = true, l2.emit(bo.AUTHORIZED);
    const { communicationLayer: t3, storageManager: n3 } = l2.state, r3 = Object.assign(Object.assign({}, l2.state.channelConfig), { channelId: null !== (o = l2.state.channelId) && void 0 !== o ? o : "", validUntil: Date.now() + po, localKey: null == t3 ? void 0 : t3.getKeyInfo().ecies.private, otherKey: p2 });
    e7.sendMessage({ type: Eo.KEY_HANDSHAKE_ACK }).catch((e8) => {
    }), null === (s = e7.state.socket) || void 0 === s || s.emit(Co.PING, { id: u2, clientType: h2 ? "dapp" : "wallet", context: "on_channel_reconnect", message: "" }), yield null == n3 ? void 0 : n3.persistChannelConfig(r3), l2.emitServiceStatusEvent(), l2.setConnectionStatus(vo.LINKED);
  }
  f3 && (e7.emit(bo.CHANNEL_PERSISTENCE), null === (a2 = e7.state.keyExchange) || void 0 === a2 || a2.setKeysExchanged(true), l2.state.ready = true, l2.state.authorized = true, l2.emit(bo.AUTHORIZED), co(Object.assign(Object.assign({ id: null != u2 ? u2 : "", event: h2 ? So.CONNECTED : So.CONNECTED_MOBILE }, e7.remote.state.originatorInfo), { sdkVersion: e7.remote.state.sdkVersion, commLayer: e7.state.communicationLayerPreference, commLayerVersion: uo.version, walletVersion: null === (c2 = e7.remote.state.walletInfo) || void 0 === c2 ? void 0 : c2.version }), d2.communicationServerUrl).catch((e8) => {
  }));
});
var Mo = (e7) => new Promise((t2) => {
  setTimeout(t2, e7);
});
var Ao = (e7, t2, ...n2) => a(void 0, [e7, t2, ...n2], void 0, function* (e8, t3, n3 = 200) {
  let r2;
  const i = Date.now();
  let o = false;
  for (; !o; ) {
    if (o = Date.now() - i > 3e5, r2 = t3[e8], void 0 !== r2.elapsedTime) return r2;
    yield Mo(n3);
  }
  throw new Error(`RPC ${e8} timed out`);
});
var Io = (e7) => a(void 0, void 0, void 0, function* () {
  const { state: t2 } = e7, { socket: n2, channelId: r2, context: i, isOriginator: o, isReconnecting: s } = t2;
  if (s) return io.SocketService("[SocketService: reconnectSocket()] Reconnection already in progress, skipping", e7), false;
  if (!n2) return io.SocketService("[SocketService: reconnectSocket()] socket is not defined", e7), false;
  if (!r2) return false;
  const { connected: c2 } = n2;
  t2.isReconnecting = true, t2.reconnectionAttempts = 0, io.SocketService(`[SocketService: reconnectSocket()] connected=${c2} trying to reconnect after socketio disconnection`, e7);
  try {
    for (; 3 > t2.reconnectionAttempts; ) {
      if (io.SocketService(`[SocketService: reconnectSocket()] Attempt ${t2.reconnectionAttempts + 1} of 3`, e7), yield Mo(200), n2.connected) return io.SocketService("Socket already connected --- ping to retrieve messages"), n2.emit(Co.PING, { id: r2, clientType: o ? "dapp" : "wallet", context: "on_channel_config", message: "" }), true;
      t2.resumed = true, n2.connect(), e7.emit(bo.SOCKET_RECONNECT);
      try {
        if (yield new Promise((t3, s2) => {
          n2.emit(bo.JOIN_CHANNEL, { channelId: r2, context: `${i}connect_again`, clientType: o ? "dapp" : "wallet" }, (n3, r3) => a(void 0, void 0, void 0, function* () {
            try {
              yield xo(e7, n3, r3), t3();
            } catch (e8) {
              s2(e8);
            }
          }));
        }), yield Mo(100), n2.connected) return io.SocketService(`Reconnection successful on attempt ${t2.reconnectionAttempts + 1}`), true;
      } catch (e8) {
        io.SocketService(`Error during reconnection attempt ${t2.reconnectionAttempts + 1}:`, e8);
      }
      t2.reconnectionAttempts += 1, 3 > t2.reconnectionAttempts && (yield Mo(200));
    }
    return io.SocketService("Failed to reconnect after 3 attempts"), false;
  } finally {
    t2.isReconnecting = false, t2.reconnectionAttempts = 0;
  }
});
function Ro(e7, t2) {
  return a(this, void 0, void 0, function* () {
    var n2;
    const r2 = null === (n2 = e7.state.keyExchange) || void 0 === n2 ? void 0 : n2.encryptMessage(JSON.stringify(t2)), i = { id: e7.state.channelId, context: e7.state.context, clientType: e7.state.isOriginator ? "dapp" : "wallet", message: r2, plaintext: e7.state.hasPlaintext ? JSON.stringify(t2) : void 0 };
    return io.SocketService(`[SocketService: encryptAndSendMessage()] context=${e7.state.context}`, i), t2.type === Co.TERMINATE && (e7.state.manualDisconnect = true), new Promise((t3, n3) => {
      var r3;
      null === (r3 = e7.state.socket) || void 0 === r3 || r3.emit(bo.MESSAGE, i, (e8, r4) => {
        var i2;
        e8 && (io.SocketService(`[SocketService: encryptAndSendMessage()] error=${e8}`), n3(e8)), io.SocketService("[encryptAndSendMessage] response", r4), t3(null !== (i2 = null == r4 ? void 0 : r4.success) && void 0 !== i2 && i2);
      });
    });
  });
}
var Po;
!function(e7) {
  e7.RPC_CHECK = "rpcCheck", e7.SKIPPED_RPC = "skippedRpc";
}(Po || (Po = {}));
var Lo = ["eth_sendTransaction", "eth_signTypedData", "eth_signTransaction", "personal_sign", "wallet_requestPermissions", "wallet_switchEthereumChain", "eth_signTypedData_v3", "eth_signTypedData_v4", "metamask_connectSign", "metamask_connectWith", "metamask_batch"].map((e7) => e7.toLowerCase());
var Oo = [{ event: bo.CLIENTS_CONNECTED, handler: function(e7, t2) {
  return (n2) => a(this, void 0, void 0, function* () {
    var n3, r2, i, o, s, a2, c2, l2, d2, u2, h2;
    const f3 = null !== (r2 = null === (n3 = e7.remote.state.channelConfig) || void 0 === n3 ? void 0 : n3.relayPersistence) && void 0 !== r2 && r2;
    if (io.SocketService(`[SocketService: handleClientsConnected()] context=${e7.state.context} on 'clients_connected-${t2}' relayPersistence=${f3} resumed=${e7.state.resumed}  clientsPaused=${e7.state.clientsPaused} keysExchanged=${null === (i = e7.state.keyExchange) || void 0 === i ? void 0 : i.areKeysExchanged()} isOriginator=${e7.state.isOriginator}`), e7.emit(bo.CLIENTS_CONNECTED, { isOriginator: e7.state.isOriginator, keysExchanged: null === (o = e7.state.keyExchange) || void 0 === o ? void 0 : o.areKeysExchanged(), context: e7.state.context }), e7.state.resumed) e7.state.isOriginator || (io.SocketService(`[SocketService: handleClientsConnected()] context=${e7.state.context} 'clients_connected' / keysExchanged=${null === (s = e7.state.keyExchange) || void 0 === s ? void 0 : s.areKeysExchanged()} -- backward compatibility`), null === (a2 = e7.state.keyExchange) || void 0 === a2 || a2.start({ isOriginator: null !== (c2 = e7.state.isOriginator) && void 0 !== c2 && c2 })), e7.state.resumed = false;
    else if (e7.state.clientsPaused) io.SocketService("[SocketService: handleClientsConnected()] 'clients_connected' skip sending originatorInfo on pause");
    else if (!e7.state.isOriginator) {
      const t3 = !f3;
      io.SocketService(`[SocketService: handleClientsConnected()] context=${e7.state.context} on 'clients_connected' / keysExchanged=${null === (l2 = e7.state.keyExchange) || void 0 === l2 ? void 0 : l2.areKeysExchanged()} -- force=${t3} -- backward compatibility`), io.SocketService(`[SocketService: handleClientsConnected()] context=${e7.state.context} on 'clients_connected' / keysExchanged=${null === (d2 = e7.state.keyExchange) || void 0 === d2 ? void 0 : d2.areKeysExchanged()} -- force=${t3} -- backward compatibility`), null === (u2 = e7.state.keyExchange) || void 0 === u2 || u2.start({ isOriginator: null !== (h2 = e7.state.isOriginator) && void 0 !== h2 && h2, force: t3 });
    }
    e7.state.clientsConnected = true, e7.state.clientsPaused = false;
  });
} }, { event: bo.CHANNEL_CREATED, handler: function(e7, t2) {
  return (n2) => {
    io.SocketService(`[SocketService: handleChannelCreated()] context=${e7.state.context} on 'channel_created-${t2}'`, n2), e7.emit(bo.CHANNEL_CREATED, n2);
  };
} }, { event: bo.CLIENTS_DISCONNECTED, handler: function(e7, t2) {
  return () => {
    var n2;
    e7.state.clientsConnected = false, io.SocketService(`[SocketService: handlesClientsDisconnected()] context=${e7.state.context} on 'clients_disconnected-${t2}'`), e7.remote.state.relayPersistence ? io.SocketService(`[SocketService: handlesClientsDisconnected()] context=${e7.state.context} on 'clients_disconnected-${t2}' - relayPersistence enabled, skipping key exchange cleanup.`) : (e7.state.isOriginator && !e7.state.clientsPaused && (null === (n2 = e7.state.keyExchange) || void 0 === n2 || n2.clean()), e7.emit(bo.CLIENTS_DISCONNECTED, t2));
  };
} }, { event: bo.CONFIG, handler: function(e7, t2) {
  return (n2) => a(this, void 0, void 0, function* () {
    var r2, i, o;
    io.SocketService(`[SocketService: handleChannelConfig()] update relayPersistence on 'config-${t2}'`, n2);
    const { persistence: s, walletKey: a2 } = n2;
    e7.state.isOriginator && e7.remote.state.channelConfig ? (n2.walletKey && !e7.remote.state.channelConfig.otherKey && (io.SocketService(`Setting wallet key ${a2}`), e7.remote.state.channelConfig.otherKey = a2, e7.getKeyExchange().setOtherPublicKey(n2.walletKey), null === (r2 = e7.state.keyExchange) || void 0 === r2 || r2.setKeysExchanged(true), yield e7.remote.sendMessage({ type: Eo.KEY_HANDSHAKE_ACK }), yield e7.remote.sendMessage({ type: Co.PING }), yield null === (i = e7.remote.state.storageManager) || void 0 === i ? void 0 : i.persistChannelConfig(e7.remote.state.channelConfig)), true !== s || e7.remote.state.channelConfig.relayPersistence || (io.SocketService(`Setting relay persistence ${s}`), e7.remote.state.channelConfig.relayPersistence = s, e7.remote.state.relayPersistence = true, e7.remote.emit(bo.CHANNEL_PERSISTENCE), e7.remote.state.authorized = true, e7.remote.state.ready = true, e7.remote.emit(bo.AUTHORIZED), yield null === (o = e7.remote.state.storageManager) || void 0 === o ? void 0 : o.persistChannelConfig(e7.remote.state.channelConfig))) : e7.state.isOriginator || n2.persistence && (e7.remote.state.relayPersistence = true, e7.remote.emit(bo.CHANNEL_PERSISTENCE));
  });
} }, { event: bo.MESSAGE, handler: function(e7, t2) {
  return (n2) => {
    var r2, i, o, s, a2, c2, l2, d2, u2, h2, f3, p2, g2, m2, y2, v2, b2, w2;
    const { ackId: E2, message: C2, error: S2 } = n2, _2 = null !== (r2 = e7.remote.state.relayPersistence) && void 0 !== r2 && r2;
    if (io.SocketService(`[SocketService handleMessage()]  relayPersistence=${_2}  context=${e7.state.context} on 'message' ${t2} keysExchanged=${null === (i = e7.state.keyExchange) || void 0 === i ? void 0 : i.areKeysExchanged()}`, n2), S2) throw io.SocketService(`
      [SocketService handleMessage()] context=${e7.state.context}::on 'message' error=${S2}`), new Error(S2);
    const k2 = "string" == typeof C2;
    if (!k2 && (null == C2 ? void 0 : C2.type) === Eo.KEY_HANDSHAKE_START) {
      if (_2) return;
      return io.SocketService(`[SocketService handleMessage()] context=${e7.state.context}::on 'message' received HANDSHAKE_START isOriginator=${e7.state.isOriginator}`, C2), void (null === (o = e7.state.keyExchange) || void 0 === o || o.start({ isOriginator: null !== (s = e7.state.isOriginator) && void 0 !== s && s, force: true }));
    }
    if (!k2 && (null === (a2 = null == C2 ? void 0 : C2.type) || void 0 === a2 ? void 0 : a2.startsWith("key_handshake"))) {
      if (_2) return;
      return io.SocketService(`[SocketService handleMessage()] context=${e7.state.context}::on 'message' emit KEY_EXCHANGE`, C2), void e7.emit(wo.KEY_EXCHANGE, { message: C2, context: e7.state.context });
    }
    if (k2 && !(null === (c2 = e7.state.keyExchange) || void 0 === c2 ? void 0 : c2.areKeysExchanged())) {
      let t3 = false;
      try {
        io.SocketService(`[SocketService handleMessage()] context=${e7.state.context}::on 'message' trying to decrypt message`), null === (l2 = e7.state.keyExchange) || void 0 === l2 || l2.decryptMessage(C2), t3 = true;
      } catch (t4) {
        io.SocketService(`[SocketService handleMessage()] context=${e7.state.context}::on 'message' error`, t4);
      }
      if (!t3) return e7.state.isOriginator ? null === (u2 = e7.state.keyExchange) || void 0 === u2 || u2.start({ isOriginator: null !== (h2 = e7.state.isOriginator) && void 0 !== h2 && h2 }) : e7.sendMessage({ type: Eo.KEY_HANDSHAKE_START }).catch((e8) => {
      }), void io.SocketService(`Message ignored because invalid key exchange status. step=${null === (f3 = e7.state.keyExchange) || void 0 === f3 ? void 0 : f3.getKeyInfo().step}`, null === (p2 = e7.state.keyExchange) || void 0 === p2 ? void 0 : p2.getKeyInfo(), C2);
      io.SocketService("Invalid key exchange status detected --- updating it."), null === (d2 = e7.state.keyExchange) || void 0 === d2 || d2.setKeysExchanged(true);
    } else if (!k2 && (null == C2 ? void 0 : C2.type)) return void e7.emit(bo.MESSAGE, C2);
    if (!k2) return void e7.emit(bo.MESSAGE, C2);
    const x2 = null === (g2 = e7.state.keyExchange) || void 0 === g2 ? void 0 : g2.decryptMessage(C2), M2 = JSON.parse(null != x2 ? x2 : "{}");
    if (E2 && (null == E2 ? void 0 : E2.length) > 0 && (io.SocketService(`[SocketService handleMessage()] context=${e7.state.context}::on 'message' ackid=${E2} channelId=${t2}`), null === (m2 = e7.state.socket) || void 0 === m2 || m2.emit(bo.MESSAGE_ACK, { ackId: E2, channelId: t2, clientType: e7.state.isOriginator ? "dapp" : "wallet" })), e7.state.clientsPaused = (null == M2 ? void 0 : M2.type) === Co.PAUSE, e7.state.isOriginator && M2.data) {
      const t3 = M2.data, n3 = e7.state.rpcMethodTracker[t3.id];
      if (n3) {
        const r3 = Date.now() - n3.timestamp;
        io.SocketService(`[SocketService handleMessage()] context=${e7.state.context}::on 'message' received answer for id=${t3.id} method=${n3.method} responseTime=${r3}`, M2), e7.remote.state.analytics && Lo.includes(n3.method.toLowerCase()) && co(Object.assign(Object.assign({ id: null !== (y2 = e7.remote.state.channelId) && void 0 !== y2 ? y2 : "", event: So.SDK_RPC_REQUEST_DONE, sdkVersion: e7.remote.state.sdkVersion, commLayerVersion: uo.version }, e7.remote.state.originatorInfo), { walletVersion: null === (v2 = e7.remote.state.walletInfo) || void 0 === v2 ? void 0 : v2.version, params: { method: n3.method, from: "mobile" } }), e7.remote.state.communicationServerUrl).catch((e8) => {
        });
        const i2 = Object.assign(Object.assign({}, n3), { result: t3.result, error: t3.error ? { code: null === (b2 = t3.error) || void 0 === b2 ? void 0 : b2.code, message: null === (w2 = t3.error) || void 0 === w2 ? void 0 : w2.message } : void 0, elapsedTime: r3 });
        e7.state.rpcMethodTracker[t3.id] = i2, e7.emit(bo.RPC_UPDATE, i2);
      }
    }
    e7.emit(bo.MESSAGE, { message: M2 });
  };
} }, { event: bo.REJECTED, handler: function(e7, t2) {
  return (n2) => a(this, void 0, void 0, function* () {
    var n3;
    e7.state.isOriginator && !e7.remote.state.ready ? (io.SocketService(`[SocketService: handleChannelRejected()] context=${e7.state.context} channelId=${t2} isOriginator=${e7.state.isOriginator} ready=${e7.remote.state.ready}`, e7.remote.state.originatorInfo), co(Object.assign(Object.assign({ id: t2, event: So.REJECTED }, e7.remote.state.originatorInfo), { sdkVersion: e7.remote.state.sdkVersion, commLayer: e7.state.communicationLayerPreference, commLayerVersion: uo.version, walletVersion: null === (n3 = e7.remote.state.walletInfo) || void 0 === n3 ? void 0 : n3.version }), e7.remote.state.communicationServerUrl).catch((e8) => {
    }), yield e7.remote.disconnect({ terminate: true }), e7.remote.emit(bo.REJECTED, { channelId: t2 }), e7.remote.setConnectionStatus(vo.DISCONNECTED)) : io.SocketService(`[SocketService: handleChannelRejected()] SKIP -- channelId=${t2} isOriginator=${e7.state.isOriginator} ready=${e7.remote.state.ready}`);
  });
} }, { event: "clients_waiting_to_join", handler: function(e7, t2) {
  return (n2) => {
    io.SocketService(`[SocketService: handleClientsWaitingToJoin()] context=${e7.state.context} on 'clients_waiting_to_join-${t2}'`, n2), e7.emit(bo.CLIENTS_WAITING, n2);
  };
} }];
var To = [{ event: bo.KEY_INFO, handler: function(e7) {
  return (t2) => {
    io.SocketService("[SocketService: handleKeyInfo()] on 'KEY_INFO'", t2), e7.emit(bo.KEY_INFO, t2);
  };
} }, { event: bo.KEYS_EXCHANGED, handler: function(e7) {
  return () => {
    var t2, n2, r2;
    io.SocketService(`[SocketService: handleKeysExchanged()] on 'keys_exchanged' keyschanged=${null === (t2 = e7.state.keyExchange) || void 0 === t2 ? void 0 : t2.areKeysExchanged()}`);
    const { channelConfig: i } = e7.remote.state;
    if (i) {
      const t3 = e7.getKeyExchange().getKeyInfo().ecies;
      i.localKey = t3.private, i.otherKey = t3.otherPubKey, e7.remote.state.channelConfig = i, null === (n2 = e7.remote.state.storageManager) || void 0 === n2 || n2.persistChannelConfig(i).catch((e8) => {
      });
    }
    e7.emit(bo.KEYS_EXCHANGED, { keysExchanged: null === (r2 = e7.state.keyExchange) || void 0 === r2 ? void 0 : r2.areKeysExchanged(), isOriginator: e7.state.isOriginator });
    const o = { keyInfo: e7.getKeyInfo() };
    e7.emit(bo.SERVICE_STATUS, o);
  };
} }];
function No(e7, t2) {
  io.SocketService(`[SocketService: setupChannelListener()] context=${e7.state.context} setting socket listeners for channel ${t2}...`);
  const { socket: n2 } = e7.state, { keyExchange: r2 } = e7.state;
  n2 && e7.state.isOriginator && (e7.state.debug && (null == n2 || n2.io.on("error", (t3) => {
    io.SocketService(`[SocketService: setupChannelListener()] context=${e7.state.context} socket event=error`, t3);
  }), null == n2 || n2.io.on("reconnect", (t3) => {
    io.SocketService(`[SocketService: setupChannelListener()] context=${e7.state.context} socket event=reconnect`, t3), Io(e7).catch((e8) => {
    });
  }), null == n2 || n2.io.on("reconnect_error", (t3) => {
    io.SocketService(`[SocketService: setupChannelListener()] context=${e7.state.context} socket event=reconnect_error`, t3);
  }), null == n2 || n2.io.on("reconnect_failed", () => {
    io.SocketService(`[SocketService: setupChannelListener()] context=${e7.state.context} socket event=reconnect_failed`);
  })), null == n2 || n2.on("disconnect", (t3) => (io.SocketService(`[SocketService: setupChannelListener()] on 'disconnect' -- MetaMaskSDK socket disconnected '${t3}' begin recovery...`), (/* @__PURE__ */ function(e8) {
    return (t4) => {
      io.SocketService(`[SocketService: handleDisconnect()] on 'disconnect' manualDisconnect=${e8.state.manualDisconnect}`, t4), e8.state.manualDisconnect || (e8.emit(bo.SOCKET_DISCONNECTED), Io(e8).catch((e9) => {
      }));
    };
  }(e7))(t3)))), Oo.forEach(({ event: r3, handler: i }) => {
    null == n2 || n2.on(`${r3}-${t2}`, i(e7, t2));
  }), To.forEach(({ event: t3, handler: n3 }) => {
    null == r2 || r2.on(t3, n3(e7));
  }), e7.state.setupChannelListeners = true;
}
var Do = class extends import_eventemitter2.EventEmitter2 {
  constructor(e7) {
    super(), this.state = { clientsConnected: false, clientsPaused: false, manualDisconnect: false, lastRpcId: void 0, rpcMethodTracker: {}, hasPlaintext: false, communicationServerUrl: "", focusListenerAdded: false, removeFocusListener: void 0, isReconnecting: false, reconnectionAttempts: 0 }, this.options = e7;
    const { reconnect: n2, communicationLayerPreference: r2, communicationServerUrl: i, context: o, remote: s, logging: a2 } = e7;
    this.state.resumed = n2, this.state.context = o, this.state.isOriginator = s.state.isOriginator, this.state.communicationLayerPreference = r2, this.state.debug = true === (null == a2 ? void 0 : a2.serviceLayer), this.remote = s, true === (null == a2 ? void 0 : a2.serviceLayer) && import_debug.default.enable("SocketService:Layer"), this.state.communicationServerUrl = i, this.state.hasPlaintext = this.state.communicationServerUrl !== ho && true === (null == a2 ? void 0 : a2.plaintext), io.SocketService(`[SocketService: constructor()] Socket IO url: ${this.state.communicationServerUrl}`), this.initSocket();
  }
  initSocket() {
    var e7;
    const { otherPublicKey: t2, ecies: n2, logging: r2 } = this.options, i = { autoConnect: false, transports: fo, withCredentials: true }, o = this.state.communicationServerUrl;
    io.SocketService(`[SocketService: initSocket()] Socket IO url: ${o}`), this.state.socket = lookup2(o, i), function(e8) {
      if ("undefined" != typeof window && "undefined" != typeof document && (io.SocketService(`[SocketService: setupSocketFocusListener()] hasFocus=${document.hasFocus()}`, e8), !e8.state.focusListenerAdded)) {
        const t3 = () => {
          io.SocketService("Document has focus --- reconnecting socket"), Io(e8).catch((e9) => {
          });
        };
        window.addEventListener("focus", t3), e8.state.focusListenerAdded = true, e8.state.removeFocusListener = () => {
          window.removeEventListener("focus", t3), e8.state.focusListenerAdded = false;
        };
      }
    }(this);
    const a2 = { communicationLayer: this, otherPublicKey: t2, sendPublicKey: false, context: null !== (e7 = this.state.context) && void 0 !== e7 ? e7 : "", ecies: n2, logging: r2 };
    this.state.keyExchange = new ko(a2);
  }
  resetKeys() {
    return io.SocketService("[SocketService: resetKeys()] Resetting keys."), void (null === (e7 = this.state.keyExchange) || void 0 === e7 || e7.resetKeys());
    var e7;
  }
  createChannel() {
    return a(this, void 0, void 0, function* () {
      return function(e7) {
        return a(this, void 0, void 0, function* () {
          var t2, n2, r2;
          if (io.SocketService(`[SocketService: createChannel()] context=${e7.state.context}`), e7.state.socket || e7.initSocket(), null === (t2 = e7.state.socket) || void 0 === t2 ? void 0 : t2.connected) throw new Error("socket already connected");
          null === (n2 = e7.state.socket) || void 0 === n2 || n2.connect(), e7.state.manualDisconnect = false, e7.state.isOriginator = true;
          const i = v4_default();
          e7.state.channelId = i, No(e7, i), yield new Promise((t3, n3) => {
            var r3;
            null === (r3 = e7.state.socket) || void 0 === r3 || r3.emit(bo.JOIN_CHANNEL, { channelId: i, context: `${e7.state.context}createChannel`, clientType: "dapp" }, (r4, i2) => a(this, void 0, void 0, function* () {
              try {
                yield xo(e7, r4, i2), t3();
              } catch (e8) {
                n3(e8);
              }
            }));
          });
          const s = null === (r2 = e7.state.keyExchange) || void 0 === r2 ? void 0 : r2.getKeyInfo();
          return { channelId: i, pubKey: (null == s ? void 0 : s.ecies.public) || "", privKey: (null == s ? void 0 : s.ecies.private) || "" };
        });
      }(this);
    });
  }
  connectToChannel({ channelId: e7, withKeyExchange: t2 = false, authorized: n2 }) {
    return function(e8) {
      return a(this, arguments, void 0, function* ({ options: e9, instance: t3 }) {
        const { channelId: n3, authorized: r2, withKeyExchange: i } = e9, { state: o, remote: s } = t3, { isOriginator: c2 = false, socket: l2, keyExchange: d2 } = o, { channelConfig: u2 } = s.state;
        if (null == l2 ? void 0 : l2.connected) throw new Error("socket already connected");
        if (c2 && (null == u2 ? void 0 : u2.relayPersistence)) {
          const { localKey: e10, otherKey: t4 } = u2;
          e10 && t4 && (null == d2 || d2.setRelayPersistence({ localKey: e10, otherKey: t4 }));
        }
        return Object.assign(o, { manualDisconnect: false, withKeyExchange: i, isOriginator: c2, channelId: n3 }), null == l2 || l2.connect(), No(t3, n3), !c2 && r2 && (null == d2 || d2.setKeysExchanged(true), Object.assign(s.state, { ready: true, authorized: true })), new Promise((e10) => {
          var i2;
          const s2 = null === (i2 = null == d2 ? void 0 : d2.getKeyInfo()) || void 0 === i2 ? void 0 : i2.ecies.public;
          null == l2 || l2.emit(bo.JOIN_CHANNEL, { channelId: n3, context: `${o.context}_connectToChannel`, clientType: c2 ? "dapp" : "wallet", publicKey: r2 && !c2 ? s2 : void 0 }, (n4, r3) => a(this, void 0, void 0, function* () {
            yield xo(t3, n4, r3), e10();
          }));
        });
      });
    }({ options: { channelId: e7, withKeyExchange: t2, authorized: n2 }, instance: this });
  }
  getKeyInfo() {
    return this.state.keyExchange.getKeyInfo();
  }
  keyCheck() {
    var e7, t2;
    null === (t2 = (e7 = this).state.socket) || void 0 === t2 || t2.emit(bo.MESSAGE, { id: e7.state.channelId, context: e7.state.context, message: { type: Eo.KEY_HANDSHAKE_CHECK, pubkey: e7.getKeyInfo().ecies.otherPubKey } });
  }
  getKeyExchange() {
    return this.state.keyExchange;
  }
  sendMessage(e7) {
    return a(this, void 0, void 0, function* () {
      return function(e8, t2) {
        return a(this, void 0, void 0, function* () {
          var n2, r2, i;
          if (!e8.state.channelId) throw io.SocketService("handleSendMessage: no channelId - Create a channel first"), new Error("Create a channel first");
          if (io.SocketService(`[SocketService: handleSendMessage()] context=${e8.state.context} areKeysExchanged=${null === (n2 = e8.state.keyExchange) || void 0 === n2 ? void 0 : n2.areKeysExchanged()}`, t2), null === (r2 = null == t2 ? void 0 : t2.type) || void 0 === r2 ? void 0 : r2.startsWith("key_handshake")) return function(e9, t3) {
            var n3;
            io.SocketService(`[SocketService: handleKeyHandshake()] context=${e9.state.context}`, t3), null === (n3 = e9.state.socket) || void 0 === n3 || n3.emit(bo.MESSAGE, { id: e9.state.channelId, context: e9.state.context, clientType: e9.state.isOriginator ? "dapp" : "wallet", message: t3 });
          }(e8, t2), true;
          !function(e9, t3) {
            var n3;
            if (!(null === (n3 = e9.state.keyExchange) || void 0 === n3 ? void 0 : n3.areKeysExchanged()) && !e9.remote.state.relayPersistence) throw io.SocketService(`[SocketService: validateKeyExchange()] context=${e9.state.context} ERROR keys not exchanged`, t3), new Error("Keys not exchanged BBB");
          }(e8, t2), function(e9, t3) {
            var n3;
            const r3 = null !== (n3 = null == t3 ? void 0 : t3.method) && void 0 !== n3 ? n3 : "", i2 = null == t3 ? void 0 : t3.id;
            e9.state.isOriginator && i2 && (e9.state.rpcMethodTracker[i2] = { id: i2, timestamp: Date.now(), method: r3 }, e9.emit(bo.RPC_UPDATE, e9.state.rpcMethodTracker[i2]));
          }(e8, t2);
          const o = yield Ro(e8, t2);
          return e8.remote.state.analytics && e8.remote.state.isOriginator && t2.method && Lo.includes(t2.method.toLowerCase()) && co({ id: null !== (i = e8.remote.state.channelId) && void 0 !== i ? i : "", event: So.SDK_RPC_REQUEST, params: { method: t2.method, from: "mobile" } }, e8.remote.state.communicationServerUrl).catch((e9) => {
          }), function(e9, t3) {
            return a(this, void 0, void 0, function* () {
              var n3;
              const r3 = null == t3 ? void 0 : t3.id, i2 = null !== (n3 = null == t3 ? void 0 : t3.method) && void 0 !== n3 ? n3 : "";
              if (e9.state.isOriginator && r3) try {
                const n4 = Ao(r3, e9.state.rpcMethodTracker, 200).then((e10) => ({ type: Po.RPC_CHECK, result: e10 })), o2 = (() => a(this, void 0, void 0, function* () {
                  const t4 = yield ((e10) => a(void 0, [e10], void 0, function* ({ rpcId: e11, instance: t5 }) {
                    for (; t5.state.lastRpcId === e11 || void 0 === t5.state.lastRpcId; ) yield Mo(200);
                    return t5.state.lastRpcId;
                  }))({ instance: e9, rpcId: r3 }), n5 = yield Ao(t4, e9.state.rpcMethodTracker, 200);
                  return { type: Po.SKIPPED_RPC, result: n5 };
                }))(), s = yield Promise.race([n4, o2]);
                if (s.type === Po.RPC_CHECK) {
                  const e10 = s.result;
                  io.SocketService(`[SocketService:handleRpcReplies()] id=${t3.id} ${i2} ( ${e10.elapsedTime} ms)`, e10.result);
                } else {
                  if (s.type !== Po.SKIPPED_RPC) throw new Error(`Error handling RPC replies for ${r3}`);
                  {
                    const t4 = Object.assign(Object.assign({}, e9.state.rpcMethodTracker[r3]), { error: new Error("SDK_CONNECTION_ISSUE") });
                    e9.emit(bo.RPC_UPDATE, t4);
                    const n5 = { data: Object.assign(Object.assign({}, t4), { jsonrpc: "2.0" }), name: "metamask-provider" };
                    e9.emit(bo.MESSAGE, { message: n5 });
                  }
                }
              } catch (e10) {
                throw e10;
              }
            });
          }(e8, t2).catch((e9) => {
          }), o;
        });
      }(this, e7);
    });
  }
  ping() {
    return function(e7) {
      return a(this, void 0, void 0, function* () {
        var t2, n2;
        io.SocketService(`[SocketService: ping()] context=${e7.state.context} originator=${e7.state.isOriginator} keysExchanged=${null === (t2 = e7.state.keyExchange) || void 0 === t2 ? void 0 : t2.areKeysExchanged()}`), null === (n2 = e7.state.socket) || void 0 === n2 || n2.emit(Co.PING, { id: e7.state.channelId, context: "ping", clientType: e7.remote.state.isOriginator ? "dapp" : "wallet", message: "" });
      });
    }(this);
  }
  pause() {
    return function(e7) {
      return a(this, void 0, void 0, function* () {
        var t2, n2;
        io.SocketService(`[SocketService: pause()] context=${e7.state.context}`), e7.state.manualDisconnect = true, (null === (t2 = e7.state.keyExchange) || void 0 === t2 ? void 0 : t2.areKeysExchanged()) && (yield e7.sendMessage({ type: Co.PAUSE })), null === (n2 = e7.state.socket) || void 0 === n2 || n2.disconnect();
      });
    }(this);
  }
  isConnected() {
    var e7;
    return null === (e7 = this.state.socket) || void 0 === e7 ? void 0 : e7.connected;
  }
  resume() {
    return function(e7) {
      return a(this, void 0, void 0, function* () {
        const { state: t2, remote: n2 } = e7, { socket: r2, channelId: i, context: o, keyExchange: s, isOriginator: c2 } = t2, { isOriginator: l2 } = n2.state;
        if (io.SocketService(`[SocketService: resume()] channelId=${i} context=${o} connected=${null == r2 ? void 0 : r2.connected} manualDisconnect=${t2.manualDisconnect} resumed=${t2.resumed} keysExchanged=${null == s ? void 0 : s.areKeysExchanged()}`), !i) throw io.SocketService("[SocketService: resume()] channelId is not defined"), new Error("ChannelId is not defined");
        (null == r2 ? void 0 : r2.connected) ? (io.SocketService("[SocketService: resume()] already connected."), r2.emit(Co.PING, { id: i, clientType: l2 ? "dapp" : "wallet", context: "on_channel_config", message: "" }), n2.hasRelayPersistence() || (null == s ? void 0 : s.areKeysExchanged()) || (c2 ? yield e7.sendMessage({ type: Co.READY }) : null == s || s.start({ isOriginator: false }))) : (null == r2 || r2.connect(), io.SocketService(`[SocketService: resume()] after connecting socket --> connected=${null == r2 ? void 0 : r2.connected}`), null == r2 || r2.emit(bo.JOIN_CHANNEL, { channelId: i, context: `${o}_resume`, clientType: l2 ? "dapp" : "wallet" }, (t3, n3) => a(this, void 0, void 0, function* () {
          try {
            yield xo(e7, t3, n3);
          } catch (e8) {
          }
        }))), t2.manualDisconnect = false, t2.resumed = true;
      });
    }(this);
  }
  getRPCMethodTracker() {
    return this.state.rpcMethodTracker;
  }
  disconnect(e7) {
    return function(e8, t2) {
      var n2, r2, i, o, s;
      io.SocketService(`[SocketService: disconnect()] context=${e8.state.context}`, t2), (null == t2 ? void 0 : t2.terminate) && (null === (r2 = (n2 = e8.state).removeFocusListener) || void 0 === r2 || r2.call(n2), e8.state.channelId = t2.channelId, null === (i = e8.state.socket) || void 0 === i || i.removeAllListeners(), null === (o = e8.state.keyExchange) || void 0 === o || o.clean(), e8.remote.state.ready = false, e8.state.socket = void 0, e8.state.rpcMethodTracker = {}), e8.state.manualDisconnect = true, null === (s = e8.state.socket) || void 0 === s || s.disconnect();
    }(this, e7);
  }
};
var $o;
var Bo;
var Ko;
function jo(e7) {
  return () => a(this, void 0, void 0, function* () {
    var t2, n2, r2;
    const { state: i } = e7;
    if (i.authorized) return;
    yield (() => a(this, void 0, void 0, function* () {
      for (; !i.walletInfo; ) yield Mo(500);
    }))();
    const o = "7.3".localeCompare((null === (t2 = i.walletInfo) || void 0 === t2 ? void 0 : t2.version) || "");
    if (io.RemoteCommunication(`[RemoteCommunication: handleAuthorizedEvent()] HACK 'authorized' version=${null === (n2 = i.walletInfo) || void 0 === n2 ? void 0 : n2.version} compareValue=${o}`), 1 !== o) return;
    const s = i.platformType === Bo.MobileWeb || i.platformType === Bo.ReactNative || i.platformType === Bo.MetaMaskMobileWebview;
    io.RemoteCommunication(`[RemoteCommunication: handleAuthorizedEvent()] HACK 'authorized' platform=${i.platformType} secure=${s} channel=${i.channelId} walletVersion=${null === (r2 = i.walletInfo) || void 0 === r2 ? void 0 : r2.version}`), s && (i.authorized = true, e7.emit(bo.AUTHORIZED));
  });
}
function Uo(e7) {
  return (t2) => {
    const { state: n2 } = e7;
    io.RemoteCommunication(`[RemoteCommunication: handleChannelCreatedEvent()] context=${n2.context} on 'channel_created' channelId=${t2}`), e7.emit(bo.CHANNEL_CREATED, t2);
  };
}
function Ho(e7, t2) {
  return () => {
    var n2, r2, i, o;
    const { state: s } = e7;
    io.RemoteCommunication(`[RemoteCommunication: handleClientsConnectedEvent()] on 'clients_connected' channel=${s.channelId} keysExchanged=${null === (r2 = null === (n2 = s.communicationLayer) || void 0 === n2 ? void 0 : n2.getKeyInfo()) || void 0 === r2 ? void 0 : r2.keysExchanged}`), s.analytics && co(Object.assign(Object.assign({ id: null !== (i = s.channelId) && void 0 !== i ? i : "", event: s.reconnection ? So.RECONNECT : s.isOriginator ? So.REQUEST : So.REQUEST_MOBILE }, s.originatorInfo), { commLayer: t2, sdkVersion: s.sdkVersion, walletVersion: null === (o = s.walletInfo) || void 0 === o ? void 0 : o.version, commLayerVersion: uo.version }), s.communicationServerUrl).catch((e8) => {
    }), s.clientsConnected = true, s.originatorInfoSent = false, e7.emit(bo.CLIENTS_CONNECTED);
  };
}
function Fo(e7) {
  return (t2) => {
    const { state: n2 } = e7;
    io.RemoteCommunication(`[RemoteCommunication: handleClientsDisconnectedEvent()] context=${n2.context} on 'clients_disconnected' channelId=${t2}`), n2.relayPersistence || (n2.clientsConnected = false, n2.ready = false, n2.authorized = false), e7.emit(bo.CLIENTS_DISCONNECTED, n2.channelId), e7.setConnectionStatus(vo.DISCONNECTED);
  };
}
function zo(e7) {
  return (t2) => {
    var n2;
    const { state: r2 } = e7;
    if (io.RemoteCommunication(`[RemoteCommunication: handleClientsWaitingEvent()] context=${r2.context} on 'clients_waiting' numberUsers=${t2} ready=${r2.ready} autoStarted=${r2.originatorConnectStarted}`), e7.setConnectionStatus(vo.WAITING), e7.emit(bo.CLIENTS_WAITING, t2), r2.originatorConnectStarted) {
      io.RemoteCommunication(`[RemoteCommunication: handleClientsWaitingEvent()] on 'clients_waiting' watch autoStarted=${r2.originatorConnectStarted} timeout`, r2.autoConnectOptions);
      const t3 = (null === (n2 = r2.autoConnectOptions) || void 0 === n2 ? void 0 : n2.timeout) || 3e3, i = setTimeout(() => {
        io.RemoteCommunication(`[RemoteCommunication: handleClientsWaitingEvent()] setTimeout(${t3}) terminate channelConfig`, r2.autoConnectOptions), r2.originatorConnectStarted = false, r2.ready || e7.setConnectionStatus(vo.TIMEOUT), clearTimeout(i);
      }, t3);
    }
  };
}
function qo(e7, t2) {
  return (n2) => {
    var r2, i, o, s, a2, c2, l2, d2;
    const { state: u2 } = e7;
    if (io.RemoteCommunication(`[RemoteCommunication: handleKeysExchangedEvent()] context=${u2.context} on commLayer.'keys_exchanged' channel=${u2.channelId}`, n2), null === (i = null === (r2 = u2.communicationLayer) || void 0 === r2 ? void 0 : r2.getKeyInfo()) || void 0 === i ? void 0 : i.keysExchanged) {
      const t3 = Object.assign(Object.assign({}, u2.channelConfig), { channelId: null !== (o = u2.channelId) && void 0 !== o ? o : "", validUntil: (null === (s = u2.channelConfig) || void 0 === s ? void 0 : s.validUntil) || po, localKey: u2.communicationLayer.getKeyInfo().ecies.private, otherKey: u2.communicationLayer.getKeyInfo().ecies.otherPubKey });
      null === (a2 = u2.storageManager) || void 0 === a2 || a2.persistChannelConfig(t3).catch((e8) => {
      }), e7.setConnectionStatus(vo.LINKED);
    }
    !function(e8, t3) {
      var n3, r3, i2, o2, s2, a3, c3, l3;
      const { state: d3 } = e8;
      io.RemoteCommunication(`[RemoteCommunication: setLastActiveDate()] channel=${d3.channelId}`, t3);
      const u3 = Object.assign(Object.assign({}, d3.channelConfig), { channelId: null !== (n3 = d3.channelId) && void 0 !== n3 ? n3 : "", validUntil: null !== (i2 = null === (r3 = d3.channelConfig) || void 0 === r3 ? void 0 : r3.validUntil) && void 0 !== i2 ? i2 : 0, relayPersistence: d3.relayPersistence, localKey: null === (s2 = null === (o2 = d3.communicationLayer) || void 0 === o2 ? void 0 : o2.state.keyExchange) || void 0 === s2 ? void 0 : s2.getKeyInfo().ecies.private, otherKey: null === (c3 = null === (a3 = d3.communicationLayer) || void 0 === a3 ? void 0 : a3.state.keyExchange) || void 0 === c3 ? void 0 : c3.getKeyInfo().ecies.otherPubKey, lastActive: t3.getTime() });
      null === (l3 = d3.storageManager) || void 0 === l3 || l3.persistChannelConfig(u3);
    }(e7, /* @__PURE__ */ new Date()), u2.analytics && u2.channelId && co(Object.assign(Object.assign({ id: u2.channelId, event: n2.isOriginator ? So.CONNECTED : So.CONNECTED_MOBILE }, u2.originatorInfo), { sdkVersion: u2.sdkVersion, commLayer: t2, commLayerVersion: uo.version, walletVersion: null === (c2 = u2.walletInfo) || void 0 === c2 ? void 0 : c2.version }), u2.communicationServerUrl).catch((e8) => {
    }), u2.isOriginator = n2.isOriginator, n2.isOriginator || (null === (l2 = u2.communicationLayer) || void 0 === l2 || l2.sendMessage({ type: Co.READY }), u2.ready = true, u2.paused = false), n2.isOriginator && !u2.originatorInfoSent && (null === (d2 = u2.communicationLayer) || void 0 === d2 || d2.sendMessage({ type: Co.ORIGINATOR_INFO, originatorInfo: u2.originatorInfo, originator: u2.originatorInfo }), u2.originatorInfoSent = true);
  };
}
function Vo(e7) {
  return (t2) => {
    let n2 = t2;
    t2.message && (n2 = n2.message), function(e8, t3) {
      const { state: n3 } = t3;
      if (io.RemoteCommunication(`[RemoteCommunication: onCommunicationLayerMessage()] context=${n3.context} on 'message' typeof=${typeof e8}`, e8), t3.state.ready = true, n3.isOriginator || e8.type !== Co.ORIGINATOR_INFO) if (n3.isOriginator && e8.type === Co.WALLET_INFO) !function(e9, t4) {
        const { state: n4 } = e9;
        n4.walletInfo = t4.walletInfo, n4.paused = false;
      }(t3, e8);
      else {
        if (n3.isOriginator && e8.type === Co.WALLET_INIT) (function(e9, t4) {
          return a(this, void 0, void 0, function* () {
            var n4, r2, i;
            const { state: o } = e9;
            if (o.isOriginator) {
              const o2 = t4.data || {};
              if ("object" == typeof o2 && "accounts" in o2 && "chainId" in o2 && "walletKey" in o2) try {
                const { channelConfig: t5 } = e9.state;
                if (io.RemoteCommunication("WALLET_INIT: channelConfig", JSON.stringify(t5, null, 2)), t5) {
                  const s = o2.accounts, a2 = o2.chainId, c2 = o2.walletKey;
                  let l2, d2 = false;
                  "deeplinkProtocol" in o2 && (d2 = Boolean(o2.deeplinkProtocol), e9.state.deeplinkProtocolAvailable = d2), "walletVersion" in o2 && (l2 = o2.walletVersion), yield null === (n4 = e9.state.storageManager) || void 0 === n4 ? void 0 : n4.persistChannelConfig(Object.assign(Object.assign({}, t5), { otherKey: c2, walletVersion: l2, deeplinkProtocolAvailable: d2, relayPersistence: true })), yield null === (r2 = e9.state.storageManager) || void 0 === r2 ? void 0 : r2.persistAccounts(s), yield null === (i = e9.state.storageManager) || void 0 === i ? void 0 : i.persistChainId(a2);
                }
                e9.emit(bo.WALLET_INIT, { accounts: o2.accounts, chainId: o2.chainId });
              } catch (n5) {
              }
            }
          });
        })(t3, e8).catch((e9) => {
          io.RemoteCommunication(`[RemoteCommunication: onCommunicationLayerMessage()] error=${e9}`);
        });
        else if (e8.type === Co.TERMINATE) (function(e9) {
          return a(this, void 0, void 0, function* () {
            const { state: t4 } = e9;
            t4.isOriginator && (yield Jo({ options: { terminate: true, sendMessage: false }, instance: e9 }), e9.emit(bo.TERMINATE));
          });
        })(t3).catch((e9) => {
          io.RemoteCommunication(`[RemoteCommunication: onCommunicationLayerMessage()] error=${e9}`);
        });
        else if (e8.type === Co.PAUSE) !function(e9) {
          const { state: t4 } = e9;
          t4.paused = true, e9.setConnectionStatus(vo.PAUSED);
        }(t3);
        else if (e8.type === Co.READY && n3.isOriginator) !function(e9) {
          const { state: t4 } = e9;
          e9.setConnectionStatus(vo.LINKED);
          const n4 = t4.paused;
          t4.paused = false, e9.emit(bo.CLIENTS_READY, { isOriginator: t4.isOriginator, walletInfo: t4.walletInfo }), n4 && (t4.authorized = true, e9.emit(bo.AUTHORIZED));
        }(t3);
        else {
          if (e8.type === Co.OTP && n3.isOriginator) return void function(e9, t4) {
            var n4;
            const { state: r2 } = e9;
            e9.emit(bo.OTP, t4.otpAnswer), 1 === "6.6".localeCompare((null === (n4 = r2.walletInfo) || void 0 === n4 ? void 0 : n4.version) || "") && e9.emit(bo.SDK_RPC_CALL, { method: mo.ETH_REQUESTACCOUNTS, params: [] });
          }(t3, e8);
          e8.type === Co.AUTHORIZED && n3.isOriginator && function(e9) {
            const { state: t4 } = e9;
            t4.authorized = true, e9.emit(bo.AUTHORIZED);
          }(t3);
        }
        t3.emit(bo.MESSAGE, e8);
      }
      else !function(e9, t4) {
        var n4;
        const { state: r2 } = e9;
        null === (n4 = r2.communicationLayer) || void 0 === n4 || n4.sendMessage({ type: Co.WALLET_INFO, walletInfo: r2.walletInfo }), r2.originatorInfo = t4.originatorInfo || t4.originator, e9.emit(bo.CLIENTS_READY, { isOriginator: r2.isOriginator, originatorInfo: r2.originatorInfo }), r2.paused = false;
      }(t3, e8);
    }(n2, e7);
  };
}
function Wo(e7) {
  return () => {
    const { state: t2 } = e7;
    io.RemoteCommunication("[RemoteCommunication: handleSocketReconnectEvent()] on 'socket_reconnect' -- reset key exchange status / set ready to false"), t2.ready = false, t2.authorized = false, yo(t2), e7.emitServiceStatusEvent({ context: "socket_reconnect" });
  };
}
function Go(e7) {
  return () => {
    const { state: t2 } = e7;
    io.RemoteCommunication("[RemoteCommunication: handleSocketDisconnectedEvent()] on 'socket_Disconnected' set ready to false"), t2.ready = false;
  };
}
function Zo(e7) {
  return () => a(this, void 0, void 0, function* () {
    var t2, n2, r2, i, o, s, a2;
    const { state: c2 } = e7;
    io.RemoteCommunication(`[RemoteCommunication: handleFullPersistenceEvent()] context=${c2.context}`), e7.state.ready = true, e7.state.clientsConnected = true, e7.state.authorized = true, e7.state.relayPersistence = true, null === (t2 = e7.state.communicationLayer) || void 0 === t2 || t2.getKeyExchange().setKeysExchanged(true), e7.emit(bo.KEYS_EXCHANGED, { keysExchanged: true, isOriginator: true }), e7.emit(bo.AUTHORIZED), e7.emit(bo.CLIENTS_READY), e7.emit(bo.CHANNEL_PERSISTENCE);
    try {
      c2.channelConfig = Object.assign(Object.assign({}, c2.channelConfig), { localKey: null === (n2 = c2.communicationLayer) || void 0 === n2 ? void 0 : n2.getKeyExchange().getKeyInfo().ecies.private, otherKey: null === (r2 = c2.communicationLayer) || void 0 === r2 ? void 0 : r2.getKeyExchange().getOtherPublicKey(), channelId: null !== (i = c2.channelId) && void 0 !== i ? i : "", validUntil: null !== (s = null === (o = c2.channelConfig) || void 0 === o ? void 0 : o.validUntil) && void 0 !== s ? s : po, relayPersistence: true }), yield null === (a2 = c2.storageManager) || void 0 === a2 ? void 0 : a2.persistChannelConfig(c2.channelConfig);
    } catch (t3) {
    }
  });
}
function Yo({ communicationLayerPreference: e7, otherPublicKey: t2, reconnect: n2, ecies: r2, communicationServerUrl: i = ho, instance: o }) {
  var s, a2, c2, l2, d2, u2, h2, f3, p2, g2, m2;
  const { state: y2 } = o;
  if (io.RemoteCommunication("[initCommunicationLayer()] ", JSON.stringify(y2, null, 2)), e7 !== $o.SOCKET) throw new Error("Invalid communication protocol");
  y2.communicationLayer = new Do({ communicationLayerPreference: e7, otherPublicKey: t2, reconnect: n2, transports: y2.transports, communicationServerUrl: i, context: y2.context, ecies: r2, logging: y2.logging, remote: o });
  let v2 = "undefined" != typeof document && document.URL || "", b2 = "undefined" != typeof document && document.title || "";
  (null === (s = y2.dappMetadata) || void 0 === s ? void 0 : s.url) && (v2 = y2.dappMetadata.url), (null === (a2 = y2.dappMetadata) || void 0 === a2 ? void 0 : a2.name) && (b2 = y2.dappMetadata.name);
  const w2 = null !== (u2 = null !== (l2 = null === (c2 = y2.dappMetadata) || void 0 === c2 ? void 0 : c2.name) && void 0 !== l2 ? l2 : null === (d2 = y2.dappMetadata) || void 0 === d2 ? void 0 : d2.url) && void 0 !== u2 ? u2 : "N/A", E2 = "undefined" != typeof window && void 0 !== window.location && null !== (h2 = window.location.hostname) && void 0 !== h2 ? h2 : w2, C2 = { url: v2, title: b2, source: null === (f3 = y2.dappMetadata) || void 0 === f3 ? void 0 : f3.source, dappId: E2, icon: (null === (p2 = y2.dappMetadata) || void 0 === p2 ? void 0 : p2.iconUrl) || (null === (g2 = y2.dappMetadata) || void 0 === g2 ? void 0 : g2.base64Icon), platform: y2.platformType, apiVersion: uo.version, connector: null === (m2 = y2.dappMetadata) || void 0 === m2 ? void 0 : m2.connector };
  y2.originatorInfo = C2;
  const S2 = { [bo.AUTHORIZED]: jo(o), [bo.MESSAGE]: Vo(o), [bo.CHANNEL_PERSISTENCE]: Zo(o), [bo.CLIENTS_CONNECTED]: Ho(o, e7), [bo.KEYS_EXCHANGED]: qo(o, e7), [bo.SOCKET_DISCONNECTED]: Go(o), [bo.SOCKET_RECONNECT]: Wo(o), [bo.CLIENTS_DISCONNECTED]: Fo(o), [bo.KEY_INFO]: () => {
  }, [bo.CHANNEL_CREATED]: Uo(o), [bo.CLIENTS_WAITING]: zo(o), [bo.RPC_UPDATE]: (e8) => {
    o.emit(bo.RPC_UPDATE, e8);
  } };
  for (const [t3, n3] of Object.entries(S2)) try {
    y2.communicationLayer.on(t3, n3);
  } catch (e8) {
  }
}
function Jo(e7) {
  return a(this, arguments, void 0, function* ({ options: e8, instance: t2 }) {
    const { state: n2 } = t2;
    return io.RemoteCommunication(`[RemoteCommunication: disconnect()] channel=${n2.channelId}`, e8), new Promise((r2, i) => {
      var s, a2, c2, l2, d2, u2;
      (null == e8 ? void 0 : e8.terminate) ? (t2.state.ready && co({ id: null !== (s = t2.state.channelId) && void 0 !== s ? s : "", event: So.TERMINATED }, t2.state.communicationServerUrl).catch((e9) => {
      }), n2.ready = false, n2.paused = false, null === (a2 = n2.storageManager) || void 0 === a2 || a2.terminate(null !== (c2 = n2.channelId) && void 0 !== c2 ? c2 : ""), t2.state.terminated = true, e8.sendMessage ? (null === (l2 = n2.communicationLayer) || void 0 === l2 ? void 0 : l2.getKeyInfo().keysExchanged) && t2.state.communicationLayer && Ro(t2.state.communicationLayer, { type: Co.TERMINATE }).then(() => {
        r2(true);
      }).catch((e9) => {
        i(e9);
      }) : r2(true), n2.authorized = false, n2.relayPersistence = false, n2.channelId = v4_default(), e8.channelId = n2.channelId, n2.channelConfig = void 0, n2.originatorConnectStarted = false, null === (d2 = n2.communicationLayer) || void 0 === d2 || d2.disconnect(e8), t2.setConnectionStatus(vo.TERMINATED)) : (null === (u2 = n2.communicationLayer) || void 0 === u2 || u2.disconnect(e8), t2.setConnectionStatus(vo.DISCONNECTED), r2(true));
    });
  });
}
($o || ($o = {})).SOCKET = "socket", function(e7) {
  e7.NonBrowser = "nodejs", e7.MetaMaskMobileWebview = "in-app-browser", e7.DesktopWeb = "web-desktop", e7.MobileWeb = "web-mobile", e7.ReactNative = "react-native";
}(Bo || (Bo = {}));
var Xo = class extends import_eventemitter2.EventEmitter2 {
  constructor(e7) {
    super(), this.state = { ready: false, authorized: false, isOriginator: false, terminated: false, protocolVersion: 1, paused: false, deeplinkProtocolAvailable: false, platformType: "metamask-mobile", analytics: false, reconnection: false, originatorInfoSent: false, communicationServerUrl: ho, context: "", persist: false, clientsConnected: false, sessionDuration: po, originatorConnectStarted: false, debug: false, _connectionStatus: vo.DISCONNECTED }, this._options = e7;
    const { platformType: n2, communicationLayerPreference: r2, otherPublicKey: i, reconnect: o, walletInfo: s, dappMetadata: a2, protocolVersion: c2, transports: l2, context: d2, relayPersistence: u2, ecies: h2, analytics: f3 = false, storage: p2, sdkVersion: g2, communicationServerUrl: m2 = ho, logging: y2, autoConnect: v2 = { timeout: go } } = e7;
    this.state.otherPublicKey = i, this.state.dappMetadata = a2, this.state.walletInfo = s, this.state.transports = l2, this.state.platformType = n2, this.state.analytics = f3, this.state.protocolVersion = null != c2 ? c2 : 1, this.state.isOriginator = !i, this.state.relayPersistence = u2, this.state.communicationServerUrl = m2, this.state.context = d2, this.state.terminated = false, this.state.sdkVersion = g2, this.setMaxListeners(50), this.setConnectionStatus(vo.DISCONNECTED), (null == p2 ? void 0 : p2.duration) && (this.state.sessionDuration = po), this.state.storageOptions = p2, this.state.autoConnectOptions = v2, this.state.debug = true === (null == y2 ? void 0 : y2.remoteLayer), true === (null == y2 ? void 0 : y2.remoteLayer) && import_debug.default.enable("RemoteCommunication:Layer"), true === (null == y2 ? void 0 : y2.serviceLayer) && import_debug.default.enable("SocketService:Layer"), true === (null == y2 ? void 0 : y2.eciesLayer) && import_debug.default.enable("ECIES:Layer"), true === (null == y2 ? void 0 : y2.keyExchangeLayer) && import_debug.default.enable("KeyExchange:Layer"), this.state.logging = y2, (null == p2 ? void 0 : p2.storageManager) && (this.state.storageManager = p2.storageManager), io.RemoteCommunication(`[RemoteCommunication: constructor()] protocolVersion=${c2} relayPersistence=${u2} isOriginator=${this.state.isOriginator} communicationLayerPreference=${r2} otherPublicKey=${i} reconnect=${o}`), this.state.isOriginator || Yo({ communicationLayerPreference: r2, otherPublicKey: i, reconnect: o, ecies: h2, communicationServerUrl: m2, instance: this }), this.emitServiceStatusEvent({ context: "constructor" });
  }
  initFromDappStorage() {
    return a(this, void 0, void 0, function* () {
      var e7;
      if (this.state.storageManager) {
        const t2 = yield this.state.storageManager.getPersistedChannelConfig({});
        t2 && (this.state.channelConfig = t2, this.state.channelId = t2.channelId, this.state.deeplinkProtocolAvailable = null !== (e7 = t2.deeplinkProtocolAvailable) && void 0 !== e7 && e7, t2.relayPersistence && (this.state.authorized = true, this.state.ready = true, this.setConnectionStatus(vo.LINKED), yield this.connectToChannel({ channelId: t2.channelId })));
      }
      Yo({ communicationLayerPreference: $o.SOCKET, otherPublicKey: this.state.otherPublicKey, reconnect: this._options.reconnect, ecies: this._options.ecies, communicationServerUrl: this.state.communicationServerUrl, instance: this });
    });
  }
  originatorSessionConnect() {
    return a(this, void 0, void 0, function* () {
      return yield function(e7) {
        return a(this, void 0, void 0, function* () {
          var t2;
          const { state: n2 } = e7;
          if (!n2.storageManager) return void io.RemoteCommunication("[RemoteCommunication: originatorSessionConnect()] no storage manager defined - skip");
          const r2 = yield n2.storageManager.getPersistedChannelConfig({});
          if (io.RemoteCommunication(`[RemoteCommunication: originatorSessionConnect()] autoStarted=${n2.originatorConnectStarted} channelConfig`, r2), null === (t2 = n2.communicationLayer) || void 0 === t2 ? void 0 : t2.isConnected()) return io.RemoteCommunication("[RemoteCommunication: originatorSessionConnect()] socket already connected - skip"), r2;
          if (r2) {
            if (r2.validUntil > Date.now()) return n2.channelConfig = r2, n2.originatorConnectStarted = true, n2.channelId = null == r2 ? void 0 : r2.channelId, n2.reconnection = true, r2;
            io.RemoteCommunication("[RemoteCommunication: autoConnect()] Session has expired");
          }
          n2.originatorConnectStarted = false;
        });
      }(this);
    });
  }
  generateChannelIdConnect() {
    return a(this, void 0, void 0, function* () {
      return function(e7) {
        return a(this, void 0, void 0, function* () {
          var t2, n2, r2, i, o, s;
          if (!e7.communicationLayer) throw new Error("communication layer not initialized");
          if (e7.ready) throw new Error("Channel already connected");
          if (e7.channelId && (null === (t2 = e7.communicationLayer) || void 0 === t2 ? void 0 : t2.isConnected())) return e7.channelConfig = Object.assign(Object.assign({}, e7.channelConfig), { channelId: e7.channelId, validUntil: Date.now() + e7.sessionDuration }), null === (n2 = e7.storageManager) || void 0 === n2 || n2.persistChannelConfig(e7.channelConfig), { channelId: e7.channelId, privKey: null === (i = null === (r2 = e7.communicationLayer) || void 0 === r2 ? void 0 : r2.getKeyInfo()) || void 0 === i ? void 0 : i.ecies.private, pubKey: null === (s = null === (o = e7.communicationLayer) || void 0 === o ? void 0 : o.getKeyInfo()) || void 0 === s ? void 0 : s.ecies.public };
          io.RemoteCommunication("[RemoteCommunication: generateChannelId()]");
          const a2 = yield e7.communicationLayer.createChannel();
          io.RemoteCommunication("[RemoteCommunication: generateChannelId()] channel created", a2);
          const c2 = Object.assign(Object.assign({}, e7.channelConfig), { channelId: a2.channelId, localKey: a2.privKey, validUntil: Date.now() + e7.sessionDuration });
          return e7.channelId = a2.channelId, e7.channelConfig = c2, { channelId: e7.channelId, pubKey: a2.pubKey, privKey: a2.privKey };
        });
      }(this.state);
    });
  }
  clean() {
    return yo(this.state);
  }
  connectToChannel({ channelId: e7, withKeyExchange: t2, authorized: n2 }) {
    return function(e8) {
      return a(this, arguments, void 0, function* ({ channelId: e9, withKeyExchange: t3, authorized: n3, state: r2 }) {
        var o, s, a2;
        if (!validate_default(e9)) throw io.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${r2.context} invalid channel channelId=${e9}`), new Error(`Invalid channel ${e9}`);
        if (io.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${r2.context} channelId=${e9} withKeyExchange=${t3}`), null === (o = r2.communicationLayer) || void 0 === o ? void 0 : o.isConnected()) return void io.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${r2.context} already connected - interrupt connection.`);
        r2.channelId = e9, yield null === (s = r2.communicationLayer) || void 0 === s ? void 0 : s.connectToChannel({ channelId: e9, authorized: n3, withKeyExchange: t3 });
        const c2 = Object.assign(Object.assign({}, r2.channelConfig), { channelId: e9, validUntil: Date.now() + r2.sessionDuration });
        r2.channelConfig = c2, null === (a2 = r2.storageManager) || void 0 === a2 || a2.persistChannelConfig(c2);
      });
    }({ channelId: e7, authorized: n2, withKeyExchange: t2, state: this.state });
  }
  sendMessage(e7) {
    return function(e8, t2) {
      return a(this, void 0, void 0, function* () {
        var n2, r2;
        const { state: i } = e8;
        io.RemoteCommunication(`[RemoteCommunication: sendMessage()] context=${i.context} paused=${i.paused} ready=${i.ready} relayPersistence=${i.relayPersistence} authorized=${i.authorized} socket=${null === (n2 = i.communicationLayer) || void 0 === n2 ? void 0 : n2.isConnected()} clientsConnected=${i.clientsConnected} status=${i._connectionStatus}`, t2), i.relayPersistence || i.ready && (null === (r2 = i.communicationLayer) || void 0 === r2 ? void 0 : r2.isConnected()) && i.clientsConnected || (io.RemoteCommunication(`[RemoteCommunication: sendMessage()] context=${i.context}  SKIP message waiting for MM mobile readiness.`), yield new Promise((t3) => {
          e8.once(bo.CLIENTS_READY, t3);
        }), io.RemoteCommunication(`[RemoteCommunication: sendMessage()] context=${i.context}  AFTER SKIP / READY -- sending pending message`));
        try {
          const n3 = yield function(e9, t3) {
            return a(this, void 0, void 0, function* () {
              return new Promise((n4) => {
                var r3;
                const { state: i2 } = e9;
                io.RemoteCommunication(`[RemoteCommunication: handleAuthorization()] context=${i2.context} ready=${i2.ready} authorized=${i2.authorized} method=${t3.method}`), !i2.isOriginator || i2.authorized || i2.relayPersistence ? null === (r3 = i2.communicationLayer) || void 0 === r3 || r3.sendMessage(t3).then((e10) => {
                  n4(e10);
                }).catch((e10) => {
                  n4(false);
                }) : e9.once(bo.AUTHORIZED, () => {
                  var e10;
                  io.RemoteCommunication(`[RemoteCommunication: handleAuthorization()] context=${i2.context}  AFTER SKIP / AUTHORIZED -- sending pending message`), null === (e10 = i2.communicationLayer) || void 0 === e10 || e10.sendMessage(t3).then((e11) => {
                    n4(e11);
                  }).catch((e11) => {
                    n4(false);
                  });
                });
              });
            });
          }(e8, t2);
          return n3;
        } catch (e9) {
          throw e9;
        }
      });
    }(this, e7);
  }
  testStorage() {
    return a(this, void 0, void 0, function* () {
      return function(e7) {
        return a(this, void 0, void 0, function* () {
          var t2;
          const n2 = yield null === (t2 = e7.storageManager) || void 0 === t2 ? void 0 : t2.getPersistedChannelConfig();
          io.RemoteCommunication("[RemoteCommunication: testStorage()] res", n2);
        });
      }(this.state);
    });
  }
  hasDeeplinkProtocol() {
    return this.state.deeplinkProtocolAvailable;
  }
  getChannelConfig() {
    return this.state.channelConfig;
  }
  isReady() {
    return this.state.ready;
  }
  isConnected() {
    var e7;
    return null === (e7 = this.state.communicationLayer) || void 0 === e7 ? void 0 : e7.isConnected();
  }
  isAuthorized() {
    return this.state.authorized;
  }
  isPaused() {
    return this.state.paused;
  }
  getCommunicationLayer() {
    return this.state.communicationLayer;
  }
  ping() {
    return a(this, void 0, void 0, function* () {
      var e7;
      io.RemoteCommunication(`[RemoteCommunication: ping()] channel=${this.state.channelId}`), yield null === (e7 = this.state.communicationLayer) || void 0 === e7 ? void 0 : e7.ping();
    });
  }
  testLogger() {
    io.RemoteCommunication(`testLogger() channel=${this.state.channelId}`), io.SocketService(`testLogger() channel=${this.state.channelId}`), io.Ecies(`testLogger() channel=${this.state.channelId}`), io.KeyExchange(`testLogger() channel=${this.state.channelId}`);
  }
  keyCheck() {
    var e7;
    io.RemoteCommunication(`[RemoteCommunication: keyCheck()] channel=${this.state.channelId}`), null === (e7 = this.state.communicationLayer) || void 0 === e7 || e7.keyCheck();
  }
  setConnectionStatus(e7) {
    this.state._connectionStatus !== e7 && (this.state._connectionStatus = e7, this.emit(bo.CONNECTION_STATUS, e7), this.emitServiceStatusEvent({ context: "setConnectionStatus" }));
  }
  emitServiceStatusEvent(e7 = {}) {
    this.emit(bo.SERVICE_STATUS, this.getServiceStatus());
  }
  getConnectionStatus() {
    return this.state._connectionStatus;
  }
  getServiceStatus() {
    return { originatorInfo: this.state.originatorInfo, keyInfo: this.getKeyInfo(), connectionStatus: this.state._connectionStatus, channelConfig: this.state.channelConfig, channelId: this.state.channelId };
  }
  getKeyInfo() {
    var e7;
    return null === (e7 = this.state.communicationLayer) || void 0 === e7 ? void 0 : e7.getKeyInfo();
  }
  resetKeys() {
    var e7;
    null === (e7 = this.state.communicationLayer) || void 0 === e7 || e7.resetKeys();
  }
  setOtherPublicKey(e7) {
    var t2;
    const n2 = null === (t2 = this.state.communicationLayer) || void 0 === t2 ? void 0 : t2.getKeyExchange();
    if (!n2) throw new Error("KeyExchange is not initialized.");
    n2.getOtherPublicKey() !== e7 && n2.setOtherPublicKey(e7);
  }
  pause() {
    return a(this, void 0, void 0, function* () {
      var e7;
      io.RemoteCommunication(`[RemoteCommunication: pause()] channel=${this.state.channelId}`), yield null === (e7 = this.state.communicationLayer) || void 0 === e7 ? void 0 : e7.pause(), this.setConnectionStatus(vo.PAUSED);
    });
  }
  getVersion() {
    return uo.version;
  }
  hasRelayPersistence() {
    var e7;
    return null !== (e7 = this.state.relayPersistence) && void 0 !== e7 && e7;
  }
  resume() {
    return a(this, void 0, void 0, function* () {
      return function(e7) {
        return a(this, void 0, void 0, function* () {
          var t2;
          const { state: n2 } = e7;
          io.RemoteCommunication(`[RemoteCommunication: resume()] channel=${n2.channelId}`), yield null === (t2 = n2.communicationLayer) || void 0 === t2 ? void 0 : t2.resume(), e7.setConnectionStatus(vo.LINKED);
        });
      }(this);
    });
  }
  encrypt(e7) {
    var t2, n2, r2;
    const i = null === (t2 = this.state.communicationLayer) || void 0 === t2 ? void 0 : t2.getKeyExchange(), o = null == i ? void 0 : i.getOtherPublicKey();
    if (!o) throw new Error("KeyExchange not completed");
    return null === (r2 = null === (n2 = this.state.communicationLayer) || void 0 === n2 ? void 0 : n2.state.eciesInstance) || void 0 === r2 ? void 0 : r2.encrypt(e7, o);
  }
  decrypt(e7) {
    var t2, n2, r2;
    if (!(null === (t2 = this.state.communicationLayer) || void 0 === t2 ? void 0 : t2.state.eciesInstance)) throw new Error("ECIES instance is not initialized");
    return null === (r2 = null === (n2 = this.state.communicationLayer) || void 0 === n2 ? void 0 : n2.state.eciesInstance) || void 0 === r2 ? void 0 : r2.decrypt(e7);
  }
  getChannelId() {
    return this.state.channelId;
  }
  getRPCMethodTracker() {
    var e7;
    return null === (e7 = this.state.communicationLayer) || void 0 === e7 ? void 0 : e7.getRPCMethodTracker();
  }
  reject({ channelId: e7 }) {
    return function(e8) {
      return a(this, arguments, void 0, function* ({ channelId: e9, state: t2 }) {
        var n2, r2, o;
        if (!validate_default(e9)) throw io.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${t2.context} invalid channel channelId=${e9}`), new Error(`Invalid channel ${e9}`);
        if (t2.isOriginator) return void io.RemoteCommunication(`[RemoteCommunication: reject()] context=${t2.context} isOriginator=${t2.isOriginator} channelId=${e9}`);
        const { socket: s } = null !== (r2 = null === (n2 = t2.communicationLayer) || void 0 === n2 ? void 0 : n2.state) && void 0 !== r2 ? r2 : {};
        (null == s ? void 0 : s.connected) || (io.RemoteCommunication(`[RemoteCommunication: reject()] context=${t2.context} socket already connected`), null == s || s.connect()), co(Object.assign(Object.assign({ id: e9, event: So.REJECTED }, t2.originatorInfo), { sdkVersion: t2.sdkVersion, commLayerVersion: uo.version, walletVersion: null === (o = t2.walletInfo) || void 0 === o ? void 0 : o.version }), t2.communicationServerUrl).catch((e10) => {
        }), yield new Promise((n3, r3) => {
          null == s || s.emit(bo.REJECTED, { channelId: e9 }, (e10, i) => {
            io.RemoteCommunication(`[RemoteCommunication: reject()] context=${t2.context} socket=${null == s ? void 0 : s.id}`, { error: e10, response: i }), e10 ? r3(e10) : n3(i);
          });
        });
      });
    }({ channelId: e7, state: this.state });
  }
  disconnect(e7) {
    return a(this, void 0, void 0, function* () {
      return Jo({ options: e7, instance: this });
    });
  }
};
!function(e7) {
  e7.RENEW = "renew", e7.LINK = "link";
}(Ko || (Ko = {}));
var Qo = "ERC721";
var es = "ERC1155";
var ts = { errors: { disconnected: () => "MetaMask: Disconnected from chain. Attempting to connect.", permanentlyDisconnected: () => "MetaMask: Disconnected from MetaMask background. Page reload required.", sendSiteMetadata: () => "MetaMask: Failed to send site metadata. This is an internal error, please report this bug.", unsupportedSync: (e7) => `MetaMask: The MetaMask Ethereum provider does not support synchronous methods like ${e7} without a callback parameter.`, invalidDuplexStream: () => "Must provide a Node.js-style duplex stream.", invalidNetworkParams: () => "MetaMask: Received invalid network parameters. Please report this bug.", invalidRequestArgs: () => "Expected a single, non-array, object argument.", invalidRequestMethod: () => "'args.method' must be a non-empty string.", invalidRequestParams: () => "'args.params' must be an object or array if provided.", invalidLoggerObject: () => "'args.logger' must be an object if provided.", invalidLoggerMethod: (e7) => `'args.logger' must include required method '${e7}'.` }, info: { connected: (e7) => `MetaMask: Connected to chain with ID "${e7}".` }, warnings: { chainIdDeprecation: "MetaMask: 'ethereum.chainId' is deprecated and may be removed in the future. Please use the 'eth_chainId' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23", networkVersionDeprecation: "MetaMask: 'ethereum.networkVersion' is deprecated and may be removed in the future. Please use the 'net_version' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23", selectedAddressDeprecation: "MetaMask: 'ethereum.selectedAddress' is deprecated and may be removed in the future. Please use the 'eth_accounts' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23", enableDeprecation: "MetaMask: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102", sendDeprecation: "MetaMask: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193", events: { close: "MetaMask: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect", data: "MetaMask: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message", networkChanged: "MetaMask: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged", notification: "MetaMask: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message" }, rpc: { ethDecryptDeprecation: "MetaMask: The RPC method 'eth_decrypt' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686", ethGetEncryptionPublicKeyDeprecation: "MetaMask: The RPC method 'eth_getEncryptionPublicKey' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686", walletWatchAssetNFTExperimental: "MetaMask: The RPC method 'wallet_watchAsset' is experimental for ERC721/ERC1155 assets and may change in the future.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-1.md and https://github.com/MetaMask/metamask-improvement-proposals/blob/main/PROCESS-GUIDE.md#proposal-lifecycle" }, experimentalMethods: "MetaMask: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning." } };
function ns(e7) {
  const t2 = { ethDecryptDeprecation: false, ethGetEncryptionPublicKeyDeprecation: false, walletWatchAssetNFTExperimental: false };
  return (n2, r2, i) => {
    var _a2;
    t2.ethDecryptDeprecation || "eth_decrypt" !== n2.method ? t2.ethGetEncryptionPublicKeyDeprecation || "eth_getEncryptionPublicKey" !== n2.method ? !t2.walletWatchAssetNFTExperimental && "wallet_watchAsset" === n2.method && [Qo, es].includes(((_a2 = n2.params) == null ? void 0 : _a2.type) || "") && (e7.warn(ts.warnings.rpc.walletWatchAssetNFTExperimental), t2.walletWatchAssetNFTExperimental = true) : (e7.warn(ts.warnings.rpc.ethGetEncryptionPublicKeyDeprecation), t2.ethGetEncryptionPublicKeyDeprecation = true) : (e7.warn(ts.warnings.rpc.ethDecryptDeprecation), t2.ethDecryptDeprecation = true), i();
  };
}
var rs = 4294967295;
var is = Math.floor(Math.random() * rs);
function os() {
  return (e7, t2, n2, r2) => {
    const i = e7.id, o = is = (is + 1) % rs;
    e7.id = o, t2.id = o, n2((n3) => {
      e7.id = i, t2.id = i, n3();
    });
  };
}
var ss = (e7, t2, n2) => {
  if (!t2.has(e7)) throw TypeError("Cannot " + n2);
};
var as = (e7, t2, n2) => (ss(e7, t2, "read from private field"), n2 ? n2.call(e7) : t2.get(e7));
var cs = (e7, t2, n2) => {
  if (t2.has(e7)) throw TypeError("Cannot add the same private member more than once");
  t2 instanceof WeakSet ? t2.add(e7) : t2.set(e7, n2);
};
var ls = (e7, t2, n2, r2) => (ss(e7, t2, "write to private field"), t2.set(e7, n2), n2);
var ds = (e7, t2, n2) => (ss(e7, t2, "access private method"), n2);
var us = { invalidInput: -32e3, resourceNotFound: -32001, resourceUnavailable: -32002, transactionRejected: -32003, methodNotSupported: -32004, limitExceeded: -32005, parse: -32700, invalidRequest: -32600, methodNotFound: -32601, invalidParams: -32602, internal: -32603 };
var hs = { "-32700": { standard: "JSON RPC 2.0", message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text." }, "-32600": { standard: "JSON RPC 2.0", message: "The JSON sent is not a valid Request object." }, "-32601": { standard: "JSON RPC 2.0", message: "The method does not exist / is not available." }, "-32602": { standard: "JSON RPC 2.0", message: "Invalid method parameter(s)." }, "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." }, "-32000": { standard: "EIP-1474", message: "Invalid input." }, "-32001": { standard: "EIP-1474", message: "Resource not found." }, "-32002": { standard: "EIP-1474", message: "Resource unavailable." }, "-32003": { standard: "EIP-1474", message: "Transaction rejected." }, "-32004": { standard: "EIP-1474", message: "Method not supported." }, "-32005": { standard: "EIP-1474", message: "Request limit exceeded." }, 4001: { standard: "EIP-1193", message: "User rejected the request." }, 4100: { standard: "EIP-1193", message: "The requested account and/or method has not been authorized by the user." }, 4200: { standard: "EIP-1193", message: "The requested method is not supported by this Ethereum provider." }, 4900: { standard: "EIP-1193", message: "The provider is disconnected from all chains." }, 4901: { standard: "EIP-1193", message: "The provider is disconnected from the specified chain." } };
function fs(e7) {
  return Boolean(e7) && "object" == typeof e7 && !Array.isArray(e7);
}
var ps = (e7, t2) => Object.hasOwnProperty.call(e7, t2);
var gs = class extends TypeError {
  constructor(e7, t2) {
    let n2;
    const { message: r2, explanation: i, ...o } = e7, { path: s } = e7, a2 = 0 === s.length ? r2 : `At path: ${s.join(".")} -- ${r2}`;
    super(i ?? a2), null != i && (this.cause = a2), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => n2 ?? (n2 = [e7, ...t2()]);
  }
};
function ms(e7) {
  return "object" == typeof e7 && null != e7;
}
function ys(e7) {
  return "symbol" == typeof e7 ? e7.toString() : "string" == typeof e7 ? JSON.stringify(e7) : `${e7}`;
}
function vs(e7, t2, n2, r2) {
  if (true === e7) return;
  false === e7 ? e7 = {} : "string" == typeof e7 && (e7 = { message: e7 });
  const { path: i, branch: o } = t2, { type: s } = n2, { refinement: a2, message: c2 = `Expected a value of type \`${s}\`${a2 ? ` with refinement \`${a2}\`` : ""}, but received: \`${ys(r2)}\`` } = e7;
  return { value: r2, type: s, refinement: a2, key: i[i.length - 1], path: i, branch: o, ...e7, message: c2 };
}
function* bs(e7, t2, n2, r2) {
  (function(e8) {
    return ms(e8) && "function" == typeof e8[Symbol.iterator];
  })(e7) || (e7 = [e7]);
  for (const i of e7) {
    const e8 = vs(i, t2, n2, r2);
    e8 && (yield e8);
  }
}
function* ws(e7, t2, n2 = {}) {
  const { path: r2 = [], branch: i = [e7], coerce: o = false, mask: s = false } = n2, a2 = { path: r2, branch: i };
  if (o && (e7 = t2.coercer(e7, a2), s && "type" !== t2.type && ms(t2.schema) && ms(e7) && !Array.isArray(e7))) for (const n3 in e7) void 0 === t2.schema[n3] && delete e7[n3];
  let c2 = "valid";
  for (const r3 of t2.validator(e7, a2)) r3.explanation = n2.message, c2 = "not_valid", yield [r3, void 0];
  for (let [l2, d2, u2] of t2.entries(e7, a2)) {
    const t3 = ws(d2, u2, { path: void 0 === l2 ? r2 : [...r2, l2], branch: void 0 === l2 ? i : [...i, d2], coerce: o, mask: s, message: n2.message });
    for (const n3 of t3) n3[0] ? (c2 = null != n3[0].refinement ? "not_refined" : "not_valid", yield [n3[0], void 0]) : o && (d2 = n3[1], void 0 === l2 ? e7 = d2 : e7 instanceof Map ? e7.set(l2, d2) : e7 instanceof Set ? e7.add(d2) : ms(e7) && (void 0 !== d2 || l2 in e7) && (e7[l2] = d2));
  }
  if ("not_valid" !== c2) for (const r3 of t2.refiner(e7, a2)) r3.explanation = n2.message, c2 = "not_refined", yield [r3, void 0];
  "valid" === c2 && (yield [void 0, e7]);
}
var Es = class {
  constructor(e7) {
    const { type: t2, schema: n2, validator: r2, refiner: i, coercer: o = (e8) => e8, entries: s = function* () {
    } } = e7;
    this.type = t2, this.schema = n2, this.entries = s, this.coercer = o, this.validator = r2 ? (e8, t3) => bs(r2(e8, t3), t3, this, e8) : () => [], this.refiner = i ? (e8, t3) => bs(i(e8, t3), t3, this, e8) : () => [];
  }
  assert(e7, t2) {
    return Cs(e7, this, t2);
  }
  create(e7, t2) {
    return Ss(e7, this, t2);
  }
  is(e7) {
    return _s(e7, this);
  }
  mask(e7, t2) {
    return function(e8, t3, n2) {
      const r2 = ks(e8, t3, { coerce: true, mask: true, message: n2 });
      if (r2[0]) throw r2[0];
      return r2[1];
    }(e7, this, t2);
  }
  validate(e7, t2 = {}) {
    return ks(e7, this, t2);
  }
};
function Cs(e7, t2, n2) {
  const r2 = ks(e7, t2, { message: n2 });
  if (r2[0]) throw r2[0];
}
function Ss(e7, t2, n2) {
  const r2 = ks(e7, t2, { coerce: true, message: n2 });
  if (r2[0]) throw r2[0];
  return r2[1];
}
function _s(e7, t2) {
  return !ks(e7, t2)[0];
}
function ks(e7, t2, n2 = {}) {
  const r2 = ws(e7, t2, n2), i = function(e8) {
    const { done: t3, value: n3 } = e8.next();
    return t3 ? void 0 : n3;
  }(r2);
  if (i[0]) {
    const e8 = new gs(i[0], function* () {
      for (const e9 of r2) e9[0] && (yield e9[0]);
    });
    return [e8, void 0];
  }
  return [void 0, i[1]];
}
function xs(e7, t2) {
  return new Es({ type: e7, schema: null, validator: t2 });
}
function Ms(e7) {
  let t2;
  return new Es({ type: "lazy", schema: null, *entries(n2, r2) {
    t2 ?? (t2 = e7()), yield* t2.entries(n2, r2);
  }, validator: (n2, r2) => (t2 ?? (t2 = e7()), t2.validator(n2, r2)), coercer: (n2, r2) => (t2 ?? (t2 = e7()), t2.coercer(n2, r2)), refiner: (n2, r2) => (t2 ?? (t2 = e7()), t2.refiner(n2, r2)) });
}
function As(e7) {
  return new Es({ type: "array", schema: e7, *entries(t2) {
    if (e7 && Array.isArray(t2)) for (const [n2, r2] of t2.entries()) yield [n2, r2, e7];
  }, coercer: (e8) => Array.isArray(e8) ? e8.slice() : e8, validator: (e8) => Array.isArray(e8) || `Expected an array value, but received: ${ys(e8)}` });
}
function Is(e7) {
  const t2 = ys(e7), n2 = typeof e7;
  return new Es({ type: "literal", schema: "string" === n2 || "number" === n2 || "boolean" === n2 ? e7 : null, validator: (n3) => n3 === e7 || `Expected the literal \`${t2}\`, but received: ${ys(n3)}` });
}
function Rs() {
  return xs("number", (e7) => "number" == typeof e7 && !isNaN(e7) || `Expected a number, but received: ${ys(e7)}`);
}
function Ps(e7) {
  const t2 = e7 ? Object.keys(e7) : [], n2 = xs("never", () => false);
  return new Es({ type: "object", schema: e7 || null, *entries(r2) {
    if (e7 && ms(r2)) {
      const i = new Set(Object.keys(r2));
      for (const n3 of t2) i.delete(n3), yield [n3, r2[n3], e7[n3]];
      for (const e8 of i) yield [e8, r2[e8], n2];
    }
  }, validator: (e8) => ms(e8) || `Expected an object, but received: ${ys(e8)}`, coercer: (e8) => ms(e8) ? { ...e8 } : e8 });
}
function Ls(e7) {
  return new Es({ ...e7, validator: (t2, n2) => void 0 === t2 || e7.validator(t2, n2), refiner: (t2, n2) => void 0 === t2 || e7.refiner(t2, n2) });
}
function Os(e7, t2) {
  return new Es({ type: "record", schema: null, *entries(n2) {
    if (ms(n2)) for (const r2 in n2) {
      const i = n2[r2];
      yield [r2, r2, e7], yield [r2, i, t2];
    }
  }, validator: (e8) => ms(e8) || `Expected an object, but received: ${ys(e8)}` });
}
function Ts() {
  return xs("string", (e7) => "string" == typeof e7 || `Expected a string, but received: ${ys(e7)}`);
}
function Ns(e7) {
  const t2 = e7.map((e8) => e8.type).join(" | ");
  return new Es({ type: "union", schema: null, coercer(t3) {
    for (const n2 of e7) {
      const [e8, r2] = n2.validate(t3, { coerce: true });
      if (!e8) return r2;
    }
    return t3;
  }, validator(n2, r2) {
    const i = [];
    for (const t3 of e7) {
      const [...e8] = ws(n2, t3, r2), [o] = e8;
      if (!o[0]) return [];
      for (const [t4] of e8) t4 && i.push(t4);
    }
    return [`Expected the value to satisfy a union of \`${t2}\`, but received: ${ys(n2)}`, ...i];
  } });
}
function Ds(e7) {
  return function(e8) {
    return function(e9) {
      return "object" == typeof e9 && null !== e9 && "message" in e9;
    }(e8) && "string" == typeof e8.message ? e8.message : null == e8 ? "" : String(e8);
  }(e7).replace(/\.$/u, "");
}
function $s(e7, t2) {
  var _a2, _b;
  return n2 = e7, Boolean("string" == typeof ((_b = (_a2 = n2 == null ? void 0 : n2.prototype) == null ? void 0 : _a2.constructor) == null ? void 0 : _b.name)) ? new e7({ message: t2 }) : e7({ message: t2 });
  var n2;
}
var Bs = class extends Error {
  constructor(e7) {
    super(e7.message), this.code = "ERR_ASSERTION";
  }
};
function Ks() {
  throw new Error("setTimeout has not been defined");
}
function js() {
  throw new Error("clearTimeout has not been defined");
}
var Us = Ks;
var Hs = js;
function Fs(e7) {
  if (Us === setTimeout) return setTimeout(e7, 0);
  if ((Us === Ks || !Us) && setTimeout) return Us = setTimeout, setTimeout(e7, 0);
  try {
    return Us(e7, 0);
  } catch (t2) {
    try {
      return Us.call(null, e7, 0);
    } catch (t3) {
      return Us.call(this, e7, 0);
    }
  }
}
"function" == typeof c.setTimeout && (Us = setTimeout), "function" == typeof c.clearTimeout && (Hs = clearTimeout);
var zs;
var qs = [];
var Vs = false;
var Ws = -1;
function Gs() {
  Vs && zs && (Vs = false, zs.length ? qs = zs.concat(qs) : Ws = -1, qs.length && Zs());
}
function Zs() {
  if (!Vs) {
    var e7 = Fs(Gs);
    Vs = true;
    for (var t2 = qs.length; t2; ) {
      for (zs = qs, qs = []; ++Ws < t2; ) zs && zs[Ws].run();
      Ws = -1, t2 = qs.length;
    }
    zs = null, Vs = false, function(e8) {
      if (Hs === clearTimeout) return clearTimeout(e8);
      if ((Hs === js || !Hs) && clearTimeout) return Hs = clearTimeout, clearTimeout(e8);
      try {
        return Hs(e8);
      } catch (t3) {
        try {
          return Hs.call(null, e8);
        } catch (t4) {
          return Hs.call(this, e8);
        }
      }
    }(e7);
  }
}
function Ys(e7, t2) {
  this.fun = e7, this.array = t2;
}
Ys.prototype.run = function() {
  this.fun.apply(null, this.array);
};
function Js() {
}
var Xs = Js;
var Qs = Js;
var ea = Js;
var ta = Js;
var na = Js;
var ra = Js;
var ia = Js;
var oa = c.performance || {};
var sa = oa.now || oa.mozNow || oa.msNow || oa.oNow || oa.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
var aa = /* @__PURE__ */ new Date();
var ca = { nextTick: function(e7) {
  var t2 = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
  qs.push(new Ys(e7, t2)), 1 !== qs.length || Vs || Fs(Zs);
}, title: "browser", browser: true, env: {}, argv: [], version: "", versions: {}, on: Xs, addListener: Qs, once: ea, off: ta, removeListener: na, removeAllListeners: ra, emit: ia, binding: function(e7) {
  throw new Error("process.binding is not supported");
}, cwd: function() {
  return "/";
}, chdir: function(e7) {
  throw new Error("process.chdir is not supported");
}, umask: function() {
  return 0;
}, hrtime: function(e7) {
  var t2 = 1e-3 * sa.call(oa), n2 = Math.floor(t2), r2 = Math.floor(t2 % 1 * 1e9);
  return e7 && (n2 -= e7[0], (r2 -= e7[1]) < 0 && (n2--, r2 += 1e9)), [n2, r2];
}, platform: "browser", release: {}, config: {}, uptime: function() {
  return (/* @__PURE__ */ new Date() - aa) / 1e3;
} };
var la = (e7) => Ps(e7);
function da({ path: e7, branch: t2 }) {
  const n2 = e7[e7.length - 1];
  return ps(t2[t2.length - 2], n2);
}
function ua(e7) {
  return new Es({ ...e7, type: `optional ${e7.type}`, validator: (t2, n2) => !da(n2) || e7.validator(t2, n2), refiner: (t2, n2) => !da(n2) || e7.refiner(t2, n2) });
}
var ha;
var fa;
var pa;
var ga = Ns([Is(null), xs("boolean", (e7) => "boolean" == typeof e7), xs("finite number", (e7) => _s(e7, Rs()) && Number.isFinite(e7)), Ts(), As(Ms(() => ga)), Os(Ts(), Ms(() => ga))]);
var ma = (ha = ga, fa = xs("any", () => true), pa = (e7) => (function(e8, t2, n2 = "Assertion failed", r2 = Bs) {
  try {
    Cs(e8, t2);
  } catch (e9) {
    throw $s(r2, `${n2}: ${Ds(e9)}.`);
  }
}(e7, ga), JSON.parse(JSON.stringify(e7, (e8, t2) => {
  if ("__proto__" !== e8 && "constructor" !== e8) return t2;
}))), new Es({ ...ha, coercer: (e7, t2) => _s(e7, fa) ? ha.coercer(pa(e7, t2), t2) : ha.coercer(e7, t2) }));
function ya(e7) {
  try {
    return function(e8) {
      Ss(e8, ma);
    }(e7), true;
  } catch {
    return false;
  }
}
var va = Is("2.0");
var ba = function(e7) {
  return new Es({ ...e7, validator: (t2, n2) => null === t2 || e7.validator(t2, n2), refiner: (t2, n2) => null === t2 || e7.refiner(t2, n2) });
}(Ns([Rs(), Ts()]));
var wa = la({ code: xs("integer", (e7) => "number" == typeof e7 && !isNaN(e7) && Number.isInteger(e7) || `Expected an integer, but received: ${ys(e7)}`), message: Ts(), data: ua(ma), stack: ua(Ts()) });
var Ea = Ns([Os(Ts(), ma), As(ma)]);
var Ca = la({ id: ba, jsonrpc: va, method: Ts(), params: ua(Ea) });
var Sa = la({ jsonrpc: va, method: Ts(), params: ua(Ea) });
function _a(e7) {
  return _s(e7, Ca);
}
function ka(e7) {
  return _s(e7, wa);
}
Ps({ id: ba, jsonrpc: va, result: Ls(xs("unknown", () => true)), error: Ls(wa) }), Ns([la({ id: ba, jsonrpc: va, result: ma }), la({ id: ba, jsonrpc: va, error: wa })]);
var xa = us.internal;
var Ma = "Unspecified error message. This is a bug, please report it.";
var Aa = { code: xa, message: Ra(xa) };
var Ia = "Unspecified server error.";
function Ra(e7, t2 = Ma) {
  if (function(e8) {
    return Number.isInteger(e8);
  }(e7)) {
    const t3 = e7.toString();
    if (ps(hs, t3)) return hs[t3].message;
    if (function(e8) {
      return e8 >= -32099 && e8 <= -32e3;
    }(e7)) return Ia;
  }
  return t2;
}
function Pa(e7, { fallbackError: t2 = Aa, shouldIncludeStack: n2 = true } = {}) {
  if (!ka(t2)) throw new Error("Must provide fallback error with integer number code and string message.");
  const r2 = function(e8, t3) {
    if (e8 && "object" == typeof e8 && "serialize" in e8 && "function" == typeof e8.serialize) return e8.serialize();
    if (ka(e8)) return e8;
    const n3 = La(e8), r3 = { ...t3, data: { cause: n3 } };
    return r3;
  }(e7, t2);
  return n2 || delete r2.stack, r2;
}
function La(e7) {
  return Array.isArray(e7) ? e7.map((e8) => ya(e8) ? e8 : fs(e8) ? Oa(e8) : null) : fs(e7) ? Oa(e7) : ya(e7) ? e7 : null;
}
function Oa(e7) {
  return Object.getOwnPropertyNames(e7).reduce((t2, n2) => {
    const r2 = e7[n2];
    return ya(r2) && (t2[n2] = r2), t2;
  }, {});
}
var Ta = ja;
ja.default = ja, ja.stable = za, ja.stableStringify = za;
var Na = "[...]";
var Da = "[Circular]";
var $a = [];
var Ba = [];
function Ka() {
  return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
}
function ja(e7, t2, n2, r2) {
  var i;
  void 0 === r2 && (r2 = Ka()), Ha(e7, "", 0, [], void 0, 0, r2);
  try {
    i = 0 === Ba.length ? JSON.stringify(e7, t2, n2) : JSON.stringify(e7, Va(t2), n2);
  } catch (e8) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; 0 !== $a.length; ) {
      var o = $a.pop();
      4 === o.length ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2];
    }
  }
  return i;
}
function Ua(e7, t2, n2, r2) {
  var i = Object.getOwnPropertyDescriptor(r2, n2);
  void 0 !== i.get ? i.configurable ? (Object.defineProperty(r2, n2, { value: e7 }), $a.push([r2, n2, t2, i])) : Ba.push([t2, n2, e7]) : (r2[n2] = e7, $a.push([r2, n2, t2]));
}
function Ha(e7, t2, n2, r2, i, o, s) {
  var a2;
  if (o += 1, "object" == typeof e7 && null !== e7) {
    for (a2 = 0; a2 < r2.length; a2++) if (r2[a2] === e7) return void Ua(Da, e7, t2, i);
    if (void 0 !== s.depthLimit && o > s.depthLimit) return void Ua(Na, e7, t2, i);
    if (void 0 !== s.edgesLimit && n2 + 1 > s.edgesLimit) return void Ua(Na, e7, t2, i);
    if (r2.push(e7), Array.isArray(e7)) for (a2 = 0; a2 < e7.length; a2++) Ha(e7[a2], a2, a2, r2, e7, o, s);
    else {
      var c2 = Object.keys(e7);
      for (a2 = 0; a2 < c2.length; a2++) {
        var l2 = c2[a2];
        Ha(e7[l2], l2, a2, r2, e7, o, s);
      }
    }
    r2.pop();
  }
}
function Fa(e7, t2) {
  return e7 < t2 ? -1 : e7 > t2 ? 1 : 0;
}
function za(e7, t2, n2, r2) {
  void 0 === r2 && (r2 = Ka());
  var i, o = qa(e7, "", 0, [], void 0, 0, r2) || e7;
  try {
    i = 0 === Ba.length ? JSON.stringify(o, t2, n2) : JSON.stringify(o, Va(t2), n2);
  } catch (e8) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; 0 !== $a.length; ) {
      var s = $a.pop();
      4 === s.length ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2];
    }
  }
  return i;
}
function qa(e7, t2, n2, r2, i, o, s) {
  var a2;
  if (o += 1, "object" == typeof e7 && null !== e7) {
    for (a2 = 0; a2 < r2.length; a2++) if (r2[a2] === e7) return void Ua(Da, e7, t2, i);
    try {
      if ("function" == typeof e7.toJSON) return;
    } catch (e8) {
      return;
    }
    if (void 0 !== s.depthLimit && o > s.depthLimit) return void Ua(Na, e7, t2, i);
    if (void 0 !== s.edgesLimit && n2 + 1 > s.edgesLimit) return void Ua(Na, e7, t2, i);
    if (r2.push(e7), Array.isArray(e7)) for (a2 = 0; a2 < e7.length; a2++) qa(e7[a2], a2, a2, r2, e7, o, s);
    else {
      var c2 = {}, l2 = Object.keys(e7).sort(Fa);
      for (a2 = 0; a2 < l2.length; a2++) {
        var d2 = l2[a2];
        qa(e7[d2], d2, a2, r2, e7, o, s), c2[d2] = e7[d2];
      }
      if (void 0 === i) return c2;
      $a.push([i, t2, e7]), i[t2] = c2;
    }
    r2.pop();
  }
}
function Va(e7) {
  return e7 = void 0 !== e7 ? e7 : function(e8, t2) {
    return t2;
  }, function(t2, n2) {
    if (Ba.length > 0) for (var r2 = 0; r2 < Ba.length; r2++) {
      var i = Ba[r2];
      if (i[1] === t2 && i[0] === n2) {
        n2 = i[2], Ba.splice(r2, 1);
        break;
      }
    }
    return e7.call(this, t2, n2);
  };
}
var Wa = de(Ta);
var Ga = class extends Error {
  constructor(e7, t2, n2) {
    if (!Number.isInteger(e7)) throw new Error('"code" must be an integer.');
    if (!t2 || "string" != typeof t2) throw new Error('"message" must be a non-empty string.');
    super(t2), this.code = e7, void 0 !== n2 && (this.data = n2);
  }
  serialize() {
    const e7 = { code: this.code, message: this.message };
    return void 0 !== this.data && (e7.data = this.data, function(e8) {
      if ("object" != typeof e8 || null === e8) return false;
      try {
        let t2 = e8;
        for (; null !== Object.getPrototypeOf(t2); ) t2 = Object.getPrototypeOf(t2);
        return Object.getPrototypeOf(e8) === t2;
      } catch (e9) {
        return false;
      }
    }(this.data) && (e7.data.cause = La(this.data.cause))), this.stack && (e7.stack = this.stack), e7;
  }
  toString() {
    return Wa(this.serialize(), Za, 2);
  }
};
function Za(e7, t2) {
  if ("[Circular]" !== t2) return t2;
}
var Ya = (e7) => Ja(us.invalidRequest, e7);
function Ja(e7, t2) {
  const [n2, r2] = function(e8) {
    if (e8) {
      if ("string" == typeof e8) return [e8];
      if ("object" == typeof e8 && !Array.isArray(e8)) {
        const { message: t3, data: n3 } = e8;
        if (t3 && "string" != typeof t3) throw new Error("Must specify string message.");
        return [t3 ?? void 0, n3];
      }
    }
    return [];
  }(t2);
  return new Ga(e7, n2 ?? Ra(e7), r2);
}
var Xa = {};
function Qa() {
}
function ec() {
  ec.init.call(this);
}
function tc(e7) {
  return void 0 === e7._maxListeners ? ec.defaultMaxListeners : e7._maxListeners;
}
function nc(e7, t2, n2, r2) {
  var i, o, s;
  if ("function" != typeof n2) throw new TypeError('"listener" argument must be a function');
  if ((o = e7._events) ? (o.newListener && (e7.emit("newListener", t2, n2.listener ? n2.listener : n2), o = e7._events), s = o[t2]) : (o = e7._events = new Qa(), e7._eventsCount = 0), s) {
    if ("function" == typeof s ? s = o[t2] = r2 ? [n2, s] : [s, n2] : r2 ? s.unshift(n2) : s.push(n2), !s.warned && (i = tc(e7)) && i > 0 && s.length > i) {
      s.warned = true;
      var a2 = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t2 + " listeners added. Use emitter.setMaxListeners() to increase limit");
      a2.name = "MaxListenersExceededWarning", a2.emitter = e7, a2.type = t2, a2.count = s.length, function(e8) {
        "function" == typeof console.warn ? console.warn(e8) : console.log(e8);
      }(a2);
    }
  } else s = o[t2] = n2, ++e7._eventsCount;
  return e7;
}
function rc(e7, t2, n2) {
  var r2 = false;
  function i() {
    e7.removeListener(t2, i), r2 || (r2 = true, n2.apply(e7, arguments));
  }
  return i.listener = n2, i;
}
function ic(e7) {
  var t2 = this._events;
  if (t2) {
    var n2 = t2[e7];
    if ("function" == typeof n2) return 1;
    if (n2) return n2.length;
  }
  return 0;
}
function oc(e7, t2) {
  for (var n2 = new Array(t2); t2--; ) n2[t2] = e7[t2];
  return n2;
}
Qa.prototype = /* @__PURE__ */ Object.create(null), ec.EventEmitter = ec, ec.usingDomains = false, ec.prototype.domain = void 0, ec.prototype._events = void 0, ec.prototype._maxListeners = void 0, ec.defaultMaxListeners = 10, ec.init = function() {
  this.domain = null, ec.usingDomains && (void 0).active, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new Qa(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, ec.prototype.setMaxListeners = function(e7) {
  if ("number" != typeof e7 || e7 < 0 || isNaN(e7)) throw new TypeError('"n" argument must be a positive number');
  return this._maxListeners = e7, this;
}, ec.prototype.getMaxListeners = function() {
  return tc(this);
}, ec.prototype.emit = function(e7) {
  var t2, n2, r2, i, o, s, a2, c2 = "error" === e7;
  if (s = this._events) c2 = c2 && null == s.error;
  else if (!c2) return false;
  if (a2 = this.domain, c2) {
    if (t2 = arguments[1], !a2) {
      if (t2 instanceof Error) throw t2;
      var l2 = new Error('Uncaught, unspecified "error" event. (' + t2 + ")");
      throw l2.context = t2, l2;
    }
    return t2 || (t2 = new Error('Uncaught, unspecified "error" event')), t2.domainEmitter = this, t2.domain = a2, t2.domainThrown = false, a2.emit("error", t2), false;
  }
  if (!(n2 = s[e7])) return false;
  var d2 = "function" == typeof n2;
  switch (r2 = arguments.length) {
    case 1:
      !function(e8, t3, n3) {
        if (t3) e8.call(n3);
        else for (var r3 = e8.length, i2 = oc(e8, r3), o2 = 0; o2 < r3; ++o2) i2[o2].call(n3);
      }(n2, d2, this);
      break;
    case 2:
      !function(e8, t3, n3, r3) {
        if (t3) e8.call(n3, r3);
        else for (var i2 = e8.length, o2 = oc(e8, i2), s2 = 0; s2 < i2; ++s2) o2[s2].call(n3, r3);
      }(n2, d2, this, arguments[1]);
      break;
    case 3:
      !function(e8, t3, n3, r3, i2) {
        if (t3) e8.call(n3, r3, i2);
        else for (var o2 = e8.length, s2 = oc(e8, o2), a3 = 0; a3 < o2; ++a3) s2[a3].call(n3, r3, i2);
      }(n2, d2, this, arguments[1], arguments[2]);
      break;
    case 4:
      !function(e8, t3, n3, r3, i2, o2) {
        if (t3) e8.call(n3, r3, i2, o2);
        else for (var s2 = e8.length, a3 = oc(e8, s2), c3 = 0; c3 < s2; ++c3) a3[c3].call(n3, r3, i2, o2);
      }(n2, d2, this, arguments[1], arguments[2], arguments[3]);
      break;
    default:
      for (i = new Array(r2 - 1), o = 1; o < r2; o++) i[o - 1] = arguments[o];
      !function(e8, t3, n3, r3) {
        if (t3) e8.apply(n3, r3);
        else for (var i2 = e8.length, o2 = oc(e8, i2), s2 = 0; s2 < i2; ++s2) o2[s2].apply(n3, r3);
      }(n2, d2, this, i);
  }
  return true;
}, ec.prototype.addListener = function(e7, t2) {
  return nc(this, e7, t2, false);
}, ec.prototype.on = ec.prototype.addListener, ec.prototype.prependListener = function(e7, t2) {
  return nc(this, e7, t2, true);
}, ec.prototype.once = function(e7, t2) {
  if ("function" != typeof t2) throw new TypeError('"listener" argument must be a function');
  return this.on(e7, rc(this, e7, t2)), this;
}, ec.prototype.prependOnceListener = function(e7, t2) {
  if ("function" != typeof t2) throw new TypeError('"listener" argument must be a function');
  return this.prependListener(e7, rc(this, e7, t2)), this;
}, ec.prototype.removeListener = function(e7, t2) {
  var n2, r2, i, o, s;
  if ("function" != typeof t2) throw new TypeError('"listener" argument must be a function');
  if (!(r2 = this._events)) return this;
  if (!(n2 = r2[e7])) return this;
  if (n2 === t2 || n2.listener && n2.listener === t2) 0 == --this._eventsCount ? this._events = new Qa() : (delete r2[e7], r2.removeListener && this.emit("removeListener", e7, n2.listener || t2));
  else if ("function" != typeof n2) {
    for (i = -1, o = n2.length; o-- > 0; ) if (n2[o] === t2 || n2[o].listener && n2[o].listener === t2) {
      s = n2[o].listener, i = o;
      break;
    }
    if (i < 0) return this;
    if (1 === n2.length) {
      if (n2[0] = void 0, 0 == --this._eventsCount) return this._events = new Qa(), this;
      delete r2[e7];
    } else !function(e8, t3) {
      for (var n3 = t3, r3 = n3 + 1, i2 = e8.length; r3 < i2; n3 += 1, r3 += 1) e8[n3] = e8[r3];
      e8.pop();
    }(n2, i);
    r2.removeListener && this.emit("removeListener", e7, s || t2);
  }
  return this;
}, ec.prototype.off = function(e7, t2) {
  return this.removeListener(e7, t2);
}, ec.prototype.removeAllListeners = function(e7) {
  var t2, n2;
  if (!(n2 = this._events)) return this;
  if (!n2.removeListener) return 0 === arguments.length ? (this._events = new Qa(), this._eventsCount = 0) : n2[e7] && (0 == --this._eventsCount ? this._events = new Qa() : delete n2[e7]), this;
  if (0 === arguments.length) {
    for (var r2, i = Object.keys(n2), o = 0; o < i.length; ++o) "removeListener" !== (r2 = i[o]) && this.removeAllListeners(r2);
    return this.removeAllListeners("removeListener"), this._events = new Qa(), this._eventsCount = 0, this;
  }
  if ("function" == typeof (t2 = n2[e7])) this.removeListener(e7, t2);
  else if (t2) do {
    this.removeListener(e7, t2[t2.length - 1]);
  } while (t2[0]);
  return this;
}, ec.prototype.listeners = function(e7) {
  var t2, n2, r2 = this._events;
  return n2 = r2 && (t2 = r2[e7]) ? "function" == typeof t2 ? [t2.listener || t2] : function(e8) {
    for (var t3 = new Array(e8.length), n3 = 0; n3 < t3.length; ++n3) t3[n3] = e8[n3].listener || e8[n3];
    return t3;
  }(t2) : [], n2;
}, ec.listenerCount = function(e7, t2) {
  return "function" == typeof e7.listenerCount ? e7.listenerCount(t2) : ic.call(e7, t2);
}, ec.prototype.listenerCount = ic, ec.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};
var sc = ue(Object.freeze({ __proto__: null, EventEmitter: ec, default: ec }));
Object.defineProperty(Xa, "__esModule", { value: true });
var ac = sc;
function cc(e7, t2, n2) {
  try {
    Reflect.apply(e7, t2, n2);
  } catch (e8) {
    setTimeout(() => {
      throw e8;
    });
  }
}
var lc = class extends ac.EventEmitter {
  emit(e7, ...t2) {
    let n2 = "error" === e7;
    const r2 = this._events;
    if (void 0 !== r2) n2 = n2 && void 0 === r2.error;
    else if (!n2) return false;
    if (n2) {
      let e8;
      if (t2.length > 0 && ([e8] = t2), e8 instanceof Error) throw e8;
      const n3 = new Error("Unhandled error." + (e8 ? ` (${e8.message})` : ""));
      throw n3.context = e8, n3;
    }
    const i = r2[e7];
    if (void 0 === i) return false;
    if ("function" == typeof i) cc(i, this, t2);
    else {
      const e8 = i.length, n3 = function(e9) {
        const t3 = e9.length, n4 = new Array(t3);
        for (let r3 = 0; r3 < t3; r3 += 1) n4[r3] = e9[r3];
        return n4;
      }(i);
      for (let r3 = 0; r3 < e8; r3 += 1) cc(n3[r3], this, t2);
    }
    return true;
  }
};
var dc;
var uc;
var hc;
var fc;
var pc;
var gc;
var mc;
var yc;
var vc;
var bc;
var wc;
var Ec;
var Cc;
var Sc;
var _c;
var kc;
var xc;
var Mc;
var Ac;
var Ic = Xa.default = lc;
var Rc = class e2 extends Ic {
  constructor({ notificationHandler: e7 } = {}) {
    super(), cs(this, fc), cs(this, gc), cs(this, yc), cs(this, dc, false), cs(this, uc, void 0), cs(this, hc, void 0), ls(this, uc, []), ls(this, hc, e7);
  }
  destroy() {
    as(this, uc).forEach((e7) => {
      "destroy" in e7 && "function" == typeof e7.destroy && e7.destroy();
    }), ls(this, uc, []), ls(this, dc, true);
  }
  push(e7) {
    ds(this, fc, pc).call(this), as(this, uc).push(e7);
  }
  handle(e7, t2) {
    if (ds(this, fc, pc).call(this), t2 && "function" != typeof t2) throw new Error('"callback" must be a function if provided.');
    return Array.isArray(e7) ? t2 ? ds(this, gc, mc).call(this, e7, t2) : ds(this, gc, mc).call(this, e7) : t2 ? ds(this, yc, vc).call(this, e7, t2) : this._promiseHandle(e7);
  }
  asMiddleware() {
    return ds(this, fc, pc).call(this), async (t2, n2, r2, i) => {
      var o, s;
      try {
        const [a2, c2, l2] = await ds(o = e2, Ec, Cc).call(o, t2, n2, as(this, uc));
        return c2 ? (await ds(s = e2, kc, xc).call(s, l2), i(a2)) : r2(async (t3) => {
          var n3;
          try {
            await ds(n3 = e2, kc, xc).call(n3, l2);
          } catch (e7) {
            return t3(e7);
          }
          return t3();
        });
      } catch (e7) {
        return i(e7);
      }
    };
  }
  async _promiseHandle(e7) {
    return new Promise((t2, n2) => {
      ds(this, yc, vc).call(this, e7, (e8, r2) => {
        e8 && void 0 === r2 ? n2(e8) : t2(r2);
      }).catch(n2);
    });
  }
};
dc = /* @__PURE__ */ new WeakMap(), uc = /* @__PURE__ */ new WeakMap(), hc = /* @__PURE__ */ new WeakMap(), fc = /* @__PURE__ */ new WeakSet(), pc = function() {
  if (as(this, dc)) throw new Error("This engine is destroyed and can no longer be used.");
}, gc = /* @__PURE__ */ new WeakSet(), mc = async function(e7, t2) {
  try {
    if (0 === e7.length) {
      const e8 = [{ id: null, jsonrpc: "2.0", error: new Ga(us.invalidRequest, "Request batch must contain plain objects. Received an empty array") }];
      return t2 ? t2(null, e8) : e8;
    }
    const n2 = (await Promise.all(e7.map(this._promiseHandle.bind(this)))).filter((e8) => void 0 !== e8);
    return t2 ? t2(null, n2) : n2;
  } catch (e8) {
    if (t2) return t2(e8);
    throw e8;
  }
}, yc = /* @__PURE__ */ new WeakSet(), vc = async function(e7, t2) {
  var n2;
  if (!e7 || Array.isArray(e7) || "object" != typeof e7) {
    const n3 = new Ga(us.invalidRequest, "Requests must be plain objects. Received: " + typeof e7, { request: e7 });
    return t2(n3, { id: null, jsonrpc: "2.0", error: n3 });
  }
  if ("string" != typeof e7.method) {
    const n3 = new Ga(us.invalidRequest, "Must specify a string method. Received: " + typeof e7.method, { request: e7 });
    return as(this, hc) && !_a(e7) ? t2(null) : t2(n3, { id: e7.id ?? null, jsonrpc: "2.0", error: n3 });
  }
  if (as(this, hc) && _s(e7, Sa) && !_a(e7)) {
    try {
      await as(this, hc).call(this, e7);
    } catch (e8) {
      return t2(e8);
    }
    return t2(null);
  }
  let r2 = null;
  const i = { ...e7 }, o = { id: i.id, jsonrpc: i.jsonrpc };
  try {
    await ds(n2 = Rc, bc, wc).call(n2, i, o, as(this, uc));
  } catch (e8) {
    r2 = e8;
  }
  return r2 && (delete o.result, o.error || (o.error = Pa(r2))), t2(r2, o);
}, bc = /* @__PURE__ */ new WeakSet(), wc = async function(e7, t2, n2) {
  var r2, i, o;
  const [s, a2, c2] = await ds(r2 = Rc, Ec, Cc).call(r2, e7, t2, n2);
  if (ds(i = Rc, Mc, Ac).call(i, e7, t2, a2), await ds(o = Rc, kc, xc).call(o, c2), s) throw s;
}, Ec = /* @__PURE__ */ new WeakSet(), Cc = async function(e7, t2, n2) {
  var r2;
  const i = [];
  let o = null, s = false;
  for (const a2 of n2) if ([o, s] = await ds(r2 = Rc, Sc, _c).call(r2, e7, t2, a2, i), s) break;
  return [o, s, i.reverse()];
}, Sc = /* @__PURE__ */ new WeakSet(), _c = async function(e7, t2, n2, r2) {
  return new Promise((i) => {
    const o = (e8) => {
      const n3 = e8 || t2.error;
      n3 && (t2.error = Pa(n3)), i([n3, true]);
    }, s = (n3) => {
      t2.error ? o(t2.error) : (n3 && ("function" != typeof n3 && o(new Ga(us.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof n3}" for request:
${Lc(e7)}`, { request: e7 })), r2.push(n3)), i([null, false]));
    };
    try {
      n2(e7, t2, s, o);
    } catch (e8) {
      o(e8);
    }
  });
}, kc = /* @__PURE__ */ new WeakSet(), xc = async function(e7) {
  for (const t2 of e7) await new Promise((e8, n2) => {
    t2((t3) => t3 ? n2(t3) : e8());
  });
}, Mc = /* @__PURE__ */ new WeakSet(), Ac = function(e7, t2, n2) {
  if (!ps(t2, "result") && !ps(t2, "error")) throw new Ga(us.internal, `JsonRpcEngine: Response has no error or result for request:
${Lc(e7)}`, { request: e7 });
  if (!n2) throw new Ga(us.internal, `JsonRpcEngine: Nothing ended request:
${Lc(e7)}`, { request: e7 });
}, cs(Rc, bc), cs(Rc, Ec), cs(Rc, Sc), cs(Rc, kc), cs(Rc, Mc);
var Pc = Rc;
function Lc(e7) {
  return JSON.stringify(e7, null, 2);
}
var Oc = Object.freeze(["eth_subscription"]);
var Tc = (e7 = console) => [os(), Nc(e7), ns(e7)];
function Nc(e7) {
  return (t2, n2, r2) => {
    "string" == typeof t2.method && t2.method || (n2.error = Ya({ message: "The request 'method' must be a non-empty string.", data: t2 })), r2((t3) => {
      const { error: r3 } = n2;
      return r3 ? (e7.error(`MetaMask - RPC Error: ${r3.message}`, r3), t3()) : t3();
    });
  };
}
var Dc = (e7, t2, n2 = true) => (r2, i) => {
  r2 || i.error ? t2(r2 || i.error) : !n2 || Array.isArray(i) ? e7(i) : e7(i.result);
};
var $c = (e7) => Boolean(e7) && "string" == typeof e7 && e7.startsWith("0x");
var Bc = () => {
};
async function Kc(e7, t2) {
  try {
    const t3 = await async function() {
      return { name: jc(window), icon: await Uc(window) };
    }();
    e7.handle({ jsonrpc: "2.0", id: 1, method: "metamask_sendDomainMetadata", params: t3 }, Bc);
  } catch (e8) {
    t2.error({ message: ts.errors.sendSiteMetadata(), originalError: e8 });
  }
}
function jc(e7) {
  const { document: t2 } = e7, n2 = t2.querySelector('head > meta[property="og:site_name"]');
  if (n2) return n2.content;
  const r2 = t2.querySelector('head > meta[name="title"]');
  return r2 ? r2.content : t2.title && t2.title.length > 0 ? t2.title : window.location.hostname;
}
async function Uc(e7) {
  const { document: t2 } = e7, n2 = t2.querySelectorAll('head > link[rel~="icon"]');
  for (const e8 of Array.from(n2)) if (e8 && await Hc(e8.href)) return e8.href;
  return null;
}
async function Hc(e7) {
  return new Promise((t2, n2) => {
    try {
      const n3 = document.createElement("img");
      n3.onload = () => t2(true), n3.onerror = () => t2(false), n3.src = e7;
    } catch (e8) {
      n2(e8);
    }
  });
}
var Fc = (e7, t2, n2) => {
  if (!t2.has(e7)) throw TypeError("Cannot " + n2);
};
var zc = (e7, t2, n2) => (Fc(e7, t2, "read from private field"), n2 ? n2.call(e7) : t2.get(e7));
var qc = (e7, t2, n2) => {
  if (t2.has(e7)) throw TypeError("Cannot add the same private member more than once");
  t2 instanceof WeakSet ? t2.add(e7) : t2.set(e7, n2);
};
var Vc = (e7, t2, n2, r2) => (Fc(e7, t2, "write to private field"), t2.set(e7, n2), n2);
function Wc(e7, t2, n2) {
  try {
    Reflect.apply(e7, t2, n2);
  } catch (e8) {
    setTimeout(() => {
      throw e8;
    });
  }
}
var Gc = class extends ec {
  emit(e7, ...t2) {
    let n2 = "error" === e7;
    const r2 = this._events;
    if (void 0 !== r2) n2 = n2 && void 0 === r2.error;
    else if (!n2) return false;
    if (n2) {
      let e8;
      if (t2.length > 0 && ([e8] = t2), e8 instanceof Error) throw e8;
      const n3 = new Error("Unhandled error." + (e8 ? ` (${e8.message})` : ""));
      throw n3.context = e8, n3;
    }
    const i = r2[e7];
    if (void 0 === i) return false;
    if ("function" == typeof i) Wc(i, this, t2);
    else {
      const e8 = i.length, n3 = function(e9) {
        const t3 = e9.length, n4 = new Array(t3);
        for (let r3 = 0; r3 < t3; r3 += 1) n4[r3] = e9[r3];
        return n4;
      }(i);
      for (let r3 = 0; r3 < e8; r3 += 1) Wc(n3[r3], this, t2);
    }
    return true;
  }
};
var Zc;
var Yc;
var Jc = function e3(t2, n2) {
  if (t2 === n2) return true;
  if (t2 && n2 && "object" == typeof t2 && "object" == typeof n2) {
    if (t2.constructor !== n2.constructor) return false;
    var r2, i, o;
    if (Array.isArray(t2)) {
      if ((r2 = t2.length) != n2.length) return false;
      for (i = r2; 0 != i--; ) if (!e3(t2[i], n2[i])) return false;
      return true;
    }
    if (t2.constructor === RegExp) return t2.source === n2.source && t2.flags === n2.flags;
    if (t2.valueOf !== Object.prototype.valueOf) return t2.valueOf() === n2.valueOf();
    if (t2.toString !== Object.prototype.toString) return t2.toString() === n2.toString();
    if ((r2 = (o = Object.keys(t2)).length) !== Object.keys(n2).length) return false;
    for (i = r2; 0 != i--; ) if (!Object.prototype.hasOwnProperty.call(n2, o[i])) return false;
    for (i = r2; 0 != i--; ) {
      var s = o[i];
      if (!e3(t2[s], n2[s])) return false;
    }
    return true;
  }
  return t2 != t2 && n2 != n2;
};
var Xc = de(Jc);
var Qc = class e4 extends Gc {
  constructor({ logger: t2 = console, maxEventListeners: n2 = 100, rpcMiddleware: r2 = [] } = {}) {
    super(), qc(this, Zc, void 0), qc(this, Yc, void 0), this._log = t2, this.setMaxListeners(n2), this._state = { ...e4._defaultState }, Vc(this, Yc, null), Vc(this, Zc, null), this._handleAccountsChanged = this._handleAccountsChanged.bind(this), this._handleConnect = this._handleConnect.bind(this), this._handleChainChanged = this._handleChainChanged.bind(this), this._handleDisconnect = this._handleDisconnect.bind(this), this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this), this._rpcRequest = this._rpcRequest.bind(this), this.request = this.request.bind(this);
    const i = new Pc();
    r2.forEach((e7) => i.push(e7)), this._rpcEngine = i;
  }
  get chainId() {
    return zc(this, Zc);
  }
  get selectedAddress() {
    return zc(this, Yc);
  }
  isConnected() {
    return this._state.isConnected;
  }
  async request(e7) {
    if (!e7 || "object" != typeof e7 || Array.isArray(e7)) throw Ya({ message: ts.errors.invalidRequestArgs(), data: e7 });
    const { method: t2, params: n2 } = e7;
    if ("string" != typeof t2 || 0 === t2.length) throw Ya({ message: ts.errors.invalidRequestMethod(), data: e7 });
    if (void 0 !== n2 && !Array.isArray(n2) && ("object" != typeof n2 || null === n2)) throw Ya({ message: ts.errors.invalidRequestParams(), data: e7 });
    const r2 = null == n2 ? { method: t2 } : { method: t2, params: n2 };
    return new Promise((e8, t3) => {
      this._rpcRequest(r2, Dc(e8, t3));
    });
  }
  _initializeState(e7) {
    if (this._state.initialized) throw new Error("Provider already initialized.");
    if (e7) {
      const { accounts: t2, chainId: n2, isUnlocked: r2, networkVersion: i } = e7;
      this._handleConnect(n2), this._handleChainChanged({ chainId: n2, networkVersion: i }), this._handleUnlockStateChanged({ accounts: t2, isUnlocked: r2 }), this._handleAccountsChanged(t2);
    }
    this._state.initialized = true, this.emit("_initialized");
  }
  _rpcRequest(e7, t2) {
    let n2 = t2;
    return Array.isArray(e7) || (e7.jsonrpc || (e7.jsonrpc = "2.0"), "eth_accounts" !== e7.method && "eth_requestAccounts" !== e7.method || (n2 = (n3, r2) => {
      this._handleAccountsChanged(r2.result ?? [], "eth_accounts" === e7.method), t2(n3, r2);
    })), this._rpcEngine.handle(e7, n2);
  }
  _handleConnect(e7) {
    this._state.isConnected || (this._state.isConnected = true, this.emit("connect", { chainId: e7 }), this._log.debug(ts.info.connected(e7)));
  }
  _handleDisconnect(e7, t2) {
    if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !e7) {
      let n2;
      this._state.isConnected = false, e7 ? (n2 = new Ga(1013, t2 ?? ts.errors.disconnected()), this._log.debug(n2)) : (n2 = new Ga(1011, t2 ?? ts.errors.permanentlyDisconnected()), this._log.error(n2), Vc(this, Zc, null), this._state.accounts = null, Vc(this, Yc, null), this._state.isUnlocked = false, this._state.isPermanentlyDisconnected = true), this.emit("disconnect", n2);
    }
  }
  _handleChainChanged({ chainId: e7 } = {}) {
    $c(e7) ? (this._handleConnect(e7), e7 !== zc(this, Zc) && (Vc(this, Zc, e7), this._state.initialized && this.emit("chainChanged", zc(this, Zc)))) : this._log.error(ts.errors.invalidNetworkParams(), { chainId: e7 });
  }
  _handleAccountsChanged(e7, t2 = false) {
    let n2 = e7;
    Array.isArray(e7) || (this._log.error("MetaMask: Received invalid accounts parameter. Please report this bug.", e7), n2 = []);
    for (const t3 of e7) if ("string" != typeof t3) {
      this._log.error("MetaMask: Received non-string account. Please report this bug.", e7), n2 = [];
      break;
    }
    if (!Xc(this._state.accounts, n2) && (t2 && null !== this._state.accounts && this._log.error("MetaMask: 'eth_accounts' unexpectedly updated accounts. Please report this bug.", n2), this._state.accounts = n2, zc(this, Yc) !== n2[0] && Vc(this, Yc, n2[0] || null), this._state.initialized)) {
      const e8 = [...n2];
      this.emit("accountsChanged", e8);
    }
  }
  _handleUnlockStateChanged({ accounts: e7, isUnlocked: t2 } = {}) {
    "boolean" == typeof t2 ? t2 !== this._state.isUnlocked && (this._state.isUnlocked = t2, this._handleAccountsChanged(e7 ?? [])) : this._log.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.");
  }
};
Zc = /* @__PURE__ */ new WeakMap(), Yc = /* @__PURE__ */ new WeakMap(), Qc._defaultState = { accounts: null, isConnected: false, isUnlocked: false, initialized: false, isPermanentlyDisconnected: false };
var el;
var tl;
var nl = Qc;
var rl = { exports: {} };
function il() {
  return tl ? el : (tl = 1, el = sc.EventEmitter);
}
var ol;
var sl = ue(ce);
ol = "function" == typeof Object.create ? function(e7, t2) {
  e7.super_ = t2, e7.prototype = Object.create(t2.prototype, { constructor: { value: e7, enumerable: false, writable: true, configurable: true } });
} : function(e7, t2) {
  e7.super_ = t2;
  var n2 = function() {
  };
  n2.prototype = t2.prototype, e7.prototype = new n2(), e7.prototype.constructor = e7;
};
var al = Object.getOwnPropertyDescriptors || function(e7) {
  for (var t2 = Object.keys(e7), n2 = {}, r2 = 0; r2 < t2.length; r2++) n2[t2[r2]] = Object.getOwnPropertyDescriptor(e7, t2[r2]);
  return n2;
};
var cl = /%[sdj%]/g;
function ll(e7) {
  if (!kl(e7)) {
    for (var t2 = [], n2 = 0; n2 < arguments.length; n2++) t2.push(pl(arguments[n2]));
    return t2.join(" ");
  }
  n2 = 1;
  for (var r2 = arguments, i = r2.length, o = String(e7).replace(cl, function(e8) {
    if ("%%" === e8) return "%";
    if (n2 >= i) return e8;
    switch (e8) {
      case "%s":
        return String(r2[n2++]);
      case "%d":
        return Number(r2[n2++]);
      case "%j":
        try {
          return JSON.stringify(r2[n2++]);
        } catch (e9) {
          return "[Circular]";
        }
      default:
        return e8;
    }
  }), s = r2[n2]; n2 < i; s = r2[++n2]) Cl(s) || !Il(s) ? o += " " + s : o += " " + pl(s);
  return o;
}
function dl(e7, t2) {
  if (Ml(c.process)) return function() {
    return dl(e7, t2).apply(this, arguments);
  };
  if (true === ca.noDeprecation) return e7;
  var n2 = false;
  return function() {
    if (!n2) {
      if (ca.throwDeprecation) throw new Error(t2);
      ca.traceDeprecation ? console.trace(t2) : console.error(t2), n2 = true;
    }
    return e7.apply(this, arguments);
  };
}
var ul;
var hl = {};
function fl(e7) {
  if (Ml(ul) && (ul = ca.env.NODE_DEBUG || ""), e7 = e7.toUpperCase(), !hl[e7]) if (new RegExp("\\b" + e7 + "\\b", "i").test(ul)) {
    hl[e7] = function() {
      var t2 = ll.apply(null, arguments);
      console.error("%s %d: %s", e7, 0, t2);
    };
  } else hl[e7] = function() {
  };
  return hl[e7];
}
function pl(e7, t2) {
  var n2 = { seen: [], stylize: ml };
  return arguments.length >= 3 && (n2.depth = arguments[2]), arguments.length >= 4 && (n2.colors = arguments[3]), El(t2) ? n2.showHidden = t2 : t2 && Kl(n2, t2), Ml(n2.showHidden) && (n2.showHidden = false), Ml(n2.depth) && (n2.depth = 2), Ml(n2.colors) && (n2.colors = false), Ml(n2.customInspect) && (n2.customInspect = true), n2.colors && (n2.stylize = gl), yl(n2, e7, n2.depth);
}
function gl(e7, t2) {
  var n2 = pl.styles[t2];
  return n2 ? "\x1B[" + pl.colors[n2][0] + "m" + e7 + "\x1B[" + pl.colors[n2][1] + "m" : e7;
}
function ml(e7, t2) {
  return e7;
}
function yl(e7, t2, n2) {
  if (e7.customInspect && t2 && Ll(t2.inspect) && t2.inspect !== pl && (!t2.constructor || t2.constructor.prototype !== t2)) {
    var r2 = t2.inspect(n2, e7);
    return kl(r2) || (r2 = yl(e7, r2, n2)), r2;
  }
  var i = function(e8, t3) {
    if (Ml(t3)) return e8.stylize("undefined", "undefined");
    if (kl(t3)) {
      var n3 = "'" + JSON.stringify(t3).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return e8.stylize(n3, "string");
    }
    if (_l(t3)) return e8.stylize("" + t3, "number");
    if (El(t3)) return e8.stylize("" + t3, "boolean");
    if (Cl(t3)) return e8.stylize("null", "null");
  }(e7, t2);
  if (i) return i;
  var o = Object.keys(t2), s = function(e8) {
    var t3 = {};
    return e8.forEach(function(e9, n3) {
      t3[e9] = true;
    }), t3;
  }(o);
  if (e7.showHidden && (o = Object.getOwnPropertyNames(t2)), Pl(t2) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return vl(t2);
  if (0 === o.length) {
    if (Ll(t2)) {
      var a2 = t2.name ? ": " + t2.name : "";
      return e7.stylize("[Function" + a2 + "]", "special");
    }
    if (Al(t2)) return e7.stylize(RegExp.prototype.toString.call(t2), "regexp");
    if (Rl(t2)) return e7.stylize(Date.prototype.toString.call(t2), "date");
    if (Pl(t2)) return vl(t2);
  }
  var c2, l2 = "", d2 = false, u2 = ["{", "}"];
  (wl(t2) && (d2 = true, u2 = ["[", "]"]), Ll(t2)) && (l2 = " [Function" + (t2.name ? ": " + t2.name : "") + "]");
  return Al(t2) && (l2 = " " + RegExp.prototype.toString.call(t2)), Rl(t2) && (l2 = " " + Date.prototype.toUTCString.call(t2)), Pl(t2) && (l2 = " " + vl(t2)), 0 !== o.length || d2 && 0 != t2.length ? n2 < 0 ? Al(t2) ? e7.stylize(RegExp.prototype.toString.call(t2), "regexp") : e7.stylize("[Object]", "special") : (e7.seen.push(t2), c2 = d2 ? function(e8, t3, n3, r3, i2) {
    for (var o2 = [], s2 = 0, a3 = t3.length; s2 < a3; ++s2) jl(t3, String(s2)) ? o2.push(bl(e8, t3, n3, r3, String(s2), true)) : o2.push("");
    return i2.forEach(function(i3) {
      i3.match(/^\d+$/) || o2.push(bl(e8, t3, n3, r3, i3, true));
    }), o2;
  }(e7, t2, n2, s, o) : o.map(function(r3) {
    return bl(e7, t2, n2, s, r3, d2);
  }), e7.seen.pop(), function(e8, t3, n3) {
    var r3 = e8.reduce(function(e9, t4) {
      return t4.indexOf("\n"), e9 + t4.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (r3 > 60) return n3[0] + ("" === t3 ? "" : t3 + "\n ") + " " + e8.join(",\n  ") + " " + n3[1];
    return n3[0] + t3 + " " + e8.join(", ") + " " + n3[1];
  }(c2, l2, u2)) : u2[0] + l2 + u2[1];
}
function vl(e7) {
  return "[" + Error.prototype.toString.call(e7) + "]";
}
function bl(e7, t2, n2, r2, i, o) {
  var s, a2, c2;
  if ((c2 = Object.getOwnPropertyDescriptor(t2, i) || { value: t2[i] }).get ? a2 = c2.set ? e7.stylize("[Getter/Setter]", "special") : e7.stylize("[Getter]", "special") : c2.set && (a2 = e7.stylize("[Setter]", "special")), jl(r2, i) || (s = "[" + i + "]"), a2 || (e7.seen.indexOf(c2.value) < 0 ? (a2 = Cl(n2) ? yl(e7, c2.value, null) : yl(e7, c2.value, n2 - 1)).indexOf("\n") > -1 && (a2 = o ? a2.split("\n").map(function(e8) {
    return "  " + e8;
  }).join("\n").substr(2) : "\n" + a2.split("\n").map(function(e8) {
    return "   " + e8;
  }).join("\n")) : a2 = e7.stylize("[Circular]", "special")), Ml(s)) {
    if (o && i.match(/^\d+$/)) return a2;
    (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e7.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e7.stylize(s, "string"));
  }
  return s + ": " + a2;
}
function wl(e7) {
  return Array.isArray(e7);
}
function El(e7) {
  return "boolean" == typeof e7;
}
function Cl(e7) {
  return null === e7;
}
function Sl(e7) {
  return null == e7;
}
function _l(e7) {
  return "number" == typeof e7;
}
function kl(e7) {
  return "string" == typeof e7;
}
function xl(e7) {
  return "symbol" == typeof e7;
}
function Ml(e7) {
  return void 0 === e7;
}
function Al(e7) {
  return Il(e7) && "[object RegExp]" === Nl(e7);
}
function Il(e7) {
  return "object" == typeof e7 && null !== e7;
}
function Rl(e7) {
  return Il(e7) && "[object Date]" === Nl(e7);
}
function Pl(e7) {
  return Il(e7) && ("[object Error]" === Nl(e7) || e7 instanceof Error);
}
function Ll(e7) {
  return "function" == typeof e7;
}
function Ol(e7) {
  return null === e7 || "boolean" == typeof e7 || "number" == typeof e7 || "string" == typeof e7 || "symbol" == typeof e7 || void 0 === e7;
}
function Tl(e7) {
  return S.isBuffer(e7);
}
function Nl(e7) {
  return Object.prototype.toString.call(e7);
}
function Dl(e7) {
  return e7 < 10 ? "0" + e7.toString(10) : e7.toString(10);
}
pl.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, pl.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
var $l = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function Bl() {
  console.log("%s - %s", function() {
    var e7 = /* @__PURE__ */ new Date(), t2 = [Dl(e7.getHours()), Dl(e7.getMinutes()), Dl(e7.getSeconds())].join(":");
    return [e7.getDate(), $l[e7.getMonth()], t2].join(" ");
  }(), ll.apply(null, arguments));
}
function Kl(e7, t2) {
  if (!t2 || !Il(t2)) return e7;
  for (var n2 = Object.keys(t2), r2 = n2.length; r2--; ) e7[n2[r2]] = t2[n2[r2]];
  return e7;
}
function jl(e7, t2) {
  return Object.prototype.hasOwnProperty.call(e7, t2);
}
var Ul = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function Hl(e7) {
  if ("function" != typeof e7) throw new TypeError('The "original" argument must be of type Function');
  if (Ul && e7[Ul]) {
    var t2;
    if ("function" != typeof (t2 = e7[Ul])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    return Object.defineProperty(t2, Ul, { value: t2, enumerable: false, writable: false, configurable: true }), t2;
  }
  function t2() {
    for (var t3, n2, r2 = new Promise(function(e8, r3) {
      t3 = e8, n2 = r3;
    }), i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
    i.push(function(e8, r3) {
      e8 ? n2(e8) : t3(r3);
    });
    try {
      e7.apply(this, i);
    } catch (e8) {
      n2(e8);
    }
    return r2;
  }
  return Object.setPrototypeOf(t2, Object.getPrototypeOf(e7)), Ul && Object.defineProperty(t2, Ul, { value: t2, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t2, al(e7));
}
function Fl(e7, t2) {
  if (!e7) {
    var n2 = new Error("Promise was rejected with a falsy value");
    n2.reason = e7, e7 = n2;
  }
  return t2(e7);
}
function zl(e7) {
  if ("function" != typeof e7) throw new TypeError('The "original" argument must be of type Function');
  function t2() {
    for (var t3 = [], n2 = 0; n2 < arguments.length; n2++) t3.push(arguments[n2]);
    var r2 = t3.pop();
    if ("function" != typeof r2) throw new TypeError("The last argument must be of type Function");
    var i = this, o = function() {
      return r2.apply(i, arguments);
    };
    e7.apply(this, t3).then(function(e8) {
      ca.nextTick(o.bind(null, null, e8));
    }, function(e8) {
      ca.nextTick(Fl.bind(null, e8, o));
    });
  }
  return Object.setPrototypeOf(t2, Object.getPrototypeOf(e7)), Object.defineProperties(t2, al(e7)), t2;
}
Hl.custom = Ul;
var ql;
var Vl;
var Wl;
var Gl;
var Zl = { inherits: ol, _extend: Kl, log: Bl, isBuffer: Tl, isPrimitive: Ol, isFunction: Ll, isError: Pl, isDate: Rl, isObject: Il, isRegExp: Al, isUndefined: Ml, isSymbol: xl, isString: kl, isNumber: _l, isNullOrUndefined: Sl, isNull: Cl, isBoolean: El, isArray: wl, inspect: pl, deprecate: dl, format: ll, debuglog: fl, promisify: Hl, callbackify: zl };
var Yl = ue(Object.freeze({ __proto__: null, _extend: Kl, callbackify: zl, debuglog: fl, default: Zl, deprecate: dl, format: ll, inherits: ol, inspect: pl, isArray: wl, isBoolean: El, isBuffer: Tl, isDate: Rl, isError: Pl, isFunction: Ll, isNull: Cl, isNullOrUndefined: Sl, isNumber: _l, isObject: Il, isPrimitive: Ol, isRegExp: Al, isString: kl, isSymbol: xl, isUndefined: Ml, log: Bl, promisify: Hl }));
function Jl() {
  if (Vl) return ql;
  function e7(e8, t3) {
    var n3 = Object.keys(e8);
    if (Object.getOwnPropertySymbols) {
      var r3 = Object.getOwnPropertySymbols(e8);
      t3 && (r3 = r3.filter(function(t4) {
        return Object.getOwnPropertyDescriptor(e8, t4).enumerable;
      })), n3.push.apply(n3, r3);
    }
    return n3;
  }
  function t2(t3) {
    for (var r3 = 1; r3 < arguments.length; r3++) {
      var i2 = null != arguments[r3] ? arguments[r3] : {};
      r3 % 2 ? e7(Object(i2), true).forEach(function(e8) {
        n2(t3, e8, i2[e8]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(i2)) : e7(Object(i2)).forEach(function(e8) {
        Object.defineProperty(t3, e8, Object.getOwnPropertyDescriptor(i2, e8));
      });
    }
    return t3;
  }
  function n2(e8, t3, n3) {
    return (t3 = i(t3)) in e8 ? Object.defineProperty(e8, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e8[t3] = n3, e8;
  }
  function r2(e8, t3, n3) {
    return t3 && function(e9, t4) {
      for (var n4 = 0; n4 < t4.length; n4++) {
        var r3 = t4[n4];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e9, i(r3.key), r3);
      }
    }(e8.prototype, t3), Object.defineProperty(e8, "prototype", { writable: false }), e8;
  }
  function i(e8) {
    var t3 = function(e9, t4) {
      if ("object" != typeof e9 || null === e9) return e9;
      var n3 = e9[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e9, t4 || "default");
        if ("object" != typeof r3) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e9);
    }(e8, "string");
    return "symbol" == typeof t3 ? t3 : String(t3);
  }
  Vl = 1;
  var o = sl.Buffer, s = Yl.inspect, a2 = s && s.custom || "inspect";
  return ql = function() {
    function e8() {
      !function(e9, t3) {
        if (!(e9 instanceof t3)) throw new TypeError("Cannot call a class as a function");
      }(this, e8), this.head = null, this.tail = null, this.length = 0;
    }
    return r2(e8, [{ key: "push", value: function(e9) {
      var t3 = { data: e9, next: null };
      this.length > 0 ? this.tail.next = t3 : this.head = t3, this.tail = t3, ++this.length;
    } }, { key: "unshift", value: function(e9) {
      var t3 = { data: e9, next: this.head };
      0 === this.length && (this.tail = t3), this.head = t3, ++this.length;
    } }, { key: "shift", value: function() {
      if (0 !== this.length) {
        var e9 = this.head.data;
        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e9;
      }
    } }, { key: "clear", value: function() {
      this.head = this.tail = null, this.length = 0;
    } }, { key: "join", value: function(e9) {
      if (0 === this.length) return "";
      for (var t3 = this.head, n3 = "" + t3.data; t3 = t3.next; ) n3 += e9 + t3.data;
      return n3;
    } }, { key: "concat", value: function(e9) {
      if (0 === this.length) return o.alloc(0);
      for (var t3, n3, r3, i2 = o.allocUnsafe(e9 >>> 0), s2 = this.head, a3 = 0; s2; ) t3 = s2.data, n3 = i2, r3 = a3, o.prototype.copy.call(t3, n3, r3), a3 += s2.data.length, s2 = s2.next;
      return i2;
    } }, { key: "consume", value: function(e9, t3) {
      var n3;
      return e9 < this.head.data.length ? (n3 = this.head.data.slice(0, e9), this.head.data = this.head.data.slice(e9)) : n3 = e9 === this.head.data.length ? this.shift() : t3 ? this._getString(e9) : this._getBuffer(e9), n3;
    } }, { key: "first", value: function() {
      return this.head.data;
    } }, { key: "_getString", value: function(e9) {
      var t3 = this.head, n3 = 1, r3 = t3.data;
      for (e9 -= r3.length; t3 = t3.next; ) {
        var i2 = t3.data, o2 = e9 > i2.length ? i2.length : e9;
        if (o2 === i2.length ? r3 += i2 : r3 += i2.slice(0, e9), 0 === (e9 -= o2)) {
          o2 === i2.length ? (++n3, t3.next ? this.head = t3.next : this.head = this.tail = null) : (this.head = t3, t3.data = i2.slice(o2));
          break;
        }
        ++n3;
      }
      return this.length -= n3, r3;
    } }, { key: "_getBuffer", value: function(e9) {
      var t3 = o.allocUnsafe(e9), n3 = this.head, r3 = 1;
      for (n3.data.copy(t3), e9 -= n3.data.length; n3 = n3.next; ) {
        var i2 = n3.data, s2 = e9 > i2.length ? i2.length : e9;
        if (i2.copy(t3, t3.length - e9, 0, s2), 0 === (e9 -= s2)) {
          s2 === i2.length ? (++r3, n3.next ? this.head = n3.next : this.head = this.tail = null) : (this.head = n3, n3.data = i2.slice(s2));
          break;
        }
        ++r3;
      }
      return this.length -= r3, t3;
    } }, { key: a2, value: function(e9, n3) {
      return s(this, t2(t2({}, n3), {}, { depth: 0, customInspect: false }));
    } }]), e8;
  }(), ql;
}
function Xl() {
  if (Gl) return Wl;
  function e7(e8, r2) {
    n2(e8, r2), t2(e8);
  }
  function t2(e8) {
    e8._writableState && !e8._writableState.emitClose || e8._readableState && !e8._readableState.emitClose || e8.emit("close");
  }
  function n2(e8, t3) {
    e8.emit("error", t3);
  }
  return Gl = 1, Wl = { destroy: function(r2, i) {
    var o = this, s = this._readableState && this._readableState.destroyed, a2 = this._writableState && this._writableState.destroyed;
    return s || a2 ? (i ? i(r2) : r2 && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, ca.nextTick(n2, this, r2)) : ca.nextTick(n2, this, r2)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(r2 || null, function(n3) {
      !i && n3 ? o._writableState ? o._writableState.errorEmitted ? ca.nextTick(t2, o) : (o._writableState.errorEmitted = true, ca.nextTick(e7, o, n3)) : ca.nextTick(e7, o, n3) : i ? (ca.nextTick(t2, o), i(n3)) : ca.nextTick(t2, o);
    }), this);
  }, undestroy: function() {
    this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
  }, errorOrDestroy: function(e8, t3) {
    var n3 = e8._readableState, r2 = e8._writableState;
    n3 && n3.autoDestroy || r2 && r2.autoDestroy ? e8.destroy(t3) : e8.emit("error", t3);
  } }, Wl;
}
var Ql = {};
var ed;
var td;
var nd = {};
function rd(e7, t2, n2) {
  n2 || (n2 = Error);
  var r2 = function(e8) {
    var n3, r3;
    function i(n4, r4, i2) {
      return e8.call(this, function(e9, n5, r5) {
        return "string" == typeof t2 ? t2 : t2(e9, n5, r5);
      }(n4, r4, i2)) || this;
    }
    return r3 = e8, (n3 = i).prototype = Object.create(r3.prototype), n3.prototype.constructor = n3, n3.__proto__ = r3, i;
  }(n2);
  r2.prototype.name = n2.name, r2.prototype.code = e7, nd[e7] = r2;
}
function id(e7, t2) {
  if (Array.isArray(e7)) {
    var n2 = e7.length;
    return e7 = e7.map(function(e8) {
      return String(e8);
    }), n2 > 2 ? "one of ".concat(t2, " ").concat(e7.slice(0, n2 - 1).join(", "), ", or ") + e7[n2 - 1] : 2 === n2 ? "one of ".concat(t2, " ").concat(e7[0], " or ").concat(e7[1]) : "of ".concat(t2, " ").concat(e7[0]);
  }
  return "of ".concat(t2, " ").concat(String(e7));
}
function od() {
  if (td) return ed;
  td = 1;
  var e7 = Ql.codes.ERR_INVALID_OPT_VALUE;
  return ed = { getHighWaterMark: function(t2, n2, r2, i) {
    var o = function(e8, t3, n3) {
      return null != e8.highWaterMark ? e8.highWaterMark : t3 ? e8[n3] : null;
    }(n2, i, r2);
    if (null != o) {
      if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new e7(i ? r2 : "highWaterMark", o);
      return Math.floor(o);
    }
    return t2.objectMode ? 16 : 16384;
  } };
}
rd("ERR_INVALID_OPT_VALUE", function(e7, t2) {
  return 'The value "' + t2 + '" is invalid for option "' + e7 + '"';
}, TypeError), rd("ERR_INVALID_ARG_TYPE", function(e7, t2, n2) {
  var r2, i, o;
  if ("string" == typeof t2 && (i = "not ", t2.substr(0, i.length) === i) ? (r2 = "must not be", t2 = t2.replace(/^not /, "")) : r2 = "must be", function(e8, t3, n3) {
    return (void 0 === n3 || n3 > e8.length) && (n3 = e8.length), e8.substring(n3 - t3.length, n3) === t3;
  }(e7, " argument")) o = "The ".concat(e7, " ").concat(r2, " ").concat(id(t2, "type"));
  else {
    var s = function(e8, t3, n3) {
      return "number" != typeof n3 && (n3 = 0), !(n3 + t3.length > e8.length) && -1 !== e8.indexOf(t3, n3);
    }(e7, ".") ? "property" : "argument";
    o = 'The "'.concat(e7, '" ').concat(s, " ").concat(r2, " ").concat(id(t2, "type"));
  }
  return o += ". Received type ".concat(typeof n2);
}, TypeError), rd("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), rd("ERR_METHOD_NOT_IMPLEMENTED", function(e7) {
  return "The " + e7 + " method is not implemented";
}), rd("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), rd("ERR_STREAM_DESTROYED", function(e7) {
  return "Cannot call " + e7 + " after a stream was destroyed";
}), rd("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), rd("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), rd("ERR_STREAM_WRITE_AFTER_END", "write after end"), rd("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), rd("ERR_UNKNOWN_ENCODING", function(e7) {
  return "Unknown encoding: " + e7;
}, TypeError), rd("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), Ql.codes = nd;
var sd;
var ad;
var cd;
var ld;
var dd;
var ud;
var hd = "function" == typeof Object.create ? function(e7, t2) {
  e7.super_ = t2, e7.prototype = Object.create(t2.prototype, { constructor: { value: e7, enumerable: false, writable: true, configurable: true } });
} : function(e7, t2) {
  e7.super_ = t2;
  var n2 = function() {
  };
  n2.prototype = t2.prototype, e7.prototype = new n2(), e7.prototype.constructor = e7;
};
var fd = ue(Object.freeze({ __proto__: null, default: hd }));
function pd() {
  if (ad) return sd;
  function e7(e8) {
    try {
      if (!le.localStorage) return false;
    } catch (e9) {
      return false;
    }
    var t2 = le.localStorage[e8];
    return null != t2 && "true" === String(t2).toLowerCase();
  }
  return ad = 1, sd = function(t2, n2) {
    if (e7("noDeprecation")) return t2;
    var r2 = false;
    return function() {
      if (!r2) {
        if (e7("throwDeprecation")) throw new Error(n2);
        e7("traceDeprecation") ? console.trace(n2) : console.warn(n2), r2 = true;
      }
      return t2.apply(this, arguments);
    };
  }, sd;
}
function gd() {
  if (ld) return cd;
  function e7(e8) {
    var t3 = this;
    this.next = null, this.entry = null, this.finish = function() {
      !function(e9, t4, n3) {
        var r3 = e9.entry;
        e9.entry = null;
        for (; r3; ) {
          var i2 = r3.callback;
          t4.pendingcb--, i2(n3), r3 = r3.next;
        }
        t4.corkedRequestsFree.next = e9;
      }(t3, e8);
    };
  }
  var t2;
  ld = 1, cd = E2, E2.WritableState = w2;
  var n2 = { deprecate: pd() }, r2 = il(), i = sl.Buffer, o = (void 0 !== le ? le : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {
  };
  var s, a2 = Xl(), c2 = od().getHighWaterMark, l2 = Ql.codes, d2 = l2.ERR_INVALID_ARG_TYPE, u2 = l2.ERR_METHOD_NOT_IMPLEMENTED, h2 = l2.ERR_MULTIPLE_CALLBACK, f3 = l2.ERR_STREAM_CANNOT_PIPE, p2 = l2.ERR_STREAM_DESTROYED, g2 = l2.ERR_STREAM_NULL_VALUES, m2 = l2.ERR_STREAM_WRITE_AFTER_END, y2 = l2.ERR_UNKNOWN_ENCODING, v2 = a2.errorOrDestroy;
  function b2() {
  }
  function w2(n3, r3, i2) {
    t2 = t2 || md(), n3 = n3 || {}, "boolean" != typeof i2 && (i2 = r3 instanceof t2), this.objectMode = !!n3.objectMode, i2 && (this.objectMode = this.objectMode || !!n3.writableObjectMode), this.highWaterMark = c2(this, n3, "writableHighWaterMark", i2), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
    var o2 = false === n3.decodeStrings;
    this.decodeStrings = !o2, this.defaultEncoding = n3.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(e8) {
      !function(e9, t3) {
        var n4 = e9._writableState, r4 = n4.sync, i3 = n4.writecb;
        if ("function" != typeof i3) throw new h2();
        if (function(e10) {
          e10.writing = false, e10.writecb = null, e10.length -= e10.writelen, e10.writelen = 0;
        }(n4), t3) !function(e10, t4, n5, r5, i4) {
          --t4.pendingcb, n5 ? (ca.nextTick(i4, r5), ca.nextTick(M2, e10, t4), e10._writableState.errorEmitted = true, v2(e10, r5)) : (i4(r5), e10._writableState.errorEmitted = true, v2(e10, r5), M2(e10, t4));
        }(e9, n4, r4, t3, i3);
        else {
          var o3 = k2(n4) || e9.destroyed;
          o3 || n4.corked || n4.bufferProcessing || !n4.bufferedRequest || _2(e9, n4), r4 ? ca.nextTick(S2, e9, n4, o3, i3) : S2(e9, n4, o3, i3);
        }
      }(r3, e8);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = false !== n3.emitClose, this.autoDestroy = !!n3.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e7(this);
  }
  function E2(e8) {
    var n3 = this instanceof (t2 = t2 || md());
    if (!n3 && !s.call(E2, this)) return new E2(e8);
    this._writableState = new w2(e8, this, n3), this.writable = true, e8 && ("function" == typeof e8.write && (this._write = e8.write), "function" == typeof e8.writev && (this._writev = e8.writev), "function" == typeof e8.destroy && (this._destroy = e8.destroy), "function" == typeof e8.final && (this._final = e8.final)), r2.call(this);
  }
  function C2(e8, t3, n3, r3, i2, o2, s2) {
    t3.writelen = r3, t3.writecb = s2, t3.writing = true, t3.sync = true, t3.destroyed ? t3.onwrite(new p2("write")) : n3 ? e8._writev(i2, t3.onwrite) : e8._write(i2, o2, t3.onwrite), t3.sync = false;
  }
  function S2(e8, t3, n3, r3) {
    n3 || function(e9, t4) {
      0 === t4.length && t4.needDrain && (t4.needDrain = false, e9.emit("drain"));
    }(e8, t3), t3.pendingcb--, r3(), M2(e8, t3);
  }
  function _2(t3, n3) {
    n3.bufferProcessing = true;
    var r3 = n3.bufferedRequest;
    if (t3._writev && r3 && r3.next) {
      var i2 = n3.bufferedRequestCount, o2 = new Array(i2), s2 = n3.corkedRequestsFree;
      s2.entry = r3;
      for (var a3 = 0, c3 = true; r3; ) o2[a3] = r3, r3.isBuf || (c3 = false), r3 = r3.next, a3 += 1;
      o2.allBuffers = c3, C2(t3, n3, true, n3.length, o2, "", s2.finish), n3.pendingcb++, n3.lastBufferedRequest = null, s2.next ? (n3.corkedRequestsFree = s2.next, s2.next = null) : n3.corkedRequestsFree = new e7(n3), n3.bufferedRequestCount = 0;
    } else {
      for (; r3; ) {
        var l3 = r3.chunk, d3 = r3.encoding, u3 = r3.callback;
        if (C2(t3, n3, false, n3.objectMode ? 1 : l3.length, l3, d3, u3), r3 = r3.next, n3.bufferedRequestCount--, n3.writing) break;
      }
      null === r3 && (n3.lastBufferedRequest = null);
    }
    n3.bufferedRequest = r3, n3.bufferProcessing = false;
  }
  function k2(e8) {
    return e8.ending && 0 === e8.length && null === e8.bufferedRequest && !e8.finished && !e8.writing;
  }
  function x2(e8, t3) {
    e8._final(function(n3) {
      t3.pendingcb--, n3 && v2(e8, n3), t3.prefinished = true, e8.emit("prefinish"), M2(e8, t3);
    });
  }
  function M2(e8, t3) {
    var n3 = k2(t3);
    if (n3 && (function(e9, t4) {
      t4.prefinished || t4.finalCalled || ("function" != typeof e9._final || t4.destroyed ? (t4.prefinished = true, e9.emit("prefinish")) : (t4.pendingcb++, t4.finalCalled = true, ca.nextTick(x2, e9, t4)));
    }(e8, t3), 0 === t3.pendingcb && (t3.finished = true, e8.emit("finish"), t3.autoDestroy))) {
      var r3 = e8._readableState;
      (!r3 || r3.autoDestroy && r3.endEmitted) && e8.destroy();
    }
    return n3;
  }
  return fd(E2, r2), w2.prototype.getBuffer = function() {
    for (var e8 = this.bufferedRequest, t3 = []; e8; ) t3.push(e8), e8 = e8.next;
    return t3;
  }, function() {
    try {
      Object.defineProperty(w2.prototype, "buffer", { get: n2.deprecate(function() {
        return this.getBuffer();
      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
    } catch (e8) {
    }
  }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (s = Function.prototype[Symbol.hasInstance], Object.defineProperty(E2, Symbol.hasInstance, { value: function(e8) {
    return !!s.call(this, e8) || this === E2 && (e8 && e8._writableState instanceof w2);
  } })) : s = function(e8) {
    return e8 instanceof this;
  }, E2.prototype.pipe = function() {
    v2(this, new f3());
  }, E2.prototype.write = function(e8, t3, n3) {
    var r3, s2 = this._writableState, a3 = false, c3 = !s2.objectMode && (r3 = e8, i.isBuffer(r3) || r3 instanceof o);
    return c3 && !i.isBuffer(e8) && (e8 = function(e9) {
      return i.from(e9);
    }(e8)), "function" == typeof t3 && (n3 = t3, t3 = null), c3 ? t3 = "buffer" : t3 || (t3 = s2.defaultEncoding), "function" != typeof n3 && (n3 = b2), s2.ending ? function(e9, t4) {
      var n4 = new m2();
      v2(e9, n4), ca.nextTick(t4, n4);
    }(this, n3) : (c3 || function(e9, t4, n4, r4) {
      var i2;
      return null === n4 ? i2 = new g2() : "string" == typeof n4 || t4.objectMode || (i2 = new d2("chunk", ["string", "Buffer"], n4)), !i2 || (v2(e9, i2), ca.nextTick(r4, i2), false);
    }(this, s2, e8, n3)) && (s2.pendingcb++, a3 = function(e9, t4, n4, r4, o2, s3) {
      if (!n4) {
        var a4 = function(e10, t5, n5) {
          e10.objectMode || false === e10.decodeStrings || "string" != typeof t5 || (t5 = i.from(t5, n5));
          return t5;
        }(t4, r4, o2);
        r4 !== a4 && (n4 = true, o2 = "buffer", r4 = a4);
      }
      var c4 = t4.objectMode ? 1 : r4.length;
      t4.length += c4;
      var l3 = t4.length < t4.highWaterMark;
      l3 || (t4.needDrain = true);
      if (t4.writing || t4.corked) {
        var d3 = t4.lastBufferedRequest;
        t4.lastBufferedRequest = { chunk: r4, encoding: o2, isBuf: n4, callback: s3, next: null }, d3 ? d3.next = t4.lastBufferedRequest : t4.bufferedRequest = t4.lastBufferedRequest, t4.bufferedRequestCount += 1;
      } else C2(e9, t4, false, c4, r4, o2, s3);
      return l3;
    }(this, s2, c3, e8, t3, n3)), a3;
  }, E2.prototype.cork = function() {
    this._writableState.corked++;
  }, E2.prototype.uncork = function() {
    var e8 = this._writableState;
    e8.corked && (e8.corked--, e8.writing || e8.corked || e8.bufferProcessing || !e8.bufferedRequest || _2(this, e8));
  }, E2.prototype.setDefaultEncoding = function(e8) {
    if ("string" == typeof e8 && (e8 = e8.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e8 + "").toLowerCase()) > -1)) throw new y2(e8);
    return this._writableState.defaultEncoding = e8, this;
  }, Object.defineProperty(E2.prototype, "writableBuffer", { enumerable: false, get: function() {
    return this._writableState && this._writableState.getBuffer();
  } }), Object.defineProperty(E2.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
    return this._writableState.highWaterMark;
  } }), E2.prototype._write = function(e8, t3, n3) {
    n3(new u2("_write()"));
  }, E2.prototype._writev = null, E2.prototype.end = function(e8, t3, n3) {
    var r3 = this._writableState;
    return "function" == typeof e8 ? (n3 = e8, e8 = null, t3 = null) : "function" == typeof t3 && (n3 = t3, t3 = null), null != e8 && this.write(e8, t3), r3.corked && (r3.corked = 1, this.uncork()), r3.ending || function(e9, t4, n4) {
      t4.ending = true, M2(e9, t4), n4 && (t4.finished ? ca.nextTick(n4) : e9.once("finish", n4));
      t4.ended = true, e9.writable = false;
    }(this, r3, n3), this;
  }, Object.defineProperty(E2.prototype, "writableLength", { enumerable: false, get: function() {
    return this._writableState.length;
  } }), Object.defineProperty(E2.prototype, "destroyed", { enumerable: false, get: function() {
    return void 0 !== this._writableState && this._writableState.destroyed;
  }, set: function(e8) {
    this._writableState && (this._writableState.destroyed = e8);
  } }), E2.prototype.destroy = a2.destroy, E2.prototype._undestroy = a2.undestroy, E2.prototype._destroy = function(e8, t3) {
    t3(e8);
  }, cd;
}
function md() {
  if (ud) return dd;
  ud = 1;
  var e7 = Object.keys || function(e8) {
    var t3 = [];
    for (var n3 in e8) t3.push(n3);
    return t3;
  };
  dd = s;
  var t2 = Od(), n2 = gd();
  fd(s, t2);
  for (var r2 = e7(n2.prototype), i = 0; i < r2.length; i++) {
    var o = r2[i];
    s.prototype[o] || (s.prototype[o] = n2.prototype[o]);
  }
  function s(e8) {
    if (!(this instanceof s)) return new s(e8);
    t2.call(this, e8), n2.call(this, e8), this.allowHalfOpen = true, e8 && (false === e8.readable && (this.readable = false), false === e8.writable && (this.writable = false), false === e8.allowHalfOpen && (this.allowHalfOpen = false, this.once("end", a2)));
  }
  function a2() {
    this._writableState.ended || ca.nextTick(c2, this);
  }
  function c2(e8) {
    e8.end();
  }
  return Object.defineProperty(s.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
    return this._writableState.highWaterMark;
  } }), Object.defineProperty(s.prototype, "writableBuffer", { enumerable: false, get: function() {
    return this._writableState && this._writableState.getBuffer();
  } }), Object.defineProperty(s.prototype, "writableLength", { enumerable: false, get: function() {
    return this._writableState.length;
  } }), Object.defineProperty(s.prototype, "destroyed", { enumerable: false, get: function() {
    return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed);
  }, set: function(e8) {
    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e8, this._writableState.destroyed = e8);
  } }), dd;
}
var yd = S.isEncoding || function(e7) {
  switch (e7 && e7.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true;
    default:
      return false;
  }
};
function vd(e7) {
  switch (this.encoding = (e7 || "utf8").toLowerCase().replace(/[-_]/, ""), function(e8) {
    if (e8 && !yd(e8)) throw new Error("Unknown encoding: " + e8);
  }(e7), this.encoding) {
    case "utf8":
      this.surrogateSize = 3;
      break;
    case "ucs2":
    case "utf16le":
      this.surrogateSize = 2, this.detectIncompleteChar = wd;
      break;
    case "base64":
      this.surrogateSize = 3, this.detectIncompleteChar = Ed;
      break;
    default:
      return void (this.write = bd);
  }
  this.charBuffer = new S(6), this.charReceived = 0, this.charLength = 0;
}
function bd(e7) {
  return e7.toString(this.encoding);
}
function wd(e7) {
  this.charReceived = e7.length % 2, this.charLength = this.charReceived ? 2 : 0;
}
function Ed(e7) {
  this.charReceived = e7.length % 3, this.charLength = this.charReceived ? 3 : 0;
}
vd.prototype.write = function(e7) {
  for (var t2 = ""; this.charLength; ) {
    var n2 = e7.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e7.length;
    if (e7.copy(this.charBuffer, this.charReceived, 0, n2), this.charReceived += n2, this.charReceived < this.charLength) return "";
    if (e7 = e7.slice(n2, e7.length), !((i = (t2 = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(t2.length - 1)) >= 55296 && i <= 56319)) {
      if (this.charReceived = this.charLength = 0, 0 === e7.length) return t2;
      break;
    }
    this.charLength += this.surrogateSize, t2 = "";
  }
  this.detectIncompleteChar(e7);
  var r2 = e7.length;
  this.charLength && (e7.copy(this.charBuffer, 0, e7.length - this.charReceived, r2), r2 -= this.charReceived);
  var i;
  r2 = (t2 += e7.toString(this.encoding, 0, r2)).length - 1;
  if ((i = t2.charCodeAt(r2)) >= 55296 && i <= 56319) {
    var o = this.surrogateSize;
    return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), e7.copy(this.charBuffer, 0, 0, o), t2.substring(0, r2);
  }
  return t2;
}, vd.prototype.detectIncompleteChar = function(e7) {
  for (var t2 = e7.length >= 3 ? 3 : e7.length; t2 > 0; t2--) {
    var n2 = e7[e7.length - t2];
    if (1 == t2 && n2 >> 5 == 6) {
      this.charLength = 2;
      break;
    }
    if (t2 <= 2 && n2 >> 4 == 14) {
      this.charLength = 3;
      break;
    }
    if (t2 <= 3 && n2 >> 3 == 30) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = t2;
}, vd.prototype.end = function(e7) {
  var t2 = "";
  if (e7 && e7.length && (t2 = this.write(e7)), this.charReceived) {
    var n2 = this.charReceived, r2 = this.charBuffer, i = this.encoding;
    t2 += r2.slice(0, n2).toString(i);
  }
  return t2;
};
var Cd = ue(Object.freeze({ __proto__: null, StringDecoder: vd }));
var Sd = Ql.codes.ERR_STREAM_PREMATURE_CLOSE;
function _d() {
}
var kd;
var xd;
var Md;
var Ad;
var Id;
var Rd;
var Pd = function e5(t2, n2, r2) {
  if ("function" == typeof n2) return e5(t2, null, n2);
  n2 || (n2 = {}), r2 = /* @__PURE__ */ function(e7) {
    var t3 = false;
    return function() {
      if (!t3) {
        t3 = true;
        for (var n3 = arguments.length, r3 = new Array(n3), i2 = 0; i2 < n3; i2++) r3[i2] = arguments[i2];
        e7.apply(this, r3);
      }
    };
  }(r2 || _d);
  var i = n2.readable || false !== n2.readable && t2.readable, o = n2.writable || false !== n2.writable && t2.writable, s = function() {
    t2.writable || c2();
  }, a2 = t2._writableState && t2._writableState.finished, c2 = function() {
    o = false, a2 = true, i || r2.call(t2);
  }, l2 = t2._readableState && t2._readableState.endEmitted, d2 = function() {
    i = false, l2 = true, o || r2.call(t2);
  }, u2 = function(e7) {
    r2.call(t2, e7);
  }, h2 = function() {
    var e7;
    return i && !l2 ? (t2._readableState && t2._readableState.ended || (e7 = new Sd()), r2.call(t2, e7)) : o && !a2 ? (t2._writableState && t2._writableState.ended || (e7 = new Sd()), r2.call(t2, e7)) : void 0;
  }, f3 = function() {
    t2.req.on("finish", c2);
  };
  return !function(e7) {
    return e7.setHeader && "function" == typeof e7.abort;
  }(t2) ? o && !t2._writableState && (t2.on("end", s), t2.on("close", s)) : (t2.on("complete", c2), t2.on("abort", h2), t2.req ? f3() : t2.on("request", f3)), t2.on("end", d2), t2.on("finish", c2), false !== n2.error && t2.on("error", u2), t2.on("close", h2), function() {
    t2.removeListener("complete", c2), t2.removeListener("abort", h2), t2.removeListener("request", f3), t2.req && t2.req.removeListener("finish", c2), t2.removeListener("end", s), t2.removeListener("close", s), t2.removeListener("finish", c2), t2.removeListener("end", d2), t2.removeListener("error", u2), t2.removeListener("close", h2);
  };
};
function Ld() {
  if (xd) return kd;
  var e7;
  function t2(e8, t3, n3) {
    return (t3 = function(e9) {
      var t4 = function(e10, t5) {
        if ("object" != typeof e10 || null === e10) return e10;
        var n4 = e10[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r3 = n4.call(e10, t5 || "default");
          if ("object" != typeof r3) return r3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t5 ? String : Number)(e10);
      }(e9, "string");
      return "symbol" == typeof t4 ? t4 : String(t4);
    }(t3)) in e8 ? Object.defineProperty(e8, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e8[t3] = n3, e8;
  }
  xd = 1;
  var n2 = Pd, r2 = Symbol("lastResolve"), i = Symbol("lastReject"), o = Symbol("error"), s = Symbol("ended"), a2 = Symbol("lastPromise"), c2 = Symbol("handlePromise"), l2 = Symbol("stream");
  function d2(e8, t3) {
    return { value: e8, done: t3 };
  }
  function u2(e8) {
    var t3 = e8[r2];
    if (null !== t3) {
      var n3 = e8[l2].read();
      null !== n3 && (e8[a2] = null, e8[r2] = null, e8[i] = null, t3(d2(n3, false)));
    }
  }
  function h2(e8) {
    ca.nextTick(u2, e8);
  }
  var f3 = Object.getPrototypeOf(function() {
  }), p2 = Object.setPrototypeOf((t2(e7 = { get stream() {
    return this[l2];
  }, next: function() {
    var e8 = this, t3 = this[o];
    if (null !== t3) return Promise.reject(t3);
    if (this[s]) return Promise.resolve(d2(void 0, true));
    if (this[l2].destroyed) return new Promise(function(t4, n4) {
      ca.nextTick(function() {
        e8[o] ? n4(e8[o]) : t4(d2(void 0, true));
      });
    });
    var n3, r3 = this[a2];
    if (r3) n3 = new Promise(/* @__PURE__ */ function(e9, t4) {
      return function(n4, r4) {
        e9.then(function() {
          t4[s] ? n4(d2(void 0, true)) : t4[c2](n4, r4);
        }, r4);
      };
    }(r3, this));
    else {
      var i2 = this[l2].read();
      if (null !== i2) return Promise.resolve(d2(i2, false));
      n3 = new Promise(this[c2]);
    }
    return this[a2] = n3, n3;
  } }, Symbol.asyncIterator, function() {
    return this;
  }), t2(e7, "return", function() {
    var e8 = this;
    return new Promise(function(t3, n3) {
      e8[l2].destroy(null, function(e9) {
        e9 ? n3(e9) : t3(d2(void 0, true));
      });
    });
  }), e7), f3);
  return kd = function(e8) {
    var u3, f4 = Object.create(p2, (t2(u3 = {}, l2, { value: e8, writable: true }), t2(u3, r2, { value: null, writable: true }), t2(u3, i, { value: null, writable: true }), t2(u3, o, { value: null, writable: true }), t2(u3, s, { value: e8._readableState.endEmitted, writable: true }), t2(u3, c2, { value: function(e9, t3) {
      var n3 = f4[l2].read();
      n3 ? (f4[a2] = null, f4[r2] = null, f4[i] = null, e9(d2(n3, false))) : (f4[r2] = e9, f4[i] = t3);
    }, writable: true }), u3));
    return f4[a2] = null, n2(e8, function(e9) {
      if (e9 && "ERR_STREAM_PREMATURE_CLOSE" !== e9.code) {
        var t3 = f4[i];
        return null !== t3 && (f4[a2] = null, f4[r2] = null, f4[i] = null, t3(e9)), void (f4[o] = e9);
      }
      var n3 = f4[r2];
      null !== n3 && (f4[a2] = null, f4[r2] = null, f4[i] = null, n3(d2(void 0, true))), f4[s] = true;
    }), e8.on("readable", h2.bind(null, f4)), f4;
  }, kd;
}
function Od() {
  if (Rd) return Id;
  var e7;
  Rd = 1, Id = E2, E2.ReadableState = w2, sc.EventEmitter;
  var t2 = function(e8, t3) {
    return e8.listeners(t3).length;
  }, n2 = il(), r2 = sl.Buffer, i = (void 0 !== le ? le : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {
  };
  var o, s = Yl;
  o = s && s.debuglog ? s.debuglog("stream") : function() {
  };
  var a2, c2, l2, d2 = Jl(), u2 = Xl(), h2 = od().getHighWaterMark, f3 = Ql.codes, p2 = f3.ERR_INVALID_ARG_TYPE, g2 = f3.ERR_STREAM_PUSH_AFTER_EOF, m2 = f3.ERR_METHOD_NOT_IMPLEMENTED, y2 = f3.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
  fd(E2, n2);
  var v2 = u2.errorOrDestroy, b2 = ["error", "close", "destroy", "pause", "resume"];
  function w2(t3, n3, r3) {
    e7 = e7 || md(), t3 = t3 || {}, "boolean" != typeof r3 && (r3 = n3 instanceof e7), this.objectMode = !!t3.objectMode, r3 && (this.objectMode = this.objectMode || !!t3.readableObjectMode), this.highWaterMark = h2(this, t3, "readableHighWaterMark", r3), this.buffer = new d2(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = false !== t3.emitClose, this.autoDestroy = !!t3.autoDestroy, this.destroyed = false, this.defaultEncoding = t3.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t3.encoding && (a2 || (a2 = Cd.StringDecoder), this.decoder = new a2(t3.encoding), this.encoding = t3.encoding);
  }
  function E2(t3) {
    if (e7 = e7 || md(), !(this instanceof E2)) return new E2(t3);
    var r3 = this instanceof e7;
    this._readableState = new w2(t3, this, r3), this.readable = true, t3 && ("function" == typeof t3.read && (this._read = t3.read), "function" == typeof t3.destroy && (this._destroy = t3.destroy)), n2.call(this);
  }
  function C2(e8, t3, n3, s2, a3) {
    o("readableAddChunk", t3);
    var c3, l3 = e8._readableState;
    if (null === t3) l3.reading = false, function(e9, t4) {
      if (o("onEofChunk"), t4.ended) return;
      if (t4.decoder) {
        var n4 = t4.decoder.end();
        n4 && n4.length && (t4.buffer.push(n4), t4.length += t4.objectMode ? 1 : n4.length);
      }
      t4.ended = true, t4.sync ? x2(e9) : (t4.needReadable = false, t4.emittedReadable || (t4.emittedReadable = true, M2(e9)));
    }(e8, l3);
    else if (a3 || (c3 = function(e9, t4) {
      var n4;
      o2 = t4, r2.isBuffer(o2) || o2 instanceof i || "string" == typeof t4 || void 0 === t4 || e9.objectMode || (n4 = new p2("chunk", ["string", "Buffer", "Uint8Array"], t4));
      var o2;
      return n4;
    }(l3, t3)), c3) v2(e8, c3);
    else if (l3.objectMode || t3 && t3.length > 0) if ("string" == typeof t3 || l3.objectMode || Object.getPrototypeOf(t3) === r2.prototype || (t3 = function(e9) {
      return r2.from(e9);
    }(t3)), s2) l3.endEmitted ? v2(e8, new y2()) : S2(e8, l3, t3, true);
    else if (l3.ended) v2(e8, new g2());
    else {
      if (l3.destroyed) return false;
      l3.reading = false, l3.decoder && !n3 ? (t3 = l3.decoder.write(t3), l3.objectMode || 0 !== t3.length ? S2(e8, l3, t3, false) : A2(e8, l3)) : S2(e8, l3, t3, false);
    }
    else s2 || (l3.reading = false, A2(e8, l3));
    return !l3.ended && (l3.length < l3.highWaterMark || 0 === l3.length);
  }
  function S2(e8, t3, n3, r3) {
    t3.flowing && 0 === t3.length && !t3.sync ? (t3.awaitDrain = 0, e8.emit("data", n3)) : (t3.length += t3.objectMode ? 1 : n3.length, r3 ? t3.buffer.unshift(n3) : t3.buffer.push(n3), t3.needReadable && x2(e8)), A2(e8, t3);
  }
  Object.defineProperty(E2.prototype, "destroyed", { enumerable: false, get: function() {
    return void 0 !== this._readableState && this._readableState.destroyed;
  }, set: function(e8) {
    this._readableState && (this._readableState.destroyed = e8);
  } }), E2.prototype.destroy = u2.destroy, E2.prototype._undestroy = u2.undestroy, E2.prototype._destroy = function(e8, t3) {
    t3(e8);
  }, E2.prototype.push = function(e8, t3) {
    var n3, i2 = this._readableState;
    return i2.objectMode ? n3 = true : "string" == typeof e8 && ((t3 = t3 || i2.defaultEncoding) !== i2.encoding && (e8 = r2.from(e8, t3), t3 = ""), n3 = true), C2(this, e8, t3, false, n3);
  }, E2.prototype.unshift = function(e8) {
    return C2(this, e8, null, true, false);
  }, E2.prototype.isPaused = function() {
    return false === this._readableState.flowing;
  }, E2.prototype.setEncoding = function(e8) {
    a2 || (a2 = Cd.StringDecoder);
    var t3 = new a2(e8);
    this._readableState.decoder = t3, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var n3 = this._readableState.buffer.head, r3 = ""; null !== n3; ) r3 += t3.write(n3.data), n3 = n3.next;
    return this._readableState.buffer.clear(), "" !== r3 && this._readableState.buffer.push(r3), this._readableState.length = r3.length, this;
  };
  var _2 = 1073741824;
  function k2(e8, t3) {
    return e8 <= 0 || 0 === t3.length && t3.ended ? 0 : t3.objectMode ? 1 : e8 != e8 ? t3.flowing && t3.length ? t3.buffer.head.data.length : t3.length : (e8 > t3.highWaterMark && (t3.highWaterMark = function(e9) {
      return e9 >= _2 ? e9 = _2 : (e9--, e9 |= e9 >>> 1, e9 |= e9 >>> 2, e9 |= e9 >>> 4, e9 |= e9 >>> 8, e9 |= e9 >>> 16, e9++), e9;
    }(e8)), e8 <= t3.length ? e8 : t3.ended ? t3.length : (t3.needReadable = true, 0));
  }
  function x2(e8) {
    var t3 = e8._readableState;
    o("emitReadable", t3.needReadable, t3.emittedReadable), t3.needReadable = false, t3.emittedReadable || (o("emitReadable", t3.flowing), t3.emittedReadable = true, ca.nextTick(M2, e8));
  }
  function M2(e8) {
    var t3 = e8._readableState;
    o("emitReadable_", t3.destroyed, t3.length, t3.ended), t3.destroyed || !t3.length && !t3.ended || (e8.emit("readable"), t3.emittedReadable = false), t3.needReadable = !t3.flowing && !t3.ended && t3.length <= t3.highWaterMark, O2(e8);
  }
  function A2(e8, t3) {
    t3.readingMore || (t3.readingMore = true, ca.nextTick(I2, e8, t3));
  }
  function I2(e8, t3) {
    for (; !t3.reading && !t3.ended && (t3.length < t3.highWaterMark || t3.flowing && 0 === t3.length); ) {
      var n3 = t3.length;
      if (o("maybeReadMore read 0"), e8.read(0), n3 === t3.length) break;
    }
    t3.readingMore = false;
  }
  function R2(e8) {
    var t3 = e8._readableState;
    t3.readableListening = e8.listenerCount("readable") > 0, t3.resumeScheduled && !t3.paused ? t3.flowing = true : e8.listenerCount("data") > 0 && e8.resume();
  }
  function P2(e8) {
    o("readable nexttick read 0"), e8.read(0);
  }
  function L2(e8, t3) {
    o("resume", t3.reading), t3.reading || e8.read(0), t3.resumeScheduled = false, e8.emit("resume"), O2(e8), t3.flowing && !t3.reading && e8.read(0);
  }
  function O2(e8) {
    var t3 = e8._readableState;
    for (o("flow", t3.flowing); t3.flowing && null !== e8.read(); ) ;
  }
  function T2(e8, t3) {
    return 0 === t3.length ? null : (t3.objectMode ? n3 = t3.buffer.shift() : !e8 || e8 >= t3.length ? (n3 = t3.decoder ? t3.buffer.join("") : 1 === t3.buffer.length ? t3.buffer.first() : t3.buffer.concat(t3.length), t3.buffer.clear()) : n3 = t3.buffer.consume(e8, t3.decoder), n3);
    var n3;
  }
  function N2(e8) {
    var t3 = e8._readableState;
    o("endReadable", t3.endEmitted), t3.endEmitted || (t3.ended = true, ca.nextTick(D2, t3, e8));
  }
  function D2(e8, t3) {
    if (o("endReadableNT", e8.endEmitted, e8.length), !e8.endEmitted && 0 === e8.length && (e8.endEmitted = true, t3.readable = false, t3.emit("end"), e8.autoDestroy)) {
      var n3 = t3._writableState;
      (!n3 || n3.autoDestroy && n3.finished) && t3.destroy();
    }
  }
  function $2(e8, t3) {
    for (var n3 = 0, r3 = e8.length; n3 < r3; n3++) if (e8[n3] === t3) return n3;
    return -1;
  }
  return E2.prototype.read = function(e8) {
    o("read", e8), e8 = parseInt(e8, 10);
    var t3 = this._readableState, n3 = e8;
    if (0 !== e8 && (t3.emittedReadable = false), 0 === e8 && t3.needReadable && ((0 !== t3.highWaterMark ? t3.length >= t3.highWaterMark : t3.length > 0) || t3.ended)) return o("read: emitReadable", t3.length, t3.ended), 0 === t3.length && t3.ended ? N2(this) : x2(this), null;
    if (0 === (e8 = k2(e8, t3)) && t3.ended) return 0 === t3.length && N2(this), null;
    var r3, i2 = t3.needReadable;
    return o("need readable", i2), (0 === t3.length || t3.length - e8 < t3.highWaterMark) && o("length less than watermark", i2 = true), t3.ended || t3.reading ? o("reading or ended", i2 = false) : i2 && (o("do read"), t3.reading = true, t3.sync = true, 0 === t3.length && (t3.needReadable = true), this._read(t3.highWaterMark), t3.sync = false, t3.reading || (e8 = k2(n3, t3))), null === (r3 = e8 > 0 ? T2(e8, t3) : null) ? (t3.needReadable = t3.length <= t3.highWaterMark, e8 = 0) : (t3.length -= e8, t3.awaitDrain = 0), 0 === t3.length && (t3.ended || (t3.needReadable = true), n3 !== e8 && t3.ended && N2(this)), null !== r3 && this.emit("data", r3), r3;
  }, E2.prototype._read = function(e8) {
    v2(this, new m2("_read()"));
  }, E2.prototype.pipe = function(e8, n3) {
    var r3 = this, i2 = this._readableState;
    switch (i2.pipesCount) {
      case 0:
        i2.pipes = e8;
        break;
      case 1:
        i2.pipes = [i2.pipes, e8];
        break;
      default:
        i2.pipes.push(e8);
    }
    i2.pipesCount += 1, o("pipe count=%d opts=%j", i2.pipesCount, n3);
    var s2 = (!n3 || false !== n3.end) && e8 !== ca.stdout && e8 !== ca.stderr ? c3 : g3;
    function a3(t3, n4) {
      o("onunpipe"), t3 === r3 && n4 && false === n4.hasUnpiped && (n4.hasUnpiped = true, o("cleanup"), e8.removeListener("close", f4), e8.removeListener("finish", p3), e8.removeListener("drain", l3), e8.removeListener("error", h3), e8.removeListener("unpipe", a3), r3.removeListener("end", c3), r3.removeListener("end", g3), r3.removeListener("data", u3), d3 = true, !i2.awaitDrain || e8._writableState && !e8._writableState.needDrain || l3());
    }
    function c3() {
      o("onend"), e8.end();
    }
    i2.endEmitted ? ca.nextTick(s2) : r3.once("end", s2), e8.on("unpipe", a3);
    var l3 = /* @__PURE__ */ function(e9) {
      return function() {
        var n4 = e9._readableState;
        o("pipeOnDrain", n4.awaitDrain), n4.awaitDrain && n4.awaitDrain--, 0 === n4.awaitDrain && t2(e9, "data") && (n4.flowing = true, O2(e9));
      };
    }(r3);
    e8.on("drain", l3);
    var d3 = false;
    function u3(t3) {
      o("ondata");
      var n4 = e8.write(t3);
      o("dest.write", n4), false === n4 && ((1 === i2.pipesCount && i2.pipes === e8 || i2.pipesCount > 1 && -1 !== $2(i2.pipes, e8)) && !d3 && (o("false write response, pause", i2.awaitDrain), i2.awaitDrain++), r3.pause());
    }
    function h3(n4) {
      o("onerror", n4), g3(), e8.removeListener("error", h3), 0 === t2(e8, "error") && v2(e8, n4);
    }
    function f4() {
      e8.removeListener("finish", p3), g3();
    }
    function p3() {
      o("onfinish"), e8.removeListener("close", f4), g3();
    }
    function g3() {
      o("unpipe"), r3.unpipe(e8);
    }
    return r3.on("data", u3), function(e9, t3, n4) {
      if ("function" == typeof e9.prependListener) return e9.prependListener(t3, n4);
      e9._events && e9._events[t3] ? Array.isArray(e9._events[t3]) ? e9._events[t3].unshift(n4) : e9._events[t3] = [n4, e9._events[t3]] : e9.on(t3, n4);
    }(e8, "error", h3), e8.once("close", f4), e8.once("finish", p3), e8.emit("pipe", r3), i2.flowing || (o("pipe resume"), r3.resume()), e8;
  }, E2.prototype.unpipe = function(e8) {
    var t3 = this._readableState, n3 = { hasUnpiped: false };
    if (0 === t3.pipesCount) return this;
    if (1 === t3.pipesCount) return e8 && e8 !== t3.pipes || (e8 || (e8 = t3.pipes), t3.pipes = null, t3.pipesCount = 0, t3.flowing = false, e8 && e8.emit("unpipe", this, n3)), this;
    if (!e8) {
      var r3 = t3.pipes, i2 = t3.pipesCount;
      t3.pipes = null, t3.pipesCount = 0, t3.flowing = false;
      for (var o2 = 0; o2 < i2; o2++) r3[o2].emit("unpipe", this, { hasUnpiped: false });
      return this;
    }
    var s2 = $2(t3.pipes, e8);
    return -1 === s2 || (t3.pipes.splice(s2, 1), t3.pipesCount -= 1, 1 === t3.pipesCount && (t3.pipes = t3.pipes[0]), e8.emit("unpipe", this, n3)), this;
  }, E2.prototype.on = function(e8, t3) {
    var r3 = n2.prototype.on.call(this, e8, t3), i2 = this._readableState;
    return "data" === e8 ? (i2.readableListening = this.listenerCount("readable") > 0, false !== i2.flowing && this.resume()) : "readable" === e8 && (i2.endEmitted || i2.readableListening || (i2.readableListening = i2.needReadable = true, i2.flowing = false, i2.emittedReadable = false, o("on readable", i2.length, i2.reading), i2.length ? x2(this) : i2.reading || ca.nextTick(P2, this))), r3;
  }, E2.prototype.addListener = E2.prototype.on, E2.prototype.removeListener = function(e8, t3) {
    var r3 = n2.prototype.removeListener.call(this, e8, t3);
    return "readable" === e8 && ca.nextTick(R2, this), r3;
  }, E2.prototype.removeAllListeners = function(e8) {
    var t3 = n2.prototype.removeAllListeners.apply(this, arguments);
    return "readable" !== e8 && void 0 !== e8 || ca.nextTick(R2, this), t3;
  }, E2.prototype.resume = function() {
    var e8 = this._readableState;
    return e8.flowing || (o("resume"), e8.flowing = !e8.readableListening, function(e9, t3) {
      t3.resumeScheduled || (t3.resumeScheduled = true, ca.nextTick(L2, e9, t3));
    }(this, e8)), e8.paused = false, this;
  }, E2.prototype.pause = function() {
    return o("call pause flowing=%j", this._readableState.flowing), false !== this._readableState.flowing && (o("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
  }, E2.prototype.wrap = function(e8) {
    var t3 = this, n3 = this._readableState, r3 = false;
    for (var i2 in e8.on("end", function() {
      if (o("wrapped end"), n3.decoder && !n3.ended) {
        var e9 = n3.decoder.end();
        e9 && e9.length && t3.push(e9);
      }
      t3.push(null);
    }), e8.on("data", function(i3) {
      (o("wrapped data"), n3.decoder && (i3 = n3.decoder.write(i3)), n3.objectMode && null == i3) || (n3.objectMode || i3 && i3.length) && (t3.push(i3) || (r3 = true, e8.pause()));
    }), e8) void 0 === this[i2] && "function" == typeof e8[i2] && (this[i2] = /* @__PURE__ */ function(t4) {
      return function() {
        return e8[t4].apply(e8, arguments);
      };
    }(i2));
    for (var s2 = 0; s2 < b2.length; s2++) e8.on(b2[s2], this.emit.bind(this, b2[s2]));
    return this._read = function(t4) {
      o("wrapped _read", t4), r3 && (r3 = false, e8.resume());
    }, this;
  }, "function" == typeof Symbol && (E2.prototype[Symbol.asyncIterator] = function() {
    return void 0 === c2 && (c2 = Ld()), c2(this);
  }), Object.defineProperty(E2.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
    return this._readableState.highWaterMark;
  } }), Object.defineProperty(E2.prototype, "readableBuffer", { enumerable: false, get: function() {
    return this._readableState && this._readableState.buffer;
  } }), Object.defineProperty(E2.prototype, "readableFlowing", { enumerable: false, get: function() {
    return this._readableState.flowing;
  }, set: function(e8) {
    this._readableState && (this._readableState.flowing = e8);
  } }), E2._fromList = T2, Object.defineProperty(E2.prototype, "readableLength", { enumerable: false, get: function() {
    return this._readableState.length;
  } }), "function" == typeof Symbol && (E2.from = function(e8, t3) {
    return void 0 === l2 && (l2 = Ad ? Md : (Ad = 1, Md = function() {
      throw new Error("Readable.from is not available in the browser");
    })), l2(E2, e8, t3);
  }), Id;
}
var Td = Hd;
var Nd = Ql.codes;
var Dd = Nd.ERR_METHOD_NOT_IMPLEMENTED;
var $d = Nd.ERR_MULTIPLE_CALLBACK;
var Bd = Nd.ERR_TRANSFORM_ALREADY_TRANSFORMING;
var Kd = Nd.ERR_TRANSFORM_WITH_LENGTH_0;
var jd = md();
function Ud(e7, t2) {
  var n2 = this._transformState;
  n2.transforming = false;
  var r2 = n2.writecb;
  if (null === r2) return this.emit("error", new $d());
  n2.writechunk = null, n2.writecb = null, null != t2 && this.push(t2), r2(e7);
  var i = this._readableState;
  i.reading = false, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
}
function Hd(e7) {
  if (!(this instanceof Hd)) return new Hd(e7);
  jd.call(this, e7), this._transformState = { afterTransform: Ud.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, e7 && ("function" == typeof e7.transform && (this._transform = e7.transform), "function" == typeof e7.flush && (this._flush = e7.flush)), this.on("prefinish", Fd);
}
function Fd() {
  var e7 = this;
  "function" != typeof this._flush || this._readableState.destroyed ? zd(this, null, null) : this._flush(function(t2, n2) {
    zd(e7, t2, n2);
  });
}
function zd(e7, t2, n2) {
  if (t2) return e7.emit("error", t2);
  if (null != n2 && e7.push(n2), e7._writableState.length) throw new Kd();
  if (e7._transformState.transforming) throw new Bd();
  return e7.push(null);
}
fd(Hd, jd), Hd.prototype.push = function(e7, t2) {
  return this._transformState.needTransform = false, jd.prototype.push.call(this, e7, t2);
}, Hd.prototype._transform = function(e7, t2, n2) {
  n2(new Dd("_transform()"));
}, Hd.prototype._write = function(e7, t2, n2) {
  var r2 = this._transformState;
  if (r2.writecb = n2, r2.writechunk = e7, r2.writeencoding = t2, !r2.transforming) {
    var i = this._readableState;
    (r2.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
  }
}, Hd.prototype._read = function(e7) {
  var t2 = this._transformState;
  null === t2.writechunk || t2.transforming ? t2.needTransform = true : (t2.transforming = true, this._transform(t2.writechunk, t2.writeencoding, t2.afterTransform));
}, Hd.prototype._destroy = function(e7, t2) {
  jd.prototype._destroy.call(this, e7, function(e8) {
    t2(e8);
  });
};
var qd;
var Vd = Gd;
var Wd = Td;
function Gd(e7) {
  if (!(this instanceof Gd)) return new Gd(e7);
  Wd.call(this, e7);
}
fd(Gd, Wd), Gd.prototype._transform = function(e7, t2, n2) {
  n2(null, e7);
};
var Zd = Ql.codes;
var Yd = Zd.ERR_MISSING_ARGS;
var Jd = Zd.ERR_STREAM_DESTROYED;
function Xd(e7) {
  if (e7) throw e7;
}
function Qd(e7) {
  e7();
}
function eu(e7, t2) {
  return e7.pipe(t2);
}
var tu = function() {
  for (var e7 = arguments.length, t2 = new Array(e7), n2 = 0; n2 < e7; n2++) t2[n2] = arguments[n2];
  var r2, i = function(e8) {
    return e8.length ? "function" != typeof e8[e8.length - 1] ? Xd : e8.pop() : Xd;
  }(t2);
  if (Array.isArray(t2[0]) && (t2 = t2[0]), t2.length < 2) throw new Yd("streams");
  var o = t2.map(function(e8, n3) {
    var s = n3 < t2.length - 1;
    return function(e9, t3, n4, r3) {
      r3 = /* @__PURE__ */ function(e10) {
        var t4 = false;
        return function() {
          t4 || (t4 = true, e10.apply(void 0, arguments));
        };
      }(r3);
      var i2 = false;
      e9.on("close", function() {
        i2 = true;
      }), void 0 === qd && (qd = Pd), qd(e9, { readable: t3, writable: n4 }, function(e10) {
        if (e10) return r3(e10);
        i2 = true, r3();
      });
      var o2 = false;
      return function(t4) {
        if (!i2 && !o2) return o2 = true, function(e10) {
          return e10.setHeader && "function" == typeof e10.abort;
        }(e9) ? e9.abort() : "function" == typeof e9.destroy ? e9.destroy() : void r3(t4 || new Jd("pipe"));
      };
    }(e8, s, n3 > 0, function(e9) {
      r2 || (r2 = e9), e9 && o.forEach(Qd), s || (o.forEach(Qd), i(r2));
    });
  });
  return t2.reduce(eu);
};
!function(e7, t2) {
  (t2 = rl.exports = Od()).Stream = t2, t2.Readable = t2, t2.Writable = gd(), t2.Duplex = md(), t2.Transform = Td, t2.PassThrough = Vd, t2.finished = Pd, t2.pipeline = tu;
}(0, rl.exports);
var nu = rl.exports;
function ru(e7 = {}) {
  const t2 = {}, n2 = new nu.Duplex({ objectMode: true, read: () => {
  }, write: function(n3, o, s) {
    let a2 = null;
    try {
      !n3.id ? function(n4) {
        (e7 == null ? void 0 : e7.retryOnMessage) && n4.method === e7.retryOnMessage && Object.values(t2).forEach(({ req: e8, retryCount: n5 = 0 }) => {
          if (!e8.id) return;
          if (n5 >= 3) throw new Error(`StreamMiddleware - Retry limit exceeded for request id "${e8.id}"`);
          const r3 = t2[e8.id];
          r3 && (r3.retryCount = n5 + 1), i(e8);
        });
        r2.emit("notification", n4);
      }(n3) : function(e8) {
        const { id: n4 } = e8;
        if (null === n4) return;
        const r3 = t2[n4];
        if (!r3) return void console.warn(`StreamMiddleware - Unknown response id "${n4}"`);
        delete t2[n4], Object.assign(r3.res, e8), setTimeout(r3.end);
      }(n3);
    } catch (e8) {
      a2 = e8;
    }
    s(a2);
  } }), r2 = new Ic();
  return { events: r2, middleware: (e8, n3, r3, o) => {
    t2[e8.id] = { req: e8, res: n3, next: r3, end: o }, i(e8);
  }, stream: n2 };
  function i(e8) {
    n2.push(e8);
  }
}
var iu = {};
var ou = { exports: {} };
var su = function e6(t2, n2) {
  if (t2 && n2) return e6(t2)(n2);
  if ("function" != typeof t2) throw new TypeError("need wrapper function");
  return Object.keys(t2).forEach(function(e7) {
    r2[e7] = t2[e7];
  }), r2;
  function r2() {
    for (var e7 = new Array(arguments.length), n3 = 0; n3 < e7.length; n3++) e7[n3] = arguments[n3];
    var r3 = t2.apply(this, e7), i = e7[e7.length - 1];
    return "function" == typeof r3 && r3 !== i && Object.keys(i).forEach(function(e8) {
      r3[e8] = i[e8];
    }), r3;
  }
};
var au = su;
function cu(e7) {
  var t2 = function() {
    return t2.called ? t2.value : (t2.called = true, t2.value = e7.apply(this, arguments));
  };
  return t2.called = false, t2;
}
function lu(e7) {
  var t2 = function() {
    if (t2.called) throw new Error(t2.onceError);
    return t2.called = true, t2.value = e7.apply(this, arguments);
  }, n2 = e7.name || "Function wrapped with `once`";
  return t2.onceError = n2 + " shouldn't be called more than once", t2.called = false, t2;
}
ou.exports = au(cu), ou.exports.strict = au(lu), cu.proto = cu(function() {
  Object.defineProperty(Function.prototype, "once", { value: function() {
    return cu(this);
  }, configurable: true }), Object.defineProperty(Function.prototype, "onceStrict", { value: function() {
    return lu(this);
  }, configurable: true });
});
var du = ou.exports;
var uu = {};
Object.defineProperty(uu, "__esModule", { value: true }), uu.Substream = void 0;
var hu = nu;
var fu = class extends hu.Duplex {
  constructor({ parent: e7, name: t2 }) {
    super({ objectMode: true }), this._parent = e7, this._name = t2;
  }
  _read() {
  }
  _write(e7, t2, n2) {
    this._parent.push({ name: this._name, data: e7 }), n2();
  }
};
uu.Substream = fu;
var pu = le && le.__importDefault || function(e7) {
  return e7 && e7.__esModule ? e7 : { default: e7 };
};
Object.defineProperty(iu, "__esModule", { value: true }), iu.ObjectMultiplex = void 0;
var gu = nu;
var mu = pu(du);
var yu = uu;
var vu = Symbol("IGNORE_SUBSTREAM");
var bu = class extends gu.Duplex {
  constructor(e7 = {}) {
    super(Object.assign(Object.assign({}, e7), { objectMode: true })), this._substreams = {};
  }
  createStream(e7) {
    if (this.destroyed) throw new Error(`ObjectMultiplex - parent stream for name "${e7}" already destroyed`);
    if (this._readableState.ended || this._writableState.ended) throw new Error(`ObjectMultiplex - parent stream for name "${e7}" already ended`);
    if (!e7) throw new Error("ObjectMultiplex - name must not be empty");
    if (this._substreams[e7]) throw new Error(`ObjectMultiplex - Substream for name "${e7}" already exists`);
    const t2 = new yu.Substream({ parent: this, name: e7 });
    return this._substreams[e7] = t2, function(e8, t3) {
      const n2 = (0, mu.default)(t3);
      (0, gu.finished)(e8, { readable: false }, n2), (0, gu.finished)(e8, { writable: false }, n2);
    }(this, (e8) => t2.destroy(e8 || void 0)), t2;
  }
  ignoreStream(e7) {
    if (!e7) throw new Error("ObjectMultiplex - name must not be empty");
    if (this._substreams[e7]) throw new Error(`ObjectMultiplex - Substream for name "${e7}" already exists`);
    this._substreams[e7] = vu;
  }
  _read() {
  }
  _write(e7, t2, n2) {
    const { name: r2, data: i } = e7;
    if (!r2) return console.warn(`ObjectMultiplex - malformed chunk without name "${e7}"`), n2();
    const o = this._substreams[r2];
    return o ? (o !== vu && o.push(i), n2()) : (console.warn(`ObjectMultiplex - orphaned data for stream "${r2}"`), n2());
  }
};
iu.ObjectMultiplex = bu;
var wu = de(iu.ObjectMultiplex);
var Eu = (e7) => null !== e7 && "object" == typeof e7 && "function" == typeof e7.pipe;
Eu.writable = (e7) => Eu(e7) && false !== e7.writable && "function" == typeof e7._write && "object" == typeof e7._writableState, Eu.readable = (e7) => Eu(e7) && false !== e7.readable && "function" == typeof e7._read && "object" == typeof e7._readableState, Eu.duplex = (e7) => Eu.writable(e7) && Eu.readable(e7), Eu.transform = (e7) => Eu.duplex(e7) && "function" == typeof e7._transform;
var Cu;
var Su = Eu;
var _u = class extends nl {
  constructor(e7, { jsonRpcStreamName: t2, logger: n2 = console, maxEventListeners: r2 = 100, rpcMiddleware: i = [] }) {
    if (super({ logger: n2, maxEventListeners: r2, rpcMiddleware: i }), !Su.duplex(e7)) throw new Error(ts.errors.invalidDuplexStream());
    this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
    const o = new wu();
    nu.pipeline(e7, o, e7, this._handleStreamDisconnect.bind(this, "MetaMask")), this._jsonRpcConnection = ru({ retryOnMessage: "METAMASK_EXTENSION_CONNECT_CAN_RETRY" }), nu.pipeline(this._jsonRpcConnection.stream, o.createStream(t2), this._jsonRpcConnection.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider")), this._rpcEngine.push(this._jsonRpcConnection.middleware), this._jsonRpcConnection.events.on("notification", (t3) => {
      const { method: n3, params: r3 } = t3;
      "metamask_accountsChanged" === n3 ? this._handleAccountsChanged(r3) : "metamask_unlockStateChanged" === n3 ? this._handleUnlockStateChanged(r3) : "metamask_chainChanged" === n3 ? this._handleChainChanged(r3) : Oc.includes(n3) ? this.emit("message", { type: n3, data: r3 }) : "METAMASK_STREAM_FAILURE" === n3 && e7.destroy(new Error(ts.errors.permanentlyDisconnected()));
    });
  }
  async _initializeStateAsync() {
    let e7;
    try {
      e7 = await this.request({ method: "metamask_getProviderState" });
    } catch (e8) {
      this._log.error("MetaMask: Failed to get initial state. Please report this bug.", e8);
    }
    this._initializeState(e7);
  }
  _handleStreamDisconnect(e7, t2) {
    let n2 = `MetaMask: Lost connection to "${e7}".`;
    (t2 == null ? void 0 : t2.stack) && (n2 += `
${t2.stack}`), this._log.warn(n2), this.listenerCount("error") > 0 && this.emit("error", n2), this._handleDisconnect(false, t2 ? t2.message : void 0);
  }
  _handleChainChanged({ chainId: e7, networkVersion: t2 } = {}) {
    $c(e7) && ((e8) => Boolean(e8) && "string" == typeof e8)(t2) ? "loading" === t2 ? this._handleDisconnect(true) : super._handleChainChanged({ chainId: e7 }) : this._log.error(ts.errors.invalidNetworkParams(), { chainId: e7, networkVersion: t2 });
  }
};
var ku = class extends _u {
  constructor(e7, { jsonRpcStreamName: t2 = "metamask-provider", logger: n2 = console, maxEventListeners: r2 = 100, shouldSendMetadata: i } = {}) {
    if (super(e7, { jsonRpcStreamName: t2, logger: n2, maxEventListeners: r2, rpcMiddleware: Tc(n2) }), this._sentWarnings = { chainId: false, networkVersion: false, selectedAddress: false, enable: false, experimentalMethods: false, send: false, events: { close: false, data: false, networkChanged: false, notification: false } }, qc(this, Cu, void 0), this._initializeStateAsync(), Vc(this, Cu, null), this.isMetaMask = true, this._sendSync = this._sendSync.bind(this), this.enable = this.enable.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this._warnOfDeprecation = this._warnOfDeprecation.bind(this), this._metamask = this._getExperimentalApi(), this._jsonRpcConnection.events.on("notification", (e8) => {
      const { method: t3 } = e8;
      Oc.includes(t3) && (this.emit("data", e8), this.emit("notification", e8.params.result));
    }), i) if ("complete" === document.readyState) Kc(this._rpcEngine, this._log);
    else {
      const e8 = () => {
        Kc(this._rpcEngine, this._log), window.removeEventListener("DOMContentLoaded", e8);
      };
      window.addEventListener("DOMContentLoaded", e8);
    }
  }
  get chainId() {
    return this._sentWarnings.chainId || (this._log.warn(ts.warnings.chainIdDeprecation), this._sentWarnings.chainId = true), super.chainId;
  }
  get networkVersion() {
    return this._sentWarnings.networkVersion || (this._log.warn(ts.warnings.networkVersionDeprecation), this._sentWarnings.networkVersion = true), zc(this, Cu);
  }
  get selectedAddress() {
    return this._sentWarnings.selectedAddress || (this._log.warn(ts.warnings.selectedAddressDeprecation), this._sentWarnings.selectedAddress = true), super.selectedAddress;
  }
  sendAsync(e7, t2) {
    this._rpcRequest(e7, t2);
  }
  addListener(e7, t2) {
    return this._warnOfDeprecation(e7), super.addListener(e7, t2);
  }
  on(e7, t2) {
    return this._warnOfDeprecation(e7), super.on(e7, t2);
  }
  once(e7, t2) {
    return this._warnOfDeprecation(e7), super.once(e7, t2);
  }
  prependListener(e7, t2) {
    return this._warnOfDeprecation(e7), super.prependListener(e7, t2);
  }
  prependOnceListener(e7, t2) {
    return this._warnOfDeprecation(e7), super.prependOnceListener(e7, t2);
  }
  _handleDisconnect(e7, t2) {
    super._handleDisconnect(e7, t2), zc(this, Cu) && !e7 && Vc(this, Cu, null);
  }
  _warnOfDeprecation(e7) {
    var _a2;
    false === ((_a2 = this._sentWarnings) == null ? void 0 : _a2.events[e7]) && (this._log.warn(ts.warnings.events[e7]), this._sentWarnings.events[e7] = true);
  }
  async enable() {
    return this._sentWarnings.enable || (this._log.warn(ts.warnings.enableDeprecation), this._sentWarnings.enable = true), new Promise((e7, t2) => {
      try {
        this._rpcRequest({ method: "eth_requestAccounts", params: [] }, Dc(e7, t2));
      } catch (e8) {
        t2(e8);
      }
    });
  }
  send(e7, t2) {
    return this._sentWarnings.send || (this._log.warn(ts.warnings.sendDeprecation), this._sentWarnings.send = true), "string" != typeof e7 || t2 && !Array.isArray(t2) ? e7 && "object" == typeof e7 && "function" == typeof t2 ? this._rpcRequest(e7, t2) : this._sendSync(e7) : new Promise((n2, r2) => {
      try {
        this._rpcRequest({ method: e7, params: t2 }, Dc(n2, r2, false));
      } catch (e8) {
        r2(e8);
      }
    });
  }
  _sendSync(e7) {
    let t2;
    switch (e7.method) {
      case "eth_accounts":
        t2 = this.selectedAddress ? [this.selectedAddress] : [];
        break;
      case "eth_coinbase":
        t2 = this.selectedAddress ?? null;
        break;
      case "eth_uninstallFilter":
        this._rpcRequest(e7, Bc), t2 = true;
        break;
      case "net_version":
        t2 = zc(this, Cu) ?? null;
        break;
      default:
        throw new Error(ts.errors.unsupportedSync(e7.method));
    }
    return { id: e7.id, jsonrpc: e7.jsonrpc, result: t2 };
  }
  _getExperimentalApi() {
    return new Proxy({ isUnlocked: async () => (this._state.initialized || await new Promise((e7) => {
      this.on("_initialized", () => e7());
    }), this._state.isUnlocked), requestBatch: async (e7) => {
      if (!Array.isArray(e7)) throw Ya({ message: "Batch requests must be made with an array of request objects.", data: e7 });
      return new Promise((t2, n2) => {
        this._rpcRequest(e7, Dc(t2, n2));
      });
    } }, { get: (e7, t2, ...n2) => (this._sentWarnings.experimentalMethods || (this._log.warn(ts.warnings.experimentalMethods), this._sentWarnings.experimentalMethods = true), Reflect.get(e7, t2, ...n2)) });
  }
  _handleChainChanged({ chainId: e7, networkVersion: t2 } = {}) {
    super._handleChainChanged({ chainId: e7, networkVersion: t2 }), this._state.isConnected && t2 !== zc(this, Cu) && (Vc(this, Cu, t2), this._state.initialized && this.emit("networkChanged", zc(this, Cu)));
  }
};
Cu = /* @__PURE__ */ new WeakMap();
var xu = (0, import_debug.default)("MM_SDK");
xu.color = "#FFAC1C";
var Mu = {};
var Au = {};
Object.defineProperty(Au, "__esModule", { value: true }), Au.EthereumProviderError = Au.EthereumRpcError = void 0;
var Iu = Ta;
var Ru = class extends Error {
  constructor(e7, t2, n2) {
    if (!Number.isInteger(e7)) throw new Error('"code" must be an integer.');
    if (!t2 || "string" != typeof t2) throw new Error('"message" must be a nonempty string.');
    super(t2), this.code = e7, void 0 !== n2 && (this.data = n2);
  }
  serialize() {
    const e7 = { code: this.code, message: this.message };
    return void 0 !== this.data && (e7.data = this.data), this.stack && (e7.stack = this.stack), e7;
  }
  toString() {
    return Iu.default(this.serialize(), Pu, 2);
  }
};
Au.EthereumRpcError = Ru;
function Pu(e7, t2) {
  if ("[Circular]" !== t2) return t2;
}
Au.EthereumProviderError = class extends Ru {
  constructor(e7, t2, n2) {
    if (!function(e8) {
      return Number.isInteger(e8) && e8 >= 1e3 && e8 <= 4999;
    }(e7)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(e7, t2, n2);
  }
};
var Lu = {};
var Ou = {};
Object.defineProperty(Ou, "__esModule", { value: true }), Ou.errorValues = Ou.errorCodes = void 0, Ou.errorCodes = { rpc: { invalidInput: -32e3, resourceNotFound: -32001, resourceUnavailable: -32002, transactionRejected: -32003, methodNotSupported: -32004, limitExceeded: -32005, parse: -32700, invalidRequest: -32600, methodNotFound: -32601, invalidParams: -32602, internal: -32603 }, provider: { userRejectedRequest: 4001, unauthorized: 4100, unsupportedMethod: 4200, disconnected: 4900, chainDisconnected: 4901 } }, Ou.errorValues = { "-32700": { standard: "JSON RPC 2.0", message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text." }, "-32600": { standard: "JSON RPC 2.0", message: "The JSON sent is not a valid Request object." }, "-32601": { standard: "JSON RPC 2.0", message: "The method does not exist / is not available." }, "-32602": { standard: "JSON RPC 2.0", message: "Invalid method parameter(s)." }, "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." }, "-32000": { standard: "EIP-1474", message: "Invalid input." }, "-32001": { standard: "EIP-1474", message: "Resource not found." }, "-32002": { standard: "EIP-1474", message: "Resource unavailable." }, "-32003": { standard: "EIP-1474", message: "Transaction rejected." }, "-32004": { standard: "EIP-1474", message: "Method not supported." }, "-32005": { standard: "EIP-1474", message: "Request limit exceeded." }, 4001: { standard: "EIP-1193", message: "User rejected the request." }, 4100: { standard: "EIP-1193", message: "The requested account and/or method has not been authorized by the user." }, 4200: { standard: "EIP-1193", message: "The requested method is not supported by this Ethereum provider." }, 4900: { standard: "EIP-1193", message: "The provider is disconnected from all chains." }, 4901: { standard: "EIP-1193", message: "The provider is disconnected from the specified chain." } }, function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.serializeError = e7.isValidCode = e7.getMessageFromCode = e7.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const t2 = Ou, n2 = Au, r2 = t2.errorCodes.rpc.internal, i = "Unspecified error message. This is a bug, please report it.", o = { code: r2, message: s(r2) };
  function s(n3, r3 = i) {
    if (Number.isInteger(n3)) {
      const r4 = n3.toString();
      if (d2(t2.errorValues, r4)) return t2.errorValues[r4].message;
      if (c2(n3)) return e7.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return r3;
  }
  function a2(e8) {
    if (!Number.isInteger(e8)) return false;
    const n3 = e8.toString();
    return !!t2.errorValues[n3] || !!c2(e8);
  }
  function c2(e8) {
    return e8 >= -32099 && e8 <= -32e3;
  }
  function l2(e8) {
    return e8 && "object" == typeof e8 && !Array.isArray(e8) ? Object.assign({}, e8) : e8;
  }
  function d2(e8, t3) {
    return Object.prototype.hasOwnProperty.call(e8, t3);
  }
  e7.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", e7.getMessageFromCode = s, e7.isValidCode = a2, e7.serializeError = function(e8, { fallbackError: t3 = o, shouldIncludeStack: r3 = false } = {}) {
    var i2, c3;
    if (!t3 || !Number.isInteger(t3.code) || "string" != typeof t3.message) throw new Error("Must provide fallback error with integer number code and string message.");
    if (e8 instanceof n2.EthereumRpcError) return e8.serialize();
    const u2 = {};
    if (e8 && "object" == typeof e8 && !Array.isArray(e8) && d2(e8, "code") && a2(e8.code)) {
      const t4 = e8;
      u2.code = t4.code, t4.message && "string" == typeof t4.message ? (u2.message = t4.message, d2(t4, "data") && (u2.data = t4.data)) : (u2.message = s(u2.code), u2.data = { originalError: l2(e8) });
    } else {
      u2.code = t3.code;
      const n3 = null === (i2 = e8) || void 0 === i2 ? void 0 : i2.message;
      u2.message = n3 && "string" == typeof n3 ? n3 : t3.message, u2.data = { originalError: l2(e8) };
    }
    const h2 = null === (c3 = e8) || void 0 === c3 ? void 0 : c3.stack;
    return r3 && e8 && h2 && "string" == typeof h2 && (u2.stack = h2), u2;
  };
}(Lu);
var Tu = {};
Object.defineProperty(Tu, "__esModule", { value: true }), Tu.ethErrors = void 0;
var Nu = Au;
var Du = Lu;
var $u = Ou;
function Bu(e7, t2) {
  const [n2, r2] = ju(t2);
  return new Nu.EthereumRpcError(e7, n2 || Du.getMessageFromCode(e7), r2);
}
function Ku(e7, t2) {
  const [n2, r2] = ju(t2);
  return new Nu.EthereumProviderError(e7, n2 || Du.getMessageFromCode(e7), r2);
}
function ju(e7) {
  if (e7) {
    if ("string" == typeof e7) return [e7];
    if ("object" == typeof e7 && !Array.isArray(e7)) {
      const { message: t2, data: n2 } = e7;
      if (t2 && "string" != typeof t2) throw new Error("Must specify string message.");
      return [t2 || void 0, n2];
    }
  }
  return [];
}
Tu.ethErrors = { rpc: { parse: (e7) => Bu($u.errorCodes.rpc.parse, e7), invalidRequest: (e7) => Bu($u.errorCodes.rpc.invalidRequest, e7), invalidParams: (e7) => Bu($u.errorCodes.rpc.invalidParams, e7), methodNotFound: (e7) => Bu($u.errorCodes.rpc.methodNotFound, e7), internal: (e7) => Bu($u.errorCodes.rpc.internal, e7), server: (e7) => {
  if (!e7 || "object" != typeof e7 || Array.isArray(e7)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
  const { code: t2 } = e7;
  if (!Number.isInteger(t2) || t2 > -32005 || t2 < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
  return Bu(t2, e7);
}, invalidInput: (e7) => Bu($u.errorCodes.rpc.invalidInput, e7), resourceNotFound: (e7) => Bu($u.errorCodes.rpc.resourceNotFound, e7), resourceUnavailable: (e7) => Bu($u.errorCodes.rpc.resourceUnavailable, e7), transactionRejected: (e7) => Bu($u.errorCodes.rpc.transactionRejected, e7), methodNotSupported: (e7) => Bu($u.errorCodes.rpc.methodNotSupported, e7), limitExceeded: (e7) => Bu($u.errorCodes.rpc.limitExceeded, e7) }, provider: { userRejectedRequest: (e7) => Ku($u.errorCodes.provider.userRejectedRequest, e7), unauthorized: (e7) => Ku($u.errorCodes.provider.unauthorized, e7), unsupportedMethod: (e7) => Ku($u.errorCodes.provider.unsupportedMethod, e7), disconnected: (e7) => Ku($u.errorCodes.provider.disconnected, e7), chainDisconnected: (e7) => Ku($u.errorCodes.provider.chainDisconnected, e7), custom: (e7) => {
  if (!e7 || "object" != typeof e7 || Array.isArray(e7)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
  const { code: t2, message: n2, data: r2 } = e7;
  if (!n2 || "string" != typeof n2) throw new Error('"message" must be a nonempty string');
  return new Nu.EthereumProviderError(t2, n2, r2);
} } }, function(e7) {
  Object.defineProperty(e7, "__esModule", { value: true }), e7.getMessageFromCode = e7.serializeError = e7.EthereumProviderError = e7.EthereumRpcError = e7.ethErrors = e7.errorCodes = void 0;
  const t2 = Au;
  Object.defineProperty(e7, "EthereumRpcError", { enumerable: true, get: function() {
    return t2.EthereumRpcError;
  } }), Object.defineProperty(e7, "EthereumProviderError", { enumerable: true, get: function() {
    return t2.EthereumProviderError;
  } });
  const n2 = Lu;
  Object.defineProperty(e7, "serializeError", { enumerable: true, get: function() {
    return n2.serializeError;
  } }), Object.defineProperty(e7, "getMessageFromCode", { enumerable: true, get: function() {
    return n2.getMessageFromCode;
  } });
  const r2 = Tu;
  Object.defineProperty(e7, "ethErrors", { enumerable: true, get: function() {
    return r2.ethErrors;
  } });
  const i = Ou;
  Object.defineProperty(e7, "errorCodes", { enumerable: true, get: function() {
    return i.errorCodes;
  } });
}(Mu);
var Uu = { exports: {} };
Uu.exports = function(e7) {
  var t2 = {};
  function n2(r2) {
    if (t2[r2]) return t2[r2].exports;
    var i = t2[r2] = { i: r2, l: false, exports: {} };
    return e7[r2].call(i.exports, i, i.exports, n2), i.l = true, i.exports;
  }
  return n2.m = e7, n2.c = t2, n2.d = function(e8, t3, r2) {
    n2.o(e8, t3) || Object.defineProperty(e8, t3, { enumerable: true, get: r2 });
  }, n2.r = function(e8) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e8, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e8, "__esModule", { value: true });
  }, n2.t = function(e8, t3) {
    if (1 & t3 && (e8 = n2(e8)), 8 & t3) return e8;
    if (4 & t3 && "object" == typeof e8 && e8 && e8.__esModule) return e8;
    var r2 = /* @__PURE__ */ Object.create(null);
    if (n2.r(r2), Object.defineProperty(r2, "default", { enumerable: true, value: e8 }), 2 & t3 && "string" != typeof e8) for (var i in e8) n2.d(r2, i, (function(t4) {
      return e8[t4];
    }).bind(null, i));
    return r2;
  }, n2.n = function(e8) {
    var t3 = e8 && e8.__esModule ? function() {
      return e8.default;
    } : function() {
      return e8;
    };
    return n2.d(t3, "a", t3), t3;
  }, n2.o = function(e8, t3) {
    return Object.prototype.hasOwnProperty.call(e8, t3);
  }, n2.p = "", n2(n2.s = 90);
}({ 17: function(e7, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2 = n2(18), i = function() {
    function e8() {
    }
    return e8.getFirstMatch = function(e9, t3) {
      var n3 = t3.match(e9);
      return n3 && n3.length > 0 && n3[1] || "";
    }, e8.getSecondMatch = function(e9, t3) {
      var n3 = t3.match(e9);
      return n3 && n3.length > 1 && n3[2] || "";
    }, e8.matchAndReturnConst = function(e9, t3, n3) {
      if (e9.test(t3)) return n3;
    }, e8.getWindowsVersionName = function(e9) {
      switch (e9) {
        case "NT":
          return "NT";
        case "XP":
        case "NT 5.1":
          return "XP";
        case "NT 5.0":
          return "2000";
        case "NT 5.2":
          return "2003";
        case "NT 6.0":
          return "Vista";
        case "NT 6.1":
          return "7";
        case "NT 6.2":
          return "8";
        case "NT 6.3":
          return "8.1";
        case "NT 10.0":
          return "10";
        default:
          return;
      }
    }, e8.getMacOSVersionName = function(e9) {
      var t3 = e9.split(".").splice(0, 2).map(function(e10) {
        return parseInt(e10, 10) || 0;
      });
      if (t3.push(0), 10 === t3[0]) switch (t3[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
    }, e8.getAndroidVersionName = function(e9) {
      var t3 = e9.split(".").splice(0, 2).map(function(e10) {
        return parseInt(e10, 10) || 0;
      });
      if (t3.push(0), !(1 === t3[0] && t3[1] < 5)) return 1 === t3[0] && t3[1] < 6 ? "Cupcake" : 1 === t3[0] && t3[1] >= 6 ? "Donut" : 2 === t3[0] && t3[1] < 2 ? "Eclair" : 2 === t3[0] && 2 === t3[1] ? "Froyo" : 2 === t3[0] && t3[1] > 2 ? "Gingerbread" : 3 === t3[0] ? "Honeycomb" : 4 === t3[0] && t3[1] < 1 ? "Ice Cream Sandwich" : 4 === t3[0] && t3[1] < 4 ? "Jelly Bean" : 4 === t3[0] && t3[1] >= 4 ? "KitKat" : 5 === t3[0] ? "Lollipop" : 6 === t3[0] ? "Marshmallow" : 7 === t3[0] ? "Nougat" : 8 === t3[0] ? "Oreo" : 9 === t3[0] ? "Pie" : void 0;
    }, e8.getVersionPrecision = function(e9) {
      return e9.split(".").length;
    }, e8.compareVersions = function(t3, n3, r3) {
      void 0 === r3 && (r3 = false);
      var i2 = e8.getVersionPrecision(t3), o = e8.getVersionPrecision(n3), s = Math.max(i2, o), a2 = 0, c2 = e8.map([t3, n3], function(t4) {
        var n4 = s - e8.getVersionPrecision(t4), r4 = t4 + new Array(n4 + 1).join(".0");
        return e8.map(r4.split("."), function(e9) {
          return new Array(20 - e9.length).join("0") + e9;
        }).reverse();
      });
      for (r3 && (a2 = s - Math.min(i2, o)), s -= 1; s >= a2; ) {
        if (c2[0][s] > c2[1][s]) return 1;
        if (c2[0][s] === c2[1][s]) {
          if (s === a2) return 0;
          s -= 1;
        } else if (c2[0][s] < c2[1][s]) return -1;
      }
    }, e8.map = function(e9, t3) {
      var n3, r3 = [];
      if (Array.prototype.map) return Array.prototype.map.call(e9, t3);
      for (n3 = 0; n3 < e9.length; n3 += 1) r3.push(t3(e9[n3]));
      return r3;
    }, e8.find = function(e9, t3) {
      var n3, r3;
      if (Array.prototype.find) return Array.prototype.find.call(e9, t3);
      for (n3 = 0, r3 = e9.length; n3 < r3; n3 += 1) {
        var i2 = e9[n3];
        if (t3(i2, n3)) return i2;
      }
    }, e8.assign = function(e9) {
      for (var t3, n3, r3 = e9, i2 = arguments.length, o = new Array(i2 > 1 ? i2 - 1 : 0), s = 1; s < i2; s++) o[s - 1] = arguments[s];
      if (Object.assign) return Object.assign.apply(Object, [e9].concat(o));
      var a2 = function() {
        var e10 = o[t3];
        "object" == typeof e10 && null !== e10 && Object.keys(e10).forEach(function(t4) {
          r3[t4] = e10[t4];
        });
      };
      for (t3 = 0, n3 = o.length; t3 < n3; t3 += 1) a2();
      return e9;
    }, e8.getBrowserAlias = function(e9) {
      return r2.BROWSER_ALIASES_MAP[e9];
    }, e8.getBrowserTypeByAlias = function(e9) {
      return r2.BROWSER_MAP[e9] || "";
    }, e8;
  }();
  t2.default = i, e7.exports = t2.default;
}, 18: function(e7, t2, n2) {
  t2.__esModule = true, t2.ENGINE_MAP = t2.OS_MAP = t2.PLATFORMS_MAP = t2.BROWSER_MAP = t2.BROWSER_ALIASES_MAP = void 0, t2.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, t2.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, t2.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, t2.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, t2.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
}, 90: function(e7, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2, i = (r2 = n2(91)) && r2.__esModule ? r2 : { default: r2 }, o = n2(18);
  function s(e8, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e8, r3.key, r3);
    }
  }
  var a2 = function() {
    function e8() {
    }
    var t3, n3, r3;
    return e8.getParser = function(e9, t4) {
      if (void 0 === t4 && (t4 = false), "string" != typeof e9) throw new Error("UserAgent should be a string");
      return new i.default(e9, t4);
    }, e8.parse = function(e9) {
      return new i.default(e9).getResult();
    }, t3 = e8, r3 = [{ key: "BROWSER_MAP", get: function() {
      return o.BROWSER_MAP;
    } }, { key: "ENGINE_MAP", get: function() {
      return o.ENGINE_MAP;
    } }, { key: "OS_MAP", get: function() {
      return o.OS_MAP;
    } }, { key: "PLATFORMS_MAP", get: function() {
      return o.PLATFORMS_MAP;
    } }], (n3 = null) && s(t3.prototype, n3), r3 && s(t3, r3), e8;
  }();
  t2.default = a2, e7.exports = t2.default;
}, 91: function(e7, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2 = c2(n2(92)), i = c2(n2(93)), o = c2(n2(94)), s = c2(n2(95)), a2 = c2(n2(17));
  function c2(e8) {
    return e8 && e8.__esModule ? e8 : { default: e8 };
  }
  var l2 = function() {
    function e8(e9, t4) {
      if (void 0 === t4 && (t4 = false), null == e9 || "" === e9) throw new Error("UserAgent parameter can't be empty");
      this._ua = e9, this.parsedResult = {}, true !== t4 && this.parse();
    }
    var t3 = e8.prototype;
    return t3.getUA = function() {
      return this._ua;
    }, t3.test = function(e9) {
      return e9.test(this._ua);
    }, t3.parseBrowser = function() {
      var e9 = this;
      this.parsedResult.browser = {};
      var t4 = a2.default.find(r2.default, function(t5) {
        if ("function" == typeof t5.test) return t5.test(e9);
        if (t5.test instanceof Array) return t5.test.some(function(t6) {
          return e9.test(t6);
        });
        throw new Error("Browser's test function is not valid");
      });
      return t4 && (this.parsedResult.browser = t4.describe(this.getUA())), this.parsedResult.browser;
    }, t3.getBrowser = function() {
      return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
    }, t3.getBrowserName = function(e9) {
      return e9 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
    }, t3.getBrowserVersion = function() {
      return this.getBrowser().version;
    }, t3.getOS = function() {
      return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
    }, t3.parseOS = function() {
      var e9 = this;
      this.parsedResult.os = {};
      var t4 = a2.default.find(i.default, function(t5) {
        if ("function" == typeof t5.test) return t5.test(e9);
        if (t5.test instanceof Array) return t5.test.some(function(t6) {
          return e9.test(t6);
        });
        throw new Error("Browser's test function is not valid");
      });
      return t4 && (this.parsedResult.os = t4.describe(this.getUA())), this.parsedResult.os;
    }, t3.getOSName = function(e9) {
      var t4 = this.getOS().name;
      return e9 ? String(t4).toLowerCase() || "" : t4 || "";
    }, t3.getOSVersion = function() {
      return this.getOS().version;
    }, t3.getPlatform = function() {
      return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
    }, t3.getPlatformType = function(e9) {
      void 0 === e9 && (e9 = false);
      var t4 = this.getPlatform().type;
      return e9 ? String(t4).toLowerCase() || "" : t4 || "";
    }, t3.parsePlatform = function() {
      var e9 = this;
      this.parsedResult.platform = {};
      var t4 = a2.default.find(o.default, function(t5) {
        if ("function" == typeof t5.test) return t5.test(e9);
        if (t5.test instanceof Array) return t5.test.some(function(t6) {
          return e9.test(t6);
        });
        throw new Error("Browser's test function is not valid");
      });
      return t4 && (this.parsedResult.platform = t4.describe(this.getUA())), this.parsedResult.platform;
    }, t3.getEngine = function() {
      return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
    }, t3.getEngineName = function(e9) {
      return e9 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
    }, t3.parseEngine = function() {
      var e9 = this;
      this.parsedResult.engine = {};
      var t4 = a2.default.find(s.default, function(t5) {
        if ("function" == typeof t5.test) return t5.test(e9);
        if (t5.test instanceof Array) return t5.test.some(function(t6) {
          return e9.test(t6);
        });
        throw new Error("Browser's test function is not valid");
      });
      return t4 && (this.parsedResult.engine = t4.describe(this.getUA())), this.parsedResult.engine;
    }, t3.parse = function() {
      return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
    }, t3.getResult = function() {
      return a2.default.assign({}, this.parsedResult);
    }, t3.satisfies = function(e9) {
      var t4 = this, n3 = {}, r3 = 0, i2 = {}, o2 = 0;
      if (Object.keys(e9).forEach(function(t5) {
        var s3 = e9[t5];
        "string" == typeof s3 ? (i2[t5] = s3, o2 += 1) : "object" == typeof s3 && (n3[t5] = s3, r3 += 1);
      }), r3 > 0) {
        var s2 = Object.keys(n3), c3 = a2.default.find(s2, function(e10) {
          return t4.isOS(e10);
        });
        if (c3) {
          var l3 = this.satisfies(n3[c3]);
          if (void 0 !== l3) return l3;
        }
        var d2 = a2.default.find(s2, function(e10) {
          return t4.isPlatform(e10);
        });
        if (d2) {
          var u2 = this.satisfies(n3[d2]);
          if (void 0 !== u2) return u2;
        }
      }
      if (o2 > 0) {
        var h2 = Object.keys(i2), f3 = a2.default.find(h2, function(e10) {
          return t4.isBrowser(e10, true);
        });
        if (void 0 !== f3) return this.compareVersion(i2[f3]);
      }
    }, t3.isBrowser = function(e9, t4) {
      void 0 === t4 && (t4 = false);
      var n3 = this.getBrowserName().toLowerCase(), r3 = e9.toLowerCase(), i2 = a2.default.getBrowserTypeByAlias(r3);
      return t4 && i2 && (r3 = i2.toLowerCase()), r3 === n3;
    }, t3.compareVersion = function(e9) {
      var t4 = [0], n3 = e9, r3 = false, i2 = this.getBrowserVersion();
      if ("string" == typeof i2) return ">" === e9[0] || "<" === e9[0] ? (n3 = e9.substr(1), "=" === e9[1] ? (r3 = true, n3 = e9.substr(2)) : t4 = [], ">" === e9[0] ? t4.push(1) : t4.push(-1)) : "=" === e9[0] ? n3 = e9.substr(1) : "~" === e9[0] && (r3 = true, n3 = e9.substr(1)), t4.indexOf(a2.default.compareVersions(i2, n3, r3)) > -1;
    }, t3.isOS = function(e9) {
      return this.getOSName(true) === String(e9).toLowerCase();
    }, t3.isPlatform = function(e9) {
      return this.getPlatformType(true) === String(e9).toLowerCase();
    }, t3.isEngine = function(e9) {
      return this.getEngineName(true) === String(e9).toLowerCase();
    }, t3.is = function(e9, t4) {
      return void 0 === t4 && (t4 = false), this.isBrowser(e9, t4) || this.isOS(e9) || this.isPlatform(e9);
    }, t3.some = function(e9) {
      var t4 = this;
      return void 0 === e9 && (e9 = []), e9.some(function(e10) {
        return t4.is(e10);
      });
    }, e8;
  }();
  t2.default = l2, e7.exports = t2.default;
}, 92: function(e7, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2, i = (r2 = n2(17)) && r2.__esModule ? r2 : { default: r2 }, o = /version\/(\d+(\.?_?\d+)+)/i, s = [{ test: [/googlebot/i], describe: function(e8) {
    var t3 = { name: "Googlebot" }, n3 = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e8) || i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/opera/i], describe: function(e8) {
    var t3 = { name: "Opera" }, n3 = i.default.getFirstMatch(o, e8) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/opr\/|opios/i], describe: function(e8) {
    var t3 = { name: "Opera" }, n3 = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e8) || i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/SamsungBrowser/i], describe: function(e8) {
    var t3 = { name: "Samsung Internet for Android" }, n3 = i.default.getFirstMatch(o, e8) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/Whale/i], describe: function(e8) {
    var t3 = { name: "NAVER Whale Browser" }, n3 = i.default.getFirstMatch(o, e8) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/MZBrowser/i], describe: function(e8) {
    var t3 = { name: "MZ Browser" }, n3 = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e8) || i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/focus/i], describe: function(e8) {
    var t3 = { name: "Focus" }, n3 = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e8) || i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/swing/i], describe: function(e8) {
    var t3 = { name: "Swing" }, n3 = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e8) || i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/coast/i], describe: function(e8) {
    var t3 = { name: "Opera Coast" }, n3 = i.default.getFirstMatch(o, e8) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function(e8) {
    var t3 = { name: "Opera Touch" }, n3 = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e8) || i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/yabrowser/i], describe: function(e8) {
    var t3 = { name: "Yandex Browser" }, n3 = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e8) || i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/ucbrowser/i], describe: function(e8) {
    var t3 = { name: "UC Browser" }, n3 = i.default.getFirstMatch(o, e8) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/Maxthon|mxios/i], describe: function(e8) {
    var t3 = { name: "Maxthon" }, n3 = i.default.getFirstMatch(o, e8) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/epiphany/i], describe: function(e8) {
    var t3 = { name: "Epiphany" }, n3 = i.default.getFirstMatch(o, e8) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/puffin/i], describe: function(e8) {
    var t3 = { name: "Puffin" }, n3 = i.default.getFirstMatch(o, e8) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/sleipnir/i], describe: function(e8) {
    var t3 = { name: "Sleipnir" }, n3 = i.default.getFirstMatch(o, e8) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/k-meleon/i], describe: function(e8) {
    var t3 = { name: "K-Meleon" }, n3 = i.default.getFirstMatch(o, e8) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/micromessenger/i], describe: function(e8) {
    var t3 = { name: "WeChat" }, n3 = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e8) || i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/qqbrowser/i], describe: function(e8) {
    var t3 = { name: /qqbrowserlite/i.test(e8) ? "QQ Browser Lite" : "QQ Browser" }, n3 = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e8) || i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/msie|trident/i], describe: function(e8) {
    var t3 = { name: "Internet Explorer" }, n3 = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/\sedg\//i], describe: function(e8) {
    var t3 = { name: "Microsoft Edge" }, n3 = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/edg([ea]|ios)/i], describe: function(e8) {
    var t3 = { name: "Microsoft Edge" }, n3 = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/vivaldi/i], describe: function(e8) {
    var t3 = { name: "Vivaldi" }, n3 = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/seamonkey/i], describe: function(e8) {
    var t3 = { name: "SeaMonkey" }, n3 = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/sailfish/i], describe: function(e8) {
    var t3 = { name: "Sailfish" }, n3 = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/silk/i], describe: function(e8) {
    var t3 = { name: "Amazon Silk" }, n3 = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/phantom/i], describe: function(e8) {
    var t3 = { name: "PhantomJS" }, n3 = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/slimerjs/i], describe: function(e8) {
    var t3 = { name: "SlimerJS" }, n3 = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e8) {
    var t3 = { name: "BlackBerry" }, n3 = i.default.getFirstMatch(o, e8) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/(web|hpw)[o0]s/i], describe: function(e8) {
    var t3 = { name: "WebOS Browser" }, n3 = i.default.getFirstMatch(o, e8) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/bada/i], describe: function(e8) {
    var t3 = { name: "Bada" }, n3 = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/tizen/i], describe: function(e8) {
    var t3 = { name: "Tizen" }, n3 = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e8) || i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/qupzilla/i], describe: function(e8) {
    var t3 = { name: "QupZilla" }, n3 = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e8) || i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/firefox|iceweasel|fxios/i], describe: function(e8) {
    var t3 = { name: "Firefox" }, n3 = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/electron/i], describe: function(e8) {
    var t3 = { name: "Electron" }, n3 = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/MiuiBrowser/i], describe: function(e8) {
    var t3 = { name: "Miui" }, n3 = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/chromium/i], describe: function(e8) {
    var t3 = { name: "Chromium" }, n3 = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e8) || i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/chrome|crios|crmo/i], describe: function(e8) {
    var t3 = { name: "Chrome" }, n3 = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/GSA/i], describe: function(e8) {
    var t3 = { name: "Google Search" }, n3 = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: function(e8) {
    var t3 = !e8.test(/like android/i), n3 = e8.test(/android/i);
    return t3 && n3;
  }, describe: function(e8) {
    var t3 = { name: "Android Browser" }, n3 = i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/playstation 4/i], describe: function(e8) {
    var t3 = { name: "PlayStation 4" }, n3 = i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/safari|applewebkit/i], describe: function(e8) {
    var t3 = { name: "Safari" }, n3 = i.default.getFirstMatch(o, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/.*/i], describe: function(e8) {
    var t3 = -1 !== e8.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
    return { name: i.default.getFirstMatch(t3, e8), version: i.default.getSecondMatch(t3, e8) };
  } }];
  t2.default = s, e7.exports = t2.default;
}, 93: function(e7, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2, i = (r2 = n2(17)) && r2.__esModule ? r2 : { default: r2 }, o = n2(18), s = [{ test: [/Roku\/DVP/], describe: function(e8) {
    var t3 = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e8);
    return { name: o.OS_MAP.Roku, version: t3 };
  } }, { test: [/windows phone/i], describe: function(e8) {
    var t3 = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e8);
    return { name: o.OS_MAP.WindowsPhone, version: t3 };
  } }, { test: [/windows /i], describe: function(e8) {
    var t3 = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e8), n3 = i.default.getWindowsVersionName(t3);
    return { name: o.OS_MAP.Windows, version: t3, versionName: n3 };
  } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function(e8) {
    var t3 = { name: o.OS_MAP.iOS }, n3 = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/macintosh/i], describe: function(e8) {
    var t3 = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e8).replace(/[_\s]/g, "."), n3 = i.default.getMacOSVersionName(t3), r3 = { name: o.OS_MAP.MacOS, version: t3 };
    return n3 && (r3.versionName = n3), r3;
  } }, { test: [/(ipod|iphone|ipad)/i], describe: function(e8) {
    var t3 = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e8).replace(/[_\s]/g, ".");
    return { name: o.OS_MAP.iOS, version: t3 };
  } }, { test: function(e8) {
    var t3 = !e8.test(/like android/i), n3 = e8.test(/android/i);
    return t3 && n3;
  }, describe: function(e8) {
    var t3 = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e8), n3 = i.default.getAndroidVersionName(t3), r3 = { name: o.OS_MAP.Android, version: t3 };
    return n3 && (r3.versionName = n3), r3;
  } }, { test: [/(web|hpw)[o0]s/i], describe: function(e8) {
    var t3 = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e8), n3 = { name: o.OS_MAP.WebOS };
    return t3 && t3.length && (n3.version = t3), n3;
  } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e8) {
    var t3 = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e8) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e8) || i.default.getFirstMatch(/\bbb(\d+)/i, e8);
    return { name: o.OS_MAP.BlackBerry, version: t3 };
  } }, { test: [/bada/i], describe: function(e8) {
    var t3 = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e8);
    return { name: o.OS_MAP.Bada, version: t3 };
  } }, { test: [/tizen/i], describe: function(e8) {
    var t3 = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e8);
    return { name: o.OS_MAP.Tizen, version: t3 };
  } }, { test: [/linux/i], describe: function() {
    return { name: o.OS_MAP.Linux };
  } }, { test: [/CrOS/], describe: function() {
    return { name: o.OS_MAP.ChromeOS };
  } }, { test: [/PlayStation 4/], describe: function(e8) {
    var t3 = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e8);
    return { name: o.OS_MAP.PlayStation4, version: t3 };
  } }];
  t2.default = s, e7.exports = t2.default;
}, 94: function(e7, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2, i = (r2 = n2(17)) && r2.__esModule ? r2 : { default: r2 }, o = n2(18), s = [{ test: [/googlebot/i], describe: function() {
    return { type: "bot", vendor: "Google" };
  } }, { test: [/huawei/i], describe: function(e8) {
    var t3 = i.default.getFirstMatch(/(can-l01)/i, e8) && "Nova", n3 = { type: o.PLATFORMS_MAP.mobile, vendor: "Huawei" };
    return t3 && (n3.model = t3), n3;
  } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() {
    return { type: o.PLATFORMS_MAP.tablet, vendor: "Nexus" };
  } }, { test: [/ipad/i], describe: function() {
    return { type: o.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
  } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() {
    return { type: o.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
  } }, { test: [/kftt build/i], describe: function() {
    return { type: o.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
  } }, { test: [/silk/i], describe: function() {
    return { type: o.PLATFORMS_MAP.tablet, vendor: "Amazon" };
  } }, { test: [/tablet(?! pc)/i], describe: function() {
    return { type: o.PLATFORMS_MAP.tablet };
  } }, { test: function(e8) {
    var t3 = e8.test(/ipod|iphone/i), n3 = e8.test(/like (ipod|iphone)/i);
    return t3 && !n3;
  }, describe: function(e8) {
    var t3 = i.default.getFirstMatch(/(ipod|iphone)/i, e8);
    return { type: o.PLATFORMS_MAP.mobile, vendor: "Apple", model: t3 };
  } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() {
    return { type: o.PLATFORMS_MAP.mobile, vendor: "Nexus" };
  } }, { test: [/[^-]mobi/i], describe: function() {
    return { type: o.PLATFORMS_MAP.mobile };
  } }, { test: function(e8) {
    return "blackberry" === e8.getBrowserName(true);
  }, describe: function() {
    return { type: o.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
  } }, { test: function(e8) {
    return "bada" === e8.getBrowserName(true);
  }, describe: function() {
    return { type: o.PLATFORMS_MAP.mobile };
  } }, { test: function(e8) {
    return "windows phone" === e8.getBrowserName();
  }, describe: function() {
    return { type: o.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
  } }, { test: function(e8) {
    var t3 = Number(String(e8.getOSVersion()).split(".")[0]);
    return "android" === e8.getOSName(true) && t3 >= 3;
  }, describe: function() {
    return { type: o.PLATFORMS_MAP.tablet };
  } }, { test: function(e8) {
    return "android" === e8.getOSName(true);
  }, describe: function() {
    return { type: o.PLATFORMS_MAP.mobile };
  } }, { test: function(e8) {
    return "macos" === e8.getOSName(true);
  }, describe: function() {
    return { type: o.PLATFORMS_MAP.desktop, vendor: "Apple" };
  } }, { test: function(e8) {
    return "windows" === e8.getOSName(true);
  }, describe: function() {
    return { type: o.PLATFORMS_MAP.desktop };
  } }, { test: function(e8) {
    return "linux" === e8.getOSName(true);
  }, describe: function() {
    return { type: o.PLATFORMS_MAP.desktop };
  } }, { test: function(e8) {
    return "playstation 4" === e8.getOSName(true);
  }, describe: function() {
    return { type: o.PLATFORMS_MAP.tv };
  } }, { test: function(e8) {
    return "roku" === e8.getOSName(true);
  }, describe: function() {
    return { type: o.PLATFORMS_MAP.tv };
  } }];
  t2.default = s, e7.exports = t2.default;
}, 95: function(e7, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2, i = (r2 = n2(17)) && r2.__esModule ? r2 : { default: r2 }, o = n2(18), s = [{ test: function(e8) {
    return "microsoft edge" === e8.getBrowserName(true);
  }, describe: function(e8) {
    if (/\sedg\//i.test(e8)) return { name: o.ENGINE_MAP.Blink };
    var t3 = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e8);
    return { name: o.ENGINE_MAP.EdgeHTML, version: t3 };
  } }, { test: [/trident/i], describe: function(e8) {
    var t3 = { name: o.ENGINE_MAP.Trident }, n3 = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: function(e8) {
    return e8.test(/presto/i);
  }, describe: function(e8) {
    var t3 = { name: o.ENGINE_MAP.Presto }, n3 = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: function(e8) {
    var t3 = e8.test(/gecko/i), n3 = e8.test(/like gecko/i);
    return t3 && !n3;
  }, describe: function(e8) {
    var t3 = { name: o.ENGINE_MAP.Gecko }, n3 = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/(apple)?webkit\/537\.36/i], describe: function() {
    return { name: o.ENGINE_MAP.Blink };
  } }, { test: [/(apple)?webkit/i], describe: function(e8) {
    var t3 = { name: o.ENGINE_MAP.WebKit }, n3 = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e8);
    return n3 && (t3.version = n3), t3;
  } }];
  t2.default = s, e7.exports = t2.default;
} });
var Hu = de(Uu.exports);
var Fu = { Initialized: "initialized", DisplayURI: "display_uri", ProviderUpdate: "provider_update", ConnectWithResponse: "connectWithResponse", ConnectionStatus: "connection_status", ServiceStatus: "service_status" };
var zu = class _zu {
  constructor({ shouldSetOnWindow: e7, connectionStream: t2, shouldSendMetadata: n2 = false, shouldShimWeb3: r2, sdkInstance: i }) {
    const o = new Wu({ connectionStream: t2, shouldSendMetadata: n2, shouldSetOnWindow: e7, shouldShimWeb3: r2, autoRequestAccounts: false }), s = new Proxy(o, { deleteProperty: () => true });
    if (this.provider = s, this.sdkInstance = i, e7 && "undefined" != typeof window) try {
      a2 = o, window.ethereum = a2, window.dispatchEvent(new Event("ethereum#initialized"));
    } catch (e8) {
      xu("[Ethereum] Unable to set global provider - window.ethereum may be read-only", e8);
    }
    var a2;
    if (r2 && "undefined" != typeof window) try {
      !function(e8, t3 = console) {
        let n3 = false, r3 = false;
        if (!window.web3) {
          const i2 = "__isMetaMaskShim__";
          let o2 = { currentProvider: e8 };
          Object.defineProperty(o2, i2, { value: true, enumerable: true, configurable: false, writable: false }), o2 = new Proxy(o2, { get: (o3, s2, ...a3) => ("currentProvider" !== s2 || n3 ? "currentProvider" === s2 || s2 === i2 || r3 || (r3 = true, t3.error("MetaMask no longer injects web3. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"), e8.request({ method: "metamask_logWeb3ShimUsage" }).catch((e9) => {
            t3.debug("MetaMask: Failed to log web3 shim usage.", e9);
          })) : (n3 = true, t3.warn("You are accessing the MetaMask window.web3.currentProvider shim. This property is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3")), Reflect.get(o3, s2, ...a3)), set: (...e9) => (t3.warn("You are accessing the MetaMask window.web3 shim. This object is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"), Reflect.set(...e9)) }), Object.defineProperty(window, "web3", { value: o2, enumerable: false, configurable: true, writable: true });
        }
      }(this.provider);
    } catch (e8) {
      xu("[Ethereum] Unable to shim web3 - window.web3 may be read-only", e8);
    }
    this.provider.on("display_uri", (e8) => {
      this.sdkInstance.emit(Fu.DisplayURI, e8);
    }), this.provider.on("_initialized", () => {
      const e8 = { chainId: this.provider.getChainId(), isConnected: this.provider.isConnected(), isMetaMask: this.provider.isMetaMask, selectedAddress: this.provider.getSelectedAddress(), networkVersion: this.provider.getNetworkVersion() };
      this.sdkInstance.emit(Fu.Initialized, e8), xu("[Ethereum: constructor()] provider initialized", e8);
    });
  }
  static init(e7) {
    var t2;
    return xu("[Ethereum: init()] Initializing Ethereum service"), this.instance = new _zu(e7), null === (t2 = this.instance) || void 0 === t2 ? void 0 : t2.provider;
  }
  static destroy() {
  }
  static getInstance() {
    var e7;
    if (!(null === (e7 = this.instance) || void 0 === e7 ? void 0 : e7.provider)) throw new Error("Ethereum instance not intiialized - call Ethereum.factory first.");
    return this.instance;
  }
  static getProvider() {
    var e7;
    if (!(null === (e7 = this.instance) || void 0 === e7 ? void 0 : e7.provider)) throw new Error("Ethereum instance not intiialized - call Ethereum.factory first.");
    return this.instance.provider;
  }
};
var qu = class _qu {
  constructor({ useDeepLink: e7, preferredOpenLink: t2, debug: n2 = false }) {
    this.state = { platformType: void 0, useDeeplink: false, preferredOpenLink: void 0, debug: false }, this.state.platformType = this.getPlatformType(), this.state.useDeeplink = e7, this.state.preferredOpenLink = t2, this.state.debug = n2;
  }
  openDeeplink(e7, t2, n2) {
    return function(e8, t3, n3, r2) {
      const { state: i } = e8;
      xu(`[PlatfformManager: openDeeplink()] universalLink --> ${t3}`), xu(`[PlatfformManager: openDeeplink()] deepLink --> ${n3}`);
      try {
        if (i.preferredOpenLink) return void i.preferredOpenLink(i.useDeeplink ? n3 : t3, r2);
        if (xu(`[PlatfformManager: openDeeplink()] open link now useDeepLink=${i.useDeeplink} link=${i.useDeeplink ? n3 : t3}`), i.useDeeplink) "undefined" != typeof window && (window.location.href = n3);
        else if ("undefined" != typeof document) {
          const e9 = document.createElement("a");
          e9.href = t3, e9.target = "_self", e9.rel = "noreferrer noopener", e9.click();
        }
      } catch (e9) {
        console.log("[PlatfformManager: openDeeplink()] can't open link", e9);
      }
    }(this, e7, t2, n2);
  }
  isReactNative() {
    var e7;
    return this.isNotBrowser() && "undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.navigator) && "ReactNative" === (null === (e7 = window.navigator) || void 0 === e7 ? void 0 : e7.product);
  }
  isMetaMaskInstalled() {
    return function() {
      const e7 = zu.getProvider() || (null === window || void 0 === window ? void 0 : window.ethereum);
      return xu(`[PlatfformManager: isMetaMaskInstalled()] isMetaMask=${null == e7 ? void 0 : e7.isMetaMask} isConnected=${null == e7 ? void 0 : e7.isConnected()}`), (null == e7 ? void 0 : e7.isMetaMask) && (null == e7 ? void 0 : e7.isConnected());
    }();
  }
  isDesktopWeb() {
    return this.isBrowser() && !this.isMobileWeb();
  }
  isMobile() {
    var e7, t2;
    const n2 = Hu.parse(window.navigator.userAgent);
    return "mobile" === (null === (e7 = null == n2 ? void 0 : n2.platform) || void 0 === e7 ? void 0 : e7.type) || "tablet" === (null === (t2 = null == n2 ? void 0 : n2.platform) || void 0 === t2 ? void 0 : t2.type);
  }
  isSecure() {
    return this.isReactNative() || this.isMobileWeb();
  }
  isMetaMaskMobileWebView() {
    return "undefined" != typeof window && (Boolean(window.ReactNativeWebView) && Boolean(navigator.userAgent.endsWith("MetaMaskMobile")));
  }
  isMobileWeb() {
    return this.state.platformType === Bo.MobileWeb;
  }
  static isNotBrowser() {
    var e7;
    return "undefined" == typeof window || !(null === window || void 0 === window ? void 0 : window.navigator) || void 0 !== c && "ReactNative" === (null === (e7 = null == c ? void 0 : c.navigator) || void 0 === e7 ? void 0 : e7.product) || "ReactNative" === (null === navigator || void 0 === navigator ? void 0 : navigator.product);
  }
  isNotBrowser() {
    return _qu.isNotBrowser();
  }
  static isBrowser() {
    return !this.isNotBrowser();
  }
  isBrowser() {
    return _qu.isBrowser();
  }
  isNodeJS() {
    return this.isNotBrowser() && !this.isReactNative();
  }
  isUseDeepLink() {
    return this.state.useDeeplink;
  }
  getPlatformType() {
    return function(e7) {
      const { state: t2 } = e7;
      return t2.platformType ? t2.platformType : e7.isReactNative() ? Bo.ReactNative : e7.isNotBrowser() ? Bo.NonBrowser : e7.isMetaMaskMobileWebView() ? Bo.MetaMaskMobileWebview : e7.isMobile() ? Bo.MobileWeb : Bo.DesktopWeb;
    }(this);
  }
};
var Vu = (e7) => a(void 0, void 0, void 0, function* () {
  if (qu.isBrowser()) {
    const { StorageManagerWeb: t3 } = yield Promise.resolve().then(function() {
      return nf;
    });
    return new t3(e7);
  }
  const t2 = { persistChannelConfig: () => a(void 0, void 0, void 0, function* () {
  }), getPersistedChannelConfig: () => a(void 0, void 0, void 0, function* () {
  }), persistAccounts: () => a(void 0, void 0, void 0, function* () {
  }), getCachedAccounts: () => a(void 0, void 0, void 0, function* () {
    return [];
  }), persistChainId: () => a(void 0, void 0, void 0, function* () {
  }), getCachedChainId: () => a(void 0, void 0, void 0, function* () {
  }), terminate: () => a(void 0, void 0, void 0, function* () {
  }) };
  return Promise.resolve(t2);
});
var Wu = class extends ku {
  constructor({ connectionStream: e7, shouldSendMetadata: t2, autoRequestAccounts: n2 = false }) {
    super(e7, { logger: console, maxEventListeners: 100, shouldSendMetadata: t2 }), this.state = { accounts: null, autoRequestAccounts: false, providerStateRequested: false, chainId: "", networkVersion: "" }, xu(`[SDKProvider: constructor()] autoRequestAccounts=${n2}`), this.state.autoRequestAccounts = n2;
  }
  forceInitializeState() {
    return a(this, void 0, void 0, function* () {
      return xu(`[SDKProvider: forceInitializeState()] autoRequestAccounts=${this.state.autoRequestAccounts}`), this._initializeStateAsync();
    });
  }
  _setConnected() {
    xu("[SDKProvider: _setConnected()] Setting connected state"), this._state.isConnected = true;
  }
  getState() {
    return this._state;
  }
  getSDKProviderState() {
    return this.state;
  }
  getSelectedAddress() {
    var e7;
    const { accounts: t2 } = this._state;
    return t2 && 0 !== t2.length ? (null === (e7 = t2[0]) || void 0 === e7 ? void 0 : e7.toLowerCase()) || "" : (xu("[SDKProvider: getSelectedAddress] No accounts found"), null);
  }
  getChainId() {
    return this.state.chainId;
  }
  getNetworkVersion() {
    return this.state.networkVersion;
  }
  setSDKProviderState(e7) {
    this.state = Object.assign(Object.assign({}, this.state), e7);
  }
  handleAccountsChanged(e7, t2) {
    return this._handleAccountsChanged(e7, t2);
  }
  handleDisconnect({ terminate: e7 = false }) {
    !function({ terminate: e8 = false, instance: t2 }) {
      const { state: n2 } = t2;
      xu(`[SDKProvider: handleDisconnect()] cleaning up provider state terminate=${e8}`, t2), e8 && (t2._state.accounts = null, t2._state.isUnlocked = false, t2._state.isPermanentlyDisconnected = true, t2._state.initialized = false), t2._handleAccountsChanged([]), t2._state.isConnected = false, t2.emit("disconnect", Mu.ethErrors.provider.disconnected()), n2.providerStateRequested = false;
    }({ terminate: e7, instance: this });
  }
  _initializeStateAsync() {
    return a(this, void 0, void 0, function* () {
      return function(e7) {
        var t2, n2;
        return a(this, void 0, void 0, function* () {
          void 0 === e7.state && (e7.state = { accounts: null, autoRequestAccounts: false, providerStateRequested: false, chainId: "" });
          const { state: r2 } = e7;
          let i;
          if (r2.providerStateRequested) xu("[SDKProvider: initializeStateAsync()] initialization already in progress");
          else {
            let o;
            r2.providerStateRequested = true;
            let s = null, a2 = false, c2 = false;
            const l2 = yield Vu({ enabled: true });
            if (l2) {
              const e8 = yield l2.getPersistedChannelConfig({});
              a2 = null !== (t2 = null == e8 ? void 0 : e8.relayPersistence) && void 0 !== t2 && t2, o = yield l2.getCachedChainId();
              const n3 = yield l2.getCachedAccounts();
              n3.length > 0 && (s = n3[0]);
            }
            if (xu(`[SDKProvider: initializeStateAsync()] relayPersistence=${a2}`, { relayPersistence: a2, cachedChainId: o, cachedSelectedAddress: s }), a2) if (o && s) i = { accounts: [s], chainId: o, isUnlocked: false }, c2 = true;
            else try {
              i = yield e7.request({ method: "metamask_getProviderState" });
            } catch (t3) {
              return e7._log.error("MetaMask: Failed to get initial state. Please report this bug.", t3), void (r2.providerStateRequested = false);
            }
            if (0 === (null === (n2 = null == i ? void 0 : i.accounts) || void 0 === n2 ? void 0 : n2.length)) if (e7.getSelectedAddress()) i.accounts = [e7.getSelectedAddress()];
            else {
              xu("[SDKProvider: initializeStateAsync()] Fetch accounts remotely.");
              const t3 = yield e7.request({ method: "eth_requestAccounts", params: [] });
              i.accounts = t3;
            }
            e7._initializeState(i), r2.providerStateRequested = false, c2 && (e7._state.isConnected = true, e7.emit("connect", { chainId: null == i ? void 0 : i.chainId }));
          }
        });
      }(this);
    });
  }
  _initializeState(e7) {
    return xu("[SDKProvider: _initializeState()]", e7), function(e8, t2, n2) {
      return xu("[SDKProvider: initializeState()] set state._initialized to false"), e8._state.initialized = false, t2(n2);
    }(this, super._initializeState.bind(this), e7);
  }
  _handleChainChanged({ chainId: e7, networkVersion: t2 } = {}) {
    this.state.chainId = e7, this.state.networkVersion = t2, function({ instance: e8, chainId: t3, networkVersion: n2, superHandleChainChanged: r2 }) {
      xu(`[SDKProvider: handleChainChanged()] chainId=${t3} networkVersion=${n2}`);
      let i = n2;
      n2 || (xu("[SDKProvider: handleChainChanged()] forced network version to prevent provider error"), i = "1"), e8._state.isConnected = true, e8.emit("connect", { chainId: t3 }), r2({ chainId: t3, networkVersion: i });
    }({ instance: this, chainId: e7, networkVersion: t2, superHandleChainChanged: super._handleChainChanged.bind(this) });
  }
};
var Gu;
var Zu = { name: "@metamask/sdk", version: "0.32.0", description: "", homepage: "https://github.com/MetaMask/metamask-sdk#readme", bugs: { url: "https://github.com/MetaMask/metamask-sdk/issues" }, repository: { type: "git", url: "https://github.com/MetaMask/metamask-sdk", directory: "packages/sdk" }, main: "dist/node/cjs/metamask-sdk.js", module: "dist/browser/es/metamask-sdk.js", browser: "dist/browser/es/metamask-sdk.js", unpkg: "dist/browser/umd/metamask-sdk.js", "react-native": "dist/react-native/es/metamask-sdk.js", types: "dist/types/src/index.d.ts", sideEffects: false, files: ["/dist"], scripts: { "build:types": "tsc --project tsconfig.build.json --emitDeclarationOnly --outDir dist/types", build: "yarn build:types && rollup -c --bundleConfigAsCjs", "build:clean": "yarn clean && yarn build", "build:post-tsc": "echo 'N/A'", "build:pre-tsc": "echo 'N/A'", typecheck: "tsc --noEmit", clean: "rimraf ./dist", size: "node bundle-size && size-limit", lint: "yarn lint:eslint && yarn lint:misc --check", "lint:changelog": "../../scripts/validate-changelog.sh @metamask/sdk", "lint:eslint": "eslint . --cache --ext js,ts", "lint:fix": "yarn lint:eslint --fix && yarn lint:misc --write", "lint:misc": "prettier '**/*.json' '**/*.md' '!CHANGELOG.md' --ignore-path ../../.gitignore", prepack: "../../scripts/prepack.sh", "publish:preview": "yarn npm publish --tag preview", reset: "yarn clean && rimraf ./node_modules/", test: 'jest --testPathIgnorePatterns "/e2e/"', "test:coverage": 'jest --coverage --testPathIgnorePatterns "/e2e/"', "test:e2e": 'jest --testPathPattern "/e2e/"', "test:ci": 'jest --coverage --passWithNoTests --setupFilesAfterEnv ./jest-preload.js --testPathIgnorePatterns "/e2e/"', "test:dev": 'jest -c ./jest.config.ts --detectOpenHandles  --testPathIgnorePatterns "/e2e/"', watch: "rollup -c -w", dev: 'concurrently "tsc --watch" "rollup -c -w --bundleConfigAsCjs"', "build:dev": "yarn build:types && NODE_ENV=dev rollup -c --bundleConfigAsCjs" }, dependencies: { "@babel/runtime": "^7.26.0", "@metamask/onboarding": "^1.0.1", "@metamask/providers": "16.1.0", "@metamask/sdk-communication-layer": "workspace:*", "@metamask/sdk-install-modal-web": "workspace:*", "@paulmillr/qr": "^0.2.1", bowser: "^2.9.0", "cross-fetch": "^4.0.0", debug: "^4.3.4", eciesjs: "^0.4.11", "eth-rpc-errors": "^4.0.3", eventemitter2: "^6.4.9", "obj-multiplex": "^1.0.0", pump: "^3.0.0", "readable-stream": "^3.6.2", "socket.io-client": "^4.5.1", tslib: "^2.6.0", util: "^0.12.4", uuid: "^8.3.2" }, devDependencies: { "@jest/globals": "^29.3.1", "@lavamoat/allow-scripts": "^2.3.1", "@metamask/auto-changelog": "3.1.0", "@metamask/eslint-config": "^6.0.0", "@metamask/eslint-config-nodejs": "^6.0.0", "@metamask/eslint-config-typescript": "^6.0.0", "@react-native-async-storage/async-storage": "^1.19.6", "@rollup/plugin-alias": "^5.1.1", "@rollup/plugin-commonjs": "^25.0.7", "@rollup/plugin-json": "^6.0.0", "@rollup/plugin-node-resolve": "^15.0.2", "@rollup/plugin-replace": "^6.0.1", "@rollup/plugin-terser": "^0.4.1", "@size-limit/preset-big-lib": "^11.0.2", "@types/dom-screen-wake-lock": "^1.0.2", "@types/node": "^20.1.3", "@types/pump": "^1.1.1", "@types/qrcode-terminal": "^0.12.0", "@types/uuid": "^10.0.0", "@typescript-eslint/eslint-plugin": "^4.26.0", "@typescript-eslint/parser": "^4.26.0", "browserify-zlib": "^0.2.0", buffer: "^6.0.3", concurrently: "^9.1.2", "crypto-browserify": "^3.12.0", eslint: "^7.30.0", "eslint-config-prettier": "^8.3.0", "eslint-plugin-import": "^2.23.4", "eslint-plugin-jest": "^24.4.0", "eslint-plugin-jsdoc": "^36.1.0", "eslint-plugin-node": "^11.1.0", "eslint-plugin-prettier": "^3.4.0", "https-browserify": "^1.0.0", jest: "^29.3.1", "jest-environment-jsdom": "^29.3.1", prettier: "^2.3.0", process: "^0.11.10", rimraf: "^4.4.0", rollup: "^4.26.0", "rollup-plugin-analyzer": "^4.0.0", "rollup-plugin-jscc": "^2.0.0", "rollup-plugin-natives": "^0.7.5", "rollup-plugin-node-builtins": "^2.1.2", "rollup-plugin-polyfill-node": "^0.13.0", "rollup-plugin-sizes": "^1.0.6", "rollup-plugin-typescript2": "^0.31.2", "rollup-plugin-visualizer": "^5.12.0", "size-limit": "^11.0.2", "stream-browserify": "^3.0.0", "stream-http": "^3.2.0", "ts-jest": "^29.0.3", "ts-node": "^10.9.1", typescript: "^4.3.2", url: "^0.11.0", webpack: "^5.0.0" }, publishConfig: { access: "public", registry: "https://registry.npmjs.org/" }, lavamoat: { allowScripts: { "eciesjs>secp256k1": false, "socket.io-client>engine.io-client>ws>bufferutil": false, "socket.io-client>engine.io-client>ws>utf-8-validate": false, "@metamask/sdk-communication-layer>bufferutil": false, "@metamask/sdk-communication-layer>eciesjs>secp256k1": false, "@metamask/sdk-communication-layer>utf-8-validate": false } } };
!function(e7) {
  e7.INPAGE = "metamask-inpage", e7.CONTENT_SCRIPT = "metamask-contentscript", e7.PROVIDER = "metamask-provider";
}(Gu || (Gu = {}));
var Yu = "direct";
var Ju = "https://metamask.app.link/connect";
var Xu = "metamask://connect";
var Qu = { NAME: "MetaMask", RDNS: ["io.metamask", "io.metamask.flask"] };
var eh = /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u;
var th = { METAMASK_GETPROVIDERSTATE: "metamask_getProviderState", METAMASK_CONNECTSIGN: "metamask_connectSign", METAMASK_CONNECTWITH: "metamask_connectWith", METAMASK_OPEN: "metamask_open", METAMASK_BATCH: "metamask_batch", PERSONAL_SIGN: "personal_sign", WALLET_REQUESTPERMISSIONS: "wallet_requestPermissions", WALLET_REVOKEPERMISSIONS: "wallet_revokePermissions", WALLET_GETPERMISSIONS: "wallet_getPermissions", WALLET_WATCHASSET: "wallet_watchAsset", WALLET_ADDETHEREUMCHAIN: "wallet_addEthereumChain", WALLET_SWITCHETHETHEREUMCHAIN: "wallet_switchEthereumChain", ETH_REQUESTACCOUNTS: "eth_requestAccounts", ETH_ACCOUNTS: "eth_accounts", ETH_CHAINID: "eth_chainId", ETH_SENDTRANSACTION: "eth_sendTransaction", ETH_SIGNTYPEDDATA: "eth_signTypedData", ETH_SIGNTYPEDDATA_V3: "eth_signTypedData_v3", ETH_SIGNTYPEDDATA_V4: "eth_signTypedData_v4", ETH_SIGNTRANSACTION: "eth_signTransaction", ETH_SIGN: "eth_sign", PERSONAL_EC_RECOVER: "personal_ecRecover" };
var nh = { [th.ETH_REQUESTACCOUNTS]: true, [th.ETH_SENDTRANSACTION]: true, [th.ETH_SIGNTRANSACTION]: true, [th.ETH_SIGN]: true, [th.PERSONAL_SIGN]: true, [th.ETH_ACCOUNTS]: false, [th.ETH_CHAINID]: false, [th.PERSONAL_SIGN]: true, [th.ETH_SIGNTYPEDDATA]: true, [th.ETH_SIGNTYPEDDATA_V3]: true, [th.ETH_SIGNTYPEDDATA_V4]: true, [th.WALLET_REQUESTPERMISSIONS]: true, [th.WALLET_GETPERMISSIONS]: true, [th.WALLET_WATCHASSET]: true, [th.WALLET_ADDETHEREUMCHAIN]: true, [th.WALLET_SWITCHETHETHEREUMCHAIN]: true, [th.METAMASK_CONNECTSIGN]: true, [th.METAMASK_CONNECTWITH]: true, [th.PERSONAL_EC_RECOVER]: true, [th.METAMASK_BATCH]: true, [th.METAMASK_OPEN]: true };
var rh = Object.keys(nh).map((e7) => e7.toLowerCase());
var ih = ["eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sign"].map((e7) => e7.toLowerCase());
var oh = ".sdk-comm";
var sh = "providerType";
var ah = ".MMSDK_cached_address";
var ch = ".MMSDK_cached_chainId";
var lh = { CHAIN_CHANGED: "chainChanged", ACCOUNTS_CHANGED: "accountsChanged", DISCONNECT: "disconnect", CONNECT: "connect", CONNECTED: "connected" };
var dh = 1e6;
var uh;
!function(e7) {
  e7.TERMINATE = "terminate", e7.EXTENSION = "extension", e7.INITIALIZED = "initialized";
}(uh || (uh = {}));
var hh = "undefined" != typeof window && window.localStorage;
function fh({ instance: e7, msg: t2 }) {
  return a(this, void 0, void 0, function* () {
    if (e7._initialized || (xu("[MetaMaskSDK: connectAndSign()] provider not ready -- wait for init()"), yield e7.init()), xu(`[MetaMaskSDK: connectAndSign()] activeProvider=${e7.activeProvider}`), !e7.activeProvider) throw new Error("SDK state invalid -- undefined provider");
    const n2 = /^0x([0-9A-Fa-f]{2})*$/u.test(t2) ? t2 : function(e8) {
      let t3;
      if (void 0 !== S) t3 = S.from(e8, "utf8").toString("hex");
      else if ("undefined" != typeof TextEncoder) {
        const n3 = new TextEncoder().encode(e8);
        t3 = Array.from(n3).map((e9) => e9.toString(16).padStart(2, "0")).join("");
      } else {
        if ("object" != typeof c || !("Buffer" in c)) throw new Error("Unable to convert string to hex: No available method.");
        t3 = c.Buffer.from(e8, "utf8").toString("hex");
      }
      return `0x${t3}`;
    }(t2);
    return e7.activeProvider.request({ method: th.METAMASK_CONNECTWITH, params: [{ method: th.PERSONAL_SIGN, params: [n2] }] });
  });
}
function ph(e7) {
  var t2, n2;
  return a(this, void 0, void 0, function* () {
    xu("[MetaMaskSDK: connectWithExtensionProvider()] ", e7), e7.sdkProvider = e7.activeProvider, e7.activeProvider = window.extension, window.ethereum = window.extension;
    try {
      const e8 = yield null === (t2 = window.extension) || void 0 === t2 ? void 0 : t2.request({ method: "eth_requestAccounts" });
      xu(`[MetaMaskSDK: connectWithExtensionProvider()] accounts=${e8}`);
    } catch (e8) {
      return void console.warn("[MetaMaskSDK: connectWithExtensionProvider()] can't request accounts error", e8);
    }
    localStorage.setItem(sh, "extension"), e7.extensionActive = true, e7.emit(Fu.ProviderUpdate, uh.EXTENSION), e7.options.enableAnalytics && (null === (n2 = e7.analytics) || void 0 === n2 || n2.send({ event: So.SDK_USE_EXTENSION }));
  });
}
function gh(e7) {
  let t2;
  if (void 0 !== S) t2 = S.from(e7, "utf8").toString("base64");
  else if ("function" == typeof btoa) t2 = btoa(encodeURIComponent(e7).replace(/%([0-9A-F]{2})/gu, (e8, t3) => String.fromCharCode(parseInt(t3, 16))));
  else {
    if ("object" != typeof c || !("Buffer" in c)) throw new Error("Unable to base64 encode: No available method.");
    t2 = c.Buffer.from(e7, "utf8").toString("base64");
  }
  return t2;
}
function mh(e7, t2, n2, r2) {
  var i, o, s, c2, l2, d2, u2, h2, f3, p2, g2, m2, y2, v2, b2, w2, E2, C2, _2, k2;
  return a(this, void 0, void 0, function* () {
    const n3 = null === (i = e7.state.remote) || void 0 === i ? void 0 : i.isReady(), a2 = null === (o = e7.state.remote) || void 0 === o ? void 0 : o.isConnected(), x2 = null === (s = e7.state.remote) || void 0 === s ? void 0 : s.isPaused(), M2 = zu.getProvider(), A2 = null === (c2 = e7.state.remote) || void 0 === c2 ? void 0 : c2.getChannelId(), I2 = null === (l2 = e7.state.remote) || void 0 === l2 ? void 0 : l2.isAuthorized(), { deeplinkProtocol: R2 } = e7.state, { method: P2, data: L2, triggeredInstaller: O2 } = ((e8) => {
      var t3, n4, r3, i2;
      let o2;
      S.isBuffer(e8) ? (o2 = e8.toJSON(), o2._isBuffer = true) : o2 = e8;
      const s2 = null === (t3 = null == o2 ? void 0 : o2.data) || void 0 === t3 ? void 0 : t3.method;
      let a3 = false;
      return "object" == typeof (null === (n4 = null == o2 ? void 0 : o2.data) || void 0 === n4 ? void 0 : n4.params) && true === (null === (i2 = null === (r3 = null == o2 ? void 0 : o2.data) || void 0 === r3 ? void 0 : r3.params) || void 0 === i2 ? void 0 : i2.__triggeredInstaller) && (a3 = true, o2.data.params = o2.data.params.wrappedParams), { method: s2, data: o2, triggeredInstaller: a3 };
    })(t2);
    if (xu(`[RCPMS: write()] method='${P2}' isRemoteReady=${n3} channelId=${A2} isSocketConnected=${a2} isRemotePaused=${x2} providerConnected=${M2.isConnected()}`, t2), !A2) return P2 !== th.METAMASK_GETPROVIDERSTATE && xu(`[RCPMS: write()] ${P2} --> channelId is undefined`), r2(new Error("disconnected"));
    xu(`[RCPMS: write()] remote.isPaused()=${null === (d2 = e7.state.remote) || void 0 === d2 ? void 0 : d2.isPaused()} authorized=${I2} ready=${n3} socketConnected=${a2}`, t2);
    const T2 = null === (u2 = e7.state.platformManager) || void 0 === u2 ? void 0 : u2.isSecure(), N2 = null !== (f3 = null === (h2 = e7.state.platformManager) || void 0 === h2 ? void 0 : h2.isMobileWeb()) && void 0 !== f3 && f3, D2 = null !== (g2 = null === (p2 = e7.state.remote) || void 0 === p2 ? void 0 : p2.hasDeeplinkProtocol()) && void 0 !== g2 && g2 && N2 && I2;
    try {
      if (!O2) {
        const t4 = JSON.stringify(null == L2 ? void 0 : L2.data);
        if (t4.length > dh) return r2(new Error(`Message size ${t4.length} exceeds maximum allowed size of 1000000 bytes`));
        null === (m2 = e7.state.remote) || void 0 === m2 || m2.sendMessage(null == L2 ? void 0 : L2.data).then(() => {
          xu(`[RCPMS: _write()] ${P2} sent successfully`);
        }).catch((e8) => {
          xu("[RCPMS: _write()] error sending message", e8);
        });
      }
      if (!T2) return xu(`[RCPMS: _write()] unsecure platform for method ${P2} -- return callback`), r2();
      if (O2) return xu("[RCPMS: _write()] prevent deeplink -- installation completed separately."), r2();
      const t3 = null !== (b2 = null === (v2 = null === (y2 = e7.state.remote) || void 0 === y2 ? void 0 : y2.getKeyInfo()) || void 0 === v2 ? void 0 : v2.ecies.public) && void 0 !== b2 ? b2 : "";
      let n4 = encodeURI(`channelId=${A2}&pubkey=${t3}&comm=socket&t=d&v=2`);
      if (D2) {
        const t4 = JSON.stringify(null == L2 ? void 0 : L2.data), i2 = null === (w2 = e7.state.remote) || void 0 === w2 ? void 0 : w2.encrypt(t4);
        if (!i2) return xu("[RCPMS: _write()] error encrypting message"), r2(new Error("RemoteCommunicationPostMessageStream - disconnected"));
        n4 += `&scheme=${R2}&rpc=${gh(i2)}`;
      }
      if (!(null === (E2 = e7.state.platformManager) || void 0 === E2 ? void 0 : E2.isMetaMaskInstalled())) return xu("[RCPMS: _write()] prevent deeplink until installation is completed."), r2();
      nh[P2] ? (xu(`[RCPMS: _write()] redirect link for '${P2}' socketConnected=${a2} connect?${n4}`), null === (C2 = e7.state.platformManager) || void 0 === C2 || C2.openDeeplink(`${Ju}?${n4}`, `${Xu}?${n4}`, "_self")) : (null === (_2 = e7.state.remote) || void 0 === _2 ? void 0 : _2.isPaused()) ? (xu(`[RCPMS: _write()] MM is PAUSED! deeplink with connect! targetMethod=${P2}`), null === (k2 = e7.state.platformManager) || void 0 === k2 || k2.openDeeplink(`${Ju}?redirect=true&${n4}`, `${Xu}?redirect=true&${n4}`, "_self")) : xu(`[RCPMS: _write()] method ${P2} doesn't need redirect.`);
    } catch (e8) {
      return xu("[RCPMS: _write()] error sending message", e8), r2(new Error("RemoteCommunicationPostMessageStream - disconnected"));
    }
    return r2();
  });
}
var yh = class extends nu.Duplex {
  constructor({ name: e7, remote: t2, deeplinkProtocol: n2, platformManager: r2 }) {
    super({ objectMode: true }), this.state = { _name: null, remote: null, deeplinkProtocol: false, platformManager: null }, this.state._name = e7, this.state.remote = t2, this.state.deeplinkProtocol = n2, this.state.platformManager = r2, this._onMessage = this._onMessage.bind(this), this.state.remote.on(bo.MESSAGE, this._onMessage);
  }
  _write(e7, t2, n2) {
    return a(this, void 0, void 0, function* () {
      return mh(this, e7, 0, n2);
    });
  }
  _read() {
  }
  _onMessage(e7) {
    return function(e8, t2) {
      try {
        if (xu("[RCPMS: onMessage()] message", t2), !t2 || "object" != typeof t2) return;
        if ("object" != typeof (null == t2 ? void 0 : t2.data)) return;
        if (!(null == t2 ? void 0 : t2.name)) return void xu("[RCPMS: onMessage()] ignore message without name", t2);
        if ((null == t2 ? void 0 : t2.name) !== Gu.PROVIDER) return void xu(`[RCPMS: onMessage()] ignore message with wrong name message=${t2}`);
        if (S.isBuffer(t2)) {
          const n2 = S.from(t2);
          e8.push(n2);
        } else e8.push(t2);
      } catch (e9) {
        xu(`[RCPMS: onMessage()] ignore message error err=${e9}`);
      }
    }(this, e7);
  }
  start() {
  }
};
var vh = 1;
var bh = (e7) => new Promise((t2) => {
  setTimeout(() => {
    t2(true);
  }, e7);
});
var wh = ({ checkInstallationOnAllCalls: t2 = false, communicationLayerPreference: n2, injectProvider: r2, shouldShimWeb3: i, platformManager: o, installer: s, sdk: c2, remoteConnection: l2, debug: d2 }) => a(void 0, void 0, void 0, function* () {
  var u2, h2;
  const f3 = (({ name: e7, remoteConnection: t3 }) => {
    if (!t3 || !(null == t3 ? void 0 : t3.getConnector())) throw new Error("Missing remote connection parameter");
    return new yh({ name: e7, remote: null == t3 ? void 0 : t3.getConnector(), deeplinkProtocol: null == t3 ? void 0 : t3.state.deeplinkProtocol, platformManager: null == t3 ? void 0 : t3.getPlatformManager() });
  })({ name: Gu.INPAGE, target: Gu.CONTENT_SCRIPT, platformManager: o, communicationLayerPreference: n2, remoteConnection: l2 }), p2 = o.getPlatformType(), g2 = c2.options.dappMetadata, m2 = `Sdk/Javascript SdkVersion/${Zu.version} Platform/${p2} dApp/${null !== (u2 = g2.url) && void 0 !== u2 ? u2 : g2.name} dAppTitle/${g2.name}`;
  let y2 = null, v2 = null;
  const b2 = null === (h2 = c2.options.storage) || void 0 === h2 ? void 0 : h2.storageManager;
  if (b2) {
    try {
      const e7 = yield b2.getCachedAccounts();
      e7.length > 0 && (y2 = e7[0]);
    } catch (e7) {
      console.error(`[initializeMobileProvider] failed to get cached addresses: ${e7}`);
    }
    try {
      const e7 = yield b2.getCachedChainId();
      e7 && (v2 = e7);
    } catch (e7) {
      console.error(`[initializeMobileProvider] failed to parse cached chainId: ${e7}`);
    }
  }
  xu(`[initializeMobileProvider] cachedAccountAddress: ${y2}, cachedChainId: ${v2}`);
  const w2 = !(!r2 || p2 === Bo.NonBrowser || p2 === Bo.ReactNative), E2 = zu.init({ shouldSetOnWindow: w2, connectionStream: f3, shouldShimWeb3: i, sdkInstance: c2 });
  let C2 = false;
  const S2 = (e7) => {
    C2 = e7;
  }, _2 = () => C2, k2 = (n3, r3, i2, d3) => a(void 0, void 0, void 0, function* () {
    var u3, h3, f4, p3, g3, w3, E3, k3, x3;
    const M3 = zu.getProvider();
    if (C2) {
      M3.emit("display_uri", (null == l2 ? void 0 : l2.state.qrcodeLink) || ""), null == l2 || l2.showActiveModal();
      let e7 = _2();
      for (; e7; ) {
        const t3 = _2(), n4 = null == l2 ? void 0 : l2.isAuthorized();
        e7 = t3 && !n4, xu(`[initializeMobileProvider: sendRequest()] waiting for initialization to complete - initializing: ${t3} authorized: ${n4}`), yield bh(1e3);
      }
      return xu("[initializeMobileProvider: sendRequest()] initial method completed -- prevent installation and call provider"), i2(...r3);
    }
    const A2 = o.isMetaMaskInstalled(), I2 = null == l2 ? void 0 : l2.isConnected();
    let R2 = null, P2 = null, L2 = null;
    if (R2 = null !== (u3 = M3.getSelectedAddress()) && void 0 !== u3 ? u3 : y2, L2 = M3.getChainId() || v2, R2 && b2 && R2 !== y2 && b2.persistAccounts([R2]).catch((e7) => {
      console.error(`[initializeMobileProvider] failed to persist account: ${e7}`);
    }), L2 && (v2 = L2, b2 && b2.persistChainId(L2).catch((e7) => {
      console.error(`[initializeMobileProvider] failed to persist chainId: ${e7}`);
    })), xu("[initializeMobileProvider: sendRequest()]", { selectedAddress: R2, chainId: L2 }), d3 && xu(`[initializeMobileProvider: sendRequest()] method=${n3} ongoing=${C2} selectedAddress=${R2} isInstalled=${A2} checkInstallationOnAllCalls=${t2} socketConnected=${I2}`), R2 && n3.toLowerCase() === th.ETH_ACCOUNTS.toLowerCase()) return [R2];
    if (L2 && n3.toLowerCase() === th.ETH_CHAINID.toLowerCase()) return L2;
    const O2 = [th.ETH_REQUESTACCOUNTS, th.WALLET_REQUESTPERMISSIONS, th.METAMASK_CONNECTSIGN, th.METAMASK_CONNECTWITH], T2 = !nh[n3], N2 = null === (h3 = c2.options.readonlyRPCMap) || void 0 === h3 ? void 0 : h3[L2];
    if (N2 && T2) try {
      const t3 = null === (f4 = null == r3 ? void 0 : r3[0]) || void 0 === f4 ? void 0 : f4.params, i3 = yield (({ rpcEndpoint: t4, method: n4, sdkInfo: r4, params: i4 }) => a(void 0, void 0, void 0, function* () {
        const o2 = JSON.stringify({ jsonrpc: "2.0", method: n4, params: i4, id: (vh += 1, vh) }), s2 = { Accept: "application/json", "Content-Type": "application/json" };
        let a2;
        t4.includes("infura") && (s2["Metamask-Sdk-Info"] = r4);
        try {
          a2 = yield (0, import_cross_fetch.default)(t4, { method: "POST", headers: s2, body: o2 });
        } catch (e7) {
          throw e7 instanceof Error ? new Error(`Failed to fetch from RPC: ${e7.message}`) : new Error(`Failed to fetch from RPC: ${e7}`);
        }
        if (!a2.ok) throw new Error(`Server responded with a status of ${a2.status}`);
        return (yield a2.json()).result;
      }))({ rpcEndpoint: N2, sdkInfo: m2, method: n3, params: t3 || [] });
      return d3 && xu(`initializeProvider::ReadOnlyRPCResponse ${i3}`), i3;
    } catch (e7) {
      console.warn(`[initializeMobileProvider: sendRequest()] method=${n3} readOnlyRPCRequest failed:`, e7);
    }
    if ((!A2 || A2 && !I2) && n3 !== th.METAMASK_GETPROVIDERSTATE) {
      const e7 = (null === (p3 = null == r3 ? void 0 : r3[0]) || void 0 === p3 ? void 0 : p3.params) || [];
      if (-1 !== O2.indexOf(n3) || t2) {
        S2(true);
        const t3 = n3 === th.METAMASK_CONNECTWITH, o2 = `${Date.now()}`;
        try {
          yield s.start({ wait: false, connectWith: t3 ? { method: n3, id: o2, params: e7 } : void 0 }), yield new Promise((e8, t4) => {
            (null == l2 ? void 0 : l2.isAuthorized()) && (xu("[initializeMobileProvider: sendRequest()] already authorized"), e8(true)), null == l2 || l2.getConnector().once(bo.AUTHORIZED, () => {
              e8(true);
            }), c2.once(bo.PROVIDER_UPDATE, (e9) => {
              xu(`[initializeMobileProvider: sendRequest()] PROVIDER_UPDATE --- remote provider request interupted type=${e9}`), e9 === uh.EXTENSION ? t4(bo.PROVIDER_UPDATE) : t4(new Error("Connection Terminated"));
            });
          });
        } catch (t4) {
          if (uh.EXTENSION === t4) {
            if (xu(`[initializeMobileProvider: sendRequest()] extension provider detect: re-create ${n3} on the active provider`), n3.toLowerCase() === th.METAMASK_CONNECTSIGN.toLowerCase()) {
              const t5 = yield null === (g3 = c2.getProvider()) || void 0 === g3 ? void 0 : g3.request({ method: th.ETH_REQUESTACCOUNTS, params: [] });
              if (!t5.length) throw new Error("SDK state invalid -- undefined accounts");
              const n4 = yield null === (w3 = c2.getProvider()) || void 0 === w3 ? void 0 : w3.request({ method: th.PERSONAL_SIGN, params: [e7[0], t5[0]] });
              return c2.emit(Fu.ConnectWithResponse, n4), n4;
            }
            if (n3.toLowerCase() === th.METAMASK_CONNECTWITH.toLowerCase()) {
              const [t5] = e7, n4 = yield (({ method: e8, sdk: t6, params: n5 }) => a(void 0, void 0, void 0, function* () {
                var r4, i3, o3, s2;
                if (!t6.isExtensionActive()) throw new Error("SDK state invalid -- extension is not active");
                xu("[MetaMaskProvider: extensionConnectWithOverwrite()] Overwriting request method", e8, n5);
                const a2 = yield null === (r4 = t6.getProvider()) || void 0 === r4 ? void 0 : r4.request({ method: th.ETH_REQUESTACCOUNTS, params: [] });
                if (!a2.length) throw new Error("SDK state invalid -- undefined accounts");
                if ((null == e8 ? void 0 : e8.toLowerCase()) === th.PERSONAL_SIGN.toLowerCase()) {
                  const r5 = { method: e8, params: [n5[0], a2[0]] };
                  return yield null === (i3 = t6.getProvider()) || void 0 === i3 ? void 0 : i3.request(r5);
                }
                if ((null == e8 ? void 0 : e8.toLowerCase()) === th.ETH_SENDTRANSACTION.toLowerCase()) {
                  const r5 = { method: e8, params: [Object.assign(Object.assign({}, n5[0]), { from: a2[0] })] };
                  return yield null === (o3 = t6.getProvider()) || void 0 === o3 ? void 0 : o3.request(r5);
                }
                return ih.includes(e8.toLowerCase()) ? (console.warn(`MetaMaskSDK connectWith method=${e8} -- not handled by the extension -- call separately`), a2) : yield null === (s2 = t6.getProvider()) || void 0 === s2 ? void 0 : s2.request({ method: e8, params: n5 });
              }))({ method: t5.method, sdk: c2, params: t5.params });
              return c2.emit(Fu.ConnectWithResponse, n4), n4;
            }
            return xu(`[initializeMobileProvider: sendRequest()] sending '${n3}' on active provider`, e7), yield null === (E3 = c2.getProvider()) || void 0 === E3 ? void 0 : E3.request({ method: n3, params: e7 });
          }
          if (t4 === bo.REJECTED) throw null == l2 || l2.closeModal(), null === (k3 = c2.getProvider()) || void 0 === k3 || k3.handleDisconnect({ terminate: false }), Object.assign(new Error("User rejected connection"), { code: 4001 });
          throw xu(`[initializeMobileProvider: sendRequest()] failed to start installer: ${t4}`), t4;
        } finally {
          S2(false);
        }
        if (n3 === th.ETH_REQUESTACCOUNTS) return P2 = yield new Promise((e8) => {
          const t4 = setInterval(() => {
            const { accounts: n4 } = M3.getState();
            n4 && (clearInterval(t4), e8(n4));
          }, 100);
        }), xu(`[initializeMobileProvider: sendRequest()] selectedAddress: ${R2} --- SKIP rpc call`), P2;
        if (n3 === th.METAMASK_CONNECTWITH) try {
          let e8 = 0;
          const t4 = 5, n4 = ({ resolve: n5, reject: r5 }) => {
            e8 += 1;
            const i4 = null == l2 ? void 0 : l2.getConnector().getRPCMethodTracker(), s3 = null == i4 ? void 0 : i4[o2];
            return xu(`TRACKER: update method ${o2}`, s3), (null == s3 ? void 0 : s3.result) ? (xu("[initializeMobileProvider: sendRequest()] found result", s3.result), c2.emit(Fu.ConnectWithResponse, s3.result), void n5(s3.result)) : (null == s3 ? void 0 : s3.error) ? (xu("[initializeMobileProvider: sendRequest()] found error", s3.error), void r5(s3.error)) : e8 >= t4 ? (xu("[initializeMobileProvider: sendRequest()] max message count reached without result"), void r5(new Error("Max message count reached without result"))) : void xu("[initializeMobileProvider: sendRequest()] not found yet, need to wait for next update");
          };
          let r4, i3;
          const s2 = yield new Promise((e9, t5) => {
            const s3 = null == l2 ? void 0 : l2.getConnector().getRPCMethodTracker();
            xu(`TRACKER: method ${o2}`, s3), (null == s3 ? void 0 : s3[o2].result) ? (xu("[initializeMobileProvider: sendRequest()] found result", null == s3 ? void 0 : s3[o2].result), e9(null == s3 ? void 0 : s3[o2].result)) : (null == s3 ? void 0 : s3[o2].error) && (xu("[initializeMobileProvider: sendRequest()] found error", null == s3 ? void 0 : s3[o2].error), t5(null == s3 ? void 0 : s3[o2].error)), i3 = () => n4({ resolve: e9, reject: t5 }), r4 = null == l2 ? void 0 : l2.getConnector().on(bo.RPC_UPDATE, i3);
          });
          return i3 && (null == r4 || r4.off(bo.RPC_UPDATE, i3)), xu("TRACKER: result", s2), s2;
        } catch (e8) {
          throw xu("[initializeMobileProvider: sendRequest()] error:", e8), e8;
        }
        r3[0] && "object" == typeof r3[0] && (r3[0].params = { __triggeredInstaller: true, wrappedParams: r3[0].params });
        return i2(...r3);
      }
      if (o.isSecure() && nh[n3]) return i2(...r3);
      if (c2.isExtensionActive()) return xu(`[initializeMobileProvider: sendRequest()] EXTENSION active - redirect request '${n3}' to it`, r3, e7), yield null === (x3 = c2.getProvider()) || void 0 === x3 ? void 0 : x3.request({ method: n3, params: e7 });
      throw xu(`[initializeMobileProvider: sendRequest()] method=${n3} --- skip --- not connected/installed`), new Error("MetaMask is not connected/installed, please call eth_requestAccounts to connect first.");
    }
    try {
      const e7 = yield i2(...r3);
      if (xu(`[initializeMobileProvider: sendRequest()] method=${n3} rpcResponse`, e7), n3 === th.WALLET_REQUESTPERMISSIONS) {
        const t3 = e7.reduce((e8, t4) => {
          var n4;
          if ("eth_accounts" === t4.parentCapability) {
            const r4 = null === (n4 = t4.caveats.find((e9) => "restrictReturnedAccounts" === e9.type)) || void 0 === n4 ? void 0 : n4.value;
            r4 && e8.push(...r4);
          }
          return e8;
        }, []);
        xu("[initializeMobileProvider: sendRequest()] accountsToPersist:", t3), t3.length > 0 && (M3.handleAccountsChanged(t3, false), null == b2 || b2.persistAccounts(t3));
      }
      return e7;
    } catch (e7) {
      throw console.error("[initializeMobileProvider: sendRequest()] error:", e7), e7;
    }
  }), { request: x2 } = E2;
  E2.request = (...e7) => a(void 0, void 0, void 0, function* () {
    return k2(null == e7 ? void 0 : e7[0].method, e7, x2, d2);
  });
  const { send: M2 } = E2;
  return E2.send = (...e7) => a(void 0, void 0, void 0, function* () {
    return k2(null == e7 ? void 0 : e7[0], e7, M2, d2);
  }), xu("[initializeMobileProvider: sendRequest()] metamaskStream.start()"), f3.start(), E2;
});
function Eh(e7) {
  var t2, n2, r2, i;
  return a(this, void 0, void 0, function* () {
    const { options: o } = e7, s = { communicationLayerPreference: null !== (t2 = o.communicationLayerPreference) && void 0 !== t2 ? t2 : $o.SOCKET, platformManager: e7.platformManager, sdk: e7, checkInstallationOnAllCalls: o.checkInstallationOnAllCalls, injectProvider: null === (n2 = o.injectProvider) || void 0 === n2 || n2, shouldShimWeb3: null === (r2 = o.shouldShimWeb3) || void 0 === r2 || r2, extensionOnly: null === (i = o.extensionOnly) || void 0 === i || i, installer: e7.installer, remoteConnection: e7.remoteConnection, debug: e7.debug }, a2 = yield wh(s);
    e7.activeProvider = a2, function(e8) {
      var t3, n3, r3, i2;
      null === (n3 = null === (t3 = e8.remoteConnection) || void 0 === t3 ? void 0 : t3.getConnector()) || void 0 === n3 || n3.on(Fu.ConnectionStatus, (t4) => {
        e8.emit(Fu.ConnectionStatus, t4);
      }), null === (i2 = null === (r3 = e8.remoteConnection) || void 0 === r3 ? void 0 : r3.getConnector()) || void 0 === i2 || i2.on(Fu.ServiceStatus, (t4) => {
        e8.emit(Fu.ServiceStatus, t4);
      });
    }(e7);
  });
}
var Ch = "sdk";
var Sh = class {
  constructor({ serverUrl: e7, enabled: t2, originatorInfo: n2 }) {
    this.serverURL = ho, this.serverURL = e7, this.originatorInfo = n2, this.enabled = null == t2 || t2;
  }
  send({ event: e7, params: t2 }) {
    if (!this.enabled) return;
    const n2 = Object.assign(Object.assign({ id: Ch, event: e7, sdkVersion: Zu.version }, this.originatorInfo), { params: t2 });
    xu(`[Analytics: send()] event: ${e7}`, n2), co(n2, this.serverURL).catch((e8) => {
      xu(`[Analytics: send()] error: ${e8}`);
    });
  }
};
var _h = () => {
  if ("undefined" == typeof document) return;
  let e7;
  const t2 = document.getElementsByTagName("link");
  for (let n2 = 0; n2 < t2.length; n2++) "icon" !== t2[n2].getAttribute("rel") && "shortcut icon" !== t2[n2].getAttribute("rel") || (e7 = t2[n2].getAttribute("href"));
  return e7;
};
var kh = 163400;
function xh(e7) {
  var t2, n2, r2;
  const { dappMetadata: i } = e7, s = function({ url: e8, name: t3 }) {
    var n3;
    const r3 = e8 + t3, i2 = gh(r3);
    if (!localStorage) return "";
    let s2 = null !== (n3 = localStorage.getItem(i2)) && void 0 !== n3 ? n3 : "";
    if (!s2) {
      s2 = v4_default();
      try {
        localStorage.setItem(i2, s2);
      } catch (e9) {
        return "";
      }
    }
    return s2;
  }({ url: null !== (t2 = null == i ? void 0 : i.url) && void 0 !== t2 ? t2 : "no_url", name: null !== (n2 = null == i ? void 0 : i.name) && void 0 !== n2 ? n2 : "no_name" }), a2 = null === (r2 = e7.platformManager) || void 0 === r2 ? void 0 : r2.getPlatformType(), c2 = a2 === Bo.DesktopWeb, l2 = a2 === Bo.MetaMaskMobileWebview;
  let d2 = "N/A";
  return c2 ? d2 = "extension" : l2 && (d2 = "mobile"), { id: s, from: d2 };
}
var Mh = ({ provider: e7, sdkInstance: t2 }) => {
  if ("state" in e7) throw new Error("INVALID EXTENSION PROVIDER");
  return new Proxy(e7, { get: (n2, r2) => "request" === r2 ? function(e8) {
    var r3, i;
    return a(this, void 0, void 0, function* () {
      xu("[wrapExtensionProvider()] Overwriting request method", e8);
      const { method: o, params: s } = e8, c2 = rh.includes(o.toLowerCase()), { id: l2, from: d2 } = xh(t2);
      if (c2 && (null === (r3 = t2.analytics) || void 0 === r3 || r3.send({ event: So.SDK_RPC_REQUEST, params: { method: o, from: d2, id: l2 } })), o === th.METAMASK_BATCH && Array.isArray(s)) return (({ target: e9, args: t3, trackEvent: n3, sdkInstance: r4 }) => a(void 0, void 0, void 0, function* () {
        var i2, o2;
        if ("metamask_batch" !== t3.method) throw new Error("Invalid usage");
        const s2 = [], a2 = null !== (i2 = null == t3 ? void 0 : t3.params) && void 0 !== i2 ? i2 : [];
        for (const t4 of a2) {
          const n4 = yield null == e9 ? void 0 : e9.request({ method: t4.method, params: t4.params });
          s2.push(n4);
        }
        const { id: c3, from: l3 } = xh(r4);
        return n3 && (null === (o2 = r4.analytics) || void 0 === o2 || o2.send({ event: So.SDK_RPC_REQUEST_DONE, params: { method: t3.method, from: l3, id: c3 } })), s2;
      }))({ target: n2, args: e8, trackEvent: c2, sdkInstance: t2 });
      if (o.toLowerCase() === th.METAMASK_CONNECTSIGN.toLowerCase() && Array.isArray(s)) return (({ target: e9, params: t3 }) => a(void 0, void 0, void 0, function* () {
        const n3 = yield e9.request({ method: th.ETH_REQUESTACCOUNTS, params: [] });
        if (!n3.length) throw new Error("SDK state invalid -- undefined accounts");
        return yield e9.request({ method: th.PERSONAL_SIGN, params: [t3[0], n3[0]] });
      }))({ target: n2, params: s });
      if (o.toLowerCase() === th.METAMASK_CONNECTWITH.toLowerCase() && Array.isArray(s)) return (({ target: e9, params: t3 }) => a(void 0, void 0, void 0, function* () {
        const [n3] = t3, r4 = n3.method, i2 = n3.params, o2 = yield e9.request({ method: th.ETH_REQUESTACCOUNTS, params: [] });
        if (!o2.length) throw new Error("SDK state invalid -- undefined accounts");
        return (null == r4 ? void 0 : r4.toLowerCase()) === th.PERSONAL_SIGN.toLowerCase() ? yield e9.request({ method: r4, params: [i2[0], o2[0]] }) : (null == r4 ? void 0 : r4.toLowerCase()) === th.ETH_SENDTRANSACTION.toLowerCase() ? yield e9.request({ method: r4, params: [Object.assign(Object.assign({}, i2[0]), { from: o2[0] })] }) : ih.includes(r4.toLowerCase()) ? (console.warn(`MetaMaskSDK connectWith method=${r4} -- not handled by the extension -- call separately`), o2) : yield e9.request({ method: r4, params: i2 });
      }))({ target: n2, params: s });
      let u2;
      try {
        return u2 = yield n2.request(e8), u2;
      } finally {
        c2 && (null === (i = t2.analytics) || void 0 === i || i.send({ event: So.SDK_RPC_REQUEST_DONE, params: { method: o, from: d2, id: l2 } }));
      }
    });
  } : "getChainId" === r2 ? function() {
    return e7.chainId;
  } : "getNetworkVersion" === r2 ? function() {
    return e7.networkVersion;
  } : "getSelectedAddress" === r2 ? function() {
    return e7.selectedAddress;
  } : "isConnected" === r2 ? function() {
    return e7._state.isConnected;
  } : n2[r2] });
};
var Ah;
function Ih({ mustBeMetaMask: e7, sdkInstance: t2 }) {
  return a(this, void 0, void 0, function* () {
    if ("undefined" == typeof window) throw new Error("window not available");
    try {
      const e8 = yield new Promise((e9, t3) => {
        const n2 = setTimeout(() => {
          t3(new Error("eip6963RequestProvider timed out"));
        }, 500);
        window.addEventListener(Ah.Announce, (t4) => {
          const r2 = t4, { detail: { info: i, provider: o } = {} } = r2, { name: s, rdns: a2, uuid: c2 } = null != i ? i : {};
          eh.test(c2) && s.startsWith(Qu.NAME) && Qu.RDNS.includes(a2) && (clearTimeout(n2), e9(o));
        }), window.dispatchEvent(new Event(Ah.Request));
      });
      return Mh({ provider: e8, sdkInstance: t2 });
    } catch (n2) {
      if (!e7 && window.ethereum) return Mh({ provider: window.ethereum, sdkInstance: t2 });
      throw new Error("Provider not found");
    }
  });
}
!function(e7) {
  e7.Announce = "eip6963:announceProvider", e7.Request = "eip6963:requestProvider";
}(Ah || (Ah = {}));
var Rh = (e7) => a(void 0, void 0, void 0, function* () {
  const { options: t2 } = e7, { infuraAPIKey: n2 } = t2;
  if (!n2) return;
  const r2 = { "0x1": `https://mainnet.infura.io/v3/${n2}`, "0x5": `https://goerli.infura.io/v3/${n2}`, "0xaa36a7": `https://sepolia.infura.io/v3/${n2}`, "0xe708": `https://linea-mainnet.infura.io/v3/${n2}`, "0xe704": `https://linea-goerli.infura.io/v3/${n2}`, "0x89": `https://polygon-mainnet.infura.io/v3/${n2}`, "0x13881": `https://polygon-mumbai.infura.io/v3/${n2}`, "0x45": `https://optimism-mainnet.infura.io/v3/${n2}`, "0x1a4": `https://optimism-goerli.infura.io/v3/${n2}`, "0xa4b1": `https://arbitrum-mainnet.infura.io/v3/${n2}`, "0x66eed": `https://arbitrum-goerli.infura.io/v3/${n2}`, "0x2a15c308d": `https://palm-mainnet.infura.io/v3/${n2}`, "0x2a15c3083": `https://palm-testnet.infura.io/v3/${n2}`, "0xa86a": `https://avalanche-mainnet.infura.io/v3/${n2}`, "0xa869": `https://avalanche-fuji.infura.io/v3/${n2}`, "0x4e454152": `https://aurora-mainnet.infura.io/v3/${n2}`, "0x4e454153": `https://aurora-testnet.infura.io/v3/${n2}`, "0x534e5f4d41494e": `https://starknet-mainnet.infura.io/v3/${n2}`, "0x534e5f474f45524c49": `https://starknet-goerli.infura.io/v3/${n2}`, "0x534e5f474f45524c4932": `https://starknet-goerli2.infura.io/v3/${n2}`, "0xa4ec": `https://celo-mainnet.infura.io/v3/${n2}`, "0xaef3": `https://celo-alfajores.infura.io/v3/${n2}` };
  e7.options.readonlyRPCMap ? e7.options.readonlyRPCMap = Object.assign(Object.assign({}, e7.options.readonlyRPCMap), r2) : e7.options.readonlyRPCMap = r2;
});
var Ph = (e7) => a(void 0, void 0, void 0, function* () {
  const { options: t2 } = e7, { readonlyRPCMap: n2 } = t2;
  if (n2) try {
    xu("[MetaMaskSDK: setupReadOnlyRPCProviders()] Setting up Readonly RPC Providers", n2), e7.setReadOnlyRPCCalls(true);
  } catch (e8) {
    throw new Error("Invalid Infura Settings");
  }
});
function Lh(e7, t2, n2, r2) {
  return new (n2 || (n2 = Promise))(function(t3, i) {
    function o(e8) {
      try {
        a2(r2.next(e8));
      } catch (e9) {
        i(e9);
      }
    }
    function s(e8) {
      try {
        a2(r2.throw(e8));
      } catch (e9) {
        i(e9);
      }
    }
    function a2(e8) {
      var r3;
      e8.done ? t3(e8.value) : (r3 = e8.value, r3 instanceof n2 ? r3 : new n2(function(e9) {
        e9(r3);
      })).then(o, s);
    }
    a2((r2 = r2.apply(e7, [])).next());
  });
}
function Oh(e7, t2) {
  var n2, r2, i, o, s = { label: 0, sent: function() {
    if (1 & i[0]) throw i[1];
    return i[1];
  }, trys: [], ops: [] };
  return o = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a2(o2) {
    return function(a3) {
      return function(o3) {
        if (n2) throw new TypeError("Generator is already executing.");
        for (; s; ) try {
          if (n2 = 1, r2 && (i = 2 & o3[0] ? r2.return : o3[0] ? r2.throw || ((i = r2.return) && i.call(r2), 0) : r2.next) && !(i = i.call(r2, o3[1])).done) return i;
          switch (r2 = 0, i && (o3 = [2 & o3[0], i.value]), o3[0]) {
            case 0:
            case 1:
              i = o3;
              break;
            case 4:
              return s.label++, { value: o3[1], done: false };
            case 5:
              s.label++, r2 = o3[1], o3 = [0];
              continue;
            case 7:
              o3 = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o3[0] && 2 !== o3[0])) {
                s = 0;
                continue;
              }
              if (3 === o3[0] && (!i || o3[1] > i[0] && o3[1] < i[3])) {
                s.label = o3[1];
                break;
              }
              if (6 === o3[0] && s.label < i[1]) {
                s.label = i[1], i = o3;
                break;
              }
              if (i && s.label < i[2]) {
                s.label = i[2], s.ops.push(o3);
                break;
              }
              i[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          o3 = t2.call(e7, s);
        } catch (e8) {
          o3 = [6, e8], r2 = 0;
        } finally {
          n2 = i = 0;
        }
        if (5 & o3[0]) throw o3[1];
        return { value: o3[0] ? o3[1] : void 0, done: true };
      }([o2, a3]);
    };
  }
}
var Th = "INSTALLED";
var Nh = "NOT_INSTALLED";
var Dh = "REGISTERED";
var $h = "REGISTERING";
var Bh = "RELOADING";
var Kh = { CHROME: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", FIREFOX: "https://addons.mozilla.org/firefox/addon/ether-metamask/", DEFAULT: "https://metamask.io" };
var jh = "REGISTRATION_IN_PROGRESS";
var Uh = "FORWARDER_ID";
var Hh = function() {
  function e7(t2) {
    var n2 = void 0 === t2 ? {} : t2, r2 = n2.forwarderOrigin, i = void 0 === r2 ? "https://fwd.metamask.io" : r2, o = n2.forwarderMode, s = void 0 === o ? e7.FORWARDER_MODE.INJECT : o;
    this.forwarderOrigin = i, this.forwarderMode = s, this.state = e7.isMetaMaskInstalled() ? Th : Nh;
    var a2 = e7._detectBrowser();
    this.downloadUrl = a2 ? Kh[a2] : Kh.DEFAULT, this._onMessage = this._onMessage.bind(this), this._onMessageFromForwarder = this._onMessageFromForwarder.bind(this), this._openForwarder = this._openForwarder.bind(this), this._openDownloadPage = this._openDownloadPage.bind(this), this.startOnboarding = this.startOnboarding.bind(this), this.stopOnboarding = this.stopOnboarding.bind(this), window.addEventListener("message", this._onMessage), s === e7.FORWARDER_MODE.INJECT && "true" === sessionStorage.getItem(jh) && e7._injectForwarder(this.forwarderOrigin);
  }
  return e7.prototype._onMessage = function(e8) {
    if (e8.origin === this.forwarderOrigin) return "metamask:reload" === e8.data.type ? this._onMessageFromForwarder(e8) : void console.debug("Unknown message from '" + e8.origin + "' with data " + JSON.stringify(e8.data));
  }, e7.prototype._onMessageUnknownStateError = function(e8) {
    throw new Error("Unknown state: '" + e8 + "'");
  }, e7.prototype._onMessageFromForwarder = function(t2) {
    return Lh(this, 0, void 0, function() {
      return Oh(this, function(n2) {
        switch (n2.label) {
          case 0:
            switch (this.state) {
              case Bh:
                return [3, 1];
              case Nh:
                return [3, 2];
              case Th:
                return [3, 3];
              case $h:
                return [3, 5];
              case Dh:
                return [3, 6];
            }
            return [3, 7];
          case 1:
            return console.debug("Ignoring message while reloading"), [3, 8];
          case 2:
            return console.debug("Reloading now to register with MetaMask"), this.state = Bh, location.reload(), [3, 8];
          case 3:
            return console.debug("Registering with MetaMask"), this.state = $h, [4, e7._register()];
          case 4:
            return n2.sent(), this.state = Dh, t2.source.postMessage({ type: "metamask:registrationCompleted" }, t2.origin), this.stopOnboarding(), [3, 8];
          case 5:
            return console.debug("Already registering - ignoring reload message"), [3, 8];
          case 6:
            return console.debug("Already registered - ignoring reload message"), [3, 8];
          case 7:
            this._onMessageUnknownStateError(this.state), n2.label = 8;
          case 8:
            return [2];
        }
      });
    });
  }, e7.prototype.startOnboarding = function() {
    sessionStorage.setItem(jh, "true"), this._openDownloadPage(), this._openForwarder();
  }, e7.prototype.stopOnboarding = function() {
    "true" === sessionStorage.getItem(jh) && (this.forwarderMode === e7.FORWARDER_MODE.INJECT && (console.debug("Removing forwarder"), e7._removeForwarder()), sessionStorage.setItem(jh, "false"));
  }, e7.prototype._openForwarder = function() {
    this.forwarderMode === e7.FORWARDER_MODE.OPEN_TAB ? window.open(this.forwarderOrigin, "_blank") : e7._injectForwarder(this.forwarderOrigin);
  }, e7.prototype._openDownloadPage = function() {
    window.open(this.downloadUrl, "_blank");
  }, e7.isMetaMaskInstalled = function() {
    return Boolean(window.ethereum && window.ethereum.isMetaMask);
  }, e7._register = function() {
    return window.ethereum.request({ method: "wallet_registerOnboarding" });
  }, e7._injectForwarder = function(e8) {
    var t2 = document.body, n2 = document.createElement("iframe");
    n2.setAttribute("height", "0"), n2.setAttribute("width", "0"), n2.setAttribute("style", "display: none;"), n2.setAttribute("src", e8), n2.setAttribute("id", Uh), t2.insertBefore(n2, t2.children[0]);
  }, e7._removeForwarder = function() {
    var e8;
    null === (e8 = document.getElementById(Uh)) || void 0 === e8 || e8.remove();
  }, e7._detectBrowser = function() {
    var e8 = Hu.parse(window.navigator.userAgent);
    return "Firefox" === e8.browser.name ? "FIREFOX" : ["Chrome", "Chromium"].includes(e8.browser.name || "") ? "CHROME" : null;
  }, e7.FORWARDER_MODE = { INJECT: "INJECT", OPEN_TAB: "OPEN_TAB" }, e7;
}();
function Fh(e7, { wait: t2 = false }) {
  return a(this, void 0, void 0, function* () {
    return xu(`[MetamaskInstaller: startInstaller()] wait=${t2}`), t2 && (yield bh(1e3)), yield e7.checkInstallation();
  });
}
var zh = class {
  constructor({ remote: e7, preferDesktop: t2, platformManager: n2, debug: r2 = false }) {
    this.state = { isInstalling: false, hasInstalled: false, resendRequest: null, preferDesktop: false, platformManager: null, remote: null, debug: false, connectWith: void 0 }, this.state.remote = e7, this.state.preferDesktop = t2, this.state.platformManager = n2, this.state.debug = r2;
  }
  startDesktopOnboarding() {
    return function() {
      return a(this, void 0, void 0, function* () {
        xu("[MetamaskInstaller: startDesktopOnboarding() starting desktop onboarding"), window.ethereum && (window.ethereum = void 0), new Hh().startOnboarding();
      });
    }();
  }
  redirectToProperInstall() {
    return a(this, void 0, void 0, function* () {
      return function(e7) {
        var t2, n2;
        return a(this, void 0, void 0, function* () {
          const { state: r2 } = e7, i = null === (t2 = r2.platformManager) || void 0 === t2 ? void 0 : t2.getPlatformType();
          if (xu(`[MetamaskInstaller: redirectToProperInstall()] platform=${i}`), i === Bo.MetaMaskMobileWebview) return false;
          r2.isInstalling = true;
          try {
            yield null === (n2 = r2.remote) || void 0 === n2 ? void 0 : n2.startConnection({ connectWith: r2.connectWith }), r2.isInstalling = false, r2.hasInstalled = true;
          } catch (e8) {
            throw r2.isInstalling = false, e8;
          }
          return true;
        });
      }(this);
    });
  }
  checkInstallation() {
    return a(this, void 0, void 0, function* () {
      return function(e7) {
        var t2;
        return a(this, void 0, void 0, function* () {
          const { state: n2 } = e7, r2 = null === (t2 = n2.platformManager) || void 0 === t2 ? void 0 : t2.isMetaMaskInstalled();
          return xu(`[MetamaskInstaller: checkInstallation()] isInstalled=${r2}`), !!r2 || (yield e7.redirectToProperInstall());
        });
      }(this);
    });
  }
  start({ wait: e7 = false, connectWith: t2 }) {
    return a(this, void 0, void 0, function* () {
      this.state.connectWith = t2, xu(`[MetaMaskInstaller: start()] wait=${e7}`, t2), yield Fh(this, { wait: e7 });
    });
  }
};
var qh = class {
  constructor({ debug: e7, sdkVersion: t2 }) {
    this.containers = { install: void 0, pending: void 0, select: void 0 }, this.defined = { install: false, pending: false, select: false }, this.debug = null != e7 && e7, this.sdkVersion = t2;
  }
  loadComponent(e7) {
    return a(this, void 0, void 0, function* () {
      if (!this.defined[e7]) {
        this.defined[e7] = true;
        try {
          const e8 = yield Promise.resolve().then(function() {
            return Rp;
          });
          console.log("loader", e8), e8.defineCustomElements();
        } catch (t2) {
          console.error(`Failed to load ${e7} modal:`, t2);
        }
      }
    });
  }
  renderInstallModal(e7) {
    var t2;
    return a(this, void 0, void 0, function* () {
      this.debug && console.debug("ModalLoader: renderInstallModal", e7), this.containers.install = e7.parentElement, yield this.loadComponent("install");
      const n2 = document.createElement("mm-install-modal");
      n2.link = e7.link, n2.preferDesktop = e7.preferDesktop, n2.sdkVersion = null !== (t2 = e7.sdkVersion) && void 0 !== t2 ? t2 : this.sdkVersion, n2.addEventListener("close", ({ detail: { shouldTerminate: t3 } }) => e7.onClose(t3)), n2.addEventListener("startDesktopOnboarding", e7.metaMaskInstaller.startDesktopOnboarding), n2.addEventListener("trackAnalytics", (t3) => {
        var n3;
        return null === (n3 = e7.onAnalyticsEvent) || void 0 === n3 ? void 0 : n3.call(e7, t3.detail);
      }), e7.parentElement.appendChild(n2);
    });
  }
  renderSelectModal(e7) {
    var t2;
    return a(this, void 0, void 0, function* () {
      this.containers.select = e7.parentElement, yield this.loadComponent("select");
      const n2 = document.createElement("mm-select-modal");
      n2.link = e7.link, n2.sdkVersion = null !== (t2 = e7.sdkVersion) && void 0 !== t2 ? t2 : this.sdkVersion, n2.preferDesktop = e7.preferDesktop, n2.addEventListener("close", ({ detail: { shouldTerminate: t3 } }) => e7.onClose(t3)), n2.addEventListener("connectWithExtension", e7.connectWithExtension), e7.parentElement.appendChild(n2), setTimeout(() => this.updateQRCode(e7.link), 100);
    });
  }
  renderPendingModal(e7) {
    var t2;
    return a(this, void 0, void 0, function* () {
      this.containers.pending = e7.parentElement, yield this.loadComponent("pending");
      const n2 = document.createElement("mm-pending-modal");
      n2.sdkVersion = null !== (t2 = e7.sdkVersion) && void 0 !== t2 ? t2 : this.sdkVersion, n2.displayOTP = e7.displayOTP, n2.addEventListener("close", e7.onClose), n2.addEventListener("updateOTPValue", ({ detail: { otpValue: t3 } }) => e7.updateOTPValue(t3)), e7.onDisconnect && n2.addEventListener("disconnect", e7.onDisconnect), e7.parentElement.appendChild(n2);
    });
  }
  updateOTPValue(e7) {
    const t2 = () => {
      var t3;
      const n2 = null === (t3 = this.containers.pending) || void 0 === t3 ? void 0 : t3.querySelector("mm-pending-modal");
      return !!n2 && (n2.otpCode = e7, true);
    };
    setTimeout(() => {
      t2();
    }, 800);
  }
  updateQRCode(e7) {
    var t2, n2;
    const r2 = null === (t2 = this.containers.install) || void 0 === t2 ? void 0 : t2.querySelector("mm-install-modal");
    if (r2) r2.link = e7;
    else {
      const t3 = null === (n2 = this.containers.select) || void 0 === n2 ? void 0 : n2.querySelector("mm-select-modal");
      t3 && (t3.link = e7);
    }
  }
  unmount() {
    Object.entries(this.containers).forEach(([e7, t2]) => {
      var n2;
      null === (n2 = null == t2 ? void 0 : t2.parentNode) || void 0 === n2 || n2.removeChild(t2), this.containers[e7] = void 0;
    });
  }
};
var Vh = ({ link: e7, debug: t2, installer: n2, terminate: r2, connectWithExtension: i, preferDesktop: o, onAnalyticsEvent: s }) => {
  let a2 = null, c2 = null;
  xu("[UI: InstallModal-web: sdkWebInstallModal()] ################## Installing Modal #################"), xu(`[UI: InstallModal-web: sdkWebInstallModal()] link=${e7}`), xu(`[UI: InstallModal-web: sdkWebInstallModal()] npx uri-scheme open "${e7}" --ios`), xu(`[UI: InstallModal-web: sdkWebInstallModal()] npx uri-scheme open "${e7}" --android`), xu(`[UI: InstallModal-web: sdkWebInstallModal()] adb shell am start -a android.intent.action.VIEW -d "${e7}"`);
  const l2 = (e8) => {
    var t3;
    xu("[UI: InstallModal-web: sdkWebInstallModal()] installModal-web unmounting install modal -- shouldTerminate:", e8, c2), (null == c2 ? void 0 : c2.parentNode) && (null === (t3 = c2.parentNode) || void 0 === t3 || t3.removeChild(c2)), c2 = null, a2 = null, true === e8 && (null == r2 || r2());
  };
  return { mount: (r3) => {
    if (xu("[UI: InstallModal-web: sdkWebInstallModal()] installModal-web mounting install modal", c2), c2) return c2.style.display = "block", void (null == a2 || a2.updateQRCode(r3));
    a2 = new qh({ debug: t2, sdkVersion: Zu.version }), c2 = document.createElement("div"), document.body.appendChild(c2), window.extension ? a2.renderSelectModal({ parentElement: c2, connectWithExtension: () => {
      l2(), null == i || i();
    }, onClose: l2, link: e7, preferDesktop: null != o && o }).catch((e8) => {
      console.error(e8);
    }) : a2.renderInstallModal({ parentElement: c2, preferDesktop: null != o && o, link: e7, metaMaskInstaller: n2, onClose: l2, onAnalyticsEvent: s }).catch((e8) => {
      console.error("[UI: InstallModal-web: sdkWebInstallModal()]", e8);
    });
  }, unmount: l2 };
};
var Wh = ({ onDisconnect: e7, debug: t2 }) => {
  let n2 = null, r2 = null;
  const i = () => {
    xu("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web unmount", n2), (null == n2 ? void 0 : n2.parentNode) && n2.parentNode.removeChild(n2), n2 = null, r2 = null;
  }, o = (e8) => {
    xu("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web updateOTPValue", e8), r2 && r2.updateOTPValue(e8);
  }, s = ({ displayOTP: s2 } = { displayOTP: true }) => {
    xu("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web mount", n2), n2 ? n2.style.display = "block" : (r2 = new qh({ debug: t2, sdkVersion: Zu.version }), n2 = document.createElement("div"), document.body.appendChild(n2), r2.renderPendingModal({ parentElement: n2, onClose: i, onDisconnect: e7, updateOTPValue: o, displayOTP: s2 }).catch((e8) => {
      console.error("[UI: pendingModal-web: sdkWebPendingModal()]", e8);
    }));
  };
  return s(), { mount: s, unmount: i, updateOTPValue: o };
};
function Gh(e7, t2) {
  var n2, r2, i, o;
  e7.connector || (xu("[RemoteConnection: initializeConnector()] initialize connector"), e7.connector = new Xo({ platformType: t2.platformManager.getPlatformType(), communicationLayerPreference: t2.communicationLayerPreference, transports: t2.transports, dappMetadata: Object.assign(Object.assign({}, t2.dappMetadata), { source: t2._source }), analytics: t2.enableAnalytics, communicationServerUrl: t2.communicationServerUrl, sdkVersion: Zu.version, context: "dapp", ecies: t2.ecies, storage: t2.storage, logging: t2.logging }), t2.timer && (xu("[RemoteConnection: initializeConnector()] reset background timer", t2.timer), null === (r2 = null === (n2 = t2.timer) || void 0 === n2 ? void 0 : n2.stopBackgroundTimer) || void 0 === r2 || r2.call(n2), null === (o = null === (i = t2.timer) || void 0 === i ? void 0 : i.runBackgroundTimer) || void 0 === o || o.call(i, () => false, 1e4)));
}
function Zh(e7) {
  e7.listeners.forEach(({ event: t2, handler: n2 }) => {
    var r2;
    null === (r2 = e7.connector) || void 0 === r2 || r2.off(t2, n2);
  }), e7.listeners = [];
}
function Yh(e7, t2, n2) {
  return a(this, void 0, void 0, function* () {
    return new Promise((r2, i) => {
      if (!e7.connector) return void i(new Error("No connector available"));
      xu("[RemoteConnection: connectWithModalInstaller()]", { state: e7, options: t2, linkParams: n2 });
      const o = `${e7.useDeeplink ? Xu : Ju}?${n2}`;
      !function(e8, t3, n3) {
        var r3, i2, o2, s;
        e8.installModal = null === (i2 = (r3 = t3.modals).install) || void 0 === i2 ? void 0 : i2.call(r3, { link: n3, preferDesktop: e8.preferDesktop, installer: t3.getMetaMaskInstaller(), terminate: () => {
          xu("[RemoteConnection: showInstallModal() => terminate()] terminate connection"), t3.sdk.terminate().catch((e9) => {
            console.warn("[MMSDK] failed to terminate connection", e9);
          });
        }, debug: e8.developerMode, connectWithExtension: () => {
          var e9;
          return null === (e9 = t3.connectWithExtensionProvider) || void 0 === e9 || e9.call(t3), false;
        }, onAnalyticsEvent: ({ event: n4, params: r4 }) => {
          var i3, o3, s2;
          const a2 = Object.assign(Object.assign({}, r4), { sdkVersion: t3.sdk.getVersion(), dappId: null === (i3 = t3.dappMetadata) || void 0 === i3 ? void 0 : i3.name, source: t3._source, url: null === (o3 = t3.dappMetadata) || void 0 === o3 ? void 0 : o3.url });
          null === (s2 = e8.analytics) || void 0 === s2 || s2.send({ event: n4, params: a2 });
        } }), null === (s = null === (o2 = e8.installModal) || void 0 === o2 ? void 0 : o2.mount) || void 0 === s || s.call(o2, n3);
      }(e7, t2, o), t2.sdk.once(bo.PROVIDER_UPDATE, (e8) => a(this, void 0, void 0, function* () {
        if (xu("[RemoteConnection: connectWithModalInstaller()] once provider_update -- resolving startConnection promise"), e8 !== uh.TERMINATE) i(e8);
        else {
          i({ code: 4001, message: "User rejected the request." });
        }
      })), e7.connector.once(bo.AUTHORIZED, () => {
        r2();
      }), e7.connector.once(bo.REJECTED, () => {
        i(bo.REJECTED);
      }), e7.connector.once(bo.CLIENTS_READY, () => a(this, void 0, void 0, function* () {
        xu("[RemoteConnection: connectWithModalInstaller()] once clients_ready -- resolving startConnection promise"), r2();
      }));
    });
  });
}
function Jh(e7, t2) {
  function n2(t3, n3) {
    var r2;
    null === (r2 = e7.connector) || void 0 === r2 || r2.on(t3, n3), e7.listeners.push({ event: t3, handler: n3 });
  }
  e7.connector && (Zh(e7), n2(bo.WALLET_INIT, ({ accounts: e8, chainId: t3 }) => a(this, void 0, void 0, function* () {
    xu(`[RemoteConnection: setupListeners() => EventType.WALLET_INIT] 'wallet_init' accounts=${e8} chainId=${t3}`);
    const n3 = zu.getProvider();
    n3._setConnected();
    const r2 = { accounts: e8, chainId: t3, isUnlocked: false };
    n3._initializeState(r2), n3.emit("chainChanged", t3), n3.emit("accountsChanged", e8);
  })), n2(bo.AUTHORIZED, () => a(this, void 0, void 0, function* () {
    var t3, n3, r2, i;
    try {
      xu("[RemoteConnection: setupListeners() => EventType.AUTHORIZED] 'authorized' closing modals", e7.pendingModal, e7.installModal);
      const o = zu.getProvider();
      o._setConnected(), null === (n3 = null === (t3 = e7.pendingModal) || void 0 === t3 ? void 0 : t3.unmount) || void 0 === n3 || n3.call(t3), null === (i = null === (r2 = e7.installModal) || void 0 === r2 ? void 0 : r2.unmount) || void 0 === i || i.call(r2, false), e7.otpAnswer = void 0, e7.authorized = true, xu("[RemoteConnection: setupListeners() => EventType.AUTHORIZED] 'authorized' provider.state", o.getState()), yield o.forceInitializeState();
    } catch (e8) {
    }
  })), n2(bo.TERMINATE, () => {
    var t3, n3, r2, i, o;
    null === (n3 = null === (t3 = e7.pendingModal) || void 0 === t3 ? void 0 : t3.unmount) || void 0 === n3 || n3.call(t3), null === (i = null === (r2 = e7.installModal) || void 0 === r2 ? void 0 : r2.unmount) || void 0 === i || i.call(r2, true), e7.pendingModal = void 0, e7.installModal = void 0, e7.otpAnswer = void 0, null === (o = e7.connector) || void 0 === o || o.disconnect({ terminate: true }), e7.authorized = false;
    zu.getProvider().handleDisconnect({ terminate: true }), Zh(e7), xu("[RemoteConnection: setupListeners()] All listeners cleaned up");
  }));
}
function Xh(e7, t2, { initialCheck: n2, connectWith: r2 } = {}) {
  var i, o, s, c2, l2, d2, u2, h2, f3, p2, g2, m2, y2, v2, b2, w2, E2, C2, S2;
  return a(this, void 0, void 0, function* () {
    try {
      if (Gh(e7, t2), !e7.connector) throw new Error("no connector defined");
      Jh(e7);
      const _2 = zu.getProvider();
      e7.authorized = false, _2.emit("connecting");
      const k2 = yield null === (i = e7.connector) || void 0 === i ? void 0 : i.originatorSessionConnect();
      xu(`[RemoteConnection: startConnection()] after originatorSessionConnect initialCheck=${n2}`, k2);
      let x2 = null !== (o = null == k2 ? void 0 : k2.channelId) && void 0 !== o ? o : "", M2 = null !== (c2 = null === (s = e7.connector.getKeyInfo()) || void 0 === s ? void 0 : s.ecies.public) && void 0 !== c2 ? c2 : "", A2 = null !== (d2 = null === (l2 = e7.connector.getKeyInfo()) || void 0 === l2 ? void 0 : l2.ecies.private) && void 0 !== d2 ? d2 : "";
      if (n2 && !k2) return Promise.resolve();
      if (!k2 && !n2) {
        const t3 = yield e7.connector.generateChannelIdConnect();
        x2 = null !== (u2 = t3.channelId) && void 0 !== u2 ? u2 : "", M2 = null !== (h2 = t3.pubKey) && void 0 !== h2 ? h2 : "", A2 = null !== (f3 = t3.privKey) && void 0 !== f3 ? f3 : "";
        const n3 = Date.now();
        null === (p2 = e7.connector.state.storageManager) || void 0 === p2 || p2.persistChannelConfig({ channelId: x2, localKey: A2, lastActive: n3, validUntil: n3 + po });
      }
      if (n2 && (null == k2 ? void 0 : k2.channelId)) return (null === (g2 = e7.connector) || void 0 === g2 ? void 0 : g2.isConnected()) || (xu(`[RemoteConnection: startConnection()] reconnecting to channel initialCheck=${n2}`, k2), yield null === (m2 = e7.connector) || void 0 === m2 ? void 0 : m2.connectToChannel({ channelId: x2 })), Promise.resolve();
      k2 && !(null === (y2 = e7.connector) || void 0 === y2 ? void 0 : y2.isConnected()) && (xu("[RemoteConnection: startConnection()] reconnecting to channel", k2), yield null === (v2 = e7.connector) || void 0 === v2 ? void 0 : v2.connectToChannel({ channelId: x2 }));
      const I2 = (null === (b2 = e7.platformManager) || void 0 === b2 ? void 0 : b2.isSecure()) ? "" : "&t=q", R2 = Zu.version, { iconUrl: P2, name: L2, url: O2, scheme: T2 } = t2.dappMetadata || {}, N2 = null === (w2 = e7.platformManager) || void 0 === w2 ? void 0 : w2.getPlatformType();
      let D2 = "N/A";
      "undefined" != typeof window && window.location && window.location.hostname ? D2 = window.location.hostname : void 0 !== L2 ? D2 = L2 : void 0 !== O2 && (D2 = O2);
      const $2 = { url: null != O2 ? O2 : "", title: null != L2 ? L2 : "", icon: P2, scheme: null != T2 ? T2 : "", apiVersion: R2, dappId: D2 || O2 || "N/A", platform: null != N2 ? N2 : "", source: null !== (E2 = t2._source) && void 0 !== E2 ? E2 : "" }, B2 = gh(JSON.stringify($2));
      let K2 = `channelId=${x2}&v=2&comm=${null !== (C2 = e7.communicationLayerPreference) && void 0 !== C2 ? C2 : ""}&pubkey=${M2}${I2}&originatorInfo=${B2}`;
      if (r2) {
        K2 += `&rpc=${gh(JSON.stringify(r2))}`;
        const t3 = e7.connector.getRPCMethodTracker();
        t3 && (t3[`${r2.id}`] = Object.assign(Object.assign({}, r2), { id: `${r2.id}`, timestamp: Date.now() }));
      }
      const j2 = encodeURI(K2), U2 = `${e7.useDeeplink ? Xu : Ju}?${K2}`;
      return e7.qrcodeLink = U2, e7.developerMode && xu(`[RemoteConnection: startConnection()] qrcodeLink=${j2}`), _2.emit("display_uri", U2), (null === (S2 = e7.platformManager) || void 0 === S2 ? void 0 : S2.isSecure()) ? (yield function(e8, t3) {
        var n3, r3;
        return a(this, void 0, void 0, function* () {
          const i2 = `${Ju}?${t3}`, o2 = `${Xu}?${t3}`;
          null === (r3 = null === (n3 = e8.platformManager) || void 0 === n3 ? void 0 : n3.openDeeplink) || void 0 === r3 || r3.call(n3, i2, o2, "_self");
        });
      }(e7, j2), new Promise((t3, n3) => {
        var r3, i2, o2;
        (null === (r3 = e7.connector) || void 0 === r3 ? void 0 : r3.isAuthorized()) ? t3() : (null === (i2 = e7.connector) || void 0 === i2 || i2.once(bo.AUTHORIZED, () => {
          t3();
        }), null === (o2 = e7.connector) || void 0 === o2 || o2.once(bo.REJECTED, () => {
          n3(bo.REJECTED);
        }));
      })) : Yh(e7, t2, j2);
    } catch (e8) {
      throw console.error("[startConnection] error", e8), e8;
    }
  });
}
var Qh = class {
  constructor(e7) {
    var t2, n2, r2;
    this.state = { connector: void 0, qrcodeLink: void 0, analytics: void 0, developerMode: false, authorized: false, reconnection: false, preferDesktop: false, deeplinkProtocol: false, listeners: [], communicationLayerPreference: void 0, platformManager: void 0, pendingModal: void 0, installModal: void 0, otpAnswer: void 0 }, this.options = e7;
    const i = true === (null === (t2 = e7.logging) || void 0 === t2 ? void 0 : t2.developerMode) || true === (null === (n2 = e7.logging) || void 0 === n2 ? void 0 : n2.sdk);
    this.state.developerMode = i, this.state.analytics = e7.analytics, this.state.preferDesktop = null !== (r2 = e7.preferDesktop) && void 0 !== r2 && r2, this.state.useDeeplink = e7.sdk.options.useDeeplink, this.state.communicationLayerPreference = e7.communicationLayerPreference, this.state.platformManager = e7.platformManager, e7.modals.install || (e7.modals.install = Vh), e7.modals.otp || (e7.modals.otp = Wh);
  }
  startConnection(e7) {
    return a(this, void 0, void 0, function* () {
      return Xh(this.state, this.options, e7);
    });
  }
  initRemoteCommunication({ sdkInstance: e7 }) {
    var t2, n2, r2;
    return a(this, void 0, void 0, function* () {
      const i = yield null === (n2 = null === (t2 = e7.options.storage) || void 0 === t2 ? void 0 : t2.storageManager) || void 0 === n2 ? void 0 : n2.getPersistedChannelConfig();
      if (!this.options.ecies) {
        const e8 = { privateKey: null == i ? void 0 : i.localKey };
        this.options.ecies = e8;
      }
      Gh(this.state, this.options), yield null === (r2 = this.getConnector()) || void 0 === r2 ? void 0 : r2.initFromDappStorage(), Jh(this.state, this.options);
    });
  }
  showActiveModal() {
    return function(e7) {
      var t2, n2, r2, i;
      e7.authorized ? xu("[RemoteConnection: showActiveModal()] already authorized") : e7.pendingModal ? null === (n2 = (t2 = e7.pendingModal).mount) || void 0 === n2 || n2.call(t2) : e7.installModal && (null === (i = (r2 = e7.installModal).mount) || void 0 === i || i.call(r2, e7.qrcodeLink || ""));
    }(this.state);
  }
  closeModal() {
    var e7, t2, n2, r2;
    null === (t2 = null === (e7 = this.state.pendingModal) || void 0 === e7 ? void 0 : e7.unmount) || void 0 === t2 || t2.call(e7), null === (r2 = null === (n2 = this.state.installModal) || void 0 === n2 ? void 0 : n2.unmount) || void 0 === r2 || r2.call(n2, false);
  }
  getUniversalLink() {
    if (!this.state.qrcodeLink) throw new Error("connection not started. run startConnection() first.");
    return this.state.qrcodeLink;
  }
  getChannelConfig() {
    var e7;
    return null === (e7 = this.state.connector) || void 0 === e7 ? void 0 : e7.getChannelConfig();
  }
  getKeyInfo() {
    var e7;
    return null === (e7 = this.state.connector) || void 0 === e7 ? void 0 : e7.getKeyInfo();
  }
  getConnector() {
    if (!this.state.connector) throw new Error("invalid remote connector");
    return this.state.connector;
  }
  getPlatformManager() {
    if (!this.state.platformManager) throw new Error("PlatformManager not available");
    return this.state.platformManager;
  }
  isConnected() {
    var e7;
    return (null === (e7 = this.state.connector) || void 0 === e7 ? void 0 : e7.isReady()) || false;
  }
  isAuthorized() {
    var e7;
    return (null === (e7 = this.state.connector) || void 0 === e7 ? void 0 : e7.isAuthorized()) || false;
  }
  isPaused() {
    var e7;
    return null === (e7 = this.state.connector) || void 0 === e7 ? void 0 : e7.isPaused();
  }
  disconnect(e7) {
    var t2, n2, r2;
    xu("[RemoteConnection: disconnect()]", e7), (null == e7 ? void 0 : e7.terminate) && (zu.getProvider().handleDisconnect({ terminate: true }), null === (n2 = null === (t2 = this.state.pendingModal) || void 0 === t2 ? void 0 : t2.unmount) || void 0 === n2 || n2.call(t2), this.state.otpAnswer = void 0), null === (r2 = this.state.connector) || void 0 === r2 || r2.disconnect(e7), function(e8) {
      xu("[RemoteConnection: cleanupConnector()] cleaning up connector"), e8.connector && (Zh(e8), e8.connector.disconnect({ terminate: true }).catch((e9) => {
        xu("[RemoteConnection: cleanupConnector()] error disconnecting connector", e9);
      }));
    }(this.state);
  }
};
function ef(e7) {
  var n2, r2, i, o, s, c2, l2, d2, u2, h2, f3;
  return a(this, void 0, void 0, function* () {
    const { options: p2 } = e7;
    if (p2.logging = null !== (n2 = p2.logging) && void 0 !== n2 ? n2 : {}, p2.communicationLayerPreference = null !== (r2 = p2.communicationLayerPreference) && void 0 !== r2 ? r2 : $o.SOCKET, void 0 !== p2.enableDebug && (import_debug.default.enable("MM_SDK"), console.warn("enableDebug is removed. Please use enableAnalytics instead.")), p2.enableAnalytics = null === (i = p2.enableAnalytics) || void 0 === i || i, p2.injectProvider = null === (o = p2.injectProvider) || void 0 === o || o, p2.shouldShimWeb3 = null === (s = p2.shouldShimWeb3) || void 0 === s || s, p2.extensionOnly = null === (c2 = p2.extensionOnly) || void 0 === c2 || c2, p2.useDeeplink = null === (l2 = p2.useDeeplink) || void 0 === l2 || l2, p2.storage = null !== (d2 = p2.storage) && void 0 !== d2 ? d2 : { enabled: true }, p2.headless) {
      (0, import_debug.default)("[MetaMaskSDK: performSDKInitialization()] headless mode enabled");
      const e8 = () => {
      }, n3 = { install: () => ({ mount: e8, unmount: e8 }) }, r3 = { installer: e8 };
      p2.modals = n3, p2.ui = r3;
    }
    const g2 = true === (null === (u2 = p2.logging) || void 0 === u2 ? void 0 : u2.developerMode);
    e7.debug = (null === (h2 = p2.logging) || void 0 === h2 ? void 0 : h2.sdk) || g2, xu("[MetaMaskSDK: performSDKInitialization()] options", e7.options);
    const m2 = Object.assign({}, p2.logging);
    g2 && (m2.sdk = true, m2.eciesLayer = true, m2.keyExchangeLayer = true, m2.remoteLayer = true, m2.serviceLayer = true, m2.plaintext = true), yield function(e8) {
      var t2;
      return a(this, void 0, void 0, function* () {
        const { options: n3 } = e8;
        e8.platformManager = new qu({ useDeepLink: null !== (t2 = n3.useDeeplink) && void 0 !== t2 && t2, preferredOpenLink: n3.openDeeplink, debug: e8.debug });
      });
    }(e7), yield function(e8) {
      var t2, n3, r3, i2, o2, s2, c3, l3, d3;
      return a(this, void 0, void 0, function* () {
        const { options: a2 } = e8, u3 = null === (t2 = e8.platformManager) || void 0 === t2 ? void 0 : t2.getPlatformType();
        e8.analytics = new Sh({ serverUrl: null !== (n3 = a2.communicationServerUrl) && void 0 !== n3 ? n3 : ho, enabled: a2.enableAnalytics, originatorInfo: { url: null !== (r3 = a2.dappMetadata.url) && void 0 !== r3 ? r3 : "", title: null !== (i2 = a2.dappMetadata.name) && void 0 !== i2 ? i2 : "", dappId: "undefined" == typeof window || void 0 === window.location ? null !== (l3 = null !== (s2 = null === (o2 = a2.dappMetadata) || void 0 === o2 ? void 0 : o2.name) && void 0 !== s2 ? s2 : null === (c3 = a2.dappMetadata) || void 0 === c3 ? void 0 : c3.url) && void 0 !== l3 ? l3 : "N/A" : window.location.hostname, platform: null != u3 ? u3 : "", source: null !== (d3 = a2._source) && void 0 !== d3 ? d3 : "" } });
      });
    }(e7), yield function(e8) {
      var t2;
      return a(this, void 0, void 0, function* () {
        const { options: n3 } = e8;
        true !== (null === (t2 = n3.storage) || void 0 === t2 ? void 0 : t2.enabled) || n3.storage.storageManager || (n3.storage.storageManager = yield Vu(n3.storage));
      });
    }(e7), yield function(e8) {
      return a(this, void 0, void 0, function* () {
        const { options: t2 } = e8, n3 = /^(http|https):\/\/[^\s]*$/;
        if (t2.dappMetadata) {
          t2.dappMetadata.iconUrl && !n3.test(t2.dappMetadata.iconUrl) && (console.warn("Invalid dappMetadata.iconUrl: URL must start with http:// or https://"), t2.dappMetadata.iconUrl = void 0), t2.dappMetadata.base64Icon && t2.dappMetadata.base64Icon.length > kh && (console.warn("Invalid dappMetadata.base64Icon: Base64-encoded icon string length must be less than 163400 characters"), t2.dappMetadata.base64Icon = void 0), t2.dappMetadata.url && !n3.test(t2.dappMetadata.url) && console.warn("Invalid dappMetadata.url: URL must start with http:// or https://");
          const e9 = _h();
          if (e9 && !t2.dappMetadata.iconUrl && !t2.dappMetadata.base64Icon) {
            const n4 = `${window.location.protocol}//${window.location.host}${e9}`;
            t2.dappMetadata.iconUrl = n4;
          }
        }
        e8.dappMetadata = t2.dappMetadata;
      });
    }(e7), yield Rh(e7), yield Ph(e7);
    const { metamaskBrowserExtension: y2, preferExtension: v2, shouldReturn: b2 } = yield function(e8) {
      var t2, n3, r3, i2;
      return a(this, void 0, void 0, function* () {
        const { options: o2 } = e8;
        let s2, c3 = false, l3 = false;
        if ("undefined" != typeof window && window.ethereum && !(null === (t2 = e8.platformManager) || void 0 === t2 ? void 0 : t2.isMetaMaskMobileWebView())) {
          c3 = "extension" === localStorage.getItem(sh);
          try {
            s2 = yield Ih({ mustBeMetaMask: true, sdkInstance: e8 }), window.extension = s2, s2.on(lh.CHAIN_CHANGED, (t3) => {
              xu(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE chainChanged chainId=${t3}`), Boolean(e8.sdkProvider) && e8.getMobileProvider().emit(lh.CHAIN_CHANGED, t3);
            }), s2.on(lh.ACCOUNTS_CHANGED, (t3) => a(this, void 0, void 0, function* () {
              var n4;
              xu(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE accountsChanged accounts=${t3}`);
              const r4 = Boolean(e8.sdkProvider), i3 = Boolean(e8.extensionActive);
              if (r4 && e8.getMobileProvider().emit(lh.ACCOUNTS_CHANGED, t3), i3 && 0 === (null == t3 ? void 0 : t3.length) && 0 === (yield null === (n4 = e8.getProvider()) || void 0 === n4 ? void 0 : n4.request({ method: th.WALLET_GETPERMISSIONS, params: [] })).length) try {
                yield e8.terminate();
              } catch (e9) {
                xu("[MetaMaskSDK: setupExtensionPreferences()] error terminating on permissions revoked", e9);
              }
            })), s2.on(lh.DISCONNECT, (t3) => {
              xu(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE disconnect error=${t3}`), Boolean(e8.sdkProvider) && e8.getMobileProvider().emit(lh.DISCONNECT, t3);
            }), s2.on(lh.CONNECT, (t3) => {
              xu(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE connect args=${t3}`), Boolean(e8.sdkProvider) && e8.getMobileProvider().emit(lh.CONNECT, t3);
            }), s2.on(lh.CONNECTED, (t3) => {
              xu("[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE connected", t3), Boolean(e8.sdkProvider) && e8.getMobileProvider().emit(lh.CONNECTED, t3);
            });
          } catch (e9) {
            window.extension = void 0;
          }
        } else (null === (n3 = e8.platformManager) || void 0 === n3 ? void 0 : n3.isMetaMaskMobileWebView()) && (null === (r3 = e8.analytics) || void 0 === r3 || r3.send({ event: So.SDK_USE_INAPP_BROWSER }), e8.activeProvider = Mh({ provider: window.ethereum, sdkInstance: e8 }), e8._initialized = true, l3 = true);
        return s2 && o2.extensionOnly && (xu("[MetaMaskSDK: setupExtensionPreferences()] EXTENSION ONLY --- prevent sdk initialization"), null === (i2 = e8.analytics) || void 0 === i2 || i2.send({ event: So.SDK_USE_EXTENSION }), e8.activeProvider = s2, e8.extensionActive = true, e8.extension = s2, e8._initialized = true, l3 = true), { preferExtension: c3, shouldReturn: l3, metamaskBrowserExtension: s2 };
      });
    }(e7);
    if (b2) xu("[MetaMaskSDK: performSDKInitialization()] shouldReturn=true --- prevent sdk initialization");
    else {
      yield function(e8, t2) {
        var n3, r3, i2, o2, s2;
        return a(this, void 0, void 0, function* () {
          const { options: a2 } = e8, c3 = Object.assign({}, a2.logging);
          e8.remoteConnection = new Qh({ preferDesktop: null !== (n3 = a2.preferDesktop) && void 0 !== n3 && n3, communicationLayerPreference: null !== (r3 = a2.communicationLayerPreference) && void 0 !== r3 ? r3 : $o.SOCKET, analytics: e8.analytics, dappMetadata: a2.dappMetadata, _source: a2._source, enableAnalytics: null === (i2 = a2.enableAnalytics) || void 0 === i2 || i2, timer: a2.timer, sdk: e8, platformManager: e8.platformManager, transports: a2.transports, communicationServerUrl: a2.communicationServerUrl, storage: null !== (o2 = a2.storage) && void 0 !== o2 ? o2 : { enabled: true }, getMetaMaskInstaller: () => {
            if (!e8.installer) throw new Error("Invalid SDK status -- installer not initialized");
            return e8.installer;
          }, logging: c3, connectWithExtensionProvider: void 0 === t2 ? void 0 : () => ph(e8), modals: Object.assign(Object.assign({}, a2.modals), { onPendingModalDisconnect: e8.terminate.bind(e8) }) }), yield e8.remoteConnection.initRemoteCommunication({ sdkInstance: e8 }), e8.installer = new zh({ remote: e8.remoteConnection, preferDesktop: null !== (s2 = a2.preferDesktop) && void 0 !== s2 && s2, platformManager: e8.platformManager, debug: e8.debug });
        });
      }(e7, y2), yield Eh(e7), yield function(e8, t2) {
        var n3, r3;
        return a(this, void 0, void 0, function* () {
          const { options: i2 } = e8;
          t2 ? (xu("[MetaMaskSDK: handleAutoAndExtensionConnections()] preferExtension is detected -- connect with it."), null === (n3 = e8.analytics) || void 0 === n3 || n3.send({ event: So.SDK_EXTENSION_UTILIZED }), ph(e8).catch((e9) => {
            console.warn("Can't connect with MetaMask extension...", e9), localStorage.removeItem(sh);
          })) : i2.checkInstallationImmediately && ((null === (r3 = e8.platformManager) || void 0 === r3 ? void 0 : r3.isDesktopWeb()) ? (xu("[MetaMaskSDK: handleAutoAndExtensionConnections()] checkInstallationImmediately"), e8.connect().catch((e9) => {
            xu(`[MetaMaskSDK: handleAutoAndExtensionConnections()] checkInstallationImmediately --- IGNORED --- error on autoconnect _err=${e9}`);
          })) : console.warn("[handleAutoAndExtensionConnections()] checkInstallationImmediately --- IGNORED --- only for web desktop")), e8._initialized = true;
        });
      }(e7, v2);
      try {
        yield null === (f3 = e7.remoteConnection) || void 0 === f3 ? void 0 : f3.startConnection({ initialCheck: true });
      } catch (e8) {
        console.error("[MetaMaskSDK: setupRemoteConnectionAndInstaller()] Error while checking installation", e8);
      }
      e7.emit(Fu.ProviderUpdate, uh.INITIALIZED);
    }
  });
}
var tf = class extends import_eventemitter2.default {
  constructor(e7 = { storage: { enabled: true }, injectProvider: true, forceInjectProvider: false, enableAnalytics: true, shouldShimWeb3: true, useDeeplink: true, extensionOnly: true, headless: false, dappMetadata: { name: "", url: "", iconUrl: "" }, _source: Yu, i18nOptions: { enabled: false } }) {
    var n2, r2, i;
    super(), this.extensionActive = false, this._initialized = false, this.sdkInitPromise = void 0, this.debug = false, this.readonlyRPCCalls = false, this.availableLanguages = ["en"], import_debug.default.disable();
    const o = true === (null === (n2 = e7.logging) || void 0 === n2 ? void 0 : n2.developerMode);
    if (((null === (r2 = e7.logging) || void 0 === r2 ? void 0 : r2.sdk) || o) && import_debug.default.enable("MM_SDK"), xu("[MetaMaskSDK: constructor()]: begin."), this.setMaxListeners(50), !(null === (i = e7.dappMetadata) || void 0 === i ? void 0 : i.url)) {
      if ("undefined" == typeof window || "undefined" == typeof document) throw new Error("You must provide dAppMetadata url");
      e7.dappMetadata = Object.assign(Object.assign({}, e7.dappMetadata), { url: `${window.location.protocol}//${window.location.host}` });
    }
    this.options = e7, this.options._source || (e7._source = Yu), this.init().then(() => {
      xu("[MetaMaskSDK: constructor()]: initialized successfully."), "undefined" != typeof window && (window.mmsdk = this);
    }).catch((e8) => {
      console.error("[MetaMaskSDK: constructor()] error during initialization", e8);
    });
  }
  init() {
    return a(this, void 0, void 0, function* () {
      return function(e7) {
        var t2;
        return a(this, void 0, void 0, function* () {
          if ("undefined" != typeof window && (null === (t2 = window.mmsdk) || void 0 === t2 ? void 0 : t2.isInitialized())) return xu("[MetaMaskSDK: initializeMetaMaskSDK()] already initialized"), Promise.resolve(window.mmsdk);
          if (e7._initialized) return xu("[MetaMaskSDK: initializeMetaMaskSDK()] already initialized"), e7.sdkInitPromise;
          if (e7.sdkInitPromise) return xu("[MetaMaskSDK: initializeMetaMaskSDK()] already initializing"), e7.sdkInitPromise;
          try {
            e7.sdkInitPromise = ef(e7), yield e7.sdkInitPromise;
          } catch (e8) {
            throw console.error(e8), e8;
          }
          return e7.sdkInitPromise;
        });
      }(this);
    });
  }
  isExtensionActive() {
    return this.extensionActive;
  }
  checkExtensionAvailability() {
    var e7;
    return "undefined" != typeof window && Boolean(null === (e7 = window.ethereum) || void 0 === e7 ? void 0 : e7.isMetaMask);
  }
  connect() {
    return a(this, void 0, void 0, function* () {
      return function(e7) {
        return a(this, void 0, void 0, function* () {
          if (e7._initialized || (xu("[MetaMaskSDK: connect()] provider not ready -- wait for init()"), yield e7.init()), xu(`[MetaMaskSDK: connect()] isExtensionActive=${e7.isExtensionActive()} activeProvider`, e7.activeProvider), !e7.activeProvider) throw new Error("SDK state invalid -- undefined provider");
          const t2 = e7.activeProvider.getSelectedAddress();
          return t2 ? [t2] : e7.activeProvider.request({ method: th.ETH_REQUESTACCOUNTS, params: [] });
        });
      }(this);
    });
  }
  connectAndSign({ msg: e7 }) {
    return a(this, void 0, void 0, function* () {
      return fh({ instance: this, msg: e7 });
    });
  }
  connectWith(e7) {
    return a(this, void 0, void 0, function* () {
      return function({ instance: e8, rpc: t2 }) {
        return a(this, void 0, void 0, function* () {
          if (e8._initialized || (xu("[MetaMaskSDK: connectWith()] provider not ready -- wait for init()"), yield e8.init()), xu(`[MetaMaskSDK: connectWith()] method: ${t2.method} rpc=${t2}`), !e8.activeProvider) throw new Error("SDK state invalid -- undefined provider");
          return e8.activeProvider.request({ method: th.METAMASK_CONNECTWITH, params: [t2] });
        });
      }({ instance: this, rpc: e7 });
    });
  }
  resume() {
    return function(e7) {
      var t2, n2, r2;
      return a(this, void 0, void 0, function* () {
        if (!(null === (n2 = null === (t2 = e7.remoteConnection) || void 0 === t2 ? void 0 : t2.getConnector()) || void 0 === n2 ? void 0 : n2.isReady())) return xu("[MetaMaskSDK: resume()] channel is not ready -- starting connection"), void (null === (r2 = e7.remoteConnection) || void 0 === r2 || r2.startConnection());
        xu("[MetaMaskSDK: resume()] channel is ready");
      });
    }(this);
  }
  disconnect() {
    return console.warn("MetaMaskSDK.disconnect() is deprecated, use terminate()"), this.terminate();
  }
  isAuthorized() {
    var e7;
    null === (e7 = this.remoteConnection) || void 0 === e7 || e7.isAuthorized();
  }
  terminate() {
    return function(e7) {
      var t2, n2, r2;
      return a(this, void 0, void 0, function* () {
        if (!(null === (t2 = e7.platformManager) || void 0 === t2 ? void 0 : t2.isMetaMaskMobileWebView())) {
          if (hh && (window.localStorage.removeItem(sh), window.localStorage.removeItem(ch), window.localStorage.removeItem(ah)), e7.extensionActive) {
            try {
              yield null === (n2 = e7.activeProvider) || void 0 === n2 ? void 0 : n2.request({ method: th.WALLET_REVOKEPERMISSIONS, params: [{ eth_accounts: {} }] });
            } catch (e8) {
              xu("[MetaMaskSDK: terminate()] error revoking permissions", e8);
            }
            return e7.options.extensionOnly ? (e7.emit(Fu.ProviderUpdate, uh.TERMINATE), void xu("[MetaMaskSDK: terminate()] extensionOnly --- prevent switching providers")) : (e7.activeProvider = e7.sdkProvider, window.ethereum = e7.activeProvider, e7.extensionActive = false, void e7.emit(Fu.ProviderUpdate, uh.TERMINATE));
          }
          e7.emit(Fu.ProviderUpdate, uh.TERMINATE), xu(`[MetaMaskSDK: terminate()] remoteConnection=${e7.remoteConnection}`), null === (r2 = e7.remoteConnection) || void 0 === r2 || r2.disconnect({ terminate: true, sendMessage: true });
        }
      });
    }(this);
  }
  isInitialized() {
    return this._initialized;
  }
  setReadOnlyRPCCalls(e7) {
    this.readonlyRPCCalls = e7;
  }
  hasReadOnlyRPCCalls() {
    return this.readonlyRPCCalls;
  }
  getProvider() {
    if (this.activeProvider) return this.activeProvider;
    console.warn("MetaMaskSDK: No active provider found");
  }
  getMobileProvider() {
    if (!this.sdkProvider) throw new Error("SDK state invalid -- undefined mobile provider");
    return this.sdkProvider;
  }
  getUniversalLink() {
    var e7;
    const t2 = null === (e7 = this.remoteConnection) || void 0 === e7 ? void 0 : e7.getUniversalLink();
    if (!t2) throw new Error("No Universal Link available, please call eth_requestAccounts first.");
    return t2;
  }
  getChannelId() {
    var e7, t2;
    return null === (t2 = null === (e7 = this.remoteConnection) || void 0 === e7 ? void 0 : e7.getChannelConfig()) || void 0 === t2 ? void 0 : t2.channelId;
  }
  getRPCHistory() {
    var e7, t2;
    return null === (t2 = null === (e7 = this.remoteConnection) || void 0 === e7 ? void 0 : e7.getConnector()) || void 0 === t2 ? void 0 : t2.getRPCMethodTracker();
  }
  getVersion() {
    return Zu.version;
  }
  getWalletStatus() {
    var e7, t2;
    return null === (t2 = null === (e7 = this.remoteConnection) || void 0 === e7 ? void 0 : e7.getConnector()) || void 0 === t2 ? void 0 : t2.getConnectionStatus();
  }
  _getChannelConfig() {
    var e7;
    return null === (e7 = this.remoteConnection) || void 0 === e7 ? void 0 : e7.getChannelConfig();
  }
  _ping() {
    var e7, t2;
    null === (t2 = null === (e7 = this.remoteConnection) || void 0 === e7 ? void 0 : e7.getConnector()) || void 0 === t2 || t2.ping();
  }
  _keyCheck() {
    var e7, t2;
    null === (t2 = null === (e7 = this.remoteConnection) || void 0 === e7 ? void 0 : e7.getConnector()) || void 0 === t2 || t2.keyCheck();
  }
  _getServiceStatus() {
    var e7, t2;
    return null === (t2 = null === (e7 = this.remoteConnection) || void 0 === e7 ? void 0 : e7.getConnector()) || void 0 === t2 ? void 0 : t2.getServiceStatus();
  }
  _getRemoteConnection() {
    return this.remoteConnection;
  }
  _getDappMetadata() {
    return this.dappMetadata;
  }
  _getKeyInfo() {
    var e7;
    return null === (e7 = this.remoteConnection) || void 0 === e7 ? void 0 : e7.getKeyInfo();
  }
  _resetKeys() {
    var e7, t2;
    null === (t2 = null === (e7 = this.remoteConnection) || void 0 === e7 ? void 0 : e7.getConnector()) || void 0 === t2 || t2.resetKeys();
  }
  _getConnection() {
    return this.remoteConnection;
  }
  emit(e7, t2) {
    return super.emit(e7, t2);
  }
  on(e7, t2) {
    return super.on(e7, t2);
  }
};
var nf = Object.freeze({ __proto__: null, StorageManagerWeb: class {
  constructor({ enabled: e7 } = { enabled: false }) {
    this.enabled = false, this.enabled = e7;
  }
  persistChannelConfig(e7) {
    return a(this, void 0, void 0, function* () {
      const t2 = JSON.stringify(e7);
      xu(`[StorageManagerWeb: persistChannelConfig()] enabled=${this.enabled}`, e7), localStorage.setItem(oh, t2);
    });
  }
  getPersistedChannelConfig() {
    return a(this, void 0, void 0, function* () {
      let e7;
      try {
        if (xu(`[StorageManagerWeb: getPersistedChannelConfig()] enabled=${this.enabled}`), e7 = localStorage.getItem(oh), xu("[StorageManagerWeb: getPersistedChannelConfig()]", e7), !e7) return;
        const t2 = JSON.parse(e7);
        return xu("[StorageManagerWeb: getPersistedChannelConfig()] channelConfig", t2), t2;
      } catch (e8) {
        return void console.error("[StorageManagerWeb: getPersistedChannelConfig()] Can't find existing channel config", e8);
      }
    });
  }
  persistAccounts(e7) {
    return a(this, void 0, void 0, function* () {
      xu(`[StorageManagerWeb: persistAccounts()] enabled=${this.enabled}`, e7);
      const t2 = JSON.stringify(e7);
      localStorage.setItem(ah, t2);
    });
  }
  getCachedAccounts() {
    return a(this, void 0, void 0, function* () {
      try {
        const e7 = localStorage.getItem(ah);
        return e7 ? JSON.parse(e7) : [];
      } catch (e7) {
        throw console.error("[StorageManagerWeb: getCachedAccounts()] Error reading cached accounts", e7), e7;
      }
    });
  }
  persistChainId(e7) {
    return a(this, void 0, void 0, function* () {
      xu(`[StorageManagerWeb: persistChainId()] enabled=${this.enabled}`, e7), localStorage.setItem(ch, e7);
    });
  }
  getCachedChainId() {
    return a(this, void 0, void 0, function* () {
      try {
        const e7 = localStorage.getItem(ch);
        return null != e7 ? e7 : void 0;
      } catch (e7) {
        throw console.error("[StorageManagerWeb: getCachedChainId()] Error reading cached chainId", e7), e7;
      }
    });
  }
  terminate() {
    return a(this, void 0, void 0, function* () {
      xu(`[StorageManagerWeb: terminate()] enabled=${this.enabled}`), localStorage.removeItem(oh);
    });
  }
} });
var rf = "hydrated";
var of = false;
var sf = false;
var af = true;
var cf = Object.defineProperty;
var lf = /* @__PURE__ */ new WeakMap();
var df = (e7) => lf.get(e7);
var uf = (e7, t2) => lf.set(t2.$lazyInstance$ = e7, t2);
var hf = (e7, t2) => t2 in e7;
var ff = (e7, t2) => (0, console.error)(e7, t2);
var pf = /* @__PURE__ */ new Map();
var gf = /* @__PURE__ */ new Map();
var mf = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var yf = "undefined" != typeof window ? window : {};
var vf = yf.document || { head: {} };
var bf = { $flags$: 0, $resourcesUrl$: "", jmp: (e7) => e7(), raf: (e7) => requestAnimationFrame(e7), ael: (e7, t2, n2, r2) => e7.addEventListener(t2, n2, r2), rel: (e7, t2, n2, r2) => e7.removeEventListener(t2, n2, r2), ce: (e7, t2) => new CustomEvent(e7, t2) };
var wf = (() => {
  try {
    return new CSSStyleSheet(), "function" == typeof new CSSStyleSheet().replaceSync;
  } catch (e7) {
  }
  return false;
})();
var Ef = false;
var Cf = [];
var Sf = [];
var _f = (e7, t2) => (t3) => {
  e7.push(t3), Ef || (Ef = true, 4 & bf.$flags$ ? Mf(xf) : bf.raf(xf));
};
var kf = (e7) => {
  for (let t2 = 0; t2 < e7.length; t2++) try {
    e7[t2](performance.now());
  } catch (e8) {
    ff(e8);
  }
  e7.length = 0;
};
var xf = () => {
  kf(Cf), kf(Sf), (Ef = Cf.length > 0) && bf.raf(xf);
};
var Mf = (e7) => ((e8) => Promise.resolve(e8))().then(e7);
var Af = _f(Sf);
var If = {};
var Rf = (e7) => "object" === (e7 = typeof e7) || "function" === e7;
function Pf(e7) {
  var t2, n2, r2;
  return null != (r2 = null == (n2 = null == (t2 = e7.head) ? void 0 : t2.querySelector('meta[name="csp-nonce"]')) ? void 0 : n2.getAttribute("content")) ? r2 : void 0;
}
((e7, t2) => {
  for (var n2 in t2) cf(e7, n2, { get: t2[n2], enumerable: true });
})({}, { err: () => Of, map: () => Tf, ok: () => Lf, unwrap: () => $f, unwrapErr: () => Bf });
var Lf = (e7) => ({ isOk: true, isErr: false, value: e7 });
var Of = (e7) => ({ isOk: false, isErr: true, value: e7 });
function Tf(e7, t2) {
  if (e7.isOk) {
    const n2 = t2(e7.value);
    return n2 instanceof Promise ? n2.then((e8) => Lf(e8)) : Lf(n2);
  }
  if (e7.isErr) {
    const t3 = e7.value;
    return Of(t3);
  }
  throw "should never get here";
}
var Nf;
var Df;
var $f = (e7) => {
  if (e7.isOk) return e7.value;
  throw e7.value;
};
var Bf = (e7) => {
  if (e7.isErr) return e7.value;
  throw e7.value;
};
var Kf = (e7, t2, ...n2) => {
  let r2 = null, i = false, o = false;
  const s = [], a2 = (t3) => {
    for (let n3 = 0; n3 < t3.length; n3++) r2 = t3[n3], Array.isArray(r2) ? a2(r2) : null != r2 && "boolean" != typeof r2 && ((i = "function" != typeof e7 && !Rf(r2)) && (r2 = String(r2)), i && o ? s[s.length - 1].$text$ += r2 : s.push(i ? jf(null, r2) : r2), o = i);
  };
  if (a2(n2), t2) {
    const e8 = t2.className || t2.class;
    e8 && (t2.class = "object" != typeof e8 ? e8 : Object.keys(e8).filter((t3) => e8[t3]).join(" "));
  }
  if ("function" == typeof e7) return e7(null === t2 ? {} : t2, s, Hf);
  const c2 = jf(e7, null);
  return c2.$attrs$ = t2, s.length > 0 && (c2.$children$ = s), c2;
};
var jf = (e7, t2) => {
  const n2 = { $flags$: 0, $tag$: e7, $text$: t2, $elm$: null, $children$: null, $attrs$: null };
  return n2;
};
var Uf = {};
var Hf = { forEach: (e7, t2) => e7.map(Ff).forEach(t2), map: (e7, t2) => e7.map(Ff).map(t2).map(zf) };
var Ff = (e7) => ({ vattrs: e7.$attrs$, vchildren: e7.$children$, vkey: e7.$key$, vname: e7.$name$, vtag: e7.$tag$, vtext: e7.$text$ });
var zf = (e7) => {
  if ("function" == typeof e7.vtag) {
    const t3 = { ...e7.vattrs };
    return e7.vkey && (t3.key = e7.vkey), e7.vname && (t3.name = e7.vname), Kf(e7.vtag, t3, ...e7.vchildren || []);
  }
  const t2 = jf(e7.vtag, e7.vtext);
  return t2.$attrs$ = e7.vattrs, t2.$children$ = e7.vchildren, t2.$key$ = e7.vkey, t2.$name$ = e7.vname, t2;
};
var qf = (e7) => df(e7).$hostElement$;
var Vf = (e7, t2, n2) => {
  const r2 = qf(e7);
  return { emit: (e8) => Wf(r2, t2, { bubbles: !!(4 & n2), composed: !!(2 & n2), cancelable: !!(1 & n2), detail: e8 }) };
};
var Wf = (e7, t2, n2) => {
  const r2 = bf.ce(t2, n2);
  return e7.dispatchEvent(r2), r2;
};
var Gf = /* @__PURE__ */ new WeakMap();
var Zf = (e7) => {
  const t2 = e7.$cmpMeta$, n2 = e7.$hostElement$, r2 = t2.$flags$, i = (t2.$tagName$, () => {
  }), o = ((e8, t3, n3) => {
    var r3;
    const i2 = Yf(t3), o2 = gf.get(i2);
    if (e8 = 11 === e8.nodeType ? e8 : vf, o2) if ("string" == typeof o2) {
      e8 = e8.head || e8;
      let n4, s = Gf.get(e8);
      if (s || Gf.set(e8, s = /* @__PURE__ */ new Set()), !s.has(i2)) {
        {
          n4 = vf.createElement("style"), n4.innerHTML = o2;
          const i3 = null != (r3 = bf.$nonce$) ? r3 : Pf(vf);
          if (null != i3 && n4.setAttribute("nonce", i3), !(1 & t3.$flags$)) if ("HEAD" === e8.nodeName) {
            const t4 = e8.querySelectorAll("link[rel=preconnect]"), r4 = t4.length > 0 ? t4[t4.length - 1].nextSibling : e8.querySelector("style");
            e8.insertBefore(n4, r4);
          } else if ("host" in e8) if (wf) {
            const t4 = new CSSStyleSheet();
            t4.replaceSync(o2), e8.adoptedStyleSheets = [t4, ...e8.adoptedStyleSheets];
          } else {
            const t4 = e8.querySelector("style");
            t4 ? t4.innerHTML = o2 + t4.innerHTML : e8.prepend(n4);
          }
          else e8.append(n4);
          1 & t3.$flags$ && "HEAD" !== e8.nodeName && e8.insertBefore(n4, null);
        }
        4 & t3.$flags$ && (n4.innerHTML += mf), s && s.add(i2);
      }
    } else e8.adoptedStyleSheets.includes(o2) || (e8.adoptedStyleSheets = [...e8.adoptedStyleSheets, o2]);
    return i2;
  })(n2.shadowRoot ? n2.shadowRoot : n2.getRootNode(), t2);
  10 & r2 && 2 & r2 && (n2["s-sc"] = o, n2.classList.add(o + "-h")), i();
};
var Yf = (e7, t2) => "sc-" + e7.$tagName$;
var Jf = (e7, t2, n2, r2, i, o) => {
  if (n2 !== r2) {
    let s = hf(e7, t2), a2 = t2.toLowerCase();
    if ("class" === t2) {
      const t3 = e7.classList, i2 = Qf(n2), o2 = Qf(r2);
      t3.remove(...i2.filter((e8) => e8 && !o2.includes(e8))), t3.add(...o2.filter((e8) => e8 && !i2.includes(e8)));
    } else if ("style" === t2) {
      for (const t3 in n2) r2 && null != r2[t3] || (t3.includes("-") ? e7.style.removeProperty(t3) : e7.style[t3] = "");
      for (const t3 in r2) n2 && r2[t3] === n2[t3] || (t3.includes("-") ? e7.style.setProperty(t3, r2[t3]) : e7.style[t3] = r2[t3]);
    } else if (s || "o" !== t2[0] || "n" !== t2[1]) {
      const a3 = Rf(r2);
      if ((s || a3 && null !== r2) && !i) try {
        if (e7.tagName.includes("-")) e7[t2] = r2;
        else {
          const i2 = null == r2 ? "" : r2;
          "list" === t2 ? s = false : null != n2 && e7[t2] == i2 || ("function" == typeof e7.__lookupSetter__(t2) ? e7[t2] = i2 : e7.setAttribute(t2, i2));
        }
      } catch (e8) {
      }
      null == r2 || false === r2 ? false === r2 && "" !== e7.getAttribute(t2) || e7.removeAttribute(t2) : (!s || 4 & o || i) && !a3 && (r2 = true === r2 ? "" : r2, e7.setAttribute(t2, r2));
    } else if (t2 = "-" === t2[2] ? t2.slice(3) : hf(yf, a2) ? a2.slice(2) : a2[2] + t2.slice(3), n2 || r2) {
      const i2 = t2.endsWith(ep);
      t2 = t2.replace(tp, ""), n2 && bf.rel(e7, t2, n2, i2), r2 && bf.ael(e7, t2, r2, i2);
    }
  }
};
var Xf = /\s/;
var Qf = (e7) => e7 ? e7.split(Xf) : [];
var ep = "Capture";
var tp = new RegExp(ep + "$");
var np = (e7, t2, n2) => {
  const r2 = 11 === t2.$elm$.nodeType && t2.$elm$.host ? t2.$elm$.host : t2.$elm$, i = e7 && e7.$attrs$ || If, o = t2.$attrs$ || If;
  for (const e8 of rp(Object.keys(i))) e8 in o || Jf(r2, e8, i[e8], void 0, n2, t2.$flags$);
  for (const e8 of rp(Object.keys(o))) Jf(r2, e8, i[e8], o[e8], n2, t2.$flags$);
};
function rp(e7) {
  return e7.includes("ref") ? [...e7.filter((e8) => "ref" !== e8), "ref"] : e7;
}
var ip = false;
var op = false;
var sp = (e7, t2, n2, r2) => {
  const i = t2.$children$[n2];
  let o, s, a2 = 0;
  if (null !== i.$text$) o = i.$elm$ = vf.createTextNode(i.$text$);
  else {
    op || (op = "svg" === i.$tag$), o = i.$elm$ = vf.createElementNS(op ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", !ip && sf && 2 & i.$flags$ ? "slot-fb" : i.$tag$), op && "foreignObject" === i.$tag$ && (op = false), np(null, i, op);
    if (!!o.getRootNode().querySelector("body") && of && ((e8) => null != e8)(Nf) && o["s-si"] !== Nf && o.classList.add(o["s-si"] = Nf), i.$children$) for (a2 = 0; a2 < i.$children$.length; ++a2) s = sp(e7, i, a2), s && o.appendChild(s);
    "svg" === i.$tag$ ? op = false : "foreignObject" === o.tagName && (op = true);
  }
  return o["s-hn"] = Df, o;
};
var ap = (e7, t2, n2, r2, i, o) => {
  let s, a2 = e7;
  for (a2.shadowRoot && a2.tagName === Df && (a2 = a2.shadowRoot); i <= o; ++i) r2[i] && (s = sp(null, n2, i), s && (r2[i].$elm$ = s, up(a2, s, t2)));
};
var cp = (e7, t2, n2) => {
  for (let r2 = t2; r2 <= n2; ++r2) {
    const t3 = e7[r2];
    if (t3) {
      const e8 = t3.$elm$;
      e8 && e8.remove();
    }
  }
};
var lp = (e7, t2, n2 = false) => e7.$tag$ === t2.$tag$;
var dp = (e7, t2, n2 = false) => {
  const r2 = t2.$elm$ = e7.$elm$, i = e7.$children$, o = t2.$children$, s = t2.$tag$, a2 = t2.$text$;
  null === a2 ? (np(e7, t2, op = "svg" === s || "foreignObject" !== s && op), null !== i && null !== o ? ((e8, t3, n3, r3, i2 = false) => {
    let o2, s2 = 0, a3 = 0, c2 = t3.length - 1, l2 = t3[0], d2 = t3[c2], u2 = r3.length - 1, h2 = r3[0], f3 = r3[u2];
    for (; s2 <= c2 && a3 <= u2; ) null == l2 ? l2 = t3[++s2] : null == d2 ? d2 = t3[--c2] : null == h2 ? h2 = r3[++a3] : null == f3 ? f3 = r3[--u2] : lp(l2, h2, i2) ? (dp(l2, h2, i2), l2 = t3[++s2], h2 = r3[++a3]) : lp(d2, f3, i2) ? (dp(d2, f3, i2), d2 = t3[--c2], f3 = r3[--u2]) : lp(l2, f3, i2) ? (dp(l2, f3, i2), up(e8, l2.$elm$, d2.$elm$.nextSibling), l2 = t3[++s2], f3 = r3[--u2]) : lp(d2, h2, i2) ? (dp(d2, h2, i2), up(e8, d2.$elm$, l2.$elm$), d2 = t3[--c2], h2 = r3[++a3]) : (o2 = sp(t3 && t3[a3], n3, a3), h2 = r3[++a3], o2 && up(l2.$elm$.parentNode, o2, l2.$elm$));
    s2 > c2 ? ap(e8, null == r3[u2 + 1] ? null : r3[u2 + 1].$elm$, n3, r3, a3, u2) : a3 > u2 && cp(t3, s2, c2);
  })(r2, i, t2, o, n2) : null !== o ? (null !== e7.$text$ && (r2.textContent = ""), ap(r2, null, t2, o, 0, o.length - 1)) : !n2 && af && null !== i && cp(i, 0, i.length - 1), op && "svg" === s && (op = false)) : e7.$text$ !== a2 && (r2.data = a2);
};
var up = (e7, t2, n2) => null == e7 ? void 0 : e7.insertBefore(t2, n2);
var hp = (e7, t2, n2 = false) => {
  const r2 = e7.$hostElement$, i = e7.$cmpMeta$, o = e7.$vnode$ || jf(null, null), s = (a2 = t2) && a2.$tag$ === Uf ? t2 : Kf(null, null, t2);
  var a2;
  if (Df = r2.tagName, n2 && s.$attrs$) for (const e8 of Object.keys(s.$attrs$)) r2.hasAttribute(e8) && !["key", "ref", "style", "class"].includes(e8) && (s.$attrs$[e8] = r2[e8]);
  s.$tag$ = null, s.$flags$ |= 4, e7.$vnode$ = s, s.$elm$ = o.$elm$ = r2.shadowRoot || r2, Nf = r2["s-sc"], ip = 0 != (1 & i.$flags$), dp(o, s, n2);
};
var fp = (e7, t2) => {
  t2 && !e7.$onRenderResolve$ && t2["s-p"] && t2["s-p"].push(new Promise((t3) => e7.$onRenderResolve$ = t3));
};
var pp = (e7, t2) => {
  if (e7.$flags$ |= 16, 4 & e7.$flags$) return void (e7.$flags$ |= 512);
  fp(e7, e7.$ancestorComponent$);
  return Af(() => gp(e7, t2));
};
var gp = (e7, t2) => {
  const n2 = e7.$hostElement$, r2 = (e7.$cmpMeta$.$tagName$, () => {
  }), i = e7.$lazyInstance$;
  if (!i) throw new Error(`Can't render component <${n2.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
  return r2(), mp(void 0, () => vp(e7, i, t2));
};
var mp = (e7, t2) => yp(e7) ? e7.then(t2).catch((e8) => {
  console.error(e8), t2();
}) : t2();
var yp = (e7) => e7 instanceof Promise || e7 && e7.then && "function" == typeof e7.then;
var vp = async (e7, t2, n2) => {
  var r2;
  const i = e7.$hostElement$, o = (e7.$cmpMeta$.$tagName$, () => {
  }), s = i["s-rc"];
  n2 && Zf(e7);
  const a2 = (e7.$cmpMeta$.$tagName$, () => {
  });
  bp(e7, t2, i, n2), s && (s.map((e8) => e8()), i["s-rc"] = void 0), a2(), o();
  {
    const t3 = null != (r2 = i["s-p"]) ? r2 : [], n3 = () => wp(e7);
    0 === t3.length ? n3() : (Promise.all(t3).then(n3), e7.$flags$ |= 4, t3.length = 0);
  }
};
var bp = (e7, t2, n2, r2) => {
  try {
    t2 = t2.render(), e7.$flags$ &= -17, e7.$flags$ |= 2, hp(e7, t2, r2);
  } catch (t3) {
    ff(t3, e7.$hostElement$);
  }
  return null;
};
var wp = (e7) => {
  e7.$cmpMeta$.$tagName$;
  const t2 = e7.$hostElement$, n2 = () => {
  }, r2 = e7.$lazyInstance$, i = e7.$ancestorComponent$;
  64 & e7.$flags$ ? n2() : (e7.$flags$ |= 64, Sp(t2), Cp(r2, "componentDidLoad"), n2(), e7.$onReadyResolve$(t2), i || Ep()), e7.$onRenderResolve$ && (e7.$onRenderResolve$(), e7.$onRenderResolve$ = void 0), 512 & e7.$flags$ && Mf(() => pp(e7, false)), e7.$flags$ &= -517;
};
var Ep = (e7) => {
  Sp(vf.documentElement), Mf(() => Wf(yf, "appload", { detail: { namespace: "sdk-install-modal-web" } }));
};
var Cp = (e7, t2, n2) => {
  if (e7 && e7[t2]) try {
    return e7[t2](n2);
  } catch (e8) {
    ff(e8);
  }
};
var Sp = (e7) => {
  var t2;
  return e7.classList.add(null != (t2 = rf) ? t2 : "hydrated");
};
var _p = (e7, t2, n2, r2) => {
  const i = df(e7);
  if (!i) throw new Error(`Couldn't find host element for "${r2.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`);
  const o = i.$hostElement$, s = i.$instanceValues$.get(t2), a2 = i.$flags$, c2 = i.$lazyInstance$;
  var l2, d2;
  l2 = n2, d2 = r2.$members$[t2][0], n2 = null == l2 || Rf(l2) ? l2 : 4 & d2 ? "false" !== l2 && ("" === l2 || !!l2) : 1 & d2 ? String(l2) : l2;
  const u2 = Number.isNaN(s) && Number.isNaN(n2);
  if ((!(8 & a2) || void 0 === s) && (n2 !== s && !u2) && (i.$instanceValues$.set(t2, n2), c2)) {
    if (r2.$watchers$ && 128 & a2) {
      const e8 = r2.$watchers$[t2];
      e8 && e8.map((e9) => {
        try {
          c2[e9](n2, s, t2);
        } catch (e10) {
          ff(e10, o);
        }
      });
    }
    2 == (18 & a2) && pp(i, false);
  }
};
var kp = (e7, t2, n2) => {
  var r2, i;
  const o = e7.prototype;
  if (t2.$members$ || t2.$watchers$ || e7.watchers) {
    e7.watchers && !t2.$watchers$ && (t2.$watchers$ = e7.watchers);
    const s = Object.entries(null != (r2 = t2.$members$) ? r2 : {});
    if (s.map(([e8, [r3]]) => {
      (31 & r3 || 2 & n2 && 32 & r3) && Object.defineProperty(o, e8, { get() {
        return t3 = e8, df(this).$instanceValues$.get(t3);
        var t3;
      }, set(n3) {
        _p(this, e8, n3, t2);
      }, configurable: true, enumerable: true });
    }), 1 & n2) {
      const n3 = /* @__PURE__ */ new Map();
      o.attributeChangedCallback = function(e8, r3, i2) {
        bf.jmp(() => {
          var s2;
          const a2 = n3.get(e8);
          if (this.hasOwnProperty(a2)) i2 = this[a2], delete this[a2];
          else {
            if (o.hasOwnProperty(a2) && "number" == typeof this[a2] && this[a2] == i2) return;
            if (null == a2) {
              const n4 = df(this), o2 = null == n4 ? void 0 : n4.$flags$;
              if (o2 && !(8 & o2) && 128 & o2 && i2 !== r3) {
                const o3 = n4.$lazyInstance$, a3 = null == (s2 = t2.$watchers$) ? void 0 : s2[e8];
                null == a3 || a3.forEach((t3) => {
                  null != o3[t3] && o3[t3].call(o3, i2, r3, e8);
                });
              }
              return;
            }
          }
          this[a2] = (null !== i2 || "boolean" != typeof this[a2]) && i2;
        });
      }, e7.observedAttributes = Array.from(/* @__PURE__ */ new Set([...Object.keys(null != (i = t2.$watchers$) ? i : {}), ...s.filter(([e8, t3]) => 15 & t3[0]).map(([e8, t3]) => {
        const r3 = t3[1] || e8;
        return n3.set(r3, e8), r3;
      })]));
    }
  }
  return e7;
};
var xp = async (e7, t2, n2, r2) => {
  let i;
  if (0 == (32 & t2.$flags$)) {
    t2.$flags$ |= 32;
    if (n2.$lazyBundleId$) {
      const e8 = ((e9, t3, n3) => {
        const r4 = e9.$tagName$.replace(/-/g, "_"), i2 = e9.$lazyBundleId$;
        if (!i2) return;
        const o2 = pf.get(i2);
        if (o2) return o2[r4];
        {
          const e10 = (e11) => (pf.set(i2, e11), e11[r4]);
          if ("mm-install-modal_3" === i2) return Promise.resolve().then(function() {
            return gg;
          }).then(e10, ff);
        }
        return /* webpackIgnore: true */ /* @vite-ignore */ /* webpackInclude: /\.entry\.js$/ */ /* webpackExclude: /\.system\.entry\.js$/ */ /* webpackMode: "lazy" */ globImport_entry_js(`./${i2}.entry.js`).then((e10) => (pf.set(i2, e10), e10[r4]), ff);
      })(n2);
      if (e8 && "then" in e8) {
        const t3 = () => {
        };
        i = await e8, t3();
      } else i = e8;
      if (!i) throw new Error(`Constructor for "${n2.$tagName$}#${t2.$modeName$}" was not found`);
      i.isProxied || (n2.$watchers$ = i.watchers, kp(i, n2, 2), i.isProxied = true);
      const r3 = (n2.$tagName$, () => {
      });
      t2.$flags$ |= 8;
      try {
        new i(t2);
      } catch (e9) {
        ff(e9);
      }
      t2.$flags$ &= -9, t2.$flags$ |= 128, r3(), Mp(t2.$lazyInstance$);
    } else {
      i = e7.constructor;
      const n3 = e7.localName;
      customElements.whenDefined(n3).then(() => t2.$flags$ |= 128);
    }
    if (i && i.style) {
      let e8;
      "string" == typeof i.style && (e8 = i.style);
      const t3 = Yf(n2);
      if (!gf.has(t3)) {
        const r3 = (n2.$tagName$, () => {
        });
        ((e9, t4, n3) => {
          let r4 = gf.get(e9);
          wf && n3 ? (r4 = r4 || new CSSStyleSheet(), "string" == typeof r4 ? r4 = t4 : r4.replaceSync(t4)) : r4 = t4, gf.set(e9, r4);
        })(t3, e8, !!(1 & n2.$flags$)), r3();
      }
    }
  }
  const o = t2.$ancestorComponent$, s = () => pp(t2, true);
  o && o["s-rc"] ? o["s-rc"].push(s) : s();
};
var Mp = (e7) => {
  Cp(e7, "connectedCallback");
};
var Ap = (e7) => {
  Cp(e7, "disconnectedCallback");
};
var Ip = (e7, t2 = {}) => {
  var n2;
  const r2 = () => {
  }, i = [], o = t2.exclude || [], s = yf.customElements, a2 = vf.head, c2 = a2.querySelector("meta[charset]"), l2 = vf.createElement("style"), d2 = [];
  let u2, h2 = true;
  Object.assign(bf, t2), bf.$resourcesUrl$ = new URL(t2.resourcesUrl || "./", vf.baseURI).href;
  let f3 = false;
  if (e7.map((e8) => {
    e8[1].map((t3) => {
      var n3;
      const r3 = { $flags$: t3[0], $tagName$: t3[1], $members$: t3[2], $listeners$: t3[3] };
      4 & r3.$flags$ && (f3 = true), r3.$members$ = t3[2], r3.$watchers$ = null != (n3 = t3[4]) ? n3 : {};
      const a3 = r3.$tagName$, c3 = class extends HTMLElement {
        constructor(e9) {
          if (super(e9), this.hasRegisteredEventListeners = false, ((e10, t4) => {
            const n4 = { $flags$: 0, $hostElement$: e10, $cmpMeta$: t4, $instanceValues$: /* @__PURE__ */ new Map() };
            n4.$onReadyPromise$ = new Promise((e11) => n4.$onReadyResolve$ = e11), e10["s-p"] = [], e10["s-rc"] = [], lf.set(e10, n4);
          })(e9 = this, r3), 1 & r3.$flags$) if (e9.shadowRoot) {
            if ("open" !== e9.shadowRoot.mode) throw new Error(`Unable to re-use existing shadow root for ${r3.$tagName$}! Mode is set to ${e9.shadowRoot.mode} but Stencil only supports open shadow roots.`);
          } else e9.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          df(this), this.hasRegisteredEventListeners || (this.hasRegisteredEventListeners = true), u2 && (clearTimeout(u2), u2 = null), h2 ? d2.push(this) : bf.jmp(() => ((e9) => {
            if (0 == (1 & bf.$flags$)) {
              const t4 = df(e9), n4 = t4.$cmpMeta$, r4 = (n4.$tagName$, () => {
              });
              if (1 & t4.$flags$) (null == t4 ? void 0 : t4.$lazyInstance$) ? Mp(t4.$lazyInstance$) : (null == t4 ? void 0 : t4.$onReadyPromise$) && t4.$onReadyPromise$.then(() => Mp(t4.$lazyInstance$));
              else {
                t4.$flags$ |= 1;
                {
                  let n5 = e9;
                  for (; n5 = n5.parentNode || n5.host; ) if (n5["s-p"]) {
                    fp(t4, t4.$ancestorComponent$ = n5);
                    break;
                  }
                }
                n4.$members$ && Object.entries(n4.$members$).map(([t5, [n5]]) => {
                  if (31 & n5 && e9.hasOwnProperty(t5)) {
                    const n6 = e9[t5];
                    delete e9[t5], e9[t5] = n6;
                  }
                }), xp(e9, t4, n4);
              }
              r4();
            }
          })(this));
        }
        disconnectedCallback() {
          bf.jmp(() => (async (e9) => {
            if (0 == (1 & bf.$flags$)) {
              const t4 = df(e9);
              (null == t4 ? void 0 : t4.$lazyInstance$) ? Ap(t4.$lazyInstance$) : (null == t4 ? void 0 : t4.$onReadyPromise$) && t4.$onReadyPromise$.then(() => Ap(t4.$lazyInstance$));
            }
          })(this));
        }
        componentOnReady() {
          return df(this).$onReadyPromise$;
        }
      };
      r3.$lazyBundleId$ = e8[0], o.includes(a3) || s.get(a3) || (i.push(a3), s.define(a3, kp(c3, r3, 1)));
    });
  }), i.length > 0 && (f3 && (l2.textContent += mf), l2.textContent += i.sort() + "{visibility:hidden}.hydrated{visibility:inherit}", l2.innerHTML.length)) {
    l2.setAttribute("data-styles", "");
    const e8 = null != (n2 = bf.$nonce$) ? n2 : Pf(vf);
    null != e8 && l2.setAttribute("nonce", e8), a2.insertBefore(l2, c2 ? c2.nextSibling : a2.firstChild);
  }
  h2 = false, d2.length ? d2.map((e8) => e8.connectedCallback()) : bf.jmp(() => u2 = setTimeout(Ep, 30)), r2();
};
!function() {
  if ("undefined" != typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var e7 = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(e7, [], this.constructor);
    }, HTMLElement.prototype = e7.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, e7);
  }
}();
var Rp = Object.freeze({ __proto__: null, defineCustomElements: async (e7, t2) => {
  if ("undefined" != typeof window) return await void 0, Ip([["mm-install-modal_3", [[1, "mm-install-modal", { link: [1], sdkVersion: [1, "sdk-version"], preferDesktop: [4, "prefer-desktop"], tab: [32], isDefaultTab: [32], translationsLoaded: [32] }, null, { preferDesktop: ["updatePreferDesktop"] }], [1, "mm-pending-modal", { displayOTP: [4, "display-o-t-p"], sdkVersion: [1, "sdk-version"], otpCode: [1, "otp-code"], translationsLoaded: [32] }], [1, "mm-select-modal", { link: [1], sdkVersion: [1, "sdk-version"], preferDesktop: [4, "prefer-desktop"], tab: [32], isDefaultTab: [32], translationsLoaded: [32] }, null, { preferDesktop: ["updatePreferDesktop"] }]]]], t2);
}, setNonce: (e7) => bf.$nonce$ = e7 });
var Pp = { fontFamily: "Roboto, sans-serif" };
var Lp = ({ className: e7 }, t2) => Kf("div", { style: Pp, class: e7 }, t2);
var Op = ({ Icon: e7, text: t2 }) => Kf("div", { class: "flexContainer", style: { padding: "6", flexDirection: "row" } }, Kf("div", { class: "flexItem1" }, Kf(e7, null)), Kf("div", { class: "flexItem11" }, Kf("span", { style: { lineHeight: "2", color: "black" } }, t2)));
var Tp = () => Kf("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Kf("path", { d: "M20.0002 7.9702V10.0302C20.0002 10.5802 19.5602 11.0302 19.0002 11.0502H17.0402C15.9602 11.0502 14.9702 10.2602 14.8802 9.1802C14.8202 8.5502 15.0602 7.9602 15.4802 7.5502C15.8502 7.1702 16.3602 6.9502 16.9202 6.9502H19.0002C19.5602 6.9702 20.0002 7.4202 20.0002 7.9702Z", fill: "#037DD6" }), Kf("path", { d: "M18.47 12.55H17.04C15.14 12.55 13.54 11.12 13.38 9.3C13.29 8.26 13.67 7.22 14.43 6.48C15.07 5.82 15.96 5.45 16.92 5.45H18.47C18.76 5.45 19 5.21 18.97 4.92C18.75 2.49 17.14 0.83 14.75 0.55C14.51 0.51 14.26 0.5 14 0.5H5C4.72 0.5 4.45 0.52 4.19 0.56C1.64 0.88 0 2.78 0 5.5V12.5C0 15.26 2.24 17.5 5 17.5H14C16.8 17.5 18.73 15.75 18.97 13.08C19 12.79 18.76 12.55 18.47 12.55ZM11 6.75H5C4.59 6.75 4.25 6.41 4.25 6C4.25 5.59 4.59 5.25 5 5.25H11C11.41 5.25 11.75 5.59 11.75 6C11.75 6.41 11.41 6.75 11 6.75Z", fill: "#037DD6" }));
var Np = () => Kf("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Kf("path", { d: "M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z", fill: "#037DD6" }));
var Dp = () => Kf("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Kf("path", { d: "M16.28 7.53V6.28C16.28 3.58 15.63 0 10 0C4.37 0 3.72 3.58 3.72 6.28V7.53C0.92 7.88 0 9.3 0 12.79V14.65C0 18.75 1.25 20 5.35 20H14.65C18.75 20 20 18.75 20 14.65V12.79C20 9.3 19.08 7.88 16.28 7.53ZM10 16.74C8.33 16.74 6.98 15.38 6.98 13.72C6.98 12.05 8.34 10.7 10 10.7C11.66 10.7 13.02 12.06 13.02 13.72C13.02 15.39 11.67 16.74 10 16.74ZM5.35 7.44C5.27 7.44 5.2 7.44 5.12 7.44V6.28C5.12 3.35 5.95 1.4 10 1.4C14.05 1.4 14.88 3.35 14.88 6.28V7.45C14.8 7.45 14.73 7.45 14.65 7.45H5.35V7.44Z", fill: "#037DD6" }));
var $p = () => Kf("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Kf("path", { d: "M16.4405 8.8999C20.0405 9.2099 21.5105 11.0599 21.5105 15.1099V15.2399C21.5105 19.7099 19.7205 21.4999 15.2505 21.4999H8.74047C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.2399 7.47047 8.9099", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M12 2V14.88", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M15.3504 12.6499L12.0004 15.9999L8.65039 12.6499", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }));
function Bp({ version: e7 }) {
  return Kf("div", { style: { textAlign: "center", color: "#BBC0C5", fontSize: "12" } }, "SDK Version ", e7 ? `v${e7}` : "unknown");
}
var Kp = () => Kf("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Kf("rect", { width: "16", height: "16", fill: "white" }), Kf("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.40554 2.40554C2.94627 1.86482 3.82296 1.86482 4.36369 2.40554L8 6.04186L11.6363 2.40554C12.177 1.86482 13.0537 1.86482 13.5945 2.40554C14.1352 2.94627 14.1352 3.82296 13.5945 4.36369L9.95814 8L13.5945 11.6363C14.1352 12.177 14.1352 13.0537 13.5945 13.5945C13.0537 14.1352 12.177 14.1352 11.6363 13.5945L8 9.95814L4.36369 13.5945C3.82296 14.1352 2.94627 14.1352 2.40554 13.5945C1.86482 13.0537 1.86482 12.177 2.40554 11.6363L6.04186 8L2.40554 4.36369C1.86482 3.82296 1.86482 2.94627 2.40554 2.40554Z", fill: "#BBC0C5" }));
var jp = () => Kf("svg", { width: "273", height: "51", viewBox: "0 0 273 51", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Kf("path", { d: "M240.882 25.9263C239.472 24.997 237.916 24.3361 236.443 23.5101C235.489 22.9731 234.473 22.4982 233.643 21.8167C232.233 20.6602 232.524 18.3885 233.996 17.3973C236.112 15.993 239.617 16.7777 239.99 19.6483C239.99 19.7102 240.052 19.7515 240.114 19.7515H243.308C243.391 19.7515 243.454 19.6896 243.433 19.607C243.267 17.6244 242.5 15.9723 241.089 14.9191C239.741 13.9072 238.206 13.3702 236.568 13.3702C228.127 13.3702 227.359 22.271 231.901 25.0796C232.42 25.41 236.879 27.6404 238.455 28.611C240.032 29.5816 240.529 31.3576 239.845 32.7619C239.223 34.0423 237.605 34.9303 235.987 34.8271C234.224 34.7238 232.855 33.7738 232.378 32.2869C232.295 32.0185 232.254 31.5022 232.254 31.275C232.254 31.2131 232.192 31.1511 232.129 31.1511H228.666C228.604 31.1511 228.541 31.2131 228.541 31.275C228.541 33.7738 229.164 35.1575 230.864 36.4172C232.461 37.615 234.203 38.1106 236.008 38.1106C240.737 38.1106 243.184 35.4466 243.682 32.6793C244.117 29.974 243.308 27.5371 240.882 25.9263Z", fill: "#24292E" }), Kf("path", { d: "M90.4943 13.8246H88.9595H87.2795C87.2173 13.8246 87.1758 13.8659 87.1551 13.9072L84.3137 23.2416C84.2722 23.3655 84.1063 23.3655 84.0648 23.2416L81.2234 13.9072C81.2026 13.8452 81.1612 13.8246 81.0989 13.8246H79.419H77.8842H75.8102C75.748 13.8246 75.6857 13.8865 75.6857 13.9485V37.7802C75.6857 37.8422 75.748 37.9041 75.8102 37.9041H79.2738C79.336 37.9041 79.3982 37.8422 79.3982 37.7802V19.6689C79.3982 19.5244 79.6056 19.5037 79.6471 19.6276L82.5093 29.024L82.7167 29.6849C82.7374 29.7468 82.7789 29.7675 82.8411 29.7675H85.4959C85.5581 29.7675 85.5996 29.7262 85.6203 29.6849L85.8277 29.024L88.6899 19.6276C88.7313 19.4831 88.9387 19.5244 88.9387 19.6689V37.7802C88.9387 37.8422 89.001 37.9041 89.0632 37.9041H92.5268C92.589 37.9041 92.6513 37.8422 92.6513 37.7802V13.9485C92.6513 13.8865 92.589 13.8246 92.5268 13.8246H90.4943Z", fill: "#24292E" }), Kf("path", { d: "M187.849 13.8246C187.787 13.8246 187.745 13.8659 187.725 13.9072L184.883 23.2416C184.842 23.3655 184.676 23.3655 184.634 23.2416L181.793 13.9072C181.772 13.8452 181.731 13.8246 181.668 13.8246H176.4C176.338 13.8246 176.276 13.8865 176.276 13.9485V37.7802C176.276 37.8422 176.338 37.9041 176.4 37.9041H179.864C179.926 37.9041 179.988 37.8422 179.988 37.7802V19.6689C179.988 19.5244 180.196 19.5037 180.237 19.6276L183.099 29.024L183.307 29.6849C183.328 29.7468 183.369 29.7675 183.431 29.7675H186.086C186.148 29.7675 186.19 29.7262 186.211 29.6849L186.418 29.024L189.28 19.6276C189.322 19.4831 189.529 19.5244 189.529 19.6689V37.7802C189.529 37.8422 189.591 37.9041 189.653 37.9041H193.117C193.179 37.9041 193.241 37.8422 193.241 37.7802V13.9485C193.241 13.8865 193.179 13.8246 193.117 13.8246H187.849Z", fill: "#24292E" }), Kf("path", { d: "M143.174 13.8246H136.724H133.261H126.81C126.748 13.8246 126.686 13.8865 126.686 13.9485V16.9223C126.686 16.9843 126.748 17.0462 126.81 17.0462H133.136V37.7802C133.136 37.8422 133.198 37.9041 133.261 37.9041H136.724C136.786 37.9041 136.849 37.8422 136.849 37.7802V17.0462H143.174C143.237 17.0462 143.299 16.9843 143.299 16.9223V13.9485C143.299 13.8865 143.257 13.8246 143.174 13.8246Z", fill: "#24292E" }), Kf("path", { d: "M163.604 37.9041H166.756C166.839 37.9041 166.901 37.8215 166.881 37.7389L160.368 13.8245C160.347 13.7626 160.306 13.7419 160.244 13.7419H159.041H156.925H155.722C155.66 13.7419 155.619 13.7832 155.598 13.8245L149.085 37.7389C149.065 37.8215 149.127 37.9041 149.21 37.9041H152.362C152.425 37.9041 152.466 37.8628 152.487 37.8215L154.374 30.862C154.395 30.8 154.436 30.7794 154.499 30.7794H161.467C161.53 30.7794 161.571 30.8207 161.592 30.862L163.479 37.8215C163.5 37.8628 163.562 37.9041 163.604 37.9041ZM155.328 27.3719L157.859 18.0581C157.9 17.9342 158.066 17.9342 158.107 18.0581L160.638 27.3719C160.659 27.4545 160.596 27.5371 160.513 27.5371H155.453C155.37 27.5371 155.308 27.4545 155.328 27.3719Z", fill: "#24292E" }), Kf("path", { d: "M217.362 37.9041H220.515C220.598 37.9041 220.66 37.8215 220.639 37.7389L214.127 13.8245C214.106 13.7626 214.065 13.7419 214.002 13.7419H212.8H210.684H209.481C209.419 13.7419 209.377 13.7832 209.357 13.8245L202.844 37.7389C202.823 37.8215 202.886 37.9041 202.969 37.9041H206.121C206.183 37.9041 206.225 37.8628 206.246 37.8215L208.133 30.862C208.154 30.8 208.195 30.7794 208.257 30.7794H215.226C215.288 30.7794 215.33 30.8207 215.351 30.862L217.238 37.8215C217.259 37.8628 217.3 37.9041 217.362 37.9041ZM209.087 27.3719L211.617 18.0581C211.659 17.9342 211.825 17.9342 211.866 18.0581L214.397 27.3719C214.417 27.4545 214.355 27.5371 214.272 27.5371H209.211C209.129 27.5371 209.066 27.4545 209.087 27.3719Z", fill: "#24292E" }), Kf("path", { d: "M106.713 34.3727V26.9795C106.713 26.9176 106.775 26.8556 106.837 26.8556H116.067C116.129 26.8556 116.191 26.7936 116.191 26.7317V23.7579C116.191 23.6959 116.129 23.634 116.067 23.634H106.837C106.775 23.634 106.713 23.572 106.713 23.5101V17.1907C106.713 17.1288 106.775 17.0668 106.837 17.0668H117.332C117.394 17.0668 117.457 17.0049 117.457 16.9429V13.9691C117.457 13.9072 117.394 13.8452 117.332 13.8452H106.713H103.125C103.063 13.8452 103.001 13.9072 103.001 13.9691V17.0668V23.6546V26.8763V34.5173V37.7802C103.001 37.8422 103.063 37.9041 103.125 37.9041H106.713H117.768C117.83 37.9041 117.892 37.8422 117.892 37.7802V34.6412C117.892 34.5792 117.83 34.5173 117.768 34.5173H106.817C106.755 34.4966 106.713 34.4553 106.713 34.3727Z", fill: "#24292E" }), Kf("path", { d: "M272.532 37.6976L260.544 25.3687C260.502 25.3274 260.502 25.2448 260.544 25.2035L271.329 14.0517C271.412 13.9691 271.349 13.8452 271.246 13.8452H266.828C266.787 13.8452 266.766 13.8659 266.745 13.8865L257.599 23.3449C257.516 23.4275 257.391 23.3655 257.391 23.2623V13.9691C257.391 13.9072 257.329 13.8452 257.267 13.8452H253.803C253.741 13.8452 253.679 13.9072 253.679 13.9691V37.8009C253.679 37.8628 253.741 37.9248 253.803 37.9248H257.267C257.329 37.9248 257.391 37.8628 257.391 37.8009V27.3099C257.391 27.2067 257.536 27.1447 257.599 27.2273L267.969 37.8835C267.989 37.9041 268.031 37.9248 268.052 37.9248H272.469C272.552 37.9041 272.615 37.7596 272.532 37.6976Z", fill: "#24292E" }), Kf("path", { d: "M52.021 1L31.0526 16.4886L34.9517 7.36063L52.021 1Z", fill: "#E17726", stroke: "#E17726", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M3.65491 1L24.4366 16.6331L20.7241 7.36063L3.65491 1Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M44.4716 36.9127L38.8925 45.4211L50.8389 48.7047L54.261 37.0986L44.4716 36.9127Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M1.43555 37.0986L4.83695 48.7047L16.7626 45.4211L11.2042 36.9127L1.43555 37.0986Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M16.1197 22.5395L12.8013 27.5371L24.6232 28.074L24.2292 15.3734L16.1197 22.5395Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M39.5561 22.5394L31.3222 15.2288L31.0526 28.0739L42.8746 27.537L39.5561 22.5394Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M16.7626 45.4212L23.918 41.9724L17.7582 37.1813L16.7626 45.4212Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M31.7578 41.9724L38.8925 45.4212L37.9177 37.1813L31.7578 41.9724Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M38.8923 45.4212L31.7577 41.9724L32.3384 46.5983L32.2762 48.5602L38.8923 45.4212Z", fill: "#D5BFB2", stroke: "#D5BFB2", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M16.7625 45.4212L23.3994 48.5602L23.3579 46.5983L23.9179 41.9724L16.7625 45.4212Z", fill: "#D5BFB2", stroke: "#D5BFB2", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M23.5239 34.1249L17.5922 32.3902L21.7818 30.4696L23.5239 34.1249Z", fill: "#233447", stroke: "#233447", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M32.1517 34.1249L33.8939 30.4696L38.1042 32.3902L32.1517 34.1249Z", fill: "#233447", stroke: "#233447", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M16.7626 45.4212L17.7996 36.9128L11.2042 37.0987L16.7626 45.4212Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M37.8761 36.9128L38.8924 45.4212L44.4715 37.0987L37.8761 36.9128Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M42.8745 27.5371L31.0526 28.074L32.1518 34.1249L33.894 30.4696L38.1042 32.3902L42.8745 27.5371Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M17.5922 32.3902L21.7817 30.4696L23.5239 34.1249L24.6232 28.074L12.8012 27.5371L17.5922 32.3902Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M12.8013 27.5371L17.7582 37.1813L17.5923 32.3902L12.8013 27.5371Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M38.1044 32.3902L37.9177 37.1813L42.8746 27.5371L38.1044 32.3902Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M24.6232 28.0741L23.524 34.125L24.9136 41.2703L25.2247 31.8533L24.6232 28.0741Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M31.0526 28.0741L30.4719 31.8327L30.7623 41.2703L32.1519 34.125L31.0526 28.0741Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M32.1519 34.1249L30.7623 41.2702L31.7578 41.9724L37.9177 37.1813L38.1043 32.3901L32.1519 34.1249Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M17.5922 32.3901L17.7581 37.1813L23.918 41.9724L24.9135 41.2702L23.5239 34.1249L17.5922 32.3901Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M32.2763 48.5602L32.3385 46.5983L31.7993 46.1439H23.8765L23.358 46.5983L23.3995 48.5602L16.7626 45.4211L19.0855 47.3211L23.7935 50.5633H31.8615L36.5903 47.3211L38.8924 45.4211L32.2763 48.5602Z", fill: "#C0AC9D", stroke: "#C0AC9D", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M31.7578 41.9724L30.7622 41.2703H24.9135L23.918 41.9724L23.358 46.5983L23.8765 46.144H31.7993L32.3385 46.5983L31.7578 41.9724Z", fill: "#24292E", stroke: "#24292E", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M52.9128 17.5005L54.6757 8.95079L52.021 1L31.7578 15.9723L39.5561 22.5394L50.5692 25.7404L52.9958 22.9111L51.938 22.147L53.618 20.6188L52.3321 19.6276L54.0121 18.3472L52.9128 17.5005Z", fill: "#763E1A", stroke: "#763E1A", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M1 8.95079L2.78366 17.5005L1.64295 18.3472L3.34365 19.6276L2.05775 20.6188L3.73771 22.147L2.67996 22.9111L5.10657 25.7404L16.1196 22.5394L23.918 15.9723L3.65475 1L1 8.95079Z", fill: "#763E1A", stroke: "#763E1A", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M50.5692 25.7404L39.5561 22.5394L42.8746 27.5371L37.9177 37.1813L44.4716 37.0987H54.261L50.5692 25.7404Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M16.1196 22.5394L5.10651 25.7404L1.43549 37.0987H11.2041L17.7581 37.1813L12.8011 27.5371L16.1196 22.5394Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M31.0526 28.0741L31.7578 15.9724L34.9518 7.36072H20.7239L23.9179 15.9724L24.6231 28.0741L24.8927 31.8739L24.9135 41.2703H30.7622L30.783 31.8739L31.0526 28.0741Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }));
function Up(e7, t2) {
  return e7.toString(2).padStart(t2, "0");
}
function Hp(e7, t2) {
  const n2 = e7 % t2;
  return n2 >= 0 ? n2 : t2 + n2;
}
function Fp(e7, t2) {
  return new Array(e7).fill(t2);
}
function zp(...e7) {
  let t2 = 0;
  for (const n3 of e7) t2 = Math.max(t2, n3.length);
  const n2 = [];
  for (let r2 = 0; r2 < t2; r2++) for (const t3 of e7) r2 >= t3.length || n2.push(t3[r2]);
  return new Uint8Array(n2);
}
function qp(e7, t2, n2) {
  if (n2 < 0 || n2 + t2.length > e7.length) return false;
  for (let r2 = 0; r2 < t2.length; r2++) if (t2[r2] !== e7[n2 + r2]) return false;
  return true;
}
function Vp(e7) {
  return { has: (t2) => e7.includes(t2), decode: (t2) => {
    if (!Array.isArray(t2) || t2.length && "string" != typeof t2[0]) throw new Error("alphabet.decode input should be array of strings");
    return t2.map((t3) => {
      if ("string" != typeof t3) throw new Error(`alphabet.decode: not string element=${t3}`);
      const n2 = e7.indexOf(t3);
      if (-1 === n2) throw new Error(`Unknown letter: "${t3}". Allowed: ${e7}`);
      return n2;
    });
  }, encode: (t2) => {
    if (!Array.isArray(t2) || t2.length && "number" != typeof t2[0]) throw new Error("alphabet.encode input should be an array of numbers");
    return t2.map((t3) => {
      if (function(e8) {
        if (!Number.isSafeInteger(e8)) throw new Error(`Wrong integer: ${e8}`);
      }(t3), t3 < 0 || t3 >= e7.length) throw new Error(`Digit index outside alphabet: ${t3} (alphabet: ${e7.length})`);
      return e7[t3];
    });
  } };
}
var Wp = class _Wp {
  static size(e7, t2) {
    if ("number" == typeof e7 && (e7 = { height: e7, width: e7 }), !Number.isSafeInteger(e7.height) && e7.height !== 1 / 0) throw new Error(`Bitmap: wrong height=${e7.height} (${typeof e7.height})`);
    if (!Number.isSafeInteger(e7.width) && e7.width !== 1 / 0) throw new Error(`Bitmap: wrong width=${e7.width} (${typeof e7.width})`);
    return void 0 !== t2 && (e7 = { width: Math.min(e7.width, t2.width), height: Math.min(e7.height, t2.height) }), e7;
  }
  static fromString(e7) {
    const t2 = (e7 = e7.replace(/^\n+/g, "").replace(/\n+$/g, "")).split("\n"), n2 = t2.length, r2 = new Array(n2);
    let i;
    for (const e8 of t2) {
      const t3 = e8.split("").map((e9) => {
        if ("X" === e9) return true;
        if (" " === e9) return false;
        if ("?" !== e9) throw new Error(`Bitmap.fromString: unknown symbol=${e9}`);
      });
      if (i && t3.length !== i) throw new Error(`Bitmap.fromString different row sizes: width=${i} cur=${t3.length}`);
      i = t3.length, r2.push(t3);
    }
    return i || (i = 0), new _Wp({ height: n2, width: i }, r2);
  }
  constructor(e7, t2) {
    const { height: n2, width: r2 } = _Wp.size(e7);
    this.data = t2 || Array.from({ length: n2 }, () => Fp(r2, void 0)), this.height = n2, this.width = r2;
  }
  point(e7) {
    return this.data[e7.y][e7.x];
  }
  isInside(e7) {
    return 0 <= e7.x && e7.x < this.width && 0 <= e7.y && e7.y < this.height;
  }
  size(e7) {
    if (!e7) return { height: this.height, width: this.width };
    const { x: t2, y: n2 } = this.xy(e7);
    return { height: this.height - n2, width: this.width - t2 };
  }
  xy(e7) {
    if ("number" == typeof e7 && (e7 = { x: e7, y: e7 }), !Number.isSafeInteger(e7.x)) throw new Error(`Bitmap: wrong x=${e7.x}`);
    if (!Number.isSafeInteger(e7.y)) throw new Error(`Bitmap: wrong y=${e7.y}`);
    return e7.x = Hp(e7.x, this.width), e7.y = Hp(e7.y, this.height), e7;
  }
  rect(e7, t2, n2) {
    const { x: r2, y: i } = this.xy(e7), { height: o, width: s } = _Wp.size(t2, this.size({ x: r2, y: i }));
    for (let e8 = 0; e8 < o; e8++) for (let t3 = 0; t3 < s; t3++) this.data[i + e8][r2 + t3] = "function" == typeof n2 ? n2({ x: t3, y: e8 }, this.data[i + e8][r2 + t3]) : n2;
    return this;
  }
  rectRead(e7, t2, n2) {
    return this.rect(e7, t2, (e8, t3) => (n2(e8, t3), t3));
  }
  hLine(e7, t2, n2) {
    return this.rect(e7, { width: t2, height: 1 }, n2);
  }
  vLine(e7, t2, n2) {
    return this.rect(e7, { width: 1, height: t2 }, n2);
  }
  border(e7 = 2, t2) {
    const n2 = this.height + 2 * e7, r2 = this.width + 2 * e7, i = Fp(e7, t2), o = Array.from({ length: e7 }, () => Fp(r2, t2));
    return new _Wp({ height: n2, width: r2 }, [...o, ...this.data.map((e8) => [...i, ...e8, ...i]), ...o]);
  }
  embed(e7, t2) {
    return this.rect(e7, t2.size(), ({ x: e8, y: n2 }) => t2.data[n2][e8]);
  }
  rectSlice(e7, t2 = this.size()) {
    const n2 = new _Wp(_Wp.size(t2, this.size(this.xy(e7))));
    return this.rect(e7, t2, ({ x: e8, y: t3 }, r2) => n2.data[t3][e8] = r2), n2;
  }
  inverse() {
    const { height: e7, width: t2 } = this;
    return new _Wp({ height: t2, width: e7 }).rect({ x: 0, y: 0 }, 1 / 0, ({ x: e8, y: t3 }) => this.data[e8][t3]);
  }
  scale(e7) {
    if (!Number.isSafeInteger(e7) || e7 > 1024) throw new Error(`Wrong scale factor: ${e7}`);
    const { height: t2, width: n2 } = this;
    return new _Wp({ height: e7 * t2, width: e7 * n2 }).rect({ x: 0, y: 0 }, 1 / 0, ({ x: t3, y: n3 }) => this.data[Math.floor(n3 / e7)][Math.floor(t3 / e7)]);
  }
  clone() {
    return new _Wp(this.size()).rect({ x: 0, y: 0 }, this.size(), ({ x: e7, y: t2 }) => this.data[t2][e7]);
  }
  assertDrawn() {
    this.rectRead(0, 1 / 0, (e7, t2) => {
      if ("boolean" != typeof t2) throw new Error("Invalid color type=" + typeof t2);
    });
  }
  toString() {
    return this.data.map((e7) => e7.map((e8) => void 0 === e8 ? "?" : e8 ? "X" : " ").join("")).join("\n");
  }
  toASCII() {
    const { height: e7, width: t2, data: n2 } = this;
    let r2 = "";
    for (let i = 0; i < e7; i += 2) {
      for (let o = 0; o < t2; o++) {
        const t3 = n2[i][o], s = i + 1 >= e7 || n2[i + 1][o];
        t3 || s ? !t3 && s ? r2 += "▀" : t3 && !s ? r2 += "▄" : t3 && s && (r2 += " ") : r2 += "█";
      }
      r2 += "\n";
    }
    return r2;
  }
  toTerm() {
    const e7 = "\x1B[0m", t2 = `\x1B[1;47m  ${e7}`, n2 = `\x1B[40m  ${e7}`;
    return this.data.map((e8) => e8.map((e9) => e9 ? n2 : t2).join("")).join("\n");
  }
  toSVG() {
    let e7 = `<svg xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 ${this.width} ${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`;
    return this.rectRead(0, 1 / 0, ({ x: t2, y: n2 }, r2) => {
      r2 && (e7 += `<rect x="${t2}" y="${n2}" width="1" height="1" />`);
    }), e7 += "</svg>", e7;
  }
  toGIF() {
    const e7 = (e8) => [255 & e8, e8 >>> 8 & 255], t2 = [...e7(this.width), ...e7(this.height)], n2 = [];
    this.rectRead(0, 1 / 0, (e8, t3) => n2.push(+(true === t3)));
    const r2 = 126, i = [71, 73, 70, 56, 55, 97, ...t2, 246, 0, 0, 255, 255, 255, ...Fp(381, 0), 44, 0, 0, 0, 0, ...t2, 0, 7], o = Math.floor(n2.length / r2);
    for (let e8 = 0; e8 < o; e8++) i.push(127, 128, ...n2.slice(r2 * e8, r2 * (e8 + 1)).map((e9) => +e9));
    return i.push(n2.length % r2 + 1, 128, ...n2.slice(o * r2).map((e8) => +e8)), i.push(1, 129, 0, 59), new Uint8Array(i);
  }
  toImage(e7 = false) {
    const { height: t2, width: n2 } = this.size(), r2 = new Uint8Array(t2 * n2 * (e7 ? 3 : 4));
    let i = 0;
    for (let o = 0; o < t2; o++) for (let t3 = 0; t3 < n2; t3++) {
      const n3 = this.data[o][t3] ? 0 : 255;
      r2[i++] = n3, r2[i++] = n3, r2[i++] = n3, e7 || (r2[i++] = 255);
    }
    return { height: t2, width: n2, data: r2 };
  }
};
var Gp = ["low", "medium", "quartile", "high"];
var Zp = ["numeric", "alphanumeric", "byte", "kanji", "eci"];
var Yp = [26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
var Jp = { low: [7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], medium: [10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], quartile: [13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], high: [17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30] };
var Xp = { low: [1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], medium: [1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], quartile: [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], high: [1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81] };
var Qp = { size: { encode: (e7) => 21 + 4 * (e7 - 1), decode: (e7) => (e7 - 17) / 4 }, sizeType: (e7) => Math.floor((e7 + 7) / 17), alignmentPatterns(e7) {
  if (1 === e7) return [];
  const t2 = Qp.size.encode(e7) - 6 - 1, n2 = t2 - 6, r2 = Math.ceil(n2 / 28);
  let i = Math.floor(n2 / r2);
  i % 2 ? i += 1 : n2 % r2 * 2 >= r2 && (i += 2);
  const o = [6];
  for (let e8 = 1; e8 < r2; e8++) o.push(t2 - (r2 - e8) * i);
  return o.push(t2), o;
}, ECCode: { low: 1, medium: 0, quartile: 3, high: 2 }, formatMask: 21522, formatBits(e7, t2) {
  const n2 = Qp.ECCode[e7] << 3 | t2;
  let r2 = n2;
  for (let e8 = 0; e8 < 10; e8++) r2 = r2 << 1 ^ 1335 * (r2 >> 9);
  return (n2 << 10 | r2) ^ Qp.formatMask;
}, versionBits(e7) {
  let t2 = e7;
  for (let e8 = 0; e8 < 12; e8++) t2 = t2 << 1 ^ 7973 * (t2 >> 11);
  return e7 << 12 | t2;
}, alphabet: { numeric: Vp("0123456789"), alphanumerc: Vp("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:") }, lengthBits: (e7, t2) => ({ numeric: [10, 12, 14], alphanumeric: [9, 11, 13], byte: [8, 16, 16], kanji: [8, 10, 12], eci: [0, 0, 0] })[t2][Qp.sizeType(e7)], modeBits: { numeric: "0001", alphanumeric: "0010", byte: "0100", kanji: "1000", eci: "0111" }, capacity(e7, t2) {
  const n2 = Yp[e7 - 1], r2 = Jp[t2][e7 - 1], i = Xp[t2][e7 - 1], o = Math.floor(n2 / i) - r2, s = i - n2 % i;
  return { words: r2, numBlocks: i, shortBlocks: s, blockLen: o, capacity: 8 * (n2 - r2 * i), total: (r2 + o) * i + i - s };
} };
var eg = [(e7, t2) => (e7 + t2) % 2 == 0, (e7, t2) => t2 % 2 == 0, (e7, t2) => e7 % 3 == 0, (e7, t2) => (e7 + t2) % 3 == 0, (e7, t2) => (Math.floor(t2 / 2) + Math.floor(e7 / 3)) % 2 == 0, (e7, t2) => e7 * t2 % 2 + e7 * t2 % 3 == 0, (e7, t2) => (e7 * t2 % 2 + e7 * t2 % 3) % 2 == 0, (e7, t2) => ((e7 + t2) % 2 + e7 * t2 % 3) % 2 == 0];
var tg = { tables: ((e7) => {
  const t2 = Fp(256, 0), n2 = Fp(256, 0);
  for (let e8 = 0, r2 = 1; e8 < 256; e8++) t2[e8] = r2, n2[r2] = e8, r2 <<= 1, 256 & r2 && (r2 ^= 285);
  return { exp: t2, log: n2 };
})(), exp: (e7) => tg.tables.exp[e7], log(e7) {
  if (0 === e7) throw new Error(`GF.log: wrong arg=${e7}`);
  return tg.tables.log[e7] % 255;
}, mul: (e7, t2) => 0 === e7 || 0 === t2 ? 0 : tg.tables.exp[(tg.tables.log[e7] + tg.tables.log[t2]) % 255], add: (e7, t2) => e7 ^ t2, pow: (e7, t2) => tg.tables.exp[tg.tables.log[e7] * t2 % 255], inv(e7) {
  if (0 === e7) throw new Error(`GF.inverse: wrong arg=${e7}`);
  return tg.tables.exp[255 - tg.tables.log[e7]];
}, polynomial(e7) {
  if (0 == e7.length) throw new Error("GF.polymomial: wrong length");
  if (0 !== e7[0]) return e7;
  let t2 = 0;
  for (; t2 < e7.length - 1 && 0 == e7[t2]; t2++) ;
  return e7.slice(t2);
}, monomial(e7, t2) {
  if (e7 < 0) throw new Error(`GF.monomial: wrong degree=${e7}`);
  if (0 == t2) return [0];
  let n2 = Fp(e7 + 1, 0);
  return n2[0] = t2, tg.polynomial(n2);
}, degree: (e7) => e7.length - 1, coefficient: (e7, t2) => e7[tg.degree(e7) - t2], mulPoly(e7, t2) {
  if (0 === e7[0] || 0 === t2[0]) return [0];
  const n2 = Fp(e7.length + t2.length - 1, 0);
  for (let r2 = 0; r2 < e7.length; r2++) for (let i = 0; i < t2.length; i++) n2[r2 + i] = tg.add(n2[r2 + i], tg.mul(e7[r2], t2[i]));
  return tg.polynomial(n2);
}, mulPolyScalar(e7, t2) {
  if (0 == t2) return [0];
  if (1 == t2) return e7;
  const n2 = Fp(e7.length, 0);
  for (let r2 = 0; r2 < e7.length; r2++) n2[r2] = tg.mul(e7[r2], t2);
  return tg.polynomial(n2);
}, mulPolyMonomial(e7, t2, n2) {
  if (t2 < 0) throw new Error("GF.mulPolyMonomial: wrong degree");
  if (0 == n2) return [0];
  const r2 = Fp(e7.length + t2, 0);
  for (let t3 = 0; t3 < e7.length; t3++) r2[t3] = tg.mul(e7[t3], n2);
  return tg.polynomial(r2);
}, addPoly(e7, t2) {
  if (0 === e7[0]) return t2;
  if (0 === t2[0]) return e7;
  let n2 = e7, r2 = t2;
  n2.length > r2.length && ([n2, r2] = [r2, n2]);
  let i = Fp(r2.length, 0), o = r2.length - n2.length, s = r2.slice(0, o);
  for (let e8 = 0; e8 < s.length; e8++) i[e8] = s[e8];
  for (let e8 = o; e8 < r2.length; e8++) i[e8] = tg.add(n2[e8 - o], r2[e8]);
  return tg.polynomial(i);
}, remainderPoly(e7, t2) {
  const n2 = Array.from(e7);
  for (let r2 = 0; r2 < e7.length - t2.length + 1; r2++) {
    const e8 = n2[r2];
    if (0 !== e8) for (let i = 1; i < t2.length; i++) 0 !== t2[i] && (n2[r2 + i] = tg.add(n2[r2 + i], tg.mul(t2[i], e8)));
  }
  return n2.slice(e7.length - t2.length + 1, n2.length);
}, divisorPoly(e7) {
  let t2 = [1];
  for (let n2 = 0; n2 < e7; n2++) t2 = tg.mulPoly(t2, [1, tg.pow(2, n2)]);
  return t2;
}, evalPoly(e7, t2) {
  if (0 == t2) return tg.coefficient(e7, 0);
  let n2 = e7[0];
  for (let r2 = 1; r2 < e7.length; r2++) n2 = tg.add(tg.mul(t2, n2), e7[r2]);
  return n2;
}, euclidian(e7, t2, n2) {
  tg.degree(e7) < tg.degree(t2) && ([e7, t2] = [t2, e7]);
  let r2 = e7, i = t2, o = [0], s = [1];
  for (; 2 * tg.degree(i) >= n2; ) {
    let e8 = r2, t3 = o;
    if (r2 = i, o = s, 0 === r2[0]) throw new Error("rLast[0] === 0");
    i = e8;
    let n3 = [0];
    const a3 = tg.inv(r2[0]);
    for (; tg.degree(i) >= tg.degree(r2) && 0 !== i[0]; ) {
      const e9 = tg.degree(i) - tg.degree(r2), t4 = tg.mul(i[0], a3);
      n3 = tg.addPoly(n3, tg.monomial(e9, t4)), i = tg.addPoly(i, tg.mulPolyMonomial(r2, e9, t4));
    }
    if (n3 = tg.mulPoly(n3, o), s = tg.addPoly(n3, t3), tg.degree(i) >= tg.degree(r2)) throw new Error(`Division failed r: ${i}, rLast: ${r2}`);
  }
  const a2 = tg.coefficient(s, 0);
  if (0 == a2) throw new Error("sigmaTilde(0) was zero");
  const c2 = tg.inv(a2);
  return [tg.mulPolyScalar(s, c2), tg.mulPolyScalar(i, c2)];
} };
function ng(e7, t2) {
  const { words: n2, shortBlocks: r2, numBlocks: i, blockLen: o, total: s } = Qp.capacity(e7, t2), a2 = (c2 = n2, { encode(e8) {
    const t3 = tg.divisorPoly(c2), n3 = Array.from(e8);
    return n3.push(...t3.slice(0, -1).fill(0)), Uint8Array.from(tg.remainderPoly(n3, t3));
  }, decode(e8) {
    const t3 = e8.slice(), n3 = tg.polynomial(Array.from(e8));
    let r3 = Fp(c2, 0), i2 = false;
    for (let e9 = 0; e9 < c2; e9++) {
      const t4 = tg.evalPoly(n3, tg.exp(e9));
      r3[r3.length - 1 - e9] = t4, 0 !== t4 && (i2 = true);
    }
    if (!i2) return t3;
    r3 = tg.polynomial(r3);
    const o2 = tg.monomial(c2, 1), [s2, a3] = tg.euclidian(o2, r3, c2), l2 = Fp(tg.degree(s2), 0);
    let d2 = 0;
    for (let e9 = 1; e9 < 256 && d2 < l2.length; e9++) 0 === tg.evalPoly(s2, e9) && (l2[d2++] = tg.inv(e9));
    if (d2 !== l2.length) throw new Error("RS.decode: wrong errors number");
    for (let e9 = 0; e9 < l2.length; e9++) {
      const n4 = t3.length - 1 - tg.log(l2[e9]);
      if (n4 < 0) throw new Error("RS.decode: wrong error location");
      const r4 = tg.inv(l2[e9]);
      let i3 = 1;
      for (let t4 = 0; t4 < l2.length; t4++) e9 !== t4 && (i3 = tg.mul(i3, tg.add(1, tg.mul(l2[t4], r4))));
      t3[n4] = tg.add(t3[n4], tg.mul(tg.evalPoly(a3, r4), tg.inv(i3)));
    }
    return t3;
  } });
  var c2;
  return { encode(e8) {
    const t3 = [], n3 = [];
    for (let s3 = 0; s3 < i; s3++) {
      const i2 = o + (s3 < r2 ? 0 : 1);
      t3.push(e8.subarray(0, i2)), n3.push(a2.encode(e8.subarray(0, i2))), e8 = e8.subarray(i2);
    }
    const s2 = zp(...t3), c3 = zp(...n3), l2 = new Uint8Array(s2.length + c3.length);
    return l2.set(s2), l2.set(c3, s2.length), l2;
  }, decode(e8) {
    if (e8.length !== s) throw new Error(`interleave.decode: len(data)=${e8.length}, total=${s}`);
    const t3 = [];
    for (let e9 = 0; e9 < i; e9++) {
      const i2 = e9 < r2;
      t3.push(new Uint8Array(n2 + o + (i2 ? 0 : 1)));
    }
    let c3 = 0;
    for (let n3 = 0; n3 < o; n3++) for (let r3 = 0; r3 < i; r3++) t3[r3][n3] = e8[c3++];
    for (let n3 = r2; n3 < i; n3++) t3[n3][o] = e8[c3++];
    for (let s2 = o; s2 < o + n2; s2++) for (let n3 = 0; n3 < i; n3++) {
      const i2 = n3 < r2;
      t3[n3][s2 + (i2 ? 0 : 1)] = e8[c3++];
    }
    const l2 = [];
    for (const e9 of t3) l2.push(...Array.from(a2.decode(e9)).slice(0, -n2));
    return Uint8Array.from(l2);
  } };
}
function rg(e7, t2, n2, r2) {
  let i = "", o = n2.length;
  if ("numeric" === r2) {
    const e8 = Qp.alphabet.numeric.decode(n2.split("")), t3 = e8.length;
    for (let n3 = 0; n3 < t3 - 2; n3 += 3) i += Up(100 * e8[n3] + 10 * e8[n3 + 1] + e8[n3 + 2], 10);
    t3 % 3 == 1 ? i += Up(e8[t3 - 1], 4) : t3 % 3 == 2 && (i += Up(10 * e8[t3 - 2] + e8[t3 - 1], 7));
  } else if ("alphanumeric" === r2) {
    const e8 = Qp.alphabet.alphanumerc.decode(n2.split("")), t3 = e8.length;
    for (let n3 = 0; n3 < t3 - 1; n3 += 2) i += Up(45 * e8[n3] + e8[n3 + 1], 11);
    t3 % 2 == 1 && (i += Up(e8[t3 - 1], 6));
  } else {
    if ("byte" !== r2) throw new Error("encode: unsupported type");
    {
      const e8 = function(e9) {
        if ("string" != typeof e9) throw new Error("utf8ToBytes expected string, got " + typeof e9);
        return new Uint8Array(new TextEncoder().encode(e9));
      }(n2);
      o = e8.length, i = Array.from(e8).map((e9) => Up(e9, 8)).join("");
    }
  }
  const { capacity: s } = Qp.capacity(e7, t2), a2 = Up(o, Qp.lengthBits(e7, r2));
  let c2 = Qp.modeBits[r2] + a2 + i;
  if (c2.length > s) throw new Error("Capacity overflow");
  c2 += "0".repeat(Math.min(4, Math.max(0, s - c2.length))), c2.length % 8 && (c2 += "0".repeat(8 - c2.length % 8));
  const l2 = "1110110000010001";
  for (let e8 = 0; c2.length !== s; e8++) c2 += l2[e8 % 16];
  const d2 = Uint8Array.from(c2.match(/(.{8})/g).map((e8) => Number(`0b${e8}`)));
  return ng(e7, t2).encode(d2);
}
function ig(e7, t2, n2, r2, i = false) {
  const o = function(e8, t3, n3, r3 = false) {
    const i2 = Qp.size.encode(e8);
    let o2 = new Wp(i2 + 2);
    const s2 = new Wp(3).rect(0, 3, true).border(1, false).border(1, true).border(1, false);
    o2 = o2.embed(0, s2).embed({ x: -s2.width, y: 0 }, s2).embed({ x: 0, y: -s2.height }, s2), o2 = o2.rectSlice(1, i2);
    const a3 = new Wp(1).rect(0, 1, true).border(1, false).border(1, true), c2 = Qp.alignmentPatterns(e8);
    for (const e9 of c2) for (const t4 of c2) void 0 === o2.data[e9][t4] && o2.embed({ x: t4 - 2, y: e9 - 2 }, a3);
    o2 = o2.hLine({ x: 0, y: 6 }, 1 / 0, ({ x: e9 }, t4) => void 0 === t4 ? e9 % 2 == 0 : t4).vLine({ x: 6, y: 0 }, 1 / 0, ({ y: e9 }, t4) => void 0 === t4 ? e9 % 2 == 0 : t4);
    {
      const e9 = Qp.formatBits(t3, n3), s3 = (t4) => !r3 && 1 == (e9 >> t4 & 1);
      for (let e10 = 0; e10 < 6; e10++) o2.data[e10][8] = s3(e10);
      for (let e10 = 6; e10 < 8; e10++) o2.data[e10 + 1][8] = s3(e10);
      for (let e10 = 8; e10 < 15; e10++) o2.data[i2 - 15 + e10][8] = s3(e10);
      for (let e10 = 0; e10 < 8; e10++) o2.data[8][i2 - e10 - 1] = s3(e10);
      for (let e10 = 8; e10 < 9; e10++) o2.data[8][15 - e10 - 1 + 1] = s3(e10);
      for (let e10 = 9; e10 < 15; e10++) o2.data[8][15 - e10 - 1] = s3(e10);
      o2.data[i2 - 8][8] = !r3;
    }
    if (e8 >= 7) {
      const t4 = Qp.versionBits(e8);
      for (let e9 = 0; e9 < 18; e9 += 1) {
        const n4 = !r3 && 1 == (t4 >> e9 & 1), s3 = Math.floor(e9 / 3), a4 = e9 % 3 + i2 - 8 - 3;
        o2.data[s3][a4] = n4, o2.data[a4][s3] = n4;
      }
    }
    return o2;
  }(e7, t2, r2, i);
  let s = 0;
  const a2 = 8 * n2.length;
  if (function(e8, t3, n3) {
    const r3 = e8.height, i2 = eg[t3];
    let o2 = -1, s2 = r3 - 1;
    for (let t4 = r3 - 1; t4 > 0; t4 -= 2) {
      for (6 == t4 && (t4 = 5); ; s2 += o2) {
        for (let r4 = 0; r4 < 2; r4 += 1) {
          const o3 = t4 - r4;
          void 0 === e8.data[s2][o3] && n3(o3, s2, i2(o3, s2));
        }
        if (s2 + o2 < 0 || s2 + o2 >= r3) break;
      }
      o2 = -o2;
    }
  }(o, r2, (e8, t3, r3) => {
    let i2 = false;
    s < a2 && (i2 = 0 != (n2[s >>> 3] >> (7 - s & 7) & 1), s++), o.data[t3][e8] = i2 !== r3;
  }), s !== a2) throw new Error("QR: bytes left after draw");
  return o;
}
function og(e7) {
  const t2 = e7.inverse(), n2 = (e8) => {
    let t3 = 0;
    for (let n3, r3 = 0, i2 = 1; r3 < e8.length; r3++) n3 === e8[r3] && (i2++, r3 !== e8.length - 1) || (i2 >= 5 && (t3 += i2 - 5 + 3), n3 = e8[r3], i2 = 1);
    return t3;
  };
  let r2 = 0;
  e7.data.forEach((e8) => r2 += n2(e8)), t2.data.forEach((e8) => r2 += n2(e8));
  let i = 0, o = e7.data;
  const s = e7.width - 1, a2 = e7.height - 1;
  for (let e8 = 0; e8 < s; e8++) for (let t3 = 0; t3 < a2; t3++) {
    const n3 = e8 + 1, r3 = t3 + 1;
    o[e8][t3] === o[n3][t3] && o[n3][t3] === o[e8][r3] && o[n3][t3] === o[n3][r3] && (i += 3);
  }
  const c2 = (e8) => {
    const t3 = [true, false, true, true, true, false, true], n3 = [false, false, false, false], r3 = [...t3, ...n3], i2 = [...n3, ...t3];
    let o2 = 0;
    for (let t4 = 0; t4 < e8.length; t4++) qp(e8, r3, t4) && (o2 += 40), qp(e8, i2, t4) && (o2 += 40);
    return o2;
  };
  let l2 = 0;
  for (const t3 of e7.data) l2 += c2(t3);
  for (const e8 of t2.data) l2 += c2(e8);
  let d2 = 0;
  e7.rectRead(0, 1 / 0, (e8, t3) => d2 += t3 ? 1 : 0);
  const u2 = d2 / (e7.height * e7.width) * 100, h2 = 10 * Math.floor(Math.abs(u2 - 50) / 5);
  return r2 + i + l2 + h2;
}
function sg(e7, t2 = "raw", n2 = {}) {
  const r2 = void 0 !== n2.ecc ? n2.ecc : "medium";
  !function(e8) {
    if (!Gp.includes(e8)) throw new Error(`Invalid error correction mode=${e8}. Expected: ${Gp}`);
  }(r2);
  const i = void 0 !== n2.encoding ? n2.encoding : function(e8) {
    let t3 = "numeric";
    for (let n3 of e8) if (!Qp.alphabet.numeric.has(n3) && (t3 = "alphanumeric", !Qp.alphabet.alphanumerc.has(n3))) return "byte";
    return t3;
  }(e7);
  !function(e8) {
    if (!Zp.includes(e8)) throw new Error(`Encoding: invalid mode=${e8}. Expected: ${Zp}`);
    if ("kanji" === e8 || "eci" === e8) throw new Error(`Encoding: ${e8} is not supported (yet?).`);
  }(i), void 0 !== n2.mask && function(e8) {
    if (![0, 1, 2, 3, 4, 5, 6, 7].includes(e8) || !eg[e8]) throw new Error(`Invalid mask=${e8}. Expected number [0..7]`);
  }(n2.mask);
  let o, s = n2.version, a2 = new Error("Unknown error");
  if (void 0 !== s) !function(e8) {
    if (!Number.isSafeInteger(e8) || e8 < 1 || e8 > 40) throw new Error(`Invalid version=${e8}. Expected number [1..40]`);
  }(s), o = rg(s, r2, e7, i);
  else for (let t3 = 1; t3 <= 40; t3++) try {
    o = rg(t3, r2, e7, i), s = t3;
    break;
  } catch (e8) {
    a2 = e8;
  }
  if (!s || !o) throw a2;
  let c2 = function(e8, t3, n3, r3) {
    if (void 0 === r3) {
      const i2 = function() {
        let e9, t4 = 1 / 0;
        return { add(n4, r4) {
          n4 >= t4 || (e9 = r4, t4 = n4);
        }, get: () => e9, score: () => t4 };
      }();
      for (let r4 = 0; r4 < eg.length; r4++) i2.add(og(ig(e8, t3, n3, r4, true)), r4);
      r3 = i2.get();
    }
    if (void 0 === r3) throw new Error("Cannot find mask");
    return ig(e8, t3, n3, r3);
  }(s, r2, o, n2.mask);
  c2.assertDrawn();
  const l2 = void 0 === n2.border ? 2 : n2.border;
  if (!Number.isSafeInteger(l2)) throw new Error("Wrong border type=" + typeof l2);
  if (c2 = c2.border(l2, false), void 0 !== n2.scale && (c2 = c2.scale(n2.scale)), "raw" === t2) return c2.data;
  if ("ascii" === t2) return c2.toASCII();
  if ("svg" === t2) return c2.toSVG();
  if ("gif" === t2) return c2.toGIF();
  if ("term" === t2) return c2.toTerm();
  throw new Error(`Unknown output: ${t2}`);
}
var ag = { DESKTOP: "Desktop", MOBILE: "Mobile", META_MASK_MOBILE_APP: "MetaMask mobile app", SCAN_TO_CONNECT: "Scan to connect and sign with", CONNECT_WITH_EXTENSION: "Connect With MetaMask Extension", INSTALL_MODAL: { TRUSTED_BY_USERS: "Trusted by over 30 million users to buy, store, send and swap crypto securely", LEADING_CRYPTO_WALLET: "The leading crypto wallet & gateway to blockchain apps built on Ethereum Mainnet, Polygon, Optimism, and many other networks", CONTROL_DIGITAL_INTERACTIONS: "Puts you in control of your digital interactions by making power of cryptography more accessible", INSTALL_META_MASK_EXTENSION: "Install MetaMask Extension" }, PENDING_MODAL: { OPEN_META_MASK_SELECT_CODE: "Please open the MetaMask wallet app and select the code on the screen OR disconnect", OPEN_META_MASK_CONTINUE: "Open the MetaMask app to continue with your session.", NUMBER_AFTER_OPEN_NOTICE: "If a number doesn't appear after opening MetaMask, please click disconnect and re-scan the QRCode.", DISCONNECT: "Disconnect" }, SELECT_MODAL: { CRYPTO_TAKE_CONTROL_TEXT: "Take control of your crypto and explore the blockchain with the wallet trusted by over 30 million people worldwide" }, META_MASK_MODAL: { ADDRESS_COPIED: "Address copied to clipboard!", DISCONNECT: "Disconnect", ACTIVE_NETWORK: "Active Network" } };
var cg = class {
  constructor(e7) {
    var t2;
    this.translations = ag, this.supportedLocales = ["es", "fr", "he", "it", "pt", "tr"], this.baseUrl = null !== (t2 = null == e7 ? void 0 : e7.baseUrl) && void 0 !== t2 ? t2 : "https://raw.githubusercontent.com/MetaMask/metamask-sdk/refs/heads/gh-pages/locales";
  }
  getBrowserLanguage() {
    if ((navigator.languages || [navigator.language]).some((e8) => e8.toLowerCase().startsWith("en"))) return "en";
    const e7 = navigator.language.toLowerCase().split("-")[0];
    return this.supportedLocales.includes(e7) ? e7 : "en";
  }
  async init(e7) {
    const t2 = this.getBrowserLanguage() || e7.fallbackLng;
    await this.loadTranslations(t2);
  }
  async loadTranslations(e7) {
    const t2 = e7.split("-")[0];
    if ("en" !== t2 && this.supportedLocales.includes(t2)) try {
      const e8 = `${this.baseUrl}/${t2}.json`, n2 = await fetch(e8);
      if (!n2.ok) throw new Error(`HTTP error! status: ${n2.status}`);
      this.translations = await n2.json();
    } catch (e8) {
      console.warn(`❌ Failed to load ${t2} translations, falling back to English:`, e8), this.translations = ag;
    }
    else this.translations = ag;
  }
  t(e7) {
    return this.getNestedTranslation(e7, this.translations) || e7;
  }
  getNestedTranslation(e7, t2) {
    const n2 = e7.split(".");
    let r2 = t2;
    for (const e8 of n2) {
      if ("object" != typeof r2) return "";
      r2 = r2[e8];
    }
    return "string" == typeof r2 ? r2 : "";
  }
};
var lg;
!function(e7) {
  e7.SDK_MODAL_VIEWED = "sdk_modal_viewed", e7.SDK_MODAL_BUTTON_CLICKED = "sdk_modal_button_clicked", e7.SDK_MODAL_TOGGLE_CHANGED = "sdk_modal_toggle_changed";
}(lg || (lg = {}));
var dg = class {
  constructor(e7) {
    uf(this, e7), this.close = Vf(this, "close", 7), this.startDesktopOnboarding = Vf(this, "startDesktopOnboarding", 7), this.trackAnalytics = Vf(this, "trackAnalytics", 7), this.link = void 0, this.sdkVersion = void 0, this.preferDesktop = void 0, this.tab = 1, this.isDefaultTab = true, this.translationsLoaded = false, this.onClose = this.onClose.bind(this), this.onStartDesktopOnboardingHandler = this.onStartDesktopOnboardingHandler.bind(this), this.setTab = this.setTab.bind(this), this.render = this.render.bind(this), this.setTab(this.preferDesktop ? 1 : 2), this.i18nInstance = new cg();
  }
  componentDidLoad() {
    this.trackAnalytics.emit({ event: lg.SDK_MODAL_VIEWED, params: { extensionInstalled: false, tab: 1 === this.tab ? "desktop" : "mobile" } });
  }
  async connectedCallback() {
    await this.i18nInstance.init({ fallbackLng: "en" }), this.translationsLoaded = true;
  }
  updatePreferDesktop(e7) {
    e7 ? this.setTab(1) : this.setTab(2);
  }
  onClose(e7 = false) {
    this.close.emit({ shouldTerminate: e7 });
  }
  onStartDesktopOnboardingHandler() {
    this.trackAnalytics.emit({ event: lg.SDK_MODAL_BUTTON_CLICKED, params: { button_type: "install_extension", tab: "desktop" } }), this.startDesktopOnboarding.emit();
  }
  setTab(e7, t2 = false) {
    t2 && this.trackAnalytics.emit({ event: lg.SDK_MODAL_TOGGLE_CHANGED, params: { toggle: 1 === this.tab ? "desktop_to_mobile" : "mobile_to_desktop" } }), this.tab = e7, this.isDefaultTab = false;
  }
  render() {
    if (!this.translationsLoaded) return null;
    const e7 = (e8) => this.i18nInstance.t(e8), t2 = this.isDefaultTab ? this.preferDesktop ? 1 : 2 : this.tab, n2 = sg(this.link, "svg", { ecc: "medium", scale: 2 });
    return Kf(Lp, { className: "install-model" }, Kf("div", { class: "backdrop", onClick: () => this.onClose(true) }), Kf("div", { class: "modal" }, Kf("div", { class: "closeButtonContainer" }, Kf("div", { class: "right" }, Kf("span", { class: "closeButton", onClick: () => this.onClose(true) }, Kf(Kp, null)))), Kf("div", { class: "logoContainer" }, Kf(jp, null)), Kf("div", null, Kf("div", { class: "tabcontainer" }, Kf("div", { class: "flexContainer" }, Kf("div", { onClick: () => this.setTab(1, true), class: "tab flexItem " + (1 === t2 ? "tabactive" : "") }, e7("DESKTOP")), Kf("div", { onClick: () => this.setTab(2, true), class: "tab flexItem " + (2 === t2 ? "tabactive" : "") }, e7("MOBILE")))), Kf("div", { style: { display: 1 === t2 ? "none" : "block" } }, Kf("div", { class: "flexContainer" }, Kf("div", { class: "flexItem", style: { textAlign: "center", marginTop: "4" } }, n2 && Kf("div", { id: "sdk-mm-qrcode", class: "center", innerHTML: n2 }), Kf("div", { class: "connectMobileText" }, e7("SCAN_TO_CONNECT"), " ", Kf("br", null), Kf("span", { class: "blue" }, Kf("b", null, e7("META_MASK_MOBILE_APP"))))))), Kf("div", { style: { display: 2 === t2 ? "none" : "block" } }, Kf("div", { class: "item" }, Kf(Op, { Icon: Np, text: e7("INSTALL_MODAL.TRUSTED_BY_USERS") })), Kf("div", { class: "item" }, Kf(Op, { Icon: Tp, text: e7("INSTALL_MODAL.LEADING_CRYPTO_WALLET") })), Kf("div", { class: "item" }, Kf(Op, { Icon: Dp, text: e7("INSTALL_MODAL.CONTROL_DIGITAL_INTERACTIONS") })), Kf("button", { class: "button", onClick: () => this.onStartDesktopOnboardingHandler() }, Kf($p, null), Kf("span", { class: "installExtensionText" }, e7("INSTALL_MODAL.INSTALL_META_MASK_EXTENSION"))))), Kf(Bp, { version: this.sdkVersion })));
  }
  get el() {
    return qf(this);
  }
  static get watchers() {
    return { preferDesktop: ["updatePreferDesktop"] };
  }
};
dg.style = ".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";
var ug = class {
  constructor(e7) {
    uf(this, e7), this.close = Vf(this, "close", 7), this.disconnect = Vf(this, "disconnect", 7), this.updateOTPValue = Vf(this, "updateOTPValue", 7), this.displayOTP = void 0, this.sdkVersion = void 0, this.otpCode = void 0, this.translationsLoaded = false, this.i18nInstance = new cg();
  }
  async connectedCallback() {
    await this.i18nInstance.init({ fallbackLng: "en" }), this.translationsLoaded = true;
  }
  onClose() {
    this.close.emit();
  }
  onDisconnect() {
    this.disconnect.emit();
  }
  onUpdateOTPValueHandler(e7) {
    this.updateOTPValue.emit({ otpValue: e7 });
  }
  disconnectedCallback() {
    this.onClose();
  }
  render() {
    var e7;
    if (!this.translationsLoaded) return null;
    const t2 = null === (e7 = this.displayOTP) || void 0 === e7 || e7, n2 = this.sdkVersion, r2 = (e8) => this.i18nInstance.t(e8);
    return Kf(Lp, { className: "pending-modal" }, Kf("div", { class: "backdrop", onClick: () => this.onClose() }), Kf("div", { class: "modal" }, Kf("div", { class: "closeButtonContainer" }, Kf("div", { class: "right" }, Kf("span", { class: "closeButton", onClick: () => this.onClose() }, Kf(Kp, null)))), Kf("div", { class: "logoContainer" }, Kf(jp, null)), Kf("div", null, Kf("div", { class: "flexContainer", style: { flexDirection: "column", color: "black" } }, Kf("div", { class: "flexItem", style: { textAlign: "center", marginTop: "30px", marginBottom: "30px", fontSize: "16px" } }, r2(t2 ? "PENDING_MODAL.OPEN_META_MASK_SELECT_CODE" : "PENDING_MODAL.OPEN_META_MASK_CONTINUE")), Kf("div", { id: "sdk-mm-otp-value", style: { padding: "10px", fontSize: "32px", display: this.otpCode ? "block" : "none" } }, this.otpCode), t2 && Kf("div", { class: "notice" }, "* ", r2("PENDING_MODAL.NUMBER_AFTER_OPEN_NOTICE"))), Kf("div", { style: { marginTop: "20px" } }, Kf("button", { class: "button blue", style: { marginTop: "5px", color: "#0376C9", borderColor: "#0376C9", borderWidth: "1px", borderStyle: "solid", backgroundColor: "white" }, onClick: () => this.onDisconnect() }, r2("PENDING_MODAL.DISCONNECT")))), Kf(Bp, { version: n2 })));
  }
  get el() {
    return qf(this);
  }
};
ug.style = ".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";
var hg = () => Kf("svg", { width: "21", height: "15", viewBox: "0 0 21 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Kf("path", { d: "M14.1364 14.9851C13.5909 14.9851 13.2273 14.5851 13.2273 13.9851C13.2273 13.3851 13.5909 12.9851 14.1364 12.9851C16.6818 12.9851 18.6818 10.7851 18.6818 7.98508C18.6818 5.18508 16.6818 2.98508 14.1364 2.98508C11.5909 2.98508 9.59091 5.18508 9.59091 7.98508C9.59091 8.58508 9.22727 8.98508 8.68182 8.98508C8.13636 8.98508 7.77273 8.58508 7.77273 7.98508C7.77273 4.08508 10.5909 0.985077 14.1364 0.985077C17.6818 0.985077 20.5 4.08508 20.5 7.98508C20.5 11.8851 17.6818 14.9851 14.1364 14.9851ZM6.68182 14.7851C3.22727 14.7851 0.5 11.6851 0.5 7.98508C0.5 4.28508 3.22727 1.18508 6.68182 1.18508C7.22727 1.18508 7.59091 1.58508 7.59091 2.18508C7.59091 2.78508 7.22727 3.18508 6.68182 3.18508C4.22727 3.18508 2.31818 5.38508 2.31818 7.98508C2.31818 10.5851 4.22727 12.7851 6.68182 12.7851C9.13636 12.7851 11.0455 10.6851 11.0455 7.98508C11.0455 7.38508 11.4091 6.98508 11.9545 6.98508C12.5 6.98508 12.8636 7.38508 12.8636 7.98508C12.7727 11.6851 10.0455 14.7851 6.68182 14.7851Z", fill: "white" }));
var fg = () => Kf("svg", { width: "400", height: "300", viewBox: "0 0 467 300", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Kf("path", { d: "M312.387 280.629C312.549 280.583 312.247 280.735 312.387 280.629L339.678 260.425C340.088 260.118 340.132 259.156 340.07 258.647C340.008 258.138 339.573 258.257 339.106 258.084L311.712 247.455C311.292 247.301 311.308 247.402 310.939 247.673C310.569 247.944 310.356 248.21 310.356 248.672L310.459 279.504C310.461 280.025 311.163 280.619 311.614 280.847C311.913 280.996 312.072 280.718 312.387 280.629ZM336.204 259.736L312.979 276.292L313.439 251.139L336.204 259.736Z", fill: "url(#paint0_linear_1356_14057)" }), Kf("path", { d: "M324.639 260.342C324.358 259.547 323.485 258.91 322.707 259.215C319.6 260.432 318.17 262.313 317.287 264.066C316.482 265.665 316.197 267.482 314.188 268.269C312.178 269.055 310.763 268.663 309.162 268.007C307.406 267.287 305.504 266.182 302.397 267.399C299.289 268.616 297.859 270.497 296.976 272.25C296.171 273.849 295.697 274.886 293.685 275.673C291.675 276.459 290.261 276.067 288.659 275.411C286.903 274.691 284.999 273.587 281.894 274.803C278.789 276.019 277.549 278.681 276.666 280.434C275.861 282.034 275.386 283.07 273.374 283.857C272.596 284.161 271.931 285.055 272.211 285.849C272.492 286.644 273.365 287.281 274.143 286.977C277.25 285.76 278.68 283.879 279.563 282.125C280.368 280.526 280.65 278.71 282.662 277.923C284.672 277.136 286.087 277.528 287.688 278.184C289.444 278.904 291.348 280.009 294.453 278.793C297.561 277.576 298.991 275.695 299.874 273.941C300.679 272.342 301.153 271.306 303.165 270.519C305.175 269.732 306.589 270.124 308.191 270.78C309.947 271.5 311.849 272.605 314.956 271.388C318.063 270.172 319.301 267.511 320.184 265.757C320.989 264.158 321.466 263.121 323.476 262.335C324.254 262.032 324.919 261.137 324.639 260.342Z", fill: "url(#paint1_linear_1356_14057)" }), Kf("path", { d: "M389.034 111.124C388.968 112.406 387.342 113.113 386.324 113.549C384.297 114.419 382.089 114.493 379.942 114.5C376.607 114.509 373.215 114.163 369.89 113.976C366.712 113.798 363.156 113.311 360.03 114.232C357.705 114.919 355.667 116.762 353.452 117.739C351.129 118.765 348.957 119.198 346.489 119.687C335.569 121.85 323.587 120.825 312.656 119.977C311.92 119.92 312.539 118.997 313.237 118.981C313.207 118.815 313.001 118.394 313.045 118.201C313.086 118.029 312.781 117.586 312.853 117.421C312.67 117.198 313.316 117.427 313.626 117.204C315.912 115.557 318.721 114.79 321.363 115.041C324.677 115.355 327.293 116.04 330.641 115.781C334.392 115.491 338.125 114.787 341.857 114.312C345.142 113.892 349.09 113.941 352.106 112.28C352.916 111.834 353.137 111.262 353.269 110.287C353.331 109.828 353.672 108.969 353.658 108.511C353.629 107.529 354.191 107.886 355.013 107.298C356.857 105.981 358.274 105.516 360.428 105.784C362.841 106.083 365.264 107.273 367.578 107.953C370.761 108.888 374.328 108.646 377.631 108.477C380.517 108.329 383.141 107.901 385.944 108.653C387.013 108.941 389.104 109.745 389.034 111.124Z", fill: "url(#paint2_linear_1356_14057)" }), Kf("path", { d: "M278.118 85.4414C280.313 83.8186 283.302 83.9 285.853 83.2728C290.501 82.127 295.644 78.4476 300.549 79.1524C301.299 79.2595 300.904 81.0355 300.159 80.9295C300.131 80.9256 300.187 80.9333 300.159 80.9295C300.089 81.0185 299.516 81.1051 299.385 81.1463C294.999 82.515 292.895 87.5083 289.126 89.8598C287.799 90.688 286.771 90.8351 285.258 90.9441C283.515 91.0691 280.964 90.5775 279.269 90.1219C277.15 89.5532 275.965 87.034 278.118 85.4414Z", fill: "url(#paint3_linear_1356_14057)" }), Kf("path", { d: "M122.567 166.093C113.597 172.832 104.535 179.836 99.517 190.092C98.5342 192.099 97.519 195.019 97.9533 197.204C98.9699 202.316 105.76 203.049 110.691 201.96C113.468 201.347 116.325 199.231 115.921 196.319C115.576 193.81 113.158 192.986 112.072 190.73C110.779 188.04 112.35 184.97 114.218 182.62C128.134 165.099 150.074 157.394 171.093 151.607C175.385 150.425 180.897 147.69 180.581 143.099C180.372 140.072 177.118 137.683 174.221 137.383C171.324 137.082 168.481 138.773 165.715 139.776C158.416 142.419 151.17 143.799 143.489 143.526C136.865 143.29 130.976 143.316 129.562 150.781C128.138 158.276 129.53 160.863 122.567 166.093Z", fill: "url(#paint4_linear_1356_14057)" }), Kf("path", { d: "M79.1056 153.531C60.3932 164.378 43.7478 178.354 32.8214 197.415C30.3313 201.76 27.9216 206.554 27.1821 211.512C26.4448 216.47 27.7591 222.525 30.8133 226.337C34.908 231.446 41.6938 232.915 48.1811 233.125C50.7248 233.208 53.0035 233.066 55.3316 231.947C57.6602 230.83 59.7548 228.359 59.5978 225.742C59.3303 221.315 54.5491 219.665 50.9271 217.34C42.6566 212.037 40.4958 199.493 44.2381 190.032C47.9803 180.57 55.8228 173.173 63.2316 166.338C67.229 162.651 71.5194 158.372 76.777 157.522C79.9167 157.015 83.4706 157.589 86.6295 157.252C93.9004 156.479 99.64 151.404 105.588 146.912C115.048 139.765 126.045 134.283 137.501 132.093C141.913 131.248 146.293 130.493 149.682 127.831C151.37 126.507 150.803 123.567 148.726 123.93C138.542 125.713 128.652 131.135 119.142 134.758C105.627 139.914 91.7133 146.223 79.1056 153.531Z", fill: "url(#paint5_linear_1356_14057)" }), Kf("path", { d: "M96.3677 117.321C96.0315 116.64 95.2914 116.612 94.6293 116.975C91.9858 118.417 91.5452 120.509 90.9466 122.178C90.4004 123.702 89.3647 124.67 87.6542 125.604C85.9437 126.538 85.0983 126.316 83.5956 125.91C81.9481 125.465 79.8603 125.424 77.2168 126.866C74.5734 128.309 74.1348 130.401 73.5341 132.07C72.9879 133.593 71.9522 134.562 70.2417 135.496C68.5313 136.43 67.6859 136.208 66.1832 135.801C64.5357 135.357 62.2569 134.538 59.6128 135.978C56.9694 137.42 56.5308 139.512 55.9301 141.181C55.3839 142.705 54.5398 144.454 52.8293 145.388C52.1667 145.748 52.1006 146.485 52.439 147.165C52.7752 147.845 53.5153 147.874 54.1773 147.511C56.8208 146.069 57.2594 143.977 57.86 142.307C58.4062 140.784 59.4419 139.815 61.1524 138.881C62.8629 137.948 63.7083 138.17 65.211 138.576C66.8585 139.021 68.9458 139.059 71.5898 137.619C74.2333 136.177 74.6718 134.085 75.2725 132.416C75.8187 130.892 76.8544 129.924 78.5649 128.99C80.2754 128.056 81.1207 128.278 82.6235 128.684C84.2709 129.129 86.5503 129.95 89.1938 128.507C91.8373 127.065 92.2779 124.973 92.8765 123.304C93.4227 121.78 94.2663 120.03 95.9773 119.098C96.6378 118.738 96.7039 118.001 96.3677 117.321Z", fill: "#FBC49D" }), Kf("path", { d: "M391.827 164.699C392.04 164.639 392.39 164.573 392.6 164.481C393.87 163.921 395.363 162.429 395.893 161.051C396.421 159.673 396.237 158.321 395.712 156.931C394.629 154.061 391.777 152.62 389.155 153.775C386.531 154.931 384.962 158.455 386.042 161.325C387.038 163.963 389.369 165.392 391.827 164.699ZM394.166 157.367C394.529 158.332 394.52 159.751 394.156 160.706C393.792 161.662 393.1 162.534 392.218 162.921C390.398 163.723 388.338 162.878 387.589 160.889C387.226 159.925 387.234 158.506 387.599 157.55C387.963 156.594 388.654 155.723 389.536 155.336C391.356 154.534 393.416 155.376 394.166 157.367Z", fill: "#86E29B" }), Kf("path", { d: "M62.7198 108.691C64.4912 108.191 66.6152 106.609 67.5596 104.824C68.4273 103.187 68.465 101.455 67.9609 99.7066C67.4547 97.9586 66.0792 96.5141 64.4963 95.6786C62.9135 94.843 61.2077 94.8578 59.4756 95.4255C57.7435 95.9933 56.2768 97.4364 55.409 99.074C53.6185 102.456 55.2032 106.494 58.4723 108.22C60.0142 109.035 61.1315 109.138 62.7198 108.691ZM60.6304 96.7682C61.819 96.4332 63.0232 96.8871 64.1048 97.4571C65.2463 98.0603 66.0495 98.8796 66.4145 100.142C66.7791 101.403 66.4488 103.299 65.8224 104.48C64.5299 106.919 61.2212 107.686 58.8638 106.441C56.5063 105.197 55.8538 101.858 57.1462 99.4185C57.7726 98.2375 58.6059 97.3957 59.8573 96.9862C59.9214 96.9635 60.5631 96.7872 60.6304 96.7682Z", fill: "#FFB0EB" }), Kf("path", { d: "M77.0217 242.979C75.9542 243.28 75.1664 242.151 74.9029 241.074C74.6394 239.996 75 239.378 76.0676 239.077C77.1351 238.776 78.5053 238.907 78.7688 239.984C79.0323 241.061 78.0893 242.678 77.0217 242.979Z", fill: "url(#paint6_linear_1356_14057)" }), Kf("path", { d: "M380.506 184.577C379.439 184.878 378.651 183.749 378.387 182.672C378.124 181.594 378.484 180.976 379.552 180.675C380.619 180.374 381.99 180.505 382.253 181.582C382.517 182.659 381.574 184.276 380.506 184.577Z", fill: "url(#paint7_linear_1356_14057)" }), Kf("path", { d: "M348.82 246.969C347.752 247.27 346.382 247.14 346.119 246.063C345.855 244.985 346.798 243.369 347.866 243.068C348.933 242.767 349.721 243.896 349.985 244.973C350.248 246.05 349.888 246.669 348.82 246.969Z", fill: "url(#paint8_linear_1356_14057)" }), Kf("path", { d: "M140.419 282.412C139.351 282.713 138.754 282.365 138.491 281.288C138.227 280.21 138.397 278.812 139.464 278.511C140.532 278.21 142.093 279.121 142.357 280.198C142.62 281.275 141.486 282.111 140.419 282.412Z", fill: "url(#paint9_linear_1356_14057)" }), Kf("path", { d: "M121.462 101.679C120.395 101.979 119.798 101.631 119.534 100.554C119.271 99.4764 119.44 98.0779 120.508 97.777C121.575 97.4761 123.136 98.3868 123.4 99.4642C123.663 100.542 122.53 101.378 121.462 101.679Z", fill: "url(#paint10_linear_1356_14057)" }), Kf("path", { d: "M370.749 159.005C369.682 159.306 368.311 159.175 368.048 158.098C367.784 157.021 368.727 155.404 369.795 155.103C370.863 154.802 371.65 155.931 371.914 157.008C372.177 158.086 371.817 158.704 370.749 159.005Z", fill: "url(#paint11_linear_1356_14057)" }), Kf("path", { d: "M384.211 245.345C383.143 245.646 381.773 245.515 381.51 244.438C381.246 243.361 382.189 241.744 383.257 241.443C384.324 241.142 385.112 242.271 385.376 243.348C385.639 244.426 385.278 245.044 384.211 245.345Z", fill: "url(#paint12_linear_1356_14057)" }), Kf("path", { d: "M364.771 41.3873C363.063 41.8687 361.337 40.8616 360.915 39.1378C360.493 37.414 361.536 35.6263 363.244 35.1449C364.953 34.6634 366.679 35.6706 367.101 37.3944C367.522 39.1182 366.479 40.9059 364.771 41.3873Z", fill: "url(#paint13_linear_1356_14057)" }), Kf("path", { d: "M404.311 77.905C404.602 77.8231 404.875 77.9236 405.084 77.6871C405.437 77.2908 404.814 76.6385 404.703 76.1265L401.277 58.7418C401.149 58.163 400.687 57.5371 400.123 57.3991C399.558 57.2611 398.969 57.3812 398.576 57.835L385.784 73.1179C385.395 73.564 385.199 74.3453 385.393 74.8964C385.585 75.4481 385.978 76.1646 386.548 76.2391L403.538 78.123C403.744 78.1479 404.114 77.9607 404.311 77.905ZM398.948 62.7348L401.811 74.4394L389.841 72.8085L398.948 62.7348Z", fill: "#FFB0EB" }), Kf("path", { d: "M97.5393 295.311C97.7108 295.263 97.4284 295.461 97.5393 295.311L108.785 280.464C108.975 280.211 108.718 279.972 108.594 279.684C108.47 279.396 108.124 279.917 107.821 279.902L88.5106 278.672C88.2101 278.659 87.895 278.62 87.7374 278.89C87.5798 279.159 87.7755 279.402 87.9283 279.67L96.5753 294.749C96.7102 294.99 97.2696 295.297 97.5393 295.311C97.6283 295.319 97.4556 295.335 97.5393 295.311ZM106.465 281.118L96.9667 292.97L90.6295 280.577L106.465 281.118Z", fill: "#86E29B" }), Kf("path", { d: "M393.699 108.848C389.518 104.446 414.629 114.366 413.945 120.659C413.259 126.952 401.355 129.102 403.894 123.491C406.042 118.747 400.376 115.876 393.699 108.848Z", fill: "#FBC49D" }), Kf("path", { d: "M139.414 115.959C139.434 115.953 139.392 115.965 139.414 115.959C141.963 115.2 143.436 111.976 142.717 109.189C142.37 107.839 141.526 107.199 140.408 106.504C139.289 105.808 138.171 105.449 136.933 105.815C135.698 106.182 134.85 107.033 134.222 108.247C133.595 109.461 133.282 111.234 133.63 112.585C133.978 113.935 134.821 114.574 135.94 115.27C137.04 115.952 138.199 116.301 139.414 115.959ZM137.315 107.375C138.222 107.12 139.005 106.994 139.825 107.502C140.661 108.02 140.912 108.618 141.171 109.625C141.708 111.704 140.935 113.834 139.032 114.398C138.11 114.675 137.356 114.791 136.522 114.272C135.686 113.753 135.436 113.155 135.176 112.149C134.917 111.142 134.718 109.714 135.186 108.81C135.654 107.905 136.394 107.649 137.315 107.375C137.329 107.371 137.299 107.38 137.315 107.375Z", fill: "#75C4FD" }), Kf("path", { d: "M308.981 78.7519C310.052 78.4043 311.158 78.7096 312.265 78.6613C313.655 78.6006 314.936 78.517 316.323 78.3531C319.497 77.9795 322.798 77.4906 325.984 77.3012C329.309 77.1025 332.514 76.8551 335.836 77.0295C338.809 77.1842 342.163 77.3405 345.105 77.7558C352.129 78.7468 359.331 79.0578 366.347 80.1158C372.252 81.008 377.93 82.1319 383.722 83.5644C385.925 84.0054 388.267 85.0754 389.126 85.3792C389.421 85.4833 389.37 85.8347 389.317 86.1595C389.306 86.2271 389.353 86.1146 389.317 86.1595C388.269 87.414 386.564 86.8124 385.259 86.4677C384.406 86.241 381.488 85.9494 381.011 85.9957C380.14 86.0815 379.277 86.014 379.656 87.2114C380.122 88.6824 382.391 89.7375 383.704 90.2419C385.883 91.0803 388.771 91.2561 390.845 92.4015C392.968 92.821 395.425 93.5002 397.022 93.9986C402.83 95.8103 407.806 98.8678 413.033 102.002C415.503 103.482 417.829 104.764 419.973 106.72C421.647 108.248 423.771 109.882 424.595 112.091C425.113 113.482 424.451 115.471 422.848 115.085C420.353 114.488 419.638 111.665 418.227 109.714C415.003 105.251 410.067 102.067 405.118 100.06C402.64 99.0556 399.803 98.729 397.204 98.1176C394.411 97.4613 391.597 97.0442 388.707 97.1736C385.646 97.3097 382.846 97.5534 379.819 98.0078C377.027 98.4264 374.252 98.4441 371.514 97.8441C368.766 97.2421 366.276 96.7553 363.6 95.9021C361.662 95.2848 359.013 94.5583 357.232 93.5247C355.699 92.6339 355.631 91.2381 357.241 90.186C359.87 88.4656 362.778 89.8021 365.546 90.3497C365.561 90.3527 365.532 90.3468 365.546 90.3497C367.858 90.804 369.649 90.098 371.923 89.3884C372.489 89.2128 373.255 89.0482 373.47 88.953C374.383 88.5432 375.895 87.8227 375.407 86.7394C374.868 85.5457 372.659 84.8846 371.55 84.4891C369.74 83.8428 368.053 82.9215 366.147 82.6743C365.654 82.6095 365.109 83.1606 364.6 83.1097C363.36 83.1121 361.769 83.348 360.543 83.418C357.43 83.5916 354.583 83.6228 351.464 83.4719C348.714 83.3377 346.432 82.8542 343.741 82.3102C340.773 81.7101 337.52 81.5879 334.471 81.5839C331.393 81.5811 328.6 81.7214 325.583 82.4181C322.758 83.0702 319.757 83.6198 316.887 84.0326C314.698 84.3481 312.467 84.6054 310.319 84.2137C309.079 83.9871 306.994 83.3394 306.461 81.9635C305.846 80.3659 307.736 79.1556 308.981 78.7519Z", fill: "url(#paint14_linear_1356_14057)" }), Kf("path", { d: "M242.269 242.95C242.295 242.947 242.244 242.955 242.269 242.95C244.934 242.606 247.53 241.858 250.2 241.574C253.133 241.264 256.006 240.56 258.906 239.982C263.26 239.117 268.026 238.52 272.254 237.097C274.429 236.365 276.067 235.298 278.251 234.592C280.361 233.909 283.058 233.12 285.216 232.652C289.317 231.764 293.049 231.66 297.016 230.198C301.109 228.69 305.088 226.673 308.819 224.409C312.645 222.086 316.282 219.769 320.622 218.62C322.381 218.154 323.919 218.219 325.65 218.886C327.016 219.413 327.739 220.337 327.196 221.79C326.557 223.504 324.659 224.7 323.131 225.423C320.854 226.5 319.53 227.184 317.134 227.927C314.619 228.707 311.888 229.24 309.395 230.083C308.226 230.947 307.17 232.522 306.105 233.501C303.996 235.441 301.666 237.03 298.945 237.996C292.934 240.129 286.354 238.602 280.183 239.056C279.661 239.095 279.162 239.442 278.635 239.487C275.592 240.135 272.2 240.63 269.156 241.294C264.546 242.299 260.456 243.409 255.808 244.179C251.971 244.814 243.815 245.854 243.815 245.854L242.074 245.505C240.575 245.281 240.751 243.152 242.269 242.95Z", fill: "url(#paint15_linear_1356_14057)" }), Kf("path", { d: "M432.985 171.626C438.212 165.465 445.109 153.64 442.906 144.649C442.162 137.999 433.671 132.912 424.963 135.518C420.16 136.957 416.435 142.146 419.724 144.498C420.656 145.164 422.187 145.591 423.391 145.969C434.204 149.375 434.925 162.538 425.069 169.683C421.087 172.569 416.347 174.292 411.914 176.719C400.151 183.162 399.887 196.847 387.7 202.712C382.326 205.298 375.761 206.838 370.297 209.275C359.98 213.88 352.555 221.733 342.241 226.341C337.225 228.584 330.266 231.632 323.483 234.12C321.475 234.855 321.999 237.058 324.056 236.46C324.098 236.449 324.017 236.474 324.056 236.46C329.079 234.971 334.437 233.161 339.331 231.33C352.278 226.48 365.28 220.971 377.43 214.775C401.78 202.367 416.881 190.609 432.985 171.626Z", fill: "url(#paint16_linear_1356_14057)" }), Kf("path", { d: "M343.644 241.104C348.002 234.144 357.126 232.455 364.343 231.134C368.176 230.431 372.406 229.878 376.137 228.662C380.691 227.175 384.558 224.095 388.327 221.077C389.452 220.177 391.204 218.466 392.393 217.436C393.185 216.748 393.644 216.026 394.33 215.225C396 213.275 399.599 209.812 401.687 208.16C403.263 206.914 407.779 204.758 408.259 207.986C408.611 210.359 406.379 213.087 404.961 214.747C402.224 217.953 398.998 221.079 395.475 223.243C391.749 225.531 387.701 227.439 383.674 229.051C381.672 229.853 379.519 230.073 377.486 230.785C376.001 231.307 374.486 232.236 373.037 232.866C371.034 233.738 368.99 234.28 367.041 235.38C364.436 236.849 361.782 238.783 359.108 240.105C356.331 241.477 353.823 242.691 350.791 243.27C348.6 243.687 345.501 243.641 343.836 241.884C343.526 241.554 343.389 241.51 343.644 241.104Z", fill: "url(#paint17_linear_1356_14057)" }), Kf("path", { d: "M190.163 273.219C222.905 268.849 232.64 262.943 213.962 259.057C195.285 255.172 187.5 262.08 188.434 266.2C189.366 270.32 180.381 271.326 169.286 272.39C158.193 273.454 157.141 276.354 190.163 273.219Z", fill: "url(#paint18_linear_1356_14057)" }), Kf("path", { d: "M295.952 95.4242L241.395 135.226L251.54 111.77L295.952 95.4242Z", fill: "#E17726", stroke: "#E17726", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M170.111 95.4242L224.181 135.598L214.522 111.77L170.111 95.4242Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M276.309 187.712L261.793 209.576L292.876 218.014L301.78 188.189L276.309 187.712Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M164.336 188.189L173.186 218.014L204.215 209.576L189.753 187.712L164.336 188.189Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M202.542 150.776L193.908 163.618L224.667 164.998L223.642 132.36L202.542 150.776Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M263.52 150.775L242.097 131.989L241.395 164.998L272.154 163.618L263.52 150.775Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M204.215 209.576L222.832 200.714L206.805 188.402L204.215 209.576Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M243.23 200.714L261.793 209.576L259.257 188.402L243.23 200.714Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M261.793 209.576L243.23 200.714L244.741 212.601L244.579 217.643L261.793 209.576Z", fill: "#D5BFB2", stroke: "#D5BFB2", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M204.215 209.576L221.483 217.643L221.375 212.601L222.832 200.714L204.215 209.576Z", fill: "#D5BFB2", stroke: "#D5BFB2", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M221.807 180.547L206.373 176.09L217.274 171.154L221.807 180.547Z", fill: "#233447", stroke: "#233447", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M244.255 180.547L248.788 171.154L259.742 176.09L244.255 180.547Z", fill: "#233447", stroke: "#233447", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M204.215 209.576L206.913 187.712L189.753 188.189L204.215 209.576Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M259.149 187.712L261.793 209.576L276.309 188.189L259.149 187.712Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M272.154 163.618L241.395 164.998L244.255 180.547L248.788 171.154L259.742 176.09L272.154 163.618Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M206.373 176.09L217.274 171.154L221.807 180.547L224.667 164.998L193.908 163.618L206.373 176.09Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M193.908 163.618L206.805 188.402L206.373 176.09L193.908 163.618Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M259.743 176.09L259.257 188.402L272.154 163.618L259.743 176.09Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M224.667 164.998L221.807 180.548L225.422 198.909L226.232 174.71L224.667 164.998Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M241.395 164.998L239.884 174.657L240.64 198.909L244.255 180.548L241.395 164.998Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M244.255 180.547L240.64 198.909L243.23 200.714L259.257 188.402L259.743 176.09L244.255 180.547Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M206.373 176.09L206.805 188.402L222.832 200.714L225.422 198.909L221.807 180.547L206.373 176.09Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M244.579 217.643L244.741 212.601L243.338 211.434H222.724L221.375 212.601L221.483 217.643L204.215 209.576L210.259 214.459L222.508 222.791H243.5L255.803 214.459L261.793 209.576L244.579 217.643Z", fill: "#C0AC9D", stroke: "#C0AC9D", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M243.23 200.714L240.64 198.909H225.422L222.832 200.714L221.375 212.601L222.724 211.434H243.338L244.741 212.601L243.23 200.714Z", fill: "#161616", stroke: "#161616", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M298.272 137.827L302.859 115.856L295.952 95.4242L243.23 133.899L263.52 150.775L292.174 159.001L298.488 151.731L295.736 149.767L300.107 145.84L296.761 143.293L301.132 140.002L298.272 137.827Z", fill: "#763E1A", stroke: "#763E1A", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M163.203 115.856L167.844 137.827L164.876 140.002L169.301 143.293L165.955 145.84L170.326 149.767L167.574 151.731L173.888 159.001L202.542 150.775L222.832 133.899L170.11 95.4242L163.203 115.856Z", fill: "#763E1A", stroke: "#763E1A", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M292.175 159.001L263.52 150.775L272.154 163.618L259.257 188.402L276.309 188.189H301.78L292.175 159.001Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M202.542 150.775L173.888 159.001L164.336 188.189H189.753L206.805 188.402L193.908 163.618L202.542 150.775Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("path", { d: "M241.395 164.998L243.23 133.9L251.54 111.77H214.522L222.832 133.9L224.667 164.998L225.368 174.763L225.422 198.909H240.64L240.694 174.763L241.395 164.998Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), Kf("defs", null, Kf("linearGradient", { id: "paint0_linear_1356_14057", x1: "335.991", y1: "250.487", x2: "303.873", y2: "266.801", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#FFE466" }), Kf("stop", { offset: "1", "stop-color": "#FFAFEA" })), Kf("linearGradient", { id: "paint1_linear_1356_14057", x1: "276.993", y1: "303.722", x2: "205.254", y2: "401.574", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#75C3FC" }), Kf("stop", { offset: "0.0929", "stop-color": "#81C2F6" }), Kf("stop", { offset: "1", "stop-color": "#F0B8BD" })), Kf("linearGradient", { id: "paint2_linear_1356_14057", x1: "271.074", y1: "119.924", x2: "553.077", y2: "104.53", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#FFE466" }), Kf("stop", { offset: "1", "stop-color": "#FFAFEA" })), Kf("linearGradient", { id: "paint3_linear_1356_14057", x1: "264.209", y1: "91.0943", x2: "357.834", y2: "72.8792", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#FFE466" }), Kf("stop", { offset: "1", "stop-color": "#FFAFEA" })), Kf("linearGradient", { id: "paint4_linear_1356_14057", x1: "212.46", y1: "121.997", x2: "92.6119", y2: "183.406", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#FFE466" }), Kf("stop", { offset: "1", "stop-color": "#FFAFEA" })), Kf("linearGradient", { id: "paint5_linear_1356_14057", x1: "23.0498", y1: "204.411", x2: "161.86", y2: "163.003", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#75C3FC" }), Kf("stop", { offset: "0.0929", "stop-color": "#81C2F6" }), Kf("stop", { offset: "1", "stop-color": "#F0B8BD" })), Kf("linearGradient", { id: "paint6_linear_1356_14057", x1: "78.8647", y1: "240.375", x2: "74.9655", y2: "241.328", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#75C3FC" }), Kf("stop", { offset: "1", "stop-color": "#75C3FC" })), Kf("linearGradient", { id: "paint7_linear_1356_14057", x1: "382.349", y1: "181.971", x2: "378.45", y2: "182.925", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#75C3FC" }), Kf("stop", { offset: "1", "stop-color": "#75C3FC" })), Kf("linearGradient", { id: "paint8_linear_1356_14057", x1: "349.889", y1: "244.583", x2: "345.99", y2: "245.537", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#75C3FC" }), Kf("stop", { offset: "1", "stop-color": "#75C3FC" })), Kf("linearGradient", { id: "paint9_linear_1356_14057", x1: "142.262", y1: "279.808", x2: "138.362", y2: "280.762", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#75C3FC" }), Kf("stop", { offset: "1", "stop-color": "#75C3FC" })), Kf("linearGradient", { id: "paint10_linear_1356_14057", x1: "123.305", y1: "99.0746", x2: "119.406", y2: "100.028", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#75C3FC" }), Kf("stop", { offset: "1", "stop-color": "#75C3FC" })), Kf("linearGradient", { id: "paint11_linear_1356_14057", x1: "371.818", y1: "156.617", x2: "367.919", y2: "157.571", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#75C3FC" }), Kf("stop", { offset: "1", "stop-color": "#75C3FC" })), Kf("linearGradient", { id: "paint12_linear_1356_14057", x1: "385.281", y1: "242.958", x2: "381.382", y2: "243.911", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#75C3FC" }), Kf("stop", { offset: "1", "stop-color": "#75C3FC" })), Kf("linearGradient", { id: "paint13_linear_1356_14057", x1: "367.125", y1: "37.5052", x2: "360.843", y2: "38.8076", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#75C3FC" }), Kf("stop", { offset: "1", "stop-color": "#75C3FC" })), Kf("linearGradient", { id: "paint14_linear_1356_14057", x1: "300.182", y1: "91.321", x2: "479.464", y2: "104.041", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#FFE466" }), Kf("stop", { offset: "1", "stop-color": "#FFAFEA" })), Kf("linearGradient", { id: "paint15_linear_1356_14057", x1: "363.434", y1: "201.232", x2: "102.977", y2: "302.269", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#FFE466" }), Kf("stop", { offset: "1", "stop-color": "#FFAFEA" })), Kf("linearGradient", { id: "paint16_linear_1356_14057", x1: "447.962", y1: "165.159", x2: "313.049", y2: "197.95", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#75C3FC" }), Kf("stop", { offset: "0.0929", "stop-color": "#81C2F6" }), Kf("stop", { offset: "1", "stop-color": "#F0B8BD" })), Kf("linearGradient", { id: "paint17_linear_1356_14057", x1: "410.211", y1: "215.859", x2: "341.378", y2: "232.788", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#75C3FC" }), Kf("stop", { offset: "0.0929", "stop-color": "#81C2F6" }), Kf("stop", { offset: "1", "stop-color": "#F0B8BD" })), Kf("linearGradient", { id: "paint18_linear_1356_14057", x1: "222.282", y1: "258.986", x2: "162.257", y2: "273.774", gradientUnits: "userSpaceOnUse" }, Kf("stop", { "stop-color": "#FFE466" }), Kf("stop", { offset: "1", "stop-color": "#FFAFEA" }))));
var pg = class {
  constructor(e7) {
    uf(this, e7), this.close = Vf(this, "close", 7), this.connectWithExtension = Vf(this, "connectWithExtension", 7), this.link = void 0, this.sdkVersion = void 0, this.preferDesktop = void 0, this.tab = 1, this.isDefaultTab = true, this.translationsLoaded = false, this.i18nInstance = new cg(), this.setTab(this.preferDesktop ? 1 : 2);
  }
  async connectedCallback() {
    await this.i18nInstance.init({ fallbackLng: "en" }), this.translationsLoaded = true;
  }
  onClose(e7 = false) {
    this.close.emit({ shouldTerminate: e7 });
  }
  connectWithExtensionHandler() {
    this.connectWithExtension.emit();
  }
  setTab(e7) {
    this.tab = e7, this.isDefaultTab = false;
  }
  disconnectedCallback() {
    this.onClose();
  }
  updatePreferDesktop(e7) {
    e7 ? this.setTab(1) : this.setTab(2);
  }
  render() {
    if (!this.translationsLoaded) return null;
    const e7 = (e8) => this.i18nInstance.t(e8), t2 = this.sdkVersion, n2 = this.isDefaultTab ? this.preferDesktop ? 1 : 2 : this.tab, r2 = sg(this.link, "svg", { ecc: "medium", scale: 2 });
    return Kf(Lp, { className: "select-modal" }, Kf("div", { class: "backdrop", onClick: () => this.onClose(true) }), Kf("div", { class: "modal" }, Kf("div", { class: "closeButtonContainer" }, Kf("div", { class: "right" }, Kf("span", { class: "closeButton", onClick: () => this.onClose(true) }, Kf(Kp, null)))), Kf("div", { class: "logoContainer" }, Kf(jp, null)), Kf("div", null, Kf("div", { class: "tabcontainer" }, Kf("div", { class: "flexContainer" }, Kf("div", { onClick: () => this.setTab(1), class: "tab flexItem " + (1 === n2 ? "tabactive" : "") }, e7("DESKTOP")), Kf("div", { onClick: () => this.setTab(2), class: "tab flexItem " + (2 === n2 ? "tabactive" : "") }, e7("MOBILE")))), Kf("div", { style: { display: 1 === n2 ? "none" : "block" } }, Kf("div", { class: "flexContainer" }, Kf("div", { class: "flexItem", style: { textAlign: "center", marginTop: "4" } }, Kf("div", { class: "center", id: "sdk-mm-qrcode", innerHTML: r2 }), Kf("div", { class: "connectMobileText" }, e7("SCAN_TO_CONNECT"), Kf("br", null), Kf("span", { class: "blue" }, Kf("b", null, e7("META_MASK_MOBILE_APP"))))))), Kf("div", { style: { display: 2 === n2 ? "none" : "block" } }, Kf("div", { style: { display: "flex", justifyContent: "center", height: "300", marginTop: "-20" } }, Kf(fg, null)), Kf("div", { class: "extensionLabel" }, e7("SELECT_MODAL.CRYPTO_TAKE_CONTROL_TEXT")), Kf("button", { class: "button", onClick: () => this.connectWithExtensionHandler() }, Kf(hg, null), Kf("span", { class: "installExtensionText" }, e7("CONNECT_WITH_EXTENSION"))))), Kf(Bp, { version: t2 })));
  }
  get el() {
    return qf(this);
  }
  static get watchers() {
    return { preferDesktop: ["updatePreferDesktop"] };
  }
};
pg.style = ".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";
var gg = Object.freeze({ __proto__: null, mm_install_modal: dg, mm_pending_modal: ug, mm_select_modal: pg });
export {
  $o as CommunicationLayerPreference,
  vo as ConnectionStatus,
  ho as DEFAULT_SERVER_URL,
  bo as EventType,
  Co as MessageType,
  tf as MetaMaskSDK,
  Fu as MetaMaskSDKEvent,
  uh as PROVIDER_UPDATE_TYPE,
  Bo as PlatformType,
  Wu as SDKProvider,
  tf as default
};
/*! Bundled license information:

eventemitter2/lib/eventemitter2.js:
  (*!
   * EventEmitter2
   * https://github.com/hij1nx/EventEmitter2
   *
   * Copyright (c) 2013 hij1nx
   * Licensed under the MIT license.
   *)
*/
//# sourceMappingURL=metamask-sdk-SGBEDDIV.js.map
