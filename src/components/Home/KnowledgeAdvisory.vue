<template>
  <div>
    <Header />
    <el-container class="bg-gradient-to-br from-blue-50 via-white to-blue-50 font-sans min-h-screen py-24">
      <el-main>
        <el-row justify="center">
          <el-col :xs="24" :sm="20" :md="16" :lg="12" class="text-center">
            <el-text tag="h1" class="knowledge-title mb-8">
              AI-Powered <span class="text-blue-600">Enterprise Knowledge & Advisory System</span>
            </el-text>
            <el-text class="knowledge-desc mb-10">
              Preserve your team’s expertise. Retrieve answers instantly.<br>
              SARAS Knowledge & Advisory tools turn your internal documentation, legal resources, and research material into a living, searchable knowledge system — powered by intelligent AI assistants trained to understand law, tax, and regulations.
            </el-text>
            <el-divider content-position="center">Key Features</el-divider>
            <el-row :gutter="40" justify="center" align="stretch" class="knowledge-info-row">
              <el-col :xs="24" :sm="12" :md="6" class="knowledge-info-col mb-8">
                <el-icon color="#2563EB" class="knowledge-icon"><CircleCheckFilled /></el-icon>
                <div class="knowledge-label text-blue-700">Enterprise Knowledge Repository</div>
                <el-text class="knowledge-feature">Build and maintain a centralized knowledge base for your organization. Store everything from case law interpretations to advisory memos in one traceable, queryable system.</el-text>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" class="knowledge-info-col mb-8">
                <el-icon color="#6366f1" class="knowledge-icon"><CircleCheckFilled /></el-icon>
                <div class="knowledge-label text-indigo-600">AI-Powered Legal & Tax ChatBot</div>
                <el-text class="knowledge-feature">Ask SARAS a tax question — get a precise, statute-backed answer in seconds. The chatbot interprets tax acts, rules, and legal provisions in context, helping teams make quick, informed decisions.</el-text>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" class="knowledge-info-col mb-8">
                <el-icon color="#10b981" class="knowledge-icon"><CircleCheckFilled /></el-icon>
                <div class="knowledge-label text-green-600">FileBot: Smart Document Reading</div>
                <el-text class="knowledge-feature">Upload lengthy legal or financial documents — agreements, orders, notices — and ask contextual questions. FileBot extracts relevant answers based on your client’s facts and document content.</el-text>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" class="knowledge-info-col mb-8">
                <el-icon color="#eab308" class="knowledge-icon"><CircleCheckFilled /></el-icon>
                <div class="knowledge-label text-yellow-700">Context-Aware Q&A</div>
                <el-text class="knowledge-feature">No more Ctrl+F or digging through old files. SARAS answers your team’s questions by finding the right source from your internal documentation and previously handled matters.</el-text>
              </el-col>
            </el-row>
            <el-divider content-position="center">Benefits</el-divider>
            <el-row justify="center" class="mb-10">
              <el-col :xs="24" :sm="20" :md="16" :lg="10">
                <el-card class="benefits-card mb-8">
                  <el-text class="benefits-list">
                    <ul>
                      <li>Save 30–50% of research time across legal, tax, and audit functions</li>
                      <li>Reduce dependency on individual experts with institutionalized knowledge</li>
                      <li>Speed up onboarding by giving new team members a ready source of truth</li>
                      <li>Enhance audit readiness with traceable knowledge history</li>
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
                      <li>Legal and tax advisory firms with large knowledge repositories</li>
                      <li>Corporate law departments</li>
                      <li>Audit and compliance teams handling document-heavy cases</li>
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
                    Give your team instant access to everything your firm knows.<br>
                    SARAS turns complex documents and deep expertise into accessible, AI-powered answers.
                  </el-text>
                  <div class="cta-actions mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <el-button type="primary" size="large" class="cta-btn">👉 Request a Demo</el-button>
                    <el-button type="info" size="large" plain class="cta-btn">Explore Knowledge Platform</el-button>
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
.knowledge-title {
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: -1px;
  color: #1e293b;
  line-height: 1.1;
}
.knowledge-desc {
  font-size: 1.25rem;
  color: #334155;
  max-width: 600px;
  margin: 0 auto;
}
.knowledge-info-row {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  gap: 2.5rem;
}
.knowledge-info-col {
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
.knowledge-info-col:hover {
  box-shadow: 0 8px 32px 0 rgba(37,99,235,0.10);
}
.knowledge-icon {
  font-size: 2.2rem;
  margin-bottom: 0.7rem;
}
.knowledge-label {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.knowledge-feature {
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
