// src/main/main.ts
import { app, BrowserWindow } from 'electron';
import { electronApp, optimizer } from '@electron-toolkit/utils';
import { createMainWindow } from './windows/mainWindow';
import { createAppMenu } from './menu/menu';
import { initializeDatabase } from './db';
import { seedDatabase } from './db/seed';
import { registerIpcHandlers } from './ipc';

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron');

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  // Initialize the database before creating the window
  initializeDatabase();
  seedDatabase();

  createMainWindow();
  createAppMenu();
  registerIpcHandlers();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
