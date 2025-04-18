<script setup>
definePageMeta({ layout: 'market' });

import { computed, ref } from 'vue';
import { useWishlistStore } from '~/stores/wishlist';
import { useSearchStore } from '~/stores/search';

const wishlistStore = useWishlistStore();
const searchStore = useSearchStore();

const currentPage = ref(1);
const itemsPerPage = 6;

const filteredFavorites = computed(() => {
  const query = searchStore.text?.toLowerCase().trim();
  if (!query) return wishlistStore.items;

  const words = query.split(/\s+/);
  return wishlistStore.items.filter(product => {
    const name = product.name?.toLowerCase() || "";
    return words.every(word => name.includes(word));
  });
});

const totalPages = computed(() =>
  Math.ceil(filteredFavorites.value.length / itemsPerPage) || 1
);

const paginatedFavorites = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredFavorites.value.slice(start, start + itemsPerPage);
});
</script>

<template>
  <!-- Empty Wishlist Section -->

  <div
    v-if="filteredFavorites.length === 0"
    class="w-full h-screen flex items-center justify-center"
  >
    <div class="flex flex-col items-center justify-center gap-4">
      <img src="~/assets/empty-fav.jpg" class="lg:w-48 w-32 lg:h-48 h-32" />

      <div class="flex flex-col items-center justify-center lg:gap-1 gap-2">
        <p class="text-black lg:text-xl text-sm font-medium leading-loose">
          Your favorites list is empty.
        </p>
        <NuxtLink
          to="/market"
          class="cursor-pointer lg:px-6 px-3.5 lg:py-2 py-[5px] text-red-800 lg:text-lg text-xs font-bold leading-relaxed"
        >
          Go Shopping
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- Wishlist Section -->
  <div
    v-else
    class="lg:mx-[130px] mx-[61px] mt-[40px] flex flex-col gap-[24px]"
  >
    <div class="px-6 border-l-[6px] border-red-800">
      <p class="text-red-800 lg:text-3xl text-xl font-bold">Favorite</p>
    </div>

    <div class="flex flex-wrap gap-4">
      <ProductCard
        v-for="product in paginatedFavorites"
        :key="product.id"
        v-bind="product"
      />
    </div>

    <PaginationComponent
      class="mt-12 mb-12 lg:mb-0"
      v-model:currentPage="currentPage"
      :totalPages="totalPages"
    />
  </div>
</template>
