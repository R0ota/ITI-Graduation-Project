<script setup>
const props = defineProps({
    catigory : String,
    img : String,
    id: String,
});

const emit = defineEmits(['categorySelected']);

const handleCardClick = () => {
    emit('categorySelected', { name: props.catigory, id: props.id });
};
</script>

<template>
  <div
    @click="handleCardClick"
    class="group relative flex flex-col justify-end items-center 
    lg:w-[341px] lg:h-[450px] 
    rounded-[40px] bg-[#d9d9d9] w-[247.935px] 
    h-[349px] cursor-pointer overflow-hidden"
  >
    <!-- Background image -->
    <div class="absolute inset-0 w-full h-full">
      <img
        :src="img"
        class="w-full h-full object-cover transition-all duration-300 group-hover:opacity-[0.5]"
      />
    </div>

    <!-- Button positioned at bottom center -->
    <div class="relative z-10 mb-8 lg:mb-10">
      <button
        class="flex justify-center items-center 
            lg:gap-[10px] lg:p-[8px_24px] lg:rounded-[16px] 
            bg-[#ECDCBF] text-red-900 cursor-pointer p-[5.817px_17.45px] 
            md:p-[8px_22px] rounded-[11.633px] group-hover:text-[#ECDCBF] group-hover:bg-red-900
            transition-all duration-500 group-hover:rounded-[40px]
            lg:text-[18px] font-bold leading-[150%] lg:tracking-[-0.304px] tracking-[-0.276px] text-[14.542px]"
      >
        {{catigory}}
      </button>
    </div>
  </div>
</template>
