<template>
    <div class="container row text-left">
        <div v-for="index in 6" :key="index" class="col-6">
            <!-- inizio card evento da mettere in un componente -->
            <div class="card d-flex justify-content-between">
                <div class="left-box">
                    <div class="event-location">
                        <i class="fas fa-map-marker-alt"></i>
                        Texas, US
                    </div>
                    <h3 class="event-title">Storytelling Workshop</h3>
                </div>
                <div class="right-box">
                    <div class="event-date text-center">
                        <div class="event-date-day">22</div>
                        <div class="event-date-month">Apr</div>
                    </div>
                    <div class="button-wrapper">
                        <a href="#" class="btn btn-primary">Get ticket</a>
                    </div>
                </div>
            </div>
            <!-- fine card evento da mettere in un componente -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Events'
}
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

/* inizio stile card da mettere nel componente card event */
.card{
    width: 90%;
    padding: 30px;
    border-radius: 5px;
    background: #f8f8f8;
    margin: 20px auto;

    &:hover{
        background: #fff;

        &{
            border-left: 5px solid $color-primary;
            box-shadow: 0 0 40px rgba(51, 51, 51, 0.1);
        }
    }
}

.event-location{
    font-size: 14px;
    color: #7e7e7e;
    margin: 0 0 7px;
}

.event-date-day{
    color: $color-primary;
    font-size: 2.5rem;
}

.event-date-month{
    text-transform: uppercase;
    margin-bottom: 10px;
}

.btn{
    padding: 5px 10px;
}

/* fine stile card da mettere nel componente card event */

</style>