<!-- <template>
  <div class="mb-6">
    <label
      for="quantity"
      class="block text-gray-700 font-medium mb-2"
    >Quantity</label>
    <div class="flex items-center">
      <button
        @click="decrementQuantity"
        class="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-l-md"
        :disabled="modelValue <= 1 || !inStock"
        :class="{ 'opacity-50 cursor-not-allowed': modelValue <= 1 || !inStock }"
      >
        <span class="text-xl">-</span>
      </button>
      <input
        type="number"
        id="quantity"
        :value="modelValue"
        @input="updateQuantity($event)"
        min="1"
        max="99"
        class="w-16 h-10 border-y border-gray-200 text-center text-lg"
        :disabled="!inStock"
      />
      <button
        @click="incrementQuantity"
        class="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-r-md"
        :disabled="!inStock"
        :class="{ 'opacity-50 cursor-not-allowed': !inStock }"
      >
        <span class="text-xl">+</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    default: 1
  },
  inStock: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['update:modelValue']);

const updateQuantity = (event) => {
  const value = parseInt(event.target.value);
  if (!isNaN(value) && value >= 1) {
    emit('update:modelValue', value);
  }
};

const incrementQuantity = () => {
  if (props.inStock) {
    emit('update:modelValue', props.modelValue + 1);
  }
};

const decrementQuantity = () => {
  if (props.modelValue > 1 && props.inStock) {
    emit('update:modelValue', props.modelValue - 1);
  }
};
</script>

<style scoped>
/* Remove number input arrows */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style> -->
<template>hello2</template>
