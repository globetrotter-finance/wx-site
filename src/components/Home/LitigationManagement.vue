<template>
  <div>
    <Header />

    <div class="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50 font-sans pt-32 relative overflow-hidden">
      <el-container>
        <el-main>
          <!-- Hero Section -->
          <div class="max-w-5xl mx-auto text-center px-4 mb-32">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
              AI-Powered <span class="text-blue-600">Litigation Management Software</span>
            </h1>
            <p class="text-lg sm:text-xl text-gray-600 mb-16">
              Manage legal complexities with speed, structure, and intelligence.
              SARAS redefines litigation workflows for modern legal and finance teams by consolidating all notices, research, and drafting into one AI-enabled workspace. 
              Whether you’re responding to tax notices or preparing counter-arguments, SARAS saves 100+ man-hours per case.
            </p>

            <!-- Key Features -->
            <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-24">
              <el-card class="bg-white/90 rounded-2xl p-10 shadow hover:shadow-lg transition-shadow">
                <el-icon class="text-blue-600 text-4xl mb-6"><CircleCheckFilled /></el-icon>
                <h3 class="text-xl font-semibold text-gray-800 mb-3">Automated Notice Management</h3>
                <p class="text-gray-600 leading-relaxed">
                  Automatically fetch notices from GST, Income Tax, and other legal portals. Organize them in a centralized dashboard for easy tracking, response, and audit readiness.
                </p>
              </el-card>

              <el-card class="bg-white/90 rounded-2xl p-10 shadow hover:shadow-lg transition-shadow">
                <el-icon class="text-green-500 text-4xl mb-6"><CircleCheckFilled /></el-icon>
                <h3 class="text-xl font-semibold text-gray-800 mb-3">AI-Powered Notice Analysis</h3>
                <p class="text-gray-600 leading-relaxed">
                  Turn complex legal documents into actionable insights. SARAS summarizes content, highlights key legal points, and recommends a clear course of action — all with contextual understanding.
                </p>
              </el-card>

              <el-card class="bg-white/90 rounded-2xl p-10 shadow hover:shadow-lg transition-shadow">
                <el-icon class="text-yellow-500 text-4xl mb-6"><CircleCheckFilled /></el-icon>
                <h3 class="text-xl font-semibold text-gray-800 mb-3">Legal Research & Drafting Assistance</h3>
                <p class="text-gray-600 leading-relaxed">
                  Search for relevant case laws based on client fact patterns. Generate counter-arguments or legal response drafts in minutes, with references to applicable rulings and statutes.
                </p>
              </el-card>
            </div>

            <!-- Benefits & Ideal For -->
            <div class="grid md:grid-cols-2 gap-12 mb-32">
              <!-- Benefits -->
              <div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-10 shadow-sm">
                <h2 class="text-2xl font-semibold text-slate-900 mb-8">Benefits</h2>
                <ul class="space-y-4 text-gray-700">
                  <li>• Save time and reduce manual review effort with intelligent automation</li>
                  <li>• Centralize and organize all litigation and compliance notices</li>
                  <li>• Accelerate response drafting with AI-suggested templates and arguments</li>
                  <li>• Improve accuracy through fact-aware legal research</li>
                </ul>
              </div>

              <!-- Ideal For -->
              <div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-10 shadow-sm">
                <h2 class="text-2xl font-semibold text-slate-900 mb-8">Ideal For</h2>
                <ul class="space-y-4 text-gray-700">
                  <li>• Legal and tax advisory firms</li>
                  <li>• In-house legal teams handling high notice volumes</li>
                  <li>• Litigation support teams in finance or consulting sectors</li>
                </ul>
              </div>
            </div>

            <!-- CTA -->
            <div class="max-w-xl mx-auto">
              <el-card class="bg-blue-50 rounded-2xl p-12 shadow-lg text-center hover:scale-[1.02] transition-transform">
                <h2 class="text-3xl font-bold text-gray-900 mb-8">
                  Give your legal team a smarter way to manage cases.
                </h2>
                <p class="text-lg text-slate-600 mb-8">
                  With SARAS, litigation becomes faster, smarter, and easier to manage.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-6">
                  <el-button type="primary" size="large" class="rounded-xl px-10 py-3 text-base bg-blue-600 border-0 hover:bg-blue-700">
                    👉 Request a Demo
                  </el-button>
                  <el-button type="info" size="large" plain class="rounded-xl px-10 py-3 text-base border-slate-300 text-slate-700 hover:bg-slate-200">
                    Explore Litigation Tools
                  </el-button>
                </div>
              </el-card>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { ElContainer, ElMain, ElCard, ElButton, ElIcon } from 'element-plus'
import { CircleCheckFilled } from '@element-plus/icons-vue'
</script>
