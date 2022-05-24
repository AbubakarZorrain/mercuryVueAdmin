import Vue from 'vue'
import Router from 'vue-router'
import jobPage from '@/components/job'
import projectPage from '@/components/projectsPage'
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { component } from 'vue/types/umd'
Vue.use(Router)
/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default new Router({
  /* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

  routes: [
    {
      path: '/',
      name: 'home',
      component: jobPage
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: jobPage
    },
    {
      path: '/projects',
      name: 'projects',
      component: projectPage
    }
  ]
})
