function Bill({ bill, updateBill }) {
	return (
		<div>
			<p>
				How much was the bill ?
				<input
					type="text"
                    placeholder="Bill Value"
					value={bill}
					onChange={(e) => {
						updateBill(Number(e.target.value));
					}}
				/>
			</p>
		</div>
	);
}

export default Bill;
