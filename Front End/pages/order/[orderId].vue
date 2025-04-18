<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import SectionTitle from '~/components/section-title.vue';
import TrackBreak from '~/components/order/track-break.vue';
import OrderTrack from '~/components/order/order-track.vue';
import OrderProduct from '~/components/order/order-product.vue';
import OrderInvoice from '~/components/order/order-invoice.vue';
import CongratulationBlock from '~/components/congratulation-block.vue';

import fileSearch from '@/assets/file-search.png';
import print from '@/assets/print.png';
import deliveryTruck from '@/assets/delivery-truck.png';
import printFill from '@/assets/print-fill.png';
import deliveryTruckFill from '@/assets/delivery-truck-fill.png';
definePageMeta({
  layout: "order",
});

const route = useRoute();
const orderId = route.params.orderId;

const orderData = ref(null);
const loading = ref(true);
const error = ref(null);
const isFinalClicked = ref(false);
const congratulationBlock = ref(false);
const currentStep = ref(0);

const fetchOrderData = async () => {
  try {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`https://medical-system-yuw6.onrender.com/orders/${orderId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch order data');
    }

    const result = await response.json();
    orderData.value = result.data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchOrderData();
});

const goToNextStep = () => {
  if (currentStep.value < 2) {
    currentStep.value++;
  }
};

const handleFinalClick = () => {
  if (currentStep.value === 2) {
    isFinalClicked.value = true;
    congratulationBlock.value = true;
  }
};

watch(congratulationBlock, (newVal) => {
  document.body.classList.toggle('overflow-hidden', newVal);
});

const handleScroll = () => {
  congratulationBlock.value = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const formatDate = (isoDate) => {
  return new Date(isoDate).toLocaleDateString('en-GB');
};
const shippingCost = 250;
</script>

<template>
  <div
    class="relative lg:ml-[120px] ml-[25px] lg:mr-[120px] mr-[25px] pt-10 pb-20 flex flex-col justify-start items-start gap-10"
  >
    <SectionTitle title="Ongoing Order" />

    <div v-if="loading">Loading order details...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>

    <template v-if="orderData">
      <!-- Track Steps -->
      <div class="w-full flex items-center justify-center lg:gap-4 gap-1.5">
        <div @click="currentStep === 0 && goToNextStep()">
          <OrderTrack
            currentStatus="In Review"
            finalStatus="Reviewed"
            :currentImg="fileSearch"
            :finalImg="fileSearch"
            :isActive="currentStep === 0"
            :isDisabled="currentStep !== 0 && !isFinalClicked"
            :isDone="currentStep > 0"
            :isFinalClicked="isFinalClicked"
          />
        </div>

        <TrackBreak />
        <div @click="currentStep === 1 && goToNextStep()">
          <OrderTrack
            currentStatus="In Printing"
            finalStatus="Printing"
            :currentImg="print"
            :finalImg="printFill"
            :isActive="currentStep === 1"
            :isDisabled="currentStep !== 1 && !isFinalClicked"
            :isDone="currentStep > 1"
            :isFinalClicked="isFinalClicked"
          />
        </div>

        <TrackBreak />
        <div @click="handleFinalClick">
          <OrderTrack
            currentStatus="In Delivery"
            finalStatus="Delivery"
            :currentImg="deliveryTruck"
            :finalImg="deliveryTruckFill"
            :isActive="currentStep === 2"
            :isDisabled="currentStep !== 2"
            :isDone="isFinalClicked"
            :isFinalClicked="isFinalClicked"
          />
        </div>
      </div>

      <!-- Products & Invoice -->
      <div class="w-full flex flex-wrap justify-between lg:gap-0 gap-16">
        <!-- Products -->
        <div class="lg:w-[55%] w-[100%] flex flex-col gap-6">
          <OrderProduct
            v-for="item in orderData.items"
            :key="item._id"
            :title="item.product.title"
            :image="item.product.image"
            :price="item.price"
            :quantity="item.quantity"
          />
        </div>

        <!-- Invoice -->
        <div
          class="lg:w-[35%] px-4 py-10 bg-gradient-to-br from-red-800 to-red-950 rounded-[32px] flex flex-col justify-start items-start gap-6"
        >
          <div
            class="px-6 border-l-[6px] border-orange-100 inline-flex justify-center items-center gap-2.5"
          >
            <div class="text-orange-100 text-2xl font-bold font-['Poppins']">
              Order Invoice
            </div>
          </div>

          <div class="flex flex-col items-center gap-4 w-full">
            <div class="flex flex-col gap-2 w-full">
              <OrderInvoice
                info="Order Date"
                :detailes="formatDate(orderData.orderDate)"
              />
              <OrderInvoice info="Delivery Date" details="—" />
            </div>
            <div
              class="outline-[2px] outline-offset-[-1.50px] outline-white w-full"
            ></div>

            <div class="flex flex-col gap-2 w-full">
              <OrderInvoice
                info="Address Line 1"
                :detailes="`${orderData.deliveryAddress.city} - ${orderData.deliveryAddress.street}, Building ${orderData.deliveryAddress.bulding}`"
              />
              <OrderInvoice
                info="Phone Number"
                :detailes="orderData.deliveryAddress.phone"
              />
            </div>
            <div
              class="outline-[2px] outline-offset-[-1.50px] outline-white w-full"
            ></div>

            <div class="flex flex-col gap-2 w-full">
              <OrderInvoice
                :info="`${orderData.totalQuantity} items`"
                :detailes="`${orderData.totalPrice} EGP`"
              />
              <OrderInvoice
                :info="`${orderData.shippingLabel}:`"
                :detailes="`${orderData.shippingPrice} EGP`"
              />
            </div>
            <div
              class="outline-[2px] outline-offset-[-1.50px] outline-white w-full"
            ></div>

            <div
              class="p-4 bg-orange-100 inline-flex justify-between items-center w-full"
            >
              <p class="text-red-800 text-lg font-bold font-['Poppins']">
                Total Payment
              </p>
              <p class="text-red-800 text-lg font-bold font-['Poppins']">
                {{ (orderData.totalPrice + orderData.shippingPrice).toFixed(2) }}
                EGP
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>

  <!-- Congratulations -->
  <div :class="[congratulationBlock ? 'flex' : 'hidden']">
    <CongratulationBlock @scroll="handleScroll" />
  </div>
</template>
