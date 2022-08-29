---
sidebar_position: 10
---

# 构建器配置

为项目配置编译器选项

## 基础配置

每个项目都有基础的配置

![](/docs_img/builder_cfg_preview.png)

有一些基本选项，如：`CPU 类型`，`浮点类型`，`链接器脚本文件路径` 通常它们有固定的含义

- `CPU 类型`: CPU 系列名称；对于 arm 项目，类似于：`Cortex-M3, Cortex-M4 ...`

- `硬件浮点选项`: 浮点类型，例如：`sp, dp, none`

- `使用自定义的链接脚本`: 此选项仅适用于 `Armcc/Armclang` 编译器。用于决定是否通过插件自动生成 `链接器脚本文件`

- `链接脚本路径`: 一个带有存储器布局的描述文件，我们称之为 `链接器脚本文件`，比如: `xxx.sct, xxx.lds, xxx.ld`，它将被传递给链接器

- `RAM / FLASH 布局`: 提供一个类似于 Keil 的存储器布局编辑器，用于为 `RAM/ROM` 修改 `地址，大小`信息，当选项 `使用自定义链接器脚本文件` 为 `false` 时将显示

:::tip 没有上述的字段
每种项目类型都有不同的基础配置<br/>
因此，并不是每种项目类型都会有上述字段
:::

## 高级配置

除了上面描述的 `基础选项`，我们还提供了更详细的编译配置项

![](/docs_img/builer_cfg_btn.png)

点击 `修改` 按钮，将打开 `BUILDER OPTIONS` 视图，如下：

![](/docs_img/builder_opt_view.png)

我们把配置项分为 5 个标签页，分别为 `用户任务`, `全局选项`, `C/C++ 编译器`, `汇编器`, `链接器`.

- `用户任务`: 您可以设置一些 shell 命令，这些命令将在构建的不同阶段执行

  我们有两种类型供选择：`pre-build`, `post-build`

  `pre-build` 命令将在构建开始之前执行
  
  `post-build` 命令将在构建完成后执行

  这里有一些[示例命令](#用户任务命令).

- `全局选项`: 一些被应用到 `C/C++ 编译器`, `汇编器` 和 `链接器` 的全局选项.

- `C/C++ 编译器`: 特定于 C/C++ 编译器的选项

- `汇编器`: 特定于汇编器的选项

- `链接器`: 特定于链接器的选项

:::tip 无GUI
如果你不想使用 GUI 配置页面，点击 `OPEN CONFIG` 可以直接打开配置文件进行修改
:::

:::caution 保存你的配置
单击 `Save` 按钮或者按下 `ctrl+s` 以保存你的配置，我们不支持自动保存
:::

### 可用的变量

我们支持在构建器配置中使用一些特定的变量

|变量名|描述|备注|
|:----|:----|:----|
|`${OutName}`|`.o` 文件名|相对路径，无文件后缀名|
|`${OutDir}`|`.o` 目录路径|相对路径|
|`${FileName}`|源文件名|相对路径，无文件后缀名|
|`${FileDir}`|源文件目录路径|相对路径|
|`${ArgsFile:ARGS_FILE_PATH}`|从文件 `ARGS_FILE_PATH` 中导入编译参数|路径不得包含特殊符号及非ASCII码|

示例：

- **在使用 `Armcc` 编译 `.c` 文件时，同时输出 `asm` 文件：**

  添加 `--asm --asm_dir="${OutDir}"` 参数到 `Builder Options` -> `C/C++ Compiler` -> `Other C Compiler Options` 中

  ![](/docs_img/example_gen_asm_for_armcc.png)

- **从 `./my_cmd.args.txt` 文件中导入一些 C 编译器参数：**

  添加 `${ArgsFile:./my_cmd.args.txt}` 参数到 `Builder Options` -> `C/C++ Compiler` -> `Other C Compiler Options` 中

### 用户任务命令

这里有一些示例命令

```shell
# [For Windows10] execute windows bat script
.\xxx\xxx\xxx.bat [script arguments...]

# [For Windows10] show internal envs
powershell -Command ls env:

# [For Windows10] copy .hex .bin file to dist dir
mkdir .\dist & copy /B "${OutDir}\\${targetName}.hex" .\dist\ & copy /B "${OutDir}\\${targetName}.bin" .\dist\

# [For Windows10] copy .a file to dist dir
mkdir .\dist & copy /B "${OutDir}\\${targetName}.a" .\dist\lib${targetName}.a

# print compiler version for arm gcc project
"${CompilerFolder}/${toolPrefix}gcc" -v

# generate s19 file for armcc compiler
"${CompilerFolder}/fromelf" --m32combined -o "${OutDir}\\${targetName}.s19" "${OutDir}\\${targetName}.axf"

# generate hex file for arm gcc compiler
"${CompilerFolder}/${CompilerPrefix}objcopy" -O ihex "${OutDir}/${TargetName}.elf" "${OutDir}/${TargetName}.hex"

# generate bin file for arm gcc compiler
"${CompilerFolder}/${CompilerPrefix}objcopy" -O binary "${OutDir}/${TargetName}.elf" "${OutDir}/${TargetName}.bin"

# convert `hex` to `bin` by hex2bin
"${BuilderFolder}/utils/hex2bin" -b -c "${outDir}/${targetName}.hex"
```

#### 用户任务变量

项目变量：

|变量名|描述|
|:----|:----|
|`${targetName}`|项目名
|`${ConfigName}`|项目目标名，如：'Debug', 'Release'
|`${ProjectRoot}`|项目根目录名|
|`${OutDir}`|构建输出目录路径|
|`${re:ProjectRoot}`|项目根目录相对路径，固定值：'.'|
|`${re:OutDir}`|构建输出目录相对路径，如：'build/Debug'|

编译器变量：

|变量名|描述|
|:----|:----|
|`${BuilderFolder}`|构建工具根目录路径|
|`${ToolchainRoot}`|编译器根目录|
|`${CompilerPrefix}`|GCC 编译器前缀，如：arm-none-eabi-|
|`${CompilerFolder}`|编译器 bin 目录|
|`${CompilerId}`|编译器 ID，如：'gcc', 'sdcc', 'ac5'|
|`${CompilerName}`|编译器短名称，如：'GNU Tools for Arm Embedded Processors 8-2019-q3-update'|
|`${CompilerFullName}`|编译器全名称，如：'arm-none-eabi-gcc.exe (GNU Tools for Arm Embedded Processors 8-2019-q3-update) 8.3.1 20190703 ...'|
|`${CompilerVersion}`|编译器版本号，如：'8.3.1'|
|`${re:BuilderFolder}`|构建工具根目录相对路径|
|`${re:ToolchainRoot}`|编译器根目录相对路径|
|`${re:CompilerFolder}`|编译器 bin 目录相对路径|


#### 为 Windows 内置的 Linux Shell 终端

对于 Win32，插件内置了一个 MSYS 环境（位置：C:\Users\USER_NAME\.eide\bin\builder\msys\bin）

所以你可以在 Windows 平台上执行 `unix shell script`

通过在 构建前/后任务 的命令行上正确使用这些程序，可以完成更多自定义处理和操作

例如:

```shell
# execute linux shell script
bash ./xxx/xxx.sh [script arguments...]

# output crc32 checksum for hex file
crc32 "${OutDir}/${TargetName}.hex"

# output sha1 checksum for hex file
sha1sum "${OutDir}/${TargetName}.hex"
```

所有可用的 shell 命令：

```shell
awk basename bash bunzip2 bzip2 bzip2recover 
cat chmod cksum cp crc32 curl date dd dirname dos2unix 
echo expr find gawk-3.1.7 gawk grep gzip head 
kill ln ls make-old make makeinfo md5sum mkdir mv 
openssl pwd rm rmdir sed sh sha1sum sleep tar test 
touch tr unzip wget xargs zip
```

示例：

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
