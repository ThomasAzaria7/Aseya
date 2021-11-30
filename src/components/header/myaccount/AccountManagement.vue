<template>
  <div class="accountContainer">
    <!-- <h2>account management page works</h2> -->
    <div class="accountContainer__view">
      <!-- <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi.
        Sint quo quibusdam magni doloribus distinctio iure fuga doloremque.
        Nobis voluptate laudantium suscipit dolorum accusantium tempora natus
        nemo magni tempore!
      </p>-->

      <!-- <h2>{{authState}}</h2> -->

      <!-- <user-authentication></user-authentication> -->
      <router-view></router-view>

      <!-- <button @click="getProductList">getProductList</button>
      <br />
      <br />
      <br />

      <button @click="sendPayouts">PayOuts</button>-->

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <div v-if="authState" class="accountContainer__nav">
      <ul>
        <li>
          <router-link
            @click="showCategory('account')"
            to="/my-account/authentication"
            >account</router-link
          >
        </li>
        <div v-if="subCategoryActive === 'account'" class="subCategory">
          <router-link style="color: black" to="/my-account/profile"
            >Profile</router-link
          >
          <router-link style="color: black" to="/my-account/authentication"
            >authentication</router-link
          >
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
        </div>
        <!-- <li>
          <router-link></router-link>
        </li>-->
        <li>
          <router-link @click="showCategory('bank')" to="/my-account/Statemnt"
            >Bank StatMent</router-link
          >
        </li>

        <div v-if="subCategoryActive === 'bank'" class="subCategory">
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
        </div>

        <li>
          <router-link @click="showCategory('buy_history')" to
            >Purchase history</router-link
          >
        </li>
        <div v-if="subCategoryActive === 'buy_history'" class="subCategory">
          <router-link style="color: black" to="/my-account/BuyerRecipt"
            >BuyerRecipt</router-link
          >
          <router-link style="color: black" to="/my-account/SellerRecipt"
            >SellerRecipts</router-link
          >
          <!--  <router-link style="color:black" to="/my-account/profile">CreateProfile</router-link> -->
        </div>
        <li>
          <router-link @click="showCategory('sell_history')" to
            >sell history</router-link
          >
        </li>
        <div v-if="subCategoryActive === 'sell_history'" class="subCategory">
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
        </div>
        <li>
          <router-link @click="showCategory('stock')" to
            >Stock management</router-link
          >
        </li>
        <div v-if="subCategoryActive === 'stock'" class="subCategory">
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
        </div>
        <li>
          <router-link
            @click="showCategory('plan')"
            to="/my-account/subscription"
            >subscription</router-link
          >
        </li>
        <div v-if="subCategoryActive === 'plan'" class="subCategory">
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
        </div>
        <li>
          <router-link @click="showCategory('policy')" to="/my-account/policy"
            >policy & privacy</router-link
          >
        </li>
        <div v-if="subCategoryActive === 'policy'" class="subCategory">
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
          <router-link style="color: black" to="/my-account/profile"
            >CreateProfile</router-link
          >
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
// import UserAuthentication from "./users/UserAuthentication";
export default {
  components: {
    // UserAuthentication
  },
  data() {
    return {
      subCategoryActive: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.getsellerRecipt();
      this.getBuyerRecipt();
    }, 3000);
  },
  computed: {
    authState() {
      const auth = this.$store.getters["UserState/getAuthState"];
      console.log(auth);
      return auth;
    },
  },
  methods: {
    showCategory(val) {
      return (this.subCategoryActive = val);
    },
    getProductList() {
      return fetch("http://localhost:3000/my-server/product", {
        method: "GET",
      })
        .then(function (res) {
          //   console.log(data);
          console.log(res);

          return res.json();
        })
        .then(function (data) {
          console.log(data);
          return data.id;
        });
    },

    getsellerRecipt() {
      const uid = this.authState.uid;
      this.$store.dispatch("UserState/retrieveSellerRecipts", uid);
    },

    getBuyerRecipt() {
      const uid = this.authState.uid;
      this.$store.dispatch("UserState/retrieveBuyerRecipts", uid);
    },

    sendPayouts() {
      return fetch("http://localhost:3000/my-server/pay-clients", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      })
        .then(function (res) {
          //   console.log(data);
          console.log(res);

          return res.json();
        })
        .then(function (data) {
          console.log(data);
          return data.id;
        });
    },
  },
};
</script>
<style lang="scss">
.accountContainer {
  padding: 4% 10%;
  display: flex;
  flex-direction: row;
  gap: 50px;
  // height: 100vh;
  background-color: #eeeeee;

  &__view {
    background-color: white;
    min-height: 100vh;
    padding: 0 50px;
    margin: 0;
    flex: 1 1 75%;
    p {
    }
  }

  &__nav {
    flex: 1 1 25%;
    height: 100%;

    ul {
      list-style-type: none;
      // background-color: rgba(101, 6, 104, 0.5);
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      .subCategory {
        background-color: rgba(255, 255, 255, 0.315);
        // height: 100px;
        padding: 10px;
        box-sizing: border-box;
        text-align: right;
        display: flex;
        flex-direction: column;
        a {
          font-size: 15px;
          background-color: rgba(161, 161, 161, 0.226);
          text-decoration: none;
          padding: 4px 10px;
          margin: 5px;
        }
      }

      li {
        text-align: center;
        padding: 10px 0;
        margin: 5px 0;
        background-color: rgba(96, 6, 104, 0.363);

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


