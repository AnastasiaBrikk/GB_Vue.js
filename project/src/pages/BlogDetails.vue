<template>
    <HeaderComponent/>
    <img class="banner-img" :src="bannerImg" alt="banner image">
    <main class="main center">
        <ArticlesComponent/>
    </main>
    <FooterComponent/>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import ArticlesComponent from '../components/ArticlesComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';


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
