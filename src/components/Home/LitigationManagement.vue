<template>
  <div>
    <Header />
    <el-container class="bg-gradient-to-br from-blue-50 via-white to-blue-50 font-sans min-h-screen py-24">
      <el-main>
        <el-row justify="center">
          <el-col :xs="24" :sm="20" :md="16" :lg="12" class="text-center">
            <el-text tag="h1" class="litigation-title mb-8">
              AI-Powered <span class="text-blue-600">Litigation Management Software</span>
            </el-text>
            <el-text class="litigation-desc mb-10">
              Manage legal complexities with speed, structure, and intelligence.<br>
              SARAS redefines litigation workflows for modern legal and finance teams by consolidating all notices, research, and drafting into one AI-enabled workspace. Whether you’re responding to tax notices or preparing counter-arguments, SARAS saves 100+ man-hours per case.
            </el-text>
            <el-divider content-position="center">Key Features</el-divider>
            <el-row :gutter="40" justify="center" align="stretch" class="litigation-info-row">
              <el-col :xs="24" :sm="12" :md="6" class="litigation-info-col mb-8">
                <el-icon color="#2563EB" class="litigation-icon"><CircleCheckFilled /></el-icon>
                <div class="litigation-label text-blue-700">Automated Notice Management</div>
                <el-text class="litigation-feature">Automatically fetch notices from GST, Income Tax, and other legal portals. Organize them in a centralized dashboard for easy tracking, response, and audit readiness.</el-text>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" class="litigation-info-col mb-8">
                <el-icon color="#6366f1" class="litigation-icon"><CircleCheckFilled /></el-icon>
                <div class="litigation-label text-indigo-600">AI-Powered Notice Analysis</div>
                <el-text class="litigation-feature">Turn complex legal documents into actionable insights. SARAS summarizes content, highlights key legal points, and recommends a clear course of action — all with contextual understanding.</el-text>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" class="litigation-info-col mb-8">
                <el-icon color="#10b981" class="litigation-icon"><CircleCheckFilled /></el-icon>
                <div class="litigation-label text-green-600">Legal Research & Drafting Assistance</div>
                <el-text class="litigation-feature">Search for relevant case laws based on client fact patterns. Generate counter-arguments or legal response drafts in minutes, with references to applicable rulings and statutes.</el-text>
              </el-col>
            </el-row>
            <el-divider content-position="center">Benefits</el-divider>
            <el-row justify="center" class="mb-10">
              <el-col :xs="24" :sm="20" :md="16" :lg="10">
                <el-card class="benefits-card mb-8">
                  <el-text class="benefits-list">
                    <ul>
                      <li>Save time and reduce manual review effort with intelligent automation</li>
                      <li>Centralize and organize all litigation and compliance notices</li>
                      <li>Accelerate response drafting with AI-suggested templates and arguments</li>
                      <li>Improve accuracy through fact-aware legal research</li>
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
                      <li>Legal and tax advisory firms</li>
                      <li>In-house legal teams handling high notice volumes</li>
                      <li>Litigation support teams in finance or consulting sectors</li>
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
                    Give your legal team a smarter way to manage cases.<br>
                    With SARAS, litigation becomes faster, smarter, and easier to manage.
                  </el-text>
                  <div class="cta-actions mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <el-button type="primary" size="large" class="cta-btn">👉 Request a Demo</el-button>
                    <el-button type="info" size="large" plain class="cta-btn">Explore Litigation Tools</el-button>
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
.litigation-title {
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: -1px;
  color: #1e293b;
  line-height: 1.1;
}
.litigation-desc {
  font-size: 1.25rem;
  color: #334155;
  max-width: 600px;
  margin: 0 auto;
}
.litigation-info-row {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  gap: 2.5rem;
}
.litigation-info-col {
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
.litigation-info-col:hover {
  box-shadow: 0 8px 32px 0 rgba(37,99,235,0.10);
}
.litigation-icon {
  font-size: 2.2rem;
  margin-bottom: 0.7rem;
}
.litigation-label {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.litigation-feature {
  font-size: 1.1rem;
  color: #334155;
  margin-bottom: 0.5rem;
  text-align: center;
}
.benefits-card, .ideal-card {
  background: rgba(37,99,235,0.03);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08);
  margin-bottom: 2.5rem;
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
