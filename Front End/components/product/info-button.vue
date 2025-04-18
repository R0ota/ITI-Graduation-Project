<script setup>
import { defineProps } from "vue";
const data = defineProps({
  info: String,
});
</script>
<template>
  <div class="inline-flex justify-start items-start gap-4">
    <button
      class="cursor-pointer focus:bg-red-900 focus:text-yellow-50 px-4 py-2 bg-yellow-50 rounded-2xl  outline-[1.50px] outline-offset-[-1.50px] outline-red-800 inline-flex justify-center items-center gap-2.5 leading-relaxed text-red-800 text-lg font-medium"
    >
      {{ data.info }}
    </button>
  </div>
</template>
