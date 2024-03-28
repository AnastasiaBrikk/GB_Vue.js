<template>
    <img class="banner-img" :src="bannerImg" alt="banner image">
    <main class="main center">
        <ArticlesComponent/>
    </main>
    <FooterComponent />
</template>

<script>
    import ArticlesComponent from '../components/ArticlesComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue'


    export default {
        name: 'Blog-Details',
        components: {
            ArticlesComponent,
            FooterComponent
        },
        data() {
            return {
                bannerImg: require("@/assets/img/blogDetailsBanner.jpg")
            }
        },
    }
</script>
