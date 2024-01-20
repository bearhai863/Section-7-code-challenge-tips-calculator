import React from "react";
import Satisfaction from "./Satisfaction";

function Tips({ myTips, frnTips, updateMyTips, updateFrnTips }) {
	return (
		<div>
			<Satisfaction tips={myTips} onUpdateTips={updateMyTips}>
				How did you like the service?
			</Satisfaction>
			<Satisfaction tips={frnTips} onUpdateTips={updateFrnTips}>
				How did your friend like the service?
			</Satisfaction>
		</div>
	);
}

export default Tips;
