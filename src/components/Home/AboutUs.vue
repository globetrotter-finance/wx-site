<template>
  <div class="bg-white">

    <!-- Hero -->
    <section class="py-28 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <div class="max-w-3xl">
          <h1 class="text-5xl font-bold tracking-tight text-gray-900 mb-6">
            We are building and automating most of the operations in finance and legal domain.
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            <span class="text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">Saras Finance</span> delivers enterprise-grade AI agents that eliminate operational drag, automate compliance, and unlock scale for modern finance and legal teams.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission & Who we are -->
    <section class="py-24 bg-gray-50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 mb-4">
        <div>
          <h2 class="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            We empower enterprise finance and legal operations through self-governing agentic systems that execute, monitor and optimize high-stakes processes at scale — reducing human error, accelerating decisions, and ensuring compliance.
          </p>
        </div>
        <div>
          <h2 class="text-3xl font-semibold text-gray-900 mb-4">Who We Are</h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Founded by domain experts in FinTech, LegalTech, and AI infrastructure, Saras Finance brings together deep experience in automation, enterprise SaaS architecture, fraud prevention, and modern compliance stacks.
          </p>
        </div>
      </div>

      <div class="max-w-5xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">Our Vision</h2>
        <p class="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Build the global intelligence infrastructure that powers autonomous enterprise workflows across every regulated industry — replacing traditional software with continuous agentic decision loops.
        </p>
      </div>
    </section>

    <!-- Leadership Team
    <section class="py-24 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-12">Meet <span class="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">Saras Finance</span> Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
          <template v-for="person in team" :key="person.name">
            <div class="flex flex-col items-center">
              <img :src="person.img" class="w-28 h-28 rounded-full mb-4 border border-gray-300" />
              <div class="text-lg font-semibold text-gray-900">{{ person.name }}</div>
              <div class="text-blue-600 text-sm mb-2">{{ person.role }}</div>
              <p class="text-sm text-gray-500 leading-relaxed text-center">{{ person.desc }}</p>
            </div>
          </template>
        </div>
      </div>
    </section> -->

  </div>
</template>

<script setup>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import { ref, onMounted } from 'vue'
import { ElButton } from 'element-plus'

const team = ref([])

onMounted(async () => {
  const res = await fetch('/src/data/team.json')
  team.value = await res.json()
})
</script>
