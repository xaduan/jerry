import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView, {
  transfer: true,
  size: 'large'
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
