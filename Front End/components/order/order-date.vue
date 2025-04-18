<script setup>
defineProps({
  date: String,
});
</script>
<template>
    <div class="flex gap-2 items-center">
                <i class="fa-solid fa-circle w-3 h-3 text-red-800"></i>
                <p class="text-red-800 text-lg font-semibold font-['Poppins']">{{date}}</p>
            </div>
    </template>