import { ipcMain, dialog } from 'electron';

const registerFileHandlers = () => {
  ipcMain.handle('dialog:openFile', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [{ name: 'Pawn tournaments', extensions: ['pawn'] }]
    });

    return result.canceled ? null : result.filePaths[0];
  });
};

export default registerFileHandlers;