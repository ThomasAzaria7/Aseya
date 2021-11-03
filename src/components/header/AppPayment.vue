<template>
  <div>
    <!-- <p>app payment works</p> -->

    <button @click="getAccessToken">checkout</button>

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
  mounted() {
    const token = localStorage.getItem("accessToken");
    // let token = JSON.parse(storeageData);
    console.log(window.paypal);

    window.paypal
      .Buttons({
        createOrder: function(data, actions) {
          return fetch("http://localhost:3000/my-server/create-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: token
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
              body: token
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
    //checkout func
    // checkout() {
    //   fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Accept-Language": "en_US",
    //       " AZVIfee2000TmoBTn2WMKHLIkHDr9aLdfnVsOWy89wpbPbE6hbs4e6TChAal84biHKA1OK1vqzEcqk_J":
    //         "EDMMFmEvJn7CypNd4HpqgjjAMBb31THGhKSXC5UIBxRRrMWnnxV4FD_GedIKAW4YjhRtappFG9IZH7CV",
    //       " grant_type": "client_credentials"
    //     }
    //   })
    //     .then(val => console.log(val))
    //     .catch(err => console.log(err));
    // }

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
