import Vue from 'vue';
import App from './App.vue';
import router from './router';

import vueMoment from 'vue-moment';
import VueSnackbar from 'vue-snack';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebook, faGoogle, faTwitter)

Vue.use(vueMoment);
Vue.use(VueSnackbar, {});

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
