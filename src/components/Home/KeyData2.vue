<!-- KeyData.vue -->
<template>
    <section class="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      <!-- Decorative Background Elements -->
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <div class="absolute top-10 -left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 -right-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/3 left-1/4 w-48 h-48 bg-purple-100 rounded-full blur-2xl"></div>
      </div>
  
      <div class="container mx-auto max-w-6xl relative z-10">
        <!-- Section Header -->
        <el-row justify="center" class="mb-12 sm:mb-16">
          <el-col :span="20" :xs="22">
            <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center">
                Our Proposition with <span class="text-blue-600"> Agentic Solutions</span>
            </h2>
            <p class="text-gray-600 text-base sm:text-lg md:text-xl mt-4 text-center max-w-3xl mx-auto">
                Unlock lightning-fast productivity and seamless integration with our revolutionary Auto Workflow Builder! 🚀
            </p>
          </el-col>
        </el-row>
  
        <!-- Value Proposition Grid -->
        <el-row :gutter="24" class="mb-12">
          <el-col 
            v-for="(value, index) in keyData" 
            :key="value.id" 
            :xs="24" 
            :sm="12" 
            :lg="6" 
            class="mb-6"
            :style="{ '--index': index }"
          >
            <el-card 
              shadow="never"
              class="h-full bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl "
              :body-style="{ padding: '24px' }"
            >
              <!-- Icon Header -->
              <div class="flex justify-center mb-4">
                <component :is="iconComponents[value.icon]" class="text-4xl sm:text-5xl text-blue-600" />
              </div>
  
              <!-- Content -->
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 text-center">{{ value.title }}</h3>
              <p class="text-gray-600 text-sm sm:text-base leading-relaxed text-center">{{ value.description }}</p>
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
              class="px-10 py-4 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-600 hover:bg-blue-700"
            >
              Unlock Your Potential
            </el-button>
          </el-col>
        </el-row>
      </div>
    </section>
  </template>
  
  <script>
  // Import specific Element Plus icons
  import { Lightning, Cpu, Link, TopRight } from '@element-plus/icons-vue';
  import keyData from '../../data/key-data.json'
  
  export default {
    name: 'KeyData',
    components: {
      // Register the icons as components
      'el-icon-lightning': Lightning,
      'el-icon-cpu': Cpu,
      'el-icon-link': Link,
      'el-icon-top-right': TopRight
    },
    data() {
      return {
        keyData: keyData,
        // Map icons to their component names for dynamic rendering
        iconComponents: {
          'el-icon-lightning': 'el-icon-lightning',
          'el-icon-cpu': 'el-icon-cpu',
          'el-icon-link': 'el-icon-link',
          'el-icon-top-right': 'el-icon-top-right'
        }
      };
    }
  };
  </script>
  
  <style scoped>

  .el-card:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
  .el-button--primary {
    background-color: #2563eb;
    border-color: #2563eb;
    padding: 14px 40px;
  }
  
  .el-button--primary:hover {
    background-color: #1d4ed8;
    border-color: #1d4ed8;
    /* transform: translateY(-2px); */
  }
  @media (max-width: 768px) {
    .el-card {
      margin-bottom: 24px;
    }
  
    .el-button--primary {
      padding: 12px 32px;
    }
  }
  
  </style>