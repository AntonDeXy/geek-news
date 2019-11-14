const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withImages(withSass({
  webpack: config => {
    config.node = {
      fs: 'empty'
    }

    return config
  },
  devIndicators: {
    autoPrerender: false,
  },
})))