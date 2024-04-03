---
sidebar_position: 10
---

# Builder Configurations

Configure compiler options for your projects.

## Toolchain Configurations

You can switch toolchain for your project. (For each project type, we provide some selections !)

![](/docs_img/builder_select_toolchain.png)

And you can also configure your `toolchain path` or `toolchain prefix` for current project.

![](/docs_img/builder_configure_toolchain.png)

## Base Configurations

Each project will have its builder configuration.

![](/docs_img/builder_cfg_preview.png)

There are some **base options**, like: `CPU Type`, `Floating-Point Type`, `Linker Script File Path` ..., Usually, they have a fixed meaning.

- `CPU Type`: CPU Series Name, for arm project, it's like: `Cortex-M3, Cortex-M4 ...`

- `Floating-Point Type`: FPU type, like: `sp, dp, none`

- `Use Custom Linker Script File`: This option is **only for `Armcc/Armclang` compiler**. Used to decide whether to generate `Linker Script File (Scatter File)` automatically by plug-in.

- `Linker Script File Path`: A description file with memory layout which we call `Linker Script File (Scatter File)`, like: `xxx.sct, xxx.lds, xxx.ld`. It will be passed to the linker. 

- `RAM And ROM Layout`: Provides a memory layout editor similar to Keil, used to modify `Address, Size` for `RAM/ROM`. It will be shown when option `Use Custom Linker Script File` is `false`. (**Only for armcc/armclang compiler**)

:::tip not found some fields
Each `Project Type` and `Toolchain Type` have different underlying configurations. <br/>
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

Example:

- **Output `asm` file when compile `.c` file for `Armcc` compiler:**

  Add `--asm --asm_dir="${OutDir}"` params in `Builder Options` -> `C/C++ Compiler` -> `Other C Compiler Options`

  ![](/docs_img/example_gen_asm_for_armcc.png)

- **Import args from `./my_cmd.args.txt` file for c compiler:**

  Add `${ArgsFile:./my_cmd.args.txt}` params in `Builder Options` -> `C/C++ Compiler` -> `Other C Compiler Options`

### User Task Commands

We support execute some builder task before/after build your project.

![](/docs_img/builder_tasks.png)

There are some example commands:

```shell
# [For Windows10] execute windows bat script
.\xxx\xxx\xxx.bat [script arguments...]

# [For Windows10] show internal envs
powershell -Command ls env:

# [For Windows10] copy .hex .bin file to dist dir
mkdir .\dist & copy /B "${OutDir}\\${ProjectName}.hex" .\dist\ & copy /B "${OutDir}\\${ProjectName}.bin" .\dist\

# [For Windows10] copy .a file to dist dir
mkdir .\dist & copy /B "${OutDir}\\${ProjectName}.a" .\dist\lib${ProjectName}.a

# print compiler version for arm gcc project
"${CompilerFolder}/${toolPrefix}gcc" -v

# generate s19 file for armcc compiler
"${CompilerFolder}/fromelf" --m32combined -o "${OutDir}\\${ProjectName}.s19" "${OutDir}\\${ProjectName}.axf"

# generate hex file for arm gcc compiler
"${CompilerFolder}/${CompilerPrefix}objcopy" -O ihex "${OutDir}/${ProjectName}.elf" "${OutDir}/${ProjectName}.hex"

# generate bin file for arm gcc compiler
"${CompilerFolder}/${CompilerPrefix}objcopy" -O binary "${OutDir}/${ProjectName}.elf" "${OutDir}/${ProjectName}.bin"

# convert `hex` to `bin` by hex2bin
"${BuilderFolder}/utils/hex2bin" -b -c "${outDir}/${ProjectName}.hex"
```

:::tip Commandline Shell
For `Win32`, we use `cmd.exe` execute your commandline<br/>
For `Linux`, we use `/bin/bash` execute your commandline
:::

#### User Task Variables

There are some variables that you can use in `task commandline`

Variables for **project**:

|Variable Name|Description|Note|
|:----|:----|:----|
|`${ProjectName}`|Project name|
|`${ConfigName}`|Project config name, like: `Debug`, `Release`
|`${ProjectRoot}`|Project root directory path|
|`${OutDir}`|Builder output directory full path, like: `d:/path/my_project/proj_a/build/Debug`|
|`${OutDirRoot}`|Output directory root name, like: `build`|
|`${OutDirBase}`|Output directory base name, like: `build/Debug`|
|`${workspaceFolder}`|vscode workspace folder path
|`${workspaceFolderBasename}`|vscode workspace folder base name
|`${ToolchainRoot}`|toolchain root full path
|~~`${targetName}`~~|~~Project name~~|will be deprecated|
|`${re:ProjectRoot}`|Relative path of project root, Fixed value: `.`|
|`${re:OutDir}`|Relative path of output folder, like: `build/Debug`|

Variables for **compiler**:

|Variable Name|Description|Note|
|:----|:----|:----|
|`${ToolchainRoot}`|Compiler root folder|
|`${CompilerPrefix}`|GCC compiler prefix, like: arm-none-eabi-|
|`${CompilerId}`|Compiler ID, like: 'gcc', 'sdcc', 'ac5'|
|`${CompilerName}`|Compiler Short Name, like: 'GNU Tools for Arm Embedded Processors 8-2019-q3-update'|
|`${CompilerFullName}`|Compiler Full Name, like: 'arm-none-eabi-gcc.exe (GNU Tools for Arm Embedded Processors 8-2019-q3-update) 8.3.1 20190703 ...'|
|`${CompilerVersion}`|Compiler Version, like: '8.3.1'|
|`${BuilderFolder}`|eide builder tools root folder path|
|~~`${CompilerFolder}`~~|~~Compiler bin folder~~|will be deprecated|
|`${re:BuilderFolder}`|Relative path of builder tools root folder |
|`${re:ToolchainRoot}`|Relative path of compiler root folder|
|~~`${re:CompilerFolder}`~~|Relative path of compiler bin folder|will be deprecated|

Other extended compiler variables:

|Variable Name|Description|
|:----|:----|
|`${EIDE_CUR_OS_TYPE}`|OS Type, 'win32' or 'linux'|
|`${EIDE_CUR_COMPILER_ID}`|same as `${CompilerId}`|
|`${EIDE_CUR_COMPILER_NAME}`|same as `${CompilerName}`|
|`${EIDE_CUR_COMPILER_NAME_FULL}`|same as `${CompilerFullName}`|
|`${EIDE_CUR_COMPILER_VERSION}`|same as `${CompilerVersion}`|
|`${EIDE_CUR_COMPILER_PREFIX}`|Compiler Prefix|
|`${EIDE_CUR_COMPILER_CC_PATH}`|`C` Compiler full path|
|`${EIDE_CUR_COMPILER_AS_PATH}`|`ASM` Compiler full path|
|`${EIDE_CUR_COMPILER_LD_PATH}`|`LINKER` full path|
|`${EIDE_CUR_COMPILER_CXX_PATH}`|`C++` Compiler full path|
|`${EIDE_CUR_COMPILER_CC_BASE_ARGS}`|`C` source base compiler args|
|`${EIDE_CUR_COMPILER_AS_BASE_ARGS}`|`ASM` source base compiler args|
|`${EIDE_CUR_COMPILER_LD_BASE_ARGS}`|`LINKER` base args|
|`${EIDE_CUR_COMPILER_CXX_BASE_ARGS}`|`C++` source base compiler args|

### Built-in Unix Shell For Windows {#built-in-linux-shell-for-windows}

For Win32, the plugin built-in a MSYS environment (location: C:/Users/USER_NAME/.eide/bin/builder/msys/bin).

So you can execute `unix shell script` in windows platform.

More custom processing and manipulation can be done by properly using these programs on the command line of pre/post build tasks.

Such as:

```shell
# execute linux shell script
bash ./xxx/xxx.sh [script arguments...]

# output crc32 checksum for hex file
bash -c "crc32 \"${OutDir}/${ProjectName}.hex\""

# output sha1 checksum for hex file
bash -c "sha1sum \"${OutDir}/${ProjectName}.hex\""
```

All available shell commands:

- **Can be called directly:**

  ```shell
  a2p awk 
  basename bash bison bunzip2 bzcat bzip2 bzip2recover 
  cat chgrp chmod chown chroot cksum cmp comm cp csplit curl cut 
  date dd df diff diff3 dir dircolors dirname du 
  echo egrep env error-mode expand expr 
  factor false fgrep find flex fmt fold funzip 
  gawk-3.1.7 gawk grep gzexe gzip 
  head hostname 
  id install install.manifest 
  join kill 
  link ln locate logname ls lzcat lzma lzmadec lzmainfo 
  m4 make md5sum mkdir mkfifo mknod msysmnt mv 
  nice nl nohup 
  od oldfind openssl 
  paste patch patch.manifest pathchk perl perl5.8.8 pgawk-3.1.7 pgawk 
  pinky pkg-config pr printenv printf ps ptx pwd 
  readlink rm rmdir 
  scp sdiff sed seq sftp sh sha1sum shred sleep slogin sort split 
  ssh-add ssh-agent ssh-keygen ssh-keyscan ssh stat strace stty su sum sync 
  tac tail tar tee test touch tr true tsort tty 
  uname unexpand uniq unlink unlzma unxz unzip unzipsfx users 
  vdir wc who whoami 
  xargs xz xzcat xzdec 
  yes zipinfo
  ```

- **Only can called by 'bash -c' command:**

  ```shell
  aclocal autoconf autoheader autom4te automake autopoint autoreconf autoscan autoupdate 
  bashbug bzcmp bzdiff bzegrep bzfgrep bzgrep bzless bzmore 
  c2ph c_rehash cls clsb cmd config_data cpan cpantest crc32 
  dprofpp enc2xs 
  find2perl ftp 
  groups gunzip gzexe 
  h2ph h2xs 
  ifnames igawk instmodsh 
  ld2 libnetcfg libtool libtoolize lnkcnv lzcmp lzdiff lzegrep lzfgrep lzgrep lzless lzmore 
  mount msysinfo 
  perlbug perlcc perldoc perlivp perlld perlrebase piconv pl2pm pod2html pod2latex pod2man 
  pod2readme pod2text pod2usage pod_cover podchecker podselect prove psed pstruct ptar ptardiff ptee 
  s2p shasum splain start 
  umount uncompress updatedb 
  which xsubpp xzcmp xzdiff xzegrep xzfgrep xzgrep xzless xzmore 
  yacc ysh 
  zcat zcmp zdiff zegrep zfgrep zforce zgrep zipgrep zless zmore znew
  ```

Example:

```bash title="./tools/pack_firmware.sh"

#
# make firmware file. add timestamp, crc32 checksum
#
# [in]:
#   args(1): build output binary file path
#
# [env]:
#   ${FIRMWARE_OUT_DIR}
#   ${PRODUCT_NAME}
#   ${FIRMWARE_VERSION}
#
# [out]:
#   output firmware file to:
#     '${FIRMWARE_OUT_DIR}/${PRODUCT_NAME}_V${FIRMWARE_VERSION}_${timeStamp}_${crc32}.${fileSuffix}'
#

# convert '\' -> '/' for unix
inputFile=$(echo $1 | sed 's/\\/\//g')

crc32Val=$(crc32 "${inputFile}" | sed -E 's/.*0x([0-9a-fA-F]+).*/\1/g' | tr 'A-Z' 'a-z')
baseFileName=$(basename "${inputFile}")
fSuffix=${baseFileName##*.}

echo "make output dir: '${FIRMWARE_OUT_DIR}'"
mkdir -p ${FIRMWARE_OUT_DIR}
rm -rf ./${FIRMWARE_OUT_DIR}/*.${fSuffix}

timeStamp=$(date +%y%m%d%H%M)
firmwareName="${PRODUCT_NAME}_V${FIRMWARE_VERSION}_${timeStamp}_${crc32Val}"
firmwareOutPath="${FIRMWARE_OUT_DIR}/${firmwareName}.${fSuffix}"

echo "output firmware: '${firmwareOutPath}'"
cp "${inputFile}" "${firmwareOutPath}"
```
