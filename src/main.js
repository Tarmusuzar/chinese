import { createApp } from 'vue'
import App from './App.vue'

import MainSignin from './pages/MainSignin'
import MainAdminproducts from './pages/MainAdminproducts.vue'

import { createRouter,createWebHistory } from 'vue-router'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:MainSignin},
        {path:'/admin',component:MainAdminproducts},
        
    ]
})
const app = createApp(App)
app.use(router)

app.mount('#app')





