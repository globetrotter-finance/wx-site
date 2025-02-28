<template>
  <section class="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
    <!-- Background pattern/decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
      <div class="absolute bottom-20 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
    </div>
    
    <!-- Content container -->
    <div class="container mx-auto max-w-5xl relative z-10">
      <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- Left side: Content -->
          <div class="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div class="space-y-6 max-w-md">
              <div class="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
                </svg>
                Get Started Today
              </div>
              
              <h2 class="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                Transform your workflows with intelligent automation
              </h2>
              
              <p class="text-gray-600">
                Join thousands of teams that have already streamlined their operations, reduced manual tasks, and saved hundreds of hours with our agentic workflow platform.
              </p>
              
              <div class="pt-2">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700">No credit card required</span>
                </div>
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700">Free 14-day trial</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700">Cancel anytime</span>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4 pt-4">
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 flex-shrink-0">
                  Start Free Trial
                </button>
                <button class="bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-medium py-3 px-8 rounded-lg shadow-sm transition duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
          
          <!-- Right side: Image/graphic -->
          <div class="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
            <!-- Decorative elements -->
            <div class="absolute top-1/4 left-1/3 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60"></div>
            <div class="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
            
            <!-- Illustration/graphic -->
            <div class="relative z-10 bg-white rounded-xl border border-gray-100 shadow-lg p-4 md:p-6 w-full max-w-sm">
              <div class="space-y-6">
                <!-- Dashboard metrics visualization -->
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="w-36 h-5 bg-gray-200 rounded-md"></div>
                    <div class="flex space-x-2">
                      <div class="w-6 h-6 bg-blue-100 rounded-md"></div>
                      <div class="w-6 h-6 bg-gray-100 rounded-md"></div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div class="bg-blue-50 rounded-lg p-3 border border-blue-100">
                      <div class="w-12 h-3 bg-blue-200 rounded-sm mb-2"></div>
                      <div class="text-lg font-bold text-blue-700">94%</div>
                      <div class="w-16 h-2 bg-blue-100 rounded-sm mt-1"></div>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <div class="w-12 h-3 bg-gray-200 rounded-sm mb-2"></div>
                      <div class="text-lg font-bold text-gray-700">45h</div>
                      <div class="w-16 h-2 bg-gray-100 rounded-sm mt-1"></div>
                    </div>
                  </div>
                </div>
                
                <!-- Chart visualization -->
                <div class="h-32 flex items-end gap-2 px-2">
                  <div class="w-1/12 h-20% bg-blue-100 rounded-t"></div>
                  <div class="w-1/12 h-40% bg-blue-200 rounded-t"></div>
                  <div class="w-1/12 h-30% bg-blue-100 rounded-t"></div>
                  <div class="w-1/12 h-60% bg-blue-300 rounded-t"></div>
                  <div class="w-1/12 h-45% bg-blue-200 rounded-t"></div>
                  <div class="w-1/12 h-75% bg-blue-400 rounded-t"></div>
                  <div class="w-1/12 h-65% bg-blue-300 rounded-t"></div>
                  <div class="w-1/12 h-90% bg-blue-500 rounded-t"></div>
                  <div class="w-1/12 h-70% bg-blue-400 rounded-t"></div>
                  <div class="w-1/12 h-85% bg-blue-500 rounded-t"></div>
                  <div class="w-1/12 h-80% bg-blue-400 rounded-t"></div>
                  <div class="w-1/12 h-95% bg-blue-600 rounded-t"></div>
                </div>
                
                <!-- Task list visualization -->
                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <div class="w-4 h-4 rounded-sm border border-blue-500 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="flex-1 h-4 bg-gray-100 rounded"></div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-4 h-4 rounded-sm border border-blue-500 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="flex-1 h-4 bg-gray-100 rounded"></div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-4 h-4 rounded-sm border border-gray-300"></div>
                    <div class="flex-1 h-4 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Testimonial strip -->
      <div class="mt-16 text-center">
        <p class="text-gray-500 text-sm mb-6">Trusted by innovative companies worldwide</p>
        <div class="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
          <div class="h-8 w-24 bg-gray-200 rounded"></div>
          <div class="h-8 w-24 bg-gray-200 rounded"></div>
          <div class="h-8 w-24 bg-gray-200 rounded"></div>
          <div class="h-8 w-24 bg-gray-200 rounded"></div>
          <div class="h-8 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaSection'
}
</script>

<style scoped>
/* Custom height percentages for chart bars */
.h-20\% {
  height: 20%;
}
.h-30\% {
  height: 30%;
}
.h-40\% {
  height: 40%;
}
.h-45\% {
  height: 45%;
}
.h-60\% {
  height: 60%;
}
.h-65\% {
  height: 65%;
}
.h-70\% {
  height: 70%;
}
.h-75\% {
  height: 75%;
}
.h-80\% {
  height: 80%;
}
.h-85\% {
  height: 85%;
}
.h-90\% {
  height: 90%;
}
.h-95\% {
  height: 95%;
}
</style>