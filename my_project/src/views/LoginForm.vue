<template>
  <div class="main">
  <div class="login">
    <h2>Войти</h2>
    <form>
      <label for="username">Логин:</label>
      <input type="text" id="username" v-model="username">

      <label for="password">Пароль:</label>
      <input type="password" id="password" v-model="password">

      <router-link to="/" class="action"><button @click="home">Войти</button></router-link>
    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Ваша логика для обработки данных формы входа
    },
  },
};
</script>

<style>
 .main{
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 100px;
    margin-bottom: 120px;

  }
  .login{
    width: 300px;
    display: flex;
    background-color: #A2EF00;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 0px 0px 20px 3px gray;
    flex-direction: column;
    margin-top: 30px; 
    padding: 30px;
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input{
    margin: 10px;
  }
  button{
    margin-top: 15px;
    background-color: #BBF73E;
    padding: 15px;
    border-radius: 15px;
    border: 0px;
    color: white;
    font-weight: bold;
  }
</style>