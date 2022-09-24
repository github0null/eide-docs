---
sidebar_position: 30
---

# Project Settings

Other project settings

## Available Settings

![](/docs_img/prj_settings_preview.png)

### Project Name

The project name.

- **In Builder**

  It's used to determine the file name when generating build output files (like: `.elf`, `.hex`, `.bin` ...).

  It's the value of env variable `${ProjectName}`

### Output Folder Name

It's the builder output folder name. 

This means that all intermediate files in the build process will be generate in this folder.

The default value is `build`

### Environment Variables

We support add some environment variables to project.

These variables can be used in:

- Source File Path

- Compiler Options

- Build Process (process environment variables)

- Flasher Shell Command

#### Specific Eide Variables

- `COMPILER_CMD_PREFIX`: value type: `string`

  This variable is used to pass some fixed args to compiler.

  Because some compiler need `License Args` and `Activation Keys Args`.

- `MCU_RAM_SIZE`: value type: `number, hex number`

  This variable is used to print memory usage.

  *Must be used both with `MCU_ROM_SIZE`*

- `MCU_ROM_SIZE`: value type: `number, hex number`

  This variable is used to print memory usage.

  *Must be used both with `MCU_RAM_SIZE`*

- `EIDE_BUILD_ORDER`: value type: `number`

  It's used to determine the project build priority in [multi-project workspace](../advance/multi_prj_workspace).