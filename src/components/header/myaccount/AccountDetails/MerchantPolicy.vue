<template>
  <div class="policyContainer">
    <div class="nav">
      <ul>
        <li>
          <a href>shipping and handling</a>
        </li>
        <li>
          <a href="#refunds">Refunds</a>
        </li>
      </ul>
    </div>

    <div class="contents">
      <div id="shipping__handling">
        <h2>shipping & handling</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus magni sint soluta animi quia excepturi quidem, aperiam, voluptatum quas aliquam quisquam. Voluptate, iure voluptatibus? Provident molestiae maiores quos quam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus magni sint soluta animi quia excepturi quidem, aperiam, voluptatum quas aliquam quisquam. Voluptate, iure voluptatibus? Provident molestiae maiores quos quam.</p>
      </div>
      <div id="shipping__handling">
        <h2>shipping & handling</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus magni sint soluta animi quia excepturi quidem, aperiam, voluptatum quas aliquam quisquam. Voluptate, iure voluptatibus? Provident molestiae maiores quos quam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus magni sint soluta animi quia excepturi quidem, aperiam, voluptatum quas aliquam quisquam. Voluptate, iure voluptatibus? Provident molestiae maiores quos quam.</p>
      </div>
      <div id="shipping__handling">
        <h2>shipping & handling</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus magni sint soluta animi quia excepturi quidem, aperiam, voluptatum quas aliquam quisquam. Voluptate, iure voluptatibus? Provident molestiae maiores quos quam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus magni sint soluta animi quia excepturi quidem, aperiam, voluptatum quas aliquam quisquam. Voluptate, iure voluptatibus? Provident molestiae maiores quos quam.</p>
      </div>
      <div id="shipping__handling">
        <h2>shipping & handling</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus magni sint soluta animi quia excepturi quidem, aperiam, voluptatum quas aliquam quisquam. Voluptate, iure voluptatibus? Provident molestiae maiores quos quam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus magni sint soluta animi quia excepturi quidem, aperiam, voluptatum quas aliquam quisquam. Voluptate, iure voluptatibus? Provident molestiae maiores quos quam.</p>
      </div>
      <div id="refunds">
        <h2>Refunds</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus magni sint soluta animi quia excepturi quidem, aperiam, voluptatum quas aliquam quisquam. Voluptate, iure voluptatibus? Provident molestiae maiores quos quam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus magni sint soluta animi quia excepturi quidem, aperiam, voluptatum quas aliquam quisquam. Voluptate, iure voluptatibus? Provident molestiae maiores quos quam.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.policyContainer {
  padding: 50px 0;
  display: flex;
  gap: 20px;
  .nav {
    flex: 0 0 25%;
    position: sticky;
    top: 50px;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      background-color: rgba(199, 199, 199, 0.192);
      height: 80vh;

      li {
        padding: 10px 20px;
        a {
          text-decoration: none;
        }
      }
    }
  }
  .contents {
    // overflow: auto;
    // height: 100vh;
  }
  h2 {
    margin: 0;
  }
}
</style>