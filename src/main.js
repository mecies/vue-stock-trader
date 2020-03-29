import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueResource from 'vue-resource';
import App from './App.vue';
import routes from './routes';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.filter('currency', (value) => `$${value.toLocaleString()}`);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueResource);

Vue.http.options.root = 'https://stock-trader-a0af0.firebaseio.com/';

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
