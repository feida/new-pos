process.env.NODE_ENV = "exe";
const config = require('./service/config');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, ipcMain, Menu} = require('electron');


let template = [{
    label: '查看',
    submenu: [{
        label: '重载',
        accelerator: 'CmdOrCtrl+R',
        click: function (item, focusedWindow) {
            if (focusedWindow) {
                // 重载之后, 刷新并关闭所有的次要窗体
                if (focusedWindow.id === 1) {
                    BrowserWindow.getAllWindows().forEach(function (win) {
                        if (win.id > 1) {
                            win.close()
                        }
                    })
                }
                focusedWindow.reload()
            }
        }
    }, {
        label: '切换全屏',
        accelerator: (function () {
            if (process.platform === 'darwin') {
                return 'Ctrl+Command+F'
            } else {
                return 'F11'
            }
        })(),
        click: function (item, focusedWindow) {
            if (focusedWindow) {
                focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
            }
        }
    }, {
        label: '切换开发者工具',
        accelerator: (function () {
            if (process.platform === 'darwin') {
                return 'Alt+Command+I'
            } else {
                return 'Ctrl+Shift+I'
            }
        })(),
        click: function (item, focusedWindow) {
            if (focusedWindow) {
                focusedWindow.toggleDevTools()
            }
        }
    }, {
        type: 'separator'
    }]
}, {
    label: '窗口',
    role: 'window',
    submenu: [{
        label: '最小化',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
    }, {
        label: '关闭',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
    }, {
        type: 'separator'
    }, {
        label: '重新打开窗口',
        accelerator: 'CmdOrCtrl+Shift+T',
        enabled: false,
        key: 'reopenMenuItem',
        click: function () {
            app.emit('activate')
        }
    }]
}]



function addUpdateMenuItems (items, position) {
    if (process.mas) return

    const version = app.getVersion()
    let updateItems = [{
        label: `Version ${version}`,
        enabled: false
    }, {
        label: '正在检查更新',
        enabled: false,
        key: 'checkingForUpdate'
    }, {
        label: '检查更新',
        visible: false,
        key: 'checkForUpdate',
        click: function () {
            require('electron').autoUpdater.checkForUpdates()
        }
    }, {
        label: '重启并安装更新',
        enabled: true,
        visible: false,
        key: 'restartToUpdate',
        click: function () {
            require('electron').autoUpdater.quitAndInstall()
        }
    }]

    items.splice.apply(items, [position, 0].concat(updateItems))
}

function findReopenMenuItem () {
    const menu = Menu.getApplicationMenu()
    if (!menu) return

    let reopenMenuItem
    menu.items.forEach(function (item) {
        if (item.submenu) {
            item.submenu.items.forEach(function (item) {
                if (item.key === 'reopenMenuItem') {
                    reopenMenuItem = item
                }
            })
        }
    })
    return reopenMenuItem
}

if (process.platform === 'darwin') {
    const name = app.getName()
    template.unshift({
        label: name,
        submenu: [{
            label: `关于 ${name}`,
            role: 'about'
        }, {
            type: 'separator'
        }, {
            label: '服务',
            role: 'services',
            submenu: []
        }, {
            type: 'separator'
        }, {
            label: `隐藏 ${name}`,
            accelerator: 'Command+H',
            role: 'hide'
        }, {
            label: '隐藏其它',
            accelerator: 'Command+Alt+H',
            role: 'hideothers'
        }, {
            label: '显示全部',
            role: 'unhide'
        }, {
            type: 'separator'
        }, {
            label: '退出',
            accelerator: 'Command+Q',
            click: function () {
                app.quit()
            }
        }]
    })

    // // 窗口菜单.
    // template[3].submenu.push({
    //     type: 'separator'
    // }, {
    //     label: '前置所有',
    //     role: 'front'
    // })

    addUpdateMenuItems(template[0].submenu, 1)
}



let win = null;

function createWindow() {
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    win = new BrowserWindow({width: 1000, height: 800,webPreferences: {
            nodeIntegration: true
        }});
    // const server = require('./bin/www');
    // win.loadURL('http://127.0.0.1:3002');
    if (config.api_url.key) {
        const server = require('./bin/www');
        win.loadURL('http://127.0.0.1:3002');
    } else {
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }

    win.flashFrame(true);
    win = null;

    ipcMain.on('restart', () => {
        app.quit();
        app.relaunch({args: process.argv.slice(1).concat(['--relaunch'])});
        app.exit(0)
    })
}


const shouldQuit = app.makeSingleInstance(
    (commandLine, workingDirectory) => {
        if (win) {

            if (win.isMinimized()){

                win.restore();

            };

            win.focus();
        };

    });
if (shouldQuit) {
    app.quit();
    return;//没有这句话，会报错！
};

app.commandLine.appendSwitch("--disable-http-cache");

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    let reopenMenuItem = findReopenMenuItem()
    if (reopenMenuItem) reopenMenuItem.enabled = true
    if (process.platform !== 'darwin') {
        let exec = require('child_process').exec;
        exec('taskkill /f /im app*',(err, stdout, stderr)=>{});
        app.quit();
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

app.on('browser-window-created', function () {
    let reopenMenuItem = findReopenMenuItem()
    if (reopenMenuItem) reopenMenuItem.enabled = false
})
