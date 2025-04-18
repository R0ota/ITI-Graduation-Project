<template>
  <div
    class="inline-flex lg:flex-row flex-col-reverse justify-start  items-start gap-6 w-full"
  >
    <div
      v-if="productImages.length > 0"
      class="w-20 inline-flex lg:flex-col flex-row gap-5"
    >
      <div
        v-for="(image, index) in productImages"
        :key="index"
        @click="selectImage(index)"
        class="h-20 w-20 lg:rounded-3xl rounded-2xl transition-all duration-200 ease-in-out cursor-pointer"
        :class="selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200'"
      >
        <img
          :src="image"
          :alt="`${product.name} - Image ${index + 1}`"
          class="h-20 w-20 lg:rounded-3xl rounded-2xl"
        />
      </div>
    </div>
    <!-- Main image -->

    <img
      :src="selectedImage"
      :alt="product.name"
      class="lg:w-96 w-80 bg-gray-300 self-stretch rounded-[40px]"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['imageSelected']);

const selectedImageIndex = ref(0);

// Computed property to handle nested product images
const productImages = computed(() => {
  if (!props.product) return [];

  // Check for images in product.colors structure
  if (props.product.colors?.[0]?.images?.length > 0) {
    return props.product.colors[0].images.map(img => img.url);
  }

  // Fallback to original image property
  if (props.product.images && props.product.images.length > 0) {
    return props.product.images;
  }

  // Fallback to single image if available
  if (props.product.image) {
    return [props.product.image];
  }

  return [];
});

// Get the selected image
const selectedImage = computed(() => {
  if (productImages.value.length > 0) {
    return productImages.value[selectedImageIndex.value];
  }
  return '';
});

// Reset selected image when product changes
watch(() => props.product, () => {
  selectedImageIndex.value = 0;
}, { immediate: true });

// Method to select an image
const selectImage = (index) => {
  selectedImageIndex.value = index;
  emit('imageSelected', productImages.value[index]);
};
</script>

<!-- Thumbnail gallery - vertical -->
<!-- <div
      v-if="productImages.length > 0"
      class="flex flex-col space-y-2 overflow-y-auto py-2 max-h-96 w-20"
    >
      <button
        v-for="(image, index) in productImages"
        :key="index"
        @click="selectImage(index)"
        class="flex-shrink-0 w-16 h-16 border-2 rounded-md overflow-hidden transition-all duration-200 ease-in-out"
        :class="selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200'"
      >
        <img
          :src="image"
          :alt="`${product.name} - Image ${index + 1}`"
          class="w-full h-full object-cover"
        />
      </button>
    </div> -->
