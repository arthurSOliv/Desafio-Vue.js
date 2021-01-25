/* eslint-disable max-len */
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
    beforeEnter: (to, from, next) => {
      const permission = localStorage.getItem('token');
      if (permission === 'admin') {
        next(); // Take you to /chat
      } else {
        // If params.name is blank or in your case, does not have permission, redirect back to the welcome page
        next({ name: 'Home' });
      }
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      const permission = localStorage.getItem('token');
      if (permission === 'admin') {
        next(); // Take you to /chat
      } else {
        // If params.name is blank or in your case, does not have permission, redirect back to the welcome page
        next({ name: 'Home' });
      }
    },
    children: [
      {
        path: '/medicamento',
        name: 'Medicamento',
        component: () => import('../views/Admin/Medicamento.vue'),
        beforeEnter: (to, from, next) => {
          const permission = localStorage.getItem('token');
          if (permission === 'admin') {
            next(); // Take you to /chat
          } else {
            // If params.name is blank or in your case, does not have permission, redirect back to the welcome page
            next({ name: 'Home' });
          }
        },
      },
      {
        path: '/vendas',
        name: 'Sells',
        component: () => import('../views/Admin/Sells.vue'),
        beforeEnter: (to, from, next) => {
          const permission = localStorage.getItem('token');
          if (permission === 'admin') {
            next(); // Take you to /chat
          } else {
            // If params.name is blank or in your case, does not have permission, redirect back to the welcome page
            next({ name: 'Home' });
          }
        },
      },
    ],
  },
  {
    path: '/seller',
    name: 'Seller',
    component: Seller,
    beforeEnter: (to, from, next) => {
      const permission = localStorage.getItem('token');
      if (permission === 'seller') {
        next(); // Take you to /chat
      } else {
        // If params.name is blank or in your case, does not have permission, redirect back to the welcome page
        next({ name: 'Home' });
      }
    },
    children: [
      {
        path: '/medicamentoS',
        name: 'MedicamentoS',
        component: () => import('../views/Seller/Medicamento.vue'),
        beforeEnter: (to, from, next) => {
          const permission = localStorage.getItem('token');
          if (permission === 'seller') {
            next(); // Take you to /chat
          } else {
            // If params.name is blank or in your case, does not have permission, redirect back to the welcome page
            next({ name: 'Home' });
          }
        },
      },
      {
        path: '/vendasS',
        name: 'SellsS',
        component: () => import('../views/Seller/Sells.vue'),
        beforeEnter: (to, from, next) => {
          const permission = localStorage.getItem('token');
          if (permission === 'seller') {
            next(); // Take you to /chat
          } else {
            // If params.name is blank or in your case, does not have permission, redirect back to the welcome page
            next({ name: 'Home' });
          }
        },
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
