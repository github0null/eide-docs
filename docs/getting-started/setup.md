---
sidebar_position: 1
---

# Setup

Install Eide on your pc and setup development envrionment.

## Precondition

This plug-in base on VSCode, if you are going to use it, please:

- **Make sure you're familiar with VSCode**
- **Make sure you're familiar with the basic build process of c/c++ project**

Because this docs takes the above conditions as the premise.

## Install EIDE

In this section, we will guide you on how to properly install `EIDE`.

:::caution We Need Network
We need download some packages from network, make sure your network is ok !<br/>
If you need to install **offline**, please goto [**Github Release**](https://github.com/github0null/eide/releases) to download installation package.
:::

- **Install plug-in**

  Open vscode extension market, search `eide`, select `Embedded IDE` and install it.

  ![](/docs_img/install_from_market.png)

  When the plug-in has been installed, it will launch and start to init.

  The plug-in will **auto download and install** [eide-binaries](https://github.com/github0null/eide-resource/tree/master/binaries) and [.NET6 X64 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) package, please wait !

  ![](/docs_img/install_dotnet.png)

  When `.NET Runtime` has been installed, you need to restart vscode to refresh `System Environment Variables`.

  EIDE will check `.NET Runtime` before launch, goto VSCode `Output Panel` to check log.

  ![](/docs_img/eide_log_panel.png)

  :::caution Not found runtime
  Sometimes, the runtime is installed, but plug-in still prompts that it **cannot be found**.<br/>
  You may need **close all vscode instances** and execute command `code .` in shell to refresh `System Environment Variables`.
  :::

  :::info For Linux
  We not support **auto install** `.NET6_X64` runtime for **Linux** platform.<br/>
  So you need install [.NET6 X64 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) manualy.
  :::

  :::caution .NET Runtime Version
  If you want to install the .NET runtime manually, you must install a version with **major** version number **6** (e.g. v6.0.5).
  [Click here to download the runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
  :::

When you have completed the above operations, EIDE will be installed normally on your computer and we are now ready to begin.

## Function Region Layout

Now we'll walk you through the functional areas of the plug-in.

![](/docs_img/eide_func_area.png)

- **EIDE PROJECTS**: Project View

  The `EIDE PROJECTS` area will display the projects you have open.

  ![](/docs_img/eide_prj_area.png)

- **OPERATIONS**: Operations View

  The `OPERATIONS` area will display some `Common Commands` for user.

  ![](/docs_img/eide_operations.png)

## Configure Toolchains

EIDE support many toolchains, but these package is so big, so we **not built-in** them in plug-in, you need to install manualy.

- Click `Configure Toolchain` item in `OPERATIONS` view.

  Then a `quickpick box` will be pop-up. You need to choose the compiler you want to use and set its installation path.

  If you configure done, a check mark '✔' will be appeared after the item.

  ![](/docs_img/toolchains.png)

  :::tip What is the "Toolchain Installation Folder Path" ?
  The `Toolchain Installation Folder` is the **root path** for your compiler.<br/>
  example:<br/>
    - If your gcc compiler path is: `d:/software/my_toolchain/arm_gcc_10/bin/arm-none-eabi-gcc.exe`
    - Now, you need set `d:/software/my_toolchain/arm_gcc_10` as your arm gcc `Toolchain Installation Folder` in EIDE.
  :::

  :::tip Install Toolchain by EIDE
  For Windows platform, EIDE provide some online installation package for `Open Source Toolchains`.<br/>
  So you can use [Install Utility Tools](../advance/install_tools) function or select an existing installation location.
  :::
