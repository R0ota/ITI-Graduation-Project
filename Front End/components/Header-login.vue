 <!-- <template>
  <header class="flex py-[16px] px-[24px] justify-between items-center">
    <NuxtLink to="/market">
      <div
        class="text-center justify-start text-red-800 text-lg font-medium font-['Poppins'] leading-relaxed"
      >
        Explore Marketplace
      </div>
    </NuxtLink> -->
    <!-- Logo -->
    <!-- <NuxtLink to="/">
      <div
        class="text-black text-center font-[Poppins] text-[20px] not-italic font-bold leading-[30px] tracking-[-0.38px]"
      >
        <img src="../Logo.svg" />
      </div>
    </NuxtLink>

    <div class="flex items-center justify-center gap-[10px]"> -->
      <!-- Log in Button -->
      <!-- <NuxtLink
        to="/profile"
        class="px-[8px] py-[5px]  flex flex-col items-center justify-center transition-all duration-300 hover:bg-orange-100 hover:rounded-full hover:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.50)]"
      >
        <div v-if="!authStore?.user" class="flex items-center justify-center"> -->
          <!-- loading icon -->
          <!-- <i class="fa-solid fa-spinner animate-spin text-[#A31D1D]"></i>
        </div>
        <div v-else>
          <p class="text-black text-xs font-medium">Hello</p>
          <p class="text-red-800 text-xs font-extrabold">
            {{ authStore.user.name }}
          </p>
        
        </div>
      </NuxtLink> -->

      <!-- Logout Button -->
      <!-- <button
        @click="handleLogout"
        class="p-[8px] px-[12px] text-[#A31D1D] text-center font-[Poppins] text-[20px] font-medium leading-[150%] tracking-[-0.304px] cursor-pointer transition-all duration-300 hover:bg-orange-100 hover:rounded-full hover:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.50)]"
      >
        <i class="fa-solid fa-right-from-bracket rotate-180 "></i>
      </button>
    </div> -->

    <!-- <div
        
        class="flex items-center space-x-4"
      >
    
      </div> -->
  <!-- </header>
</template>

<script setup>
  import { useAuthStore } from '~/stores/auth';
  import { NuxtLink } from '#components';
import { useAuth } from '~/composables/useAuth';

const authStore = useAuthStore();
  const { logout } = useAuth(); -->
//   const isAuthenticated = computed(() => authStore.isAuthenticated);

//   const handleLogout = () => {
//     logout();
//   };
<!-- // </script>  -->






<template>
  <header class="flex py-[16px] px-[24px] justify-between items-center relative">
    <!-- Explore Link (Hidden on small screens) -->
    <NuxtLink to="/market" class="hidden lg:block">
      <div
        class="text-center justify-start text-red-800 text-lg font-medium font-['Poppins'] leading-relaxed"
      >
        Explore Marketplace
      </div>
    </NuxtLink>

    <!-- Logo -->
    <NuxtLink to="/">
      <div
        class="text-black text-center font-[Poppins] text-[20px] not-italic font-bold leading-[30px] tracking-[-0.38px]"
      >
        <img src="../Logo.svg" />
      </div>
    </NuxtLink>

    <!-- Desktop Buttons (Hidden on small screens) -->
    <div class="hidden lg:flex items-center justify-center gap-[10px]">
      <!-- Profile Button -->
      <NuxtLink
        to="/profile"
        class="px-[8px] py-[5px] flex flex-col items-center justify-center transition-all duration-300 hover:bg-orange-100 hover:rounded-full hover:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.50)]"
      >
        <div v-if="!authStore?.user" class="flex items-center justify-center">
          <i class="fa-solid fa-spinner animate-spin text-[#A31D1D]"></i>
        </div>
        <div v-else>
          <p class="text-black text-xs font-medium">Hello</p>
          <p class="text-red-800 text-xs font-extrabold">
            {{ authStore.user.name }}
          </p>
        </div>
      </NuxtLink>

      <!-- Logout Button -->
      <button
        @click="handleLogout"
        class="p-[8px] px-[12px] text-[#A31D1D] text-center font-[Poppins] text-[20px] font-medium leading-[150%] tracking-[-0.304px] cursor-pointer transition-all duration-300 hover:bg-orange-100 hover:rounded-full hover:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.50)]"
      >
        <i class="fa-solid fa-right-from-bracket rotate-180 "></i>
      </button>
    </div>

    <!-- Mobile Menu Button -->
    <div class="lg:hidden">
      <button @click="toggleMobileMenu">
        <i class="fa-solid fa-bars text-2xl text-[#A31D1D]"></i>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="showMobileMenu"
      class="absolute top-full left-0 w-full bg-white shadow-md p-4 z-50 lg:hidden"
    >
      <NuxtLink to="/market" class="block py-2 text-red-800 font-medium">Explore Marketplace</NuxtLink>

      <NuxtLink
        to="/profile"
        class="block py-2  flex-col items-start transition-all duration-300 hover:bg-orange-100 hover:rounded-md"
      >
        <div v-if="!authStore?.user" class="flex items-center justify-center">
          <i class="fa-solid fa-spinner animate-spin text-[#A31D1D]"></i>
        </div>
        <div v-else>
          <p class="text-black text-xs font-medium">Hello</p>
          <p class="text-red-800 text-xs font-extrabold">
            {{ authStore.user.name }}
          </p>
        </div>
      </NuxtLink>

      <button
        @click="handleLogout"
        class="block w-full text-left py-2 text-[#A31D1D] font-medium text-[16px] hover:bg-orange-100 rounded-md"
      >
        <i class="fa-solid fa-right-from-bracket rotate-180 mr-2"></i> Logout
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { NuxtLink } from '#components';
import { useAuth } from '~/composables/useAuth';

const authStore = useAuthStore();
const { logout } = useAuth();
const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const handleLogout = () => {
  logout();
};
</script>

