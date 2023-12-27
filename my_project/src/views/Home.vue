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
    margin: 30px 50px;
    height: 1000px;
    align-items: center;
}
.makiyazh{
    width: 400px;
    height: 400px;
    margin: 20px 20px;
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
</style>
  