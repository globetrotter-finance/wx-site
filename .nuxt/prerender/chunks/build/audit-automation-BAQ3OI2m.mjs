import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/server-renderer/index.mjs';
import { resolveComponent, withCtx, unref, createTextVNode, createVNode, useSSRContext } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/index.mjs';
import { H as Header, _ as _sfc_main$2 } from './Footer-bpAE6knL.mjs';
import { ElButton, ElIcon } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/element-plus/es/index.mjs';
import { CircleCheckFilled } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@element-plus/icons-vue/dist/index.js';
import { useHead } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@vueuse/head/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue-router/dist/vue-router.node.mjs';
import './server.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/h3/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/destr/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/hookable/dist/index.mjs';
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

const _sfc_main$1 = {
  __name: "AuditAutomation",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Audit Automation Software for Finance & Compliance | SARAS",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Automate audit workflows with SARAS. Identify risk areas, track audit readiness, and generate insights with AI-powered audit support tools."
        },
        {
          name: "keywords",
          content: "audit automation software, internal audit workflow tools, audit readiness platform, AI audit assistant, enterprise audit management system"
        },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "Audit Automation Software for Finance & Compliance | SARAS" },
        { property: "og:description", content: "Automate audit workflows with SARAS. Identify risk areas, track audit readiness, and generate insights with AI-powered audit support tools." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://sarasfinance.com/audit-automation" }
      ],
      link: [
        { rel: "canonical", href: "https://sarasfinance.com/audit-automation" }
      ]
    });
    const features = [
      {
        icon: "\u{1F50E}",
        title: "Audit Readiness Tracker",
        description: "Monitor documentation health, detect gaps, and stay ready for audits.",
        color: "bg-blue-100 text-blue-600"
      },
      {
        icon: "\u26A0\uFE0F",
        title: "Risk Identification Engine",
        description: "Automatically flag high-risk items and recurring control failures.",
        color: "bg-red-100 text-red-600"
      },
      {
        icon: "\u{1F4CA}",
        title: "Real-Time Audit Dashboards",
        description: "Track audits from initiation to closure with full accountability.",
        color: "bg-yellow-100 text-yellow-600"
      }
    ];
    const benefits = [
      "Reduce audit cycle times with real-time tracking and automated reviews",
      "Ensure full traceability of every audit activity",
      "Minimize manual effort through automated flagging and document analysis",
      "Improve confidence in reporting and compliance alignment"
    ];
    const idealFor = [
      "Internal audit or due diligence teams in mid to large enterprises",
      // 'CFO offices and risk management departments',
      "Audit or due diligence firms managing multi-client or cross-departmental reviews"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-white via-blue-50 to-slate-100 px-4"><div class="max-w-6xl text-center"><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8"> Automate Your </h1><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8"><span class="text-blue-600">Audits with Intelligence and Speed</span></h1><p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12"> Turn audits &amp; due diligence into a streamlined, insight-driven process. <span class="text-blue-600 fw-bold">Saras</span> helps finance and compliance teams automate audit planning, execution, and documentation. </p><p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12"> With AI-powered risk detection and real-time visibility, SARAS reduces manual effort and improves audit outcomes across departments. </p><div class="flex justify-center gap-6 flex-wrap">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ElButton), {
              type: "primary",
              size: "large",
              round: "",
              class: "px-8 py-3 text-base"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u{1F449} Talk to our Audits Expert `);
                } else {
                  return [
                    createTextVNode(" \u{1F449} Talk to our Audits Expert ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ElButton), {
                type: "primary",
                size: "large",
                round: "",
                class: "px-8 py-3 text-base"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u{1F449} Talk to our Audits Expert ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="py-24 bg-white"><div class="max-w-6xl mx-auto px-4"><h2 class="text-3xl font-bold text-slate-900 text-center mb-16">Features</h2><div class="grid gap-10 md:grid-cols-3"><!--[-->`);
      ssrRenderList(features, (feature, index) => {
        _push(`<div class="p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer bg-gradient-to-br from-white to-slate-50"><div class="${ssrRenderClass([feature.color, "w-16 h-16 flex items-center justify-center rounded-xl text-3xl mb-6"])}">${ssrInterpolate(feature.icon)}</div><h3 class="text-xl font-semibold text-slate-900 mb-4">${ssrInterpolate(feature.title)}</h3><p class="text-slate-600 leading-relaxed">${ssrInterpolate(feature.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-24 bg-gradient-to-tr from-white via-blue-50 to-slate-100"><div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16"><div><h2 class="text-2xl font-bold text-slate-900 mb-8">Benefits</h2><ul class="space-y-5 text-lg text-slate-700"><!--[-->`);
      ssrRenderList(benefits, (benefit, index) => {
        _push(`<li class="flex items-start gap-3">`);
        _push(ssrRenderComponent(unref(ElIcon), { class: "text-blue-600 mt-1" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(CircleCheckFilled), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(CircleCheckFilled))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(` ${ssrInterpolate(benefit)}</li>`);
      });
      _push(`<!--]--></ul></div><div><h2 class="text-2xl font-bold text-slate-900 mb-8">Ideal For</h2><ul class="space-y-5 text-lg text-slate-700"><!--[-->`);
      ssrRenderList(idealFor, (ideal, index) => {
        _push(`<li class="flex items-start gap-3">`);
        _push(ssrRenderComponent(unref(ElIcon), { class: "text-green-600 mt-1" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(CircleCheckFilled), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(CircleCheckFilled))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(` ${ssrInterpolate(ideal)}</li>`);
      });
      _push(`<!--]--></ul></div></div></section><section class="py-24 bg-white text-center"><div class="max-w-4xl mx-auto px-4"><h2 class="text-3xl md:text-4xl font-bold mb-6"> Ready to modernize your audit function? </h2><p class="text-lg md:text-xl mb-12"><span class="text-blue-600 fw-bold">Saras</span> gives your audit team the tools to track, detect, and deliver with confidence \u2014 powered by AI. </p><div class="flex justify-center flex-wrap gap-6">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ElButton), {
              type: "primary",
              size: "large",
              round: "",
              class: "px-8 py-3 text-base"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u{1F449} Talk to our Audits Expert `);
                } else {
                  return [
                    createTextVNode(" \u{1F449} Talk to our Audits Expert ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ElButton), {
                type: "primary",
                size: "large",
                round: "",
                class: "px-8 py-3 text-base"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u{1F449} Talk to our Audits Expert ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/AuditAutomation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "audit-automation",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/audit-automation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=audit-automation-BAQ3OI2m.mjs.map
