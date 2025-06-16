<template>
  <div>
    <Header />

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-white via-blue-50 to-slate-100 px-4">
      <div class="max-w-6xl text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
          Automate Your <span class="text-blue-600">Audits with Intelligence and Speed</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12">
          Turn audits into a streamlined, insight-driven process. SARAS helps finance and compliance teams automate audit planning, execution, and documentation. With AI-powered risk detection and real-time visibility, SARAS reduces manual effort and improves audit outcomes across departments.
        </p>
        <div class="flex justify-center gap-6 flex-wrap">
          <el-button type="primary" size="large" class="px-8 py-3 text-base font-semibold bg-blue-600 hover:bg-blue-700">
            👉 Request a Demo
          </el-button>
          <el-button size="large" class="px-8 py-3 text-base font-semibold border border-slate-300 text-slate-700 hover:bg-slate-100">
            Talk to an Audit Specialist
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
    <section class="py-24 bg-gradient-to-tr from-white via-blue-50 to-slate-100 ">
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
    <section class="py-24 bg-white text-center">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to modernize your audit function?
        </h2>
        <p class="text-lg md:text-xl mb-12">
          SARAS gives your audit team the tools to track, detect, and deliver with confidence — powered by AI.
        </p>
        <div class="flex justify-center flex-wrap gap-6">
          <el-button type="primary" size="large" class="bg-white text-blue-600 hover:bg-blue-100 px-8 py-3 font-semibold">
            👉 Request a Demo
          </el-button>
          <el-button size="large" plain class="border-white text-white hover:bg-white/10 px-8 py-3 font-semibold">
            Talk to an Audit Specialist
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
    icon: '🔎',
    title: 'Audit Readiness Tracker',
    description: 'Monitor documentation health, detect gaps, and stay ready for audits.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: '⚠️',
    title: 'Risk Identification Engine',
    description: 'Automatically flag high-risk items and recurring control failures.',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: '📊',
    title: 'Real-Time Audit Dashboards',
    description: 'Track audits from initiation to closure with full accountability.',
    color: 'bg-yellow-100 text-yellow-600',
  },
];

const benefits = [
  'Reduce audit cycle times with real-time tracking and automated reviews',
  'Ensure full traceability of every audit activity',
  'Minimize manual effort through automated flagging and document analysis',
  'Improve confidence in reporting and compliance alignment',
];

const idealFor = [
  'Internal audit teams in mid to large enterprises',
  'CFO offices and risk management departments',
  'Audit firms managing multi-client or cross-departmental reviews',
];
</script>
