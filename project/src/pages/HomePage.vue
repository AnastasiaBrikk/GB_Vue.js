<template>
    <HeaderComponent/>
    <main class="main">
        <div class="banner center">
            <img class="banner__bgimg" :src="banner" alt="banner img">
            <div class="banner__content">
                <h2 class="banner__title font-serif">Let Your Home
                    Be Unique</h2>
                <p class="banner__text font-jost">There are many variations of the passages of
                    lorem Ipsum fromavailable, majority.</p>
                <button class="banner__btn">Get Started <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
        <ProjectHomeComponent/>
        <div class="counter">
            <div class="counter__box">
                <div class="counter__item">
                    <p class="counter__item_number font-serif">12</p>
                    <p class="counter__item_text font-jost">Years Of Experiance</p>
                </div>

                <svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274"/>
                    </svg>

                <div class="counter__item">
                    <p class="counter__item_number font-serif">85</p>
                    <p class="counter__item_text font-jost">Success Project</p>
                </div>

                <svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274"/>
                    </svg>    

                <div class="counter__item">
                    <p class="counter__item_number font-serif">15</p>
                    <p class="counter__item_text font-jost">Active Project</p>
                </div>

                <svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274"/>
                    </svg>  

                <div class="counter__item">
                    <p class="counter__item_number font-serif">95</p>
                    <p class="counter__item_text font-jost">Happy Customers</p>
                </div>
            </div>
        </div>
        <div class="articles-news center">
            <div class="articles-news__title">
                <h2 class="articles-news__title font-serif">Articles & News</h2>
                <p class="articles-news__text font-jost">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
            </div>
            <div class="articles-news__box">
                <ArticlesNewsBlogComponent :num="num"/> 
            </div>
        </div>
    </main>
    <FooterComponent/>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import ProjectHomeComponent from '../components/ProjectHomeComponent.vue';
import ArticlesNewsBlogComponent from '../components/ArticlesNewsBlogComponent.vue';
import FooterComponent from '../components/FooterComponent.vue'
    export default {
        
        data() {
            return {
                num: 3,
                banner: require('@/assets/img/banner-img.jpg'),
                
            }
        },
        components: {
            HeaderComponent,
            ProjectHomeComponent,
            ArticlesNewsBlogComponent,
            FooterComponent,
        },

        methods: {
        },
        
    }
</script>