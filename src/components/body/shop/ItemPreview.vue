<template>
  <div class="previewContainer">
    <br />
    <section v-if="getItemData" class="itemDisplay">
      <div class="itemImgageBox">
        <img :src="getItemData.imgLink" alt />
        <div class="itemImgageBox__altImages">
          <div v-for="item in altImages" :key="item">
            <img :src="item" alt />
          </div>
        </div>
      </div>
      <div class="selectionBox">
        <div>
          <br />
          <br />
          <h2>{{ getItemData.name }}</h2>
          <p>{{ getItemData.description }}</p>

          <p>$ {{ getItemData.exchangePrice }} {{getCurrency.type}}</p>
        </div>
        <form @submit.prevent="addItemToCart">
          <div class="formControl">
            <label for>Select your Style</label>
            <select name id>
              <option selected disabled hidden>select</option>
              <option value>D</option>
              <option value>C</option>
              <option value>B</option>
              <option value>A</option>
            </select>
          </div>
          <!--  -->
          <div class="formControl">
            <label for>Quantity</label>
            <input type="number" v-model="quantity" />
          </div>
          <!--  -->
          <div class="buttons">
            <button type="submit">Add to cart</button>
            <i @click="addToFavList" class="fas fa-heart">
              <span>fav</span>
            </i>
          </div>
          <p class="helpText" v-if="checkIfItemExists">
            <span style="color:red; font-size:20px">*</span> This item exists in your cart, please change Quantity Instead.
          </p>
        </form>
        <br />
      </div>
    </section>

    <section class="itemDescription">
      <br />
      <br />
      <nav>
        <ul>
          <li>
            <a>Product Dsescription</a>
          </li>
          <li class="active">
            <a>Shipping and Handling</a>
          </li>
          <li>
            <a>description</a>
          </li>
          <li>
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

    <section class="productReccomendations">
      <h2 style="text-align:center">Similar Products</h2>
      <br />
      <div class="itemsContainer">
        <div class="item" v-for="data in getdata" :key="data">
          <img :src="data.imgLink" alt />
          <p>
            {{data.name}}
            <span>${{data.price}} {{getCurrency.type}}</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // items: "Thomas",
      quantity: 1,
      load: false,
      altImages: [
        "https://static.wixstatic.com/media/4663cc_a7be75ad5611477d8ed3a858fabe8617~mv2.png/v1/fill/w_625,h_938,al_c,q_90,usm_0.66_1.00_0.01/4663cc_a7be75ad5611477d8ed3a858fabe8617~mv2.webp",
        "https://static.wixstatic.com/media/4663cc_646e17d9620242ac9ba65edeed2062e6~mv2.png/v1/fill/w_625,h_938,al_c,q_90,usm_0.66_1.00_0.01/4663cc_646e17d9620242ac9ba65edeed2062e6~mv2.webp",
        "https://static.wixstatic.com/media/4663cc_f4d0890f69004da782c60d368f1c652d~mv2_d_3456_5184_s_4_2.jpg/v1/fill/w_489,h_734,al_c,q_80,usm_0.66_1.00_0.01/4663cc_f4d0890f69004da782c60d368f1c652d~mv2_d_3456_5184_s_4_2.webp",
        "https://static.wixstatic.com/media/4663cc_3c0e79bd3f2a498b8070bfb320d84a55~mv2.png/v1/fill/w_625,h_938,al_c,q_90,usm_0.66_1.00_0.01/4663cc_3c0e79bd3f2a498b8070bfb320d84a55~mv2.webp"
      ]
    };
  },

  created() {
    // this.items = this.$store.getters["items/getItems"];
    // console.log(this.items);
    // console.log(this.$store.getters["items/getItems"][0]);
    // console.log(this.$store.getters["items/getdata"]);
  },
  mounted() {
    const itemCode = this.$route.params;
    if (itemCode) {
      setTimeout(() => {
        this.$store.dispatch("items/getSelectedProduct", itemCode);
      }, 2000);
    }
    this.$store.dispatch("items/getSelectedProduct", itemCode);
  },
  computed: {
    getCurrency() {
      return this.$store.getters["items/getCurrencyValue"];
    },
    getItemData() {
      return this.$store.getters["items/getSelectedItem"];
    },
    checkIfItemExists() {
      return this.$store.getters["UserState/itemExists"]; // get total number of items in fav list
    },
    getdata() {
      return this.$store.getters["items/getItems"];
      // return null;
    }
  },
  watch: {
    checkIfItemExists(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.$store.dispatch("UserState/clearCartExistError");
        }, 5000);
      }
    },

    quantity() {
      this.getItemData.quantity = this.quantity.toString();
    },
    itemCode(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    },
    getItemData(newVal, old) {
      console.log(newVal, "new value");
      console.log(old, "old value");
    }
  },
  methods: {
    addToFavList() {
      const auth = this.$store.getters["UserState/getAuthState"];
      const userUID = auth.uid;
      const userData = {
        item: this.getItemData,
        uid: userUID
      };
      this.$store.dispatch("UserState/putToFav", userData);
      console.log("clickws");
    },
    addItemToCart() {
      // value = favCart|| shopCart
      const auth = this.$store.getters["UserState/getAuthState"];
      const userUID = auth.uid;

      const userData = {
        item: this.getItemData,
        uid: userUID
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
    background-color: rgba(255, 255, 255, 0.637);
    height: 70vh;
    display: grid;
    grid-template-columns: 50% 50%;

    .itemImgageBox {
      height: 70vh;
      position: relative;

      &__altImages {
        position: absolute;
        bottom: 0;
        // height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 5px;
        background-color: rgba(0, 0, 0, 0.274);

        div {
          display: flex;
          width: 50px;
          height: 50px;
        }
        img {
          height: 100%;
          width: 100%;
        }
      }

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .selectionBox {
      width: 100%;
      // flex: 0 0 50%;
      background-color: #eeeeee86;
      padding: 0 10%;
      box-sizing: border-box;
      h2 {
        margin: 0;
      }

      .fa-heart {
        font-size: 30px;
      }

      .formControl {
        width: 100%;
        margin: 10px 0;
        box-sizing: border-box;

        select {
          // width: 100%;
          box-sizing: border-box;
        }

        input {
          width: 10%;
          box-sizing: border-box;
        }

        label {
          margin: 5px 0;
          padding: 0;
        }

        & > * {
          padding: 5px;
          box-sizing: border-box;
          display: block;
          width: 100%;
        }
      }
      .helpText {
        display: block;
        color: rgb(55, 0, 71);
      }

      .buttons {
        display: flex;
        position: relative;
        cursor: pointer;
        gap: 20px;

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
    background-color: rgba(255, 255, 255, 0.938);
    height: 80vh;
    // margin: 20px 0;
    position: relative;
    box-sizing: border-box;
    padding: 0px 10%;

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
    background-color: rgba(255, 255, 255, 0.637);
    padding: 2% 10%;

    .itemsContainer {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      .item {
        width: 300px;
        flex: 1 1 20%;
        height: 300px;

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
}
</style>