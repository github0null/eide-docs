---
sidebar_position: 40
---

# 导出项目

你可以导出你的 eide 项目

![](/docs_img/prj_export_btns.png)

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

![](/docs_img/export_ignore_file.png)

### 自动运行的钩子

我们支持在新项目被**第一次打开**时自动执行一些脚本，有两种脚本 `pre-install.sh` 和 `post-install.sh`，分别对应 `加载项目前`，`项目完成加载后` 阶段

#### 示例用法

如果你想在模板项目中放入一些文档，用户手册，数据表文件，但是这些文件太大了，你可以把这些文件放在服务器或网盘上，然后在项目文件夹的 `.eide` 文件夹下新建一个 `post-install.sh` 文件，就像下面这样：

```bash title=".eide/post-install.sh"
mkdir docs

cd docs

echo "start download docs ..."

wget "https://my.web.disk.com/my_files/xxx-data-sheet.pdf"

wget "https://my.web.disk.com/my_files/xxx-user-manual.pdf"

cd ..

mkdir tools

cd tools

echo "start download tools ..."

wget "https://my.web.disk.com/my_files/xxx-tools.zip"
```

然后将该项目导出为项目模板，使用该模板创建一个新项目，当你打开新项目后，eide 将在项目完成加载后自动执行 `post-install.sh` 脚本中的流程，下载所需的文档等资源

:::caution 脚本位置
你必须将脚本放置在 `.eide` 文件夹中
:::

## 导出 Keil 项目

点击 `导出 Keil 项目`，eide 将以 Keil 项目格式（uvprojx）导出你的 eide 项目

当操作完成后，一个 `uvproj/uvprojx` 文件将被生成到你的工作区

![](/docs_img/export_keil_prj_file.png)

:::caution 仅 Keil v5
我们仅支持导出 Keil v5 项目
:::
