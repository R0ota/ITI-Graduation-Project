<template>
  <header class="flex items-center gap-10 justify-between py-[16px] px-[24px]">
    <!-- logo -->
    <div
      class="text-black text-center text-[20px] font-bold leading-[30px] tracking-[-0.38px]"
    >
      <NuxtLink to="/" class="cursor-pointer">
        <img src="../Logo.svg" alt="Logo" />
      </NuxtLink>
    </div>

    <!-- web -->
    <div class="hidden lg:flex items-center gap-10 flex-1">
      <!-- Search Bar -->
      <div
        class="flex items-center justify-between h-[48px] p-[12px] px-[16px] flex-[1_0_0] self-stretch rounded-[16px] border-[1.5px] border-[#A31D1D] bg-[#FFF5E3] relative"
      >
        <!-- Search Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 aspect-square text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_390_1421)">
            <path
              d="M19.5 9.75C19.5 11.9016 18.8016 13.8891 17.625 15.5016L23.5594 21.4406C24.1453 22.0266 24.1453 22.9781 23.5594 23.5641C22.9734 24.15 22.0219 24.15 21.4359 23.5641L15.5016 17.625C13.8891 18.8062 11.9016 19.5 9.75 19.5C4.36406 19.5 0 15.1359 0 9.75C0 4.36406 4.36406 0 9.75 0C15.1359 0 19.5 4.36406 19.5 9.75ZM9.75 16.5C10.6364 16.5 11.5142 16.3254 12.3331 15.9862C13.1521 15.647 13.8962 15.1498 14.523 14.523C15.1498 13.8962 15.647 13.1521 15.9862 12.3331C16.3254 11.5142 16.5 10.6364 16.5 9.75C16.5 8.86358 16.3254 7.98583 15.9862 7.16689C15.647 6.34794 15.1498 5.60382 14.523 4.97703C13.8962 4.35023 13.1521 3.85303 12.3331 3.51381C11.5142 3.17459 10.6364 3 9.75 3C8.86358 3 7.98583 3.17459 7.16689 3.51381C6.34794 3.85303 5.60382 4.35023 4.97703 4.97703C4.35023 5.60382 3.85303 6.34794 3.51381 7.16689C3.17459 7.98583 3 8.86358 3 9.75C3 10.6364 3.17459 11.5142 3.51381 12.3331C3.85303 13.1521 4.35023 13.8962 4.97703 14.523C5.60382 15.1498 6.34794 15.647 7.16689 15.9862C7.98583 16.3254 8.86358 16.5 9.75 16.5Z"
              fill="#A31D1D"
            />
          </g>
        </svg>

        <input
          type="text"
          v-model="searchText"
          placeholder="Explore a variety of designs and products"
          class="flex-1 p-[12px] pl-10 pr-10 outline-none placeholder-[#B24343] text-[#B24343]"
        />

        <!-- Close (X) Icon (Appears When Typing) -->
        <svg
          v-if="searchText.length > 0"
          @click="clearInput"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          class="w-6 h-6 aspect-square absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
        >
          <g clip-path="url(#clip0_424_4598)">
            <path
              d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM8.20312 8.20312C8.64375 7.7625 9.35625 7.7625 9.79219 8.20312L11.9953 10.4062L14.1984 8.20312C14.6391 7.7625 15.3516 7.7625 15.7875 8.20312C16.2234 8.64375 16.2281 9.35625 15.7875 9.79219L13.5844 11.9953L15.7875 14.1984C16.2281 14.6391 16.2281 15.3516 15.7875 15.7875C15.3469 16.2234 14.6344 16.2281 14.1984 15.7875L11.9953 13.5844L9.79219 15.7875C9.35156 16.2281 8.63906 16.2281 8.20312 15.7875C7.76719 15.3469 7.7625 14.6344 8.20312 14.1984L10.4062 11.9953L8.20312 9.79219C7.7625 9.35156 7.7625 8.63906 8.20312 8.20312Z"
              fill="#A31D1D"
            />
          </g>
          <defs>
            <clipPath id="clip0_424_4598">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div class="flex justify-end items-center">
        <!-- Home -->
        <NuxtLink
          to="/"
          :class="[
            baseClasses,
            route.path === '/'
              ? hoverClasses
              : '',
          ]"
        >
          <img
            v-if="route.path === '/'"
            src="../assets/home-fill.svg"
            class="w-8 h-8"
          />
          <img v-else src="../assets/home-stroke.svg" class="w-8 h-8" />
          <p
            :class="[
            'text-red-900 text-lg ',
            route.path === '/' ? 'font-bold' : 'font-medium',
          ]"
          >
            Home
          </p>
        </NuxtLink>

        <!-- Marketplace -->
        <NuxtLink
          to="/market"
          :class="[
            baseClasses,
            route.path === '/market'
              ? hoverClasses
              : '',
          ]"
        >
          <img
            v-if="route.path !== '/market'"
            src="../assets/store-stroke.svg"
            class="w-8 h-8"
          />
          <img v-else src="../assets/store-fill.svg" class="w-8 h-8" />
          <p
            :class="[
            'text-red-900 text-lg',
            route.path === '/market' ? 'font-bold' : 'font-medium',
          ]"
          >
            Marketplace
          </p>
        </NuxtLink>

        <!--Favorite -->
        <NuxtLink 
          :to="isAuthenticated? '/favorite':'/login'"
          :class="[
            'relative flex items-center justify-between cursor-pointer group px-4 py-2.5 transition-all duration-300 hover:rounded-full hover:bg-orange-100 hover:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.50)]',
            route.path === '/favorite' ? 'border-b-[2px] border-red-900' : '',
          ]"
        >
          <div class="relative w-8 h-7 flex items-center justify-center">
            <i
              :class="[
              'relative text-2xl text-red-900 mr-3',
              route.path === '/favorite'
                ? 'fa-solid fa-heart fill '
                : 'fa-regular fa-heart fill ',
            ]"
            >
              <span
                v-if="wishlistCount > 0"
                class="absolute -top-3 -right-3 bg-[#A31D1D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                {{ wishlistCount }}
              </span>
            </i>
          </div>
          <p
            :class="[
            'text-red-900 text-lg  ',
            route.path === '/favorite' ? 'font-bold' : 'font-medium',
          ]"
          >
            Favorite
          </p>
        </NuxtLink>

        <!-- cart -->
        <NuxtLink
        :to="isAuthenticated? '/cart':'/login'"
          :class="[
            baseClasses,
            route.path === '/cart' ? hoverClasses : '',
          ]"
        >
          <div class="relative lg:w-full w-8 h-8 flex items-center">
            <img
              v-if="route.path !== '/cart'"
              src="../assets/cart-shopping.svg"
              class="w-6 h-6"
            />
            <img
              v-else
              src="../assets/cart-shopping-solid.svg"
              class="w-6 h-6"
            />
            <span
              v-if="cartItemCount > 0"
              class="absolute -top-2 -right-2 bg-[#A31D1D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ cartItemCount }}
            </span>
          </div>

          <p
            :class="[
            'text-red-800 text-lg',
            route.path === '/cart' ? 'font-bold' : 'font-medium',
          ]"
          >
            Cart
          </p>
        </NuxtLink>
      </div>

      <div
        v-if="!isAuthenticated"
        class="flex items-center justify-center gap-[10px]"
      >
        <!-- Log in Button -->
        <NuxtLink to="login">
          <button
            class="p-[12px] px-[14px] text-[#A31D1D] text-center text-[20px] font-medium leading-[150%] tracking-[-0.304px] cursor-pointer transition-all duration-300 hover:bg-orange-100 hover:rounded-full hover:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.50)]"
          >
            Log in
          </button>
        </NuxtLink>

        <!-- Sign up Button -->
        <NuxtLink to="sign-up">
          <button
            class="p-[10px] px-[24px] rounded-[16px] bg-[#A31D1D] shadow-[0px_0px_4px_rgba(0,0,0,0.50)] text-[#ECDCBF] text-center text-[20px] font-medium leading-[150%] tracking-[-0.304px] cursor-pointer transition duration-300 ease-in-out py-3 hover:bg-[#6D1313] hover:shadow-lg hover:rounded-[50px]"
          >
            Sign up
          </button>
        </NuxtLink>
      </div>

      <div v-else class="flex items-center space-x-4">
        <NuxtLink
          to="/profile"
          class="px-[8px] py-[5px]  flex flex-col items-center justify-center]"
        >
          <p class="text-black text-xs font-medium">Hello</p>
          <p class="text-red-800 text-xs font-extrabold">{{ authStore.user.name }}</p>
        </NuxtLink>
        <!-- Logout Button -->
        <button
          @click="handleLogout"
          class="p-[8px] px-[12px] text-[#A31D1D] text-center text-[20px] font-medium leading-[150%] tracking-[-0.304px] cursor-pointer transition-all duration-300 hover:bg-orange-100 hover:rounded-full hover:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.50)]"
        >
          <i class="fa-solid fa-right-from-bracket rotate-180 "></i>
        </button>
      </div>
    </div>

    <!-- mobile -->
    <div class="block lg:hidden">
      <button
        @click="toggleMobileMenu"
        class="text-[#A31D1D] text-3xl focus:outline-none cursor-pointer"
      >
        <i class="fas fa-bars"></i>
      </button>

      <div
        v-if="isMobileMenuOpen"
        class="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-xl border border-red-200 z-50 p-4 space-y-4"
      >
        <!-- Home -->
        <NuxtLink
          to="/"
          class="flex items-center gap-2 text-red-900"
          @click="closeMobileMenu"
        >
          <span :class="route.path === '/' ? 'font-bold' : 'font-medium'"
            >Home</span
          >
        </NuxtLink>

        <!-- Marketplace -->
        <NuxtLink
          to="/market"
          class="flex items-center gap-2 text-red-900"
          @click="closeMobileMenu"
        >
          <span :class="route.path === '/market' ? 'font-bold' : 'font-medium'"
            >Marketplace</span
          >
        </NuxtLink>

        <!-- Favorite -->
        <NuxtLink
        :to="isAuthenticated? '/favorite':'/login'"
          @click="closeMobileMenu"
          :class="[
            'relative flex items-center justify-between cursor-pointer group px-4 py-2.5 transition-all duration-300 hover:rounded-full hover:bg-orange-100 hover:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.50)]',
            route.path === '/favorite' ? 'border-b-[2px] border-red-900' : '',
          ]"
        >
          <!-- <div class="relative w-8 h-7 flex items-center justify-center"> -->
            <!-- <i
              :class="[
              'relative text-2xl text-red-800 mr-3',
              route.path === '/favorite'
                ? 'fa-solid fa-heart fill'
                : 'fa-regular fa-heart fill',
            ]"
            > -->
              <span
                v-if="wishlistCount > 0"
                class="absolute -top-3 -right-3 bg-[#A31D1D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                {{ wishlistCount }}
              </span>
            <!-- </i> -->
          <!-- </div> -->

          <p
            :class="[
            'text-red-900 text-lg ',
            route.path === '/favorite' ? 'font-bold' : 'font-medium',
          ]"
          >
            Favorite
          </p>
        </NuxtLink>

        <!-- Cart -->
        <NuxtLink
        :to="isAuthenticated? '/cart':'/login'"
          class="flex items-center gap-2 text-red-800 font-[Poppins]"
          @click="closeMobileMenu"
        >
          <span
            v-if="cartItemCount > 0"
            class="bg-[#A31D1D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            {{ cartItemCount }}
          </span>

          <span :class="route.path === '/cart' ? 'font-bold' : 'font-medium'"
            >Cart</span
          >
        </NuxtLink>

        <!-- Auth Buttons -->
        <div v-if="!isAuthenticated" class="flex flex-col gap-2">
          <NuxtLink
            to="/login"
            @click="closeMobileMenu"
            class="text-[#A31D1D] font-medium hover:underline"
          >
            Log in
          </NuxtLink>
          <NuxtLink
            to="/sign-up"
            @click="closeMobileMenu"
            class="text-[#A31D1D] font-medium hover:underline"
          >
            Sign up
          </NuxtLink>
        </div>
        <div v-else class="flex flex-col gap-2">
          <NuxtLink
            to="/profile"
            @click="closeMobileMenu"
            class="text-[#A31D1D] font-medium hover:underline"
          >
          Hello, {{ authStore.user.name }}
          </NuxtLink>
          <button
            @click="handleLogout"
            class="text-[#A31D1D] font-medium hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { computed, ref } from "vue";
import { useAuth } from "~/composables/useAuth";
import { useAuthStore } from "~/stores/auth";
import { useCartStore } from "~/stores/cart";
import { useWishlistStore } from '~/stores/wishlist';
const wishlistStore = useWishlistStore();

const wishlistCount = computed(() => wishlistStore.items.length);
import { useSearchStore } from '~/stores/search';

const searchStore = useSearchStore();

const searchText = computed({
  get: () => searchStore.text,
  set: val => searchStore.text = val
});

const clearInput = () => {
  searchText.value = "";
};

const authStore = useAuthStore();
const cartStore = useCartStore();
const { logout } = useAuth();

const isAuthenticated = computed(() => authStore.isAuthenticated);
const cartItemCount = computed(() => cartStore.totalItems);

const handleLogout = () => {
  logout();
};

const route = useRoute();

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const baseClasses = `px-3.5 py-2 flex justify-center items-center gap-1 transition-all duration-300 hover:bg-orange-100 hover:rounded-full hover:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.50)]`;
const hoverClasses =`border-b-[2px] border-red-800 hover:bg-orange-100 hover:rounded-full hover:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.50)] `;
</script>
