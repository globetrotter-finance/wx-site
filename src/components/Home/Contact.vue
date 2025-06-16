<template>
  <div>

    <el-container class="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen py-24">
      <el-main>
        <el-row justify="center">
          <el-col :xs="24" :sm="20" :md="16" :lg="12" class="text-center">

            <!-- Title -->
            <h1 class="text-5xl font-extrabold text-slate-900 mb-4">
              Get in Touch
            </h1>
            <h2 class="text-2xl font-semibold mb-10">
              with the <span class="text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">Saras Finance</span> Team
            </h2>

            <!-- Intro -->
            <p class="text-lg text-slate-600 mb-16 max-w-3xl mx-auto">
              Whether you’re exploring automation for legal operations, planning a compliance overhaul, or want to see <span class="text-blue-600 fw-bold">Saras</span> in action — we’re ready to help.
            </p>

            <!-- Contact Info -->
            <el-divider content-position="center">Contact Us</el-divider>

            <el-row :gutter="40" justify="center" class="mt-10 mb-16">
              <el-col :xs="24" :sm="12" :md="8">
                <el-card shadow="hover" class="rounded-2xl p-8 text-center">
                  <el-icon size="40" class="mb-4 text-blue-600"><Briefcase /></el-icon>
                  <div class="text-xl font-semibold text-blue-700 mb-2">Sales & Demo</div>
                  <el-link href="mailto:sales@sarasfinance.com" type="primary" class="text-lg font-medium">
                    sales@sarasfinance.com
                  </el-link>
                </el-card>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8">
                <el-card shadow="hover" class="rounded-2xl p-8 text-center">
                  <el-icon size="40" class="mb-4 text-green-600"><Help /></el-icon>
                  <div class="text-xl font-semibold text-green-700 mb-2">Support</div>
                  <el-link href="mailto:support@sarasfinance.com" type="success" class="text-lg font-medium">
                    support@sarasfinance.com
                  </el-link>
                </el-card>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8">
                <el-card shadow="hover" class="rounded-2xl p-8 text-center">
                  <el-icon size="40" class="mb-4 text-yellow-600"><Iphone /></el-icon>
                  <div class="text-xl font-semibold text-yellow-700 mb-2">Phone</div>
                  <el-link href="tel:+919501289879" type="warning" class="text-lg font-medium">
                    +91 95012 89879
                  </el-link>
                </el-card>
              </el-col>
            </el-row>

            <!-- Book Demo -->
            <el-divider content-position="center">Book a Demo</el-divider>

            <el-card shadow="hover" class="rounded-2xl p-8 my-16">
              <div class="flex flex-col items-center text-center">
                <el-icon size="40" class="mb-4 text-blue-600"><CircleCheckFilled /></el-icon>
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Book a Demo</h3>
                <p class="text-lg text-slate-600 mb-8">
                  Use our <b>Request Demo</b> form to schedule a personalized walkthrough of the SARAS platform with our product specialists.
                </p>
                <el-button type="primary" size="large" class="px-10 py-3 text-lg">Request a Demo</el-button>
              </div>
            </el-card>

            <!-- Partnerships -->
            <el-divider content-position="center">Partnerships & Media</el-divider>

            <el-card shadow="hover" class="rounded-2xl p-8 my-16">
              <div class="flex flex-col items-center text-center">
                <el-icon size="40" class="mb-4 text-indigo-500"><CircleCheckFilled /></el-icon>
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Partnerships & Media</h3>
                <p class="text-lg text-slate-600">
                  Interested in collaborating or covering SARAS? Reach out at
                  <el-link href="mailto:partnerships@sarasplatform.com" type="info" class="ml-1 font-semibold">
                    partnerships@sarasplatform.com
                  </el-link>
                </p>
              </div>
            </el-card>

            <!-- CTA -->
            <el-divider content-position="center"></el-divider>

            <el-card shadow="always" class="rounded-2xl p-8 my-16 text-center bg-gradient-to-r from-blue-300 to-blue-300 text-white">
              <h3 class="text-3xl font-bold mb-6">We’re here to simplify your workflow — let’s connect.</h3>
              <div class="flex flex-col sm:flex-row justify-center gap-6 mt-4">
                <el-button type="primary" size="large" class="bg-white text-blue-600 font-bold px-10 py-3">👉 Request a Demo</el-button>
                <el-button size="large" plain class="border-white text-white font-bold px-10 py-3">Write to Us</el-button>
              </div>
            </el-card>

          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import Header from '../layout/Header.vue';
import Footer from '../layout/Footer.vue';
import { ElIcon, ElLink, ElDivider, ElContainer, ElMain, ElRow, ElCol, ElCard, ElButton } from 'element-plus';
import { Briefcase, Help, Iphone } from '@element-plus/icons-vue';
</script>
