<template>
  <section class="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24 px-4 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 -right-20 sm:top-20 sm:-right-40 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
      <div class="absolute bottom-10 -left-20 sm:bottom-20 sm:-left-40 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
      <div class="absolute -bottom-10 sm:-bottom-20 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
    </div>

    <!-- Main content container -->
    <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <!-- Left side: Text content -->
        <div class="w-full lg:w-1/2 space-y-8">
          <div class="space-y-6">
            <!-- Headline -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 text-center lg:text-left">
              Streamline Workflows with <span class="text-blue-600">Agentic Solutions</span>
            </h1>
            
            <!-- Subheadline -->
            <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              Optimize complex processes into efficient, intelligent workflows. Our platform accelerates product development, reducing cycles from months to minutes for industries like Fintech, Legal, Healthcare, and Media.
            </p>
          </div>
          
          <!-- Stats bar -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div class="flex items-center gap-3">
              <span class="text-blue-600 font-semibold text-2xl">10</span>
              <span class="text-gray-600 text-sm">Minutes to build & launch—no coding required</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-blue-600 font-semibold text-2xl">24/7</span>
              <span class="text-gray-600 text-sm">AI assistant with zero downtime</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-blue-600 font-semibold text-2xl">Autopilot</span>
              <span class="text-gray-600 text-sm">AI-driven workflows</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-blue-600 font-semibold text-2xl">Flexible</span>
              <span class="text-gray-600 text-sm">Seamless integrations—APIs optional</span>
            </div>
          </div>
          
          <!-- CTA buttons -->
          <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300 transform hover:-translate-y-1">
              Request a Demo
            </button>
            <button class="bg-white border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-medium py-3 px-8 rounded-md shadow-sm transition duration-300 transform hover:-translate-y-1 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
        
        <!-- Right side: Visualization -->
        <div class="w-full lg:w-1/2 mt-12 lg:mt-0">
          <div class="relative mx-auto max-w-md">
            <!-- Device mockup -->
            <div class="bg-white rounded-xl shadow-lg p-4 border border-gray-100 transform transition-all hover:shadow-xl duration-300">
              <!-- Browser header -->
              <div class="bg-gray-100 rounded-t-lg py-2 px-4 flex items-center">
                <div class="flex space-x-2">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div class="mx-auto bg-white rounded px-3 py-1 text-sm text-gray-500 shadow-sm">
                  workflow.yourcompany.com
                </div>
              </div>
              
              <!-- Website content mockup -->
              <div class="p-6 bg-white rounded-b-lg">
                <div class="space-y-6">
                  <!-- Workflow builder header -->
                  <div class="w-full h-8 bg-gray-100 rounded flex items-center px-3">
                    <div class="w-1/3 h-4 bg-blue-100 rounded"></div>
                  </div>
                  
                  <!-- Workflow nodes -->
                  <div class="grid grid-cols-3 gap-4">
                    <div class="space-y-2 transform transition-all hover:-translate-y-1 duration-300">
                      <div class="h-24 bg-blue-50 rounded-lg flex items-center justify-center shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                      </div>
                      <div class="w-2/3 h-4 bg-gray-200 rounded mx-auto"></div>
                    </div>
                    <div class="space-y-2 transform transition-all hover:-translate-y-1 duration-300">
                      <div class="h-24 bg-blue-100 rounded-lg flex items-center justify-center shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div class="w-2/3 h-4 bg-gray-200 rounded mx-auto"></div>
                    </div>
                    <div class="space-y-2 transform transition-all hover:-translate-y-1 duration-300">
                      <div class="h-24 bg-blue-200 rounded-lg flex items-center justify-center shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div class="w-2/3 h-4 bg-gray-200 rounded mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth transitions */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects */
button:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Enhanced styling */
.bg-gradient-to-br {
  background: linear-gradient(to bottom right, #EFF6FF, #FFFFFF, #EFF6FF);
}

.text-gray-900 {
  color: #1F2937;
}

.text-gray-600 {
  color: #4B5563;
}

.text-blue-600 {
  color: #2563EB;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  section {
    min-height: auto;
    padding-top: 4rem;
    padding-bottom: 4rem;
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