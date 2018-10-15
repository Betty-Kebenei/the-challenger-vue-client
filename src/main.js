import Vue from 'vue';
import App from './App.vue';
import router from './router';

import vueMoment from 'vue-moment';
import VueSnackbar from 'vue-snack';

Vue.use(vueMoment);
Vue.use(VueSnackbar, {});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
