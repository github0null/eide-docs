---
sidebar_position: 31
---

# File Path Env

You can use [`Project Environment Variables`](../modules/project_settings#environment-variables) in `source` file path.

## Fixed Variables For Path

There are some fixed variables only for `source` file path.

- `${workspaceFolder}`: vscode workspace folder path
- `${workspaceFolderBasename}`: vscode workspace folder base name

- `${OutDir}`: output folder path
- `${OutDirBase}`: output folder base name
- `${ProjectName}`: eide project name
- `${ConfigName}`: project config name, like: 'debug', 'release'
- `${ExecutableName}`: output file absolute path
- `${ProjectRoot}`: project root path, like: `${workspaceFolder}`
