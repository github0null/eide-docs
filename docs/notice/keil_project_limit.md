---
sidebar_position: 1
---

# Importer Limitations

Some limitations for project importer.

## Keil Projects

Some limitations of project-import feature for **Keil Project**

- **Keil Version Limit**:

  *We only support Keil **v5** !!!*

- **RTE Components**:

  Because the description of the MDK's RTE component in the UVPROJX project file is more complicated, Eide does not support the introduction of these RTE components for the time being.

  Therefore, if your project has RTE components, it is recommended not to import them (except those with CMSIS components only). 
  
  Those with RTE components have the following green icons:

  ![](https://discuss.em-ide.com/assets/files/2022-05-11/1652277659-209867-image.png)

  :::caution Force Import
  If you force import a keil project which with RTE components, you need to add missing `source files`, `include path` manually !
  :::

