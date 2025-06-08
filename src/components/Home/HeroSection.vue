<template>
  <section class="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24 px-4 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 -right-20 sm:top-20 sm:-right-40 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
      <div class="absolute bottom-10 -left-20 sm:bottom-20 sm:-left-40 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
      <div class="absolute -bottom-10 sm:-bottom-20 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
    </div>

    <!-- Main content container -->
    <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">

        <!-- Left side: Text content -->
        <div class="w-full lg:w-1/2 space-y-8">
          <!-- Headline -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 text-center lg:text-left mt-10">
            We are <span class="text-blue-600">redefining</span> how Legal, Audit & Finance Firms work
          </h1>

          <!-- Subheadline -->
          <p>
            AI-powered, ISO-certified, and built for scale — SARAS helps you automate, analyze, and manage everything from litigation to compliance and knowledge.
          </p>

          <!-- Stats bar -->
          <!-- <div class="flex items-center gap-3">
            <span class="text-blue-600 font-semibold text-2xl"><10<span class=" text-xs">mins</span>    </span>
            <span class="text-gray-600 text-sm">No coding needed,<br> Build & ship your product</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-blue-600 font-semibold text-2xl">24/7</span>
            <span class="text-gray-600 text-sm"> Always available,<br> No breaks & downtime</span>
          </div> -->

          <el-row>
            <el-button @click="router.push('/contact')" type="primary" round class="me-2">Contact Us</el-button>
            <el-button @click="router.push('/solutions')" type="primary" round class="me-2">Explore Product Suite</el-button>
          </el-row>
        </div>

        <!-- Right side: Visualization -->
        <div class="w-full lg:w-1/2 mt-12 lg:mt-0">

          <img src="../../assets/hero/home-hero.gif" />

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<style scoped>

/* Enhanced styling */
.bg-gradient-to-br {
  background: linear-gradient(to bottom right, #EFF6FF, #FFFFFF, #EFF6FF);
}

.text-gray-900 {
  color: #1F2937;
}

.text-gray-600 {
  color: #4B5563;
}

.text-blue-600 {
  color: #2563EB;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  section {
    min-height: auto;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width: 1024px) {
  .lg\:flex-row {
    flex-direction: row;
  }
}
</style>