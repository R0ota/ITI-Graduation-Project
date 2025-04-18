<template>
  <section class="py-12">
    <div class="container mx-auto">
      <div class="flex flex-wrap gap-8">
        <div
          class="text-lg font-medium pb-4 border-b-2 border-blue-600 text-blue-600"
          aria-current="true"
        >
          Other Designs
        </div>
      </div>
      <div
        v-if="loading"
        class="flex justify-center items-center py-16"
      >
        <Spinner
          :size="60"
          label="Loading products..."
          :show-label="true"
        />
      </div>
      <div
        v-else-if="products.length === 0"
        class="text-center py-8"
      >
        <p class="text-gray-600">No other designs available.</p>
      </div>
      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <ProductCard
          v-for="product in products"
          :key="product._id"
          :id="product._id"
          :name="product.name"
          :type="product.category"
          :description="product.description"
          :price="product.price"
          :image="product.image || product.thumbnail"
          currency="EGP"
          @toggle-wishlist="$emit('toggle-wishlist', product.id)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  loading: Boolean,
  products: Array,
});
</script>
