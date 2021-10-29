<template>
  <div class="accountContainer">
    <!-- <h2>account management page works</h2> -->
    <div class="accountContainer__view">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi.
        Sint quo quibusdam magni doloribus distinctio iure fuga doloremque.
        Nobis voluptate laudantium suscipit dolorum accusantium tempora natus
        nemo magni tempore!
      </p>

      <button @click="getProductList">getProductList</button>
      <br />
      <br />
      <br />

      <button @click="sendPayouts">PayOuts</button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <subscription-page></subscription-page>
      <router-view></router-view>
    </div>
    <div class="accountContainer__nav">
      <ul>
        <li>
          <router-link to>account</router-link>
        </li>
        <li>
          <router-link to>Purchase history</router-link>
        </li>
        <li>
          <router-link to>products</router-link>
        </li>
        <li>
          <router-link to>policy & privacy</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubscriptionPage from "../SubscriptionPage";
export default {
  components: {
    SubscriptionPage
  },
  data() {
    return {};
  },
  methods: {
    getProductList() {
      return fetch("http://localhost:3000/my-server/product", {
        method: "GET"
      })
        .then(function(res) {
          //   console.log(data);
          console.log(res);

          return res.json();
        })
        .then(function(data) {
          console.log(data);
          return data.id;
        });
    },

    sendPayouts() {
      return fetch("http://localhost:3000/my-server/pay-clients", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        }
      })
        .then(function(res) {
          //   console.log(data);
          console.log(res);

          return res.json();
        })
        .then(function(data) {
          console.log(data);
          return data.id;
        });
    }
  }
};
</script>
<style lang="scss">
.accountContainer {
  padding: 4% 10%;
  display: flex;
  flex-direction: row-reverse;
  gap: 50px;
  height: 100vh;
  background-color: #eeeeee;

  &__view {
    background-color: white;
    padding: 0 50px;
    margin: 0;
    p {
    }
  }

  &__nav {
    flex: 0 0 25%;
    ul {
      list-style-type: none;
      background-color: rgba(101, 6, 104, 0.5);
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      li {
        background-color: rgb(189, 189, 189);
        text-align: center;
        padding: 10px 0;
        margin: 5px 0;
        a {
          padding: 10px 0px;
          text-decoration: none;
          color: white;
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>


