module.exports = {
  env: {
    jest: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react', 'flowtype', 'jsx-a11y', 'import'],
  root: true,
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/forbid-prop-types': [0, { forbid: [] }],
    'import/extensions': [1, 'never', { svg: 'always' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    semi: ['error', 'never'],
  },
}
