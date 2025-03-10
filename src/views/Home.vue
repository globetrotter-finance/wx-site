<script setup>
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
</script>

<template>
    <!-- <div className = "bg-primary  h-50 w-50"  ></div> -->
  <Header />
  <HeroSection />
  <FeatureSection />
  <KeyData/>
  <KeyData2/>
  <!-- <IndustryApplication/> -->
  <!-- <AgenticSolutionSection /> -->
  <!-- <TestimonialSection /> -->
  <CTASection />
  <OurTechnology/>
  <AboutUs/>
  <Footer />
</template>
