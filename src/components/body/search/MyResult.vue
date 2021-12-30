<template>
  <div>
    <p style="margin:0; position:absolute; top:-40px;">
      <strong>Search results for :</strong>
      <i>{{searchQuery}}</i>
    </p>

    <!-- <input type="text" v-model="words" />

    <h2>my word{{words}}</h2>-->

    <div class="results">
      <div class="item" v-for="data in getdata" :key="data">
        <router-link :to="/store/+ data.code ">
          <img :src="data.imgLink" alt />
        </router-link>
        <p>
          {{data.name}}
          <span>${{data.price}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: ""
    };
  },
  computed: {
    searchQuery() {
      return this.$route.params.id;
    },
    getdata() {
      return this.$store.getters["items/getItems"];
      // return null;
    }
  }
};
</script>


<style lang="scss" scoped>
.results {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  .item {
    height: 300px;
    flex: 0 0 18%;

    img {
      width: 100%;
      height: 80%;
      object-fit: cover;
    }
  }
}
</style>