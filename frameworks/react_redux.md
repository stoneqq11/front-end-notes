# react-redux
react-redux 是连接react和redux的中间件，通过react的context特性和redux提供的store实现react共享数据管理

```js
// react-redux结构，常用到Provider connect
import Provider from './components/Provider'
import connectAdvanced from './components/connectAdvanced'
import { ReactReduxContext } from './components/Context'
import connect from './connect/connect'

export { Provider, connectAdvanced, ReactReduxContext, connect }
```

<br/>

## Provider
```jsx
// Provider render
render() {
    const Context = this.props.context || ReactReduxContext

    return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
}
```

```js
// ReactReduxContext，使用到react context特性
import React from 'react'

export const ReactReduxContext = React.createContext(null)

export default ReactReduxContext
```

<br/>

## [React context](https://reactjs.org/docs/context.html#reactcreatecontext) 
React中，组件间数据传递是通过props逐层进行的，单层级越来越多，部分数据的传递就变得很臃肿。

React context 特性可以很好的解决这种问题，context.Provider下的任意层级子节点都可以通过**this.context**属性访问到共享状态

```jsx
// context
const TestContext = React.createContext(null)

render() {
    return (
        <TestContext.Provider value="test">
            <TestChild></TestChild>
        </TestContext.Provider>
    )
}

// TestChild，通过context拿到共享的值
render() {
    // test
    console.log(this.context)
    return (
        <TestDescendent/>
    )
}

// TestDescendent，通过context拿到共享的值
constructor() {
    // test
    console.log(this.context)
}
```

