

# 弹性盒子
通过设置 **display: flex** 将元素设置为弹性布局；设置弹性布局后，很容易实现使用float/position实现起来复杂的功能，如：垂直居中/内容等分等

下面列出弹性布局相关概念：
1. 弹性容器： 设置display: flex的元素
2. flex 子项： 弹性容器的子元素
3. 主轴： 和弹性容器排列方向（通过flex-direction设置）一致的方向
4. 侧轴： 和主轴垂直的方向

## 内容排列方向(flex-direction)
```css
display: flex;
flex-direction: row|column
```
当取值 row 时，以行排列，此时横向为主轴，纵向为侧轴；取值column，以列排列，纵向为主轴，横向为侧轴

## 主轴布局方式(justify-content)
```css
display: flex;
flex-direction: row;
justify-content: flex-start|flex-end|center|space-between|space-arround
```
上述取值含义依次为：
flex-start: 从排列方向开始往末尾排列（上述情况为从左到右）
flex-end: 从排列方向末尾往开始排列
center: 排列方向居中排列，左右间距相等，子项之间无间距
space-between: 等分间距排列，开始和末尾无间距，子项间等间距
space-arround: 等分间距排列，并保留开始和末尾的间距

## 侧轴排列方式(aligin-items)
```css
display: flex;
display: row;
aligin-items: flex-start|flex-end|center|space-between|space-arround
```
和主轴垂直方向的排列，flex-direction 为 row 时，为纵向；coloumn时为横向

## 换行(flex-wrap)
```css
flex-wrap: wrap|nowrap|wrap-reverse
```
分别设置为：换行/不换行/反向换行

## 子项内容范围(flex)
```css
flex: 1
```
主要应用场景：
1. 只设置一个子项flex: 1, 其他子项固定宽度/高度，可以做到自适应布局
2. 根据各子项的flex 值，取对应比例的显示空间
