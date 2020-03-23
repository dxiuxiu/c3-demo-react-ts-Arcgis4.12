# GIS Demo

GIS Demo

## 技术栈

`react + typescript + mobx + antd + webpack4 + less + Arcgis API 4.12`

## 项目结构

+ env 表示项目环境相关可以暂时忽略
+ dev 表示项目开发相关
```shell
webmap
├─dist # env 打包输出文件夹
│  ├─...
├─node_modules # #env 所有使用 yarn/npm 命令安装的第三方依赖包
│   ├─....
└─src # dev 核心代码
    ├─@types #env
    ├─api #dev 项目 api 相关代码
    ├─components #dev react 组件
    │  ├─...
    ├─config #dev 项目配置
    ├─css #dev 样式
    │  ├─app #dev app 样式
    │  └─arcgis #dev 重新 arcgis 内置样式
    ├─global # 全局变量
    ├─layouts #dev 布局相关
    │  ├─Footer
    │  └─Header
    ├─pages #dev 页面相关
    │  ├─...
    ├─stores #dev 管理 store (mobx)
    └─utils #dev 各类方法封装
        └─...
```


## 语法约束工具 tslint

[tslint relus](https://palantir.github.io/tslint/rules/)

`常用 tslint 设置中文参考`

+ [tslint配置规则-简书](https://www.jianshu.com/p/2b409dfc8f75)

+ [团队自定义 tslint & eslint 详细规则-掘金](https://juejin.im/post/5b3859a36fb9a00e4d53fc85)

## 初次拿到项目请做以下操作

+ 浏览文档 `VersionControlCommit.md` 了解代码提交规范,请严格遵守

## 项目命令

`使用前提: 本机已安装 node 环境 及 yarn`

```shell

 $ cd webmap

 $ yarn install 

 $ yarn start 

```


## 建议

`建议使用 react 新生命周期及 Hooks 等新特性`

## 新手学习路线

+ `react`
    + [react中组件、变量常量、方法的导入导出总结即 export 与 export defualt 的区别](https://blog.csdn.net/m0_37148591/article/details/84137259)
    + 练习作业 - react 实现 [todoList](http://www.todolist.cn/)  效果
+ `ES6`
    + `let/const/var`
    + `箭头函数`
    + `模板字符串`
    + `解构赋值`
    + `异步解决方案 Promise`
+ `typescript` 

+  `mobx` react 状态管理工具

+  `antd(一个组件库，会用即可)`