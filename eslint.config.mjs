import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactNative from 'eslint-plugin-react-native';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// Reference to migrate ESLint v8 to v9: https://medium.com/ekino-france/migrate-to-eslint-9-x-29727f790249

export default [
  {
    ignores: ['**/node_modules/'],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended'
    )
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      'react-native': reactNative,
      prettier,
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-trailing-spaces': [
        'error',
        {
          skipBlankLines: true,
        },
      ],

      'eol-last': ['error', 'always'],

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx'],
        },
      ],

      'no-use-before-define': 'off',

      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          variables: false,
        },
      ],

      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',

      'react/prop-types': [
        'error',
        {
          ignore: ['navigation', 'navigation.navigate'],
        },
      ],

      'max-len': [
        'error',
        {
          code: 100,
          ignoreComments: true,
        },
      ],

      'react/function-component-definition': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-array-index-key': 'off',
      'no-plusplus': 'off',
      'import/no-extraneous-dependencies': 0,
      'global-require': 0,
      'react/no-unescaped-entities': 0,
      'no-nested-ternary': 0,
      'no-console': 'error',
      'no-undef': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
