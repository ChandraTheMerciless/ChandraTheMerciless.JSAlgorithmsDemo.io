import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Apply recommended rules to all JavaScript files
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Support JSX in JavaScript files
        },
      },
    },
    plugins: {
      prettier: pluginPrettier, // Prettier integration
    },
    rules: {
      ...js.configs.recommended.rules, // Apply recommended rules
      'prettier/prettier': ['error'], // Enforce Prettier formatting
    },
  },
  // Apply TypeScript-specific rules to TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: pluginPrettier,
    },
    rules: {
      ...tseslint.configs.recommended.rules, // Recommended TypeScript rules
      'prettier/prettier': ['error'],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'no-eval': 'warn',
    },
  },
  // Apply React-specific rules to JavaScript and TypeScript files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginReact.configs.recommended.rules, // Recommended React rules
      'prettier/prettier': ['error'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // Apply Prettier configuration to all supported files
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      ...prettierConfig.rules,
    },
  },
];
