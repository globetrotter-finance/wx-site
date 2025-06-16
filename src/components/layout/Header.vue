<template>
  <header class="fixed transform w-[100%] from-blue-700 to-blue-400 z-50 shadow-md rounded-2xls border border-gray-200">
    <el-row class="container mx-auto flex items-center justify-between">

      <!-- Logo -->
      <el-col class="flex" :span="4">
        <el-link @click="router.push('/')" :underline="false">
          <img src="../../assets/LOGO.png" alt="Saras" style="height: 40px; width: auto;" class="p-1" />
          <span
            class="text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">Saras
            Finance</span>
        </el-link>
      </el-col>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-3 flex-shrink-0">
        <el-dropdown>
          <template #default>
            <el-button type="primary" round text>Products</el-button>
          </template>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="router.push('/compliance-governance')">Compliance, Risk &
                Governance</el-dropdown-item>
              <el-dropdown-item @click="router.push('/audit-automation')">Audit Automation</el-dropdown-item>
              <el-dropdown-item @click="router.push('/knowledge-advisory')">Knowledge & Advisory</el-dropdown-item>
              <el-dropdown-item @click="router.push('/litigation-management')">Litigation Management</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button @click="gotoApp" type="success" round>Go to Saras Portal</el-button>
        <el-button @click="router.push('/contact')" type="primary" round>Get Started</el-button>
      </div>

      <!-- Mobile Menu Burger -->
      <div class="md:hidden flex items-center">
        <el-button @click="drawer = true" circle><el-icon>
            <Menu />
          </el-icon></el-button>
      </div>

    </el-row>

    <el-drawer v-model="drawer" size="100%" append-to-body>

      <template #header="{ close, titleId, titleClass }">
        <el-link @click="router.push('/')" :underline="false">
          <img src="../../assets/LOGO.png" alt="Saras" style="height: 40px; width: auto;" class="p-1" />
          <span class="text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
            Saras Finance
          </span>
        </el-link>
      </template>

      <div class="p-4 flex flex-col h-full">

        <template v-if="!showProducts">
          <el-menu class="el-menu-vertical-demo flex" mode="vertical" :router="false" background-color="transparent"
            active-text-color="#409EFF">
            <el-col>
              <el-menu-item @click="navigateAndClose('/compliance-governance')">Compliance, Risk &
                Governance</el-menu-item>
              <el-menu-item @click="navigateAndClose('/audit-automation')">Audit Automation</el-menu-item>
              <el-menu-item @click="navigateAndClose('/knowledge-advisory')">Knowledge & Advisory</el-menu-item>
              <el-menu-item @click="navigateAndClose('/litigation-management')">Litigation Management</el-menu-item>
            </el-col>
          </el-menu>
        </template>

        <el-row class="flex mt-4">
          <el-col :span="24">
            <el-button type="success" @click="gotoApp" plain text class="m-2">Go to Saras Portal</el-button>
          </el-col>
          <el-col :span="24">
            <el-button type="primary" @click="navigateAndClose('/contact')" plain text class="m-2">Get Started</el-button>
          </el-col>
        </el-row>

      </div>
    </el-drawer>

  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const showProducts = ref(false);

import { Menu } from '@element-plus/icons-vue';
const router = useRouter();
const drawer = ref(false);


const gotoApp = () => {
  drawer.value = false;
  window.location.replace("https://app.sarasfinance.com/");
}

const navigateAndClose = (path) => {
  router.push(path);
  drawer.value = false;
}
</script>

<style scoped>
header {
  transition: box-shadow 0.2s ease-in-out;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(25px);
  z-index: 50;
  padding: 15px;
  border-radius: 4px;
}
</style>
