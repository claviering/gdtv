// Assume add.wasm file exists that contains a single function adding 2 provided arguments
const https = require('https');
const fs = require("fs");
const wasmBuffer = fs.readFileSync("download.wasm");

let location = {
  host: "www.gdtv.cn",
  hostname: "www.gdtv.cn",
  href: "https://www.gdtv.cn/tvChannelDetail/43",
  origin: "https://www.gdtv.cn",
  protocol: "https:",
  toString: function () {
    return this.href
  }
};
let self = {
    self: {
        document: true,
        location
    }
};
let window = {
    window: {
        document: true,
        location
    }
};
let B = {};
function g() {
    g = function() {
        return A
    }
    ;
    var A = {}
      , B = Object.prototype
      , Q = B.hasOwnProperty
      , C = Object.defineProperty || function(A, g, I) {
        A[g] = I.value
    }
      , E = "function" == typeof Symbol ? Symbol : {}
      , D = E.iterator || "@@iterator"
      , w = E.asyncIterator || "@@asyncIterator"
      , M = E.toStringTag || "@@toStringTag";
    function i(A, g, I) {
        return Object.defineProperty(A, g, {
            value: I,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }),
        A[g]
    }
    try {
        i({}, "")
    } catch (A) {
        i = function(A, g, I) {
            return A[g] = I
        }
    }
    function o(A, g, I, B) {
        var Q = g && g.prototype instanceof N ? g : N
          , E = Object.create(Q.prototype)
          , D = new R(B || []);
        return C(E, "_invoke", {
            value: c(A, I, D)
        }),
        E
    }
    function G(A, g, I) {
        try {
            return {
                type: "normal",
                arg: A.call(g, I)
            }
        } catch (A) {
            return {
                type: "throw",
                arg: A
            }
        }
    }
    A.wrap = o;
    var Y = {};
    function N() {}
    function J() {}
    function k() {}
    var K = {};
    i(K, D, (function() {
        return this
    }
    ));
    var h = Object.getPrototypeOf
      , y = h && h(h(a([])));
    y && y !== B && Q.call(y, D) && (K = y);
    var F = k.prototype = N.prototype = Object.create(K);
    function L(A) {
        ["next", "throw", "return"].forEach((function(g) {
            i(A, g, (function(A) {
                return this._invoke(g, A)
            }
            ))
        }
        ))
    }
    function U(A, g) {
        function B(C, E, D, w) {
            var M = G(A[C], A, E);
            if ("throw" !== M.type) {
                var i = M.arg
                  , o = i.value;
                return o && "object" == I(o) && Q.call(o, "__await") ? g.resolve(o.__await).then((function(A) {
                    B("next", A, D, w)
                }
                ), (function(A) {
                    B("throw", A, D, w)
                }
                )) : g.resolve(o).then((function(A) {
                    i.value = A,
                    D(i)
                }
                ), (function(A) {
                    return B("throw", A, D, w)
                }
                ))
            }
            w(M.arg)
        }
        var E;
        C(this, "_invoke", {
            value: function(A, I) {
                function Q() {
                    return new g((function(g, Q) {
                        B(A, I, g, Q)
                    }
                    ))
                }
                return E = E ? E.then(Q, Q) : Q()
            }
        })
    }
    function c(A, g, I) {
        var B = "suspendedStart";
        return function(Q, C) {
            if ("executing" === B)
                throw new Error("Generator is already running");
            if ("completed" === B) {
                if ("throw" === Q)
                    throw C;
                return q()
            }
            for (I.method = Q,
            I.arg = C; ; ) {
                var E = I.delegate;
                if (E) {
                    var D = s(E, I);
                    if (D) {
                        if (D === Y)
                            continue;
                        return D
                    }
                }
                if ("next" === I.method)
                    I.sent = I._sent = I.arg;
                else if ("throw" === I.method) {
                    if ("suspendedStart" === B)
                        throw B = "completed",
                        I.arg;
                    I.dispatchException(I.arg)
                } else
                    "return" === I.method && I.abrupt("return", I.arg);
                B = "executing";
                var w = G(A, g, I);
                if ("normal" === w.type) {
                    if (B = I.done ? "completed" : "suspendedYield",
                    w.arg === Y)
                        continue;
                    return {
                        value: w.arg,
                        done: I.done
                    }
                }
                "throw" === w.type && (B = "completed",
                I.method = "throw",
                I.arg = w.arg)
            }
        }
    }
    function s(A, g) {
        var I = g.method
          , B = A.iterator[I];
        if (void 0 === B)
            return g.delegate = null,
            "throw" === I && A.iterator.return && (g.method = "return",
            g.arg = void 0,
            s(A, g),
            "throw" === g.method) || "return" !== I && (g.method = "throw",
            g.arg = new TypeError("The iterator does not provide a '" + I + "' method")),
            Y;
        var Q = G(B, A.iterator, g.arg);
        if ("throw" === Q.type)
            return g.method = "throw",
            g.arg = Q.arg,
            g.delegate = null,
            Y;
        var C = Q.arg;
        return C ? C.done ? (g[A.resultName] = C.value,
        g.next = A.nextLoc,
        "return" !== g.method && (g.method = "next",
        g.arg = void 0),
        g.delegate = null,
        Y) : C : (g.method = "throw",
        g.arg = new TypeError("iterator result is not an object"),
        g.delegate = null,
        Y)
    }
    function H(A) {
        var g = {
            tryLoc: A[0]
        };
        1 in A && (g.catchLoc = A[1]),
        2 in A && (g.finallyLoc = A[2],
        g.afterLoc = A[3]),
        this.tryEntries.push(g)
    }
    function S(A) {
        var g = A.completion || {};
        g.type = "normal",
        delete g.arg,
        A.completion = g
    }
    function R(A) {
        this.tryEntries = [{
            tryLoc: "root"
        }],
        A.forEach(H, this),
        this.reset(!0)
    }
    function a(A) {
        if (A) {
            var g = A[D];
            if (g)
                return g.call(A);
            if ("function" == typeof A.next)
                return A;
            if (!isNaN(A.length)) {
                var I = -1
                  , B = function g() {
                    for (; ++I < A.length; )
                        if (Q.call(A, I))
                            return g.value = A[I],
                            g.done = !1,
                            g;
                    return g.value = void 0,
                    g.done = !0,
                    g
                };
                return B.next = B
            }
        }
        return {
            next: q
        }
    }
    function q() {
        return {
            value: void 0,
            done: !0
        }
    }
    return J.prototype = k,
    C(F, "constructor", {
        value: k,
        configurable: !0
    }),
    C(k, "constructor", {
        value: J,
        configurable: !0
    }),
    J.displayName = i(k, M, "GeneratorFunction"),
    A.isGeneratorFunction = function(A) {
        var g = "function" == typeof A && A.constructor;
        return !!g && (g === J || "GeneratorFunction" === (g.displayName || g.name))
    }
    ,
    A.mark = function(A) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(A, k) : (A.__proto__ = k,
        i(A, M, "GeneratorFunction")),
        A.prototype = Object.create(F),
        A
    }
    ,
    A.awrap = function(A) {
        return {
            __await: A
        }
    }
    ,
    L(U.prototype),
    i(U.prototype, w, (function() {
        return this
    }
    )),
    A.AsyncIterator = U,
    A.async = function(g, I, B, Q, C) {
        void 0 === C && (C = Promise);
        var E = new U(o(g, I, B, Q),C);
        return A.isGeneratorFunction(I) ? E : E.next().then((function(A) {
            return A.done ? A.value : E.next()
        }
        ))
    }
    ,
    L(F),
    i(F, M, "Generator"),
    i(F, D, (function() {
        return this
    }
    )),
    i(F, "toString", (function() {
        return "[object Generator]"
    }
    )),
    A.keys = function(A) {
        var g = Object(A)
          , I = [];
        for (var B in g)
            I.push(B);
        return I.reverse(),
        function A() {
            for (; I.length; ) {
                var B = I.pop();
                if (B in g)
                    return A.value = B,
                    A.done = !1,
                    A
            }
            return A.done = !0,
            A
        }
    }
    ,
    A.values = a,
    R.prototype = {
        constructor: R,
        reset: function(A) {
            if (this.prev = 0,
            this.next = 0,
            this.sent = this._sent = void 0,
            this.done = !1,
            this.delegate = null,
            this.method = "next",
            this.arg = void 0,
            this.tryEntries.forEach(S),
            !A)
                for (var g in this)
                    "t" === g.charAt(0) && Q.call(this, g) && !isNaN(+g.slice(1)) && (this[g] = void 0)
        },
        stop: function() {
            this.done = !0;
            var A = this.tryEntries[0].completion;
            if ("throw" === A.type)
                throw A.arg;
            return this.rval
        },
        dispatchException: function(A) {
            if (this.done)
                throw A;
            var g = this;
            function I(I, B) {
                return E.type = "throw",
                E.arg = A,
                g.next = I,
                B && (g.method = "next",
                g.arg = void 0),
                !!B
            }
            for (var B = this.tryEntries.length - 1; B >= 0; --B) {
                var C = this.tryEntries[B]
                  , E = C.completion;
                if ("root" === C.tryLoc)
                    return I("end");
                if (C.tryLoc <= this.prev) {
                    var D = Q.call(C, "catchLoc")
                      , w = Q.call(C, "finallyLoc");
                    if (D && w) {
                        if (this.prev < C.catchLoc)
                            return I(C.catchLoc, !0);
                        if (this.prev < C.finallyLoc)
                            return I(C.finallyLoc)
                    } else if (D) {
                        if (this.prev < C.catchLoc)
                            return I(C.catchLoc, !0)
                    } else {
                        if (!w)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < C.finallyLoc)
                            return I(C.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(A, g) {
            for (var I = this.tryEntries.length - 1; I >= 0; --I) {
                var B = this.tryEntries[I];
                if (B.tryLoc <= this.prev && Q.call(B, "finallyLoc") && this.prev < B.finallyLoc) {
                    var C = B;
                    break
                }
            }
            C && ("break" === A || "continue" === A) && C.tryLoc <= g && g <= C.finallyLoc && (C = null);
            var E = C ? C.completion : {};
            return E.type = A,
            E.arg = g,
            C ? (this.method = "next",
            this.next = C.finallyLoc,
            Y) : this.complete(E)
        },
        complete: function(A, g) {
            if ("throw" === A.type)
                throw A.arg;
            return "break" === A.type || "continue" === A.type ? this.next = A.arg : "return" === A.type ? (this.rval = this.arg = A.arg,
            this.method = "return",
            this.next = "end") : "normal" === A.type && g && (this.next = g),
            Y
        },
        finish: function(A) {
            for (var g = this.tryEntries.length - 1; g >= 0; --g) {
                var I = this.tryEntries[g];
                if (I.finallyLoc === A)
                    return this.complete(I.completion, I.afterLoc),
                    S(I),
                    Y
            }
        },
        catch: function(A) {
            for (var g = this.tryEntries.length - 1; g >= 0; --g) {
                var I = this.tryEntries[g];
                if (I.tryLoc === A) {
                    var B = I.completion;
                    if ("throw" === B.type) {
                        var Q = B.arg;
                        S(I)
                    }
                    return Q
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(A, g, I) {
            return this.delegate = {
                iterator: a(A),
                resultName: g,
                nextLoc: I
            },
            "next" === this.method && (this.arg = void 0),
            Y
        }
    },
    A
}
function I(A) {
    return I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
        return typeof A
    }
    : function(A) {
        return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
    }
    ,
    I(A)
}
function Q(A, g, I, B, Q, C, E) {
    try {
        var D = A[C](E)
          , w = D.value
    } catch (A) {
        return void I(A)
    }
    D.done ? g(w) : Promise.resolve(w).then(B, Q)
}
function C(A) {
    return function() {
        var g = this
          , I = arguments;
        return new Promise((function(B, C) {
            var E = A.apply(g, I);
            function D(A) {
                Q(E, B, C, D, w, "next", A)
            }
            function w(A) {
                Q(E, B, C, D, w, "throw", A)
            }
            D(void 0)
        }
        ))
    }
}
function E(A, g, I) {
    return E = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (A) {
            return !1
        }
    }() ? Reflect.construct.bind() : function(A, g, I) {
        var B = [null];
        B.push.apply(B, g);
        var Q = new (Function.bind.apply(A, B));
        return I && D(Q, I.prototype),
        Q
    }
    ,
    E.apply(null, arguments)
}
function D(A, g) {
    return D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(A, g) {
        return A.__proto__ = g,
        A
    }
    ,
    D(A, g)
}
var w;
Object.defineProperty(B, "__esModule", {
    value: !0
}),
B.a = function(A, g, I, B, Q, C) {
    try {
        var E = L(A, w.__wbindgen_export_0, w.__wbindgen_export_1)
          , D = h
          , i = L(g, w.__wbindgen_export_0, w.__wbindgen_export_1)
          , o = h
          , Y = L(I, w.__wbindgen_export_0, w.__wbindgen_export_1)
          , N = h
          , J = L(B, w.__wbindgen_export_0, w.__wbindgen_export_1)
          , k = h
          , K = L(Q, w.__wbindgen_export_0, w.__wbindgen_export_1)
          , y = h;
        return G(w.a(E, D, i, o, Y, N, J, k, K, y, function(A) {
            if (1 == H)
                throw new Error("out of js stack");
            return M[--H] = A,
            H
        }(C)))
    } finally {
        M[H++] = void 0
    }
}
,
B.default = void 0,
B.greet = function(A) {
    var g, I;
    try {
        var B = w.__wbindgen_add_to_stack_pointer(-16)
          , Q = L(A, w.__wbindgen_export_0, w.__wbindgen_export_1)
          , C = h;
        w.greet(B, Q, C);
        var E = s()[B / 4 + 0]
          , D = s()[B / 4 + 1];
        return g = E,
        I = D,
        K(E, D)
    } finally {
        w.__wbindgen_add_to_stack_pointer(16),
        w.__wbindgen_export_2(g, I, 1)
    }
}
,
B.initSync = function(A) {
    if (void 0 !== w)
        return w;
    var g = t();
    return A instanceof WebAssembly.Module || (A = new WebAssembly.Module(A)),
    O(new WebAssembly.Instance(A,g), A)
}
;
var M = new Array(128).fill(void 0);
function i(A) {
    return M[A]
}
M.push(void 0, null, !0, !1);
var o = M.length;
function G(A) {
    var g = i(A);
    return function(A) {
        A < 132 || (M[A] = o,
        o = A)
    }(A),
    g
}
function Y(A) {
    o === M.length && M.push(M.length + 1);
    var g = o;
    return o = M[g],
    M[g] = A,
    g
}
var N = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8",{
    ignoreBOM: !0,
    fatal: !0
}) : {
    decode: function() {
        throw Error("TextDecoder not available")
    }
};
"undefined" != typeof TextDecoder && N.decode();
var J = null;
function k() {
    return null !== J && 0 !== J.byteLength || (J = new Uint8Array(w.memory.buffer)),
    J
}
function K(A, g) {
    return A >>>= 0,
    N.decode(k().subarray(A, A + g))
}
var h = 0
  , y = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
    encode: function() {
        throw Error("TextEncoder not available")
    }
}
  , F = "function" == typeof y.encodeInto ? function(A, g) {
    return y.encodeInto(A, g)
}
: function(A, g) {
    var I = y.encode(A);
    return g.set(I),
    {
        read: A.length,
        written: I.length
    }
}
;
function L(A, g, I) {
    if (void 0 === I) {
        var B = y.encode(A)
          , Q = g(B.length, 1) >>> 0;
        return k().subarray(Q, Q + B.length).set(B),
        h = B.length,
        Q
    }
    for (var C = A.length, E = g(C, 1) >>> 0, D = k(), w = 0; w < C; w++) {
        var M = A.charCodeAt(w);
        if (M > 127)
            break;
        D[E + w] = M
    }
    if (w !== C) {
        0 !== w && (A = A.slice(w)),
        E = I(E, C, C = w + 3 * A.length, 1) >>> 0;
        var i = k().subarray(E + w, E + C);
        E = I(E, C, w += F(A, i).written, 1) >>> 0
    }
    return h = w,
    E
}
function U(A) {
    return null == A
}
var c = null;
function s() {
    return null !== c && 0 !== c.byteLength || (c = new Int32Array(w.memory.buffer)),
    c
}
var H = 128;
function S() {
    for (var A = arguments.length, g = new Array(A), I = 0; I < A; I++)
        g[I] = arguments[I];
    var B = function() {
        try {
            return E(P, g)
        } catch (A) {
            return function() {
                return null
            }
        }
    }();
    return B.toString = function() {
        return ""
    }
    ,
    B
}
function R(A, g) {
    try {
        return A.apply(this, g)
    } catch (A) {
        w.__wbindgen_export_3(Y(A))
    }
}
function a(A, g) {
    return q.apply(this, arguments)
}
function q() {
    return q = C(g().mark((function A(I, B) {
        var Q, C;
        return g().wrap((function(A) {
            for (; ; )
                switch (A.prev = A.next) {
                case 0:
                    if (!("function" == typeof Response && I instanceof Response)) {
                        A.next = 23;
                        break
                    }
                    if ("function" != typeof WebAssembly.instantiateStreaming) {
                        A.next = 15;
                        break
                    }
                    return A.prev = 2,
                    A.next = 5,
                    WebAssembly.instantiateStreaming(I, B);
                case 5:
                case 20:
                    return A.abrupt("return", A.sent);
                case 8:
                    if (A.prev = 8,
                    A.t0 = A.catch(2),
                    "application/wasm" == I.headers.get("Content-Type")) {
                        A.next = 14;
                        break
                    }
                    A.next = 15;
                    break;
                case 14:
                    throw A.t0;
                case 15:
                    return A.next = 17,
                    I.arrayBuffer();
                case 17:
                    return Q = A.sent,
                    A.next = 20,
                    WebAssembly.instantiate(Q, B);
                case 23:
                    return A.next = 25,
                    WebAssembly.instantiate(I, B);
                case 25:
                    if (!((C = A.sent)instanceof WebAssembly.Instance)) {
                        A.next = 30;
                        break
                    }
                    return A.abrupt("return", {
                        instance: C,
                        module: I
                    });
                case 30:
                    return A.abrupt("return", C);
                case 31:
                case "end":
                    return A.stop()
                }
        }
        ), A, null, [[2, 8]])
    }
    ))),
    q.apply(this, arguments)
}
function t() {
    var g = {
        wbg: {}
    };
    return g.wbg.__wbindgen_object_drop_ref = function(A) {
        G(A)
    }
    ,
    g.wbg.__wbg_self_1ff1d729e9aae938 = function() {
        return R((function() {
            return Y(self.self)
        }
        ), arguments)
    }
    ,
    g.wbg.__wbg_window_5f4faef6c12b79ec = function() {
        return R((function() {
            return Y(window.window)
        }
        ), arguments)
    }
    ,
    g.wbg.__wbg_globalThis_1d39714405582d3c = function() {
        return R((function() {
            return Y(globalThis.globalThis)
        }
        ), arguments)
    }
    ,
    g.wbg.__wbg_global_651f05c6a0944d1c = function() {
        return R((function() {
            return Y(A.global)
        }
        ), arguments)
    }
    ,
    g.wbg.__wbindgen_is_undefined = function(A) {
        return void 0 === i(A)
    }
    ,
    g.wbg.__wbg_newnoargs_581967eacc0e2604 = function(A, g) {
        return Y(S(K(A, g)))
    }
    ,
    g.wbg.__wbg_call_cb65541d95d71282 = function() {
        return R((function(A, g) {
            return Y(i(A).call(i(g)))
        }
        ), arguments)
    }
    ,
    g.wbg.__wbindgen_object_clone_ref = function(A) {
        return Y(i(A))
    }
    ,
    g.wbg.__wbg_instanceof_Window_9029196b662bc42a = function(A) {
        var g;
        try {
            g = true
        } catch (A) {
            g = !1
        }
        return g
    }
    ,
    g.wbg.__wbg_document_f7ace2b956f30a4f = function(A) {
        var g = i(A).document;
        return U(g) ? 0 : Y(g)
    }
    ,
    g.wbg.__wbg_location_56243dba507f472d = function(A) {
        return Y(i(A).location)
    }
    ,
    g.wbg.__wbg_host_15090f3de0544fea = function() {
        return R((function(A, g) {
            var I = L(i(g).host, w.__wbindgen_export_0, w.__wbindgen_export_1)
              , B = h;
            s()[A / 4 + 1] = B,
            s()[A / 4 + 0] = I
        }
        ), arguments)
    }
    ,
    g.wbg.__wbg_origin_50aa482fa6784a0a = function() {
        return R((function(A, g) {
            var I = L(i(g).origin, w.__wbindgen_export_0, w.__wbindgen_export_1)
              , B = h;
            s()[A / 4 + 1] = B,
            s()[A / 4 + 0] = I
        }
        ), arguments)
    }
    ,
    g.wbg.__wbg_href_d62a28e4fc1ab948 = function() {
        return R((function(A, g) {
            var I = L(i(g).href, w.__wbindgen_export_0, w.__wbindgen_export_1)
              , B = h;
            s()[A / 4 + 1] = B,
            s()[A / 4 + 0] = I
        }
        ), arguments)
    }
    ,
    g.wbg.__wbg_newwithargs_a0432b7780c1dfa1 = function(A, g, I, B) {
        return Y(S(K(A, g), K(I, B)))
    }
    ,
    g.wbg.__wbindgen_string_new = function(A, g) {
        return Y(K(A, g))
    }
    ,
    g.wbg.__wbg_call_01734de55d61e11d = function() {
        return R((function(A, g, I) {
            return Y(i(A).call(i(g), i(I)))
        }
        ), arguments)
    }
    ,
    g.wbg.__wbindgen_string_get = function(A, g) {
        var I = i(g)
          , B = "string" == typeof I ? I : void 0
          , Q = U(B) ? 0 : L(B, w.__wbindgen_export_0, w.__wbindgen_export_1)
          , C = h;
        s()[A / 4 + 1] = C,
        s()[A / 4 + 0] = Q
    }
    ,
    g.wbg.__wbg_eval_8c72ad5eafe427f2 = function() {
        return R((function(A, g) {
            return Y(x(K(A, g)))
        }
        ), arguments)
    }
    ,
    g.wbg.__wbindgen_typeof = function(A) {
        return Y(I(i(A)))
    }
    ,
    g.wbg.__wbindgen_boolean_get = function(A) {
        var g = i(A);
        return "boolean" == typeof g ? g ? 1 : 0 : 2
    }
    ,
    g.wbg.__wbg_new_56693dbed0c32988 = function() {
        return Y(new Map)
    }
    ,
    g.wbg.__wbg_set_bedc3d02d0f05eb0 = function(A, g, I) {
        return Y(i(A).set(i(g), i(I)))
    }
    ,
    g.wbg.__wbindgen_number_new = function(A) {
        return Y(A)
    }
    ,
    g.wbg.__wbg_new0_c0be7df4b6bd481f = function() {
        return Y(new Date)
    }
    ,
    g.wbg.__wbg_getTime_5e2054f832d82ec9 = function(A) {
        return i(A).getTime()
    }
    ,
    g.wbg.__wbg_new_cd59bfc8881f487b = function(A) {
        return Y(new Date(i(A)))
    }
    ,
    g.wbg.__wbg_getTimezoneOffset_8aee3445f323973e = function(A) {
        return i(A).getTimezoneOffset()
    }
    ,
    g.wbg.__wbindgen_throw = function(A, g) {
        throw new Error(K(A, g))
    }
    ,
    g
}
function O(A, g) {
    return w = A.exports,
    r.__wbindgen_wasm_module = g,
    c = null,
    J = null,
    w
}
function r(A) {
    return n.apply(this, arguments)
}

const importObject = t();

WebAssembly.instantiate(wasmBuffer, importObject).then((obj) => {
  O(obj.instance, obj.module);
  const url = "https://gdtv-api.gdtv.cn/api/tvColumn/v1/tvColumn/43";
  var header = new Map([
    ["Content-Type", "application/json"],
    ["X-ITOUCHTV-Ca-Timestamp", 1728981010913],
    ["X-ITOUCHTV-Ca-Signature", "RDoVy8LrsOfJis8h4T5VF1FucYkF117GZSRl+KNy/XY="],
    ["X-ITOUCHTV-Ca-Key", "89541943007407288657755311868534"],
    ["X-ITOUCHTV-CLIENT", "WEB_PC"],
    ["X-ITOUCHTV-DEVICE-ID", "WEB_413b8160-696b-11ee-8e8e-87c7746ce010"],
  ]);
//   var header = B.a(
//     "GET",
//     "https://gdtv-api.gdtv.cn/api/tvColumn/v1/tvColumn/43",
//     "WEB_413b8160-696b-11ee-8e8e-87c7746ce010",
//     "WEB_PC",
//     "",
//     undefined
//   );
  let headers = {};
  for (const [key, value] of header) {
    headers[key] = value;
  }
  console.log("headers", headers);
  https
    .get(url, { headers: headers }, (res) => {
      let list = [];
      res.on("data", (chunk) => {
        list.push(chunk);
      });
      res.on("end", () => {
        console.log("Response ended: ");
        const data = JSON.parse(Buffer.concat(list).toString());
        console.log(data);
      });
    })
    .on("error", (err) => {
      console.log("Error: ", err.message);
    });
});