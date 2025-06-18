import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { useHead } from "@vueuse/head";
import { H as Header, _ as _sfc_main$6 } from "./Footer-B93YZ10M.js";
import { ref, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, TransitionGroup, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext, computed, resolveDynamicComponent } from "vue";
import { ElIcon } from "element-plus";
import { CircleCheckFilled, TopRight, Link, Cpu, Lightning, Loading, ArrowLeft, ArrowRight } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/unctx/dist/index.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/h3/dist/index.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/radix3/dist/index.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/defu/dist/defu.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/ufo/dist/index.mjs";
const _imports_0 = "" + __buildAssetsURL("home-hero-cropped.CZN5sQGK.gif");
const iconSize = "1em";
const _sfc_main$5 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const animatedTitles = [
      "Litigation Solved",
      "Audits Done",
      "Due Diligence Done",
      "Tax Computations Solved",
      "Compliance Tracked",
      "Knowledge & Advisory Given",
      "Depriciation Calculated",
      "Valuation Done"
    ];
    ref(0);
    const currentTitle = ref(animatedTitles[0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_row = resolveComponent("el-row");
      const _component_el_col = resolveComponent("el-col");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24 px-4 relative overflow-hidden" }, _attrs))} data-v-573a9a0e><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-573a9a0e><div class="absolute top-10 -right-20 sm:top-20 sm:-right-40 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-60 blur-3xl" data-v-573a9a0e></div><div class="absolute bottom-10 -left-20 sm:bottom-20 sm:-left-40 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-60 blur-3xl" data-v-573a9a0e></div><div class="absolute -bottom-10 sm:-bottom-20 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-200 rounded-full opacity-40 blur-3xl" data-v-573a9a0e></div></div>`);
      _push(ssrRenderComponent(_component_el_row, {
        justify: "center",
        class: "mt-20"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, {
              xs: 22,
              class: "items-center justify-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8" data-v-573a9a0e${_scopeId2}> We are <span class="text-blue-600" data-v-573a9a0e${_scopeId2}>redefining</span> how<br data-v-573a9a0e${_scopeId2}></h2><h2 class="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center mb-12" data-v-573a9a0e${_scopeId2}> Legal, Audit &amp; Finance Firms work </h2><p class="mt-10 text-center text-2xl" data-v-573a9a0e${_scopeId2}> AI-powered, ISO-certified, and built for scale — </p><p class="mt-4 mb-6 text-center text-2xl" data-v-573a9a0e${_scopeId2}><span class="text-blue-600 fw-bold" data-v-573a9a0e${_scopeId2}>Saras</span> helps you automate, analyze, and manage everything from litigation to compliance and knowledge. </p><div class="relative h-16 flex flex-col items-center justify-center mt-15 overflow-hidden" data-v-573a9a0e${_scopeId2}><div${ssrRenderAttrs({
                    name: "scroll-up",
                    class: "relative w-full h-16 flex items-center justify-center"
                  })} data-v-573a9a0e>`);
                  ssrRenderList([currentTitle.value], (title, idx) => {
                    _push3(`<div class="flex items-center justify-center gap-2 text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 animated-title absolute w-full h-full top-0 left-0 transition-transform duration-700" data-v-573a9a0e${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ElIcon), {
                      color: "#22c55e",
                      size: iconSize,
                      class: "tick-icon"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(CircleCheckFilled), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(CircleCheckFilled))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<span data-v-573a9a0e${_scopeId2}>${ssrInterpolate(title)}</span></div>`);
                  });
                  _push3(`</div></div><div class="flex justify-center" data-v-573a9a0e${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} data-v-573a9a0e${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8" }, [
                      createTextVNode(" We are "),
                      createVNode("span", { class: "text-blue-600" }, "redefining"),
                      createTextVNode(" how"),
                      createVNode("br")
                    ]),
                    createVNode("h2", { class: "text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center mb-12" }, " Legal, Audit & Finance Firms work "),
                    createVNode("p", { class: "mt-10 text-center text-2xl" }, " AI-powered, ISO-certified, and built for scale — "),
                    createVNode("p", { class: "mt-4 mb-6 text-center text-2xl" }, [
                      createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                      createTextVNode(" helps you automate, analyze, and manage everything from litigation to compliance and knowledge. ")
                    ]),
                    createVNode("div", { class: "relative h-16 flex flex-col items-center justify-center mt-15 overflow-hidden" }, [
                      createVNode(TransitionGroup, {
                        name: "scroll-up",
                        tag: "div",
                        class: "relative w-full h-16 flex items-center justify-center"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList([currentTitle.value], (title, idx) => {
                            return openBlock(), createBlock("div", {
                              key: title,
                              class: "flex items-center justify-center gap-2 text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 animated-title absolute w-full h-full top-0 left-0 transition-transform duration-700"
                            }, [
                              createVNode(unref(ElIcon), {
                                color: "#22c55e",
                                size: iconSize,
                                class: "tick-icon"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(CircleCheckFilled))
                                ]),
                                _: 1
                              }),
                              createVNode("span", null, toDisplayString(title), 1)
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex justify-center" }, [
                      createVNode("img", { src: _imports_0 })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_col, {
                xs: 22,
                class: "items-center justify-between"
              }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8" }, [
                    createTextVNode(" We are "),
                    createVNode("span", { class: "text-blue-600" }, "redefining"),
                    createTextVNode(" how"),
                    createVNode("br")
                  ]),
                  createVNode("h2", { class: "text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center mb-12" }, " Legal, Audit & Finance Firms work "),
                  createVNode("p", { class: "mt-10 text-center text-2xl" }, " AI-powered, ISO-certified, and built for scale — "),
                  createVNode("p", { class: "mt-4 mb-6 text-center text-2xl" }, [
                    createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                    createTextVNode(" helps you automate, analyze, and manage everything from litigation to compliance and knowledge. ")
                  ]),
                  createVNode("div", { class: "relative h-16 flex flex-col items-center justify-center mt-15 overflow-hidden" }, [
                    createVNode(TransitionGroup, {
                      name: "scroll-up",
                      tag: "div",
                      class: "relative w-full h-16 flex items-center justify-center"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList([currentTitle.value], (title, idx) => {
                          return openBlock(), createBlock("div", {
                            key: title,
                            class: "flex items-center justify-center gap-2 text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 animated-title absolute w-full h-full top-0 left-0 transition-transform duration-700"
                          }, [
                            createVNode(unref(ElIcon), {
                              color: "#22c55e",
                              size: iconSize,
                              class: "tick-icon"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(CircleCheckFilled))
                              ]),
                              _: 1
                            }),
                            createVNode("span", null, toDisplayString(title), 1)
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode("img", { src: _imports_0 })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-573a9a0e"]]);
const _sfc_main$4 = /* @__PURE__ */ Object.assign({
  name: "FeaturesSolutionsSection"
}, {
  __name: "FeatureSection",
  __ssrInlineRender: true,
  setup(__props) {
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
          "Case Law Discovery & Draft Generation"
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
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 px-4 bg-white relative overflow-hidden" }, _attrs))}><div class="absolute inset-0 overflow-hidden pointer-events-none"><div class="absolute top-40 -left-40 w-96 h-96 bg-blue-50 rounded-full opacity-60 blur-3xl"></div><div class="absolute bottom-40 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-40 blur-3xl"></div></div><div class="container mx-auto max-w-6xl relative z-10"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-bold mb-4"><span class="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">Comprehensive </span><span class="relative inline-block"> Solutions <span class="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-blue-500 opacity-30 rounded-full"></span></span></h2><p class="text-gray-600 max-w-2xl mx-auto mt-5"> From automated compliance tracking to litigation support and knowledge management — we bring intelligence to your most complex workflows. </p><p class="text-gray-600 max-w-2xl mx-auto mt-5"><span class="text-blue-600 fw-bold">Saras</span> is your unified digital workspace that simplifies the most challenging operations in Legal, Audit, and Finance. </p><p class="text-gray-600 max-w-2xl mx-auto mt-5"><span class="text-blue-600 fw-bold">Saras</span> combines deep industry insight with cutting-edge automation. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(solutions, (item) => {
        _push(`<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group"><div class="p-6"><h3 class="text-xl font-semibold mb-2">${ssrInterpolate(item.title)}</h3><p class="text-gray-600 mb-4">${item.description ?? ""}</p><ul class="space-y-2"><!--[-->`);
        ssrRenderList(item.checklistItems, (cl) => {
          _push(`<li class="flex items-center"><div class="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><span class="text-sm text-gray-600">${ssrInterpolate(cl)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-12"></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/FeatureSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const keyData = [
  {
    id: 1,
    title: "Build Effortlessly",
    description: " Automatically create workflows, transforming how you navigate complex processes."
  },
  {
    id: 2,
    title: "Enterprise Search",
    description: "Tap into Your <b>Organisational Knowledge Graph</b> for Smart, Context-Aware Workflow Automation!"
  },
  {
    id: 3,
    title: "Boost Efficiency",
    description: "Cut your process validation from 8 months to just <b>10 minutes or less</b> that's a <b>99%</b> reduction!"
  },
  {
    id: 4,
    title: "Seamless Integration",
    description: "Effortlessly <b>connect with any ERP, legacy software, or custom platform</b>—no headaches, just smooth transitions."
  },
  {
    id: 5,
    title: "Limitless Scalability",
    description: "Ready for any industry, our solution keeps your business adaptable in today’s fast-paced market.Stay ahead, stay agile"
  }
];
const _sfc_main$3 = {
  __name: "KeyData",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const displayedData = ref([]);
    const isLoading = ref(false);
    const scrollContainer = ref(null);
    const iconComponents = {
      "el-icon-lightning": Lightning,
      "el-icon-cpu": Cpu,
      "el-icon-link": Link,
      "el-icon-top-right": TopRight
    };
    computed(() => displayedData.value.length < keyData.length);
    const scrollLeftFn = () => {
      const container = scrollContainer.value;
      if (container) {
        container.scrollBy({ left: -320, behavior: "smooth" });
      }
    };
    const scrollRightFn = () => {
      const container = scrollContainer.value;
      if (container) {
        container.scrollBy({ left: 320, behavior: "smooth" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_row = resolveComponent("el-row");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_card = resolveComponent("el-card");
      const _component_el_icon = resolveComponent("el-icon");
      const _component_el_button = resolveComponent("el-button");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden" }, _attrs))} data-v-efef9c77><div class="absolute inset-0 opacity-20 pointer-events-none" data-v-efef9c77><div class="absolute top-10 -left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl" data-v-efef9c77></div><div class="absolute bottom-10 -right-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl" data-v-efef9c77></div><div class="absolute bottom-1/3 left-1/4 w-48 h-48 bg-purple-100 rounded-full blur-2xl" data-v-efef9c77></div></div><div class="container mx-auto max-w-8xl relative z-10" data-v-efef9c77>`);
      _push(ssrRenderComponent(_component_el_row, {
        justify: "center",
        class: "mb-12 sm:mb-16"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, {
              span: 20,
              xs: 22
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10" style="${ssrRenderStyle({ "line-height": "1.5em" })}" data-v-efef9c77${_scopeId2}> With our Game Changing <span class="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-600" data-v-efef9c77${_scopeId2}>Agentic Solutions</span> which is built specially for finance and legal teams, our AI solutions do not <span class="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-600" data-v-efef9c77${_scopeId2}>hallucinate</span> and still remains creative. It gives you the atmost accuracy with your <span class="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-600" data-v-efef9c77${_scopeId2}>enterprise data</span>. </h2><p class="text-gray-600 text-base sm:text-lg md:text-xl mt-4 text-center max-w-3xl mx-auto" data-v-efef9c77${_scopeId2}> Unlock lightning-fast productivity and seamless integration 🚀 </p>`);
                } else {
                  return [
                    createVNode("h2", {
                      class: "text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10",
                      style: { "line-height": "1.5em" }
                    }, [
                      createTextVNode(" With our Game Changing "),
                      createVNode("span", { class: "text-2xl sm:text-4xl md:text-5xl font-bold text-blue-600" }, "Agentic Solutions"),
                      createTextVNode(" which is built specially for finance and legal teams, our AI solutions do not "),
                      createVNode("span", { class: "text-2xl sm:text-4xl md:text-5xl font-bold text-blue-600" }, "hallucinate"),
                      createTextVNode(" and still remains creative. It gives you the atmost accuracy with your "),
                      createVNode("span", { class: "text-2xl sm:text-4xl md:text-5xl font-bold text-blue-600" }, "enterprise data"),
                      createTextVNode(". ")
                    ]),
                    createVNode("p", { class: "text-gray-600 text-base sm:text-lg md:text-xl mt-4 text-center max-w-3xl mx-auto" }, " Unlock lightning-fast productivity and seamless integration 🚀 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_col, {
                span: 20,
                xs: 22
              }, {
                default: withCtx(() => [
                  createVNode("h2", {
                    class: "text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10",
                    style: { "line-height": "1.5em" }
                  }, [
                    createTextVNode(" With our Game Changing "),
                    createVNode("span", { class: "text-2xl sm:text-4xl md:text-5xl font-bold text-blue-600" }, "Agentic Solutions"),
                    createTextVNode(" which is built specially for finance and legal teams, our AI solutions do not "),
                    createVNode("span", { class: "text-2xl sm:text-4xl md:text-5xl font-bold text-blue-600" }, "hallucinate"),
                    createTextVNode(" and still remains creative. It gives you the atmost accuracy with your "),
                    createVNode("span", { class: "text-2xl sm:text-4xl md:text-5xl font-bold text-blue-600" }, "enterprise data"),
                    createTextVNode(". ")
                  ]),
                  createVNode("p", { class: "text-gray-600 text-base sm:text-lg md:text-xl mt-4 text-center max-w-3xl mx-auto" }, " Unlock lightning-fast productivity and seamless integration 🚀 ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative" data-v-efef9c77><div class="flex overflow-x-auto scrollbar-hidden snap-x snap-mandatory pb-6" data-v-efef9c77><!--[-->`);
      ssrRenderList(displayedData.value, (value, index) => {
        _push(`<div class="flex-shrink-0 w-80 mx-4 snap-start animate-slide-in" style="${ssrRenderStyle({ "--index": index })}" data-v-efef9c77>`);
        _push(ssrRenderComponent(_component_el_card, {
          shadow: "never",
          round: "",
          class: "h-full bg-white border border-gray-100 rounded-10xl overflow-hidden transition-all duration-300 hover:shadow-xl",
          "body-style": { padding: "24px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex justify-center mb-4" data-v-efef9c77${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconComponents[value.icon]), { class: "text-4xl sm:text-5xl text-blue-600" }, null), _parent2, _scopeId);
              _push2(`</div><h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 text-center" data-v-efef9c77${_scopeId}>${ssrInterpolate(value.title)}</h3><p class="text-gray-600 text-sm sm:text-base leading-relaxed text-center" data-v-efef9c77${_scopeId}>${value.description ?? ""}</p>`);
            } else {
              return [
                createVNode("div", { class: "flex justify-center mb-4" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(iconComponents[value.icon]), { class: "text-4xl sm:text-5xl text-blue-600" }))
                ]),
                createVNode("h3", { class: "text-xl sm:text-2xl font-semibold text-gray-800 mb-3 text-center" }, toDisplayString(value.title), 1),
                createVNode("p", {
                  class: "text-gray-600 text-sm sm:text-base leading-relaxed text-center",
                  innerHTML: value.description
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (isLoading.value) {
        _push(`<div class="flex-shrink-0 w-80 mx-4 flex items-center justify-center" data-v-efef9c77>`);
        _push(ssrRenderComponent(_component_el_icon, { class: "animate-spin text-3xl text-blue-600" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Loading), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Loading))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none" data-v-efef9c77>`);
      _push(ssrRenderComponent(_component_el_button, {
        circle: "",
        class: "pointer-events-auto bg-white shadow-md opacity-75 hover:opacity-100",
        onClick: scrollLeftFn
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ArrowLeft), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ArrowLeft))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(unref(ArrowLeft))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        circle: "",
        class: "pointer-events-auto bg-white shadow-md opacity-75 hover:opacity-100",
        onClick: scrollRightFn
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ArrowRight), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ArrowRight))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(unref(ArrowRight))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_el_row, {
        justify: "center",
        class: "mt-12"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, {
              span: 24,
              class: "text-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    round: "",
                    size: "large",
                    class: "px-10 py-4 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl",
                    onClick: ($event) => unref(router).push("/contact")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 👉 Talk to our Agentic Experts `);
                      } else {
                        return [
                          createTextVNode(" 👉 Talk to our Agentic Experts ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      type: "primary",
                      round: "",
                      size: "large",
                      class: "px-10 py-4 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl",
                      onClick: ($event) => unref(router).push("/contact")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 👉 Talk to our Agentic Experts ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_col, {
                span: 24,
                class: "text-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    round: "",
                    size: "large",
                    class: "px-10 py-4 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl",
                    onClick: ($event) => unref(router).push("/contact")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 👉 Talk to our Agentic Experts ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/KeyData.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const KeyData = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-efef9c77"]]);
const _sfc_main$2 = {
  __name: "AboutUsMini",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><section class="py-24 bg-gray-50 border-b border-gray-100"><div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16"><div><h2 class="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2><p class="text-lg text-gray-600 leading-relaxed"> We empower enterprise finance and legal operations through self-governing agentic systems that execute, monitor and optimize high-stakes processes at scale — reducing human error, accelerating decisions, and ensuring compliance. </p></div><div><h2 class="text-3xl font-semibold text-gray-900 mb-4">Who We Are</h2><p class="text-lg text-gray-600 leading-relaxed"> Founded by domain experts in FinTech, LegalTech, and AI infrastructure, Saras Finance brings together deep experience in automation, enterprise SaaS architecture, fraud prevention, and modern compliance stacks. </p></div></div></section></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/AboutUsMini.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Saras Finance | AI-Powered Legal, Compliance & Finance Platform",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Simplify litigation, compliance, and audits with SARAS - the AI-driven platform for legal, audit, and finance teams. ISO 27001 certified company."
        },
        {
          name: "keywords",
          content: "legal automation, compliance management software, litigation AI, audit workflow, tax AI, ISO 27001 legal tech, legal tech India"
        },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "Saras Finance | AI-Powered Legal, Compliance & Finance Platform" },
        { property: "og:description", content: "SARAS empowers legal, audit and finance professionals with automated workflows, compliance dashboards, and legal intelligence." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://sarasfinance.com/" },
        { property: "og:image", content: "https://www.yourdomain.com/og-image.jpg" }
      ],
      link: [
        { rel: "canonical", href: "https://sarasfinance.com/" }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Agentic Solutions",
            "url": "https://sarasfinance.com/",
            "logo": "https://www.yourdomain.com/logo.png",
            // Replace with your logo URL
            "description": "Simplify litigation, compliance, and audits with SARAS - the AI-driven platform for legal, audit, and finance teams. ISO 27001 certified company."
          })
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Auto Workflow Builder",
            "brand": {
              "@type": "Brand",
              "name": "Agentic Solutions"
            },
            "description": "A no-code platform to automate workflows, cutting process validation from months to minutes.",
            "url": "https://sarasfinance.com/"
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(KeyData, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DKsyk61c.js.map
