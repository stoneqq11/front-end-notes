# 事件循环 Event Loop
事件循环规范了用户代理处理任务的机制，用来处理比如：事件/用户交互/脚本/渲染/网络等任务

<br/>

## 任务队列 Task Queue
任务队列是由一个或多个任务组成的有序列表，一个事件循环对应一个或多个任务队列；

HTML中主要有以下类型任务：
1. Event task，处理在EventTarget上dispatch一个Event
2. Parsing task，HTML Parser解析任务
3. Callback task，处理回调
4. Using Resource task，获取资源后，处理资源
5. DOM task，处理DOM变更操作
6. MessageChannel task，消息通道任务队列（2019-4-1 add）

<br/>

## 处理流程
事件循环处理过程包含以下步骤：
1. 从其包含的任务队列中，选择一个，取其中最早插入的task
2. 执行选取的task
3. 将执行完成的task从其任务队列中移除
4. 执行微任务 microtask，详见下述 微任务
5. 更新渲染
6. 回到第一步，重复执行

<br/>

## 微任务 microtask
一个事件循环对应一个微任务队列 microtask queue，在事件循环处理流程中执行微任务过程包含以下步骤：
1. 从微任务队列中取最早插入的任务，如果队列中没有任务，则结束该过程
2. 执行选取的微任务
3. 从微任务队列中移除执行的任务
4. 回到第一步，重复执行，直到微任务队列中没有任务，则结束该过程

可以看出，在Event Loop中，每处理完成一个task，都会去处理一遍微任务队列中的所有microtask

ES6中的Promise回调和HTML5中的DOM MutationObserver回调会生成微任务

<br/>

## 示例
```javascript
console.log('start')
setTimeout(() => console.log('setTimeout'), 0)
Promise.resolve().then(() => console.log('resolve')).then(() => console.log('resolve1'))
console.log('end')
```

在Chrome控制台执行上述代码的结果如下：
```
start
end
resolve
resolve1
undefined
setTimeout
```

首先，整段代码的执行是在一个task中的，记为 currentTask

其次，callback会生成对应的任务，即setTimeout的回调会生成一个task，记为 timeoutTask

再，promise callback 会生成微任务，依次记为 resolveTask、resolveTask1

<br/>

根据Event Loop的处理流程：
1. 执行currentTask，分别会打印 start  end，另外也生成了timeoutTask、resolveTask、resolveTask1
2. 在执行完currentTask后，需要执行所有的microtask，即执行resolveTask、resolveTask1，分别打印 resolve resolve1
3. chrome控制台会输出当前执行任务的结果，没有返回结果，打印 undefined（此处后续验证）
4. 开始下一个task执行，即执行timeoutTask，打印 setTimeout

<br/>

## 总结
在Event Loop机制下，保证了JavaScript单线程处理任务的非阻塞；

从任务队列中依次执行每个任务；遇到异步任务时，先返回，继续执行下一个任务；待任务处理完成返回结果时，再将callback任务推入任务队列中等待执行

而微任务作为任务中较特别的一种存在，在每次执行完任务后、重新渲染dom前执行，这样一定程度上减少了dom重绘的次数



