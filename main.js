(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l2 = /* @__PURE__ */ Symbol.for("react.element");
      var n = /* @__PURE__ */ Symbol.for("react.portal");
      var p = /* @__PURE__ */ Symbol.for("react.fragment");
      var q2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var x2 = /* @__PURE__ */ Symbol.for("react.memo");
      var y = /* @__PURE__ */ Symbol.for("react.lazy");
      var z3 = Symbol.iterator;
      function A2(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z3 && a[z3] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B2 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D2 = {};
      function E3(a, b, e2) {
        this.props = a;
        this.context = b;
        this.refs = D2;
        this.updater = e2 || B2;
      }
      E3.prototype.isReactComponent = {};
      E3.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E3.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F2() {
      }
      F2.prototype = E3.prototype;
      function G2(a, b, e2) {
        this.props = a;
        this.context = b;
        this.refs = D2;
        this.updater = e2 || B2;
      }
      var H2 = G2.prototype = new F2();
      H2.constructor = G2;
      C(H2, E3.prototype);
      H2.isPureReactComponent = true;
      var I3 = Array.isArray;
      var J2 = Object.prototype.hasOwnProperty;
      var K2 = { current: null };
      var L2 = { key: true, ref: true, __self: true, __source: true };
      function M2(a, b, e2) {
        var d, c = {}, k3 = null, h2 = null;
        if (null != b) for (d in void 0 !== b.ref && (h2 = b.ref), void 0 !== b.key && (k3 = "" + b.key), b) J2.call(b, d) && !L2.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e2;
        else if (1 < g) {
          for (var f2 = Array(g), m = 0; m < g; m++) f2[m] = arguments[m + 2];
          c.children = f2;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l2, type: a, key: k3, ref: h2, props: c, _owner: K2.current };
      }
      function N3(a, b) {
        return { $$typeof: l2, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O2(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l2;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P2 = /\/+/g;
      function Q2(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R3(a, b, e2, d, c) {
        var k3 = typeof a;
        if ("undefined" === k3 || "boolean" === k3) a = null;
        var h2 = false;
        if (null === a) h2 = true;
        else switch (k3) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l2:
              case n:
                h2 = true;
            }
        }
        if (h2) return h2 = a, c = c(h2), a = "" === d ? "." + Q2(h2, 0) : d, I3(c) ? (e2 = "", null != a && (e2 = a.replace(P2, "$&/") + "/"), R3(c, b, e2, "", function(a2) {
          return a2;
        })) : null != c && (O2(c) && (c = N3(c, e2 + (!c.key || h2 && h2.key === c.key ? "" : ("" + c.key).replace(P2, "$&/") + "/") + a)), b.push(c)), 1;
        h2 = 0;
        d = "" === d ? "." : d + ":";
        if (I3(a)) for (var g = 0; g < a.length; g++) {
          k3 = a[g];
          var f2 = d + Q2(k3, g);
          h2 += R3(k3, b, e2, f2, c);
        }
        else if (f2 = A2(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k3 = a.next()).done; ) k3 = k3.value, f2 = d + Q2(k3, g++), h2 += R3(k3, b, e2, f2, c);
        else if ("object" === k3) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h2;
      }
      function S(a, b, e2) {
        if (null == a) return a;
        var d = [], c = 0;
        R3(a, d, "", "", function(a2) {
          return b.call(e2, a2, c++);
        });
        return d;
      }
      function T(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U3 = { current: null };
      var V2 = { transition: null };
      var W3 = { ReactCurrentDispatcher: U3, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K2 };
      function X3() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S, forEach: function(a, b, e2) {
        S(a, function() {
          b.apply(this, arguments);
        }, e2);
      }, count: function(a) {
        var b = 0;
        S(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O2(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E3;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G2;
      exports.StrictMode = q2;
      exports.Suspense = w2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W3;
      exports.act = X3;
      exports.cloneElement = function(a, b, e2) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k3 = a.ref, h2 = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k3 = b.ref, h2 = K2.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f2 in b) J2.call(b, f2) && !L2.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2) d.children = e2;
        else if (1 < f2) {
          g = Array(f2);
          for (var m = 0; m < f2; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l2, type: a.type, key: c, ref: k3, props: d, _owner: h2 };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M2;
      exports.createFactory = function(a) {
        var b = M2.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v, render: a };
      };
      exports.isValidElement = O2;
      exports.lazy = function(a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x2, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V2.transition;
        V2.transition = {};
        try {
          a();
        } finally {
          V2.transition = b;
        }
      };
      exports.unstable_act = X3;
      exports.useCallback = function(a, b) {
        return U3.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U3.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U3.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U3.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U3.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e2) {
        return U3.current.useImperativeHandle(a, b, e2);
      };
      exports.useInsertionEffect = function(a, b) {
        return U3.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U3.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U3.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e2) {
        return U3.current.useReducer(a, b, e2);
      };
      exports.useRef = function(a) {
        return U3.current.useRef(a);
      };
      exports.useState = function(a) {
        return U3.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e2) {
        return U3.current.useSyncExternalStore(a, b, e2);
      };
      exports.useTransition = function() {
        return U3.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f2(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e2 = a[d];
          if (0 < g(e2, b)) a[d] = b, a[c] = e2, c = d;
          else break a;
        }
      }
      function h2(a) {
        return 0 === a.length ? null : a[0];
      }
      function k3(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e2 = a.length, w2 = e2 >>> 1; d < w2; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x2 = a[n];
            if (0 > g(C, c)) n < e2 && 0 > g(x2, C) ? (a[d] = x2, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e2 && 0 > g(x2, c)) a[d] = x2, a[n] = c, d = n;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l2 = performance;
        exports.unstable_now = function() {
          return l2.now();
        };
      } else {
        p = Date, q2 = p.now();
        exports.unstable_now = function() {
          return p.now() - q2;
        };
      }
      var l2;
      var p;
      var q2;
      var r = [];
      var t = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z3 = false;
      var A2 = false;
      var B2 = false;
      var D2 = "function" === typeof setTimeout ? setTimeout : null;
      var E3 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b = h2(t); null !== b; ) {
          if (null === b.callback) k3(t);
          else if (b.startTime <= a) k3(t), b.sortIndex = b.expirationTime, f2(r, b);
          else break;
          b = h2(t);
        }
      }
      function H2(a) {
        B2 = false;
        G2(a);
        if (!A2) if (null !== h2(r)) A2 = true, I3(J2);
        else {
          var b = h2(t);
          null !== b && K2(H2, b.startTime - a);
        }
      }
      function J2(a, b) {
        A2 = false;
        B2 && (B2 = false, E3(L2), L2 = -1);
        z3 = true;
        var c = y;
        try {
          G2(b);
          for (v = h2(r); null !== v && (!(v.expirationTime > b) || a && !M2()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e2 = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e2 ? v.callback = e2 : v === h2(r) && k3(r);
              G2(b);
            } else k3(r);
            v = h2(r);
          }
          if (null !== v) var w2 = true;
          else {
            var m = h2(t);
            null !== m && K2(H2, m.startTime - b);
            w2 = false;
          }
          return w2;
        } finally {
          v = null, y = c, z3 = false;
        }
      }
      var N3 = false;
      var O2 = null;
      var L2 = -1;
      var P2 = 5;
      var Q2 = -1;
      function M2() {
        return exports.unstable_now() - Q2 < P2 ? false : true;
      }
      function R3() {
        if (null !== O2) {
          var a = exports.unstable_now();
          Q2 = a;
          var b = true;
          try {
            b = O2(true, a);
          } finally {
            b ? S() : (N3 = false, O2 = null);
          }
        } else N3 = false;
      }
      var S;
      if ("function" === typeof F2) S = function() {
        F2(R3);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U3 = T.port2;
        T.port1.onmessage = R3;
        S = function() {
          U3.postMessage(null);
        };
      } else S = function() {
        D2(R3, 0);
      };
      var T;
      var U3;
      function I3(a) {
        O2 = a;
        N3 || (N3 = true, S());
      }
      function K2(a, b) {
        L2 = D2(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A2 || z3 || (A2 = true, I3(J2));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h2(r);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c + e2;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t, a), null === h2(r) && a === h2(t) && (B2 ? (E3(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e2, f2(r, a), A2 || z3 || (A2 = true, I3(J2)));
        return a;
      };
      exports.unstable_shouldYield = M2;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa2 = require_react();
      var ca2 = require_scheduler();
      function p(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da2 = /* @__PURE__ */ new Set();
      var ea2 = {};
      function fa2(a, b) {
        ha2(a, b);
        ha2(a + "Capture", b);
      }
      function ha2(a, b) {
        ea2[a] = b;
        for (a = 0; a < b.length; a++) da2.add(b[a]);
      }
      var ia2 = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la2 = {};
      var ma2 = {};
      function oa2(a) {
        if (ja.call(ma2, a)) return true;
        if (ja.call(la2, a)) return false;
        if (ka2.test(a)) return ma2[a] = true;
        la2[a] = true;
        return false;
      }
      function pa2(a, b, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa2(a, b, c, d) {
        if (null === b || "undefined" === typeof b || pa2(a, b, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
        return false;
      }
      function v(a, b, c, d, e2, f2, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e2;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f2;
        this.removeEmptyString = g;
      }
      var z3 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z3[a] = new v(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z3[b] = new v(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z3[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z3[a] = new v(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z3[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z3[a] = new v(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z3[a] = new v(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z3[a] = new v(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z3[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra2 = /[\-:]([a-z])/g;
      function sa2(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(
          ra2,
          sa2
        );
        z3[b] = new v(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(ra2, sa2);
        z3[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(ra2, sa2);
        z3[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z3[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z3.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z3[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta2(a, b, c, d) {
        var e2 = z3.hasOwnProperty(b) ? z3[b] : null;
        if (null !== e2 ? 0 !== e2.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa2(b, c, e2, d) && (c = null), d || null === e2 ? oa2(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e2.mustUseProperty ? a[e2.propertyName] = null === c ? 3 === e2.type ? false : "" : c : (b = e2.attributeName, d = e2.attributeNamespace, null === c ? a.removeAttribute(b) : (e2 = e2.type, c = 3 === e2 || 4 === e2 && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var ua2 = aa2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va2 = /* @__PURE__ */ Symbol.for("react.element");
      var wa2 = /* @__PURE__ */ Symbol.for("react.portal");
      var ya2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var za2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa2 = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba2 = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca2 = /* @__PURE__ */ Symbol.for("react.context");
      var Da2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa2 = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga2 = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia2 = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja2 = Symbol.iterator;
      function Ka(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja2 && a[Ja2] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A2 = Object.assign;
      var La2;
      function Ma2(a) {
        if (void 0 === La2) try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          La2 = b && b[1] || "";
        }
        return "\n" + La2 + a;
      }
      var Na2 = false;
      function Oa2(a, b) {
        if (!a || Na2) return "";
        Na2 = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b) if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l2) {
              var d = l2;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l2) {
              d = l2;
            }
            a.call(b.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l2) {
              d = l2;
            }
            a();
          }
        } catch (l2) {
          if (l2 && d && "string" === typeof l2.stack) {
            for (var e2 = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e2.length - 1, h2 = f2.length - 1; 1 <= g && 0 <= h2 && e2[g] !== f2[h2]; ) h2--;
            for (; 1 <= g && 0 <= h2; g--, h2--) if (e2[g] !== f2[h2]) {
              if (1 !== g || 1 !== h2) {
                do
                  if (g--, h2--, 0 > h2 || e2[g] !== f2[h2]) {
                    var k3 = "\n" + e2[g].replace(" at new ", " at ");
                    a.displayName && k3.includes("<anonymous>") && (k3 = k3.replace("<anonymous>", a.displayName));
                    return k3;
                  }
                while (1 <= g && 0 <= h2);
              }
              break;
            }
          }
        } finally {
          Na2 = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma2(a) : "";
      }
      function Pa2(a) {
        switch (a.tag) {
          case 5:
            return Ma2(a.type);
          case 16:
            return Ma2("Lazy");
          case 13:
            return Ma2("Suspense");
          case 19:
            return Ma2("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa2(a.type, false), a;
          case 11:
            return a = Oa2(a.type.render, false), a;
          case 1:
            return a = Oa2(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa2(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya2:
            return "Fragment";
          case wa2:
            return "Portal";
          case Aa2:
            return "Profiler";
          case za2:
            return "StrictMode";
          case Ea2:
            return "Suspense";
          case Fa2:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca2:
            return (a.displayName || "Context") + ".Consumer";
          case Ba2:
            return (a._context.displayName || "Context") + ".Provider";
          case Da2:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga2:
            return b = a.displayName || null, null !== b ? b : Qa2(a.type) || "Memo";
          case Ha2:
            b = a._payload;
            a = a._init;
            try {
              return Qa2(a(b));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra2(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa2(b);
          case 8:
            return b === za2 ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
        }
        return null;
      }
      function Sa2(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta2(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua(a) {
        var b = Ta2(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e2 = c.get, f2 = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e2.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f2.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Va2(a) {
        a._valueTracker || (a._valueTracker = Ua(a));
      }
      function Wa2(a) {
        if (!a) return false;
        var b = a._valueTracker;
        if (!b) return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ta2(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Xa2(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Ya2(a, b) {
        var c = b.checked;
        return A2({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c = Sa2(null != b.value ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a, b) {
        b = b.checked;
        null != b && ta2(a, "checked", b, false);
      }
      function bb(a, b) {
        ab(a, b);
        var c = Sa2(b.value), d = b.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa2(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function db(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b, c) {
        if ("number" !== b || Xa2(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e2 = 0; e2 < c.length; e2++) b["$" + c[e2]] = true;
          for (c = 0; c < a.length; c++) e2 = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e2 && (a[c].selected = e2), e2 && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa2(c);
          b = null;
          for (e2 = 0; e2 < a.length; e2++) {
            if (a[e2].value === c) {
              a[e2].selected = true;
              d && (a[e2].defaultSelected = true);
              return;
            }
            null !== b || a[e2].disabled || (b = a[e2]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a, b) {
        if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
        return A2({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Sa2(c) };
      }
      function ib(a, b) {
        var c = Sa2(b.value), d = Sa2(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e2) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e2);
          });
        } : a;
      })(function(a, b) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b.firstChild; ) a.appendChild(b.firstChild);
        }
      });
      function ob(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b] = pb[a];
        });
      });
      function rb(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
      }
      function sb(a, b) {
        a = a.style;
        for (var c in b) if (b.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e2 = rb(c, b[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e2) : a[c] = e2;
        }
      }
      var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b) {
        if (b) {
          if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
        }
      }
      function vb(a, b) {
        if (-1 === a.indexOf("-")) return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b = a.stateNode;
          b && (b = Db(b), yb(a.stateNode, a.type, b));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b = Ab;
          Ab = zb = null;
          Bb(a);
          if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
        }
      }
      function Gb(a, b) {
        return a(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b, c) {
        if (Ib) return a(b, c);
        Ib = true;
        try {
          return Gb(a, b, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b];
        a: switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
        return c;
      }
      var Lb = false;
      if (ia2) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b, c, d, e2, f2, g, h2, k3) {
        var l2 = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l2);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b, c, d, e2, f2, g, h2, k3) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b, c, d, e2, f2, g, h2, k3) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l2 = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l2);
        }
      }
      function Vb(a) {
        var b = a, c = a;
        if (a.alternate) for (; b.return; ) b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b) return b.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b = a.alternate;
        if (!b) {
          b = Vb(a);
          if (null === b) throw Error(p(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e2 = c.return;
          if (null === e2) break;
          var f2 = e2.alternate;
          if (null === f2) {
            d = e2.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e2.child === f2.child) {
            for (f2 = e2.child; f2; ) {
              if (f2 === c) return Xb(e2), a;
              if (f2 === d) return Xb(e2), b;
              f2 = f2.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e2, d = f2;
          else {
            for (var g = false, h2 = e2.child; h2; ) {
              if (h2 === c) {
                g = true;
                c = e2;
                d = f2;
                break;
              }
              if (h2 === d) {
                g = true;
                d = e2;
                c = f2;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g) {
              for (h2 = f2.child; h2; ) {
                if (h2 === c) {
                  g = true;
                  c = f2;
                  d = e2;
                  break;
                }
                if (h2 === d) {
                  g = true;
                  d = f2;
                  c = e2;
                  break;
                }
                h2 = h2.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b = $b(a);
          if (null !== b) return b;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca2.unstable_scheduleCallback;
      var bc2 = ca2.unstable_cancelCallback;
      var cc2 = ca2.unstable_shouldYield;
      var dc2 = ca2.unstable_requestPaint;
      var B2 = ca2.unstable_now;
      var ec2 = ca2.unstable_getCurrentPriorityLevel;
      var fc2 = ca2.unstable_ImmediatePriority;
      var gc2 = ca2.unstable_UserBlockingPriority;
      var hc2 = ca2.unstable_NormalPriority;
      var ic2 = ca2.unstable_LowPriority;
      var jc2 = ca2.unstable_IdlePriority;
      var kc2 = null;
      var lc2 = null;
      function mc2(a) {
        if (lc2 && "function" === typeof lc2.onCommitFiberRoot) try {
          lc2.onCommitFiberRoot(kc2, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
      }
      var oc2 = Math.clz32 ? Math.clz32 : nc2;
      var pc2 = Math.log;
      var qc = Math.LN2;
      function nc2(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc2(a) / qc | 0) | 0;
      }
      var rc2 = 64;
      var sc2 = 4194304;
      function tc2(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc2(a, b) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h2 = g & ~e2;
          0 !== h2 ? d = tc2(h2) : (f2 &= g, 0 !== f2 && (d = tc2(f2)));
        } else g = c & ~e2, 0 !== g ? d = tc2(g) : 0 !== f2 && (d = tc2(f2));
        if (0 === d) return 0;
        if (0 !== b && b !== d && 0 === (b & e2) && (e2 = d & -d, f2 = b & -b, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc2(b), e2 = 1 << c, d |= a[c], b &= ~e2;
        return d;
      }
      function vc2(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc2(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
          var g = 31 - oc2(f2), h2 = 1 << g, k3 = e2[g];
          if (-1 === k3) {
            if (0 === (h2 & c) || 0 !== (h2 & d)) e2[g] = vc2(h2, b);
          } else k3 <= b && (a.expiredLanes |= h2);
          f2 &= ~h2;
        }
      }
      function xc2(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc2() {
        var a = rc2;
        rc2 <<= 1;
        0 === (rc2 & 4194240) && (rc2 = 64);
        return a;
      }
      function zc(a) {
        for (var b = [], c = 0; 31 > c; c++) b.push(a);
        return b;
      }
      function Ac2(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - oc2(b);
        a[b] = c;
      }
      function Bc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e2 = 31 - oc2(c), f2 = 1 << e2;
          b[e2] = 0;
          d[e2] = -1;
          a[e2] = -1;
          c &= ~f2;
        }
      }
      function Cc2(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc2(c), e2 = 1 << d;
          e2 & b | a[d] & b && (a[d] |= b);
          c &= ~e2;
        }
      }
      var C = 0;
      function Dc2(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec2;
      var Fc2;
      var Gc;
      var Hc2;
      var Ic2;
      var Jc2 = false;
      var Kc = [];
      var Lc2 = null;
      var Mc2 = null;
      var Nc2 = null;
      var Oc2 = /* @__PURE__ */ new Map();
      var Pc2 = /* @__PURE__ */ new Map();
      var Qc2 = [];
      var Rc2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc2(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc2 = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc2 = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc2 = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc2.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc2.delete(b.pointerId);
        }
      }
      function Tc(a, b, c, d, e2, f2) {
        if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, null !== b && (b = Cb(b), null !== b && Fc2(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        null !== e2 && -1 === b.indexOf(e2) && b.push(e2);
        return a;
      }
      function Uc2(a, b, c, d, e2) {
        switch (b) {
          case "focusin":
            return Lc2 = Tc(Lc2, a, b, c, d, e2), true;
          case "dragenter":
            return Mc2 = Tc(Mc2, a, b, c, d, e2), true;
          case "mouseover":
            return Nc2 = Tc(Nc2, a, b, c, d, e2), true;
          case "pointerover":
            var f2 = e2.pointerId;
            Oc2.set(f2, Tc(Oc2.get(f2) || null, a, b, c, d, e2));
            return true;
          case "gotpointercapture":
            return f2 = e2.pointerId, Pc2.set(f2, Tc(Pc2.get(f2) || null, a, b, c, d, e2)), true;
        }
        return false;
      }
      function Vc2(a) {
        var b = Wc2(a.target);
        if (null !== b) {
          var c = Vb(b);
          if (null !== c) {
            if (b = c.tag, 13 === b) {
              if (b = Wb(c), null !== b) {
                a.blockedOn = b;
                Ic2(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc2(a) {
        if (null !== a.blockedOn) return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = Yc2(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b = Cb(c), null !== b && Fc2(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Zc(a, b, c) {
        Xc2(a) && c.delete(b);
      }
      function $c() {
        Jc2 = false;
        null !== Lc2 && Xc2(Lc2) && (Lc2 = null);
        null !== Mc2 && Xc2(Mc2) && (Mc2 = null);
        null !== Nc2 && Xc2(Nc2) && (Nc2 = null);
        Oc2.forEach(Zc);
        Pc2.forEach(Zc);
      }
      function ad2(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Jc2 || (Jc2 = true, ca2.unstable_scheduleCallback(ca2.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b(b2) {
          return ad2(b2, a);
        }
        if (0 < Kc.length) {
          ad2(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc2 && ad2(Lc2, a);
        null !== Mc2 && ad2(Mc2, a);
        null !== Nc2 && ad2(Nc2, a);
        Oc2.forEach(b);
        Pc2.forEach(b);
        for (c = 0; c < Qc2.length; c++) d = Qc2[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc2.length && (c = Qc2[0], null === c.blockedOn); ) Vc2(c), null === c.blockedOn && Qc2.shift();
      }
      var cd2 = ua2.ReactCurrentBatchConfig;
      var dd = true;
      function ed2(a, b, c, d) {
        var e2 = C, f2 = cd2.transition;
        cd2.transition = null;
        try {
          C = 1, fd(a, b, c, d);
        } finally {
          C = e2, cd2.transition = f2;
        }
      }
      function gd2(a, b, c, d) {
        var e2 = C, f2 = cd2.transition;
        cd2.transition = null;
        try {
          C = 4, fd(a, b, c, d);
        } finally {
          C = e2, cd2.transition = f2;
        }
      }
      function fd(a, b, c, d) {
        if (dd) {
          var e2 = Yc2(a, b, c, d);
          if (null === e2) hd2(a, b, d, id2, c), Sc2(a, d);
          else if (Uc2(e2, a, b, c, d)) d.stopPropagation();
          else if (Sc2(a, d), b & 4 && -1 < Rc2.indexOf(a)) {
            for (; null !== e2; ) {
              var f2 = Cb(e2);
              null !== f2 && Ec2(f2);
              f2 = Yc2(a, b, c, d);
              null === f2 && hd2(a, b, d, id2, c);
              if (f2 === e2) break;
              e2 = f2;
            }
            null !== e2 && d.stopPropagation();
          } else hd2(a, b, d, null, c);
        }
      }
      var id2 = null;
      function Yc2(a, b, c, d) {
        id2 = null;
        a = xb(d);
        a = Wc2(a);
        if (null !== a) if (b = Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
          a = Wb(b);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else b !== a && (a = null);
        id2 = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec2()) {
              case fc2:
                return 1;
              case gc2:
                return 4;
              case hc2:
              case ic2:
                return 16;
              case jc2:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld2 = null;
      var md2 = null;
      function nd() {
        if (md2) return md2;
        var a, b = ld2, c = b.length, d, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
        for (a = 0; a < c && b[a] === e2[a]; a++) ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e2[f2 - d]; d++) ;
        return md2 = e2.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd2() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b(b2, d, e2, f2, g) {
          this._reactName = b2;
          this._targetInst = e2;
          this.type = d;
          this.nativeEvent = f2;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
          this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd2 : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A2(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd2);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd2);
        }, persist: function() {
        }, isPersistent: pd2 });
        return b;
      }
      var sd2 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td2 = rd(sd2);
      var ud2 = A2({}, sd2, { view: 0, detail: 0 });
      var vd = rd(ud2);
      var wd2;
      var xd2;
      var yd;
      var Ad = A2({}, ud2, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd2 = a.screenX - yd.screenX, xd2 = a.screenY - yd.screenY) : xd2 = wd2 = 0, yd = a);
        return wd2;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd2;
      } });
      var Bd2 = rd(Ad);
      var Cd = A2({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A2({}, ud2, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A2({}, sd2, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A2({}, sd2, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A2({}, sd2, { data: 0 });
      var Ld = rd(Kd);
      var Md2 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd2(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
      }
      function zd() {
        return Pd2;
      }
      var Qd2 = A2({}, ud2, { key: function(a) {
        if (a.key) {
          var b = Md2[a.key] || a.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd = rd(Qd2);
      var Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A2({}, ud2, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A2({}, sd2, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd2 = A2({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd2 = rd(Yd2);
      var $d = [9, 13, 27, 32];
      var ae3 = ia2 && "CompositionEvent" in window;
      var be3 = null;
      ia2 && "documentMode" in document && (be3 = document.documentMode);
      var ce3 = ia2 && "TextEvent" in window && !be3;
      var de3 = ia2 && (!ae3 || be3 && 8 < be3 && 11 >= be3);
      var ee2 = String.fromCharCode(32);
      var fe3 = false;
      function ge2(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he3(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie3 = false;
      function je3(a, b) {
        switch (a) {
          case "compositionend":
            return he3(b);
          case "keypress":
            if (32 !== b.which) return null;
            fe3 = true;
            return ee2;
          case "textInput":
            return a = b.data, a === ee2 && fe3 ? null : a;
          default:
            return null;
        }
      }
      function ke3(a, b) {
        if (ie3) return "compositionend" === a || !ae3 && ge2(a, b) ? (a = nd(), md2 = ld2 = kd = null, ie3 = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length) return b.char;
              if (b.which) return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de3 && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le3 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me3(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!le3[a.type] : "textarea" === b ? true : false;
      }
      function ne3(a, b, c, d) {
        Eb(d);
        b = oe2(b, "onChange");
        0 < b.length && (c = new td2("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe3 = null;
      var qe3 = null;
      function re3(a) {
        se3(a, 0);
      }
      function te3(a) {
        var b = ue3(a);
        if (Wa2(b)) return a;
      }
      function ve3(a, b) {
        if ("change" === a) return b;
      }
      var we3 = false;
      if (ia2) {
        if (ia2) {
          ye3 = "oninput" in document;
          if (!ye3) {
            ze3 = document.createElement("div");
            ze3.setAttribute("oninput", "return;");
            ye3 = "function" === typeof ze3.oninput;
          }
          xe3 = ye3;
        } else xe3 = false;
        we3 = xe3 && (!document.documentMode || 9 < document.documentMode);
      }
      var xe3;
      var ye3;
      var ze3;
      function Ae2() {
        pe3 && (pe3.detachEvent("onpropertychange", Be3), qe3 = pe3 = null);
      }
      function Be3(a) {
        if ("value" === a.propertyName && te3(qe3)) {
          var b = [];
          ne3(b, qe3, a, xb(a));
          Jb(re3, b);
        }
      }
      function Ce3(a, b, c) {
        "focusin" === a ? (Ae2(), pe3 = b, qe3 = c, pe3.attachEvent("onpropertychange", Be3)) : "focusout" === a && Ae2();
      }
      function De2(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te3(qe3);
      }
      function Ee2(a, b) {
        if ("click" === a) return te3(b);
      }
      function Fe2(a, b) {
        if ("input" === a || "change" === a) return te3(b);
      }
      function Ge3(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He3 = "function" === typeof Object.is ? Object.is : Ge3;
      function Ie3(a, b) {
        if (He3(a, b)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e2 = c[d];
          if (!ja.call(b, e2) || !He3(a[e2], b[e2])) return false;
        }
        return true;
      }
      function Je3(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke3(a, b) {
        var c = Je3(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je3(c);
        }
      }
      function Le3(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le3(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me3() {
        for (var a = window, b = Xa2(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b.contentWindow;
          else break;
          b = Xa2(a.document);
        }
        return b;
      }
      function Ne3(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Oe3(a) {
        var b = Me3(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Le3(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne3(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
              d = void 0 === d.end ? f2 : Math.min(d.end, e2);
              !a.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
              e2 = Ke3(c, f2);
              var g = Ke3(
                c,
                d
              );
              e2 && g && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe3 = ia2 && "documentMode" in document && 11 >= document.documentMode;
      var Qe3 = null;
      var Re3 = null;
      var Se3 = null;
      var Te3 = false;
      function Ue3(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te3 || null == Qe3 || Qe3 !== Xa2(d) || (d = Qe3, "selectionStart" in d && Ne3(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se3 && Ie3(Se3, d) || (Se3 = d, d = oe2(Re3, "onSelect"), 0 < d.length && (b = new td2("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe3)));
      }
      function Ve2(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var We3 = { animationend: Ve2("Animation", "AnimationEnd"), animationiteration: Ve2("Animation", "AnimationIteration"), animationstart: Ve2("Animation", "AnimationStart"), transitionend: Ve2("Transition", "TransitionEnd") };
      var Xe3 = {};
      var Ye3 = {};
      ia2 && (Ye3 = document.createElement("div").style, "AnimationEvent" in window || (delete We3.animationend.animation, delete We3.animationiteration.animation, delete We3.animationstart.animation), "TransitionEvent" in window || delete We3.transitionend.transition);
      function Ze3(a) {
        if (Xe3[a]) return Xe3[a];
        if (!We3[a]) return a;
        var b = We3[a], c;
        for (c in b) if (b.hasOwnProperty(c) && c in Ye3) return Xe3[a] = b[c];
        return a;
      }
      var $e3 = Ze3("animationend");
      var af = Ze3("animationiteration");
      var bf = Ze3("animationstart");
      var cf = Ze3("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b) {
        df.set(a, b);
        fa2(b, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e3, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha2("onMouseEnter", ["mouseout", "mouseover"]);
      ha2("onMouseLeave", ["mouseout", "mouseover"]);
      ha2("onPointerEnter", ["pointerout", "pointerover"]);
      ha2("onPointerLeave", ["pointerout", "pointerover"]);
      fa2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se3(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e2 = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b) for (var g = d.length - 1; 0 <= g; g--) {
              var h2 = d[g], k3 = h2.instance, l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k3 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h2, l2);
              f2 = k3;
            }
            else for (g = 0; g < d.length; g++) {
              h2 = d[g];
              k3 = h2.instance;
              l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k3 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h2, l2);
              f2 = k3;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D2(a, b) {
        var c = b[of];
        void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b, a, 2, false), c.add(d));
      }
      function qf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        pf(c, a, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da2.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a, b, c, d) {
        switch (jd(b)) {
          case 1:
            var e2 = ed2;
            break;
          case 4:
            e2 = gd2;
            break;
          default:
            e2 = fd;
        }
        c = e2.bind(null, b, c, a);
        e2 = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e2 = true);
        d ? void 0 !== e2 ? a.addEventListener(b, c, { capture: true, passive: e2 }) : a.addEventListener(b, c, true) : void 0 !== e2 ? a.addEventListener(b, c, { passive: e2 }) : a.addEventListener(b, c, false);
      }
      function hd2(a, b, c, d, e2) {
        var f2 = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h2 = d.stateNode.containerInfo;
            if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k3 = g.tag;
              if (3 === k3 || 4 === k3) {
                if (k3 = g.stateNode.containerInfo, k3 === e2 || 8 === k3.nodeType && k3.parentNode === e2) return;
              }
              g = g.return;
            }
            for (; null !== h2; ) {
              g = Wc2(h2);
              if (null === g) return;
              k3 = g.tag;
              if (5 === k3 || 6 === k3) {
                d = f2 = g;
                continue a;
              }
              h2 = h2.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f2, e3 = xb(c), g2 = [];
          a: {
            var h3 = df.get(a);
            if (void 0 !== h3) {
              var k4 = td2, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k4 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k4 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k4 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k4 = Fd;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k4 = Bd2;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k4 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k4 = Vd;
                  break;
                case $e3:
                case af:
                case bf:
                  k4 = Hd;
                  break;
                case cf:
                  k4 = Xd;
                  break;
                case "scroll":
                  k4 = vd;
                  break;
                case "wheel":
                  k4 = Zd2;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k4 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k4 = Td;
              }
              var t = 0 !== (b & 4), J2 = !t && "scroll" === a, x2 = t ? null !== h3 ? h3 + "Capture" : null : h3;
              t = [];
              for (var w2 = d2, u; null !== w2; ) {
                u = w2;
                var F2 = u.stateNode;
                5 === u.tag && null !== F2 && (u = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t.push(tf(w2, F2, u))));
                if (J2) break;
                w2 = w2.return;
              }
              0 < t.length && (h3 = new k4(h3, n, null, c, e3), g2.push({ event: h3, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h3 = "mouseover" === a || "pointerover" === a;
              k4 = "mouseout" === a || "pointerout" === a;
              if (h3 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc2(n) || n[uf])) break a;
              if (k4 || h3) {
                h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
                if (k4) {
                  if (n = c.relatedTarget || c.toElement, k4 = d2, n = n ? Wc2(n) : null, null !== n && (J2 = Vb(n), n !== J2 || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k4 = null, n = d2;
                if (k4 !== n) {
                  t = Bd2;
                  F2 = "onMouseLeave";
                  x2 = "onMouseEnter";
                  w2 = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                  J2 = null == k4 ? h3 : ue3(k4);
                  u = null == n ? h3 : ue3(n);
                  h3 = new t(F2, w2 + "leave", k4, c, e3);
                  h3.target = J2;
                  h3.relatedTarget = u;
                  F2 = null;
                  Wc2(e3) === d2 && (t = new t(x2, w2 + "enter", n, c, e3), t.target = u, t.relatedTarget = J2, F2 = t);
                  J2 = F2;
                  if (k4 && n) b: {
                    t = k4;
                    x2 = n;
                    w2 = 0;
                    for (u = t; u; u = vf(u)) w2++;
                    u = 0;
                    for (F2 = x2; F2; F2 = vf(F2)) u++;
                    for (; 0 < w2 - u; ) t = vf(t), w2--;
                    for (; 0 < u - w2; ) x2 = vf(x2), u--;
                    for (; w2--; ) {
                      if (t === x2 || null !== x2 && t === x2.alternate) break b;
                      t = vf(t);
                      x2 = vf(x2);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k4 && wf(g2, h3, k4, t, false);
                  null !== n && null !== J2 && wf(g2, J2, n, t, true);
                }
              }
            }
            a: {
              h3 = d2 ? ue3(d2) : window;
              k4 = h3.nodeName && h3.nodeName.toLowerCase();
              if ("select" === k4 || "input" === k4 && "file" === h3.type) var na2 = ve3;
              else if (me3(h3)) if (we3) na2 = Fe2;
              else {
                na2 = De2;
                var xa2 = Ce3;
              }
              else (k4 = h3.nodeName) && "input" === k4.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na2 = Ee2);
              if (na2 && (na2 = na2(a, d2))) {
                ne3(g2, na2, c, e3);
                break a;
              }
              xa2 && xa2(a, h3, d2);
              "focusout" === a && (xa2 = h3._wrapperState) && xa2.controlled && "number" === h3.type && cb(h3, "number", h3.value);
            }
            xa2 = d2 ? ue3(d2) : window;
            switch (a) {
              case "focusin":
                if (me3(xa2) || "true" === xa2.contentEditable) Qe3 = xa2, Re3 = d2, Se3 = null;
                break;
              case "focusout":
                Se3 = Re3 = Qe3 = null;
                break;
              case "mousedown":
                Te3 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te3 = false;
                Ue3(g2, c, e3);
                break;
              case "selectionchange":
                if (Pe3) break;
              case "keydown":
              case "keyup":
                Ue3(g2, c, e3);
            }
            var $a2;
            if (ae3) b: {
              switch (a) {
                case "compositionstart":
                  var ba2 = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba2 = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba2 = "onCompositionUpdate";
                  break b;
              }
              ba2 = void 0;
            }
            else ie3 ? ge2(a, c) && (ba2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba2 = "onCompositionStart");
            ba2 && (de3 && "ko" !== c.locale && (ie3 || "onCompositionStart" !== ba2 ? "onCompositionEnd" === ba2 && ie3 && ($a2 = nd()) : (kd = e3, ld2 = "value" in kd ? kd.value : kd.textContent, ie3 = true)), xa2 = oe2(d2, ba2), 0 < xa2.length && (ba2 = new Ld(ba2, a, null, c, e3), g2.push({ event: ba2, listeners: xa2 }), $a2 ? ba2.data = $a2 : ($a2 = he3(c), null !== $a2 && (ba2.data = $a2))));
            if ($a2 = ce3 ? je3(a, c) : ke3(a, c)) d2 = oe2(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c, e3), g2.push({ event: e3, listeners: d2 }), e3.data = $a2);
          }
          se3(g2, b);
        });
      }
      function tf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe2(a, b) {
        for (var c = b + "Capture", d = []; null !== a; ) {
          var e2 = a, f2 = e2.stateNode;
          5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e2)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e2)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b, c, d, e2) {
        for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
          var h2 = c, k3 = h2.alternate, l2 = h2.stateNode;
          if (null !== k3 && k3 === d) break;
          5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k3 = Kb(c, f2), null != k3 && g.unshift(tf(c, k3, h2))) : e2 || (k3 = Kb(c, f2), null != k3 && g.push(tf(c, k3, h2))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b, c) {
        b = zf(b);
        if (zf(a) !== b && c) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b) {
        return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b) {
        var c = b, d = 0;
        do {
          var e2 = c.nextSibling;
          a.removeChild(c);
          if (e2 && 8 === e2.nodeType) if (c = e2.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e2);
              bd(b);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e2;
        } while (c);
        bd(b);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b) break;
          if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b) return a;
              b--;
            } else "/$" === c && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc2(a) {
        var b = a[Of];
        if (b) return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue3(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E3(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G2(a, b) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b;
      }
      var Vf = {};
      var H2 = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e2 = {}, f2;
        for (f2 in c) e2[f2] = b[f2];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e2);
        return e2;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E3(Wf);
        E3(H2);
      }
      function ag(a, b, c) {
        if (H2.current !== Vf) throw Error(p(168));
        G2(H2, b);
        G2(Wf, c);
      }
      function bg(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e2 in d) if (!(e2 in b)) throw Error(p(108, Ra2(a) || "Unknown", e2));
        return A2({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H2.current;
        G2(H2, a);
        G2(Wf, Wf.current);
        return true;
      }
      function dg(a, b, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E3(Wf), E3(H2), G2(H2, a)) : E3(Wf);
        G2(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b = C;
          try {
            var c = eg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e2) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc2, jg), e2;
          } finally {
            C = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b;
      }
      function ug(a, b, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e2 = 32 - oc2(d) - 1;
        d &= ~(1 << e2);
        c += 1;
        var f2 = 32 - oc2(b) + e2;
        if (30 < f2) {
          var g = e2 - e2 % 5;
          f2 = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e2 -= g;
          rg = 1 << 32 - oc2(b) + e2 | c << e2 | d;
          sg = f2 + a;
        } else rg = 1 << f2 | c << e2 | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I3 = false;
      var zg = null;
      function Ag(a, b) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function Cg(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I3) {
          var b = yg;
          if (b) {
            var c = b;
            if (!Cg(a, b)) {
              if (Dg(a)) throw Error(p(418));
              b = Lf(c.nextSibling);
              var d = xg;
              b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I3 = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I3 = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I3) return Fg(a), I3 = true, false;
        var b;
        (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I3 = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua2.ReactCurrentBatchConfig;
      function Lg(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e2 = d, f2 = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
            b = function(a2) {
              var b2 = e2.refs;
              null === a2 ? delete b2[f2] : b2[f2] = a2;
            };
            b._stringRef = f2;
            return b;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b = a._init;
        return b(a._payload);
      }
      function Og(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e2(a2, b2) {
          a2 = Pg(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f2(b2, c2, d2) {
          b2.index = d2;
          if (!a) return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g(b2) {
          a && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h2(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e2(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k3(a2, b2, c2, d2) {
          var f3 = c2.type;
          if (f3 === ya2) return m(a2, b2, c2.props.children, d2, c2.key);
          if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha2 && Ng(f3) === b2.type)) return d2 = e2(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l2(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e2(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m(a2, b2, c2, d2, f3) {
          if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
          b2 = e2(b2, c2);
          b2.return = a2;
          return b2;
        }
        function q2(a2, b2, c2) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va2:
                return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
              case wa2:
                return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
              case Ha2:
                var d2 = b2._init;
                return q2(a2, d2(b2._payload), c2);
            }
            if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
            Mg(a2, b2);
          }
          return null;
        }
        function r(a2, b2, c2, d2) {
          var e3 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e3 ? null : h2(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va2:
                return c2.key === e3 ? k3(a2, b2, c2, d2) : null;
              case wa2:
                return c2.key === e3 ? l2(a2, b2, c2, d2) : null;
              case Ha2:
                return e3 = c2._init, r(
                  a2,
                  b2,
                  e3(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka(c2)) return null !== e3 ? null : m(a2, b2, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y(a2, b2, c2, d2, e3) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h2(b2, a2, "" + d2, e3);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k3(b2, a2, d2, e3);
              case wa2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e3);
              case Ha2:
                var f3 = d2._init;
                return y(a2, b2, c2, f3(d2._payload), e3);
            }
            if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e3, null);
            Mg(b2, d2);
          }
          return null;
        }
        function n(e3, g2, h3, k4) {
          for (var l3 = null, m2 = null, u = g2, w2 = g2 = 0, x2 = null; null !== u && w2 < h3.length; w2++) {
            u.index > w2 ? (x2 = u, u = null) : x2 = u.sibling;
            var n2 = r(e3, u, h3[w2], k4);
            if (null === n2) {
              null === u && (u = x2);
              break;
            }
            a && u && null === n2.alternate && b(e3, u);
            g2 = f2(n2, g2, w2);
            null === m2 ? l3 = n2 : m2.sibling = n2;
            m2 = n2;
            u = x2;
          }
          if (w2 === h3.length) return c(e3, u), I3 && tg(e3, w2), l3;
          if (null === u) {
            for (; w2 < h3.length; w2++) u = q2(e3, h3[w2], k4), null !== u && (g2 = f2(u, g2, w2), null === m2 ? l3 = u : m2.sibling = u, m2 = u);
            I3 && tg(e3, w2);
            return l3;
          }
          for (u = d(e3, u); w2 < h3.length; w2++) x2 = y(u, e3, w2, h3[w2], k4), null !== x2 && (a && null !== x2.alternate && u.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m2 ? l3 = x2 : m2.sibling = x2, m2 = x2);
          a && u.forEach(function(a2) {
            return b(e3, a2);
          });
          I3 && tg(e3, w2);
          return l3;
        }
        function t(e3, g2, h3, k4) {
          var l3 = Ka(h3);
          if ("function" !== typeof l3) throw Error(p(150));
          h3 = l3.call(h3);
          if (null == h3) throw Error(p(151));
          for (var u = l3 = null, m2 = g2, w2 = g2 = 0, x2 = null, n2 = h3.next(); null !== m2 && !n2.done; w2++, n2 = h3.next()) {
            m2.index > w2 ? (x2 = m2, m2 = null) : x2 = m2.sibling;
            var t2 = r(e3, m2, n2.value, k4);
            if (null === t2) {
              null === m2 && (m2 = x2);
              break;
            }
            a && m2 && null === t2.alternate && b(e3, m2);
            g2 = f2(t2, g2, w2);
            null === u ? l3 = t2 : u.sibling = t2;
            u = t2;
            m2 = x2;
          }
          if (n2.done) return c(
            e3,
            m2
          ), I3 && tg(e3, w2), l3;
          if (null === m2) {
            for (; !n2.done; w2++, n2 = h3.next()) n2 = q2(e3, n2.value, k4), null !== n2 && (g2 = f2(n2, g2, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
            I3 && tg(e3, w2);
            return l3;
          }
          for (m2 = d(e3, m2); !n2.done; w2++, n2 = h3.next()) n2 = y(m2, e3, w2, n2.value, k4), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w2 : n2.key), g2 = f2(n2, g2, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
          a && m2.forEach(function(a2) {
            return b(e3, a2);
          });
          I3 && tg(e3, w2);
          return l3;
        }
        function J2(a2, d2, f3, h3) {
          "object" === typeof f3 && null !== f3 && f3.type === ya2 && null === f3.key && (f3 = f3.props.children);
          if ("object" === typeof f3 && null !== f3) {
            switch (f3.$$typeof) {
              case va2:
                a: {
                  for (var k4 = f3.key, l3 = d2; null !== l3; ) {
                    if (l3.key === k4) {
                      k4 = f3.type;
                      if (k4 === ya2) {
                        if (7 === l3.tag) {
                          c(a2, l3.sibling);
                          d2 = e2(l3, f3.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l3.elementType === k4 || "object" === typeof k4 && null !== k4 && k4.$$typeof === Ha2 && Ng(k4) === l3.type) {
                        c(a2, l3.sibling);
                        d2 = e2(l3, f3.props);
                        d2.ref = Lg(a2, l3, f3);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l3);
                      break;
                    } else b(a2, l3);
                    l3 = l3.sibling;
                  }
                  f3.type === ya2 ? (d2 = Tg(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Lg(a2, d2, f3), h3.return = a2, a2 = h3);
                }
                return g(a2);
              case wa2:
                a: {
                  for (l3 = f3.key; null !== d2; ) {
                    if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                      c(a2, d2.sibling);
                      d2 = e2(d2, f3.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f3, a2.mode, h3);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha2:
                return l3 = f3._init, J2(a2, d2, l3(f3._payload), h3);
            }
            if (eb(f3)) return n(a2, d2, f3, h3);
            if (Ka(f3)) return t(a2, d2, f3, h3);
            Mg(a2, f3);
          }
          return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e2(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h3), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J2;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b = Wg.current;
        E3(Wg);
        a._currentValue = b;
      }
      function bh(a, b, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b, c, d) {
        var e2 = b.interleaved;
        null === e2 ? (c.next = c, gh(b)) : (c.next = e2.next, e2.next = c);
        b.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K2 & 2)) {
          var e2 = d.pending;
          null === e2 ? b.next = b : (b.next = e2.next, e2.next = b);
          d.pending = b;
          return ih(a, c);
        }
        e2 = d.interleaved;
        null === e2 ? (b.next = b, gh(d)) : (b.next = e2.next, e2.next = b);
        d.interleaved = b;
        return ih(a, c);
      }
      function oh(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc2(a, c);
        }
      }
      function ph(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e2 = null, f2 = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f2 ? e2 = f2 = g : f2 = f2.next = g;
              c = c.next;
            } while (null !== c);
            null === f2 ? e2 = f2 = b : f2 = f2.next = b;
          } else e2 = f2 = b;
          c = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function qh(a, b, c, d) {
        var e2 = a.updateQueue;
        jh = false;
        var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h2 = e2.shared.pending;
        if (null !== h2) {
          e2.shared.pending = null;
          var k3 = h2, l2 = k3.next;
          k3.next = null;
          null === g ? f2 = l2 : g.next = l2;
          g = k3;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h2 = m.lastBaseUpdate, h2 !== g && (null === h2 ? m.firstBaseUpdate = l2 : h2.next = l2, m.lastBaseUpdate = k3));
        }
        if (null !== f2) {
          var q2 = e2.baseState;
          g = 0;
          m = l2 = k3 = null;
          h2 = f2;
          do {
            var r = h2.lane, y = h2.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y,
                lane: 0,
                tag: h2.tag,
                payload: h2.payload,
                callback: h2.callback,
                next: null
              });
              a: {
                var n = a, t = h2;
                r = b;
                y = c;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q2 = n.call(y, q2, r);
                      break a;
                    }
                    q2 = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y, q2, r) : n;
                    if (null === r || void 0 === r) break a;
                    q2 = A2({}, q2, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r = e2.effects, null === r ? e2.effects = [h2] : r.push(h2));
            } else y = { eventTime: y, lane: r, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m ? (l2 = m = y, k3 = q2) : m = m.next = y, g |= r;
            h2 = h2.next;
            if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
            else r = h2, h2 = r.next, r.next = null, e2.lastBaseUpdate = r, e2.shared.pending = null;
          } while (1);
          null === m && (k3 = q2);
          e2.baseState = k3;
          e2.firstBaseUpdate = l2;
          e2.lastBaseUpdate = m;
          b = e2.shared.interleaved;
          if (null !== b) {
            e2 = b;
            do
              g |= e2.lane, e2 = e2.next;
            while (e2 !== b);
          } else null === f2 && (e2.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q2;
        }
      }
      function sh(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a) for (b = 0; b < a.length; b++) {
          var d = a[b], e2 = d.callback;
          if (null !== e2) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e2) throw Error(p(191, e2));
            e2.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b) {
        G2(wh, b);
        G2(vh, a);
        G2(uh, th);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
        }
        E3(uh);
        G2(uh, b);
      }
      function zh() {
        E3(uh);
        E3(vh);
        E3(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b = xh(uh.current);
        var c = lb(b, a.type);
        b !== c && (G2(vh, a), G2(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E3(uh), E3(vh));
      }
      var L2 = Uf(0);
      function Ch(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua2.ReactCurrentDispatcher;
      var Gh = ua2.ReactCurrentBatchConfig;
      var Hh = 0;
      var M2 = null;
      var N3 = null;
      var O2 = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P2() {
        throw Error(p(321));
      }
      function Mh(a, b) {
        if (null === b) return false;
        for (var c = 0; c < b.length && c < a.length; c++) if (!He3(a[c], b[c])) return false;
        return true;
      }
      function Nh(a, b, c, d, e2, f2) {
        Hh = f2;
        M2 = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e2);
        if (Jh) {
          f2 = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f2) throw Error(p(301));
            f2 += 1;
            O2 = N3 = null;
            b.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e2);
          } while (Jh);
        }
        Fh.current = Rh;
        b = null !== N3 && null !== N3.next;
        Hh = 0;
        O2 = N3 = M2 = null;
        Ih = false;
        if (b) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O2 ? M2.memoizedState = O2 = a : O2 = O2.next = a;
        return O2;
      }
      function Uh() {
        if (null === N3) {
          var a = M2.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N3.next;
        var b = null === O2 ? M2.memoizedState : O2.next;
        if (null !== b) O2 = b, N3 = a;
        else {
          if (null === a) throw Error(p(310));
          N3 = a;
          a = { memoizedState: N3.memoizedState, baseState: N3.baseState, baseQueue: N3.baseQueue, queue: N3.queue, next: null };
          null === O2 ? M2.memoizedState = O2 = a : O2 = O2.next = a;
        }
        return O2;
      }
      function Vh(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function Wh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N3, e2 = d.baseQueue, f2 = c.pending;
        if (null !== f2) {
          if (null !== e2) {
            var g = e2.next;
            e2.next = f2.next;
            f2.next = g;
          }
          d.baseQueue = e2 = f2;
          c.pending = null;
        }
        if (null !== e2) {
          f2 = e2.next;
          d = d.baseState;
          var h2 = g = null, k3 = null, l2 = f2;
          do {
            var m = l2.lane;
            if ((Hh & m) === m) null !== k3 && (k3 = k3.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
            else {
              var q2 = {
                lane: m,
                action: l2.action,
                hasEagerState: l2.hasEagerState,
                eagerState: l2.eagerState,
                next: null
              };
              null === k3 ? (h2 = k3 = q2, g = d) : k3 = k3.next = q2;
              M2.lanes |= m;
              rh |= m;
            }
            l2 = l2.next;
          } while (null !== l2 && l2 !== f2);
          null === k3 ? g = d : k3.next = h2;
          He3(d, b.memoizedState) || (dh = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k3;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e2 = a;
          do
            f2 = e2.lane, M2.lanes |= f2, rh |= f2, e2 = e2.next;
          while (e2 !== a);
        } else null === e2 && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e2 = c.pending, f2 = b.memoizedState;
        if (null !== e2) {
          c.pending = null;
          var g = e2 = e2.next;
          do
            f2 = a(f2, g.action), g = g.next;
          while (g !== e2);
          He3(f2, b.memoizedState) || (dh = true);
          b.memoizedState = f2;
          null === b.baseQueue && (b.baseState = f2);
          c.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function Yh() {
      }
      function Zh(a, b) {
        var c = M2, d = Uh(), e2 = b(), f2 = !He3(d.memoizedState, e2);
        f2 && (d.memoizedState = e2, dh = true);
        d = d.queue;
        $h(ai2.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f2 || null !== O2 && O2.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi(9, ci.bind(null, c, d, e2, b), void 0, null);
          if (null === Q2) throw Error(p(349));
          0 !== (Hh & 30) || di(c, b, e2);
        }
        return e2;
      }
      function di(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = M2.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M2.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function ci(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        ei2(b) && fi(a);
      }
      function ai2(a, b, c) {
        return c(function() {
          ei2(b) && fi(a);
        });
      }
      function ei2(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !He3(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi(a) {
        var b = ih(a, 1);
        null !== b && gi2(b, a, 1, -1);
      }
      function hi(a) {
        var b = Th();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = ii2.bind(null, M2, a);
        return [b.memoizedState, a];
      }
      function bi(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = M2.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M2.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function ji2() {
        return Uh().memoizedState;
      }
      function ki(a, b, c, d) {
        var e2 = Th();
        M2.flags |= a;
        e2.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function li(a, b, c, d) {
        var e2 = Uh();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== N3) {
          var g = N3.memoizedState;
          f2 = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e2.memoizedState = bi(b, c, f2, d);
            return;
          }
        }
        M2.flags |= a;
        e2.memoizedState = bi(1 | b, c, f2, d);
      }
      function mi(a, b) {
        return ki(8390656, 8, a, b);
      }
      function $h(a, b) {
        return li(2048, 8, a, b);
      }
      function ni2(a, b) {
        return li(4, 2, a, b);
      }
      function oi2(a, b) {
        return li(4, 4, a, b);
      }
      function pi2(a, b) {
        if ("function" === typeof b) return a = a(), b(a), function() {
          b(null);
        };
        if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
          b.current = null;
        };
      }
      function qi2(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li(4, 4, pi2.bind(null, b, a), c);
      }
      function ri2() {
      }
      function si2(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function ti2(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function ui2(a, b, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He3(c, b) || (c = yc2(), M2.lanes |= c, rh |= c, a.baseState = true);
        return b;
      }
      function vi(a, b) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b();
        } finally {
          C = c, Gh.transition = d;
        }
      }
      function wi2() {
        return Uh().memoizedState;
      }
      function xi(a, b, c) {
        var d = yi(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi2(a)) Ai2(b, c);
        else if (c = hh(a, b, c, d), null !== c) {
          var e2 = R3();
          gi2(c, a, d, e2);
          Bi2(c, b, d);
        }
      }
      function ii2(a, b, c) {
        var d = yi(a), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi2(a)) Ai2(b, e2);
        else {
          var f2 = a.alternate;
          if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
            var g = b.lastRenderedState, h2 = f2(g, c);
            e2.hasEagerState = true;
            e2.eagerState = h2;
            if (He3(h2, g)) {
              var k3 = b.interleaved;
              null === k3 ? (e2.next = e2, gh(b)) : (e2.next = k3.next, k3.next = e2);
              b.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
          c = hh(a, b, e2, d);
          null !== c && (e2 = R3(), gi2(c, a, d, e2), Bi2(c, b, d));
        }
      }
      function zi2(a) {
        var b = a.alternate;
        return a === M2 || null !== b && b === M2;
      }
      function Ai2(a, b) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function Bi2(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc2(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P2, useContext: P2, useEffect: P2, useImperativeHandle: P2, useInsertionEffect: P2, useLayoutEffect: P2, useMemo: P2, useReducer: P2, useRef: P2, useState: P2, useDebugValue: P2, useDeferredValue: P2, useTransition: P2, useMutableSource: P2, useSyncExternalStore: P2, useId: P2, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b) {
        Th().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(
          4194308,
          4,
          pi2.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function(a, b) {
        return ki(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return ki(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = Th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M2, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = Th();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: hi, useDebugValue: ri2, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi(false), b = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = M2, e2 = Th();
        if (I3) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b();
          if (null === Q2) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b, c);
        }
        e2.memoizedState = c;
        var f2 = { value: c, getSnapshot: b };
        e2.queue = f2;
        mi(ai2.bind(
          null,
          d,
          f2,
          a
        ), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f2, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b = Q2.identifierPrefix;
        if (I3) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc2(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Kh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si2,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi2,
        useInsertionEffect: ni2,
        useLayoutEffect: oi2,
        useMemo: ti2,
        useReducer: Wh,
        useRef: ji2,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri2,
        useDeferredValue: function(a) {
          var b = Uh();
          return ui2(b, N3.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b = Uh().memoizedState;
          return [a, b];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi2,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si2, useContext: eh, useEffect: $h, useImperativeHandle: qi2, useInsertionEffect: ni2, useLayoutEffect: oi2, useMemo: ti2, useReducer: Xh, useRef: ji2, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri2, useDeferredValue: function(a) {
        var b = Uh();
        return null === N3 ? b.memoizedState = a : ui2(b, N3.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi2, unstable_isNewReconciler: false };
      function Ci2(a, b) {
        if (a && a.defaultProps) {
          b = A2({}, b);
          a = a.defaultProps;
          for (var c in a) void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      function Di2(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : A2({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei2 = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = R3(), e2 = yi(a), f2 = mh(d, e2);
        f2.payload = b;
        void 0 !== c && null !== c && (f2.callback = c);
        b = nh(a, f2, e2);
        null !== b && (gi2(b, a, e2, d), oh(b, a, e2));
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = R3(), e2 = yi(a), f2 = mh(d, e2);
        f2.tag = 1;
        f2.payload = b;
        void 0 !== c && null !== c && (f2.callback = c);
        b = nh(a, f2, e2);
        null !== b && (gi2(b, a, e2, d), oh(b, a, e2));
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = R3(), d = yi(a), e2 = mh(c, d);
        e2.tag = 2;
        void 0 !== b && null !== b && (e2.callback = b);
        b = nh(a, e2, d);
        null !== b && (gi2(b, a, d, c), oh(b, a, d));
      } };
      function Fi2(a, b, c, d, e2, f2, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie3(c, d) || !Ie3(e2, f2) : true;
      }
      function Gi2(a, b, c) {
        var d = false, e2 = Vf;
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b) ? Xf : H2.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e2) : Vf);
        b = new b(c, f2);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Ei2;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
        return b;
      }
      function Hi2(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Ei2.enqueueReplaceState(b, b.state, null);
      }
      function Ii2(a, b, c, d) {
        var e2 = a.stateNode;
        e2.props = c;
        e2.state = a.memoizedState;
        e2.refs = {};
        kh(a);
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b) ? Xf : H2.current, e2.context = Yf(a, f2));
        e2.state = a.memoizedState;
        f2 = b.getDerivedStateFromProps;
        "function" === typeof f2 && (Di2(a, b, f2, c), e2.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b !== e2.state && Ei2.enqueueReplaceState(e2, e2.state, null), qh(a, c, e2, d), e2.state = a.memoizedState);
        "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
      }
      function Ji2(a, b) {
        try {
          var c = "", d = b;
          do
            c += Pa2(d), d = d.return;
          while (d);
          var e2 = c;
        } catch (f2) {
          e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a, source: b, stack: e2, digest: null };
      }
      function Ki2(a, b, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
      }
      function Li2(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi2 = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Oi2 || (Oi2 = true, Pi2 = d);
          Li2(a, b);
        };
        return c;
      }
      function Qi2(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e2 = b.value;
          c.payload = function() {
            return d(e2);
          };
          c.callback = function() {
            Li2(a, b);
          };
        }
        var f2 = a.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
          Li2(a, b);
          "function" !== typeof d && (null === Ri2 ? Ri2 = /* @__PURE__ */ new Set([this]) : Ri2.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si2(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi2();
          var e2 = /* @__PURE__ */ new Set();
          d.set(b, e2);
        } else e2 = d.get(b), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b, e2));
        e2.has(c) || (e2.add(c), a = Ti2.bind(null, a, b, c), b.then(a, a));
      }
      function Ui2(a) {
        do {
          var b;
          if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi2(a, b, c, d, e2) {
        if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e2;
        return a;
      }
      var Wi2 = ua2.ReactCurrentOwner;
      var dh = false;
      function Xi2(a, b, c, d) {
        b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
      }
      function Yi2(a, b, c, d, e2) {
        c = c.render;
        var f2 = b.ref;
        ch(b, e2);
        d = Nh(a, b, c, d, f2, e2);
        c = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, Zi2(a, b, e2);
        I3 && c && vg(b);
        b.flags |= 1;
        Xi2(a, b, d, e2);
        return b.child;
      }
      function $i2(a, b, c, d, e2) {
        if (null === a) {
          var f2 = c.type;
          if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bj(a, b, f2, d, e2);
          a = Rg(c.type, null, d, b, b.mode, e2);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f2 = a.child;
        if (0 === (a.lanes & e2)) {
          var g = f2.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie3;
          if (c(g, d) && a.ref === b.ref) return Zi2(a, b, e2);
        }
        b.flags |= 1;
        a = Pg(f2, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function bj(a, b, c, d, e2) {
        if (null !== a) {
          var f2 = a.memoizedProps;
          if (Ie3(f2, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh = true);
          else return b.lanes = a.lanes, Zi2(a, b, e2);
        }
        return cj(a, b, c, d, e2);
      }
      function dj(a, b, c) {
        var d = b.pendingProps, e2 = d.children, f2 = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G2(ej, fj), fj |= a, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f2 ? f2.baseLanes : c;
          G2(ej, fj);
          fj |= d;
        }
        else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G2(ej, fj), fj |= d;
        Xi2(a, b, e2, c);
        return b.child;
      }
      function gj(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
      }
      function cj(a, b, c, d, e2) {
        var f2 = Zf(c) ? Xf : H2.current;
        f2 = Yf(b, f2);
        ch(b, e2);
        c = Nh(a, b, c, d, f2, e2);
        d = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, Zi2(a, b, e2);
        I3 && d && vg(b);
        b.flags |= 1;
        Xi2(a, b, c, e2);
        return b.child;
      }
      function hj(a, b, c, d, e2) {
        if (Zf(c)) {
          var f2 = true;
          cg(b);
        } else f2 = false;
        ch(b, e2);
        if (null === b.stateNode) ij(a, b), Gi2(b, c, d), Ii2(b, c, d, e2), d = true;
        else if (null === a) {
          var g = b.stateNode, h2 = b.memoizedProps;
          g.props = h2;
          var k3 = g.context, l2 = c.contextType;
          "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H2.current, l2 = Yf(b, l2));
          var m = c.getDerivedStateFromProps, q2 = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== d || k3 !== l2) && Hi2(b, g, d, l2);
          jh = false;
          var r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e2);
          k3 = b.memoizedState;
          h2 !== d || r !== k3 || Wf.current || jh ? ("function" === typeof m && (Di2(b, c, m, d), k3 = b.memoizedState), (h2 = jh || Fi2(b, c, h2, d, r, k3, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k3), g.props = d, g.state = k3, g.context = l2, d = h2) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          lh(a, b);
          h2 = b.memoizedProps;
          l2 = b.type === b.elementType ? h2 : Ci2(b.type, h2);
          g.props = l2;
          q2 = b.pendingProps;
          r = g.context;
          k3 = c.contextType;
          "object" === typeof k3 && null !== k3 ? k3 = eh(k3) : (k3 = Zf(c) ? Xf : H2.current, k3 = Yf(b, k3));
          var y = c.getDerivedStateFromProps;
          (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== q2 || r !== k3) && Hi2(b, g, d, k3);
          jh = false;
          r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e2);
          var n = b.memoizedState;
          h2 !== q2 || r !== n || Wf.current || jh ? ("function" === typeof y && (Di2(b, c, y, d), n = b.memoizedState), (l2 = jh || Fi2(b, c, l2, d, r, n, k3) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k3), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k3)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k3, d = l2) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return jj(a, b, c, d, f2, e2);
      }
      function jj(a, b, c, d, e2, f2) {
        gj(a, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g) return e2 && dg(b, c, false), Zi2(a, b, f2);
        d = b.stateNode;
        Wi2.current = b;
        var h2 = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h2, f2)) : Xi2(a, b, h2, f2);
        b.memoizedState = d.state;
        e2 && dg(b, c, true);
        return b.child;
      }
      function kj(a) {
        var b = a.stateNode;
        b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
        yh(a, b.containerInfo);
      }
      function lj(a, b, c, d, e2) {
        Ig();
        Jg(e2);
        b.flags |= 256;
        Xi2(a, b, c, d);
        return b.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b, c) {
        var d = b.pendingProps, e2 = L2.current, f2 = false, g = 0 !== (b.flags & 128), h2;
        (h2 = g) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
        if (h2) f2 = true, b.flags &= -129;
        else if (null === a || null !== a.memoizedState) e2 |= 1;
        G2(L2, e2 & 1);
        if (null === a) {
          Eg(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
        }
        e2 = a.memoizedState;
        if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a, b, g, d, h2, e2, c);
        if (f2) {
          f2 = d.fallback;
          g = b.mode;
          e2 = a.child;
          h2 = e2.sibling;
          var k3 = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e2 ? (d = b.child, d.childLanes = 0, d.pendingProps = k3, b.deletions = null) : (d = Pg(e2, k3), d.subtreeFlags = e2.subtreeFlags & 14680064);
          null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
          f2.return = b;
          d.return = b;
          d.sibling = f2;
          b.child = d;
          d = f2;
          f2 = b.child;
          g = a.child.memoizedState;
          g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f2.memoizedState = g;
          f2.childLanes = a.childLanes & ~c;
          b.memoizedState = mj;
          return d;
        }
        f2 = a.child;
        a = f2.sibling;
        d = Pg(f2, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c);
        d.return = b;
        d.sibling = null;
        null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function qj(a, b) {
        b = pj({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function sj(a, b, c, d) {
        null !== d && Jg(d);
        Ug(b, a.child, null, c);
        a = qj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function rj(a, b, c, d, e2, f2, g) {
        if (c) {
          if (b.flags & 256) return b.flags &= -257, d = Ki2(Error(p(422))), sj(a, b, g, d);
          if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
          f2 = d.fallback;
          e2 = b.mode;
          d = pj({ mode: "visible", children: d.children }, e2, 0, null);
          f2 = Tg(f2, e2, g, null);
          f2.flags |= 2;
          d.return = b;
          f2.return = b;
          d.sibling = f2;
          b.child = d;
          0 !== (b.mode & 1) && Ug(b, a.child, null, g);
          b.child.memoizedState = nj(g);
          b.memoizedState = mj;
          return f2;
        }
        if (0 === (b.mode & 1)) return sj(a, b, g, null);
        if ("$!" === e2.data) {
          d = e2.nextSibling && e2.nextSibling.dataset;
          if (d) var h2 = d.dgst;
          d = h2;
          f2 = Error(p(419));
          d = Ki2(f2, d, void 0);
          return sj(a, b, g, d);
        }
        h2 = 0 !== (g & a.childLanes);
        if (dh || h2) {
          d = Q2;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e2 = 2;
                break;
              case 16:
                e2 = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e2 = 32;
                break;
              case 536870912:
                e2 = 268435456;
                break;
              default:
                e2 = 0;
            }
            e2 = 0 !== (e2 & (d.suspendedLanes | g)) ? 0 : e2;
            0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a, e2), gi2(d, a, e2, -1));
          }
          tj();
          d = Ki2(Error(p(421)));
          return sj(a, b, g, d);
        }
        if ("$?" === e2.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e2._reactRetry = b, null;
        a = f2.treeContext;
        yg = Lf(e2.nextSibling);
        xg = b;
        I3 = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
        b = qj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function vj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        bh(a.return, b, c);
      }
      function wj(a, b, c, d, e2) {
        var f2 = a.memoizedState;
        null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e2 } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e2);
      }
      function xj(a, b, c) {
        var d = b.pendingProps, e2 = d.revealOrder, f2 = d.tail;
        Xi2(a, b, d.children, c);
        d = L2.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
            else if (19 === a.tag) vj(a, c, b);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G2(L2, d);
        if (0 === (b.mode & 1)) b.memoizedState = null;
        else switch (e2) {
          case "forwards":
            c = b.child;
            for (e2 = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e2 = c), c = c.sibling;
            c = e2;
            null === c ? (e2 = b.child, b.child = null) : (e2 = c.sibling, c.sibling = null);
            wj(b, false, e2, c, f2);
            break;
          case "backwards":
            c = null;
            e2 = b.child;
            for (b.child = null; null !== e2; ) {
              a = e2.alternate;
              if (null !== a && null === Ch(a)) {
                b.child = e2;
                break;
              }
              a = e2.sibling;
              e2.sibling = c;
              c = e2;
              e2 = a;
            }
            wj(b, true, c, null, f2);
            break;
          case "together":
            wj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
        return b.child;
      }
      function ij(a, b) {
        0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function Zi2(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        rh |= b.lanes;
        if (0 === (c & b.childLanes)) return null;
        if (null !== a && b.child !== a.child) throw Error(p(153));
        if (null !== b.child) {
          a = b.child;
          c = Pg(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function yj(a, b, c) {
        switch (b.tag) {
          case 3:
            kj(b);
            Ig();
            break;
          case 5:
            Ah(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            yh(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e2 = b.memoizedProps.value;
            G2(Wg, d._currentValue);
            d._currentValue = e2;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G2(L2, L2.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
              G2(L2, L2.current & 1);
              a = Zi2(a, b, c);
              return null !== a ? a.sibling : null;
            }
            G2(L2, L2.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b, c);
              b.flags |= 128;
            }
            e2 = b.memoizedState;
            null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
            G2(L2, L2.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b.lanes = 0, dj(a, b, c);
        }
        return Zi2(a, b, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b, c, d) {
        var e2 = a.memoizedProps;
        if (e2 !== d) {
          a = b.stateNode;
          xh(uh.current);
          var f2 = null;
          switch (c) {
            case "input":
              e2 = Ya2(a, e2);
              d = Ya2(a, d);
              f2 = [];
              break;
            case "select":
              e2 = A2({}, e2, { value: void 0 });
              d = A2({}, d, { value: void 0 });
              f2 = [];
              break;
            case "textarea":
              e2 = gb(a, e2);
              d = gb(a, d);
              f2 = [];
              break;
            default:
              "function" !== typeof e2.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l2 in e2) if (!d.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
            var h2 = e2[l2];
            for (g in h2) h2.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea2.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
          for (l2 in d) {
            var k3 = d[l2];
            h2 = null != e2 ? e2[l2] : void 0;
            if (d.hasOwnProperty(l2) && k3 !== h2 && (null != k3 || null != h2)) if ("style" === l2) if (h2) {
              for (g in h2) !h2.hasOwnProperty(g) || k3 && k3.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k3) k3.hasOwnProperty(g) && h2[g] !== k3[g] && (c || (c = {}), c[g] = k3[g]);
            } else c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k3;
            else "dangerouslySetInnerHTML" === l2 ? (k3 = k3 ? k3.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k3 && h2 !== k3 && (f2 = f2 || []).push(l2, k3)) : "children" === l2 ? "string" !== typeof k3 && "number" !== typeof k3 || (f2 = f2 || []).push(l2, "" + k3) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea2.hasOwnProperty(l2) ? (null != k3 && "onScroll" === l2 && D2("scroll", a), f2 || h2 === k3 || (f2 = [])) : (f2 = f2 || []).push(l2, k3));
          }
          c && (f2 = f2 || []).push("style", c);
          var l2 = f2;
          if (b.updateQueue = l2) b.flags |= 4;
        }
      };
      Cj = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Dj(a, b) {
        if (!I3) switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S(a) {
        var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b) for (var e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
        else for (e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a, e2 = e2.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Ej(a, b, c) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S(b), null;
          case 1:
            return Zf(b.type) && $f(), S(b), null;
          case 3:
            d = b.stateNode;
            zh();
            E3(Wf);
            E3(H2);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b);
            S(b);
            return null;
          case 5:
            Bh(b);
            var e2 = xh(wh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) Bj(a, b, c, d, e2), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode) throw Error(p(166));
                S(b);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.type;
                var f2 = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f2;
                a = 0 !== (b.mode & 1);
                switch (c) {
                  case "dialog":
                    D2("cancel", d);
                    D2("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D2("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], d);
                    break;
                  case "source":
                    D2("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D2(
                      "error",
                      d
                    );
                    D2("load", d);
                    break;
                  case "details":
                    D2("toggle", d);
                    break;
                  case "input":
                    Za(d, f2);
                    D2("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f2.multiple };
                    D2("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f2), D2("invalid", d);
                }
                ub(c, f2);
                e2 = null;
                for (var g in f2) if (f2.hasOwnProperty(g)) {
                  var h2 = f2[g];
                  "children" === g ? "string" === typeof h2 ? d.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                    d.textContent,
                    h2,
                    a
                  ), e2 = ["children", "" + h2]) : ea2.hasOwnProperty(g) && null != h2 && "onScroll" === g && D2("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va2(d);
                    db(d, f2, true);
                    break;
                  case "textarea":
                    Va2(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f2.onClick && (d.onclick = Bf);
                }
                d = e2;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e2.nodeType ? e2 : e2.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b;
                a[Pf] = d;
                zj(a, b, false, false);
                b.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D2("cancel", a);
                      D2("close", a);
                      e2 = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D2("load", a);
                      e2 = d;
                      break;
                    case "video":
                    case "audio":
                      for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], a);
                      e2 = d;
                      break;
                    case "source":
                      D2("error", a);
                      e2 = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D2(
                        "error",
                        a
                      );
                      D2("load", a);
                      e2 = d;
                      break;
                    case "details":
                      D2("toggle", a);
                      e2 = d;
                      break;
                    case "input":
                      Za(a, d);
                      e2 = Ya2(a, d);
                      D2("invalid", a);
                      break;
                    case "option":
                      e2 = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e2 = A2({}, d, { value: void 0 });
                      D2("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e2 = gb(a, d);
                      D2("invalid", a);
                      break;
                    default:
                      e2 = d;
                  }
                  ub(c, e2);
                  h2 = e2;
                  for (f2 in h2) if (h2.hasOwnProperty(f2)) {
                    var k3 = h2[f2];
                    "style" === f2 ? sb(a, k3) : "dangerouslySetInnerHTML" === f2 ? (k3 = k3 ? k3.__html : void 0, null != k3 && nb(a, k3)) : "children" === f2 ? "string" === typeof k3 ? ("textarea" !== c || "" !== k3) && ob(a, k3) : "number" === typeof k3 && ob(a, "" + k3) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea2.hasOwnProperty(f2) ? null != k3 && "onScroll" === f2 && D2("scroll", a) : null != k3 && ta2(a, f2, k3, g));
                  }
                  switch (c) {
                    case "input":
                      Va2(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va2(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa2(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f2 = d.value;
                      null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e2.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
          case 6:
            if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[Of] = b;
                if (f2 = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f2 && (b.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
          case 13:
            E3(L2);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I3 && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
              else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f2) throw Error(p(318));
                  f2 = b.memoizedState;
                  f2 = null !== f2 ? f2.dehydrated : null;
                  if (!f2) throw Error(p(317));
                  f2[Of] = b;
                } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S(b);
                f2 = false;
              } else null !== zg && (Fj(zg), zg = null), f2 = true;
              if (!f2) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L2.current & 1) ? 0 === T && (T = 3) : tj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
          case 4:
            return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
          case 10:
            return ah(b.type._context), S(b), null;
          case 17:
            return Zf(b.type) && $f(), S(b), null;
          case 19:
            E3(L2);
            f2 = b.memoizedState;
            if (null === f2) return S(b), null;
            d = 0 !== (b.flags & 128);
            g = f2.rendering;
            if (null === g) if (d) Dj(f2, false);
            else {
              if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b.flags |= 128;
                  Dj(f2, false);
                  d = g.updateQueue;
                  null !== d && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G2(L2, L2.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
              null !== f2.tail && B2() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I3) return S(b), null;
              } else 2 * B2() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
              f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
            }
            if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B2(), b.sibling = null, c = L2.current, G2(L2, d ? c & 1 | 2 : c & 1), b;
            S(b);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b.tag));
      }
      function Ij(a, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return zh(), E3(Wf), E3(H2), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Bh(b), null;
          case 13:
            E3(L2);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate) throw Error(p(340));
              Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return E3(L2), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U3 = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V2 = null;
      function Lj(a, b) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W3(a, b, d);
        }
        else c.current = null;
      }
      function Mj(a, b, c) {
        try {
          c();
        } catch (d) {
          W3(a, b, d);
        }
      }
      var Nj = false;
      function Oj(a, b) {
        Cf = dd;
        a = Me3();
        if (Ne3(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e2 = d.anchorOffset, f2 = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f2.nodeType;
              } catch (F2) {
                c = null;
                break a;
              }
              var g = 0, h2 = -1, k3 = -1, l2 = 0, m = 0, q2 = a, r = null;
              b: for (; ; ) {
                for (var y; ; ) {
                  q2 !== c || 0 !== e2 && 3 !== q2.nodeType || (h2 = g + e2);
                  q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k3 = g + d);
                  3 === q2.nodeType && (g += q2.nodeValue.length);
                  if (null === (y = q2.firstChild)) break;
                  r = q2;
                  q2 = y;
                }
                for (; ; ) {
                  if (q2 === a) break b;
                  r === c && ++l2 === e2 && (h2 = g);
                  r === f2 && ++m === d && (k3 = g);
                  if (null !== (y = q2.nextSibling)) break;
                  q2 = r;
                  r = q2.parentNode;
                }
                q2 = y;
              }
              c = -1 === h2 || -1 === k3 ? null : { start: h2, end: k3 };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V2 = b; null !== V2; ) if (b = V2, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V2 = a;
        else for (; null !== V2; ) {
          b = V2;
          try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t = n.memoizedProps, J2 = n.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci2(b.type, t), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u = b.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F2) {
            W3(b, b.return, F2);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            V2 = a;
            break;
          }
          V2 = b.return;
        }
        n = Nj;
        Nj = false;
        return n;
      }
      function Pj(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e2 = d = d.next;
          do {
            if ((e2.tag & a) === a) {
              var f2 = e2.destroy;
              e2.destroy = void 0;
              void 0 !== f2 && Mj(b, c, f2);
            }
            e2 = e2.next;
          } while (e2 !== d);
        }
      }
      function Qj(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Rj(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Sj(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Sj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
      }
      function Wj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
      }
      var X3 = null;
      var Xj = false;
      function Yj(a, b, c) {
        for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
      }
      function Zj(a, b, c) {
        if (lc2 && "function" === typeof lc2.onCommitFiberUnmount) try {
          lc2.onCommitFiberUnmount(kc2, c);
        } catch (h2) {
        }
        switch (c.tag) {
          case 5:
            U3 || Lj(c, b);
          case 6:
            var d = X3, e2 = Xj;
            X3 = null;
            Yj(a, b, c);
            X3 = d;
            Xj = e2;
            null !== X3 && (Xj ? (a = X3, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X3.removeChild(c.stateNode));
            break;
          case 18:
            null !== X3 && (Xj ? (a = X3, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X3, c.stateNode));
            break;
          case 4:
            d = X3;
            e2 = Xj;
            X3 = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b, c);
            X3 = d;
            Xj = e2;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U3 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e2 = d = d.next;
              do {
                var f2 = e2, g = f2.destroy;
                f2 = f2.tag;
                void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
                e2 = e2.next;
              } while (e2 !== d);
            }
            Yj(a, b, c);
            break;
          case 1:
            if (!U3 && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h2) {
              W3(c, b, h2);
            }
            Yj(a, b, c);
            break;
          case 21:
            Yj(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (U3 = (d = U3) || null !== c.memoizedState, Yj(a, b, c), U3 = d) : Yj(a, b, c);
            break;
          default:
            Yj(a, b, c);
        }
      }
      function ak(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b.forEach(function(b2) {
            var d = bk.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function ck(a, b) {
        var c = b.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e2 = c[d];
          try {
            var f2 = a, g = b, h2 = g;
            a: for (; null !== h2; ) {
              switch (h2.tag) {
                case 5:
                  X3 = h2.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X3 = h2.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X3 = h2.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h2 = h2.return;
            }
            if (null === X3) throw Error(p(160));
            Zj(f2, g, e2);
            X3 = null;
            Xj = false;
            var k3 = e2.alternate;
            null !== k3 && (k3.return = null);
            e2.return = null;
          } catch (l2) {
            W3(e2, b, l2);
          }
        }
        if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
      }
      function dk(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W3(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W3(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e2 = a.stateNode;
              try {
                ob(e2, "");
              } catch (t) {
                W3(a, a.return, t);
              }
            }
            if (d & 4 && (e2 = a.stateNode, null != e2)) {
              var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h2 = a.type, k3 = a.updateQueue;
              a.updateQueue = null;
              if (null !== k3) try {
                "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
                vb(h2, g);
                var l2 = vb(h2, f2);
                for (g = 0; g < k3.length; g += 2) {
                  var m = k3[g], q2 = k3[g + 1];
                  "style" === m ? sb(e2, q2) : "dangerouslySetInnerHTML" === m ? nb(e2, q2) : "children" === m ? ob(e2, q2) : ta2(e2, m, q2, l2);
                }
                switch (h2) {
                  case "input":
                    bb(e2, f2);
                    break;
                  case "textarea":
                    ib(e2, f2);
                    break;
                  case "select":
                    var r = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f2.multiple;
                    var y = f2.value;
                    null != y ? fb(e2, !!f2.multiple, y, false) : r !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e2,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e2[Pf] = f2;
              } catch (t) {
                W3(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e2 = a.stateNode;
              f2 = a.memoizedProps;
              try {
                e2.nodeValue = f2;
              } catch (t) {
                W3(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd(b.containerInfo);
            } catch (t) {
              W3(a, a.return, t);
            }
            break;
          case 4:
            ck(b, a);
            ek(a);
            break;
          case 13:
            ck(b, a);
            ek(a);
            e2 = a.child;
            e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B2()));
            d & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U3 = (l2 = U3) || m, ck(b, a), U3 = l2) : ck(b, a);
            ek(a);
            if (d & 8192) {
              l2 = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l2) && !m && 0 !== (a.mode & 1)) for (V2 = a, m = a.child; null !== m; ) {
                for (q2 = V2 = m; null !== V2; ) {
                  r = V2;
                  y = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W3(d, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q2);
                        continue;
                      }
                  }
                  null !== y ? (y.return = r, V2 = y) : gk(q2);
                }
                m = m.sibling;
              }
              a: for (m = null, q2 = a; ; ) {
                if (5 === q2.tag) {
                  if (null === m) {
                    m = q2;
                    try {
                      e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k3 = q2.memoizedProps.style, g = void 0 !== k3 && null !== k3 && k3.hasOwnProperty("display") ? k3.display : null, h2.style.display = rb("display", g));
                    } catch (t) {
                      W3(a, a.return, t);
                    }
                  }
                } else if (6 === q2.tag) {
                  if (null === m) try {
                    q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                  } catch (t) {
                    W3(a, a.return, t);
                  }
                } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                  q2.child.return = q2;
                  q2 = q2.child;
                  continue;
                }
                if (q2 === a) break a;
                for (; null === q2.sibling; ) {
                  if (null === q2.return || q2.return === a) break a;
                  m === q2 && (m = null);
                  q2 = q2.return;
                }
                m === q2 && (m = null);
                q2.sibling.return = q2.return;
                q2 = q2.sibling;
              }
            }
            break;
          case 19:
            ck(b, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e2 = d.stateNode;
                d.flags & 32 && (ob(e2, ""), d.flags &= -33);
                var f2 = Uj(a);
                Wj(a, f2, e2);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h2 = Uj(a);
                Vj(a, h2, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k3) {
            W3(a, a.return, k3);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function hk(a, b, c) {
        V2 = a;
        ik(a, b, c);
      }
      function ik(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== V2; ) {
          var e2 = V2, f2 = e2.child;
          if (22 === e2.tag && d) {
            var g = null !== e2.memoizedState || Jj;
            if (!g) {
              var h2 = e2.alternate, k3 = null !== h2 && null !== h2.memoizedState || U3;
              h2 = Jj;
              var l2 = U3;
              Jj = g;
              if ((U3 = k3) && !l2) for (V2 = e2; null !== V2; ) g = V2, k3 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e2) : null !== k3 ? (k3.return = g, V2 = k3) : jk(e2);
              for (; null !== f2; ) V2 = f2, ik(f2, b, c), f2 = f2.sibling;
              V2 = e2;
              Jj = h2;
              U3 = l2;
            }
            kk(a, b, c);
          } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V2 = f2) : kk(a, b, c);
        }
      }
      function kk(a) {
        for (; null !== V2; ) {
          var b = V2;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U3 || Qj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !U3) if (null === c) d.componentDidMount();
                  else {
                    var e2 = b.elementType === b.type ? c.memoizedProps : Ci2(b.type, c.memoizedProps);
                    d.componentDidUpdate(e2, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f2 = b.updateQueue;
                  null !== f2 && sh(b, f2, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b.child) switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                    sh(b, g, c);
                  }
                  break;
                case 5:
                  var h2 = b.stateNode;
                  if (null === c && b.flags & 4) {
                    c = h2;
                    var k3 = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k3.autoFocus && c.focus();
                        break;
                      case "img":
                        k3.src && (c.src = k3.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l2 = b.alternate;
                    if (null !== l2) {
                      var m = l2.memoizedState;
                      if (null !== m) {
                        var q2 = m.dehydrated;
                        null !== q2 && bd(q2);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
              U3 || b.flags & 512 && Rj(b);
            } catch (r) {
              W3(b, b.return, r);
            }
          }
          if (b === a) {
            V2 = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V2 = c;
            break;
          }
          V2 = b.return;
        }
      }
      function gk(a) {
        for (; null !== V2; ) {
          var b = V2;
          if (b === a) {
            V2 = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V2 = c;
            break;
          }
          V2 = b.return;
        }
      }
      function jk(a) {
        for (; null !== V2; ) {
          var b = V2;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Qj(4, b);
                } catch (k3) {
                  W3(b, c, k3);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e2 = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k3) {
                    W3(b, e2, k3);
                  }
                }
                var f2 = b.return;
                try {
                  Rj(b);
                } catch (k3) {
                  W3(b, f2, k3);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Rj(b);
                } catch (k3) {
                  W3(b, g, k3);
                }
            }
          } catch (k3) {
            W3(b, b.return, k3);
          }
          if (b === a) {
            V2 = null;
            break;
          }
          var h2 = b.sibling;
          if (null !== h2) {
            h2.return = b.return;
            V2 = h2;
            break;
          }
          V2 = b.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua2.ReactCurrentDispatcher;
      var nk = ua2.ReactCurrentOwner;
      var ok = ua2.ReactCurrentBatchConfig;
      var K2 = 0;
      var Q2 = null;
      var Y = null;
      var Z2 = 0;
      var fj = 0;
      var ej = Uf(0);
      var T = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi2 = false;
      var Pi2 = null;
      var Ri2 = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R3() {
        return 0 !== (K2 & 6) ? B2() : -1 !== Ak ? Ak : Ak = B2();
      }
      function yi(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K2 & 2) && 0 !== Z2) return Z2 & -Z2;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc2()), Bk;
        a = C;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi2(a, b, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac2(a, c, d);
        if (0 === (K2 & 2) || a !== Q2) a === Q2 && (0 === (K2 & 2) && (qk |= c), 4 === T && Ck(a, Z2)), Dk(a, d), 1 === c && 0 === K2 && 0 === (b.mode & 1) && (Gj = B2() + 500, fg && jg());
      }
      function Dk(a, b) {
        var c = a.callbackNode;
        wc2(a, b);
        var d = uc2(a, a === Q2 ? Z2 : 0);
        if (0 === d) null !== c && bc2(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          null != c && bc2(c);
          if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K2 & 6) && jg();
          }), c = null;
          else {
            switch (Dc2(d)) {
              case 1:
                c = fc2;
                break;
              case 4:
                c = gc2;
                break;
              case 16:
                c = hc2;
                break;
              case 536870912:
                c = jc2;
                break;
              default:
                c = hc2;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Gk(a, b) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K2 & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc2(a, a === Q2 ? Z2 : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
        else {
          b = d;
          var e2 = K2;
          K2 |= 2;
          var f2 = Jk();
          if (Q2 !== a || Z2 !== b) uk = null, Gj = B2() + 500, Kk(a, b);
          do
            try {
              Lk();
              break;
            } catch (h2) {
              Mk(a, h2);
            }
          while (1);
          $g();
          mk.current = f2;
          K2 = e2;
          null !== Y ? b = 0 : (Q2 = null, Z2 = 0, b = T);
        }
        if (0 !== b) {
          2 === b && (e2 = xc2(a), 0 !== e2 && (d = e2, b = Nk(a, e2)));
          if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B2()), c;
          if (6 === b) Ck(a, d);
          else {
            e2 = a.current.alternate;
            if (0 === (d & 30) && !Ok(e2) && (b = Ik(a, d), 2 === b && (f2 = xc2(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B2()), c;
            a.finishedWork = e2;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b = fk + 500 - B2(), 10 < b)) {
                  if (0 !== uc2(a, 0)) break;
                  e2 = a.suspendedLanes;
                  if ((e2 & d) !== d) {
                    R3();
                    a.pingedLanes |= a.suspendedLanes & e2;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b = a.eventTimes;
                for (e2 = -1; 0 < d; ) {
                  var g = 31 - oc2(d);
                  f2 = 1 << g;
                  g = b[g];
                  g > e2 && (e2 = g);
                  d &= ~f2;
                }
                d = e2;
                d = B2() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B2());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
        a = Ik(a, b);
        2 !== a && (b = tk, tk = c, null !== b && Fj(b));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e2 = c[d], f2 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He3(f2(), e2)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
          else {
            if (b === a) break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a) return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Ck(a, b) {
        b &= ~rk;
        b &= ~qk;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - oc2(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K2 & 6)) throw Error(p(327));
        Hk();
        var b = uc2(a, 0);
        if (0 === (b & 1)) return Dk(a, B2()), null;
        var c = Ik(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = xc2(a);
          0 !== d && (b = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B2()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Pk(a, tk, uk);
        Dk(a, B2());
        return null;
      }
      function Qk(a, b) {
        var c = K2;
        K2 |= 1;
        try {
          return a(b);
        } finally {
          K2 = c, 0 === K2 && (Gj = B2() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K2 & 6) && Hk();
        var b = K2;
        K2 |= 1;
        var c = ok.transition, d = C;
        try {
          if (ok.transition = null, C = 1, a) return a();
        } finally {
          C = d, ok.transition = c, K2 = b, 0 === (K2 & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E3(ej);
      }
      function Kk(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y) for (c = Y.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E3(Wf);
              E3(H2);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E3(L2);
              break;
            case 19:
              E3(L2);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q2 = a;
        Y = a = Pg(a.current, null);
        Z2 = fj = b;
        T = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e2 = d.next, f2 = c.pending;
            if (null !== f2) {
              var g = f2.next;
              f2.next = e2;
              d.next = g;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b) {
        do {
          var c = Y;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M2.memoizedState; null !== d; ) {
                var e2 = d.queue;
                null !== e2 && (e2.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O2 = N3 = M2 = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T = 1;
              pk = b;
              Y = null;
              break;
            }
            a: {
              var f2 = a, g = c.return, h2 = c, k3 = b;
              b = Z2;
              h2.flags |= 32768;
              if (null !== k3 && "object" === typeof k3 && "function" === typeof k3.then) {
                var l2 = k3, m = h2, q2 = m.tag;
                if (0 === (m.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y = Ui2(g);
                if (null !== y) {
                  y.flags &= -257;
                  Vi2(y, g, h2, f2, b);
                  y.mode & 1 && Si2(f2, l2, b);
                  b = y;
                  k3 = l2;
                  var n = b.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k3);
                    b.updateQueue = t;
                  } else n.add(k3);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Si2(f2, l2, b);
                    tj();
                    break a;
                  }
                  k3 = Error(p(426));
                }
              } else if (I3 && h2.mode & 1) {
                var J2 = Ui2(g);
                if (null !== J2) {
                  0 === (J2.flags & 65536) && (J2.flags |= 256);
                  Vi2(J2, g, h2, f2, b);
                  Jg(Ji2(k3, h2));
                  break a;
                }
              }
              f2 = k3 = Ji2(k3, h2);
              4 !== T && (T = 2);
              null === sk ? sk = [f2] : sk.push(f2);
              f2 = g;
              do {
                switch (f2.tag) {
                  case 3:
                    f2.flags |= 65536;
                    b &= -b;
                    f2.lanes |= b;
                    var x2 = Ni(f2, k3, b);
                    ph(f2, x2);
                    break a;
                  case 1:
                    h2 = k3;
                    var w2 = f2.type, u = f2.stateNode;
                    if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri2 || !Ri2.has(u)))) {
                      f2.flags |= 65536;
                      b &= -b;
                      f2.lanes |= b;
                      var F2 = Qi2(f2, h2, b);
                      ph(f2, F2);
                      break a;
                    }
                }
                f2 = f2.return;
              } while (null !== f2);
            }
            Sk(c);
          } catch (na2) {
            b = na2;
            Y === c && null !== c && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T || 3 === T || 2 === T) T = 4;
        null === Q2 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q2, Z2);
      }
      function Ik(a, b) {
        var c = K2;
        K2 |= 2;
        var d = Jk();
        if (Q2 !== a || Z2 !== b) uk = null, Kk(a, b);
        do
          try {
            Tk();
            break;
          } catch (e2) {
            Mk(a, e2);
          }
        while (1);
        $g();
        K2 = c;
        mk.current = d;
        if (null !== Y) throw Error(p(261));
        Q2 = null;
        Z2 = 0;
        return T;
      }
      function Tk() {
        for (; null !== Y; ) Uk(Y);
      }
      function Lk() {
        for (; null !== Y && !cc2(); ) Uk(Y);
      }
      function Uk(a) {
        var b = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b ? Sk(a) : Y = b;
        nk.current = null;
      }
      function Sk(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Ej(c, b, fj), null !== c) {
              Y = c;
              return;
            }
          } else {
            c = Ij(c, b);
            if (null !== c) {
              c.flags &= 32767;
              Y = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T = 6;
              Y = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y = b;
            return;
          }
          Y = b = a;
        } while (null !== b);
        0 === T && (T = 5);
      }
      function Pk(a, b, c) {
        var d = C, e2 = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a, b, c, d);
        } finally {
          ok.transition = e2, C = d;
        }
        return null;
      }
      function Wk(a, b, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K2 & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e2 = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f2 = c.lanes | c.childLanes;
        Bc(a, f2);
        a === Q2 && (Y = Q2 = null, Z2 = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc2, function() {
          Hk();
          return null;
        }));
        f2 = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f2) {
          f2 = ok.transition;
          ok.transition = null;
          var g = C;
          C = 1;
          var h2 = K2;
          K2 |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe3(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e2);
          dc2();
          K2 = h2;
          C = g;
          ok.transition = f2;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e2);
        f2 = a.pendingLanes;
        0 === f2 && (Ri2 = null);
        mc2(c.stateNode, d);
        Dk(a, B2());
        if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e2 = b[c], d(e2.value, { componentStack: e2.stack, digest: e2.digest });
        if (Oi2) throw Oi2 = false, a = Pi2, Pi2 = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f2 = a.pendingLanes;
        0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc2(xk), b = ok.transition, c = C;
          try {
            ok.transition = null;
            C = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K2 & 6)) throw Error(p(331));
              var e2 = K2;
              K2 |= 4;
              for (V2 = a.current; null !== V2; ) {
                var f2 = V2, g = f2.child;
                if (0 !== (V2.flags & 16)) {
                  var h2 = f2.deletions;
                  if (null !== h2) {
                    for (var k3 = 0; k3 < h2.length; k3++) {
                      var l2 = h2[k3];
                      for (V2 = l2; null !== V2; ) {
                        var m = V2;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f2);
                        }
                        var q2 = m.child;
                        if (null !== q2) q2.return = m, V2 = q2;
                        else for (; null !== V2; ) {
                          m = V2;
                          var r = m.sibling, y = m.return;
                          Sj(m);
                          if (m === l2) {
                            V2 = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y;
                            V2 = r;
                            break;
                          }
                          V2 = y;
                        }
                      }
                    }
                    var n = f2.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J2 = t.sibling;
                          t.sibling = null;
                          t = J2;
                        } while (null !== t);
                      }
                    }
                    V2 = f2;
                  }
                }
                if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V2 = g;
                else b: for (; null !== V2; ) {
                  f2 = V2;
                  if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f2, f2.return);
                  }
                  var x2 = f2.sibling;
                  if (null !== x2) {
                    x2.return = f2.return;
                    V2 = x2;
                    break b;
                  }
                  V2 = f2.return;
                }
              }
              var w2 = a.current;
              for (V2 = w2; null !== V2; ) {
                g = V2;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V2 = u;
                else b: for (g = w2; null !== V2; ) {
                  h2 = V2;
                  if (0 !== (h2.flags & 2048)) try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h2);
                    }
                  } catch (na2) {
                    W3(h2, h2.return, na2);
                  }
                  if (h2 === g) {
                    V2 = null;
                    break b;
                  }
                  var F2 = h2.sibling;
                  if (null !== F2) {
                    F2.return = h2.return;
                    V2 = F2;
                    break b;
                  }
                  V2 = h2.return;
                }
              }
              K2 = e2;
              jg();
              if (lc2 && "function" === typeof lc2.onPostCommitFiberRoot) try {
                lc2.onPostCommitFiberRoot(kc2, a);
              } catch (na2) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c, ok.transition = b;
          }
        }
        return false;
      }
      function Xk(a, b, c) {
        b = Ji2(c, b);
        b = Ni(a, b, 1);
        a = nh(a, b, 1);
        b = R3();
        null !== a && (Ac2(a, 1, b), Dk(a, b));
      }
      function W3(a, b, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b; ) {
          if (3 === b.tag) {
            Xk(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri2 || !Ri2.has(d))) {
              a = Ji2(c, a);
              a = Qi2(b, a, 1);
              b = nh(b, a, 1);
              a = R3();
              null !== b && (Ac2(b, 1, a), Dk(b, a));
              break;
            }
          }
          b = b.return;
        }
      }
      function Ti2(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = R3();
        a.pingedLanes |= a.suspendedLanes & c;
        Q2 === a && (Z2 & c) === c && (4 === T || 3 === T && (Z2 & 130023424) === Z2 && 500 > B2() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b);
      }
      function Yk(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc2, sc2 <<= 1, 0 === (sc2 & 130023424) && (sc2 = 4194304)));
        var c = R3();
        a = ih(a, b);
        null !== a && (Ac2(a, b, c), Dk(a, c));
      }
      function uj(a) {
        var b = a.memoizedState, c = 0;
        null !== b && (c = b.retryLane);
        Yk(a, c);
      }
      function bk(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e2 = a.memoizedState;
            null !== e2 && (c = e2.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b, c) {
        if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I3 && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            ij(a, b);
            a = b.pendingProps;
            var e2 = Yf(b, H2.current);
            ch(b, c);
            e2 = Nh(null, b, d, a, e2, c);
            var f2 = Sh();
            b.flags |= 1;
            "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b), e2.updater = Ei2, b.stateNode = e2, e2._reactInternals = b, Ii2(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I3 && f2 && vg(b), Xi2(null, b, e2, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              ij(a, b);
              a = b.pendingProps;
              e2 = d._init;
              d = e2(d._payload);
              b.type = d;
              e2 = b.tag = Zk(d);
              a = Ci2(d, a);
              switch (e2) {
                case 0:
                  b = cj(null, b, d, a, c);
                  break a;
                case 1:
                  b = hj(null, b, d, a, c);
                  break a;
                case 11:
                  b = Yi2(null, b, d, a, c);
                  break a;
                case 14:
                  b = $i2(null, b, d, Ci2(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci2(d, e2), cj(a, b, d, e2, c);
          case 1:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci2(d, e2), hj(a, b, d, e2, c);
          case 3:
            a: {
              kj(b);
              if (null === a) throw Error(p(387));
              d = b.pendingProps;
              f2 = b.memoizedState;
              e2 = f2.element;
              lh(a, b);
              qh(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
                e2 = Ji2(Error(p(423)), b);
                b = lj(a, b, d, c, e2);
                break a;
              } else if (d !== e2) {
                e2 = Ji2(Error(p(424)), b);
                b = lj(a, b, d, c, e2);
                break a;
              } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I3 = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e2) {
                  b = Zi2(a, b, c);
                  break a;
                }
                Xi2(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Ah(b), null === a && Eg(b), d = b.type, e2 = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e2.children, Ef(d, e2) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi2(a, b, g, c), b.child;
          case 6:
            return null === a && Eg(b), null;
          case 13:
            return oj(a, b, c);
          case 4:
            return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi2(a, b, d, c), b.child;
          case 11:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci2(d, e2), Yi2(a, b, d, e2, c);
          case 7:
            return Xi2(a, b, b.pendingProps, c), b.child;
          case 8:
            return Xi2(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return Xi2(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e2 = b.pendingProps;
              f2 = b.memoizedProps;
              g = e2.value;
              G2(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f2) if (He3(f2.value, g)) {
                if (f2.children === e2.children && !Wf.current) {
                  b = Zi2(a, b, c);
                  break a;
                }
              } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
                var h2 = f2.dependencies;
                if (null !== h2) {
                  g = f2.child;
                  for (var k3 = h2.firstContext; null !== k3; ) {
                    if (k3.context === d) {
                      if (1 === f2.tag) {
                        k3 = mh(-1, c & -c);
                        k3.tag = 2;
                        var l2 = f2.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m = l2.pending;
                          null === m ? k3.next = k3 : (k3.next = m.next, m.next = k3);
                          l2.pending = k3;
                        }
                      }
                      f2.lanes |= c;
                      k3 = f2.alternate;
                      null !== k3 && (k3.lanes |= c);
                      bh(
                        f2.return,
                        c,
                        b
                      );
                      h2.lanes |= c;
                      break;
                    }
                    k3 = k3.next;
                  }
                } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g = f2.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h2 = g.alternate;
                  null !== h2 && (h2.lanes |= c);
                  bh(g, c, b);
                  g = f2.sibling;
                } else g = f2.child;
                if (null !== g) g.return = f2;
                else for (g = f2; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
                f2 = g;
              }
              Xi2(a, b, e2.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e2 = b.type, d = b.pendingProps.children, ch(b, c), e2 = eh(e2), d = d(e2), b.flags |= 1, Xi2(a, b, d, c), b.child;
          case 14:
            return d = b.type, e2 = Ci2(d, b.pendingProps), e2 = Ci2(d.type, e2), $i2(a, b, d, e2, c);
          case 15:
            return bj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Ci2(d, e2), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi2(b, d, e2), Ii2(b, d, e2, c), jj(null, b, d, true, a, c);
          case 19:
            return xj(a, b, c);
          case 22:
            return dj(a, b, c);
        }
        throw Error(p(156, b.tag));
      };
      function Fk(a, b) {
        return ac(a, b);
      }
      function $k(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b, c, d) {
        return new $k(a, b, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da2) return 11;
          if (a === Ga2) return 14;
        }
        return 2;
      }
      function Pg(a, b) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b, c, d, e2, f2) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ya2:
            return Tg(c.children, e2, f2, b);
          case za2:
            g = 8;
            e2 |= 8;
            break;
          case Aa2:
            return a = Bg(12, c, b, e2 | 2), a.elementType = Aa2, a.lanes = f2, a;
          case Ea2:
            return a = Bg(13, c, b, e2), a.elementType = Ea2, a.lanes = f2, a;
          case Fa2:
            return a = Bg(19, c, b, e2), a.elementType = Fa2, a.lanes = f2, a;
          case Ia2:
            return pj(c, e2, f2, b);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba2:
                g = 10;
                break a;
              case Ca2:
                g = 9;
                break a;
              case Da2:
                g = 11;
                break a;
              case Ga2:
                g = 14;
                break a;
              case Ha2:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b = Bg(g, c, b, e2);
        b.elementType = a;
        b.type = d;
        b.lanes = f2;
        return b;
      }
      function Tg(a, b, c, d) {
        a = Bg(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function pj(a, b, c, d) {
        a = Bg(22, a, d, b);
        a.elementType = Ia2;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b, c) {
        a = Bg(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function Sg(a, b, c) {
        b = Bg(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function al2(a, b, c, d, e2) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e2;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl2(a, b, c, d, e2, f2, g, h2, k3) {
        a = new al2(a, b, c, h2, k3);
        1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
        f2 = Bg(3, null, null, b);
        a.current = f2;
        f2.stateNode = a;
        f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f2);
        return a;
      }
      function cl2(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa2, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function dl2(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b);
        }
        return b;
      }
      function el2(a, b, c, d, e2, f2, g, h2, k3) {
        a = bl2(c, d, true, a, e2, f2, g, h2, k3);
        a.context = dl2(null);
        c = a.current;
        d = R3();
        e2 = yi(c);
        f2 = mh(d, e2);
        f2.callback = void 0 !== b && null !== b ? b : null;
        nh(c, f2, e2);
        a.current.lanes = e2;
        Ac2(a, e2, d);
        Dk(a, d);
        return a;
      }
      function fl2(a, b, c, d) {
        var e2 = b.current, f2 = R3(), g = yi(e2);
        c = dl2(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = mh(f2, g);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a = nh(e2, b, g);
        null !== a && (gi2(a, e2, g, f2), oh(a, e2, g));
        return g;
      }
      function gl2(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl2(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function il2(a, b) {
        hl2(a, b);
        (a = a.alternate) && hl2(a, b);
      }
      function jl2() {
        return null;
      }
      var kl2 = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll2(a) {
        this._internalRoot = a;
      }
      ml2.prototype.render = ll2.prototype.render = function(a) {
        var b = this._internalRoot;
        if (null === b) throw Error(p(409));
        fl2(a, b, null, null);
      };
      ml2.prototype.unmount = ll2.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Rk(function() {
            fl2(null, a, null, null);
          });
          b[uf] = null;
        }
      };
      function ml2(a) {
        this._internalRoot = a;
      }
      ml2.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b = Hc2();
          a = { blockedOn: null, target: a, priority: b };
          for (var c = 0; c < Qc2.length && 0 !== b && b < Qc2[c].priority; c++) ;
          Qc2.splice(c, 0, a);
          0 === c && Vc2(a);
        }
      };
      function nl2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl2() {
      }
      function ql2(a, b, c, d, e2) {
        if (e2) {
          if ("function" === typeof d) {
            var f2 = d;
            d = function() {
              var a2 = gl2(g);
              f2.call(a2);
            };
          }
          var g = el2(b, d, a, 0, null, false, false, "", pl2);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g;
        }
        for (; e2 = a.lastChild; ) a.removeChild(e2);
        if ("function" === typeof d) {
          var h2 = d;
          d = function() {
            var a2 = gl2(k3);
            h2.call(a2);
          };
        }
        var k3 = bl2(a, 0, false, null, null, false, false, "", pl2);
        a._reactRootContainer = k3;
        a[uf] = k3.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl2(b, k3, c, d);
        });
        return k3;
      }
      function rl2(a, b, c, d, e2) {
        var f2 = c._reactRootContainer;
        if (f2) {
          var g = f2;
          if ("function" === typeof e2) {
            var h2 = e2;
            e2 = function() {
              var a2 = gl2(g);
              h2.call(a2);
            };
          }
          fl2(b, g, a, e2);
        } else g = ql2(c, b, a, e2, d);
        return gl2(g);
      }
      Ec2 = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = tc2(b.pendingLanes);
              0 !== c && (Cc2(b, c | 1), Dk(b, B2()), 0 === (K2 & 6) && (Gj = B2() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b2 = ih(a, 1);
              if (null !== b2) {
                var c2 = R3();
                gi2(b2, a, 1, c2);
              }
            }), il2(a, 1);
        }
      };
      Fc2 = function(a) {
        if (13 === a.tag) {
          var b = ih(a, 134217728);
          if (null !== b) {
            var c = R3();
            gi2(b, a, 134217728, c);
          }
          il2(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b = yi(a), c = ih(a, b);
          if (null !== c) {
            var d = R3();
            gi2(c, a, b, d);
          }
          il2(a, b);
        }
      };
      Hc2 = function() {
        return C;
      };
      Ic2 = function(a, b) {
        var c = C;
        try {
          return C = a, b();
        } finally {
          C = c;
        }
      };
      yb = function(a, b, c) {
        switch (b) {
          case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e2 = Db(d);
                  if (!e2) throw Error(p(90));
                  Wa2(d);
                  bb(d, e2);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl2 = { usingClientEntryPoint: false, Events: [Cb, ue3, Db, Eb, Fb, Qk] };
      var tl2 = { findFiberByHostInstance: Wc2, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul2 = { bundleType: tl2.bundleType, version: tl2.version, rendererPackageName: tl2.rendererPackageName, rendererConfig: tl2.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua2.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl2.findFiberByHostInstance || jl2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl2 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl2.isDisabled && vl2.supportsFiber) try {
          kc2 = vl2.inject(ul2), lc2 = vl2;
        } catch (a) {
        }
      }
      var vl2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl2;
      exports.createPortal = function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl2(b)) throw Error(p(200));
        return cl2(a, b, null, c);
      };
      exports.createRoot = function(a, b) {
        if (!nl2(a)) throw Error(p(299));
        var c = false, d = "", e2 = kl2;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e2 = b.onRecoverableError));
        b = bl2(a, 1, false, null, null, c, false, d, e2);
        a[uf] = b.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ll2(b);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b, c) {
        if (!ol2(b)) throw Error(p(200));
        return rl2(null, a, b, true, c);
      };
      exports.hydrateRoot = function(a, b, c) {
        if (!nl2(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e2 = false, f2 = "", g = kl2;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e2 = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b = el2(b, null, a, 1, null != c ? c : null, e2, false, f2, g);
        a[uf] = b.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e2 = c._getVersion, e2 = e2(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e2] : b.mutableSourceEagerHydrationData.push(
          c,
          e2
        );
        return new ml2(b);
      };
      exports.render = function(a, b, c) {
        if (!ol2(b)) throw Error(p(200));
        return rl2(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol2(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl2(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!ol2(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl2(a, b, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h2, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h2, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f2 = require_react();
      var k3 = /* @__PURE__ */ Symbol.for("react.element");
      var l2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q2(c, a, g) {
        var b, d = {}, e2 = null, h2 = null;
        void 0 !== g && (e2 = "" + g);
        void 0 !== a.key && (e2 = "" + a.key);
        void 0 !== a.ref && (h2 = a.ref);
        for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
        return { $$typeof: k3, type: c, key: e2, ref: h2, props: d, _owner: n.current };
      }
      exports.Fragment = l2;
      exports.jsx = q2;
      exports.jsxs = q2;
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/main.tsx
  var import_client = __toESM(require_client());


  function Fo(p){return import_react30.createElement('div',null,import_react30.createElement('h1',null,p.title),import_react30.createElement('p',null,p.intro));}
  function Jo(p){return import_react30.createElement('p',null,p.children);}
  function rn(p){return import_react30.createElement('a',{href:p.href},p.children);}
  function Je2(p){return import_react30.createElement('button',{type:'button',onClick:p.onClick,'aria-label':p.label},'×');}
  function xe2(p){const [i,setI]=import_react30.useState(p.start||0);return import_react30.createElement('div',{style:{position:'fixed',inset:0,zIndex:9999,background:'#05080ff5',display:'flex',alignItems:'center',justifyContent:'center'}},import_react30.createElement('img',{src:p.photos[i].src,alt:p.photos[i].alt,style:{maxWidth:'92vw',maxHeight:'84vh',objectFit:'contain'}}),import_react30.createElement('button',{onClick:p.onClose,style:{position:'absolute',right:20,top:20,color:'white',background:'#14213b',padding:15}},'Close'),import_react30.createElement('button',{onClick:()=>setI((i+1)%p.photos.length),style:{position:'absolute',right:20,bottom:20,color:'white',background:'#14213b',padding:15}},'Next'));}

  // src/App.tsx
  var import_react30 = __toESM(require_react());

  // src/photos/000.webp
  var __default = "./assets/WP4PAPPQ.webp";

  // src/photos/001.webp
  var __default2 = "./assets/54A5KASU.webp";

  // src/photos/002.webp
  var __default3 = "./assets/I6KFTHSP.webp";

  // src/photos/003.webp
  var __default4 = "./assets/UURUG4N7.webp";

  // src/photos/004.webp
  var __default5 = "./assets/TXS2RAIQ.webp";

  // src/photos/005.webp
  var __default6 = "./assets/AMGUQSEZ.webp";

  // src/photos/006.webp
  var __default7 = "./assets/DZPFEKYI.webp";

  // src/photos/007.webp
  var __default8 = "./assets/GCKQFV3A.webp";

  // src/photos/008.webp
  var __default9 = "./assets/LEMVMUEM.webp";

  // src/photos/009.webp
  var __default10 = "./assets/3HHINZO6.webp";

  // src/photos/010.webp
  var __default11 = "./assets/KIHBL525.webp";

  // src/photos/011.webp
  var __default12 = "./assets/6VGENHVZ.webp";

  // src/photos/012.webp
  var __default13 = "./assets/4JQI22IK.webp";

  // src/photos/013.webp
  var __default14 = "./assets/BYC2LIOT.webp";

  // src/photos/014.webp
  var __default15 = "./assets/DSQFTKHP.webp";

  // src/photos/015.webp
  var __default16 = "./assets/T5QSVONH.webp";

  // src/photos/016.webp
  var __default17 = "./assets/AFKJQI6H.webp";

  // src/photos/017.webp
  var __default18 = "./assets/BZC4YC4X.webp";

  // src/photos/018.webp
  var __default19 = "./assets/G2ZNVXFG.webp";

  // src/photos/019.webp
  var __default20 = "./assets/5CHXFTIW.webp";

  // src/photos/020.webp
  var __default21 = "./assets/AUK7BMM6.webp";

  // src/photos/021.webp
  var __default22 = "./assets/QMXIXPYV.webp";

  // src/photos/022.webp
  var __default23 = "./assets/KVQACZIP.webp";

  // src/photos/023.webp
  var __default24 = "./assets/3RMGZ7CN.webp";

  // src/photos/024.webp
  var __default25 = "./assets/CBGQEBKO.webp";

  // src/photos/025.webp
  var __default26 = "./assets/H4VIOVMD.webp";

  // src/photos/026.webp
  var __default27 = "./assets/HS3CZ6P7.webp";

  // src/photos/027.webp
  var __default28 = "./assets/XL7HGHWM.webp";

  // src/photos/028.webp
  var __default29 = "./assets/RNOX64SQ.webp";

  // src/photos/029.webp
  var __default30 = "./assets/BVZOUZKC.webp";

  // src/photos/030.webp
  var __default31 = "./assets/CLE57K5M.webp";

  // src/photos/031.webp
  var __default32 = "./assets/7PBKDM46.webp";

  // src/photos/032.webp
  var __default33 = "./assets/SRIEA55G.webp";

  // src/photos/033.webp
  var __default34 = "./assets/VOZ3FNKV.webp";

  // src/photos/034.webp
  var __default35 = "./assets/LCGVOVVW.webp";

  // src/photos/035.webp
  var __default36 = "./assets/DBNMAH3L.webp";

  // src/photos/036.webp
  var __default37 = "./assets/V7HRUCCA.webp";

  // src/photos/037.webp
  var __default38 = "./assets/XNGOJBEH.webp";

  // src/photos/038.webp
  var __default39 = "./assets/ROAYRFQQ.webp";

  // src/photos/039.webp
  var __default40 = "./assets/3GCBYMFQ.webp";

  // src/photos/040.webp
  var __default41 = "./assets/S3OTKPRB.webp";

  // src/photos/041.webp
  var __default42 = "./assets/FDOXBJIO.webp";

  // src/photos/042.webp
  var __default43 = "./assets/4XZMZPRU.webp";

  // src/photos/043.webp
  var __default44 = "./assets/7TTUEJCG.webp";

  // src/photos/044.webp
  var __default45 = "./assets/GFW6GSET.webp";

  // src/photos/045.webp
  var __default46 = "./assets/RLYKMFFS.webp";

  // src/photos/046.webp
  var __default47 = "./assets/LMXOKCIQ.webp";

  // src/photos/047.webp
  var __default48 = "./assets/23KSZNVT.webp";

  // src/photos/048.webp
  var __default49 = "./assets/YFIOWEOR.webp";

  // src/photos/049.webp
  var __default50 = "./assets/C64VDU7G.webp";

  // src/photos/050.webp
  var __default51 = "./assets/WCEDLHZI.webp";

  // src/photos/051.webp
  var __default52 = "./assets/QBDEP5CC.webp";

  // src/photos/052.webp
  var __default53 = "./assets/2LUUQPWY.webp";

  // src/photos/053.webp
  var __default54 = "./assets/SAUVA2LX.webp";

  // src/photos/054.webp
  var __default55 = "./assets/KJIP5LZ3.webp";

  // src/photos/055.webp
  var __default56 = "./assets/BT34AK4D.webp";

  // src/photos/056.webp
  var __default57 = "./assets/BN4YNKLA.webp";

  // src/photos/057.webp
  var __default58 = "./assets/S4L7XAZ5.webp";

  // src/photos/058.webp
  var __default59 = "./assets/SMPGAFHC.webp";

  // src/photos/059.webp
  var __default60 = "./assets/CDIOLGR6.webp";

  // src/photos/060.webp
  var __default61 = "./assets/G7NQ4JSL.webp";

  // src/photos/061.webp
  var __default62 = "./assets/KQQZTFHM.webp";

  // src/photos/062.webp
  var __default63 = "./assets/OPXJPXNK.webp";

  // src/photos/063.webp
  var __default64 = "./assets/JG34OW66.webp";

  // src/photos/064.webp
  var __default65 = "./assets/IS3SZI22.webp";

  // src/photos/065.webp
  var __default66 = "./assets/W5SZ3KQY.webp";

  // src/photos/066.webp
  var __default67 = "./assets/UZVMFBJ5.webp";

  // src/photos/067.webp
  var __default68 = "./assets/2D5CBQXV.webp";

  // src/photos/068.webp
  var __default69 = "./assets/UYGWZFUU.webp";

  // src/photos/069.webp
  var __default70 = "./assets/KIVO62H5.webp";

  // src/photos/070.webp
  var __default71 = "./assets/PXF4X54K.webp";

  // src/photos/071.webp
  var __default72 = "./assets/54657LUK.webp";

  // src/photos/072.webp
  var __default73 = "./assets/WNRECKVA.webp";

  // src/photos/073.webp
  var __default74 = "./assets/NHDOPRXO.webp";

  // src/photos/074.webp
  var __default75 = "./assets/5TFARIKU.webp";

  // src/photos/075.webp
  var __default76 = "./assets/MY6SWA26.webp";

  // src/photos/076.webp
  var __default77 = "./assets/VA3VL62G.webp";

  // src/photos/077.webp
  var __default78 = "./assets/6HX2J2BT.webp";

  // src/photos/078.webp
  var __default79 = "./assets/NAN2PW3R.webp";

  // src/photos/079.webp
  var __default80 = "./assets/2UA46T5V.webp";

  // src/photos/080.webp
  var __default81 = "./assets/SOZFYHFL.webp";

  // src/photos/081.webp
  var __default82 = "./assets/26SPX2WR.webp";

  // src/photos/082.webp
  var __default83 = "./assets/5WP6KOI4.webp";

  // src/photos/083.webp
  var __default84 = "./assets/EC2Z4COH.webp";

  // src/photos/084.webp
  var __default85 = "./assets/ZPKWUKZY.webp";

  // src/photos/085.webp
  var __default86 = "./assets/NH6IQJS4.webp";

  // src/photos/086.webp
  var __default87 = "./assets/R3AWL5NR.webp";

  // src/photos/087.webp
  var __default88 = "./assets/DGUXVW7G.webp";

  // src/photos/088.webp
  var __default89 = "./assets/Z6MU3DCV.webp";

  // src/photos/089.webp
  var __default90 = "./assets/KPCGPSR2.webp";

  // src/photos/090.webp
  var __default91 = "./assets/ZFDLKATG.webp";

  // src/photos/091.webp
  var __default92 = "./assets/FOS6X4RQ.webp";

  // src/photos/092.webp
  var __default93 = "./assets/7PGGMMKL.webp";

  // src/photos/093.webp
  var __default94 = "./assets/7YOEE5UH.webp";

  // src/photos/094.webp
  var __default95 = "./assets/VDY7DPEF.webp";

  // src/photos/095.webp
  var __default96 = "./assets/TKB2QFWC.webp";

  // src/photos/096.webp
  var __default97 = "./assets/E4PIT574.webp";

  // src/photos/097.webp
  var __default98 = "./assets/3M4LDBUR.webp";

  // src/photos/098.webp
  var __default99 = "./assets/E27NSMED.webp";

  // src/photos/099.webp
  var __default100 = "./assets/LMULAIH3.webp";

  // src/photos/100.webp
  var __default101 = "./assets/RUXWJCH6.webp";

  // src/photos/101.webp
  var __default102 = "./assets/ZAY6ZF5X.webp";

  // src/photos/102.webp
  var __default103 = "./assets/EVFGNGYJ.webp";

  // src/photos/103.webp
  var __default104 = "./assets/YKEXTUXS.webp";

  // src/photos/104.webp
  var __default105 = "./assets/N7JBIGZC.webp";

  // src/photos/105.webp
  var __default106 = "./assets/JCOXNQGF.webp";

  // src/photos/106.webp
  var __default107 = "./assets/ZCGSR6VR.webp";

  // src/photos/107.webp
  var __default108 = "./assets/N43MAHC4.webp";

  // src/photos/108.webp
  var __default109 = "./assets/CUIRBHVV.webp";

  // src/photos/109.webp
  var __default110 = "./assets/A36GIZ2D.webp";

  // src/photos/110.webp
  var __default111 = "./assets/KXHDE5N2.webp";

  // src/photos/111.webp
  var __default112 = "./assets/E4BUNHHD.webp";

  // src/photos/112.webp
  var __default113 = "./assets/FDMRYCHV.webp";

  // src/photos/113.webp
  var __default114 = "./assets/XDVVT25K.webp";

  // src/photos/114.webp
  var __default115 = "./assets/4SKMK6C3.webp";

  // src/photos/115.webp
  var __default116 = "./assets/2IQX756E.webp";

  // src/photos/116.webp
  var __default117 = "./assets/3SZGRQ6D.webp";

  // src/photos/117.webp
  var __default118 = "./assets/LV4OHNIT.webp";

  // src/photos/118.webp
  var __default119 = "./assets/XFXG4SH7.webp";

  // src/photos/119.webp
  var __default120 = "./assets/MYI6W6GK.webp";

  // src/photos/120.webp
  var __default121 = "./assets/WWDHBTCW.webp";

  // src/photos/121.webp
  var __default122 = "./assets/2T77HR7V.webp";

  // src/photos/122.webp
  var __default123 = "./assets/EEBLXUUG.webp";

  // src/photos/123.webp
  var __default124 = "./assets/NE5RXHBS.webp";

  // src/photos/124.webp
  var __default125 = "./assets/J35NYEP3.webp";

  // src/photos/125.webp
  var __default126 = "./assets/OOTSI44W.webp";

  // src/photos/126.webp
  var __default127 = "./assets/53GQMVNE.webp";

  // src/photos/128.webp
  var __default128 = "./assets/Y7RY7IHV.webp";

  // src/photos/129.webp
  var __default129 = "./assets/N2W5YUJG.webp";

  // src/photos/130.webp
  var __default130 = "./assets/FG7X6BYG.webp";

  // src/photos/131.webp
  var __default131 = "./assets/OD2J7YIC.webp";

  // src/photos/132.webp
  var __default132 = "./assets/EWDQZU77.webp";

  // src/photos/133.webp
  var __default133 = "./assets/C5XYRZ5X.webp";

  // src/photos/134.webp
  var __default134 = "./assets/NSVBUUKR.webp";

  // src/photos/135.webp
  var __default135 = "./assets/HHUHXLCW.webp";

  // src/photos/136.webp
  var __default136 = "./assets/VHGGYHQL.webp";

  // src/photos/137.webp
  var __default137 = "./assets/INDEY73O.webp";

  // src/photos/138.webp
  var __default138 = "./assets/IUCRRNZA.webp";

  // src/photos/139.webp
  var __default139 = "./assets/AXDVHOPN.webp";

  // src/photos/140.webp
  var __default140 = "./assets/7YHYP3E5.webp";

  // src/photos/141.webp
  var __default141 = "./assets/CZ27VOAY.webp";

  // src/photos/142.webp
  var __default142 = "./assets/CYPJEAV4.webp";

  // src/photos/143.webp
  var __default143 = "./assets/EWIJSDUA.webp";

  // src/photos/144.webp
  var __default144 = "./assets/KCXX6XLK.webp";

  // src/photos/145.webp
  var __default145 = "./assets/TLKVSQ3C.webp";

  // src/photos/146.webp
  var __default146 = "./assets/XRE3WALN.webp";

  // src/photos/147.webp
  var __default147 = "./assets/EY3IBBDO.webp";

  // src/photos/148.webp
  var __default148 = "./assets/LDENZDXW.webp";

  // src/photos/149.webp
  var __default149 = "./assets/YWXQOMUM.webp";

  // src/photos/150.webp
  var __default150 = "./assets/SGWAPT2W.webp";

  // src/photos/151.webp
  var __default151 = "./assets/LFKLNGRL.webp";

  // src/photos/152.webp
  var __default152 = "./assets/72DDYP3Y.webp";

  // src/photos/153.webp
  var __default153 = "./assets/LQJ5PGV2.webp";

  // src/photos/154.webp
  var __default154 = "./assets/JF6AO7L6.webp";

  // src/photos/155.webp
  var __default155 = "./assets/VILYNYHV.webp";

  // src/photos/156.webp
  var __default156 = "./assets/LIPDDBU5.webp";

  // src/photos/157.webp
  var __default157 = "./assets/E3ZMWP2D.webp";

  // src/photos/158.webp
  var __default158 = "./assets/DVHIHH4J.webp";

  // src/photos/159.webp
  var __default159 = "./assets/OZPQL56C.webp";

  // src/photos/160.webp
  var __default160 = "./assets/BJTVKYCN.webp";

  // src/photos/161.webp
  var __default161 = "./assets/KZQMSLYU.webp";

  // src/photos/162.webp
  var __default162 = "./assets/TAVXA346.webp";

  // src/photos/163.webp
  var __default163 = "./assets/JMBGZIMT.webp";

  // src/photos/164.webp
  var __default164 = "./assets/RSRI3QLN.webp";

  // src/photos/165.webp
  var __default165 = "./assets/LQYTTQLH.webp";

  // src/photos/166.webp
  var __default166 = "./assets/OXSXG7EB.webp";

  // src/photos/167.webp
  var __default167 = "./assets/EQOMLRNU.webp";

  // src/photos/168.webp
  var __default168 = "./assets/ZXOPPHMD.webp";

  // src/photos/169.webp
  var __default169 = "./assets/OV6VJI34.webp";

  // src/photos/170.webp
  var __default170 = "./assets/GKDFQ2RI.webp";

  // src/photos/171.webp
  var __default171 = "./assets/7WCJEELM.webp";

  // src/photos/172.webp
  var __default172 = "./assets/T4WCGDDF.webp";

  // src/photos/173.webp
  var __default173 = "./assets/NCDPXNJN.webp";

  // src/photos/174.webp
  var __default174 = "./assets/XOOF2LVP.webp";

  // src/photos/175.webp
  var __default175 = "./assets/FLHMF4WR.webp";

  // src/photos/176.webp
  var __default176 = "./assets/A7RA5AOI.webp";

  // src/photos/177.webp
  var __default177 = "./assets/YFHSDTWL.webp";

  // src/photos/178.webp
  var __default178 = "./assets/EKZY4E2E.webp";

  // src/photos/179.webp
  var __default179 = "./assets/GBZHL5ZA.webp";

  // src/photos/180.webp
  var __default180 = "./assets/HY2UY5G5.webp";

  // src/photos/181.webp
  var __default181 = "./assets/Y55HLSMA.webp";

  // src/photos/182.webp
  var __default182 = "./assets/XNLTXOGD.webp";

  // src/photos/183.webp
  var __default183 = "./assets/LMPFEYGA.webp";

  // src/photos/184.webp
  var __default184 = "./assets/KRDK45RJ.webp";

  // src/photos/185.webp
  var __default185 = "./assets/N3UFOIUY.webp";

  // src/photos/186.webp
  var __default186 = "./assets/W5ICEW52.webp";

  // src/photos/187.webp
  var __default187 = "./assets/SMWS6P35.webp";

  // src/photos/188.webp
  var __default188 = "./assets/LMJG6BRG.webp";

  // src/photos/189.webp
  var __default189 = "./assets/RS4MCT62.webp";

  // src/photos/190.webp
  var __default190 = "./assets/MST7SFAY.webp";

  // src/photos/191.webp
  var __default191 = "./assets/FUSQJCIV.webp";

  // src/photos/192.webp
  var __default192 = "./assets/VENEKOBB.webp";

  // src/photos/193.webp
  var __default193 = "./assets/ASY44NMK.webp";

  // src/photos/194.webp
  var __default194 = "./assets/DQP4XS3J.webp";

  // src/photos/195.webp
  var __default195 = "./assets/WVDSFXJG.webp";

  // src/photos/196.webp
  var __default196 = "./assets/ZQSQUMCZ.webp";

  // src/photos/197.webp
  var __default197 = "./assets/5NBHMO4Y.webp";

  // src/photos/198.webp
  var __default198 = "./assets/EWD2X2BZ.webp";

  // src/photos/199.webp
  var __default199 = "./assets/4JMQ2QT4.webp";

  // src/photos/200.webp
  var __default200 = "./assets/RZ47PHS4.webp";

  // src/photos/201.webp
  var __default201 = "./assets/Y4YYJFTS.webp";

  // src/photos/202.webp
  var __default202 = "./assets/334IJ732.webp";

  // src/photos/203.webp
  var __default203 = "./assets/G6GIASJU.webp";

  // src/photos/204.webp
  var __default204 = "./assets/PWFDDKNU.webp";

  // src/photos/205.webp
  var __default205 = "./assets/AORHBQTQ.webp";

  // src/photos/206.webp
  var __default206 = "./assets/C2COTMN3.webp";

  // src/photos/207.webp
  var __default207 = "./assets/WPYRHROB.webp";

  // src/photos/208.webp
  var __default208 = "./assets/CO7FQIKP.webp";

  // src/photos/209.webp
  var __default209 = "./assets/7NGKOT2U.webp";

  // src/photos/210.webp
  var __default210 = "./assets/QDQQDKEO.webp";

  // src/photos/211.webp
  var __default211 = "./assets/YHU3TM5W.webp";

  // src/photos/212.webp
  var __default212 = "./assets/KRFYHQRJ.webp";

  // src/photos/213.webp
  var __default213 = "./assets/LYDXWTWE.webp";

  // src/photos/214.webp
  var __default214 = "./assets/S7FXP3DC.webp";

  // src/photos/215.webp
  var __default215 = "./assets/Y5SOVY74.webp";

  // src/photos/216.webp
  var __default216 = "./assets/LGUZJG5D.webp";

  // src/photos/217.webp
  var __default217 = "./assets/VNVV2GPC.webp";

  // src/photos/218.webp
  var __default218 = "./assets/RHWHSQHH.webp";

  // src/photos/219.webp
  var __default219 = "./assets/LZX7XIAR.webp";

  // src/photos/220.webp
  var __default220 = "./assets/HUGC7NAS.webp";

  // src/photos/221.webp
  var __default221 = "./assets/VZZTSCTM.webp";

  // src/photos/222.webp
  var __default222 = "./assets/IRC5POFH.webp";

  // src/photos/223.webp
  var __default223 = "./assets/VYKKUEXD.webp";

  // src/photos/224.webp
  var __default224 = "./assets/BJSAGRM4.webp";

  // src/photos/225.webp
  var __default225 = "./assets/X4HLUUL7.webp";

  // src/photos/226.webp
  var __default226 = "./assets/SABIHEFS.webp";

  // src/photos/227.webp
  var __default227 = "./assets/QN74CW4H.webp";

  // src/photos/228.webp
  var __default228 = "./assets/7O7YZ7TI.webp";

  // src/photos/229.webp
  var __default229 = "./assets/HVSUV6LW.webp";

  // src/photos/230.webp
  var __default230 = "./assets/MRR576RH.webp";

  // src/photos/231.webp
  var __default231 = "./assets/63J2245V.webp";

  // src/photos/232.webp
  var __default232 = "./assets/NQCF4S6E.webp";

  // src/photos/233.webp
  var __default233 = "./assets/N4Z6DEQ3.webp";

  // src/photos/234.webp
  var __default234 = "./assets/CIVEWHQV.webp";

  // src/photos/235.webp
  var __default235 = "./assets/7GKD7BXQ.webp";

  // src/photos/236.webp
  var __default236 = "./assets/VJAZZE24.webp";

  // src/photos/237.webp
  var __default237 = "./assets/CWWOHLWQ.webp";

  // src/photos/238.webp
  var __default238 = "./assets/BF7WMRS3.webp";

  // src/photos/239.webp
  var __default239 = "./assets/IB5UK5PK.webp";

  // src/photos/240.webp
  var __default240 = "./assets/SFPVW7TY.webp";

  // src/photos/241.webp
  var __default241 = "./assets/C2INHOJS.webp";

  // src/photos/242.webp
  var __default242 = "./assets/PGB6X5CL.webp";

  // src/photos/243.webp
  var __default243 = "./assets/ELXSEBT4.webp";

  // src/photos/244.webp
  var __default244 = "./assets/IZOBXJDO.webp";

  // src/photos/245.webp
  var __default245 = "./assets/UOXT5YL5.webp";

  // src/photos/246.webp
  var __default246 = "./assets/47XXGPFQ.webp";

  // src/photos/247.webp
  var __default247 = "./assets/GXSP6IT5.webp";

  // src/photos/248.webp
  var __default248 = "./assets/HYJ4LDS7.webp";

  // src/photos/249.webp
  var __default249 = "./assets/XIEKXBPZ.webp";

  // src/photos/250.webp
  var __default250 = "./assets/NLTNS5TV.webp";

  // src/photos/251.webp
  var __default251 = "./assets/SGCGENMX.webp";

  // src/photos/252.webp
  var __default252 = "./assets/TDLWTLUZ.webp";

  // src/photos/253.webp
  var __default253 = "./assets/N5DDFXW5.webp";

  // src/photos/254.webp
  var __default254 = "./assets/E7C3AHH5.webp";

  // src/photos/255.webp
  var __default255 = "./assets/MFAGEOV7.webp";

  // src/photos/256.webp
  var __default256 = "./assets/XU3XECIY.webp";

  // src/photos/257.webp
  var __default257 = "./assets/ZG4YPGI4.webp";

  // src/photos/258.webp
  var __default258 = "./assets/OOYI23WY.webp";

  // src/photos/259.webp
  var __default259 = "./assets/5WKTRGGH.webp";

  // src/photos/260.webp
  var __default260 = "./assets/DJTKKIXI.webp";

  // src/photos/261.webp
  var __default261 = "./assets/MBGVOD2E.webp";

  // src/photos/262.webp
  var __default262 = "./assets/EM4UOXDY.webp";

  // src/photos/263.webp
  var __default263 = "./assets/SMOCH2K5.webp";

  // src/photos/264.webp
  var __default264 = "./assets/RJMSWKKU.webp";

  // src/photos/265.webp
  var __default265 = "./assets/FRAELTTY.webp";

  // src/photos/270.webp
  var __default266 = "./assets/JTSLLBKS.webp";

  // src/photos/271.webp
  var __default267 = "./assets/SBDFIOKJ.webp";

  // src/photos/272.webp
  var __default268 = "./assets/TNO4HTG2.webp";

  // src/data.ts
  var works = [{ id: 0, src: __default, category: 0, label: "EGC / 1" }, { id: 1, src: __default2, category: 0, label: "EGC / 2" }, { id: 2, src: __default3, category: 0, label: "EGC / 3" }, { id: 3, src: __default4, category: 0, label: "EGC / 4" }, { id: 4, src: __default5, category: 0, label: "EGC / 5" }, { id: 5, src: __default6, category: 0, label: "EGC / 6" }, { id: 6, src: __default7, category: 0, label: "EGC / 7" }, { id: 7, src: __default8, category: 0, label: "EGC / 8" }, { id: 8, src: __default9, category: 0, label: "EGC / 9" }, { id: 9, src: __default10, category: 0, label: "EGC / 10" }, { id: 10, src: __default11, category: 0, label: "EGC / 11" }, { id: 11, src: __default12, category: 0, label: "EGC / 12" }, { id: 12, src: __default13, category: 0, label: "EGC / 13" }, { id: 13, src: __default14, category: 0, label: "EGC / 14" }, { id: 14, src: __default15, category: 0, label: "EGC / 15" }, { id: 15, src: __default16, category: 0, label: "EGC / 16" }, { id: 16, src: __default17, category: 0, label: "EGC / 17" }, { id: 17, src: __default18, category: 0, label: "Artistical / 1" }, { id: 18, src: __default19, category: 0, label: "Artistical / 2" }, { id: 19, src: __default20, category: 0, label: "Artistical / 3" }, { id: 20, src: __default21, category: 0, label: "Artistical / 4" }, { id: 21, src: __default22, category: 0, label: "Artistical / 5" }, { id: 22, src: __default23, category: 0, label: "Artistical / 6" }, { id: 23, src: __default24, category: 0, label: "Artistical / 7" }, { id: 24, src: __default25, category: 0, label: "Artistical / 8" }, { id: 25, src: __default26, category: 0, label: "Artistical / 9" }, { id: 26, src: __default27, category: 0, label: "Artistical / 10" }, { id: 27, src: __default28, category: 0, label: "Artistical / 11" }, { id: 28, src: __default29, category: 0, label: "Artistical / 12" }, { id: 29, src: __default30, category: 0, label: "Education campaigns / 1" }, { id: 30, src: __default31, category: 0, label: "Education campaigns / 2" }, { id: 31, src: __default32, category: 0, label: "Education campaigns / 3" }, { id: 32, src: __default33, category: 0, label: "Education campaigns / 4" }, { id: 33, src: __default34, category: 0, label: "Education campaigns / 5" }, { id: 34, src: __default35, category: 0, label: "Education campaigns / 6" }, { id: 35, src: __default36, category: 0, label: "Education campaigns / 7" }, { id: 36, src: __default37, category: 0, label: "Education campaigns / 8" }, { id: 37, src: __default38, category: 0, label: "Globe Academy / 1" }, { id: 38, src: __default39, category: 0, label: "Globe Academy / 2" }, { id: 39, src: __default40, category: 0, label: "Globe Academy / 3" }, { id: 40, src: __default41, category: 0, label: "Globe Academy / 4" }, { id: 41, src: __default42, category: 0, label: "Globe Academy / 5" }, { id: 42, src: __default43, category: 0, label: "Globe Academy / 6" }, { id: 43, src: __default44, category: 0, label: "Globe Academy / 7" }, { id: 44, src: __default45, category: 0, label: "Globe Academy / 8" }, { id: 45, src: __default46, category: 0, label: "Globe Academy / 9" }, { id: 46, src: __default47, category: 0, label: "Globe Academy / 10" }, { id: 47, src: __default48, category: 0, label: "Globe Academy / 11" }, { id: 48, src: __default49, category: 0, label: "Globe Academy / 12" }, { id: 49, src: __default50, category: 0, label: "Globe Academy / 13" }, { id: 50, src: __default51, category: 0, label: "Globe Academy / 14" }, { id: 51, src: __default52, category: 0, label: "Globe Academy / 15" }, { id: 52, src: __default53, category: 0, label: "Globe Academy / 16" }, { id: 53, src: __default54, category: 0, label: "Globe Academy / 17" }, { id: 54, src: __default55, category: 0, label: "Globe Academy / 18" }, { id: 55, src: __default56, category: 0, label: "Globe Academy / 19" }, { id: 56, src: __default57, category: 0, label: "Globe Academy / 20" }, { id: 57, src: __default58, category: 0, label: "Globe Academy / 21" }, { id: 58, src: __default59, category: 0, label: "Globe Academy / 22" }, { id: 59, src: __default60, category: 0, label: "Globe Academy / 23" }, { id: 60, src: __default61, category: 0, label: "Globe Academy / 24" }, { id: 61, src: __default62, category: 0, label: "Globe Academy / 25" }, { id: 62, src: __default63, category: 0, label: "Globe Academy / 26" }, { id: 63, src: __default64, category: 0, label: "Globe Academy / 27" }, { id: 64, src: __default65, category: 0, label: "Dar Al-Athar / 1" }, { id: 65, src: __default66, category: 0, label: "Dar Al-Athar / 2" }, { id: 66, src: __default67, category: 0, label: "Dar Al-Athar / 3" }, { id: 67, src: __default68, category: 0, label: "Dar Al-Athar / 4" }, { id: 68, src: __default69, category: 0, label: "Dar Al-Athar / 5" }, { id: 69, src: __default70, category: 0, label: "Dar Al-Athar / 6" }, { id: 70, src: __default71, category: 0, label: "Dar Al-Athar / 7" }, { id: 71, src: __default72, category: 0, label: "Dar Al-Athar / 8" }, { id: 72, src: __default73, category: 0, label: "Dar Al-Athar / 9" }, { id: 73, src: __default74, category: 0, label: "Dar Al-Athar / 10" }, { id: 74, src: __default75, category: 0, label: "Dar Al-Athar / 11" }, { id: 75, src: __default76, category: 0, label: "Dar Al-Athar / 12" }, { id: 76, src: __default77, category: 0, label: "Dar Al-Athar / 13" }, { id: 77, src: __default78, category: 0, label: "Dar Al-Athar / 14" }, { id: 78, src: __default79, category: 0, label: "Dar Al-Athar / 15" }, { id: 79, src: __default80, category: 0, label: "Dar Al-Athar / 16" }, { id: 80, src: __default81, category: 0, label: "Dar Al-Athar / 17" }, { id: 81, src: __default82, category: 0, label: "Dar Al-Athar / 18" }, { id: 82, src: __default83, category: 0, label: "Dar Al-Athar / 19" }, { id: 83, src: __default84, category: 0, label: "Dar Al-Hijab / 1" }, { id: 84, src: __default85, category: 0, label: "Dar Al-Hijab / 2" }, { id: 85, src: __default86, category: 0, label: "Dar Al-Hijab / 3" }, { id: 86, src: __default87, category: 0, label: "Dar Al-Hijab / 4" }, { id: 87, src: __default88, category: 0, label: "Dar Al-Hijab / 5" }, { id: 88, src: __default89, category: 0, label: "Dar Al-Hijab / 6" }, { id: 89, src: __default90, category: 0, label: "Dar Al-Hijab / 7" }, { id: 90, src: __default91, category: 0, label: "Dar Al-Hijab / 8" }, { id: 91, src: __default92, category: 0, label: "Dar Al-Hijab / 9" }, { id: 92, src: __default93, category: 0, label: "Dar Al-Hijab / 10" }, { id: 93, src: __default94, category: 0, label: "Dar Al-Hijab / 11" }, { id: 94, src: __default95, category: 0, label: "Dar Al-Hijab / 12" }, { id: 102, src: __default103, category: 0, label: "Care Product / 1" }, { id: 104, src: __default105, category: 0, label: "Care Product / 2" }, { id: 106, src: __default107, category: 0, label: "Care Product / 3" }, { id: 108, src: __default109, category: 0, label: "Care Product / 4" }, { id: 110, src: __default111, category: 0, label: "Care Product / 5" }, { id: 111, src: __default112, category: 0, label: "Care Product / 6" }, { id: 112, src: __default113, category: 0, label: "Care Product / 7" }, { id: 113, src: __default114, category: 0, label: "Care Product / 8" }, { id: 114, src: __default115, category: 0, label: "Care Product / 9" }, { id: 115, src: __default116, category: 1, label: "Aqua Premium / 1" }, { id: 118, src: __default119, category: 1, label: "Aqua Premium / 2" }, { id: 119, src: __default120, category: 1, label: "Aqua Premium / 3" }, { id: 120, src: __default121, category: 1, label: "Aqua Premium / 4" }, { id: 121, src: __default122, category: 1, label: "Aqua Premium / 5" }, { id: 122, src: __default123, category: 1, label: "Aqua Premium / 6" }, { id: 124, src: __default125, category: 1, label: "Aqua Premium / 7" }, { id: 125, src: __default126, category: 1, label: "Street dog awareness / 1" }, { id: 126, src: __default127, category: 1, label: "Street dog awareness / 2" }, { id: 128, src: __default128, category: 1, label: "Street dog awareness / 3" }, { id: 129, src: __default129, category: 1, label: "Dar Al-Hijab / Back to school / 1" }, { id: 130, src: __default130, category: 1, label: "Dar Al-Hijab / Back to school / 2" }, { id: 131, src: __default131, category: 1, label: "Dar Al-Hijab / Back to school / 3" }, { id: 132, src: __default132, category: 1, label: "Dar Al-Hijab / Back to school / 4" }, { id: 133, src: __default133, category: 1, label: "Dar Al-Hijab / Back to school / 5" }, { id: 134, src: __default134, category: 1, label: "Dar Al-Hijab / Back to school / 6" }, { id: 135, src: __default135, category: 1, label: "Dar Al-Hijab / Back to school / 7" }, { id: 136, src: __default136, category: 1, label: "Dar Al-Hijab / Back to school / 8" }, { id: 137, src: __default137, category: 1, label: "Dar Al-Hijab / Back to school / 9" }, { id: 138, src: __default138, category: 1, label: "Dar Al-Hijab / Back to school / 10" }, { id: 141, src: __default141, category: 2, label: "Care Product / National Day campaign / 1" }, { id: 142, src: __default142, category: 2, label: "Care Product / National Day campaign / 2" }, { id: 143, src: __default143, category: 2, label: "Care Product / National Day campaign / 3" }, { id: 144, src: __default144, category: 2, label: "Care Product / National Day campaign / 4" }, { id: 145, src: __default145, category: 2, label: "Care Product / National Day campaign / 5" }, { id: 146, src: __default146, category: 2, label: "Care Product / National Day campaign / 6" }, { id: 147, src: __default147, category: 2, label: "Care Product / National Day campaign / 7" }, { id: 148, src: __default148, category: 2, label: "Care Product / National Day campaign / 8" }, { id: 149, src: __default149, category: 2, label: "Care Product / National Day campaign / 9" }, { id: 150, src: __default150, category: 2, label: "Care Product / National Day campaign / 10" }, { id: 151, src: __default151, category: 2, label: "Care Product / National Day campaign / 11" }, { id: 152, src: __default152, category: 2, label: "Care Product / National Day campaign / 12" }, { id: 153, src: __default153, category: 2, label: "Care Product / National Day campaign / 13" }, { id: 154, src: __default154, category: 2, label: "Care Product / National Day campaign / 14" }, { id: 155, src: __default155, category: 2, label: "Care Product / National Day campaign / 15" }, { id: 156, src: __default156, category: 2, label: "Care Product / National Day campaign / 16" }, { id: 157, src: __default157, category: 2, label: "Care Product / 1" }, { id: 158, src: __default158, category: 2, label: "Care Product / 2" }, { id: 159, src: __default159, category: 2, label: "Care Product / 3" }, { id: 160, src: __default160, category: 2, label: "Care Product / 4" }, { id: 161, src: __default161, category: 2, label: "Care Product / 5" }, { id: 162, src: __default162, category: 2, label: "Care Product / 6" }, { id: 163, src: __default163, category: 2, label: "Care Product / 7" }, { id: 164, src: __default164, category: 2, label: "Care Product / 8" }, { id: 165, src: __default165, category: 2, label: "Care Product / 9" }, { id: 166, src: __default166, category: 2, label: "Care Product / 10" }, { id: 167, src: __default167, category: 2, label: "Care Product / 11" }, { id: 168, src: __default168, category: 2, label: "Care Product / 12" }, { id: 169, src: __default169, category: 2, label: "Care Product / 13" }, { id: 170, src: __default170, category: 2, label: "Care Product / 14" }, { id: 171, src: __default171, category: 2, label: "Care Product / 15" }, { id: 172, src: __default172, category: 2, label: "Care Product / 16" }, { id: 173, src: __default173, category: 2, label: "Care Product / 17" }, { id: 177, src: __default177, category: 3, label: "Book Design / 1" }, { id: 178, src: __default178, category: 3, label: "Business Card Design / 1" }, { id: 179, src: __default179, category: 3, label: "Business Card Design / 2" }, { id: 182, src: __default182, category: 3, label: "Flyers, Brochures & Magazines / 1" }, { id: 183, src: __default183, category: 3, label: "Flyers, Brochures & Magazines / 2" }, { id: 184, src: __default184, category: 3, label: "Flyers, Brochures & Magazines / 3" }, { id: 185, src: __default185, category: 3, label: "Flyers, Brochures & Magazines / 4" }, { id: 186, src: __default186, category: 3, label: "Flyers, Brochures & Magazines / 5" }, { id: 187, src: __default187, category: 3, label: "Flyers, Brochures & Magazines / 6" }, { id: 188, src: __default188, category: 3, label: "Flyers, Brochures & Magazines / 7" }, { id: 189, src: __default189, category: 3, label: "Flyers, Brochures & Magazines / 8" }, { id: 190, src: __default190, category: 3, label: "Flyers, Brochures & Magazines / 9" }, { id: 191, src: __default191, category: 3, label: "Flyers, Brochures & Magazines / 10" }, { id: 192, src: __default192, category: 3, label: "Flyers, Brochures & Magazines / 11" }, { id: 193, src: __default193, category: 3, label: "Flyers, Brochures & Magazines / 12" }, { id: 194, src: __default194, category: 3, label: "Flyers, Brochures & Magazines / 13" }, { id: 215, src: __default215, category: 0, label: "MKL / 1" }, { id: 216, src: __default216, category: 0, label: "MKL / 2" }, { id: 217, src: __default217, category: 0, label: "MKL / 3" }, { id: 218, src: __default218, category: 0, label: "Butterfly / 1" }, { id: 219, src: __default219, category: 0, label: "Butterfly / 2" }, { id: 220, src: __default220, category: 0, label: "Butterfly / 3" }, { id: 221, src: __default221, category: 0, label: "Butterfly / 4" }, { id: 222, src: __default222, category: 0, label: "Butterfly / 5" }, { id: 223, src: __default223, category: 0, label: "Butterfly / 6" }, { id: 224, src: __default224, category: 0, label: "Halfa & Khoos / 1" }, { id: 225, src: __default225, category: 0, label: "Halfa & Khoos / 2" }, { id: 226, src: __default226, category: 0, label: "Halfa & Khoos / 3" }, { id: 227, src: __default227, category: 0, label: "Halfa & Khoos / 4" }, { id: 228, src: __default228, category: 0, label: "Halfa & Khoos / 5" }, { id: 229, src: __default229, category: 0, label: "Halfa & Khoos / 6" }, { id: 231, src: __default231, category: 0, label: "Dr. Dareen Adam / 1" }, { id: 232, src: __default232, category: 0, label: "Dr. Dareen Adam / 2" }, { id: 233, src: __default233, category: 0, label: "Dr. Dareen Adam / 3" }, { id: 234, src: __default234, category: 0, label: "Dr. Dareen Adam / 4" }];
  var logos = [{ id: 240, src: __default240 }, { id: 241, src: __default241 }, { id: 242, src: __default242 }, { id: 243, src: __default243 }, { id: 244, src: __default244 }, { id: 245, src: __default245 }, { id: 246, src: __default246 }, { id: 247, src: __default247 }, { id: 248, src: __default248 }, { id: 249, src: __default249 }, { id: 250, src: __default250 }, { id: 251, src: __default251 }, { id: 252, src: __default252 }, { id: 253, src: __default253 }, { id: 254, src: __default254 }, { id: 255, src: __default255 }, { id: 256, src: __default256 }, { id: 257, src: __default257 }, { id: 258, src: __default258 }, { id: 259, src: __default259 }, { id: 260, src: __default260 }, { id: 261, src: __default261 }, { id: 262, src: __default262 }, { id: 263, src: __default263 }, { id: 264, src: __default264 }, { id: 265, src: __default265 }];
  var portrait = __default268;
  var landscape = __default267;
  var logo = __default266;


  function Fo(p){return import_react30.createElement('div',null,import_react30.createElement('h1',null,p.title),import_react30.createElement('p',null,p.intro));}
  function Jo(p){return import_react30.createElement('p',null,p.children);}
  function rn(p){return import_react30.createElement('a',{href:p.href},p.children);}
  function Je2(p){return import_react30.createElement('button',{type:'button',onClick:p.onClick,'aria-label':p.label},'×');}
  function xe2(p){const [i,setI]=import_react30.useState(p.start||0);return import_react30.createElement('div',{style:{position:'fixed',inset:0,zIndex:9999,background:'#05080ff5',display:'flex',alignItems:'center',justifyContent:'center'}},import_react30.createElement('img',{src:p.photos[i].src,alt:p.photos[i].alt,style:{maxWidth:'92vw',maxHeight:'84vh',objectFit:'contain'}}),import_react30.createElement('button',{onClick:p.onClose,style:{position:'absolute',right:20,top:20,color:'white',background:'#14213b',padding:15}},'Close'),import_react30.createElement('button',{onClick:()=>setI((i+1)%p.photos.length),style:{position:'absolute',right:20,bottom:20,color:'white',background:'#14213b',padding:15}},'Next'));}

  // src/App.tsx
  var import_jsx_runtime27 = __toESM(require_jsx_runtime());
  var cvUrl = "https://drive.google.com/file/d/1Wbbt65Dyp6I2ybiiccWegzwFbn3KCBCF/view";
  var cats = ["Social media", "Advertising", "Web banners", "Print"];
  var catTag = ["SOCIAL", "ADS", "BANNERS", "PRINT", "LAB"];
  var catDesc = [
    "Social-first stories. Brand-first thinking.",
    "Ideas built to stop the scroll.",
    "Small spaces. Strong impressions.",
    "From the screen to the real world.",
    "Different briefs. One considered approach."
  ];
  var floats = [
    { kind: "ps", x: 6, y: 14, s: 86, d: 1.7, a: "a", delay: 0, label: "Photoshop" },
    { kind: "ai", x: 82, y: 8, s: 94, d: 2.5, a: "b", delay: 0.7, label: "Illustrator" },
    { kind: "spark", x: 89, y: 52, s: 68, d: 3.3, a: "c", delay: 1.2, label: "AI tools" },
    { kind: "ai", x: 2, y: 58, s: 62, d: 2.9, a: "c", delay: 0.4, label: "Illustrator" },
    { kind: "ps", x: 76, y: 80, s: 54, d: 2.1, a: "a", delay: 1, label: "Photoshop" },
    { kind: "spark", x: 13, y: 85, s: 46, d: 1.3, a: "b", delay: 1.5, label: "AI tools" }
  ];
  function ToolMark({ kind }) {
    if (kind === "ps") return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "hv2-tool hv2-tool-ps", "aria-hidden": "true", children: "Ps" });
    if (kind === "ai") return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "hv2-tool hv2-tool-ai", "aria-hidden": "true", children: "Ai" });
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "hv2-tool hv2-tool-spark", "aria-hidden": "true", children: "\u2726" });
  }
  function Reveal({ text }) {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "hv2-words", "aria-label": text, children: text.split(" ").map((w2, i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { "aria-hidden": "true", style: { "--i": i }, children: w2 }, i)) });
  }
  function WA() {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "1.6", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("path", { d: "M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8A8.5 8.5 0 1 1 20.5 11.7Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("path", { d: "M8 7.5c-.6 0-.9.7-.7 1.5.5 2.7 2.6 4.9 5.2 5.8 1.1.4 2 .2 2.5-.7l-2-1.3-.8.6c-1.5-.6-2.6-1.7-3.1-3.1l.6-.8L8.8 7.5Z" })
    ] });
  }
  function App() {
    const [cat, setCat] = (0, import_react30.useState)(-1);
    const [viewer, setViewer] = (0, import_react30.useState)(null);
    const [library, setLibrary] = (0, import_react30.useState)(null);
    const root = (0, import_react30.useRef)(null);
    const dialog = (0, import_react30.useRef)(null);
    const [sound, setSound] = (0, import_react30.useState)(true);
    const soundRef = (0, import_react30.useRef)(sound);
    soundRef.current = sound;
    const audioRef = (0, import_react30.useRef)(null);
    const lastReveal = (0, import_react30.useRef)(0);
    const sfx = (name) => {
      if (!soundRef.current || name === "none") return;
      try {
        const gesture = name !== "reveal";
        let ctx = audioRef.current;
        if (!ctx) {
          if (!gesture) return;
          ctx = audioRef.current = new AudioContext();
        }
        if (ctx.state !== "running") {
          if (!gesture) return;
          ctx.resume().then(() => root.current?.setAttribute("data-audio-state", ctx.state));
        } else {
          root.current?.setAttribute("data-audio-state", ctx.state);
        }
        root.current?.setAttribute("data-last-sfx", name);
        const t = ctx.currentTime;
        const tone = (f0, f1, at3, dur, vol, type = "sine") => {
          const o = ctx.createOscillator(), g = ctx.createGain();
          o.type = type;
          o.frequency.setValueAtTime(f0, at3);
          if (f1 > 0) o.frequency.exponentialRampToValueAtTime(f1, at3 + dur * 0.75);
          g.gain.setValueAtTime(1e-4, at3);
          g.gain.exponentialRampToValueAtTime(vol, at3 + 0.012);
          g.gain.exponentialRampToValueAtTime(1e-4, at3 + dur);
          o.connect(g);
          g.connect(ctx.destination);
          o.start(at3);
          o.stop(at3 + dur + 0.05);
        };
        const whoosh = (at3, dur, vol, f0, f1) => {
          const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
          const buf = ctx.createBuffer(1, len, ctx.sampleRate);
          const d = buf.getChannelData(0);
          for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
          const src = ctx.createBufferSource();
          src.buffer = buf;
          const bp = ctx.createBiquadFilter();
          bp.type = "bandpass";
          bp.Q.value = 1.1;
          bp.frequency.setValueAtTime(f0, at3);
          bp.frequency.exponentialRampToValueAtTime(Math.max(40, f1), at3 + dur);
          const g = ctx.createGain();
          g.gain.setValueAtTime(1e-4, at3);
          g.gain.exponentialRampToValueAtTime(vol, at3 + 0.03);
          g.gain.exponentialRampToValueAtTime(1e-4, at3 + dur);
          src.connect(bp);
          bp.connect(g);
          g.connect(ctx.destination);
          src.start(at3);
          src.stop(at3 + dur);
        };
        switch (name) {
          case "click":
            tone(620, 434, t, 0.16, 0.025);
            tone(930, 651, t + 0.025, 0.16, 0.025);
            break;
          case "open":
            tone(440, 880, t, 0.14, 0.02);
            tone(660, 990, t + 0.05, 0.12, 0.014);
            break;
          case "close":
            tone(880, 440, t, 0.13, 0.018);
            break;
          case "swoosh":
            whoosh(t, 0.26, 0.06, 420, 2600);
            tone(300, 140, t, 0.2, 0.015, "triangle");
            break;
          case "swipe":
            whoosh(t, 0.18, 0.05, 2400, 650);
            break;
          case "reveal": {
            const now = Date.now();
            if (now - lastReveal.current < 350) return;
            lastReveal.current = now;
            tone(520, 700, t, 0.09, 8e-3);
            break;
          }
        }
      } catch {
      }
    };
    (0, import_react30.useEffect)(() => {
      const nodes = root.current?.querySelectorAll(".hv2-reveal, h2:has(.hv2-words)");
      if (!nodes) return;
      const observer = new IntersectionObserver((entries) => entries.forEach((e2) => {
        if (e2.isIntersecting) {
          (e2.target.querySelector(".hv2-words") || e2.target).classList.add("hv2-in");
          observer.unobserve(e2.target);
          sfx("reveal");
        }
      }), { threshold: 0.06 });
      nodes.forEach((n) => observer.observe(n));
      return () => observer.disconnect();
    }, [cat]);
    (0, import_react30.useEffect)(() => {
      if (library !== null) {
        dialog.current?.showModal();
      } else {
        dialog.current?.close();
      }
    }, [library]);
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("main", { lang: "en", dir: "ltr", className: "portfolio-frame", "data-width": "fluid", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-site", ref: root, onClick: (e2) => {
      const el2 = e2.target;
      const named = el2.closest("[data-sfx]");
      if (named) sfx(named.dataset.sfx || "click");
      else if (el2.closest("button,a")) sfx("click");
      const a = el2.closest("a");
      if (a?.hash && a.origin === location.origin) {
        const section = document.getElementById(decodeURIComponent(a.hash.slice(1)));
        if (section) {
          e2.preventDefault();
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-accessible-head", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Fo, { title: "Hamed Ashraf", intro: "Graphic design that goes beyond the visual." }) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("nav", { className: "hv2-nav", "aria-label": "Portfolio navigation", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: "#home", className: "hv2-brand", "aria-label": "Hamed Ashraf home", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: logo, alt: "HA / Hamed Ashraf" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-navlinks", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: "#work", children: "Work" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: "#tools", children: "Toolkit" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: "#about", children: "About" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: "#clients", children: "Clients" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("button", { type: "button", className: "hv2-sound", "data-sfx": "none", "aria-pressed": sound, "aria-label": sound ? "Mute sounds" : "Enable sounds", onClick: () => {
          const next = !sound;
          setSound(next);
          soundRef.current = next;
          if (next) sfx("click");
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { "aria-hidden": "true", children: sound ? "\u25D6))" : "\u25D6\xD7" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "hv2-soundlabel", children: [
            "Sound ",
            sound ? "on" : "off"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { className: "hv2-nav-cta", href: "#contact", children: [
          "Let's talk ",
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u2197" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { id: "home", className: "hv2-hero", onPointerMove: (e2) => {
        if (e2.pointerType === "mouse") {
          const r = e2.currentTarget.getBoundingClientRect();
          e2.currentTarget.style.setProperty("--mx", `${(e2.clientX - r.left - r.width / 2) / 40}px`);
          e2.currentTarget.style.setProperty("--my", `${(e2.clientY - r.top - r.height / 2) / 40}px`);
        }
      }, onPointerLeave: (e2) => {
        e2.currentTarget.style.setProperty("--mx", "0px");
        e2.currentTarget.style.setProperty("--my", "0px");
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-hero-glow", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-hero-grid", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-eyebrow hv2-rise", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "hv2-dot" }),
          "GRAPHIC DESIGNER \xB7 PORTFOLIO 2027"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-stage", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("h1", { className: "hv2-name", "aria-label": "Hamed Ashraf", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { "aria-hidden": "true", className: "hv2-name-a", children: "HAMED" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { "aria-hidden": "true", className: "hv2-name-b", children: "ASHRAF" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-disc hv2-rise", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-disc-spin", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-disc-spin2", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-disc-dash", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-disc-dash2", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-disc-orbit", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("i", {}) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: portrait, alt: "Portrait of Hamed Ashraf in a black jacket with blue edge lighting" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-disc-tag", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "hv2-dot" }),
              "BEYOND THE VISUAL"
            ] })
          ] }),
          floats.map((f2, i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-float hv2-rise", title: f2.label, style: { left: `${f2.x}%`, top: `${f2.y}%`, width: f2.s, height: f2.s, fontSize: Math.round(f2.s * 0.42), "--d": f2.d, animationDelay: `${0.5 + i * 0.12}s` }, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: `hv2-float-in hv2-anim-${f2.a}`, style: { animationDelay: `${f2.delay}s` }, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(ToolMark, { kind: f2.kind }) }) }, i)),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { className: "hv2-side hv2-side-l hv2-rise", children: [
            "Design that floats",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
            "between idea",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
            "and impact."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { className: "hv2-side hv2-side-r hv2-rise", children: [
            "BASED IN EGYPT",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
            "WORKING",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
            "EVERYWHERE"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-hero-bar hv2-rise", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-hero-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { href: "#work", className: "hv2-cta", children: [
              "Explore the work ",
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u2193" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { href: cvUrl, className: "hv2-cv", target: "_blank", rel: "noopener noreferrer", children: [
              "Download CV ",
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u2193" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-micro", children: "PHOTOSHOP \xB7 ILLUSTRATOR \xB7 AI-ASSISTED DESIGN" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-ticker", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: Array.from({ length: 4 }, (_2, i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { children: [
        "HAMED ASHRAF ",
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "\u2726" }),
        " BEYOND THE VISUAL ",
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "\u2726" }),
        " PORTFOLIO 2027 ",
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "\u2726" }),
        " 3 YEARS OF EXPERIENCE ",
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "\u2726" }),
        " "
      ] }, i)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { id: "work", className: "hv2-section hv2-work", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-kicker", children: "01 / THE WORK" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-work-top", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Reveal, { text: "Every pixel, on purpose." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { children: [
            works.length,
            " designs across four disciplines.",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
            "Swipe through each world, or open its full collection."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-filters", role: "group", "aria-label": "Filter work by category", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("button", { type: "button", "data-sfx": "swoosh", "aria-pressed": cat === -1, onClick: () => setCat(-1), children: [
            "All work ",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: works.length })
          ] }),
          cats.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("button", { type: "button", "data-sfx": "swoosh", "aria-pressed": cat === i, onClick: () => setCat(i), children: [
            c,
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: works.filter((w2) => w2.category === i).length })
          ] }, c))
        ] }),
        cats.map((c, i) => {
          if (cat !== -1 && cat !== i) return null;
          const list = works.filter((w2) => w2.category === i);
          return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Gallery, { category: i, title: c, list, onOpen: (index) => setViewer({ list, index }), onLibrary: () => setLibrary(i) }, c);
        })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { id: "tools", className: "hv2-section hv2-tools", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-kicker", children: "02 / THE TOOLKIT" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Reveal, { text: "The tools behind the pixels." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-tool-grid", children: [
          { k: "ps", n: "Photoshop", t: "Retouching, compositing and campaign visuals built layer by layer." },
          { k: "ai", n: "Illustrator", t: "Vector artwork, logos and brand systems that scale to any size." },
          { k: "spark", n: "AI-assisted design", t: "Generative tools that widen exploration and speed up ideas." }
        ].map((tool, i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-tool-card hv2-reveal", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "hv2-tool-index", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "hv2-toolkit-mark", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(ToolMark, { kind: tool.k }) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { children: tool.n }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: tool.t })
        ] }, tool.n)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("section", { id: "about", className: "hv2-section hv2-about", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-about-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-about-copy", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-kicker", children: "03 / A LITTLE ABOUT ME" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Reveal, { text: "Good design starts with a different way of seeing." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: "I'm Hamed Ashraf, a Graphic Designer with 3 years of experience creating impactful visuals for brands and businesses across Egypt, the Gulf, and Libya." }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: "I specialize in social media design, advertising, and print design, combining creativity, strategic thinking, and AI-assisted tools to bring ideas to life." }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-stats", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "Years of experience" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "Design disciplines" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: works.length }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "Designs to explore" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: logos.length }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "Brands and counting" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-about-photo hv2-reveal", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: landscape, alt: "Hamed Ashraf, graphic designer", loading: "lazy" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "THE PERSON BEHIND THE PIXELS" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { id: "clients", className: "hv2-section hv2-clients", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-kicker", children: "04 / BRANDS I'VE WORKED WITH" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Reveal, { text: "Different brands. Shared ambition." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "hv2-subtitle", children: "A selection of the brands and businesses behind the work." }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-marquee", role: "region", "aria-label": "Client brand logos", children: [0, 1].map((row) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: `hv2-marquee-row${row === 1 ? " hv2-marquee-rev" : ""}`, "aria-hidden": row === 1, children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-marquee-set", children: logos.map((l2, i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-logo-tile", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: l2.src, alt: row === 0 ? `Client brand logo ${i + 1}` : "", loading: "lazy" }) }, l2.id)) }, copy)) }, row)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { id: "contact", className: "hv2-section hv2-contact", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-kicker", children: "05 / LET'S MAKE SOMETHING MATTER" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Reveal, { text: "Your next big idea starts with a hello." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { className: "hv2-contact-main", href: "mailto:hamedashraf993@gmail.com", children: [
          "Let's talk ",
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u2197" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { className: "hv2-contact-cv", href: cvUrl, target: "_blank", rel: "noopener noreferrer", children: [
          "Download CV ",
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\xB7 English, PDF \u2193" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-contact-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "EMAIL" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(rn, { href: "mailto:hamedashraf993@gmail.com", children: "hamedashraf993@gmail.com" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "PHONE" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(rn, { href: "tel:+201103908808", children: "+20 110 390 8808" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "LOCATION" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: "Menoufia, Egypt" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-socials", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { href: "https://wa.me/201103908808", target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(WA, {}),
            " WhatsApp \u2197"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: "https://www.behance.net/hamedashraf2242", target: "_blank", rel: "noreferrer", children: "Behance \u2197" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: "https://www.instagram.com/hamed.visual", target: "_blank", rel: "noreferrer", children: "Instagram \u2197" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: "https://www.facebook.com/share/1LxfJ4MjG5/", target: "_blank", rel: "noreferrer", children: "Facebook \u2197" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("footer", { className: "hv2-footer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: logo, alt: "Hamed Ashraf" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: "\xA9 2026 Hamed Ashraf. Beyond the visual." }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: "#home", children: "Back to top \u2191" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-closingwrap", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Jo, { children: "Graphic design, with intent." }) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("dialog", { ref: dialog, className: "hv2-library", onCancel: () => setLibrary(null), children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Je2, { onClick: () => setLibrary(null), label: "Close full collection" }),
        library !== null && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-kicker", children: "THE COMPLETE COLLECTION" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { children: cats[library] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { children: [
            works.filter((w2) => w2.category === library).length,
            " designs \xB7 Tap any image to explore"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "hv2-library-grid", children: works.filter((w2) => w2.category === library).map((w2, j) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("button", { type: "button", "data-sfx": "open", onClick: () => setViewer({ list: works.filter((x2) => x2.category === library), index: j }), children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: w2.src, alt: `${w2.client}, design ${j + 1}`, loading: "lazy" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { children: [
              w2.client,
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: String(j + 1).padStart(2, "0") })
            ] })
          ] }, w2.id)) })
        ] })
      ] }),
      viewer && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(xe2, { photos: viewer.list.map((w2, j) => ({ src: w2.src, alt: `${w2.client}, design ${j + 1}`, fit: "contain" })), start: viewer.index, title: viewer.list[0] ? cats[viewer.list[0].category] : "Work", onClose: () => setViewer(null) })
    ] }) });
  }
  function Gallery({ category, title, list, onOpen, onLibrary }) {
    const rail = (0, import_react30.useRef)(null);
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-gallery hv2-reveal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-gallery-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("h3", { children: [
            title,
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("sup", { children: String(list.length).padStart(2, "0") })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: catDesc[category] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-gallery-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { type: "button", className: "hv2-view-all", "data-sfx": "open", onClick: onLibrary, children: "Full collection \u2197" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { type: "button", "data-sfx": "swipe", "aria-label": `Previous ${title} designs`, onClick: () => rail.current?.scrollBy({ left: -(rail.current?.clientWidth || 600) * 0.8, behavior: "smooth" }), children: "\u2190" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { type: "button", "data-sfx": "swipe", "aria-label": `Next ${title} designs`, onClick: () => rail.current?.scrollBy({ left: (rail.current?.clientWidth || 600) * 0.8, behavior: "smooth" }), children: "\u2192" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: `hv2-rail${category === 2 ? " hv2-banner-rail" : category === 1 ? " hv2-ad-rail" : ""}`, ref: rail, children: list.map((w2, j) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("button", { type: "button", "data-sfx": "open", className: "hv2-card hv2-rail-card", style: { animationDelay: `${Math.min(j, 22) * 35}ms` }, onClick: () => onOpen(j), "aria-label": `Open ${w2.client}, design ${j + 1} of ${list.length}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: w2.src, alt: `${w2.client}, design ${j + 1}`, loading: "lazy" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "hv2-card-tag", children: catTag[w2.category] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "hv2-card-name", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: w2.client }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: String(j + 1).padStart(2, "0") })
        ] })
      ] }, w2.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hv2-rail-hint", children: [
        "SCROLL OR SWIPE TO EXPLORE ",
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u27F7" })
      ] })
    ] });
  }

  // src/main.tsx
  var import_jsx_runtime28 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime28.jsx)(App, {}));
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-BV7QT456.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
