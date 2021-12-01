<template>
  <div class="profileContainer">
    <div class="createProfile">
      <form @submit.prevent="createProfile">
        <h2>Create your profile</h2>
        <div class="formControl">
          <input type="text" placeholder="name" />
        </div>
        <div class="formControl"></div>
        <div class="formControl"></div>
        <br />
        <!-- <button type="submit">Save</button> -->
      </form>
    </div>
    <div class="updateProfile"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    createProfile() {
      this.$store.dispatch("UserState/newUser", "new user");
    },
    updateProfile() {}
  }
};
</script>


<style lang="scss" scoped>
.formControl {
  input {
    width: 100%;
    padding: 5px;
  }
}
</style>