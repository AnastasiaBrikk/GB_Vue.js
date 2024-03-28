<template>
  <HeaderComponent />
  <RouterView />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style lang="scss">
#app {
  overflow: hidden;
}
</style>
