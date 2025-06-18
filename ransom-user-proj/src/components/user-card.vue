<template>
  <div class="user-card hover:bg-gray-100 cursor-pointer p-4 border rounded">
    <img :src="user.picture.thumbnail" alt="User Picture" class="rounded-full mr-4" />
    <div>
      <h2>{{ user.name.first }} {{ user.name.last }}</h2>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types/RandomUserTypes';
defineProps<{
  user: User;
}>();

</script>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
