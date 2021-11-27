<template>
  <div class="clothingContainer">
    <gender-category-popup></gender-category-popup>
    <router-view></router-view>
  </div>
</template>;


<script>
import GenderCategoryPopup from "./GenderCategoryPopup";
export default {
  components: {
    GenderCategoryPopup
  }
};
</script>

<style lang="scss" scoped>
.clothingContainer {
}
</style>