<template>
  <header>
  <div class="menu">
    <div class="logo">
      <span>Make Up</span>
    </div>
    <div class="tabs">
      <div v-for="tab in tabs" :key="tab" class="tab">{{ tab }}</div>
    </div>
    <div class="actions">
      <router-link to="/login" class="action">Войти</router-link>
      <router-link to="/register" class="action">Зарегистрироваться</router-link>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      tabs: ["Каталог", "Новости", "Курсы", "О нас"],
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