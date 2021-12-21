import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
	namespaced: true,
	state() {
		return {
			favTotal: 0,
			cartTotal: 0,
			cartItems: [],
			favItems: [],
			authenticated: null,
			auth: null,
			error: null,
			sellerRecipts: null,
			sellerClaimedRecipt:null,
			buyerRecipts: null,
			payToken: null,
		};
	},
	mutations,
	getters,
	actions,
};
