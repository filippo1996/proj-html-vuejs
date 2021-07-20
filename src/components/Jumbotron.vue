<template>
  <section class="jumbotron">
      <div class="row h-100 container-fluid">
          <div class="col-6 position-relative">
              <div class="content">
                  <h3 class="sub-title">New Challenges, New Skills</h3>
                  <h2 class="title">Build Your Own Life Coaching Business</h2>
                  <p class="paragraph">Whole-Life Business Coaching for committed entrepreneurs</p>
                  <a href="#" class="btn btn-primary btn-xl">Get started today</a>
              </div>
          </div>
          <div class="col-6 position-relative overflow-x-hidden">
                <img class="image first-image" src="../assets/img/home-business-hero-global-image.png" alt="business global">
                <img class="image second-image" src="../assets/img/home-business-hero-avatar.png" alt="uomo che raffigura il business">
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'Jumbotron'
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.jumbotron{
    height: 820px;
    background: #eff2f6;
    padding-top: 100px;
}

.content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.sub-title{
    color: $color-primary;
    font-weight: 400;
    font-size: 1.3rem;
}

.title{
    margin: 20px 0;
    text-transform: uppercase;
    font-size: 2.5rem;
    color: $color-text;
}

.paragraph{
    color: $color-lightgrey;
    font-size: 0.9rem;
    margin-bottom: 40px;
}

.image{
    bottom: 0;
    left: 0;
    position: absolute;
}

.first-image{
    z-index: 1;
}

.second-image{
    z-index: 2;
}
</style>