<template>
  <el-container class="min-h-screen bg-white relative overflow-hidden">
    <Header />
    
    <!-- Background decoration -->
    <el-card class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-slate-50 opacity-60" :body-style="{ padding: 0 }" shadow="never" />
    <el-card class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-slate-50 opacity-60" :body-style="{ padding: 0 }" shadow="never" />
    
    <el-container>
      <!-- Hero Section -->
      <el-main class="py-32">
        <el-row justify="center">
          <el-col :span="22" :lg="18" :xl="16">
            <!-- Hero Content -->
            <el-card class="max-w-3xl mx-auto mb-32" shadow="never" :body-style="{ padding: 0 }">
              <el-tag 
                class="px-4 py-2 rounded-full bg-slate-100 text-slate-600 mb-8 hover:bg-slate-200 transition-colors"
                effect="plain"
                size="large">
                Audit Automation Software
              </el-tag>
              <el-text tag="h1" class="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight relative block">
                Automate Your Audits with Intelligence and Speed
                <el-divider class="absolute -bottom-3 left-0 w-24 border-blue-600 border-t-2" />
              </el-text>
              <el-text class="text-lg text-slate-600 leading-relaxed block">
                Turn audits into a streamlined, insight-driven process. SARAS helps finance and compliance teams automate audit planning, execution, and documentation. With AI-powered risk detection and real-time visibility, SARAS reduces manual effort and improves audit outcomes across departments.
              </el-text>
            </el-card>

            <!-- Features Section -->
            <el-space direction="vertical" :size="32" class="w-full mb-32">
              <el-row :gutter="48">
                <template v-for="(feature, index) in features" :key="index">
                  <el-col :span="24" :md="12" class="mb-8">
                    <el-card class="h-full border-0 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                      <el-space :size="24" alignment="flex-start">
                        <el-card class="text-4xl flex-shrink-0 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center" shadow="never">
                          {{ feature.icon }}
                        </el-card>
                        <el-space direction="vertical" :size="12">
                          <el-text tag="h3" class="text-xl font-semibold text-slate-900">
                            {{ feature.title }}
                          </el-text>
                          <el-text class="text-slate-600 leading-relaxed">
                            {{ feature.description }}
                          </el-text>
                        </el-space>
                      </el-space>
                    </el-card>
                  </el-col>
                </template>
              </el-row>
            </el-space>

            <!-- Benefits & Target Section -->
            <el-row :gutter="48" class="mb-32">
              <!-- Benefits -->
              <el-col :span="24" :md="12">
                <el-card class="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-sm h-full" :body-style="{ padding: '2rem' }">
                  <template #header>
                    <el-text tag="h2" class="text-2xl font-semibold text-slate-900 relative inline-block">
                      Benefits
                      <el-divider class="absolute -bottom-2 left-0 w-12 border-blue-600 border-t-2" />
                    </el-text>
                  </template>
                  <el-space direction="vertical" :size="24" fill>
                    <el-space v-for="(benefit, index) in benefits" 
                      :key="index" 
                      :size="16"
                      alignment="flex-start"
                      class="group">
                      <el-card class="w-8 h-8 rounded-lg bg-white shadow-sm flex-shrink-0 group-hover:bg-blue-600 transition-colors" 
                        :body-style="{ padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }" 
                        shadow="never">
                        <el-icon :color="'#475569'" class="group-hover:text-white"><Check /></el-icon>
                      </el-card>
                      <el-text class="text-slate-700">{{ benefit }}</el-text>
                    </el-space>
                  </el-space>
                </el-card>
              </el-col>

              <!-- Ideal For -->
              <el-col :span="24" :md="12">
                <el-card class="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-sm h-full" :body-style="{ padding: '2rem' }">
                  <template #header>
                    <el-text tag="h2" class="text-2xl font-semibold text-slate-900 relative inline-block">
                      Ideal For
                      <el-divider class="absolute -bottom-2 left-0 w-12 border-blue-600 border-t-2" />
                    </el-text>
                  </template>
                  <el-space direction="vertical" :size="24" fill>
                    <el-space v-for="(ideal, index) in idealFor" 
                      :key="index" 
                      :size="16"
                      alignment="flex-start"
                      class="group">
                      <el-card class="w-8 h-8 rounded-lg bg-white shadow-sm flex-shrink-0 group-hover:bg-blue-600 transition-colors" 
                        :body-style="{ padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }" 
                        shadow="never">
                        <el-icon :color="'#475569'" class="group-hover:text-white"><Check /></el-icon>
                      </el-card>
                      <el-text class="text-slate-700">{{ ideal }}</el-text>
                    </el-space>
                  </el-space>
                </el-card>
              </el-col>
            </el-row>

            <!-- CTA Section -->
            <el-card class="max-w-2xl mx-auto text-center bg-slate-900 rounded-2xl transform hover:scale-[1.02] transition-transform" :body-style="{ padding: '3rem' }">
              <el-text tag="h2" class="text-3xl font-semibold text-white mb-4 block">
                Ready to modernize your audit function?
              </el-text>
              <el-text class="text-slate-300 mb-8 block">
                SARAS gives your audit team the tools to track, detect, and deliver with confidence — powered by AI.
              </el-text>
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
            </el-card>
            
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <Footer />
  </el-container>
</template>

<script setup lang="ts">
import Header from '../layout/Header.vue';
import Footer from '../layout/Footer.vue';
import { Check } from '@element-plus/icons-vue';
import { 
  ElContainer, ElMain, ElRow, ElCol, ElCard, ElButton, 
  ElIcon, ElSpace, ElText, ElTag, ElDivider 
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
