<template>
    <div class="articles-box">
        <div class="articles">
            <div v-for="article in tagArticle" :key="article.id">
                <h2 class="article-title font-serif">{{ article.title }}</h2>
                <p class="article-text font-jost">{{ article.text1 }}</p>
                <img :src="article.img" alt="article image">
                <p class="article-date font-jost">{{ article.date }}</p>
                <p class="article-text font-jost">{{ article.text2 }}</p>
            </div>
        </div>
        <div>
            <p class="tag-title font-serif">Tags</p>
            <div class="tags">
                <button @click="filterArticle(tag)" class="tag font-jost" v-for="tag in tags" :key="tag.id">
                {{ tag }}
            </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tagArticle: [{
                        id: 1,
                        tag: "Kitchen",
                        title: "Let’s Get Solution for Building Construction Work",
                        img: require("@/assets/img/article-kitchen1.jpg"),
                        text1: "",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        date: "26 December, 2022",
                    },
                    {
                        id: 2,
                        tag: "Kitchen",
                        title: "Design sprints are great",
                        img: require("@/assets/img/article-kitchen2.jpg"),
                        text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        date: "25 December, 2023"
                    },],
                articles: [
                    {
                        id: 1,
                        tag: "Kitchen",
                        title: "Let’s Get Solution for Building Construction Work",
                        img: require("@/assets/img/article-kitchen1.jpg"),
                        text1: "",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        date: "26 December, 2022",
                    },
                    {
                        id: 2,
                        tag: "Kitchen",
                        title: "Design sprints are great",
                        img: require("@/assets/img/article-kitchen2.jpg"),
                        text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        date: "25 December, 2023"
                    },
                    {
                        id: 3,
                        tag: "Bedroom",
                        title: "Design sprints are great",
                        img: require("@/assets/img/article-bedroom1.jpg"),
                        text1: "",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        date: "30 December, 2022"
                    },
                    {
                        id: 4,
                        tag: "Bedroom",
                        title: "Design sprints are great",
                        img: require("@/assets/img/article-bedroom2.jpg"),
                        text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        text2: "",
                        date: "31 December, 2023"
                    },
                    {
                        id: 5,
                        tag: "Building",
                        title: "Let’s Get Solution for Building Construction Work",
                        img: require("@/assets/img/article-building1.png"),
                        text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        text2: "",
                        date: "24 December, 2023"
                    },
                    {
                        id: 6,
                        tag: "Building",
                        title: "Let’s Get Solution for Building Construction Work",
                        img: require("@/assets/img/article-building2.jpg"),
                        text1: "",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        date: "25 December, 2023"
                    },
                    {
                        id: 7,
                        tag: "Livingroom",
                        title: "Let’s Get Solution for Building Construction Work",
                        img: require("@/assets/img/article-livingroom1.jpg"),
                        text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        date: "21 December, 2022"
                    },
                    {
                        id: 8,
                        tag: "Livingroom",
                        title: "Let’s Get Solution for Building Construction Work",
                        img: require("@/assets/img/article-livingroom2.jpg"),
                        text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        text2: "",
                        date: "28 December, 2023"
                    },
                    
                ],
                tags: ["Kitchen", "Bedroom", "Building", "Livingroom"],
            }
        },

        methods: {
            filterArticle(currentTag) {
                this.tagArticle = [];
                this.articles.forEach(article => {
                    if(article.tag === currentTag) {
                    this.tagArticle.push(article);
                    }
                });
            }
        },
    }
</script>

<style scoped>
    .articles-box {
        display: flex;
        gap: 52px;
        margin-bottom: 96px;
    }
    img {
        margin-bottom: 46px;
        width: 100%;
        border-radius: 50px;
        object-fit: cover;
    }

    .articles {
        width: 41.875vw;
        min-width: 804px;
    }

    .article-title {
        font-size: 50px;
        line-height: 62.5px;
        letter-spacing: 2%;
        margin-bottom: 21px;
    }

    .article-text {
        margin-bottom: 30px;
    }

    .article-date {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 1%;
        margin-bottom: 48px;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 11px;
    }

    .tag {
        padding: 9px 30px 9px 30px;
        border-radius: 10px;
        background-color: #F4F0EC;
        color: #292F36;
        font-size: 18px;
        line-height: 22.5px;
        letter-spacing: 2%;
        text-align: center;
        cursor: pointer;
    }
    
    .tag:hover {
        background-color: #292F36;
        color: #F4F0EC;
    }

    .tag:active {
        background-color: #292F36;
        color: #F4F0EC;
    }

    .tag-title {
        font-size: 25px;
        line-height: 31.25px;
        letter-spacing: 2%;
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

</style>