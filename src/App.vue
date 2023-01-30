<template>
  <router-view />
</template>

<script setup>
import { useUserStore } from './store/user-store'
import { useRouter } from 'vue-router';
import { onMounted } from '@vue/runtime-core';

const router = useRouter();
const userStore = useUserStore();

onMounted(() => {
  if(!userStore.sub) {
    router.push('/login')
  }
})
</script>

<style scoped>

</style>
