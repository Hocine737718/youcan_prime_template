import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store';
import FirstView from '@/views/FirstView.vue';
const routes: Array<RouteRecordRaw> = [
  { path: "/:pathMatch(.*)*", redirect: "/" },
  {
    path: "/",
    component: FirstView,
    // meta: { requiresAuth: true, layout: "default" },
    meta: { requiresAuth: false, layout: "default" },
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
  ],
});

// router.beforeEach((to, from, next) => {
//   if (
//     to.meta.requiresAuth &&
//     !useAuthStore().user &&
//     !useAuthStore().isLoggedIn() &&
//     to.fullPath != "/auth/login"
//   ) {
//     next("/auth/login");
//   }
//   else {
//     next();
//   }
// });

export default router;
