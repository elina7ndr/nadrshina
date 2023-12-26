<template>
  <div class="main">
  <div class="login">
    <h2>Зарегистрироваться</h2>
    <form>
      <label for="lastname">Фамилия:</label>
      <input type="text" id="lastname" v-model="lastname">

      <label for="firstname">Имя:</label>
      <input type="text" id="firstname" v-model="firstname">

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email">

      <label for="username">Логин:</label>
      <input type="text" id="username" v-model="username">

      <label for="password">Пароль:</label>
      <input type="password" id="password" v-model="password">

      <router-link to="/" class="action"><button @click="home">Зарегистрироваться</button></router-link>
    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      lastname: '',
      firstname: '',
      email: '',
      username: '',
      password: '',
    };
  },
  methods: {
    register() {
      // Ваша логика для обработки данных формы регистрации
    },
  },
};
</script>
