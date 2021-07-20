<template>
  <section :class="nameClass + ' text-center'">
        <h3 class="sub-title">{{subTitle}}</h3>
        <h2 class="title">{{title}}</h2>
        <!-- include component dynamically -->
        <component :is="currentComponent"></component>
  </section>
</template>

<script>
export default {
    name: 'Section',
    props:{
        subTitle: String,
        title: String,
        component: String,
        nameClass: String
    },
    data(){
        return {
            currentComponent: undefined
        }
    },
    created(){
        this.currentComponent = () =>  import(`@/components/${this.component}.vue`);
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

section{
    padding: 100px 0;
}

.sub-title{
    color: $color-primary;
    font-weight: 400;
    font-size: 1.3rem;
}

.title{
    margin: 30px 0 60px;
    font-size: 2rem;
    font-weight: 600;
    color: $color-text;
    padding: 0 180px;
}
</style>