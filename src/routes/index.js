import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import ('../pages/home')
        },
        {
            path: "/login",
            name: "login",
            component: () => import ('../pages/login')
        },
        {
            path: "/signup",
            name: "signup",
            component: () => import ('../pages/signup')
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import ('../pages/dashboard')
        }
]
});