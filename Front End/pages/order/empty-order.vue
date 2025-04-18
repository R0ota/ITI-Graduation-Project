<script setup>
definePageMeta({
  layout: "order",
});
</script>

<template>
     <div class="w-full h-screen flex items-center justify-center ">
        <div class="flex flex-col items-center justify-center gap-4">

            <img src="~/assets/empty-order.png" class="lg:w-48 lg:h-48 w-32 h-32">

            <div class="flex flex-col items-center justify-center gap-1">
                <P class="text-black text-xl font-medium leading-loose">
                    You have no orders yet.
                </P>
                <NuxtLink to="/market" class="cursor-pointer px-6 py-2 text-red-800 text-lg font-bold leading-relaxed">
                    Go Shopping
                </NuxtLink>
            </div>
            
        </div>
    </div>
</template>
