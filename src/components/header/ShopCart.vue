<template>
  <div class="cartContainer">
    <div class="cartContainer__items">
      <h2>My Cart</h2>
    </div>
    <div class="cartContainer__payments">
      <h2>Order Summary</h2>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cartContainer {
  padding: 3% 10%;
  top: 10px;
  gap: 20px;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  h2 {
    background-color: rgba(253, 255, 127, 0.37);
    padding: 5px;
    margin: 0;
  }
  &__items {
    background-color: rgba(240, 240, 240, 0.726);
    flex: 0 0 60%;
    box-sizing: border-box;
  }
  &__payments {
    background-color: rgba(217, 219, 219, 0.308);
    flex: 0 0 40%;
    box-sizing: border-box;
  }
}
</style>
