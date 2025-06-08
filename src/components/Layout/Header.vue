<template>
<header class="fixed top-4 left-1/2 transform -translate-x-1/2 w-[80%] z-50 bg-white shadow-md rounded-2xl px-6 py-3 border border-gray-200">
  <el-row class="container mx-auto flex items-center justify-between">

    <!-- Logo -->
    <el-col class="flex" :span="4">
      <el-link @click="router.push('/')" :underline="false">
        <img src="../../assets/LOGO.png" alt="Saras" style="height: 40px; width: auto;" class="p-1"/>
        <span class="ms-1">SARAS</span>
      </el-link>
    </el-col>

    <nav class="hidden md:flex flex-grow justify-center space-x-6">
      <nav class="space-x-6 min-vh-100">
        <el-link href="/solutions" :underline="false">Solutions</el-link>
      </nav>
    </nav>

    <!-- App and Contacts -->
    <div class="hidden md:flex items-center space-x-3 flex-shrink-0">
      <el-button @click="takeMeToApp" plain text round>Access App</el-button>
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
  background-color: #FFFFFFF5;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: 50;
  padding: 15px;
  border-radius: 4px;
}
</style>
