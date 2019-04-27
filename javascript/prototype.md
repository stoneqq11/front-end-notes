
# 原型（prototype）
JavaScript是基于原型的，原型本身是一个实例化对象，在函数上以 **prototype** 属性存在，在实例上以 **\_\_proto__** 属性存在；在构造函数上设置 prototype 后，其实例化(new)的对象拥有原型中的属性

```js
function Person({age, name}) {
    this.age = age
    this.name = name
}

Person.prototype.say = function(word) {
    console.log(`${this.name} say ${word}`)
}

const p = new Person({
    age: 10,
    name: 'test'
})
p.say('hello')

// output: true
console.log(p.__proto__ === Peson.prototype)
```
<br/>

## prototype & \_\_proto__
```js
Object.prototype === ({}).__proto__

// 下面是 Object 的原型对象
{
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
}
```
> prototype 和 \_\_proto__ 都代表原型；不同的是：prototype是构造函数上的属性，代表“类”的原型，而 \_\_proto__ 是实例对象上的属性


> 注意： \_\_proto__ 并不属于JavaScript语言本身的规范，而是浏览器中实现的；在ES5中，可以调用 **Object.getPrototypeOf()** 方法获取实例的原型

<br/>

## prototype.constructor
原型对象中，包含了其对应的构造函数属性 **constructor**，用来标识该原型所属的函数
```js
Object.prototype.constructor === Object
Array.prototype.constructor === Array
```
<br/>

## 原型链(prototype chain)
在进行对象属性查找时，首先在对象当前属性中查找，然后在其原型中查找；若在当前层未找到，则继续往上层查找；如此逐层查找属性是通过原型链实现的
> 每个对象都有\_\_proto__属性标识其原型；而原型本身也是一个对象，也包含了\_\_proto__属性，标识其上层对象的原型；如此逐层往上，**直到\_\_proto__值为null**，形成的链称为原型链
```js
// Object
({}).__proto__ === Object.prototype
({}).__proto__.__proto__ === null

// Number
(1).__proto__ === Number.prototype
(1).__proto__.__proto__ === Object.prototype
(1).__proto__.__proto__.__proto__ === null
```

JavaScript中，由于原型链的存在，可以方便地实现继承，详见[继承](./extends.md)

