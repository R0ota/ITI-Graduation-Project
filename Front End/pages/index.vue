<script setup>
definePageMeta({
  layout: "home",
});
</script>

<template>
  <div class="flex flex-col pt-10 pb-20">
    <!-- hero section -->
    <div class="flex items-center justify-center lg:px-32 px-12 lg:py-24 py-10">
      <div class="flex flex-col gap-8 items-center justify-center w-[100%]">
        <div class="flex w-full flex-col justify-center items-center text-center gap-2 px-4">
  <p class="text-black lg:text-5xl text-2xl font-bold">
    <span class="text-red-800">Tabie</span>, Your Favorite&nbsp;Products,
  </p>
  <p class="text-black lg:text-5xl text-2xl font-bold ">Now with Unique Designs.
  </p>
</div>

        <!-- shopping btn -->
        <NuxtLink
          to="/market"
          class="cursor-pointer px-6 lg:py-4 py-2.5 h-16 bg-red-900 rounded-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] flex lg:gap-4 gap-3 items-center justify-center"
        >
          <p class="text-yellow-50 lg:text-2xl text-base font-bold">Shop Now</p>
          <i
            class="fa-solid fa-angle-left text-center text-yellow-50 lg:fa-2x"
          ></i>
        </NuxtLink>
      </div>
    </div>
    <!-- featured products -->
    <div
      class="lg:px-32 md:px-20 sm:px-8 px-4 lg:py-16 py-10 flex flex-col lg:gap-8 gap-4 lg:items-start"
    >
      <SectionTitle title="Featured Products" />
      <div
        class="flex lg:gap-6 items-start lg:justify-between overflow-x-auto lg:overflow-hidden gap-4 w-full"
      >
        <HomeProduct
          name="Mystic Mug"
          description="Ceramic heat-sensitive mug"
          img="/home/mug.png"
        />
        <HomeProduct
          name="Bold Threads"
          description="Printed cotton T-shirt"
          img="/home/t-shirt.png"
        />
        <HomeProduct
          name="Visionary Notebook"
          description="Premium leather-bound notebook"
          img="/home/book.png"
        />
        <HomeProduct
          name="AquaFlow Bottle"
          description="Insulated sports water bottle"
          img="/home/bottel.png"
        />
      </div>
    </div>

    <!-- how it works -->
    <div
      class="lg:px-32 md:px-20 sm:px-8 px-4 lg:py-16 py-10 flex flex-col lg:gap-8 gap-6 items-start w-full"
    >
      <SectionTitle title="How it works" />
      <div
        class="flex lg:flex-row flex-col lg:gap-6 gap-4 items-center justify-between w-full"
      >
        <HomeWorkCard
          service="Choose Product"
          description="Browse a wide range of premium items like T-shirts, mugs and Bags."
        >
          <div class="w-24 h-24 relative">
            <img src="/home/shirt.svg" class="absolute top-0 left-0" />
            <img
              src="/home/shirt-icon.svg"
              class="absolute right-[13px] bottom-[2px]"
            />
          </div>
        </HomeWorkCard>
        <HomeWorkCard
          service="Select  Design"
          description="Pick from a curated collection of exclusive designs."
        >
          <div class="w-24 h-24 relative">
            <img src="/home/img.svg" class="absolute top-0 left-0" />
            <img src="/home/arrow.svg" class="absolute left-[-8px] top-9" />
          </div>
        </HomeWorkCard>
        <HomeWorkCard
          service="Complete Your Purchase"
          description="Add your favorites to cart and check out quickly and easily."
        >
          <div class="w-24 h-24 relative">
            <img src="/home/payment.svg" class="absolute top-0 left-0" />
          </div>
        </HomeWorkCard>
      </div>
    </div>

    <!-- why tabie -->
    <div
      class="lg:px-32 md:px-20 sm:px-8 px-4 lg:py-16 py-10 flex flex-col gap-8 items-start justify-start"
    >
      <SectionTitle title="Why Trusting Tabie" />
      <div
        class="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-start w-full"
      >
        <HomeService
          service="Exclusive Designs"
          description="Original artwork created by top independent designers."
        >
          <img src="/home/img-prush.svg" class="absolute top-3 left-4" />
          <img src="/home/prush.svg" class="absolute left-3 top-10" />
        </HomeService>
        <HomeService
          service="High-Quality Products"
          description="Premium materials and professional printing."
        >
          <img src="/home/tabie.svg" class="absolute top-4 left-4" />
        </HomeService>
        <HomeService
          service="Fast & Secure Shipping"
          description="Quick, reliable delivery right to your door."
        >
          <img src="/home/deliver.svg" class="absolute top-4 left-5" />
          <img src="/home/deliver-check.svg" class="absolute top-6.5 left-3" />
        </HomeService>
        <HomeService
          service="Risk-Free"
          description="Love it or return it—hassle-free and customer-focused."
        >
          <img src="/home/wallet.svg" class="absolute top-2 left-4" />
        </HomeService>
      </div>
    </div>
  </div>
</template>
