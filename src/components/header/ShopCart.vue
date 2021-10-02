<template>
  <div class="cartContainer">
    <div class="cartContainer__items">
      <h2>My Cart</h2>
      <div class="cartItems">
        <ul v-for="item in shopCartItems" :key="item.code">
          <li><img :src="item.imgLink" alt="" /></li>
          <li>{{ item.name }}</li>
          <div class="price">
            <li><input type="number" value="1" /></li>
            <li>$ {{ item.price }}</li>
          </div>
          <li>
            <i
              @click="removeItemFromCart(item.code)"
              class="far fa-times-circle"
            ></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="cartContainer__payments">
      <h2>Order Summary</h2>
    </div>
  </div>
</template>

<script>
// import Cookies from "js-cookie";
export default {
  data() {
    return {
      shopCartItems: [{}]
    };
  },
  created() {
    //
    // Cookies.set("name", { name: "thomas" });
    const storeageData = localStorage.getItem("cartItems");
    let cartItems = JSON.parse(storeageData);
    console.log(cartItems);
    this.shopCartItems = cartItems;
  },
  watch: {},
  methods: {
    checkCart() {
      const storeageData = localStorage.getItem("cartItems");
      let cartItems = JSON.parse(storeageData);
      console.log(cartItems);
      this.shopCartItems = cartItems;
    },
    removeItemFromCart(key) {
      const result = this.shopCartItems.filter(x => {
        return x.code !== key;
      });
      // console.log(key);

      // console.log(this.shopCartItems);
      // console.log(result);
      //
      const cartItems = JSON.stringify(result);
      localStorage.setItem("cartItems", cartItems);
      this.checkCart();
    }
  }
};
</script>

<style lang="scss" scoped>
.cartContainer {
  padding: 2% 10%;
  top: 25px;
  gap: 20px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  margin-bottom: 50px;
  background-color: #eeeeee;
  margin: 0;
  height: 80vh;
  box-sizing: border-box;
  h2 {
    background-color: rgba(253, 255, 127, 0.37);
    padding: 5px;
    margin: 0;
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
  }
}
</style>
