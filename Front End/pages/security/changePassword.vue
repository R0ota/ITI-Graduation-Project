<template>
  <div class="h-full flex items-center w-full">
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
                Change Your Password
              </p>
            </div>
          </div>
          <p
            class=" justify-start  text-black lg:text-l text-base lg:font-semibold font-medium leading-normal"
          >
            Keep your account secure by updating your password regularly. Choose
            a strong password that is unique and hard to guess.
          </p>
        </div>

        <form
          class="lg:w-full inline-flex flex-col justify-start items-start gap-10"
        >
          <div
            class="self-stretch flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="password"
              class="px-2 jaustify-center items-start text-red-800 text-lg font-medium leading-relaxed"
              >Current Password</label
            >
            <div class="relative w-full">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your current password"
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

          <div
            class="w-full flex flex-col justify-center items-center gap-2 lg:p-0"
          >
            <button
              :class="isFormValid ? 'bg-red-800' : 'bg-[#C7C7C7] cursor-not-allowed'"
              class="w-80 h-13 py-3  rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center text-yellow-50 text-lg font-bold cursor-pointer"
              :disabled="!isFormValid"
              @click.prevent="handleSubmit"
            >
              Confirm Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "order",
});

import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const showPassword = ref(false);


const password = ref("");

const isFormValid = computed(() => {
  return  password.value.length >= 8;
});
import { useAuth } from "~/composables/useAuth";

const { checkOldPassword, error } = useAuth();

// const handleSubmit = async () => {

//   try {
//     const msg = await checkOldPassword(password.value);
//     alert(msg); // Handle success message or redirect
//   } catch (err) {
//     alert(error.value || "Password check failed");
//   }
// };


const handleSubmit = async () => {
  try {
    const msg = await checkOldPassword(password.value);
    router.push("/security/newPassword");
  } catch (err) {
    alert("Invalid password, please try again.");
  }
};
</script>
