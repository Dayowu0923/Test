import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from "./router";
import { createPinia } from "pinia";


const app = createApp(App);
const pinia = createPinia();
// app.component("e-data-Table", Vue3EasyDataTable);
app.config.performance = true;
app.use(pinia).use(router).mount("#app");