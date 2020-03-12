import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'
import router from './routes'
import store from './store'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
// import 'fortawesome/fontawesome-free/css/all.min.css

Vue.use(VueFire)

Vue.config.productionTip = false;


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
