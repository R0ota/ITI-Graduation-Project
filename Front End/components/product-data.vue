<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

console.log("Item:", props.item);
</script>

<template>
  <div class="flex lg:gap-6 gap-3 w-full">
    <img
      :src="item.image"
      class="lg:w-32 w-25 lg:h-32 h-25 rounded-2xl object-cover"
    />
    <div class="flex flex-col justify-start lg:h-32 h-25 py-1">
      <div class="flex flex-col lg:gap-1 gap-0.5">
        <p class="text-red-800 lg:text-lg text-sm font-bold leading-relaxed">
          {{ item.title }}
        </p>
        <p
          v-if="item.size"
          class="text-black lg:text-sm font-xs font-medium lg:leading-tight"
        >
          Size: {{ item.size }}
        </p>
      </div>
      <p class="text-black lg:text-sm font-xs font-medium lg:leading-tight">
        Quantity: {{ item.quantity }}
      </p>

      <p
        class="text-black lg:text-lg text-sm font-semibold leading-relaxed mt-4"
      >
        {{ item.price.toFixed(2) * item.quantity }} EGP
      </p>
    </div>
  </div>
</template>
