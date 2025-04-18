<script setup>
const route = useRoute();
</script>

<template>
  <div
    class="border-b-2 border-red-800 lg:gap-6 gap-2 flex lg:w-full w-87 sm:w-full md:w-full"
  >
    <!-- ongoing order btn -->   
    <NuxtLink
      to="/order/ongoing-order"
      tabindex="0"
      :class="[
        'lg:px-4 px-3 lg:py-2 py-1.5 flex justify-center items-center gap-2.5 cursor-pointer rounded-tl-3xl rounded-tr-3xl group',
        route.path === '/order/ongoing-order' ? 'bg-red-800' : ''
      ]"
    >
      <p
        :class="[
          'lg:text-xl text-xs font-medium',
          route.path === '/order/ongoing-order' ? 'font-bold text-yellow-50' : 'text-red-800'
        ]"
      >
        Ongoing Orders
      </p>
    </NuxtLink>
   
   
    <!-- previous order btn -->   
    <NuxtLink
      to="/order/previous-order"
      tabindex="0"
      :class="[
        'px-4 py-2 flex justify-center items-center gap-2.5 cursor-pointer rounded-tl-3xl rounded-tr-3xl group',
        route.path === '/order/previous-order' ? 'bg-red-800' : ''
      ]"
    >
      <p
        :class="[
          'lg:text-xl text-xs font-medium',
          route.path === '/order/previous-order' ? 'font-bold text-yellow-50' : 'text-red-800'
        ]"
      >
        Previous Orders
      </p>
    </NuxtLink>
  
  </div>
</template>
