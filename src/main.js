// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入ElementUI
import ElementUI, {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'

//导入vuex的store
import store from "./store";

import axios from 'axios'
//配置请求的根路径
Vue.prototype.$http=axios;
axios.defaults.baseURL=''

Vue.use(ElementUI);
Vue.prototype.$message=Message;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
