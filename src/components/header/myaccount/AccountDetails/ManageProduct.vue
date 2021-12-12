<template>
  <div class="container">
    <div class="items" v-for="item in getdata" :key="item.code">
      <img :src="item.imgLink" alt />
      <div class="textDescription">
        <h4 style="margin:0">{{ item.name }}</h4>

        <p style="margin:0">${{ item.exchangePrice }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    getdata() {
      return this.$store.getters["items/getItems"];
      // return null;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  flex-wrap: wrap;
  gap: 10px;
  padding: 50px 0;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  .items {
    // flex: 1 1 15%;
    height: 300px;
    img {
      width: 100%;
      height: 80%;
      object-fit: cover;
    }
  }
}
</style>