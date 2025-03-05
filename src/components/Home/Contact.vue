<template>
  <div class="min-h-screen bg-gray-50 flex flex-col my-10">
    <!-- Assuming your header is here and unchanged -->
    <main class="flex-1 flex items-center justify-center px-4 py-16">
      <div class="container mx-auto max-w-6xl">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Left: Contact Info & Engagement -->
          <div class="space-y-10">
            <div class="space-y-4">
              <h1 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Get in Touch
                <span class="block text-blue-600">with Our Experts</span>
              </h1>
              <p class="text-lg text-gray-600 max-w-md">
                We’re here to help you scale your business with tailored SaaS solutions. Reach out today!
              </p>
            </div>

            <!-- Contact Methods -->
            <div class="space-y-6">
              <!-- Phone Contact -->
              <div class="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div class="p-2 bg-blue-50 rounded-full">
                  <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Call Us</p>
                  <p class="text-gray-600">+1 (888) 555-0123</p>
                  <button @click="initiateCall" class="mt-2 text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Schedule a Call Now
                  </button>
                </div>
              </div>

              <!-- Email Contact -->
              <div class="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div class="p-2 bg-green-50 rounded-full">
                  <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Email Us</p>
                  <p class="text-gray-600">support@your-saas.com</p>
                  <button @click="sendEmail" class="mt-2 text-green-600 hover:text-green-800 font-medium text-sm">
                    Send a Message
                  </button>
                </div>
              </div>

              <!-- Mailing Address -->
              <div class="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div class="p-2 bg-blue-50 rounded-full">
                  <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800">Mail Us</p>
                  <p class="text-gray-600">123 SaaS Lane, Suite 100<br>Tech City, CA 94000</p>
                </div>
              </div>
            </div>

            <p class="text-sm text-gray-500">Available: Mon-Fri, 9 AM - 5 PM PST</p>
          </div>

          <!-- Right: Contact Form -->
          <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Send Us a Message
            </h2>
            <el-form
              ref="contactFormRef"
              :model="contactForm"
              :rules="formRules"
              @submit.prevent="submitForm"
              label-position="top"
            >
              <div class="grid md:grid-cols-2 gap-4">
                <el-form-item prop="firstName">
                  <el-input v-model="contactForm.firstName" placeholder="First Name" clearable />
                </el-form-item>
                <el-form-item prop="lastName">
                  <el-input v-model="contactForm.lastName" placeholder="Last Name" clearable />
                </el-form-item>
              </div>

              <el-form-item prop="email">
                <el-input v-model="contactForm.email" placeholder="Business Email" type="email" clearable />
              </el-form-item>

              <el-form-item prop="phone">
                <el-input v-model="contactForm.phone" placeholder="Phone Number" clearable />
              </el-form-item>

              <el-form-item prop="company">
                <el-input v-model="contactForm.company" placeholder="Company Name" clearable />
              </el-form-item>

              <el-form-item prop="message">
                <el-input
                  v-model="contactForm.message"
                  type="textarea"
                  :rows="4"
                  placeholder="How can we assist you today?"
                />
              </el-form-item>

              <el-form-item>
                <el-checkbox v-model="contactForm.agreedToTerms">
                  I agree to the <a href="#" class="text-blue-600 hover:underline">Terms & Privacy</a>
                </el-checkbox>
              </el-form-item>

              <el-button
                type="primary"
                native-type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg"
                :disabled="!contactForm.agreedToTerms"
              >
                Submit Inquiry
              </el-button>
            </el-form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const contactFormRef = ref(null)

const contactForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  agreedToTerms: false
})

const formRules = {
  firstName: [{ required: true, message: 'First name is required', trigger: 'blur' }],
  lastName: [{ required: true, message: 'Last name is required', trigger: 'blur' }],
  email: [
    { required: true, message: 'Email is required', trigger: 'blur' },
    { type: 'email', message: 'Please enter a valid email', trigger: 'blur' }
  ],
  phone: [{ required: true, message: 'Phone number is required', trigger: 'blur' }],
  message: [{ required: true, message: 'Please include a message', trigger: 'blur' }]
}

const submitForm = async () => {
  if (!contactFormRef.value) return

  try {
    await contactFormRef.value.validate()
    console.log('Form submitted:', contactForm)
    ElMessage({
      message: 'Thank you! We’ll get back to you within 24 hours.',
      type: 'success'
    })
    contactFormRef.value.resetFields()
  } catch (error) {
    ElMessage({
      message: 'Please fill out all required fields correctly.',
      type: 'error'
    })
  }
}

const initiateCall = () => {
  // Placeholder for scheduling logic (e.g., open a modal or redirect to a calendar tool)
  ElMessage({
    message: 'Redirecting to schedule a call...',
    type: 'info'
  })
}

const sendEmail = () => {
  // Placeholder for email action (e.g., open mail client)
  window.location.href = 'mailto:support@your-saas.com'
}
</script>

<style scoped>
/* Add any custom Tailwind overrides here if needed */
</style>