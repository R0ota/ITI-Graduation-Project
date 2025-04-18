<template>
  <div class="flex gap-4 lg:w-full w-93">
    <div class="flex lg:gap-4 gap-2 w-full">
      <!-- product details -->
      <ProductData :item="item" />

      <!-- icrement & decrement -->
      <div class="flex lg:flex-row flex-col md:flex-col sm:flex-col justify-start items-center gap-1">
        <button
          class="w-10 h-10 flex items-center justify-center"
        >
          <img
            @click="decreaseQuantity(item)"
            src="~/assets/minus-solid.svg"
            class="lg:w-6 lg:h-6 w-5 h-5 cursor-pointer"
            :class="item.quantity <= 1 ? 'filter grayscale cursor-not-allowed opacity-50' : ''"
          />
        </button>
        <p class="text-center text-black lg:text-xl text-l font-medium">{{ count }}</p>
        <button class="w-10 h-10 flex items-center justify-center">
          <img
            @click="increaseQuantity(item)"
            src="~/assets/plus-solid.svg"
            class="lg:w-6 lg:h-6 w-5 h-5 cursor-pointer"
          />
        </button>
      </div>
    </div>

    <!-- button remove -->
    <div class="flex justify-center items-start">
      <button
        @click="$emit('remove', item.cartItemId)"
        class="w-8 h-8 flex justify-center items-center"
      >
        <img
          src="~/assets/circle-xmark.svg"
          class="w-6 h-6 cursor-pointer"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
});

const decreaseQuantity = (item) => {
  if (item.quantity <= 1) {
    emit('remove', item.id);
    return;
  }

  emit('decrease', item);
};

const increaseQuantity = (item) => {
  emit('increase', item);
};

const emit = defineEmits(['remove', 'increase', 'decrease']);
</script>
