<template>
  <div class="mobileFooterContainer">
    <ul>
      <div class="navContainer col-1">
        <label class="title">let us help you</label>
        <div class="content">
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
      </div>
      <div class="navContainer col-2">
        <label class="title">Get to know us</label>
        <div class="content">
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
      </div>
      <div class="navContainer col-3">
        <label class="title">sell with us</label>
        <div class="content">
          <li>
            <a href>terms and condition</a>
          </li>
          <li>
            <a href>marketing and promotion</a>
          </li>
          <li>
            <a href>payouts and subscription</a>
          </li>
        </div>
        <div class="footerContainer__assistance">
          <label>need some assitance?</label>
          <p class="email">aseyeamarket@gmail.com</p>
        </div>
      </div>
      <div class="navContainer footerContainer__subscribe">
        <!-- <h>be our friend</h4> -->
        <label class="title subscribe">stay connected</label>
        <form>
          <input type="text" placeholder="name" class="formControl" />
          <input type="email" placeholder="email address" class="formControl" />
          <button class="formControl">Subscribe Now</button>
        </form>
      </div>

      <div class="subFooter">
        <div class="subFooter__social">
          <label>Follow Us on Social</label>
          <div class="icons">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram-square"></i>
          </div>
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
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mobileFooterContainer {
  background-color: rgb(37, 37, 37);
  margin: 0;
  padding: 0;

  ul {
    margin: 0;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style-type: none;
    padding: 50px;
    label {
      border-bottom: solid 2px black;
      box-sizing: border-box;
    }
    .title {
      margin-bottom: 100px;
    }
    .content {
      margin-top: 10px;
    }
    li a {
      color: rgb(179, 174, 174);
      text-decoration: none;
      font-size: 14px;
    }
    .navContainer {
      &.col-1 {
      }
      &.col-2 {
      }
    } //
    .subFooter {
      //   display: flex;
      //   justify-content: space-between;
      margin: 5px;

      &__paypal {
        height: 50px;
        margin: 15px;
        display: flex;
        p {
          width: 300px;
          margin: 0;
          color: rgba(187, 187, 187, 0.705);
          font-size: 14px;
        }
        img {
          height: 100%;
        }
      }
      //
      &__social {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 30px;
        label {
          color: #949494;
          font-size: 14px;
          padding: 10px;
        }

        .icons {
          display: flex;
          margin: 20px 0;
          justify-content: center;
        }
        i {
          font-size: 30px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>