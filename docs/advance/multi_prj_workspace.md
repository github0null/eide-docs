---
sidebar_position: 30
---

# Multi-Project Workspace

You can make a vscode workspace to contains some projects who is interrelated with each other.

## Create A Workspace

- Create a folder on disk, and create some eide projects in the folder, as follows.

  ![](/docs_img/prj_multi_prj_ws_dir.png)

- Next, create a `.code-workspace` file in the folder (at this demo, this file is: `ewp.code-workspace`).

  Then, Fill in workspce file with the following contents:

  ```json
  {
       "folders": [
            {
                "name": "common_hardware_code",
                "path": "common_hardware_code"
            },
            {
                "name": "sample_threadx",
                "path": "sample_threadx"
            },
            {
                "name": "stm32f7xx_library",
                "path": "stm32f7xx_library"
            },
            {
                "name": "threadx",
                "path": "threadx"
            }
      ]
  }
  ```

- Then, you can double-click this workspace file to open vscode workspace.

  ![](/docs_img/prj_multi_prj_preview.png)

## Project Order

Each project has a order that can be used to determine the build priority.

You can add a [Project Environment Variable](../modules/project_settings#environment-variables) `EIDE_BUILD_ORDER` to project to change the project order.

```ini
# workspace build order
EIDE_BUILD_ORDER = 0
```

Default order value is `100`;

:::tip
The smaller the value, the higher the priority.
:::
