<template>
  <div class="homeContainer">
    <!-- <img
      src="https://static.wixstatic.com/media/4663cc_2bf0c8c1239e431a85aaf17dda4ea178~mv2.jpg/v1/fill/w_800,h_514,al_c,q_85/4663cc_2bf0c8c1239e431a85aaf17dda4ea178~mv2.webp"
      alt
    />-->

    <img
      src="https://images.pexels.com/photos/5999962/pexels-photo-5999962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt
    />

    <h2>online store</h2>
    <div class="itemSpotlight">
      <div>
        <img
          src="https://static.wixstatic.com/media/4663cc_2bf0c8c1239e431a85aaf17dda4ea178~mv2.jpg/v1/fill/w_800,h_514,al_c,q_85/4663cc_2bf0c8c1239e431a85aaf17dda4ea178~mv2.webp"
          alt
        />

        <div></div>
      </div>
      <div>
        <img
          src="https://static.wixstatic.com/media/4663cc_4b8e8cdaeb3e4c32825834105e68abaf~mv2.jpg/v1/fill/w_625,h_938,al_c,q_85,usm_0.66_1.00_0.01/4663cc_4b8e8cdaeb3e4c32825834105e68abaf~mv2.webp"
          alt
        />
      </div>
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
export default {};
</script>

<style lang="scss" scoped>
.homeContainer {
  // padding: 0 10%;
  background-color: #eee;
}

h2 {
  text-align: center;
}

.itemSpotlight {
  display: flex;
  // padding: 0 10%;
  box-sizing: border-box;

  div {
    position: relative;
    box-sizing: border-box;
    flex: 0 1 50%;
    // margin: 0 5px;
    &::after {
      position: absolute;
      content: "";
      background-color: rgba(0, 0, 0, 0.514);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
</style>
