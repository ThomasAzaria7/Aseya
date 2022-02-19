<template>
  <div class="previewContainer">
    <div class="loading" v-if="!previewItem">
      <div class="lds-hourglass"></div>
    </div>
    <section v-if="previewItem" class="itemDisplay">
      <div>
        <div class="itemImgageBox">
          <img :src="displayPic" alt />
        </div>
        <div class="itemImgageBox__altImages">
          <div v-for="item in altImages" :key="item">
            <img @click="changeDisplayPic(item) " :src="item" alt />
          </div>
        </div>
      </div>
      <div class="selectionBox">
        <div>
          <!-- <br /> -->
          <h2 class="title">{{ previewItem.name }}</h2>
          <!-- <hr /> -->
          <p>{{ previewItem.description }}</p>
          <p class="price">
            $ {{ previewItem.exchangePrice}}
            <span style="font-size:16px">AUD</span>
          </p>
        </div>

        <!--  -->
        <div class="formControl">
          <div v-if="typeArr">
            <label for>Select your Style</label>
            <select v-model="type">
              <option selected disabled hidden>select</option>
              <option v-for="item in typeArr" :key="item" :value="item">{{item}}</option>
            </select>
          </div>
          <div v-if="colorArr">
            <label for>Select your color</label>
            <select v-model="color">
              <option selected disabled hidden>select</option>
              <option v-for="item in colorArr" :key="item" :value="item">{{item}}</option>
            </select>
          </div>
          <div v-if="sizeArr">
            <label for>Select your size</label>
            <select v-model="size">
              <option selected disabled hidden>select</option>
              <option v-for="item in sizeArr" :key="item" :value="item">{{item}}</option>
            </select>
          </div>
        </div>
        <!--  -->
        <div class="formControl">
          <div>
            <label for>Quantity</label>
            <input type="number" v-model="quantity" />
          </div>
        </div>
        <br />
        <!--  -->
        <div class="buttons formControl">
          <div>
            <button @click="addItemToCart">Add to cart</button>
            <i @click="addToFavList" class="fas fa-heart">
              <span>fav</span>
            </i>
          </div>
        </div>
        <!-- <p class="helpText" v-if="checkIfItemExists">
          <span style="color:red; font-size:20px">*</span> This item exists in your cart, please change Quantity Instead.
        </p>-->

        <br />
      </div>
    </section>

    <section class="itemDescription">
      <br />
      <br />
      <nav>
        <ul>
          <li @click="descriptionStat('desc')" :class="{active: slectionTab == 'desc'}">
            <a>Product Dsescription</a>
          </li>
          <li @click="descriptionStat('shipping')" :class="{active: slectionTab == 'shipping'}">
            <a>Shipping and Handling</a>
          </li>
          <li @click="descriptionStat('other')" :class="{active: slectionTab == 'other'}">
            <a>description</a>
          </li>
          <li @click="descriptionStat('review')" :class="{active: slectionTab == 'review'}">
            <a>Reviews</a>
          </li>
        </ul>
      </nav>

      <div class="itemDescription__contents">
        <div class="itemDescription__contents-description">
          <p
            style="padding:20px; width:60%"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis animi culpa voluptatibus eaque nam repudiandae deserunt illo incidunt repellat voluptate, numquam quo temporibus quasi veritatis quis est sed maiores perspiciatis.</p>
        </div>
        <div class="itemDescription__contents-reviews"></div>
      </div>
    </section>
    <!--  -->
    <section class="productReccomendations">
      <h2 style="text-align:center">Similar Products</h2>
      <br />
      <div class="itemsContainer">
        <div class="item" v-for="data in getdata" :key="data">
          <img @click="getPreviewItem(data.code)" :src="data.imgLink" alt />
          <div class="itemDesc">
            <p class="name">
              {{data.name}}
              <!-- <span>${{data.price}} {{getCurrency.type}}</span> -->
            </p>
            <p class="price">
              ${{data.price}}
              <span style="font-size:16px">AUD</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {
      previewItem: null,
      displayPic: null,
      quantity: 1,
      load: false,
      altImages: [
        "https://static.wixstatic.com/media/4663cc_a7be75ad5611477d8ed3a858fabe8617~mv2.png/v1/fill/w_625,h_938,al_c,q_90,usm_0.66_1.00_0.01/4663cc_a7be75ad5611477d8ed3a858fabe8617~mv2.webp",
        "https://static.wixstatic.com/media/4663cc_646e17d9620242ac9ba65edeed2062e6~mv2.png/v1/fill/w_625,h_938,al_c,q_90,usm_0.66_1.00_0.01/4663cc_646e17d9620242ac9ba65edeed2062e6~mv2.webp",
        "https://static.wixstatic.com/media/4663cc_f4d0890f69004da782c60d368f1c652d~mv2_d_3456_5184_s_4_2.jpg/v1/fill/w_489,h_734,al_c,q_80,usm_0.66_1.00_0.01/4663cc_f4d0890f69004da782c60d368f1c652d~mv2_d_3456_5184_s_4_2.webp",
        "https://static.wixstatic.com/media/4663cc_3c0e79bd3f2a498b8070bfb320d84a55~mv2.png/v1/fill/w_625,h_938,al_c,q_90,usm_0.66_1.00_0.01/4663cc_3c0e79bd3f2a498b8070bfb320d84a55~mv2.webp"
      ],

      type: "",
      size: "",
      color: "",
      //
      colorArr: null,
      sizeArr: null,
      typeArr: null,

      slectionTab: "desc" // for selecting different tabs in product descriptions
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");

    this.getPreviewItem();
    // console.log(this.getItemData);
    // this.getPreviewItem();
    // console.log(this.previewItem);
  },
  computed: {
    // getItemData() {
    //   return ;
    // }
    getdata() {
      return this.$store.getters["items/getItems"];
    }
  },
  watch: {
    quantity(newVal, old) {
      console.log("new", newVal, "old", old);
      this.quantity = newVal;
      // this.colorArr;
    }
  },
  methods: {
    descriptionStat(x) {
      console.log(x);

      this.slectionTab = x;
    },
    getPreviewItem(x) {
      let itemCode;

      if (x) {
        itemCode = x;
        this.$router.replace(itemCode);
      }
      setTimeout(() => {
        itemCode = this.$route.params;
        this.$store.dispatch("items/getSelectedProduct", itemCode);
        this.previewItem = this.$store.getters["items/getSelectedItem"];
        this.displayPic = this.previewItem.imgLink;

        this.colorArr = JSON.parse(
          JSON.stringify(this.previewItem.itemDetail.color)
        );
        console.log(this.colorArr[0]);

        //
        try {
          this.previewItem.itemDetail.color[0]
            ? (this.colorArr = this.previewItem.itemDetail.color)
            : null;
          this.previewItem.itemDetail.type[0]
            ? (this.typeArr = this.previewItem.itemDetail.type)
            : null;
          this.previewItem.itemDetail.size[0]
            ? (this.sizeArr = this.previewItem.itemDetail.size)
            : null;
        } catch (error) {
          //
        }
        console.log(this.previewItem.itemDetail.color);
        console.log(this.previewItem);
      }, 2000);
      scroll(0, 0);
    },
    changeDisplayPic(pic) {
      this.displayPic = pic;
    },
    addItemToCart() {
      // value = favCart || shopCart
      const auth = this.$store.getters["UserState/getAuthState"];

      let userUID = null;
      let user = null;

      if (auth) {
        userUID = auth.uid;
        user = "registered";
      } else {
        //
        user = "guest";

        let GuestUID = localStorage.getItem("uid");
        if (!GuestUID) {
          // if user is a guest account
          let result = [];
          let hexRef = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"
          ];

          for (let n = 0; n < 25; n++) {
            result.push(hexRef[Math.floor(Math.random() * 16)]);
          }
          const uid = result.join("");

          // console.log(uid);

          // gen id & store in localStoreage or cookie

          window.localStorage.setItem("uid", uid);
        }

        GuestUID = localStorage.getItem("uid");
        userUID = GuestUID;
        console.log("guest uid", GuestUID);
      }
      // console.log(this.getItemData);

      console.log(this.quantity);

      // console.log("type selected", this.type);
      // console.log("cost of itemsss", this.getItemData.cost);

      //update fields

      this.previewItem.quantity = this.quantity;

      this.previewItem.itemDetail = {
        color: this.color,
        size: this.size,
        type: this.type
      };

      const userData = {
        item: this.previewItem,
        uid: userUID,
        auth: user
      };
      this.$store.dispatch("UserState/putToCart", userData);
    }
  }
};
</script>

<style lang="scss" scoped>
.previewContainer {
  min-height: 100vh;
  background-color: #eeeeee;

  .itemDisplay {
    padding: 50px 10%;
    background-color: rgb(255, 255, 255);
    height: 80vh;
    display: grid;
    grid-template-columns: 50% 50%;

    .itemImgageBox {
      height: 65vh;
      position: relative;
      background-color: rgb(233, 233, 233);

      &__altImages {
        // position: absolute;
        bottom: 0;
        // height: 50px;
        // width: 100%;
        display: flex;
        justify-content: center;
        gap: 5px;
        padding: 20px 0;
        // background-color: rgba(0, 0, 0, 0.274);

        div {
          display: flex;
          width: 50px;
          height: 50px;
        }
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
    .selectionBox {
      width: 100%;
      // flex: 0 0 50%;
      background-color: #ffffff;
      padding: 0 10%;
      box-sizing: border-box;
      border-left: solid 2px rgba(134, 134, 134, 0.075);

      .title {
        margin: 0;
        padding: 0;
        color: #330135;
        background-color: #cfcfcf23;
      }
      p {
        color: #330135;
        font-size: 17px;
      }

      .fa-heart {
        font-size: 30px;
      }

      .formControl {
        // width: 70%;
        margin: 10px 0;
        box-sizing: border-box;
        div {
          display: flex;

          select {
            // width: 100%;
            box-sizing: border-box;
            color: #330135;
            margin: 4px;
          }

          input {
            width: 30%;
            box-sizing: border-box;
            color: #330135;
          }

          label {
            margin: 4px 0;
            padding: 0;
            font-size: 18px;
            color: #330135;
          }

          & > * {
            padding: 2px;
            box-sizing: border-box;
            display: block;
            width: 100%;
          }
        }
      }
      .helpText {
        display: block;
        color: rgb(55, 0, 71);
      }

      .buttons {
        // position: relative;
        cursor: pointer;

        i {
          position: relative;
          top: 50%;
          font-size: 30px;
          color: rgba(255, 0, 0, 0.7);
          span {
            color: black;
            font-size: 17px;
          }

          &:active {
            color: rgba(255, 0, 0, 1);
          }
        }
        button {
          // flex: 0 1 20%;
          background-color: rgba(59, 2, 77, 0.644);
          color: white;
          font-size: 20px;
          cursor: pointer;
        }
      }
    }
  }

  .itemDescription {
    background-color: rgba(255, 255, 255, 0.575);
    height: 90vh;
    // margin: 20px 0;
    position: relative;
    box-sizing: border-box;
    padding: 0px 5%;

    nav {
      ul {
        list-style-type: none;
        display: block;
        overflow: hidden;
        display: flex;
        justify-content: first baseline;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        width: 60%;
        @media (max-width: 500px) {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        li {
          // float: left;
          background-color: rgba(197, 197, 197, 0.26);

          padding: 10px 20px;
          border: solid 1px rgba(0, 0, 0, 0.233);

          a {
            margin: 0;
            padding: 0;
          }
        }
      }
    }
    .active {
      background-color: rgb(255, 255, 255);
      height: 100%;
      border-bottom: solid white 2px;
    }
  }
  .productReccomendations {
    position: relative;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    padding: 2% 10%;

    .itemsContainer {
      display: flex;
      gap: 20px;
      // flex-wrap: wrap;
      .item {
        width: 100px;
        flex: 1 1 15%;
        height: 200px;

        img {
          width: 100%;
          height: 80%;
          object-fit: cover;
        }
      }
    }
    h2 {
      margin: 0;
    }
  }
  //
  /* tablets */
  @media (min-width: 500px) and (max-width: 768px) {
    .itemDisplay {
      padding: 10px 0%;
      // display: flex;
      // flex-direction: column;
      height: 100%;
    }
  }

  /*mobile */
  @media (max-width: 500px) {
    .itemDisplay {
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      height: 100%;

      .itemImgageBox {
        background-color: white;
        padding: 0 5%;
        img {
          object-fit: cover;
        }
      }
      .selectionBox {
        .price {
          font-size: 35px;
          color: black;
        }
      }
    }

    .productReccomendations {
      position: relative;
      // height: 100vh;
      padding: 20px 5%;
      .itemsContainer {
        display: flex;
        flex-wrap: wrap;

        .item {
          flex: 1 1 30%;
          padding: 10px 0;

          .itemDesc {
            display: flex;
            flex-direction: column;
            position: relative;
            p {
              margin: 0;
              padding: 0;
            }
            .name {
              font-size: 14px;
            }
            .price {
              // position: absolute;
              // right: 10px;
              // top: 16px;
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  //end of mobile

  //
  .loading {
    position: relative;
    height: 80vh;
  }
  .lds-hourglass {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
  }
  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid rgb(8, 3, 3);
    border-color: rgb(73, 34, 34) transparent rgb(117, 58, 58) transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
  //
}
</style>