# Babel
[Babel](https://babeljs.io/)是一款JavaScript代码转换工具。由于浏览器对新版本的ES代码支持不一，通过babel可以转换为低版本的浏览器兼容的代码。

<br/>

## 编译过程
babel的编译过程大致分为三步：
1. parse，代码解析，此处通过[babylon](https://github.com/babel/babylon)完成
2. transform，在上一步解析完成后会得到结果AST，此处会调用配置的babel插件，做对应的转换
3. generate，上一步完成会得到转换后的AST，然后开始生成转换后的代码

<br/>

## 使用babel
babel提供三种使用方式：
1. 配置文件：.babelrc
2. @babel/cli，命令行运行，如下：
```
./node_modules/.bin/babel src --out-dir dist
```
3. JavaScript API，如下：
```js
// babel.js
var babel = require('@babel/core')

console.log(babel.transformFileSync('./src/test.js', {
    ast: true,
    presets: ['@babel/env']
}).code)
```

<br/>

## plugins & presets
插件是babel转换代码的必要成员，调用插件转换AST过程示意如下：
```js
// 伪代码
const babel = code => {

    // 解析
    const ast = babylon.parse(code)
    
    // 调用插件转换ast
    puligins.forEach(plg => {
        plg.api1(ast)
        plg.api2(ast)
        ...
    })
    
    // 输出转换后的代码
    return generator(ast)
}
```

插件的学习可以参考[babel plugin](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

<br/>

presets则是babel预置的插件集，提供常用的集中配置：'env', 'stage-x'等，也可以[自定义preset](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/user-handbook.md#making-your-own-preset)：
```js
module.exports = function() {
    return {
        plugins: [
            'pluginA',
            'pluginB',
            ...
        ]
    }
}
```

## polyfill
@babel/polyfill 模块主要是 [core-js](https://github.com/zloirock/core-js) 和 [regenerator](https://github.com/facebook/regenerator/blob/master/packages/regenerator-runtime/runtime.js) 组成，让我们在代码中可以使用新的 built-ins，如Promise，Object.assign等等。

可以通过配置useBuiltIns: "usage"，这样babel在编译时会根据代码中使用到的新特性而导入需要的polyfill，避免全盘的导入。
```json
presets: [
    "@babel/env",
    {
      "useBuiltIns": "usage",
    }
]
```
<br/>

## demo
```js
// test.js
const add = (n, m) => n + m

export default add
```

```js
// 控制台运行 node babel.js
// output
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var add = function add(n, m) {
  return n + m;
};

var _default = add;
exports.default = _default;
```
