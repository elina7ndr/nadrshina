<template>
    <div class="block1">
      <h1>Каталог макияжей</h1>
      <div class="caorusel">
      <button class="arrow-button" @click="prevImage">&lt;</button> 
      <img :src="currentImage.url" :alt="currentImage.description" class="makiyazh" /> 
      <button class="arrow-button" @click="nextImage">&gt;</button> 
      </div>
      <div class="description">
        <p class="image-description">Макияж:  {{ currentImage.description }}</p>
        <p>Сложность:  {{ currentImage.level }}</p>
        <p>Цена видеоурока:  {{ currentImage.price }} рублей</p>
      </div>
      <h1>Полезные советы</h1>
      <div class="sovet">
        <img class="sovet_image" src="@/assets/осыпавшиеся тени.jpg">
        <div class="sovet_description">
            <h2>Осыпались тени, что делать?</h2>
            <p>Осыпавшиеся тени можно убрать поролоновым аппликатором – работает как ластик! А также чтобы избавиться от осыпавшихся теней, воспользуйтесь чистой кистью и аккуратно смахните их с нижнего века. Кистью для консилера аккуратно замаскируйте нижнее веко, скрыв разводы от осыпавшихся теней. Можно также воспользоваться влажным спонжем и промокнуть нижнее веко, а затем так же замаскировать нижнее веко консилером подходящего оттенка.</p>
        </div>
      </div>

      <div class="sovet">
        <img class="sovet_image" src="@/assets/контур губ.jpg">
        <div class="sovet_description">
            <h2>Хочешь ровный контур губ?</h2>
            <p>Не получается сделать ровно яркий контур губ? Нанеси помаду, не доходя до контура, а потом карандашом «растяни» текстуру помады до желаемой формы. Кстати, карандаш не должен быть острым! Слегка затупи грифель об руку или салфетку.</p>
        </div>
      </div>

      <div class="sovet">
        <img class="sovet_image" src="@/assets/бальзам.jpg">
        <div class="sovet_description">
          <h2>Плохо ложится помада?</h2>
          <p>Любой макияж начинай с бальзама для губ. Когда придет черед помады (как правило, в самом конце), они станут мягкими и их будет легче накрасить.</p>
        </div>
      </div>

      <div class="sovet">
        <img class="sovet_image" src="@/assets/расчесывание бровей.jpg">
        <div class="sovet_description">
          <h2>Не получаются аккуратные брови?</h2>
          <p>Прежде чем рисовать брови, прочеши их как следует щеточкой. Между волосков могут скапливаться ороговевшие чешуйки кожи. Они мешают равномерно наносить макияж.</p>
        </div>
      </div>

      <div class="sovet">
        <img class="sovet_image" src="@/assets/растушёвка.jpg">
        <div class="sovet_description">
          <h2>Видна граница тона?</h2>
          <p>Все знают, что границ тонального средства не должно быть видно: его надо тщательно растушевывать – особенно вдоль линии роста волос. Но вот про уши все почему-то забывают!</p>
        </div>
      </div>

      <div class="sovet">
        <img class="sovet_image" src="@/assets/тушь.jpg">
        <div class="sovet_description">
          <h2>Мечаешь о роскошных ресницах?</h2>
          <p>Многие девушки неправильно красят ресницы. Двигай щеточку зигзагом вверх от самых корней к кончикам. Этот простой прием помогает визуально распахнуть глаза. А еще так можно придать им миндалевидную форму – только двигать щеточку нужно не строго вверх, а в сторону внешнего уголка глаза.</p>
        </div>
      </div>

    </div>

  </template>
  
  <script>

  export default {
    name: 'Home',
  data(){
    return {
      images: [
        { url: require('@/assets/блестящий.png'), description: 'Блестящий', level: 'Средний', price: '1000' }, 
        { url: require('@/assets/естественный.png'), description: 'Естественный', level: 'Лёгкий', price: '400' },
        { url: require('@/assets/вечерний.png'), description: 'Вечерний', level: 'Средний', price: '1000' }, 
        { url: require('@/assets/хэллоуин.png'), description: 'Хэллоуин', level: 'Сложный', price: '2000' },
        { url: require('@/assets/нюд.png'), description: 'Нюдовый', level: 'Лёгкий', price: '550' },
        { url: require('@/assets/яркий.png'), description: 'Яркий', level: 'Сложный', price: '1800' }
      ],
      currentImageIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    }
  },
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
  