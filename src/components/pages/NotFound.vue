<template>
  <div class="notFoundContainer">
    <div class="image">
      <img
        src="https://www.maxpixel.net/static/photo/1x/Attention-404-Panel-Work-Oops-Error-404-Error-3060993.png"
        alt
      />
    </div>
    <div class="desc">
      <h2>page not found</h2>
      <hr />
      <hr />
      <router-link to="/marketplace">return to market place</router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.notFoundContainer {
  min-height: 100vh;
  padding: 5% 10%;
  background-color: #eeeeee;

  display: flex;

  .image {
    flex: 0 0 50%;
    img {
      width: 100%;
      height: 500px;
    }
  }

  .desc {
    padding: 2% 0;
  }

  h2 {
    font-size: 50px;
    margin: 0;
  }
}
</style>