import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../public/iconfont/iconfont.css";

Vue.config.productionTip = false;

import axios from "axios";
Vue.prototype.http = axios;

Vue.config.productionTip = false;
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
