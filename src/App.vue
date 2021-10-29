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
  },
  data() {
    return {
      hide: false
    };
  },
  methods: {
    toggleData() {
      this.hide = !this.hide;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap");

// a{
//   font-family: 'Roboto', sans-serif;
// }
// h1{
//   font-family: 'Roboto', sans-serif;
// }
// h2{
//   font-family: 'Roboto', sans-serif;
// }
// p{
//   font-family: 'Roboto', sans-serif;
* {
  font-family: "Roboto", sans-serif;
}
// }
.routerContainer {
  overflow: hidden;
  // padding-top: 50px;
}
</style>
