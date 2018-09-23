import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: ()=>import ("@/components/HelloWorld")
    // }
    {
      path: '/',
      name: 'index',
      component: () =>
        import ("@/pages/index/index.vue")
    },

    {
      path: '/centerIndex',
      name: 'centerIndex',
      component: () =>
        import ('@/pages/myCenter/centerIndex')
    }, {
      path: '/shopcar',
      name: 'shopcar',
      component: () =>
        import ('@/pages/shopcar/index')
    }, {
      path: '/coupon',
      name: 'coupon',
      component: () =>
        import('@/pages/myCenter/coupon')
    }, {
      path: '/order',
      name: 'order',
      component: () =>
        import('@/pages/myCenter/order')
    }, {
      path: '/waitpayment',
      name: 'waitpayment',
      component: () =>
        import('@/pages/myCenter/waitpayment')
    }, {
      path: '/detail',
      name: 'detail',
      component: () =>
        import ("@/pages/details/detail")
    },
    {

      path: '/alreadyShipped',
      name: 'alreadyShipped',
      component: () =>
        import('@/pages/myCenter/alreadyShipped')
    }, {
      path: '/alreadyFinish',
      name: 'alreadyFinish',
      component: () =>
        import('@/pages/myCenter/alreadyFinish')
    }, {
      path: '/refund',
      name: 'refund',
      component: () =>
        import('@/pages/myCenter/refund')
    }, {
      path: '/moreBoutique',
      name: 'moreBoutique',
      component: () =>
        import('@/pages/MoreBoutique/moreBoutique')
    }
    
  ]
})
