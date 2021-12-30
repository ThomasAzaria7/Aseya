<template>
  <div>
    <!-- <p>app payment works</p> -->

    <!-- <button @click="getAccessToken">access token</button> -->

    <!-- <button @click="getItemObject">get final items</button> -->

    <!-- <button @click="testRecipt">test recipt</button> -->

    <!-- <button @click="sellerRecipts">test seller recipt</button> -->

    <!-- <h2>{{ getToken }}</h2> -->

    <!-- <button @click="buyerRecipts()">buyer recipt testing</button> -->

    <div id="paypal-button-container"></div>
  </div>
</template>
 

<script>
// import paypal from "";
export default {
  data() {
    return {
      accessToken: "",
      mydata: {}
    };
  },
  computed: {
    getCurrency() {
      return this.$store.getters["items/getCurrencyValue"];
    },
    shopCartItems() {
      return this.$store.getters["UserState/refreshCart"]; // get cart items from database
    },
    getTotalPrice() {
      return this.$store.getters["UserState/cartTotalPrice"]; //  get total cart item priice
    },

    getUser() {
      return this.$store.getters["UserState/getAuthState"]; //  get total cart item priice
    },
    getToken() {
      return this.$store.getters["UserState/getMyToken"];
    }
  },
  mounted() {
    // console.log(window.paypal);

    this.$store.dispatch("UserState/retreiveToken", "myToken");

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

      // console.log(uid);
      // console.log(myToken, myItems.items);

      window.paypal
        .Buttons({
          createOrder: function() {
            return fetch("http://localhost:3000/my-server/create-order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: mydata
            })
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
              "http://localhost:3000/my-server/capture-order/" + data.orderID,
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
                  "http://localhost:3000/my-server/product/" + itemId,
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
    }, 3000);
  },
  methods: {
    buyerRecipts(id) {
      // console.log(buyerDetail);
      const uid = this.getUser;

      // 5SJ92192WU205192X
      // "http://localhost:3000/my-server/product/5E787487BL240014A"  // for testing
      return (
        // fetch(
        //   "http://localhost:3000/my-server/product/" + "5E787487BL240014A",
        //   {
        //     method: "Get",
        //   }
        // )
        fetch("http://localhost:3000/my-server/product/" + id, {
          method: "Get"
        })
          .then(x => x.json())
          .then(reciptData => {
            // console.log(reciptData);
            // console.log(uid);
            const buyerDetail = {
              reciptData: reciptData,
              uid: uid.uid
            };

            this.$store.dispatch("UserState/SendBuyerRecipt", buyerDetail); // buyer recipts

            // this.$store.dispatch("UserState/SendSellerRecipt", data);
          })
      );
    },
    //
    sellerRecipts(id) {
      // 5SJ92192WU205192X
      // "http://localhost:3000/my-server/product/5E787487BL240014A"  // for testing
      return (
        // for testing purposess
        // fetch(
        //   "http://localhost:3000/my-server/product/" + "5E787487BL240014A",
        //   {
        //     method: "Get",
        //   }
        // )
        fetch("http://localhost:3000/my-server/product/" + id, {
          method: "Get"
        })
          .then(x => x.json())
          .then(reciptData => {
            const data = reciptData;
            this.$store.dispatch("UserState/SendSellerRecipt", data);
          })
      );
    },
    testRecipt(itemId) {
      const orderId = itemId;
      const uid = this.getUser.uid;
      return fetch("http://localhost:3000/my-server/product/" + orderId, {
        method: "GET"
        // body: ""
      })
        .then(x => x.json())
        .then(reciptData => {
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
              description: this.shopCartItems[i].description,
              sku: this.shopCartItems[i].sellerID,
              // "Optional descriptive text.." /* Item details will also be in the completed paypal.com transaction view */,
              size: "L",
              item_details: {
                weight: "100kg"
              },
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
            description: this.shopCartItems[i].description, // "Optional descriptive text.." /* Item details will also be in the completed paypal.com transaction view */,
            sku: this.shopCartItems[i].sellerID,
            size: "L",
            item_details: {
              weight: "100kg"
            },
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
#paypal-button-container {
  position: relative;
  color: pink;
  padding: 0 50px;
  z-index: 0;
}
</style>
