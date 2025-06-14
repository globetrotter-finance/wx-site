<template>
  <div>
    <Header />
    <el-container class="bg-gradient-to-br from-blue-50 via-white to-blue-50 font-sans min-h-screen py-24">
      <el-main>
        <el-row justify="center">
          <el-col :xs="24" :sm="20" :md="16" :lg="12" class="text-center">
            <el-text tag="h1" class="contact-title mb-8">
              <span class="block">Get in Touch</span>
              <span class="block text-blue-600 mt-2">with the SARAS Team</span>
            </el-text>
            <el-text class="contact-desc mb-10">
              Whether you’re exploring automation for legal operations, planning a compliance overhaul, or want to see SARAS in action — we’re ready to help.
            </el-text>
            <el-divider content-position="center">Contact Information</el-divider>
            <el-row :gutter="40" justify="center" align="stretch" class="contact-info-row">
              <el-col :xs="24" :sm="12" :md="8" class="contact-info-col">
                <el-icon color="#2563EB" class="contact-icon"><CircleCheckFilled /></el-icon>
                <div class="contact-label text-blue-700">Sales & Demo</div>
                <el-link href="mailto:sales@sarasfinance.com" type="primary" class="contact-link">sales@sarasfinance.com</el-link>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" class="contact-info-col">
                <el-icon color="#22c55e" class="contact-icon"><CircleCheckFilled /></el-icon>
                <div class="contact-label text-green-700">Support</div>
                <el-link href="mailto:support@sarasfinance.com" type="success" class="contact-link">support@sarasfinance.com</el-link>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" class="contact-info-col">
                <el-icon color="#eab308" class="contact-icon"><CircleCheckFilled /></el-icon>
                <div class="contact-label text-yellow-700">Phone</div>
                <el-link href="tel:+919501289879" type="warning" class="contact-link">+91-95012 89879</el-link>
              </el-col>
            </el-row>
            <el-divider content-position="center">Office Address</el-divider>
            <el-row justify="center">
              <el-col :xs="24" :sm="20" :md="16" :lg="10">
                <el-text class="address-text">
                  <span class="font-bold">Globetrotter Finance Pvt. Ltd.</span><br />
                  [Full Address Here]<br />
                  India
                </el-text>
              </el-col>
            </el-row>
            <el-divider content-position="center">Book a Demo</el-divider>
            <el-row justify="center" class="mb-10">
              <el-col :xs="24" :sm="20" :md="16" :lg="10">
                <el-card class="demo-card mb-10">
                  <el-text class="demo-title">
                    <el-icon color="#2563EB"><CircleCheckFilled /></el-icon> Book a Demo
                  </el-text>
                  <el-text class="demo-desc">
                    Use our <b>Request Demo</b> form to schedule a personalized walkthrough of the SARAS platform with our product specialists.
                  </el-text>
                  <el-button type="primary" size="large" class="mt-6 w-full demo-btn">Request a Demo</el-button>
                </el-card>
              </el-col>
            </el-row>
            <el-divider content-position="center">Partnerships & Media</el-divider>
            <el-row justify="center" class="mb-10">
              <el-col :xs="24" :sm="20" :md="16" :lg="10">
                <el-card class="partnership-card mb-10">
                  <el-text class="partnership-title">
                    <el-icon color="#6366f1"><CircleCheckFilled /></el-icon> Partnerships & Media
                  </el-text>
                  <el-text class="partnership-desc">
                    Interested in collaborating or covering SARAS? Reach out at
                    <el-link href="mailto:partnerships@sarasplatform.com" type="info" class="inline-link">partnerships@sarasplatform.com</el-link>
                  </el-text>
                </el-card>
              </el-col>
            </el-row>
            <el-divider content-position="center"></el-divider>
            <el-row justify="center" class="mb-10">
              <el-col :xs="24" :sm="20" :md="16" :lg="10">
                <el-card class="cta-card mb-10">
                  <el-text class="cta-title">
                    We’re here to simplify your workflow — let’s connect.
                  </el-text>
                  <div class="cta-actions mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <el-button type="primary" size="large" class="cta-btn">👉 Request a Demo</el-button>
                    <el-button type="info" size="large" plain class="cta-btn">Write to Us</el-button>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import Header from '../layout/Header.vue';
import Footer from '../layout/Footer.vue';
import { ElIcon, ElText, ElLink, ElDivider, ElContainer, ElMain, ElRow, ElCol, ElCard, ElButton } from 'element-plus';
import { CircleCheckFilled } from '@element-plus/icons-vue';
</script>

<style scoped>
.contact-title {
  font-size: 3.2rem;
  font-weight: 900;
  letter-spacing: -1px;
  color: #1e293b;
  line-height: 1.1;
}
.contact-desc {
  font-size: 1.3rem;
  color: #334155;
  max-width: 700px;
  margin: 0 auto;
}
.contact-info-row {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
.contact-info-col {
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
.contact-info-col:hover {
  box-shadow: 0 8px 32px 0 rgba(37,99,235,0.10);
}
.contact-icon {
  font-size: 2.2rem;
  margin-bottom: 0.7rem;
}
.contact-label {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.contact-link {
  font-size: 1.1rem;
  font-weight: 500;
  word-break: break-all;
  margin-bottom: 0.5rem;
}
.address-text {
  font-size: 1.15rem;
  color: #334155;
  line-height: 1.7;
  background: rgba(255,255,255,0.95);
  border-radius: 1.2rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 2px 12px 0 rgba(37,99,235,0.07);
  margin-top: 1.5rem;
  display: block;
}
.demo-card, .partnership-card, .cta-card {
  margin-bottom: 2.5rem;
}
</style>
