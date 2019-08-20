
# mock使用
---

![mockjs](https://upload-images.jianshu.io/upload_images/8245634-a4fe68f937d6610a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
[官网地址](http://mockjs.com/)
[文档地址](https://github.com/nuysoft/Mock/wiki)
[示例地址](http://mockjs.com/examples.html)


### 安装&使用
`npm install mockjs --save` or `yarn add mockjs`

```
// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))

// ==>
{
    "list": [
        {
            "id": 1
        },
        {
            "id": 2
        },
        {
            "id": 3
        }
    ]
}
```

### 基础api
`Mock.mock( rurl?, rtype?, template|function( options ) )`

![参数组合](https://upload-images.jianshu.io/upload_images/8245634-fcf534503cfc0276.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![参数说明](https://upload-images.jianshu.io/upload_images/8245634-b831ab320c9cf876.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 实战使用
1. main.js中引入mock.js文件
![image.png](https://upload-images.jianshu.io/upload_images/8245634-13118e9e7b04a935.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. mock.js中引入Mockjs
![image.png](https://upload-images.jianshu.io/upload_images/8245634-5aeeb3b9a208f601.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. 使用Mock.mock函数生成模拟数据
![image.png](https://upload-images.jianshu.io/upload_images/8245634-206b05b1eb5284e6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4. 使用Mock.mock函数拦截请求
![image.png](https://upload-images.jianshu.io/upload_images/8245634-337780a10e441b9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

