<template>
  <div class="previewContainer">
    <div class="previewContainer__view">
      <div class="itemImgageBox">
        <img
          src="https://static.wixstatic.com/media/4663cc_f4d0890f69004da782c60d368f1c652d~mv2_d_3456_5184_s_4_2.jpg/v1/fill/w_489,h_734,al_c,q_80,usm_0.66_1.00_0.01/4663cc_f4d0890f69004da782c60d368f1c652d~mv2_d_3456_5184_s_4_2.webp"
          alt
        />
      </div>
      <div class="altImageBox">
        <div>
          <img
            src="https://static.wixstatic.com/media/4663cc_3c0e79bd3f2a498b8070bfb320d84a55~mv2.png/v1/fill/w_625,h_938,al_c,q_90,usm_0.66_1.00_0.01/4663cc_3c0e79bd3f2a498b8070bfb320d84a55~mv2.webp"
            alt
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/4663cc_f4d0890f69004da782c60d368f1c652d~mv2_d_3456_5184_s_4_2.jpg/v1/fill/w_489,h_734,al_c,q_80,usm_0.66_1.00_0.01/4663cc_f4d0890f69004da782c60d368f1c652d~mv2_d_3456_5184_s_4_2.webp"
            alt
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/4663cc_76daff33e6ed412680cd41c0a299c838~mv2.png/v1/fill/w_625,h_938,al_c,q_90,usm_0.66_1.00_0.01/4663cc_76daff33e6ed412680cd41c0a299c838~mv2.webp"
            alt
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/4663cc_a7be75ad5611477d8ed3a858fabe8617~mv2.png/v1/fill/w_625,h_938,al_c,q_90,usm_0.66_1.00_0.01/4663cc_a7be75ad5611477d8ed3a858fabe8617~mv2.webp"
            alt
          />
        </div>
      </div>
      <div class="itemDescrption">
        <p style="line-spacing:25px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum magnam
          optio ad velit tenetur labore doloribus similique, dicta impedit
          dignissimos incidunt nostrum quia aliquid quam possimus deserunt vitae
          natus neque!
        </p>
        <p style="line-spacing:25px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum magnam
          optio ad velit tenetur labore doloribus similique, dicta impedit
          dignissimos incidunt nostrum quia aliquid quam possimus deserunt vitae
          natus neque!
        </p>
      </div>
    </div>
    <div class="previewContainer__selectors">
      <div>
        <h2>{{items}}</h2>
        <p>$153</p>
      </div>
      <br />
      <br />
      <form @submit.prevent="getItemData">
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
        <div class="formControl">
          <label for>Quantity</label>
          <input type="number" value="1" />
        </div>

        <div class="formControl">
          <button @click="getItemData">Add to card</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: "Thomas"
    };
  },
  created() {
    // this.items = this.$store.getters["items/getItems"];
    // console.log(this.items);
    console.log(this.$store.getters["items/getItems"]);
    console.log(this.$store.getters["items/getdata"]);
  },
  methods: {
    getItemData() {
      this.items = this.$store.getters["items/getItems"];
      // console.log(this.items);
    }
  }
};
</script>

<style lang="scss" scoped>
.previewContainer {
  padding: 2% 10%;
  display: flex;

  &__view {
    flex: 0 0 40%;
    .itemImgageBox {
      height: 500px;
      border: 1px solid rgba(0, 0, 0, 0.247);
      box-shadow: 2px 2px 0.6rem rgba(0, 0, 0, 0.336);

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    //
    .altImageBox {
      position: relative;
      margin: 30px;
      display: flex;
      justify-content: center;
      gap: 30px;

      & > * {
        height: 60px;
        width: 60px;
        border: 1px solid rgba(0, 0, 0, 0.37);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .itemDescrption {
      position: relative;
      //   margin: 50px;

      p {
        text-align: justify;
      }
    }
  }
  &__selectors {
    h2 {
      margin: 0;
    }
    width: 100%;
    // flex: 0 0 50%;
    padding: 0 10%;
    .formControl {
      width: 100%;
      margin: 10px 0;

      select {
        width: 100%;
      }

      input {
        width: 10%;
      }

      label {
        margin: 2px 0;
        padding: 0;
      }

      button {
        width: 100%;
        background-color: rgba(32, 32, 32, 0.644);
        color: white;
        font-size: 20px;
      }

      & > * {
        padding: 5px;
        box-sizing: border-box;
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
