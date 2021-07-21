<template>
  <div id="app">
    <Header :items="menus"/>
    <Jumbotron/>
    <main>
      <Section nameClass="container-fluid" component="Services" subTitle="Let’s Dream Big Together" title="We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply executive coaching in the new age of digitalization."/>
      <Section nameClass="background-lightgrey" component="Carousel" subTitle="Let’s Dream Big Together" title="Explore How can I help you"/>
      <Section component="GridProduct" subTitle="Let’s Dream Big Together" title="Explore How can I help you"/>
      <!-- inizio sezione faq + video youtube -->
      <section class="background-violet">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 margin-y-10">
              <iframe width="660" height="415" src="https://www.youtube.com/embed/ElFJ1qcl74U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-6 margin-y-6 padding-x">
              <h2 class="title-great color-white">To Thrive In Business Today, You’ll Need a Good Plan</h2>
              <!-- inizio componente faq -->
              <Faq/>
              <!-- fine componente faq -->
            </div>
          </div>
        </div>
      </section>
      <!-- fine sezione faq + video youtube -->
      <Section component="Events" subTitle="Wanna transform your life?" title="Upcoming Events"/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import menu from '@/api/menu.js';
import Jumbotron from './components/Jumbotron.vue';
import Section from './components/Section.vue';
import Faq from './components/Faq.vue';

export default {
  name: 'App',
  components: {
    Header,
    Jumbotron,
    Section,
    Faq
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

.title-great{
  font-size: 48px;
  line-height: 1.17em;
  margin-bottom: 30px;
}
</style>
