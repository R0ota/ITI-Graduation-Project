<template>
    <div class="w-88 h-72 px-4 py-8 bg-white rounded-[32px] flex flex-col gap-4 items-center ">
                <slot/>
                <div class="flex flex-col gap-2 items-center justify-center">
                    <p class="text-red-900 text-xl font-bold">{{ service }}</p>
                    <p class="w-85 text-black text-center text-lg font-medium">{{ description }}</p>
                </div>
            </div>
</template>
<script setup>
    const props= defineProps (['service', 'description'])
</script>