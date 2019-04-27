# this
this 是代码执行时赋值，代表当前执行环境；this取值取决于运行环境和调用方式
<br/>

## 全局this
```
var n = 1

// output: 1, 等同 window.n
console.log(this.n)

this.n = 10

// output: 10
console.log(n)
```

> 全局this在浏览器中等同于window, node环境中等同于global
<br/>

## 作为方法调用的this
```
var a = 'global'
var obj = {
	a: 'inner',
	f: function() {
		console.log(this.a)
	}
}
var f1 = obj.f

// output: inner
obj.f()

// output: global
// 等同于 window.f1()
f1()
```

> 作为方法调用中的this，等同于最后一个 **.** 操作符前的对象值；上述 obj.f() 内的this就是obj；f1() 等同于 window.f1()，内部this就是window

```
var obj = {
	f: f
}

// obj
obj.f()

// window
// 等同于 window.f()
f()


function f() {
	console.log(this)
}
```

> 全局函数执行等同于window上方法执行，所以this是全局对象window
<br/>

## 构造函数中this
```
function Group() {
	this.children = []
}

var g = new Group()

// 构造函数内部this指向被构造的新对象
console.log(g.children)
```
<br/>

## 箭头函数（ES6）
箭头函数中this绑定了其外层调用函数的this

```
const obj = {
	f: () => {
		console.log(this)
	}
}
const f = obj.f

// output: window
f()

// output: window
obj.f()
```
```
const obj1 = {
	f() {
		return () => console.log(this)
	}
}
const fn = obj1.f()
const fn1 = obj1.f

// output: obj1
// fn 是在obj1上调用的f, this 被绑定到ojb1
fn()

// output: window
// fn1 是在window上调用的, this 被绑定到window
fn1()()
```
<br/>

## 改变this值
```
function f() {
	console.log(this.a)
}

// output: undefined
// 等同于 f.call(this)
f()

// output: 1
f.call({a: 1})

// output: 1
f.apply({a: 1})

f = f.bind({a: 100})

// output: 100
f()

// output: 100
f.call({a: 1})
```
