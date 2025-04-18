<template>
  <div class="h-screen w-full flex justify-center items-center m-auto">
    <div
      class="lg:w-[555px] w-full inline-flex flex-col lg:justify-start justify-center  items-center gap-8 py-10"
    >
      <img src="../../sucessfulchange.png" />
      <div
        class="w-full self-stretch inline-flex flex-col justify-start items-center px-8 lg:px-0 lg:gap-6 gap-8"
      >
        <div classs=" flex justify-start items-center ">
          <p
            class="text-red-800 lg:text-3xl text-2xl font-bold leading-loose lg:leading-[48px]"
          >
            Password Changed Successfully
          </p>
        </div>
        <p
          class="justify-start text-black lg:text-l text-base lg:font-semibold font-medium leading-normal"
        >
          You can now log in using your new password. Make sure to keep it safe.
        </p>
      </div>

      <div
        class="w-full flex flex-col justify-center items-center gap-2 lg:p-0"
      >
        <NuxtLink to="/login">
          <button
            class="w-80 h-13 py-3 bg-red-800 rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center text-yellow-50 text-lg font-bold cursor-pointer"
          >
            Back to Log in
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "order",
});
</script>
