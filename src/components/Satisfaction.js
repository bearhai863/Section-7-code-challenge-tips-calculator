import React from "react";

function Satisfaction({ tips, onUpdateTips, children }) {

	return (
		<div>
			<p>
				{children}
				<select value={tips} onChange={(e) => onUpdateTips(e.target.value)}>
					<option value={0}>Dissatisfied(0%)</option>
					<option value={5}>It was okay(5%)</option>
					<option value={10}>It was good(10%)</option>
					<option value={20}>Absolutely Amazing(20%)</option>
				</select>
			</p>
		</div>
	);
}

export default Satisfaction;
