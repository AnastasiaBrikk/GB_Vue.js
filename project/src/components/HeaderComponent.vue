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
                            <router-link v-for="link in links" :key="link.id" :to="link.url" class="nav__item">{{ link.title }}</router-link>
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
            links: [
                    {
                        id: 1,
                        title: "Home",
                        url: '/'
                    },
                    {
                        id: 2,
                        title: "Project",
                        url: '/project'
                    },
                    {
                        id: 3,
                        title: "Blog",
                        url: '/blog'
                    },
                ]
        }
    },
}
</script>