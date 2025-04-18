<script setup>
 const prop = defineProps ({
    route : String
 })
</script>
<template>
   
      <SectionTitle :title = route>
        <div class="flex items-center px-2 bg-red-900">
          <p class="text-white text-2xl font-bold font-['Poppins']">
            Management
          </p>
        </div>
      </SectionTitle>
       
     
    
</template>