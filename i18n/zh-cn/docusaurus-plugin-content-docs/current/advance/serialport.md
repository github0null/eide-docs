---
sidebar_position: 70
---

# 串口监视器

从串口发送和接收文本

## 打开串口

状态栏有一些按钮用于 `串口功能`

你可以 `打开串口`，`选择串口名称`，`选择波特率`

![](/docs_img/serialport_btns.png)

点击 `打开串口` 按钮，eide 将执行一个终端命令来打开一个交互式串行端口程序

![](/docs_img/serialport_opened.png)

现在程序将开始从端口接收文本，你可以在终端发送文本

## 配置串口监视器

对于 `串口监视器` 有一些 VSCode 设置项：

- **端口设置**

  - `EIDE.SerialPortMonitor.DefaultPort`
  - `EIDE.SerialPortMonitor.BaudRate`
  - `EIDE.SerialPortMonitor.DataBits`
  - `EIDE.SerialPortMonitor.Parity`
  - `EIDE.SerialPortMonitor.StopBits`
  - `EIDE.SerialPortMonitor.useUnixLF`

- **显示设置**

  - `EIDE.SerialPortMonitor.ShowStatusBar`

你可以在 `.code-workspace` 中修改这些设置
