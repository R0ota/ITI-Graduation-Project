<template>
    <div class="flex flex-col  shrink-0  lg:gap-2 gap-1.5">
            <img :src=img class="lg:w-72 w-44 lg:h-64 h-44 lg:rounded-[42.35px]  rounded-[28.35px] bg-yellow-100"/>
            <div class="flex flex-col gap-0.5 lg:px-2 px-0.5" >
                <p class="text-red-900 lg:text-xl text-xs font-bold">{{ name }}</p>
                <p class="text-black lg:text-sm text-[10px] font-medium">{{ description }}</p>
            </div>
        </div>
</template>
<script setup>
    const props= defineProps (['img', 'name', 'description'])
</script>