---
sidebar_position: 1
---

# 导入限制

对于项目导入功能存在一些限制

## Keil 项目

**Keil 项目** 的项目导入功能的一些限制：

- **Keil 版本限制**：

  *只支持 **v5** !!!*

- **RTE 组件**:

  因为在 UVPROJX 项目文件中 MDK 的 RTE 组件的描述更复杂，Eide 不支持引入这些 RTE 组件

  因此，如果您的项目有 RTE 组件，建议不要导入它们 （只有CMSIS组件的除外）
  
  那些有 RTE 组件的有以下绿色图标：

  ![](https://discuss.em-ide.com/assets/files/2022-05-11/1652277659-209867-image.png)

  :::caution 强制导入
  如果你强行导入一个带有 RTE 组件的 Keil 项目，你必须手动添加缺失的 `源文件`，`包含目录` 到项目 ！
  :::