<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden">
    <!-- Background pattern/decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 -right-20 sm:top-20 sm:-right-40 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
      <div class="absolute bottom-10 -left-20 sm:bottom-20 sm:-left-40 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
      <div class="absolute -bottom-10 sm:-bottom-20 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
    </div>
    
    <!-- Main content container -->
    <div class="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
        
        <!-- Left side: Text content -->
        <div class="w-full lg:w-1/2 space-y-6 sm:space-y-8">
          <div class="space-y-4 sm:space-y-6">
            <!-- Responsive Headline -->
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
              Revolutionize Your Workflows with Agentic Solutions
            </h1>
            
            <!-- Responsive Subheadline -->
            <p class="text-gray-600 text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              Transform complex, time-consuming processes into rapid & intelligent outcomes. 
              
            </p>
            <p class="text-gray-600 text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0 text-center lg:text-left">       
              Our platform reduces product building cycles from months to mere minutes - empowering businesses in Fintech, Legal, Healthcare, Media,  and beyond.            </p>
          </div>
          
          <!-- Responsive Stats bar -->
          <div class="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-8 py-4">
            <div class="flex items-center gap-2">
              <span class="text-gray-500 text-xs sm:text-sm">1. Build & launch in </span>
              <span class="text-blue-600 font-bold text-xl sm:text-2xl">10 mins</span>
              <span class="text-gray-500 text-xs sm:text-sm">minutes—no coding needed! </span>

            </div>
            <div class="h-6 sm:h-8 w-px bg-gray-200"></div>
            <div class="flex items-center gap-2">
              <span class="text-gray-500 text-xs sm:text-sm">Available</span>
              <span class="text-blue-600 font-bold text-xl sm:text-2xl">24/7</span>
            </div>
            <div class="h-6 sm:h-8 w-px bg-gray-200"></div>
            <div class="flex items-center gap-2">
              <span class="text-gray-500 text-xs sm:text-sm">Integrate with </span>
              <span class="text-blue-600 font-bold text-xl sm:text-2xl">API</span>

              <span class="text-gray-500 text-xs sm:text-sm">and </span>
              <span class="text-blue-600 font-bold text-xl sm:text-2xl">NON-API</span>

              <span class="text-gray-500 text-xs sm:text-sm"> Systems </span>
              <!-- <span class="text-gray-500 text-xs sm:text-sm">Integrate with API and Non-Api Systems </span>

              <span class="text-blue-600 font-bold text-xl sm:text-2xl">A</span> -->
            </div>
          </div>
          
          <!-- Responsive CTA buttons -->
          <div class="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
              Request a Demo
            </button>
            <button class="bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg shadow-sm transition duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 sm:h-5 w-4 sm:w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
        
        <!-- Right side: Interactive visualization -->
        <div class="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div class="relative mx-auto max-w-md sm:max-w-lg">
            <!-- Animated blobs in background -->
            <div class="absolute top-0 -left-2 sm:-left-4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute top-0 -right-2 sm:-right-4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-4 sm:-bottom-8 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <!-- Device mockup with floating elements -->
            <div class="relative z-10 bg-white rounded-2xl shadow-xl p-2 border border-gray-100">
              <!-- Browser header -->
              <div class="bg-gray-50 rounded-t-xl border-b border-gray-100 py-1.5 sm:py-2 px-3 sm:px-4 flex items-center">
                <div class="flex space-x-1 sm:space-x-1.5">
                  <div class="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-400"></div>
                  <div class="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-400"></div>
                </div>
                <div class="mx-auto bg-white rounded-md py-0.5 sm:py-1 px-2 sm:px-3 text-xs text-gray-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-2.5 sm:h-3 w-2.5 sm:w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  workflow.yourcompany.com
                </div>
              </div>
              
              <!-- Website content mockup -->
              <div class="p-4 sm:p-6 bg-white rounded-b-xl">
                <div class="flex flex-col space-y-3 sm:space-y-4">
                  <!-- Workflow builder mockup -->
                  <div class="w-full h-6 sm:h-8 bg-gray-100 rounded-md flex items-center px-2 sm:px-3">
                    <div class="w-16 sm:w-24 h-3 sm:h-4 bg-blue-100 rounded-sm"></div>
                    <div class="ml-auto flex space-x-1 sm:space-x-2">
                      <div class="w-3 sm:w-4 h-3 sm:h-4 bg-blue-200 rounded-sm"></div>
                      <div class="w-3 sm:w-4 h-3 sm:h-4 bg-blue-200 rounded-sm"></div>
                      <div class="w-3 sm:w-4 h-3 sm:h-4 bg-blue-200 rounded-sm"></div>
                    </div>
                  </div>
                  
                  <!-- Workflow nodes with connections -->
                  <div class="flex items-start space-x-2 sm:space-x-4 pt-3 sm:pt-4">
                    <div class="w-1/3 space-y-1 sm:space-y-2 transform transition-all hover:-translate-y-1 hover:shadow-lg duration-500">
                      <div class="w-full h-16 sm:h-24 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 sm:h-8 w-6 sm:w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                      </div>
                      <div class="w-2/3 h-3 sm:h-4 bg-gray-200 rounded-md"></div>
                    </div>
                    
                    <div class="w-1/3 space-y-1 sm:space-y-2 transform transition-all hover:-translate-y-1 hover:shadow-lg duration-500">
                      <div class="w-full h-16 sm:h-24 bg-blue-200 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div class="w-2/3 h-3 sm:h-4 bg-gray-200 rounded-md"></div>
                    </div>
                    
                    <div class="w-1/3 space-y-1 sm:space-y-2 transform transition-all hover:-translate-y-1 hover:shadow-lg duration-500">
                      <div class="w-full h-16 sm:h-24 bg-blue-300 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 sm:h-8 w-6 sm:w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div class="w-2/3 h-3 sm:h-4 bg-gray-200 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating elements -->
            <div class="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white p-2 sm:p-3 rounded-lg shadow-md border border-gray-100 transform rotate-6 animate-float z-20">
              <div class="flex items-center gap-1.5 sm:gap-2">
                <div class="w-5 sm:w-6 h-5 sm:h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 sm:h-4 w-3 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-xs sm:text-sm font-medium">Language Powered</span>
              </div>
            </div>
            
            <div class="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white p-2 sm:p-3 rounded-lg shadow-md border border-gray-100 transform -rotate-3 animate-float animation-delay-1000 z-20">
              <div class="flex items-center gap-1.5 sm:gap-2">
                <div class="w-5 sm:w-6 h-5 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 sm:h-4 w-3 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-xs sm:text-sm font-medium">Automated workflows</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(20px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-15px, 15px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(-3deg);
  }
  50% {
    transform: translateY(-8px) rotate(-2deg);
  }
  100% {
    transform: translateY(0px) rotate(-3deg);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

/* Smooth transitions */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects */
button:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Media queries for additional fine-tuning */
@media (max-width: 640px) {
  .min-h-screen {
    min-height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width: 1024px) {
  .lg\:flex-row {
    flex-direction: row;
  }
}
</style>