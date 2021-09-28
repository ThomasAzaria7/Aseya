<template>
  <div class="shopContainer">
    <div class="shopContainer__itemBox" v-for="item in data" :key="item.code">
      <router-link :to="'/store/'+ item.code">
        <div class="imageBox">
          <img :src="item.imgLink" alt />
        </div>
      </router-link>
      <div class="textDescription">
        <h2>{{ item.name }}</h2>
        <p>${{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from "./data.js";
export default {
  data() {
    return {
      data: data
    };
  },
  methods: {
    myData() {},
    methods: {},
    created() {
      console.log("hi");
      // console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.shopContainer {
  padding: 2% 10%;
  display: flex;
  // top: 10px;
  position: relative;
  // flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  z-index: 0;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  // gap: 10px 0;
  // height: 400px;

  &__itemBox {
    border: 1px solid rgba(0, 0, 0, 0.192);
    // flex: 0 0 25%;
    margin: 5px;
    box-sizing: border-box;
    padding: 5px;

    .imageBox {
      height: 300px;

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
</style>
