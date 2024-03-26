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