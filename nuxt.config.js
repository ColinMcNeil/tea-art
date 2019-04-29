module.exports = {
  router: {
    base: process.env.DEPLOY_ENV === "GH_PAGES" ? "/greenwashing/" : "/"
  },
  build: {
    extractCSS: true
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'A greenwashing demo site.' }
    ]
  }

};
