import Tips from "./components/Tips";
import Bill from "./components/Bill";
import TotalCharges from "./components/TotalCharges";
import React, { useState } from "react";

export default function App() {
	const [myTips, setMyTips] = useState(0);
	const [frnTips, setFrnTips] = useState(0);
	const [bill, setBill] = useState(0);

	function handleReset() {
		setMyTips(0);
		setFrnTips(0);
		setBill(0);
	}

	return (
		<div className="App">
			<Bill bill={bill} updateBill={setBill} />
			<Tips
				myTips={myTips}

				updateMyTips={setMyTips}
				updateFrnTips={setFrnTips}
			/>
			<TotalCharges totalPercentTips={myTips + frnTips} bill={bill} />
			<button onClick={handleReset}>Reset</button>
		</div>
	);
}
