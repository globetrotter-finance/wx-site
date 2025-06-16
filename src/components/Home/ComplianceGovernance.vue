<template>
  <div>
    <Header />

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-white via-blue-50 to-slate-100 px-4">
      <div class="max-w-6xl text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
          Enterprise Grade
        </h1>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
          <span class="text-blue-600">Compliance Tracking and Management</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12">
          Stay in control, reduce risk, and simplify compliance across your organisation. <span class="text-blue-600 fw-bold">Saras</span> transforms how organizations manage statutory and internal compliance by bringing all obligations, risks, and actions into a unified, real-time system.
        </p>
        <div class="flex justify-center gap-6 flex-wrap">
          <el-button type="primary" size="large" round class="px-8 py-3 text-base">
            👉 Talk to our Compliance Expert
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
    <section class="py-24 bg-gradient-to-tr from-white via-blue-50 to-slate-100">
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
    <section class="py-24 text-center">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to simplify and secure your compliance process?
        </h2>
        <p class="text-lg md:text-xl mb-12">
          <span class="text-blue-600 fw-bold">Saras</span> gives your team the clarity, control, and confidence to manage risk — intelligently.
        </p>
        <div class="flex justify-center flex-wrap gap-6">
          <el-button type="primary" size="large" round class="px-8 py-3 text-base">
            👉 Talk to our Compliance Expert
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

const features = [
  {
    icon: '🔍',
    title: 'Risk & Governance Health Check',
    description: 'Identify areas of high risk and recurring non-compliance across departments.',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: '📊',
    title: '360° Compliance Dashboard',
    description: 'Track compliance responsibilities across teams, deadlines, and geographies.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: '🔄',
    title: 'End-to-End Workflow Visibility',
    description: 'Assign, monitor, and close compliance tasks with full audit trails.',
    color: 'bg-green-100 text-green-600',
  },
];

const benefits = [
  'Avoid regulatory penalties through timely oversight',
  'Improve accountability with task-level ownership',
  'Enable audit preparedness with structured documentation and traceable logs',
  'Scale seamlessly across regions and departments with consistent standards',
];

const idealFor = [
  'Large enterprises with complex compliance obligations',
  'Legal, finance, and risk teams managing statutory reporting',
  'Firms looking to move away from manual tracking systems',
];
</script>
