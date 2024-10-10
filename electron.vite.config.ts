import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';

import pkg from './package.json';

const currentFolderPath = fileURLToPath(new URL('.', import.meta.url));

const srcFolderPath = path.resolve(currentFolderPath, 'src');

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    base: '',
    define: {
      APP_VERSION: `"${pkg.version}"`,
    },
    resolve: {
      alias: {
        pawn: srcFolderPath,
      },
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
    ],
  },
});
