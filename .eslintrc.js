module.exports = {
  root: true,
  env: {
    es2020: true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',

    'react-native/no-inline-styles': 'off',

    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-types': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
