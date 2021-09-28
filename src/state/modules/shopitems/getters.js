export default {
	getItems(state) {
		// console.log(state.shopItems[0]);
		return state.shopItems;
	},

	getSelectedItem(state) {
		return state.selectedItem[0];
	},

	getdata(state) {
		return state.coaches;
	},
};
