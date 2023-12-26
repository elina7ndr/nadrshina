import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Убедитесь, что правильный путь к вашему файлу маршрутизатора

const app = createApp(App);
app.use(router); // Используйте ваш маршрутизатор здесь

app.mount('#app');