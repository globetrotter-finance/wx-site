<template>
    <Header />
    <el-container class="flex-1 bg-gradient-to-br from-sky-50 via-white to-sky-50 font-sans min-h-screen pt-20">
      <el-main class="py-24">
        <div class="max-w-4xl mx-auto text-center px-4">
          <h1 class="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Enterprise-Grade <span class="text-blue-600">Compliance, Risk & Governance</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 mb-12">
            Track, manage, and automate regulatory and internal compliance with SARAS. Real-time dashboards and governance tools for audit readiness.
          </p>
          <el-divider class="mb-12" />

          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <el-card class="bg-white/90 rounded-2xl p-8 shadow hover:shadow-lg transition-shadow">
              <el-icon class="text-blue-600 text-3xl mb-4"><CircleCheckFilled /></el-icon>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Automated Compliance Tracking</h3>
              <p class="text-gray-600">
                Stay audit-ready with automated reminders, document management, and compliance calendars.
              </p>
            </el-card>

            <el-card class="bg-white/90 rounded-2xl p-8 shadow hover:shadow-lg transition-shadow">
              <el-icon class="text-green-500 text-3xl mb-4"><CircleCheckFilled /></el-icon>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Risk & Governance Dashboard</h3>
              <p class="text-gray-600">
                Visualize risk exposure and governance status in real time with powerful dashboards.
              </p>
            </el-card>

            <el-card class="bg-white/90 rounded-2xl p-8 shadow hover:shadow-lg transition-shadow">
              <el-icon class="text-yellow-500 text-3xl mb-4"><CircleCheckFilled /></el-icon>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Regulatory Updates</h3>
              <p class="text-gray-600">
                Get instant alerts on regulatory changes and ensure your enterprise is always compliant.
              </p>
            </el-card>
          </div>

          <el-divider class="my-12" />

          <div class="max-w-lg mx-auto">
            <el-card class="bg-blue-50 rounded-2xl p-10 shadow-lg text-center">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Ready to transform your compliance management?
              </h2>
              <div class="flex flex-col sm:flex-row justify-center gap-4">
                <el-button type="primary" size="large" class="rounded-xl px-8 py-3">Request a Demo</el-button>
                <el-button type="info" size="large" plain class="rounded-xl px-8 py-3">Contact Sales</el-button>
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
/* Tailwind & Element Plus manage all styles */
</style>
