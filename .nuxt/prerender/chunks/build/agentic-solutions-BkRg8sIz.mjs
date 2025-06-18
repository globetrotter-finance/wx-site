import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/server-renderer/index.mjs';
import { H as Header, _ as _sfc_main$5 } from './Footer-bpAE6knL.mjs';
import { Check, Close, Link, Clock, HomeFilled } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@element-plus/icons-vue/dist/index.js';
import { isVNode, shallowRef, defineComponent, getCurrentInstance, watch, provide, createElementBlock, openBlock, normalizeClass, unref, renderSlot, ref, inject, onMounted, onBeforeUnmount, reactive, computed, normalizeStyle, createCommentVNode, createElementVNode, createBlock, withCtx, resolveDynamicComponent, createVNode, toDisplayString, createTextVNode, resolveComponent, mergeProps, useSSRContext } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/index.mjs';
import { _ as _export_sfc$1 } from './server.mjs';
import { b as buildProps, i as isNumber, _ as _export_sfc, u as useNamespace, E as ElIcon, a as withNoopInstall, w as withInstall } from '../_/index.mjs';
import { isArray } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import { i as iconPropType } from '../_/icon.mjs';
import { E as ElButton } from '../_/index2.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue-router/dist/vue-router.node.mjs';
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
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/lodash-unified/import.js';
import '../_/use-global-config.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@vueuse/core/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@ctrl/tinycolor/dist/public_api.js';

const CHANGE_EVENT = "change";

const flattedChildren = (children) => {
  const vNodes = isArray(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    var _a;
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && ((_a = child.component) == null ? void 0 : _a.subTree)) {
      result.push(child, ...flattedChildren(child.component.subTree));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else if (isVNode(child) && child.shapeFlag === 2) {
      result.push(...flattedChildren(child.type()));
    } else {
      result.push(child);
    }
  });
  return result;
};

const getOrderedChildren = (vm, childComponentName, children) => {
  const nodes = flattedChildren(vm.subTree).filter((n) => {
    var _a;
    return isVNode(n) && ((_a = n.type) == null ? void 0 : _a.name) === childComponentName && !!n.component;
  });
  const uids = nodes.map((n) => n.component.uid);
  return uids.map((uid) => children[uid]).filter((p) => !!p);
};
const useOrderedChildren = (vm, childComponentName) => {
  const children = {};
  const orderedChildren = shallowRef([]);
  const addChild = (child) => {
    children[child.uid] = child;
    orderedChildren.value = getOrderedChildren(vm, childComponentName, children);
  };
  const removeChild = (uid) => {
    delete children[uid];
    orderedChildren.value = orderedChildren.value.filter((children2) => children2.uid !== uid);
  };
  return {
    children: orderedChildren,
    addChild,
    removeChild
  };
};

const stepsProps = buildProps({
  space: {
    type: [Number, String],
    default: ""
  },
  active: {
    type: Number,
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    values: ["horizontal", "vertical"]
  },
  alignCenter: {
    type: Boolean
  },
  simple: {
    type: Boolean
  },
  finishStatus: {
    type: String,
    values: ["wait", "process", "finish", "error", "success"],
    default: "finish"
  },
  processStatus: {
    type: String,
    values: ["wait", "process", "finish", "error", "success"],
    default: "process"
  }
});
const stepsEmits = {
  [CHANGE_EVENT]: (newVal, oldVal) => [newVal, oldVal].every(isNumber)
};

const __default__$1 = defineComponent({
  name: "ElSteps"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: stepsProps,
  emits: stepsEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("steps");
    const {
      children: steps,
      addChild: addStep,
      removeChild: removeStep
    } = useOrderedChildren(getCurrentInstance(), "ElStep");
    watch(steps, () => {
      steps.value.forEach((instance, index) => {
        instance.setIndex(index);
      });
    });
    provide("ElSteps", { props, steps, addStep, removeStep });
    watch(() => props.active, (newVal, oldVal) => {
      emit(CHANGE_EVENT, newVal, oldVal);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.simple ? "simple" : _ctx.direction)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Steps = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "steps.vue"]]);

const stepProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: iconPropType
  },
  description: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    values: ["", "wait", "process", "finish", "error", "success"],
    default: ""
  }
});

const __default__ = defineComponent({
  name: "ElStep"
});
const _sfc_main$3 = defineComponent({
  ...__default__,
  props: stepProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("step");
    const index = ref(-1);
    const lineStyle = ref({});
    const internalStatus = ref("");
    const parent = inject("ElSteps");
    const currentInstance = getCurrentInstance();
    onMounted(() => {
      watch([
        () => parent.props.active,
        () => parent.props.processStatus,
        () => parent.props.finishStatus
      ], ([active]) => {
        updateStatus(active);
      }, { immediate: true });
    });
    onBeforeUnmount(() => {
      parent.removeStep(stepItemState.uid);
    });
    const currentStatus = computed(() => {
      return props.status || internalStatus.value;
    });
    const prevStatus = computed(() => {
      const prevStep = parent.steps.value[index.value - 1];
      return prevStep ? prevStep.currentStatus : "wait";
    });
    const isCenter = computed(() => {
      return parent.props.alignCenter;
    });
    const isVertical = computed(() => {
      return parent.props.direction === "vertical";
    });
    const isSimple = computed(() => {
      return parent.props.simple;
    });
    const stepsCount = computed(() => {
      return parent.steps.value.length;
    });
    const isLast = computed(() => {
      var _a;
      return ((_a = parent.steps.value[stepsCount.value - 1]) == null ? void 0 : _a.uid) === (currentInstance == null ? void 0 : currentInstance.uid);
    });
    const space = computed(() => {
      return isSimple.value ? "" : parent.props.space;
    });
    const containerKls = computed(() => {
      return [
        ns.b(),
        ns.is(isSimple.value ? "simple" : parent.props.direction),
        ns.is("flex", isLast.value && !space.value && !isCenter.value),
        ns.is("center", isCenter.value && !isVertical.value && !isSimple.value)
      ];
    });
    const style = computed(() => {
      const style2 = {
        flexBasis: isNumber(space.value) ? `${space.value}px` : space.value ? space.value : `${100 / (stepsCount.value - (isCenter.value ? 0 : 1))}%`
      };
      if (isVertical.value)
        return style2;
      if (isLast.value) {
        style2.maxWidth = `${100 / stepsCount.value}%`;
      }
      return style2;
    });
    const setIndex = (val) => {
      index.value = val;
    };
    const calcProgress = (status) => {
      const isWait = status === "wait";
      const style2 = {
        transitionDelay: `${isWait ? "-" : ""}${150 * index.value}ms`
      };
      const step = status === parent.props.processStatus || isWait ? 0 : 100;
      style2.borderWidth = step && !isSimple.value ? "1px" : 0;
      style2[parent.props.direction === "vertical" ? "height" : "width"] = `${step}%`;
      lineStyle.value = style2;
    };
    const updateStatus = (activeIndex) => {
      if (activeIndex > index.value) {
        internalStatus.value = parent.props.finishStatus;
      } else if (activeIndex === index.value && prevStatus.value !== "error") {
        internalStatus.value = parent.props.processStatus;
      } else {
        internalStatus.value = "wait";
      }
      const prevChild = parent.steps.value[index.value - 1];
      if (prevChild)
        prevChild.calcProgress(internalStatus.value);
    };
    const stepItemState = reactive({
      uid: currentInstance.uid,
      currentStatus,
      setIndex,
      calcProgress
    });
    parent.addStep(stepItemState);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle(unref(style)),
        class: normalizeClass(unref(containerKls))
      }, [
        createCommentVNode(" icon & line "),
        createElementVNode("div", {
          class: normalizeClass([unref(ns).e("head"), unref(ns).is(unref(currentStatus))])
        }, [
          !unref(isSimple) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("line"))
          }, [
            createElementVNode("i", {
              class: normalizeClass(unref(ns).e("line-inner")),
              style: normalizeStyle(lineStyle.value)
            }, null, 6)
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass([unref(ns).e("icon"), unref(ns).is(_ctx.icon || _ctx.$slots.icon ? "icon" : "text")])
          }, [
            renderSlot(_ctx.$slots, "icon", {}, () => [
              _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(unref(ns).e("icon-inner"))
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
                ]),
                _: 1
              }, 8, ["class"])) : unref(currentStatus) === "success" ? (openBlock(), createBlock(unref(ElIcon), {
                key: 1,
                class: normalizeClass([unref(ns).e("icon-inner"), unref(ns).is("status")])
              }, {
                default: withCtx(() => [
                  createVNode(unref(Check))
                ]),
                _: 1
              }, 8, ["class"])) : unref(currentStatus) === "error" ? (openBlock(), createBlock(unref(ElIcon), {
                key: 2,
                class: normalizeClass([unref(ns).e("icon-inner"), unref(ns).is("status")])
              }, {
                default: withCtx(() => [
                  createVNode(unref(Close))
                ]),
                _: 1
              }, 8, ["class"])) : !unref(isSimple) ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass(unref(ns).e("icon-inner"))
              }, toDisplayString(index.value + 1), 3)) : createCommentVNode("v-if", true)
            ])
          ], 2)
        ], 2),
        createCommentVNode(" title & description "),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("main"))
        }, [
          createElementVNode("div", {
            class: normalizeClass([unref(ns).e("title"), unref(ns).is(unref(currentStatus))])
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ], 2),
          unref(isSimple) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("arrow"))
          }, null, 2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(ns).e("description"), unref(ns).is(unref(currentStatus))])
          }, [
            renderSlot(_ctx.$slots, "description", {}, () => [
              createTextVNode(toDisplayString(_ctx.description), 1)
            ])
          ], 2))
        ], 2)
      ], 6);
    };
  }
});
var Step = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "item.vue"]]);

const ElSteps = withInstall(Steps, {
  Step
});
const ElStep = withNoopInstall(Step);

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
const SolutionAgentic = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-297aff40"]]);
const _sfc_main$1 = {
  __name: "AgenticSolution",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(SolutionAgentic, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
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
//# sourceMappingURL=agentic-solutions-BkRg8sIz.mjs.map
