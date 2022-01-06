<template>
  <div class="addContainer">
    <!-- <router-link to="/clothing/woman">woman</router-link> -->
    <div class="formControl">
      <input type="text" placeholder="add item name" v-model="itemName" />
      <input type="text" placeholder="add item image url" v-model="itemPic" />
      <input type="text" placeholder="price tag" v-model="price" />
      <textarea rows="10" v-model="description"></textarea>
      <!--  -->
      <br />
      <div class="colorChoice">
        <input type="text" placeholder="add color choices" v-model="color" />
        <button @click="addColor(color)">add</button>
      </div>
      <div class="typeChoice">
        <input type="text" placeholder="add product types" v-model="type" />
        <button @click="addTypes(type)">add</button>
      </div>
      <div class="sizeChoice">
        <input type="text" placeholder="add product sizes" v-model="size" />
        <button @click="addSizes(size)">add</button>
      </div>
      <!--  -->
      <div class="categorySelector">
        <li v-for="item in categoriesList" :key="item">
          <a @click="selectCategory(item)">{{item}}</a>
        </li>
      </div>
    </div>

    <div class="preview">
      <h2>{{itemName}}</h2>

      <div v-if="itemPic" class="diplayImage">
        <img :src="itemPic" alt />
      </div>

      <div class="priceCost">
        <h4>
          <span>my price ${{price}}</span>
          <span>tranaction Fee {{(price * 0.027 + 0.3).toFixed(2)}}</span>
          <span>final price $ {{(price - (price * 0.027 +0.3)).toFixed(2)}}</span>
        </h4>
        <h4></h4>
        <h4></h4>
      </div>

      <div class="selectionOutput">
        <select>
          <option value>select your color</option>
          <option v-for="item in selectedColors" :key="item">{{item}}</option>
        </select>
        <select>
          <option value>select your type</option>
          <option v-for="item in selectedTypes" :key="item">{{item}}</option>
        </select>
        <select>
          <option value>select your Size</option>
          <option v-for="item in selectedSizes" :key="item">{{item}}</option>
        </select>
      </div>
      <div class="categoryOutput">
        <p v-for="categ in selectedCat" :key="categ">{{categ}}</p>
      </div>
      <button @click="addProduct">add item</button>
    </div>
  </div>
</template>;


<script>
export default {
  data() {
    return {
      //adding
      itemName: "",
      itemPic: "",
      description: "",
      color: "",
      size: "",
      type: "",
      price: "",
      categoriesList: [
        "cloth",
        "home",
        "Health, Fitness & Nutrition",
        "Crafts, Hobbies & Home",
        "Clothing, Shoes & Accessories",
        "Home Improvement",
        "Cookbooks, Food & Wine"
      ],

      // preview
      selectedCat: [],
      selectedColors: [],
      selectedTypes: [],
      selectedSizes: []

      // selectedTypes: [],

      //
    };
  },
  computed: {
    getUser() {
      return this.$store.getters["UserState/getAuthState"]; //  get total cart item priice
    }
  },
  methods: {
    makeid(length) {
      //random number generator funtion
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    addProduct() {
      const uid = this.getUser.uid;
      console.log(uid);

      const code = this.makeid(7); // generate a 7 digit random number

      const product = {
        name: this.itemName,
        imgLink: this.itemPic,
        altImages: [""],
        description: this.description,
        price: this.price,
        cost: this.price,
        exchangePrice: this.price,
        quantity: 1,
        itemDetail: {
          color: this.selectedColors,
          type: this.selectedTypes,
          size: this.selectedSizes
        },
        category: this.selectedCat,
        code: code,
        sellerID: uid
      };

      this.$store.dispatch("items/addNewItem", product);
    },
    selectCategory(item) {
      this.selectedCat.push(item);
    },
    addColor(color) {
      console.log(color);
      console.log(this.selectedColors);

      this.selectedColors.push(this.color);
      this.color = "";
    },
    addTypes(type) {
      this.selectedTypes.push(type);
      this.type = "";
    },
    addSizes(size) {
      this.selectedSizes.push(size);
      this.size = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.addContainer {
  min-height: 100vh;
  padding: 50px 10%;
  display: flex;

  .formControl {
    width: 100%;
    flex: 0 1 50%;
    padding: 10px;
    background-color: gray;
    input {
      box-sizing: border-box;
      width: 100%;
      padding: 5px;
      margin: 2px 0;
    }
    textarea {
      box-sizing: border-box;
      width: 100%;
      padding: 5px;
      margin: 2px 0;
      height: 100px;
    }
    .categorySelector {
      position: relative;
      top: 20px;
      li {
        list-style-type: none;
        background-color: white;
        margin: 2px;
        padding: 2px 10px;
        display: inline-block;
        cursor: pointer;
        a {
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.699);
        }
      }
    }
  }
  .preview {
    background-color: rgba(127, 255, 212, 0.493);
    flex: 0 1 50%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .diplayImage {
      height: 400px;
      width: 400px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .priceCost {
      h4 {
        span {
          display: block;
        }
      }
    }
    .categoryOutput {
      display: flex;
      justify-content: center;
      margin: 10px;
      flex-wrap: wrap;
      p {
        margin: 5px;
        background-color: white;
        margin: 2px;
        padding: 2px 10px;
      }
    }
    h2 {
      margin: 0;
      background-color: white;
      display: block;
    }
  }
}
</style>