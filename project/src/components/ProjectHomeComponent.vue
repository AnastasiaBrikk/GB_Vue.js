<template>
    <div class="projects center">
        <div class="projects__heading">
            <h2 class="projects__title font-serif">Follow Our Projects</h2>
            <p class="projects__text font-jost">It is a long established fact that a reader will be distracted by the of
                readable content of page lookings at its layouts points.</p>
        </div>
        <div class="projects__items">
            <div v-for="project in projects" :key="project.id" class="projects__item">
                <img class="projects__item_img" :src="project.img" alt="project1">
                <div class="projects__item_dsc">
                    <div class="projects__item_dsc_left">
                        <p class="projects__item_name font-serif">{{project.title}}</p>
                        <p class="projects__item_category font-jost">{{project.category}}</p>
                    </div>
                    <div class="projects__item_dsc_right"><img :src="btn"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            btn: require('@/assets/img/projects-item-btn.svg'),
            projects: [
                {
                    id: 1,
                    img: require("@/assets/img/projects-item1.jpg"),
                    title: 'Modern Kitchan',
                    category: 'Decor / Artchitecture',
                }, 
                {
                    id: 2,
                    img: require("@/assets/img/projects-item2.jpg"),
                    title: 'Modern Kitchan',
                    category: 'Decor / Artchitecture',
                }, 
                {
                    id: 3,
                    img: require("@/assets/img/projects-item3.jpg"),
                    title: 'Modern Kitchan',
                    category: 'Decor / Artchitecture',
                }, 
                {
                    id: 4,
                    img: require("@/assets/img/projects-item4.jpg"),
                    title: 'Modern Kitchan',
                    category: 'Decor / Artchitecture',
                }, 

            ]
        }
    },

}
</script>
