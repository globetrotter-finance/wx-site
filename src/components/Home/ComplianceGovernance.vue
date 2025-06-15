<template>
  <div>
    <Header />

    <div class=" bg-slate-50">

      <!-- Hero Section -->
      <section class="w-full pt-20 pb-32 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
        <div class="container mx-auto px-4">
          <el-row :gutter="64" class="items-center">
            <el-col :span="24" :lg="14">
              <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-8 mt-5">
                Stay in control, reduce risk, and simplify <span class="text-blue-600">compliance</span> across the enterprise
              </h1>
              <p class="text-lg text-slate-600 leading-relaxed mb-10 lg:pr-12">
                SARAS transforms how organizations manage statutory and internal compliance by bringing all obligations, risks, and actions into a unified, real-time system.
              </p>
              <div class="flex flex-wrap gap-4">
                <el-button type="primary" size="large" class="px-8 py-3 text-base font-semibold bg-blue-600 hover:bg-blue-700 border-0">
                  👉 Request a Demo
                </el-button>
                <el-button size="large" class="px-8 py-3 text-base font-semibold">
                  Talk to Experts
                </el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </section>

      <!-- Features Section -->
      <section class="w-full py-24 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-slate-900 mb-4">Key Features</h2>
            <p class="text-lg text-slate-600">Transform your compliance and risk management with our enterprise-grade solution</p>
          </div>

          <el-row :gutter="32">
            <el-col v-for="(feature, index) in features" :key="index" :span="24" :md="8" class="mb-8">
              <el-card class="h-full border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="p-6">
                  <div class="text-3xl mb-6">{{ feature.icon }}</div>
                  <h3 class="text-xl font-semibold text-slate-900 mb-4">{{ feature.title }}</h3>
                  <p class="text-slate-600 leading-relaxed">{{ feature.description }}</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </section>

      <!-- Benefits & Target Section -->
      <section class="w-full py-24 bg-gradient-to-b from-slate-50 to-white">
        <div class="container mx-auto px-4">
          <el-row :gutter="64" justify="center">
            <el-col :span="24" :lg="10" class="mb-8 lg:mb-0">
              <el-card class="border-0 shadow-xl">
                <template #header>
                  <h3 class="text-2xl font-bold text-slate-900">Benefits</h3>
                </template>
                <el-space direction="vertical" size="large" fill class="w-full">
                  <div v-for="(benefit, index) in benefits" :key="index" class="flex items-start gap-3 p-2">
                    <el-icon class="text-blue-600 text-lg mt-1 flex-shrink-0"><Check /></el-icon>
                    <span class="text-slate-700">{{ benefit }}</span>
                  </div>
                </el-space>
              </el-card>
            </el-col>

            <el-col :span="24" :lg="10">
              <el-card class="border-0 shadow-xl">
                <template #header>
                  <h3 class="text-2xl font-bold text-slate-900">Ideal For</h3>
                </template>
                <el-space direction="vertical" size="large" fill class="w-full">
                  <div v-for="(ideal, index) in idealFor" :key="index" class="flex items-start gap-3 p-2">
                    <el-icon class="text-blue-600 text-lg mt-1 flex-shrink-0"><Check /></el-icon>
                    <span class="text-slate-700">{{ ideal }}</span>
                  </div>
                </el-space>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="w-full py-24 bg-blue-600">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to simplify and secure your compliance process?
            </h2>
            <p class="text-xl text-blue-100 mb-12">
              SARAS gives your team the clarity, control, and confidence to manage risk — intelligently.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <el-button type="primary" size="large" class="px-8 py-3 text-base font-semibold bg-white text-blue-600 hover:bg-blue-50 border-0">
                Request a Demo
              </el-button>
              <el-button size="large" class="px-8 py-3 text-base font-semibold text-white border-2 border-white/80 hover:bg-white/10">
                Talk to Compliance Experts
              </el-button>
            </div>
          </div>
        </div>
      </section>

    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../layout/Header.vue';
import Footer from '../layout/Footer.vue';
import { Check } from '@element-plus/icons-vue';
import { ElRow, ElCol, ElCard, ElButton, ElIcon, ElSpace } from 'element-plus';
import { useHead } from '@vueuse/head';

const features = [
  {
    icon: '🔍',
    title: 'Risk & Governance Health Check',
    description: 'Identify areas of high risk and recurring non-compliance across departments, branches, or business units. SARAS helps you prioritize action and proactively mitigate risk before it escalates.'
  },
  {
    icon: '📊',
    title: '360° Compliance Dashboard',
    description: 'Access a single view of all compliance responsibilities — regulatory, tax, internal, or sector-specific. Track ownership, deadlines, and status across teams and geographies.'
  },
  {
    icon: '🔄',
    title: 'End-to-End Workflow Visibility',
    description: 'Assign, monitor, and close compliance tasks with full audit trails. SARAS keeps every step transparent, documented, and reportable.'
  }
];

const benefits = [
  'Avoid regulatory penalties through timely oversight',
  'Improve accountability with task-level ownership',
  'Enable audit preparedness with structured documentation and traceable logs',
  'Scale seamlessly across regions and departments with consistent standards'
];

const idealFor = [
  'Large enterprises with complex compliance obligations',
  'Legal, finance, and risk teams managing statutory reporting',
  'Firms looking to move away from manual tracking systems'
];

useHead({
  title: 'Compliance Management Software for Enterprises | SARAS',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Track, manage, and automate regulatory and internal compliance with SARAS. Real-time dashboards and governance tools for audit readiness.'
    },
    {
      name: 'keywords',
      content: 'compliance management software, risk governance platform, regulatory compliance India, enterprise compliance tracking, audit-ready compliance system'
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Compliance Management Software for Enterprises | SARAS' },
    { property: 'og:description', content: 'Track, manage, and automate regulatory and internal compliance with SARAS. Real-time dashboards and governance tools for audit readiness.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://sarasfinance.com/compliance-governance' },
  ],
  link: [
    { rel: 'canonical', href: 'https://sarasfinance.com/compliance-governance' }
  ]
});
</script>

<style>
.container {
  max-width: 1280px;
}
</style>
