<template>
  <div
    class="lg:gap-4 gap-3 lg:pb-6 pb-5 inline-flex flex-col justify-start items-start w-full"
  >
    <!-- Price display -->
    <p
      class=" justify-start text-red-800 lg:text-3xl text-2xl font-semibold lg:leading-10 leading-9"
    >
      ${{ price.toFixed(2) }}
    </p>

    <!-- Add to cart button -->
    <button
      @click="isAuthenticated && $emit('addToCart'); toggleState()"
      class="lg:text-lg text-sm font-bold font-['Poppins'] leading-relaxed cursor-pointer inline-flex w-full items-center justify-center gap-4 h-14 py-3.5 rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]"
      :disabled="!inStock"
      :class="[ 
    { 'opacity-50 cursor-not-allowed': !inStock },
    isAdded ? 'bg-yellow-50 text-red-800' : 'bg-red-800 text-yellow-50' 
  ]"
    >
      <div class="relative overflow-hidden w-6 h-6">
        <svg
          v-if="!isAdded"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.21564 3.1352C3.23311 3.16562 3.24577 3.19928 3.25258 3.23535L5.42097 14.3506C5.50711 14.7959 5.69369 15.2021 5.95531 15.5486C6.12745 15.7765 6.33207 15.9786 6.56195 16.149C6.81301 16.335 7.09418 16.4832 7.39605 16.5859C7.70927 16.6925 8.04476 16.75 8.392 16.75H20.5072C20.7925 16.75 21.0494 16.6356 21.2325 16.4511C21.408 16.2741 21.5158 16.0327 21.5158 15.7656C21.5158 15.2201 21.0661 14.7812 20.5072 14.7812H8.392C8.05088 14.7812 7.74325 14.6137 7.55929 14.3521C7.48263 14.2431 7.42745 14.1178 7.40026 13.9814L7.17333 12.8125H19.297C19.4456 12.8125 19.5922 12.8019 19.736 12.7812C20.9134 12.6124 21.8992 11.7741 22.2176 10.6264L23.9405 4.37969C24.2305 3.33789 23.4236 2.3125 22.3184 2.3125H5.04697C5.00849 2.23326 4.96558 2.15668 4.91859 2.08302C4.49858 1.42466 3.75208 1 2.9206 1H1.00855C0.449646 1 0 1.43887 0 1.98438C0 2.52988 0.449646 2.96875 1.00855 2.96875H2.9206C3.04656 2.96875 3.15762 3.03416 3.21564 3.1352ZM5.50042 4.3125H21.8844L20.2903 10.0918L20.29 10.0929C20.1791 10.4909 19.7881 10.8125 19.297 10.8125H6.76845L5.50042 4.3125ZM20.9946 18.7106C20.9721 18.6863 20.9489 18.6624 20.925 18.6391C20.7993 18.5164 20.6586 18.4116 20.5072 18.3263C20.2032 18.1549 19.8558 18.0625 19.4987 18.0625C18.9637 18.0625 18.4507 18.2699 18.0724 18.6391C18.0357 18.6749 18.0007 18.7119 17.9672 18.75C17.6549 19.1055 17.4816 19.5597 17.4816 20.0312C17.4816 20.5534 17.6941 21.0542 18.0724 21.4234C18.4507 21.7926 18.9637 22 19.4987 22C20.0337 22 20.5467 21.7926 20.925 21.4234C21.3033 21.0542 21.5158 20.5534 21.5158 20.0312C21.5158 19.5421 21.3293 19.0716 20.9946 18.7106ZM6.37498 18.3334C6.22746 18.4179 6.09123 18.5206 5.96974 18.6391C5.78244 18.8219 5.63386 19.039 5.53249 19.2778C5.43112 19.5167 5.37895 19.7727 5.37895 20.0312C5.37895 20.2898 5.43112 20.5458 5.53249 20.7847C5.63386 21.0235 5.78244 21.2406 5.96974 21.4234C6.15705 21.6062 6.37941 21.7512 6.62414 21.8501C6.86887 21.9491 7.13116 22 7.39605 22C7.66094 22 7.92324 21.9491 8.16796 21.8501C8.41269 21.7512 8.63506 21.6062 8.82236 21.4234C9.00967 21.2406 9.15825 21.0235 9.25961 20.7847C9.36098 20.5458 9.41316 20.2898 9.41316 20.0312C9.41316 19.7727 9.36098 19.5167 9.25961 19.2778C9.17803 19.0856 9.06587 18.9075 8.92755 18.75C8.894 18.7118 8.85892 18.6748 8.82236 18.6391C8.69401 18.5139 8.54919 18.4063 8.392 18.3192C8.3198 18.2792 8.24499 18.2435 8.16796 18.2124C7.92324 18.1134 7.66094 18.0625 7.39605 18.0625C7.13116 18.0625 6.86887 18.1134 6.62414 18.2124C6.53814 18.2471 6.4549 18.2876 6.37498 18.3334Z"
            fill="#ECDCBF"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_1276_12959)">
            <path
              d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
              fill="#A31D1D"
            />
          </g>
          <defs>
            <clipPath id="clip0_1276_12959">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span @click="handleAddToCart(product)">Add to Cart</span>

    </button>

    <!-- Added to cart message -->
    <div
      v-if="showMessage && isAuthenticated"
      class="mt-4 p-2 bg-green-100 text-green-800 rounded-md text-center"
    >
      Added to cart successfully!
    </div>
  </div>
</template>

<!-- <script setup>
defineProps({
  price: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  },
  showMessage: {
    type: Boolean,
    default: false
  }
});

defineEmits(['addToCart']);
function handleClick() {
  if (inStock) {
    $emit('addToCart');
    toggleState();
  }
}
const isAdded = ref(false);
const toggleState = () => {
  isAdded.value = !isAdded.value
</script> -->
<script setup>
defineProps({
  price: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  },
  showMessage: {
    type: Boolean,
    default: false
  }
});

defineEmits(['addToCart']);

import { useCartStore } from '@/stores/cart';
import { useAuthStore } from "~/stores/auth";
import { useRouter } from 'vue-router';

const router = useRouter();
const cart = useCartStore();
const authStore = useAuthStore();

const isAuthenticated = computed(() => authStore.isAuthenticated);

function handleAddToCart(product) {
  if (!isAuthenticated.value) {
    router.push('/login');
    return;
  } else{
    cart.addItem(product, 1);
  }
}
console.log(isAuthenticated.value, 'isAuthenticated.value');

const isAdded = ref(false);
const showErrorMessage = ref(false);

const toggleState = () => {

  if (!isAuthenticated.value) {
    showErrorMessage.value = true;
    setTimeout(() => (showErrorMessage.value = false), 2000);
    return;
  } else{
    isAdded.value = !isAdded.value;
  }
}
</script>
