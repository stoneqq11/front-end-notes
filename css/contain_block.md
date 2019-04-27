# 包含块(Contaning Block)
在[盒模型](./box_model.md)中提到，每个盒子由：内容区、内间距、边框和外间距组成，通常情况下，包含块就是父级块元素的内容区域，但也有例外情况。

<br/>

## 确定包含块
根据元素的position属性，可以确定其包含块：

1. position为static（默认值）/relative时，其包含块是其上级块元素内容区
2. position为absolute时，其包含块是其上级定位不为static（可以是fixed|absolute|relative|sticky）元素内容区
3. position为fixed时，其包含块是视窗viewport

<br/>

## 包含块对样式影响
元素在页面的显示，包括位置、大小都需要根据其包含块来觉得；例如：

1. position为absolute的元素，设置的top/left/right/bottom，需要根据其包含块来定位
2. 非定位元素，设置margin/width/height为百分比时，需要根据包含块来计算
