import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './components/Login'
import ConsentPage from './components/Consent'
import CallbackPage from './components/Callback'
import IndexPage from './components/HelloWorld'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexPage
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/consent',
            name: 'consent',
            component: ConsentPage
        },
        {
            path: '/callback',
            name: 'callback',
            component: CallbackPage
        }
    ]
})

