
# 盒模型
CSS使用盒模型来描述每一个元素，然后根据[可视化格式模型](./visual_format_model.md)进行页面布局；

一个盒模型主要包含四部分，从内到外依次是：内容区域、内间距、边框、外间距。

<br/>

## 盒类型
盒子分为：块状盒、行内盒、行内块状盒三种，每种表现行为都不一样

1. 块状盒，使用 (display: block) 生成，可以设置其盒模型中的任意样式，表现为独占一行；
2. 行内盒，使用 (display: inline) 生成，它表现为行内的一部分内容，对其设置宽高是无效的，但设置外间距会影响到其他元素；
3. 行内块状盒，使用 (display: inline-block) 生成，它表现为非独占一行的块状盒；

> 对于第2点，非替换的行内元素（non-replaced inline element, 如 <a>/<span>等）设置上下外间距不会影响到其盒模型，也不会对其他元素造成影响

## 内容区域
内容区域用来显示盒子的内容，其大小是通常是width/height设定的值；
但也受到其他因素的影响，例如：并未设置width/height，但盒子包含了另外的盒；

<br/>

## 内间距 padding
> 内间距值决定了内间距区域大小；内间距区域可以用来显示背景。

> padding 是 padding-top/padding-right/padding-bottom/padding-left 的缩写，其缩写规则同 margin

> 内间距的值可以是具体的数值如px，或者百分比%
1. 为%时，和margin一样，四边的计算都是  百分比 * 其包含快的宽
2. 设置负值无效

<br/>

## 边框 border
> 可以为盒子设定 边框样式(border-style)/边框宽度(border-width)/边框颜色(border-color)，border是这三者的缩写
```css
border: solid 1px red;
border-style: solid;
border-width: 1px;
border-color: red;
```

> border 同时设置了四边的样式，也可以单独设置
```css
border-left: solid 1px red;
border-left-style: dashed;
border-right-width: 3px;
...
```

<br/>

## 外间距 margin
> 外间距的值决定了外间距区域的大小；外间距区域通常是透明的。

> margin 属性是 margin-top/margin-right/margin-bottom/margin-left 的缩写，下面几种情况对应的top/right/bottom/left值实例：
```css
margin: 1px             ===> 1px 1px 1px 1px
margin: 1px 2px         ===> 1px 2px 1px 2px
margin: 1px 2px 3px     ===> 1px 2px 3px 2px
margin: 1px 2px 3px 4px ===> 1px 2px 3px 4px
```

> 外间距取值可以是具体的数值，也可以是百分比%，还可以设置为关键字auto
1. 当值为百分比时，其四周间距的取值计算为  百分比 * 其包含块的宽
2. 取值为auto时，
3. 当值为数值或百分比时，可以是负值

> 相邻的盒子外间距在垂直方向上可能会产生合并

<br/>

## 盒大小(CSS3)
在对盒子设置 width/height 属性后，其内容区域大小便和 width/height 的值一致；此时盒子在页面上显示的大小还需要加上边框和间距的距离，有时候需要直接设定页面上盒子显示的大小，CSS提供了 **box-sizing** 属性来控制盒子的显示行为，提供两个可选值：

1. content-box(默认值)，此时 width 设定的是内容区域宽度，盒子在页面上显示的真正宽度为 width + padding + border + margin
2. border-box, 此时 width 设定的是（内容区域宽度 + padding + border）的宽度，在页面上显示的真正宽度为： width + margin
