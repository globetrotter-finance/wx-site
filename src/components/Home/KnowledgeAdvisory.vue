<template>
  <!-- Global layout: Header & Footer wrap around page content -->
    <Header />
    <el-container class="flex-1 bg-gradient-to-br from-sky-50 via-white to-sky-50 font-sans min-h-screen pt-20">
      <!-- Padding-top to offset fixed header -->
      <el-main class="py-24">
        <div class="max-w-4xl mx-auto text-center px-4">
          <h1 class="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
            AI-Powered <span class="text-blue-600">Enterprise Knowledge & Advisory System</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 mb-12">
            Preserve your team’s expertise. Retrieve answers instantly.<br>
            SARAS turns your internal docs, legal resources, and research into a living, searchable AI-powered knowledge base.
          </p>

          <el-divider class="mb-12" />

          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <el-card class="bg-white/90 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow">
              <el-icon class="text-blue-600 text-3xl mb-3"><CircleCheckFilled/></el-icon>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Enterprise Knowledge Repository</h3>
              <p class="text-gray-600 text-sm">
                Centralize case law, advisory memos, and internal docs in one queryable system.
              </p>
            </el-card>

            <el-card class="bg-white/90 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow">
              <el-icon class="text-indigo-600 text-3xl mb-3"><CircleCheckFilled/></el-icon>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">AI-Powered Legal & Tax ChatBot</h3>
              <p class="text-gray-600 text-sm">
                Get precise, statute-backed answers in seconds. Contextual understanding for informed decisions.
              </p>
            </el-card>

            <el-card class="bg-white/90 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow">
              <el-icon class="text-green-500 text-3xl mb-3"><CircleCheckFilled/></el-icon>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">FileBot: Smart Document Reading</h3>
              <p class="text-gray-600 text-sm">
                Upload agreements, notices, or orders and ask contextual questions—answers based on your docs.
              </p>
            </el-card>

            <el-card class="bg-white/90 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow">
              <el-icon class="text-yellow-500 text-3xl mb-3"><CircleCheckFilled/></el-icon>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Context-Aware Q&A</h3>
              <p class="text-gray-600 text-sm">
                No more digging through files. SARAS finds the right source from past matters automatically.
              </p>
            </el-card>
          </div>

          <el-divider class="my-12" />

          <div class="grid gap-6 sm:grid-cols-2">
            <el-card class="bg-blue-50 rounded-xl p-6 shadow">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Save Research Time</h4>
              <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Reduce research time by 30–50%.</li>
                <li>Centralize institutional knowledge.</li>
              </ul>
            </el-card>

            <el-card class="bg-blue-50 rounded-xl p-6 shadow">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Boost Onboarding & Audit</h4>
              <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Accelerate new-hire ramp-up.</li>
                <li>Ensure audit readiness with traceable history.</li>
              </ul>
            </el-card>
          </div>

          <el-divider class="my-12" />

          <div class="max-w-xl mx-auto text-left">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Ideal For</h2>
            <el-card class="bg-white/90 rounded-2xl p-8 shadow">
              <ul class="list-disc list-inside text-gray-600 space-y-2 text-sm">
                <li>Firms with vast legal & tax repositories</li>
                <li>Corporate law departments</li>
                <li>Audit & compliance teams managing document-heavy cases</li>
              </ul>
            </el-card>
          </div>

          <el-divider class="my-12" />

          <div class="max-w-lg mx-auto">
            <el-card class="bg-blue-50 rounded-2xl p-10 shadow-lg text-center">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Empower your team with instant access to expertise.
              </h2>
              <p class="text-gray-700 mb-6 text-sm">
                SARAS transforms complex docs and deep expertise into AI-powered answers—anytime, anywhere.
              </p>
              <div class="flex flex-col sm:flex-row justify-center gap-4">
                <el-button type="primary" size="large" class="rounded-xl px-8 py-3">Request a Demo</el-button>
                <el-button type="info" size="large" plain class="rounded-xl px-8 py-3">Explore Knowledge Platform</el-button>
              </div>
            </el-card>
          </div>
        </div>
      </el-main>
    </el-container>
    <Footer />
</template>

<script setup>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { ElContainer, ElMain, ElDivider, ElCard, ElButton, ElIcon } from 'element-plus'
import { CircleCheckFilled } from '@element-plus/icons-vue'
</script>

<style>
/* Styling via Tailwind & Element Plus utilities */
</style>
