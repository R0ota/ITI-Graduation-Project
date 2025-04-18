<template>
  <div class="flex lg:gap-6 gap-1 lg:w-full items-start w-[100%]">
    <!-- <ProductData item.image=""/> -->

    <div class="flex lg:gap-6 gap-2 w-full">
      <!-- Product Image -->
      <img
        :src="image"
        alt="Product Image"
        class="lg:w-36 w-28 lg:h-36 h-28 object-cover bg-[#CDB17E] rounded-2xl"
      />

      <!-- Product Info -->
      <div class="flex flex-col justify-between py-1 w-full">
        <div class="flex flex-col lg:gap-1 gap-0.5">
          <p class="text-red-800 lg:text-xl text-sm font-bold">
            {{ title }}
          </p>
          <!-- Optional placeholders if needed -->
          <p class="text-black lg:text-sm text-xs font-medium">
            Type: N/A
          </p>
          <p class="text-black lg:text-sm text-xs font-medium">
            Size: N/A
          </p>
        </div>
        <p class="text-black lg:text-lg text-sm font-bold">
          Price: {{ formatPrice(price) }} EGP
        </p>
      </div>
    </div>

    <!-- Quantity & Total Price -->
    <div class="flex flex-col gap-2 w-[45%]">
      <div class="flex lg:flex-row flex-col justify-between items-center w-full">
        <p class="text-red-800 lg:text-xl text-sm font-extrabold">Quantity</p>
        <p class="text-black text-sm font-semibold">{{ quantity }}</p>
      </div>
      <div class="flex lg:flex-row flex-col justify-between items-center w-full">
        <p class="text-red-800 lg:text-2xl text-sm font-extrabold font-['Poppins']">
          Total Price
        </p>
        <p class="text-black text-sm font-semibold text-right">
          {{ formatPrice(price * quantity) }} EGP
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  price: Number,
  quantity: Number
});

const formatPrice = (num) => {
  return num.toFixed(2);
};
</script>
