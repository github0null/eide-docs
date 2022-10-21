---
sidebar_position: 30
---

# 导入项目

将其他 IDE 类型的项目导入为一个新的 eide 项目

在 `操作` 视图中点击 `导入项目`

EIDE 将弹出选择列表，现在需要选择一个项目类型

目前我们支持 `Keil` 或 `Eclipse` 项目

![](/docs_img/imp_prj_sel.png)

:::caution 关于项目导入功能
虽然该插件有一些 “导入 xxx 项目” 的功能，但这不代表该插件必须和 xxx 开发环境一起使用；<br/>
相反，导入功能将提取目标项目的信息，并以此创建一个 eide 类型的项目，导入完成之后，eide 项目将与旧的项目失去关联。
:::

## Keil 项目

:::danger Keil 项目限制
该导入功能不是 100% 适用于**任何** Keil 项目<br/>
请查看 [**Keil 项目限制**](../notice/keil_project_limit)
:::

:::caution Keil 软件位置
在开始之前，你需要告诉 EIDE 你的 Keil 软件的安装位置，插件需要使用 Keil 内置的编译器<br/>
请参考[**安装**](setup)部分
:::

### 导入

打开 `操作` 栏，点击 `导入项目` 启动一个导入流程。

然后选择你要导入的 `.uvproj` 或者 `.uvprojx` 文件（`.uvproj` 代表 C51 项目，`.uvprojx` 代表 ARM 项目），点击 `Import` 按钮执行导入

![](/docs_img/imp_prj_sel_uvfile.png)

一个提示信息将被弹出

> 是否与原有的 KEIL 项目共存于同一目录下？ 如果选择 "No"，你需要为 EIDE 项目指定存放位置 ！

如果你想要让 `新生成的 EIDE 项目` 与 `被导入的 Keil 项目` 处于**同一个**文件夹下，请选择 `是`

![](/docs_img/imp_prj_compate_hint.png)

如果没有错误产生，一个提示消息将弹出，现在你可以切换工作区以打开已导入的项目

![](/docs_img/imp_prj_ok.png)

### 配置

在导入完成后，我们需要配置项目，因为 eide 不导入 Keil 项目的编译设置

- **设置 RAM/ROM 布局**: 配置 MCU 的 ram/rom 信息

  首先，设置 `使用自定义链接脚本` 选项为 `false`.

  ![](/docs_img/imp_keil_mem_layout.png)
  
  然后，点击 `RAM And ROM Layout` 条目上的 `更改` 按钮以打开 `存储器布局编辑器`

  现在，你需要打开 Keil 项目，复制 `ram/rom 布局数据` 到 eide 的 `存储器布局编辑器` 中，然后保存

  ![](/docs_img/imp_keil_mem_layout_2.png)

- **设置编译器选项**: 复制 Keil 的 `C/C++, Asm, Linker 编译选项` 到 eide

  打开 `Keil Project Options` -> `C/C++`, **复制** keil 编译选项到 eide 的 `构建器选项` 视图

  ![](/docs_img/keil_mdk_cpp_opt.png)

  ![](/docs_img/eide_builer_options.png)

  复制 keil 项目的 `Misc-Controls` 到 eide 的 `Other C Compiler Options` 中

  ![](/docs_img/imp_prj_cpy_keil_opts.png)

  **为 `Asm, Linker` 选项重复上述步骤**.

  :::tip 没有找到对应的选项
  大多数选项是相同的，如果你找不到一些选项，你可以直接在 `Other C Compiler Options` 中输入对应的编译器命令行参数
  :::

- **检查 `IncludePath, Macros`**: 

  检查已导入的 eide 项目中的 `IncludePath, Macros` 是否与原始的 Keil 项目一致
  
  如果有任何缺失或不正确的项目，手动补全它们

  ![](/docs_img/eide_prj_attr.png)

### 构建

完成上述步骤后，就可以开始编译项目了

如果存在编译错误，请根据错误提示进行处理

---

## Eclipse 项目

### 导入

- 点击 `导入项目`，在弹出列表中选择 `Eclipse`

  ![](https://discuss.em-ide.com/assets/files/2022-07-17/1658067425-796397-image.png)

- 选择要导入的 `.cproject` 文件，然后点击 `Import` 执行导入

  ![](https://discuss.em-ide.com/assets/files/2022-07-17/1658065407-902585-image.png)

  导入完成后，切换 VSCode 工作区

  ![](https://discuss.em-ide.com/assets/files/2022-07-17/1658065572-456315-image.png)

### 配置 

- **处理不兼容的参数**:

  由于 Eclipse CDT 和 EIDE 之间的设计差异，EIDE 暂时不能兼容 Eclipse 项目中的一些项目属性和构建设置
  
  导入完成后，将生成一个 `.warning.txt` 文件，其中记录了所有不兼容的 Eclipse 项目属性
  
  您需要根据这些属性的 `名称` 和 `值` 的含义修改 EIDE 项目的 `构建器选项`，直到可以正确编译

  ![](https://discuss.em-ide.com/assets/files/2022-07-17/1658065778-746145-image.png)

### 构建

完成上述步骤后，就可以开始编译项目了

如果存在编译错误，请根据错误提示进行处理
