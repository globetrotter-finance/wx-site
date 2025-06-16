<template>
  <div>
    <Header />

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-white via-blue-50 to-slate-100 px-4">
      <div class="max-w-6xl text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
          AI Ready
        </h1>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
          <span class="text-blue-600">Enterprise Knowledge<br>& Advisory</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12">
          Preserve your team’s expertise. Retrieve answers instantly. <span class="text-blue-600 fw-bold">Saras</span> Knowledge & Advisory tools turn your internal documentation, legal resources, and research material into a living, searchable knowledge system — powered by intelligent AI assistants trained to understand law, tax, and regulations.
        </p>
        <div class="flex justify-center gap-6 flex-wrap">
          <el-button type="primary" size="large" round class="px-8 py-3 text-base">
            👉 Talk to our Knowledge Expert
          </el-button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-slate-900 text-center mb-16">Features</h2>
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
    <section class="py-24 bg-white text-center">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Give your team instant access to everything your firm knows.
        </h2>
        <p class="text-lg md:text-xl mb-12">
          <span class="text-blue-600 fw-bold">Saras</span> transforms complex documents and specialized knowledge into clear, intelligent, and well-reasoned insights.
        </p>
        <div class="flex justify-center flex-wrap gap-6">
          <el-button type="primary" size="large" round class="px-8 py-3 text-base">
            👉 Talk to our Knowledge Expert
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
    icon: '🧠',
    title: 'Enterprise Knowledge Repository',
    description: 'Centralize legal, tax, and advisory documents into a single knowledge system.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: '💬',
    title: 'AI-Powered Legal & Tax ChatBot',
    description: 'Ask complex questions and get statute-backed, AI-generated answers.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: '📂',
    title: 'FileBot: Smart Document Reading',
    description: 'Upload documents and extract contextual answers directly from content.',
    color: 'bg-yellow-100 text-yellow-600',
  },
];

const benefits = [
  'Save 30–50% of research time across legal, tax, and audit functions',
  'Reduce dependency on individual experts with institutionalized knowledge',
  'Speed up onboarding by giving new team members a ready source of truth',
  'Enhance audit readiness with traceable knowledge history',
];

const idealFor = [
  'Legal and tax advisory firms with large knowledge repositories',
  'Corporate law departments',
  'Audit and compliance teams handling document-heavy cases',
];
</script>
