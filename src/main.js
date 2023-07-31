import "../src/assets/tailwind.css"

import {createApp, ref} from 'vue'
import App from './App.vue'
import router from './router'
import VueClickAwayPlugin from "vue3-click-away";
const isdrawerOpen= ref(false)
const app = createApp(App)
app.use(VueClickAwayPlugin)
app.provide('isdrawerOpen',isdrawerOpen)
app.use(router)

app.mount('#app')
