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
  title: 'Workflows X - AI-Powered Workflow Automation',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Transform workflows with Agentic Solutions’ AI agents. Reduce process times from months to minutes for Fintech, Legal, Healthcare, and more.'
    },
    {
      name: 'keywords',
      content: 'workflow automation, AI agents, Agentic Solutions, no-code platform, productivity tools'
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Agentic Solutions - AI-Powered Workflow Automation' },
    { property: 'og:description', content: 'Revolutionize your workflows with AI. Build and launch in 10 minutes—no coding needed!' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.yourdomain.com/' }, 
    { property: 'og:image', content: 'https://www.yourdomain.com/og-image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.yourdomain.com/' } 
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Agentic Solutions',
        'url': 'https://www.yourdomain.com/',
        'logo': 'https://www.yourdomain.com/logo.png', // Replace with your logo URL
        'description': 'Agentic Solutions empowers businesses with AI-powered workflow automation, reducing process times and boosting efficiency across industries.'
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
        'url': 'https://www.yourdomain.com/'
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