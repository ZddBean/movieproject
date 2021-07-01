// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
import ElementUI from "element-ui";
import axios from "axios";
import regComponents from "@common/reg-components";

Vue.prototype.$http = axios;
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.use(regComponents);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
