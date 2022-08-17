---
sidebar_position: 1
---

# What's This

[![](https://vsmarketplacebadge.apphb.com/version/cl.eide.svg)](https://marketplace.visualstudio.com/items?itemName=CL.eide) [![](https://vsmarketplacebadge.apphb.com/installs/cl.eide.svg)](https://marketplace.visualstudio.com/items?itemName=CL.eide) [![](https://vsmarketplacebadge.apphb.com/downloads/cl.eide.svg)](https://marketplace.visualstudio.com/items?itemName=CL.eide) [![](https://vsmarketplacebadge.apphb.com/rating/cl.eide.svg)](https://marketplace.visualstudio.com/items?itemName=CL.eide)

[EIDE](https://marketplace.visualstudio.com/items?itemName=CL.eide) is a **VSCode plug-in**, used to development `single-chip microcomputer projects`, like: `8051`, `stm8`, `stm32`, `other cortex-m mcus` ...

![](https://em-ide.com/preview.png)

:::caution Platform Limitations
Now we support: 
  - `Windows 10 or later`
  - `Linux X64`
:::

## Q&A

- **Q:** Why use it ?

  **Ans:**
    - **Better coding experience**: On VSCode, we can get a much better coding experience. This helps improve efficiency and reduces coding errors. 
    - **Unify Development Environment**: This plug-in support many kinds of `compiler, project type, flasher, utility tools`. You don't have to switch between multiple development environments. It's enough that work with VsCode.
    - **Cross Platform**: This plug-in support `Windows`, `Linux x64` platform.
    - **Better Community Ecology**: There are many plugins being made for VsCode every day, and you can choose which features you want, or create new features yourself.
    - **Built-in Git**: With the built-in git of VSCode, we can better manage the project version.

---

- **Q:** How is it different from Keil/IAR ?

  **Ans:** There's **not** a lot of difference. It is based on VSCode, this is the main difference.

  :::caution weak debugger feature
  Compared with `Keil, IAR`, this plug-in lacks debugger capabilities.<br/>
  But you can get debugger capabilities from other plug-ins, like: [**Cortex-Debug**](https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug), 
  [**STM8-Debug**](https://marketplace.visualstudio.com/items?itemName=CL.stm8-debug)
  :::

---

- **Q:** How many functions ?

  **Ans:** `Create/Import/Export Project`, `Manage Project`, `Build Project`, `Program Chip`

---

- **Q:** How many chips does it support ?

  **Ans:** A lot. We support 6 kinds of compilers that can be used to compile `8051/stm8/cortex-m[0/0+/3/23/33/35p/4/7]/riscv/...` mcu projects

  ![](/docs_img/toolchains.png)

  :::tip MORE COMPILER
  We support any GCC family compiler.
  :::