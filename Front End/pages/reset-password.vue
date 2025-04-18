<script setup>
definePageMeta({
  layout: "auth",
});

import { ref, computed } from "vue";
import { useRoute,useRouter } from "vue-router";
import { useAuth } from "~/composables/useAuth";

const route = useRoute();
const router = useRouter();
const password = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const auth = useAuth();
const successMessage = ref("");

const isFormValid = computed(() =>
    password.value.length >= 8 && confirmPassword.value === password.value
);
const handleReset = async () => {
  const token = route.query.token;
  if (!token) {
    auth.setError("Missing token in URL");
    return;
  }

  const message = await auth.resetPassword(token, password.value);
  if (message) {
    successMessage.value = message;
    setTimeout(() => router.push("/login"), 2000);
  }
};
</script>
<template>
  <div class="h-full flex items-center w-full">
    <img
      src="../assets/newpass-img.png"
      class="h-[100vh] lg:w-1/3 lg:block hidden"
    />

    <div class="h-screen flex items-center m-auto">
      <div
        class="lg:w-[555px] w-full inline-flex flex-col lg:justify-start justify-center lg:items-start items-center gap-10"
      >
        <div
          class="w-full self-stretch inline-flex flex-col justify-start items-start px-8 lg:px-0  lg:gap-6 gap-8"
        >
          <div class=" flex justify-start items-center ">
            <div
              class="px-6 border-l-[6px] border-red-800 flex justify-start items-center"
            >
              <p
                class="text-red-800 lg:text-3xl text-2xl font-bold leading-loose lg:leading-[48px]"
              >
                Create a New Password
              </p>
            </div>
          </div>
          <p
            class=" justify-start  text-black lg:text-l text-base lg:font-semibold font-medium leading-normal"
          >
            Create a new password to secure your account. Make it strong and
            easy to remember. Use letters, numbers, and symbols for added
            security
          </p>
        </div>

        <form
          class="lg:w-full inline-flex flex-col justify-start items-start gap-10"
          @submit.prevent="handleReset"
        >
          <div class="flex flex-col gap-4 w-full">
            <!-- new password -->
            <div
              class="self-stretch flex flex-col justify-start items-start gap-0.5"
            >
              <label
                for="password"
                class="px-2 justify-center items-start text-red-800 text-lg font-medium leading-relaxed"
                >Password</label
              >
              <div class="relative w-full">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="+8 Characters"
                  id="password"
                  class="w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px] outline-red-800 inline-flex justify-start items-center"
                />

                <span
                  class="absolute inset-y-0 right-4 flex items-center text-red-800 cursor-pointer"
                  @click="showPassword = !showPassword"
                >
                  <i
                    :class="
                    showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'
                  "
                  ></i>
                </span>
              </div>
            </div>

            <!-- confirm password -->
            <div
              class="self-stretch flex flex-col justify-start items-start gap-0.5"
            >
              <label
                for="confirmPassword"
                class="px-2 jaustify-center items-start text-red-800 text-lg font-medium leading-relaxed"
                >Confirm Password</label
              >
              <div class="relative w-full">
                <input
                  v-model="confirmPassword"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Make sure to match new password"
                  id="confirmPassword"
                  class="w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px] outline-red-800 inline-flex justify-start items-center"
                />

                <span
                  class="absolute inset-y-0 right-4 flex items-center text-red-800 cursor-pointer"
                  @click="showPassword = !showPassword"
                >
                  <i
                    :class="
                    showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'
                  "
                  ></i>
                </span>
              </div>
            </div>
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
