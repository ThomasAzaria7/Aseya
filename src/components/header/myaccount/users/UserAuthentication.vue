<template>
  <div class="authenticationCoantainer">
    <div class="signUp"></div>
    <div class="signIn">
      <form @submit.prevent="siginIn">
        <div>
          <h1>SignIn to ASEYEA</h1>
        </div>
        <div class="formControl">
          <input type="text" placeholder="email address" />
        </div>
        <div class="formControl">
          <input type="password" placeholder="password" />
        </div>
        <div class="formControl">
          <button type="submit">sign In</button>
          <p>Register</p>
        </div>
        <br />
        <p>alternative signin with gmail and facebooks</p>
        <hr />

        <div class="alternativeSignIn">
          <i @click="siginIn" class="fab fa-google"></i>
          <i class="fab fa-facebook"></i>
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
    siginIn() {
      this.$store.dispatch("UserState/signUpUser", "hi");
    }
  }
};
</script>

<style lang="scss" scoped>
.authenticationCoantainer {
  margin: 0% 10%;
  // background-color: rgb(240, 240, 240);
  padding: 5% 2%;
  height: 500px;
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

  .signin {
  }
}
</style>