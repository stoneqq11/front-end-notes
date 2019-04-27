# DOM
Document Object Model 文档对象模型定义了一组操作文档内容的接口，使得web开发者可以在脚本中访问和操作DOM节点，为用户界面操作交互提供可能

> DOM是一套脱离于HTML的文档规范，它适用于任何实现该规范的文档类型，常见为HTML/XML

DOM规范主要定义了 **DOM操作**，**DOM事件**，**DOM观察器**三部分内容

<br/>


## Node
文档在通过解析后，会生成对应类型的节点（nodes），DOM规范中定义了下列类型的节点：
1. Document：文档节点
2. DocumentFragment：文档片段节点
3. DocumentType：标注文档类型的节点
4. Element：元素节点
5. Text：文本节点
6. ProcessingInstruction：处理指令，HTML中貌似没有
7. Comment：注释节点

<br/>

## Tree
一个节点下可能会包含多个子节点，子节点下也可能会包含子节点，这样构成的一颗树形结构为节点树（node tree）；

文档树（document tree）是一个跟节点（root node）为document的树形结构

举例说明：
```html
<!DOCTYPE html>
<html class=e>
    <head><title>Aliens?</title></head>
    <body>Why yes.</body>
</html>
```
解析后的文档树结构如下：
```
// 空格和回车被解析成 text node
Document
    DocumentType: html
    Element: html class="e"
        Text: ⏎␣
        Element: head
            Element: title
                Text: Aliens?
        Text: ⏎␣
        Element: body
            Text: Why yes.
        Text: ⏎
```

然而，由于历史原因，head之前的空白回车被忽略，body之后的空格回车被加到body内容尾部，所以最终解析的文档树是：
```
// head之前的空白回车被忽略，body之后的空格回车被加到body内容尾部
Document
    DocumentType: html
    Element: html class="e"
        Element: head
            Element: title
                Text: Aliens?
        Text: ⏎␣
        Element: body
            Text: Why yes.⏎
```
