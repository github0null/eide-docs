---
sidebar_position: 20
---

# Flasher Configurations

Program your code into flash...

We support many flasher for your embedded projects.

| Project Type  | Flashers                                                   |
| :------------ | :--------------------------------------------------------- |
| 8BIT Project  | `stvp for stm8`, `stcgal`, `any shell command`             |
| Arm Project   | `jlink`, `stlink`, `pyocd`, `openocd`, `any shell command` |
| RISCV Project | `jlink`, `pyocd`, `openocd`, `any shell command`           |

You can switch flasher for your project.

![](/docs_img/flasher_cfg_switch.png)

## Install Flasher Tools

Flasher tools are not integrated into the EIDE installation package, so you need to install the appropriate flash tool before using the flasher feature.

Click `Upload To Device` button to start a flash program, we will check you flasher executable and if it's has not been installed, we will pop-up a notification, now you can install or set flasher.

![](/docs_img/flasher_trigger_installer.png)

If you want to select an existing installation location for your flashers, you need modify eide's plug-in settings.

The following is a list of plug-in flasher settings:

| Flasher | VSCode Settings ID            |
| :------ | :---------------------------- |
| STVP    | `EIDE.STM8.STVP.CliExePath`   |
| JLink   | `EIDE.JLink.InstallDirectory` |
| STLink  | `EIDE.STLink.ExePath`         |
| Openocd | `EIDE.OpenOCD.ExePath`        |

:::tip
You can also set your flasher executable file path to `System Environment Variables`. plug-in will found it.
:::

## Base Configurations

:::danger Install your flasher at first
You must install corresponding flasher software before modify your flasher configurations.
:::

Before start to program flash, you need to check your flasher config.

![](/docs_img/flasher_cfg_preview.png)

Each flasher configuration has some base fields, as follows:

- `Program File`: program file path, like: `xxx.hex, xxx.bin, xxx.s19`

  Format: `<filepath_1>[,addr_1][;<filepath_2>[,addr_2];...;<filepath_n>]`

  For this field, we support some variables:
  ```
  ${OutDir}: Output Directory
  ${ProjectName}: Project Name
  ${ExecutableName}: Executable file output path, without suffix
  ${ProjectRoot}: Project root directory
  ${<EnvVarName>}: Variables in `Project Settings` -> `Env Variables`
  ```

  Examples:

  - `${ExecutableName}.hex`: use '${ExecutableName}.hex' file to program flash.

  - `./bootloader.hex;${ExecutableName}.hex`: at first, use './bootloader.hex' to program flash, and then use '${ExecutableName}.hex' to program flash.
  
  - `./bootloader.bin,0x08000000;${ExecutableName}.hex`：at first, use './bootloader.bin' to program flash at '0x08000000', and then use '${ExecutableName}.hex' to program flash.
  
  - `./bootloader.bin,0x08000000;${ExecutableName}.bin,0x08100000`：at first, use './bootloader.bin' to program flash at '0x08000000', and then use '${ExecutableName}.bin' to program flash at '0x08100000'.

  :::tip default value
  If the value of this field is **blank**, the `${ExecutableName}.hex` will be used.
  :::

  :::caution Program More Than One Files
  Only support program multi-files for `JLink`, `OpenOCD`, `pyOCD` flasher.
  :::

## Specific Configurations

Each flasher has their specific configurations.

:::danger Install your flasher at first
You must install corresponding flasher software before modify your flasher configurations.
:::

### JLink

![](/docs_img/flasher_jlink_cfg.png)

- `CPU Name`: JLink device name. 

  We will extract all available cpus from `JLink` for you to choose.

  click `modify` button, a list will popup.

  ![](/docs_img/flasher_jlink_sel_cpu.png)

- `Interface Type`: Interface for your debug probe.

  Available values:

  ```
  SWD
  JTAG
  cJTAG
  FINE
  ```

- `Download Speed`: Frequency of communication for debug probe. Unit: `KHz`

- `Extra CommandLine`: Other commandline options whitch will be passed to JLink.

  example options:

    - `-SelectEmuBySN <SN-Code>`: It is possible to have multiple J-Links connected to the PC at the same time.
    Provide the `JLink S/N Code` for J-Link Commander to connect to a specific J-Link in an automated way (no user interaction required).

  goto https://wiki.segger.com/J-Link_Commander#Batch_processing for more commandline options.

### STLink

> For STLink, we support 2 flasher software: `ST_Cube_Programmer` and `STLink_Utility`.<br/>
> By default, we use `ST_Cube_Programmer`

![](/docs_img/flasher_stlink_cfg.png)

- `Interface Type`: Interface for your debug probe.

  Available values: `SWD, JTAG`

- `Reset Mode`: Reset type when flash your ST mcus.

  Available values: `default`, `software`, `hardware`, `core reset`

- `Launch App After Program`: Launch your program after flash done.
  
  Available values: `true` or `false`

- `Download Speed`: Frequency of communication for debug probe. Unit: `KHz`

- `External Loader File`: Programming algorithm file (`xxx.stldr`).

- `Option Bytes Config`: Options bytes for mcus. It's a txt file with `ini` format.

- `Extra CommandLine`: Other commandline options whitch will be passed to `st_cube_programmer`.

### PyOCD

[pyOCD](https://pyocd.io/): Python based tool and API for debugging, programming, and exploring Arm Cortex microcontrollers.

#### Install PyOCD

https://pyocd.io/docs/installing.html

#### Config

![](/docs_img/flasher_pyocd_cfg.png)

- `Target Name`: Target mcu name. 
  
  We will extract all available cpus from `pyOCD` for you to choose.

  For more target, please reference: [target support](https://pyocd.io/docs/target_support.html)

- `Download Speed`: Frequency of communication for debug probe.

  Available values: please reference: [debug probes](https://pyocd.io/docs/debug_probes.html)

  Default value: `4M`

- `Other Options`: pyOCD config file.

  Please reference: [pyocd config file](https://pyocd.io/docs/configuration.html#config-file)

### OpenOCD

> [OpenOCD](https://openocd.org/pages/about.html), the Open On-Chip Debugger has been created by Dominic Rath as part of a diploma thesis at the University of Applied Sciences, FH-Augsburg. For other material presented on this site, see the respective notes of authorship.

#### Install 

For Win32: https://freddiechopin.info/en/download/category/4-openocd

Official site: https://openocd.org/pages/getting-openocd.html

:::tip Recommended version
We recommend to install `v0.10.0`.
:::

#### Config

![](/docs_img/flasher_openocd_cfg.png)

- `Chip Config`: The configuration file for mcu.

  We will extract all available values from `openocd` for you to choose.

- `Interface Config`: The configuration file for debug probe.

  We will extract all available values from `openocd` for you to choose.

How To Make An OpenOCD Config File: https://openocd.org/doc-release/html/Config-File-Guidelines.html#Config-File-Guidelines

:::tip Custom config file
If you have an openocd `xx.cfg` file, put it in one of `<projectRootFolder>`, `<projectRootFolder>/.eide` or `<projectRootFolder>/tools` folder.<br/>
The plug-in will found them and then you can choose config file.
:::

### STVP

> Only available for `8Bit Project`

[STVP-STM8](https://www.st.com/zh/development-tools/stvp-stm8.html) is used to program flash for **STM8** chips.

![](/docs_img/flasher_stvp_cfg.png)

- `CPU Name`: STM8 chip name. 

  We will extract all available stm8 chips from `stvp` for you to choose.

- `eeprom Data File Path`: eeprom data file path for stm8 `eeprom` region.

  The path must contain only `numbers`, `letters`, `-` or `_`.

- `Option Bytes File Path`: option bytes config for stm8.

  The path must contain only `numbers`, `letters`, `-` or `_`.

### STCGAL

[STCGAL](https://github.com/grigorig/stcgal) is a command line flash programming tool for [STC MCU Ltd](http://stcmcu.com/) 8051 compatible microcontrollers.

**Notice**: The STCGAL supports a limited number of chip models.

```markdown
stcgal should fully support STC 89/90/10/11/12/15/8 series MCUs.

So far, stcgal was tested with the following MCU models:

* STC89C52RC (BSL version: 4.3C/6.6C)
* STC90C52RC (BSL version: 4.3C)
* STC89C54RD+ (BSL version: 4.3C)
* STC12C2052 (BSL version: 5.8D)
* STC12C2052AD (BSL version: 5.8D)
* STC12C5608AD (BSL version: 6.0G)
* STC12C5A16S2 (BSL version: 6.2I)
* STC12C5A60S2 (BSL version: 6.2I/7.1I)
* STC11F02E (BSL version: 6.5K)
* STC10F04XE (BSL version: 6.5J)
* STC11F08XE (BSL version: 6.5M)
* STC12C5204AD (BSL version: 6.6H)
* STC15F104E (BSL version: 6.7Q)
* STC15F204EA (BSL version: 6.7R)
* STC15L104W (BSL version: 7.1.4Q)
* STC15F104W (BSL version: 7.1.4Q and 7.2.5Q)
* IAP15F2K61S2 (BSL version: 7.1.4S)
* STC15L2K16S2 (BSL version: 7.2.4S)
* IAP15L2K61S2 (BSL version: 7.2.5S)
* STC15W408AS (BSL version: 7.2.4T)
* STC15W4K56S4 (BSL version: 7.3.4T, UART and USB mode)
* STC8A8K64S4A12 (BSL version: 7.3.9U)
* STC8F2K08S2 (BSL version: 7.3.10U)
```

#### Install

At first, you need a **python3** environment.

then execute these command to install it, as follows:

```shell
pip3 install stcgal --user
```

Then you can check stcgal by this command:

```shell
stcgal -h
```

#### Config

![](/docs_img/flasher_stcgal_cfg.png)

- `eeprom Data File Path`: eeprom data file path for `eeprom` region.

  The path must contain only `numbers`, `letters`, `-` or `_`.

- `Extra CommandLine`: Other stcgal commandline options.

  reference: [stcgal usage](https://github.com/grigorig/stcgal/blob/master/doc/USAGE.md)

- `Other Config`: Specific stc flash config.

  reference: [stcgal option keys](https://github.com/grigorig/stcgal/blob/master/doc/USAGE.md#option-keys)

:::caution Program flash
After stcgal output a message: `Cycling power done`, you need **reset mcu** to start a program flash process.<br/>
Otherwise, stcgal will be in the waiting state.
:::

### Use Shell Command

We support to use any shell command to program your flash.

![](/docs_img/flasher_shell_cfg.png)

- `Flash Command`: The shell command which will be executed when user trigger a program flash process.

- `Erase Chip Command`: The shell command which will be executed when user trigger a erase flash process.

:::tip Shell Executable File
For **Win32**, the shell command will be executed by `CMD.exe`.<br/>
For **Linux**, the shell command will be executed by `/bin/bash`.
:::

:::tip Execute Unix Shell Command In Windows System
We have built-in a [msys shell terminal environment](https://em-ide.com/docs/modules/builder#built-in-linux-shell-for-windows), so you can execute unix command directly by `bash` command.
:::

---

There are some available variables for shell command:

- `${programFile}`: Path for the program file. 
  
  the value is defined by [`Base Config -> Program File`](#base-configurations)

- `${port}`: available serial-port name (like: `COM1, COMx` for win32; `ttyUSB0, ttyUSBx` for linux).

The following variables are available when there are more than one program file that can be used:

- `${programFile[n]}`: Path for the NTH program file (`n` starts from zero).

- `${binAddr[n]}`: (only for `bin` file) Flash start address for the NTH program file (`n` starts from zero).

Some examples:

```shell
# execute unix shell script
bash ./xxx/xxx.sh [script arguments...]

# use NuLink to program nuvoton mcu
NuLink -w APROM "${programFile}"

# use stcflash to program stc 8051 mcu
python ./tools/stcflash.py -p ${port} "${programFile}"

# use STM32CubeProgramer + STLink probe to program STM32 mcu
STM32_Programmer_CLI -c port=SWD FREQ=4000 mode=NORMAL reset=SWrst --download "${programFile}" -v --go
```
