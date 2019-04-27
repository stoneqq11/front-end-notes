# Event
事件的设计是为了告知开发者发生了一个具体的事情，开发者可以通过编码告知系统应该如何响应

<br/>

## Event Interface
具体的接口定义参考 [W3 Event Interface](https://www.w3.org/TR/2018/WD-dom41-20180201/#interface-event)

下面列举一些重要的属性：

#### attribute
1. 事件类型：type，如：click|focus|自定义等
2. 事件发生的对象：target/currentTarget，是一个EventTarget对象
3. 事件当前的阶段：eventPhase，见下面事件触发阶段
4. 事件是否冒泡/是否可取消/是否能从shadow dom 传递到外面：bubbles/cancelable/composed

#### method
1. 停止事件传递：stopPropagation()
2. 停止事件传递，作用于所有的listener：stopImmediatePropagation()
3. 取消默认行为：preventDefault()

#### Event Constructor
可以通过Event构造器来初始化事件对象

```javascript
const evt = new Event('click', {
    bubbles: false,
    cancelable: false,
    composed: false
})

tab.diapatchEvent(evt)
```

<br/>

## 事件传递过程
事件接口中定义了事件包含四个状态：
1. 初始状态，eventPhase=0，此时事件还没有被派发
2. 捕获阶段，eventPhase=1，此时事件已经派发，由target的最上层的祖先节点先捕获，然后逐层往下传递，直到到达target之前
3. 到达阶段，eventPhase=2，此时标识事件已经到达target
4. 冒泡阶段，eventPhase=3，此时事件从target往上层逐层传递，直到到达最上层祖先节点

可以看出事件的传递分为 捕获（capture）冒泡（bubble） 阶段

其中，是否经过捕获阶段是在添加监听器时定义的，见 [事件监听](./event_listener.md)

是否经过冒泡阶段，则是通过Event的bubbles属性决定，也可以使用stopPropagation()方法组织冒泡

<br/>

## CustomEvent
一个事件代表着页面交互中的一个状态，系统的事件提供了系统认为开发者可能关心的状态；而自定义事件则允许开发者通过系统提供的状态和自己的逻辑结合，定义任何事件，并进行派发；这样充分的利用了真个事件系统的能力，节省部分原本需要开发者自己处理的流程逻辑。

#### 接口
自定义事件接口实现了Event接口，仅在其基础上添加了 detail 属性，用来传递自定义的数据

同时也提供了 CustomEvent 构造器

```javascript
// add an appropriate event listener
obj.addEventListener("cat", function(e) { process(e.detail) })

// create and dispatch the event
var event = new CustomEvent("cat", {"detail":{"hazcheeseburger":true}})
obj.dispatchEvent(event)
```
