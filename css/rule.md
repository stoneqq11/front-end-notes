# 样式和规则
对CCS内容和语法规则进行分类

## 样式分类
> 根据样式的主要作用对象，总体可分出 盒子样式/文本样式/布局样式/动画样式（CSS3）四部分
1. 盒子样式主要包括 width/height/padding/border/margin/background/...
2. 文本样式主要包括 font-family/font-weight/text-align/color/font-size/...
3. 布局样式主要包括 display/position/float/flex/...

## 语法规则类型
> 包含 **普通规则** 和 **@规则** 两类；

普通规则是最常见的形式，包括选择器和对应的样式定义语句
```css
p, a, #id {
    font-size: 20px;
    ...
}
```
@规则包括:@charset/@import/@media/@font-face 等
```css
@charset 'utf-8';
@import '../common.css';
@media screen and (max-width: 800px) {
    ...
}
@font-face {
    font-family: 'test-font';
    src: url('../test.ttf');
}
```
