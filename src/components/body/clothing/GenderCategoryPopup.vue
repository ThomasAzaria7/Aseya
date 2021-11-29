<template>
  <div>
    <div class="backdrop"></div>
    <div class="genderCategory">
      <div @click="toggle('woman')">
        <h2>Womans</h2>
      </div>
      <div @click="toggle('men')">
        <h2>Mens</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["navigate"],
  data() {
    return {};
  },

  methods: {
    toggle(val) {
      this.$emit("navigate", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.genderCategory {
  display: flex;
  position: relative;
  padding: 10%;
  background-size: cover;
  gap: 10px;
  background-image: url("https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.671);
    backdrop-filter: blur(2px);
  }
  div {
    height: 300px;
    background-color: black;
    flex: 0 1 50%;
    justify-content: space-between;
    position: relative;

    display: flex;
    // justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 0.6rem rgba(255, 255, 255, 0.411);
    cursor: pointer;
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
 