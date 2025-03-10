<template>
    <div class="agentic-solutions-page bg-gray-50 min-h-screen">
      <!-- Intro (Full-Page Hero) Section -->
      <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24 px-4 relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
          <div class="absolute bottom-20 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
          <div class="absolute -bottom-20 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
        </div>
  
        <div class="container mx-auto max-w-6xl relative z-10">
          <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div class="w-full lg:w-1/2 space-y-8">
              <div class="space-y-6">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span class="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">Agentic</span>
                  <span class="relative inline-block">
                    Solutions
                    <span class="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-blue-500 opacity-30 rounded-full"></span>
                  </span>
                </h1>
                <p class="text-gray-600 text-lg md:text-xl max-w-lg">
                  Harness the power of AI-driven automation. Build and deploy intelligent workflows instantly—crafted for your business, designed for the future.
                </p>
              </div>
              <div class="flex items-center gap-8 py-4">
                <div class="flex items-center gap-2">
                  <span class="text-blue-600 font-bold text-2xl">500+</span>
                  <span class="text-gray-500 text-sm">Integrations</span>
                </div>
                <div class="h-8 w-px bg-gray-200"></div>
                <div class="flex items-center gap-2">
                  <span class="text-blue-600 font-bold text-2xl">5 min</span>
                  <span class="text-gray-500 text-sm">Setup</span>
                </div>
                <div class="h-8 w-px bg-gray-200"></div>
                <div class="flex items-center gap-2">
                  <span class="text-blue-600 font-bold text-2xl">24/7</span>
                  <span class="text-gray-500 text-sm">Automation</span>
                </div>
              </div>
              <div class="flex flex-wrap gap-4">
                <el-button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1">
                  Get Started
                </el-button>
                <el-button class="bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-medium py-3 px-8 rounded-lg shadow-sm transition duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                  Watch Demo
                </el-button>
              </div>
            </div>
  
            <div class="w-full lg:w-1/2">
              <div class="relative mx-auto max-w-md">
                <div class="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div class="absolute top-0 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                
                <div class="relative z-10 bg-white rounded-2xl shadow-xl p-2 border border-gray-100">
                  <div class="bg-gray-50 rounded-t-xl border-b border-gray-100 py-2 px-4 flex items-center">
                    <div class="flex space-x-1.5">
                      <div class="w-3 h-3 rounded-full bg-red-400"></div>
                      <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div class="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div class="mx-auto bg-white rounded-md py-1 px-3 text-xs text-gray-500 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      agentic.yourcompany.com
                    </div>
                  </div>
                  <img src="https://via.placeholder.com/450x300?text=Agentic+Dashboard" alt="Dashboard Preview" class="w-full h-auto rounded-b-xl">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Benefits Section -->
      <section class="py-32 px-6">
        <div class="container mx-auto max-w-6xl">
          <h2 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">Why Choose Agentic Solutions?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div v-for="(benefit, index) in benefits" :key="index" class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div class="text-blue-600 mb-6">
                <component :is="benefit.icon" class="w-10 h-10" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ benefit.title }}</h3>
              <p class="text-gray-600 text-lg">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- How It Works Section -->
      <section class="py-32 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div class="container mx-auto max-w-6xl">
          <h2 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">How It Works</h2>
          <div class="flex flex-col md:flex-row items-center justify-between gap-12">
            <div class="w-full md:w-1/2 space-y-8">
              <el-steps :active="activeStep" finish-status="success" class="max-w-lg mx-auto">
                <el-step title="Sign Up" description="Begin your journey with a quick and seamless onboarding experience." />
                <el-step title="Configure" description="Easily set up your AI agent with intuitive prompts." />
                <el-step title="Integrate" description="Connect with 500+ tools like Slack, Zoom, and more effortlessly." />
                <el-step title="Launch" description="Go live in under 5 minutes—automation starts immediately." />
              </el-steps>
              <div class="text-center">
                <el-button @click="nextStep" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1">
                  Next Step
                </el-button>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="relative mx-auto max-w-md">
                <div class="relative z-10 bg-white rounded-2xl shadow-xl p-2 border border-gray-100">
                  <img src="https://via.placeholder.com/500x300?text=Workflow+Preview" alt="Agentic Workflow" class="w-full h-auto rounded-xl">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="py-32 px-6">
        <div class="container mx-auto max-w-6xl">
          <h2 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">Core Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div v-for="(feature, index) in features" :key="index" class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h3 class="text-xl font-semibold text-blue-700 mb-4">{{ feature.title }}</h3>
              <p class="text-gray-600 text-lg">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section class="py-32 px-6 bg-gradient-to-br from-white to-blue-50">
        <div class="container mx-auto max-w-6xl">
          <h2 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">What Our Clients Say</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <p class="text-lg text-gray-600 mb-4">“{{ testimonial.quote }}”</p>
              <h4 class="font-semibold text-blue-700">{{ testimonial.name }}</h4>
              <span class="text-gray-500">{{ testimonial.position }}</span>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-32 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div class="container mx-auto max-w-6xl text-center space-y-8">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900">Elevate Your Workflow</h2>
          <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">Experience the future of automation with Agentic Solutions—trusted by thousands to streamline operations and achieve success.</p>
          <el-button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-10 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1">
            Try It Free
          </el-button>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { ElButton, ElSteps, ElStep } from 'element-plus';
  import { HomeFilled, Clock, Link } from '@element-plus/icons-vue';
  
  export default {
    name: 'AgenticSolutionsPage',
    components: {
      ElButton,
      ElSteps,
      ElStep,
      HomeFilled,
      Clock,
      Link
    },
    data() {
      return {
        activeStep: 0,
        benefits: [
          {
            title: 'Lightning-Fast Deployment',
            description: 'Launch sophisticated automation in just 5 minutes with an effortless setup process.',
            icon: 'HomeFilled'
          },
          {
            title: 'Unmatched Integrations',
            description: 'Seamlessly connect with 500+ tools—Slack, HubSpot, Zoom, and beyond.',
            icon: 'Link'
          },
          {
            title: 'Non-Stop Automation',
            description: 'Empower your business with AI agents that work tirelessly 24/7.',
            icon: 'Clock'
          }
        ],
        features: [
          { title: 'Legal Solutions', description: 'Automate due diligence and tax reconciliation with precision and speed.' },
          { title: 'Email Management', description: 'Master your inbox with intelligent sorting and responses.' },
          { title: 'Customer Management', description: 'Enhance CRM with automated data entry and actionable insights.' },
          { title: 'Support Automation', description: 'Deliver instant, reliable customer support with AI precision.' },
          { title: 'Scheduling', description: 'Sync calendars and manage tasks across platforms effortlessly.' },
          { title: 'Job Automation', description: 'Eliminate repetitive tasks with smart, scalable workflows.' }
        ],
        testimonials: [
          {
            quote: 'Agentic Solutions transformed our workflow and saved us countless hours!',
            name: 'Alice Johnson',
            position: 'Operations Manager'
          },
          {
            quote: 'The integration process was seamless, and the support was outstanding.',
            name: 'Michael Smith',
            position: 'CTO'
          },
          {
            quote: 'Our team is now more productive than ever thanks to Agentic!',
            name: 'Sarah Williams',
            position: 'Project Lead'
          }
        ]
      };
    },
    methods: {
      nextStep() {
        if (this.activeStep < 3) {
          this.activeStep++;
        } else {
          this.activeStep = 0;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .agentic-solutions-page {
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }
  
  h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
  }
  
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  button:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  </style>