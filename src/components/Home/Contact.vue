<template>

  <div class="bg-gradient-to-br from-blue-50 via-white to-blue-50 font-sans pb-40 pt-40">
    <!-- Solutions Header -->
    <section class="relative overflow-hidden">
      <div class="container mx-auto relative z-10">

        <div class="text-center">
          <div class="space-y-10">
            <div>
              <h1 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Get in Touch <span class="block text-blue-600 m-4">with Our Experts</span>
              </h1>
              <p>We’re here to help you scale your business with tailored SaaS solutions.</p>
              <p>We are an email away, Ping Us!</p>
            </div>

            <el-row class="flex-col">
              <el-col class="items-center">
                <p class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  <a href="mailto:sales@sarasfinance.com">sales@sarasfinance.com</a>
                </p>
              </el-col>
            </el-row>

          </div>
        </div>

      </div>

    </section>
  </div>

</template>

<script setup>
// import { reactive, ref } from 'vue'
// import { ElMessage } from 'element-plus'

// const contactFormRef = ref(null)

// const contactForm = reactive({
//   firstName: '',
//   lastName: '',
//   email: '',
//   phone: '',
//   company: '',
//   message: '',
//   agreedToTerms: false
// })

// const formRules = {
//   firstName: [{ required: true, message: 'First name is required', trigger: 'blur' }],
//   lastName: [{ required: true, message: 'Last name is required', trigger: 'blur' }],
//   email: [
//     { required: true, message: 'Email is required', trigger: 'blur' },
//     { type: 'email', message: 'Please enter a valid email', trigger: 'blur' }
//   ],
//   phone: [{ required: true, message: 'Phone number is required', trigger: 'blur' }],
//   message: [{ required: true, message: 'Please include a message', trigger: 'blur' }]
// }

// const submitForm = async () => {
//   if (!contactFormRef.value) return

//   try {
//     await contactFormRef.value.validate()
//     console.log('Form submitted:', contactForm)
//     ElMessage({
//       message: 'Thank you! We’ll get back to you within 24 hours.',
//       type: 'success'
//     })
//     contactFormRef.value.resetFields()
//   } catch (error) {
//     ElMessage({
//       message: 'Please fill out all required fields correctly.',
//       type: 'error'
//     })
//   }
// }

const initiateCall = () => {
  // Placeholder for scheduling logic (e.g., open a modal or redirect to a calendar tool)
  window.location.href = 'tel:+919501289879';
}

const sendEmail = () => {
  // Placeholder for email action (e.g., open mail client)
  window.location.href = 'mailto:sales@sarasfinance.com'
}
</script>
