import { createRouter , createWebHistory } from "vue-router";
import ConnectPage from './ConnectPage'



const routes = [
    {
        path: '/',
        name: 'connect',
        component: ConnectPage
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router