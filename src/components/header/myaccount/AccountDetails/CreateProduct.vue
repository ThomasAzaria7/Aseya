<template>
  <div class="createProductContainer">
    <!-- <h2>add a new product to store</h2> -->

    <form @submit.prevent>
      <div class="formControl">
        <input placeholder="product name" type="text" v-model="name" />
        <input placeholder="short description" type="text" />
        <textarea placeholder="describe your product" name id rows="10"></textarea>
        <input type="number" min="0" value="0.00" />
        <input type="file" />
        <p>sort your product</p>
        <select v-model="item">
          <option value="Category" selected hidden>category</option>
          <option value="clothing">clothing</option>
          <option value="electronics">electronics</option>
          <option value="food">food</option>
          <option value="miscellaneous">miscellaneous</option>
          <option value="office">office</option>
        </select>

        <select class="clothingSubCat">
          <option value="category" selected disabled hidden>shirt</option>
          <option value="jeans">jeans</option>
          <option value="pants">pants</option>
          <option value="accessories">accessories</option>
          <option value="shoes">shoes</option>
          <option value="jumpers">jumpers</option>
        </select>
      </div>

      <button @click="formData">submit</button>
    </form>

    <div class="preview"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: "",
      name: ""
    };
  },
  computed: {
    myformData() {
      return console.log(this.item);
    }
  },
  methods: {
    formData() {
      console.log(this.item);
      console.log(this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.createProductContainer {
  display: grid;
  grid-template-columns: auto 50%;
  padding: 2% 0;
}
.formControl {
  background-color: white;
  padding: 5px;
  input {
    width: 100%;
    box-sizing: border-box;
    padding: 5px 10px;
    margin: 5px 0;
  }
  textarea {
    width: 100%;
    margin: 5px 0;
    padding: 5px 10px;
    box-sizing: border-box;
  }
  select {
    width: 100%;
    margin: 5px 0;
    padding: 5px 10px;
    box-sizing: border-box;
  }
}
</style>