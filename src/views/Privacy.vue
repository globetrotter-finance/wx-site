<template>
  <div>
    <Header />

    <div class="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 px-4">
      <el-container class="mx-auto max-w-6xl">
        <el-main>
          <div class="text-center mb-10 mt-25">
            <h1 class="text-5xl font-extrabold text-gray-900">Privacy Policy</h1>
            <p class="text-lg text-gray-500 mt-2">Last Updated: June 15, 2025</p>
          </div>

          <div shadow="never" class="rounded-xl p-4 mb-5">
            <h2 class="text-2xl font-semibold text-blue-700 mb-3">Our Commitment</h2>
            <p class="text-gray-700 text-base leading-relaxed">
              Saras finance, provided by The Rita Software Services, is committed to protecting your privacy. This
              Privacy Policy outlines how we collect, use, and safeguard your personal information.
            </p>
          </div>

          <div shadow="never" class="rounded-xl p-4 mb-5">
            <h2 class="text-2xl font-semibold text-blue-700 mb-3">Information We Collect</h2>
            <el-row>
              <h2>

                <!-- <el-row label="Personal Information"> -->
                <h2 class="font-bold mb-2 text-blue-700">Personal Information</h2>
                <h2 class="mb-2">
                  We collect personal information that you provide to us when registering or using our services, such as
                  your name, email address, and payment information.
                </h2>
                <h2 class="font-bold mb-2 text-blue-700">Usage Data</h2>
                <h2 class="mb-2">
                  We may collect data on how you use our services, including your IP address, browser type, and pages
                  visited.
                </h2>
              </h2>

            </el-row>
          </div>

          <div shadow="never" class="rounded-xl p-4 mb-5">
            <h2 class="text-2xl font-semibold text-blue-700 mb-3">Use of Information</h2>
            <el-row direction="vertical" :column="1">
              <h4>
                <h2 class="font-bold mb-2 text-blue-700">Service Provision</h2>
                <h2 class="mb-2">
                  We use your personal information to provide and improve our services, process transactions, and
                  communicate with you.
                </h2>
                <h2 class="font-bold mb-2 text-blue-700">Compliance and Security</h2>
                <h2 class="mb-2">
                  We use your information to comply with legal obligations, mitigate fraud and security risks.
                </h2>
              </h4>

            </el-row>
          </div>

          <div shadow="never" class="rounded-xl p-4 mb-5">
            <h2 class="text-2xl font-semibold text-blue-700 mb-3">Data Security</h2>
            <p class="text-gray-700 text-base leading-relaxed">
              We implement industry-standard security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div shadow="never" class="rounded-xl p-4 mb-5">
            <h2 class="text-2xl font-semibold text-blue-700 mb-3">Your Rights</h2>
            <p class="text-gray-700 text-base leading-relaxed">
              You have the right to access, update, and delete your personal information. You can exercise these rights
              by contacting us at <el-link href="mailto:support@sarasfinance.com"> support@sarasfinance.com </el-link>
            </p>
          </div>

          <div shadow="never" class="rounded-xl p-4 mb-5">
            <h2 class="text-2xl font-semibold text-blue-700 mb-3">Changes to this Privacy Policy</h2>
            <p class="text-gray-700 text-base leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your
              continued use of our services constitutes acceptance of the updated policy.
            </p>
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
  name: 'Privacy',
  components: {
    Header,
    Footer
  }
}
</script>
