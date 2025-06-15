import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from '@/types/RandomUserTypes';

export const useUserStore = defineStore('userStore', () => {
  const users = ref<User[]>([]);
  const filteredUsers = ref<User[]>([]);
  const currentPage = ref(1);
  const itemsPerPage = 10;
  const genderFilter = ref('');
  
  function setUsers(newUsers: User[]) {
    users.value = newUsers;
    localStorage.setItem('users', JSON.stringify(newUsers));
  }
  function loadFromStorage() {
    const stored = localStorage.getItem('users');
    if (stored) {
      users.value = JSON.parse(stored);
    }
  }

  function applyFilter(gender: string) {
    genderFilter.value = gender;
    currentPage.value = 1;
    localStorage.removeItem('users');
  }

  function getPaginatedUsers(): User[] {
    const list = genderFilter.value
      ? users.value.filter(u => u.gender === genderFilter.value)
      : users.value;

    return list.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage);
  }

  function nextPage() {
    currentPage.value++;
  }

  function backPage() {
    if (currentPage.value > 1) currentPage.value--;
  }

  function refresh() {
    users.value = [];
    localStorage.removeItem('users');
  }

  return {
    users,
    filteredUsers,
    currentPage,
    itemsPerPage,
    genderFilter,
    setUsers,
    loadFromStorage,
    applyFilter,
    getPaginatedUsers,
    nextPage,
    backPage,
    refresh,
  };
});