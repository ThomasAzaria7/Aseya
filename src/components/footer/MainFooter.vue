<template>
  <div class="footerContainer">
    <ul>
      <div class="navContainer col-1">
        <li class="title">let us help you</li>
        <li>
          <a href>your account</a>
        </li>
        <li>
          <a href>your orders</a>
        </li>
        <li>
          <a href>policies</a>
        </li>
        <li>
          <a href>return and replacement</a>
        </li>
        <li>
          <a href>help center</a>
        </li>
        <li>
          <a href>contact</a>
        </li>
      </div>
      <div class="navContainer col-2">
        <li class="title">Get to know us</li>

        <li>
          <a href>sell with us</a>
        </li>
        <li>
          <a href>selling Infomation</a>
        </li>
        <li>
          <a href>pricing</a>
        </li>
        <li>
          <a href>billing</a>
        </li>
        <li>
          <a href>fees</a>
        </li>
        <li>
          <a href>reach us</a>
        </li>
      </div>
      <div class="navContainer col-3">
        <li class="title">sell with us</li>

        <li>
          <a href>terms and condition</a>
        </li>
        <li>
          <a href>marketing and promotion</a>
        </li>
        <li>
          <a href>payouts and subscription</a>
        </li>
        <div class="footerContainer__assistance">
          <p>need some assitance?</p>
          <p class="email">aseyeamarket@gmail.com</p>
        </div>
      </div>
      <div class="navContainer footerContainer__subscribe">
        <!-- <h>be our friend</h4> -->
        <li class="title subscribe">stay connected</li>
        <form>
          <input type="text" placeholder="name" class="formControl" />
          <input type="email" placeholder="email address" class="formControl" />
          <button class="formControl">Subscribe Now</button>
        </form>
      </div>
    </ul>

    <hr />

    <div class="subFooter">
      <div class="subFooter__social">
        <p>Follow Us on Social</p>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-instagram-square"></i>
      </div>

      <!-- <div>
        <p>copyright 2021</p>
      </div>-->
      <!--  -->
      <div class="subFooter__paypal">
        <p>SSL Encrypted - Securely shop with paypal and Master Cards</p>
        <img src="https://cdn-icons-png.flaticon.com/512/888/888920.png" alt />
      </div>
    </div>

    <div class="MobileFooter" style="background:white"></div>
  </div>
</template>

<script>
export default {
  component: []
};
</script>

<style lang="scss" scoped>
.footerContainer {
  background-color: #4d4d4d;
  margin: 0;
  padding: 0;
  position: relative;
  // display: flex;
  height: 300px;
  padding: 20px 10%;
  // display: flex;
  // justify-content: space-around;

  .subFooter {
    display: flex;
    justify-content: space-between;
    margin: 5px;

    &__paypal {
      height: 50px;
      margin: 15px;
      display: flex;
      p {
        width: 300px;
        margin: 0;
        color: rgba(187, 187, 187, 0.705);
        font-family: cursive;
        font-size: 14px;
      }
      img {
        height: 100%;
      }
    }
    &__social {
      p {
        // margin: 4px;
        color: #949494;
        font-size: 14px;
      }
      i {
        font-size: 30px;
        margin-right: 5px;
      }
    }
  }

  &__subscribe {
    // background-color: white;

    position: absolute;
    right: 20%;
    flex: 0 1 25%;
    .formControl {
      display: block;
      width: 150%;
      padding: 5px 10px;
      border: none;
      margin: 5px 0;
      box-sizing: border-box;
      background-color: rgba(194, 194, 194, 0.151);
      color: rgba(255, 255, 255, 0.664);

      &:focus {
        border: 1px solid rgb(247, 247, 247);
        outline: none;
        // outline: 1px solid rgb(52, 166, 204);
      }
    }
  }
  &__assistance {
    p {
      color: rgb(207, 207, 207);
      margin-bottom: 0;
    }
    .email {
      color: rgb(175, 175, 175);
      margin-top: 0;
    }
  }
}

ul {
  list-style-type: none;
  // margin: 0;
  // justify-content: center;
  display: flex;
  margin: 0;
  padding: 10px 0;
  // grid-template-columns: repeat(3, min-width(1frame));
  .navContainer {
    flex: 0 1 15vw;

    .title {
      color: rgb(235, 235, 235);
      margin-bottom: 5px;
    }
    .subscribe {
      float: right;
    }
  }

  li {
    // float: left;

    a {
      padding: 10px 20px;
      padding-left: 0;
      color: rgb(189, 189, 189);
      text-decoration: none;
      font-weight: 100;
      font-size: 14px;
      margin-left: 5px;

      &:hover {
        color: rgb(63, 202, 202);
        border-bottom: solid 1px rgb(189, 189, 189);
        padding: 0;
      }
    }
  }
}
</style>
