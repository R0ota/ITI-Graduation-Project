<script setup>
definePageMeta({
  layout: "auth",
});

import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const email = ref("");

const isFormValid = computed(() => {
  return email.value.trim() !== "";
});
const { forgetPassword, loading, error } = useAuth();

const handleSubmit = async () => {
  try {
    const res = await forgetPassword(email.value);
    alert(res.message || "Check your inbox!");
    router.push({ path: "/confirmation-mail", query: { email: email.value } });

  } catch (err) {
    alert(error.value || "Something went wrong.");
  }
};
</script>
<template>
  <div class="h-full flex items-center w-full">
    <img
      src="../assets/forgotpass-img.png"
      class="h-[100vh] lg:w-1/3 lg:block hidden"
    />

    <div class="h-screen flex items-center m-auto">
      <div
        class="lg:w-[555px] w-full inline-flex flex-col lg:justify-start justify-center lg:items-start items-center gap-10"
      >
        <div
          class="w-full self-stretch inline-flex flex-col justify-start items-start px-8 lg:px-0  lg:gap-6 gap-8"
        >
          <div classs=" flex justify-start items-center ">
            <div
              class="px-6 border-l-[6px] border-red-800 flex justify-start items-center"
            >
              <p
                class="text-red-800 lg:text-3xl text-2xl font-bold leading-loose lg:leading-[48px]"
              >
                Forgot Password
              </p>
            </div>
          </div>
          <p
            class=" justify-start  text-black lg:text-l text-base lg:font-semibold font-medium leading-normal"
          >
            Enter your registered email, and we will send you a link to reset
            your password. Use the link to create a new password and secure your
            account.
          </p>
        </div>

        <form
          @submit.prevent="handleSubmit"
          class="lg:w-full inline-flex flex-col justify-start items-start gap-10"
        >
          <div
            class="self-stretch flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="email"
              class="px-2 jaustify-center items-start text-red-800 text-lg font-medium leading-relaxed"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              placeholder="'example@gmail.com'"
              id="email"
              class="w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px] outline-red-800 inline-flex justify-start items-center"
            />
          </div>
          <div
            class="w-full flex flex-col justify-center items-center gap-2 lg:p-0"
          >
            <button
              :class="isFormValid ? 'bg-red-800' : 'bg-[#C7C7C7] cursor-not-allowed'"
              class="w-80 h-13 py-3  rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center text-yellow-50 text-lg font-bold cursor-pointer"
              :disabled="!isFormValid"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
