<script setup>
    const isCollapsed = ref(false)
    
    const toggleState = () => {
      isCollapsed.value = !isCollapsed.value;
    }
</script>

<template>
  <!-- sidebar -->
  <div
    :class="['h-screen bg-red-900 p-4 pt-6 flex flex-col items-start justify-between transition-all duration-300 sticky top-0',
      isCollapsed ? 'w-[7%]' : 'w-[15%]'
    ]"
  >
  <div class="relative"> 

    <div
    @click="toggleState"
      class="border-3 border-red-900 rounded-[35px] w-8 h-8 absolute right-[-35px] flex justify-center items-center bg-orange-100 cursor-pointer"
    >
      <i :class="['fa-solid  text-red-900',
        isCollapsed ? 'fa-angle-right' : 'fa-angle-left'
      ]"></i>
    </div>

    <div class="flex flex-col gap-10">
      <!-- logo -->
      <NuxtLink to="/" class="flex justify-center items-center w-13 h-13">
        <img src="~/assets/Light_Logo.svg" class="w-12 h-11" />
      </NuxtLink>
      <!-- <img src="/Dashboard-light.svg" class="w-10 h-10" /> -->
      <!-- main -->
      <div class="flex flex-col gap-1">
        <!-- dashboard -->
        <AdminPageRoutes
          path="/admin/dashboard"
          baseIcon="/admin/Dashboard-light.svg"
          activeIcon="/admin/Dashboard-fill.svg"
          title="Dashboard"
          :collapsed="isCollapsed"
        />

        <!-- users -->
        <AdminPageRoutes
          path="/admin/users"
          baseIcon="/admin/user.svg"
          activeIcon="/admin/user-fill.svg"
          title="User"
          :collapsed="isCollapsed"
        />

        <!-- orders -->
        <AdminPageRoutes
          path="/admin/orders"
          baseIcon="/admin/orders.svg"
          activeIcon="/admin/orders-fill.svg"
          title="Order"
          :collapsed="isCollapsed"
        />

        <!-- designs -->
        <AdminPageRoutes
          :path="['/admin/design/designs', '/admin/design/upload-design', '/admin/design/edit-design', '/admin/design/select-product'] "
          baseIcon="/admin/designs.svg"
          activeIcon="/admin/designs-fill.svg"
          title="Design"
          :collapsed="isCollapsed"
        />

        <!-- products -->
        <AdminPageRoutes
          path="/admin/products"
          baseIcon="/admin/products.svg"
          activeIcon="/admin/products-fill.svg"
          title="Product"
          :collapsed="isCollapsed"
        />

        <!-- category -->
        <AdminPageRoutes
          path="/admin/category"
          baseIcon="/admin/category.svg"
          activeIcon="/admin/category-fill.svg"
          title="Category"
          :collapsed="isCollapsed"
        />
      </div>
    </div>

    <!-- LOG OUT -->
    <AdminPageRoutes path="/sign-up" baseIcon="/admin/Log out.svg" title="Log out"  :collapsed="isCollapsed">
    </AdminPageRoutes>
  </div>
  </div>
  <!-- close icon -->
   
   
</template>
