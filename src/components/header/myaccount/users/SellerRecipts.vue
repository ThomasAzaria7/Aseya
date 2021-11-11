<template>
  <div class="reciptContainer">
    <div v-for="recipt in getRecipts" :key="recipt.reciptId">
      <ul class="recipts">
        <li>reciptNumber {{recipt.reciptId}}</li>
        <li>{{recipt.status}}</li>
        <li>{{recipt.payer}}</li>
        <li class="items" v-for="item in recipt.items" :key="item.name">
          <a>{{item.name}}</a>
          <a>${{item.unit_amount.value}}</a>
        </li>
      </ul>
      <div>
        <h2>{{}}</h2>
      </div>
      <!-- <h1>{{item.reciptId}}</h1> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ""
    };
  },
  computed: {
    getRecipts() {
      // this.$store.getters["UserState/getSellerRecipt"];
      return this.$store.getters["UserState/getSellerRecipt"];
    }
  },
  watch: {
    getRecipts(newVal) {
      console.log("hello", newVal);
    }
  }
};
</script>

<style lang="scss" scoped>
.reciptContainer {
  //   min-height: 100vh;

  .recipts {
    text-decoration: none;
    list-style-type: none;
    &:nth-child(odd) {
      background-color: rgb(212, 212, 212);
      padding: 10px;
    }

    .items {
      display: flex;
    }
  }
}
</style>