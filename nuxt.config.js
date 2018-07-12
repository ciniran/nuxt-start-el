module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
    css:[
        {src:'element-ui/lib/theme-chalk/index.css'}
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
    ],
    plugins: [
        {src:'~plugins/element-ui', ssr: true},
        '~/plugins/axios',
        '~/plugins/auth.js'
    ],

    axios: {
        //统一后端请求地址
        baseURL:'http://api.localhost/v1'
    },
    auth: {
        // 登陆配置
        strategies: {
            //本地配置
            local: {
                endpoints: {
                    login: { url: '/auth/login', method: 'post', propertyName: 'token' },//返回数据中包含数据结构为data.token时才能成功
                    logout: { url: '/auth/logout', method: 'post' },
                    user: { url: '/auth/user', method: 'get', propertyName: 'user' }//返回数据中包含数据结构为respoandata.user时才能成功
                },
                // tokenRequired: true,
                 tokenType: 'Bearer',  //后端header Authorization名称
            }
        }
    },
    //路由之前加入权限检查中间件
    router: {
        middleware: ['auth']
    },
    /*
    ** Customize the progress bar color
    */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
      vendor: ['element-ui'],

  }
}
