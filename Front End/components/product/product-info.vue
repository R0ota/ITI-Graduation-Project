<script setup>
import { defineProps } from 'vue';
const data = defineProps({
   title: String
});
</script>
<template>
  <div class="inline-flex flex-col justify-start items-start gap-2">
    <p class="text-black text-lg font-semibold leading-relaxed ">{{ title }}</p>
    <div class="inline-flex flex-wrap justify-start items-start gap-4">
      <slot />
    </div>
  </div>
</template>
