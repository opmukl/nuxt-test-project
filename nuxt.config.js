const webpack = require('webpack');

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      // { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: 'assets/scss/style.scss', lang: 'scss' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/etc'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-user-agent'
  ],
  styleResources: {
    // function, variables, mixin 만
    scss: [
      '@/assets/scss/base/variables.scss',
      '@/assets/scss/mixin/background.scss'
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery', // jquery alias
        _: 'lodash'
        // ...etc.
      })
    ]
    // vendor: ['jquery'], // Module이 여러 vue file에 중복적으로 추가되는 작업 방지
  }
};
