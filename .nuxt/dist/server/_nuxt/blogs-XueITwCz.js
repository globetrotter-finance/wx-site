import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { H as Header, _ as _sfc_main$3 } from "./Footer-B93YZ10M.js";
import { d as data } from "./blog-data-BEQLt-3R.js";
import { mergeProps, useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "vue-router";
import "@element-plus/icons-vue";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/hookable/dist/index.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/unctx/dist/index.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/h3/dist/index.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/radix3/dist/index.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/defu/dist/defu.mjs";
import "/home/devanshkhandelwal/iwx/wx-site2/wx-site/node_modules/ufo/dist/index.mjs";
const _sfc_main$2 = {
  data() {
    return {
      blogData: data,
      activeCategory: "all"
    };
  },
  computed: {
    filteredArticles() {
      if (this.activeCategory === "all") {
        return this.blogData.articles;
      }
      return this.blogData.articles.filter((article) => article.category === this.activeCategory);
    }
  },
  methods: {
    setActiveCategory(categoryId) {
      this.activeCategory = categoryId;
    },
    getCategoryName(categoryId) {
      const category = this.blogData.categories.find((c) => c.id === categoryId);
      return category ? category.name : "";
    },
    scrollToContent() {
      const element = (void 0).getElementById("blog-content");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-page" }, _attrs))} data-v-e5de0954><section class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center relative overflow-hidden" data-v-e5de0954><div class="absolute inset-0 overflow-hidden pointer-events-none" data-v-e5de0954><div class="absolute top-20 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl" data-v-e5de0954></div><div class="absolute bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl" data-v-e5de0954></div><div class="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-50 rounded-full opacity-30 blur-3xl" data-v-e5de0954></div></div><div class="container mx-auto px-6 pt-32 pb-20 relative z-10" data-v-e5de0954><div class="max-w-3xl mx-auto text-center mb-10" data-v-e5de0954><h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight" data-v-e5de0954><span class="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent" data-v-e5de0954>Insights</span> &amp; <span class="relative inline-block" data-v-e5de0954> Resources <span class="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-blue-500 opacity-30 rounded-full" data-v-e5de0954></span></span></h1><p class="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto mb-10" data-v-e5de0954> Discover the latest trends, strategies, and success stories in workflow automation and AI-powered business transformation. </p><div class="max-w-xl mx-auto mb-6" data-v-e5de0954><div class="relative" data-v-e5de0954><input type="text" placeholder="Search articles..." class="w-full px-5 py-4 bg-white rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all" data-v-e5de0954><button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors" data-v-e5de0954><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-e5de0954><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-e5de0954></path></svg></button></div></div><div class="hidden md:flex justify-center mt-20 animate-bounce" data-v-e5de0954><button class="text-gray-400 hover:text-blue-600 transition-colors" data-v-e5de0954><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-e5de0954><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-v-e5de0954></path></svg></button></div></div></div></section><section id="blog-content" class="py-20 px-4 bg-white relative" data-v-e5de0954><div class="container mx-auto max-w-6xl" data-v-e5de0954><div class="flex flex-wrap justify-center gap-4 mb-16" data-v-e5de0954><!--[-->`);
  ssrRenderList($data.blogData.categories, (category) => {
    _push(`<button class="${ssrRenderClass([
      "px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 transform",
      $data.activeCategory === category.id ? "bg-blue-600 text-white shadow-md scale-105" : "bg-white border border-gray-200 text-gray-700 hover:border-blue-200 hover:text-blue-600 hover:scale-105"
    ])}" data-v-e5de0954>${ssrInterpolate(category.name)}</button>`);
  });
  _push(`<!--]--></div>`);
  if ($data.blogData.featuredArticle) {
    _push(`<div class="mb-24 transform transition-all duration-500 hover:scale-[1.01]" data-v-e5de0954><div class="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all" data-v-e5de0954><div class="grid grid-cols-1 lg:grid-cols-5 gap-0" data-v-e5de0954><div class="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-between" data-v-e5de0954><div data-v-e5de0954><div class="mb-5 flex items-center" data-v-e5de0954><span class="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full" data-v-e5de0954>${ssrInterpolate($options.getCategoryName($data.blogData.featuredArticle.category))}</span><span class="mx-2 text-gray-300" data-v-e5de0954>•</span><span class="text-gray-500 text-sm" data-v-e5de0954>${ssrInterpolate($data.blogData.featuredArticle.date)}</span></div><h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight" data-v-e5de0954>${ssrInterpolate($data.blogData.featuredArticle.title)}</h2><p class="text-gray-600 text-lg mb-8 line-clamp-3 leading-relaxed" data-v-e5de0954>${ssrInterpolate($data.blogData.featuredArticle.excerpt)}</p></div><div class="flex items-center" data-v-e5de0954><img${ssrRenderAttr("src", $data.blogData.featuredArticle.author.avatar)} class="w-12 h-12 rounded-full mr-4"${ssrRenderAttr("alt", $data.blogData.featuredArticle.author.name)} data-v-e5de0954><div data-v-e5de0954><p class="text-sm font-medium text-gray-900" data-v-e5de0954>${ssrInterpolate($data.blogData.featuredArticle.author.name)}</p><p class="text-sm text-gray-500" data-v-e5de0954>${ssrInterpolate($data.blogData.featuredArticle.author.title)}</p></div><button class="ml-auto text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 transition-colors text-lg group" data-v-e5de0954> Read Article <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor" data-v-e5de0954><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-v-e5de0954></path></svg></button></div></div><div class="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full" data-v-e5de0954><img${ssrRenderAttr("src", $data.blogData.featuredArticle.image)}${ssrRenderAttr("alt", $data.blogData.featuredArticle.title)} class="h-full w-full object-cover transition-transform duration-700 hover:scale-105" data-v-e5de0954></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-v-e5de0954><!--[-->`);
  ssrRenderList($options.filteredArticles, (article) => {
    _push(`<article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-2 flex flex-col h-full" data-v-e5de0954><div class="relative h-56 overflow-hidden" data-v-e5de0954><img${ssrRenderAttr("src", article.image)}${ssrRenderAttr("alt", article.title)} class="w-full h-full object-cover transition-transform duration-700 hover:scale-110" data-v-e5de0954><div class="absolute top-4 left-4" data-v-e5de0954><span class="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full" data-v-e5de0954>${ssrInterpolate($options.getCategoryName(article.category))}</span></div></div><div class="p-7 flex flex-col flex-grow" data-v-e5de0954><div class="flex items-center mb-3" data-v-e5de0954><span class="text-gray-500 text-sm" data-v-e5de0954>${ssrInterpolate(article.date)}</span><span class="mx-2 text-gray-300" data-v-e5de0954>•</span><span class="text-gray-500 text-sm" data-v-e5de0954>${ssrInterpolate(article.readTime)} min read</span></div><h3 class="text-xl font-bold mb-4 text-gray-900 line-clamp-2 leading-tight" data-v-e5de0954>${ssrInterpolate(article.title)}</h3><p class="text-gray-600 mb-6 line-clamp-3 flex-grow" data-v-e5de0954>${ssrInterpolate(article.excerpt)}</p><div class="flex items-center mt-auto pt-4 border-t border-gray-100" data-v-e5de0954><img${ssrRenderAttr("src", article.author.avatar)} class="w-10 h-10 rounded-full mr-3"${ssrRenderAttr("alt", article.author.name)} data-v-e5de0954><p class="text-sm font-medium text-gray-900" data-v-e5de0954>${ssrInterpolate(article.author.name)}</p><button class="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 transition-colors group" data-v-e5de0954> Read <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor" data-v-e5de0954><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-v-e5de0954></path></svg></button></div></div></article>`);
  });
  _push(`<!--]--></div><div class="mt-24 bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden transform transition-all duration-500 hover:shadow-2xl" data-v-e5de0954><div class="absolute right-0 bottom-0 opacity-10" data-v-e5de0954><svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e5de0954><path d="M173.913 0H26.087C11.6807 0 0 11.6807 0 26.087V173.913C0 188.319 11.6807 200 26.087 200H173.913C188.319 200 200 188.319 200 173.913V26.087C200 11.6807 188.319 0 173.913 0Z" fill="white" data-v-e5de0954></path><path d="M65.2174 86.9565H134.783M65.2174 113.043H134.783M65.2174 139.13H108.696M65.2174 60.8696H134.783" stroke="white" stroke-width="8.7" stroke-linecap="round" stroke-linejoin="round" data-v-e5de0954></path></svg></div><div class="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between gap-10" data-v-e5de0954><div class="mb-8 md:mb-0 max-w-lg" data-v-e5de0954><h3 class="text-2xl md:text-3xl font-bold text-white mb-4" data-v-e5de0954>Stay Ahead of the Curve</h3><p class="text-blue-100 text-lg" data-v-e5de0954>Get the latest insights on workflow automation and AI solutions delivered straight to your inbox. No spam, just valuable content.</p></div><div class="flex-shrink-0 w-full md:w-auto" data-v-e5de0954><div class="flex flex-col sm:flex-row gap-3" data-v-e5de0954><input type="email" placeholder="Enter your email" class="px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 w-full min-w-[250px]" data-v-e5de0954><button class="bg-white text-blue-600 font-medium px-6 py-4 rounded-lg shadow hover:bg-blue-50 transition-all duration-300 whitespace-nowrap" data-v-e5de0954> Subscribe Now </button></div><p class="text-blue-100 text-xs mt-3 text-center sm:text-left" data-v-e5de0954>We respect your privacy. Unsubscribe at any time.</p></div></div></div><div class="mt-16 flex justify-center" data-v-e5de0954><div class="flex items-center gap-2" data-v-e5de0954><button class="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-all" data-v-e5de0954><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-e5de0954><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" data-v-e5de0954></path></svg></button><button class="w-12 h-12 rounded-lg flex items-center justify-center border border-blue-600 bg-blue-600 text-white font-medium" data-v-e5de0954>1</button><button class="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all" data-v-e5de0954>2</button><button class="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all" data-v-e5de0954>3</button><span class="mx-1 text-gray-400" data-v-e5de0954>...</span><button class="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all" data-v-e5de0954>8</button><button class="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-all" data-v-e5de0954><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-e5de0954><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-v-e5de0954></path></svg></button></div></div></div></section></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Home/BlogSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BlogSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e5de0954"]]);
const _sfc_main$1 = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(BlogSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "blogs",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=blogs-XueITwCz.js.map
