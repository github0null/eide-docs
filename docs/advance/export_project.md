---
sidebar_position: 40
---

# Export Project

You can export your eide project.

![](/docs_img/prj_export_btns.png)

## Export To Project Template

Click `Export As ...` -> `EIDE Project Template`, eide will compress your vscode workspace by `7z`.

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

### Auto-Run Hooks

We support execute `pre-install.sh` and `post-install.sh` shell script **before**/**after** a new project has been opened.

#### Example Usage

If your want to put some documents, user-manual, data-sheet files in your template projects, but these files is too big, 

You can put these files on server or network disk, and create a `post-install.sh` in `.eide` folder, like this:

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

And then export this project to an eide template, you can create a new project by this project template file, and when you **first open** the new project, eide will auto execute this `post-install.sh` file in your project folder.

:::caution script location
You must place the script in the `.eide` folder
:::

## Export To Keil Project

Click `Export As ...` -> `Keil Project`, eide will export your eide project to a keil project.

When export operation done, a `uvproj/uvprojx` file will be generated to your worksapce folder.

![](/docs_img/export_keil_prj_file.png)

:::caution Keil v5 only
We only support to export Keil **v5** project.
:::

## Export GNU Makefile

Click `Export As ...` -> `GNU Makefile`, eide will export a Makefile into your workspace folder.

![](/docs_img/export_makefile.png)

![](/docs_img/export_makefile2.png)

Then you can build your project by `make` with following command:

```shell
make prebuild
make all -j4
```

This feature makes it easier to automate builds for your projects.

:::caution Hard-coded Format
The format in this Makefile: the path and file name of the rule are hard coded without many variables, <br/>
so when you change the compiler options, or add some new source files, you need to re-export the Makefile
:::

:::caution Fail to make
If your project contains [user tasks](https://em-ide.com/en/docs/modules/builder/#user-task-commands) that you have customized,<br/>
You need to check that your custom task can be executed by **make**, otherwise the makefile will fail at the `prebuild` or `postbuild` rules.
:::
