---
sidebar_position: 30
---

# 多项目工作区

你可以创建一个 VSCode 工作区来包含一些相互关联的项目

## 新建工作区

- 在磁盘上创建一个文件夹，并在该文件夹中创建一些 eide 项目，如下所示

  ![](/docs_img/prj_multi_prj_ws_dir.png)

- 接下来，在目录中新建一个 `.code-workspace` 文件（本例中，这个文件为：`ewp.code-workspace`）

  然后，用以下内容填写 `.code-workspace` 文件：

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

- 然后，你可以双击这个工作空间文件打开 vscode 工作空间

  ![](/docs_img/prj_multi_prj_preview.png)

## 项目次序

每个项目都有一个顺序，可以用来确定构建优先级

你可以添加一个 [项目环境变量](../modules/project_settings#环境变量) `EIDE_BUILD_ORDER` 来更改优先级

```ini
# workspace build order
EIDE_BUILD_ORDER = 0
```

默认的优先级为：`100`

:::tip
值越小，优先级越高
:::
