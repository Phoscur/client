import Vue from "vue";
import vuetify from "./vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./registerServiceWorker";


new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
