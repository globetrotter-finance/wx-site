<template>
    <div class="min-h-screen bg-slate-50">
      <!-- Hero Section with Subtle Wave Pattern -->
      <section class="relative bg-gradient-to-r from-blue-600 to-blue-800 pt-20 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
            <path d="M0,500 C150,400 350,300 500,500 C650,700 850,600 1000,500 L1000,1000 L0,1000 Z" fill="white"></path>
          </svg>
        </div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="text-center max-w-3xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Integrations We Have
            </h1>
            <p class="text-blue-100 text-lg md:text-xl">
              Seamlessly connect your workflow with our powerful ecosystem of integrations
            </p>
          </div>
        </div>
      </section>
      
      <!-- Main Content -->
      <main class="container mx-auto px-6 -mt-12 pb-24">
        <!-- Search & Filter Card -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div class="flex flex-col lg:flex-row items-stretch gap-6">
            <!-- Search -->
            <div class="flex-1">
              <label for="search" class="block text-sm font-medium text-gray-700 mb-2">Find integrations</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input
                  id="search"
                  type="text"
                  placeholder="Type to search..."
                  v-model="searchQuery"
                  class="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-100 focus:ring-opacity-50"
                />
              </div>
            </div>
            
            <!-- Filter -->
            <div class="flex-1">
              <label for="category-filter" class="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select 
                id="category-filter"
                v-model="selectedCategory" 
                class="w-full rounded-lg border border-gray-200 shadow-sm px-4 py-3 bg-white focus:border-blue-300 focus:ring focus:ring-blue-100 focus:ring-opacity-50"
              >
                <option value="">All Categories</option>
                <option value="Personal Assistant">Personal Assistant</option>
                <option value="Marketing/Sales">Marketing/Sales</option>
                <option value="Customer Support">Customer Support</option>
                <option value="Conferencing">Conferencing</option>
                <option value="Infrastructure">Infrastructure</option>
              </select>
            </div>
            
            <!-- Reset Button -->
            <div class="flex items-end">
              <button 
                @click="resetFilters" 
                class="w-full lg:w-auto px-6 py-3 bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium rounded-lg transition-all duration-200"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        
        <!-- Integration Categories -->
        <div v-if="filteredIntegrations.length > 0">
          <!-- Personal Assistant Section -->
          <section v-if="hasCategory('Personal Assistant')" class="mb-16">
            <div class="flex items-center gap-3 mb-6">
              <div class="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-800">Personal Assistant</h2>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div v-for="integration in getCategoryIntegrations('Personal Assistant')" :key="integration.id" 
                class="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 shadow hover:shadow-md transition-all duration-300 group">
                <div class="h-32 p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div :class="`h-16 w-16 rounded-xl flex items-center justify-center ${integration.bgColor}`">
                    <img v-if="integration.logo" :src="integration.logo" :alt="integration.name" class="h-8 w-8" />
                    <div v-else class="text-white text-xl font-bold">{{ integration.name.charAt(0) }}</div>
                  </div>
                </div>
                <div class="p-5 border-t border-gray-100">
                  <h3 class="font-semibold text-lg text-gray-800 mb-2">{{ integration.name }}</h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ integration.description }}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-blue-500 font-medium">{{ integration.connections.toLocaleString() }}+ users</span>
                    <button
                      class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Connect
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <!-- Marketing/Sales Section -->
          <section v-if="hasCategory('Marketing/Sales')" class="mb-16">
            <div class="flex items-center gap-3 mb-6">
              <div class="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-800">Marketing/Sales</h2>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div v-for="integration in getCategoryIntegrations('Marketing/Sales')" :key="integration.id" 
                class="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 shadow hover:shadow-md transition-all duration-300 group">
                <div class="h-32 p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div :class="`h-16 w-16 rounded-xl flex items-center justify-center ${integration.bgColor}`">
                    <img v-if="integration.logo" :src="integration.logo" :alt="integration.name" class="h-8 w-8" />
                    <div v-else class="text-white text-xl font-bold">{{ integration.name.charAt(0) }}</div>
                  </div>
                </div>
                <div class="p-5 border-t border-gray-100">
                  <h3 class="font-semibold text-lg text-gray-800 mb-2">{{ integration.name }}</h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ integration.description }}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-blue-500 font-medium">{{ integration.connections.toLocaleString() }}+ users</span>
                    <button
                      class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Connect
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <!-- Customer Support Section -->
          <section v-if="hasCategory('Customer Support')" class="mb-16">
            <div class="flex items-center gap-3 mb-6">
              <div class="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-800">Customer Support</h2>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div v-for="integration in getCategoryIntegrations('Customer Support')" :key="integration.id" 
                class="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 shadow hover:shadow-md transition-all duration-300 group">
                <div class="h-32 p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div :class="`h-16 w-16 rounded-xl flex items-center justify-center ${integration.bgColor}`">
                    <img v-if="integration.logo" :src="integration.logo" :alt="integration.name" class="h-8 w-8" />
                    <div v-else class="text-white text-xl font-bold">{{ integration.name.charAt(0) }}</div>
                  </div>
                </div>
                <div class="p-5 border-t border-gray-100">
                  <h3 class="font-semibold text-lg text-gray-800 mb-2">{{ integration.name }}</h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ integration.description }}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-blue-500 font-medium">{{ integration.connections.toLocaleString() }}+ users</span>
                    <button
                      class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Connect
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <!-- Remaining Sections (Conferencing, Infrastructure) -->
          <template v-for="category in ['Conferencing', 'Infrastructure']" :key="category">
            <section v-if="hasCategory(category)" class="mb-16">
              <div class="flex items-center gap-3 mb-6">
                <div class="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <!-- Dynamic icon based on category -->
                  <svg v-if="category === 'Conferencing'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h2 class="text-2xl font-bold text-gray-800">{{ category }}</h2>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div v-for="integration in getCategoryIntegrations(category)" :key="integration.id" 
                  class="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 shadow hover:shadow-md transition-all duration-300 group">
                  <div class="h-32 p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div :class="`h-16 w-16 rounded-xl flex items-center justify-center ${integration.bgColor}`">
                      <img v-if="integration.logo" :src="integration.logo" :alt="integration.name" class="h-8 w-8" />
                      <div v-else class="text-white text-xl font-bold">{{ integration.name.charAt(0) }}</div>
                    </div>
                  </div>
                  <div class="p-5 border-t border-gray-100">
                    <h3 class="font-semibold text-lg text-gray-800 mb-2">{{ integration.name }}</h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ integration.description }}</p>
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-blue-500 font-medium">{{ integration.connections.toLocaleString() }}+ users</span>
                      <button
                        class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300"
                      >
                        Connect
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </template>
        </div>
        
        <!-- No Results State -->
        <div v-if="filteredIntegrations.length === 0" class="bg-white rounded-xl shadow-md p-12">
          <div class="text-center max-w-lg mx-auto">
            <div class="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">No integrations found</h3>
            <p class="text-gray-600 mb-8">We couldn't find any integrations matching your search criteria. Try adjusting your search terms or browse all our available integrations.</p>
            <button @click="resetFilters" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-all duration-200">
              View All Integrations
            </button>
          </div>
        </div>
        
        <!-- Integration Counter -->
        <div v-if="filteredIntegrations.length > 0" class="mt-16 text-center">
          <p class="text-gray-500">
            Showing {{ filteredIntegrations.length }} of {{ integrations.length }} integrations
          </p>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IntegrationsPage',
    data() {
      return {
        searchQuery: '',
        selectedCategory: '',
        integrations: [
          // Personal Assistant
          {
            id: 'slack',
            name: 'Slack',
            category: 'Personal Assistant',
            description: 'Streamline team communication and automate workspace notifications.',
            bgColor: 'bg-purple-600',
            logo: '/api/placeholder/64/64', 
            connections: 24863
          },
          {
            id: 'teams',
            name: 'Teams',
            category: 'Personal Assistant',
            description: 'Connect with Microsoft Teams for seamless collaboration and meeting management.',
            bgColor: 'bg-blue-600',
            logo: '/api/placeholder/64/64',
            connections: 18432
          },
          {
            id: 'calendar',
            name: 'Calendar',
            category: 'Personal Assistant',
            description: 'Sync with Google Calendar and Outlook for scheduling and meeting coordination.',
            bgColor: 'bg-green-600',
            logo: '/api/placeholder/64/64',
            connections: 31254
          },
          {
            id: 'linear',
            name: 'Linear',
            category: 'Personal Assistant',
            description: 'Connect project management and issue tracking with automated workflows.',
            bgColor: 'bg-indigo-600',
            logo: '/api/placeholder/64/64',
            connections: 8632
          },
          {
            id: 'telegram',
            name: 'Telegram',
            category: 'Personal Assistant',
            description: 'Automate messaging and alerts through Telegram channels and bots.',
            bgColor: 'bg-blue-500',
            logo: '/api/placeholder/64/64',
            connections: 15728
          },
          
          // Marketing/Sales
          {
            id: 'hubspot',
            name: 'HubSpot',
            category: 'Marketing/Sales',
            description: 'Connect your complete customer journey with HubSpot CRM platform.',
            bgColor: 'bg-orange-600',
            logo: '/api/placeholder/64/64',
            connections: 19874
          },
          {
            id: 'salesforce',
            name: 'Salesforce',
            category: 'Marketing/Sales',
            description: 'Integrate customer data and automate sales processes with Salesforce CRM.',
            bgColor: 'bg-blue-700',
            logo: '/api/placeholder/64/64',
            connections: 28634
          },
          {
            id: 'airtable',
            name: 'Airtable',
            category: 'Marketing/Sales',
            description: 'Connect spreadsheets, databases and workflows with flexible Airtable integration.',
            bgColor: 'bg-teal-600',
            logo: '/api/placeholder/64/64',
            connections: 12435
          },
          
          // Customer Support
          {
            id: 'gmail',
            name: 'Gmail',
            category: 'Customer Support',
            description: 'Automate email communication and support ticket creation through Gmail.',
            bgColor: 'bg-red-500',
            logo: '/api/placeholder/64/64',
            connections: 32754
          },
          {
            id: 'freshdesk',
            name: 'Freshdesk',
            category: 'Customer Support',
            description: 'Streamline customer support with automated ticket management and routing.',
            bgColor: 'bg-green-500',
            logo: '/api/placeholder/64/64',
            connections: 9836
          },
          
          // Conferencing
          {
            id: 'zoom',
            name: 'Zoom',
            category: 'Conferencing',
            description: 'Automate meeting scheduling, recordings, and video conference workflows.',
            bgColor: 'bg-blue-500',
            logo: '/api/placeholder/64/64',
            connections: 25483
          },
          
          // Infrastructure
          {
            id: 'aws',
            name: 'AWS Suite',
            category: 'Infrastructure',
            description: 'Connect with Amazon Web Services for cloud infrastructure automation.',
            bgColor: 'bg-yellow-600',
            logo: '/api/placeholder/64/64',
            connections: 17865
          },
          {
            id: 'google-suite',
            name: 'Google Suite',
            category: 'Infrastructure',
            description: 'Integrate Google Cloud and Workspace for productivity and infrastructure.',
            bgColor: 'bg-blue-400',
            logo: '/api/placeholder/64/64',
            connections: 22143
          },
          {
            id: 'azure',
            name: 'Azure Suite',
            category: 'Infrastructure',
            description: 'Connect Microsoft Azure services for enterprise cloud solutions.',
            bgColor: 'bg-blue-600',
            logo: '/api/placeholder/64/64',
            connections: 16752
          },
          {
            id: 'zoho',
            name: 'Zoho Suite',
            category: 'Infrastructure',
            description: 'Integrate Zohos business and productivity applications into your workflow.',
            bgColor: 'bg-red-600',
            logo: '/api/placeholder/64/64',
            connections: 8795
          }
        ]
      };
    },
    computed: {
      filteredIntegrations() {
        return this.integrations.filter(integration => {
          const matchesSearch = this.searchQuery === '' || 
            integration.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            integration.description.toLowerCase().includes(this.searchQuery.toLowerCase());
          
          const matchesCategory = this.selectedCategory === '' || 
            integration.category === this.selectedCategory;
          
          return matchesSearch && matchesCategory;
        });
      }
    },
    methods: {
      resetFilters() {
        this.searchQuery = '';
        this.selectedCategory = '';
      },
      hasCategory(category) {
        return this.filteredIntegrations.some(integration => integration.category === category);
      },
      getCategoryIntegrations(category) {
        return this.filteredIntegrations.filter(integration => integration.category === category);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Smooth transitions for interactive elements */
  .transition-all {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Add some hover animations */
  .group:hover {
    transform: translateY(-4px);
  }
  
  /* Line clamp for descriptions */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>