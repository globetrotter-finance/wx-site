<template>
    <section class="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="container mx-auto max-w-6xl">
        <!-- Section Header -->
        <el-row justify="center" class="mb-12 sm:mb-16">
          <el-col :span="20" :xs="22">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center">
              Universal Applications Across <span class="text-blue-600">Industries</span>
            </h2>
            <p class="text-gray-600 text-base sm:text-lg md:text-xl mt-4 text-center max-w-3xl mx-auto">
              Agentic Solutions is designed for versatility. Whether you’re in IT, healthcare, media, fintech, or any other industry, our platform adapts to your unique needs.
            </p>
          </el-col>
        </el-row>
  
        <!-- Industry Applications Grid -->
        <el-row :gutter="20" class="mb-12">
          <el-col 
            v-for="industry in industries" 
            :key="industry.id" 
            :xs="24" 
            :sm="12" 
            :lg="8" 
            class="mb-6"
          >
            <el-card 
              shadow="hover"
              class="h-full bg-white border-gray-100"
              :body-style="{ padding: '24px' }"
            >
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{{ industry.title }}</h3>
              <p class="text-gray-600 text-sm sm:text-base leading-relaxed">{{ industry.description }}</p>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>
  </template>
  
  <script>
  // Import the JSON data
  import industriesData from '../../data/industry-application.json';
  
  export default {
    name: 'IndustryApplications',
    data() {
      return {
        industries: industriesData
      };
    }
  };
  </script>
  
  <style scoped>
  /* Custom styles to match website aesthetic */
  .el-card {
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .el-card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .el-card {
      margin-bottom: 16px;
    }
  }
  </style>