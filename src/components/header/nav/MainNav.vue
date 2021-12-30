<template>
  <div class="header">
    <div class="header__promo">
      <p>Free Shipping for orders over $50 | Aus. wide</p>
      <div class="currencySelector">
        <select v-model="currency">
          <option value="USD">USD</option>
          <option selected value="AUD">AUD</option>
          <option value="NZD">NZD</option>
          <option value="CAD">CAD</option>
        </select>
      </div>
    </div>
    <div class="header__titles" :class="slideActive ? 'full' : ' short'">
      <div class="logo">
        <h1>
          <router-link to="/">Aseyea</router-link>
        </h1>
      </div>
      <div class="search">
        <select name="Category" id>
          <option class="option" value>all</option>
          <option class="option" value>clothing</option>
          <option class="option" value>electronics</option>
        </select>
        <div>
          <input type="text" placeholder="search for item" v-model="searchQuery" />
        </div>
        <div>
          <button @click="search" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div class="account">
        <router-link to="/my-account/authentication">
          <i class="fas fa-user"></i>
        </router-link>
        <router-link to="/my-favorites">
          <i class="far fa-heart">
            <span style="margin-left: 2px; font-size: 16px">
              {{
              favTotal
              }}
            </span>
          </i>
        </router-link>
        <router-link to="/my-cart">
          <i class="fas fa-shopping-cart"></i>
          <span style="margin-left: 5px">{{ cartTotal }}</span>
        </router-link>

        <router-link to>
          <i @click="toggleNav" class="fas fa-bars"></i>
        </router-link>
      </div>
    </div>

    <!-- v-if="slideActive" -->
    <ul v-if="slideActive" class="header__nav">
      <li>
        <router-link to="/">MarketPlace</router-link>
      </li>
      <li>
        <router-link to="/store">New Releases</router-link>
      </li>
      <li>
        <router-link to="/clothing">Clothing</router-link>
      </li>
      <li>
        <a>Books</a>
      </li>
      <li>
        <a>Electronics</a>
      </li>
      <li>
        <a>sell with us</a>
      </li>
      <li>
        <a>New Arriavals</a>
      </li>
      <li>
        <a>Discount Sale</a>
      </li>
      <li>
        <a>limited Offer</a>
      </li>
    </ul>
  </div>

  <mobile-nav :toggle-menu="showMenu" @close="toggleNav"></mobile-nav>
</template>

<script>
import MobileNav from "./MobileNav";

export default {
  components: {
    MobileNav
  },
  data() {
    return {
      slideActive: true,
      showMenu: false,
      currency: "USD",
      searchQuery: ""
    };
  },
  watch: {
    currency(currencySelected) {
      console.log(currencySelected);
      this.$store.dispatch("items/updateCurrency", currencySelected);
    }
  },

  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  },

  computed: {
    selectedCurrency() {
      return console.log(this.currency);

      // return this.currency;
    },
    favTotal() {
      return this.$store.getters["UserState/getfavTotal"];
    },
    cartTotal() {
      // const storeageData = localStorage.getItem("cartItems");
      // let cartItems = JSON.parse(storeageData);
      return this.$store.getters["UserState/getCartTotal"];
    }
  },
  methods: {
    // updateSiteCurrency(currencySelected) {
    // },
    search() {
      this.$router.replace("/search-Result/" + this.searchQuery);
      this.searchQuery = "";
    },
    toggleSlide() {
      this.slideActive = !this.slideActive;
    },

    toggleNav() {
      this.showMenu = !this.showMenu;
      // console.log(this.showMenu);
    },
    handleScroll() {
      let num = window.scrollY;
      // // console.log("scrollYposition", num);
      if (num === 0) {
        this.slideActive = true;
      } else if (num > 10) {
        this.slideActive = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.short {
  // height: 50px;
  animation: navTransitx 0.3s ease-in forwards;
}

.full {
  animation: navTransit 0.2s ease-in forwards;
}

.header {
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.486);

  &__promo {
    margin: 0;
    background-color: rgba(137, 43, 226, 0.582);
    position: relative;
    display: flex;
    justify-content: center;
    .currencySelector {
      position: relative;
      // right: 50px;
      float: right;
      margin-left: 20px;
      option {
        font-size: 12px;
      }
    }
    p {
      margin: 0;
      text-align: center;
      color: white;
      padding: 2px 0;
      letter-spacing: 5px;
      font-size: 12px;
    }
  }
  &__titles {
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    position: relative;
    color: rgb(24, 3, 82);

    .logo {
      position: relative;
      & > * {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }

      h1 {
        text-transform: uppercase;
        margin: 0;
        padding: 5px 0px;
        a {
          text-decoration: none;
          color: inherit;
          padding: 0;
          margin: 0;
        }
      }
    }

    //
    .search {
      display: flex;
      position: relative;
      box-sizing: border-box;
      height: 35px;
      border: solid 2px rgba(0, 0, 0, 0.1);
      align-items: center;
      border-radius: 5px 5px;
      top: 50%;
      transform: translateY(-50%);

      & > * {
        position: relative;
        box-sizing: border-box;
        // height: 100%;
        // top: 50%;
        // transform: translateY(-50%);
      }

      select {
        border: none;
        margin: 0;
        border: none;
        outline: none;
        background-color: transparent;
        padding: 0 10px;
        text-transform: capitalize;

        .option {
          color: rgb(86, 57, 90);
          background-color: none;
        }
        & * > {
          // margin: 10px;
          background-color: rgba(255, 255, 255, 0.349);
        }
      }

      ::placeholder {
        color: rgba(0, 0, 0, 0.541);
      }

      input {
        position: relative;
        // background-color: rgba(221, 221, 221, 0.144);
        color: rgb(86, 1, 143);
        border: none;
        margin: 0;
        padding: 0 10px;
        border: none;
        outline: none;
        font-size: 16px;

        &:focus {
          animation: inputTransit 0.5s ease-in-out forwards;
        }
        &:not(:focus) {
          // animation: name duration timing-function delay iteration-count direction fill-mode;
          animation: inputTransitx 3s ease-in-out forwards;
        }
      }

      button {
        // border: none;
      }

      .fa-search {
        // border: solid 1px black;
        border: none;
        color: rgb(20, 87, 169);
        margin: 0;
        width: 40px;
        padding: 0;
        position: relative;
        // background-color: rgb(246, 250, 242);
        padding: 4px;
        &:hover {
          color: rgb(169, 20, 132);
          cursor: pointer;
        }
        &:active {
          color: rgb(102, 9, 79);
          cursor: pointer;
        }
      }
    }
    //
    .account {
      position: relative;
      height: 100%;
      // background-color: rgb(34, 167, 7);
      display: flex;
      align-items: center;
      justify-content: space-between;

      i {
        font-size: 20px;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      .fa-bars {
        display: none;
      }

      .fa-user {
        // right: 10px;
        // margin-right: 10px;
      }

      .fa-heart {
        margin: 0 10px;
      }
    }
  }

  &__nav {
    list-style-type: none;
    background-color: rgba(211, 211, 211, 0.692);
    margin: 0;
    // height: 100px;
    position: fixed;
    width: 100vw;
    box-sizing: border-box;

    display: flex;
    justify-content: first baseline;
    flex-wrap: wrap;
    padding: 4px 10%;
    margin-bottom: 20px;

    li {
      // float: left;
      // background-color: yellow;
      a {
        // background-color: rgba(230, 230, 230, 0.404);
        text-align: center;
        color: rgb(97, 2, 187);
        text-decoration: none;
        cursor: pointer;
        text-transform: capitalize;
        padding: 5px 20px 5px 0;

        &:hover {
          // background-color: rgba(255, 255, 255, 0.157);
          color: rgb(0, 0, 0);
        }
      }
    }
  }

  .v-enter-to {
    height: 50px;
  }
  .v-enter-active {
    transition: all 0.5s ease-in;
  }
  .v-enter-from {
    height: 80px;
  }

  //

  //mobile phone

  @media (max-width: 500px) {
    .fa-bars {
      position: relative;
      margin-left: 10px;
    }
    .header {
      &__titles {
        padding: 0 5%;
      }

      &__nav {
        display: none;
      }

      &__account {
        display: flex;
        align-items: center;

        .fa-shopping-cart {
          margin: 10px;
        }
      }
    }
    .account {
      margin: 5px;
      .fa-user,
      .fa-heart {
        display: none;
      }
      .fa-bars {
        display: inline;
        // background-color: red;
      }

      &__promo {
        p {
          font-size: 10px;
        }
      }

      ul {
        // display: none;
        color: green;
      }
    }
    .search {
      display: none;
    }
  }

  // tablet
  @media (min-width: 502px) and (max-width: 768px) {
    .fa-bars {
      position: relative;
      margin-left: 10px;
    }
    .header {
      &__titles {
        padding: 0 5%;
      }

      &__nav {
        display: none;
      }

      &__account {
        display: flex;
        align-items: center;

        .fa-shopping-cart {
          margin: 10px;
        }
      }
    }
    .account {
      margin: 5px;
      .fa-user,
      .fa-heart {
        display: none;
      }
      .fa-bars {
        display: inline;
        // background-color: red;
      }

      &__promo {
        p {
          font-size: 10px;
        }
      }

      ul {
        // display: none;
        color: green;
      }
    }
    .search {
      display: none;
    }
  }

  @keyframes inputTransit {
    0% {
      width: 250px;
    }
    100% {
      width: 300px;
    }
  }

  @keyframes inputTransitx {
    0% {
      width: 300px;
    }
    100% {
      width: 250px;
    }
  }

  @keyframes navTransit {
    0% {
      height: 50px;
    }
    100% {
      height: 100px;
    }
  }

  @keyframes navTransitx {
    0% {
      height: 100px;
    }
    100% {
      height: 50px;
    }
  }
}
</style>
