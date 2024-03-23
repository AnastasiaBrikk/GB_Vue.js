<template>
    <div>
        <header class="header center">
            <div class="header__box">
                <div class="header__left">
                    <a href="#" class="header__logo-link">
                        <img class="header__logo" :src="logo" alt="logo">
                    </a>
                </div>
                <div class="header__right">
                    <nav class="nav">
                        <ul class="nav__list">
                            <li class="nav__item"><a href="#">Home</a></li>
                            <li class="nav__item"><a href="#">Project</a></li>
                            <li class="nav__item"><a href="#">Blog</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logo: require("@/assets/img/Logo.svg"),
        }
    },
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

li {
    list-style-type: none;
}

.center {
    padding-left: calc(50% - 1200px / 2);
    padding-right: calc(50% - 1200px / 2);
}

.font-serif {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
    color: #292F36;

}

.font-jost {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: #4D5053;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 1%;
}

.header {
    &__box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 44px;
        margin-bottom: 57px;
    }

    &__logo {
        width: 177px;
        cursor: pointer;
    }

}

.nav__list {
    display: flex;
    align-items: center;
    gap: 40px;
    justify-content: center;

    & a {
        color: #292F36;
        font-family: "Jost", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-size: 20px;
        line-height: 25px;
    }
}
</style>