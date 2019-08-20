# vue编程风格指南
---

### 前言

本项目的风格指南主要是参照 `vue` 官方的[风格指南](https://cn.vuejs.org/v2/style-guide/index.html)。在正真开始使用该项目之前建议先阅读一遍指南，这能帮助让你写出更规范和统一的代码。当然每个团队都会有所区别。其中大部分规则也都配置在了[eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)之中，当没有遵循规则的时候会报错，详细内容见[eslint](./eslint.md)章节。

当然也有一些特殊的规范，是不能被 eslint 校验的。需要人为的自己注意，并且来遵循。最主要的就是文件的命名规则，这里拿`vue-element-admin`来举例。

### 文件及文件夹命名
1. 文件夹名字全部小写，多个单词用连字符 - 连接,如：
```
@/src/components/file-upload/index.vue
@/src/views/custom-pages/index.js
```

2. 文件夹内通常包含一个index文件，`index.js`、`index.vue`

3. vue单文件组件（.vue）
所有组件名字使用大写驼峰 (PascalCase)，index.vue除外，如：
```
@/src/components/back-to-top/index.vue
@/src/components/charts/Line.vue
@/src/views/drug/DrugProduct.vue
```
4. js文件
js文件名称使用小写驼峰，如：`followUp.js`,`reportForm.js`

### 变量命名
1. 常量命名字母大写，_分割，如：
```
const MAX_LENGTH = 8
```
2. 变量及方法命名使用小驼峰，如：
```
const pageSize = 10
function findCurrentApproval()
```

### 函数命名推荐
1. 获取数据使用前缀: `find`、`get`、`fetch`等，如：
```
async fetchData()
async fetchDictList()
async getDataById()
```
2. 响应事件方法使用前缀：`on`、`handle`,如：
```
onCheckboxChange()
onSearch()
handleSave()
handleDelete()
```

