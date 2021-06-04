const CracoLessPlugin = require("craco-less");

module.exports = {
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
};