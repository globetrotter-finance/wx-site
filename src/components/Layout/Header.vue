<template>
<header class="fixed top-4 left-1/2 transform -translate-x-1/2 w-[80%] shadow-md d-flex flex-row justify-content-center align-items-center">
  <el-row>

    <!-- Logo -->
    <el-col class="flex" :span="4">
      <el-link @click="router.push('/')" :underline="false">
        <img src="../../assets/LOGO.png" alt="Saras" style="height: 40px; width: auto;" class="p-1"/>
        <span class="ms-1">SARAS</span>
      </el-link>
    </el-col>

    <el-col :span="16">
      <nav class="space-x-6 min-vh-100">
        <el-link href="/solutions" :underline="false">Solutions</el-link>
      </nav>
    </el-col>

    <!-- App and Contacts -->
    <el-col class="flex" :span="4">
      <el-button @click="takeMeToApp" plain text round>Access App</el-button>
      <el-button @click="router.push('/contact')" type="primary" round>Get Started</el-button>
    </el-col>

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
