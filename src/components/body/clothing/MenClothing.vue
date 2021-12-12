<template>
  <div>
    <br />
    <br />

    <button @click="getCurrency">test currency</button>
    <h1>mens ></h1>
    <ul>
      <li>
        <a href>shirts</a>
      </li>
      <li>
        <a href>shirts</a>
      </li>
      <li>
        <a href>shirts</a>
      </li>
      <li>
        <a href>shirts</a>
      </li>
      <li>
        <a href>shirts</a>
      </li>
      <li>
        <a href>shirts</a>
      </li>
      <li>
        <a href>shirts</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getCurrency() {
      fetch("https://api.exchangerate.host/latest?base=USD", {
        headers: {
          "content-type": "application/json"
        },
        method: "GET"
      })
        .then(x => x.json())
        .then(y => console.log(y.rates.AUD));
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
  padding: 0 10%;

  h1 {
    font-size: 20px;
    font-weight: 100;
  }

  ul {
    background: rgb(245, 243, 243);
    width: 150px;
    margin: 0;
    list-style-type: none;
    padding: 0;

    li {
      padding: 10px 2%;
      // background-color: aqua;
      a {
        text-decoration: none;

        &:hover {
          color: green;
        }
      }
    }
  }
}
</style>