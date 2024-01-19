---
sidebar_position: 20
---

# 项目 Target

切换项目Target

## 切换 Target

我们支持为一个项目添加一些 Target

每个 Target 都有自己独立的 `构建器选项`, `项目属性`, `烧录器属性`.

- 首先，右键单击项目视图以打开菜单项，然后单击 `Switch Target`

  ![](/docs_img/prj_switch_target_btn.png)

- 然后，eide 将弹出一个列表

  现在你可以：`添加新的 target`, `删除 target` or `点击 target 名进行切换`

  ![](/docs_img/prj_switch_target_sel.png)

:::tip 何时使用 Target 功能
当你想使用多个编译配置，但使用同一份源码的时候，你可以新建不同的Target，以便在同一个项目中区分出它们
:::