import Vue from 'vue'
import Router from 'vue-router'

// 导入组件,在路由中注册
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/Home'
import mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/mine',
      name: 'mine',
      component: mine
    },
  ]
})
