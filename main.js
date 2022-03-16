const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,

    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js'),
    },
  });
  win.loadFile('index.html');
};

ipcMain.on('registroValido',(event, args) => {
  console.log(args);
});

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
});
