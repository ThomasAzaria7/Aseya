<template>
  <div class="buyerReciptContainer">
    <div class="nav">
      <ul>
        <li>
          <a href>Recent</a>
        </li>
        <li>
          <a href="#refunds">completed</a>
        </li>
      </ul>
    </div>
    <div class="itemsContainer">
      <ul v-for="item in getRecipts" :key="item.id">
        <li>
          <b>recipt id: {{item.id}}</b>
        </li>
        <li>buyer Name: {{item.payer.name.given_name}}</li>
        <li>{{item.update_time}}</li>
        <br />
        <div>
          <h4 style="margin:0">items Bought</h4>
          <li v-for="product in item.purchase_units[0].items" :key="product.name">{{product.name}}</li>
          <li>{{item.purchase_units[0].amount.value}}</li>
          <br />
          <li>{{item.status}}</li>
        </div>

        <hr />
        <!-- <li v-for="unit in item.purchase_units[0].items" :key="unit.name">{{unit.name}}</li> -->
      </ul>
    </div>
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
  display: flex;
  gap: 20px;
  padding: 50px 0;
  .itemsContainer {
    flex: 0 1 75%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      margin: 0;
      list-style-type: none;
      background-color: rgb(209, 209, 209);
      padding: 20px;
    }
  }
  .nav {
    flex: 0 0 25%;
    position: sticky;
    top: 50px;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      margin: 0;
      list-style-type: none;
      background-color: rgba(145, 180, 226, 0.61);
      padding: 20px;
      // background-color: rgba(199, 199, 199, 0.192);
      height: 80vh;

      li {
        padding: 10px 20px;
        a {
          text-decoration: none;
        }
      }
    }
  }
}
</style>