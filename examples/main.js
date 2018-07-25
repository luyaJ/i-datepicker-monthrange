import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';
import iView from '../src/index';
// import locale from '../src/locale/lang/en-US';
// import locale from '../src/locale/lang/ko-KR';
// import locale from '../src/locale/lang/vi-VN';
import locale from '../src/locale/lang/zh-CN';

Vue.use(iView, {
    locale
});

// 开启debug模式
Vue.config.debug = true;

const app = new Vue({
    render: h => h(App)
}).$mount('#app');
