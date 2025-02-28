<template>
  <section class="py-24 px-4 bg-white">
    <div class="container mx-auto">
      <div class="text-center mb-16" ref="testimonialHeading">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Join thousands of satisfied customers using our platform
        </p>
      </div>
      
      <div class="relative" ref="testimonialContainer">
        <!-- Custom testimonial carousel -->
        <div class="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="snap-center w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 testimonial-card"
          >
            <div class="bg-white rounded-xl shadow-lg p-8 h-full border border-gray-100">
              <div class="text-blue-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  <circle cx="9" cy="10" r="1"></circle>
                  <circle cx="15" cy="10" r="1"></circle>
                </svg>
              </div>
              <p class="text-gray-700 text-lg leading-relaxed mb-8">{{ testimonial.text }}</p>
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
                  <p class="text-gray-600">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation dots -->
        <div class="flex justify-center mt-8 space-x-2">
          <button 
            v-for="(_, index) in testimonials" 
            :key="index"
            @click="scrollToTestimonial(index)"
            class="w-3 h-3 rounded-full transition-colors duration-300"
            :class="activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'"
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
    text: "This platform has completely transformed our workflow. The intuitive interface and powerful features have helped us increase productivity by 35%.",
    name: "Sarah Johnson",
    role: "CEO at TechCorp"
  },
  {
    text: "I've tried many similar solutions, but nothing compares to this. The customer support is outstanding, and the platform keeps getting better.",
    name: "Alex Martinez",
    role: "Marketing Director"
  },
  {
    text: "The integration capabilities are amazing. We were able to connect all our existing tools, saving us countless hours and resources.",
    name: "Emily Chen",
    role: "Product Manager"
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
  }
};

const setupAutoScroll = () => {
  // Clear any existing interval
  if (intervalId) clearInterval(intervalId);
  
  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % testimonials.length;
    scrollToTestimonial(activeIndex.value);
  }, 5000);
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
  }
};

onMounted(() => {
  // Ensure GSAP is properly loaded
  if (typeof gsap !== 'undefined' && ScrollTrigger) {
    // Animate the testimonial heading
    gsap.from(testimonialHeading.value, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: testimonialHeading.value,
        start: 'top 80%',
      }
    });
    
    // Animate testimonial cards
    const testimonialCards = testimonialContainer.value.querySelectorAll('.testimonial-card');
    gsap.from(testimonialCards, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: testimonialContainer.value,
        start: 'top 75%',
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
</style>