import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'
import VueFire from 'vuefire'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.use(VueFire)
Vue.config.productionTip = false





new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')