import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { resolveComponent, withCtx, unref, createTextVNode, createVNode, useSSRContext } from "vue";
import { H as Header, _ as _sfc_main$2 } from "./Footer-B93YZ10M.js";
import { ElButton, ElIcon } from "element-plus";
import { CircleCheckFilled } from "@element-plus/icons-vue";
import { useHead } from "@vueuse/head";
import "vue-router";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/hookable/dist/index.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/unctx/dist/index.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/h3/dist/index.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/radix3/dist/index.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/defu/dist/defu.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/ufo/dist/index.mjs";
const _sfc_main$1 = {
  __name: "ComplianceGovernance",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Compliance Management Software for Enterprises | SARAS",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Track, manage, and automate regulatory and internal compliance with SARAS. Real-time dashboards and governance tools for audit readiness."
        },
        {
          name: "keywords",
          content: "compliance management software, risk governance platform, regulatory compliance India, enterprise compliance tracking, audit-ready compliance system"
        },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "Compliance Management Software for Enterprises | SARAS" },
        { property: "og:description", content: "Track, manage, and automate regulatory and internal compliance with SARAS. Real-time dashboards and governance tools for audit readiness." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://sarasfinance.com/compliance-governance" }
      ],
      link: [
        { rel: "canonical", href: "https://sarasfinance.com/compliance-governance" }
      ]
    });
    const features = [
      {
        icon: "🔍",
        title: "Risk & Governance Health Check",
        description: "Identify areas of high risk and recurring non-compliance across departments.",
        color: "bg-red-100 text-red-600"
      },
      {
        icon: "📊",
        title: "360° Compliance Dashboard",
        description: "Track compliance responsibilities across teams, deadlines, and geographies.",
        color: "bg-blue-100 text-blue-600"
      },
      {
        icon: "🔄",
        title: "End-to-End Workflow Visibility",
        description: "Assign, monitor, and close compliance tasks with full audit trails.",
        color: "bg-green-100 text-green-600"
      }
    ];
    const benefits = [
      "Avoid regulatory penalties through timely oversight",
      "Improve accountability with task-level ownership",
      "Enable audit preparedness with structured documentation and traceable logs",
      "Scale seamlessly across regions and departments with consistent standards"
    ];
    const idealFor = [
      "Large enterprises with complex compliance obligations",
      "Legal, finance, and risk teams managing statutory reporting",
      "Firms looking to move away from manual tracking systems"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-white via-blue-50 to-slate-100 px-4"><div class="max-w-6xl text-center"><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8"> Enterprise Grade </h1><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8"><span class="text-blue-600">Compliance Tracking and Management</span></h1><p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12"> Stay in control, reduce risk, and simplify compliance across your organisation. <span class="text-blue-600 fw-bold">Saras</span> transforms how organizations manage statutory and internal compliance by bringing all obligations, risks, and actions into a unified, real-time system. </p><div class="flex justify-center gap-6 flex-wrap">`);
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
                  _push3(` 👉 Talk to our Compliance Expert `);
                } else {
                  return [
                    createTextVNode(" 👉 Talk to our Compliance Expert ")
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
                  createTextVNode(" 👉 Talk to our Compliance Expert ")
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
      _push(`<!--]--></ul></div></div></section><section class="py-24 text-center"><div class="max-w-4xl mx-auto px-4"><h2 class="text-3xl md:text-4xl font-bold mb-6"> Ready to simplify and secure your compliance process? </h2><p class="text-lg md:text-xl mb-12"><span class="text-blue-600 fw-bold">Saras</span> gives your team the clarity, control, and confidence to manage risk — intelligently. </p><div class="flex justify-center flex-wrap gap-6">`);
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
                  _push3(` 👉 Talk to our Compliance Expert `);
                } else {
                  return [
                    createTextVNode(" 👉 Talk to our Compliance Expert ")
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
                  createTextVNode(" 👉 Talk to our Compliance Expert ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/ComplianceGovernance.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "compliance-governance",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compliance-governance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=compliance-governance-InhnAxWV.js.map
