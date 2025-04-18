<script setup>
import { ref, onMounted } from "vue";
import OrderPrevOrderSection from "~/components/order/prev-order-section.vue";
import EmptyOrder from "~/pages/order/empty-order.vue";
import { getBaseURL } from "~/composables/helpers";

definePageMeta({
  layout: "order",
});

const groupedOrders = ref({});
const loading = ref(true); // Add a loading state

onMounted(async () => {
  const token = localStorage.getItem("auth_token");

  try {
    const res = await fetch(
      `${getBaseURL()}/orders/my-orders?status=previous`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();

    // Group orders by "MM/YYYY"
    const groups = {};

    data.data.forEach((order) => {
      const date = new Date(order.orderDate);
      const key = `${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}/${date.getFullYear()}`;

      if (!groups[key]) {
        groups[key] = [];
      }

      groups[key].push(order);
    });

    groupedOrders.value = groups;
  } catch (err) {
    console.error("Failed to fetch orders", err);
  } finally {
    loading.value = false; // Set loading to false after data is fetched
  }
});
</script>

<template>
  <div
    class="lg:ml-[120px] ml-[25px] lg:mr-[120px] mr-[25px] pt-10 pb-20 flex flex-col justify-start lg:items-start sm:items-start md:items-start items-center lg:gap-10 gap-4"
  >
    <OrderNvegation />

    <div class="flex flex-col justify-start items-start gap-8 w-full">
      <!-- Show a loading state until data is fetched -->
      <div v-if="loading" class="w-full h-screen flex items-center justify-center">
        <div class="text-lg">Loading...</div> <!-- Or show a spinner here -->
      </div>

      <template v-else>
        <template v-if="Object.keys(groupedOrders).length">
          <template
            v-for="([dateKey, orders], index) in Object.entries(groupedOrders)"
            :key="dateKey"
          >
            <OrderPrevOrderSection :date="dateKey" :orders="orders" />

            <!-- Line between sections -->
            <div
              v-if="index < Object.keys(groupedOrders).length - 1"
              class="w-full h-px bg-red-800"
            ></div>
          </template>
        </template>

        <!-- If there are no orders, show EmptyOrder component -->
        <div v-else class="text-center w-full text-gray-500 lg:text-lg text-base mt-10">
          <EmptyOrder />
        </div>
      </template>
    </div>
  </div>
</template>
