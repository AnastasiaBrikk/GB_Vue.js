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
                <button @click="filterArticle(tag)" class="tag font-jost" v-for="tag in tagsArticle" :key="tag.id" :class="tag === currentTagArticle ? 'currentTag' : ''">
                {{ tag }}
            </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex';
    export default {
        data() {
            return {
            }
        },

        methods: {
        ...mapMutations(['filterArticle']),
        },
        computed: { //сразу возвращается и отрисовывается без нажатий
        ...mapState(['tagArticle', 'articles', 'tagsArticle', 'currentTagArticle']),
    },
    }
</script>

<style lang="scss" scoped>
    
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
        border: 1px solid transparent;
    }
    
    .tag:hover {
        background-color: #292F36;
        color: #F4F0EC;
    }

    .currentTag {
        background-color: #292F36;
        color: #F4F0EC;
        font-size: 18px;
        line-height: 22.5px;
        letter-spacing: 2%;
        text-align: center;
        cursor: pointer;
        padding: 9px 30px 9px 30px;
        border-radius: 10px;
        
    }

    .tag-title {
        font-size: 25px;
        line-height: 31.25px;
        letter-spacing: 2%;
        margin-bottom: 24px;
    }


</style>