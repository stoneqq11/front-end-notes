# DOM-
DOM（document object model）是基于文档操作的一套规范，常见的实现有HTML/XML

[DOM](https://github.com/stoneqq11/DOM-/blob/master/DOM.md)

<br/>

## 节点操作
文档最终会解析成由各种类型的节点构成的文档树；DOM规范定义了 **Node** **Document** **Element** 等接口，为节点操作提供入口

#### [Node](https://github.com/stoneqq11/DOM-/blob/master/%E8%8A%82%E7%82%B9%E6%8E%A5%E5%8F%A3.md)

#### [Document](https://github.com/stoneqq11/DOM-/blob/master/%E6%96%87%E6%A1%A3%E6%8E%A5%E5%8F%A3.md)

#### [Element](https://github.com/stoneqq11/DOM-/blob/master/%E5%85%83%E7%B4%A0%E6%8E%A5%E5%8F%A3.md)

<br/>

## 事件
DOM Event的设计可以让开发者感知到节点的一些关键变化点，包括节点的默认行为和开发者定义的行为，例如文档的状态变化/图片的加载完成，失败/节点被点击等；开发者可以在这些点定义对应的动作，这样使得页面的交互更丰富，某种程度上这也是必须的。

DOM 主要定义了 **Event** **EventTarget** **CustomEvent** 接口来实现

#### [事件](https://github.com/stoneqq11/DOM-/blob/master/%E4%BA%8B%E4%BB%B6.md)

#### [事件监听](https://github.com/stoneqq11/DOM-/blob/master/%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC.md)

<br/>

## 观察器
