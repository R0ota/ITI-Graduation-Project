<script setup>
import { defineProps } from "vue";
const prop = defineProps(["color"]);
</script>

<template>
  <div :class="`w-12 h-12 bg-${color} rounded-2xl cursor-pointer`"></div>
</template>
