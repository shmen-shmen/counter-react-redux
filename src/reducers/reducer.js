const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGING_VALUE":
			return { ...state };
		default:
			return state;
	}
};

export default reducer;
