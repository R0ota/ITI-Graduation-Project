<script setup>
    definePageMeta({
        layout: "order",
    })
</script>

<template>
    <div class="w-full h-screen flex items-center justify-center ">
        <div class="flex flex-col items-center justify-center gap-4">

            <img src="../assets/empty-cart.png" class="lg:w-48 w-32 lg:h-48 h-32">

            <div class="flex flex-col items-center justify-center lg:gap-1 gap-2">
                <P class="text-black lg:text-xl text-sm font-medium leading-loose">
                    The shopping cart is empty now.
                </P>
                <NuxtLink to="/market" class="cursor-pointer lg:px-6 px-3.5 lg:py-2 py-[5px] text-red-800 lg:text-lg text-xs font-bold leading-relaxed">
                    Go Shopping
                </NuxtLink>
            </div>

        </div>
    </div>
</template>
