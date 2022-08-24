---
sidebar_position: 90
---

# 实用终端

在 eide 提供的终端中执行程序

## EIDE 终端

我们已经导出了一些 `变量，程序路径` 到 eide 终端上下文环境

您可以通过这个终端直接执行/访问这些 eide 内置的程序

打开一个 EIDE Terminal，使用如下 Shell 命令可以列出所有 `环境变量`：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="win32" label="Windows (Powershell)" default>
    命令：<code>ls env:</code>
  </TabItem>
  <TabItem value="win32-cmd" label="Windows (CMD)" default>
    命令：<code>set</code>
  </TabItem>
  <TabItem value="linux" label="Linux">
    命令：<code>env</code>
  </TabItem>
</Tabs>

![](/docs_img/eide_terminal.png)

## Msys 终端

**对于 Windows**，我们提供了一个内部的 **linux shell 环境**，通过该环境，您可以在 Windows 上执行 shell 脚本，程序

![](/docs_img/eide_msys_bash.png)

