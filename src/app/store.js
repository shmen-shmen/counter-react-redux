// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

import reducer from "../reducers/reducer.js";
import { legacy_createStore } from "redux";

const initialState = {
	days: 11,
	hours: 31,
	minutes: 27,
	seconds: 11,
	activeSession: "minutes",
};

const store = legacy_createStore(reducer, initialState);

export { store };
