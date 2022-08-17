---
sidebar_position: 10
---

# 调试项目

调试你的 **Cortex-M**, **STM8** 项目

## 准备工作

- **对于 Cortex-M 项目**

  你需要安装 [cortex-debug](https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug)

  [cortex-debug docs](https://github.com/Marus/cortex-debug/wiki)

- **对于 STM8 项目**

  你需要安装 [stm8-debugger](https://marketplace.visualstudio.com/items?itemName=CL.stm8-debug)

## 启动调试器

> For Cortex-M Project

1. 打开烧录器配置并设置相关选项 (**EIDE 会根据不同的烧录器配置自动生成相应的调试配置**)

2. 打开 `launch.json`，检查 cortex-debug 调试配置

3. 用调试探针连接单板

4. 在 **VSCode调试视图** 中选择调试配置名称

5. 按下 `F5` 启动调试器

  ![](/docs_img/debug_cortex-m_prj.png)

:::tip 更多用法
参考 https://github.com/Marus/cortex-debug/wiki
:::