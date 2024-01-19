---
sidebar_position: 1
---

# 安装

在你的 pc 上安装 EIDE 并设置开发环境

## 先决条件

这个插件基于 VSCode，如果你要使用它，请：

- **确保你熟悉 VSCode**
- **确保您熟悉 c/c++ 项目的基本构建过程**

**因为本文档以上述条件为前提！！！**

## 安装 EIDE

在本节中，我们将指导您如何正确安装 `EIDE`

:::caution 需要网络
我们需要从网络下载一些包，确保你的网络连接正常<br/>
如果你需要**离线安装**，请前往 [**Github Release**](https://github.com/github0null/eide/releases) 下载离线安装包
:::

- **安装插件**

  打开 VSCode 插件市场，搜索 `eide`，选择 `Embedded IDE` 并安装它

  ![](/docs_img/install_from_market.png)

  安装插件后，它将启动并开始初始化

  插件将**自动下载并安装** [eide-binaries](https://github.com/github0null/eide-resource/tree/master/binaries) 和 [.NET6 X64 运行时](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)，请耐心等待

  ![](/docs_img/install_dotnet.png)

  当 `.NET6 运行时` 成功安装后，你需要重启 VSCode 刷新 `系统环境变量`

  然后 EIDE 将在启动时检查 `.NET6 运行时`，打开 `输出` 面板查看 `eide-log`

  ![](/docs_img/eide_log_panel.png)

  :::caution 未找到运行时
  有时候，运行时**已经安装**，但是插件仍提示**未找到**<br/>
  你可能需要 **关闭所有 VSCode 示例**，然后在系统终端中执行 `code .` 命令，刷新 VSCode 的 `系统环境变量`
  :::

  :::info 对于 Linux 系统
  我们不支持为 Linux 自动安装 `.NET6 运行时`<br/>
  因此对于 Linux，需要手动下载并安装 [.NET6 X64 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
  :::

  :::caution 运行时版本要求
  如果您打算手动安装运行时，您必须安装**主版本号**为 **6** 的版本（如：v6.0.5）
  [点击此处下载运行时](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
  :::

当您完成上述操作后，EIDE 将正常安装在您的计算机上，一切就绪

## 功能区域

现在，我们将带您浏览插件的功能区域

![](/docs_img/eide_func_area.png)

- **EIDE 项目**: 项目视图

  `EIDE 项目` 视图将显示当前所有你已打开的项目

  ![](/docs_img/eide_prj_area.png)

- **OPERATIONS**: 操作视图

  `操作` 视图将显示所有可用的快捷命令

  ![](/docs_img/eide_operations.png)

## 配置工具链

EIDE 支持很多工具链，但是这些包太大了，所以我们 **没有内置** 它们到插件中，你需要手动安装这些包

- 在 `操作` 视图中单击 `设置工具链`

  然后会弹出一个选择框，您需要选择要使用的编译器，并设置其安装路径

  如果你设置的路径是有效的，一个 '✔' 标记将会出现

  ![](/docs_img/toolchains.png)

  :::tip 什么是工具链安装目录
  `工具链安装目录` 是指你的编译器的**根目录**<br/>
  示例：<br/>
    - 如果你的 GCC 编译器位置是：`d:/software/my_toolchain/arm_gcc_10/bin/arm-none-eabi-gcc.exe`
    - 那么，你需要将 `工具链安装目录` 设置为 `d:/software/my_toolchain/arm_gcc_10`，因此对于 GCC 来说，这个目录就是 `bin` 文件夹所在的目录
  :::

  :::tip 让 EIDE 自动安装工具链
  对于 Windows 平台，EIDE 为一些免费的编译器软件提供了一些在线安装包<br/>
  你可以使用 [安装实用工具](../advance/install_tools) 功能进行安装
  :::
