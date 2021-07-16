<template>
    <header>
        <div class="container-fluid h-100">
            <div class="row">
                <div class="col-12">
                    <div class="header-wrap">
                        <div class="branding">
                            <a href="#">
                                <img class="logo" src="@/assets/img/dark-logo.png" alt="logo">
                            </a>
                        </div>
                        <nav class="navbar">
                            <ul>
                                <li>
                                    <a href="#">Home<span class="icon sub-menu"></span></a>
                                </li>
                                <li>
                                    <a href="#">Home<span class="icon sub-menu"></span></a>
                                </li>
                                <li>
                                    <a href="#">Home<span class="icon sub-menu"></span></a>
                                </li>
                                <li>
                                    <a href="#">Home<span class="icon sub-menu"></span></a>
                                </li>
                                <li>
                                    <a href="#">Home<span class="icon sub-menu"></span></a>
                                </li>
                                <li>
                                    <a href="#">Home<span class="icon sub-menu"></span></a>
                                </li>
                            </ul>
                        </nav>
                        <div class="header-language">
                            <div class="language">
                                <a href="#">
                                    <img class="ico-language" src="@/assets/img/en.png" alt="icona bandiara">
                                    <span class="name-language">English</span>
                                    <span class="icon sub-menu"></span>
                                </a>
                                <a class="header-login" href="#">
                                    <i class="far fa-user-circle"></i>
                                </a>
                            </div>
                        </div>
                        <div class="header-search">
                            <form>
                                <div class="d-flex justify-content-around">
                                    <input class="input-search" type="text" placeholder="Search...">
                                    <button class="btn-search" type="button"><i class="fas fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

header{
  height: $height-header;
}

.header-wrap{
  display: flex;
  justify-content: space-between;
  height: $height-header;
  padding: 10px;
}

.branding,
.navbar,
.header-language,
.header-search{
  display: flex;
  justify-content: center;
  align-items: center;
}

.branding{
  flex-basis: 25%;

  .logo{
    width: 158px;
  }
}

nav{
  flex-basis: 45%;
}

li{
  display: inline-block;
  margin: 0 15px;

  a{
    color: $color-secondary;
    font-size: 16px;

    &:hover{
      border-bottom: 1px solid;
    }
  }
}

.sub-menu{
  vertical-align: text-bottom;

    &::before{
    font-family: "Font Awesome 5 Free"; 
    font-weight: 900; 
    content: "\f078";
    font-size: 8px;
    margin-left: 10px;
  }
}

.header-language{
  display: flex;
  width: 15%;
}

.ico-language{
  vertical-align: middle;
}

.name-language{
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  vertical-align: middle;
  margin-left: 10px;
}

.header-login{
  margin-left: 20px;
  vertical-align: middle;
  font-size: 1.2rem;
}

.header-search{
  display: flex;
  width: 15%;
  border-left: 1px solid #eee;
}

.input-search{
  border: none;
  width: 60%;
}

.btn-search{
  border: none;
  background: none;

  i{font-size: 1.2rem;}
}
</style>