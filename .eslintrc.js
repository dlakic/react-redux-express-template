module.exports = {
  'env': {
    'browser': true,
    'node': true
  },
  'extends': 'airbnb',
  'rules': {
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true, }],
  }
};
