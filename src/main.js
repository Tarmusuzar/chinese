import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import MainGuest from './pages/MainGuest'
import MainAdmin from './pages/MainAdmin.vue'
import MainError from './pages/MainError.vue'


import { createRouter,createWebHistory } from 'vue-router'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/admin',component:MainAdmin},
        {path:'/error',component:MainError},
        {path:'/',component:MainGuest},

        
        
    ]
})
const app = createApp(App)
app.use(router)

app.mount('#app')





