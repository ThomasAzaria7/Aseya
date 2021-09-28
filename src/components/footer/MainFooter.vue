<template>
  <div class="footerContainer">
    <div class="footerContainer__stayConnnected">
      <h4>Stay connected</h4>
      <i class="fab fa-facebook-square"></i>
      <i class="fab fa-instagram-square"></i>
    </div>
    <div class="footerContainer__subscribe">
      <h4>be our friend</h4>
      <form>
        <input type="text" placeholder="name" class="formControl" />
        <input type="email" placeholder="email address" class="formControl" />
        <button class="formControl">Subscribe Now</button>
      </form>
    </div>

    <div class="footerContainer__assistance">
      <h4>need some assitance?</h4>
      <p>ASEYAmail@gmail.com</p>
    </div>
    <!-- <ul>
      <li><a>contact</a></li>
      <li><a>contact</a></li>
      <li><a>contact</a></li>
      <li><a>contact</a></li>
      <li><a>contact</a></li>
    </ul> -->
  </div>
</template>

<style lang="scss" scoped>
.footerContainer {
  background-color: #4d4d4d;
  height: 300px;
  padding: 0 10%;
  display: flex;
  justify-content: space-around;

  h4 {
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    text-transform: capitalize;
  }

  &__stayConnnected {
    i {
      font-size: 40px;
      margin: 5px;
    }
    .fa-facebook-square {
      color: blue;
      background-color: rgba(255, 255, 255, 0.829);
    }
    .fa-instagram-square {
      color: white;
      background-color: rgb(141, 15, 114);
      padding: 0;
    }
  }
  &__subscribe {
    // background-color: white;
    flex: 0 1 25%;
    .formControl {
      display: block;
      width: 100%;
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
    }
  }
}

ul {
  list-style-type: none;
  margin: 0;

  li {
    float: left;

    a {
      padding: 10px 20px;
      color: rgb(255, 255, 255);
    }
  }
}
</style>
