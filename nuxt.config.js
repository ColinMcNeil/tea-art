module.exports = {
  router: {
    base: process.env.DEPLOY_ENV === "GH_PAGES" ? "/tea-art/" : "/"
  },
  build: {
    extractCSS: true
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A greenwashing demo site.' }
    ]
  }

};
