# 交互
HTML中，除了通过事件机制和JavaScript操作DOM来进行用户交互外，本身也提供了一些通过属性完成的页面交互

<br/>

## hidden
attribute hidden 实现了元素的隐藏和显示
```html
<body>
    <p hidden>被隐藏的内容</p>
</body>
```
或者通过JavaScript来设置hidden：
```js
document.body.hidden = true
```

<br/>

## focus

<br/>

## edit content
通过设置元素的contenteditable属性使得元素内容可以被编辑
```html
<form method=POST>
 <fieldset>
  <legend>New article</legend>
  <textarea id=textarea name=article><p>Hello world.</p></textarea>
  <div id=div style="white-space: pre-wrap" hidden><p>Hello world.</p></div>
  <script>
   let textarea = document.getElementById("textarea");
   let div = document.getElementById("div");
   textarea.hidden = true;
   div.hidden = false;
   div.contentEditable = "true";
   div.oninput = (e) => {
     textarea.value = div.innerHTML;
   };
  </script>
 </fieldset>
 <p><button>Publish</button></p>
</form>
```

<br/>

## drag & drop
通过设置元素的draggable属性使得元素可以被拖拽，例如：通常网页上的图片默认是可拖拽的，下面设置为不可拖拽
```js
Array.from(document.images).forEach(i = i.draggable = false)
```

#### drag events
拖拽过程触发的事件依次为：dragstart > dragmove > dragenter > dragleave > drop > dragend

#### drag data
拖拽事件中可以通过设置dataTransfer来传递字符串信息：
```js
dragStart(e) {
    e.dataTransfer.setData('test', JSON.stringify({id: 1, name: 'test'}))
}
```
