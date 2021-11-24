<template>
  <div>
    <div class="reciptContainer" v-for="recipt in getRecipts" :key="recipt.reciptId">
      <ul class="recipts">
        <li>
          <h4>
            recipt number :
            <samp></samp>
            {{recipt.reciptId}}
          </h4>
        </li>
        <li>{{recipt.status}}</li>
        <h4>buyer info</h4>
        <li>{{recipt.payer}}</li>
        <h4>items Sold</h4>
        <li class="items" v-for="item in recipt.items" :key="item.name">
          <a>{{item.name}}</a>
          <a>${{item.unit_amount.value}}</a>
          <a>quantity : {{item.quantity}}</a>
        </li>
      </ul>
      <div>
        <div class="claim">
          <h4>available for claim</h4>
          <h3>$ 30</h3>
          <button @click="getPaid(recipt)">claim NOw</button>
          <br />
          <br />
          <button @click="getConfirmation()">get confirmation</button>
        </div>
      </div>
      <!-- <h1>{{item.reciptId}}</h1> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ""
    };
  },
  computed: {
    getRecipts() {
      // this.$store.getters["UserState/getSellerRecipt"];
      return this.$store.getters["UserState/getSellerRecipt"];
    }
  },
  watch: {
    getRecipts(newVal) {
      console.log("hello", newVal);
    }
  },
  methods: {
    getConfirmation() {
      return fetch("http://localhost:3000/my-server/confirm-payout", {
        method: "Get",
        headers: {
          "content-type": "application/json"
        }
      })
        .then(x => {
          // console.log(y);
          return x.json();
        })
        .then(data => {
          console.log(data);
        });
    },
    // myMoney() {},
    getPaid(recipt) {
      console.log(recipt);

      return fetch("http://localhost:3000/my-server/pay-clients", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        }
      }).then(y => {
        console.log(y);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.reciptContainer {
  //   min-height: 100vh;
  box-sizing: border-box;

  display: flex;
  gap: 10px;
  .recipts {
    text-decoration: none;
    list-style-type: none;
    flex: 0 0 80%;
    &:nth-child(odd) {
      background-color: rgba(212, 212, 212, 0.644);
      padding: 20px 20px;
      box-sizing: border-box;
      .items {
        display: flex;
        gap: 10px;
      }
    }
  }
  
  .claim {
    background-color: rgb(27, 219, 21);
    padding: 10px;
    box-sizing: border-box;
    flex: 0 0 20%;
    margin: 20px 0;
  }
}
</style>