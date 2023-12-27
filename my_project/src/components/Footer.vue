<template>
    <footer>
      <div class="footer-content">
        <div class="social-icons">
          <ul class="socialmedia">
            <li><img src="@/assets/facebook.png"> facebook/makeup.com</li>
            <li><img src="@/assets/twitter.png"> twitter/makeup.com</li>
            <li><img src="@/assets/instagram.png"> instagram/makeup.com</li>
          </ul>
        </div>
        <div class="contact-info">
          <p>Адрес: г. Санкт-Петербург ул. Достоевского д. 14</p>
          <p>Телефон: +7 999 447 64 00</p>
        </div>
        
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
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