---
sidebar_position: 2
---

# Project Structure

eide project folder structure ...

## Folder Structure

A base eide project folder structure is like:

![](/docs_img/prj_folder_preview.png)

There are some **necessary** files or folders in an eide project:

- `.eide`: This folder contains eide project informations, builder options config ...

- `.eide/eide.json`: This file is used to descript your project.

  **Don't Modify This File Manually ! Unless you know what you're doing !**

- `<workspase name>.code-workspace`: This file is a vscode workspace file.

  Vscode will save vscode plug-in settings in this file for this workspace.
  
  You can double click this file in file explorer to open eide project.

:::danger You can't delete
You can't delete these **necessary** files or folders.<br/>
Otherwise you will not be able to open the eide project.
:::

For other files or folders, you are free to modify them.

### Git Ignore

If you want to add a `.gitignore` file in your project folder, you can refer to the following template:

```gitignore
# dot files
/.vscode/launch.json
/.eide/log
/.eide.usr.ctx.json
/.settings

# project out
/build
/out
/bin
/obj

# eide template
*.ept
*.eide-template
```

## Good Practice

There are some suggestions can help you have a better experience on VSCode.

These items are not mandatory, but it is best to follow them.

- **Make Your Worksapce Folder Contains All Files**:

  Try not to have source files outside of your workspace, because `C++ IntelliSense`, `Code Completion` ... etc code editor feature need search files in your workspace. If you insist to place source files outside of workspace, these features may not work properly. 

- **Make Your Files/Folders Path Only Contains `ASCII` Characters**:

  Do not use non-ASCII encoding and special characters (like: `%, $, #, @, &, (, ) ...`) in the file path.

  Because:
  
  - In different encoding environments, these non-ASCII characters may appear garbled.

  - Some older tools or compilers support only ASCII.

  - These special characters (like: `%, $, #, @, &, (, ) ...`) will make some errors in shell commandlines. (because they are interpreted as part of the commandlines)
