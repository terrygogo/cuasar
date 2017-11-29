// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
require(`quasar/dist/quasar.ie`)
require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import Quasar from 'quasar'
import 'quasar-extras/fontawesome'
import router from './router'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.router = router
Vue.use(VueAxios, axios)
import VueFormGenerator from 'vue-form-generator'
Vue.use(VueFormGenerator)
// import 'chart.js'
// import 'hchs-vue-charts'
// Vue.use(window.VueCharts)
console.log(location.host)

Vue.use(VueAuth, {
  auth: {
    request: function(req, token) {
      this.options.http._setHeaders.call(this, req, {Authorization: 'JWT ' + token})
    },
    response: function(res) {
      // Get Token from response body
      return res.data.token //
    }
  },
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  // loginData: { url: 'http://192.168.1.15:3000/api/login', fetchUser: false },
  loginData: { url: 'http:' + '/api/login', fetchUser: false },
  authRedirect: {path: 'login'},
  refreshData: { enabled: false }
})
Vue.use(Quasar) // Install Quasar Framework

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}

import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'
import store from './store'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store: store,
    render: h => h(require('./App').default)
  })
})
// warnning for close event
// window.onbeforeunload = function(e) {
//  return 'Dialog text here.'
// }
