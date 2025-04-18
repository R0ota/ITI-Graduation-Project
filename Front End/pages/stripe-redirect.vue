<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();
const status = route.query.status;

onMounted(() => {
  if (window.opener) {
    if (status === 'success') {
      window.opener.location.href = '/order/ongoing-order'; // or any page you want
    } else {
      window.opener.location.href = '/cart'; // optional
    }

    window.close(); // close the popup
  } else {
    // fallback if user opened directly
    router.push(status === 'success' ? '/order/ongoing-order' : '/cart');
  }
});
</script>

<template>
  <div class="flex items-center justify-center h-screen text-gray-600">
    <p>Finalizing your payment, please wait...</p>
  </div>
</template>
