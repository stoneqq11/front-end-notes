# Module
随着文本应用的复杂性增强，前端模块化是必然的趋势，模块化能够让代码变得更清晰，大大提升可维护性

<br/>

## JS 模块化
随着页面的交互性增强，页面脚本量也大大增多，回顾js模块化的主要历程：

#### 原生形式
最开始主要使用<script>标签来管理页面中的脚本:
  ```html
  <script src="a"></script>
  <script src="b"></script>
  <script src="c"></script>
  <script src="d"></script>
  ...
  ```
  这样原始的做法存在一下缺点：
  1. 脚本按顺序执行，这样就存在了脚本间的顺序依赖关系，随着文件数增多，极难管理
  2. 各个脚本中都会存在全局变量，比较容易造成变量冲突
  
  #### 原生改进形式
  为了改进上述缺陷，开发者根据模块功能类型，将脚本重新规划到指定命名空间下：
  ```js
  // util.js
  var namespaceA = {
      moduleA: {},
      moduleB: {},
      ...
  }
  ```
  这样稍微减少了变量冲突的问题，但随着脚本增加依然不能避免
  
  #### commonjs规范
  commonjs规范提出：使用全局变量exports/require/global/module来管理所有js模块，每个模块中代码作用域与外部隔离，使用module.exports导出模块，使用require加载模块
  
  ```js
  // moduleA.js
  function add(a, b) {
      return a + b
  }
  
  module.exports = add
  
  // moduleB.js
  const add = require('./moduleA.js')
  console.log(add(1, 2))
  ```
  
  commonjs规范主要是提供给服务端使用，加载模块采用同步方式；但对于客户端环境而言，大部分资源都是通过网络从服务端获取，显然这一规范不适用于客户端
  
  #### AMD/CMD
  客户端模块处理工具主要代表有：async module define 代表require.js 和 common module define 代表 sea.js；
  两者都通过 define 来定义模块，通过 require 来加载模块，使用异步的方式达到管理客户端模块的目的
  
  具体参考[requirejs](https://requirejs.org/) 和 [sea.js]()
  
  #### UMD
  统一模块定义规范，旨在统一CommonJS和AMD规范，如下：
  ```js
  // webpack 中UMD写法
function webpackUniversalModuleDefinition(root, factory) {
  // 先检测是否支持CommonJS
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
    
  // 再检测AMD
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
    
    // 再次判断是否支持exports
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
}
  ```
  
  #### ES6 Module
  ES6对模块进行了规范，使用export导出模块，使用import导入模块
  ```js
  // a.js
  export const TEST = {}
  
  // 默认导出
  export default {t: TEST}
  
  // b.js
  import {TEST} from 'a.js'
  
  // 使用默认导出
  import A from 'a.js'
  console.log(A.t)
  ```
  > ES6模块解析是静态的，不能动态import；导入的是模块的引用，如果在改变模块内容，其内容变化会同步到其他导入的模块
