import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import store from './store'
import VueAMap from 'vue-amap';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'ec8325528a46874d454689d9c497629b',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  uiVersion: "1.0.11"
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
