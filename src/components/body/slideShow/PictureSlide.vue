<template>
  <div class="slideContainer">
    <div class="imageBox">
      <img :src="slideObject[index].img" alt />
      <div :class="[slideObject[index].style]">
        <h2>{{ slideObject[index].text }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideObject: [
        {
          img: "https://static.wixstatic.com/media/11062b_310e55b9b2c1408692560493e8049629~mv2.jpg/v1/crop/x_0,y_553,w_3000,h_894/fill/w_1213,h_361,al_c,q_85,usm_0.66_1.00_0.01/African-Textiles.webp",
          style: "left",
          text: "ASEYEA ONLINE MARKETPLACE",
          subtext: "onsale",
          price: "29.95",
          buttonLink: "store",
        },
        {
          img: "https://static.wixstatic.com/media/4663cc_f582e6e817454340af4104c4ebf82547~mv2.jpg/v1/fill/w_749,h_482,al_c,q_85/4663cc_f582e6e817454340af4104c4ebf82547~mv2.webp",
          style: "center",
          text: "STUNNING ITEMS ON STOCK",
          subtext: "",
          price: "",
          buttonLink: "",
        },
        {
          img: "https://static.wixstatic.com/media/4663cc_2bf0c8c1239e431a85aaf17dda4ea178~mv2.jpg/v1/fill/w_800,h_514,al_c,q_85/4663cc_2bf0c8c1239e431a85aaf17dda4ea178~mv2.webp",
          style: "right",
          text: "NEWYEAR SALE 60% OFF RETAIL PRICE",
          subtext: "",
          price: "",
          buttonLink: "",
        },
        {
          img: "https://static.wixstatic.com/media/11062b_fb938874048540bd8ca1408c4783c7fe~mv2.jpg/v1/fill/w_1225,h_644,al_c,q_85,usm_0.66_1.00_0.01/11062b_fb938874048540bd8ca1408c4783c7fe~mv2.webp",
          style: "center",
          text: "my fan",
          subtext: "",
          price: "",
          buttonLink: "",
        },
        {
          img: "https://static.wixstatic.com/media/4663cc_230c0592eaca402c9736cd621a9c7ea2~mv2.jpg/v1/fill/w_693,h_392,al_c,q_80/4663cc_230c0592eaca402c9736cd621a9c7ea2~mv2.webp",
          style: "center",
          text: "my fan",
          subtext: "",
          price: "",
          buttonLink: "",
        },
      ],

      index: 0,
    };
  },
  mounted() {
    setInterval(() => {
      if (this.index < 4) {
        this.index++;
      } else {
        this.index = 0;
      }
    }, 5000);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.slideContainer {
  position: relative;
  height: 100%;

  box-sizing: border-box;
  .imageBox {
    height: 100%;
    position: relative;
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
        color: rgb(49, 194, 12);
        background-color: rgba(0, 0, 0, 0.472);
        padding: 10px 30px;
        font-size: 3rem;
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
        color: rgb(194, 10, 185);
        font-size: 3rem;
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
      }
    }
  }
}
</style>