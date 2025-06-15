<template>
  <div>
    <Header />

    <div class="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 px-4">
      <el-container class="mx-auto max-w-6xl">
        <el-main>
          <el-card shadow="always" class="rounded-2xl p-6">
            <div class="text-center mb-10">
              <h1 class="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
              <p class="text-lg text-gray-500 mt-2">Last Updated: June 15, 2025</p>
            </div>

            <el-timeline class="mb-12">
              <el-timeline-item>
                <el-card shadow="never" class="rounded-xl bg-white p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">Our Commitment</h2>
                  <p class="text-gray-700 text-base leading-relaxed">
                    globetrotter.finance, provided by The Rita Software Services, is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
                  </p>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card shadow="never" class="rounded-xl bg-white p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">Information We Collect</h2>
                  <el-descriptions direction="vertical" :column="1" border class="bg-gray-50 rounded-lg">
                    <el-descriptions-item label="Personal Information">
                      We collect personal information that you provide to us when registering or using our services, such as your name, email address, and payment information.
                    </el-descriptions-item>
                    <el-descriptions-item label="Usage Data">
                      We may collect data on how you use our services, including your IP address, browser type, and pages visited.
                    </el-descriptions-item>
                  </el-descriptions>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card shadow="never" class="rounded-xl bg-white p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">Use of Information</h2>
                  <el-descriptions direction="vertical" :column="1" border class="bg-gray-50 rounded-lg">
                    <el-descriptions-item label="Service Provision">
                      We use your personal information to provide and improve our services, process transactions, and communicate with you.
                    </el-descriptions-item>
                    <el-descriptions-item label="Compliance and Security">
                      We use your information to comply with legal obligations, mitigate fraud and security risks.
                    </el-descriptions-item>
                  </el-descriptions>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card shadow="never" class="rounded-xl bg-white p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">Data Security</h2>
                  <p class="text-gray-700 text-base leading-relaxed">
                    We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card shadow="never" class="rounded-xl bg-white p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">Your Rights</h2>
                  <p class="text-gray-700 text-base leading-relaxed">
                    You have the right to access, update, and delete your personal information. You can exercise these rights by contacting us at <span class="font-semibold text-blue-600">support@globetrotter.finance</span>.
                  </p>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card shadow="never" class="rounded-xl bg-white p-4">
                  <h2 class="text-2xl font-semibold text-blue-700 mb-3">Changes to this Privacy Policy</h2>
                  <p class="text-gray-700 text-base leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our services constitutes acceptance of the updated policy.
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
  name: 'Privacy',
  components: {
    Header,
    Footer
  }
}
</script>
