import Vue from 'vue'
import App from './App.vue'
import "./assets/main.css"
import "./App.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
