<template>
  <div>
    <div class="flex w-full px-4 py-3 items-center cursor-pointer">
      <img src="../assets/dell-SGY0LIfTKZ4-unsplash.jpg" class="rounded-full mr-4 w-12" />

      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">
            Gozie
          </div>
          <div class="text-[12px] text-gray-600">
            Date
          </div>
        </div>

        <div class="flex items-center">
          <CheckAllIcon :size="18" class="mr-1"/>
          <div class="text-[15px] w-full flex items-center justify-between text-gray-500">
            Message...
          </div>
        </div>
      </div>

      
    </div>

    <div class="border-b w-[calcl(100%-80px)] float-right">

    </div>
  </div>
</template>

<script setup>
import CheckAllIcon from 'vue-material-design-icons/CheckAll.vue'
</script>