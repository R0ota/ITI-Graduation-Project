<script setup>
definePageMeta({
  layout: "error",
});
</script>

<template>
  <div class="h-screen w-full flex items-center justify-center">
    <div class="flex flex-col gp-4 items-center justify-center">
      <img src="/images/searchfail.png" class="lg:w-55 w-40 lg:h-55 h-40" />

      <p class="text-black lg:text-xl text-base font-medium font-['Poppins']">
        We couldn't find anything for that
      </p>
    </div>
  </div>
</template>
