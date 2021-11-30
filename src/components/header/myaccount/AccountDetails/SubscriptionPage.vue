<template>
  <div>
    <br />
    <h2>Subscribe to Sell with us</h2>
    <div class="planContainer">
      <div class="card__outer">
        <div class="card__inner">
          <div class="card__inner-front">
            <h2>Basic Plan</h2>
          </div>
          <div class="card__inner-back">
            hello
            <div class="buttonContainer"></div>
            <div id="paypal-subscription-button-container1"></div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="card__outer">
        <div class="card__inner">
          <div class="card__inner-front">
            <h2>Premium Plan</h2>
          </div>
          <div class="card__inner-back">
            hello
            <div class="buttonContainer"></div>
            <div id="paypal-subscription-button-container2"></div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="card__outer">
        <div class="card__inner">
          <div class="card__inner-front">
            <h2>Advanced Plan</h2>
          </div>
          <div class="card__inner-back">
            hello
            <div class="buttonContainer"></div>
            <div id="paypal-subscription-button-container3"></div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="card__outer">
        <div class="card__inner">
          <div class="card__inner-front">
            <h2>Professional Plan</h2>
          </div>
          <div class="card__inner-back">
            hello
            <div class="buttonContainer"></div>
            <div id="paypal-subscription-button-container4"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <button @click="createProduct">subscribe</button>
    <br />
    <br />
    <button @click="createPlan">create Plan</button> -->

    <!-- <p>
      {{ getToken }}
    </p> -->
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
      .render("#paypal-subscription-button-container1"); // Renders the PayPal button
    //
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
      .render("#paypal-subscription-button-container2"); // Renders the PayPal button
    //

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
      .render("#paypal-subscription-button-container3"); // Renders the PayPal button
    //

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
      .render("#paypal-subscription-button-container4"); // Renders the PayPal button
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

<style lang="scss" scoped>
.planContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px;
  box-sizing: border-box;
  // grid-template-columns: auto auto auto auto;
  // grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
}
.card__outer {
  background-color: transparent;
  width: 100%;
  height: 500px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  // &hover {
  //   transform: rotateY(180deg);
  // }

  .card__inner {
    border: 1px solid #f1f1f1;
    box-shadow: 2px 2px 0.6rem rgba(0, 0, 0, 0.438);
    position: relative;
    height: 100%;
    width: 100%;
    background-color: pink;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
    box-sizing: border-box;

    &:hover {
      transform: rotateY(180deg);
    }

    &-front,
    &-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
    }
    &-front {
    }

    &-back {
      background-color: yellow;
      transform: rotateY(180deg);

      .buttonContainer {
        // position: relative;
        padding: 0 30px;
      }
    }
  }
}
</style>