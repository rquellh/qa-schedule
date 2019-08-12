// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import DefaultLayout from '~/layouts/Default.vue'
import 'vuetify/dist/vuetify.min.css'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css'
  })

  //Setup Vuetify
  Vue.use(Vuetify, {
    theme: {
      primary: '#1b51aa',
      secondary: '#df2e30',
      accent: '#6aaece'
    },
    options: {
      customProperties: true
    },
    iconfont: 'fa4'
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
