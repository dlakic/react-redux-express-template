module.exports = (api) => {
  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9',
            ],
          },
          useBuiltIns: 'entry',
        },
      ],
      '@babel/preset-react',
    ],
  };

  if (!api.env('production')) {
    config.plugins = [
      'react-hot-loader/babel',
    ];
  }

  return config;
};
