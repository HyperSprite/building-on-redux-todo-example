module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: [
    'react',
    'flowtype',
  ],
  "extends": [
    'airbnb',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
  ],
  "rules": {
    "arrow-body-style": ["error", "as-needed"],
  },
}
