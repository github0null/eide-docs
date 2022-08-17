---
sidebar_position: 10
---

# Debug Project

Debug your **Cortex-M**, **STM8** project.

## Prepare

- **For Cortex-M Project**

  You need to install [cortex-debug](https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug)

  [cortex-debug docs](https://github.com/Marus/cortex-debug/wiki)

- **For STM8 Project**

  You need to install [stm8-debugger](https://marketplace.visualstudio.com/items?itemName=CL.stm8-debug)

## Launch Debugger

> For Cortex-M Project

1. Open the flasher configuration and set the relevant options (**eide will automatically generate the corresponding debugging configuration according to the different flasher config**)

2. Open `launch.json`, check cortex-debug debug configurations.

3. Connect your board with debug probe.

4. Select debug config name in **VSCode Debug View**.

5. Press `F5` launch debugger.

  ![](/docs_img/debug_cortex-m_prj.png)

:::tip More Usage
Please reference: https://github.com/Marus/cortex-debug/wiki
:::