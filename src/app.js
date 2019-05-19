import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './lib/mixin.js';

Vue.config.productionTip = false;

Vue.mixin(mixin);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
    console.log('页面加载前');
    next();
});

router.afterEach((to, from) => {
    console.log('页面加载完成');
});
