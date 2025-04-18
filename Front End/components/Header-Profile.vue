<template>
  <header class="flex items-center gap-12 self-stretch py-[16px] px-[24px]">
    <!-- Logo -->
    <!-- <div
        class="text-black text-center font-poppins text-[20px] font-bold leading-[30px] tracking-[-0.38px]"
      >
        <img src="../Logo.svg" />
      </div> -->
    <div
      class="text-black text-center font-poppins text-[20px] font-bold leading-[30px] tracking-[-0.38px]"
    >
      <NuxtLink to="/" class="cursor-pointer">
        <img src="../Logo.svg" alt="Logo" />
      </NuxtLink>
    </div>
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

      <!-- Search Input -->
      <input
        type="text"
        v-model="searchText"
        placeholder="Explore a variety of designs and products"
        class="flex-1 p-[12px] pl-10 pr-10  outline-none placeholder-[#B24343]  text-[#B24343] "
      />

      <!-- Close (X) Icon (Appears When Typing) -->
      <svg
        v-if="searchText.length > 0"
        @click="clearInput"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        class=" w-6 h-6 aspect-square absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
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
    <!-- <div class="flex justify-start items-center">
        <div
          data-status="Default"
          class="px-4 py-2.5 flex justify-center items-center gap-1"
        >
          <div
            class="text-center justify-start text-red-800 text-lg font-medium font-['Poppins'] leading-relaxed"
          >
            Home
          </div>
        </div>
        <div
          data-status="Clicked"
          class="px-4 py-2.5 border-b-[3px] border-red-800 flex justify-center items-center gap-1"
        >
          <div
            class="text-center justify-start text-red-800 text-lg font-semibold font-['Poppins'] leading-relaxed"
          >
            Marketplace
          </div>
        </div>
      </div> -->

    <div class="flex justify-start items-center ">
      <NuxtLink
        to="/"
        class="px-4 py-2.5 flex justify-center items-center gap-1 transition-all duration-300 hover:bg-orange-100 hover:rounded-full"
      >
        <div
          class="text-center justify-start text-red-800 text-lg font-medium font-['Poppins'] leading-relaxed "
        >
          Home
        </div>
      </NuxtLink>

      <!-- Marketplace -->
      <NuxtLink
        to="/market"
        class="px-4 py-2.5 flex justify-center items-center gap-1 border-b-[3px] border-red-800 transition-all duration-300 hover:border-2 hover:border-red-800 hover:rounded-full hover:bg-orange-100"
      >
        <div
          class="text-center justify-start text-red-800 text-lg font-semibold font-['Poppins'] leading-relaxed"
        >
          Marketplace
        </div>
      </NuxtLink>
    </div>
    <!-- New Heart Icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-[28px] h-[28px] flex-shrink-0 fill-[#A31D1D] cursor-pointer"
      viewBox="0 0 28 25"
      fill="none"
    >
      <path
        d="M12.3484 23.6047L12.2117 23.4789L2.63047 14.5812C0.951562 13.0226 0 10.8351 0 8.54374V8.36327C0 4.51327 2.73438 1.21014 6.51875 0.488268C8.67344 0.0726432 10.8773 0.570299 12.6328 1.80624C13.125 2.15624 13.5844 2.56092 14 3.02577C14.2297 2.76327 14.4758 2.52264 14.7383 2.29842C14.9406 2.12342 15.1484 1.95936 15.3672 1.80624C17.1227 0.570299 19.3266 0.0726433 21.4812 0.4828C25.2656 1.20467 28 4.51327 28 8.36327V8.54374C28 10.8351 27.0484 13.0226 25.3695 14.5812L15.7883 23.4789L15.6516 23.6047C15.2031 24.0203 14.6125 24.2555 14 24.2555C13.3875 24.2555 12.7969 24.0258 12.3484 23.6047ZM13.0758 5.92968C13.0539 5.91327 13.0375 5.89139 13.0211 5.86952L12.0477 4.77577L12.0422 4.7703C10.7789 3.35389 8.87031 2.70858 7.01094 3.06405C4.4625 3.55077 2.625 5.77108 2.625 8.36327V8.54374C2.625 10.1023 3.27578 11.5953 4.41875 12.6562L14 21.5539L23.5813 12.6562C24.7242 11.5953 25.375 10.1023 25.375 8.54374V8.36327C25.375 5.77655 23.5375 3.55077 20.9945 3.06405C19.1352 2.70858 17.2211 3.35936 15.9633 4.7703C15.9633 4.7703 15.9633 4.7703 15.9578 4.77577C15.9523 4.78124 15.9578 4.77577 15.9523 4.78124L14.9789 5.87499C14.9625 5.89686 14.9406 5.91327 14.9242 5.93514C14.6781 6.18124 14.3445 6.31796 14 6.31796C13.6555 6.31796 13.3219 6.18124 13.0758 5.93514V5.92968Z"
        fill="#A31D1D"
      />
    </svg>
    <NuxtLink to="/cart" class="relative flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        class="w-[28px] h-[28px] flex-shrink-0 fill-[#A31D1D] cursor-pointer"
        viewBox="0 0 34 34"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.55549 4.44136C4.58024 4.48447 4.59818 4.53215 4.60782 4.58325L7.67971 20.3298C7.80174 20.9607 8.06606 21.5362 8.43669 22.027C8.68055 22.3499 8.97044 22.6362 9.29609 22.8776C9.65176 23.1411 10.0501 23.3511 10.4777 23.4965C10.9215 23.6475 11.3967 23.729 11.8887 23.729H29.0519C29.4561 23.729 29.8199 23.567 30.0793 23.3056C30.328 23.0549 30.4807 22.7128 30.4807 22.3345C30.4807 21.5617 29.8437 20.9399 29.0519 20.9399H11.8887C11.4054 20.9399 10.9696 20.7025 10.709 20.332C10.6004 20.1775 10.5222 20 10.4837 19.8069L10.1622 18.1509H27.3374C27.5479 18.1509 27.7556 18.1358 27.9593 18.1066C29.6273 17.8674 31.0239 16.6798 31.4749 15.0539L33.9157 6.20439C34.3265 4.72852 33.1835 3.27588 31.6178 3.27588H7.14987C7.09536 3.16362 7.03458 3.05513 6.96801 2.95079C6.37299 2.01811 5.31545 1.4165 4.13752 1.4165H1.42878C0.636999 1.4165 0 2.03823 0 2.81104C0 3.58384 0.636999 4.20557 1.42878 4.20557H4.13752C4.31596 4.20557 4.4733 4.29823 4.55549 4.44136ZM7.79226 6.10921H31.0029L28.7446 14.2966C28.7445 14.2971 28.7443 14.2976 28.7442 14.2981C28.5871 14.8619 28.0332 15.3175 27.3374 15.3175H9.58864L7.79226 6.10921ZM29.7424 26.5065C29.7104 26.472 29.6776 26.4383 29.6437 26.4053C29.4656 26.2314 29.2664 26.0829 29.0519 25.962C28.6212 25.7193 28.1291 25.5884 27.6231 25.5884C26.8653 25.5884 26.1384 25.8822 25.6025 26.4053C25.5506 26.4559 25.5009 26.5083 25.4535 26.5623C25.0111 27.066 24.7656 27.7094 24.7656 28.3774C24.7656 29.1171 25.0666 29.8266 25.6025 30.3496C26.1384 30.8727 26.8653 31.1665 27.6231 31.1665C28.381 31.1665 29.1078 30.8727 29.6437 30.3496C30.1796 29.8266 30.4807 29.1171 30.4807 28.3774C30.4807 27.6844 30.2164 27.018 29.7424 26.5065ZM9.03122 25.9721C8.82223 26.0918 8.62924 26.2373 8.45714 26.4053C8.19179 26.6643 7.9813 26.9717 7.83769 27.3101C7.69409 27.6485 7.62018 28.0112 7.62018 28.3774C7.62018 28.7437 7.69409 29.1064 7.83769 29.4448C7.9813 29.7832 8.19179 30.0906 8.45714 30.3496C8.72249 30.6086 9.0375 30.814 9.3842 30.9542C9.73089 31.0944 10.1025 31.1665 10.4777 31.1665C10.853 31.1665 11.2246 31.0944 11.5713 30.9542C11.918 30.814 12.233 30.6086 12.4983 30.3496C12.7637 30.0906 12.9742 29.7832 13.1178 29.4448C13.2614 29.1064 13.3353 28.7437 13.3353 28.3774C13.3353 28.0112 13.2614 27.6485 13.1178 27.3101C13.0022 27.0378 12.8433 26.7855 12.6474 26.5623C12.5998 26.5082 12.5501 26.4558 12.4983 26.4053C12.3165 26.2278 12.1114 26.0755 11.8887 25.9521C11.7864 25.8954 11.6804 25.8448 11.5713 25.8007C11.2246 25.6605 10.853 25.5884 10.4777 25.5884C10.1025 25.5884 9.73089 25.6605 9.3842 25.8007C9.26237 25.8499 9.14444 25.9073 9.03122 25.9721Z"
          fill="#A31D1D"
        />
      </svg>
      <span
        v-if="cartItemCount > 0"
        class="absolute -top-2 -right-2 bg-[#A31D1D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
      >
        {{ cartItemCount }}
      </span>
    </NuxtLink>
    <div
      v-if="!isAuthenticated"
      class="flex items-center justify-center gap-[10px]"
    >
      <!-- Log in Button -->
      <NuxtLink to="login">
        <button
          class="p-[12px] px-[16px] text-[#A31D1D] text-center font-[Poppins] text-[20px] font-medium leading-[150%] tracking-[-0.304px] cursor-pointer transition-all duration-300 hover:bg-orange-100 hover:rounded-full"
        >
          Log in
        </button>
      </NuxtLink>

      <!-- Sign up Button -->
      <NuxtLink to="sign-up">
        <button
          class="p-[10px] px-[24px] rounded-[16px] bg-[#A31D1D] shadow-[0px_0px_4px_rgba(0,0,0,0.50)] 
           text-[#ECDCBF] text-center font-[Poppins] text-[20px] font-medium leading-[150%] 
           tracking-[-0.304px] cursor-pointer transition duration-300 ease-in-out py-3 
           hover:bg-[#6D1313] hover:shadow-lg hover:rounded-[50px]"
        >
          Sign up
        </button>
      </NuxtLink>
    </div>

    <div v-else class="flex items-center space-x-4">
      <!-- Logout Button -->
      <button
        @click="handleLogout"
        class="p-[12px] px-[16px] text-[#A31D1D] text-center font-[Poppins] text-[20px] font-medium leading-[150%] tracking-[-0.304px] cursor-pointer transition-all duration-300 hover:bg-orange-100 hover:rounded-full"
      >
        Logout
      </button>

      <div class="flex items-center justify-center gap-[10px]">
        <ProfileAvatar src="/images/profileimg.jpg" />
      </div>
      <!-- notifications -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-[28px] h-[28px] flex-shrink-0 fill-[#A31D1D] cursor-pointer"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M19.5819 2.8335C18.4295 2.8335 17.4985 3.76449 17.4985 4.91683V6.16683C12.7459 7.13037 9.16521 11.3361 9.16521 16.3752V18.0288C9.16521 20.9845 8.1561 23.8556 6.31365 26.1603L5.3436 27.3778C4.96599 27.8465 4.89438 28.491 5.15479 29.0314C5.41521 29.5718 5.96209 29.9168 6.56104 29.9168H32.6027C33.2017 29.9168 33.7485 29.5718 34.009 29.0314C34.2694 28.491 34.1978 27.8465 33.8202 27.3778L32.8501 26.1668C31.0077 23.8556 29.9985 20.9845 29.9985 18.0288V16.3752C29.9985 11.3361 26.4178 7.13037 21.6652 6.16683V4.91683C21.6652 3.76449 20.7342 2.8335 19.5819 2.8335ZM19.5819 9.0835C23.6118 9.0835 26.8735 12.3452 26.8735 16.3752V18.0288C26.8735 21.1473 27.7785 24.1877 29.4582 26.7918H9.70558C11.3853 24.1877 12.2902 21.1473 12.2902 18.0288V16.3752C12.2902 12.3452 15.5519 9.0835 19.5819 9.0835ZM23.7485 32.0002H19.5819H15.4152C15.4152 33.1069 15.8514 34.1681 16.6327 34.9494C17.4139 35.7306 18.4751 36.1668 19.5819 36.1668C20.6886 36.1668 21.7498 35.7306 22.5311 34.9494C23.3123 34.1681 23.7485 33.1069 23.7485 32.0002Z"
          fill="#A31D1D"
        />
      </svg>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { useAuthStore } from '~/stores/auth';
import { useCartStore } from '~/stores/cart';
import ProfileAvatar from './profileAvatar.vue';

const searchText = ref('');
const authStore = useAuthStore();
const { logout } = useAuth();
const cartStore = useCartStore();

const isAuthenticated = computed(() => authStore.isAuthenticated);
const cartItemCount = computed(() => cartStore.totalItems);

const clearInput = () => {
  searchText.value = '';
};

const handleLogout = () => {
  logout();
};
</script>
