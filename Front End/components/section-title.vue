<script setup>
    import { defineProps } from 'vue';

   const data = defineProps ({
    title : String
   });
</script>
<template>
    <div class="px-6 border-l-[6px] border-red-900 inline-flex items-center gap-3">
      <p
        class="justify-start text-red-900 lg:text-2xl text-xl font-bold "
      >
        {{ title }}
    </p>
    <slot />
    </div>
    
</template>