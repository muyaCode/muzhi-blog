// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // 更好的类型提示
  typescript: {
		shim: false
	},
  "~~": "/<rootDir>",
  "@@": "/<rootDir>",
  "~": "/<rootDir>",
  "@": "/<rootDir>",
  "assets": "/<rootDir>/assets",
  "public": "/<rootDir>/public",
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      ],
      // 不确定的设置，官方实验性
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        // { children: 'Javascript is required' }
      ]
    }
  },
  css: [
    // 直接加载Node.js模块(这里是Sass文件)。
    // 'bulma',
    // '@/assets/css/main.css',
    '@/assets/css/main.scss'
  ],
  router: {
    // extendRoutes(routes: { path: string; redirect: string }[]) {
    //   routes.push({
    //     path: '/',
    //     redirect: '/about',
    //   })
    // }
  }
})
