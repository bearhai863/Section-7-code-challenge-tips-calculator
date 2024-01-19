import Tips from "./components/Tips";
import Bill from "./components/Bill";
import TotalCharges from "./components/TotalCharges";

export default function App() {
	return (
		<div className="App">
            <Bill />
			<Tips/>
            <TotalCharges/>
		</div>
	);
}
