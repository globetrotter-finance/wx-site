<!-- AboutUs.vue -->
<template>
    <section class="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="container mx-auto max-w-6xl">
        <!-- Section Header -->
        <el-row justify="center" class="mb-12 sm:mb-16">
          <el-col :span="20" :xs="22">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center">
              About <span class="text-blue-600">Workflows X </span>
            </h2>
            <p class="text-gray-600 text-base sm:text-lg md:text-xl mt-4 text-center max-w-3xl mx-auto">
              Discover the team and vision driving intelligent automation forward
            </p>
          </el-col>
        </el-row>
  
        <!-- Content Cards -->
        <el-row :gutter="20" class="mb-12">
          <!-- Our Mission -->
          <el-col :xs="24" :md="12" class="mb-6 md:mb-0">
            <el-card 
              shadow="hover"
              class="h-full bg-white border-gray-100"
              :body-style="{ padding: '24px' }"
            >
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
                At Agentic Solutions, we believe that every business—regardless of industry—deserves the power to innovate and operate at the speed of thought. Our mission is to empower organizations worldwide with tools that transform labor-intensive processes into smart, efficient workflows.
              </p>
            </el-card>
          </el-col>
  
          <!-- Who We Are -->
          <el-col :xs="24" :md="12">
            <el-card 
              shadow="hover"
              class="h-full bg-white border-gray-100"
              :body-style="{ padding: '24px' }"
            >
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Who We Are</h3>
              <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
                Founded by a team of industry experts, our journey began with a simple goal: to eliminate the traditional bottlenecks of process validation. Today, our technology serves a diverse range of industries—from healthcare and fintech to media and IT—driving transformation across every sector.
              </p>
            </el-card>
          </el-col>
        </el-row>
  
        <!-- Our Vision -->
        <el-row justify="center" class="mb-12">
          <el-col :span="20" :xs="22">
            <el-card 
              shadow="hover"
              class="bg-white border-gray-100"
              :body-style="{ padding: '32px' }"
            >
              <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">Our Vision</h3>
              <p class="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
                To be the catalyst for a new era of intelligent automation, where businesses can focus on strategic growth rather than routine operations.
              </p>
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
              @click="handleReadStory"
            >
              Read Our Full Story
            </el-button>
          </el-col>
        </el-row>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
    methods: {
      handleReadStory() {
        // Add your navigation logic here, e.g., to a full story page
        this.$router.push('/about-story');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Custom styles to match your website's aesthetic */
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