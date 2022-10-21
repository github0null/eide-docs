---
sidebar_position: 30
---

# Import Project

Import an existed other ide's project from disk and create a new eide project.

Click `Import Project` item at `OPERATIONS` view.

A quick-pick window will be pop-up, we can select project type.

Now we support to import `Keil` and `Eclipse` project.

![](/docs_img/imp_prj_sel.png)

:::caution For Project Import
Although the plug-in has some "import xxx project" functionality, this does not mean that the plug-in must be used with the xxx development environment.<br/>
Instead, the import function extracts the information about the target project and creates an eide type project from it. After the import is complete, the eide project will be disconnected from the old project.
:::

## Keil Project

:::danger Keil project limit
This import function is not 100% suitable for any Keil project.<br/>
Please check the limitations of this feature at [**keil project limit**](../notice/keil_project_limit#keil-projects)
:::

:::caution Setup keil location
Before start, you need configure keil toolchain location for eide.<br/>
Reference to [**Setup**](setup#configure-toolchains) Section.
:::

### Import

Open `OPERATIONS` bar, Click `Import Project` to start importer.

Then you need select a `*.uvproj/*.uvprojx` file, and click `Import`.

![](/docs_img/imp_prj_sel_uvfile.png)

A propmt message will pop-up.

> Make eide project coexist with the Keil project in the same directory ? 
> If you choose "No", you need to specify a folder to store the eide project !

If you want `make eide project coexist with the Keil project in the same directory`, please select `Yes` !

![](/docs_img/imp_prj_compate_hint.png)

If no error, a message will pop-up. Then you need switch workspace.

![](/docs_img/imp_prj_ok.png)

### Configure

We need to configure the project because eide does not import the compiler settings for the Keil project.

- **Set RAM/ROM Layout**: configure mcu ram/rom `base addr`, `size`

  First, set `Use Custom Linker Script File` to `false`.

  ![](/docs_img/imp_keil_mem_layout.png)
  
  Then, click `modify` button on `RAM And ROM Layout` item to open `Memory Layout Editor`.

  Now, you need open keil project and copy `ram/rom layout data` to `eide memory layout editor`, and save.

  ![](/docs_img/imp_keil_mem_layout_2.png)

- **Set Compiler Options**: Copy keil `C/C++, Asm, Linker Options` to eide

  Open `Keil Project Options` -> `C/C++`, **copy** keil options to eide `Builder Options View`

  ![](/docs_img/keil_mdk_cpp_opt.png)

  ![](/docs_img/eide_builer_options.png)

  Copy other keil `Misc-Controls` to eide `Other C Compiler Options`

  ![](/docs_img/imp_prj_cpy_keil_opts.png)

  **Repeat the above steps for `Asm, Linker` options**.

  :::tip Not found Options
  Most of the params are the same, if you can't find some option, you can enter <br/>
  the compiler command-line arguments directly in `Other C Compiler Options` or `Other C++ Compiler Options` box.
  :::

- **Check `IncludePath, Macros`**: 

  Check whether the `IncludePath, Macros` of the imported eide project is consistent with that of the original Keil project. 
  
  If there are any missing or incorrect items, manually complete them.

  ![](/docs_img/eide_prj_attr.png)

### Build

After completing the above steps, you can start compiling your project.

If there are some compilation errors, please rectify the fault according to the error message.

---

## Eclipse Project

### Import

- Click `Import Project` and select the `Eclipse` type.

  ![](https://discuss.em-ide.com/assets/files/2022-07-17/1658067425-796397-image.png)

- Select the `.cproject` file for your Eclipse project and click `Import`.

  ![](https://discuss.em-ide.com/assets/files/2022-07-17/1658065407-902585-image.png)

  Switch workspace after import completed.

  ![](https://discuss.em-ide.com/assets/files/2022-07-17/1658065572-456315-image.png)

### Configure 

- **Handle incompatible parameters**:

  Due to the design differences between Eclipse CDT and EIDE, EIDE is temporarily not fully compatible with some project properties and build Settings in Eclipse projects. 
  
  After the import is completed, a `*.warning.txt` file will be generated, which records all the incompatible Eclipse project properties. 
  
  You need to modify the EIDE project `builder options` of according to the meaning of these properties 'name' and 'value' until it can be compiled properly.

  ![](https://discuss.em-ide.com/assets/files/2022-07-17/1658065778-746145-image.png)

### Build

After completing the above steps, you can start compiling your project.

If there are some compilation errors, please rectify the fault according to the error message.
