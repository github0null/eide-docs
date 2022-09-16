---
sidebar_position: 31
---

# 文件路径变量

你可以在 源文件 路径中使用 [`项目环境变量`](../modules/project_settings#环境变量)

## 路径中固定的变量

对于源文件路径有一些固定的变量可用：

- `${workspaceFolder}`: VSCode 工作区目录
- `${workspaceFolderBasename}`: VSCode 工作区目录名称

- `${OutDir}`: 输出目录路径
- `${OutDirBase}`: 输出目录名称
- `${ProjectName}`: 项目名
- `${ConfigName}`: 项目 target 名，例如：'debug', 'release'
- `${ExecutableName}`: 输出二进制文件路径名，不包含文件后缀
- `${ProjectRoot}`: 项目根目录路径，与 `${workspaceFolder}` 相等

