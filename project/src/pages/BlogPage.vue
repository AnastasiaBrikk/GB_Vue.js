<template>
    <section class="blog__top">
        <img :src="topImg" alt="top img" class="blog__top_img">
        <div class="blog__top_intro">
            <h1 class="blog__title font-serif">Articles & News</h1>
            <p class="blog__top_breadcrumbs font-jost">Home / Blog</p>
        </div>
    </section>
    <main class="main center">

        <section class="latestPost">
            <h2 class="latestPost__title font-serif">Latest Post</h2>
            <div class="latestPost__box">
                <img :src="latestPostImg" alt="latest post img" class="latestPost__img">
                <div class="latestPost__right">
                    <div class="latestPost__content">
                        <h3 class="latestPost__subtitle font-serif">Low Cost Latest Invented Interior Designing
                            Ideas</h3>
                        <p class="latestPost__text font-jost">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
                            vitae
                            turpis dignissim maximus.posuere in. Contrary to popular belief.</p><br>
                        <p class="latestPost__text font-jost">Lorem Ipsum is not simply random text. It has roots in
                            a piece
                            of classica.</p>
                    </div>
                    <div class="latestPost__date-btn">
                        <p class="latestPost__date font-jost">26 December,2022</p>
                        <router-link to="/blog/details">
                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </router-link>

                    </div>
                </div>
            </div>
        </section>

        <section class="articlesNews">
            <h2 class="latestPost__title font-serif">Articles & News</h2>
            <div class="articles-news__box">
                <ArticlesNewsBlogComponent :num="num" />
            </div>
            <div class="articlesNews__pagination"></div>
        </section>
    </main>
    <FooterComponent/>
</template>

<script>
import ArticlesNewsBlogComponent from '../components/ArticlesNewsBlogComponent.vue';
import FooterComponent from '../components/FooterComponent.vue'

export default {
    components: {
        ArticlesNewsBlogComponent,
        FooterComponent

    },
    data() {
        return {
            num: 6,
            latestPostImg: require('@/assets/img/latestPost-img.jpg'),
            topImg: require('@/assets/img/blog-top-img.jpg'),
        }
    },
}
</script>

<style scoped></style>