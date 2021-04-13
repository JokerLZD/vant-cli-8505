module.exports = {
  name: 'basic-ui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/basic-ui/',
    },
  },
  site: {
    title: 'basic-ui',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    hideSimulator: true,
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
    ],
  },
};
