import weatherEventHandler from "./weatherEventHandler";

const weatherApihandler = (() => {
	async function getWeatherData(cityName) {
		const url = buildLocationUrl(cityName);

		let response = await fetch(url, { mode: "cors" });
		if (response.status !== 200) {
			throw new Error(response.status);
		} else {
			const data = await response.json();
			return data;
		}
	}

	const buildLocationUrl = (cityName = "Auckland") => {
		return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=f2cac786360dcbdab66d346e21f80e14&units=Metric`;
	};

	return {
		getWeatherData,
	};
})();

export default weatherApihandler;
