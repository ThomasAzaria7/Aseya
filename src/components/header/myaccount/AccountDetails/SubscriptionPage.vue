<template>
  <div>
    <br />
    <div id="paypal-button-container-P-2ND439943W547634LMF5V2HA"></div>
    <button @click="subscribe">subscribe</button>
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
          label: "subscribe"
        },
        createSubscription: function(__, actions) {
          return actions.subscription.create({
            /* Creates the subscription */
            plan_id: "P-2ND439943W547634LMF5V2HA"
          });
        },
        onApprove: function(data) {
          alert(data.subscriptionID); // You can add optional success message for the subscriber here
        }
      })
      .render("#paypal-button-container-P-2ND439943W547634LMF5V2HA"); // Renders the PayPal button
  },
  methods: {
    subscribe() {
      // fetch("http://localhost:3000/subscription/createSubscriptionProduct", {
      //   method: "POST",
      //   mode: "cors",
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // }).then(val => {
      //   console.log(val);
      // });

      return fetch("http://localhost:3000/my-server/createSubscribeProduct", {
        method: "POST"
      })
        .then(function(res) {
          //   console.log(data);
          // console.log(actions);

          return res.json();
        })
        .then(function(data) {
          //   console.log(data);
          return data.id;
        });
    }
  }
};
</script>