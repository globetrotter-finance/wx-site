<script setup>
import { useHead } from '@vueuse/head';
import Header from '../components/layout/Header.vue';
import HeroSection from '../components/Home/HeroSection.vue';
import FeatureSection from '../components/Home/FeatureSection.vue';
import AgenticSolutionSection from '../components/Home/AgenticSolutionSection.vue';
import TestimonialSection from '../components/Home/TestimonialSection.vue';
import CTASection from '../components/Home/CTASection.vue';
import Footer from '../components/layout/Footer.vue';
import AboutUs from '../components/Home/AboutUs.vue';
import OurTechnology from '../components/Home/OurTechnology.vue';
import IndustryApplication from '../components/Home/IndustryApplication.vue';
import KeyData from '../components/Home/KeyData.vue';
import KeyData2 from '../components/Home/KeyData2.vue';

useHead({
  title: 'Saras Finance | AI-Powered Legal, Compliance & Finance Platform',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Simplify litigation, compliance, and audits with SARAS - the AI-driven platform for legal, audit, and finance teams. ISO 27001 certified company.'
    },
    {
      name: 'keywords',
      content: 'legal automation, compliance management software, litigation AI, audit workflow, tax AI, ISO 27001 legal tech, legal tech India'
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Saras Finance | AI-Powered Legal, Compliance & Finance Platform' },
    { property: 'og:description', content: 'SARAS empowers legal, audit and finance professionals with automated workflows, compliance dashboards, and legal intelligence.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://sarasfinance.com/' },
    { property: 'og:image', content: 'https://www.yourdomain.com/og-image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://sarasfinance.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Agentic Solutions',
        'url': 'https://sarasfinance.com/',
        'logo': 'https://www.yourdomain.com/logo.png', // Replace with your logo URL
        'description': 'Simplify litigation, compliance, and audits with SARAS - the AI-driven platform for legal, audit, and finance teams. ISO 27001 certified company.'
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Auto Workflow Builder',
        'brand': {
          '@type': 'Brand',
          'name': 'Agentic Solutions'
        },
        'description': 'A no-code platform to automate workflows, cutting process validation from months to minutes.',
        'url': 'https://sarasfinance.com/'
      })
    }
  ]
});
</script>

<template>
  <Header />
  <HeroSection />
  <FeatureSection />
  <KeyData />
  <!-- <KeyData2 /> -->
  <!-- <IndustryApplication /> -->
  <!-- <AgenticSolutionSection /> -->
  <!-- <TestimonialSection /> -->
  <!-- <CTASection /> -->
  <!-- <OurTechnology /> -->
  <AboutUs />
  <Footer />
</template>