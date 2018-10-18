import Vue from 'vue';
import App from './App.vue';
import router from './router';

import vueMoment from 'vue-moment';
import VueSnackbar from 'vue-snack';
import VeeValidate from 'vee-validate';
import {Tabs, Tab} from 'vue-tabs-component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebook, faGoogle, faTwitter)

Vue.use(vueMoment);
Vue.use(VueSnackbar, {});
Vue.use(VeeValidate);

VeeValidate.Validator.extend('verify_password', {
  getMessage: field => `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,
  validate: value => {
      var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      return strongRegex.test(value);
  }
});

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
