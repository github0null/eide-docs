---
sidebar_position: 40
---

# Export Project

You can export your eide project.

![](/docs_img/prj_export_btns.png)

## Export To Project Template

Click `Export EIDE Project Template`, eide will compress your vscode workspace by `7z`.

Then a `.ept` template file will be generated in your project workspace. Now you can [create new project](../getting-started/new_prj) by this template file.

### Ignore Some Files

When compress the project workspace, eide will ignore some files, as follows:

```ini
.git
.git\*
<projectOutputFolder>
<projectOutputFolder>\
*.eide-template
*.log
```

You can also create a `.eideignore` file in your project workspace folder, and put your file ignore list in it.

![](/docs_img/export_ignore_file.png)

## Export To Keil Project

Click `Export Keil Project`, eide will export your eide project to a keil project.

When export operation done, a `uvproj/uvprojx` file will be generated to your worksapce folder.

![](/docs_img/export_keil_prj_file.png)

:::caution Keil v5 only
We only support to export Keil **v5** project.
:::
