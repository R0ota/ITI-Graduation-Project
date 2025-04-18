<script setup>
    const props = defineProps (['label', 'placeholder','modelValue'])
    const inputClasses ='px-4 py-3 flex items-start text-stone-900 text-lg font-medium font-[Poppins] placeholder:text-stone-900/75 placeholder:text-lg placeholder:font-medium placholder:font-[Poppins] bg-yellow-50 rounded-2xl outline-1 outline-offset-[-1px] outline-red-900 self-stretch w-full'
const labelCasses ='px-2 text-red-900 text-xl font-[Poppins] font-medium'
</script>

<template>
     <div class="flex flex-col gap-0.5 w-full">
          <label
            for="input"
            :class= labelCasses
            >{{label}}</label
          >
          <input
            :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            type="text"
            id="input"
            :placeholder=placeholder
            :class=inputClasses          />
        </div>
</template>