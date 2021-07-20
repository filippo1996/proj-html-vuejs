<template>
    <div class="container services row justify-content-around">
        <div class="col-4">
            <div class="card">
                <div class="icon">
                    <i class="far fa-lightbulb"></i>
                </div>
                <div class="content">
                    <h2 class="title">One to One</h2>
                    <p class="description">Getting the necessary clarity about the current state to help you improve your game.</p>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="icon">
                    <i class="fas fa-map-marked-alt"></i>
                </div>
                <div class="content">
                    <h2 class="title">One to One</h2>
                    <p class="description">Getting the necessary clarity about the current state to help you improve your game.</p>
                </div>
            </div>
        </div><div class="col-4">
            <div class="card">
                <div class="icon">
                    <i class="far fa-clock"></i>
                </div>
                <div class="content">
                    <h2 class="title">One to One</h2>
                    <p class="description">Getting the necessary clarity about the current state to help you improve your game.</p>
                </div>
            </div>
        </div>

        <div class="col-4">
            <div class="card">
                <div class="icon">
                    <i class="fas fa-laptop"></i>
                </div>
                <div class="content">
                    <h2 class="title">One to One</h2>
                    <p class="description">Getting the necessary clarity about the current state to help you improve your game.</p>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="icon">
                    <i class="far fa-life-ring"></i>
                </div>
                <div class="content">
                    <h2 class="title">One to One</h2>
                    <p class="description">Getting the necessary clarity about the current state to help you improve your game.</p>
                </div>
            </div>
        </div><div class="col-4">
            <div class="card">
                <div class="icon">
                    <i class="fas fa-cog"></i>
                </div>
                <div class="content">
                    <h2 class="title">One to One</h2>
                    <p class="description">Getting the necessary clarity about the current state to help you improve your game.</p>
                </div>
            </div>
        </div>
        <div class="callback">
            <a class="btn" href="#">Learn more</a>
            <a class="btn btn-primary margin-left-20" href="#">Get started today</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services'
}
</script>

<style lang="scss" scoped>

.icon{
    font-size: 3.5rem;
}

.card{
    display: flex;
    margin-bottom: 40px;

    .content{
        text-align: left;
        padding: 0 40px;

        .title{
            font-weight: 500;
        }

        .description{
            font-size: 0.9rem;
        }

    }
}

.callback{
    margin: 40px 0;
}
</style>