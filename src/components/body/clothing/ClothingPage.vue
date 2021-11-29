<template>
  <div class="clothingContainer">
    <router-view></router-view>
    <gender-category-popup v-if="popUp" @navigate="navigatePage"></gender-category-popup>

    <!-- <router-link to="/clothing/woman">woman</router-link> -->
  </div>
</template>;


<script>
import GenderCategoryPopup from "./GenderCategoryPopup";
export default {
  components: {
    GenderCategoryPopup
  },
  computed: {
    item() {
      return console.log(this.$router.params);
    }
  },
  data() {
    return {
      popUp: true
    };
  },
  methods: {
    navigatePage(e) {
      console.log("hi", "/clothing/" + e);
      this.popUp = false;
      this.$router.push("/clothing/" + e);
    }
  }
};
</script>

<style lang="scss" scoped>
.clothingContainer {
  // min-height: 100vh;
}
</style>