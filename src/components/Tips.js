import React from "react";
import Satisfaction from "./Satisfaction";

function Tips({ tips, updateTips, children }) {
	return (
		<div>
			<Satisfaction tips={tips} onUpdateTips={updateTips}>
				{children}
			</Satisfaction>
		</div>
	);
}

export default Tips;
