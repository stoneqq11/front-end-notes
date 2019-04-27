# Node
Node是节点最顶层的接口规范，具体接口定义参考： [W3 Node Interface](https://www.w3.org/TR/2018/WD-dom41-20180201/#interface-node)

## attribute
接口定义的属性主要有：
1. 定义了节点类型属性(nodeType)，如：element node 的 nodeType 为1，text node 的 nodeType 为 3
2. 定义了节点名称属性(nodeName)，如 element node 的 nodeName 为其标签名
3. 定义了节点关系属性，如: parentNode/parentElement/childNodes/firstChild/lastChild/nextSibling...

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Standards — WHATWG</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#3A7908">
    <link rel="icon" href="https://resources.whatwg.org/logo.svg">
    <link rel="stylesheet" href="https://whatwg.org/style/shared.css">
    <link rel="stylesheet" href="https://whatwg.org/style/subpages.css">
</head>
<body>
</body>
</html>
```

```javascript
const header = document.getElementsByTagName('head')[0]

console.log(header.nodeType) // 1
console.log(header.nodeName) // HEAD
console.log(header.parentNode) // html
console.log(header.parentElement) //html
console.log(header.childNodes) // NodeList  [meta, text, title, text, meta, text, meta, text, link, text, link, text, link, text]
console.log(header.lastChild) // text
console.log(header.nextSibling) // body
```

> 回车符/空格符 在解析是会生成对应内容的 text node

<br/>

## method
Node 规范定义的方法主要有：
1. 定义了节点操作方法，如：insertBefore/appendChild/removeChild...
2. 定义了节点克隆方法：cloneNode

```html
<nav class="buttonish-links">
    <a>Standards</a>
    <a href="https://whatwg.org/faq">FAQ</a>
    <a href="https://whatwg.org/policies">Policies</a>
    <a href="https://participate.whatwg.org/">Participate</a>
</nav>
```
```javascript
const nav = document.getElementsByClassName('buttonish-links')[0]

// append
const other = document.createElement('a')
other.text = 'other'
nav.appendChild(other)

// remove
nav.removeChild(other)

//clone
const clone = nav.cloneNode(true)
document.getElementsByTagName('header')[0].appendChild(clone)
```


所有类型的节点，都会直接或间接的实现该接口

> 注：Node 接口本身实现了 EventTarget 接口，从而在任意节点上调用 addEventListener/removeEventListener 方法， 见 [事件](./event.md)
