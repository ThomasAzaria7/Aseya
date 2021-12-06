<template>
  <div class="homeContainer">
    <!-- <img
      src="https://static.wixstatic.com/media/4663cc_2bf0c8c1239e431a85aaf17dda4ea178~mv2.jpg/v1/fill/w_800,h_514,al_c,q_85/4663cc_2bf0c8c1239e431a85aaf17dda4ea178~mv2.webp"
      alt
    />-->
    <div class="hero">
      <picture-slide></picture-slide>
    </div>

    <div class="info">
      <div class="items deliveryTruck">
        <!-- <img width="100px" src alt /> -->
        <i class="fas fa-truck"></i>
        <p>Free Delivery for items over $100</p>
      </div>

      <div class="items itemsCard">
        <i class="fas fa-gift"></i>
        <p>buy and earn rewards</p>
      </div>
      <div class="items itemsCard">
        <i class="fas fa-gift"></i>
        <p>buy and earn</p>
      </div>
      <div class="items itemsCard">
        <i class="far fa-calendar-check"></i>
        <p>same day dispatch</p>
      </div>
    </div>
    <!-- <h2>online store</h2> -->

    <div class="topSearches">
      <h2>Top Searches</h2>
      <!-- <br /> -->
      <div class="searchItems">
        <div class="items">
          <img
            src="https://static.wixstatic.com/media/4663cc_19c29bd40f2841ab8a24e142de00986d~mv2.jpg/v1/crop/x_0,y_14,w_1000,h_972/fill/w_179,h_174,al_c,q_80,usm_0.66_1.00_0.01/H02d15fa6476b483cbd6045dc235b7582m.webp"
            alt
          />
          <p>hand Bag</p>
        </div>
        <div class="items">
          <img
            src="https://static.wixstatic.com/media/4663cc_c385dbb886c3448987a712d77fda955e~mv2.jpg/v1/crop/x_0,y_11,w_800,h_778/fill/w_179,h_174,al_c,q_80,usm_0.66_1.00_0.01/zind.webp"
            alt
          />
          <p>hand Bag</p>
        </div>
        <div class="items">
          <img
            src="https://static.wixstatic.com/media/4663cc_a21ae2ffc74849e3a848e0f5ea8a802c~mv2.jpg/v1/crop/x_0,y_6,w_693,h_674/fill/w_179,h_174,al_c,q_80,usm_0.66_1.00_0.01/IMG_6201_edited.webp"
            alt
          />
          <p>hand Bag</p>
        </div>

        <div class="items">
          <img
            src="https://static.wixstatic.com/media/4663cc_0bdef6211e9842429e2242e18b9f5aea~mv2.jpg/v1/crop/x_0,y_8,w_693,h_674/fill/w_179,h_174,al_c,q_80,usm_0.66_1.00_0.01/IMG_6211_edited.webp"
            alt
          />
          <p>hand Bag</p>
        </div>
        <div class="items">
          <img
            src="https://static.wixstatic.com/media/4663cc_b2661d120da741debc20324df08d7714~mv2.png/v1/fill/w_281,h_281,al_c,q_85,usm_0.66_1.00_0.01/4663cc_b2661d120da741debc20324df08d7714~mv2.webp"
            alt
          />
          <p>hand Bag</p>
        </div>
      </div>
    </div>

    <div class="itemSpotlight">
      <h2 style="position:absolute; top:0">Item Spotlight</h2>
      <i class="far fa-arrow-alt-circle-left"></i>

      <div class="itemSpotlight__itemContainer">
        <div>
          <img
            src="https://static.wixstatic.com/media/4663cc_c385dbb886c3448987a712d77fda955e~mv2.jpg/v1/crop/x_0,y_11,w_800,h_778/fill/w_179,h_174,al_c,q_80,usm_0.66_1.00_0.01/zind.webp"
            alt
          />

          <div class="text-description">
            <p>On Sale !</p>
          </div>

          <!-- <div></div> -->
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/4663cc_4b8e8cdaeb3e4c32825834105e68abaf~mv2.jpg/v1/fill/w_625,h_938,al_c,q_85,usm_0.66_1.00_0.01/4663cc_4b8e8cdaeb3e4c32825834105e68abaf~mv2.webp"
            alt
          />
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/4663cc_8fdec0bd5f4843a5b259188051ab11c9~mv2.jpg/v1/fill/w_301,h_244,al_c,q_80,usm_0.66_1.00_0.01/4663cc_8fdec0bd5f4843a5b259188051ab11c9~mv2.webp"
            alt
          />

          <div class="text-description">
            <p>On Sale !</p>
          </div>

          <!-- <div></div> -->
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/4663cc_7d4063b196a8414a83cb3c513f7430f2~mv2.jpg/v1/fill/w_301,h_313,al_c,q_80,usm_0.66_1.00_0.01/4663cc_7d4063b196a8414a83cb3c513f7430f2~mv2.webp"
            alt
          />
        </div>
      </div>
      <i class="far fa-arrow-alt-circle-right"></i>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import PictureSlide from "../slideShow/PictureSlide";
export default {
  components: {
    PictureSlide
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.homeContainer {
  // padding: 0 10%;
  background-color: #eee;
}

.topSearches {
  padding: 50px 10%;
  box-sizing: border-box;
  position: relative;

  h2 {
    margin: 0;
    top: -20px;
    position: absolute;
    font-weight: 300;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 0;

    // text-align: center;
    // display: none;
  }
  .searchItems {
    // display: flex;
    // justify-content: center;r
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    gap: 50px;

    .items {
      //
      img {
        height: 150px;
        border-radius: 50%;
      }
      p {
        text-align: center;
        font-weight: 300;
        margin: 0;
      }
      //
    }
  }
}

.info {
  height: 25vh;
  // background-color: rgb(184, 184, 184);
  background-color: rgb(255, 255, 255);
  margin: 60px 0;
  padding: 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: relative;
  // position: sticky;
  // top: 50px;

  .items {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    width: 120px;
    height: 100%;
    gap: 10px;
    position: relative;
    top: 25%;

    i {
      font-size: 30px;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    p {
      color: rgb(82, 19, 0);
      font-size: 14px;
      font-weight: 400;
      text-align: center;

      // text-align: center;
    }
  }
}

h2 {
  text-align: center;
}
.hero {
  position: relative;
  // background-image: url("https://static.wixstatic.com/media/11062b_310e55b9b2c1408692560493e8049629~mv2.jpg/v1/crop/x_0,y_553,w_3000,h_894/fill/w_1213,h_361,al_c,q_85,usm_0.66_1.00_0.01/African-Textiles.webp");
  // background-color: green;
  height: 75vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.itemSpotlight {
  padding: 50px 10%;
  box-sizing: content-box;
  position: relative;
  // height: 300px;
  background-color: rgb(247, 244, 244);

  h2 {
    font-weight: 300;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 10px);
  }
  &__itemContainer {
    gap: 10px;
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(100px 1fr));
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    // grid-template-columns: repeat(auto-fill, min-max(150px, 1fr));
  }

  .fa-arrow-alt-circle {
    &-left {
      position: absolute;
      top: 45%;
      left: 10%;
      font-size: 25px;
    }

    &-right {
      position: absolute;
      top: 45%;
      right: 10%;
      font-size: 25px;
    }

    // bottom: 50px;
  }

  div {
    // margin: 0 5px;
    position: relative;
    box-sizing: border-box;
    padding: 20px;
    .text-description {
      background-color: rgba(212, 55, 81, 0.966);
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;

      display: none;
      p {
        margin: 0;
        padding: 0;
      }
    }

    &::after {
      position: absolute;
      content: "";
      // background-color: rgba(255, 0, 0, 0.178);
      top: 20px;
      bottom: 20px;
      left: 20px;
      border-radius: 50%;
      padding: 20px;

      right: 0;
    }
    img {
      background-color: rgb(255, 255, 255);

      // border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: contain;
      // box-shadow: 5px 4px 1rem black;
    }
  }
}
</style>
