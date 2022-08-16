---
sidebar_position: 1
---

# Version Compatibility

Version Compatibility.

Version iterations are **backward compatible**.

But in order to reduce hidden operations and default behaviors in software, some meaningless features that will soon be deprecated. So you must manually adjust the project to adapt to the new version of the eide.

## Imcompatible Changes

### v3.8.3

- Remove **auto search, add**, `IncludePath`, `ObjectFiles` for Normal Source Folders.

  **New Usage:**

  You should to add `IncludePath`, `ObjectFiles` by [**Add IncludePath**](../modules/project_attr#include-directories) and [**Add Files**](../modules/project_resource#add-source-files) functions.

  **Interim Remedial Measures For Old Projects:**

  Add 2 plug-in settings to temporary enable above features, only used to compatible with old project:
  ```
  EIDE.SourceTree.AutoSearchIncludePath
  EIDE.SourceTree.AutoSearchObjFile
  ```

  :::caution Notice
  These 2 settings is only used to compatible with your existed old project.<br/>
  If you are creating a new project, please don't modify these settings.
  :::
