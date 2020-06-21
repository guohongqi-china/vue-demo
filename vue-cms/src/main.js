// 入口文件
import Vue from 'vue'

//按需导入mint-ui 中的组件
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'

import Qheader from '../components/Qheader.vue'

Vue.component(Header.name, Header);
Vue.component('uiheader',Qheader)

import app from './App.vue'

new Vue({
    el:'#app',
    render: c => c(app)
})


console.log('ddd')