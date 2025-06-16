import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
// import Home from '@/views/Home.vue';
import Home from '../views/Home.vue';
import Integration from '../views/Integration.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs';
import Solution from '../views/Solution.vue';
import AgenticSolution from '../views/AgenticSolution.vue';
import AboutUs from '../views/Aboutus.vue';
import ComplianceGovernance from '../components/Home/ComplianceGovernance.vue';
import AuditAutomation from '../components/Home/AuditAutomation.vue';
import KnowledgeAdvisory from '../components/Home/KnowledgeAdvisory.vue';
import LitigationManagement from '../components/Home/LitigationManagement.vue';
import Privacy from '../views/Privacy.vue';
import Terms from '../views/Terms.vue';

const routes = [
  { path: '/',                  component: Home },
  { path: '/integration',       component: Integration },
  { path: '/blogs', component: Blog },
  { path: '/aboutus', component: AboutUs },
  { path: '/contact', component: Contact },
  { path: '/solutions', component: Solution },
  { path: '/agentic-solutions', component: AgenticSolution },
  { path: '/compliance-governance', component: ComplianceGovernance },
  { path: '/audit-automation', component: AuditAutomation },
  { path: '/knowledge-advisory', component: KnowledgeAdvisory },
  { path: '/litigation-management', component: LitigationManagement },
  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy
  },
  {
    path: '/terms',
    name: 'terms',
    component: Terms
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
});

export default router;
