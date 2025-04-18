<script setup>
definePageMeta({
  layout: "admin",
});

const isClicked = ref(false);
const congrats = ref(false);
</script>

<template>
  <div class="flex flex-col gap-8 m-[30px] ml-[250px] fixed w-[77%] ">
    <!-- header -->
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between w-[100%]">
        <SectionTitle title="Select Products" />
        <!-- confirmation btn -->
        <button
        @click="congrats = true"
          class="py-2.5 bg-red-800 rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer flex items-center justify-center w-[32%] text-yellow-50 text-lg font-bold font-['Poppins']"
        >
          Confirm Model Selection
        </button>
      </div>
      <p class="flex-1 text-black text-lg font-medium font-['Poppins']">
        Choose products that best complement the design
      </p>
    </div>
    <!-- template cards -->
    <div class="flex gap-6 flex-wrap">
    <AdminProductTemplate/>
    <AdminProductTemplate/>
    <AdminProductTemplate/>
    <AdminProductTemplate/>
    </div>
    <Paginiationcomponent/>
  </div>
  <CongratulationBlock v-if="congrats" @close="congrats = false" text="Design added successfully to the system."/>

</template>


