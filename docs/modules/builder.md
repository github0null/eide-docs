---
sidebar_position: 10
---

# Builder Configurations

Configure compiler options for your projects.

## Base Configurations

Each project will have its builder configuration.

![](/img/builder_cfg_preview.png)

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

![](/img/builer_cfg_btn.png)

Click `modify` button, will open `BUILDER OPTIONS VIEW`, like this:

![](/img/builder_opt_view.png)

We divided the configuration into `4` tabs, there are `User Task`, `Global Options`, `C/C++ Compiler`, `Assembler`, `Linker`.

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

### User Task Commands

There are some utility commands for references.

```shell
# [Windows10] execute windows bat script
.\xxx\xxx\xxx.bat [script arguments...]

# [Windows10] show internal envs
powershell -Command ls env:

# [Windows10] copy .hex .bin file to dist dir
mkdir .\dist & copy /B "${OutDir}\${targetName}.hex" .\dist\ & copy /B "${OutDir}\${targetName}.bin" .\dist\

# [Windows10] copy .a file to dist dir
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