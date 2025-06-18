import { ref, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { Menu } from "@element-plus/icons-vue";
import { _ as _export_sfc } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
const _imports_0 = publicAssetsURL("/LOGO.png");
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const showProducts = ref(false);
    const router = useRouter();
    const drawer = ref(false);
    const gotoApp = () => {
      drawer.value = false;
      (void 0).location.replace("https://app.sarasfinance.com/");
    };
    const navigateAndClose = (path) => {
      router.push(path);
      drawer.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_row = resolveComponent("el-row");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_link = resolveComponent("el-link");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_icon = resolveComponent("el-icon");
      const _component_el_drawer = resolveComponent("el-drawer");
      const _component_el_menu = resolveComponent("el-menu");
      const _component_el_menu_item = resolveComponent("el-menu-item");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed transform w-[100%] from-blue-700 to-blue-400 z-50 shadow-md rounded-2xls border border-gray-200" }, _attrs))} data-v-043395db>`);
      _push(ssrRenderComponent(_component_el_row, { class: "container mx-auto flex items-center justify-between" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, {
              class: "flex",
              span: 4
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_link, {
                    onClick: ($event) => unref(router).push("/"),
                    underline: false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="Saras" style="${ssrRenderStyle({ "height": "40px", "width": "auto" })}" class="p-1" data-v-043395db${_scopeId3}><span class="text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent whitespace-nowrap" data-v-043395db${_scopeId3}>Saras Finance</span>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "Saras",
                            style: { "height": "40px", "width": "auto" },
                            class: "p-1"
                          }),
                          createVNode("span", { class: "text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent whitespace-nowrap" }, "Saras Finance")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_link, {
                      onClick: ($event) => unref(router).push("/"),
                      underline: false
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "Saras",
                          style: { "height": "40px", "width": "auto" },
                          class: "p-1"
                        }),
                        createVNode("span", { class: "text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent whitespace-nowrap" }, "Saras Finance")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="hidden md:flex items-center space-x-3 flex-shrink-0" data-v-043395db${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_dropdown, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    round: "",
                    text: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Products`);
                      } else {
                        return [
                          createTextVNode("Products")
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
                      text: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Products")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              dropdown: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_dropdown_menu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_dropdown_item, {
                          onClick: ($event) => unref(router).push("/compliance-governance")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Compliance, Risk &amp; Governance`);
                            } else {
                              return [
                                createTextVNode("Compliance, Risk & Governance")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_dropdown_item, {
                          onClick: ($event) => unref(router).push("/audit-automation")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Audit Automation`);
                            } else {
                              return [
                                createTextVNode("Audit Automation")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_dropdown_item, {
                          onClick: ($event) => unref(router).push("/knowledge-advisory")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Knowledge &amp; Advisory`);
                            } else {
                              return [
                                createTextVNode("Knowledge & Advisory")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_dropdown_item, {
                          onClick: ($event) => unref(router).push("/litigation-management")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Litigation Management`);
                            } else {
                              return [
                                createTextVNode("Litigation Management")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_dropdown_item, {
                            onClick: ($event) => unref(router).push("/compliance-governance")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Compliance, Risk & Governance")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_el_dropdown_item, {
                            onClick: ($event) => unref(router).push("/audit-automation")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Audit Automation")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_el_dropdown_item, {
                            onClick: ($event) => unref(router).push("/knowledge-advisory")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Knowledge & Advisory")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_el_dropdown_item, {
                            onClick: ($event) => unref(router).push("/litigation-management")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Litigation Management")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_dropdown_menu, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_dropdown_item, {
                          onClick: ($event) => unref(router).push("/compliance-governance")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Compliance, Risk & Governance")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_el_dropdown_item, {
                          onClick: ($event) => unref(router).push("/audit-automation")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Audit Automation")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_el_dropdown_item, {
                          onClick: ($event) => unref(router).push("/knowledge-advisory")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Knowledge & Advisory")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_el_dropdown_item, {
                          onClick: ($event) => unref(router).push("/litigation-management")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Litigation Management")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              onClick: gotoApp,
              type: "success",
              round: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Go to Saras Portal`);
                } else {
                  return [
                    createTextVNode("Go to Saras Portal")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              onClick: ($event) => unref(router).push("/contact"),
              type: "primary",
              round: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Get Started`);
                } else {
                  return [
                    createTextVNode("Get Started")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="md:hidden flex items-center" data-v-043395db${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              onClick: ($event) => drawer.value = true,
              circle: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Menu), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Menu))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(unref(Menu))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_el_col, {
                class: "flex",
                span: 4
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_link, {
                    onClick: ($event) => unref(router).push("/"),
                    underline: false
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "Saras",
                        style: { "height": "40px", "width": "auto" },
                        class: "p-1"
                      }),
                      createVNode("span", { class: "text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent whitespace-nowrap" }, "Saras Finance")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode("div", { class: "hidden md:flex items-center space-x-3 flex-shrink-0" }, [
                createVNode(_component_el_dropdown, null, {
                  default: withCtx(() => [
                    createVNode(_component_el_button, {
                      type: "primary",
                      round: "",
                      text: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Products")
                      ]),
                      _: 1
                    })
                  ]),
                  dropdown: withCtx(() => [
                    createVNode(_component_el_dropdown_menu, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_dropdown_item, {
                          onClick: ($event) => unref(router).push("/compliance-governance")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Compliance, Risk & Governance")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_el_dropdown_item, {
                          onClick: ($event) => unref(router).push("/audit-automation")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Audit Automation")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_el_dropdown_item, {
                          onClick: ($event) => unref(router).push("/knowledge-advisory")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Knowledge & Advisory")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_el_dropdown_item, {
                          onClick: ($event) => unref(router).push("/litigation-management")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Litigation Management")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  onClick: gotoApp,
                  type: "success",
                  round: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("Go to Saras Portal")
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  onClick: ($event) => unref(router).push("/contact"),
                  type: "primary",
                  round: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("Get Started")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode("div", { class: "md:hidden flex items-center" }, [
                createVNode(_component_el_button, {
                  onClick: ($event) => drawer.value = true,
                  circle: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(unref(Menu))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_drawer, {
        modelValue: drawer.value,
        "onUpdate:modelValue": ($event) => drawer.value = $event,
        size: "100%",
        "append-to-body": ""
      }, {
        header: withCtx(({ close, titleId, titleClass }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_link, {
              onClick: ($event) => unref(router).push("/"),
              underline: false
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="Saras" style="${ssrRenderStyle({ "height": "40px", "width": "auto" })}" class="p-1" data-v-043395db${_scopeId2}><span class="text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent whitespace-nowrap" data-v-043395db${_scopeId2}> Saras Finance </span>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "Saras",
                      style: { "height": "40px", "width": "auto" },
                      class: "p-1"
                    }),
                    createVNode("span", { class: "text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent whitespace-nowrap" }, " Saras Finance ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_link, {
                onClick: ($event) => unref(router).push("/"),
                underline: false
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "Saras",
                    style: { "height": "40px", "width": "auto" },
                    class: "p-1"
                  }),
                  createVNode("span", { class: "text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent whitespace-nowrap" }, " Saras Finance ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 flex flex-col h-full" data-v-043395db${_scopeId}>`);
            if (!showProducts.value) {
              _push2(ssrRenderComponent(_component_el_menu, {
                class: "el-menu-vertical-demo flex",
                mode: "vertical",
                router: false,
                "background-color": "transparent",
                "active-text-color": "#409EFF"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_col, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_el_menu_item, {
                            onClick: ($event) => navigateAndClose("/compliance-governance")
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Compliance, Risk &amp; Governance`);
                              } else {
                                return [
                                  createTextVNode("Compliance, Risk & Governance")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_el_menu_item, {
                            onClick: ($event) => navigateAndClose("/audit-automation")
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Audit Automation`);
                              } else {
                                return [
                                  createTextVNode("Audit Automation")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_el_menu_item, {
                            onClick: ($event) => navigateAndClose("/knowledge-advisory")
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Knowledge &amp; Advisory`);
                              } else {
                                return [
                                  createTextVNode("Knowledge & Advisory")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_el_menu_item, {
                            onClick: ($event) => navigateAndClose("/litigation-management")
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Litigation Management`);
                              } else {
                                return [
                                  createTextVNode("Litigation Management")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_el_menu_item, {
                              onClick: ($event) => navigateAndClose("/compliance-governance")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Compliance, Risk & Governance")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_el_menu_item, {
                              onClick: ($event) => navigateAndClose("/audit-automation")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Audit Automation")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_el_menu_item, {
                              onClick: ($event) => navigateAndClose("/knowledge-advisory")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Knowledge & Advisory")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_el_menu_item, {
                              onClick: ($event) => navigateAndClose("/litigation-management")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Litigation Management")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_menu_item, {
                            onClick: ($event) => navigateAndClose("/compliance-governance")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Compliance, Risk & Governance")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_el_menu_item, {
                            onClick: ($event) => navigateAndClose("/audit-automation")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Audit Automation")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_el_menu_item, {
                            onClick: ($event) => navigateAndClose("/knowledge-advisory")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Knowledge & Advisory")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_el_menu_item, {
                            onClick: ($event) => navigateAndClose("/litigation-management")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Litigation Management")
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
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_el_row, { class: "flex mt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "success",
                          onClick: gotoApp,
                          plain: "",
                          text: "",
                          class: "m-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Go to Saras Portal`);
                            } else {
                              return [
                                createTextVNode("Go to Saras Portal")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_button, {
                            type: "success",
                            onClick: gotoApp,
                            plain: "",
                            text: "",
                            class: "m-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Go to Saras Portal")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_col, { span: 24 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "primary",
                          onClick: ($event) => navigateAndClose("/contact"),
                          plain: "",
                          text: "",
                          class: "m-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Get Started`);
                            } else {
                              return [
                                createTextVNode("Get Started")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_button, {
                            type: "primary",
                            onClick: ($event) => navigateAndClose("/contact"),
                            plain: "",
                            text: "",
                            class: "m-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Get Started")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode(_component_el_button, {
                          type: "success",
                          onClick: gotoApp,
                          plain: "",
                          text: "",
                          class: "m-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Go to Saras Portal")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode(_component_el_button, {
                          type: "primary",
                          onClick: ($event) => navigateAndClose("/contact"),
                          plain: "",
                          text: "",
                          class: "m-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Get Started")
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
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 flex flex-col h-full" }, [
                !showProducts.value ? (openBlock(), createBlock(_component_el_menu, {
                  key: 0,
                  class: "el-menu-vertical-demo flex",
                  mode: "vertical",
                  router: false,
                  "background-color": "transparent",
                  "active-text-color": "#409EFF"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_menu_item, {
                          onClick: ($event) => navigateAndClose("/compliance-governance")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Compliance, Risk & Governance")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_el_menu_item, {
                          onClick: ($event) => navigateAndClose("/audit-automation")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Audit Automation")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_el_menu_item, {
                          onClick: ($event) => navigateAndClose("/knowledge-advisory")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Knowledge & Advisory")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_el_menu_item, {
                          onClick: ($event) => navigateAndClose("/litigation-management")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Litigation Management")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_el_row, { class: "flex mt-4" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode(_component_el_button, {
                          type: "success",
                          onClick: gotoApp,
                          plain: "",
                          text: "",
                          class: "m-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Go to Saras Portal")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_col, { span: 24 }, {
                      default: withCtx(() => [
                        createVNode(_component_el_button, {
                          type: "primary",
                          onClick: ($event) => navigateAndClose("/contact"),
                          plain: "",
                          text: "",
                          class: "m-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Get Started")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-043395db"]]);
const _imports_1 = publicAssetsURL("/ccpa.png");
const _imports_2 = publicAssetsURL("/gdpr.png");
const _imports_3 = publicAssetsURL("/soc2.png");
const _imports_4 = publicAssetsURL("/iso-iec.png");
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_link = resolveComponent("el-link");
      const _component_router_link = resolveComponent("router-link");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_tooltip = resolveComponent("el-tooltip");
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "py-16 px-4 bg-gradient-to-br from-blue-10 to-blue-200 relative overflow-hidden" }, _attrs))}><div class="container mx-auto max-w-6xl relative z-10"><div class="grid md:grid-cols-4 gap-10 mb-12 pb-12 border-b border-gray-300"><div class="col-span-1 md:col-span-1 space-y-4">`);
      _push(ssrRenderComponent(_component_el_link, {
        onClick: ($event) => unref(router).push("/"),
        underline: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Saras" style="${ssrRenderStyle({ "height": "40px", "width": "auto" })}" class="p-1"${_scopeId}><span class="text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"${_scopeId}>Saras Finance</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Saras",
                style: { "height": "40px", "width": "auto" },
                class: "p-1"
              }),
              createVNode("span", { class: "text-xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent" }, "Saras Finance")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-gray-500 text-sm"> From automated compliance tracking to litigation support and knowledge management — we bring intelligence to your most complex workflows. </p><p class="text-gray-500 text-sm"> Saras is your unified digital workspace that simplifies the most challenging operations in Legal, Audit, and Finance. </p><p class="text-gray-500 text-sm"> Saras combines deep industry insight with cutting-edge automation. </p><div class="flex space-x-4 pt-2"></div></div><div class="col-span-1 space-y-4"><h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider"></h3></div><div class="col-span-1 space-y-4"><h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider">Product</h3><h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider"></h3><ul class="space-y-3 text-gray-500"><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/litigation-management",
        class: "hover:text-blue-600 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Litigation Management`);
          } else {
            return [
              createTextVNode("Litigation Management")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/compliance-governance",
        class: "hover:text-blue-600 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Compliance, Risk &amp; Governance`);
          } else {
            return [
              createTextVNode("Compliance, Risk & Governance")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/knowledge-advisory",
        class: "hover:text-blue-600 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Knowledge &amp; Advisory`);
          } else {
            return [
              createTextVNode("Knowledge & Advisory")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/audit-automation",
        class: "hover:text-blue-600 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Audit Automation`);
          } else {
            return [
              createTextVNode("Audit Automation")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="col-span-1 space-y-4"><h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider">Company</h3><ul class="space-y-3 text-gray-500"><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/contact",
        class: "hover:text-blue-600 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us`);
          } else {
            return [
              createTextVNode("Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/aboutus",
        class: "hover:text-blue-600 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/privacy",
        class: "hover:text-blue-600 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy`);
          } else {
            return [
              createTextVNode("Privacy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/terms",
        class: "hover:text-blue-600 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms &amp; Conditions`);
          } else {
            return [
              createTextVNode("Terms & Conditions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div>`);
      _push(ssrRenderComponent(_component_el_row, { class: "flex flex-col md:flex-row justify-between items-center border-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-gray-500 text-sm"${_scopeId}> © 2025 The Rita Software Services. All rights reserved. </p>`);
            _push2(ssrRenderComponent(_component_el_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_tooltip, {
                    content: "CCPA Compliant",
                    placement: "top"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_1)} alt="Saras" style="${ssrRenderStyle({ "height": "40px", "width": "auto" })}" class="pe-4"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "Saras",
                            style: { "height": "40px", "width": "auto" },
                            class: "pe-4"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_tooltip, {
                    content: "GDPR Compliant",
                    placement: "top"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_2)} alt="Saras" style="${ssrRenderStyle({ "height": "40px", "width": "auto" })}" class="pe-4"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_2,
                            alt: "Saras",
                            style: { "height": "40px", "width": "auto" },
                            class: "pe-4"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_tooltip, {
                    content: "SOC2 Compliant",
                    placement: "top"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_3)} alt="Saras" style="${ssrRenderStyle({ "height": "40px", "width": "auto" })}" class="pe-4"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_3,
                            alt: "Saras",
                            style: { "height": "40px", "width": "auto" },
                            class: "pe-4"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_tooltip, {
                    content: "ISO / IEC 27001:2022 Certified",
                    placement: "top"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_4)} alt="Saras" style="${ssrRenderStyle({ "height": "40px", "width": "auto" })}" class="pe-4"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_4,
                            alt: "Saras",
                            style: { "height": "40px", "width": "auto" },
                            class: "pe-4"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_tooltip, {
                      content: "CCPA Compliant",
                      placement: "top"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "Saras",
                          style: { "height": "40px", "width": "auto" },
                          class: "pe-4"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_tooltip, {
                      content: "GDPR Compliant",
                      placement: "top"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_2,
                          alt: "Saras",
                          style: { "height": "40px", "width": "auto" },
                          class: "pe-4"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_tooltip, {
                      content: "SOC2 Compliant",
                      placement: "top"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_3,
                          alt: "Saras",
                          style: { "height": "40px", "width": "auto" },
                          class: "pe-4"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_tooltip, {
                      content: "ISO / IEC 27001:2022 Certified",
                      placement: "top"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_4,
                          alt: "Saras",
                          style: { "height": "40px", "width": "auto" },
                          class: "pe-4"
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
              createVNode("p", { class: "text-gray-500 text-sm" }, " © 2025 The Rita Software Services. All rights reserved. "),
              createVNode(_component_el_row, null, {
                default: withCtx(() => [
                  createVNode(_component_el_tooltip, {
                    content: "CCPA Compliant",
                    placement: "top"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "Saras",
                        style: { "height": "40px", "width": "auto" },
                        class: "pe-4"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_tooltip, {
                    content: "GDPR Compliant",
                    placement: "top"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_2,
                        alt: "Saras",
                        style: { "height": "40px", "width": "auto" },
                        class: "pe-4"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_tooltip, {
                    content: "SOC2 Compliant",
                    placement: "top"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_3,
                        alt: "Saras",
                        style: { "height": "40px", "width": "auto" },
                        class: "pe-4"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_tooltip, {
                    content: "ISO / IEC 27001:2022 Certified",
                    placement: "top"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_4,
                        alt: "Saras",
                        style: { "height": "40px", "width": "auto" },
                        class: "pe-4"
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
      _push(`</div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  Header as H,
  _sfc_main as _
};
//# sourceMappingURL=Footer-bpAE6knL.js.map
