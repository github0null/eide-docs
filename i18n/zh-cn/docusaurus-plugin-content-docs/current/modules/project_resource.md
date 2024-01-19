---
sidebar_position: 2
---

# 项目资源

管理你的项目资源

## 介绍

**项目资源** 视图提供了一些 UI 来显示项目中的 `源文件`, `源文件夹`, `输出文件`

我们提供了一些操作命令，你可以：`添加/移除 源文件，文件夹`, `排除、包含源文件，文件夹`, `修改源文件路径` .....

![](/docs_img/proj_res_preview.png)

## 上下文菜单

每个 UI 都有它的 `上下文菜单`，你可以 **右击** 鼠标触发这些菜单

![](/docs_img/ctx_menu_prj.png)

![](/docs_img/ctx_menu_prj_res.png)

![](/docs_img/ctx_menu_prj_folder.png)

![](/docs_img/ctx_menu_prj_file.png)

## 添加源文件资源

你可以 **添加源文件**，**添加源文件夹** 到你的项目

![](/docs_img/prj_res_add_src_file.png)

### 添加源文件

点击 `添加文件` 菜单项添加文件

我们支持以下 `文本文件` 类型：

- **C Files**: `.c`
- **C++ Files**: `.cpp .cxx .cc .c++`
- **ASM Files**: `.s, .asm, .a51`

我们支持以下 `二进制文件` 类型：

- **Obj Files**: `.obj, .o`
- **Lib Files**: `.lib, .a`

### 排除源文件

你可以使用 `Exclude File` 按钮排除某些源文件，被排除的源文件**不会被编译**

![](/docs_img/explorer_exclude_file.png)

### 添加源文件夹

点击 `添加源文件夹` 菜单项添加源文件夹

我们支持 2 种类型的文件夹：

![](/docs_img/prj_res_folder_typ.png)

- `Virtual Folder`: 虚拟文件夹，磁盘上不存在

  在创建虚拟文件夹时，需要为其指定一个名称

  然后你可以通过右键菜单 `添加文件` 或 `添加文件夹`

- `Normal Folder`: 链接磁盘上存在的文件夹

  您可以链接一个现有的文件夹到项目，eide 将自动递归搜索该文件夹中的 **所有** 源文件，并将 **所有可用的源文件** 添加到您的项目

  并且 eide 将监视源文件夹的变化，如果有一些文件/文件夹已经创建或删除，eide 将再次自动搜索您的源文件夹，自动更新源文件列表

  :::caution 被忽略的文件
  EIDE 在搜索过程中 **只处理文本文件**，
  因此如果你想添加 **.obj**, **.lib**, **.a** 二进制文件到项目，你必须手动通过 [添加源文件](#添加源文件) 功能添加
  :::
  
  :::caution 注意
  eide **不会**在源文件夹中自动搜索和添加你的 `包含路径（IncludePath）`，你必须手动添加它们 ！！！查看 [版本兼容性](../notice/compatibility_changes) 了解软件变更
  :::

如何在已有项目中区分两种文件夹类型？

- `Virtual Folder`: 带有 <img width="16px" bor src="/docs_img/icon/folder_virtual.svg"/> 图标

- `Normal Folder`: 带有 <img width="16px" bor src="/docs_img/icon/folder_root.svg"/> 图标

![](/docs_img/prj_res_folder_typ_cmp.png)

## 导入源文件树

如果您要将一些项目迁移到 eide，您可以通过以下方式将源文件树导入到项目中

![](/docs_img/prj_res_imp_src_tree.png)

目前我们支持 `IAR For ARM`, `IAR For 8051/STM8`, `Segger Embedded Studio` 项目

![](/docs_img/prj_res_imp_src_tree_importers.png)

按照提示选择适当的项目文件，然后 eide 将导入 `源文件树`, `包含目录` 和 `宏定义` 到你的项目

:::caution 文件路径限制
将要导入的项目文件路径必须只包含 `ASCII` 字符
:::

:::caution 将覆盖当前项目
注意，这个功能将覆盖 `源文件树`, `包含目录` 和 `宏定义` 到你的项目，这是不可逆的
:::

## 附加编译参数到源文件

:::caution 注意
此特性仅用于为一些单一源文件追加**特定**编译器参数<br/>
如果您想为您的项目添加全局编译器参数，请参考 [**构建器选项**](../modules/builder#高级配置)
:::

有时你想为一些源文件添加一些特定的编译参数，这个特性可以帮助您做到这一点

右键要应用参数的 `源文件` 或 `文件夹`，选择 `修改附加参数`

![](/docs_img/explorer_add_extra_args.png)

当文件或者文件夹被应用了附加参数后，其对应的图标会发生变化

![](/docs_img/explorer_check_extra_args.png)

同时，我们支持在编译器参数中使用一些特殊的表达式：

|表达式|描述|
|:----|:----|
|`$<override:new_args>`|使用 `new_args` 覆盖所有编译参数|
|`$<replace:old_args/new_args>`|替换编译参数，将 `old_args` 替换为 `new_args`|

:::caution 注意
**表达式** 中**不得**出现 `<`，`>`，`/`，`:` 之类的元字符
:::

## 附加编译参数到源文件（不建议使用）

:::caution 注意
此特性仅用于为一些单一源文件追加**特定**编译器参数<br/>
如果您想为您的项目添加全局编译器参数，请参考 [**构建器选项**](../modules/builder#高级配置)
:::

有时你想为一些源文件添加一些特定的编译参数，这个特性可以帮助您做到这一点

![](/docs_img/prj_res_add_src_file_args.png)

单击 `为源文件附加单独的编译器参数`，eide 将创建并打开一个空的 yaml 配置文件，如下所示：

![](/docs_img/prj_res_add_src_file_args_preview.png)

现在你可以使用 [glob patterns](https://github.com/micromatch/micromatch#matching-features) 去匹配对应的源文件，然后附加参数

由于我们有两种文件夹类型（[源文件夹](#添加源文件夹)），所以我们提供了两种 `glob patterns` 类型

- `files`: 使用 **真实文件系统路径** 匹配文件

- `virtualPathFiles`: 使用 **虚拟路径** 匹配文件

我们支持在编译器参数中使用一些特殊的表达式：

|表达式|描述|
|:----|:----|
|`$<override:new_args>`|使用 `new_args` 覆盖所有编译参数|
|`$<replace:old_args/new_args>`|替换编译参数，将 `old_args` 替换为 `new_args`|

:::caution 注意
**表达式** 中**不得**出现 `<`，`>`，`/`，`:` 之类的元字符
:::

**示例：**

如果您的项目文件夹结构如下：

```
--
 |
 +-- .eide
 |
 +-- hal
      |
      +-- STM32F10x_StdPeriph_Driver
           |
           +-- src
                |
                +-- stm32f10x_adc.c
                    ...
                    stm32f10x_gpio.c
 |
 +-- src
      |
      +-- main.c
      |
      +-- stm32f10x_it.c

 |
 +-- project.code-workspace
 |
 +-- readme.md
```

现在如果你想：

- 为文件夹 `hal/STM32F10x_StdPeriph_Driver/src` 添加 `-O2` 编译参数

- 为源文件 `src/main.c` 添加 `-O1` 参数

您可以在 yaml config 中输入以下内容：

```yaml
version: '1.0'

#
# for source files with filesystem paths
#
files:
    'hal/STM32F10x_StdPeriph_Driver/src/*.c': -O2
    'src/main.c': -O1

#
# for source files with virtual paths
#
virtualPathFiles:
#   'virtual_folder/**/*.c': --c99
```

保存配置，然后你可以点击 `构建` 按钮来重新构建你的项目

### 检查文件参数

如果要检查源文件的附加编译器参数，可以使用 `生成 builder.params` 功能

![](/docs_img/prj_gen_builder_params.png)

单击此菜单项，eide 将刷新 `builder.params`, 现在你可以打开 `build/<targetName>/builder.params` 文件去检查相关参数

![](/docs_img/prj_builder_params_src_args.png)

