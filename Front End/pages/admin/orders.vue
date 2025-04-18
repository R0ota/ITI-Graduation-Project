<script setup>
definePageMeta({
  layout: "admin",
});

import { ref, computed, onMounted } from "vue";
import { getBaseURL } from "~/composables/helpers";

const orders = ref([]); // This will store the data fetched from the backend

// Fetch orders from the backend
const fetchOrders = async (token) => {
  try {
    const response = await fetch(`${getBaseURL()}/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }); // Replace with your backend endpoint
    if (response.ok) {
      const data = await response.json();
      orders.value = data.data; // Assuming the response contains an "orders" array
    } else {
      console.error("Failed to fetch orders");
    }
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};

onMounted(() => {
  const token = localStorage.getItem("auth_token");
  fetchOrders(token); // Fetch orders when the component is mounted
});

const statusClass = (status) => {
  switch (status) {
    case "Reviewing":
      return "bg-[#E2E2E2] text-[#878787]";
    case "Printing":
      return "bg-[#BEDAFF] text-[#0045BD]";
    case "Rejected":
      return "bg-[#FFBFBC] text-[#D60000]";
    case "Delivering":
      return "bg-[#FFE2AF] text-[#E17500]";
    case "Completed":
      return "bg-[#CCFFCC] text-[#01D001]";
    default:
      return "bg-gray-200 text-black";
  }
};

const headClasses = `flex-1/2 py-1 px-1.5 text-red-900 font-semibold font-['Poppins'] text-lg w-full`;

const bodyClasses = `flex-1/2 text-center py-1 px-1.5 text-black font-['Poppins'] font-medium text-sm w-full`;

const selectedRows = ref([]);
const selectAll = ref(false);

const isSelect = computed(() => selectedRows.value.length > 0);

const toggleSelect = (id) => {
  if (selectedRows.value.includes(id)) {
    selectedRows.value = selectedRows.value.filter((i) => i !== id);
  } else {
    selectedRows.value.push(id);
  }
};

const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedRows.value = [];
  } else {
    selectedRows.value = orders.value.map((order) => order.id);
  }
  selectAll.value = !selectAll.value;
};

const deleteOrder = async (id) => {
  try {
    const token = localStorage.getItem("auth-token");
    const response = await fetch(`${getBaseURL()}/orders/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }); // Replace with your delete endpoint
    if (response.ok) {
      orders.value = orders.value.filter((order) => order.id !== id);
      selectedRows.value = selectedRows.value.filter((i) => i !== id);
    } else {
      console.error("Failed to delete order");
    }
  } catch (error) {
    console.error("Error deleting order:", error);
  }
};

const deleteAll = async () => {
  try {
    // const response = await fetch("/api/orders", { method: 'DELETE' }); // Replace with your bulk delete endpoint
    // if (response.ok) {
    //   orders.value = [];
    //   selectedRows.value = [];
    //   selectAll.value = false;
    // } else {
    //   console.error("Failed to delete selected orders");
    // }
  } catch (error) {
    console.error("Error deleting selected orders:", error);
  }
};

const updateStatus = async (orderId, newStatus) => {
  try {
    const token = localStorage.getItem("auth_token");
    console.log("token", token);
    const response = await fetch(`${getBaseURL()}/orders/${orderId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: newStatus }),
    }); // Replace with your status update endpoint

    if (response.ok) {
      const updatedOrder = await response.json();
      const order = orders.value.find((order) => order.id === orderId);
      if (order) {
        order.status = updatedOrder.status; // Update the status locally
      }
    } else {
      console.error("Failed to update status");
    }
  } catch (error) {
    console.error("Error updating status:", error);
  }
};

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date
    .toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace(",", "");
};
</script>

<template>
  <div class="flex flex-col gap-8 m-[30px] ml-[250px] fixed w-[77%]">
    <!-- header -->
    <div class="flex items-center justify-between w-full">
      <AdminTitle route="Orders" />
      <div class="w-[40%]">
        <Search />
      </div>
    </div>

    <!-- table data -->
    <table class="flex flex-col gap-4 w-full">
      <thead>
        <tr
          class="flex items-center justify-between gap-2 py-2 border-b-2 border-red-800"
        >
          <!-- select icon -->
          <!-- <th>
            <i
              @click="toggleSelectAll"
              class="text-black w-4 h-4 cursor-pointer"
              :class="
                isSelect
                  ? 'fa-solid fa-square-check'
                  : 'fa-regular fa-square-full'
              "
            >
            </i>
          </th> -->
          <th :class="headClasses">Order ID</th>
          <th :class="headClasses">Username</th>
          <th :class="headClasses">Total Price</th>
          <th :class="headClasses">Shipping Price</th>
          <th :class="headClasses">Total Cost</th>
          <th :class="headClasses">Number Of Items</th>
          <th :class="headClasses">Order Date</th>
          <th :class="headClasses">ٍStatus</th>
          <!-- <th :class="headClasses">Action</th> -->
          <!-- delete all -->
          <th class="w-6 h-6 text-white py-1 px-1.5">
            <i
              v-if="isSelect"
              @click="deleteAll"
              class="fa-solid fa-trash text-red-800 cursor-pointer"
            ></i>
          </th>
        </tr>
      </thead>

      <tbody class="w-full">
        <tr
          v-for="order in orders"
          :key="order.id"
          class="py-1 flex items-center gap-2 justify-between w-full"
        >
          <!-- check icon -->
          <!-- <td>
            <i
              @click="toggleSelect(order.id)"
              class="text-black w-4 h-4 cursor-pointer"
              :class="
                selectedRows.includes(order.id)
                  ? 'fa-solid fa-square-check'
                  : 'fa-regular fa-square-full'
              "
            ></i>
          </td> -->
          <td
            class="['flex-1/2 text-center py-1 px-1.5 text-black font-['Poppins'] font-medium text-sm w-full', 'max-w-[500px] overflow-hidden truncate']"
          >
            #{{ order._id }}
          </td>
          <td :class="bodyClasses">{{ order.username }}</td>
          <td :class="bodyClasses">
            {{ order.total }} <span class="text-red-900">EGP</span>
          </td>
          <td :class="bodyClasses">
            {{ order.shippingPrice }} <span class="text-red-900">EGP</span>
          </td>
          <td :class="bodyClasses">
            {{ order.total + order.shippingPrice }} <span class="text-red-900">EGP</span>
          </td>
          <td :class="bodyClasses">{{ order.quantity }}</td>
          <td :class="bodyClasses">{{ formatDate(order.date) }}</td>
          <td class="flex-1/2 text-center px-2 py-1">
            <!-- span state -->
            <span
              v-if="
                !['Printing', 'Delivering', 'Completed', 'Pending'].includes(
                  order.status
                )
              "
              class="flex-1/2 text-center flex gap-1 items-center rounded-[20px] justify-center font-['Poppins'] font-medium text-sm px-2 py-1"
              :class="statusClass(order.status)"
            >
              {{ order.status }}
            </span>

            <!-- dropdown -->
            <select
              v-else
              v-model="order.status"
              @change="updateStatus(order._id, order.status)"
              :class="[
                'border-none rounded-[20px] text-sm px-2 py-1',
                statusClass(order.status),
              ]"
            >
              <option value="Pending">Pending</option>
              <option value="Printing">Printing</option>
              <option value="Delivering">Delivering</option>
              <option value="Completed">Completed</option>
            </select>
          </td>
          <!-- action btns-->
          <!-- <td class="flex-1/2 py-1 flex justify-center items-left gap-2">
            <button
              v-if="
                order.status === 'Reviewing' ||
                order.status === 'Printing' ||
                order.status === 'Delivering' ||
                order.status === 'Completed'
              "
              @click="
                updateStatus(order.id, 'Printing');
                order.approved = true;
              "
              class="bg-green-200 text-green-600 text-sm px-2 py-1 text-center rounded-[20px] cursor-pointer"
            >
              Approve
            </button>

            <button
              v-if="order.status === 'Reviewing' || order.status === 'Rejected'"
              @click="
                updateStatus(order.id, 'Rejected');
                order.rejected = true;
              "
              class="bg-[#FFBFBC] text-[#D60000] font-['Poppins'] font-medium text-sm px-2 py-1 text-center rounded-[20px] cursor-pointer"
            >
              Reject
            </button>
          </td> -->
          <!-- delete row -->
          <!-- <td class="flex-1">
            <i
              @click="deleteOrder(order.id)"
              class="fa-solid fa-trash text-red-800 cursor-pointer"
            ></i>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
