<template>
  <div v-if="cal && show" class="sideNav">
    <ul class="sideNav__nav">
      <li>
        <router-link @click="close()" to="/">Home</router-link>
      </li>
      <li>
        <router-link @click="close()" to="/store">BestSellers</router-link>
      </li>
      <li>
        <router-link @click="close" to="/clothing">Clothing</router-link>
      </li>
      <li>
        <router-link @click="close" to="/store">store</router-link>
      </li>
      <li>
        <router-link @click="close" to="/store">store</router-link>
      </li>
      <li>
        <router-link @click="close" to="/my-account/authentication">
          <i class="far fa-user-circle"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  props: ["toggleMenu"],
  emits: ["close"],
  data() {
    return {
      show: true,
    };
  },

  computed: {
    cal() {
      return this.toggleMenu;
    },
  },

  created() {
    // alert(this.toggleNav);
    // console.log(this.toggleMenu);
  },

  watch() {
    // console.log(this.menuOption);
  },

  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
.sideNav {
  background-color: rgba(11, 17, 8, 0.973);
  margin: 0;
  padding: 0;
  position: fixed;
  height: 90vh;
  width: 100vw;
  z-index: 1;
  right: 0;
  // background-image: url("https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;

  &__nav {
    margin: 0;
    padding: 50px 0;
    list-style-type: none;
    margin-left: 40%;

    .fa-user-circle {
      font-size: 50px;
    }

    li {
      padding: 10px 30px;
      background-color: rgba(255, 255, 255, 0.856);
      margin: 5px;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>