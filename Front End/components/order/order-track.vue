
 <script setup>
import { defineProps } from "vue";

const props = defineProps({
  currentStatus : String,
  finalStatus : String,
  img : String,
  isActive : Boolean,
  isDisabled : Boolean,
  isDone : Boolean,
  isFinalClicked : Boolean,
  currentImg: String,
  finalImg: String,
});

const imgSrc = computed(() => {
  return props.isDisabled ? props.currentImg : props.finalImg;
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center lg:gap-2 gap-0.5 lg:w-28 w-22"
    :class="{ 'opacity-50': isDisabled && !isFinalClicked }"
  >
    <img :src="imgSrc" class="lg:w-14 lg:h-14 w-10 h-10" />

    <div class="flex lg:py-[1.5px] py-[1px] lg:gap-2 gap-1 items-center">
      <i
        v-if="isDone"
        class="fa-solid fa-circle-check text-red-800 "
      ></i>

      <i
        v-else-if="!isActive"
        
       class="fa-regular fa-circle text-red-800 ">
      </i>

      <i
        v-else
        class="fa-regular fa-circle-dot text-red-800 cursor-pointer"
      ></i>

      <p class="text-red-800 lg:text-base text-xs font-bold font-['Poppins'] w-full">
        {{ isDone ? finalStatus : currentStatus }}
      </p>
    </div>
  </div>
</template>

  