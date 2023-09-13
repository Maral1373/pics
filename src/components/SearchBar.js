import { useState } from "react";
import "./SearchBar.css";


function SearchBar({ onSubmit }) {
	const [value, setValue] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		onSubmit(value);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
		// console.log(e.target.value);
	};

	return (
		<div className="search-bar">
			<form onSubmit={handleFormSubmit}>
				<label>Enter Search Term</label>
				<input onChange={handleChange} value={value} />
			</form>
			{/* <button onClick={handleClick}>Click me</button> */}
		</div>
	);
}

export default SearchBar;
