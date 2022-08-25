---
sidebar_position: 10
---

# Builder Configurations

Configure compiler options for your projects.

## Base Configurations

Each project will have its builder configuration.

![](/docs_img/builder_cfg_preview.png)

There are some **base options**, like: `CPU Type`, `Floating-Point Type`, `Linker Script File Path` ..., Usually, they have a fixed meaning.

- `CPU Type`: CPU Series Name, for arm project, it's like: `Cortex-M3, Cortex-M4 ...`

- `Floating-Point Type`: FPU type, like: `sp, dp, none`

- `Use Custom Linker Script File`: This option is only for `Armcc/Armclang` compiler. Used to decide whether to generate `Linker Script File` automatically by plug-in.

- `Linker Script File Path`: A description file with memory layout which we call `Linker Script File`, like: `xxx.sct, xxx.lds, xxx.ld`. It will be passed to the linker. 

- `RAM And ROM Layout`: Provides a memory layout editor similar to Keil, used to modify `Address, Size` for `RAM/ROM`. It will be shown when option `Use Custom Linker Script File` is `false`.

:::tip not found some fields
Each project type has a different underlying configuration. <br/>
So not every project will have the above fields. 
:::

## Advance Configurations

In addition to the **base options** described above, we also provide more detailed compiler configurations.

![](/docs_img/builer_cfg_btn.png)

Click `modify` button, will open `BUILDER OPTIONS VIEW`, like this:

![](/docs_img/builder_opt_view.png)

We divided the configuration into `5` tabs, there are `User Task`, `Global Options`, `C/C++ Compiler`, `Assembler`, `Linker`.

- `User Task`: You can set some shell command which will be execute in different stages of a build. 

  We have `2` type: `pre-build`, `post-build`.

  `pre-build` command will be execute before a build start.
  
  `post-build` command will be execute after a build done.

  There are some [example commands](#user-task-commands).

- `Global Options`: Some global options for `C/C++ Compiler`, `Assembler` and `Linker`.

- `C/C++ Compiler`: Specific options for c/c++ compiler.

- `Assembler`: Specific options for assembler.

- `Linker`: Specific options for linker.

:::tip Not GUI
If you don't like GUI, please click `OPEN CONFIG` to open config file and modify it.
:::

:::caution Save your configurations
Please click `Save` button or press `ctrl+s` to save your configurations.<br/>
We **not support** auto-save.
:::

### Specific Variables

We support some specific variable for builder options:

|Variable Name|Description|Note|
|:----|:----|:----|
|`${OutName}`|`.o` file name|relative path, No suffix|
|`${OutDir}`|`.o` directory path|relative path|
|`${FileName}`|source file name|relative path, No suffix|
|`${FileDir}`|source file directory path|relative path|
|`${ArgsFile:ARGS_FILE_PATH}`|import `compiler args` from file `ARGS_FILE_PATH`|only ASCII characters and no special symbols|

And we also support some expressions:

|Expression|Description|
|:----|:----|
|`$<override:new_args>`|override all compiler args with `new_args`|
|`$<replace:old_args/new_args>`|replace compiler args, replace `old_args` with `new_args`|

Example:

- **Output `asm` file when compile `.c` file for `Armcc` compiler:**

  Add `--asm --asm_dir="${OutDir}"` params in `Builder Options` -> `C/C++ Compiler` -> `Other C Compiler Options`

  ![](/docs_img/example_gen_asm_for_armcc.png)

- **Import args from `./my_cmd.args.txt` file for c compiler:**

  Add `${ArgsFile:./my_cmd.args.txt}` params in `Builder Options` -> `C/C++ Compiler` -> `Other C Compiler Options`

### User Task Commands

There are some utility commands for references.

```shell
# [For Windows10] execute windows bat script
.\xxx\xxx\xxx.bat [script arguments...]

# [For Windows10] show internal envs
powershell -Command ls env:

# [For Windows10] copy .hex .bin file to dist dir
mkdir .\dist & copy /B "${OutDir}\${targetName}.hex" .\dist\ & copy /B "${OutDir}\${targetName}.bin" .\dist\

# [For Windows10] copy .a file to dist dir
mkdir .\dist & copy /B "${OutDir}\${targetName}.a" .\dist\lib${targetName}.a

# print compiler version for arm gcc project
"${CompilerFolder}/${toolPrefix}gcc" -v

# generate s19 file for armcc compiler
"${CompilerFolder}/fromelf" --m32combined -o "${OutDir}\${targetName}.s19" "${OutDir}\${targetName}.axf"

# generate hex file for arm gcc compiler
"${CompilerFolder}/${CompilerPrefix}objcopy" -O ihex "${OutDir}\${TargetName}.elf" "${OutDir}\${TargetName}.hex"

# generate bin file for arm gcc compiler
"${CompilerFolder}/${CompilerPrefix}objcopy" -O binary "${OutDir}\${TargetName}.elf" "${OutDir}\${TargetName}.bin"

# convert `hex` to `bin` by hex2bin
"${BuilderFolder}/utils/hex2bin" -b -c "${outDir}/${targetName}.hex"
```

#### User Task Variables

Variables for project:

|Variable Name|Description|
|:----|:----|
|`${targetName}`|Project name
|`${ConfigName}`|Project Target Name, like: 'Debug', 'Release'
|`${ProjectRoot}`|Project root directory path|
|`${OutDir}`|Build output directory path|
|`${re:ProjectRoot}`|Relative path of project root, Fixed value: '.'|
|`${re:OutDir}`|Relative path of output folder, like: 'build/Debug'|

Variables for compiler:

|Variable Name|Description|
|:----|:----|
|`${BuilderFolder}`|Builder tools root folder path|
|`${ToolchainRoot}`|Compiler root folder|
|`${CompilerPrefix}`|GCC compiler prefix, like: arm-none-eabi-|
|`${CompilerFolder}`|Compiler bin folder|
|`${CompilerId}`|Compiler ID, like: 'gcc', 'sdcc', 'ac5'|
|`${CompilerName}`|Compiler Short Name, like: 'GNU Tools for Arm Embedded Processors 8-2019-q3-update'|
|`${CompilerFullName}`|Compiler Full Name, like: 'arm-none-eabi-gcc.exe (GNU Tools for Arm Embedded Processors 8-2019-q3-update) 8.3.1 20190703 ...'|
|`${CompilerVersion}`|Compiler Version, like: '8.3.1'|
|`${re:BuilderFolder}`|Relative path of builder tools root folder |
|`${re:ToolchainRoot}`|Relative path of compiler root folder|
|`${re:CompilerFolder}`|Relative path of compiler bin folder|


#### Built-in Linux Shell For Windows

For Win32, the plugin built-in a MSYS environment (location: C:\Users\USER_NAME\.eide\bin\builder\msys\bin).

So you can execute `unix shell script` in windows platform.

More custom processing and manipulation can be done by properly using these programs on the command line of pre/post build tasks.

Such as:

```shell
# execute linux shell script
bash ./xxx/xxx.sh [script arguments...]

# output crc32 checksum for hex file
crc32 "${OutDir}/${TargetName}.hex"

# output sha1 checksum for hex file
sha1sum "${OutDir}/${TargetName}.hex"
```

All available shell commands:

```shell
awk basename bash bunzip2 bzip2 bzip2recover 
cat chmod cksum cp crc32 curl date dd dirname dos2unix 
echo expr find gawk-3.1.7 gawk grep gzip head 
kill ln ls make-old make makeinfo md5sum mkdir mv 
openssl pwd rm rmdir sed sh sha1sum sleep tar test 
touch tr unzip wget xargs zip
```