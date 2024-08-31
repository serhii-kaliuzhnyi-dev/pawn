import { ipcMain } from 'electron';
import db from '../db';

const registerTournamentHandlers = () => {
  ipcMain.handle('get-tournaments', () => {
    const tournaments = db.prepare('SELECT * FROM tournaments').all();
    return tournaments;
  });
};

export default registerTournamentHandlers;