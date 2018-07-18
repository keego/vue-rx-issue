import Vue from 'vue'
import * as VueRx from 'vue-rx'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRx)

new Vue({
  render: h => h(App)
}).$mount('#app')
