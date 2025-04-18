<script setup>
defineProps({
  date: String,
  orders: Array
})
</script>

<template>
  <div class="flex flex-col justify-start items-start gap-4">
    <OrderDate :date="date" />

    <div class="flex flex-wrap lg:justify-start justify-center gap-8 items-center w-full">
      <OrderCard
        v-for="(order, i) in orders"
        :key="order._id + '-' + i"
        :orderId="order._id"
        :status="order.status"
        :quantity="order.totalQuantity"
        :date="new Date(order.orderDate).toLocaleDateString('en-GB')" 
        :price="`${order.totalPrice + order.shippingPrice}`"
        :image="order.items[0]?.product?.image || '/default.jpg'"
      />
    </div>
  </div>
</template>
