<template>
  <div class="flex flex-col gap-6 lg:w-95 w-80 items-start">
    <div class="flex flex-col lg:gap-4 gap-3 w-full  lg:items-start">
      <!-- shipping btns -->
      <button
        v-for="(item, index) in buttons"
        :key="index"
        @click="toggle(index)"
        :class="item.isChecked ? `bg-[#ECDCBF] ` : `bg-transparent`"
        class="cursor-pointer w-full py-1.5 px-1.5 outline-none rounded-2xl shadow-[0px_0px_3px_0px_rgba(0,0,0,0.15)] flex justify-between items-center"
        :disabled="!item.isChecked ? false : selectedShipping"
      >
        <div
          class="flex gap-2 items-center"
          :class="item.isChecked ? `lg:ml-3 ml-2` : `ml-0`"
        >
          <div class="lg:w-8 w-5 lg:h-8 flex justify-center items-center">
            <img v-if="item.isChecked" src="~/assets/checked.svg" />
            <img v-else src="~/assets/check.svg" />
          </div>
          <p
            :class="item.isChecked ? `text-red-800` : `text-stone-400`"
            class="lg:text-base text-sm lg:font-bold font-semibold leading-normal"
          >
            {{ item.label }}
          </p>
        </div>
        <p
          :class="item.isChecked ? `hidden` : `block`"
          class="text-stone-400 lg:text-base text-sm font-semibold"
        >
          {{ item.price }} EGP
        </p>
      </button>

      <div
        class="lg:outline-[1.5px] outline-[1px] outline-red-800 w-full"
      ></div>

      <!-- cart summary -->
      <div class="flex justify-between items-center w-full">
        <p class="text-black lg:text-lg text-sm font-medium">
          {{ totalItems }} Items
        </p>
        <p class="text-black lg:text-lg text-sm font-medium">
          {{ totalPrice }} EGP
        </p>
      </div>

      <!-- shipping price -->
      <div class="flex w-full justify-between">
        <p class="text-black lg:text-lg text-sm font-medium">
          {{ selectedShipping.label }}
        </p>
        <p class="text-black lg:text-lg text-sm font-medium">
          {{ selectedShipping.price }} EGP
        </p>
      </div>

      <div
        class="lg:outline-[1.5px] outline-[1px] outline-red-800 w-full"
      ></div>

      <!-- total price -->
      <div class="flex w-full justify-between">
        <p class="text-black text-lg lg:font-bold font-semibold">Total Price</p>
        <p class="text-black text-lg lg:font-bold font-semibold">
          {{ totalPrice }} EGP
        </p>
      </div>
    </div>

    <button
      class="cursor-pointer w-full font-['Poppins'] h-14 py-3.5 bg-red-800 rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] text-yellow-50 lg:text-lg text-sm font-bold"
      @click="$emit('checkout', selectedShipping)"
    >
      Check
    </button>
  </div>
</template>

<script setup>
const props=defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
});

const buttons = ref([
  { label: `Standard Shipping`, price: 200, isChecked: true },
  { label: `Gift Shipping`, price: 400, isChecked: false },
]);

const toggle = (index) => {
  buttons.value.forEach((button, i) => {
    button.isChecked = i === index;
  });
};

const selectedShipping = computed(() => {
  return buttons.value.find((button) => button.isChecked) || null;
});

defineEmits(['checkout']);

const totalPrice = computed(() => {
  return (props.totalPrice + selectedShipping.value.price).toFixed(2);
});
</script>
