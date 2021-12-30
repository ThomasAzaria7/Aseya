<template>
  <div class="accountContainer">
    <div class="accountContainer__header">
      <div v-if="authState" class="storeImage">
        <img :src="authState.photoURL" alt />
      </div>
      <div class="storeDetail">
        <h2 v-if="authState">store name</h2>
        <h4>
          <span v-if="authState">
            Welcome: {{ authState.displayName }}
            <i
              style
              @click="logout"
              class="fas fa-sign-out-alt"
            >logOut</i>
          </span>
          <span style="padding: 20px" v-else>Please login or register</span>
        </h4>
      </div>
    </div>

    <div v-if="authState" class="accountContainer__nav">
      <ul>
        <li class="navSelector">
          <a @click="showCategory('account')" to="/my-account/authentication">account</a>
          <div v-if="subCategoryActive === 'account'" class="subCategory">
            <router-link style="color: black" to="/my-account/authentication">Login / Register</router-link>
            <router-link style="color: black" to="/my-account/profile">My Profile</router-link>
            <!-- <router-link style="color: black" to="/my-account/profile">CreateProfile</router-link> -->
          </div>
        </li>
        <li>
          <router-link @click="showCategory('plan')" to="/my-account/subscription">subscription</router-link>
        </li>
        <li class="navSelector">
          <a @click="showCategory('bank')" to="/my-account/Statemnt">Bank StatMent</a>
          <div v-if="subCategoryActive === 'bank'" class="subCategory"></div>
        </li>

        <li class="navSelector">
          <a @click="showCategory('stock')" to="/my-account/manage_products">Stock management</a>
          <div v-if="subCategoryActive === 'stock'" class="subCategory">
            <router-link style="color: black" to="/my-account/create_product">add product</router-link>
            <router-link style="color: black" to="/my-account/manage_products">edit my stock</router-link>
          </div>
        </li>

        <li class="navSelector">
          <a @click="showCategory('buy_history')">Purchase history</a>
          <div v-if="subCategoryActive === 'buy_history'" class="subCategory">
            <router-link style="color: black" to="/my-account/BuyerRecipt">Buyer Recipt</router-link>
            <router-link style="color: black" to="/my-account/SellerRecipt">Seller Recipts</router-link>
          </div>
        </li>

        <li>
          <router-link @click="showCategory('policy')" to="/my-account/policy">policy & privacy</router-link>
        </li>
      </ul>
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
      this.$router.push("/my-account/authentication");
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
  padding: 0% 0%;
  // display: flex;
  // display: flex;
  flex-direction: column-reverse;
  background-color: #eeeeee;

  &__header {
    display: flex;
    justify-content: center;
    background-color: white;
    align-items: center;
    height: 40vh;
    .storeImage {
      padding: 20px;
      border: solid 2px rgba(0, 0, 0, 0.486);
      border-radius: 50%;
      z-index: 2;
      background-color: white;
      img {
        border-radius: 50%;
      }
    }

    background-image: url("https://images.pexels.com/photos/1720324/pexels-photo-1720324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;

    .storeDetail {
      z-index: 1;
      position: relative;
      left: -30px;
      padding: 20px 50px;
      border: solid 2px rgba(0, 0, 0, 0.137);
      border-left: 0;
      width: 20%;
      // border-radius: 0 5% 5% 0;
      background-color: #ffffffef;

      i {
        position: absolute;
        top: 30%;
        right: 30px;
        font-size: 1.5vw;
      }
      h2 {
        margin: 0;
        text-transform: uppercase;
        // text-align: right;
        font-size: 1.5vw;
      }
      h4 {
        margin: 0;
        font-size: 1vw;
      }
    }
  }

  &__view {
    padding: 0 10%;
    background-color: #fafafa8a;
    min-height: 80vh;
    // padding: 0 50px;
    margin: 0;
    flex: 1 1 75%;
    p {
    }
  }

  &__nav {
    padding: 50px 10%;

    .navSelector {
      a {
        cursor: pointer;
      }
      .subCategory {
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: rgb(253, 221, 221);
        width: 100%;
        top: 100%;

        a {
          font-size: 15px;
          text-decoration: none;
          padding: 4px 10px;
          &:hover {
            background-color: rgba(240, 230, 140, 0.267);
          }
          // margin: 5px;
        }
      }
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      gap: 10px;
      // height: 100px;
      // padding: 10px;

      li {
        position: relative;
        text-align: center;
        padding: 10px 0;
        margin: 5px 0;
        background-color: rgba(96, 6, 104, 0.563);
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


