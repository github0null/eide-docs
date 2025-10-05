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

## 从项目模板创建 {##create-from-project-template}

> 在本节中，我们将帮助您从一个模板开始新建项目

初次使用这个插件，可能不太习惯，因此我们建议先从一个项目模板开始。

:::tip 何为项目模板？
项目模板就是一个可以编译运行的示例工程的压缩包，多数情况下内含的示例程序是一个 hello world，<br/>
里面已经包含了构建一个项目所必须的源文件和相关资源，<br/>
因此你不必再去做太多额外的配置，只需配置好编译器即可开始使用。
:::

你可以从这个地方在线浏览和下载项目模板：https://templates.em-ide.com/

![](/docs_img/templates_page.png)

在这个页面你可以根据MCU品牌进行浏览，选择好模板后点击下载，一个 `.ept` 后缀的文件将被保存到你的电脑中。（虽然项目模板的数量有限，但我们正在不断新增更多的模板。）

然后打开VSCode插件，点击 `新建项目` -> `本地项目模板`，然后选择刚刚下载好的 `.ept` 后缀的模板文件。即可新建项目。

## 从空项目创建 {#empty-project}

> 在本节中，我们将帮助您创建一个空的 cortex-m 项目

空项目就是一个完全空白的项目，你需要从头开始为你的项目添加源文件、头文件、配置包含路径、宏定义、设置编译参数、直到能够正常编译和运行。

### 新建项目 {#create}

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

## 创建STM32CubeMX项目 {#empty-stm32cubemx-project}

> 自行安装 [STM32CubeMX v6.15.0](https://www.st.com.cn/zh/development-tools/stm32cubemx.html) 或更高版本

- **新建空项目：** 使用 eide 新建一个 Cortex-M 空项目，见上面的 [从空项目创建](#empty-project) 小结，创建完成后，不要添加源文件。

- **新建CubeMx项目：** 使用 CubeMX 新建一个 STM32 项目，将生成目录设置到项目根目录下，如图所示

  ![](/docs_img/stm32cubemx/cubemx-1.png)

- **设置Cubemx项目：**

  找到 Project 配置项，将 Toolchain 选择为 Makefile

  ![](/docs_img/stm32cubemx/cubemx_tool.png)

  找到 Code Generator 配置项，按照如下图所示进行配置

  ![](/docs_img/stm32cubemx/cubemx_cg.png)

  该配置使得 STM32CubeMX 不要生成多余的文件到目录中，避免编译不需要的文件而导致出错

- **生成代码：** 点击右上角的 **GENERATE CODE** 生成代码

- **添加源文件夹：** 点击eide工程栏的添加源文件夹，选择普通文件夹，将 `cubemx_source` 选中添加到项目中

  ![](/docs_img/stm32cubemx/cubemx-2.png)

- **添加包含目录：**

  打开 `cubemx_source` 目录下的 `Makefile` 文件，将其中的 C_INCLUDE 内容复制到 包含目录中 中

  注意复制时要去除 `-I` 前缀，并加上 `cubemx_source/` 路径前缀，如下图所示：

  ![](/docs_img/stm32cubemx/cubemx-3.png)

  操作完成后按 ctrl+s 保存即可应用到项目

- **添加宏定义：** 

  打开 `cubemx_source` 目录下的 `Makefile` 文件，将其中的 C_DEFS 内容复制到 预处理器定义 中

  注意复制的时候要去除掉 `-D` 前缀

  ![](/docs_img/stm32cubemx/cubemx-4.png)

  操作完成后按 ctrl+s 保存即可应用到项目

- **设置链接脚本路径：**

  将 `cubemx_source` 目录下的 *.ld 文件的相对路径复制一下，然后填写到编译配置中的 **链接脚本路径** 设置项中，如下图所示

  ![](/docs_img/stm32cubemx/lds_cfg.png)

完成上述步骤后，一切就绪，现在可以执行编译了。

:::tip 注意
某些时候当你更改了CubeMX中的配置后，Makefile中的宏定义或者包含路径可能会发生变化，<br/>
这个时候你需要将新增的 包含目录、宏定义 添加到项目中。
:::
