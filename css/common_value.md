# 通用值

CSS中提供了 inherit / initial / unset 三个通用的属性值，对每个属性除了设置对应特定的取值，还可以设置上述三个通用属性

## inherit
继承之意，设置为样式为基础其父元素该样式的计算值；

CSS中部分样式是默认支持继承的，也就是在没有设置该样式时，采用默认的inherit行为计算值；要确认样式是否支持继承，可以查询[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)

## initial
初始值，即该样式的默认值

## unset
样式未设置；对于不支持继承的样式，取值initial；支持继承的，则表现为inherit
