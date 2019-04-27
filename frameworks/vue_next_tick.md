# nextTick
Vue提供的nextTick(fn)方法能够保证fn在当前上下文执行完成且DOM已经更新后调用，其中的原理主要是依据HTML规范中的[EventLoop](https://github.com/stoneqq11/HTML-notes/blob/master/event%20loop.md)。

<br/>

## 实现
根据EventLoop规范，一次EventLoop中有如下过程：
1. 执行一个task
2. 执行当前所有Micro task
3. 进行DOM更新
4. 执行下一个task

而setImmediate、MessageChannel、setTimeout都会生成task(Macro task)，对应的Promise、MutationObserve则是生成Micro task，这样便保证了在nextTick中的函数执行时在DOM更新后


next-tick.js中的主要逻辑：
```js
let macroTimerFunc

if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  const channel = new MessageChannel()
  const port = channel.port2
  channel.port1.onmessage = flushCallbacks
  macroTimerFunc = () => {
    port.postMessage(1)
  }
} else {
  /* istanbul ignore next */
  macroTimerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}
```
<br/>

## 顺序
setImmediate方法在浏览器中还没有广泛支持

经过测试，MessageChannel生成的task 是运行在setTimeout生成的task 之前的

## MessageChannel
请参考[message channels](https://www.w3.org/TR/2015/REC-webmessaging-20150519/#message-channels)
