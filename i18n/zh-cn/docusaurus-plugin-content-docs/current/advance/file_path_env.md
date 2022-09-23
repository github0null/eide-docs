---
sidebar_position: 31
---

# 文件路径变量

你可以在 源文件 路径中使用 [`项目环境变量`](../modules/project_settings#环境变量)

## 路径中固定的变量

对于源文件路径有一些固定的变量可用：

- `${workspaceFolder}`：vscode 工作区文件夹完整路径
- `${workspaceFolderBasename}`：vscode 工作区文件夹名称

- `${OutDir}`：输出目录完整路径，例如：`d:/path/my_project/proj_a/build/Debug`
- `${OutDirRoot}`：输出目录根名称，例如：`build`
- `${OutDirBase}`：输出目录基础名，例如：`build\Debug`
- `${ProjectName}`：eide 项目名称
- `${ConfigName}`：eide 项目 target 名称，例如：`debug`, `release`
- `${ExecutableName}`: 输出文件完整路径（不包含文件后缀）例如：`d:/path/my_project/proj_a/build/Debug/project_name`
- `${ProjectRoot}`：项目根目录完整路径，与 `${workspaceFolder}` 相等

- `${ToolchainRoot}`: 工具链根目录完整路径
