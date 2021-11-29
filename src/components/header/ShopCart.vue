<template>
  <div class="cartContainer">
    <div class="cartContainer__items">
      <h2>My Cart</h2>
      <div class="cartItems">
        <ul v-for="item in shopCartItems" :key="item.code">
          <li>
            <img :src="item.imgLink" alt />
          </li>
          <li>{{ item.name }}</li>
          <div class="price">
            <li>
              <input type="number" value="1" />
            </li>
            <li>$ {{ item.price }}</li>
          </div>
          <li>
            <i @click="removeItemFromCart(item.code)" class="far fa-times-circle"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="cartContainer__payments">
      <h2>Order Summary</h2>
      <br />
      <div>
        <h3>$ {{getTotalPrice}}</h3>
      </div>
      <app-payment></app-payment>
    </div>
  </div>
</template>

<script>
// import Cookies from "js-cookie";

import AppPayment from "./AppPayment.vue";

export default {
  components: {
    AppPayment
  },
  data() {
    return {
      // shopCartItems: [{}]
      cartTotalPrice: 0
    };
  },
  created() {
    // this.shopCartItems = cartItems;
  },
  watch: {},
  computed: {
    shopCartItems() {
      return this.$store.getters["UserState/refreshCart"]; // get cart items from database
    },

    getTotalPrice() {
      return this.$store.getters["UserState/cartTotalPrice"]; //  get total cart item priice
    },

    getFavTotal() {
      return this.$store.getters["UserState/getfavTotal"]; // get total number of items in fav list
    }

    // getUser() {
    //   // return this.$store.getters["UserState/getAuthState"];
    // }
  },

  methods: {
    checkCart() {},
    removeItemFromCart(itemCode) {
      const auth = this.$store.getters["UserState/getAuthState"];
      console.log(auth.uid);

      console.log(itemCode);

      console.log(this.shopCartItems);

      const userData = {
        uid: auth.uid,
        itemId: itemCode
      };

      this.$store.dispatch("UserState/deleteCartItem", userData);
      // const result = this.shopCartItems.filter(x => {
      //   return x.code !== key;
      // });
      // // console.log(key);
      // // console.log(this.shopCartItems);
      // // console.log(result);
      // //
      // const cartItems = JSON.stringify(result);
      // localStorage.setItem("cartItems", cartItems);
      // this.checkCart();
    }
  }
};
</script>



<style lang="scss" scoped>
// @import "./";

.cartContainer {
  position: relative;
  height: 80vh;
  padding: 4% 10%;
  // top: 25px;
  box-sizing: content-box;
  display: grid;
  // justify-content: space-between;
  // align-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  text-align: center;
  margin-bottom: 50px;
  background-color: #eeeeee;
  margin: 0;
  h2 {
    background-color: rgba(253, 255, 127, 0.37);
    padding: 5px;
    margin: 0;
  }
  h3 {
    background-color: white;
    display: inline-block;
    padding: 10px 30px;
  }
  &__items {
    background-color: rgba(240, 240, 240, 0.726);
    flex: 0 1 60%;
    box-sizing: border-box;
    overflow-y: scroll;

    .cartItems {
      ul {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 5px;
        &:nth-child(odd) {
          background-color: rgba(248, 190, 235, 0.205);
        }

        .price {
          display: flex;
          flex: 1 0 20%;
          input {
            height: 20px;
            width: 30px;
          }
        }
        li {
          width: 100%;
          img {
            height: 200px;
            width: 200px;
            object-fit: contain;
          }
        }
      }
    }
  }
  &__payments {
    background-color: rgba(217, 219, 219, 0.308);
    flex: 0 1 40%;
    box-sizing: border-box;
    overflow: auto;
    overflow-x: hidden;
  }
}

@media (max-width: 500px) {
  .cartContainer {
    display: flex;
    flex-direction: column-reverse;
    padding: 2%;
    height: 100%;

    &__items {
      height: 100vh;
    }
  }
}
</style>
