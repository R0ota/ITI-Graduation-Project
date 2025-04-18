<script setup>
const route = useRoute();
const props = defineProps({
  path: { 
    type: [String, Array],
    required: true},
  baseIcon : String,
  activeIcon : String,
  title : String,
  collapsed : Boolean
});
const activeClasses = "bg-orange-100 rounded-[50px] ";

const isActive = computed(() => {
  if (Array.isArray(props.path)) {
    return props.path.includes(route.path);
  }
  return route.path === props.path;
});
</script>

<template>
  <NuxtLink
    :to="Array.isArray(path) ? path[0] : path"
    :class="[
      'py-3 px-3 cursor-pointer',
      collapsed ? 'flex items-center justify-center' : 'flex items-center justify-start gap-2',
      isActive ? activeClasses : '',
    ]"
  >
    <img :src="isActive ? activeIcon : baseIcon" class="w-6 h-6" />
    <p
      
      :class="[
        ' font-[Poppins] font-semibold text-lg  transition-all duration-300',
        isActive ? 'text-red-900' : 'text-orange-100',
        collapsed ? 'max-w-0 opacity-0 overflow-hidden' : 'max-w-full opacity-100'
      ]"
    >
      {{ title }}
    </p>
  </NuxtLink>
</template>
