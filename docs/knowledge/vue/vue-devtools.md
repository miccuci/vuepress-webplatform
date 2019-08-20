# vue开发工具
---

### npm(node包管理工具)
前端项目框架和模块的下载管理工具，类似后台maven工具，安装node时自带npm
1. 安装node
node官网下载地址：`http://nodejs.cn/download/`
![node下载](https://upload-images.jianshu.io/upload_images/8245634-51533d8119f8de75.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. 在命令行工具中配置npm淘宝源镜像
`npm config set registry https://registry.npm.taobao.org`
![命令行工具运行常用npm指令](https://upload-images.jianshu.io/upload_images/8245634-27d472f2413aabe3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


3. npm常用指令
`npm install xxx [-g] [--save]` ->安装依赖模块,-g为全局安装，--save是否保存到配置文件中
`npm run dev` ->本地启动一个webpack-dev-server服务器，运行项目
`npm run build` ->打包前端项目，生成静态html、css、js
`npm run test` ->运行测试代码

4. npm配置文件package.json
```
// 一个常见的package.json文件
{
  "name": "vue-admin-template",
  "version": "3.6.0",
  "license": "MIT",
  "author": "Pan <panfree23@gmail.com>",
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js",
    "build:report": "npm_config_report=true node build/build.js",
    "lint": "eslint --ext .js,.vue src",
    "test": "npm run lint"
  },
  "dependencies": {
    "axios": "0.17.1",
    "element-ui": "2.3.4",
    "js-cookie": "2.2.0",
    "normalize.css": "7.0.0",
    "nprogress": "0.2.0",
    "vue": "2.5.10",
    "vue-router": "3.0.1",
    "vuex": "3.0.1",
    "echarts": "3.8.5"
  },
  "devDependencies": {
    "autoprefixer": "7.2.3",
    "babel-core": "6.26.0",
    "babel-eslint": "8.0.3"
  }
}
```

### VSCode编码工具安装及配置
1. 安装vscode
vscode官网下载地址：`https://code.visualstudio.com/`
![vscode下载](https://upload-images.jianshu.io/upload_images/8245634-bae2a6c8dfd09940.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2. 常用插件下载
中文：`Chinese (Simplified) Language Pack`
代码校验：`eslint`
vue代码优化显示：`vetur`
vue简写代码：`vue vscode snippets`
![插件下载](https://upload-images.jianshu.io/upload_images/8245634-23c8357a114d571c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3. vscode统一配置
![vscode配置](https://upload-images.jianshu.io/upload_images/8245634-b678287d3a5c2bf2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
操作步骤为：点击文件->首选项->设置->用户设置，将如下json代码粘贴到用户设置区
```
{
    "editor.tabSize": 2,
    "editor.fontSize": 18,
    "workbench.startupEditor": "newUntitledFile",
    "sublimeTextKeymap.promptV3Features": true,
    "explorer.confirmDelete": false,
    "files.exclude": {  
        "**/.git": true,  
        "**/.svn": true,  
        "**/.DS_Store": true,  
        "**/node_modules": true,  
        "**/iOS": true,
        "**/.gitignore":true,  
    },
    "workbench.colorTheme": "Monokai",
    "window.zoomLevel": 0,
    "git.ignoreMissingGitWarning": true,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "html",
            "autoFix": true
        },{
            "language": "vue",
            "autoFix": true
        }
    ]
}

```

### 使用vue-cli脚手架快速搭建vue开发环境
1. `npm install -g vue-cli` ->全局安装vue-cli脚手架
2. `vue init webpack vueTest`->初始创建vue模板工程
3. 在项目根路径打开命令行，执行`npm install`安装依赖，`npm start`启动项目
vue-cli快速搭建项目参考网址：`https://www.jianshu.com/p/2769efeaa10a`
