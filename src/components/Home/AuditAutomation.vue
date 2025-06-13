<template>
  <div>
    <Header />
    <el-container class="bg-gradient-to-br from-blue-50 via-white to-blue-50 font-sans min-h-screen py-24">
      <el-main>
        <el-row justify="center">
          <el-col :xs="24" :sm="20" :md="16" :lg="12" class="text-center">
            <el-text tag="h1" class="audit-title mb-8">
              Automate Your Audits with <span class="text-blue-600">Intelligence and Speed</span>
            </el-text>
            <el-text class="audit-desc mb-10">
              Turn audits into a streamlined, insight-driven process.<br>
              SARAS helps finance and compliance teams automate audit planning, execution, and documentation. With AI-powered risk detection and real-time visibility, SARAS reduces manual effort and improves audit outcomes across departments.
            </el-text>
            <el-divider content-position="center">Key Features</el-divider>
            <el-row :gutter="40" justify="center" align="stretch" class="audit-info-row mb-10">
              <el-col :xs="24" :sm="12" :md="6" class="audit-info-col mb-8">
                <el-icon color="#2563EB" class="audit-icon"><CircleCheckFilled /></el-icon>
                <div class="audit-label text-blue-700">Audit Readiness Tracker</div>
                <el-text class="audit-feature">Maintain a continuous state of audit readiness. SARAS monitors documentation health, detects gaps in compliance, and prepares your organization for internal or external audits.</el-text>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" class="audit-info-col mb-8">
                <el-icon color="#f87171" class="audit-icon"><CircleCheckFilled /></el-icon>
                <div class="audit-label text-red-500">Risk Identification Engine</div>
                <el-text class="audit-feature">Automatically flag high-risk items, recurring control failures, and suspicious data patterns. SARAS helps auditors prioritize their focus where it matters most.</el-text>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" class="audit-info-col mb-8">
                <el-icon color="#10b981" class="audit-icon"><CircleCheckFilled /></el-icon>
                <div class="audit-label text-green-600">Real-Time Audit Dashboards</div>
                <el-text class="audit-feature">Visualize the status of ongoing audits, assigned actions, and closure reports. Audit managers can track each phase — from initiation to follow-up — with full accountability.</el-text>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" class="audit-info-col mb-8">
                <el-icon color="#6366f1" class="audit-icon"><CircleCheckFilled /></el-icon>
                <div class="audit-label text-indigo-600">Smart Document Review</div>
                <el-text class="audit-feature">Leverage SARAS FileBot to analyze supporting documents, policies, and historical audit trails. Identify inconsistencies, incomplete data, or deviations from standard controls.</el-text>
              </el-col>
            </el-row>
            <el-divider content-position="center">Benefits</el-divider>
            <el-row justify="center" class="mb-10">
              <el-col :xs="24" :sm="20" :md="16" :lg="10">
                <el-card class="benefits-card mb-8">
                  <el-text class="benefits-list">
                    <ul>
                      <li>Reduce audit cycle times with real-time tracking and automated reviews</li>
                      <li>Ensure full traceability of every audit activity</li>
                      <li>Minimize manual effort through automated flagging and document analysis</li>
                      <li>Improve confidence in reporting and compliance alignment</li>
                    </ul>
                  </el-text>
                </el-card>
              </el-col>
            </el-row>
            <el-divider content-position="center">Ideal For</el-divider>
            <el-row justify="center" class="mb-10">
              <el-col :xs="24" :sm="20" :md="16" :lg="10">
                <el-card class="ideal-card mb-8">
                  <el-text class="ideal-list">
                    <ul>
                      <li>Internal audit teams in mid to large enterprises</li>
                      <li>CFO offices and risk management departments</li>
                      <li>Audit firms managing multi-client or cross-departmental reviews</li>
                    </ul>
                  </el-text>
                </el-card>
              </el-col>
            </el-row>
            <el-divider content-position="center"></el-divider>
            <el-row justify="center" class="mb-10">
              <el-col :xs="24" :sm="20" :md="16" :lg="10">
                <el-card class="cta-card mb-8">
                  <el-text class="cta-title">
                    Ready to modernize your audit function?<br>
                    SARAS gives your audit team the tools to track, detect, and deliver with confidence — powered by AI.
                  </el-text>
                  <div class="cta-actions mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <el-button type="primary" size="large" class="cta-btn">👉 Request a Demo</el-button>
                    <el-button type="info" size="large" plain class="cta-btn">Talk to an Audit Specialist</el-button>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../layout/Header.vue';
import Footer from '../layout/Footer.vue';
import { ElIcon, ElText, ElLink, ElDivider, ElContainer, ElMain, ElRow, ElCol, ElCard, ElButton } from 'element-plus';
import { CircleCheckFilled } from '@element-plus/icons-vue';
</script>

<style scoped>
.audit-title {
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: -1px;
  color: #1e293b;
  line-height: 1.1;
}
.audit-desc {
  font-size: 1.25rem;
  color: #334155;
  max-width: 600px;
  margin: 0 auto;
}
.audit-info-row {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  gap: 2.5rem;
}
.audit-info-col {
  background: rgba(255,255,255,0.95);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.06);
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  margin-bottom: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 210px;
  transition: box-shadow 0.2s;
  gap: 1.2rem;
}
.audit-info-col:hover {
  box-shadow: 0 8px 32px 0 rgba(37,99,235,0.10);
}
.audit-icon {
  font-size: 2.2rem;
  margin-bottom: 0.7rem;
}
.audit-label {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.audit-feature {
  font-size: 1.1rem;
  color: #334155;
  margin-bottom: 0.5rem;
  text-align: center;
}
.benefits-card, .ideal-card, .cta-card {
  margin-bottom: 2.5rem;
  padding: 2.5rem 2rem 3.5rem 2rem;
  gap: 1.2rem;
}
.benefits-card, .ideal-card {
  background: rgba(37,99,235,0.03);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08);
}
.benefits-list ul, .ideal-list ul {
  list-style: disc inside;
  margin: 0;
  padding: 0 0 0 1.2em;
  color: #334155;
  font-size: 1.1rem;
}
.cta-card {
  background: rgba(37,99,235,0.03);
  border-radius: 1.5rem;
  padding: 2.5rem 2rem 3.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08);
  margin-bottom: 2.5rem;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cta-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}
.cta-actions {
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.cta-btn {
  border-radius: 1.2rem;
  padding: 1.1rem 2.2rem;
  font-size: 1.1rem;
  min-width: 180px;
}
</style>
