# Element
HTML中各种标签在解析后都会生成对应的元素（element），而Element接口规范则定义了element的行为

<br/>

## attribute
列举主要属性：
1. 元素的标签名：tagName
2. 元素的两个可以读写属性：id/className
3. 只读属性类列表：classList
4. 所有属性集合：atrributes

```html
<div class="s_tab" id="s_tab">
    <div class="s_tab_inner">
        <a>text</a>
        <a>text1</a>
    </div>
</div>
```

```javascript
const tab = document.getElementById('s_tab')

console.log(tab.tagName) // DIV
console.log(tab.id) // s_tab
console.log(tab.className) // 's_tab'
console.log(tab.classList) // ['s_tab']
console.log(tab.attributes) // {0: id, 1: class, length: 2}
```

## method
主要定义了对属性的操作方法：
1. getAttribute() 获取属性
2. setAttribute() 设置属性值
3. removeAttribute() 删除属性
4. hasAttribute() 判断是否存在某个属性

另外也定义了 getElementsByTagName()/getElementsByClassName() 方法

```javascript
// 接上面的例子
console.log(tab.hasAttribute('id')) // true

tab.setAttribute('data-id', 'test')
console.log(tab.getAttribute('data-id')) // test

tab.removeAttribute('data-id')
console.log(tab.getAttribute('data-id')) // null

console.log(tab.getElementsBy('a')) // [a, a]
```
