<template>
  <div
    class="py-8 lg:w-full w-88  lg:flex-wrap flex-wrap border-b-[2.50px] border-red-800 inline-flex flex-col justify-start items-start gap-4"
  >
    <!-- <div class="border-b border-gray-200 mb-8"> -->
    <!-- <div
      class="lg:px-6 px-4 border-l-[6px] border-red-800 inline-flex justify-center items-center gap-2.5"
    >
      <p
        class="justify-start text-red-800 text-2xl font-semibold lg:leading-9 leading-normal"
        aria-current="true"
      >
        Product Features
      </p>
    </div> -->
    <SectionTitle title="Product Features"/>
    <!-- </div> -->

    <div class="flex flex-col lg:flex-wrap flex-wrap gap-2">
      <ul class="space-y-3">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="flex  justify-start text-black lg:text-xl text-base font-medium font-['Tajawal'] lg:leading-loose leading-normal"
        >
          {{ feature }}
          <!-- <span class="text-gray-700">{{ feature }}</span> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  features: {
    type: Array,
    required: true
  }
});
</script>
