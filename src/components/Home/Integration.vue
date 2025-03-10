<template>
  <div class="min-h-screen bg-white overflow-hidden">
    <!-- Full-screen intro section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div class="absolute top-1/4 -left-24 w-80 h-80 bg-indigo-100 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full blur-3xl"></div>
      </div>
      <div class="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 mb-6">
          Seamless <span class="font-semibold text-blue-600">Integrations</span>
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 font-light mb-10 leading-relaxed">
          Connect your workflow to our powerful ecosystem and experience a new level of productivity
        </p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          Explore Integrations
        </button>
      </div>
    </section>

    <!-- Integration Features Section -->
    <integration-features />

    <!-- Main Content -->
    <main class="container mx-auto px-6 py-24 relative">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-light text-gray-800">
            Discover Our <span class="font-semibold">Integration Ecosystem</span>
          </h2>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
            Browse our collection of powerful integrations designed to enhance your workflow and boost productivity
          </p>
        </div>

        <!-- Search & Filters Card -->
        <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-16 border border-gray-100">
          <div class="flex flex-col lg:flex-row items-stretch gap-6">
            <div class="flex-1 relative">
              <input 
                id="search" 
                type="text" 
                v-model="searchQuery" 
                placeholder="Search integrations..."
                class="w-full rounded-xl border border-gray-200 shadow-sm px-12 py-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all" 
              />
              <span class="absolute left-4 top-4 text-gray-400">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </span>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <select 
                v-model="sortOption" 
                class="rounded-xl border border-gray-200 shadow-sm px-4 py-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all appearance-none bg-white min-w-48"
              >
                <option value="popular">Most Popular</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="category">Category</option>
              </select>
              
              <select 
                v-model="selectedCategory" 
                class="rounded-xl border border-gray-200 shadow-sm px-4 py-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all appearance-none bg-white min-w-48"
              >
                <option value="">All Categories</option>
                <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
              </select>
              
              <button 
                @click="resetFilters" 
                class="px-6 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
        
        <!-- Integration Cards Grid -->
        <div v-if="filteredIntegrations.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="integration in filteredIntegrations" 
            :key="integration.id"
            class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all group flex flex-col h-full transform hover:-translate-y-1"
          >
            <div class="p-6 border-b border-gray-50">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="bg-gray-50 p-3 rounded-xl">
                    <img :src="integration.logo" :alt="integration.name" class="h-10 w-10 object-contain" />
                  </div>
                  <h3 class="text-xl font-medium text-gray-800">{{ integration.name }}</h3>
                </div>
                <span class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                  {{ integration.category }}
                </span>
              </div>
            </div>
            <div class="p-6 flex-grow">
              <p class="text-gray-600 leading-relaxed">{{ integration.description }}</p>
            </div>
            <div class="p-6 border-t border-gray-50 bg-gray-50">
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500 font-medium">{{ integration.connections.toLocaleString() }}+ users</span>
                <button class="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- No Results State -->
        <div v-if="!filteredIntegrations.length" class="text-center py-20">
          <div class="inline-block p-6 bg-gray-50 rounded-full mb-6">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-medium text-gray-700 mb-2">No integrations found</h3>
          <p class="text-gray-500">Try adjusting your search filters or browse all integrations.</p>
          <button @click="resetFilters" class="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            View All Integrations
          </button>
        </div>
        
        <!-- Pagination -->
        <div v-if="filteredIntegrations.length > 0" class="mt-16 flex justify-center">
          <div class="flex space-x-2">
            <button class="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button class="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-600 text-white">1</button>
            <button class="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-700 hover:bg-gray-50">2</button>
            <button class="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-700 hover:bg-gray-50">3</button>
            <button class="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { integrations } from '../../data/integration-data';
import IntegrationFeatures from './IntegrationFeatures.vue';

export default {
  components: {
    IntegrationFeatures
  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      sortOption: 'popular',
      integrations: integrations
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
      if (this.sortOption === 'category') results.sort((a, b) => a.category.localeCompare(b.category));
      
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
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c5c5c5;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a0a0a0;
}

select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.25em;
  padding-right: 2.5rem;
}
</style>