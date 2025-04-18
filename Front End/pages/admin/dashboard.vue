<script setup>
definePageMeta({
  layout: "admin",
});


</script>

<template>
  <div class="flex flex-col gap-6 m-[30px]  w-[80%]">
    <!-- Section title -->
    <SectionTitle title="Dashboard" />
<div class="flex flex-col gap-6 ">
   <!--  Stat Cards Row -->
   <div class="flex gap-8 flex-wrap ">
      <AdminStatCard title="Visitors" :value="1250" />
      <!-- designs -->
      <AdminStatCard title="Designs" :value="320" />
      <AdminStatCard title="Total Selling" :value="300000" />
    </div>

    <!--  Revenue Chart + Top Products Row -->
    <div class="flex flex-wrap gap-12 ">
      <!-- <AdminRevenueCard /> -->
       <img src="/admin/dashboard.jpg" />
      <AdminTopSellingProducts />
    </div>
</div>
   
  </div>
</template>