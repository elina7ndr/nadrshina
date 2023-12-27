<template>
  <header> <!-- Открываем тег header для верхней части страницы -->
    <div class="menu"> <!-- Создаем блок с классом "menu" -->
      <div class="logo"> <!-- Создаем блок с классом "logo" для отображения логотипа -->
        <span>Make Up</span> <!-- Отображаем текст "Make Up" внутри блока "logo" -->
      </div>
      <div class="tabs"> <!-- Создаем блок с классом "tabs" для отображения вкладок меню -->
        <div v-for="tab in tabs" :key="tab" class="tab">{{ tab }}</div> <!-- Используем директиву v-for для отображения вкладок меню, каждая вкладка имеет класс "tab" и содержит текст из массива "tabs" -->
      </div>
      <div class="actions"> <!-- Создаем блок с классом "actions" для отображения действий пользователя -->
        <router-link to="/login" class="action">Войти</router-link> <!-- Создаем ссылку для перехода на страницу входа с текстом "Войти" -->
        <router-link to="/register" class="action">Зарегистрироваться</router-link> <!-- Создаем ссылку для перехода на страницу регистрации с текстом "Зарегистрироваться" -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Menu", // Устанавливаем имя компонента "Menu"
  data() { // Определяем функцию data для возвращения начальных данных компонента
    return {
      tabs: ["Каталог", "Новости", "Курсы", "О нас"], // Устанавливаем массив вкладок для меню
    };
  },
};
</script>

<style scoped>
.menu {
  height: 60px;
  width: 100%;
  background-color: #CB0077;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  position: fixed;
  top: 0;
  color: white;
}

.logo span {
  font-weight: bold;
  font-size: 20px;
}

.tabs {
  display: flex;
}

.tab {
  padding: 0 10px;
  cursor: pointer;
}

.actions {
  display: flex;
}

.action {
  margin-left: 10px;
  cursor: pointer;
}
</style>