<template>
  <div>
    <br />
    <h1>womans ></h1>
    <ul>
      <li>
        <a href>coats and jackets</a>
      </li>
      <li>
        <a href>dresses</a>
      </li>
      <li>
        <a href>tops</a>
      </li>
      <li>
        <a href>skirts</a>
      </li>
      <li>
        <a href>jumpsuit and play suit</a>
      </li>
      <li>
        <a href>jeans</a>
      </li>
      <li>
        <a href>formal</a>
      </li>
      <li>
        <a href>swimwear</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
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
    width: 200px;
    margin: 0;
    list-style-type: none;
    padding: 0;

    li {
      padding: 5px 2%;
      // background-color: aqua;
      a {
        text-decoration: none;
        font-family: sans-serif;

        &:hover {
          color: green;
        }
      }
    }
  }
}
</style>