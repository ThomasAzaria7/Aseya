<template>
  <div>
    <!-- <p>app payment works</p> -->

    <button @click="getAccessToken">checkout</button>

    <button @click="getItemObject">get final items</button>

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
    shopCartItems() {
      return this.$store.getters["UserState/refreshCart"]; // get cart items from database
    },
    getTotalPrice() {
      return this.$store.getters["UserState/cartTotalPrice"]; //  get total cart item priice
    }
  },
  mounted() {
    let SavedToken = localStorage.getItem("accessToken");
    let myToken = JSON.parse(SavedToken);
    // console.log(window.paypal);
    let myItems = null;
    let mydata = null;
    setTimeout(() => {
      myItems = this.getItemObject();
      mydata = JSON.stringify({
        token: myToken,
        items: myItems
      });

      console.log(myToken, myItems.items);
    }, 3000);

    window.paypal
      .Buttons({
        createOrder: function(data, actions) {
          return fetch("http://localhost:3000/my-server/create-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // body: newData
            body: mydata
          })
            .then(function(res) {
              //   console.log(data);
              console.log(actions);

              return res.json();
            })
            .then(function(data) {
              //   console.log(data);
              return data.id;
            });
        },
        onApprove: function(data) {
          return fetch(
            "http://localhost:3000/my-server/capture-order/" + data.orderID,
            {
              method: "POST",
              body: myToken
              // body: JSON.stringify({
              //   orderID: data.orderID
              // })
            }
          )
            .then(function(res) {
              return res.json();
            })
            .then(function(details) {
              console.log(
                "Authorization created for " + details.payer_given_name
              );
            });
        }
      })
      .render("#paypal-button-container");
  },
  methods: {
    getItemObject() {
      let paypalItems = null;
      console.log(paypalItems);
      console.log(this.cartTotal);
      for (let i = 0; i < this.shopCartItems.length; i++) {
        if (!paypalItems) {
          console.log("here");

          paypalItems = [
            {
              name: this.shopCartItems[i].name,
              // "second Product Name" /* Shows within upper-right dropdown during payment approval */,
              description: this.shopCartItems[i].description,
              // "Optional descriptive text.." /* Item details will also be in the completed paypal.com transaction view */,
              unit_amount: {
                currency_code: "USD",
                value: this.shopCartItems[i].price
              },
              quantity: 1
            }
          ];
        } else {
          console.log("theresss");

          paypalItems.push({
            name: this.shopCartItems[i].name,
            // "second Product Name" /* Shows within upper-right dropdown during payment approval */,
            description: this.shopCartItems[i].description,
            // "Optional descriptive text.." /* Item details will also be in the completed paypal.com transaction view */,
            unit_amount: {
              currency_code: "USD",
              value: this.shopCartItems[i].price
            },
            quantity: 1
          });
        }
      }
      //

      let checkout = {
        items: paypalItems,
        cartTotalPrice: this.getTotalPrice
      };
      console.log("final checkout object", checkout);
      return checkout;
      //
    },

    getAccessToken() {
      return fetch("http://localhost:3000/my-server/token/", {
        method: "POST"
      })
        .then(function(res) {
          if (!res.ok) {
            alert("Something went wrong");
          }

          return res.json();
        })
        .then(data => {
          console.log(data);
          console.log(data.id.access_token);
          this.accessToken = data.id.access_token;

          const mydata = JSON.stringify({ token: this.accessToken });
          localStorage.setItem("accessToken", mydata);
          console.log("hi");
        });
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
