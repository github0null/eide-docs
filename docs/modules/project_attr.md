---
sidebar_position: 25
---

# Project Attributes

Include Paths, Preprocessor Defines, Library Search Directories ....

## Available Attributes

![](/docs_img/prj_attr_preview.png)

### Include Directories

Include Directories (IncludePath) is the search path for the c header files (`.h`).

This config contains the **global** IncludePath for your project.

If compiler throw a error when in buiding and tell you that not found `xx.h` file, you may need to check this config.

*In fact, this config use **-I** option similar to GCC.*

### Library Directories

It's the search path for the library files (`.lib`, `.a`).

When you pass some library options for linker, like: `-ltest`, `-lhello` ...

Now you need yo add the directorties of these library files to this config, then the linker will find these library files (`libtest.a`, `libhello.a`).

*In fact, this config use **-L** option similar to GCC.*

:::caution Notice
This config is only support **GCC Family** compilers, for other compilers, you need use [**Add Source File**](project_resource#add-source-files) function to add your `.lib, .obj` files directly.
:::

### Preprocessor Definitions

This config contains the global preprocessor macros for **c source** files.

*In fact, this config use **-D** option similar to GCC.*

:::caution Only For C Source File
This config is only for all **C Source Files**, if you want to assign some macros for asm sources, you need to goto
[**Builder Options**](builder#advance-configurations), open `Assembler` tab and add your macros to `Preprocessor Definitions`;
:::

Preprocessor Definitions Format For Assembler:

| Assembler Type | Format (`<key>` is macro's name，`<value>` is macro's value) |
|:--|:--|
| ARMCC 5/6 | `"<key> SETA <value>"` |
| ARMCC 6（asm-clang） | `<key>=<value>` |
| ARM GCC | `<key>=<value>` |
| RISCV GCC | `<key>=<value>` |
| SDCC | `<key>=<value>` |
| IAR STM8 | `<key>=<value>` |

## Modify Attributes

You can use `modify` button to change above configurations.

![](/docs_img/prj_attr_modify.png)

When you're done, press `ctrl+s` to save this file, and the eide will save your config to project.

:::caution Notice
This config file is a temporary file, after you close this file, it will be destroyed.<br/>
So don't try to open and modify this file separately, if you want to open and modify config, please use `modify` button !
:::