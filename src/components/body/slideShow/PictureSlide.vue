<template>
  <div class="slideContainer">
    <transition name="slider" mode="out-in">
      <div v-if="show" class="imageBox">
        <img :src="slideObject[index].img" alt />
        <div :class="[slideObject[index].style]">
          <h2>{{ slideObject[index].text }}</h2>

          <button v-if="slideObject[index].buttonLink">
            <router-link :to="slideObject[index].buttonLink ">subscribe</router-link>
          </button>
        </div>
        <div class="icons">
          <i :class="{icon:index == 0}" @click="changeSlide(0)" class="far fa-circle"></i>
          <i :class="{icon:index == 1}" @click="changeSlide(1)" class="far fa-circle"></i>
          <i :class="{icon:index == 2}" @click="changeSlide(2)" class="far fa-circle"></i>
          <i :class="{icon:index == 3}" @click="changeSlide(3)" class="far fa-circle"></i>
          <i :class="{icon:index == 4}" @click="changeSlide(4)" class="far fa-circle"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideObject: [
        {
          img:
            "https://images.pexels.com/photos/1086711/pexels-photo-1086711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          style: "left",
          text: "ASEYEA ONLINE MARKETPLACE",
          subtext: "onsale",
          price: "29.95",
          buttonLink: "/my-account/subscription"
        },
        {
          img:
            "https://static.wixstatic.com/media/4663cc_f582e6e817454340af4104c4ebf82547~mv2.jpg/v1/fill/w_749,h_482,al_c,q_85/4663cc_f582e6e817454340af4104c4ebf82547~mv2.webp",
          style: "center",
          text: "STUNNING ITEMS ON STOCK",
          subtext: "",
          price: "",
          buttonLink: ""
        },
        {
          img:
            "https://images.pexels.com/photos/1051744/pexels-photo-1051744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          style: "center",
          text: "Subscribe to sell with us",
          subtext: "",
          price: "",
          buttonLink: "/my-account/subscription"
        },
        {
          img:
            "https://static.wixstatic.com/media/4663cc_2bf0c8c1239e431a85aaf17dda4ea178~mv2.jpg/v1/fill/w_800,h_514,al_c,q_85/4663cc_2bf0c8c1239e431a85aaf17dda4ea178~mv2.webp",
          style: "right",
          text: "NEWYEAR SALE 60% OFF RETAIL PRICE",
          subtext: "",
          price: "",
          buttonLink: ""
        },
        {
          img:
            "https://static.wixstatic.com/media/11062b_fb938874048540bd8ca1408c4783c7fe~mv2.jpg/v1/fill/w_1225,h_644,al_c,q_85,usm_0.66_1.00_0.01/11062b_fb938874048540bd8ca1408c4783c7fe~mv2.webp",
          style: "center",
          text: " Application in DEVELOPMENT",
          subtext: "",
          price: "",
          buttonLink: ""
        }
      ],

      index: 0,
      show: true
    };
  },
  mounted() {
    setInterval(() => {
      this.show = false;

      if (this.index < 4) {
        this.index++;
      } else {
        this.index = 0;
      }
      setTimeout(() => {
        this.show = true;
      }, 10);
    }, 10000);
  },
  methods: {
    changeSlide(x) {
      this.index = x;
    }
  }
};
</script>

<style lang="scss" scoped>
// .slider-enter-active,
// .slider-leave-active {
//   transition: opacity 0.5s;
// }
// .slider-enter, .slider-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
.slider-enter-from {
  opacity: 0.7;
  // transform: ;
  // filter: blur(0px) grayscale(0);
  background: black;
  transform: perspective(5em);
  // transform: scale(0.7);
  // transform: translateY(100vw);
}
.slider-enter-active {
  transition: all 0.3s ease-in;
}
.slider-leave-to {
  opacity: 0.7;
  filter: blur(5px) grayscale(1);

  background-color: black;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.452);
  }

  // transform: translateY(-100vw);
}

.slider-leave-active {
  transition: all 0.5s ease-out;
}

.icon {
  background-color: white;
  border-radius: 50%;
}

.slideContainer {
  position: relative;
  height: 100%;

  box-sizing: border-box;
  .imageBox {
    height: 100%;
    position: relative;

    .icons {
      position: absolute;
      top: 95%;
      display: flex;
      justify-content: center;
      gap: 10px;
      left: 50%;
      transform: translateX(-50%);
      i {
        color: white;
        font-size: 14px;

        &:hover {
          background-color: white;
          border-radius: 50%;
        }
      }
    }
    &::before {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      // background-color: rgba(206, 6, 212, 0.233);
      background-color: rgba(102, 0, 197, 0.15);
    }
    //   width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    //dynamic styles
    .left {
      h2 {
        position: absolute;
        top: 10%;
        left: 10%;
        color: rgb(230, 34, 197);
        margin-left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 0px;
        font-size: 3rem;
        width: 30vw;
      }
      button {
        position: absolute;
        top: 45%;
        left: 10%;
        background-color: rgba(255, 255, 255, 0.623);
        // transform: translate(-50%, -50%);
        padding: 5px 10px;
        color: rgb(0, 0, 0);
        font-size: 2rem;
        &:hover {
          background-color: rgb(255, 255, 255);
        }
        a {
          text-decoration: none;
        }
      }
    }
    .center {
      h2 {
        position: absolute;
        top: 35%;
        left: 50%;
        background-color: rgba(0, 0, 0, 0.623);
        transform: translate(-50%, -50%);
        padding: 10px 30px;
        color: rgb(255, 255, 255);
        font-size: 3rem;
      }
      button {
        position: absolute;
        top: 60%;
        left: 50%;
        background-color: rgba(255, 255, 255, 0.623);
        transform: translate(-50%, -50%);
        padding: 5px 10px;
        color: rgb(0, 0, 0);
        font-size: 2rem;
        a {
          text-decoration: none;
        }
      }
    }
    .right {
      h2 {
        position: absolute;
        top: 10%;
        right: 10%;
        color: rgb(48, 5, 146);
        background-color: rgba(0, 0, 0, 0.623);
        font-size: 3rem;
        width: 30vw;
      }
    }
  }
}
</style>