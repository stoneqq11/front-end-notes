# HTML elements

<br/>

## HTMLElement
[HTMLElement](https://html.spec.whatwg.org/multipage/dom.html#htmlelement) 接口实现了 DOM 的 [Element](https://dom.spec.whatwg.org/#interface-element) 接口，常用内容如下：
1. attribute title：表示元素的标题
2. attribute hidden：表示元素是否显示
3. attribute draggable：表示元素是否可以拖拽
4. attribute innerText：表示元素内部文本

<br/>

## 元素分类
HTML元素大致分类如下：
1. 根元素html，根据document.documentElement访问
2. 元数据元素(metadata elements)，包括：head/title/meta/link/style/script等
3. 章节元素(section elements)，包括：body/section/article/nav/aside/h1-h6/header/footer等
4. 分组元素(group elements)，包括：div/ol/ul/dl/li/dt/dd/p等
5. 文本级别元素(text-level elements)，包括：a/span/i/strong/em等
6. 嵌入式元素(embedded elements)，包括：img/canvas/audio/video/frame等
7. 表单元素(form elements)，包括：from/input/select/textarea/button等
8. 表格(table elements)，包括：table/thead/tbody/tfoot/th/td等
9. 自定义元素(custom elements)，通过 window.customElements对象定义

<br/>

## 全局属性
1. title: 代表元素的建议信息，例如：在链接上表示目标的信息，另外也可以表示描述，说明等
2. lang：代表元素的内容语言信息
3. translate：代表是否需要翻译元素内容
4. dir：代表元素内容的排列方向
5. style：代表元素的内联样式信息
6. data-\*：代表元素上附加的额外属性
