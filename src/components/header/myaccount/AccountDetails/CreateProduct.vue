<template>
  <div class="createProductContainer">
    <!-- <h2>add a new product to store</h2> -->

    <form @submit.prevent="formData">
      <div class="formControl">
        <input placeholder="product name" type="text" v-model="name" />
        <input placeholder="short description" type="text" />
        <textarea
          placeholder="describe your product"
          name
          id
          rows="10"
        ></textarea>
        <input type="number" min="0" value="0.00" />
        <input type="file" multiple="multiple" @change="previewFiles" />
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

      <button type="submit">submit</button>
    </form>

    <div class="preview">
      <img src="319022_2387118763915_6102261_n.jpg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: "",
      name: "",
      fileData: {},
    };
  },
  computed: {
    myformData() {
      return console.log(this.item);
    },
  },
  methods: {
    formData() {
      console.log(this.item);
      console.log(this.name);
      console.log(this.fileData);
    },
    previewFiles(event) {
      this.fileData = event.target.files[0];
      console.log(event.target.files[0]);
    },
  },
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