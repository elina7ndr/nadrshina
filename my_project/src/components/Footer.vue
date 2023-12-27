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
    width: 100%;
    height: 90px;
    background-color: #CB0077;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    color: white;
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