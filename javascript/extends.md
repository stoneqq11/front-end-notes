
# 继承
继承是指让子对象拥有父对象的属性和方法，JavaScript中，可以通过多种方式实现继承

## 构造函数继承
```
function Parent() {
    this.a = 1
    this.b = function() {}
}

function Child() {
    // 继承
    Parent.call(this)
    
    this.c = 0
}

// output: 1
console.log(new Child().a)
```
以上继承方法简单直观，但也有很多缺点：第一，只能继承构造函数本身的属性或方法，构造函数原型的属性不能被继承；第二，所有的属性都生成在实例化对象上，造成空间浪费

## 原型继承
```
function Parent() {
    this.a = 1
}

Parent.prototype.f = function() {
    this.a++
    
    return this.a
}

function Child() {
    this.b = 1
}

// 继承
Child.prototype = new Parent()
// 
Child.prototype.constructor = Child

// output: 2
console.log(new Child().f())
```
> 原型继承需要在实现继承后修正constructor属性，用来通过 **instanceof** 判断类型
> 原型继承相对于构造函数继承，是把父类所有的属性都放到了原型上，这样会对性能有负面影响；一般采用的是组合构造函数和原型继承；

## 其他方式
实现继承的方式有很多种，但追溯根源，都是通过原型或构造器实现；
<br/>
下面分析ES6 extends 在babel编译后的代码：
```
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    
    // 原型继承，修正constructor
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    
    // 设置子类__proto__
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
```

上面看到，子类通过原型继承的方式，继承了父类原型上的属性；而构造函数里的属性则是通过super调用实现
```
class A {
    constructor() {
        this.a = 1
    }
}

class B extends A {
    constructor() {
        // 在子类构造函数中调用this前，必须先调用super
        super()
        this.b = 1
    }
}
```
看super转码后的实现：
```
// B.__proto__实际在_inherits执行时已经被设置为A
// 所以相当于执行A.call(this)，也就是构造器继承
var _this = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this));

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self
}
```
