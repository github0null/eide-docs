---
sidebar_position: 20
---

# 新建项目

新建一个 eide 项目

我们支持多种创建新项目的方法

![](/docs_img/create_prj_sel.png)

|类型|描述|
|:----|:----|
|Empty Project|新建一个空的项目|
|Internal Template|使用内部模板新建一个项目|
|Local Template|使用本地模板文件（.ept）新建一个项目|
|From Remote Repository|从 [git repository](https://github.com/github0null/eide-templates) 下载模板并新建项目|

## Empty Project

在本节中，我们将帮助您创建一个空的 cortex-m 项目

### Create

- 点击 `新建项目` -> `空项目`, 将弹出一个窗口，您需要选择一个项目类型

  ![](/docs_img/new_prj_typ.png)

- 本例中我们选择 `cortex-m`, 然后输入项目名称

  ![](/docs_img/new_prj_name.png)

- 然后我们需要选择项目的保存位置
  
  ![](/docs_img/new_prj_loc_sel.png)

- 接下来，一个新的项目将被创建，eide 将会弹出通知

  切换工作空间，将加载新项目

  ![](/docs_img/new_prj_preview.png)

现在，我们已经成功创建了一个空项目

:::tip 小贴士
你可以拖动 eide 图标到 vscode 的右边栏，
这使得视图的布局更加紧凑，因为右边常常有大量空白区域<br/>
参考：https://code.visualstudio.com/updates/v1_64#_new-side-panel
:::

### 配置项目

在开始编译前，我们需要配置构建选项

默认编译器是 `gcc`，你可以将编译器切换，我们支持 `gcc/armcc/armclang`

![](/docs_img/new_prj_cc_cfg.png)

|字段名称|描述|
|:--|:--|
|CPU Type|处理器类型, like: `cortex-m0`, `cortex-m3`, `cortex-m4`|
|Linker Script File Path|gcc linker script (`.lds/.ld`)|
|Builder Options|更详细的构建配置选项|

至少配置 `CPU Type` 和 `Linker Script File Path`

更多的 [构建配置选项](../modules/builder)

### 添加源文件

现在我们可以添加一些源文件到项目

- 将鼠标移至 `项目资源`，右键单击打开菜单

  ![](/docs_img/new_prj_add_srcs.png)

- 点击 `添加文件` 按钮，添加一些源文件

  *对于这个 demo：我们从其他项目复制了2个文件*

好的，所有的源文件已经添加到项目中，像这样。

如果项目附带一些头文件，我们需要添加 [包含路径](../modules/project_attr)

![](/docs_img/new_prj_add_src_preview.png)

### 编译项目

一切就绪，现在我们只需要单击 `构建` 按钮就可以开始编译了

构建任务将启动，日志将输出到 `Output Panel`

![](/docs_img/new_prj_build.png)
