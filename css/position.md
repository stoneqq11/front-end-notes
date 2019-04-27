# 定位 Position
position是CSS提供的另外一种布局方式，包括static(静态，默认)/relative(相对)/absolute(绝对)/fixed（固定）四种方式

配合top/right/bottom/left的值（下面简称offset值）进行定位

<br/>

## top|right|bottom|left
offset值可以取值为 数值/百分比/auto

offset值为百分比时，top/bottom计算为  百分比 * 其包含块高度；left/right计算为   百分比 * 其包含块宽度

offset值可以是负值

<br/>

## static
静态定位下，表现为和normal flow一样，也是默认的布局方式，此时会忽略掉设定的offset值

<br/>

## relative
相对定位时，首先对元素进行普通布局分析，然后通过设定的offset值，相对于普通布局位置进行移动；这样，可能会与其他元素内容视觉上重叠

<br/>

## absolute
绝对定位时，元素会脱离普通布局流，通过offset值相对于其包含块移动定位

绝对定位元素的包含块是其上级定位不是static的定位元素

<br/>

## fixed
固定定位，布局方式和绝对类似，不同的是其包含块是viewport，表现为不会随着文档的滚动而滚动
