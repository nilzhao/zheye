import * as VueRouter from 'vue-router';
import ZhuanLanPage from '@/pages/zhuanlan';
import LoginPage from '@/pages/login';

const routes = [
  { path: '/', component: ZhuanLanPage },
  { path: '/login', component: LoginPage },
];

const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHistory(),
});

export default router;
