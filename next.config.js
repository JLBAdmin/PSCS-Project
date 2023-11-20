/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.']
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // swcMinify: true,
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  images: {
    domains: ['pacane.com', 'localhost']
  },
  async rewrites() {
    return [
      // {
      //   source: '/api/:path*',
      //   destination: 'http://localhost:3146/api/:path*'
      // },
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*'
      },
      {
        source: '/scss/:path*',
        destination: 'http://trrdev.linsmartcane.com:8886/mcss_api/:path*'
      }
    ];
  }
  // async redirects() {
  //   return [
  //     {
  //       source: '/costs/1',
  //       destination: 'http://localhost:8080/costs',
  //       permanent: true
  //     }
  //   ];
  // }
});

// eslint-disable-next-line import/no-unresolved
const webpack = require('webpack');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    );
    return config;
  }
};
