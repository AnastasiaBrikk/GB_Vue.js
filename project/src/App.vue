<template>
  <HomePage />
  <BlogPage />
  <BlogDetails />
  <ProjectPage />
</template>

<script>
import HomePage from './pages/HomePage.vue';
import BlogPage from './pages/BlogPage.vue';
import BlogDetails from './pages/BlogDetails.vue';
import ProjectPage from './pages/ProjectPage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    BlogPage,
    BlogDetails,
    ProjectPage,
  }
}
</script>

<style lang="scss">
#app {
  overflow: hidden;
}
</style>
