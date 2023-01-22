import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import MainSignin from './pages/MainSignin'
import MainAdmin from './pages/MainAdmin.vue'
import MainRedirect from './pages/MainRedirect.vue'


import { createRouter,createWebHistory } from 'vue-router'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/admin',component:MainAdmin},
        {path:'/dev',component:MainRedirect},
        {path:'/',component:MainSignin},

        
        
    ]
})
const app = createApp(App)
app.use(router)

app.mount('#app')





