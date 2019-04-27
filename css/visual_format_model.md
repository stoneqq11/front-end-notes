
# 可视化格式模型 Visual formatting model
解析器将文档解析为文档树后，需要将它们通过一定的规则排布在可视化的媒介上，这种排布规则据是可视化格式模型

在可视化格式模型中，每个元素最终都会解析成盒子，而模型则定义如何在媒介上排列这些盒子；规则的依据主要有：

1. 盒子的类型（块状/行内）和盒子本身的大小
2. 盒子的布局类型（[普通布局](https://github.com/stoneqq11/css-summary/blob/master/%E6%99%AE%E9%80%9A%E5%B8%83%E5%B1%80.md)，[定位布局](https://github.com/stoneqq11/css-summary/blob/master/%E5%AE%9A%E4%BD%8D.md) 和 [浮动布局](https://github.com/stoneqq11/css-summary/blob/master/%E6%B5%AE%E5%8A%A8.md)）
3. 盒子与盒子之间的关系（树形的结构）
4. 外部的一些信息（如viewport的大小，UA对部分元素的不同显示定义等）

可视化格式模型会根据 [包含块](https://github.com/stoneqq11/css-summary/blob/master/%E5%8C%85%E5%90%AB%E5%9D%97.md) 来渲染盒子模型；
