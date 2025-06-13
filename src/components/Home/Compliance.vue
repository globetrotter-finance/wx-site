<template>
  <el-container class="bg-gradient-to-br from-blue-50 via-white to-blue-50 font-sans min-h-screen py-24">
    <el-main>
      <!-- SEO Meta Tags -->
      <head>
        <title>Compliance Management Software for Enterprises | SARAS</title>
        <meta name="description" content="Track, manage, and automate regulatory and internal compliance with SARAS. Real-time dashboards and governance tools for audit readiness.">
        <meta name="keywords" content="compliance management software, risk governance platform, regulatory compliance India, enterprise compliance tracking, audit-ready compliance system">
      </head>
      <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" class="text-center">
          <el-text tag="h1" class="compliance-title mb-8">
            Enterprise-Grade <span class="text-blue-600">Compliance, Risk & Governance</span> Management
          </el-text>
          <el-text class="compliance-desc mb-10">
            Track, manage, and automate regulatory and internal compliance with SARAS. Real-time dashboards and governance tools for audit readiness.
          </el-text>
          <el-divider content-position="center">Why SARAS for Compliance?</el-divider>
          <el-row :gutter="40" justify="center" align="stretch" class="feature-row">
            <el-col :xs="24" :sm="12" :md="8" class="feature-col">
              <el-icon color="#2563EB" class="feature-icon"><i class="el-icon-s-data"></i></el-icon>
              <div class="feature-label text-blue-700">Automated Compliance Tracking</div>
              <div class="feature-desc">Stay audit-ready with automated reminders, document management, and compliance calendars.</div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" class="feature-col">
              <el-icon color="#22c55e" class="feature-icon"><i class="el-icon-s-platform"></i></el-icon>
              <div class="feature-label text-green-700">Risk & Governance Dashboard</div>
              <div class="feature-desc">Visualize risk exposure and governance status in real time with powerful dashboards.</div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" class="feature-col">
              <el-icon color="#eab308" class="feature-icon"><i class="el-icon-s-check"></i></el-icon>
              <div class="feature-label text-yellow-700">Regulatory Updates</div>
              <div class="feature-desc">Get instant alerts on regulatory changes and compliance requirements for your industry.</div>
            </el-col>
          </el-row>
          <el-divider content-position="center">Key Benefits</el-divider>
          <el-row :gutter="40" justify="center" align="stretch" class="benefit-row">
            <el-col :xs="24" :sm="12" :md="8" class="benefit-col">
              <div class="benefit-label">Enterprise Compliance Tracking</div>
              <div class="benefit-desc">Centralize all compliance activities and documentation for easy access and reporting.</div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" class="benefit-col">
              <div class="benefit-label">Audit-Ready System</div>
              <div class="benefit-desc">Be prepared for audits at any time with complete, up-to-date records and logs.</div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" class="benefit-col">
              <div class="benefit-label">Regulatory Compliance India</div>
              <div class="benefit-desc">Built for Indian regulatory frameworks and global best practices.</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { ElIcon, ElText, ElDivider, ElContainer, ElMain, ElRow, ElCol } from 'element-plus';
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
  max-width: 700px;
  margin: 0 auto;
}
.feature-row, .benefit-row {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
.feature-col, .benefit-col {
  background: rgba(255,255,255,0.95);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.06);
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 210px;
  transition: box-shadow 0.2s;
}
.feature-col:hover, .benefit-col:hover {
  box-shadow: 0 8px 32px 0 rgba(37,99,235,0.10);
}
.feature-icon {
  font-size: 2.2rem;
  margin-bottom: 0.7rem;
}
.feature-label, .benefit-label {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
}
.feature-desc, .benefit-desc {
  font-size: 1.1rem;
  color: #334155;
  text-align: center;
}
</style>
