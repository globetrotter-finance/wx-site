<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hero Section with Enhanced Wave & Glass Effect -->
    <section class="relative bg-gradient-to-r from-blue-600 to-purple-700 pt-24 pb-32 overflow-hidden shadow-lg">
      <div class="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <path d="M0,500 C150,400 350,300 500,500 C650,700 850,600 1000,500 L1000,1000 L0,1000 Z" fill="white"></path>
        </svg>
      </div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-5xl font-extrabold text-white drop-shadow-md">Seamless Integrations</h1>
        <p class="text-blue-100 text-lg mt-4">Enhance your workflow with our powerful ecosystem</p>
      </div>
    </section>
    
    <!-- Main Content -->
    <main class="container mx-auto px-6 -mt-16 pb-24 relative">
      <!-- Search & Filters Card -->
      <div class="bg-white bg-opacity-80 backdrop-blur-xl rounded-xl shadow-xl p-6 mb-12 border border-gray-200">
        <div class="flex flex-col lg:flex-row items-stretch gap-6">
          <div class="flex-1 relative">
            <input id="search" type="text" v-model="searchQuery" placeholder="Search integrations..."
              class="w-full rounded-lg border border-gray-300 shadow-sm px-10 py-3 focus:ring-2 focus:ring-blue-400" />
            <span class="absolute left-3 top-3 text-gray-400">🔍</span>
          </div>
          <select v-model="sortOption" class="rounded-lg border border-gray-300 shadow-sm px-4 py-3">
            <option value="popular">Most Popular</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="category">Category</option>
          </select>
          <select v-model="selectedCategory" class="rounded-lg border border-gray-300 shadow-sm px-4 py-3">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
          <button @click="resetFilters" class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Reset
          </button>
        </div>
      </div>
      
      <!-- Integration Cards Grid -->
      <div v-if="filteredIntegrations.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="integration in filteredIntegrations" :key="integration.id"
          class="bg-white rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all group relative flex flex-col">
          <div class="p-4 flex flex-col flex-grow">
            <div class="flex items-center space-x-3">
              <img :src="integration.logo" :alt="integration.name" class="h-10 object-contain" />
              <h3 class="text-lg font-semibold text-gray-800">{{ integration.name }}</h3>
            </div>
            <p class="text-gray-600 text-sm mt-2 line-clamp-2 flex-grow">{{ integration.description }}</p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-xs text-blue-500 font-medium">{{ integration.connections.toLocaleString() }}+ users</span>
              <button class="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Connect →
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- No Results State -->
      <div v-if="!filteredIntegrations.length" class="text-center mt-16">
        <p class="text-xl text-gray-600">No integrations found. Try adjusting your search filters.</p>
      </div>
    </main>
  </div>
</template>

<script>
import { integrations } from '../../data/integration-data';

export default {
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      sortOption: 'popular',
      integrations: integrations,
    };
  },
  computed: {
    categories() {
      return [...new Set(this.integrations.map(i => i.category))].sort();
    },
    filteredIntegrations() {
      let results = this.integrations.filter(i =>
        (!this.searchQuery || i.name.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
        (!this.selectedCategory || i.category === this.selectedCategory)
      );
      if (this.sortOption === 'name-asc') results.sort((a, b) => a.name.localeCompare(b.name));
      if (this.sortOption === 'name-desc') results.sort((a, b) => b.name.localeCompare(a.name));
      if (this.sortOption === 'popular') results.sort((a, b) => b.connections - a.connections);
      return results;
    }
  },
  methods: {
    resetFilters() {
      this.searchQuery = '';
      this.selectedCategory = '';
      this.sortOption = 'popular';
    }
  }
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
