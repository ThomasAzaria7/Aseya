<template>
  <div class="cartContainer">
    <div class="cartContainer__items">
      <h2>My Cart</h2>
      <div class="cartItems">
        <ul v-for="item in shopCartItems" :key="item.code">
          <li class="imageBox">
            <img :src="item.imgLink" alt />
          </li>
          <div class="information">
            <div class="itemInfo">
              <div class="price">
                <li>{{ item.name }}</li>
                <li>
                  QTY: {{item.quantity}}
                  <!-- <input type="number"  v-model="" /> -->
                </li>
                <li>$ {{ item.cost}}</li>
              </div>
              <div class="itemDetail">
                <li>style : {{item.itemDetail.type}}</li>
                <li>color: {{item.itemDetail.color}}</li>
                <li>size: {{item.itemDetail.size}}</li>
              </div>
            </div>
            <div class="shippingDetail">
              <label for>shipping details</label>
              <br />
              <select name id>
                <option value="AUSPOST">AUSPOST Regular</option>
                <option value="AusExpress">AUSPOST Express</option>
                <option value>Sendle</option>
                <option value>ParcelPoint</option>
                <option value>Omni Parcel</option>
                <option value>Fastway</option>
                <option value>Toll</option>
              </select>
            </div>
          </div>
          <li class="deleteButton">
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
      <div class="payment">
        <!-- <p>app payment works</p> -->
        <!-- <button @click="getAccessToken">access token</button> -->
        <!-- <button @click="getItemObject">get final items</button> -->
        <!-- <button @click="testRecipt">test recipt</button> -->
        <!-- <button @click="sellerRecipts">test seller recipt</button> -->
        <!-- <h2>{{ getToken }}</h2> -->
        <!-- <button @click="buyerRecipts()">buyer recipt testing</button> -->
        <div class="formControl">
          <input type="text" placeholder="your full name" />
          <input width="100%" type="email" placeholder="your email please" />
        </div>
        <br />
        <div v-if="removeButton">
          <div id="paypal-button-container"></div>
        </div>

        <!-- <button @click="remove">remove</button> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Cookies from "js-cookie";

export default {
  components: {},
  data() {
    return {
      // shopCartItems: [{}]
      cartTotalPrice: 0,
      //app payment
      accessToken: "",
      mydata: {},
      removeButton: true
    };
  },
  mounted() {
    this.$store.dispatch("UserState/retreiveToken", "myToken");
    // call paypal here
    this.getPaypal();
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
    },

    // getUser() {
    //   // return this.$store.getters["UserState/getAuthState"];
    // }

    ///app apayment
    getCurrency() {
      return this.$store.getters["items/getCurrencyValue"];
    },
    // shopCartItems() {
    //   return this.$store.getters["UserState/refreshCart"]; // get cart items from database
    // },
    // getTotalPrice() {
    //   return this.$store.getters["UserState/cartTotalPrice"]; //  get total cart item priice
    // },
    getUser() {
      return this.$store.getters["UserState/getAuthState"]; //  get total cart item priice
    },
    getToken() {
      return this.$store.getters["UserState/getMyToken"];
    }
  },

  methods: {
    getPaypal() {
      this.removeButton = true;
      const mytoken = JSON.parse(this.getToken);
      let myItems = null;
      let mydata = null;
      let uid = null;

      setTimeout(() => {
        myItems = this.getItemObject();
        mydata = JSON.stringify({
          token: mytoken,
          items: myItems
        });
        uid = this.getUser;

        // call paypal here
        // this.getPaypal(mydata, uid);
      }, 3000);

      window.paypal
        .Buttons({
          createOrder: function() {
            return fetch(
              "https://aseyea.herokuapp.com/my-server/create-order",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: mydata
              }
            )
              .then(function(res) {
                return res.json();
              })
              .then(function(data) {
                return data.id;
              })
              .catch(err => {
                console.log(err);
              });
          },
          onApprove: data => {
            return fetch(
              "https://aseyea.herokuapp.com/my-server/capture-order/" +
                data.orderID,
              {
                method: "POST",
                body: this.getToken
              }
            )
              .then(res => {
                return res.json();
              })
              .then(details => {
                console.log();
                const OnSuccess = JSON.parse(details.status);
                console.log(OnSuccess);

                const itemId = OnSuccess.id;
                // this.testRecipt(itemId);
                return fetch(
                  "https://aseyea.herokuapp.com/my-server/product/" + itemId,
                  {
                    method: "Get"
                  }
                )
                  .then(x => x.json())
                  .then(reciptData => {
                    console.log(reciptData);
                    console.log(uid);
                    const orderId = reciptData.body.id;

                    this.sellerRecipts(orderId);
                    this.buyerRecipts(orderId);
                  });
              })
              .catch(err => console.log(err));
          }
        })
        .render("#paypal-button-container");
    },
    checkCart() {},
    removeItemFromCart(itemCode) {
      const auth = this.$store.getters["UserState/getAuthState"]; //check if user is authenticated
      // if guest
      let uid; // variable to store user uid
      if (auth) {
        uid = auth.uid;
      } else {
        const dataUid = localStorage.getItem("uid");
        uid = ["guest", dataUid];
      }

      //
      const userData = {
        uid: uid,
        itemId: itemCode
      };
      this.$store.dispatch("UserState/deleteCartItem", userData);
      this.getItemObject();
      this.removeButton = false;

      setTimeout(() => {
        this.removeButton = true;
      }, 200);

      setTimeout(() => {
        this.getPaypal();
      }, 500);
    },

    /// app payment

    buyerRecipts(id) {
      // console.log(buyerDetail);
      let uid = this.getUser.uid; // variable to store user uid

      if (!uid) {
        const dataUid = localStorage.getItem("uid");
        uid = ["guest", dataUid];
      }

      // 5SJ92192WU205192X
      // "http://localhost:3000/my-server/product/5E787487BL240014A"  // for testing
      return (
        // fetch(
        //   "http://localhost:3000/my-server/product/" + "5E787487BL240014A",
        //   {
        //     method: "Get",
        //   }
        // )
        fetch("https://aseyea.herokuapp.com/my-server/product/" + id, {
          method: "Get"
        })
          .then(x => x.json())
          .then(reciptData => {
            // console.log(reciptData);
            // console.log(uid);
            const buyerDetail = {
              reciptData: reciptData,
              uid: uid
            };

            this.$store.dispatch("UserState/SendBuyerRecipt", buyerDetail); // buyer recipts

            // this.$store.dispatch("UserState/SendSellerRecipt", data);
          })
      );
    },
    //
    sellerRecipts(id) {
      // add id as parameter
      // 5SJ92192WU205192X
      // "http://localhost:3000/my-server/product/5E787487BL240014A"  // for testing
      return (
        // for testing purposess
        // fetch(
        //   "http://localhost:3000/my-server/product/" + "5E787487BL240014A",
        //   {
        //     method: "Get"
        //   }
        // )
        fetch("https://aseyea.herokuapp.com/my-server/product/" + id, {
          method: "Get"
        })
          .then(x => x.json())
          .then(reciptData => {
            const data = this.extraInfo(reciptData); //  set cart itemdetails to recipt retreieved from paypal
            this.$store.dispatch("UserState/SendSellerRecipt", data); // send data to mutation to be processeed
          })
      );
    },

    // function that adds extra information to recipt, size, color, type.

    extraInfo(reciptData) {
      const reciptArr = reciptData.body.purchase_units[0].items;
      const cartArr = this.shopCartItems;
      for (let i = 0; i < reciptArr.length; i++) {
        const searchName = reciptArr[i].name;
        const itemFound = cartArr.find(x => x.name === searchName);
        console.log(itemFound);
        reciptArr[i].itemDetail = itemFound.itemDetail;
      }
      reciptData.body.purchase_units[0].items = reciptArr;
      return reciptData;
    },

    //
    testRecipt(itemId) {
      const orderId = itemId;
      const uid = this.getUser.uid;
      return fetch(
        "https://aseyea.herokuapp.com/my-server/product/" + orderId,
        {
          method: "GET"
          // body: ""
        }
      )
        .then(x => x.json())
        .then(reciptData => {
          // modify recipt here

          //
          const buyerDetail = {
            reciptData: reciptData,
            uid: uid
          };

          this.$store.dispatch("UserState/SendBuyerRecipt", buyerDetail); // buyer recipt
        });
    },
    getItemObject() {
      let paypalItems = null;
      // console.log(this.shopCartItems);

      for (let i = 0; i < this.shopCartItems.length; i++) {
        if (!paypalItems) {
          paypalItems = [
            {
              name: this.shopCartItems[i].name,
              // "second Product Name" /* Shows within upper-right dropdown during payment approval */,
              description: this.shopCartItems[i].name,
              sku: this.shopCartItems[i].sellerID,
              // "Optional descriptive text.." /* Item details will also be in the completed paypal.com transaction view */,
              unit_amount: {
                currency_code: this.getCurrency.type,
                value: this.shopCartItems[i].exchangePrice
              },
              quantity: this.shopCartItems[i].quantity
            }
          ];
        } else {
          // console.log("theresss");
          paypalItems.push({
            name: this.shopCartItems[i].name, // "second Product Name" /* Shows within upper-right dropdown during payment approval */,
            description: this.shopCartItems[i].name, // "Optional descriptive text.." /* Item details will also be in the completed paypal.com transaction view */,
            sku: this.shopCartItems[i].sellerID,

            unit_amount: {
              currency_code: this.getCurrency.type,
              value: this.shopCartItems[i].exchangePrice
            },
            quantity: this.shopCartItems[i].quantity
          });
        }
      }
      //

      // console.log(typeof this.getTotalPrice);
      console.log("cuurency type", this.getCurrency.type);

      let checkout = {
        items: paypalItems,
        cartTotalPrice: this.getTotalPrice,
        currency: this.getCurrency.type
      };
      // console.log("final checkout object", checkout);
      return checkout;
      //
    }
  }
};
</script>



<style lang="scss" scoped>
// @import "./";

.formControl {
  margin: 10px 9%;
  display: none;
  input {
    box-sizing: border-box;
    padding: 10px;
    margin: 5px;

    width: 100%;
  }
}

#paypal-button-container {
  position: relative;
  color: pink;
  padding: 0 50px;
  z-index: 0;
}

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
        // justify-content: spac;
        list-style-type: none;
        margin: 0;
        padding: 5px;
        &:nth-child(odd) {
          background-color: rgba(248, 190, 235, 0.205);
        }

        .imageBox {
          height: 200px;
          width: 150px;
          flex: 0 0 30%;
          img {
            height: 200px;
            width: 100%;
            object-fit: contain;
          }
        }

        .information {
          display: flex;
          flex-direction: column;
          // justify-content: space-evenly;
          flex: 0 0 65%;
          background-color: white;
          // flex-wrap: wrap;

          .itemInfo {
            flex: 0 0 70%;
          }

          .shippingDetail {
          }
          .itemDetail {
            // display: flex;
            // flex-direction: column;
            justify-content: left;
            // background-color: rgb(146, 58, 58);
          }

          .price {
            // background-color: rgb(121, 138, 187);
          }
        }

        .deleteButton {
          display: flex;
          flex-direction: column;
          align-self: center;
          background-color: rgb(255, 255, 255);
        }

        // .price {
        //   display: flex;
        //   flex-direction: column;
        //   flex: 1 0 20%;
        //   input {
        //     height: 20px;
        //     width: 30px;
        //   }
        // }
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
