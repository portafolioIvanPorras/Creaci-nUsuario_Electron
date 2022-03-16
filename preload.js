const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exponseInMainWorld(
  'comunicacion', 

  {
    registroValido: (datos) => ipcRenderer.send('registroValido', datos),
  }
);
