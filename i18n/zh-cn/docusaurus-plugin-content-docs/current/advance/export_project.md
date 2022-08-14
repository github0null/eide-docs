---
sidebar_position: 40
---

# 导出项目

你可以导出你的 eide 项目

![](/img/prj_export_btns.png)

## 导出项目模板

点击 `导出 EIDE 项目模板`，eide 将使用 7z 压缩你的 VSCode 工作区并保存为一个 `.ept` 文件

现在你可以通过这个模板文件 [新建项目](../getting-started/new_prj)

### 忽略一些文件

当压缩项目工作空间时，eide 将忽略一些文件，如下所示：

```ini
.git
.git\*
<projectOutputFolder>
<projectOutputFolder>\
*.eide-template
*.log
```

你也可以创建一个 `.eideignore` 文件在您的项目工作空间文件夹中，并将文件忽略列表放在其中

![](/img/export_ignore_file.png)

## 导出 Keil 项目

点击 `导出 Keil 项目`，eide 将以 Keil 项目格式（uvprojx）导出你的 eide 项目

当操作完成后，一个 `uvproj/uvprojx` 文件将被生成到你的工作区

![](/img/export_keil_prj_file.png)

:::caution 仅 Keil v5
我们仅支持导出 Keil v5 项目
:::
