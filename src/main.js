import Vue from 'vue'
import App from './App.vue'
import router from './router';
// import { createAuth0 } from '@auth0/auth0-vue';
Vue.config.productionTip = false;

// const app = createApp(App);

// app.use(
//   createAuth0({
//     domain: process.env.VUE_APP_AUTH0_DOMAIN,
//     client_id: process.env.VUE_APP_AUTHO_CLIENTID,
//     redirect_uri: window.location.origin
//   })
// );

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
