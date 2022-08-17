---
sidebar_position: 20
---

# Create Project

Create a new eide project.

There are many ways to create a new project.

![](/docs_img/create_prj_sel.png)

|Type|Description|
|:----|:----|
|Empty Project|Create an empty project|
|Internal Template|Use built-in project template to create a new project|
|Local Template|Create a new project by local project template file(*.ept)|
|From Remote Repository|Download project template from remote [git repository](https://github.com/github0null/eide-templates) and create new project|

## Empty Project

In this section, we will help you to create an empty cortex-m project.

### Create

- Click `New Project` -> `Empty Project`, a window will be pop-up, you need choose a project type.

  ![](/docs_img/new_prj_typ.png)

- In this tutorial we select `cortex-m`, then we need input a project name.

  ![](/docs_img/new_prj_name.png)

- Then we need select the project location.
  
  ![](/docs_img/new_prj_loc_sel.png)

- And then, the new project will be create, and eide will pop-up a notification.

  Switch workspace, the new project will be load.

  ![](/docs_img/new_prj_preview.png)

Now, an empty project has been created.

:::tip Move eide to second side bar
You can drag the eide icon to the right sidebar on vscode.<br/>
This makes the layout of the view more compact.<br/>
Reference: https://code.visualstudio.com/updates/v1_64#_new-side-panel
:::

### Configure Project

We need configure compiler before build.

Default compiler is `gcc`, you can switch compiler for cortex-m project, we support `gcc/armcc/armclang`.

![](/docs_img/new_prj_cc_cfg.png)

|Field Name|Description|
|:--|:--|
|CPU Type|Processor Type, like: `cortex-m0`, `cortex-m3`, `cortex-m4`|
|Linker Script File Path|gcc linker script (`.lds/.ld`)|
|Builder Options|more advance compiler options|

At least we need configure `CPU Type` and `Linker Script File Path`.

More [builder configurations](../modules/builder)

### Add Source Files

Now we can add some source file to project.

- Move to `Project Resource` and open context menu by right-click.

  ![](/docs_img/new_prj_add_srcs.png)

- Click `Add File` to add some source files.

  For this demo: we copied 2 files from other projects

Ok, all sources files have been added to project, like this.

If there are some c header files, we need to add [IncludePath](../modules/project_attr)

![](/docs_img/new_prj_add_src_preview.png)

### Build Project

All ready, now we only need to click the `Build` button to start compiling.

A builder task will launch, and the log will be output to `Output Panel`.

![](/docs_img/new_prj_build.png)
