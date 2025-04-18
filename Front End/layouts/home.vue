<template>
  <!-- <div class="min-h-screen flex flex-col">
    <TheHeader v-if="!isAuthPage" />
    <div v-else class="p-6 fixed">
      <NuxtLink to="/" class="flex items-center">
        <img src="../Logo.svg" />
      </NuxtLink>
    </div>
    <main
      :class="[isAuthPage ? 'flex-grow' : 'flex-grow container mx-auto px-4 py-8']"
    >
      <NuxtPage />
    </main>
    <TheFooter v-if="!isAuthPage" />
  </div> -->
  <Header/>
  <slot/>
  <Footer/>
</template>

<!-- <script setup>
import { useRoute } from '#imports';

const route = useRoute();

// Check if current route is login or signup page
const isAuthPage = computed(() => {
  return ['/login', '/signup'].includes(route.path);
});
</script> -->
