import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { H as Header, _ as _sfc_main$3 } from "./Footer-B93YZ10M.js";
import { unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ElContainer, ElMain, ElRow, ElCol, ElDivider, ElCard, ElIcon, ElLink } from "element-plus";
import { Briefcase, Help, Iphone } from "@element-plus/icons-vue";
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
                              _push5(`<h1 class="text-5xl font-extrabold text-slate-900 mb-4"${_scopeId4}> Get in Touch </h1><h2 class="text-2xl font-semibold mb-10"${_scopeId4}> with the <span class="text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"${_scopeId4}>Saras Finance</span> Team </h2><p class="text-lg text-slate-600 mb-16 max-w-3xl mx-auto"${_scopeId4}> Whether you’re exploring automation for legal operations, planning a compliance overhaul, or want to see <span class="text-blue-600 fw-bold"${_scopeId4}>Saras</span> in action — we’re ready to help. </p>`);
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
                                  createTextVNode(" Whether you’re exploring automation for legal operations, planning a compliance overhaul, or want to see "),
                                  createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                                  createTextVNode(" in action — we’re ready to help. ")
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
                                createTextVNode(" Whether you’re exploring automation for legal operations, planning a compliance overhaul, or want to see "),
                                createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                                createTextVNode(" in action — we’re ready to help. ")
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
                              createTextVNode(" Whether you’re exploring automation for legal operations, planning a compliance overhaul, or want to see "),
                              createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                              createTextVNode(" in action — we’re ready to help. ")
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
                            createTextVNode(" Whether you’re exploring automation for legal operations, planning a compliance overhaul, or want to see "),
                            createVNode("span", { class: "text-blue-600 fw-bold" }, "Saras"),
                            createTextVNode(" in action — we’re ready to help. ")
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
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
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
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-DR6cGPLj.js.map
