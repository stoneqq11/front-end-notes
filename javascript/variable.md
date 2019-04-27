## 定义

```js
// 定义变量 a
// 重复定义不报错
var a

// 生成全局变量 b
// strict mode下报错
b

// es6 定义变量c
// 重复定义报错
let c

// es6 定义常量
const d
```

## 赋值

基础类型值拷贝
```js
var a = 0
var b = a

// 0
console.log(b)
```

引用类型拷贝引用
```js
var a = {name: 's'}
var b = a

a.name = 'xs'

// 'xs'
console.log(b.name)
```

函数传参
```js
var a = 1
var b = {a: 1}
var fn = function(a, b) {
    a = 2
    // 此处参数b和全局变量b指向同一个对象，修改会受影响
    b.a = 2
}
var fn1 = function(a, b) {
    a = 3
    // 对参数b重新指向新的对象，修改不会影响到全局变量b
    b = {a: 3}
}

fn(a, b)
fn1(a, b)

// 1
console.log(a)
// 2
console.log(b.a)
```

## 变量提升（var hosting）

```js
// undefined
console.log(a)

var a = 100

// 100
console.log(a)
```
变量声明总是在代码执行之前处理，上述代码等价于

```js
var a
console.log(a)
a = 100
console.log(a)
```
**注意：es6中不存在变量提升**

## 作用域

变量作用域是指在执行代码时变量的可访问范围，分为全局作用域、局部作用域；其中局部作用域包括函数作用域和块级作用域（ES6支持）
```js
// 全局变量对应全局作用域
var g = 'global'

function f() {
    // 函数作用域，f函数内可访问
    var n = 1
    
    console.log(g)
    console.log(n)
}
```

```js
for (let i = 0; i < 10; i++) {
    // es6 块级作用域，i在for内部访问
    console.log(i)
}

// error. i在for外部不可以访问
console.log(i)
```
