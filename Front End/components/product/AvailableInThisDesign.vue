<template>
  <section
    class="py-8 lg:w-full w-90  lg:flex-wrap flex-wrap  inline-flex flex-col justify-start items-start gap-4"
  >
    <!-- <div class=""> -->
    <div class="w-full flex flex-row justify-between lg:mt-4 m-2">
      <div
        class="px-6 border-l-[6px] border-red-900 inline-flex justify-center items-center gap-2.5"
      >
        <p
          class="justify-start text-red-900 text-2xl font-semibold lg:leading-9 leading-normal"
          aria-current="true"
        >
          Available in this design
        </p>
      </div>
      <NuxtLink to="/market-products" class="flex flex-row items-center gap-1">
        <p
          class="lg:text-[16px] text-black tracking-[-0.304px] font-semibold cursor-pointer"
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

    <div v-if="loading" class="flex justify-center items-center py-16">
      <Spinner :size="60" label="Loading products..." :show-label="true" />
    </div>
    <div v-else-if="products.length === 0" class="text-center py-8">
      <p class="text-gray-600">No products available in this design.</p>
    </div>
    <div
      v-else
      class="flex flex-row lg:w-full w-80 lg:flex-wrap lg:justify-start  overflow-x-auto gap-4"
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
    <!-- </div> -->
  </section>
</template>

<script setup>
defineProps({
  loading: Boolean,
  products: Array,
});
</script>
