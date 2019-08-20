// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import DefaultLayout from '~/layouts/Default.vue'
import 'vuetify/dist/vuetify.min.css'
import LinkedIn from "@/components/icons/LinkedIn";
import Bug from "@/components/icons/Bug"
import CircleSolid from "@/components/icons/CircleSolid"
import Github from "@/components/icons/Github"
import Laptop from "@/components/icons/Laptop"
import StarOutline from "@/components/icons/StarOutline"
import StarSolid from "@/components/icons/StarSolid"
import Twitter from "@/components/icons/Twitter"
import ChevronLeft from "@/components/icons/ChevronLeft"

export default function (Vue, { router, head, isClient }) {
  // Setup manifest for PWA
  head.link.push({
    rel: 'manifest',
    href: '/qa-schedule/manifest.json'
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
    icons: {
      'linkedin':{
        component: LinkedIn
      },
      'bug':{
        component: Bug
      },
      'circle-solid':{
        component: CircleSolid
      },
      'github':{
        component: Github
      },
      'laptop':{
        component: Laptop
      },
      'star-outline':{
        component: StarOutline
      },
      'star-solid':{
        component: StarSolid
      },
      'twitter':{
        component: Twitter
      },
      'linkedin':{
        component: LinkedIn
      },
      'chevron-left':{
        component: ChevronLeft
      }
    }
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
