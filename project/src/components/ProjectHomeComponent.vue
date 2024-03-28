<template>
    <div class="projects center">
        <div class="projects__heading">
            <h2 class="projects__title font-serif">Follow Our Projects</h2>
            <p class="projects__text font-jost">It is a long established fact that a reader will be distracted by the of
                readable content of page lookings at its layouts points.</p>
        </div>
        <div class="projects__items">
            <div v-for="project in projectsHome" :key="project.id" class="projects__item">
                <img class="projects__item_img" :src="project.img" alt="project1">
                <div class="projects__item_dsc">
                    <div class="projects__item_dsc_left">
                        <p class="projects__item_name font-serif">{{project.title}}</p>
                        <p class="projects__item_category font-jost">{{project.category}}</p>
                    </div>
                    <div class="projects__item_dsc_right"><router-link to="/project/details"><img :src="btn"></router-link></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    data() {
        return {
            btn: require('@/assets/img/projects-item-btn.svg'),
            
        }
    },
    computed: { //сразу возвращается и отрисовывается без нажатий
        ...mapState(['projectsHome']),
        ...mapGetters(['']) //геттеры всегда что-то возвращают
    },

}
</script>

<style scoped>
.projects__item_dsc_right img {
    cursor: pointer;
}
</style>
