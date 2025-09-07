---
sidebar_position: 10
---

# 调试项目

本节中将介绍如何在 vscode 中调试你的 **Cortex-M** 项目

在最新的 EIDE v3.25.1 中，已经新增了一键调试功能，使用该功能可以免去编写繁杂的 `launch.json` 配置文件。下文将介绍用法。

## 准备工作

1. 安装 [cortex-debug](https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug) 插件（**无需做任何配置，只需安装该插件即可**）

2. 确保工程可以正常烧录。一键调试功能将从烧录配置中自动生成对应的调试配置，因此在调试前必须确保可以正常烧录。

3. 安装 arm-none-eabi-gcc 工具链。Windows 用户可以通过 **安装实用工具** 功能自动安装。

### 对于 STLink

如果你选择了 `STLink` 烧录器

![](/docs_img/flasher_name.png)

那么你需要通过实用工具功能安装如下软件：

`STM32 Cube Programmer CLI` 和 `STLink GDB Server`

![](/docs_img/stlink_tools.png)

## 启动调试器

一切就绪后，点击项目栏上的调试按钮 <img width="16px" bor src="/docs_img/icon/Run_16x.svg"/> 直接启动调试

![](/docs_img/debug_btn.png)

注意**不要使用** VSCode 自带的Debug侧边栏启动调试，因为默认状态下 VSCode 需要通过 launch.json 读取配置。而此处的调试配置是自动生成的，不会出现在 launch.json 中。

:::caution 注意
再次强调，一键调试功能 的调试配置取决于你使用的烧录配置，因此在调试前必须确保可以正常烧录。<br/>
关于烧录配置，前往：https://em-ide.com/docs/modules/flasher 处查看文档<br/>
一键调试功能目前支持的烧录软件有：`JLink`, `STLink`, `OpenOCD`, `pyOCD`。其他的烧录软件对应的调试暂时不受支持，请自行编写 launch.json
:::

## 故障排查

在使用 Cortex-Debug 进行调试的时候，有时可能由于仿真器，开发板，或者配置的问题而导致无法启动调试。

当遇到这种情况时，请按照如下步骤排查：

1. 检查 `DEBUG CONSOLE` 面板的输出日志

![](/docs_img/debug_console_log.png)

2. 检查 `gdb-server` 的输出日志

![](/docs_img/debug_server_log.png)

### 常见故障

1. 弹框提示：`GDB Server Quit Unexpectedly`.

![](/docs_img/debug_issue__gdb_quit.png)

这种情况一般有两个可能原因：
  1. 可能是你的调试探针（又称仿真器）出现了问题，导致 gdb server 无法连接到可用的调试探针因此直接退出。请检查线路连接或者检查仿真器的固件版本是否过低
  2. 可能是你的芯片与调试探针之间的连接有问题，因而导致 调试探针 无法检测到目标芯片。

---

2. 弹框提示：`Timeout`.

![](/docs_img/debug_issue__timeout.png)

这种情况一般是无法暂停你的芯片，因此导致等待超时。有的调试探针（又称仿真器）可能需要连接 NRST 引脚才能正常调试

:::caution 注意
对于不同的调试的类型（JLink, STLink, OpenOCD），上述的错误现象可能有一些差别。因此上述内容仅作为一些参考。
:::
