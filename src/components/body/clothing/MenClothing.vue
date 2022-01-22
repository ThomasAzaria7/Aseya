<template>
  <div>
    <!-- <button @click="getCurrency">test currency</button> -->
    <button @click="buyerRecipt">Send buyer recipt</button>
    <button @click="dispute">Refunds</button>
    <button @click="subscribed">subscribed</button>
    <button @click="registered">User Registered</button>
    <button @click="shipped">Seller shipped item shipped</button>

    <button>Dispute send email notification to aseyea and merchant</button>

    <!-- <h1>mens ></h1>
    <ul>
      <li>
        <a href>shirts</a>
      </li>
      <li>
        <a href>shirts</a>
      </li>
      <li>
        <a href>shirts</a>
      </li>
      <li>
        <a href>shirts</a>
      </li>
      <li>
        <a href>shirts</a>
      </li>
      <li>
        <a href>shirts</a>
      </li>
      <li>
        <a href>shirts</a>
      </li>
    </ul>-->

    <div></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    registered() {
      fetch("http://localhost:3000/my-server/register-welcome", {
        headers: {
          "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ email: "yungblackhumbl3@gmail.com" })
      }).then(y => console.log(y));
    },

    subscribed() {
      fetch("http://localhost:3000/my-server/subscribe-notice", {
        headers: {
          "content-type": "application/json"
        },
        method: "POST"
      })
        .then(x => x.json())
        .then(y => console.log(y));
    },
    shipped() {
      fetch("http://localhost:3000/my-server/item-shipped", {
        headers: {
          "content-type": "application/json"
        },
        method: "POST"
      })
        .then(x => x.json())
        .then(y => console.log(y));
    },
    dispute() {},

    //
    //
    getCurrency() {
      fetch("https://api.exchangerate.host/latest?base=USD", {
        headers: {
          "content-type": "application/json"
        },
        method: "GET"
      })
        .then(x => x.json())
        .then(y => console.log(y.rates.AUD));
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
  padding: 80px 10%;

  h1 {
    font-size: 20px;
    font-weight: 100;
  }

  ul {
    background: rgb(245, 243, 243);
    width: 150px;
    margin: 0;
    list-style-type: none;
    padding: 0;

    li {
      padding: 10px 2%;
      // background-color: aqua;
      a {
        text-decoration: none;

        &:hover {
          color: green;
        }
      }
    }
  }
}
</style>