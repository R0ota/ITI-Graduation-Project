<template>
  <nav
    class="flex lg:h-[43px] h-9 justify-center items-end lg:gap-6 gap-2 self-stretch bg-[#A31D1D] border-b-2 border-[#A31D1D]"
  >
    <NuxtLink
      to="/profile"
      :class="[baseClasses, route.path === '/profile' ? activeClasses : '']"
    >
      Profile
    </NuxtLink>

    <NuxtLink
      to="/order/ongoing-order"
      :class="[
    baseClasses,
    (route.path === '/order/ongoing-order' || route.path === '/order/order-in-review' || route.path === '/order/previous-order') ? activeClasses : ''
  ]"
    >
      Orders
    </NuxtLink>

    <NuxtLink
      to="/security/changePassword"
      :class="[
    baseClasses,
    (route.path === '/security/changePassword' ||
     route.path === '/security/newPassword' ||
     route.path === '/security/successfullPassword')
      ? activeClasses
      : ''
  ]"
    >
      Security
    </NuxtLink>
  </nav>
</template>

<script setup>
const route = useRoute();
const baseClasses = `
  text-[#FFEFD1] text-center lg:text-[18px] text-sm font-bold leading-[27px] tracking-[-0.342px]
  lg:px-6 px-3.5 lg:py-2 py-1.5 rounded-none
  flex justify-center items-center
  transition-none transform-none
`;

const activeClasses = `
  bg-[#FFEFD1] text-red-900 lg:rounded-t-[24px] rounded-t-2xl lg:px-6 px-3.5 lg:py-2 py-1.5 gap-[10px]
`;
</script>
