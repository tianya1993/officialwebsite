<script setup lang="ts" name="App">
import headMenu from './views/headMenu.vue';
import Footer from "./views/footer.vue"

</script>
<template>
  <div>
    <headMenu />
    <router-view></router-view>

    <Footer></Footer>


  </div>
</template>

<style scoped></style>
