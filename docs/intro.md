---
sidebar_position: 1
---

# What's This

[Embedded IDE](https://marketplace.visualstudio.com/items?itemName=CL.eide) is a **VSCode plug-in**, used to development `single-chip microcomputer projects`, like: `8051`, `stm8`, `stm32`, `other cortex-m mcus` ...

![](https://em-ide.com/welcome_page.png)

![](https://em-ide.com/preview.png)

:::caution Platform
Now we support: 
  - `Windows 10+ x64`
  - `Linux X64`
  - `macOS` (Only tested in macOS 10.15 x64)
:::

## Q&A

- **Q:** Why use it ?

  **A:**
    - **Better coding experience**: On VSCode, we can get a much better coding experience. This helps improve efficiency and reduces coding errors. 
    - **Unify Development Environment**: This plug-in support many kinds of `compiler, project type, flasher, utility tools`. You don't have to switch between multiple development environments. It's enough that work with VsCode.
    - **Cross Platform**: This plug-in support `Windows`, `Linux x64` platform.
    - **Better Community Ecology**: There are many plugins being made for VsCode every day, and you can choose which features you want, or create new features yourself.
    - **Built-in Git**: With the built-in git of VSCode, we can better manage the project version.

---

- **Q:** Is it the VSCode version of Keil MDK ?

  **A:** NO ! It's NOT !

---

- **Q:** How is it different from Keil/IAR ?

  **A:** There's **not** a lot of difference. It is based on VSCode, this is the main difference.

  :::caution weak debugger feature
  Compared with `Keil, IAR`, this plug-in lacks debugger capabilities.<br/>
  But you can get debugger capabilities from other plug-ins, like: [**Cortex-Debug**](https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug), 
  [**STM8-Debug**](https://marketplace.visualstudio.com/items?itemName=CL.stm8-debug)
  :::

---

- **Q:** How do I migrate Keil_MDK/IAR/Eclipse projects to VSCode ?

  **A:** The plug-in has the project import function and supports the import of most projects.

---

- **Q:** How many functions ?

  **A:** `Create/Import/Export Project`, `Manage Project`, `Build Project`, `Program Chip`

---

- **Q:** How many chips does it support ?

  **A:** A lot. We support 6 kinds of compilers that can be used to compile `8051/stm8/cortex-m[0/0+/3/23/33/35p/4/7]/riscv/...` mcu projects

  ![](/docs_img/toolchains.png)

  :::tip MORE COMPILER
  We support any GCC family compiler.
  :::