module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react', 'jest', 'react-hooks'
  ],
  'rules': {
    'indent': [
        'error',
        2
    ],
    'linebreak-style': [
        'error',
        'unix'
    ],
    'quotes': [
        'error',
        'single'
    ],
    'semi': [
        'error',
        'never'
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
        'error', 'always'
    ],
    'arrow-spacing': [
        'error', { 'before': true, 'after': true }
    ],
    'no-console': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'jsx-a11y/no-static-element-interactions': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'no-case-declarations': 0,
    'no-param-reassign': [2, { 'props': false }],
    'no-shadow': 0,
  }
}
