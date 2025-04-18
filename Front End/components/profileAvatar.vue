<template>
  <div class="inline-flex justify-start items-center gap-2.5">
    <div class="w-10 h-10 relative">
      <!-- Profile Image with NuxtLink -->
      <NuxtLink to="/profile">
        <img
          v-if="src"
          :src="src"
          alt="Profile Picture"
          class="w-8 h-8 left-[4px] top-[4px] absolute rounded-full object-cover cursor-pointer"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: false,
    default: ""
  }
});
</script>
