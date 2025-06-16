<template>
  <div>
    <Header />

    <div class="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 px-4">
      <el-container class="mx-auto max-w-6xl">
        <el-main>
          <div shadow="always" class="rounded-2xl p-6">
            <div class="text-center mb-10 mt-25">
              <h1 class="text-5xl font-extrabold text-gray-900">Terms and Conditions</h1>
              <p class="text-lg text-gray-500 mt-2">Last Updated: June 15, 2025</p>
            </div>


                <div shadow="never" class="rounded-xl mb-5 p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">User Responsibilities</h2>
                  <p class="text-gray-700 text-base leading-relaxed">
                    Welcome to Saras Finance, a service provided by The Rita Software Services. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
                  </p>
                </div>

                <div shadow="never" class="rounded-xl mb-5 p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">Service Details</h2>
                  <el-row class="mb-5">
                    <h2>

                    <h2 class = "text-xl font-bold">Services</h2>
                    <p class="text-gray-700 text-base leading-relaxed">
                      Saras Finance offers a range of services as listed in the main home page. The scope of services may be updated from time to time.
                    </p>

                    </h2>
                  </el-row>

                    <el-row class="mb-5">
                      <h2>

                      <h2 class = "text-xl font-bold">Lawful Use</h2>
                       <h2 class=" font-semibold">
Compliance with Laws
                       </h2>
                          Users must comply with all applicable local, state, national, and international laws and regulations while using our services.
                      <h2 class=" font-semibold">Prohibited Activities</h2>
                          Users must not participate in any unlawful activities, including but not limited to fraud, money laundering, identity theft, tax evasion, or any other illegal actions using our services.
                        

                          </h2>
                    </el-row>
                    <el-row class="mb-5">
                      <h2>


                      <h2 class = "text-xl font-bold">Account Security</h2>
                          <h2 class="font-semibold"> Confidentiality</h2>
                          Users are responsible for maintaining the confidentiality of their account credentials, including username and password.
                          <h2 class="font-semibold">Unauthorized access</h2>
                          Users must immediately notify Saras Finance of any unauthorized use of their account or any other breach of security.
                          </h2>
                    </el-row>

                      <!-- <el-collapse-item title="Account Security" name="3"> -->
                        <el-row class="mb-5">
                          <h2>


                          <h2 class = "text-xl font-bold">Refund Policy</h2>
                              <h2 class=" font-semibold">Eligiblity</h2>
                              Refunds are available if the service was not delivered within the promised timeframe or if there are errors attributable to Saras Finance that were not rectified.
                              <h2 class=" font-semibold">Process</h2>
                              To initiate a refund request, contact our customer service team at <el-link href="mailto:" class="font-semibold text-blue-600">support@sarasfinance.com</el-link> within 15 days of service delivery.
                              </h2>
                            </el-row>
                            
                          </div>

                <div shadow="never" class="rounded-xl mb-5 p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">Intellectual Property</h2>
                  <p class="text-gray-700 text-base leading-relaxed">
                    All content, materials, and services provided on or through the Saras Finance platform are the exclusive property of The Rita Software Services or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </p>
                </div>

                <div shadow="never" class="rounded-xl mb-5 p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">Changes to Terms</h2>
                  <p class="text-gray-700 text-base leading-relaxed">
                    We may update these terms and conditions from time to time. Any changes will be posted on this page, and your continued use of our services constitutes acceptance of the new terms.
                  </p>
                </div>

          </div>
        </el-main>
      </el-container>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';

export default {
  name: 'Terms',
  components: {
    Header,
    Footer
  }
}
</script>
