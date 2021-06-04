# React 移动端项目

登录&注册

## 技术选型

- react
- react-router-dom 前端路由
- redux 状态管理
  - react-redux
  - redux-thunk
  - redux-devtools-extension
- axios 发送请求
- antd-mobile UI 组件库
- typescript
- create-react-app 脚手架

## 项目目录

- pages 放置路由组件
- store 放置 redux 相关的内容
- components 放置公共组件
- api 放置请求接口函数
- styles 放置全局样式
- assets 放置其他公共资源：字体图标、公共图片
- utils 放置工具方法、公共 js 模块
- config 放置配置
  - routes 路由配置

## 项目准备工作

### antd-mobile

1. 下载库
   `yarn add antd-mobile`

2. 引入样式

- 在 index.tsx 中引入全局样式
  `import 'antd-mobile/dist/antd-mobile.less'`

3. 自定义主题

- 下载库
  `yarn add @craco/craco craco-less -D`
- 修改 package.json 中的 scripts，启动项目指令
  `react-scripts --> craco`
- 在项目根目录定义一个配置文件: craco.config.js

```js
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
```

4. 测试

- 在 App.tsx 引入 Button 组件看效果

### 移动端适配和事件点透问题

1. 事件点透问题

- 使用 fastclick 解决
- 配置 index.html

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
/>
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
  if ("addEventListener" in document) {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        FastClick.attach(document.body);
      },
      false
    );
  }
  if (!window.Promise) {
    document.writeln(
      '<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"' +
        ">" +
        "<" +
        "/" +
        "script>"
    );
  }
</script>
```

2. 移动端适配

- 使用 viewport

- 下载包
  `yarn add postcss-px-to-viewport -D`

- 配置 craco.config.js

```js
const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
  ...,
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
}
```

3. 测试

- 设置样式 width
- 看是否变成 vw 单位

