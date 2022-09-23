---
sidebar_position: 31
---

# File Path Env

You can use [`Project Environment Variables`](../modules/project_settings#environment-variables) in `source` file path.

## Fixed Variables For Path

There are some fixed variables only for `source` file path.

- `${workspaceFolder}`: vscode workspace folder path
- `${workspaceFolderBasename}`: vscode workspace folder base name

- `${OutDir}`: output directory full path, like: `d:/path/my_project/proj_a/build/Debug`
- `${OutDirRoot}`: output directory root name, like: `build`
- `${OutDirBase}`: output directory base name, like: `build/Debug`
- `${ProjectName}`: eide project name
- `${ConfigName}`: project config name, like: `debug`, `release`
- `${ExecutableName}`: output file name full path (without suffix), like: `d:/path/my_project/proj_a/build/Debug/project_name`
- `${ProjectRoot}`: project root path, like: `${workspaceFolder}`

- `${ToolchainRoot}`: toolchain root full path
