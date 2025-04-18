<script setup>
import { ref, onMounted } from "vue";
import OrderCard from "~/components/order/order-card.vue";
import EmptyOrder from "~/pages/order/empty-order.vue";
import { getBaseURL } from "~/composables/helpers";

definePageMeta({
  layout: "order",
});

const orders = ref([]);
const loading = ref(true); // Create loading state

onMounted(async () => {
  try {
    const token = localStorage.getItem('auth_token')
    const response = await fetch(
      `${getBaseURL()}/orders/my-orders?status=ongoing`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    orders.value = data.data;
  } catch (error) {
    console.error("Failed to fetch orders:", error);
  } finally {
    loading.value = false; // Set loading to false once the request is complete
  }
});
</script>

<template>
  <div
    class="lg:ml-[120px] ml-[25px] lg:mr-[120px] mr-[25px] pt-10 pb-20 flex flex-col justify-start lg:items-start sm:items-start md:items-start items-center lg:gap-10 gap-4"
  >
    <OrderNvegation />

    <!-- Show loading spinner while data is being fetched -->
    <div v-if="loading" class="w-full flex justify-center items-center mt-10">
      <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
        <path fill="currentColor" d="M4 12a8 8 0 0 1 16 0"></path>
      </svg>
    </div>

    <!-- Only show orders if they exist and loading is false -->
    <div
      class="flex flex-wrap lg:justify-start justify-center gap-8 items-center w-full"
    >
      <template v-if="orders.length > 0 && !loading">
        <OrderCard
          v-for="(order, index) in orders"
          :key="index"
          :orderId="order._id"
          :status="order.status"
          :quantity="order.totalQuantity"
          :date="new Date(order.orderDate).toLocaleDateString('en-GB')"
          :price="order.totalPrice + order.shippingPrice"
          :image="order.items[0].product.image"
        />
      </template>

      <!-- If there are NO orders, and data is loaded, show the fallback message -->
      <div v-else-if="!loading" class="text-center w-full text-gray-500 lg:text-lg text-base mt-10">
        <EmptyOrder />
      </div>
    </div>
  </div>
</template>
