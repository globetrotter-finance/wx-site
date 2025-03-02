import { createRouter, createWebHistory } from 'vue-router';
// import Home from '@/views/Home.vue';
import Home from '../views/Home.vue';
import Integration from '../views/Integration.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/integration', component: Integration }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
