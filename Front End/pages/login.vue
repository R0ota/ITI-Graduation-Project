<template>
  <div class="h-full flex items-center w-full">
    <!-- Left side - Background image (Visible only on large screens) -->
    <img
      src="../assets/login-img.png"
      class="h-[100vh] lg:w-1/3 lg:block hidden"
    />

    <!-- Right side - Login Form -->
    <div class="h-screen flex items-center justify-center w-full">
      <div
        class="lg:w-[555px] w-full inline-flex flex-col justify-start  items-start  gap-14 lg:px-0 px-4"
      >
        <!-- Section Title -->
        <!-- <div classs="w-full flex justify-start  items-start">
          <div
            class="px-6 border-l-[6px] border-red-800 flex justify-start items-start"
          >
            <p
              class="text-red-800 lg:text-3xl text-2xl font-bold leading-loose lg:leading-[48px]"
            >
              Log in
            </p>
          </div>
        </div> -->
        <SectionTitle title="Log in"/>

        <!-- Login Form -->
        <form
          @submit.prevent="handleSubmit"
          class="w-full inline-flex flex-col justify-start items-start gap-2  "
        >
          <!-- Email Input Field -->
          <div
            class="w-full self-stretch flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="email"
              class="px-2 justify-center items-start text-red-800 text-lg font-medium leading-relaxed"
              >Email</label
            >
            <input
              v-model="email"
              @blur="validateField('email')"
              @focus="clearValidation('email')"
              type="email"
              placeholder="example@gmail.com"
              id="email"
              class="w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px] outline-red-800 inline-flex justify-start items-center"
              :class="errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#A31D1D] focus:ring-[#A31D1D]'"
            />
          </div>

          <!-- Password Input Field -->
          <div
            class="w-full self-stretch flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="password"
              class="px-2 justify-center items-start text-red-800 text-lg font-medium leading-relaxed"
              >Password</label
            >
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

              <!-- Toggle Password Visibility -->
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

            <!-- Display Password Error -->
            <p v-if="errors.password" class="mt-1 text-sm text-red-500">
              {{ errors.password }}
            </p>
            <NuxtLink
              to="forgot-password"
              class="text-black text-base font-medium w-full flex justify-end cursor-pointer "
            >
              Forgot Password ?
            </NuxtLink>
          </div>

          <!-- Submit Button & Sign-Up Link -->
          <div
            class="w-full flex flex-col justify-center items-center gap-2 mt-10 lg:p-0"
          >
            <button
              type="submit"
              :class="isFormValid ? 'bg-red-800' : 'bg-[#C7C7C7] cursor-not-allowed'"
              class="w-80  h-13 py-3  rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center text-yellow-50 text-lg font-bold cursor-pointer"
              :disabled="!isFormValid || loading"
            >
              <span v-if="loading">Logging in...</span>
              <span v-else>Log in</span>
            </button>

            <!-- Display Authentication Errors -->
            <div v-if="authError" class="text-center text-red-600 text-sm">
              {{ authError }}
            </div>

            <!-- Link to Sign-Up Page -->
            <p class="text-black text-base font-medium">
              Create an Account ?
              <NuxtLink to="sign-up" class="text-red-800 text-lg font-bold"
                >Sign up</NuxtLink
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { z } from 'zod';
import { useAuth } from '../composables/useAuth';
import { useAuthMiddleware } from '../composables/useAuthMiddleware';

const { login, loading, error: authError } = useAuth();
const { guestOnly } = useAuthMiddleware();

// Redirects authenticated users away from the login page
onMounted(() => {
  guestOnly();
});

// Reactive variables to store form inputs
const email = ref('');
const password = ref('');
const errors = ref({});
const validationStatus = ref({
  email: false,
  password: false
});
const showPassword = ref(false);

// Schema validation using zod
const loginSchema = z.object({
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

// Validates a specific field on blur
const validateField = (field) => {
  try {
    loginSchema.pick({ [field]: true }).parse({ [field]: eval(field).value });
    errors.value[field] = null;
    validationStatus.value[field] = true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors.value[field] = error.errors[0].message;
      validationStatus.value[field] = true;
    }
  }
};

// Clears validation error on focus
const clearValidation = (field) => {
  errors.value[field] = null;
  validationStatus.value[field] = false;
};

// Handles form submission
const handleSubmit = async () => {
  errors.value = {}; // Reset errors before validation

  try {
    // Validate form data
    const validatedData = loginSchema.parse({
      email: email.value,
      password: password.value
    });

    // Call the login function from useAuth composable
    await login({
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

// Computes if the form is valid based on validation status
const isFormValid = computed(() => {
  return validationStatus.value.email && validationStatus.value.password;
});

definePageMeta ({
  layout : "auth",
});
</script>
