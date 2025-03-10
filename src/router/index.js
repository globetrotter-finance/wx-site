import { createRouter, createWebHistory } from 'vue-router';
// import Home from '@/views/Home.vue';
import Home from '../views/Home.vue';
import Integration from '../views/Integration.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs';
import Solution from '../views/Solution.vue';
import AgenticSolution from '../views/AgenticSolution.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/integration', component: Integration },
  { path: '/blogs', component: Blog },
  {path : '/contact',component:Contact},
  {path : '/solutions',component:Solution},
  {path : '/agentic-solutions',component:AgenticSolution}



];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
