
// public assets
import './assets/public/public.less';
import './assets/public/public.js';

// app
import Vue from 'vue';
import Router from 'vue-router'
import Resource from 'vue-resource'

import App from './app.vue';
import routes from './routes';

Vue.use(Router);
Vue.use(Resource);

const router = new Router({
  routes
});

// set public http request
Vue.http.interceptors.push(function(request, next) {

  request.url = '' + request.url;

  request.body = JSON.stringify(request.body);

  // modify method
  // request.method = 'POST';

  // modify headers
  request.headers.set('token', '');
  request.headers.set('Content-Type', 'appliaction/json');

  // continue to next interceptor
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
