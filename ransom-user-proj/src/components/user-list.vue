<template>
  <div>
    <h1>User List</h1>
    <button @click="refreshList">Refresh</button>
    <select v-model="filter" @change="applyGenderFilter">
      <option value="">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <div v-for="user in paginatedUsers" :key="user.login.uuid">
      <UserCard :user="user" @click="goToDetail(user.login.uuid)" />
    </div>
    <button @click="backPage">Back</button>
    <button @click="nextPage">Next</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/composables/use-store.ts';
import UserCard from './user-card.vue';
import { useGetUser } from '@/composables/use-get-user';

   const store = useUserStore();
   const { getUsers, users } = useGetUser();
   const filter = ref(store.genderFilter);
   const router = useRouter();
   const applyGenderFilter = () => {
   store.applyFilter(filter.value);
  getUsers(50, filter.value).then(() => store.setUsers(users.value));
};

const refreshList = () => {
  store.refresh();
  getUsers(50, filter.value).then(() => store.setUsers(users.value));
};

onMounted(() => {
  store.loadFromStorage();
  if (store.users.length === 0) {
    getUsers(50).then(() => store.setUsers(users.value));
  }
});
const paginatedUsers = computed(() => store.getPaginatedUsers());
const nextPage = store.nextPage;
const backPage = store.backPage;
const goToDetail = (uuid: string) => {
  router.push(`/user/${uuid}`);
};

</script>
