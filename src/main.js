import Vue from 'vue'
import App from './App.vue'

import vueMoment from 'vue-moment';

Vue.use(vueMoment);

new Vue({
  el: '#app',
  render: h => h(App)
})
