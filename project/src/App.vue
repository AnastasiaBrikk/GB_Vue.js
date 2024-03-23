<template>
  <HomePage/>
  <BlogPage/>
  <BlogDetails/>
</template>

<script>
import HomePage from './components/HomePage.vue';
import BlogPage from './components/BlogPage.vue';
import BlogDetails from './components/BlogDetails.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    BlogPage,
    BlogDetails,
  }
}
</script>

<style lang="scss">

</style>
