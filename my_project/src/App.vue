<template>
  <div class="main"> <!-- Создаем контейнер для основного содержимого страницы -->
  <div class="login"> <!-- Создаем контейнер для формы регистрации -->
    <h2>Зарегистрироваться</h2> <!-- Отображаем заголовок "Зарегистрироваться" -->
    <form> <!-- Создаем форму для ввода данных -->
      <label for="lastname">Фамилия:</label> <!-- Отображаем метку для ввода фамилии -->
      <input type="text" id="lastname" v-model="lastname"> <!-- Создаем текстовое поле для ввода фамилии и связываем его с данными lastname -->

      <label for="firstname">Имя:</label> <!-- Отображаем метку для ввода имени -->
      <input type="text" id="firstname" v-model="firstname"> <!-- Создаем текстовое поле для ввода имени и связываем его с данными firstname -->

      <label for="email">Email:</label> <!-- Отображаем метку для ввода email -->
      <input type="email" id="email" v-model="email"> <!-- Создаем текстовое поле для ввода email и связываем его с данными email -->

      <label for="username">Логин:</label> <!-- Отображаем метку для ввода логина -->
      <input type="text" id="username" v-model="username"> <!-- Создаем текстовое поле для ввода логина и связываем его с данными username -->

      <label for="password">Пароль:</label> <!-- Отображаем метку для ввода пароля -->
      <input type="password" id="password" v-model="password"> <!-- Создаем поле для ввода пароля и связываем его с данными password -->

      <router-link to="/" class="action"><button @click="home">Зарегистрироваться</button></router-link> <!-- Создаем кнопку "Зарегистрироваться", которая будет перенаправлять на главную страницу при клике -->
    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      lastname: '', // Инициализируем переменную для хранения фамилии
      firstname: '', // Инициализируем переменную для хранения имени
      email: '', // Инициализируем переменную для хранения email
      username: '', // Инициализируем переменную для хранения логина
      password: '', // Инициализируем переменную для хранения пароля
    };
  },
  methods: {
    register() {
      // Определяем метод для обработки регистрации пользователя
    },
  },
};
</script>


<style>
*{
  margin: 0; /* Устанавливаем отступы на 0 для всех элементов */
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; /* Устанавливаем шрифт для всех элементов */
}
Footer{
  display: flex; /* Устанавливаем отображение подвала в виде flex-контейнера */
  align-self: flex-end; /* Выравниваем подвал по концу родительского контейнера */
}
</style>

