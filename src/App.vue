<template>
  <div id="app">
    <Header :items="menus"/>
    <Jumbotron/>
    <main>
      <Section nameClass="container-fluid" component="Services" subTitle="Let’s Dream Big Together" title="We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply executive coaching in the new age of digitalization."/>
      <Section nameClass="background-lightgrey container-fluid" component="Carousel" subTitle="Let’s Dream Big Together" title="Explore How can I help you"/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import menu from '@/api/menu.js';
import Jumbotron from './components/Jumbotron.vue';
import Section from './components/Section.vue';

export default {
  name: 'App',
  components: {
    Header,
    Jumbotron,
    Section
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
