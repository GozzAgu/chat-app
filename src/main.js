import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import vue3GoogleLogin from 'vue3-google-login'
import { createPinia } from 'pinia'
import  piniaPluginPersistedstate  from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin, {
    clientId: '142763211804-15egs1mvk2cbc4gct17h2iglnp1sekmp.apps.googleusercontent.com',
});

app.mount('#app')
