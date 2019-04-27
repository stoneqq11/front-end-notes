# MVVM
MVVM 指 Model View ViewModel，是当前流行的前端开发模式

随着客户端交互的复杂性增长，DOM操作变得越来越多，主要包含JavaScript和ajax代码；前端需要一种更好的开发模式。

<br/>

## 原生API
DOM规范提供了一套操作操作文档节点的API，客户端载体遵循规范实现了这套接口，前端开发者可以通过JavaScript来操作dom节点；

另外，ajax规范也被客户端载体实现，通过JavaScript可以和服务端进行数据通信；

从此，大部分交互都可以在客户端处理完成，避免了每次交互都需要从服务端返回刷新界面来完成。

<br/>

## jQuery
jQuery在DOM API基础上进行了封装，给出了更简单好用的DOM操作API，以及常用的辅助工具

jQuery解决了使用原生API的麻烦，对于DOM操作更加便利，一定程度上改善了页面代码的可读性

<br/>

## Backbone.js
jQuery很好用，但始终还是面向DOM编程，随着页面复杂程度上升，页面代码逻辑依然会变得复杂臃肿

Backbone.js是较早提出数据视图模型的框架，通过Model模块来规划好数据模型，通过View模块来扩展视图并完成视图上的交互，通过操作model数据，即能完成界面交互

Backbone.js让开发者从dom操作转向数据处理，但还是需要在View中预先完成数据变化的相关界面响应（也就是dom处理），而如何处理dom则是开发者自由选择；所以使用Backbone.js还是需要面对dom操作，但却是面向数据处理来完成页面交互，整体的逻辑更为清晰

<br/>

## MVVM
前面提到了Model 和 View 模型，而通常页面逻辑处理都是从Model的变化映射到View的更新，显然这部分可以抽象出来，让开发者从View更新（dom操作）彻底的转向数据处理，这部分便是ViewModel模型，连接Model和View模型

当前流行的MVVM模型的JavaScript框架主要是Vue和React，两者都让开发者只需规划页面数据模型（data/state），完成视图和数据的映射(template/render)，通过操作数据（setter/setState）来自动完成视图的更新
