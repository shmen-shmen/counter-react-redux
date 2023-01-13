import "./App.css";
import { useState } from "react";
import { store } from "./app/store.js";

function App() {
	const newStateObj = store.getState();
	const [stateObj, setStateObj] = useState({
		days: 11,
		hours: 31,
		minutes: 27,
		seconds: 11,
		activeSession: "minutes",
	});

	const addOrSubtract = (e) => {
		const activeSession = newStateObj["activeSession"];
		let value = newStateObj[activeSession];
		const operation = e.target.getAttribute("data-operation");

		operation === "plus" ? value++ : value--;

		return store.dispatch({
			type: "CHANGING_VALUE",
			payload: {
				session: activeSession,
				newValue: value,
			},
		});
	};

	return (
		<section className="app-section">
			<Header></Header>
			<Counter stateObj={stateObj} setStateObj={setStateObj}></Counter>
			<Buttons addOrSubtract={addOrSubtract}></Buttons>
		</section>
	);
}

const Header = () => {
	return (
		<section className="header-section">
			<h3>BOOK NAME :</h3>
			<h1>Understanding Redux - 1</h1>
			<h3>TOTAL TIME SPENT ON PROJECT :</h3>
		</section>
	);
};

const Counter = (props) => {
	const stateObj = store.getState();

	const timeValues = Object.keys(stateObj).filter(
		(key) => key !== "activeSession"
	);

	const sessionSelector = (e) => {
		const newActiveSession = e.target.innerHTML;

		return store.dispatch({
			type: "CHANGING_ACTIVE_SESSION",
			payload: {
				newActiveSession: newActiveSession,
			},
		});
	};

	return (
		<section className="counter-section">
			<div className="time-values-wrapper">
				{timeValues.map((value) => {
					return (
						<div className="time-value" key={Math.random().toString().slice(2)}>
							<p className="big-number">{stateObj[value]}</p>
							<p
								className="number-label"
								onClick={sessionSelector}
								style={
									value === stateObj["activeSession"]
										? { color: "red" }
										: { color: "white" }
								}
							>
								{value}
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

const Buttons = (props) => {
	return (
		<section className="buttons-wrapper">
			<button onClick={props.addOrSubtract} data-operation={"plus"}>
				more▲▲▲
			</button>
			<button onClick={props.addOrSubtract} data-operation={"minus"}>
				less▽▽▽
			</button>
		</section>
	);
};

export default App;
