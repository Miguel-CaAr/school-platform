import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import("../modules/teachers/views/DashboardView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../modules/students/views/HomeView.vue"),
    },
  ],
});
// router.beforeEach
export default router;
