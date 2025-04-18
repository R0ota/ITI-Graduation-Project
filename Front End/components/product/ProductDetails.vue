<template>
  <div
    class="lg:w-full w-90 flex lg:flex-row flex-col lg:justify-between  justify-start lg:gap-10 gap-6  pt-10 pb-10"
  >
    <!-- Product Gallery -->
    <ProductGallery
      :product="currentProduct"
      :selected-color="selectedColor"
      @image-selected="onImageSelected"
    />

    <!-- Product info container -->
    <div
      class="lg:w-200 w-88 inline-flex flex-col justify-start items-start gap-4"
    >
      <div
        class="w-full lg:border-b-2 border-b-1 border-red-800 lg:gap-4 gap-3 lg:pb-6 pb-5 inline-flex flex-col justify-start items-start"
      >
        <!-- title -->
        <p
          class="self-stretch justify-start text-red-800 lg:text-3xl text-2xl font-bold lg:leading-[48px] leading-10"
        >
          {{currentProduct.title}}
        </p>
        <!-- model selection -->
        <select
          placeholder="Choose the model you want"
          class="w-full cursor-pointer text-red-800 lg:px-6 px-5 lg:py-3.5 py-3 bg-yellow-50 lg:rounded-2xl rounded-xl outline-[1.50px] outline-offset-[-1.50px] outline-red-800 inline-flex justify-between items-center"
        >
          <option value="" disabled selected hidden>
            Choose the model you want
          </option>
          <option value="1">text-1</option>
          <option value="2">text-2</option>
          <option value="3">text-3</option>
        </select>
        <!-- type -->
        <!-- <ProductInfo title="Type">
          <ProductInfoButton info="type1" />
          <ProductInfoButton info="type2" />
          <ProductInfoButton info="type3" />
          <ProductInfoButton info="type4" />
        </ProductInfo> -->
        <!-- size -->
        <ProductInfo title="Size"
          ><ProductInfoButton info="small" />
          <ProductInfoButton info="large" />
          <ProductInfoButton info="small" />
          <ProductInfoButton info="large" />
        </ProductInfo>
        <!-- color -->
        <ProductInfo title="Color">
          <ProductColor color="red-800" />
          <ProductColor color="yellow-50" />
          <ProductColor color="red-200" />
        </ProductInfo>
      </div>
      <!-- price / button -->
      <!-- <ProductAddToCart /> -->
      <ProductAddToCart
        :price="currentProduct.price"
        :in-stock="currentItemInStock"
        :show-message="showAddedMessage"
        @add-to-cart="addToCart"
      />
    </div>

    <!-- <ProductInfo
          :product="currentProduct"
          :is-in-wishlist="isInWishlist"
          :in-stock="currentItemInStock"
          @toggle-wishlist="toggleWishlist"
        /> -->

    <!-- Product options -->
    <!-- <div class="mb-6">
        <h3 class="text-lg font-medium mb-2">Colors</h3>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="color in currentProduct.colors"
            :key="color.color"
            @click="selectedColor = color"
            :class="[
                'border rounded-md p-2 transition',
                selectedColor && selectedColor.color === color.color
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-300 hover:border-gray-500'
              ]"
            :disabled="color.stock <= 0"
          >
            <div class="flex items-center">
              <div
                class="w-5 h-5 rounded-full mr-2"
                :style="{ backgroundColor: color.color }"
              ></div>
              <span>{{ color.color }}</span>
              <span v-if="color.stock <= 0" class="text-xs text-red-500 ml-1"
                >(Out of stock)</span
              >
            </div>
          </button>
        </div>
      </div> -->

    <!-- Quantity selector -->
    <!-- <ProductQuantity
        v-model="quantity"
        :in-stock="currentItemInStock"
        :max-quantity="selectedColor ? selectedColor.stock : 0"
      /> -->

    <!-- Add to cart -->
  </div>

  <!-- Product features -->
  <ProductFeatures
    :features="currentProduct.features || [currentProduct.description, currentProduct.category]"
  />
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useCartStore } from '~/stores/cart';
import { useWishlistStore } from '~/stores/wishlist';

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  isInWishlist: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['toggle-wishlist']);

const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

// States
const quantity = ref(1);
const showAddedMessage = ref(false);
const selectedColor = ref(null);
const selectedImage = ref('');

// Computed property for current product with fallback to dummy object
const currentProduct = computed(() => {
  return props.product || {
    name: '',
    price: 0,
    SKU: '',
    category: '',
    description: '',
    colors: [],
    title: '',
  };
});

// Check if the current configuration is in stock
const currentItemInStock = computed(() => {
  if (!currentProduct.value) return false;

  return true;
});


// Get available images based on selected color
const availableImages = computed(() => {
  if (selectedColor.value && selectedColor.value.images && selectedColor.value.images.length > 0) {
    return selectedColor.value.images;
  }

  // Default: try to get featured image from first color with images
  for (const color of currentProduct.value.colors) {
    if (color.images && color.images.length > 0) {
      return color.images;
    }
  }

  return [];
});

// Handle image selection from gallery
const onImageSelected = (image) => {
  selectedImage.value = image;
};

// Toggle product in wishlist
const toggleWishlist = () => {
  emit('toggle-wishlist');
};

// Add to cart function
const addToCart = () => {
  if (!currentProduct.value || !currentItemInStock.value) return;

  const selectedOptions = {};
  if (selectedColor.value) selectedOptions.color = selectedColor.value.color;

  const cartItem = {
    id: currentProduct.value._id, // MongoDB uses _id
    name: currentProduct.value.name,
    price: currentProduct.value.price,
    image: currentProduct.value.image,
    quantity: quantity.value,
    options: selectedOptions,
    SKU: currentProduct.value.SKU
  };
  console.log('cartItem', cartItem);

  cartStore.addItem(cartItem, quantity.value);

  showAddedMessage.value = true;

  setTimeout(() => {
    showAddedMessage.value = false;
  }, 3000);
};

// Initialize default selected color when product changes
watch(() => currentProduct.value, () => {
  if (currentProduct.value && currentProduct.value.colors?.length > 0) {
    // Find first color with stock
    const firstAvailableColor = currentProduct.value.colors.find(color => color.stock > 0);
    selectedColor.value = firstAvailableColor || currentProduct.value.colors[0];
  } else {
    selectedColor.value = null;
  }

  quantity.value = 1;
  showAddedMessage.value = false;
}, { immediate: true });
</script>
