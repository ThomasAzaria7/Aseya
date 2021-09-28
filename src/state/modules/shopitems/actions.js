export default {
	getSelectedProduct(context, payload) {
		context.commit("changeData", payload);
	},
};
