<template>
  <div id="app">
    <Header :items="menus"/>
    <Jumbotron/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import menu from '@/api/menu.js';
import Jumbotron from './components/Jumbotron.vue';

export default {
  name: 'App',
  components: {
    Header,
    Jumbotron
  },
  data(){
    return{
      menus: []
    }
  },
  mounted() {
    const json = menu;
    const obj = JSON.parse(json);
    this.menus = obj;
    console.log(obj);
  }
}
</script>

<style lang="scss">
@import '@/style/flix.scss';
@import '@/style/common.scss';
</style>
