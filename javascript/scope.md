
## 作用域链（Scope Chain）
作用域链是由变量对象组成的一条链路，在代码执行时，提供变量的查找

>JavaScript中函数内部可以嵌套定义函数，而每个函数都会生成一个上下文，上下文中包含了作用域链属性，函数内部的变量查找就是在作用域链中依次往上进行

```js
EC = {
    VO,
    this,
    Scope
}
```
<br/>
上下文中Scope包含了自身的VO，已经对所有上层上下文的VO引用
```js
Scope = [VO, parentVO, ...]
```

```js
// f2上下文对应的Scope属性表示为：[f2AO, f1AO, fAO, globalVO]
function f() {
    function f1() {
        function f2() {

        }

        f2()
    }

    f1()
}

f()
```
<br/>

## 函数内部[[scope]]
函数在创建时候就会生成一个[[scope]]属性，用来存储所有上级上下文的变量对象，用于变量的往上逐层查找
```js
var x = 1

function f() {
    var y = 2
    
    return x + y
}

f()
```
```js
// 函数[[scope]]属性为所有上级上下文的变量对象链
f.[[scope]] = [
    globalContext.VO
]

// 可以看出函数的作用域链Scope=[AO, ...[[scope]]]
fContext = {
    f.AO,
    this,
    Scope: [f.AO, ...f.[[scope]]]
}
```
> [[scope]]为静态属性，在函数创建时生成，直到函数销毁。

> 函数在执行阶段，通过作用域链进行变量查找；首先在当前AO中查找，然后依次往上逐层查找，直到全局VO；若最后未找到，则会抛出变量未定义异常。
