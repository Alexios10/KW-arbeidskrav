var CE = Object.defineProperty;
var RE = (l, t, i) =>
  t in l
    ? CE(l, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
    : (l[t] = i);
var O0 = (l, t, i) => RE(l, typeof t != "symbol" ? t + "" : t, i);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const c of o.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = i(r);
    fetch(r.href, o);
  }
})();
function bE(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var vf = { exports: {} },
  Et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var D0;
function AE() {
  if (D0) return Et;
  D0 = 1;
  var l = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    d = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function v(C) {
    return C === null || typeof C != "object"
      ? null
      : ((C = (y && C[y]) || C["@@iterator"]),
        typeof C == "function" ? C : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    b = {};
  function R(C, X, U) {
    (this.props = C),
      (this.context = X),
      (this.refs = b),
      (this.updater = U || S);
  }
  (R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (C, X) {
      if (typeof C != "object" && typeof C != "function" && C != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, C, X, "setState");
    }),
    (R.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    });
  function A() {}
  A.prototype = R.prototype;
  function O(C, X, U) {
    (this.props = C),
      (this.context = X),
      (this.refs = b),
      (this.updater = U || S);
  }
  var G = (O.prototype = new A());
  (G.constructor = O), x(G, R.prototype), (G.isPureReactComponent = !0);
  var z = Array.isArray,
    D = { H: null, A: null, T: null, S: null },
    j = Object.prototype.hasOwnProperty;
  function Q(C, X, U, tt, J, rt) {
    return (
      (U = rt.ref),
      { $$typeof: l, type: C, key: X, ref: U !== void 0 ? U : null, props: rt }
    );
  }
  function Z(C, X) {
    return Q(C.type, X, void 0, void 0, void 0, C.props);
  }
  function F(C) {
    return typeof C == "object" && C !== null && C.$$typeof === l;
  }
  function V(C) {
    var X = { "=": "=0", ":": "=2" };
    return (
      "$" +
      C.replace(/[=:]/g, function (U) {
        return X[U];
      })
    );
  }
  var lt = /\/+/g;
  function it(C, X) {
    return typeof C == "object" && C !== null && C.key != null
      ? V("" + C.key)
      : X.toString(36);
  }
  function ot() {}
  function st(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (
          (typeof C.status == "string"
            ? C.then(ot, ot)
            : ((C.status = "pending"),
              C.then(
                function (X) {
                  C.status === "pending" &&
                    ((C.status = "fulfilled"), (C.value = X));
                },
                function (X) {
                  C.status === "pending" &&
                    ((C.status = "rejected"), (C.reason = X));
                },
              )),
          C.status)
        ) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function nt(C, X, U, tt, J) {
    var rt = typeof C;
    (rt === "undefined" || rt === "boolean") && (C = null);
    var ct = !1;
    if (C === null) ct = !0;
    else
      switch (rt) {
        case "bigint":
        case "string":
        case "number":
          ct = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case l:
            case t:
              ct = !0;
              break;
            case m:
              return (ct = C._init), nt(ct(C._payload), X, U, tt, J);
          }
      }
    if (ct)
      return (
        (J = J(C)),
        (ct = tt === "" ? "." + it(C, 0) : tt),
        z(J)
          ? ((U = ""),
            ct != null && (U = ct.replace(lt, "$&/") + "/"),
            nt(J, X, U, "", function (Ut) {
              return Ut;
            }))
          : J != null &&
            (F(J) &&
              (J = Z(
                J,
                U +
                  (J.key == null || (C && C.key === J.key)
                    ? ""
                    : ("" + J.key).replace(lt, "$&/") + "/") +
                  ct,
              )),
            X.push(J)),
        1
      );
    ct = 0;
    var Nt = tt === "" ? "." : tt + ":";
    if (z(C))
      for (var mt = 0; mt < C.length; mt++)
        (tt = C[mt]), (rt = Nt + it(tt, mt)), (ct += nt(tt, X, U, rt, J));
    else if (((mt = v(C)), typeof mt == "function"))
      for (C = mt.call(C), mt = 0; !(tt = C.next()).done; )
        (tt = tt.value), (rt = Nt + it(tt, mt++)), (ct += nt(tt, X, U, rt, J));
    else if (rt === "object") {
      if (typeof C.then == "function") return nt(st(C), X, U, tt, J);
      throw (
        ((X = String(C)),
        Error(
          "Objects are not valid as a React child (found: " +
            (X === "[object Object]"
              ? "object with keys {" + Object.keys(C).join(", ") + "}"
              : X) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return ct;
  }
  function Y(C, X, U) {
    if (C == null) return C;
    var tt = [],
      J = 0;
    return (
      nt(C, tt, "", "", function (rt) {
        return X.call(U, rt, J++);
      }),
      tt
    );
  }
  function q(C) {
    if (C._status === -1) {
      var X = C._result;
      (X = X()),
        X.then(
          function (U) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 1), (C._result = U));
          },
          function (U) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 2), (C._result = U));
          },
        ),
        C._status === -1 && ((C._status = 0), (C._result = X));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var W =
    typeof reportError == "function"
      ? reportError
      : function (C) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var X = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof C == "object" &&
                C !== null &&
                typeof C.message == "string"
                  ? String(C.message)
                  : String(C),
              error: C,
            });
            if (!window.dispatchEvent(X)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", C);
            return;
          }
          console.error(C);
        };
  function $() {}
  return (
    (Et.Children = {
      map: Y,
      forEach: function (C, X, U) {
        Y(
          C,
          function () {
            X.apply(this, arguments);
          },
          U,
        );
      },
      count: function (C) {
        var X = 0;
        return (
          Y(C, function () {
            X++;
          }),
          X
        );
      },
      toArray: function (C) {
        return (
          Y(C, function (X) {
            return X;
          }) || []
        );
      },
      only: function (C) {
        if (!F(C))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return C;
      },
    }),
    (Et.Component = R),
    (Et.Fragment = i),
    (Et.Profiler = r),
    (Et.PureComponent = O),
    (Et.StrictMode = s),
    (Et.Suspense = d),
    (Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (Et.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (Et.cache = function (C) {
      return function () {
        return C.apply(null, arguments);
      };
    }),
    (Et.cloneElement = function (C, X, U) {
      if (C == null)
        throw Error(
          "The argument must be a React element, but you passed " + C + ".",
        );
      var tt = x({}, C.props),
        J = C.key,
        rt = void 0;
      if (X != null)
        for (ct in (X.ref !== void 0 && (rt = void 0),
        X.key !== void 0 && (J = "" + X.key),
        X))
          !j.call(X, ct) ||
            ct === "key" ||
            ct === "__self" ||
            ct === "__source" ||
            (ct === "ref" && X.ref === void 0) ||
            (tt[ct] = X[ct]);
      var ct = arguments.length - 2;
      if (ct === 1) tt.children = U;
      else if (1 < ct) {
        for (var Nt = Array(ct), mt = 0; mt < ct; mt++)
          Nt[mt] = arguments[mt + 2];
        tt.children = Nt;
      }
      return Q(C.type, J, void 0, void 0, rt, tt);
    }),
    (Et.createContext = function (C) {
      return (
        (C = {
          $$typeof: c,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (C.Provider = C),
        (C.Consumer = { $$typeof: o, _context: C }),
        C
      );
    }),
    (Et.createElement = function (C, X, U) {
      var tt,
        J = {},
        rt = null;
      if (X != null)
        for (tt in (X.key !== void 0 && (rt = "" + X.key), X))
          j.call(X, tt) &&
            tt !== "key" &&
            tt !== "__self" &&
            tt !== "__source" &&
            (J[tt] = X[tt]);
      var ct = arguments.length - 2;
      if (ct === 1) J.children = U;
      else if (1 < ct) {
        for (var Nt = Array(ct), mt = 0; mt < ct; mt++)
          Nt[mt] = arguments[mt + 2];
        J.children = Nt;
      }
      if (C && C.defaultProps)
        for (tt in ((ct = C.defaultProps), ct))
          J[tt] === void 0 && (J[tt] = ct[tt]);
      return Q(C, rt, void 0, void 0, null, J);
    }),
    (Et.createRef = function () {
      return { current: null };
    }),
    (Et.forwardRef = function (C) {
      return { $$typeof: h, render: C };
    }),
    (Et.isValidElement = F),
    (Et.lazy = function (C) {
      return { $$typeof: m, _payload: { _status: -1, _result: C }, _init: q };
    }),
    (Et.memo = function (C, X) {
      return { $$typeof: _, type: C, compare: X === void 0 ? null : X };
    }),
    (Et.startTransition = function (C) {
      var X = D.T,
        U = {};
      D.T = U;
      try {
        var tt = C(),
          J = D.S;
        J !== null && J(U, tt),
          typeof tt == "object" &&
            tt !== null &&
            typeof tt.then == "function" &&
            tt.then($, W);
      } catch (rt) {
        W(rt);
      } finally {
        D.T = X;
      }
    }),
    (Et.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (Et.use = function (C) {
      return D.H.use(C);
    }),
    (Et.useActionState = function (C, X, U) {
      return D.H.useActionState(C, X, U);
    }),
    (Et.useCallback = function (C, X) {
      return D.H.useCallback(C, X);
    }),
    (Et.useContext = function (C) {
      return D.H.useContext(C);
    }),
    (Et.useDebugValue = function () {}),
    (Et.useDeferredValue = function (C, X) {
      return D.H.useDeferredValue(C, X);
    }),
    (Et.useEffect = function (C, X) {
      return D.H.useEffect(C, X);
    }),
    (Et.useId = function () {
      return D.H.useId();
    }),
    (Et.useImperativeHandle = function (C, X, U) {
      return D.H.useImperativeHandle(C, X, U);
    }),
    (Et.useInsertionEffect = function (C, X) {
      return D.H.useInsertionEffect(C, X);
    }),
    (Et.useLayoutEffect = function (C, X) {
      return D.H.useLayoutEffect(C, X);
    }),
    (Et.useMemo = function (C, X) {
      return D.H.useMemo(C, X);
    }),
    (Et.useOptimistic = function (C, X) {
      return D.H.useOptimistic(C, X);
    }),
    (Et.useReducer = function (C, X, U) {
      return D.H.useReducer(C, X, U);
    }),
    (Et.useRef = function (C) {
      return D.H.useRef(C);
    }),
    (Et.useState = function (C) {
      return D.H.useState(C);
    }),
    (Et.useSyncExternalStore = function (C, X, U) {
      return D.H.useSyncExternalStore(C, X, U);
    }),
    (Et.useTransition = function () {
      return D.H.useTransition();
    }),
    (Et.version = "19.0.0"),
    Et
  );
}
var L0;
function hd() {
  return L0 || ((L0 = 1), (vf.exports = AE())), vf.exports;
}
var Su = hd();
const ii = bE(Su);
var Ef = { exports: {} },
  ma = {},
  Sf = { exports: {} },
  xf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var z0;
function wE() {
  return (
    z0 ||
      ((z0 = 1),
      (function (l) {
        function t(Y, q) {
          var W = Y.length;
          Y.push(q);
          t: for (; 0 < W; ) {
            var $ = (W - 1) >>> 1,
              C = Y[$];
            if (0 < r(C, q)) (Y[$] = q), (Y[W] = C), (W = $);
            else break t;
          }
        }
        function i(Y) {
          return Y.length === 0 ? null : Y[0];
        }
        function s(Y) {
          if (Y.length === 0) return null;
          var q = Y[0],
            W = Y.pop();
          if (W !== q) {
            Y[0] = W;
            t: for (var $ = 0, C = Y.length, X = C >>> 1; $ < X; ) {
              var U = 2 * ($ + 1) - 1,
                tt = Y[U],
                J = U + 1,
                rt = Y[J];
              if (0 > r(tt, W))
                J < C && 0 > r(rt, tt)
                  ? ((Y[$] = rt), (Y[J] = W), ($ = J))
                  : ((Y[$] = tt), (Y[U] = W), ($ = U));
              else if (J < C && 0 > r(rt, W)) (Y[$] = rt), (Y[J] = W), ($ = J);
              else break t;
            }
          }
          return q;
        }
        function r(Y, q) {
          var W = Y.sortIndex - q.sortIndex;
          return W !== 0 ? W : Y.id - q.id;
        }
        if (
          ((l.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var o = performance;
          l.unstable_now = function () {
            return o.now();
          };
        } else {
          var c = Date,
            h = c.now();
          l.unstable_now = function () {
            return c.now() - h;
          };
        }
        var d = [],
          _ = [],
          m = 1,
          y = null,
          v = 3,
          S = !1,
          x = !1,
          b = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          A = typeof clearTimeout == "function" ? clearTimeout : null,
          O = typeof setImmediate < "u" ? setImmediate : null;
        function G(Y) {
          for (var q = i(_); q !== null; ) {
            if (q.callback === null) s(_);
            else if (q.startTime <= Y)
              s(_), (q.sortIndex = q.expirationTime), t(d, q);
            else break;
            q = i(_);
          }
        }
        function z(Y) {
          if (((b = !1), G(Y), !x))
            if (i(d) !== null) (x = !0), st();
            else {
              var q = i(_);
              q !== null && nt(z, q.startTime - Y);
            }
        }
        var D = !1,
          j = -1,
          Q = 5,
          Z = -1;
        function F() {
          return !(l.unstable_now() - Z < Q);
        }
        function V() {
          if (D) {
            var Y = l.unstable_now();
            Z = Y;
            var q = !0;
            try {
              t: {
                (x = !1), b && ((b = !1), A(j), (j = -1)), (S = !0);
                var W = v;
                try {
                  e: {
                    for (
                      G(Y), y = i(d);
                      y !== null && !(y.expirationTime > Y && F());

                    ) {
                      var $ = y.callback;
                      if (typeof $ == "function") {
                        (y.callback = null), (v = y.priorityLevel);
                        var C = $(y.expirationTime <= Y);
                        if (((Y = l.unstable_now()), typeof C == "function")) {
                          (y.callback = C), G(Y), (q = !0);
                          break e;
                        }
                        y === i(d) && s(d), G(Y);
                      } else s(d);
                      y = i(d);
                    }
                    if (y !== null) q = !0;
                    else {
                      var X = i(_);
                      X !== null && nt(z, X.startTime - Y), (q = !1);
                    }
                  }
                  break t;
                } finally {
                  (y = null), (v = W), (S = !1);
                }
                q = void 0;
              }
            } finally {
              q ? lt() : (D = !1);
            }
          }
        }
        var lt;
        if (typeof O == "function")
          lt = function () {
            O(V);
          };
        else if (typeof MessageChannel < "u") {
          var it = new MessageChannel(),
            ot = it.port2;
          (it.port1.onmessage = V),
            (lt = function () {
              ot.postMessage(null);
            });
        } else
          lt = function () {
            R(V, 0);
          };
        function st() {
          D || ((D = !0), lt());
        }
        function nt(Y, q) {
          j = R(function () {
            Y(l.unstable_now());
          }, q);
        }
        (l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (Y) {
            Y.callback = null;
          }),
          (l.unstable_continueExecution = function () {
            x || S || ((x = !0), st());
          }),
          (l.unstable_forceFrameRate = function (Y) {
            0 > Y || 125 < Y
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Q = 0 < Y ? Math.floor(1e3 / Y) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (l.unstable_getFirstCallbackNode = function () {
            return i(d);
          }),
          (l.unstable_next = function (Y) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = v;
            }
            var W = v;
            v = q;
            try {
              return Y();
            } finally {
              v = W;
            }
          }),
          (l.unstable_pauseExecution = function () {}),
          (l.unstable_requestPaint = function () {}),
          (l.unstable_runWithPriority = function (Y, q) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                Y = 3;
            }
            var W = v;
            v = Y;
            try {
              return q();
            } finally {
              v = W;
            }
          }),
          (l.unstable_scheduleCallback = function (Y, q, W) {
            var $ = l.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? $ + W : $))
                : (W = $),
              Y)
            ) {
              case 1:
                var C = -1;
                break;
              case 2:
                C = 250;
                break;
              case 5:
                C = 1073741823;
                break;
              case 4:
                C = 1e4;
                break;
              default:
                C = 5e3;
            }
            return (
              (C = W + C),
              (Y = {
                id: m++,
                callback: q,
                priorityLevel: Y,
                startTime: W,
                expirationTime: C,
                sortIndex: -1,
              }),
              W > $
                ? ((Y.sortIndex = W),
                  t(_, Y),
                  i(d) === null &&
                    Y === i(_) &&
                    (b ? (A(j), (j = -1)) : (b = !0), nt(z, W - $)))
                : ((Y.sortIndex = C), t(d, Y), x || S || ((x = !0), st())),
              Y
            );
          }),
          (l.unstable_shouldYield = F),
          (l.unstable_wrapCallback = function (Y) {
            var q = v;
            return function () {
              var W = v;
              v = q;
              try {
                return Y.apply(this, arguments);
              } finally {
                v = W;
              }
            };
          });
      })(xf)),
    xf
  );
}
var I0;
function ME() {
  return I0 || ((I0 = 1), (Sf.exports = wE())), Sf.exports;
}
var Tf = { exports: {} },
  Ae = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var N0;
function OE() {
  if (N0) return Ae;
  N0 = 1;
  var l = hd();
  function t(d) {
    var _ = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        _ += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return (
      "Minified React error #" +
      d +
      "; visit " +
      _ +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var s = {
      d: {
        f: i,
        r: function () {
          throw Error(t(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function o(d, _, m) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: y == null ? null : "" + y,
      children: d,
      containerInfo: _,
      implementation: m,
    };
  }
  var c = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(d, _) {
    if (d === "font") return "";
    if (typeof _ == "string") return _ === "use-credentials" ? _ : "";
  }
  return (
    (Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Ae.createPortal = function (d, _) {
      var m =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_ || (_.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11))
        throw Error(t(299));
      return o(d, _, null, m);
    }),
    (Ae.flushSync = function (d) {
      var _ = c.T,
        m = s.p;
      try {
        if (((c.T = null), (s.p = 2), d)) return d();
      } finally {
        (c.T = _), (s.p = m), s.d.f();
      }
    }),
    (Ae.preconnect = function (d, _) {
      typeof d == "string" &&
        (_
          ? ((_ = _.crossOrigin),
            (_ =
              typeof _ == "string"
                ? _ === "use-credentials"
                  ? _
                  : ""
                : void 0))
          : (_ = null),
        s.d.C(d, _));
    }),
    (Ae.prefetchDNS = function (d) {
      typeof d == "string" && s.d.D(d);
    }),
    (Ae.preinit = function (d, _) {
      if (typeof d == "string" && _ && typeof _.as == "string") {
        var m = _.as,
          y = h(m, _.crossOrigin),
          v = typeof _.integrity == "string" ? _.integrity : void 0,
          S = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
        m === "style"
          ? s.d.S(d, typeof _.precedence == "string" ? _.precedence : void 0, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: S,
            })
          : m === "script" &&
            s.d.X(d, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: S,
              nonce: typeof _.nonce == "string" ? _.nonce : void 0,
            });
      }
    }),
    (Ae.preinitModule = function (d, _) {
      if (typeof d == "string")
        if (typeof _ == "object" && _ !== null) {
          if (_.as == null || _.as === "script") {
            var m = h(_.as, _.crossOrigin);
            s.d.M(d, {
              crossOrigin: m,
              integrity: typeof _.integrity == "string" ? _.integrity : void 0,
              nonce: typeof _.nonce == "string" ? _.nonce : void 0,
            });
          }
        } else _ == null && s.d.M(d);
    }),
    (Ae.preload = function (d, _) {
      if (
        typeof d == "string" &&
        typeof _ == "object" &&
        _ !== null &&
        typeof _.as == "string"
      ) {
        var m = _.as,
          y = h(m, _.crossOrigin);
        s.d.L(d, m, {
          crossOrigin: y,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0,
          nonce: typeof _.nonce == "string" ? _.nonce : void 0,
          type: typeof _.type == "string" ? _.type : void 0,
          fetchPriority:
            typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
          referrerPolicy:
            typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
          imageSrcSet:
            typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
          imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
          media: typeof _.media == "string" ? _.media : void 0,
        });
      }
    }),
    (Ae.preloadModule = function (d, _) {
      if (typeof d == "string")
        if (_) {
          var m = h(_.as, _.crossOrigin);
          s.d.m(d, {
            as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
            crossOrigin: m,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
          });
        } else s.d.m(d);
    }),
    (Ae.requestFormReset = function (d) {
      s.d.r(d);
    }),
    (Ae.unstable_batchedUpdates = function (d, _) {
      return d(_);
    }),
    (Ae.useFormState = function (d, _, m) {
      return c.H.useFormState(d, _, m);
    }),
    (Ae.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (Ae.version = "19.0.0"),
    Ae
  );
}
var G0;
function DE() {
  if (G0) return Tf.exports;
  G0 = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (t) {
        console.error(t);
      }
  }
  return l(), (Tf.exports = OE()), Tf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var F0;
function LE() {
  if (F0) return ma;
  F0 = 1;
  var l = ME(),
    t = hd(),
    i = DE();
  function s(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var o = Symbol.for("react.element"),
    c = Symbol.for("react.transitional.element"),
    h = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    y = Symbol.for("react.provider"),
    v = Symbol.for("react.consumer"),
    S = Symbol.for("react.context"),
    x = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    R = Symbol.for("react.suspense_list"),
    A = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    G = Symbol.for("react.offscreen"),
    z = Symbol.for("react.memo_cache_sentinel"),
    D = Symbol.iterator;
  function j(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (D && e[D]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Q = Symbol.for("react.client.reference");
  function Z(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Q ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case h:
        return "Portal";
      case m:
        return "Profiler";
      case _:
        return "StrictMode";
      case b:
        return "Suspense";
      case R:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return (e.displayName || "Context") + ".Provider";
        case v:
          return (e._context.displayName || "Context") + ".Consumer";
        case x:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case A:
          return (
            (n = e.displayName || null), n !== null ? n : Z(e.type) || "Memo"
          );
        case O:
          (n = e._payload), (e = e._init);
          try {
            return Z(e(n));
          } catch {}
      }
    return null;
  }
  var F = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = Object.assign,
    lt,
    it;
  function ot(e) {
    if (lt === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        (lt = (n && n[1]) || ""),
          (it =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      lt +
      e +
      it
    );
  }
  var st = !1;
  function nt(e, n) {
    if (!e || st) return "";
    st = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (k) {
                  var N = k;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (k) {
                  N = k;
                }
                e.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (k) {
                N = k;
              }
              (K = e()) &&
                typeof K.catch == "function" &&
                K.catch(function () {});
            }
          } catch (k) {
            if (k && N && typeof k.stack == "string") return [k.stack, N.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name",
      );
      f &&
        f.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var g = u.DetermineComponentFrameRoot(),
        p = g[0],
        E = g[1];
      if (p && E) {
        var T = p.split(`
`),
          M = E.split(`
`);
        for (
          f = u = 0;
          u < T.length && !T[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; f < M.length && !M[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (u === T.length || f === M.length)
          for (
            u = T.length - 1, f = M.length - 1;
            1 <= u && 0 <= f && T[u] !== M[f];

          )
            f--;
        for (; 1 <= u && 0 <= f; u--, f--)
          if (T[u] !== M[f]) {
            if (u !== 1 || f !== 1)
              do
                if ((u--, f--, 0 > f || T[u] !== M[f])) {
                  var B =
                    `
` + T[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      B.includes("<anonymous>") &&
                      (B = B.replace("<anonymous>", e.displayName)),
                    B
                  );
                }
              while (1 <= u && 0 <= f);
            break;
          }
      }
    } finally {
      (st = !1), (Error.prepareStackTrace = a);
    }
    return (a = e ? e.displayName || e.name : "") ? ot(a) : "";
  }
  function Y(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ot(e.type);
      case 16:
        return ot("Lazy");
      case 13:
        return ot("Suspense");
      case 19:
        return ot("SuspenseList");
      case 0:
      case 15:
        return (e = nt(e.type, !1)), e;
      case 11:
        return (e = nt(e.type.render, !1)), e;
      case 1:
        return (e = nt(e.type, !0)), e;
      default:
        return "";
    }
  }
  function q(e) {
    try {
      var n = "";
      do (n += Y(e)), (e = e.return);
      while (e);
      return n;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function W(e) {
    var n = e,
      a = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), (n.flags & 4098) !== 0 && (a = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? a : null;
  }
  function $(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function C(e) {
    if (W(e) !== e) throw Error(s(188));
  }
  function X(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = W(e)), n === null)) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var a = e, u = n; ; ) {
      var f = a.return;
      if (f === null) break;
      var g = f.alternate;
      if (g === null) {
        if (((u = f.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (f.child === g.child) {
        for (g = f.child; g; ) {
          if (g === a) return C(f), e;
          if (g === u) return C(f), n;
          g = g.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== u.return) (a = f), (u = g);
      else {
        for (var p = !1, E = f.child; E; ) {
          if (E === a) {
            (p = !0), (a = f), (u = g);
            break;
          }
          if (E === u) {
            (p = !0), (u = f), (a = g);
            break;
          }
          E = E.sibling;
        }
        if (!p) {
          for (E = g.child; E; ) {
            if (E === a) {
              (p = !0), (a = g), (u = f);
              break;
            }
            if (E === u) {
              (p = !0), (u = g), (a = f);
              break;
            }
            E = E.sibling;
          }
          if (!p) throw Error(s(189));
        }
      }
      if (a.alternate !== u) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? e : n;
  }
  function U(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = U(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var tt = Array.isArray,
    J = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    rt = { pending: !1, data: null, method: null, action: null },
    ct = [],
    Nt = -1;
  function mt(e) {
    return { current: e };
  }
  function Ut(e) {
    0 > Nt || ((e.current = ct[Nt]), (ct[Nt] = null), Nt--);
  }
  function vt(e, n) {
    Nt++, (ct[Nt] = e.current), (e.current = n);
  }
  var De = mt(null),
    Fi = mt(null),
    qe = mt(null),
    Ve = mt(null);
  function Ui(e, n) {
    switch ((vt(qe, n), vt(Fi, e), vt(De, null), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) && (n = n.namespaceURI) ? l0(n) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? n.parentNode : n),
          (n = e.tagName),
          (e = e.namespaceURI))
        )
          (e = l0(e)), (n = r0(e, n));
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    Ut(De), vt(De, n);
  }
  function ye() {
    Ut(De), Ut(Fi), Ut(qe);
  }
  function Ue(e) {
    e.memoizedState !== null && vt(Ve, e);
    var n = De.current,
      a = r0(n, e.type);
    n !== a && (vt(Fi, e), vt(De, a));
  }
  function Ri(e) {
    Fi.current === e && (Ut(De), Ut(Fi)),
      Ve.current === e && (Ut(Ve), (ha._currentValue = rt));
  }
  var bi = Object.prototype.hasOwnProperty,
    Xi = l.unstable_scheduleCallback,
    tn = l.unstable_cancelCallback,
    Ai = l.unstable_shouldYield,
    en = l.unstable_requestPaint,
    kt = l.unstable_now,
    vr = l.unstable_getCurrentPriorityLevel,
    ps = l.unstable_ImmediatePriority,
    vs = l.unstable_UserBlockingPriority,
    ol = l.unstable_NormalPriority,
    Ja = l.unstable_LowPriority,
    Er = l.unstable_IdlePriority,
    Sr = l.log,
    fc = l.unstable_setDisableYieldValue,
    Es = null,
    xe = null;
  function $a(e) {
    if (xe && typeof xe.onCommitFiberRoot == "function")
      try {
        xe.onCommitFiberRoot(Es, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function li(e) {
    if (
      (typeof Sr == "function" && fc(e),
      xe && typeof xe.setStrictMode == "function")
    )
      try {
        xe.setStrictMode(Es, e);
      } catch {}
  }
  var Te = Math.clz32 ? Math.clz32 : Ss,
    dc = Math.log,
    xr = Math.LN2;
  function Ss(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((dc(e) / xr) | 0)) | 0;
  }
  var Yi = 128,
    ki = 4194304;
  function Bi(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
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
        return 64;
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
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function xs(e, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      f = e.suspendedLanes,
      g = e.pingedLanes,
      p = e.warmLanes;
    e = e.finishedLanes !== 0;
    var E = a & 134217727;
    return (
      E !== 0
        ? ((a = E & ~f),
          a !== 0
            ? (u = Bi(a))
            : ((g &= E),
              g !== 0
                ? (u = Bi(g))
                : e || ((p = E & ~p), p !== 0 && (u = Bi(p)))))
        : ((E = a & ~f),
          E !== 0
            ? (u = Bi(E))
            : g !== 0
              ? (u = Bi(g))
              : e || ((p = a & ~p), p !== 0 && (u = Bi(p)))),
      u === 0
        ? 0
        : n !== 0 &&
            n !== u &&
            (n & f) === 0 &&
            ((f = u & -u),
            (p = n & -n),
            f >= p || (f === 32 && (p & 4194176) !== 0))
          ? n
          : u
    );
  }
  function oe(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function nn(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return n + 250;
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Le() {
    var e = Yi;
    return (Yi <<= 1), (Yi & 4194176) === 0 && (Yi = 128), e;
  }
  function We() {
    var e = ki;
    return (ki <<= 1), (ki & 62914560) === 0 && (ki = 4194304), e;
  }
  function Ce(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function ze(e, n) {
    (e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function wi(e, n, a, u, f, g) {
    var p = e.pendingLanes;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0);
    var E = e.entanglements,
      T = e.expirationTimes,
      M = e.hiddenUpdates;
    for (a = p & ~a; 0 < a; ) {
      var B = 31 - Te(a),
        K = 1 << B;
      (E[B] = 0), (T[B] = -1);
      var N = M[B];
      if (N !== null)
        for (M[B] = null, B = 0; B < N.length; B++) {
          var k = N[B];
          k !== null && (k.lane &= -536870913);
        }
      a &= ~K;
    }
    u !== 0 && jt(e, u, 0),
      g !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= g & ~(p & ~n));
  }
  function jt(e, n, a) {
    (e.pendingLanes |= n), (e.suspendedLanes &= ~n);
    var u = 31 - Te(n);
    (e.entangledLanes |= n),
      (e.entanglements[u] = e.entanglements[u] | 1073741824 | (a & 4194218));
  }
  function ue(e, n) {
    var a = (e.entangledLanes |= n);
    for (e = e.entanglements; a; ) {
      var u = 31 - Te(a),
        f = 1 << u;
      (f & n) | (e[u] & n) && (e[u] |= n), (a &= ~f);
    }
  }
  function ri(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function to() {
    var e = J.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : C0(e.type));
  }
  function g1(e, n) {
    var a = J.p;
    try {
      return (J.p = e), n();
    } finally {
      J.p = a;
    }
  }
  var zn = Math.random().toString(36).slice(2),
    Re = "__reactFiber$" + zn,
    Xe = "__reactProps$" + zn,
    ul = "__reactContainer$" + zn,
    gc = "__reactEvents$" + zn,
    _1 = "__reactListeners$" + zn,
    m1 = "__reactHandles$" + zn,
    ng = "__reactResources$" + zn,
    Tr = "__reactMarker$" + zn;
  function _c(e) {
    delete e[Re], delete e[Xe], delete e[gc], delete e[_1], delete e[m1];
  }
  function Ts(e) {
    var n = e[Re];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if ((n = a[ul] || a[Re])) {
        if (
          ((a = n.alternate),
          n.child !== null || (a !== null && a.child !== null))
        )
          for (e = u0(e); e !== null; ) {
            if ((a = e[Re])) return a;
            e = u0(e);
          }
        return n;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function cl(e) {
    if ((e = e[Re] || e[ul])) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Cr(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function hl(e) {
    var n = e[ng];
    return (
      n ||
        (n = e[ng] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function ce(e) {
    e[Tr] = !0;
  }
  var sg = new Set(),
    lg = {};
  function Cs(e, n) {
    fl(e, n), fl(e + "Capture", n);
  }
  function fl(e, n) {
    for (lg[e] = n, e = 0; e < n.length; e++) sg.add(n[e]);
  }
  var sn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    y1 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    rg = {},
    ag = {};
  function p1(e) {
    return bi.call(ag, e)
      ? !0
      : bi.call(rg, e)
        ? !1
        : y1.test(e)
          ? (ag[e] = !0)
          : ((rg[e] = !0), !1);
  }
  function eo(e, n, a) {
    if (p1(n))
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var u = n.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + a);
      }
  }
  function io(e, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + a);
    }
  }
  function ln(e, n, a, u) {
    if (u === null) e.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, "" + u);
    }
  }
  function ai(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function og(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function v1(e) {
    var n = og(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      u = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var f = a.get,
        g = a.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (p) {
            (u = "" + p), g.call(this, p);
          },
        }),
        Object.defineProperty(e, n, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (p) {
            u = "" + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function no(e) {
    e._valueTracker || (e._valueTracker = v1(e));
  }
  function ug(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(),
      u = "";
    return (
      e && (u = og(e) ? (e.checked ? "true" : "false") : e.value),
      (e = u),
      e !== a ? (n.setValue(e), !0) : !1
    );
  }
  function so(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var E1 = /[\n"\\]/g;
  function oi(e) {
    return e.replace(E1, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function mc(e, n, a, u, f, g, p, E) {
    (e.name = ""),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (e.type = p)
        : e.removeAttribute("type"),
      n != null
        ? p === "number"
          ? ((n === 0 && e.value === "") || e.value != n) &&
            (e.value = "" + ai(n))
          : e.value !== "" + ai(n) && (e.value = "" + ai(n))
        : (p !== "submit" && p !== "reset") || e.removeAttribute("value"),
      n != null
        ? yc(e, p, ai(n))
        : a != null
          ? yc(e, p, ai(a))
          : u != null && e.removeAttribute("value"),
      f == null && g != null && (e.defaultChecked = !!g),
      f != null &&
        (e.checked = f && typeof f != "function" && typeof f != "symbol"),
      E != null &&
      typeof E != "function" &&
      typeof E != "symbol" &&
      typeof E != "boolean"
        ? (e.name = "" + ai(E))
        : e.removeAttribute("name");
  }
  function cg(e, n, a, u, f, g, p, E) {
    if (
      (g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.type = g),
      n != null || a != null)
    ) {
      if (!((g !== "submit" && g !== "reset") || n != null)) return;
      (a = a != null ? "" + ai(a) : ""),
        (n = n != null ? "" + ai(n) : a),
        E || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (u = u ?? f),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (e.checked = E ? e.checked : !!u),
      (e.defaultChecked = !!u),
      p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (e.name = p);
  }
  function yc(e, n, a) {
    (n === "number" && so(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function dl(e, n, a, u) {
    if (((e = e.options), n)) {
      n = {};
      for (var f = 0; f < a.length; f++) n["$" + a[f]] = !0;
      for (a = 0; a < e.length; a++)
        (f = n.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== f && (e[a].selected = f),
          f && u && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + ai(a), n = null, f = 0; f < e.length; f++) {
        if (e[f].value === a) {
          (e[f].selected = !0), u && (e[f].defaultSelected = !0);
          return;
        }
        n !== null || e[f].disabled || (n = e[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function hg(e, n, a) {
    if (
      n != null &&
      ((n = "" + ai(n)), n !== e.value && (e.value = n), a == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + ai(a) : "";
  }
  function fg(e, n, a, u) {
    if (n == null) {
      if (u != null) {
        if (a != null) throw Error(s(92));
        if (tt(u)) {
          if (1 < u.length) throw Error(s(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), (n = a);
    }
    (a = ai(n)),
      (e.defaultValue = a),
      (u = e.textContent),
      u === a && u !== "" && u !== null && (e.value = u);
  }
  function gl(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var S1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function dg(e, n, a) {
    var u = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? e.setProperty(n, "")
        : n === "float"
          ? (e.cssFloat = "")
          : (e[n] = "")
      : u
        ? e.setProperty(n, a)
        : typeof a != "number" || a === 0 || S1.has(n)
          ? n === "float"
            ? (e.cssFloat = a)
            : (e[n] = ("" + a).trim())
          : (e[n] = a + "px");
  }
  function gg(e, n, a) {
    if (n != null && typeof n != "object") throw Error(s(62));
    if (((e = e.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (n != null && n.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? e.setProperty(u, "")
            : u === "float"
              ? (e.cssFloat = "")
              : (e[u] = ""));
      for (var f in n)
        (u = n[f]), n.hasOwnProperty(f) && a[f] !== u && dg(e, f, u);
    } else for (var g in n) n.hasOwnProperty(g) && dg(e, g, n[g]);
  }
  function pc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var x1 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    T1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function lo(e) {
    return T1.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var vc = null;
  function Ec(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var _l = null,
    ml = null;
  function _g(e) {
    var n = cl(e);
    if (n && (e = n.stateNode)) {
      var a = e[Xe] || null;
      t: switch (((e = n.stateNode), n.type)) {
        case "input":
          if (
            (mc(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (n = a.name),
            a.type === "radio" && n != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + oi("" + n) + '"][type="radio"]',
              ),
                n = 0;
              n < a.length;
              n++
            ) {
              var u = a[n];
              if (u !== e && u.form === e.form) {
                var f = u[Xe] || null;
                if (!f) throw Error(s(90));
                mc(
                  u,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name,
                );
              }
            }
            for (n = 0; n < a.length; n++)
              (u = a[n]), u.form === e.form && ug(u);
          }
          break t;
        case "textarea":
          hg(e, a.value, a.defaultValue);
          break t;
        case "select":
          (n = a.value), n != null && dl(e, !!a.multiple, n, !1);
      }
    }
  }
  var Sc = !1;
  function mg(e, n, a) {
    if (Sc) return e(n, a);
    Sc = !0;
    try {
      var u = e(n);
      return u;
    } finally {
      if (
        ((Sc = !1),
        (_l !== null || ml !== null) &&
          (Ho(), _l && ((n = _l), (e = ml), (ml = _l = null), _g(n), e)))
      )
        for (n = 0; n < e.length; n++) _g(e[n]);
    }
  }
  function Rr(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var u = a[Xe] || null;
    if (u === null) return null;
    a = u[n];
    t: switch (n) {
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
        (u = !u.disabled) ||
          ((e = e.type),
          (u = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !u);
        break t;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(s(231, n, typeof a));
    return a;
  }
  var xc = !1;
  if (sn)
    try {
      var br = {};
      Object.defineProperty(br, "passive", {
        get: function () {
          xc = !0;
        },
      }),
        window.addEventListener("test", br, br),
        window.removeEventListener("test", br, br);
    } catch {
      xc = !1;
    }
  var In = null,
    Tc = null,
    ro = null;
  function yg() {
    if (ro) return ro;
    var e,
      n = Tc,
      a = n.length,
      u,
      f = "value" in In ? In.value : In.textContent,
      g = f.length;
    for (e = 0; e < a && n[e] === f[e]; e++);
    var p = a - e;
    for (u = 1; u <= p && n[a - u] === f[g - u]; u++);
    return (ro = f.slice(e, 1 < u ? 1 - u : void 0));
  }
  function ao(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function oo() {
    return !0;
  }
  function pg() {
    return !1;
  }
  function Ye(e) {
    function n(a, u, f, g, p) {
      (this._reactName = a),
        (this._targetInst = f),
        (this.type = u),
        (this.nativeEvent = g),
        (this.target = p),
        (this.currentTarget = null);
      for (var E in e)
        e.hasOwnProperty(E) && ((a = e[E]), (this[E] = a ? a(g) : g[E]));
      return (
        (this.isDefaultPrevented = (
          g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1
        )
          ? oo
          : pg),
        (this.isPropagationStopped = pg),
        this
      );
    }
    return (
      V(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = oo));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = oo));
        },
        persist: function () {},
        isPersistent: oo,
      }),
      n
    );
  }
  var Rs = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    uo = Ye(Rs),
    Ar = V({}, Rs, { view: 0, detail: 0 }),
    C1 = Ye(Ar),
    Cc,
    Rc,
    wr,
    co = V({}, Ar, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ac,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== wr &&
              (wr && e.type === "mousemove"
                ? ((Cc = e.screenX - wr.screenX), (Rc = e.screenY - wr.screenY))
                : (Rc = Cc = 0),
              (wr = e)),
            Cc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Rc;
      },
    }),
    vg = Ye(co),
    R1 = V({}, co, { dataTransfer: 0 }),
    b1 = Ye(R1),
    A1 = V({}, Ar, { relatedTarget: 0 }),
    bc = Ye(A1),
    w1 = V({}, Rs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    M1 = Ye(w1),
    O1 = V({}, Rs, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    D1 = Ye(O1),
    L1 = V({}, Rs, { data: 0 }),
    Eg = Ye(L1),
    z1 = {
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
      MozPrintableKey: "Unidentified",
    },
    I1 = {
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
      224: "Meta",
    },
    N1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function G1(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = N1[e])
        ? !!n[e]
        : !1;
  }
  function Ac() {
    return G1;
  }
  var F1 = V({}, Ar, {
      key: function (e) {
        if (e.key) {
          var n = z1[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = ao(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? I1[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ac,
      charCode: function (e) {
        return e.type === "keypress" ? ao(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ao(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    U1 = Ye(F1),
    X1 = V({}, co, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Sg = Ye(X1),
    Y1 = V({}, Ar, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ac,
    }),
    k1 = Ye(Y1),
    B1 = V({}, Rs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    H1 = Ye(B1),
    P1 = V({}, co, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    j1 = Ye(P1),
    Z1 = V({}, Rs, { newState: 0, oldState: 0 }),
    K1 = Ye(Z1),
    q1 = [9, 13, 27, 32],
    wc = sn && "CompositionEvent" in window,
    Mr = null;
  sn && "documentMode" in document && (Mr = document.documentMode);
  var V1 = sn && "TextEvent" in window && !Mr,
    xg = sn && (!wc || (Mr && 8 < Mr && 11 >= Mr)),
    Tg = " ",
    Cg = !1;
  function Rg(e, n) {
    switch (e) {
      case "keyup":
        return q1.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function bg(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var yl = !1;
  function W1(e, n) {
    switch (e) {
      case "compositionend":
        return bg(n);
      case "keypress":
        return n.which !== 32 ? null : ((Cg = !0), Tg);
      case "textInput":
        return (e = n.data), e === Tg && Cg ? null : e;
      default:
        return null;
    }
  }
  function Q1(e, n) {
    if (yl)
      return e === "compositionend" || (!wc && Rg(e, n))
        ? ((e = yg()), (ro = Tc = In = null), (yl = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return xg && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var J1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ag(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!J1[e.type] : n === "textarea";
  }
  function wg(e, n, a, u) {
    _l ? (ml ? ml.push(u) : (ml = [u])) : (_l = u),
      (n = qo(n, "onChange")),
      0 < n.length &&
        ((a = new uo("onChange", "change", null, a, u)),
        e.push({ event: a, listeners: n }));
  }
  var Or = null,
    Dr = null;
  function $1(e) {
    t0(e, 0);
  }
  function ho(e) {
    var n = Cr(e);
    if (ug(n)) return e;
  }
  function Mg(e, n) {
    if (e === "change") return n;
  }
  var Og = !1;
  if (sn) {
    var Mc;
    if (sn) {
      var Oc = "oninput" in document;
      if (!Oc) {
        var Dg = document.createElement("div");
        Dg.setAttribute("oninput", "return;"),
          (Oc = typeof Dg.oninput == "function");
      }
      Mc = Oc;
    } else Mc = !1;
    Og = Mc && (!document.documentMode || 9 < document.documentMode);
  }
  function Lg() {
    Or && (Or.detachEvent("onpropertychange", zg), (Dr = Or = null));
  }
  function zg(e) {
    if (e.propertyName === "value" && ho(Dr)) {
      var n = [];
      wg(n, Dr, e, Ec(e)), mg($1, n);
    }
  }
  function tv(e, n, a) {
    e === "focusin"
      ? (Lg(), (Or = n), (Dr = a), Or.attachEvent("onpropertychange", zg))
      : e === "focusout" && Lg();
  }
  function ev(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ho(Dr);
  }
  function iv(e, n) {
    if (e === "click") return ho(n);
  }
  function nv(e, n) {
    if (e === "input" || e === "change") return ho(n);
  }
  function sv(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Qe = typeof Object.is == "function" ? Object.is : sv;
  function Lr(e, n) {
    if (Qe(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var a = Object.keys(e),
      u = Object.keys(n);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var f = a[u];
      if (!bi.call(n, f) || !Qe(e[f], n[f])) return !1;
    }
    return !0;
  }
  function Ig(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ng(e, n) {
    var a = Ig(e);
    e = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = e + a.textContent.length), e <= n && u >= n))
          return { node: a, offset: n - e };
        e = u;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Ig(a);
    }
  }
  function Gg(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Gg(e, n.parentNode)
            : "contains" in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function Fg(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = so(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = so(e.document);
    }
    return n;
  }
  function Dc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function lv(e, n) {
    var a = Fg(n);
    n = e.focusedElem;
    var u = e.selectionRange;
    if (
      a !== n &&
      n &&
      n.ownerDocument &&
      Gg(n.ownerDocument.documentElement, n)
    ) {
      if (u !== null && Dc(n)) {
        if (
          ((e = u.start),
          (a = u.end),
          a === void 0 && (a = e),
          "selectionStart" in n)
        )
          (n.selectionStart = e),
            (n.selectionEnd = Math.min(a, n.value.length));
        else if (
          ((a = ((e = n.ownerDocument || document) && e.defaultView) || window),
          a.getSelection)
        ) {
          a = a.getSelection();
          var f = n.textContent.length,
            g = Math.min(u.start, f);
          (u = u.end === void 0 ? g : Math.min(u.end, f)),
            !a.extend && g > u && ((f = u), (u = g), (g = f)),
            (f = Ng(n, g));
          var p = Ng(n, u);
          f &&
            p &&
            (a.rangeCount !== 1 ||
              a.anchorNode !== f.node ||
              a.anchorOffset !== f.offset ||
              a.focusNode !== p.node ||
              a.focusOffset !== p.offset) &&
            ((e = e.createRange()),
            e.setStart(f.node, f.offset),
            a.removeAllRanges(),
            g > u
              ? (a.addRange(e), a.extend(p.node, p.offset))
              : (e.setEnd(p.node, p.offset), a.addRange(e)));
        }
      }
      for (e = [], a = n; (a = a.parentNode); )
        a.nodeType === 1 &&
          e.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
        (a = e[n]),
          (a.element.scrollLeft = a.left),
          (a.element.scrollTop = a.top);
    }
  }
  var rv = sn && "documentMode" in document && 11 >= document.documentMode,
    pl = null,
    Lc = null,
    zr = null,
    zc = !1;
  function Ug(e, n, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    zc ||
      pl == null ||
      pl !== so(u) ||
      ((u = pl),
      "selectionStart" in u && Dc(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (zr && Lr(zr, u)) ||
        ((zr = u),
        (u = qo(Lc, "onSelect")),
        0 < u.length &&
          ((n = new uo("onSelect", "select", null, n, a)),
          e.push({ event: n, listeners: u }),
          (n.target = pl))));
  }
  function bs(e, n) {
    var a = {};
    return (
      (a[e.toLowerCase()] = n.toLowerCase()),
      (a["Webkit" + e] = "webkit" + n),
      (a["Moz" + e] = "moz" + n),
      a
    );
  }
  var vl = {
      animationend: bs("Animation", "AnimationEnd"),
      animationiteration: bs("Animation", "AnimationIteration"),
      animationstart: bs("Animation", "AnimationStart"),
      transitionrun: bs("Transition", "TransitionRun"),
      transitionstart: bs("Transition", "TransitionStart"),
      transitioncancel: bs("Transition", "TransitionCancel"),
      transitionend: bs("Transition", "TransitionEnd"),
    },
    Ic = {},
    Xg = {};
  sn &&
    ((Xg = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vl.animationend.animation,
      delete vl.animationiteration.animation,
      delete vl.animationstart.animation),
    "TransitionEvent" in window || delete vl.transitionend.transition);
  function As(e) {
    if (Ic[e]) return Ic[e];
    if (!vl[e]) return e;
    var n = vl[e],
      a;
    for (a in n) if (n.hasOwnProperty(a) && a in Xg) return (Ic[e] = n[a]);
    return e;
  }
  var Yg = As("animationend"),
    kg = As("animationiteration"),
    Bg = As("animationstart"),
    av = As("transitionrun"),
    ov = As("transitionstart"),
    uv = As("transitioncancel"),
    Hg = As("transitionend"),
    Pg = new Map(),
    jg =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function Mi(e, n) {
    Pg.set(e, n), Cs(n, [e]);
  }
  var ui = [],
    El = 0,
    Nc = 0;
  function fo() {
    for (var e = El, n = (Nc = El = 0); n < e; ) {
      var a = ui[n];
      ui[n++] = null;
      var u = ui[n];
      ui[n++] = null;
      var f = ui[n];
      ui[n++] = null;
      var g = ui[n];
      if (((ui[n++] = null), u !== null && f !== null)) {
        var p = u.pending;
        p === null ? (f.next = f) : ((f.next = p.next), (p.next = f)),
          (u.pending = f);
      }
      g !== 0 && Zg(a, f, g);
    }
  }
  function go(e, n, a, u) {
    (ui[El++] = e),
      (ui[El++] = n),
      (ui[El++] = a),
      (ui[El++] = u),
      (Nc |= u),
      (e.lanes |= u),
      (e = e.alternate),
      e !== null && (e.lanes |= u);
  }
  function Gc(e, n, a, u) {
    return go(e, n, a, u), _o(e);
  }
  function Nn(e, n) {
    return go(e, null, null, n), _o(e);
  }
  function Zg(e, n, a) {
    e.lanes |= a;
    var u = e.alternate;
    u !== null && (u.lanes |= a);
    for (var f = !1, g = e.return; g !== null; )
      (g.childLanes |= a),
        (u = g.alternate),
        u !== null && (u.childLanes |= a),
        g.tag === 22 &&
          ((e = g.stateNode), e === null || e._visibility & 1 || (f = !0)),
        (e = g),
        (g = g.return);
    f &&
      n !== null &&
      e.tag === 3 &&
      ((g = e.stateNode),
      (f = 31 - Te(a)),
      (g = g.hiddenUpdates),
      (e = g[f]),
      e === null ? (g[f] = [n]) : e.push(n),
      (n.lane = a | 536870912));
  }
  function _o(e) {
    if (50 < sa) throw ((sa = 0), (Bh = null), Error(s(185)));
    for (var n = e.return; n !== null; ) (e = n), (n = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Sl = {},
    Kg = new WeakMap();
  function ci(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = Kg.get(e);
      return a !== void 0
        ? a
        : ((n = { value: e, source: n, stack: q(n) }), Kg.set(e, n), n);
    }
    return { value: e, source: n, stack: q(n) };
  }
  var xl = [],
    Tl = 0,
    mo = null,
    yo = 0,
    hi = [],
    fi = 0,
    ws = null,
    rn = 1,
    an = "";
  function Ms(e, n) {
    (xl[Tl++] = yo), (xl[Tl++] = mo), (mo = e), (yo = n);
  }
  function qg(e, n, a) {
    (hi[fi++] = rn), (hi[fi++] = an), (hi[fi++] = ws), (ws = e);
    var u = rn;
    e = an;
    var f = 32 - Te(u) - 1;
    (u &= ~(1 << f)), (a += 1);
    var g = 32 - Te(n) + f;
    if (30 < g) {
      var p = f - (f % 5);
      (g = (u & ((1 << p) - 1)).toString(32)),
        (u >>= p),
        (f -= p),
        (rn = (1 << (32 - Te(n) + f)) | (a << f) | u),
        (an = g + e);
    } else (rn = (1 << g) | (a << f) | u), (an = e);
  }
  function Fc(e) {
    e.return !== null && (Ms(e, 1), qg(e, 1, 0));
  }
  function Uc(e) {
    for (; e === mo; )
      (mo = xl[--Tl]), (xl[Tl] = null), (yo = xl[--Tl]), (xl[Tl] = null);
    for (; e === ws; )
      (ws = hi[--fi]),
        (hi[fi] = null),
        (an = hi[--fi]),
        (hi[fi] = null),
        (rn = hi[--fi]),
        (hi[fi] = null);
  }
  var Ie = null,
    pe = null,
    Ot = !1,
    Oi = null,
    Hi = !1,
    Xc = Error(s(519));
  function Os(e) {
    var n = Error(s(418, ""));
    throw (Gr(ci(n, e)), Xc);
  }
  function Vg(e) {
    var n = e.stateNode,
      a = e.type,
      u = e.memoizedProps;
    switch (((n[Re] = e), (n[Xe] = u), a)) {
      case "dialog":
        bt("cancel", n), bt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        bt("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ra.length; a++) bt(ra[a], n);
        break;
      case "source":
        bt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        bt("error", n), bt("load", n);
        break;
      case "details":
        bt("toggle", n);
        break;
      case "input":
        bt("invalid", n),
          cg(
            n,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ),
          no(n);
        break;
      case "select":
        bt("invalid", n);
        break;
      case "textarea":
        bt("invalid", n), fg(n, u.value, u.defaultValue, u.children), no(n);
    }
    (a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      n.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      s0(n.textContent, a)
        ? (u.popover != null && (bt("beforetoggle", n), bt("toggle", n)),
          u.onScroll != null && bt("scroll", n),
          u.onScrollEnd != null && bt("scrollend", n),
          u.onClick != null && (n.onclick = Vo),
          (n = !0))
        : (n = !1),
      n || Os(e);
  }
  function Wg(e) {
    for (Ie = e.return; Ie; )
      switch (Ie.tag) {
        case 3:
        case 27:
          Hi = !0;
          return;
        case 5:
        case 13:
          Hi = !1;
          return;
        default:
          Ie = Ie.return;
      }
  }
  function Ir(e) {
    if (e !== Ie) return !1;
    if (!Ot) return Wg(e), (Ot = !0), !1;
    var n = !1,
      a;
    if (
      ((a = e.tag !== 3 && e.tag !== 27) &&
        ((a = e.tag === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || rf(e.type, e.memoizedProps))),
        (a = !a)),
      a && (n = !0),
      n && pe && Os(e),
      Wg(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      t: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (n === 0) {
                pe = Li(e.nextSibling);
                break t;
              }
              n--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || n++;
          e = e.nextSibling;
        }
        pe = null;
      }
    } else pe = Ie ? Li(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Nr() {
    (pe = Ie = null), (Ot = !1);
  }
  function Gr(e) {
    Oi === null ? (Oi = [e]) : Oi.push(e);
  }
  var Fr = Error(s(460)),
    Qg = Error(s(474)),
    Yc = { then: function () {} };
  function Jg(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function po() {}
  function $g(e, n, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(n) : a !== n && (n.then(po, po), (n = a)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((e = n.reason), e === Fr ? Error(s(483)) : e);
      default:
        if (typeof n.status == "string") n.then(po, po);
        else {
          if (((e = Ht), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = n),
            (e.status = "pending"),
            e.then(
              function (u) {
                if (n.status === "pending") {
                  var f = n;
                  (f.status = "fulfilled"), (f.value = u);
                }
              },
              function (u) {
                if (n.status === "pending") {
                  var f = n;
                  (f.status = "rejected"), (f.reason = u);
                }
              },
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((e = n.reason), e === Fr ? Error(s(483)) : e);
        }
        throw ((Ur = n), Fr);
    }
  }
  var Ur = null;
  function t_() {
    if (Ur === null) throw Error(s(459));
    var e = Ur;
    return (Ur = null), e;
  }
  var Cl = null,
    Xr = 0;
  function vo(e) {
    var n = Xr;
    return (Xr += 1), Cl === null && (Cl = []), $g(Cl, e, n);
  }
  function Yr(e, n) {
    (n = n.props.ref), (e.ref = n !== void 0 ? n : null);
  }
  function Eo(e, n) {
    throw n.$$typeof === o
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e,
          ),
        ));
  }
  function e_(e) {
    var n = e._init;
    return n(e._payload);
  }
  function i_(e) {
    function n(L, w) {
      if (e) {
        var I = L.deletions;
        I === null ? ((L.deletions = [w]), (L.flags |= 16)) : I.push(w);
      }
    }
    function a(L, w) {
      if (!e) return null;
      for (; w !== null; ) n(L, w), (w = w.sibling);
      return null;
    }
    function u(L) {
      for (var w = new Map(); L !== null; )
        L.key !== null ? w.set(L.key, L) : w.set(L.index, L), (L = L.sibling);
      return w;
    }
    function f(L, w) {
      return (L = Kn(L, w)), (L.index = 0), (L.sibling = null), L;
    }
    function g(L, w, I) {
      return (
        (L.index = I),
        e
          ? ((I = L.alternate),
            I !== null
              ? ((I = I.index), I < w ? ((L.flags |= 33554434), w) : I)
              : ((L.flags |= 33554434), w))
          : ((L.flags |= 1048576), w)
      );
    }
    function p(L) {
      return e && L.alternate === null && (L.flags |= 33554434), L;
    }
    function E(L, w, I, P) {
      return w === null || w.tag !== 6
        ? ((w = Ih(I, L.mode, P)), (w.return = L), w)
        : ((w = f(w, I)), (w.return = L), w);
    }
    function T(L, w, I, P) {
      var et = I.type;
      return et === d
        ? B(L, w, I.props.children, P, I.key)
        : w !== null &&
            (w.elementType === et ||
              (typeof et == "object" &&
                et !== null &&
                et.$$typeof === O &&
                e_(et) === w.type))
          ? ((w = f(w, I.props)), Yr(w, I), (w.return = L), w)
          : ((w = Uo(I.type, I.key, I.props, null, L.mode, P)),
            Yr(w, I),
            (w.return = L),
            w);
    }
    function M(L, w, I, P) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== I.containerInfo ||
        w.stateNode.implementation !== I.implementation
        ? ((w = Nh(I, L.mode, P)), (w.return = L), w)
        : ((w = f(w, I.children || [])), (w.return = L), w);
    }
    function B(L, w, I, P, et) {
      return w === null || w.tag !== 7
        ? ((w = Ys(I, L.mode, P, et)), (w.return = L), w)
        : ((w = f(w, I)), (w.return = L), w);
    }
    function K(L, w, I) {
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return (w = Ih("" + w, L.mode, I)), (w.return = L), w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case c:
            return (
              (I = Uo(w.type, w.key, w.props, null, L.mode, I)),
              Yr(I, w),
              (I.return = L),
              I
            );
          case h:
            return (w = Nh(w, L.mode, I)), (w.return = L), w;
          case O:
            var P = w._init;
            return (w = P(w._payload)), K(L, w, I);
        }
        if (tt(w) || j(w))
          return (w = Ys(w, L.mode, I, null)), (w.return = L), w;
        if (typeof w.then == "function") return K(L, vo(w), I);
        if (w.$$typeof === S) return K(L, No(L, w), I);
        Eo(L, w);
      }
      return null;
    }
    function N(L, w, I, P) {
      var et = w !== null ? w.key : null;
      if (
        (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
      )
        return et !== null ? null : E(L, w, "" + I, P);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case c:
            return I.key === et ? T(L, w, I, P) : null;
          case h:
            return I.key === et ? M(L, w, I, P) : null;
          case O:
            return (et = I._init), (I = et(I._payload)), N(L, w, I, P);
        }
        if (tt(I) || j(I)) return et !== null ? null : B(L, w, I, P, null);
        if (typeof I.then == "function") return N(L, w, vo(I), P);
        if (I.$$typeof === S) return N(L, w, No(L, I), P);
        Eo(L, I);
      }
      return null;
    }
    function k(L, w, I, P, et) {
      if (
        (typeof P == "string" && P !== "") ||
        typeof P == "number" ||
        typeof P == "bigint"
      )
        return (L = L.get(I) || null), E(w, L, "" + P, et);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case c:
            return (
              (L = L.get(P.key === null ? I : P.key) || null), T(w, L, P, et)
            );
          case h:
            return (
              (L = L.get(P.key === null ? I : P.key) || null), M(w, L, P, et)
            );
          case O:
            var Ct = P._init;
            return (P = Ct(P._payload)), k(L, w, I, P, et);
        }
        if (tt(P) || j(P)) return (L = L.get(I) || null), B(w, L, P, et, null);
        if (typeof P.then == "function") return k(L, w, I, vo(P), et);
        if (P.$$typeof === S) return k(L, w, I, No(w, P), et);
        Eo(w, P);
      }
      return null;
    }
    function at(L, w, I, P) {
      for (
        var et = null, Ct = null, ut = w, dt = (w = 0), de = null;
        ut !== null && dt < I.length;
        dt++
      ) {
        ut.index > dt ? ((de = ut), (ut = null)) : (de = ut.sibling);
        var Dt = N(L, ut, I[dt], P);
        if (Dt === null) {
          ut === null && (ut = de);
          break;
        }
        e && ut && Dt.alternate === null && n(L, ut),
          (w = g(Dt, w, dt)),
          Ct === null ? (et = Dt) : (Ct.sibling = Dt),
          (Ct = Dt),
          (ut = de);
      }
      if (dt === I.length) return a(L, ut), Ot && Ms(L, dt), et;
      if (ut === null) {
        for (; dt < I.length; dt++)
          (ut = K(L, I[dt], P)),
            ut !== null &&
              ((w = g(ut, w, dt)),
              Ct === null ? (et = ut) : (Ct.sibling = ut),
              (Ct = ut));
        return Ot && Ms(L, dt), et;
      }
      for (ut = u(ut); dt < I.length; dt++)
        (de = k(ut, L, dt, I[dt], P)),
          de !== null &&
            (e &&
              de.alternate !== null &&
              ut.delete(de.key === null ? dt : de.key),
            (w = g(de, w, dt)),
            Ct === null ? (et = de) : (Ct.sibling = de),
            (Ct = de));
      return (
        e &&
          ut.forEach(function (ts) {
            return n(L, ts);
          }),
        Ot && Ms(L, dt),
        et
      );
    }
    function yt(L, w, I, P) {
      if (I == null) throw Error(s(151));
      for (
        var et = null,
          Ct = null,
          ut = w,
          dt = (w = 0),
          de = null,
          Dt = I.next();
        ut !== null && !Dt.done;
        dt++, Dt = I.next()
      ) {
        ut.index > dt ? ((de = ut), (ut = null)) : (de = ut.sibling);
        var ts = N(L, ut, Dt.value, P);
        if (ts === null) {
          ut === null && (ut = de);
          break;
        }
        e && ut && ts.alternate === null && n(L, ut),
          (w = g(ts, w, dt)),
          Ct === null ? (et = ts) : (Ct.sibling = ts),
          (Ct = ts),
          (ut = de);
      }
      if (Dt.done) return a(L, ut), Ot && Ms(L, dt), et;
      if (ut === null) {
        for (; !Dt.done; dt++, Dt = I.next())
          (Dt = K(L, Dt.value, P)),
            Dt !== null &&
              ((w = g(Dt, w, dt)),
              Ct === null ? (et = Dt) : (Ct.sibling = Dt),
              (Ct = Dt));
        return Ot && Ms(L, dt), et;
      }
      for (ut = u(ut); !Dt.done; dt++, Dt = I.next())
        (Dt = k(ut, L, dt, Dt.value, P)),
          Dt !== null &&
            (e &&
              Dt.alternate !== null &&
              ut.delete(Dt.key === null ? dt : Dt.key),
            (w = g(Dt, w, dt)),
            Ct === null ? (et = Dt) : (Ct.sibling = Dt),
            (Ct = Dt));
      return (
        e &&
          ut.forEach(function (TE) {
            return n(L, TE);
          }),
        Ot && Ms(L, dt),
        et
      );
    }
    function Jt(L, w, I, P) {
      if (
        (typeof I == "object" &&
          I !== null &&
          I.type === d &&
          I.key === null &&
          (I = I.props.children),
        typeof I == "object" && I !== null)
      ) {
        switch (I.$$typeof) {
          case c:
            t: {
              for (var et = I.key; w !== null; ) {
                if (w.key === et) {
                  if (((et = I.type), et === d)) {
                    if (w.tag === 7) {
                      a(L, w.sibling),
                        (P = f(w, I.props.children)),
                        (P.return = L),
                        (L = P);
                      break t;
                    }
                  } else if (
                    w.elementType === et ||
                    (typeof et == "object" &&
                      et !== null &&
                      et.$$typeof === O &&
                      e_(et) === w.type)
                  ) {
                    a(L, w.sibling),
                      (P = f(w, I.props)),
                      Yr(P, I),
                      (P.return = L),
                      (L = P);
                    break t;
                  }
                  a(L, w);
                  break;
                } else n(L, w);
                w = w.sibling;
              }
              I.type === d
                ? ((P = Ys(I.props.children, L.mode, P, I.key)),
                  (P.return = L),
                  (L = P))
                : ((P = Uo(I.type, I.key, I.props, null, L.mode, P)),
                  Yr(P, I),
                  (P.return = L),
                  (L = P));
            }
            return p(L);
          case h:
            t: {
              for (et = I.key; w !== null; ) {
                if (w.key === et)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === I.containerInfo &&
                    w.stateNode.implementation === I.implementation
                  ) {
                    a(L, w.sibling),
                      (P = f(w, I.children || [])),
                      (P.return = L),
                      (L = P);
                    break t;
                  } else {
                    a(L, w);
                    break;
                  }
                else n(L, w);
                w = w.sibling;
              }
              (P = Nh(I, L.mode, P)), (P.return = L), (L = P);
            }
            return p(L);
          case O:
            return (et = I._init), (I = et(I._payload)), Jt(L, w, I, P);
        }
        if (tt(I)) return at(L, w, I, P);
        if (j(I)) {
          if (((et = j(I)), typeof et != "function")) throw Error(s(150));
          return (I = et.call(I)), yt(L, w, I, P);
        }
        if (typeof I.then == "function") return Jt(L, w, vo(I), P);
        if (I.$$typeof === S) return Jt(L, w, No(L, I), P);
        Eo(L, I);
      }
      return (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
        ? ((I = "" + I),
          w !== null && w.tag === 6
            ? (a(L, w.sibling), (P = f(w, I)), (P.return = L), (L = P))
            : (a(L, w), (P = Ih(I, L.mode, P)), (P.return = L), (L = P)),
          p(L))
        : a(L, w);
    }
    return function (L, w, I, P) {
      try {
        Xr = 0;
        var et = Jt(L, w, I, P);
        return (Cl = null), et;
      } catch (ut) {
        if (ut === Fr) throw ut;
        var Ct = mi(29, ut, null, L.mode);
        return (Ct.lanes = P), (Ct.return = L), Ct;
      } finally {
      }
    };
  }
  var Ds = i_(!0),
    n_ = i_(!1),
    Rl = mt(null),
    So = mt(0);
  function s_(e, n) {
    (e = pn), vt(So, e), vt(Rl, n), (pn = e | n.baseLanes);
  }
  function kc() {
    vt(So, pn), vt(Rl, Rl.current);
  }
  function Bc() {
    (pn = So.current), Ut(Rl), Ut(So);
  }
  var di = mt(null),
    Pi = null;
  function Gn(e) {
    var n = e.alternate;
    vt(le, le.current & 1),
      vt(di, e),
      Pi === null &&
        (n === null || Rl.current !== null || n.memoizedState !== null) &&
        (Pi = e);
  }
  function l_(e) {
    if (e.tag === 22) {
      if ((vt(le, le.current), vt(di, e), Pi === null)) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Pi = e);
      }
    } else Fn();
  }
  function Fn() {
    vt(le, le.current), vt(di, di.current);
  }
  function on(e) {
    Ut(di), Pi === e && (Pi = null), Ut(le);
  }
  var le = mt(0);
  function xo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var cv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  e.push(u);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                e.forEach(function (a) {
                  return a();
                });
            };
          },
    hv = l.unstable_scheduleCallback,
    fv = l.unstable_NormalPriority,
    re = {
      $$typeof: S,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Hc() {
    return { controller: new cv(), data: new Map(), refCount: 0 };
  }
  function kr(e) {
    e.refCount--,
      e.refCount === 0 &&
        hv(fv, function () {
          e.controller.abort();
        });
  }
  var Br = null,
    Pc = 0,
    bl = 0,
    Al = null;
  function dv(e, n) {
    if (Br === null) {
      var a = (Br = []);
      (Pc = 0),
        (bl = Wh()),
        (Al = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        });
    }
    return Pc++, n.then(r_, r_), n;
  }
  function r_() {
    if (--Pc === 0 && Br !== null) {
      Al !== null && (Al.status = "fulfilled");
      var e = Br;
      (Br = null), (bl = 0), (Al = null);
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function gv(e, n) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          a.push(f);
        },
      };
    return (
      e.then(
        function () {
          (u.status = "fulfilled"), (u.value = n);
          for (var f = 0; f < a.length; f++) (0, a[f])(n);
        },
        function (f) {
          for (u.status = "rejected", u.reason = f, f = 0; f < a.length; f++)
            (0, a[f])(void 0);
        },
      ),
      u
    );
  }
  var a_ = F.S;
  F.S = function (e, n) {
    typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      dv(e, n),
      a_ !== null && a_(e, n);
  };
  var Ls = mt(null);
  function jc() {
    var e = Ls.current;
    return e !== null ? e : Ht.pooledCache;
  }
  function To(e, n) {
    n === null ? vt(Ls, Ls.current) : vt(Ls, n.pool);
  }
  function o_() {
    var e = jc();
    return e === null ? null : { parent: re._currentValue, pool: e };
  }
  var Un = 0,
    Tt = null,
    Xt = null,
    ee = null,
    Co = !1,
    wl = !1,
    zs = !1,
    Ro = 0,
    Hr = 0,
    Ml = null,
    _v = 0;
  function te() {
    throw Error(s(321));
  }
  function Zc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!Qe(e[a], n[a])) return !1;
    return !0;
  }
  function Kc(e, n, a, u, f, g) {
    return (
      (Un = g),
      (Tt = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (F.H = e === null || e.memoizedState === null ? Is : Xn),
      (zs = !1),
      (g = a(u, f)),
      (zs = !1),
      wl && (g = c_(n, a, u, f)),
      u_(e),
      g
    );
  }
  function u_(e) {
    F.H = ji;
    var n = Xt !== null && Xt.next !== null;
    if (((Un = 0), (ee = Xt = Tt = null), (Co = !1), (Hr = 0), (Ml = null), n))
      throw Error(s(300));
    e === null ||
      he ||
      ((e = e.dependencies), e !== null && Io(e) && (he = !0));
  }
  function c_(e, n, a, u) {
    Tt = e;
    var f = 0;
    do {
      if ((wl && (Ml = null), (Hr = 0), (wl = !1), 25 <= f))
        throw Error(s(301));
      if (((f += 1), (ee = Xt = null), e.updateQueue != null)) {
        var g = e.updateQueue;
        (g.lastEffect = null),
          (g.events = null),
          (g.stores = null),
          g.memoCache != null && (g.memoCache.index = 0);
      }
      (F.H = Ns), (g = n(a, u));
    } while (wl);
    return g;
  }
  function mv() {
    var e = F.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == "function" ? Pr(n) : n),
      (e = e.useState()[0]),
      (Xt !== null ? Xt.memoizedState : null) !== e && (Tt.flags |= 1024),
      n
    );
  }
  function qc() {
    var e = Ro !== 0;
    return (Ro = 0), e;
  }
  function Vc(e, n, a) {
    (n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~a);
  }
  function Wc(e) {
    if (Co) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), (e = e.next);
      }
      Co = !1;
    }
    (Un = 0), (ee = Xt = Tt = null), (wl = !1), (Hr = Ro = 0), (Ml = null);
  }
  function ke() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ee === null ? (Tt.memoizedState = ee = e) : (ee = ee.next = e), ee;
  }
  function ie() {
    if (Xt === null) {
      var e = Tt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Xt.next;
    var n = ee === null ? Tt.memoizedState : ee.next;
    if (n !== null) (ee = n), (Xt = e);
    else {
      if (e === null)
        throw Tt.alternate === null ? Error(s(467)) : Error(s(310));
      (Xt = e),
        (e = {
          memoizedState: Xt.memoizedState,
          baseState: Xt.baseState,
          baseQueue: Xt.baseQueue,
          queue: Xt.queue,
          next: null,
        }),
        ee === null ? (Tt.memoizedState = ee = e) : (ee = ee.next = e);
    }
    return ee;
  }
  var bo;
  bo = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Pr(e) {
    var n = Hr;
    return (
      (Hr += 1),
      Ml === null && (Ml = []),
      (e = $g(Ml, e, n)),
      (n = Tt),
      (ee === null ? n.memoizedState : ee.next) === null &&
        ((n = n.alternate),
        (F.H = n === null || n.memoizedState === null ? Is : Xn)),
      e
    );
  }
  function Ao(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Pr(e);
      if (e.$$typeof === S) return be(e);
    }
    throw Error(s(438, String(e)));
  }
  function Qc(e) {
    var n = null,
      a = Tt.updateQueue;
    if ((a !== null && (n = a.memoCache), n == null)) {
      var u = Tt.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (n = {
              data: u.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      a === null && ((a = bo()), (Tt.updateQueue = a)),
      (a.memoCache = n),
      (a = n.data[n.index]),
      a === void 0)
    )
      for (a = n.data[n.index] = Array(e), u = 0; u < e; u++) a[u] = z;
    return n.index++, a;
  }
  function un(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function wo(e) {
    var n = ie();
    return Jc(n, Xt, e);
  }
  function Jc(e, n, a) {
    var u = e.queue;
    if (u === null) throw Error(s(311));
    u.lastRenderedReducer = a;
    var f = e.baseQueue,
      g = u.pending;
    if (g !== null) {
      if (f !== null) {
        var p = f.next;
        (f.next = g.next), (g.next = p);
      }
      (n.baseQueue = f = g), (u.pending = null);
    }
    if (((g = e.baseState), f === null)) e.memoizedState = g;
    else {
      n = f.next;
      var E = (p = null),
        T = null,
        M = n,
        B = !1;
      do {
        var K = M.lane & -536870913;
        if (K !== M.lane ? (wt & K) === K : (Un & K) === K) {
          var N = M.revertLane;
          if (N === 0)
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: M.action,
                  hasEagerState: M.hasEagerState,
                  eagerState: M.eagerState,
                  next: null,
                }),
              K === bl && (B = !0);
          else if ((Un & N) === N) {
            (M = M.next), N === bl && (B = !0);
            continue;
          } else
            (K = {
              lane: 0,
              revertLane: M.revertLane,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null,
            }),
              T === null ? ((E = T = K), (p = g)) : (T = T.next = K),
              (Tt.lanes |= N),
              (qn |= N);
          (K = M.action),
            zs && a(g, K),
            (g = M.hasEagerState ? M.eagerState : a(g, K));
        } else
          (N = {
            lane: K,
            revertLane: M.revertLane,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          }),
            T === null ? ((E = T = N), (p = g)) : (T = T.next = N),
            (Tt.lanes |= K),
            (qn |= K);
        M = M.next;
      } while (M !== null && M !== n);
      if (
        (T === null ? (p = g) : (T.next = E),
        !Qe(g, e.memoizedState) && ((he = !0), B && ((a = Al), a !== null)))
      )
        throw a;
      (e.memoizedState = g),
        (e.baseState = p),
        (e.baseQueue = T),
        (u.lastRenderedState = g);
    }
    return f === null && (u.lanes = 0), [e.memoizedState, u.dispatch];
  }
  function $c(e) {
    var n = ie(),
      a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var u = a.dispatch,
      f = a.pending,
      g = n.memoizedState;
    if (f !== null) {
      a.pending = null;
      var p = (f = f.next);
      do (g = e(g, p.action)), (p = p.next);
      while (p !== f);
      Qe(g, n.memoizedState) || (he = !0),
        (n.memoizedState = g),
        n.baseQueue === null && (n.baseState = g),
        (a.lastRenderedState = g);
    }
    return [g, u];
  }
  function h_(e, n, a) {
    var u = Tt,
      f = ie(),
      g = Ot;
    if (g) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var p = !Qe((Xt || f).memoizedState, a);
    if (
      (p && ((f.memoizedState = a), (he = !0)),
      (f = f.queue),
      ih(g_.bind(null, u, f, e), [e]),
      f.getSnapshot !== n || p || (ee !== null && ee.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        Ol(9, d_.bind(null, u, f, a, n), { destroy: void 0 }, null),
        Ht === null)
      )
        throw Error(s(349));
      g || (Un & 60) !== 0 || f_(u, n, a);
    }
    return a;
  }
  function f_(e, n, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: a }),
      (n = Tt.updateQueue),
      n === null
        ? ((n = bo()), (Tt.updateQueue = n), (n.stores = [e]))
        : ((a = n.stores), a === null ? (n.stores = [e]) : a.push(e));
  }
  function d_(e, n, a, u) {
    (n.value = a), (n.getSnapshot = u), __(n) && m_(e);
  }
  function g_(e, n, a) {
    return a(function () {
      __(n) && m_(e);
    });
  }
  function __(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !Qe(e, a);
    } catch {
      return !0;
    }
  }
  function m_(e) {
    var n = Nn(e, 2);
    n !== null && Ne(n, e, 2);
  }
  function th(e) {
    var n = ke();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), zs)) {
        li(!0);
        try {
          a();
        } finally {
          li(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: e,
      }),
      n
    );
  }
  function y_(e, n, a, u) {
    return (e.baseState = a), Jc(e, Xt, typeof u == "function" ? u : un);
  }
  function yv(e, n, a, u, f) {
    if (Do(e)) throw Error(s(485));
    if (((e = n.action), e !== null)) {
      var g = {
        payload: f,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          g.listeners.push(p);
        },
      };
      F.T !== null ? a(!0) : (g.isTransition = !1),
        u(g),
        (a = n.pending),
        a === null
          ? ((g.next = n.pending = g), p_(n, g))
          : ((g.next = a.next), (n.pending = a.next = g));
    }
  }
  function p_(e, n) {
    var a = n.action,
      u = n.payload,
      f = e.state;
    if (n.isTransition) {
      var g = F.T,
        p = {};
      F.T = p;
      try {
        var E = a(f, u),
          T = F.S;
        T !== null && T(p, E), v_(e, n, E);
      } catch (M) {
        eh(e, n, M);
      } finally {
        F.T = g;
      }
    } else
      try {
        (g = a(f, u)), v_(e, n, g);
      } catch (M) {
        eh(e, n, M);
      }
  }
  function v_(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            E_(e, n, u);
          },
          function (u) {
            return eh(e, n, u);
          },
        )
      : E_(e, n, a);
  }
  function E_(e, n, a) {
    (n.status = "fulfilled"),
      (n.value = a),
      S_(n),
      (e.state = a),
      (n = e.pending),
      n !== null &&
        ((a = n.next),
        a === n ? (e.pending = null) : ((a = a.next), (n.next = a), p_(e, a)));
  }
  function eh(e, n, a) {
    var u = e.pending;
    if (((e.pending = null), u !== null)) {
      u = u.next;
      do (n.status = "rejected"), (n.reason = a), S_(n), (n = n.next);
      while (n !== u);
    }
    e.action = null;
  }
  function S_(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function x_(e, n) {
    return n;
  }
  function T_(e, n) {
    if (Ot) {
      var a = Ht.formState;
      if (a !== null) {
        t: {
          var u = Tt;
          if (Ot) {
            if (pe) {
              e: {
                for (var f = pe, g = Hi; f.nodeType !== 8; ) {
                  if (!g) {
                    f = null;
                    break e;
                  }
                  if (((f = Li(f.nextSibling)), f === null)) {
                    f = null;
                    break e;
                  }
                }
                (g = f.data), (f = g === "F!" || g === "F" ? f : null);
              }
              if (f) {
                (pe = Li(f.nextSibling)), (u = f.data === "F!");
                break t;
              }
            }
            Os(u);
          }
          u = !1;
        }
        u && (n = a[0]);
      }
    }
    return (
      (a = ke()),
      (a.memoizedState = a.baseState = n),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: x_,
        lastRenderedState: n,
      }),
      (a.queue = u),
      (a = k_.bind(null, Tt, u)),
      (u.dispatch = a),
      (u = th(!1)),
      (g = ah.bind(null, Tt, !1, u.queue)),
      (u = ke()),
      (f = { state: n, dispatch: null, action: e, pending: null }),
      (u.queue = f),
      (a = yv.bind(null, Tt, f, g, a)),
      (f.dispatch = a),
      (u.memoizedState = e),
      [n, a, !1]
    );
  }
  function C_(e) {
    var n = ie();
    return R_(n, Xt, e);
  }
  function R_(e, n, a) {
    (n = Jc(e, n, x_)[0]),
      (e = wo(un)[0]),
      (n =
        typeof n == "object" && n !== null && typeof n.then == "function"
          ? Pr(n)
          : n);
    var u = ie(),
      f = u.queue,
      g = f.dispatch;
    return (
      a !== u.memoizedState &&
        ((Tt.flags |= 2048),
        Ol(9, pv.bind(null, f, a), { destroy: void 0 }, null)),
      [n, g, e]
    );
  }
  function pv(e, n) {
    e.action = n;
  }
  function b_(e) {
    var n = ie(),
      a = Xt;
    if (a !== null) return R_(n, a, e);
    ie(), (n = n.memoizedState), (a = ie());
    var u = a.queue.dispatch;
    return (a.memoizedState = e), [n, u, !1];
  }
  function Ol(e, n, a, u) {
    return (
      (e = { tag: e, create: n, inst: a, deps: u, next: null }),
      (n = Tt.updateQueue),
      n === null && ((n = bo()), (Tt.updateQueue = n)),
      (a = n.lastEffect),
      a === null
        ? (n.lastEffect = e.next = e)
        : ((u = a.next), (a.next = e), (e.next = u), (n.lastEffect = e)),
      e
    );
  }
  function A_() {
    return ie().memoizedState;
  }
  function Mo(e, n, a, u) {
    var f = ke();
    (Tt.flags |= e),
      (f.memoizedState = Ol(
        1 | n,
        a,
        { destroy: void 0 },
        u === void 0 ? null : u,
      ));
  }
  function Oo(e, n, a, u) {
    var f = ie();
    u = u === void 0 ? null : u;
    var g = f.memoizedState.inst;
    Xt !== null && u !== null && Zc(u, Xt.memoizedState.deps)
      ? (f.memoizedState = Ol(n, a, g, u))
      : ((Tt.flags |= e), (f.memoizedState = Ol(1 | n, a, g, u)));
  }
  function w_(e, n) {
    Mo(8390656, 8, e, n);
  }
  function ih(e, n) {
    Oo(2048, 8, e, n);
  }
  function M_(e, n) {
    return Oo(4, 2, e, n);
  }
  function O_(e, n) {
    return Oo(4, 4, e, n);
  }
  function D_(e, n) {
    if (typeof n == "function") {
      e = e();
      var a = n(e);
      return function () {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function L_(e, n, a) {
    (a = a != null ? a.concat([e]) : null), Oo(4, 4, D_.bind(null, n, e), a);
  }
  function nh() {}
  function z_(e, n) {
    var a = ie();
    n = n === void 0 ? null : n;
    var u = a.memoizedState;
    return n !== null && Zc(n, u[1]) ? u[0] : ((a.memoizedState = [e, n]), e);
  }
  function I_(e, n) {
    var a = ie();
    n = n === void 0 ? null : n;
    var u = a.memoizedState;
    if (n !== null && Zc(n, u[1])) return u[0];
    if (((u = e()), zs)) {
      li(!0);
      try {
        e();
      } finally {
        li(!1);
      }
    }
    return (a.memoizedState = [u, n]), u;
  }
  function sh(e, n, a) {
    return a === void 0 || (Un & 1073741824) !== 0
      ? (e.memoizedState = n)
      : ((e.memoizedState = a), (e = Gm()), (Tt.lanes |= e), (qn |= e), a);
  }
  function N_(e, n, a, u) {
    return Qe(a, n)
      ? a
      : Rl.current !== null
        ? ((e = sh(e, a, u)), Qe(e, n) || (he = !0), e)
        : (Un & 42) === 0
          ? ((he = !0), (e.memoizedState = a))
          : ((e = Gm()), (Tt.lanes |= e), (qn |= e), n);
  }
  function G_(e, n, a, u, f) {
    var g = J.p;
    J.p = g !== 0 && 8 > g ? g : 8;
    var p = F.T,
      E = {};
    (F.T = E), ah(e, !1, n, a);
    try {
      var T = f(),
        M = F.S;
      if (
        (M !== null && M(E, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var B = gv(T, u);
        jr(e, n, B, ei(e));
      } else jr(e, n, u, ei(e));
    } catch (K) {
      jr(e, n, { then: function () {}, status: "rejected", reason: K }, ei());
    } finally {
      (J.p = g), (F.T = p);
    }
  }
  function vv() {}
  function lh(e, n, a, u) {
    if (e.tag !== 5) throw Error(s(476));
    var f = F_(e).queue;
    G_(
      e,
      f,
      n,
      rt,
      a === null
        ? vv
        : function () {
            return U_(e), a(u);
          },
    );
  }
  function F_(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: rt,
      baseState: rt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: rt,
      },
      next: null,
    };
    var a = {};
    return (
      (n.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: un,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function U_(e) {
    var n = F_(e).next.queue;
    jr(e, n, {}, ei());
  }
  function rh() {
    return be(ha);
  }
  function X_() {
    return ie().memoizedState;
  }
  function Y_() {
    return ie().memoizedState;
  }
  function Ev(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = ei();
          e = Bn(a);
          var u = Hn(n, e, a);
          u !== null && (Ne(u, n, a), qr(u, n, a)),
            (n = { cache: Hc() }),
            (e.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function Sv(e, n, a) {
    var u = ei();
    (a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Do(e)
        ? B_(n, a)
        : ((a = Gc(e, n, a, u)), a !== null && (Ne(a, e, u), H_(a, n, u)));
  }
  function k_(e, n, a) {
    var u = ei();
    jr(e, n, a, u);
  }
  function jr(e, n, a, u) {
    var f = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Do(e)) B_(n, f);
    else {
      var g = e.alternate;
      if (
        e.lanes === 0 &&
        (g === null || g.lanes === 0) &&
        ((g = n.lastRenderedReducer), g !== null)
      )
        try {
          var p = n.lastRenderedState,
            E = g(p, a);
          if (((f.hasEagerState = !0), (f.eagerState = E), Qe(E, p)))
            return go(e, n, f, 0), Ht === null && fo(), !1;
        } catch {
        } finally {
        }
      if (((a = Gc(e, n, f, u)), a !== null))
        return Ne(a, e, u), H_(a, n, u), !0;
    }
    return !1;
  }
  function ah(e, n, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Wh(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Do(e))
    ) {
      if (n) throw Error(s(479));
    } else (n = Gc(e, a, u, 2)), n !== null && Ne(n, e, 2);
  }
  function Do(e) {
    var n = e.alternate;
    return e === Tt || (n !== null && n === Tt);
  }
  function B_(e, n) {
    wl = Co = !0;
    var a = e.pending;
    a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
      (e.pending = n);
  }
  function H_(e, n, a) {
    if ((a & 4194176) !== 0) {
      var u = n.lanes;
      (u &= e.pendingLanes), (a |= u), (n.lanes = a), ue(e, a);
    }
  }
  var ji = {
    readContext: be,
    use: Ao,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useLayoutEffect: te,
    useInsertionEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useSyncExternalStore: te,
    useId: te,
  };
  (ji.useCacheRefresh = te),
    (ji.useMemoCache = te),
    (ji.useHostTransitionStatus = te),
    (ji.useFormState = te),
    (ji.useActionState = te),
    (ji.useOptimistic = te);
  var Is = {
    readContext: be,
    use: Ao,
    useCallback: function (e, n) {
      return (ke().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: be,
    useEffect: w_,
    useImperativeHandle: function (e, n, a) {
      (a = a != null ? a.concat([e]) : null),
        Mo(4194308, 4, D_.bind(null, n, e), a);
    },
    useLayoutEffect: function (e, n) {
      return Mo(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      Mo(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var a = ke();
      n = n === void 0 ? null : n;
      var u = e();
      if (zs) {
        li(!0);
        try {
          e();
        } finally {
          li(!1);
        }
      }
      return (a.memoizedState = [u, n]), u;
    },
    useReducer: function (e, n, a) {
      var u = ke();
      if (a !== void 0) {
        var f = a(n);
        if (zs) {
          li(!0);
          try {
            a(n);
          } finally {
            li(!1);
          }
        }
      } else f = n;
      return (
        (u.memoizedState = u.baseState = f),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: f,
        }),
        (u.queue = e),
        (e = e.dispatch = Sv.bind(null, Tt, e)),
        [u.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = ke();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: function (e) {
      e = th(e);
      var n = e.queue,
        a = k_.bind(null, Tt, n);
      return (n.dispatch = a), [e.memoizedState, a];
    },
    useDebugValue: nh,
    useDeferredValue: function (e, n) {
      var a = ke();
      return sh(a, e, n);
    },
    useTransition: function () {
      var e = th(!1);
      return (
        (e = G_.bind(null, Tt, e.queue, !0, !1)),
        (ke().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, n, a) {
      var u = Tt,
        f = ke();
      if (Ot) {
        if (a === void 0) throw Error(s(407));
        a = a();
      } else {
        if (((a = n()), Ht === null)) throw Error(s(349));
        (wt & 60) !== 0 || f_(u, n, a);
      }
      f.memoizedState = a;
      var g = { value: a, getSnapshot: n };
      return (
        (f.queue = g),
        w_(g_.bind(null, u, g, e), [e]),
        (u.flags |= 2048),
        Ol(9, d_.bind(null, u, g, a, n), { destroy: void 0 }, null),
        a
      );
    },
    useId: function () {
      var e = ke(),
        n = Ht.identifierPrefix;
      if (Ot) {
        var a = an,
          u = rn;
        (a = (u & ~(1 << (32 - Te(u) - 1))).toString(32) + a),
          (n = ":" + n + "R" + a),
          (a = Ro++),
          0 < a && (n += "H" + a.toString(32)),
          (n += ":");
      } else (a = _v++), (n = ":" + n + "r" + a.toString(32) + ":");
      return (e.memoizedState = n);
    },
    useCacheRefresh: function () {
      return (ke().memoizedState = Ev.bind(null, Tt));
    },
  };
  (Is.useMemoCache = Qc),
    (Is.useHostTransitionStatus = rh),
    (Is.useFormState = T_),
    (Is.useActionState = T_),
    (Is.useOptimistic = function (e) {
      var n = ke();
      n.memoizedState = n.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (n.queue = a), (n = ah.bind(null, Tt, !0, a)), (a.dispatch = n), [e, n]
      );
    });
  var Xn = {
    readContext: be,
    use: Ao,
    useCallback: z_,
    useContext: be,
    useEffect: ih,
    useImperativeHandle: L_,
    useInsertionEffect: M_,
    useLayoutEffect: O_,
    useMemo: I_,
    useReducer: wo,
    useRef: A_,
    useState: function () {
      return wo(un);
    },
    useDebugValue: nh,
    useDeferredValue: function (e, n) {
      var a = ie();
      return N_(a, Xt.memoizedState, e, n);
    },
    useTransition: function () {
      var e = wo(un)[0],
        n = ie().memoizedState;
      return [typeof e == "boolean" ? e : Pr(e), n];
    },
    useSyncExternalStore: h_,
    useId: X_,
  };
  (Xn.useCacheRefresh = Y_),
    (Xn.useMemoCache = Qc),
    (Xn.useHostTransitionStatus = rh),
    (Xn.useFormState = C_),
    (Xn.useActionState = C_),
    (Xn.useOptimistic = function (e, n) {
      var a = ie();
      return y_(a, Xt, e, n);
    });
  var Ns = {
    readContext: be,
    use: Ao,
    useCallback: z_,
    useContext: be,
    useEffect: ih,
    useImperativeHandle: L_,
    useInsertionEffect: M_,
    useLayoutEffect: O_,
    useMemo: I_,
    useReducer: $c,
    useRef: A_,
    useState: function () {
      return $c(un);
    },
    useDebugValue: nh,
    useDeferredValue: function (e, n) {
      var a = ie();
      return Xt === null ? sh(a, e, n) : N_(a, Xt.memoizedState, e, n);
    },
    useTransition: function () {
      var e = $c(un)[0],
        n = ie().memoizedState;
      return [typeof e == "boolean" ? e : Pr(e), n];
    },
    useSyncExternalStore: h_,
    useId: X_,
  };
  (Ns.useCacheRefresh = Y_),
    (Ns.useMemoCache = Qc),
    (Ns.useHostTransitionStatus = rh),
    (Ns.useFormState = b_),
    (Ns.useActionState = b_),
    (Ns.useOptimistic = function (e, n) {
      var a = ie();
      return Xt !== null
        ? y_(a, Xt, e, n)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    });
  function oh(e, n, a, u) {
    (n = e.memoizedState),
      (a = a(u, n)),
      (a = a == null ? n : V({}, n, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var uh = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? W(e) === e : !1;
    },
    enqueueSetState: function (e, n, a) {
      e = e._reactInternals;
      var u = ei(),
        f = Bn(u);
      (f.payload = n),
        a != null && (f.callback = a),
        (n = Hn(e, f, u)),
        n !== null && (Ne(n, e, u), qr(n, e, u));
    },
    enqueueReplaceState: function (e, n, a) {
      e = e._reactInternals;
      var u = ei(),
        f = Bn(u);
      (f.tag = 1),
        (f.payload = n),
        a != null && (f.callback = a),
        (n = Hn(e, f, u)),
        n !== null && (Ne(n, e, u), qr(n, e, u));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var a = ei(),
        u = Bn(a);
      (u.tag = 2),
        n != null && (u.callback = n),
        (n = Hn(e, u, a)),
        n !== null && (Ne(n, e, a), qr(n, e, a));
    },
  };
  function P_(e, n, a, u, f, g, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(u, g, p)
        : n.prototype && n.prototype.isPureReactComponent
          ? !Lr(a, u) || !Lr(f, g)
          : !0
    );
  }
  function j_(e, n, a, u) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(a, u),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(a, u),
      n.state !== e && uh.enqueueReplaceState(n, n.state, null);
  }
  function Gs(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var u in n) u !== "ref" && (a[u] = n[u]);
    }
    if ((e = e.defaultProps)) {
      a === n && (a = V({}, a));
      for (var f in e) a[f] === void 0 && (a[f] = e[f]);
    }
    return a;
  }
  var Lo =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Z_(e) {
    Lo(e);
  }
  function K_(e) {
    console.error(e);
  }
  function q_(e) {
    Lo(e);
  }
  function zo(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function V_(e, n, a) {
    try {
      var u = e.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function ch(e, n, a) {
    return (
      (a = Bn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        zo(e, n);
      }),
      a
    );
  }
  function W_(e) {
    return (e = Bn(e)), (e.tag = 3), e;
  }
  function Q_(e, n, a, u) {
    var f = a.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var g = u.value;
      (e.payload = function () {
        return f(g);
      }),
        (e.callback = function () {
          V_(n, a, u);
        });
    }
    var p = a.stateNode;
    p !== null &&
      typeof p.componentDidCatch == "function" &&
      (e.callback = function () {
        V_(n, a, u),
          typeof f != "function" &&
            (Vn === null ? (Vn = new Set([this])) : Vn.add(this));
        var E = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: E !== null ? E : "",
        });
      });
  }
  function xv(e, n, a, u, f) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((n = a.alternate),
        n !== null && Kr(n, a, f, !0),
        (a = di.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              Pi === null ? jh() : a.alternate === null && Qt === 0 && (Qt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = f),
              u === Yc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null ? (a.updateQueue = new Set([u])) : n.add(u),
                  Kh(e, u, f)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === Yc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = n))
                    : ((a = n.retryQueue),
                      a === null ? (n.retryQueue = new Set([u])) : a.add(u)),
                  Kh(e, u, f)),
              !1
            );
        }
        throw Error(s(435, a.tag));
      }
      return Kh(e, u, f), jh(), !1;
    }
    if (Ot)
      return (
        (n = di.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = f),
            u !== Xc && ((e = Error(s(422), { cause: u })), Gr(ci(e, a))))
          : (u !== Xc && ((n = Error(s(423), { cause: u })), Gr(ci(n, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (f &= -f),
            (e.lanes |= f),
            (u = ci(u, a)),
            (f = ch(e.stateNode, u, f)),
            Rh(e, f),
            Qt !== 4 && (Qt = 2)),
        !1
      );
    var g = Error(s(520), { cause: u });
    if (
      ((g = ci(g, a)),
      ia === null ? (ia = [g]) : ia.push(g),
      Qt !== 4 && (Qt = 2),
      n === null)
    )
      return !0;
    (u = ci(u, a)), (a = n);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = f & -f),
            (a.lanes |= e),
            (e = ch(a.stateNode, u, e)),
            Rh(a, e),
            !1
          );
        case 1:
          if (
            ((n = a.type),
            (g = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (g !== null &&
                  typeof g.componentDidCatch == "function" &&
                  (Vn === null || !Vn.has(g)))))
          )
            return (
              (a.flags |= 65536),
              (f &= -f),
              (a.lanes |= f),
              (f = W_(f)),
              Q_(f, e, a, u),
              Rh(a, f),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var J_ = Error(s(461)),
    he = !1;
  function ve(e, n, a, u) {
    n.child = e === null ? n_(n, null, a, u) : Ds(n, e.child, a, u);
  }
  function $_(e, n, a, u, f) {
    a = a.render;
    var g = n.ref;
    if ("ref" in u) {
      var p = {};
      for (var E in u) E !== "ref" && (p[E] = u[E]);
    } else p = u;
    return (
      Us(n),
      (u = Kc(e, n, a, p, g, f)),
      (E = qc()),
      e !== null && !he
        ? (Vc(e, n, f), cn(e, n, f))
        : (Ot && E && Fc(n), (n.flags |= 1), ve(e, n, u, f), n.child)
    );
  }
  function tm(e, n, a, u, f) {
    if (e === null) {
      var g = a.type;
      return typeof g == "function" &&
        !zh(g) &&
        g.defaultProps === void 0 &&
        a.compare === null
        ? ((n.tag = 15), (n.type = g), em(e, n, g, u, f))
        : ((e = Uo(a.type, null, u, n, n.mode, f)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((g = e.child), !vh(e, f))) {
      var p = g.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Lr), a(p, u) && e.ref === n.ref)
      )
        return cn(e, n, f);
    }
    return (
      (n.flags |= 1),
      (e = Kn(g, u)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function em(e, n, a, u, f) {
    if (e !== null) {
      var g = e.memoizedProps;
      if (Lr(g, u) && e.ref === n.ref)
        if (((he = !1), (n.pendingProps = u = g), vh(e, f)))
          (e.flags & 131072) !== 0 && (he = !0);
        else return (n.lanes = e.lanes), cn(e, n, f);
    }
    return hh(e, n, a, u, f);
  }
  function im(e, n, a) {
    var u = n.pendingProps,
      f = u.children,
      g = (n.stateNode._pendingVisibility & 2) !== 0,
      p = e !== null ? e.memoizedState : null;
    if ((Zr(e, n), u.mode === "hidden" || g)) {
      if ((n.flags & 128) !== 0) {
        if (((u = p !== null ? p.baseLanes | a : a), e !== null)) {
          for (f = n.child = e.child, g = 0; f !== null; )
            (g = g | f.lanes | f.childLanes), (f = f.sibling);
          n.childLanes = g & ~u;
        } else (n.childLanes = 0), (n.child = null);
        return nm(e, n, u, a);
      }
      if ((a & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && To(n, p !== null ? p.cachePool : null),
          p !== null ? s_(n, p) : kc(),
          l_(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          nm(e, n, p !== null ? p.baseLanes | a : a, a)
        );
    } else
      p !== null
        ? (To(n, p.cachePool), s_(n, p), Fn(), (n.memoizedState = null))
        : (e !== null && To(n, null), kc(), Fn());
    return ve(e, n, f, a), n.child;
  }
  function nm(e, n, a, u) {
    var f = jc();
    return (
      (f = f === null ? null : { parent: re._currentValue, pool: f }),
      (n.memoizedState = { baseLanes: a, cachePool: f }),
      e !== null && To(n, null),
      kc(),
      l_(n),
      e !== null && Kr(e, n, u, !0),
      null
    );
  }
  function Zr(e, n) {
    var a = n.ref;
    if (a === null) e !== null && e.ref !== null && (n.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(s(284));
      (e === null || e.ref !== a) && (n.flags |= 2097664);
    }
  }
  function hh(e, n, a, u, f) {
    return (
      Us(n),
      (a = Kc(e, n, a, u, void 0, f)),
      (u = qc()),
      e !== null && !he
        ? (Vc(e, n, f), cn(e, n, f))
        : (Ot && u && Fc(n), (n.flags |= 1), ve(e, n, a, f), n.child)
    );
  }
  function sm(e, n, a, u, f, g) {
    return (
      Us(n),
      (n.updateQueue = null),
      (a = c_(n, u, a, f)),
      u_(e),
      (u = qc()),
      e !== null && !he
        ? (Vc(e, n, g), cn(e, n, g))
        : (Ot && u && Fc(n), (n.flags |= 1), ve(e, n, a, g), n.child)
    );
  }
  function lm(e, n, a, u, f) {
    if ((Us(n), n.stateNode === null)) {
      var g = Sl,
        p = a.contextType;
      typeof p == "object" && p !== null && (g = be(p)),
        (g = new a(u, g)),
        (n.memoizedState =
          g.state !== null && g.state !== void 0 ? g.state : null),
        (g.updater = uh),
        (n.stateNode = g),
        (g._reactInternals = n),
        (g = n.stateNode),
        (g.props = u),
        (g.state = n.memoizedState),
        (g.refs = {}),
        Th(n),
        (p = a.contextType),
        (g.context = typeof p == "object" && p !== null ? be(p) : Sl),
        (g.state = n.memoizedState),
        (p = a.getDerivedStateFromProps),
        typeof p == "function" && (oh(n, a, p, u), (g.state = n.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function" ||
          (typeof g.UNSAFE_componentWillMount != "function" &&
            typeof g.componentWillMount != "function") ||
          ((p = g.state),
          typeof g.componentWillMount == "function" && g.componentWillMount(),
          typeof g.UNSAFE_componentWillMount == "function" &&
            g.UNSAFE_componentWillMount(),
          p !== g.state && uh.enqueueReplaceState(g, g.state, null),
          Wr(n, u, g, f),
          Vr(),
          (g.state = n.memoizedState)),
        typeof g.componentDidMount == "function" && (n.flags |= 4194308),
        (u = !0);
    } else if (e === null) {
      g = n.stateNode;
      var E = n.memoizedProps,
        T = Gs(a, E);
      g.props = T;
      var M = g.context,
        B = a.contextType;
      (p = Sl), typeof B == "object" && B !== null && (p = be(B));
      var K = a.getDerivedStateFromProps;
      (B =
        typeof K == "function" ||
        typeof g.getSnapshotBeforeUpdate == "function"),
        (E = n.pendingProps !== E),
        B ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((E || M !== p) && j_(n, g, u, p)),
        (kn = !1);
      var N = n.memoizedState;
      (g.state = N),
        Wr(n, u, g, f),
        Vr(),
        (M = n.memoizedState),
        E || N !== M || kn
          ? (typeof K == "function" && (oh(n, a, K, u), (M = n.memoizedState)),
            (T = kn || P_(n, a, T, u, N, M, p))
              ? (B ||
                  (typeof g.UNSAFE_componentWillMount != "function" &&
                    typeof g.componentWillMount != "function") ||
                  (typeof g.componentWillMount == "function" &&
                    g.componentWillMount(),
                  typeof g.UNSAFE_componentWillMount == "function" &&
                    g.UNSAFE_componentWillMount()),
                typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = u),
                (n.memoizedState = M)),
            (g.props = u),
            (g.state = M),
            (g.context = p),
            (u = T))
          : (typeof g.componentDidMount == "function" && (n.flags |= 4194308),
            (u = !1));
    } else {
      (g = n.stateNode),
        Ch(e, n),
        (p = n.memoizedProps),
        (B = Gs(a, p)),
        (g.props = B),
        (K = n.pendingProps),
        (N = g.context),
        (M = a.contextType),
        (T = Sl),
        typeof M == "object" && M !== null && (T = be(M)),
        (E = a.getDerivedStateFromProps),
        (M =
          typeof E == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function") ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((p !== K || N !== T) && j_(n, g, u, T)),
        (kn = !1),
        (N = n.memoizedState),
        (g.state = N),
        Wr(n, u, g, f),
        Vr();
      var k = n.memoizedState;
      p !== K ||
      N !== k ||
      kn ||
      (e !== null && e.dependencies !== null && Io(e.dependencies))
        ? (typeof E == "function" && (oh(n, a, E, u), (k = n.memoizedState)),
          (B =
            kn ||
            P_(n, a, B, u, N, k, T) ||
            (e !== null && e.dependencies !== null && Io(e.dependencies)))
            ? (M ||
                (typeof g.UNSAFE_componentWillUpdate != "function" &&
                  typeof g.componentWillUpdate != "function") ||
                (typeof g.componentWillUpdate == "function" &&
                  g.componentWillUpdate(u, k, T),
                typeof g.UNSAFE_componentWillUpdate == "function" &&
                  g.UNSAFE_componentWillUpdate(u, k, T)),
              typeof g.componentDidUpdate == "function" && (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof g.componentDidUpdate != "function" ||
                (p === e.memoizedProps && N === e.memoizedState) ||
                (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && N === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = u),
              (n.memoizedState = k)),
          (g.props = u),
          (g.state = k),
          (g.context = T),
          (u = B))
        : (typeof g.componentDidUpdate != "function" ||
            (p === e.memoizedProps && N === e.memoizedState) ||
            (n.flags |= 4),
          typeof g.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && N === e.memoizedState) ||
            (n.flags |= 1024),
          (u = !1));
    }
    return (
      (g = u),
      Zr(e, n),
      (u = (n.flags & 128) !== 0),
      g || u
        ? ((g = n.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : g.render()),
          (n.flags |= 1),
          e !== null && u
            ? ((n.child = Ds(n, e.child, null, f)),
              (n.child = Ds(n, null, a, f)))
            : ve(e, n, a, f),
          (n.memoizedState = g.state),
          (e = n.child))
        : (e = cn(e, n, f)),
      e
    );
  }
  function rm(e, n, a, u) {
    return Nr(), (n.flags |= 256), ve(e, n, a, u), n.child;
  }
  var fh = { dehydrated: null, treeContext: null, retryLane: 0 };
  function dh(e) {
    return { baseLanes: e, cachePool: o_() };
  }
  function gh(e, n, a) {
    return (e = e !== null ? e.childLanes & ~a : 0), n && (e |= yi), e;
  }
  function am(e, n, a) {
    var u = n.pendingProps,
      f = !1,
      g = (n.flags & 128) !== 0,
      p;
    if (
      ((p = g) ||
        (p =
          e !== null && e.memoizedState === null ? !1 : (le.current & 2) !== 0),
      p && ((f = !0), (n.flags &= -129)),
      (p = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (Ot) {
        if ((f ? Gn(n) : Fn(), Ot)) {
          var E = pe,
            T;
          if ((T = E)) {
            t: {
              for (T = E, E = Hi; T.nodeType !== 8; ) {
                if (!E) {
                  E = null;
                  break t;
                }
                if (((T = Li(T.nextSibling)), T === null)) {
                  E = null;
                  break t;
                }
              }
              E = T;
            }
            E !== null
              ? ((n.memoizedState = {
                  dehydrated: E,
                  treeContext: ws !== null ? { id: rn, overflow: an } : null,
                  retryLane: 536870912,
                }),
                (T = mi(18, null, null, 0)),
                (T.stateNode = E),
                (T.return = n),
                (n.child = T),
                (Ie = n),
                (pe = null),
                (T = !0))
              : (T = !1);
          }
          T || Os(n);
        }
        if (
          ((E = n.memoizedState),
          E !== null && ((E = E.dehydrated), E !== null))
        )
          return E.data === "$!" ? (n.lanes = 16) : (n.lanes = 536870912), null;
        on(n);
      }
      return (
        (E = u.children),
        (u = u.fallback),
        f
          ? (Fn(),
            (f = n.mode),
            (E = mh({ mode: "hidden", children: E }, f)),
            (u = Ys(u, f, a, null)),
            (E.return = n),
            (u.return = n),
            (E.sibling = u),
            (n.child = E),
            (f = n.child),
            (f.memoizedState = dh(a)),
            (f.childLanes = gh(e, p, a)),
            (n.memoizedState = fh),
            u)
          : (Gn(n), _h(n, E))
      );
    }
    if (
      ((T = e.memoizedState), T !== null && ((E = T.dehydrated), E !== null))
    ) {
      if (g)
        n.flags & 256
          ? (Gn(n), (n.flags &= -257), (n = yh(e, n, a)))
          : n.memoizedState !== null
            ? (Fn(), (n.child = e.child), (n.flags |= 128), (n = null))
            : (Fn(),
              (f = u.fallback),
              (E = n.mode),
              (u = mh({ mode: "visible", children: u.children }, E)),
              (f = Ys(f, E, a, null)),
              (f.flags |= 2),
              (u.return = n),
              (f.return = n),
              (u.sibling = f),
              (n.child = u),
              Ds(n, e.child, null, a),
              (u = n.child),
              (u.memoizedState = dh(a)),
              (u.childLanes = gh(e, p, a)),
              (n.memoizedState = fh),
              (n = f));
      else if ((Gn(n), E.data === "$!")) {
        if (((p = E.nextSibling && E.nextSibling.dataset), p)) var M = p.dgst;
        (p = M),
          (u = Error(s(419))),
          (u.stack = ""),
          (u.digest = p),
          Gr({ value: u, source: null, stack: null }),
          (n = yh(e, n, a));
      } else if (
        (he || Kr(e, n, a, !1), (p = (a & e.childLanes) !== 0), he || p)
      ) {
        if (((p = Ht), p !== null)) {
          if (((u = a & -a), (u & 42) !== 0)) u = 1;
          else
            switch (u) {
              case 2:
                u = 1;
                break;
              case 8:
                u = 4;
                break;
              case 32:
                u = 16;
                break;
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
                u = 64;
                break;
              case 268435456:
                u = 134217728;
                break;
              default:
                u = 0;
            }
          if (
            ((u = (u & (p.suspendedLanes | a)) !== 0 ? 0 : u),
            u !== 0 && u !== T.retryLane)
          )
            throw ((T.retryLane = u), Nn(e, u), Ne(p, e, u), J_);
        }
        E.data === "$?" || jh(), (n = yh(e, n, a));
      } else
        E.data === "$?"
          ? ((n.flags |= 128),
            (n.child = e.child),
            (n = Fv.bind(null, e)),
            (E._reactRetry = n),
            (n = null))
          : ((e = T.treeContext),
            (pe = Li(E.nextSibling)),
            (Ie = n),
            (Ot = !0),
            (Oi = null),
            (Hi = !1),
            e !== null &&
              ((hi[fi++] = rn),
              (hi[fi++] = an),
              (hi[fi++] = ws),
              (rn = e.id),
              (an = e.overflow),
              (ws = n)),
            (n = _h(n, u.children)),
            (n.flags |= 4096));
      return n;
    }
    return f
      ? (Fn(),
        (f = u.fallback),
        (E = n.mode),
        (T = e.child),
        (M = T.sibling),
        (u = Kn(T, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = T.subtreeFlags & 31457280),
        M !== null ? (f = Kn(M, f)) : ((f = Ys(f, E, a, null)), (f.flags |= 2)),
        (f.return = n),
        (u.return = n),
        (u.sibling = f),
        (n.child = u),
        (u = f),
        (f = n.child),
        (E = e.child.memoizedState),
        E === null
          ? (E = dh(a))
          : ((T = E.cachePool),
            T !== null
              ? ((M = re._currentValue),
                (T = T.parent !== M ? { parent: M, pool: M } : T))
              : (T = o_()),
            (E = { baseLanes: E.baseLanes | a, cachePool: T })),
        (f.memoizedState = E),
        (f.childLanes = gh(e, p, a)),
        (n.memoizedState = fh),
        u)
      : (Gn(n),
        (a = e.child),
        (e = a.sibling),
        (a = Kn(a, { mode: "visible", children: u.children })),
        (a.return = n),
        (a.sibling = null),
        e !== null &&
          ((p = n.deletions),
          p === null ? ((n.deletions = [e]), (n.flags |= 16)) : p.push(e)),
        (n.child = a),
        (n.memoizedState = null),
        a);
  }
  function _h(e, n) {
    return (
      (n = mh({ mode: "visible", children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function mh(e, n) {
    return zm(e, n, 0, null);
  }
  function yh(e, n, a) {
    return (
      Ds(n, e.child, null, a),
      (e = _h(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function om(e, n, a) {
    e.lanes |= n;
    var u = e.alternate;
    u !== null && (u.lanes |= n), Sh(e.return, n, a);
  }
  function ph(e, n, a, u, f) {
    var g = e.memoizedState;
    g === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: f,
        })
      : ((g.isBackwards = n),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = u),
        (g.tail = a),
        (g.tailMode = f));
  }
  function um(e, n, a) {
    var u = n.pendingProps,
      f = u.revealOrder,
      g = u.tail;
    if ((ve(e, n, u.children, a), (u = le.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        t: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && om(e, a, n);
          else if (e.tag === 19) om(e, a, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break t;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      u &= 1;
    }
    switch ((vt(le, u), f)) {
      case "forwards":
        for (a = n.child, f = null; a !== null; )
          (e = a.alternate),
            e !== null && xo(e) === null && (f = a),
            (a = a.sibling);
        (a = f),
          a === null
            ? ((f = n.child), (n.child = null))
            : ((f = a.sibling), (a.sibling = null)),
          ph(n, !1, f, a, g);
        break;
      case "backwards":
        for (a = null, f = n.child, n.child = null; f !== null; ) {
          if (((e = f.alternate), e !== null && xo(e) === null)) {
            n.child = f;
            break;
          }
          (e = f.sibling), (f.sibling = a), (a = f), (f = e);
        }
        ph(n, !0, a, null, g);
        break;
      case "together":
        ph(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function cn(e, n, a) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (qn |= n.lanes),
      (a & n.childLanes) === 0)
    )
      if (e !== null) {
        if ((Kr(e, n, a, !1), (a & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(s(153));
    if (n.child !== null) {
      for (
        e = n.child, a = Kn(e, e.pendingProps), n.child = a, a.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (a = a.sibling = Kn(e, e.pendingProps)),
          (a.return = n);
      a.sibling = null;
    }
    return n.child;
  }
  function vh(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Io(e)));
  }
  function Tv(e, n, a) {
    switch (n.tag) {
      case 3:
        Ui(n, n.stateNode.containerInfo),
          Yn(n, re, e.memoizedState.cache),
          Nr();
        break;
      case 27:
      case 5:
        Ue(n);
        break;
      case 4:
        Ui(n, n.stateNode.containerInfo);
        break;
      case 10:
        Yn(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var u = n.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (Gn(n), (n.flags |= 128), null)
            : (a & n.child.childLanes) !== 0
              ? am(e, n, a)
              : (Gn(n), (e = cn(e, n, a)), e !== null ? e.sibling : null);
        Gn(n);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (
          ((u = (a & n.childLanes) !== 0),
          u || (Kr(e, n, a, !1), (u = (a & n.childLanes) !== 0)),
          f)
        ) {
          if (u) return um(e, n, a);
          n.flags |= 128;
        }
        if (
          ((f = n.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          vt(le, le.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), im(e, n, a);
      case 24:
        Yn(n, re, e.memoizedState.cache);
    }
    return cn(e, n, a);
  }
  function cm(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) he = !0;
      else {
        if (!vh(e, a) && (n.flags & 128) === 0) return (he = !1), Tv(e, n, a);
        he = (e.flags & 131072) !== 0;
      }
    else (he = !1), Ot && (n.flags & 1048576) !== 0 && qg(n, yo, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        t: {
          e = n.pendingProps;
          var u = n.elementType,
            f = u._init;
          if (((u = f(u._payload)), (n.type = u), typeof u == "function"))
            zh(u)
              ? ((e = Gs(u, e)), (n.tag = 1), (n = lm(null, n, u, e, a)))
              : ((n.tag = 0), (n = hh(null, n, u, e, a)));
          else {
            if (u != null) {
              if (((f = u.$$typeof), f === x)) {
                (n.tag = 11), (n = $_(null, n, u, e, a));
                break t;
              } else if (f === A) {
                (n.tag = 14), (n = tm(null, n, u, e, a));
                break t;
              }
            }
            throw ((n = Z(u) || u), Error(s(306, n, "")));
          }
        }
        return n;
      case 0:
        return hh(e, n, n.type, n.pendingProps, a);
      case 1:
        return (u = n.type), (f = Gs(u, n.pendingProps)), lm(e, n, u, f, a);
      case 3:
        t: {
          if ((Ui(n, n.stateNode.containerInfo), e === null))
            throw Error(s(387));
          var g = n.pendingProps;
          (f = n.memoizedState), (u = f.element), Ch(e, n), Wr(n, g, null, a);
          var p = n.memoizedState;
          if (
            ((g = p.cache),
            Yn(n, re, g),
            g !== f.cache && xh(n, [re], a, !0),
            Vr(),
            (g = p.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: g, isDehydrated: !1, cache: p.cache }),
              (n.updateQueue.baseState = f),
              (n.memoizedState = f),
              n.flags & 256)
            ) {
              n = rm(e, n, g, a);
              break t;
            } else if (g !== u) {
              (u = ci(Error(s(424)), n)), Gr(u), (n = rm(e, n, g, a));
              break t;
            } else
              for (
                pe = Li(n.stateNode.containerInfo.firstChild),
                  Ie = n,
                  Ot = !0,
                  Oi = null,
                  Hi = !0,
                  a = n_(n, null, g, a),
                  n.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((Nr(), g === u)) {
              n = cn(e, n, a);
              break t;
            }
            ve(e, n, g, a);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          Zr(e, n),
          e === null
            ? (a = d0(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = a)
              : Ot ||
                ((a = n.type),
                (e = n.pendingProps),
                (u = Wo(qe.current).createElement(a)),
                (u[Re] = n),
                (u[Xe] = e),
                Ee(u, a, e),
                ce(u),
                (n.stateNode = u))
            : (n.memoizedState = d0(
                n.type,
                e.memoizedProps,
                n.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Ue(n),
          e === null &&
            Ot &&
            ((u = n.stateNode = c0(n.type, n.pendingProps, qe.current)),
            (Ie = n),
            (Hi = !0),
            (pe = Li(u.firstChild))),
          (u = n.pendingProps.children),
          e !== null || Ot ? ve(e, n, u, a) : (n.child = Ds(n, null, u, a)),
          Zr(e, n),
          n.child
        );
      case 5:
        return (
          e === null &&
            Ot &&
            ((f = u = pe) &&
              ((u = $v(u, n.type, n.pendingProps, Hi)),
              u !== null
                ? ((n.stateNode = u),
                  (Ie = n),
                  (pe = Li(u.firstChild)),
                  (Hi = !1),
                  (f = !0))
                : (f = !1)),
            f || Os(n)),
          Ue(n),
          (f = n.type),
          (g = n.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (u = g.children),
          rf(f, g) ? (u = null) : p !== null && rf(f, p) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((f = Kc(e, n, mv, null, null, a)), (ha._currentValue = f)),
          Zr(e, n),
          ve(e, n, u, a),
          n.child
        );
      case 6:
        return (
          e === null &&
            Ot &&
            ((e = a = pe) &&
              ((a = tE(a, n.pendingProps, Hi)),
              a !== null
                ? ((n.stateNode = a), (Ie = n), (pe = null), (e = !0))
                : (e = !1)),
            e || Os(n)),
          null
        );
      case 13:
        return am(e, n, a);
      case 4:
        return (
          Ui(n, n.stateNode.containerInfo),
          (u = n.pendingProps),
          e === null ? (n.child = Ds(n, null, u, a)) : ve(e, n, u, a),
          n.child
        );
      case 11:
        return $_(e, n, n.type, n.pendingProps, a);
      case 7:
        return ve(e, n, n.pendingProps, a), n.child;
      case 8:
        return ve(e, n, n.pendingProps.children, a), n.child;
      case 12:
        return ve(e, n, n.pendingProps.children, a), n.child;
      case 10:
        return (
          (u = n.pendingProps),
          Yn(n, n.type, u.value),
          ve(e, n, u.children, a),
          n.child
        );
      case 9:
        return (
          (f = n.type._context),
          (u = n.pendingProps.children),
          Us(n),
          (f = be(f)),
          (u = u(f)),
          (n.flags |= 1),
          ve(e, n, u, a),
          n.child
        );
      case 14:
        return tm(e, n, n.type, n.pendingProps, a);
      case 15:
        return em(e, n, n.type, n.pendingProps, a);
      case 19:
        return um(e, n, a);
      case 22:
        return im(e, n, a);
      case 24:
        return (
          Us(n),
          (u = be(re)),
          e === null
            ? ((f = jc()),
              f === null &&
                ((f = Ht),
                (g = Hc()),
                (f.pooledCache = g),
                g.refCount++,
                g !== null && (f.pooledCacheLanes |= a),
                (f = g)),
              (n.memoizedState = { parent: u, cache: f }),
              Th(n),
              Yn(n, re, f))
            : ((e.lanes & a) !== 0 && (Ch(e, n), Wr(n, null, null, a), Vr()),
              (f = e.memoizedState),
              (g = n.memoizedState),
              f.parent !== u
                ? ((f = { parent: u, cache: u }),
                  (n.memoizedState = f),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = f),
                  Yn(n, re, u))
                : ((u = g.cache),
                  Yn(n, re, u),
                  u !== f.cache && xh(n, [re], a, !0))),
          ve(e, n, n.pendingProps.children, a),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(s(156, n.tag));
  }
  var Eh = mt(null),
    Fs = null,
    hn = null;
  function Yn(e, n, a) {
    vt(Eh, n._currentValue), (n._currentValue = a);
  }
  function fn(e) {
    (e._currentValue = Eh.current), Ut(Eh);
  }
  function Sh(e, n, a) {
    for (; e !== null; ) {
      var u = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), u !== null && (u.childLanes |= n))
          : u !== null && (u.childLanes & n) !== n && (u.childLanes |= n),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function xh(e, n, a, u) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null; ) {
      var g = f.dependencies;
      if (g !== null) {
        var p = f.child;
        g = g.firstContext;
        t: for (; g !== null; ) {
          var E = g;
          g = f;
          for (var T = 0; T < n.length; T++)
            if (E.context === n[T]) {
              (g.lanes |= a),
                (E = g.alternate),
                E !== null && (E.lanes |= a),
                Sh(g.return, a, e),
                u || (p = null);
              break t;
            }
          g = E.next;
        }
      } else if (f.tag === 18) {
        if (((p = f.return), p === null)) throw Error(s(341));
        (p.lanes |= a),
          (g = p.alternate),
          g !== null && (g.lanes |= a),
          Sh(p, a, e),
          (p = null);
      } else p = f.child;
      if (p !== null) p.return = f;
      else
        for (p = f; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (((f = p.sibling), f !== null)) {
            (f.return = p.return), (p = f);
            break;
          }
          p = p.return;
        }
      f = p;
    }
  }
  function Kr(e, n, a, u) {
    e = null;
    for (var f = n, g = !1; f !== null; ) {
      if (!g) {
        if ((f.flags & 524288) !== 0) g = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var p = f.alternate;
        if (p === null) throw Error(s(387));
        if (((p = p.memoizedProps), p !== null)) {
          var E = f.type;
          Qe(f.pendingProps.value, p.value) ||
            (e !== null ? e.push(E) : (e = [E]));
        }
      } else if (f === Ve.current) {
        if (((p = f.alternate), p === null)) throw Error(s(387));
        p.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (e !== null ? e.push(ha) : (e = [ha]));
      }
      f = f.return;
    }
    e !== null && xh(n, e, a, u), (n.flags |= 262144);
  }
  function Io(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Qe(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Us(e) {
    (Fs = e),
      (hn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function be(e) {
    return hm(Fs, e);
  }
  function No(e, n) {
    return Fs === null && Us(e), hm(e, n);
  }
  function hm(e, n) {
    var a = n._currentValue;
    if (((n = { context: n, memoizedValue: a, next: null }), hn === null)) {
      if (e === null) throw Error(s(308));
      (hn = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288);
    } else hn = hn.next = n;
    return a;
  }
  var kn = !1;
  function Th(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ch(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Bn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Hn(e, n, a) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (Vt & 2) !== 0)) {
      var f = u.pending;
      return (
        f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
        (u.pending = n),
        (n = _o(e)),
        Zg(e, null, a),
        n
      );
    }
    return go(e, u, n, a), _o(e);
  }
  function qr(e, n, a) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (a & 4194176) !== 0))
    ) {
      var u = n.lanes;
      (u &= e.pendingLanes), (a |= u), (n.lanes = a), ue(e, a);
    }
  }
  function Rh(e, n) {
    var a = e.updateQueue,
      u = e.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var f = null,
        g = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var p = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          g === null ? (f = g = p) : (g = g.next = p), (a = a.next);
        } while (a !== null);
        g === null ? (f = g = n) : (g = g.next = n);
      } else f = g = n;
      (a = {
        baseState: u.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: g,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = n) : (e.next = n),
      (a.lastBaseUpdate = n);
  }
  var bh = !1;
  function Vr() {
    if (bh) {
      var e = Al;
      if (e !== null) throw e;
    }
  }
  function Wr(e, n, a, u) {
    bh = !1;
    var f = e.updateQueue;
    kn = !1;
    var g = f.firstBaseUpdate,
      p = f.lastBaseUpdate,
      E = f.shared.pending;
    if (E !== null) {
      f.shared.pending = null;
      var T = E,
        M = T.next;
      (T.next = null), p === null ? (g = M) : (p.next = M), (p = T);
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (E = B.lastBaseUpdate),
        E !== p &&
          (E === null ? (B.firstBaseUpdate = M) : (E.next = M),
          (B.lastBaseUpdate = T)));
    }
    if (g !== null) {
      var K = f.baseState;
      (p = 0), (B = M = T = null), (E = g);
      do {
        var N = E.lane & -536870913,
          k = N !== E.lane;
        if (k ? (wt & N) === N : (u & N) === N) {
          N !== 0 && N === bl && (bh = !0),
            B !== null &&
              (B = B.next =
                {
                  lane: 0,
                  tag: E.tag,
                  payload: E.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var at = e,
              yt = E;
            N = n;
            var Jt = a;
            switch (yt.tag) {
              case 1:
                if (((at = yt.payload), typeof at == "function")) {
                  K = at.call(Jt, K, N);
                  break t;
                }
                K = at;
                break t;
              case 3:
                at.flags = (at.flags & -65537) | 128;
              case 0:
                if (
                  ((at = yt.payload),
                  (N = typeof at == "function" ? at.call(Jt, K, N) : at),
                  N == null)
                )
                  break t;
                K = V({}, K, N);
                break t;
              case 2:
                kn = !0;
            }
          }
          (N = E.callback),
            N !== null &&
              ((e.flags |= 64),
              k && (e.flags |= 8192),
              (k = f.callbacks),
              k === null ? (f.callbacks = [N]) : k.push(N));
        } else
          (k = {
            lane: N,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null,
          }),
            B === null ? ((M = B = k), (T = K)) : (B = B.next = k),
            (p |= N);
        if (((E = E.next), E === null)) {
          if (((E = f.shared.pending), E === null)) break;
          (k = E),
            (E = k.next),
            (k.next = null),
            (f.lastBaseUpdate = k),
            (f.shared.pending = null);
        }
      } while (!0);
      B === null && (T = K),
        (f.baseState = T),
        (f.firstBaseUpdate = M),
        (f.lastBaseUpdate = B),
        g === null && (f.shared.lanes = 0),
        (qn |= p),
        (e.lanes = p),
        (e.memoizedState = K);
    }
  }
  function fm(e, n) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(n);
  }
  function dm(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) fm(a[e], n);
  }
  function Qr(e, n) {
    try {
      var a = n.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        a = f;
        do {
          if ((a.tag & e) === e) {
            u = void 0;
            var g = a.create,
              p = a.inst;
            (u = g()), (p.destroy = u);
          }
          a = a.next;
        } while (a !== f);
      }
    } catch (E) {
      Bt(n, n.return, E);
    }
  }
  function Pn(e, n, a) {
    try {
      var u = n.updateQueue,
        f = u !== null ? u.lastEffect : null;
      if (f !== null) {
        var g = f.next;
        u = g;
        do {
          if ((u.tag & e) === e) {
            var p = u.inst,
              E = p.destroy;
            if (E !== void 0) {
              (p.destroy = void 0), (f = n);
              var T = a;
              try {
                E();
              } catch (M) {
                Bt(f, T, M);
              }
            }
          }
          u = u.next;
        } while (u !== g);
      }
    } catch (M) {
      Bt(n, n.return, M);
    }
  }
  function gm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        dm(n, a);
      } catch (u) {
        Bt(e, e.return, u);
      }
    }
  }
  function _m(e, n, a) {
    (a.props = Gs(e.type, e.memoizedProps)), (a.state = e.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (u) {
      Bt(e, n, u);
    }
  }
  function Xs(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
        var u = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var f = u;
            break;
          default:
            f = u;
        }
        typeof a == "function" ? (e.refCleanup = a(f)) : (a.current = f);
      }
    } catch (g) {
      Bt(e, n, g);
    }
  }
  function Je(e, n) {
    var a = e.ref,
      u = e.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (f) {
          Bt(e, n, f);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (f) {
          Bt(e, n, f);
        }
      else a.current = null;
  }
  function mm(e) {
    var n = e.type,
      a = e.memoizedProps,
      u = e.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break t;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (f) {
      Bt(e, e.return, f);
    }
  }
  function ym(e, n, a) {
    try {
      var u = e.stateNode;
      qv(u, e.type, a, n), (u[Xe] = n);
    } catch (f) {
      Bt(e, e.return, f);
    }
  }
  function pm(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function Ah(e) {
    t: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || pm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue t;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function wh(e, n, a) {
    var u = e.tag;
    if (u === 5 || u === 6)
      (e = e.stateNode),
        n
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(e, n)
            : a.insertBefore(e, n)
          : (a.nodeType === 8
              ? ((n = a.parentNode), n.insertBefore(e, a))
              : ((n = a), n.appendChild(e)),
            (a = a._reactRootContainer),
            a != null || n.onclick !== null || (n.onclick = Vo));
    else if (u !== 4 && u !== 27 && ((e = e.child), e !== null))
      for (wh(e, n, a), e = e.sibling; e !== null; )
        wh(e, n, a), (e = e.sibling);
  }
  function Go(e, n, a) {
    var u = e.tag;
    if (u === 5 || u === 6)
      (e = e.stateNode), n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (u !== 4 && u !== 27 && ((e = e.child), e !== null))
      for (Go(e, n, a), e = e.sibling; e !== null; )
        Go(e, n, a), (e = e.sibling);
  }
  var dn = !1,
    Wt = !1,
    Mh = !1,
    vm = typeof WeakSet == "function" ? WeakSet : Set,
    fe = null,
    Em = !1;
  function Cv(e, n) {
    if (((e = e.containerInfo), (sf = iu), (e = Fg(e)), Dc(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        t: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var f = u.anchorOffset,
              g = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, g.nodeType;
            } catch {
              a = null;
              break t;
            }
            var p = 0,
              E = -1,
              T = -1,
              M = 0,
              B = 0,
              K = e,
              N = null;
            e: for (;;) {
              for (
                var k;
                K !== a || (f !== 0 && K.nodeType !== 3) || (E = p + f),
                  K !== g || (u !== 0 && K.nodeType !== 3) || (T = p + u),
                  K.nodeType === 3 && (p += K.nodeValue.length),
                  (k = K.firstChild) !== null;

              )
                (N = K), (K = k);
              for (;;) {
                if (K === e) break e;
                if (
                  (N === a && ++M === f && (E = p),
                  N === g && ++B === u && (T = p),
                  (k = K.nextSibling) !== null)
                )
                  break;
                (K = N), (N = K.parentNode);
              }
              K = k;
            }
            a = E === -1 || T === -1 ? null : { start: E, end: T };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      lf = { focusedElem: e, selectionRange: a }, iu = !1, fe = n;
      fe !== null;

    )
      if (
        ((n = fe), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = n), (fe = e);
      else
        for (; fe !== null; ) {
          switch (((n = fe), (g = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && g !== null) {
                (e = void 0),
                  (a = n),
                  (f = g.memoizedProps),
                  (g = g.memoizedState),
                  (u = a.stateNode);
                try {
                  var at = Gs(a.type, f, a.elementType === a.type);
                  (e = u.getSnapshotBeforeUpdate(at, g)),
                    (u.__reactInternalSnapshotBeforeUpdate = e);
                } catch (yt) {
                  Bt(a, a.return, yt);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  uf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      uf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (fe = e);
            break;
          }
          fe = n.return;
        }
    return (at = Em), (Em = !1), at;
  }
  function Sm(e, n, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        _n(e, a), u & 4 && Qr(5, a);
        break;
      case 1:
        if ((_n(e, a), u & 4))
          if (((e = a.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (E) {
              Bt(a, a.return, E);
            }
          else {
            var f = Gs(a.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(f, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (E) {
              Bt(a, a.return, E);
            }
          }
        u & 64 && gm(a), u & 512 && Xs(a, a.return);
        break;
      case 3:
        if ((_n(e, a), u & 64 && ((u = a.updateQueue), u !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            dm(u, e);
          } catch (E) {
            Bt(a, a.return, E);
          }
        }
        break;
      case 26:
        _n(e, a), u & 512 && Xs(a, a.return);
        break;
      case 27:
      case 5:
        _n(e, a), n === null && u & 4 && mm(a), u & 512 && Xs(a, a.return);
        break;
      case 12:
        _n(e, a);
        break;
      case 13:
        _n(e, a), u & 4 && Cm(e, a);
        break;
      case 22:
        if (((f = a.memoizedState !== null || dn), !f)) {
          n = (n !== null && n.memoizedState !== null) || Wt;
          var g = dn,
            p = Wt;
          (dn = f),
            (Wt = n) && !p ? jn(e, a, (a.subtreeFlags & 8772) !== 0) : _n(e, a),
            (dn = g),
            (Wt = p);
        }
        u & 512 &&
          (a.memoizedProps.mode === "manual"
            ? Xs(a, a.return)
            : Je(a, a.return));
        break;
      default:
        _n(e, a);
    }
  }
  function xm(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), xm(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && _c(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var ne = null,
    $e = !1;
  function gn(e, n, a) {
    for (a = a.child; a !== null; ) Tm(e, n, a), (a = a.sibling);
  }
  function Tm(e, n, a) {
    if (xe && typeof xe.onCommitFiberUnmount == "function")
      try {
        xe.onCommitFiberUnmount(Es, a);
      } catch {}
    switch (a.tag) {
      case 26:
        Wt || Je(a, n),
          gn(e, n, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        Wt || Je(a, n);
        var u = ne,
          f = $e;
        for (
          ne = a.stateNode, gn(e, n, a), a = a.stateNode, n = a.attributes;
          n.length;

        )
          a.removeAttributeNode(n[0]);
        _c(a), (ne = u), ($e = f);
        break;
      case 5:
        Wt || Je(a, n);
      case 6:
        f = ne;
        var g = $e;
        if (((ne = null), gn(e, n, a), (ne = f), ($e = g), ne !== null))
          if ($e)
            try {
              (e = ne),
                (u = a.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(u)
                  : e.removeChild(u);
            } catch (p) {
              Bt(a, n, p);
            }
          else
            try {
              ne.removeChild(a.stateNode);
            } catch (p) {
              Bt(a, n, p);
            }
        break;
      case 18:
        ne !== null &&
          ($e
            ? ((n = ne),
              (a = a.stateNode),
              n.nodeType === 8
                ? of(n.parentNode, a)
                : n.nodeType === 1 && of(n, a),
              _a(n))
            : of(ne, a.stateNode));
        break;
      case 4:
        (u = ne),
          (f = $e),
          (ne = a.stateNode.containerInfo),
          ($e = !0),
          gn(e, n, a),
          (ne = u),
          ($e = f);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Wt || Pn(2, a, n), Wt || Pn(4, a, n), gn(e, n, a);
        break;
      case 1:
        Wt ||
          (Je(a, n),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && _m(a, n, u)),
          gn(e, n, a);
        break;
      case 21:
        gn(e, n, a);
        break;
      case 22:
        Wt || Je(a, n),
          (Wt = (u = Wt) || a.memoizedState !== null),
          gn(e, n, a),
          (Wt = u);
        break;
      default:
        gn(e, n, a);
    }
  }
  function Cm(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        _a(e);
      } catch (a) {
        Bt(n, n.return, a);
      }
  }
  function Rv(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new vm()), n;
      case 22:
        return (
          (e = e.stateNode),
          (n = e._retryCache),
          n === null && (n = e._retryCache = new vm()),
          n
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Oh(e, n) {
    var a = Rv(e);
    n.forEach(function (u) {
      var f = Uv.bind(null, e, u);
      a.has(u) || (a.add(u), u.then(f, f));
    });
  }
  function gi(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var f = a[u],
          g = e,
          p = n,
          E = p;
        t: for (; E !== null; ) {
          switch (E.tag) {
            case 27:
            case 5:
              (ne = E.stateNode), ($e = !1);
              break t;
            case 3:
              (ne = E.stateNode.containerInfo), ($e = !0);
              break t;
            case 4:
              (ne = E.stateNode.containerInfo), ($e = !0);
              break t;
          }
          E = E.return;
        }
        if (ne === null) throw Error(s(160));
        Tm(g, p, f),
          (ne = null),
          ($e = !1),
          (g = f.alternate),
          g !== null && (g.return = null),
          (f.return = null);
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) Rm(n, e), (n = n.sibling);
  }
  var Di = null;
  function Rm(e, n) {
    var a = e.alternate,
      u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        gi(n, e),
          _i(e),
          u & 4 && (Pn(3, e, e.return), Qr(3, e), Pn(5, e, e.return));
        break;
      case 1:
        gi(n, e),
          _i(e),
          u & 512 && (Wt || a === null || Je(a, a.return)),
          u & 64 &&
            dn &&
            ((e = e.updateQueue),
            e !== null &&
              ((u = e.callbacks),
              u !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
        break;
      case 26:
        var f = Di;
        if (
          (gi(n, e),
          _i(e),
          u & 512 && (Wt || a === null || Je(a, a.return)),
          u & 4)
        ) {
          var g = a !== null ? a.memoizedState : null;
          if (((u = e.memoizedState), a === null))
            if (u === null)
              if (e.stateNode === null) {
                t: {
                  (u = e.type),
                    (a = e.memoizedProps),
                    (f = f.ownerDocument || f);
                  e: switch (u) {
                    case "title":
                      (g = f.getElementsByTagName("title")[0]),
                        (!g ||
                          g[Tr] ||
                          g[Re] ||
                          g.namespaceURI === "http://www.w3.org/2000/svg" ||
                          g.hasAttribute("itemprop")) &&
                          ((g = f.createElement(u)),
                          f.head.insertBefore(
                            g,
                            f.querySelector("head > title"),
                          )),
                        Ee(g, u, a),
                        (g[Re] = e),
                        ce(g),
                        (u = g);
                      break t;
                    case "link":
                      var p = m0("link", "href", f).get(u + (a.href || ""));
                      if (p) {
                        for (var E = 0; E < p.length; E++)
                          if (
                            ((g = p[E]),
                            g.getAttribute("href") ===
                              (a.href == null ? null : a.href) &&
                              g.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              g.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              g.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            p.splice(E, 1);
                            break e;
                          }
                      }
                      (g = f.createElement(u)),
                        Ee(g, u, a),
                        f.head.appendChild(g);
                      break;
                    case "meta":
                      if (
                        (p = m0("meta", "content", f).get(
                          u + (a.content || ""),
                        ))
                      ) {
                        for (E = 0; E < p.length; E++)
                          if (
                            ((g = p[E]),
                            g.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              g.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              g.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              g.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              g.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            p.splice(E, 1);
                            break e;
                          }
                      }
                      (g = f.createElement(u)),
                        Ee(g, u, a),
                        f.head.appendChild(g);
                      break;
                    default:
                      throw Error(s(468, u));
                  }
                  (g[Re] = e), ce(g), (u = g);
                }
                e.stateNode = u;
              } else y0(f, e.type, e.stateNode);
            else e.stateNode = _0(f, u, e.memoizedProps);
          else
            g !== u
              ? (g === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : g.count--,
                u === null
                  ? y0(f, e.type, e.stateNode)
                  : _0(f, u, e.memoizedProps))
              : u === null &&
                e.stateNode !== null &&
                ym(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        if (u & 4 && e.alternate === null) {
          (f = e.stateNode), (g = e.memoizedProps);
          try {
            for (var T = f.firstChild; T; ) {
              var M = T.nextSibling,
                B = T.nodeName;
              T[Tr] ||
                B === "HEAD" ||
                B === "BODY" ||
                B === "SCRIPT" ||
                B === "STYLE" ||
                (B === "LINK" && T.rel.toLowerCase() === "stylesheet") ||
                f.removeChild(T),
                (T = M);
            }
            for (var K = e.type, N = f.attributes; N.length; )
              f.removeAttributeNode(N[0]);
            Ee(f, K, g), (f[Re] = e), (f[Xe] = g);
          } catch (at) {
            Bt(e, e.return, at);
          }
        }
      case 5:
        if (
          (gi(n, e),
          _i(e),
          u & 512 && (Wt || a === null || Je(a, a.return)),
          e.flags & 32)
        ) {
          f = e.stateNode;
          try {
            gl(f, "");
          } catch (at) {
            Bt(e, e.return, at);
          }
        }
        u & 4 &&
          e.stateNode != null &&
          ((f = e.memoizedProps), ym(e, f, a !== null ? a.memoizedProps : f)),
          u & 1024 && (Mh = !0);
        break;
      case 6:
        if ((gi(n, e), _i(e), u & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (u = e.memoizedProps), (a = e.stateNode);
          try {
            a.nodeValue = u;
          } catch (at) {
            Bt(e, e.return, at);
          }
        }
        break;
      case 3:
        if (
          (($o = null),
          (f = Di),
          (Di = Qo(n.containerInfo)),
          gi(n, e),
          (Di = f),
          _i(e),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            _a(n.containerInfo);
          } catch (at) {
            Bt(e, e.return, at);
          }
        Mh && ((Mh = !1), bm(e));
        break;
      case 4:
        (u = Di),
          (Di = Qo(e.stateNode.containerInfo)),
          gi(n, e),
          _i(e),
          (Di = u);
        break;
      case 12:
        gi(n, e), _i(e);
        break;
      case 13:
        gi(n, e),
          _i(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Xh = kt()),
          u & 4 &&
            ((u = e.updateQueue),
            u !== null && ((e.updateQueue = null), Oh(e, u)));
        break;
      case 22:
        if (
          (u & 512 && (Wt || a === null || Je(a, a.return)),
          (T = e.memoizedState !== null),
          (M = a !== null && a.memoizedState !== null),
          (B = dn),
          (K = Wt),
          (dn = B || T),
          (Wt = K || M),
          gi(n, e),
          (Wt = K),
          (dn = B),
          _i(e),
          (n = e.stateNode),
          (n._current = e),
          (n._visibility &= -3),
          (n._visibility |= n._pendingVisibility & 2),
          u & 8192 &&
            ((n._visibility = T ? n._visibility & -2 : n._visibility | 1),
            T && ((n = dn || Wt), a === null || M || n || Dl(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          t: for (a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26 || n.tag === 27) {
              if (a === null) {
                M = a = n;
                try {
                  if (((f = M.stateNode), T))
                    (g = f.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none");
                  else {
                    (p = M.stateNode), (E = M.memoizedProps.style);
                    var k =
                      E != null && E.hasOwnProperty("display")
                        ? E.display
                        : null;
                    p.style.display =
                      k == null || typeof k == "boolean" ? "" : ("" + k).trim();
                  }
                } catch (at) {
                  Bt(M, M.return, at);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                M = n;
                try {
                  M.stateNode.nodeValue = T ? "" : M.memoizedProps;
                } catch (at) {
                  Bt(M, M.return, at);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === e) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break t;
              a === n && (a = null), (n = n.return);
            }
            a === n && (a = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        u & 4 &&
          ((u = e.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), Oh(e, a))));
        break;
      case 19:
        gi(n, e),
          _i(e),
          u & 4 &&
            ((u = e.updateQueue),
            u !== null && ((e.updateQueue = null), Oh(e, u)));
        break;
      case 21:
        break;
      default:
        gi(n, e), _i(e);
    }
  }
  function _i(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        if (e.tag !== 27) {
          t: {
            for (var a = e.return; a !== null; ) {
              if (pm(a)) {
                var u = a;
                break t;
              }
              a = a.return;
            }
            throw Error(s(160));
          }
          switch (u.tag) {
            case 27:
              var f = u.stateNode,
                g = Ah(e);
              Go(e, g, f);
              break;
            case 5:
              var p = u.stateNode;
              u.flags & 32 && (gl(p, ""), (u.flags &= -33));
              var E = Ah(e);
              Go(e, E, p);
              break;
            case 3:
            case 4:
              var T = u.stateNode.containerInfo,
                M = Ah(e);
              wh(e, M, T);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (B) {
        Bt(e, e.return, B);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function bm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        bm(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function _n(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) Sm(e, n.alternate, n), (n = n.sibling);
  }
  function Dl(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pn(4, n, n.return), Dl(n);
          break;
        case 1:
          Je(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && _m(n, n.return, a),
            Dl(n);
          break;
        case 26:
        case 27:
        case 5:
          Je(n, n.return), Dl(n);
          break;
        case 22:
          Je(n, n.return), n.memoizedState === null && Dl(n);
          break;
        default:
          Dl(n);
      }
      e = e.sibling;
    }
  }
  function jn(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var u = n.alternate,
        f = e,
        g = n,
        p = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          jn(f, g, a), Qr(4, g);
          break;
        case 1:
          if (
            (jn(f, g, a),
            (u = g),
            (f = u.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (M) {
              Bt(u, u.return, M);
            }
          if (((u = g), (f = u.updateQueue), f !== null)) {
            var E = u.stateNode;
            try {
              var T = f.shared.hiddenCallbacks;
              if (T !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < T.length; f++)
                  fm(T[f], E);
            } catch (M) {
              Bt(u, u.return, M);
            }
          }
          a && p & 64 && gm(g), Xs(g, g.return);
          break;
        case 26:
        case 27:
        case 5:
          jn(f, g, a), a && u === null && p & 4 && mm(g), Xs(g, g.return);
          break;
        case 12:
          jn(f, g, a);
          break;
        case 13:
          jn(f, g, a), a && p & 4 && Cm(f, g);
          break;
        case 22:
          g.memoizedState === null && jn(f, g, a), Xs(g, g.return);
          break;
        default:
          jn(f, g, a);
      }
      n = n.sibling;
    }
  }
  function Dh(e, n) {
    var a = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && kr(a));
  }
  function Lh(e, n) {
    (e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && kr(e));
  }
  function Zn(e, n, a, u) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) Am(e, n, a, u), (n = n.sibling);
  }
  function Am(e, n, a, u) {
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Zn(e, n, a, u), f & 2048 && Qr(9, n);
        break;
      case 3:
        Zn(e, n, a, u),
          f & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && kr(e)));
        break;
      case 12:
        if (f & 2048) {
          Zn(e, n, a, u), (e = n.stateNode);
          try {
            var g = n.memoizedProps,
              p = g.id,
              E = g.onPostCommit;
            typeof E == "function" &&
              E(
                p,
                n.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (T) {
            Bt(n, n.return, T);
          }
        } else Zn(e, n, a, u);
        break;
      case 23:
        break;
      case 22:
        (g = n.stateNode),
          n.memoizedState !== null
            ? g._visibility & 4
              ? Zn(e, n, a, u)
              : Jr(e, n)
            : g._visibility & 4
              ? Zn(e, n, a, u)
              : ((g._visibility |= 4),
                Ll(e, n, a, u, (n.subtreeFlags & 10256) !== 0)),
          f & 2048 && Dh(n.alternate, n);
        break;
      case 24:
        Zn(e, n, a, u), f & 2048 && Lh(n.alternate, n);
        break;
      default:
        Zn(e, n, a, u);
    }
  }
  function Ll(e, n, a, u, f) {
    for (f = f && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var g = e,
        p = n,
        E = a,
        T = u,
        M = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Ll(g, p, E, T, f), Qr(8, p);
          break;
        case 23:
          break;
        case 22:
          var B = p.stateNode;
          p.memoizedState !== null
            ? B._visibility & 4
              ? Ll(g, p, E, T, f)
              : Jr(g, p)
            : ((B._visibility |= 4), Ll(g, p, E, T, f)),
            f && M & 2048 && Dh(p.alternate, p);
          break;
        case 24:
          Ll(g, p, E, T, f), f && M & 2048 && Lh(p.alternate, p);
          break;
        default:
          Ll(g, p, E, T, f);
      }
      n = n.sibling;
    }
  }
  function Jr(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e,
          u = n,
          f = u.flags;
        switch (u.tag) {
          case 22:
            Jr(a, u), f & 2048 && Dh(u.alternate, u);
            break;
          case 24:
            Jr(a, u), f & 2048 && Lh(u.alternate, u);
            break;
          default:
            Jr(a, u);
        }
        n = n.sibling;
      }
  }
  var $r = 8192;
  function zl(e) {
    if (e.subtreeFlags & $r)
      for (e = e.child; e !== null; ) wm(e), (e = e.sibling);
  }
  function wm(e) {
    switch (e.tag) {
      case 26:
        zl(e),
          e.flags & $r &&
            e.memoizedState !== null &&
            dE(Di, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        zl(e);
        break;
      case 3:
      case 4:
        var n = Di;
        (Di = Qo(e.stateNode.containerInfo)), zl(e), (Di = n);
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = $r), ($r = 16777216), zl(e), ($r = n))
            : zl(e));
        break;
      default:
        zl(e);
    }
  }
  function Mm(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do (n = e.sibling), (e.sibling = null), (e = n);
      while (e !== null);
    }
  }
  function ta(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var u = n[a];
          (fe = u), Dm(u, e);
        }
      Mm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Om(e), (e = e.sibling);
  }
  function Om(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ta(e), e.flags & 2048 && Pn(9, e, e.return);
        break;
      case 3:
        ta(e);
        break;
      case 12:
        ta(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -5), Fo(e))
          : ta(e);
        break;
      default:
        ta(e);
    }
  }
  function Fo(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var u = n[a];
          (fe = u), Dm(u, e);
        }
      Mm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          Pn(8, n, n.return), Fo(n);
          break;
        case 22:
          (a = n.stateNode),
            a._visibility & 4 && ((a._visibility &= -5), Fo(n));
          break;
        default:
          Fo(n);
      }
      e = e.sibling;
    }
  }
  function Dm(e, n) {
    for (; fe !== null; ) {
      var a = fe;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Pn(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          kr(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) (u.return = a), (fe = u);
      else
        t: for (a = e; fe !== null; ) {
          u = fe;
          var f = u.sibling,
            g = u.return;
          if ((xm(u), u === a)) {
            fe = null;
            break t;
          }
          if (f !== null) {
            (f.return = g), (fe = f);
            break t;
          }
          fe = g;
        }
    }
  }
  function bv(e, n, a, u) {
    (this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function mi(e, n, a, u) {
    return new bv(e, n, a, u);
  }
  function zh(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Kn(e, n) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = mi(e.tag, n, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = n),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 31457280),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (a.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function Lm(e, n) {
    e.flags &= 31457282;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (n = a.dependencies),
          (e.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function Uo(e, n, a, u, f, g) {
    var p = 0;
    if (((u = e), typeof e == "function")) zh(e) && (p = 1);
    else if (typeof e == "string")
      p = hE(e, a, De.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      t: switch (e) {
        case d:
          return Ys(a.children, f, g, n);
        case _:
          (p = 8), (f |= 24);
          break;
        case m:
          return (
            (e = mi(12, a, n, f | 2)), (e.elementType = m), (e.lanes = g), e
          );
        case b:
          return (e = mi(13, a, n, f)), (e.elementType = b), (e.lanes = g), e;
        case R:
          return (e = mi(19, a, n, f)), (e.elementType = R), (e.lanes = g), e;
        case G:
          return zm(a, f, g, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case y:
              case S:
                p = 10;
                break t;
              case v:
                p = 9;
                break t;
              case x:
                p = 11;
                break t;
              case A:
                p = 14;
                break t;
              case O:
                (p = 16), (u = null);
                break t;
            }
          (p = 29),
            (a = Error(s(130, e === null ? "null" : typeof e, ""))),
            (u = null);
      }
    return (
      (n = mi(p, a, n, f)), (n.elementType = e), (n.type = u), (n.lanes = g), n
    );
  }
  function Ys(e, n, a, u) {
    return (e = mi(7, e, u, n)), (e.lanes = a), e;
  }
  function zm(e, n, a, u) {
    (e = mi(22, e, u, n)), (e.elementType = G), (e.lanes = a);
    var f = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var g = f._current;
        if (g === null) throw Error(s(456));
        if ((f._pendingVisibility & 2) === 0) {
          var p = Nn(g, 2);
          p !== null && ((f._pendingVisibility |= 2), Ne(p, g, 2));
        }
      },
      attach: function () {
        var g = f._current;
        if (g === null) throw Error(s(456));
        if ((f._pendingVisibility & 2) !== 0) {
          var p = Nn(g, 2);
          p !== null && ((f._pendingVisibility &= -3), Ne(p, g, 2));
        }
      },
    };
    return (e.stateNode = f), e;
  }
  function Ih(e, n, a) {
    return (e = mi(6, e, null, n)), (e.lanes = a), e;
  }
  function Nh(e, n, a) {
    return (
      (n = mi(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = a),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function mn(e) {
    e.flags |= 4;
  }
  function Im(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !p0(n))) {
      if (
        ((n = di.current),
        n !== null &&
          ((wt & 4194176) === wt
            ? Pi !== null
            : ((wt & 62914560) !== wt && (wt & 536870912) === 0) || n !== Pi))
      )
        throw ((Ur = Yc), Qg);
      e.flags |= 8192;
    }
  }
  function Xo(e, n) {
    n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? We() : 536870912), (e.lanes |= n), (Nl |= n));
  }
  function ea(e, n) {
    if (!Ot)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), (a = a.sibling);
          u === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function qt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      u = 0;
    if (n)
      for (var f = e.child; f !== null; )
        (a |= f.lanes | f.childLanes),
          (u |= f.subtreeFlags & 31457280),
          (u |= f.flags & 31457280),
          (f.return = e),
          (f = f.sibling);
    else
      for (f = e.child; f !== null; )
        (a |= f.lanes | f.childLanes),
          (u |= f.subtreeFlags),
          (u |= f.flags),
          (f.return = e),
          (f = f.sibling);
    return (e.subtreeFlags |= u), (e.childLanes = a), n;
  }
  function Av(e, n, a) {
    var u = n.pendingProps;
    switch ((Uc(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qt(n), null;
      case 1:
        return qt(n), null;
      case 3:
        return (
          (a = n.stateNode),
          (u = null),
          e !== null && (u = e.memoizedState.cache),
          n.memoizedState.cache !== u && (n.flags |= 2048),
          fn(re),
          ye(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ir(n)
              ? mn(n)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Oi !== null && (Hh(Oi), (Oi = null)))),
          qt(n),
          null
        );
      case 26:
        return (
          (a = n.memoizedState),
          e === null
            ? (mn(n),
              a !== null ? (qt(n), Im(n, a)) : (qt(n), (n.flags &= -16777217)))
            : a
              ? a !== e.memoizedState
                ? (mn(n), qt(n), Im(n, a))
                : (qt(n), (n.flags &= -16777217))
              : (e.memoizedProps !== u && mn(n), qt(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        Ri(n), (a = qe.current);
        var f = n.type;
        if (e !== null && n.stateNode != null) e.memoizedProps !== u && mn(n);
        else {
          if (!u) {
            if (n.stateNode === null) throw Error(s(166));
            return qt(n), null;
          }
          (e = De.current),
            Ir(n) ? Vg(n) : ((e = c0(f, u, a)), (n.stateNode = e), mn(n));
        }
        return qt(n), null;
      case 5:
        if ((Ri(n), (a = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== u && mn(n);
        else {
          if (!u) {
            if (n.stateNode === null) throw Error(s(166));
            return qt(n), null;
          }
          if (((e = De.current), Ir(n))) Vg(n);
          else {
            switch (((f = Wo(qe.current)), e)) {
              case 1:
                e = f.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = f.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = f.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  case "script":
                    (e = f.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof u.is == "string"
                        ? f.createElement("select", { is: u.is })
                        : f.createElement("select")),
                      u.multiple
                        ? (e.multiple = !0)
                        : u.size && (e.size = u.size);
                    break;
                  default:
                    e =
                      typeof u.is == "string"
                        ? f.createElement(a, { is: u.is })
                        : f.createElement(a);
                }
            }
            (e[Re] = n), (e[Xe] = u);
            t: for (f = n.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) e.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === n) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === n) break t;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            n.stateNode = e;
            t: switch ((Ee(e, a, u), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!u.autoFocus;
                break t;
              case "img":
                e = !0;
                break t;
              default:
                e = !1;
            }
            e && mn(n);
          }
        }
        return qt(n), (n.flags &= -16777217), null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== u && mn(n);
        else {
          if (typeof u != "string" && n.stateNode === null) throw Error(s(166));
          if (((e = qe.current), Ir(n))) {
            if (
              ((e = n.stateNode),
              (a = n.memoizedProps),
              (u = null),
              (f = Ie),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  u = f.memoizedProps;
              }
            (e[Re] = n),
              (e = !!(
                e.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                s0(e.nodeValue, a)
              )),
              e || Os(n);
          } else (e = Wo(e).createTextNode(u)), (e[Re] = n), (n.stateNode = e);
        }
        return qt(n), null;
      case 13:
        if (
          ((u = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((f = Ir(n)), u !== null && u.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(s(318));
              if (
                ((f = n.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(s(317));
              f[Re] = n;
            } else
              Nr(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            qt(n), (f = !1);
          } else Oi !== null && (Hh(Oi), (Oi = null)), (f = !0);
          if (!f) return n.flags & 256 ? (on(n), n) : (on(n), null);
        }
        if ((on(n), (n.flags & 128) !== 0)) return (n.lanes = a), n;
        if (
          ((a = u !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          (u = n.child),
            (f = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (f = u.alternate.memoizedState.cachePool.pool);
          var g = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (g = u.memoizedState.cachePool.pool),
            g !== f && (u.flags |= 2048);
        }
        return (
          a !== e && a && (n.child.flags |= 8192),
          Xo(n, n.updateQueue),
          qt(n),
          null
        );
      case 4:
        return ye(), e === null && tf(n.stateNode.containerInfo), qt(n), null;
      case 10:
        return fn(n.type), qt(n), null;
      case 19:
        if ((Ut(le), (f = n.memoizedState), f === null)) return qt(n), null;
        if (((u = (n.flags & 128) !== 0), (g = f.rendering), g === null))
          if (u) ea(f, !1);
          else {
            if (Qt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((g = xo(e)), g !== null)) {
                  for (
                    n.flags |= 128,
                      ea(f, !1),
                      e = g.updateQueue,
                      n.updateQueue = e,
                      Xo(n, e),
                      n.subtreeFlags = 0,
                      e = a,
                      a = n.child;
                    a !== null;

                  )
                    Lm(a, e), (a = a.sibling);
                  return vt(le, (le.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            f.tail !== null &&
              kt() > Yo &&
              ((n.flags |= 128), (u = !0), ea(f, !1), (n.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = xo(g)), e !== null)) {
              if (
                ((n.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                Xo(n, e),
                ea(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !g.alternate &&
                  !Ot)
              )
                return qt(n), null;
            } else
              2 * kt() - f.renderingStartTime > Yo &&
                a !== 536870912 &&
                ((n.flags |= 128), (u = !0), ea(f, !1), (n.lanes = 4194304));
          f.isBackwards
            ? ((g.sibling = n.child), (n.child = g))
            : ((e = f.last),
              e !== null ? (e.sibling = g) : (n.child = g),
              (f.last = g));
        }
        return f.tail !== null
          ? ((n = f.tail),
            (f.rendering = n),
            (f.tail = n.sibling),
            (f.renderingStartTime = kt()),
            (n.sibling = null),
            (e = le.current),
            vt(le, u ? (e & 1) | 2 : e & 1),
            n)
          : (qt(n), null);
      case 22:
      case 23:
        return (
          on(n),
          Bc(),
          (u = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== u && (n.flags |= 8192)
            : u && (n.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (qt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : qt(n),
          (a = n.updateQueue),
          a !== null && Xo(n, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (u = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (u = n.memoizedState.cachePool.pool),
          u !== a && (n.flags |= 2048),
          e !== null && Ut(Ls),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          n.memoizedState.cache !== a && (n.flags |= 2048),
          fn(re),
          qt(n),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function wv(e, n) {
    switch ((Uc(n), n.tag)) {
      case 1:
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          fn(re),
          ye(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ri(n), null;
      case 13:
        if (
          (on(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(s(340));
          Nr();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return Ut(le), null;
      case 4:
        return ye(), null;
      case 10:
        return fn(n.type), null;
      case 22:
      case 23:
        return (
          on(n),
          Bc(),
          e !== null && Ut(Ls),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return fn(re), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Nm(e, n) {
    switch ((Uc(n), n.tag)) {
      case 3:
        fn(re), ye();
        break;
      case 26:
      case 27:
      case 5:
        Ri(n);
        break;
      case 4:
        ye();
        break;
      case 13:
        on(n);
        break;
      case 19:
        Ut(le);
        break;
      case 10:
        fn(n.type);
        break;
      case 22:
      case 23:
        on(n), Bc(), e !== null && Ut(Ls);
        break;
      case 24:
        fn(re);
    }
  }
  var Mv = {
      getCacheForType: function (e) {
        var n = be(re),
          a = n.data.get(e);
        return a === void 0 && ((a = e()), n.data.set(e, a)), a;
      },
    },
    Ov = typeof WeakMap == "function" ? WeakMap : Map,
    Vt = 0,
    Ht = null,
    Rt = null,
    wt = 0,
    Pt = 0,
    ti = null,
    yn = !1,
    Il = !1,
    Gh = !1,
    pn = 0,
    Qt = 0,
    qn = 0,
    ks = 0,
    Fh = 0,
    yi = 0,
    Nl = 0,
    ia = null,
    Zi = null,
    Uh = !1,
    Xh = 0,
    Yo = 1 / 0,
    ko = null,
    Vn = null,
    Bo = !1,
    Bs = null,
    na = 0,
    Yh = 0,
    kh = null,
    sa = 0,
    Bh = null;
  function ei() {
    if ((Vt & 2) !== 0 && wt !== 0) return wt & -wt;
    if (F.T !== null) {
      var e = bl;
      return e !== 0 ? e : Wh();
    }
    return to();
  }
  function Gm() {
    yi === 0 && (yi = (wt & 536870912) === 0 || Ot ? Le() : 536870912);
    var e = di.current;
    return e !== null && (e.flags |= 32), yi;
  }
  function Ne(e, n, a) {
    ((e === Ht && Pt === 2) || e.cancelPendingCommit !== null) &&
      (Gl(e, 0), vn(e, wt, yi, !1)),
      ze(e, a),
      ((Vt & 2) === 0 || e !== Ht) &&
        (e === Ht &&
          ((Vt & 2) === 0 && (ks |= a), Qt === 4 && vn(e, wt, yi, !1)),
        Ki(e));
  }
  function Fm(e, n, a) {
    if ((Vt & 6) !== 0) throw Error(s(327));
    var u = (!a && (n & 60) === 0 && (n & e.expiredLanes) === 0) || oe(e, n),
      f = u ? zv(e, n) : Zh(e, n, !0),
      g = u;
    do {
      if (f === 0) {
        Il && !u && vn(e, n, 0, !1);
        break;
      } else if (f === 6) vn(e, n, 0, !yn);
      else {
        if (((a = e.current.alternate), g && !Dv(a))) {
          (f = Zh(e, n, !1)), (g = !1);
          continue;
        }
        if (f === 2) {
          if (((g = n), e.errorRecoveryDisabledLanes & g)) var p = 0;
          else
            (p = e.pendingLanes & -536870913),
              (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0);
          if (p !== 0) {
            n = p;
            t: {
              var E = e;
              f = ia;
              var T = E.current.memoizedState.isDehydrated;
              if ((T && (Gl(E, p).flags |= 256), (p = Zh(E, p, !1)), p !== 2)) {
                if (Gh && !T) {
                  (E.errorRecoveryDisabledLanes |= g), (ks |= g), (f = 4);
                  break t;
                }
                (g = Zi), (Zi = f), g !== null && Hh(g);
              }
              f = p;
            }
            if (((g = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          Gl(e, 0), vn(e, n, 0, !0);
          break;
        }
        t: {
          switch (((u = e), f)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194176) === n) {
                vn(u, n, yi, !yn);
                break t;
              }
              break;
            case 2:
              Zi = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (
            ((u.finishedWork = a),
            (u.finishedLanes = n),
            (n & 62914560) === n && ((g = Xh + 300 - kt()), 10 < g))
          ) {
            if ((vn(u, n, yi, !yn), xs(u, 0) !== 0)) break t;
            u.timeoutHandle = a0(
              Um.bind(null, u, a, Zi, ko, Uh, n, yi, ks, Nl, yn, 2, -0, 0),
              g,
            );
            break t;
          }
          Um(u, a, Zi, ko, Uh, n, yi, ks, Nl, yn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ki(e);
  }
  function Hh(e) {
    Zi === null ? (Zi = e) : Zi.push.apply(Zi, e);
  }
  function Um(e, n, a, u, f, g, p, E, T, M, B, K, N) {
    var k = n.subtreeFlags;
    if (
      (k & 8192 || (k & 16785408) === 16785408) &&
      ((ca = { stylesheets: null, count: 0, unsuspend: fE }),
      wm(n),
      (n = gE()),
      n !== null)
    ) {
      (e.cancelPendingCommit = n(jm.bind(null, e, a, u, f, p, E, T, 1, K, N))),
        vn(e, g, p, !M);
      return;
    }
    jm(e, a, u, f, p, E, T, B, K, N);
  }
  function Dv(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        n.flags & 16384 &&
        ((a = n.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var f = a[u],
            g = f.getSnapshot;
          f = f.value;
          try {
            if (!Qe(g(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = n.child), n.subtreeFlags & 16384 && a !== null))
        (a.return = n), (n = a);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function vn(e, n, a, u) {
    (n &= ~Fh),
      (n &= ~ks),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      u && (e.warmLanes |= n),
      (u = e.expirationTimes);
    for (var f = n; 0 < f; ) {
      var g = 31 - Te(f),
        p = 1 << g;
      (u[g] = -1), (f &= ~p);
    }
    a !== 0 && jt(e, a, n);
  }
  function Ho() {
    return (Vt & 6) === 0 ? (la(0), !1) : !0;
  }
  function Ph() {
    if (Rt !== null) {
      if (Pt === 0) var e = Rt.return;
      else (e = Rt), (hn = Fs = null), Wc(e), (Cl = null), (Xr = 0), (e = Rt);
      for (; e !== null; ) Nm(e.alternate, e), (e = e.return);
      Rt = null;
    }
  }
  function Gl(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var a = e.timeoutHandle;
    a !== -1 && ((e.timeoutHandle = -1), Wv(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      Ph(),
      (Ht = e),
      (Rt = a = Kn(e.current, null)),
      (wt = n),
      (Pt = 0),
      (ti = null),
      (yn = !1),
      (Il = oe(e, n)),
      (Gh = !1),
      (Nl = yi = Fh = ks = qn = Qt = 0),
      (Zi = ia = null),
      (Uh = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var u = e.entangledLanes;
    if (u !== 0)
      for (e = e.entanglements, u &= n; 0 < u; ) {
        var f = 31 - Te(u),
          g = 1 << f;
        (n |= e[f]), (u &= ~g);
      }
    return (pn = n), fo(), a;
  }
  function Xm(e, n) {
    (Tt = null),
      (F.H = ji),
      n === Fr
        ? ((n = t_()), (Pt = 3))
        : n === Qg
          ? ((n = t_()), (Pt = 4))
          : (Pt =
              n === J_
                ? 8
                : n !== null &&
                    typeof n == "object" &&
                    typeof n.then == "function"
                  ? 6
                  : 1),
      (ti = n),
      Rt === null && ((Qt = 1), zo(e, ci(n, e.current)));
  }
  function Ym() {
    var e = F.H;
    return (F.H = ji), e === null ? ji : e;
  }
  function km() {
    var e = F.A;
    return (F.A = Mv), e;
  }
  function jh() {
    (Qt = 4),
      yn || ((wt & 4194176) !== wt && di.current !== null) || (Il = !0),
      ((qn & 134217727) === 0 && (ks & 134217727) === 0) ||
        Ht === null ||
        vn(Ht, wt, yi, !1);
  }
  function Zh(e, n, a) {
    var u = Vt;
    Vt |= 2;
    var f = Ym(),
      g = km();
    (Ht !== e || wt !== n) && ((ko = null), Gl(e, n)), (n = !1);
    var p = Qt;
    t: do
      try {
        if (Pt !== 0 && Rt !== null) {
          var E = Rt,
            T = ti;
          switch (Pt) {
            case 8:
              Ph(), (p = 6);
              break t;
            case 3:
            case 2:
            case 6:
              di.current === null && (n = !0);
              var M = Pt;
              if (((Pt = 0), (ti = null), Fl(e, E, T, M), a && Il)) {
                p = 0;
                break t;
              }
              break;
            default:
              (M = Pt), (Pt = 0), (ti = null), Fl(e, E, T, M);
          }
        }
        Lv(), (p = Qt);
        break;
      } catch (B) {
        Xm(e, B);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (hn = Fs = null),
      (Vt = u),
      (F.H = f),
      (F.A = g),
      Rt === null && ((Ht = null), (wt = 0), fo()),
      p
    );
  }
  function Lv() {
    for (; Rt !== null; ) Bm(Rt);
  }
  function zv(e, n) {
    var a = Vt;
    Vt |= 2;
    var u = Ym(),
      f = km();
    Ht !== e || wt !== n
      ? ((ko = null), (Yo = kt() + 500), Gl(e, n))
      : (Il = oe(e, n));
    t: do
      try {
        if (Pt !== 0 && Rt !== null) {
          n = Rt;
          var g = ti;
          e: switch (Pt) {
            case 1:
              (Pt = 0), (ti = null), Fl(e, n, g, 1);
              break;
            case 2:
              if (Jg(g)) {
                (Pt = 0), (ti = null), Hm(n);
                break;
              }
              (n = function () {
                Pt === 2 && Ht === e && (Pt = 7), Ki(e);
              }),
                g.then(n, n);
              break t;
            case 3:
              Pt = 7;
              break t;
            case 4:
              Pt = 5;
              break t;
            case 7:
              Jg(g)
                ? ((Pt = 0), (ti = null), Hm(n))
                : ((Pt = 0), (ti = null), Fl(e, n, g, 7));
              break;
            case 5:
              var p = null;
              switch (Rt.tag) {
                case 26:
                  p = Rt.memoizedState;
                case 5:
                case 27:
                  var E = Rt;
                  if (!p || p0(p)) {
                    (Pt = 0), (ti = null);
                    var T = E.sibling;
                    if (T !== null) Rt = T;
                    else {
                      var M = E.return;
                      M !== null ? ((Rt = M), Po(M)) : (Rt = null);
                    }
                    break e;
                  }
              }
              (Pt = 0), (ti = null), Fl(e, n, g, 5);
              break;
            case 6:
              (Pt = 0), (ti = null), Fl(e, n, g, 6);
              break;
            case 8:
              Ph(), (Qt = 6);
              break t;
            default:
              throw Error(s(462));
          }
        }
        Iv();
        break;
      } catch (B) {
        Xm(e, B);
      }
    while (!0);
    return (
      (hn = Fs = null),
      (F.H = u),
      (F.A = f),
      (Vt = a),
      Rt !== null ? 0 : ((Ht = null), (wt = 0), fo(), Qt)
    );
  }
  function Iv() {
    for (; Rt !== null && !Ai(); ) Bm(Rt);
  }
  function Bm(e) {
    var n = cm(e.alternate, e, pn);
    (e.memoizedProps = e.pendingProps), n === null ? Po(e) : (Rt = n);
  }
  function Hm(e) {
    var n = e,
      a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = sm(a, n, n.pendingProps, n.type, void 0, wt);
        break;
      case 11:
        n = sm(a, n, n.pendingProps, n.type.render, n.ref, wt);
        break;
      case 5:
        Wc(n);
      default:
        Nm(a, n), (n = Rt = Lm(n, pn)), (n = cm(a, n, pn));
    }
    (e.memoizedProps = e.pendingProps), n === null ? Po(e) : (Rt = n);
  }
  function Fl(e, n, a, u) {
    (hn = Fs = null), Wc(n), (Cl = null), (Xr = 0);
    var f = n.return;
    try {
      if (xv(e, f, n, a, wt)) {
        (Qt = 1), zo(e, ci(a, e.current)), (Rt = null);
        return;
      }
    } catch (g) {
      if (f !== null) throw ((Rt = f), g);
      (Qt = 1), zo(e, ci(a, e.current)), (Rt = null);
      return;
    }
    n.flags & 32768
      ? (Ot || u === 1
          ? (e = !0)
          : Il || (wt & 536870912) !== 0
            ? (e = !1)
            : ((yn = e = !0),
              (u === 2 || u === 3 || u === 6) &&
                ((u = di.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        Pm(n, e))
      : Po(n);
  }
  function Po(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        Pm(n, yn);
        return;
      }
      e = n.return;
      var a = Av(n.alternate, n, pn);
      if (a !== null) {
        Rt = a;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Rt = n;
        return;
      }
      Rt = n = e;
    } while (n !== null);
    Qt === 0 && (Qt = 5);
  }
  function Pm(e, n) {
    do {
      var a = wv(e.alternate, e);
      if (a !== null) {
        (a.flags &= 32767), (Rt = a);
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        Rt = e;
        return;
      }
      Rt = e = a;
    } while (e !== null);
    (Qt = 6), (Rt = null);
  }
  function jm(e, n, a, u, f, g, p, E, T, M) {
    var B = F.T,
      K = J.p;
    try {
      (J.p = 2), (F.T = null), Nv(e, n, a, u, K, f, g, p, E, T, M);
    } finally {
      (F.T = B), (J.p = K);
    }
  }
  function Nv(e, n, a, u, f, g, p, E) {
    do Ul();
    while (Bs !== null);
    if ((Vt & 6) !== 0) throw Error(s(327));
    var T = e.finishedWork;
    if (((u = e.finishedLanes), T === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), T === e.current))
      throw Error(s(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var M = T.lanes | T.childLanes;
    if (
      ((M |= Nc),
      wi(e, u, M, g, p, E),
      e === Ht && ((Rt = Ht = null), (wt = 0)),
      ((T.subtreeFlags & 10256) === 0 && (T.flags & 10256) === 0) ||
        Bo ||
        ((Bo = !0),
        (Yh = M),
        (kh = a),
        Xv(ol, function () {
          return Ul(), null;
        })),
      (a = (T.flags & 15990) !== 0),
      (T.subtreeFlags & 15990) !== 0 || a
        ? ((a = F.T),
          (F.T = null),
          (g = J.p),
          (J.p = 2),
          (p = Vt),
          (Vt |= 4),
          Cv(e, T),
          Rm(T, e),
          lv(lf, e.containerInfo),
          (iu = !!sf),
          (lf = sf = null),
          (e.current = T),
          Sm(e, T.alternate, T),
          en(),
          (Vt = p),
          (J.p = g),
          (F.T = a))
        : (e.current = T),
      Bo ? ((Bo = !1), (Bs = e), (na = u)) : Zm(e, M),
      (M = e.pendingLanes),
      M === 0 && (Vn = null),
      $a(T.stateNode),
      Ki(e),
      n !== null)
    )
      for (f = e.onRecoverableError, T = 0; T < n.length; T++)
        (M = n[T]), f(M.value, { componentStack: M.stack });
    return (
      (na & 3) !== 0 && Ul(),
      (M = e.pendingLanes),
      (u & 4194218) !== 0 && (M & 42) !== 0
        ? e === Bh
          ? sa++
          : ((sa = 0), (Bh = e))
        : (sa = 0),
      la(0),
      null
    );
  }
  function Zm(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), kr(n)));
  }
  function Ul() {
    if (Bs !== null) {
      var e = Bs,
        n = Yh;
      Yh = 0;
      var a = ri(na),
        u = F.T,
        f = J.p;
      try {
        if (((J.p = 32 > a ? 32 : a), (F.T = null), Bs === null)) var g = !1;
        else {
          (a = kh), (kh = null);
          var p = Bs,
            E = na;
          if (((Bs = null), (na = 0), (Vt & 6) !== 0)) throw Error(s(331));
          var T = Vt;
          if (
            ((Vt |= 4),
            Om(p.current),
            Am(p, p.current, E, a),
            (Vt = T),
            la(0, !1),
            xe && typeof xe.onPostCommitFiberRoot == "function")
          )
            try {
              xe.onPostCommitFiberRoot(Es, p);
            } catch {}
          g = !0;
        }
        return g;
      } finally {
        (J.p = f), (F.T = u), Zm(e, n);
      }
    }
    return !1;
  }
  function Km(e, n, a) {
    (n = ci(a, n)),
      (n = ch(e.stateNode, n, 2)),
      (e = Hn(e, n, 2)),
      e !== null && (ze(e, 2), Ki(e));
  }
  function Bt(e, n, a) {
    if (e.tag === 3) Km(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Km(n, e, a);
          break;
        } else if (n.tag === 1) {
          var u = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (Vn === null || !Vn.has(u)))
          ) {
            (e = ci(a, e)),
              (a = W_(2)),
              (u = Hn(n, a, 2)),
              u !== null && (Q_(a, u, n, e), ze(u, 2), Ki(u));
            break;
          }
        }
        n = n.return;
      }
  }
  function Kh(e, n, a) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new Ov();
      var f = new Set();
      u.set(n, f);
    } else (f = u.get(n)), f === void 0 && ((f = new Set()), u.set(n, f));
    f.has(a) ||
      ((Gh = !0), f.add(a), (e = Gv.bind(null, e, n, a)), n.then(e, e));
  }
  function Gv(e, n, a) {
    var u = e.pingCache;
    u !== null && u.delete(n),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Ht === e &&
        (wt & a) === a &&
        (Qt === 4 || (Qt === 3 && (wt & 62914560) === wt && 300 > kt() - Xh)
          ? (Vt & 2) === 0 && Gl(e, 0)
          : (Fh |= a),
        Nl === wt && (Nl = 0)),
      Ki(e);
  }
  function qm(e, n) {
    n === 0 && (n = We()), (e = Nn(e, n)), e !== null && (ze(e, n), Ki(e));
  }
  function Fv(e) {
    var n = e.memoizedState,
      a = 0;
    n !== null && (a = n.retryLane), qm(e, a);
  }
  function Uv(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var u = e.stateNode,
          f = e.memoizedState;
        f !== null && (a = f.retryLane);
        break;
      case 19:
        u = e.stateNode;
        break;
      case 22:
        u = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    u !== null && u.delete(n), qm(e, a);
  }
  function Xv(e, n) {
    return Xi(e, n);
  }
  var jo = null,
    Xl = null,
    qh = !1,
    Zo = !1,
    Vh = !1,
    Hs = 0;
  function Ki(e) {
    e !== Xl &&
      e.next === null &&
      (Xl === null ? (jo = Xl = e) : (Xl = Xl.next = e)),
      (Zo = !0),
      qh || ((qh = !0), kv(Yv));
  }
  function la(e, n) {
    if (!Vh && Zo) {
      Vh = !0;
      do
        for (var a = !1, u = jo; u !== null; ) {
          if (e !== 0) {
            var f = u.pendingLanes;
            if (f === 0) var g = 0;
            else {
              var p = u.suspendedLanes,
                E = u.pingedLanes;
              (g = (1 << (31 - Te(42 | e) + 1)) - 1),
                (g &= f & ~(p & ~E)),
                (g = g & 201326677 ? (g & 201326677) | 1 : g ? g | 2 : 0);
            }
            g !== 0 && ((a = !0), Qm(u, g));
          } else
            (g = wt),
              (g = xs(u, u === Ht ? g : 0)),
              (g & 3) === 0 || oe(u, g) || ((a = !0), Qm(u, g));
          u = u.next;
        }
      while (a);
      Vh = !1;
    }
  }
  function Yv() {
    Zo = qh = !1;
    var e = 0;
    Hs !== 0 && (Vv() && (e = Hs), (Hs = 0));
    for (var n = kt(), a = null, u = jo; u !== null; ) {
      var f = u.next,
        g = Vm(u, n);
      g === 0
        ? ((u.next = null),
          a === null ? (jo = f) : (a.next = f),
          f === null && (Xl = a))
        : ((a = u), (e !== 0 || (g & 3) !== 0) && (Zo = !0)),
        (u = f);
    }
    la(e);
  }
  function Vm(e, n) {
    for (
      var a = e.suspendedLanes,
        u = e.pingedLanes,
        f = e.expirationTimes,
        g = e.pendingLanes & -62914561;
      0 < g;

    ) {
      var p = 31 - Te(g),
        E = 1 << p,
        T = f[p];
      T === -1
        ? ((E & a) === 0 || (E & u) !== 0) && (f[p] = nn(E, n))
        : T <= n && (e.expiredLanes |= E),
        (g &= ~E);
    }
    if (
      ((n = Ht),
      (a = wt),
      (a = xs(e, e === n ? a : 0)),
      (u = e.callbackNode),
      a === 0 || (e === n && Pt === 2) || e.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && tn(u),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || oe(e, a)) {
      if (((n = a & -a), n === e.callbackPriority)) return n;
      switch ((u !== null && tn(u), ri(a))) {
        case 2:
        case 8:
          a = vs;
          break;
        case 32:
          a = ol;
          break;
        case 268435456:
          a = Er;
          break;
        default:
          a = ol;
      }
      return (
        (u = Wm.bind(null, e)),
        (a = Xi(a, u)),
        (e.callbackPriority = n),
        (e.callbackNode = a),
        n
      );
    }
    return (
      u !== null && u !== null && tn(u),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Wm(e, n) {
    var a = e.callbackNode;
    if (Ul() && e.callbackNode !== a) return null;
    var u = wt;
    return (
      (u = xs(e, e === Ht ? u : 0)),
      u === 0
        ? null
        : (Fm(e, u, n),
          Vm(e, kt()),
          e.callbackNode != null && e.callbackNode === a
            ? Wm.bind(null, e)
            : null)
    );
  }
  function Qm(e, n) {
    if (Ul()) return null;
    Fm(e, n, !0);
  }
  function kv(e) {
    Qv(function () {
      (Vt & 6) !== 0 ? Xi(ps, e) : e();
    });
  }
  function Wh() {
    return Hs === 0 && (Hs = Le()), Hs;
  }
  function Jm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : lo("" + e);
  }
  function $m(e, n) {
    var a = n.ownerDocument.createElement("input");
    return (
      (a.name = n.name),
      (a.value = n.value),
      e.id && a.setAttribute("form", e.id),
      n.parentNode.insertBefore(a, n),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function Bv(e, n, a, u, f) {
    if (n === "submit" && a && a.stateNode === f) {
      var g = Jm((f[Xe] || null).action),
        p = u.submitter;
      p &&
        ((n = (n = p[Xe] || null)
          ? Jm(n.formAction)
          : p.getAttribute("formAction")),
        n !== null && ((g = n), (p = null)));
      var E = new uo("action", "action", null, u, f);
      e.push({
        event: E,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (Hs !== 0) {
                  var T = p ? $m(f, p) : new FormData(f);
                  lh(
                    a,
                    { pending: !0, data: T, method: f.method, action: g },
                    null,
                    T,
                  );
                }
              } else
                typeof g == "function" &&
                  (E.preventDefault(),
                  (T = p ? $m(f, p) : new FormData(f)),
                  lh(
                    a,
                    { pending: !0, data: T, method: f.method, action: g },
                    g,
                    T,
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var Qh = 0; Qh < jg.length; Qh++) {
    var Jh = jg[Qh],
      Hv = Jh.toLowerCase(),
      Pv = Jh[0].toUpperCase() + Jh.slice(1);
    Mi(Hv, "on" + Pv);
  }
  Mi(Yg, "onAnimationEnd"),
    Mi(kg, "onAnimationIteration"),
    Mi(Bg, "onAnimationStart"),
    Mi("dblclick", "onDoubleClick"),
    Mi("focusin", "onFocus"),
    Mi("focusout", "onBlur"),
    Mi(av, "onTransitionRun"),
    Mi(ov, "onTransitionStart"),
    Mi(uv, "onTransitionCancel"),
    Mi(Hg, "onTransitionEnd"),
    fl("onMouseEnter", ["mouseout", "mouseover"]),
    fl("onMouseLeave", ["mouseout", "mouseover"]),
    fl("onPointerEnter", ["pointerout", "pointerover"]),
    fl("onPointerLeave", ["pointerout", "pointerover"]),
    Cs(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Cs(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Cs("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Cs(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Cs(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Cs(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var ra =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    jv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ra),
    );
  function t0(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var u = e[a],
        f = u.event;
      u = u.listeners;
      t: {
        var g = void 0;
        if (n)
          for (var p = u.length - 1; 0 <= p; p--) {
            var E = u[p],
              T = E.instance,
              M = E.currentTarget;
            if (((E = E.listener), T !== g && f.isPropagationStopped()))
              break t;
            (g = E), (f.currentTarget = M);
            try {
              g(f);
            } catch (B) {
              Lo(B);
            }
            (f.currentTarget = null), (g = T);
          }
        else
          for (p = 0; p < u.length; p++) {
            if (
              ((E = u[p]),
              (T = E.instance),
              (M = E.currentTarget),
              (E = E.listener),
              T !== g && f.isPropagationStopped())
            )
              break t;
            (g = E), (f.currentTarget = M);
            try {
              g(f);
            } catch (B) {
              Lo(B);
            }
            (f.currentTarget = null), (g = T);
          }
      }
    }
  }
  function bt(e, n) {
    var a = n[gc];
    a === void 0 && (a = n[gc] = new Set());
    var u = e + "__bubble";
    a.has(u) || (e0(n, e, 2, !1), a.add(u));
  }
  function $h(e, n, a) {
    var u = 0;
    n && (u |= 4), e0(a, e, u, n);
  }
  var Ko = "_reactListening" + Math.random().toString(36).slice(2);
  function tf(e) {
    if (!e[Ko]) {
      (e[Ko] = !0),
        sg.forEach(function (a) {
          a !== "selectionchange" && (jv.has(a) || $h(a, !1, e), $h(a, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ko] || ((n[Ko] = !0), $h("selectionchange", !1, n));
    }
  }
  function e0(e, n, a, u) {
    switch (C0(n)) {
      case 2:
        var f = yE;
        break;
      case 8:
        f = pE;
        break;
      default:
        f = gf;
    }
    (a = f.bind(null, n, a, e)),
      (f = void 0),
      !xc ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (f = !0),
      u
        ? f !== void 0
          ? e.addEventListener(n, a, { capture: !0, passive: f })
          : e.addEventListener(n, a, !0)
        : f !== void 0
          ? e.addEventListener(n, a, { passive: f })
          : e.addEventListener(n, a, !1);
  }
  function ef(e, n, a, u, f) {
    var g = u;
    if ((n & 1) === 0 && (n & 2) === 0 && u !== null)
      t: for (;;) {
        if (u === null) return;
        var p = u.tag;
        if (p === 3 || p === 4) {
          var E = u.stateNode.containerInfo;
          if (E === f || (E.nodeType === 8 && E.parentNode === f)) break;
          if (p === 4)
            for (p = u.return; p !== null; ) {
              var T = p.tag;
              if (
                (T === 3 || T === 4) &&
                ((T = p.stateNode.containerInfo),
                T === f || (T.nodeType === 8 && T.parentNode === f))
              )
                return;
              p = p.return;
            }
          for (; E !== null; ) {
            if (((p = Ts(E)), p === null)) return;
            if (((T = p.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              u = g = p;
              continue t;
            }
            E = E.parentNode;
          }
        }
        u = u.return;
      }
    mg(function () {
      var M = g,
        B = Ec(a),
        K = [];
      t: {
        var N = Pg.get(e);
        if (N !== void 0) {
          var k = uo,
            at = e;
          switch (e) {
            case "keypress":
              if (ao(a) === 0) break t;
            case "keydown":
            case "keyup":
              k = U1;
              break;
            case "focusin":
              (at = "focus"), (k = bc);
              break;
            case "focusout":
              (at = "blur"), (k = bc);
              break;
            case "beforeblur":
            case "afterblur":
              k = bc;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = vg;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = b1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = k1;
              break;
            case Yg:
            case kg:
            case Bg:
              k = M1;
              break;
            case Hg:
              k = H1;
              break;
            case "scroll":
            case "scrollend":
              k = C1;
              break;
            case "wheel":
              k = j1;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = D1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = Sg;
              break;
            case "toggle":
            case "beforetoggle":
              k = K1;
          }
          var yt = (n & 4) !== 0,
            Jt = !yt && (e === "scroll" || e === "scrollend"),
            L = yt ? (N !== null ? N + "Capture" : null) : N;
          yt = [];
          for (var w = M, I; w !== null; ) {
            var P = w;
            if (
              ((I = P.stateNode),
              (P = P.tag),
              (P !== 5 && P !== 26 && P !== 27) ||
                I === null ||
                L === null ||
                ((P = Rr(w, L)), P != null && yt.push(aa(w, P, I))),
              Jt)
            )
              break;
            w = w.return;
          }
          0 < yt.length &&
            ((N = new k(N, at, null, a, B)),
            K.push({ event: N, listeners: yt }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (
            ((N = e === "mouseover" || e === "pointerover"),
            (k = e === "mouseout" || e === "pointerout"),
            N &&
              a !== vc &&
              (at = a.relatedTarget || a.fromElement) &&
              (Ts(at) || at[ul]))
          )
            break t;
          if (
            (k || N) &&
            ((N =
              B.window === B
                ? B
                : (N = B.ownerDocument)
                  ? N.defaultView || N.parentWindow
                  : window),
            k
              ? ((at = a.relatedTarget || a.toElement),
                (k = M),
                (at = at ? Ts(at) : null),
                at !== null &&
                  ((Jt = W(at)),
                  (yt = at.tag),
                  at !== Jt || (yt !== 5 && yt !== 27 && yt !== 6)) &&
                  (at = null))
              : ((k = null), (at = M)),
            k !== at)
          ) {
            if (
              ((yt = vg),
              (P = "onMouseLeave"),
              (L = "onMouseEnter"),
              (w = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((yt = Sg),
                (P = "onPointerLeave"),
                (L = "onPointerEnter"),
                (w = "pointer")),
              (Jt = k == null ? N : Cr(k)),
              (I = at == null ? N : Cr(at)),
              (N = new yt(P, w + "leave", k, a, B)),
              (N.target = Jt),
              (N.relatedTarget = I),
              (P = null),
              Ts(B) === M &&
                ((yt = new yt(L, w + "enter", at, a, B)),
                (yt.target = I),
                (yt.relatedTarget = Jt),
                (P = yt)),
              (Jt = P),
              k && at)
            )
              e: {
                for (yt = k, L = at, w = 0, I = yt; I; I = Yl(I)) w++;
                for (I = 0, P = L; P; P = Yl(P)) I++;
                for (; 0 < w - I; ) (yt = Yl(yt)), w--;
                for (; 0 < I - w; ) (L = Yl(L)), I--;
                for (; w--; ) {
                  if (yt === L || (L !== null && yt === L.alternate)) break e;
                  (yt = Yl(yt)), (L = Yl(L));
                }
                yt = null;
              }
            else yt = null;
            k !== null && i0(K, N, k, yt, !1),
              at !== null && Jt !== null && i0(K, Jt, at, yt, !0);
          }
        }
        t: {
          if (
            ((N = M ? Cr(M) : window),
            (k = N.nodeName && N.nodeName.toLowerCase()),
            k === "select" || (k === "input" && N.type === "file"))
          )
            var et = Mg;
          else if (Ag(N))
            if (Og) et = nv;
            else {
              et = ev;
              var Ct = tv;
            }
          else
            (k = N.nodeName),
              !k ||
              k.toLowerCase() !== "input" ||
              (N.type !== "checkbox" && N.type !== "radio")
                ? M && pc(M.elementType) && (et = Mg)
                : (et = iv);
          if (et && (et = et(e, M))) {
            wg(K, et, a, B);
            break t;
          }
          Ct && Ct(e, N, M),
            e === "focusout" &&
              M &&
              N.type === "number" &&
              M.memoizedProps.value != null &&
              yc(N, "number", N.value);
        }
        switch (((Ct = M ? Cr(M) : window), e)) {
          case "focusin":
            (Ag(Ct) || Ct.contentEditable === "true") &&
              ((pl = Ct), (Lc = M), (zr = null));
            break;
          case "focusout":
            zr = Lc = pl = null;
            break;
          case "mousedown":
            zc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (zc = !1), Ug(K, a, B);
            break;
          case "selectionchange":
            if (rv) break;
          case "keydown":
          case "keyup":
            Ug(K, a, B);
        }
        var ut;
        if (wc)
          t: {
            switch (e) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break t;
              case "compositionend":
                dt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break t;
            }
            dt = void 0;
          }
        else
          yl
            ? Rg(e, a) && (dt = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (dt = "onCompositionStart");
        dt &&
          (xg &&
            a.locale !== "ko" &&
            (yl || dt !== "onCompositionStart"
              ? dt === "onCompositionEnd" && yl && (ut = yg())
              : ((In = B),
                (Tc = "value" in In ? In.value : In.textContent),
                (yl = !0))),
          (Ct = qo(M, dt)),
          0 < Ct.length &&
            ((dt = new Eg(dt, e, null, a, B)),
            K.push({ event: dt, listeners: Ct }),
            ut
              ? (dt.data = ut)
              : ((ut = bg(a)), ut !== null && (dt.data = ut)))),
          (ut = V1 ? W1(e, a) : Q1(e, a)) &&
            ((dt = qo(M, "onBeforeInput")),
            0 < dt.length &&
              ((Ct = new Eg("onBeforeInput", "beforeinput", null, a, B)),
              K.push({ event: Ct, listeners: dt }),
              (Ct.data = ut))),
          Bv(K, e, M, a, B);
      }
      t0(K, n);
    });
  }
  function aa(e, n, a) {
    return { instance: e, listener: n, currentTarget: a };
  }
  function qo(e, n) {
    for (var a = n + "Capture", u = []; e !== null; ) {
      var f = e,
        g = f.stateNode;
      (f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          g === null ||
          ((f = Rr(e, a)),
          f != null && u.unshift(aa(e, f, g)),
          (f = Rr(e, n)),
          f != null && u.push(aa(e, f, g))),
        (e = e.return);
    }
    return u;
  }
  function Yl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function i0(e, n, a, u, f) {
    for (var g = n._reactName, p = []; a !== null && a !== u; ) {
      var E = a,
        T = E.alternate,
        M = E.stateNode;
      if (((E = E.tag), T !== null && T === u)) break;
      (E !== 5 && E !== 26 && E !== 27) ||
        M === null ||
        ((T = M),
        f
          ? ((M = Rr(a, g)), M != null && p.unshift(aa(a, M, T)))
          : f || ((M = Rr(a, g)), M != null && p.push(aa(a, M, T)))),
        (a = a.return);
    }
    p.length !== 0 && e.push({ event: n, listeners: p });
  }
  var Zv = /\r\n?/g,
    Kv = /\u0000|\uFFFD/g;
  function n0(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Zv,
        `
`,
      )
      .replace(Kv, "");
  }
  function s0(e, n) {
    return (n = n0(n)), n0(e) === n;
  }
  function Vo() {}
  function Yt(e, n, a, u, f, g) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? n === "body" || (n === "textarea" && u === "") || gl(e, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            n !== "body" &&
            gl(e, "" + u);
        break;
      case "className":
        io(e, "class", u);
        break;
      case "tabIndex":
        io(e, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        io(e, a, u);
        break;
      case "style":
        gg(e, u, g);
        break;
      case "data":
        if (n !== "object") {
          io(e, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (n !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        (u = lo("" + u)), e.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof g == "function" &&
            (a === "formAction"
              ? (n !== "input" && Yt(e, n, "name", f.name, f, null),
                Yt(e, n, "formEncType", f.formEncType, f, null),
                Yt(e, n, "formMethod", f.formMethod, f, null),
                Yt(e, n, "formTarget", f.formTarget, f, null))
              : (Yt(e, n, "encType", f.encType, f, null),
                Yt(e, n, "method", f.method, f, null),
                Yt(e, n, "target", f.target, f, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          e.removeAttribute(a);
          break;
        }
        (u = lo("" + u)), e.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (e.onclick = Vo);
        break;
      case "onScroll":
        u != null && bt("scroll", e);
        break;
      case "onScrollEnd":
        u != null && bt("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(s(61));
          if (((a = u.__html), a != null)) {
            if (f.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        e.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (a = lo("" + u)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? e.setAttribute(a, "" + u)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? e.setAttribute(a, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? e.setAttribute(a, u)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? e.setAttribute(a, u)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? e.removeAttribute(a)
          : e.setAttribute(a, u);
        break;
      case "popover":
        bt("beforetoggle", e), bt("toggle", e), eo(e, "popover", u);
        break;
      case "xlinkActuate":
        ln(e, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        ln(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        ln(e, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        ln(e, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        ln(e, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        ln(e, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        ln(e, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        ln(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        ln(e, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        eo(e, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = x1.get(a) || a), eo(e, a, u));
    }
  }
  function nf(e, n, a, u, f, g) {
    switch (a) {
      case "style":
        gg(e, u, g);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(s(61));
          if (((a = u.__html), a != null)) {
            if (f.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? gl(e, u)
          : (typeof u == "number" || typeof u == "bigint") && gl(e, "" + u);
        break;
      case "onScroll":
        u != null && bt("scroll", e);
        break;
      case "onScrollEnd":
        u != null && bt("scrollend", e);
        break;
      case "onClick":
        u != null && (e.onclick = Vo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!lg.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((f = a.endsWith("Capture")),
              (n = a.slice(2, f ? a.length - 7 : void 0)),
              (g = e[Xe] || null),
              (g = g != null ? g[a] : null),
              typeof g == "function" && e.removeEventListener(n, g, f),
              typeof u == "function")
            ) {
              typeof g != "function" &&
                g !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(n, u, f);
              break t;
            }
            a in e
              ? (e[a] = u)
              : u === !0
                ? e.setAttribute(a, "")
                : eo(e, a, u);
          }
    }
  }
  function Ee(e, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        bt("error", e), bt("load", e);
        var u = !1,
          f = !1,
          g;
        for (g in a)
          if (a.hasOwnProperty(g)) {
            var p = a[g];
            if (p != null)
              switch (g) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, n));
                default:
                  Yt(e, n, g, p, a, null);
              }
          }
        f && Yt(e, n, "srcSet", a.srcSet, a, null),
          u && Yt(e, n, "src", a.src, a, null);
        return;
      case "input":
        bt("invalid", e);
        var E = (g = p = f = null),
          T = null,
          M = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var B = a[u];
            if (B != null)
              switch (u) {
                case "name":
                  f = B;
                  break;
                case "type":
                  p = B;
                  break;
                case "checked":
                  T = B;
                  break;
                case "defaultChecked":
                  M = B;
                  break;
                case "value":
                  g = B;
                  break;
                case "defaultValue":
                  E = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null) throw Error(s(137, n));
                  break;
                default:
                  Yt(e, n, u, B, a, null);
              }
          }
        cg(e, g, E, T, M, p, f, !1), no(e);
        return;
      case "select":
        bt("invalid", e), (u = p = g = null);
        for (f in a)
          if (a.hasOwnProperty(f) && ((E = a[f]), E != null))
            switch (f) {
              case "value":
                g = E;
                break;
              case "defaultValue":
                p = E;
                break;
              case "multiple":
                u = E;
              default:
                Yt(e, n, f, E, a, null);
            }
        (n = g),
          (a = p),
          (e.multiple = !!u),
          n != null ? dl(e, !!u, n, !1) : a != null && dl(e, !!u, a, !0);
        return;
      case "textarea":
        bt("invalid", e), (g = f = u = null);
        for (p in a)
          if (a.hasOwnProperty(p) && ((E = a[p]), E != null))
            switch (p) {
              case "value":
                u = E;
                break;
              case "defaultValue":
                f = E;
                break;
              case "children":
                g = E;
                break;
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(s(91));
                break;
              default:
                Yt(e, n, p, E, a, null);
            }
        fg(e, u, f, g), no(e);
        return;
      case "option":
        for (T in a)
          if (a.hasOwnProperty(T) && ((u = a[T]), u != null))
            switch (T) {
              case "selected":
                e.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                Yt(e, n, T, u, a, null);
            }
        return;
      case "dialog":
        bt("cancel", e), bt("close", e);
        break;
      case "iframe":
      case "object":
        bt("load", e);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ra.length; u++) bt(ra[u], e);
        break;
      case "image":
        bt("error", e), bt("load", e);
        break;
      case "details":
        bt("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        bt("error", e), bt("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in a)
          if (a.hasOwnProperty(M) && ((u = a[M]), u != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                Yt(e, n, M, u, a, null);
            }
        return;
      default:
        if (pc(n)) {
          for (B in a)
            a.hasOwnProperty(B) &&
              ((u = a[B]), u !== void 0 && nf(e, n, B, u, a, void 0));
          return;
        }
    }
    for (E in a)
      a.hasOwnProperty(E) && ((u = a[E]), u != null && Yt(e, n, E, u, a, null));
  }
  function qv(e, n, a, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          g = null,
          p = null,
          E = null,
          T = null,
          M = null,
          B = null;
        for (k in a) {
          var K = a[k];
          if (a.hasOwnProperty(k) && K != null)
            switch (k) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = K;
              default:
                u.hasOwnProperty(k) || Yt(e, n, k, null, u, K);
            }
        }
        for (var N in u) {
          var k = u[N];
          if (((K = a[N]), u.hasOwnProperty(N) && (k != null || K != null)))
            switch (N) {
              case "type":
                g = k;
                break;
              case "name":
                f = k;
                break;
              case "checked":
                M = k;
                break;
              case "defaultChecked":
                B = k;
                break;
              case "value":
                p = k;
                break;
              case "defaultValue":
                E = k;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(s(137, n));
                break;
              default:
                k !== K && Yt(e, n, N, k, u, K);
            }
        }
        mc(e, p, E, T, M, B, g, f);
        return;
      case "select":
        k = p = E = N = null;
        for (g in a)
          if (((T = a[g]), a.hasOwnProperty(g) && T != null))
            switch (g) {
              case "value":
                break;
              case "multiple":
                k = T;
              default:
                u.hasOwnProperty(g) || Yt(e, n, g, null, u, T);
            }
        for (f in u)
          if (
            ((g = u[f]),
            (T = a[f]),
            u.hasOwnProperty(f) && (g != null || T != null))
          )
            switch (f) {
              case "value":
                N = g;
                break;
              case "defaultValue":
                E = g;
                break;
              case "multiple":
                p = g;
              default:
                g !== T && Yt(e, n, f, g, u, T);
            }
        (n = E),
          (a = p),
          (u = k),
          N != null
            ? dl(e, !!a, N, !1)
            : !!u != !!a &&
              (n != null ? dl(e, !!a, n, !0) : dl(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        k = N = null;
        for (E in a)
          if (
            ((f = a[E]),
            a.hasOwnProperty(E) && f != null && !u.hasOwnProperty(E))
          )
            switch (E) {
              case "value":
                break;
              case "children":
                break;
              default:
                Yt(e, n, E, null, u, f);
            }
        for (p in u)
          if (
            ((f = u[p]),
            (g = a[p]),
            u.hasOwnProperty(p) && (f != null || g != null))
          )
            switch (p) {
              case "value":
                N = f;
                break;
              case "defaultValue":
                k = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(s(91));
                break;
              default:
                f !== g && Yt(e, n, p, f, u, g);
            }
        hg(e, N, k);
        return;
      case "option":
        for (var at in a)
          if (
            ((N = a[at]),
            a.hasOwnProperty(at) && N != null && !u.hasOwnProperty(at))
          )
            switch (at) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Yt(e, n, at, null, u, N);
            }
        for (T in u)
          if (
            ((N = u[T]),
            (k = a[T]),
            u.hasOwnProperty(T) && N !== k && (N != null || k != null))
          )
            switch (T) {
              case "selected":
                e.selected =
                  N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                Yt(e, n, T, N, u, k);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var yt in a)
          (N = a[yt]),
            a.hasOwnProperty(yt) &&
              N != null &&
              !u.hasOwnProperty(yt) &&
              Yt(e, n, yt, null, u, N);
        for (M in u)
          if (
            ((N = u[M]),
            (k = a[M]),
            u.hasOwnProperty(M) && N !== k && (N != null || k != null))
          )
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(s(137, n));
                break;
              default:
                Yt(e, n, M, N, u, k);
            }
        return;
      default:
        if (pc(n)) {
          for (var Jt in a)
            (N = a[Jt]),
              a.hasOwnProperty(Jt) &&
                N !== void 0 &&
                !u.hasOwnProperty(Jt) &&
                nf(e, n, Jt, void 0, u, N);
          for (B in u)
            (N = u[B]),
              (k = a[B]),
              !u.hasOwnProperty(B) ||
                N === k ||
                (N === void 0 && k === void 0) ||
                nf(e, n, B, N, u, k);
          return;
        }
    }
    for (var L in a)
      (N = a[L]),
        a.hasOwnProperty(L) &&
          N != null &&
          !u.hasOwnProperty(L) &&
          Yt(e, n, L, null, u, N);
    for (K in u)
      (N = u[K]),
        (k = a[K]),
        !u.hasOwnProperty(K) ||
          N === k ||
          (N == null && k == null) ||
          Yt(e, n, K, N, u, k);
  }
  var sf = null,
    lf = null;
  function Wo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function l0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function r0(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function rf(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var af = null;
  function Vv() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === af
        ? !1
        : ((af = e), !0)
      : ((af = null), !1);
  }
  var a0 = typeof setTimeout == "function" ? setTimeout : void 0,
    Wv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    o0 = typeof Promise == "function" ? Promise : void 0,
    Qv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof o0 < "u"
          ? function (e) {
              return o0.resolve(null).then(e).catch(Jv);
            }
          : a0;
  function Jv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function of(e, n) {
    var a = n,
      u = 0;
    do {
      var f = a.nextSibling;
      if ((e.removeChild(a), f && f.nodeType === 8))
        if (((a = f.data), a === "/$")) {
          if (u === 0) {
            e.removeChild(f), _a(n);
            return;
          }
          u--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || u++;
      a = f;
    } while (a);
    _a(n);
  }
  function uf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (((n = n.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          uf(a), _c(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function $v(e, n, a, u) {
    for (; e.nodeType === 1; ) {
      var f = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!u && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (u) {
        if (!e[Tr])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((g = e.getAttribute("rel")),
                g === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                g !== f.rel ||
                e.getAttribute("href") !== (f.href == null ? null : f.href) ||
                e.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                e.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((g = e.getAttribute("src")),
                (g !== (f.src == null ? null : f.src) ||
                  e.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  e.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  g &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var g = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && e.getAttribute("name") === g) return e;
      } else return e;
      if (((e = Li(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function tE(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Li(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Li(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = e.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function u0(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return e;
          n--;
        } else a === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function c0(e, n, a) {
    switch (((n = Wo(a)), e)) {
      case "html":
        if (((e = n.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = n.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = n.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  var pi = new Map(),
    h0 = new Set();
  function Qo(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var En = J.d;
  J.d = { f: eE, r: iE, D: nE, C: sE, L: lE, m: rE, X: oE, S: aE, M: uE };
  function eE() {
    var e = En.f(),
      n = Ho();
    return e || n;
  }
  function iE(e) {
    var n = cl(e);
    n !== null && n.tag === 5 && n.type === "form" ? U_(n) : En.r(e);
  }
  var kl = typeof document > "u" ? null : document;
  function f0(e, n, a) {
    var u = kl;
    if (u && typeof n == "string" && n) {
      var f = oi(n);
      (f = 'link[rel="' + e + '"][href="' + f + '"]'),
        typeof a == "string" && (f += '[crossorigin="' + a + '"]'),
        h0.has(f) ||
          (h0.add(f),
          (e = { rel: e, crossOrigin: a, href: n }),
          u.querySelector(f) === null &&
            ((n = u.createElement("link")),
            Ee(n, "link", e),
            ce(n),
            u.head.appendChild(n)));
    }
  }
  function nE(e) {
    En.D(e), f0("dns-prefetch", e, null);
  }
  function sE(e, n) {
    En.C(e, n), f0("preconnect", e, n);
  }
  function lE(e, n, a) {
    En.L(e, n, a);
    var u = kl;
    if (u && e && n) {
      var f = 'link[rel="preload"][as="' + oi(n) + '"]';
      n === "image" && a && a.imageSrcSet
        ? ((f += '[imagesrcset="' + oi(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (f += '[imagesizes="' + oi(a.imageSizes) + '"]'))
        : (f += '[href="' + oi(e) + '"]');
      var g = f;
      switch (n) {
        case "style":
          g = Bl(e);
          break;
        case "script":
          g = Hl(e);
      }
      pi.has(g) ||
        ((e = V(
          {
            rel: "preload",
            href: n === "image" && a && a.imageSrcSet ? void 0 : e,
            as: n,
          },
          a,
        )),
        pi.set(g, e),
        u.querySelector(f) !== null ||
          (n === "style" && u.querySelector(oa(g))) ||
          (n === "script" && u.querySelector(ua(g))) ||
          ((n = u.createElement("link")),
          Ee(n, "link", e),
          ce(n),
          u.head.appendChild(n)));
    }
  }
  function rE(e, n) {
    En.m(e, n);
    var a = kl;
    if (a && e) {
      var u = n && typeof n.as == "string" ? n.as : "script",
        f =
          'link[rel="modulepreload"][as="' + oi(u) + '"][href="' + oi(e) + '"]',
        g = f;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          g = Hl(e);
      }
      if (
        !pi.has(g) &&
        ((e = V({ rel: "modulepreload", href: e }, n)),
        pi.set(g, e),
        a.querySelector(f) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ua(g))) return;
        }
        (u = a.createElement("link")),
          Ee(u, "link", e),
          ce(u),
          a.head.appendChild(u);
      }
    }
  }
  function aE(e, n, a) {
    En.S(e, n, a);
    var u = kl;
    if (u && e) {
      var f = hl(u).hoistableStyles,
        g = Bl(e);
      n = n || "default";
      var p = f.get(g);
      if (!p) {
        var E = { loading: 0, preload: null };
        if ((p = u.querySelector(oa(g)))) E.loading = 5;
        else {
          (e = V({ rel: "stylesheet", href: e, "data-precedence": n }, a)),
            (a = pi.get(g)) && cf(e, a);
          var T = (p = u.createElement("link"));
          ce(T),
            Ee(T, "link", e),
            (T._p = new Promise(function (M, B) {
              (T.onload = M), (T.onerror = B);
            })),
            T.addEventListener("load", function () {
              E.loading |= 1;
            }),
            T.addEventListener("error", function () {
              E.loading |= 2;
            }),
            (E.loading |= 4),
            Jo(p, n, u);
        }
        (p = { type: "stylesheet", instance: p, count: 1, state: E }),
          f.set(g, p);
      }
    }
  }
  function oE(e, n) {
    En.X(e, n);
    var a = kl;
    if (a && e) {
      var u = hl(a).hoistableScripts,
        f = Hl(e),
        g = u.get(f);
      g ||
        ((g = a.querySelector(ua(f))),
        g ||
          ((e = V({ src: e, async: !0 }, n)),
          (n = pi.get(f)) && hf(e, n),
          (g = a.createElement("script")),
          ce(g),
          Ee(g, "link", e),
          a.head.appendChild(g)),
        (g = { type: "script", instance: g, count: 1, state: null }),
        u.set(f, g));
    }
  }
  function uE(e, n) {
    En.M(e, n);
    var a = kl;
    if (a && e) {
      var u = hl(a).hoistableScripts,
        f = Hl(e),
        g = u.get(f);
      g ||
        ((g = a.querySelector(ua(f))),
        g ||
          ((e = V({ src: e, async: !0, type: "module" }, n)),
          (n = pi.get(f)) && hf(e, n),
          (g = a.createElement("script")),
          ce(g),
          Ee(g, "link", e),
          a.head.appendChild(g)),
        (g = { type: "script", instance: g, count: 1, state: null }),
        u.set(f, g));
    }
  }
  function d0(e, n, a, u) {
    var f = (f = qe.current) ? Qo(f) : null;
    if (!f) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((n = Bl(a.href)),
            (a = hl(f).hoistableStyles),
            (u = a.get(n)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(n, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Bl(a.href);
          var g = hl(f).hoistableStyles,
            p = g.get(e);
          if (
            (p ||
              ((f = f.ownerDocument || f),
              (p = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              g.set(e, p),
              (g = f.querySelector(oa(e))) &&
                !g._p &&
                ((p.instance = g), (p.state.loading = 5)),
              pi.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                pi.set(e, a),
                g || cE(f, e, a, p.state))),
            n && u === null)
          )
            throw Error(s(528, ""));
          return p;
        }
        if (n && u !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (n = a.async),
          (a = a.src),
          typeof a == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = Hl(a)),
              (a = hl(f).hoistableScripts),
              (u = a.get(n)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(n, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function Bl(e) {
    return 'href="' + oi(e) + '"';
  }
  function oa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function g0(e) {
    return V({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function cE(e, n, a, u) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (u.loading = 1)
      : ((n = e.createElement("link")),
        (u.preload = n),
        n.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Ee(n, "link", a),
        ce(n),
        e.head.appendChild(n));
  }
  function Hl(e) {
    return '[src="' + oi(e) + '"]';
  }
  function ua(e) {
    return "script[async]" + e;
  }
  function _0(e, n, a) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var u = e.querySelector('style[data-href~="' + oi(a.href) + '"]');
          if (u) return (n.instance = u), ce(u), u;
          var f = V({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (e.ownerDocument || e).createElement("style")),
            ce(u),
            Ee(u, "style", f),
            Jo(u, a.precedence, e),
            (n.instance = u)
          );
        case "stylesheet":
          f = Bl(a.href);
          var g = e.querySelector(oa(f));
          if (g) return (n.state.loading |= 4), (n.instance = g), ce(g), g;
          (u = g0(a)),
            (f = pi.get(f)) && cf(u, f),
            (g = (e.ownerDocument || e).createElement("link")),
            ce(g);
          var p = g;
          return (
            (p._p = new Promise(function (E, T) {
              (p.onload = E), (p.onerror = T);
            })),
            Ee(g, "link", u),
            (n.state.loading |= 4),
            Jo(g, a.precedence, e),
            (n.instance = g)
          );
        case "script":
          return (
            (g = Hl(a.src)),
            (f = e.querySelector(ua(g)))
              ? ((n.instance = f), ce(f), f)
              : ((u = a),
                (f = pi.get(g)) && ((u = V({}, a)), hf(u, f)),
                (e = e.ownerDocument || e),
                (f = e.createElement("script")),
                ce(f),
                Ee(f, "link", u),
                e.head.appendChild(f),
                (n.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((u = n.instance), (n.state.loading |= 4), Jo(u, a.precedence, e));
    return n.instance;
  }
  function Jo(e, n, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        f = u.length ? u[u.length - 1] : null,
        g = f,
        p = 0;
      p < u.length;
      p++
    ) {
      var E = u[p];
      if (E.dataset.precedence === n) g = E;
      else if (g !== f) break;
    }
    g
      ? g.parentNode.insertBefore(e, g.nextSibling)
      : ((n = a.nodeType === 9 ? a.head : a), n.insertBefore(e, n.firstChild));
  }
  function cf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title);
  }
  function hf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity);
  }
  var $o = null;
  function m0(e, n, a) {
    if ($o === null) {
      var u = new Map(),
        f = ($o = new Map());
      f.set(a, u);
    } else (f = $o), (u = f.get(a)), u || ((u = new Map()), f.set(a, u));
    if (u.has(e)) return u;
    for (
      u.set(e, null), a = a.getElementsByTagName(e), f = 0;
      f < a.length;
      f++
    ) {
      var g = a[f];
      if (
        !(
          g[Tr] ||
          g[Re] ||
          (e === "link" && g.getAttribute("rel") === "stylesheet")
        ) &&
        g.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var p = g.getAttribute(n) || "";
        p = e + p;
        var E = u.get(p);
        E ? E.push(g) : u.set(p, [g]);
      }
    }
    return u;
  }
  function y0(e, n, a) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        n === "title" ? e.querySelector("head > title") : null,
      );
  }
  function hE(e, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (e = n.disabled), typeof n.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function p0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var ca = null;
  function fE() {}
  function dE(e, n, a) {
    if (ca === null) throw Error(s(475));
    var u = ca;
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var f = Bl(a.href),
          g = e.querySelector(oa(f));
        if (g) {
          (e = g._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (u.count++, (u = tu.bind(u)), e.then(u, u)),
            (n.state.loading |= 4),
            (n.instance = g),
            ce(g);
          return;
        }
        (g = e.ownerDocument || e),
          (a = g0(a)),
          (f = pi.get(f)) && cf(a, f),
          (g = g.createElement("link")),
          ce(g);
        var p = g;
        (p._p = new Promise(function (E, T) {
          (p.onload = E), (p.onerror = T);
        })),
          Ee(g, "link", a),
          (n.instance = g);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (u.count++,
          (n = tu.bind(u)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  function gE() {
    if (ca === null) throw Error(s(475));
    var e = ca;
    return (
      e.stylesheets && e.count === 0 && ff(e, e.stylesheets),
      0 < e.count
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && ff(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                (e.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function tu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) ff(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var eu = null;
  function ff(e, n) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (eu = new Map()),
        n.forEach(_E, e),
        (eu = null),
        tu.call(e));
  }
  function _E(e, n) {
    if (!(n.state.loading & 4)) {
      var a = eu.get(e);
      if (a) var u = a.get(null);
      else {
        (a = new Map()), eu.set(e, a);
        for (
          var f = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            g = 0;
          g < f.length;
          g++
        ) {
          var p = f[g];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") &&
            (a.set(p.dataset.precedence, p), (u = p));
        }
        u && a.set(null, u);
      }
      (f = n.instance),
        (p = f.getAttribute("data-precedence")),
        (g = a.get(p) || u),
        g === u && a.set(null, f),
        a.set(p, f),
        this.count++,
        (u = tu.bind(this)),
        f.addEventListener("load", u),
        f.addEventListener("error", u),
        g
          ? g.parentNode.insertBefore(f, g.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(f, e.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var ha = {
    $$typeof: S,
    Provider: null,
    Consumer: null,
    _currentValue: rt,
    _currentValue2: rt,
    _threadCount: 0,
  };
  function mE(e, n, a, u, f, g, p, E) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ce(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ce(0)),
      (this.hiddenUpdates = Ce(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = f),
      (this.onCaughtError = g),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = E),
      (this.incompleteTransitions = new Map());
  }
  function v0(e, n, a, u, f, g, p, E, T, M, B, K) {
    return (
      (e = new mE(e, n, a, p, E, T, M, K)),
      (n = 1),
      g === !0 && (n |= 24),
      (g = mi(3, null, null, n)),
      (e.current = g),
      (g.stateNode = e),
      (n = Hc()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (g.memoizedState = { element: u, isDehydrated: a, cache: n }),
      Th(g),
      e
    );
  }
  function E0(e) {
    return e ? ((e = Sl), e) : Sl;
  }
  function S0(e, n, a, u, f, g) {
    (f = E0(f)),
      u.context === null ? (u.context = f) : (u.pendingContext = f),
      (u = Bn(n)),
      (u.payload = { element: a }),
      (g = g === void 0 ? null : g),
      g !== null && (u.callback = g),
      (a = Hn(e, u, n)),
      a !== null && (Ne(a, e, n), qr(a, e, n));
  }
  function x0(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function df(e, n) {
    x0(e, n), (e = e.alternate) && x0(e, n);
  }
  function T0(e) {
    if (e.tag === 13) {
      var n = Nn(e, 67108864);
      n !== null && Ne(n, e, 67108864), df(e, 67108864);
    }
  }
  var iu = !0;
  function yE(e, n, a, u) {
    var f = F.T;
    F.T = null;
    var g = J.p;
    try {
      (J.p = 2), gf(e, n, a, u);
    } finally {
      (J.p = g), (F.T = f);
    }
  }
  function pE(e, n, a, u) {
    var f = F.T;
    F.T = null;
    var g = J.p;
    try {
      (J.p = 8), gf(e, n, a, u);
    } finally {
      (J.p = g), (F.T = f);
    }
  }
  function gf(e, n, a, u) {
    if (iu) {
      var f = _f(u);
      if (f === null) ef(e, n, u, nu, a), R0(e, u);
      else if (EE(f, e, n, a, u)) u.stopPropagation();
      else if ((R0(e, u), n & 4 && -1 < vE.indexOf(e))) {
        for (; f !== null; ) {
          var g = cl(f);
          if (g !== null)
            switch (g.tag) {
              case 3:
                if (((g = g.stateNode), g.current.memoizedState.isDehydrated)) {
                  var p = Bi(g.pendingLanes);
                  if (p !== 0) {
                    var E = g;
                    for (E.pendingLanes |= 2, E.entangledLanes |= 2; p; ) {
                      var T = 1 << (31 - Te(p));
                      (E.entanglements[1] |= T), (p &= ~T);
                    }
                    Ki(g), (Vt & 6) === 0 && ((Yo = kt() + 500), la(0));
                  }
                }
                break;
              case 13:
                (E = Nn(g, 2)), E !== null && Ne(E, g, 2), Ho(), df(g, 2);
            }
          if (((g = _f(u)), g === null && ef(e, n, u, nu, a), g === f)) break;
          f = g;
        }
        f !== null && u.stopPropagation();
      } else ef(e, n, u, null, a);
    }
  }
  function _f(e) {
    return (e = Ec(e)), mf(e);
  }
  var nu = null;
  function mf(e) {
    if (((nu = null), (e = Ts(e)), e !== null)) {
      var n = W(e);
      if (n === null) e = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (((e = $(n)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return (nu = e), null;
  }
  function C0(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (vr()) {
          case ps:
            return 2;
          case vs:
            return 8;
          case ol:
          case Ja:
            return 32;
          case Er:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var yf = !1,
    Wn = null,
    Qn = null,
    Jn = null,
    fa = new Map(),
    da = new Map(),
    $n = [],
    vE =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function R0(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Wn = null;
        break;
      case "dragenter":
      case "dragleave":
        Qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Jn = null;
        break;
      case "pointerover":
      case "pointerout":
        fa.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        da.delete(n.pointerId);
    }
  }
  function ga(e, n, a, u, f, g) {
    return e === null || e.nativeEvent !== g
      ? ((e = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: g,
          targetContainers: [f],
        }),
        n !== null && ((n = cl(n)), n !== null && T0(n)),
        e)
      : ((e.eventSystemFlags |= u),
        (n = e.targetContainers),
        f !== null && n.indexOf(f) === -1 && n.push(f),
        e);
  }
  function EE(e, n, a, u, f) {
    switch (n) {
      case "focusin":
        return (Wn = ga(Wn, e, n, a, u, f)), !0;
      case "dragenter":
        return (Qn = ga(Qn, e, n, a, u, f)), !0;
      case "mouseover":
        return (Jn = ga(Jn, e, n, a, u, f)), !0;
      case "pointerover":
        var g = f.pointerId;
        return fa.set(g, ga(fa.get(g) || null, e, n, a, u, f)), !0;
      case "gotpointercapture":
        return (
          (g = f.pointerId), da.set(g, ga(da.get(g) || null, e, n, a, u, f)), !0
        );
    }
    return !1;
  }
  function b0(e) {
    var n = Ts(e.target);
    if (n !== null) {
      var a = W(n);
      if (a !== null) {
        if (((n = a.tag), n === 13)) {
          if (((n = $(a)), n !== null)) {
            (e.blockedOn = n),
              g1(e.priority, function () {
                if (a.tag === 13) {
                  var u = ei(),
                    f = Nn(a, u);
                  f !== null && Ne(f, a, u), df(a, u);
                }
              });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function su(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = _f(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var u = new a.constructor(a.type, a);
        (vc = u), a.target.dispatchEvent(u), (vc = null);
      } else return (n = cl(a)), n !== null && T0(n), (e.blockedOn = a), !1;
      n.shift();
    }
    return !0;
  }
  function A0(e, n, a) {
    su(e) && a.delete(n);
  }
  function SE() {
    (yf = !1),
      Wn !== null && su(Wn) && (Wn = null),
      Qn !== null && su(Qn) && (Qn = null),
      Jn !== null && su(Jn) && (Jn = null),
      fa.forEach(A0),
      da.forEach(A0);
  }
  function lu(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      yf ||
        ((yf = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, SE)));
  }
  var ru = null;
  function w0(e) {
    ru !== e &&
      ((ru = e),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        ru === e && (ru = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n],
            u = e[n + 1],
            f = e[n + 2];
          if (typeof u != "function") {
            if (mf(u || a) === null) continue;
            break;
          }
          var g = cl(a);
          g !== null &&
            (e.splice(n, 3),
            (n -= 3),
            lh(g, { pending: !0, data: f, method: a.method, action: u }, u, f));
        }
      }));
  }
  function _a(e) {
    function n(T) {
      return lu(T, e);
    }
    Wn !== null && lu(Wn, e),
      Qn !== null && lu(Qn, e),
      Jn !== null && lu(Jn, e),
      fa.forEach(n),
      da.forEach(n);
    for (var a = 0; a < $n.length; a++) {
      var u = $n[a];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; 0 < $n.length && ((a = $n[0]), a.blockedOn === null); )
      b0(a), a.blockedOn === null && $n.shift();
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var f = a[u],
          g = a[u + 1],
          p = f[Xe] || null;
        if (typeof g == "function") p || w0(a);
        else if (p) {
          var E = null;
          if (g && g.hasAttribute("formAction")) {
            if (((f = g), (p = g[Xe] || null))) E = p.formAction;
            else if (mf(f) !== null) continue;
          } else E = p.action;
          typeof E == "function" ? (a[u + 1] = E) : (a.splice(u, 3), (u -= 3)),
            w0(a);
        }
      }
  }
  function pf(e) {
    this._internalRoot = e;
  }
  (au.prototype.render = pf.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(s(409));
      var a = n.current,
        u = ei();
      S0(a, u, e, n, null, null);
    }),
    (au.prototype.unmount = pf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          e.tag === 0 && Ul(),
            S0(e.current, 2, null, e, null, null),
            Ho(),
            (n[ul] = null);
        }
      });
  function au(e) {
    this._internalRoot = e;
  }
  au.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = to();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < $n.length && n !== 0 && n < $n[a].priority; a++);
      $n.splice(a, 0, e), a === 0 && b0(e);
    }
  };
  var M0 = t.version;
  if (M0 !== "19.0.0") throw Error(s(527, M0, "19.0.0"));
  J.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = X(n)),
      (e = e !== null ? U(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var xE = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: F,
    findFiberByHostInstance: Ts,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ou.isDisabled && ou.supportsFiber)
      try {
        (Es = ou.inject(xE)), (xe = ou);
      } catch {}
  }
  return (
    (ma.createRoot = function (e, n) {
      if (!r(e)) throw Error(s(299));
      var a = !1,
        u = "",
        f = Z_,
        g = K_,
        p = q_,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (g = n.onCaughtError),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (E = n.unstable_transitionCallbacks)),
        (n = v0(e, 1, !1, null, null, a, u, f, g, p, E, null)),
        (e[ul] = n.current),
        tf(e.nodeType === 8 ? e.parentNode : e),
        new pf(n)
      );
    }),
    (ma.hydrateRoot = function (e, n, a) {
      if (!r(e)) throw Error(s(299));
      var u = !1,
        f = "",
        g = Z_,
        p = K_,
        E = q_,
        T = null,
        M = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (f = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (g = a.onUncaughtError),
          a.onCaughtError !== void 0 && (p = a.onCaughtError),
          a.onRecoverableError !== void 0 && (E = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (T = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (M = a.formState)),
        (n = v0(e, 1, !0, n, a ?? null, u, f, g, p, E, T, M)),
        (n.context = E0(null)),
        (a = n.current),
        (u = ei()),
        (f = Bn(u)),
        (f.callback = null),
        Hn(a, f, u),
        (n.current.lanes = u),
        ze(n, u),
        Ki(n),
        (e[ul] = n.current),
        tf(e),
        new au(n)
      );
    }),
    (ma.version = "19.0.0"),
    ma
  );
}
var U0;
function zE() {
  if (U0) return Ef.exports;
  U0 = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (t) {
        console.error(t);
      }
  }
  return l(), (Ef.exports = LE()), Ef.exports;
}
var IE = zE();
const Be = { ADD: "add", REMOVE: "remove" },
  ar = { PROPERTYCHANGE: "propertychange" },
  pt = {
    CHANGE: "change",
    ERROR: "error",
    CONTEXTMENU: "contextmenu",
    CLICK: "click",
    DBLCLICK: "dblclick",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    LOAD: "load",
    TOUCHMOVE: "touchmove",
    WHEEL: "wheel",
  };
class Bu {
  constructor() {
    this.disposed = !1;
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal());
  }
  disposeInternal() {}
}
function NE(l, t, i) {
  let s, r;
  i = i || bn;
  let o = 0,
    c = l.length,
    h = !1;
  for (; o < c; )
    (s = o + ((c - o) >> 1)),
      (r = +i(l[s], t)),
      r < 0 ? (o = s + 1) : ((c = s), (h = !r));
  return h ? o : ~o;
}
function bn(l, t) {
  return l > t ? 1 : l < t ? -1 : 0;
}
function GE(l, t) {
  return l < t ? 1 : l > t ? -1 : 0;
}
function fd(l, t, i) {
  if (l[0] <= t) return 0;
  const s = l.length;
  if (t <= l[s - 1]) return s - 1;
  if (typeof i == "function") {
    for (let r = 1; r < s; ++r) {
      const o = l[r];
      if (o === t) return r;
      if (o < t) return i(t, l[r - 1], o) > 0 ? r - 1 : r;
    }
    return s - 1;
  }
  if (i > 0) {
    for (let r = 1; r < s; ++r) if (l[r] < t) return r - 1;
    return s - 1;
  }
  if (i < 0) {
    for (let r = 1; r < s; ++r) if (l[r] <= t) return r;
    return s - 1;
  }
  for (let r = 1; r < s; ++r) {
    if (l[r] == t) return r;
    if (l[r] < t) return l[r - 1] - t < t - l[r] ? r - 1 : r;
  }
  return s - 1;
}
function FE(l, t, i) {
  for (; t < i; ) {
    const s = l[t];
    (l[t] = l[i]), (l[i] = s), ++t, --i;
  }
}
function Ji(l, t) {
  const i = Array.isArray(t) ? t : [t],
    s = i.length;
  for (let r = 0; r < s; r++) l[l.length] = i[r];
}
function ys(l, t) {
  const i = l.length;
  if (i !== t.length) return !1;
  for (let s = 0; s < i; s++) if (l[s] !== t[s]) return !1;
  return !0;
}
function UE(l, t, i) {
  const s = t || bn;
  return l.every(function (r, o) {
    if (o === 0) return !0;
    const c = s(l[o - 1], r);
    return !(c > 0 || c === 0);
  });
}
function Ma() {
  return !0;
}
function Hu() {
  return !1;
}
function or() {}
function Zy(l) {
  let t, i, s;
  return function () {
    const r = Array.prototype.slice.call(arguments);
    return (
      (!i || this !== s || !ys(r, i)) &&
        ((s = this), (i = r), (t = l.apply(this, arguments))),
      t
    );
  };
}
function XE(l) {
  function t() {
    let i;
    try {
      i = l();
    } catch (s) {
      return Promise.reject(s);
    }
    return i instanceof Promise ? i : Promise.resolve(i);
  }
  return t();
}
function ka(l) {
  for (const t in l) delete l[t];
}
function tl(l) {
  let t;
  for (t in l) return !1;
  return !t;
}
class Dn {
  constructor(t) {
    this.propagationStopped,
      this.defaultPrevented,
      (this.type = t),
      (this.target = null);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
class Pu extends Bu {
  constructor(t) {
    super(),
      (this.eventTarget_ = t),
      (this.pendingRemovals_ = null),
      (this.dispatching_ = null),
      (this.listeners_ = null);
  }
  addEventListener(t, i) {
    if (!t || !i) return;
    const s = this.listeners_ || (this.listeners_ = {}),
      r = s[t] || (s[t] = []);
    r.includes(i) || r.push(i);
  }
  dispatchEvent(t) {
    const i = typeof t == "string",
      s = i ? t : t.type,
      r = this.listeners_ && this.listeners_[s];
    if (!r) return;
    const o = i ? new Dn(t) : t;
    o.target || (o.target = this.eventTarget_ || this);
    const c = this.dispatching_ || (this.dispatching_ = {}),
      h = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    s in c || ((c[s] = 0), (h[s] = 0)), ++c[s];
    let d;
    for (let _ = 0, m = r.length; _ < m; ++_)
      if (
        ("handleEvent" in r[_]
          ? (d = r[_].handleEvent(o))
          : (d = r[_].call(this, o)),
        d === !1 || o.propagationStopped)
      ) {
        d = !1;
        break;
      }
    if (--c[s] === 0) {
      let _ = h[s];
      for (delete h[s]; _--; ) this.removeEventListener(s, or);
      delete c[s];
    }
    return d;
  }
  disposeInternal() {
    this.listeners_ && ka(this.listeners_);
  }
  getListeners(t) {
    return (this.listeners_ && this.listeners_[t]) || void 0;
  }
  hasListener(t) {
    return this.listeners_
      ? t
        ? t in this.listeners_
        : Object.keys(this.listeners_).length > 0
      : !1;
  }
  removeEventListener(t, i) {
    if (!this.listeners_) return;
    const s = this.listeners_[t];
    if (!s) return;
    const r = s.indexOf(i);
    r !== -1 &&
      (this.pendingRemovals_ && t in this.pendingRemovals_
        ? ((s[r] = or), ++this.pendingRemovals_[t])
        : (s.splice(r, 1), s.length === 0 && delete this.listeners_[t]));
  }
}
function Mt(l, t, i, s, r) {
  if (r) {
    const c = i;
    i = function (h) {
      return l.removeEventListener(t, i), c.call(s ?? this, h);
    };
  } else s && s !== l && (i = i.bind(s));
  const o = { target: l, type: t, listener: i };
  return l.addEventListener(t, i), o;
}
function Tu(l, t, i, s) {
  return Mt(l, t, i, s, !0);
}
function Zt(l) {
  l && l.target && (l.target.removeEventListener(l.type, l.listener), ka(l));
}
class Ba extends Pu {
  constructor() {
    super(),
      (this.on = this.onInternal),
      (this.once = this.onceInternal),
      (this.un = this.unInternal),
      (this.revision_ = 0);
  }
  changed() {
    ++this.revision_, this.dispatchEvent(pt.CHANGE);
  }
  getRevision() {
    return this.revision_;
  }
  onInternal(t, i) {
    if (Array.isArray(t)) {
      const s = t.length,
        r = new Array(s);
      for (let o = 0; o < s; ++o) r[o] = Mt(this, t[o], i);
      return r;
    }
    return Mt(this, t, i);
  }
  onceInternal(t, i) {
    let s;
    if (Array.isArray(t)) {
      const r = t.length;
      s = new Array(r);
      for (let o = 0; o < r; ++o) s[o] = Tu(this, t[o], i);
    } else s = Tu(this, t, i);
    return (i.ol_key = s), s;
  }
  unInternal(t, i) {
    const s = i.ol_key;
    if (s) YE(s);
    else if (Array.isArray(t))
      for (let r = 0, o = t.length; r < o; ++r)
        this.removeEventListener(t[r], i);
    else this.removeEventListener(t, i);
  }
}
Ba.prototype.on;
Ba.prototype.once;
Ba.prototype.un;
function YE(l) {
  if (Array.isArray(l)) for (let t = 0, i = l.length; t < i; ++t) Zt(l[t]);
  else Zt(l);
}
function _t() {
  throw new Error("Unimplemented abstract method.");
}
let kE = 0;
function It(l) {
  return l.ol_uid || (l.ol_uid = String(++kE));
}
class X0 extends Dn {
  constructor(t, i, s) {
    super(t), (this.key = i), (this.oldValue = s);
  }
}
class $i extends Ba {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      It(this),
      (this.values_ = null),
      t !== void 0 && this.setProperties(t);
  }
  get(t) {
    let i;
    return (
      this.values_ && this.values_.hasOwnProperty(t) && (i = this.values_[t]), i
    );
  }
  getKeys() {
    return (this.values_ && Object.keys(this.values_)) || [];
  }
  getProperties() {
    return (this.values_ && Object.assign({}, this.values_)) || {};
  }
  getPropertiesInternal() {
    return this.values_;
  }
  hasProperties() {
    return !!this.values_;
  }
  notify(t, i) {
    let s;
    (s = `change:${t}`),
      this.hasListener(s) && this.dispatchEvent(new X0(s, t, i)),
      (s = ar.PROPERTYCHANGE),
      this.hasListener(s) && this.dispatchEvent(new X0(s, t, i));
  }
  addChangeListener(t, i) {
    this.addEventListener(`change:${t}`, i);
  }
  removeChangeListener(t, i) {
    this.removeEventListener(`change:${t}`, i);
  }
  set(t, i, s) {
    const r = this.values_ || (this.values_ = {});
    if (s) r[t] = i;
    else {
      const o = r[t];
      (r[t] = i), o !== i && this.notify(t, o);
    }
  }
  setProperties(t, i) {
    for (const s in t) this.set(s, t[s], i);
  }
  applyProperties(t) {
    t.values_ && Object.assign(this.values_ || (this.values_ = {}), t.values_);
  }
  unset(t, i) {
    if (this.values_ && t in this.values_) {
      const s = this.values_[t];
      delete this.values_[t],
        tl(this.values_) && (this.values_ = null),
        i || this.notify(t, s);
    }
  }
}
const Y0 = { LENGTH: "length" };
class uu extends Dn {
  constructor(t, i, s) {
    super(t), (this.element = i), (this.index = s);
  }
}
class Wi extends $i {
  constructor(t, i) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (i = i || {}),
      (this.unique_ = !!i.unique),
      (this.array_ = t || []),
      this.unique_)
    )
      for (let s = 0, r = this.array_.length; s < r; ++s)
        this.assertUnique_(this.array_[s], s);
    this.updateLength_();
  }
  clear() {
    for (; this.getLength() > 0; ) this.pop();
  }
  extend(t) {
    for (let i = 0, s = t.length; i < s; ++i) this.push(t[i]);
    return this;
  }
  forEach(t) {
    const i = this.array_;
    for (let s = 0, r = i.length; s < r; ++s) t(i[s], s, i);
  }
  getArray() {
    return this.array_;
  }
  item(t) {
    return this.array_[t];
  }
  getLength() {
    return this.get(Y0.LENGTH);
  }
  insertAt(t, i) {
    if (t < 0 || t > this.getLength())
      throw new Error("Index out of bounds: " + t);
    this.unique_ && this.assertUnique_(i),
      this.array_.splice(t, 0, i),
      this.updateLength_(),
      this.dispatchEvent(new uu(Be.ADD, i, t));
  }
  pop() {
    return this.removeAt(this.getLength() - 1);
  }
  push(t) {
    this.unique_ && this.assertUnique_(t);
    const i = this.getLength();
    return this.insertAt(i, t), this.getLength();
  }
  remove(t) {
    const i = this.array_;
    for (let s = 0, r = i.length; s < r; ++s)
      if (i[s] === t) return this.removeAt(s);
  }
  removeAt(t) {
    if (t < 0 || t >= this.getLength()) return;
    const i = this.array_[t];
    return (
      this.array_.splice(t, 1),
      this.updateLength_(),
      this.dispatchEvent(new uu(Be.REMOVE, i, t)),
      i
    );
  }
  setAt(t, i) {
    const s = this.getLength();
    if (t >= s) {
      this.insertAt(t, i);
      return;
    }
    if (t < 0) throw new Error("Index out of bounds: " + t);
    this.unique_ && this.assertUnique_(i, t);
    const r = this.array_[t];
    (this.array_[t] = i),
      this.dispatchEvent(new uu(Be.REMOVE, r, t)),
      this.dispatchEvent(new uu(Be.ADD, i, t));
  }
  updateLength_() {
    this.set(Y0.LENGTH, this.array_.length);
  }
  assertUnique_(t, i) {
    for (let s = 0, r = this.array_.length; s < r; ++s)
      if (this.array_[s] === t && s !== i)
        throw new Error("Duplicate item added to a unique collection");
  }
}
function Lt(l, t) {
  if (!l) throw new Error(t);
}
class ju extends $i {
  constructor(t) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (this.id_ = void 0),
      (this.geometryName_ = "geometry"),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      (this.geometryChangeKey_ = null),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      t)
    )
      if (typeof t.getSimplifiedGeometry == "function") {
        const i = t;
        this.setGeometry(i);
      } else {
        const i = t;
        this.setProperties(i);
      }
  }
  clone() {
    const t = new ju(this.hasProperties() ? this.getProperties() : null);
    t.setGeometryName(this.getGeometryName());
    const i = this.getGeometry();
    i && t.setGeometry(i.clone());
    const s = this.getStyle();
    return s && t.setStyle(s), t;
  }
  getGeometry() {
    return this.get(this.geometryName_);
  }
  getId() {
    return this.id_;
  }
  getGeometryName() {
    return this.geometryName_;
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  handleGeometryChange_() {
    this.changed();
  }
  handleGeometryChanged_() {
    this.geometryChangeKey_ &&
      (Zt(this.geometryChangeKey_), (this.geometryChangeKey_ = null));
    const t = this.getGeometry();
    t &&
      (this.geometryChangeKey_ = Mt(
        t,
        pt.CHANGE,
        this.handleGeometryChange_,
        this,
      )),
      this.changed();
  }
  setGeometry(t) {
    this.set(this.geometryName_, t);
  }
  setStyle(t) {
    (this.style_ = t),
      (this.styleFunction_ = t ? BE(t) : void 0),
      this.changed();
  }
  setId(t) {
    (this.id_ = t), this.changed();
  }
  setGeometryName(t) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_),
      (this.geometryName_ = t),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      this.handleGeometryChanged_();
  }
}
function BE(l) {
  if (typeof l == "function") return l;
  let t;
  return (
    Array.isArray(l)
      ? (t = l)
      : (Lt(
          typeof l.getZIndex == "function",
          "Expected an `ol/style/Style` or an array of `ol/style/Style.js`",
        ),
        (t = [l])),
    function () {
      return t;
    }
  );
}
const ge = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16,
};
function k0(l) {
  const t = Ti();
  for (let i = 0, s = l.length; i < s; ++i) wa(t, l[i]);
  return t;
}
function HE(l, t, i) {
  const s = Math.min.apply(null, l),
    r = Math.min.apply(null, t),
    o = Math.max.apply(null, l),
    c = Math.max.apply(null, t);
  return Mn(s, r, o, c, i);
}
function dd(l, t, i) {
  return i
    ? ((i[0] = l[0] - t),
      (i[1] = l[1] - t),
      (i[2] = l[2] + t),
      (i[3] = l[3] + t),
      i)
    : [l[0] - t, l[1] - t, l[2] + t, l[3] + t];
}
function Ky(l, t) {
  return t
    ? ((t[0] = l[0]), (t[1] = l[1]), (t[2] = l[2]), (t[3] = l[3]), t)
    : l.slice();
}
function nl(l, t, i) {
  let s, r;
  return (
    t < l[0] ? (s = l[0] - t) : l[2] < t ? (s = t - l[2]) : (s = 0),
    i < l[1] ? (r = l[1] - i) : l[3] < i ? (r = i - l[3]) : (r = 0),
    s * s + r * r
  );
}
function ur(l, t) {
  return gd(l, t[0], t[1]);
}
function Sa(l, t) {
  return l[0] <= t[0] && t[2] <= l[2] && l[1] <= t[1] && t[3] <= l[3];
}
function gd(l, t, i) {
  return l[0] <= t && t <= l[2] && l[1] <= i && i <= l[3];
}
function Zf(l, t) {
  const i = l[0],
    s = l[1],
    r = l[2],
    o = l[3],
    c = t[0],
    h = t[1];
  let d = ge.UNKNOWN;
  return (
    c < i ? (d = d | ge.LEFT) : c > r && (d = d | ge.RIGHT),
    h < s ? (d = d | ge.BELOW) : h > o && (d = d | ge.ABOVE),
    d === ge.UNKNOWN && (d = ge.INTERSECTING),
    d
  );
}
function Ti() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function Mn(l, t, i, s, r) {
  return r ? ((r[0] = l), (r[1] = t), (r[2] = i), (r[3] = s), r) : [l, t, i, s];
}
function mr(l) {
  return Mn(1 / 0, 1 / 0, -1 / 0, -1 / 0, l);
}
function qy(l, t) {
  const i = l[0],
    s = l[1];
  return Mn(i, s, i, s, t);
}
function _d(l, t, i, s, r) {
  const o = mr(r);
  return Wy(o, l, t, i, s);
}
function Oa(l, t) {
  return l[0] == t[0] && l[2] == t[2] && l[1] == t[1] && l[3] == t[3];
}
function Vy(l, t) {
  return (
    t[0] < l[0] && (l[0] = t[0]),
    t[2] > l[2] && (l[2] = t[2]),
    t[1] < l[1] && (l[1] = t[1]),
    t[3] > l[3] && (l[3] = t[3]),
    l
  );
}
function wa(l, t) {
  t[0] < l[0] && (l[0] = t[0]),
    t[0] > l[2] && (l[2] = t[0]),
    t[1] < l[1] && (l[1] = t[1]),
    t[1] > l[3] && (l[3] = t[1]);
}
function Wy(l, t, i, s, r) {
  for (; i < s; i += r) PE(l, t[i], t[i + 1]);
  return l;
}
function PE(l, t, i) {
  (l[0] = Math.min(l[0], t)),
    (l[1] = Math.min(l[1], i)),
    (l[2] = Math.max(l[2], t)),
    (l[3] = Math.max(l[3], i));
}
function Qy(l, t) {
  let i;
  return (
    (i = t(Zu(l))),
    i || ((i = t(Ku(l))), i) || ((i = t(qu(l))), i) || ((i = t(sl(l))), i)
      ? i
      : !1
  );
}
function Kf(l) {
  let t = 0;
  return Ha(l) || (t = Ft(l) * Fe(l)), t;
}
function Zu(l) {
  return [l[0], l[1]];
}
function Ku(l) {
  return [l[2], l[1]];
}
function gs(l) {
  return [(l[0] + l[2]) / 2, (l[1] + l[3]) / 2];
}
function jE(l, t) {
  let i;
  if (t === "bottom-left") i = Zu(l);
  else if (t === "bottom-right") i = Ku(l);
  else if (t === "top-left") i = sl(l);
  else if (t === "top-right") i = qu(l);
  else throw new Error("Invalid corner");
  return i;
}
function qf(l, t, i, s, r) {
  const [o, c, h, d, _, m, y, v] = Jy(l, t, i, s);
  return Mn(
    Math.min(o, h, _, y),
    Math.min(c, d, m, v),
    Math.max(o, h, _, y),
    Math.max(c, d, m, v),
    r,
  );
}
function Jy(l, t, i, s) {
  const r = (t * s[0]) / 2,
    o = (t * s[1]) / 2,
    c = Math.cos(i),
    h = Math.sin(i),
    d = r * c,
    _ = r * h,
    m = o * c,
    y = o * h,
    v = l[0],
    S = l[1];
  return [
    v - d + y,
    S - _ - m,
    v - d - y,
    S - _ + m,
    v + d - y,
    S + _ + m,
    v + d + y,
    S + _ - m,
    v - d + y,
    S - _ - m,
  ];
}
function Fe(l) {
  return l[3] - l[1];
}
function Qs(l, t, i) {
  const s = i || Ti();
  return (
    je(l, t)
      ? (l[0] > t[0] ? (s[0] = l[0]) : (s[0] = t[0]),
        l[1] > t[1] ? (s[1] = l[1]) : (s[1] = t[1]),
        l[2] < t[2] ? (s[2] = l[2]) : (s[2] = t[2]),
        l[3] < t[3] ? (s[3] = l[3]) : (s[3] = t[3]))
      : mr(s),
    s
  );
}
function sl(l) {
  return [l[0], l[3]];
}
function qu(l) {
  return [l[2], l[3]];
}
function Ft(l) {
  return l[2] - l[0];
}
function je(l, t) {
  return l[0] <= t[2] && l[2] >= t[0] && l[1] <= t[3] && l[3] >= t[1];
}
function Ha(l) {
  return l[2] < l[0] || l[3] < l[1];
}
function ZE(l, t) {
  return t
    ? ((t[0] = l[0]), (t[1] = l[1]), (t[2] = l[2]), (t[3] = l[3]), t)
    : l;
}
function KE(l, t, i) {
  let s = !1;
  const r = Zf(l, t),
    o = Zf(l, i);
  if (r === ge.INTERSECTING || o === ge.INTERSECTING) s = !0;
  else {
    const c = l[0],
      h = l[1],
      d = l[2],
      _ = l[3],
      m = t[0],
      y = t[1],
      v = i[0],
      S = i[1],
      x = (S - y) / (v - m);
    let b, R;
    o & ge.ABOVE &&
      !(r & ge.ABOVE) &&
      ((b = v - (S - _) / x), (s = b >= c && b <= d)),
      !s &&
        o & ge.RIGHT &&
        !(r & ge.RIGHT) &&
        ((R = S - (v - d) * x), (s = R >= h && R <= _)),
      !s &&
        o & ge.BELOW &&
        !(r & ge.BELOW) &&
        ((b = v - (S - h) / x), (s = b >= c && b <= d)),
      !s &&
        o & ge.LEFT &&
        !(r & ge.LEFT) &&
        ((R = S - (v - c) * x), (s = R >= h && R <= _));
  }
  return s;
}
function qE(l, t, i, s) {
  if (Ha(l)) return mr(i);
  let r = [];
  (r = [l[0], l[1], l[2], l[1], l[2], l[3], l[0], l[3]]), t(r, r, 2);
  const o = [],
    c = [];
  for (let h = 0, d = r.length; h < d; h += 2) o.push(r[h]), c.push(r[h + 1]);
  return HE(o, c, i);
}
function $y(l, t) {
  const i = t.getExtent(),
    s = gs(l);
  if (t.canWrapX() && (s[0] < i[0] || s[0] >= i[2])) {
    const r = Ft(i),
      c = Math.floor((s[0] - i[0]) / r) * r;
    (l[0] -= c), (l[2] -= c);
  }
  return l;
}
function tp(l, t, i) {
  if (t.canWrapX()) {
    const s = t.getExtent();
    if (!isFinite(l[0]) || !isFinite(l[2])) return [[s[0], l[1], s[2], l[3]]];
    $y(l, t);
    const r = Ft(s);
    if (Ft(l) > r && !i) return [[s[0], l[1], s[2], l[3]]];
    if (l[0] < s[0])
      return [
        [l[0] + r, l[1], s[2], l[3]],
        [s[0], l[1], l[2], l[3]],
      ];
    if (l[2] > s[2])
      return [
        [l[0], l[1], s[2], l[3]],
        [s[0], l[1], l[2] - r, l[3]],
      ];
  }
  return [l];
}
function se(l, t, i) {
  return Math.min(Math.max(l, t), i);
}
function VE(l, t, i, s, r, o) {
  const c = r - i,
    h = o - s;
  if (c !== 0 || h !== 0) {
    const d = ((l - i) * c + (t - s) * h) / (c * c + h * h);
    d > 1 ? ((i = r), (s = o)) : d > 0 && ((i += c * d), (s += h * d));
  }
  return Js(l, t, i, s);
}
function Js(l, t, i, s) {
  const r = i - l,
    o = s - t;
  return r * r + o * o;
}
function WE(l) {
  const t = l.length;
  for (let s = 0; s < t; s++) {
    let r = s,
      o = Math.abs(l[s][s]);
    for (let h = s + 1; h < t; h++) {
      const d = Math.abs(l[h][s]);
      d > o && ((o = d), (r = h));
    }
    if (o === 0) return null;
    const c = l[r];
    (l[r] = l[s]), (l[s] = c);
    for (let h = s + 1; h < t; h++) {
      const d = -l[h][s] / l[s][s];
      for (let _ = s; _ < t + 1; _++)
        s == _ ? (l[h][_] = 0) : (l[h][_] += d * l[s][_]);
    }
  }
  const i = new Array(t);
  for (let s = t - 1; s >= 0; s--) {
    i[s] = l[s][t] / l[s][s];
    for (let r = s - 1; r >= 0; r--) l[r][t] -= l[r][s] * i[s];
  }
  return i;
}
function B0(l) {
  return (l * 180) / Math.PI;
}
function fs(l) {
  return (l * Math.PI) / 180;
}
function nr(l, t) {
  const i = l % t;
  return i * t < 0 ? i + t : i;
}
function ni(l, t, i) {
  return l + i * (t - l);
}
function md(l, t) {
  const i = Math.pow(10, t);
  return Math.round(l * i) / i;
}
function cu(l, t) {
  return Math.floor(md(l, t));
}
function hu(l, t) {
  return Math.ceil(md(l, t));
}
function Vf(l, t, i) {
  if (l >= t && l < i) return l;
  const s = i - t;
  return ((((l - t) % s) + s) % s) + t;
}
const QE = 63710088e-1;
function H0(l, t, i) {
  i = i || QE;
  const s = fs(l[1]),
    r = fs(t[1]),
    o = (r - s) / 2,
    c = fs(t[0] - l[0]) / 2,
    h =
      Math.sin(o) * Math.sin(o) +
      Math.sin(c) * Math.sin(c) * Math.cos(s) * Math.cos(r);
  return 2 * i * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}
function ep(...l) {
  console.warn(...l);
}
function JE(l, t) {
  return (l[0] += +t[0]), (l[1] += +t[1]), l;
}
function Cu(l, t) {
  let i = !0;
  for (let s = l.length - 1; s >= 0; --s)
    if (l[s] != t[s]) {
      i = !1;
      break;
    }
  return i;
}
function yd(l, t) {
  const i = Math.cos(t),
    s = Math.sin(t),
    r = l[0] * i - l[1] * s,
    o = l[1] * i + l[0] * s;
  return (l[0] = r), (l[1] = o), l;
}
function $E(l, t) {
  return (l[0] *= t), (l[1] *= t), l;
}
function ip(l, t) {
  if (t.canWrapX()) {
    const i = Ft(t.getExtent()),
      s = tS(l, t, i);
    s && (l[0] -= s * i);
  }
  return l;
}
function tS(l, t, i) {
  const s = t.getExtent();
  let r = 0;
  return (
    t.canWrapX() &&
      (l[0] < s[0] || l[0] > s[2]) &&
      ((i = i || Ft(s)), (r = Math.floor((l[0] - s[0]) / i))),
    r
  );
}
const pd = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937,
};
class vd {
  constructor(t) {
    (this.code_ = t.code),
      (this.units_ = t.units),
      (this.extent_ = t.extent !== void 0 ? t.extent : null),
      (this.worldExtent_ = t.worldExtent !== void 0 ? t.worldExtent : null),
      (this.axisOrientation_ =
        t.axisOrientation !== void 0 ? t.axisOrientation : "enu"),
      (this.global_ = t.global !== void 0 ? t.global : !1),
      (this.canWrapX_ = !!(this.global_ && this.extent_)),
      (this.getPointResolutionFunc_ = t.getPointResolution),
      (this.defaultTileGrid_ = null),
      (this.metersPerUnit_ = t.metersPerUnit);
  }
  canWrapX() {
    return this.canWrapX_;
  }
  getCode() {
    return this.code_;
  }
  getExtent() {
    return this.extent_;
  }
  getUnits() {
    return this.units_;
  }
  getMetersPerUnit() {
    return this.metersPerUnit_ || pd[this.units_];
  }
  getWorldExtent() {
    return this.worldExtent_;
  }
  getAxisOrientation() {
    return this.axisOrientation_;
  }
  isGlobal() {
    return this.global_;
  }
  setGlobal(t) {
    (this.global_ = t), (this.canWrapX_ = !!(t && this.extent_));
  }
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }
  setDefaultTileGrid(t) {
    this.defaultTileGrid_ = t;
  }
  setExtent(t) {
    (this.extent_ = t), (this.canWrapX_ = !!(this.global_ && t));
  }
  setWorldExtent(t) {
    this.worldExtent_ = t;
  }
  setGetPointResolution(t) {
    this.getPointResolutionFunc_ = t;
  }
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}
const Pa = 6378137,
  er = Math.PI * Pa,
  eS = [-er, -er, er, er],
  iS = [-180, -85, 180, 85],
  fu = Pa * Math.log(Math.tan(Math.PI / 2));
class Pl extends vd {
  constructor(t) {
    super({
      code: t,
      units: "m",
      extent: eS,
      global: !0,
      worldExtent: iS,
      getPointResolution: function (i, s) {
        return i / Math.cosh(s[1] / Pa);
      },
    });
  }
}
const P0 = [
  new Pl("EPSG:3857"),
  new Pl("EPSG:102100"),
  new Pl("EPSG:102113"),
  new Pl("EPSG:900913"),
  new Pl("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new Pl("http://www.opengis.net/gml/srs/epsg.xml#3857"),
];
function nS(l, t, i, s) {
  const r = l.length;
  (i = i > 1 ? i : 2),
    (s = s ?? i),
    t === void 0 && (i > 2 ? (t = l.slice()) : (t = new Array(r)));
  for (let o = 0; o < r; o += s) {
    t[o] = (er * l[o]) / 180;
    let c = Pa * Math.log(Math.tan((Math.PI * (+l[o + 1] + 90)) / 360));
    c > fu ? (c = fu) : c < -fu && (c = -fu), (t[o + 1] = c);
  }
  return t;
}
function sS(l, t, i, s) {
  const r = l.length;
  (i = i > 1 ? i : 2),
    (s = s ?? i),
    t === void 0 && (i > 2 ? (t = l.slice()) : (t = new Array(r)));
  for (let o = 0; o < r; o += s)
    (t[o] = (180 * l[o]) / er),
      (t[o + 1] = (360 * Math.atan(Math.exp(l[o + 1] / Pa))) / Math.PI - 90);
  return t;
}
const lS = 6378137,
  j0 = [-180, -90, 180, 90],
  rS = (Math.PI * lS) / 180;
class Ps extends vd {
  constructor(t, i) {
    super({
      code: t,
      units: "degrees",
      extent: j0,
      axisOrientation: i,
      global: !0,
      metersPerUnit: rS,
      worldExtent: j0,
    });
  }
}
const Z0 = [
  new Ps("CRS:84"),
  new Ps("EPSG:4326", "neu"),
  new Ps("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new Ps("urn:ogc:def:crs:OGC:2:84"),
  new Ps("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new Ps("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new Ps("http://www.opengis.net/def/crs/EPSG/0/4326", "neu"),
];
let Wf = {};
function aS(l) {
  return (
    Wf[l] ||
    Wf[l.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] ||
    null
  );
}
function oS(l, t) {
  Wf[l] = t;
}
let sr = {};
function Da(l, t, i) {
  const s = l.getCode(),
    r = t.getCode();
  s in sr || (sr[s] = {}), (sr[s][r] = i);
}
function Cf(l, t) {
  return l in sr && t in sr[l] ? sr[l][t] : null;
}
const Ru = 0.9996,
  xi = 0.00669438,
  Vu = xi * xi,
  Wu = Vu * xi,
  Ks = xi / (1 - xi),
  K0 = Math.sqrt(1 - xi),
  cr = (1 - K0) / (1 + K0),
  np = cr * cr,
  Ed = np * cr,
  Sd = Ed * cr,
  sp = Sd * cr,
  lp = 1 - xi / 4 - (3 * Vu) / 64 - (5 * Wu) / 256,
  uS = (3 * xi) / 8 + (3 * Vu) / 32 + (45 * Wu) / 1024,
  cS = (15 * Vu) / 256 + (45 * Wu) / 1024,
  hS = (35 * Wu) / 3072,
  fS = (3 / 2) * cr - (27 / 32) * Ed + (269 / 512) * sp,
  dS = (21 / 16) * np - (55 / 32) * Sd,
  gS = (151 / 96) * Ed - (417 / 128) * sp,
  _S = (1097 / 512) * Sd,
  bu = 6378137;
function mS(l, t, i) {
  const s = l - 5e5,
    c = (i.north ? t : t - 1e7) / Ru / (bu * lp),
    h =
      c +
      fS * Math.sin(2 * c) +
      dS * Math.sin(4 * c) +
      gS * Math.sin(6 * c) +
      _S * Math.sin(8 * c),
    d = Math.sin(h),
    _ = d * d,
    m = Math.cos(h),
    y = d / m,
    v = y * y,
    S = v * v,
    x = 1 - xi * _,
    b = Math.sqrt(1 - xi * _),
    R = bu / b,
    A = (1 - xi) / x,
    O = Ks * m ** 2,
    G = O * O,
    z = s / (R * Ru),
    D = z * z,
    j = D * z,
    Q = j * z,
    Z = Q * z,
    F = Z * z,
    V =
      h -
      (y / A) * (D / 2 - (Q / 24) * (5 + 3 * v + 10 * O - 4 * G - 9 * Ks)) +
      (F / 720) * (61 + 90 * v + 298 * O + 45 * S - 252 * Ks - 3 * G);
  let lt =
    (z -
      (j / 6) * (1 + 2 * v + O) +
      (Z / 120) * (5 - 2 * O + 28 * v - 3 * G + 8 * Ks + 24 * S)) /
    m;
  return (lt = Vf(lt + fs(rp(i.number)), -Math.PI, Math.PI)), [B0(lt), B0(V)];
}
const q0 = -80,
  V0 = 84,
  yS = -180,
  pS = 180;
function vS(l, t, i) {
  (l = Vf(l, yS, pS)), t < q0 ? (t = q0) : t > V0 && (t = V0);
  const s = fs(t),
    r = Math.sin(s),
    o = Math.cos(s),
    c = r / o,
    h = c * c,
    d = h * h,
    _ = fs(l),
    m = rp(i.number),
    y = fs(m),
    v = bu / Math.sqrt(1 - xi * r ** 2),
    S = Ks * o ** 2,
    x = o * Vf(_ - y, -Math.PI, Math.PI),
    b = x * x,
    R = b * x,
    A = R * x,
    O = A * x,
    G = O * x,
    z =
      bu *
      (lp * s -
        uS * Math.sin(2 * s) +
        cS * Math.sin(4 * s) -
        hS * Math.sin(6 * s)),
    D =
      Ru *
        v *
        (x +
          (R / 6) * (1 - h + S) +
          (O / 120) * (5 - 18 * h + d + 72 * S - 58 * Ks)) +
      5e5;
  let j =
    Ru *
    (z +
      v *
        c *
        (b / 2 +
          (A / 24) * (5 - h + 9 * S + 4 * S ** 2) +
          (G / 720) * (61 - 58 * h + d + 600 * S - 330 * Ks)));
  return i.north || (j += 1e7), [D, j];
}
function rp(l) {
  return (l - 1) * 6 - 180 + 3;
}
const ES = [
  /^EPSG:(\d+)$/,
  /^urn:ogc:def:crs:EPSG::(\d+)$/,
  /^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/,
];
function ap(l) {
  let t = 0;
  for (const r of ES) {
    const o = l.match(r);
    if (o) {
      t = parseInt(o[1]);
      break;
    }
  }
  if (!t) return null;
  let i = 0,
    s = !1;
  return (
    t > 32700 && t < 32761
      ? (i = t - 32700)
      : t > 32600 && t < 32661 && ((s = !0), (i = t - 32600)),
    i ? { number: i, north: s } : null
  );
}
function W0(l, t) {
  return function (i, s, r, o) {
    const c = i.length;
    (r = r > 1 ? r : 2),
      (o = o ?? r),
      s || (r > 2 ? (s = i.slice()) : (s = new Array(c)));
    for (let h = 0; h < c; h += o) {
      const d = i[h],
        _ = i[h + 1],
        m = l(d, _, t);
      (s[h] = m[0]), (s[h + 1] = m[1]);
    }
    return s;
  };
}
function SS(l) {
  return ap(l) ? new vd({ code: l, units: "m" }) : null;
}
function xS(l) {
  const t = ap(l.getCode());
  return t ? { forward: W0(vS, t), inverse: W0(mS, t) } : null;
}
const TS = [xS],
  CS = [SS];
let Qf = !0;
function RS(l) {
  Qf = !1;
}
function xd(l, t) {
  if (t !== void 0) {
    for (let i = 0, s = l.length; i < s; ++i) t[i] = l[i];
    t = t;
  } else t = l.slice();
  return t;
}
function Jf(l) {
  oS(l.getCode(), l), Da(l, l, xd);
}
function bS(l) {
  l.forEach(Jf);
}
function Kt(l) {
  if (typeof l != "string") return l;
  const t = aS(l);
  if (t) return t;
  for (const i of CS) {
    const s = i(l);
    if (s) return s;
  }
  return null;
}
function Q0(l, t, i, s) {
  l = Kt(l);
  let r;
  const o = l.getPointResolutionFunc();
  if (o) r = o(t, i);
  else {
    const c = l.getUnits();
    if (c == "degrees" || s == "degrees") r = t;
    else {
      const h = ja(l, Kt("EPSG:4326"));
      if (!h && c !== "degrees") r = t * l.getMetersPerUnit();
      else {
        let _ = [
          i[0] - t / 2,
          i[1],
          i[0] + t / 2,
          i[1],
          i[0],
          i[1] - t / 2,
          i[0],
          i[1] + t / 2,
        ];
        _ = h(_, _, 2);
        const m = H0(_.slice(0, 2), _.slice(2, 4)),
          y = H0(_.slice(4, 6), _.slice(6, 8));
        r = (m + y) / 2;
      }
      const d = l.getMetersPerUnit();
      d !== void 0 && (r /= d);
    }
  }
  return r;
}
function J0(l) {
  bS(l),
    l.forEach(function (t) {
      l.forEach(function (i) {
        t !== i && Da(t, i, xd);
      });
    });
}
function AS(l, t, i, s) {
  l.forEach(function (r) {
    t.forEach(function (o) {
      Da(r, o, i), Da(o, r, s);
    });
  });
}
function Td(l, t) {
  return l ? (typeof l == "string" ? Kt(l) : l) : Kt(t);
}
function wS(l) {
  return function (t, i, s, r) {
    const o = t.length;
    (s = s !== void 0 ? s : 2),
      (r = r ?? s),
      (i = i !== void 0 ? i : new Array(o));
    for (let c = 0; c < o; c += r) {
      const h = l(t.slice(c, c + s)),
        d = h.length;
      for (let _ = 0, m = r; _ < m; ++_) i[c + _] = _ >= d ? t[c + _] : h[_];
    }
    return i;
  };
}
function xu(l, t) {
  if (l === t) return !0;
  const i = l.getUnits() === t.getUnits();
  return (l.getCode() === t.getCode() || ja(l, t) === xd) && i;
}
function ja(l, t) {
  const i = l.getCode(),
    s = t.getCode();
  let r = Cf(i, s);
  if (r) return r;
  let o = null,
    c = null;
  for (const d of TS) o || (o = d(l)), c || (c = d(t));
  if (!o && !c) return null;
  const h = "EPSG:4326";
  if (c)
    if (o) r = Rf(o.inverse, c.forward);
    else {
      const d = Cf(i, h);
      d && (r = Rf(d, c.forward));
    }
  else {
    const d = Cf(h, s);
    d && (r = Rf(o.inverse, d));
  }
  return r && (Jf(l), Jf(t), Da(l, t, r)), r;
}
function Rf(l, t) {
  return function (i, s, r, o) {
    return (s = l(i, s, r, o)), t(s, s, r, o);
  };
}
function hr(l, t) {
  const i = Kt(l),
    s = Kt(t);
  return ja(i, s);
}
function Qu(l, t, i) {
  const s = hr(t, i);
  if (!s) {
    const r = Kt(t).getCode(),
      o = Kt(i).getCode();
    throw new Error(`No transform available between ${r} and ${o}`);
  }
  return s(l, void 0, l.length);
}
function op(l, t, i, s) {
  const r = hr(t, i);
  return qE(l, r, void 0);
}
let Ci = null;
function MS(l) {
  Ci = Kt(l);
}
function Au() {
  return Ci;
}
function OS() {
  MS("EPSG:4326");
}
function $f(l, t) {
  return Ci ? Qu(l, t, Ci) : l;
}
function Tn(l, t) {
  return Ci
    ? Qu(l, Ci, t)
    : (Qf &&
        !Cu(l, [0, 0]) &&
        l[0] >= -180 &&
        l[0] <= 180 &&
        l[1] >= -90 &&
        l[1] <= 90 &&
        ((Qf = !1),
        ep(
          "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.",
        )),
      l);
}
function wu(l, t) {
  return Ci ? op(l, t, Ci) : l;
}
function us(l, t) {
  return Ci ? op(l, Ci, t) : l;
}
function DS(l, t) {
  if (!Ci) return l;
  const i = Kt(t).getMetersPerUnit(),
    s = Ci.getMetersPerUnit();
  return i && s ? (l * i) / s : l;
}
function LS() {
  J0(P0), J0(Z0), AS(Z0, P0, nS, sS);
}
LS();
new Array(6);
function Ni() {
  return [1, 0, 0, 1, 0, 0];
}
function zS(l, t) {
  return (
    (l[0] = t[0]),
    (l[1] = t[1]),
    (l[2] = t[2]),
    (l[3] = t[3]),
    (l[4] = t[4]),
    (l[5] = t[5]),
    l
  );
}
function _e(l, t) {
  const i = t[0],
    s = t[1];
  return (
    (t[0] = l[0] * i + l[2] * s + l[4]), (t[1] = l[1] * i + l[3] * s + l[5]), t
  );
}
function On(l, t, i, s, r, o, c, h) {
  const d = Math.sin(o),
    _ = Math.cos(o);
  return (
    (l[0] = s * _),
    (l[1] = r * d),
    (l[2] = -s * d),
    (l[3] = r * _),
    (l[4] = c * s * _ - h * s * d + t),
    (l[5] = c * r * d + h * r * _ + i),
    l
  );
}
function up(l, t) {
  const i = IS(t);
  Lt(i !== 0, "Transformation matrix cannot be inverted");
  const s = t[0],
    r = t[1],
    o = t[2],
    c = t[3],
    h = t[4],
    d = t[5];
  return (
    (l[0] = c / i),
    (l[1] = -r / i),
    (l[2] = -o / i),
    (l[3] = s / i),
    (l[4] = (o * d - c * h) / i),
    (l[5] = -(s * d - r * h) / i),
    l
  );
}
function IS(l) {
  return l[0] * l[3] - l[1] * l[2];
}
const $0 = [1e6, 1e6, 1e6, 1e6, 2, 2];
function NS(l) {
  return (
    "matrix(" + l.map((i, s) => Math.round(i * $0[s]) / $0[s]).join(", ") + ")"
  );
}
function ds(l, t, i, s, r, o, c) {
  (o = o || []), (c = c || 2);
  let h = 0;
  for (let d = t; d < i; d += s) {
    const _ = l[d],
      m = l[d + 1];
    (o[h++] = r[0] * _ + r[2] * m + r[4]),
      (o[h++] = r[1] * _ + r[3] * m + r[5]);
    for (let y = 2; y < c; y++) o[h++] = l[d + y];
  }
  return o && o.length != h && (o.length = h), o;
}
function cp(l, t, i, s, r, o, c) {
  c = c || [];
  const h = Math.cos(r),
    d = Math.sin(r),
    _ = o[0],
    m = o[1];
  let y = 0;
  for (let v = t; v < i; v += s) {
    const S = l[v] - _,
      x = l[v + 1] - m;
    (c[y++] = _ + S * h - x * d), (c[y++] = m + S * d + x * h);
    for (let b = v + 2; b < v + s; ++b) c[y++] = l[b];
  }
  return c && c.length != y && (c.length = y), c;
}
function GS(l, t, i, s, r, o, c, h) {
  h = h || [];
  const d = c[0],
    _ = c[1];
  let m = 0;
  for (let y = t; y < i; y += s) {
    const v = l[y] - d,
      S = l[y + 1] - _;
    (h[m++] = d + r * v), (h[m++] = _ + o * S);
    for (let x = y + 2; x < y + s; ++x) h[m++] = l[x];
  }
  return h && h.length != m && (h.length = m), h;
}
function FS(l, t, i, s, r, o, c) {
  c = c || [];
  let h = 0;
  for (let d = t; d < i; d += s) {
    (c[h++] = l[d] + r), (c[h++] = l[d + 1] + o);
    for (let _ = d + 2; _ < d + s; ++_) c[h++] = l[_];
  }
  return c && c.length != h && (c.length = h), c;
}
const ty = Ni(),
  US = [NaN, NaN];
class hp extends $i {
  constructor() {
    super(),
      (this.extent_ = Ti()),
      (this.extentRevision_ = -1),
      (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
      (this.simplifiedGeometryRevision = 0),
      (this.simplifyTransformedInternal = Zy((t, i, s) => {
        if (!s) return this.getSimplifiedGeometry(i);
        const r = this.clone();
        return r.applyTransform(s), r.getSimplifiedGeometry(i);
      }));
  }
  simplifyTransformed(t, i) {
    return this.simplifyTransformedInternal(this.getRevision(), t, i);
  }
  clone() {
    return _t();
  }
  closestPointXY(t, i, s, r) {
    return _t();
  }
  containsXY(t, i) {
    return this.closestPointXY(t, i, US, Number.MIN_VALUE) === 0;
  }
  getClosestPoint(t, i) {
    return (i = i || [NaN, NaN]), this.closestPointXY(t[0], t[1], i, 1 / 0), i;
  }
  intersectsCoordinate(t) {
    return this.containsXY(t[0], t[1]);
  }
  computeExtent(t) {
    return _t();
  }
  getExtent(t) {
    if (this.extentRevision_ != this.getRevision()) {
      const i = this.computeExtent(this.extent_);
      (isNaN(i[0]) || isNaN(i[1])) && mr(i),
        (this.extentRevision_ = this.getRevision());
    }
    return ZE(this.extent_, t);
  }
  rotate(t, i) {
    _t();
  }
  scale(t, i, s) {
    _t();
  }
  simplify(t) {
    return this.getSimplifiedGeometry(t * t);
  }
  getSimplifiedGeometry(t) {
    return _t();
  }
  getType() {
    return _t();
  }
  applyTransform(t) {
    _t();
  }
  intersectsExtent(t) {
    return _t();
  }
  translate(t, i) {
    _t();
  }
  transform(t, i) {
    const s = Kt(t),
      r =
        s.getUnits() == "tile-pixels"
          ? function (o, c, h) {
              const d = s.getExtent(),
                _ = s.getWorldExtent(),
                m = Fe(_) / Fe(d);
              On(ty, _[0], _[3], m, -m, 0, 0, 0);
              const y = ds(o, 0, o.length, h, ty, c),
                v = hr(s, i);
              return v ? v(y, y, h) : y;
            }
          : hr(s, i);
    return this.applyTransform(r), this;
  }
}
class ll extends hp {
  constructor() {
    super(), (this.layout = "XY"), (this.stride = 2), this.flatCoordinates;
  }
  computeExtent(t) {
    return _d(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
    );
  }
  getCoordinates() {
    return _t();
  }
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  getFlatCoordinates() {
    return this.flatCoordinates;
  }
  getLastCoordinate() {
    return this.flatCoordinates.slice(
      this.flatCoordinates.length - this.stride,
    );
  }
  getLayout() {
    return this.layout;
  }
  getSimplifiedGeometry(t) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      t < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          t <= this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this;
    const i = this.getSimplifiedGeometryInternal(t);
    return i.getFlatCoordinates().length < this.flatCoordinates.length
      ? i
      : ((this.simplifiedGeometryMaxMinSquaredTolerance = t), this);
  }
  getSimplifiedGeometryInternal(t) {
    return this;
  }
  getStride() {
    return this.stride;
  }
  setFlatCoordinates(t, i) {
    (this.stride = ey(t)), (this.layout = t), (this.flatCoordinates = i);
  }
  setCoordinates(t, i) {
    _t();
  }
  setLayout(t, i, s) {
    let r;
    if (t) r = ey(t);
    else {
      for (let o = 0; o < s; ++o) {
        if (i.length === 0) {
          (this.layout = "XY"), (this.stride = 2);
          return;
        }
        i = i[0];
      }
      (r = i.length), (t = rl(r));
    }
    (this.layout = t), (this.stride = r);
  }
  applyTransform(t) {
    this.flatCoordinates &&
      (t(
        this.flatCoordinates,
        this.flatCoordinates,
        this.layout.startsWith("XYZ") ? 3 : 2,
        this.stride,
      ),
      this.changed());
  }
  rotate(t, i) {
    const s = this.getFlatCoordinates();
    if (s) {
      const r = this.getStride();
      cp(s, 0, s.length, r, t, i, s), this.changed();
    }
  }
  scale(t, i, s) {
    i === void 0 && (i = t), s || (s = gs(this.getExtent()));
    const r = this.getFlatCoordinates();
    if (r) {
      const o = this.getStride();
      GS(r, 0, r.length, o, t, i, s, r), this.changed();
    }
  }
  translate(t, i) {
    const s = this.getFlatCoordinates();
    if (s) {
      const r = this.getStride();
      FS(s, 0, s.length, r, t, i, s), this.changed();
    }
  }
}
function rl(l) {
  let t;
  return l == 2 ? (t = "XY") : l == 3 ? (t = "XYZ") : l == 4 && (t = "XYZM"), t;
}
function ey(l) {
  let t;
  return (
    l == "XY"
      ? (t = 2)
      : l == "XYZ" || l == "XYM"
        ? (t = 3)
        : l == "XYZM" && (t = 4),
    t
  );
}
function XS(l, t, i) {
  const s = l.getFlatCoordinates();
  if (!s) return null;
  const r = l.getStride();
  return ds(s, 0, s.length, r, t, i);
}
function fp(l, t, i, s) {
  let r = 0;
  const o = l[i - s],
    c = l[i - s + 1];
  let h = 0,
    d = 0;
  for (; t < i; t += s) {
    const _ = l[t] - o,
      m = l[t + 1] - c;
    (r += d * _ - h * m), (h = _), (d = m);
  }
  return r / 2;
}
function dp(l, t, i, s) {
  let r = 0;
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    (r += fp(l, t, h, s)), (t = h);
  }
  return r;
}
function YS(l, t, i, s) {
  let r = 0;
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    (r += dp(l, t, h, s)), (t = h[h.length - 1]);
  }
  return r;
}
function iy(l, t, i, s, r, o, c) {
  const h = l[t],
    d = l[t + 1],
    _ = l[i] - h,
    m = l[i + 1] - d;
  let y;
  if (_ === 0 && m === 0) y = t;
  else {
    const v = ((r - h) * _ + (o - d) * m) / (_ * _ + m * m);
    if (v > 1) y = i;
    else if (v > 0) {
      for (let S = 0; S < s; ++S) c[S] = ni(l[t + S], l[i + S], v);
      c.length = s;
      return;
    } else y = t;
  }
  for (let v = 0; v < s; ++v) c[v] = l[y + v];
  c.length = s;
}
function Cd(l, t, i, s, r) {
  let o = l[t],
    c = l[t + 1];
  for (t += s; t < i; t += s) {
    const h = l[t],
      d = l[t + 1],
      _ = Js(o, c, h, d);
    _ > r && (r = _), (o = h), (c = d);
  }
  return r;
}
function Rd(l, t, i, s, r) {
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    (r = Cd(l, t, h, s, r)), (t = h);
  }
  return r;
}
function kS(l, t, i, s, r) {
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    (r = Rd(l, t, h, s, r)), (t = h[h.length - 1]);
  }
  return r;
}
function bd(l, t, i, s, r, o, c, h, d, _, m) {
  if (t == i) return _;
  let y, v;
  if (r === 0) {
    if (((v = Js(c, h, l[t], l[t + 1])), v < _)) {
      for (y = 0; y < s; ++y) d[y] = l[t + y];
      return (d.length = s), v;
    }
    return _;
  }
  m = m || [NaN, NaN];
  let S = t + s;
  for (; S < i; )
    if ((iy(l, S - s, S, s, c, h, m), (v = Js(c, h, m[0], m[1])), v < _)) {
      for (_ = v, y = 0; y < s; ++y) d[y] = m[y];
      (d.length = s), (S += s);
    } else S += s * Math.max(((Math.sqrt(v) - Math.sqrt(_)) / r) | 0, 1);
  if (o && (iy(l, i - s, t, s, c, h, m), (v = Js(c, h, m[0], m[1])), v < _)) {
    for (_ = v, y = 0; y < s; ++y) d[y] = m[y];
    d.length = s;
  }
  return _;
}
function Ad(l, t, i, s, r, o, c, h, d, _, m) {
  m = m || [NaN, NaN];
  for (let y = 0, v = i.length; y < v; ++y) {
    const S = i[y];
    (_ = bd(l, t, S, s, r, o, c, h, d, _, m)), (t = S);
  }
  return _;
}
function BS(l, t, i, s, r, o, c, h, d, _, m) {
  m = m || [NaN, NaN];
  for (let y = 0, v = i.length; y < v; ++y) {
    const S = i[y];
    (_ = Ad(l, t, S, s, r, o, c, h, d, _, m)), (t = S[S.length - 1]);
  }
  return _;
}
function HS(l, t, i, s) {
  for (let r = 0, o = i.length; r < o; ++r) l[t++] = i[r];
  return t;
}
function Ju(l, t, i, s) {
  for (let r = 0, o = i.length; r < o; ++r) {
    const c = i[r];
    for (let h = 0; h < s; ++h) l[t++] = c[h];
  }
  return t;
}
function Za(l, t, i, s, r) {
  r = r || [];
  let o = 0;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = Ju(l, t, i[c], s);
    (r[o++] = d), (t = d);
  }
  return (r.length = o), r;
}
function gp(l, t, i, s, r) {
  r = r || [];
  let o = 0;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = Za(l, t, i[c], s, r[o]);
    d.length === 0 && (d[0] = t), (r[o++] = d), (t = d[d.length - 1]);
  }
  return (r.length = o), r;
}
function cs(l, t, i, s, r) {
  r = r !== void 0 ? r : [];
  let o = 0;
  for (let c = t; c < i; c += s) r[o++] = l.slice(c, c + s);
  return (r.length = o), r;
}
function La(l, t, i, s, r) {
  r = r !== void 0 ? r : [];
  let o = 0;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    (r[o++] = cs(l, t, d, s, r[o])), (t = d);
  }
  return (r.length = o), r;
}
function td(l, t, i, s, r) {
  r = r !== void 0 ? r : [];
  let o = 0;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    (r[o++] = d.length === 1 && d[0] === t ? [] : La(l, t, d, s, r[o])),
      (t = d[d.length - 1]);
  }
  return (r.length = o), r;
}
function $u(l, t, i, s, r, o, c) {
  const h = (i - t) / s;
  if (h < 3) {
    for (; t < i; t += s) (o[c++] = l[t]), (o[c++] = l[t + 1]);
    return c;
  }
  const d = new Array(h);
  (d[0] = 1), (d[h - 1] = 1);
  const _ = [t, i - s];
  let m = 0;
  for (; _.length > 0; ) {
    const y = _.pop(),
      v = _.pop();
    let S = 0;
    const x = l[v],
      b = l[v + 1],
      R = l[y],
      A = l[y + 1];
    for (let O = v + s; O < y; O += s) {
      const G = l[O],
        z = l[O + 1],
        D = VE(G, z, x, b, R, A);
      D > S && ((m = O), (S = D));
    }
    S > r &&
      ((d[(m - t) / s] = 1),
      v + s < m && _.push(v, m),
      m + s < y && _.push(m, y));
  }
  for (let y = 0; y < h; ++y)
    d[y] && ((o[c++] = l[t + y * s]), (o[c++] = l[t + y * s + 1]));
  return c;
}
function _p(l, t, i, s, r, o, c, h) {
  for (let d = 0, _ = i.length; d < _; ++d) {
    const m = i[d];
    (c = $u(l, t, m, s, r, o, c)), h.push(c), (t = m);
  }
  return c;
}
function Zs(l, t) {
  return t * Math.round(l / t);
}
function PS(l, t, i, s, r, o, c) {
  if (t == i) return c;
  let h = Zs(l[t], r),
    d = Zs(l[t + 1], r);
  (t += s), (o[c++] = h), (o[c++] = d);
  let _, m;
  do
    if (((_ = Zs(l[t], r)), (m = Zs(l[t + 1], r)), (t += s), t == i))
      return (o[c++] = _), (o[c++] = m), c;
  while (_ == h && m == d);
  for (; t < i; ) {
    const y = Zs(l[t], r),
      v = Zs(l[t + 1], r);
    if (((t += s), y == _ && v == m)) continue;
    const S = _ - h,
      x = m - d,
      b = y - h,
      R = v - d;
    if (
      S * R == x * b &&
      ((S < 0 && b < S) || S == b || (S > 0 && b > S)) &&
      ((x < 0 && R < x) || x == R || (x > 0 && R > x))
    ) {
      (_ = y), (m = v);
      continue;
    }
    (o[c++] = _), (o[c++] = m), (h = _), (d = m), (_ = y), (m = v);
  }
  return (o[c++] = _), (o[c++] = m), c;
}
function wd(l, t, i, s, r, o, c, h) {
  for (let d = 0, _ = i.length; d < _; ++d) {
    const m = i[d];
    (c = PS(l, t, m, s, r, o, c)), h.push(c), (t = m);
  }
  return c;
}
function jS(l, t, i, s, r, o, c, h) {
  for (let d = 0, _ = i.length; d < _; ++d) {
    const m = i[d],
      y = [];
    (c = wd(l, t, m, s, r, o, c, y)), h.push(y), (t = m[m.length - 1]);
  }
  return c;
}
class za extends ll {
  constructor(t, i) {
    super(),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      i !== void 0 && !Array.isArray(t[0])
        ? this.setFlatCoordinates(i, t)
        : this.setCoordinates(t, i);
  }
  clone() {
    return new za(this.flatCoordinates.slice(), this.layout);
  }
  closestPointXY(t, i, s, r) {
    return r < nl(this.getExtent(), t, i)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Cd(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0,
            ),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        bd(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          !0,
          t,
          i,
          s,
          r,
        ));
  }
  getArea() {
    return fp(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getCoordinates() {
    return cs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getSimplifiedGeometryInternal(t) {
    const i = [];
    return (
      (i.length = $u(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        t,
        i,
        0,
      )),
      new za(i, "XY")
    );
  }
  getType() {
    return "LinearRing";
  }
  intersectsExtent(t) {
    return !1;
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = Ju(
        this.flatCoordinates,
        0,
        t,
        this.stride,
      )),
      this.changed();
  }
}
class el extends ll {
  constructor(t, i) {
    super(), this.setCoordinates(t, i);
  }
  clone() {
    const t = new el(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, r) {
    const o = this.flatCoordinates,
      c = Js(t, i, o[0], o[1]);
    if (c < r) {
      const h = this.stride;
      for (let d = 0; d < h; ++d) s[d] = o[d];
      return (s.length = h), c;
    }
    return r;
  }
  getCoordinates() {
    return this.flatCoordinates.slice();
  }
  computeExtent(t) {
    return qy(this.flatCoordinates, t);
  }
  getType() {
    return "Point";
  }
  intersectsExtent(t) {
    return gd(t, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 0),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = HS(
        this.flatCoordinates,
        0,
        t,
        this.stride,
      )),
      this.changed();
  }
}
function ZS(l, t, i, s, r) {
  return !Qy(r, function (c) {
    return !qs(l, t, i, s, c[0], c[1]);
  });
}
function qs(l, t, i, s, r, o) {
  let c = 0,
    h = l[i - s],
    d = l[i - s + 1];
  for (; t < i; t += s) {
    const _ = l[t],
      m = l[t + 1];
    d <= o
      ? m > o && (_ - h) * (o - d) - (r - h) * (m - d) > 0 && c++
      : m <= o && (_ - h) * (o - d) - (r - h) * (m - d) < 0 && c--,
      (h = _),
      (d = m);
  }
  return c !== 0;
}
function Md(l, t, i, s, r, o) {
  if (i.length === 0 || !qs(l, t, i[0], s, r, o)) return !1;
  for (let c = 1, h = i.length; c < h; ++c)
    if (qs(l, i[c - 1], i[c], s, r, o)) return !1;
  return !0;
}
function KS(l, t, i, s, r, o) {
  if (i.length === 0) return !1;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    if (Md(l, t, d, s, r, o)) return !0;
    t = d[d.length - 1];
  }
  return !1;
}
function Od(l, t, i, s, r, o, c) {
  let h, d, _, m, y, v, S;
  const x = r[o + 1],
    b = [];
  for (let O = 0, G = i.length; O < G; ++O) {
    const z = i[O];
    for (m = l[z - s], v = l[z - s + 1], h = t; h < z; h += s)
      (y = l[h]),
        (S = l[h + 1]),
        ((x <= v && S <= x) || (v <= x && x <= S)) &&
          ((_ = ((x - v) / (S - v)) * (y - m) + m), b.push(_)),
        (m = y),
        (v = S);
  }
  let R = NaN,
    A = -1 / 0;
  for (b.sort(bn), m = b[0], h = 1, d = b.length; h < d; ++h) {
    y = b[h];
    const O = Math.abs(y - m);
    O > A && ((_ = (m + y) / 2), Md(l, t, i, s, _, x) && ((R = _), (A = O))),
      (m = y);
  }
  return isNaN(R) && (R = r[o]), c ? (c.push(R, x, A), c) : [R, x, A];
}
function mp(l, t, i, s, r) {
  let o = [];
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    (o = Od(l, t, d, s, r, 2 * c, o)), (t = d[d.length - 1]);
  }
  return o;
}
function yp(l, t, i, s, r) {
  let o;
  for (t += s; t < i; t += s)
    if (((o = r(l.slice(t - s, t), l.slice(t, t + s))), o)) return o;
  return !1;
}
function tc(l, t, i, s, r, o) {
  return (
    (o = o ?? Wy(Ti(), l, t, i, s)),
    je(r, o)
      ? (o[0] >= r[0] && o[2] <= r[2]) || (o[1] >= r[1] && o[3] <= r[3])
        ? !0
        : yp(l, t, i, s, function (c, h) {
            return KE(r, c, h);
          })
      : !1
  );
}
function qS(l, t, i, s, r) {
  for (let o = 0, c = i.length; o < c; ++o) {
    if (tc(l, t, i[o], s, r)) return !0;
    t = i[o];
  }
  return !1;
}
function pp(l, t, i, s, r) {
  return !!(
    tc(l, t, i, s, r) ||
    qs(l, t, i, s, r[0], r[1]) ||
    qs(l, t, i, s, r[0], r[3]) ||
    qs(l, t, i, s, r[2], r[1]) ||
    qs(l, t, i, s, r[2], r[3])
  );
}
function vp(l, t, i, s, r) {
  if (!pp(l, t, i[0], s, r)) return !1;
  if (i.length === 1) return !0;
  for (let o = 1, c = i.length; o < c; ++o)
    if (ZS(l, i[o - 1], i[o], s, r) && !tc(l, i[o - 1], i[o], s, r)) return !1;
  return !0;
}
function VS(l, t, i, s, r) {
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    if (vp(l, t, h, s, r)) return !0;
    t = h[h.length - 1];
  }
  return !1;
}
function WS(l, t, i, s) {
  for (; t < i - s; ) {
    for (let r = 0; r < s; ++r) {
      const o = l[t + r];
      (l[t + r] = l[i - s + r]), (l[i - s + r] = o);
    }
    (t += s), (i -= s);
  }
}
function Dd(l, t, i, s) {
  let r = 0,
    o = l[i - s],
    c = l[i - s + 1];
  for (; t < i; t += s) {
    const h = l[t],
      d = l[t + 1];
    (r += (h - o) * (d + c)), (o = h), (c = d);
  }
  return r === 0 ? void 0 : r > 0;
}
function Ld(l, t, i, s, r) {
  r = r !== void 0 ? r : !1;
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o],
      d = Dd(l, t, h, s);
    if (o === 0) {
      if ((r && d) || (!r && !d)) return !1;
    } else if ((r && !d) || (!r && d)) return !1;
    t = h;
  }
  return !0;
}
function Ep(l, t, i, s, r) {
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    if (!Ld(l, t, h, s, r)) return !1;
    h.length && (t = h[h.length - 1]);
  }
  return !0;
}
function Mu(l, t, i, s, r) {
  r = r !== void 0 ? r : !1;
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o],
      d = Dd(l, t, h, s);
    (o === 0 ? (r && d) || (!r && !d) : (r && !d) || (!r && d)) &&
      WS(l, t, h, s),
      (t = h);
  }
  return t;
}
function ed(l, t, i, s, r) {
  for (let o = 0, c = i.length; o < c; ++o) t = Mu(l, t, i[o], s, r);
  return t;
}
function QS(l, t) {
  const i = [];
  let s = 0,
    r = 0,
    o;
  for (let c = 0, h = t.length; c < h; ++c) {
    const d = t[c],
      _ = Dd(l, s, d, 2);
    if ((o === void 0 && (o = _), _ === o)) i.push(t.slice(r, c + 1));
    else {
      if (i.length === 0) continue;
      i[i.length - 1].push(t[r]);
    }
    (r = c + 1), (s = d);
  }
  return i;
}
class _s extends ll {
  constructor(t, i, s) {
    super(),
      (this.ends_ = []),
      (this.flatInteriorPointRevision_ = -1),
      (this.flatInteriorPoint_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      i !== void 0 && s
        ? (this.setFlatCoordinates(i, t), (this.ends_ = s))
        : this.setCoordinates(t, i);
  }
  appendLinearRing(t) {
    this.flatCoordinates
      ? Ji(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed();
  }
  clone() {
    const t = new _s(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice(),
    );
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, r) {
    return r < nl(this.getExtent(), t, i)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Rd(this.flatCoordinates, 0, this.ends_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Ad(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          !0,
          t,
          i,
          s,
          r,
        ));
  }
  containsXY(t, i) {
    return Md(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      t,
      i,
    );
  }
  getArea() {
    return dp(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
  }
  getCoordinates(t) {
    let i;
    return (
      t !== void 0
        ? ((i = this.getOrientedFlatCoordinates().slice()),
          Mu(i, 0, this.ends_, this.stride, t))
        : (i = this.flatCoordinates),
      La(i, 0, this.ends_, this.stride)
    );
  }
  getEnds() {
    return this.ends_;
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const t = gs(this.getExtent());
      (this.flatInteriorPoint_ = Od(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        t,
        0,
      )),
        (this.flatInteriorPointRevision_ = this.getRevision());
    }
    return this.flatInteriorPoint_;
  }
  getInteriorPoint() {
    return new el(this.getFlatInteriorPoint(), "XYM");
  }
  getLinearRingCount() {
    return this.ends_.length;
  }
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new za(
          this.flatCoordinates.slice(
            t === 0 ? 0 : this.ends_[t - 1],
            this.ends_[t],
          ),
          this.layout,
        );
  }
  getLinearRings() {
    const t = this.layout,
      i = this.flatCoordinates,
      s = this.ends_,
      r = [];
    let o = 0;
    for (let c = 0, h = s.length; c < h; ++c) {
      const d = s[c],
        _ = new za(i.slice(o, d), t);
      r.push(_), (o = d);
    }
    return r;
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      Ld(t, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = Mu(
            this.orientedFlatCoordinates_,
            0,
            this.ends_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision());
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(t) {
    const i = [],
      s = [];
    return (
      (i.length = wd(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        Math.sqrt(t),
        i,
        0,
        s,
      )),
      new _s(i, "XY", s)
    );
  }
  getType() {
    return "Polygon";
  }
  intersectsExtent(t) {
    return vp(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t);
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 2),
      this.flatCoordinates || (this.flatCoordinates = []);
    const s = Za(this.flatCoordinates, 0, t, this.stride, this.ends_);
    (this.flatCoordinates.length = s.length === 0 ? 0 : s[s.length - 1]),
      this.changed();
  }
}
function ny(l) {
  if (Ha(l)) throw new Error("Cannot create polygon from empty extent");
  const t = l[0],
    i = l[1],
    s = l[2],
    r = l[3],
    o = [t, i, t, r, s, r, s, i, t, i];
  return new _s(o, "XY", [o.length]);
}
function Ou(l, t, i, s, r, o, c) {
  let h, d;
  const _ = (i - t) / s;
  if (_ === 1) h = t;
  else if (_ === 2) (h = t), (d = r);
  else if (_ !== 0) {
    let m = l[t],
      y = l[t + 1],
      v = 0;
    const S = [0];
    for (let R = t + s; R < i; R += s) {
      const A = l[R],
        O = l[R + 1];
      (v += Math.sqrt((A - m) * (A - m) + (O - y) * (O - y))),
        S.push(v),
        (m = A),
        (y = O);
    }
    const x = r * v,
      b = NE(S, x);
    b < 0
      ? ((d = (x - S[-b - 2]) / (S[-b - 1] - S[-b - 2])),
        (h = t + (-b - 2) * s))
      : (h = t + b * s);
  }
  (c = c > 1 ? c : 2), (o = o || new Array(c));
  for (let m = 0; m < c; ++m)
    o[m] =
      h === void 0
        ? NaN
        : d === void 0
          ? l[h + m]
          : ni(l[h + m], l[h + s + m], d);
  return o;
}
function id(l, t, i, s, r, o) {
  if (i == t) return null;
  let c;
  if (r < l[t + s - 1])
    return o ? ((c = l.slice(t, t + s)), (c[s - 1] = r), c) : null;
  if (l[i - 1] < r)
    return o ? ((c = l.slice(i - s, i)), (c[s - 1] = r), c) : null;
  if (r == l[t + s - 1]) return l.slice(t, t + s);
  let h = t / s,
    d = i / s;
  for (; h < d; ) {
    const v = (h + d) >> 1;
    r < l[(v + 1) * s - 1] ? (d = v) : (h = v + 1);
  }
  const _ = l[h * s - 1];
  if (r == _) return l.slice((h - 1) * s, (h - 1) * s + s);
  const m = l[(h + 1) * s - 1],
    y = (r - _) / (m - _);
  c = [];
  for (let v = 0; v < s - 1; ++v)
    c.push(ni(l[(h - 1) * s + v], l[h * s + v], y));
  return c.push(r), c;
}
function JS(l, t, i, s, r, o, c) {
  if (c) return id(l, t, i[i.length - 1], s, r, o);
  let h;
  if (r < l[s - 1]) return o ? ((h = l.slice(0, s)), (h[s - 1] = r), h) : null;
  if (l[l.length - 1] < r)
    return o ? ((h = l.slice(l.length - s)), (h[s - 1] = r), h) : null;
  for (let d = 0, _ = i.length; d < _; ++d) {
    const m = i[d];
    if (t != m) {
      if (r < l[t + s - 1]) return null;
      if (r <= l[m - 1]) return id(l, t, m, s, r, !1);
      t = m;
    }
  }
  return null;
}
function Sp(l, t, i, s) {
  let r = l[t],
    o = l[t + 1],
    c = 0;
  for (let h = t + s; h < i; h += s) {
    const d = l[h],
      _ = l[h + 1];
    (c += Math.sqrt((d - r) * (d - r) + (_ - o) * (_ - o))), (r = d), (o = _);
  }
  return c;
}
class fr extends ll {
  constructor(t, i) {
    super(),
      (this.flatMidpoint_ = null),
      (this.flatMidpointRevision_ = -1),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      i !== void 0 && !Array.isArray(t[0])
        ? this.setFlatCoordinates(i, t)
        : this.setCoordinates(t, i);
  }
  appendCoordinate(t) {
    Ji(this.flatCoordinates, t), this.changed();
  }
  clone() {
    const t = new fr(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, r) {
    return r < nl(this.getExtent(), t, i)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Cd(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0,
            ),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        bd(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          !1,
          t,
          i,
          s,
          r,
        ));
  }
  forEachSegment(t) {
    return yp(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
    );
  }
  getCoordinateAtM(t, i) {
    return this.layout != "XYM" && this.layout != "XYZM"
      ? null
      : ((i = i !== void 0 ? i : !1),
        id(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          t,
          i,
        ));
  }
  getCoordinates() {
    return cs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getCoordinateAt(t, i) {
    return Ou(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      i,
      this.stride,
    );
  }
  getLength() {
    return Sp(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getFlatMidpoint() {
    return (
      this.flatMidpointRevision_ != this.getRevision() &&
        ((this.flatMidpoint_ = this.getCoordinateAt(
          0.5,
          this.flatMidpoint_ ?? void 0,
        )),
        (this.flatMidpointRevision_ = this.getRevision())),
      this.flatMidpoint_
    );
  }
  getSimplifiedGeometryInternal(t) {
    const i = [];
    return (
      (i.length = $u(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        t,
        i,
        0,
      )),
      new fr(i, "XY")
    );
  }
  getType() {
    return "LineString";
  }
  intersectsExtent(t) {
    return tc(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      this.getExtent(),
    );
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = Ju(
        this.flatCoordinates,
        0,
        t,
        this.stride,
      )),
      this.changed();
  }
}
const Ei = {
    PRERENDER: "prerender",
    POSTRENDER: "postrender",
    PRECOMPOSE: "precompose",
    POSTCOMPOSE: "postcompose",
    RENDERCOMPLETE: "rendercomplete",
  },
  ms =
    typeof navigator < "u" && typeof navigator.userAgent < "u"
      ? navigator.userAgent.toLowerCase()
      : "",
  $S = ms.includes("firefox"),
  tx = ms.includes("safari") && !ms.includes("chrom");
tx &&
  (ms.includes("version/15.4") ||
    /cpu (os|iphone os) 15_4 like mac os x/.test(ms));
const ex = ms.includes("webkit") && !ms.includes("edge"),
  xp = ms.includes("macintosh"),
  Tp = typeof devicePixelRatio < "u" ? devicePixelRatio : 1,
  Cp =
    typeof WorkerGlobalScope < "u" &&
    typeof OffscreenCanvas < "u" &&
    self instanceof WorkerGlobalScope,
  Rp = typeof Image < "u" && Image.prototype.decode,
  bp = (function () {
    let l = !1;
    try {
      const t = Object.defineProperty({}, "passive", {
        get: function () {
          l = !0;
        },
      });
      window.addEventListener("_", null, t),
        window.removeEventListener("_", null, t);
    } catch {}
    return l;
  })(),
  xt = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3 },
  sy = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };
var ly = {
  red: 0,
  orange: 60,
  yellow: 120,
  green: 180,
  blue: 240,
  purple: 300,
};
function ix(l) {
  var m, y;
  var t,
    i = [],
    s = 1,
    r;
  if (typeof l == "number")
    return {
      space: "rgb",
      values: [l >>> 16, (l & 65280) >>> 8, l & 255],
      alpha: 1,
    };
  if (typeof l == "number")
    return {
      space: "rgb",
      values: [l >>> 16, (l & 65280) >>> 8, l & 255],
      alpha: 1,
    };
  if (((l = String(l).toLowerCase()), sy[l])) (i = sy[l].slice()), (r = "rgb");
  else if (l === "transparent") (s = 0), (r = "rgb"), (i = [0, 0, 0]);
  else if (l[0] === "#") {
    var o = l.slice(1),
      c = o.length,
      h = c <= 4;
    (s = 1),
      h
        ? ((i = [
            parseInt(o[0] + o[0], 16),
            parseInt(o[1] + o[1], 16),
            parseInt(o[2] + o[2], 16),
          ]),
          c === 4 && (s = parseInt(o[3] + o[3], 16) / 255))
        : ((i = [
            parseInt(o[0] + o[1], 16),
            parseInt(o[2] + o[3], 16),
            parseInt(o[4] + o[5], 16),
          ]),
          c === 8 && (s = parseInt(o[6] + o[7], 16) / 255)),
      i[0] || (i[0] = 0),
      i[1] || (i[1] = 0),
      i[2] || (i[2] = 0),
      (r = "rgb");
  } else if (
    (t =
      /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(
        l,
      ))
  ) {
    var d = t[1];
    r = d.replace(/a$/, "");
    var _ = r === "cmyk" ? 4 : r === "gray" ? 1 : 3;
    (i = t[2].trim().split(/\s*[,\/]\s*|\s+/)),
      r === "color" && (r = i.shift()),
      (i = i.map(function (v, S) {
        if (v[v.length - 1] === "%")
          return (
            (v = parseFloat(v) / 100),
            S === 3
              ? v
              : r === "rgb"
                ? v * 255
                : r[0] === "h" || (r[0] === "l" && !S)
                  ? v * 100
                  : r === "lab"
                    ? v * 125
                    : r === "lch"
                      ? S < 2
                        ? v * 150
                        : v * 360
                      : r[0] === "o" && !S
                        ? v
                        : r === "oklab"
                          ? v * 0.4
                          : r === "oklch"
                            ? S < 2
                              ? v * 0.4
                              : v * 360
                            : v
          );
        if (r[S] === "h" || (S === 2 && r[r.length - 1] === "h")) {
          if (ly[v] !== void 0) return ly[v];
          if (v.endsWith("deg")) return parseFloat(v);
          if (v.endsWith("turn")) return parseFloat(v) * 360;
          if (v.endsWith("grad")) return (parseFloat(v) * 360) / 400;
          if (v.endsWith("rad")) return (parseFloat(v) * 180) / Math.PI;
        }
        return v === "none" ? 0 : parseFloat(v);
      })),
      (s = i.length > _ ? i.pop() : 1);
  } else
    /[0-9](?:\s|\/|,)/.test(l) &&
      ((i = l.match(/([0-9]+)/g).map(function (v) {
        return parseFloat(v);
      })),
      (r =
        ((y = (m = l.match(/([a-z])/gi)) == null ? void 0 : m.join("")) == null
          ? void 0
          : y.toLowerCase()) || "rgb"));
  return { space: r, values: i, alpha: s };
}
const Ia = {
  name: "rgb",
  min: [0, 0, 0],
  max: [255, 255, 255],
  channel: ["red", "green", "blue"],
  alias: ["RGB"],
};
var bf = {
  name: "hsl",
  min: [0, 0, 0],
  max: [360, 100, 100],
  channel: ["hue", "saturation", "lightness"],
  alias: ["HSL"],
  rgb: function (l) {
    var t = l[0] / 360,
      i = l[1] / 100,
      s = l[2] / 100,
      r,
      o,
      c,
      h,
      d,
      _ = 0;
    if (i === 0) return (d = s * 255), [d, d, d];
    for (
      o = s < 0.5 ? s * (1 + i) : s + i - s * i, r = 2 * s - o, h = [0, 0, 0];
      _ < 3;

    )
      (c = t + (1 / 3) * -(_ - 1)),
        c < 0 ? c++ : c > 1 && c--,
        (d =
          6 * c < 1
            ? r + (o - r) * 6 * c
            : 2 * c < 1
              ? o
              : 3 * c < 2
                ? r + (o - r) * (2 / 3 - c) * 6
                : r),
        (h[_++] = d * 255);
    return h;
  },
};
Ia.hsl = function (l) {
  var t = l[0] / 255,
    i = l[1] / 255,
    s = l[2] / 255,
    r = Math.min(t, i, s),
    o = Math.max(t, i, s),
    c = o - r,
    h,
    d,
    _;
  return (
    o === r
      ? (h = 0)
      : t === o
        ? (h = (i - s) / c)
        : i === o
          ? (h = 2 + (s - t) / c)
          : s === o && (h = 4 + (t - i) / c),
    (h = Math.min(h * 60, 360)),
    h < 0 && (h += 360),
    (_ = (r + o) / 2),
    o === r ? (d = 0) : _ <= 0.5 ? (d = c / (o + r)) : (d = c / (2 - o - r)),
    [h, d * 100, _ * 100]
  );
};
function nx(l) {
  Array.isArray(l) && l.raw && (l = String.raw(...arguments)),
    l instanceof Number && (l = +l);
  var t,
    i = ix(l);
  if (!i.space) return [];
  const s = i.space[0] === "h" ? bf.min : Ia.min,
    r = i.space[0] === "h" ? bf.max : Ia.max;
  return (
    (t = Array(3)),
    (t[0] = Math.min(Math.max(i.values[0], s[0]), r[0])),
    (t[1] = Math.min(Math.max(i.values[1], s[1]), r[1])),
    (t[2] = Math.min(Math.max(i.values[2], s[2]), r[2])),
    i.space[0] === "h" && (t = bf.rgb(t)),
    t.push(Math.min(Math.max(i.alpha, 0), 1)),
    t
  );
}
const Oe = {
  name: "xyz",
  min: [0, 0, 0],
  channel: ["X", "Y", "Z"],
  alias: ["XYZ", "ciexyz", "cie1931"],
  whitepoint: {
    2: {
      A: [109.85, 100, 35.585],
      C: [98.074, 100, 118.232],
      D50: [96.422, 100, 82.521],
      D55: [95.682, 100, 92.149],
      D65: [95.045592705167, 100, 108.9057750759878],
      D75: [94.972, 100, 122.638],
      F2: [99.187, 100, 67.395],
      F7: [95.044, 100, 108.755],
      F11: [100.966, 100, 64.37],
      E: [100, 100, 100],
    },
    10: {
      A: [111.144, 100, 35.2],
      C: [97.285, 100, 116.145],
      D50: [96.72, 100, 81.427],
      D55: [95.799, 100, 90.926],
      D65: [94.811, 100, 107.304],
      D75: [94.416, 100, 120.641],
      F2: [103.28, 100, 69.026],
      F7: [95.792, 100, 107.687],
      F11: [103.866, 100, 65.627],
      E: [100, 100, 100],
    },
  },
};
Oe.max = Oe.whitepoint[2].D65;
Oe.rgb = function (l, t) {
  t = t || Oe.whitepoint[2].E;
  var i = l[0] / t[0],
    s = l[1] / t[1],
    r = l[2] / t[2],
    o,
    c,
    h;
  return (
    (o = i * 3.240969941904521 + s * -1.537383177570093 + r * -0.498610760293),
    (c = i * -0.96924363628087 + s * 1.87596750150772 + r * 0.041555057407175),
    (h = i * 0.055630079696993 + s * -0.20397695888897 + r * 1.056971514242878),
    (o =
      o > 0.0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : (o = o * 12.92)),
    (c =
      c > 0.0031308 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : (c = c * 12.92)),
    (h =
      h > 0.0031308 ? 1.055 * Math.pow(h, 1 / 2.4) - 0.055 : (h = h * 12.92)),
    (o = Math.min(Math.max(0, o), 1)),
    (c = Math.min(Math.max(0, c), 1)),
    (h = Math.min(Math.max(0, h), 1)),
    [o * 255, c * 255, h * 255]
  );
};
Ia.xyz = function (l, t) {
  var i = l[0] / 255,
    s = l[1] / 255,
    r = l[2] / 255;
  (i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92),
    (s = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92),
    (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92);
  var o = i * 0.41239079926595 + s * 0.35758433938387 + r * 0.18048078840183,
    c = i * 0.21263900587151 + s * 0.71516867876775 + r * 0.072192315360733,
    h = i * 0.019330818715591 + s * 0.11919477979462 + r * 0.95053215224966;
  return (t = t || Oe.whitepoint[2].E), [o * t[0], c * t[1], h * t[2]];
};
var zd = {
  name: "luv",
  min: [0, -134, -140],
  max: [100, 224, 122],
  channel: ["lightness", "u", "v"],
  alias: ["LUV", "cieluv", "cie1976"],
  xyz: function (l, t, i) {
    var s, r, o, c, h, d, _, m, y, v, S, x, b;
    if (((o = l[0]), (c = l[1]), (h = l[2]), o === 0)) return [0, 0, 0];
    var R = 0.0011070564598794539;
    return (
      (t = t || "D65"),
      (i = i || 2),
      (y = Oe.whitepoint[i][t][0]),
      (v = Oe.whitepoint[i][t][1]),
      (S = Oe.whitepoint[i][t][2]),
      (x = (4 * y) / (y + 15 * v + 3 * S)),
      (b = (9 * v) / (y + 15 * v + 3 * S)),
      (s = c / (13 * o) + x || 0),
      (r = h / (13 * o) + b || 0),
      (_ = o > 8 ? v * Math.pow((o + 16) / 116, 3) : v * o * R),
      (d = (_ * 9 * s) / (4 * r) || 0),
      (m = (_ * (12 - 3 * s - 20 * r)) / (4 * r) || 0),
      [d, _, m]
    );
  },
};
Oe.luv = function (l, t, i) {
  var s,
    r,
    o,
    c,
    h,
    d,
    _,
    m,
    y,
    v,
    S,
    x,
    b,
    R = 0.008856451679035631,
    A = 903.2962962962961;
  (t = t || "D65"),
    (i = i || 2),
    (y = Oe.whitepoint[i][t][0]),
    (v = Oe.whitepoint[i][t][1]),
    (S = Oe.whitepoint[i][t][2]),
    (x = (4 * y) / (y + 15 * v + 3 * S)),
    (b = (9 * v) / (y + 15 * v + 3 * S)),
    (d = l[0]),
    (_ = l[1]),
    (m = l[2]),
    (s = (4 * d) / (d + 15 * _ + 3 * m) || 0),
    (r = (9 * _) / (d + 15 * _ + 3 * m) || 0);
  var O = _ / v;
  return (
    (o = O <= R ? A * O : 116 * Math.pow(O, 1 / 3) - 16),
    (c = 13 * o * (s - x)),
    (h = 13 * o * (r - b)),
    [o, c, h]
  );
};
var Ap = {
  name: "lchuv",
  channel: ["lightness", "chroma", "hue"],
  alias: ["LCHuv", "cielchuv"],
  min: [0, 0, 0],
  max: [100, 100, 360],
  luv: function (l) {
    var t = l[0],
      i = l[1],
      s = l[2],
      r,
      o,
      c;
    return (
      (c = (s / 360) * 2 * Math.PI),
      (r = i * Math.cos(c)),
      (o = i * Math.sin(c)),
      [t, r, o]
    );
  },
  xyz: function (l) {
    return zd.xyz(Ap.luv(l));
  },
};
zd.lchuv = function (l) {
  var t = l[0],
    i = l[1],
    s = l[2],
    r = Math.sqrt(i * i + s * s),
    o = Math.atan2(s, i),
    c = (o * 360) / 2 / Math.PI;
  return c < 0 && (c += 360), [t, r, c];
};
Oe.lchuv = function (l) {
  return zd.lchuv(Oe.luv(l));
};
const Id = [NaN, NaN, NaN, 0];
function sx(l) {
  return typeof l == "string" ? l : Gd(l);
}
const lx = 1024,
  ya = {};
let Af = 0;
function rx(l) {
  if (l.length === 4) return l;
  const t = l.slice();
  return (t[3] = 1), t;
}
function ry(l) {
  const t = Oe.lchuv(Ia.xyz(l));
  return (t[3] = l[3]), t;
}
function ax(l) {
  const t = Oe.rgb(Ap.xyz(l));
  return (t[3] = l[3]), t;
}
function Nd(l) {
  if (l === "none") return Id;
  if (ya.hasOwnProperty(l)) return ya[l];
  if (Af >= lx) {
    let i = 0;
    for (const s in ya) (i++ & 3) === 0 && (delete ya[s], --Af);
  }
  const t = nx(l);
  if (t.length !== 4) throw new Error('failed to parse "' + l + '" as color');
  for (const i of t)
    if (isNaN(i)) throw new Error('failed to parse "' + l + '" as color');
  return wp(t), (ya[l] = t), ++Af, t;
}
function dr(l) {
  return Array.isArray(l) ? l : Nd(l);
}
function wp(l) {
  return (
    (l[0] = se((l[0] + 0.5) | 0, 0, 255)),
    (l[1] = se((l[1] + 0.5) | 0, 0, 255)),
    (l[2] = se((l[2] + 0.5) | 0, 0, 255)),
    (l[3] = se(l[3], 0, 1)),
    l
  );
}
function Gd(l) {
  let t = l[0];
  t != (t | 0) && (t = (t + 0.5) | 0);
  let i = l[1];
  i != (i | 0) && (i = (i + 0.5) | 0);
  let s = l[2];
  s != (s | 0) && (s = (s + 0.5) | 0);
  const r = l[3] === void 0 ? 1 : Math.round(l[3] * 1e3) / 1e3;
  return "rgba(" + t + "," + i + "," + s + "," + r + ")";
}
function me(l, t, i, s) {
  let r;
  return (
    i && i.length
      ? (r = i.shift())
      : Cp
        ? (r = new OffscreenCanvas(l || 300, t || 300))
        : (r = document.createElement("canvas")),
    l && (r.width = l),
    t && (r.height = t),
    r.getContext("2d", s)
  );
}
let wf;
function Du() {
  return wf || (wf = me(1, 1)), wf;
}
function ec(l) {
  const t = l.canvas;
  (t.width = 1), (t.height = 1), l.clearRect(0, 0, 1, 1);
}
function ay(l, t) {
  const i = t.parentNode;
  i && i.replaceChild(l, t);
}
function ox(l) {
  for (; l.lastChild; ) l.lastChild.remove();
}
function ux(l, t) {
  const i = l.childNodes;
  for (let s = 0; ; ++s) {
    const r = i[s],
      o = t[s];
    if (!r && !o) break;
    if (r !== o) {
      if (!r) {
        l.appendChild(o);
        continue;
      }
      if (!o) {
        l.removeChild(r), --s;
        continue;
      }
      l.insertBefore(o, r);
    }
  }
}
function cx(l, t, i) {
  const s = l;
  let r = !0,
    o = !1,
    c = !1;
  const h = [
    Tu(s, pt.LOAD, function () {
      (c = !0), o || t();
    }),
  ];
  return (
    s.src && Rp
      ? ((o = !0),
        s
          .decode()
          .then(function () {
            r && t();
          })
          .catch(function (d) {
            r && (c ? t() : i());
          }))
      : h.push(Tu(s, pt.ERROR, i)),
    function () {
      (r = !1), h.forEach(Zt);
    }
  );
}
function hx(l, t) {
  return new Promise((i, s) => {
    function r() {
      c(), i(l);
    }
    function o() {
      c(), s(new Error("Image load error"));
    }
    function c() {
      l.removeEventListener("load", r), l.removeEventListener("error", o);
    }
    l.addEventListener("load", r), l.addEventListener("error", o);
  });
}
function fx(l, t) {
  return (
    t && (l.src = t),
    l.src && Rp
      ? new Promise((i, s) =>
          l
            .decode()
            .then(() => i(l))
            .catch((r) => (l.complete && l.width ? i(l) : s(r))),
        )
      : hx(l)
  );
}
class dx {
  constructor() {
    (this.cache_ = {}),
      (this.patternCache_ = {}),
      (this.cacheSize_ = 0),
      (this.maxCacheSize_ = 1024);
  }
  clear() {
    (this.cache_ = {}), (this.patternCache_ = {}), (this.cacheSize_ = 0);
  }
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_;
  }
  expire() {
    if (this.canExpireCache()) {
      let t = 0;
      for (const i in this.cache_) {
        const s = this.cache_[i];
        (t++ & 3) === 0 &&
          !s.hasListener() &&
          (delete this.cache_[i],
          delete this.patternCache_[i],
          --this.cacheSize_);
      }
    }
  }
  get(t, i, s) {
    const r = Mf(t, i, s);
    return r in this.cache_ ? this.cache_[r] : null;
  }
  getPattern(t, i, s) {
    const r = Mf(t, i, s);
    return r in this.patternCache_ ? this.patternCache_[r] : null;
  }
  set(t, i, s, r, o) {
    const c = Mf(t, i, s),
      h = c in this.cache_;
    (this.cache_[c] = r),
      o &&
        (r.getImageState() === xt.IDLE && r.load(),
        r.getImageState() === xt.LOADING
          ? r.ready().then(() => {
              this.patternCache_[c] = Du().createPattern(
                r.getImage(1),
                "repeat",
              );
            })
          : (this.patternCache_[c] = Du().createPattern(
              r.getImage(1),
              "repeat",
            ))),
      h || ++this.cacheSize_;
  }
  setSize(t) {
    (this.maxCacheSize_ = t), this.expire();
  }
}
function Mf(l, t, i) {
  const s = i ? dr(i) : "null";
  return t + ":" + l + ":" + s;
}
const Si = new dx();
let pa = null;
class Mp extends Pu {
  constructor(t, i, s, r, o) {
    super(),
      (this.hitDetectionImage_ = null),
      (this.image_ = t),
      (this.crossOrigin_ = s),
      (this.canvas_ = {}),
      (this.color_ = o),
      (this.imageState_ = r === void 0 ? xt.IDLE : r),
      (this.size_ = t && t.width && t.height ? [t.width, t.height] : null),
      (this.src_ = i),
      this.tainted_,
      (this.ready_ = null);
  }
  initializeImage_() {
    (this.image_ = new Image()),
      this.crossOrigin_ !== null &&
        (this.image_.crossOrigin = this.crossOrigin_);
  }
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === xt.LOADED) {
      pa || (pa = me(1, 1, void 0, { willReadFrequently: !0 })),
        pa.drawImage(this.image_, 0, 0);
      try {
        pa.getImageData(0, 0, 1, 1), (this.tainted_ = !1);
      } catch {
        (pa = null), (this.tainted_ = !0);
      }
    }
    return this.tainted_ === !0;
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(pt.CHANGE);
  }
  handleImageError_() {
    (this.imageState_ = xt.ERROR), this.dispatchChangeEvent_();
  }
  handleImageLoad_() {
    (this.imageState_ = xt.LOADED),
      (this.size_ = [this.image_.width, this.image_.height]),
      this.dispatchChangeEvent_();
  }
  getImage(t) {
    return (
      this.image_ || this.initializeImage_(),
      this.replaceColor_(t),
      this.canvas_[t] ? this.canvas_[t] : this.image_
    );
  }
  getPixelRatio(t) {
    return this.replaceColor_(t), this.canvas_[t] ? t : 1;
  }
  getImageState() {
    return this.imageState_;
  }
  getHitDetectionImage() {
    if ((this.image_ || this.initializeImage_(), !this.hitDetectionImage_))
      if (this.isTainted_()) {
        const t = this.size_[0],
          i = this.size_[1],
          s = me(t, i);
        s.fillRect(0, 0, t, i), (this.hitDetectionImage_ = s.canvas);
      } else this.hitDetectionImage_ = this.image_;
    return this.hitDetectionImage_;
  }
  getSize() {
    return this.size_;
  }
  getSrc() {
    return this.src_;
  }
  load() {
    if (this.imageState_ === xt.IDLE) {
      this.image_ || this.initializeImage_(), (this.imageState_ = xt.LOADING);
      try {
        this.src_ !== void 0 && (this.image_.src = this.src_);
      } catch {
        this.handleImageError_();
      }
      this.image_ instanceof HTMLImageElement &&
        fx(this.image_, this.src_)
          .then((t) => {
            (this.image_ = t), this.handleImageLoad_();
          })
          .catch(this.handleImageError_.bind(this));
    }
  }
  replaceColor_(t) {
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== xt.LOADED)
      return;
    const i = this.image_,
      s = me(Math.ceil(i.width * t), Math.ceil(i.height * t)),
      r = s.canvas;
    s.scale(t, t),
      s.drawImage(i, 0, 0),
      (s.globalCompositeOperation = "multiply"),
      (s.fillStyle = sx(this.color_)),
      s.fillRect(0, 0, r.width / t, r.height / t),
      (s.globalCompositeOperation = "destination-in"),
      s.drawImage(i, 0, 0),
      (this.canvas_[t] = r);
  }
  ready() {
    return (
      this.ready_ ||
        (this.ready_ = new Promise((t) => {
          if (this.imageState_ === xt.LOADED || this.imageState_ === xt.ERROR)
            t();
          else {
            const i = () => {
              (this.imageState_ === xt.LOADED ||
                this.imageState_ === xt.ERROR) &&
                (this.removeEventListener(pt.CHANGE, i), t());
            };
            this.addEventListener(pt.CHANGE, i);
          }
        })),
      this.ready_
    );
  }
}
function Fd(l, t, i, s, r, o) {
  let c = t === void 0 ? void 0 : Si.get(t, i, r);
  return (
    c ||
      ((c = new Mp(l, l && "src" in l ? l.src || void 0 : t, i, s, r)),
      Si.set(t, i, r, c, o)),
    o && c && !Si.getPattern(t, i, r) && Si.set(t, i, r, c, o),
    c
  );
}
function Qi(l) {
  return l
    ? Array.isArray(l)
      ? Gd(l)
      : typeof l == "object" && "src" in l
        ? gx(l)
        : l
    : null;
}
function gx(l) {
  if (!l.offset || !l.size) return Si.getPattern(l.src, "anonymous", l.color);
  const t = l.src + ":" + l.offset,
    i = Si.getPattern(t, void 0, l.color);
  if (i) return i;
  const s = Si.get(l.src, "anonymous", null);
  if (s.getImageState() !== xt.LOADED) return null;
  const r = me(l.size[0], l.size[1]);
  return (
    r.drawImage(
      s.getImage(1),
      l.offset[0],
      l.offset[1],
      l.size[0],
      l.size[1],
      0,
      0,
      l.size[0],
      l.size[1],
    ),
    Fd(r.canvas, t, void 0, xt.LOADED, l.color, !0),
    Si.getPattern(t, void 0, l.color)
  );
}
class Op {
  drawCustom(t, i, s, r, o) {}
  drawGeometry(t) {}
  setStyle(t) {}
  drawCircle(t, i, s) {}
  drawFeature(t, i, s) {}
  drawGeometryCollection(t, i, s) {}
  drawLineString(t, i, s) {}
  drawMultiLineString(t, i, s) {}
  drawMultiPoint(t, i, s) {}
  drawMultiPolygon(t, i, s) {}
  drawPoint(t, i, s) {}
  drawPolygon(t, i, s) {}
  drawText(t, i, s) {}
  setFillStrokeStyle(t, i) {}
  setImageStyle(t, i) {}
  setTextStyle(t, i) {}
}
const du = "ol-hidden",
  ic = "ol-unselectable",
  Ud = "ol-control",
  oy = "ol-collapsed",
  _x = new RegExp(
    [
      "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
      "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
      "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
      "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
      `?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`,
    ].join(""),
    "i",
  ),
  uy = ["style", "variant", "weight", "size", "lineHeight", "family"],
  Dp = function (l) {
    const t = l.match(_x);
    if (!t) return null;
    const i = {
      lineHeight: "normal",
      size: "1.2em",
      style: "normal",
      weight: "normal",
      variant: "normal",
    };
    for (let s = 0, r = uy.length; s < r; ++s) {
      const o = t[s + 1];
      o !== void 0 && (i[uy[s]] = o);
    }
    return (i.families = i.family.split(/,\s?/)), i;
  },
  Lp = "10px sans-serif",
  He = "#000",
  gr = "round",
  An = [],
  wn = 0,
  _r = "round",
  Na = 10,
  Ga = "#000",
  Fa = "center",
  Lu = "middle",
  Vs = [0, 0, 0, 0],
  Ua = 1,
  Cn = new $i();
let Ql = null,
  nd;
const sd = {},
  mx = (function () {
    const t = "32px ",
      i = ["monospace", "serif"],
      s = i.length,
      r = "wmytzilWMYTZIL@#/&?$%10";
    let o, c;
    function h(_, m, y) {
      let v = !0;
      for (let S = 0; S < s; ++S) {
        const x = i[S];
        if (((c = zu(_ + " " + m + " " + t + x, r)), y != x)) {
          const b = zu(_ + " " + m + " " + t + y + "," + x, r);
          v = v && b != c;
        }
      }
      return !!v;
    }
    function d() {
      let _ = !0;
      const m = Cn.getKeys();
      for (let y = 0, v = m.length; y < v; ++y) {
        const S = m[y];
        if (Cn.get(S) < 100) {
          const [x, b, R] = S.split(`
`);
          h(x, b, R)
            ? (ka(sd), (Ql = null), (nd = void 0), Cn.set(S, 100))
            : (Cn.set(S, Cn.get(S) + 1, !0), (_ = !1));
        }
      }
      _ && (clearInterval(o), (o = void 0));
    }
    return function (_) {
      const m = Dp(_);
      if (!m) return;
      const y = m.families;
      for (let v = 0, S = y.length; v < S; ++v) {
        const x = y[v],
          b =
            m.style +
            `
` +
            m.weight +
            `
` +
            x;
        Cn.get(b) === void 0 &&
          (Cn.set(b, 100, !0),
          h(m.style, m.weight, x) ||
            (Cn.set(b, 0, !0), o === void 0 && (o = setInterval(d, 32))));
      }
    };
  })(),
  yx = (function () {
    let l;
    return function (t) {
      let i = sd[t];
      if (i == null) {
        if (Cp) {
          const s = Dp(t),
            r = zp(t, "Žg");
          i =
            (isNaN(Number(s.lineHeight)) ? 1.2 : Number(s.lineHeight)) *
            (r.actualBoundingBoxAscent + r.actualBoundingBoxDescent);
        } else
          l ||
            ((l = document.createElement("div")),
            (l.innerHTML = "M"),
            (l.style.minHeight = "0"),
            (l.style.maxHeight = "none"),
            (l.style.height = "auto"),
            (l.style.padding = "0"),
            (l.style.border = "none"),
            (l.style.position = "absolute"),
            (l.style.display = "block"),
            (l.style.left = "-99999px")),
            (l.style.font = t),
            document.body.appendChild(l),
            (i = l.offsetHeight),
            document.body.removeChild(l);
        sd[t] = i;
      }
      return i;
    };
  })();
function zp(l, t) {
  return (
    Ql || (Ql = me(1, 1)),
    l != nd && ((Ql.font = l), (nd = Ql.font)),
    Ql.measureText(t)
  );
}
function zu(l, t) {
  return zp(l, t).width;
}
function cy(l, t, i) {
  if (t in i) return i[t];
  const s = t
    .split(
      `
`,
    )
    .reduce((r, o) => Math.max(r, zu(l, o)), 0);
  return (i[t] = s), s;
}
function px(l, t) {
  const i = [],
    s = [],
    r = [];
  let o = 0,
    c = 0,
    h = 0,
    d = 0;
  for (let _ = 0, m = t.length; _ <= m; _ += 2) {
    const y = t[_];
    if (
      y ===
        `
` ||
      _ === m
    ) {
      (o = Math.max(o, c)), r.push(c), (c = 0), (h += d), (d = 0);
      continue;
    }
    const v = t[_ + 1] || l.font,
      S = zu(v, y);
    i.push(S), (c += S);
    const x = yx(v);
    s.push(x), (d = Math.max(d, x));
  }
  return { width: o, height: h, widths: i, heights: s, lineWidths: r };
}
function vx(l, t, i, s, r, o, c, h, d, _, m) {
  l.save(),
    i !== 1 &&
      (l.globalAlpha === void 0
        ? (l.globalAlpha = (y) => (y.globalAlpha *= i))
        : (l.globalAlpha *= i)),
    t && l.transform.apply(l, t),
    s.contextInstructions
      ? (l.translate(d, _), l.scale(m[0], m[1]), Ex(s, l))
      : m[0] < 0 || m[1] < 0
        ? (l.translate(d, _),
          l.scale(m[0], m[1]),
          l.drawImage(s, r, o, c, h, 0, 0, c, h))
        : l.drawImage(s, r, o, c, h, d, _, c * m[0], h * m[1]),
    l.restore();
}
function Ex(l, t) {
  const i = l.contextInstructions;
  for (let s = 0, r = i.length; s < r; s += 2)
    Array.isArray(i[s + 1]) ? t[i[s]].apply(t, i[s + 1]) : (t[i[s]] = i[s + 1]);
}
class Sx extends Op {
  constructor(t, i, s, r, o, c, h) {
    super(),
      (this.context_ = t),
      (this.pixelRatio_ = i),
      (this.extent_ = s),
      (this.transform_ = r),
      (this.transformRotation_ = r ? md(Math.atan2(r[1], r[0]), 10) : 0),
      (this.viewRotation_ = o),
      (this.squaredTolerance_ = c),
      (this.userTransform_ = h),
      (this.contextFillState_ = null),
      (this.contextStrokeState_ = null),
      (this.contextTextState_ = null),
      (this.fillState_ = null),
      (this.strokeState_ = null),
      (this.image_ = null),
      (this.imageAnchorX_ = 0),
      (this.imageAnchorY_ = 0),
      (this.imageHeight_ = 0),
      (this.imageOpacity_ = 0),
      (this.imageOriginX_ = 0),
      (this.imageOriginY_ = 0),
      (this.imageRotateWithView_ = !1),
      (this.imageRotation_ = 0),
      (this.imageScale_ = [0, 0]),
      (this.imageWidth_ = 0),
      (this.text_ = ""),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = !1),
      (this.textRotation_ = 0),
      (this.textScale_ = [0, 0]),
      (this.textFillState_ = null),
      (this.textStrokeState_ = null),
      (this.textState_ = null),
      (this.pixelCoordinates_ = []),
      (this.tmpLocalTransform_ = Ni());
  }
  drawImages_(t, i, s, r) {
    if (!this.image_) return;
    const o = ds(t, i, s, r, this.transform_, this.pixelCoordinates_),
      c = this.context_,
      h = this.tmpLocalTransform_,
      d = c.globalAlpha;
    this.imageOpacity_ != 1 && (c.globalAlpha = d * this.imageOpacity_);
    let _ = this.imageRotation_;
    this.transformRotation_ === 0 && (_ -= this.viewRotation_),
      this.imageRotateWithView_ && (_ += this.viewRotation_);
    for (let m = 0, y = o.length; m < y; m += 2) {
      const v = o[m] - this.imageAnchorX_,
        S = o[m + 1] - this.imageAnchorY_;
      if (_ !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const x = v + this.imageAnchorX_,
          b = S + this.imageAnchorY_;
        On(h, x, b, 1, 1, _, -x, -b),
          c.save(),
          c.transform.apply(c, h),
          c.translate(x, b),
          c.scale(this.imageScale_[0], this.imageScale_[1]),
          c.drawImage(
            this.image_,
            this.imageOriginX_,
            this.imageOriginY_,
            this.imageWidth_,
            this.imageHeight_,
            -this.imageAnchorX_,
            -this.imageAnchorY_,
            this.imageWidth_,
            this.imageHeight_,
          ),
          c.restore();
      } else
        c.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          v,
          S,
          this.imageWidth_,
          this.imageHeight_,
        );
    }
    this.imageOpacity_ != 1 && (c.globalAlpha = d);
  }
  drawText_(t, i, s, r) {
    if (!this.textState_ || this.text_ === "") return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_),
      this.textStrokeState_ &&
        this.setContextStrokeState_(this.textStrokeState_),
      this.setContextTextState_(this.textState_);
    const o = ds(t, i, s, r, this.transform_, this.pixelCoordinates_),
      c = this.context_;
    let h = this.textRotation_;
    for (
      this.transformRotation_ === 0 && (h -= this.viewRotation_),
        this.textRotateWithView_ && (h += this.viewRotation_);
      i < s;
      i += r
    ) {
      const d = o[i] + this.textOffsetX_,
        _ = o[i + 1] + this.textOffsetY_;
      h !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1
        ? (c.save(),
          c.translate(d - this.textOffsetX_, _ - this.textOffsetY_),
          c.rotate(h),
          c.translate(this.textOffsetX_, this.textOffsetY_),
          c.scale(this.textScale_[0], this.textScale_[1]),
          this.textStrokeState_ && c.strokeText(this.text_, 0, 0),
          this.textFillState_ && c.fillText(this.text_, 0, 0),
          c.restore())
        : (this.textStrokeState_ && c.strokeText(this.text_, d, _),
          this.textFillState_ && c.fillText(this.text_, d, _));
    }
  }
  moveToLineTo_(t, i, s, r, o) {
    const c = this.context_,
      h = ds(t, i, s, r, this.transform_, this.pixelCoordinates_);
    c.moveTo(h[0], h[1]);
    let d = h.length;
    o && (d -= 2);
    for (let _ = 2; _ < d; _ += 2) c.lineTo(h[_], h[_ + 1]);
    return o && c.closePath(), s;
  }
  drawRings_(t, i, s, r) {
    for (let o = 0, c = s.length; o < c; ++o)
      i = this.moveToLineTo_(t, i, s[o], r, !0);
    return i;
  }
  drawCircle(t) {
    if (
      (this.squaredTolerance_ &&
        (t = t.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!je(this.extent_, t.getExtent()))
    ) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const i = XS(t, this.transform_, this.pixelCoordinates_),
          s = i[2] - i[0],
          r = i[3] - i[1],
          o = Math.sqrt(s * s + r * r),
          c = this.context_;
        c.beginPath(),
          c.arc(i[0], i[1], o, 0, 2 * Math.PI),
          this.fillState_ && c.fill(),
          this.strokeState_ && c.stroke();
      }
      this.text_ !== "" && this.drawText_(t.getCenter(), 0, 2, 2);
    }
  }
  setStyle(t) {
    this.setFillStrokeStyle(t.getFill(), t.getStroke()),
      this.setImageStyle(t.getImage()),
      this.setTextStyle(t.getText());
  }
  setTransform(t) {
    this.transform_ = t;
  }
  drawGeometry(t) {
    switch (t.getType()) {
      case "Point":
        this.drawPoint(t);
        break;
      case "LineString":
        this.drawLineString(t);
        break;
      case "Polygon":
        this.drawPolygon(t);
        break;
      case "MultiPoint":
        this.drawMultiPoint(t);
        break;
      case "MultiLineString":
        this.drawMultiLineString(t);
        break;
      case "MultiPolygon":
        this.drawMultiPolygon(t);
        break;
      case "GeometryCollection":
        this.drawGeometryCollection(t);
        break;
      case "Circle":
        this.drawCircle(t);
        break;
    }
  }
  drawFeature(t, i) {
    const s = i.getGeometryFunction()(t);
    s && (this.setStyle(i), this.drawGeometry(s));
  }
  drawGeometryCollection(t) {
    const i = t.getGeometriesArray();
    for (let s = 0, r = i.length; s < r; ++s) this.drawGeometry(i[s]);
  }
  drawPoint(t) {
    this.squaredTolerance_ &&
      (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const i = t.getFlatCoordinates(),
      s = t.getStride();
    this.image_ && this.drawImages_(i, 0, i.length, s),
      this.text_ !== "" && this.drawText_(i, 0, i.length, s);
  }
  drawMultiPoint(t) {
    this.squaredTolerance_ &&
      (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const i = t.getFlatCoordinates(),
      s = t.getStride();
    this.image_ && this.drawImages_(i, 0, i.length, s),
      this.text_ !== "" && this.drawText_(i, 0, i.length, s);
  }
  drawLineString(t) {
    if (
      (this.squaredTolerance_ &&
        (t = t.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!je(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const i = this.context_,
          s = t.getFlatCoordinates();
        i.beginPath(),
          this.moveToLineTo_(s, 0, s.length, t.getStride(), !1),
          i.stroke();
      }
      if (this.text_ !== "") {
        const i = t.getFlatMidpoint();
        this.drawText_(i, 0, 2, 2);
      }
    }
  }
  drawMultiLineString(t) {
    this.squaredTolerance_ &&
      (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const i = t.getExtent();
    if (je(this.extent_, i)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const s = this.context_,
          r = t.getFlatCoordinates();
        let o = 0;
        const c = t.getEnds(),
          h = t.getStride();
        s.beginPath();
        for (let d = 0, _ = c.length; d < _; ++d)
          o = this.moveToLineTo_(r, o, c[d], h, !1);
        s.stroke();
      }
      if (this.text_ !== "") {
        const s = t.getFlatMidpoints();
        this.drawText_(s, 0, s.length, 2);
      }
    }
  }
  drawPolygon(t) {
    if (
      (this.squaredTolerance_ &&
        (t = t.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!je(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const i = this.context_;
        i.beginPath(),
          this.drawRings_(
            t.getOrientedFlatCoordinates(),
            0,
            t.getEnds(),
            t.getStride(),
          ),
          this.fillState_ && i.fill(),
          this.strokeState_ && i.stroke();
      }
      if (this.text_ !== "") {
        const i = t.getFlatInteriorPoint();
        this.drawText_(i, 0, 2, 2);
      }
    }
  }
  drawMultiPolygon(t) {
    if (
      (this.squaredTolerance_ &&
        (t = t.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!je(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const i = this.context_,
          s = t.getOrientedFlatCoordinates();
        let r = 0;
        const o = t.getEndss(),
          c = t.getStride();
        i.beginPath();
        for (let h = 0, d = o.length; h < d; ++h) {
          const _ = o[h];
          r = this.drawRings_(s, r, _, c);
        }
        this.fillState_ && i.fill(), this.strokeState_ && i.stroke();
      }
      if (this.text_ !== "") {
        const i = t.getFlatInteriorPoints();
        this.drawText_(i, 0, i.length, 2);
      }
    }
  }
  setContextFillState_(t) {
    const i = this.context_,
      s = this.contextFillState_;
    s
      ? s.fillStyle != t.fillStyle &&
        ((s.fillStyle = t.fillStyle), (i.fillStyle = t.fillStyle))
      : ((i.fillStyle = t.fillStyle),
        (this.contextFillState_ = { fillStyle: t.fillStyle }));
  }
  setContextStrokeState_(t) {
    const i = this.context_,
      s = this.contextStrokeState_;
    s
      ? (s.lineCap != t.lineCap &&
          ((s.lineCap = t.lineCap), (i.lineCap = t.lineCap)),
        ys(s.lineDash, t.lineDash) || i.setLineDash((s.lineDash = t.lineDash)),
        s.lineDashOffset != t.lineDashOffset &&
          ((s.lineDashOffset = t.lineDashOffset),
          (i.lineDashOffset = t.lineDashOffset)),
        s.lineJoin != t.lineJoin &&
          ((s.lineJoin = t.lineJoin), (i.lineJoin = t.lineJoin)),
        s.lineWidth != t.lineWidth &&
          ((s.lineWidth = t.lineWidth), (i.lineWidth = t.lineWidth)),
        s.miterLimit != t.miterLimit &&
          ((s.miterLimit = t.miterLimit), (i.miterLimit = t.miterLimit)),
        s.strokeStyle != t.strokeStyle &&
          ((s.strokeStyle = t.strokeStyle), (i.strokeStyle = t.strokeStyle)))
      : ((i.lineCap = t.lineCap),
        i.setLineDash(t.lineDash),
        (i.lineDashOffset = t.lineDashOffset),
        (i.lineJoin = t.lineJoin),
        (i.lineWidth = t.lineWidth),
        (i.miterLimit = t.miterLimit),
        (i.strokeStyle = t.strokeStyle),
        (this.contextStrokeState_ = {
          lineCap: t.lineCap,
          lineDash: t.lineDash,
          lineDashOffset: t.lineDashOffset,
          lineJoin: t.lineJoin,
          lineWidth: t.lineWidth,
          miterLimit: t.miterLimit,
          strokeStyle: t.strokeStyle,
        }));
  }
  setContextTextState_(t) {
    const i = this.context_,
      s = this.contextTextState_,
      r = t.textAlign ? t.textAlign : Fa;
    s
      ? (s.font != t.font && ((s.font = t.font), (i.font = t.font)),
        s.textAlign != r && ((s.textAlign = r), (i.textAlign = r)),
        s.textBaseline != t.textBaseline &&
          ((s.textBaseline = t.textBaseline),
          (i.textBaseline = t.textBaseline)))
      : ((i.font = t.font),
        (i.textAlign = r),
        (i.textBaseline = t.textBaseline),
        (this.contextTextState_ = {
          font: t.font,
          textAlign: r,
          textBaseline: t.textBaseline,
        }));
  }
  setFillStrokeStyle(t, i) {
    if (!t) this.fillState_ = null;
    else {
      const s = t.getColor();
      this.fillState_ = { fillStyle: Qi(s || He) };
    }
    if (!i) this.strokeState_ = null;
    else {
      const s = i.getColor(),
        r = i.getLineCap(),
        o = i.getLineDash(),
        c = i.getLineDashOffset(),
        h = i.getLineJoin(),
        d = i.getWidth(),
        _ = i.getMiterLimit(),
        m = o || An;
      this.strokeState_ = {
        lineCap: r !== void 0 ? r : gr,
        lineDash:
          this.pixelRatio_ === 1 ? m : m.map((y) => y * this.pixelRatio_),
        lineDashOffset: (c || wn) * this.pixelRatio_,
        lineJoin: h !== void 0 ? h : _r,
        lineWidth: (d !== void 0 ? d : Ua) * this.pixelRatio_,
        miterLimit: _ !== void 0 ? _ : Na,
        strokeStyle: Qi(s || Ga),
      };
    }
  }
  setImageStyle(t) {
    let i;
    if (!t || !(i = t.getSize())) {
      this.image_ = null;
      return;
    }
    const s = t.getPixelRatio(this.pixelRatio_),
      r = t.getAnchor(),
      o = t.getOrigin();
    (this.image_ = t.getImage(this.pixelRatio_)),
      (this.imageAnchorX_ = r[0] * s),
      (this.imageAnchorY_ = r[1] * s),
      (this.imageHeight_ = i[1] * s),
      (this.imageOpacity_ = t.getOpacity()),
      (this.imageOriginX_ = o[0]),
      (this.imageOriginY_ = o[1]),
      (this.imageRotateWithView_ = t.getRotateWithView()),
      (this.imageRotation_ = t.getRotation());
    const c = t.getScaleArray();
    (this.imageScale_ = [
      (c[0] * this.pixelRatio_) / s,
      (c[1] * this.pixelRatio_) / s,
    ]),
      (this.imageWidth_ = i[0] * s);
  }
  setTextStyle(t) {
    if (!t) this.text_ = "";
    else {
      const i = t.getFill();
      if (!i) this.textFillState_ = null;
      else {
        const S = i.getColor();
        this.textFillState_ = { fillStyle: Qi(S || He) };
      }
      const s = t.getStroke();
      if (!s) this.textStrokeState_ = null;
      else {
        const S = s.getColor(),
          x = s.getLineCap(),
          b = s.getLineDash(),
          R = s.getLineDashOffset(),
          A = s.getLineJoin(),
          O = s.getWidth(),
          G = s.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: x !== void 0 ? x : gr,
          lineDash: b || An,
          lineDashOffset: R || wn,
          lineJoin: A !== void 0 ? A : _r,
          lineWidth: O !== void 0 ? O : Ua,
          miterLimit: G !== void 0 ? G : Na,
          strokeStyle: Qi(S || Ga),
        };
      }
      const r = t.getFont(),
        o = t.getOffsetX(),
        c = t.getOffsetY(),
        h = t.getRotateWithView(),
        d = t.getRotation(),
        _ = t.getScaleArray(),
        m = t.getText(),
        y = t.getTextAlign(),
        v = t.getTextBaseline();
      (this.textState_ = {
        font: r !== void 0 ? r : Lp,
        textAlign: y !== void 0 ? y : Fa,
        textBaseline: v !== void 0 ? v : Lu,
      }),
        (this.text_ =
          m !== void 0
            ? Array.isArray(m)
              ? m.reduce((S, x, b) => (S += b % 2 ? " " : x), "")
              : m
            : ""),
        (this.textOffsetX_ = o !== void 0 ? this.pixelRatio_ * o : 0),
        (this.textOffsetY_ = c !== void 0 ? this.pixelRatio_ * c : 0),
        (this.textRotateWithView_ = h !== void 0 ? h : !1),
        (this.textRotation_ = d !== void 0 ? d : 0),
        (this.textScale_ = [this.pixelRatio_ * _[0], this.pixelRatio_ * _[1]]);
    }
  }
}
const xx = 0.5,
  Ip = {
    Point: Ox,
    LineString: Ax,
    Polygon: Lx,
    MultiPoint: Dx,
    MultiLineString: wx,
    MultiPolygon: Mx,
    GeometryCollection: bx,
    Circle: Cx,
  };
function Tx(l, t) {
  return parseInt(It(l), 10) - parseInt(It(t), 10);
}
function hy(l, t) {
  const i = Np(l, t);
  return i * i;
}
function Np(l, t) {
  return (xx * l) / t;
}
function Cx(l, t, i, s, r) {
  const o = i.getFill(),
    c = i.getStroke();
  if (o || c) {
    const d = l.getBuilder(i.getZIndex(), "Circle");
    d.setFillStrokeStyle(o, c), d.drawCircle(t, s, r);
  }
  const h = i.getText();
  if (h && h.getText()) {
    const d = l.getBuilder(i.getZIndex(), "Text");
    d.setTextStyle(h), d.drawText(t, s);
  }
}
function fy(l, t, i, s, r, o, c, h) {
  const d = [],
    _ = i.getImage();
  if (_) {
    let v = !0;
    const S = _.getImageState();
    S == xt.LOADED || S == xt.ERROR ? (v = !1) : S == xt.IDLE && _.load(),
      v && d.push(_.ready());
  }
  const m = i.getFill();
  m && m.loading() && d.push(m.ready());
  const y = d.length > 0;
  return y && Promise.all(d).then(() => r(null)), Rx(l, t, i, s, o, c, h), y;
}
function Rx(l, t, i, s, r, o, c) {
  const h = i.getGeometryFunction()(t);
  if (!h) return;
  const d = h.simplifyTransformed(s, r);
  if (i.getRenderer()) Gp(l, d, i, t, c);
  else {
    const m = Ip[d.getType()];
    m(l, d, i, t, c, o);
  }
}
function Gp(l, t, i, s, r) {
  if (t.getType() == "GeometryCollection") {
    const c = t.getGeometries();
    for (let h = 0, d = c.length; h < d; ++h) Gp(l, c[h], i, s, r);
    return;
  }
  l.getBuilder(i.getZIndex(), "Default").drawCustom(
    t,
    s,
    i.getRenderer(),
    i.getHitDetectionRenderer(),
    r,
  );
}
function bx(l, t, i, s, r, o) {
  const c = t.getGeometriesArray();
  let h, d;
  for (h = 0, d = c.length; h < d; ++h) {
    const _ = Ip[c[h].getType()];
    _(l, c[h], i, s, r, o);
  }
}
function Ax(l, t, i, s, r) {
  const o = i.getStroke();
  if (o) {
    const h = l.getBuilder(i.getZIndex(), "LineString");
    h.setFillStrokeStyle(null, o), h.drawLineString(t, s, r);
  }
  const c = i.getText();
  if (c && c.getText()) {
    const h = l.getBuilder(i.getZIndex(), "Text");
    h.setTextStyle(c), h.drawText(t, s, r);
  }
}
function wx(l, t, i, s, r) {
  const o = i.getStroke();
  if (o) {
    const h = l.getBuilder(i.getZIndex(), "LineString");
    h.setFillStrokeStyle(null, o), h.drawMultiLineString(t, s, r);
  }
  const c = i.getText();
  if (c && c.getText()) {
    const h = l.getBuilder(i.getZIndex(), "Text");
    h.setTextStyle(c), h.drawText(t, s, r);
  }
}
function Mx(l, t, i, s, r) {
  const o = i.getFill(),
    c = i.getStroke();
  if (c || o) {
    const d = l.getBuilder(i.getZIndex(), "Polygon");
    d.setFillStrokeStyle(o, c), d.drawMultiPolygon(t, s, r);
  }
  const h = i.getText();
  if (h && h.getText()) {
    const d = l.getBuilder(i.getZIndex(), "Text");
    d.setTextStyle(h), d.drawText(t, s, r);
  }
}
function Ox(l, t, i, s, r, o) {
  const c = i.getImage(),
    h = i.getText(),
    d = h && h.getText(),
    _ = o && c && d ? {} : void 0;
  if (c) {
    if (c.getImageState() != xt.LOADED) return;
    const m = l.getBuilder(i.getZIndex(), "Image");
    m.setImageStyle(c, _), m.drawPoint(t, s, r);
  }
  if (d) {
    const m = l.getBuilder(i.getZIndex(), "Text");
    m.setTextStyle(h, _), m.drawText(t, s, r);
  }
}
function Dx(l, t, i, s, r, o) {
  const c = i.getImage(),
    h = c && c.getOpacity() !== 0,
    d = i.getText(),
    _ = d && d.getText(),
    m = o && h && _ ? {} : void 0;
  if (h) {
    if (c.getImageState() != xt.LOADED) return;
    const y = l.getBuilder(i.getZIndex(), "Image");
    y.setImageStyle(c, m), y.drawMultiPoint(t, s, r);
  }
  if (_) {
    const y = l.getBuilder(i.getZIndex(), "Text");
    y.setTextStyle(d, m), y.drawText(t, s, r);
  }
}
function Lx(l, t, i, s, r) {
  const o = i.getFill(),
    c = i.getStroke();
  if (o || c) {
    const d = l.getBuilder(i.getZIndex(), "Polygon");
    d.setFillStrokeStyle(o, c), d.drawPolygon(t, s, r);
  }
  const h = i.getText();
  if (h && h.getText()) {
    const d = l.getBuilder(i.getZIndex(), "Text");
    d.setTextStyle(h), d.drawText(t, s, r);
  }
}
let zx = !1;
function Ix(l, t, i, s, r, o, c) {
  const h = new XMLHttpRequest();
  h.open("GET", typeof l == "function" ? l(i, s, r) : l, !0),
    t.getType() == "arraybuffer" && (h.responseType = "arraybuffer"),
    (h.withCredentials = zx),
    (h.onload = function (d) {
      if (!h.status || (h.status >= 200 && h.status < 300)) {
        const _ = t.getType();
        try {
          let m;
          _ == "text" || _ == "json"
            ? (m = h.responseText)
            : _ == "xml"
              ? (m = h.responseXML || h.responseText)
              : _ == "arraybuffer" && (m = h.response),
            m
              ? o(
                  t.readFeatures(m, { extent: i, featureProjection: r }),
                  t.readProjection(m),
                )
              : c();
        } catch {
          c();
        }
      } else c();
    }),
    (h.onerror = c),
    h.send();
}
function dy(l, t) {
  return function (i, s, r, o, c) {
    Ix(
      l,
      t,
      i,
      s,
      r,
      (h, d) => {
        this.addFeatures(h), o !== void 0 && o(h);
      },
      c || or,
    );
  };
}
function Nx(l, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
function Fp(l, t, i, s) {
  const r = [];
  let o = Ti();
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    (o = _d(l, t, d[0], s)),
      r.push((o[0] + o[2]) / 2, (o[1] + o[3]) / 2),
      (t = d[d.length - 1]);
  }
  return r;
}
class Iu extends hp {
  constructor(t) {
    super(),
      (this.geometries_ = t),
      (this.changeEventsKeys_ = []),
      this.listenGeometriesChange_();
  }
  unlistenGeometriesChange_() {
    this.changeEventsKeys_.forEach(Zt), (this.changeEventsKeys_.length = 0);
  }
  listenGeometriesChange_() {
    const t = this.geometries_;
    for (let i = 0, s = t.length; i < s; ++i)
      this.changeEventsKeys_.push(Mt(t[i], pt.CHANGE, this.changed, this));
  }
  clone() {
    const t = new Iu(Of(this.geometries_));
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, r) {
    if (r < nl(this.getExtent(), t, i)) return r;
    const o = this.geometries_;
    for (let c = 0, h = o.length; c < h; ++c)
      r = o[c].closestPointXY(t, i, s, r);
    return r;
  }
  containsXY(t, i) {
    const s = this.geometries_;
    for (let r = 0, o = s.length; r < o; ++r)
      if (s[r].containsXY(t, i)) return !0;
    return !1;
  }
  computeExtent(t) {
    mr(t);
    const i = this.geometries_;
    for (let s = 0, r = i.length; s < r; ++s) Vy(t, i[s].getExtent());
    return t;
  }
  getGeometries() {
    return Of(this.geometries_);
  }
  getGeometriesArray() {
    return this.geometries_;
  }
  getGeometriesArrayRecursive() {
    let t = [];
    const i = this.geometries_;
    for (let s = 0, r = i.length; s < r; ++s)
      i[s].getType() === this.getType()
        ? (t = t.concat(i[s].getGeometriesArrayRecursive()))
        : t.push(i[s]);
    return t;
  }
  getSimplifiedGeometry(t) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      t < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          t < this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this;
    const i = [],
      s = this.geometries_;
    let r = !1;
    for (let o = 0, c = s.length; o < c; ++o) {
      const h = s[o],
        d = h.getSimplifiedGeometry(t);
      i.push(d), d !== h && (r = !0);
    }
    return r
      ? new Iu(i)
      : ((this.simplifiedGeometryMaxMinSquaredTolerance = t), this);
  }
  getType() {
    return "GeometryCollection";
  }
  intersectsExtent(t) {
    const i = this.geometries_;
    for (let s = 0, r = i.length; s < r; ++s)
      if (i[s].intersectsExtent(t)) return !0;
    return !1;
  }
  isEmpty() {
    return this.geometries_.length === 0;
  }
  rotate(t, i) {
    const s = this.geometries_;
    for (let r = 0, o = s.length; r < o; ++r) s[r].rotate(t, i);
    this.changed();
  }
  scale(t, i, s) {
    s || (s = gs(this.getExtent()));
    const r = this.geometries_;
    for (let o = 0, c = r.length; o < c; ++o) r[o].scale(t, i, s);
    this.changed();
  }
  setGeometries(t) {
    this.setGeometriesArray(Of(t));
  }
  setGeometriesArray(t) {
    this.unlistenGeometriesChange_(),
      (this.geometries_ = t),
      this.listenGeometriesChange_(),
      this.changed();
  }
  applyTransform(t) {
    const i = this.geometries_;
    for (let s = 0, r = i.length; s < r; ++s) i[s].applyTransform(t);
    this.changed();
  }
  translate(t, i) {
    const s = this.geometries_;
    for (let r = 0, o = s.length; r < o; ++r) s[r].translate(t, i);
    this.changed();
  }
  disposeInternal() {
    this.unlistenGeometriesChange_(), super.disposeInternal();
  }
}
function Of(l) {
  return l.map((t) => t.clone());
}
class Nu extends ll {
  constructor(t, i, s) {
    if (
      (super(),
      (this.ends_ = []),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      Array.isArray(t[0]))
    )
      this.setCoordinates(t, i);
    else if (i !== void 0 && s) this.setFlatCoordinates(i, t), (this.ends_ = s);
    else {
      const r = t,
        o = [],
        c = [];
      for (let d = 0, _ = r.length; d < _; ++d) {
        const m = r[d];
        Ji(o, m.getFlatCoordinates()), c.push(o.length);
      }
      const h = r.length === 0 ? this.getLayout() : r[0].getLayout();
      this.setFlatCoordinates(h, o), (this.ends_ = c);
    }
  }
  appendLineString(t) {
    Ji(this.flatCoordinates, t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed();
  }
  clone() {
    const t = new Nu(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice(),
    );
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, r) {
    return r < nl(this.getExtent(), t, i)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Rd(this.flatCoordinates, 0, this.ends_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Ad(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          !1,
          t,
          i,
          s,
          r,
        ));
  }
  getCoordinateAtM(t, i, s) {
    return (this.layout != "XYM" && this.layout != "XYZM") ||
      this.flatCoordinates.length === 0
      ? null
      : ((i = i !== void 0 ? i : !1),
        (s = s !== void 0 ? s : !1),
        JS(this.flatCoordinates, 0, this.ends_, this.stride, t, i, s));
  }
  getCoordinates() {
    return La(this.flatCoordinates, 0, this.ends_, this.stride);
  }
  getEnds() {
    return this.ends_;
  }
  getLineString(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new fr(
          this.flatCoordinates.slice(
            t === 0 ? 0 : this.ends_[t - 1],
            this.ends_[t],
          ),
          this.layout,
        );
  }
  getLineStrings() {
    const t = this.flatCoordinates,
      i = this.ends_,
      s = this.layout,
      r = [];
    let o = 0;
    for (let c = 0, h = i.length; c < h; ++c) {
      const d = i[c],
        _ = new fr(t.slice(o, d), s);
      r.push(_), (o = d);
    }
    return r;
  }
  getFlatMidpoints() {
    const t = [],
      i = this.flatCoordinates;
    let s = 0;
    const r = this.ends_,
      o = this.stride;
    for (let c = 0, h = r.length; c < h; ++c) {
      const d = r[c],
        _ = Ou(i, s, d, o, 0.5);
      Ji(t, _), (s = d);
    }
    return t;
  }
  getSimplifiedGeometryInternal(t) {
    const i = [],
      s = [];
    return (
      (i.length = _p(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        t,
        i,
        0,
        s,
      )),
      new Nu(i, "XY", s)
    );
  }
  getType() {
    return "MultiLineString";
  }
  intersectsExtent(t) {
    return qS(this.flatCoordinates, 0, this.ends_, this.stride, t);
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 2),
      this.flatCoordinates || (this.flatCoordinates = []);
    const s = Za(this.flatCoordinates, 0, t, this.stride, this.ends_);
    (this.flatCoordinates.length = s.length === 0 ? 0 : s[s.length - 1]),
      this.changed();
  }
}
class nc extends ll {
  constructor(t, i) {
    super(),
      i && !Array.isArray(t[0])
        ? this.setFlatCoordinates(i, t)
        : this.setCoordinates(t, i);
  }
  appendPoint(t) {
    Ji(this.flatCoordinates, t.getFlatCoordinates()), this.changed();
  }
  clone() {
    const t = new nc(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, r) {
    if (r < nl(this.getExtent(), t, i)) return r;
    const o = this.flatCoordinates,
      c = this.stride;
    for (let h = 0, d = o.length; h < d; h += c) {
      const _ = Js(t, i, o[h], o[h + 1]);
      if (_ < r) {
        r = _;
        for (let m = 0; m < c; ++m) s[m] = o[h + m];
        s.length = c;
      }
    }
    return r;
  }
  getCoordinates() {
    return cs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getPoint(t) {
    const i = this.flatCoordinates.length / this.stride;
    return t < 0 || i <= t
      ? null
      : new el(
          this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride),
          this.layout,
        );
  }
  getPoints() {
    const t = this.flatCoordinates,
      i = this.layout,
      s = this.stride,
      r = [];
    for (let o = 0, c = t.length; o < c; o += s) {
      const h = new el(t.slice(o, o + s), i);
      r.push(h);
    }
    return r;
  }
  getType() {
    return "MultiPoint";
  }
  intersectsExtent(t) {
    const i = this.flatCoordinates,
      s = this.stride;
    for (let r = 0, o = i.length; r < o; r += s) {
      const c = i[r],
        h = i[r + 1];
      if (gd(t, c, h)) return !0;
    }
    return !1;
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = Ju(
        this.flatCoordinates,
        0,
        t,
        this.stride,
      )),
      this.changed();
  }
}
class Gu extends ll {
  constructor(t, i, s) {
    if (
      (super(),
      (this.endss_ = []),
      (this.flatInteriorPointsRevision_ = -1),
      (this.flatInteriorPoints_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      !s && !Array.isArray(t[0]))
    ) {
      const r = t,
        o = [],
        c = [];
      for (let h = 0, d = r.length; h < d; ++h) {
        const _ = r[h],
          m = o.length,
          y = _.getEnds();
        for (let v = 0, S = y.length; v < S; ++v) y[v] += m;
        Ji(o, _.getFlatCoordinates()), c.push(y);
      }
      (i = r.length === 0 ? this.getLayout() : r[0].getLayout()),
        (t = o),
        (s = c);
    }
    i !== void 0 && s
      ? (this.setFlatCoordinates(i, t), (this.endss_ = s))
      : this.setCoordinates(t, i);
  }
  appendPolygon(t) {
    let i;
    if (!this.flatCoordinates)
      (this.flatCoordinates = t.getFlatCoordinates().slice()),
        (i = t.getEnds().slice()),
        this.endss_.push();
    else {
      const s = this.flatCoordinates.length;
      Ji(this.flatCoordinates, t.getFlatCoordinates()),
        (i = t.getEnds().slice());
      for (let r = 0, o = i.length; r < o; ++r) i[r] += s;
    }
    this.endss_.push(i), this.changed();
  }
  clone() {
    const t = this.endss_.length,
      i = new Array(t);
    for (let r = 0; r < t; ++r) i[r] = this.endss_[r].slice();
    const s = new Gu(this.flatCoordinates.slice(), this.layout, i);
    return s.applyProperties(this), s;
  }
  closestPointXY(t, i, s, r) {
    return r < nl(this.getExtent(), t, i)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            kS(this.flatCoordinates, 0, this.endss_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        BS(
          this.getOrientedFlatCoordinates(),
          0,
          this.endss_,
          this.stride,
          this.maxDelta_,
          !0,
          t,
          i,
          s,
          r,
        ));
  }
  containsXY(t, i) {
    return KS(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      t,
      i,
    );
  }
  getArea() {
    return YS(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
  }
  getCoordinates(t) {
    let i;
    return (
      t !== void 0
        ? ((i = this.getOrientedFlatCoordinates().slice()),
          ed(i, 0, this.endss_, this.stride, t))
        : (i = this.flatCoordinates),
      td(i, 0, this.endss_, this.stride)
    );
  }
  getEndss() {
    return this.endss_;
  }
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const t = Fp(this.flatCoordinates, 0, this.endss_, this.stride);
      (this.flatInteriorPoints_ = mp(
        this.getOrientedFlatCoordinates(),
        0,
        this.endss_,
        this.stride,
        t,
      )),
        (this.flatInteriorPointsRevision_ = this.getRevision());
    }
    return this.flatInteriorPoints_;
  }
  getInteriorPoints() {
    return new nc(this.getFlatInteriorPoints().slice(), "XYM");
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      Ep(t, 0, this.endss_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = ed(
            this.orientedFlatCoordinates_,
            0,
            this.endss_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision());
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(t) {
    const i = [],
      s = [];
    return (
      (i.length = jS(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride,
        Math.sqrt(t),
        i,
        0,
        s,
      )),
      new Gu(i, "XY", s)
    );
  }
  getPolygon(t) {
    if (t < 0 || this.endss_.length <= t) return null;
    let i;
    if (t === 0) i = 0;
    else {
      const o = this.endss_[t - 1];
      i = o[o.length - 1];
    }
    const s = this.endss_[t].slice(),
      r = s[s.length - 1];
    if (i !== 0) for (let o = 0, c = s.length; o < c; ++o) s[o] -= i;
    return new _s(this.flatCoordinates.slice(i, r), this.layout, s);
  }
  getPolygons() {
    const t = this.layout,
      i = this.flatCoordinates,
      s = this.endss_,
      r = [];
    let o = 0;
    for (let c = 0, h = s.length; c < h; ++c) {
      const d = s[c].slice(),
        _ = d[d.length - 1];
      if (o !== 0) for (let y = 0, v = d.length; y < v; ++y) d[y] -= o;
      const m = new _s(i.slice(o, _), t, d);
      r.push(m), (o = _);
    }
    return r;
  }
  getType() {
    return "MultiPolygon";
  }
  intersectsExtent(t) {
    return VS(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      t,
    );
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 3),
      this.flatCoordinates || (this.flatCoordinates = []);
    const s = gp(this.flatCoordinates, 0, t, this.stride, this.endss_);
    if (s.length === 0) this.flatCoordinates.length = 0;
    else {
      const r = s[s.length - 1];
      this.flatCoordinates.length = r.length === 0 ? 0 : r[r.length - 1];
    }
    this.changed();
  }
}
const gy = Ni();
class si {
  constructor(t, i, s, r, o, c) {
    this.styleFunction,
      this.extent_,
      (this.id_ = c),
      (this.type_ = t),
      (this.flatCoordinates_ = i),
      (this.flatInteriorPoints_ = null),
      (this.flatMidpoints_ = null),
      (this.ends_ = s || null),
      (this.properties_ = o),
      this.squaredTolerance_,
      (this.stride_ = r),
      this.simplifiedGeometry_;
  }
  get(t) {
    return this.properties_[t];
  }
  getExtent() {
    return (
      this.extent_ ||
        (this.extent_ =
          this.type_ === "Point"
            ? qy(this.flatCoordinates_)
            : _d(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2)),
      this.extent_
    );
  }
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      const t = gs(this.getExtent());
      this.flatInteriorPoints_ = Od(
        this.flatCoordinates_,
        0,
        this.ends_,
        2,
        t,
        0,
      );
    }
    return this.flatInteriorPoints_;
  }
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      const t = QS(this.flatCoordinates_, this.ends_),
        i = Fp(this.flatCoordinates_, 0, t, 2);
      this.flatInteriorPoints_ = mp(this.flatCoordinates_, 0, t, 2, i);
    }
    return this.flatInteriorPoints_;
  }
  getFlatMidpoint() {
    return (
      this.flatMidpoints_ ||
        (this.flatMidpoints_ = Ou(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          0.5,
        )),
      this.flatMidpoints_
    );
  }
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      const t = this.flatCoordinates_;
      let i = 0;
      const s = this.ends_;
      for (let r = 0, o = s.length; r < o; ++r) {
        const c = s[r],
          h = Ou(t, i, c, 2, 0.5);
        Ji(this.flatMidpoints_, h), (i = c);
      }
    }
    return this.flatMidpoints_;
  }
  getId() {
    return this.id_;
  }
  getOrientedFlatCoordinates() {
    return this.flatCoordinates_;
  }
  getGeometry() {
    return this;
  }
  getSimplifiedGeometry(t) {
    return this;
  }
  simplifyTransformed(t, i) {
    return this;
  }
  getProperties() {
    return this.properties_;
  }
  getPropertiesInternal() {
    return this.properties_;
  }
  getStride() {
    return this.stride_;
  }
  getStyleFunction() {
    return this.styleFunction;
  }
  getType() {
    return this.type_;
  }
  transform(t) {
    t = Kt(t);
    const i = t.getExtent(),
      s = t.getWorldExtent();
    if (i && s) {
      const r = Fe(s) / Fe(i);
      On(gy, s[0], s[3], r, -r, 0, 0, 0),
        ds(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          gy,
          this.flatCoordinates_,
        );
    }
  }
  applyTransform(t) {
    t(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
  }
  clone() {
    var t;
    return new si(
      this.type_,
      this.flatCoordinates_.slice(),
      (t = this.ends_) == null ? void 0 : t.slice(),
      this.stride_,
      Object.assign({}, this.properties_),
      this.id_,
    );
  }
  getEnds() {
    return this.ends_;
  }
  enableSimplifyTransformed() {
    return (
      (this.simplifyTransformed = Zy((t, i) => {
        if (t === this.squaredTolerance_) return this.simplifiedGeometry_;
        (this.simplifiedGeometry_ = this.clone()),
          i && this.simplifiedGeometry_.applyTransform(i);
        const s = this.simplifiedGeometry_.getFlatCoordinates();
        let r;
        switch (this.type_) {
          case "LineString":
            (s.length = $u(
              s,
              0,
              this.simplifiedGeometry_.flatCoordinates_.length,
              this.simplifiedGeometry_.stride_,
              t,
              s,
              0,
            )),
              (r = [s.length]);
            break;
          case "MultiLineString":
            (r = []),
              (s.length = _p(
                s,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                t,
                s,
                0,
                r,
              ));
            break;
          case "Polygon":
            (r = []),
              (s.length = wd(
                s,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                Math.sqrt(t),
                s,
                0,
                r,
              ));
            break;
        }
        return (
          r &&
            (this.simplifiedGeometry_ = new si(
              this.type_,
              s,
              r,
              2,
              this.properties_,
              this.id_,
            )),
          (this.squaredTolerance_ = t),
          this.simplifiedGeometry_
        );
      })),
      this
    );
  }
}
si.prototype.getFlatCoordinates = si.prototype.getOrientedFlatCoordinates;
function Up(l, t, i = 0, s = l.length - 1, r = Gx) {
  for (; s > i; ) {
    if (s - i > 600) {
      const d = s - i + 1,
        _ = t - i + 1,
        m = Math.log(d),
        y = 0.5 * Math.exp((2 * m) / 3),
        v = 0.5 * Math.sqrt((m * y * (d - y)) / d) * (_ - d / 2 < 0 ? -1 : 1),
        S = Math.max(i, Math.floor(t - (_ * y) / d + v)),
        x = Math.min(s, Math.floor(t + ((d - _) * y) / d + v));
      Up(l, t, S, x, r);
    }
    const o = l[t];
    let c = i,
      h = s;
    for (va(l, i, t), r(l[s], o) > 0 && va(l, i, s); c < h; ) {
      for (va(l, c, h), c++, h--; r(l[c], o) < 0; ) c++;
      for (; r(l[h], o) > 0; ) h--;
    }
    r(l[i], o) === 0 ? va(l, i, h) : (h++, va(l, h, s)),
      h <= t && (i = h + 1),
      t <= h && (s = h - 1);
  }
}
function va(l, t, i) {
  const s = l[t];
  (l[t] = l[i]), (l[i] = s);
}
function Gx(l, t) {
  return l < t ? -1 : l > t ? 1 : 0;
}
let Xp = class {
  constructor(t = 9) {
    (this._maxEntries = Math.max(4, t)),
      (this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4))),
      this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let i = this.data;
    const s = [];
    if (!_u(t, i)) return s;
    const r = this.toBBox,
      o = [];
    for (; i; ) {
      for (let c = 0; c < i.children.length; c++) {
        const h = i.children[c],
          d = i.leaf ? r(h) : h;
        _u(t, d) &&
          (i.leaf ? s.push(h) : Lf(t, d) ? this._all(h, s) : o.push(h));
      }
      i = o.pop();
    }
    return s;
  }
  collides(t) {
    let i = this.data;
    if (!_u(t, i)) return !1;
    const s = [];
    for (; i; ) {
      for (let r = 0; r < i.children.length; r++) {
        const o = i.children[r],
          c = i.leaf ? this.toBBox(o) : o;
        if (_u(t, c)) {
          if (i.leaf || Lf(t, c)) return !0;
          s.push(o);
        }
      }
      i = s.pop();
    }
    return !1;
  }
  load(t) {
    if (!(t && t.length)) return this;
    if (t.length < this._minEntries) {
      for (let s = 0; s < t.length; s++) this.insert(t[s]);
      return this;
    }
    let i = this._build(t.slice(), 0, t.length - 1, 0);
    if (!this.data.children.length) this.data = i;
    else if (this.data.height === i.height) this._splitRoot(this.data, i);
    else {
      if (this.data.height < i.height) {
        const s = this.data;
        (this.data = i), (i = s);
      }
      this._insert(i, this.data.height - i.height - 1, !0);
    }
    return this;
  }
  insert(t) {
    return t && this._insert(t, this.data.height - 1), this;
  }
  clear() {
    return (this.data = Jl([])), this;
  }
  remove(t, i) {
    if (!t) return this;
    let s = this.data;
    const r = this.toBBox(t),
      o = [],
      c = [];
    let h, d, _;
    for (; s || o.length; ) {
      if (
        (s || ((s = o.pop()), (d = o[o.length - 1]), (h = c.pop()), (_ = !0)),
        s.leaf)
      ) {
        const m = Fx(t, s.children, i);
        if (m !== -1)
          return s.children.splice(m, 1), o.push(s), this._condense(o), this;
      }
      !_ && !s.leaf && Lf(s, r)
        ? (o.push(s), c.push(h), (h = 0), (d = s), (s = s.children[0]))
        : d
          ? (h++, (s = d.children[h]), (_ = !1))
          : (s = null);
    }
    return this;
  }
  toBBox(t) {
    return t;
  }
  compareMinX(t, i) {
    return t.minX - i.minX;
  }
  compareMinY(t, i) {
    return t.minY - i.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(t) {
    return (this.data = t), this;
  }
  _all(t, i) {
    const s = [];
    for (; t; )
      t.leaf ? i.push(...t.children) : s.push(...t.children), (t = s.pop());
    return i;
  }
  _build(t, i, s, r) {
    const o = s - i + 1;
    let c = this._maxEntries,
      h;
    if (o <= c) return (h = Jl(t.slice(i, s + 1))), jl(h, this.toBBox), h;
    r ||
      ((r = Math.ceil(Math.log(o) / Math.log(c))),
      (c = Math.ceil(o / Math.pow(c, r - 1)))),
      (h = Jl([])),
      (h.leaf = !1),
      (h.height = r);
    const d = Math.ceil(o / c),
      _ = d * Math.ceil(Math.sqrt(c));
    _y(t, i, s, _, this.compareMinX);
    for (let m = i; m <= s; m += _) {
      const y = Math.min(m + _ - 1, s);
      _y(t, m, y, d, this.compareMinY);
      for (let v = m; v <= y; v += d) {
        const S = Math.min(v + d - 1, y);
        h.children.push(this._build(t, v, S, r - 1));
      }
    }
    return jl(h, this.toBBox), h;
  }
  _chooseSubtree(t, i, s, r) {
    for (; r.push(i), !(i.leaf || r.length - 1 === s); ) {
      let o = 1 / 0,
        c = 1 / 0,
        h;
      for (let d = 0; d < i.children.length; d++) {
        const _ = i.children[d],
          m = Df(_),
          y = Yx(t, _) - m;
        y < c
          ? ((c = y), (o = m < o ? m : o), (h = _))
          : y === c && m < o && ((o = m), (h = _));
      }
      i = h || i.children[0];
    }
    return i;
  }
  _insert(t, i, s) {
    const r = s ? t : this.toBBox(t),
      o = [],
      c = this._chooseSubtree(r, this.data, i, o);
    for (
      c.children.push(t), Ta(c, r);
      i >= 0 && o[i].children.length > this._maxEntries;

    )
      this._split(o, i), i--;
    this._adjustParentBBoxes(r, o, i);
  }
  _split(t, i) {
    const s = t[i],
      r = s.children.length,
      o = this._minEntries;
    this._chooseSplitAxis(s, o, r);
    const c = this._chooseSplitIndex(s, o, r),
      h = Jl(s.children.splice(c, s.children.length - c));
    (h.height = s.height),
      (h.leaf = s.leaf),
      jl(s, this.toBBox),
      jl(h, this.toBBox),
      i ? t[i - 1].children.push(h) : this._splitRoot(s, h);
  }
  _splitRoot(t, i) {
    (this.data = Jl([t, i])),
      (this.data.height = t.height + 1),
      (this.data.leaf = !1),
      jl(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, i, s) {
    let r,
      o = 1 / 0,
      c = 1 / 0;
    for (let h = i; h <= s - i; h++) {
      const d = xa(t, 0, h, this.toBBox),
        _ = xa(t, h, s, this.toBBox),
        m = kx(d, _),
        y = Df(d) + Df(_);
      m < o
        ? ((o = m), (r = h), (c = y < c ? y : c))
        : m === o && y < c && ((c = y), (r = h));
    }
    return r || s - i;
  }
  _chooseSplitAxis(t, i, s) {
    const r = t.leaf ? this.compareMinX : Ux,
      o = t.leaf ? this.compareMinY : Xx,
      c = this._allDistMargin(t, i, s, r),
      h = this._allDistMargin(t, i, s, o);
    c < h && t.children.sort(r);
  }
  _allDistMargin(t, i, s, r) {
    t.children.sort(r);
    const o = this.toBBox,
      c = xa(t, 0, i, o),
      h = xa(t, s - i, s, o);
    let d = gu(c) + gu(h);
    for (let _ = i; _ < s - i; _++) {
      const m = t.children[_];
      Ta(c, t.leaf ? o(m) : m), (d += gu(c));
    }
    for (let _ = s - i - 1; _ >= i; _--) {
      const m = t.children[_];
      Ta(h, t.leaf ? o(m) : m), (d += gu(h));
    }
    return d;
  }
  _adjustParentBBoxes(t, i, s) {
    for (let r = s; r >= 0; r--) Ta(i[r], t);
  }
  _condense(t) {
    for (let i = t.length - 1, s; i >= 0; i--)
      t[i].children.length === 0
        ? i > 0
          ? ((s = t[i - 1].children), s.splice(s.indexOf(t[i]), 1))
          : this.clear()
        : jl(t[i], this.toBBox);
  }
};
function Fx(l, t, i) {
  if (!i) return t.indexOf(l);
  for (let s = 0; s < t.length; s++) if (i(l, t[s])) return s;
  return -1;
}
function jl(l, t) {
  xa(l, 0, l.children.length, t, l);
}
function xa(l, t, i, s, r) {
  r || (r = Jl(null)),
    (r.minX = 1 / 0),
    (r.minY = 1 / 0),
    (r.maxX = -1 / 0),
    (r.maxY = -1 / 0);
  for (let o = t; o < i; o++) {
    const c = l.children[o];
    Ta(r, l.leaf ? s(c) : c);
  }
  return r;
}
function Ta(l, t) {
  return (
    (l.minX = Math.min(l.minX, t.minX)),
    (l.minY = Math.min(l.minY, t.minY)),
    (l.maxX = Math.max(l.maxX, t.maxX)),
    (l.maxY = Math.max(l.maxY, t.maxY)),
    l
  );
}
function Ux(l, t) {
  return l.minX - t.minX;
}
function Xx(l, t) {
  return l.minY - t.minY;
}
function Df(l) {
  return (l.maxX - l.minX) * (l.maxY - l.minY);
}
function gu(l) {
  return l.maxX - l.minX + (l.maxY - l.minY);
}
function Yx(l, t) {
  return (
    (Math.max(t.maxX, l.maxX) - Math.min(t.minX, l.minX)) *
    (Math.max(t.maxY, l.maxY) - Math.min(t.minY, l.minY))
  );
}
function kx(l, t) {
  const i = Math.max(l.minX, t.minX),
    s = Math.max(l.minY, t.minY),
    r = Math.min(l.maxX, t.maxX),
    o = Math.min(l.maxY, t.maxY);
  return Math.max(0, r - i) * Math.max(0, o - s);
}
function Lf(l, t) {
  return (
    l.minX <= t.minX && l.minY <= t.minY && t.maxX <= l.maxX && t.maxY <= l.maxY
  );
}
function _u(l, t) {
  return (
    t.minX <= l.maxX && t.minY <= l.maxY && t.maxX >= l.minX && t.maxY >= l.minY
  );
}
function Jl(l) {
  return {
    children: l,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0,
  };
}
function _y(l, t, i, s, r) {
  const o = [t, i];
  for (; o.length; ) {
    if (((i = o.pop()), (t = o.pop()), i - t <= s)) continue;
    const c = t + Math.ceil((i - t) / s / 2) * s;
    Up(l, c, t, i, r), o.push(t, c, c, i);
  }
}
class my {
  constructor(t) {
    (this.rbush_ = new Xp(t)), (this.items_ = {});
  }
  insert(t, i) {
    const s = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3], value: i };
    this.rbush_.insert(s), (this.items_[It(i)] = s);
  }
  load(t, i) {
    const s = new Array(i.length);
    for (let r = 0, o = i.length; r < o; r++) {
      const c = t[r],
        h = i[r],
        d = { minX: c[0], minY: c[1], maxX: c[2], maxY: c[3], value: h };
      (s[r] = d), (this.items_[It(h)] = d);
    }
    this.rbush_.load(s);
  }
  remove(t) {
    const i = It(t),
      s = this.items_[i];
    return delete this.items_[i], this.rbush_.remove(s) !== null;
  }
  update(t, i) {
    const s = this.items_[It(i)],
      r = [s.minX, s.minY, s.maxX, s.maxY];
    Oa(r, t) || (this.remove(i), this.insert(t, i));
  }
  getAll() {
    return this.rbush_.all().map(function (i) {
      return i.value;
    });
  }
  getInExtent(t) {
    const i = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3] };
    return this.rbush_.search(i).map(function (r) {
      return r.value;
    });
  }
  forEach(t) {
    return this.forEach_(this.getAll(), t);
  }
  forEachInExtent(t, i) {
    return this.forEach_(this.getInExtent(t), i);
  }
  forEach_(t, i) {
    let s;
    for (let r = 0, o = t.length; r < o; r++) if (((s = i(t[r])), s)) return s;
    return s;
  }
  isEmpty() {
    return tl(this.items_);
  }
  clear() {
    this.rbush_.clear(), (this.items_ = {});
  }
  getExtent(t) {
    const i = this.rbush_.toJSON();
    return Mn(i.minX, i.minY, i.maxX, i.maxY, t);
  }
  concat(t) {
    this.rbush_.load(t.rbush_.all());
    for (const i in t.items_) this.items_[i] = t.items_[i];
  }
}
class Yp extends $i {
  constructor(t) {
    super(),
      (this.projection = Kt(t.projection)),
      (this.attributions_ = yy(t.attributions)),
      (this.attributionsCollapsible_ = t.attributionsCollapsible ?? !0),
      (this.loading = !1),
      (this.state_ = t.state !== void 0 ? t.state : "ready"),
      (this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1),
      (this.interpolate_ = !!t.interpolate),
      (this.viewResolver = null),
      (this.viewRejector = null);
    const i = this;
    this.viewPromise_ = new Promise(function (s, r) {
      (i.viewResolver = s), (i.viewRejector = r);
    });
  }
  getAttributions() {
    return this.attributions_;
  }
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  }
  getProjection() {
    return this.projection;
  }
  getResolutions(t) {
    return null;
  }
  getView() {
    return this.viewPromise_;
  }
  getState() {
    return this.state_;
  }
  getWrapX() {
    return this.wrapX_;
  }
  getInterpolate() {
    return this.interpolate_;
  }
  refresh() {
    this.changed();
  }
  setAttributions(t) {
    (this.attributions_ = yy(t)), this.changed();
  }
  setState(t) {
    (this.state_ = t), this.changed();
  }
}
function yy(l) {
  return l
    ? typeof l == "function"
      ? l
      : (Array.isArray(l) || (l = [l]), (t) => l)
    : null;
}
const vi = {
  ADDFEATURE: "addfeature",
  CHANGEFEATURE: "changefeature",
  CLEAR: "clear",
  REMOVEFEATURE: "removefeature",
  FEATURESLOADSTART: "featuresloadstart",
  FEATURESLOADEND: "featuresloadend",
  FEATURESLOADERROR: "featuresloaderror",
};
class es extends Dn {
  constructor(t, i, s) {
    super(t), (this.feature = i), (this.features = s);
  }
}
class py extends Yp {
  constructor(t) {
    (t = t || {}),
      super({
        attributions: t.attributions,
        interpolate: !0,
        projection: void 0,
        state: "ready",
        wrapX: t.wrapX !== void 0 ? t.wrapX : !0,
      }),
      this.on,
      this.once,
      this.un,
      (this.loader_ = or),
      (this.format_ = t.format || null),
      (this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps),
      (this.url_ = t.url),
      t.loader !== void 0
        ? (this.loader_ = t.loader)
        : this.url_ !== void 0 &&
          (Lt(this.format_, "`format` must be set when `url` is set"),
          (this.loader_ = dy(this.url_, this.format_))),
      (this.strategy_ = t.strategy !== void 0 ? t.strategy : Nx);
    const i = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0;
    (this.featuresRtree_ = i ? new my() : null),
      (this.loadedExtentsRtree_ = new my()),
      (this.loadingExtentsCount_ = 0),
      (this.nullGeometryFeatures_ = {}),
      (this.idIndex_ = {}),
      (this.uidIndex_ = {}),
      (this.featureChangeKeys_ = {}),
      (this.featuresCollection_ = null);
    let s, r;
    Array.isArray(t.features)
      ? (r = t.features)
      : t.features && ((s = t.features), (r = s.getArray())),
      !i && s === void 0 && (s = new Wi(r)),
      r !== void 0 && this.addFeaturesInternal(r),
      s !== void 0 && this.bindFeaturesCollection_(s);
  }
  addFeature(t) {
    this.addFeatureInternal(t), this.changed();
  }
  addFeatureInternal(t) {
    const i = It(t);
    if (!this.addToIndex_(i, t)) {
      this.featuresCollection_ && this.featuresCollection_.remove(t);
      return;
    }
    this.setupChangeEvents_(i, t);
    const s = t.getGeometry();
    if (s) {
      const r = s.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(r, t);
    } else this.nullGeometryFeatures_[i] = t;
    this.dispatchEvent(new es(vi.ADDFEATURE, t));
  }
  setupChangeEvents_(t, i) {
    i instanceof si ||
      (this.featureChangeKeys_[t] = [
        Mt(i, pt.CHANGE, this.handleFeatureChange_, this),
        Mt(i, ar.PROPERTYCHANGE, this.handleFeatureChange_, this),
      ]);
  }
  addToIndex_(t, i) {
    let s = !0;
    if (i.getId() !== void 0) {
      const r = String(i.getId());
      if (!(r in this.idIndex_)) this.idIndex_[r] = i;
      else if (i instanceof si) {
        const o = this.idIndex_[r];
        o instanceof si
          ? Array.isArray(o)
            ? o.push(i)
            : (this.idIndex_[r] = [o, i])
          : (s = !1);
      } else s = !1;
    }
    return (
      s &&
        (Lt(
          !(t in this.uidIndex_),
          "The passed `feature` was already added to the source",
        ),
        (this.uidIndex_[t] = i)),
      s
    );
  }
  addFeatures(t) {
    this.addFeaturesInternal(t), this.changed();
  }
  addFeaturesInternal(t) {
    const i = [],
      s = [],
      r = [];
    for (let o = 0, c = t.length; o < c; o++) {
      const h = t[o],
        d = It(h);
      this.addToIndex_(d, h) && s.push(h);
    }
    for (let o = 0, c = s.length; o < c; o++) {
      const h = s[o],
        d = It(h);
      this.setupChangeEvents_(d, h);
      const _ = h.getGeometry();
      if (_) {
        const m = _.getExtent();
        i.push(m), r.push(h);
      } else this.nullGeometryFeatures_[d] = h;
    }
    if (
      (this.featuresRtree_ && this.featuresRtree_.load(i, r),
      this.hasListener(vi.ADDFEATURE))
    )
      for (let o = 0, c = s.length; o < c; o++)
        this.dispatchEvent(new es(vi.ADDFEATURE, s[o]));
  }
  bindFeaturesCollection_(t) {
    let i = !1;
    this.addEventListener(vi.ADDFEATURE, function (s) {
      i || ((i = !0), t.push(s.feature), (i = !1));
    }),
      this.addEventListener(vi.REMOVEFEATURE, function (s) {
        i || ((i = !0), t.remove(s.feature), (i = !1));
      }),
      t.addEventListener(Be.ADD, (s) => {
        i || ((i = !0), this.addFeature(s.element), (i = !1));
      }),
      t.addEventListener(Be.REMOVE, (s) => {
        i || ((i = !0), this.removeFeature(s.element), (i = !1));
      }),
      (this.featuresCollection_ = t);
  }
  clear(t) {
    if (t) {
      for (const s in this.featureChangeKeys_)
        this.featureChangeKeys_[s].forEach(Zt);
      this.featuresCollection_ ||
        ((this.featureChangeKeys_ = {}),
        (this.idIndex_ = {}),
        (this.uidIndex_ = {}));
    } else if (this.featuresRtree_) {
      this.featuresRtree_.forEach((s) => {
        this.removeFeatureInternal(s);
      });
      for (const s in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[s]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(),
      this.featuresRtree_ && this.featuresRtree_.clear(),
      (this.nullGeometryFeatures_ = {});
    const i = new es(vi.CLEAR);
    this.dispatchEvent(i), this.changed();
  }
  forEachFeature(t) {
    if (this.featuresRtree_) return this.featuresRtree_.forEach(t);
    this.featuresCollection_ && this.featuresCollection_.forEach(t);
  }
  forEachFeatureAtCoordinateDirect(t, i) {
    const s = [t[0], t[1], t[0], t[1]];
    return this.forEachFeatureInExtent(s, function (r) {
      const o = r.getGeometry();
      if (o instanceof si || o.intersectsCoordinate(t)) return i(r);
    });
  }
  forEachFeatureInExtent(t, i) {
    if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(t, i);
    this.featuresCollection_ && this.featuresCollection_.forEach(i);
  }
  forEachFeatureIntersectingExtent(t, i) {
    return this.forEachFeatureInExtent(t, function (s) {
      const r = s.getGeometry();
      if (r instanceof si || r.intersectsExtent(t)) {
        const o = i(s);
        if (o) return o;
      }
    });
  }
  getFeaturesCollection() {
    return this.featuresCollection_;
  }
  getFeatures() {
    let t;
    return (
      this.featuresCollection_
        ? (t = this.featuresCollection_.getArray().slice(0))
        : this.featuresRtree_ &&
          ((t = this.featuresRtree_.getAll()),
          tl(this.nullGeometryFeatures_) ||
            Ji(t, Object.values(this.nullGeometryFeatures_))),
      t
    );
  }
  getFeaturesAtCoordinate(t) {
    const i = [];
    return (
      this.forEachFeatureAtCoordinateDirect(t, function (s) {
        i.push(s);
      }),
      i
    );
  }
  getFeaturesInExtent(t, i) {
    if (this.featuresRtree_) {
      if (!(i && i.canWrapX() && this.getWrapX()))
        return this.featuresRtree_.getInExtent(t);
      const r = tp(t, i);
      return [].concat(...r.map((o) => this.featuresRtree_.getInExtent(o)));
    }
    return this.featuresCollection_
      ? this.featuresCollection_.getArray().slice(0)
      : [];
  }
  getClosestFeatureToCoordinate(t, i) {
    const s = t[0],
      r = t[1];
    let o = null;
    const c = [NaN, NaN];
    let h = 1 / 0;
    const d = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return (
      (i = i || Ma),
      this.featuresRtree_.forEachInExtent(d, function (_) {
        if (i(_)) {
          const m = _.getGeometry(),
            y = h;
          if (
            ((h = m instanceof si ? 0 : m.closestPointXY(s, r, c, h)), h < y)
          ) {
            o = _;
            const v = Math.sqrt(h);
            (d[0] = s - v), (d[1] = r - v), (d[2] = s + v), (d[3] = r + v);
          }
        }
      }),
      o
    );
  }
  getExtent(t) {
    return this.featuresRtree_.getExtent(t);
  }
  getFeatureById(t) {
    const i = this.idIndex_[t.toString()];
    return i !== void 0 ? i : null;
  }
  getFeatureByUid(t) {
    const i = this.uidIndex_[t];
    return i !== void 0 ? i : null;
  }
  getFormat() {
    return this.format_;
  }
  getOverlaps() {
    return this.overlaps_;
  }
  getUrl() {
    return this.url_;
  }
  handleFeatureChange_(t) {
    const i = t.target,
      s = It(i),
      r = i.getGeometry();
    if (!r)
      s in this.nullGeometryFeatures_ ||
        (this.featuresRtree_ && this.featuresRtree_.remove(i),
        (this.nullGeometryFeatures_[s] = i));
    else {
      const c = r.getExtent();
      s in this.nullGeometryFeatures_
        ? (delete this.nullGeometryFeatures_[s],
          this.featuresRtree_ && this.featuresRtree_.insert(c, i))
        : this.featuresRtree_ && this.featuresRtree_.update(c, i);
    }
    const o = i.getId();
    if (o !== void 0) {
      const c = o.toString();
      this.idIndex_[c] !== i &&
        (this.removeFromIdIndex_(i), (this.idIndex_[c] = i));
    } else this.removeFromIdIndex_(i), (this.uidIndex_[s] = i);
    this.changed(), this.dispatchEvent(new es(vi.CHANGEFEATURE, i));
  }
  hasFeature(t) {
    const i = t.getId();
    return i !== void 0 ? i in this.idIndex_ : It(t) in this.uidIndex_;
  }
  isEmpty() {
    return this.featuresRtree_
      ? this.featuresRtree_.isEmpty() && tl(this.nullGeometryFeatures_)
      : this.featuresCollection_
        ? this.featuresCollection_.getLength() === 0
        : !0;
  }
  loadFeatures(t, i, s) {
    const r = this.loadedExtentsRtree_,
      o = this.strategy_(t, i, s);
    for (let c = 0, h = o.length; c < h; ++c) {
      const d = o[c];
      r.forEachInExtent(d, function (m) {
        return Sa(m.extent, d);
      }) ||
        (++this.loadingExtentsCount_,
        this.dispatchEvent(new es(vi.FEATURESLOADSTART)),
        this.loader_.call(
          this,
          d,
          i,
          s,
          (m) => {
            --this.loadingExtentsCount_,
              this.dispatchEvent(new es(vi.FEATURESLOADEND, void 0, m));
          },
          () => {
            --this.loadingExtentsCount_,
              this.dispatchEvent(new es(vi.FEATURESLOADERROR));
          },
        ),
        r.insert(d, { extent: d.slice() }));
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0;
  }
  refresh() {
    this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
  }
  removeLoadedExtent(t) {
    const i = this.loadedExtentsRtree_,
      s = i.forEachInExtent(t, function (r) {
        if (Oa(r.extent, t)) return r;
      });
    s && i.remove(s);
  }
  removeFeatures(t) {
    let i = !1;
    for (let s = 0, r = t.length; s < r; ++s)
      i = this.removeFeatureInternal(t[s]) || i;
    i && this.changed();
  }
  removeFeature(t) {
    if (!t) return;
    this.removeFeatureInternal(t) && this.changed();
  }
  removeFeatureInternal(t) {
    const i = It(t);
    if (!(i in this.uidIndex_)) return !1;
    i in this.nullGeometryFeatures_
      ? delete this.nullGeometryFeatures_[i]
      : this.featuresRtree_ && this.featuresRtree_.remove(t);
    const s = this.featureChangeKeys_[i];
    s == null || s.forEach(Zt), delete this.featureChangeKeys_[i];
    const r = t.getId();
    if (r !== void 0) {
      const o = r.toString(),
        c = this.idIndex_[o];
      c === t
        ? delete this.idIndex_[o]
        : Array.isArray(c) &&
          (c.splice(c.indexOf(t), 1),
          c.length === 1 && (this.idIndex_[o] = c[0]));
    }
    return (
      delete this.uidIndex_[i],
      this.hasListener(vi.REMOVEFEATURE) &&
        this.dispatchEvent(new es(vi.REMOVEFEATURE, t)),
      !0
    );
  }
  removeFromIdIndex_(t) {
    for (const i in this.idIndex_)
      if (this.idIndex_[i] === t) {
        delete this.idIndex_[i];
        break;
      }
  }
  setLoader(t) {
    this.loader_ = t;
  }
  setUrl(t) {
    Lt(this.format_, "`format` must be set when `url` is set"),
      (this.url_ = t),
      this.setLoader(dy(t, this.format_));
  }
  setOverlaps(t) {
    (this.overlaps_ = t), this.changed();
  }
}
class Ka {
  constructor(t) {
    (t = t || {}),
      (this.patternImage_ = null),
      (this.color_ = null),
      t.color !== void 0 && this.setColor(t.color);
  }
  clone() {
    const t = this.getColor();
    return new Ka({ color: Array.isArray(t) ? t.slice() : t || void 0 });
  }
  getColor() {
    return this.color_;
  }
  setColor(t) {
    if (t !== null && typeof t == "object" && "src" in t) {
      const i = Fd(
        null,
        t.src,
        "anonymous",
        void 0,
        t.offset ? null : t.color ? t.color : null,
        !(t.offset && t.size),
      );
      i.ready().then(() => {
        this.patternImage_ = null;
      }),
        i.getImageState() === xt.IDLE && i.load(),
        i.getImageState() === xt.LOADING && (this.patternImage_ = i);
    }
    this.color_ = t;
  }
  getKey() {
    const t = this.getColor();
    return t
      ? t instanceof CanvasPattern || t instanceof CanvasGradient
        ? It(t)
        : typeof t == "object" && "src" in t
          ? t.src + ":" + t.offset
          : dr(t).toString()
      : "";
  }
  loading() {
    return !!this.patternImage_;
  }
  ready() {
    return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
  }
}
class sc {
  constructor(t) {
    (t = t || {}),
      (this.color_ = t.color !== void 0 ? t.color : null),
      (this.lineCap_ = t.lineCap),
      (this.lineDash_ = t.lineDash !== void 0 ? t.lineDash : null),
      (this.lineDashOffset_ = t.lineDashOffset),
      (this.lineJoin_ = t.lineJoin),
      (this.miterLimit_ = t.miterLimit),
      (this.width_ = t.width);
  }
  clone() {
    const t = this.getColor();
    return new sc({
      color: Array.isArray(t) ? t.slice() : t || void 0,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth(),
    });
  }
  getColor() {
    return this.color_;
  }
  getLineCap() {
    return this.lineCap_;
  }
  getLineDash() {
    return this.lineDash_;
  }
  getLineDashOffset() {
    return this.lineDashOffset_;
  }
  getLineJoin() {
    return this.lineJoin_;
  }
  getMiterLimit() {
    return this.miterLimit_;
  }
  getWidth() {
    return this.width_;
  }
  setColor(t) {
    this.color_ = t;
  }
  setLineCap(t) {
    this.lineCap_ = t;
  }
  setLineDash(t) {
    this.lineDash_ = t;
  }
  setLineDashOffset(t) {
    this.lineDashOffset_ = t;
  }
  setLineJoin(t) {
    this.lineJoin_ = t;
  }
  setMiterLimit(t) {
    this.miterLimit_ = t;
  }
  setWidth(t) {
    this.width_ = t;
  }
}
function vy(l) {
  return l[0] > 0 && l[1] > 0;
}
function Bx(l, t, i) {
  return (
    i === void 0 && (i = [0, 0]),
    (i[0] = (l[0] * t + 0.5) | 0),
    (i[1] = (l[1] * t + 0.5) | 0),
    i
  );
}
function Ke(l, t) {
  return Array.isArray(l)
    ? l
    : (t === void 0 ? (t = [l, l]) : ((t[0] = l), (t[1] = l)), t);
}
class lc {
  constructor(t) {
    (this.opacity_ = t.opacity),
      (this.rotateWithView_ = t.rotateWithView),
      (this.rotation_ = t.rotation),
      (this.scale_ = t.scale),
      (this.scaleArray_ = Ke(t.scale)),
      (this.displacement_ = t.displacement),
      (this.declutterMode_ = t.declutterMode);
  }
  clone() {
    const t = this.getScale();
    return new lc({
      opacity: this.getOpacity(),
      scale: Array.isArray(t) ? t.slice() : t,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode(),
    });
  }
  getOpacity() {
    return this.opacity_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getDisplacement() {
    return this.displacement_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  getAnchor() {
    return _t();
  }
  getImage(t) {
    return _t();
  }
  getHitDetectionImage() {
    return _t();
  }
  getPixelRatio(t) {
    return 1;
  }
  getImageState() {
    return _t();
  }
  getImageSize() {
    return _t();
  }
  getOrigin() {
    return _t();
  }
  getSize() {
    return _t();
  }
  setDisplacement(t) {
    this.displacement_ = t;
  }
  setOpacity(t) {
    this.opacity_ = t;
  }
  setRotateWithView(t) {
    this.rotateWithView_ = t;
  }
  setRotation(t) {
    this.rotation_ = t;
  }
  setScale(t) {
    (this.scale_ = t), (this.scaleArray_ = Ke(t));
  }
  listenImageChange(t) {
    _t();
  }
  load() {
    _t();
  }
  unlistenImageChange(t) {
    _t();
  }
  ready() {
    return Promise.resolve();
  }
}
class rc extends lc {
  constructor(t) {
    super({
      opacity: 1,
      rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
      rotation: t.rotation !== void 0 ? t.rotation : 0,
      scale: t.scale !== void 0 ? t.scale : 1,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      declutterMode: t.declutterMode,
    }),
      (this.hitDetectionCanvas_ = null),
      (this.fill_ = t.fill !== void 0 ? t.fill : null),
      (this.origin_ = [0, 0]),
      (this.points_ = t.points),
      (this.radius = t.radius),
      (this.radius2_ = t.radius2),
      (this.angle_ = t.angle !== void 0 ? t.angle : 0),
      (this.stroke_ = t.stroke !== void 0 ? t.stroke : null),
      this.size_,
      this.renderOptions_,
      (this.imageState_ =
        this.fill_ && this.fill_.loading() ? xt.LOADING : xt.LOADED),
      this.imageState_ === xt.LOADING &&
        this.ready().then(() => (this.imageState_ = xt.LOADED)),
      this.render();
  }
  clone() {
    const t = this.getScale(),
      i = new rc({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        points: this.getPoints(),
        radius: this.getRadius(),
        radius2: this.getRadius2(),
        angle: this.getAngle(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        scale: Array.isArray(t) ? t.slice() : t,
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      });
    return i.setOpacity(this.getOpacity()), i;
  }
  getAnchor() {
    const t = this.size_,
      i = this.getDisplacement(),
      s = this.getScaleArray();
    return [t[0] / 2 - i[0] / s[0], t[1] / 2 + i[1] / s[1]];
  }
  getAngle() {
    return this.angle_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(t) {
    (this.fill_ = t), this.render();
  }
  getHitDetectionImage() {
    return (
      this.hitDetectionCanvas_ ||
        (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(
          this.renderOptions_,
        )),
      this.hitDetectionCanvas_
    );
  }
  getImage(t) {
    var o, c;
    const i = (o = this.fill_) == null ? void 0 : o.getKey(),
      s =
        `${t},${this.angle_},${this.radius},${this.radius2_},${this.points_},${i}` +
        Object.values(this.renderOptions_).join(",");
    let r = (c = Si.get(s, null, null)) == null ? void 0 : c.getImage(1);
    if (!r) {
      const h = this.renderOptions_,
        d = Math.ceil(h.size * t),
        _ = me(d, d);
      this.draw_(h, _, t),
        (r = _.canvas),
        Si.set(s, null, null, new Mp(r, void 0, null, xt.LOADED, null));
    }
    return r;
  }
  getPixelRatio(t) {
    return t;
  }
  getImageSize() {
    return this.size_;
  }
  getImageState() {
    return this.imageState_;
  }
  getOrigin() {
    return this.origin_;
  }
  getPoints() {
    return this.points_;
  }
  getRadius() {
    return this.radius;
  }
  getRadius2() {
    return this.radius2_;
  }
  getSize() {
    return this.size_;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(t) {
    (this.stroke_ = t), this.render();
  }
  listenImageChange(t) {}
  load() {}
  unlistenImageChange(t) {}
  calculateLineJoinSize_(t, i, s) {
    if (i === 0 || this.points_ === 1 / 0 || (t !== "bevel" && t !== "miter"))
      return i;
    let r = this.radius,
      o = this.radius2_ === void 0 ? r : this.radius2_;
    if (r < o) {
      const j = r;
      (r = o), (o = j);
    }
    const c = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
      h = (2 * Math.PI) / c,
      d = o * Math.sin(h),
      _ = Math.sqrt(o * o - d * d),
      m = r - _,
      y = Math.sqrt(d * d + m * m),
      v = y / d;
    if (t === "miter" && v <= s) return v * i;
    const S = i / 2 / v,
      x = (i / 2) * (m / y),
      R = Math.sqrt((r + S) * (r + S) + x * x) - r;
    if (this.radius2_ === void 0 || t === "bevel") return R * 2;
    const A = r * Math.sin(h),
      O = Math.sqrt(r * r - A * A),
      G = o - O,
      D = Math.sqrt(A * A + G * G) / A;
    if (D <= s) {
      const j = (D * i) / 2 - o - r;
      return 2 * Math.max(R, j);
    }
    return R * 2;
  }
  createRenderOptions() {
    let t = gr,
      i = _r,
      s = 0,
      r = null,
      o = 0,
      c,
      h = 0;
    this.stroke_ &&
      ((c = Qi(this.stroke_.getColor() ?? Ga)),
      (h = this.stroke_.getWidth() ?? Ua),
      (r = this.stroke_.getLineDash()),
      (o = this.stroke_.getLineDashOffset() ?? 0),
      (i = this.stroke_.getLineJoin() ?? _r),
      (t = this.stroke_.getLineCap() ?? gr),
      (s = this.stroke_.getMiterLimit() ?? Na));
    const d = this.calculateLineJoinSize_(i, h, s),
      _ = Math.max(this.radius, this.radius2_ || 0),
      m = Math.ceil(2 * _ + d);
    return {
      strokeStyle: c,
      strokeWidth: h,
      size: m,
      lineCap: t,
      lineDash: r,
      lineDashOffset: o,
      lineJoin: i,
      miterLimit: s,
    };
  }
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const t = this.renderOptions_.size;
    (this.hitDetectionCanvas_ = null), (this.size_ = [t, t]);
  }
  draw_(t, i, s) {
    if (
      (i.scale(s, s),
      i.translate(t.size / 2, t.size / 2),
      this.createPath_(i),
      this.fill_)
    ) {
      let r = this.fill_.getColor();
      r === null && (r = He), (i.fillStyle = Qi(r)), i.fill();
    }
    t.strokeStyle &&
      ((i.strokeStyle = t.strokeStyle),
      (i.lineWidth = t.strokeWidth),
      t.lineDash &&
        (i.setLineDash(t.lineDash), (i.lineDashOffset = t.lineDashOffset)),
      (i.lineCap = t.lineCap),
      (i.lineJoin = t.lineJoin),
      (i.miterLimit = t.miterLimit),
      i.stroke());
  }
  createHitDetectionCanvas_(t) {
    let i;
    if (this.fill_) {
      let s = this.fill_.getColor(),
        r = 0;
      typeof s == "string" && (s = dr(s)),
        s === null
          ? (r = 1)
          : Array.isArray(s) && (r = s.length === 4 ? s[3] : 1),
        r === 0 &&
          ((i = me(t.size, t.size)), this.drawHitDetectionCanvas_(t, i));
    }
    return i ? i.canvas : this.getImage(1);
  }
  createPath_(t) {
    let i = this.points_;
    const s = this.radius;
    if (i === 1 / 0) t.arc(0, 0, s, 0, 2 * Math.PI);
    else {
      const r = this.radius2_ === void 0 ? s : this.radius2_;
      this.radius2_ !== void 0 && (i *= 2);
      const o = this.angle_ - Math.PI / 2,
        c = (2 * Math.PI) / i;
      for (let h = 0; h < i; h++) {
        const d = o + h * c,
          _ = h % 2 === 0 ? s : r;
        t.lineTo(_ * Math.cos(d), _ * Math.sin(d));
      }
      t.closePath();
    }
  }
  drawHitDetectionCanvas_(t, i) {
    i.translate(t.size / 2, t.size / 2),
      this.createPath_(i),
      (i.fillStyle = He),
      i.fill(),
      t.strokeStyle &&
        ((i.strokeStyle = t.strokeStyle),
        (i.lineWidth = t.strokeWidth),
        t.lineDash &&
          (i.setLineDash(t.lineDash), (i.lineDashOffset = t.lineDashOffset)),
        (i.lineJoin = t.lineJoin),
        (i.miterLimit = t.miterLimit),
        i.stroke());
  }
  ready() {
    return this.fill_ ? this.fill_.ready() : Promise.resolve();
  }
}
class ac extends rc {
  constructor(t) {
    (t = t || { radius: 5 }),
      super({
        points: 1 / 0,
        fill: t.fill,
        radius: t.radius,
        stroke: t.stroke,
        scale: t.scale !== void 0 ? t.scale : 1,
        rotation: t.rotation !== void 0 ? t.rotation : 0,
        rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
        displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
        declutterMode: t.declutterMode,
      });
  }
  clone() {
    const t = this.getScale(),
      i = new ac({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        radius: this.getRadius(),
        scale: Array.isArray(t) ? t.slice() : t,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      });
    return i.setOpacity(this.getOpacity()), i;
  }
  setRadius(t) {
    (this.radius = t), this.render();
  }
}
class $s {
  constructor(t) {
    (t = t || {}),
      (this.geometry_ = null),
      (this.geometryFunction_ = Ey),
      t.geometry !== void 0 && this.setGeometry(t.geometry),
      (this.fill_ = t.fill !== void 0 ? t.fill : null),
      (this.image_ = t.image !== void 0 ? t.image : null),
      (this.renderer_ = t.renderer !== void 0 ? t.renderer : null),
      (this.hitDetectionRenderer_ =
        t.hitDetectionRenderer !== void 0 ? t.hitDetectionRenderer : null),
      (this.stroke_ = t.stroke !== void 0 ? t.stroke : null),
      (this.text_ = t.text !== void 0 ? t.text : null),
      (this.zIndex_ = t.zIndex);
  }
  clone() {
    let t = this.getGeometry();
    return (
      t && typeof t == "object" && (t = t.clone()),
      new $s({
        geometry: t ?? void 0,
        fill: this.getFill() ? this.getFill().clone() : void 0,
        image: this.getImage() ? this.getImage().clone() : void 0,
        renderer: this.getRenderer() ?? void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        text: this.getText() ? this.getText().clone() : void 0,
        zIndex: this.getZIndex(),
      })
    );
  }
  getRenderer() {
    return this.renderer_;
  }
  setRenderer(t) {
    this.renderer_ = t;
  }
  setHitDetectionRenderer(t) {
    this.hitDetectionRenderer_ = t;
  }
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }
  getGeometry() {
    return this.geometry_;
  }
  getGeometryFunction() {
    return this.geometryFunction_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(t) {
    this.fill_ = t;
  }
  getImage() {
    return this.image_;
  }
  setImage(t) {
    this.image_ = t;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(t) {
    this.stroke_ = t;
  }
  getText() {
    return this.text_;
  }
  setText(t) {
    this.text_ = t;
  }
  getZIndex() {
    return this.zIndex_;
  }
  setGeometry(t) {
    typeof t == "function"
      ? (this.geometryFunction_ = t)
      : typeof t == "string"
        ? (this.geometryFunction_ = function (i) {
            return i.get(t);
          })
        : t
          ? t !== void 0 &&
            (this.geometryFunction_ = function () {
              return t;
            })
          : (this.geometryFunction_ = Ey),
      (this.geometry_ = t);
  }
  setZIndex(t) {
    this.zIndex_ = t;
  }
}
function Hx(l) {
  let t;
  if (typeof l == "function") t = l;
  else {
    let i;
    Array.isArray(l)
      ? (i = l)
      : (Lt(
          typeof l.getZIndex == "function",
          "Expected an `Style` or an array of `Style`",
        ),
        (i = [l])),
      (t = function () {
        return i;
      });
  }
  return t;
}
let zf = null;
function kp(l, t) {
  if (!zf) {
    const i = new Ka({ color: "rgba(255,255,255,0.4)" }),
      s = new sc({ color: "#3399CC", width: 1.25 });
    zf = [
      new $s({
        image: new ac({ fill: i, stroke: s, radius: 5 }),
        fill: i,
        stroke: s,
      }),
    ];
  }
  return zf;
}
function Ey(l) {
  return l.getGeometry();
}
const Px = "#333";
class Xd {
  constructor(t) {
    (t = t || {}),
      (this.font_ = t.font),
      (this.rotation_ = t.rotation),
      (this.rotateWithView_ = t.rotateWithView),
      (this.keepUpright_ = t.keepUpright),
      (this.scale_ = t.scale),
      (this.scaleArray_ = Ke(t.scale !== void 0 ? t.scale : 1)),
      (this.text_ = t.text),
      (this.textAlign_ = t.textAlign),
      (this.justify_ = t.justify),
      (this.repeat_ = t.repeat),
      (this.textBaseline_ = t.textBaseline),
      (this.fill_ = t.fill !== void 0 ? t.fill : new Ka({ color: Px })),
      (this.maxAngle_ = t.maxAngle !== void 0 ? t.maxAngle : Math.PI / 4),
      (this.placement_ = t.placement !== void 0 ? t.placement : "point"),
      (this.overflow_ = !!t.overflow),
      (this.stroke_ = t.stroke !== void 0 ? t.stroke : null),
      (this.offsetX_ = t.offsetX !== void 0 ? t.offsetX : 0),
      (this.offsetY_ = t.offsetY !== void 0 ? t.offsetY : 0),
      (this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null),
      (this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null),
      (this.padding_ = t.padding === void 0 ? null : t.padding),
      (this.declutterMode_ = t.declutterMode);
  }
  clone() {
    const t = this.getScale();
    return new Xd({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      keepUpright: this.getKeepUpright(),
      scale: Array.isArray(t) ? t.slice() : t,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill()
        ? this.getBackgroundFill().clone()
        : void 0,
      backgroundStroke: this.getBackgroundStroke()
        ? this.getBackgroundStroke().clone()
        : void 0,
      padding: this.getPadding() || void 0,
      declutterMode: this.getDeclutterMode(),
    });
  }
  getOverflow() {
    return this.overflow_;
  }
  getFont() {
    return this.font_;
  }
  getMaxAngle() {
    return this.maxAngle_;
  }
  getPlacement() {
    return this.placement_;
  }
  getRepeat() {
    return this.repeat_;
  }
  getOffsetX() {
    return this.offsetX_;
  }
  getOffsetY() {
    return this.offsetY_;
  }
  getFill() {
    return this.fill_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getKeepUpright() {
    return this.keepUpright_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getStroke() {
    return this.stroke_;
  }
  getText() {
    return this.text_;
  }
  getTextAlign() {
    return this.textAlign_;
  }
  getJustify() {
    return this.justify_;
  }
  getTextBaseline() {
    return this.textBaseline_;
  }
  getBackgroundFill() {
    return this.backgroundFill_;
  }
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }
  getPadding() {
    return this.padding_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  setOverflow(t) {
    this.overflow_ = t;
  }
  setFont(t) {
    this.font_ = t;
  }
  setMaxAngle(t) {
    this.maxAngle_ = t;
  }
  setOffsetX(t) {
    this.offsetX_ = t;
  }
  setOffsetY(t) {
    this.offsetY_ = t;
  }
  setPlacement(t) {
    this.placement_ = t;
  }
  setRepeat(t) {
    this.repeat_ = t;
  }
  setRotateWithView(t) {
    this.rotateWithView_ = t;
  }
  setKeepUpright(t) {
    this.keepUpright_ = t;
  }
  setFill(t) {
    this.fill_ = t;
  }
  setRotation(t) {
    this.rotation_ = t;
  }
  setScale(t) {
    (this.scale_ = t), (this.scaleArray_ = Ke(t !== void 0 ? t : 1));
  }
  setStroke(t) {
    this.stroke_ = t;
  }
  setText(t) {
    this.text_ = t;
  }
  setTextAlign(t) {
    this.textAlign_ = t;
  }
  setJustify(t) {
    this.justify_ = t;
  }
  setTextBaseline(t) {
    this.textBaseline_ = t;
  }
  setBackgroundFill(t) {
    this.backgroundFill_ = t;
  }
  setBackgroundStroke(t) {
    this.backgroundStroke_ = t;
  }
  setPadding(t) {
    this.padding_ = t;
  }
}
const Me = { ANIMATING: 0, INTERACTING: 1 },
  ht = {
    BEGIN_GEOMETRY: 0,
    BEGIN_PATH: 1,
    CIRCLE: 2,
    CLOSE_PATH: 3,
    CUSTOM: 4,
    DRAW_CHARS: 5,
    DRAW_IMAGE: 6,
    END_GEOMETRY: 7,
    FILL: 8,
    MOVE_TO_LINE_TO: 9,
    SET_FILL_STYLE: 10,
    SET_STROKE_STYLE: 11,
    STROKE: 12,
  },
  mu = [ht.FILL],
  hs = [ht.STROKE],
  Ws = [ht.BEGIN_PATH],
  Sy = [ht.CLOSE_PATH];
class qa extends Op {
  constructor(t, i, s, r) {
    super(),
      (this.tolerance = t),
      (this.maxExtent = i),
      (this.pixelRatio = r),
      (this.maxLineWidth = 0),
      (this.resolution = s),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_ = null),
      (this.bufferedMaxExtent_ = null),
      (this.instructions = []),
      (this.coordinates = []),
      (this.tmpCoordinate_ = []),
      (this.hitDetectionInstructions = []),
      (this.state = {});
  }
  applyPixelRatio(t) {
    const i = this.pixelRatio;
    return i == 1
      ? t
      : t.map(function (s) {
          return s * i;
        });
  }
  appendFlatPointCoordinates(t, i) {
    const s = this.getBufferedMaxExtent(),
      r = this.tmpCoordinate_,
      o = this.coordinates;
    let c = o.length;
    for (let h = 0, d = t.length; h < d; h += i)
      (r[0] = t[h]),
        (r[1] = t[h + 1]),
        ur(s, r) && ((o[c++] = r[0]), (o[c++] = r[1]));
    return c;
  }
  appendFlatLineCoordinates(t, i, s, r, o, c) {
    const h = this.coordinates;
    let d = h.length;
    const _ = this.getBufferedMaxExtent();
    c && (i += r);
    let m = t[i],
      y = t[i + 1];
    const v = this.tmpCoordinate_;
    let S = !0,
      x,
      b,
      R;
    for (x = i + r; x < s; x += r)
      (v[0] = t[x]),
        (v[1] = t[x + 1]),
        (R = Zf(_, v)),
        R !== b
          ? (S && ((h[d++] = m), (h[d++] = y), (S = !1)),
            (h[d++] = v[0]),
            (h[d++] = v[1]))
          : R === ge.INTERSECTING
            ? ((h[d++] = v[0]), (h[d++] = v[1]), (S = !1))
            : (S = !0),
        (m = v[0]),
        (y = v[1]),
        (b = R);
    return ((o && S) || x === i + r) && ((h[d++] = m), (h[d++] = y)), d;
  }
  drawCustomCoordinates_(t, i, s, r, o) {
    for (let c = 0, h = s.length; c < h; ++c) {
      const d = s[c],
        _ = this.appendFlatLineCoordinates(t, i, d, r, !1, !1);
      o.push(_), (i = d);
    }
    return i;
  }
  drawCustom(t, i, s, r, o) {
    this.beginGeometry(t, i, o);
    const c = t.getType(),
      h = t.getStride(),
      d = this.coordinates.length;
    let _, m, y, v, S;
    switch (c) {
      case "MultiPolygon":
        (_ = t.getOrientedFlatCoordinates()), (v = []);
        const x = t.getEndss();
        S = 0;
        for (let b = 0, R = x.length; b < R; ++b) {
          const A = [];
          (S = this.drawCustomCoordinates_(_, S, x[b], h, A)), v.push(A);
        }
        this.instructions.push([ht.CUSTOM, d, v, t, s, td, o]),
          this.hitDetectionInstructions.push([
            ht.CUSTOM,
            d,
            v,
            t,
            r || s,
            td,
            o,
          ]);
        break;
      case "Polygon":
      case "MultiLineString":
        (y = []),
          (_ =
            c == "Polygon"
              ? t.getOrientedFlatCoordinates()
              : t.getFlatCoordinates()),
          (S = this.drawCustomCoordinates_(_, 0, t.getEnds(), h, y)),
          this.instructions.push([ht.CUSTOM, d, y, t, s, La, o]),
          this.hitDetectionInstructions.push([
            ht.CUSTOM,
            d,
            y,
            t,
            r || s,
            La,
            o,
          ]);
        break;
      case "LineString":
      case "Circle":
        (_ = t.getFlatCoordinates()),
          (m = this.appendFlatLineCoordinates(_, 0, _.length, h, !1, !1)),
          this.instructions.push([ht.CUSTOM, d, m, t, s, cs, o]),
          this.hitDetectionInstructions.push([
            ht.CUSTOM,
            d,
            m,
            t,
            r || s,
            cs,
            o,
          ]);
        break;
      case "MultiPoint":
        (_ = t.getFlatCoordinates()),
          (m = this.appendFlatPointCoordinates(_, h)),
          m > d &&
            (this.instructions.push([ht.CUSTOM, d, m, t, s, cs, o]),
            this.hitDetectionInstructions.push([
              ht.CUSTOM,
              d,
              m,
              t,
              r || s,
              cs,
              o,
            ]));
        break;
      case "Point":
        (_ = t.getFlatCoordinates()),
          this.coordinates.push(_[0], _[1]),
          (m = this.coordinates.length),
          this.instructions.push([ht.CUSTOM, d, m, t, s, void 0, o]),
          this.hitDetectionInstructions.push([
            ht.CUSTOM,
            d,
            m,
            t,
            r || s,
            void 0,
            o,
          ]);
        break;
    }
    this.endGeometry(i);
  }
  beginGeometry(t, i, s) {
    (this.beginGeometryInstruction1_ = [ht.BEGIN_GEOMETRY, i, 0, t, s]),
      this.instructions.push(this.beginGeometryInstruction1_),
      (this.beginGeometryInstruction2_ = [ht.BEGIN_GEOMETRY, i, 0, t, s]),
      this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates,
    };
  }
  reverseHitDetectionInstructions() {
    const t = this.hitDetectionInstructions;
    t.reverse();
    let i;
    const s = t.length;
    let r,
      o,
      c = -1;
    for (i = 0; i < s; ++i)
      (r = t[i]),
        (o = r[0]),
        o == ht.END_GEOMETRY
          ? (c = i)
          : o == ht.BEGIN_GEOMETRY &&
            ((r[2] = i), FE(this.hitDetectionInstructions, c, i), (c = -1));
  }
  fillStyleToState(t, i = {}) {
    if (t) {
      const s = t.getColor();
      (i.fillPatternScale =
        s && typeof s == "object" && "src" in s ? this.pixelRatio : 1),
        (i.fillStyle = Qi(s || He));
    } else i.fillStyle = void 0;
    return i;
  }
  strokeStyleToState(t, i = {}) {
    if (t) {
      const s = t.getColor();
      i.strokeStyle = Qi(s || Ga);
      const r = t.getLineCap();
      i.lineCap = r !== void 0 ? r : gr;
      const o = t.getLineDash();
      i.lineDash = o ? o.slice() : An;
      const c = t.getLineDashOffset();
      i.lineDashOffset = c || wn;
      const h = t.getLineJoin();
      i.lineJoin = h !== void 0 ? h : _r;
      const d = t.getWidth();
      i.lineWidth = d !== void 0 ? d : Ua;
      const _ = t.getMiterLimit();
      (i.miterLimit = _ !== void 0 ? _ : Na),
        i.lineWidth > this.maxLineWidth &&
          ((this.maxLineWidth = i.lineWidth), (this.bufferedMaxExtent_ = null));
    } else
      (i.strokeStyle = void 0),
        (i.lineCap = void 0),
        (i.lineDash = null),
        (i.lineDashOffset = void 0),
        (i.lineJoin = void 0),
        (i.lineWidth = void 0),
        (i.miterLimit = void 0);
    return i;
  }
  setFillStrokeStyle(t, i) {
    const s = this.state;
    this.fillStyleToState(t, s), this.strokeStyleToState(i, s);
  }
  createFill(t) {
    const i = t.fillStyle,
      s = [ht.SET_FILL_STYLE, i];
    return typeof i != "string" && s.push(t.fillPatternScale), s;
  }
  applyStroke(t) {
    this.instructions.push(this.createStroke(t));
  }
  createStroke(t) {
    return [
      ht.SET_STROKE_STYLE,
      t.strokeStyle,
      t.lineWidth * this.pixelRatio,
      t.lineCap,
      t.lineJoin,
      t.miterLimit,
      t.lineDash ? this.applyPixelRatio(t.lineDash) : null,
      t.lineDashOffset * this.pixelRatio,
    ];
  }
  updateFillStyle(t, i) {
    const s = t.fillStyle;
    (typeof s != "string" || t.currentFillStyle != s) &&
      (s !== void 0 && this.instructions.push(i.call(this, t)),
      (t.currentFillStyle = s));
  }
  updateStrokeStyle(t, i) {
    const s = t.strokeStyle,
      r = t.lineCap,
      o = t.lineDash,
      c = t.lineDashOffset,
      h = t.lineJoin,
      d = t.lineWidth,
      _ = t.miterLimit;
    (t.currentStrokeStyle != s ||
      t.currentLineCap != r ||
      (o != t.currentLineDash && !ys(t.currentLineDash, o)) ||
      t.currentLineDashOffset != c ||
      t.currentLineJoin != h ||
      t.currentLineWidth != d ||
      t.currentMiterLimit != _) &&
      (s !== void 0 && i.call(this, t),
      (t.currentStrokeStyle = s),
      (t.currentLineCap = r),
      (t.currentLineDash = o),
      (t.currentLineDashOffset = c),
      (t.currentLineJoin = h),
      (t.currentLineWidth = d),
      (t.currentMiterLimit = _));
  }
  endGeometry(t) {
    (this.beginGeometryInstruction1_[2] = this.instructions.length),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_[2] =
        this.hitDetectionInstructions.length),
      (this.beginGeometryInstruction2_ = null);
    const i = [ht.END_GEOMETRY, t];
    this.instructions.push(i), this.hitDetectionInstructions.push(i);
  }
  getBufferedMaxExtent() {
    if (
      !this.bufferedMaxExtent_ &&
      ((this.bufferedMaxExtent_ = Ky(this.maxExtent)), this.maxLineWidth > 0)
    ) {
      const t = (this.resolution * (this.maxLineWidth + 1)) / 2;
      dd(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
class jx extends qa {
  constructor(t, i, s, r) {
    super(t, i, s, r),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.height_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.scale_ = void 0),
      (this.width_ = void 0),
      (this.declutterMode_ = void 0),
      (this.declutterImageWithText_ = void 0);
  }
  drawPoint(t, i, s) {
    if (
      !this.image_ ||
      (this.maxExtent && !ur(this.maxExtent, t.getFlatCoordinates()))
    )
      return;
    this.beginGeometry(t, i, s);
    const r = t.getFlatCoordinates(),
      o = t.getStride(),
      c = this.coordinates.length,
      h = this.appendFlatPointCoordinates(r, o);
    this.instructions.push([
      ht.DRAW_IMAGE,
      c,
      h,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        ht.DRAW_IMAGE,
        c,
        h,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(i);
  }
  drawMultiPoint(t, i, s) {
    if (!this.image_) return;
    this.beginGeometry(t, i, s);
    const r = t.getFlatCoordinates(),
      o = [];
    for (let d = 0, _ = r.length; d < _; d += t.getStride())
      (!this.maxExtent || ur(this.maxExtent, r.slice(d, d + 2))) &&
        o.push(r[d], r[d + 1]);
    const c = this.coordinates.length,
      h = this.appendFlatPointCoordinates(o, 2);
    this.instructions.push([
      ht.DRAW_IMAGE,
      c,
      h,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        ht.DRAW_IMAGE,
        c,
        h,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(i);
  }
  finish() {
    return (
      this.reverseHitDetectionInstructions(),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.height_ = void 0),
      (this.scale_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.width_ = void 0),
      super.finish()
    );
  }
  setImageStyle(t, i) {
    const s = t.getAnchor(),
      r = t.getSize(),
      o = t.getOrigin();
    (this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio)),
      (this.anchorX_ = s[0]),
      (this.anchorY_ = s[1]),
      (this.hitDetectionImage_ = t.getHitDetectionImage()),
      (this.image_ = t.getImage(this.pixelRatio)),
      (this.height_ = r[1]),
      (this.opacity_ = t.getOpacity()),
      (this.originX_ = o[0]),
      (this.originY_ = o[1]),
      (this.rotateWithView_ = t.getRotateWithView()),
      (this.rotation_ = t.getRotation()),
      (this.scale_ = t.getScaleArray()),
      (this.width_ = r[0]),
      (this.declutterMode_ = t.getDeclutterMode()),
      (this.declutterImageWithText_ = i);
  }
}
class Zx extends qa {
  constructor(t, i, s, r) {
    super(t, i, s, r);
  }
  drawFlatCoordinates_(t, i, s, r) {
    const o = this.coordinates.length,
      c = this.appendFlatLineCoordinates(t, i, s, r, !1, !1),
      h = [ht.MOVE_TO_LINE_TO, o, c];
    return this.instructions.push(h), this.hitDetectionInstructions.push(h), s;
  }
  drawLineString(t, i, s) {
    const r = this.state,
      o = r.strokeStyle,
      c = r.lineWidth;
    if (o === void 0 || c === void 0) return;
    this.updateStrokeStyle(r, this.applyStroke),
      this.beginGeometry(t, i, s),
      this.hitDetectionInstructions.push(
        [
          ht.SET_STROKE_STYLE,
          r.strokeStyle,
          r.lineWidth,
          r.lineCap,
          r.lineJoin,
          r.miterLimit,
          An,
          wn,
        ],
        Ws,
      );
    const h = t.getFlatCoordinates(),
      d = t.getStride();
    this.drawFlatCoordinates_(h, 0, h.length, d),
      this.hitDetectionInstructions.push(hs),
      this.endGeometry(i);
  }
  drawMultiLineString(t, i, s) {
    const r = this.state,
      o = r.strokeStyle,
      c = r.lineWidth;
    if (o === void 0 || c === void 0) return;
    this.updateStrokeStyle(r, this.applyStroke),
      this.beginGeometry(t, i, s),
      this.hitDetectionInstructions.push(
        [
          ht.SET_STROKE_STYLE,
          r.strokeStyle,
          r.lineWidth,
          r.lineCap,
          r.lineJoin,
          r.miterLimit,
          An,
          wn,
        ],
        Ws,
      );
    const h = t.getEnds(),
      d = t.getFlatCoordinates(),
      _ = t.getStride();
    let m = 0;
    for (let y = 0, v = h.length; y < v; ++y)
      m = this.drawFlatCoordinates_(d, m, h[y], _);
    this.hitDetectionInstructions.push(hs), this.endGeometry(i);
  }
  finish() {
    const t = this.state;
    return (
      t.lastStroke != null &&
        t.lastStroke != this.coordinates.length &&
        this.instructions.push(hs),
      this.reverseHitDetectionInstructions(),
      (this.state = null),
      super.finish()
    );
  }
  applyStroke(t) {
    t.lastStroke != null &&
      t.lastStroke != this.coordinates.length &&
      (this.instructions.push(hs), (t.lastStroke = this.coordinates.length)),
      (t.lastStroke = 0),
      super.applyStroke(t),
      this.instructions.push(Ws);
  }
}
class xy extends qa {
  constructor(t, i, s, r) {
    super(t, i, s, r);
  }
  drawFlatCoordinatess_(t, i, s, r) {
    const o = this.state,
      c = o.fillStyle !== void 0,
      h = o.strokeStyle !== void 0,
      d = s.length;
    this.instructions.push(Ws), this.hitDetectionInstructions.push(Ws);
    for (let _ = 0; _ < d; ++_) {
      const m = s[_],
        y = this.coordinates.length,
        v = this.appendFlatLineCoordinates(t, i, m, r, !0, !h),
        S = [ht.MOVE_TO_LINE_TO, y, v];
      this.instructions.push(S),
        this.hitDetectionInstructions.push(S),
        h &&
          (this.instructions.push(Sy), this.hitDetectionInstructions.push(Sy)),
        (i = m);
    }
    return (
      c && (this.instructions.push(mu), this.hitDetectionInstructions.push(mu)),
      h && (this.instructions.push(hs), this.hitDetectionInstructions.push(hs)),
      i
    );
  }
  drawCircle(t, i, s) {
    const r = this.state,
      o = r.fillStyle,
      c = r.strokeStyle;
    if (o === void 0 && c === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(t, i, s),
      r.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([ht.SET_FILL_STYLE, He]),
      r.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          ht.SET_STROKE_STYLE,
          r.strokeStyle,
          r.lineWidth,
          r.lineCap,
          r.lineJoin,
          r.miterLimit,
          An,
          wn,
        ]);
    const h = t.getFlatCoordinates(),
      d = t.getStride(),
      _ = this.coordinates.length;
    this.appendFlatLineCoordinates(h, 0, h.length, d, !1, !1);
    const m = [ht.CIRCLE, _];
    this.instructions.push(Ws, m),
      this.hitDetectionInstructions.push(Ws, m),
      r.fillStyle !== void 0 &&
        (this.instructions.push(mu), this.hitDetectionInstructions.push(mu)),
      r.strokeStyle !== void 0 &&
        (this.instructions.push(hs), this.hitDetectionInstructions.push(hs)),
      this.endGeometry(i);
  }
  drawPolygon(t, i, s) {
    const r = this.state,
      o = r.fillStyle,
      c = r.strokeStyle;
    if (o === void 0 && c === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(t, i, s),
      r.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([ht.SET_FILL_STYLE, He]),
      r.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          ht.SET_STROKE_STYLE,
          r.strokeStyle,
          r.lineWidth,
          r.lineCap,
          r.lineJoin,
          r.miterLimit,
          An,
          wn,
        ]);
    const h = t.getEnds(),
      d = t.getOrientedFlatCoordinates(),
      _ = t.getStride();
    this.drawFlatCoordinatess_(d, 0, h, _), this.endGeometry(i);
  }
  drawMultiPolygon(t, i, s) {
    const r = this.state,
      o = r.fillStyle,
      c = r.strokeStyle;
    if (o === void 0 && c === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(t, i, s),
      r.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([ht.SET_FILL_STYLE, He]),
      r.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          ht.SET_STROKE_STYLE,
          r.strokeStyle,
          r.lineWidth,
          r.lineCap,
          r.lineJoin,
          r.miterLimit,
          An,
          wn,
        ]);
    const h = t.getEndss(),
      d = t.getOrientedFlatCoordinates(),
      _ = t.getStride();
    let m = 0;
    for (let y = 0, v = h.length; y < v; ++y)
      m = this.drawFlatCoordinatess_(d, m, h[y], _);
    this.endGeometry(i);
  }
  finish() {
    this.reverseHitDetectionInstructions(), (this.state = null);
    const t = this.tolerance;
    if (t !== 0) {
      const i = this.coordinates;
      for (let s = 0, r = i.length; s < r; ++s) i[s] = Zs(i[s], t);
    }
    return super.finish();
  }
  setFillStrokeStyles_() {
    const t = this.state;
    t.fillStyle !== void 0 && this.updateFillStyle(t, this.createFill),
      t.strokeStyle !== void 0 && this.updateStrokeStyle(t, this.applyStroke);
  }
}
function Kx(l, t, i, s, r) {
  const o = [];
  let c = i,
    h = 0,
    d = t.slice(i, 2);
  for (; h < l && c + r < s; ) {
    const [_, m] = d.slice(-2),
      y = t[c + r],
      v = t[c + r + 1],
      S = Math.sqrt((y - _) * (y - _) + (v - m) * (v - m));
    if (((h += S), h >= l)) {
      const x = (l - h + S) / S,
        b = ni(_, y, x),
        R = ni(m, v, x);
      d.push(b, R), o.push(d), (d = [b, R]), h == l && (c += r), (h = 0);
    } else if (h < l) d.push(t[c + r], t[c + r + 1]), (c += r);
    else {
      const x = S - h,
        b = ni(_, y, x / S),
        R = ni(m, v, x / S);
      d.push(b, R), o.push(d), (d = [b, R]), (h = 0), (c += r);
    }
  }
  return h > 0 && o.push(d), o;
}
function qx(l, t, i, s, r) {
  let o = i,
    c = i,
    h = 0,
    d = 0,
    _ = i,
    m,
    y,
    v,
    S,
    x,
    b,
    R,
    A,
    O,
    G;
  for (y = i; y < s; y += r) {
    const z = t[y],
      D = t[y + 1];
    x !== void 0 &&
      ((O = z - x),
      (G = D - b),
      (S = Math.sqrt(O * O + G * G)),
      R !== void 0 &&
        ((d += v),
        (m = Math.acos((R * O + A * G) / (v * S))),
        m > l && (d > h && ((h = d), (o = _), (c = y)), (d = 0), (_ = y - r))),
      (v = S),
      (R = O),
      (A = G)),
      (x = z),
      (b = D);
  }
  return (d += S), d > h ? [_, y] : [o, c];
}
const Fu = {
  left: 0,
  center: 0.5,
  right: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1,
};
class Vx extends qa {
  constructor(t, i, s, r) {
    super(t, i, s, r),
      (this.labels_ = null),
      (this.text_ = ""),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = void 0),
      (this.textKeepUpright_ = void 0),
      (this.textRotation_ = 0),
      (this.textFillState_ = null),
      (this.fillStates = {}),
      (this.fillStates[He] = { fillStyle: He }),
      (this.textStrokeState_ = null),
      (this.strokeStates = {}),
      (this.textState_ = {}),
      (this.textStates = {}),
      (this.textKey_ = ""),
      (this.fillKey_ = ""),
      (this.strokeKey_ = ""),
      (this.declutterMode_ = void 0),
      (this.declutterImageWithText_ = void 0);
  }
  finish() {
    const t = super.finish();
    return (
      (t.textStates = this.textStates),
      (t.fillStates = this.fillStates),
      (t.strokeStates = this.strokeStates),
      t
    );
  }
  drawText(t, i, s) {
    const r = this.textFillState_,
      o = this.textStrokeState_,
      c = this.textState_;
    if (this.text_ === "" || !c || (!r && !o)) return;
    const h = this.coordinates;
    let d = h.length;
    const _ = t.getType();
    let m = null,
      y = t.getStride();
    if (
      c.placement === "line" &&
      (_ == "LineString" ||
        _ == "MultiLineString" ||
        _ == "Polygon" ||
        _ == "MultiPolygon")
    ) {
      if (!je(this.maxExtent, t.getExtent())) return;
      let v;
      if (((m = t.getFlatCoordinates()), _ == "LineString")) v = [m.length];
      else if (_ == "MultiLineString") v = t.getEnds();
      else if (_ == "Polygon") v = t.getEnds().slice(0, 1);
      else if (_ == "MultiPolygon") {
        const R = t.getEndss();
        v = [];
        for (let A = 0, O = R.length; A < O; ++A) v.push(R[A][0]);
      }
      this.beginGeometry(t, i, s);
      const S = c.repeat,
        x = S ? void 0 : c.textAlign;
      let b = 0;
      for (let R = 0, A = v.length; R < A; ++R) {
        let O;
        S
          ? (O = Kx(S * this.resolution, m, b, v[R], y))
          : (O = [m.slice(b, v[R])]);
        for (let G = 0, z = O.length; G < z; ++G) {
          const D = O[G];
          let j = 0,
            Q = D.length;
          if (x == null) {
            const F = qx(c.maxAngle, D, 0, D.length, 2);
            (j = F[0]), (Q = F[1]);
          }
          for (let F = j; F < Q; F += y) h.push(D[F], D[F + 1]);
          const Z = h.length;
          (b = v[R]), this.drawChars_(d, Z), (d = Z);
        }
      }
      this.endGeometry(i);
    } else {
      let v = c.overflow ? null : [];
      switch (_) {
        case "Point":
        case "MultiPoint":
          m = t.getFlatCoordinates();
          break;
        case "LineString":
          m = t.getFlatMidpoint();
          break;
        case "Circle":
          m = t.getCenter();
          break;
        case "MultiLineString":
          (m = t.getFlatMidpoints()), (y = 2);
          break;
        case "Polygon":
          (m = t.getFlatInteriorPoint()),
            c.overflow || v.push(m[2] / this.resolution),
            (y = 3);
          break;
        case "MultiPolygon":
          const z = t.getFlatInteriorPoints();
          m = [];
          for (let D = 0, j = z.length; D < j; D += 3)
            c.overflow || v.push(z[D + 2] / this.resolution),
              m.push(z[D], z[D + 1]);
          if (m.length === 0) return;
          y = 2;
          break;
      }
      const S = this.appendFlatPointCoordinates(m, y);
      if (S === d) return;
      if (v && (S - d) / 2 !== m.length / y) {
        let z = d / 2;
        v = v.filter((D, j) => {
          const Q =
            h[(z + j) * 2] === m[j * y] && h[(z + j) * 2 + 1] === m[j * y + 1];
          return Q || --z, Q;
        });
      }
      this.saveTextStates_();
      const x = c.backgroundFill
          ? this.createFill(this.fillStyleToState(c.backgroundFill))
          : null,
        b = c.backgroundStroke
          ? this.createStroke(this.strokeStyleToState(c.backgroundStroke))
          : null;
      this.beginGeometry(t, i, s);
      let R = c.padding;
      if (R != Vs && (c.scale[0] < 0 || c.scale[1] < 0)) {
        let z = c.padding[0],
          D = c.padding[1],
          j = c.padding[2],
          Q = c.padding[3];
        c.scale[0] < 0 && ((D = -D), (Q = -Q)),
          c.scale[1] < 0 && ((z = -z), (j = -j)),
          (R = [z, D, j, Q]);
      }
      const A = this.pixelRatio;
      this.instructions.push([
        ht.DRAW_IMAGE,
        d,
        S,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [1, 1],
        NaN,
        this.declutterMode_,
        this.declutterImageWithText_,
        R == Vs
          ? Vs
          : R.map(function (z) {
              return z * A;
            }),
        x,
        b,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        v,
      ]);
      const O = 1 / A,
        G = x ? x.slice(0) : null;
      G && (G[1] = He),
        this.hitDetectionInstructions.push([
          ht.DRAW_IMAGE,
          d,
          S,
          null,
          NaN,
          NaN,
          NaN,
          1,
          0,
          0,
          this.textRotateWithView_,
          this.textRotation_,
          [O, O],
          NaN,
          this.declutterMode_,
          this.declutterImageWithText_,
          R,
          G,
          b,
          this.text_,
          this.textKey_,
          this.strokeKey_,
          this.fillKey_ ? He : this.fillKey_,
          this.textOffsetX_,
          this.textOffsetY_,
          v,
        ]),
        this.endGeometry(i);
    }
  }
  saveTextStates_() {
    const t = this.textStrokeState_,
      i = this.textState_,
      s = this.textFillState_,
      r = this.strokeKey_;
    t &&
      (r in this.strokeStates ||
        (this.strokeStates[r] = {
          strokeStyle: t.strokeStyle,
          lineCap: t.lineCap,
          lineDashOffset: t.lineDashOffset,
          lineWidth: t.lineWidth,
          lineJoin: t.lineJoin,
          miterLimit: t.miterLimit,
          lineDash: t.lineDash,
        }));
    const o = this.textKey_;
    o in this.textStates ||
      (this.textStates[o] = {
        font: i.font,
        textAlign: i.textAlign || Fa,
        justify: i.justify,
        textBaseline: i.textBaseline || Lu,
        scale: i.scale,
      });
    const c = this.fillKey_;
    s &&
      (c in this.fillStates ||
        (this.fillStates[c] = { fillStyle: s.fillStyle }));
  }
  drawChars_(t, i) {
    const s = this.textStrokeState_,
      r = this.textState_,
      o = this.strokeKey_,
      c = this.textKey_,
      h = this.fillKey_;
    this.saveTextStates_();
    const d = this.pixelRatio,
      _ = Fu[r.textBaseline],
      m = this.textOffsetY_ * d,
      y = this.text_,
      v = s ? (s.lineWidth * Math.abs(r.scale[0])) / 2 : 0;
    this.instructions.push([
      ht.DRAW_CHARS,
      t,
      i,
      _,
      r.overflow,
      h,
      r.maxAngle,
      d,
      m,
      o,
      v * d,
      y,
      c,
      1,
      this.declutterMode_,
      this.textKeepUpright_,
    ]),
      this.hitDetectionInstructions.push([
        ht.DRAW_CHARS,
        t,
        i,
        _,
        r.overflow,
        h && He,
        r.maxAngle,
        d,
        m,
        o,
        v * d,
        y,
        c,
        1 / d,
        this.declutterMode_,
        this.textKeepUpright_,
      ]);
  }
  setTextStyle(t, i) {
    let s, r, o;
    if (!t) this.text_ = "";
    else {
      const c = t.getFill();
      c
        ? ((r = this.textFillState_),
          r || ((r = {}), (this.textFillState_ = r)),
          (r.fillStyle = Qi(c.getColor() || He)))
        : ((r = null), (this.textFillState_ = r));
      const h = t.getStroke();
      if (!h) (o = null), (this.textStrokeState_ = o);
      else {
        (o = this.textStrokeState_),
          o || ((o = {}), (this.textStrokeState_ = o));
        const b = h.getLineDash(),
          R = h.getLineDashOffset(),
          A = h.getWidth(),
          O = h.getMiterLimit();
        (o.lineCap = h.getLineCap() || gr),
          (o.lineDash = b ? b.slice() : An),
          (o.lineDashOffset = R === void 0 ? wn : R),
          (o.lineJoin = h.getLineJoin() || _r),
          (o.lineWidth = A === void 0 ? Ua : A),
          (o.miterLimit = O === void 0 ? Na : O),
          (o.strokeStyle = Qi(h.getColor() || Ga));
      }
      s = this.textState_;
      const d = t.getFont() || Lp;
      mx(d);
      const _ = t.getScaleArray();
      (s.overflow = t.getOverflow()),
        (s.font = d),
        (s.maxAngle = t.getMaxAngle()),
        (s.placement = t.getPlacement()),
        (s.textAlign = t.getTextAlign()),
        (s.repeat = t.getRepeat()),
        (s.justify = t.getJustify()),
        (s.textBaseline = t.getTextBaseline() || Lu),
        (s.backgroundFill = t.getBackgroundFill()),
        (s.backgroundStroke = t.getBackgroundStroke()),
        (s.padding = t.getPadding() || Vs),
        (s.scale = _ === void 0 ? [1, 1] : _);
      const m = t.getOffsetX(),
        y = t.getOffsetY(),
        v = t.getRotateWithView(),
        S = t.getKeepUpright(),
        x = t.getRotation();
      (this.text_ = t.getText() || ""),
        (this.textOffsetX_ = m === void 0 ? 0 : m),
        (this.textOffsetY_ = y === void 0 ? 0 : y),
        (this.textRotateWithView_ = v === void 0 ? !1 : v),
        (this.textKeepUpright_ = S === void 0 ? !0 : S),
        (this.textRotation_ = x === void 0 ? 0 : x),
        (this.strokeKey_ = o
          ? (typeof o.strokeStyle == "string"
              ? o.strokeStyle
              : It(o.strokeStyle)) +
            o.lineCap +
            o.lineDashOffset +
            "|" +
            o.lineWidth +
            o.lineJoin +
            o.miterLimit +
            "[" +
            o.lineDash.join() +
            "]"
          : ""),
        (this.textKey_ =
          s.font +
          s.scale +
          (s.textAlign || "?") +
          (s.repeat || "?") +
          (s.justify || "?") +
          (s.textBaseline || "?")),
        (this.fillKey_ =
          r && r.fillStyle
            ? typeof r.fillStyle == "string"
              ? r.fillStyle
              : "|" + It(r.fillStyle)
            : "");
    }
    (this.declutterMode_ = t.getDeclutterMode()),
      (this.declutterImageWithText_ = i);
  }
}
const Wx = {
  Circle: xy,
  Default: qa,
  Image: jx,
  LineString: Zx,
  Polygon: xy,
  Text: Vx,
};
class Qx {
  constructor(t, i, s, r) {
    (this.tolerance_ = t),
      (this.maxExtent_ = i),
      (this.pixelRatio_ = r),
      (this.resolution_ = s),
      (this.buildersByZIndex_ = {});
  }
  finish() {
    const t = {};
    for (const i in this.buildersByZIndex_) {
      t[i] = t[i] || {};
      const s = this.buildersByZIndex_[i];
      for (const r in s) {
        const o = s[r].finish();
        t[i][r] = o;
      }
    }
    return t;
  }
  getBuilder(t, i) {
    const s = t !== void 0 ? t.toString() : "0";
    let r = this.buildersByZIndex_[s];
    r === void 0 && ((r = {}), (this.buildersByZIndex_[s] = r));
    let o = r[i];
    if (o === void 0) {
      const c = Wx[i];
      (o = new c(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_,
      )),
        (r[i] = o);
    }
    return o;
  }
}
function Jx(l, t, i, s, r, o, c, h, d, _, m, y, v = !0) {
  let S = l[t],
    x = l[t + 1],
    b = 0,
    R = 0,
    A = 0,
    O = 0;
  function G() {
    (b = S),
      (R = x),
      (t += s),
      (S = l[t]),
      (x = l[t + 1]),
      (O += A),
      (A = Math.sqrt((S - b) * (S - b) + (x - R) * (x - R)));
  }
  do G();
  while (t < i - s && O + A < o);
  let z = A === 0 ? 0 : (o - O) / A;
  const D = ni(b, S, z),
    j = ni(R, x, z),
    Q = t - s,
    Z = O,
    F = o + h * d(_, r, m);
  for (; t < i - s && O + A < F; ) G();
  z = A === 0 ? 0 : (F - O) / A;
  const V = ni(b, S, z),
    lt = ni(R, x, z);
  let it = !1;
  if (v)
    if (y) {
      const q = [D, j, V, lt];
      cp(q, 0, 4, 2, y, q, q), (it = q[0] > q[2]);
    } else it = D > V;
  const ot = Math.PI,
    st = [],
    nt = Q + s === t;
  (t = Q), (A = 0), (O = Z), (S = l[t]), (x = l[t + 1]);
  let Y;
  if (nt) {
    G(), (Y = Math.atan2(x - R, S - b)), it && (Y += Y > 0 ? -ot : ot);
    const q = (V + D) / 2,
      W = (lt + j) / 2;
    return (st[0] = [q, W, (F - o) / 2, Y, r]), st;
  }
  r = r.replace(/\n/g, " ");
  for (let q = 0, W = r.length; q < W; ) {
    G();
    let $ = Math.atan2(x - R, S - b);
    if ((it && ($ += $ > 0 ? -ot : ot), Y !== void 0)) {
      let rt = $ - Y;
      if (((rt += rt > ot ? -2 * ot : rt < -ot ? 2 * ot : 0), Math.abs(rt) > c))
        return null;
    }
    Y = $;
    const C = q;
    let X = 0;
    for (; q < W; ++q) {
      const rt = it ? W - q - 1 : q,
        ct = h * d(_, r[rt], m);
      if (t + s < i && O + A < o + X + ct / 2) break;
      X += ct;
    }
    if (q === C) continue;
    const U = it ? r.substring(W - C, W - q) : r.substring(C, q);
    z = A === 0 ? 0 : (o + X / 2 - O) / A;
    const tt = ni(b, S, z),
      J = ni(R, x, z);
    st.push([tt, J, X / 2, $, U]), (o += X);
  }
  return st;
}
class Bp {
  constructor() {
    O0(
      this,
      "pushMethodArgs_",
      (...t) => (this.instructions_[this.zIndex + this.offset_].push(t), this),
    );
    (this.instructions_ = []),
      (this.zIndex = 0),
      (this.offset_ = 0),
      (this.context_ = new Proxy(Du(), {
        get: (t, i) => {
          if (typeof Du()[i] == "function")
            return (
              this.instructions_[this.zIndex + this.offset_] ||
                (this.instructions_[this.zIndex + this.offset_] = []),
              this.instructions_[this.zIndex + this.offset_].push(i),
              this.pushMethodArgs_
            );
        },
        set: (t, i, s) => (
          this.instructions_[this.zIndex + this.offset_] ||
            (this.instructions_[this.zIndex + this.offset_] = []),
          this.instructions_[this.zIndex + this.offset_].push(i, s),
          !0
        ),
      }));
  }
  pushFunction(t) {
    this.instructions_[this.zIndex + this.offset_].push(t);
  }
  getContext() {
    return this.context_;
  }
  draw(t) {
    this.instructions_.forEach((i) => {
      for (let s = 0, r = i.length; s < r; ++s) {
        const o = i[s];
        if (typeof o == "function") {
          o(t);
          continue;
        }
        const c = i[++s];
        if (typeof t[o] == "function") t[o](...c);
        else {
          if (typeof c == "function") {
            t[o] = c(t);
            continue;
          }
          t[o] = c;
        }
      }
    });
  }
  clear() {
    (this.instructions_.length = 0), (this.zIndex = 0), (this.offset_ = 0);
  }
  offset() {
    (this.offset_ = this.instructions_.length), (this.zIndex = 0);
  }
}
const Zl = Ti(),
  is = [],
  Sn = [],
  xn = [],
  ns = [];
function Ty(l) {
  return l[3].declutterBox;
}
const Cy = new RegExp("[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]");
function If(l, t) {
  return (
    t === "start"
      ? (t = Cy.test(l) ? "right" : "left")
      : t === "end" && (t = Cy.test(l) ? "left" : "right"),
    Fu[t]
  );
}
function $x(l, t, i) {
  return (
    i > 0 &&
      l.push(
        `
`,
        "",
      ),
    l.push(t, ""),
    l
  );
}
class t2 {
  constructor(t, i, s, r, o) {
    (this.overlaps = s),
      (this.pixelRatio = i),
      (this.resolution = t),
      this.alignAndScaleFill_,
      (this.instructions = r.instructions),
      (this.coordinates = r.coordinates),
      (this.coordinateCache_ = {}),
      (this.renderedTransform_ = Ni()),
      (this.hitDetectionInstructions = r.hitDetectionInstructions),
      (this.pixelCoordinates_ = null),
      (this.viewRotation_ = 0),
      (this.fillStates = r.fillStates || {}),
      (this.strokeStates = r.strokeStates || {}),
      (this.textStates = r.textStates || {}),
      (this.widths_ = {}),
      (this.labels_ = {}),
      (this.zIndexContext_ = o ? new Bp() : null);
  }
  getZIndexContext() {
    return this.zIndexContext_;
  }
  createLabel(t, i, s, r) {
    const o = t + i + s + r;
    if (this.labels_[o]) return this.labels_[o];
    const c = r ? this.strokeStates[r] : null,
      h = s ? this.fillStates[s] : null,
      d = this.textStates[i],
      _ = this.pixelRatio,
      m = [d.scale[0] * _, d.scale[1] * _],
      y = d.justify
        ? Fu[d.justify]
        : If(Array.isArray(t) ? t[0] : t, d.textAlign || Fa),
      v = r && c.lineWidth ? c.lineWidth : 0,
      S = Array.isArray(t)
        ? t
        : String(t)
            .split(
              `
`,
            )
            .reduce($x, []),
      { width: x, height: b, widths: R, heights: A, lineWidths: O } = px(d, S),
      G = x + v,
      z = [],
      D = (G + 2) * m[0],
      j = (b + v) * m[1],
      Q = {
        width: D < 0 ? Math.floor(D) : Math.ceil(D),
        height: j < 0 ? Math.floor(j) : Math.ceil(j),
        contextInstructions: z,
      };
    (m[0] != 1 || m[1] != 1) && z.push("scale", m),
      r &&
        (z.push("strokeStyle", c.strokeStyle),
        z.push("lineWidth", v),
        z.push("lineCap", c.lineCap),
        z.push("lineJoin", c.lineJoin),
        z.push("miterLimit", c.miterLimit),
        z.push("setLineDash", [c.lineDash]),
        z.push("lineDashOffset", c.lineDashOffset)),
      s && z.push("fillStyle", h.fillStyle),
      z.push("textBaseline", "middle"),
      z.push("textAlign", "center");
    const Z = 0.5 - y;
    let F = y * G + Z * v;
    const V = [],
      lt = [];
    let it = 0,
      ot = 0,
      st = 0,
      nt = 0,
      Y;
    for (let q = 0, W = S.length; q < W; q += 2) {
      const $ = S[q];
      if (
        $ ===
        `
`
      ) {
        (ot += it), (it = 0), (F = y * G + Z * v), ++nt;
        continue;
      }
      const C = S[q + 1] || d.font;
      C !== Y && (r && V.push("font", C), s && lt.push("font", C), (Y = C)),
        (it = Math.max(it, A[st]));
      const X = [$, F + Z * R[st] + y * (R[st] - O[nt]), 0.5 * (v + it) + ot];
      (F += R[st]),
        r && V.push("strokeText", X),
        s && lt.push("fillText", X),
        ++st;
    }
    return (
      Array.prototype.push.apply(z, V),
      Array.prototype.push.apply(z, lt),
      (this.labels_[o] = Q),
      Q
    );
  }
  replayTextBackground_(t, i, s, r, o, c, h) {
    t.beginPath(),
      t.moveTo.apply(t, i),
      t.lineTo.apply(t, s),
      t.lineTo.apply(t, r),
      t.lineTo.apply(t, o),
      t.lineTo.apply(t, i),
      c &&
        ((this.alignAndScaleFill_ = c[2]), (t.fillStyle = c[1]), this.fill_(t)),
      h && (this.setStrokeStyle_(t, h), t.stroke());
  }
  calculateImageOrLabelDimensions_(
    t,
    i,
    s,
    r,
    o,
    c,
    h,
    d,
    _,
    m,
    y,
    v,
    S,
    x,
    b,
    R,
  ) {
    (h *= v[0]), (d *= v[1]);
    let A = s - h,
      O = r - d;
    const G = o + _ > t ? t - _ : o,
      z = c + m > i ? i - m : c,
      D = x[3] + G * v[0] + x[1],
      j = x[0] + z * v[1] + x[2],
      Q = A - x[3],
      Z = O - x[0];
    (b || y !== 0) &&
      ((is[0] = Q),
      (ns[0] = Q),
      (is[1] = Z),
      (Sn[1] = Z),
      (Sn[0] = Q + D),
      (xn[0] = Sn[0]),
      (xn[1] = Z + j),
      (ns[1] = xn[1]));
    let F;
    return (
      y !== 0
        ? ((F = On(Ni(), s, r, 1, 1, y, -s, -r)),
          _e(F, is),
          _e(F, Sn),
          _e(F, xn),
          _e(F, ns),
          Mn(
            Math.min(is[0], Sn[0], xn[0], ns[0]),
            Math.min(is[1], Sn[1], xn[1], ns[1]),
            Math.max(is[0], Sn[0], xn[0], ns[0]),
            Math.max(is[1], Sn[1], xn[1], ns[1]),
            Zl,
          ))
        : Mn(
            Math.min(Q, Q + D),
            Math.min(Z, Z + j),
            Math.max(Q, Q + D),
            Math.max(Z, Z + j),
            Zl,
          ),
      S && ((A = Math.round(A)), (O = Math.round(O))),
      {
        drawImageX: A,
        drawImageY: O,
        drawImageW: G,
        drawImageH: z,
        originX: _,
        originY: m,
        declutterBox: {
          minX: Zl[0],
          minY: Zl[1],
          maxX: Zl[2],
          maxY: Zl[3],
          value: R,
        },
        canvasTransform: F,
        scale: v,
      }
    );
  }
  replayImageOrLabel_(t, i, s, r, o, c, h) {
    const d = !!(c || h),
      _ = r.declutterBox,
      m = h ? (h[2] * r.scale[0]) / 2 : 0;
    return (
      _.minX - m <= i[0] &&
        _.maxX + m >= 0 &&
        _.minY - m <= i[1] &&
        _.maxY + m >= 0 &&
        (d && this.replayTextBackground_(t, is, Sn, xn, ns, c, h),
        vx(
          t,
          r.canvasTransform,
          o,
          s,
          r.originX,
          r.originY,
          r.drawImageW,
          r.drawImageH,
          r.drawImageX,
          r.drawImageY,
          r.scale,
        )),
      !0
    );
  }
  fill_(t) {
    const i = this.alignAndScaleFill_;
    if (i) {
      const s = _e(this.renderedTransform_, [0, 0]),
        r = 512 * this.pixelRatio;
      t.save(),
        t.translate(s[0] % r, s[1] % r),
        i !== 1 && t.scale(i, i),
        t.rotate(this.viewRotation_);
    }
    t.fill(), i && t.restore();
  }
  setStrokeStyle_(t, i) {
    (t.strokeStyle = i[1]),
      (t.lineWidth = i[2]),
      (t.lineCap = i[3]),
      (t.lineJoin = i[4]),
      (t.miterLimit = i[5]),
      (t.lineDashOffset = i[7]),
      t.setLineDash(i[6]);
  }
  drawLabelWithPointPlacement_(t, i, s, r) {
    const o = this.textStates[i],
      c = this.createLabel(t, i, r, s),
      h = this.strokeStates[s],
      d = this.pixelRatio,
      _ = If(Array.isArray(t) ? t[0] : t, o.textAlign || Fa),
      m = Fu[o.textBaseline || Lu],
      y = h && h.lineWidth ? h.lineWidth : 0,
      v = c.width / d - 2 * o.scale[0],
      S = _ * v + 2 * (0.5 - _) * y,
      x = (m * c.height) / d + 2 * (0.5 - m) * y;
    return { label: c, anchorX: S, anchorY: x };
  }
  execute_(t, i, s, r, o, c, h, d) {
    const _ = this.zIndexContext_;
    let m;
    this.pixelCoordinates_ && ys(s, this.renderedTransform_)
      ? (m = this.pixelCoordinates_)
      : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []),
        (m = ds(
          this.coordinates,
          0,
          this.coordinates.length,
          2,
          s,
          this.pixelCoordinates_,
        )),
        zS(this.renderedTransform_, s));
    let y = 0;
    const v = r.length;
    let S = 0,
      x,
      b,
      R,
      A,
      O,
      G,
      z,
      D,
      j,
      Q,
      Z,
      F,
      V,
      lt = 0,
      it = 0;
    const ot = this.coordinateCache_,
      st = this.viewRotation_,
      nt = Math.round(Math.atan2(-s[1], s[0]) * 1e12) / 1e12,
      Y = {
        context: t,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: st,
      },
      q = this.instructions != r || this.overlaps ? 0 : 200;
    let W, $, C, X;
    for (; y < v; ) {
      const U = r[y];
      switch (U[0]) {
        case ht.BEGIN_GEOMETRY:
          (W = U[1]),
            (X = U[3]),
            W.getGeometry()
              ? h !== void 0 && !je(h, X.getExtent())
                ? (y = U[2] + 1)
                : ++y
              : (y = U[2]),
            _ && (_.zIndex = U[4]);
          break;
        case ht.BEGIN_PATH:
          lt > q && (this.fill_(t), (lt = 0)),
            it > q && (t.stroke(), (it = 0)),
            !lt && !it && (t.beginPath(), (O = NaN), (G = NaN)),
            ++y;
          break;
        case ht.CIRCLE:
          S = U[1];
          const J = m[S],
            rt = m[S + 1],
            ct = m[S + 2],
            Nt = m[S + 3],
            mt = ct - J,
            Ut = Nt - rt,
            vt = Math.sqrt(mt * mt + Ut * Ut);
          t.moveTo(J + vt, rt), t.arc(J, rt, vt, 0, 2 * Math.PI, !0), ++y;
          break;
        case ht.CLOSE_PATH:
          t.closePath(), ++y;
          break;
        case ht.CUSTOM:
          (S = U[1]), (x = U[2]);
          const De = U[3],
            Fi = U[4],
            qe = U[5];
          (Y.geometry = De), (Y.feature = W), y in ot || (ot[y] = []);
          const Ve = ot[y];
          qe
            ? qe(m, S, x, 2, Ve)
            : ((Ve[0] = m[S]), (Ve[1] = m[S + 1]), (Ve.length = 2)),
            _ && (_.zIndex = U[6]),
            Fi(Ve, Y),
            ++y;
          break;
        case ht.DRAW_IMAGE:
          (S = U[1]), (x = U[2]), (j = U[3]), (b = U[4]), (R = U[5]);
          let Ui = U[6];
          const ye = U[7],
            Ue = U[8],
            Ri = U[9],
            bi = U[10];
          let Xi = U[11];
          const tn = U[12];
          let Ai = U[13];
          A = U[14] || "declutter";
          const en = U[15];
          if (!j && U.length >= 20) {
            (Q = U[19]), (Z = U[20]), (F = U[21]), (V = U[22]);
            const oe = this.drawLabelWithPointPlacement_(Q, Z, F, V);
            (j = oe.label), (U[3] = j);
            const nn = U[23];
            (b = (oe.anchorX - nn) * this.pixelRatio), (U[4] = b);
            const Le = U[24];
            (R = (oe.anchorY - Le) * this.pixelRatio),
              (U[5] = R),
              (Ui = j.height),
              (U[6] = Ui),
              (Ai = j.width),
              (U[13] = Ai);
          }
          let kt;
          U.length > 25 && (kt = U[25]);
          let vr, ps, vs;
          U.length > 17
            ? ((vr = U[16]), (ps = U[17]), (vs = U[18]))
            : ((vr = Vs), (ps = null), (vs = null)),
            bi && nt ? (Xi += st) : !bi && !nt && (Xi -= st);
          let ol = 0;
          for (; S < x; S += 2) {
            if (kt && kt[ol++] < Ai / this.pixelRatio) continue;
            const oe = this.calculateImageOrLabelDimensions_(
                j.width,
                j.height,
                m[S],
                m[S + 1],
                Ai,
                Ui,
                b,
                R,
                Ue,
                Ri,
                Xi,
                tn,
                o,
                vr,
                !!ps || !!vs,
                W,
              ),
              nn = [t, i, j, oe, ye, ps, vs];
            if (d) {
              let Le, We, Ce;
              if (en) {
                const jt = x - S;
                if (!en[jt]) {
                  en[jt] = { args: nn, declutterMode: A };
                  continue;
                }
                const ue = en[jt];
                (Le = ue.args),
                  (We = ue.declutterMode),
                  delete en[jt],
                  (Ce = Ty(Le));
              }
              let ze, wi;
              if (
                (Le && (We !== "declutter" || !d.collides(Ce)) && (ze = !0),
                (A !== "declutter" || !d.collides(oe.declutterBox)) &&
                  (wi = !0),
                We === "declutter" && A === "declutter")
              ) {
                const jt = ze && wi;
                (ze = jt), (wi = jt);
              }
              ze &&
                (We !== "none" && d.insert(Ce),
                this.replayImageOrLabel_.apply(this, Le)),
                wi &&
                  (A !== "none" && d.insert(oe.declutterBox),
                  this.replayImageOrLabel_.apply(this, nn));
            } else this.replayImageOrLabel_.apply(this, nn);
          }
          ++y;
          break;
        case ht.DRAW_CHARS:
          const Ja = U[1],
            Er = U[2],
            Sr = U[3],
            fc = U[4];
          V = U[5];
          const Es = U[6],
            xe = U[7],
            $a = U[8];
          F = U[9];
          const li = U[10];
          (Q = U[11]), (Z = U[12]);
          const Te = [U[13], U[13]];
          A = U[14] || "declutter";
          const dc = U[15],
            xr = this.textStates[Z],
            Ss = xr.font,
            Yi = [xr.scale[0] * xe, xr.scale[1] * xe];
          let ki;
          Ss in this.widths_
            ? (ki = this.widths_[Ss])
            : ((ki = {}), (this.widths_[Ss] = ki));
          const Bi = Sp(m, Ja, Er, 2),
            xs = Math.abs(Yi[0]) * cy(Ss, Q, ki);
          if (fc || xs <= Bi) {
            const oe = this.textStates[Z].textAlign,
              nn = (Bi - xs) * If(Q, oe),
              Le = Jx(
                m,
                Ja,
                Er,
                2,
                Q,
                nn,
                Es,
                Math.abs(Yi[0]),
                cy,
                Ss,
                ki,
                nt ? 0 : this.viewRotation_,
                dc,
              );
            t: if (Le) {
              const We = [];
              let Ce, ze, wi, jt, ue;
              if (F)
                for (Ce = 0, ze = Le.length; Ce < ze; ++Ce) {
                  (ue = Le[Ce]),
                    (wi = ue[4]),
                    (jt = this.createLabel(wi, Z, "", F)),
                    (b = ue[2] + (Yi[0] < 0 ? -li : li)),
                    (R =
                      Sr * jt.height +
                      ((0.5 - Sr) * 2 * li * Yi[1]) / Yi[0] -
                      $a);
                  const ri = this.calculateImageOrLabelDimensions_(
                    jt.width,
                    jt.height,
                    ue[0],
                    ue[1],
                    jt.width,
                    jt.height,
                    b,
                    R,
                    0,
                    0,
                    ue[3],
                    Te,
                    !1,
                    Vs,
                    !1,
                    W,
                  );
                  if (d && A === "declutter" && d.collides(ri.declutterBox))
                    break t;
                  We.push([t, i, jt, ri, 1, null, null]);
                }
              if (V)
                for (Ce = 0, ze = Le.length; Ce < ze; ++Ce) {
                  (ue = Le[Ce]),
                    (wi = ue[4]),
                    (jt = this.createLabel(wi, Z, V, "")),
                    (b = ue[2]),
                    (R = Sr * jt.height - $a);
                  const ri = this.calculateImageOrLabelDimensions_(
                    jt.width,
                    jt.height,
                    ue[0],
                    ue[1],
                    jt.width,
                    jt.height,
                    b,
                    R,
                    0,
                    0,
                    ue[3],
                    Te,
                    !1,
                    Vs,
                    !1,
                    W,
                  );
                  if (d && A === "declutter" && d.collides(ri.declutterBox))
                    break t;
                  We.push([t, i, jt, ri, 1, null, null]);
                }
              d && A !== "none" && d.load(We.map(Ty));
              for (let ri = 0, to = We.length; ri < to; ++ri)
                this.replayImageOrLabel_.apply(this, We[ri]);
            }
          }
          ++y;
          break;
        case ht.END_GEOMETRY:
          if (c !== void 0) {
            W = U[1];
            const oe = c(W, X, A);
            if (oe) return oe;
          }
          ++y;
          break;
        case ht.FILL:
          q ? lt++ : this.fill_(t), ++y;
          break;
        case ht.MOVE_TO_LINE_TO:
          for (
            S = U[1],
              x = U[2],
              $ = m[S],
              C = m[S + 1],
              t.moveTo($, C),
              O = ($ + 0.5) | 0,
              G = (C + 0.5) | 0,
              S += 2;
            S < x;
            S += 2
          )
            ($ = m[S]),
              (C = m[S + 1]),
              (z = ($ + 0.5) | 0),
              (D = (C + 0.5) | 0),
              (S == x - 2 || z !== O || D !== G) &&
                (t.lineTo($, C), (O = z), (G = D));
          ++y;
          break;
        case ht.SET_FILL_STYLE:
          (this.alignAndScaleFill_ = U[2]),
            lt && (this.fill_(t), (lt = 0), it && (t.stroke(), (it = 0))),
            (t.fillStyle = U[1]),
            ++y;
          break;
        case ht.SET_STROKE_STYLE:
          it && (t.stroke(), (it = 0)), this.setStrokeStyle_(t, U), ++y;
          break;
        case ht.STROKE:
          q ? it++ : t.stroke(), ++y;
          break;
        default:
          ++y;
          break;
      }
    }
    lt && this.fill_(t), it && t.stroke();
  }
  execute(t, i, s, r, o, c) {
    (this.viewRotation_ = r),
      this.execute_(t, i, s, this.instructions, o, void 0, void 0, c);
  }
  executeHitDetection(t, i, s, r, o) {
    return (
      (this.viewRotation_ = s),
      this.execute_(
        t,
        [t.canvas.width, t.canvas.height],
        i,
        this.hitDetectionInstructions,
        !0,
        r,
        o,
      )
    );
  }
}
const ir = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"],
  Hp = ["Image", "Text"],
  e2 = ir.filter((l) => !Hp.includes(l));
class i2 {
  constructor(t, i, s, r, o, c, h) {
    (this.maxExtent_ = t),
      (this.overlaps_ = r),
      (this.pixelRatio_ = s),
      (this.resolution_ = i),
      (this.renderBuffer_ = c),
      (this.executorsByZIndex_ = {}),
      (this.hitDetectionContext_ = null),
      (this.hitDetectionTransform_ = Ni()),
      (this.renderedContext_ = null),
      (this.deferredZIndexContexts_ = {}),
      this.createExecutors_(o, h);
  }
  clip(t, i) {
    const s = this.getClipCoords(i);
    t.beginPath(),
      t.moveTo(s[0], s[1]),
      t.lineTo(s[2], s[3]),
      t.lineTo(s[4], s[5]),
      t.lineTo(s[6], s[7]),
      t.clip();
  }
  createExecutors_(t, i) {
    for (const s in t) {
      let r = this.executorsByZIndex_[s];
      r === void 0 && ((r = {}), (this.executorsByZIndex_[s] = r));
      const o = t[s];
      for (const c in o) {
        const h = o[c];
        r[c] = new t2(this.resolution_, this.pixelRatio_, this.overlaps_, h, i);
      }
    }
  }
  hasExecutors(t) {
    for (const i in this.executorsByZIndex_) {
      const s = this.executorsByZIndex_[i];
      for (let r = 0, o = t.length; r < o; ++r) if (t[r] in s) return !0;
    }
    return !1;
  }
  forEachFeatureAtCoordinate(t, i, s, r, o, c) {
    r = Math.round(r);
    const h = r * 2 + 1,
      d = On(
        this.hitDetectionTransform_,
        r + 0.5,
        r + 0.5,
        1 / i,
        -1 / i,
        -s,
        -t[0],
        -t[1],
      ),
      _ = !this.hitDetectionContext_;
    _ &&
      (this.hitDetectionContext_ = me(h, h, void 0, {
        willReadFrequently: !0,
      }));
    const m = this.hitDetectionContext_;
    m.canvas.width !== h || m.canvas.height !== h
      ? ((m.canvas.width = h), (m.canvas.height = h))
      : _ || m.clearRect(0, 0, h, h);
    let y;
    this.renderBuffer_ !== void 0 &&
      ((y = Ti()), wa(y, t), dd(y, i * (this.renderBuffer_ + r), y));
    const v = n2(r);
    let S;
    function x(D, j, Q) {
      const Z = m.getImageData(0, 0, h, h).data;
      for (let F = 0, V = v.length; F < V; F++)
        if (Z[v[F]] > 0) {
          if (
            !c ||
            Q === "none" ||
            (S !== "Image" && S !== "Text") ||
            c.includes(D)
          ) {
            const lt = (v[F] - 3) / 4,
              it = r - (lt % h),
              ot = r - ((lt / h) | 0),
              st = o(D, j, it * it + ot * ot);
            if (st) return st;
          }
          m.clearRect(0, 0, h, h);
          break;
        }
    }
    const b = Object.keys(this.executorsByZIndex_).map(Number);
    b.sort(bn);
    let R, A, O, G, z;
    for (R = b.length - 1; R >= 0; --R) {
      const D = b[R].toString();
      for (O = this.executorsByZIndex_[D], A = ir.length - 1; A >= 0; --A)
        if (
          ((S = ir[A]),
          (G = O[S]),
          G !== void 0 && ((z = G.executeHitDetection(m, d, s, x, y)), z))
        )
          return z;
    }
  }
  getClipCoords(t) {
    const i = this.maxExtent_;
    if (!i) return null;
    const s = i[0],
      r = i[1],
      o = i[2],
      c = i[3],
      h = [s, r, s, c, o, c, o, r];
    return ds(h, 0, 8, 2, t, h), h;
  }
  isEmpty() {
    return tl(this.executorsByZIndex_);
  }
  execute(t, i, s, r, o, c, h) {
    const d = Object.keys(this.executorsByZIndex_).map(Number);
    d.sort(h ? GE : bn), (c = c || ir);
    const _ = ir.length;
    for (let m = 0, y = d.length; m < y; ++m) {
      const v = d[m].toString(),
        S = this.executorsByZIndex_[v];
      for (let x = 0, b = c.length; x < b; ++x) {
        const R = c[x],
          A = S[R];
        if (A !== void 0) {
          const O = h === null ? void 0 : A.getZIndexContext(),
            G = O ? O.getContext() : t,
            z = this.maxExtent_ && R !== "Image" && R !== "Text";
          if (
            (z && (G.save(), this.clip(G, s)),
            !O || R === "Text" || R === "Image"
              ? A.execute(G, i, s, r, o, h)
              : O.pushFunction((D) => A.execute(D, i, s, r, o, h)),
            z && G.restore(),
            O)
          ) {
            O.offset();
            const D = d[m] * _ + x;
            this.deferredZIndexContexts_[D] ||
              (this.deferredZIndexContexts_[D] = []),
              this.deferredZIndexContexts_[D].push(O);
          }
        }
      }
    }
    this.renderedContext_ = t;
  }
  getDeferredZIndexContexts() {
    return this.deferredZIndexContexts_;
  }
  getRenderedContext() {
    return this.renderedContext_;
  }
  renderDeferred() {
    const t = this.deferredZIndexContexts_,
      i = Object.keys(t).map(Number).sort(bn);
    for (let s = 0, r = i.length; s < r; ++s)
      t[i[s]].forEach((o) => {
        o.draw(this.renderedContext_), o.clear();
      }),
        (t[i[s]].length = 0);
  }
}
const Nf = {};
function n2(l) {
  if (Nf[l] !== void 0) return Nf[l];
  const t = l * 2 + 1,
    i = l * l,
    s = new Array(i + 1);
  for (let o = 0; o <= l; ++o)
    for (let c = 0; c <= l; ++c) {
      const h = o * o + c * c;
      if (h > i) break;
      let d = s[h];
      d || ((d = []), (s[h] = d)),
        d.push(((l + o) * t + (l + c)) * 4 + 3),
        o > 0 && d.push(((l - o) * t + (l + c)) * 4 + 3),
        c > 0 &&
          (d.push(((l + o) * t + (l - c)) * 4 + 3),
          o > 0 && d.push(((l - o) * t + (l - c)) * 4 + 3));
    }
  const r = [];
  for (let o = 0, c = s.length; o < c; ++o) s[o] && r.push(...s[o]);
  return (Nf[l] = r), r;
}
function Ry(l, t, i, s) {
  return i !== void 0 && s !== void 0
    ? [i / l, s / t]
    : i !== void 0
      ? i / l
      : s !== void 0
        ? s / t
        : 1;
}
class oc extends lc {
  constructor(t) {
    t = t || {};
    const i = t.opacity !== void 0 ? t.opacity : 1,
      s = t.rotation !== void 0 ? t.rotation : 0,
      r = t.scale !== void 0 ? t.scale : 1,
      o = t.rotateWithView !== void 0 ? t.rotateWithView : !1;
    super({
      opacity: i,
      rotation: s,
      scale: r,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      rotateWithView: o,
      declutterMode: t.declutterMode,
    }),
      (this.anchor_ = t.anchor !== void 0 ? t.anchor : [0.5, 0.5]),
      (this.normalizedAnchor_ = null),
      (this.anchorOrigin_ =
        t.anchorOrigin !== void 0 ? t.anchorOrigin : "top-left"),
      (this.anchorXUnits_ =
        t.anchorXUnits !== void 0 ? t.anchorXUnits : "fraction"),
      (this.anchorYUnits_ =
        t.anchorYUnits !== void 0 ? t.anchorYUnits : "fraction"),
      (this.crossOrigin_ = t.crossOrigin !== void 0 ? t.crossOrigin : null);
    const c = t.img !== void 0 ? t.img : null;
    let h = t.src;
    Lt(
      !(h !== void 0 && c),
      "`image` and `src` cannot be provided at the same time",
    ),
      (h === void 0 || h.length === 0) && c && (h = c.src || It(c)),
      Lt(
        h !== void 0 && h.length > 0,
        "A defined and non-empty `src` or `image` must be provided",
      ),
      Lt(
        !((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0),
        "`width` or `height` cannot be provided together with `scale`",
      );
    let d;
    if (
      (t.src !== void 0
        ? (d = xt.IDLE)
        : c !== void 0 &&
          ("complete" in c
            ? c.complete
              ? (d = c.src ? xt.LOADED : xt.IDLE)
              : (d = xt.LOADING)
            : (d = xt.LOADED)),
      (this.color_ = t.color !== void 0 ? dr(t.color) : null),
      (this.iconImage_ = Fd(c, h, this.crossOrigin_, d, this.color_)),
      (this.offset_ = t.offset !== void 0 ? t.offset : [0, 0]),
      (this.offsetOrigin_ =
        t.offsetOrigin !== void 0 ? t.offsetOrigin : "top-left"),
      (this.origin_ = null),
      (this.size_ = t.size !== void 0 ? t.size : null),
      this.initialOptions_,
      t.width !== void 0 || t.height !== void 0)
    ) {
      let _, m;
      if (t.size) [_, m] = t.size;
      else {
        const y = this.getImage(1);
        if (y.width && y.height) (_ = y.width), (m = y.height);
        else if (y instanceof HTMLImageElement) {
          this.initialOptions_ = t;
          const v = () => {
            if ((this.unlistenImageChange(v), !this.initialOptions_)) return;
            const S = this.iconImage_.getSize();
            this.setScale(Ry(S[0], S[1], t.width, t.height));
          };
          this.listenImageChange(v);
          return;
        }
      }
      _ !== void 0 && this.setScale(Ry(_, m, t.width, t.height));
    }
  }
  clone() {
    let t, i, s;
    return (
      this.initialOptions_
        ? ((i = this.initialOptions_.width), (s = this.initialOptions_.height))
        : ((t = this.getScale()), (t = Array.isArray(t) ? t.slice() : t)),
      new oc({
        anchor: this.anchor_.slice(),
        anchorOrigin: this.anchorOrigin_,
        anchorXUnits: this.anchorXUnits_,
        anchorYUnits: this.anchorYUnits_,
        color:
          this.color_ && this.color_.slice
            ? this.color_.slice()
            : this.color_ || void 0,
        crossOrigin: this.crossOrigin_,
        offset: this.offset_.slice(),
        offsetOrigin: this.offsetOrigin_,
        opacity: this.getOpacity(),
        rotateWithView: this.getRotateWithView(),
        rotation: this.getRotation(),
        scale: t,
        width: i,
        height: s,
        size: this.size_ !== null ? this.size_.slice() : void 0,
        src: this.getSrc(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      })
    );
  }
  getAnchor() {
    let t = this.normalizedAnchor_;
    if (!t) {
      t = this.anchor_;
      const r = this.getSize();
      if (
        this.anchorXUnits_ == "fraction" ||
        this.anchorYUnits_ == "fraction"
      ) {
        if (!r) return null;
        (t = this.anchor_.slice()),
          this.anchorXUnits_ == "fraction" && (t[0] *= r[0]),
          this.anchorYUnits_ == "fraction" && (t[1] *= r[1]);
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!r) return null;
        t === this.anchor_ && (t = this.anchor_.slice()),
          (this.anchorOrigin_ == "top-right" ||
            this.anchorOrigin_ == "bottom-right") &&
            (t[0] = -t[0] + r[0]),
          (this.anchorOrigin_ == "bottom-left" ||
            this.anchorOrigin_ == "bottom-right") &&
            (t[1] = -t[1] + r[1]);
      }
      this.normalizedAnchor_ = t;
    }
    const i = this.getDisplacement(),
      s = this.getScaleArray();
    return [t[0] - i[0] / s[0], t[1] + i[1] / s[1]];
  }
  setAnchor(t) {
    (this.anchor_ = t), (this.normalizedAnchor_ = null);
  }
  getColor() {
    return this.color_;
  }
  getImage(t) {
    return this.iconImage_.getImage(t);
  }
  getPixelRatio(t) {
    return this.iconImage_.getPixelRatio(t);
  }
  getImageSize() {
    return this.iconImage_.getSize();
  }
  getImageState() {
    return this.iconImage_.getImageState();
  }
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }
  getOrigin() {
    if (this.origin_) return this.origin_;
    let t = this.offset_;
    if (this.offsetOrigin_ != "top-left") {
      const i = this.getSize(),
        s = this.iconImage_.getSize();
      if (!i || !s) return null;
      (t = t.slice()),
        (this.offsetOrigin_ == "top-right" ||
          this.offsetOrigin_ == "bottom-right") &&
          (t[0] = s[0] - i[0] - t[0]),
        (this.offsetOrigin_ == "bottom-left" ||
          this.offsetOrigin_ == "bottom-right") &&
          (t[1] = s[1] - i[1] - t[1]);
    }
    return (this.origin_ = t), this.origin_;
  }
  getSrc() {
    return this.iconImage_.getSrc();
  }
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize();
  }
  getWidth() {
    const t = this.getScaleArray();
    if (this.size_) return this.size_[0] * t[0];
    if (this.iconImage_.getImageState() == xt.LOADED)
      return this.iconImage_.getSize()[0] * t[0];
  }
  getHeight() {
    const t = this.getScaleArray();
    if (this.size_) return this.size_[1] * t[1];
    if (this.iconImage_.getImageState() == xt.LOADED)
      return this.iconImage_.getSize()[1] * t[1];
  }
  setScale(t) {
    delete this.initialOptions_, super.setScale(t);
  }
  listenImageChange(t) {
    this.iconImage_.addEventListener(pt.CHANGE, t);
  }
  load() {
    this.iconImage_.load();
  }
  unlistenImageChange(t) {
    this.iconImage_.removeEventListener(pt.CHANGE, t);
  }
  ready() {
    return this.iconImage_.ready();
  }
}
const qi = 0.5;
function s2(l, t, i, s, r, o, c, h, d) {
  const _ = d ? wu(r, d) : r,
    m = l[0] * qi,
    y = l[1] * qi,
    v = me(m, y);
  v.imageSmoothingEnabled = !1;
  const S = v.canvas,
    x = new Sx(v, qi, r, null, c, h, d ? ja(Au(), d) : null),
    b = i.length,
    R = Math.floor((256 * 256 * 256 - 1) / b),
    A = {};
  for (let G = 1; G <= b; ++G) {
    const z = i[G - 1],
      D = z.getStyleFunction() || s;
    if (!D) continue;
    let j = D(z, o);
    if (!j) continue;
    Array.isArray(j) || (j = [j]);
    const Z = (G * R).toString(16).padStart(7, "#00000");
    for (let F = 0, V = j.length; F < V; ++F) {
      const lt = j[F],
        it = lt.getGeometryFunction()(z);
      if (!it || !je(_, it.getExtent())) continue;
      const ot = lt.clone(),
        st = ot.getFill();
      st && st.setColor(Z);
      const nt = ot.getStroke();
      nt && (nt.setColor(Z), nt.setLineDash(null)), ot.setText(void 0);
      const Y = lt.getImage();
      if (Y) {
        const C = Y.getImageSize();
        if (!C) continue;
        const X = me(C[0], C[1], void 0, { alpha: !1 }),
          U = X.canvas;
        (X.fillStyle = Z),
          X.fillRect(0, 0, U.width, U.height),
          ot.setImage(
            new oc({
              img: U,
              anchor: Y.getAnchor(),
              anchorXUnits: "pixels",
              anchorYUnits: "pixels",
              offset: Y.getOrigin(),
              opacity: 1,
              size: Y.getSize(),
              scale: Y.getScale(),
              rotation: Y.getRotation(),
              rotateWithView: Y.getRotateWithView(),
            }),
          );
      }
      const q = ot.getZIndex() || 0;
      let W = A[q];
      W ||
        ((W = {}),
        (A[q] = W),
        (W.Polygon = []),
        (W.Circle = []),
        (W.LineString = []),
        (W.Point = []));
      const $ = it.getType();
      if ($ === "GeometryCollection") {
        const C = it.getGeometriesArrayRecursive();
        for (let X = 0, U = C.length; X < U; ++X) {
          const tt = C[X];
          W[tt.getType().replace("Multi", "")].push(tt, ot);
        }
      } else W[$.replace("Multi", "")].push(it, ot);
    }
  }
  const O = Object.keys(A).map(Number).sort(bn);
  for (let G = 0, z = O.length; G < z; ++G) {
    const D = A[O[G]];
    for (const j in D) {
      const Q = D[j];
      for (let Z = 0, F = Q.length; Z < F; Z += 2) {
        x.setStyle(Q[Z + 1]);
        for (let V = 0, lt = t.length; V < lt; ++V)
          x.setTransform(t[V]), x.drawGeometry(Q[Z]);
      }
    }
  }
  return v.getImageData(0, 0, S.width, S.height);
}
function l2(l, t, i) {
  const s = [];
  if (i) {
    const r = Math.floor(Math.round(l[0]) * qi),
      o = Math.floor(Math.round(l[1]) * qi),
      c = (se(r, 0, i.width - 1) + se(o, 0, i.height - 1) * i.width) * 4,
      h = i.data[c],
      d = i.data[c + 1],
      m = i.data[c + 2] + 256 * (d + 256 * h),
      y = Math.floor((256 * 256 * 256 - 1) / t.length);
    m && m % y === 0 && s.push(t[m / y - 1]);
  }
  return s;
}
class Pp extends Dn {
  constructor(t, i, s, r) {
    super(t),
      (this.inversePixelTransform = i),
      (this.frameState = s),
      (this.context = r);
  }
}
const r2 = 5;
class a2 extends Ba {
  constructor(t) {
    super(),
      (this.ready = !0),
      (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)),
      (this.layer_ = t),
      (this.staleKeys_ = new Array()),
      (this.maxStaleKeys = r2);
  }
  getStaleKeys() {
    return this.staleKeys_;
  }
  prependStaleKey(t) {
    this.staleKeys_.unshift(t),
      this.staleKeys_.length > this.maxStaleKeys &&
        (this.staleKeys_.length = this.maxStaleKeys);
  }
  getFeatures(t) {
    return _t();
  }
  getData(t) {
    return null;
  }
  prepareFrame(t) {
    return _t();
  }
  renderFrame(t, i) {
    return _t();
  }
  forEachFeatureAtCoordinate(t, i, s, r, o) {}
  getLayer() {
    return this.layer_;
  }
  handleFontsChanged() {}
  handleImageChange_(t) {
    const i = t.target;
    (i.getState() === xt.LOADED || i.getState() === xt.ERROR) &&
      this.renderIfReadyAndVisible();
  }
  loadImage(t) {
    let i = t.getState();
    return (
      i != xt.LOADED &&
        i != xt.ERROR &&
        t.addEventListener(pt.CHANGE, this.boundHandleImageChange_),
      i == xt.IDLE && (t.load(), (i = t.getState())),
      i == xt.LOADED
    );
  }
  renderIfReadyAndVisible() {
    const t = this.getLayer();
    t && t.getVisible() && t.getSourceState() === "ready" && t.changed();
  }
  renderDeferred(t) {}
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}
const by = [];
let $l = null;
function o2() {
  $l = me(1, 1, void 0, { willReadFrequently: !0 });
}
class jp extends a2 {
  constructor(t) {
    super(t),
      (this.container = null),
      this.renderedResolution,
      (this.tempTransform = Ni()),
      (this.pixelTransform = Ni()),
      (this.inversePixelTransform = Ni()),
      (this.context = null),
      (this.deferredContext_ = null),
      (this.containerReused = !1),
      (this.frameState = null);
  }
  getImageData(t, i, s) {
    $l || o2(), $l.clearRect(0, 0, 1, 1);
    let r;
    try {
      $l.drawImage(t, i, s, 1, 1, 0, 0, 1, 1),
        (r = $l.getImageData(0, 0, 1, 1).data);
    } catch {
      return ($l = null), null;
    }
    return r;
  }
  getBackground(t) {
    let s = this.getLayer().getBackground();
    return (
      typeof s == "function" && (s = s(t.viewState.resolution)), s || void 0
    );
  }
  useContainer(t, i, s) {
    const r = this.getLayer().getClassName();
    let o, c;
    if (
      t &&
      t.className === r &&
      (!s ||
        (t &&
          t.style.backgroundColor &&
          ys(dr(t.style.backgroundColor), dr(s))))
    ) {
      const h = t.firstElementChild;
      h instanceof HTMLCanvasElement && (c = h.getContext("2d"));
    }
    if (
      (c && c.canvas.style.transform === i
        ? ((this.container = t),
          (this.context = c),
          (this.containerReused = !0))
        : this.containerReused
          ? ((this.container = null),
            (this.context = null),
            (this.containerReused = !1))
          : this.container && (this.container.style.backgroundColor = null),
      !this.container)
    ) {
      (o = document.createElement("div")), (o.className = r);
      let h = o.style;
      (h.position = "absolute"),
        (h.width = "100%"),
        (h.height = "100%"),
        (c = me());
      const d = c.canvas;
      o.appendChild(d),
        (h = d.style),
        (h.position = "absolute"),
        (h.left = "0"),
        (h.transformOrigin = "top left"),
        (this.container = o),
        (this.context = c);
    }
    !this.containerReused &&
      s &&
      !this.container.style.backgroundColor &&
      (this.container.style.backgroundColor = s);
  }
  clipUnrotated(t, i, s) {
    const r = sl(s),
      o = qu(s),
      c = Ku(s),
      h = Zu(s);
    _e(i.coordinateToPixelTransform, r),
      _e(i.coordinateToPixelTransform, o),
      _e(i.coordinateToPixelTransform, c),
      _e(i.coordinateToPixelTransform, h);
    const d = this.inversePixelTransform;
    _e(d, r),
      _e(d, o),
      _e(d, c),
      _e(d, h),
      t.save(),
      t.beginPath(),
      t.moveTo(Math.round(r[0]), Math.round(r[1])),
      t.lineTo(Math.round(o[0]), Math.round(o[1])),
      t.lineTo(Math.round(c[0]), Math.round(c[1])),
      t.lineTo(Math.round(h[0]), Math.round(h[1])),
      t.clip();
  }
  prepareContainer(t, i) {
    const s = t.extent,
      r = t.viewState.resolution,
      o = t.viewState.rotation,
      c = t.pixelRatio,
      h = Math.round((Ft(s) / r) * c),
      d = Math.round((Fe(s) / r) * c);
    On(
      this.pixelTransform,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / c,
      1 / c,
      o,
      -h / 2,
      -d / 2,
    ),
      up(this.inversePixelTransform, this.pixelTransform);
    const _ = NS(this.pixelTransform);
    if (
      (this.useContainer(i, _, this.getBackground(t)), !this.containerReused)
    ) {
      const m = this.context.canvas;
      m.width != h || m.height != d
        ? ((m.width = h), (m.height = d))
        : this.context.clearRect(0, 0, h, d),
        _ !== m.style.transform && (m.style.transform = _);
    }
  }
  dispatchRenderEvent_(t, i, s) {
    const r = this.getLayer();
    if (r.hasListener(t)) {
      const o = new Pp(t, this.inversePixelTransform, s, i);
      r.dispatchEvent(o);
    }
  }
  preRender(t, i) {
    (this.frameState = i),
      !i.declutter && this.dispatchRenderEvent_(Ei.PRERENDER, t, i);
  }
  postRender(t, i) {
    i.declutter || this.dispatchRenderEvent_(Ei.POSTRENDER, t, i);
  }
  renderDeferredInternal(t) {}
  getRenderContext(t) {
    return (
      t.declutter &&
        !this.deferredContext_ &&
        (this.deferredContext_ = new Bp()),
      t.declutter ? this.deferredContext_.getContext() : this.context
    );
  }
  renderDeferred(t) {
    t.declutter &&
      (this.dispatchRenderEvent_(Ei.PRERENDER, this.context, t),
      t.declutter &&
        this.deferredContext_ &&
        (this.deferredContext_.draw(this.context),
        this.deferredContext_.clear()),
      this.renderDeferredInternal(t),
      this.dispatchRenderEvent_(Ei.POSTRENDER, this.context, t));
  }
  getRenderTransform(t, i, s, r, o, c, h) {
    const d = o / 2,
      _ = c / 2,
      m = r / i,
      y = -m,
      v = -t[0] + h,
      S = -t[1];
    return On(this.tempTransform, d, _, m, y, -s, v, S);
  }
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
}
class u2 extends jp {
  constructor(t) {
    super(t),
      (this.boundHandleStyleImageChange_ =
        this.handleStyleImageChange_.bind(this)),
      this.animatingOrInteracting_,
      (this.hitDetectionImageData_ = null),
      (this.clipped_ = !1),
      (this.renderedFeatures_ = null),
      (this.renderedRevision_ = -1),
      (this.renderedResolution_ = NaN),
      (this.renderedExtent_ = Ti()),
      (this.wrappedRenderedExtent_ = Ti()),
      this.renderedRotation_,
      (this.renderedCenter_ = null),
      (this.renderedProjection_ = null),
      (this.renderedPixelRatio_ = 1),
      (this.renderedRenderOrder_ = null),
      this.renderedFrameDeclutter_,
      (this.replayGroup_ = null),
      (this.replayGroupChanged = !0),
      (this.clipping = !0),
      (this.targetContext_ = null),
      (this.opacity_ = 1);
  }
  renderWorlds(t, i, s) {
    const r = i.extent,
      o = i.viewState,
      c = o.center,
      h = o.resolution,
      d = o.projection,
      _ = o.rotation,
      m = d.getExtent(),
      y = this.getLayer().getSource(),
      v = this.getLayer().getDeclutter(),
      S = i.pixelRatio,
      x = i.viewHints,
      b = !(x[Me.ANIMATING] || x[Me.INTERACTING]),
      R = this.context,
      A = Math.round((Ft(r) / h) * S),
      O = Math.round((Fe(r) / h) * S),
      G = y.getWrapX() && d.canWrapX(),
      z = G ? Ft(m) : null,
      D = G ? Math.ceil((r[2] - m[2]) / z) + 1 : 1;
    let j = G ? Math.floor((r[0] - m[0]) / z) : 0;
    do {
      let Q = this.getRenderTransform(c, h, 0, S, A, O, j * z);
      i.declutter && (Q = Q.slice(0)),
        t.execute(
          R,
          [R.canvas.width, R.canvas.height],
          Q,
          _,
          b,
          s === void 0 ? ir : s ? Hp : e2,
          s ? v && i.declutter[v] : void 0,
        );
    } while (++j < D);
  }
  setDrawContext_() {
    this.opacity_ !== 1 &&
      ((this.targetContext_ = this.context),
      (this.context = me(
        this.context.canvas.width,
        this.context.canvas.height,
        by,
      )));
  }
  resetDrawContext_() {
    if (this.opacity_ !== 1) {
      const t = this.targetContext_.globalAlpha;
      (this.targetContext_.globalAlpha = this.opacity_),
        this.targetContext_.drawImage(this.context.canvas, 0, 0),
        (this.targetContext_.globalAlpha = t),
        ec(this.context),
        by.push(this.context.canvas),
        (this.context = this.targetContext_),
        (this.targetContext_ = null);
    }
  }
  renderDeclutter(t) {
    !this.replayGroup_ ||
      !this.getLayer().getDeclutter() ||
      this.renderWorlds(this.replayGroup_, t, !0);
  }
  renderDeferredInternal(t) {
    this.replayGroup_ &&
      (this.replayGroup_.renderDeferred(),
      this.clipped_ && this.context.restore(),
      this.resetDrawContext_());
  }
  renderFrame(t, i) {
    const s = t.layerStatesArray[t.layerIndex];
    this.opacity_ = s.opacity;
    const r = t.viewState;
    this.prepareContainer(t, i);
    const o = this.context,
      c = this.replayGroup_;
    let h = c && !c.isEmpty();
    if (
      !h &&
      !(
        this.getLayer().hasListener(Ei.PRERENDER) ||
        this.getLayer().hasListener(Ei.POSTRENDER)
      )
    )
      return null;
    this.setDrawContext_(), this.preRender(o, t);
    const d = r.projection;
    if (((this.clipped_ = !1), h && s.extent && this.clipping)) {
      const _ = us(s.extent, d);
      (h = je(_, t.extent)),
        (this.clipped_ = h && !Sa(_, t.extent)),
        this.clipped_ && this.clipUnrotated(o, t, _);
    }
    return (
      h &&
        this.renderWorlds(c, t, this.getLayer().getDeclutter() ? !1 : void 0),
      !t.declutter && this.clipped_ && o.restore(),
      this.postRender(o, t),
      this.renderedRotation_ !== r.rotation &&
        ((this.renderedRotation_ = r.rotation),
        (this.hitDetectionImageData_ = null)),
      t.declutter || this.resetDrawContext_(),
      this.container
    );
  }
  getFeatures(t) {
    return new Promise((i) => {
      if (
        this.frameState &&
        !this.hitDetectionImageData_ &&
        !this.animatingOrInteracting_
      ) {
        const s = this.frameState.size.slice(),
          r = this.renderedCenter_,
          o = this.renderedResolution_,
          c = this.renderedRotation_,
          h = this.renderedProjection_,
          d = this.wrappedRenderedExtent_,
          _ = this.getLayer(),
          m = [],
          y = s[0] * qi,
          v = s[1] * qi;
        m.push(this.getRenderTransform(r, o, c, qi, y, v, 0).slice());
        const S = _.getSource(),
          x = h.getExtent();
        if (S.getWrapX() && h.canWrapX() && !Sa(x, d)) {
          let R = d[0];
          const A = Ft(x);
          let O = 0,
            G;
          for (; R < x[0]; )
            --O,
              (G = A * O),
              m.push(this.getRenderTransform(r, o, c, qi, y, v, G).slice()),
              (R += A);
          for (O = 0, R = d[2]; R > x[2]; )
            ++O,
              (G = A * O),
              m.push(this.getRenderTransform(r, o, c, qi, y, v, G).slice()),
              (R -= A);
        }
        const b = Au();
        this.hitDetectionImageData_ = s2(
          s,
          m,
          this.renderedFeatures_,
          _.getStyleFunction(),
          d,
          o,
          c,
          hy(o, this.renderedPixelRatio_),
          b ? h : null,
        );
      }
      i(l2(t, this.renderedFeatures_, this.hitDetectionImageData_));
    });
  }
  forEachFeatureAtCoordinate(t, i, s, r, o) {
    var v, S;
    if (!this.replayGroup_) return;
    const c = i.viewState.resolution,
      h = i.viewState.rotation,
      d = this.getLayer(),
      _ = {},
      m = function (x, b, R) {
        const A = It(x),
          O = _[A];
        if (O) {
          if (O !== !0 && R < O.distanceSq) {
            if (R === 0)
              return (_[A] = !0), o.splice(o.lastIndexOf(O), 1), r(x, d, b);
            (O.geometry = b), (O.distanceSq = R);
          }
        } else {
          if (R === 0) return (_[A] = !0), r(x, d, b);
          o.push(
            (_[A] = {
              feature: x,
              layer: d,
              geometry: b,
              distanceSq: R,
              callback: r,
            }),
          );
        }
      },
      y = this.getLayer().getDeclutter();
    return this.replayGroup_.forEachFeatureAtCoordinate(
      t,
      c,
      h,
      s,
      m,
      y
        ? (S = (v = i.declutter) == null ? void 0 : v[y]) == null
          ? void 0
          : S.all().map((x) => x.value)
        : null,
    );
  }
  handleFontsChanged() {
    const t = this.getLayer();
    t.getVisible() && this.replayGroup_ && t.changed();
  }
  handleStyleImageChange_(t) {
    this.renderIfReadyAndVisible();
  }
  prepareFrame(t) {
    const i = this.getLayer(),
      s = i.getSource();
    if (!s) return !1;
    const r = t.viewHints[Me.ANIMATING],
      o = t.viewHints[Me.INTERACTING],
      c = i.getUpdateWhileAnimating(),
      h = i.getUpdateWhileInteracting();
    if ((this.ready && !c && r) || (!h && o))
      return (this.animatingOrInteracting_ = !0), !0;
    this.animatingOrInteracting_ = !1;
    const d = t.extent,
      _ = t.viewState,
      m = _.projection,
      y = _.resolution,
      v = t.pixelRatio,
      S = i.getRevision(),
      x = i.getRenderBuffer();
    let b = i.getRenderOrder();
    b === void 0 && (b = Tx);
    const R = _.center.slice(),
      A = dd(d, x * y),
      O = A.slice(),
      G = [A.slice()],
      z = m.getExtent();
    if (s.getWrapX() && m.canWrapX() && !Sa(z, t.extent)) {
      const nt = Ft(z),
        Y = Math.max(Ft(A) / 2, nt);
      (A[0] = z[0] - Y), (A[2] = z[2] + Y), ip(R, m);
      const q = $y(G[0], m);
      q[0] < z[0] && q[2] < z[2]
        ? G.push([q[0] + nt, q[1], q[2] + nt, q[3]])
        : q[0] > z[0] &&
          q[2] > z[2] &&
          G.push([q[0] - nt, q[1], q[2] - nt, q[3]]);
    }
    if (
      this.ready &&
      this.renderedResolution_ == y &&
      this.renderedRevision_ == S &&
      this.renderedRenderOrder_ == b &&
      this.renderedFrameDeclutter_ === !!t.declutter &&
      Sa(this.wrappedRenderedExtent_, A)
    )
      return (
        ys(this.renderedExtent_, O) ||
          ((this.hitDetectionImageData_ = null), (this.renderedExtent_ = O)),
        (this.renderedCenter_ = R),
        (this.replayGroupChanged = !1),
        !0
      );
    this.replayGroup_ = null;
    const D = new Qx(Np(y, v), A, y, v),
      j = Au();
    let Q;
    if (j) {
      for (let nt = 0, Y = G.length; nt < Y; ++nt) {
        const q = G[nt],
          W = wu(q, m);
        s.loadFeatures(W, DS(y, m), j);
      }
      Q = ja(j, m);
    } else
      for (let nt = 0, Y = G.length; nt < Y; ++nt) s.loadFeatures(G[nt], y, m);
    const Z = hy(y, v);
    let F = !0;
    const V = (nt, Y) => {
        let q;
        const W = nt.getStyleFunction() || i.getStyleFunction();
        if ((W && (q = W(nt, y)), q)) {
          const $ = this.renderFeature(
            nt,
            Z,
            q,
            D,
            Q,
            this.getLayer().getDeclutter(),
            Y,
          );
          F = F && !$;
        }
      },
      lt = wu(A, m),
      it = s.getFeaturesInExtent(lt);
    b && it.sort(b);
    for (let nt = 0, Y = it.length; nt < Y; ++nt) V(it[nt], nt);
    (this.renderedFeatures_ = it), (this.ready = F);
    const ot = D.finish(),
      st = new i2(
        A,
        y,
        v,
        s.getOverlaps(),
        ot,
        i.getRenderBuffer(),
        !!t.declutter,
      );
    return (
      (this.renderedResolution_ = y),
      (this.renderedRevision_ = S),
      (this.renderedRenderOrder_ = b),
      (this.renderedFrameDeclutter_ = !!t.declutter),
      (this.renderedExtent_ = O),
      (this.wrappedRenderedExtent_ = A),
      (this.renderedCenter_ = R),
      (this.renderedProjection_ = m),
      (this.renderedPixelRatio_ = v),
      (this.replayGroup_ = st),
      (this.hitDetectionImageData_ = null),
      (this.replayGroupChanged = !0),
      !0
    );
  }
  renderFeature(t, i, s, r, o, c, h) {
    if (!s) return !1;
    let d = !1;
    if (Array.isArray(s))
      for (let _ = 0, m = s.length; _ < m; ++_)
        d = fy(r, t, s[_], i, this.boundHandleStyleImageChange_, o, c, h) || d;
    else d = fy(r, t, s, i, this.boundHandleStyleImageChange_, o, c, h);
    return d;
  }
}
let al = 0;
const Ge = 1 << al++,
  At = 1 << al++,
  Pe = 1 << al++,
  Ii = 1 << al++,
  il = 1 << al++,
  Ca = 1 << al++,
  yu = Math.pow(2, al) - 1,
  Yd = {
    [Ge]: "boolean",
    [At]: "number",
    [Pe]: "string",
    [Ii]: "color",
    [il]: "number[]",
    [Ca]: "size",
  },
  c2 = Object.keys(Yd).map(Number).sort(bn);
function h2(l) {
  return l in Yd;
}
function Ra(l) {
  const t = [];
  for (const i of c2) ba(l, i) && t.push(Yd[i]);
  return t.length === 0
    ? "untyped"
    : t.length < 3
      ? t.join(" or ")
      : t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
}
function ba(l, t) {
  return (l & t) === t;
}
function ss(l, t) {
  return l === t;
}
class ae {
  constructor(t, i) {
    if (!h2(t))
      throw new Error(
        `literal expressions must have a specific type, got ${Ra(t)}`,
      );
    (this.type = t), (this.value = i);
  }
}
class f2 {
  constructor(t, i, ...s) {
    (this.type = t), (this.operator = i), (this.args = s);
  }
}
function Zp() {
  return {
    variables: new Set(),
    properties: new Set(),
    featureId: !1,
    geometryType: !1,
    mapState: !1,
  };
}
function Se(l, t, i) {
  switch (typeof l) {
    case "boolean": {
      if (ss(t, Pe)) return new ae(Pe, l ? "true" : "false");
      if (!ba(t, Ge)) throw new Error(`got a boolean, but expected ${Ra(t)}`);
      return new ae(Ge, l);
    }
    case "number": {
      if (ss(t, Ca)) return new ae(Ca, Ke(l));
      if (ss(t, Ge)) return new ae(Ge, !!l);
      if (ss(t, Pe)) return new ae(Pe, l.toString());
      if (!ba(t, At)) throw new Error(`got a number, but expected ${Ra(t)}`);
      return new ae(At, l);
    }
    case "string": {
      if (ss(t, Ii)) return new ae(Ii, Nd(l));
      if (ss(t, Ge)) return new ae(Ge, !!l);
      if (!ba(t, Pe)) throw new Error(`got a string, but expected ${Ra(t)}`);
      return new ae(Pe, l);
    }
  }
  if (!Array.isArray(l))
    throw new Error("expression must be an array or a primitive value");
  if (l.length === 0) throw new Error("empty expression");
  if (typeof l[0] == "string") return T2(l, t, i);
  for (const s of l)
    if (typeof s != "number") throw new Error("expected an array of numbers");
  if (ss(t, Ca)) {
    if (l.length !== 2)
      throw new Error(
        `expected an array of two values for a size, got ${l.length}`,
      );
    return new ae(Ca, l);
  }
  if (ss(t, Ii)) {
    if (l.length === 3) return new ae(Ii, [...l, 1]);
    if (l.length === 4) return new ae(Ii, l);
    throw new Error(
      `expected an array of 3 or 4 values for a color, got ${l.length}`,
    );
  }
  if (!ba(t, il))
    throw new Error(`got an array of numbers, but expected ${Ra(t)}`);
  return new ae(il, l);
}
const H = {
    Get: "get",
    Var: "var",
    Concat: "concat",
    GeometryType: "geometry-type",
    LineMetric: "line-metric",
    Any: "any",
    All: "all",
    Not: "!",
    Resolution: "resolution",
    Zoom: "zoom",
    Time: "time",
    Equal: "==",
    NotEqual: "!=",
    GreaterThan: ">",
    GreaterThanOrEqualTo: ">=",
    LessThan: "<",
    LessThanOrEqualTo: "<=",
    Multiply: "*",
    Divide: "/",
    Add: "+",
    Subtract: "-",
    Clamp: "clamp",
    Mod: "%",
    Pow: "^",
    Abs: "abs",
    Floor: "floor",
    Ceil: "ceil",
    Round: "round",
    Sin: "sin",
    Cos: "cos",
    Atan: "atan",
    Sqrt: "sqrt",
    Match: "match",
    Between: "between",
    Interpolate: "interpolate",
    Coalesce: "coalesce",
    Case: "case",
    In: "in",
    Number: "number",
    String: "string",
    Array: "array",
    Color: "color",
    Id: "id",
    Band: "band",
    Palette: "palette",
    ToString: "to-string",
    Has: "has",
  },
  d2 = {
    [H.Get]: gt(St(1, 1 / 0), Ay),
    [H.Var]: gt(St(1, 1), g2),
    [H.Has]: gt(St(1, 1 / 0), Ay),
    [H.Id]: gt(_2, Kl),
    [H.Concat]: gt(St(2, 1 / 0), zt(Pe)),
    [H.GeometryType]: gt(m2, Kl),
    [H.LineMetric]: gt(Kl),
    [H.Resolution]: gt(Gf, Kl),
    [H.Zoom]: gt(Gf, Kl),
    [H.Time]: gt(Gf, Kl),
    [H.Any]: gt(St(2, 1 / 0), zt(Ge)),
    [H.All]: gt(St(2, 1 / 0), zt(Ge)),
    [H.Not]: gt(St(1, 1), zt(Ge)),
    [H.Equal]: gt(St(2, 2), zt(yu)),
    [H.NotEqual]: gt(St(2, 2), zt(yu)),
    [H.GreaterThan]: gt(St(2, 2), zt(At)),
    [H.GreaterThanOrEqualTo]: gt(St(2, 2), zt(At)),
    [H.LessThan]: gt(St(2, 2), zt(At)),
    [H.LessThanOrEqualTo]: gt(St(2, 2), zt(At)),
    [H.Multiply]: gt(St(2, 1 / 0), wy),
    [H.Coalesce]: gt(St(2, 1 / 0), wy),
    [H.Divide]: gt(St(2, 2), zt(At)),
    [H.Add]: gt(St(2, 1 / 0), zt(At)),
    [H.Subtract]: gt(St(2, 2), zt(At)),
    [H.Clamp]: gt(St(3, 3), zt(At)),
    [H.Mod]: gt(St(2, 2), zt(At)),
    [H.Pow]: gt(St(2, 2), zt(At)),
    [H.Abs]: gt(St(1, 1), zt(At)),
    [H.Floor]: gt(St(1, 1), zt(At)),
    [H.Ceil]: gt(St(1, 1), zt(At)),
    [H.Round]: gt(St(1, 1), zt(At)),
    [H.Sin]: gt(St(1, 1), zt(At)),
    [H.Cos]: gt(St(1, 1), zt(At)),
    [H.Atan]: gt(St(1, 2), zt(At)),
    [H.Sqrt]: gt(St(1, 1), zt(At)),
    [H.Match]: gt(St(4, 1 / 0), My, p2),
    [H.Between]: gt(St(3, 3), zt(At)),
    [H.Interpolate]: gt(St(6, 1 / 0), My, v2),
    [H.Case]: gt(St(3, 1 / 0), y2, E2),
    [H.In]: gt(St(2, 2), S2),
    [H.Number]: gt(St(1, 1 / 0), zt(yu)),
    [H.String]: gt(St(1, 1 / 0), zt(yu)),
    [H.Array]: gt(St(1, 1 / 0), zt(At)),
    [H.Color]: gt(St(1, 4), zt(At)),
    [H.Band]: gt(St(1, 3), zt(At)),
    [H.Palette]: gt(St(2, 2), x2),
    [H.ToString]: gt(St(1, 1), zt(Ge | At | Pe | Ii)),
  };
function Ay(l, t, i) {
  const s = l.length - 1,
    r = new Array(s);
  for (let o = 0; o < s; ++o) {
    const c = l[o + 1];
    switch (typeof c) {
      case "number": {
        r[o] = new ae(At, c);
        break;
      }
      case "string": {
        r[o] = new ae(Pe, c);
        break;
      }
      default:
        throw new Error(
          `expected a string key or numeric array index for a get operation, got ${c}`,
        );
    }
    o === 0 && i.properties.add(String(c));
  }
  return r;
}
function g2(l, t, i) {
  const s = l[1];
  if (typeof s != "string")
    throw new Error("expected a string argument for var operation");
  return i.variables.add(s), [new ae(Pe, s)];
}
function _2(l, t, i) {
  i.featureId = !0;
}
function m2(l, t, i) {
  i.geometryType = !0;
}
function Gf(l, t, i) {
  i.mapState = !0;
}
function Kl(l, t, i) {
  const s = l[0];
  if (l.length !== 1)
    throw new Error(`expected no arguments for ${s} operation`);
  return [];
}
function St(l, t) {
  return function (i, s, r) {
    const o = i[0],
      c = i.length - 1;
    if (l === t) {
      if (c !== l) {
        const h = l === 1 ? "" : "s";
        throw new Error(`expected ${l} argument${h} for ${o}, got ${c}`);
      }
    } else if (c < l || c > t) {
      const h = t === 1 / 0 ? `${l} or more` : `${l} to ${t}`;
      throw new Error(`expected ${h} arguments for ${o}, got ${c}`);
    }
  };
}
function wy(l, t, i) {
  const s = l.length - 1,
    r = new Array(s);
  for (let o = 0; o < s; ++o) {
    const c = Se(l[o + 1], t, i);
    r[o] = c;
  }
  return r;
}
function zt(l) {
  return function (t, i, s) {
    const r = t.length - 1,
      o = new Array(r);
    for (let c = 0; c < r; ++c) {
      const h = Se(t[c + 1], l, s);
      o[c] = h;
    }
    return o;
  };
}
function y2(l, t, i) {
  const s = l[0],
    r = l.length - 1;
  if (r % 2 === 0)
    throw new Error(
      `expected an odd number of arguments for ${s}, got ${r} instead`,
    );
}
function My(l, t, i) {
  const s = l[0],
    r = l.length - 1;
  if (r % 2 === 1)
    throw new Error(
      `expected an even number of arguments for operation ${s}, got ${r} instead`,
    );
}
function p2(l, t, i) {
  const s = l.length - 1,
    r = Pe | At | Ge,
    o = Se(l[1], r, i),
    c = Se(l[l.length - 1], t, i),
    h = new Array(s - 2);
  for (let d = 0; d < s - 2; d += 2) {
    try {
      const _ = Se(l[d + 2], o.type, i);
      h[d] = _;
    } catch (_) {
      throw new Error(
        `failed to parse argument ${d + 1} of match expression: ${_.message}`,
      );
    }
    try {
      const _ = Se(l[d + 3], c.type, i);
      h[d + 1] = _;
    } catch (_) {
      throw new Error(
        `failed to parse argument ${d + 2} of match expression: ${_.message}`,
      );
    }
  }
  return [o, ...h, c];
}
function v2(l, t, i) {
  const s = l[1];
  let r;
  switch (s[0]) {
    case "linear":
      r = 1;
      break;
    case "exponential":
      const d = s[1];
      if (typeof d != "number" || d <= 0)
        throw new Error(
          `expected a number base for exponential interpolation, got ${JSON.stringify(d)} instead`,
        );
      r = d;
      break;
    default:
      throw new Error(`invalid interpolation type: ${JSON.stringify(s)}`);
  }
  const o = new ae(At, r);
  let c;
  try {
    c = Se(l[2], At, i);
  } catch (d) {
    throw new Error(
      `failed to parse argument 1 in interpolate expression: ${d.message}`,
    );
  }
  const h = new Array(l.length - 3);
  for (let d = 0; d < h.length; d += 2) {
    try {
      const _ = Se(l[d + 3], At, i);
      h[d] = _;
    } catch (_) {
      throw new Error(
        `failed to parse argument ${d + 2} for interpolate expression: ${_.message}`,
      );
    }
    try {
      const _ = Se(l[d + 4], t, i);
      h[d + 1] = _;
    } catch (_) {
      throw new Error(
        `failed to parse argument ${d + 3} for interpolate expression: ${_.message}`,
      );
    }
  }
  return [o, c, ...h];
}
function E2(l, t, i) {
  const s = Se(l[l.length - 1], t, i),
    r = new Array(l.length - 1);
  for (let o = 0; o < r.length - 1; o += 2) {
    try {
      const c = Se(l[o + 1], Ge, i);
      r[o] = c;
    } catch (c) {
      throw new Error(
        `failed to parse argument ${o} of case expression: ${c.message}`,
      );
    }
    try {
      const c = Se(l[o + 2], s.type, i);
      r[o + 1] = c;
    } catch (c) {
      throw new Error(
        `failed to parse argument ${o + 1} of case expression: ${c.message}`,
      );
    }
  }
  return (r[r.length - 1] = s), r;
}
function S2(l, t, i) {
  let s = l[2];
  if (!Array.isArray(s))
    throw new Error(
      'the second argument for the "in" operator must be an array',
    );
  let r;
  if (typeof s[0] == "string") {
    if (s[0] !== "literal")
      throw new Error(
        'for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions',
      );
    if (!Array.isArray(s[1]))
      throw new Error(
        'failed to parse "in" expression: the literal operator must be followed by an array',
      );
    (s = s[1]), (r = Pe);
  } else r = At;
  const o = new Array(s.length);
  for (let h = 0; h < o.length; h++)
    try {
      const d = Se(s[h], r, i);
      o[h] = d;
    } catch (d) {
      throw new Error(
        `failed to parse haystack item ${h} for "in" expression: ${d.message}`,
      );
    }
  return [Se(l[1], r, i), ...o];
}
function x2(l, t, i) {
  let s;
  try {
    s = Se(l[1], At, i);
  } catch (c) {
    throw new Error(
      `failed to parse first argument in palette expression: ${c.message}`,
    );
  }
  const r = l[2];
  if (!Array.isArray(r))
    throw new Error("the second argument of palette must be an array");
  const o = new Array(r.length);
  for (let c = 0; c < o.length; c++) {
    let h;
    try {
      h = Se(r[c], Ii, i);
    } catch (d) {
      throw new Error(
        `failed to parse color at index ${c} in palette expression: ${d.message}`,
      );
    }
    if (!(h instanceof ae))
      throw new Error(
        `the palette color at index ${c} must be a literal value`,
      );
    o[c] = h;
  }
  return [s, ...o];
}
function gt(...l) {
  return function (t, i, s) {
    const r = t[0];
    let o;
    for (let c = 0; c < l.length; c++) {
      const h = l[c](t, i, s);
      if (c == l.length - 1) {
        if (!h)
          throw new Error(
            "expected last argument validator to return the parsed args",
          );
        o = h;
      }
    }
    return new f2(i, r, ...o);
  };
}
function T2(l, t, i) {
  const s = l[0],
    r = d2[s];
  if (!r) throw new Error(`unknown operator: ${s}`);
  return r(l, t, i);
}
function Kp(l) {
  if (!l) return "";
  const t = l.getType();
  switch (t) {
    case "Point":
    case "LineString":
    case "Polygon":
      return t;
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
      return t.substring(5);
    case "Circle":
      return "Polygon";
    case "GeometryCollection":
      return Kp(l.getGeometries()[0]);
    default:
      return "";
  }
}
function qp() {
  return {
    variables: {},
    properties: {},
    resolution: NaN,
    featureId: null,
    geometryType: "",
  };
}
function Ln(l, t, i) {
  const s = Se(l, t, i);
  return Gi(s);
}
function Gi(l, t) {
  if (l instanceof ae) {
    if (l.type === Ii && typeof l.value == "string") {
      const s = Nd(l.value);
      return function () {
        return s;
      };
    }
    return function () {
      return l.value;
    };
  }
  const i = l.operator;
  switch (i) {
    case H.Number:
    case H.String:
    case H.Coalesce:
      return C2(l);
    case H.Get:
    case H.Var:
    case H.Has:
      return R2(l);
    case H.Id:
      return (s) => s.featureId;
    case H.GeometryType:
      return (s) => s.geometryType;
    case H.Concat: {
      const s = l.args.map((r) => Gi(r));
      return (r) => "".concat(...s.map((o) => o(r).toString()));
    }
    case H.Resolution:
      return (s) => s.resolution;
    case H.Any:
    case H.All:
    case H.Between:
    case H.In:
    case H.Not:
      return A2(l);
    case H.Equal:
    case H.NotEqual:
    case H.LessThan:
    case H.LessThanOrEqualTo:
    case H.GreaterThan:
    case H.GreaterThanOrEqualTo:
      return b2(l);
    case H.Multiply:
    case H.Divide:
    case H.Add:
    case H.Subtract:
    case H.Clamp:
    case H.Mod:
    case H.Pow:
    case H.Abs:
    case H.Floor:
    case H.Ceil:
    case H.Round:
    case H.Sin:
    case H.Cos:
    case H.Atan:
    case H.Sqrt:
      return w2(l);
    case H.Case:
      return M2(l);
    case H.Match:
      return O2(l);
    case H.Interpolate:
      return D2(l);
    case H.ToString:
      return L2(l);
    default:
      throw new Error(`Unsupported operator ${i}`);
  }
}
function C2(l, t) {
  const i = l.operator,
    s = l.args.length,
    r = new Array(s);
  for (let o = 0; o < s; ++o) r[o] = Gi(l.args[o]);
  switch (i) {
    case H.Coalesce:
      return (o) => {
        for (let c = 0; c < s; ++c) {
          const h = r[c](o);
          if (typeof h < "u" && h !== null) return h;
        }
        throw new Error("Expected one of the values to be non-null");
      };
    case H.Number:
    case H.String:
      return (o) => {
        for (let c = 0; c < s; ++c) {
          const h = r[c](o);
          if (typeof h === i) return h;
        }
        throw new Error(`Expected one of the values to be a ${i}`);
      };
    default:
      throw new Error(`Unsupported assertion operator ${i}`);
  }
}
function R2(l, t) {
  const s = l.args[0].value;
  switch (l.operator) {
    case H.Get:
      return (r) => {
        const o = l.args;
        let c = r.properties[s];
        for (let h = 1, d = o.length; h < d; ++h) {
          const m = o[h].value;
          c = c[m];
        }
        return c;
      };
    case H.Var:
      return (r) => r.variables[s];
    case H.Has:
      return (r) => {
        const o = l.args;
        if (!(s in r.properties)) return !1;
        let c = r.properties[s];
        for (let h = 1, d = o.length; h < d; ++h) {
          const m = o[h].value;
          if (!c || !Object.hasOwn(c, m)) return !1;
          c = c[m];
        }
        return !0;
      };
    default:
      throw new Error(`Unsupported accessor operator ${l.operator}`);
  }
}
function b2(l, t) {
  const i = l.operator,
    s = Gi(l.args[0]),
    r = Gi(l.args[1]);
  switch (i) {
    case H.Equal:
      return (o) => s(o) === r(o);
    case H.NotEqual:
      return (o) => s(o) !== r(o);
    case H.LessThan:
      return (o) => s(o) < r(o);
    case H.LessThanOrEqualTo:
      return (o) => s(o) <= r(o);
    case H.GreaterThan:
      return (o) => s(o) > r(o);
    case H.GreaterThanOrEqualTo:
      return (o) => s(o) >= r(o);
    default:
      throw new Error(`Unsupported comparison operator ${i}`);
  }
}
function A2(l, t) {
  const i = l.operator,
    s = l.args.length,
    r = new Array(s);
  for (let o = 0; o < s; ++o) r[o] = Gi(l.args[o]);
  switch (i) {
    case H.Any:
      return (o) => {
        for (let c = 0; c < s; ++c) if (r[c](o)) return !0;
        return !1;
      };
    case H.All:
      return (o) => {
        for (let c = 0; c < s; ++c) if (!r[c](o)) return !1;
        return !0;
      };
    case H.Between:
      return (o) => {
        const c = r[0](o),
          h = r[1](o),
          d = r[2](o);
        return c >= h && c <= d;
      };
    case H.In:
      return (o) => {
        const c = r[0](o);
        for (let h = 1; h < s; ++h) if (c === r[h](o)) return !0;
        return !1;
      };
    case H.Not:
      return (o) => !r[0](o);
    default:
      throw new Error(`Unsupported logical operator ${i}`);
  }
}
function w2(l, t) {
  const i = l.operator,
    s = l.args.length,
    r = new Array(s);
  for (let o = 0; o < s; ++o) r[o] = Gi(l.args[o]);
  switch (i) {
    case H.Multiply:
      return (o) => {
        let c = 1;
        for (let h = 0; h < s; ++h) c *= r[h](o);
        return c;
      };
    case H.Divide:
      return (o) => r[0](o) / r[1](o);
    case H.Add:
      return (o) => {
        let c = 0;
        for (let h = 0; h < s; ++h) c += r[h](o);
        return c;
      };
    case H.Subtract:
      return (o) => r[0](o) - r[1](o);
    case H.Clamp:
      return (o) => {
        const c = r[0](o),
          h = r[1](o);
        if (c < h) return h;
        const d = r[2](o);
        return c > d ? d : c;
      };
    case H.Mod:
      return (o) => r[0](o) % r[1](o);
    case H.Pow:
      return (o) => Math.pow(r[0](o), r[1](o));
    case H.Abs:
      return (o) => Math.abs(r[0](o));
    case H.Floor:
      return (o) => Math.floor(r[0](o));
    case H.Ceil:
      return (o) => Math.ceil(r[0](o));
    case H.Round:
      return (o) => Math.round(r[0](o));
    case H.Sin:
      return (o) => Math.sin(r[0](o));
    case H.Cos:
      return (o) => Math.cos(r[0](o));
    case H.Atan:
      return s === 2
        ? (o) => Math.atan2(r[0](o), r[1](o))
        : (o) => Math.atan(r[0](o));
    case H.Sqrt:
      return (o) => Math.sqrt(r[0](o));
    default:
      throw new Error(`Unsupported numeric operator ${i}`);
  }
}
function M2(l, t) {
  const i = l.args.length,
    s = new Array(i);
  for (let r = 0; r < i; ++r) s[r] = Gi(l.args[r]);
  return (r) => {
    for (let o = 0; o < i - 1; o += 2) if (s[o](r)) return s[o + 1](r);
    return s[i - 1](r);
  };
}
function O2(l, t) {
  const i = l.args.length,
    s = new Array(i);
  for (let r = 0; r < i; ++r) s[r] = Gi(l.args[r]);
  return (r) => {
    const o = s[0](r);
    for (let c = 1; c < i; c += 2) if (o === s[c](r)) return s[c + 1](r);
    return s[i - 1](r);
  };
}
function D2(l, t) {
  const i = l.args.length,
    s = new Array(i);
  for (let r = 0; r < i; ++r) s[r] = Gi(l.args[r]);
  return (r) => {
    const o = s[0](r),
      c = s[1](r);
    let h, d;
    for (let _ = 2; _ < i; _ += 2) {
      const m = s[_](r);
      let y = s[_ + 1](r);
      const v = Array.isArray(y);
      if ((v && (y = rx(y)), m >= c))
        return _ === 2 ? y : v ? z2(o, c, h, d, m, y) : Aa(o, c, h, d, m, y);
      (h = m), (d = y);
    }
    return d;
  };
}
function L2(l, t) {
  const i = l.operator,
    s = l.args.length,
    r = new Array(s);
  for (let o = 0; o < s; ++o) r[o] = Gi(l.args[o]);
  switch (i) {
    case H.ToString:
      return (o) => {
        const c = r[0](o);
        return l.args[0].type === Ii ? Gd(c) : c.toString();
      };
    default:
      throw new Error(`Unsupported convert operator ${i}`);
  }
}
function Aa(l, t, i, s, r, o) {
  const c = r - i;
  if (c === 0) return s;
  const h = t - i,
    d = l === 1 ? h / c : (Math.pow(l, h) - 1) / (Math.pow(l, c) - 1);
  return s + d * (o - s);
}
function z2(l, t, i, s, r, o) {
  if (r - i === 0) return s;
  const h = ry(s),
    d = ry(o);
  let _ = d[2] - h[2];
  _ > 180 ? (_ -= 360) : _ < -180 && (_ += 360);
  const m = [
    Aa(l, t, i, h[0], r, d[0]),
    Aa(l, t, i, h[1], r, d[1]),
    h[2] + Aa(l, t, i, 0, r, _),
    Aa(l, t, i, s[3], r, o[3]),
  ];
  return wp(ax(m));
}
function I2(l) {
  return !0;
}
function N2(l) {
  const t = Zp(),
    i = G2(l, t),
    s = qp();
  return function (r, o) {
    if (
      ((s.properties = r.getPropertiesInternal()),
      (s.resolution = o),
      t.featureId)
    ) {
      const c = r.getId();
      c !== void 0 ? (s.featureId = c) : (s.featureId = null);
    }
    return t.geometryType && (s.geometryType = Kp(r.getGeometry())), i(s);
  };
}
function Oy(l) {
  const t = Zp(),
    i = l.length,
    s = new Array(i);
  for (let c = 0; c < i; ++c) s[c] = ld(l[c], t);
  const r = qp(),
    o = new Array(i);
  return function (c, h) {
    if (
      ((r.properties = c.getPropertiesInternal()),
      (r.resolution = h),
      t.featureId)
    ) {
      const _ = c.getId();
      _ !== void 0 ? (r.featureId = _) : (r.featureId = null);
    }
    let d = 0;
    for (let _ = 0; _ < i; ++_) {
      const m = s[_](r);
      m && ((o[d] = m), (d += 1));
    }
    return (o.length = d), o;
  };
}
function G2(l, t) {
  const i = l.length,
    s = new Array(i);
  for (let r = 0; r < i; ++r) {
    const o = l[r],
      c = "filter" in o ? Ln(o.filter, Ge, t) : I2;
    let h;
    if (Array.isArray(o.style)) {
      const d = o.style.length;
      h = new Array(d);
      for (let _ = 0; _ < d; ++_) h[_] = ld(o.style[_], t);
    } else h = [ld(o.style, t)];
    s[r] = { filter: c, styles: h };
  }
  return function (r) {
    const o = [];
    let c = !1;
    for (let h = 0; h < i; ++h) {
      const d = s[h].filter;
      if (d(r) && !(l[h].else && c)) {
        c = !0;
        for (const _ of s[h].styles) {
          const m = _(r);
          m && o.push(m);
        }
      }
    }
    return o;
  };
}
function ld(l, t) {
  const i = Xa(l, "", t),
    s = Ya(l, "", t),
    r = F2(l, t),
    o = U2(l, t),
    c = Ze(l, "z-index", t);
  if (!i && !s && !r && !o && !tl(l))
    throw new Error(
      "No fill, stroke, point, or text symbolizer properties in style: " +
        JSON.stringify(l),
    );
  const h = new $s();
  return function (d) {
    let _ = !0;
    if (i) {
      const m = i(d);
      m && (_ = !1), h.setFill(m);
    }
    if (s) {
      const m = s(d);
      m && (_ = !1), h.setStroke(m);
    }
    if (r) {
      const m = r(d);
      m && (_ = !1), h.setText(m);
    }
    if (o) {
      const m = o(d);
      m && (_ = !1), h.setImage(m);
    }
    return c && h.setZIndex(c(d)), _ ? null : h;
  };
}
function Xa(l, t, i) {
  let s;
  if (t + "fill-pattern-src" in l) s = B2(l, t + "fill-", i);
  else {
    if (l[t + "fill-color"] === "none") return (o) => null;
    s = kd(l, t + "fill-color", i);
  }
  if (!s) return null;
  const r = new Ka();
  return function (o) {
    const c = s(o);
    return c === Id ? null : (r.setColor(c), r);
  };
}
function Ya(l, t, i) {
  const s = Ze(l, t + "stroke-width", i),
    r = kd(l, t + "stroke-color", i);
  if (!s && !r) return null;
  const o = Rn(l, t + "stroke-line-cap", i),
    c = Rn(l, t + "stroke-line-join", i),
    h = Vp(l, t + "stroke-line-dash", i),
    d = Ze(l, t + "stroke-line-dash-offset", i),
    _ = Ze(l, t + "stroke-miter-limit", i),
    m = new sc();
  return function (y) {
    if (r) {
      const v = r(y);
      if (v === Id) return null;
      m.setColor(v);
    }
    if ((s && m.setWidth(s(y)), o)) {
      const v = o(y);
      if (v !== "butt" && v !== "round" && v !== "square")
        throw new Error("Expected butt, round, or square line cap");
      m.setLineCap(v);
    }
    if (c) {
      const v = c(y);
      if (v !== "bevel" && v !== "round" && v !== "miter")
        throw new Error("Expected bevel, round, or miter line join");
      m.setLineJoin(v);
    }
    return (
      h && m.setLineDash(h(y)),
      d && m.setLineDashOffset(d(y)),
      _ && m.setMiterLimit(_(y)),
      m
    );
  };
}
function F2(l, t) {
  const i = "text-",
    s = Rn(l, i + "value", t);
  if (!s) return null;
  const r = Xa(l, i, t),
    o = Xa(l, i + "background-", t),
    c = Ya(l, i, t),
    h = Ya(l, i + "background-", t),
    d = Rn(l, i + "font", t),
    _ = Ze(l, i + "max-angle", t),
    m = Ze(l, i + "offset-x", t),
    y = Ze(l, i + "offset-y", t),
    v = lr(l, i + "overflow", t),
    S = Rn(l, i + "placement", t),
    x = Ze(l, i + "repeat", t),
    b = uc(l, i + "scale", t),
    R = lr(l, i + "rotate-with-view", t),
    A = Ze(l, i + "rotation", t),
    O = Rn(l, i + "align", t),
    G = Rn(l, i + "justify", t),
    z = Rn(l, i + "baseline", t),
    D = lr(l, i + "keep-upright", t),
    j = Vp(l, i + "padding", t),
    Q = cc(l, i + "declutter-mode"),
    Z = new Xd({ declutterMode: Q });
  return function (F) {
    if (
      (Z.setText(s(F)),
      r && Z.setFill(r(F)),
      o && Z.setBackgroundFill(o(F)),
      c && Z.setStroke(c(F)),
      h && Z.setBackgroundStroke(h(F)),
      d && Z.setFont(d(F)),
      _ && Z.setMaxAngle(_(F)),
      m && Z.setOffsetX(m(F)),
      y && Z.setOffsetY(y(F)),
      v && Z.setOverflow(v(F)),
      S)
    ) {
      const V = S(F);
      if (V !== "point" && V !== "line")
        throw new Error("Expected point or line for text-placement");
      Z.setPlacement(V);
    }
    if (
      (x && Z.setRepeat(x(F)),
      b && Z.setScale(b(F)),
      R && Z.setRotateWithView(R(F)),
      A && Z.setRotation(A(F)),
      O)
    ) {
      const V = O(F);
      if (
        V !== "left" &&
        V !== "center" &&
        V !== "right" &&
        V !== "end" &&
        V !== "start"
      )
        throw new Error(
          "Expected left, right, center, start, or end for text-align",
        );
      Z.setTextAlign(V);
    }
    if (G) {
      const V = G(F);
      if (V !== "left" && V !== "right" && V !== "center")
        throw new Error("Expected left, right, or center for text-justify");
      Z.setJustify(V);
    }
    if (z) {
      const V = z(F);
      if (
        V !== "bottom" &&
        V !== "top" &&
        V !== "middle" &&
        V !== "alphabetic" &&
        V !== "hanging"
      )
        throw new Error(
          "Expected bottom, top, middle, alphabetic, or hanging for text-baseline",
        );
      Z.setTextBaseline(V);
    }
    return j && Z.setPadding(j(F)), D && Z.setKeepUpright(D(F)), Z;
  };
}
function U2(l, t) {
  return "icon-src" in l
    ? X2(l, t)
    : "shape-points" in l
      ? Y2(l, t)
      : "circle-radius" in l
        ? k2(l, t)
        : null;
}
function X2(l, t) {
  const i = "icon-",
    s = i + "src",
    r = Wp(l[s], s),
    o = Uu(l, i + "anchor", t),
    c = uc(l, i + "scale", t),
    h = Ze(l, i + "opacity", t),
    d = Uu(l, i + "displacement", t),
    _ = Ze(l, i + "rotation", t),
    m = lr(l, i + "rotate-with-view", t),
    y = Ly(l, i + "anchor-origin"),
    v = zy(l, i + "anchor-x-units"),
    S = zy(l, i + "anchor-y-units"),
    x = Z2(l, i + "color"),
    b = P2(l, i + "cross-origin"),
    R = j2(l, i + "offset"),
    A = Ly(l, i + "offset-origin"),
    O = Xu(l, i + "width"),
    G = Xu(l, i + "height"),
    z = H2(l, i + "size"),
    D = cc(l, i + "declutter-mode"),
    j = new oc({
      src: r,
      anchorOrigin: y,
      anchorXUnits: v,
      anchorYUnits: S,
      color: x,
      crossOrigin: b,
      offset: R,
      offsetOrigin: A,
      height: G,
      width: O,
      size: z,
      declutterMode: D,
    });
  return function (Q) {
    return (
      h && j.setOpacity(h(Q)),
      d && j.setDisplacement(d(Q)),
      _ && j.setRotation(_(Q)),
      m && j.setRotateWithView(m(Q)),
      c && j.setScale(c(Q)),
      o && j.setAnchor(o(Q)),
      j
    );
  };
}
function Y2(l, t) {
  const i = "shape-",
    s = i + "points",
    r = i + "radius",
    o = rd(l[s], s),
    c = rd(l[r], r),
    h = Xa(l, i, t),
    d = Ya(l, i, t),
    _ = uc(l, i + "scale", t),
    m = Uu(l, i + "displacement", t),
    y = Ze(l, i + "rotation", t),
    v = lr(l, i + "rotate-with-view", t),
    S = Xu(l, i + "radius2"),
    x = Xu(l, i + "angle"),
    b = cc(l, i + "declutter-mode"),
    R = new rc({
      points: o,
      radius: c,
      radius2: S,
      angle: x,
      declutterMode: b,
    });
  return function (A) {
    return (
      h && R.setFill(h(A)),
      d && R.setStroke(d(A)),
      m && R.setDisplacement(m(A)),
      y && R.setRotation(y(A)),
      v && R.setRotateWithView(v(A)),
      _ && R.setScale(_(A)),
      R
    );
  };
}
function k2(l, t) {
  const i = "circle-",
    s = Xa(l, i, t),
    r = Ya(l, i, t),
    o = Ze(l, i + "radius", t),
    c = uc(l, i + "scale", t),
    h = Uu(l, i + "displacement", t),
    d = Ze(l, i + "rotation", t),
    _ = lr(l, i + "rotate-with-view", t),
    m = cc(l, i + "declutter-mode"),
    y = new ac({ radius: 5, declutterMode: m });
  return function (v) {
    return (
      o && y.setRadius(o(v)),
      s && y.setFill(s(v)),
      r && y.setStroke(r(v)),
      h && y.setDisplacement(h(v)),
      d && y.setRotation(d(v)),
      _ && y.setRotateWithView(_(v)),
      c && y.setScale(c(v)),
      y
    );
  };
}
function Ze(l, t, i) {
  if (!(t in l)) return;
  const s = Ln(l[t], At, i);
  return function (r) {
    return rd(s(r), t);
  };
}
function Rn(l, t, i) {
  if (!(t in l)) return null;
  const s = Ln(l[t], Pe, i);
  return function (r) {
    return Wp(s(r), t);
  };
}
function B2(l, t, i) {
  const s = Rn(l, t + "pattern-src", i),
    r = Dy(l, t + "pattern-offset", i),
    o = Dy(l, t + "pattern-size", i),
    c = kd(l, t + "color", i);
  return function (h) {
    return { src: s(h), offset: r && r(h), size: o && o(h), color: c && c(h) };
  };
}
function lr(l, t, i) {
  if (!(t in l)) return null;
  const s = Ln(l[t], Ge, i);
  return function (r) {
    const o = s(r);
    if (typeof o != "boolean") throw new Error(`Expected a boolean for ${t}`);
    return o;
  };
}
function kd(l, t, i) {
  if (!(t in l)) return null;
  const s = Ln(l[t], Ii, i);
  return function (r) {
    return Qp(s(r), t);
  };
}
function Vp(l, t, i) {
  if (!(t in l)) return null;
  const s = Ln(l[t], il, i);
  return function (r) {
    return Va(s(r), t);
  };
}
function Uu(l, t, i) {
  if (!(t in l)) return null;
  const s = Ln(l[t], il, i);
  return function (r) {
    const o = Va(s(r), t);
    if (o.length !== 2) throw new Error(`Expected two numbers for ${t}`);
    return o;
  };
}
function Dy(l, t, i) {
  if (!(t in l)) return null;
  const s = Ln(l[t], il, i);
  return function (r) {
    return Jp(s(r), t);
  };
}
function uc(l, t, i) {
  if (!(t in l)) return null;
  const s = Ln(l[t], il | At, i);
  return function (r) {
    return K2(s(r), t);
  };
}
function Xu(l, t) {
  const i = l[t];
  if (i !== void 0) {
    if (typeof i != "number") throw new Error(`Expected a number for ${t}`);
    return i;
  }
}
function H2(l, t) {
  const i = l[t];
  if (i !== void 0) {
    if (typeof i == "number") return Ke(i);
    if (!Array.isArray(i))
      throw new Error(`Expected a number or size array for ${t}`);
    if (i.length !== 2 || typeof i[0] != "number" || typeof i[1] != "number")
      throw new Error(`Expected a number or size array for ${t}`);
    return i;
  }
}
function P2(l, t) {
  const i = l[t];
  if (i !== void 0) {
    if (typeof i != "string") throw new Error(`Expected a string for ${t}`);
    return i;
  }
}
function Ly(l, t) {
  const i = l[t];
  if (i !== void 0) {
    if (
      i !== "bottom-left" &&
      i !== "bottom-right" &&
      i !== "top-left" &&
      i !== "top-right"
    )
      throw new Error(
        `Expected bottom-left, bottom-right, top-left, or top-right for ${t}`,
      );
    return i;
  }
}
function zy(l, t) {
  const i = l[t];
  if (i !== void 0) {
    if (i !== "pixels" && i !== "fraction")
      throw new Error(`Expected pixels or fraction for ${t}`);
    return i;
  }
}
function j2(l, t) {
  const i = l[t];
  if (i !== void 0) return Va(i, t);
}
function cc(l, t) {
  const i = l[t];
  if (i !== void 0) {
    if (typeof i != "string") throw new Error(`Expected a string for ${t}`);
    if (i !== "declutter" && i !== "obstacle" && i !== "none")
      throw new Error(`Expected declutter, obstacle, or none for ${t}`);
    return i;
  }
}
function Z2(l, t) {
  const i = l[t];
  if (i !== void 0) return Qp(i, t);
}
function Va(l, t) {
  if (!Array.isArray(l)) throw new Error(`Expected an array for ${t}`);
  const i = l.length;
  for (let s = 0; s < i; ++s)
    if (typeof l[s] != "number")
      throw new Error(`Expected an array of numbers for ${t}`);
  return l;
}
function Wp(l, t) {
  if (typeof l != "string") throw new Error(`Expected a string for ${t}`);
  return l;
}
function rd(l, t) {
  if (typeof l != "number") throw new Error(`Expected a number for ${t}`);
  return l;
}
function Qp(l, t) {
  if (typeof l == "string") return l;
  const i = Va(l, t),
    s = i.length;
  if (s < 3 || s > 4)
    throw new Error(`Expected a color with 3 or 4 values for ${t}`);
  return i;
}
function Jp(l, t) {
  const i = Va(l, t);
  if (i.length !== 2)
    throw new Error(`Expected an array of two numbers for ${t}`);
  return i;
}
function K2(l, t) {
  return typeof l == "number" ? l : Jp(l, t);
}
const zi = { CENTER: "center", RESOLUTION: "resolution", ROTATION: "rotation" };
function Iy(l, t, i) {
  return function (s, r, o, c, h) {
    if (!s) return;
    if (!r && !t) return s;
    const d = t ? 0 : o[0] * r,
      _ = t ? 0 : o[1] * r,
      m = h ? h[0] : 0,
      y = h ? h[1] : 0;
    let v = l[0] + d / 2 + m,
      S = l[2] - d / 2 + m,
      x = l[1] + _ / 2 + y,
      b = l[3] - _ / 2 + y;
    v > S && ((v = (S + v) / 2), (S = v)),
      x > b && ((x = (b + x) / 2), (b = x));
    let R = se(s[0], v, S),
      A = se(s[1], x, b);
    if (c && i && r) {
      const O = 30 * r;
      (R +=
        -O * Math.log(1 + Math.max(0, v - s[0]) / O) +
        O * Math.log(1 + Math.max(0, s[0] - S) / O)),
        (A +=
          -O * Math.log(1 + Math.max(0, x - s[1]) / O) +
          O * Math.log(1 + Math.max(0, s[1] - b) / O));
    }
    return [R, A];
  };
}
function q2(l) {
  return l;
}
function $p(l) {
  return Math.pow(l, 3);
}
function yr(l) {
  return 1 - $p(1 - l);
}
function V2(l) {
  return 3 * l * l - 2 * l * l * l;
}
function W2(l) {
  return l;
}
function Bd(l, t, i, s) {
  const r = Ft(t) / i[0],
    o = Fe(t) / i[1];
  return s ? Math.min(l, Math.max(r, o)) : Math.min(l, Math.min(r, o));
}
function Hd(l, t, i) {
  let s = Math.min(l, t);
  const r = 50;
  return (
    (s *= Math.log(1 + r * Math.max(0, l / t - 1)) / r + 1),
    i &&
      ((s = Math.max(s, i)),
      (s /= Math.log(1 + r * Math.max(0, i / l - 1)) / r + 1)),
    se(s, i / 2, t * 2)
  );
}
function Q2(l, t, i, s) {
  return (
    (t = t !== void 0 ? t : !0),
    function (r, o, c, h) {
      if (r !== void 0) {
        const d = l[0],
          _ = l[l.length - 1],
          m = i ? Bd(d, i, c, s) : d;
        if (h) return t ? Hd(r, m, _) : se(r, _, m);
        const y = Math.min(m, r),
          v = Math.floor(fd(l, y, o));
        return l[v] > m && v < l.length - 1 ? l[v + 1] : l[v];
      }
    }
  );
}
function J2(l, t, i, s, r, o) {
  return (
    (s = s !== void 0 ? s : !0),
    (i = i !== void 0 ? i : 0),
    function (c, h, d, _) {
      if (c !== void 0) {
        const m = r ? Bd(t, r, d, o) : t;
        if (_) return s ? Hd(c, m, i) : se(c, i, m);
        const y = 1e-9,
          v = Math.ceil(Math.log(t / m) / Math.log(l) - y),
          S = -h * (0.5 - y) + 0.5,
          x = Math.min(m, c),
          b = Math.floor(Math.log(t / x) / Math.log(l) + S),
          R = Math.max(v, b),
          A = t / Math.pow(l, R);
        return se(A, i, m);
      }
    }
  );
}
function Ny(l, t, i, s, r) {
  return (
    (i = i !== void 0 ? i : !0),
    function (o, c, h, d) {
      if (o !== void 0) {
        const _ = s ? Bd(l, s, h, r) : l;
        return !i || !d ? se(o, t, _) : Hd(o, _, t);
      }
    }
  );
}
function Pd(l) {
  if (l !== void 0) return 0;
}
function Gy(l) {
  if (l !== void 0) return l;
}
function $2(l) {
  const t = (2 * Math.PI) / l;
  return function (i, s) {
    if (s) return i;
    if (i !== void 0) return (i = Math.floor(i / t + 0.5) * t), i;
  };
}
function tT(l) {
  const t = fs(5);
  return function (i, s) {
    return s || i === void 0 ? i : Math.abs(i) <= t ? 0 : i;
  };
}
const eT = 42,
  jd = 256,
  Ff = 0;
class Vi extends $i {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      (t = Object.assign({}, t)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = Td(t.projection, "EPSG:3857")),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      t.projection && RS(),
      t.center && (t.center = Tn(t.center, this.projection_)),
      t.extent && (t.extent = us(t.extent, this.projection_)),
      this.applyOptions_(t);
  }
  applyOptions_(t) {
    const i = Object.assign({}, t);
    for (const h in zi) delete i[h];
    this.setProperties(i, !0);
    const s = nT(t);
    (this.maxResolution_ = s.maxResolution),
      (this.minResolution_ = s.minResolution),
      (this.zoomFactor_ = s.zoomFactor),
      (this.resolutions_ = t.resolutions),
      (this.padding_ = t.padding),
      (this.minZoom_ = s.minZoom);
    const r = iT(t),
      o = s.constraint,
      c = sT(t);
    (this.constraints_ = { center: r, resolution: o, rotation: c }),
      this.setRotation(t.rotation !== void 0 ? t.rotation : 0),
      this.setCenterInternal(t.center !== void 0 ? t.center : null),
      t.resolution !== void 0
        ? this.setResolution(t.resolution)
        : t.zoom !== void 0 && this.setZoom(t.zoom);
  }
  get padding() {
    return this.padding_;
  }
  set padding(t) {
    let i = this.padding_;
    this.padding_ = t;
    const s = this.getCenterInternal();
    if (s) {
      const r = t || [0, 0, 0, 0];
      i = i || [0, 0, 0, 0];
      const o = this.getResolution(),
        c = (o / 2) * (r[3] - i[3] + i[1] - r[1]),
        h = (o / 2) * (r[0] - i[0] + i[2] - r[2]);
      this.setCenterInternal([s[0] + c, s[1] - h]);
    }
  }
  getUpdatedOptions_(t) {
    const i = this.getProperties();
    return (
      i.resolution !== void 0
        ? (i.resolution = this.getResolution())
        : (i.zoom = this.getZoom()),
      (i.center = this.getCenterInternal()),
      (i.rotation = this.getRotation()),
      Object.assign({}, i, t)
    );
  }
  animate(t) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    const i = new Array(arguments.length);
    for (let s = 0; s < i.length; ++s) {
      let r = arguments[s];
      r.center &&
        ((r = Object.assign({}, r)),
        (r.center = Tn(r.center, this.getProjection()))),
        r.anchor &&
          ((r = Object.assign({}, r)),
          (r.anchor = Tn(r.anchor, this.getProjection()))),
        (i[s] = r);
    }
    this.animateInternal.apply(this, i);
  }
  animateInternal(t) {
    let i = arguments.length,
      s;
    i > 1 &&
      typeof arguments[i - 1] == "function" &&
      ((s = arguments[i - 1]), --i);
    let r = 0;
    for (; r < i && !this.isDef(); ++r) {
      const m = arguments[r];
      m.center && this.setCenterInternal(m.center),
        m.zoom !== void 0
          ? this.setZoom(m.zoom)
          : m.resolution && this.setResolution(m.resolution),
        m.rotation !== void 0 && this.setRotation(m.rotation);
    }
    if (r === i) {
      s && pu(s, !0);
      return;
    }
    let o = Date.now(),
      c = this.targetCenter_.slice(),
      h = this.targetResolution_,
      d = this.targetRotation_;
    const _ = [];
    for (; r < i; ++r) {
      const m = arguments[r],
        y = {
          start: o,
          complete: !1,
          anchor: m.anchor,
          duration: m.duration !== void 0 ? m.duration : 1e3,
          easing: m.easing || V2,
          callback: s,
        };
      if (
        (m.center &&
          ((y.sourceCenter = c),
          (y.targetCenter = m.center.slice()),
          (c = y.targetCenter)),
        m.zoom !== void 0
          ? ((y.sourceResolution = h),
            (y.targetResolution = this.getResolutionForZoom(m.zoom)),
            (h = y.targetResolution))
          : m.resolution &&
            ((y.sourceResolution = h),
            (y.targetResolution = m.resolution),
            (h = y.targetResolution)),
        m.rotation !== void 0)
      ) {
        y.sourceRotation = d;
        const v = nr(m.rotation - d + Math.PI, 2 * Math.PI) - Math.PI;
        (y.targetRotation = d + v), (d = y.targetRotation);
      }
      lT(y) ? (y.complete = !0) : (o += y.duration), _.push(y);
    }
    this.animations_.push(_),
      this.setHint(Me.ANIMATING, 1),
      this.updateAnimations_();
  }
  getAnimating() {
    return this.hints_[Me.ANIMATING] > 0;
  }
  getInteracting() {
    return this.hints_[Me.INTERACTING] > 0;
  }
  cancelAnimations() {
    this.setHint(Me.ANIMATING, -this.hints_[Me.ANIMATING]);
    let t;
    for (let i = 0, s = this.animations_.length; i < s; ++i) {
      const r = this.animations_[i];
      if ((r[0].callback && pu(r[0].callback, !1), !t))
        for (let o = 0, c = r.length; o < c; ++o) {
          const h = r[o];
          if (!h.complete) {
            t = h.anchor;
            break;
          }
        }
    }
    (this.animations_.length = 0),
      (this.cancelAnchor_ = t),
      (this.nextCenter_ = null),
      (this.nextResolution_ = NaN),
      (this.nextRotation_ = NaN);
  }
  updateAnimations_() {
    if (
      (this.updateAnimationKey_ !== void 0 &&
        (cancelAnimationFrame(this.updateAnimationKey_),
        (this.updateAnimationKey_ = void 0)),
      !this.getAnimating())
    )
      return;
    const t = Date.now();
    let i = !1;
    for (let s = this.animations_.length - 1; s >= 0; --s) {
      const r = this.animations_[s];
      let o = !0;
      for (let c = 0, h = r.length; c < h; ++c) {
        const d = r[c];
        if (d.complete) continue;
        const _ = t - d.start;
        let m = d.duration > 0 ? _ / d.duration : 1;
        m >= 1 ? ((d.complete = !0), (m = 1)) : (o = !1);
        const y = d.easing(m);
        if (d.sourceCenter) {
          const v = d.sourceCenter[0],
            S = d.sourceCenter[1],
            x = d.targetCenter[0],
            b = d.targetCenter[1];
          this.nextCenter_ = d.targetCenter;
          const R = v + y * (x - v),
            A = S + y * (b - S);
          this.targetCenter_ = [R, A];
        }
        if (d.sourceResolution && d.targetResolution) {
          const v =
            y === 1
              ? d.targetResolution
              : d.sourceResolution +
                y * (d.targetResolution - d.sourceResolution);
          if (d.anchor) {
            const S = this.getViewportSize_(this.getRotation()),
              x = this.constraints_.resolution(v, 0, S, !0);
            this.targetCenter_ = this.calculateCenterZoom(x, d.anchor);
          }
          (this.nextResolution_ = d.targetResolution),
            (this.targetResolution_ = v),
            this.applyTargetState_(!0);
        }
        if (d.sourceRotation !== void 0 && d.targetRotation !== void 0) {
          const v =
            y === 1
              ? nr(d.targetRotation + Math.PI, 2 * Math.PI) - Math.PI
              : d.sourceRotation + y * (d.targetRotation - d.sourceRotation);
          if (d.anchor) {
            const S = this.constraints_.rotation(v, !0);
            this.targetCenter_ = this.calculateCenterRotate(S, d.anchor);
          }
          (this.nextRotation_ = d.targetRotation), (this.targetRotation_ = v);
        }
        if ((this.applyTargetState_(!0), (i = !0), !d.complete)) break;
      }
      if (o) {
        (this.animations_[s] = null),
          this.setHint(Me.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN);
        const c = r[0].callback;
        c && pu(c, !0);
      }
    }
    (this.animations_ = this.animations_.filter(Boolean)),
      i &&
        this.updateAnimationKey_ === void 0 &&
        (this.updateAnimationKey_ = requestAnimationFrame(
          this.updateAnimations_.bind(this),
        ));
  }
  calculateCenterRotate(t, i) {
    let s;
    const r = this.getCenterInternal();
    return (
      r !== void 0 &&
        ((s = [r[0] - i[0], r[1] - i[1]]),
        yd(s, t - this.getRotation()),
        JE(s, i)),
      s
    );
  }
  calculateCenterZoom(t, i) {
    let s;
    const r = this.getCenterInternal(),
      o = this.getResolution();
    if (r !== void 0 && o !== void 0) {
      const c = i[0] - (t * (i[0] - r[0])) / o,
        h = i[1] - (t * (i[1] - r[1])) / o;
      s = [c, h];
    }
    return s;
  }
  getViewportSize_(t) {
    const i = this.viewportSize_;
    if (t) {
      const s = i[0],
        r = i[1];
      return [
        Math.abs(s * Math.cos(t)) + Math.abs(r * Math.sin(t)),
        Math.abs(s * Math.sin(t)) + Math.abs(r * Math.cos(t)),
      ];
    }
    return i;
  }
  setViewportSize(t) {
    (this.viewportSize_ = Array.isArray(t) ? t.slice() : [100, 100]),
      this.getAnimating() || this.resolveConstraints(0);
  }
  getCenter() {
    const t = this.getCenterInternal();
    return t && $f(t, this.getProjection());
  }
  getCenterInternal() {
    return this.get(zi.CENTER);
  }
  getConstraints() {
    return this.constraints_;
  }
  getConstrainResolution() {
    return this.get("constrainResolution");
  }
  getHints(t) {
    return t !== void 0
      ? ((t[0] = this.hints_[0]), (t[1] = this.hints_[1]), t)
      : this.hints_.slice();
  }
  calculateExtent(t) {
    const i = this.calculateExtentInternal(t);
    return wu(i, this.getProjection());
  }
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_();
    const i = this.getCenterInternal();
    Lt(i, "The view center is not defined");
    const s = this.getResolution();
    Lt(s !== void 0, "The view resolution is not defined");
    const r = this.getRotation();
    return Lt(r !== void 0, "The view rotation is not defined"), qf(i, s, r, t);
  }
  getMaxResolution() {
    return this.maxResolution_;
  }
  getMinResolution() {
    return this.minResolution_;
  }
  getMaxZoom() {
    return this.getZoomForResolution(this.minResolution_);
  }
  setMaxZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: t }));
  }
  getMinZoom() {
    return this.getZoomForResolution(this.maxResolution_);
  }
  setMinZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: t }));
  }
  setConstrainResolution(t) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: t }));
  }
  getProjection() {
    return this.projection_;
  }
  getResolution() {
    return this.get(zi.RESOLUTION);
  }
  getResolutions() {
    return this.resolutions_;
  }
  getResolutionForExtent(t, i) {
    return this.getResolutionForExtentInternal(us(t, this.getProjection()), i);
  }
  getResolutionForExtentInternal(t, i) {
    i = i || this.getViewportSizeMinusPadding_();
    const s = Ft(t) / i[0],
      r = Fe(t) / i[1];
    return Math.max(s, r);
  }
  getResolutionForValueFunction(t) {
    t = t || 2;
    const i = this.getConstrainedResolution(this.maxResolution_),
      s = this.minResolution_,
      r = Math.log(i / s) / Math.log(t);
    return function (o) {
      return i / Math.pow(t, o * r);
    };
  }
  getRotation() {
    return this.get(zi.ROTATION);
  }
  getValueForResolutionFunction(t) {
    const i = Math.log(t || 2),
      s = this.getConstrainedResolution(this.maxResolution_),
      r = this.minResolution_,
      o = Math.log(s / r) / i;
    return function (c) {
      return Math.log(s / c) / i / o;
    };
  }
  getViewportSizeMinusPadding_(t) {
    let i = this.getViewportSize_(t);
    const s = this.padding_;
    return s && (i = [i[0] - s[1] - s[3], i[1] - s[0] - s[2]]), i;
  }
  getState() {
    const t = this.getProjection(),
      i = this.getResolution(),
      s = this.getRotation();
    let r = this.getCenterInternal();
    const o = this.padding_;
    if (o) {
      const c = this.getViewportSizeMinusPadding_();
      r = Uf(
        r,
        this.getViewportSize_(),
        [c[0] / 2 + o[3], c[1] / 2 + o[0]],
        i,
        s,
      );
    }
    return {
      center: r.slice(0),
      projection: t !== void 0 ? t : null,
      resolution: i,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: s,
      zoom: this.getZoom(),
    };
  }
  getViewStateAndExtent() {
    return { viewState: this.getState(), extent: this.calculateExtent() };
  }
  getZoom() {
    let t;
    const i = this.getResolution();
    return i !== void 0 && (t = this.getZoomForResolution(i)), t;
  }
  getZoomForResolution(t) {
    let i = this.minZoom_ || 0,
      s,
      r;
    if (this.resolutions_) {
      const o = fd(this.resolutions_, t, 1);
      (i = o),
        (s = this.resolutions_[o]),
        o == this.resolutions_.length - 1
          ? (r = 2)
          : (r = s / this.resolutions_[o + 1]);
    } else (s = this.maxResolution_), (r = this.zoomFactor_);
    return i + Math.log(s / t) / Math.log(r);
  }
  getResolutionForZoom(t) {
    var i;
    if ((i = this.resolutions_) != null && i.length) {
      if (this.resolutions_.length === 1) return this.resolutions_[0];
      const s = se(Math.floor(t), 0, this.resolutions_.length - 2),
        r = this.resolutions_[s] / this.resolutions_[s + 1];
      return this.resolutions_[s] / Math.pow(r, se(t - s, 0, 1));
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_);
  }
  fit(t, i) {
    let s;
    if (
      (Lt(
        Array.isArray(t) || typeof t.getSimplifiedGeometry == "function",
        "Invalid extent or geometry provided as `geometry`",
      ),
      Array.isArray(t))
    ) {
      Lt(!Ha(t), "Cannot fit empty extent provided as `geometry`");
      const r = us(t, this.getProjection());
      s = ny(r);
    } else if (t.getType() === "Circle") {
      const r = us(t.getExtent(), this.getProjection());
      (s = ny(r)), s.rotate(this.getRotation(), gs(r));
    } else {
      const r = Au();
      r ? (s = t.clone().transform(r, this.getProjection())) : (s = t);
    }
    this.fitInternal(s, i);
  }
  rotatedExtentForGeometry(t) {
    const i = this.getRotation(),
      s = Math.cos(i),
      r = Math.sin(-i),
      o = t.getFlatCoordinates(),
      c = t.getStride();
    let h = 1 / 0,
      d = 1 / 0,
      _ = -1 / 0,
      m = -1 / 0;
    for (let y = 0, v = o.length; y < v; y += c) {
      const S = o[y] * s - o[y + 1] * r,
        x = o[y] * r + o[y + 1] * s;
      (h = Math.min(h, S)),
        (d = Math.min(d, x)),
        (_ = Math.max(_, S)),
        (m = Math.max(m, x));
    }
    return [h, d, _, m];
  }
  fitInternal(t, i) {
    i = i || {};
    let s = i.size;
    s || (s = this.getViewportSizeMinusPadding_());
    const r = i.padding !== void 0 ? i.padding : [0, 0, 0, 0],
      o = i.nearest !== void 0 ? i.nearest : !1;
    let c;
    i.minResolution !== void 0
      ? (c = i.minResolution)
      : i.maxZoom !== void 0
        ? (c = this.getResolutionForZoom(i.maxZoom))
        : (c = 0);
    const h = this.rotatedExtentForGeometry(t);
    let d = this.getResolutionForExtentInternal(h, [
      s[0] - r[1] - r[3],
      s[1] - r[0] - r[2],
    ]);
    (d = isNaN(d) ? c : Math.max(d, c)),
      (d = this.getConstrainedResolution(d, o ? 0 : 1));
    const _ = this.getRotation(),
      m = Math.sin(_),
      y = Math.cos(_),
      v = gs(h);
    (v[0] += ((r[1] - r[3]) / 2) * d), (v[1] += ((r[0] - r[2]) / 2) * d);
    const S = v[0] * y - v[1] * m,
      x = v[1] * y + v[0] * m,
      b = this.getConstrainedCenter([S, x], d),
      R = i.callback ? i.callback : or;
    i.duration !== void 0
      ? this.animateInternal(
          { resolution: d, center: b, duration: i.duration, easing: i.easing },
          R,
        )
      : ((this.targetResolution_ = d),
        (this.targetCenter_ = b),
        this.applyTargetState_(!1, !0),
        pu(R, !0));
  }
  centerOn(t, i, s) {
    this.centerOnInternal(Tn(t, this.getProjection()), i, s);
  }
  centerOnInternal(t, i, s) {
    this.setCenterInternal(
      Uf(t, i, s, this.getResolution(), this.getRotation()),
    );
  }
  calculateCenterShift(t, i, s, r) {
    let o;
    const c = this.padding_;
    if (c && t) {
      const h = this.getViewportSizeMinusPadding_(-s),
        d = Uf(t, r, [h[0] / 2 + c[3], h[1] / 2 + c[0]], i, s);
      o = [t[0] - d[0], t[1] - d[1]];
    }
    return o;
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  adjustCenter(t) {
    const i = $f(this.targetCenter_, this.getProjection());
    this.setCenter([i[0] + t[0], i[1] + t[1]]);
  }
  adjustCenterInternal(t) {
    const i = this.targetCenter_;
    this.setCenterInternal([i[0] + t[0], i[1] + t[1]]);
  }
  adjustResolution(t, i) {
    (i = i && Tn(i, this.getProjection())), this.adjustResolutionInternal(t, i);
  }
  adjustResolutionInternal(t, i) {
    const s = this.getAnimating() || this.getInteracting(),
      r = this.getViewportSize_(this.getRotation()),
      o = this.constraints_.resolution(this.targetResolution_ * t, 0, r, s);
    i && (this.targetCenter_ = this.calculateCenterZoom(o, i)),
      (this.targetResolution_ *= t),
      this.applyTargetState_();
  }
  adjustZoom(t, i) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -t), i);
  }
  adjustRotation(t, i) {
    i && (i = Tn(i, this.getProjection())), this.adjustRotationInternal(t, i);
  }
  adjustRotationInternal(t, i) {
    const s = this.getAnimating() || this.getInteracting(),
      r = this.constraints_.rotation(this.targetRotation_ + t, s);
    i && (this.targetCenter_ = this.calculateCenterRotate(r, i)),
      (this.targetRotation_ += t),
      this.applyTargetState_();
  }
  setCenter(t) {
    this.setCenterInternal(t && Tn(t, this.getProjection()));
  }
  setCenterInternal(t) {
    (this.targetCenter_ = t), this.applyTargetState_();
  }
  setHint(t, i) {
    return (this.hints_[t] += i), this.changed(), this.hints_[t];
  }
  setResolution(t) {
    (this.targetResolution_ = t), this.applyTargetState_();
  }
  setRotation(t) {
    (this.targetRotation_ = t), this.applyTargetState_();
  }
  setZoom(t) {
    this.setResolution(this.getResolutionForZoom(t));
  }
  applyTargetState_(t, i) {
    const s = this.getAnimating() || this.getInteracting() || i,
      r = this.constraints_.rotation(this.targetRotation_, s),
      o = this.getViewportSize_(r),
      c = this.constraints_.resolution(this.targetResolution_, 0, o, s),
      h = this.constraints_.center(
        this.targetCenter_,
        c,
        o,
        s,
        this.calculateCenterShift(this.targetCenter_, c, r, o),
      );
    this.get(zi.ROTATION) !== r && this.set(zi.ROTATION, r),
      this.get(zi.RESOLUTION) !== c &&
        (this.set(zi.RESOLUTION, c), this.set("zoom", this.getZoom(), !0)),
      (!h || !this.get(zi.CENTER) || !Cu(this.get(zi.CENTER), h)) &&
        this.set(zi.CENTER, h),
      this.getAnimating() && !t && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0);
  }
  resolveConstraints(t, i, s) {
    t = t !== void 0 ? t : 200;
    const r = i || 0,
      o = this.constraints_.rotation(this.targetRotation_),
      c = this.getViewportSize_(o),
      h = this.constraints_.resolution(this.targetResolution_, r, c),
      d = this.constraints_.center(
        this.targetCenter_,
        h,
        c,
        !1,
        this.calculateCenterShift(this.targetCenter_, h, o, c),
      );
    if (t === 0 && !this.cancelAnchor_) {
      (this.targetResolution_ = h),
        (this.targetRotation_ = o),
        (this.targetCenter_ = d),
        this.applyTargetState_();
      return;
    }
    (s = s || (t === 0 ? this.cancelAnchor_ : void 0)),
      (this.cancelAnchor_ = void 0),
      (this.getResolution() !== h ||
        this.getRotation() !== o ||
        !this.getCenterInternal() ||
        !Cu(this.getCenterInternal(), d)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({
          rotation: o,
          center: d,
          resolution: h,
          duration: t,
          easing: yr,
          anchor: s,
        }));
  }
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(Me.INTERACTING, 1);
  }
  endInteraction(t, i, s) {
    (s = s && Tn(s, this.getProjection())),
      this.endInteractionInternal(t, i, s);
  }
  endInteractionInternal(t, i, s) {
    this.getInteracting() &&
      (this.setHint(Me.INTERACTING, -1), this.resolveConstraints(t, i, s));
  }
  getConstrainedCenter(t, i) {
    const s = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(t, i || this.getResolution(), s);
  }
  getConstrainedZoom(t, i) {
    const s = this.getResolutionForZoom(t);
    return this.getZoomForResolution(this.getConstrainedResolution(s, i));
  }
  getConstrainedResolution(t, i) {
    i = i || 0;
    const s = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(t, i, s);
  }
}
function pu(l, t) {
  setTimeout(function () {
    l(t);
  }, 0);
}
function iT(l) {
  if (l.extent !== void 0) {
    const i =
      l.smoothExtentConstraint !== void 0 ? l.smoothExtentConstraint : !0;
    return Iy(l.extent, l.constrainOnlyCenter, i);
  }
  const t = Td(l.projection, "EPSG:3857");
  if (l.multiWorld !== !0 && t.isGlobal()) {
    const i = t.getExtent().slice();
    return (i[0] = -1 / 0), (i[2] = 1 / 0), Iy(i, !1, !1);
  }
  return q2;
}
function nT(l) {
  let t,
    i,
    s,
    c = l.minZoom !== void 0 ? l.minZoom : Ff,
    h = l.maxZoom !== void 0 ? l.maxZoom : 28;
  const d = l.zoomFactor !== void 0 ? l.zoomFactor : 2,
    _ = l.multiWorld !== void 0 ? l.multiWorld : !1,
    m =
      l.smoothResolutionConstraint !== void 0
        ? l.smoothResolutionConstraint
        : !0,
    y = l.showFullExtent !== void 0 ? l.showFullExtent : !1,
    v = Td(l.projection, "EPSG:3857"),
    S = v.getExtent();
  let x = l.constrainOnlyCenter,
    b = l.extent;
  if (
    (!_ && !b && v.isGlobal() && ((x = !1), (b = S)), l.resolutions !== void 0)
  ) {
    const R = l.resolutions;
    (i = R[c]),
      (s = R[h] !== void 0 ? R[h] : R[R.length - 1]),
      l.constrainResolution
        ? (t = Q2(R, m, !x && b, y))
        : (t = Ny(i, s, m, !x && b, y));
  } else {
    const A =
        (S
          ? Math.max(Ft(S), Fe(S))
          : (360 * pd.degrees) / v.getMetersPerUnit()) /
        jd /
        Math.pow(2, Ff),
      O = A / Math.pow(2, 28 - Ff);
    (i = l.maxResolution),
      i !== void 0 ? (c = 0) : (i = A / Math.pow(d, c)),
      (s = l.minResolution),
      s === void 0 &&
        (l.maxZoom !== void 0
          ? l.maxResolution !== void 0
            ? (s = i / Math.pow(d, h))
            : (s = A / Math.pow(d, h))
          : (s = O)),
      (h = c + Math.floor(Math.log(i / s) / Math.log(d))),
      (s = i / Math.pow(d, h - c)),
      l.constrainResolution
        ? (t = J2(d, i, s, m, !x && b, y))
        : (t = Ny(i, s, m, !x && b, y));
  }
  return {
    constraint: t,
    maxResolution: i,
    minResolution: s,
    minZoom: c,
    zoomFactor: d,
  };
}
function sT(l) {
  if (l.enableRotation !== void 0 ? l.enableRotation : !0) {
    const i = l.constrainRotation;
    return i === void 0 || i === !0
      ? tT()
      : i === !1
        ? Gy
        : typeof i == "number"
          ? $2(i)
          : Gy;
  }
  return Pd;
}
function lT(l) {
  return !(
    (l.sourceCenter && l.targetCenter && !Cu(l.sourceCenter, l.targetCenter)) ||
    l.sourceResolution !== l.targetResolution ||
    l.sourceRotation !== l.targetRotation
  );
}
function Uf(l, t, i, s, r) {
  const o = Math.cos(-r);
  let c = Math.sin(-r),
    h = l[0] * o - l[1] * c,
    d = l[1] * o + l[0] * c;
  (h += (t[0] / 2 - i[0]) * s), (d += (i[1] - t[1] / 2) * s), (c = -c);
  const _ = h * o - d * c,
    m = d * o + h * c;
  return [_, m];
}
const Gt = {
  OPACITY: "opacity",
  VISIBLE: "visible",
  EXTENT: "extent",
  Z_INDEX: "zIndex",
  MAX_RESOLUTION: "maxResolution",
  MIN_RESOLUTION: "minResolution",
  MAX_ZOOM: "maxZoom",
  MIN_ZOOM: "minZoom",
  SOURCE: "source",
  MAP: "map",
};
class t1 extends $i {
  constructor(t) {
    super(), this.on, this.once, this.un, (this.background_ = t.background);
    const i = Object.assign({}, t);
    typeof t.properties == "object" &&
      (delete i.properties, Object.assign(i, t.properties)),
      (i[Gt.OPACITY] = t.opacity !== void 0 ? t.opacity : 1),
      Lt(typeof i[Gt.OPACITY] == "number", "Layer opacity must be a number"),
      (i[Gt.VISIBLE] = t.visible !== void 0 ? t.visible : !0),
      (i[Gt.Z_INDEX] = t.zIndex),
      (i[Gt.MAX_RESOLUTION] =
        t.maxResolution !== void 0 ? t.maxResolution : 1 / 0),
      (i[Gt.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0),
      (i[Gt.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0),
      (i[Gt.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0),
      (this.className_ = i.className !== void 0 ? i.className : "ol-layer"),
      delete i.className,
      this.setProperties(i),
      (this.state_ = null);
  }
  getBackground() {
    return this.background_;
  }
  getClassName() {
    return this.className_;
  }
  getLayerState(t) {
    const i = this.state_ || { layer: this, managed: t === void 0 ? !0 : t },
      s = this.getZIndex();
    return (
      (i.opacity = se(Math.round(this.getOpacity() * 100) / 100, 0, 1)),
      (i.visible = this.getVisible()),
      (i.extent = this.getExtent()),
      (i.zIndex = s === void 0 && !i.managed ? 1 / 0 : s),
      (i.maxResolution = this.getMaxResolution()),
      (i.minResolution = Math.max(this.getMinResolution(), 0)),
      (i.minZoom = this.getMinZoom()),
      (i.maxZoom = this.getMaxZoom()),
      (this.state_ = i),
      i
    );
  }
  getLayersArray(t) {
    return _t();
  }
  getLayerStatesArray(t) {
    return _t();
  }
  getExtent() {
    return this.get(Gt.EXTENT);
  }
  getMaxResolution() {
    return this.get(Gt.MAX_RESOLUTION);
  }
  getMinResolution() {
    return this.get(Gt.MIN_RESOLUTION);
  }
  getMinZoom() {
    return this.get(Gt.MIN_ZOOM);
  }
  getMaxZoom() {
    return this.get(Gt.MAX_ZOOM);
  }
  getOpacity() {
    return this.get(Gt.OPACITY);
  }
  getSourceState() {
    return _t();
  }
  getVisible() {
    return this.get(Gt.VISIBLE);
  }
  getZIndex() {
    return this.get(Gt.Z_INDEX);
  }
  setBackground(t) {
    (this.background_ = t), this.changed();
  }
  setExtent(t) {
    this.set(Gt.EXTENT, t);
  }
  setMaxResolution(t) {
    this.set(Gt.MAX_RESOLUTION, t);
  }
  setMinResolution(t) {
    this.set(Gt.MIN_RESOLUTION, t);
  }
  setMaxZoom(t) {
    this.set(Gt.MAX_ZOOM, t);
  }
  setMinZoom(t) {
    this.set(Gt.MIN_ZOOM, t);
  }
  setOpacity(t) {
    Lt(typeof t == "number", "Layer opacity must be a number"),
      this.set(Gt.OPACITY, t);
  }
  setVisible(t) {
    this.set(Gt.VISIBLE, t);
  }
  setZIndex(t) {
    this.set(Gt.Z_INDEX, t);
  }
  disposeInternal() {
    this.state_ && ((this.state_.layer = null), (this.state_ = null)),
      super.disposeInternal();
  }
}
class hc extends t1 {
  constructor(t) {
    const i = Object.assign({}, t);
    delete i.source,
      super(i),
      this.on,
      this.once,
      this.un,
      (this.mapPrecomposeKey_ = null),
      (this.mapRenderKey_ = null),
      (this.sourceChangeKey_ = null),
      (this.renderer_ = null),
      (this.sourceReady_ = !1),
      (this.rendered = !1),
      t.render && (this.render = t.render),
      t.map && this.setMap(t.map),
      this.addChangeListener(Gt.SOURCE, this.handleSourcePropertyChange_);
    const s = t.source ? t.source : null;
    this.setSource(s);
  }
  getLayersArray(t) {
    return (t = t || []), t.push(this), t;
  }
  getLayerStatesArray(t) {
    return (t = t || []), t.push(this.getLayerState()), t;
  }
  getSource() {
    return this.get(Gt.SOURCE) || null;
  }
  getRenderSource() {
    return this.getSource();
  }
  getSourceState() {
    const t = this.getSource();
    return t ? t.getState() : "undefined";
  }
  handleSourceChange_() {
    this.changed(),
      !(this.sourceReady_ || this.getSource().getState() !== "ready") &&
        ((this.sourceReady_ = !0), this.dispatchEvent("sourceready"));
  }
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ &&
      (Zt(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1);
    const t = this.getSource();
    t &&
      ((this.sourceChangeKey_ = Mt(
        t,
        pt.CHANGE,
        this.handleSourceChange_,
        this,
      )),
      t.getState() === "ready" &&
        ((this.sourceReady_ = !0),
        setTimeout(() => {
          this.dispatchEvent("sourceready");
        }, 0)),
      this.clearRenderer()),
      this.changed();
  }
  getFeatures(t) {
    return this.renderer_ ? this.renderer_.getFeatures(t) : Promise.resolve([]);
  }
  getData(t) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(t);
  }
  isVisible(t) {
    let i;
    const s = this.getMapInternal();
    !t && s && (t = s.getView()),
      t instanceof Vi
        ? (i = { viewState: t.getState(), extent: t.calculateExtent() })
        : (i = t),
      !i.layerStatesArray &&
        s &&
        (i.layerStatesArray = s.getLayerGroup().getLayerStatesArray());
    let r;
    if (i.layerStatesArray) {
      if (((r = i.layerStatesArray.find((c) => c.layer === this)), !r))
        return !1;
    } else r = this.getLayerState();
    const o = this.getExtent();
    return Zd(r, i.viewState) && (!o || je(o, i.extent));
  }
  getAttributions(t) {
    var o;
    if (!this.isVisible(t)) return [];
    const i = (o = this.getSource()) == null ? void 0 : o.getAttributions();
    if (!i) return [];
    const s = t instanceof Vi ? t.getViewStateAndExtent() : t;
    let r = i(s);
    return Array.isArray(r) || (r = [r]), r;
  }
  render(t, i) {
    const s = this.getRenderer();
    return s.prepareFrame(t)
      ? ((this.rendered = !0), s.renderFrame(t, i))
      : null;
  }
  unrender() {
    this.rendered = !1;
  }
  getDeclutter() {}
  renderDeclutter(t, i) {}
  renderDeferred(t) {
    const i = this.getRenderer();
    i && i.renderDeferred(t);
  }
  setMapInternal(t) {
    t || this.unrender(), this.set(Gt.MAP, t);
  }
  getMapInternal() {
    return this.get(Gt.MAP);
  }
  setMap(t) {
    this.mapPrecomposeKey_ &&
      (Zt(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      t || this.changed(),
      this.mapRenderKey_ &&
        (Zt(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      t &&
        ((this.mapPrecomposeKey_ = Mt(
          t,
          Ei.PRECOMPOSE,
          this.handlePrecompose_,
          this,
        )),
        (this.mapRenderKey_ = Mt(this, pt.CHANGE, t.render, t)),
        this.changed());
  }
  handlePrecompose_(t) {
    const i = t.frameState.layerStatesArray,
      s = this.getLayerState(!1);
    Lt(
      !i.some((r) => r.layer === s.layer),
      "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.",
    ),
      i.push(s);
  }
  setSource(t) {
    this.set(Gt.SOURCE, t);
  }
  getRenderer() {
    return (
      this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_
    );
  }
  hasRenderer() {
    return !!this.renderer_;
  }
  createRenderer() {
    return null;
  }
  clearRenderer() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_);
  }
  disposeInternal() {
    this.clearRenderer(), this.setSource(null), super.disposeInternal();
  }
}
function Zd(l, t) {
  if (!l.visible) return !1;
  const i = t.resolution;
  if (i < l.minResolution || i >= l.maxResolution) return !1;
  const s = t.zoom;
  return s > l.minZoom && s <= l.maxZoom;
}
const Fy = { RENDER_ORDER: "renderOrder" };
class e1 extends hc {
  constructor(t) {
    t = t || {};
    const i = Object.assign({}, t);
    delete i.style,
      delete i.renderBuffer,
      delete i.updateWhileAnimating,
      delete i.updateWhileInteracting,
      super(i),
      (this.declutter_ = t.declutter ? String(t.declutter) : void 0),
      (this.renderBuffer_ = t.renderBuffer !== void 0 ? t.renderBuffer : 100),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      this.setStyle(t.style),
      (this.updateWhileAnimating_ =
        t.updateWhileAnimating !== void 0 ? t.updateWhileAnimating : !1),
      (this.updateWhileInteracting_ =
        t.updateWhileInteracting !== void 0 ? t.updateWhileInteracting : !1);
  }
  getDeclutter() {
    return this.declutter_;
  }
  getFeatures(t) {
    return super.getFeatures(t);
  }
  getRenderBuffer() {
    return this.renderBuffer_;
  }
  getRenderOrder() {
    return this.get(Fy.RENDER_ORDER);
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }
  renderDeclutter(t, i) {
    const s = this.getDeclutter();
    s in t.declutter || (t.declutter[s] = new Xp(9)),
      this.getRenderer().renderDeclutter(t, i);
  }
  setRenderOrder(t) {
    this.set(Fy.RENDER_ORDER, t);
  }
  setStyle(t) {
    this.style_ = t === void 0 ? kp : t;
    const i = rT(t);
    (this.styleFunction_ = t === null ? void 0 : Hx(i)), this.changed();
  }
  setDeclutter(t) {
    (this.declutter_ = t ? String(t) : void 0), this.changed();
  }
}
function rT(l) {
  if (l === void 0) return kp;
  if (!l) return null;
  if (typeof l == "function" || l instanceof $s) return l;
  if (!Array.isArray(l)) return Oy([l]);
  if (l.length === 0) return [];
  const t = l.length,
    i = l[0];
  if (i instanceof $s) {
    const r = new Array(t);
    for (let o = 0; o < t; ++o) {
      const c = l[o];
      if (!(c instanceof $s))
        throw new Error("Expected a list of style instances");
      r[o] = c;
    }
    return r;
  }
  if ("style" in i) {
    const r = new Array(t);
    for (let o = 0; o < t; ++o) {
      const c = l[o];
      if (!("style" in c))
        throw new Error("Expected a list of rules with a style property");
      r[o] = c;
    }
    return N2(r);
  }
  return Oy(l);
}
class Uy extends e1 {
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new u2(this);
  }
}
const ft = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 };
class Kd extends Pu {
  constructor(t, i, s) {
    super(),
      (s = s || {}),
      (this.tileCoord = t),
      (this.state = i),
      (this.key = ""),
      (this.transition_ = s.transition === void 0 ? 250 : s.transition),
      (this.transitionStarts_ = {}),
      (this.interpolate = !!s.interpolate);
  }
  changed() {
    this.dispatchEvent(pt.CHANGE);
  }
  release() {
    this.setState(ft.EMPTY);
  }
  getKey() {
    return this.key + "/" + this.tileCoord;
  }
  getTileCoord() {
    return this.tileCoord;
  }
  getState() {
    return this.state;
  }
  setState(t) {
    if (this.state !== ft.EMPTY) {
      if (this.state !== ft.ERROR && this.state > t)
        throw new Error("Tile load sequence violation");
      (this.state = t), this.changed();
    }
  }
  load() {
    _t();
  }
  getAlpha(t, i) {
    if (!this.transition_) return 1;
    let s = this.transitionStarts_[t];
    if (!s) (s = i), (this.transitionStarts_[t] = s);
    else if (s === -1) return 1;
    const r = i - s + 1e3 / 60;
    return r >= this.transition_ ? 1 : $p(r / this.transition_);
  }
  inTransition(t) {
    return this.transition_ ? this.transitionStarts_[t] !== -1 : !1;
  }
  endTransition(t) {
    this.transition_ && (this.transitionStarts_[t] = -1);
  }
  disposeInternal() {
    this.release(), super.disposeInternal();
  }
}
class i1 extends Kd {
  constructor(t, i, s, r, o, c) {
    super(t, i, c),
      (this.crossOrigin_ = r),
      (this.src_ = s),
      (this.key = s),
      (this.image_ = new Image()),
      r !== null && (this.image_.crossOrigin = r),
      (this.unlisten_ = null),
      (this.tileLoadFunction_ = o);
  }
  getImage() {
    return this.image_;
  }
  setImage(t) {
    (this.image_ = t),
      (this.state = ft.LOADED),
      this.unlistenImage_(),
      this.changed();
  }
  handleImageError_() {
    (this.state = ft.ERROR),
      this.unlistenImage_(),
      (this.image_ = aT()),
      this.changed();
  }
  handleImageLoad_() {
    const t = this.image_;
    t.naturalWidth && t.naturalHeight
      ? (this.state = ft.LOADED)
      : (this.state = ft.EMPTY),
      this.unlistenImage_(),
      this.changed();
  }
  load() {
    this.state == ft.ERROR &&
      ((this.state = ft.IDLE),
      (this.image_ = new Image()),
      this.crossOrigin_ !== null &&
        (this.image_.crossOrigin = this.crossOrigin_)),
      this.state == ft.IDLE &&
        ((this.state = ft.LOADING),
        this.changed(),
        this.tileLoadFunction_(this, this.src_),
        (this.unlisten_ = cx(
          this.image_,
          this.handleImageLoad_.bind(this),
          this.handleImageError_.bind(this),
        )));
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null));
  }
  disposeInternal() {
    this.unlistenImage_(), (this.image_ = null), super.disposeInternal();
  }
}
function aT() {
  const l = me(1, 1);
  return (l.fillStyle = "rgba(0,0,0,0)"), l.fillRect(0, 0, 1, 1), l.canvas;
}
class oT {
  constructor(t, i, s) {
    (this.decay_ = t),
      (this.minVelocity_ = i),
      (this.delay_ = s),
      (this.points_ = []),
      (this.angle_ = 0),
      (this.initialVelocity_ = 0);
  }
  begin() {
    (this.points_.length = 0), (this.angle_ = 0), (this.initialVelocity_ = 0);
  }
  update(t, i) {
    this.points_.push(t, i, Date.now());
  }
  end() {
    if (this.points_.length < 6) return !1;
    const t = Date.now() - this.delay_,
      i = this.points_.length - 3;
    if (this.points_[i + 2] < t) return !1;
    let s = i - 3;
    for (; s > 0 && this.points_[s + 2] > t; ) s -= 3;
    const r = this.points_[i + 2] - this.points_[s + 2];
    if (r < 1e3 / 60) return !1;
    const o = this.points_[i] - this.points_[s],
      c = this.points_[i + 1] - this.points_[s + 1];
    return (
      (this.angle_ = Math.atan2(c, o)),
      (this.initialVelocity_ = Math.sqrt(o * o + c * c) / r),
      this.initialVelocity_ > this.minVelocity_
    );
  }
  getDistance() {
    return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
  }
  getAngle() {
    return this.angle_;
  }
}
class tr extends Dn {
  constructor(t, i, s) {
    super(t), (this.map = i), (this.frameState = s !== void 0 ? s : null);
  }
}
class rs extends tr {
  constructor(t, i, s, r, o, c) {
    super(t, i, o),
      (this.originalEvent = s),
      (this.pixel_ = null),
      (this.coordinate_ = null),
      (this.dragging = r !== void 0 ? r : !1),
      (this.activePointers = c);
  }
  get pixel() {
    return (
      this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)),
      this.pixel_
    );
  }
  set pixel(t) {
    this.pixel_ = t;
  }
  get coordinate() {
    return (
      this.coordinate_ ||
        (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)),
      this.coordinate_
    );
  }
  set coordinate(t) {
    this.coordinate_ = t;
  }
  preventDefault() {
    super.preventDefault(),
      "preventDefault" in this.originalEvent &&
        this.originalEvent.preventDefault();
  }
  stopPropagation() {
    super.stopPropagation(),
      "stopPropagation" in this.originalEvent &&
        this.originalEvent.stopPropagation();
  }
}
const $t = {
    SINGLECLICK: "singleclick",
    CLICK: pt.CLICK,
    DBLCLICK: pt.DBLCLICK,
    POINTERDRAG: "pointerdrag",
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel",
  },
  ad = { POINTERMOVE: "pointermove", POINTERDOWN: "pointerdown" };
class uT extends Pu {
  constructor(t, i) {
    super(t),
      (this.map_ = t),
      this.clickTimeoutId_,
      (this.emulateClicks_ = !1),
      (this.dragging_ = !1),
      (this.dragListenerKeys_ = []),
      (this.moveTolerance_ = i === void 0 ? 1 : i),
      (this.down_ = null);
    const s = this.map_.getViewport();
    (this.activePointers_ = []),
      (this.trackedTouches_ = {}),
      (this.element_ = s),
      (this.pointerdownListenerKey_ = Mt(
        s,
        ad.POINTERDOWN,
        this.handlePointerDown_,
        this,
      )),
      this.originalPointerMoveEvent_,
      (this.relayedListenerKey_ = Mt(
        s,
        ad.POINTERMOVE,
        this.relayMoveEvent_,
        this,
      )),
      (this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this)),
      this.element_.addEventListener(
        pt.TOUCHMOVE,
        this.boundHandleTouchMove_,
        bp ? { passive: !1 } : !1,
      );
  }
  emulateClick_(t) {
    let i = new rs($t.CLICK, this.map_, t);
    this.dispatchEvent(i),
      this.clickTimeoutId_ !== void 0
        ? (clearTimeout(this.clickTimeoutId_),
          (this.clickTimeoutId_ = void 0),
          (i = new rs($t.DBLCLICK, this.map_, t)),
          this.dispatchEvent(i))
        : (this.clickTimeoutId_ = setTimeout(() => {
            this.clickTimeoutId_ = void 0;
            const s = new rs($t.SINGLECLICK, this.map_, t);
            this.dispatchEvent(s);
          }, 250));
  }
  updateActivePointers_(t) {
    const i = t,
      s = i.pointerId;
    if (i.type == $t.POINTERUP || i.type == $t.POINTERCANCEL) {
      delete this.trackedTouches_[s];
      for (const r in this.trackedTouches_)
        if (this.trackedTouches_[r].target !== i.target) {
          delete this.trackedTouches_[r];
          break;
        }
    } else
      (i.type == $t.POINTERDOWN || i.type == $t.POINTERMOVE) &&
        (this.trackedTouches_[s] = i);
    this.activePointers_ = Object.values(this.trackedTouches_);
  }
  handlePointerUp_(t) {
    this.updateActivePointers_(t);
    const i = new rs(
      $t.POINTERUP,
      this.map_,
      t,
      void 0,
      void 0,
      this.activePointers_,
    );
    this.dispatchEvent(i),
      this.emulateClicks_ &&
        !i.defaultPrevented &&
        !this.dragging_ &&
        this.isMouseActionButton_(t) &&
        this.emulateClick_(this.down_),
      this.activePointers_.length === 0 &&
        (this.dragListenerKeys_.forEach(Zt),
        (this.dragListenerKeys_.length = 0),
        (this.dragging_ = !1),
        (this.down_ = null));
  }
  isMouseActionButton_(t) {
    return t.button === 0;
  }
  handlePointerDown_(t) {
    (this.emulateClicks_ = this.activePointers_.length === 0),
      this.updateActivePointers_(t);
    const i = new rs(
      $t.POINTERDOWN,
      this.map_,
      t,
      void 0,
      void 0,
      this.activePointers_,
    );
    if (
      (this.dispatchEvent(i),
      (this.down_ = new PointerEvent(t.type, t)),
      Object.defineProperty(this.down_, "target", {
        writable: !1,
        value: t.target,
      }),
      this.dragListenerKeys_.length === 0)
    ) {
      const s = this.map_.getOwnerDocument();
      this.dragListenerKeys_.push(
        Mt(s, $t.POINTERMOVE, this.handlePointerMove_, this),
        Mt(s, $t.POINTERUP, this.handlePointerUp_, this),
        Mt(this.element_, $t.POINTERCANCEL, this.handlePointerUp_, this),
      ),
        this.element_.getRootNode &&
          this.element_.getRootNode() !== s &&
          this.dragListenerKeys_.push(
            Mt(
              this.element_.getRootNode(),
              $t.POINTERUP,
              this.handlePointerUp_,
              this,
            ),
          );
    }
  }
  handlePointerMove_(t) {
    if (this.isMoving_(t)) {
      this.updateActivePointers_(t), (this.dragging_ = !0);
      const i = new rs(
        $t.POINTERDRAG,
        this.map_,
        t,
        this.dragging_,
        void 0,
        this.activePointers_,
      );
      this.dispatchEvent(i);
    }
  }
  relayMoveEvent_(t) {
    this.originalPointerMoveEvent_ = t;
    const i = !!(this.down_ && this.isMoving_(t));
    this.dispatchEvent(new rs($t.POINTERMOVE, this.map_, t, i));
  }
  handleTouchMove_(t) {
    const i = this.originalPointerMoveEvent_;
    (!i || i.defaultPrevented) &&
      (typeof t.cancelable != "boolean" || t.cancelable === !0) &&
      t.preventDefault();
  }
  isMoving_(t) {
    return (
      this.dragging_ ||
      Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ ||
      Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_
    );
  }
  disposeInternal() {
    this.relayedListenerKey_ &&
      (Zt(this.relayedListenerKey_), (this.relayedListenerKey_ = null)),
      this.element_.removeEventListener(
        pt.TOUCHMOVE,
        this.boundHandleTouchMove_,
      ),
      this.pointerdownListenerKey_ &&
        (Zt(this.pointerdownListenerKey_),
        (this.pointerdownListenerKey_ = null)),
      this.dragListenerKeys_.forEach(Zt),
      (this.dragListenerKeys_.length = 0),
      (this.element_ = null),
      super.disposeInternal();
  }
}
const as = {
    POSTRENDER: "postrender",
    MOVESTART: "movestart",
    MOVEEND: "moveend",
    LOADSTART: "loadstart",
    LOADEND: "loadend",
  },
  we = {
    LAYERGROUP: "layergroup",
    SIZE: "size",
    TARGET: "target",
    VIEW: "view",
  },
  Yu = 1 / 0;
class cT {
  constructor(t, i) {
    (this.priorityFunction_ = t),
      (this.keyFunction_ = i),
      (this.elements_ = []),
      (this.priorities_ = []),
      (this.queuedElements_ = {});
  }
  clear() {
    (this.elements_.length = 0),
      (this.priorities_.length = 0),
      ka(this.queuedElements_);
  }
  dequeue() {
    const t = this.elements_,
      i = this.priorities_,
      s = t[0];
    t.length == 1
      ? ((t.length = 0), (i.length = 0))
      : ((t[0] = t.pop()), (i[0] = i.pop()), this.siftUp_(0));
    const r = this.keyFunction_(s);
    return delete this.queuedElements_[r], s;
  }
  enqueue(t) {
    Lt(
      !(this.keyFunction_(t) in this.queuedElements_),
      "Tried to enqueue an `element` that was already added to the queue",
    );
    const i = this.priorityFunction_(t);
    return i != Yu
      ? (this.elements_.push(t),
        this.priorities_.push(i),
        (this.queuedElements_[this.keyFunction_(t)] = !0),
        this.siftDown_(0, this.elements_.length - 1),
        !0)
      : !1;
  }
  getCount() {
    return this.elements_.length;
  }
  getLeftChildIndex_(t) {
    return t * 2 + 1;
  }
  getRightChildIndex_(t) {
    return t * 2 + 2;
  }
  getParentIndex_(t) {
    return (t - 1) >> 1;
  }
  heapify_() {
    let t;
    for (t = (this.elements_.length >> 1) - 1; t >= 0; t--) this.siftUp_(t);
  }
  isEmpty() {
    return this.elements_.length === 0;
  }
  isKeyQueued(t) {
    return t in this.queuedElements_;
  }
  isQueued(t) {
    return this.isKeyQueued(this.keyFunction_(t));
  }
  siftUp_(t) {
    const i = this.elements_,
      s = this.priorities_,
      r = i.length,
      o = i[t],
      c = s[t],
      h = t;
    for (; t < r >> 1; ) {
      const d = this.getLeftChildIndex_(t),
        _ = this.getRightChildIndex_(t),
        m = _ < r && s[_] < s[d] ? _ : d;
      (i[t] = i[m]), (s[t] = s[m]), (t = m);
    }
    (i[t] = o), (s[t] = c), this.siftDown_(h, t);
  }
  siftDown_(t, i) {
    const s = this.elements_,
      r = this.priorities_,
      o = s[i],
      c = r[i];
    for (; i > t; ) {
      const h = this.getParentIndex_(i);
      if (r[h] > c) (s[i] = s[h]), (r[i] = r[h]), (i = h);
      else break;
    }
    (s[i] = o), (r[i] = c);
  }
  reprioritize() {
    const t = this.priorityFunction_,
      i = this.elements_,
      s = this.priorities_;
    let r = 0;
    const o = i.length;
    let c, h, d;
    for (h = 0; h < o; ++h)
      (c = i[h]),
        (d = t(c)),
        d == Yu
          ? delete this.queuedElements_[this.keyFunction_(c)]
          : ((s[r] = d), (i[r++] = c));
    (i.length = r), (s.length = r), this.heapify_();
  }
}
class hT extends cT {
  constructor(t, i) {
    super(
      (s) => t.apply(null, s),
      (s) => s[0].getKey(),
    ),
      (this.boundHandleTileChange_ = this.handleTileChange.bind(this)),
      (this.tileChangeCallback_ = i),
      (this.tilesLoading_ = 0),
      (this.tilesLoadingKeys_ = {});
  }
  enqueue(t) {
    const i = super.enqueue(t);
    return (
      i && t[0].addEventListener(pt.CHANGE, this.boundHandleTileChange_), i
    );
  }
  getTilesLoading() {
    return this.tilesLoading_;
  }
  handleTileChange(t) {
    const i = t.target,
      s = i.getState();
    if (s === ft.LOADED || s === ft.ERROR || s === ft.EMPTY) {
      s !== ft.ERROR &&
        i.removeEventListener(pt.CHANGE, this.boundHandleTileChange_);
      const r = i.getKey();
      r in this.tilesLoadingKeys_ &&
        (delete this.tilesLoadingKeys_[r], --this.tilesLoading_),
        this.tileChangeCallback_();
    }
  }
  loadMoreTiles(t, i) {
    let s = 0;
    for (; this.tilesLoading_ < t && s < i && this.getCount() > 0; ) {
      const r = this.dequeue()[0],
        o = r.getKey();
      r.getState() === ft.IDLE &&
        !(o in this.tilesLoadingKeys_) &&
        ((this.tilesLoadingKeys_[o] = !0), ++this.tilesLoading_, ++s, r.load());
    }
  }
}
function fT(l, t, i, s, r) {
  if (!l || !(i in l.wantedTiles) || !l.wantedTiles[i][t.getKey()]) return Yu;
  const o = l.viewState.center,
    c = s[0] - o[0],
    h = s[1] - o[1];
  return 65536 * Math.log(r) + Math.sqrt(c * c + h * h) / r;
}
class qd extends $i {
  constructor(t) {
    super();
    const i = t.element;
    i &&
      !t.target &&
      !i.style.pointerEvents &&
      (i.style.pointerEvents = "auto"),
      (this.element = i || null),
      (this.target_ = null),
      (this.map_ = null),
      (this.listenerKeys = []),
      t.render && (this.render = t.render),
      t.target && this.setTarget(t.target);
  }
  disposeInternal() {
    var t;
    (t = this.element) == null || t.remove(), super.disposeInternal();
  }
  getMap() {
    return this.map_;
  }
  setMap(t) {
    var i;
    this.map_ && ((i = this.element) == null || i.remove());
    for (let s = 0, r = this.listenerKeys.length; s < r; ++s)
      Zt(this.listenerKeys[s]);
    if (((this.listenerKeys.length = 0), (this.map_ = t), t)) {
      const s = this.target_ ?? t.getOverlayContainerStopEvent();
      this.element && s.appendChild(this.element),
        this.render !== or &&
          this.listenerKeys.push(Mt(t, as.POSTRENDER, this.render, this)),
        t.render();
    }
  }
  render(t) {}
  setTarget(t) {
    this.target_ = typeof t == "string" ? document.getElementById(t) : t;
  }
}
class dT extends qd {
  constructor(t) {
    (t = t || {}),
      super({
        element: document.createElement("div"),
        render: t.render,
        target: t.target,
      }),
      (this.ulElement_ = document.createElement("ul")),
      (this.collapsed_ = t.collapsed !== void 0 ? t.collapsed : !0),
      (this.userCollapsed_ = this.collapsed_),
      (this.overrideCollapsible_ = t.collapsible !== void 0),
      (this.collapsible_ = t.collapsible !== void 0 ? t.collapsible : !0),
      this.collapsible_ || (this.collapsed_ = !1),
      (this.attributions_ = t.attributions);
    const i = t.className !== void 0 ? t.className : "ol-attribution",
      s = t.tipLabel !== void 0 ? t.tipLabel : "Attributions",
      r = t.expandClassName !== void 0 ? t.expandClassName : i + "-expand",
      o = t.collapseLabel !== void 0 ? t.collapseLabel : "›",
      c =
        t.collapseClassName !== void 0 ? t.collapseClassName : i + "-collapse";
    typeof o == "string"
      ? ((this.collapseLabel_ = document.createElement("span")),
        (this.collapseLabel_.textContent = o),
        (this.collapseLabel_.className = c))
      : (this.collapseLabel_ = o);
    const h = t.label !== void 0 ? t.label : "i";
    typeof h == "string"
      ? ((this.label_ = document.createElement("span")),
        (this.label_.textContent = h),
        (this.label_.className = r))
      : (this.label_ = h);
    const d =
      this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    (this.toggleButton_ = document.createElement("button")),
      this.toggleButton_.setAttribute("type", "button"),
      this.toggleButton_.setAttribute(
        "aria-expanded",
        String(!this.collapsed_),
      ),
      (this.toggleButton_.title = s),
      this.toggleButton_.appendChild(d),
      this.toggleButton_.addEventListener(
        pt.CLICK,
        this.handleClick_.bind(this),
        !1,
      );
    const _ =
        i +
        " " +
        ic +
        " " +
        Ud +
        (this.collapsed_ && this.collapsible_ ? " " + oy : "") +
        (this.collapsible_ ? "" : " ol-uncollapsible"),
      m = this.element;
    (m.className = _),
      m.appendChild(this.toggleButton_),
      m.appendChild(this.ulElement_),
      (this.renderedAttributions_ = []),
      (this.renderedVisible_ = !0);
  }
  collectSourceAttributions_(t) {
    const i = this.getMap().getAllLayers(),
      s = new Set(i.flatMap((r) => r.getAttributions(t)));
    if (
      (this.attributions_ !== void 0 &&
        (Array.isArray(this.attributions_)
          ? this.attributions_.forEach((r) => s.add(r))
          : s.add(this.attributions_)),
      !this.overrideCollapsible_)
    ) {
      const r = !i.some((o) => {
        var c;
        return (
          ((c = o.getSource()) == null
            ? void 0
            : c.getAttributionsCollapsible()) === !1
        );
      });
      this.setCollapsible(r);
    }
    return Array.from(s);
  }
  async updateElement_(t) {
    if (!t) {
      this.renderedVisible_ &&
        ((this.element.style.display = "none"), (this.renderedVisible_ = !1));
      return;
    }
    const i = await Promise.all(
        this.collectSourceAttributions_(t).map((r) => XE(() => r)),
      ),
      s = i.length > 0;
    if (
      (this.renderedVisible_ != s &&
        ((this.element.style.display = s ? "" : "none"),
        (this.renderedVisible_ = s)),
      !ys(i, this.renderedAttributions_))
    ) {
      ox(this.ulElement_);
      for (let r = 0, o = i.length; r < o; ++r) {
        const c = document.createElement("li");
        (c.innerHTML = i[r]), this.ulElement_.appendChild(c);
      }
      this.renderedAttributions_ = i;
    }
  }
  handleClick_(t) {
    t.preventDefault(),
      this.handleToggle_(),
      (this.userCollapsed_ = this.collapsed_);
  }
  handleToggle_() {
    this.element.classList.toggle(oy),
      this.collapsed_
        ? ay(this.collapseLabel_, this.label_)
        : ay(this.label_, this.collapseLabel_),
      (this.collapsed_ = !this.collapsed_),
      this.toggleButton_.setAttribute(
        "aria-expanded",
        String(!this.collapsed_),
      );
  }
  getCollapsible() {
    return this.collapsible_;
  }
  setCollapsible(t) {
    this.collapsible_ !== t &&
      ((this.collapsible_ = t),
      this.element.classList.toggle("ol-uncollapsible"),
      this.userCollapsed_ && this.handleToggle_());
  }
  setCollapsed(t) {
    (this.userCollapsed_ = t),
      !(!this.collapsible_ || this.collapsed_ === t) && this.handleToggle_();
  }
  getCollapsed() {
    return this.collapsed_;
  }
  render(t) {
    this.updateElement_(t.frameState);
  }
}
class gT extends qd {
  constructor(t) {
    (t = t || {}),
      super({
        element: document.createElement("div"),
        render: t.render,
        target: t.target,
      });
    const i = t.className !== void 0 ? t.className : "ol-rotate",
      s = t.label !== void 0 ? t.label : "⇧",
      r = t.compassClassName !== void 0 ? t.compassClassName : "ol-compass";
    (this.label_ = null),
      typeof s == "string"
        ? ((this.label_ = document.createElement("span")),
          (this.label_.className = r),
          (this.label_.textContent = s))
        : ((this.label_ = s), this.label_.classList.add(r));
    const o = t.tipLabel ? t.tipLabel : "Reset rotation",
      c = document.createElement("button");
    (c.className = i + "-reset"),
      c.setAttribute("type", "button"),
      (c.title = o),
      c.appendChild(this.label_),
      c.addEventListener(pt.CLICK, this.handleClick_.bind(this), !1);
    const h = i + " " + ic + " " + Ud,
      d = this.element;
    (d.className = h),
      d.appendChild(c),
      (this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250),
      (this.autoHide_ = t.autoHide !== void 0 ? t.autoHide : !0),
      (this.rotation_ = void 0),
      this.autoHide_ && this.element.classList.add(du);
  }
  handleClick_(t) {
    t.preventDefault(),
      this.callResetNorth_ !== void 0
        ? this.callResetNorth_()
        : this.resetNorth_();
  }
  resetNorth_() {
    const i = this.getMap().getView();
    if (!i) return;
    const s = i.getRotation();
    s !== void 0 &&
      (this.duration_ > 0 && s % (2 * Math.PI) !== 0
        ? i.animate({ rotation: 0, duration: this.duration_, easing: yr })
        : i.setRotation(0));
  }
  render(t) {
    const i = t.frameState;
    if (!i) return;
    const s = i.viewState.rotation;
    if (s != this.rotation_) {
      const r = "rotate(" + s + "rad)";
      if (this.autoHide_) {
        const o = this.element.classList.contains(du);
        !o && s === 0
          ? this.element.classList.add(du)
          : o && s !== 0 && this.element.classList.remove(du);
      }
      this.label_.style.transform = r;
    }
    this.rotation_ = s;
  }
}
class _T extends qd {
  constructor(t) {
    (t = t || {}),
      super({ element: document.createElement("div"), target: t.target });
    const i = t.className !== void 0 ? t.className : "ol-zoom",
      s = t.delta !== void 0 ? t.delta : 1,
      r = t.zoomInClassName !== void 0 ? t.zoomInClassName : i + "-in",
      o = t.zoomOutClassName !== void 0 ? t.zoomOutClassName : i + "-out",
      c = t.zoomInLabel !== void 0 ? t.zoomInLabel : "+",
      h = t.zoomOutLabel !== void 0 ? t.zoomOutLabel : "–",
      d = t.zoomInTipLabel !== void 0 ? t.zoomInTipLabel : "Zoom in",
      _ = t.zoomOutTipLabel !== void 0 ? t.zoomOutTipLabel : "Zoom out",
      m = document.createElement("button");
    (m.className = r),
      m.setAttribute("type", "button"),
      (m.title = d),
      m.appendChild(typeof c == "string" ? document.createTextNode(c) : c),
      m.addEventListener(pt.CLICK, this.handleClick_.bind(this, s), !1);
    const y = document.createElement("button");
    (y.className = o),
      y.setAttribute("type", "button"),
      (y.title = _),
      y.appendChild(typeof h == "string" ? document.createTextNode(h) : h),
      y.addEventListener(pt.CLICK, this.handleClick_.bind(this, -s), !1);
    const v = i + " " + ic + " " + Ud,
      S = this.element;
    (S.className = v),
      S.appendChild(m),
      S.appendChild(y),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250);
  }
  handleClick_(t, i) {
    i.preventDefault(), this.zoomByDelta_(t);
  }
  zoomByDelta_(t) {
    const s = this.getMap().getView();
    if (!s) return;
    const r = s.getZoom();
    if (r !== void 0) {
      const o = s.getConstrainedZoom(r + t);
      this.duration_ > 0
        ? (s.getAnimating() && s.cancelAnimations(),
          s.animate({ zoom: o, duration: this.duration_, easing: yr }))
        : s.setZoom(o);
    }
  }
}
function mT(l) {
  l = l || {};
  const t = new Wi();
  return (
    (l.zoom !== void 0 ? l.zoom : !0) && t.push(new _T(l.zoomOptions)),
    (l.rotate !== void 0 ? l.rotate : !0) && t.push(new gT(l.rotateOptions)),
    (l.attribution !== void 0 ? l.attribution : !0) &&
      t.push(new dT(l.attributionOptions)),
    t
  );
}
const Xy = { ACTIVE: "active" };
class Wa extends $i {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      t && t.handleEvent && (this.handleEvent = t.handleEvent),
      (this.map_ = null),
      this.setActive(!0);
  }
  getActive() {
    return this.get(Xy.ACTIVE);
  }
  getMap() {
    return this.map_;
  }
  handleEvent(t) {
    return !0;
  }
  setActive(t) {
    this.set(Xy.ACTIVE, t);
  }
  setMap(t) {
    this.map_ = t;
  }
}
function yT(l, t, i) {
  const s = l.getCenterInternal();
  if (s) {
    const r = [s[0] + t[0], s[1] + t[1]];
    l.animateInternal({
      duration: i !== void 0 ? i : 250,
      easing: W2,
      center: l.getConstrainedCenter(r),
    });
  }
}
function Vd(l, t, i, s) {
  const r = l.getZoom();
  if (r === void 0) return;
  const o = l.getConstrainedZoom(r + t),
    c = l.getResolutionForZoom(o);
  l.getAnimating() && l.cancelAnimations(),
    l.animate({
      resolution: c,
      anchor: i,
      duration: s !== void 0 ? s : 250,
      easing: yr,
    });
}
class pT extends Wa {
  constructor(t) {
    super(),
      (t = t || {}),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250);
  }
  handleEvent(t) {
    let i = !1;
    if (t.type == $t.DBLCLICK) {
      const s = t.originalEvent,
        r = t.map,
        o = t.coordinate,
        c = s.shiftKey ? -this.delta_ : this.delta_,
        h = r.getView();
      Vd(h, c, o, this.duration_), s.preventDefault(), (i = !0);
    }
    return !i;
  }
}
function od(l) {
  const t = arguments;
  return function (i) {
    let s = !0;
    for (let r = 0, o = t.length; r < o && ((s = s && t[r](i)), !!s); ++r);
    return s;
  };
}
const vT = function (l) {
    const t = l.originalEvent;
    return t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
  },
  ET = function (l) {
    const t = l.map.getTargetElement(),
      i = t.getRootNode(),
      s = l.map.getOwnerDocument().activeElement;
    return i instanceof ShadowRoot ? i.host.contains(s) : t.contains(s);
  },
  n1 = function (l) {
    const t = l.map.getTargetElement(),
      i = t.getRootNode();
    return (i instanceof ShadowRoot ? i.host : t).hasAttribute("tabindex")
      ? ET(l)
      : !0;
  },
  ST = Ma,
  s1 = function (l) {
    const t = l.originalEvent;
    return t.button == 0 && !(ex && xp && t.ctrlKey);
  },
  l1 = function (l) {
    const t = l.originalEvent;
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey;
  },
  xT = function (l) {
    const t = l.originalEvent;
    return xp ? t.metaKey : t.ctrlKey;
  },
  TT = function (l) {
    const t = l.originalEvent;
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
  },
  r1 = function (l) {
    const t = l.originalEvent,
      i = t.target.tagName;
    return (
      i !== "INPUT" &&
      i !== "SELECT" &&
      i !== "TEXTAREA" &&
      !t.target.isContentEditable
    );
  },
  Xf = function (l) {
    const t = l.originalEvent;
    return (
      Lt(t !== void 0, "mapBrowserEvent must originate from a pointer event"),
      t.pointerType == "mouse"
    );
  },
  CT = function (l) {
    const t = l.originalEvent;
    return (
      Lt(t !== void 0, "mapBrowserEvent must originate from a pointer event"),
      t.isPrimary && t.button === 0
    );
  };
class Qa extends Wa {
  constructor(t) {
    (t = t || {}),
      super(t),
      t.handleDownEvent && (this.handleDownEvent = t.handleDownEvent),
      t.handleDragEvent && (this.handleDragEvent = t.handleDragEvent),
      t.handleMoveEvent && (this.handleMoveEvent = t.handleMoveEvent),
      t.handleUpEvent && (this.handleUpEvent = t.handleUpEvent),
      t.stopDown && (this.stopDown = t.stopDown),
      (this.handlingDownUpSequence = !1),
      (this.targetPointers = []);
  }
  getPointerCount() {
    return this.targetPointers.length;
  }
  handleDownEvent(t) {
    return !1;
  }
  handleDragEvent(t) {}
  handleEvent(t) {
    if (!t.originalEvent) return !0;
    let i = !1;
    if ((this.updateTrackedPointers_(t), this.handlingDownUpSequence)) {
      if (t.type == $t.POINTERDRAG)
        this.handleDragEvent(t), t.originalEvent.preventDefault();
      else if (t.type == $t.POINTERUP) {
        const s = this.handleUpEvent(t);
        this.handlingDownUpSequence = s && this.targetPointers.length > 0;
      }
    } else if (t.type == $t.POINTERDOWN) {
      const s = this.handleDownEvent(t);
      (this.handlingDownUpSequence = s), (i = this.stopDown(s));
    } else t.type == $t.POINTERMOVE && this.handleMoveEvent(t);
    return !i;
  }
  handleMoveEvent(t) {}
  handleUpEvent(t) {
    return !1;
  }
  stopDown(t) {
    return t;
  }
  updateTrackedPointers_(t) {
    t.activePointers && (this.targetPointers = t.activePointers);
  }
}
function Wd(l) {
  const t = l.length;
  let i = 0,
    s = 0;
  for (let r = 0; r < t; r++) (i += l[r].clientX), (s += l[r].clientY);
  return { clientX: i / t, clientY: s / t };
}
class RT extends Qa {
  constructor(t) {
    super({ stopDown: Hu }),
      (t = t || {}),
      (this.kinetic_ = t.kinetic),
      (this.lastCentroid = null),
      this.lastPointersCount_,
      (this.panning_ = !1);
    const i = t.condition ? t.condition : od(l1, CT);
    (this.condition_ = t.onFocusOnly ? od(n1, i) : i), (this.noKinetic_ = !1);
  }
  handleDragEvent(t) {
    const i = t.map;
    this.panning_ || ((this.panning_ = !0), i.getView().beginInteraction());
    const s = this.targetPointers,
      r = i.getEventPixel(Wd(s));
    if (s.length == this.lastPointersCount_) {
      if (
        (this.kinetic_ && this.kinetic_.update(r[0], r[1]), this.lastCentroid)
      ) {
        const o = [this.lastCentroid[0] - r[0], r[1] - this.lastCentroid[1]],
          h = t.map.getView();
        $E(o, h.getResolution()),
          yd(o, h.getRotation()),
          h.adjustCenterInternal(o);
      }
    } else this.kinetic_ && this.kinetic_.begin();
    (this.lastCentroid = r),
      (this.lastPointersCount_ = s.length),
      t.originalEvent.preventDefault();
  }
  handleUpEvent(t) {
    const i = t.map,
      s = i.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const r = this.kinetic_.getDistance(),
          o = this.kinetic_.getAngle(),
          c = s.getCenterInternal(),
          h = i.getPixelFromCoordinateInternal(c),
          d = i.getCoordinateFromPixelInternal([
            h[0] - r * Math.cos(o),
            h[1] - r * Math.sin(o),
          ]);
        s.animateInternal({
          center: s.getConstrainedCenter(d),
          duration: 500,
          easing: yr,
        });
      }
      return this.panning_ && ((this.panning_ = !1), s.endInteraction()), !1;
    }
    return (
      this.kinetic_ && this.kinetic_.begin(), (this.lastCentroid = null), !0
    );
  }
  handleDownEvent(t) {
    if (this.targetPointers.length > 0 && this.condition_(t)) {
      const s = t.map.getView();
      return (
        (this.lastCentroid = null),
        s.getAnimating() && s.cancelAnimations(),
        this.kinetic_ && this.kinetic_.begin(),
        (this.noKinetic_ = this.targetPointers.length > 1),
        !0
      );
    }
    return !1;
  }
}
class bT extends Qa {
  constructor(t) {
    (t = t || {}),
      super({ stopDown: Hu }),
      (this.condition_ = t.condition ? t.condition : vT),
      (this.lastAngle_ = void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250);
  }
  handleDragEvent(t) {
    if (!Xf(t)) return;
    const i = t.map,
      s = i.getView();
    if (s.getConstraints().rotation === Pd) return;
    const r = i.getSize(),
      o = t.pixel,
      c = Math.atan2(r[1] / 2 - o[1], o[0] - r[0] / 2);
    if (this.lastAngle_ !== void 0) {
      const h = c - this.lastAngle_;
      s.adjustRotationInternal(-h);
    }
    this.lastAngle_ = c;
  }
  handleUpEvent(t) {
    return Xf(t) ? (t.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  handleDownEvent(t) {
    return Xf(t) && s1(t) && this.condition_(t)
      ? (t.map.getView().beginInteraction(), (this.lastAngle_ = void 0), !0)
      : !1;
  }
}
class AT extends Bu {
  constructor(t) {
    super(),
      (this.geometry_ = null),
      (this.element_ = document.createElement("div")),
      (this.element_.style.position = "absolute"),
      (this.element_.style.pointerEvents = "auto"),
      (this.element_.className = "ol-box " + t),
      (this.map_ = null),
      (this.startPixel_ = null),
      (this.endPixel_ = null);
  }
  disposeInternal() {
    this.setMap(null);
  }
  render_() {
    const t = this.startPixel_,
      i = this.endPixel_,
      s = "px",
      r = this.element_.style;
    (r.left = Math.min(t[0], i[0]) + s),
      (r.top = Math.min(t[1], i[1]) + s),
      (r.width = Math.abs(i[0] - t[0]) + s),
      (r.height = Math.abs(i[1] - t[1]) + s);
  }
  setMap(t) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_);
      const i = this.element_.style;
      (i.left = "inherit"),
        (i.top = "inherit"),
        (i.width = "inherit"),
        (i.height = "inherit");
    }
    (this.map_ = t),
      this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
  }
  setPixels(t, i) {
    (this.startPixel_ = t),
      (this.endPixel_ = i),
      this.createOrUpdateGeometry(),
      this.render_();
  }
  createOrUpdateGeometry() {
    if (!this.map_) return;
    const t = this.startPixel_,
      i = this.endPixel_,
      r = [t, [t[0], i[1]], i, [i[0], t[1]]].map(
        this.map_.getCoordinateFromPixelInternal,
        this.map_,
      );
    (r[4] = r[0].slice()),
      this.geometry_
        ? this.geometry_.setCoordinates([r])
        : (this.geometry_ = new _s([r]));
  }
  getGeometry() {
    return this.geometry_;
  }
}
const ql = {
  BOXSTART: "boxstart",
  BOXDRAG: "boxdrag",
  BOXEND: "boxend",
  BOXCANCEL: "boxcancel",
};
class Ea extends Dn {
  constructor(t, i, s) {
    super(t), (this.coordinate = i), (this.mapBrowserEvent = s);
  }
}
class wT extends Qa {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      (t = t ?? {}),
      (this.box_ = new AT(t.className || "ol-dragbox")),
      (this.minArea_ = t.minArea ?? 64),
      t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd),
      (this.startPixel_ = null),
      (this.condition_ = t.condition ?? s1),
      (this.boxEndCondition_ =
        t.boxEndCondition ?? this.defaultBoxEndCondition);
  }
  defaultBoxEndCondition(t, i, s) {
    const r = s[0] - i[0],
      o = s[1] - i[1];
    return r * r + o * o >= this.minArea_;
  }
  getGeometry() {
    return this.box_.getGeometry();
  }
  handleDragEvent(t) {
    this.startPixel_ &&
      (this.box_.setPixels(this.startPixel_, t.pixel),
      this.dispatchEvent(new Ea(ql.BOXDRAG, t.coordinate, t)));
  }
  handleUpEvent(t) {
    if (!this.startPixel_) return !1;
    const i = this.boxEndCondition_(t, this.startPixel_, t.pixel);
    return (
      i && this.onBoxEnd(t),
      this.dispatchEvent(new Ea(i ? ql.BOXEND : ql.BOXCANCEL, t.coordinate, t)),
      this.box_.setMap(null),
      (this.startPixel_ = null),
      !1
    );
  }
  handleDownEvent(t) {
    return this.condition_(t)
      ? ((this.startPixel_ = t.pixel),
        this.box_.setMap(t.map),
        this.box_.setPixels(this.startPixel_, this.startPixel_),
        this.dispatchEvent(new Ea(ql.BOXSTART, t.coordinate, t)),
        !0)
      : !1;
  }
  onBoxEnd(t) {}
  setActive(t) {
    t ||
      (this.box_.setMap(null),
      this.startPixel_ &&
        (this.dispatchEvent(new Ea(ql.BOXCANCEL, this.startPixel_, null)),
        (this.startPixel_ = null))),
      super.setActive(t);
  }
  setMap(t) {
    this.getMap() &&
      (this.box_.setMap(null),
      this.startPixel_ &&
        (this.dispatchEvent(new Ea(ql.BOXCANCEL, this.startPixel_, null)),
        (this.startPixel_ = null))),
      super.setMap(t);
  }
}
class MT extends wT {
  constructor(t) {
    t = t || {};
    const i = t.condition ? t.condition : TT;
    super({
      condition: i,
      className: t.className || "ol-dragzoom",
      minArea: t.minArea,
    }),
      (this.duration_ = t.duration !== void 0 ? t.duration : 200),
      (this.out_ = t.out !== void 0 ? t.out : !1);
  }
  onBoxEnd(t) {
    const s = this.getMap().getView();
    let r = this.getGeometry();
    if (this.out_) {
      const o = s.rotatedExtentForGeometry(r),
        c = s.getResolutionForExtentInternal(o),
        h = s.getResolution() / c;
      (r = r.clone()), r.scale(h * h);
    }
    s.fitInternal(r, { duration: this.duration_, easing: yr });
  }
}
const js = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown",
};
class OT extends Wa {
  constructor(t) {
    super(),
      (t = t || {}),
      (this.defaultCondition_ = function (i) {
        return l1(i) && r1(i);
      }),
      (this.condition_ =
        t.condition !== void 0 ? t.condition : this.defaultCondition_),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100),
      (this.pixelDelta_ = t.pixelDelta !== void 0 ? t.pixelDelta : 128);
  }
  handleEvent(t) {
    let i = !1;
    if (t.type == pt.KEYDOWN) {
      const s = t.originalEvent,
        r = s.key;
      if (
        this.condition_(t) &&
        (r == js.DOWN || r == js.LEFT || r == js.RIGHT || r == js.UP)
      ) {
        const c = t.map.getView(),
          h = c.getResolution() * this.pixelDelta_;
        let d = 0,
          _ = 0;
        r == js.DOWN
          ? (_ = -h)
          : r == js.LEFT
            ? (d = -h)
            : r == js.RIGHT
              ? (d = h)
              : (_ = h);
        const m = [d, _];
        yd(m, c.getRotation()),
          yT(c, m, this.duration_),
          s.preventDefault(),
          (i = !0);
      }
    }
    return !i;
  }
}
class DT extends Wa {
  constructor(t) {
    super(),
      (t = t || {}),
      (this.condition_ = t.condition
        ? t.condition
        : function (i) {
            return !xT(i) && r1(i);
          }),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100);
  }
  handleEvent(t) {
    let i = !1;
    if (t.type == pt.KEYDOWN || t.type == pt.KEYPRESS) {
      const s = t.originalEvent,
        r = s.key;
      if (this.condition_(t) && (r === "+" || r === "-")) {
        const o = t.map,
          c = r === "+" ? this.delta_ : -this.delta_,
          h = o.getView();
        Vd(h, c, void 0, this.duration_), s.preventDefault(), (i = !0);
      }
    }
    return !i;
  }
}
class LT extends Wa {
  constructor(t) {
    (t = t || {}),
      super(t),
      (this.totalDelta_ = 0),
      (this.lastDelta_ = 0),
      (this.maxDelta_ = t.maxDelta !== void 0 ? t.maxDelta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250),
      (this.timeout_ = t.timeout !== void 0 ? t.timeout : 80),
      (this.useAnchor_ = t.useAnchor !== void 0 ? t.useAnchor : !0),
      (this.constrainResolution_ =
        t.constrainResolution !== void 0 ? t.constrainResolution : !1);
    const i = t.condition ? t.condition : ST;
    (this.condition_ = t.onFocusOnly ? od(n1, i) : i),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      this.timeoutId_,
      (this.mode_ = void 0),
      (this.trackpadEventGap_ = 400),
      this.trackpadTimeoutId_,
      (this.deltaPerZoom_ = 300);
  }
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    const t = this.getMap();
    if (!t) return;
    t.getView().endInteraction(
      void 0,
      this.lastDelta_ ? (this.lastDelta_ > 0 ? 1 : -1) : 0,
      this.lastAnchor_ ? t.getCoordinateFromPixel(this.lastAnchor_) : null,
    );
  }
  handleEvent(t) {
    if (!this.condition_(t) || t.type !== pt.WHEEL) return !0;
    const s = t.map,
      r = t.originalEvent;
    r.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.pixel);
    let o;
    if (
      (t.type == pt.WHEEL &&
        ((o = r.deltaY),
        $S && r.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (o /= Tp),
        r.deltaMode === WheelEvent.DOM_DELTA_LINE && (o *= 40)),
      o === 0)
    )
      return !1;
    this.lastDelta_ = o;
    const c = Date.now();
    this.startTime_ === void 0 && (this.startTime_ = c),
      (!this.mode_ || c - this.startTime_ > this.trackpadEventGap_) &&
        (this.mode_ = Math.abs(o) < 4 ? "trackpad" : "wheel");
    const h = s.getView();
    if (
      this.mode_ === "trackpad" &&
      !(h.getConstrainResolution() || this.constrainResolution_)
    )
      return (
        this.trackpadTimeoutId_
          ? clearTimeout(this.trackpadTimeoutId_)
          : (h.getAnimating() && h.cancelAnimations(), h.beginInteraction()),
        (this.trackpadTimeoutId_ = setTimeout(
          this.endInteraction_.bind(this),
          this.timeout_,
        )),
        h.adjustZoom(
          -o / this.deltaPerZoom_,
          this.lastAnchor_ ? s.getCoordinateFromPixel(this.lastAnchor_) : null,
        ),
        (this.startTime_ = c),
        !1
      );
    this.totalDelta_ += o;
    const d = Math.max(this.timeout_ - (c - this.startTime_), 0);
    return (
      clearTimeout(this.timeoutId_),
      (this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, s), d)),
      !1
    );
  }
  handleWheelZoom_(t) {
    const i = t.getView();
    i.getAnimating() && i.cancelAnimations();
    let s =
      -se(
        this.totalDelta_,
        -this.maxDelta_ * this.deltaPerZoom_,
        this.maxDelta_ * this.deltaPerZoom_,
      ) / this.deltaPerZoom_;
    (i.getConstrainResolution() || this.constrainResolution_) &&
      (s = s ? (s > 0 ? 1 : -1) : 0),
      Vd(
        i,
        s,
        this.lastAnchor_ ? t.getCoordinateFromPixel(this.lastAnchor_) : null,
        this.duration_,
      ),
      (this.mode_ = void 0),
      (this.totalDelta_ = 0),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      (this.timeoutId_ = void 0);
  }
  setMouseAnchor(t) {
    (this.useAnchor_ = t), t || (this.lastAnchor_ = null);
  }
}
class zT extends Qa {
  constructor(t) {
    t = t || {};
    const i = t;
    i.stopDown || (i.stopDown = Hu),
      super(i),
      (this.anchor_ = null),
      (this.lastAngle_ = void 0),
      (this.rotating_ = !1),
      (this.rotationDelta_ = 0),
      (this.threshold_ = t.threshold !== void 0 ? t.threshold : 0.3),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250);
  }
  handleDragEvent(t) {
    let i = 0;
    const s = this.targetPointers[0],
      r = this.targetPointers[1],
      o = Math.atan2(r.clientY - s.clientY, r.clientX - s.clientX);
    if (this.lastAngle_ !== void 0) {
      const d = o - this.lastAngle_;
      (this.rotationDelta_ += d),
        !this.rotating_ &&
          Math.abs(this.rotationDelta_) > this.threshold_ &&
          (this.rotating_ = !0),
        (i = d);
    }
    this.lastAngle_ = o;
    const c = t.map,
      h = c.getView();
    h.getConstraints().rotation !== Pd &&
      ((this.anchor_ = c.getCoordinateFromPixelInternal(
        c.getEventPixel(Wd(this.targetPointers)),
      )),
      this.rotating_ &&
        (c.render(), h.adjustRotationInternal(i, this.anchor_)));
  }
  handleUpEvent(t) {
    return this.targetPointers.length < 2
      ? (t.map.getView().endInteraction(this.duration_), !1)
      : !0;
  }
  handleDownEvent(t) {
    if (this.targetPointers.length >= 2) {
      const i = t.map;
      return (
        (this.anchor_ = null),
        (this.lastAngle_ = void 0),
        (this.rotating_ = !1),
        (this.rotationDelta_ = 0),
        this.handlingDownUpSequence || i.getView().beginInteraction(),
        !0
      );
    }
    return !1;
  }
}
class IT extends Qa {
  constructor(t) {
    t = t || {};
    const i = t;
    i.stopDown || (i.stopDown = Hu),
      super(i),
      (this.anchor_ = null),
      (this.duration_ = t.duration !== void 0 ? t.duration : 400),
      (this.lastDistance_ = void 0),
      (this.lastScaleDelta_ = 1);
  }
  handleDragEvent(t) {
    let i = 1;
    const s = this.targetPointers[0],
      r = this.targetPointers[1],
      o = s.clientX - r.clientX,
      c = s.clientY - r.clientY,
      h = Math.sqrt(o * o + c * c);
    this.lastDistance_ !== void 0 && (i = this.lastDistance_ / h),
      (this.lastDistance_ = h);
    const d = t.map,
      _ = d.getView();
    i != 1 && (this.lastScaleDelta_ = i),
      (this.anchor_ = d.getCoordinateFromPixelInternal(
        d.getEventPixel(Wd(this.targetPointers)),
      )),
      d.render(),
      _.adjustResolutionInternal(i, this.anchor_);
  }
  handleUpEvent(t) {
    if (this.targetPointers.length < 2) {
      const s = t.map.getView(),
        r = this.lastScaleDelta_ > 1 ? 1 : -1;
      return s.endInteraction(this.duration_, r), !1;
    }
    return !0;
  }
  handleDownEvent(t) {
    if (this.targetPointers.length >= 2) {
      const i = t.map;
      return (
        (this.anchor_ = null),
        (this.lastDistance_ = void 0),
        (this.lastScaleDelta_ = 1),
        this.handlingDownUpSequence || i.getView().beginInteraction(),
        !0
      );
    }
    return !1;
  }
}
function NT(l) {
  l = l || {};
  const t = new Wi(),
    i = new oT(-0.005, 0.05, 100);
  return (
    (l.altShiftDragRotate !== void 0 ? l.altShiftDragRotate : !0) &&
      t.push(new bT()),
    (l.doubleClickZoom !== void 0 ? l.doubleClickZoom : !0) &&
      t.push(new pT({ delta: l.zoomDelta, duration: l.zoomDuration })),
    (l.dragPan !== void 0 ? l.dragPan : !0) &&
      t.push(new RT({ onFocusOnly: l.onFocusOnly, kinetic: i })),
    (l.pinchRotate !== void 0 ? l.pinchRotate : !0) && t.push(new zT()),
    (l.pinchZoom !== void 0 ? l.pinchZoom : !0) &&
      t.push(new IT({ duration: l.zoomDuration })),
    (l.keyboard !== void 0 ? l.keyboard : !0) &&
      (t.push(new OT()),
      t.push(new DT({ delta: l.zoomDelta, duration: l.zoomDuration }))),
    (l.mouseWheelZoom !== void 0 ? l.mouseWheelZoom : !0) &&
      t.push(new LT({ onFocusOnly: l.onFocusOnly, duration: l.zoomDuration })),
    (l.shiftDragZoom !== void 0 ? l.shiftDragZoom : !0) &&
      t.push(new MT({ duration: l.zoomDuration })),
    t
  );
}
class os extends Dn {
  constructor(t, i) {
    super(t), (this.layer = i);
  }
}
const Yf = { LAYERS: "layers" };
class pr extends t1 {
  constructor(t) {
    t = t || {};
    const i = Object.assign({}, t);
    delete i.layers;
    let s = t.layers;
    super(i),
      this.on,
      this.once,
      this.un,
      (this.layersListenerKeys_ = []),
      (this.listenerKeys_ = {}),
      this.addChangeListener(Yf.LAYERS, this.handleLayersChanged_),
      s
        ? Array.isArray(s)
          ? (s = new Wi(s.slice(), { unique: !0 }))
          : Lt(
              typeof s.getArray == "function",
              "Expected `layers` to be an array or a `Collection`",
            )
        : (s = new Wi(void 0, { unique: !0 })),
      this.setLayers(s);
  }
  handleLayerChange_() {
    this.changed();
  }
  handleLayersChanged_() {
    this.layersListenerKeys_.forEach(Zt), (this.layersListenerKeys_.length = 0);
    const t = this.getLayers();
    this.layersListenerKeys_.push(
      Mt(t, Be.ADD, this.handleLayersAdd_, this),
      Mt(t, Be.REMOVE, this.handleLayersRemove_, this),
    );
    for (const s in this.listenerKeys_) this.listenerKeys_[s].forEach(Zt);
    ka(this.listenerKeys_);
    const i = t.getArray();
    for (let s = 0, r = i.length; s < r; s++) {
      const o = i[s];
      this.registerLayerListeners_(o),
        this.dispatchEvent(new os("addlayer", o));
    }
    this.changed();
  }
  registerLayerListeners_(t) {
    const i = [
      Mt(t, ar.PROPERTYCHANGE, this.handleLayerChange_, this),
      Mt(t, pt.CHANGE, this.handleLayerChange_, this),
    ];
    t instanceof pr &&
      i.push(
        Mt(t, "addlayer", this.handleLayerGroupAdd_, this),
        Mt(t, "removelayer", this.handleLayerGroupRemove_, this),
      ),
      (this.listenerKeys_[It(t)] = i);
  }
  handleLayerGroupAdd_(t) {
    this.dispatchEvent(new os("addlayer", t.layer));
  }
  handleLayerGroupRemove_(t) {
    this.dispatchEvent(new os("removelayer", t.layer));
  }
  handleLayersAdd_(t) {
    const i = t.element;
    this.registerLayerListeners_(i),
      this.dispatchEvent(new os("addlayer", i)),
      this.changed();
  }
  handleLayersRemove_(t) {
    const i = t.element,
      s = It(i);
    this.listenerKeys_[s].forEach(Zt),
      delete this.listenerKeys_[s],
      this.dispatchEvent(new os("removelayer", i)),
      this.changed();
  }
  getLayers() {
    return this.get(Yf.LAYERS);
  }
  setLayers(t) {
    const i = this.getLayers();
    if (i) {
      const s = i.getArray();
      for (let r = 0, o = s.length; r < o; ++r)
        this.dispatchEvent(new os("removelayer", s[r]));
    }
    this.set(Yf.LAYERS, t);
  }
  getLayersArray(t) {
    return (
      (t = t !== void 0 ? t : []),
      this.getLayers().forEach(function (i) {
        i.getLayersArray(t);
      }),
      t
    );
  }
  getLayerStatesArray(t) {
    const i = t !== void 0 ? t : [],
      s = i.length;
    this.getLayers().forEach(function (c) {
      c.getLayerStatesArray(i);
    });
    const r = this.getLayerState();
    let o = r.zIndex;
    !t && r.zIndex === void 0 && (o = 0);
    for (let c = s, h = i.length; c < h; c++) {
      const d = i[c];
      (d.opacity *= r.opacity),
        (d.visible = d.visible && r.visible),
        (d.maxResolution = Math.min(d.maxResolution, r.maxResolution)),
        (d.minResolution = Math.max(d.minResolution, r.minResolution)),
        (d.minZoom = Math.max(d.minZoom, r.minZoom)),
        (d.maxZoom = Math.min(d.maxZoom, r.maxZoom)),
        r.extent !== void 0 &&
          (d.extent !== void 0
            ? (d.extent = Qs(d.extent, r.extent))
            : (d.extent = r.extent)),
        d.zIndex === void 0 && (d.zIndex = o);
    }
    return i;
  }
  getSourceState() {
    return "ready";
  }
}
class GT extends Bu {
  constructor(t) {
    super(), (this.map_ = t);
  }
  dispatchRenderEvent(t, i) {
    _t();
  }
  calculateMatrices2D(t) {
    const i = t.viewState,
      s = t.coordinateToPixelTransform,
      r = t.pixelToCoordinateTransform;
    On(
      s,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / i.resolution,
      -1 / i.resolution,
      -i.rotation,
      -i.center[0],
      -i.center[1],
    ),
      up(r, s);
  }
  forEachFeatureAtCoordinate(t, i, s, r, o, c, h, d) {
    let _;
    const m = i.viewState;
    function y(z, D, j, Q) {
      return o.call(c, D, z ? j : null, Q);
    }
    const v = m.projection,
      S = ip(t.slice(), v),
      x = [[0, 0]];
    if (v.canWrapX() && r) {
      const z = v.getExtent(),
        D = Ft(z);
      x.push([-D, 0], [D, 0]);
    }
    const b = i.layerStatesArray,
      R = b.length,
      A = [],
      O = [];
    for (let z = 0; z < x.length; z++)
      for (let D = R - 1; D >= 0; --D) {
        const j = b[D],
          Q = j.layer;
        if (Q.hasRenderer() && Zd(j, m) && h.call(d, Q)) {
          const Z = Q.getRenderer(),
            F = Q.getSource();
          if (Z && F) {
            const V = F.getWrapX() ? S : t,
              lt = y.bind(null, j.managed);
            (O[0] = V[0] + x[z][0]),
              (O[1] = V[1] + x[z][1]),
              (_ = Z.forEachFeatureAtCoordinate(O, i, s, lt, A));
          }
          if (_) return _;
        }
      }
    if (A.length === 0) return;
    const G = 1 / A.length;
    return (
      A.forEach((z, D) => (z.distanceSq += D * G)),
      A.sort((z, D) => z.distanceSq - D.distanceSq),
      A.some((z) => (_ = z.callback(z.feature, z.layer, z.geometry))),
      _
    );
  }
  hasFeatureAtCoordinate(t, i, s, r, o, c) {
    return (
      this.forEachFeatureAtCoordinate(t, i, s, r, Ma, this, o, c) !== void 0
    );
  }
  getMap() {
    return this.map_;
  }
  renderFrame(t) {
    _t();
  }
  scheduleExpireIconCache(t) {
    Si.canExpireCache() && t.postRenderFunctions.push(FT);
  }
}
function FT(l, t) {
  Si.expire();
}
class UT extends GT {
  constructor(t) {
    super(t),
      (this.fontChangeListenerKey_ = Mt(
        Cn,
        ar.PROPERTYCHANGE,
        t.redrawText,
        t,
      )),
      (this.element_ = document.createElement("div"));
    const i = this.element_.style;
    (i.position = "absolute"),
      (i.width = "100%"),
      (i.height = "100%"),
      (i.zIndex = "0"),
      (this.element_.className = ic + " ol-layers");
    const s = t.getViewport();
    s.insertBefore(this.element_, s.firstChild || null),
      (this.children_ = []),
      (this.renderedVisible_ = !0);
  }
  dispatchRenderEvent(t, i) {
    const s = this.getMap();
    if (s.hasListener(t)) {
      const r = new Pp(t, void 0, i);
      s.dispatchEvent(r);
    }
  }
  disposeInternal() {
    Zt(this.fontChangeListenerKey_),
      this.element_.remove(),
      super.disposeInternal();
  }
  renderFrame(t) {
    if (!t) {
      this.renderedVisible_ &&
        ((this.element_.style.display = "none"), (this.renderedVisible_ = !1));
      return;
    }
    this.calculateMatrices2D(t), this.dispatchRenderEvent(Ei.PRECOMPOSE, t);
    const i = t.layerStatesArray.sort((h, d) => h.zIndex - d.zIndex);
    i.some((h) => h.layer instanceof e1 && h.layer.getDeclutter()) &&
      (t.declutter = {});
    const r = t.viewState;
    this.children_.length = 0;
    const o = [];
    let c = null;
    for (let h = 0, d = i.length; h < d; ++h) {
      const _ = i[h];
      t.layerIndex = h;
      const m = _.layer,
        y = m.getSourceState();
      if (!Zd(_, r) || (y != "ready" && y != "undefined")) {
        m.unrender();
        continue;
      }
      const v = m.render(t, c);
      v && (v !== c && (this.children_.push(v), (c = v)), o.push(_));
    }
    this.declutter(t, o),
      ux(this.element_, this.children_),
      this.dispatchRenderEvent(Ei.POSTCOMPOSE, t),
      this.renderedVisible_ ||
        ((this.element_.style.display = ""), (this.renderedVisible_ = !0)),
      this.scheduleExpireIconCache(t);
  }
  declutter(t, i) {
    if (t.declutter) {
      for (let s = i.length - 1; s >= 0; --s) {
        const r = i[s],
          o = r.layer;
        o.getDeclutter() && o.renderDeclutter(t, r);
      }
      i.forEach((s) => s.layer.renderDeferred(t));
    }
  }
}
function a1(l) {
  if (l instanceof hc) {
    l.setMapInternal(null);
    return;
  }
  l instanceof pr && l.getLayers().forEach(a1);
}
function o1(l, t) {
  if (l instanceof hc) {
    l.setMapInternal(t);
    return;
  }
  if (l instanceof pr) {
    const i = l.getLayers().getArray();
    for (let s = 0, r = i.length; s < r; ++s) o1(i[s], t);
  }
}
let XT = class extends $i {
  constructor(t) {
    super(), (t = t || {}), this.on, this.once, this.un;
    const i = YT(t);
    (this.renderComplete_ = !1),
      (this.loaded_ = !0),
      (this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this)),
      (this.maxTilesLoading_ =
        t.maxTilesLoading !== void 0 ? t.maxTilesLoading : 16),
      (this.pixelRatio_ = t.pixelRatio !== void 0 ? t.pixelRatio : Tp),
      this.postRenderTimeoutHandle_,
      this.animationDelayKey_,
      (this.animationDelay_ = this.animationDelay_.bind(this)),
      (this.coordinateToPixelTransform_ = Ni()),
      (this.pixelToCoordinateTransform_ = Ni()),
      (this.frameIndex_ = 0),
      (this.frameState_ = null),
      (this.previousExtent_ = null),
      (this.viewPropertyListenerKey_ = null),
      (this.viewChangeListenerKey_ = null),
      (this.layerGroupPropertyListenerKeys_ = null),
      (this.viewport_ = document.createElement("div")),
      (this.viewport_.className =
        "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : "")),
      (this.viewport_.style.position = "relative"),
      (this.viewport_.style.overflow = "hidden"),
      (this.viewport_.style.width = "100%"),
      (this.viewport_.style.height = "100%"),
      (this.overlayContainer_ = document.createElement("div")),
      (this.overlayContainer_.style.position = "absolute"),
      (this.overlayContainer_.style.zIndex = "0"),
      (this.overlayContainer_.style.width = "100%"),
      (this.overlayContainer_.style.height = "100%"),
      (this.overlayContainer_.style.pointerEvents = "none"),
      (this.overlayContainer_.className = "ol-overlaycontainer"),
      this.viewport_.appendChild(this.overlayContainer_),
      (this.overlayContainerStopEvent_ = document.createElement("div")),
      (this.overlayContainerStopEvent_.style.position = "absolute"),
      (this.overlayContainerStopEvent_.style.zIndex = "0"),
      (this.overlayContainerStopEvent_.style.width = "100%"),
      (this.overlayContainerStopEvent_.style.height = "100%"),
      (this.overlayContainerStopEvent_.style.pointerEvents = "none"),
      (this.overlayContainerStopEvent_.className =
        "ol-overlaycontainer-stopevent"),
      this.viewport_.appendChild(this.overlayContainerStopEvent_),
      (this.mapBrowserEventHandler_ = null),
      (this.moveTolerance_ = t.moveTolerance),
      (this.keyboardEventTarget_ = i.keyboardEventTarget),
      (this.targetChangeHandlerKeys_ = null),
      (this.targetElement_ = null),
      (this.resizeObserver_ = new ResizeObserver(() => this.updateSize())),
      (this.controls = i.controls || mT()),
      (this.interactions = i.interactions || NT({ onFocusOnly: !0 })),
      (this.overlays_ = i.overlays),
      (this.overlayIdIndex_ = {}),
      (this.renderer_ = null),
      (this.postRenderFunctions_ = []),
      (this.tileQueue_ = new hT(
        this.getTilePriority.bind(this),
        this.handleTileChange_.bind(this),
      )),
      this.addChangeListener(we.LAYERGROUP, this.handleLayerGroupChanged_),
      this.addChangeListener(we.VIEW, this.handleViewChanged_),
      this.addChangeListener(we.SIZE, this.handleSizeChanged_),
      this.addChangeListener(we.TARGET, this.handleTargetChanged_),
      this.setProperties(i.values);
    const s = this;
    t.view &&
      !(t.view instanceof Vi) &&
      t.view.then(function (r) {
        s.setView(new Vi(r));
      }),
      this.controls.addEventListener(Be.ADD, (r) => {
        r.element.setMap(this);
      }),
      this.controls.addEventListener(Be.REMOVE, (r) => {
        r.element.setMap(null);
      }),
      this.interactions.addEventListener(Be.ADD, (r) => {
        r.element.setMap(this);
      }),
      this.interactions.addEventListener(Be.REMOVE, (r) => {
        r.element.setMap(null);
      }),
      this.overlays_.addEventListener(Be.ADD, (r) => {
        this.addOverlayInternal_(r.element);
      }),
      this.overlays_.addEventListener(Be.REMOVE, (r) => {
        const o = r.element.getId();
        o !== void 0 && delete this.overlayIdIndex_[o.toString()],
          r.element.setMap(null);
      }),
      this.controls.forEach((r) => {
        r.setMap(this);
      }),
      this.interactions.forEach((r) => {
        r.setMap(this);
      }),
      this.overlays_.forEach(this.addOverlayInternal_.bind(this));
  }
  addControl(t) {
    this.getControls().push(t);
  }
  addInteraction(t) {
    this.getInteractions().push(t);
  }
  addLayer(t) {
    this.getLayerGroup().getLayers().push(t);
  }
  handleLayerAdd_(t) {
    o1(t.layer, this);
  }
  addOverlay(t) {
    this.getOverlays().push(t);
  }
  addOverlayInternal_(t) {
    const i = t.getId();
    i !== void 0 && (this.overlayIdIndex_[i.toString()] = t), t.setMap(this);
  }
  disposeInternal() {
    this.controls.clear(),
      this.interactions.clear(),
      this.overlays_.clear(),
      this.resizeObserver_.disconnect(),
      this.setTarget(null),
      super.disposeInternal();
  }
  forEachFeatureAtPixel(t, i, s) {
    if (!this.frameState_ || !this.renderer_) return;
    const r = this.getCoordinateFromPixelInternal(t);
    s = s !== void 0 ? s : {};
    const o = s.hitTolerance !== void 0 ? s.hitTolerance : 0,
      c = s.layerFilter !== void 0 ? s.layerFilter : Ma,
      h = s.checkWrapped !== !1;
    return this.renderer_.forEachFeatureAtCoordinate(
      r,
      this.frameState_,
      o,
      h,
      i,
      null,
      c,
      null,
    );
  }
  getFeaturesAtPixel(t, i) {
    const s = [];
    return (
      this.forEachFeatureAtPixel(
        t,
        function (r) {
          s.push(r);
        },
        i,
      ),
      s
    );
  }
  getAllLayers() {
    const t = [];
    function i(s) {
      s.forEach(function (r) {
        r instanceof pr ? i(r.getLayers()) : t.push(r);
      });
    }
    return i(this.getLayers()), t;
  }
  hasFeatureAtPixel(t, i) {
    if (!this.frameState_ || !this.renderer_) return !1;
    const s = this.getCoordinateFromPixelInternal(t);
    i = i !== void 0 ? i : {};
    const r = i.layerFilter !== void 0 ? i.layerFilter : Ma,
      o = i.hitTolerance !== void 0 ? i.hitTolerance : 0,
      c = i.checkWrapped !== !1;
    return this.renderer_.hasFeatureAtCoordinate(
      s,
      this.frameState_,
      o,
      c,
      r,
      null,
    );
  }
  getEventCoordinate(t) {
    return this.getCoordinateFromPixel(this.getEventPixel(t));
  }
  getEventCoordinateInternal(t) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(t));
  }
  getEventPixel(t) {
    const s = this.viewport_.getBoundingClientRect(),
      r = this.getSize(),
      o = s.width / r[0],
      c = s.height / r[1],
      h = "changedTouches" in t ? t.changedTouches[0] : t;
    return [(h.clientX - s.left) / o, (h.clientY - s.top) / c];
  }
  getTarget() {
    return this.get(we.TARGET);
  }
  getTargetElement() {
    return this.targetElement_;
  }
  getCoordinateFromPixel(t) {
    return $f(
      this.getCoordinateFromPixelInternal(t),
      this.getView().getProjection(),
    );
  }
  getCoordinateFromPixelInternal(t) {
    const i = this.frameState_;
    return i ? _e(i.pixelToCoordinateTransform, t.slice()) : null;
  }
  getControls() {
    return this.controls;
  }
  getOverlays() {
    return this.overlays_;
  }
  getOverlayById(t) {
    const i = this.overlayIdIndex_[t.toString()];
    return i !== void 0 ? i : null;
  }
  getInteractions() {
    return this.interactions;
  }
  getLayerGroup() {
    return this.get(we.LAYERGROUP);
  }
  setLayers(t) {
    const i = this.getLayerGroup();
    if (t instanceof Wi) {
      i.setLayers(t);
      return;
    }
    const s = i.getLayers();
    s.clear(), s.extend(t);
  }
  getLayers() {
    return this.getLayerGroup().getLayers();
  }
  getLoadingOrNotReady() {
    const t = this.getLayerGroup().getLayerStatesArray();
    for (let i = 0, s = t.length; i < s; ++i) {
      const r = t[i];
      if (!r.visible) continue;
      const o = r.layer.getRenderer();
      if (o && !o.ready) return !0;
      const c = r.layer.getSource();
      if (c && c.loading) return !0;
    }
    return !1;
  }
  getPixelFromCoordinate(t) {
    const i = Tn(t, this.getView().getProjection());
    return this.getPixelFromCoordinateInternal(i);
  }
  getPixelFromCoordinateInternal(t) {
    const i = this.frameState_;
    return i ? _e(i.coordinateToPixelTransform, t.slice(0, 2)) : null;
  }
  getRenderer() {
    return this.renderer_;
  }
  getSize() {
    return this.get(we.SIZE);
  }
  getView() {
    return this.get(we.VIEW);
  }
  getViewport() {
    return this.viewport_;
  }
  getOverlayContainer() {
    return this.overlayContainer_;
  }
  getOverlayContainerStopEvent() {
    return this.overlayContainerStopEvent_;
  }
  getOwnerDocument() {
    const t = this.getTargetElement();
    return t ? t.ownerDocument : document;
  }
  getTilePriority(t, i, s, r) {
    return fT(this.frameState_, t, i, s, r);
  }
  handleBrowserEvent(t, i) {
    i = i || t.type;
    const s = new rs(i, this, t);
    this.handleMapBrowserEvent(s);
  }
  handleMapBrowserEvent(t) {
    if (!this.frameState_) return;
    const i = t.originalEvent,
      s = i.type;
    if (s === ad.POINTERDOWN || s === pt.WHEEL || s === pt.KEYDOWN) {
      const r = this.getOwnerDocument(),
        o = this.viewport_.getRootNode ? this.viewport_.getRootNode() : r,
        c = i.target,
        h =
          o instanceof ShadowRoot
            ? o.host === c
              ? o.host.ownerDocument
              : o
            : o === r
              ? r.documentElement
              : o;
      if (this.overlayContainerStopEvent_.contains(c) || !h.contains(c)) return;
    }
    if (((t.frameState = this.frameState_), this.dispatchEvent(t) !== !1)) {
      const r = this.getInteractions().getArray().slice();
      for (let o = r.length - 1; o >= 0; o--) {
        const c = r[o];
        if (c.getMap() !== this || !c.getActive() || !this.getTargetElement())
          continue;
        if (!c.handleEvent(t) || t.propagationStopped) break;
      }
    }
  }
  handlePostRender() {
    const t = this.frameState_,
      i = this.tileQueue_;
    if (!i.isEmpty()) {
      let r = this.maxTilesLoading_,
        o = r;
      if (t) {
        const c = t.viewHints;
        if (c[Me.ANIMATING] || c[Me.INTERACTING]) {
          const h = Date.now() - t.time > 8;
          (r = h ? 0 : 8), (o = h ? 0 : 2);
        }
      }
      i.getTilesLoading() < r && (i.reprioritize(), i.loadMoreTiles(r, o));
    }
    t &&
      this.renderer_ &&
      !t.animate &&
      (this.renderComplete_
        ? (this.hasListener(Ei.RENDERCOMPLETE) &&
            this.renderer_.dispatchRenderEvent(Ei.RENDERCOMPLETE, t),
          this.loaded_ === !1 &&
            ((this.loaded_ = !0),
            this.dispatchEvent(new tr(as.LOADEND, this, t))))
        : this.loaded_ === !0 &&
          ((this.loaded_ = !1),
          this.dispatchEvent(new tr(as.LOADSTART, this, t))));
    const s = this.postRenderFunctions_;
    if (t) for (let r = 0, o = s.length; r < o; ++r) s[r](this, t);
    s.length = 0;
  }
  handleSizeChanged_() {
    this.getView() &&
      !this.getView().getAnimating() &&
      this.getView().resolveConstraints(0),
      this.render();
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let s = 0, r = this.targetChangeHandlerKeys_.length; s < r; ++s)
        Zt(this.targetChangeHandlerKeys_[s]);
      (this.targetChangeHandlerKeys_ = null),
        this.viewport_.removeEventListener(
          pt.CONTEXTMENU,
          this.boundHandleBrowserEvent_,
        ),
        this.viewport_.removeEventListener(
          pt.WHEEL,
          this.boundHandleBrowserEvent_,
        ),
        this.mapBrowserEventHandler_.dispose(),
        (this.mapBrowserEventHandler_ = null),
        this.viewport_.remove();
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_);
      const s = this.targetElement_.getRootNode();
      s instanceof ShadowRoot && this.resizeObserver_.unobserve(s.host),
        this.setSize(void 0);
    }
    const t = this.getTarget(),
      i = typeof t == "string" ? document.getElementById(t) : t;
    if (((this.targetElement_ = i), !i))
      this.renderer_ &&
        (clearTimeout(this.postRenderTimeoutHandle_),
        (this.postRenderTimeoutHandle_ = void 0),
        (this.postRenderFunctions_.length = 0),
        this.renderer_.dispose(),
        (this.renderer_ = null)),
        this.animationDelayKey_ &&
          (cancelAnimationFrame(this.animationDelayKey_),
          (this.animationDelayKey_ = void 0));
    else {
      i.appendChild(this.viewport_),
        this.renderer_ || (this.renderer_ = new UT(this)),
        (this.mapBrowserEventHandler_ = new uT(this, this.moveTolerance_));
      for (const o in $t)
        this.mapBrowserEventHandler_.addEventListener(
          $t[o],
          this.handleMapBrowserEvent.bind(this),
        );
      this.viewport_.addEventListener(
        pt.CONTEXTMENU,
        this.boundHandleBrowserEvent_,
        !1,
      ),
        this.viewport_.addEventListener(
          pt.WHEEL,
          this.boundHandleBrowserEvent_,
          bp ? { passive: !1 } : !1,
        );
      let s;
      if (this.keyboardEventTarget_) s = this.keyboardEventTarget_;
      else {
        const o = i.getRootNode();
        s = o instanceof ShadowRoot ? o.host : i;
      }
      this.targetChangeHandlerKeys_ = [
        Mt(s, pt.KEYDOWN, this.handleBrowserEvent, this),
        Mt(s, pt.KEYPRESS, this.handleBrowserEvent, this),
      ];
      const r = i.getRootNode();
      r instanceof ShadowRoot && this.resizeObserver_.observe(r.host),
        this.resizeObserver_.observe(i);
    }
    this.updateSize();
  }
  handleTileChange_() {
    this.render();
  }
  handleViewPropertyChanged_() {
    this.render();
  }
  handleViewChanged_() {
    this.viewPropertyListenerKey_ &&
      (Zt(this.viewPropertyListenerKey_),
      (this.viewPropertyListenerKey_ = null)),
      this.viewChangeListenerKey_ &&
        (Zt(this.viewChangeListenerKey_), (this.viewChangeListenerKey_ = null));
    const t = this.getView();
    t &&
      (this.updateViewportSize_(this.getSize()),
      (this.viewPropertyListenerKey_ = Mt(
        t,
        ar.PROPERTYCHANGE,
        this.handleViewPropertyChanged_,
        this,
      )),
      (this.viewChangeListenerKey_ = Mt(
        t,
        pt.CHANGE,
        this.handleViewPropertyChanged_,
        this,
      )),
      t.resolveConstraints(0)),
      this.render();
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ &&
      (this.layerGroupPropertyListenerKeys_.forEach(Zt),
      (this.layerGroupPropertyListenerKeys_ = null));
    const t = this.getLayerGroup();
    t &&
      (this.handleLayerAdd_(new os("addlayer", t)),
      (this.layerGroupPropertyListenerKeys_ = [
        Mt(t, ar.PROPERTYCHANGE, this.render, this),
        Mt(t, pt.CHANGE, this.render, this),
        Mt(t, "addlayer", this.handleLayerAdd_, this),
        Mt(t, "removelayer", this.handleLayerRemove_, this),
      ])),
      this.render();
  }
  isRendered() {
    return !!this.frameState_;
  }
  animationDelay_() {
    (this.animationDelayKey_ = void 0), this.renderFrame_(Date.now());
  }
  renderSync() {
    this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_),
      this.animationDelay_();
  }
  redrawText() {
    const t = this.getLayerGroup().getLayerStatesArray();
    for (let i = 0, s = t.length; i < s; ++i) {
      const r = t[i].layer;
      r.hasRenderer() && r.getRenderer().handleFontsChanged();
    }
  }
  render() {
    this.renderer_ &&
      this.animationDelayKey_ === void 0 &&
      (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
  }
  removeControl(t) {
    return this.getControls().remove(t);
  }
  removeInteraction(t) {
    return this.getInteractions().remove(t);
  }
  removeLayer(t) {
    return this.getLayerGroup().getLayers().remove(t);
  }
  handleLayerRemove_(t) {
    a1(t.layer);
  }
  removeOverlay(t) {
    return this.getOverlays().remove(t);
  }
  renderFrame_(t) {
    const i = this.getSize(),
      s = this.getView(),
      r = this.frameState_;
    let o = null;
    if (i !== void 0 && vy(i) && s && s.isDef()) {
      const c = s.getHints(
          this.frameState_ ? this.frameState_.viewHints : void 0,
        ),
        h = s.getState();
      if (
        ((o = {
          animate: !1,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutter: null,
          extent: qf(h.center, h.resolution, h.rotation, i),
          index: this.frameIndex_++,
          layerIndex: 0,
          layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
          pixelRatio: this.pixelRatio_,
          pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
          postRenderFunctions: [],
          size: i,
          tileQueue: this.tileQueue_,
          time: t,
          usedTiles: {},
          viewState: h,
          viewHints: c,
          wantedTiles: {},
          mapId: It(this),
          renderTargets: {},
        }),
        h.nextCenter && h.nextResolution)
      ) {
        const d = isNaN(h.nextRotation) ? h.rotation : h.nextRotation;
        o.nextExtent = qf(h.nextCenter, h.nextResolution, d, i);
      }
    }
    (this.frameState_ = o),
      this.renderer_.renderFrame(o),
      o &&
        (o.animate && this.render(),
        Array.prototype.push.apply(
          this.postRenderFunctions_,
          o.postRenderFunctions,
        ),
        r &&
          (!this.previousExtent_ ||
            (!Ha(this.previousExtent_) &&
              !Oa(o.extent, this.previousExtent_))) &&
          (this.dispatchEvent(new tr(as.MOVESTART, this, r)),
          (this.previousExtent_ = mr(this.previousExtent_))),
        this.previousExtent_ &&
          !o.viewHints[Me.ANIMATING] &&
          !o.viewHints[Me.INTERACTING] &&
          !Oa(o.extent, this.previousExtent_) &&
          (this.dispatchEvent(new tr(as.MOVEEND, this, o)),
          Ky(o.extent, this.previousExtent_))),
      this.dispatchEvent(new tr(as.POSTRENDER, this, o)),
      (this.renderComplete_ =
        (this.hasListener(as.LOADSTART) ||
          this.hasListener(as.LOADEND) ||
          this.hasListener(Ei.RENDERCOMPLETE)) &&
        !this.tileQueue_.getTilesLoading() &&
        !this.tileQueue_.getCount() &&
        !this.getLoadingOrNotReady()),
      this.postRenderTimeoutHandle_ ||
        (this.postRenderTimeoutHandle_ = setTimeout(() => {
          (this.postRenderTimeoutHandle_ = void 0), this.handlePostRender();
        }, 0));
  }
  setLayerGroup(t) {
    const i = this.getLayerGroup();
    i && this.handleLayerRemove_(new os("removelayer", i)),
      this.set(we.LAYERGROUP, t);
  }
  setSize(t) {
    this.set(we.SIZE, t);
  }
  setTarget(t) {
    this.set(we.TARGET, t);
  }
  setView(t) {
    if (!t || t instanceof Vi) {
      this.set(we.VIEW, t);
      return;
    }
    this.set(we.VIEW, new Vi());
    const i = this;
    t.then(function (s) {
      i.setView(new Vi(s));
    });
  }
  updateSize() {
    const t = this.getTargetElement();
    let i;
    if (t) {
      const r = getComputedStyle(t),
        o =
          t.offsetWidth -
          parseFloat(r.borderLeftWidth) -
          parseFloat(r.paddingLeft) -
          parseFloat(r.paddingRight) -
          parseFloat(r.borderRightWidth),
        c =
          t.offsetHeight -
          parseFloat(r.borderTopWidth) -
          parseFloat(r.paddingTop) -
          parseFloat(r.paddingBottom) -
          parseFloat(r.borderBottomWidth);
      !isNaN(o) &&
        !isNaN(c) &&
        ((i = [Math.max(0, o), Math.max(0, c)]),
        !vy(i) &&
          (t.offsetWidth || t.offsetHeight || t.getClientRects().length) &&
          ep(
            "No map visible because the map container's width or height are 0.",
          ));
    }
    const s = this.getSize();
    i && (!s || !ys(i, s)) && (this.setSize(i), this.updateViewportSize_(i));
  }
  updateViewportSize_(t) {
    const i = this.getView();
    i && i.setViewportSize(t);
  }
};
function YT(l) {
  let t = null;
  l.keyboardEventTarget !== void 0 &&
    (t =
      typeof l.keyboardEventTarget == "string"
        ? document.getElementById(l.keyboardEventTarget)
        : l.keyboardEventTarget);
  const i = {},
    s =
      l.layers && typeof l.layers.getLayers == "function"
        ? l.layers
        : new pr({ layers: l.layers });
  (i[we.LAYERGROUP] = s),
    (i[we.TARGET] = l.target),
    (i[we.VIEW] = l.view instanceof Vi ? l.view : new Vi());
  let r;
  l.controls !== void 0 &&
    (Array.isArray(l.controls)
      ? (r = new Wi(l.controls.slice()))
      : (Lt(
          typeof l.controls.getArray == "function",
          "Expected `controls` to be an array or an `ol/Collection.js`",
        ),
        (r = l.controls)));
  let o;
  l.interactions !== void 0 &&
    (Array.isArray(l.interactions)
      ? (o = new Wi(l.interactions.slice()))
      : (Lt(
          typeof l.interactions.getArray == "function",
          "Expected `interactions` to be an array or an `ol/Collection.js`",
        ),
        (o = l.interactions)));
  let c;
  return (
    l.overlays !== void 0
      ? Array.isArray(l.overlays)
        ? (c = new Wi(l.overlays.slice()))
        : (Lt(
            typeof l.overlays.getArray == "function",
            "Expected `overlays` to be an array or an `ol/Collection.js`",
          ),
          (c = l.overlays))
      : (c = new Wi()),
    {
      controls: r,
      interactions: o,
      keyboardEventTarget: t,
      overlays: c,
      values: i,
    }
  );
}
class Qd {
  constructor(t, i, s, r) {
    (this.minX = t), (this.maxX = i), (this.minY = s), (this.maxY = r);
  }
  contains(t) {
    return this.containsXY(t[1], t[2]);
  }
  containsTileRange(t) {
    return (
      this.minX <= t.minX &&
      t.maxX <= this.maxX &&
      this.minY <= t.minY &&
      t.maxY <= this.maxY
    );
  }
  containsXY(t, i) {
    return this.minX <= t && t <= this.maxX && this.minY <= i && i <= this.maxY;
  }
  equals(t) {
    return (
      this.minX == t.minX &&
      this.minY == t.minY &&
      this.maxX == t.maxX &&
      this.maxY == t.maxY
    );
  }
  extend(t) {
    t.minX < this.minX && (this.minX = t.minX),
      t.maxX > this.maxX && (this.maxX = t.maxX),
      t.minY < this.minY && (this.minY = t.minY),
      t.maxY > this.maxY && (this.maxY = t.maxY);
  }
  getHeight() {
    return this.maxY - this.minY + 1;
  }
  getSize() {
    return [this.getWidth(), this.getHeight()];
  }
  getWidth() {
    return this.maxX - this.minX + 1;
  }
  intersects(t) {
    return (
      this.minX <= t.maxX &&
      this.maxX >= t.minX &&
      this.minY <= t.maxY &&
      this.maxY >= t.minY
    );
  }
}
function Vl(l, t, i, s, r) {
  return r !== void 0
    ? ((r.minX = l), (r.maxX = t), (r.minY = i), (r.maxY = s), r)
    : new Qd(l, t, i, s);
}
function ud(l) {
  return l instanceof Image ||
    l instanceof HTMLCanvasElement ||
    l instanceof HTMLVideoElement ||
    l instanceof ImageBitmap
    ? l
    : null;
}
const kT = new Error("disposed"),
  BT = [256, 256];
class Yy extends Kd {
  constructor(t) {
    const i = ft.IDLE;
    super(t.tileCoord, i, {
      transition: t.transition,
      interpolate: t.interpolate,
    }),
      (this.loader_ = t.loader),
      (this.data_ = null),
      (this.error_ = null),
      (this.size_ = t.size || null),
      (this.controller_ = t.controller || null);
  }
  getSize() {
    if (this.size_) return this.size_;
    const t = ud(this.data_);
    return t ? [t.width, t.height] : BT;
  }
  getData() {
    return this.data_;
  }
  getError() {
    return this.error_;
  }
  load() {
    if (this.state !== ft.IDLE && this.state !== ft.ERROR) return;
    (this.state = ft.LOADING), this.changed();
    const t = this;
    this.loader_()
      .then(function (i) {
        (t.data_ = i), (t.state = ft.LOADED), t.changed();
      })
      .catch(function (i) {
        (t.error_ = i), (t.state = ft.ERROR), t.changed();
      });
  }
  disposeInternal() {
    this.controller_ && (this.controller_.abort(kT), (this.controller_ = null)),
      super.disposeInternal();
  }
}
let kf;
const rr = [];
function ky(l, t, i, s, r) {
  l.beginPath(),
    l.moveTo(0, 0),
    l.lineTo(t, i),
    l.lineTo(s, r),
    l.closePath(),
    l.save(),
    l.clip(),
    l.fillRect(0, 0, Math.max(t, s) + 1, Math.max(i, r)),
    l.restore();
}
function Bf(l, t) {
  return (
    Math.abs(l[t * 4] - 210) > 2 || Math.abs(l[t * 4 + 3] - 0.75 * 255) > 2
  );
}
function HT() {
  if (kf === void 0) {
    const l = me(6, 6, rr);
    (l.globalCompositeOperation = "lighter"),
      (l.fillStyle = "rgba(210, 0, 0, 0.75)"),
      ky(l, 4, 5, 4, 0),
      ky(l, 4, 5, 0, 5);
    const t = l.getImageData(0, 0, 3, 3).data;
    (kf = Bf(t, 0) || Bf(t, 4) || Bf(t, 8)), ec(l), rr.push(l.canvas);
  }
  return kf;
}
function By(l, t, i, s) {
  const r = Qu(i, t, l);
  let o = Q0(t, s, i);
  const c = t.getMetersPerUnit();
  c !== void 0 && (o *= c);
  const h = l.getMetersPerUnit();
  h !== void 0 && (o /= h);
  const d = l.getExtent();
  if (!d || ur(d, r)) {
    const _ = Q0(l, o, r) / o;
    isFinite(_) && _ > 0 && (o /= _);
  }
  return o;
}
function PT(l, t, i, s) {
  const r = gs(i);
  let o = By(l, t, r, s);
  return (
    (!isFinite(o) || o <= 0) &&
      Qy(i, function (c) {
        return (o = By(l, t, c, s)), isFinite(o) && o > 0;
      }),
    o
  );
}
function jT(l, t, i, s, r, o, c, h, d, _, m, y, v, S) {
  const x = me(Math.round(i * l), Math.round(i * t), rr);
  if ((y || (x.imageSmoothingEnabled = !1), d.length === 0)) return x.canvas;
  x.scale(i, i);
  function b(D) {
    return Math.round(D * i) / i;
  }
  x.globalCompositeOperation = "lighter";
  const R = Ti();
  d.forEach(function (D, j, Q) {
    Vy(R, D.extent);
  });
  let A;
  const O = i / s,
    G = (y ? 1 : 1 + Math.pow(2, -24)) / O;
  (A = me(Math.round(Ft(R) * O), Math.round(Fe(R) * O), rr)),
    y || (A.imageSmoothingEnabled = !1),
    d.forEach(function (D, j, Q) {
      if (D.image.width > 0 && D.image.height > 0) {
        if (D.clipExtent) {
          A.save();
          const it = (D.clipExtent[0] - R[0]) * O,
            ot = -(D.clipExtent[3] - R[3]) * O,
            st = Ft(D.clipExtent) * O,
            nt = Fe(D.clipExtent) * O;
          A.rect(
            y ? it : Math.round(it),
            y ? ot : Math.round(ot),
            y ? st : Math.round(it + st) - Math.round(it),
            y ? nt : Math.round(ot + nt) - Math.round(ot),
          ),
            A.clip();
        }
        const Z = (D.extent[0] - R[0]) * O,
          F = -(D.extent[3] - R[3]) * O,
          V = Ft(D.extent) * O,
          lt = Fe(D.extent) * O;
        A.drawImage(
          D.image,
          _,
          _,
          D.image.width - 2 * _,
          D.image.height - 2 * _,
          y ? Z : Math.round(Z),
          y ? F : Math.round(F),
          y ? V : Math.round(Z + V) - Math.round(Z),
          y ? lt : Math.round(F + lt) - Math.round(F),
        ),
          D.clipExtent && A.restore();
      }
    });
  const z = sl(c);
  return (
    h.getTriangles().forEach(function (D, j, Q) {
      const Z = D.source,
        F = D.target;
      let V = Z[0][0],
        lt = Z[0][1],
        it = Z[1][0],
        ot = Z[1][1],
        st = Z[2][0],
        nt = Z[2][1];
      const Y = b((F[0][0] - z[0]) / o),
        q = b(-(F[0][1] - z[1]) / o),
        W = b((F[1][0] - z[0]) / o),
        $ = b(-(F[1][1] - z[1]) / o),
        C = b((F[2][0] - z[0]) / o),
        X = b(-(F[2][1] - z[1]) / o),
        U = V,
        tt = lt;
      (V = 0), (lt = 0), (it -= U), (ot -= tt), (st -= U), (nt -= tt);
      const J = [
          [it, ot, 0, 0, W - Y],
          [st, nt, 0, 0, C - Y],
          [0, 0, it, ot, $ - q],
          [0, 0, st, nt, X - q],
        ],
        rt = WE(J);
      if (!rt) return;
      if ((x.save(), x.beginPath(), HT() || !y)) {
        x.moveTo(W, $);
        const Nt = 4,
          mt = Y - W,
          Ut = q - $;
        for (let vt = 0; vt < Nt; vt++)
          x.lineTo(W + b(((vt + 1) * mt) / Nt), $ + b((vt * Ut) / (Nt - 1))),
            vt != Nt - 1 &&
              x.lineTo(
                W + b(((vt + 1) * mt) / Nt),
                $ + b(((vt + 1) * Ut) / (Nt - 1)),
              );
        x.lineTo(C, X);
      } else x.moveTo(W, $), x.lineTo(Y, q), x.lineTo(C, X);
      x.clip(),
        x.transform(rt[0], rt[2], rt[1], rt[3], Y, q),
        x.translate(R[0] - U, R[3] - tt);
      let ct;
      if (A) (ct = A.canvas), x.scale(G, -G);
      else {
        const Nt = d[0],
          mt = Nt.extent;
        (ct = Nt.image), x.scale(Ft(mt) / ct.width, -Fe(mt) / ct.height);
      }
      x.drawImage(ct, 0, 0), x.restore();
    }),
    A && (ec(A), rr.push(A.canvas)),
    m &&
      (x.save(),
      (x.globalCompositeOperation = "source-over"),
      (x.strokeStyle = "black"),
      (x.lineWidth = 1),
      h.getTriangles().forEach(function (D, j, Q) {
        const Z = D.target,
          F = (Z[0][0] - z[0]) / o,
          V = -(Z[0][1] - z[1]) / o,
          lt = (Z[1][0] - z[0]) / o,
          it = -(Z[1][1] - z[1]) / o,
          ot = (Z[2][0] - z[0]) / o,
          st = -(Z[2][1] - z[1]) / o;
        x.beginPath(),
          x.moveTo(lt, it),
          x.lineTo(F, V),
          x.lineTo(ot, st),
          x.closePath(),
          x.stroke();
      }),
      x.restore()),
    x.canvas
  );
}
const ZT = 10,
  Hy = 0.25;
class KT {
  constructor(t, i, s, r, o, c, h) {
    (this.sourceProj_ = t), (this.targetProj_ = i);
    let d = {};
    const _ = h
      ? wS((G) => _e(h, Qu(G, this.targetProj_, this.sourceProj_)))
      : hr(this.targetProj_, this.sourceProj_);
    (this.transformInv_ = function (G) {
      const z = G[0] + "/" + G[1];
      return d[z] || (d[z] = _(G)), d[z];
    }),
      (this.maxSourceExtent_ = r),
      (this.errorThresholdSquared_ = o * o),
      (this.triangles_ = []),
      (this.wrapsXInSource_ = !1),
      (this.canWrapXInSource_ =
        this.sourceProj_.canWrapX() &&
        !!r &&
        !!this.sourceProj_.getExtent() &&
        Ft(r) >= Ft(this.sourceProj_.getExtent())),
      (this.sourceWorldWidth_ = this.sourceProj_.getExtent()
        ? Ft(this.sourceProj_.getExtent())
        : null),
      (this.targetWorldWidth_ = this.targetProj_.getExtent()
        ? Ft(this.targetProj_.getExtent())
        : null);
    const m = sl(s),
      y = qu(s),
      v = Ku(s),
      S = Zu(s),
      x = this.transformInv_(m),
      b = this.transformInv_(y),
      R = this.transformInv_(v),
      A = this.transformInv_(S),
      O =
        ZT +
        (c
          ? Math.max(0, Math.ceil(Math.log2(Kf(s) / (c * c * 256 * 256))))
          : 0);
    if ((this.addQuad_(m, y, v, S, x, b, R, A, O), this.wrapsXInSource_)) {
      let G = 1 / 0;
      this.triangles_.forEach(function (z, D, j) {
        G = Math.min(G, z.source[0][0], z.source[1][0], z.source[2][0]);
      }),
        this.triangles_.forEach((z) => {
          if (
            Math.max(z.source[0][0], z.source[1][0], z.source[2][0]) - G >
            this.sourceWorldWidth_ / 2
          ) {
            const D = [
              [z.source[0][0], z.source[0][1]],
              [z.source[1][0], z.source[1][1]],
              [z.source[2][0], z.source[2][1]],
            ];
            D[0][0] - G > this.sourceWorldWidth_ / 2 &&
              (D[0][0] -= this.sourceWorldWidth_),
              D[1][0] - G > this.sourceWorldWidth_ / 2 &&
                (D[1][0] -= this.sourceWorldWidth_),
              D[2][0] - G > this.sourceWorldWidth_ / 2 &&
                (D[2][0] -= this.sourceWorldWidth_);
            const j = Math.min(D[0][0], D[1][0], D[2][0]);
            Math.max(D[0][0], D[1][0], D[2][0]) - j <
              this.sourceWorldWidth_ / 2 && (z.source = D);
          }
        });
    }
    d = {};
  }
  addTriangle_(t, i, s, r, o, c) {
    this.triangles_.push({ source: [r, o, c], target: [t, i, s] });
  }
  addQuad_(t, i, s, r, o, c, h, d, _) {
    const m = k0([o, c, h, d]),
      y = this.sourceWorldWidth_ ? Ft(m) / this.sourceWorldWidth_ : null,
      v = this.sourceWorldWidth_,
      S = this.sourceProj_.canWrapX() && y > 0.5 && y < 1;
    let x = !1;
    if (_ > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const R = k0([t, i, s, r]);
        x = Ft(R) / this.targetWorldWidth_ > Hy || x;
      }
      !S && this.sourceProj_.isGlobal() && y && (x = y > Hy || x);
    }
    if (
      !x &&
      this.maxSourceExtent_ &&
      isFinite(m[0]) &&
      isFinite(m[1]) &&
      isFinite(m[2]) &&
      isFinite(m[3]) &&
      !je(m, this.maxSourceExtent_)
    )
      return;
    let b = 0;
    if (
      !x &&
      (!isFinite(o[0]) ||
        !isFinite(o[1]) ||
        !isFinite(c[0]) ||
        !isFinite(c[1]) ||
        !isFinite(h[0]) ||
        !isFinite(h[1]) ||
        !isFinite(d[0]) ||
        !isFinite(d[1]))
    ) {
      if (_ > 0) x = !0;
      else if (
        ((b =
          (!isFinite(o[0]) || !isFinite(o[1]) ? 8 : 0) +
          (!isFinite(c[0]) || !isFinite(c[1]) ? 4 : 0) +
          (!isFinite(h[0]) || !isFinite(h[1]) ? 2 : 0) +
          (!isFinite(d[0]) || !isFinite(d[1]) ? 1 : 0)),
        b != 1 && b != 2 && b != 4 && b != 8)
      )
        return;
    }
    if (_ > 0) {
      if (!x) {
        const R = [(t[0] + s[0]) / 2, (t[1] + s[1]) / 2],
          A = this.transformInv_(R);
        let O;
        S
          ? (O = (nr(o[0], v) + nr(h[0], v)) / 2 - nr(A[0], v))
          : (O = (o[0] + h[0]) / 2 - A[0]);
        const G = (o[1] + h[1]) / 2 - A[1];
        x = O * O + G * G > this.errorThresholdSquared_;
      }
      if (x) {
        if (Math.abs(t[0] - s[0]) <= Math.abs(t[1] - s[1])) {
          const R = [(i[0] + s[0]) / 2, (i[1] + s[1]) / 2],
            A = this.transformInv_(R),
            O = [(r[0] + t[0]) / 2, (r[1] + t[1]) / 2],
            G = this.transformInv_(O);
          this.addQuad_(t, i, R, O, o, c, A, G, _ - 1),
            this.addQuad_(O, R, s, r, G, A, h, d, _ - 1);
        } else {
          const R = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2],
            A = this.transformInv_(R),
            O = [(s[0] + r[0]) / 2, (s[1] + r[1]) / 2],
            G = this.transformInv_(O);
          this.addQuad_(t, R, O, r, o, A, G, d, _ - 1),
            this.addQuad_(R, i, s, O, A, c, h, G, _ - 1);
        }
        return;
      }
    }
    if (S) {
      if (!this.canWrapXInSource_) return;
      this.wrapsXInSource_ = !0;
    }
    (b & 11) == 0 && this.addTriangle_(t, s, r, o, h, d),
      (b & 14) == 0 && this.addTriangle_(t, s, i, o, h, c),
      b &&
        ((b & 13) == 0 && this.addTriangle_(i, r, t, c, d, o),
        (b & 7) == 0 && this.addTriangle_(i, r, s, c, d, h));
  }
  calculateSourceExtent() {
    const t = Ti();
    return (
      this.triangles_.forEach(function (i, s, r) {
        const o = i.source;
        wa(t, o[0]), wa(t, o[1]), wa(t, o[2]);
      }),
      t
    );
  }
  getTriangles() {
    return this.triangles_;
  }
}
const qT = 0.5;
class u1 extends Kd {
  constructor(t, i, s, r, o, c, h, d, _, m, y, v) {
    super(o, ft.IDLE, v),
      (this.renderEdges_ = y !== void 0 ? y : !1),
      (this.pixelRatio_ = h),
      (this.gutter_ = d),
      (this.canvas_ = null),
      (this.sourceTileGrid_ = i),
      (this.targetTileGrid_ = r),
      (this.wrappedTileCoord_ = c || o),
      (this.sourceTiles_ = []),
      (this.sourcesListenerKeys_ = null),
      (this.sourceZ_ = 0),
      (this.clipExtent_ = t.canWrapX() ? t.getExtent() : void 0);
    const S = r.getTileCoordExtent(this.wrappedTileCoord_),
      x = this.targetTileGrid_.getExtent();
    let b = this.sourceTileGrid_.getExtent();
    const R = x ? Qs(S, x) : S;
    if (Kf(R) === 0) {
      this.state = ft.EMPTY;
      return;
    }
    const A = t.getExtent();
    A && (b ? (b = Qs(b, A)) : (b = A));
    const O = r.getResolution(this.wrappedTileCoord_[0]),
      G = PT(t, s, R, O);
    if (!isFinite(G) || G <= 0) {
      this.state = ft.EMPTY;
      return;
    }
    const z = m !== void 0 ? m : qT;
    if (
      ((this.triangulation_ = new KT(t, s, R, b, G * z, O)),
      this.triangulation_.getTriangles().length === 0)
    ) {
      this.state = ft.EMPTY;
      return;
    }
    this.sourceZ_ = i.getZForResolution(G);
    let D = this.triangulation_.calculateSourceExtent();
    if (
      (b &&
        (t.canWrapX()
          ? ((D[1] = se(D[1], b[1], b[3])), (D[3] = se(D[3], b[1], b[3])))
          : (D = Qs(D, b))),
      !Kf(D))
    )
      this.state = ft.EMPTY;
    else {
      let j = 0,
        Q = 0;
      t.canWrapX() && ((j = Ft(A)), (Q = Math.floor((D[0] - A[0]) / j))),
        tp(D.slice(), t, !0).forEach((F) => {
          const V = i.getTileRangeForExtentAndZ(F, this.sourceZ_);
          for (let lt = V.minX; lt <= V.maxX; lt++)
            for (let it = V.minY; it <= V.maxY; it++) {
              const ot = _(this.sourceZ_, lt, it, h);
              if (ot) {
                const st = Q * j;
                this.sourceTiles_.push({ tile: ot, offset: st });
              }
            }
          ++Q;
        }),
        this.sourceTiles_.length === 0 && (this.state = ft.EMPTY);
    }
  }
  getImage() {
    return this.canvas_;
  }
  reproject_() {
    const t = [];
    if (
      (this.sourceTiles_.forEach((i) => {
        var r;
        const s = i.tile;
        if (s && s.getState() == ft.LOADED) {
          const o = this.sourceTileGrid_.getTileCoordExtent(s.tileCoord);
          (o[0] += i.offset), (o[2] += i.offset);
          const c = (r = this.clipExtent_) == null ? void 0 : r.slice();
          c && ((c[0] += i.offset), (c[2] += i.offset)),
            t.push({ extent: o, clipExtent: c, image: s.getImage() });
        }
      }),
      (this.sourceTiles_.length = 0),
      t.length === 0)
    )
      this.state = ft.ERROR;
    else {
      const i = this.wrappedTileCoord_[0],
        s = this.targetTileGrid_.getTileSize(i),
        r = typeof s == "number" ? s : s[0],
        o = typeof s == "number" ? s : s[1],
        c = this.targetTileGrid_.getResolution(i),
        h = this.sourceTileGrid_.getResolution(this.sourceZ_),
        d = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
      (this.canvas_ = jT(
        r,
        o,
        this.pixelRatio_,
        h,
        this.sourceTileGrid_.getExtent(),
        c,
        d,
        this.triangulation_,
        t,
        this.gutter_,
        this.renderEdges_,
        this.interpolate,
      )),
        (this.state = ft.LOADED);
    }
    this.changed();
  }
  load() {
    if (this.state == ft.IDLE) {
      (this.state = ft.LOADING), this.changed();
      let t = 0;
      (this.sourcesListenerKeys_ = []),
        this.sourceTiles_.forEach(({ tile: i }) => {
          const s = i.getState();
          if (s == ft.IDLE || s == ft.LOADING) {
            t++;
            const r = Mt(i, pt.CHANGE, (o) => {
              const c = i.getState();
              (c == ft.LOADED || c == ft.ERROR || c == ft.EMPTY) &&
                (Zt(r),
                t--,
                t === 0 && (this.unlistenSources_(), this.reproject_()));
            });
            this.sourcesListenerKeys_.push(r);
          }
        }),
        t === 0
          ? setTimeout(this.reproject_.bind(this), 0)
          : this.sourceTiles_.forEach(function ({ tile: i }, s, r) {
              i.getState() == ft.IDLE && i.load();
            });
    }
  }
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(Zt), (this.sourcesListenerKeys_ = null);
  }
  release() {
    this.canvas_ &&
      (ec(this.canvas_.getContext("2d")),
      rr.push(this.canvas_),
      (this.canvas_ = null)),
      super.release();
  }
}
class VT {
  constructor(t) {
    (this.highWaterMark = t !== void 0 ? t : 2048),
      (this.count_ = 0),
      (this.entries_ = {}),
      (this.oldest_ = null),
      (this.newest_ = null);
  }
  deleteOldest() {
    const t = this.pop();
    t instanceof Bu && t.dispose();
  }
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
  }
  expireCache(t) {
    for (; this.canExpireCache(); ) this.deleteOldest();
  }
  clear() {
    for (; this.oldest_; ) this.deleteOldest();
  }
  containsKey(t) {
    return this.entries_.hasOwnProperty(t);
  }
  forEach(t) {
    let i = this.oldest_;
    for (; i; ) t(i.value_, i.key_, this), (i = i.newer);
  }
  get(t, i) {
    const s = this.entries_[t];
    return (
      Lt(
        s !== void 0,
        "Tried to get a value for a key that does not exist in the cache",
      ),
      s === this.newest_ ||
        (s === this.oldest_
          ? ((this.oldest_ = this.oldest_.newer), (this.oldest_.older = null))
          : ((s.newer.older = s.older), (s.older.newer = s.newer)),
        (s.newer = null),
        (s.older = this.newest_),
        (this.newest_.newer = s),
        (this.newest_ = s)),
      s.value_
    );
  }
  remove(t) {
    const i = this.entries_[t];
    return (
      Lt(
        i !== void 0,
        "Tried to get a value for a key that does not exist in the cache",
      ),
      i === this.newest_
        ? ((this.newest_ = i.older),
          this.newest_ && (this.newest_.newer = null))
        : i === this.oldest_
          ? ((this.oldest_ = i.newer),
            this.oldest_ && (this.oldest_.older = null))
          : ((i.newer.older = i.older), (i.older.newer = i.newer)),
      delete this.entries_[t],
      --this.count_,
      i.value_
    );
  }
  getCount() {
    return this.count_;
  }
  getKeys() {
    const t = new Array(this.count_);
    let i = 0,
      s;
    for (s = this.newest_; s; s = s.older) t[i++] = s.key_;
    return t;
  }
  getValues() {
    const t = new Array(this.count_);
    let i = 0,
      s;
    for (s = this.newest_; s; s = s.older) t[i++] = s.value_;
    return t;
  }
  peekLast() {
    return this.oldest_.value_;
  }
  peekLastKey() {
    return this.oldest_.key_;
  }
  peekFirstKey() {
    return this.newest_.key_;
  }
  peek(t) {
    var i;
    return (i = this.entries_[t]) == null ? void 0 : i.value_;
  }
  pop() {
    const t = this.oldest_;
    return (
      delete this.entries_[t.key_],
      t.newer && (t.newer.older = null),
      (this.oldest_ = t.newer),
      this.oldest_ || (this.newest_ = null),
      --this.count_,
      t.value_
    );
  }
  replace(t, i) {
    this.get(t), (this.entries_[t].value_ = i);
  }
  set(t, i) {
    Lt(
      !(t in this.entries_),
      "Tried to set a value for a key that is used already",
    );
    const s = { key_: t, newer: null, older: this.newest_, value_: i };
    this.newest_ ? (this.newest_.newer = s) : (this.oldest_ = s),
      (this.newest_ = s),
      (this.entries_[t] = s),
      ++this.count_;
  }
  setSize(t) {
    this.highWaterMark = t;
  }
}
function ku(l, t, i, s) {
  return s !== void 0 ? ((s[0] = l), (s[1] = t), (s[2] = i), s) : [l, t, i];
}
function WT(l, t, i) {
  return l + "/" + t + "/" + i;
}
function QT(l) {
  return JT(l[0], l[1], l[2]);
}
function JT(l, t, i) {
  return (t << l) + i;
}
function $T(l, t) {
  const i = l[0],
    s = l[1],
    r = l[2];
  if (t.getMinZoom() > i || i > t.getMaxZoom()) return !1;
  const o = t.getFullTileRange(i);
  return o ? o.containsXY(s, r) : !0;
}
function Hf(l, t, i, s) {
  return `${l},${WT(t, i, s)}`;
}
function Pf(l, t, i) {
  if (!(i in l)) return (l[i] = new Set([t])), !0;
  const s = l[i],
    r = s.has(t);
  return r || s.add(t), !r;
}
function tC(l, t, i) {
  const s = l[i];
  return s ? s.delete(t) : !1;
}
function Py(l, t) {
  const i = l.layerStatesArray[l.layerIndex];
  i.extent && (t = Qs(t, us(i.extent, l.viewState.projection)));
  const s = i.layer.getRenderSource();
  if (!s.getWrapX()) {
    const r = s.getTileGridForProjection(l.viewState.projection).getExtent();
    r && (t = Qs(t, r));
  }
  return t;
}
class eC extends jp {
  constructor(t, i) {
    super(t),
      (i = i || {}),
      (this.extentChanged = !0),
      (this.renderComplete = !1),
      (this.renderedExtent_ = null),
      this.renderedPixelRatio,
      (this.renderedProjection = null),
      this.renderedRevision_,
      (this.renderedTiles = []),
      this.renderedSourceKey_,
      this.renderedSourceRevision_,
      (this.tempExtent = Ti()),
      (this.tempTileRange_ = new Qd(0, 0, 0, 0)),
      (this.tempTileCoord_ = ku(0, 0, 0));
    const s = i.cacheSize !== void 0 ? i.cacheSize : 512;
    (this.tileCache_ = new VT(s)), (this.maxStaleKeys = s * 0.5);
  }
  getTileCache() {
    return this.tileCache_;
  }
  getOrCreateTile(t, i, s, r) {
    const o = this.tileCache_,
      h = this.getLayer().getSource(),
      d = Hf(h.getKey(), t, i, s);
    let _;
    if (o.containsKey(d)) _ = o.get(d);
    else {
      if (((_ = h.getTile(t, i, s, r.pixelRatio, r.viewState.projection)), !_))
        return null;
      o.set(d, _);
    }
    return _;
  }
  getTile(t, i, s, r) {
    const o = this.getOrCreateTile(t, i, s, r);
    return o || null;
  }
  getData(t) {
    const i = this.frameState;
    if (!i) return null;
    const s = this.getLayer(),
      r = _e(i.pixelToCoordinateTransform, t.slice()),
      o = s.getExtent();
    if (o && !ur(o, r)) return null;
    const c = i.viewState,
      h = s.getRenderSource(),
      d = h.getTileGridForProjection(c.projection),
      _ = h.getTilePixelRatio(i.pixelRatio);
    for (let m = d.getZForResolution(c.resolution); m >= d.getMinZoom(); --m) {
      const y = d.getTileCoordForCoordAndZ(r, m),
        v = this.getTile(m, y[1], y[2], i);
      if (!v || v.getState() !== ft.LOADED) continue;
      const S = d.getOrigin(m),
        x = Ke(d.getTileSize(m)),
        b = d.getResolution(m);
      let R;
      if (v instanceof i1 || v instanceof u1) R = v.getImage();
      else if (v instanceof Yy) {
        if (((R = ud(v.getData())), !R)) continue;
      } else continue;
      const A = Math.floor(_ * ((r[0] - S[0]) / b - y[1] * x[0])),
        O = Math.floor(_ * ((S[1] - r[1]) / b - y[2] * x[1])),
        G = Math.round(_ * h.getGutterForProjection(c.projection));
      return this.getImageData(R, A + G, O + G);
    }
    return null;
  }
  prepareFrame(t) {
    this.renderedProjection
      ? t.viewState.projection !== this.renderedProjection &&
        (this.tileCache_.clear(),
        (this.renderedProjection = t.viewState.projection))
      : (this.renderedProjection = t.viewState.projection);
    const i = this.getLayer().getSource();
    if (!i) return !1;
    const s = i.getRevision();
    return (
      this.renderedRevision_
        ? this.renderedRevision_ !== s &&
          ((this.renderedRevision_ = s),
          this.renderedSourceKey_ === i.getKey() && this.tileCache_.clear())
        : (this.renderedRevision_ = s),
      !0
    );
  }
  enqueueTiles(t, i, s, r, o) {
    const c = t.viewState,
      h = this.getLayer(),
      d = h.getRenderSource(),
      _ = d.getTileGridForProjection(c.projection),
      m = It(d);
    m in t.wantedTiles || (t.wantedTiles[m] = {});
    const y = t.wantedTiles[m],
      v = h.getMapInternal(),
      S = Math.max(
        s - o,
        _.getMinZoom(),
        _.getZForResolution(
          Math.min(
            h.getMaxResolution(),
            v
              ? v.getView().getResolutionForZoom(Math.max(h.getMinZoom(), 0))
              : _.getResolution(0),
          ),
          d.zDirection,
        ),
      ),
      x = c.rotation,
      b = x ? Jy(c.center, c.resolution, x, t.size) : void 0;
    for (let R = s; R >= S; --R) {
      const A = _.getTileRangeForExtentAndZ(i, R, this.tempTileRange_),
        O = _.getResolution(R);
      for (let G = A.minX; G <= A.maxX; ++G)
        for (let z = A.minY; z <= A.maxY; ++z) {
          if (x && !_.tileCoordIntersectsViewport([R, G, z], b)) continue;
          const D = this.getTile(R, G, z, t);
          if (!D || !Pf(r, D, R)) continue;
          const Q = D.getKey();
          if (
            ((y[Q] = !0),
            D.getState() === ft.IDLE && !t.tileQueue.isKeyQueued(Q))
          ) {
            const Z = ku(R, G, z, this.tempTileCoord_);
            t.tileQueue.enqueue([D, m, _.getTileCoordCenter(Z), O]);
          }
        }
    }
  }
  findStaleTile_(t, i) {
    const s = this.tileCache_,
      r = t[0],
      o = t[1],
      c = t[2],
      h = this.getStaleKeys();
    for (let d = 0; d < h.length; ++d) {
      const _ = Hf(h[d], r, o, c);
      if (s.containsKey(_)) {
        const m = s.peek(_);
        if (m.getState() === ft.LOADED)
          return m.endTransition(It(this)), Pf(i, m, r), !0;
      }
    }
    return !1;
  }
  findAltTiles_(t, i, s, r) {
    const o = t.getTileRangeForTileCoordAndZ(i, s, this.tempTileRange_);
    if (!o) return !1;
    let c = !0;
    const h = this.tileCache_,
      _ = this.getLayer().getRenderSource().getKey();
    for (let m = o.minX; m <= o.maxX; ++m)
      for (let y = o.minY; y <= o.maxY; ++y) {
        const v = Hf(_, s, m, y);
        let S = !1;
        if (h.containsKey(v)) {
          const x = h.peek(v);
          x.getState() === ft.LOADED && (Pf(r, x, s), (S = !0));
        }
        S || (c = !1);
      }
    return c;
  }
  renderFrame(t, i) {
    let s = !0;
    this.renderComplete = !0;
    const r = t.layerStatesArray[t.layerIndex],
      o = t.viewState,
      c = o.projection,
      h = o.resolution,
      d = o.center,
      _ = t.pixelRatio,
      m = this.getLayer(),
      y = m.getSource(),
      v = y.getTileGridForProjection(c),
      S = v.getZForResolution(h, y.zDirection),
      x = v.getResolution(S),
      b = y.getKey();
    this.renderedSourceKey_
      ? this.renderedSourceKey_ !== b &&
        (this.prependStaleKey(this.renderedSourceKey_),
        (this.renderedSourceKey_ = b))
      : (this.renderedSourceKey_ = b);
    let R = t.extent;
    const A = y.getTilePixelRatio(_);
    this.prepareContainer(t, i);
    const O = this.context.canvas.width,
      G = this.context.canvas.height,
      z = r.extent && us(r.extent, c);
    z && (R = Qs(R, us(r.extent, c)));
    const D = (x * O) / 2 / A,
      j = (x * G) / 2 / A,
      Q = [d[0] - D, d[1] - j, d[0] + D, d[1] + j],
      Z = {};
    this.renderedTiles.length = 0;
    const F = m.getPreload();
    if (t.nextExtent) {
      const $ = v.getZForResolution(o.nextResolution, y.zDirection),
        C = Py(t, t.nextExtent);
      this.enqueueTiles(t, C, $, Z, F);
    }
    const V = Py(t, R);
    if (
      (this.enqueueTiles(t, V, S, Z, 0),
      F > 0 &&
        setTimeout(() => {
          this.enqueueTiles(t, V, S - 1, Z, F - 1);
        }, 0),
      !(S in Z))
    )
      return this.container;
    const lt = It(this),
      it = t.time;
    for (const $ of Z[S]) {
      const C = $.getState();
      if (C === ft.EMPTY) continue;
      const X = $.tileCoord;
      if (C === ft.LOADED && $.getAlpha(lt, it) === 1) {
        $.endTransition(lt);
        continue;
      }
      if (
        (C !== ft.IDLE && (s = !1),
        C !== ft.ERROR && (this.renderComplete = !1),
        this.findStaleTile_(X, Z))
      ) {
        tC(Z, $, S), (t.animate = !0);
        continue;
      }
      if (this.findAltTiles_(v, X, S + 1, Z)) continue;
      const J = v.getMinZoom();
      for (let rt = S - 1; rt >= J && !this.findAltTiles_(v, X, rt, Z); --rt);
    }
    const ot = ((x / h) * _) / A,
      st = this.getRenderContext(t);
    On(this.tempTransform, O / 2, G / 2, ot, ot, 0, -O / 2, -G / 2),
      r.extent && this.clipUnrotated(st, t, z),
      y.getInterpolate() || (st.imageSmoothingEnabled = !1),
      this.preRender(st, t);
    const nt = Object.keys(Z).map(Number);
    nt.sort(bn);
    let Y;
    const q = [],
      W = [];
    for (let $ = nt.length - 1; $ >= 0; --$) {
      const C = nt[$],
        X = y.getTilePixelSize(C, _, c),
        tt = v.getResolution(C) / x,
        J = X[0] * tt * ot,
        rt = X[1] * tt * ot,
        ct = v.getTileCoordForCoordAndZ(sl(Q), C),
        Nt = v.getTileCoordExtent(ct),
        mt = _e(this.tempTransform, [
          (A * (Nt[0] - Q[0])) / x,
          (A * (Q[3] - Nt[3])) / x,
        ]),
        Ut = A * y.getGutterForProjection(c);
      for (const vt of Z[C]) {
        if (vt.getState() !== ft.LOADED) continue;
        const De = vt.tileCoord,
          Fi = ct[1] - De[1],
          qe = Math.round(mt[0] - (Fi - 1) * J),
          Ve = ct[2] - De[2],
          Ui = Math.round(mt[1] - (Ve - 1) * rt),
          ye = Math.round(mt[0] - Fi * J),
          Ue = Math.round(mt[1] - Ve * rt),
          Ri = qe - ye,
          bi = Ui - Ue,
          Xi = nt.length === 1;
        let tn = !1;
        Y = [ye, Ue, ye + Ri, Ue, ye + Ri, Ue + bi, ye, Ue + bi];
        for (let Ai = 0, en = q.length; Ai < en; ++Ai)
          if (!Xi && C < W[Ai]) {
            const kt = q[Ai];
            je([ye, Ue, ye + Ri, Ue + bi], [kt[0], kt[3], kt[4], kt[7]]) &&
              (tn || (st.save(), (tn = !0)),
              st.beginPath(),
              st.moveTo(Y[0], Y[1]),
              st.lineTo(Y[2], Y[3]),
              st.lineTo(Y[4], Y[5]),
              st.lineTo(Y[6], Y[7]),
              st.moveTo(kt[6], kt[7]),
              st.lineTo(kt[4], kt[5]),
              st.lineTo(kt[2], kt[3]),
              st.lineTo(kt[0], kt[1]),
              st.clip());
          }
        q.push(Y),
          W.push(C),
          this.drawTile(vt, t, ye, Ue, Ri, bi, Ut, Xi),
          tn && st.restore(),
          this.renderedTiles.unshift(vt),
          this.updateUsedTiles(t.usedTiles, y, vt);
      }
    }
    if (
      ((this.renderedResolution = x),
      (this.extentChanged =
        !this.renderedExtent_ || !Oa(this.renderedExtent_, Q)),
      (this.renderedExtent_ = Q),
      (this.renderedPixelRatio = _),
      this.postRender(this.context, t),
      r.extent && st.restore(),
      (st.imageSmoothingEnabled = !0),
      this.renderComplete)
    ) {
      const $ = (C, X) => {
        const U = It(y),
          tt = X.wantedTiles[U],
          J = tt ? Object.keys(tt).length : 0;
        this.updateCacheSize(J), this.tileCache_.expireCache();
      };
      t.postRenderFunctions.push($);
    }
    return !this.renderComplete && !s && (t.animate = !0), this.container;
  }
  updateCacheSize(t) {
    this.tileCache_.highWaterMark = Math.max(
      this.tileCache_.highWaterMark,
      t * 2,
    );
  }
  drawTile(t, i, s, r, o, c, h, d) {
    let _;
    if (t instanceof Yy) {
      if (((_ = ud(t.getData())), !_))
        throw new Error("Rendering array data is not yet supported");
    } else _ = this.getTileImage(t);
    if (!_) return;
    const m = this.getRenderContext(i),
      y = It(this),
      v = i.layerStatesArray[i.layerIndex],
      S = v.opacity * (d ? t.getAlpha(y, i.time) : 1),
      x = S !== m.globalAlpha;
    x && (m.save(), (m.globalAlpha = S)),
      m.drawImage(_, h, h, _.width - 2 * h, _.height - 2 * h, s, r, o, c),
      x && m.restore(),
      S !== v.opacity ? (i.animate = !0) : d && t.endTransition(y);
  }
  getImage() {
    const t = this.context;
    return t ? t.canvas : null;
  }
  getTileImage(t) {
    return t.getImage();
  }
  updateUsedTiles(t, i, s) {
    const r = It(i);
    r in t || (t[r] = {}), (t[r][s.getKey()] = !0);
  }
}
const vu = {
  PRELOAD: "preload",
  USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError",
};
class iC extends hc {
  constructor(t) {
    t = t || {};
    const i = Object.assign({}, t),
      s = t.cacheSize;
    delete t.cacheSize,
      delete i.preload,
      delete i.useInterimTilesOnError,
      super(i),
      this.on,
      this.once,
      this.un,
      (this.cacheSize_ = s),
      this.setPreload(t.preload !== void 0 ? t.preload : 0),
      this.setUseInterimTilesOnError(
        t.useInterimTilesOnError !== void 0 ? t.useInterimTilesOnError : !0,
      );
  }
  getCacheSize() {
    return this.cacheSize_;
  }
  getPreload() {
    return this.get(vu.PRELOAD);
  }
  setPreload(t) {
    this.set(vu.PRELOAD, t);
  }
  getUseInterimTilesOnError() {
    return this.get(vu.USE_INTERIM_TILES_ON_ERROR);
  }
  setUseInterimTilesOnError(t) {
    this.set(vu.USE_INTERIM_TILES_ON_ERROR, t);
  }
  getData(t) {
    return super.getData(t);
  }
}
class nC extends iC {
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new eC(this, { cacheSize: this.getCacheSize() });
  }
}
const Wl = [0, 0, 0],
  ls = 5;
class c1 {
  constructor(t) {
    (this.minZoom = t.minZoom !== void 0 ? t.minZoom : 0),
      (this.resolutions_ = t.resolutions),
      Lt(
        UE(this.resolutions_, (r, o) => o - r),
        "`resolutions` must be sorted in descending order",
      );
    let i;
    if (!t.origins) {
      for (let r = 0, o = this.resolutions_.length - 1; r < o; ++r)
        if (!i) i = this.resolutions_[r] / this.resolutions_[r + 1];
        else if (this.resolutions_[r] / this.resolutions_[r + 1] !== i) {
          i = void 0;
          break;
        }
    }
    (this.zoomFactor_ = i),
      (this.maxZoom = this.resolutions_.length - 1),
      (this.origin_ = t.origin !== void 0 ? t.origin : null),
      (this.origins_ = null),
      t.origins !== void 0 &&
        ((this.origins_ = t.origins),
        Lt(
          this.origins_.length == this.resolutions_.length,
          "Number of `origins` and `resolutions` must be equal",
        ));
    const s = t.extent;
    s !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = sl(s)),
      Lt(
        (!this.origin_ && this.origins_) || (this.origin_ && !this.origins_),
        "Either `origin` or `origins` must be configured, never both",
      ),
      (this.tileSizes_ = null),
      t.tileSizes !== void 0 &&
        ((this.tileSizes_ = t.tileSizes),
        Lt(
          this.tileSizes_.length == this.resolutions_.length,
          "Number of `tileSizes` and `resolutions` must be equal",
        )),
      (this.tileSize_ =
        t.tileSize !== void 0 ? t.tileSize : this.tileSizes_ ? null : jd),
      Lt(
        (!this.tileSize_ && this.tileSizes_) ||
          (this.tileSize_ && !this.tileSizes_),
        "Either `tileSize` or `tileSizes` must be configured, never both",
      ),
      (this.extent_ = s !== void 0 ? s : null),
      (this.fullTileRanges_ = null),
      (this.tmpSize_ = [0, 0]),
      (this.tmpExtent_ = [0, 0, 0, 0]),
      t.sizes !== void 0
        ? (this.fullTileRanges_ = t.sizes.map((r, o) => {
            const c = new Qd(
              Math.min(0, r[0]),
              Math.max(r[0] - 1, -1),
              Math.min(0, r[1]),
              Math.max(r[1] - 1, -1),
            );
            if (s) {
              const h = this.getTileRangeForExtentAndZ(s, o);
              (c.minX = Math.max(h.minX, c.minX)),
                (c.maxX = Math.min(h.maxX, c.maxX)),
                (c.minY = Math.max(h.minY, c.minY)),
                (c.maxY = Math.min(h.maxY, c.maxY));
            }
            return c;
          }))
        : s && this.calculateTileRanges_(s);
  }
  forEachTileCoord(t, i, s) {
    const r = this.getTileRangeForExtentAndZ(t, i);
    for (let o = r.minX, c = r.maxX; o <= c; ++o)
      for (let h = r.minY, d = r.maxY; h <= d; ++h) s([i, o, h]);
  }
  forEachTileCoordParentTileRange(t, i, s, r) {
    let o,
      c,
      h,
      d = null,
      _ = t[0] - 1;
    for (
      this.zoomFactor_ === 2
        ? ((c = t[1]), (h = t[2]))
        : (d = this.getTileCoordExtent(t, r));
      _ >= this.minZoom;

    ) {
      if (
        (c !== void 0 && h !== void 0
          ? ((c = Math.floor(c / 2)),
            (h = Math.floor(h / 2)),
            (o = Vl(c, c, h, h, s)))
          : (o = this.getTileRangeForExtentAndZ(d, _, s)),
        i(_, o))
      )
        return !0;
      --_;
    }
    return !1;
  }
  getExtent() {
    return this.extent_;
  }
  getMaxZoom() {
    return this.maxZoom;
  }
  getMinZoom() {
    return this.minZoom;
  }
  getOrigin(t) {
    return this.origin_ ? this.origin_ : this.origins_[t];
  }
  getResolution(t) {
    return this.resolutions_[t];
  }
  getResolutions() {
    return this.resolutions_;
  }
  getTileCoordChildTileRange(t, i, s) {
    if (t[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const o = t[1] * 2,
          c = t[2] * 2;
        return Vl(o, o + 1, c, c + 1, i);
      }
      const r = this.getTileCoordExtent(t, s || this.tmpExtent_);
      return this.getTileRangeForExtentAndZ(r, t[0] + 1, i);
    }
    return null;
  }
  getTileRangeForTileCoordAndZ(t, i, s) {
    if (i > this.maxZoom || i < this.minZoom) return null;
    const r = t[0],
      o = t[1],
      c = t[2];
    if (i === r) return Vl(o, c, o, c, s);
    if (this.zoomFactor_) {
      const d = Math.pow(this.zoomFactor_, i - r),
        _ = Math.floor(o * d),
        m = Math.floor(c * d);
      if (i < r) return Vl(_, _, m, m, s);
      const y = Math.floor(d * (o + 1)) - 1,
        v = Math.floor(d * (c + 1)) - 1;
      return Vl(_, y, m, v, s);
    }
    const h = this.getTileCoordExtent(t, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(h, i, s);
  }
  getTileRangeForExtentAndZ(t, i, s) {
    this.getTileCoordForXYAndZ_(t[0], t[3], i, !1, Wl);
    const r = Wl[1],
      o = Wl[2];
    this.getTileCoordForXYAndZ_(t[2], t[1], i, !0, Wl);
    const c = Wl[1],
      h = Wl[2];
    return Vl(r, c, o, h, s);
  }
  getTileCoordCenter(t) {
    const i = this.getOrigin(t[0]),
      s = this.getResolution(t[0]),
      r = Ke(this.getTileSize(t[0]), this.tmpSize_);
    return [i[0] + (t[1] + 0.5) * r[0] * s, i[1] - (t[2] + 0.5) * r[1] * s];
  }
  getTileCoordExtent(t, i) {
    const s = this.getOrigin(t[0]),
      r = this.getResolution(t[0]),
      o = Ke(this.getTileSize(t[0]), this.tmpSize_),
      c = s[0] + t[1] * o[0] * r,
      h = s[1] - (t[2] + 1) * o[1] * r,
      d = c + o[0] * r,
      _ = h + o[1] * r;
    return Mn(c, h, d, _, i);
  }
  getTileCoordForCoordAndResolution(t, i, s) {
    return this.getTileCoordForXYAndResolution_(t[0], t[1], i, !1, s);
  }
  getTileCoordForXYAndResolution_(t, i, s, r, o) {
    const c = this.getZForResolution(s),
      h = s / this.getResolution(c),
      d = this.getOrigin(c),
      _ = Ke(this.getTileSize(c), this.tmpSize_);
    let m = (h * (t - d[0])) / s / _[0],
      y = (h * (d[1] - i)) / s / _[1];
    return (
      r
        ? ((m = hu(m, ls) - 1), (y = hu(y, ls) - 1))
        : ((m = cu(m, ls)), (y = cu(y, ls))),
      ku(c, m, y, o)
    );
  }
  getTileCoordForXYAndZ_(t, i, s, r, o) {
    const c = this.getOrigin(s),
      h = this.getResolution(s),
      d = Ke(this.getTileSize(s), this.tmpSize_);
    let _ = (t - c[0]) / h / d[0],
      m = (c[1] - i) / h / d[1];
    return (
      r
        ? ((_ = hu(_, ls) - 1), (m = hu(m, ls) - 1))
        : ((_ = cu(_, ls)), (m = cu(m, ls))),
      ku(s, _, m, o)
    );
  }
  getTileCoordForCoordAndZ(t, i, s) {
    return this.getTileCoordForXYAndZ_(t[0], t[1], i, !1, s);
  }
  getTileCoordResolution(t) {
    return this.resolutions_[t[0]];
  }
  getTileSize(t) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_[t];
  }
  getFullTileRange(t) {
    return this.fullTileRanges_
      ? this.fullTileRanges_[t]
      : this.extent_
        ? this.getTileRangeForExtentAndZ(this.extent_, t)
        : null;
  }
  getZForResolution(t, i) {
    const s = fd(this.resolutions_, t, i || 0);
    return se(s, this.minZoom, this.maxZoom);
  }
  tileCoordIntersectsViewport(t, i) {
    return pp(i, 0, i.length, 2, this.getTileCoordExtent(t));
  }
  calculateTileRanges_(t) {
    const i = this.resolutions_.length,
      s = new Array(i);
    for (let r = this.minZoom; r < i; ++r)
      s[r] = this.getTileRangeForExtentAndZ(t, r);
    this.fullTileRanges_ = s;
  }
}
function h1(l) {
  let t = l.getDefaultTileGrid();
  return t || ((t = aC(l)), l.setDefaultTileGrid(t)), t;
}
function sC(l, t, i) {
  const s = t[0],
    r = l.getTileCoordCenter(t),
    o = Jd(i);
  if (!ur(o, r)) {
    const c = Ft(o),
      h = Math.ceil((o[0] - r[0]) / c);
    return (r[0] += c * h), l.getTileCoordForCoordAndZ(r, s);
  }
  return t;
}
function lC(l, t, i, s) {
  s = s !== void 0 ? s : "top-left";
  const r = f1(l, t, i);
  return new c1({ extent: l, origin: jE(l, s), resolutions: r, tileSize: i });
}
function rC(l) {
  const t = l || {},
    i = t.extent || Kt("EPSG:3857").getExtent(),
    s = {
      extent: i,
      minZoom: t.minZoom,
      tileSize: t.tileSize,
      resolutions: f1(i, t.maxZoom, t.tileSize, t.maxResolution),
    };
  return new c1(s);
}
function f1(l, t, i, s) {
  (t = t !== void 0 ? t : eT), (i = Ke(i !== void 0 ? i : jd));
  const r = Fe(l),
    o = Ft(l);
  s = s > 0 ? s : Math.max(o / i[0], r / i[1]);
  const c = t + 1,
    h = new Array(c);
  for (let d = 0; d < c; ++d) h[d] = s / Math.pow(2, d);
  return h;
}
function aC(l, t, i, s) {
  const r = Jd(l);
  return lC(r, t, i, s);
}
function Jd(l) {
  l = Kt(l);
  let t = l.getExtent();
  if (!t) {
    const i = (180 * pd.degrees) / l.getMetersPerUnit();
    t = Mn(-i, -i, i, i);
  }
  return t;
}
const oC = /\{z\}/g,
  uC = /\{x\}/g,
  cC = /\{y\}/g,
  hC = /\{-y\}/g;
function fC(l, t, i, s, r) {
  return l
    .replace(oC, t.toString())
    .replace(uC, i.toString())
    .replace(cC, s.toString())
    .replace(hC, function () {
      if (r === void 0)
        throw new Error(
          "If the URL template has a {-y} placeholder, the grid extent must be known",
        );
      return (r - s).toString();
    });
}
function dC(l) {
  const t = [];
  let i = /\{([a-z])-([a-z])\}/.exec(l);
  if (i) {
    const s = i[1].charCodeAt(0),
      r = i[2].charCodeAt(0);
    let o;
    for (o = s; o <= r; ++o) t.push(l.replace(i[0], String.fromCharCode(o)));
    return t;
  }
  if (((i = /\{(\d+)-(\d+)\}/.exec(l)), i)) {
    const s = parseInt(i[2], 10);
    for (let r = parseInt(i[1], 10); r <= s; r++)
      t.push(l.replace(i[0], r.toString()));
    return t;
  }
  return t.push(l), t;
}
function gC(l, t) {
  return function (i, s, r) {
    if (!i) return;
    let o;
    const c = i[0];
    if (t) {
      const h = t.getFullTileRange(c);
      h && (o = h.getHeight() - 1);
    }
    return fC(l, c, i[1], i[2], o);
  };
}
function _C(l, t) {
  const i = l.length,
    s = new Array(i);
  for (let r = 0; r < i; ++r) s[r] = gC(l[r], t);
  return mC(s);
}
function mC(l) {
  return l.length === 1
    ? l[0]
    : function (t, i, s) {
        if (!t) return;
        const r = QT(t),
          o = nr(r, l.length);
        return l[o](t, i, s);
      };
}
class yC extends Yp {
  constructor(t) {
    super({
      attributions: t.attributions,
      attributionsCollapsible: t.attributionsCollapsible,
      projection: t.projection,
      state: t.state,
      wrapX: t.wrapX,
      interpolate: t.interpolate,
    }),
      this.on,
      this.once,
      this.un,
      (this.tilePixelRatio_ =
        t.tilePixelRatio !== void 0 ? t.tilePixelRatio : 1),
      (this.tileGrid = t.tileGrid !== void 0 ? t.tileGrid : null);
    const i = [256, 256];
    this.tileGrid &&
      Ke(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), i),
      (this.tmpSize = [0, 0]),
      (this.key_ = t.key || It(this)),
      (this.tileOptions = {
        transition: t.transition,
        interpolate: t.interpolate,
      }),
      (this.zDirection = t.zDirection ? t.zDirection : 0);
  }
  getGutterForProjection(t) {
    return 0;
  }
  getKey() {
    return this.key_;
  }
  setKey(t) {
    this.key_ !== t && ((this.key_ = t), this.changed());
  }
  getResolutions(t) {
    const i = t ? this.getTileGridForProjection(t) : this.tileGrid;
    return i ? i.getResolutions() : null;
  }
  getTile(t, i, s, r, o) {
    return _t();
  }
  getTileGrid() {
    return this.tileGrid;
  }
  getTileGridForProjection(t) {
    return this.tileGrid ? this.tileGrid : h1(t);
  }
  getTilePixelRatio(t) {
    return this.tilePixelRatio_;
  }
  getTilePixelSize(t, i, s) {
    const r = this.getTileGridForProjection(s),
      o = this.getTilePixelRatio(i),
      c = Ke(r.getTileSize(t), this.tmpSize);
    return o == 1 ? c : Bx(c, o, this.tmpSize);
  }
  getTileCoordForTileUrlFunction(t, i) {
    const s = i !== void 0 ? i : this.getProjection(),
      r =
        i !== void 0
          ? this.getTileGridForProjection(s)
          : this.tileGrid || this.getTileGridForProjection(s);
    return (
      this.getWrapX() && s.isGlobal() && (t = sC(r, t, s)), $T(t, r) ? t : null
    );
  }
  clear() {}
  refresh() {
    this.clear(), super.refresh();
  }
}
class pC extends Dn {
  constructor(t, i) {
    super(t), (this.tile = i);
  }
}
const jf = {
  TILELOADSTART: "tileloadstart",
  TILELOADEND: "tileloadend",
  TILELOADERROR: "tileloaderror",
};
class $d extends yC {
  constructor(t) {
    super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tilePixelRatio: t.tilePixelRatio,
      wrapX: t.wrapX,
      transition: t.transition,
      interpolate: t.interpolate,
      key: t.key,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection,
    }),
      (this.generateTileUrlFunction_ =
        this.tileUrlFunction === $d.prototype.tileUrlFunction),
      (this.tileLoadFunction = t.tileLoadFunction),
      t.tileUrlFunction && (this.tileUrlFunction = t.tileUrlFunction),
      (this.urls = null),
      t.urls ? this.setUrls(t.urls) : t.url && this.setUrl(t.url),
      (this.tileLoadingKeys_ = {});
  }
  getTileLoadFunction() {
    return this.tileLoadFunction;
  }
  getTileUrlFunction() {
    return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction
      ? this.tileUrlFunction.bind(this)
      : this.tileUrlFunction;
  }
  getUrls() {
    return this.urls;
  }
  handleTileChange(t) {
    const i = t.target,
      s = It(i),
      r = i.getState();
    let o;
    r == ft.LOADING
      ? ((this.tileLoadingKeys_[s] = !0), (o = jf.TILELOADSTART))
      : s in this.tileLoadingKeys_ &&
        (delete this.tileLoadingKeys_[s],
        (o =
          r == ft.ERROR
            ? jf.TILELOADERROR
            : r == ft.LOADED
              ? jf.TILELOADEND
              : void 0)),
      o != null && this.dispatchEvent(new pC(o, i));
  }
  setTileLoadFunction(t) {
    (this.tileLoadFunction = t), this.changed();
  }
  setTileUrlFunction(t, i) {
    (this.tileUrlFunction = t),
      typeof i < "u" ? this.setKey(i) : this.changed();
  }
  setUrl(t) {
    const i = dC(t);
    (this.urls = i), this.setUrls(i);
  }
  setUrls(t) {
    this.urls = t;
    const i = t.join(`
`);
    this.generateTileUrlFunction_
      ? this.setTileUrlFunction(_C(t, this.tileGrid), i)
      : this.setKey(i);
  }
  tileUrlFunction(t, i, s) {}
}
class vC extends $d {
  constructor(t) {
    super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : EC,
      tilePixelRatio: t.tilePixelRatio,
      tileUrlFunction: t.tileUrlFunction,
      url: t.url,
      urls: t.urls,
      wrapX: t.wrapX,
      transition: t.transition,
      interpolate: t.interpolate !== void 0 ? t.interpolate : !0,
      key: t.key,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection,
    }),
      (this.crossOrigin = t.crossOrigin !== void 0 ? t.crossOrigin : null),
      (this.tileClass = t.tileClass !== void 0 ? t.tileClass : i1),
      (this.tileGridForProjection = {}),
      (this.reprojectionErrorThreshold_ = t.reprojectionErrorThreshold),
      (this.renderReprojectionEdges_ = !1);
  }
  getGutterForProjection(t) {
    return this.getProjection() && t && !xu(this.getProjection(), t)
      ? 0
      : this.getGutter();
  }
  getGutter() {
    return 0;
  }
  getKey() {
    let t = super.getKey();
    return this.getInterpolate() || (t += ":disable-interpolation"), t;
  }
  getTileGridForProjection(t) {
    const i = this.getProjection();
    if (this.tileGrid && (!i || xu(i, t))) return this.tileGrid;
    const s = It(t);
    return (
      s in this.tileGridForProjection ||
        (this.tileGridForProjection[s] = h1(t)),
      this.tileGridForProjection[s]
    );
  }
  createTile_(t, i, s, r, o, c) {
    const h = [t, i, s],
      d = this.getTileCoordForTileUrlFunction(h, o),
      _ = d ? this.tileUrlFunction(d, r, o) : void 0,
      m = new this.tileClass(
        h,
        _ !== void 0 ? ft.IDLE : ft.EMPTY,
        _ !== void 0 ? _ : "",
        this.crossOrigin,
        this.tileLoadFunction,
        this.tileOptions,
      );
    return (
      (m.key = c),
      m.addEventListener(pt.CHANGE, this.handleTileChange.bind(this)),
      m
    );
  }
  getTile(t, i, s, r, o) {
    const c = this.getProjection();
    if (!c || !o || xu(c, o)) return this.getTileInternal(t, i, s, r, c || o);
    const h = [t, i, s],
      d = this.getKey(),
      _ = this.getTileGridForProjection(c),
      m = this.getTileGridForProjection(o),
      y = this.getTileCoordForTileUrlFunction(h, o),
      v = new u1(
        c,
        _,
        o,
        m,
        h,
        y,
        this.getTilePixelRatio(r),
        this.getGutter(),
        (S, x, b, R) => this.getTileInternal(S, x, b, R, c),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.tileOptions,
      );
    return (v.key = d), v;
  }
  getTileInternal(t, i, s, r, o) {
    const c = this.getKey();
    return this.createTile_(t, i, s, r, o, c);
  }
  setRenderReprojectionEdges(t) {
    this.renderReprojectionEdges_ != t &&
      ((this.renderReprojectionEdges_ = t), this.changed());
  }
  setTileGridForProjection(t, i) {
    const s = Kt(t);
    if (s) {
      const r = It(s);
      r in this.tileGridForProjection || (this.tileGridForProjection[r] = i);
    }
  }
}
function EC(l, t) {
  l.getImage().src = t;
}
class SC extends vC {
  constructor(t) {
    t = t || {};
    const i = t.projection !== void 0 ? t.projection : "EPSG:3857",
      s =
        t.tileGrid !== void 0
          ? t.tileGrid
          : rC({
              extent: Jd(i),
              maxResolution: t.maxResolution,
              maxZoom: t.maxZoom,
              minZoom: t.minZoom,
              tileSize: t.tileSize,
            });
    super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      crossOrigin: t.crossOrigin,
      interpolate: t.interpolate,
      projection: i,
      reprojectionErrorThreshold: t.reprojectionErrorThreshold,
      tileGrid: s,
      tileLoadFunction: t.tileLoadFunction,
      tilePixelRatio: t.tilePixelRatio,
      tileUrlFunction: t.tileUrlFunction,
      url: t.url,
      urls: t.urls,
      wrapX: t.wrapX !== void 0 ? t.wrapX : !0,
      transition: t.transition,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection,
    }),
      (this.gutter_ = t.gutter !== void 0 ? t.gutter : 0);
  }
  getGutter() {
    return this.gutter_;
  }
}
const xC =
  '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';
class TC extends SC {
  constructor(t) {
    t = t || {};
    let i;
    t.attributions !== void 0 ? (i = t.attributions) : (i = [xC]);
    const s = t.crossOrigin !== void 0 ? t.crossOrigin : "anonymous",
      r =
        t.url !== void 0
          ? t.url
          : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
    super({
      attributions: i,
      attributionsCollapsible: !1,
      cacheSize: t.cacheSize,
      crossOrigin: s,
      interpolate: t.interpolate,
      maxZoom: t.maxZoom !== void 0 ? t.maxZoom : 19,
      reprojectionErrorThreshold: t.reprojectionErrorThreshold,
      tileLoadFunction: t.tileLoadFunction,
      transition: t.transition,
      url: r,
      wrapX: t.wrapX,
      zDirection: t.zDirection,
    });
  }
}
class CC {
  constructor() {
    (this.dataProjection = void 0),
      (this.defaultFeatureProjection = void 0),
      (this.featureClass = ju),
      (this.supportedMediaTypes = null);
  }
  getReadOptions(t, i) {
    if (i) {
      let s = i.dataProjection ? Kt(i.dataProjection) : this.readProjection(t);
      i.extent &&
        s &&
        s.getUnits() === "tile-pixels" &&
        ((s = Kt(s)), s.setWorldExtent(i.extent)),
        (i = { dataProjection: s, featureProjection: i.featureProjection });
    }
    return this.adaptOptions(i);
  }
  adaptOptions(t) {
    return Object.assign(
      {
        dataProjection: this.dataProjection,
        featureProjection: this.defaultFeatureProjection,
        featureClass: this.featureClass,
      },
      t,
    );
  }
  getType() {
    return _t();
  }
  readFeature(t, i) {
    return _t();
  }
  readFeatures(t, i) {
    return _t();
  }
  readGeometry(t, i) {
    return _t();
  }
  readProjection(t) {
    return _t();
  }
  writeFeature(t, i) {
    return _t();
  }
  writeFeatures(t, i) {
    return _t();
  }
  writeGeometry(t, i) {
    return _t();
  }
}
function tg(l, t, i) {
  const s = i ? Kt(i.featureProjection) : null,
    r = i ? Kt(i.dataProjection) : null;
  let o = l;
  if (s && r && !xu(s, r)) {
    t && (o = l.clone());
    const c = t ? s : r,
      h = t ? r : s;
    c.getUnits() === "tile-pixels"
      ? o.transform(c, h)
      : o.applyTransform(hr(c, h));
  }
  if (t && i && i.decimals !== void 0) {
    const c = Math.pow(10, i.decimals),
      h = function (d) {
        for (let _ = 0, m = d.length; _ < m; ++_)
          d[_] = Math.round(d[_] * c) / c;
        return d;
      };
    o === l && (o = l.clone()), o.applyTransform(h);
  }
  return o;
}
const RC = {
  Point: el,
  LineString: fr,
  Polygon: _s,
  MultiPoint: nc,
  MultiLineString: Nu,
  MultiPolygon: Gu,
};
function bC(l, t, i) {
  return Array.isArray(t[0])
    ? (Ep(l, 0, t, i) || ((l = l.slice()), ed(l, 0, t, i)), l)
    : (Ld(l, 0, t, i) || ((l = l.slice()), Mu(l, 0, t, i)), l);
}
function d1(l, t) {
  var o;
  const i = l.geometry;
  if (!i) return [];
  if (Array.isArray(i)) return i.map((c) => d1({ ...l, geometry: c })).flat();
  const s = i.type === "MultiPolygon" ? "Polygon" : i.type;
  if (s === "GeometryCollection" || s === "Circle")
    throw new Error("Unsupported geometry type: " + s);
  const r = i.layout.length;
  return tg(
    new si(
      s,
      s === "Polygon" ? bC(i.flatCoordinates, i.ends, r) : i.flatCoordinates,
      (o = i.ends) == null ? void 0 : o.flat(),
      r,
      l.properties || {},
      l.id,
    ).enableSimplifyTransformed(),
    !1,
    t,
  );
}
function eg(l, t) {
  if (!l) return null;
  if (Array.isArray(l)) {
    const s = l.map((r) => eg(r, t));
    return new Iu(s);
  }
  const i = RC[l.type];
  return tg(new i(l.flatCoordinates, l.layout || "XY", l.ends), !1, t);
}
class AC extends CC {
  constructor() {
    super();
  }
  getType() {
    return "json";
  }
  readFeature(t, i) {
    return this.readFeatureFromObject(Eu(t), this.getReadOptions(t, i));
  }
  readFeatures(t, i) {
    return this.readFeaturesFromObject(Eu(t), this.getReadOptions(t, i));
  }
  readFeatureFromObject(t, i) {
    return _t();
  }
  readFeaturesFromObject(t, i) {
    return _t();
  }
  readGeometry(t, i) {
    return this.readGeometryFromObject(Eu(t), this.getReadOptions(t, i));
  }
  readGeometryFromObject(t, i) {
    return _t();
  }
  readProjection(t) {
    return this.readProjectionFromObject(Eu(t));
  }
  readProjectionFromObject(t) {
    return _t();
  }
  writeFeature(t, i) {
    return JSON.stringify(this.writeFeatureObject(t, i));
  }
  writeFeatureObject(t, i) {
    return _t();
  }
  writeFeatures(t, i) {
    return JSON.stringify(this.writeFeaturesObject(t, i));
  }
  writeFeaturesObject(t, i) {
    return _t();
  }
  writeGeometry(t, i) {
    return JSON.stringify(this.writeGeometryObject(t, i));
  }
  writeGeometryObject(t, i) {
    return _t();
  }
}
function Eu(l) {
  if (typeof l == "string") {
    const t = JSON.parse(l);
    return t || null;
  }
  return l !== null ? l : null;
}
class jy extends AC {
  constructor(t) {
    (t = t || {}),
      super(),
      (this.dataProjection = Kt(
        t.dataProjection ? t.dataProjection : "EPSG:4326",
      )),
      t.featureProjection &&
        (this.defaultFeatureProjection = Kt(t.featureProjection)),
      t.featureClass && (this.featureClass = t.featureClass),
      (this.geometryName_ = t.geometryName),
      (this.extractGeometryName_ = t.extractGeometryName),
      (this.supportedMediaTypes = [
        "application/geo+json",
        "application/vnd.geo+json",
      ]);
  }
  readFeatureFromObject(t, i) {
    let s = null;
    t.type === "Feature"
      ? (s = t)
      : (s = { type: "Feature", geometry: t, properties: null });
    const r = ig(s.geometry);
    if (this.featureClass === si)
      return d1({ geometry: r, id: s.id, properties: s.properties }, i);
    const o = new ju();
    return (
      this.geometryName_
        ? o.setGeometryName(this.geometryName_)
        : this.extractGeometryName_ &&
          s.geometry_name &&
          o.setGeometryName(s.geometry_name),
      o.setGeometry(eg(r, i)),
      "id" in s && o.setId(s.id),
      s.properties && o.setProperties(s.properties, !0),
      o
    );
  }
  readFeaturesFromObject(t, i) {
    const s = t;
    let r = null;
    if (s.type === "FeatureCollection") {
      const o = t;
      r = [];
      const c = o.features;
      for (let h = 0, d = c.length; h < d; ++h) {
        const _ = this.readFeatureFromObject(c[h], i);
        _ && r.push(_);
      }
    } else r = [this.readFeatureFromObject(t, i)];
    return r.flat();
  }
  readGeometryFromObject(t, i) {
    return wC(t, i);
  }
  readProjectionFromObject(t) {
    const i = t.crs;
    let s;
    if (i)
      if (i.type == "name") s = Kt(i.properties.name);
      else if (i.type === "EPSG") s = Kt("EPSG:" + i.properties.code);
      else throw new Error("Unknown SRS type");
    else s = this.dataProjection;
    return s;
  }
  writeFeatureObject(t, i) {
    i = this.adaptOptions(i);
    const s = { type: "Feature", geometry: null, properties: null },
      r = t.getId();
    if ((r !== void 0 && (s.id = r), !t.hasProperties())) return s;
    const o = t.getProperties(),
      c = t.getGeometry();
    return (
      c && ((s.geometry = cd(c, i)), delete o[t.getGeometryName()]),
      tl(o) || (s.properties = o),
      s
    );
  }
  writeFeaturesObject(t, i) {
    i = this.adaptOptions(i);
    const s = [];
    for (let r = 0, o = t.length; r < o; ++r)
      s.push(this.writeFeatureObject(t[r], i));
    return { type: "FeatureCollection", features: s };
  }
  writeGeometryObject(t, i) {
    return cd(t, this.adaptOptions(i));
  }
}
function ig(l, t) {
  if (!l) return null;
  let i;
  switch (l.type) {
    case "Point": {
      i = OC(l);
      break;
    }
    case "LineString": {
      i = DC(l);
      break;
    }
    case "Polygon": {
      i = NC(l);
      break;
    }
    case "MultiPoint": {
      i = zC(l);
      break;
    }
    case "MultiLineString": {
      i = LC(l);
      break;
    }
    case "MultiPolygon": {
      i = IC(l);
      break;
    }
    case "GeometryCollection": {
      i = MC(l);
      break;
    }
    default:
      throw new Error("Unsupported GeoJSON type: " + l.type);
  }
  return i;
}
function wC(l, t) {
  const i = ig(l);
  return eg(i, t);
}
function MC(l, t) {
  return l.geometries.map(function (s) {
    return ig(s);
  });
}
function OC(l) {
  const t = l.coordinates;
  return { type: "Point", flatCoordinates: t, layout: rl(t.length) };
}
function DC(l) {
  var s;
  const t = l.coordinates,
    i = t.flat();
  return {
    type: "LineString",
    flatCoordinates: i,
    ends: [i.length],
    layout: rl(((s = t[0]) == null ? void 0 : s.length) || 2),
  };
}
function LC(l) {
  var o, c;
  const t = l.coordinates,
    i =
      ((c = (o = t[0]) == null ? void 0 : o[0]) == null ? void 0 : c.length) ||
      2,
    s = [],
    r = Za(s, 0, t, i);
  return {
    type: "MultiLineString",
    flatCoordinates: s,
    ends: r,
    layout: rl(i),
  };
}
function zC(l) {
  var i;
  const t = l.coordinates;
  return {
    type: "MultiPoint",
    flatCoordinates: t.flat(),
    layout: rl(((i = t[0]) == null ? void 0 : i.length) || 2),
  };
}
function IC(l) {
  var o, c;
  const t = l.coordinates,
    i = [],
    s =
      ((c = (o = t[0]) == null ? void 0 : o[0]) == null
        ? void 0
        : c[0].length) || 2,
    r = gp(i, 0, t, s);
  return { type: "MultiPolygon", flatCoordinates: i, ends: r, layout: rl(s) };
}
function NC(l) {
  var o, c;
  const t = l.coordinates,
    i = [],
    s = (c = (o = t[0]) == null ? void 0 : o[0]) == null ? void 0 : c.length,
    r = Za(i, 0, t, s);
  return { type: "Polygon", flatCoordinates: i, ends: r, layout: rl(s) };
}
function cd(l, t) {
  l = tg(l, !0, t);
  const i = l.getType();
  let s;
  switch (i) {
    case "Point": {
      s = kC(l);
      break;
    }
    case "LineString": {
      s = FC(l);
      break;
    }
    case "Polygon": {
      s = BC(l, t);
      break;
    }
    case "MultiPoint": {
      s = XC(l);
      break;
    }
    case "MultiLineString": {
      s = UC(l);
      break;
    }
    case "MultiPolygon": {
      s = YC(l, t);
      break;
    }
    case "GeometryCollection": {
      s = GC(l, t);
      break;
    }
    case "Circle": {
      s = { type: "GeometryCollection", geometries: [] };
      break;
    }
    default:
      throw new Error("Unsupported geometry type: " + i);
  }
  return s;
}
function GC(l, t) {
  return (
    (t = Object.assign({}, t)),
    delete t.featureProjection,
    {
      type: "GeometryCollection",
      geometries: l.getGeometriesArray().map(function (s) {
        return cd(s, t);
      }),
    }
  );
}
function FC(l, t) {
  return { type: "LineString", coordinates: l.getCoordinates() };
}
function UC(l, t) {
  return { type: "MultiLineString", coordinates: l.getCoordinates() };
}
function XC(l, t) {
  return { type: "MultiPoint", coordinates: l.getCoordinates() };
}
function YC(l, t) {
  let i;
  return (
    t && (i = t.rightHanded),
    { type: "MultiPolygon", coordinates: l.getCoordinates(i) }
  );
}
function kC(l, t) {
  return { type: "Point", coordinates: l.getCoordinates() };
}
function BC(l, t) {
  let i;
  return (
    t && (i = t.rightHanded),
    { type: "Polygon", coordinates: l.getCoordinates(i) }
  );
}
OS();
function HC() {
  const l = Su.useRef(null),
    [t, i] = Su.useState(null),
    s = new py({
      url: "http://localhost:5174/kws2100-arbeidskrav-Nadahm3d/geojson/Offentlige tilfluktsrom.geojson",
      format: new jy(),
    }),
    r = new Uy({ source: s }),
    o = new XT({
      view: new Vi({ center: [10.8, 59.9], zoom: 13 }),
      layers: [
        new nC({ source: new TC() }),
        r,
        new Uy({
          source: new py({
            url: "http://localhost:5174/kws2100-arbeidskrav-Nadahm3d/geojson/Sivilforsvarsdistrikter.geojson",
            format: new jy(),
          }),
        }),
      ],
    });
  return (
    Su.useEffect(
      () => (
        o.setTarget(l.current),
        s.once("change", () => {
          s.getState() === "ready" && console.log("✅ Shelter layer loaded!");
        }),
        o.on("singleclick", (c) => {
          console.log("📌 Click event at:", c.coordinate);
          let h = !1;
          o.forEachFeatureAtPixel(c.pixel, (d) => {
            if (d.getGeometry() instanceof el) {
              const _ = d.getProperties();
              console.log("🎯 Clicked feature:", _),
                i({
                  romnr: _.romnr || 0,
                  adresse: _.adresse || "Ukjent adresse",
                  plasser: _.plasser || 0,
                }),
                (h = !0);
            }
          }),
            h || i(null);
        }),
        () => {
          o.setTarget(void 0);
        }
      ),
      [],
    ),
    console.log("Selected Shelter State:", t),
    ii.createElement(
      "div",
      {
        className:
          "relative flex flex-col items-center justify-center h-screen bg-blue-50 p-6",
      },
      ii.createElement(
        "h1",
        { className: "text-2xl font-bold text-gray-700 mb-4" },
        "Kartapplikasjon",
      ),
      ii.createElement("div", {
        ref: l,
        className:
          "w-[80vw] h-[70vh] rounded-xl shadow-xl border-2 border-blue-400 overflow-hidden cursor-grab",
      }),
      t &&
        ii.createElement(
          "aside",
          {
            className:
              "absolute top-10 right-10 bg-white p-4 rounded-lg shadow-lg border border-gray-300 z-50",
          },
          ii.createElement(
            "h2",
            { className: "text-lg font-semibold" },
            "Tilfluktsrom",
          ),
          ii.createElement(
            "p",
            null,
            ii.createElement("strong", null, "Romnummer:"),
            " ",
            t.romnr,
          ),
          ii.createElement(
            "p",
            null,
            ii.createElement("strong", null, "Adresse:"),
            " ",
            t.adresse,
          ),
          ii.createElement(
            "p",
            null,
            ii.createElement("strong", null, "Kapasitet:"),
            " ",
            t.plasser,
          ),
          ii.createElement(
            "button",
            {
              onClick: () => i(null),
              className: "mt-2 bg-red-500 text-white px-4 py-2 rounded-lg",
            },
            "Lukk",
          ),
        ),
    )
  );
}
IE.createRoot(document.getElementById("root")).render(
  ii.createElement(HC, null),
);
