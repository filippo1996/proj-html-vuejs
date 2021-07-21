<template>
    <div class="container-fluid row text-left">
        <div v-for="index in 3" :key="index" class="col-4">
            <div class="card">
                <div class="content">
                    <h4>High level of efficiency and scientific teaching methods</h4>
                    <p class="description">I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.</p>
                    <div class="info">
                        <img class="avatar" src="@/assets/img/testimonial-avata-02.jpg" alt="user testimonial">
                        <div class="cite">
                            <div class="name">Mina Hollace</div>
                            <div class="position">/ Freelancer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Testimonials'
}
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

/* Style della card da mettere su un componente */
.card{
    width: 90%;
    margin: 0 auto;

    .content{
        padding: 40px;
        background: white;
    }

    .description{
        margin-top: 10px;
    }

    .info{
        display: flex;
        align-items: center;
        margin-top: 30px;
    }
}

.avatar{
    width: 80px;
    border-radius: 50%;
    margin-right: 20px;
}


.name{
    text-transform: uppercase;
    font-weight: 700;
}

</style>