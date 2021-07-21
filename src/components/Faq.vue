<template>
    <div>
        <div v-for="(faq, index) in itemsFaq" :key="index" :class="countActive === index ? 'active' : null + ' accordion-section'">
            <div @click="activeAccording(index)" class="according-header">
                <i :class="countActive === index ? 'far fa-arrow-alt-circle-up' : 'far fa-arrow-alt-circle-down'"></i>
                <span>{{faq.header}}</span>
            </div>
            <div :style="countActive === index ? 'display: block' : null" class="according-content">
                <p v-for="(content, index) of faq.content" :key="index">{{content}}</p>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Faq',
    data(){
        return {
            itemsFaq: [
                {
                    header: 'How can we help?',
                    content: [
                        'How many courses you’ve been on, using however many techniques and methods. Unless you’ve come to realize the value of mindset, then you’ve yet to understand how success comes.',
                        'With everyone else’s mindset involved impacting too. Hence why business coaching is so crucial for success.'
                    ]
                },
                {
                    header: 'How can we help?',
                    content: [
                        'How many courses you’ve been on, using however many techniques and methods. Unless you’ve come to realize the value of mindset, then you’ve yet to understand how success comes.',
                        'With everyone else’s mindset involved impacting too. Hence why business coaching is so crucial for success.'
                    ]
                },
                {
                    header: 'How can we help?',
                    content: [
                        'How many courses you’ve been on, using however many techniques and methods. Unless you’ve come to realize the value of mindset, then you’ve yet to understand how success comes.',
                        'With everyone else’s mindset involved impacting too. Hence why business coaching is so crucial for success.'
                    ]
                }
            ],
            countActive: 0
        }
    },
    methods: {
        activeAccording: function(count){
            if(this.countActive === count){
                this.countActive = null;
                return;
            }
            this.countActive = count;
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.according-header{
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;

    i{
        margin-right: 20px;
    }

    &:hover{
        color: $color-primary;
    }
}


.according-content{
    display: none;
    color: #fff;
    font-size: 0.8rem;
    margin-left: 45px;

    & > p{
        margin: 20px 0;
    }
}

.active .according-header{
    color: $color-primary;
}

hr{
    margin: 20px 0;
}

</style>