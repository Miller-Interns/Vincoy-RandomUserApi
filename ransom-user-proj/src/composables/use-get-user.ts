import { ref } from 'vue';
import type { User } from '@/types/RandomUserTypes';

export function useGetUser() {
  const users = ref<User[]>([]);
  const getUsers = async (results = 20, gender = '') => {
    const url = `https://randomuser.me/api/?results=${results}${gender ? `&gender=${gender}` : ''}`;
    const res = await fetch(url); 
    const data = await res.json(); 
    users.value = data.results;
  };

  return {
    users,
    getUsers, 
  };
}
