// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from './resource'
import global from './utils/global'

Vue.config.productionTip = false

/* eslint-disable no-new */

// 添加全局变量
Vue.prototype.global = global;

var vm = new Vue({
  el: '#app',
  router,
  resource, //通过import引入，然后在这里调用
  components: { App },
  template: '<App/>'
})

// console.log(vm);