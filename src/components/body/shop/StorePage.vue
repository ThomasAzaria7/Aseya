<template>
  <div class="shopContainer">
    <div class="shopContainer__menu">
      <ul>
        <li>
          <a>Family & Lifestyle</a>
        </li>
        <li>
          <a>Health, Fitness & Nutrition</a>
        </li>
        <li>
          <a>Crafts, Hobbies & Home</a>
        </li>
        <li>
          <a>Cookbooks, Food & Wine</a>
        </li>
        <li>
          <a>Clothing, Shoes & Accessories</a>
        </li>
        <li>
          <a>Home Improvement</a>
        </li>
        <li>
          <a>Health, Fitness & Nutrition</a>
        </li>
        <li>
          <a>Crafts, Hobbies & Home</a>
        </li>
        <li>
          <a>Cookbooks, Food & Wine</a>
        </li>
        <li>
          <a>Clothing, Shoes & Accessories</a>
        </li>
        <li>
          <a>Home Improvement</a>
        </li>
      </ul>
    </div>
    <div class="shopContainer__itemBox">
      <!-- <button @click="sendData">senData</button>
      <button @click="myData">getdata</button>-->

      <div class="items" v-for="item in getdata" :key="item.code">
        <router-link :to="'/store/' + item.code">
          <div class="imageBox">
            <img :src="item.imgLink" alt />
          </div>
        </router-link>
        <div class="textDescription">
          <h2>{{ item.name }}</h2>

          <p>${{ item.exchangePrice }} {{currency.type}}</p>
        </div>
      </div>

      <div class="items" v-for="item in storeItems" :key="item.code">
        <router-link :to="'/store/' + item.code">
          <div class="imageBox">
            <img :src="item.imgLink" alt />
          </div>
        </router-link>
        <div class="textDescription">
          <h2>{{ item.name }}</h2>

          <p>${{ item.exchangePrice }} {{currency.type}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "./data.js";
export default {
  data() {
    return {
      data: [{}]
    };
  },
  mounted() {
    // this.data = this.$store.getters["items/shopItems"];
  },
  computed: {
    getdata() {
      return this.$store.getters["items/getItems"];
      // return null;
    },
    currency(currencySelected) {
      console.log(currencySelected);
      return this.$store.getters["items/getCurrencyValue"];
    },

    storeItems() {
      return this.$store.getters["items/getStoreItems"];
    }
  },
  methods: {
    myData() {
      const dataX = this.$store.getters["items/getSelectedItem"];
      console.log(dataX);
      const x = this.$store.getters["items/getItems"];
      console.log(x);

      // console.log();
    },
    sendData() {
      this.$store.dispatch("items/addProductToStore", data);
    },
    created() {
      console.log("hi");
      // console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "./src/sass/main.css";
.shopContainer {
  position: relative;
  padding: 4% 10%;
  top: 10px;

  // width: 100%;
  overflow: hidden;
  background-color: #eeeeee;
  display: grid;
  grid-template-columns: 20% auto;
  gap: 10px;
  // grid-template-columns: repeat(auto-fit, 1fr);

  &__menu {
    background: rgb(245, 243, 243);
    position: sticky;
    top: 100px;
    ul {
      margin: 0;
      list-style-type: none;
      padding: 0;

      li {
        padding: 10px 2%;
        // background-color: aqua;
        a {
          text-decoration: none;
          color: purple;

          &:hover {
            color: green;
          }
        }
      }
    }
  }
  &__itemBox {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 5px;

    .items {
      border: 1px solid rgba(0, 0, 0, 0.192);
      padding: 5px;
      background-color: #fff;
    }

    .imageBox {
      margin: 5px;
      height: 300px;
      box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.432);

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .textDescription {
      padding: 10px 0;
      h2 {
        text-align: center;
        margin: 0;
        font-weight: 100;
      }
      p {
        text-align: center;
        padding: 0 10px;
        margin: 0;
      }
    }
  }
}

// @media (min-width: 768px) and (max-width: 768px) {
// }

//mobile
@media (max-width: 500px) {
  .shopContainer {
    position: relative;
    padding: 5% 2%;
    display: block;

    &__itemBox {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
    .items {
      // display: grid;
      // grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      // display: none;
    }

    &__menu {
      display: none;
    }
  }
}

// tablet
@media (min-width: 502px) and (max-width: 768px) {
  .shopContainer {
    position: relative;
    padding: 5% 5%;
    // background-color: green;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    .items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    &__menu {
      display: none;
    }
  }
}
</style>
