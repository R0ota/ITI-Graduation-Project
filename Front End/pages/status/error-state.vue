<template>
  <div class="h-screen w-full flex items-center justify-center">
    <div class="flex flex-col gp-4 items-center justify-center">
      <img src="/images/404.png" class="lg:w-55 w-44 lg:h-55 h-44" />
      <div class="flex flex-col items-center justify-center gap-1">
        <p class="text-red-800 lg:text-3xl text-2xl font-bold font-['Poppins']">
          Oops! Page Not Found
        </p>
        <NuxtLink
          to="/market"
          class="text-black lg:text-xl text-base font-bold font-['Poppins'] cursor-pointer"
          >Back to Marketplace</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
