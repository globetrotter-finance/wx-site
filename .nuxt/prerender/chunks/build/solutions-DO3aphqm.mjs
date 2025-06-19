import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/server-renderer/index.mjs';
import { H as Header, _ as _sfc_main$5 } from './Footer-TtXCfTIV.mjs';
import { defineComponent, computed, createElementBlock, openBlock, normalizeClass, unref, renderSlot, createVNode, Transition, withCtx, withDirectives, createElementVNode, normalizeStyle, createTextVNode, toDisplayString, vShow, watch, shallowReactive, ref, onMounted, createBlock, createCommentVNode, resolveDynamicComponent, Fragment, withModifiers, isVNode, render, resolveComponent, mergeProps, useSSRContext } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/index.mjs';
import { d as data } from './blog-data-BEQLt-3R.mjs';
import { _ as _export_sfc$1 } from './server.mjs';
import { isClient, useEventListener, useResizeObserver, useTimeoutFn } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@vueuse/core/index.mjs';
import { b as buildProps, d as definePropType, _ as _export_sfc, u as useNamespace, i as isNumber, c as addUnit, w as withInstall, E as ElIcon, e as isElement, f as debugWarn, g as isBoolean, h as withInstallFunction } from '../_/index.mjs';
import { i as iconPropType, T as TypeComponentsMap, a as TypeComponents } from '../_/icon.mjs';
import { m as mutable } from '../_/typescript.mjs';
import { u as useEmptyValuesProps, a as useSizeProp, p as provideGlobalConfig, b as useGlobalComponentSettings } from '../_/use-global-config.mjs';
import { isString, isFunction } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@element-plus/icons-vue/dist/index.js';
import '../_/renderer.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/destr/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/hookable/dist/index.mjs';
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/ofetch/dist/node.mjs';
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
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/lodash-unified/import.js';

const EVENT_CODE = {
  esc: "Escape"};

const badgeProps = buildProps({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  },
  showZero: {
    type: Boolean,
    default: true
  },
  color: String,
  badgeStyle: {
    type: definePropType([String, Object, Array])
  },
  offset: {
    type: definePropType(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
});

const __default__$1 = defineComponent({
  name: "ElBadge"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: badgeProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("badge");
    const content = computed(() => {
      if (props.isDot)
        return "";
      if (isNumber(props.value) && isNumber(props.max)) {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`;
    });
    const style = computed(() => {
      var _a, _b, _c, _d, _e;
      return [
        {
          backgroundColor: props.color,
          marginRight: addUnit(-((_b = (_a = props.offset) == null ? void 0 : _a[0]) != null ? _b : 0)),
          marginTop: addUnit((_d = (_c = props.offset) == null ? void 0 : _c[1]) != null ? _d : 0)
        },
        (_e = props.badgeStyle) != null ? _e : {}
      ];
    });
    expose({
      content
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(Transition, {
          name: `${unref(ns).namespace.value}-zoom-in-center`,
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("sup", {
              class: normalizeClass([
                unref(ns).e("content"),
                unref(ns).em("content", _ctx.type),
                unref(ns).is("fixed", !!_ctx.$slots.default),
                unref(ns).is("dot", _ctx.isDot),
                unref(ns).is("hide-zero", !_ctx.showZero && props.value === 0),
                _ctx.badgeClass
              ]),
              style: normalizeStyle(unref(style))
            }, [
              renderSlot(_ctx.$slots, "content", { value: unref(content) }, () => [
                createTextVNode(toDisplayString(unref(content)), 1)
              ])
            ], 6), [
              [vShow, !_ctx.hidden && (unref(content) || _ctx.isDot || _ctx.$slots.content)]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ], 2);
    };
  }
});
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "badge.vue"]]);

const ElBadge = withInstall(Badge);

const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: definePropType(Object)
  },
  size: useSizeProp,
  button: {
    type: definePropType(Object)
  },
  experimentalFeatures: {
    type: definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...useEmptyValuesProps
});

const messageConfig = {};
defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});

const messageTypes = ["success", "info", "warning", "error"];
const messageDefaults = mutable({
  customClass: "",
  center: false,
  dangerouslyUseHTMLString: false,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: false,
  type: "info",
  plain: false,
  offset: 16,
  zIndex: 0,
  grouping: false,
  repeatNum: 1,
  appendTo: isClient ? document.body : void 0
});
const messageProps = buildProps({
  customClass: {
    type: String,
    default: messageDefaults.customClass
  },
  center: {
    type: Boolean,
    default: messageDefaults.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: messageDefaults.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: messageDefaults.duration
  },
  icon: {
    type: iconPropType,
    default: messageDefaults.icon
  },
  id: {
    type: String,
    default: messageDefaults.id
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: messageDefaults.message
  },
  onClose: {
    type: definePropType(Function),
    default: messageDefaults.onClose
  },
  showClose: {
    type: Boolean,
    default: messageDefaults.showClose
  },
  type: {
    type: String,
    values: messageTypes,
    default: messageDefaults.type
  },
  plain: {
    type: Boolean,
    default: messageDefaults.plain
  },
  offset: {
    type: Number,
    default: messageDefaults.offset
  },
  zIndex: {
    type: Number,
    default: messageDefaults.zIndex
  },
  grouping: {
    type: Boolean,
    default: messageDefaults.grouping
  },
  repeatNum: {
    type: Number,
    default: messageDefaults.repeatNum
  }
});
const messageEmits = {
  destroy: () => true
};

const instances = shallowReactive([]);
const getInstance = (id) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  const current = instances[idx];
  let prev;
  if (idx > 0) {
    prev = instances[idx - 1];
  }
  return { current, prev };
};
const getLastOffset = (id) => {
  const { prev } = getInstance(id);
  if (!prev)
    return 0;
  return prev.vm.exposed.bottom.value;
};
const getOffsetOrSpace = (id, offset) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  return idx > 0 ? 16 : offset;
};

const __default__ = defineComponent({
  name: "ElMessage"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: messageProps,
  emits: messageEmits,
  setup(__props, { expose }) {
    const props = __props;
    const { Close } = TypeComponents;
    const { ns, zIndex } = useGlobalComponentSettings("message");
    const { currentZIndex, nextZIndex } = zIndex;
    const messageRef = ref();
    const visible = ref(false);
    const height = ref(0);
    let stopTimer = void 0;
    const badgeType = computed(() => props.type ? props.type === "error" ? "danger" : props.type : "info");
    const typeClass = computed(() => {
      const type = props.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const iconComponent = computed(() => props.icon || TypeComponentsMap[props.type] || "");
    const lastOffset = computed(() => getLastOffset(props.id));
    const offset = computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value);
    const bottom = computed(() => height.value + offset.value);
    const customStyle = computed(() => ({
      top: `${offset.value}px`,
      zIndex: currentZIndex.value
    }));
    function startTimer() {
      if (props.duration === 0)
        return;
      ({ stop: stopTimer } = useTimeoutFn(() => {
        close();
      }, props.duration));
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close() {
      visible.value = false;
    }
    function keydown({ code }) {
      if (code === EVENT_CODE.esc) {
        close();
      }
    }
    onMounted(() => {
      startTimer();
      nextZIndex();
      visible.value = true;
    });
    watch(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    useEventListener(document, "keydown", keydown);
    useResizeObserver(messageRef, () => {
      height.value = messageRef.value.getBoundingClientRect().height;
    });
    expose({
      visible,
      bottom,
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        onBeforeLeave: _ctx.onClose,
        onAfterLeave: ($event) => _ctx.$emit("destroy"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            id: _ctx.id,
            ref_key: "messageRef",
            ref: messageRef,
            class: normalizeClass([
              unref(ns).b(),
              { [unref(ns).m(_ctx.type)]: _ctx.type },
              unref(ns).is("center", _ctx.center),
              unref(ns).is("closable", _ctx.showClose),
              unref(ns).is("plain", _ctx.plain),
              _ctx.customClass
            ]),
            style: normalizeStyle(unref(customStyle)),
            role: "alert",
            onMouseenter: clearTimer,
            onMouseleave: startTimer
          }, [
            _ctx.repeatNum > 1 ? (openBlock(), createBlock(unref(ElBadge), {
              key: 0,
              value: _ctx.repeatNum,
              type: unref(badgeType),
              class: normalizeClass(unref(ns).e("badge"))
            }, null, 8, ["value", "type", "class"])) : createCommentVNode("v-if", true),
            unref(iconComponent) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass([unref(ns).e("icon"), unref(typeClass)])
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "default", {}, () => [
              !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: normalizeClass(unref(ns).e("content"))
              }, toDisplayString(_ctx.message), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
                createElementVNode("p", {
                  class: normalizeClass(unref(ns).e("content")),
                  innerHTML: _ctx.message
                }, null, 10, ["innerHTML"])
              ], 2112))
            ]),
            _ctx.showClose ? (openBlock(), createBlock(unref(ElIcon), {
              key: 2,
              class: normalizeClass(unref(ns).e("closeBtn")),
              onClick: withModifiers(close, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(Close))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 46, ["id"]), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name", "onBeforeLeave", "onAfterLeave"]);
    };
  }
});
var MessageConstructor = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "message.vue"]]);

let seed = 1;
const normalizeOptions = (params) => {
  const options = !params || isString(params) || isVNode(params) || isFunction(params) ? { message: params } : params;
  const normalized = {
    ...messageDefaults,
    ...options
  };
  if (!normalized.appendTo) {
    normalized.appendTo = document.body;
  } else if (isString(normalized.appendTo)) {
    let appendTo = document.querySelector(normalized.appendTo);
    if (!isElement(appendTo)) {
      debugWarn("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body.");
      appendTo = document.body;
    }
    normalized.appendTo = appendTo;
  }
  if (isBoolean(messageConfig.grouping) && !normalized.grouping) {
    normalized.grouping = messageConfig.grouping;
  }
  if (isNumber(messageConfig.duration) && normalized.duration === 3e3) {
    normalized.duration = messageConfig.duration;
  }
  if (isNumber(messageConfig.offset) && normalized.offset === 16) {
    normalized.offset = messageConfig.offset;
  }
  if (isBoolean(messageConfig.showClose) && !normalized.showClose) {
    normalized.showClose = messageConfig.showClose;
  }
  return normalized;
};
const closeMessage = (instance) => {
  const idx = instances.indexOf(instance);
  if (idx === -1)
    return;
  instances.splice(idx, 1);
  const { handler } = instance;
  handler.close();
};
const createMessage = ({ appendTo, ...options }, context) => {
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const container = document.createElement("div");
  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose == null ? void 0 : userOnClose();
      closeMessage(instance);
    },
    onDestroy: () => {
      render(null, container);
    }
  };
  const vnode = createVNode(MessageConstructor, props, isFunction(props.message) || isVNode(props.message) ? {
    default: isFunction(props.message) ? props.message : () => props.message
  } : null);
  vnode.appContext = context || message._context;
  render(vnode, container);
  appendTo.appendChild(container.firstElementChild);
  const vm = vnode.component;
  const handler = {
    close: () => {
      vm.exposed.visible.value = false;
    }
  };
  const instance = {
    id,
    vnode,
    vm,
    handler,
    props: vnode.component.props
  };
  return instance;
};
const message = (options = {}, context) => {
  if (!isClient)
    return { close: () => void 0 };
  const normalized = normalizeOptions(options);
  if (normalized.grouping && instances.length) {
    const instance2 = instances.find(({ vnode: vm }) => {
      var _a;
      return ((_a = vm.props) == null ? void 0 : _a.message) === normalized.message;
    });
    if (instance2) {
      instance2.props.repeatNum += 1;
      instance2.props.type = normalized.type;
      return instance2.handler;
    }
  }
  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => void 0 };
  }
  const instance = createMessage(normalized, context);
  instances.push(instance);
  return instance.handler;
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeOptions(options);
    return message({ ...normalized, type }, appContext);
  };
});
function closeAll(type) {
  for (const instance of instances) {
    if (!type || type === instance.props.type) {
      instance.handler.close();
    }
  }
}
message.closeAll = closeAll;
message._context = null;

const ElMessage = withInstallFunction(message, "$message");

const _sfc_main$2 = {
  __name: "Solution",
  __ssrInlineRender: true,
  setup(__props) {
    const activeCategory = ref("all");
    const currentPage = ref(1);
    const pageSize = ref(6);
    const newsletterEmail = ref("");
    const filteredArticles = computed(() => {
      if (activeCategory.value === "all") return data.articles;
      return data.articles.filter((article) => article.category === activeCategory.value);
    });
    const paginatedArticles = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return filteredArticles.value.slice(start, end);
    });
    const setActiveCategory = (categoryId) => {
      activeCategory.value = categoryId;
      currentPage.value = 1;
    };
    const getCategoryName = (categoryId) => {
      const category = data.categories.find((c) => c.id === categoryId);
      return category ? category.name : "Uncategorized";
    };
    const scrollToContent = () => {
      const element = (void 0).getElementById("blog-content");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    };
    const subscribeNewsletter = () => {
      if (!newsletterEmail.value) {
        ElMessage.error("Please enter an email address.");
        return;
      }
      ElMessage.success("Subscribed successfully!");
      newsletterEmail.value = "";
    };
    const scheduleDemo = () => {
      ElMessage.info("Redirecting to demo scheduling...");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_pagination = resolveComponent("el-pagination");
      const _component_el_input = resolveComponent("el-input");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 font-sans" }, _attrs))} data-v-86bc5972><section class="pt-32 pb-20 px-6 relative overflow-hidden" data-v-86bc5972><div class="absolute inset-0 pointer-events-none" data-v-86bc5972><div class="absolute top-20 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl" data-v-86bc5972></div><div class="absolute bottom-20 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl" data-v-86bc5972></div><div class="absolute -bottom-20 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-40 blur-3xl" data-v-86bc5972></div></div><div class="container mx-auto max-w-6xl relative z-10" data-v-86bc5972><div class="text-center" data-v-86bc5972><h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-v-86bc5972><span class="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent" data-v-86bc5972>Comprehensive</span> Solutions </h2><p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" data-v-86bc5972> Elevate your business with intelligent, integrated tools designed to enhance productivity and streamline operations. </p>`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        round: "",
        class: "mt-8 px-8 py-3 text-lg",
        onClick: scrollToContent
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore More <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-86bc5972${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-86bc5972${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Explore More "),
              (openBlock(), createBlock("svg", {
                class: "ml-2 h-5 w-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M19 9l-7 7-7-7"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="py-0 px-6 relative" data-v-86bc5972><div class="container mx-auto max-w-6xl" data-v-86bc5972><div class="grid md:grid-cols-3 gap-10" data-v-86bc5972><!--[-->`);
      ssrRenderList(unref(data).successStats, (stat, index) => {
        _push(`<div class="bg-white rounded-2xl p-8 shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300" data-v-86bc5972><div class="text-5xl font-bold text-blue-600 mb-4" data-v-86bc5972>${ssrInterpolate(stat.value)}</div><h4 class="text-xl font-semibold text-gray-900 mb-3" data-v-86bc5972>${ssrInterpolate(stat.title)}</h4><p class="text-gray-600 leading-relaxed" data-v-86bc5972>${ssrInterpolate(stat.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section id="blog-content" class="py-24 px-6 relative overflow-hidden" data-v-86bc5972><div class="absolute inset-0 pointer-events-none" data-v-86bc5972><div class="absolute top-20 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl" data-v-86bc5972></div><div class="absolute bottom-20 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl" data-v-86bc5972></div></div><div class="container mx-auto max-w-6xl relative z-10" data-v-86bc5972><div class="flex flex-wrap justify-center gap-4 mb-16" data-v-86bc5972><!--[-->`);
      ssrRenderList(unref(data).categories, (category) => {
        _push(ssrRenderComponent(_component_el_button, {
          key: category.id,
          type: activeCategory.value === category.id ? "primary" : "default",
          round: "",
          onClick: ($event) => setActiveCategory(category.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(data).featuredArticle) {
        _push(`<div class="mb-20" data-v-86bc5972><div class="bg-white rounded-3xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300" data-v-86bc5972><div class="grid grid-cols-1 lg:grid-cols-5" data-v-86bc5972><div class="lg:col-span-3 p-10 flex flex-col justify-between" data-v-86bc5972><div data-v-86bc5972><div class="flex items-center mb-6" data-v-86bc5972><span class="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full" data-v-86bc5972>${ssrInterpolate(getCategoryName(unref(data).featuredArticle.category))}</span><span class="mx-3 text-gray-400" data-v-86bc5972>\u2022</span><span class="text-gray-500 text-sm" data-v-86bc5972>${ssrInterpolate(unref(data).featuredArticle.date)}</span></div><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight" data-v-86bc5972>${ssrInterpolate(unref(data).featuredArticle.title)}</h2><p class="text-gray-600 text-lg leading-relaxed" data-v-86bc5972>${ssrInterpolate(unref(data).featuredArticle.excerpt)}</p></div><div class="flex items-center mt-8" data-v-86bc5972><img${ssrRenderAttr("src", unref(data).featuredArticle.author.avatar)} class="w-12 h-12 rounded-full mr-4"${ssrRenderAttr("alt", unref(data).featuredArticle.author.name)} data-v-86bc5972><div data-v-86bc5972><p class="text-sm font-medium text-gray-900" data-v-86bc5972>${ssrInterpolate(unref(data).featuredArticle.author.name)}</p><p class="text-sm text-gray-500" data-v-86bc5972>${ssrInterpolate(unref(data).featuredArticle.author.title)}</p></div>`);
        _push(ssrRenderComponent(_component_el_button, {
          type: "text",
          class: "ml-auto text-blue-600 hover:text-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read Article <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" data-v-86bc5972${_scopeId}><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-v-86bc5972${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Read Article "),
                (openBlock(), createBlock("svg", {
                  class: "h-5 w-5",
                  fill: "currentColor",
                  viewBox: "0 0 20 20"
                }, [
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                    "clip-rule": "evenodd"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="lg:col-span-2" data-v-86bc5972><img${ssrRenderAttr("src", unref(data).featuredArticle.image)}${ssrRenderAttr("alt", unref(data).featuredArticle.title)} class="h-full w-full object-cover transition-transform duration-500 hover:scale-105" data-v-86bc5972></div></div></div></div>`);
      } else {
        _push(`<div class="text-center text-gray-500 mb-20" data-v-86bc5972> No featured article available. </div>`);
      }
      _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" data-v-86bc5972><!--[-->`);
      ssrRenderList(paginatedArticles.value, (article) => {
        _push(`<article class="bg-white rounded-2xl shadow-md border border-blue-100 overflow-hidden hover:shadow-lg transition-all duration-300" data-v-86bc5972><div class="relative h-60" data-v-86bc5972><img${ssrRenderAttr("src", article.image)}${ssrRenderAttr("alt", article.title)} class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" data-v-86bc5972><span class="absolute top-4 left-4 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full" data-v-86bc5972>${ssrInterpolate(getCategoryName(article.category))}</span></div><div class="p-6 flex flex-col" data-v-86bc5972><div class="flex items-center mb-4 text-sm text-gray-500" data-v-86bc5972><span data-v-86bc5972>${ssrInterpolate(article.date)}</span><span class="mx-2" data-v-86bc5972>\u2022</span><span data-v-86bc5972>${ssrInterpolate(article.readTime)} min read</span></div><h3 class="text-xl font-semibold text-gray-900 mb-4 leading-tight" data-v-86bc5972>${ssrInterpolate(article.title)}</h3><p class="text-gray-600 flex-grow" data-v-86bc5972>${ssrInterpolate(article.excerpt)}</p><div class="flex items-center mt-6 pt-4 border-t border-blue-100" data-v-86bc5972><img${ssrRenderAttr("src", article.author.avatar)} class="w-10 h-10 rounded-full mr-3"${ssrRenderAttr("alt", article.author.name)} data-v-86bc5972><p class="text-sm font-medium text-gray-900" data-v-86bc5972>${ssrInterpolate(article.author.name)}</p>`);
        _push(ssrRenderComponent(_component_el_button, {
          type: "text",
          class: "ml-auto text-blue-600 hover:text-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" data-v-86bc5972${_scopeId}><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-v-86bc5972${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Read "),
                (openBlock(), createBlock("svg", {
                  class: "h-4 w-4",
                  fill: "currentColor",
                  viewBox: "0 0 20 20"
                }, [
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                    "clip-rule": "evenodd"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></article>`);
      });
      _push(`<!--]-->`);
      if (!filteredArticles.value.length) {
        _push(`<div class="col-span-full text-center text-gray-500" data-v-86bc5972> No articles found. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-16 flex justify-center" data-v-86bc5972>`);
      _push(ssrRenderComponent(_component_el_pagination, {
        "current-page": currentPage.value,
        "onUpdate:currentPage": ($event) => currentPage.value = $event,
        "page-size": pageSize.value,
        total: filteredArticles.value.length,
        layout: "prev, pager, next",
        background: ""
      }, null, _parent));
      _push(`</div><div class="mt-24 bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-10 text-white relative overflow-hidden shadow-xl" data-v-86bc5972><div class="absolute right-0 bottom-0 opacity-20" data-v-86bc5972><svg width="200" height="200" viewBox="0 0 200 200" fill="white" data-v-86bc5972><path d="M173.913 0H26.087C11.6807 0 0 11.6807 0 26.087V173.913C0 188.319 11.6807 200 26.087 200H173.913C188.319 200 200 188.319 200 173.913V26.087C200 11.6807 188.319 0 173.913 0Z" data-v-86bc5972></path></svg></div><div class="relative z-10 md:flex md:items-center md:justify-between gap-8" data-v-86bc5972><div class="mb-8 md:mb-0" data-v-86bc5972><h3 class="text-3xl font-bold mb-4" data-v-86bc5972>Stay Informed</h3><p class="text-blue-100 text-lg max-w-md" data-v-86bc5972> Subscribe for exclusive insights on automation and SaaS trends, delivered monthly. </p></div><div class="flex flex-col sm:flex-row gap-4" data-v-86bc5972>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: newsletterEmail.value,
        "onUpdate:modelValue": ($event) => newsletterEmail.value = $event,
        placeholder: "Enter your email",
        clearable: "",
        class: "max-w-xs"
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        onClick: subscribeNewsletter,
        class: "bg-white text-blue-600 hover:bg-blue-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Subscribe `);
          } else {
            return [
              createTextVNode(" Subscribe ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section class="py-24 px-6 relative" data-v-86bc5972><div class="container mx-auto max-w-4xl text-center" data-v-86bc5972><h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-v-86bc5972> Ready to Optimize Your Workflow? </h3><p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto" data-v-86bc5972> Discover how our solutions can transform your business. Schedule a demo today. </p>`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        size: "large",
        class: "px-10 py-4 text-lg",
        onClick: scheduleDemo
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book a Demo `);
          } else {
            return [
              createTextVNode(" Book a Demo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/Solution.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Solution = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-86bc5972"]]);
const _sfc_main$1 = {
  __name: "Solution",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Solution, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Solution.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "solutions",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/solutions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=solutions-DO3aphqm.mjs.map
