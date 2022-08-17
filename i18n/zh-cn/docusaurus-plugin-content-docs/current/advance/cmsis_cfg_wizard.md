---
sidebar_position: 50
---

# CMSIS 头文件配置向导

我们支持 [cmsis config wizard](https://open-cmsis-pack.github.io/Open-CMSIS-Pack-Spec/main/html/configWizard.html)

## Introduce

[CMSIS Configuration Annotations](https://open-cmsis-pack.github.io/Open-CMSIS-Pack-Spec/main/html/configWizard.html) 是一种注释格式，用于在 c 头文件中结构化地描述宏定义

经过特定工具的解析后，可以生成 GUI 配置向导，指导用户查看和修改头文件中的配置

![](/docs_img/cmsis_wizard_keil.png)

## 打开配置向导

打开一个带有正确 `CMSIS Configuration 注释` 格式的 c 头文件

![](/docs_img/cmsis_cfg_wizard_btn.png)

然后一个 webview 将在一个新标签打开

![](/docs_img/cmsis_cfg_wizard_preview.png)

现在可以开始修改头文件配置了

:::caution 注意
如果你的头文件没有正确格式的 `CMSIS Configuration 注释`，这个功能将没有任何效果，也不会有任何提示
:::

## 语法实现

我们参考了 keil 中的实现，所以我们不完全支持所有语法

**不支持的语法有：**

1. 数组类型
   
   ![](/docs_img/no_imp_cmsis_syntaxs/array.png)

2. 带有 `..` 修饰符的项

   ![](/docs_img/no_imp_cmsis_syntaxs/modifier.png)

3. 数字格式化显示

   ![](/docs_img/no_imp_cmsis_syntaxs/format.png)
