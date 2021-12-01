<template>
  <div class="authenticationCoantainer">
    <!-- <div class="signUp"></div> -->
    <div class="signIn">
      <form @submit.prevent="siginIn">
        <div>
          <h1 style="text-align:center">ASEYEA</h1>
          <br />
        </div>
        <div class="formControl">
          <input type="text" placeholder="email address" />
        </div>
        <div class="formControl">
          <input type="password" placeholder="password" />
        </div>
        <div class="formControl">
          <button type="submit">sign In</button>
        </div>
        <br />
        <p>alternative signin with gmail and facebooks</p>
        <hr />

        <div class="alternativeSignIn">
          <i @click="siginIn('google')" class="fab fa-google"></i>
          <i @click="siginIn('facebook')" class="fab fa-facebook"></i>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { collection, addDoc } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore";

import { userSchema } from "../../../../dataSchema/UserProfileSchema.js";
export default {
  data() {
    return {
      userData: userSchema
    };
  },
  mounted() {
    console.log();
  },
  methods: {
    siginIn(provider) {
      this.$store.dispatch("UserState/signUpUser", provider);
    }
  }
};
</script>

<style lang="scss" scoped>
.authenticationCoantainer {
  background-image: url("https://images.pexels.com/photos/10188248/pexels-photo-10188248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  // margin: 0% 10%;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  // background-color: rgb(240, 240, 240);
  padding: 0% 30%;
  height: 600px;
  form {
    width: 100%;
  }

  .alternativeSignIn {
    .fa-google {
      font-size: 40px;
      color: red;
      cursor: pointer;
    }

    .fa-facebook {
      font-size: 40px;
      color: rgb(98, 0, 255);
      margin: 0 5px;
    }
  }
  .formControl {
    margin: 10px 0;
    input {
      box-sizing: border-box;
      width: 100%;
      padding: 5px;
    }
    button {
      width: 100%;
      padding: 10px;
      background-color: rgb(65, 103, 209);
      color: white;
      border: none;
    }
  }
  .signUp {
  }

  .signIn {
    position: relative;
    background-color: rgb(255, 255, 255);
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
    // border-radius: 5px;
    // z-index: 2;
  }
}
</style>