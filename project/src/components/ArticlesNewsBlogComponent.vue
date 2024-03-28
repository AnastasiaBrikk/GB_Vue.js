<template>
    <article v-for="article in articlesSlice(num)" :key="article.id" class="articles-news__item">
        <figure class="articles-news__img">
            <img :src="article.image" alt="#" />
            <p class="articles-news__design font-jost">{{ article.imgText }}</p>
        </figure>
        <h3 class="articles-news__heading font-serif" v-html="article.itemTitle"></h3>
        <div class="articles-news__date-btn">
            <p class="articles-news__date font-jost">{{ article.itemData }}</p>
            <a href="#">
                <router-link to="/blog/details">
                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </router-link>

            </a>
        </div>
    </article>
</template>

<script>
export default {
    props: ['num'],
    data() {
        return {
            articles: [
                {
                    id: 1,
                    image: require("@/assets/img/art-news-img1.jpg"),
                    imgText: "Kitchan Design",
                    itemTitle: "Let’s Get Solution For Building Construct Work",
                    itemData: "26 December,2022"
                },
                {
                    id: 2,
                    image: require("@/assets/img/art-news-img2.jpg"),
                    imgText: "Living Design",
                    itemTitle: "Low Cost Latest Invented Interior Designing Ideas.",
                    itemData: "22 December,2022"
                },
                {
                    id: 3,
                    image: require("@/assets/img/art-news-img3.jpg"),
                    imgText: "Interior Design",
                    itemTitle: "Best For Any Office & Business Interior Solution",
                    itemData: "25 December,2022"
                },
                {
                    id: 4,
                    image: require("@/assets/img/art-news-img4.jpg"),
                    imgText: "Kitchan Design",
                    itemTitle: "Let’s Get Solution For Building Construct Work",
                    itemData: "26 December,2022"
                },
                {
                    id: 5,
                    image: require("@/assets/img/art-news-img5.jpg"),
                    imgText: "Living Design",
                    itemTitle: "Low Cost Latest Invented Interior Designing Ideas.",
                    itemData: "22 December,2022"
                },
                {
                    id: 6,
                    image: require("@/assets/img/art-news-img6.jpg"),
                    imgText: "Interior Design",
                    itemTitle: "Best For Any Office & Business Interior Solution",
                    itemData: "25 December,2022"
                },
            ]
        }
    },
    methods: {
        articlesSlice(number) {
            const articles = this.articles.slice(0, number);
            return articles;
        },
    },


}
</script>

<style scoped></style>