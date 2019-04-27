
# 变量对象（variable object）
VO 是存储当前代码数据信息的对象，包含 **变量声明**、**函数声明(不包含函数表达式)**、**函数形参定义** 三部分
```
VO = {
    variables,
    functions,
    arguments
}
```

```
var n = 0
function f(a) {
    var b = 1
    
    return a + b
}

f(10)

// 上述代码执行生成两个EC, 对应的VO|AO分别如下：
VO(global) = {
    n: 0,
    f: function
}

AO(function f) {
    a: 10,
    b: 1
}
```

## 活动对象（activation object）
当进入函数执行上下文后，VO不能直接访问，会创建一个AO对象，替代VO的作用
```
VO(globalContext) === global
VO(functionContext) === AO
```
> 变量对象（AO|VO）在每次进入上下文时候创建，并初始化值；在执行时进行值的更新
