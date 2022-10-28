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

