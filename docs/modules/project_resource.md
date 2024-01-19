---
sidebar_position: 2
---

# Project Resource

Manage your project resources.

## Introduce

**Project Resources** view provide a tree view UI to show `source folders`, `source files`, `builder output files` for your project.

We provide many features, you can `add/remove source folders`, `add/remove source files`, `exclude/include source files/folders`, `modify file path for existed source files` .....

![](/docs_img/proj_res_preview.png)

## Context Menu

Each UI items have their `context menus`, you can **right click** your mouse to trigger these menus.

![](/docs_img/ctx_menu_prj.png)

![](/docs_img/ctx_menu_prj_res.png)

![](/docs_img/ctx_menu_prj_folder.png)

![](/docs_img/ctx_menu_prj_file.png)

## Add Sources

You can **Add Source Files**, **Add Source Folders** to your project.

![](/docs_img/prj_res_add_src_file.png)

### Add Source Files

Click `Add File` menu item to add some source files.

Now, we support these `text` file types:

- **C Files**: `.c`
- **C++ Files**: `.cpp .cxx .cc .c++`
- **ASM Files**: `.s, .asm, .a51`

And we also support some `binary` file types:

- **Obj Files**: `.obj, .o`
- **Lib Files**: `.lib, .a`

### Exclude Source Files

You can use `Exclude File` function to exclude this file when build:

![](/docs_img/explorer_exclude_file.png)

### Add Source Folders

Click `Add Folder` menu item to add source folder.

We support 2 folder types:

![](/docs_img/prj_res_folder_typ.png)

- `Virtual Folder`: Virtual folder, not existed on disk.

  You need specific a name for virtual folder when create it.

  And then you can `add files` or `add folders` by right-click menus.

- `Normal Folder`: An existed folder on your disk.

  You can link an exsited folder to project, eide will **auto recursive search** all **source** files in this folder and add **all available source files** to your project.

  And eide will watch source folder root, if there are some files/folders has been created or deleted, eide will auto re-search your source folders and auto update sources file list.

  :::caution Ignored Files
  Eide **only contains** `txt` files when auto search source files, so if you want to add some **.obj**, **.lib**, **.a** files to project, you need add them by using [Add Source Files](#add-source-files) function.
  :::
  
  :::caution Notice
  eide will **not** auto search and add `IncludePath` for your source folders, you need to add all `IncludePath` manually !!!, Please check [Version Compatibility](../notice/compatibility_changes)
  :::

How to distinguish `Virtual` or `Normal` folders in an exsited project ?

- `Virtual Folder`: folder which with <img width="16px" bor src="/docs_img/icon/folder_virtual.svg"/> icon.

- `Normal Folder`: folder which with <img width="16px" bor src="/docs_img/icon/folder_root.svg"/> icon.

![](/docs_img/prj_res_folder_typ_cmp.png)

## Import Source Tree

If you are migrating some projects to eide, you can import source file tree to your project by `Import Source Tree` feature.

![](/docs_img/prj_res_imp_src_tree.png)

Now, we support some importers: `IAR For ARM`, `IAR For 8051/STM8`, `Segger Embedded Studio`

![](/docs_img/prj_res_imp_src_tree_importers.png)

Follow the prompts to select the appropriate project file, and then eide will import `source tree`, `include paths` and `macros` to your project.

:::caution File Path Restrictions
The project file path which will be imported must only contains `ASCII` characters.
:::

:::caution Will override current project
This function will override `source tree`, `include paths`, `macros` to current project. It's irreversible, you can not undo this operation.
:::

## Append Compiler Args For Sources

:::caution Notice
This feature is only used to append **specific** compiler args for some single source files.<br/>
If you want to add global compiler args for your project, please reference [**Builder Options**](../modules/builder#advance-configurations)
:::

Sometimes you want to add some **specific compiler args** for some source files. This feature can help you do that.

Right-click the source `source file` or `folder` to which you want to apply the parameters, 

and select `Modify Extra Compiler Args` to open UI.

![](/docs_img/explorer_add_extra_args.png)

When extra compiler args are applied to a file or folder, their file icon will be changed !

![](/docs_img/explorer_check_extra_args.png)

We support some expressions in compiler args:

|Expression|Description|
|:----|:----|
|`$<override:new_args>`|override all compiler args with `new_args`|
|`$<replace:old_args/new_args>`|replace compiler args, replace `old_args` with `new_args`|

:::caution Notice
The **expression** can not contain `<`, `>`, `/`, `:` metacharacters.
:::

## Append Compiler Args For Sources (Not Recommended)

:::caution Notice
This feature is only used to append **specific** compiler args for some single source files.<br/>
If you want to add global compiler args for your project, please reference [**Builder Options**](../modules/builder#advance-configurations)
:::

Sometimes if you want to add some **specific compiler args** for some source files. This feature can help you do that.

![](/docs_img/prj_res_add_src_file_args.png)

Click `Append separate compiler params for source files`, eide will create and open an empty yaml config file, as follows:

![](/docs_img/prj_res_add_src_file_args_preview.png)

Now you can use [glob patterns](https://github.com/micromatch/micromatch#matching-features) to match specific source files and append some args.

Because of eide has 2 folder types ([Source Folders](#add-source-folders)), so we provide **2** categorys for `glob patterns`.

- `files`: match files by using **real filesystem path**.

- `virtualPathFiles`: match files by using **virtual path**.

We support some expressions in compiler args:

|Expression|Description|
|:----|:----|
|`$<override:new_args>`|override all compiler args with `new_args`|
|`$<replace:old_args/new_args>`|replace compiler args, replace `old_args` with `new_args`|

:::caution Notice
The **expression** can not contain `<`, `>`, `/`, `:` metacharacters.
:::

**Examples:**

If your project folder structure is as follows:

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

Now if you want to:

- Add `-O2` compiler args for folder `hal/STM32F10x_StdPeriph_Driver/src`

- Add `-O1` compiler args for file `src/main.c`

You can enter the following content in yaml config:

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

Save and then you can click `build` button to rebuild you project.

### Check File Args

If you want to check compiler params for source files, you can use `generate builder.params` function.

![](/docs_img/prj_gen_builder_params.png)

Click this menu item, and eide will refresh `builder.params`, now you can open `build/<targetName>/builder.params` file to check file params.

![](/docs_img/prj_builder_params_src_args.png)

