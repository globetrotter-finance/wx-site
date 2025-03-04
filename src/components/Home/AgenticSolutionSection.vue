<template>
    <section class="py-20 px-4 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <!-- Background decoration elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div class="absolute bottom-40 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div class="container mx-auto max-w-6xl relative z-10">
        <!-- Section header -->
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent mb-4">Agentic Solutions</h2>
          <p class="text-gray-600 text-lg">Intelligent workflow automation that adapts to your enterprise needs with minimal effort.</p>
        </div>
        
        <!-- Main features grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Feature 1: Automate Smarter -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Automate Smarter, Not Harder</h3>
            <p class="text-gray-600">Orchestrate complex workflows with intuitive design tools that make automation accessible to everyone on your team.</p>
          </div>
          
          <!-- Feature 2: Simplicity -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Simplicity</h3>
            <p class="text-gray-600">Clean interfaces and intuitive design principles make complex automations accessible to everyone, regardless of technical expertise.</p>
          </div>
          
          <!-- Feature 3: Language Agnostic -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Language Agnostic Workflows</h3>
            <p class="text-gray-600">Build workflows in any programming language your team prefers, with seamless integration between different systems and platforms.</p>
          </div>
        </div>
        
        <!-- Workflow Process Steps -->
        <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-16">
          <h3 class="text-2xl font-semibold mb-8 text-center text-gray-800">Your Workflow Journey</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <!-- Step 1 -->
            <div class="flex flex-col items-center text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold text-xl">1</div>
              <h4 class="font-semibold text-lg mb-2">Define</h4>
              <p class="text-gray-600 text-sm">Create custom workflows tailored to your specific business processes and needs.</p>
            </div>
            
            <!-- Step 2 -->
            <div class="flex flex-col items-center text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold text-xl">2</div>
              <h4 class="font-semibold text-lg mb-2">Integrate</h4>
              <p class="text-gray-600 text-sm">Connect with your existing tech stack seamlessly, with support for 500+ plugins.</p>
            </div>
            
            <!-- Step 3 -->
            <div class="flex flex-col items-center text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold text-xl">3</div>
              <h4 class="font-semibold text-lg mb-2">Schedule</h4>
              <p class="text-gray-600 text-sm">Set up automated runs based on time, events, or triggers from other systems.</p>
            </div>
            
            <!-- Step 4 -->
            <div class="flex flex-col items-center text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold text-xl">4</div>
              <h4 class="font-semibold text-lg mb-2">Execute</h4>
              <p class="text-gray-600 text-sm">Run workflows reliably with full monitoring, logging, and error handling.</p>
            </div>
          </div>
        </div>
        
        <!-- Additional Features -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Language Integration -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Language Integration</h3>
                <p class="text-gray-600 mb-4">Harness the power of natural language understanding to trigger your workflows with simple commands.</p>
                <div class="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <p class="text-gray-700 font-mono text-sm">"Find my payslips" → <span class="text-blue-600">Triggers your relevant workflow</span></p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Permissions -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Enterprise-Grade Permissions</h3>
                <p class="text-gray-600">Granular access controls ensure each team member has exactly the permissions they need—no more, no less.</p>
              </div>
            </div>
          </div>
          
          <!-- Enterprise Search -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2 text-gray-800">Enterprise Search</h3>
                <p class="text-gray-600">Connect directly to your organizational knowledge graph for intelligent, context-aware searches across all your enterprise data.</p>
              </div>
            </div>
          </div>
          
          <!-- Integrations -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2 text-gray-800">500+ Integrations</h3>
                <p class="text-gray-600">Connect with all the tools you already use and love through our extensive plugin library.</p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <div class="bg-gray-100 p-1 rounded-md">
                    <svg class="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor"><path d="M22.6 11.2c0-6.3-5.2-7.2-5.2-7.2v14.3c0 4.4-5.3 5.8-8.5 2.1v3.4C15 31.5 22.6 21.7 22.6 11.2zM1 14.5V2.3c4.9 0 8.8 3.9 8.8 8.8V18h6.8c0-10.3-8.3-18.6-18.6-18.6v16.5l4.1-4.1z"/></svg>
                  </div>
                  <div class="bg-gray-100 p-1 rounded-md">
                    <svg class="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor"><path d="M1.2 8.2l11-2c0-1.7-1.4-2.9-3-2.9-1.7 0-3 1.3-3 2.9v6.7c0 .7-.7 1.3-1.5 1.3s-1.5-.7-1.5-1.3v-3c0-.3-.2-.5-.5-.5S2 9.7 2 10v3c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V6.9l12.1-2v11.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5v-3c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3c0 .7-.7 1.3-1.5 1.3s-1.5-.7-1.5-1.3V4.3L1.2 8.2z"/></svg>
                  </div>
                  <div class="bg-gray-100 p-1 rounded-md">
                    <svg class="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.7C5.7 1.7.6 6.8.6 13.1c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-1.9c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.6 1.3 3.3 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9.1-6.3-5-11.4-11.3-11.4z"/></svg>
                  </div>
                  <div class="text-gray-500 text-sm flex items-center">+ 500 more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- CTA button -->
        <div class="mt-16 text-center">
          <a href="#" class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1">
            <span>Start Automating Today</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        
        <!-- Floating badge -->
        
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AgenticSolutions'
  }
  </script>
  
  <style scoped>
  @keyframes float {
    0% {
      transform: translateY(0px) rotate(-3deg);
    }
    50% {
      transform: translateY(-10px) rotate(-4deg);
    }
    100% {
      transform: translateY(0px) rotate(-3deg);
    }
  }
  
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  </style>