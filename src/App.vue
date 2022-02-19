<template>
  <div>
    <main-nav></main-nav>
    <div class="routerContainer">
      <router-view v-slot="{Component}">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
      <main-footer class="desktopNav"></main-footer>

      <mobile-footer class="mobileFooter"></mobile-footer>
      <!-- <div>{{getAuthData}}</div> -->
    </div>
  </div>
</template>

<script>
import MainFooter from "./components/footer/MainFooter.vue";
// import PictureSlide from './components/body/slideShow/PictureSlide'
import MobileFooter from "./components/footer/MobileFooter";

// import { db } from "./database/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  components: {
    MainFooter,
    MobileFooter
    // PictureSlide
  },
  data() {
    return {
      hide: false,
      userData: {}
    };
  },
  // beforeCreate() {
  //
  // },
  computed: {
    getAuthData() {
      return this.$store.getters["UserState/getAuthState"];
    }
  },
  beforeMount() {},
  mounted() {
    this.$store.dispatch("items/getStoreItems");
    this.$store.dispatch("UserState/callForToken");
    this.$store.dispatch("UserState/retreiveToken", "myToken");

    const auth = getAuth();

    onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        this.$store.dispatch("UserState/authStatus", user);
        this.$store.dispatch("UserState/getFavItems", user.uid);
        this.$store.dispatch("UserState/getCartItems", user.uid);
      } else {
        // User is signed out
        const GuestUID = localStorage.getItem("uid");
        console.log(GuestUID);
        const data = ["guest", GuestUID];
        this.$store.dispatch("UserState/getFavItems", data);
        this.$store.dispatch("UserState/getCartItems", data);
        // ...
      }
    });

    // this.userData = {
    //   item: this.getItemData,
    //   uid: userUID
    // };

    // console.log(db);

    this.$store.dispatch("items/addProductToStore");
  },

  methods: {
    toggleData() {
      this.hide = !this.hide;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap");

// a{
//   font-family: 'Roboto', sans-serif;
// }
// h1{
//   font-family: 'Roboto', sans-serif;
// }
// h2{
//   font-family: 'Roboto', sans-serif;
// }
// p{
//   font-family: 'Roboto', sans-serif;
* {
  font-family: "Roboto", sans-serif;
}
// }
.routerContainer {
  overflow: hidden;
  background-color: #eeeeee;
  // padding-top: 50px;
}

.route-enter-from {
  opacity: 0;
  scale: 0.5;
  transform: translateX(50px);
}
.route-enter-active {
  transition: all 0.2s ease-in-out;
}
.route-leave-to {
  opacity: 1;
  scale: 1;
  transform: translateX(-50px);
}

.route-leave-active {
  transition: all 0.2s ease-out;
}

@media (max-width: 766px) {
  .mobileFooter {
  }

  .desktopNav {
    display: none;
  }
}
/* tablets */
@media (min-width: 768px) and (max-width: 768px) {
}
/* laptops and beyond */
@media (min-width: 769px) {
  .mobileFooter {
    display: none;
  }
}
</style>
