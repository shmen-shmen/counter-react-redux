import "./App.css";
import { useState } from "react";

function App() {
	const [stateObj, setStateObj] = useState({
		days: 11,
		hours: 31,
		minutes: 27,
		seconds: 11,
		activeSession: "minutes",
	});

	const addOrSubtract = (e) => {
		const session = stateObj["activeSession"];
		let number = stateObj[session];
		let newStateObj = { ...stateObj };
		if (e.target.getAttribute("data-todo") === "add") {
			newStateObj[session] = number + 1;
		} else {
			newStateObj[session] = number - 1;
		}
		setStateObj(newStateObj);
	};

	return (
		<section className="app-section">
			<section className="header-section">
				<h3>BOOK NAME :</h3>
				<h1>Understanding Redux - 1</h1>
				<h3>TOTAL TIME SPENT ON PROJECT :</h3>
			</section>
			<Counter stateObj={stateObj} setStateObj={setStateObj}></Counter>
			<section className="buttons-wrapper">
				<button onClick={addOrSubtract} data-todo={"add"}>
					more▲▲▲
				</button>
				<button onClick={addOrSubtract} data-todo={"subtract"}>
					less▽▽▽
				</button>
			</section>
		</section>
	);
}

const Counter = (props) => {
	const timeValues = Object.keys(props.stateObj).filter(
		(key) => key !== "activeSession"
	);
	const sessionSelector = (e) => {
		const newSession = e.target.innerHTML;
		const newStateObj = { ...props.stateObj };
		newStateObj["activeSession"] = newSession;
		props.setStateObj(newStateObj);
	};
	return (
		<section className="counter-section">
			<div className="time-values-wrapper">
				{timeValues.map((value) => {
					return (
						<div className="time-value" key={Math.random().toString()}>
							<p className="big-number">{props.stateObj[value]}</p>
							<p
								className="number-label"
								onClick={sessionSelector}
								style={
									value === props.stateObj["activeSession"]
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

export default App;
