import Vue from "vue";
import App from "./App.vue";
import store from "@/store";

import "./components";
import "./assets/style.scss";

Vue.config.productionTip = false;

Vue.mixin({
  computed: {
    $store() {
      return store;
    }
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
