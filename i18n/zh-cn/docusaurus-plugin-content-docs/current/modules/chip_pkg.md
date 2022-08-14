---
sidebar_position: 5
---

# 芯片支持包

为您的 **Cortex-M** mcu 安装芯片包

:::danger For Arm
这个功能仅支持 **Cortex-M** 项目类型
:::

## 这是什么

> CMSIS-Pack defines a standardized way to deliver software components, device parameters  and board support information and code. Adopted by leading semiconductor companies,  embedded software and tools vendors across the Arm architecture, CMSIS-Packs  increase productivity across the industry by encouraging code reuse and enabling proactive  software component deployment with online updates and dependencies checking.

我们支持安装 [cmsis-pack](https://developer.arm.com/tools-and-software/embedded/cmsis/cmsis-packs) 到 eide 项目

当您安装了 cmsis-pack 并为您的项目选择了 mcu 具体型号后，eide 将能够更好地为您选择的 mcu 生成 `调试/烧录` 配置

:::tip 不是必要的
这个功能不是必需的，即使您没有安装任何芯片支持包，eide 也会很好地工作
:::

## 安装芯片支持包

我们支持两种方式为您的项目安装芯片支持包

![](/img/prj_install_chip_pack_typ.png)

### 从仓库安装

我们为 eide 缓存了一些 [修剪过的 cmsis 包](https://github.com/github0null/eide-cmsis-pack/tree/master/packages)

如果您使用这种方式，eide 将从上面的存储库中提取所有可用的包，并提供一个列表供您选择

:::tip 为什么修剪这些包
有些 cmsis 包的尺寸非常大，这会影响项目的大小<br/>
因此，我们必须修剪它们并删除不使用的内容，以减少磁盘使用量<br/>
:::

### 从磁盘安装

你需要从网站上下载这些包（`.pack`），并在 eide 弹出的窗口中选择你要安装的包

这里有些官方的下载站点：

- `MDK5 Software Packs`: https://www.keil.com/dd2/Pack/

- `Arm Official Site`: https://developer.arm.com/tools-and-software/embedded/cmsis/cmsis-packs

## 外设组件

`外设组件` 是外设驱动源文件的集合

你可以将芯片包里的 `外设组件` 安装到项目中

![](/img/prj_chip_pkg_ins_comp.png)

这些文件将和你的项目一起被编译
