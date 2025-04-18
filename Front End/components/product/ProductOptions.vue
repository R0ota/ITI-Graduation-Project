<template>
  <div>
    <!-- Color options -->
    <div v-if="hasColors" class="mb-6">
      <label class="block text-gray-700 font-medium mb-2">Color</label>
      <div class="flex flex-wrap gap-3">
        <button
          v-for="color in product.options.colors"
          :key="color.name"
          @click="selectColor(color)"
          class="color-option relative w-10 h-10 rounded-full border-2 transition-all duration-200"
          :class="[
            color.inStock ? 'cursor-pointer hover:scale-110' : 'cursor-not-allowed opacity-40',
            selectedColor && selectedColor.name === color.name ? 'border-blue-500 scale-110' : 'border-gray-300'
          ]"
          :disabled="!color.inStock"
          :title="color.name"
        >
          <span
            class="absolute inset-1 rounded-full"
            :style="{ backgroundColor: color.value }"
          ></span>
          <span
            v-if="selectedColor && selectedColor.name === color.name"
            class="absolute -top-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>

    <!-- Size options -->
    <div v-if="hasSizes" class="mb-6">
      <label class="block text-gray-700 font-medium mb-2">Size</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="size in product.options.sizes"
          :key="size.name"
          @click="selectSize(size)"
          class="size-option py-2 px-4 border rounded-md transition-all duration-200"
          :class="[
            size.inStock ? 'cursor-pointer hover:border-blue-500 hover:text-blue-500' : 'cursor-not-allowed opacity-40',
            selectedSize && selectedSize.name === size.name ? 'border-blue-500 bg-blue-50 text-blue-500' : 'border-gray-300 text-gray-700'
          ]"
          :disabled="!size.inStock"
        >
          {{ size.name }}
        </button>
      </div>
    </div>

    <!-- Storage options for electronics -->
    <div v-if="hasStorage" class="mb-6">
      <label class="block text-gray-700 font-medium mb-2">Storage</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="option in product.options.storage"
          :key="option.name"
          @click="selectStorage(option)"
          class="py-2 px-4 border rounded-md transition-all duration-200"
          :class="[
            option.inStock ? 'cursor-pointer hover:border-blue-500 hover:text-blue-500' : 'cursor-not-allowed opacity-40',
            selectedStorage && selectedStorage.name === option.name ? 'border-blue-500 bg-blue-50 text-blue-500' : 'border-gray-300 text-gray-700'
          ]"
          :disabled="!option.inStock"
        >
          {{ option.name }}
          {{ option.price > 0 ? `(+$${option.price.toFixed(2)})` : '' }}
        </button>
      </div>
    </div>

    <!-- Style options -->
    <div v-if="hasStyles" class="mb-6">
      <label class="block text-gray-700 font-medium mb-2">Style</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="style in product.options.styles"
          :key="style.name"
          @click="selectStyle(style)"
          class="py-2 px-4 border rounded-md transition-all duration-200"
          :class="[
            style.inStock ? 'cursor-pointer hover:border-blue-500 hover:text-blue-500' : 'cursor-not-allowed opacity-40',
            selectedStyle && selectedStyle.name === style.name ? 'border-blue-500 bg-blue-50 text-blue-500' : 'border-gray-300 text-gray-700'
          ]"
          :disabled="!style.inStock"
        >
          {{ style.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  selectedColor: {
    type: Object,
    default: null
  },
  selectedSize: {
    type: Object,
    default: null
  },
  selectedStorage: {
    type: Object,
    default: null
  },
  selectedStyle: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['update:selectedColor', 'update:selectedSize', 'update:selectedStorage', 'update:selectedStyle']);

// Check if product has various options
const hasColors = computed(() => {
  return props.product?.options?.colors?.length > 0;
});

const hasSizes = computed(() => {
  return props.product?.options?.sizes?.length > 0;
});

const hasStorage = computed(() => {
  return props.product?.options?.storage?.length > 0;
});

const hasStyles = computed(() => {
  return props.product?.options?.styles?.length > 0;
});

// Option selection methods
const selectColor = (color) => {
  if (!color.inStock) return;
  emit('update:selectedColor', color);
};

const selectSize = (size) => {
  if (!size.inStock) return;
  emit('update:selectedSize', size);
};

const selectStorage = (storage) => {
  if (!storage.inStock) return;
  emit('update:selectedStorage', storage);
};

const selectStyle = (style) => {
  if (!style.inStock) return;
  emit('update:selectedStyle', style);
};
</script>

<style scoped>
/* Color options styling */
.color-option {
  transition: all 0.2s ease-in-out;
}

.color-option:not(:disabled):hover {
  transform: scale(1.1);
  z-index: 5;
}
</style>
