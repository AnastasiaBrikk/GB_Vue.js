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
export default {
    data() {
        return {
            btn: require('@/assets/img/projects-item-btn.svg'),
            tagProject: [
                {
                    id: 1,
                    img: require('@/assets/img/project-tag2-img1.jpg'),
                    title: 'Minimal Bedroom',
                    category: 'Decor / Artchitecture',
                    type: 'Bedroom',
                },
                {
                    id: 2,
                    img: require('@/assets/img/project-tag2-img2.jpg'),
                    title: 'Classic Minimal Bedroom',
                    category: 'Decor / Artchitecture',
                    type: 'Bedroom',
                },
                {
                    id: 3,
                    img: require('@/assets/img/project-tag2-img3.jpg'),
                    title: 'Minimal Bedroom table',
                    category: 'Decor / Artchitecture',
                    type: 'Bedroom',
                },
                {
                    id: 4,
                    img: require('@/assets/img/project-tag2-img4.jpg'),
                    title: 'Modern Bedroom',
                    category: 'Decor / Artchitecture',
                    type: 'Bedroom',
                },
                {
                    id: 5,
                    img: require('@/assets/img/project-tag2-img5.jpg'),
                    title: 'Minimal Bedroom',
                    category: 'Decor / Artchitecture',
                    type: 'Bedroom',
                },
                {
                    id: 6,
                    img: require('@/assets/img/project-tag2-img6.jpg'),
                    title: 'Modern Bedroom',
                    category: 'Decor / Artchitecture',
                    type: 'Bedroom',
                },
                {
                    id: 7,
                    img: require('@/assets/img/project-tag2-img7.jpg'),
                    title: 'System Table',
                    category: 'Decor / Artchitecture',
                    type: 'Bedroom',
                },
                {
                    id: 8,
                    img: require('@/assets/img/project-tag2-img8.jpg'),
                    title: 'Modern Bedroom',
                    category: 'Decor / Artchitecture',
                    type: 'Bedroom',
                },
            ],
            projects: [{
                id: 1,
                img: require('@/assets/img/project-tag2-img1.jpg'),
                title: 'Minimal Bedroom',
                category: 'Decor / Artchitecture',
                type: 'Bedroom',
            },
            {
                id: 2,
                img: require('@/assets/img/project-tag2-img2.jpg'),
                title: 'Classic Minimal Bedroom',
                category: 'Decor / Artchitecture',
                type: 'Bedroom',
            },
            {
                id: 3,
                img: require('@/assets/img/project-tag2-img3.jpg'),
                title: 'Minimal Bedroom table',
                category: 'Decor / Artchitecture',
                type: 'Bedroom',
            },
            {
                id: 4,
                img: require('@/assets/img/project-tag2-img4.jpg'),
                title: 'Modern Bedroom',
                category: 'Decor / Artchitecture',
                type: 'Bedroom',
            },
            {
                id: 5,
                img: require('@/assets/img/project-tag2-img5.jpg'),
                title: 'Minimal Bedroom',
                category: 'Decor / Artchitecture',
                type: 'Bedroom',
            },
            {
                id: 6,
                img: require('@/assets/img/project-tag2-img6.jpg'),
                title: 'Modern Bedroom',
                category: 'Decor / Artchitecture',
                type: 'Bedroom',
            },
            {
                id: 7,
                img: require('@/assets/img/project-tag2-img7.jpg'),
                title: 'System Table',
                category: 'Decor / Artchitecture',
                type: 'Bedroom',
            },
            {
                id: 8,
                img: require('@/assets/img/project-tag2-img8.jpg'),
                title: 'Modern Bedroom',
                category: 'Decor / Artchitecture',
                type: 'Bedroom',
            },
            {
                id: 9,
                img: require('@/assets/img/project-tag1-img1.jpg'),
                title: 'Modern Bathroom',
                category: 'Decor / Artchitecture',
                type: "Bathroom",
            },
            {
                id: 10,
                img: require('@/assets/img/project-tag1-img2.jpg'),
                title: 'Modern Bathroom',
                category: 'Decor / Artchitecture',
                type: "Bathroom",
            },
            {
                id: 11,
                img: require('@/assets/img/project-tag1-img3.jpg'),
                title: 'Modern Bathroom',
                category: 'Decor / Artchitecture',
                type: "Bathroom",
            },
            {
                id: 12,
                img: require('@/assets/img/project-tag1-img4.jpg'),
                title: 'Modern Bathroom',
                category: 'Decor / Artchitecture',
                type: "Bathroom",
            },
            {
                id: 13,
                img: require('@/assets/img/project-tag1-img5.jpg'),
                title: 'Modern Bathroom',
                category: 'Decor / Artchitecture',
                type: "Bathroom",
            },
            {
                id: 14,
                img: require('@/assets/img/project-tag3-img1.jpg'),
                title: 'Modern Kitchen',
                category: 'Decor / Artchitecture',
                type: "Kitchen",
            },
            {
                id: 15,
                img: require('@/assets/img/project-tag3-img2.jpg'),
                title: 'Modern Kitchen',
                category: 'Decor / Artchitecture',
                type: "Kitchen",
            },
            {
                id: 16,
                img: require('@/assets/img/project-tag3-img3.jpg'),
                title: 'Modern Kitchen',
                category: 'Decor / Artchitecture',
                type: "Kitchen",
            },
            {
                id: 17,
                img: require('@/assets/img/project-tag4-img1.jpg'),
                title: 'Modern Living Area',
                category: 'Decor / Artchitecture',
                type: "Living Area",
            },
            {
                id: 18,
                img: require('@/assets/img/project-tag4-img2.jpg'),
                title: 'Modern Living Area',
                category: 'Decor / Artchitecture',
                type: "Living Area",
            },
            {
                id: 19,
                img: require('@/assets/img/project-tag4-img3.jpg'),
                title: 'Modern Living Area',
                category: 'Decor / Artchitecture',
                type: "Living Area",
            },
            {
                id: 20,
                img: require('@/assets/img/project-tag4-img4.jpg'),
                title: 'Modern Living Area',
                category: 'Decor / Artchitecture',
                type: "Living Area",
            },
            {
                id: 21,
                img: require('@/assets/img/project-tag4-img5.jpg'),
                title: 'Modern Living Area',
                category: 'Decor / Artchitecture',
                type: "Living Area",
            },
            {
                id: 22,
                img: require('@/assets/img/project-tag4-img6.jpg'),
                title: 'Modern Living Room',
                category: 'Decor / Artchitecture',
                type: "Living Area",
            }
            ],
            tags: ["Bathroom", "Bedroom", "Kitchen", "Living Area"],
            currentTag: "Bedroom",
        }
    },
    methods: {
        filterProject(currentTag) {
            this.tagProject = [];
            this.projects.forEach(project => {
                if (project.type === currentTag) {
                    this.tagProject.push(project);
                    this.currentTag = currentTag;
                }
            })
        }
    }
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