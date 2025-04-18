<script setup>
    
const isClicked = ref(false);
</script>

<template>
     <div
        class="flex flex-col gap-2 cursor-pointer"
        @click="isClicked = !isClicked"
      >
         <!-- overlay -->
        <div class="p-2.5 relative bg-orange-100 rounded-[32px] w-60 h-60">
          <!-- upload image -->
          <div
            v-if="isClicked"
            class="absolute h-60 w-full bg-white/50 rounded-[32px] backdrop-blur-[2px] top-0 left-0"
          >
            <div
              class="flex flex-col gap-2 absolute left-17 top-23 items-center justify-center"
            >
              <i class="fa-solid fa-circle-arrow-up text-red-900 fa-4x"></i>
              <p class="text-red-800 text-sm font-semibold font-['Poppins']">
                Upload Template
              </p>
            </div>
          </div>
          <!-- check icon -->
          <div class="w-6 h-6 absolute top-4 left-4">
            <i
              v-if="isClicked"
              class="fa-solid fa-circle-check text-red-800 w-8 h-8"
            ></i>
            <i v-else class="fa-regular fa-circle text-red-800 w-8 h-8"></i>
          </div>
          <!-- price -->
          <p
            v-if="isClicked"
            class="text-black text-base font-semibold font-['Poppins'] top-4 right-4 absolute"
          >
            500 EGP
          </p>
        </div>
        <!-- input price -->
        <input
          v-if="isClicked"
          @click.stop
          type="number"
          placeholder="Enter design price"
          class="no-spinner h-10 text-black text-sm font-['Poppins'] font-medium px-4 py-1 bg-orange-100 rounded-xl outline-[1.50px] outline-offset-[-1.50px] outline-red-800 placeholder:font-['Poppins'] placeholder:font-medium placeholder:text-stone-900/75 placeholder:text-sm"
          min="200"
          max="300"
        />
        <!-- range -->
        <p
          v-if="isClicked"
          class="px-2 text-neutral-950 text-xs font-['Poppins'] font-semibold"
        >
          Range 200 EGP - 300 EGP
        </p>
      </div>
</template>

<style scoped>
input.no-spinner::-webkit-inner-spin-button,
input.no-spinner::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>