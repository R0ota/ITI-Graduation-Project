<script setup>
definePageMeta({
  layout: "admin",
});

const products = ref([
  {
    id: "2297",
    img: "image",
    name: "Flower",
    category: "Art",
    price: "222",
    date: "20/8/2024",
    
  },
  {
    id: "2972",
    img: "image",
    name: "Flower",
    category: "Art",
    price: "222",
    date: "20/8/2024",
    
  },
  {
    id: "9722",
    img: "image",
    name: "Flower",
    category: "Art",
    price: "222",
    date: "20/8/2024",
    
  },
  {
    id: "7229",
    img: "image",
    name: "Flower",
    category: "Art",
    price: "222",
    date: "20/8/2024",
    
  },
  {
    id: "0101",
    img: "image",
    name: "Flower",
    category: "Art",
    price: "222",
    date: "20/8/2024",
    
  },
]);

// style thead & tbody
const headClasses = `flex-1/2 py-1 px-1.5 text-red-900 font-semibold font-['Poppins'] text-lg w-full`;

const bodyClasses = `flex-1/2 text-center py-1 px-1.5 text-black font-['Poppins'] font-medium text-sm w-full`;

import { ref, computed } from "vue";

const selectedRows = ref([]);
const selectAll = ref(false);

const isSelect = computed(() => selectedRows.value.length > 0);

// select one
const toggleSelect = (id) => {
  if (selectedRows.value.includes(id)) {
    selectedRows.value = selectedRows.value.filter((i) => i !== id);
  } else {
    selectedRows.value.push(id);
  }
};

// select all
const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedRows.value = [];
  } else {
    selectedRows.value = products.value.map((product) => product.id);
  }
  selectAll.value = !selectAll.value;
};

// delete one
const deleteUser = (id) => {
  const index = products.value.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.value.splice(index, 1);
  }
  selectedRows.value = selectedRows.value.filter((i) => i !== id);
};

// delete all
const deleteAll = () => {
  selectedRows.value.forEach((id) => {
    const index = products.value.findIndex((product) => product.id === id);
    if (index !== -1) {
        products.value.splice(index, 1);
    }
  });

  selectedRows.value = [];
  selectAll.value = false;
};

</script>

<template>
  <div class="flex flex-col gap-8 m-[30px] ml-[250px] fixed w-[77%]">
    <!-- header -->
    <div class="flex items-center justify-between w-full">
      <AdminTitle route="Products" />
      <div class="w-[50%] flex gap-4">
        <Search />
        <AdminUploadBtn type="Product"/>
      </div>
    </div>

    <!-- table data -->
    <table class="flex flex-col gap-4 w-full">
      <thead>
        <tr
          class="flex items-center justify-between gap-2 py-2 border-b-2 border-red-800"
        >
          <!-- select icon -->
          <th>
            <i
              @click="toggleSelectAll"
              class="text-black w-4 h-4 cursor-pointer"
              :class="
                isSelect
                  ? 'fa-solid fa-square-check'
                  : 'fa-regular fa-square-full'
              "
            >
            </i>
          </th>
          <th :class="headClasses">Product ID</th>
          <th :class="headClasses">Thumbnail</th>
          <th :class="headClasses">Product Name</th>
          <th :class="headClasses">Category</th>
          <th :class="headClasses">Price</th>
          <th :class="headClasses">Date Added</th>
          <!-- delete all -->
          <th class="w-6 h-6 text-white py-1 px-1.5">
            <i
              v-if="isSelect"
              @click="deleteAll"
              class="fa-solid fa-trash text-red-800 cursor-pointer"
            ></i>
          </th>
        </tr>
      </thead>

      <tbody class="w-full">
        <tr
          v-for="product in products"
          :key="product.id"
          class="py-1 flex items-center gap-2 justify-between w-full"
        >
          <!-- check icon -->
          <td>
            <i
              @click="toggleSelect(product.id)"
              class="text-black w-4 h-4 cursor-pointer"
              :class="
                selectedRows.includes(product.id)
                  ? 'fa-solid fa-square-check'
                  : 'fa-regular fa-square-full'
              "
            ></i>
          </td>
          <td :class="bodyClasses">#{{ product.id }}</td>
          <td :class="bodyClasses">{{ product.img }}</td>
          <td :class="bodyClasses">{{ product.name }}</td>
          <td :class="bodyClasses">{{ product.category }}</td>
          <td :class="bodyClasses">{{ product.price }}</td>
          <td :class="bodyClasses">{{ product.date }}</td>
          
          <!-- delete row -->
          <td class="flex-1">
            <i
              @click="deleteUser(product.id)"
              class="fa-solid fa-trash text-red-800 cursor-pointer"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
