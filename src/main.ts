import Vue from 'vue'
import * as VueRx from 'vue-rx'
import App from './App.vue'

Vue.config.productionTip = false

const vueRx: any = VueRx
Vue.use(vueRx.default)
// Vue.use(VueRx)

new Vue({
  render: h => h(App)
}).$mount('#app')
