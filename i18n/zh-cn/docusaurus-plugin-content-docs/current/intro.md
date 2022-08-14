---
sidebar_position: 1
---

# 这是什么？

[EIDE](https://marketplace.visualstudio.com/items?itemName=CL.eide) 是一个 VSCode 插件，用来开发单片机项目，比如：`8051`, `stm8`, `stm32`, `other cortex-m mcus` ...

![](https://docs.em-ide.com/preview.png)

:::caution 平台限制
我们支持如下平台： 
  - `Windows 10 or later`
  - `Linux X64`
:::

## 疑问？

- **Q:** 为什么选择它？

  **Ans:**
    - **更好的编码体验**：借助 VSCode，我们可以获得更好的编码体验。这有助于提高效率，从源头上减少程序中的潜在错误。
    - **统一的开发环境**：这个插件支持多种编译器，烧录工具，适用于绝大多数单片机开发，因此你不必再为每种芯片安装特定的IDE。
    - **支持跨平台开发**：目前我们支持 `Windows` 和 `Linux x64`。
    - **更好的社区生态**：VSCode 上有大量插件，你可以找到很多其他的工具。
    - **更好的版本管理**：VSCode 内置 GIT 功能，你可以更好的管理和维护源程序。

---

- **Q:** 这和 Keil/IAR 有什么不同 ?

  **Ans:** 功能上基本一致，只是它基于 VSCode 插件。

  :::caution 更弱的调试功能
  有一点要说明的是，该插件**不具备**调试功能。<br/>
  但是你可以借助其他插件实现调试功能，比如：[**Cortex-Debug**](https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug), 
  [**STM8-Debug**](https://marketplace.visualstudio.com/items?itemName=CL.stm8-debug)
  :::

---

- **Q:** 它支持多少种芯片？

  **Ans:** 很多。我们支持 6 种不同的编译器，可以被用来开发 `8051/stm8/cortex-m[0/0+/3/23/33/35p/4/7]/riscv/...` 项目

  ![](/img/toolchains.png)

  :::tip MORE COMPILER
  我们支持任何 GCC 的编译器
  :::