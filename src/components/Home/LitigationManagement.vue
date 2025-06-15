<template>
  <div>
    <Header />

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-white via-blue-50 to-slate-100 px-4">
      <div class="max-w-6xl text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
          AI-Powered <span class="text-blue-600">Litigation Management Software</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12">
          Manage legal complexities with speed, structure, and intelligence. SARAS redefines litigation workflows by consolidating all notices, research, and drafting into one AI-enabled workspace. Save 100+ man-hours per case.
        </p>
        <div class="flex justify-center gap-6 flex-wrap">
          <el-button type="primary" size="large" class="px-8 py-3 text-base font-semibold bg-blue-600 hover:bg-blue-700">
            👉 Request a Demo
          </el-button>
          <el-button size="large" class="px-8 py-3 text-base font-semibold border border-slate-300 text-slate-700 hover:bg-slate-100">
            Explore Litigation Tools
          </el-button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-slate-900 text-center mb-16">Key Features</h2>
        <div class="grid gap-10 md:grid-cols-3">
          <div v-for="(feature, index) in features" :key="index" class="p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer bg-gradient-to-br from-white to-slate-50">
            <div :class="feature.color" class="w-16 h-16 flex items-center justify-center rounded-xl text-3xl mb-6">
              {{ feature.icon }}
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-4">{{ feature.title }}</h3>
            <p class="text-slate-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits & Ideal For -->
    <section class="py-24 bg-slate-50">
      <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
        <div>
          <h2 class="text-2xl font-bold text-slate-900 mb-8">Benefits</h2>
          <ul class="space-y-5 text-lg text-slate-700">
            <li v-for="(benefit, index) in benefits" :key="index" class="flex items-start gap-3">
              <el-icon class="text-blue-600 mt-1"><CircleCheckFilled /></el-icon> {{ benefit }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-slate-900 mb-8">Ideal For</h2>
          <ul class="space-y-5 text-lg text-slate-700">
            <li v-for="(ideal, index) in idealFor" :key="index" class="flex items-start gap-3">
              <el-icon class="text-green-600 mt-1"><CircleCheckFilled /></el-icon> {{ ideal }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-blue-300 to-blue-300 text-white text-center">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Give your legal team a smarter way to manage cases.
        </h2>
        <p class="text-lg md:text-xl mb-12">
          With SARAS, litigation becomes faster, smarter, and easier to manage.
        </p>
        <div class="flex justify-center flex-wrap gap-6">
          <el-button type="primary" size="large" class="bg-white text-blue-600 hover:bg-blue-100 px-8 py-3 font-semibold">
            👉 Request a Demo
          </el-button>
          <el-button size="large" plain class="border-white text-white hover:bg-white/10 px-8 py-3 font-semibold">
            Explore Litigation Tools
          </el-button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../layout/Header.vue';
import Footer from '../layout/Footer.vue';
import { ElButton, ElIcon } from 'element-plus';
import { CircleCheckFilled } from '@element-plus/icons-vue';
import { useHead } from '@vueuse/head';

const features = [
  {
    icon: '📥',
    title: 'Automated Notice Management',
    description: 'Fetch notices from GST, Income Tax & legal portals. Track & respond easily from a centralized dashboard.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Notice Analysis',
    description: 'Summarize legal documents, highlight key points & suggest recommended actions with contextual AI.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: '⚖️',
    title: 'Legal Research & Drafting',
    description: 'Generate counter-arguments & legal drafts based on client fact patterns & relevant case laws.',
    color: 'bg-yellow-100 text-yellow-600',
  },
];

const benefits = [
  'Save time and reduce manual review effort with intelligent automation',
  'Centralize and organize all litigation and compliance notices',
  'Accelerate response drafting with AI-suggested templates and arguments',
  'Improve accuracy through fact-aware legal research',
];

const idealFor = [
  'Legal and tax advisory firms',
  'In-house legal teams handling high notice volumes',
  'Litigation support teams in finance or consulting sectors',
];

useHead({
  title: 'AI-Powered Litigation Management Software | SARAS',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Simplify legal workflows with SARAS. Automate notice handling, analyze case documents, and generate legal drafts using AI-powered tools.'
    },
    {
      name: 'keywords',
      content: 'litigation management software, AI legal workflow tool, legal notice automation, case law research platform, enterprise legal management system'
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'AI-Powered Litigation Management Software | SARAS' },
    { property: 'og:description', content: 'Simplify legal workflows with SARAS. Automate notice handling, analyze case documents, and generate legal drafts using AI-powered tools.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://sarasfinance.com/litigation-management' }
  ],
  link: [
    { rel: 'canonical', href: 'https://sarasfinance.com/litigation-management' }
  ]
});
</script>

<style scoped>
</style>
