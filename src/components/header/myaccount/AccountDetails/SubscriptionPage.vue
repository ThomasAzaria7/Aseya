
<template>
  <div>
    <br />
    <h2>Subscribe to Sell with us</h2>
    <div class="planContainer">
      <div class="card__outer">
        <div class="card__inner">
          <div class="card__inner-front">
            <div class="picture card1"></div>
            <div class="list">
              <h2>Basic Plan</h2>
            </div>
          </div>
          <div class="card__inner-back">
            <h2>$ 30.95 / month</h2>
            <ul>
              <li>
                <a href>support</a>
              </li>
              <li>
                <a href>full support</a>
              </li>
              <li>
                <a href>promotion</a>
              </li>
            </ul>
            <div class="buttonContainer">
              <div id="paypal-subscription-button-container1"></div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="card__outer">
        <div class="card__inner">
          <div class="card__inner-front">
            <div class="picture card2"></div>

            <h2>Premium Plan</h2>
          </div>
          <div class="card__inner-back">
            <h2>$ 59.95 / month</h2>
            <ul>
              <li>
                <a href>support</a>
              </li>
              <li>
                <a href>full support</a>
              </li>
              <li>
                <a href>promotion</a>
              </li>
            </ul>
            <div class="buttonContainer">
              <div id="paypal-subscription-button-container2"></div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="card__outer">
        <div class="card__inner">
          <div class="card__inner-front">
            <div class="picture card3"></div>

            <h2>Advanced Plan</h2>
          </div>
          <div class="card__inner-back">
            <h2>$ 119.95 / month</h2>
            <ul>
              <li>
                <a href>support</a>
              </li>
              <li>
                <a href>full support</a>
              </li>
              <li>
                <a href>promotion</a>
              </li>
            </ul>
            <div class="buttonContainer">
              <div id="paypal-subscription-button-container3"></div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="card__outer">
        <div class="card__inner">
          <div class="card__inner-front">
            <div class="picture card4"></div>

            <h2>Professional Plan</h2>
          </div>
          <div class="card__inner-back">
            <h2>$ 179 / month</h2>
            <ul>
              <li>
                <a href>phone support</a>
              </li>
              <li>
                <a href>market advice</a>
              </li>
              <li>
                <a href>super pomotions</a>
              </li>
              <li>
                <a href>longer spotlight time</a>
              </li>
            </ul>
            <div class="buttonContainer">
              <div id="paypal-subscription-button-container4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <button @click="createProduct">subscribe</button>
    <br />
    <br />
    <button @click="createPlan">create Plan</button>-->

    <!-- <p>
      {{ getToken }}
    </p>-->
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
      .render("#paypal-subscription-button-container1"); // Renders the PayPal button
    //
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
      .render("#paypal-subscription-button-container2"); // Renders the PayPal button
    //

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
      .render("#paypal-subscription-button-container3"); // Renders the PayPal button
    //

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
      .render("#paypal-subscription-button-container4"); // Renders the PayPal button
  },
  computed: {
    getToken() {
      return this.$store.getters["UserState/getMyToken"];
    }
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
            "Content-Type": "application/json"
          },
          body: accessToken
        }
      )
        .then(function(res) {
          // console.log(data);
          // console.log(actions);
          return res.json();
        })
        .then(function(data) {
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
            "Content-Type": "application/json"
          },
          body: accessToken
        }
      )
        .then(function(res) {
          // console.log(data);
          // console.log(actions);
          return res.json();
        })
        .then(function(data) {
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
            "Content-Type": "application/json"
          },
          body: accessToken
        }
      )
        .then(function(res) {
          // console.log(data);
          // console.log(actions);
          return res.json();
        })
        .then(function(data) {
          console.log(data);
          return data.id;
        });
    }
    //
  }
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
h2 {
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
  font-weight: 100;
}
.card__outer {
  background-color: transparent;
  width: 100%;
  height: 400px;
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
      .picture {
        height: 300px;
        clip-path: polygon(0 0, 100% 0%, 100% 85%, 0 100%);
        background-size: cover;
      }
      .card1 {
        background-image: url("https://images.pexels.com/photos/2766333/pexels-photo-2766333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
      }
      .card2 {
        background-image: url("https://images.pexels.com/photos/2610820/pexels-photo-2610820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
      }
      .card3 {
        background-image: url("https://images.pexels.com/photos/2155552/pexels-photo-2155552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
      }
      .card4 {
        background-image: url("https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
      }
    }

    &-back {
      background-color: rgb(255, 255, 255);
      transform: rotateY(180deg);

      h2 {
        color: black;
        font-size: 25px;
        font-weight: 500;
        padding-bottom: 10px;
        border-bottom: solid 2px rgba(0, 0, 0, 0.096);
      }

      ul {
        display: block;
        list-style-type: none;
        // background-color: aqua;
        // padding: 20px;
        margin: 20px 0;
        padding: 0;

        li {
          // background: black;
          margin: 10px 30px;
          background-color: rgba(156, 154, 154, 0.164);
          text-align: left;
          a {
            text-decoration: none;
            margin: 0;
            padding: 0;
            padding: 5px 32px;
            // background-color: aquamarine;
          }
        }
      }

      .buttonContainer {
        // position: relative;
        position: absolute;
        bottom: 3px;
        padding: 0 30px;
        right: 0;
        left: 0;
      }
    }
  }
}
</style>