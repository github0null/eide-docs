---
sidebar_position: 90
---

# Utility Terminals

Execute program in eide terminal.

## EIDE Terminal

We have exported some `Variables, Program Paths` to eide terminal context environment.

You can execute/access directly these eide internal programs by this terminal.

Open an eide terminal, use shell command to list all internal eide `System Environment Variables`:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="win32" label="Windows (Powershell)" default>
    Command: <code>ls env:</code>
  </TabItem>
  <TabItem value="win32-cmd" label="Windows (CMD)" default>
    Command: <code>set</code>
  </TabItem>
  <TabItem value="linux" label="Linux">
    Command: <code>env</code>
  </TabItem>
</Tabs>

![](/docs_img/eide_terminal.png)

## Msys Terminal

**For Windows**, We provide an internal **linux shell environment** for you to execute shell scripts, programs.

![](/docs_img/eide_msys_bash.png)

