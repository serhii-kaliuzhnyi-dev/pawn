import { electronAPI } from '@electron-toolkit/preload';
import { contextBridge, ipcRenderer } from 'electron';

import { Tournament } from '../dto/types';

type OpenFileDialogResult = string | null;

// Custom APIs for renderer
export const api = {
  openFileDialog: (): Promise<OpenFileDialogResult> => ipcRenderer.invoke('dialog:openFile'),
  getTournaments: (): Promise<Tournament[]> => ipcRenderer.invoke('get-tournaments'),
  hello: 'world'
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
