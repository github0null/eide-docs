---
sidebar_position: 5
---

# Chip Support Packages

Install chip package for your **Cortex-M** mcu ...

:::danger For Arm
This function is only for **Cortex-M** project.
:::

## What's This

> CMSIS-Pack defines a standardized way to deliver software components, device parameters  and board support information and code. Adopted by leading semiconductor companies,  embedded software and tools vendors across the Arm architecture, CMSIS-Packs  increase productivity across the industry by encouraging code reuse and enabling proactive  software component deployment with online updates and dependencies checking.

We support install [cmsis-pack](https://developer.arm.com/tools-and-software/embedded/cmsis/cmsis-packs) to project.

When you install a chip support cmsis-pack and select mcu name for your project, the plug-in will know the chip model and specifications you are using, and the following features will be optimized: 

- `Builder Configurations`: The plug-in will auto select the `CPU Type` by chip informations.

- `Flasher Configurations`: For JLink flasher, plug-in can automatically complete the chip selection and flasher algorithm file installation.

- `Debugger Configurations`: Plugin can automatically generate more debug configurations(for cortex-debug) based on chip model (including: chip name, SVD path, etc.)

- `RAM/ROM Layout`: Plugin will automatically fill the RAM/ROM address and size based on the selected chip information.

- `Peripheral Components`: Allow user install the source file components from cmsis-pack.

:::tip Not necessary
This function is not necessary, eide will work well even if you don't install any chip support package.
:::

## Install Chip Packages

We support 2 ways to install a chip support package for your project.

![](/docs_img/prj_install_chip_pack_typ.png)

### From Repo

We cached some [trimmed cmsis packages](https://github.com/github0null/eide-cmsis-pack/tree/master/packages) for eide.

If you use this way, eide will pull all available packages from above repository and provide a list for you to choose.

:::tip Why trim package
Some cmsis package are very large in size, this will affect the size of project.<br/>
So we have to trim them and remove unused contents to reduce disk usage.<br/>
:::

### From Disk

You need download a `.pack` file from package site and select it in file dialog that eide popup.

There are some sites:

- `MDK5 Software Packs`: https://www.keil.com/dd2/Pack/

- `Arm Official Site`: https://developer.arm.com/tools-and-software/embedded/cmsis/cmsis-packs

## Peripheral Components

`Peripheral Components` is a collection of peripheral driver source files.

You can install `Peripheral Components` to project from chip support package.

![](/docs_img/prj_chip_pkg_ins_comp.png)

Then these files will be compiled with your project.
