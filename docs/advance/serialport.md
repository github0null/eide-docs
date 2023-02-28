---
sidebar_position: 70
---

# Serial Port

Since `v3.11.0`, built-in serial-monitor will be removed from plug-in.

Now, please use: [ms-vscode.vscode-serial-monitor](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-serial-monitor)

## Open Serial Port

~~There are some buttons in status bar for `Serialport` function.~~

~~You can `Open Serial Port`, `Select Serial Port Name`, `Select Baud Rate`~~

~~![](/docs_img/serialport_btns.png)~~

~~Click `Open Serial` button, eide will post a shell command to open an **interactive** serial port program.~~

~~![](/docs_img/serialport_opened.png)~~

~~Now the program will start to receive text from port, and you can `send` text in terminal. ~~

## Configure Serial Port

~~There are some VSCode settings for `Serial Port` functions:~~

~~- **Port Settings**~~

~~  - `EIDE.SerialPortMonitor.DefaultPort`~~
~~  - `EIDE.SerialPortMonitor.BaudRate`~~
~~  - `EIDE.SerialPortMonitor.DataBits`~~
~~  - `EIDE.SerialPortMonitor.Parity`~~
~~  - `EIDE.SerialPortMonitor.StopBits`~~
~~  - `EIDE.SerialPortMonitor.useUnixLF`~~

~~- **Display Settings**~~

~~  - `EIDE.SerialPortMonitor.ShowStatusBar`~~

~~You can modify these settings in `.code-workspace` file.~~
