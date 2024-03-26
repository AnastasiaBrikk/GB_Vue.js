<template>
    <HeaderComponent />
    <section class="project__top">
        <img :src="topImg" alt="top img" class="project__top_img">
        <div class="project__top_intro">
            <h1 class="project__title font-serif">Our Project</h1>
            <p class="project__top_breadcrumbs font-jost">Home / Project</p>
        </div>
    </section>
    <main class="main center">
            <ArticlesProjectComponent/>
    </main>
    <FooterComponent />
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import ArticlesProjectComponent from '../components/ArticlesProjectComponent.vue';
import FooterComponent from '../components/FooterComponent.vue'
export default {
    data() {
        return {
            topImg: require("@/assets/img/project_top.jpg"),
            
        }
    },
    components: {
        HeaderComponent,
        ArticlesProjectComponent,
        FooterComponent,
    }
}
</script>

<style lang="scss" scoped>
.main {
    margin-bottom: 200px;
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

.project {
    &__top {
        position: relative;
        margin-bottom: 200px;
        width: 100vw;
    }

    &__top img {
        width: 100%;
    }

    &__top_intro {
        position: absolute;
        left: 36.875vw;
        bottom: 0;
        background-color: white;
        border: 1px solid white;
        border-radius: 37px 37px 0 0;
        padding: 41px 78px 41px 78px;
    }

    &__title {
        line-height: 62.5px;
        font-size: 50px;
    }

    &__top_breadcrumbs {
        text-align: center;
    }
}
</style>