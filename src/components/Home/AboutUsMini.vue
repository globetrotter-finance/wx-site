<template>
  <div class="bg-white">


    <!-- Mission & Who we are -->
    <section class="py-24 bg-gray-50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
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
    </section>

 

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
