# Vuex
Vuex是针对Vue开发的数据状态管理工具，是VUE的一个插件；使用Vuex主要解决组件间共享数据管理问题，实现共享数据的统一管理。

<br/>

## Vue Plugin
Vue提供了插件开发接口：Vue.use(plugin)，通过接入插件来扩展框架能力

Vue插件需要提供install方法供Vue调用完成插件注册

```js
// 定义插件
const plugin = {
    install(Vue) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function() {}
        
        // 2. 添加全局资源
        Vue.directive('my-directive', {})
        
        // 3. 注入组件
        Vue.mixin({})
        
        // 4. 添加原型方法
        Vue.prototype.$myMethod = function() {}
    }
}

注册插件
Vue.use(plugin)
```

<br/>

## Vuex
```js
var index = {
    Store: Store,
    install: install,
    version: '3.0.1',
    mapState: mapState,
    mapMutations: mapMutations,
    mapGetters: mapGetters,
    mapActions: mapActions,
    createNamespacedHelpers: createNamespacedHelpers
}

module.exports = index
```
不难发现，Vuex主要包含三部分内容：
1. install方法，用于注册Vue插件
2. Store对象，用于管理数据
3. 其他方法，用于辅助管理

```js
// install 主要逻辑，在每个Vue实例上添加$store对象
Vue.mixin({ beforeCreate: vuexInit })

function vuexInit () {
    var options = this.$options;
    
    // store injection
    if (options.store) {
        this.$store = typeof options.store === 'function'
            ? options.store()
            : options.store;
    } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store;
    }
}
```

<br/>

## Store
store常用的方法主要是commit和dispatch，前者为同步处理，后者异步

```js
Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

    ...
    
    // 从mutation中查找，然后执行
    var entry = this._mutations[type];
    this._withCommit(function () {
        entry.forEach(function commitIterator (handler) {
            handler(payload);
        });
    });
    
    ...
};
```

```js
Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;
    
    ...
    
    // 从action中查找，执行action，返回promise
    var entry = this._actions[type];
    return entry.length > 1
        ? Promise.all(entry.map(function (handler) { return handler(payload); }))
        : entry[0](payload)
};
```


