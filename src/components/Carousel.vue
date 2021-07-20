<template>
    <div class="container row">
        <div class="col-4">
            <div class="card">
                <div class="box-image">
                    <img src="@/assets/img/home-business-service-slide-01-480x298.jpg" alt="prima immagine card">
                </div>
                <div class="content">
                    <h3>Consultative Traning</h3>
                    <p class="description">With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.</p>
                </div>
                <div class="btn-action">
                    <a href="#">Discover now</a>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="box-image">
                    <img src="@/assets/img/home-business-service-slide-02-480x298.jpg" alt="prima immagine card">
                </div>
                <div class="content">
                    <h3>Consultative Traning</h3>
                    <p class="description">With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.</p>
                </div>
                <div class="btn-action">
                    <a href="#">Discover now</a>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="box-image">
                    <img src="@/assets/img/home-business-service-slide-03-480x298.jpg" alt="prima immagine card">
                </div>
                <div class="content">
                    <h3>Consultative Traning</h3>
                    <p class="description">With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.</p>
                </div>
                <div class="btn-action">
                    <a href="#">Discover now</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel'
}
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

/* Style della card da mettere su un componente */
.card{
    width: 90%;

    .box-image{
        width: 100%;
        overflow: hidden;
        border-radius: 10px 10px 0 0;

        img{
        width: 100%;
        transition: transform 1.2s; /* Animation */

            &:hover{
                transform: scale(1.1);
            }
        }
    }

    .content{
        padding: 20px;
        border-bottom: 1px solid #c9c5c5;
        background: white;
    }

    .description{
        margin-top: 10px;
    }

    .btn-action{
        padding: 15px;
        border-radius: 0 0 10px 10px;
        background: white;

        a{
            color: $color-primary;
        }

        &:hover{
            background: $color-primary;

            a{
                color: #fff;
            }
        }
    }
}

</style>