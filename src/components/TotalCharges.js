import React from "react";

function TotalCharges({ totalPercentTips, bill }) {
	const totalTips = Number((bill * (totalPercentTips / 2 / 100)).toFixed(2));
	const totalCharges = bill + totalTips;

	return (
		<div>
			<h3>{`You pay $${totalCharges} ($${bill} + $${totalTips} tip)`}</h3>
		</div>
	);
}

export default TotalCharges;
