const withImages = require('next-images');

const svgLoader = require('./scripts/webpack/svgLoader.js');

module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png'],
  webpack(config) {
    svgLoader(config, '/_next');
    return config;
  },
  images: {
    disableStaticImages: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
