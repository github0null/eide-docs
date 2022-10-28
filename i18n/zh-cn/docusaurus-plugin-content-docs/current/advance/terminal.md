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

所有可用的命令：

- **可以被直接调用的命令（exe 格式）：**

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

- **必须使用 `bash -c` 执行的命令**

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
