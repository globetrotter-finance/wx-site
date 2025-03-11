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
  
        <!-- Horizontal Scroll Container -->
        <div class="relative">
          <div 
            ref="scrollContainer" 
            class="flex overflow-x-auto scrollbar-hidden snap-x snap-mandatory pb-6"
            @scroll="handleScroll"
          >
            <div 
              v-for="(value, index) in displayedData" 
              :key="value.id" 
              class="flex-shrink-0 w-80 mx-4 snap-start animate-slide-in,justify-center  items-center"
              :style="{ '--index': index }"
            >
              <el-card 
                shadow="never"
                class="h-full bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                :body-style="{ padding: '24px' }"
              >
                <div class="flex justify-center mb-4">
                  <component :is="iconComponents[value.icon]" class="text-4xl sm:text-5xl text-blue-600" />
                </div>
                <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 text-center">{{ value.title }}</h3>
                <p class="text-gray-600 text-sm sm:text-base leading-relaxed text-center">{{ value.description }}</p>
              </el-card>
            </div>
            <!-- Loading Indicator -->
            <div v-if="isLoading" class="flex-shrink-0 w-80 mx-4 flex items-center justify-center">
              <el-icon class="animate-spin text-3xl text-blue-600"><loading /></el-icon>
            </div>
          </div>
          <!-- Navigation Arrows -->
          <div class="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <el-button 
              circle 
              class="pointer-events-auto bg-white shadow-md opacity-75 hover:opacity-100" 
              @click="scrollLeft"
            >
              <el-icon><arrow-left /></el-icon>
            </el-button>
            <el-button 
              circle 
              class="pointer-events-auto bg-white shadow-md opacity-75 hover:opacity-100" 
              @click="scrollRight"
            >
              <el-icon><arrow-right /></el-icon>
            </el-button>
          </div>
        </div>
  
        <!-- CTA -->
        <el-row justify="center" class="mt-12">
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
  import { Lightning, Cpu, Link, TopRight, Loading, ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
  import keyData from '../../data/key-data.json';
  
  export default {
    name: 'KeyData',
    components: {
      'el-icon-lightning': Lightning,
      'el-icon-cpu': Cpu,
      'el-icon-link': Link,
      'el-icon-top-right': TopRight,
      'loading': Loading,
      'arrow-left': ArrowLeft,
      'arrow-right': ArrowRight
    },
    data() {
      return {
        keyData: keyData,
        displayedData: [],
        batchSize: 4,
        isLoading: false,
        scrollPosition: 0,
        iconComponents: {
          'el-icon-lightning': 'el-icon-lightning',
          'el-icon-cpu': 'el-icon-cpu',
          'el-icon-link': 'el-icon-link',
          'el-icon-top-right': 'el-icon-top-right'
        }
      };
    },
    computed: {
      hasMoreData() {
        return this.displayedData.length < this.keyData.length;
      }
    },
    methods: {
      loadMore() {
        if (this.isLoading || !this.hasMoreData) return;
        
        this.isLoading = true;
        setTimeout(() => {
          const nextBatch = this.keyData.slice(
            this.displayedData.length,
            this.displayedData.length + this.batchSize
          );
          this.displayedData = [...this.displayedData, ...nextBatch];
          this.isLoading = false;
        }, 500);
      },
      handleScroll() {
        const container = this.$refs.scrollContainer;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        const scrollLeft = container.scrollLeft;
  
        // Load more when nearing the end
        if (scrollWidth - scrollLeft - clientWidth < 300 && this.hasMoreData) {
          this.loadMore();
        }
      },
      scrollLeft() {
        const container = this.$refs.scrollContainer;
        container.scrollBy({ left: -320, behavior: 'smooth' }); // 320px = card width + margin
      },
      scrollRight() {
        const container = this.$refs.scrollContainer;
        container.scrollBy({ left: 320, behavior: 'smooth' });
      }
    },
    created() {
      this.displayedData = this.keyData.slice(0, this.batchSize);
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
  }
  
  /* Horizontal Scroll Styling */
  .scrollbar-hidden {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  
  .scrollbar-hidden::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
  
  /* Animation for smooth slide-in */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-slide-in {
    animation: slideIn 0.5s ease-out forwards;
    animation-delay: calc(var(--index) * 0.1s);
  }
  
  @media (max-width: 768px) {
    .w-80 {
      width: 70vw;
    }
    
    .mx-4 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  </style>