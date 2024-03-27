<template>
    <div class="tags">
        <button @click="filterProject(tag)" class="tag font-jost" v-for="tag in tags" :key="tag.id"
            :class="tag === currentTag ? 'currentTag' : ''">
            {{ tag }}
        </button>
    </div>


    <div class="projects">
        <div v-for="project in tagProject" :key="project.id" class="projects__item">
            <img class="projects__item_img" :src="project.img" alt="project image">
        <div class="projects__item_dsc">
            <div class="projects__item_dsc_left">
                <p class="projects__item_name font-serif">{{ project.title }}</p>
                <p class="projects__item_category font-jost">{{ project.category }}</p>
            </div>
            <div class="projects__item_dsc_right"><a href="#"><img :src="btn"></a></div>
        </div>
        </div>
    </div>
    <div class="pagination"></div>

</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
            btn: require('@/assets/img/projects-item-btn.svg'),
            
        }
    },
    methods: {
        
        ...mapMutations(['filterProject']),
        ...mapActions(['']),
    },
    computed: { //сразу возвращается и отрисовывается без нажатий
        ...mapState(['tagProject', 'projects', 'tags', 'currentTag']),
    },

    
}
</script>

<style lang="scss" scoped>
.tags {
    width: fit-content;
    margin: 0 auto;
    border: 1px solid #CDA274;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-self: center;
}

.tag {
    background-color: white;
    border: 1px solid transparent;
    border-radius: 18px;
    padding: 26px 66px 26px 66px;
    font-size: 18px;
    text-align: center;
    line-height: 22.5px;
    letter-spacing: 2%;
    color: #292F36;
    cursor: pointer;

}

.currentTag {
    background-color: #CDA274;
    border-radius: 18px;
    padding: 26px 66px 26px 66px;
    color: #FFFFFF;
    font-size: 18px;
    align-items: center;
    line-height: 22.5px;
    letter-spacing: 2%;
    border: 1px solid #CDA274;
}
.projects {
    margin-top: 61px;
    column-count: 2;
    margin-bottom: 61px;

    &__item {
        max-width: 585px;
        display: inline-block;

        & img {
            width: 100%;
        }

        &_dsc {
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &_name {
            font-size: 25px;
            line-height: 31.25px;
            letter-spacing: 2%;
            margin-bottom: 4px;
        }
    }
}
</style>