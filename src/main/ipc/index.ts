import { ipcMain } from 'electron';

import registerFileHandlers from './file-handlers';
import registerTournamentHandlers from './tournament-handlers';

export const registerIpcHandlers = () => {
  ipcMain.on('ping', () => console.log('pong'));

  registerFileHandlers();
  registerTournamentHandlers();
};
