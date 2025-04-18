<template>
    <div class="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-2xl w-[90%] max-w-lg relative">
        
        <!-- ❌ Close Button -->
        <button
          @click="$emit('cancel')"
          class="absolute top-3 right-3 text-gray-400 hover:text-red-600 text-xl font-bold focus:outline-none"
        >
          &times;
        </button>
  
        <h2 class="text-xl font-bold mb-4 text-red-700">Shipping Information</h2>
  
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- 🚚 Shipping Fields -->
          <div class="grid grid-cols-2 gap-4">
            <input v-model="form.fullName" type="text" placeholder="Full Name" required class="w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500" />
            <input v-model="form.phone" type="tel" placeholder="Phone Number" required class="w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500" />
            <input v-model="form.appartment" type="text" placeholder="Apartment" class="w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500" />
            <input v-model="form.floor" type="text" placeholder="Floor" class="w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500" />
            <input v-model="form.bulding" type="text" placeholder="Building" class="w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500" />
            <input v-model="form.street" type="text" placeholder="Street" class="w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500" />
            <input v-model="form.city" type="text" placeholder="City" required class="w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500" />
            <input v-model="form.zip" type="text" placeholder="ZIP Code" class="w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500" />
            <input v-model="form.country" type="text" placeholder="Country" required class="w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500" />
          </div>
  
          <!-- 💳 Payment Method -->
          <div>
            <h3 class="text-sm font-semibold text-gray-600 mb-2">Payment Method</h3>
            <div class="flex gap-4">
              <button
                type="button"
                @click="paymentMethod = 'cash'"
                :class="paymentMethod === 'cash' ? activeMethodClass : inactiveMethodClass"
              >
                💵 Cash
              </button>
              <button
                type="button"
                @click="paymentMethod = 'card'"
                :class="paymentMethod === 'card' ? activeMethodClass : inactiveMethodClass"
              >
                💳 Card
              </button>
            </div>
          </div>
  
          <!-- ✅ Submit -->
          <div class="mt-6 flex justify-end gap-3">
            <button
              type="button"
              @click="$emit('cancel')"
              class="text-red-600 hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  
  const emit = defineEmits(['submit', 'cancel']);
  
  const form = reactive({
    fullName: '',
    phone: '',
    appartment: '',
    floor: '',
    bulding: '',
    street: '',
    city: '',
    zip: '',
    country: '',
  });
  
  const paymentMethod = ref('cash');
  
  function submitForm() {
    emit('submit', {
      deliveryAddress: { ...form },
      paymentMethod: paymentMethod.value,
    });
  }
  
  // Styles for payment method buttons
  const activeMethodClass = 'px-4 py-2 border-2 border-red-700 rounded text-red-700 font-semibold bg-red-100';
  const inactiveMethodClass = 'px-4 py-2 border border-gray-300 rounded text-gray-600 hover:border-red-400 hover:text-red-600';
  </script>

  