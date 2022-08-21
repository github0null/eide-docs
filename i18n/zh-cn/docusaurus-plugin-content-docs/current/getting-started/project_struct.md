---
sidebar_position: 2
---

# 项目结构

eide 项目结构介绍 ...

## 文件夹结构

一个基本的 eide 项目结构如下：

![](/docs_img/prj_folder_preview.png)

有些文件是必须存在的：

- `.eide`: 此文件夹包含 eide 项目信息、构建器选项 等配置

- `.eide/eide.json`: 此文件用于描述你的项目

  **不要手动修改此文件！除非你知道你在做什么！**

- `<workspase name>.code-workspace`: 该文件是一个 vscode 工作空间文件

  VSCode 将把该工作区的设置保存至该文件
  
  **您可以在文件资源管理器中双击该文件以直接打开 eide 项目**

:::danger 不可删除的
你不能删除上述 **必须的** 文件、文件夹<br/>
否则你将无法打开 eide 项目
:::

对于其他文件或文件夹，您可以随意修改它们

### Git Ignore

如果你想在你的项目中添加 `.gitignore`, 你可以参考以下模板：

```gitignore
# dot files
/.vscode/launch.json
/.eide/log
/.eide.usr.ctx.json
/.settings

# project out
/build
/out
/bin
/obj

# eide template
*.ept
*.eide-template
```

## 建议的行为

这里有一些建议可以帮助你在 VSCode 上有一个更好的体验

- **使您的工作区文件夹包含所有文件：**

  尽量不要把源文件放在工作空间之外，因为 `C++ IntelliSense`, `Code Completion` 等代码编辑器功能需要在您的工作空间搜索文件，
  如果您坚持将源文件放在工作区之外，那么这些功能可能**无法正常工作**

- **使您的文件、文件夹路径只包含 `ASCII` 字符：**

  不要在文件路径中使用非 ASCII 编码和特殊字符（如：`%, $, #, @, &, (, ) ...`）

  因为：
  
  - 在不同的编码环境中，这些非 ASCII 字符可能会出现乱码

  - 一些较老的工具或编译器只支持 ASCII 编码

  - 这些特殊字符（比如：`%, $, #, @, &, (, ) ...`）会在命令行中产生一些错误，因为它们常常被解释为命令行的一部分
