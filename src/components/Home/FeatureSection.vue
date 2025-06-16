<template>
  <section class="py-24 px-4 bg-white relative overflow-hidden">
    <!-- Background pattern/decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-40 -left-40 w-96 h-96 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
      <div class="absolute bottom-40 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
    </div>

    <!-- Main content container -->
    <div class="container mx-auto max-w-6xl relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">Comprehensive </span>
          <span class="relative inline-block">
            Solutions
            <span class="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-blue-500 opacity-30 rounded-full"></span>
          </span>
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto mt-5">
          From automated compliance tracking to litigation support and knowledge management — we bring intelligence to your most complex workflows.
        </p>
        <p class="text-gray-600 max-w-2xl mx-auto mt-5">
          <span class="text-blue-600 fw-bold">Saras</span> is your unified digital workspace that simplifies the most challenging operations in Legal, Audit, and Finance.
        </p>
        <p class="text-gray-600 max-w-2xl mx-auto mt-5">
          <span class="text-blue-600 fw-bold">Saras</span> combines deep industry insight with cutting-edge automation.
        </p>
      </div>

      <!-- Solution cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Legal Solutions Card -->
        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group" v-for="item in solutions">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 mb-4" v-html="item.description"></p>
            <ul class="space-y-2">
              <li class="flex items-center" v-for="cl in item.checklistItems">
                <div class="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-sm text-gray-600">{{ cl }}</span>
              </li>
            </ul>
          </div>
          <!-- <div class="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <a href="#" class="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div> -->
        </div>


      </div>

      <!-- CTA Button -->
      <div class="text-center mt-12">
        <!-- <router-link to="/solutions" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1">
          Explore All Solutions
        </router-link> -->
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps();
defineOptions({
  name: 'FeaturesSolutionsSection'
});

const solutions = [
  {
    "title": "Compliance, Risk & Governance",
    "description": "<br>Stay in control with a 360° compliance view.<br><br>Track regulatory and internal obligations, monitor risk zones, and enforce closure accountability.",
    "checklistItems": [
      "Risk Hotspot Identification",
      "Central Compliance Dashboard",
      "Real-time Status & Audit Trails"
    ]
  },
  {
    "title": "Litigation Management",
    "description": "<br>Save over 100 hours per case.<br><br>Fetch notices, summarize legal documents, and prepare drafts with intelligent automation.",
    "checklistItems": [
      "Automatic Notice Downloading",
      "AI-Powered Notice Parsing",
      "Case Law Discovery & Draft Generation",
    ]
  },
  {
    "title": "Knowledge & Advisory",
    "description": "<br>Empower your team with searchable intelligence.<br><br>Centralize your firm’s data and use AI to get direct, context-aware answers.",
    "checklistItems": [
      "Enterprise Data Discovery",
      "FileBot for Document Insights",
      "Tax & Legal ChatBot"
    ]
  },
  {
    "title": "Audits & Due Diligence",
    "description": "<br>While traditionally it has taken months to finish due diligence, we can help you accelerate this in less than 10 mins.",
    "checklistItems": [
      "FinDD - Financial Healths, Coverage",
      "GST / DT DD",
      "People, IP, Legal DD etc"
    ]
  },
  {
    "title": "Agentic Automation Platform",
    "description": "<br>Turn expertise into automation.<br>AI agents that independently compute taxes, interpret notices, and draft legal documents.",
    "checklistItems": [
      "Tax Computation Agent",
      "Legal Interpretation Agent",
      "Writ & Appeal Drafting Agent",
      "And infinitely more ..."
    ]
  },
]
</script>
