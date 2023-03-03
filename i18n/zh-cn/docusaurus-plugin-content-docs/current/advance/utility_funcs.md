---
sidebar_position: 60
---

# 实用功能

其他实用功能

## 反汇编代码

生成项目后，可以使用 `Show Disassembly` 菜单按钮检查 c 源文件的反汇编代码

![](/docs_img/show_disasm.png)

:::danger 仅支持 GCC/ARMCC
反汇编功能仅支持 `GCC` 家族 或 `ARMCC` 编译器
:::

## ELF 反汇编

插件支持反汇编整个程序

使用方法 1：

  - 打开 [ELF/AXF 查看器](#elf-查看器)

  - 在查看器中，打开右键菜单，选择 `查看反汇编`，即可触发该功能

    ![](/docs_img/utils_show_disasm_all.png)

使用方法 2：

  - 打开 VSCode 文件资源管理器，打开 build 目录，找到生成的 elf/axf 文件，右键选择 `查看反汇编` 即可

    ![](/docs_img/utils_show_disasm_all_2.png)

:::danger 仅支持 GCC/ARMCC
反汇编功能仅支持 `GCC` 家族 或 `ARMCC` 编译器
:::

## ELF 查看器

构建完成后，您可以打开 `Output Files` 虚拟文件夹节点来检查输出的产物

如果你的编译器输出一个 elf 格式的文件，那么你可以点击它来打开一个 `ELF 查看器`，eide 将从这个 elf 文件中转储一些信息并显示在一个页面中

![](/docs_img/elf_viewer.png)

## 存储器资源 Map 视图

我们支持解析并显示 `.map` 中的 obj 文件占用情况

构建完成后，您可以打开 `Output Files` 虚拟文件夹节点来检查输出的产物

点击 `*.map.view` 文件打开 `Map View`

![](/docs_img/arm_map_view.png)

:::caution 注意
该功能仅支持 ARM 项目
:::