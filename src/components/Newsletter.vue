<template>
    <section class="container text-center">
        <div class="heading-primary">
            <h2 class="elementor-heading-title">
                Subscribe Newsletters
            </h2>
        </div>
        <div class="heading-description">
            <p>Enter your email address to register to our newsletter subscription</p>
        </div>

        <div class="widget">
            <form class="elementor-form">
                <input type="email" placeholder="Enter you email">
                <button @click.prevent="" class="btn btn-primary">Subscribe</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Newsletters'
}
</script>

<style scoped lang="scss">
section{
    padding: 80px 0;
}

.elementor-heading-title{
    font-size: 3rem;
}

.heading-description{
    font-size: 18px;
    font-weight: 500;
    line-height: 1.67em;
    color: #767676;
}

.widget{
    margin-top: 40px;
}

input{
    width: 50%;
    padding: 15px;
    border: 0;
    background: #f5f5f5;
}

.btn{
    padding: 15px;
    border-radius: 0 5px 5px 0;
}
</style>