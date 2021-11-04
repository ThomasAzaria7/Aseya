<template>
  <div class="favContainer">
    <div class="favItems">
      <ul v-for="item in shopFavItems" :key="item.code">
        <li>
          <img :src="item.imgLink" alt />
        </li>
        <li>{{ item.name }}</li>
        <div class="price">
          <li>
            <input type="number" value="1" />
          </li>
          <li>$ {{ item.price }}</li>
        </div>
        <li>
          <button @click="addToCart(item.code)">add to cart</button>
        </li>
        <li>
          <i @click="removeItemFromFav(item.code)" class="far fa-times-circle"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import item from "../body/shop/data";
export default {
  data() {
    return {};
  },
  computed: {
    shopFavItems() {
      return this.$store.getters["UserState/refreshFav"]; // get cart items from database
    }
  },
  methods: {
    removeItemFromFav(itemCode) {
      const auth = this.$store.getters["UserState/getAuthState"];
      console.log(auth.uid);

      console.log(itemCode);

      console.log(this.shopFavItems);

      const userData = {
        uid: auth.uid,
        itemId: itemCode
      };

      this.$store.dispatch("UserState/deleteFavItem", userData);
    },
    addToCart(id) {
      let selectedItem = this.shopFavItems.filter(x => {
        console.log(x.code, "id is", id);

        return id === x.code;
      });

      const auth = this.$store.getters["UserState/getAuthState"];
      const userUID = auth.uid;
      const userData = {
        item: selectedItem[0],
        uid: userUID
      };

      console.log(userData);

      console.log("iitem selected", selectedItem);

      this.$store.dispatch("UserState/putToCart", userData);
    }
  }
};
</script>


<style lang="scss" scoped>
.favContainer {
  // height: 100vh;
  padding: 4% 10%;
  background-color: #eeeeee;
  min-height: 100vh;

  .favItems {
    ul {
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 5px;
      &:nth-child(odd) {
        background-color: rgba(248, 190, 235, 0.205);
      }

      .price {
        display: flex;
        flex: 1 0 20%;
        input {
          height: 20px;
          width: 30px;
        }
      }
      li {
        width: 100%;
        img {
          height: 200px;
          width: 200px;
          object-fit: contain;
        }
      }
      &__payments {
        background-color: rgba(217, 219, 219, 0.308);
        flex: 0 1 40%;
        box-sizing: border-box;
      }
    }
  }
}
</style>