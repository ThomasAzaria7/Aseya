<template>
  <div class="header">
    <div class="header__promo">
      <p>Free Shipping for orders over $50 | Aus. wide</p>
    </div>
    <div class="header__titles" :class="slideActive ? 'full' : ' short'">
      <div class="logo">
        <h1><router-link to="/">Aseya</router-link></h1>
      </div>
      <div class="search">
        <select name="Category" id="">
          <option value="">category</option>
          <option value="">clothing</option>
          <option value="">clothing</option>
        </select>
        <input type="text" />
        <i class="fas fa-search"></i>
      </div>
      <div class="account">
        <router-link to="/my-account">
          <i class="fas fa-user"></i>
        </router-link>
        <router-link to="/my-favorites">
          <i class="far fa-heart"> (0)</i>
        </router-link>
        <router-link to="/my-cart">
          <i class="fas fa-shopping-cart"> (0)</i>
        </router-link>
      </div>
    </div>
    <ul class="header__nav" v-if="slideActive">
      <li>
        <router-link to="/">home</router-link>
      </li>
      <li>
        <router-link to="/store">store</router-link>
      </li>
      <li>
        <a >sale</a>
      </li>
      <li>
        <a>contact</a>
      </li>
      <li>
        <a>find us</a>
      </li>
      <li>
        <a>sell with us</a>
      </li>
      <li>
        <a>market</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideActive: false,
    };
  },

  created: function () {
    window.addEventListener("scroll", this.handleScroll);
  },

  computed: {},
  methods: {
    toggleSlide() {
      this.slideActive = !this.slideActive;
    },
    handleScroll() {
      let num = window.scrollY;
      // console.log("scrollYposition", num);

      if (num === 0) {
        this.slideActive = true;
      } else if (num > 100) {
        this.slideActive = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.short {
  // height: 50px;
  animation: navTransitx 0.3s ease-in forwards;
}

.full {
  animation: navTransit 0.2s ease-in forwards;
}

.header {
  position: sticky;
  top: 0;
  z-index: 1;
  &__promo {
    margin: 0;
    p {
      margin: 0;
      text-align: center;
      background-color: rgba(137, 43, 226, 0.582);
      color: white;
      padding: 2px 0;
      letter-spacing: 5px;
    }
  }
  &__titles {
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    position: relative;
    // height: 80px;
    background-color: #eeeeee;

    .logo {
      position: relative;
      & > * {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }

      h1 {
        text-transform: uppercase;
        margin: 0;
        padding: 5px 0px;

        a {
          text-decoration: none;
          color: inherit;
          padding: 0;
          margin: 0;
        }
      }
    }

    //
    .search {
      position: relative;
      box-sizing: border-box;

      & > * {
        padding: 5px 10px;
        margin: 0 2px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        box-sizing: border-box;
      }

      select {
        border: solid 1px rgba(0, 0, 0, 0.514);
      }

      input {
        border: solid 1px black;
        box-sizing: border-box;

        // animation: inputTransit 1s ease-in-out reverse;

        width: 200px;
        &:focus {
          animation: inputTransit 0.5s ease-in-out forwards;
        }
      }

      .fa-search {
        border: solid 1px black;
      }
    }
    //
    .account {
      position: relative;

      a {
        text-decoration: none;
        color: inherit;
      }

      & > * {
        position: relative;
        top: 40%;
        transform: translateY(-50%);
        font-size: 20px;
        margin: 0;
      }

      .fa-user {
        // right: 10px;
        // margin-right: 10px;
      }

      .fa-heart {
        margin: 0 10px;
      }
    }
  }

  &__nav {
    list-style-type: none;
    background-color: rgba(41, 41, 41, 0.811);
    margin: 0;
    // height: 100px;
    position: fixed;
    width: 100%;

    display: flex;
    justify-content: center;

    li {
      // float: left;
      padding: 5px 2px;
      a {
        // background-color: rgba(230, 230, 230, 0.404);
        color: white;
        padding: 5px 20px;
        text-decoration: none;
        cursor: pointer;
        text-transform: capitalize;

        &:hover {
          background-color: rgba(255, 255, 255, 0.157);
          color: rgb(255, 255, 255);
        }
      }
    }
  }

  .v-enter-to {
    height: 50px;
  }
  .v-enter-active {
    transition: all 0.5s ease-in;
  }
  .v-enter-from {
    height: 80px;
  }

  @keyframes inputTransit {
    0% {
      width: 200px;
    }
    100% {
      width: 400px;
    }
  }

  @keyframes navTransit {
    0% {
      height: 50px;
    }
    100% {
      height: 100px;
    }
  }

  @keyframes navTransitx {
    0% {
      height: 100px;
    }
    100% {
      height: 50px;
    }
  }
}
</style>
