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
		try {
			const input = await weatherInputHandler.getInput();
			const data = await weatherApihandler.getWeatherData(input);
			weatherInputHandler.displayData(data);
		} catch (error) {
			const input = document.getElementById("search-input");
			if (input.value != "") {
				input.setCustomValidity("City not found");
				input.reportValidity();
				setTimeout(() => {
					resetInput();
					input.setCustomValidity("");
				}, 2000);
			}
		}
	}

	const resetInput = () => {
		document.getElementById("search-input").value = "";
	};

	return {};
})();

export default weatherEventHandler;
