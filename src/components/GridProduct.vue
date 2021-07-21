<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3">
                <!-- start card -->
                <div class="card text-left">
                    <a href="#">
                        <img class="image" src="@/assets/img/course-02-443x600.jpg">
                    </a>
                    <div class="content">
                        <div class="price"><span class="format-price">$40</span>.00</div>
                        <a href="#" class="name-product">Learning to Write as a Professional Author</a>
                        <div class="description">
                            <div class="lesson">
                                <i class="far fa-file-alt"></i> 20 Lessons
                            </div>
                            <div class="student">
                                <i class="far fa-user"></i> 51 Students
                            </div>
                            <p>The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and…</p>
                        </div>
                    </div>
                </div>
                <!-- end card -->
            </div>
            <div class="col-3">
                <!-- start card -->
                <div class="card text-left">
                    <a href="#">
                        <img class="image" src="@/assets/img/stock-full-hd-03-443x600.jpg">
                    </a>
                    <div class="content">
                        <div class="price"><span class="format-price">$40</span>.00</div>
                        <a href="#" class="name-product">Learning to Write as a Professional Author</a>
                        <div class="description">
                            <div class="lesson">
                                <i class="far fa-file-alt"></i> 20 Lessons
                            </div>
                            <div class="student">
                                <i class="far fa-user"></i> 51 Students
                            </div>
                            <p>The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and…</p>
                        </div>
                    </div>
                </div>
                <!-- end card -->
            </div>
            <div class="col-3">
                <!-- start card -->
                <div class="card text-left">
                    <a href="#">
                        <img class="image" src="@/assets/img/stock-full-hd-04-443x600.jpg">
                    </a>
                    <div class="content">
                        <div class="price"><span class="format-price">$40</span>.00</div>
                        <a href="#" class="name-product">Learning to Write as a Professional Author</a>
                        <div class="description">
                            <div class="lesson">
                                <i class="far fa-file-alt"></i> 20 Lessons
                            </div>
                            <div class="student">
                                <i class="far fa-user"></i> 51 Students
                            </div>
                            <p>The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and…</p>
                        </div>
                    </div>
                </div>
                <!-- end card -->
            </div>
            <div class="col-3">
                <!-- start card -->
                <div class="card text-left">
                    <a href="#">
                        <img class="image" src="@/assets/img/stock-full-hd-06-443x600.jpg">
                    </a>
                    <div class="content">
                        <div class="price"><span class="format-price">$40</span>.00</div>
                        <a href="#" class="name-product">Learning to Write as a Professional Author</a>
                        <div class="description">
                            <div class="lesson">
                                <i class="far fa-file-alt"></i> 20 Lessons
                            </div>
                            <div class="student">
                                <i class="far fa-user"></i> 51 Students
                            </div>
                            <p>The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and…</p>
                        </div>
                    </div>
                </div>
                <!-- end card -->
            </div>
        </div>
        <!-- da inserire in un nuovo componente -->
        <div class="heading-primary">
            <a href="#">Take the control of their life back and start doing things to make their dream come true. <mark>View all courses</mark></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GridProduct'
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

/* Da inserire in un nuovo componente della card */
.card{
    width: 90%;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    position: relative;
    margin: 0 auto;

    .image{
        width: 100%;
        object-fit: cover;
        object-position: right;
        transition: transform 1.2s; /* Animation */
    }

    .content{
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 20px;
        background: rgba(0,0,0, 0.5);
        border-radius: 0 0 5px 5px;

        .price{
            color: $color-primary;
            font-size: 1.5rem;
            font-weight: 600;

            .format-price{
                font-size: 1.8rem;
            }
        }

        .name-product{
            color: #fff;
            font-size: 1.5rem;
            font-weight: 600;
        }

        .description{
            display: none;
            color: #fff;
        }

        .lesson,
        .student{
            display: inline-block;
            margin: 20px 20px 20px 0;
        }
    }

    &:hover{
        .description{
            display: block;
        }

        .image{
            transform: scale(1.1);
        }
    }
}

/* fine stile card */

.heading-primary{
    width: 40%;
    margin: 50px auto 0;
    text-align: center;
}

</style>