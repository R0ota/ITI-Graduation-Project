<template>
  <!-- <div class="h-full flex items-center w-full"> -->
    <div class=" pt-11 pb-20  flex items-center justify-center">
      <div class="lg:w-[565px] w-full flex flex-col items-start gap-11 px-4">
        <SectionTitle title="Profile Info" />

        <div v-for="field in fields" :key="field.key" class="w-full">
          <label :for="field.key" class="text-red-800 text-lg font-medium px-2">
            {{ field.label }}
          </label>

          <div class="relative w-full mt-1">
            <!-- Input with validation icon inside -->
            <div
              :class="[
                'relative flex items-center bg-yellow-50 p-3 rounded-2xl outline-1',
                validationStatus[field.key] && !errors[field.key]
                  ? 'border-[#00BA00] outline-[#00BA00]'
                  : errors[field.key]
                    ? 'border-red-500 outline-red-500'
                    : 'border-[#A31D1D] outline-[#A31D1D]'
              ]"
            >
              <input
                v-model="field.value"
                :type="field.type"
                :id="field.key"
                :placeholder="field.placeholder"
                @input="validateField(field.key)"
                @focus="clearValidation(field.key)"
                class="w-full bg-yellow-50 text-red-800 placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium focus:outline-none"
              />

              <!-- Validation Icon -->
              <div
                v-if="validationStatus[field.key]"
                class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full"
                :class="errors[field.key] ? 'bg-red-500 text-white' : 'bg-[#00BA00] text-white'"
              >
                <i
                  :class="errors[field.key] ? 'fa-solid fa-exclamation' : 'fa-solid fa-check'"
                ></i>
              </div>

              <!-- Gear Icon -->
              <i
                v-if="!validationStatus[field.key]"
                class="fa-solid fa-gear text-[#A31D1D] ml-3 cursor-pointer"
                @click="editingField = field.key"
              ></i>
            </div>

            <!-- Save / Cancel Buttons -->
            <div
              v-if="editingField === field.key"
              class="flex justify-end gap-2 mt-2"
            >
              <button
                @click="editingField = null"
                type="button"
                class="px-4 py-1 border border-red-800 text-red-800 rounded-xl font-semibold"
              >
                Cancel
              </button>
              <div
                class="px-4 py-1.5 bg-red-800 rounded-xl shadow inline-flex justify-center items-center gap-2 cursor-pointer"
                @click="saveField(field.key)"
              >
                <div
                  class="text-yellow-50 text-base font-semibold leading-snug"
                >
                  Save
                </div>
              </div>
            </div>

            <!-- Error Message -->
            <p v-if="errors[field.key]" class="text-sm text-red-500 mt-1">
              {{ errors[field.key] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script setup>
 definePageMeta({
  layout: "order",
});
import { ref } from 'vue'
import { z } from 'zod'
import { useAuth } from '~/composables/useAuth';
const { getUser, updateProfile } = useAuth();

const name = ref('')
const username = ref('')
const email = ref('')
const location = ref('')
const phone = ref('')

// Track editing field and validation state
const editingField = ref(null)
const errors = ref({})
const validationStatus = ref({
  name: false,
  username: false,
  email: false,
  location: false,
  phone: false
})

// Zod schema
const schema = z.object({
  name: z.string().min(4).max(50).regex(/^[a-zA-Z\\s]+$/, 'Name must contain only letters'),
  username: z.string().min(4).max(20).regex(/^(?!\\d+$)[a-zA-Z0-9_]+$/, 'Username must contain at least one letter'),
  email: z.string().email().min(5).max(50),
  location: z.string().min(2).max(100),
  phone: z.string().regex(/^\+?\d{10,15}$/, 'Phone number is invalid')
})

// Fields config
const fields = [
  {
    key: 'name',
    label: 'Name',
    placeholder: 'e.g. Nour',
    type: 'text',
    get value() { return name.value },
    set value(val) { name.value = val }
  },
  {
    key: 'username',
    label: 'Username',
    placeholder: 'e.g. nour2002',
    type: 'text',
    get value() { return username.value },
    set value(val) { username.value = val }
  },
  {
    key: 'email',
    label: 'Email',
    placeholder: 'example@gmail.com',
    type: 'email',
    get value() { return email.value },
    set value(val) { email.value = val }
  },
  {
    key: 'location',
    label: 'Location',
    placeholder: 'Detect your Location',
    type: 'text',
    get value() { return location.value },
    set value(val) { location.value = val }
  },
  {
    key: 'phone',
    label: 'Phone Number',
    placeholder: 'Enter your phone Number',
    type: 'text',
    get value() { return phone.value },
    set value(val) { phone.value = val }
  }
]

// Validate field
const validateField = (fieldKey) => {
  const fieldValue = fields.find(f => f.key === fieldKey)?.value
  if (!fieldValue || fieldValue.trim() === '') {
    errors.value[fieldKey] = null
    validationStatus.value[fieldKey] = false
    return
  }

  try {
    schema.pick({ [fieldKey]: true }).parse({ [fieldKey]: fieldValue })
    errors.value[fieldKey] = null
    validationStatus.value[fieldKey] = true
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors.value[fieldKey] = error.errors[0].message
      validationStatus.value[fieldKey] = true
    }
  }
}

const clearValidation = (fieldKey) => {
  errors.value[fieldKey] = null
  validationStatus.value[fieldKey] = false
}

// Save individual field
const saveField = async (fieldKey) => {
  const field = fields.find(f => f.key === fieldKey)
  if (!field) return

  // Validate before saving
  validateField(fieldKey)
  if (errors.value[fieldKey]) {
    return // Don't save if there's a validation error
  }

  try {
    // Create an update object with just the field being updated
    const updates = { [fieldKey]: field.value }

    // Call the updateProfile function with the updates
    await updateProfile(updates)

    console.log(`Successfully saved ${fieldKey}:`, field.value)
    editingField.value = null
  } catch (err) {
    console.error(`Error saving ${fieldKey}:`, err)
    // You could set an error message to display to the user here
  }
}

import { onMounted } from 'vue'

// Fetch user data and fill form fields
const fetchProfile = async () => {
  try {
    // Get user data using the useAuth composable
    const userData = await getUser()

    if (userData) {
      console.log('📦 User data:', userData)

      // Fill form fields with user data if available
      name.value = userData.name || ''
      username.value = userData.username || ''
      email.value = userData.email || ''
      location.value = userData.location || ''
      phone.value = userData.phone || ''
    } else {
      console.log(' No user data available')
    }
  } catch (err) {
    console.error(' Error fetching user profile:', err)
  }
}

onMounted(() => {
  fetchProfile()
})
</script>
