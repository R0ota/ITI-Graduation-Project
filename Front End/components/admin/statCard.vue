<template>
  <div
    class="w-48 h-48 px-4 py-8 rounded-[32px] flex flex-col justify-between items-start"
    :style="{
        backgroundImage: 'linear-gradient(to bottom right, #A31D1D, #7E0000)',
      }"
  >
    <div class="text-[#FFFDD1] text-xl font-semibold leading-loose">
      {{ title }}
    </div>
    <div class="text-[#FFFDD1] text-3xl font-bold leading-10">
      {{ value }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
})
</script>
