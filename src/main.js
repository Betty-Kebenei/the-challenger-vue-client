import Vue from 'vue'
import App from './App.vue'

import vueMoment from 'vue-moment';
import VueSnackbar from 'vue-snack';

Vue.use(vueMoment);
Vue.use(VueSnackbar, {});

new Vue({
  el: '#app',
  render: h => h(App)
})
