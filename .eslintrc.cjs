const { resolve } = require('node:path')

const project = resolve(__dirname, 'tsconfig.json')

const config = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-default-export': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-sort-props': 'off',
  },
}

module.exports = config
