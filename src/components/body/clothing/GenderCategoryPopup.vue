<template>
  <div>
    <div class="backdrop"></div>
    <div class="genderCategory">
      <div>
        <h2>
          <router-link to="woman">Womans</router-link>
        </h2>
      </div>
      <div>
        <h2>Mens</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url("https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
}
.genderCategory {
  display: flex;
  position: relative;
  padding: 10%;
  background-size: cover;
  gap: 10px;

  div {
    height: 300px;
    background-color: black;
    flex: 0 1 50%;
    justify-content: space-between;
    position: relative;

    display: flex;
    // justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 1rem rgba(0, 0, 0, 0.411);
    text-decoration: none;

    h2 {
      font-size: 3rem;
      position: relative;
      left: 5%;
      a {
        text-decoration: none;
        border: none;
        color: black;
      }
    }

    &:nth-child(1) {
      background: rgba(255, 192, 203, 0.9);
      background-image: url("https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
      background-size: cover;
    }
    &:nth-child(2) {
      background: rgba(0, 0, 255, 0.9);
      background-image: url("https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
      background-size: cover;
      color: white;
    }
  }
}
</style>
 