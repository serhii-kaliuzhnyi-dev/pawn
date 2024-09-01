import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: ['**/node_modules', '**/dist', '**/out', '**/.gitignore']
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ),
  {
    plugins: {
      simpleImportSort
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    rules: {
      'simpleImportSort/imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/semi': ['error', 'always'],
      'react/prop-types': 0
    }
  }
];
