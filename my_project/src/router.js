import { createRouter, createWebHistory } from 'vue-router'; // Импортируем функции createRouter и createWebHistory из библиотеки vue-router для создания маршрутизатора и истории навигации
import Home from './views/Home.vue'; // Импортируем компонент Home из файла Home.vue, который будет отображаться при переходе на путь '/'
import Login from './views/LoginForm.vue'; // Импортируем компонент Login из файла LoginForm.vue, который будет отображаться при переходе на путь '/login'
import Register from './views/RegisterForm.vue'; // Импортируем компонент Register из файла RegisterForm.vue, который будет отображаться при переходе на путь '/register'

const routes = [ // Создаем массив маршрутов, каждый маршрут содержит путь, имя и соответствующий компонент
  {
    path: '/', // Путь к главной странице
    name: 'Home', // Имя маршрута для ссылок и программной навигации
    component: Home // Компонент, который будет отображаться при переходе на этот путь
  },
  {
    path: '/login', // Путь к странице входа
    name: 'Login', // Имя маршрута для ссылок и программной навигации
    component: Login // Компонент, который будет отображаться при переходе на этот путь
  },
  {
    path: '/register', // Путь к странице регистрации
    name: 'Register', // Имя маршрута для ссылок и программной навигации
    component: Register // Компонент, который будет отображаться при переходе на этот путь
  },
];

const router = createRouter({ // Создаем маршрутизатор с помощью функции createRouter
  history: createWebHistory(), // Устанавливаем историю навигации веб-приложения с помощью функции createWebHistory
  routes // Передаем массив маршрутов в качестве параметра при создании маршрутизатора
});

export default router; // Экспортируем созданный маршрутизатор для использования в других частях приложения
