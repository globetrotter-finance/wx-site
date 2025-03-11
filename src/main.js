// src/main.js
import { createApp } from 'vue';
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createHead } from '@vueuse/head'; 
import App from './App.vue';
import router from './router';

const app = createApp(App);
const head = createHead(); 

app.use(ElementPlus);
app.use(head); 
app.use(router);
app.mount('#app');