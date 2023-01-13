const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGING_VALUE":
			const { session, newValue } = action.payload;
			return { ...state, [session]: newValue };
		case "CHANGING_ACTIVE_SESSION":
			const { newActiveSession } = action.payload;
			console.log(newActiveSession);
			return { ...state, activeSession: newActiveSession };
		default:
			return state;
	}
};

export default reducer;
