<script setup>
definePageMeta({
  layout: "market",
});

import { computed, onMounted, ref, watchEffect } from "vue";
import { useRoute } from 'vue-router';
import { usedesignedProductsStore } from "~/stores/designedProduct";
import PaginationComponent from "../components/paginiation.vue";

const route = useRoute();
const designedProductsStore = usedesignedProductsStore();
const categoryParam = computed(() => route.query.category || '');
const categoryIdParam = computed(() => route.query.categoryId || '');

const currentPage = ref(1);
const paginatedDesignedProducts = ref([]);
const itemsPerPage = 6;

// Fetch products from the store
onMounted(async () => {
  const res = await designedProductsStore.fetchdesignedProducts({ categoryId: categoryIdParam.value });
  console.log("Fetched Products 23:", res);
  paginatedDesignedProducts.value = res;
  console.log("Paginated Products:", paginatedDesignedProducts);
});

// Get all products from the store
const allDesignedProducts = computed(() => designedProductsStore.getAlldesignedProducts);

// Filter products by category if provided in URL
const filtereddesignedProducts = computed(() => {
  if (!allDesignedProducts.value || allDesignedProducts.value.length === 0) return [];


  if (!categoryParam.value) {
    return allDesignedProducts.value; // Return all products if no category filter
  }


  // Filter products by category
  return allDesignedProducts.value.filter(product => {
    const productCategory = "all"
    return productCategory === categoryParam.value.toLowerCase();
  });
});

// watchEffect(() => {
//   console.log("Category Filter:", categoryParam.value);
//   console.log("Filtered Products:", filtereddesignedProducts.value);
// });

const totalPages = computed(() => {
  if (!filtereddesignedProducts.value || filtereddesignedProducts.value.length === 0) return 1;
  return Math.ceil(filtereddesignedProducts.value.length / itemsPerPage);
});

// const paginatedDesignedProducts = computed(() => {
//   if (!filtereddesignedProducts.value || filtereddesignedProducts.value.length === 0) return [];
//   const start = (currentPage.value - 1) * itemsPerPage;
//   const end = start + itemsPerPage;
//   return filtereddesignedProducts.value.slice(start, end);
// });

// Format the category name for display
const formattedCategory = computed(() => {
  if (!categoryParam.value) return "All Products";
  // Capitalize first letter of each word
  return categoryParam.value
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});
</script>

<template>
  <div
    class="lg:px-32 lg:mt-[40px] mt-[20px] lg:gap-[32px] flex flex-col gap-[24px] px-4"
  >
    <div class="px-6 border-l-[6px] border-red-800 inline-flex items-center">
      <p
        class="justify-start text-red-800 lg:text-3xl text-xl font-bold leading-loose lg:leading-[48px]"
      >
        Market
        <span
          class="px-2 bg-red-800 inline-flex justify-center items-center text-white lg:text-2xl text-xl font-bold leading-9"
        >
          {{ formattedCategory }}
        </span>
      </p>
    </div>

    <!-- Display Paginated Products -->
    <div
      class="flex flex-row lg:flex-wrap lg:justify-start justify-center flex-wrap gap-3"
    >
      <div
        v-for="designproduct in paginatedDesignedProducts"
        :key="designproduct._id"
        class="flex"
      >
        <!-- <ProductCard
          :id="designproduct?.product._id"
          :name="designproduct?.product.name"
          :type="designproduct?.product.category"
          :price="designproduct?.product.price"
          :description="designproduct?.product.description"
          :image="designproductproduct.image || product.thumbnail"
          currency="EGP"
        /> -->

        <ProductCard
          :id="designproduct?._id"
          :title="designproduct?.title"
          :price="designproduct?.price"
          :description="designproduct?.description"
          :image="designproduct?.image"
          currency="EGP"
        />
      </div>
    </div>

    <!-- Include Pagination Component -->
    <PaginationComponent
      class="mt-12 mb-12 lg:mb-0"
      v-model:currentPage="currentPage"
      :totalPages="totalPages"
    />
  </div>
</template>
