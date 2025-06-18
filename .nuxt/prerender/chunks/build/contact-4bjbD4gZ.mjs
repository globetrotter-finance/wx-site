import { ssrRenderComponent, ssrRenderAttrs } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/server-renderer/index.mjs';
import { H as Header$1, _ as _sfc_main$d } from './Footer-bpAE6knL.mjs';
import { defineComponent, createElementBlock, openBlock, normalizeClass, unref, createCommentVNode, createElementVNode, renderSlot, createTextVNode, toDisplayString, normalizeStyle, inject, computed, createBlock, resolveDynamicComponent, withCtx, useSlots, provide, createVNode, useSSRContext } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/index.mjs';
import { Briefcase, Help, Iphone } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@element-plus/icons-vue/dist/index.js';
import { b as buildProps, d as definePropType, _ as _export_sfc, u as useNamespace, w as withInstall, i as isNumber, a as withNoopInstall, E as ElIcon } from '../_/index.mjs';
import { m as mutable } from '../_/typescript.mjs';
import { isObject } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import { i as iconPropType } from '../_/icon.mjs';
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
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/lodash-unified/import.js';

const cardProps = buildProps({
  header: {
    type: String,
    default: ""
  },
  footer: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  bodyClass: String,
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always"
  }
});

const __default__$9 = defineComponent({
  name: "ElCard"
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: cardProps,
  setup(__props) {
    const ns = useNamespace("card");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).is(`${_ctx.shadow}-shadow`)])
      }, [
        _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("header"))
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createTextVNode(toDisplayString(_ctx.header), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass]),
          style: normalizeStyle(_ctx.bodyStyle)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6),
        _ctx.$slots.footer || _ctx.footer ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns).e("footer"))
        }, [
          renderSlot(_ctx.$slots, "footer", {}, () => [
            createTextVNode(toDisplayString(_ctx.footer), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Card = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "card.vue"]]);

const ElCard = withInstall(Card);

const colProps = buildProps({
  tag: {
    type: String,
    default: "div"
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  },
  xs: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  sm: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  md: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  lg: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  xl: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  }
});

const rowContextKey = Symbol("rowContextKey");

const __default__$8 = defineComponent({
  name: "ElCol"
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: colProps,
  setup(__props) {
    const props = __props;
    const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });
    const ns = useNamespace("col");
    const style = computed(() => {
      const styles = {};
      if (gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
      }
      return styles;
    });
    const colKls = computed(() => {
      const classes = [];
      const pos = ["span", "offset", "pull", "push"];
      pos.forEach((prop) => {
        const size = props[prop];
        if (isNumber(size)) {
          if (prop === "span")
            classes.push(ns.b(`${props[prop]}`));
          else if (size > 0)
            classes.push(ns.b(`${prop}-${props[prop]}`));
        }
      });
      const sizes = ["xs", "sm", "md", "lg", "xl"];
      sizes.forEach((size) => {
        if (isNumber(props[size])) {
          classes.push(ns.b(`${size}-${props[size]}`));
        } else if (isObject(props[size])) {
          Object.entries(props[size]).forEach(([prop, sizeProp]) => {
            classes.push(prop !== "span" ? ns.b(`${size}-${prop}-${sizeProp}`) : ns.b(`${size}-${sizeProp}`));
          });
        }
      });
      if (gutter.value) {
        classes.push(ns.is("guttered"));
      }
      return [ns.b(), classes];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(unref(colKls)),
        style: normalizeStyle(unref(style))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Col = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "col.vue"]]);

const ElCol = withInstall(Col);

const __default__$7 = defineComponent({
  name: "ElContainer"
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: {
    direction: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const ns = useNamespace("container");
    const isVertical = computed(() => {
      if (props.direction === "vertical") {
        return true;
      } else if (props.direction === "horizontal") {
        return false;
      }
      if (slots && slots.default) {
        const vNodes = slots.default();
        return vNodes.some((vNode) => {
          const tag = vNode.type.name;
          return tag === "ElHeader" || tag === "ElFooter";
        });
      } else {
        return false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass([unref(ns).b(), unref(ns).is("vertical", unref(isVertical))])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Container = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "container.vue"]]);

const __default__$6 = defineComponent({
  name: "ElAside"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("aside");
    const style = computed(() => props.width ? ns.cssVarBlock({ width: props.width }) : {});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Aside = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "aside.vue"]]);

const __default__$5 = defineComponent({
  name: "ElFooter"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("footer");
    const style = computed(() => props.height ? ns.cssVarBlock({ height: props.height }) : {});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("footer", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Footer = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "footer.vue"]]);

const __default__$4 = defineComponent({
  name: "ElHeader"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const ns = useNamespace("header");
    const style = computed(() => {
      return props.height ? ns.cssVarBlock({
        height: props.height
      }) : {};
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "header.vue"]]);

const __default__$3 = defineComponent({
  name: "ElMain"
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  setup(__props) {
    const ns = useNamespace("main");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Main = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "main.vue"]]);

const ElContainer = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main
});
withNoopInstall(Aside);
withNoopInstall(Footer);
withNoopInstall(Header);
const ElMain = withNoopInstall(Main);

const dividerProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  },
  borderStyle: {
    type: definePropType(String),
    default: "solid"
  }
});

const __default__$2 = defineComponent({
  name: "ElDivider"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: dividerProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("divider");
    const dividerStyle = computed(() => {
      return ns.cssVar({
        "border-style": props.borderStyle
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.direction)]),
        style: normalizeStyle(unref(dividerStyle)),
        role: "separator"
      }, [
        _ctx.$slots.default && _ctx.direction !== "vertical" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(ns).e("text"), unref(ns).is(_ctx.contentPosition)])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var Divider = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "divider.vue"]]);

const ElDivider = withInstall(Divider);

const linkProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger", "default"],
    default: "default"
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  href: { type: String, default: "" },
  target: {
    type: String,
    default: "_self"
  },
  icon: {
    type: iconPropType
  }
});
const linkEmits = {
  click: (evt) => evt instanceof MouseEvent
};

const __default__$1 = defineComponent({
  name: "ElLink"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: linkProps,
  emits: linkEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("link");
    const linkKls = computed(() => [
      ns.b(),
      ns.m(props.type),
      ns.is("disabled", props.disabled),
      ns.is("underline", props.underline && !props.disabled)
    ]);
    function handleClick(event) {
      if (!props.disabled)
        emit("click", event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(unref(linkKls)),
        href: _ctx.disabled || !_ctx.href ? void 0 : _ctx.href,
        target: _ctx.disabled || !_ctx.href ? void 0 : _ctx.target,
        onClick: handleClick
      }, [
        _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(ns).e("inner"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true),
        _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 2 }) : createCommentVNode("v-if", true)
      ], 10, ["href", "target"]);
    };
  }
});
var Link = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "link.vue"]]);

const ElLink = withInstall(Link);

const RowJustify = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
];
const RowAlign = ["top", "middle", "bottom"];
const rowProps = buildProps({
  tag: {
    type: String,
    default: "div"
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    values: RowJustify,
    default: "start"
  },
  align: {
    type: String,
    values: RowAlign
  }
});

const __default__ = defineComponent({
  name: "ElRow"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: rowProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("row");
    const gutter = computed(() => props.gutter);
    provide(rowContextKey, {
      gutter
    });
    const style = computed(() => {
      const styles = {};
      if (!props.gutter) {
        return styles;
      }
      styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
      return styles;
    });
    const rowKls = computed(() => [
      ns.b(),
      ns.is(`justify-${props.justify}`, props.justify !== "start"),
      ns.is(`align-${props.align}`, !!props.align)
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(unref(rowKls)),
        style: normalizeStyle(unref(style))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Row = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "row.vue"]]);

const ElRow = withInstall(Row);

const _sfc_main$2 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(ElContainer), { class: "bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen py-24" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ElMain), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ElRow), { justify: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ElCol), {
                          xs: 24,
                          sm: 20,
                          md: 16,
                          lg: 12,
                          class: "text-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h1 class="text-5xl font-extrabold text-slate-900 mb-4"${_scopeId4}> Get in Touch </h1><h2 class="text-2xl font-semibold mb-10"${_scopeId4}> with the <span class="text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"${_scopeId4}>Saras Finance</span> Team </h2><p class="text-lg text-slate-600 mb-16 max-w-3xl mx-auto"${_scopeId4}> Whether you\u2019re exploring automation for legal operations, planning a compliance overhaul, or want to see <span class="text-blue-600 fw-bold"${_scopeId4}>Saras</span> in action \u2014 we\u2019re ready to help. </p>`);
                              _push5(ssrRenderComponent(unref(ElDivider), { "content-position": "center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Contact Us`);
                                  } else {
                                    return [
                                      createTextVNode("Contact Us")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(ElRow), {
                                gutter: 40,
                                justify: "center",
                                class: "mt-10 mb-16"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(ElCol), {
                                      xs: 24,
                                      sm: 12,
                                      md: 8
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(ElCard), {
                                            shadow: "hover",
                                            class: "rounded-2xl p-8 text-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(ElIcon), {
                                                  size: "40",
                                                  class: "mb-4 text-blue-600"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(unref(Briefcase), null, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(unref(Briefcase))
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`<div class="text-xl font-semibold text-blue-700 mb-2"${_scopeId7}>Sales &amp; Demo</div>`);
                                                _push8(ssrRenderComponent(unref(ElLink), {
                                                  href: "mailto:sales@sarasfinance.com",
                                                  type: "primary",
                                                  class: "text-lg font-medium"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` sales@sarasfinance.com `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" sales@sarasfinance.com ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(ElIcon), {
                                                    size: "40",
                                                    class: "mb-4 text-blue-600"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Briefcase))
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("div", { class: "text-xl font-semibold text-blue-700 mb-2" }, "Sales & Demo"),
                                                  createVNode(unref(ElLink), {
                                                    href: "mailto:sales@sarasfinance.com",
                                                    type: "primary",
                                                    class: "text-lg font-medium"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" sales@sarasfinance.com ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(ElCard), {
                                              shadow: "hover",
                                              class: "rounded-2xl p-8 text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(ElIcon), {
                                                  size: "40",
                                                  class: "mb-4 text-blue-600"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Briefcase))
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("div", { class: "text-xl font-semibold text-blue-700 mb-2" }, "Sales & Demo"),
                                                createVNode(unref(ElLink), {
                                                  href: "mailto:sales@sarasfinance.com",
                                                  type: "primary",
                                                  class: "text-lg font-medium"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" sales@sarasfinance.com ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(ElCol), {
                                      xs: 24,
                                      sm: 12,
                                      md: 8
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(ElCard), {
                                            shadow: "hover",
                                            class: "rounded-2xl p-8 text-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(ElIcon), {
                                                  size: "40",
                                                  class: "mb-4 text-green-600"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(unref(Help), null, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(unref(Help))
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`<div class="text-xl font-semibold text-green-700 mb-2"${_scopeId7}>Support</div>`);
                                                _push8(ssrRenderComponent(unref(ElLink), {
                                                  href: "mailto:support@sarasfinance.com",
                                                  type: "success",
                                                  class: "text-lg font-medium"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` support@sarasfinance.com `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" support@sarasfinance.com ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(ElIcon), {
                                                    size: "40",
                                                    class: "mb-4 text-green-600"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Help))
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("div", { class: "text-xl font-semibold text-green-700 mb-2" }, "Support"),
                                                  createVNode(unref(ElLink), {
                                                    href: "mailto:support@sarasfinance.com",
                                                    type: "success",
                                                    class: "text-lg font-medium"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" support@sarasfinance.com ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(ElCard), {
                                              shadow: "hover",
                                              class: "rounded-2xl p-8 text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(ElIcon), {
                                                  size: "40",
                                                  class: "mb-4 text-green-600"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Help))
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("div", { class: "text-xl font-semibold text-green-700 mb-2" }, "Support"),
                                                createVNode(unref(ElLink), {
                                                  href: "mailto:support@sarasfinance.com",
                                                  type: "success",
                                                  class: "text-lg font-medium"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" support@sarasfinance.com ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(ElCol), {
                                      xs: 24,
                                      sm: 12,
                                      md: 8
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(ElCard), {
                                            shadow: "hover",
                                            class: "rounded-2xl p-8 text-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(ElIcon), {
                                                  size: "40",
                                                  class: "mb-4 text-yellow-600"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(unref(Iphone), null, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(unref(Iphone))
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`<div class="text-xl font-semibold text-yellow-700 mb-2"${_scopeId7}>Phone</div>`);
                                                _push8(ssrRenderComponent(unref(ElLink), {
                                                  href: "tel:+919501289879",
                                                  type: "warning",
                                                  class: "text-lg font-medium"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` +91 95012 89879 `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" +91 95012 89879 ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(ElIcon), {
                                                    size: "40",
                                                    class: "mb-4 text-yellow-600"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Iphone))
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("div", { class: "text-xl font-semibold text-yellow-700 mb-2" }, "Phone"),
                                                  createVNode(unref(ElLink), {
                                                    href: "tel:+919501289879",
                                                    type: "warning",
                                                    class: "text-lg font-medium"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" +91 95012 89879 ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(ElCard), {
                                              shadow: "hover",
                                              class: "rounded-2xl p-8 text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(ElIcon), {
                                                  size: "40",
                                                  class: "mb-4 text-yellow-600"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Iphone))
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("div", { class: "text-xl font-semibold text-yellow-700 mb-2" }, "Phone"),
                                                createVNode(unref(ElLink), {
                                                  href: "tel:+919501289879",
                                                  type: "warning",
                                                  class: "text-lg font-medium"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" +91 95012 89879 ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(ElCol), {
                                        xs: 24,
                                        sm: 12,
                                        md: 8
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(ElCard), {
                                            shadow: "hover",
                                            class: "rounded-2xl p-8 text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(ElIcon), {
                                                size: "40",
                                                class: "mb-4 text-blue-600"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Briefcase))
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "text-xl font-semibold text-blue-700 mb-2" }, "Sales & Demo"),
                                              createVNode(unref(ElLink), {
                                                href: "mailto:sales@sarasfinance.com",
                                                type: "primary",
                                                class: "text-lg font-medium"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" sales@sarasfinance.com ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(ElCol), {
                                        xs: 24,
                                        sm: 12,
                                        md: 8
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(ElCard), {
                                            shadow: "hover",
                                            class: "rounded-2xl p-8 text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(ElIcon), {
                                                size: "40",
                                                class: "mb-4 text-green-600"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Help))
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "text-xl font-semibold text-green-700 mb-2" }, "Support"),
                                              createVNode(unref(ElLink), {
                                                href: "mailto:support@sarasfinance.com",
                                                type: "success",
                                                class: "text-lg font-medium"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" support@sarasfinance.com ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(ElCol), {
                                        xs: 24,
                                        sm: 12,
                                        md: 8
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(ElCard), {
                                            shadow: "hover",
                                            class: "rounded-2xl p-8 text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(ElIcon), {
                                                size: "40",
                                                class: "mb-4 text-yellow-600"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Iphone))
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "text-xl font-semibold text-yellow-700 mb-2" }, "Phone"),
                                              createVNode(unref(ElLink), {
                                                href: "tel:+919501289879",
                                                type: "warning",
                                                class: "text-lg font-medium"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" +91 95012 89879 ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(ElDivider), { "content-position": "center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Partnerships &amp; Media`);
                                  } else {
                                    return [
                                      createTextVNode("Partnerships & Media")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(ElCard), {
                                shadow: "hover",
                                class: "rounded-2xl p-8 my-16"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3 class="text-2xl font-bold text-slate-900 mb-4"${_scopeId5}>Partnerships &amp; Media</h3><div class="flex flex-col items-center text-center"${_scopeId5}><p class="text-lg text-slate-600"${_scopeId5}> Interested in collaborating with <span class="text-blue-600 fw-bold"${_scopeId5}>Saras</span>? </p><p class="text-lg text-slate-600"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(ElLink), {
                                      href: "mailto:partners@sarasfinance.com",
                                      type: "info",
                                      class: "text-lg font-medium"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` partners@sarasfinance.com `);
                                        } else {
                                          return [
                                            createTextVNode(" partners@sarasfinance.com ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</p></div>`);
                                  } else {
                                    return [
                                      createVNode("h3", { class: "text-2xl font-bold text-slate-900 mb-4" }, "Partnerships & Media"),
                                      createVNode("div", { class: "flex flex-col items-center text-center" }, [
                                        createVNode("p", { class: "text-lg text-slate-600" }, [
                                          createTextVNode(" Interested in collaborating with "),
                                          createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                                          createTextVNode("? ")
                                        ]),
                                        createVNode("p", { class: "text-lg text-slate-600" }, [
                                          createVNode(unref(ElLink), {
                                            href: "mailto:partners@sarasfinance.com",
                                            type: "info",
                                            class: "text-lg font-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" partners@sarasfinance.com ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h1", { class: "text-5xl font-extrabold text-slate-900 mb-4" }, " Get in Touch "),
                                createVNode("h2", { class: "text-2xl font-semibold mb-10" }, [
                                  createTextVNode(" with the "),
                                  createVNode("span", { class: "text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent" }, "Saras Finance"),
                                  createTextVNode(" Team ")
                                ]),
                                createVNode("p", { class: "text-lg text-slate-600 mb-16 max-w-3xl mx-auto" }, [
                                  createTextVNode(" Whether you\u2019re exploring automation for legal operations, planning a compliance overhaul, or want to see "),
                                  createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                                  createTextVNode(" in action \u2014 we\u2019re ready to help. ")
                                ]),
                                createVNode(unref(ElDivider), { "content-position": "center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Contact Us")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ElRow), {
                                  gutter: 40,
                                  justify: "center",
                                  class: "mt-10 mb-16"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ElCol), {
                                      xs: 24,
                                      sm: 12,
                                      md: 8
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(ElCard), {
                                          shadow: "hover",
                                          class: "rounded-2xl p-8 text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(ElIcon), {
                                              size: "40",
                                              class: "mb-4 text-blue-600"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Briefcase))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", { class: "text-xl font-semibold text-blue-700 mb-2" }, "Sales & Demo"),
                                            createVNode(unref(ElLink), {
                                              href: "mailto:sales@sarasfinance.com",
                                              type: "primary",
                                              class: "text-lg font-medium"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" sales@sarasfinance.com ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(ElCol), {
                                      xs: 24,
                                      sm: 12,
                                      md: 8
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(ElCard), {
                                          shadow: "hover",
                                          class: "rounded-2xl p-8 text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(ElIcon), {
                                              size: "40",
                                              class: "mb-4 text-green-600"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Help))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", { class: "text-xl font-semibold text-green-700 mb-2" }, "Support"),
                                            createVNode(unref(ElLink), {
                                              href: "mailto:support@sarasfinance.com",
                                              type: "success",
                                              class: "text-lg font-medium"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" support@sarasfinance.com ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(ElCol), {
                                      xs: 24,
                                      sm: 12,
                                      md: 8
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(ElCard), {
                                          shadow: "hover",
                                          class: "rounded-2xl p-8 text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(ElIcon), {
                                              size: "40",
                                              class: "mb-4 text-yellow-600"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Iphone))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", { class: "text-xl font-semibold text-yellow-700 mb-2" }, "Phone"),
                                            createVNode(unref(ElLink), {
                                              href: "tel:+919501289879",
                                              type: "warning",
                                              class: "text-lg font-medium"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" +91 95012 89879 ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ElDivider), { "content-position": "center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Partnerships & Media")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ElCard), {
                                  shadow: "hover",
                                  class: "rounded-2xl p-8 my-16"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "text-2xl font-bold text-slate-900 mb-4" }, "Partnerships & Media"),
                                    createVNode("div", { class: "flex flex-col items-center text-center" }, [
                                      createVNode("p", { class: "text-lg text-slate-600" }, [
                                        createTextVNode(" Interested in collaborating with "),
                                        createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                                        createTextVNode("? ")
                                      ]),
                                      createVNode("p", { class: "text-lg text-slate-600" }, [
                                        createVNode(unref(ElLink), {
                                          href: "mailto:partners@sarasfinance.com",
                                          type: "info",
                                          class: "text-lg font-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" partners@sarasfinance.com ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ElCol), {
                            xs: 24,
                            sm: 20,
                            md: 16,
                            lg: 12,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("h1", { class: "text-5xl font-extrabold text-slate-900 mb-4" }, " Get in Touch "),
                              createVNode("h2", { class: "text-2xl font-semibold mb-10" }, [
                                createTextVNode(" with the "),
                                createVNode("span", { class: "text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent" }, "Saras Finance"),
                                createTextVNode(" Team ")
                              ]),
                              createVNode("p", { class: "text-lg text-slate-600 mb-16 max-w-3xl mx-auto" }, [
                                createTextVNode(" Whether you\u2019re exploring automation for legal operations, planning a compliance overhaul, or want to see "),
                                createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                                createTextVNode(" in action \u2014 we\u2019re ready to help. ")
                              ]),
                              createVNode(unref(ElDivider), { "content-position": "center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Contact Us")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ElRow), {
                                gutter: 40,
                                justify: "center",
                                class: "mt-10 mb-16"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ElCol), {
                                    xs: 24,
                                    sm: 12,
                                    md: 8
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ElCard), {
                                        shadow: "hover",
                                        class: "rounded-2xl p-8 text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(ElIcon), {
                                            size: "40",
                                            class: "mb-4 text-blue-600"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Briefcase))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "text-xl font-semibold text-blue-700 mb-2" }, "Sales & Demo"),
                                          createVNode(unref(ElLink), {
                                            href: "mailto:sales@sarasfinance.com",
                                            type: "primary",
                                            class: "text-lg font-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" sales@sarasfinance.com ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(ElCol), {
                                    xs: 24,
                                    sm: 12,
                                    md: 8
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ElCard), {
                                        shadow: "hover",
                                        class: "rounded-2xl p-8 text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(ElIcon), {
                                            size: "40",
                                            class: "mb-4 text-green-600"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Help))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "text-xl font-semibold text-green-700 mb-2" }, "Support"),
                                          createVNode(unref(ElLink), {
                                            href: "mailto:support@sarasfinance.com",
                                            type: "success",
                                            class: "text-lg font-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" support@sarasfinance.com ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(ElCol), {
                                    xs: 24,
                                    sm: 12,
                                    md: 8
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ElCard), {
                                        shadow: "hover",
                                        class: "rounded-2xl p-8 text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(ElIcon), {
                                            size: "40",
                                            class: "mb-4 text-yellow-600"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Iphone))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "text-xl font-semibold text-yellow-700 mb-2" }, "Phone"),
                                          createVNode(unref(ElLink), {
                                            href: "tel:+919501289879",
                                            type: "warning",
                                            class: "text-lg font-medium"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" +91 95012 89879 ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ElDivider), { "content-position": "center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Partnerships & Media")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ElCard), {
                                shadow: "hover",
                                class: "rounded-2xl p-8 my-16"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "text-2xl font-bold text-slate-900 mb-4" }, "Partnerships & Media"),
                                  createVNode("div", { class: "flex flex-col items-center text-center" }, [
                                    createVNode("p", { class: "text-lg text-slate-600" }, [
                                      createTextVNode(" Interested in collaborating with "),
                                      createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                                      createTextVNode("? ")
                                    ]),
                                    createVNode("p", { class: "text-lg text-slate-600" }, [
                                      createVNode(unref(ElLink), {
                                        href: "mailto:partners@sarasfinance.com",
                                        type: "info",
                                        class: "text-lg font-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" partners@sarasfinance.com ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ElRow), { justify: "center" }, {
                      default: withCtx(() => [
                        createVNode(unref(ElCol), {
                          xs: 24,
                          sm: 20,
                          md: 16,
                          lg: 12,
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("h1", { class: "text-5xl font-extrabold text-slate-900 mb-4" }, " Get in Touch "),
                            createVNode("h2", { class: "text-2xl font-semibold mb-10" }, [
                              createTextVNode(" with the "),
                              createVNode("span", { class: "text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent" }, "Saras Finance"),
                              createTextVNode(" Team ")
                            ]),
                            createVNode("p", { class: "text-lg text-slate-600 mb-16 max-w-3xl mx-auto" }, [
                              createTextVNode(" Whether you\u2019re exploring automation for legal operations, planning a compliance overhaul, or want to see "),
                              createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                              createTextVNode(" in action \u2014 we\u2019re ready to help. ")
                            ]),
                            createVNode(unref(ElDivider), { "content-position": "center" }, {
                              default: withCtx(() => [
                                createTextVNode("Contact Us")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(ElRow), {
                              gutter: 40,
                              justify: "center",
                              class: "mt-10 mb-16"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ElCol), {
                                  xs: 24,
                                  sm: 12,
                                  md: 8
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ElCard), {
                                      shadow: "hover",
                                      class: "rounded-2xl p-8 text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(ElIcon), {
                                          size: "40",
                                          class: "mb-4 text-blue-600"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Briefcase))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "text-xl font-semibold text-blue-700 mb-2" }, "Sales & Demo"),
                                        createVNode(unref(ElLink), {
                                          href: "mailto:sales@sarasfinance.com",
                                          type: "primary",
                                          class: "text-lg font-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" sales@sarasfinance.com ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ElCol), {
                                  xs: 24,
                                  sm: 12,
                                  md: 8
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ElCard), {
                                      shadow: "hover",
                                      class: "rounded-2xl p-8 text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(ElIcon), {
                                          size: "40",
                                          class: "mb-4 text-green-600"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Help))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "text-xl font-semibold text-green-700 mb-2" }, "Support"),
                                        createVNode(unref(ElLink), {
                                          href: "mailto:support@sarasfinance.com",
                                          type: "success",
                                          class: "text-lg font-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" support@sarasfinance.com ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ElCol), {
                                  xs: 24,
                                  sm: 12,
                                  md: 8
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ElCard), {
                                      shadow: "hover",
                                      class: "rounded-2xl p-8 text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(ElIcon), {
                                          size: "40",
                                          class: "mb-4 text-yellow-600"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Iphone))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "text-xl font-semibold text-yellow-700 mb-2" }, "Phone"),
                                        createVNode(unref(ElLink), {
                                          href: "tel:+919501289879",
                                          type: "warning",
                                          class: "text-lg font-medium"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" +91 95012 89879 ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(ElDivider), { "content-position": "center" }, {
                              default: withCtx(() => [
                                createTextVNode("Partnerships & Media")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(ElCard), {
                              shadow: "hover",
                              class: "rounded-2xl p-8 my-16"
                            }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "text-2xl font-bold text-slate-900 mb-4" }, "Partnerships & Media"),
                                createVNode("div", { class: "flex flex-col items-center text-center" }, [
                                  createVNode("p", { class: "text-lg text-slate-600" }, [
                                    createTextVNode(" Interested in collaborating with "),
                                    createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                                    createTextVNode("? ")
                                  ]),
                                  createVNode("p", { class: "text-lg text-slate-600" }, [
                                    createVNode(unref(ElLink), {
                                      href: "mailto:partners@sarasfinance.com",
                                      type: "info",
                                      class: "text-lg font-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" partners@sarasfinance.com ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ElMain), null, {
                default: withCtx(() => [
                  createVNode(unref(ElRow), { justify: "center" }, {
                    default: withCtx(() => [
                      createVNode(unref(ElCol), {
                        xs: 24,
                        sm: 20,
                        md: 16,
                        lg: 12,
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode("h1", { class: "text-5xl font-extrabold text-slate-900 mb-4" }, " Get in Touch "),
                          createVNode("h2", { class: "text-2xl font-semibold mb-10" }, [
                            createTextVNode(" with the "),
                            createVNode("span", { class: "text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent" }, "Saras Finance"),
                            createTextVNode(" Team ")
                          ]),
                          createVNode("p", { class: "text-lg text-slate-600 mb-16 max-w-3xl mx-auto" }, [
                            createTextVNode(" Whether you\u2019re exploring automation for legal operations, planning a compliance overhaul, or want to see "),
                            createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                            createTextVNode(" in action \u2014 we\u2019re ready to help. ")
                          ]),
                          createVNode(unref(ElDivider), { "content-position": "center" }, {
                            default: withCtx(() => [
                              createTextVNode("Contact Us")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(ElRow), {
                            gutter: 40,
                            justify: "center",
                            class: "mt-10 mb-16"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ElCol), {
                                xs: 24,
                                sm: 12,
                                md: 8
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ElCard), {
                                    shadow: "hover",
                                    class: "rounded-2xl p-8 text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ElIcon), {
                                        size: "40",
                                        class: "mb-4 text-blue-600"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Briefcase))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "text-xl font-semibold text-blue-700 mb-2" }, "Sales & Demo"),
                                      createVNode(unref(ElLink), {
                                        href: "mailto:sales@sarasfinance.com",
                                        type: "primary",
                                        class: "text-lg font-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" sales@sarasfinance.com ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ElCol), {
                                xs: 24,
                                sm: 12,
                                md: 8
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ElCard), {
                                    shadow: "hover",
                                    class: "rounded-2xl p-8 text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ElIcon), {
                                        size: "40",
                                        class: "mb-4 text-green-600"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Help))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "text-xl font-semibold text-green-700 mb-2" }, "Support"),
                                      createVNode(unref(ElLink), {
                                        href: "mailto:support@sarasfinance.com",
                                        type: "success",
                                        class: "text-lg font-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" support@sarasfinance.com ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ElCol), {
                                xs: 24,
                                sm: 12,
                                md: 8
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ElCard), {
                                    shadow: "hover",
                                    class: "rounded-2xl p-8 text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ElIcon), {
                                        size: "40",
                                        class: "mb-4 text-yellow-600"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Iphone))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "text-xl font-semibold text-yellow-700 mb-2" }, "Phone"),
                                      createVNode(unref(ElLink), {
                                        href: "tel:+919501289879",
                                        type: "warning",
                                        class: "text-lg font-medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" +91 95012 89879 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(ElDivider), { "content-position": "center" }, {
                            default: withCtx(() => [
                              createTextVNode("Partnerships & Media")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(ElCard), {
                            shadow: "hover",
                            class: "rounded-2xl p-8 my-16"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "text-2xl font-bold text-slate-900 mb-4" }, "Partnerships & Media"),
                              createVNode("div", { class: "flex flex-col items-center text-center" }, [
                                createVNode("p", { class: "text-lg text-slate-600" }, [
                                  createTextVNode(" Interested in collaborating with "),
                                  createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                                  createTextVNode("? ")
                                ]),
                                createVNode("p", { class: "text-lg text-slate-600" }, [
                                  createVNode(unref(ElLink), {
                                    href: "mailto:partners@sarasfinance.com",
                                    type: "info",
                                    class: "text-lg font-medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" partners@sarasfinance.com ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/Contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "contact",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-4bjbD4gZ.mjs.map
