<template>
  <section class="py-20 px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-20" ref="testimonialHeading">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 text-gray-800">What Our Customers Say</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Join thousands of satisfied customers using our platform to transform their business
        </p>
      </div>
      
      <div class="relative" ref="testimonialContainer">
        <!-- Custom testimonial carousel with improved spacing and design -->
        <div class="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar -mx-4">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="snap-center w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-6 testimonial-card"
          >
            <div class="bg-white rounded-2xl shadow-md p-10 h-full border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex justify-between items-start mb-8">
                <div class="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div class="flex">
                  <svg v-for="star in 5" :key="star" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-amber-400 mx-0.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              
              <p class="text-gray-700 text-lg leading-relaxed mb-10">{{ testimonial.text }}</p>
              
              <div class="flex items-center">
                <div class="w-14 h-14 rounded-full overflow-hidden mr-5 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-sm">
                  <span class="text-xl font-semibold text-blue-700">{{ testimonial.name.charAt(0) }}</span>
                </div>
                <div>
                  <h4 class="font-semibold text-lg text-gray-900">{{ testimonial.name }}</h4>
                  <p class="text-gray-500">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Improved navigation with larger dots and more visual feedback -->
        <div class="flex justify-center mt-12 space-x-3">
          <button 
            v-for="(_, index) in testimonials" 
            :key="index"
            @click="scrollToTestimonial(index)"
            class="w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            :class="activeIndex === index ? 'bg-blue-500 shadow-md' : 'bg-gray-300 hover:bg-gray-400'"
            :aria-label="`View testimonial ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const testimonialHeading = ref(null);
const testimonialContainer = ref(null);
const activeIndex = ref(0);
let intervalId = null;

const testimonials = [
  {
    text: "This platform has completely transformed our workflow. The intuitive interface and powerful features have helped us increase productivity by 35%. The support team has been exceptional throughout our journey.",
    name: "Sarah Johnson",
    role: "CEO at TechCorp"
  },
  {
    text: "I've tried many similar solutions, but nothing compares to this. The customer support is outstanding, and the platform keeps getting better with each update. It's been a game-changer for our team.",
    name: "Alex Martinez",
    role: "Marketing Director"
  },
  {
    text: "The integration capabilities are amazing. We were able to connect all our existing tools, saving us countless hours and resources. The interface is so intuitive that our entire team was up and running in days.",
    name: "Emily Chen",
    role: "Product Manager"
  },
  {
    text: "The analytical capabilities have given us insights we never had before. Our decision-making process has improved dramatically, and we're seeing real results in our bottom line.",
    name: "Michael Tran",
    role: "Operations Manager"
  }
];

const scrollToTestimonial = (index) => {
  if (!testimonialContainer.value) return;
  
  const scrollContainer = testimonialContainer.value.querySelector('.flex.overflow-x-auto');
  const testimonialItems = scrollContainer.querySelectorAll('.snap-center');
  
  if (testimonialItems[index]) {
    scrollContainer.scrollTo({
      left: testimonialItems[index].offsetLeft - testimonialItems[0].offsetLeft,
      behavior: 'smooth'
    });
    activeIndex.value = index;
    
    // Reset the auto-scroll timer when manually navigating
    setupAutoScroll();
  }
};

const setupAutoScroll = () => {
  // Clear any existing interval
  if (intervalId) clearInterval(intervalId);
  
  // Set a longer interval for better readability
  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % testimonials.length;
    scrollToTestimonial(activeIndex.value);
  }, 8000); // 8 seconds per testimonial
};

const handleScroll = () => {
  if (!testimonialContainer.value) return;
  
  const scrollContainer = testimonialContainer.value.querySelector('.flex.overflow-x-auto');
  const scrollLeft = scrollContainer.scrollLeft;
  const itemWidth = scrollContainer.querySelector('.snap-center').offsetWidth;
  
  // Calculate which item is most visible
  const index = Math.round(scrollLeft / itemWidth);
  if (index !== activeIndex.value && index < testimonials.length) {
    activeIndex.value = index;
    
    // Reset auto-scroll when manually scrolling
    setupAutoScroll();
  }
};

onMounted(() => {
  // Enhanced animations
  if (typeof gsap !== 'undefined' && ScrollTrigger) {
    // Animate the testimonial heading with a subtle fade up
    gsap.from(testimonialHeading.value, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: testimonialHeading.value,
        start: 'top 85%',
      }
    });
    
    // Animate testimonial cards with staggered entrance
    const testimonialCards = testimonialContainer.value.querySelectorAll('.testimonial-card');
    gsap.from(testimonialCards, {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: testimonialContainer.value,
        start: 'top 80%',
      }
    });
  }
  
  if (testimonialContainer.value) {
    const scrollContainer = testimonialContainer.value.querySelector('.flex.overflow-x-auto');
    scrollContainer.addEventListener('scroll', handleScroll);
  }
  
  setupAutoScroll();
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  
  if (testimonialContainer.value) {
    const scrollContainer = testimonialContainer.value.querySelector('.flex.overflow-x-auto');
    scrollContainer.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Add subtle animations to card hover */
.testimonial-card > div {
  backface-visibility: hidden;
}
</style>