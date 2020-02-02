import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
const Home = ()=> import ('../views/home/home.vue')
const Category = () => import ('../views/category/category.vue')
const Cart = () => import ('../views/cart/cart.vue')
const user = () => import ('../views/user/user.vue')
const routes = [
    { path: '/home', component: Home },
    { path: '/category', component: Category },
    { path: '/cart', component: Cart },
    { path: '/user', component: user }
]
const router = new vueRouter({
    routes
})
export default router