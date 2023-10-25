// Assume add.wasm file exists that contains a single function adding 2 provided arguments
const https = require('https');
const fs = require("fs");
const wasmBuffer = fs.readFileSync("download.wasm");

let location = {
  host: "www.gdtv.cn",
  hostname: "www.gdtv.cn",
  href: "https://www.gdtv.cn/tvChannelDetail/43",
  origin: "https://www.gdtv.cn",
  toString: function () {
    return this.href
  }
};

var wasm = null;
var heap = new Array(128).fill(void 0);
function getObject(A) {
    return heap[A]
}
heap.push(void 0, null, !0, !1);
var heap_next = heap.length;
function dropObject(A) {
    A < 132 || (heap[A] = heap_next,
    heap_next = A)
}
function takeObject(A) {
    var g = getObject(A);
    return dropObject(A),
    g
}
function addHeapObject(A) {
    heap_next === heap.length && heap.push(heap.length + 1);
    var g = heap_next;
    return heap_next = heap[g],
    heap[g] = A,
    g
}
var cachedTextDecoder = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8",{
    ignoreBOM: !0,
    fatal: !0
}) : {
    decode: function() {
        throw Error("TextDecoder not available")
    }
};
"undefined" != typeof TextDecoder && cachedTextDecoder.decode();
var cachedUint8Memory0 = null;
function getUint8Memory0() {
    return null !== cachedUint8Memory0 && 0 !== cachedUint8Memory0.byteLength || (cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer)),
    cachedUint8Memory0
}
function getStringFromWasm0(A, g) {
    return A >>>= 0,
    cachedTextDecoder.decode(getUint8Memory0().subarray(A, A + g))
}
var WASM_VECTOR_LEN = 0
  , cachedTextEncoder = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
    encode: function() {
        throw Error("TextEncoder not available")
    }
}
  , encodeString = "function" == typeof cachedTextEncoder.encodeInto ? function(A, g) {
    return cachedTextEncoder.encodeInto(A, g)
}
: function(A, g) {
    var B = cachedTextEncoder.encode(A);
    return g.set(B),
    {
        read: A.length,
        written: B.length
    }
}
;
function passStringToWasm0(A, g, B) {
    if (void 0 === B) {
        var Q = cachedTextEncoder.encode(A)
          , I = g(Q.length, 1) >>> 0;
        return getUint8Memory0().subarray(I, I + Q.length).set(Q),
        WASM_VECTOR_LEN = Q.length,
        I
    }
    for (var C = A.length, E = g(C, 1) >>> 0, D = getUint8Memory0(), w = 0; w < C; w++) {
        var M = A.charCodeAt(w);
        if (M > 127)
            break;
        D[E + w] = M
    }
    if (w !== C) {
        0 !== w && (A = A.slice(w)),
        E = B(E, C, C = w + 3 * A.length, 1) >>> 0;
        var o = getUint8Memory0().subarray(E + w, E + C);
        w += encodeString(A, o).written
    }
    return WASM_VECTOR_LEN = w,
    E
}
function isLikeNone(A) {
    return null == A
}
var cachedInt32Memory0 = null;
function getInt32Memory0() {
    return null !== cachedInt32Memory0 && 0 !== cachedInt32Memory0.byteLength || (cachedInt32Memory0 = new Int32Array(wasm.memory.buffer)),
    cachedInt32Memory0
}
var stack_pointer = 128;
function addBorrowedObject(A) {
    if (1 == stack_pointer)
        throw new Error("out of js stack");
    return heap[--stack_pointer] = A,
    stack_pointer
}
function get_header_j(A, g, B, Q, I, C) {
    try {
        var E = passStringToWasm0(A, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1)
          , D = WASM_VECTOR_LEN
          , w = passStringToWasm0(g, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1)
          , M = WASM_VECTOR_LEN
          , o = passStringToWasm0(B, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1)
          , i = WASM_VECTOR_LEN
          , G = passStringToWasm0(Q, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1)
          , N = WASM_VECTOR_LEN
          , k = passStringToWasm0(I, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1)
          , Y = WASM_VECTOR_LEN;
        return takeObject(wasm.get_header_j(E, D, w, M, o, i, G, N, k, Y, addBorrowedObject(C)))
    } finally {
        heap[stack_pointer++] = void 0
    }
}
function handleError(A, g) {
    try {
        return A.apply(this, g)
    } catch (A) {
        wasm.__wbindgen_export_3(addHeapObject(A))
    }
}
function __wbg_get_imports() {
  var imports = {
      wbg: {}
  };
  return imports.wbg.__wbg_self_1ff1d729e9aae938 = function() {
      return handleError((function() {
          return addHeapObject(self.self)
      }
      ), arguments)
  }
  ,
  imports.wbg.__wbg_window_5f4faef6c12b79ec = function() {
      return handleError((function() {
          return addHeapObject(window.window)
      }
      ), arguments)
  }
  ,
  imports.wbg.__wbindgen_object_drop_ref = function(A) {
      takeObject(A)
  }
  ,
  imports.wbg.__wbg_globalThis_1d39714405582d3c = function() {
      return handleError((function() {
          return addHeapObject(globalThis.globalThis)
      }
      ), arguments)
  }
  ,
  imports.wbg.__wbg_global_651f05c6a0944d1c = function() {
      return handleError((function() {
          return addHeapObject(global.global)
      }
      ), arguments)
  }
  ,
  imports.wbg.__wbindgen_is_undefined = function(A) {
      return void 0 === getObject(A)
  }
  ,
  imports.wbg.__wbg_newnoargs_581967eacc0e2604 = function(A, g) {
      return addHeapObject(new Function(getStringFromWasm0(A, g)))
  }
  ,
  imports.wbg.__wbg_call_cb65541d95d71282 = function() {
      return handleError((function(A, g) {
          return addHeapObject(getObject(A).call(getObject(g)))
      }
      ), arguments)
  }
  ,
  imports.wbg.__wbindgen_object_clone_ref = function(A) {
      return addHeapObject(getObject(A))
  }
  ,
  imports.wbg.__wbg_instanceof_Window_9029196b662bc42a = function(A) {
      return true
  }
  ,
  imports.wbg.__wbg_document_f7ace2b956f30a4f = function(A) {
      var g = {
        location
      };
      return isLikeNone(g) ? 0 : addHeapObject(g)
  }
  ,
  imports.wbg.__wbg_location_56243dba507f472d = function(A) {
      return addHeapObject(location)
  }
  ,
  imports.wbg.__wbg_host_15090f3de0544fea = function() {
      return handleError((function(A, g) {
          var B = passStringToWasm0(getObject(g).host, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1)
            , Q = WASM_VECTOR_LEN;
          getInt32Memory0()[A / 4 + 1] = Q,
          getInt32Memory0()[A / 4 + 0] = B
      }
      ), arguments)
  }
  ,
  imports.wbg.__wbg_origin_50aa482fa6784a0a = function() {
      return handleError((function(A, g) {
          var B = passStringToWasm0(getObject(g).origin, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1)
            , Q = WASM_VECTOR_LEN;
          getInt32Memory0()[A / 4 + 1] = Q,
          getInt32Memory0()[A / 4 + 0] = B
      }
      ), arguments)
  }
  ,
  imports.wbg.__wbg_href_d62a28e4fc1ab948 = function() {
      return handleError((function(A, g) {
          var B = passStringToWasm0(getObject(g).href, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1)
            , Q = WASM_VECTOR_LEN;
          getInt32Memory0()[A / 4 + 1] = Q,
          getInt32Memory0()[A / 4 + 0] = B
      }
      ), arguments)
  }
  ,
  imports.wbg.__wbg_eval_8c72ad5eafe427f2 = function() {
      return handleError((function(arg0, arg1) {
          var ret = eval(getStringFromWasm0(arg0, arg1));
          return addHeapObject(ret)
      }
      ), arguments)
  }
  ,
  imports.wbg.__wbindgen_string_new = function(A, g) {
      return addHeapObject(getStringFromWasm0(A, g))
  }
  ,
  imports.wbg.__wbg_call_01734de55d61e11d = function() {
      return handleError((function(A, g, B) {
          return addHeapObject(getObject(A).call(getObject(g), getObject(B)))
      }
      ), arguments)
  }
  ,
  imports.wbg.__wbindgen_string_get = function(A, g) {
      var B = getObject(g)
        , Q = "string" == typeof B ? B : void 0
        , I = isLikeNone(Q) ? 0 : passStringToWasm0(Q, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1)
        , C = WASM_VECTOR_LEN;
      getInt32Memory0()[A / 4 + 1] = C,
      getInt32Memory0()[A / 4 + 0] = I
  }
  ,
  imports.wbg.__wbg_new_56693dbed0c32988 = function() {
      return addHeapObject(new Map)
  }
  ,
  imports.wbg.__wbg_set_bedc3d02d0f05eb0 = function(A, g, B) {
      return addHeapObject(getObject(A).set(getObject(g), getObject(B)))
  }
  ,
  imports.wbg.__wbindgen_number_new = function(A) {
      return addHeapObject(A)
  }
  ,
  imports.wbg.__wbg_new0_c0be7df4b6bd481f = function() {
      return addHeapObject(new Date)
  }
  ,
  imports.wbg.__wbg_getTime_5e2054f832d82ec9 = function(A) {
      return getObject(A).getTime()
  }
  ,
  imports.wbg.__wbg_new_cd59bfc8881f487b = function(A) {
      return addHeapObject(new Date(getObject(A)))
  }
  ,
  imports.wbg.__wbg_getTimezoneOffset_8aee3445f323973e = function(A) {
      return getObject(A).getTimezoneOffset()
  }
  ,
  imports.wbg.__wbindgen_throw = function(A, g) {
      throw new Error(getStringFromWasm0(A, g))
  }
  ,
  imports
}

const importObject = __wbg_get_imports();
function __wbg_init_memory(A, g) {}
__wbg_init_memory(importObject);

function __wbg_finalize_init(A, g) {
  return wasm = A.exports,
  cachedInt32Memory0 = null,
  cachedUint8Memory0 = null,
  wasm
}

WebAssembly.instantiate(wasmBuffer, importObject).then((obj) => {
  __wbg_finalize_init(obj.instance, obj.module);
  const url = "https://gdtv-api.gdtv.cn/api/tvColumn/v1/tvColumn/43";
  var header = get_header_j(
    "GET",
    url,
    "WEB_413b8160-696b-11ee-8e8e-87c7746ce010",
    "WEB_PC",
    "",
    undefined
  );
  let headers = {}
  for (const [key, value] of header) {
    headers[key] = value
  }
  https.get(url, {headers: headers}, res => {
    let list = [];
    res.on('data', chunk => {
      list.push(chunk);
    });
    res.on('end', () => {
      console.log('Response ended: ');
      const data = JSON.parse(Buffer.concat(list).toString());
      console.log(data);
    });
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
});