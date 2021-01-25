import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Loading from '../views/Loading.vue';
import Admin from '../views/Admin/Admin.vue';
import Seller from '../views/Seller.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/load',
    name: 'Loading',
    component: Loading,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '/medicamento',
        name: 'Medicamento',
        component: () => import('../views/Admin/Medicamento.vue'),
      },
      {
        path: '/vendas',
        name: 'Sells',
        component: () => import('../views/Admin/Sells.vue'),
      },
    ],
  },
  {
    path: '/seller',
    name: 'Seller',
    component: Seller,
    children: [
      {
        path: '/medicamentoS',
        name: 'MedicamentoS',
        component: () => import('../views/Seller/Medicamento.vue'),
      },
      {
        path: '/vendasS',
        name: 'SellsS',
        component: () => import('../views/Seller/Sells.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
