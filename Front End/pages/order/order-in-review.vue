<script setup>
import TrackBreak from "~/components/order/track-break.vue";
import fileSearch from "@/assets/file-search.png";
import print from "@/assets/print.png";
import deliveryTruck from "@/assets/delivery-truck.png";
import printFill from "@/assets/print-fill.png"
import deliveryTruckFill from "@/assets/delivery-truck-fill.png";
definePageMeta({
  layout: "order",
});

const currentStep = ref(0);

const goToNextStep = () => {
  if (currentStep.value < 2) {
    currentStep.value++;
  }
};

const isFinalClicked = ref(false);
const congratulationBlock = ref(false);
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
</script>

<template>
  <div
    class="relative lg:ml-[120px] ml-[25px] lg:mr-[120px] mr-[25px] pt-10 pb-20 flex flex-col justify-start items-start gap-10"
  >
    <SectionTitle title="Ongoing Order" />
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

    <div class="w-full flex flex-wrap justify-between lg:gap-0 gap-16">
      <div class="lg:w-[55%] w-[100%] flex flex-col gap-6">
        <OrderProduct />
        <OrderProduct />
        <OrderProduct />
        <OrderProduct />
      </div>

      <div
        class="lg:w-[35%] px-4 py-10 bg-gradient-to-br from-red-800 to-red-950 rounded-[32px] flex flex-col justify-start items-start gap-6"
      >
        <div
          class="px-6 border-l-[6px] border-orange-100 inline-flex justify-center items-center gap-2.5"
        >
          <div
            class="justify-start text-orange-100 text-2xl font-bold font-['Poppins']"
          >
            Order Invoice
          </div>
        </div>

        <div class="flex flex-col items-center gap-4 w-full">
          <div class="flex flex-col gap-2 w-full">
            <OrderInvoice info="Order Date" detailes="05/05/2025" />
            <OrderInvoice info="Delivery Date" details="25/05/2025" />
          </div>
          <!-- line break -->
          <div
            class="outline-[2px] outline-offset-[-1.50px] outline-white w-full"
          ></div>

          <div class="flex flex-col gap-2 w-full">
            <OrderInvoice
              info="Address Line 1"
              detailes="Port Said - Al-Ahya District, Building 14, Selim Al-Ansari Street"
            />
            <OrderInvoice info="Phone Number" details="+20120001662" />
          </div>
          <!-- line break -->
          <div
            class="outline-[2px] outline-offset-[-1.50px] outline-white w-full"
          ></div>

          <div class="flex flex-col gap-2 w-full">
            <OrderInvoice info="5 items" detailes="650 EGP" />
            <OrderInvoice info="Standard Shipping" details="250 EGP" />
          </div>
          <!-- line break -->
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
              900 EGP
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- congratulation block -->
   <div :class="[
    congratulationBlock ? 'flex' : 'hidden']">
    <CongratulationBlock  @scroll="handleScroll"/>
    </div>
 
</template>
