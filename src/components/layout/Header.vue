<template>
<header class="fixed transform w-[100%] from-blue-700 to-blue-400 z-50 shadow-md rounded-2xls border border-gray-200">
  <el-row class="container mx-auto flex items-center justify-between">

    <!-- Logo -->
    <el-col class="flex" :span="4">
      <el-link @click="router.push('/')" :underline="false">
        <img src="../../assets/LOGO.png" alt="Saras" style="height: 40px; width: auto;" class="p-1"/>
        <span class="text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">Saras Finance</span>
      </el-link>
    </el-col>

    <!-- <nav class="hidden md:flex flex-grow justify-center space-x-6">
      <nav class="space-x-6 min-vh-100">
        <el-link href="/" :underline="false">Solutions</el-link>
      </nav>
    </nav> -->

    <!-- App and Contacts -->
    <div class="hidden md:flex items-center space-x-3 flex-shrink-0">
      <!-- <el-button @click="router.push('/solutions')" plain text round>Solutions</el-button> -->
      <!-- <el-button @click="router.push('/solutions')" plain text round>Products</el-button> -->
      <!-- <el-button @click="router.push('/solutions')" plain text round>Platform</el-button> -->
      <el-button @click="takeMeToApp" type="success" round>Go to Saras Portal</el-button>
      <el-button @click="router.push('/contact')" type="primary" round>Get Started</el-button>
    </div>

  </el-row>

</header>
</template>

<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();

const takeMeToApp = async () => {
  window.location.replace("https://app.sarasfinance.com/");
}

</script>

<style scoped>
/* Elevate Navbar with a Soft Shadow */
header {
  transition: box-shadow 0.2s ease-in-out;
  /* background-color: #FFFFFFF5; */
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(25px);
  z-index: 50;
  padding: 15px;
  border-radius: 4px;
}
</style>
