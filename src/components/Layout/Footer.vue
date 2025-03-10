<template>
  <footer class="py-16 px-4 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
    <!-- Background pattern/decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-60 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div class="absolute -bottom-60 -left-20 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
    </div>
    
    <div class="container mx-auto max-w-6xl relative z-10">
      <!-- Top section with logo and links -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 pb-12 border-b border-gray-200">
        <!-- Company info -->
        <div class="col-span-1 md:col-span-1 space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">WorkflowsX</span>
          </div>
          <p class="text-gray-500 text-sm">
            Intelligent workflow automation for modern businesses. Build, deploy, and scale in minutes.
          </p>
          <div class="flex space-x-4 pt-2">
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Products links -->
        <div class="col-span-1 space-y-4">
          <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider">Product</h3>
          <ul class="space-y-3 text-gray-500">
            <li><a href="#" class="hover:text-blue-600 transition-colors">Features</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Integrations</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Pricing</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Enterprise</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Security</a></li>
          </ul>
        </div>
        
        <!-- Resources links -->
        <div class="col-span-1 space-y-4">
          <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider">Resources</h3>
          <ul class="space-y-3 text-gray-500">
            <li><a href="#" class="hover:text-blue-600 transition-colors">Documentation</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Guides</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">API Reference</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Blog</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Community</a></li>
          </ul>
        </div>
        
        <!-- Company links -->
        <div class="col-span-1 space-y-4">
          <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider">Company</h3>
          <ul class="space-y-3 text-gray-500">
            <li><a href="#" class="hover:text-blue-600 transition-colors">About Us</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Careers</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Contact</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Partners</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Legal</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Newsletter subscription -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-900">Subscribe to our newsletter</h3>
          <p class="text-gray-500 text-sm">Get the latest updates on new features, case studies, and tips.</p>
        </div>
        <div>
          <form class="flex gap-2 flex-col sm:flex-row">
            <div class="flex-grow">
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required class="w-full min-w-0 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your email">
            </div>
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-sm transition duration-300 transform hover:-translate-y-1">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <!-- Bottom section with copyright -->
      <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
        <p class="text-gray-500 text-sm">
          &copy; 2025 WorkflowAI. All rights reserved.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600 transition-colors">Privacy</a>
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600 transition-colors">Terms</a>
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600 transition-colors">Cookies</a>
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600 transition-colors">Sitemap</a>
        </div>
      </div>
      
      <!-- Floating badge -->
      <div class="absolute bottom-12 right-8 bg-white p-3 rounded-lg shadow-md border border-gray-100 hidden md:block transform rotate-3 animate-float animation-delay-1000 z-20">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="text-sm font-medium">Trusted by 10,000+ teams</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0px) rotate(3deg);
  }
  50% {
    transform: translateY(-10px) rotate(4deg);
  }
  100% {
    transform: translateY(0px) rotate(3deg);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}
</style>