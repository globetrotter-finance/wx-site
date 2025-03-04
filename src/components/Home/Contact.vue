<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
        <div class="absolute bottom-20 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
      </div>
  
      <div class="container mx-auto max-w-7xl relative z-10">
        <!-- Page Header with Engaging Intro -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Let's Connect
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Reach Out to Our Expert Team
          </h1>
          <p class="text-gray-600 max-w-3xl mx-auto text-lg">
            Whether you're exploring workflow automation, need technical support, or want to discuss custom solutions, our team is ready to help you transform your business processes.
          </p>
        </div>
  
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Support Channels -->
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6">
            <div class="text-center">
              <div class="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-gray-900">24/7 Support Channels</h3>
              <p class="text-gray-600 mt-2">Multiple ways to get immediate assistance</p>
            </div>
            <div class="space-y-4">
              <div class="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                <div class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-8.284 0-15-6.716-15-15V5z" />
                  </svg>
                  <span>Live Phone Support</span>
                </div>
                <span class="text-blue-600 font-medium">+1 (888) 123-4567</span>
              </div>
              <div class="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                <div class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email Support</span>
                </div>
                <span class="text-blue-600 font-medium">support@wxautomation.com</span>
              </div>
              <div class="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                <div class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Live Chat</span>
                </div>
                <span class="text-blue-600 font-medium">Chat Now</span>
              </div>
            </div>
          </div>
  
          <!-- Contact Form -->
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:col-span-2">
            <h3 class="text-3xl font-semibold text-gray-900 mb-6">Request Custom Solution</h3>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    v-model="fullName" 
                    type="text" 
                    required 
                    placeholder="Enter your full name"
                    class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label class="block text-gray-700 mb-2">Company</label>
                  <input 
                    v-model="company" 
                    type="text" 
                    placeholder="Your company name"
                    class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    v-model="email" 
                    type="email" 
                    required 
                    placeholder="you@company.com"
                    class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label class="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    v-model="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567"
                    class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label class="block text-gray-700 mb-2">How can we help you?</label>
                <select 
                  v-model="inquiryType"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="sales">Sales Consultation</option>
                  <option value="support">Technical Support</option>
                  <option value="demo">Request Product Demo</option>
                  <option value="integration">Integration Assistance</option>
                  <option value="custom">Custom Solution Inquiry</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  v-model="message" 
                  required 
                  rows="5" 
                  placeholder="Describe your workflow challenges or automation needs..."
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <div>
                <div class="flex items-center mb-4">
                  <input 
                    type="checkbox" 
                    v-model="agreedToTerms"
                    class="mr-2 text-blue-600 focus:ring-blue-500 h-4 w-4 border-gray-300 rounded"
                  />
                  <label class="text-gray-700">I agree to the privacy policy and terms of service</label>
                </div>
                <button 
                  type="submit" 
                  :disabled="!agreedToTerms"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
  
        <!-- Additional Contact Information -->
        <div class="mt-16 grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
            <div class="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 class="text-2xl font-semibold text-gray-900 mb-2">Our Headquarters</h4>
            <p class="text-gray-600">123 Innovation Way, Tech City, ST 54321</p>
          </div>
    <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
      <div class="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      <h4 class="text-2xl font-semibold text-gray-900 mb-2">Quick Support</h4>
      <p class="text-gray-600 mb-4">Need instant help? Check our comprehensive knowledge base.</p>
      <a href="#" class="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition">
        Access Help Center
      </a>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
      agreedToTerms: false
    }
  },
  methods: {
    submitForm() {
      // Comprehensive form validation
      if (!this.fullName || !this.email || !this.inquiryType || !this.message) {
        alert('Please fill in all required fields');
        return;
      }

      if (!this.agreedToTerms) {
        alert('Please agree to the privacy policy and terms of service');
        return;
      }

      // Here you would typically send the form data to a backend service
      console.log('Form submitted', {
        fullName: this.fullName,
        company: this.company,
        email: this.email,
        phone: this.phone,
        inquiryType: this.inquiryType,
        message: this.message
      });

      // Reset form after submission
      this.fullName = '';
      this.company = '';
      this.email = '';
      this.phone = '';
      this.inquiryType = '';
      this.message = '';
      this.agreedToTerms = false;

      alert('Thank you for your message. We will get back to you soon!');
    }
  }
}
</script>