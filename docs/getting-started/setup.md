---
sidebar_position: 1
---

# Setup

Install Eide on your pc and setup development envrionment.

## Install EIDE

In this section, we will guide you on how to properly install `EIDE`.

:::caution
We need download some packages from network, make sure your network is ok !<br/>
If you need to install **offline**, please goto [**Github Release**](https://github.com/github0null/eide/releases) to download installation package.
:::

1. **Install plug-in**

  Open vscode extension market, search `eide`, select `Embedded IDE` and install it.

  ![](/img/install_from_market.png)

2. **Restart VsCode To Init Plug-in**

  When the plug-in has been installed, restart vscode, the plug-in will start to init.

  The plug-in will **auto download and install** [eide-binaries](https://github.com/github0null/eide-resource/tree/master/binaries) and [.NET6 X64 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) package, please wait !

  ![](/img/install_dotnet.png)

  When `.NET Runtime` has been installed, you need to restart vscode to refresh `System Envirnoment Variables`.

  EIDE will check `.NET Runtime` before launch, goto VSCode `Output Panel` to check log.

  ![](/img/eide_log_panel.png)

  :::caution Not found runtime
  Sometimes, the runtime is installed, but plug-in still prompts that it **cannot be found**.<br/>
  You may need **close all vscode instances** and execute command `code .` in shell to refresh `System Envirnoment Variables`.
  :::

  :::info For Linux
  We not support **auto install** `.NET6_X64` runtime for **Linux** platform.<br/>
  So you need install [.NET6 X64 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) manualy.
  :::

When you have completed the above operations, EIDE will be installed normally on your computer and we are now ready to begin.

## Function Region Layout

Now we'll walk you through the functional areas of the plug-in.

![](/img/eide_func_area.png)

- **EIDE PROJECTS**: Project View

  The `EIDE PROJECTS` area will display the projects you have open.

  ![](/img/eide_prj_area.png)

- **OPERATIONS**: Operations View

  The `OPERATIONS` area will display some `Common Commands` for user.

  ![](/img/eide_operations.png)

## Configure Toolchains

EIDE support many toolchains, but we **not built-in** them in plug-in, so we need to install manualy. 

Because these package is so big, so we cannot merge them with plug-in.

- Click `Configure Toolchain` item in `OPERATIONS` view.

  Then a `quickpick box` will be pop-up. You need to choose the compiler you want to use and set its installation path.

  If you configure done, a check mark '✔' will be appeared after the item.

  ![](/img/toolchains.png)

  :::tip What is the "Toolchain Installation Folder Path" ?
  The `Toolchain Installation Folder` is the **root path** for your compiler.<br/>
  example:<br/>
    - If your gcc compiler path is: `d:/software/my_toolchain/arm_gcc_10/bin/arm-none-eabi-gcc.exe`
    - Now, you need set `d:/software/my_toolchain/arm_gcc_10` as your arm gcc `Toolchain Installation Folder` in EIDE.
  :::

  :::tip Install Toolchain by EIDE
  For Windows platform, EIDE provide some online installation package for `Open Source Toolchains`.<br/>
  So you can choose to download and install it to the default location or select an existing installation location.
  :::
