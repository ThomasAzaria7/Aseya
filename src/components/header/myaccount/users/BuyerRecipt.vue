<template>
  <div class="buyerReciptContainer">
    <ul v-for="item in getRecipts" :key="item.id">
      <li>
        <b>{{item.id}}</b>
      </li>
      <li>{{item.payer.name.given_name}}</li>
      <li>{{item.update_time}}</li>
      <li v-for="product in item.purchase_units[0].items" :key="product.name">{{product.name}}</li>
      <li>{{item.purchase_units[0].amount.value}}</li>
      <li>{{item.status}}</li>
      <hr />
      <!-- <li v-for="unit in item.purchase_units[0].items" :key="unit.name">{{unit.name}}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    getRecipts() {
      return this.$store.getters["UserState/getBuyerRecipt"];
    }
  }
};
</script>

<style lang="scss" scoped>
.buyerReciptContainer {
  // height: 100vh;

  ul {
    list-style-type: none;
  }
}
</style>