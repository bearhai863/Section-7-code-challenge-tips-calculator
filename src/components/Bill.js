import React, { useState } from "react";

function Bill() {
	const [bill, setBill] = useState(0);

	return (
		<div>
			<p>
				How much was the bill ?
				<input
					type="text"
					value={bill}
					onChange={(e) => {
						setBill(Number(e.target.value));
					}}
				/>
			</p>
		</div>
	);
}

export default Bill;
