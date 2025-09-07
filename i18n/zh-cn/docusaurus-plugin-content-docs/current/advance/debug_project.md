---
sidebar_position: 10
---

# 调试项目

本节中将介绍如何在 vscode 中调试你的 **Cortex-M** 项目

在最新的 EIDE v3.25.1 中，已经新增了一键调试功能，使用该功能可以免去编写繁杂的 `launch.json` 配置文件。下文将介绍用法。

## 准备工作

1. 安装 [cortex-debug](https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug) 插件（**无需做任何配置，只需安装该插件即可**）

2. 确保工程可以正常烧录。一键调试功能将从烧录配置中自动生成对应的调试配置，因此在调试前必须确保可以正常烧录。

## 启动调试器

一切就绪后，点击项目栏上的调试按钮 <img width="16px" bor src="/docs_img/icon/Run_16x.svg"/> 直接启动调试

![](/docs_img/debug_btn.png)

注意**不要使用** VSCode 自带的Debug侧边栏启动调试，因为默认状态下 VSCode 需要通过 launch.json 读取配置。而此处的调试配置是自动生成的，不会出现在 launch.json 中。

:::caution 注意
再次强调，一键调试功能 的调试配置取决于你使用的烧录配置，因此在调试前必须确保可以正常烧录。<br/>
关于烧录配置，前往：https://em-ide.com/docs/modules/flasher 出查看文档<br/>
一键调试功能目前支持的烧录软件有：`JLink`, `STLink`, `OpenOCD`, `pyOCD`。其他的烧录软件对应的调试暂时不受支持
:::
