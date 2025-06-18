<template>
  <div v-if="user">
    <h2>{{ user.name.first }} {{ user.name.last }}</h2>
    <img :src="user.picture.large" />
    <p>{{ user.email }}</p>
    <p>{{ user.location.city }}, {{ user.location.country }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/composables/use-store.ts';

   const route = useRoute();
   const store = useUserStore();
   const user = computed(() =>
   store.users.find(u => u.login.uuid === route.params.id)
);

</script>