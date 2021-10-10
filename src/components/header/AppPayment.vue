<template>
  <div>
    <p>app payment works</p>

    <button @click="checkout">checkout</button>

    <div id="paypal-button-container"></div>
  </div>
</template>
 

<script>
// import paypal from "";
export default {
  mounted() {
    console.log(window.paypal);
    window.paypal
      .Buttons({
        createOrder: function(data, actions) {
          return fetch("http://localhost:3000/my-server/create-order", {
            method: "POST",
            body: { message: "hi" }
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
              method: "POST"
            }
          ).then(function(res) {
            console.log("yo order id", data.orderID);

            if (!res.ok) {
              alert("Something went wrong", data.orderID);
            }
          });
        }
      })
      .render("#paypal-button-container");
  },
  methods: {
    //checkout func
    checkout() {
      fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-Language": "en_US",
          " AZVIfee2000TmoBTn2WMKHLIkHDr9aLdfnVsOWy89wpbPbE6hbs4e6TChAal84biHKA1OK1vqzEcqk_J":
            "EDMMFmEvJn7CypNd4HpqgjjAMBb31THGhKSXC5UIBxRRrMWnnxV4FD_GedIKAW4YjhRtappFG9IZH7CV",
          " grant_type": "client_credentials"
        }
      })
        .then(val => console.log(val))
        .catch(err => console.log(err));
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
