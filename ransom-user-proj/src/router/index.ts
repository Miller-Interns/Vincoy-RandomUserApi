import { createRouter, createWebHistory } from 'vue-router';
import UserList from '@/components/user-list.vue';
import UserDetail from '@/components/user-detail.vue';
import { RouteNames } from '../route-names/route-name.ts'

const routes = [
  {
    path: '/',
    name: RouteNames.UserList,
    component: UserList,
  },
  {
    path: '/user/:id',
    name: RouteNames.UserDetail,
    component: UserDetail,
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});