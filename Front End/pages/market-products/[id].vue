<template>
  <div
    class="flex flex-col lg:justify-start justify-center  lg:items-start items-center lg:px-32 sm:px-8 px-4 md:px-12 "
  >
    <!-- Designed Product details -->
    <ProductDetails
      :product="fetchedDesignedProduct"
      :is-in-wishlist="isWishlisted"
      @toggle-wishlist="toggleWishlist"
    />

    <!-- Available in this design section -->
    <ProductAvailableInThisDesign
      :loading="loadingAvailable"
      :products="availableInThisDesign"
      @toggle-wishlist="toggleWishlist"
    />
    <div class="border-b-[2.50px] border-red-800"></div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "market",
});

import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import {usedesignedProductsStore} from "~/stores/designedProduct";
import { useWishlistStore } from '~/stores/wishlist';

const route = useRoute();
const designedProductId = computed(() => route.params.id);
const designedProductsStore = usedesignedProductsStore();
const wishlistStore = useWishlistStore();

// States
const loading = ref(false);
const error = ref(null);
const fetchedDesignedProduct = ref(null);
const availableInThisDesign = ref([]);
const loadingAvailable = ref(false);

const isWishlisted = computed(() =>
  wishlistStore.isInWishlist(fetchedDesignedProduct.value?.id)
);

// Toggle product in wishlist
const toggleWishlist = () => {
  if (!fetchedDesignedProduct.value) return;

  if (isWishlisted.value) {
    wishlistStore.removeFromWishlist(fetchedDesignedProduct.value.id);
  } else {
    wishlistStore.addToWishlist(fetchedDesignedProduct.value);
  }
};

// Get similar designed products from the same category
const fetchSimilarDesignedProducts = async () => {
  if (!fetchedDesignedProduct.value?.category) return;

  loadingAvailable.value = true;
  try {
    // Check if already loaded
    if (designedProductsStore.designedproducts.length === 0) {
      await designedProductsStore.fetchdesignedProducts();
    }

    // Filter similar ones
    const sameCategory = designedProductsStore.designedproducts.filter(
      designedProduct =>
        designedProduct.category === fetchedDesignedProduct.value.category &&
        designedProduct._id !== fetchedDesignedProduct.value._id
    );

    availableInThisDesign.value = sameCategory.slice(0, 4);
  } catch (err) {
    console.error('Error fetching similar designed products:', err);
    availableInThisDesign.value = [];
  } finally {
    loadingAvailable.value = false;
  }
};

onMounted(async () => {
  loading.value = true;
  error.value = null;

  try {
    fetchedDesignedProduct.value = await designedProductsStore.fetchdesignedProduct(
      designedProductId.value
    );

    if (!fetchedDesignedProduct.value) {
      error.value = 'Designed product not found.';
    } else {
      await fetchSimilarDesignedProducts();
    }
  } catch (err) {
    error.value = 'Failed to load designed product details.';
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped></style>
