import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Classify from '../pages/Classify/Classify.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import MyEpet from '../pages/MyEpet/MyEpet.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path:'/msite',
      component: Msite,
    },
    {
      path:'/classify',
      component: Classify,
    },
    {
      path:'/shoppingcart',
      component: ShoppingCart,
    },
    {
      path:'/myepet',
      component: MyEpet,
    },
  ]
})
