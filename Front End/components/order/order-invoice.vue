<script setup>  
    import { defineProps } from 'vue';
    const props= defineProps(["info", "detailes"])
</script>

<template>
     <div class="flex w-full justify-between">
              <p class="text-orange-100 text-lg font-semibold font-['Poppins']">{{ info }}</p>
              <p class="text-orange-100 text-lg font-medium font-['Poppins'] text-right">{{ detailes }}</p>
            </div>
</template>