import Vue from 'vue';
import insApp from './App.vue';
import VueRouter from 'vue-router';
import { VueMaskDirective } from 'v-mask'
import { routes } from "./routes.js";

Vue.directive('mask', VueMaskDirective);

Vue.use(VueRouter); 

const router = new VueRouter({
	// es6 can do routes,
	routes: routes,
	// allows remove hash from url
	mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(insApp)
});
