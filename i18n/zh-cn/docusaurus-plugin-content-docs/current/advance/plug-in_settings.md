---
sidebar_position: 9
---

# 插件设置

如何修改插件设置

## 修改插件设置

> EIDE 是一个标准的 VSCode 扩展，因此你可以在 VSCode 设置页面修改插件设置

如果你打开了一个 eide 项目，则有 3 个可切换的 **作用域**

它们分别是 `User`, `Workspace`, `Folder`

![](/docs_img/plug-in_settings.png)

- 在 **User** 作用域中：

  任何的更改都是针对于 **当前用户**

  如果你想修改 eide 的全局设置，你应该切换到 `User` 作用域

- 在 **Workspace** 作用域中：

  任何的更改都是针对于 **当前 VSCode 工作区**（任何 eide 项目都是一个 VSCode 工作区）

  因此，如果你想修改 *当前 eide 项目* 的设置，你应该切换到 `Workspace` 作用域 或者 直接在 `xxx.code-workspace` 文件中进行修改
  
- 在 **Folder** 作用域中：

  任何的更改都是针对于 **当前打开的根文件夹**

  *在 VSCode 工作区中，修改这个作用域的设置将不会生效*

作用域优先级：

`Workspace > Folder > User`

## 小技巧

有一些关于 eide 插件设置的技巧

### 设置 GCC 编译器前缀

> 支持为 gcc 编译器选择不同的前缀

关于前缀，下表包含了所有可用的设置名称：

|设置名称|描述|
|:--|:--|
|`EIDE.ARM.GCC.Prefix`|**ARM GCC** 编译器前缀，例如：`arm-none-eabi-`|
|`EIDE.RISCV.ToolPrefix`|**RISC-V** 编译器前缀，例如：`riscv-none-embed-`|
|`EIDE.Toolchain.AnyGcc.ToolPrefix`|通用 gcc 编译器前缀|

- 1) 如果你希望将设置应用到**全局范围**，请打开 VSCode 设置页面修改设置项，见上一节中

- 2) 如果你要为**当前项目**更改编译器前缀，打开 `xxx.code-workspace` 文件，在其中编辑设置项：

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

:::caution 需要重启 VSCode
如果你修改了这些设置，你需要重新启动 VSCode 以刷新内置的环境变量
:::

### 为项目单独指定编译器

> arm gcc 项目示例

如果你安装了不同版本的 gcc 编译器，比如：`arm-none-eabi-gcc v7.3`, `arm-none-eabi-gcc v9.3`, `arm-none-eabi-gcc v10.3`

如果全局默认使用的编译器为 `arm-none-eabi-gcc v9.3`，而现在你有如下打算：

- 你想在 项目 `prj_A` 中使用 `v7.3` 版本的 `arm-none-eabi-gcc`

- 你想在 项目 `prj_B` 中使用 `v10.3` 版本的 `arm-none-eabi-gcc`

你可以这样做：

- 打开 项目 `prj_A` 的 `.code-workspace` 工作区配置文件，修改 `EIDE.ARM.GCC.InstallDirectory` 设置，如下：

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

- 打开 项目 `prj_B` 的 `.code-workspace` 工作区配置文件，修改 `EIDE.ARM.GCC.InstallDirectory` 设置，如下：

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

然后：

- 点击 `build`，你的项目 `prj_A` 将会使用 `/your/arm-none-eabi-gcc-v7.3/compiler/path/bin/arm-none-eabi-gcc` 进行编译

- 点击 `build`，你的项目 `prj_B` 将会使用 `/your/arm-none-eabi-gcc-v10.3/compiler/path/bin/arm-none-eabi-gcc` 进行编译


除此之外，还有一些变量可以在设置项中使用：

```shell
# vscode project workspace folder path 
${workspaceFolder}

# user home path
${userRoot}
```

例如，如果你想指定某个 `eide utility tools` 的路径，你可以这样使用：

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
