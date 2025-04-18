<script setup>
definePageMeta({
  layout: "auth",
});

import { useAuth } from "@/composables/useAuth"
const { forgetPassword, error } = useAuth();
import { useRoute } from "vue-router";
const route = useRoute();
const email = route.query.email || "[mail address]";



const handleResend = async () => {
  try {
    const res = await forgetPassword(email);
    alert(res.message || "Email sent again!");
  } catch (err) {
    alert(error.value || "Something went wrong.");
  }
};
</script>

<template>
  <div class="h-screen w-full flex justify-center items-center m-auto">
    <div
      class="lg:w-[555px] w-full inline-flex flex-col lg:justify-start justify-center  items-center gap-8 py-10"
    >
      <img src="../assets/mail 1.png " class="lg:w-44 w-32 lg:h-44 h-32" />
      <div
        class="w-full self-stretch inline-flex flex-col justify-start items-start px-8 lg:px-0 lg:gap-6 gap-8"
      >
        <div classs=" flex justify-start items-center ">
          <div
            class="px-6 border-l-[6px] border-red-800 flex justify-start items-center"
          >
            <p
              class="text-red-800 lg:text-3xl text-2xl font-bold leading-loose lg:leading-[48px]"
            >
              Check your email
            </p>
          </div>
        </div>
        <p
          class="justify-start text-black lg:text-l text-base lg:font-semibold font-medium leading-normal"
        >
          We've just sent a link to
          <span class="font-bold text-red-800">{{ email }}</span
          >. Please check your email to confirm the address, and we'll set up
          your account!
        </p>
      </div>

      <div
        class="w-full flex flex-col justify-center items-center gap-2 lg:p-0"
      >
        <button
          @click="handleResend"
          class="w-80 h-13 py-3 bg-red-800  rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center text-yellow-50 text-lg font-bold cursor-pointer"
        >
          Resend
        </button>
      </div>
    </div>
  </div>
</template>
