import React from "react";
import Satisfaction from "./Satisfaction";
import { useState } from "react";

function Tips() {
	const [myTips, setMyTips] = useState(0);
	const [frnTips, setFrnTips] = useState(0);

	return (
		<div>
			<Satisfaction tips={myTips} onUpdateTips={setMyTips}>
				How did you like the service?
			</Satisfaction>
			<Satisfaction tips={frnTips} onUpdateTips={setFrnTips}>
				How did your friend like the service?
			</Satisfaction>
		</div>
	);
}

export default Tips;
