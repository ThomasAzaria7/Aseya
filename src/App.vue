<template>
  <div>
    <main-nav></main-nav>

    <div class="routerContainer">
      <router-view></router-view>
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
import MainFooter from "./components/footer/MainFooter.vue";
export default {
  components: {
    MainFooter
  }
};
</script>

<style lang="scss">
.routerContainer {
  // padding: 0 10%;
}
</style>
