<template>
  <div>
    <br />
    <div id="paypal-subscription-button-container"></div>
    <button @click="createProduct">subscribe</button>
    <br />
    <br />
    <button @click="createPlan">create Plan</button>

    <p>
      {{ getToken }}
    </p>
    <!-- <button@click="">createPlan</button> -->
  </div>
</template>




<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.paypal
      .Buttons({
        style: {
          shape: "rect",
          color: "silver",
          layout: "vertical",
          label: "subscribe",
        },
        createSubscription: function (__, actions) {
          return actions.subscription.create({
            /* Creates the subscription */
            plan_id: "P-2ND439943W547634LMF5V2HA",
          });
        },
        onApprove: function (data) {
          alert(data.subscriptionID); // You can add optional success message for the subscriber here
        },
      })
      .render("#paypal-subscription-button-container"); // Renders the PayPal button
  },
  computed: {
    getToken() {
      return this.$store.getters["UserState/getMyToken"];
    },
  },
  methods: {
    createProduct() {
      // console.log(this.getToken);
      const accessToken = this.getToken;
      // console.log(accessToken);
      return fetch(
        "http://localhost:3000/my-server/create-subscription-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: accessToken,
        }
      )
        .then(function (res) {
          // console.log(data);
          // console.log(actions);
          return res.json();
        })
        .then(function (data) {
          console.log(data);
          return data.id;
        });
    },
    createPlan() {
      // console.log(this.getToken);
      const accessToken = this.getToken;
      // console.log(accessToken);
      return fetch(
        "http://localhost:3000/my-server/create-subscription-Plans",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: accessToken,
        }
      )
        .then(function (res) {
          // console.log(data);
          // console.log(actions);
          return res.json();
        })
        .then(function (data) {
          console.log(data);
          return data.id;
        });
    },
    //
    subscribe() {
      // console.log(this.getToken);
      const accessToken = this.getToken;
      // console.log(accessToken);
      return fetch(
        "http://localhost:3000/my-server/create-subscription-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: accessToken,
        }
      )
        .then(function (res) {
          // console.log(data);
          // console.log(actions);
          return res.json();
        })
        .then(function (data) {
          console.log(data);
          return data.id;
        });
    },
    //
  },
};
</script>