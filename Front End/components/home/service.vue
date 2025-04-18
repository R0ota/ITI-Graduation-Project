<template>
  <div class="px-7 lg:py-11 py-6 bg-white rounded-xl flex flex-col lg:gap-4 gap-2 items-center">
    <div class="w-16 h-16 bg-[#F1D093] rounded-full relative">
      <slot />
    </div>

    <div class="flex lg:w-60 w-56 flex-col gap-2 items-center justify-center">
      <p class="text-center w-full text-red-900 text-lg font-bold">{{ service }}</p>
      <p class="lg:w-60 w-56 text-black text-center lg:text-base text-sm font-medium">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["service", "description"]);
</script>
