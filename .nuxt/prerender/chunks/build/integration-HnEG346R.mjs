import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/server-renderer/index.mjs';
import { H as Header, _ as _sfc_main$4 } from './Footer-B93YZ10M.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/renderer.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/h3/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/destr/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/hookable/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/ofetch/dist/node.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/unstorage/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/ohash/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/klona/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/defu/dist/defu.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/scule/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/unctx/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/pathe/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/nuxt/node_modules/unhead/dist/server.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/devalue/index.js';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@element-plus/icons-vue/dist/index.js';

const integrations = [
  // Personal Assistant
  {
    id: "slack",
    name: "Slack",
    category: "Communication",
    description: "Connect team communications and automate notifications with Slack integration.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-slack-logo-1481820-1254330.png",
    connections: 24863
  },
  {
    id: "microsoft-teams",
    name: "Microsoft Teams",
    category: "Communication",
    description: "Streamline collaboration and meeting management with Microsoft Teams.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-microsoft-teams-1411836-1194515.png",
    connections: 18432
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    category: "Productivity",
    description: "Sync schedules and automate meeting coordination with Google Calendar.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-google-calendar-5902942-4897523.png",
    connections: 31254
  },
  {
    id: "outlook",
    name: "Outlook",
    category: "Productivity",
    description: "Connect Microsoft Outlook for email and calendar integration.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-outlook-1411835-1194513.png",
    connections: 27645
  },
  {
    id: "linear",
    name: "Linear",
    category: "Project Management",
    description: "Streamline issue tracking and project workflows with Linear.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-linear-6577846-5442157.png",
    connections: 8632
  },
  {
    id: "notion",
    name: "Notion",
    category: "Productivity",
    description: "Connect your company wiki and knowledge base with Notion integration.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-notion-2296040-1912233.png",
    connections: 12548
  },
  {
    id: "telegram",
    name: "Telegram",
    category: "Communication",
    description: "Create automated messaging and alerts through Telegram.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-telegram-3691230-3073750.png",
    connections: 15728
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "Communication",
    description: "Connect with customers and teams through WhatsApp Business API.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-whatsapp-43-189795.png",
    connections: 19425
  },
  // Marketing/Sales
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM",
    description: "Connect your complete customer journey with HubSpot CRM platform.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-hubspot-3628867-3030333.png",
    connections: 19874
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "CRM",
    description: "Integrate customer data and automate sales processes with Salesforce CRM.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-salesforce-282298.png",
    connections: 28634
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "Marketing",
    description: "Automate email marketing campaigns and customer communications.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-mailchimp-6577845-5442156.png",
    connections: 16785
  },
  {
    id: "airtable",
    name: "Airtable",
    category: "Productivity",
    description: "Connect spreadsheets, databases and workflows with flexible Airtable integration.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-airtable-1482122-1254113.png",
    connections: 12435
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    category: "Marketing",
    description: "Reliable email delivery service for transactional and marketing emails.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-sendgrid-3629042-3030508.png",
    connections: 14352
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "Automation",
    description: "Connect with 3,000+ apps and automate workflows without coding.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-zapier-282557.png",
    connections: 21534
  },
  // Customer Support
  {
    id: "gmail",
    name: "Gmail",
    category: "Communication",
    description: "Enhance email workflows with Gmail integration for business.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-gmail-2981844-2476484.png",
    connections: 32754
  },
  {
    id: "intercom",
    name: "Intercom",
    category: "Customer Support",
    description: "Automate customer messaging and support workflows.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-intercom-3629103-3030569.png",
    connections: 15642
  },
  {
    id: "zendesk",
    name: "Zendesk",
    category: "Customer Support",
    description: "Connect customer support ticketing and satisfaction tracking.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-zendesk-226072.png",
    connections: 18956
  },
  {
    id: "freshdesk",
    name: "Freshdesk",
    category: "Customer Support",
    description: "Streamline customer support with automated ticket management and routing.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-freshdesk-3628903-3030369.png",
    connections: 9836
  },
  // Conferencing
  {
    id: "zoom",
    name: "Zoom",
    category: "Communication",
    description: "Integrate video conferencing for seamless meeting experiences.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-zoom-4069766-3364169.png",
    connections: 25483
  },
  {
    id: "google-meet",
    name: "Google Meet",
    category: "Communication",
    description: "Connect with Google Meet for integrated video conferencing.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-google-meet-7789344-6324919.png",
    connections: 18754
  },
  // Infrastructure
  {
    id: "aws",
    name: "AWS",
    category: "Cloud Services",
    description: "Connect with Amazon Web Services for cloud infrastructure automation.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-aws-1869025-1583149.png",
    connections: 17865
  },
  {
    id: "google-cloud",
    name: "Google Cloud",
    category: "Cloud Services",
    description: "Integrate Google Cloud Platform for scalable infrastructure solutions.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-google-cloud-2038785-1721675.png",
    connections: 15846
  },
  {
    id: "google-workspace",
    name: "Google Workspace",
    category: "Productivity",
    description: "Connect with Google Workspace for seamless document and drive integration.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-google-docs-2038784-1721674.png",
    connections: 22143
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: "Cloud Services",
    description: "Connect Microsoft Azure services for enterprise cloud solutions.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-azure-1868965-1583142.png",
    connections: 16752
  },
  {
    id: "github",
    name: "GitHub",
    category: "Development",
    description: "Connect repositories and automate development workflows.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-github-1521500-1288242.png",
    connections: 27894
  },
  {
    id: "gitlab",
    name: "GitLab",
    category: "Development",
    description: "Complete DevOps platform with version control and CI/CD pipelines.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-gitlab-282507.png",
    connections: 14286
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "Payments",
    description: "Integrate payment processing and subscription management.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-stripe-2-498440.png",
    connections: 21567
  },
  {
    id: "paypal",
    name: "PayPal",
    category: "Payments",
    description: "Secure payment gateway integration for global transactions.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-paypal-29-226408.png",
    connections: 25748
  },
  {
    id: "dropbox",
    name: "Dropbox",
    category: "Storage",
    description: "Cloud storage and file synchronization solution for businesses.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-dropbox-174-675702.png",
    connections: 18753
  },
  {
    id: "box",
    name: "Box",
    category: "Storage",
    description: "Enterprise content management platform with secure file sharing.",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-box-291-459481.png",
    connections: 11245
  }
];
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" }, _attrs))} data-v-e6c2bbeb><div class="container mx-auto max-w-6xl" data-v-e6c2bbeb><div class="text-center mb-12 sm:mb-16" data-v-e6c2bbeb><h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-v-e6c2bbeb> Integration That <span class="text-blue-600" data-v-e6c2bbeb>Powers Your Business</span></h2><p class="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto" data-v-e6c2bbeb> Discover how Agentic Solutions transforms your workflow with seamless connectivity </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-v-e6c2bbeb><div class="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all" data-v-e6c2bbeb><h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4" data-v-e6c2bbeb>Seamless Connectivity</h3><p class="text-gray-600 text-sm sm:text-base" data-v-e6c2bbeb> Agentic Solutions connects effortlessly with any ERP system or business software\u2014whether it\u2019s SAP, Oracle, Microsoft Dynamics, or a custom-built solution. Our technology bridges the gap between modern automation and legacy systems. </p></div><div class="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all" data-v-e6c2bbeb><h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4" data-v-e6c2bbeb>Out-of-the-Box &amp; Custom Connectors</h3><p class="text-gray-600 text-sm sm:text-base" data-v-e6c2bbeb> Utilize our pre-built connectors to quickly integrate with your existing systems. For unique configurations, our flexible, no-code integration capabilities ensure a smooth, tailored connection without heavy IT involvement. </p></div><div class="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all" data-v-e6c2bbeb><h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4" data-v-e6c2bbeb>Real-Time Synchronization</h3><p class="text-gray-600 text-sm sm:text-base" data-v-e6c2bbeb> Experience uninterrupted data flow between your systems. Real-time synchronization ensures that your teams always have access to up-to-date information for faster, smarter decision-making. </p></div><div class="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all" data-v-e6c2bbeb><h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4" data-v-e6c2bbeb>Future-Proof Integration</h3><p class="text-gray-600 text-sm sm:text-base" data-v-e6c2bbeb> As your business evolves, our platform scales with you. Designed to adapt to emerging technologies and changing business needs, Agentic Solutions keeps your processes connected and competitive. </p></div></div><div class="text-center mt-10 sm:mt-12" data-v-e6c2bbeb><a href="#" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1" data-v-e6c2bbeb> Learn More About Our Integration Capabilities </a></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/IntegrationFeatures.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IntegrationFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e6c2bbeb"]]);
const _sfc_main$2 = {
  components: {
    IntegrationFeatures
  },
  data() {
    return {
      searchQuery: "",
      selectedCategory: "",
      sortOption: "popular",
      integrations
    };
  },
  computed: {
    categories() {
      return [...new Set(this.integrations.map((i) => i.category))].sort();
    },
    filteredIntegrations() {
      let results = this.integrations.filter(
        (i) => (!this.searchQuery || i.name.toLowerCase().includes(this.searchQuery.toLowerCase())) && (!this.selectedCategory || i.category === this.selectedCategory)
      );
      if (this.sortOption === "name-asc") results.sort((a, b) => a.name.localeCompare(b.name));
      if (this.sortOption === "name-desc") results.sort((a, b) => b.name.localeCompare(a.name));
      if (this.sortOption === "popular") results.sort((a, b) => b.connections - a.connections);
      if (this.sortOption === "category") results.sort((a, b) => a.category.localeCompare(b.category));
      return results;
    }
  },
  methods: {
    resetFilters() {
      this.searchQuery = "";
      this.selectedCategory = "";
      this.sortOption = "popular";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_integration_features = resolveComponent("integration-features");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white overflow-hidden" }, _attrs))} data-v-eea80a69><section class="relative h-screen flex items-center justify-center overflow-hidden" data-v-eea80a69><div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50" data-v-eea80a69></div><div class="absolute inset-0 overflow-hidden opacity-30" data-v-eea80a69><div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl" data-v-eea80a69></div><div class="absolute top-1/4 -left-24 w-80 h-80 bg-indigo-100 rounded-full blur-3xl" data-v-eea80a69></div><div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full blur-3xl" data-v-eea80a69></div></div><div class="container mx-auto px-6 relative z-10 text-center max-w-4xl" data-v-eea80a69><h1 class="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 mb-6" data-v-eea80a69> Seamless <span class="font-semibold text-blue-600" data-v-eea80a69>Integrations</span></h1><p class="text-lg sm:text-xl text-gray-600 font-light mb-10 leading-relaxed" data-v-eea80a69> Connect your workflow to our powerful ecosystem and experience a new level of productivity </p><button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1" data-v-eea80a69> Explore Integrations </button></div></section>`);
  _push(ssrRenderComponent(_component_integration_features, null, null, _parent));
  _push(`<main class="container mx-auto px-6 py-24 relative" data-v-eea80a69><div class="max-w-6xl mx-auto" data-v-eea80a69><div class="text-center mb-16" data-v-eea80a69><h2 class="text-3xl sm:text-4xl font-light text-gray-800" data-v-eea80a69> Discover Our <span class="font-semibold" data-v-eea80a69>Integration Ecosystem</span></h2><p class="text-gray-600 mt-4 max-w-2xl mx-auto" data-v-eea80a69> Browse our collection of powerful integrations designed to enhance your workflow and boost productivity </p></div><div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-16 border border-gray-100" data-v-eea80a69><div class="flex flex-col lg:flex-row items-stretch gap-6" data-v-eea80a69><div class="flex-1 relative" data-v-eea80a69><input id="search" type="text"${ssrRenderAttr("value", $data.searchQuery)} placeholder="Search integrations..." class="w-full rounded-xl border border-gray-200 shadow-sm px-12 py-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all" data-v-eea80a69><span class="absolute left-4 top-4 text-gray-400" data-v-eea80a69><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-eea80a69><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-eea80a69></path></svg></span></div><div class="flex flex-col sm:flex-row gap-4" data-v-eea80a69><select class="rounded-xl border border-gray-200 shadow-sm px-4 py-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all appearance-none bg-white min-w-48" data-v-eea80a69><option value="popular" data-v-eea80a69${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "popular") : ssrLooseEqual($data.sortOption, "popular")) ? " selected" : ""}>Most Popular</option><option value="name-asc" data-v-eea80a69${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "name-asc") : ssrLooseEqual($data.sortOption, "name-asc")) ? " selected" : ""}>Name (A-Z)</option><option value="name-desc" data-v-eea80a69${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "name-desc") : ssrLooseEqual($data.sortOption, "name-desc")) ? " selected" : ""}>Name (Z-A)</option><option value="category" data-v-eea80a69${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "category") : ssrLooseEqual($data.sortOption, "category")) ? " selected" : ""}>Category</option></select><select class="rounded-xl border border-gray-200 shadow-sm px-4 py-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all appearance-none bg-white min-w-48" data-v-eea80a69><option value="" data-v-eea80a69${ssrIncludeBooleanAttr(Array.isArray($data.selectedCategory) ? ssrLooseContain($data.selectedCategory, "") : ssrLooseEqual($data.selectedCategory, "")) ? " selected" : ""}>All Categories</option><!--[-->`);
  ssrRenderList($options.categories, (category) => {
    _push(`<option${ssrRenderAttr("value", category)} data-v-eea80a69${ssrIncludeBooleanAttr(Array.isArray($data.selectedCategory) ? ssrLooseContain($data.selectedCategory, category) : ssrLooseEqual($data.selectedCategory, category)) ? " selected" : ""}>${ssrInterpolate(category)}</option>`);
  });
  _push(`<!--]--></select><button class="px-6 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium" data-v-eea80a69> Reset Filters </button></div></div></div>`);
  if ($options.filteredIntegrations.length) {
    _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-v-eea80a69><!--[-->`);
    ssrRenderList($options.filteredIntegrations, (integration) => {
      _push(`<div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all group flex flex-col h-full transform hover:-translate-y-1" data-v-eea80a69><div class="p-6 border-b border-gray-50" data-v-eea80a69><div class="flex items-center justify-between" data-v-eea80a69><div class="flex items-center space-x-4" data-v-eea80a69><div class="bg-gray-50 p-3 rounded-xl" data-v-eea80a69><img${ssrRenderAttr("src", integration.logo)}${ssrRenderAttr("alt", integration.name)} class="h-10 w-10 object-contain" data-v-eea80a69></div><h3 class="text-xl font-medium text-gray-800" data-v-eea80a69>${ssrInterpolate(integration.name)}</h3></div><span class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full" data-v-eea80a69>${ssrInterpolate(integration.category)}</span></div></div><div class="p-6 flex-grow" data-v-eea80a69><p class="text-gray-600 leading-relaxed" data-v-eea80a69>${ssrInterpolate(integration.description)}</p></div><div class="p-6 border-t border-gray-50 bg-gray-50" data-v-eea80a69><div class="flex justify-between items-center" data-v-eea80a69><span class="text-sm text-gray-500 font-medium" data-v-eea80a69>${ssrInterpolate(integration.connections.toLocaleString())}+ users</span><button class="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm" data-v-eea80a69> Connect </button></div></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$options.filteredIntegrations.length) {
    _push(`<div class="text-center py-20" data-v-eea80a69><div class="inline-block p-6 bg-gray-50 rounded-full mb-6" data-v-eea80a69><svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-eea80a69><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-eea80a69></path></svg></div><h3 class="text-2xl font-medium text-gray-700 mb-2" data-v-eea80a69>No integrations found</h3><p class="text-gray-500" data-v-eea80a69>Try adjusting your search filters or browse all integrations.</p><button class="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all" data-v-eea80a69> View All Integrations </button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.filteredIntegrations.length > 0) {
    _push(`<div class="mt-16 flex justify-center" data-v-eea80a69><div class="flex space-x-2" data-v-eea80a69><button class="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50" data-v-eea80a69><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-eea80a69><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-eea80a69></path></svg></button><button class="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-600 text-white" data-v-eea80a69>1</button><button class="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-700 hover:bg-gray-50" data-v-eea80a69>2</button><button class="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-700 hover:bg-gray-50" data-v-eea80a69>3</button><button class="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50" data-v-eea80a69><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-eea80a69><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-eea80a69></path></svg></button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></main></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/Integration.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Integration = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-eea80a69"]]);
const _sfc_main$1 = {
  __name: "Integration",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Integration, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Integration.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "integration",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/integration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=integration-HnEG346R.mjs.map
