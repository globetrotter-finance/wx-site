<template>
    <div class="blog-page">
      <!-- Full-screen introduction section with smooth gradient background -->
      <section class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
          <div class="absolute bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
          <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-50 rounded-full opacity-30 blur-3xl"></div>
        </div>
        
        <!-- Content container -->
        <div class="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div class="max-w-3xl mx-auto text-center mb-10">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span class="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">Insights</span> & 
              <span class="relative inline-block">
                Resources
                <span class="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-blue-500 opacity-30 rounded-full"></span>
              </span>
            </h1>
            <p class="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Discover the latest trends, strategies, and success stories in workflow automation 
              and AI-powered business transformation.
            </p>
            
            <!-- Search bar -->
            <div class="max-w-xl mx-auto mb-6">
              <div class="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  class="w-full px-5 py-4 bg-white rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                >
                <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Scroll indicator -->
            <div class="hidden md:flex justify-center mt-20 animate-bounce">
              <button @click="scrollToContent" class="text-gray-400 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Blog content section -->
      <section id="blog-content" class="py-20 px-4 bg-white relative">
        <div class="container mx-auto max-w-6xl">
          <!-- Category Filter -->
          <div class="flex flex-wrap justify-center gap-4 mb-16">
            <button 
              v-for="category in blogData.categories" 
              :key="category.id"
              @click="setActiveCategory(category.id)"
              :class="[
                'px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 transform',
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white shadow-md scale-105' 
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-200 hover:text-blue-600 hover:scale-105'
              ]"
            >
              {{ category.name }}
            </button>
          </div>
          
          <!-- Featured Article -->
          <div v-if="blogData.featuredArticle" class="mb-24 transform transition-all duration-500 hover:scale-[1.01]">
            <div class="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
              <div class="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div class="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div class="mb-5 flex items-center">
                      <span class="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
                        {{ getCategoryName(blogData.featuredArticle.category) }}
                      </span>
                      <span class="mx-2 text-gray-300">•</span>
                      <span class="text-gray-500 text-sm">{{ blogData.featuredArticle.date }}</span>
                    </div>
                    
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                      {{ blogData.featuredArticle.title }}
                    </h2>
                    <p class="text-gray-600 text-lg mb-8 line-clamp-3 leading-relaxed">
                      {{ blogData.featuredArticle.excerpt }}
                    </p>
                  </div>
                  
                  <div class="flex items-center">
                    <img :src="blogData.featuredArticle.author.avatar" class="w-12 h-12 rounded-full mr-4" :alt="blogData.featuredArticle.author.name">
                    <div>
                      <p class="text-sm font-medium text-gray-900">{{ blogData.featuredArticle.author.name }}</p>
                      <p class="text-sm text-gray-500">{{ blogData.featuredArticle.author.title }}</p>
                    </div>
                    <button class="ml-auto text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 transition-colors text-lg group">
                      Read Article
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full">
                  <img :src="blogData.featuredArticle.image" :alt="blogData.featuredArticle.title" class="h-full w-full object-cover transition-transform duration-700 hover:scale-105">
                </div>
              </div>
            </div>
          </div>
          
          <!-- Articles Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <article 
              v-for="article in filteredArticles" 
              :key="article.id"
              class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-2 flex flex-col h-full"
            >
              <div class="relative h-56 overflow-hidden">
                <img :src="article.image" :alt="article.title" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110">
                <div class="absolute top-4 left-4">
                  <span class="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
                    {{ getCategoryName(article.category) }}
                  </span>
                </div>
              </div>
              
              <div class="p-7 flex flex-col flex-grow">
                <div class="flex items-center mb-3">
                  <span class="text-gray-500 text-sm">{{ article.date }}</span>
                  <span class="mx-2 text-gray-300">•</span>
                  <span class="text-gray-500 text-sm">{{ article.readTime }} min read</span>
                </div>
                
                <h3 class="text-xl font-bold mb-4 text-gray-900 line-clamp-2 leading-tight">{{ article.title }}</h3>
                <p class="text-gray-600 mb-6 line-clamp-3 flex-grow">{{ article.excerpt }}</p>
                
                <div class="flex items-center mt-auto pt-4 border-t border-gray-100">
                  <img :src="article.author.avatar" class="w-10 h-10 rounded-full mr-3" :alt="article.author.name">
                  <p class="text-sm font-medium text-gray-900">{{ article.author.name }}</p>
                  <button class="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 transition-colors group">
                    Read
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          </div>
          
          <!-- Newsletter Subscription -->
          <div class="mt-24 bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <!-- Decorative elements -->
            <div class="absolute right-0 bottom-0 opacity-10">
              <svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M173.913 0H26.087C11.6807 0 0 11.6807 0 26.087V173.913C0 188.319 11.6807 200 26.087 200H173.913C188.319 200 200 188.319 200 173.913V26.087C200 11.6807 188.319 0 173.913 0Z" fill="white"/>
                <path d="M65.2174 86.9565H134.783M65.2174 113.043H134.783M65.2174 139.13H108.696M65.2174 60.8696H134.783" stroke="white" stroke-width="8.7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            
            <div class="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between gap-10">
              <div class="mb-8 md:mb-0 max-w-lg">
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Stay Ahead of the Curve</h3>
                <p class="text-blue-100 text-lg">Get the latest insights on workflow automation and AI solutions delivered straight to your inbox. No spam, just valuable content.</p>
              </div>
              
              <div class="flex-shrink-0 w-full md:w-auto">
                <div class="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    class="px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 w-full min-w-[250px]"
                  >
                  <button class="bg-white text-blue-600 font-medium px-6 py-4 rounded-lg shadow hover:bg-blue-50 transition-all duration-300 whitespace-nowrap">
                    Subscribe Now
                  </button>
                </div>
                <p class="text-blue-100 text-xs mt-3 text-center sm:text-left">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
          
          <!-- Pagination -->
          <div class="mt-16 flex justify-center">
            <div class="flex items-center gap-2">
              <button class="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
              <button class="w-12 h-12 rounded-lg flex items-center justify-center border border-blue-600 bg-blue-600 text-white font-medium">1</button>
              <button class="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all">2</button>
              <button class="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all">3</button>
              <span class="mx-1 text-gray-400">...</span>
              <button class="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all">8</button>
              <button class="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import blogData from '../../data/blog-data.json'
  
  export default {
    data() {
      return {
        blogData,
        activeCategory: 'all'
      };
    },
    computed: {
      filteredArticles() {
        if (this.activeCategory === 'all') {
          return this.blogData.articles;
        }
        return this.blogData.articles.filter(article => article.category === this.activeCategory);
      }
    },
    methods: {
      setActiveCategory(categoryId) {
        this.activeCategory = categoryId;
      },
      getCategoryName(categoryId) {
        const category = this.blogData.categories.find(c => c.id === categoryId);
        return category ? category.name : '';
      },
      scrollToContent() {
        const element = document.getElementById('blog-content');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
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
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  /* Enhanced transitions */
  article, .featured-article, button {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Refined hover effects */
  button.bg-blue-600 {
    box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2), 0 2px 4px -1px rgba(37, 99, 235, 0.1);
  }
  
  /* Gradient text effect */
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  /* Smooth scaling on hover */
  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
  
  .hover\:scale-\[1\.01\]:hover {
    transform: scale(1.01);
  }
  
  /* Animation for scroll indicator */
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  }
  .animate-bounce {
    animation: bounce 2s infinite;
  }
  </style>