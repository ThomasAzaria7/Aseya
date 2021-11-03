let userSchema = {
  name: "",
  lastname: "",
  displayName: "",
  emails: "",
  address: "",
  phoneNumber: "",

  payments: {
    paypal_merchantId: "",
    payPal_email: "",
    payout_balance: Number
  },

  accountStatus: {
    accountType: ["private", "business"],
    subscriptionPlan: ["basic", "premium", "enterprise"]
  },
  sellHistory: {
    recipts: []
  },
  buyHistory: {
    recipts: []
  },
  mySellProductList: [{}],
  myFavList: [{}],
  myCart: [{}]
};

export { userSchema };
