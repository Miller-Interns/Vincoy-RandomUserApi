<template>
  <div >
  
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserStore } from '@/composables/use-store';

const store = useUserStore();

onMounted(() => {
  store.refresh(); 
});
</script>