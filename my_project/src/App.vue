<template>
     <div id="app">
    <Menu />
    <router-view></router-view>
    <Footer />
  </div>
  
</template>

<script>
import Menu from "./components/Menu.vue";
import router from './router';
import Footer from "@/components/Footer.vue";
export default {
  router,
  name: "App",
  components: {
    Menu,
    Footer
  },
 
};

</script>

<style>
*{
  margin: 0;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
Footer{
  display: flex;
  align-self: flex-end;
}
</style>
