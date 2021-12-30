<template>
  <!-- <h2>add products</h2> -->
  <div class="addProductContainer">
    <div class="addProductContainer__dataBox">data</div>
    <div class="addProductContainer__nav">
      <ul>
        <li>
          <a>add product</a>
        </li>
        <li>
          <a>Create product</a>
        </li>
        <li>
          <a>add product</a>
        </li>
      </ul>
      <div class="navIcons">
        <i class="fab fa-airbnb"></i>
        <i class="fas fa-battery-empty"></i>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
//
.addProductContainer {
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 25px;

  &__dataBox {
    background-color: aquamarine;
    height: 100%;
    flex: 1 1 60%;
  }
  &__nav {
    background-color: brown;
    height: 100%;
    flex: 1 1 20%;
    display: flex;

    ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      margin: 0;
      padding: 0;
      flex: 1 1 75%;
    }

    .navIcons {
      flex: 0 0 35%;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      position: relative;
      padding-top: 50px;
      gap: 30px;
      align-items: center;

      i {
        font-size: 30px;
        color: rgb(0, 0, 0);
      }
    }
  }
}
</style>