import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./components";
import "./assets/icons.scss";
import "./assets/flip-card.scss";
import store from "@/store";

Vue.config.productionTip = false;

Vue.mixin({
  computed: {
    $store() {
      return store;
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
