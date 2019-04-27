# 对象
>对象是JavaScript中最基本的数据结构，是存放多个值的集合
<br/>

## 数据类型
JavaScript提供 **值类型** 和 **引用类型**

```js
// 值类型包括：string/boolean/number/null/undefined/symbol
const s = 'string'
const n = 1
const b = false

//引用类型：Object(内置对象Array/Math/Date/Function/String/Boolean/Number等都继承基类Object)
const o = {s, n, b}
```
>值类型长度是固定的，不会发生改变（改变变量值，是重新生成了新的值），存储在栈(Stack)中

>引用类型的值大小是不固定的，存放在堆(Heap)中，在栈中保存了和堆中值对应的引用

>注：上述值的存放位置是基本情况，特殊情况下也可能将值保存在堆中，例如[闭包](https://github.com/stoneqq11/think-in-js/blob/master/%E9%97%AD%E5%8C%85.md)
<br/>

## 初始化
JavaScript中，对象的初始化包括两种方式：**字面量（literals）** 和 **构造函数（constructor）**

```js
// 对象内部可以包括任意的数据类型，通过 . 操作符范围内部属性

// 使用 {} 进行对象初始化
const obj = {
    str: 'string',
    num: 0,
    fn: () => {},
    innerObj: {},
    get gt() {},
    set st(val) {}
}

// 下面使用构造函数初始化

// String {'string'}
// 等同于 new String('string')
const obj1 = new Object('string')


// Number {1}
// 等同于 new Number(1)
const obj2 = new Object(1)

// Boolean {true}
// 等同于 new Boolean(true)
const obj3 = new Object(true)

// {}
// 等同于 new Object({})
// 或者 new Object(null)
// 或者 new Object(undefined)
const obj4 = new Object()
```
<br/>

## literals vs constructor
```js
// 对于Object，两种方式是等价的
var obj1 = {}
var obj2 = new Object()

// 对于值类型，字面量方式返回的是值，构造器方式返回对于值类型的对象
var n1 = 1
var n2 = new Number(1)

// number
console.log(typeof n1)

// object
console.log(typeof n2)
```
<br/>

**为什么可以在值类型上调用方法？（n1.toFixed(2)）**
>值类型本身上不包含方法；n1.toFixed(2)可以正确执行，是JavaScript解释器在内部做了Boxing的处理。

>当解释器遇到值类型上调用方法时，会先生成一个对于类型的Wrapper对象（1 对应 new Number(1), 's' 对应 new String('s') 等），调用Wrapper对象上的对应方法，返回结果，最后删除对应的Wrapper对象；这样看起来就是直接调用了值上对应的方法。
<br/>

## Object基类中定义的方法
```js
// 返回一个布尔值 ，表示某个对象是否含有指定的属性，而且此属性非原型链继承的
Object.prototype.hasOwnProperty()

// 返回一个布尔值，表示指定的对象是否在本对象的原型链中
Object.prototype.isPrototypeOf()

// 判断指定属性是否可枚举
Object.prototype.propertyIsEnumerable()

// 返回字符串
Object.prototype.toLocaleString()
Object.prototype.toString()

// 返回指定对象的原始值
Object.prototype.valueOf()
```
<br/>

## 其他
```js
// 复制后面所有参数属性到第一个参数上，浅拷贝
Object.assign({}, {}, ...)

// 使用指定的原型对象和属性创建一个新对象
Object.create()
```
