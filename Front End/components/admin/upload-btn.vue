<script setup>
import { NuxtLink } from '#components';

    const prop = defineProps(['type', 'path'])
</script>
<template>
    <NuxtLink 
        :to=path
        class="bg-red-900 p-2 flex items-center rounded-2xl gap-1 cursor-pointer">
            <i class="fa-solid fa-plus text-orange-100 w-5 h-5"></i>
            <span class="text-orange-100 text-lg font-semibold font-['Poppins']">Upload {{ type }}</span>
        </NuxtLink>
</template>