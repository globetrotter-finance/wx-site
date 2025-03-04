<template>
  <header class="fixed top-4 left-1/2 transform -translate-x-1/2 w-[80%] z-50 bg-white shadow-md rounded-2xl px-6 py-3 border border-gray-200">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="text-lg font-bold text-gray-900 tracking-wide">
          WX
        </a>
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex flex-grow justify-center space-x-6">
        <a href="#" class="text-gray-800 hover:text-blue-600 text-sm font-medium transition-all duration-200">
          Solutions
        </a>
        <router-link to="/integration" href="#" class="text-gray-800 hover:text-blue-600 text-sm font-medium transition-all duration-200">
          Integrations
        </router-link>
        <a href="#" class="text-gray-800 hover:text-blue-600 text-sm font-medium transition-all duration-200">
          Agentic Solutions
        </a>
        <router-link to="/blogs" class="text-gray-800 hover:text-blue-600 text-sm font-medium transition-all duration-200">
          Blog
        </router-link>
        <router-link to="/contact"  class="text-gray-800 hover:text-blue-600 text-sm font-medium transition-all duration-200">
          Contact
        </router-link>
      </nav>
      
      <!-- ✅ Compact Action Buttons -->
      <div class="hidden md:flex items-center space-x-3 flex-shrink-0">
        <!-- <a href="#" class="text-gray-800 hover:text-blue-600 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200">
          Access Portal
        </a> -->
        <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-200">
          Get Started
        </a> 
      </div>
      
      <!-- Mobile Menu Button -->
      <button class="md:hidden text-gray-800 focus:outline-none" @click="toggleMobileMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div v-show="mobileMenuOpen" class="absolute top-[100%] left-0 right-0 bg-white shadow-md py-4 md:hidden rounded-b-2xl border-t border-gray-200">
      <div class="container mx-auto px-6 flex flex-col space-y-4">
        <a href="#" class="text-gray-800 hover:text-blue-600 text-sm font-medium py-2">
          Solutions
        </a>
        <a href="#" class="text-gray-800 hover:text-blue-600 text-sm font-medium py-2">
          Integrations
        </a>
        <a href="#" class="text-gray-800 hover:text-blue-600 text-sm font-medium py-2">
          Agentic Solutions
        </a>
        <a href="#" class="text-gray-800 hover:text-blue-600 text-sm font-medium py-2">
          Blog
        </a>
        <a href="#" class="text-gray-800 hover:text-blue-600 text-sm font-medium py-2">
          Contact
        </a>
        <div class="pt-3 border-t border-gray-300">
          <!-- <button class="w-full text-left text-gray-800 hover:text-blue-600 text-sm font-medium py-2">
            Access Portal
          </button> -->
          <button class="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
};
</script>

<style scoped>
/* Elevate Navbar with a Soft Shadow */
header {
  transition: box-shadow 0.2s ease-in-out;
}

/* Refined Hover Effects */
a, button {
  transition: all 0.2s ease-in-out;
}

/* Lift Effect on Hover */
button:hover {
  transform: translateY(-1px);
}
</style>
