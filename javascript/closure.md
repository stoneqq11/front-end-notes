
# 闭包（closure）
闭包是指函数和创建它的上下文环境的结合

<br/>

## 自由变量
自由变量指函数中被使用，但既不是函数参数，也不是局部变量的变量；可以理解为从函数[[scope]]属性中查找到的变量
```
function outter() {
    var a = 1

    function inner(b) {
        return a + b
    }

    return inner
}

// 对于函数inner, 变量 a 即为自由变量
var f = outter()
f(1)
```
>由于自由变量的存在，上述代码中 outter() 执行完成后，并不能直接销毁其上下文，否则在执行 f(1) 时无法查找自由变量 a，出现错误；
<br/>

## 静态作用域（词法作用域）
JavaScript使用静态作用域，函数在创建时便确定了其对应的[[scope]]属性，直到函数销毁
```
var n = 0

function f() {
    console.log(n)
}

// 函数f在创建时确定了
(function() {
    var n = 1
    f()
})()
```
<br/>

## 闭包
>理论上，JavaScript中所有函数都可以理解为闭包，因为每个函数都有[[scope]]属性，保存了上层变量对象（上下文数据）

>结合自由变量问题和静态作用域，可以将闭包理解为：包含了自由变量的函数，如上面的 inner 函数

>闭包会保留自由变量的上下文数据引用，所以创建闭包的上下文在执行结束后会得到保留，这样导致这部分自由变量数据存放在堆中，而不是栈内
<br/>

## 共用一个[[scope]]
同一个上下文创建的闭包共用一个[[scope]]
```
var funs = []

for (var i = 0; i < 10; i++) {
    funs[i] = function() {
        console.log(i)
    }
}

// all output 10
// funs中的 所有元素都是闭包，共用了同一个[[scope]]，‘共享’了变量 i
funs[0]()
funs[1]()
funs[9]()
```
```
function f() {
    var x = 0

    function ins() {
        return ++x
    }
    function dis() {
        return --x
    }

    return {
        ins, dis
    }
}

var counter = f()

// output: 1
counter.ins()

// output: 2
counter.ins()

// output: 1
counter.dis()
```
