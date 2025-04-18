<template>
  <div
    class="spinner-container"
    :class="{ 'with-label': showLabel }"
  >
    <div
      class="spinner"
      :style="{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${borderWidth}px`,
        borderTopColor: color
      }"
    ></div>
    <span
      v-if="showLabel"
      class="spinner-label"
      :style="{ color: labelColor }"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // Size of the spinner in pixels
  size: {
    type: Number,
    default: 40
  },
  // Color of the spinner
  color: {
    type: String,
    default: '#3b82f6' // Tailwind blue-500
  },
  // Optional label text
  label: {
    type: String,
    default: 'Loading...'
  },
  // Whether to show the label
  showLabel: {
    type: Boolean,
    default: true
  },
  // Color of the label
  labelColor: {
    type: String,
    default: '#6b7280' // Tailwind gray-500
  },
  // Center in parent container
  center: {
    type: Boolean,
    default: false
  }
});

// Calculate border width based on spinner size
const borderWidth = computed(() => {
  return Math.max(2, Math.floor(props.size / 10));
});
</script>

<style scoped>
.spinner-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spinner-container.with-label {
  gap: 0.75rem;
}

.spinner {
  border-style: solid;
  border-color: #e5e7eb;
  /* Tailwind gray-200 */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-label {
  font-size: 0.875rem;
  font-weight: 500;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
