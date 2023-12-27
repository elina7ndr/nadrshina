<template>
  <footer> <!-- Открываем тег footer для нижней части страницы -->
    <div class="footer-content"> <!-- Создаем блок с классом "footer-content" для содержимого подвала -->
      <div class="social-icons"> <!-- Создаем блок с классом "social-icons" для отображения иконок социальных сетей -->
        <ul class="socialmedia"> <!-- Создаем список с классом "socialmedia" для отображения иконок социальных сетей -->
          <li><img src="@/assets/facebook.png"> facebook/makeup.com</li> <!-- Вставляем изображение и текст для ссылки на Facebook -->
          <li><img src="@/assets/twitter.png"> twitter/makeup.com</li> <!-- Вставляем изображение и текст для ссылки на Twitter -->
          <li><img src="@/assets/instagram.png"> instagram/makeup.com</li> <!-- Вставляем изображение и текст для ссылки на Instagram -->
        </ul>
      </div>
      <div class="contact-info"> <!-- Создаем блок с классом "contact-info" для отображения контактной информации -->
        <p>Адрес: г. Санкт-Петербург ул. Достоевского д. 14</p> <!-- Отображаем адрес компании -->
        <p>Телефон: +7 999 447 64 00</p> <!-- Отображаем контактный телефон компании -->
      </div>
      
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer' // Устанавливаем имя компонента "Footer"
};
</script>

  
  <style scoped>
  footer {
    display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: #CB0077;
  color: white;
  padding: 10px 20px;
  margin: 0;
  text-decoration: none;
  position: -webkit-sticky;
  position: sticky;

  }
  
  .footer-content {
    display: flex;
  }
  
  
  .contact-info p {
    margin-left: 700px;
  }
  img{
    width: 15px;
  }
  .socialmedia{
    list-style-type: none;
  }
  </style>