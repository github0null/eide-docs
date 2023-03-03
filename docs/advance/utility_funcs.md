---
sidebar_position: 60
---

# Utility Functions

Other utility functions.

## Disassembly Code

After build your project, you can use `Show Disassembly` menu button to check disassembly code for your c source file.

![](/docs_img/show_disasm.png)

:::danger Only for GCC/ARMCC
This function is only supported `GCC` or `ARMCC` compiler.
:::

## ELF Disassembly

The plug-in supports disassembly of the whole program.

Method 1:

  - Open [ELF/AXF Viewer](#elf-viewer)

  - And open the right-click menu, click `Show Disassembly`

    ![](/docs_img/utils_show_disasm_all.png)

Method 2:

  - Open VSCode explorer, and goto 'build' folder, find output file: xxx.elf (or xxx.axf), open the right-click menu, click `Show Disassembly`

    ![](/docs_img/utils_show_disasm_all_2.png)

:::danger Only for GCC/ARMCC
This function is only supported `GCC` or `ARMCC` compiler.
:::

## ELF Viewer

After build done, you can open `Output Files` virtual folder node to check your output products.

If your compiler output an elf format file, then you can click it to open a `ELF Viewer`, eide will dump some informations from this elf file and show in a webview page.

![](/docs_img/elf_viewer.png)

## Map View For Arm

We support visual view for `.map` file.

After build done, you can open `Output Files` virtual folder node to check your output products.

Click `*.map.view` file to open `Map View`

![](/docs_img/arm_map_view.png)

:::caution Only For Arm Project
This function is only for Arm Project.
:::