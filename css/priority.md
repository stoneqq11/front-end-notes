# 规则优先级
CSS 允许在一个元素上定义多个样式规则，同一个属性可以多次赋值，需要通过一定的优先规则确定最终使用哪个值。

<br/>

## 明确规则
1. 内联样式(style="") 具有最高优先级
2. 其次是：ID选择器(#id)
3. 然后是：其他的属性选择器(.clz|[prop=''])、伪类选择器(:active)
4. 最后是：类型选择器(h2)、伪元素选择器(::before)

<br/>

## 示例
把上述四条规则分别对应a/b/c/d，规则匹配则值为1；对于多次匹配，则值为匹配次数；计算结果越大优先级越高。
```
 *             {}  /* a=0 b=0 c=0 d=0 -> specificity = 0,0,0,0 */
 li            {}  /* a=0 b=0 c=0 d=1 -> specificity = 0,0,0,1 */
 li:first-line {}  /* a=0 b=0 c=0 d=2 -> specificity = 0,0,0,2 */
 ul li         {}  /* a=0 b=0 c=0 d=2 -> specificity = 0,0,0,2 */
 ul ol+li      {}  /* a=0 b=0 c=0 d=3 -> specificity = 0,0,0,3 */
 h1 + *[rel=up]{}  /* a=0 b=0 c=1 d=1 -> specificity = 0,0,1,1 */
 ul ol li.red  {}  /* a=0 b=0 c=1 d=3 -> specificity = 0,0,1,3 */
 li.red.level  {}  /* a=0 b=0 c=2 d=1 -> specificity = 0,0,2,1 */
 #x34y         {}  /* a=0 b=1 c=0 d=0 -> specificity = 0,1,0,0 */
 style=""          /* a=1 b=0 c=0 d=0 -> specificity = 1,0,0,0 */
```
<br/>

## 其他规则
1. !important
!important 具有最高的优先级，高于内联样式；但不易维护，破坏性太强，建议保守使用

2. 规则顺序
在相同优先级的情况下，排在后面的规则会覆盖前面的规则
