## 执行上下文（execution context）
JavaScript中，执行上下文是代码执行过程中所依赖的环境，它包含 **[作用域链(Scope Chain)](./scope.md)**、**[变量对象|活动对象(VO|AO)](./VO.md)**、**[this](./this.md)** 三部分
```
EC = {
    AO|VO,
    ScopeChain,
    this
}
```
<br/>

## 执行上下文栈（execution context stack）
JavaScript的执行总是从全局开始，然后依次进入到函数调用；每次函数调用开始会生成对应的执行上下文，调用结束后该上下文也被销毁，如此形成了执行上下文栈
```js
var a = 'a'

outter()

function outter() {
    inner()
    function inner() {}
}

// 以上代码执行的上下文栈类似于：
var ecs = []
var globalEC = {}
var outterEC = {}
var innerEC = {}

// 压入全局的EC
esc.push(globalEC)
// 压入outterEC
esc.push(outterEC)
// 压入innerEC
esc.push(innerEC)

// 函数调用结束后，依次释放对应的EC，直至代码执行结束，最后释放globalEC
esc.pop()
esc.pop()
esc.pop()
```
<br/>

## 执行过程
主要分为两个阶段：进入上下文、执行上下文
```js
function sum(x) {
    var y = 10
    var f = function () {}
    
    (function t() {})
    
    return x + y
}

sum(90)
```

```js
// 进入上下文后，主要创建VO/AO对象
VO(sum) = {
    x: 90,
    y: undefined,
    f: undefined
}
```

```js
// 执行上下文，逐步执行代码，并更新AO中属性的值
AO(sum) = {
    x: 90,
    y: 10,
    f: function
}
```


