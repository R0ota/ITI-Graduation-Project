<script setup>
 const congratulationBlock = ref(false);
const prop =defineProps (['text'])
 watch(congratulationBlock, (newVal) => {
  document.body.classList.toggle('overflow-hidden', newVal);
});

</script>

<template>
     <div class="w-full h-screen flex items-center justify-center left-0 top-0 absolute bg-zinc-600/70">
    <!-- block -->
    <div class="px-6 py-11 relative bg-orange-50 lg:rounded-[42.35px] rounded-[40px] flex flex-col justify-center items-center gap-6 lg:w-[40%]  w-[80%]">
      <!-- close btn -->
      <button
        @click="$emit('close')"
          >
          <img
          src="~/assets/circle-xmark.svg"
          class="absolute top-6 right-6  w-8 h-8 cursor-pointer"
        />
          </button>
      
      <div class="flex flex-col gap-4  items-center justify-centers w-96">
        <img src="~/assets/party-popper 1.png" class="lg:w-44 w-32 lg:h-44 h-32">
          <p class="text-red-800 lg:text-4xl text-2xl font-bold font-['Poppins']">Congratulation</p>
          <p class="text-black text-base text-center font-medium lg:w-full w-[70%]">{{ text }}</p> 
      </div>
      
    </div>
  </div>
</template>