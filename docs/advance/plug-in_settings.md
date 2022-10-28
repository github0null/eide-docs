---
sidebar_position: 9
---

# Plug-in Settings

How to modify plug-in settings

## Modify Extension Settings

> EIDE is a standard VSCode extension, you can modify plug-in settings in vscode settings page.

If you have opened a eide project, there are **3 scope** for setting items, 

they are: `User`, `Workspace`, `Folder`

![](/docs_img/plug-in_settings.png)

- In **User** Scope:

  Any changes are specific to the **current user**

  If you want to set a global setting for eide, you should switch to `User` scope !

- In **Workspace** Scope:

  Any changes are specific to **current vscode workspace** (every eide project is a vscode workspace)

  So if you want to modify settings for *current eide project*, you should switch to `Workspace` scope or modify `xxx.code-workspace` file directly !
  
- In **Folder** Scope:

  Any changes are specific to **current root folder**

  *for a vscode workspace, this scope will not take effect*

The Scope Priority:

`Workspace > Folder > User`

## Tips

There are some tips for eide plug-in settings.

### Setup GCC Compiler Prefix

> You can set the compiler prefix for gcc compiler.

Here are available settings for gcc prefix:

|settings name|description|
|:--|:--|
|`EIDE.ARM.GCC.Prefix`|**ARM GCC** toolchain prefix, example: `arm-none-eabi-`|
|`EIDE.RISCV.ToolPrefix`|**RISC-V** toolchain prefix, like: `riscv-none-embed-`|
|`EIDE.Toolchain.AnyGcc.ToolPrefix`|Any gcc famliy toolchain prefix|

- 1) If you want to apply settings to **Global Region**, goto `VSCode Settings` and modify it.

- 2) If you want modify compiler prefix for **current project**, open `xxx.code-workspace` file in your workspace root folder, and modify settings like this:

  ```json
  {
      "settings": {

            // .... other settings ....

            "EIDE.ARM.GCC.Prefix": "arm-none-eabi-"

            //"EIDE.RISCV.ToolPrefix": "riscv-none-embed-"

            //"EIDE.Toolchain.AnyGcc.ToolPrefix": "xxx"

            // .... other settings ....
        }
  }
  ```

:::caution Need Relaunch VSCode
You need relaunch vscode if you have modified these settings.
:::

### Specify The Compiler Separately For Project

> Example for arm gcc project

If you have install some gcc compilers with different versions, like: `arm-none-eabi-gcc v7.3`, `arm-none-eabi-gcc v9.3`, `arm-none-eabi-gcc v10.3`

If the global default compiler is `arm-none-eabi-gcc v9.3`, but now:

- You want to use arm-none-eabi-gcc `v7.3` in project `prj_A`

- You want to use arm-none-eabi-gcc `v10.3` in project `prj_B`

You can do this as follows:

- Open `.code-workspace` file in project `prj_A`, and modify settings: `EIDE.ARM.GCC.InstallDirectory`

  ```json
  {
    "folders": [
        {
            "path": "."
        }
    ],
    "settings": {

        // other settings ....

        "EIDE.ARM.GCC.InstallDirectory": "/your/arm-none-eabi-gcc-v7.3/compiler/path"
        
        // other settings ....
    }
  }
  ```

- Open `.code-workspace` file in project `prj_B`, and modify settings: `EIDE.ARM.GCC.InstallDirectory`

  ```json
  {
    "folders": [
        {
            "path": "."
        }
    ],
    "settings": {

        // other settings ....

        "EIDE.ARM.GCC.InstallDirectory": "/your/arm-none-eabi-gcc-v10.3/compiler/path"

        // other settings ....
    }
  }
  ```

Then:

- Click `build`, your project `prj_A` will be build with compiler: `/your/arm-none-eabi-gcc-v7.3/compiler/path/bin/arm-none-eabi-gcc`

- Click `build`, your project `prj_B` will be build with compiler: `/your/arm-none-eabi-gcc-v10.3/compiler/path/bin/arm-none-eabi-gcc`


Besides, there are some variables can be used in settings items:

```shell
# vscode project workspace folder path 
${workspaceFolder}

# user home path
${userRoot}
```

For example, if you want to specify some `eide utility tools` path, you can use it like this:

```json
{
  "folders": [
      {
          "path": "."
      }
  ],
  "settings": {

      // other settings ....

      "EIDE.ARM.GCC.InstallDirectory": "${userRoot}/.eide/tools/gcc_arm_v7_3_1"

      // other settings ....
  }
}
```
