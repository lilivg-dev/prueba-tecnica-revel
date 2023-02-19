module.exports = function svgLoader(config) {
  config.module.rules.push({
    test: /\.svg$/,
    loader: '@svgr/webpack',
    options: {
      svgoConfig: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeAttrs',
            params: {
              attrs: '(fill|stroke)',
            },
          },
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [
                { fill: 'currentColor' },
                { 'aria-hidden': 'true' },
                { focusable: 'false' },
              ],
            },
          },
        ],
      },
    },
  });
  return config;
};
