
# 函数
```js
function name([param1[, param2[, ... param]]]) {
    //statements
}
```
<br/>

## 定义 

#### 1. 函数声明
```js
function sum(a, b) {
    return a + b
}
```

整个函数声明主要包括以下步骤（解析阶段完成）：
1. 创建一个名称为sum的函数（sum函数是一种类型为function的值）
2. 定义一个变量sum
3. 将函数sum赋值给变量sum
4. 将变量sum提升到当前作用域最顶部(hosting)

**可以看出函数hosting对比变量hosting的区别在与，提升之前已经完成了赋值**

#### 2. 函数表达式
```js
// 1.匿名
var sub = function (a, b) {
    return a - b
}

// 2.具名
var sub = function name(a, b) {
    // 函数名只在当前函数作用域内
    console.log(name)
    
    return a - b
}

// 3.匿名 es6 array function
var sub = (a, b) => a - b
```

上述代码运行过程：
1. 创建变量sub（解析阶段）
2. 提升sub到当前作用域顶部（解析阶段）
3. 创建匿名（1、3）或具名（2，函数名仅在函数内可访问）函数（执行阶段）
4. 将创建的函数赋值给变量sub（执行阶段）

**函数表达式对比函数声明不存在hosting**

#### 3. 构造函数（不推荐使用）
```js
var log = new Function('l', 'console.log(l)')
```
<br/>

## 参数

#### 1. arguments
arguments是包含调用时所有传入参数的类数组（Array Like）对象，包含callee/length属性
```js
function f() {
    console.log(Array.from(arguments))
    console.log(arguments.callee)
    console.log(arguments.length)
}
f(1,2,3)

// 打印所有参数转成的数组
[1,2,3]
// 打印函数f
f
// 打印参数数量
3
```
**箭头函数中不存在arguments**

#### 2. 默认参数（es6）
```js
function f(a, b) {
    a = a || 10
    if (b === undefined || b === null) {
        b = 'default'
    }
    
    ...
}

// es6
// 参数a 需要根据实际情况决定是否使用默认参数
function f(a = 10, b = 'default') {
    ...
}
```

#### 3. 参数解构（es6）
```js
function f(config) {
    const { id, name } = config
}

// 结合结构和默认值
function f({ id, name = 'default' }) {
    console.log(name)
}
```

#### 4. rest参数（es6）
rest参数又叫剩余参数，没有对应具体形参的参数值数组，且只能放在最后一个参数
```js
function f(a, b, ...rest) {
    console.log(rest)
}

// 打印[3, 4]
f(1,2,3,4)
```
<br/>

## 调用

#### 1. f(param1, param2, ...)
```js
f(1, 2)
f('a', 'b')
f({a: 1, b: 2})
```

#### 2. f.call(thisObject, param1, param2, ...)
call调用方式可以改变函数执行时this的指向，常用来“借用”一些已定义好的方法
```js
// nodes是一个类数组，本身不具备slice方法
const nodes = document.querySelectAll('.selected')

// 使用call方式调用，改变执行时this的值
Array.prototype.slice.call(nodes, 1, 3)
```

#### 3. f.apply(thisObject, [param1, param2, ...])
apply调用和call类似，主要是参数以数组方式传递
```js
const nums = [1, 5, 2, 7, 3, 10]
const max = Math.max.apply(Math, nums)
```

#### 4. new Constructor(param1, param2, ...)
构造函数调用，结合call可以实现继承
```js
function Person(id, name) {
    this.id = id
    this.name = name
}

function Programmer(id, name) {
    Person.call(this, id, name)
    
    //...
}
```
