import Vue from 'vue'
import helper from '@/plugins/helper'
import App from '@/App.vue'
import '@/plugins/vuetify'
import '@/components'
import './registerServiceWorker'
import store from './store'

Vue.config.productionTip = true
Vue.config.devtools      = true
Vue.config.debug         = true
Vue.config.silent        = true
Vue.use(helper)
new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
