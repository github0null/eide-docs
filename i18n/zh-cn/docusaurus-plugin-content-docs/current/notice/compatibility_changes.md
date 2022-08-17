---
sidebar_position: 1
---

# 版本兼容性

版本兼容性

版本迭代是**向后兼容的**

但是为了减少软件中的隐藏操作和默认行为，减少不确定行为，一些意义不大的特性很快就会被弃用。因此，您必须手动调整项目以适应 eide 的新版本。

## 不兼容的变更

### v3.8.3

- 移除源文件夹中的自动搜索和添加 `包含路径（IncludePath）`, `二进制库文件，对象文件（ObjectFiles）` 功能

  **新的操作方法：**

  现在，你需要使用 [**添加包含路径**](../modules/project_attr#包含目录) 和 [**添加源文件**](../modules/project_resource#添加源文件) 功能来添加 `包含路径（IncludePath）`, `二进制库文件，对象文件（ObjectFiles）` 项

  **对于旧项目的临时补救措施：**

  添加 2 个插件设置以临时启用以上的自动搜索功能，**仅用于临时兼容**旧的项目：
  ```
  EIDE.SourceTree.AutoSearchIncludePath
  EIDE.SourceTree.AutoSearchObjFile
  ```

  :::caution 注意
  这 2 个设置仅用于兼容您现有的旧项目<br/>
  如果您正在创建一个新项目，请不要修改这些设置
  :::

  :::info 为什么移除该功能？
  参见：https://discuss.em-ide.com/d/356/2
  :::
