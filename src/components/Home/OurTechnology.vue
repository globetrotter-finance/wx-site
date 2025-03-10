<!-- OurTechnology.vue -->
<template>
    <section class="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="container mx-auto max-w-6xl">
        <!-- Section Header -->
        <el-row justify="center" class="mb-12 sm:mb-16">
          <el-col :span="20" :xs="22">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center">
              Our <span class="text-blue-600">Technology</span>
            </h2>
            <p class="text-gray-600 text-base sm:text-lg md:text-xl mt-4 text-center max-w-3xl mx-auto">
              Cutting-edge solutions powering intelligent automation
            </p>
          </el-col>
        </el-row>
  
        <!-- Technology Features Grid -->
        <el-row :gutter="20" class="mb-12">
          <el-col 
            v-for="tech in technologies" 
            :key="tech.id" 
            :xs="24" 
            :md="12" 
            class="mb-6 md:mb-0"
          >
            <el-card 
              shadow="hover"
              class="h-full bg-white border-gray-100"
              :body-style="{ padding: '24px' }"
            >
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{{ tech.title }}</h3>
              <p class="text-gray-600 text-sm sm:text-base leading-relaxed">{{ tech.description }}</p>
            </el-card>
          </el-col>
        </el-row>
  
        <!-- CTA -->
        <el-row justify="center">
          <el-col :span="24" class="text-center">
            <el-button 
              type="primary" 
              round 
              size="large"
              class="px-8 py-3 text-base sm:text-lg font-medium shadow-md hover:shadow-lg transition-all"
              @click="handleDiscoverTech"
            >
              Discover the Technology Behind Agentic Solutions
            </el-button>
          </el-col>
        </el-row>
      </div>
    </section>
  </template>
  
  <script>
  // Import the JSON data
//   import technologiesData from '../data/technology-data.json';
import technologiesData from '../../data/technology-data.json'
  
  export default {
    name: 'OurTechnology',
    data() {
      return {
        technologies: technologiesData
      };
    },
    methods: {
      handleDiscoverTech() {
        // Add your navigation logic here, e.g., to a technology details page
        this.$router.push('/technology');
      }
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
  
  .el-button--primary {
    background-color: #2563eb;
    border-color: #2563eb;
  }
  
  .el-button--primary:hover {
    background-color: #1d4ed8;
    border-color: #1d4ed8;
    transform: translateY(-2px);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .el-card {
      margin-bottom: 16px;
    }
  }
  </style>