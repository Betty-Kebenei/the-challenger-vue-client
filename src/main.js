import Vue from 'vue';
import App from './App.vue';
import router from './router';

import vueMoment from 'vue-moment';
import VueSnackbar from 'vue-snack';
import VeeValidate from 'vee-validate';
import Paginate from 'vuejs-paginate';
import VuejsDialog from "vuejs-dialog";
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faEdit,
  faTrash,
  faTimes,
  faCheck,
  faUser,
  faCaretDown,
  faCaretUp
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faFacebook,
  faGoogle,
  faTwitter,
  faEdit,
  faTrash,
  faTimes,
  faCheck,
  faUser,
  faCaretDown,
  faCaretUp
  )

Vue.use(vueMoment);
Vue.use(VueSnackbar, {});
Vue.use(VeeValidate);
Vue.use(VuejsDialog);

VeeValidate.Validator.extend('verify_password', {
  getMessage: field => `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,
  validate: value => {
      var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      return strongRegex.test(value);
  }
});

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('paginate', Paginate);

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
