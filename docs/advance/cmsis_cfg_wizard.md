---
sidebar_position: 50
---

# CMSIS Header Wizard

We support to open [cmsis config wizard](https://open-cmsis-pack.github.io/Open-CMSIS-Pack-Spec/main/html/configWizard.html) for header files.

## Introduce

[CMSIS Configuration Annotations](https://open-cmsis-pack.github.io/Open-CMSIS-Pack-Spec/main/html/configWizard.html) is an annotation format for describing macro definitions structurally in c headers.

After parsed by specific tools, the GUI configuration wizard can be generated to guide users to view and modify the configuration in the header file

![](/docs_img/cmsis_wizard_keil.png)

## Open Wizard View

Open a `c header` file which with a correct `CMSIS Configuration Annotations` format.

![](/docs_img/cmsis_cfg_wizard_btn.png)

Then a webview will be opened at a new tab.

![](/docs_img/cmsis_cfg_wizard_preview.png)

Now you can start to modify header file configurations.

:::caution Notice
This function will not work and not popup any notifications if your header has an incorrect `CMSIS Configuration Annotations` format.
:::

## Syntax Implement

We refer to the implementation in Keil, so we are not full support all syntax.

**There are unsupported syntaxs:**

1. Array Type:
   
   ![](/docs_img/no_imp_cmsis_syntaxs/array.png)

2. The modifiers with `..` 

   ![](/docs_img/no_imp_cmsis_syntaxs/modifier.png)

3. Digital formatting display function

   ![](/docs_img/no_imp_cmsis_syntaxs/format.png)
