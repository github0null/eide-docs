---
sidebar_position: 9
---

# Plug-in Settings

How to modify plug-in settings

## Modify Extension Settings

> EIDE is a standard VSCode extension, you can modify plug-in settings in vscode settings page.

If you have opened a eide project, there are **3 scope** for setting items, 

they are: `User`, `Workspace`, `Folder`

![](/docs_img/plug-in_settings.png)

- In **User** Scope:

  Any changes are specific to the **current user**

  If you want to set a global setting for eide, you should switch to `User` scope !

- In **Workspace** Scope:

  Any changes are specific to **current vscode workspace** (every eide project is a vscode workspace)

  So if you want to modify settings for *current eide project*, you should switch to `Workspace` scope or modify `xxx.code-workspace` file directly !
  
- In **Folder** Scope:

  Any changes are specific to **current root folder**

  *for a vscode workspace, this scope will not take effect*

The Scope Priority:

`Workspace > Folder > User`

