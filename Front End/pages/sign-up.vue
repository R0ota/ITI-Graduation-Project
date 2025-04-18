<template>
  <div class="h-full flex items-center w-full">
    <!-- Left side - Image -->
    <img
      src="../assets/signup-img.png"
      alt="Signup Background"
      class="h-[100vh] lg:w-1/3 lg:block hidden"
    />

    <!-- Right side - Form -->
    <div class="h-screen flex items-center justify-center w-full">
      <div
        class="lg:w-[555px] w-full inline-flex flex-col lg:justify-start justify-center items-start lg:px-0 px-4 gap-14"
      >
        <!-- <div class="w-full flex justify-start items-center">
          <div
            class="px-6 border-l-[6px] border-red-800 flex justify-center items-center"
          >
            <p
              class="text-red-800 lg:text-3xl text-2xl font-bold leading-loose lg:leading-[48px]"
            >
              Sign up
            </p>
          </div>
        </div> -->

        <SectionTitle title="Sign up"/>

        <form
          @submit.prevent="handleSubmit"
          class="w-full inline-flex flex-col justify-start items-start gap-2"
        >
          <!-- Name & Username -->
          <div
            class="lg:inline-flex lg:flex-row flex-col justify-between items-center w-full lg:gap-4 gap-2"
          >
            <!-- Name -->
            <div
              class="relative w-full flex flex-col justify-start items-start gap-0.5"
            >
              <label
                for="name"
                class="px-2 text-red-800 text-lg font-medium leading-relaxed"
                >Name</label
              >
              <div class="relative w-full">
                <input
                  v-model="name"
                  @blur="validateField('name')"
                  @input="validateField('name')"
                  @focus="clearValidation('name')"
                  type="text"
                  placeholder="e.g. Nour"
                  id="name"
                  :class="[
                    'w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px]',
                    validationStatus.name && !errors.name ? 'border-[#00BA00] outline-[#00BA00] focus:ring-[#00BA00]' :
                    errors.name ? 'border-red-500 outline-red-500 focus:ring-red-500' :
                    'border-[#A31D1D] outline-[#A31D1D] focus:ring-[#A31D1D]'
                  ]"
                />
                <div
                  v-if="validationStatus.name"
                  class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full"
                  :class="errors.name ? 'bg-red-500 text-white' : 'bg-[#00BA00] text-white'"
                >
                  <i
                    :class="errors.name ? 'fa-solid fa-exclamation' : 'fa-solid fa-check'"
                  ></i>
                </div>
              </div>
              <p v-if="errors.name" class="mt-1 text-sm text-red-500">
                {{ errors.name }}
              </p>
            </div>

            <!-- Username -->
            <div
              class="relative w-full flex flex-col justify-start items-start gap-0.5"
            >
              <label
                for="username"
                class="px-2 text-red-800 text-lg font-medium leading-relaxed"
                >User Name</label
              >
              <div class="relative w-full">
                <input
                  v-model="username"
                  @blur="validateField('username')"
                  @input="validateField('username')"
                  @focus="clearValidation('username')"
                  type="text"
                  placeholder="e.g. nour2002"
                  id="username"
                  :class="[
                    'w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px]',
                    validationStatus.username && !errors.username ? 'border-[#00BA00] outline-[#00BA00] focus:ring-[#00BA00]' :
                    errors.username ? 'border-red-500 outline-red-500 focus:ring-red-500' :
                    'border-[#A31D1D] outline-[#A31D1D] focus:ring-[#A31D1D]'
                  ]"
                />
                <div
                  v-if="validationStatus.username"
                  class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full"
                  :class="errors.username ? 'bg-red-500 text-white' : 'bg-[#00BA00] text-white'"
                >
                  <i
                    :class="errors.username ? 'fa-solid fa-exclamation' : 'fa-solid fa-check'"
                  ></i>
                </div>
              </div>
              <p v-if="errors.username" class="mt-1 text-sm text-red-500">
                {{ errors.username }}
              </p>
            </div>
          </div>

          <!-- Email -->
          <div
            class="relative w-full flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="email"
              class="px-2 text-red-800 text-lg font-medium leading-relaxed"
              >Email</label
            >
            <div class="relative w-full">
              <!-- <input
                v-model="email"
                @blur="validateField('email')"
                @focus="clearValidation('email')"
                type="email"
                placeholder="'example@gmail.com'"
                id="email"
                class="w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px] outline-red-800 inline-flex justify-start items-center"
                :class="errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#A31D1D] focus:ring-[#A31D1D]'"
              /> -->
              <input
                v-model="email"
                @blur="validateField('email')"
                @input="validateField('email')"
                @focus="clearValidation('email')"
                type="email"
                placeholder="example@gmail.com"
                id="email"
                :class="[
                  'w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px]',
                  validationStatus.email && !errors.email ? 'border-[#00BA00] outline-[#00BA00] focus:ring-[#00BA00]' :
                  errors.email ? 'border-red-500 outline-red-500 focus:ring-red-500' :
                  'border-[#A31D1D] outline-[#A31D1D] focus:ring-[#A31D1D]'
                ]"
              />
              <div
                v-if="validationStatus.email"
                class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full"
                :class="errors.email ? 'bg-red-500 text-white' : 'bg-[#00BA00] text-white'"
              >
                <i
                  :class="errors.email ? 'fa-solid fa-exclamation' : 'fa-solid fa-check'"
                ></i>
              </div>
            </div>
            <p v-if="errors.email" class="mt-1 text-sm text-red-500">
              {{ errors.email }}
            </p>
          </div>

          <!-- Password -->
          <!-- <div
            class="relative self-stretch flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="password"
              class="px-2 text-red-800 text-lg font-medium leading-relaxed"
            >
              Password
            </label>
            <div class="relative w-full">
              <input
                v-model="password"
                @blur="validateField('password')"
                @focus="clearValidation('password')"
                :type="showPassword ? 'text' : 'password'"
                placeholder="+8 Characters"
                id="password"
                class="w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px] outline-red-800 inline-flex justify-start items-center"
                :class="errors.password ? 'border-red-500 focus:ring-red-500' : 'border-[#A31D1D] focus:ring-[#A31D1D]'"
              />
              <div
                v-if="validationStatus.password"
                class="absolute right-10 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full"
                :class="errors.password ? 'bg-red-500 text-white' : 'bg-[#A31D1D] text-white'"
              >
                <i
                  :class="errors.password ? 'fa-solid fa-exclamation' : 'fa-solid fa-check'"
                ></i>
              </div>
              <span
                v-if="!errors.password"
                class="absolute inset-y-0 right-4 flex items-center text-red-800 cursor-pointer"
                @click="showPassword = !showPassword"
              >
                <i
                  :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
                ></i>
              </span>
              <p v-if="errors.password" class="mt-1 text-sm text-red-500">
                {{ errors.password }}
              </p>
            </div>
          </div> -->
          <!-- Password -->

          <div
            class="relative self-stretch flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="password"
              class="px-2 text-red-800 text-lg font-medium leading-relaxed"
              >Password</label
            >
            <div class="relative w-full">
              <input
                v-model="password"
                @blur="validateField('password')"
                @input="validateField('password')"
                @focus="clearValidation('password')"
                :type="showPassword ? 'text' : 'password'"
                placeholder="At least 8 characters"
                id="password"
                :class="[
                  'w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px]',
                  validationStatus.password && !errors.password ? 'border-[#00BA00] outline-[#00BA00] focus:ring-[#00BA00]' :
                  errors.password ? 'border-red-500 outline-red-500 focus:ring-red-500' :
                  'border-[#A31D1D] outline-[#A31D1D] focus:ring-[#A31D1D]'
                ]"
              />
              <span
                class="absolute inset-y-0 right-4 flex items-center text-red-800 cursor-pointer"
                @click="showPassword = !showPassword"
              >
                <i
                  :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
                ></i>
              </span>
              <div
                v-if="validationStatus.password"
                class="absolute right-12 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full"
                :class="errors.password ? 'bg-red-500 text-white' : 'bg-[#00BA00] text-white'"
              >
                <i
                  :class="errors.password ? 'fa-solid fa-exclamation' : 'fa-solid fa-check'"
                ></i>
              </div>
            </div>
            <p v-if="errors.password" class="mt-1 text-sm text-red-500">
              {{ errors.password }}
            </p>
          </div>

          <div
            class="w-full flex flex-col justify-center items-center gap-2 mt-10 lg:p-0"
          >
            <button
              :class="isFormValid ? 'bg-red-800' : 'bg-[#C7C7C7] cursor-not-allowed'"
              class="w-80 h-13 py-3 rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center text-yellow-50 text-lg font-bold cursor-pointer"
              :disabled="!isFormValid"
            >
              <i
                v-if="loading"
                class="fa-solid fa-spinner fa-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-800 text-3xl"
              ></i>

              <span v-else-if="!loading"> Create Account </span>
            </button>
            <div v-if="authError" class="text-center text-red-600 text-sm">
              {{ authError }}
            </div>
            <p class="text-black text-base font-medium">
              Have an Account ?
              <NuxtLink to="login" class="text-red-800 text-lg font-bold"
                >Log in</NuxtLink
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

import { ref, computed } from "vue";
import { z } from 'zod';
import { useAuth } from '../composables/useAuth';
import { useAuthMiddleware } from '../composables/useAuthMiddleware';

const { signup } = useAuth();
const { loading, error: authError } = useAuthStore();

const { guestOnly } = useAuthMiddleware();

// Redirects authenticated users away from the login page
onMounted(() => {
  guestOnly();
});


const name = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const errors = ref({});
const validationStatus = ref({
  name: false,
  username: false,
  email: false,
  password: false
});
const showPassword = ref(false);

const signupSchema = z.object({
  name: z.string()
    .min(4, 'Name must be at least 4 characters')
    .max(50, 'Name is too long')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters'),

  username: z.string()
    .min(4, 'Username must be at least 4 characters')
    .max(20, 'Username is too long')
    .regex(/^(?!\d+$)[a-zA-Z0-9_]+$/, 'Username must contain at least one letter'),
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(50, 'Email must be at most 50 characters'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be at most 20 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[@$!%*?&#]/, 'Password must contain at least one special character (@, $, !, %, *, ?, &, #)')
});




const validateField = (field) => {
  const value = eval(field).value;
  if (!value || value.trim() === '') {
    // Field is empty → reset validation
    errors.value[field] = null;
    validationStatus.value[field] = false;
    return;
  }
  try {
    signupSchema.pick({ [field]: true }).parse({ [field]: eval(field).value });
    errors.value[field] = null;
    validationStatus.value[field] = true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors.value[field] = error.errors[0].message;
      validationStatus.value[field] = true;
    }
  }
};

const clearValidation = (field) => {
  errors.value[field] = null;
  validationStatus.value[field] = false;
};

// const isFormValid = computed(() => {
//   return (
//     validationStatus.value.name &&
//     validationStatus.value.username &&
//     validationStatus.value.email &&
//     validationStatus.value.password
//   );
// });
const isFormValid = computed(() => {
  const allFieldsFilled =
    name.value.trim().length > 0 &&
    username.value.trim().length > 0 &&
    email.value.trim().length > 0 &&
    password.value.trim().length > 0;

  const noErrorsExist = Object.values(errors.value).every((error) => !error);

  return allFieldsFilled && noErrorsExist;
});

const handleSubmit = async () => {
  errors.value = {};

  try {
    const validatedData = signupSchema.parse({
      name: name.value,
      username: username.value,
      email: email.value,
      password: password.value
    });

    // Use the composable for signup
    await signup({
      name: validatedData.name,
      username: validatedData.username,
      email: validatedData.email,
      password: validatedData.password
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      error.errors.forEach((err) => {
        errors.value[err.path[0]] = err.message;
      });
    }
  }
};
</script>
