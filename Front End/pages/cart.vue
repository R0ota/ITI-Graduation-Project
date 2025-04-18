<template>
  <!-- Empty Cart Section -->
  <div
    v-if="cartItems.length === 0"
    class="w-full h-screen flex items-center justify-center"
  >
    <div class="flex flex-col items-center justify-center gap-4">
      <img src="../assets/empty-cart.png" class="lg:w-48 w-32 lg:h-48 h-32" />

      <div class="flex flex-col items-center justify-center lg:gap-1 gap-2">
        <p class="text-black lg:text-xl text-sm font-medium leading-loose">
          The shopping cart is empty now.
        </p>
        <NuxtLink
          to="/market"
          class="cursor-pointer lg:px-6 px-3.5 lg:py-2 py-[5px] text-red-800 lg:text-lg text-xs font-bold leading-relaxed"
        >
          Go Shopping
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- Cart Section -->
  <div
    v-else
    class="lg:ml-[120px] ml-[20px] md:ml[70px] lg:mr-[120px] mr-[20px] md:mr[70px] pt-10 lg:pb-20 pb-14 flex flex-col lg:gap-8 gap-6 justify-start items-start"
  >
    <SectionTitle title="Cart" />

    <div class="flex lg:flex-row flex-col gap-8 w-full md:flex-row">
      <div
        class="flex flex-col lg:w-[650px] w-96 justify-start items-start lg:pb-0 pb-8 lg:border-none border-b-2 border-red-800"
      >
        <!-- Cart Items -->
        <CartItems
          :items="filteredCartItems"
          @remove="removeItem"
          @increase="increaseQuantity"
          @decrease="decreaseQuantity"
        />
      </div>

      <div class="flex flex-col items-center">
        <!-- Summary Section -->
        <CartSummary
          :total-items="totalItems"
          :total-price="totalPrice"
          @checkout="checkout"
        />
        <ShippingForm
          v-if="showShippingForm"
          @submit="handleShippingSubmit"
          @cancel="handleShippingCancel"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "market",
});

import { useCartStore } from "~/stores/cart";
import { ref } from "vue";
import ShippingForm from "~/components/order/ShippingForm.vue";

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.items);

import { useSearchStore } from '~/stores/search';
const searchStore = useSearchStore();

const filteredCartItems = computed(() => {
  const query = searchStore.text?.toLowerCase().trim();
  if (!query) return cartStore.items;

  const words = query.split(/\s+/);
  return cartStore.items.filter(item => {
    const name = item.name?.toLowerCase() || "";
    return words.every(word => name.includes(word));
  });
});


const totalPrice = computed(() => cartStore.totalPrice);
const totalItems = computed(() => cartStore.totalItems);

const showShippingForm = ref(false);
const shippingData = ref(null);

const checkout = (shipping) => {
  shippingData.value = {
    ...shippingData.value,
    shippingPrice: shipping.price,
    shippingLabel: shipping.label,
  };
  showShippingForm.value=true;
};

const handleShippingSubmit = async (data) => {
  showShippingForm.value = false;
  shippingData.value = {
    ...shippingData.value,
    ...data,
};

  //  Now send data to backend or pass into your store
  const response = await cartStore.createOrder(shippingData.value); // Modify this to accept address
  console.log("Order Response:", response);
  if (response?.data?.paymentMethod === "card" && response?.payment_link) {
    // Open Stripe Checkout in a new popup window
    const popupWidth = 600;
    const popupHeight = 800;

    // More accurate centering (accounts for browser window position & size)
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

    const width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width;

    const height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height;

    const left = dualScreenLeft + (width - popupWidth) / 2;
    const top = dualScreenTop + (height - popupHeight) / 2;

    const popupWindow = window.open(
      response.payment_link,
      "StripeCheckoutPopup",
      `scrollbars=yes, resizable=yes, width=${popupWidth}, height=${popupHeight}, top=${top}, left=${left}`
    );

    if (popupWindow) {
      // Optional: If you want to check if the popup was blocked, you can add an alert
      popupWindow.focus(); // Bring popup to the front
    } else {
      alert("Popup blocked! Please enable popups in your browser.");
    }
  } else {
    // Cash order placed successfully
    alert("Order placed successfully! Thank you ");
    cartStore.clearCart("local");
  }
};

const handleShippingCancel = () => {
  showShippingForm.value = false;
};

const removeItem = (id) => {
  cartStore.removeItem(id);
};

const increaseQuantity = (item) => {
  cartStore.addItem(item, 1);
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    cartStore.addItem(item, -1);
  }
};

// const checkout = () => {
//   alert("Proceeding to checkout... (Stripe payment integration)");
//   cartStore.createOrder();
//   cartStore.clearCart("local");
// };

console.log("Cart Items:", cartItems.value);
</script>
