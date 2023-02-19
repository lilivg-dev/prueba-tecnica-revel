const svgLoader = require('../scripts/webpack/svgLoader.js');

// Override default svg loader behaviour
function removeSvgLoader(config) {
  const fileLoaderRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.svg'),
  );
  fileLoaderRule.exclude = /\.svg$/;
}

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config) => {
    removeSvgLoader(config);
    svgLoader(config);

    return config;
  },
};
