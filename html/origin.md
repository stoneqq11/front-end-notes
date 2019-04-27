# Origin 
源是web安全模型处理中的基础；相同源之间的操作是被互相信任的，而不同源之间基本是被隔离的

<br/>

## 源的组成
一个源包含以下部分：
1. 协议 scheme
2. 主机 host
3. 端口 port
4. 域 domain，可以通过 document.domain 读写

查看页面的源，可以使用 window.origin，返回格式为：
```javascript
`${scheme}://${host}:${port}`
```
```javascript
// output: https://html.spec.whatwg.org
console.log(window.origin)
```

<br/>

## domain
由于同源策略的限制，不同源之间的内容和操作是被隔离的；但是可以通过domain来稍微放宽这个限制。

可以设置 document.domain 为当前域的子域达到相同域之间的访问

```javascript
// in page https://html.spec.whatwg.org/multipage/origin.html

// output: html.spec.whatwg.org
console.log(document.domain)

// 设置为子域后，可以与相同域名的页面相互访问
document.domain = 'spec.whatwg.org'
document.domain = 'whatwg.org'

// 设置回原来的域
document.domain = 'html.spec.whatwg.org'

```

> 只能设置为当前域名的子域，如果设置不符合该条件的值，会抛出异常
```javascript
// 接上
document.domain = 'w3.org'

//Uncaught DOMException: Failed to set the 'domain' property on 'Document': 'w3.org' is not a suffix of 'whatwg.org'.
```
