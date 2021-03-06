import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource'
import * as VueGL from "vue-gl";
import Toasted from 'vue-toasted';
 
Vue.use(Toasted);

Vue.use(VueResource);

Object.keys(VueGL).forEach(name => {
    Vue.component(name, VueGL[name]);
});

new Vue({
  el: '#app',
  render: h => h(App)
})
