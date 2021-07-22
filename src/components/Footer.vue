<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="elementor-widget">
                        <div class="heading-title">
                            <h2>Address</h2>
                        </div>
                    </div>
                    <div class="elementor-widget-container">
                        <div class="item">
                            <div class="text">382 NE 191st St # 87394 Miami, FL 33179-3899</div>
                        </div>
                        <div class="item">
                            <div class="text">+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</div>
                        </div>
                        <div class="item">
                            <a href="mailto:support@maxcoach.com">
                                <div class="text">support@maxcoach.com</div>
                            </a>
                        </div>
                        <div class="item">
                            <div class="social">
                                <a class="text" href="#" rel="nofollow" target="_blank">
                                    <i class="link-icon fab fa-facebook-square"></i>
                                </a>
                                <a class="text" href="#" rel="nofollow" target="_blank">
                                    <i class="link-icon fab fa-twitter"></i>
                                </a>
                                <a class="text" href="#" rel="nofollow" target="_blank">
                                    <i class="link-icon fab fa-instagram"></i>
                                </a>
                                <a class="text" href="#" rel="nofollow" target="_blank">
                                    <i class="link-icon fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-4">
                            <div class="elementor-widget">
                                <div class="heading-title">
                                    <h2>Explore</h2>
                                </div>
                            </div>
                            <div class="elementor-widget-container">
                                <div class="item">
                                    <a href="#">
                                        <div class="text">Start here</div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="#">
                                        <div class="text">Blog</div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="#">
                                        <div class="text">About us</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="elementor-widget">
                                <div class="heading-title">
                                    <h2>Contact</h2>
                                </div>
                            </div>
                            <div class="elementor-widget-container">
                                <div class="item">
                                    <a href="#">
                                        <div class="text">Success story</div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="#">
                                        <div class="text">Courses</div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="#">
                                        <div class="text">Contact us</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="elementor-widget">
                                <div class="heading-title">
                                    <h2>Information</h2>
                                </div>
                            </div>
                            <div class="elementor-widget-container">
                                <div class="item">
                                    <a href="#">
                                        <div class="text">Membership</div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="#">
                                        <div class="text">Purchase guide</div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="#">
                                        <div class="text">Privacy policy</div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="#">
                                        <div class="text">Terms of service</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy text-center">
            <div class="text">&copy; 2020 Maxcoach. All Rights Reserved</div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped lang="scss">

footer{
    background: #171621;
    padding: 40px 0;
}

.heading-title{
    color: #fff;
    font-size: 0.8rem;
    margin-bottom: 20px;

    h2{
        font-weight: 500;
    }
}

.elementor-widget-container,
a{
    color: #ABABAB;
}

.item{
    margin-bottom: 15px;
}

.text{
    display: inline;
    font-size: 14px;
    font-weight: 500;
}

.link-icon{
    font-size: 24px;
    margin-right: 25px;
}

.copy{
    color: #ABABAB;
    margin-top: 50px;
}

</style>