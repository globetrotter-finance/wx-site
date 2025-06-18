import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/server-renderer/index.mjs';
import { resolveComponent, withCtx, unref, createTextVNode, createVNode, useSSRContext } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/index.mjs';
import { H as Header, _ as _sfc_main$2 } from './Footer-TtXCfTIV.mjs';
import { CircleCheckFilled } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@element-plus/icons-vue/dist/index.js';
import { useHead } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@vueuse/head/dist/index.mjs';
import { E as ElButton } from '../_/index2.mjs';
import { E as ElIcon } from '../_/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue-router/dist/vue-router.node.mjs';
import './server.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/destr/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/hookable/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/ufo/dist/index.mjs';
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
import '../_/use-global-config.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@vueuse/core/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/lodash-unified/import.js';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import '../_/icon.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@ctrl/tinycolor/dist/public_api.js';

const _sfc_main$1 = {
  __name: "KnowledgeAdvisory",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Enterprise Legal Knowledge Base & AI Chatbot | SARAS",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Centralize legal and tax knowledge. Use AI to search, retrieve, and explain complex documents and regulations with SARAS Knowledge & Advisory tools."
        },
        {
          name: "keywords",
          content: "legal knowledge management software, AI legal chatbot, enterprise knowledge base for law firms, document interpretation tool, legal and tax advisory automation"
        },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "Enterprise Legal Knowledge Base & AI Chatbot | SARAS" },
        { property: "og:description", content: "Centralize legal and tax knowledge. Use AI to search, retrieve, and explain complex documents and regulations with SARAS Knowledge & Advisory tools." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://sarasfinance.com/knowledge-advisory" }
      ],
      link: [
        { rel: "canonical", href: "https://sarasfinance.com/knowledge-advisory" }
      ]
    });
    const features = [
      {
        icon: "\u{1F9E0}",
        title: "Enterprise Knowledge Repository",
        description: "Centralize legal, tax, and advisory documents into a single knowledge system.",
        color: "bg-blue-100 text-blue-600"
      },
      {
        icon: "\u{1F4AC}",
        title: "AI-Powered Legal & Tax ChatBot",
        description: "Ask complex questions and get statute-backed, AI-generated answers.",
        color: "bg-green-100 text-green-600"
      },
      {
        icon: "\u{1F4C2}",
        title: "FileBot: Smart Document Reading",
        description: "Upload documents and extract contextual answers directly from content.",
        color: "bg-yellow-100 text-yellow-600"
      }
    ];
    const benefits = [
      "Save 30\u201350% of research time across legal, tax, and audit functions",
      "Reduce dependency on individual experts with institutionalized knowledge",
      "Speed up onboarding by giving new team members a ready source of truth",
      "Enhance audit readiness with traceable knowledge history"
    ];
    const idealFor = [
      "Legal and tax advisory firms with large knowledge repositories",
      "Corporate law departments",
      "Audit and compliance teams handling document-heavy cases"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-white via-blue-50 to-slate-100 px-4"><div class="max-w-6xl text-center"><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8"> AI Ready </h1><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8"><span class="text-blue-600">Enterprise Knowledge<br>&amp; Advisory</span></h1><p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12"> Preserve your team\u2019s expertise. Retrieve answers instantly. <span class="text-blue-600 fw-bold">Saras</span> Knowledge &amp; Advisory tools turn your internal documentation, legal resources, and research material into a living, searchable knowledge system \u2014 powered by intelligent AI assistants trained to understand law, tax, and regulations. </p><div class="flex justify-center gap-6 flex-wrap">`);
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
                  _push3(` \u{1F449} Talk to our Knowledge Expert `);
                } else {
                  return [
                    createTextVNode(" \u{1F449} Talk to our Knowledge Expert ")
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
                  createTextVNode(" \u{1F449} Talk to our Knowledge Expert ")
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
      _push(`<!--]--></ul></div></div></section><section class="py-24 bg-white text-center"><div class="max-w-4xl mx-auto px-4"><h2 class="text-3xl md:text-4xl font-bold mb-6"> Give your team instant access to everything your firm knows. </h2><p class="text-lg md:text-xl mb-12"><span class="text-blue-600 fw-bold">Saras</span> transforms complex documents and specialized knowledge into clear, intelligent, and well-reasoned insights. </p><div class="flex justify-center flex-wrap gap-6">`);
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
                  _push3(` \u{1F449} Talk to our Knowledge Expert `);
                } else {
                  return [
                    createTextVNode(" \u{1F449} Talk to our Knowledge Expert ")
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
                  createTextVNode(" \u{1F449} Talk to our Knowledge Expert ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/KnowledgeAdvisory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "knowledge-advisory",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/knowledge-advisory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=knowledge-advisory-DCBC-vm7.mjs.map
