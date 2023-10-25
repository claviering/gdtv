# 荔枝网 wasm 加密逆向

接口的 `X-Itouchtv-Ca-Signature` 在 wasm 内加密生成，把 wasm 当作一个包直接调用生成加密。

## 使用

`$ nodejs gdtv.js`

## 一些修改的地方

初始化一个 document.location

```js
let location = {
  host: "www.gdtv.cn",
  hostname: "www.gdtv.cn",
  href: "https://www.gdtv.cn/tvChannelDetail/43",
  origin: "https://www.gdtv.cn",
  toString: function () {
    return this.href
  }
};
```

全局搜索 `get_header_j`，把相关代码复制下来，修改对应函数

```diff
imports.wbg.__wbg_instanceof_Window_9029196b662bc42a = function(A) {
- var g;
- try {
-     g = getObject(A)instanceof Window
- } catch (A) {
-     g = !1
- }
- return g
+ return true
}
imports.wbg.__wbg_document_f7ace2b956f30a4f = function(A) {
- var g = getObject(A).document;
+ var g = {location};
  return isLikeNone(g) ? 0 : addHeapObject(g)
}
imports.wbg.__wbg_location_56243dba507f472d = function(A) {
- return addHeapObject(getObject(A).location)
+ return addHeapObject(location)
}
```

## nodejs 中使用

```js
const fs = require("fs");
const wasmBuffer = fs.readFileSync("download.wasm");

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
```