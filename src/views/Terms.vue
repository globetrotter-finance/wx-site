<template>
  <div>
    <Header />

    <div class="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 px-4">
      <el-container class="mx-auto max-w-6xl">
        <el-main>
          <el-card shadow="always" class="rounded-2xl p-6">
            <div class="text-center mb-10">
              <h1 class="text-4xl font-extrabold text-gray-900">Terms and Conditions</h1>
              <p class="text-lg text-gray-500 mt-2">Last Updated: June 15, 2025</p>
            </div>

            <el-timeline class="mb-12">

              <el-timeline-item>
                <el-card shadow="never" class="rounded-xl bg-white p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">User Responsibilities</h2>
                  <p class="text-gray-700 text-base leading-relaxed">
                    Welcome to globetrotter.finance, a service provided by The Rita Software Services. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
                  </p>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card shadow="never" class="rounded-xl bg-white p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">Service Details</h2>
                  <el-collapse accordion>
                    <el-collapse-item title="Services" name="1">
                      <p class="text-gray-700 text-base leading-relaxed">
                        Globetrotter Finance offers a range of services as listed in the main home page. The scope of services may be updated from time to time.
                      </p>
                    </el-collapse-item>

                    <el-collapse-item title="Lawful Use" name="2">
                      <el-descriptions direction="vertical" :column="1" border class="bg-gray-50 rounded-lg">
                        <el-descriptions-item label="Compliance with Laws">
                          Users must comply with all applicable local, state, national, and international laws and regulations while using our services.
                        </el-descriptions-item>
                        <el-descriptions-item label="Prohibited Activities">
                          Users must not participate in any unlawful activities, including but not limited to fraud, money laundering, identity theft, tax evasion, or any other illegal actions using our services.
                        </el-descriptions-item>
                      </el-descriptions>
                    </el-collapse-item>

                    <el-collapse-item title="Account Security" name="3">
                      <el-descriptions direction="vertical" :column="1" border class="bg-gray-50 rounded-lg">
                        <el-descriptions-item label="Confidentiality">
                          Users are responsible for maintaining the confidentiality of their account credentials, including username and password.
                        </el-descriptions-item>
                        <el-descriptions-item label="Unauthorized Access">
                          Users must immediately notify Globetrotter Finance of any unauthorized use of their account or any other breach of security.
                        </el-descriptions-item>
                      </el-descriptions>
                    </el-collapse-item>

                    <el-collapse-item title="Refund Policy" name="4">
                      <el-descriptions direction="vertical" :column="1" border class="bg-gray-50 rounded-lg">
                        <el-descriptions-item label="Eligibility">
                          Refunds are available if the service was not delivered within the promised timeframe or if there are errors attributable to Globetrotter Finance that were not rectified.
                        </el-descriptions-item>
                        <el-descriptions-item label="Process">
                          To initiate a refund request, contact our customer service team at <span class="font-semibold text-blue-600">support@globetrotter.finance</span> within 15 days of service delivery.
                        </el-descriptions-item>
                      </el-descriptions>
                    </el-collapse-item>
                  </el-collapse>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card shadow="never" class="rounded-xl bg-white p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">Intellectual Property</h2>
                  <p class="text-gray-700 text-base leading-relaxed">
                    All content, materials, and services provided on or through the Globetrotter Finance platform are the exclusive property of The Rita Software Services or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </p>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card shadow="never" class="rounded-xl bg-white p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">Changes to Terms</h2>
                  <p class="text-gray-700 text-base leading-relaxed">
                    We may update these terms and conditions from time to time. Any changes will be posted on this page, and your continued use of our services constitutes acceptance of the new terms.
                  </p>
                </el-card>
              </el-timeline-item>

            </el-timeline>
          </el-card>
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
