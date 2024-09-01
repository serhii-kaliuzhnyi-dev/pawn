import { dialog, Menu, MenuItemConstructorOptions, shell } from 'electron';

export function createAppMenu() {
  const menuTemplate: MenuItemConstructorOptions[] = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New Tournament',
          click: () => {
            // Add your custom logic for creating a new tournament
          }
        },
        {
          label: 'Open',
          click: async (_, browserWindow) => {
            if (browserWindow) {
              const result = await dialog.showOpenDialog(browserWindow, {
                properties: ['openFile'],
                filters: [{ name: 'Pawn tournaments', extensions: ['pawn'] }]
              });
              if (!result.canceled && result.filePaths.length > 0) {
                const filePath = result.filePaths[0];
                console.log('filePath', filePath);
                // Handle the opened file path
              }
            }
          }
        },
        { type: 'separator' },
        { label: 'Exit', role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', role: 'undo' },
        { label: 'Redo', role: 'redo' },
        { type: 'separator' },
        { label: 'Cut', role: 'cut' },
        { label: 'Copy', role: 'copy' },
        { label: 'Paste', role: 'paste' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { label: 'Reload', role: 'reload' },
        { label: 'Toggle Developer Tools', role: 'toggleDevTools' }, // Correct role name
        { type: 'separator' },
        { label: 'Reset Zoom', role: 'resetZoom' }, // Correct role name
        { label: 'Zoom In', role: 'zoomIn' }, // Correct role name
        { label: 'Zoom Out', role: 'zoomOut' } // Correct role name
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Learn More',
          click: () => {
            shell.openExternal('https://your.documentation.link');
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}
