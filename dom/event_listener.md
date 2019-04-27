# 事件监听
DOM中，定义了 EventTarget 接口规范，其中包含了 添加监听/移除监听/触发事件 三个方法

<br/>

## 添加监听 addEventListener(type, listener, [options])
第一个参数type: 对应时间的类型，如：click|loaded|error|自定义事件类型...

第二个参数listener: event => {}，将当前的事件对象传递给callback

第三个参数是设定事件的部分属性，包括：capture(捕获)/once(只触发一次)/passive(保留默认行为，设置为true，则忽略监听器中preventDefault()调用)

```javascript
const n = document.querySelector('#id')

n.addEventListener('click', evt => {console.log('click')}, {
    capture: false,
    once: false,
    passive: false
})
n.click() // click
```

> 注：由于早期的规范中，只支持是否捕获，所以也支持 addEventListener(type, listener, useCapture) 定义

<br/>

## 移除监听 removeEventListener(type, listener, options)
参数和添加监听方法含义一致，要想成功移除监听，必须要保证 listener 和 capture 参数一致

```javascript
// 接上面的例子
const clickListener = evt => {console.log('clickListener')}

n.addEventListener('click', clickListener, false)
n.click() // click clickListener

n.removeEventListener('click', clickListener, false)
n.click() // click
```

<br/>

## 派发事件 dispatchEvent(envent)
DOM 内置定义了一些事件行为，这些行为往往通过用户的指定行为来触发，事件系统主动通知到监听器；

而对于[自定义事件](https://github.com/stoneqq11/DOM-/blob/master/%E4%BA%8B%E4%BB%B6.md)，往往需要开发者在对应的时机来主动派发，告知事件系统通知到监听器；

dispatchEvent可以完成这一行为

```
// add an appropriate event listener
obj.addEventListener("cat", function(e) { process(e.detail) })

// create and dispatch the event
var event = new CustomEvent("cat", {"detail":{"hazcheeseburger":true}})
obj.dispatchEvent(event)
```
