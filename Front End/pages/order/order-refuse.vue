<script setup>
    definePageMeta({
  layout: "order",
});
</script>
<template>
      <div
    class="lg:ml-[120px] ml-[25px] lg:mr-[120px] mr-[25px] pt-10 pb-20 flex flex-col justify-start items-start gap-10">
    <SectionTitle title="Ongoing Order" />
    <div class="w-full flex items-center justify-between px-48 py-4 bg-[#ECDCBF] border-b-2 border-black">
      <div class="flex flex-col gap-1 justify-center items-center w-full">
        <img src="~/assets/file-search-refuse.png">
        <div class="flex items-center gap-1">
          <i class="fa-regular fa-circle-dot text-red-800"></i>
          <p class="text-red-800 text-base font-bold font-['Poppins']">In Review</p>
        </div>
      </div>

      <p class="text-black text-lg font-medium font-['Poppins'] w-full">We are sorry, your order has ben refused, 
        please check your order details or contact support assistance</p>
    </div>
    </div>
</template>