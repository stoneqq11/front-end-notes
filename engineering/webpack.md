# webpack
[webpack](https://webpack.js.org/)是前端模块依赖自动化构建工具，兼容ES6 Module, commonjs, amd 等多种模块规范；通过loader/plugin等灵活的配置，提供了处理几乎所有静态资源模块的能力

<br/>

## 基本流程
webpack构建的基本流程主要分为以下步骤：
1. 读取webpack配置文件，获取配置信息
2. 根据配置的入口entry，调用对应的loader（在rules中配置）依次解析对应的文件，生成AST
3. 根据AST中依赖，解析下一层依赖文件，如此递归直至完成，并生成依赖关系表
4. 根据output配置，生成相应的内容文件到指定目录

> 另外：插件的运行时伴随webpack整个构建过程的，根据插件的实现去调用运行

<br/>

## loader
webpack本身只做模块的依赖处理，而模块本身的内容转换处理是通过loader进行的；如es6可以使用babel-loader编译，sass可以使用sass-loader编译等；这样很大程度上提高了webpack的模块处理能力，而且编写一个自定义的loader也非常简单：

```js
// a test webpack loader
function testLoader(source) {
    console.log('this is a test webpack loader================')
    
    // 此处对源文件内容进行处理
    console.log(source)
    
    // loader context
    console.log(this)

    // 返回处理好的结果
    return 'export default {}'
}

module.exports = testLoader
```

> 其中loader context内容可以参考[loader context](https://webpack.js.org/api/loaders/#the-loader-context)

<br/>

## 插件
webpack通过定义插件方式提供了很强的扩展性，使得开发者可以自由的扩展构建能力

一个插件主要包含如下部分：
1. 原型上存在apply方法的函数
2. 根据编译器对象compiler提供的钩子[event hook](https://webpack.js.org/api/compiler-hooks/)，做需要的实现
3. 根据编译对象compilation，进行需要的编译处理
4. 最后回调hook提供的callback，告知插件处理完成

给出一个简单的demo
```js
class TestPlugin {
    
    /**
     * webpack插件需要提供apply方法
     */
    apply(compiler) {

        // 指定需要实现的钩子
        compiler.hooks.beforeRun.tap('TestPlugin', (compilation, callback) => {
            console.log('before run======================')
            console.log(compilation)
        })

        compiler.hooks.done.tap('TestPlugin', (compilation, callback) => {
            console.log('done======================')
            console.log(compilation)

            // 在完成插件最后需要调用callback
            callback()
        })
    }
}

module.exports = TestPlugin
```

对应的webpack配置中需要加入插件，如：
```es6
const TestPlugin = require('./plugin/TestPlugin.js')

plugins: [new TestPlugin()]
```
