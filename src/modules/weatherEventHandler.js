import weatherInputHandler from "./weatherInputHandler";
import weatherApihandler from "./weatherApihandler";

const weatherEventHandler = (() => {
	const btn = document.getElementById("search-btn");
	btn.addEventListener("click", () => {
		searchCity();
	});
	const searchBox = document.getElementById("search-input");
	searchBox.addEventListener("keypress", (e) => {
		if (e.key === "Enter") {
			btn.click();
		}
	});

	async function searchCity() {
		const searchBox = document.getElementById("search-input");
		try {
			const input = await weatherInputHandler.getInput();
			console.log(input);
			const data = await weatherApihandler.getWeatherData(input);
			console.log(data);
			weatherInputHandler.displayData(data);
			searchBox.setCustomValidity("");
		} catch (error) {
			searchBox.setCustomValidity("Please enter a valid city");
			searchBox.reportValidity();
			searchBox.textContent = "";
		}
	}

	return {};
})();

export default weatherEventHandler;
