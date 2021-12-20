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
        <div class="details">
          <h4 style="margin:0">items Bought</h4>
          <br />
          <li
            class="purchasedItems"
            v-for="product in item.purchase_units[0].items"
            :key="product.name"
          >
            {{product.name}}
            [qty {{product.quantity}}]
            ${{product.unit_amount.value}}
            <button
              @click="messageSeller(product,item.id)"
            >message Seller</button>
          </li>
          <br />
          <li>TOTAL PURCHASE PRICE $ {{item.purchase_units[0].amount.value}}</li>
          <br />
          <li>{{item.status}}</li>
        </div>

        <hr />
        <div>
          <button>dispute</button>
        </div>
        <!-- <li v-for="unit in item.purchase_units[0].items" :key="unit.name">{{unit.name}}</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.getRecipts);
  },
  computed: {
    getRecipts() {
      return this.$store.getters["UserState/getBuyerRecipt"];
    }
  },
  methods: {
    messageSeller(product, id) {
      const data = {
        recipt_id: id,
        product: product,
        message: "hello there i would like a refund"
      };
      this.$store.dispatch("UserState/startCommunication", data);
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

    display: block;
    // grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    .details {
      .purchasedItems {
        display: flex;
        justify-content: space-between;
        &:nth-child(odd) {
          background-color: rgb(236, 179, 236);
        }
        &:nth-child(even) {
          background-color: rgb(179, 236, 198);
        }
      }
    }

    ul {
      background-color: rgba(240, 241, 241, 0.664);
      list-style-type: none;
      margin: 0;
      padding: 0;
      margin: 0;
      list-style-type: none;
      padding: 20px;
    }
  }
  .nav {
    flex: 0 0 25%;
    position: sticky;
    // top: 50px;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      margin: 0;
      list-style-type: none;
      // background-color: rgba(145, 180, 226, 0.61);
      // padding: 20px;
      // background-color: rgba(199, 199, 199, 0.192);
      height: 80vh;

      li {
        padding: 10px 20px;
        background: rgba(241, 174, 229, 0.568);
        margin-bottom: 5px;

        &:hover {
          padding: 10px 20px;
          background: rgba(85, 46, 78, 0.7);
          margin-bottom: 5px;
          cursor: pointer;
        }
        a {
          text-decoration: none;
        }
      }
    }
  }
}
</style>