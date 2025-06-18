import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/server-renderer/index.mjs';
import { H as Header, _ as _sfc_main$3 } from './Footer-B93YZ10M.mjs';
import { ref, computed, resolveComponent, mergeProps, withCtx, createTextVNode, createBlock, openBlock, createVNode, unref, toDisplayString, useSSRContext } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/vue/index.mjs';
import { ElMessage } from 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/element-plus/es/index.mjs';
import { d as data } from './blog-data-BEQLt-3R.mjs';
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
import 'file:///home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/@element-plus/icons-vue/dist/index.js';

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
const Solution = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-86bc5972"]]);
const _sfc_main$1 = {
  __name: "Solution",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Solution, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
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
//# sourceMappingURL=solutions-CpnNEt2u.mjs.map
