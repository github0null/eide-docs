---
sidebar_position: 30
---

# 项目设置

其他的项目设置

## 可用的设置项

![](/docs_img/prj_settings_preview.png)

### 项目名

项目名称

- **在构建器中**

  它用于在生成输出文件时确定文件名 (比如：`.elf`, `.hex`, `.bin` ...).

  它是变量 `${ProjectName}` 的值

### 输出文件夹名

它是构建器输出文件夹的名称

这意味着构建过程中的所有中间文件都将在此文件夹中生成

默认值为 `build`

### 环境变量

我们支持在项目中添加一些环境变量

这些变量可用于：

- 源文件路径

- 编译器参数

- 构建流程（进程的环境变量）

- 烧录器命令

#### 特殊的 EIDE 变量

- `COMPILER_CMD_PREFIX`: 值类型 `string`

  此变量用于向编译器传递一些固定参数

  因为有一些编译器需要 `许可证参数` 和 `激活码参数`

- `MCU_RAM_SIZE`: 值类型 `number, hex number`

  此变量用于打印内存使用情况，计算百分比

  *必须和 `MCU_ROM_SIZE` 同时使用*

- `MCU_ROM_SIZE`: 值类型 `number, hex number`

  此变量用于打印内存使用情况，计算百分比

  *必须和 `MCU_RAM_SIZE` 同时使用*

- `EIDE_BUILD_ORDER`: 值类型 `number`

  中用于在 [多项目工作区](../advance/multi_prj_workspace) 中确定项目构建优先级