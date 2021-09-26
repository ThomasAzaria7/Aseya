<template>
  <div class="accountContainer">
    <!-- <h2>account management page works</h2> -->
    <div class="accountContainer__view">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi.
        Sint quo quibusdam magni doloribus distinctio iure fuga doloremque.
        Nobis voluptate laudantium suscipit dolorum accusantium tempora natus
        nemo magni tempore!
      </p>
      <router-view></router-view>
    </div>
    <div class="accountContainer__nav">
      <ul>
        <li>
          <router-link to="">account</router-link>
        </li>
        <li>
          <router-link to="">Purchase history</router-link>
        </li>
        <li>
          <router-link to="">products</router-link>
        </li>
        <li>
          <router-link to="">policy & privacy</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.accountContainer {
  padding: 0 10%;
  display: flex;

  &__nav {
    flex: 0 0 25%;
    ul {
      list-style-type: none;
      background-color: rgba(101, 6, 104, 0.5);
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      li {
        background-color: rgb(189, 189, 189);
        text-align: center;
        padding: 10px 0;
        margin: 5px 0;
        a {
          padding: 10px 0px;
          text-decoration: none;
          color: white;
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
