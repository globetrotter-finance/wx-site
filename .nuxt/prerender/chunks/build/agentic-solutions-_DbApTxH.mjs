import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/server-renderer/index.mjs';
import { H as Header, _ as _sfc_main$3 } from './Footer-DEt8svul.mjs';
import { ElStep, ElSteps, ElButton } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/element-plus/es/index.mjs';
import { Link, Clock, HomeFilled } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@element-plus/icons-vue/dist/index.js';
import { resolveComponent, mergeProps, withCtx, createTextVNode, createBlock, openBlock, createVNode, resolveDynamicComponent, useSSRContext } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/index.mjs';
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

const _sfc_main$2 = {
  name: "AgenticSolutionsPage",
  components: {
    ElButton,
    ElSteps,
    ElStep,
    HomeFilled,
    Clock,
    Link
  },
  data() {
    return {
      activeStep: 0,
      benefits: [
        {
          title: "Lightning-Fast Deployment",
          description: "Launch sophisticated automation in just 5 minutes with an effortless setup process.",
          icon: "HomeFilled"
        },
        {
          title: "Unmatched Integrations",
          description: "Seamlessly connect with 500+ tools\u2014Slack, HubSpot, Zoom, and beyond.",
          icon: "Link"
        },
        {
          title: "Non-Stop Automation",
          description: "Empower your business with AI agents that work tirelessly 24/7.",
          icon: "Clock"
        }
      ],
      features: [
        { title: "Legal Solutions", description: "Automate due diligence and tax reconciliation with precision and speed." },
        { title: "Email Management", description: "Master your inbox with intelligent sorting and responses." },
        { title: "Customer Management", description: "Enhance CRM with automated data entry and actionable insights." },
        { title: "Support Automation", description: "Deliver instant, reliable customer support with AI precision." },
        { title: "Scheduling", description: "Sync calendars and manage tasks across platforms effortlessly." },
        { title: "Job Automation", description: "Eliminate repetitive tasks with smart, scalable workflows." }
      ],
      testimonials: [
        {
          quote: "Agentic Solutions transformed our workflow and saved us countless hours!",
          name: "Alice Johnson",
          position: "Operations Manager"
        },
        {
          quote: "The integration process was seamless, and the support was outstanding.",
          name: "Michael Smith",
          position: "CTO"
        },
        {
          quote: "Our team is now more productive than ever thanks to Agentic!",
          name: "Sarah Williams",
          position: "Project Lead"
        }
      ]
    };
  },
  methods: {
    nextStep() {
      if (this.activeStep < 3) {
        this.activeStep++;
      } else {
        this.activeStep = 0;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_steps = resolveComponent("el-steps");
  const _component_el_step = resolveComponent("el-step");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "agentic-solutions-page bg-gray-50 min-h-screen" }, _attrs))} data-v-297aff40><section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24 px-4 relative overflow-hidden" data-v-297aff40><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-297aff40><div class="absolute top-20 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl" data-v-297aff40></div><div class="absolute bottom-20 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl" data-v-297aff40></div><div class="absolute -bottom-20 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-40 blur-3xl" data-v-297aff40></div></div><div class="container mx-auto max-w-6xl relative z-10" data-v-297aff40><div class="flex flex-col lg:flex-row items-center justify-between gap-12" data-v-297aff40><div class="w-full lg:w-1/2 space-y-8" data-v-297aff40><div class="space-y-6" data-v-297aff40><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" data-v-297aff40><span class="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent" data-v-297aff40>Agentic</span><span class="relative inline-block" data-v-297aff40> Solutions <span class="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-blue-500 opacity-30 rounded-full" data-v-297aff40></span></span></h1><p class="text-gray-600 text-lg md:text-xl max-w-lg" data-v-297aff40> Harness the power of AI-driven automation. Build and deploy intelligent workflows instantly\u2014crafted for your business, designed for the future. </p></div><div class="flex items-center gap-8 py-4" data-v-297aff40><div class="flex items-center gap-2" data-v-297aff40><span class="text-blue-600 font-bold text-2xl" data-v-297aff40>500+</span><span class="text-gray-500 text-sm" data-v-297aff40>Integrations</span></div><div class="h-8 w-px bg-gray-200" data-v-297aff40></div><div class="flex items-center gap-2" data-v-297aff40><span class="text-blue-600 font-bold text-2xl" data-v-297aff40>5 min</span><span class="text-gray-500 text-sm" data-v-297aff40>Setup</span></div><div class="h-8 w-px bg-gray-200" data-v-297aff40></div><div class="flex items-center gap-2" data-v-297aff40><span class="text-blue-600 font-bold text-2xl" data-v-297aff40>24/7</span><span class="text-gray-500 text-sm" data-v-297aff40>Automation</span></div></div><div class="flex flex-wrap gap-4" data-v-297aff40>`);
  _push(ssrRenderComponent(_component_el_button, { class: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Get Started `);
      } else {
        return [
          createTextVNode(" Get Started ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_el_button, { class: "bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-medium py-3 px-8 rounded-lg shadow-sm transition duration-300 transform hover:-translate-y-1 flex items-center gap-2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor" data-v-297aff40${_scopeId}><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" data-v-297aff40${_scopeId}></path></svg> Watch Demo `);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5 text-blue-500",
            viewBox: "0 0 20 20",
            fill: "currentColor"
          }, [
            createVNode("path", {
              "fill-rule": "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
              "clip-rule": "evenodd"
            })
          ])),
          createTextVNode(" Watch Demo ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="w-full lg:w-1/2" data-v-297aff40><div class="relative mx-auto max-w-md" data-v-297aff40><div class="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" data-v-297aff40></div><div class="absolute top-0 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" data-v-297aff40></div><div class="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" data-v-297aff40></div><div class="relative z-10 bg-white rounded-2xl shadow-xl p-2 border border-gray-100" data-v-297aff40><div class="bg-gray-50 rounded-t-xl border-b border-gray-100 py-2 px-4 flex items-center" data-v-297aff40><div class="flex space-x-1.5" data-v-297aff40><div class="w-3 h-3 rounded-full bg-red-400" data-v-297aff40></div><div class="w-3 h-3 rounded-full bg-yellow-400" data-v-297aff40></div><div class="w-3 h-3 rounded-full bg-green-400" data-v-297aff40></div></div><div class="mx-auto bg-white rounded-md py-1 px-3 text-xs text-gray-500 flex items-center" data-v-297aff40><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-297aff40><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" data-v-297aff40></path></svg> agentic.yourcompany.com </div></div><img src="https://via.placeholder.com/450x300?text=Agentic+Dashboard" alt="Dashboard Preview" class="w-full h-auto rounded-b-xl" data-v-297aff40></div></div></div></div></div></section><section class="py-32 px-6" data-v-297aff40><div class="container mx-auto max-w-6xl" data-v-297aff40><h2 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20" data-v-297aff40>Why Choose Agentic Solutions?</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-12" data-v-297aff40><!--[-->`);
  ssrRenderList($data.benefits, (benefit, index) => {
    _push(`<div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100" data-v-297aff40><div class="text-blue-600 mb-6" data-v-297aff40>`);
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(benefit.icon), { class: "w-10 h-10" }, null), _parent);
    _push(`</div><h3 class="text-xl font-semibold text-gray-900 mb-4" data-v-297aff40>${ssrInterpolate(benefit.title)}</h3><p class="text-gray-600 text-lg" data-v-297aff40>${ssrInterpolate(benefit.description)}</p></div>`);
  });
  _push(`<!--]--></div></div></section><section class="py-32 px-6 bg-gradient-to-br from-blue-50 to-white" data-v-297aff40><div class="container mx-auto max-w-6xl" data-v-297aff40><h2 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20" data-v-297aff40>How It Works</h2><div class="flex flex-col md:flex-row items-center justify-between gap-12" data-v-297aff40><div class="w-full md:w-1/2 space-y-8" data-v-297aff40>`);
  _push(ssrRenderComponent(_component_el_steps, {
    active: $data.activeStep,
    "finish-status": "success",
    class: "max-w-lg mx-auto"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_step, {
          title: "Sign Up",
          description: "Begin your journey with a quick and seamless onboarding experience."
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_step, {
          title: "Configure",
          description: "Easily set up your AI agent with intuitive prompts."
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_step, {
          title: "Integrate",
          description: "Connect with 500+ tools like Slack, Zoom, and more effortlessly."
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_step, {
          title: "Launch",
          description: "Go live in under 5 minutes\u2014automation starts immediately."
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_step, {
            title: "Sign Up",
            description: "Begin your journey with a quick and seamless onboarding experience."
          }),
          createVNode(_component_el_step, {
            title: "Configure",
            description: "Easily set up your AI agent with intuitive prompts."
          }),
          createVNode(_component_el_step, {
            title: "Integrate",
            description: "Connect with 500+ tools like Slack, Zoom, and more effortlessly."
          }),
          createVNode(_component_el_step, {
            title: "Launch",
            description: "Go live in under 5 minutes\u2014automation starts immediately."
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-center" data-v-297aff40>`);
  _push(ssrRenderComponent(_component_el_button, {
    onClick: $options.nextStep,
    class: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Next Step `);
      } else {
        return [
          createTextVNode(" Next Step ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="w-full md:w-1/2" data-v-297aff40><div class="relative mx-auto max-w-md" data-v-297aff40><div class="relative z-10 bg-white rounded-2xl shadow-xl p-2 border border-gray-100" data-v-297aff40><img src="https://via.placeholder.com/500x300?text=Workflow+Preview" alt="Agentic Workflow" class="w-full h-auto rounded-xl" data-v-297aff40></div></div></div></div></div></section><section class="py-32 px-6" data-v-297aff40><div class="container mx-auto max-w-6xl" data-v-297aff40><h2 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20" data-v-297aff40>Core Features</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" data-v-297aff40><!--[-->`);
  ssrRenderList($data.features, (feature, index) => {
    _push(`<div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100" data-v-297aff40><h3 class="text-xl font-semibold text-blue-700 mb-4" data-v-297aff40>${ssrInterpolate(feature.title)}</h3><p class="text-gray-600 text-lg" data-v-297aff40>${ssrInterpolate(feature.description)}</p></div>`);
  });
  _push(`<!--]--></div></div></section><section class="py-32 px-6 bg-gradient-to-br from-white to-blue-50" data-v-297aff40><div class="container mx-auto max-w-6xl" data-v-297aff40><h2 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20" data-v-297aff40>What Our Clients Say</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" data-v-297aff40><!--[-->`);
  ssrRenderList($data.testimonials, (testimonial, index) => {
    _push(`<div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100" data-v-297aff40><p class="text-lg text-gray-600 mb-4" data-v-297aff40>\u201C${ssrInterpolate(testimonial.quote)}\u201D</p><h4 class="font-semibold text-blue-700" data-v-297aff40>${ssrInterpolate(testimonial.name)}</h4><span class="text-gray-500" data-v-297aff40>${ssrInterpolate(testimonial.position)}</span></div>`);
  });
  _push(`<!--]--></div></div></section><section class="py-32 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50" data-v-297aff40><div class="container mx-auto max-w-6xl text-center space-y-8" data-v-297aff40><h2 class="text-4xl md:text-5xl font-bold text-gray-900" data-v-297aff40>Elevate Your Workflow</h2><p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto" data-v-297aff40>Experience the future of automation with Agentic Solutions\u2014trusted by thousands to streamline operations and achieve success.</p>`);
  _push(ssrRenderComponent(_component_el_button, { class: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-10 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Try It Free `);
      } else {
        return [
          createTextVNode(" Try It Free ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/SolutionAgentic.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SolutionAgentic = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-297aff40"]]);
const _sfc_main$1 = {
  __name: "AgenticSolution",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(SolutionAgentic, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/AgenticSolution.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "agentic-solutions",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agentic-solutions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=agentic-solutions-_DbApTxH.mjs.map
