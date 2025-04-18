<template>
  <div
    class="w-112 p-6 bg-yellow-50 rounded-3xl  outline-2 outline-offset-[-2px] outline-red-800 flex flex-col gap-8"
  >
    <SectionTitle title="Top selling Products" />

    <!-- Product List -->
    <div class="flex flex-col gap-4">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="w-full inline-flex justify-start items-center gap-3"
      >
        <!-- Product Image Placeholder -->
        <div class="w-16 h-16 bg-neutral-500 rounded-2xl"></div>

        <!-- Info -->
        <div class="flex-1 py-1.5 flex justify-between items-center">
          <!-- Name & Category -->
          <div class="flex flex-col justify-between">
            <div class="text-red-800 text-base font-bold leading-normal">
              {{ product.name }}
            </div>
            <div class="text-black text-sm font-medium leading-tight">
              {{ product.category }}
            </div>
          </div>

          <!-- Total Selling -->
          <div class="w-20 flex flex-col justify-center items-start gap-1">
            <div class="text-red-800 text-sm font-bold">Total Selling</div>
            <div class="flex items-center gap-0.5">
              <span
                class="text-black text-sm font-semibold"
                >{{ product.total }}</span
              >
              <span class="text-black text-sm font-semibold">EGP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  { name: 'Product 1', category: 'Clothes', total: 16000 },
  { name: 'Product 2', category: 'Shoes', total: 16000 },
  { name: 'Product 3', category: 'Accessories', total: 16000 },
  { name: 'Product 4', category: 'Watches', total: 16000 },
  { name: 'Product 5', category: 'Hoodies', total: 16000 },
  { name: 'Product 6', category: 'T-shirts', total: 16000 },
]
</script>
