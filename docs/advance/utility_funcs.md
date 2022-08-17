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