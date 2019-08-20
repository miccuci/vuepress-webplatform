# vue工程添加全局配置文件
---

> 在基于vue项目开发的时候遇到一个小需求，由于项目部署环境的变更，导致前端工程中一些全局配置需要经常修改，而之前每次变更都需要重新打包发布，耗时太长操作也麻烦，于是参考网上的一些解决方案在项目中增加了一个 `globalConfig.js` 全局配置文件，支持打包完成后修改该文件中对应配置项刷新浏览器即可生效。接下来一起看看是如何实现的吧...

### 实现步骤

1. 在项目根路径中添加 `globalConfig.js` 文件
```
globalConfig = { // 兼容ie
  BASE_API: 'http://localhost:8080/', // 接口请求地址
  test: 'hello globalConfig'
}
```

2. 在项目 `index.html` 模板中引入globalConfig.js文件，**使用绝对路径且加入时间戳阻止浏览器缓存**
![html引入globalConfig](https://upload-images.jianshu.io/upload_images/8245634-e3689e9a8e34cff3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
<script>document.write('<script src="/globalConfig.js?t=' + new Date().getTime() + '"><\/script>')
</script>
```
3. 如果项目有配置eslint检测，需要在 `.eslintrc.js` 中添加如下配置项防止eslint校验变量未定义错误
![eslint配置忽略报错](https://upload-images.jianshu.io/upload_images/8245634-d6613417c96c9e0c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
  { 
    ...
    'no-implicit-globals': 0
  }
  globals: {
    'globalConfig': true
  }
```

4. webpack生成环境打包配置 `webpack.prod.conf.js` 中使用`CopyWebpackPlugin`插件将globalConfig文件从根目录copy到打包文件根目录dist文件夹下
![webpack打包配置](https://upload-images.jianshu.io/upload_images/8245634-161628e4300e4e63.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
// copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      },
      {
        from: path.resolve(__dirname, '../globalConfig.js'),
        to: config.build.assetsRoot,
        ignore: ['.*']
      }
    ])
```

### 代码中使用globalConfig配置项

由于globalConfig.js中定义的变量直接挂在在window全局变量上，在代码中通过globalConfig.test的方式即可获取globalConfig中配置项的值
```
console.log('objecttest', globalConfig.test)
```

通过以上步骤修改后，打包文件夹dist中会生成globalConfig文件，在部署时只需要修改dist文件夹中的globalConfig文件即可生效，而无需再重新打包 :)
![修改dist文件夹下globalConfig文件立即生效](https://upload-images.jianshu.io/upload_images/8245634-e255e3430258103c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![效果：修改全局配置立即生效](https://upload-images.jianshu.io/upload_images/8245634-f705e197ace0cd62.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



