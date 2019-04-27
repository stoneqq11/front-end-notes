# Document
Document是文档顶层对象的接口规范，在浏览器环境下，document是其实现；具体规范参考 [W3 Document Interface](https://www.w3.org/TR/2018/WD-dom41-20180201/#interface-document)

<br/>

## document info
文档规范定义文档属性主要有：
1. 文档url信息，URL/documentURI/origin
2. 文档编码，characterSet
3. 文档类型，contentType
4. 文档元素，documentElement

```javascript
console.log(document.URL) // https://spec.whatwg.org/
console.log(document.origin) // https://spec.whatwg.org
console.log(document.contentType) // text/html
console.log(document.characterSet) // UTF-8
console.log(document.documentElement) // html element
```

<br/>

## method
列举主要的方法：
1. 获取节点的方法：getElementsByClassName()/getElementsByTagName()
2. 创建各种类型的节点方法：createElement()/createDocumentFragment()/createTextNode()...
3. 创建事件：createEvent()
4. 创建Attribute：createAttribute()

好像没有看到常用的 getElementById()/querySelector()/querySelectorAll()，这些方法又是在另外的接口上定义，Document有实现这些接口

getElementById()定义在[NonElementParentNode](https://www.w3.org/TR/2018/WD-dom41-20180201/#nonelementparentnode)，Document和DocumentFragment都有实现该接口

querySelector()/querySelectorAll()定义在[ParentNode](https://www.w3.org/TR/2018/WD-dom41-20180201/#interface-parentnode)接口上，Document/DocumentFragment/Element接口都实现了该接口

```javascript
const head = document.getElementsByTagName('head')[0]
const script = document.createElement('script')

script.src = 'just for test'
head.appendChild(script)
```

```html
<head>
    <meta charset="utf-8">
    <title>Standards — WHATWG</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#3A7908">
    <link rel="icon" href="https://resources.whatwg.org/logo.svg">
    <link rel="stylesheet" href="https://whatwg.org/style/shared.css">
    <link rel="stylesheet" href="https://whatwg.org/style/subpages.css">
    <script src="just for test"></script>
</head>
```
