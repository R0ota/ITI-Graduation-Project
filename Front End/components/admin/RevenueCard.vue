<template>
  <div
    class="px-6 py-4 bg-red-900/95 rounded-3xl flex flex-col items-start gap-4 w-[600px]"
  >
    <!-- Title and Value -->
    <div class="flex flex-col gap-2">
      <div class="text-yellow-50 text-sm font-normal">Total revenue</div>
      <div class="text-white text-2xl font-semibold">$240.8K</div>
    </div>

    <!-- Legend -->
    <div class="flex gap-6">
      <div class="flex items-center gap-2">
        <div class="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
        <div class="text-orange-100 text-xs font-medium">Expenses</div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
        <div class="text-orange-100 text-xs font-medium">Revenue</div>
      </div>
    </div>

    <!-- Y-Axis labels and horizontal lines -->
    <div class="flex flex-col gap-2 w-full">
      <div
        v-for="(label, index) in ['250K','200K','150K','100K','50K','25K','0K']"
        :key="index"
        class="flex items-center justify-between"
      >
        <div class="text-orange-100 text-xs w-10 text-right">{{ label }}</div>
        <div
          class="flex-1 h-px opacity-50  outline-[0.8px] outline-orange-100"
        ></div>
      </div>
    </div>

    <!-- Months labels -->
    <div class="flex justify-between w-[510px] mt-4">
      <span
        v-for="month in months"
        :key="month"
        class="text-orange-100 text-[10px] font-normal"
        >{{ month }}</span
      >
    </div>

    <!-- Chart mock background shapes -->
    <div class="relative mt-4">
      <div
        class="absolute top-0 w-full h-44 opacity-20 bg-gradient-to-b from-blue-400 to-blue-400/0"
      ></div>
      <div
        class="absolute top-0 w-full h-36 outline-1 outline-sky-500"
      ></div>
      <div
        class="absolute top-0 w-full h-56 opacity-20 bg-gradient-to-b from-green-600 to-green-600/0"
      ></div>
      <div
        class="absolute top-0 w-full h-56 outline-1 outline-green-600"
      ></div>
      <!-- Points -->
      <div
        class="absolute left-[80%] top-[20%] w-3 h-3 bg-orange-100 border border-green-600 rounded-full"
      ></div>
      <div
        class="absolute left-[60%] top-[50%] w-[5px] h-[5px] bg-green-600 rounded-full"
      ></div>
      <div
        class="absolute left-[30%] top-[60%] w-[5px] h-[5px] bg-sky-500 rounded-full"
      ></div>
    </div>
  </div>
</template>

<script setup>
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
</script>
