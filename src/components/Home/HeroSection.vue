<template>
  <section class="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24 px-4 relative overflow-hidden">

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 -right-20 sm:top-20 sm:-right-40 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
      <div class="absolute bottom-10 -left-20 sm:bottom-20 sm:-left-40 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
      <div class="absolute -bottom-10 sm:-bottom-20 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
    </div>

    <el-row justify="center" class="mt-30 mb-10  sm:mb-16">
      <el-col :xs="22" class="items-center justify-between">
        <h2 class="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8">
          We are <span class="text-blue-600">redefining</span> how<br>
        </h2>
        <h2 class="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center mb-12">
          Legal, Audit & Finance Firms work
        </h2>
        <!-- <br> -->
        <p class="mt-10 text-center">
          AI-powered, ISO-certified, and built for scale —
        </p>
        <p class="mt-4 text-center">
          <span class="text-blue-600 fw-bold">Saras</span> helps you automate, analyze, and manage everything from litigation to compliance and knowledge.
        </p>

        <!-- <div class="checklist-container mt-10">
          <div class="checklist">
            <div
              class="task-item"
              :key="currentTaskIndex"
              :class="{'scroll-up': isTaskChanging}"
            >
                <el-checkbox
                  :model-value="currentTask.checked"
                  disabled
                  style="color: green;"
                >
                  {{ currentTask.text }}
                </el-checkbox>
            </div>
          </div>
        </div> -->

        <div class="flex justify-center mt-5">
          <img src="../../assets/hero/home-hero.gif" />
        </div>

      </el-col>
    </el-row>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue';
import { ElCheckbox } from 'element-plus';

// Tasks array with text and checked status
// const tasks = ref([
//   { text: 'Task 1 Done', checked: true },
//   { text: 'Task 2 Done', checked: true },
//   { text: 'Task 3 Done', checked: true },
//   { text: 'Task 4 Done', checked: true },
//   { text: 'Task 5 Done', checked: true },
// ]);

// // Current task index (to track the visible task)
// const currentTaskIndex = ref(0);

// // Computed property to get the current task based on the currentTaskIndex
// const currentTask = computed(() => {
//   return tasks.value[currentTaskIndex.value] || { text: '', checked: false };
// });

// // Automatically change tasks and scroll up when a task is completed
// const changeTask = () => {
//   currentTaskIndex.value = currentTaskIndex.value + 1
//   currentTaskIndex.value = currentTaskIndex.value % tasks.value.length
//   triggerAnimation();
// };

// // This function triggers the task change after a specific interval (e.g., 2 seconds)
// onMounted(() => {
//   const intervalId = setInterval(() => {
//     changeTask();
//   }, 3000); // Change task every 2 seconds

//   // Clean up the interval when the component is destroyed
//   watchEffect(() => {
//     if (currentTaskIndex.value >= tasks.value.length - 1) {
//       clearInterval(intervalId);
//     }
//   });
// });
// const triggerAnimation = async () => {
//   isTaskChanging.value = false; // Ensure the animation class is removed
//   await nextTick(); // Wait for the DOM to update
//   isTaskChanging.value = true; // Re-add the animation class to trigger animation
// };

</script>

<style scoped>

/* Enhanced styling */
.bg-gradient-to-br {
  background: linear-gradient(to bottom right, #EFF6FF, #FFFFFF, #EFF6FF);
}

.text-gray-900 {
  color: #1F2937;
}

.text-gray-600 {
  color: #4B5563;
}

.text-blue-600 {
  color: #2563EB;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  section {
    min-height: auto;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width: 1024px) {
  .lg\:flex-row {
    flex-direction: row;
  }
}

.checklist-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.checklist {
  overflow: hidden;
  position: relative;
  padding: 10px;
}

.task-item {
  opacity: 0;
  transform: translateY(100%);
  animation: scrollUp 1s forwards;
}

@keyframes scrollUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>