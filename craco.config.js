const CracoLessPlugin = require("craco-less");
const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
  //自定义主题颜色
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // https://mobile.ant.design/docs/react/customize-theme-cn
            // pc端和移动端库less变量不一样
            modifyVars: { "@brand-primary": "#e94f4f" },
            javascriptEnabled: true,
          },
        },
      },

    },

  ],

  //移动端适配
  style: {
    postcss: {
      plugins: [
        // https://github.com/evrone/postcss-px-to-viewport
        pxtoviewport({
          unitToConvert: "px",
          viewportWidth: 375, // 设计稿宽度
          unitPrecision: 5,
          propList: ["*"],
          viewportUnit: "vw",
          fontViewportUnit: "vw",
          selectorBlackList: ["body"],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: /node_modules/,
        }),
      ]
    }
  }
};