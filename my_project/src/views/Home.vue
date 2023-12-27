<template>
  <div class="block1"> <!-- Открываем блок с классом "block1" -->
    <h1>Каталог макияжей</h1> <!-- Выводим заголовок "Каталог макияжей" -->
    <div class="caorusel"> <!-- Создаем блок с классом "caorusel" для отображения карусели изображений -->
      <button class="arrow-button" @click="prevImage">&lt;</button>  <!-- Создаем кнопку для переключения на предыдущее изображение -->
      <img :src="currentImage.url" :alt="currentImage.description" class="makiyazh" />  <!-- Выводим изображение с динамическими значениями src и alt -->
      <button class="arrow-button" @click="nextImage">&gt;</button>  <!-- Создаем кнопку для переключения на следующее изображение -->
    </div>
    <div class="description"> <!-- Создаем блок с классом "description" для отображения описания изображения -->
      <p class="image-description">Макияж:  {{ currentImage.description }}</p>  <!-- Выводим описание текущего изображения -->
      <p>Сложность:  {{ currentImage.level }}</p>  <!-- Выводим уровень сложности текущего изображения -->
      <p>Цена видеоурока:  {{ currentImage.price }} рублей</p>  <!-- Выводим цену видеоурока по текущему изображению -->
    </div>
    <h1>Полезные советы</h1>  <!-- Выводим заголовок "Полезные советы" -->
    <div class="sovet"> <!-- Создаем блок с классом "sovet" для отображения каждого совета -->
      <img class="sovet_image" src="@/assets/осыпавшиеся тени.jpg">  <!-- Выводим изображение совета -->
      <div class="sovet_description"> <!-- Создаем блок с классом "sovet_description" для отображения описания совета -->
          <h2>Осыпались тени, что делать?</h2>  <!-- Выводим заголовок совета -->
          <p>Осыпавшиеся тени можно убрать поролоновым аппликатором – работает как ластик! А также чтобы избавиться от осыпавшихся теней, воспользуйтесь чистой кистью и аккуратно смахните их с нижнего века. Кистью для консилера аккуратно замаскируйте нижнее веко, скрыв разводы от осыпавшихся теней. Можно также воспользоваться влажным спонжем и промокнуть нижнее веко, а затем так же замаскировать нижнее веко консилером подходящего оттенка.</p> <!-- Выводим текст описания совета -->
      </div>
    </div>
    <!-- ... (аналогично для остальных советов) ... -->
  </div>
</template>

<script>
// Экспортируем компонент Home
export default {
  // Устанавливаем имя компонента
  name: 'Home',
  // Определяем данные компонента
  data(){
    // Возвращаем объект с данными
    return {
      // Массив изображений с описанием, уровнем сложности и ценой видеоурока
      images: [
        { url: require('@/assets/блестящий.png'), description: 'Блестящий', level: 'Средний', price: '1000' }, 
        { url: require('@/assets/естественный.png'), description: 'Естественный', level: 'Лёгкий', price: '400' },
        { url: require('@/assets/вечерний.png'), description: 'Вечерний', level: 'Средний', price: '1000' }, 
        { url: require('@/assets/хэллоуин.png'), description: 'Хэллоуин', level: 'Сложный', price: '2000' },
        { url: require('@/assets/нюд.png'), description: 'Нюдовый', level: 'Лёгкий', price: '550' },
        { url: require('@/assets/яркий.png'), description: 'Яркий', level: 'Сложный', price: '1800' }
      ],
      // Индекс текущего отображаемого изображения
      currentImageIndex: 0
    };
  },
  // Определяем вычисляемое свойство для получения текущего изображения
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    }
  },
  // Определяем методы для переключения на предыдущее и следующее изображение
  methods: {
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
  }
}
</script>


<style>
.block1{
    margin: 100px 50px;

    align-items: center;
}
.makiyazh{
    width: 400px;
    height: 400px;
    margin: 20px 20px;
    border: 5px solid #A2EF00;
}
.caorusel{
    display: flex;
    justify-content: center;
    align-items: center;
}
.description{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.image-description{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: larger;
    background-color: #A2EF00;
    padding: 10px 5px;
    width: 300px;
    font-weight: 600;
    color: rgb(59, 59, 59);
    border-radius: 15px;
    margin-bottom: 15px;
}
p{
    padding-bottom: 15px;
}
.sovet_image{
  width: 500px;
  border: 5px solid #A2EF00;
  
}
.sovet{
  display: flex;
  flex-direction: row;
  margin-left: 100px;
  margin-top: 100px;
  align-items: center;
}
.sovet_description{
  margin-left: 50px;
  font-size: 120%;
}
h2{
  margin-bottom: 30px;
}
</style>
  