<script setup>
import SectionTitle from '~/components/section-title.vue';

definePageMeta({
  layout: "market",
});

import { computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useProductsStore } from "~/stores/products";
import {usedesignedProductsStore} from "~/stores/designedProduct";
import { useSearchStore } from '~/stores/search';

const searchStore = useSearchStore();
const router = useRouter();
const productsStore = useProductsStore();

const designedProductsStore = usedesignedProductsStore();


// Fetch products on component mount
onMounted(async () => {
  await productsStore.fetchCategories();
  await productsStore.fetchProducts();
  await designedProductsStore.fetchdesignedProducts();

});
const filteredProducts = computed(() => {
  const query = searchStore.text?.toLowerCase().trim();

  if (!query) return productsStore.getAllProducts;

  const words = query.split(/\s+/);

  return productsStore.getAllProducts.filter(product => {
    const name = product.name?.toLowerCase() || '';

    return words.some(word => name.includes(word));
  });
});

// no result for seaarch
watch(filteredProducts, (newResults) => {
  if (searchStore.text && newResults.length === 0) {
    router.push('/status/search-fail');
  }
});

// Get all products from the store
const allDesignedProducts = computed(() => designedProductsStore.getAlldesignedProducts);

console.log("All Products:", allDesignedProducts.value);


// Get categories
const categories = computed(() => productsStore.getAllCategories);

// Handle category selection
const navigateToCategory = ({ name, id }) => {
  router.push({
    path: '/market-products',
    query: {
      category: name,
      categoryId: id
    }
  });
};
</script>

<template>
  <div
    class="lg:px-32 lg:mt-[40px] mt-[20px] lg:gap-[32px] flex flex-col gap-[24px] px-4 "
  >
    <SectionTitle title=" Market Categories" />

    <!-- Display Categories -->
    <div
      class="flex flex-row justify-center gap-6 flex-wrap self-stretch pb-10 lg:border-b-[1.50px] border-b-[0.50px] border-red-800"
    >
      <div v-for="category in categories" :key="category">
        <CardType
          :catigory="category.name"
          :img="category.image"
          :id="category._id"
          @category-selected="navigateToCategory"
        />
      </div>
    </div>

    <div class="flex flex-row justify-between lg:mt-4 m-2">
      <SectionTitle title="Best-selling products" />
      <NuxtLink to="/market-products" class="flex flex-row items-center gap-1">
        <p
          class="lg:text-[16px] tracking-[-0.304px] font-semibold text-black cursor-pointer"
        >
          more
        </p>
        <svg
          class="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M17.3261 8.74989C17.7871 9.21087 17.7871 9.95949 17.3261 10.4205L11.4257 16.3209C10.9647 
          16.7819 10.2161 16.7819 9.7551 16.3209C9.29413 15.86 9.29413 15.1113 9.7551 14.6504L14.8221 9.58333L9.75879 
          4.5163C9.29781 4.05533 9.29781 3.30671 9.75879 2.84573C10.2198 2.38476 10.9684 2.38476 11.4294 2.84573L17.3298 
          8.7462L17.3261 8.74989ZM4.34511 2.84942L10.2456 8.74989C10.7066 9.21087 10.7066 9.95949 10.2456 10.4205L4.34511 
          16.3209C3.88413 16.7819 3.13551 16.7819 2.67453 16.3209C2.21356 15.86 2.21356 15.1113 2.67453 14.6504L7.74156 
          9.58333L2.67822 4.5163C2.21725 4.05533 2.21725 3.30671 2.67822 2.84573C3.1392 2.38476 3.88782 2.38476 4.34879 
          2.84573L4.34511 2.84942Z"
            fill="black"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Display Best-Selling Products -->
    <div
      class="flex flex-row lg:flex-wrap lg:justify-start overflow-x-auto gap-4"
    >
      <div
        v-for="product in allDesignedProducts.slice(0, 4)"
        :key="product._id"
        v-bind="product"
        class="flex"
      >
        <ProductCard
          :id="product._id"
          :title="product.title"
          :type="product.category"
          :description="product.description"
          :price="product.price"
          :image="product.image || product.thumbnail"
          currency="EGP"
        />
      </div>
    </div>
  </div>
</template>
