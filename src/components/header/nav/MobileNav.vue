<template>
  <div v-if="cal && show" class="sideNav">
    <ul class="sideNav__nav">
      <li>
        <router-link @click="close()" to="/">Home</router-link>
        <img
          src="https://cdn-icons.flaticon.com/png/512/2626/premium/2626863.png?token=exp=1645287625~hmac=f233bde134de59af20224215439bdfd4"
          alt
        />
      </li>
      <li>
        <router-link @click="close()" to="/marketplace">marketplace</router-link>
        <img
          src="https://cdn-icons.flaticon.com/png/512/2981/premium/2981011.png?token=exp=1645287946~hmac=2847542ac3eb536022cc4ec974f7fa58"
          alt
        />
      </li>
      <li>
        <router-link @click="close" to="/clothing">Clothing</router-link>
        <img
          src="https://cdn-icons.flaticon.com/png/512/2357/premium/2357063.png?token=exp=1645287998~hmac=0fc2266a2d7d33911762d6801a8f08cf"
          alt
        />
      </li>
      <!-- <li> -->
      <!-- <router-link @click="close" to="/store">store</router-link>
      </li>
      <li>
      <router-link @click="close" to="/store">store</router-link>-->
      <!-- </li> -->
      <li>
        <router-link @click="close" to="/my-account/authentication">Admin</router-link>
        <img
          src="https://cdn-icons.flaticon.com/png/512/6049/premium/6049754.png?token=exp=1645288042~hmac=a9b0e1521a82e15e9a5bf3674ce4b99e"
          alt
        />
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
      show: true
    };
  },

  computed: {
    cal() {
      return this.toggleMenu;
    }
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
    }
  }
};
</script>

<style scoped lang="scss">
.sideNav {
  background-color: rgba(11, 17, 8, 0.973);
  margin: 0;
  padding: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  right: 0;
  // background-image: url("https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;

  &__nav {
    margin: 0;
    padding: 0px 0;
    list-style-type: none;
    margin-left: 40%;
    background-color: white;
    height: 100vh;

    img {
      width: 50px;
    }
    .fa-user-circle {
      font-size: 50px;
    }

    li {
      padding: 10px 30px;
      margin: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 2px rgba(0, 0, 0, 0.411);
      a {
        text-decoration: none;
        font-size: 20px;
      }
    }
  }
}
</style>