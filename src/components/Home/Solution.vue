<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 font-sans">
    <!-- Solutions Header -->
    <section class="pt-32 pb-20 px-6 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-20 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
        <div class="absolute bottom-20 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
        <div class="absolute -bottom-20 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
      </div>
      <div class="container mx-auto max-w-6xl relative z-10">
        <div class="text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span class="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">Comprehensive</span>
            Solutions
          </h2>
          <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Elevate your business with intelligent, integrated tools designed to enhance productivity and streamline operations.
          </p>
          <el-button
            type="primary"
            round
            class="mt-8 px-8 py-3 text-lg"
            @click="scrollToContent"
          >
            Explore More
            <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </el-button>
        </div>
      </div>
    </section>

    <!-- Customer Success Stories -->
    <section class="py-0 px-6 relative">
      <div class="container mx-auto max-w-6xl">
        <!-- <div class="text-center mb-16">
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900">
            Proven Business Transformations
          </h3>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            See how our solutions deliver measurable results and drive growth.
          </p>
        </div> -->
        <div class="grid md:grid-cols-3 gap-10">
          <div
            v-for="(stat, index) in data.successStats"
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300"
          >
            <div class="text-5xl font-bold text-blue-600 mb-4">{{ stat.value }}</div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">{{ stat.title }}</h4>
            <p class="text-gray-600 leading-relaxed">{{ stat.description }}</p>
          </div>
        </div>
      </div>
    </section>



    <!-- Blog Content -->
    <section id="blog-content" class="py-24 px-6 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-20 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
        <div class="absolute bottom-20 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
      </div>
      <div class="container mx-auto max-w-6xl relative z-10">
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <el-button
            v-for="category in data.categories"
            :key="category.id"
            :type="activeCategory === category.id ? 'primary' : 'default'"
            round
            @click="setActiveCategory(category.id)"
          >
            {{ category.name }}
          </el-button>
        </div>

        <!-- Featured Article -->
        <div v-if="data.featuredArticle" class="mb-20">
          <div
            class="bg-white rounded-3xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div class="grid grid-cols-1 lg:grid-cols-5">
              <div class="lg:col-span-3 p-10 flex flex-col justify-between">
                <div>
                  <div class="flex items-center mb-6">
                    <span
                      class="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {{ getCategoryName(data.featuredArticle.category) }}
                    </span>
                    <span class="mx-3 text-gray-400">•</span>
                    <span class="text-gray-500 text-sm">{{ data.featuredArticle.date }}</span>
                  </div>
                  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {{ data.featuredArticle.title }}
                  </h2>
                  <p class="text-gray-600 text-lg leading-relaxed">
                    {{ data.featuredArticle.excerpt }}
                  </p>
                </div>
                <div class="flex items-center mt-8">
                  <img
                    :src="data.featuredArticle.author.avatar"
                    class="w-12 h-12 rounded-full mr-4"
                    :alt="data.featuredArticle.author.name"
                  />
                  <div>
                    <p class="text-sm font-medium text-gray-900">
                      {{ data.featuredArticle.author.name }}
                    </p>
                    <p class="text-sm text-gray-500">{{ data.featuredArticle.author.title }}</p>
                  </div>
                  <el-button type="text" class="ml-auto text-blue-600 hover:text-blue-700">
                    Read Article
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </el-button>
                </div>
              </div>
              <div class="lg:col-span-2">
                <img
                  :src="data.featuredArticle.image"
                  :alt="data.featuredArticle.title"
                  class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center text-gray-500 mb-20">
          No featured article available.
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <article
            v-for="article in paginatedArticles"
            :key="article.id"
            class="bg-white rounded-2xl shadow-md border border-blue-100 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div class="relative h-60">
              <img
                :src="article.image"
                :alt="article.title"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <span
                class="absolute top-4 left-4 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {{ getCategoryName(article.category) }}
              </span>
            </div>
            <div class="p-6 flex flex-col">
              <div class="flex items-center mb-4 text-sm text-gray-500">
                <span>{{ article.date }}</span>
                <span class="mx-2">•</span>
                <span>{{ article.readTime }} min read</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                {{ article.title }}
              </h3>
              <p class="text-gray-600 flex-grow">{{ article.excerpt }}</p>
              <div class="flex items-center mt-6 pt-4 border-t border-blue-100">
                <img
                  :src="article.author.avatar"
                  class="w-10 h-10 rounded-full mr-3"
                  :alt="article.author.name"
                />
                <p class="text-sm font-medium text-gray-900">{{ article.author.name }}</p>
                <el-button type="text" class="ml-auto text-blue-600 hover:text-blue-700">
                  Read
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </el-button>
              </div>
            </div>
          </article>
          <div v-if="!filteredArticles.length" class="col-span-full text-center text-gray-500">
            No articles found.
          </div>
        </div>

        <!-- Pagination -->
        <div class="mt-16 flex justify-center">
          <el-pagination
            v-model:current-page="currentPage"
            :page-size="pageSize"
            :total="filteredArticles.length"
            layout="prev, pager, next"
            background
          />
        </div>

        <!-- Newsletter Subscription -->
        <div
          class="mt-24 bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-10 text-white relative overflow-hidden shadow-xl"
        >
          <div class="absolute right-0 bottom-0 opacity-20">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="white">
              <path
                d="M173.913 0H26.087C11.6807 0 0 11.6807 0 26.087V173.913C0 188.319 11.6807 200 26.087 200H173.913C188.319 200 200 188.319 200 173.913V26.087C200 11.6807 188.319 0 173.913 0Z"
              />
            </svg>
          </div>
          <div class="relative z-10 md:flex md:items-center md:justify-between gap-8">
            <div class="mb-8 md:mb-0">
              <h3 class="text-3xl font-bold mb-4">Stay Informed</h3>
              <p class="text-blue-100 text-lg max-w-md">
                Subscribe for exclusive insights on automation and SaaS trends, delivered monthly.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <el-input
                v-model="newsletterEmail"
                placeholder="Enter your email"
                clearable
                class="max-w-xs"
              />
              <el-button
                type="primary"
                @click="subscribeNewsletter"
                class="bg-white text-blue-600 hover:bg-blue-50"
              >
                Subscribe
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    


    <section class="py-24 px-6 relative">
      <div class="container mx-auto max-w-4xl text-center">
        <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Optimize Your Workflow?
        </h3>
        <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Discover how our solutions can transform your business. Schedule a demo today.
        </p>
        <el-button
          type="primary"
          size="large"
          class="px-10 py-4 text-lg"
          @click="scheduleDemo"
        >
          Book a Demo
        </el-button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import data from '../../data/blog-data.json'

const activeCategory = ref('all')
const currentPage = ref(1)
const pageSize = ref(6)
const newsletterEmail = ref('')

const filteredArticles = computed(() => {
  if (activeCategory.value === 'all') return data.articles
  return data.articles.filter(article => article.category === activeCategory.value)
})

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredArticles.value.slice(start, end)
})

const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId
  currentPage.value = 1
}

const getCategoryName = (categoryId) => {
  const category = data.categories.find(c => c.id === categoryId)
  return category ? category.name : 'Uncategorized'
}

const scrollToContent = () => {
  const element = document.getElementById('blog-content')
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}

const subscribeNewsletter = () => {
  if (!newsletterEmail.value) {
    ElMessage.error('Please enter an email address.')
    return
  }
  ElMessage.success('Subscribed successfully!')
  newsletterEmail.value = ''
}

const scheduleDemo = () => {
  ElMessage.info('Redirecting to demo scheduling...')
}
</script>

<style scoped>
.font-sans {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

:deep(.el-button--primary) {
  background-color: #2563eb; 
  border-color: #2563eb;
}

:deep(.el-button--primary:hover) {
  background-color: #1d4ed8; 
  border-color: #1d4ed8;
}

:deep(.el-button--default) {
  border-color: #bfdbfe; 
}

:deep(.el-button--default:hover) {
  background-color: #eff6ff; 
  border-color: #93c5fd; 
  color: #2563eb; 
}
</style>