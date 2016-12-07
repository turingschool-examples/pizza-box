import { app, BrowserWindow } from 'electron';
import database from './database';

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    minWidth: 300,
    minHeight: 400,
    width: 400,
    height: 600
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

global.database = database;
