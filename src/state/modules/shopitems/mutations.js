export default {
	changeData(state,payload) {

        // console.log(payload.id);
        // console.log(state.shopItems);
        // console.log( state.shopItems.filter((x)=> payload.id === x.code));

      return  state.selectedItem = state.shopItems.filter((x)=> payload.id === x.code)
		// state.data
		// state.greet = payload;
		// console.log(payload);
		// console.log(state.shopItems);
		// console.log(state.coaches);
	},
};
