<template>
  <div class="accountContainer">
    <h2>
      <span v-if="authState">
        Welcome: {{authState.displayName}}
        <i @click="logout" class="fas fa-sign-out-alt"></i>
      </span>
      <span v-else>you are not logged in</span>
    </h2>

    <div v-if="authState" class="accountContainer__nav">
      <ul>
        <li>
          <router-link @click="showCategory('account')" to="/my-account/authentication">account</router-link>
        </li>
        <li>
          <router-link @click="showCategory('bank')" to="/my-account/Statemnt">Bank StatMent</router-link>
        </li>

        <li>
          <router-link
            @click="showCategory('buy_history')"
            to="/my-account/BuyerRecipt"
          >Purchase history</router-link>
        </li>

        <li>
          <router-link
            @click="showCategory('stock')"
            to="/my-account/create_product"
          >Stock management</router-link>
        </li>

        <li>
          <router-link @click="showCategory('plan')" to="/my-account/subscription">subscription</router-link>
        </li>

        <li>
          <router-link @click="showCategory('policy')" to="/my-account/policy">policy & privacy</router-link>
        </li>
      </ul>

      <div class="dropDown">
        <div v-if="subCategoryActive === 'account'" class="subCategory">
          <router-link style="color: black" to="/my-account/authentication">Login / Register</router-link>
          <router-link style="color: black" to="/my-account/profile">My Profile</router-link>
          <!-- <router-link style="color: black" to="/my-account/profile">CreateProfile</router-link> -->
        </div>
        <div v-if="subCategoryActive === 'bank'" class="subCategory">
          <router-link style="color: black" to="/my-account/profile">CreateProfile</router-link>
          <router-link style="color: black" to="/my-account/profile">CreateProfile</router-link>
          <router-link style="color: black" to="/my-account/profile">CreateProfile</router-link>
        </div>

        <div v-if="subCategoryActive === 'buy_history'" class="subCategory">
          <router-link style="color: black" to="/my-account/BuyerRecipt">BuyerRecipt</router-link>
          <router-link style="color: black" to="/my-account/SellerRecipt">SellerRecipts</router-link>
          <!--  <router-link style="color:black" to="/my-account/profile">CreateProfile</router-link> -->
        </div>
        <div v-if="subCategoryActive === 'stock'" class="subCategory">
          <router-link style="color: black" to="/my-account/create_product">add product</router-link>
          <router-link style="color: black" to="/my-account/manage_products">edit my stock</router-link>
          <!-- <router-link style="color: black" to="/my-account/profile"></router-link> -->
        </div>
        <!-- <div v-if="subCategoryActive === 'plan'" class="subCategory">
          <router-link style="color: black" to="/my-account/profile">CreateProfile</router-link>
          <router-link style="color: black" to="/my-account/profile">CreateProfile</router-link>
          <router-link style="color: black" to="/my-account/profile">CreateProfile</router-link>
        </div>-->
        <div v-if="subCategoryActive === 'policy'" class="subCategory">
          <router-link style="color: black" to="/my-account/profile">CreateProfile</router-link>
          <router-link style="color: black" to="/my-account/profile">CreateProfile</router-link>
          <router-link style="color: black" to="/my-account/profile">CreateProfile</router-link>
        </div>
      </div>
    </div>
    <div class="accountContainer__view">
      <router-view></router-view>
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
      subCategoryActive: ""
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
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("UserState/logOutUser");
    },
    showCategory(val) {
      return (this.subCategoryActive = val);
    },
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
  padding: 3% 10%;
  // display: flex;
  // display: flex;
  flex-direction: column-reverse;
  background-color: #eeeeee;

  h2 {
    margin: 2px;
    text-align: right;
  }
  &__view {
    // background-color: white;
    min-height: 80vh;
    // padding: 0 50px;
    margin: 0;
    flex: 1 1 75%;
    p {
    }
  }

  &__nav {
    .dropDown {
      display: flex;
      .subCategory {
        background-color: rgba(255, 255, 255, 0.315);
        background-image: url("https://images.pexels.com/photos/3208282/pexels-photo-3208282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
        // height: 100px;
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 50%);
        padding: 10px;
        box-sizing: border-box;
        text-align: right;
        flex: 1 0 25%;
        display: flex;
        flex-direction: column;
        a {
          font-size: 15px;
          background-color: rgba(161, 161, 161, 0.226);
          text-decoration: none;
          padding: 4px 10px;
          // margin: 5px;
        }
      }
    }

    ul {
      list-style-type: none;
      background-color: rgb(255, 255, 255);
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      gap: 10px;
      // height: 100px;
      // padding: 10px;

      li {
        text-align: center;
        padding: 10px 0;
        margin: 5px 0;
        background-color: rgba(96, 6, 104, 0.363);
        flex: 1 1 25%;

        a {
          padding: 10px 10px;
          text-decoration: none;
          color: white;
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>


