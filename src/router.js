import Vue from 'vue'
import Router from 'vue-router'
import { packages } from './config.json';
import vueg from 'vueg'

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        components:{
            main: () => import('./views/Home.vue'),
            demonav: () => import('./views/Demonav.vue'),
        }
    }
];

//组件示例页面
packages.map(item => {
    if (item.showDemo === false) return;
    const pkgName =  item.name.toLowerCase();
    routes.push({
        path: '/demo.html/' + item.name,
        components: {
            main: () => import('./components/' + pkgName + '/demo.vue'),
            demonav: () => import('./views/Demonav.vue'),
        },
        name: item.name
    });
});

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

const options = {
    duration: '0.2', //转场动画时长，默认为0.3，单位秒
    firstEntryDisable: true, //值为true时禁用首次进入应用时的渐现动画，默认为false
    firstEntryDuration: '.3', //首次进入应用时的渐现动画时长，默认为.6
    forwardAnim: 'fadeInRight', //前进动画，默认为fadeInRight
    backAnim: 'fadeInLeft', //后退动画，默认为fedeInLeft
    sameDepthDisable: false, //url深度相同时禁用动画，默认为false
    tabs: [], //默认为[]，'name'对应路由的name,以实现类似app中点击tab页面水平转场效果，如tabs[1]到tabs[0]，会使用backAnim动画，tabs[1]到tabs[2]，会使用forwardAnim动画
    tabsDisable: false, //值为true时，tabs间的转场没有动画，默认为false
    shadow: false, //值为false，转场时没有阴影的层次效果
    disable: false, //禁用转场动画，默认为false，嵌套路由默认为true
};

Vue.use(vueg, router, options);
export default router;
