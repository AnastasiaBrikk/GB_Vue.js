<template>
    <img :src="img" alt="">
    <main class="main center">
        <div class="projectDetails">
            <h2 class="projectDetails__title font-serif">{{ title }}</h2>
            <p class="projectDetails__text font-jost">{{ text1 }}</p>
            <p class="projectDetails__text font-jost">{{ text2 }}</p>
        </div>
        <ProjectSwiperComponent/>
    </main>
    <FooterComponent/>
</template>

<script>
import { mapState} from 'vuex';
import ProjectSwiperComponent from '../components/ProjectSwiperComponent.vue';
import FooterComponent from '../components/FooterComponent.vue'

    export default {
        components: {
            ProjectSwiperComponent,
            FooterComponent,
        },
        data() {
            return {
                img: require('@/assets/img/project-details-banner.jpg')
            }
        },
        computed: {
        ...mapState(['title', 'text1', 'text2']),
    },
    }
</script>

<style lang="scss" scoped>
.main {
    margin-top: 200px;
    margin-bottom: 200px;
}

.projectDetails {
    padding: 0 271px;
    margin-bottom: 100px;
    &__title {
        font-size: 50px;
        line-height: 62.5px;
        text-align: center;
        margin-bottom: 11px;
    }

    &__text {
        padding-bottom: 15px;
    }
}
</style>