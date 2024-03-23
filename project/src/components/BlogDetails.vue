<template>
    <HeaderComponent/>
    <img class="banner-img" :src="bannerImg" alt="banner image">
    <main class="main center">
        <ArticlesComponent/>
    </main>
    <FooterComponent/>
</template>

<script>
    import HeaderComponent from './blocks/HeaderComponent.vue';
    import ArticlesComponent from './blocks/ArticlesComponent.vue';
    import FooterComponent from './blocks/FooterComponent.vue';


    export default {
        components: {
            HeaderComponent,
            ArticlesComponent,
            FooterComponent,
        },
        data() {
            return {
                bannerImg: require("@/assets/img/blogDetailsBanner.jpg")
            }
        },
    }
</script>

<style lang="scss" scoped>
    .banner-img {
        width: 100vw;
        max-width: 1920px;
        margin-bottom: 200px;
    }

    .center {
        padding-left: calc(50% - 1200px / 2);
        padding-right: calc(50% - 1200px / 2);
    }
</style>