<script setup>
import AgenticSolutionSection from './components/Home/AgenticSolutionSection.vue';
import CTASection from './components/Home/CTASection.vue';
import FeatureSection from './components/Home/FeatureSection.vue';
import HeroSection from './components/Home/HeroSection.vue';
import Integration from './components/Home/Integration.vue';
import TestimonialSection from './components/Home/TestimonialSection.vue';
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';
</script>

<template>
  <Header></Header>
  <!-- <Integration></Integration> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <HeroSection></HeroSection>
  <FeatureSection></FeatureSection>
  <AgenticSolutionSection></AgenticSolutionSection>

  <TestimonialSection></TestimonialSection>
  <CTASection></CTASection>
  <Footer></Footer> 
</template>

<style >

</style>
