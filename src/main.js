import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import isotope from "vueisotope";
import vuejquery from "vue-jquery";

Vue.use(vuejquery);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  isotope,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
