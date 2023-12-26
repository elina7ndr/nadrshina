import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Проверьте правильность пути к вашим компонентам
import Login from './views/LoginForm.vue';
import Register from './views/RegisterForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  // Другие маршруты...
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
