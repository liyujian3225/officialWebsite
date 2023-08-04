import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'
import en from "@/utils/lang/en.js"
import zh from "@/utils/lang/zh.js"
Vue.use(VueI18n)
const messages = {
  'en': {
    ...en,
    ...enLocale,
  },
  'zh': {
    ...zh,
    ...zhLocale,
  }
}
const i18n = new VueI18n({
  locale: 'zh',
  messages,
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

// import x2js from 'x2js'
// Vue.prototype.$x2js = new x2js()

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  i18n,
  render: h => h(App)
}).$mount('#app')
