import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home'),
  },
  {
    path: '/productCenter',
    name: 'productCenter',
    redirect: "/nvim",
    component: () => import(/* webpackChunkName: "productCenter" */ '../views/productCenter'),
    children: [
      {
        path: '/nvim',
        name: 'nvim',
        component: () => import(/* webpackChunkName: "solution" */ '../views/productCenter/components/nvim'),
      },
      {
        path: '/electricalEnergyPlatform',
        name: 'electricalEnergyPlatform',
        component: () => import(/* webpackChunkName: "solution" */ '../views/productCenter/components/electricalEnergy'),
      },
      {
        path: '/sourceChargeStorage',
        name: 'sourceChargeStorage',
        component: () => import(/* webpackChunkName: "solution" */ '../views/productCenter/components/sourceChargeStorage'),
      },
      {
        path: '/machineRoom',
        name: 'machineRoom',
        component: () => import(/* webpackChunkName: "solution" */ '../views/productCenter/components/machineRoom'),
      },
    ]
  },
  {
    path: '/solution',
    name: 'solution',
    redirect: "/powerPlant",
    component: () => import(/* webpackChunkName: "solution" */ '../views/solution'),
    children: [
      {
        path: '/powerPlant',
        name: 'powerPlant',
        component: () => import(/* webpackChunkName: "solution" */ '../views/solution/components/powerPlant'),
      },
      {
        path: '/powerGrid',
        name: 'powerGrid',
        component: () => import(/* webpackChunkName: "solution" */ '../views/solution/components/powerGrid'),
      },
      {
        path: '/electricalEnergy',
        name: 'electricalEnergy',
        component: () => import(/* webpackChunkName: "solution" */ '../views/solution/components/electricalEnergy'),
      },
      {
        path: '/sellingElectricity',
        name: 'sellingElectricity',
        component: () => import(/* webpackChunkName: "solution" */ '../views/solution/components/sellingElectricity'),
      },
    ]
  },
  {
    path: '/newsCenter',
    name: 'newsCenter',
    component: () => import(/* webpackChunkName: "newsCenter" */ '../views/newsCenter'),
  },
  {
    path: '/newsCenterDetail',
    name: 'newsCenterDetail',
    component: () => import(/* webpackChunkName: "newsCenterDetail" */ '../views/newsCenter/detail'),
  },
  {
    path: '/joinUs',
    name: 'joinUs',
    component: () => import(/* webpackChunkName: "joinUs" */ '../views/joinUs'),
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import(/* webpackChunkName: "contactUs" */ '../views/contactUs'),
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  if (document.querySelector(".goTop")) {
    document.querySelector(".goTop").scrollTop = 0
  }
  next()
})

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
