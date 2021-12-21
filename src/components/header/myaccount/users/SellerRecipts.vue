<template>
  <div class="sellerReciptContainer">
    <div class="reciptContainer__claimed">
      <div class="nav">
        <ul>
          <li @click="viewRecent">
            <a>Recent</a>
          </li>
          <li @click="viewClaimed">
            <a>completed</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="reciptDetails">
      <div v-if="recentSelected" class="RecentContainer">
        <h2>Recent</h2>

        <ul
          class="recipts recent"
          v-for="recipt in getRecipts"
          :key="recipt.reciptId"
        >
          <div class="recipts__id">
            <li>
              <h4>Recipt Number :</h4>
              {{ recipt.reciptId }}
            </li>
            <br />
          </div>

          <div class="recipts__info">
            <h4>Buyer info</h4>

            <li>
              {{
                recipt.payer.name.given_name + "" + recipt.payer.name.surname
              }}
            </li>
            <li>{{ recipt.payer.payer_id }}</li>
            <li>{{ recipt.payer.email_address }}</li>
            <li>{{ recipt.payer.address }}</li>
            <h4>items Sold</h4>
            <li class="items" v-for="item in recipt.items" :key="item.name">
              <a>{{ item.name }}</a>
              <a>${{ item.unit_amount.value }}</a>
              <a>quantity : {{ item.quantity }}</a>
            </li>
          </div>

          <!-- <li>{{ recipt.status }}</li> -->
          <div class="recipts__claim">
            <form @submit.prevent="addTrackingInfo()">
              <label for="title">Add tracking Info</label>
              <br />
              <select name="" id="">
                <option value="select shipping method" selected disabled>
                  shipping method
                </option>
                <option value="AusPost">AusPost</option>
                <option value="AusPost">AusPost</option>
                <option value="AusPost">AusPost</option>
                <option value="AusPost">other</option>
              </select>
              <input placeholder="tracking id" type="text" name="" id="" />
              <button>add</button>
            </form>

            <h3>items total $ {{ recipt.total }}</h3>
            <h3>transaction fee $ {{ recipt.PaypalFee }}</h3>
            <h3>my Profit $ {{ recipt.total - recipt.PaypalFee }}</h3>

            <button @click="popUp">claim NOw</button>

            <p v-if="payout">payout successful</p>
            <br />
            <br />

            <div v-if="modal" class="modal">
              <div class="textbox">
                <div v-if="!success" class="check">
                  <p>
                    Do You Want To Proceed with Withdrawal Payment ${{
                      recipt.total - recipt.PaypalFee
                    }}
                    AUD?
                  </p>
                  <button @click="clear">NO</button>
                  <button
                    @click="
                      getPaid(recipt.total - recipt.PaypalFee, recipt.reciptId)
                    "
                  >
                    YES
                  </button>
                </div>

                P5327LY9WX87E

                <div v-if="success">
                  <p>SUCCESS! you have Claimed Payment!</p>
                  <button @click="clear">OK</button>
                </div>
              </div>
            </div>
            <!-- <button @click="getConfirmation()">get confirmation</button> -->
          </div>
        </ul>
      </div>
      <!--  -->
      <!--  -->
      <!--  -->
      <!-- below is for claimed items -->

      <!--  -->
      <div v-if="!recentSelected" class="claimedContainer">
        <h2>Claimed</h2>
        <ul
          class="recipts"
          v-for="recipt in getClaimedItemRecipt"
          :key="recipt.reciptId"
        >
          <div class="recipts__id">
            <li>
              <h4>Recipt Number :</h4>
              {{ recipt.reciptId }}
            </li>
            <li>payout confirmation code {{ recipt.payoutReciptId }}</li>
            <br />

            <i
              style="font-size: 2rem; color: green"
              class="fas fa-check-circle"
            >
              Paid</i
            >

            <br />
          </div>

          <div class="recipts__info">
            <h4>Buyer info</h4>

            <li>
              {{
                recipt.payer.name.given_name + "" + recipt.payer.name.surname
              }}
            </li>
            <li>{{ recipt.payer.payer_id }}</li>
            <li>{{ recipt.payer.email_address }}</li>
            <li>{{ recipt.payer.address }}</li>
            <h4>items Sold</h4>
            <li class="items" v-for="item in recipt.items" :key="item.name">
              <a>{{ item.name }}</a>
              <a>${{ item.unit_amount.value }}</a>
              <a>quantity : {{ item.quantity }}</a>
            </li>
          </div>

          <!-- <li>{{ recipt.status }}</li> -->
          <div class="recipts__claim">
            <form @submit.prevent="addTrackingInfo()">
              <label for="title">Add tracking Info</label>
              <br />
              <select name="" id="">
                <option value="select shipping method" selected disabled>
                  shipping method
                </option>
                <option value="AusPost">AusPost</option>
                <option value="AusPost">AusPost</option>
                <option value="AusPost">AusPost</option>
                <option value="AusPost">other</option>
              </select>
              <input placeholder="tracking id" type="text" name="" id="" />
              <button>add</button>
            </form>

            <h3>items total $ {{ recipt.total }}</h3>
            <h3>transaction fee $ {{ recipt.PaypalFee }}</h3>
            <h3>my Profit $ {{ recipt.total - recipt.PaypalFee }}</h3>

            <button @click="popUp">claim NOw</button>

            <p v-if="payout">payout successful</p>
            <br />
            <br />

            <div v-if="modal" class="modal">
              <div class="textbox">
                <div v-if="!success" class="check">
                  <p>Do You Want To Proceed with Payment?</p>
                  <button @click="clear">NO</button>
                  <button
                    @click="
                      getPaid(recipt.total - recipt.PaypalFee, recipt.reciptId)
                    "
                  >
                    YES
                  </button>
                </div>

                <div v-if="success">
                  <p>SUCCESS! you have Claimed Payment!</p>
                  <button @click="clear">OK</button>
                </div>
              </div>
            </div>
            <!-- <button @click="getConfirmation()">get confirmation</button> -->
          </div>
        </ul>
      </div>
    </div>

    <!-- <claimed-items></claimed-items>
    <recent-items></recent-items> -->
  </div>
</template>

<script>
// import ClaimedItems from "./SellerRecipts/ClaimedItems.vue";
// import RecentItems from "./SellerRecipts/RecentItems.vue";
export default {
  components: {
    // ClaimedItems,
    // RecentItems,
  },
  data() {
    return {
      data: "",
      payout: null,
      modal: false,
      success: false,
      recentSelected: true,
    };
  },
  computed: {
    getRecipts() {
      console.log(this.$store.getters["UserState/getSellerRecipt"]);
      return this.$store.getters["UserState/getSellerRecipt"];
    },
    getClaimedItemRecipt() {
      console.log(
        "claimed items",
        this.$store.getters["UserState/getClaimedRecipt"]
      );
      return this.$store.getters["UserState/getClaimedRecipt"];
    },
  },
  mounted() {
    console.log(this.getRecipts);
  },
  watch: {
    getRecipts(newVal) {
      console.log("hello", newVal);
    },
  },
  methods: {
    viewClaimed() {
      let userUid;
      userUid = this.$store.getters["UserState/getAuthState"]; // get current user identification
      this.$store.dispatch("UserState/getClaimedItemsRecipt", userUid); // dispatch action to get update claimed recipts
      this.recentSelected = false;
    },

    viewRecent() {
      this.recentSelected = true;
    },
    getConfirmation() {
      return fetch("http://localhost:3000/my-server/confirm-payout", {
        method: "Get",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((x) => {
          // console.log(y);
          return x.json();
        })
        .then((data) => {
          console.log(data.Response.status);
        });
    },

    clear() {
      this.modal = false;
    },
    popUp() {
      this.modal = true;
    },
    // myMoney() {},
    getPaid(cost, reciptId) {
      const mytoken = this.$store.getters["UserState/getMyToken"];
      console.log(cost);
      const data = JSON.stringify({
        payoutPrice: cost,
        authToken: mytoken,
      });

      const userUid = this.$store.getters["UserState/getAuthState"].uid;

      fetch("http://localhost:3000/my-server/pay-clients", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: data,
      })
        .then((x) => {
          return x.json();
        })
        .then((data) => {
          console.log(data);
          const payoutId = data.id.batch_header.payout_batch_id;
          // console.log(data.id.batch_header.payout_batch_id);
          const userData = {
            id: reciptId,
            uid: userUid,
            payoutReciptId: payoutId,
          };
          console.log(userData);

          if (payoutId) {
            this.success = true;
            this.$store.dispatch("UserState/claimRecipts", userData);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.sellerReciptContainer {
  display: grid;
  grid-template-columns: 25% auto;
  gap: 20px;

  .modal {
    background-color: rgba(0, 0, 0, 0.883);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    display: flex;
    justify-content: center;
    .textbox {
      p {
        margin: 0;
      }
      color: rgb(0, 0, 0);
      background-color: rgba(251, 249, 243, 0.815);
      // height: 300px;
      width: 500px;
      top: 30%;
      z-index: 4;
      font-size: 2.8rem;
      font-weight: 500;
      padding: 50px;

      position: inherit;

      button {
        width: 100px;
        padding: 10px;
        margin-left: 20px;
      }
    }
  }

  .recipts {
    &__id {
      background-color: rgba(184, 238, 238, 0.267);
      padding: 10px 30px;
    }
    &__info {
      background-color: rgba(79, 255, 255, 0.205);
      padding: 10px 30px;
    }
    &__claim {
      background-color: rgba(184, 238, 238, 0.267);

      padding: 10px 30px;

      form {
        label {
          font-size: 18px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        select {
          width: 100%;
          padding: 5px;
          margin-bottom: 2px;
        }
        input {
          width: 100%;
          padding: 5px;
          box-sizing: border-box;
          margin-bottom: 2px;
        }
        button {
          width: 50%;
          padding: 5px;
          position: relative;
          left: 50%;
        }
      }
    }
  }

  .nav {
    // top: 50px;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      margin: 0;
      list-style-type: none;
      // background-color: rgba(145, 180, 226, 0.61);
      // padding: 20px;
      // background-color: rgba(199, 199, 199, 0.192);

      li {
        padding: 10px 20px;
        background: rgba(241, 174, 229, 0.568);
        margin-bottom: 5px;

        &:hover {
          padding: 10px 20px;
          background: rgba(85, 46, 78, 0.7);
          margin-bottom: 5px;
          cursor: pointer;
        }
        a {
          text-decoration: none;
        }
      }
    }
  }
  //@at-root
  .reciptDetails {
    ul {
      background-color: rgba(233, 212, 153, 0.342);
      list-style-type: none;
      padding: 20px;
      list-style-type: none;
      margin: 0;
      margin-bottom: 10px;

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
}
</style>