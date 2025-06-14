<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <Header />
    
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-slate-50 opacity-60"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-slate-50 opacity-60"></div>
    
    <el-container>
      <!-- Hero Section -->
      <el-main class="py-32">
        <el-row justify="center">
          <el-col :span="22" :lg="18" :xl="16">
            <!-- Hero Content -->
            <div class="max-w-3xl mx-auto mb-32">
              <span class="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm mb-8 hover:bg-slate-200 transition-colors">
                Audit Automation Software
              </span>
              <h1 class="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight relative">
                Automate Your Audits with Intelligence and Speed
                <span class="absolute -bottom-3 left-0 w-24 h-1 bg-blue-600"></span>
              </h1>
              <p class="text-lg text-slate-600 leading-relaxed">
                Turn audits into a streamlined, insight-driven process. SARAS helps finance and compliance teams automate audit planning, execution, and documentation. With AI-powered risk detection and real-time visibility, SARAS reduces manual effort and improves audit outcomes across departments.
              </p>
            </div>

      
            <!-- Features Section -->
            <div class="space-y-16 mb-32">
              <el-row :gutter="48">
                <template v-for="(feature, index) in features" :key="index">
                  <el-col :span="24" :md="12" class="mb-8">
                    <el-card class="h-full border-0 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                      <div class="flex gap-6 p-2">
                        <div class="text-4xl flex-shrink-0 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center">
                          {{ feature.icon }}
                        </div>
                        <div>
                          <h3 class="text-xl font-semibold text-slate-900 mb-3">{{ feature.title }}</h3>
                          <p class="text-slate-600 leading-relaxed">{{ feature.description }}</p>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </template>
              </el-row>
            </div>

            <!-- Benefits & Target Section -->
            <div class="grid md:grid-cols-2 gap-12 mb-32">
              <!-- Benefits -->
              <div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-sm">
                <h2 class="text-2xl font-semibold text-slate-900 mb-8 relative inline-block">
                  Benefits
                  <span class="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600"></span>
                </h2>
                <el-space direction="vertical" :size="24" fill>
                  <div v-for="(benefit, index) in benefits" :key="index" 
                    class="flex items-start gap-4 group">
                    <div class="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-600 transition-colors">
                      <el-icon :color="'#475569'" class="group-hover:text-white"><Check /></el-icon>
                    </div>
                    <span class="text-slate-700">{{ benefit }}</span>
                  </div>
                </el-space>
              </div>

              <!-- Ideal For -->
              <div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-sm">
                <h2 class="text-2xl font-semibold text-slate-900 mb-8 relative inline-block">
                  Ideal For
                  <span class="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600"></span>
                </h2>
                <el-space direction="vertical" :size="24" fill>
                  <div v-for="(ideal, index) in idealFor" :key="index" 
                    class="flex items-start gap-4 group">
                    <div class="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-600 transition-colors">
                      <el-icon :color="'#475569'" class="group-hover:text-white"><Check /></el-icon>
                    </div>
                    <span class="text-slate-700">{{ ideal }}</span>
                  </div>
                </el-space>
              </div>
            </div>

            <!-- CTA Section -->
            <div class="max-w-2xl mx-auto text-center bg-slate-900 rounded-2xl p-12 transform hover:scale-[1.02] transition-transform">
              <h2 class="text-3xl font-semibold text-white mb-4">
                Ready to modernize your audit function?
              </h2>
              <p class="text-slate-300 mb-8">
                SARAS gives your audit team the tools to track, detect, and deliver with confidence — powered by AI.
              </p>
              <el-space>
                <el-button type="primary" size="large" 
                  class="px-8 py-3 text-base bg-blue-600 border-0 hover:bg-blue-700">
                  👉 Request a Demo
                </el-button>
                <el-button size="large" 
                  class="px-8 py-3 text-base border-slate-600 text-white hover:bg-slate-800">
                  Talk to an Audit Specialist
                </el-button>
              </el-space>
            </div>
            
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../layout/Header.vue';
import Footer from '../layout/Footer.vue';
import { Check } from '@element-plus/icons-vue';
import { 
  ElContainer, ElMain, ElRow, ElCol, ElCard, 
  ElButton, ElIcon, ElSpace 
} from 'element-plus';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🔎',
    title: 'Audit Readiness Tracker',
    description: 'Maintain a continuous state of audit readiness. SARAS monitors documentation health, detects gaps in compliance, and prepares your organization for internal or external audits.'
  },
  {
    icon: '⚠️',
    title: 'Risk Identification Engine',
    description: 'Automatically flag high-risk items, recurring control failures, and suspicious data patterns. SARAS helps auditors prioritize their focus where it matters most.'
  },
  {
    icon: '📊',
    title: 'Real-Time Audit Dashboards',
    description: 'Visualize the status of ongoing audits, assigned actions, and closure reports. Audit managers can track each phase — from initiation to follow-up — with full accountability.'
  },
  {
    icon: '📁',
    title: 'Smart Document Review',
    description: 'Leverage SARAS FileBot to analyze supporting documents, policies, and historical audit trails. Identify inconsistencies, incomplete data, or deviations from standard controls.'
  }
];

const benefits: string[] = [
  'Reduce audit cycle times with real-time tracking and automated reviews',
  'Ensure full traceability of every audit activity',
  'Minimize manual effort through automated flagging and document analysis',
  'Improve confidence in reporting and compliance alignment'
];

const idealFor: string[] = [
  'Internal audit teams in mid to large enterprises',
  'CFO offices and risk management departments',
  'Audit firms managing multi-client or cross-departmental reviews'
];
</script>
