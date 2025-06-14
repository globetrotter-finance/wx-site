<template>
  <footer class="py-16 px-4 bg-gradient-to-br from-blue-10 to-blue-200 relative overflow-hidden">

    <div class="container mx-auto max-w-6xl relative z-10">
      <!-- Top section with logo and links -->
      <div class="grid md:grid-cols-4 gap-10 mb-12 pb-12 border-b border-gray-200">
        <!-- Company info -->
        <div class="col-span-1 md:col-span-1 space-y-4">
          <div class="flex items-center">
            <img src="../../assets/LOGO.png" alt="Saras" style="height: 40px; width: auto;" class="p-1"/>
            <span class="text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">Saras Finance</span>
          </div>
          <p class="text-gray-500 text-sm">
            Fragmented workflows. Manual processes. Compliance overload. Legal complexity.
          </p>
          <p class="text-gray-500 text-sm">
            Saras is your unified digital workspace that simplifies the most challenging operations in Legal, Audit, and Finance.
          </p>
          <div class="flex space-x-4 pt-2">
            <!-- <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors"> -->
              <!-- Linked SVG -->
            <!-- </a> -->
          </div>
        </div>

        <!-- Products links -->
        <div class="col-span-1 space-y-4">
          <!-- <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider">Product</h3> -->
          <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider"></h3>
          <!-- <ul class="space-y-3 text-gray-500">
            <li><a href="#" class="hover:text-blue-600 transition-colors">Features</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Integrations</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Pricing</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Enterprise</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Security</a></li>
          </ul> -->
        </div>

        <!-- Resources links -->
        <div class="col-span-1 space-y-4">
          <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider"></h3>
          <!-- <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider">Resources</h3> -->
          <!-- <ul class="space-y-3 text-gray-500">
            <li><a href="#" class="hover:text-blue-600 transition-colors">Documentation</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Guides</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">API Reference</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Blog</a></li>
            <li><a href="#" class="hover:text-blue-600 transition-colors">Community</a></li>
          </ul> -->
        </div>

        <!-- Company links -->
        <div class="col-span-1 space-y-4">
          <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider">Company</h3>
          <ul class="space-y-3 text-gray-500">
            <li><router-link to="/contact" class="hover:text-blue-600 transition-colors">Contact Us</router-link></li>
            <li><router-link to="/aboutus" class="hover:text-blue-600 transition-colors">About Us</router-link></li>
            <li><router-link to="/compliance-governance" class="hover:text-blue-600 transition-colors">Compliance, Risk & Governance</router-link></li>
            <li><router-link to="/audit-automation" class="hover:text-blue-600 transition-colors">Audit Automation</router-link></li>
            <li><router-link to="/knowledge-advisory" class="hover:text-blue-600 transition-colors">Knowledge & Advisory</router-link></li>
            <li><router-link to="/litigation-management" class="hover:text-blue-600 transition-colors">Litigation Management</router-link></li>
            <li><a href="https://globetrotter.finance/privacy/" class="hover:text-blue-600 transition-colors">Privacy</a></li>
            <li><a href="https://globetrotter.finance/terms/" class="hover:text-blue-600 transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>

      <!-- Newsletter subscription -->
      <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
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
      </div> -->

      <!-- Bottom section with copyright -->
      <el-row class="flex flex-col md:flex-row justify-between items-center border-gray-200">
        <p class="text-gray-500 text-sm">
          &copy; 2025 Globetrotter Finance. All rights reserved.
        </p>
        <!-- <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600 transition-colors">Privacy</a>
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600 transition-colors">Terms</a>
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600 transition-colors">Cookies</a>
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600 transition-colors">Sitemap</a>
        </div> -->
      </el-row>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
</style>