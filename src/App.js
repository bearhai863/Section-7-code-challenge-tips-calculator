import Tips from "./components/Tips";
import Bill from "./components/Bill";
import TotalCharges from "./components/TotalCharges";
import React, { useState } from "react";

export default function App() {
	const [myTips, setMyTips] = useState(0);
	const [frnTips, setFrnTips] = useState(0);
	const [bill, setBill] = useState("");

	function handleReset() {
		setMyTips(0);
		setFrnTips(0);
		setBill("");
	}

	return (
		<div className="App">
			<Bill bill={bill} updateBill={setBill} />
			<Tips tips={myTips} updateTips={setMyTips}>
				How did you like the service ?
			</Tips>
			<Tips tips={frnTips} updateTips={setFrnTips}>
				How did your friend like the service ?
			</Tips>

			{bill > 0 && (
				<>
					<TotalCharges
						totalPercentTips={myTips + frnTips}
						bill={bill}
					/>
					<button onClick={handleReset}>Reset</button>
				</>
			)}
		</div>
	);
}
