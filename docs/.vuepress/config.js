module.exports = {
  title: 'winning-web-platform', // 设置网站标题
  base: '/',
  description: '卫宁长沙前端团队文档及组件平台', //描述
  dest: './dist',   // 设置输出目录
  port: 2333, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/baseComponents/' },
      { text: '知识库', link: '/knowledge/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'vue-admin-template', link: 'https://github.com/miccuci/vue-admin-template' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/baseComponents/': [
        {
          title: '组件',
          collapsable: true,
          children: [
            'base/test1',
            'base/test2',
            'base/test3',
            'base/test4',
          ]
        }
      ],
      '/knowledge/': [
        {
          title: 'vue知识库',
          collapsable: false,
          children: [
            'vue/vue-devtools',
            'vue/code-guide',
            'vue/global-config',
            'vue/mock',
          ]
        },
        {
          title: 'css知识库',
          collapsable: false,
          children: [
            'css/css-layout',
          ]
        },
        {
          title: 'javascript知识库',
          collapsable: false,
          children: [
            'javascript/js-common-function',
          ]
        },
        {
          title: 'web前端知识库',
          collapsable: false,
          children: [
            'web/markdown-guide',
          ]
        }
      ]
    }
  }
}