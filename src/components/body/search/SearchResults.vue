<template>
  <div class="searchContainer">
    <!-- <ul class="nav">
      <li>
        <a>Marketplace</a> /
        <a href>home</a>
      </li>
    </ul>-->

    <div class="innerContainer">
      <!-- <ul class="sideNav">
        <li>
          <a href>shipping methods</a>
        </li>
        <li>
          <a href>shipping methods</a>
        </li>
        <li>
          <a href>shipping methods</a>
        </li>
        <li>
          <a href>shipping methods</a>
        </li>
        <li>
          <a href>shipping methods</a>
        </li>
        <li>
          <a href>shipping methods</a>
        </li>
      </ul>-->
      <!-- <h1>my search</h1> -->
      <div class="outlet">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  computed: {},

  methods: {}
};
</script>


<style lang="scss" scoped>
.searchContainer {
  // display: grid
  position: relative;
  height: 100vh;
  padding: 50px 10%;
  background-color: #eeeeee;

  .innerContainer {
    display: flex;
    position: relative;
    margin-top: 20px;
    gap: 50px;

    .sideNav {
      position: relative;
      list-style-type: none;
      margin: 0;
      padding: 0;
      background-color: rgba(0, 0, 0, 0.226);
      padding: 10px;
      width: 300px;
    }

    .outlet {
      //   background-color: ;
    }
  }

  h1 {
    position: relative;
    margin: 0;
  }

  .nav {
    position: relative;

    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
</style>