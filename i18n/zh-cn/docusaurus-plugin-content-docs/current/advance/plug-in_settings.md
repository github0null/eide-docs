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

