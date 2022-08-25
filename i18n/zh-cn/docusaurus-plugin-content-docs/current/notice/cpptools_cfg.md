---
sidebar_position: 20
---

# C/C++ 配置

c/c++ 补全，智能感知配置

## 无需手动配置

EIDE 将在内部使用 `cpptool CustomConfiguraionProvider api` 为你的项目自动进行配置，C/C++ 插件将根据 EIDE 提供的配置为你的项目提供 补全，智能感知等功能。

因此 **不要手动 新建，编写 c_cpp_properties.json 文件**，如果你这样做了，C/C++ 插件将优先使用 `c_cpp_properties.json`，如果你的 c_cpp_properties.json 存在错误，那么项目的 补全，智能感知等功能将不能正常工作。

:::caution 注意
不论你之前从哪个地方得知需要为 C/C++ 插件配置 `c_cpp_properties.json` 文件，在 EIDE 项目中，**都是不需要的**，这个文件会干扰 C/C++ 插件的行为，在 EIDE 项目中，请删除它！
:::
