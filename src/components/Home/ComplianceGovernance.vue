<template>
  <div>
    <Header />
    <el-container class="bg-gradient-to-br from-blue-50 via-white to-blue-50 font-sans min-h-screen py-24">
      <el-main>
        <el-row justify="center">
          <el-col :xs="24" :sm="20" :md="16" :lg="12" class="text-center">
            <el-text tag="h1" class="compliance-title mb-8">
              Enterprise-Grade <span class="text-blue-600">Compliance, Risk & Governance</span> Management
            </el-text>
            <el-text class="compliance-desc mb-10">
              Track, manage, and automate regulatory and internal compliance with SARAS. Real-time dashboards and governance tools for audit readiness.
            </el-text>
            <el-divider content-position="center">Why SARAS for Compliance?</el-divider>
            <el-row :gutter="40" justify="center" align="stretch" class="compliance-info-row">
              <el-col :xs="24" :sm="12" :md="8" class="compliance-info-col mb-8">
                <el-icon color="#2563EB" class="compliance-icon"><CircleCheckFilled /></el-icon>
                <div class="compliance-label text-blue-700">Automated Compliance Tracking</div>
                <el-text class="compliance-feature">Stay audit-ready with automated reminders, document management, and compliance calendars.</el-text>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" class="compliance-info-col mb-8">
                <el-icon color="#22c55e" class="compliance-icon"><CircleCheckFilled /></el-icon>
                <div class="compliance-label text-green-700">Risk & Governance Dashboard</div>
                <el-text class="compliance-feature">Visualize risk exposure and governance status in real time with powerful dashboards.</el-text>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" class="compliance-info-col mb-8">
                <el-icon color="#eab308" class="compliance-icon"><CircleCheckFilled /></el-icon>
                <div class="compliance-label text-yellow-700">Regulatory Updates</div>
                <el-text class="compliance-feature">Get instant alerts on regulatory changes and ensure your enterprise is always compliant.</el-text>
              </el-col>
            </el-row>
            <el-divider content-position="center">Get Started</el-divider>
            <el-row justify="center" class="mb-10">
              <el-col :xs="24" :sm="20" :md="16" :lg="10">
                <el-card class="cta-card mb-8">
                  <el-text class="cta-title">
                    Ready to transform your compliance management?
                  </el-text>
                  <div class="cta-actions mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <el-button type="primary" size="large" class="cta-btn">Request a Demo</el-button>
                    <el-button type="info" size="large" plain class="cta-btn">Contact Sales</el-button>
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
.compliance-title {
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: -1px;
  color: #1e293b;
  line-height: 1.1;
}
.compliance-desc {
  font-size: 1.25rem;
  color: #334155;
  max-width: 600px;
  margin: 0 auto;
}
.compliance-info-row {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  gap: 2.5rem;
}
.compliance-info-col {
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
.compliance-info-col:hover {
  box-shadow: 0 8px 32px 0 rgba(37,99,235,0.10);
}
.compliance-icon {
  font-size: 2.2rem;
  margin-bottom: 0.7rem;
}
.compliance-label {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.compliance-feature {
  font-size: 1.1rem;
  color: #334155;
  margin-bottom: 0.5rem;
  text-align: center;
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
