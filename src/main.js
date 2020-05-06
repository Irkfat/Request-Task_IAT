import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import vSelect from 'vue-select'
import Datepicker from "vuejs-datepicker";
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import AudioRecorder from 'vue-audio-recorder'

Vue.component('v-select', vSelect)
Vue.config.productionTip = false
Vue.component('datepicker',Datepicker)
Vue.use (BootstrapVue)
Vue.use (IconsPlugin)
Vue.use(AudioRecorder)
import 'vue-select/dist/vue-select.css'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
