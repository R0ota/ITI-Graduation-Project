<template>
  <div class="w-full flex flex-col gap-6">
    <CartItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @remove="$emit('remove', $event)"
      @increase="$emit('increase', $event)"
      @decrease="$emit('decrease', $event)"
    />
  </div>
</template>

<script setup>
const props=defineProps({
  items: {
    type: Array,
    required: true
  }
});

defineEmits(['remove', 'increase', 'decrease']);

console.log('items', props.items);
</script>
