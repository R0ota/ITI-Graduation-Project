<script setup>
import { AdminInputData } from '#components';

definePageMeta({
  layout: 'admin',
});

import { useDesignStore } from '@/stores/design';


const designStore = useDesignStore();

// icoming data
const route = useRoute();
const id = ref(route.query.id || '')
const title = ref(route.query.title || '');
const description = ref(route.query.description || '');
const category = ref(route.query.category || '');
const image = ref(route.query.image || '');
const tags = ref(route.query.tags || '');
console.log('list',route.query)

// save design info
const saveDesign = async () => {
  const designInfo = ({
    title: title.value,
    description: description.value,
    category: category.value,
    tags: tags.value,
    image: image.value,
  });
  const oldDesign = designStore.designs.find(d => d.id === id.value);
  if (id.value) {
    const {
        category,
        ...rest
      } = designInfo
      const token = localStorage.getItem('auth_token');
      const response = await $fetch(`${getBaseURL()}/design/${id.value}`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          body: rest
        });
  } else {
    designStore.saveDesign({
      ...designInfo,
    });
  }
  navigateTo('/admin/design/designs')
}

const inputClasses ='px-4 py-3 flex items-start text-stone-900 text-lg font-medium placeholder:text-stone-900/75 placeholder:text-lg placeholder:font-medium bg-yellow-50 rounded-2xl outline-1 outline-offset-[-1px] outline-red-900 self-stretch w-full'
const labelCasses ='px-2 text-red-900 text-xl font-medium'
</script>
<template>
  <div class="flex justify-between items-center m-[30px] w-[77%]">
    <div class="flex items-center justify-center  flex-1">
      <!-- upload design -->
      <div
        class="flex flex-col items-center justify-center gap-4 h-screen max-w-[350px]"
      >
        <img :src="image" />
        <input
          type="text"
          v-model="image"
          placeholder="Image Link"
          :class="inputClasses"
        />
      </div>
    </div>
    <form class="flex flex-col items-start justify-start flex-1 gap-8">
      <div class="flex flex-col gap-4 items-start justify-start w-full">
        <!-- design title -->
        <AdminInputData
          label="Design Title"
          placeholder="e.g.Abstract watercolor poster"
          v-model="title"
        />
        <!-- description -->
        <div class="flex flex-col gap-0.5 w-full">
          <label for="description" :class="labelCasses">Description</label>
          <textarea
            v-model="description"
            id="description"
            placeholder="e.g. A digital artwork inspired by abstract painting"
            :class="inputClasses"
            class="h-32"
          ></textarea>
        </div>
        <!-- category -->
        <div class="flex flex-col gap-0.5 w-full">
          <label for="input" :class="labelCasses">Category</label>
          <select
            v-model="category"
            placeholder="select design category"
            :class="inputClasses"
            class=""
          >
            <option value="" disabled selected hidden>
              Select Design Category
            </option>
            <option value="Digital Art">Digital Art</option>
            <option value="Typography & Calligraphy">
              Typography & Calligraphy
            </option>
            <option value="Design Category">Design Category</option>
          </select>
        </div>
        <!-- Tags -->
        <AdminInputData
          label="Tags"
          placeholder="e.g.#AbstractArt #WallPrint #HomeDecor "
          v-model="tags"
        />
      </div>
      <!-- action btns -->
      <div class="flex justify-end gap-4 w-full">
        <button
          class="text-red-900 text-lg font-semibold cursor-pointer px-4 py-1.5  bg-white rounded-xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] outline-[1.50px] outline-offset-[-1.50px] outline-red-900"
        >
          Cancel
        </button>
        <button
          @click.prevent="saveDesign"
          class="text-yellow-50 text-lg font-semibold cursor-pointer px-4 py-1.5  bg-red-900 rounded-xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] "
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>
